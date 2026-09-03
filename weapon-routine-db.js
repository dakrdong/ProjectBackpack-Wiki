((root) => {
  "use strict";

  const clone = (value) => JSON.parse(JSON.stringify(value));
  const escapeHtml = (value) => String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  function formatNumber(value) {
    if (typeof value !== "number") return String(value ?? "");
    return Number.isInteger(value) ? String(value) : String(Math.round(value * 10000) / 10000);
  }

  // Reads one edited parameter back into the type the source expects.
  function coerceValue(parameter, raw) {
    if (parameter.type === "choice") {
      const match = parameter.choices.find((choice) => String(choice.value) === String(raw));
      return match ? match.value : parameter.value;
    }
    const parsed = Number(raw);
    if (!Number.isFinite(parsed)) return null;
    return parameter.type === "integer" ? Math.round(parsed) : parsed;
  }

  // Values that differ from the saved catalog for one routine.
  function changedValues(routine, draft) {
    const changes = {};
    routine.parameters.forEach((parameter) => {
      const next = draft[parameter.key];
      if (next !== undefined && next !== parameter.value) changes[parameter.key] = next;
    });
    return changes;
  }

  function validateDraft(routine, draft) {
    const problems = [];
    routine.parameters.forEach((parameter) => {
      const value = draft[parameter.key] ?? parameter.value;
      if (parameter.type === "choice") return;
      if (typeof value !== "number" || !Number.isFinite(value)) {
        problems.push(`${parameter.label}: 숫자가 필요합니다.`);
      } else if (value < parameter.min || value > parameter.max) {
        problems.push(`${parameter.label}: ${formatNumber(parameter.min)}~${formatNumber(parameter.max)} 범위여야 합니다.`);
      }
    });
    return problems;
  }

  async function copyPlainText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.top = "-1000px";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const copied = document.execCommand("copy");
    area.remove();
    if (!copied) throw new Error("브라우저가 클립보드 복사를 거부했습니다.");
  }

  function downloadPlainText(filename, text) {
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  class WeaponRoutineEditor {
    constructor(catalog) {
      this.catalog = catalog;
      this.editable = false;
      this.saving = false;
      this.notice = "";
      this.drafts = {};
      this.filter = "all";
      this.query = "";
      this.root = null;
      this.bake = null;
    }

    dirtyCount() {
      return (this.catalog?.routines || []).reduce((total, routine) => total + Object.keys(changedValues(routine, this.draftFor(routine))).length, 0);
    }

    // Studio keeps its own copy of the generated module, so a saved edit reaches
    // the game only after this script is run once in the Studio Command Bar.
    async openBake() {
      if (!this.editable || this.bake) return;
      this.bake = { loading: true, payload: null, error: "", status: "" };
      this.renderBake();
      try {
        const response = await fetch("/api/weapon-routine-db/bake", { headers: { Accept: "application/json" }, cache: "no-store" });
        const payload = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(payload.error || `굽기에 실패했습니다. (${response.status})`);
        if (this.bake) this.bake.payload = payload;
      } catch (error) {
        if (this.bake) this.bake.error = String(error.message || error);
      }
      if (!this.bake) return;
      this.bake.loading = false;
      this.renderBake();
    }

    closeBake() {
      document.getElementById("routine-bake-backdrop")?.remove();
      document.body.classList.remove("itemdb-editor-open");
      this.bake = null;
    }

    renderBake() {
      const state = this.bake;
      if (!state) return;
      let backdrop = document.getElementById("routine-bake-backdrop");
      if (!backdrop) {
        document.body.insertAdjacentHTML("beforeend", `
          <div id="routine-bake-backdrop" class="itemdb-editor-backdrop">
            <section class="itemdb-editor-dialog itemdb-bake-dialog" role="dialog" aria-modal="true" aria-labelledby="routine-bake-title">
              <header>
                <div><span>DATABASE → GAME</span><h2 id="routine-bake-title">게임에 굽기</h2><code>ReplicatedStorage.Combat.GeneratedWeaponRoutines</code></div>
                <button type="button" class="itemdb-editor-close" data-routine-bake-close aria-label="굽기 창 닫기">×</button>
              </header>
              <div class="itemdb-bake-body"></div>
            </section>
          </div>
        `);
        document.body.classList.add("itemdb-editor-open");
        backdrop = document.getElementById("routine-bake-backdrop");
        backdrop.addEventListener("click", (event) => {
          if (event.target.id === "routine-bake-backdrop") this.closeBake();
        });
        backdrop.querySelector("[data-routine-bake-close]").addEventListener("click", () => this.closeBake());
      }
      const body = backdrop.querySelector(".itemdb-bake-body");
      if (state.loading) {
        body.innerHTML = '<p class="itemdb-bake-status">현재 루틴 DB로 적용 스크립트를 만드는 중…</p>';
        return;
      }
      if (state.error) {
        body.innerHTML = `<p class="itemdb-bake-status" data-tone="error" role="alert">${escapeHtml(state.error)}</p>`;
        return;
      }
      const payload = state.payload;
      const unsaved = this.dirtyCount();
      body.innerHTML = `
        <div class="itemdb-bake-summary">
          <div><span>루틴 DB 리비전</span><code>${escapeHtml(payload.revision)}</code></div>
          <div><span>무기 / 수치</span><strong>${Number(payload.count)}종 / ${Number(payload.parameter_count)}개</strong></div>
        </div>
        ${unsaved ? `<p class="itemdb-bake-status" data-tone="error">저장하지 않은 변경 ${unsaved}개는 이 스크립트에 포함되지 않습니다. 먼저 저장해 주세요.</p>` : ""}
        <ol class="itemdb-bake-steps">
          <li>Studio가 실행 중이면 <strong>정지(Stop)</strong>해 Edit 모드로 돌아갑니다.</li>
          <li><strong>적용 스크립트 복사</strong>를 누르고 Studio 명령 창(Command Bar)에 붙여넣은 뒤 Enter를 누릅니다.</li>
          <li>출력 창에 <code>→ ${escapeHtml(payload.revision)}</code> 가 찍히면 플레이스를 저장하고 다시 Play 합니다.</li>
        </ol>
        <p class="itemdb-bake-note">스크립트는 <code>${escapeHtml(payload.module_container)}.GeneratedWeaponRoutines</code> 모듈 하나만 새 수치로 바꿉니다. 무기의 움직임 규칙 자체(회전·내리치기 등)는 코드에 있으므로 바뀌지 않고, 수치만 새로 읽힙니다. 명령 창을 쓰기 어렵다면 <strong>모듈 소스 복사</strong>로 그 모듈을 열어 전체를 바꿔도 결과는 같습니다.</p>
        <div class="itemdb-bake-actions">
          <button type="button" class="primary" data-routine-bake-copy="script">적용 스크립트 복사</button>
          <button type="button" data-routine-bake-copy="module">모듈 소스 복사</button>
          <button type="button" data-routine-bake-download>.luau 내려받기</button>
        </div>
        <p class="itemdb-bake-status" data-tone="${state.status ? "ok" : "info"}" role="status">${escapeHtml(state.status
          || "게임 안의 리비전이 이 값과 같아질 때까지는 예전 수치가 그대로 쓰입니다.")}</p>
      `;
      body.querySelectorAll("[data-routine-bake-copy]").forEach((button) => {
        button.addEventListener("click", async () => {
          const wantsScript = button.dataset.routineBakeCopy === "script";
          try {
            await copyPlainText(wantsScript ? payload.script : payload.module_source);
            state.status = wantsScript
              ? "적용 스크립트를 복사했습니다. Studio 명령 창에 붙여넣고 Enter를 누르세요."
              : `모듈 소스를 복사했습니다. ${payload.module_container}.GeneratedWeaponRoutines 전체를 이 내용으로 바꾸세요.`;
          } catch (error) {
            state.status = `클립보드 복사에 실패했습니다. 내려받기를 사용해 주세요. (${String(error.message || error)})`;
          }
          this.renderBake();
        });
      });
      body.querySelector("[data-routine-bake-download]").addEventListener("click", () => {
        downloadPlainText(payload.filename, payload.script);
        state.status = `${payload.filename} 파일을 내려받았습니다.`;
        this.renderBake();
      });
    }

    setEditable(editable) {
      this.editable = Boolean(editable);
    }

    routines() {
      const normalized = this.query.trim().toLocaleLowerCase("ko-KR");
      return (this.catalog?.routines || []).filter((routine) => {
        if (this.filter !== "all" && routine.family !== this.filter) return false;
        if (!normalized) return true;
        return [routine.display_name, routine.item_id, routine.kind, routine.kind_label, routine.summary]
          .join(" ")
          .toLocaleLowerCase("ko-KR")
          .includes(normalized);
      });
    }

    draftFor(routine) {
      if (!this.drafts[routine.item_id]) this.drafts[routine.item_id] = {};
      return this.drafts[routine.item_id];
    }

    renderParameter(routine, parameter) {
      const draft = this.draftFor(routine);
      const current = draft[parameter.key] ?? parameter.value;
      const dirty = draft[parameter.key] !== undefined && draft[parameter.key] !== parameter.value;
      const disabled = this.editable ? "" : "disabled";
      let control;
      if (parameter.type === "choice") {
        control = `<select data-routine-parameter="${escapeHtml(parameter.key)}" ${disabled}>${parameter.choices
          .map((choice) => `<option value="${escapeHtml(choice.value)}" ${String(choice.value) === String(current) ? "selected" : ""}>${escapeHtml(choice.label)}</option>`)
          .join("")}</select>`;
      } else {
        control = `<input data-routine-parameter="${escapeHtml(parameter.key)}" type="number" inputmode="decimal"
          min="${escapeHtml(parameter.min)}" max="${escapeHtml(parameter.max)}" step="${escapeHtml(parameter.step)}"
          value="${escapeHtml(formatNumber(current))}" ${disabled}>`;
      }
      const range = parameter.type === "choice"
        ? parameter.choices.map((choice) => choice.label).join(" / ")
        : `${formatNumber(parameter.min)} ~ ${formatNumber(parameter.max)}${parameter.unit ? ` ${escapeHtml(parameter.unit)}` : ""}`;
      return `
        <tr class="routine-parameter ${dirty ? "dirty" : ""}" data-routine-parameter-row="${escapeHtml(parameter.key)}">
          <th scope="row">
            <strong>${escapeHtml(parameter.label)}</strong>
            <code>${escapeHtml(parameter.key)}</code>
          </th>
          <td class="routine-parameter-control">${control}<span>${escapeHtml(parameter.unit || "")}</span></td>
          <td class="routine-parameter-range">${range}</td>
          <td class="routine-parameter-description">${escapeHtml(parameter.description)}</td>
        </tr>`;
    }

    renderRoutine(routine) {
      const draft = this.draftFor(routine);
      const changes = changedValues(routine, draft);
      const changeCount = Object.keys(changes).length;
      const problems = validateDraft(routine, draft);
      return `
        <article class="routine-card ${changeCount ? "dirty" : ""}" data-routine-card="${escapeHtml(routine.item_id)}">
          <header>
            <div>
              <span class="routine-family ${routine.family === "Attack" ? "attack" : "support"}">${routine.family === "Attack" ? "공격 무기" : "보조 무기"}</span>
              <h2>${escapeHtml(routine.display_name)}</h2>
              <p>${escapeHtml(routine.summary)}</p>
              <small><code>${escapeHtml(routine.item_id)}</code> · 루틴 <strong>${escapeHtml(routine.kind_label)}</strong> (<code>${escapeHtml(routine.kind)}</code>) · 수치 ${routine.parameters.length}개</small>
            </div>
            <div class="routine-card-actions">
              ${this.editable
                ? `<button type="button" data-routine-reset ${changeCount ? "" : "disabled"}>되돌리기</button>
                   <button type="button" class="primary" data-routine-save ${changeCount && !problems.length && !this.saving ? "" : "disabled"}>${this.saving ? "저장 중…" : `저장${changeCount ? ` (${changeCount})` : ""}`}</button>`
                : '<span class="routine-readonly">읽기 전용 · 로컬 위키 서버에서 편집</span>'}
            </div>
          </header>
          ${problems.length ? `<div class="routine-problems">${problems.map((problem) => `<div>${escapeHtml(problem)}</div>`).join("")}</div>` : ""}
          <table class="routine-parameters">
            <thead><tr><th>수치</th><th>값</th><th>허용 범위</th><th>설명</th></tr></thead>
            <tbody>${routine.parameters.map((parameter) => this.renderParameter(routine, parameter)).join("")}</tbody>
          </table>
        </article>`;
    }

    render(target) {
      this.root = target;
      const catalog = this.catalog;
      const routines = this.routines();
      target.innerHTML = `
        <div class="routine-db-layout">
          <section class="routine-hero">
            <div>
              <span class="eyebrow">WEAPON ROUTINE DB</span>
              <h1>${escapeHtml(catalog.title)}</h1>
              <p>${escapeHtml(catalog.description)}</p>
            </div>
            <div class="routine-hero-meta">
              <strong>${catalog.count}</strong>
              <span>WEAPONS · ${catalog.parameter_count} VALUES</span>
              <small>revision ${escapeHtml(catalog.revision)}</small>
            </div>
          </section>
          <section class="routine-guide">
            <div><strong>무기마다 고유 루틴</strong><span>공격 ${catalog.attack_count}종·보조 ${catalog.support_count}종이 각자 다른 움직임과 판정을 가집니다. 값만 바꾸고 종류는 바꾸지 않습니다.</span></div>
            <div><strong>저장하면 런타임이 다시 생성</strong><span>저장은 허용 범위·단계 비중·시간 합을 검증한 뒤 JSON 원본과 GeneratedWeaponRoutines.luau를 함께 갱신합니다.</span></div>
            <div><strong>Studio 적용은 별도</strong><span>생성 모듈은 저장소 파일입니다. 열려 있는 Studio 플레이스에는 ScriptEditorService로 한 번 적용해야 반영됩니다.</span></div>
          </section>
          <section class="routine-toolbar">
            <div class="routine-filters">
              ${["all", "Attack", "Support"].map((family) => `<button type="button" data-routine-filter="${family}" class="${this.filter === family ? "active" : ""}">${family === "all" ? "전체" : family === "Attack" ? "공격 무기" : "보조 무기"}</button>`).join("")}
            </div>
            <input type="search" data-routine-search placeholder="무기 이름·루틴 종류 검색" value="${escapeHtml(this.query)}">
            ${this.editable ? '<button type="button" class="itemdb-bake-button" data-routine-bake title="저장된 루틴 수치를 Studio에 적용하는 스크립트를 만듭니다">게임에 굽기</button>' : ""}
          </section>
          ${this.notice ? `<div class="routine-notice ${this.notice.startsWith("저장 완료") ? "" : "dirty"}">${escapeHtml(this.notice)}</div>` : ""}
          <section class="routine-cards">${routines.map((routine) => this.renderRoutine(routine)).join("") || '<div class="empty-state">검색 결과가 없습니다.</div>'}</section>
        </div>`;
      this.bind(target);
    }

    bind(target) {
      target.querySelectorAll("[data-routine-filter]").forEach((button) => {
        button.addEventListener("click", () => {
          this.filter = button.dataset.routineFilter;
          this.render(target);
        });
      });
      const bakeButton = target.querySelector("[data-routine-bake]");
      if (bakeButton) bakeButton.addEventListener("click", () => void this.openBake());
      const search = target.querySelector("[data-routine-search]");
      if (search) {
        search.addEventListener("input", () => {
          this.query = search.value;
          const cards = target.querySelector(".routine-cards");
          if (cards) {
            cards.innerHTML = this.routines().map((routine) => this.renderRoutine(routine)).join("") || '<div class="empty-state">검색 결과가 없습니다.</div>';
            this.bindCards(target);
          }
        });
      }
      this.bindCards(target);
    }

    bindCards(target) {
      target.querySelectorAll("[data-routine-card]").forEach((card) => {
        const routine = this.catalog.routines.find((candidate) => candidate.item_id === card.dataset.routineCard);
        if (!routine) return;
        card.querySelectorAll("[data-routine-parameter]").forEach((control) => {
          const parameter = routine.parameters.find((candidate) => candidate.key === control.dataset.routineParameter);
          if (!parameter) return;
          control.addEventListener("change", () => {
            const value = coerceValue(parameter, control.value);
            const draft = this.draftFor(routine);
            if (value === null) delete draft[parameter.key];
            else draft[parameter.key] = value;
            this.refreshCard(card, routine);
          });
        });
        const reset = card.querySelector("[data-routine-reset]");
        if (reset) {
          reset.addEventListener("click", () => {
            this.drafts[routine.item_id] = {};
            this.refreshCard(card, routine);
          });
        }
        const save = card.querySelector("[data-routine-save]");
        if (save) save.addEventListener("click", () => void this.save(routine));
      });
    }

    refreshCard(card, routine) {
      const replacement = document.createElement("div");
      replacement.innerHTML = this.renderRoutine(routine);
      const next = replacement.firstElementChild;
      card.replaceWith(next);
      this.bindCards(this.root);
    }

    async save(routine) {
      if (!this.editable || this.saving) return;
      const draft = this.draftFor(routine);
      const values = changedValues(routine, draft);
      if (!Object.keys(values).length) return;
      const problems = validateDraft(routine, draft);
      if (problems.length) {
        this.notice = problems.join(" ");
        this.render(this.root);
        return;
      }
      this.saving = true;
      this.notice = `${routine.display_name} 루틴 수치를 검증하고 런타임 모듈을 다시 생성하는 중입니다…`;
      this.render(this.root);
      try {
        const response = await fetch("/api/weapon-routine-db/save", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ item_id: routine.item_id, values }),
        });
        const payload = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(payload.error || `저장에 실패했습니다. (${response.status})`);
        this.catalog = payload.catalog;
        this.drafts[routine.item_id] = {};
        this.notice = `저장 완료 · ${routine.display_name} · revision ${payload.revision}`;
      } catch (error) {
        this.notice = String(error.message || error);
      } finally {
        this.saving = false;
        this.render(this.root);
      }
    }
  }

  function createEditor(catalog) {
    if (!catalog || !Array.isArray(catalog.routines)) return null;
    return new WeaponRoutineEditor(clone(catalog));
  }

  const api = { WeaponRoutineEditor, changedValues, coerceValue, createEditor, formatNumber, validateDraft };
  root.PACKBOUND_WEAPON_ROUTINE_DB_TOOLS = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
