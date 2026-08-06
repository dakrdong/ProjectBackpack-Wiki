((root) => {
  "use strict";

  function normalize(value) {
    return String(value || "").trim().toLocaleLowerCase("ko-KR");
  }

  function filterRows(database, query = "", filters = {}) {
    const normalizedQuery = normalize(query);
    return (database?.rows || []).filter((row) => {
      if (Object.entries(filters).some(([key, value]) => value && value !== "all" && row[key] !== value)) {
        return false;
      }
      if (!normalizedQuery) return true;
      return Object.values(row).join(" ").toLocaleLowerCase("ko-KR").includes(normalizedQuery);
    });
  }

  function filterOptions(database, key) {
    const values = [];
    const seen = new Set();
    (database?.rows || []).forEach((row) => {
      const value = row[key];
      if (!value || value === "—" || seen.has(value)) return;
      seen.add(value);
      values.push(value);
    });
    if (key === "priority") {
      values.sort((left, right) => left.localeCompare(right, "ko-KR", { numeric: true }));
    }
    return values;
  }

  function findDatabase(catalog, databaseId) {
    return (catalog?.databases || []).find((database) => database.id === databaseId) || null;
  }

  const api = { filterOptions, filterRows, findDatabase, normalize };
  root.PACKBOUND_COMBAT_DB_TOOLS = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
