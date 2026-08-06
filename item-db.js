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

  function validateLayout(cells, scale, maxSpan = 5) {
    const errors = [];
    const normalized = [];
    const seen = new Set();
    if (!Array.isArray(cells) || cells.length === 0) {
      errors.push("점유 칸을 한 칸 이상 선택해 주세요.");
    } else {
      cells.forEach((cell) => {
        const x = Array.isArray(cell) ? cell[0] : cell?.x;
        const y = Array.isArray(cell) ? cell[1] : cell?.y;
        if (!Number.isInteger(x) || !Number.isInteger(y) || x < 0 || y < 0 || x >= maxSpan || y >= maxSpan) {
          errors.push("점유 칸 좌표가 편집 범위를 벗어났습니다.");
          return;
        }
        const key = `${x},${y}`;
        if (seen.has(key)) {
          errors.push("점유 칸이 중복되었습니다.");
          return;
        }
        seen.add(key);
        normalized.push([x, y]);
      });
    }

    let bounds = null;
    if (normalized.length) {
      const xs = normalized.map((cell) => cell[0]);
      const ys = normalized.map((cell) => cell[1]);
      const minX = Math.min(...xs);
      const minY = Math.min(...ys);
      const maxX = Math.max(...xs);
      const maxY = Math.max(...ys);
      bounds = { minX, minY, maxX, maxY, width: maxX - minX + 1, height: maxY - minY + 1 };
      if (bounds.width > maxSpan || bounds.height > maxSpan) {
        errors.push(`아이템 점유 범위는 가로·세로 ${maxSpan}칸을 초과할 수 없습니다.`);
      }

      const visited = new Set([`${normalized[0][0]},${normalized[0][1]}`]);
      const queue = [normalized[0]];
      while (queue.length) {
        const [x, y] = queue.shift();
        [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]].forEach(([neighborX, neighborY]) => {
          const key = `${neighborX},${neighborY}`;
          if (seen.has(key) && !visited.has(key)) {
            visited.add(key);
            queue.push([neighborX, neighborY]);
          }
        });
      }
      if (visited.size !== normalized.length) {
        errors.push("점유 칸은 대각선이 아닌 상하좌우로 모두 연결되어야 합니다.");
      }
    }

    const numericScale = Number(scale);
    if (!Number.isFinite(numericScale) || numericScale < 0.1 || numericScale > 4) {
      errors.push("이미지 배율은 0.1에서 4 사이여야 합니다.");
    }
    return {
      valid: errors.length === 0,
      errors: [...new Set(errors)],
      cells: normalized.sort((left, right) => left[1] - right[1] || left[0] - right[0]),
      bounds,
      scale: numericScale,
    };
  }

  const api = { filterItems, groupByFamily, normalize, validateLayout };
  root.PACKBOUND_ITEM_DB_TOOLS = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
