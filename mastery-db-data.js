window.PACKBOUND_MASTERY_DB = {
  "schema_version": 1,
  "title": "캐릭터 마스터리 스킬 DB",
  "description": "캐릭터 성장 능력치를 계열별 트리로 연결하고 해제 조건을 관리하는 기획 원본",
  "branches": [
    {
      "id": "offense",
      "code": "A",
      "name": "공격 숙련",
      "color": "#f26b5f"
    },
    {
      "id": "survival",
      "code": "B",
      "name": "생존 숙련",
      "color": "#4fc28b"
    }
  ],
  "nodes": [
    {
      "id": "mastery_a",
      "code": "A",
      "branch_id": "offense",
      "name": "전투 감각",
      "description": "공격 계열의 출발점입니다. 5레벨을 달성하면 세 갈래의 전문 숙련이 열립니다.",
      "max_level": 5,
      "position": {
        "x": 520,
        "y": 60
      },
      "stat_id": "AttackPowerIncrease",
      "stat_value_per_level": 2,
      "stat_unit": "%",
      "parents": [],
      "unlock": {
        "mode": "all",
        "conditions": []
      }
    },
    {
      "id": "mastery_a_1",
      "code": "A-1",
      "branch_id": "offense",
      "name": "정밀 타격",
      "description": "치명타가 발생할 확률을 높이는 공격 전문 숙련입니다.",
      "max_level": 10,
      "position": {
        "x": 210,
        "y": 300
      },
      "stat_id": "CriticalChance",
      "stat_value_per_level": 1,
      "stat_unit": "%p",
      "parents": [
        "mastery_a"
      ],
      "unlock": {
        "mode": "all",
        "conditions": [
          {
            "type": "node_level",
            "node_id": "mastery_a",
            "level": 5
          }
        ]
      }
    },
    {
      "id": "mastery_a_2",
      "code": "A-2",
      "branch_id": "offense",
      "name": "전투 호흡",
      "description": "자동 공격 사이의 대기 시간을 줄이는 공격 전문 숙련입니다.",
      "max_level": 10,
      "position": {
        "x": 520,
        "y": 300
      },
      "stat_id": "CooldownReduction",
      "stat_value_per_level": 1,
      "stat_unit": "%p",
      "parents": [
        "mastery_a"
      ],
      "unlock": {
        "mode": "all",
        "conditions": [
          {
            "type": "node_level",
            "node_id": "mastery_a",
            "level": 5
          }
        ]
      }
    },
    {
      "id": "mastery_a_3",
      "code": "A-3",
      "branch_id": "offense",
      "name": "거리 감각",
      "description": "근거리와 원거리 무기의 기본 공격 사거리를 함께 확장합니다.",
      "max_level": 10,
      "position": {
        "x": 830,
        "y": 300
      },
      "stat_id": "AttackRangeIncrease",
      "stat_value_per_level": 2,
      "stat_unit": "%",
      "parents": [
        "mastery_a"
      ],
      "unlock": {
        "mode": "all",
        "conditions": [
          {
            "type": "node_level",
            "node_id": "mastery_a",
            "level": 5
          }
        ]
      }
    },
    {
      "id": "mastery_a_15",
      "code": "A-15",
      "branch_id": "offense",
      "name": "무기 달인",
      "description": "공격 계열에 충분히 투자한 플레이어가 얻는 핵심 마무리 숙련입니다.",
      "max_level": 1,
      "position": {
        "x": 520,
        "y": 590
      },
      "stat_id": "AttackPower",
      "stat_value_per_level": 10,
      "stat_unit": "%",
      "parents": [
        "mastery_a_1",
        "mastery_a_2",
        "mastery_a_3"
      ],
      "unlock": {
        "mode": "all",
        "conditions": [
          {
            "type": "branch_points",
            "branch_id": "offense",
            "points": 30
          }
        ]
      }
    },
    {
      "id": "mastery_b",
      "code": "B",
      "branch_id": "survival",
      "name": "생존 본능",
      "description": "생존 계열의 출발점입니다. 체력과 방어 중심의 하위 숙련으로 이어집니다.",
      "max_level": 5,
      "position": {
        "x": 520,
        "y": 60
      },
      "stat_id": "MaxHealthIncrease",
      "stat_value_per_level": 2,
      "stat_unit": "%",
      "parents": [],
      "unlock": {
        "mode": "all",
        "conditions": []
      }
    },
    {
      "id": "mastery_b_1",
      "code": "B-1",
      "branch_id": "survival",
      "name": "강인한 신체",
      "description": "받는 공격을 견디는 기본 방어 능력을 높입니다.",
      "max_level": 10,
      "position": {
        "x": 360,
        "y": 300
      },
      "stat_id": "DefenseIncrease",
      "stat_value_per_level": 2,
      "stat_unit": "%",
      "parents": [
        "mastery_b"
      ],
      "unlock": {
        "mode": "all",
        "conditions": [
          {
            "type": "node_level",
            "node_id": "mastery_b",
            "level": 5
          }
        ]
      }
    },
    {
      "id": "mastery_b_2",
      "code": "B-2",
      "branch_id": "survival",
      "name": "회복 순환",
      "description": "시간이 흐를수록 체력을 회복하는 생존 능력을 높입니다.",
      "max_level": 10,
      "position": {
        "x": 680,
        "y": 300
      },
      "stat_id": "HealthRegeneration",
      "stat_value_per_level": 1,
      "stat_unit": "%",
      "parents": [
        "mastery_b"
      ],
      "unlock": {
        "mode": "all",
        "conditions": [
          {
            "type": "node_level",
            "node_id": "mastery_b",
            "level": 5
          }
        ]
      }
    },
    {
      "id": "mastery_a_6",
      "code": "A-6",
      "branch_id": "offense",
      "name": "새 마스터리 스킬",
      "description": "플레이어가 이해할 수 있는 스킬 역할을 입력하세요.",
      "max_level": 5,
      "position": {
        "x": 211,
        "y": 585
      },
      "stat_id": "AttackPowerIncrease",
      "stat_value_per_level": 1,
      "stat_unit": "%",
      "parents": [
        "mastery_a_1"
      ],
      "unlock": {
        "mode": "all",
        "conditions": []
      }
    }
  ],
  "revision": "5adbb32bcb8bc1a4",
  "branch_count": 2,
  "node_count": 9,
  "stat_source": "combat-stats",
  "stat_count": 55
};
