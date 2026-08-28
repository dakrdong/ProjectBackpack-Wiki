((root) => {
  "use strict";

  const clone = (value) => JSON.parse(JSON.stringify(value));
  const escapeHtml = (value) => String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
  const numberValue = (value, fallback = 0) => {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  };

  function combatStats(catalog) {
    return (catalog?.databases || []).find((database) => database.id === "combat-stats")?.rows || [];
  }

  function conditionLabel(condition, nodes, branches) {
    if (condition.type === "node_level") {
      const node = nodes.find((candidate) => candidate.id === condition.node_id);
      return `${node?.code || condition.node_id} ${condition.level}레벨`;
    }
    if (condition.type === "branch_points") {
      const branch = branches.find((candidate) => candidate.id === condition.branch_id);
      return `${branch?.code || condition.branch_id} 계열 ${condition.points}포인트`;
    }
    return `캐릭터 ${condition.level}레벨`;
  }

  function parentCandidates(nodes, currentNode) {
    if (!currentNode) return [];
    return nodes.filter((node) => node.id !== currentNode.id && node.branch_id === currentNode.branch_id);
  }

  class MasteryEditor {
    constructor(catalog, combatCatalog) {
      this.catalog = catalog;
      this.stats = combatStats(combatCatalog);
      this.document = this.documentFromCatalog(catalog);
      this.editable = false;
      this.dirty = false;
      this.saving = false;
      this.notice = "";
      this.activeBranchId = this.document.branches[0]?.id || "";
      this.selectedNodeId = this.document.nodes.find((node) => node.branch_id === this.activeBranchId)?.id || "";
      this.root = null;
      this.dragState = null;
      this.panState = null;
      this.zoom = 1;
      this.minimumZoom = 0.5;
      this.maximumZoom = 2;
    }

    documentFromCatalog(catalog) {
      const { schema_version, title, description, branches, nodes } = catalog;
      return clone({ schema_version, title, description, branches, nodes });
    }

    setEditable(editable) {
      this.editable = Boolean(editable);
    }

    activeBranch() {
      return this.document.branches.find((branch) => branch.id === this.activeBranchId) || this.document.branches[0];
    }

    selectedNode() {
      return this.document.nodes.find((node) => node.id === this.selectedNodeId) || null;
    }

    markDirty(message = "저장하지 않은 변경사항이 있습니다.") {
      this.dirty = true;
      this.notice = message;
    }

    statOptions(selectedId) {
      const groups = new Map();
      this.stats.forEach((stat) => {
        const group = stat.group || "기타";
        if (!groups.has(group)) groups.set(group, []);
        groups.get(group).push(stat);
      });
      return [...groups.entries()].map(([group, stats]) => `
        <optgroup label="${escapeHtml(group)}">
          ${stats.map((stat) => `<option value="${escapeHtml(stat.id)}" ${stat.id === selectedId ? "selected" : ""}>${escapeHtml(stat.name)} · ${escapeHtml(stat.id)}</option>`).join("")}
        </optgroup>
      `).join("");
    }

    nodeOptions(selectedId, currentId = "") {
      return this.document.nodes
        .filter((node) => node.id !== currentId)
        .map((node) => `<option value="${escapeHtml(node.id)}" ${node.id === selectedId ? "selected" : ""}>${escapeHtml(node.code)} · ${escapeHtml(node.name)}</option>`)
        .join("");
    }

    branchOptions(selectedId) {
      return this.document.branches
        .map((branch) => `<option value="${escapeHtml(branch.id)}" ${branch.id === selectedId ? "selected" : ""}>${escapeHtml(branch.code)} · ${escapeHtml(branch.name)}</option>`)
        .join("");
    }

    renderCondition(condition, index, node) {
      const disabled = this.editable ? "" : "disabled";
      let fields = "";
      if (condition.type === "node_level") {
        fields = `
          <label><span>선행 스킬</span><select data-condition-key="node_id" ${disabled}>${this.nodeOptions(condition.node_id, node.id)}</select></label>
          <label><span>필요 레벨</span><input data-condition-key="level" type="number" min="1" max="99" value="${condition.level}" ${disabled}></label>
        `;
      } else if (condition.type === "branch_points") {
        fields = `
          <label><span>대상 계열</span><select data-condition-key="branch_id" ${disabled}>${this.branchOptions(condition.branch_id)}</select></label>
          <label><span>누적 포인트</span><input data-condition-key="points" type="number" min="1" max="9999" value="${condition.points}" ${disabled}></label>
        `;
      } else {
        fields = `<label><span>캐릭터 레벨</span><input data-condition-key="level" type="number" min="1" max="100" value="${condition.level}" ${disabled}></label>`;
      }
      return `
        <div class="mastery-condition" data-condition-index="${index}">
          <label class="mastery-condition-type"><span>조건 종류</span><select data-condition-type ${disabled}>
            <option value="node_level" ${condition.type === "node_level" ? "selected" : ""}>상위 스킬 레벨</option>
            <option value="branch_points" ${condition.type === "branch_points" ? "selected" : ""}>계열 누적 포인트</option>
            <option value="character_level" ${condition.type === "character_level" ? "selected" : ""}>캐릭터 레벨</option>
          </select></label>
          ${fields}
          ${this.editable ? `<button type="button" class="mastery-condition-remove" data-remove-condition="${index}" aria-label="해제 조건 삭제">×</button>` : ""}
        </div>
      `;
    }

    renderNodePanel() {
      const node = this.selectedNode();
      if (!node) return `<aside class="mastery-inspector"><div class="mastery-empty">트리에서 스킬을 선택하면 능력치와 해제 조건을 편집할 수 있습니다.</div></aside>`;
      const stat = this.stats.find((candidate) => candidate.id === node.stat_id);
      const disabled = this.editable ? "" : "disabled";
      const parentIds = new Set(node.parents);
      const conditions = node.unlock.conditions;
      return `
        <aside class="mastery-inspector">
          <header style="--mastery-accent:${escapeHtml(this.document.branches.find((branch) => branch.id === node.branch_id)?.color || "#45d6ca")}">
            <span>${escapeHtml(node.code)}</span>
            <div><h2>${escapeHtml(node.name)}</h2><small>${escapeHtml(node.id)}</small></div>
          </header>
          <div class="mastery-inspector-scroll">
            <section class="mastery-form-section">
              <div class="mastery-section-title"><strong>스킬 정보</strong><span>플레이어가 보는 이름과 성장량</span></div>
              <div class="mastery-form-grid two">
                <label><span>표시 코드</span><input data-node-field="code" value="${escapeHtml(node.code)}" maxlength="20" ${disabled}></label>
                <label><span>최대 레벨</span><input data-node-field="max_level" type="number" min="1" max="99" value="${node.max_level}" ${disabled}></label>
              </div>
              <label><span>스킬 이름</span><input data-node-field="name" value="${escapeHtml(node.name)}" maxlength="60" ${disabled}></label>
              <label><span>설명</span><textarea data-node-field="description" rows="3" maxlength="280" ${disabled}>${escapeHtml(node.description)}</textarea></label>
              <label><span>계열</span><select data-node-field="branch_id" ${disabled}>${this.branchOptions(node.branch_id)}</select></label>
            </section>
            <section class="mastery-form-section">
              <div class="mastery-section-title"><strong>부여 능력치</strong><span>전투 능력치 DB의 ${this.stats.length}개 항목과 직접 연결</span></div>
              <label><span>능력치</span><select data-node-field="stat_id" ${disabled}>${this.statOptions(node.stat_id)}</select></label>
              <div class="mastery-stat-contract"><strong>${escapeHtml(stat?.name || node.stat_id)}</strong><code>${escapeHtml(node.stat_id)}</code><p>${escapeHtml(stat?.decision || "전투 능력치 DB에서 정의된 계산 규칙을 따릅니다.")}</p></div>
              <div class="mastery-form-grid two">
                <label><span>레벨당 수치</span><input data-node-field="stat_value_per_level" type="number" step="0.1" value="${node.stat_value_per_level}" ${disabled}></label>
                <label><span>표시 단위</span><input data-node-field="stat_unit" value="${escapeHtml(node.stat_unit)}" maxlength="16" ${disabled}></label>
              </div>
            </section>
            <section class="mastery-form-section">
              <div class="mastery-section-title"><strong>상하 연결</strong><span>트리에 표시할 상위 노드를 선택</span></div>
              <div class="mastery-parent-list">
                ${parentCandidates(this.document.nodes, node).map((candidate) => `
                  <label><input type="checkbox" data-parent-id="${escapeHtml(candidate.id)}" ${parentIds.has(candidate.id) ? "checked" : ""} ${disabled}><span><strong>${escapeHtml(candidate.code)}</strong>${escapeHtml(candidate.name)}</span></label>
                `).join("")}
              </div>
            </section>
            <section class="mastery-form-section">
              <div class="mastery-section-title"><strong>해제 조건</strong><span>조건이 여러 개면 결합 방식을 선택</span></div>
              <label><span>조건 결합</span><select data-unlock-mode ${disabled}><option value="all" ${node.unlock.mode === "all" ? "selected" : ""}>모든 조건 충족</option><option value="any" ${node.unlock.mode === "any" ? "selected" : ""}>조건 중 하나 충족</option></select></label>
              <div class="mastery-condition-list">${conditions.length ? conditions.map((condition, index) => this.renderCondition(condition, index, node)).join("") : '<p class="mastery-root-note">조건 없음 · 처음부터 투자할 수 있는 시작 스킬</p>'}</div>
              ${this.editable ? '<button type="button" class="mastery-add-condition" data-add-condition>＋ 해제 조건 추가</button>' : ""}
            </section>
            ${this.editable ? '<button type="button" class="mastery-delete-node" data-delete-node>이 스킬 삭제</button>' : ""}
          </div>
        </aside>
      `;
    }

    renderBranches() {
      return this.document.branches.map((branch) => {
        const nodeCount = this.document.nodes.filter((node) => node.branch_id === branch.id).length;
        const active = branch.id === this.activeBranchId;
        return `
          <article class="mastery-branch-card ${active ? "active" : ""}" style="--mastery-accent:${escapeHtml(branch.color)}" data-branch-id="${escapeHtml(branch.id)}">
            <button type="button" data-select-branch="${escapeHtml(branch.id)}"><i></i><span><strong>${escapeHtml(branch.code)} · ${escapeHtml(branch.name)}</strong><small>${nodeCount}개 스킬</small></span></button>
            ${active && this.editable ? `<div class="mastery-branch-fields"><input data-branch-field="code" value="${escapeHtml(branch.code)}" aria-label="계열 코드" maxlength="12"><input data-branch-field="name" value="${escapeHtml(branch.name)}" aria-label="계열 이름" maxlength="40"><input data-branch-field="color" type="color" value="${escapeHtml(branch.color)}" aria-label="계열 색상">${nodeCount === 0 ? '<button type="button" data-delete-branch>삭제</button>' : ""}</div>` : ""}
          </article>
        `;
      }).join("");
    }

    renderTree() {
      const branch = this.activeBranch();
      const nodes = this.document.nodes.filter((node) => node.branch_id === branch?.id);
      const visibleIds = new Set(nodes.map((node) => node.id));
      const width = Math.max(1120, ...nodes.map((node) => node.position.x + 260));
      const height = Math.max(760, ...nodes.map((node) => node.position.y + 220));
      const scaledWidth = Math.round(width * this.zoom);
      const scaledHeight = Math.round(height * this.zoom);
      const paths = [];
      nodes.forEach((node) => {
        node.parents.filter((parentId) => visibleIds.has(parentId)).forEach((parentId) => {
          const parent = nodes.find((candidate) => candidate.id === parentId);
          const x1 = parent.position.x + 100;
          const y1 = parent.position.y + 142;
          const x2 = node.position.x + 100;
          const y2 = node.position.y;
          const middle = (y1 + y2) / 2;
          paths.push(`<path d="M ${x1} ${y1} C ${x1} ${middle}, ${x2} ${middle}, ${x2} ${y2}"></path>`);
        });
      });
      return `
        <div class="mastery-tree-controls" role="group" aria-label="마스터리 트리 확대와 축소">
          <button type="button" data-mastery-zoom-out aria-label="트리 축소" ${this.zoom <= this.minimumZoom ? "disabled" : ""}>−</button>
          <button type="button" class="mastery-zoom-value" data-mastery-zoom-reset aria-label="트리 배율 100퍼센트로 초기화">${Math.round(this.zoom * 100)}%</button>
          <button type="button" data-mastery-zoom-in aria-label="트리 확대" ${this.zoom >= this.maximumZoom ? "disabled" : ""}>＋</button>
          <button type="button" class="mastery-zoom-fit" data-mastery-zoom-fit>전체 보기</button>
        </div>
        <div class="mastery-canvas-scroll" data-mastery-canvas-scroll>
          <div class="mastery-canvas-stage" style="width:${scaledWidth}px;height:${scaledHeight}px" data-mastery-canvas-stage data-base-width="${width}" data-base-height="${height}">
            <div class="mastery-canvas" style="width:${width}px;height:${height}px;transform:scale(${this.zoom});--mastery-accent:${escapeHtml(branch?.color || "#45d6ca")}" data-mastery-canvas>
              <svg class="mastery-links" viewBox="0 0 ${width} ${height}" aria-hidden="true">${paths.join("")}</svg>
              ${nodes.map((node) => {
              const selected = node.id === this.selectedNodeId;
              const stat = this.stats.find((candidate) => candidate.id === node.stat_id);
              const unlockSummary = node.unlock.conditions.length
                ? node.unlock.conditions.map((condition) => conditionLabel(condition, this.document.nodes, this.document.branches)).join(node.unlock.mode === "all" ? " + " : " 또는 ")
                : "시작 스킬";
              return `
                <button type="button" class="mastery-node ${selected ? "selected" : ""}" style="left:${node.position.x}px;top:${node.position.y}px" data-node-id="${escapeHtml(node.id)}" data-node-drag>
                  <span class="mastery-node-code">${escapeHtml(node.code)}</span><span class="mastery-node-level">MAX ${node.max_level}</span>
                  <strong>${escapeHtml(node.name)}</strong>
                  <small>${escapeHtml(stat?.name || node.stat_id)} <b>+${node.stat_value_per_level}${escapeHtml(node.stat_unit)}</b> / Lv</small>
                  <em>${escapeHtml(unlockSummary)}</em>
                </button>
              `;
              }).join("")}
            </div>
          </div>
        </div>
      `;
    }

    render(rootElement) {
      this.root = rootElement;
      const previousScroll = this.root.querySelector("[data-mastery-canvas-scroll]");
      const scroll = previousScroll ? { left: previousScroll.scrollLeft, top: previousScroll.scrollTop } : { left: 0, top: 0 };
      const branch = this.activeBranch();
      const revision = this.catalog?.revision || "—";
      this.root.innerHTML = `
        <div class="mastery-db-layout">
          <header class="mastery-hero">
            <div><span class="page-eyebrow">CHARACTER GROWTH DATABASE</span><h1>${escapeHtml(this.document.title)}</h1><p>${escapeHtml(this.document.description)}</p></div>
            <div class="mastery-hero-meta"><strong>${this.document.nodes.length}</strong><span>SKILLS · ${this.document.branches.length} BRANCHES</span><small>revision ${escapeHtml(revision)}</small></div>
          </header>
          <section class="mastery-guide" aria-label="마스터리 편집 안내"><div><strong>① 계열 선택</strong><span>편집할 성장 방향을 고릅니다.</span></div><div><strong>② 노드 연결</strong><span>상위 노드를 골라 트리 선을 만듭니다.</span></div><div><strong>③ 해제 조건</strong><span>레벨·계열 포인트 조건을 조합합니다.</span></div></section>
          <div class="mastery-toolbar">
            <div><strong style="--mastery-accent:${escapeHtml(branch?.color || "#45d6ca")}">${escapeHtml(branch?.code || "")} · ${escapeHtml(branch?.name || "")}</strong><span>${this.editable ? "노드를 끌면 위치가 바뀌고, 빈 배경을 끌면 화면이 이동합니다." : "빈 배경을 끌어서 마스터리 트리 전체를 둘러볼 수 있습니다."}</span></div>
            <div>${this.editable ? '<button type="button" data-add-node>＋ 스킬 추가</button><button type="button" class="primary" data-save-mastery>전체 저장</button>' : '<span class="mastery-readonly">READ ONLY</span>'}</div>
          </div>
          ${this.notice ? `<div class="mastery-notice ${this.dirty ? "dirty" : ""}" role="status">${escapeHtml(this.notice)}</div>` : ""}
          <div class="mastery-workspace">
            <aside class="mastery-branches"><header><strong>마스터리 계열</strong>${this.editable ? '<button type="button" data-add-branch aria-label="계열 추가">＋</button>' : ""}</header><div>${this.renderBranches()}</div></aside>
            <section class="mastery-tree-panel">${this.renderTree()}</section>
            ${this.renderNodePanel()}
          </div>
        </div>
      `;
      const canvasScroll = this.root.querySelector("[data-mastery-canvas-scroll]");
      if (canvasScroll) {
        canvasScroll.scrollLeft = scroll.left;
        canvasScroll.scrollTop = scroll.top;
      }
      this.bind();
    }

    defaultCondition(type, node) {
      if (type === "branch_points") return { type, branch_id: node.branch_id, points: 30 };
      if (type === "character_level") return { type, level: 10 };
      const candidate = this.document.nodes.find((entry) => entry.id !== node.id && entry.branch_id === node.branch_id)
        || this.document.nodes.find((entry) => entry.id !== node.id);
      return { type: "node_level", node_id: candidate?.id || "", level: Math.min(5, candidate?.max_level || 1) };
    }

    setZoom(nextZoom) {
      const scroll = this.root.querySelector("[data-mastery-canvas-scroll]");
      const stage = this.root.querySelector("[data-mastery-canvas-stage]");
      const canvas = this.root.querySelector("[data-mastery-canvas]");
      if (!scroll || !stage || !canvas) return;
      const oldZoom = this.zoom;
      const logicalCenterX = (scroll.scrollLeft + scroll.clientWidth / 2) / oldZoom;
      const logicalCenterY = (scroll.scrollTop + scroll.clientHeight / 2) / oldZoom;
      this.zoom = Math.max(this.minimumZoom, Math.min(this.maximumZoom, Math.round(nextZoom * 100) / 100));
      const baseWidth = Number(stage.dataset.baseWidth);
      const baseHeight = Number(stage.dataset.baseHeight);
      stage.style.width = `${Math.round(baseWidth * this.zoom)}px`;
      stage.style.height = `${Math.round(baseHeight * this.zoom)}px`;
      canvas.style.transform = `scale(${this.zoom})`;
      const value = this.root.querySelector("[data-mastery-zoom-reset]");
      if (value) value.textContent = `${Math.round(this.zoom * 100)}%`;
      const out = this.root.querySelector("[data-mastery-zoom-out]");
      const input = this.root.querySelector("[data-mastery-zoom-in]");
      if (out) out.disabled = this.zoom <= this.minimumZoom;
      if (input) input.disabled = this.zoom >= this.maximumZoom;
      scroll.scrollLeft = logicalCenterX * this.zoom - scroll.clientWidth / 2;
      scroll.scrollTop = logicalCenterY * this.zoom - scroll.clientHeight / 2;
    }

    fitTree() {
      const scroll = this.root.querySelector("[data-mastery-canvas-scroll]");
      const stage = this.root.querySelector("[data-mastery-canvas-stage]");
      if (!scroll || !stage) return;
      const baseWidth = Number(stage.dataset.baseWidth);
      const baseHeight = Number(stage.dataset.baseHeight);
      const fitZoom = Math.min(
        (scroll.clientWidth - 28) / baseWidth,
        (scroll.clientHeight - 28) / baseHeight,
        1,
      );
      this.setZoom(Math.max(this.minimumZoom, fitZoom));
      scroll.scrollLeft = Math.max(0, (baseWidth * this.zoom - scroll.clientWidth) / 2);
      scroll.scrollTop = Math.max(0, (baseHeight * this.zoom - scroll.clientHeight) / 2);
    }

    addBranch() {
      let index = this.document.branches.length + 1;
      let id = `branch_${index}`;
      while (this.document.branches.some((branch) => branch.id === id)) id = `branch_${++index}`;
      const code = String.fromCharCode(65 + Math.min(this.document.branches.length, 25));
      this.document.branches.push({ id, code, name: `새 ${code} 계열`, color: "#8b6ee8" });
      this.activeBranchId = id;
      this.selectedNodeId = "";
      this.markDirty("새 마스터리 계열을 추가했습니다.");
      this.render(this.root);
    }

    addNode() {
      const branch = this.activeBranch();
      if (!branch) return;
      const branchNodes = this.document.nodes.filter((node) => node.branch_id === branch.id);
      let index = branchNodes.length + 1;
      let id = `mastery_${branch.code.toLowerCase()}_${index}`;
      while (this.document.nodes.some((node) => node.id === id)) id = `mastery_${branch.code.toLowerCase()}_${++index}`;
      const node = {
        id,
        code: `${branch.code}-${index}`,
        branch_id: branch.id,
        name: "새 마스터리 스킬",
        description: "플레이어가 이해할 수 있는 스킬 역할을 입력하세요.",
        max_level: 5,
        position: { x: 90 + ((index - 1) % 3) * 300, y: 80 + Math.floor((index - 1) / 3) * 230 },
        stat_id: this.stats[0]?.id || "AttackPower",
        stat_value_per_level: 1,
        stat_unit: "%",
        parents: [],
        unlock: { mode: "all", conditions: [] },
      };
      this.document.nodes.push(node);
      this.selectedNodeId = id;
      this.markDirty("새 마스터리 스킬을 추가했습니다.");
      this.render(this.root);
    }

    async save() {
      if (!this.editable || this.saving) return;
      this.saving = true;
      this.notice = "전체 트리와 해제 조건을 검증하는 중입니다…";
      this.render(this.root);
      try {
        const response = await fetch("/api/mastery-db/save", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ document: this.document }),
        });
        const payload = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(payload.error || `저장에 실패했습니다. (${response.status})`);
        this.catalog = payload.catalog;
        this.document = this.documentFromCatalog(payload.catalog);
        this.dirty = false;
        this.notice = `저장 완료 · revision ${payload.revision}`;
      } catch (error) {
        this.notice = String(error.message || error);
      } finally {
        this.saving = false;
        this.render(this.root);
      }
    }

    bindDrag() {
      if (!this.editable) return;
      this.root.querySelectorAll("[data-node-drag]").forEach((element) => {
        element.addEventListener("pointerdown", (event) => {
          if (event.button !== 0) return;
          const node = this.document.nodes.find((candidate) => candidate.id === element.dataset.nodeId);
          if (!node) return;
          this.selectedNodeId = node.id;
          this.dragState = {
            element,
            node,
            pointerId: event.pointerId,
            clientX: event.clientX,
            clientY: event.clientY,
            x: node.position.x,
            y: node.position.y,
            moved: false,
          };
          element.setPointerCapture(event.pointerId);
          element.classList.add("dragging");
        });
        element.addEventListener("pointermove", (event) => {
          const state = this.dragState;
          if (!state || state.pointerId !== event.pointerId || state.element !== element) return;
          const dx = (event.clientX - state.clientX) / this.zoom;
          const dy = (event.clientY - state.clientY) / this.zoom;
          if (Math.abs(dx) + Math.abs(dy) > 4) state.moved = true;
          const nextX = Math.max(10, Math.min(3800, Math.round(state.x + dx)));
          const nextY = Math.max(10, Math.min(3800, Math.round(state.y + dy)));
          state.node.position = { x: nextX, y: nextY };
          element.style.left = `${nextX}px`;
          element.style.top = `${nextY}px`;
        });
        element.addEventListener("pointerup", (event) => {
          const state = this.dragState;
          if (!state || state.pointerId !== event.pointerId || state.element !== element) return;
          element.releasePointerCapture(event.pointerId);
          element.classList.remove("dragging");
          this.dragState = null;
          if (state.moved) this.markDirty("스킬 위치를 변경했습니다.");
          this.render(this.root);
        });
      });
    }

    bindPan() {
      const scroll = this.root.querySelector("[data-mastery-canvas-scroll]");
      if (!scroll) return;
      const finishPan = (event) => {
        const state = this.panState;
        if (!state || state.pointerId !== event.pointerId) return;
        try {
          if (scroll.hasPointerCapture(event.pointerId)) scroll.releasePointerCapture(event.pointerId);
        } catch (_error) {
          // Pointer capture is an enhancement; panning still works when a browser omits it.
        }
        scroll.classList.remove("panning");
        this.panState = null;
      };
      scroll.addEventListener("pointerdown", (event) => {
        if (event.button !== 0 || event.target.closest("[data-node-drag]")) return;
        this.panState = {
          pointerId: event.pointerId,
          clientX: event.clientX,
          clientY: event.clientY,
          left: scroll.scrollLeft,
          top: scroll.scrollTop,
        };
        try {
          scroll.setPointerCapture(event.pointerId);
        } catch (_error) {
          // Keep direct dragging available in browsers without pointer capture support.
        }
        scroll.classList.add("panning");
        event.preventDefault();
      });
      scroll.addEventListener("pointermove", (event) => {
        const state = this.panState;
        if (!state || state.pointerId !== event.pointerId) return;
        scroll.scrollLeft = state.left - (event.clientX - state.clientX);
        scroll.scrollTop = state.top - (event.clientY - state.clientY);
        event.preventDefault();
      });
      scroll.addEventListener("pointerup", finishPan);
      scroll.addEventListener("pointercancel", finishPan);
      scroll.addEventListener("lostpointercapture", (event) => {
        if (this.panState?.pointerId !== event.pointerId) return;
        scroll.classList.remove("panning");
        this.panState = null;
      });
    }

    bind() {
      this.root.querySelector("[data-mastery-zoom-out]")?.addEventListener("click", () => this.setZoom(this.zoom - 0.1));
      this.root.querySelector("[data-mastery-zoom-reset]")?.addEventListener("click", () => this.setZoom(1));
      this.root.querySelector("[data-mastery-zoom-in]")?.addEventListener("click", () => this.setZoom(this.zoom + 0.1));
      this.root.querySelector("[data-mastery-zoom-fit]")?.addEventListener("click", () => this.fitTree());
      this.root.querySelectorAll("[data-select-branch]").forEach((button) => button.addEventListener("click", () => {
        this.activeBranchId = button.dataset.selectBranch;
        this.selectedNodeId = this.document.nodes.find((node) => node.branch_id === this.activeBranchId)?.id || "";
        this.render(this.root);
      }));
      this.root.querySelectorAll("[data-node-id]").forEach((button) => button.addEventListener("click", () => {
        if (this.dragState?.moved) return;
        this.selectedNodeId = button.dataset.nodeId;
        this.render(this.root);
      }));
      this.bindPan();
      if (!this.editable) return;
      this.root.querySelector("[data-add-branch]")?.addEventListener("click", () => this.addBranch());
      this.root.querySelector("[data-add-node]")?.addEventListener("click", () => this.addNode());
      this.root.querySelector("[data-save-mastery]")?.addEventListener("click", () => void this.save());
      this.root.querySelector("[data-delete-branch]")?.addEventListener("click", () => {
        const branch = this.activeBranch();
        if (!branch || this.document.nodes.some((node) => node.branch_id === branch.id)) return;
        this.document.branches = this.document.branches.filter((entry) => entry.id !== branch.id);
        this.activeBranchId = this.document.branches[0]?.id || "";
        this.markDirty("빈 마스터리 계열을 삭제했습니다.");
        this.render(this.root);
      });
      this.root.querySelectorAll("[data-branch-field]").forEach((input) => input.addEventListener("change", () => {
        const branch = this.activeBranch();
        if (!branch) return;
        branch[input.dataset.branchField] = input.value;
        this.markDirty();
        this.render(this.root);
      }));
      this.root.querySelectorAll("[data-node-field]").forEach((input) => input.addEventListener("change", () => {
        const node = this.selectedNode();
        if (!node) return;
        const key = input.dataset.nodeField;
        node[key] = ["max_level", "stat_value_per_level"].includes(key) ? numberValue(input.value, 1) : input.value;
        if (key === "branch_id") {
          this.activeBranchId = node.branch_id;
          const validParentIds = new Set(parentCandidates(this.document.nodes, node).map((parent) => parent.id));
          node.parents = node.parents.filter((parentId) => validParentIds.has(parentId));
        }
        this.markDirty();
        this.render(this.root);
      }));
      this.root.querySelectorAll("[data-parent-id]").forEach((input) => input.addEventListener("change", () => {
        const node = this.selectedNode();
        if (!node) return;
        const parentId = input.dataset.parentId;
        node.parents = input.checked ? [...new Set([...node.parents, parentId])] : node.parents.filter((id) => id !== parentId);
        this.markDirty("스킬의 상하 연결을 변경했습니다.");
        this.render(this.root);
      }));
      this.root.querySelector("[data-unlock-mode]")?.addEventListener("change", (event) => {
        const node = this.selectedNode();
        if (!node) return;
        node.unlock.mode = event.target.value;
        this.markDirty();
        this.render(this.root);
      });
      this.root.querySelector("[data-add-condition]")?.addEventListener("click", () => {
        const node = this.selectedNode();
        if (!node) return;
        node.unlock.conditions.push(this.defaultCondition("node_level", node));
        this.markDirty("새 해제 조건을 추가했습니다.");
        this.render(this.root);
      });
      this.root.querySelectorAll("[data-remove-condition]").forEach((button) => button.addEventListener("click", () => {
        const node = this.selectedNode();
        if (!node) return;
        node.unlock.conditions.splice(Number(button.dataset.removeCondition), 1);
        this.markDirty("해제 조건을 삭제했습니다.");
        this.render(this.root);
      }));
      this.root.querySelectorAll("[data-condition-index]").forEach((row) => {
        const index = Number(row.dataset.conditionIndex);
        row.querySelector("[data-condition-type]")?.addEventListener("change", (event) => {
          const node = this.selectedNode();
          if (!node) return;
          node.unlock.conditions[index] = this.defaultCondition(event.target.value, node);
          this.markDirty();
          this.render(this.root);
        });
        row.querySelectorAll("[data-condition-key]").forEach((input) => input.addEventListener("change", () => {
          const node = this.selectedNode();
          if (!node) return;
          const condition = node.unlock.conditions[index];
          const key = input.dataset.conditionKey;
          condition[key] = ["level", "points"].includes(key) ? numberValue(input.value, 1) : input.value;
          this.markDirty();
          this.render(this.root);
        }));
      });
      this.root.querySelector("[data-delete-node]")?.addEventListener("click", () => {
        const node = this.selectedNode();
        if (!node) return;
        this.document.nodes = this.document.nodes.filter((entry) => entry.id !== node.id);
        this.document.nodes.forEach((entry) => {
          entry.parents = entry.parents.filter((parentId) => parentId !== node.id);
          entry.unlock.conditions = entry.unlock.conditions.filter((condition) => condition.type !== "node_level" || condition.node_id !== node.id);
        });
        this.selectedNodeId = this.document.nodes.find((entry) => entry.branch_id === this.activeBranchId)?.id || "";
        this.markDirty("스킬과 그 스킬을 참조하던 연결·조건을 삭제했습니다.");
        this.render(this.root);
      });
      this.bindDrag();
    }
  }

  function createEditor(catalog, combatCatalog) {
    return new MasteryEditor(catalog, combatCatalog);
  }

  const api = { combatStats, conditionLabel, parentCandidates, createEditor };
  root.PACKBOUND_MASTERY_DB_TOOLS = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
