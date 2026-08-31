(() => {
  "use strict";

  const wiki = window.PACKBOUND_WIKI;
  const itemDb = window.PACKBOUND_ITEM_DB;
  const itemDbTools = window.PACKBOUND_ITEM_DB_TOOLS;
  const monsterDb = window.PACKBOUND_MONSTER_DB;
  const monsterDbTools = window.PACKBOUND_MONSTER_DB_TOOLS;
  const waveDb = window.PACKBOUND_WAVE_DB;
  const waveDbTools = window.PACKBOUND_WAVE_DB_TOOLS;
  const animationDb = window.PACKBOUND_ANIMATION_DB;
  const animationDbTools = window.PACKBOUND_ANIMATION_DB_TOOLS;
  const fieldDb = window.PACKBOUND_FIELD_DB;
  const fieldDbTools = window.PACKBOUND_FIELD_DB_TOOLS;
  const combatDb = window.PACKBOUND_COMBAT_DB;
  const combatDbTools = window.PACKBOUND_COMBAT_DB_TOOLS;
  const runeBoardDb = window.PACKBOUND_RUNE_BOARD_DB;
  const masteryDb = window.PACKBOUND_MASTERY_DB;
  const masteryDbTools = window.PACKBOUND_MASTERY_DB_TOOLS;
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
  const itemDbEditorSpan = 5;
  const legacyLocalHostKey = `canUse${"Ro"}${"jo"}Control`;
  const localHostCheck = typeof localAccess?.isLocalHost === "function"
    ? localAccess.isLocalHost
    : localAccess?.[legacyLocalHostKey];
  const hasLocalAccess = typeof localHostCheck === "function"
    && Boolean(localHostCheck(window.location.hostname));
  const canShowExactTimestamps = Boolean(localAccess?.shouldShowExactTimestamps(window.location.hostname));
  const canEditItemDb = hasLocalAccess;
  let canEditMonsterDb = false;
  let canEditWaveDb = false;
  let canEditAnimationDb = false;
  let canEditMasteryDb = false;
  let canEditRuneBoardDb = false;
  let canOpenAnimationCuration = false;
  let searchMode = "pages";
  let tagSort = "recent";
  let selectedTag = null;
  let itemDbQuery = "";
  let itemDbFamily = "all";
  let itemDbEnabledFilter = "all";
  let itemDbCellFilter = { minimum: null, maximum: null };
  let itemDbSelectedSynergies = new Set();
  let itemDbEditorState = null;
  let itemDbScrollDockController = null;
  let itemDbBakeState = null;
  let itemDbNotice = "";
  let itemDbEffectCatalogOpen = true;
  let monsterDbQuery = "";
  let monsterDbEditorState = null;
  let monsterDbBakeState = null;
  let monsterDbNotice = "";
  let waveDbNotice = "";
  let waveDbBakeState = null;
  const initialWaveDbDocument = {
    schema_version: waveDb?.schema_version || 5,
    fields: waveDbTools?.deepClone(waveDb?.fields || []) || [],
    stages: waveDbTools?.deepClone(waveDb?.stages || []) || [],
  };
  let waveDbState = {
    selectedStageId: waveDb?.stages?.[0]?.id || "",
    document: initialWaveDbDocument,
    cleanDocument: waveDbTools?.deepClone(initialWaveDbDocument) || initialWaveDbDocument,
    placementHistory: waveDbTools?.createPlacementHistory(100) || { limit: 100, past: [], future: [] },
    activeWaves: {},
    activeLayers: {},
    selectedMonsters: {},
    dirty: false,
    saving: false,
  };
  let waveDbKeyboardBound = false;
  let animationDbState = {
    tab: "gallery",
    query: "",
    status: "all",
    gallerySubjectId: "",
    galleryAction: "",
    curationSubjectId: "",
    compare: [],
    variants: {},
  };
  let animationDbCurationNotice = "";
  let animationDbSelectionNotice = "";
  let animationDbSelectionSavingId = "";
  let animationDbBakeState = { loading: false, error: "", payload: null, status: "" };
  let animationDbWorkspaceState = {
    activeId: "",
    loadingId: "",
    url: "",
  };
  let fieldDbState = {
    query: "",
    fieldType: "all",
    selectedId: fieldDb?.fields?.[0]?.id || "",
  };
  let structuredDbState = { databaseId: null, query: "", filters: {} };
  let runeBoardExplorerState = {
    itemId: "",
    variant: 1,
    selectedCell: 0,
    regionFilter: null,
    gradeFilter: null,
    abilityFilter: "",
  };
  let runeBoardEditorState = null;
  let runeBoardBakeState = null;
  let runeBoardNotice = "";
  let imageViewerReturnFocus = null;
  let dateRange = { from: "", to: "" };
  let filteredPages = wiki?.pages || [];
  let tagIndex = [];
  let tagByName = new Map();
  const masteryDbEditor = masteryDbTools?.createEditor(masteryDb, combatDb) || null;

  async function refreshMonsterDbApiAccess() {
    if (!hasLocalAccess) return;
    try {
      const response = await fetch("/api/monster-db/status", {
        headers: { Accept: "application/json" },
        cache: "no-store",
      });
      const payload = await response.json().catch(() => ({}));
      canEditMonsterDb = response.ok && payload.editable === true && payload.api_version === 1;
      if (!canEditMonsterDb) {
        monsterDbNotice = response.status === 404
          ? "실행 중인 로컬 위키 서버가 MonsterDB 저장 API보다 오래되었습니다. 서버를 재시작해 주세요."
          : payload.error || `MonsterDB 저장 API를 확인하지 못했습니다. (${response.status})`;
      }
    } catch (error) {
      canEditMonsterDb = false;
      monsterDbNotice = `MonsterDB 저장 API에 연결하지 못했습니다. (${String(error.message || error)})`;
    }
    const route = readRoute();
    if (route.kind === "database" && route.slug === "monster-db") renderMonsterDb();
  }

  async function refreshWaveDbApiAccess() {
    if (!hasLocalAccess) return;
    try {
      const response = await fetch("/api/wave-db/status", {
        headers: { Accept: "application/json" },
        cache: "no-store",
      });
      const payload = await response.json().catch(() => ({}));
      canEditWaveDb = response.ok && payload.editable === true && payload.api_version === 1;
      if (!canEditWaveDb) {
        waveDbNotice = response.status === 404
          ? "실행 중인 로컬 위키 서버가 WaveDB 저장 API보다 오래되었습니다. 서버를 재시작해 주세요."
          : payload.error || `WaveDB 저장 API를 확인하지 못했습니다. (${response.status})`;
      }
    } catch (error) {
      canEditWaveDb = false;
      waveDbNotice = `WaveDB 저장 API에 연결하지 못했습니다. (${String(error.message || error)})`;
    }
    const route = readRoute();
    if (route.kind === "database" && route.slug === "wave-db") renderWaveDb({ preserveScroll: true });
  }

  async function refreshAnimationCurationApiAccess() {
    if (!hasLocalAccess) return;
    try {
      const response = await fetch("/api/animation-db/curation/status", {
        headers: { Accept: "application/json" },
        cache: "no-store",
      });
      const payload = await response.json().catch(() => ({}));
      canOpenAnimationCuration = response.ok
        && payload.available === true
        && payload.api_version === 1;
      if (!canOpenAnimationCuration) {
        animationDbCurationNotice = response.status === 404
          ? "실행 중인 로컬 위키 서버가 AnimationDB 큐레이션 API보다 오래되었습니다. 서버를 재시작해 주세요."
          : payload.error || `AnimationDB 큐레이션 API를 확인하지 못했습니다. (${response.status})`;
      }
    } catch (error) {
      canOpenAnimationCuration = false;
      animationDbCurationNotice = `AnimationDB 큐레이션 API에 연결하지 못했습니다. (${String(error.message || error)})`;
    }
    const route = readRoute();
    if (route.kind === "database" && route.slug === "animation-db") renderAnimationDb();
  }

  async function refreshAnimationDbApiAccess() {
    if (!hasLocalAccess) return;
    try {
      const response = await fetch("/api/animation-db/status", {
        headers: { Accept: "application/json" },
        cache: "no-store",
      });
      const payload = await response.json().catch(() => ({}));
      canEditAnimationDb = response.ok && payload.editable === true && payload.api_version === 1;
      if (!canEditAnimationDb) {
        animationDbSelectionNotice = response.status === 404
          ? "실행 중인 로컬 위키 서버가 AnimationDB 선택 API보다 오래되었습니다. 서버를 재시작해 주세요."
          : payload.error || `AnimationDB 선택 API를 확인하지 못했습니다. (${response.status})`;
      }
    } catch (error) {
      canEditAnimationDb = false;
      animationDbSelectionNotice = `AnimationDB 선택 API에 연결하지 못했습니다. (${String(error.message || error)})`;
    }
    const route = readRoute();
    if (route.kind === "database" && route.slug === "animation-db") renderAnimationDb();
  }

  async function refreshMasteryDbApiAccess() {
    if (!hasLocalAccess || !masteryDbEditor) return;
    try {
      const response = await fetch("/api/mastery-db/status", {
        headers: { Accept: "application/json" },
        cache: "no-store",
      });
      const payload = await response.json().catch(() => ({}));
      canEditMasteryDb = response.ok && payload.editable === true && payload.api_version === 1;
      masteryDbEditor.setEditable(canEditMasteryDb);
      if (!canEditMasteryDb) {
        masteryDbEditor.notice = response.status === 404
          ? "실행 중인 로컬 위키 서버가 마스터리 DB 저장 API보다 오래되었습니다. 서버를 재시작해 주세요."
          : payload.error || `마스터리 DB 저장 API를 확인하지 못했습니다. (${response.status})`;
      }
    } catch (error) {
      canEditMasteryDb = false;
      masteryDbEditor.setEditable(false);
      masteryDbEditor.notice = `마스터리 DB 저장 API에 연결하지 못했습니다. (${String(error.message || error)})`;
    }
    const route = readRoute();
    if (route.kind === "database" && route.slug === "mastery-db") renderMasteryDb();
  }

  async function refreshRuneBoardDbApiAccess() {
    if (!hasLocalAccess) return;
    try {
      const response = await fetch("/api/rune-board-db/status", {
        headers: { Accept: "application/json" },
        cache: "no-store",
      });
      const payload = await response.json().catch(() => ({}));
      canEditRuneBoardDb = response.ok && payload.editable === true && payload.api_version === 1;
      if (!canEditRuneBoardDb) {
        runeBoardNotice = response.status === 404
          ? "실행 중인 로컬 위키 서버가 RuneBoardDB 편집 API보다 오래되었습니다. 서버를 재시작해 주세요."
          : payload.error || `RuneBoardDB 편집 API를 확인하지 못했습니다. (${response.status})`;
      }
    } catch (error) {
      canEditRuneBoardDb = false;
      runeBoardNotice = `RuneBoardDB 편집 API에 연결하지 못했습니다. (${String(error.message || error)})`;
    }
    const route = readRoute();
    if (route.kind === "database" && route.slug === "rune-board-variants") {
      renderRuneBoardExplorer({ preserveScroll: true });
    }
  }
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
  if (!combatDb || !combatDbTools || !runeBoardDb || !monsterDb || !monsterDbTools || !animationDb || !animationDbTools) {
    main.innerHTML = '<div class="empty-state">구조화 DB 모듈을 불러오지 못했습니다. <code>python3 tools/wiki.py build</code>를 실행하세요.</div>';
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
      {
        id: "monster-db",
        title: "몬스터 데이터베이스",
        description: "AI · 능력치 · 공격 · 스폰",
        count: monsterDb?.count || 0,
        unit: "MONSTERS",
        href: databaseHref("monster-db"),
      },
      {
        id: "field-db",
        title: "필드 데이터베이스",
        description: "콘셉트 · 바닥 · 경계 · 오브젝트",
        count: fieldDb?.count || 0,
        unit: "FIELDS",
        href: databaseHref("field-db"),
      },
      {
        id: "wave-db",
        title: "스테이지·웨이브 DB",
        description: "필드 · 웨이브 · 스폰 타임라인",
        count: waveDb?.stage_count || 0,
        unit: "STAGES",
        href: databaseHref("wave-db"),
      },
      {
        id: "animation-db",
        title: "애니메이션 데이터베이스",
        description: "큐레이션 · GIF · 프레임 · 상태",
        count: animationDb?.count || 0,
        unit: "ANIMS",
        href: databaseHref("animation-db"),
      },
      {
        id: "mastery-db",
        title: "캐릭터 마스터리 DB",
        description: "스킬 트리 · 능력치 · 해제 조건",
        count: masteryDb?.node_count || 0,
        unit: "SKILLS",
        href: databaseHref("mastery-db"),
      },
      ...[...(combatDb.databases || []), ...(runeBoardDb.databases || [])].map((database) => ({
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
    const cellSize = 14;
    const width = item.bounds?.width || 1;
    const height = item.bounds?.height || 1;
    const occupied = new Set(item.coordinates.map(([x, y]) => `${x},${y}`));
    const cells = [];
    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        cells.push(`<i class="${occupied.has(`${x},${y}`) ? "occupied" : "empty"}" style="left:${x * cellSize + 4}px;top:${y * cellSize + 4}px"></i>`);
      }
    }
    const grid = `<span class="itemdb-footprint-grid" style="width:${width * cellSize + 8}px;height:${height * cellSize + 8}px">${cells.join("")}</span>`;
    const preview = canEditItemDb
      ? `<button type="button" class="itemdb-footprint-trigger" data-itemdb-edit="${escapeHtml(item.id)}" aria-label="${escapeHtml(item.name)} ${item.occupied_cells}칸 점유 형태 편집">${grid}</button>`
      : grid;
    return `<div class="itemdb-footprint">${preview}<strong>${item.occupied_cells}칸</strong></div>`;
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
      <details class="itemdb-effect-catalog" data-itemdb-effect-catalog${itemDbEffectCatalogOpen ? " open" : ""}>
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
      <tr data-itemdb-item-id="${escapeHtml(item.id)}" data-itemdb-enabled="${item.enabled}">
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
        <td><strong>${escapeHtml(item.role)}</strong><small>${escapeHtml(`${Number(item.weight_kg).toFixed(1)}Kg`)}</small></td>
        <td class="itemdb-concept">${escapeHtml(item.concept)}</td>
        <td><small>${item.support_effect
          ? `<strong>${escapeHtml(item.support_effect.name)}</strong><br>${escapeHtml(item.support_effect.summary)}`
          : item.combat_art
            ? `${escapeHtml(item.combat_art.native_facing)} · ${escapeHtml(item.combat_art.attack_motion)} · ${escapeHtml(item.combat_art.pivot)}`
            : "장착 아이콘"}</small></td>
        <td><button type="button" class="itemdb-rune-link" data-itemdb-rune-board="${escapeHtml(item.id)}"><strong>10</strong><span>룬 보드 후보</span></button></td>
      </tr>
    `).join("");
  }

  function findItemDbRow(itemId) {
    return [...document.querySelectorAll("[data-itemdb-item-id]")]
      .find((row) => row.dataset.itemdbItemId === itemId) || null;
  }

  function captureItemDbViewState(itemId) {
    const row = findItemDbRow(itemId);
    const table = row?.closest(".itemdb-table-wrap");
    return {
      itemId,
      pageX: window.scrollX,
      pageY: window.scrollY,
      rowTop: row?.getBoundingClientRect().top ?? null,
      tableScrollLeft: table?.scrollLeft ?? 0,
    };
  }

  function restoreItemDbViewState(state) {
    if (!state) return;
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo(state.pageX, state.pageY);
    const row = findItemDbRow(state.itemId);
    const table = row?.closest(".itemdb-table-wrap");
    if (table) table.scrollLeft = state.tableScrollLeft;
    if (row && Number.isFinite(state.rowTop)) {
      window.scrollBy(0, row.getBoundingClientRect().top - state.rowTop);
    }
    root.style.scrollBehavior = previousScrollBehavior;
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
    const viewState = captureItemDbViewState(item.id);
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
      renderItemDb({ viewState });
    } catch (error) {
      button.disabled = false;
      itemDbNotice = String(error.message || error);
      renderItemDb({ viewState });
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
    state.imageCenterX = Math.max(-itemDbEditorSpan, Math.min(itemDbEditorSpan * 2, state.imageCenterX));
    state.imageCenterY = Math.max(-itemDbEditorSpan, Math.min(itemDbEditorSpan * 2, state.imageCenterY));
  }

  function squareEditorBounds(cells) {
    const resolved = cells.length ? cells : [[0, 0]];
    const xs = resolved.map(([x]) => x);
    const ys = resolved.map(([, y]) => y);
    const minX = Math.min(...xs);
    const minY = Math.min(...ys);
    const maxX = Math.max(...xs);
    const maxY = Math.max(...ys);
    return {
      minX,
      minY,
      maxX,
      maxY,
      width: maxX - minX + 1,
      height: maxY - minY + 1,
      centerX: (minX + maxX + 1) / 2,
      centerY: (minY + maxY + 1) / 2,
    };
  }

  function editorImagePersistence(state) {
    const footprint = [...state.selected].map((key) => key.split(",").map(Number));
    const bounds = squareEditorBounds(footprint);
    const footprintSpan = Math.max(bounds.width, bounds.height);
    return {
      scale: state.imageSize / footprintSpan,
      offsetX: state.imageCenterX - bounds.centerX,
      offsetY: state.imageCenterY - bounds.centerY,
    };
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
    const persistence = editorImagePersistence(state);
    const validation = itemDbTools.validateLayout(
      [...state.selected].map((key) => key.split(",").map(Number)),
      persistence.scale,
      state.rotation,
    );

    stage.dataset.mode = state.mode;
    image.style.left = `${(state.imageCenterX - state.imageSize / 2) / itemDbEditorSpan * 100}%`;
    image.style.top = `${(state.imageCenterY - state.imageSize / 2) / itemDbEditorSpan * 100}%`;
    image.style.width = `${state.imageSize / itemDbEditorSpan * 100}%`;
    image.style.height = `${state.imageSize / itemDbEditorSpan * 100}%`;
    image.style.transform = `rotate(${state.rotation}deg)`;
    image.style.opacity = state.mode === "cells" ? "0.3" : "1";
    modeButton.textContent = state.mode === "cells" ? "이미지 이동하기" : "칸 설정하기";
    modeText.textContent = state.mode === "cells"
      ? "이미지는 잠겼습니다. 바닥 칸을 눌러 점유 영역을 선택하세요."
      : "이미지를 드래그해 위치를 정한 뒤 칸 설정하기를 누르세요.";
    count.textContent = `${state.selected.size}칸 선택`;
    position.textContent = `이미지 중심 X ${state.imageCenterX.toFixed(2)} · Y ${state.imageCenterY.toFixed(2)} · 회전 ${state.rotation}°`;
    dialog.querySelectorAll("[data-itemdb-editor-cell]").forEach((cell) => {
      cell.classList.toggle("selected", state.selected.has(cell.dataset.itemdbEditorCell));
      cell.setAttribute("aria-pressed", String(state.selected.has(cell.dataset.itemdbEditorCell)));
    });
    dialog.querySelector("[data-itemdb-editor-save]").disabled = state.saving;
    const error = dialog.querySelector("[data-itemdb-editor-error]");
    if (!state.showErrors && !state.serverError) {
      error.hidden = true;
      return;
    }
    error.textContent = state.serverError || validation.errors.join(" ");
    error.hidden = !state.serverError && validation.valid;
  }

  async function saveItemDbEditor() {
    const state = itemDbEditorState;
    const dialog = document.getElementById("itemdb-editor-dialog");
    if (!state || !dialog || state.saving) return;
    const coordinates = [...state.selected].map((key) => key.split(",").map(Number));
    const persistence = editorImagePersistence(state);
    const validation = itemDbTools.validateLayout(coordinates, persistence.scale, state.rotation);
    state.showErrors = true;
    if (!validation.valid) {
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
          image_x: persistence.offsetX,
          image_y: persistence.offsetY,
          rotation_degrees: validation.rotation,
        }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.error || `저장에 실패했습니다. (${response.status})`);
      const index = itemDb.items.findIndex((item) => item.id === state.item.id);
      if (index >= 0) itemDb.items[index] = payload.item;
      itemDbNotice = `${payload.item.name}의 ${payload.item.occupied_cells}칸 사각 점유 형태와 이미지 배치·${payload.item.image_layout.rotation_degrees}° 회전을 저장했습니다.`;
      const viewState = state.viewState;
      closeItemDbEditor();
      renderItemDb({ viewState });
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
    const viewState = captureItemDbViewState(item.id);
    closeItemDbEditor();
    const layout = item.image_layout || {
      scale: 1,
      offset_x: 0,
      offset_y: 0,
      rotation_degrees: 0,
    };
    const initialBounds = squareEditorBounds(item.coordinates);
    const initialSpan = Math.max(initialBounds.width, initialBounds.height);
    itemDbEditorState = {
      item,
      scale: Number(layout.scale),
      imageBaseSize: initialSpan,
      imageSize: initialSpan * Number(layout.scale),
      imageCenterX: initialBounds.centerX + Number(layout.offset_x),
      imageCenterY: initialBounds.centerY + Number(layout.offset_y),
      rotation: itemDbTools.normalizeRotation(layout.rotation_degrees || 0),
      selected: new Set(item.coordinates.map(([x, y]) => editorCellKey(x, y))),
      viewState,
      mode: "move",
      saving: false,
      showErrors: false,
      serverError: "",
      drag: null,
    };
    clampEditorImage(itemDbEditorState);

    const gridCells = [];
    for (let y = 0; y < itemDbEditorSpan; y += 1) {
      for (let x = 0; x < itemDbEditorSpan; x += 1) {
        const key = editorCellKey(x, y);
        const selected = itemDbEditorState.selected.has(key);
        gridCells.push(`<button type="button" data-itemdb-editor-cell="${key}" aria-label="X ${x}, Y ${y} 사각 칸" aria-pressed="${selected}"></button>`);
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
                <label class="itemdb-editor-rotation-label" for="itemdb-editor-rotation"><span>Image Rotation</span><small>90° 단위 · 뒤집기 불가</small></label>
                <div class="itemdb-editor-rotation">
                  <button type="button" data-itemdb-editor-rotate="-90" aria-label="이미지를 왼쪽으로 90도 회전">−90°</button>
                  <input id="itemdb-editor-rotation" type="number" min="0" max="270" step="90" value="${escapeHtml(itemDbEditorState.rotation)}" aria-label="이미지 회전각">
                  <button type="button" data-itemdb-editor-rotate="90" aria-label="이미지를 오른쪽으로 90도 회전">+90°</button>
                </div>
                <p data-itemdb-editor-mode-text></p>
                <button type="button" class="itemdb-editor-mode" data-itemdb-editor-mode>칸 설정하기</button>
                <div class="itemdb-editor-rules">
                  <strong>저장 규칙</strong>
                  <span>1칸 이상 선택</span><span>최대 5×5 사각 범위</span><span>상하좌우 변으로 모두 연결</span><span>0°·90°·180°·270° 회전</span>
                </div>
                <p class="itemdb-editor-error" data-itemdb-editor-error role="alert" hidden></p>
              </aside>
            </div>
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
      else itemDbEditorState.selected.add(key);
      itemDbEditorState.showErrors = false;
      itemDbEditorState.serverError = "";
      updateItemDbEditor();
    }));
    scaleInput.addEventListener("input", () => {
      const nextScale = Number(scaleInput.value);
      if (!Number.isFinite(nextScale) || nextScale <= 0) return;
      itemDbEditorState.scale = nextScale;
      itemDbEditorState.imageSize = itemDbEditorState.imageBaseSize * nextScale;
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
        imageCenterX: itemDbEditorState.imageCenterX,
        imageCenterY: itemDbEditorState.imageCenterY,
      };
    });
    image.addEventListener("pointermove", (event) => {
      const drag = itemDbEditorState?.drag;
      if (!drag || drag.pointerId !== event.pointerId) return;
      const bounds = stage.getBoundingClientRect();
      itemDbEditorState.imageCenterX = drag.imageCenterX
        + (event.clientX - drag.clientX) / bounds.width * itemDbEditorSpan;
      itemDbEditorState.imageCenterY = drag.imageCenterY
        + (event.clientY - drag.clientY) / bounds.height * itemDbEditorSpan;
      clampEditorImage(itemDbEditorState);
      updateItemDbEditor();
    });
    const finishDrag = (event) => {
      if (itemDbEditorState?.drag?.pointerId === event.pointerId) itemDbEditorState.drag = null;
    };
    image.addEventListener("pointerup", finishDrag);
    image.addEventListener("pointercancel", finishDrag);
    dialog.querySelector("[data-itemdb-editor-save]").addEventListener("click", saveItemDbEditor);
    updateItemDbEditor();
    scaleInput.focus();
  }

  function itemDbCellLimits() {
    const cellCounts = (itemDb?.items || [])
      .map((item) => Number(item.occupied_cells))
      .filter(Number.isFinite);
    return {
      minimum: cellCounts.length ? Math.min(...cellCounts) : 0,
      maximum: cellCounts.length ? Math.max(...cellCounts) : 0,
    };
  }

  function currentItemDbCellRange() {
    const limits = itemDbCellLimits();
    const minimum = Number.isFinite(itemDbCellFilter.minimum)
      ? Math.max(limits.minimum, Math.min(itemDbCellFilter.minimum, limits.maximum))
      : limits.minimum;
    const maximum = Number.isFinite(itemDbCellFilter.maximum)
      ? Math.max(limits.minimum, Math.min(itemDbCellFilter.maximum, limits.maximum))
      : limits.maximum;
    return minimum <= maximum
      ? { minimum, maximum, limits }
      : { minimum: maximum, maximum: minimum, limits };
  }

  function renderItemDbFilterFacets() {
    const range = currentItemDbCellRange();
    const synergyCounts = new Map((itemDb.synergy_catalog || []).map((entry) => [
      entry.id,
      itemDb.items.filter((item) => item.synergies?.includes(entry.id)).length,
    ]));
    return `
      <div class="itemdb-facet-filters">
        <section class="itemdb-cell-filter" aria-labelledby="itemdb-cell-filter-title">
          <header>
            <span><strong id="itemdb-cell-filter-title">점유 칸 수</strong><small data-itemdb-cell-filter-summary></small></span>
            <button type="button" data-itemdb-cell-reset>전체</button>
          </header>
          <div>
            <label><span>최소</span><input type="number" inputmode="numeric" step="1" min="${range.limits.minimum}" max="${range.limits.maximum}" value="${range.minimum}" data-itemdb-cell-min aria-label="최소 점유 칸 수"></label>
            <i>~</i>
            <label><span>최대</span><input type="number" inputmode="numeric" step="1" min="${range.limits.minimum}" max="${range.limits.maximum}" value="${range.maximum}" data-itemdb-cell-max aria-label="최대 점유 칸 수"></label>
          </div>
        </section>
        <section class="itemdb-enabled-filter" aria-labelledby="itemdb-enabled-filter-title">
          <header>
            <span><strong id="itemdb-enabled-filter-title">게임 사용</strong><small>OFF 아이템 표시 여부</small></span>
          </header>
          <div role="group" aria-label="게임 사용 아이템 필터">
            <button type="button" data-itemdb-enabled-filter="all" aria-pressed="${itemDbEnabledFilter === "all"}"><strong>전체 목록</strong><small>${itemDb.count}개</small></button>
            <button type="button" data-itemdb-enabled-filter="on" aria-pressed="${itemDbEnabledFilter === "on"}"><strong>게임 ON만</strong><small>${itemDb.active_count}개</small></button>
          </div>
        </section>
        <section class="itemdb-synergy-filter" aria-labelledby="itemdb-synergy-filter-title">
          <header>
            <span><strong id="itemdb-synergy-filter-title">시너지</strong><small>여러 개를 켜면 하나라도 일치하는 아이템 표시</small></span>
            <em data-itemdb-synergy-filter-summary></em>
            <button type="button" data-itemdb-synergy-clear>전체 해제</button>
          </header>
          <div class="itemdb-synergy-filter-grid">${(itemDb.synergy_catalog || []).map((entry) => {
            const selected = itemDbSelectedSynergies.has(entry.id);
            const color = entry.color || { r: 110, g: 140, b: 170 };
            return `
              <button type="button" data-itemdb-synergy="${escapeHtml(entry.id)}" aria-pressed="${selected}" aria-label="${escapeHtml(entry.label)} 시너지 필터 ${selected ? "끄기" : "켜기"}" title="${escapeHtml(entry.family_label)} · ${escapeHtml(entry.id)}" style="--synergy-rgb:${color.r},${color.g},${color.b}">
                <img src="${escapeHtml(entry.icon_url)}" alt="" loading="lazy" decoding="async">
                <span><strong>${escapeHtml(entry.label)}</strong><small>${synergyCounts.get(entry.id) || 0}개</small></span>
              </button>
            `;
          }).join("")}</div>
        </section>
      </div>
    `;
  }

  function syncItemDbFilterControls() {
    const range = currentItemDbCellRange();
    const minimumInput = document.querySelector("[data-itemdb-cell-min]");
    const maximumInput = document.querySelector("[data-itemdb-cell-max]");
    if (minimumInput) minimumInput.value = String(range.minimum);
    if (maximumInput) maximumInput.value = String(range.maximum);
    const cellSummary = document.querySelector("[data-itemdb-cell-filter-summary]");
    if (cellSummary) cellSummary.textContent = `${range.minimum}~${range.maximum}칸`;
    const cellReset = document.querySelector("[data-itemdb-cell-reset]");
    if (cellReset) {
      cellReset.disabled = range.minimum === range.limits.minimum
        && range.maximum === range.limits.maximum;
    }
    document.querySelectorAll("[data-itemdb-enabled-filter]").forEach((button) => {
      const selected = button.dataset.itemdbEnabledFilter === itemDbEnabledFilter;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    document.querySelectorAll("[data-itemdb-synergy]").forEach((button) => {
      const selected = itemDbSelectedSynergies.has(button.dataset.itemdbSynergy);
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", String(selected));
      const label = button.querySelector("strong")?.textContent || button.dataset.itemdbSynergy;
      button.setAttribute("aria-label", `${label} 시너지 필터 ${selected ? "끄기" : "켜기"}`);
    });
    const synergySummary = document.querySelector("[data-itemdb-synergy-filter-summary]");
    if (synergySummary) {
      synergySummary.textContent = itemDbSelectedSynergies.size
        ? `${itemDbSelectedSynergies.size}개 ON · OR`
        : "선택 없음 · 전체 표시";
    }
    const synergyClear = document.querySelector("[data-itemdb-synergy-clear]");
    if (synergyClear) synergyClear.disabled = itemDbSelectedSynergies.size === 0;
  }

  function setItemDbCellFilter(bound, rawValue) {
    if (rawValue === "") return;
    const numericValue = Math.round(Number(rawValue));
    if (!Number.isFinite(numericValue)) return;
    const range = currentItemDbCellRange();
    const clamped = Math.max(range.limits.minimum, Math.min(numericValue, range.limits.maximum));
    if (bound === "minimum") {
      itemDbCellFilter.minimum = clamped;
      itemDbCellFilter.maximum = Math.max(clamped, range.maximum);
    } else {
      itemDbCellFilter.minimum = Math.min(range.minimum, clamped);
      itemDbCellFilter.maximum = clamped;
    }
    renderItemDbResults();
  }

  function cleanupItemDbFloatingScroll() {
    if (!itemDbScrollDockController) return;
    itemDbScrollDockController.abort();
    itemDbScrollDockController = null;
    document.querySelector(".itemdb-scroll-dock")?.remove();
  }

  function setupItemDbFloatingScroll() {
    cleanupItemDbFloatingScroll();
    const wrappers = [...document.querySelectorAll(".itemdb-table-wrap")];
    if (!wrappers.length) return;
    const controller = new AbortController();
    itemDbScrollDockController = controller;
    const dock = document.createElement("div");
    dock.className = "itemdb-scroll-dock";
    dock.hidden = true;
    dock.setAttribute("role", "scrollbar");
    dock.setAttribute("aria-label", "현재 ItemDB 표 가로 스크롤");
    dock.innerHTML = "<i aria-hidden=\"true\"></i>";
    document.body.appendChild(dock);
    const spacer = dock.firstElementChild;
    let activeWrapper = null;
    let syncing = false;
    let scheduled = false;

    const syncDockPosition = () => {
      scheduled = false;
      const viewportTop = 64;
      const viewportBottom = window.innerHeight - 8;
      const viewportCenter = (viewportTop + viewportBottom) / 2;
      const visible = wrappers
        .map((wrapper) => ({ wrapper, rect: wrapper.getBoundingClientRect() }))
        .filter(({ wrapper, rect }) => (
          wrapper.scrollWidth > wrapper.clientWidth + 1
          && rect.bottom > viewportTop
          && rect.top < viewportBottom
        ));
      if (!visible.length) {
        activeWrapper = null;
        dock.hidden = true;
        return;
      }
      const selected = visible.find(({ rect }) => rect.top <= viewportCenter && rect.bottom >= viewportCenter)
        || visible.sort((left, right) => (
          Math.abs((left.rect.top + left.rect.bottom) / 2 - viewportCenter)
          - Math.abs((right.rect.top + right.rect.bottom) / 2 - viewportCenter)
        ))[0];
      activeWrapper = selected.wrapper;
      const nativeScrollbarVisible = selected.rect.bottom <= viewportBottom;
      if (nativeScrollbarVisible) {
        dock.hidden = true;
        return;
      }
      const left = Math.max(12, selected.rect.left);
      const width = Math.max(120, Math.min(selected.rect.width, window.innerWidth - left - 12));
      dock.style.left = `${left}px`;
      dock.style.width = `${width}px`;
      spacer.style.width = `${activeWrapper.scrollWidth}px`;
      syncing = true;
      dock.scrollLeft = activeWrapper.scrollLeft;
      syncing = false;
      dock.setAttribute("aria-valuemin", "0");
      dock.setAttribute("aria-valuemax", String(activeWrapper.scrollWidth - activeWrapper.clientWidth));
      dock.setAttribute("aria-valuenow", String(Math.round(activeWrapper.scrollLeft)));
      dock.hidden = false;
    };
    const schedule = () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(syncDockPosition);
    };

    dock.addEventListener("scroll", () => {
      if (syncing || !activeWrapper) return;
      syncing = true;
      activeWrapper.scrollLeft = dock.scrollLeft;
      dock.setAttribute("aria-valuenow", String(Math.round(dock.scrollLeft)));
      syncing = false;
    }, { signal: controller.signal, passive: true });
    wrappers.forEach((wrapper) => {
      wrapper.addEventListener("scroll", () => {
        if (syncing || wrapper !== activeWrapper) return;
        syncing = true;
        dock.scrollLeft = wrapper.scrollLeft;
        dock.setAttribute("aria-valuenow", String(Math.round(wrapper.scrollLeft)));
        syncing = false;
      }, { signal: controller.signal, passive: true });
    });
    window.addEventListener("scroll", schedule, { signal: controller.signal, passive: true });
    window.addEventListener("resize", schedule, { signal: controller.signal, passive: true });
    const observer = new ResizeObserver(schedule);
    wrappers.forEach((wrapper) => observer.observe(wrapper));
    controller.signal.addEventListener("abort", () => observer.disconnect(), { once: true });
    syncDockPosition();
  }

  function renderItemDbResults() {
    const results = document.getElementById("itemdb-results");
    const resultCount = document.getElementById("itemdb-result-count");
    if (!results || !resultCount || !itemDb || !itemDbTools) return;
    const cellRange = currentItemDbCellRange();
    const filtered = itemDbTools.filterItems(itemDb.items, itemDbQuery, itemDbFamily, {
      minimumCells: cellRange.minimum,
      maximumCells: cellRange.maximum,
      synergies: [...itemDbSelectedSynergies],
      enabledOnly: itemDbEnabledFilter === "on",
    });
    resultCount.textContent = `${filtered.length}개 표시`;
    document.querySelectorAll("[data-itemdb-family]").forEach((button) => {
      button.classList.toggle("active", button.dataset.itemdbFamily === itemDbFamily);
    });
    syncItemDbFilterControls();
    if (!filtered.length) {
      cleanupItemDbFloatingScroll();
      results.innerHTML = '<div class="empty-state">조건에 맞는 아이템이 없습니다.</div>';
      return;
    }
    results.innerHTML = itemDbTools.groupByFamily(filtered, itemDb.families).map((family) => `
      <section class="itemdb-family-section">
        <header><h2>${escapeHtml(family.label)}</h2><span>${family.items.length}개</span></header>
        <div class="itemdb-table-wrap">
          <table class="itemdb-table">
            <thead><tr><th>이미지</th><th>게임</th><th>아이템</th><th>부위·형태</th><th>사각 점유</th><th>역할·무게</th><th>콘셉트</th><th>전투·지원 효과</th><th>룬 보드</th></tr></thead>
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
    results.querySelectorAll("[data-itemdb-rune-board]").forEach((button) => {
      button.addEventListener("click", () => {
        runeBoardExplorerState = {
          itemId: button.dataset.itemdbRuneBoard,
          variant: 1,
          selectedCell: 0,
          regionFilter: null,
          gradeFilter: null,
          abilityFilter: "",
        };
        window.location.hash = databaseHref("rune-board-variants");
      });
    });
    setupItemDbFloatingScroll();
  }

  function renderItemDb({ viewState = null } = {}) {
    const existingEffectCatalog = document.querySelector("[data-itemdb-effect-catalog]");
    if (existingEffectCatalog) itemDbEffectCatalogOpen = existingEffectCatalog.open;
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
            <div><h1>ItemDB</h1><p>알파 장비 ${itemDb.count}종의 투명 이미지, 사각 점유 형태, 무게, 공격 리소스와 보조 효과를 한 곳에서 비교합니다. 공격 무기와 보조무기는 같은 6칸을 공유하며 보조무기는 최대 2개입니다.</p></div>
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
            <div><span>권장 효율 조합</span><strong>공격 5 + 보조 1</strong></div>
            <div><span>DB 리비전</span><code>${escapeHtml(itemDb.revision || "—")}</code></div>
            <div><span>단일 원본</span><code>${escapeHtml(itemDb.source)}</code></div>
          </div>
        </header>
        <section class="itemdb-toolbar" aria-label="ItemDB 검색과 분류">
          <label><span class="visually-hidden">아이템 검색</span><input id="itemdb-search" type="search" value="${escapeHtml(itemDbQuery)}" placeholder="이름, ID, 부위, 형태, 역할, 콘셉트 검색…"></label>
          <div class="itemdb-family-filter" role="group" aria-label="아이템 대분류">
            <button type="button" data-itemdb-family="all">전체 <span>${itemDb.active_count}/${itemDb.count}</span></button>
            ${itemDb.families.map((family) => `<button type="button" data-itemdb-family="${escapeHtml(family.id)}">${escapeHtml(family.label)} <span>${family.active_count}/${family.count}</span></button>`).join("")}
          </div>
          <strong id="itemdb-result-count"></strong>
          ${renderItemDbFilterFacets()}
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
    document.querySelector("[data-itemdb-cell-min]")?.addEventListener("input", (event) => {
      setItemDbCellFilter("minimum", event.target.value);
    });
    document.querySelector("[data-itemdb-cell-max]")?.addEventListener("input", (event) => {
      setItemDbCellFilter("maximum", event.target.value);
    });
    document.querySelectorAll("[data-itemdb-cell-min], [data-itemdb-cell-max]").forEach((input) => {
      input.addEventListener("change", syncItemDbFilterControls);
    });
    document.querySelector("[data-itemdb-cell-reset]")?.addEventListener("click", () => {
      itemDbCellFilter = { minimum: null, maximum: null };
      renderItemDbResults();
    });
    document.querySelectorAll("[data-itemdb-enabled-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        itemDbEnabledFilter = button.dataset.itemdbEnabledFilter;
        renderItemDbResults();
      });
    });
    document.querySelectorAll("[data-itemdb-synergy]").forEach((button) => {
      button.addEventListener("click", () => {
        const synergyId = button.dataset.itemdbSynergy;
        if (itemDbSelectedSynergies.has(synergyId)) itemDbSelectedSynergies.delete(synergyId);
        else itemDbSelectedSynergies.add(synergyId);
        renderItemDbResults();
      });
    });
    document.querySelector("[data-itemdb-synergy-clear]")?.addEventListener("click", () => {
      itemDbSelectedSynergies.clear();
      renderItemDbResults();
    });
    const effectCatalog = document.querySelector("[data-itemdb-effect-catalog]");
    effectCatalog?.addEventListener("toggle", () => {
      itemDbEffectCatalogOpen = effectCatalog.open;
    });
    document.querySelector("[data-itemdb-bake]")?.addEventListener("click", openItemDbBake);
    renderItemDbResults();
    document.body.classList.remove("menu-open");
    if (viewState) restoreItemDbViewState(viewState);
    else window.scrollTo(0, 0);
  }

  function runeBoardCatalogItem(itemId) {
    return (itemDb?.items || []).find((item) => item.id === itemId) || null;
  }

  function runeBoardGrade(grade) {
    return runeBoardDb?.explorer?.contract?.grade_definitions?.find((entry) => entry.grade === grade)
      || { grade, name: `G${grade}`, color: "#59616B" };
  }

  function decodeRuneBoardIndices(encoded) {
    try {
      const binary = window.atob(encoded || "");
      return Uint8Array.from(binary, (character) => character.charCodeAt(0));
    } catch (_error) {
      return new Uint8Array();
    }
  }

  function runeBoardPixelLayout(geometry) {
    const cellWidth = 30;
    const cellHeight = 26;
    const xStep = cellWidth * 0.75;
    const points = geometry.map((cell) => ({
      ...cell,
      pixelX: cell.q * xStep,
      pixelY: (cell.r + cell.q / 2) * cellHeight,
    }));
    const minX = Math.min(...points.map((point) => point.pixelX));
    const minY = Math.min(...points.map((point) => point.pixelY));
    const maxX = Math.max(...points.map((point) => point.pixelX));
    const maxY = Math.max(...points.map((point) => point.pixelY));
    const padding = 22;
    return {
      width: Math.ceil(maxX - minX + cellWidth + padding * 2),
      height: Math.ceil(maxY - minY + cellHeight + padding * 2),
      cells: points.map((point) => ({
        ...point,
        left: Math.round(point.pixelX - minX + padding),
        top: Math.round(point.pixelY - minY + padding),
      })),
    };
  }

  function runeBoardAbilityMeta(item, code) {
    const explorer = runeBoardDb?.explorer;
    const ability = item.ability_definitions?.[code];
    const structural = explorer?.structural_rare_catalog?.[code];
    return {
      code,
      label: ability?.name || structural?.label || (code === "NUMERIC_RARE" ? "수치형 레어 풀" : "고유 레어 풀"),
    };
  }

  function renderRuneBoardRegionBoundaries(layout) {
    const byCoordinate = new Map(layout.cells.map((cell) => [`${cell.q},${cell.r}`, cell]));
    const directions = [
      { dq: 0, dr: -1, corners: [0, 1] },
      { dq: 1, dr: -1, corners: [1, 2] },
      { dq: 1, dr: 0, corners: [2, 3] },
      { dq: 0, dr: 1, corners: [3, 4] },
      { dq: -1, dr: 1, corners: [4, 5] },
      { dq: -1, dr: 0, corners: [5, 0] },
    ];
    const corners = [[7.5, 0], [22.5, 0], [30, 13], [22.5, 26], [7.5, 26], [0, 13]];
    const lines = [];
    layout.cells.forEach((cell) => {
      directions.forEach(({ dq, dr, corners: edgeCorners }) => {
        const neighbor = byCoordinate.get(`${cell.q + dq},${cell.r + dr}`);
        if (neighbor?.region === cell.region) return;
        if (neighbor && cell.index > neighbor.index) return;
        const [from, to] = edgeCorners.map((index) => corners[index]);
        const regionB = neighbor?.region ?? cell.region;
        lines.push(`
          <line class="rune-region-boundary" data-rune-region-a="${cell.region}" data-rune-region-b="${regionB}"
            x1="${cell.left + from[0]}" y1="${cell.top + from[1]}" x2="${cell.left + to[0]}" y2="${cell.top + to[1]}"
            style="--boundary-a:${escapeHtml(runeBoardGrade(cell.region).color)};--boundary-b:${escapeHtml(runeBoardGrade(regionB).color)}" />
        `);
      });
    });
    return `<svg class="rune-region-boundaries" viewBox="0 0 ${layout.width} ${layout.height}" aria-hidden="true">${lines.join("")}</svg>`;
  }

  function runeBoardFilterMatches(cell, grade, code) {
    const regionMatches = runeBoardExplorerState.regionFilter == null
      || cell.region === runeBoardExplorerState.regionFilter;
    const gradeMatches = runeBoardExplorerState.gradeFilter == null
      || grade === runeBoardExplorerState.gradeFilter;
    const abilityMatches = !runeBoardExplorerState.abilityFilter
      || code === runeBoardExplorerState.abilityFilter;
    return regionMatches && gradeMatches && abilityMatches;
  }

  function renderRuneBoardFilters(item, variant) {
    const explorer = runeBoardDb.explorer;
    const abilityButtons = variant.codebook.map((code) => {
      const meta = runeBoardAbilityMeta(item, code);
      return `<button type="button" data-rune-filter-ability="${escapeHtml(code)}" aria-pressed="${runeBoardExplorerState.abilityFilter === code}" title="${escapeHtml(meta.label)}"><code>${escapeHtml(code)}</code><span>${escapeHtml(meta.label)}</span><em>${variant.ability_counts[code] || 0}</em></button>`;
    }).join("");
    const gradeButtons = explorer.contract.grade_definitions.map((entry) => `
      <button type="button" data-rune-filter-grade="${entry.grade}" aria-pressed="${runeBoardExplorerState.gradeFilter === entry.grade}" style="--filter-color:${escapeHtml(entry.color)}"><i></i><span>G${entry.grade} ${escapeHtml(entry.name)}</span></button>
    `).join("");
    const regionButtons = explorer.contract.grade_definitions.map((entry) => `
      <button type="button" data-rune-filter-region="${entry.grade}" aria-pressed="${runeBoardExplorerState.regionFilter === entry.grade}" style="--filter-color:${escapeHtml(entry.color)}"><i></i><span>G${entry.grade} 보드</span></button>
    `).join("");
    return `
      <section class="rune-board-filters" aria-label="룬 보드 위치 필터">
        <header><div><strong>보드 위치 찾기</strong><span>필터는 함께 적용되며, 조건 밖의 칸은 흐리게 표시됩니다.</span></div><button type="button" data-rune-filter-clear>전체 초기화</button></header>
        <div class="rune-board-filter-group">
          <strong>해금 보드</strong><div><button type="button" data-rune-filter-region="all" aria-pressed="${runeBoardExplorerState.regionFilter == null}">전체</button>${regionButtons}</div>
        </div>
        <div class="rune-board-filter-group">
          <strong>능력 등급</strong><div><button type="button" data-rune-filter-grade="all" aria-pressed="${runeBoardExplorerState.gradeFilter == null}">전체</button>${gradeButtons}</div>
        </div>
        <div class="rune-board-filter-group abilities">
          <strong>능력 코드</strong><div><button type="button" data-rune-filter-ability="all" aria-pressed="${!runeBoardExplorerState.abilityFilter}">전체</button>${abilityButtons}</div>
        </div>
        <p data-rune-filter-result>전체 ${explorer.geometry.length}칸 표시</p>
      </section>
    `;
  }

  function applyRuneBoardFilters(item, variant) {
    const abilityIndices = decodeRuneBoardIndices(variant.ability_indices_base64);
    const filtersActive = runeBoardExplorerState.regionFilter != null
      || runeBoardExplorerState.gradeFilter != null
      || Boolean(runeBoardExplorerState.abilityFilter);
    let matches = 0;
    document.querySelectorAll("[data-rune-board-cell]").forEach((button) => {
      const index = Number(button.dataset.runeBoardCell);
      const cell = runeBoardDb.explorer.geometry[index];
      const grade = Number(variant.grade_codes[index] || 0);
      const code = variant.codebook[abilityIndices[index]] || "UNKNOWN";
      const matched = runeBoardFilterMatches(cell, grade, code);
      if (matched) matches += 1;
      button.classList.toggle("filter-match", filtersActive && matched);
      button.classList.toggle("filtered-out", filtersActive && !matched);
      button.dataset.filterMatch = String(matched);
    });
    document.querySelectorAll("[data-rune-filter-region]").forEach((button) => {
      const value = button.dataset.runeFilterRegion;
      const active = value === "all"
        ? runeBoardExplorerState.regionFilter == null
        : runeBoardExplorerState.regionFilter === Number(value);
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    document.querySelectorAll("[data-rune-filter-grade]").forEach((button) => {
      const value = button.dataset.runeFilterGrade;
      const active = value === "all"
        ? runeBoardExplorerState.gradeFilter == null
        : runeBoardExplorerState.gradeFilter === Number(value);
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    document.querySelectorAll("[data-rune-filter-ability]").forEach((button) => {
      const value = button.dataset.runeFilterAbility;
      const active = value === "all"
        ? !runeBoardExplorerState.abilityFilter
        : runeBoardExplorerState.abilityFilter === value;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    document.querySelectorAll(".rune-region-boundary").forEach((line) => {
      const regionMatches = runeBoardExplorerState.regionFilter == null
        || Number(line.dataset.runeRegionA) === runeBoardExplorerState.regionFilter
        || Number(line.dataset.runeRegionB) === runeBoardExplorerState.regionFilter;
      line.classList.toggle("filtered-out", !regionMatches);
    });
    document.querySelectorAll("[data-rune-ability-code]").forEach((card) => {
      const active = !runeBoardExplorerState.abilityFilter
        || card.dataset.runeAbilityCode === runeBoardExplorerState.abilityFilter;
      card.classList.toggle("active", Boolean(runeBoardExplorerState.abilityFilter) && active);
      card.classList.toggle("filtered-out", Boolean(runeBoardExplorerState.abilityFilter) && !active);
    });
    const result = document.querySelector("[data-rune-filter-result]");
    if (result) result.textContent = filtersActive
      ? `조건 일치 ${matches}칸 / ${runeBoardDb.explorer.geometry.length}칸`
      : `전체 ${runeBoardDb.explorer.geometry.length}칸 표시`;
  }

  function runeBoardNode(item, variant, cellIndex) {
    const explorer = runeBoardDb?.explorer;
    const cell = explorer?.geometry?.[cellIndex];
    if (!cell || !variant) return null;
    const abilityIndices = decodeRuneBoardIndices(variant.ability_indices_base64);
    const grade = Number(variant.grade_codes?.[cellIndex] || 0);
    const code = variant.codebook?.[abilityIndices[cellIndex]] || "UNKNOWN";
    const rareFlag = variant.rare_flags?.[cellIndex] || "N";
    const ability = item.ability_definitions?.[code] || null;
    const structural = explorer.structural_rare_catalog?.[code] || null;
    const gradeInfo = runeBoardGrade(grade);
    const value = ability?.grade_values?.[grade];
    return { cell, grade, gradeInfo, code, rareFlag, ability, structural, value };
  }

  function runeBoardNodeLabel(node) {
    if (!node) return "—";
    if (node.ability) return node.ability.name;
    if (node.structural) return node.structural.label;
    if (node.code === "NUMERIC_RARE") return "수치형 레어 능력";
    if (node.code === "SIGNATURE_RARE") return "고유 레어 능력";
    return node.code;
  }

  function runeBoardNodeCode(node) {
    if (!node) return "";
    if (node.code === "NUMERIC_RARE") return "◆";
    if (node.structural || node.code === "SIGNATURE_RARE") return "★";
    return node.code;
  }

  function ensureRuneBoardEditorState(item, variant, cellIndex) {
    const node = runeBoardNode(item, variant, cellIndex);
    if (!node) return null;
    const key = `${item.item_id}:${variant.variant}:${cellIndex}`;
    if (!runeBoardEditorState || runeBoardEditorState.key !== key) {
      runeBoardEditorState = {
        key,
        grade: node.grade,
        abilityCode: node.code,
        dirty: false,
        saving: false,
        error: "",
      };
    }
    return runeBoardEditorState;
  }

  function renderRuneBoardNodeEditor(item, variant, cellIndex) {
    if (!canEditRuneBoardDb) return "";
    const state = ensureRuneBoardEditorState(item, variant, cellIndex);
    if (!state) return "";
    const gradeOptions = runeBoardDb.explorer.contract.grade_definitions.map((entry) => (
      `<option value="${entry.grade}" ${state.grade === entry.grade ? "selected" : ""}>G${entry.grade} · ${escapeHtml(entry.name)}</option>`
    )).join("");
    const abilityOptions = variant.codebook.map((code) => {
      const meta = runeBoardAbilityMeta(item, code);
      return `<option value="${escapeHtml(code)}" ${state.abilityCode === code ? "selected" : ""}>${escapeHtml(`${code} · ${meta.label}`)}</option>`;
    }).join("");
    return `
      <form class="rune-node-editor" data-rune-node-editor>
        <header><strong>선택한 칸 편집</strong><span>등급과 능력은 함께 저장됩니다.</span></header>
        <label><span>등급</span><select data-rune-node-grade ${state.saving ? "disabled" : ""}>${gradeOptions}</select></label>
        <label><span>능력치</span><select data-rune-node-ability ${state.saving ? "disabled" : ""}>${abilityOptions}</select></label>
        <p>고유 레어는 G6, 수치 레어는 G3 이상이어야 하며 E1/E2/E3은 각각 G1/G3/G5부터 배치할 수 있습니다.</p>
        ${state.error ? `<p class="rune-node-editor-error" role="alert">${escapeHtml(state.error)}</p>` : ""}
        <button type="submit" class="primary" ${!state.dirty || state.saving ? "disabled" : ""}>${state.saving ? "저장 중…" : "이 칸 저장"}</button>
      </form>
    `;
  }

  function renderRuneBoardNodeDetail(item, variant, cellIndex) {
    const node = runeBoardNode(item, variant, cellIndex);
    if (!node) return '<div class="empty-state compact">노드를 선택하세요.</div>';
    const rareLabel = node.rareFlag === "S" ? "고유 레어" : node.rareFlag === "G" ? "수치 레어" : "일반 노드";
    const valueText = node.ability
      ? (node.value == null ? "이 등급에서는 비활성" : `${node.value}${node.ability.unit || ""}`)
      : node.structural?.unit || (node.code === "NUMERIC_RARE" ? "Seed 기반 수치형 레어 풀" : "전용 효과");
    const condition = node.ability?.condition
      || (node.structural ? `${node.structural.scope} · 상한 ${node.structural.cap}` : "아이템별 전용 레어 규칙 적용");
    const hook = node.ability?.runtime_hook || (node.structural ? `StructuralRare:${node.code}` : "NumericRare:ResolveFromItemPool");
    return `
      <div class="rune-node-detail-heading">
        <span class="rune-node-grade" style="--grade-color:${escapeHtml(node.gradeInfo.color)}">G${node.grade} · ${escapeHtml(node.gradeInfo.name)}</span>
        <span class="rune-node-rare" data-rare="${escapeHtml(node.rareFlag)}">${escapeHtml(rareLabel)}</span>
      </div>
      <h3>${escapeHtml(runeBoardNodeLabel(node))}</h3>
      <code>${escapeHtml(node.code)}</code>
      <dl>
        <div><dt>적용 수치</dt><dd>${escapeHtml(valueText)}</dd></div>
        <div><dt>조건·상한</dt><dd>${escapeHtml(condition)}</dd></div>
        <div><dt>런타임 훅</dt><dd><code>${escapeHtml(hook)}</code></dd></div>
        <div><dt>보드 위치</dt><dd>영역 ${node.cell.region} · #${node.cell.index} · (${node.cell.q}, ${node.cell.r})${node.cell.is_start ? " · 시작점" : ""}</dd></div>
      </dl>
      ${renderRuneBoardNodeEditor(item, variant, cellIndex)}
    `;
  }

  function bindRuneBoardNodeEditor(item, variant, cellIndex) {
    const form = document.querySelector("[data-rune-node-editor]");
    if (!form) return;
    const updateDraft = () => {
      const state = ensureRuneBoardEditorState(item, variant, cellIndex);
      const node = runeBoardNode(item, variant, cellIndex);
      if (!state || !node) return;
      state.grade = Number(form.querySelector("[data-rune-node-grade]").value);
      state.abilityCode = form.querySelector("[data-rune-node-ability]").value;
      state.dirty = state.grade !== node.grade || state.abilityCode !== node.code;
      state.error = "";
      form.querySelector('button[type="submit"]').disabled = !state.dirty || state.saving;
      form.querySelector(".rune-node-editor-error")?.remove();
    };
    form.querySelector("[data-rune-node-grade]")?.addEventListener("change", updateDraft);
    form.querySelector("[data-rune-node-ability]")?.addEventListener("change", updateDraft);
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const state = ensureRuneBoardEditorState(item, variant, cellIndex);
      if (!state || !state.dirty || state.saving) return;
      state.saving = true;
      state.error = "";
      const detail = document.getElementById("rune-board-node-detail");
      if (detail) {
        detail.innerHTML = renderRuneBoardNodeDetail(item, variant, cellIndex);
        bindRuneBoardNodeEditor(item, variant, cellIndex);
      }
      try {
        const response = await fetch("/api/rune-board-db/save", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            expected_revision: runeBoardDb.revision,
            item_id: item.item_id,
            cell_index: cellIndex,
            grade: state.grade,
            ability_code: state.abilityCode,
          }),
        });
        const payload = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(payload.error || `룬 보드 칸 저장에 실패했습니다. (${response.status})`);
        item.variants[0] = payload.variant;
        runeBoardDb.revision = payload.revision;
        runeBoardNotice = `#${cellIndex} 칸을 저장했습니다. 변경된 RuneBoardDB 리비전은 ${payload.revision}입니다.`;
        runeBoardEditorState = null;
        renderRuneBoardExplorer({ preserveScroll: true });
      } catch (error) {
        state.saving = false;
        state.error = String(error.message || error);
        const currentDetail = document.getElementById("rune-board-node-detail");
        if (currentDetail) {
          currentDetail.innerHTML = renderRuneBoardNodeDetail(item, variant, cellIndex);
          bindRuneBoardNodeEditor(item, variant, cellIndex);
        }
      }
    });
  }

  function renderRuneBoardCanvas(item, variant) {
    const explorer = runeBoardDb.explorer;
    const layout = runeBoardPixelLayout(explorer.geometry || []);
    const abilityIndices = decodeRuneBoardIndices(variant.ability_indices_base64);
    return `
      <div class="rune-board-canvas" style="width:${layout.width}px;height:${layout.height}px" aria-label="${escapeHtml(item.item_name)} 룬 보드 후보 ${variant.variant}">
        ${layout.cells.map((cell) => {
          const grade = Number(variant.grade_codes[cell.index] || 0);
          const gradeInfo = runeBoardGrade(grade);
          const code = variant.codebook[abilityIndices[cell.index]] || "UNKNOWN";
          const rareFlag = variant.rare_flags[cell.index] || "N";
          const node = runeBoardNode(item, variant, cell.index);
          const selected = runeBoardExplorerState.selectedCell === cell.index;
          const textColor = grade === 1 ? "#18202b" : "#ffffff";
          return `
            <button type="button" class="rune-board-node ${rareFlag !== "N" ? "rare" : ""} ${cell.is_start ? "start" : ""} ${selected ? "selected" : ""}"
              data-rune-board-cell="${cell.index}" data-rune-region="${cell.region}" data-rune-grade="${grade}" data-rune-ability="${escapeHtml(code)}" aria-pressed="${selected}"
              aria-label="${escapeHtml(`G${cell.region} 해금 보드 · ${cell.index}번, G${grade} ${runeBoardNodeLabel(node)}${rareFlag !== "N" ? `, ${rareFlag === "S" ? "고유" : "수치"} 레어` : ""}`)}"
              title="${escapeHtml(`G${grade} · ${runeBoardNodeLabel(node)}`)}"
              style="left:${cell.left}px;top:${cell.top}px;--node-color:${escapeHtml(gradeInfo.color)};--node-text:${textColor}">
              <span>${escapeHtml(runeBoardNodeCode(node))}</span>${cell.is_start ? '<i aria-hidden="true"></i>' : ""}
            </button>
          `;
        }).join("")}
        ${renderRuneBoardRegionBoundaries(layout)}
      </div>
    `;
  }

  function renderRuneBoardAbilityLegend(item, variant) {
    const explorer = runeBoardDb.explorer;
    return variant.codebook.map((code) => {
      const ability = item.ability_definitions?.[code];
      const structural = explorer.structural_rare_catalog?.[code];
      const label = ability?.name || structural?.label || (code === "NUMERIC_RARE" ? "수치형 레어 풀" : "고유 레어 풀");
      const detail = ability
        ? ability.grade_values.map((value, grade) => value == null ? null : `G${grade} ${value}${ability.unit || ""}`).filter(Boolean).join(" · ")
        : structural ? `${structural.scope} · ${structural.unit} · 상한 ${structural.cap}` : "Seed가 선택한 아이템별 전용 능력";
      return `
        <article data-rune-ability-code="${escapeHtml(code)}">
          <header><code>${escapeHtml(code)}</code><strong>${escapeHtml(label)}</strong><span>${variant.ability_counts[code] || 0}칸</span></header>
          <p>${escapeHtml(detail)}</p>
          ${ability ? `<small>${escapeHtml(ability.condition)}</small>` : ""}
        </article>
      `;
    }).join("");
  }

  function renderRuneBoardEffects(item) {
    const effects = item.skills?.length ? item.skills : item.passives || [];
    if (!effects.length) {
      return '<div class="rune-effect-empty"><strong>장신구 전용 규칙</strong><p>별도 패시브는 없으며, 다른 장비보다 고유·수치 레어 노드가 각각 2배 배치됩니다.</p></div>';
    }
    return effects.map((effect) => {
      const trigger = item.skills?.length ? `기본 공격 ${effect.required_basic_attacks}회` : "장착 중 패시브 등록";
      return `
        <article>
          <span>${escapeHtml(effect.unlock_grade)} 개방 · ${escapeHtml(trigger)}</span>
          <strong>${escapeHtml(effect.name)}</strong>
          <p>${escapeHtml(effect.detail)}</p>
        </article>
      `;
    }).join("");
  }

  function closeRuneBoardBake() {
    document.getElementById("rune-board-bake-backdrop")?.remove();
    runeBoardBakeState = null;
    document.body.classList.remove("itemdb-editor-open");
  }

  function renderRuneBoardBakeDialog() {
    let backdrop = document.getElementById("rune-board-bake-backdrop");
    if (!backdrop) {
      document.body.insertAdjacentHTML("beforeend", `
        <div id="rune-board-bake-backdrop" class="itemdb-editor-backdrop">
          <section class="itemdb-editor-dialog monsterdb-bake-dialog" role="dialog" aria-modal="true" aria-labelledby="rune-board-bake-title">
            <header><div><span>RUNEBOARDDB → GAME</span><h2 id="rune-board-bake-title">게임에 굽기</h2><code>ReplicatedStorage.RuneBoard.GeneratedRuneBoards</code></div><button type="button" class="itemdb-editor-close" data-rune-board-bake-close aria-label="굽기 창 닫기">×</button></header>
            <div class="monsterdb-bake-body"></div>
          </section>
        </div>
      `);
      backdrop = document.getElementById("rune-board-bake-backdrop");
      backdrop.addEventListener("click", (event) => {
        if (event.target === backdrop && !runeBoardBakeState?.loading) closeRuneBoardBake();
      });
      backdrop.querySelector("[data-rune-board-bake-close]").addEventListener("click", closeRuneBoardBake);
    }
    document.body.classList.add("itemdb-editor-open");
    const body = backdrop.querySelector(".monsterdb-bake-body");
    const state = runeBoardBakeState;
    if (state.loading) {
      body.innerHTML = '<p class="itemdb-bake-status">현재 룬 보드와 편집 내용을 Studio 적용 패키지로 만드는 중…</p>';
      return;
    }
    if (state.error) {
      body.innerHTML = `<p class="itemdb-bake-status" data-tone="error" role="alert">${escapeHtml(state.error)}</p>`;
      return;
    }
    const payload = state.payload;
    body.innerHTML = `
      <div class="monsterdb-bake-summary"><span><strong>${escapeHtml(payload.revision)}</strong><small>DB 리비전</small></span><span><strong>${payload.item_count}</strong><small>아이템</small></span><span><strong>${payload.board_count}</strong><small>고정 보드</small></span><span><strong>${payload.module_count}</strong><small>적용 모듈</small></span></div>
      <p class="itemdb-bake-status">Studio Play를 멈춘 뒤 적용 스크립트를 Command Bar 또는 Studio MCP에서 실행하면 01번 보드와 런타임 모듈이 함께 갱신됩니다.</p>
      <div class="monsterdb-bake-actions"><button type="button" class="primary" data-rune-board-bake-copy>적용 스크립트 복사</button><button type="button" data-rune-board-bake-download>파일 내려받기</button></div>
      ${state.status ? `<p class="monsterdb-bake-status" role="status">${escapeHtml(state.status)}</p>` : ""}
    `;
    body.querySelector("[data-rune-board-bake-copy]").addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(payload.script);
        state.status = "RuneBoardDB 적용 스크립트를 복사했습니다.";
      } catch (error) {
        state.status = `복사에 실패했습니다. 파일 내려받기를 사용해 주세요. (${String(error.message || error)})`;
      }
      renderRuneBoardBakeDialog();
    });
    body.querySelector("[data-rune-board-bake-download]").addEventListener("click", () => {
      const blob = new Blob([payload.script], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = payload.filename;
      anchor.click();
      URL.revokeObjectURL(url);
      state.status = `${payload.filename} 파일을 내려받았습니다.`;
      renderRuneBoardBakeDialog();
    });
  }

  async function openRuneBoardBake() {
    if (!canEditRuneBoardDb || runeBoardBakeState) return;
    runeBoardBakeState = { loading: true, payload: null, error: "", status: "" };
    renderRuneBoardBakeDialog();
    try {
      const response = await fetch("/api/rune-board-db/bake", { headers: { Accept: "application/json" }, cache: "no-store" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.error || `룬 보드 굽기에 실패했습니다. (${response.status})`);
      runeBoardBakeState.loading = false;
      runeBoardBakeState.payload = payload;
    } catch (error) {
      runeBoardBakeState.loading = false;
      runeBoardBakeState.error = String(error.message || error);
    }
    renderRuneBoardBakeDialog();
  }

  function renderRuneBoardExplorer({ preserveScroll = false } = {}) {
    const explorer = runeBoardDb?.explorer;
    const database = (runeBoardDb.databases || []).find((entry) => entry.id === "rune-board-variants");
    if (!explorer || !database || !explorer.items?.length) {
      main.innerHTML = '<div class="empty-state">룬 보드 시각화 데이터가 없습니다. <code>python3 tools/wiki.py build</code>를 실행하세요.</div>';
      return;
    }
    const previousScrollY = window.scrollY;
    if (!explorer.items.some((item) => item.item_id === runeBoardExplorerState.itemId)) {
      runeBoardExplorerState.itemId = explorer.items[0].item_id;
    }
    const item = explorer.items.find((entry) => entry.item_id === runeBoardExplorerState.itemId);
    if (!item.variants.some((variant) => variant.variant === runeBoardExplorerState.variant)) {
      runeBoardExplorerState.variant = 1;
    }
    const variant = item.variants.find((entry) => entry.variant === runeBoardExplorerState.variant) || item.variants[0];
    if (!Number.isInteger(runeBoardExplorerState.regionFilter) || runeBoardExplorerState.regionFilter < 0 || runeBoardExplorerState.regionFilter > 6) {
      runeBoardExplorerState.regionFilter = null;
    }
    if (!Number.isInteger(runeBoardExplorerState.gradeFilter) || runeBoardExplorerState.gradeFilter < 0 || runeBoardExplorerState.gradeFilter > 6) {
      runeBoardExplorerState.gradeFilter = null;
    }
    if (!variant.codebook.includes(runeBoardExplorerState.abilityFilter)) {
      runeBoardExplorerState.abilityFilter = "";
    }
    if (!Number.isInteger(runeBoardExplorerState.selectedCell) || runeBoardExplorerState.selectedCell < 0 || runeBoardExplorerState.selectedCell >= explorer.geometry.length) {
      runeBoardExplorerState.selectedCell = 0;
    }
    const catalogItem = runeBoardCatalogItem(item.item_id);
    const image = catalogItem?.image_url || catalogItem?.image || "";
    const familyLabels = { Weapon: "공격 무기", Support: "보조무기", Armor: "방어구", Accessory: "장신구" };
    const slotLabels = {
      Weapon: "무기", Head: "머리", Earring: "귀걸이", Necklace: "목걸이", Top: "상의",
      Bottom: "하의", Gloves: "글러브", Shoes: "신발", Belt: "벨트", Ring: "반지",
    };
    const slotLabel = catalogItem?.slot === "Weapon"
      ? (catalogItem?.form || "무기")
      : (slotLabels[catalogItem?.slot || item.slot] || catalogItem?.slot || item.slot);
    const cellLabel = catalogItem?.occupied_cells ? `${catalogItem.occupied_cells}칸` : item.slot;
    document.title = `${item.item_name} 룬 보드 · PackBound Wiki`;
    renderNavigation("rune-board-variants", "database");
    main.innerHTML = `
      <div class="rune-db-layout">
        <header class="rune-db-hero">
          <div class="page-eyebrow">Interactive rune board database</div>
          <div class="rune-db-hero-row">
            <div><h1>아이템 룬 보드 DB</h1><p>무기·방어구·장신구·보조무기는 아이템마다 고정된 01번 보드 하나만 사용합니다. 427개 칸을 선택해 등급과 능력치를 편집하고 Studio 적용 패키지로 구울 수 있습니다.</p></div>
            <div class="rune-db-hero-actions"><span><strong>${explorer.items.length}</strong><small>${explorer.items.length} ITEMS × 1 BOARD</small></span>${canEditRuneBoardDb ? '<button type="button" data-rune-board-bake>게임에 굽기</button>' : ""}</div>
          </div>
          <div class="rune-db-contract">
            <div><span>보드 크기</span><strong>${explorer.contract.total_cells}칸</strong></div>
            <div><span>영역</span><strong>${explorer.contract.regions} × ${explorer.contract.cells_per_region}칸</strong></div>
            <div><span>아이템별 보드</span><strong>01번 고정 · 후보 없음</strong></div>
            <div><span>DB 리비전</span><code>${escapeHtml(runeBoardDb.revision)}</code></div>
          </div>
          ${runeBoardNotice ? `<div class="itemdb-save-notice" role="status">${escapeHtml(runeBoardNotice)}</div>` : ""}
        </header>

        <section class="rune-item-panel">
          <div class="rune-item-image">
            ${image ? `<button type="button" data-image-viewer-src="${escapeHtml(image)}" data-image-viewer-alt="${escapeHtml(item.item_name)} 아이템 이미지" data-image-viewer-caption="${escapeHtml(item.item_name)}"><img src="${escapeHtml(image)}" alt="${escapeHtml(item.item_name)} 아이템 이미지"></button>` : ""}
          </div>
          <div class="rune-item-copy">
            <div class="rune-item-badges"><span>${escapeHtml(familyLabels[item.board_kind] || item.board_kind)}</span><span>${escapeHtml(slotLabel)}</span><span>${escapeHtml(cellLabel)}</span></div>
            <h2>${escapeHtml(item.item_name)}</h2>
            <code>${escapeHtml(item.item_id)}</code>
            <p>${escapeHtml(item.role)}</p>
            ${item.target_priority && item.target_priority !== "—" ? `<small><strong>자동 표적:</strong> ${escapeHtml(item.target_priority)}</small>` : ""}
          </div>
          <div class="rune-item-selector">
            <label><span>아이템 선택</span><select id="rune-board-item-select">
              ${explorer.items.map((entry) => `<option value="${escapeHtml(entry.item_id)}" ${entry.item_id === item.item_id ? "selected" : ""}>${escapeHtml(`${familyLabels[entry.board_kind] || entry.board_kind} · ${entry.item_name}`)}</option>`).join("")}
            </select></label>
            <div class="rune-single-board"><span>고정 룬 보드</span><strong>01</strong><small>이 아이템이 사용하는 유일한 보드입니다.</small></div>
            <div class="rune-variant-meta"><span>Seed <code>${escapeHtml(variant.seed)}</code></span><span>Hash <code>${escapeHtml(variant.board_hash)}</code></span></div>
          </div>
        </section>

        <section class="rune-board-section">
          <header>
            <div><span class="page-eyebrow">Fixed board 01</span><h2>427칸 배치도</h2></div>
            <nav aria-label="룬 보드 연관 데이터"><a href="${databaseHref("rune-board-abilities")}">능력 수치 DB</a><a href="${databaseHref("item-skill-passive")}">스킬·패시브 DB</a></nav>
          </header>
          <div class="rune-grade-legend">
            ${explorer.contract.grade_definitions.map((entry) => `<span><i style="--grade-color:${escapeHtml(entry.color)}"></i>G${entry.grade} ${escapeHtml(entry.name)}</span>`).join("")}
            <span class="rare"><i></i>황금 테두리 레어</span><span class="start"><i></i>영역 시작점</span>
          </div>
          ${renderRuneBoardFilters(item, variant)}
          <div class="rune-board-workspace">
            <div class="rune-board-viewport" tabindex="0" aria-label="스크롤 가능한 427칸 룬 보드">${renderRuneBoardCanvas(item, variant)}</div>
            <aside>
              <section class="rune-node-detail" id="rune-board-node-detail">${renderRuneBoardNodeDetail(item, variant, runeBoardExplorerState.selectedCell)}</section>
              <section class="rune-board-distribution">
                <h3>후보 분포</h3>
                <div>${Object.entries(variant.grade_counts).map(([grade, count]) => `<span style="--grade-color:${escapeHtml(runeBoardGrade(Number(grade)).color)}"><i></i><strong>G${grade}</strong><em>${count}</em></span>`).join("")}</div>
                <p>고유 레어 ${variant.rare_counts.signature}칸 · 수치 레어 ${variant.rare_counts.numeric}칸</p>
              </section>
            </aside>
          </div>
        </section>

        <section class="rune-ability-section">
          <header><div><span class="page-eyebrow">Ability allocation</span><h2>능력 코드와 배치 수</h2></div><span>${variant.codebook.length}개 코드</span></header>
          <div class="rune-ability-grid">${renderRuneBoardAbilityLegend(item, variant)}</div>
        </section>

        <section class="rune-effect-section">
          <header><div><span class="page-eyebrow">Item identity effects</span><h2>${item.skills?.length ? "무기 스킬" : item.passives?.length ? (item.board_kind === "Support" ? "보조무기 패시브" : "방어구 패시브") : "장신구 규칙"}</h2></div><span>${item.skills?.length || item.passives?.length || 0}개</span></header>
          <div class="rune-effect-grid">${renderRuneBoardEffects(item)}</div>
        </section>
      </div>
    `;
    document.getElementById("rune-board-item-select")?.addEventListener("change", (event) => {
      runeBoardExplorerState = {
        itemId: event.target.value,
        variant: 1,
        selectedCell: 0,
        regionFilter: null,
        gradeFilter: null,
        abilityFilter: "",
      };
      runeBoardEditorState = null;
      renderRuneBoardExplorer({ preserveScroll: true });
    });
    document.querySelectorAll("[data-rune-board-variant]").forEach((button) => {
      button.addEventListener("click", () => {
        runeBoardExplorerState.variant = Number(button.dataset.runeBoardVariant);
        runeBoardExplorerState.selectedCell = 0;
        renderRuneBoardExplorer({ preserveScroll: true });
      });
    });
    document.querySelectorAll("[data-rune-board-cell]").forEach((button) => {
      button.addEventListener("click", () => {
        runeBoardExplorerState.selectedCell = Number(button.dataset.runeBoardCell);
        runeBoardEditorState = null;
        document.querySelectorAll("[data-rune-board-cell]").forEach((cellButton) => {
          const selected = cellButton === button;
          cellButton.classList.toggle("selected", selected);
          cellButton.setAttribute("aria-pressed", String(selected));
        });
        const detail = document.getElementById("rune-board-node-detail");
        if (detail) {
          detail.innerHTML = renderRuneBoardNodeDetail(item, variant, runeBoardExplorerState.selectedCell);
          bindRuneBoardNodeEditor(item, variant, runeBoardExplorerState.selectedCell);
        }
      });
    });
    document.querySelectorAll("[data-rune-filter-region]").forEach((button) => {
      button.addEventListener("click", () => {
        const value = button.dataset.runeFilterRegion;
        const next = value === "all" ? null : Number(value);
        runeBoardExplorerState.regionFilter = runeBoardExplorerState.regionFilter === next ? null : next;
        applyRuneBoardFilters(item, variant);
      });
    });
    document.querySelectorAll("[data-rune-filter-grade]").forEach((button) => {
      button.addEventListener("click", () => {
        const value = button.dataset.runeFilterGrade;
        const next = value === "all" ? null : Number(value);
        runeBoardExplorerState.gradeFilter = runeBoardExplorerState.gradeFilter === next ? null : next;
        applyRuneBoardFilters(item, variant);
      });
    });
    document.querySelectorAll("[data-rune-filter-ability]").forEach((button) => {
      button.addEventListener("click", () => {
        const value = button.dataset.runeFilterAbility;
        const next = value === "all" ? "" : value;
        runeBoardExplorerState.abilityFilter = runeBoardExplorerState.abilityFilter === next ? "" : next;
        applyRuneBoardFilters(item, variant);
      });
    });
    document.querySelector("[data-rune-filter-clear]")?.addEventListener("click", () => {
      runeBoardExplorerState.regionFilter = null;
      runeBoardExplorerState.gradeFilter = null;
      runeBoardExplorerState.abilityFilter = "";
      applyRuneBoardFilters(item, variant);
    });
    document.querySelector("[data-rune-board-bake]")?.addEventListener("click", openRuneBoardBake);
    bindRuneBoardNodeEditor(item, variant, runeBoardExplorerState.selectedCell);
    applyRuneBoardFilters(item, variant);
    document.body.classList.remove("menu-open");
    if (preserveScroll) window.scrollTo(0, previousScrollY);
    else window.scrollTo(0, 0);
  }

  function closeMonsterDbEditor() {
    document.getElementById("monsterdb-editor-backdrop")?.remove();
    if (!monsterDbBakeState) document.body.classList.remove("itemdb-editor-open");
    monsterDbEditorState = null;
  }

  function monsterDbFieldMarkup(spec, monster) {
    const value = monsterDbTools.getPath(monster, spec.path);
    const attackKinds = spec.attack_kinds?.length ? spec.attack_kinds.join(",") : "";
    const requiresAnimation = spec.requires_animation_clip || "";
    const hasRequiredAnimation = !requiresAnimation || Boolean(monster.presentation.animations?.[requiresAnimation]);
    const applies = monsterDbTools.fieldApplies(spec, monster.attack.kind, monster);
    const describedBy = spec.help ? `monsterdb-help-${spec.path.replaceAll(".", "-")}` : "";
    const common = `data-monsterdb-field="${escapeHtml(spec.path)}" ${spec.readonly ? "disabled" : ""} ${describedBy ? `aria-describedby="${describedBy}"` : ""}`;
    let control = "";
    if (spec.kind === "boolean") {
      control = `<label class="monsterdb-switch"><input type="checkbox" ${common} ${value ? "checked" : ""}><span></span><strong>${value ? "사용" : "미사용"}</strong></label>`;
    } else if (spec.kind === "select") {
      control = `<select ${common}>${spec.options.map((option) => `<option value="${escapeHtml(option)}" ${option === value ? "selected" : ""}>${escapeHtml(spec.path === "size_class" ? monsterSizeClassLabel(option) : option)}</option>`).join("")}</select>`;
    } else if (spec.kind === "textarea" || spec.kind === "vector3-list") {
      control = `<textarea ${common} rows="${spec.kind === "vector3-list" ? 4 : 3}">${escapeHtml(monsterDbTools.serializeField(spec, value))}</textarea>`;
    } else {
      const inputType = spec.kind === "number" || spec.kind === "integer" ? "number" : spec.kind === "color" ? "color" : "text";
      const numeric = inputType === "number"
        ? `min="${spec.minimum ?? ""}" max="${spec.maximum ?? ""}" step="${spec.step ?? "any"}"`
        : "";
      control = `<input type="${inputType}" value="${escapeHtml(monsterDbTools.serializeField(spec, value))}" ${numeric} ${common}>`;
    }
    return `
      <div class="monsterdb-field" data-kind="${escapeHtml(spec.kind)}" ${attackKinds ? `data-attack-kinds="${escapeHtml(attackKinds)}"` : ""} ${requiresAnimation ? `data-requires-animation="${escapeHtml(requiresAnimation)}" data-animation-present="${hasRequiredAnimation}"` : ""} ${applies ? "" : "hidden"}>
        <label><span>${escapeHtml(monsterDbTools.fieldLabel(spec, monster.attack.kind))}</span>${spec.unit ? `<em>${escapeHtml(spec.unit)}</em>` : ""}</label>
        ${control}
        ${spec.help ? `<small id="${describedBy}">${escapeHtml(spec.help)}</small>` : ""}
      </div>
    `;
  }

  function updateMonsterDbSwitchLabels(root = document) {
    root.querySelectorAll(".monsterdb-switch input").forEach((input) => {
      const label = input.closest(".monsterdb-switch")?.querySelector("strong");
      if (label) label.textContent = input.checked ? "사용" : "미사용";
    });
  }

  function updateMonsterDbConditionalFields(root) {
    const kind = root.querySelector('[data-monsterdb-field="attack.kind"]')?.value;
    root.querySelectorAll(".monsterdb-field[data-attack-kinds]").forEach((field) => {
      const attackMatches = String(field.dataset.attackKinds || "").split(",").includes(kind);
      const animationMatches = !field.dataset.requiresAnimation || field.dataset.animationPresent === "true";
      field.hidden = !attackMatches || !animationMatches;
    });
    root.querySelectorAll("[data-monsterdb-group]").forEach((group) => {
      group.hidden = !group.querySelector(".monsterdb-field:not([hidden])");
    });
    const specs = monsterDb.groups.flatMap((group) => group.fields);
    root.querySelectorAll(".monsterdb-field[data-kind]").forEach((field) => {
      const input = field.querySelector("[data-monsterdb-field]");
      const label = field.querySelector("label > span");
      const spec = specs.find((entry) => entry.path === input?.dataset.monsterdbField);
      if (label && spec) label.textContent = monsterDbTools.fieldLabel(spec, kind);
    });
  }

  function openMonsterDbEditor(monsterId) {
    if (!canEditMonsterDb || monsterDbEditorState) return;
    const monster = monsterDb.monsters.find((entry) => entry.id === monsterId);
    if (!monster) return;
    monsterDbEditorState = { monster, saving: false, error: "" };
    const groups = monsterDb.groups.map((group, index) => `
      <details class="monsterdb-editor-group" data-monsterdb-group ${index < 6 ? "open" : ""}>
        <summary><span>${escapeHtml(group.name)}</span><em>${group.fields.length}개 변수</em></summary>
        <div class="monsterdb-field-grid">${group.fields.map((spec) => monsterDbFieldMarkup(spec, monster)).join("")}</div>
      </details>
    `).join("");
    document.body.insertAdjacentHTML("beforeend", `
      <div id="monsterdb-editor-backdrop" class="itemdb-editor-backdrop">
        <section class="itemdb-editor-dialog monsterdb-editor-dialog" role="dialog" aria-modal="true" aria-labelledby="monsterdb-editor-title">
          <header>
            <div><span>MONSTER DATABASE</span><h2 id="monsterdb-editor-title">${escapeHtml(monster.identity.display_name)}</h2><code>${escapeHtml(monster.id)} · ${escapeHtml(monsterDb.revision)}</code></div>
            <button type="button" class="itemdb-editor-close" data-monsterdb-close aria-label="몬스터 편집기 닫기">×</button>
          </header>
          <div class="monsterdb-editor-toolbar"><p>저장하면 원본 JSON, 웹 DB, Roblox 런타임 모듈이 함께 갱신됩니다.</p><div><button type="button" data-monsterdb-close>취소</button><button type="button" class="primary" data-monsterdb-save>저장</button></div></div>
          <div class="monsterdb-editor-error" data-monsterdb-error hidden></div>
          <div class="monsterdb-editor-scroll">${groups}</div>
        </section>
      </div>
    `);
    document.body.classList.add("itemdb-editor-open");
    const backdrop = document.getElementById("monsterdb-editor-backdrop");
    backdrop.addEventListener("click", (event) => {
      if (event.target === backdrop) closeMonsterDbEditor();
    });
    backdrop.querySelectorAll("[data-monsterdb-close]").forEach((button) => button.addEventListener("click", closeMonsterDbEditor));
    backdrop.querySelector("[data-monsterdb-save]").addEventListener("click", saveMonsterDbEditor);
    backdrop.querySelectorAll(".monsterdb-switch input").forEach((input) => input.addEventListener("change", () => updateMonsterDbSwitchLabels(backdrop)));
    backdrop.querySelector('[data-monsterdb-field="attack.kind"]')?.addEventListener("change", () => updateMonsterDbConditionalFields(backdrop));
    updateMonsterDbSwitchLabels(backdrop);
    updateMonsterDbConditionalFields(backdrop);
  }

  async function saveMonsterDbEditor() {
    const state = monsterDbEditorState;
    const dialog = document.getElementById("monsterdb-editor-backdrop");
    if (!state || !dialog || state.saving) return;
    const errorBox = dialog.querySelector("[data-monsterdb-error]");
    const button = dialog.querySelector("[data-monsterdb-save]");
    const draft = monsterDbTools.editableMonster(state.monster);
    try {
      const kindSpec = monsterDb.groups.flatMap((group) => group.fields).find((spec) => spec.path === "attack.kind");
      const kindInput = dialog.querySelector('[data-monsterdb-field="attack.kind"]');
      const attackKind = monsterDbTools.parseField(kindSpec, kindInput.value, kindInput.checked);
      monsterDbTools.setPath(draft, "attack.kind", attackKind);
      monsterDb.groups.forEach((group) => group.fields.forEach((spec) => {
        if (spec.readonly || spec.path === "attack.kind") return;
        if (!monsterDbTools.fieldApplies(spec, attackKind, draft)) {
          if (spec.attack_kinds?.length) monsterDbTools.deletePath(draft, spec.path);
          return;
        }
        const input = dialog.querySelector(`[data-monsterdb-field="${spec.path}"]`);
        const value = monsterDbTools.parseField(spec, input.value, input.checked);
        monsterDbTools.setPath(draft, spec.path, value);
      }));
    } catch (error) {
      errorBox.textContent = String(error.message || error);
      errorBox.hidden = false;
      return;
    }
    state.saving = true;
    button.disabled = true;
    button.textContent = "저장 중…";
    errorBox.hidden = true;
    try {
      const response = await fetch("/api/monster-db/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ monster_id: state.monster.id, monster: draft }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        const message = response.status === 404 && hasLocalAccess
          ? "실행 중인 로컬 위키 서버가 MonsterDB 저장 API보다 오래되었습니다. 서버를 재시작해 주세요."
          : payload.error || `저장에 실패했습니다. (${response.status})`;
        throw new Error(message);
      }
      const index = monsterDb.monsters.findIndex((entry) => entry.id === payload.monster.id);
      if (index >= 0) monsterDb.monsters[index] = payload.monster;
      monsterDb.revision = payload.revision;
      monsterDb.active_count = monsterDb.monsters.filter((entry) => entry.enabled).length;
      monsterDbNotice = `${payload.monster.identity.display_name}의 모든 런타임 변수를 저장했습니다. 게임 적용 전 리비전은 ${payload.revision}입니다.`;
      closeMonsterDbEditor();
      renderMonsterDb();
    } catch (error) {
      state.saving = false;
      button.disabled = false;
      button.textContent = "저장";
      errorBox.textContent = String(error.message || error);
      errorBox.hidden = false;
    }
  }

  function closeMonsterDbBake() {
    document.getElementById("monsterdb-bake-backdrop")?.remove();
    if (!monsterDbEditorState) document.body.classList.remove("itemdb-editor-open");
    monsterDbBakeState = null;
  }

  async function openMonsterDbBake() {
    if (!canEditMonsterDb || monsterDbBakeState) return;
    monsterDbBakeState = { loading: true, payload: null, error: "", status: "" };
    renderMonsterDbBake();
    try {
      const response = await fetch("/api/monster-db/bake");
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.error || `굽기에 실패했습니다. (${response.status})`);
      if (monsterDbBakeState) monsterDbBakeState.payload = payload;
    } catch (error) {
      if (monsterDbBakeState) monsterDbBakeState.error = String(error.message || error);
    }
    if (!monsterDbBakeState) return;
    monsterDbBakeState.loading = false;
    renderMonsterDbBake();
  }

  function renderMonsterDbBake() {
    const state = monsterDbBakeState;
    if (!state) return;
    let backdrop = document.getElementById("monsterdb-bake-backdrop");
    if (!backdrop) {
      document.body.insertAdjacentHTML("beforeend", `
        <div id="monsterdb-bake-backdrop" class="itemdb-editor-backdrop">
          <section class="itemdb-editor-dialog monsterdb-bake-dialog" role="dialog" aria-modal="true" aria-labelledby="monsterdb-bake-title">
            <header><div><span>MONSTERDB → GAME</span><h2 id="monsterdb-bake-title">게임에 굽기</h2><code>ReplicatedStorage.Monsters.GeneratedMonsterDefinitions</code></div><button type="button" class="itemdb-editor-close" data-monsterdb-bake-close aria-label="굽기 창 닫기">×</button></header>
            <div class="monsterdb-bake-body"></div>
          </section>
        </div>
      `);
      document.body.classList.add("itemdb-editor-open");
      backdrop = document.getElementById("monsterdb-bake-backdrop");
      backdrop.addEventListener("click", (event) => {
        if (event.target === backdrop) closeMonsterDbBake();
      });
      backdrop.querySelector("[data-monsterdb-bake-close]").addEventListener("click", closeMonsterDbBake);
    }
    const body = backdrop.querySelector(".monsterdb-bake-body");
    if (state.loading) {
      body.innerHTML = '<div class="loading">MonsterDB 적용 스크립트를 만드는 중…</div>';
      return;
    }
    if (state.error) {
      body.innerHTML = `<div class="monsterdb-editor-error">${escapeHtml(state.error)}</div>`;
      return;
    }
    const payload = state.payload;
    body.innerHTML = `
      <div class="monsterdb-bake-summary"><span><strong>${escapeHtml(payload.revision)}</strong><small>DB 리비전</small></span><span><strong>${payload.count}</strong><small>활성 몬스터</small></span></div>
      <ol><li>Roblox Studio 실행을 멈춥니다.</li><li>아래 적용 스크립트를 복사해 명령 창에서 실행합니다.</li><li>출력 창의 MonsterDB 리비전을 확인하고 place를 저장합니다.</li></ol>
      <div class="monsterdb-bake-actions"><button type="button" data-monsterdb-bake-copy="script">적용 스크립트 복사</button><button type="button" data-monsterdb-bake-copy="module">모듈 소스 복사</button><button type="button" data-monsterdb-bake-download>파일 내려받기</button></div>
      ${state.status ? `<p class="monsterdb-bake-status" role="status">${escapeHtml(state.status)}</p>` : ""}
    `;
    body.querySelectorAll("[data-monsterdb-bake-copy]").forEach((button) => button.addEventListener("click", async () => {
      const script = button.dataset.monsterdbBakeCopy === "script";
      try {
        await copyPlainText(script ? payload.script : payload.module_source);
        state.status = script ? "적용 스크립트를 복사했습니다." : "GeneratedMonsterDefinitions 모듈 소스를 복사했습니다.";
      } catch (error) {
        state.status = `복사에 실패했습니다. (${String(error.message || error)})`;
      }
      renderMonsterDbBake();
    }));
    body.querySelector("[data-monsterdb-bake-download]").addEventListener("click", () => {
      downloadPlainText(payload.filename, payload.script);
      state.status = `${payload.filename} 파일을 내려받았습니다.`;
      renderMonsterDbBake();
    });
  }

  function monsterSizeClassLabel(sizeClass) {
    return ({ Small: "소형", Medium: "중형", Large: "대형" })[sizeClass] || sizeClass || "미지정";
  }

  function renderMonsterDbCards(monsters) {
    const root = document.getElementById("monsterdb-results");
    const count = document.getElementById("monsterdb-result-count");
    if (!root || !count) return;
    count.textContent = `${monsters.length} / ${monsterDb.count}개 표시`;
    if (!monsters.length) {
      root.innerHTML = '<div class="empty-state">조건에 맞는 몬스터가 없습니다.</div>';
      return;
    }
    root.innerHTML = monsters.map((monster) => `
      <article class="monsterdb-card" data-enabled="${monster.enabled}">
        <div class="monsterdb-card-art"><img src="${escapeHtml(monster.concept_art_url)}" alt="${escapeHtml(monster.identity.display_name)} 대표 이미지" loading="lazy" decoding="async"><span>${escapeHtml(monster.identity.element)}</span></div>
        <div class="monsterdb-card-body">
          <header><div><span>${escapeHtml(monster.identity.tier)} · LV.${monster.identity.level}</span><h2>${escapeHtml(monster.identity.display_name)}</h2><code>${escapeHtml(monster.id)}</code></div><em>${monster.catalog_only ? "제작 대기" : monster.enabled ? "GAME ON" : "OFF"}</em></header>
          <p>${escapeHtml(monster.identity.description)}</p>
          ${monster.catalog_only ? `
          <div class="monsterdb-stat-grid monsterdb-stat-grid-catalog-only">
            <span data-size-class="${escapeHtml(monster.size_class)}"><small>크기</small><strong>${escapeHtml(monsterSizeClassLabel(monster.size_class))}</strong></span>
            <span><small>등록 상태</small><strong>${escapeHtml(monster.status)}</strong></span>
            <span><small>런타임</small><strong>미등록</strong></span>
            <span><small>등급</small><strong>${escapeHtml(monster.identity.tier)}</strong></span>
          </div>` : `
          <div class="monsterdb-stat-grid">
            <span data-size-class="${escapeHtml(monster.size_class)}"><small>크기</small><strong>${escapeHtml(monsterSizeClassLabel(monster.size_class))}</strong></span>
            <span><small>체력</small><strong>${monster.stats.max_health}</strong></span>
            <span><small>공격력</small><strong>${monster.stats.attack_power}</strong></span>
            <span><small>이동속도</small><strong>${monster.movement.chase_speed}</strong></span>
            <span><small>공격범위</small><strong>${monster.attack.maximum_range}</strong></span>
            <span><small>탐색거리</small><strong>${monster.detection.search_range}</strong></span>
            <span><small>${monster.attack.kind === "FanVolleyProjectile" ? "첫 발사 예고" : monster.attack.kind === "TelegraphedLeapSlam" ? "착지 예고" : "장판예고"}</small><strong>${monster.attack.telegraph_duration_seconds}s</strong></span>
            <span><small>공격간격</small><strong>${monster.attack.attack_interval_seconds}s</strong></span>
            <span><small>동시 스폰</small><strong>${monster.spawn.maximum_alive}</strong></span>
          </div>`}
          <div class="monsterdb-tags">${monster.identity.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
          ${canEditMonsterDb && !monster.catalog_only ? `<button type="button" class="monsterdb-edit-button" data-monsterdb-edit="${escapeHtml(monster.id)}">모든 속성 편집</button>` : ""}
        </div>
      </article>
    `).join("");
    root.querySelectorAll("[data-monsterdb-edit]").forEach((button) => button.addEventListener("click", () => openMonsterDbEditor(button.dataset.monsterdbEdit)));
  }

  function renderMonsterDb() {
    document.title = "MonsterDB · PackBound Wiki";
    renderNavigation("monster-db", "database");
    main.innerHTML = `
      <div class="monsterdb-layout">
        <header class="monsterdb-hero">
          <div class="page-eyebrow">Runtime enemy registry</div>
          <div class="monsterdb-hero-row"><div><h1>MonsterDB</h1><p>몬스터의 서버 AI, 체력·공격력, 이동과 탐색, 공격 타이밍, 스폰, 충돌, 애니메이션 자산을 한 곳에서 변경합니다.</p></div><div class="monsterdb-hero-actions"><span><strong>${monsterDb.active_count}</strong><small>GAME ON · ${monsterDb.count} TOTAL</small></span>${canEditMonsterDb ? '<button type="button" data-monsterdb-bake>게임에 굽기</button>' : ""}</div></div>
          <div class="monsterdb-contract"><div><span>DB 리비전</span><code>${escapeHtml(monsterDb.revision)}</code></div><div><span>단일 원본</span><code>${escapeHtml(monsterDb.source)}</code></div><div><span>편집 변수</span><strong>${monsterDb.groups.reduce((total, group) => total + group.fields.length, 0)}개</strong></div><div><span>판정 권한</span><strong>SERVER</strong></div></div>
        </header>
        <section class="monsterdb-toolbar"><label><span class="visually-hidden">몬스터 검색</span><input id="monsterdb-search" type="search" value="${escapeHtml(monsterDbQuery)}" placeholder="이름, ID, 속성, 태그 검색…"></label><strong id="monsterdb-result-count"></strong></section>
        ${monsterDbNotice ? `<div class="itemdb-save-notice" role="status">${escapeHtml(monsterDbNotice)}</div>` : ""}
        <div id="monsterdb-results"></div>
      </div>
    `;
    document.getElementById("monsterdb-search").addEventListener("input", (event) => {
      monsterDbQuery = event.target.value;
      renderMonsterDbCards(monsterDbTools.filterMonsters(monsterDb.monsters, monsterDbQuery));
    });
    document.querySelector("[data-monsterdb-bake]")?.addEventListener("click", openMonsterDbBake);
    renderMonsterDbCards(monsterDbTools.filterMonsters(monsterDb.monsters, monsterDbQuery));
    document.body.classList.remove("menu-open");
    window.scrollTo(0, 0);
  }

  function selectedWaveDbStage() {
    const stages = waveDbState.document.stages || [];
    const selected = stages.find((stage) => stage.id === waveDbState.selectedStageId) || stages[0] || null;
    if (selected) waveDbState.selectedStageId = selected.id;
    return selected;
  }

  function updateWaveDbDirtyState(notice = "") {
    waveDbState.dirty = JSON.stringify(waveDbState.document) !== JSON.stringify(waveDbState.cleanDocument);
    waveDbNotice = notice || (waveDbState.dirty ? "저장하지 않은 변경사항이 있습니다." : "저장된 상태와 같습니다.");
    const saveButton = document.querySelector("[data-wavedb-save]");
    if (saveButton) saveButton.disabled = !waveDbState.dirty || waveDbState.saving;
    const noticeElement = document.querySelector("[data-wavedb-notice]");
    if (noticeElement) noticeElement.textContent = waveDbNotice;
  }

  function setWaveDbDirty() {
    updateWaveDbDirtyState("저장하지 않은 변경사항이 있습니다.");
  }

  function resetWaveDbPlacementHistory() {
    waveDbTools.resetPlacementHistory(waveDbState.placementHistory);
  }

  function recordWaveDbPlacementMutation(stage, wave, layer, before, label) {
    const recorded = waveDbTools.recordPlacementChange(waveDbState.placementHistory, {
      stage_id: stage.id,
      wave_id: wave.id,
      layer_id: layer.id,
      label,
      before,
      after: layer.placements,
    });
    if (recorded) updateWaveDbDirtyState(`${label}을 기록했습니다.`);
    return recorded;
  }

  function applyWaveDbPlacementHistory(direction) {
    if (waveDbState.saving) return;
    try {
      const change = direction === "undo"
        ? waveDbTools.undoPlacementChange(waveDbState.placementHistory, waveDbState.document)
        : waveDbTools.redoPlacementChange(waveDbState.placementHistory, waveDbState.document);
      if (!change) return;
      waveDbState.selectedStageId = change.stage_id;
      waveDbState.activeWaves[change.stage_id] = change.wave_id;
      waveDbState.activeLayers[`${change.stage_id}/${change.wave_id}`] = change.layer_id;
      updateWaveDbDirtyState(
        direction === "undo"
          ? `${change.label}을 되돌렸습니다.`
          : `${change.label}을 다시 실행했습니다.`,
      );
      renderWaveDb({ preserveScroll: true });
    } catch (error) {
      waveDbNotice = String(error.message || error);
      resetWaveDbPlacementHistory();
      renderWaveDb({ preserveScroll: true });
    }
  }

  function bindWaveDbKeyboardShortcuts() {
    if (waveDbKeyboardBound) return;
    waveDbKeyboardBound = true;
    document.addEventListener("keydown", (event) => {
      if (!document.querySelector(".wavedb-layout") || waveDbState.saving) return;
      const target = event.target;
      if (target instanceof HTMLElement && (
        target.isContentEditable
        || target.matches("input, textarea, select")
      )) return;
      const modifier = event.metaKey || event.ctrlKey;
      const key = event.key.toLowerCase();
      const undo = modifier && key === "z" && !event.shiftKey;
      const redo = modifier && ((key === "z" && event.shiftKey) || key === "y");
      if (!undo && !redo) return;
      event.preventDefault();
      applyWaveDbPlacementHistory(undo ? "undo" : "redo");
    });
  }

  function waveDbWaveKey(stage, wave) {
    return `${stage.id}/${wave.id}`;
  }

  function selectedWaveDbWave(stage) {
    const selected = stage.waves.find((wave) => wave.id === waveDbState.activeWaves[stage.id]) || stage.waves[0] || null;
    if (selected) waveDbState.activeWaves[stage.id] = selected.id;
    return selected;
  }

  function activeWaveDbLayer(stage, wave) {
    const key = waveDbWaveKey(stage, wave);
    const layers = waveDbTools.sortedLayers(wave.layers);
    const selected = layers.find((layer) => layer.id === waveDbState.activeLayers[key]) || layers[0] || null;
    if (selected) waveDbState.activeLayers[key] = selected.id;
    return selected;
  }

  function selectedWaveDbMonster(stage, wave) {
    const key = waveDbWaveKey(stage, wave);
    const enabled = (monsterDb?.monsters || []).filter((monster) => monster.enabled);
    const selected = waveDbState.selectedMonsters[key];
    if (selected === "__erase__" || enabled.some((monster) => monster.id === selected)) return selected;
    waveDbState.selectedMonsters[key] = enabled[0]?.id || "__erase__";
    return waveDbState.selectedMonsters[key];
  }

  function renderWaveDbGrid(field, layer, waveIndex, disabled) {
    const blocked = waveDbTools.blockedCellSet(field);
    const columns = waveDbTools.gridColumns(field);
    const rows = waveDbTools.gridRows(field);
    const cells = [];
    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        const isBlocked = blocked.has(waveDbTools.cellKey(column, row));
        const placement = waveDbTools.placementAt(layer, column, row);
        const monster = placement ? waveDbTools.monsterById(monsterDb?.monsters || [], placement.monster_id) : null;
        const world = waveDbTools.worldPosition(field, column, row).map((value) => Number(value.toFixed(2)));
        const label = isBlocked
          ? `${column + 1}열 ${row + 1}행, 이동 불가`
          : placement
            ? `${column + 1}열 ${row + 1}행, ${monster?.identity?.display_name || placement.monster_id} 배치, 월드 좌표 ${world.join(", ")}`
            : `${column + 1}열 ${row + 1}행, 빈 셀, 월드 좌표 ${world.join(", ")}`;
        cells.push(`
          <button type="button" role="gridcell" class="wavedb-grid-cell${isBlocked ? " blocked" : ""}${placement ? " occupied" : ""}"
            data-wavedb-cell data-column="${column}" data-row="${row}" data-element="${escapeHtml(monster?.identity?.element || "none")}"
            aria-label="${escapeHtml(label)}" title="${escapeHtml(label)}" ${isBlocked || disabled ? "disabled" : ""}>
            ${placement && monster?.concept_art_url ? `<img class="wavedb-grid-monster" src="${escapeHtml(monster.concept_art_url)}" alt="" loading="lazy" decoding="async" draggable="false">` : ""}
          </button>
        `);
      }
    }
    return `
      <div class="wavedb-field-grid-wrap">
        <div class="wavedb-field-grid" role="grid" aria-label="${escapeHtml(field.display_name)} 몬스터 배치 격자"
          style="--wavedb-grid-columns:${columns};--wavedb-grid-rows:${rows};background-image:url('${escapeHtml(field.map_image_url || "")}')">
          ${cells.join("")}
        </div>
      </div>
    `;
  }

  function renderWaveDbStageTimelineToolbar(stage, wave, disabled) {
    return `
      <section class="wavedb-stage-timeline-toolbar">
        <div class="wavedb-wave-selector">
          <header><span>WAVE HIERARCHY</span><strong>웨이브 선택</strong></header>
          <div role="tablist" aria-label="웨이브 목록">
            ${stage.waves.map((entry, index) => `<button type="button" role="tab" class="${entry.id === wave.id ? "active" : ""}" data-wavedb-wave-select="${escapeHtml(entry.id)}" aria-selected="${entry.id === wave.id}"><span>${String(index + 1).padStart(2, "0")}</span><strong>${escapeHtml(entry.display_name)}</strong><small>${entry.layers.length}개 시간</small></button>`).join("")}
            ${canEditWaveDb ? '<button type="button" class="wavedb-wave-add-compact" data-wavedb-add-wave>＋ 웨이브</button>' : ""}
          </div>
        </div>
        <div class="wavedb-layer-create-block">
          <header><span>ADD TIME LAYER</span><strong>시간 레이어 추가</strong></header>
          <div class="wavedb-layer-create" aria-label="시간 레이어 추가">
            <label><span>분</span><input type="number" min="0" max="59" step="1" value="0" inputmode="numeric" data-wavedb-layer-minutes${disabled}></label>
            <b>:</b>
            <label><span>초</span><input type="number" min="0" max="59" step="1" value="0" inputmode="numeric" data-wavedb-layer-seconds${disabled}></label>
            ${canEditWaveDb ? '<button type="button" data-wavedb-add-layer aria-label="입력한 시간 레이어 추가">＋</button>' : ""}
          </div>
        </div>
      </section>
    `;
  }

  function renderWaveDbLayerRail(wave, layer) {
    const layers = waveDbTools.sortedLayers(wave.layers);
    return `
      <aside class="wavedb-layer-rail">
        <header><span>TIME LAYERS</span><strong>시간 레이어</strong><small>${escapeHtml(wave.display_name)}</small></header>
        <div role="tablist" aria-label="${escapeHtml(wave.display_name)} 시간 레이어 목록">
          ${layers.map((entry, index) => `<button type="button" role="tab" class="wavedb-layer-tab${entry.id === layer.id ? " active" : ""}" data-wavedb-layer-select="${escapeHtml(entry.id)}" aria-selected="${entry.id === layer.id}"><span>${String(index + 1).padStart(2, "0")}</span><strong>${waveDbTools.formatTime(entry.at_seconds)}</strong><small>${entry.placements.length}마리</small></button>`).join("")}
        </div>
        ${canEditWaveDb ? `<button type="button" class="wavedb-layer-remove" data-wavedb-remove-layer ${layers.length === 1 ? "disabled" : ""}>현재 시간 삭제</button>` : ""}
      </aside>
    `;
  }

  function renderWaveDbMonsterPanel(stage, wave, disabled) {
    const selectedId = selectedWaveDbMonster(stage, wave);
    const monsters = (monsterDb?.monsters || []).filter((monster) => monster.enabled);
    return `
      <aside class="wavedb-monster-panel">
        <header><span>MONSTER PALETTE</span><strong>몬스터 목록</strong><small>선택 후 필드 셀을 누르세요.</small></header>
        <div role="listbox" aria-label="배치할 몬스터">
          ${monsters.map((monster) => `<button type="button" role="option" class="${monster.id === selectedId ? "active" : ""}" data-wavedb-monster-tool="${escapeHtml(monster.id)}" data-element="${escapeHtml(monster.identity.element)}" aria-selected="${monster.id === selectedId}"${disabled}>${monster.concept_art_url ? `<img src="${escapeHtml(monster.concept_art_url)}" alt="" loading="lazy" decoding="async">` : ""}<span><strong>${escapeHtml(monster.identity.display_name)}</strong><small>${escapeHtml(monster.identity.element)} · ${escapeHtml(monster.identity.tier)}</small></span><i></i></button>`).join("")}
          <button type="button" role="option" class="wavedb-monster-eraser${selectedId === "__erase__" ? " active" : ""}" data-wavedb-monster-tool="__erase__" aria-selected="${selectedId === "__erase__"}"${disabled}><span class="wavedb-eraser">×</span><span><strong>배치 지우개</strong><small>선택한 셀 비우기</small></span><i></i></button>
        </div>
      </aside>
    `;
  }

  function renderWaveDbPlacementList(layer, field) {
    return `
      <div class="wavedb-placement-list">
        <header><strong>${waveDbTools.formatTime(layer.at_seconds)} 배치 목록</strong><span>${layer.placements.length}마리</span></header>
        ${layer.placements.length ? `<ol>${layer.placements.map((placement) => {
          const monster = waveDbTools.monsterById(monsterDb?.monsters || [], placement.monster_id);
          const world = waveDbTools.worldPosition(field, placement.cell[0], placement.cell[1]).map((value) => Number(value.toFixed(2)));
          return `<li data-element="${escapeHtml(monster?.identity?.element || "none")}"><span></span><div><strong>${escapeHtml(monster?.identity?.display_name || placement.monster_id)}</strong><small>셀 ${placement.cell[0] + 1}, ${placement.cell[1] + 1} · 월드 ${world.join(", ")}</small></div>${canEditWaveDb ? `<button type="button" data-wavedb-remove-placement="${escapeHtml(placement.id)}" aria-label="${escapeHtml(monster?.identity?.display_name || placement.monster_id)} 배치 삭제">×</button>` : ""}</li>`;
        }).join("")}</ol>` : '<p class="wavedb-placement-empty">아직 배치된 몬스터가 없습니다.</p>'}
      </div>
    `;
  }

  function renderWaveDbWave(stage, wave, waveIndex, field, disabled) {
    const isFinal = waveIndex === stage.waves.length - 1;
    const includesBoss = waveDbTools.hasBoss(wave, monsterDb?.monsters || []);
    const spawnCount = (wave.layers || []).reduce((total, layer) => total + layer.placements.length, 0);
    const layer = activeWaveDbLayer(stage, wave);
    if (!layer) return '<div class="empty-state">이 웨이브에 시간 레이어가 없습니다.</div>';
    return `
      <article class="wavedb-wave" data-wave-index="${waveIndex}">
        <header class="wavedb-wave-header">
          <div class="wavedb-wave-order"><span>${String(waveIndex + 1).padStart(2, "0")}</span><i></i></div>
          <div class="wavedb-wave-title"><label><span class="visually-hidden">웨이브 이름</span><input type="text" maxlength="80" value="${escapeHtml(wave.display_name)}" data-wavedb-wave-field="display_name"${disabled}></label><code>${escapeHtml(wave.id)}</code></div>
          <label class="wavedb-delay"><span>시작 대기</span><div class="wavedb-number-unit"><input type="number" min="0" max="120" step="0.05" value="${wave.start_delay_seconds}" data-wavedb-wave-field="start_delay_seconds" inputmode="decimal"${disabled}><small>초</small></div></label>
          <div class="wavedb-wave-badges"><span>${wave.layers.length} TIMES · ${spawnCount} SPAWNS</span>${isFinal ? `<strong data-boss="${includesBoss}">${includesBoss ? "BOSS 포함" : "BOSS 없음 · 허용"}</strong>` : ""}</div>
          ${canEditWaveDb ? `<div class="wavedb-wave-actions"><button type="button" data-wavedb-move-wave="-1" aria-label="웨이브 위로 이동" ${waveIndex === 0 ? "disabled" : ""}>↑</button><button type="button" data-wavedb-move-wave="1" aria-label="웨이브 아래로 이동" ${isFinal ? "disabled" : ""}>↓</button><button type="button" class="danger" data-wavedb-remove-wave aria-label="웨이브 삭제" ${stage.waves.length === 1 ? "disabled" : ""}>삭제</button></div>` : ""}
        </header>
        <div class="wavedb-wave-rule"><span>웨이브 시작</span><i>→</i><strong>시간 레이어 순서대로 소환</strong><i>→</i><span>모든 소환 완료 + 생존 몬스터 0</span><i>→</i><strong>${isFinal ? "스테이지 클리어" : "다음 웨이브"}</strong></div>
        <div class="wavedb-encounter-workspace">
          ${renderWaveDbLayerRail(wave, layer)}
          <section class="wavedb-map-panel">
            <div class="wavedb-layer-current"><span>ACTIVE LAYER</span><strong>${waveDbTools.formatTime(layer.at_seconds)}</strong><small>이 시간에 동시에 등장할 몬스터를 필드에 배치합니다.</small></div>
            ${renderWaveDbGrid(field, layer, waveIndex, Boolean(disabled))}
            ${renderWaveDbPlacementList(layer, field)}
          </section>
          ${renderWaveDbMonsterPanel(stage, wave, disabled)}
        </div>
      </article>
    `;
  }

  function updateWaveDbDocumentFromInputs(root, stage) {
    root.querySelectorAll("[data-wavedb-stage-field]").forEach((input) => {
      const field = input.dataset.wavedbStageField;
      stage[field] = input.type === "checkbox" ? input.checked : input.value;
    });
    root.querySelectorAll("[data-wave-index]").forEach((waveRoot) => {
      if (!waveRoot.classList.contains("wavedb-wave")) return;
      const wave = stage.waves[Number(waveRoot.dataset.waveIndex)];
      waveRoot.querySelectorAll("[data-wavedb-wave-field]").forEach((input) => {
        const field = input.dataset.wavedbWaveField;
        wave[field] = input.type === "number" ? Number(input.value) : input.value;
      });
    });
  }

  function waveDbSourceDocument() {
    const document = waveDbTools.deepClone(waveDbState.document);
    document.fields.forEach((field) => delete field.map_image_url);
    return document;
  }

  async function saveWaveDb() {
    if (!canEditWaveDb || waveDbState.saving) return;
    const root = document.querySelector(".wavedb-layout");
    const stage = selectedWaveDbStage();
    if (!root || !stage) return;
    updateWaveDbDocumentFromInputs(root, stage);
    waveDbState.saving = true;
    renderWaveDb({ preserveScroll: true });
    try {
      const response = await fetch("/api/wave-db/save", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ document: waveDbSourceDocument() }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.error || `저장에 실패했습니다. (${response.status})`);
      Object.keys(waveDb).forEach((key) => delete waveDb[key]);
      Object.assign(waveDb, payload.catalog);
      waveDbState.document = {
        schema_version: waveDb.schema_version,
        fields: waveDbTools.deepClone(waveDb.fields),
        stages: waveDbTools.deepClone(waveDb.stages),
      };
      waveDbState.cleanDocument = waveDbTools.deepClone(waveDbState.document);
      waveDbState.dirty = false;
      waveDbNotice = `스테이지·웨이브 설정을 저장했습니다. 게임 적용 전 리비전은 ${payload.revision}입니다.`;
    } catch (error) {
      waveDbNotice = String(error.message || error);
    }
    waveDbState.saving = false;
    renderWaveDb({ preserveScroll: true });
  }

  function bindWaveDbEditor(root, stage) {
    root.querySelectorAll("[data-wavedb-stage-select]").forEach((button) => button.addEventListener("click", () => {
      updateWaveDbDocumentFromInputs(root, stage);
      waveDbState.selectedStageId = button.dataset.wavedbStageSelect;
      renderWaveDb({ preserveScroll: true });
    }));
    root.querySelectorAll("[data-wavedb-wave-select]").forEach((button) => button.addEventListener("click", () => {
      updateWaveDbDocumentFromInputs(root, stage);
      waveDbState.activeWaves[stage.id] = button.dataset.wavedbWaveSelect;
      renderWaveDb({ preserveScroll: true });
    }));
    root.querySelectorAll("[data-wavedb-stage-field], [data-wavedb-wave-field]").forEach((input) => input.addEventListener("input", () => {
      updateWaveDbDocumentFromInputs(root, stage);
      setWaveDbDirty();
    }));
    root.querySelector('[data-wavedb-stage-field="field_id"]')?.addEventListener("change", () => {
      updateWaveDbDocumentFromInputs(root, stage);
      resetWaveDbPlacementHistory();
      setWaveDbDirty();
      renderWaveDb({ preserveScroll: true });
    });
    root.querySelector("[data-wavedb-add-stage]")?.addEventListener("click", () => {
      updateWaveDbDocumentFromInputs(root, stage);
      const fieldId = waveDbState.document.fields.find((field) => field.enabled)?.id;
      if (!fieldId) return;
      const next = waveDbTools.newStage(waveDbState.document.stages, fieldId);
      waveDbState.document.stages.push(next);
      waveDbState.selectedStageId = next.id;
      setWaveDbDirty();
      renderWaveDb({ preserveScroll: true });
    });
    root.querySelector("[data-wavedb-remove-stage]")?.addEventListener("click", () => {
      if (waveDbState.document.stages.length === 1) return;
      const index = waveDbState.document.stages.findIndex((entry) => entry.id === stage.id);
      waveDbState.document.stages.splice(index, 1);
      waveDbState.selectedStageId = waveDbState.document.stages[Math.max(0, index - 1)].id;
      resetWaveDbPlacementHistory();
      setWaveDbDirty();
      renderWaveDb({ preserveScroll: true });
    });
    root.querySelector("[data-wavedb-add-wave]")?.addEventListener("click", () => {
      updateWaveDbDocumentFromInputs(root, stage);
      const next = waveDbTools.newWave(stage.waves);
      stage.waves.push(next);
      waveDbState.activeWaves[stage.id] = next.id;
      setWaveDbDirty();
      renderWaveDb({ preserveScroll: true });
    });
    root.querySelector("[data-wavedb-add-layer]")?.addEventListener("click", () => {
      const wave = selectedWaveDbWave(stage);
      if (!wave) return;
      const key = waveDbWaveKey(stage, wave);
      try {
        const minutes = Number(root.querySelector("[data-wavedb-layer-minutes]").value);
        const seconds = Number(root.querySelector("[data-wavedb-layer-seconds]").value);
        const atSeconds = waveDbTools.parseTime(minutes, seconds);
        if (wave.layers.some((layer) => layer.at_seconds === atSeconds)) throw new Error(`${waveDbTools.formatTime(atSeconds)} 레이어가 이미 있습니다.`);
        const layer = waveDbTools.newLayer(wave.layers, atSeconds);
        wave.layers.push(layer);
        wave.layers.sort((left, right) => left.at_seconds - right.at_seconds || left.id.localeCompare(right.id));
        waveDbState.activeLayers[key] = layer.id;
        setWaveDbDirty();
        renderWaveDb({ preserveScroll: true });
      } catch (error) {
        waveDbNotice = String(error.message || error);
        renderWaveDb({ preserveScroll: true });
      }
    });
    root.querySelectorAll(".wavedb-wave").forEach((waveRoot) => {
      const waveIndex = Number(waveRoot.dataset.waveIndex);
      const wave = stage.waves[waveIndex];
      const key = waveDbWaveKey(stage, wave);
      waveRoot.querySelectorAll("[data-wavedb-layer-select]").forEach((button) => button.addEventListener("click", () => {
        waveDbState.activeLayers[key] = button.dataset.wavedbLayerSelect;
        renderWaveDb({ preserveScroll: true });
      }));
      waveRoot.querySelector("[data-wavedb-remove-layer]")?.addEventListener("click", () => {
        if (wave.layers.length === 1) return;
        const layer = activeWaveDbLayer(stage, wave);
        const index = wave.layers.findIndex((entry) => entry.id === layer?.id);
        if (index < 0) return;
        wave.layers.splice(index, 1);
        waveDbState.activeLayers[key] = waveDbTools.sortedLayers(wave.layers)[Math.max(0, index - 1)]?.id || "";
        resetWaveDbPlacementHistory();
        setWaveDbDirty();
        renderWaveDb({ preserveScroll: true });
      });
      waveRoot.querySelectorAll("[data-wavedb-monster-tool]").forEach((button) => button.addEventListener("click", () => {
        waveDbState.selectedMonsters[key] = button.dataset.wavedbMonsterTool;
        renderWaveDb({ preserveScroll: true });
      }));
      waveRoot.querySelectorAll("[data-wavedb-cell]").forEach((button) => button.addEventListener("click", () => {
        const layer = activeWaveDbLayer(stage, wave);
        if (!layer) return;
        const column = Number(button.dataset.column);
        const row = Number(button.dataset.row);
        const existing = waveDbTools.placementAt(layer, column, row);
        const monsterId = selectedWaveDbMonster(stage, wave);
        if ((!existing && monsterId === "__erase__") || existing?.monster_id === monsterId) return;
        const before = waveDbTools.deepClone(layer.placements);
        if (existing) layer.placements.splice(layer.placements.indexOf(existing), 1);
        if (monsterId !== "__erase__") layer.placements.push(waveDbTools.newPlacement(layer.placements, monsterId, column, row));
        const previousName = waveDbTools.monsterById(monsterDb?.monsters || [], existing?.monster_id)?.identity?.display_name;
        const nextName = waveDbTools.monsterById(monsterDb?.monsters || [], monsterId)?.identity?.display_name;
        const label = existing && monsterId === "__erase__"
          ? `${previousName || existing.monster_id} 배치 삭제`
          : existing
            ? `${previousName || existing.monster_id} → ${nextName || monsterId} 배치 변경`
            : `${nextName || monsterId} 배치 추가`;
        if (recordWaveDbPlacementMutation(stage, wave, layer, before, label)) {
          renderWaveDb({ preserveScroll: true });
        }
      }));
      waveRoot.querySelectorAll("[data-wavedb-remove-placement]").forEach((button) => button.addEventListener("click", () => {
        const layer = activeWaveDbLayer(stage, wave);
        if (!layer) return;
        const index = layer.placements.findIndex((placement) => placement.id === button.dataset.wavedbRemovePlacement);
        if (index < 0) return;
        const before = waveDbTools.deepClone(layer.placements);
        const removed = layer.placements[index];
        layer.placements.splice(index, 1);
        const removedName = waveDbTools.monsterById(monsterDb?.monsters || [], removed.monster_id)?.identity?.display_name;
        recordWaveDbPlacementMutation(stage, wave, layer, before, `${removedName || removed.monster_id} 배치 삭제`);
        renderWaveDb({ preserveScroll: true });
      }));
      waveRoot.querySelector("[data-wavedb-remove-wave]")?.addEventListener("click", () => {
        if (stage.waves.length === 1) return;
        updateWaveDbDocumentFromInputs(root, stage);
        stage.waves.splice(waveIndex, 1);
        waveDbState.activeWaves[stage.id] = stage.waves[Math.max(0, waveIndex - 1)]?.id || "";
        resetWaveDbPlacementHistory();
        setWaveDbDirty();
        renderWaveDb({ preserveScroll: true });
      });
      waveRoot.querySelectorAll("[data-wavedb-move-wave]").forEach((button) => button.addEventListener("click", () => {
        updateWaveDbDocumentFromInputs(root, stage);
        const target = waveIndex + Number(button.dataset.wavedbMoveWave);
        if (target < 0 || target >= stage.waves.length) return;
        [stage.waves[waveIndex], stage.waves[target]] = [stage.waves[target], stage.waves[waveIndex]];
        setWaveDbDirty();
        renderWaveDb({ preserveScroll: true });
      }));
    });
    root.querySelector("[data-wavedb-undo]")?.addEventListener("click", () => applyWaveDbPlacementHistory("undo"));
    root.querySelector("[data-wavedb-redo]")?.addEventListener("click", () => applyWaveDbPlacementHistory("redo"));
    root.querySelector("[data-wavedb-save]")?.addEventListener("click", saveWaveDb);
    root.querySelector("[data-wavedb-bake]")?.addEventListener("click", openWaveDbBake);
  }

  function closeWaveDbBake() {
    document.getElementById("wavedb-bake-backdrop")?.remove();
    if (!monsterDbEditorState && !monsterDbBakeState) document.body.classList.remove("itemdb-editor-open");
    waveDbBakeState = null;
  }

  async function openWaveDbBake() {
    if (!canEditWaveDb || waveDbBakeState) return;
    waveDbBakeState = { loading: true, payload: null, error: "", status: "" };
    renderWaveDbBake();
    try {
      const response = await fetch("/api/wave-db/bake");
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.error || `굽기에 실패했습니다. (${response.status})`);
      if (waveDbBakeState) waveDbBakeState.payload = payload;
    } catch (error) {
      if (waveDbBakeState) waveDbBakeState.error = String(error.message || error);
    }
    if (!waveDbBakeState) return;
    waveDbBakeState.loading = false;
    renderWaveDbBake();
  }

  function renderWaveDbBake() {
    const state = waveDbBakeState;
    if (!state) return;
    let backdrop = document.getElementById("wavedb-bake-backdrop");
    if (!backdrop) {
      document.body.insertAdjacentHTML("beforeend", `
        <div id="wavedb-bake-backdrop" class="itemdb-editor-backdrop">
          <section class="itemdb-editor-dialog monsterdb-bake-dialog" role="dialog" aria-modal="true" aria-labelledby="wavedb-bake-title">
            <header><div><span>WAVEDB → GAME</span><h2 id="wavedb-bake-title">게임에 굽기</h2><code>ReplicatedStorage.Waves.GeneratedStageWaves</code></div><button type="button" class="itemdb-editor-close" data-wavedb-bake-close aria-label="굽기 창 닫기">×</button></header>
            <div class="monsterdb-bake-body"></div>
          </section>
        </div>
      `);
      document.body.classList.add("itemdb-editor-open");
      backdrop = document.getElementById("wavedb-bake-backdrop");
      backdrop.addEventListener("click", (event) => {
        if (event.target === backdrop) closeWaveDbBake();
      });
      backdrop.querySelector("[data-wavedb-bake-close]").addEventListener("click", closeWaveDbBake);
    }
    const body = backdrop.querySelector(".monsterdb-bake-body");
    if (state.loading) {
      body.innerHTML = '<div class="loading">WaveDB 적용 스크립트를 만드는 중…</div>';
      return;
    }
    if (state.error) {
      body.innerHTML = `<div class="monsterdb-editor-error">${escapeHtml(state.error)}</div>`;
      return;
    }
    const payload = state.payload;
    body.innerHTML = `
      <div class="monsterdb-bake-summary"><span><strong>${escapeHtml(payload.revision)}</strong><small>DB 리비전</small></span><span><strong>${payload.count}</strong><small>활성 스테이지</small></span><span><strong>${payload.wave_count}</strong><small>웨이브</small></span></div>
      <ol><li>Roblox Studio 실행을 멈춥니다.</li><li>아래 적용 스크립트를 복사해 명령 창에서 실행합니다.</li><li>출력 창의 WaveDB 리비전을 확인하고 place를 저장합니다.</li></ol>
      <div class="monsterdb-bake-actions"><button type="button" data-wavedb-bake-copy="script">적용 스크립트 복사</button><button type="button" data-wavedb-bake-copy="module">모듈 소스 복사</button><button type="button" data-wavedb-bake-download>파일 내려받기</button></div>
      ${state.status ? `<p class="monsterdb-bake-status" role="status">${escapeHtml(state.status)}</p>` : ""}
    `;
    body.querySelectorAll("[data-wavedb-bake-copy]").forEach((button) => button.addEventListener("click", async () => {
      const script = button.dataset.wavedbBakeCopy === "script";
      try {
        await copyPlainText(script ? payload.script : payload.module_source);
        state.status = script ? "적용 스크립트를 복사했습니다." : "GeneratedStageWaves 모듈 소스를 복사했습니다.";
      } catch (error) {
        state.status = `복사에 실패했습니다. (${String(error.message || error)})`;
      }
      renderWaveDbBake();
    }));
    body.querySelector("[data-wavedb-bake-download]").addEventListener("click", () => {
      downloadPlainText(payload.filename, payload.script);
      state.status = `${payload.filename} 파일을 내려받았습니다.`;
      renderWaveDbBake();
    });
  }

  function renderWaveDb({ preserveScroll = false } = {}) {
    const previousScroll = preserveScroll
      ? { x: window.scrollX, y: window.scrollY }
      : { x: 0, y: 0 };
    document.title = "WaveDB · PackBound Wiki";
    renderNavigation("wave-db", "database");
    const stage = selectedWaveDbStage();
    if (!stage) {
      main.innerHTML = '<div class="empty-state">표시할 스테이지가 없습니다.</div>';
      return;
    }
    const fields = waveDbState.document.fields || [];
    const selectedField = fields.find((field) => field.id === stage.field_id) || fields[0];
    const selectedWave = selectedWaveDbWave(stage);
    const selectedWaveIndex = stage.waves.indexOf(selectedWave);
    const disabled = canEditWaveDb ? "" : " disabled";
    const totalWaves = waveDbTools.totalWaves(waveDbState.document.stages);
    const totalLayers = waveDbTools.totalLayers(waveDbState.document.stages);
    const totalSpawns = waveDbTools.totalSpawns(waveDbState.document.stages);
    main.innerHTML = `
      <div class="wavedb-layout">
        <header class="wavedb-hero">
          <div><div class="page-eyebrow">Visual encounter timeline</div><h1>Stage &amp; Wave DB</h1><p>스테이지 필드 위에 시간 레이어를 만들고, 격자 셀을 눌러 원하는 몬스터의 출현 위치를 배치합니다.</p></div>
          <div class="wavedb-hero-stats"><span><strong>${waveDbState.document.stages.length}</strong><small>STAGES</small></span><span><strong>${totalWaves}</strong><small>WAVES</small></span><span><strong>${totalLayers}</strong><small>TIME LAYERS</small></span><span><strong>${totalSpawns}</strong><small>SPAWNS</small></span></div>
          <div class="wavedb-contract"><span><i>1</i> 예약 스폰 완료</span><b>→</b><span><i>2</i> 생존 몬스터 0</span><b>→</b><span><i>3</i> 자동 다음 웨이브</span><b>→</b><span><i>4</i> 최종 클리어</span></div>
        </header>
        <div class="wavedb-workspace">
          <aside class="wavedb-stage-list">
            <header><div><span>STAGE INDEX</span><strong>스테이지</strong></div>${canEditWaveDb ? '<button type="button" data-wavedb-add-stage aria-label="스테이지 추가">＋</button>' : ""}</header>
            <div>${waveDbState.document.stages.map((entry, index) => `<button type="button" class="${entry.id === stage.id ? "active" : ""}" data-wavedb-stage-select="${escapeHtml(entry.id)}"><span>${String(index + 1).padStart(2, "0")}</span><span><strong>${escapeHtml(entry.display_name)}</strong><small>${entry.waves.length} 웨이브 · ${escapeHtml(entry.field_id)}</small></span><em>${entry.enabled ? "ON" : "OFF"}</em></button>`).join("")}</div>
          </aside>
          <section class="wavedb-editor">
            <header class="wavedb-stage-header">
              <div><span>STAGE SETTINGS</span><h2>${escapeHtml(stage.display_name)}</h2><code>${escapeHtml(stage.id)}</code></div>
              <div class="wavedb-stage-actions">${canEditWaveDb ? `<button type="button" class="danger" data-wavedb-remove-stage ${waveDbState.document.stages.length === 1 ? "disabled" : ""}>스테이지 삭제</button><button type="button" class="wavedb-history-button" data-wavedb-undo aria-label="최근 몬스터 배치 되돌리기" title="최근 몬스터 배치 되돌리기 (Cmd/Ctrl+Z)" ${waveDbState.placementHistory.past.length ? "" : "disabled"}>↶ 되돌리기</button><button type="button" class="wavedb-history-button" data-wavedb-redo aria-label="되돌린 몬스터 배치 다시 실행" title="되돌린 몬스터 배치 다시 실행 (Cmd/Ctrl+Shift+Z 또는 Ctrl+Y)" ${waveDbState.placementHistory.future.length ? "" : "disabled"}>↷ 다시 실행</button><button type="button" data-wavedb-bake>게임에 굽기</button><button type="button" class="primary" data-wavedb-save ${!waveDbState.dirty || waveDbState.saving ? "disabled" : ""}>${waveDbState.saving ? "저장 중…" : "전체 저장"}</button>` : ""}</div>
            </header>
            ${waveDbNotice ? `<div class="wavedb-notice" data-wavedb-notice role="status">${escapeHtml(waveDbNotice)}</div>` : '<div class="wavedb-notice quiet" data-wavedb-notice>변경하면 전체 스테이지 구성이 함께 검증·저장됩니다.</div>'}
            ${renderWaveDbStageTimelineToolbar(stage, selectedWave, disabled)}
            <section class="wavedb-stage-fields">
              <label><span>스테이지 이름</span><input type="text" maxlength="80" value="${escapeHtml(stage.display_name)}" data-wavedb-stage-field="display_name"${disabled}></label>
              <label class="wide"><span>설명</span><textarea maxlength="240" rows="2" data-wavedb-stage-field="description"${disabled}>${escapeHtml(stage.description)}</textarea></label>
              <label><span>사용 필드</span><select data-wavedb-stage-field="field_id"${disabled}>${fields.filter((field) => field.enabled || field.id === stage.field_id).map((field) => `<option value="${escapeHtml(field.id)}" ${field.id === stage.field_id ? "selected" : ""}>${escapeHtml(field.display_name)} · v${field.runtime_field_version}</option>`).join("")}</select></label>
              <label class="wavedb-enabled"><span>게임 활성화</span><input type="checkbox" data-wavedb-stage-field="enabled" ${stage.enabled ? "checked" : ""}${disabled}><strong>${stage.enabled ? "GAME ON" : "OFF"}</strong></label>
              <article class="wavedb-field-link"><span>연결된 FieldDB</span><strong>${escapeHtml(selectedField?.display_name || stage.field_id)}</strong><code>${escapeHtml(selectedField?.id || stage.field_id)}</code><dl><div><dt>월드 모델</dt><dd>${escapeHtml(selectedField?.runtime_model_name || "-")}</dd></div><div><dt>필드 버전</dt><dd>v${selectedField?.runtime_field_version || "-"}</dd></div><div><dt>배치 격자</dt><dd>${waveDbTools.gridColumns(selectedField)} × ${waveDbTools.gridRows(selectedField)}</dd></div><div><dt>플레이어 시작점</dt><dd>${(selectedField?.player_spawn || []).join(", ")}</dd></div></dl></article>
            </section>
            <div class="wavedb-wave-list">
              ${renderWaveDbWave(stage, selectedWave, selectedWaveIndex, selectedField, disabled)}
            </div>
          </section>
        </div>
      </div>
    `;
    bindWaveDbEditor(document.querySelector(".wavedb-layout"), stage);
    bindWaveDbKeyboardShortcuts();
    document.body.classList.remove("menu-open");
    window.scrollTo(previousScroll.x, previousScroll.y);
  }

  function animationCurationUrl(value) {
    try {
      const url = new URL(String(value));
      if (url.protocol !== "http:" || !["127.0.0.1", "localhost"].includes(url.hostname)) return "";
      return url.href;
    } catch (_error) {
      return "";
    }
  }

  function closeAnimationDbBake() {
    document.getElementById("animationdb-bake-backdrop")?.remove();
    animationDbBakeState = { loading: false, error: "", payload: null, status: "" };
  }

  async function copyAnimationBakeText(text, successMessage) {
    try {
      await navigator.clipboard.writeText(text);
      animationDbBakeState.status = successMessage;
    } catch (_error) {
      animationDbBakeState.status = "복사 권한을 사용할 수 없습니다. 텍스트를 직접 선택해 복사해 주세요.";
    }
    renderAnimationDbBake();
  }

  function renderAnimationDbBake() {
    let backdrop = document.getElementById("animationdb-bake-backdrop");
    if (!backdrop) {
      document.body.insertAdjacentHTML("beforeend", `
        <div id="animationdb-bake-backdrop" class="itemdb-editor-backdrop">
          <section class="itemdb-editor-dialog animationdb-bake-dialog" role="dialog" aria-modal="true" aria-labelledby="animationdb-bake-title">
            <header><div><span>ANIMATIONDB → ROBLOX</span><h2 id="animationdb-bake-title">게임에 굽기</h2><code>검증 패키지 · Studio 적용</code></div><button type="button" class="itemdb-editor-close" data-animationdb-bake-close aria-label="베이크 창 닫기">×</button></header>
            <div class="animationdb-bake-body"></div>
          </section>
        </div>
      `);
      backdrop = document.getElementById("animationdb-bake-backdrop");
      backdrop.addEventListener("click", (event) => {
        if (event.target.id === "animationdb-bake-backdrop" && !animationDbBakeState.loading) closeAnimationDbBake();
      });
      backdrop.querySelector("[data-animationdb-bake-close]").addEventListener("click", closeAnimationDbBake);
    }
    const body = backdrop.querySelector(".animationdb-bake-body");
    if (animationDbBakeState.loading) {
      body.innerHTML = '<div class="animationdb-bake-loading"><span></span><strong>최종 큐레이션을 런타임 이미지로 굽는 중…</strong><p>프레임 선택·순서·이동·크기·회전 정보를 반영하고 이미지 무결성을 검사합니다.</p></div>';
      return;
    }
    if (animationDbBakeState.error) {
      body.innerHTML = `<p class="animationdb-bake-error" role="alert">${escapeHtml(animationDbBakeState.error)}</p><div class="animationdb-bake-actions"><button type="button" data-animationdb-bake-close>닫기</button></div>`;
      body.querySelector("[data-animationdb-bake-close]").addEventListener("click", closeAnimationDbBake);
      return;
    }
    const payload = animationDbBakeState.payload;
    if (!payload) return;
    body.innerHTML = `
      <div class="animationdb-bake-summary">
        <span><small>베이크 대상</small><strong>${escapeHtml(payload.target_label)}</strong></span>
        <span><small>묶음 ID</small><code>${escapeHtml(payload.bake_id)}</code></span>
        <span><small>런타임 이미지</small><strong>${payload.uploads.length}개</strong></span>
        <span data-warning="${payload.upload_count > 0}"><small>Roblox 업로드 필요</small><strong>${payload.upload_count}개</strong></span>
      </div>
      <div class="animationdb-bake-files" role="list">
        ${payload.uploads.map((entry) => `
          <article role="listitem" data-upload="${entry.requires_upload}">
            <div><strong>${escapeHtml(entry.state)}</strong><span>${entry.frame_count}F · ${entry.cell_width || 128}×${entry.cell_height || 128}${entry.fps ? ` · ${animationMetric(entry.fps)} FPS` : ""}</span></div>
            <code title="${escapeHtml(entry.path)}">${escapeHtml(entry.path)}</code>
            <p>SHA256 <code>${escapeHtml(entry.sha256.slice(0, 16))}…</code></p>
            <em>${entry.requires_upload ? "새 Roblox 이미지 업로드 필요" : `기존 자산 재사용 · ${escapeHtml(entry.asset_id || "ID 확인됨")}`}</em>
          </article>
        `).join("")}
      </div>
      <p class="animationdb-bake-note">${payload.upload_count
        ? "웹페이지는 Roblox 계정에 이미지를 대신 업로드하지 않습니다. 아래 적용 요청을 복사해 이 대화에 보내면, 검증된 PNG만 Studio MCP로 업로드하고 저장소와 Studio를 함께 맞춥니다."
        : "모든 이미지가 현재 Roblox 자산과 동일합니다. 적용 요청을 보내면 Studio의 모듈과 리비전을 확인하고 필요한 부분만 동기화합니다."}</p>
      <div class="animationdb-bake-actions">
        <button type="button" class="primary" data-animationdb-bake-copy="request">Studio 적용 요청 복사</button>
        <button type="button" data-animationdb-bake-copy="manifest">매니페스트 경로 복사</button>
        <button type="button" data-animationdb-bake-close>닫기</button>
      </div>
      <textarea class="animationdb-bake-request" readonly aria-label="Roblox Studio 적용 요청">${escapeHtml(payload.studio_request)}</textarea>
      ${animationDbBakeState.status ? `<p class="animationdb-bake-status" role="status">${escapeHtml(animationDbBakeState.status)}</p>` : ""}
    `;
    body.querySelector('[data-animationdb-bake-copy="request"]').addEventListener("click", () => void copyAnimationBakeText(payload.studio_request, "Studio 적용 요청을 복사했습니다."));
    body.querySelector('[data-animationdb-bake-copy="manifest"]').addEventListener("click", () => void copyAnimationBakeText(payload.manifest_path, "베이크 매니페스트 경로를 복사했습니다."));
    body.querySelector("[data-animationdb-bake-close]").addEventListener("click", closeAnimationDbBake);
  }

  async function openAnimationDbBake(target) {
    if (!canEditAnimationDb || animationDbBakeState.loading) return;
    animationDbBakeState = { loading: true, error: "", payload: null, status: "" };
    renderAnimationDbBake();
    try {
      const response = await fetch("/api/animation-db/bake", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ api_version: 1, ...target }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.error || `애니메이션을 굽지 못했습니다. (${response.status})`);
      if (!Array.isArray(payload.uploads) || !payload.manifest_path || !payload.studio_request) {
        throw new Error("AnimationDB 베이크 결과가 불완전합니다.");
      }
      animationDbBakeState.payload = payload;
    } catch (error) {
      animationDbBakeState.error = String(error.message || error);
    } finally {
      animationDbBakeState.loading = false;
      renderAnimationDbBake();
    }
  }

  async function openAnimationWorkspace(workspaceId) {
    if (!canOpenAnimationCuration || animationDbWorkspaceState.loadingId) return;
    animationDbWorkspaceState.loadingId = workspaceId;
    animationDbCurationNotice = "";
    renderAnimationDbWorkspaces();
    try {
      const response = await fetch("/api/animation-db/curation/open", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ workspace_id: workspaceId }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.error || `큐레이션 화면을 열지 못했습니다. (${response.status})`);
      const url = animationCurationUrl(payload.url);
      if (!url) throw new Error("큐레이션 서버가 안전한 로컬 주소를 반환하지 않았습니다.");
      animationDbWorkspaceState.activeId = workspaceId;
      animationDbWorkspaceState.url = url;
    } catch (error) {
      animationDbCurationNotice = String(error.message || error);
    } finally {
      animationDbWorkspaceState.loadingId = "";
      renderAnimationDbWorkspaces();
      document.getElementById("animationdb-curation-frame")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function animationEntityLabel(entityType, uppercase = false) {
    const labels = uppercase
      ? { player: "PLAYER", monster: "MONSTER", effect: "EFFECT" }
      : { player: "플레이어", monster: "몬스터", effect: "효과" };
    return labels[entityType] || entityType;
  }

  function renderAnimationSubjectCards(subjects, selectedId, mode) {
    const attribute = mode === "gallery" ? "data-animation-gallery-subject" : "data-animation-curation-subject";
    return subjects.map((subject) => {
      const selected = subject.id === selectedId;
      const primaryCount = mode === "gallery" ? subject.actions.length : subject.workspaces.length;
      const secondaryCount = mode === "gallery"
        ? subject.records.length
        : subject.workspaces.reduce((sum, workspace) => sum + (workspace.state_count || 0), 0);
      const primaryLabel = mode === "gallery" ? "동작" : "작업공간";
      const secondaryLabel = mode === "gallery" ? "애니메이션" : "모션";
      return `
        <button type="button" class="animationdb-subject-card ${selected ? "active" : ""}" ${attribute}="${escapeHtml(subject.id)}" aria-pressed="${selected}">
          <span class="animationdb-subject-preview">
            ${subject.representative_url ? `<img src="${escapeHtml(subject.representative_url)}" alt="${escapeHtml(subject.label)} 대표 이미지" loading="lazy" decoding="async">` : '<span>NO PREVIEW</span>'}
          </span>
          <span class="animationdb-subject-copy">
            <small>${escapeHtml(animationEntityLabel(subject.entity_type, true))}</small>
            <strong>${escapeHtml(subject.label)}</strong>
            <span>${primaryCount} ${primaryLabel} · ${secondaryCount} ${secondaryLabel}</span>
          </span>
          <i aria-hidden="true">${selected ? "선택됨" : "열기"}</i>
        </button>
      `;
    }).join("");
  }

  function renderAnimationDbWorkspaces() {
    const root = document.getElementById("animationdb-workspaces");
    if (!root) return;
    const subjects = animationDbTools.groupWorkspaceSubjects(animationDb.workspaces || []);
    const subject = subjects.find((entry) => entry.id === animationDbState.curationSubjectId) || null;
    const workspaces = subject?.workspaces || [];
    const activeWorkspace = animationDbTools.findWorkspace(workspaces, animationDbWorkspaceState.activeId);
    root.innerHTML = `
      <header class="animationdb-workspace-heading">
        <div><span class="page-eyebrow">3단계 · 작업공간</span><h2>${escapeHtml(subject?.label || "선택한 주체")} 큐레이션</h2><p>작업공간을 확인한 뒤 ‘큐레이션 열기’를 누르면 아래에 실제 편집 화면이 열립니다.</p></div>
        <span class="animationdb-workspace-mode" data-editable="${canOpenAnimationCuration}">${canOpenAnimationCuration ? "로컬 편집 가능" : "읽기 전용 미리보기"}</span>
      </header>
      ${animationDbCurationNotice ? `<div class="itemdb-save-notice" role="status">${escapeHtml(animationDbCurationNotice)}</div>` : ""}
      ${workspaces.length ? `<div class="animationdb-workspace-list">${workspaces.map((workspace) => {
        const loading = animationDbWorkspaceState.loadingId === workspace.id;
        const active = activeWorkspace?.id === workspace.id;
        return `
          <article class="animationdb-workspace-card ${active ? "active" : ""}">
            <div class="animationdb-workspace-preview">${workspace.preview_url ? `<img src="${escapeHtml(workspace.preview_url)}" alt="${escapeHtml(workspace.title)} 전체 프레임" loading="lazy" decoding="async">` : '<span>NO PREVIEW</span>'}</div>
            <div class="animationdb-workspace-body">
              <div class="animationdb-workspace-meta"><span>${escapeHtml(animationEntityLabel(workspace.entity_type, true))}</span><em data-status="${escapeHtml(workspace.status)}">${escapeHtml(workspace.status_label)}</em></div>
              <h3>${escapeHtml(workspace.title)}</h3>
              <code title="${escapeHtml(workspace.source_root)}">${escapeHtml(workspace.source_root)}</code>
              <div class="animationdb-workspace-metrics"><span><strong>${workspace.state_count}</strong><small>모션</small></span><span><strong>${workspace.frame_count}</strong><small>프레임</small></span></div>
              <div class="animationdb-workspace-states">${workspace.states.map((state) => `<span>${escapeHtml(state.name)} · ${state.frames}F</span>`).join("")}</div>
              ${canOpenAnimationCuration
                ? `<div class="animationdb-workspace-actions"><button type="button" data-animation-workspace-open="${escapeHtml(workspace.id)}" ${loading ? "disabled" : ""}>${loading ? "큐레이터 시작 중…" : active ? "큐레이터 다시 열기" : "큐레이션 열기"}</button><button type="button" class="primary" data-animation-workspace-bake="${escapeHtml(workspace.id)}">큐레이션 굽기</button></div>`
                : '<p class="animationdb-workspace-readonly">로컬 위키에서 원본 프레임을 편집할 수 있습니다.</p>'}
            </div>
          </article>
        `;
      }).join("")}</div>` : '<div class="empty-state">연결할 스프라이트 제작 작업공간이 없습니다.</div>'}
      ${activeWorkspace && animationDbWorkspaceState.url ? `
        <section id="animationdb-curation-frame" class="animationdb-curation-frame">
          <header><div><span class="page-eyebrow">Live sprite-gen curator</span><h3>${escapeHtml(activeWorkspace.title)} · 큐레이션</h3><p>선택과 정렬은 이 작업공간의 <code>curation.json</code>에 저장됩니다.</p></div><div><a href="${escapeHtml(animationDbWorkspaceState.url)}" target="_blank" rel="noopener">새 탭으로 열기</a><button type="button" data-animation-workspace-close>닫기</button></div></header>
          <iframe src="${escapeHtml(animationDbWorkspaceState.url)}" title="${escapeHtml(activeWorkspace.title)} 스프라이트 큐레이션" loading="eager" sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups"></iframe>
        </section>
      ` : ""}
    `;
    root.querySelectorAll("[data-animation-workspace-open]").forEach((button) => {
      button.addEventListener("click", () => void openAnimationWorkspace(button.dataset.animationWorkspaceOpen));
    });
    root.querySelectorAll("[data-animation-workspace-bake]").forEach((button) => {
      button.addEventListener("click", () => void openAnimationDbBake({ workspace_id: button.dataset.animationWorkspaceBake }));
    });
    root.querySelector("[data-animation-workspace-close]")?.addEventListener("click", () => {
      animationDbWorkspaceState.activeId = "";
      animationDbWorkspaceState.url = "";
      renderAnimationDbWorkspaces();
    });
  }

  function animationMetric(value, suffix = "") {
    return value == null ? "—" : `${Number.isInteger(value) ? value : Number(value).toFixed(2).replace(/0+$/, "").replace(/\.$/, "")}${suffix}`;
  }

  function animationSelectedVariant(record) {
    return animationDbTools.selectedVariant(record, animationDbState.variants[record.id]);
  }

  async function selectAnimationRecord(recordId) {
    if (!canEditAnimationDb || animationDbSelectionSavingId) return;
    const record = animationDbTools.findRecord(animationDb.records, recordId);
    if (!record) return;
    const keepingCurrent = record.runtime_relation === "live";
    const prompt = keepingCurrent
      ? "현재 게임 적용본을 유지하고, 따로 선택해 둔 후보를 해제할까요?"
      : `${record.candidate} 후보를 적용 대상으로 선택할까요?\n\n선택 기록만 저장되며, 게임 파일 교체와 Roblox 업로드는 아직 실행되지 않습니다.`;
    if (!window.confirm(prompt)) return;
    animationDbSelectionSavingId = recordId;
    animationDbSelectionNotice = "선택을 저장하고 AnimationDB를 갱신하는 중입니다…";
    renderAnimationDbResults();
    try {
      const response = await fetch("/api/animation-db/select", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ api_version: 1, record_id: recordId }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.error || `애니메이션 선택을 저장하지 못했습니다. (${response.status})`);
      if (!payload.catalog || !Array.isArray(payload.catalog.records)) {
        throw new Error("AnimationDB 선택 응답에 갱신된 목록이 없습니다.");
      }
      Object.keys(animationDb).forEach((key) => delete animationDb[key]);
      Object.assign(animationDb, payload.catalog);
      animationDbSelectionNotice = payload.pending
        ? `${record.title}의 ${record.candidate} 후보를 적용 대상으로 선택했습니다. 게임 반영은 별도 승격 단계에서 진행됩니다.`
        : `${record.title}은 현재 게임 적용본을 유지합니다.`;
    } catch (error) {
      animationDbSelectionNotice = String(error.message || error);
    } finally {
      animationDbSelectionSavingId = "";
      renderAnimationDbResults();
    }
  }

  function renderAnimationCompare() {
    const root = document.getElementById("animationdb-compare");
    if (!root) return;
    const records = animationDbState.compare
      .map((recordId) => animationDbTools.findRecord(animationDb.records, recordId))
      .filter(Boolean);
    root.hidden = records.length === 0;
    if (!records.length) {
      root.innerHTML = "";
      return;
    }
    root.innerHTML = `
      <header><div><span class="page-eyebrow">Side-by-side curation</span><h2>선택 비교</h2></div><button type="button" data-animation-compare-clear>비교 비우기</button></header>
      <div class="animationdb-compare-grid">
        ${records.map((record) => {
          const variant = animationSelectedVariant(record);
          return `
            <article>
              <button type="button" class="animationdb-compare-preview" data-image-viewer-src="${escapeHtml(variant?.preview_url || "")}" data-image-viewer-alt="${escapeHtml(`${record.title} ${variant?.label || ""}`)}" data-image-viewer-caption="${escapeHtml(`${record.title} · ${record.candidate} · ${variant?.label || ""}`)}">
                <img src="${escapeHtml(variant?.preview_url || "")}" alt="${escapeHtml(`${record.title} ${variant?.label || ""} 미리보기`)}">
              </button>
              <div><span class="animationdb-status" data-status="${escapeHtml(record.status)}">${escapeHtml(record.status_label)}</span><h3>${escapeHtml(record.title)}</h3><code>${escapeHtml(record.candidate)}</code><strong>${escapeHtml(variant?.label || "")}</strong></div>
              <button type="button" class="animationdb-remove-compare" data-animation-compare="${escapeHtml(record.id)}" aria-label="${escapeHtml(record.title)} 비교에서 제거">제거</button>
            </article>
          `;
        }).join("")}
        ${records.length === 1 ? '<div class="animationdb-compare-empty"><span>+</span><p>다른 카드에서 비교를 눌러 나란히 확인하세요.</p></div>' : ""}
      </div>
    `;
  }

  function renderAnimationDbResults() {
    const root = document.getElementById("animationdb-results");
    const count = document.getElementById("animationdb-result-count");
    if (!root || !count) return;
    const subjects = animationDbTools.groupAnimationSubjects(animationDb.records);
    const subject = subjects.find((entry) => entry.id === animationDbState.gallerySubjectId) || null;
    const action = subject?.actions.find((entry) => entry.id === animationDbState.galleryAction) || null;
    const scopedRecords = action?.records || [];
    const records = animationDbTools.filterAnimations(scopedRecords, {
      query: animationDbState.query,
      status: animationDbState.status,
    });
    count.textContent = `${records.length} / ${scopedRecords.length}개 표시`;
    if (!records.length) {
      root.innerHTML = '<div class="empty-state">조건에 맞는 애니메이션이 없습니다.</div>';
      renderAnimationCompare();
      bindAnimationDbActions();
      return;
    }
    root.innerHTML = records.map((record) => {
      const variant = animationSelectedVariant(record);
      const comparing = animationDbState.compare.includes(record.id);
      const selectedForApply = record.selection_state === "selected";
      const current = record.selection_state === "current";
      const sourceOfCurrent = record.selection_state === "source";
      const saving = animationDbSelectionSavingId === record.id;
      const groupSelection = (animationDb.selections || []).find((entry) => entry.group === record.selection_group);
      const hasPendingSelection = Boolean(groupSelection?.pending);
      let selectionControl = "";
      if (canEditAnimationDb) {
        if (sourceOfCurrent) {
          selectionControl = '<span class="animationdb-selection-source">현재 적용본을 만든 제작 원본</span>';
        } else if (record.status === "rejected") {
          selectionControl = '<button type="button" class="animationdb-select" disabled>선택 불가</button>';
        } else if (selectedForApply) {
          selectionControl = '<button type="button" class="animationdb-select selected" disabled>적용 대상으로 선택됨</button>';
        } else if (current && !hasPendingSelection) {
          selectionControl = '<button type="button" class="animationdb-select current" disabled>현재 게임 적용 중</button>';
        } else {
          selectionControl = `<button type="button" class="animationdb-select ${current ? "current" : ""}" data-animation-select="${escapeHtml(record.id)}" ${animationDbSelectionSavingId ? "disabled" : ""}>${saving ? "저장 중…" : current ? "현재 적용본 유지" : "이 후보 선택"}</button>`;
        }
      }
      return `
        <article class="animationdb-card ${comparing ? "selected" : ""} ${selectedForApply ? "selection-selected" : ""}" data-animation-record="${escapeHtml(record.id)}">
          <div class="animationdb-card-preview">
            <button type="button" data-image-viewer-src="${escapeHtml(variant?.preview_url || "")}" data-image-viewer-alt="${escapeHtml(`${record.title} ${variant?.label || ""}`)}" data-image-viewer-caption="${escapeHtml(`${record.title} · ${record.candidate} · ${variant?.label || ""}`)}">
              <img src="${escapeHtml(variant?.preview_url || "")}" alt="${escapeHtml(`${record.title} ${variant?.label || ""} 애니메이션`)}" loading="lazy" decoding="async">
              <span>확대 보기</span>
            </button>
            <span class="animationdb-status" data-status="${escapeHtml(record.status)}">${escapeHtml(record.status_label)}</span>
            ${selectedForApply ? '<span class="animationdb-selection-badge">적용 대상</span>' : ""}
          </div>
          <div class="animationdb-card-body">
            <header><div><span>${record.entity_type === "player" ? "PLAYER" : "MONSTER"}</span><h2>${escapeHtml(record.title)}</h2><code>${escapeHtml(record.candidate)}</code></div><button type="button" class="animationdb-compare-toggle" data-animation-compare="${escapeHtml(record.id)}" aria-pressed="${comparing}">${comparing ? "비교 중" : "비교"}</button></header>
            <div class="animationdb-metrics">
              <span><small>프레임</small><strong>${animationMetric(record.frame_count)}</strong></span>
              <span><small>재생 속도</small><strong>${animationMetric(record.fps, " FPS")}</strong></span>
              <span><small>길이</small><strong>${animationMetric(record.duration_seconds, "s")}</strong></span>
              <span><small>재생</small><strong>${record.loop === true ? "LOOP" : record.loop === false ? "1회" : "—"}</strong></span>
            </div>
            <div class="animationdb-direction-row"><span>방향</span><strong>${record.directions.map((direction) => escapeHtml(direction)).join(" · ") || "—"}</strong></div>
            <div class="animationdb-variants" role="group" aria-label="${escapeHtml(record.title)} 미리보기 선택">
              ${record.variants.map((entry) => `<button type="button" data-animation-variant="${escapeHtml(entry.id)}" data-animation-variant-record="${escapeHtml(record.id)}" class="${entry.id === variant?.id ? "active" : ""}" aria-pressed="${entry.id === variant?.id}">${escapeHtml(entry.label)}</button>`).join("")}
            </div>
            ${selectionControl ? `<div class="animationdb-selection-action">${selectionControl}</div>` : ""}
            <footer><span>REV ${escapeHtml(animationDb.revision.slice(0, 8))}</span>${variant?.contact_sheet_url ? `<button type="button" data-image-viewer-src="${escapeHtml(variant.contact_sheet_url)}" data-image-viewer-alt="${escapeHtml(`${record.title} 콘택트 시트`)}" data-image-viewer-caption="${escapeHtml(`${record.title} · 전체 프레임 콘택트 시트`)}">전체 프레임 보기</button>` : ""}</footer>
          </div>
        </article>
      `;
    }).join("");
    renderAnimationCompare();
    bindAnimationDbActions();
  }

  function bindAnimationDbActions() {
    document.querySelectorAll("[data-animation-variant-record]").forEach((button) => {
      button.addEventListener("click", () => {
        animationDbState.variants[button.dataset.animationVariantRecord] = button.dataset.animationVariant;
        renderAnimationDbResults();
      });
    });
    document.querySelectorAll("[data-animation-compare]").forEach((button) => {
      button.addEventListener("click", () => {
        const recordId = button.dataset.animationCompare;
        animationDbState.compare = animationDbState.compare.includes(recordId)
          ? animationDbState.compare.filter((value) => value !== recordId)
          : [...animationDbState.compare.slice(-1), recordId];
        renderAnimationDbResults();
      });
    });
    document.querySelectorAll("[data-animation-select]").forEach((button) => {
      button.addEventListener("click", () => void selectAnimationRecord(button.dataset.animationSelect));
    });
    document.querySelector("[data-animation-compare-clear]")?.addEventListener("click", () => {
      animationDbState.compare = [];
      renderAnimationDbResults();
    });
  }

  function renderAnimationDbGallery() {
    const root = document.getElementById("animationdb-tab-panel");
    if (!root) return;
    const subjects = animationDbTools.groupAnimationSubjects(animationDb.records);
    const selectedSubject = subjects.find((subject) => subject.id === animationDbState.gallerySubjectId) || null;
    const selectedAction = selectedSubject?.actions.find((action) => action.id === animationDbState.galleryAction) || null;
    const statusOptions = animationDbTools.filterOptions(selectedAction?.records || [], "status");
    const statusLabels = new Map((selectedAction?.records || []).map((record) => [record.status, record.status_label]));
    const selectedRecord = selectedAction?.records.find((record) => ["selected", "current"].includes(record.selection_state)) || null;
    const selectionPending = selectedRecord?.selection_state === "selected";
    root.innerHTML = `
      <section class="animationdb-tree-section" aria-labelledby="animationdb-gallery-subject-heading">
        <header class="animationdb-tree-heading"><div><span class="page-eyebrow">1단계 · 주체</span><h2 id="animationdb-gallery-subject-heading">애니메이션 주체</h2><p>플레이어나 몬스터를 대표 이미지로 먼저 선택합니다.</p></div><strong>${subjects.length}개 주체</strong></header>
        <div class="animationdb-subject-list">${renderAnimationSubjectCards(subjects, animationDbState.gallerySubjectId, "gallery")}</div>
      </section>
      ${selectedSubject ? `
        <section class="animationdb-tree-section animationdb-tree-branch" aria-labelledby="animationdb-gallery-action-heading">
          <header class="animationdb-tree-heading"><div><span class="page-eyebrow">2단계 · 동작</span><h2 id="animationdb-gallery-action-heading">${escapeHtml(selectedSubject.label)}의 애니메이션</h2><p>보고 싶은 동작을 선택하면 해당 애니메이션과 제작 후보가 아래에 재생됩니다.</p></div><button type="button" data-animation-gallery-back>주체 다시 선택</button></header>
          <div class="animationdb-action-list">
            ${selectedSubject.actions.map((action) => {
              const selected = action.id === animationDbState.galleryAction;
              const live = action.records.some((record) => record.status === "live");
              return `
                <button type="button" class="animationdb-action-card ${selected ? "active" : ""}" data-animation-gallery-action="${escapeHtml(action.id)}" aria-pressed="${selected}">
                  <span>${action.representative_url ? `<img src="${escapeHtml(action.representative_url)}" alt="${escapeHtml(`${selectedSubject.label} ${action.label}`)} 미리보기" loading="lazy" decoding="async">` : "NO PREVIEW"}</span>
                  <strong>${escapeHtml(action.label)}</strong>
                  <small>${action.records.length}개 결과${live ? " · 게임 적용본 포함" : ""}</small>
                </button>
              `;
            }).join("")}
          </div>
        </section>
      ` : '<div class="animationdb-tree-placeholder"><span>1</span><p>위에서 주체를 선택하면 동작 목록이 이어집니다.</p></div>'}
      ${selectedAction ? `
        <section class="animationdb-output" aria-labelledby="animationdb-output-heading">
          <header class="animationdb-tree-heading"><div><span class="page-eyebrow">3단계 · 결과</span><h2 id="animationdb-output-heading">${escapeHtml(`${selectedSubject.label} · ${selectedAction.label}`)}</h2><p>방향을 바꾸거나 적용본과 후보를 나란히 비교할 수 있습니다.</p></div><strong>${selectedAction.records.length}개 결과</strong></header>
          <div class="animationdb-selection-summary" data-pending="${selectionPending}">
            <div><span>${selectionPending ? "적용 대상으로 선택" : "현재 게임 적용"}</span><strong>${escapeHtml(selectedRecord?.candidate || "선택 기록 없음")}</strong></div>
            <p>${canEditAnimationDb ? "후보 카드에서 선택할 수 있습니다. 선택은 적용 대상을 기록하며, 실제 게임 파일 교체와 Roblox 업로드는 별도 승격 단계입니다." : "공개 페이지에서는 현재 상태와 선택 결과만 볼 수 있습니다. 후보 선택은 로컬 위키에서만 가능합니다."}</p>
            ${canEditAnimationDb && selectedRecord ? `<button type="button" data-animation-selection-bake="${escapeHtml(selectedRecord.id)}">${selectionPending ? "선택 후보 게임에 굽기" : "현재 적용본 확인·굽기"}</button>` : ""}
          </div>
          ${animationDbSelectionNotice ? `<div class="animationdb-selection-notice" role="status">${escapeHtml(animationDbSelectionNotice)}</div>` : ""}
          <section class="animationdb-toolbar" aria-label="선택한 애니메이션 검색과 필터">
            <label class="animationdb-search"><span>결과 안에서 검색</span><input id="animationdb-search" type="search" value="${escapeHtml(animationDbState.query)}" placeholder="후보명이나 상태 검색…"></label>
            <label><span>상태</span><select id="animationdb-status"><option value="all">전체</option>${statusOptions.map((value) => `<option value="${escapeHtml(value)}" ${animationDbState.status === value ? "selected" : ""}>${escapeHtml(statusLabels.get(value) || value)}</option>`).join("")}</select></label>
            <strong id="animationdb-result-count"></strong>
          </section>
          <section id="animationdb-compare" class="animationdb-compare" aria-live="polite" hidden></section>
          <section id="animationdb-results" class="animationdb-grid" aria-label="선택한 애니메이션 결과"></section>
        </section>
      ` : selectedSubject ? '<div class="animationdb-tree-placeholder"><span>2</span><p>동작을 선택하면 애니메이션이 이 아래에 재생됩니다.</p></div>' : ""}
    `;
    root.querySelectorAll("[data-animation-gallery-subject]").forEach((button) => {
      button.addEventListener("click", () => {
        animationDbState.gallerySubjectId = button.dataset.animationGallerySubject;
        animationDbState.galleryAction = "";
        animationDbState.query = "";
        animationDbState.status = "all";
        animationDbState.compare = [];
        renderAnimationDbGallery();
      });
    });
    root.querySelector("[data-animation-gallery-back]")?.addEventListener("click", () => {
      animationDbState.gallerySubjectId = "";
      animationDbState.galleryAction = "";
      animationDbState.compare = [];
      renderAnimationDbGallery();
    });
    root.querySelectorAll("[data-animation-gallery-action]").forEach((button) => {
      button.addEventListener("click", () => {
        animationDbState.galleryAction = button.dataset.animationGalleryAction;
        animationDbState.query = "";
        animationDbState.status = "all";
        animationDbState.compare = [];
        renderAnimationDbGallery();
        document.querySelector(".animationdb-output")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
    if (selectedAction) {
      document.getElementById("animationdb-search")?.addEventListener("input", (event) => {
        animationDbState.query = event.target.value;
        renderAnimationDbResults();
      });
      document.getElementById("animationdb-status")?.addEventListener("change", (event) => {
        animationDbState.status = event.target.value;
        renderAnimationDbResults();
      });
      root.querySelector("[data-animation-selection-bake]")?.addEventListener("click", (event) => {
        void openAnimationDbBake({ record_id: event.currentTarget.dataset.animationSelectionBake });
      });
      renderAnimationDbResults();
    }
  }

  function renderAnimationDbCuration() {
    const root = document.getElementById("animationdb-tab-panel");
    if (!root) return;
    const subjects = animationDbTools.groupWorkspaceSubjects(animationDb.workspaces || []);
    const selectedSubject = subjects.find((subject) => subject.id === animationDbState.curationSubjectId) || null;
    root.innerHTML = `
      <section class="animationdb-tree-section" aria-labelledby="animationdb-curation-subject-heading">
        <header class="animationdb-tree-heading"><div><span class="page-eyebrow">1단계 · 주체</span><h2 id="animationdb-curation-subject-heading">큐레이션 주체</h2><p>프레임을 고르거나 순서를 조정할 플레이어·몬스터·효과를 선택합니다.</p></div><strong>${subjects.length}개 주체</strong></header>
        <div class="animationdb-subject-list">${renderAnimationSubjectCards(subjects, animationDbState.curationSubjectId, "curation")}</div>
      </section>
      ${selectedSubject ? '<section id="animationdb-workspaces" class="animationdb-workspaces animationdb-tree-branch" aria-label="선택한 주체의 애니메이션 큐레이션 작업공간"></section>' : '<div class="animationdb-tree-placeholder"><span>1</span><p>위에서 주체를 선택하면 큐레이션 열기 버튼이 나타납니다.</p></div>'}
    `;
    root.querySelectorAll("[data-animation-curation-subject]").forEach((button) => {
      button.addEventListener("click", () => {
        const nextSubjectId = button.dataset.animationCurationSubject;
        if (animationDbState.curationSubjectId !== nextSubjectId) {
          animationDbWorkspaceState.activeId = "";
          animationDbWorkspaceState.url = "";
          animationDbCurationNotice = "";
        }
        animationDbState.curationSubjectId = nextSubjectId;
        renderAnimationDbCuration();
      });
    });
    if (selectedSubject) renderAnimationDbWorkspaces();
  }

  function renderAnimationDbTab() {
    document.querySelectorAll("[data-animationdb-tab]").forEach((button) => {
      const selected = button.dataset.animationdbTab === animationDbState.tab;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-selected", String(selected));
      button.tabIndex = selected ? 0 : -1;
    });
    if (animationDbState.tab === "curation") renderAnimationDbCuration();
    else renderAnimationDbGallery();
  }

  function renderAnimationDb() {
    document.title = "AnimationDB · PackBound Wiki";
    renderNavigation("animation-db", "database");
    main.innerHTML = `
      <div class="animationdb-layout">
        <header class="animationdb-hero">
          <div class="page-eyebrow">Sprite curation registry</div>
          <div class="animationdb-hero-row">
            <div><h1>AnimationDB</h1><p>지금까지 제작한 캐릭터와 몬스터 모션을 GIF로 바로 재생하고, 방향·프레임·상태를 비교해 현재 적용본과 제작 후보를 빠르게 구분합니다.</p></div>
            <span><strong>${animationDb.count}</strong><small>${animationDb.character_count} CHARACTERS · ${animationDb.live_count} GAME ON</small></span>
          </div>
          <div class="animationdb-contract"><div><span>자동 수집 경로</span><code>${escapeHtml(animationDb.source)}</code></div><div><span>DB 리비전</span><code>${escapeHtml(animationDb.revision)}</code></div><div><span>큐레이션</span><strong>${animationDb.workspace_count || 0} WORKSPACES · GIF 비교</strong></div></div>
        </header>
        <nav class="animationdb-tabs" role="tablist" aria-label="애니메이션 데이터베이스 보기 방식">
          <button type="button" role="tab" data-animationdb-tab="gallery" aria-controls="animationdb-tab-panel">갤러리</button>
          <button type="button" role="tab" data-animationdb-tab="curation" aria-controls="animationdb-tab-panel">큐레이션</button>
        </nav>
        <div id="animationdb-tab-panel" class="animationdb-tab-panel" role="tabpanel"></div>
      </div>
    `;
    document.querySelectorAll("[data-animationdb-tab]").forEach((button) => {
      button.addEventListener("click", () => {
        animationDbState.tab = button.dataset.animationdbTab;
        renderAnimationDbTab();
      });
    });
    renderAnimationDbTab();
    document.body.classList.remove("menu-open");
    window.scrollTo(0, 0);
  }

  function fieldDbIdentifierLabel(value) {
    return String(value || "").replaceAll("_", " ");
  }

  function renderFieldDbAtlas(atlas, field) {
    return `
      <article class="fielddb-atlas-card">
        <header>
          <div><span>${escapeHtml(atlas.id)}</span><h3>${escapeHtml(atlas.label)}</h3></div>
          <strong>${atlas.slot_count}<small>OBJECTS</small></strong>
        </header>
        <button type="button" class="fielddb-atlas-image" data-image-viewer-src="${escapeHtml(atlas.image_url)}" data-image-viewer-alt="${escapeHtml(`${field.display_name} ${atlas.label} 아틀라스`)}" data-image-viewer-caption="${escapeHtml(`${field.display_name} · ${atlas.label} · 3×3 오브젝트 아틀라스`)}">
          <img src="${escapeHtml(atlas.image_url)}" alt="${escapeHtml(`${field.display_name} ${atlas.label}`)}" loading="lazy" decoding="async">
          <span aria-hidden="true">크게 보기</span>
        </button>
        <ol class="fielddb-slot-list">
          ${atlas.slots.map((slot) => `<li><span>${slot.index}</span><code>${escapeHtml(fieldDbIdentifierLabel(slot.label))}</code></li>`).join("")}
        </ol>
        <footer><span>ROBLOX</span><code>${escapeHtml(atlas.roblox_asset_id)}</code></footer>
      </article>
    `;
  }

  function renderFieldDbDetail(field) {
    const detail = document.getElementById("fielddb-detail");
    if (!detail) return;
    if (!field) {
      detail.innerHTML = '<div class="fielddb-empty">조건에 맞는 필드가 없습니다. 검색어나 필드 유형을 바꿔 주세요.</div>';
      detail.style.removeProperty("--field-accent");
      return;
    }
    detail.style.setProperty("--field-accent", field.accent_color);
    detail.innerHTML = `
      <header class="fielddb-detail-header">
        <div>
          <span>${escapeHtml(field.field_type_label)} · ${escapeHtml(field.status.toUpperCase())}</span>
          <h2>${escapeHtml(field.display_name)}</h2>
          <code>${escapeHtml(field.english_name)} · ${escapeHtml(field.id)}</code>
        </div>
        <p>${escapeHtml(field.player_experience)}</p>
      </header>
      <div class="fielddb-visual-grid">
        <figure class="fielddb-concept-figure">
          <button type="button" data-image-viewer-src="${escapeHtml(field.concept_url)}" data-image-viewer-alt="${escapeHtml(`${field.display_name} 콘셉트 아트`)}" data-image-viewer-caption="${escapeHtml(`${field.display_name} · 필드 콘셉트 아트`)}">
            <img src="${escapeHtml(field.concept_url)}" alt="${escapeHtml(`${field.display_name} 콘셉트 아트`)}" decoding="async">
          </button>
          <figcaption><strong>필드 콘셉트</strong><span>${escapeHtml(field.summary)}</span></figcaption>
        </figure>
        <figure class="fielddb-layout-figure">
          <button type="button" data-image-viewer-src="${escapeHtml(field.ground_texture.image_url)}" data-image-viewer-alt="${escapeHtml(`${field.display_name} 바닥 배치도`)}" data-image-viewer-caption="${escapeHtml(`${field.display_name} · 실제 바닥 레이아웃 텍스처`)}">
            <img src="${escapeHtml(field.ground_texture.image_url)}" alt="${escapeHtml(`${field.display_name} 바닥 배치도`)}" loading="lazy" decoding="async">
          </button>
          <figcaption><strong>바닥 레이아웃</strong><code>${escapeHtml(field.ground_texture.roblox_asset_id)}</code></figcaption>
        </figure>
      </div>
      <section class="fielddb-contract" aria-label="${escapeHtml(field.display_name)} 런타임 구성">
        <header><span>RUNTIME CONTRACT</span><h3>현재 게임 구성</h3></header>
        <dl>
          <div><dt>월드 모델</dt><dd><code>${escapeHtml(field.runtime_name)}</code></dd></div>
          <div><dt>테마</dt><dd><code>${escapeHtml(field.theme)}</code></dd></div>
          <div><dt>필드 크기</dt><dd>${escapeHtml(fieldDbTools.formatSize(field.size_studs))}</dd></div>
          <div><dt>월드 중심</dt><dd>${escapeHtml(fieldDbTools.formatCenter(field.center_studs))}</dd></div>
          <div><dt>표현 방식</dt><dd>고정형 2D 패널 스프라이트</dd></div>
          <div><dt>필드 연결</dt><dd>독립 필드 · 다리 연결 없음</dd></div>
        </dl>
      </section>
      <div class="fielddb-composition-grid">
        <section class="fielddb-feature-list">
          <header><span>PLAYER-FACING RULES</span><h3>구성 핵심</h3></header>
          <ol>${field.key_features.map((feature) => `<li><span aria-hidden="true"></span><p>${escapeHtml(feature)}</p></li>`).join("")}</ol>
        </section>
        <section class="fielddb-object-summary">
          <header><span>OBJECT KIT</span><h3>오브젝트 구성</h3></header>
          <div><strong>${field.object_group_count}</strong><span>아틀라스 그룹</span></div>
          <div><strong>${field.object_slot_count}</strong><span>등록 오브젝트</span></div>
          <div><strong>${field.background_layers.length}</strong><span>배경 뎁스</span></div>
          ${field.background_layers.length ? `<p>${field.background_layers.map((layer) => `<code>${escapeHtml(fieldDbIdentifierLabel(layer))}</code>`).join("")}</p>` : '<p><em>별도 패럴랙스 배경 없음</em></p>'}
        </section>
      </div>
      <section class="fielddb-atlas-section">
        <header><div><span>REGISTERED 2D PANELS</span><h3>필드 구성 오브젝트</h3></div><p>각 이미지는 게임에 등록된 3×3 아틀라스이며, 번호는 좌상단부터 행 우선 순서입니다.</p></header>
        <div class="fielddb-atlas-grid">${field.atlases.map((atlas) => renderFieldDbAtlas(atlas, field)).join("")}</div>
      </section>
    `;
  }

  function renderFieldDbBrowser() {
    const list = document.getElementById("fielddb-field-list");
    const count = document.getElementById("fielddb-result-count");
    if (!list || !count || !fieldDbTools) return;
    const fields = fieldDbTools.filterFields(fieldDb, fieldDbState.query, fieldDbState.fieldType);
    if (!fields.some((field) => field.id === fieldDbState.selectedId)) {
      fieldDbState.selectedId = fields[0]?.id || "";
    }
    const selected = fieldDbTools.findField(fieldDb, fieldDbState.selectedId);
    count.textContent = `${fields.length} / ${fieldDb.count}개 필드`;
    list.innerHTML = fields.length ? fields.map((field) => `
      <button type="button" class="fielddb-field-card ${field.id === fieldDbState.selectedId ? "active" : ""}" data-fielddb-field="${escapeHtml(field.id)}" style="--field-accent:${escapeHtml(field.accent_color)}">
        <img src="${escapeHtml(field.concept_url)}" alt="" loading="lazy" decoding="async">
        <span class="fielddb-card-copy"><small>${escapeHtml(field.field_type_label)}</small><strong>${escapeHtml(field.display_name)}</strong><code>${escapeHtml(field.id)}</code></span>
        <span class="fielddb-card-stat"><strong>${field.object_slot_count}</strong><small>OBJECTS</small></span>
      </button>
    `).join("") : '<div class="fielddb-list-empty">검색 결과 없음</div>';
    list.querySelectorAll("[data-fielddb-field]").forEach((button) => {
      button.addEventListener("click", () => {
        fieldDbState.selectedId = button.dataset.fielddbField;
        renderFieldDbBrowser();
      });
    });
    renderFieldDbDetail(selected);
  }

  function renderFieldDb() {
    document.title = "필드 데이터베이스 · PackBound Wiki";
    renderNavigation("field-db", "database");
    if (!fieldDb || !fieldDbTools) {
      main.innerHTML = '<div class="empty-state">필드 DB 데이터를 불러오지 못했습니다. <code>python3 tools/wiki.py build</code>를 실행하세요.</div>';
      return;
    }
    main.innerHTML = `
      <div class="fielddb-layout">
        <header class="fielddb-hero">
          <div class="page-eyebrow">World composition registry</div>
          <div class="fielddb-hero-row">
            <div><h1>필드 데이터베이스</h1><p>베이스·튜토리얼·전투 필드의 콘셉트, 바닥 레이아웃, 월드 위치, 경계, 2D 패널 오브젝트를 한 화면에서 비교합니다.</p></div>
            <span><strong>${fieldDb.count}</strong><small>${fieldDb.base_count} BASE · ${fieldDb.tutorial_count} TUTORIAL · ${fieldDb.combat_count} COMBAT</small></span>
          </div>
          <div class="fielddb-overview">
            <div><span>배치 계약</span><strong>${escapeHtml(fieldDb.connectivity_label)}</strong></div>
            <div><span>필드 간격</span><strong>${fieldDb.field_spacing_studs} STUD</strong></div>
            <div><span>표현 방식</span><strong>2D PANEL SPRITES</strong></div>
            <div><span>FieldBuilder</span><strong>VERSION ${fieldDb.field_builder_version}</strong></div>
          </div>
        </header>
        <section class="fielddb-toolbar" aria-label="필드 검색과 필터">
          <label><span>필드·오브젝트 검색</span><input id="fielddb-search" type="search" value="${escapeHtml(fieldDbState.query)}" placeholder="필드 이름, 테마, 오브젝트 ID…"></label>
          <label><span>필드 유형</span><select id="fielddb-type-filter"><option value="all">전체 필드</option><option value="base" ${fieldDbState.fieldType === "base" ? "selected" : ""}>베이스 필드</option><option value="tutorial" ${fieldDbState.fieldType === "tutorial" ? "selected" : ""}>튜토리얼 필드</option><option value="combat" ${fieldDbState.fieldType === "combat" ? "selected" : ""}>전투 필드</option></select></label>
          <strong id="fielddb-result-count"></strong>
        </section>
        <div class="fielddb-workspace">
          <aside id="fielddb-field-list" class="fielddb-field-list" aria-label="필드 목록"></aside>
          <section id="fielddb-detail" class="fielddb-detail" aria-live="polite"></section>
        </div>
        <footer class="fielddb-source"><span>DATA SOURCE</span><code>${escapeHtml(fieldDb.source)}</code><span>RUNTIME</span><code>${escapeHtml(fieldDb.runtime_source)}</code><strong>REV ${escapeHtml(fieldDb.revision)}</strong></footer>
      </div>
    `;
    document.getElementById("fielddb-search").addEventListener("input", (event) => {
      fieldDbState.query = event.target.value;
      renderFieldDbBrowser();
    });
    document.getElementById("fielddb-type-filter").addEventListener("change", (event) => {
      fieldDbState.fieldType = event.target.value;
      renderFieldDbBrowser();
    });
    renderFieldDbBrowser();
    document.body.classList.remove("menu-open");
    window.scrollTo(0, 0);
  }

  function renderStructuredDbCell(row, column) {
    const value = row[column.key] || "—";
    if (column.kind === "item") {
      const catalogItem = runeBoardCatalogItem(row.item_id);
      const image = catalogItem?.image_url || catalogItem?.image || "";
      return `<span class="structured-db-item">${image ? `<img src="${escapeHtml(image)}" alt="" loading="lazy" decoding="async">` : ""}<span><strong>${escapeHtml(value)}</strong><code>${escapeHtml(row.item_id || "")}</code></span></span>`;
    }
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
    if (databaseId === "rune-board-variants" && runeBoardDb?.explorer) {
      renderRuneBoardExplorer();
      return;
    }
    const structuredCatalog = {
      databases: [...(combatDb.databases || []), ...(runeBoardDb.databases || [])],
    };
    const database = combatDbTools.findDatabase(structuredCatalog, databaseId);
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
            <div><span>기획 원본</span><strong>${escapeHtml(database.source_title || combatDb.source_title)}</strong></div>
            <div><span>원본 버전</span><strong>v${String(database.source_version || combatDb.source_version).padStart(3, "0")}</strong></div>
            <div><span>원본 변경</span><strong>${escapeHtml(formatDate(database.source_updated_at || combatDb.source_updated_at, true))}</strong></div>
            <a href="${pageHref(database.source_page_id || combatDb.source_page_id)}">기획 문서 읽기 <span aria-hidden="true">→</span></a>
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

  function renderMasteryDb() {
    document.title = "캐릭터 마스터리 DB · PackBound Wiki";
    renderNavigation("mastery-db", "database");
    if (!masteryDbEditor) {
      main.innerHTML = '<div class="empty-state">마스터리 DB 데이터를 불러오지 못했습니다. <code>python3 tools/wiki.py build</code>를 실행하세요.</div>';
      return;
    }
    masteryDbEditor.setEditable(canEditMasteryDb);
    masteryDbEditor.render(main);
    document.body.classList.remove("menu-open");
  }

  function renderPage() {
    const route = readRoute();
    document.body.classList.toggle("animationdb-open", route.kind === "database" && route.slug === "animation-db");
    document.body.classList.toggle("wavedb-open", route.kind === "database" && route.slug === "wave-db");
    if (!(route.kind === "database" && route.slug === "item-db")) cleanupItemDbFloatingScroll();
    if (!(route.kind === "database" && route.slug === "item-db") && itemDbEditorState) closeItemDbEditor();
    if (!(route.kind === "database" && route.slug === "monster-db") && monsterDbEditorState) closeMonsterDbEditor();
    if (!(route.kind === "database" && route.slug === "monster-db") && monsterDbBakeState) closeMonsterDbBake();
    if (!(route.kind === "database" && route.slug === "wave-db") && waveDbBakeState) closeWaveDbBake();
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
      else if (route.slug === "monster-db") renderMonsterDb();
      else if (route.slug === "field-db") renderFieldDb();
      else if (route.slug === "wave-db") renderWaveDb();
      else if (route.slug === "animation-db") renderAnimationDb();
      else if (route.slug === "mastery-db") renderMasteryDb();
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
      closeWaveDbBake();
      closeRuneBoardBake();
      closeSearch();
      document.body.classList.remove("menu-open");
    }
  });
  window.addEventListener("hashchange", renderPage);

  if (!location.hash && defaultPage) location.replace(pageHref(defaultPage));
  else renderPage();
  void refreshMonsterDbApiAccess();
  void refreshWaveDbApiAccess();
  void refreshAnimationDbApiAccess();
  void refreshAnimationCurationApiAccess();
  void refreshMasteryDbApiAccess();
  void refreshRuneBoardDbApiAccess();
})();
