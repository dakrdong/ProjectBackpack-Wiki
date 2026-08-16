((root) => {
  "use strict";

  function normalize(value) {
    return String(value || "").trim().toLocaleLowerCase("ko-KR");
  }

  function filterItems(items, query = "", family = "all") {
    const normalizedQuery = normalize(query);
    return (items || []).filter((item) => {
      if (family !== "all" && item.family !== family) return false;
      if (!normalizedQuery) return true;
      const haystack = [
        item.id,
        item.name,
        item.family_label,
        item.type_size,
        item.concept,
        item.pattern,
        ...(item.stats || []),
        ...(item.synergies || []),
        ...(item.synergy_labels || []),
        ...(item.effect_search_terms || []),
        item.enabled ? "on active 활성" : "off inactive 비활성",
        ...Object.values(item.effects || {}).flatMap((effect) => [
          effect.type_id || "",
          ...(effect.condition_ids || []),
          ...(effect.ability_ids || []),
        ]),
      ].join(" ").toLocaleLowerCase("ko-KR");
      return haystack.includes(normalizedQuery);
    });
  }

  function groupByFamily(items, families) {
    return (families || [])
      .map((family) => ({
        ...family,
        items: (items || []).filter((item) => item.family === family.id),
      }))
      .filter((family) => family.items.length > 0);
  }

  function hexNeighbors(q, r) {
    return [
      [q + 1, r],
      [q, r + 1],
      [q - 1, r + 1],
      [q - 1, r],
      [q, r - 1],
      [q + 1, r - 1],
    ];
  }

  function normalizeRotation(value) {
    const numeric = Number(value);
    if (!Number.isFinite(numeric)) return Number.NaN;
    return ((numeric + 180) % 360 + 360) % 360 - 180;
  }

  function validateSynergies(synergies, availableIds = []) {
    const errors = [];
    if (!Array.isArray(synergies)) {
      errors.push("시너지 선택값을 읽을 수 없습니다.");
      return { valid: false, errors, synergies: [] };
    }
    if (synergies.length > 3) errors.push("시너지는 최대 3개까지 선택할 수 있습니다.");
    if (new Set(synergies).size !== synergies.length) errors.push("같은 시너지를 중복 선택할 수 없습니다.");
    const allowed = new Set(availableIds || []);
    if (synergies.some((synergy) => typeof synergy !== "string" || !allowed.has(synergy))) {
      errors.push("현재 시너지 카탈로그에 없는 값이 포함되어 있습니다.");
    }
    return {
      valid: errors.length === 0,
      errors: [...new Set(errors)],
      synergies: [...synergies],
    };
  }

  function validateStringIds(value, label, errors) {
    if (!Array.isArray(value)
      || value.some((entry) => typeof entry !== "string" || !entry.trim())
      || new Set(value).size !== value.length) {
      errors.push(`${label}에는 중복되지 않는 ID만 넣을 수 있습니다.`);
      return [];
    }
    return [...value];
  }

  function validateEffectZones(effects, footprint, padding = 5, catalog = null) {
    const errors = [];
    const slots = ["A", "B", "C"];
    const typeIds = new Set((catalog?.types || []).map((entry) => entry.id));
    const conditionCatalogIds = new Set((catalog?.conditions || []).map((entry) => entry.id));
    const abilityCatalogIds = new Set((catalog?.abilities || []).map((entry) => entry.id));
    const validatesCatalogIds = Boolean(catalog);
    const effectKeys = effects && typeof effects === "object" && !Array.isArray(effects)
      ? Object.keys(effects)
      : [];
    if (!effects || typeof effects !== "object" || Array.isArray(effects)
      || effectKeys.length !== slots.length || effectKeys.some((key) => !slots.includes(key))) {
      return { valid: false, errors: ["효과 영역은 A, B, C 세 슬롯을 모두 포함해야 합니다."], effects: {} };
    }
    const footprintCells = (footprint || []).map((cell) => (
      Array.isArray(cell) ? [cell[0], cell[1]] : [cell?.q, cell?.r]
    ));
    if (!footprintCells.length || footprintCells.some(([q, r]) => !Number.isInteger(q) || !Number.isInteger(r))) {
      return { valid: false, errors: ["효과 영역을 검사할 아이템 점유 칸이 올바르지 않습니다."], effects: {} };
    }
    const footprintKeys = new Set(footprintCells.map(([q, r]) => `${q},${r}`));
    const qs = footprintCells.map(([q]) => q);
    const rs = footprintCells.map(([, r]) => r);
    const bounds = {
      minQ: Math.min(...qs) - padding,
      maxQ: Math.max(...qs) + padding,
      minR: Math.min(...rs) - padding,
      maxR: Math.max(...rs) + padding,
    };
    const normalizedEffects = {};
    slots.forEach((slot) => {
      const effect = effects[slot];
      if (!effect || typeof effect !== "object" || Array.isArray(effect)) {
        errors.push(`효과 ${slot} 설정을 읽을 수 없습니다.`);
        return;
      }
      const typeId = effect.type_id;
      if (typeId !== null && (typeof typeId !== "string" || !typeId.trim())) {
        errors.push(`효과 ${slot} 종류 ID가 올바르지 않습니다.`);
      }
      const conditionIds = validateStringIds(effect.condition_ids, `효과 ${slot} 조건`, errors);
      const abilityIds = validateStringIds(effect.ability_ids, `효과 ${slot} 발현 능력`, errors);
      if (validatesCatalogIds && typeId !== null && !typeIds.has(typeId)) {
        errors.push(`효과 ${slot} 종류가 현재 카탈로그에 없습니다.`);
      }
      if (validatesCatalogIds && conditionIds.some((id) => !conditionCatalogIds.has(id))) {
        errors.push(`효과 ${slot} 조건에 현재 카탈로그에 없는 값이 있습니다.`);
      }
      if (validatesCatalogIds && abilityIds.some((id) => !abilityCatalogIds.has(id))) {
        errors.push(`효과 ${slot} 능력에 현재 카탈로그에 없는 값이 있습니다.`);
      }
      const cells = [];
      const seen = new Set();
      if (!Array.isArray(effect.cells)) {
        errors.push(`효과 ${slot} 칸을 읽을 수 없습니다.`);
      } else {
        effect.cells.forEach((cell) => {
          const q = Array.isArray(cell) ? cell[0] : cell?.q;
          const r = Array.isArray(cell) ? cell[1] : cell?.r;
          const key = `${q},${r}`;
          if (!Number.isInteger(q) || !Number.isInteger(r)) {
            errors.push(`효과 ${slot}에 잘못된 칸 좌표가 있습니다.`);
          } else if (q < bounds.minQ || q > bounds.maxQ || r < bounds.minR || r > bounds.maxR) {
            errors.push(`효과 ${slot} 칸은 아이템 바깥 상하좌우 5줄 범위 안에 있어야 합니다.`);
          } else if (footprintKeys.has(key)) {
            errors.push(`효과 ${slot} 칸은 아이템 점유 칸과 겹칠 수 없습니다.`);
          } else if (seen.has(key)) {
            errors.push(`효과 ${slot} 칸이 중복되었습니다.`);
          } else {
            seen.add(key);
            cells.push([q, r]);
          }
        });
      }
      if (cells.length && (!typeId || !abilityIds.length)) {
        errors.push(`효과 ${slot} 칸을 사용하려면 종류와 한 개 이상의 능력을 선택해야 합니다.`);
      }
      if (!cells.length && (typeId !== null || conditionIds.length || abilityIds.length)) {
        errors.push(`효과 ${slot} 칸이 비어 있으면 종류·조건·능력도 비워야 합니다.`);
      }
      normalizedEffects[slot] = {
        cells: cells.sort((left, right) => left[1] - right[1] || left[0] - right[0]),
        type_id: typeId ?? null,
        condition_ids: conditionIds,
        ability_ids: abilityIds,
      };
    });
    return {
      valid: errors.length === 0,
      errors: [...new Set(errors)],
      effects: normalizedEffects,
      bounds,
    };
  }

  function validateLayout(cells, scale, rotationDegrees = 0, maxSpan = 5) {
    const errors = [];
    const normalized = [];
    const seen = new Set();
    if (!Array.isArray(cells) || cells.length === 0) {
      errors.push("점유 칸을 한 칸 이상 선택해 주세요.");
    } else {
      cells.forEach((cell) => {
        const q = Array.isArray(cell) ? cell[0] : cell?.q;
        const r = Array.isArray(cell) ? cell[1] : cell?.r;
        const editorRadius = Math.floor(maxSpan / 2);
        if (!Number.isInteger(q) || !Number.isInteger(r)
          || Math.max(Math.abs(q), Math.abs(r), Math.abs(-q - r)) > editorRadius) {
          errors.push("점유 칸 좌표가 편집 범위를 벗어났습니다.");
          return;
        }
        const key = `${q},${r}`;
        if (seen.has(key)) {
          errors.push("점유 칸이 중복되었습니다.");
          return;
        }
        seen.add(key);
        normalized.push([q, r]);
      });
    }

    let bounds = null;
    if (normalized.length) {
      const qs = normalized.map((cell) => cell[0]);
      const rs = normalized.map((cell) => cell[1]);
      const ss = normalized.map(([q, r]) => -q - r);
      bounds = {
        minQ: Math.min(...qs),
        minR: Math.min(...rs),
        maxQ: Math.max(...qs),
        maxR: Math.max(...rs),
        qSpan: Math.max(...qs) - Math.min(...qs) + 1,
        rSpan: Math.max(...rs) - Math.min(...rs) + 1,
        sSpan: Math.max(...ss) - Math.min(...ss) + 1,
      };
      if (Math.max(bounds.qSpan, bounds.rSpan, bounds.sSpan) > maxSpan) {
        errors.push(`아이템 점유 범위는 Q·R·S 각 축에서 ${maxSpan}칸을 초과할 수 없습니다.`);
      }

      const visited = new Set([`${normalized[0][0]},${normalized[0][1]}`]);
      const queue = [normalized[0]];
      while (queue.length) {
        const [x, y] = queue.shift();
        hexNeighbors(x, y).forEach(([neighborX, neighborY]) => {
          const key = `${neighborX},${neighborY}`;
          if (seen.has(key) && !visited.has(key)) {
            visited.add(key);
            queue.push([neighborX, neighborY]);
          }
        });
      }
      if (visited.size !== normalized.length) {
        errors.push("점유 칸은 육각형의 여섯 변 중 하나를 맞대어 모두 연결되어야 합니다.");
      }
    }

    const numericScale = Number(scale);
    if (!Number.isFinite(numericScale) || numericScale < 0.1 || numericScale > 4) {
      errors.push("이미지 배율은 0.1에서 4 사이여야 합니다.");
    }
    const rotation = normalizeRotation(rotationDegrees);
    if (!Number.isFinite(rotation)) errors.push("이미지 회전각은 숫자여야 합니다.");
    return {
      valid: errors.length === 0,
      errors: [...new Set(errors)],
      cells: normalized.sort((left, right) => left[1] - right[1] || left[0] - right[0]),
      bounds,
      scale: numericScale,
      rotation,
    };
  }

  const api = {
    filterItems,
    groupByFamily,
    hexNeighbors,
    normalize,
    normalizeRotation,
    validateLayout,
    validateEffectZones,
    validateSynergies,
  };
  root.PACKBOUND_ITEM_DB_TOOLS = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
