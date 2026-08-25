((root) => {
  "use strict";

  function normalized(value) {
    return String(value ?? "").trim().toLocaleLowerCase("ko-KR");
  }

  function filterAnimations(records, state = {}) {
    const query = normalized(state.query);
    return (records || []).filter((record) => {
      if (state.entityType && state.entityType !== "all" && record.entity_type !== state.entityType) return false;
      if (state.action && state.action !== "all" && record.action !== state.action) return false;
      if (state.status && state.status !== "all" && record.status !== state.status) return false;
      return !query || normalized(JSON.stringify(record)).includes(query);
    });
  }

  function filterOptions(records, key) {
    return [...new Set((records || []).map((record) => record[key]).filter(Boolean))]
      .sort((left, right) => String(left).localeCompare(String(right), "ko-KR"));
  }

  function findRecord(records, recordId) {
    return (records || []).find((record) => record.id === recordId) || null;
  }

  function selectedVariant(record, variantId) {
    return record?.variants?.find((variant) => variant.id === variantId) || record?.variants?.[0] || null;
  }

  const api = { filterAnimations, filterOptions, findRecord, selectedVariant };
  root.PACKBOUND_ANIMATION_DB_TOOLS = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
