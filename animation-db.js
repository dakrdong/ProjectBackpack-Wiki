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

  function findWorkspace(workspaces, workspaceId) {
    return (workspaces || []).find((workspace) => workspace.id === workspaceId) || null;
  }

  function selectedVariant(record, variantId) {
    return record?.variants?.find((variant) => variant.id === variantId) || record?.variants?.[0] || null;
  }

  function subjectKey(entry) {
    if (!entry?.entity_type || !entry?.character) return "";
    return `${entry.entity_type}:${entry.character}`;
  }

  function representativeUrl(entry) {
    if (entry?.representative_url) return entry.representative_url;
    if (entry?.preview_url) return entry.preview_url;
    const variant = selectedVariant(entry);
    return variant?.preview_url || variant?.contact_sheet_url || "";
  }

  function subjectSort(left, right) {
    const rank = { player: 0, monster: 1, effect: 2 };
    return (rank[left.entity_type] ?? 9) - (rank[right.entity_type] ?? 9)
      || String(left.label).localeCompare(String(right.label), "ko-KR");
  }

  function groupAnimationSubjects(records) {
    const groups = new Map();
    for (const record of records || []) {
      const id = subjectKey(record);
      if (!id) continue;
      if (!groups.has(id)) {
        groups.set(id, {
          id,
          entity_type: record.entity_type,
          character: record.character,
          label: record.character_label || record.character,
          representative_url: representativeUrl(record),
          records: [],
          actions: [],
        });
      }
      const subject = groups.get(id);
      subject.records.push(record);
      if (!subject.representative_url) subject.representative_url = representativeUrl(record);
      let action = subject.actions.find((entry) => entry.id === record.action);
      if (!action) {
        action = {
          id: record.action,
          label: record.action_label || record.action,
          representative_url: representativeUrl(record),
          records: [],
        };
        subject.actions.push(action);
      }
      action.records.push(record);
      if (!action.representative_url) action.representative_url = representativeUrl(record);
    }
    return [...groups.values()]
      .map((subject) => ({
        ...subject,
        actions: subject.actions.sort((left, right) => String(left.label).localeCompare(String(right.label), "ko-KR")),
      }))
      .sort(subjectSort);
  }

  function groupWorkspaceSubjects(workspaces) {
    const groups = new Map();
    for (const workspace of workspaces || []) {
      const id = subjectKey(workspace);
      if (!id) continue;
      if (!groups.has(id)) {
        groups.set(id, {
          id,
          entity_type: workspace.entity_type,
          character: workspace.character,
          label: workspace.character_label || workspace.title || workspace.character,
          representative_url: representativeUrl(workspace),
          workspaces: [],
        });
      }
      const subject = groups.get(id);
      subject.workspaces.push(workspace);
      if (!subject.representative_url) subject.representative_url = representativeUrl(workspace);
    }
    return [...groups.values()].sort(subjectSort);
  }

  const api = {
    filterAnimations,
    filterOptions,
    findRecord,
    findWorkspace,
    selectedVariant,
    subjectKey,
    groupAnimationSubjects,
    groupWorkspaceSubjects,
  };
  root.PACKBOUND_ANIMATION_DB_TOOLS = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
