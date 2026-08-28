((root) => {
  "use strict";

  function normalize(value) {
    return String(value || "").trim().toLocaleLowerCase("ko-KR");
  }

  function searchableText(field) {
    return [
      field?.id,
      field?.display_name,
      field?.english_name,
      field?.field_type_label,
      field?.runtime_name,
      field?.theme,
      field?.summary,
      field?.player_experience,
      ...(field?.key_features || []),
      ...(field?.background_layers || []),
      ...(field?.atlases || []).flatMap((atlas) => [
        atlas.id,
        atlas.label,
        ...(atlas.slots || []).flatMap((slot) => [slot.id, slot.label]),
      ]),
    ].join(" ").toLocaleLowerCase("ko-KR");
  }

  function filterFields(catalog, query = "", fieldType = "all") {
    const normalizedQuery = normalize(query);
    return (catalog?.fields || []).filter((field) => {
      if (fieldType !== "all" && field.field_type !== fieldType) return false;
      return !normalizedQuery || searchableText(field).includes(normalizedQuery);
    });
  }

  function findField(catalog, fieldId) {
    return (catalog?.fields || []).find((field) => field.id === fieldId) || null;
  }

  function formatCenter(center) {
    if (!Array.isArray(center) || center.length !== 3) return "—";
    return `X ${center[0]} · Y ${center[1]} · Z ${center[2]}`;
  }

  function formatSize(size) {
    if (!Array.isArray(size) || size.length !== 2) return "—";
    return `${size[0]} × ${size[1]} stud`;
  }

  const api = { filterFields, findField, formatCenter, formatSize, normalize, searchableText };
  root.PACKBOUND_FIELD_DB_TOOLS = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
