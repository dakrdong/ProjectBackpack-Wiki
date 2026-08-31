((root) => {
  "use strict";

  function deepClone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function nextId(prefix, entries, width = 2) {
    const used = new Set((entries || []).map((entry) => entry.id));
    let number = 1;
    while (used.has(`${prefix}_${String(number).padStart(width, "0")}`)) number += 1;
    return `${prefix}_${String(number).padStart(width, "0")}`;
  }

  function totalWaves(stages) {
    return (stages || []).reduce((total, stage) => total + (stage.waves || []).length, 0);
  }

  function totalLayers(stages) {
    return (stages || []).reduce(
      (total, stage) => total + (stage.waves || []).reduce(
        (waveTotal, wave) => waveTotal + (wave.layers || []).length,
        0,
      ),
      0,
    );
  }

  function totalSpawns(stages) {
    return (stages || []).reduce(
      (total, stage) => total + (stage.waves || []).reduce(
        (waveTotal, wave) => waveTotal + (wave.layers || []).reduce(
          (layerTotal, layer) => layerTotal + (layer.placements || []).length,
          0,
        ),
        0,
      ),
      0,
    );
  }

  function monsterById(monsters, monsterId) {
    return (monsters || []).find((monster) => monster.id === monsterId) || null;
  }

  function hasBoss(wave, monsters) {
    return Boolean((wave?.layers || []).some((layer) => (
      (layer.placements || []).some((placement) => (
        monsterById(monsters, placement.monster_id)?.identity?.tier === "Boss"
      ))
    )));
  }

  function formatTime(totalSeconds) {
    const safe = Math.max(0, Math.min(3599, Math.trunc(Number(totalSeconds) || 0)));
    return `${String(Math.floor(safe / 60)).padStart(2, "0")}:${String(safe % 60).padStart(2, "0")}`;
  }

  function timeParts(totalSeconds) {
    const safe = Math.max(0, Math.min(3599, Math.trunc(Number(totalSeconds) || 0)));
    return { minutes: Math.floor(safe / 60), seconds: safe % 60 };
  }

  function parseTime(minutes, seconds) {
    const resolvedMinutes = Number(minutes);
    const resolvedSeconds = Number(seconds);
    if (!Number.isInteger(resolvedMinutes) || resolvedMinutes < 0 || resolvedMinutes > 59) {
      throw new Error("분은 0부터 59 사이의 정수여야 합니다.");
    }
    if (!Number.isInteger(resolvedSeconds) || resolvedSeconds < 0 || resolvedSeconds > 59) {
      throw new Error("초는 0부터 59 사이의 정수여야 합니다.");
    }
    return resolvedMinutes * 60 + resolvedSeconds;
  }

  function sortedLayers(layers) {
    return [...(layers || [])].sort((left, right) => left.at_seconds - right.at_seconds || left.id.localeCompare(right.id));
  }

  function cellKey(cellOrColumn, row = null) {
    if (Array.isArray(cellOrColumn)) return `${cellOrColumn[0]},${cellOrColumn[1]}`;
    return `${cellOrColumn},${row}`;
  }

  function gridColumns(field) {
    return field.grid.columns * (field.grid.subdivision || 1);
  }

  function gridRows(field) {
    return field.grid.rows * (field.grid.subdivision || 1);
  }

  function blockedCellSet(field) {
    const blocked = new Set();
    const subdivision = field?.grid?.subdivision || 1;
    (field?.grid?.blocked_cells || []).forEach(([baseColumn, baseRow]) => {
      for (let rowOffset = 0; rowOffset < subdivision; rowOffset += 1) {
        for (let columnOffset = 0; columnOffset < subdivision; columnOffset += 1) {
          blocked.add(cellKey(baseColumn * subdivision + columnOffset, baseRow * subdivision + rowOffset));
        }
      }
    });
    return blocked;
  }

  function placementAt(layer, column, row) {
    return (layer?.placements || []).find((placement) => (
      placement.cell?.[0] === column && placement.cell?.[1] === row
    )) || null;
  }

  function worldPosition(field, column, row) {
    const grid = field.grid;
    const cellSize = grid.cell_size / (grid.subdivision || 1);
    return [
      grid.origin_x + (column + 0.5) * cellSize,
      grid.ground_y,
      grid.origin_z + (row + 0.5) * cellSize,
    ];
  }

  function newPlacement(placements, monsterId, column, row) {
    return {
      id: nextId("placement", placements, 3),
      monster_id: monsterId,
      cell: [column, row],
    };
  }

  function createPlacementHistory(limit = 100) {
    if (!Number.isInteger(limit) || limit < 1 || limit > 1000) {
      throw new Error("배치 기록 한도는 1부터 1000 사이의 정수여야 합니다.");
    }
    return { limit, past: [], future: [] };
  }

  function resetPlacementHistory(history) {
    history.past.length = 0;
    history.future.length = 0;
  }

  function recordPlacementChange(history, change) {
    const requiredIds = ["stage_id", "wave_id", "layer_id"];
    if (!history || !Array.isArray(history.past) || !Array.isArray(history.future)) {
      throw new Error("배치 기록 상태가 올바르지 않습니다.");
    }
    if (requiredIds.some((field) => typeof change?.[field] !== "string" || !change[field])) {
      throw new Error("배치 기록에는 스테이지·웨이브·시간 레이어 ID가 필요합니다.");
    }
    if (!Array.isArray(change.before) || !Array.isArray(change.after)) {
      throw new Error("배치 기록의 이전·이후 목록이 올바르지 않습니다.");
    }
    if (JSON.stringify(change.before) === JSON.stringify(change.after)) return false;
    history.past.push({
      stage_id: change.stage_id,
      wave_id: change.wave_id,
      layer_id: change.layer_id,
      label: typeof change.label === "string" && change.label ? change.label : "몬스터 배치 변경",
      before: deepClone(change.before),
      after: deepClone(change.after),
    });
    while (history.past.length > history.limit) history.past.shift();
    history.future.length = 0;
    return true;
  }

  function placementLayer(document, change) {
    const stage = (document?.stages || []).find((entry) => entry.id === change.stage_id);
    const wave = (stage?.waves || []).find((entry) => entry.id === change.wave_id);
    return (wave?.layers || []).find((entry) => entry.id === change.layer_id) || null;
  }

  function applyPlacementHistoryEntry(document, change, field) {
    const layer = placementLayer(document, change);
    if (!layer) {
      throw new Error("되돌릴 배치의 스테이지·웨이브·시간 레이어를 찾을 수 없습니다.");
    }
    layer.placements = deepClone(change[field]);
  }

  function undoPlacementChange(history, document) {
    const change = history?.past?.pop();
    if (!change) return null;
    try {
      applyPlacementHistoryEntry(document, change, "before");
    } catch (error) {
      history.past.push(change);
      throw error;
    }
    history.future.push(change);
    return deepClone(change);
  }

  function redoPlacementChange(history, document) {
    const change = history?.future?.pop();
    if (!change) return null;
    try {
      applyPlacementHistoryEntry(document, change, "after");
    } catch (error) {
      history.future.push(change);
      throw error;
    }
    history.past.push(change);
    return deepClone(change);
  }

  function newLayer(layers, atSeconds = 0) {
    return {
      id: nextId("layer", layers, 3),
      at_seconds: atSeconds,
      placements: [],
    };
  }

  function newWave(waves) {
    const id = nextId("wave", waves);
    return {
      id,
      display_name: `웨이브 ${(waves || []).length + 1}`,
      start_delay_seconds: (waves || []).length ? 2 : 1,
      field_phase_id: null,
      layers: [newLayer([], 0)],
    };
  }

  function newStage(stages, fieldId) {
    const id = nextId("stage", stages);
    return {
      id,
      display_name: `스테이지 ${(stages || []).length + 1}`,
      enabled: true,
      description: "",
      field_id: fieldId,
      waves: [newWave([])],
    };
  }

  const api = {
    blockedCellSet,
    cellKey,
    createPlacementHistory,
    deepClone,
    formatTime,
    gridColumns,
    gridRows,
    hasBoss,
    monsterById,
    newLayer,
    newPlacement,
    newStage,
    newWave,
    nextId,
    parseTime,
    placementAt,
    recordPlacementChange,
    redoPlacementChange,
    resetPlacementHistory,
    sortedLayers,
    timeParts,
    totalLayers,
    totalSpawns,
    totalWaves,
    undoPlacementChange,
    worldPosition,
  };
  root.PACKBOUND_WAVE_DB_TOOLS = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
