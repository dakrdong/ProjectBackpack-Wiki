(() => {
  "use strict";

  const wiki = window.PACKBOUND_WIKI;
  const itemDb = window.PACKBOUND_ITEM_DB;
  const itemDbTools = window.PACKBOUND_ITEM_DB_TOOLS;
  const combatDb = window.PACKBOUND_COMBAT_DB;
  const combatDbTools = window.PACKBOUND_COMBAT_DB_TOOLS;
  const tagExplorer = window.PACKBOUND_TAG_EXPLORER;
  const localAccess = window.PACKBOUND_LOCAL_ACCESS;
  const markdownMedia = window.PACKBOUND_MARKDOWN_MEDIA;
  const wikiTimeline = window.PACKBOUND_WIKI_TIMELINE;
  const main = document.getElementById("main-content");
  const navigation = document.getElementById("page-navigation");
  const sidebarTabWiki = document.getElementById("sidebar-tab-wiki");
  const sidebarTabDb = document.getElementById("sidebar-tab-db");
  const sidebarHeadingLabel = document.getElementById("sidebar-heading-label");
  const sidebarFooterTitle = document.getElementById("sidebar-footer-title");
  const searchDialog = document.getElementById("search-dialog");
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");
  const dateFilterPanel = document.getElementById("date-filter");
  const dateFilterFrom = document.getElementById("date-filter-from");
  const dateFilterTo = document.getElementById("date-filter-to");
  const dateFilterClear = document.getElementById("date-filter-clear");
  const dateFilterSummary = document.getElementById("date-filter-summary");
  const searchModeButtons = [...document.querySelectorAll("[data-search-mode]")];
  const tagToolbar = document.getElementById("tag-toolbar");
  const tagCount = document.getElementById("tag-count");
  const tagSortButtons = [...document.querySelectorAll("[data-tag-sort]")];
  const publicWikiLink = document.getElementById("public-wiki-link");
  const imageViewer = document.getElementById("image-viewer");
  const imageViewerScrim = document.getElementById("image-viewer-scrim");
  const imageViewerImage = document.getElementById("image-viewer-image");
  const imageViewerCaption = document.getElementById("image-viewer-caption");
  const wikiThemeHero = "theme/packbound-wiki-hero.webp";
  const itemDbEditorRadius = 2;
  const itemDbHexCellWidth = 2 / Math.sqrt(3);
  const itemDbHexColumnStep = Math.sqrt(3) / 2;
  const itemDbEditorStageWidth = itemDbHexCellWidth + itemDbEditorRadius * 2 * itemDbHexColumnStep;
  const itemDbEditorStageHeight = itemDbEditorRadius * 2 + 1;
  const itemDbEditorOriginX = itemDbEditorRadius * itemDbHexColumnStep + itemDbHexCellWidth / 2;
  const itemDbEditorOriginY = itemDbEditorRadius + 0.5;
  const itemDbEffectSlots = ["A", "B", "C"];
  const itemDbEffectPadding = 5;
  const legacyLocalHostKey = `canUse${"Ro"}${"jo"}Control`;
  const localHostCheck = typeof localAccess?.isLocalHost === "function"
    ? localAccess.isLocalHost
    : localAccess?.[legacyLocalHostKey];
  const hasLocalAccess = typeof localHostCheck === "function"
    && Boolean(localHostCheck(window.location.hostname));
  const canShowExactTimestamps = Boolean(localAccess?.shouldShowExactTimestamps(window.location.hostname));
  const canEditItemDb = hasLocalAccess;
  let searchMode = "pages";
  let tagSort = "recent";
  let selectedTag = null;
  let itemDbQuery = "";
  let itemDbFamily = "all";
  let itemDbEditorState = null;
  let itemDbBakeState = null;
  let itemDbNotice = "";
  let structuredDbState = { databaseId: null, query: "", filters: {} };
  let imageViewerReturnFocus = null;
  let dateRange = { from: "", to: "" };
  let filteredPages = wiki?.pages || [];
  let tagIndex = [];
  let tagByName = new Map();
  const categoryLabels = {
    project: "프로젝트",
    architecture: "아키텍처",
    gameplay: "게임플레이",
    system: "시스템",
    tooling: "도구와 운영",
    art: "아트와 에셋",
    design: "디자인",
  };
  const statusLabels = {
    active: "활성",
    draft: "초안",
    deprecated: "지원 종료",
    archived: "보관됨",
  };
  const changeLabels = {
    created: "최초 작성",
    updated: "기능 갱신",
    corrected: "내용 정정",
    deprecated: "지원 종료",
  };

  if (!wiki || !Array.isArray(wiki.pages)) {
    main.innerHTML = '<div class="empty-state">위키 데이터가 없습니다. <code>python3 tools/wiki.py build</code>를 실행하세요.</div>';
    return;
  }
  if (!tagExplorer) {
    main.innerHTML = '<div class="empty-state">태그 탐색 모듈을 불러오지 못했습니다.</div>';
    return;
  }
  if (!markdownMedia) {
    main.innerHTML = '<div class="empty-state">위키 이미지 모듈을 불러오지 못했습니다.</div>';
    return;
  }
  if (!wikiTimeline) {
    main.innerHTML = '<div class="empty-state">위키 시간순 탐색 모듈을 불러오지 못했습니다.</div>';
    return;
  }
  if (!combatDb || !combatDbTools) {
    main.innerHTML = '<div class="empty-state">전투 DB 모듈을 불러오지 못했습니다. <code>python3 tools/wiki.py build</code>를 실행하세요.</div>';
    return;
  }

  const pageById = new Map(wiki.pages.map((page) => [page.id, page]));
  const defaultPage = pageById.has("project-overview") ? "project-overview" : wiki.pages[0]?.id;

  function dateRangeLabel() {
    const { from, to } = dateRange;
    if (from && to) return `${from} – ${to}`;
    if (from) return `${from} 이후`;
    if (to) return `${to} 이전`;
    return "전체 기간";
  }

  function rebuildSearchScope() {
    filteredPages = tagExplorer.filterPagesByDate(wiki.pages, dateRange);
    tagIndex = tagExplorer.buildTagIndex(filteredPages);
    tagByName = new Map(tagIndex.map((entry) => [entry.normalized, entry]));
    if (selectedTag) selectedTag = tagByName.get(selectedTag.normalized) || null;
    tagCount.textContent = tagIndex.length;
    dateFilterSummary.textContent = `${dateRangeLabel()} · ${filteredPages.length}개 문서`;
    const active = Boolean(dateRange.from || dateRange.to);
    dateFilterPanel.classList.toggle("active", active);
    dateFilterClear.disabled = !active;
  }

  rebuildSearchScope();

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function safeHref(value) {
    const href = String(value || "").trim();
    if (/^(https?:\/\/|#|\/|\.\.?\/)/i.test(href)) return escapeHtml(href);
    return "#";
  }

  function slugify(value) {
    return String(value)
      .toLowerCase()
      .trim()
      .replace(/[^\p{L}\p{N}]+/gu, "-")
      .replace(/^-|-$/g, "");
  }

  function inlineMarkdown(source) {
    const tokens = [];
    let text = String(source);
    text = text.replace(/`([^`]+)`/g, (_, code) => {
      const token = `\u0000CODE${tokens.length}\u0000`;
      tokens.push(`<code>${escapeHtml(code)}</code>`);
      return token;
    });
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
      const token = `\u0000LINK${tokens.length}\u0000`;
      const safe = safeHref(href);
      tokens.push(safe === "#" ? escapeHtml(label) : `<a href="${safe}">${escapeHtml(label)}</a>`);
      return token;
    });
    text = escapeHtml(text)
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/__([^_]+)__/g, "<strong>$1</strong>")
      .replace(/(^|\s)\*([^*]+)\*(?=\s|$|[.,])/g, "$1<em>$2</em>");
    return text.replace(/\u0000(?:CODE|LINK)(\d+)\u0000/g, (_, index) => tokens[Number(index)]);
  }

  function splitTableRow(line) {
    return line.trim().replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim());
  }

  function isTableDivider(line) {
    return /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line);
  }

  function isBlockStart(lines, index) {
    const line = lines[index] || "";
    if (!line.trim()) return true;
    if (markdownMedia.isImageLine(line)) return true;
    if (/^```/.test(line) || /^#{1,6}\s/.test(line) || /^>\s?/.test(line)) return true;
    if (/^\s*([-*+] |\d+\. )/.test(line) || /^\s*(-{3,}|\*{3,})\s*$/.test(line)) return true;
    return line.includes("|") && isTableDivider(lines[index + 1] || "");
  }

  function renderMarkdown(markdown) {
    const lines = String(markdown || "").replace(/\r\n/g, "\n").split("\n");
    const output = [];
    let index = 0;

    while (index < lines.length) {
      const line = lines[index];
      if (!line.trim()) {
        index += 1;
        continue;
      }

      const image = markdownMedia.renderImageLine(line);
      if (image !== null) {
        output.push(image);
        index += 1;
        continue;
      }

      const fence = line.match(/^```\s*([\w-]+)?\s*$/);
      if (fence) {
        const code = [];
        index += 1;
        while (index < lines.length && !/^```\s*$/.test(lines[index])) {
          code.push(lines[index]);
          index += 1;
        }
        index += 1;
        output.push(`<pre data-language="${escapeHtml(fence[1] || "text")}"><code>${escapeHtml(code.join("\n"))}</code></pre>`);
        continue;
      }

      const heading = line.match(/^(#{1,6})\s+(.+)$/);
      if (heading) {
        const level = heading[1].length;
        output.push(`<h${level} id="${escapeHtml(slugify(heading[2]))}">${inlineMarkdown(heading[2])}</h${level}>`);
        index += 1;
        continue;
      }

      if (/^\s*(-{3,}|\*{3,})\s*$/.test(line)) {
        output.push("<hr>");
        index += 1;
        continue;
      }

      if (/^>\s?/.test(line)) {
        const quote = [];
        while (index < lines.length && /^>\s?/.test(lines[index])) {
          quote.push(lines[index].replace(/^>\s?/, ""));
          index += 1;
        }
        output.push(`<blockquote>${quote.map(inlineMarkdown).join("<br>")}</blockquote>`);
        continue;
      }

      if (line.includes("|") && isTableDivider(lines[index + 1] || "")) {
        const header = splitTableRow(line);
        index += 2;
        const rows = [];
        while (index < lines.length && lines[index].includes("|") && lines[index].trim()) {
          rows.push(splitTableRow(lines[index]));
          index += 1;
        }
        output.push(
          `<table><thead><tr>${header.map((cell) => `<th>${inlineMarkdown(cell)}</th>`).join("")}</tr></thead>` +
          `<tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${inlineMarkdown(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table>`
        );
        continue;
      }

      const unordered = line.match(/^\s*[-*+]\s+(.+)$/);
      const ordered = line.match(/^\s*\d+\.\s+(.+)$/);
      if (unordered || ordered) {
        const tag = unordered ? "ul" : "ol";
        const matcher = unordered ? /^\s*[-*+]\s+(.+)$/ : /^\s*\d+\.\s+(.+)$/;
        const items = [];
        while (index < lines.length) {
          const match = lines[index].match(matcher);
          if (!match) break;
          const itemLines = [match[1]];
          index += 1;
          while (
            index < lines.length &&
            lines[index].trim() &&
            !matcher.test(lines[index]) &&
            /^\s{2,}\S/.test(lines[index])
          ) {
            itemLines.push(lines[index].trim());
            index += 1;
          }
          items.push(`<li>${inlineMarkdown(itemLines.join(" "))}</li>`);
        }
        output.push(`<${tag}>${items.join("")}</${tag}>`);
        continue;
      }

      const paragraph = [line.trim()];
      index += 1;
      while (index < lines.length && !isBlockStart(lines, index)) {
        paragraph.push(lines[index].trim());
        index += 1;
      }
      output.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
    }

    return output.join("\n");
  }

  function formatDate(value, withTime = false) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return escapeHtml(value);
    const showTime = withTime && canShowExactTimestamps;
    return new Intl.DateTimeFormat("ko-KR", {
      year: "numeric",
      month: "short",
      day: "numeric",
      ...(showTime ? { hour: "2-digit", minute: "2-digit" } : {}),
    }).format(date);
  }

  function readRoute() {
    const raw = location.hash.slice(1) || `/page/${defaultPage}`;
    const [path, query = ""] = raw.split("?");
    const segments = path.split("/").filter(Boolean);
    const params = new URLSearchParams(query);
    const legacyItemDb = segments[0] === "item-db";
    const kind = segments[0] === "tree" ? "tree" : segments[0] === "db" || legacyItemDb ? "database" : "page";
    return {
      kind,
      slug: decodeURIComponent(kind === "database" ? (legacyItemDb ? "item-db" : segments[1] || "item-db") : segments[1] || defaultPage || ""),
      view: params.get("view") === "history" ? "history" : "article",
      version: Number.parseInt(params.get("version") || "", 10) || null,
      treeView: wikiTimeline.normalizeView(params.get("sort")),
    };
  }

  function pageHref(slug, view = "article", version = null) {
    const params = new URLSearchParams();
    if (view === "history") params.set("view", "history");
    if (version) params.set("version", String(version));
    const query = params.toString();
    return `#/page/${encodeURIComponent(slug)}${query ? `?${query}` : ""}`;
  }

  function treeHref(view = "category") {
    const normalized = wikiTimeline.normalizeView(view);
    return normalized === "category" ? "#/tree" : `#/tree?sort=${encodeURIComponent(normalized)}`;
  }

  function databaseHref(databaseId) {
    return `#/db/${encodeURIComponent(databaseId)}`;
  }

  function itemDbHref() {
    return databaseHref("item-db");
  }

  function databaseEntries() {
    return [
      {
        id: "item-db",
        title: "아이템 데이터베이스",
        description: "이미지 · 제원 · 점유 칸",
        count: itemDb?.count || 0,
        unit: "ITEMS",
        href: itemDbHref(),
      },
      ...(combatDb.databases || []).map((database) => ({
        id: database.id,
        title: database.title,
        description: database.description,
        count: database.count,
        unit: database.unit,
        href: databaseHref(database.id),
      })),
    ];
  }

  function selectedRevision(page, version) {
    return page.revisions.find((revision) => revision.version === version) || page.revisions[0];
  }

  function renderNavigation(activeSlug, activeKind = "page") {
    const databases = databaseEntries();
    const isDatabaseMode = activeKind === "database";
    const groups = new Map();
    wiki.pages.forEach((page) => {
      if (!groups.has(page.category)) groups.set(page.category, []);
      groups.get(page.category).push(page);
    });
    sidebarTabWiki.classList.toggle("active", !isDatabaseMode);
    sidebarTabWiki.setAttribute("aria-selected", String(!isDatabaseMode));
    sidebarTabWiki.tabIndex = isDatabaseMode ? -1 : 0;
    sidebarTabWiki.querySelector("span").textContent = wiki.page_count;
    sidebarTabDb.classList.toggle("active", isDatabaseMode);
    sidebarTabDb.setAttribute("aria-selected", String(isDatabaseMode));
    sidebarTabDb.tabIndex = isDatabaseMode ? 0 : -1;
    sidebarTabDb.querySelector("span").textContent = databases.length;

    if (isDatabaseMode) {
      sidebarHeadingLabel.textContent = "DB 탐색";
      document.getElementById("page-count").textContent = `${databases.length} DATABASE${databases.length === 1 ? "" : "S"}`;
      sidebarFooterTitle.textContent = "생성 데이터 동기화";
      document.getElementById("revision-count").textContent = `총 ${databases.reduce((total, database) => total + database.count, 0)}개 레코드`;
      navigation.innerHTML = `
        <section class="nav-database-list" aria-label="데이터베이스 목록">
          ${databases.map((database) => `
            <a class="nav-database-card ${activeSlug === database.id ? "active" : ""}" href="${database.href}" data-database-id="${escapeHtml(database.id)}">
              <span class="nav-database-icon" aria-hidden="true"><i></i><i></i><i></i></span>
              <span><strong>${escapeHtml(database.title)}</strong><small>${escapeHtml(database.description)}</small></span>
              <em><strong>${database.count}</strong><small>${escapeHtml(database.unit)}</small></em>
            </a>
          `).join("")}
        </section>
      `;
      return;
    }

    sidebarHeadingLabel.textContent = "문서 탐색";
    document.getElementById("page-count").textContent = `${wiki.page_count} PAGES`;
    sidebarFooterTitle.textContent = "불변 이력 저장";
    document.getElementById("revision-count").textContent = `총 ${wiki.revision_count}개 버전 보존 중`;
    navigation.innerHTML = `
      <section class="nav-overview">
        <a class="nav-tree-link ${activeKind === "tree" ? "active" : ""}" href="${treeHref()}">
          <span class="nav-tree-icon" aria-hidden="true"><i></i><i></i><i></i></span>
          <span><strong>전체 위키 트리</strong><small>구조와 이력 한눈에 보기</small></span>
        </a>
      </section>
    ` + [...groups.entries()].map(([category, pages]) => `
      <section class="nav-group">
        <h2 class="nav-group-title">${escapeHtml(categoryLabels[category] || category)}</h2>
        ${pages.map((page) => `
          <a class="nav-link ${page.id === activeSlug ? "active" : ""}" href="${pageHref(page.id)}">
            <span>${escapeHtml(page.title)}</span><em>v${String(page.version).padStart(3, "0")}</em>
          </a>
        `).join("")}
      </section>
    `).join("");
  }

  function renderMeta(page, revision) {
    const related = (revision.related || []).map((id) => {
      const target = pageById.get(id);
      return target ? `<a href="${pageHref(id)}">${escapeHtml(target.title)}</a>` : escapeHtml(id);
    });
    return `
      <aside class="meta-panel" aria-label="문서 메타데이터">
        <section class="meta-card">
          <div class="meta-title">문서 정보</div>
          <div class="meta-row"><label>상태</label><div><span class="status-badge">${escapeHtml(statusLabels[revision.status] || revision.status)}</span></div></div>
          <div class="meta-row"><label>현재 선택</label><div>v${String(revision.version).padStart(3, "0")} · ${escapeHtml(changeLabels[revision.change_type] || revision.change_type)}</div></div>
          <div class="meta-row"><label>작성자</label><div>${revision.authors.map(escapeHtml).join(", ")}</div></div>
          <div class="meta-row"><label>최초 생성</label><div>${formatDate(revision.created_at, true)}</div></div>
          <div class="meta-row"><label>마지막 변경</label><div>${formatDate(revision.updated_at, true)}</div></div>
          <div class="meta-row"><label>태그</label><div class="tags">${revision.tags.map((tag) => `<button type="button" class="tag" data-open-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</button>`).join("")}</div></div>
        </section>
        <section class="meta-card">
          <div class="meta-title">근거와 연결</div>
          <div class="meta-row"><label>근거 파일</label><ul class="source-list">${revision.sources.length ? revision.sources.map((source) => `<li><code>${escapeHtml(source)}</code></li>`).join("") : "<li>없음</li>"}</ul></div>
          <div class="meta-row"><label>연결 문서</label><div>${related.length ? related.join("<br>") : "없음"}</div></div>
        </section>
      </aside>
    `;
  }

  function renderHeader(page, revision, route) {
    const oldVersion = revision.version !== page.version;
    return `
      <header class="page-hero">
        <img class="page-hero-art" src="${wikiThemeHero}" alt="" width="2172" height="724" decoding="async">
        <div class="page-hero-content">
          <div class="page-eyebrow">${escapeHtml(categoryLabels[revision.category] || revision.category)}</div>
          <h1 class="page-title">${escapeHtml(revision.title)}</h1>
          <p class="page-summary">${escapeHtml(revision.summary)}</p>
          <div class="page-stats">
            <span class="version-badge">v${String(revision.version).padStart(3, "0")}</span>
            <span><i></i>${formatDate(revision.updated_at, true)} 업데이트</span>
            <span><i></i>${escapeHtml(revision.change_summary)}</span>
          </div>
        </div>
      </header>
      ${oldVersion ? `<div class="history-intro page-grid-notice">과거 버전 v${String(revision.version).padStart(3, "0")}을 열람 중입니다. <a href="${pageHref(page.id)}">최신 v${String(page.version).padStart(3, "0")} 보기</a></div>` : ""}
      <nav class="view-tabs page-grid-tabs" aria-label="문서 보기 방식">
        <a class="view-tab ${route.view === "article" ? "active" : ""}" href="${pageHref(page.id, "article", route.version)}">문서</a>
        <a class="view-tab ${route.view === "history" ? "active" : ""}" href="${pageHref(page.id, "history", route.version)}">변경 이력 <span>${page.revisions.length}</span></a>
      </nav>
    `;
  }

  function lineDiff(previous, current) {
    const before = String(previous || "").split("\n");
    const after = String(current || "").split("\n");
    const matrix = Array.from({ length: before.length + 1 }, () => new Uint32Array(after.length + 1));
    for (let i = before.length - 1; i >= 0; i -= 1) {
      for (let j = after.length - 1; j >= 0; j -= 1) {
        matrix[i][j] = before[i] === after[j] ? matrix[i + 1][j + 1] + 1 : Math.max(matrix[i + 1][j], matrix[i][j + 1]);
      }
    }
    const changes = [];
    let i = 0;
    let j = 0;
    while (i < before.length && j < after.length) {
      if (before[i] === after[j]) {
        changes.push({ type: "same", line: before[i] });
        i += 1;
        j += 1;
      } else if (matrix[i + 1][j] >= matrix[i][j + 1]) {
        changes.push({ type: "removed", line: before[i] });
        i += 1;
      } else {
        changes.push({ type: "added", line: after[j] });
        j += 1;
      }
    }
    while (i < before.length) changes.push({ type: "removed", line: before[i++] });
    while (j < after.length) changes.push({ type: "added", line: after[j++] });
    return changes;
  }

  function renderHistory(page, selected) {
    const ascending = [...page.revisions].sort((a, b) => a.version - b.version);
    const previous = ascending.find((revision) => revision.version === selected.version - 1);
    const diff = previous ? lineDiff(previous.body, selected.body) : [];
    const meaningfulDiff = diff.filter((line) => line.type !== "same");
    const visibleDiff = meaningfulDiff.length > 0
      ? diff.map((line) => `<div class="diff-line ${line.type}"><span class="symbol">${line.type === "added" ? "+" : line.type === "removed" ? "−" : ""}</span><code>${escapeHtml(line.line || " ")}</code></div>`).join("")
      : '<div class="diff-empty">본문의 줄 단위 변경이 없습니다.</div>';

    return `
      <div class="history-intro">모든 버전은 독립된 Markdown 파일로 영구 보존됩니다. 카드를 선택하면 해당 버전과 바로 이전 버전의 차이를 확인할 수 있습니다.</div>
      <div class="revision-list">
        ${page.revisions.map((revision) => `
          <a class="revision-card ${revision.version === selected.version ? "active" : ""}" href="${pageHref(page.id, "history", revision.version)}">
            <span class="revision-number">v${String(revision.version).padStart(3, "0")}</span>
            <span class="revision-copy"><strong>${escapeHtml(revision.change_summary)}</strong><small>${escapeHtml(changeLabels[revision.change_type] || revision.change_type)} · ${revision.authors.map(escapeHtml).join(", ")}</small></span>
            <span class="revision-date">${formatDate(revision.updated_at, true)}</span>
          </a>
        `).join("")}
      </div>
      <div class="diff-header">
        <div><h2>${previous ? `v${String(previous.version).padStart(3, "0")} → v${String(selected.version).padStart(3, "0")}` : `v${String(selected.version).padStart(3, "0")} 최초 버전`}</h2><p>${escapeHtml(selected.change_summary)}</p></div>
        <div class="diff-legend"><span class="added">추가</span><span class="removed">삭제</span></div>
      </div>
      <div class="diff-view">${previous ? visibleDiff : '<div class="diff-empty">비교할 이전 버전이 없습니다.</div>'}</div>
      <p style="margin-top:16px"><a class="view-tab active" href="${pageHref(page.id, "article", selected.version)}">이 버전의 전체 문서 읽기</a></p>
    `;
  }

  function renderTree(viewMode = "category") {
    const normalizedView = wikiTimeline.normalizeView(viewMode);
    const isChronological = normalizedView !== "category";
    const groups = new Map();
    wiki.pages.forEach((page) => {
      if (!groups.has(page.category)) groups.set(page.category, []);
      groups.get(page.category).push(page);
    });
    const latestPage = [...wiki.pages].sort((left, right) => new Date(right.updated_at) - new Date(left.updated_at))[0];
    const activeCount = wiki.pages.filter((page) => page.status === "active").length;
    const chronologicalRevisions = isChronological
      ? wikiTimeline.sortRevisions(wiki.pages, normalizedView)
      : [];
    const viewDescriptions = {
      category: "주제와 카테고리 구조로 봅니다. 각 문서 아래에서 모든 버전을 열 수 있습니다.",
      newest: "버전이 올라간 순서를 최신부터 봅니다. 같은 문서의 v001·v002도 각각 한 줄입니다.",
      oldest: "버전이 올라간 순서를 최초부터 봅니다. 같은 문서의 v001·v002도 각각 한 줄입니다.",
    };

    const categoryBranches = [...groups.entries()].map(([category, pages]) => {
      const revisions = pages.reduce((total, page) => total + page.revisions.length, 0);
      return `
        <details class="tree-category" open>
          <summary>
            <span class="tree-toggle" aria-hidden="true"></span>
            <span class="tree-folder" aria-hidden="true"><i></i></span>
            <span class="tree-category-copy">
              <strong>${escapeHtml(categoryLabels[category] || category)}</strong>
              <small>${pages.length}개 문서 · ${revisions}개 버전</small>
            </span>
          </summary>
          <div class="tree-page-list">
            ${pages.map((page) => {
              const related = (page.related || [])
                .map((id) => pageById.get(id))
                .filter(Boolean);
              return `
                <article class="tree-page-node">
                  <a class="tree-page-main" href="${pageHref(page.id)}">
                    <span class="tree-document-icon" aria-hidden="true"><i></i><i></i><i></i></span>
                    <span class="tree-page-copy">
                      <span class="tree-page-heading">
                        <strong>${escapeHtml(page.title)}</strong>
                        <span class="status-badge">${escapeHtml(statusLabels[page.status] || page.status)}</span>
                      </span>
                      <span class="tree-page-summary">${escapeHtml(page.summary)}</span>
                      <span class="tree-page-date">${formatDate(page.updated_at, true)} 업데이트</span>
                    </span>
                    <span class="tree-open-arrow" aria-hidden="true">→</span>
                  </a>
                  <div class="tree-page-details">
                    <div class="tree-detail-row">
                      <span class="tree-detail-label">버전</span>
                      <span class="tree-version-list">
                        ${page.revisions.map((revision) => `
                          <a class="tree-version ${revision.version === page.version ? "current" : ""}" href="${pageHref(page.id, "article", revision.version)}">v${String(revision.version).padStart(3, "0")}</a>
                        `).join("")}
                        <a class="tree-history-link" href="${pageHref(page.id, "history")}">이력 비교</a>
                      </span>
                    </div>
                    <div class="tree-detail-row">
                      <span class="tree-detail-label">태그</span>
                      <span class="tree-mini-tags">${page.tags.slice(0, 4).map((tag) => `<button type="button" data-open-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</button>`).join("")}</span>
                    </div>
                    <div class="tree-detail-row">
                      <span class="tree-detail-label">연결</span>
                      <span class="tree-related-list">${related.length ? related.map((target) => `<a href="${pageHref(target.id)}">${escapeHtml(target.title)}</a>`).join("") : "연결 문서 없음"}</span>
                    </div>
                  </div>
                </article>
              `;
            }).join("")}
          </div>
        </details>
      `;
    }).join("");

    return `
      <div class="tree-layout">
        <header class="tree-hero">
          <img class="tree-hero-art" src="${wikiThemeHero}" alt="" width="2172" height="724" decoding="async">
          <div class="tree-hero-content">
            <div class="page-eyebrow">Wiki map</div>
            <div class="tree-hero-row">
              <div>
                <h1>전체 위키 트리</h1>
                <p>PackBound의 세계, 시스템과 제작 결정을 하나의 살아 있는 지도에서 탐색합니다.</p>
              </div>
              ${normalizedView === "category" ? `
                <div class="tree-actions" aria-label="트리 펼침 설정">
                  <button type="button" data-tree-action="expand">모두 펼치기</button>
                  <button type="button" data-tree-action="collapse">모두 접기</button>
                </div>
              ` : ""}
            </div>
          </div>
        </header>

        <section class="tree-stats" aria-label="위키 현황">
          <div><strong>${wiki.page_count}</strong><span>전체 문서</span></div>
          <div><strong>${groups.size}</strong><span>카테고리</span></div>
          <div><strong>${wiki.revision_count}</strong><span>보존 버전</span></div>
          <div><strong>${activeCount}</strong><span>활성 문서</span></div>
        </section>

        <section class="tree-view-toolbar" aria-labelledby="tree-view-title">
          <div class="tree-view-copy">
            <strong id="tree-view-title">보기 방식</strong>
            <p aria-live="polite">${viewDescriptions[normalizedView]}</p>
          </div>
          <div class="tree-view-options" role="group" aria-label="전체 위키 보기 방식">
            <button type="button" class="${normalizedView === "category" ? "active" : ""}" data-tree-view="category" aria-pressed="${normalizedView === "category"}">카테고리</button>
            <button type="button" class="${normalizedView === "newest" ? "active" : ""}" data-tree-view="newest" aria-pressed="${normalizedView === "newest"}">최신순</button>
            <button type="button" class="${normalizedView === "oldest" ? "active" : ""}" data-tree-view="oldest" aria-pressed="${normalizedView === "oldest"}">오래된순</button>
          </div>
        </section>

        ${isChronological ? `
          <section class="tree-chronology" aria-label="${normalizedView === "newest" ? "최신순" : "오래된순"} 전체 위키 버전 목록">
            <ol class="tree-timeline-list">
              ${chronologicalRevisions.map(({ page, revision }) => `
                <li class="tree-timeline-item">
                  <a href="${pageHref(page.id, "article", revision.version)}">
                    <time datetime="${escapeHtml(revision.updated_at)}">${formatDate(revision.updated_at, true)}</time>
                    <span class="tree-timeline-marker" aria-hidden="true"></span>
                    <span class="tree-timeline-copy">
                      <span class="tree-timeline-heading">
                        <strong>${escapeHtml(revision.title)}</strong>
                        <span class="tree-timeline-version">v${String(revision.version).padStart(3, "0")}</span>
                      </span>
                      <span class="tree-timeline-summary">${escapeHtml(revision.change_summary)}</span>
                      <span class="tree-timeline-meta">${escapeHtml(categoryLabels[revision.category] || revision.category)} · ${escapeHtml(changeLabels[revision.change_type] || revision.change_type)} · ${revision.authors.map(escapeHtml).join(", ")}</span>
                    </span>
                    <span class="tree-open-arrow" aria-hidden="true">→</span>
                  </a>
                </li>
              `).join("")}
            </ol>
          </section>
        ` : `
          <section class="tree-root" aria-label="PackBound 위키 문서 트리">
            <div class="tree-root-node">
              <span class="tree-root-mark" aria-hidden="true"><i></i><i></i><i></i></span>
              <span><strong>PackBound Development Wiki</strong><small>마지막 변경 · ${latestPage ? `${escapeHtml(latestPage.title)} · ${formatDate(latestPage.updated_at, true)}` : "없음"}</small></span>
              <span class="tree-root-count">${wiki.page_count} pages</span>
            </div>
            <div class="tree-category-list">${categoryBranches}</div>
          </section>
        `}
      </div>
    `;
  }

  function axialCenter(q, r) {
    return { x: q * itemDbHexColumnStep, y: r + q / 2 };
  }

  function axialVisualBounds(cells) {
    const centers = cells.map(([q, r]) => axialCenter(q, r));
    return {
      minX: Math.min(...centers.map((cell) => cell.x)) - itemDbHexCellWidth / 2,
      minY: Math.min(...centers.map((cell) => cell.y)) - 0.5,
      maxX: Math.max(...centers.map((cell) => cell.x)) + itemDbHexCellWidth / 2,
      maxY: Math.max(...centers.map((cell) => cell.y)) + 0.5,
    };
  }

  function centerAxialCells(cells) {
    let best = null;
    for (let deltaQ = -5; deltaQ <= 5; deltaQ += 1) {
      for (let deltaR = -5; deltaR <= 5; deltaR += 1) {
        const candidate = cells.map(([q, r]) => [q + deltaQ, r + deltaR]);
        const fits = candidate.every(([q, r]) => (
          Math.max(Math.abs(q), Math.abs(r), Math.abs(-q - r)) <= itemDbEditorRadius
        ));
        if (!fits) continue;
        const bounds = axialVisualBounds(candidate);
        const centerX = (bounds.minX + bounds.maxX) / 2;
        const centerY = (bounds.minY + bounds.maxY) / 2;
        const score = centerX ** 2 + centerY ** 2;
        if (!best || score < best.score) best = { cells: candidate, score };
      }
    }
    return best?.cells || cells.map((cell) => [...cell]);
  }

  function renderFootprint(item) {
    const occupied = new Set(item.coordinates.map(([x, y]) => `${x},${y}`));
    const cells = [];
    const cellHeight = 12;
    const bounds = axialVisualBounds(item.coordinates);
    item.coordinates.forEach(([q, r]) => {
      const center = axialCenter(q, r);
      const left = (center.x - itemDbHexCellWidth / 2 - bounds.minX) * cellHeight;
      const top = (center.y - 0.5 - bounds.minY) * cellHeight;
      cells.push(`<i class="${occupied.has(`${q},${r}`) ? "occupied" : "empty"}" style="left:${left}px;top:${top}px"></i>`);
    });
    const visualWidth = (bounds.maxX - bounds.minX) * cellHeight;
    const visualHeight = (bounds.maxY - bounds.minY) * cellHeight;
    const spans = item.axial_bounds || {};
    return `
      <div class="itemdb-footprint">
        <span class="itemdb-footprint-grid" style="width:${visualWidth + 10}px;height:${visualHeight + 10}px">${cells.join("")}</span>
        <span><strong>Q${spans.q || "–"} · R${spans.r || "–"} · S${spans.s || "–"} · ${item.occupied_cells}칸</strong><code>${escapeHtml(item.pattern)}</code></span>
      </div>
    `;
  }

  function renderItemSynergies(item) {
    if (!item.synergies?.length) return '<span class="itemdb-synergy-empty">시너지 없음</span>';
    const byId = new Map((itemDb.synergy_catalog || []).map((entry) => [entry.id, entry]));
    return `<div class="itemdb-synergy-list">${item.synergies.map((synergyId) => {
      const entry = byId.get(synergyId);
      const color = entry?.color || { r: 110, g: 140, b: 170 };
      return `<span class="itemdb-synergy-badge" style="--synergy-rgb:${color.r},${color.g},${color.b}"><strong>${escapeHtml(entry?.label || synergyId)}</strong><small>${escapeHtml(synergyId)}</small></span>`;
    }).join("")}</div>`;
  }

  function itemEffectCatalogMaps() {
    const catalog = itemDb.effect_catalog || {};
    return {
      types: new Map((catalog.types || []).map((entry) => [entry.id, entry])),
      conditions: new Map((catalog.conditions || []).map((entry) => [entry.id, entry])),
      abilities: new Map((catalog.abilities || []).map((entry) => [entry.id, entry])),
      sources: new Map((catalog.sources || []).map((entry) => [entry.id, entry])),
    };
  }

  function renderItemEffects(item) {
    const maps = itemEffectCatalogMaps();
    const activeSlots = itemDbEffectSlots
      .map((slot) => ({ slot, effect: item.effects?.[slot] }))
      .filter(({ effect }) => effect?.cells?.length);
    if (!activeSlots.length) return '<span class="itemdb-effect-empty">효과 칸 미배정</span>';
    return `<div class="itemdb-effect-list">${activeSlots.map(({ slot, effect }) => {
      const type = maps.types.get(effect.type_id);
      const conditions = effect.condition_ids?.length
        ? effect.condition_ids.map((id) => maps.conditions.get(id)?.display_name || id).join(" + ")
        : "아무 아이템";
      const abilities = (effect.ability_ids || [])
        .map((id) => maps.abilities.get(id)?.display_name || id)
        .join(" · ");
      return `
        <article data-slot="${slot}">
          <span>${slot} · ${effect.cells.length}칸 · ${escapeHtml(type?.display_name || effect.type_id)}</span>
          <strong>${escapeHtml(conditions)}</strong>
          <small>${escapeHtml(abilities)}</small>
        </article>
      `;
    }).join("")}</div>`;
  }

  function renderItemEffectCatalog() {
    const catalog = itemDb.effect_catalog || {};
    const maps = itemEffectCatalogMaps();
    const targetLabels = { SourceItem: "이 아이템", MatchingItem: "연결 아이템", Owner: "플레이어" };
    return `
      <details class="itemdb-effect-catalog" open>
        <summary>
          <span><strong>효과 칸 능력 카탈로그</strong><small>4개 게임 조사 패턴과 현재 배정 가능한 규칙</small></span>
          <em>${(catalog.research_patterns || []).length} 패턴 · ${(catalog.conditions || []).length} 조건 · ${(catalog.abilities || []).length} 능력</em>
        </summary>
        <div class="itemdb-effect-catalog-body">
          <section>
            <header><strong>리서치 패턴</strong><span>원작 수치를 복제하지 않고 구조만 분류합니다.</span></header>
            <div class="itemdb-effect-pattern-grid">${(catalog.research_patterns || []).map((pattern) => `
              <article>
                <code>${escapeHtml(pattern.id)}</code>
                <strong>${escapeHtml(pattern.display_name)}</strong>
                <p>${escapeHtml(pattern.description)}</p>
                <small>${pattern.examples.map(escapeHtml).join(" · ")}</small>
                <span>${pattern.source_ids.map((id) => {
                  const source = maps.sources.get(id);
                  return source ? `<a href="${safeHref(source.url)}" target="_blank" rel="noreferrer">${escapeHtml(source.game)}</a>` : escapeHtml(id);
                }).join(" · ")}</span>
              </article>
            `).join("")}</div>
          </section>
          <section class="itemdb-effect-assignable">
            <header><strong>에디터 배정 카탈로그</strong><span>A/B/C 슬롯은 종류 1개, 조건 0개 이상, 능력 1개 이상을 선택합니다.</span></header>
            <div class="itemdb-effect-catalog-columns">
              <div><h3>종류</h3>${(catalog.types || []).map((entry) => `<article><strong>${escapeHtml(entry.display_name)}</strong><code>${escapeHtml(entry.id)}</code><p>${escapeHtml(entry.description)}</p></article>`).join("")}</div>
              <div><h3>조건</h3>${(catalog.conditions || []).map((entry) => `<article><strong>${escapeHtml(entry.display_name)}</strong><code>${escapeHtml(entry.id)}</code><p>${escapeHtml(entry.description)}</p></article>`).join("")}</div>
              <div><h3>능력</h3>${(catalog.abilities || []).map((entry) => `<article><strong>${escapeHtml(entry.display_name)}</strong><code>${escapeHtml(entry.id)}</code><p>${escapeHtml(targetLabels[entry.target] || entry.target)} · ${escapeHtml(entry.stat)} · ${escapeHtml(entry.amount)}</p></article>`).join("")}</div>
            </div>
          </section>
        </div>
      </details>
    `;
  }

  function renderItemDbSynergyOptions(selectedSynergies) {
    const groups = new Map();
    (itemDb.synergy_catalog || []).forEach((entry) => {
      if (!groups.has(entry.family)) groups.set(entry.family, { label: entry.family_label, entries: [] });
      groups.get(entry.family).entries.push(entry);
    });
    return [...groups.values()].map((group) => `
      <section class="itemdb-editor-synergy-family">
        <h3>${escapeHtml(group.label)}</h3>
        <div class="itemdb-editor-synergy-grid">
          ${group.entries.map((entry) => {
            const selected = selectedSynergies.has(entry.id);
            const color = entry.color || { r: 110, g: 140, b: 170 };
            return `<button type="button" data-itemdb-editor-synergy="${escapeHtml(entry.id)}" aria-pressed="${selected}" style="--synergy-rgb:${color.r},${color.g},${color.b}"><span>${escapeHtml(entry.label)}</span><small>${escapeHtml(entry.id)}</small></button>`;
          }).join("")}
        </div>
      </section>
    `).join("");
  }

  function renderItemRows(items) {
    return items.map((item) => `
      <tr data-itemdb-enabled="${item.enabled}">
        <td class="itemdb-image-cell">
          <button type="button" class="itemdb-image-trigger" data-image-viewer-src="${escapeHtml(item.image_url || item.image)}" data-image-viewer-alt="${escapeHtml(item.name)} 아이템 이미지" data-image-viewer-caption="${escapeHtml(item.name)}" aria-label="${escapeHtml(item.name)} 이미지 크게 보기">
            <img src="${escapeHtml(item.image_url || item.image)}" alt="${escapeHtml(item.name)} 아이템 이미지" loading="lazy" decoding="async" style="transform:rotate(${Number(item.image_layout?.rotation_degrees || 0)}deg)">
          </button>
        </td>
        <td class="itemdb-enabled-cell">
          ${canEditItemDb
            ? `<button type="button" class="itemdb-enabled-toggle" data-itemdb-toggle="${escapeHtml(item.id)}" data-enabled="${item.enabled}" aria-pressed="${item.enabled}" aria-label="${escapeHtml(item.name)} 게임 베이크 ${item.enabled ? "끄기" : "켜기"}"><strong>${item.enabled ? "ON" : "OFF"}</strong><small>${item.enabled ? "베이크 포함" : "게임 제외"}</small></button>`
            : `<span class="itemdb-enabled-badge" data-enabled="${item.enabled}">${item.enabled ? "ON" : "OFF"}</span>`}
        </td>
        <td class="itemdb-identity"><strong>${escapeHtml(item.name)}</strong><code>${escapeHtml(item.id)}</code></td>
        <td><span class="itemdb-family-badge" data-family="${escapeHtml(item.family)}">${escapeHtml(item.family_label)}</span><small>${escapeHtml(item.type_size)}</small></td>
        <td>${renderFootprint(item)}</td>
        <td>${renderItemSynergies(item)}</td>
        <td>${renderItemEffects(item)}</td>
        <td><div class="itemdb-stats">${item.stats.map((stat) => `<span>${escapeHtml(stat)}</span>`).join("")}</div></td>
        <td class="itemdb-concept">${escapeHtml(item.concept)}</td>
        ${canEditItemDb ? `<td class="itemdb-action-cell"><button type="button" data-itemdb-edit="${escapeHtml(item.id)}">Edit</button></td>` : ""}
      </tr>
    `).join("");
  }

  function refreshItemDbCounts() {
    itemDb.active_count = itemDb.items.filter((item) => item.enabled).length;
    (itemDb.families || []).forEach((family) => {
      family.active_count = itemDb.items.filter((item) => item.family === family.id && item.enabled).length;
    });
  }

  async function toggleItemDbEnabled(itemId, button) {
    const item = itemDb.items.find((candidate) => candidate.id === itemId);
    if (!item || !canEditItemDb || button.disabled) return;
    const nextEnabled = !item.enabled;
    button.disabled = true;
    try {
      const response = await fetch("/api/item-db/toggle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ item_id: item.id, enabled: nextEnabled }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.error || `ON/OFF 저장에 실패했습니다. (${response.status})`);
      const index = itemDb.items.findIndex((candidate) => candidate.id === item.id);
      if (index >= 0) itemDb.items[index] = payload.item;
      refreshItemDbCounts();
      itemDbNotice = `${payload.item.name}을(를) ${payload.item.enabled ? "ON" : "OFF"}으로 저장했습니다. ${payload.item.enabled ? "다음 베이크에 포함됩니다." : "웹 DB에는 남지만 다음 베이크부터 게임에서 제외됩니다."}`;
      renderItemDb();
    } catch (error) {
      button.disabled = false;
      itemDbNotice = String(error.message || error);
      renderItemDb();
    }
  }

  function closeItemDbEditor() {
    document.getElementById("itemdb-editor-backdrop")?.remove();
    document.body.classList.remove("itemdb-editor-open");
    itemDbEditorState = null;
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

  function closeItemDbBake() {
    document.getElementById("itemdb-bake-backdrop")?.remove();
    if (!itemDbEditorState) document.body.classList.remove("itemdb-editor-open");
    itemDbBakeState = null;
  }

  // Studio keeps its own copy of every runtime module, so a saved database edit
  // only reaches the game once this script is applied there.
  async function openItemDbBake() {
    if (!canEditItemDb || itemDbBakeState) return;
    itemDbBakeState = { loading: true, payload: null, error: "", status: "" };
    renderItemDbBake();
    try {
      const response = await fetch("/api/item-db/bake");
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.error || `굽기에 실패했습니다. (${response.status})`);
      if (itemDbBakeState) itemDbBakeState.payload = payload;
    } catch (error) {
      if (itemDbBakeState) itemDbBakeState.error = String(error.message || error);
    }
    if (!itemDbBakeState) return;
    itemDbBakeState.loading = false;
    renderItemDbBake();
  }

  function renderItemDbBake() {
    const state = itemDbBakeState;
    if (!state) return;
    let backdrop = document.getElementById("itemdb-bake-backdrop");
    if (!backdrop) {
      document.body.insertAdjacentHTML("beforeend", `
        <div id="itemdb-bake-backdrop" class="itemdb-editor-backdrop">
          <section class="itemdb-editor-dialog itemdb-bake-dialog" role="dialog" aria-modal="true" aria-labelledby="itemdb-bake-title">
            <header>
              <div><span>DATABASE → GAME</span><h2 id="itemdb-bake-title">게임에 굽기</h2><code>ReplicatedStorage.BackpackUI</code></div>
              <button type="button" class="itemdb-editor-close" data-itemdb-bake-close aria-label="굽기 창 닫기">×</button>
            </header>
            <div class="itemdb-bake-body"></div>
          </section>
        </div>
      `);
      document.body.classList.add("itemdb-editor-open");
      backdrop = document.getElementById("itemdb-bake-backdrop");
      backdrop.addEventListener("click", (event) => {
        if (event.target.id === "itemdb-bake-backdrop") closeItemDbBake();
      });
      backdrop.querySelector("[data-itemdb-bake-close]").addEventListener("click", closeItemDbBake);
    }
    const body = backdrop.querySelector(".itemdb-bake-body");
    if (state.loading) {
      body.innerHTML = '<p class="itemdb-bake-status">현재 데이터베이스로 적용 스크립트를 만드는 중…</p>';
      return;
    }
    if (state.error) {
      body.innerHTML = `<p class="itemdb-bake-status" data-tone="error" role="alert">${escapeHtml(state.error)}</p>`;
      return;
    }
    const payload = state.payload;
    const container = String(payload.container || "ReplicatedStorage.BackpackUI");
    body.innerHTML = `
      <div class="itemdb-bake-summary">
        <div><span>DB 리비전</span><code>${escapeHtml(payload.revision)}</code></div>
        <div><span>게임 포함 / 전체</span><strong>${Number(payload.count)} / ${Number(payload.total_count ?? payload.count)}개</strong></div>
      </div>
      <ol class="itemdb-bake-steps">
        <li>Studio가 실행 중이면 <strong>정지(Stop)</strong>해 Edit 모드로 돌아갑니다.</li>
        <li><strong>적용 스크립트 복사</strong>를 누르고 Studio 명령 창(Command Bar)에 붙여넣은 뒤 Enter를 누릅니다.</li>
        <li>출력 창에 <code>→ ${escapeHtml(payload.revision)}</code> 가 찍히면 저장하고 다시 Play 합니다.</li>
      </ol>
      <p class="itemdb-bake-note">OFF 아이템은 웹 DB에는 남지만 이 게임 모듈에서는 제외됩니다. 명령 창을 쓰기 어렵다면 <strong>모듈 소스 복사</strong>를 눌러 <code>${escapeHtml(container)}.GeneratedItemLayouts</code>를 열고 전체 선택 후 붙여넣어도 결과는 같습니다.</p>
      <div class="itemdb-bake-actions">
        <button type="button" class="primary" data-itemdb-bake-copy="script">적용 스크립트 복사</button>
        <button type="button" data-itemdb-bake-copy="module">모듈 소스 복사</button>
        <button type="button" data-itemdb-bake-download>.luau 내려받기</button>
      </div>
      <p class="itemdb-bake-status" data-tone="${state.status ? "ok" : "info"}" role="status">${escapeHtml(state.status
        || "게임 안의 리비전이 이 값과 같아질 때까지는 예전 칸 형태가 그대로 쓰입니다.")}</p>
    `;
    body.querySelectorAll("[data-itemdb-bake-copy]").forEach((button) => {
      button.addEventListener("click", async () => {
        const wantsScript = button.dataset.itemdbBakeCopy === "script";
        try {
          await copyPlainText(wantsScript ? payload.script : payload.module_source);
          state.status = wantsScript
            ? "적용 스크립트를 복사했습니다. Studio 명령 창에 붙여넣고 Enter를 누르세요."
            : `모듈 소스를 복사했습니다. ${container}.GeneratedItemLayouts 전체를 이 내용으로 바꾸세요.`;
        } catch (error) {
          state.status = `클립보드 복사에 실패했습니다. 내려받기를 사용해 주세요. (${String(error.message || error)})`;
        }
        renderItemDbBake();
      });
    });
    body.querySelector("[data-itemdb-bake-download]").addEventListener("click", () => {
      downloadPlainText(payload.filename, payload.script);
      state.status = `${payload.filename} 파일을 내려받았습니다.`;
      renderItemDbBake();
    });
  }

  function editorCellKey(x, y) {
    return `${x},${y}`;
  }

  function currentEditorFootprint(state) {
    return [...state.selected].map((key) => key.split(",").map(Number));
  }

  function effectPayloadFromState(state) {
    return Object.fromEntries(itemDbEffectSlots.map((slot) => {
      const effect = state.effects[slot];
      return [slot, {
        cells: [...effect.cells].map((key) => key.split(",").map(Number)),
        type_id: effect.type_id,
        condition_ids: [...effect.condition_ids],
        ability_ids: [...effect.ability_ids],
      }];
    }));
  }

  function effectEditorBounds(footprint) {
    if (!footprint.length) {
      return {
        minQ: -itemDbEffectPadding,
        maxQ: itemDbEffectPadding,
        minR: -itemDbEffectPadding,
        maxR: itemDbEffectPadding,
      };
    }
    const qs = footprint.map(([q]) => q);
    const rs = footprint.map(([, r]) => r);
    return {
      minQ: Math.min(...qs) - itemDbEffectPadding,
      maxQ: Math.max(...qs) + itemDbEffectPadding,
      minR: Math.min(...rs) - itemDbEffectPadding,
      maxR: Math.max(...rs) + itemDbEffectPadding,
    };
  }

  function pruneEffectCellsToFootprint(state) {
    const footprint = currentEditorFootprint(state);
    if (!footprint.length) return;
    const bounds = effectEditorBounds(footprint);
    const footprintKeys = new Set(footprint.map(([q, r]) => editorCellKey(q, r)));
    itemDbEffectSlots.forEach((slot) => {
      [...state.effects[slot].cells].forEach((key) => {
        const [q, r] = key.split(",").map(Number);
        if (footprintKeys.has(key)
          || q < bounds.minQ || q > bounds.maxQ || r < bounds.minR || r > bounds.maxR) {
          state.effects[slot].cells.delete(key);
        }
      });
    });
  }

  function effectGridMarkup(state) {
    const footprint = currentEditorFootprint(state);
    const footprintKeys = new Set(footprint.map(([q, r]) => editorCellKey(q, r)));
    const bounds = effectEditorBounds(footprint);
    const allCells = [];
    for (let q = bounds.minQ; q <= bounds.maxQ; q += 1) {
      for (let r = bounds.minR; r <= bounds.maxR; r += 1) allCells.push([q, r]);
    }
    const visualBounds = axialVisualBounds(allCells);
    const cellHeight = 44;
    const stageWidth = Math.ceil((visualBounds.maxX - visualBounds.minX) * cellHeight + 12);
    const stageHeight = Math.ceil((visualBounds.maxY - visualBounds.minY) * cellHeight + 12);
    const buttons = allCells.map(([q, r]) => {
      const key = editorCellKey(q, r);
      const center = axialCenter(q, r);
      const left = (center.x - itemDbHexCellWidth / 2 - visualBounds.minX) * cellHeight + 6;
      const top = (center.y - 0.5 - visualBounds.minY) * cellHeight + 6;
      const labels = itemDbEffectSlots.filter((slot) => state.effects[slot].cells.has(key));
      const isFootprint = footprintKeys.has(key);
      return `<button type="button" data-itemdb-effect-cell="${key}" class="${isFootprint ? "footprint" : ""} ${labels.map((slot) => `effect-${slot.toLowerCase()}`).join(" ")}" aria-label="Q ${q}, R ${r}${isFootprint ? " 아이템 점유 칸" : ` 효과 ${labels.join(", ") || "없음"}`}" aria-pressed="${state.effects[state.effectSlot].cells.has(key)}" ${isFootprint ? "disabled" : ""} style="left:${left}px;top:${top}px;width:${itemDbHexCellWidth * cellHeight}px;height:${cellHeight}px"><span>${isFootprint ? "ITEM" : labels.join("")}</span></button>`;
    }).join("");
    return {
      signature: `${bounds.minQ}:${bounds.maxQ}:${bounds.minR}:${bounds.maxR}`,
      html: `<div class="itemdb-effect-grid" style="width:${stageWidth}px;height:${stageHeight}px">${buttons}</div>`,
    };
  }

  function renderItemDbEffectGrid(state, forceCenter = false) {
    const viewport = document.querySelector("[data-itemdb-effect-viewport]");
    if (!viewport) return;
    const markup = effectGridMarkup(state);
    if (state.effectGridSignature !== markup.signature) {
      state.effectGridSignature = markup.signature;
      viewport.innerHTML = markup.html;
      forceCenter = true;
    }
    if (forceCenter) {
      requestAnimationFrame(() => {
        viewport.scrollLeft = Math.max(0, (viewport.scrollWidth - viewport.clientWidth) / 2);
        viewport.scrollTop = Math.max(0, (viewport.scrollHeight - viewport.clientHeight) / 2);
      });
    }
  }

  function updateItemDbEffectEditor(state) {
    renderItemDbEffectGrid(state);
    const current = state.effects[state.effectSlot];
    const footprintKeys = new Set(currentEditorFootprint(state).map(([q, r]) => editorCellKey(q, r)));
    document.querySelectorAll("[data-itemdb-effect-slot]").forEach((button) => {
      const slot = button.dataset.itemdbEffectSlot;
      const selected = slot === state.effectSlot;
      button.classList.toggle("selected", selected);
      button.setAttribute("aria-pressed", String(selected));
      button.querySelector("small").textContent = `${state.effects[slot].cells.size}칸`;
    });
    document.querySelectorAll("[data-itemdb-effect-cell]").forEach((button) => {
      const key = button.dataset.itemdbEffectCell;
      const isFootprint = footprintKeys.has(key);
      button.classList.toggle("footprint", isFootprint);
      button.disabled = isFootprint;
      if (isFootprint) {
        button.querySelector("span").textContent = "ITEM";
        button.setAttribute("aria-pressed", "false");
        return;
      }
      const labels = itemDbEffectSlots.filter((slot) => state.effects[slot].cells.has(key));
      const [q, r] = key.split(",");
      itemDbEffectSlots.forEach((slot) => button.classList.toggle(`effect-${slot.toLowerCase()}`, labels.includes(slot)));
      button.querySelector("span").textContent = labels.join("");
      button.setAttribute("aria-label", `Q ${q}, R ${r} 효과 ${labels.join(", ") || "없음"}`);
      button.setAttribute("aria-pressed", String(current.cells.has(key)));
    });
    const definition = document.querySelector("[data-itemdb-effect-definition]");
    if (definition) {
      const catalog = itemDb.effect_catalog || {};
      const maps = itemEffectCatalogMaps();
      const type = maps.types.get(current.type_id);
      const ruleDisabled = current.cells.size === 0;
      const conditionNames = current.condition_ids.map((id) => maps.conditions.get(id)?.display_name || id);
      const abilityNames = current.ability_ids.map((id) => maps.abilities.get(id)?.display_name || id);
      const preview = current.cells.size
        ? `효과 칸에 ${conditionNames.length ? conditionNames.join(" + ") : "아무"} 아이템이 있으면 ${abilityNames.length ? abilityNames.join(" · ") : "능력 미선택"}`
        : "칸을 선택하면 이 슬롯의 규칙을 배정할 수 있습니다.";
      definition.innerHTML = `
        <p class="itemdb-effect-rule-preview" data-ready="${Boolean(current.cells.size && type && current.ability_ids.length)}">${escapeHtml(preview)}</p>
        <label class="itemdb-effect-type-field">
          <span>효과 종류</span>
          <select data-itemdb-effect-type ${ruleDisabled ? "disabled" : ""}>
            <option value="">선택 안 함</option>
            ${(catalog.types || []).map((entry) => `<option value="${escapeHtml(entry.id)}" ${entry.id === current.type_id ? "selected" : ""}>${escapeHtml(entry.display_name)} · ${escapeHtml(entry.id)}</option>`).join("")}
          </select>
          <small>${escapeHtml(type?.description || "효과가 언제 유지되는지 선택합니다.")}</small>
        </label>
        <div class="itemdb-effect-choice-group">
          <span>적용 조건 <small>여러 개 선택 시 모두 만족</small></span>
          <div>${(catalog.conditions || []).map((entry) => `<button type="button" data-itemdb-effect-condition="${escapeHtml(entry.id)}" aria-pressed="${current.condition_ids.includes(entry.id)}" class="${current.condition_ids.includes(entry.id) ? "selected" : ""}" ${ruleDisabled ? "disabled" : ""}><strong>${escapeHtml(entry.display_name)}</strong><small>${escapeHtml(entry.id)}</small></button>`).join("")}</div>
        </div>
        <div class="itemdb-effect-choice-group abilities">
          <span>발현 능력 <small>한 개 이상 선택</small></span>
          <div>${(catalog.abilities || []).map((entry) => `<button type="button" data-itemdb-effect-ability="${escapeHtml(entry.id)}" aria-pressed="${current.ability_ids.includes(entry.id)}" class="${current.ability_ids.includes(entry.id) ? "selected" : ""}" ${ruleDisabled ? "disabled" : ""}><strong>${escapeHtml(entry.display_name)}</strong><small>${escapeHtml(entry.id)}</small></button>`).join("")}</div>
        </div>
      `;
    }
  }

  function clampEditorImage(state) {
    const width = state.canvasWidth * state.scale;
    const height = state.canvasHeight * state.scale;
    const radians = state.rotation * Math.PI / 180;
    const rotatedWidth = Math.abs(width * Math.cos(radians)) + Math.abs(height * Math.sin(radians));
    const rotatedHeight = Math.abs(width * Math.sin(radians)) + Math.abs(height * Math.cos(radians));
    const centerX = state.imageX + width / 2;
    const centerY = state.imageY + height / 2;
    const clampedCenterX = Math.min(
      itemDbEditorStageWidth - itemDbEditorOriginX - 0.5 + rotatedWidth / 2,
      Math.max(-itemDbEditorOriginX + 0.5 - rotatedWidth / 2, centerX),
    );
    const clampedCenterY = Math.min(
      itemDbEditorStageHeight - itemDbEditorOriginY - 0.5 + rotatedHeight / 2,
      Math.max(-itemDbEditorOriginY + 0.5 - rotatedHeight / 2, centerY),
    );
    state.imageX = clampedCenterX - width / 2;
    state.imageY = clampedCenterY - height / 2;
  }

  function updateItemDbEditor() {
    const state = itemDbEditorState;
    const dialog = document.getElementById("itemdb-editor-dialog");
    if (!state || !dialog) return;
    const image = dialog.querySelector(".itemdb-editor-image");
    const stage = dialog.querySelector(".itemdb-editor-stage");
    const modeButton = dialog.querySelector("[data-itemdb-editor-mode]");
    const modeText = dialog.querySelector("[data-itemdb-editor-mode-text]");
    const count = dialog.querySelector("[data-itemdb-editor-count]");
    const position = dialog.querySelector("[data-itemdb-editor-position]");
    const validation = itemDbTools.validateLayout(
      [...state.selected].map((key) => key.split(",").map(Number)),
      state.scale,
      state.rotation,
    );
    const synergyValidation = itemDbTools.validateSynergies(
      [...state.synergies],
      (itemDb.synergy_catalog || []).map((entry) => entry.id),
    );
    const effectValidation = itemDbTools.validateEffectZones(
      effectPayloadFromState(state),
      currentEditorFootprint(state),
      itemDbEffectPadding,
      itemDb.effect_catalog,
    );

    stage.dataset.mode = state.mode;
    image.style.left = `${(state.imageX + itemDbEditorOriginX) / itemDbEditorStageWidth * 100}%`;
    image.style.top = `${(state.imageY + itemDbEditorOriginY) / itemDbEditorStageHeight * 100}%`;
    image.style.width = `${state.canvasWidth * state.scale / itemDbEditorStageWidth * 100}%`;
    image.style.height = `${state.canvasHeight * state.scale / itemDbEditorStageHeight * 100}%`;
    image.style.transform = `rotate(${state.rotation}deg)`;
    image.style.opacity = state.mode === "cells" ? "0.3" : "1";
    modeButton.textContent = state.mode === "cells" ? "이미지 이동하기" : "칸 설정하기";
    modeText.textContent = state.mode === "cells"
      ? "이미지는 잠겼습니다. 바닥 칸을 눌러 점유 영역을 선택하세요."
      : "이미지를 드래그해 위치를 정한 뒤 칸 설정하기를 누르세요.";
    count.textContent = `${state.selected.size}칸 선택`;
    position.textContent = `X ${state.imageX.toFixed(2)} · Y ${state.imageY.toFixed(2)} · 회전 ${state.rotation.toFixed(1)}°`;
    dialog.querySelectorAll("[data-itemdb-editor-cell]").forEach((cell) => {
      cell.classList.toggle("selected", state.selected.has(cell.dataset.itemdbEditorCell));
      cell.setAttribute("aria-pressed", String(state.selected.has(cell.dataset.itemdbEditorCell)));
    });
    dialog.querySelector("[data-itemdb-editor-synergy-count]").textContent = `${state.synergies.size} / 3`;
    dialog.querySelectorAll("[data-itemdb-editor-synergy]").forEach((button) => {
      const selected = state.synergies.has(button.dataset.itemdbEditorSynergy);
      button.classList.toggle("selected", selected);
      button.setAttribute("aria-pressed", String(selected));
      button.disabled = state.synergies.size >= 3 && !selected;
    });
    updateItemDbEffectEditor(state);
    dialog.querySelector("[data-itemdb-editor-save]").disabled = state.saving;
    const error = dialog.querySelector("[data-itemdb-editor-error]");
    if (!state.showErrors && !state.serverError) {
      error.hidden = true;
      return;
    }
    error.textContent = state.serverError
      || [...validation.errors, ...synergyValidation.errors, ...effectValidation.errors].join(" ");
    error.hidden = !state.serverError && validation.valid && synergyValidation.valid && effectValidation.valid;
  }

  async function saveItemDbEditor() {
    const state = itemDbEditorState;
    const dialog = document.getElementById("itemdb-editor-dialog");
    if (!state || !dialog || state.saving) return;
    const coordinates = [...state.selected].map((key) => key.split(",").map(Number));
    const validation = itemDbTools.validateLayout(coordinates, state.scale, state.rotation);
    const synergyValidation = itemDbTools.validateSynergies(
      [...state.synergies],
      (itemDb.synergy_catalog || []).map((entry) => entry.id),
    );
    const effectValidation = itemDbTools.validateEffectZones(
      effectPayloadFromState(state),
      coordinates,
      itemDbEffectPadding,
      itemDb.effect_catalog,
    );
    state.showErrors = true;
    if (!validation.valid || !synergyValidation.valid || !effectValidation.valid) {
      updateItemDbEditor();
      return;
    }

    state.saving = true;
    state.serverError = "";
    dialog.querySelector("[data-itemdb-editor-error]").hidden = true;
    dialog.querySelector("[data-itemdb-editor-save]").textContent = "저장 중…";
    updateItemDbEditor();
    try {
      const response = await fetch("/api/item-db/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          item_id: state.item.id,
          coordinates: validation.cells,
          scale: validation.scale,
          image_x: state.imageX,
          image_y: state.imageY,
          rotation_degrees: validation.rotation,
          synergies: synergyValidation.synergies,
          effects: effectValidation.effects,
        }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.error || `저장에 실패했습니다. (${response.status})`);
      const index = itemDb.items.findIndex((item) => item.id === state.item.id);
      if (index >= 0) itemDb.items[index] = payload.item;
      const effectCells = Object.values(payload.item.effects || {}).reduce((total, effect) => total + effect.cells.length, 0);
      itemDbNotice = `${payload.item.name}의 이미지 위치·${payload.item.image_layout.rotation_degrees}° 회전, ${payload.item.occupied_cells}칸 점유 형태, 시너지 ${payload.item.synergies.length}개와 효과 영역 ${effectCells}칸을 저장했습니다.`;
      closeItemDbEditor();
      renderItemDb();
    } catch (error) {
      state.saving = false;
      state.serverError = String(error.message || error);
      dialog.querySelector("[data-itemdb-editor-save]").textContent = "저장";
      updateItemDbEditor();
    }
  }

  function openItemDbEditor(itemId) {
    const item = itemDb.items.find((candidate) => candidate.id === itemId);
    if (!item || !canEditItemDb) return;
    closeItemDbEditor();
    const centeredCoordinates = centerAxialCells(item.coordinates);
    const footprintBounds = axialVisualBounds(centeredCoordinates);
    const layout = item.image_layout || {
      scale: 1,
      offset_x: 0,
      offset_y: 0,
      rotation_degrees: 0,
      canvas_width: item.bounds.width,
      canvas_height: item.bounds.height,
    };
    const centerDeltaQ = centeredCoordinates[0][0] - item.coordinates[0][0];
    const centerDeltaR = centeredCoordinates[0][1] - item.coordinates[0][1];
    const effects = Object.fromEntries(itemDbEffectSlots.map((slot) => {
      const source = item.effects?.[slot] || {
        cells: [], type_id: null, condition_ids: [], ability_ids: [],
      };
      return [slot, {
        cells: new Set(source.cells.map(([q, r]) => editorCellKey(q + centerDeltaQ, r + centerDeltaR))),
        type_id: source.type_id ?? null,
        condition_ids: [...(source.condition_ids || [])],
        ability_ids: [...(source.ability_ids || [])],
      }];
    }));
    itemDbEditorState = {
      item,
      scale: Number(layout.scale),
      canvasWidth: Number(layout.canvas_width),
      canvasHeight: Number(layout.canvas_height),
      imageX: footprintBounds.minX + Number(layout.offset_x),
      imageY: footprintBounds.minY + Number(layout.offset_y),
      rotation: itemDbTools.normalizeRotation(layout.rotation_degrees || 0),
      selected: new Set(centeredCoordinates.map(([q, r]) => editorCellKey(q, r))),
      synergies: new Set(item.synergies || []),
      effects,
      effectSlot: "A",
      effectGridSignature: "",
      mode: "move",
      saving: false,
      showErrors: false,
      serverError: "",
      drag: null,
    };
    clampEditorImage(itemDbEditorState);

    const gridCells = [];
    for (let q = -itemDbEditorRadius; q <= itemDbEditorRadius; q += 1) {
      const minR = Math.max(-itemDbEditorRadius, -q - itemDbEditorRadius);
      const maxR = Math.min(itemDbEditorRadius, -q + itemDbEditorRadius);
      for (let r = minR; r <= maxR; r += 1) {
        const key = editorCellKey(q, r);
        const center = axialCenter(q, r);
        const left = (center.x - itemDbHexCellWidth / 2 + itemDbEditorOriginX)
          / itemDbEditorStageWidth * 100;
        const top = (center.y - 0.5 + itemDbEditorOriginY) / itemDbEditorStageHeight * 100;
        const width = itemDbHexCellWidth / itemDbEditorStageWidth * 100;
        const height = 1 / itemDbEditorStageHeight * 100;
        const selected = itemDbEditorState.selected.has(key);
        gridCells.push(`<button type="button" data-itemdb-editor-cell="${key}" aria-label="Q ${q}, R ${r} 육각 칸" aria-pressed="${selected}" style="left:${left}%;top:${top}%;width:${width}%;height:${height}%"></button>`);
      }
    }
    document.body.insertAdjacentHTML("beforeend", `
      <div id="itemdb-editor-backdrop" class="itemdb-editor-backdrop">
        <section id="itemdb-editor-dialog" class="itemdb-editor-dialog" role="dialog" aria-modal="true" aria-labelledby="itemdb-editor-title">
          <header>
            <div><span>ITEM LAYOUT EDITOR</span><h2 id="itemdb-editor-title">${escapeHtml(item.name)}</h2><code>${escapeHtml(item.id)}</code><em class="itemdb-editor-apply-state" data-enabled="${item.enabled}">${item.enabled ? "ON · 베이크 포함" : "OFF · 게임 제외"}</em></div>
            <button type="button" class="itemdb-editor-close" data-itemdb-editor-close aria-label="편집기 닫기">×</button>
          </header>
          <div class="itemdb-editor-actionbar">
            <div class="itemdb-editor-actions">
              <button type="button" data-itemdb-editor-close>취소</button>
              <button type="button" class="primary" data-itemdb-editor-save>저장</button>
            </div>
          </div>
          <div class="itemdb-editor-scroll">
            <div class="itemdb-editor-body">
              <div class="itemdb-editor-workbench">
                <div class="itemdb-editor-stage" data-mode="move">
                  <div class="itemdb-editor-grid">${gridCells.join("")}</div>
                  <img class="itemdb-editor-image" src="${escapeHtml(item.image_url || item.image)}" alt="${escapeHtml(item.name)} 배치 이미지" draggable="false">
                </div>
                <div class="itemdb-editor-stage-meta"><strong data-itemdb-editor-count></strong><span data-itemdb-editor-position></span></div>
              </div>
              <aside class="itemdb-editor-controls">
                <label for="itemdb-editor-scale"><span>Image Scale</span><small>0.1–4.0 배율</small></label>
                <input id="itemdb-editor-scale" type="number" min="0.1" max="4" step="0.05" value="${escapeHtml(layout.scale)}">
                <label class="itemdb-editor-rotation-label" for="itemdb-editor-rotation"><span>Image Rotation</span><small>자유 각도 · ±60° 빠른 조절</small></label>
                <div class="itemdb-editor-rotation">
                  <button type="button" data-itemdb-editor-rotate="-60" aria-label="이미지를 왼쪽으로 60도 회전">−60°</button>
                  <input id="itemdb-editor-rotation" type="number" min="-180" max="180" step="1" value="${escapeHtml(itemDbEditorState.rotation)}" aria-label="이미지 회전각">
                  <button type="button" data-itemdb-editor-rotate="60" aria-label="이미지를 오른쪽으로 60도 회전">+60°</button>
                </div>
                <p data-itemdb-editor-mode-text></p>
                <button type="button" class="itemdb-editor-mode" data-itemdb-editor-mode>칸 설정하기</button>
                <div class="itemdb-editor-rules">
                  <strong>저장 규칙</strong>
                  <span>1칸 이상 선택</span><span>Q·R·S 각 축 최대 5칸</span><span>육각형 변으로 연결</span><span>시너지 0~3개</span>
                </div>
                <p class="itemdb-editor-error" data-itemdb-editor-error role="alert" hidden></p>
              </aside>
            </div>
            <section class="itemdb-editor-synergies" aria-labelledby="itemdb-editor-synergy-title">
              <div class="itemdb-editor-synergy-heading"><strong id="itemdb-editor-synergy-title">Synergies</strong><span data-itemdb-editor-synergy-count></span></div>
              <p>게임에 존재하는 시너지 중 0~3개를 선택하세요. 선택하지 않아도 저장할 수 있습니다.</p>
              <div class="itemdb-editor-synergy-families">${renderItemDbSynergyOptions(itemDbEditorState.synergies)}</div>
            </section>
            <section class="itemdb-editor-effects" aria-labelledby="itemdb-editor-effect-title">
              <div class="itemdb-editor-effect-heading">
                <div><strong id="itemdb-editor-effect-title">Effect Areas</strong><p>아이템 점유 범위에서 상하좌우 5줄 더 넓은 칸을 직접 눌러 지정합니다. ITEM 칸은 다른 아이템이 들어갈 수 없어 선택되지 않습니다.</p></div>
                <div class="itemdb-effect-slots" role="group" aria-label="편집할 효과 영역">
                  ${itemDbEffectSlots.map((slot) => `<button type="button" data-itemdb-effect-slot="${slot}" aria-pressed="${slot === "A"}"><strong>${slot}</strong><small>${itemDbEditorState.effects[slot].cells.size}칸</small></button>`).join("")}
                </div>
              </div>
              <div class="itemdb-effect-grid-viewport" data-itemdb-effect-viewport aria-label="효과 적용 칸 편집 영역"></div>
              <div class="itemdb-effect-legend"><span data-slot="A">A</span><span data-slot="B">B</span><span data-slot="C">C</span><em>같은 칸에 여러 효과 영역을 겹쳐 지정할 수 있습니다.</em></div>
              <div class="itemdb-effect-definition" data-itemdb-effect-definition></div>
              <p class="itemdb-effect-future-note">선택한 종류·조건·능력은 안정적인 카탈로그 ID로 저장되고 ItemDB 리비전에 포함됩니다. 칸이 비어 있는 슬롯은 규칙도 자동으로 비웁니다.</p>
            </section>
          </div>
        </section>
      </div>
    `);
    document.body.classList.add("itemdb-editor-open");

    const dialog = document.getElementById("itemdb-editor-dialog");
    const stage = dialog.querySelector(".itemdb-editor-stage");
    const image = dialog.querySelector(".itemdb-editor-image");
    const scaleInput = dialog.querySelector("#itemdb-editor-scale");
    const rotationInput = dialog.querySelector("#itemdb-editor-rotation");
    dialog.querySelectorAll("[data-itemdb-editor-close]").forEach((button) => button.addEventListener("click", closeItemDbEditor));
    document.getElementById("itemdb-editor-backdrop").addEventListener("click", (event) => {
      if (event.target.id === "itemdb-editor-backdrop") closeItemDbEditor();
    });
    dialog.querySelector("[data-itemdb-editor-mode]").addEventListener("click", () => {
      itemDbEditorState.mode = itemDbEditorState.mode === "cells" ? "move" : "cells";
      itemDbEditorState.showErrors = false;
      itemDbEditorState.serverError = "";
      updateItemDbEditor();
    });
    dialog.querySelectorAll("[data-itemdb-editor-cell]").forEach((cell) => cell.addEventListener("click", () => {
      if (itemDbEditorState.mode !== "cells") return;
      const key = cell.dataset.itemdbEditorCell;
      if (itemDbEditorState.selected.has(key)) itemDbEditorState.selected.delete(key);
      else {
        itemDbEditorState.selected.add(key);
        itemDbEffectSlots.forEach((slot) => itemDbEditorState.effects[slot].cells.delete(key));
      }
      pruneEffectCellsToFootprint(itemDbEditorState);
      itemDbEditorState.showErrors = false;
      itemDbEditorState.serverError = "";
      updateItemDbEditor();
    }));
    dialog.querySelectorAll("[data-itemdb-effect-slot]").forEach((button) => {
      button.addEventListener("click", () => {
        itemDbEditorState.effectSlot = button.dataset.itemdbEffectSlot;
        itemDbEditorState.showErrors = false;
        itemDbEditorState.serverError = "";
        updateItemDbEditor();
      });
    });
    dialog.querySelector("[data-itemdb-effect-viewport]").addEventListener("click", (event) => {
      const button = event.target.closest("[data-itemdb-effect-cell]");
      if (!button || button.disabled) return;
      const cells = itemDbEditorState.effects[itemDbEditorState.effectSlot].cells;
      const key = button.dataset.itemdbEffectCell;
      const effect = itemDbEditorState.effects[itemDbEditorState.effectSlot];
      if (cells.has(key)) {
        cells.delete(key);
        if (!cells.size) {
          effect.type_id = null;
          effect.condition_ids = [];
          effect.ability_ids = [];
        }
      } else {
        cells.add(key);
        if (!effect.type_id) effect.type_id = itemDb.effect_catalog?.types?.[0]?.id || null;
      }
      itemDbEditorState.showErrors = false;
      itemDbEditorState.serverError = "";
      updateItemDbEditor();
    });
    const effectDefinition = dialog.querySelector("[data-itemdb-effect-definition]");
    effectDefinition.addEventListener("change", (event) => {
      if (!event.target.matches("[data-itemdb-effect-type]")) return;
      itemDbEditorState.effects[itemDbEditorState.effectSlot].type_id = event.target.value || null;
      itemDbEditorState.showErrors = false;
      itemDbEditorState.serverError = "";
      updateItemDbEditor();
    });
    effectDefinition.addEventListener("click", (event) => {
      const conditionButton = event.target.closest("[data-itemdb-effect-condition]");
      const abilityButton = event.target.closest("[data-itemdb-effect-ability]");
      if (!conditionButton && !abilityButton) return;
      const effect = itemDbEditorState.effects[itemDbEditorState.effectSlot];
      const field = conditionButton ? "condition_ids" : "ability_ids";
      const id = conditionButton?.dataset.itemdbEffectCondition || abilityButton.dataset.itemdbEffectAbility;
      effect[field] = effect[field].includes(id)
        ? effect[field].filter((entry) => entry !== id)
        : [...effect[field], id];
      itemDbEditorState.showErrors = false;
      itemDbEditorState.serverError = "";
      updateItemDbEditor();
    });
    dialog.querySelectorAll("[data-itemdb-editor-synergy]").forEach((button) => button.addEventListener("click", () => {
      const synergyId = button.dataset.itemdbEditorSynergy;
      if (itemDbEditorState.synergies.has(synergyId)) itemDbEditorState.synergies.delete(synergyId);
      else if (itemDbEditorState.synergies.size < 3) itemDbEditorState.synergies.add(synergyId);
      itemDbEditorState.showErrors = false;
      itemDbEditorState.serverError = "";
      updateItemDbEditor();
    }));
    scaleInput.addEventListener("input", () => {
      const nextScale = Number(scaleInput.value);
      if (!Number.isFinite(nextScale) || nextScale <= 0) return;
      const centerX = itemDbEditorState.imageX + itemDbEditorState.canvasWidth * itemDbEditorState.scale / 2;
      const centerY = itemDbEditorState.imageY
        + itemDbEditorState.canvasHeight * itemDbEditorState.scale / 2;
      itemDbEditorState.scale = nextScale;
      itemDbEditorState.imageX = centerX - itemDbEditorState.canvasWidth * nextScale / 2;
      itemDbEditorState.imageY = centerY - itemDbEditorState.canvasHeight * nextScale / 2;
      clampEditorImage(itemDbEditorState);
      itemDbEditorState.showErrors = false;
      itemDbEditorState.serverError = "";
      updateItemDbEditor();
    });
    const setRotation = (value) => {
      const rotation = itemDbTools.normalizeRotation(value);
      if (!Number.isFinite(rotation)) return;
      itemDbEditorState.rotation = rotation;
      rotationInput.value = String(rotation);
      clampEditorImage(itemDbEditorState);
      itemDbEditorState.showErrors = false;
      itemDbEditorState.serverError = "";
      updateItemDbEditor();
    };
    rotationInput.addEventListener("input", () => setRotation(rotationInput.value));
    dialog.querySelectorAll("[data-itemdb-editor-rotate]").forEach((button) => {
      button.addEventListener("click", () => {
        setRotation(itemDbEditorState.rotation + Number(button.dataset.itemdbEditorRotate));
      });
    });
    image.addEventListener("pointerdown", (event) => {
      if (itemDbEditorState.mode !== "move") return;
      event.preventDefault();
      image.setPointerCapture(event.pointerId);
      itemDbEditorState.drag = {
        pointerId: event.pointerId,
        clientX: event.clientX,
        clientY: event.clientY,
        imageX: itemDbEditorState.imageX,
        imageY: itemDbEditorState.imageY,
      };
    });
    image.addEventListener("pointermove", (event) => {
      const drag = itemDbEditorState?.drag;
      if (!drag || drag.pointerId !== event.pointerId) return;
      const bounds = stage.getBoundingClientRect();
      itemDbEditorState.imageX = drag.imageX
        + (event.clientX - drag.clientX) / bounds.width * itemDbEditorStageWidth;
      itemDbEditorState.imageY = drag.imageY
        + (event.clientY - drag.clientY) / bounds.height * itemDbEditorStageHeight;
      clampEditorImage(itemDbEditorState);
      updateItemDbEditor();
    });
    const finishDrag = (event) => {
      if (itemDbEditorState?.drag?.pointerId === event.pointerId) itemDbEditorState.drag = null;
    };
    image.addEventListener("pointerup", finishDrag);
    image.addEventListener("pointercancel", finishDrag);
    dialog.querySelector("[data-itemdb-editor-save]").addEventListener("click", saveItemDbEditor);
    renderItemDbEffectGrid(itemDbEditorState, true);
    updateItemDbEditor();
    scaleInput.focus();
  }

  function renderItemDbResults() {
    const results = document.getElementById("itemdb-results");
    const resultCount = document.getElementById("itemdb-result-count");
    if (!results || !resultCount || !itemDb || !itemDbTools) return;
    const filtered = itemDbTools.filterItems(itemDb.items, itemDbQuery, itemDbFamily);
    resultCount.textContent = `${filtered.length}개 표시`;
    document.querySelectorAll("[data-itemdb-family]").forEach((button) => {
      button.classList.toggle("active", button.dataset.itemdbFamily === itemDbFamily);
    });
    if (!filtered.length) {
      results.innerHTML = '<div class="empty-state">조건에 맞는 아이템이 없습니다.</div>';
      return;
    }
    results.innerHTML = itemDbTools.groupByFamily(filtered, itemDb.families).map((family) => `
      <section class="itemdb-family-section">
        <header><h2>${escapeHtml(family.label)}</h2><span>${family.items.length}개</span></header>
        <div class="itemdb-table-wrap">
          <table class="itemdb-table">
            <thead><tr><th>이미지</th><th>게임</th><th>아이템</th><th>분류·크기</th><th>점유 형태</th><th>시너지</th><th>효과 칸 능력</th><th>능력치 초안</th><th>콘셉트</th>${canEditItemDb ? "<th>편집</th>" : ""}</tr></thead>
            <tbody>${renderItemRows(family.items)}</tbody>
          </table>
        </div>
      </section>
    `).join("");
    if (canEditItemDb) {
      results.querySelectorAll("[data-itemdb-toggle]").forEach((button) => {
        button.addEventListener("click", () => toggleItemDbEnabled(button.dataset.itemdbToggle, button));
      });
      results.querySelectorAll("[data-itemdb-edit]").forEach((button) => {
        button.addEventListener("click", () => openItemDbEditor(button.dataset.itemdbEdit));
      });
    }
  }

  function renderItemDb() {
    document.title = "ItemDB · PackBound Wiki";
    renderNavigation("item-db", "database");
    if (!itemDb || !itemDbTools) {
      main.innerHTML = '<div class="empty-state">ItemDB 생성 데이터가 없습니다. <code>python3 tools/wiki.py build</code>를 실행하세요.</div>';
      return;
    }
    main.innerHTML = `
      <div class="itemdb-layout">
        <header class="itemdb-hero">
          <div class="page-eyebrow">Generated catalog</div>
          <div class="itemdb-hero-row">
            <div><h1>ItemDB</h1><p>게임 아이템의 이미지, 점유 형태, 시너지와 능력치 초안을 한 곳에서 비교합니다. 로컬 에디터의 저장값은 게임 데이터와 공개 DB에 함께 반영됩니다.</p></div>
            <div class="itemdb-hero-actions">
              <span class="itemdb-total"><strong>${itemDb.active_count}</strong><small>GAME ON · ${itemDb.count} TOTAL</small></span>
              ${canEditItemDb ? '<button type="button" class="itemdb-bake-button" data-itemdb-bake>게임에 굽기</button>' : ""}
            </div>
          </div>
          <div class="itemdb-contract">
            <div><span>기준 방향</span><strong>${escapeHtml(itemDb.common.native_facing)}</strong></div>
            <div><span>격자 구조</span><strong>${escapeHtml(itemDb.common.grid_topology)}</strong></div>
            <div><span>허용 회전</span><strong>${itemDb.common.rotations.map((value) => `${value}°`).join(" · ")}</strong></div>
            <div><span>최대 스택</span><strong>${itemDb.common.maximum_stack}</strong></div>
            <div><span>DB 리비전</span><code>${escapeHtml(itemDb.revision || "—")}</code></div>
            <div><span>단일 원본</span><code>${escapeHtml(itemDb.source)}</code></div>
          </div>
        </header>
        ${renderItemEffectCatalog()}
        <section class="itemdb-toolbar" aria-label="ItemDB 검색과 분류">
          <label><span class="visually-hidden">아이템 검색</span><input id="itemdb-search" type="search" value="${escapeHtml(itemDbQuery)}" placeholder="이름, ID, 시너지, 능력치, 콘셉트 검색…"></label>
          <div class="itemdb-family-filter" role="group" aria-label="아이템 대분류">
            <button type="button" data-itemdb-family="all">전체 <span>${itemDb.active_count}/${itemDb.count}</span></button>
            ${itemDb.families.map((family) => `<button type="button" data-itemdb-family="${escapeHtml(family.id)}">${escapeHtml(family.label)} <span>${family.active_count}/${family.count}</span></button>`).join("")}
          </div>
          <strong id="itemdb-result-count"></strong>
        </section>
        ${itemDbNotice ? `<div class="itemdb-save-notice" role="status">${escapeHtml(itemDbNotice)}</div>` : ""}
        <div id="itemdb-results"></div>
      </div>
    `;
    document.getElementById("itemdb-search").addEventListener("input", (event) => {
      itemDbQuery = event.target.value;
      renderItemDbResults();
    });
    document.querySelectorAll("[data-itemdb-family]").forEach((button) => {
      button.addEventListener("click", () => {
        itemDbFamily = button.dataset.itemdbFamily;
        renderItemDbResults();
      });
    });
    document.querySelector("[data-itemdb-bake]")?.addEventListener("click", openItemDbBake);
    renderItemDbResults();
    document.body.classList.remove("menu-open");
    window.scrollTo(0, 0);
  }

  function renderStructuredDbCell(row, column) {
    const value = row[column.key] || "—";
    if (column.kind === "code") return `<code>${escapeHtml(value)}</code>`;
    if (column.kind === "strong") return `<strong>${escapeHtml(value)}</strong>`;
    if (column.kind === "priority") return `<span class="structured-db-priority" data-priority="${escapeHtml(value)}">${escapeHtml(value)}</span>`;
    if (column.kind === "status") return `<span class="structured-db-status" data-value="${escapeHtml(value)}">${escapeHtml(value)}</span>`;
    return `<span>${escapeHtml(value)}</span>`;
  }

  function renderStructuredDbResults(database) {
    const resultRoot = document.getElementById("structured-db-results");
    const resultCount = document.getElementById("structured-db-result-count");
    if (!resultRoot || !resultCount) return;
    const rows = combatDbTools.filterRows(database, structuredDbState.query, structuredDbState.filters);
    resultCount.textContent = `${rows.length} / ${database.count}개 표시`;
    if (!rows.length) {
      resultRoot.innerHTML = '<div class="empty-state">조건에 맞는 데이터가 없습니다.</div>';
      return;
    }
    resultRoot.innerHTML = `
      <div class="structured-db-table-wrap">
        <table class="structured-db-table" style="--database-column-count:${database.columns.length}">
          <thead><tr>${database.columns.map((column) => `<th>${escapeHtml(column.label)}</th>`).join("")}</tr></thead>
          <tbody>${rows.map((row) => `
            <tr>${database.columns.map((column) => `<td data-kind="${escapeHtml(column.kind)}">${renderStructuredDbCell(row, column)}</td>`).join("")}</tr>
          `).join("")}</tbody>
        </table>
      </div>
    `;
  }

  function renderStructuredDatabase(databaseId) {
    const database = combatDbTools.findDatabase(combatDb, databaseId);
    if (!database) {
      renderNavigation(databaseId, "database");
      main.innerHTML = '<div class="empty-state">요청한 데이터베이스가 없습니다.</div>';
      return;
    }
    if (structuredDbState.databaseId !== databaseId) {
      structuredDbState = { databaseId, query: "", filters: {} };
    }
    document.title = `${database.title} · PackBound Wiki`;
    renderNavigation(databaseId, "database");
    main.innerHTML = `
      <div class="structured-db-layout">
        <header class="structured-db-hero">
          <div class="page-eyebrow">Planning data registry</div>
          <div class="structured-db-hero-row">
            <div>
              <h1>${escapeHtml(database.title)}</h1>
              <p>${escapeHtml(database.description)}</p>
            </div>
            <span class="structured-db-total"><strong>${database.count}</strong><small>${escapeHtml(database.unit)}</small></span>
          </div>
          <div class="structured-db-source">
            <div><span>기획 원본</span><strong>${escapeHtml(combatDb.source_title)}</strong></div>
            <div><span>원본 버전</span><strong>v${String(combatDb.source_version).padStart(3, "0")}</strong></div>
            <div><span>원본 변경</span><strong>${escapeHtml(formatDate(combatDb.source_updated_at, true))}</strong></div>
            <a href="${pageHref(combatDb.source_page_id)}">기획 문서 읽기 <span aria-hidden="true">→</span></a>
          </div>
        </header>
        <section class="structured-db-toolbar" aria-label="${escapeHtml(database.title)} 검색과 필터">
          <label class="structured-db-search"><span class="visually-hidden">데이터 검색</span><input id="structured-db-search" type="search" value="${escapeHtml(structuredDbState.query)}" placeholder="ID, 이름, 의미, 기획 결정 검색…"></label>
          <div class="structured-db-filters">
            ${database.filters.map((filter) => `
              <label><span>${escapeHtml(filter.label)}</span><select data-structured-db-filter="${escapeHtml(filter.key)}">
                <option value="all">전체</option>
                ${combatDbTools.filterOptions(database, filter.key).map((value) => `<option value="${escapeHtml(value)}" ${structuredDbState.filters[filter.key] === value ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}
              </select></label>
            `).join("")}
          </div>
          <strong id="structured-db-result-count"></strong>
        </section>
        <div id="structured-db-results"></div>
      </div>
    `;
    document.getElementById("structured-db-search").addEventListener("input", (event) => {
      structuredDbState.query = event.target.value;
      renderStructuredDbResults(database);
    });
    document.querySelectorAll("[data-structured-db-filter]").forEach((select) => {
      select.addEventListener("change", () => {
        structuredDbState.filters[select.dataset.structuredDbFilter] = select.value;
        renderStructuredDbResults(database);
      });
    });
    renderStructuredDbResults(database);
    document.body.classList.remove("menu-open");
    window.scrollTo(0, 0);
  }

  function renderPage() {
    const route = readRoute();
    if (!(route.kind === "database" && route.slug === "item-db") && itemDbEditorState) closeItemDbEditor();
    if (route.kind === "tree") {
      document.title = "전체 위키 트리 · PackBound Wiki";
      renderNavigation("", "tree");
      main.innerHTML = renderTree(route.treeView);
      document.body.classList.remove("menu-open");
      window.scrollTo(0, 0);
      return;
    }
    if (route.kind === "database") {
      if (route.slug === "item-db") renderItemDb();
      else renderStructuredDatabase(route.slug);
      return;
    }
    const page = pageById.get(route.slug) || pageById.get(defaultPage);
    if (!page) {
      main.innerHTML = '<div class="empty-state">표시할 위키 문서가 없습니다.</div>';
      return;
    }
    const revision = selectedRevision(page, route.version);
    document.title = `${revision.title} · PackBound Wiki`;
    renderNavigation(page.id, "page");
    main.innerHTML = `
      <div class="page-grid">
        ${renderHeader(page, revision, route)}
        <article class="article-column">
          ${route.view === "history" ? renderHistory(page, revision) : `<div class="markdown">${renderMarkdown(revision.body)}</div>`}
        </article>
        ${renderMeta(page, revision)}
      </div>
    `;
    document.body.classList.remove("menu-open");
    window.scrollTo(0, 0);
  }

  function openImageViewer(trigger) {
    const source = markdownMedia.safeViewerImageSource(trigger.dataset.imageViewerSrc);
    if (!source) return;
    imageViewerReturnFocus = trigger;
    imageViewerImage.src = source;
    imageViewerImage.alt = trigger.dataset.imageViewerAlt || "";
    imageViewerCaption.textContent = trigger.dataset.imageViewerCaption || trigger.dataset.imageViewerAlt || "";
    imageViewer.hidden = false;
    imageViewer.setAttribute("aria-hidden", "false");
    document.body.classList.add("image-viewer-open");
    window.setTimeout(() => imageViewer.focus(), 0);
  }

  function closeImageViewer() {
    if (imageViewer.hidden) return;
    imageViewer.hidden = true;
    imageViewer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("image-viewer-open");
    imageViewerImage.removeAttribute("src");
    imageViewerImage.alt = "";
    imageViewerCaption.textContent = "";
    if (imageViewerReturnFocus?.isConnected) imageViewerReturnFocus.focus();
    imageViewerReturnFocus = null;
  }

  function renderPageSearch(query = "") {
    const normalized = query.trim().toLocaleLowerCase("ko-KR");
    const pages = normalized
      ? filteredPages.filter((page) => [page.title, page.summary, page.category, ...(page.tags || []), page.body].join(" ").toLocaleLowerCase("ko-KR").includes(normalized))
      : [...filteredPages].sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    searchResults.innerHTML = pages.length ? `
      <div class="search-section-heading"><strong>${normalized ? "검색된 문서" : "최근 변경 문서"}</strong><span>${pages.length}개</span></div>
      ${pages.map((page) => `
        <a class="search-result" href="${pageHref(page.id)}">
          <strong>${escapeHtml(page.title)}</strong>
          <p>${escapeHtml(page.summary)}</p>
          <div class="result-meta">${escapeHtml(categoryLabels[page.category] || page.category)} · v${String(page.version).padStart(3, "0")} · ${formatDate(page.updated_at)}</div>
        </a>
      `).join("")}
    ` : '<div class="empty-state">일치하는 문서가 없습니다.</div>';
  }

  function tagButton(entry) {
    return `
      <button type="button" class="tag-index-card" data-tag-name="${escapeHtml(entry.name)}">
        <span class="tag-card-main"><strong>#${escapeHtml(entry.name)}</strong><small>${escapeHtml(entry.theme.label)}</small></span>
        <span class="tag-card-stats"><strong>${entry.count}</strong><small>문서</small></span>
        <span class="tag-card-date">최근 문서 ${formatDate(entry.latestDocumentAt)}</span>
      </button>
    `;
  }

  function renderTagDirectory(query = "") {
    const normalized = query.trim().toLocaleLowerCase("ko-KR");
    const filtered = tagIndex.filter((entry) => {
      if (!normalized) return true;
      return `${entry.name} ${entry.theme.label} ${entry.theme.description}`.toLocaleLowerCase("ko-KR").includes(normalized);
    });
    if (!filtered.length) {
      searchResults.innerHTML = '<div class="empty-state">일치하는 태그가 없습니다.</div>';
      return;
    }

    const sortDescriptions = {
      recent: "태그가 사용된 문서의 최초 생성일이 최신인 순서로 표시합니다.",
      popular: "같은 태그를 사용한 문서 수가 많은 순서로 표시합니다.",
      theme: "개발, 기획, 규칙, 아트 등 큰 주제별로 묶어 표시합니다.",
    };
    const heading = `
      <div class="tag-directory-heading">
        <div><span>TAG LIBRARY</span><strong>${normalized ? `‘${escapeHtml(query.trim())}’ 태그` : "전체 태그"}</strong></div>
        <p>${escapeHtml(sortDescriptions[tagSort])}</p>
        <em>${filtered.length}개 태그 · ${filtered.reduce((total, entry) => total + entry.count, 0)}개 문서 연결</em>
      </div>
    `;

    if (tagSort === "theme") {
      searchResults.innerHTML = heading + tagExplorer.groupTagsByTheme(filtered).map(({ theme, tags }) => `
        <section class="tag-theme-group" data-theme="${escapeHtml(theme.id)}">
          <header><div><strong>${escapeHtml(theme.label)}</strong><p>${escapeHtml(theme.description)}</p></div><span>${tags.length}개 태그</span></header>
          <div class="tag-card-grid">${tags.map(tagButton).join("")}</div>
        </section>
      `).join("");
      return;
    }

    searchResults.innerHTML = `${heading}<div class="tag-card-grid">${tagExplorer.sortTags(filtered, tagSort).map(tagButton).join("")}</div>`;
  }

  function renderTagDocuments(entry, query = "") {
    const normalized = query.trim().toLocaleLowerCase("ko-KR");
    const matches = [...entry.pages]
      .filter((match) => {
        if (!normalized) return true;
        const revision = match.latestTaggedRevision;
        return [revision.title, revision.summary, revision.body].join(" ").toLocaleLowerCase("ko-KR").includes(normalized);
      })
      .sort((left, right) => new Date(right.page.updated_at) - new Date(left.page.updated_at));
    searchResults.innerHTML = `
      <header class="tag-result-header">
        <button type="button" data-tag-back aria-label="전체 태그로 돌아가기">← 전체 태그</button>
        <div><span>${escapeHtml(entry.theme.label)} 테마</span><h2>#${escapeHtml(entry.name)}</h2></div>
        <p>${entry.count}개 문서에서 사용 · 최근 등록 ${formatDate(entry.introducedAt, true)}</p>
      </header>
      <div class="tag-document-list">
        ${matches.length ? matches.map((match) => {
          const page = match.page;
          const revision = match.latestTaggedRevision;
          const version = revision.version === page.version ? null : revision.version;
          return `
            <a class="tag-document-card" href="${pageHref(page.id, "article", version)}">
              <div class="tag-document-title">
                <div><strong>${escapeHtml(revision.title)}</strong><span>v${String(revision.version).padStart(3, "0")}</span></div>
                <em class="${match.isCurrent ? "current" : "historical"}">${match.isCurrent ? "현재 태그" : "과거 태그"}</em>
              </div>
              <p class="tag-document-summary">${escapeHtml(revision.summary)}</p>
              <dl class="tag-document-dates">
                <div><dt>최초 생성</dt><dd>${formatDate(page.created_at, true)}</dd></div>
                <div><dt>마지막 변경</dt><dd>${formatDate(page.updated_at, true)}</dd></div>
              </dl>
              <div class="tag-document-excerpt"><span>내용 일부</span><p>${escapeHtml(tagExplorer.plainTextExcerpt(revision.body))}</p></div>
            </a>
          `;
        }).join("") : '<div class="empty-state compact">선택한 태그 안에서 일치하는 문서가 없습니다.</div>'}
      </div>
    `;
  }

  function syncSearchControls() {
    searchModeButtons.forEach((button) => {
      const active = button.dataset.searchMode === searchMode;
      button.classList.toggle("active", active);
      button.setAttribute("aria-selected", String(active));
    });
    tagToolbar.hidden = searchMode !== "tags" || Boolean(selectedTag);
    tagSortButtons.forEach((button) => button.classList.toggle("active", button.dataset.tagSort === tagSort));
    searchInput.placeholder = searchMode === "pages"
      ? "제목, 내용, 태그 검색…"
      : selectedTag
        ? `#${selectedTag.name} 문서 안에서 검색…`
        : "태그 이름 또는 테마 검색…";
  }

  function renderSearch(query = "") {
    syncSearchControls();
    if (searchMode === "pages") renderPageSearch(query);
    else if (selectedTag) renderTagDocuments(selectedTag, query);
    else renderTagDirectory(query);
  }

  function setSearchMode(mode) {
    searchMode = mode === "tags" ? "tags" : "pages";
    selectedTag = null;
    searchInput.value = "";
    renderSearch();
  }

  function selectTag(tagName) {
    searchMode = "tags";
    const entry = tagByName.get(String(tagName).toLocaleLowerCase("ko-KR"));
    if (!entry) {
      selectedTag = null;
      searchInput.value = String(tagName);
      renderSearch(searchInput.value);
      return;
    }
    selectedTag = entry;
    searchInput.value = "";
    renderSearch();
  }

  function openSearch(tagName = null) {
    if (tagName) selectTag(tagName);
    else renderSearch(searchInput.value);
    searchDialog.classList.add("open");
    searchDialog.setAttribute("aria-hidden", "false");
    window.setTimeout(() => searchInput.focus(), 20);
  }

  function closeSearch() {
    searchDialog.classList.remove("open");
    searchDialog.setAttribute("aria-hidden", "true");
  }

  document.getElementById("search-trigger").addEventListener("click", () => openSearch());
  document.querySelector("[data-close-search]").addEventListener("click", closeSearch);
  searchInput.addEventListener("input", () => renderSearch(searchInput.value));
  dateFilterFrom.addEventListener("change", () => {
    dateRange.from = dateFilterFrom.value;
    if (dateRange.to && dateRange.from > dateRange.to) {
      dateRange.to = dateRange.from;
      dateFilterTo.value = dateRange.to;
    }
    rebuildSearchScope();
    renderSearch(searchInput.value);
  });
  dateFilterTo.addEventListener("change", () => {
    dateRange.to = dateFilterTo.value;
    if (dateRange.from && dateRange.to < dateRange.from) {
      dateRange.from = dateRange.to;
      dateFilterFrom.value = dateRange.from;
    }
    rebuildSearchScope();
    renderSearch(searchInput.value);
  });
  dateFilterClear.addEventListener("click", () => {
    dateRange = { from: "", to: "" };
    dateFilterFrom.value = "";
    dateFilterTo.value = "";
    rebuildSearchScope();
    renderSearch(searchInput.value);
  });
  searchModeButtons.forEach((button) => button.addEventListener("click", () => setSearchMode(button.dataset.searchMode)));
  tagSortButtons.forEach((button) => button.addEventListener("click", () => {
    tagSort = button.dataset.tagSort;
    renderSearch(searchInput.value);
  }));
  searchResults.addEventListener("click", (event) => {
    const tag = event.target.closest("[data-tag-name]")?.dataset.tagName;
    if (tag) {
      selectTag(tag);
      return;
    }
    if (event.target.closest("[data-tag-back]")) {
      selectedTag = null;
      searchInput.value = "";
      renderSearch();
      return;
    }
    if (event.target.closest("a")) closeSearch();
  });
  main.addEventListener("click", (event) => {
    const imageTrigger = event.target.closest("[data-image-viewer-src]");
    if (imageTrigger) {
      openImageViewer(imageTrigger);
      return;
    }
    const tag = event.target.closest("[data-open-tag]")?.dataset.openTag;
    if (tag) {
      openSearch(tag);
      return;
    }
    const treeView = event.target.closest("[data-tree-view]")?.dataset.treeView;
    if (treeView) {
      location.hash = treeHref(treeView);
      return;
    }
    const action = event.target.closest("[data-tree-action]")?.dataset.treeAction;
    if (!action) return;
    main.querySelectorAll(".tree-category").forEach((category) => {
      category.open = action === "expand";
    });
  });
  imageViewerScrim.addEventListener("click", closeImageViewer);
  document.getElementById("menu-button").addEventListener("click", () => document.body.classList.toggle("menu-open"));
  document.getElementById("sidebar-scrim").addEventListener("click", () => document.body.classList.remove("menu-open"));
  const sidebarTabs = [sidebarTabWiki, sidebarTabDb];
  sidebarTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => document.body.classList.remove("menu-open"));
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      const nextIndex = event.key === "Home"
        ? 0
        : event.key === "End"
          ? sidebarTabs.length - 1
          : (index + (event.key === "ArrowRight" ? 1 : -1) + sidebarTabs.length) % sidebarTabs.length;
      sidebarTabs[nextIndex].click();
      sidebarTabs[nextIndex].focus();
    });
  });
  if (hasLocalAccess) {
    publicWikiLink.hidden = false;
  }
  document.addEventListener("keydown", (event) => {
    if (!imageViewer.hidden && event.key === "Tab") {
      event.preventDefault();
      imageViewer.focus();
      return;
    }
    if (!imageViewer.hidden && event.key === "Escape") {
      closeImageViewer();
      return;
    }
    if (event.key === "/" && !/input|textarea/i.test(document.activeElement?.tagName || "")) {
      event.preventDefault();
      openSearch();
    }
    if (event.key === "Escape") {
      closeItemDbBake();
      closeSearch();
      document.body.classList.remove("menu-open");
    }
  });
  window.addEventListener("hashchange", renderPage);

  if (!location.hash && defaultPage) location.replace(pageHref(defaultPage));
  else renderPage();
})();
