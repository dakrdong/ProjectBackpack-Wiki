((root) => {
  "use strict";

  const themes = [
    {
      id: "development",
      label: "개발",
      description: "구현, 구조, 도구와 자동화",
      keywords: ["development", "architecture", "system", "tooling", "automation", "mcp", "roblox", "server", "client", "code", "api", "mobile", "validation", "navigation"],
      categories: ["architecture", "system", "tooling"],
    },
    {
      id: "planning",
      label: "기획",
      description: "프로젝트, 게임플레이와 설계",
      keywords: ["project", "design", "gameplay", "combat", "balance", "item", "backpack", "quest", "roadmap", "planning"],
      categories: ["project", "design", "gameplay"],
    },
    {
      id: "rules",
      label: "규칙",
      description: "정책, 작업 흐름과 기록 원칙",
      keywords: ["rule", "policy", "workflow", "history", "version", "documentation", "wiki", "convention", "standard"],
      categories: ["rules", "policy"],
    },
    {
      id: "art",
      label: "아트",
      description: "캐릭터, 이미지와 시각 표현",
      keywords: ["art", "asset", "sprite", "render", "visual", "image", "animation", "character", "model", "texture", "audio", "ui", "ux", "2d", "3d"],
      categories: ["art", "visual"],
    },
    {
      id: "other",
      label: "기타",
      description: "아직 별도 테마가 정해지지 않은 태그",
      keywords: [],
      categories: [],
    },
  ];

  function timeValue(value) {
    const parsed = new Date(value).getTime();
    return Number.isNaN(parsed) ? 0 : parsed;
  }

  function laterTimestamp(left, right) {
    return timeValue(right) > timeValue(left) ? right : left;
  }

  function dateKey(value) {
    const match = String(value || "").match(/^(\d{4}-\d{2}-\d{2})/);
    return match ? match[1] : "";
  }

  function isDateInRange(value, range = {}) {
    const key = dateKey(value);
    const from = dateKey(range.from);
    const to = dateKey(range.to);
    if (!key) return false;
    return (!from || key >= from) && (!to || key <= to);
  }

  function pageHasActivityInRange(page, range = {}) {
    const from = dateKey(range.from);
    const to = dateKey(range.to);
    if (!from && !to) return true;
    const activityDates = [
      page?.created_at,
      page?.updated_at,
      ...(page?.revisions || []).map((revision) => revision.updated_at),
    ];
    return activityDates.some((value) => isDateInRange(value, { from, to }));
  }

  function filterPagesByDate(pages, range = {}) {
    return (pages || []).filter((page) => pageHasActivityInRange(page, range));
  }

  function normalizedTags(revision) {
    return [...new Set((revision?.tags || []).map((tag) => String(tag).trim()).filter(Boolean))];
  }

  function themeForTag(entry) {
    const name = entry.name.toLocaleLowerCase("ko-KR");
    for (const theme of themes.slice(0, -1)) {
      if (theme.keywords.some((keyword) => name === keyword || name.includes(keyword))) return theme;
    }

    const categories = new Set(entry.pages.map((match) => String(match.page.category || "").toLocaleLowerCase("ko-KR")));
    for (const theme of themes.slice(0, -1)) {
      if (theme.categories.some((category) => categories.has(category))) return theme;
    }
    return themes[themes.length - 1];
  }

  function buildTagIndex(pages) {
    const entries = new Map();

    for (const page of pages || []) {
      const revisions = [...(page.revisions?.length ? page.revisions : [page])]
        .sort((left, right) => Number(left.version || 0) - Number(right.version || 0));
      const matches = new Map();
      let previousTags = new Set();

      for (const revision of revisions) {
        const currentTags = new Set(normalizedTags(revision));
        for (const tag of currentTags) {
          const key = tag.toLocaleLowerCase("ko-KR");
          if (!entries.has(key)) {
            entries.set(key, {
              name: tag,
              normalized: key,
              introducedAt: revision.updated_at,
              lastUsedAt: revision.updated_at,
              pages: [],
            });
          }
          const entry = entries.get(key);
          entry.lastUsedAt = laterTimestamp(entry.lastUsedAt, revision.updated_at);

          if (!matches.has(key)) {
            matches.set(key, {
              page,
              firstTaggedAt: revision.updated_at,
              latestTaggedAt: revision.updated_at,
              latestTaggedRevision: revision,
              isCurrent: false,
            });
          }
          const match = matches.get(key);
          match.latestTaggedRevision = revision;
          match.latestTaggedAt = revision.updated_at;

          if (!previousTags.has(tag)) {
            entry.introducedAt = laterTimestamp(entry.introducedAt, revision.updated_at);
          }
        }
        previousTags = currentTags;
      }

      const currentTags = new Set(normalizedTags(page).map((tag) => tag.toLocaleLowerCase("ko-KR")));
      for (const [key, match] of matches) {
        match.isCurrent = currentTags.has(key);
        entries.get(key).pages.push(match);
      }
    }

    return [...entries.values()].map((entry) => {
      entry.count = entry.pages.length;
      entry.latestDocumentAt = entry.pages.reduce(
        (latest, match) => laterTimestamp(latest, match.page.created_at),
        null,
      );
      entry.theme = themeForTag(entry);
      return entry;
    });
  }

  function sortTags(entries, mode = "recent") {
    const sorted = [...entries];
    const byName = (left, right) => left.name.localeCompare(right.name, "ko-KR");
    if (mode === "popular") {
      return sorted.sort((left, right) => right.count - left.count || timeValue(right.introducedAt) - timeValue(left.introducedAt) || byName(left, right));
    }
    if (mode === "theme") {
      const order = new Map(themes.map((theme, index) => [theme.id, index]));
      return sorted.sort((left, right) => order.get(left.theme.id) - order.get(right.theme.id) || right.count - left.count || byName(left, right));
    }
    return sorted.sort((left, right) => timeValue(right.latestDocumentAt) - timeValue(left.latestDocumentAt) || timeValue(right.introducedAt) - timeValue(left.introducedAt) || right.count - left.count || byName(left, right));
  }

  function groupTagsByTheme(entries) {
    return themes
      .map((theme) => ({ theme, tags: sortTags(entries.filter((entry) => entry.theme.id === theme.id), "popular") }))
      .filter((group) => group.tags.length > 0);
  }

  function plainTextExcerpt(markdown, limit = 190) {
    const text = String(markdown || "")
      .replace(/```[\s\S]*?```/g, " ")
      .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/^#{1,6}\s+/gm, "")
      .replace(/^\s*(?:[-*+] |\d+\. |>\s?)/gm, "")
      .replace(/[`*_~|]/g, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (text.length <= limit) return text;
    return `${text.slice(0, Math.max(0, limit - 1)).trimEnd()}…`;
  }

  const api = { themes, filterPagesByDate, buildTagIndex, sortTags, groupTagsByTheme, plainTextExcerpt };
  root.PACKBOUND_TAG_EXPLORER = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
