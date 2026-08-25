((root) => {
  "use strict";

  function getPath(value, path) {
    return String(path).split(".").reduce((current, key) => current?.[key], value);
  }

  function setPath(value, path, next) {
    const keys = String(path).split(".");
    let current = value;
    keys.slice(0, -1).forEach((key) => {
      if (!current[key] || typeof current[key] !== "object" || Array.isArray(current[key])) current[key] = {};
      current = current[key];
    });
    current[keys[keys.length - 1]] = next;
    return value;
  }

  function editableMonster(monster) {
    const copy = JSON.parse(JSON.stringify(monster));
    delete copy.concept_art_url;
    return copy;
  }

  function serializeField(spec, value) {
    if (spec.kind === "string-list") return (value || []).join(", ");
    if (spec.kind === "vector3-list") return (value || []).map((position) => position.join(", ")).join("\n");
    return String(value ?? "");
  }

  function parseNumber(spec, raw) {
    const parsed = Number(raw);
    if (!Number.isFinite(parsed)) throw new Error(`${spec.label}: 숫자를 입력해 주세요.`);
    if (spec.kind === "integer" && !Number.isInteger(parsed)) throw new Error(`${spec.label}: 정수를 입력해 주세요.`);
    if (spec.minimum != null && parsed < spec.minimum) throw new Error(`${spec.label}: ${spec.minimum} 이상이어야 합니다.`);
    if (spec.maximum != null && parsed > spec.maximum) throw new Error(`${spec.label}: ${spec.maximum} 이하여야 합니다.`);
    return parsed;
  }

  function parseField(spec, raw, checked = false) {
    if (spec.kind === "boolean") return Boolean(checked);
    if (spec.kind === "number" || spec.kind === "integer") return parseNumber(spec, raw);
    if (spec.kind === "string-list") {
      const values = String(raw).split(",").map((entry) => entry.trim()).filter(Boolean);
      if (new Set(values).size !== values.length) throw new Error(`${spec.label}: 중복 태그를 제거해 주세요.`);
      return values;
    }
    if (spec.kind === "vector3-list") {
      const lines = String(raw).split(/\n+/).map((line) => line.trim()).filter(Boolean);
      if (!lines.length) throw new Error(`${spec.label}: 좌표를 한 개 이상 입력해 주세요.`);
      return lines.map((line, index) => {
        const values = line.split(",").map((entry) => Number(entry.trim()));
        if (values.length !== 3 || values.some((value) => !Number.isFinite(value))) {
          throw new Error(`${spec.label} ${index + 1}행: X, Y, Z 숫자 세 개가 필요합니다.`);
        }
        return values;
      });
    }
    const value = String(raw).trim();
    if (!value) throw new Error(`${spec.label}: 값을 입력해 주세요.`);
    if (spec.kind === "asset-id" && !/^rbxassetid:\/\/\d+$/.test(value)) {
      throw new Error(`${spec.label}: rbxassetid://숫자 형식이어야 합니다.`);
    }
    if (spec.kind === "color" && !/^#[0-9a-f]{6}$/i.test(value)) {
      throw new Error(`${spec.label}: #RRGGBB 색상 형식이어야 합니다.`);
    }
    if (spec.options?.length && !spec.options.includes(value)) throw new Error(`${spec.label}: 지원하지 않는 선택입니다.`);
    return spec.kind === "color" ? value.toUpperCase() : value;
  }

  function filterMonsters(monsters, query = "") {
    const normalized = String(query).trim().toLocaleLowerCase("ko-KR");
    if (!normalized) return monsters || [];
    return (monsters || []).filter((monster) => JSON.stringify(monster).toLocaleLowerCase("ko-KR").includes(normalized));
  }

  const api = { editableMonster, filterMonsters, getPath, parseField, serializeField, setPath };
  root.PACKBOUND_MONSTER_DB_TOOLS = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
