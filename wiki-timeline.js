((root) => {
  "use strict";

  function normalizeOrder(value) {
    return value === "oldest" ? "oldest" : "newest";
  }

  function normalizeView(value) {
    return value === "newest" || value === "oldest" ? value : "category";
  }

  function timestamp(value) {
    const parsed = new Date(value).getTime();
    return Number.isNaN(parsed) ? 0 : parsed;
  }

  function compareEntries(left, right, order) {
    const direction = normalizeOrder(order) === "oldest" ? 1 : -1;
    const leftOrder = Number(left.revision.timeline_order);
    const rightOrder = Number(right.revision.timeline_order);
    if (Number.isFinite(leftOrder) && Number.isFinite(rightOrder)) {
      const orderDifference = leftOrder - rightOrder;
      if (orderDifference !== 0) return orderDifference * direction;
    }

    const timeDifference = timestamp(left.revision.updated_at) - timestamp(right.revision.updated_at);
    if (timeDifference !== 0) return timeDifference * direction;

    const pageDifference = String(left.page.id).localeCompare(String(right.page.id), "ko-KR");
    if (pageDifference !== 0) return pageDifference;

    return (Number(left.revision.version) - Number(right.revision.version)) * direction;
  }

  function sortRevisions(pages, order = "newest") {
    return (pages || [])
      .flatMap((page) => (page.revisions || []).map((revision) => ({ page, revision })))
      .sort((left, right) => compareEntries(left, right, order));
  }

  const api = { normalizeOrder, normalizeView, sortRevisions };
  root.PACKBOUND_WIKI_TIMELINE = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
