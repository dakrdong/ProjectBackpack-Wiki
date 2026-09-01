(() => {
  "use strict";

  const STATUS_META = Object.freeze({
    proven: Object.freeze({ label: "완료·검증", shortLabel: "완료" }),
    partial: Object.freeze({ label: "진행 중", shortLabel: "진행" }),
    planned_only: Object.freeze({ label: "계획만 있음", shortLabel: "계획" }),
    unknown: Object.freeze({ label: "근거 미확인", shortLabel: "미확인" }),
    blocked: Object.freeze({ label: "차단됨", shortLabel: "차단" }),
  });

  function normalizedQuery(value) {
    return String(value || "").trim().toLocaleLowerCase("ko-KR");
  }

  function nodeSearchText(node) {
    return [
      node.title,
      node.description,
      node.next_step,
      node.blocker,
      ...(node.evidence || []),
      ...(node.sources || []),
    ].filter(Boolean).join(" ").toLocaleLowerCase("ko-KR");
  }

  function cloneMatchingNode(node, query, status, ancestorQueryMatches = false) {
    const queryMatches = ancestorQueryMatches || !query || nodeSearchText(node).includes(query);
    const originalChildren = node.children || [];
    if (originalChildren.length) {
      const children = originalChildren
        .map((child) => cloneMatchingNode(child, query, status, queryMatches))
        .filter(Boolean);
      return children.length ? { ...node, children } : null;
    }
    const statusMatches = status === "all" || node.computed_status === status;
    return queryMatches && statusMatches ? { ...node, children: [] } : null;
  }

  function filterTree(categories, query = "", status = "all") {
    const normalized = normalizedQuery(query);
    return (categories || [])
      .map((category) => cloneMatchingNode(category, normalized, status))
      .filter(Boolean);
  }

  function flattenNodes(nodes) {
    const flattened = [];
    function visit(node) {
      flattened.push(node);
      (node.children || []).forEach(visit);
    }
    (nodes || []).forEach(visit);
    return flattened;
  }

  function flattenLeaves(nodes) {
    return flattenNodes(nodes).filter((node) => !(node.children || []).length);
  }

  function countVisibleLeaves(nodes) {
    return flattenLeaves(nodes).length;
  }

  function statusMeta(status) {
    return STATUS_META[status] || Object.freeze({ label: status || "미확인", shortLabel: status || "미확인" });
  }

  const tools = Object.freeze({
    STATUS_META,
    countVisibleLeaves,
    filterTree,
    flattenLeaves,
    flattenNodes,
    normalizedQuery,
    statusMeta,
  });

  if (typeof module !== "undefined" && module.exports) module.exports = tools;
  if (typeof window !== "undefined") window.PACKBOUND_ALPHA_PROGRESS_TOOLS = tools;
})();
