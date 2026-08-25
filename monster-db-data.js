window.PACKBOUND_MONSTER_DB = {
  "schema_version": 1,
  "revision": "d0ad884e8183337d",
  "source": "docs/gameplay/monster-definitions.json",
  "count": 1,
  "active_count": 1,
  "groups": [
    {
      "name": "기본 정보",
      "fields": [
        {
          "group": "기본 정보",
          "path": "id",
          "label": "몬스터 ID",
          "kind": "id",
          "unit": "",
          "help": "코드와 저장 데이터에서 사용하는 영구 ID",
          "readonly": true
        },
        {
          "group": "기본 정보",
          "path": "enabled",
          "label": "게임 활성화",
          "kind": "boolean",
          "unit": "",
          "help": "끄면 새 몬스터를 생성하지 않습니다.",
          "readonly": false
        },
        {
          "group": "기본 정보",
          "path": "identity.display_name",
          "label": "표시 이름",
          "kind": "string",
          "unit": "",
          "help": "",
          "readonly": false
        },
        {
          "group": "기본 정보",
          "path": "identity.description",
          "label": "설명",
          "kind": "textarea",
          "unit": "",
          "help": "",
          "readonly": false
        },
        {
          "group": "기본 정보",
          "path": "identity.element",
          "label": "속성",
          "kind": "select",
          "unit": "",
          "help": "",
          "readonly": false,
          "options": [
            "Nature",
            "Fire",
            "Water",
            "Wind",
            "Earth",
            "Lightning",
            "Dark",
            "Light",
            "Neutral"
          ]
        },
        {
          "group": "기본 정보",
          "path": "identity.species",
          "label": "종족",
          "kind": "string",
          "unit": "",
          "help": "",
          "readonly": false
        },
        {
          "group": "기본 정보",
          "path": "identity.faction",
          "label": "진영",
          "kind": "string",
          "unit": "",
          "help": "",
          "readonly": false
        },
        {
          "group": "기본 정보",
          "path": "identity.tier",
          "label": "등급",
          "kind": "select",
          "unit": "",
          "help": "",
          "readonly": false,
          "options": [
            "Normal",
            "Elite",
            "Boss"
          ]
        },
        {
          "group": "기본 정보",
          "path": "identity.level",
          "label": "레벨",
          "kind": "integer",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 999,
          "step": 1
        },
        {
          "group": "기본 정보",
          "path": "identity.tags",
          "label": "태그",
          "kind": "string-list",
          "unit": "",
          "help": "쉼표로 구분합니다.",
          "readonly": false
        }
      ]
    },
    {
      "name": "전투 능력치",
      "fields": [
        {
          "group": "전투 능력치",
          "path": "stats.max_health",
          "label": "최대 체력",
          "kind": "number",
          "unit": "HP",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 1000000,
          "step": 1
        },
        {
          "group": "전투 능력치",
          "path": "stats.attack_power",
          "label": "공격력",
          "kind": "number",
          "unit": "DMG",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 100000,
          "step": 1
        },
        {
          "group": "전투 능력치",
          "path": "stats.defense",
          "label": "방어력",
          "kind": "number",
          "unit": "DMG 감소",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 100000,
          "step": 1
        },
        {
          "group": "전투 능력치",
          "path": "stats.knockback_resistance",
          "label": "넉백 저항",
          "kind": "number",
          "unit": "0–1",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 1,
          "step": 0.05
        }
      ]
    },
    {
      "name": "상대 탐색",
      "fields": [
        {
          "group": "상대 탐색",
          "path": "detection.search_range",
          "label": "상대 탐색 거리",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 1000,
          "step": 0.5
        },
        {
          "group": "상대 탐색",
          "path": "detection.lose_target_range",
          "label": "추적 해제 거리",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 1500,
          "step": 0.5
        },
        {
          "group": "상대 탐색",
          "path": "detection.target_refresh_seconds",
          "label": "대상 갱신 간격",
          "kind": "number",
          "unit": "초",
          "help": "",
          "readonly": false,
          "minimum": 0.05,
          "maximum": 10,
          "step": 0.05
        },
        {
          "group": "상대 탐색",
          "path": "detection.field_of_view_degrees",
          "label": "시야각",
          "kind": "number",
          "unit": "도",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 360,
          "step": 1
        },
        {
          "group": "상대 탐색",
          "path": "detection.require_line_of_sight",
          "label": "탐색 시 시야선 필요",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false
        },
        {
          "group": "상대 탐색",
          "path": "detection.hearing_enabled",
          "label": "근접 감지 사용",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false
        },
        {
          "group": "상대 탐색",
          "path": "detection.hearing_range",
          "label": "근접 감지 거리",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 1000,
          "step": 0.5
        }
      ]
    },
    {
      "name": "이동·경로",
      "fields": [
        {
          "group": "이동·경로",
          "path": "movement.walk_speed",
          "label": "평상시 이동속도",
          "kind": "number",
          "unit": "stud/s",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 100,
          "step": 0.25
        },
        {
          "group": "이동·경로",
          "path": "movement.chase_speed",
          "label": "추적 이동속도",
          "kind": "number",
          "unit": "stud/s",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 100,
          "step": 0.25
        },
        {
          "group": "이동·경로",
          "path": "movement.use_pathfinding",
          "label": "경로 탐색 사용",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false
        },
        {
          "group": "이동·경로",
          "path": "movement.repath_interval_seconds",
          "label": "경로 재계산 간격",
          "kind": "number",
          "unit": "초",
          "help": "",
          "readonly": false,
          "minimum": 0.1,
          "maximum": 10,
          "step": 0.05
        },
        {
          "group": "이동·경로",
          "path": "movement.waypoint_spacing",
          "label": "경유점 간격",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 50,
          "step": 0.5
        },
        {
          "group": "이동·경로",
          "path": "movement.agent_radius",
          "label": "경로 에이전트 반경",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0.5,
          "maximum": 20,
          "step": 0.1
        },
        {
          "group": "이동·경로",
          "path": "movement.agent_height",
          "label": "경로 에이전트 높이",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 40,
          "step": 0.1
        },
        {
          "group": "이동·경로",
          "path": "movement.agent_can_jump",
          "label": "점프 가능",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false
        },
        {
          "group": "이동·경로",
          "path": "movement.agent_can_climb",
          "label": "등반 가능",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false
        },
        {
          "group": "이동·경로",
          "path": "movement.leash_range",
          "label": "스폰 지점 이탈 한계",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 2000,
          "step": 1
        },
        {
          "group": "이동·경로",
          "path": "movement.return_home_distance",
          "label": "귀환 완료 거리",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0.5,
          "maximum": 100,
          "step": 0.5
        },
        {
          "group": "이동·경로",
          "path": "movement.stuck_timeout_seconds",
          "label": "막힘 판정 시간",
          "kind": "number",
          "unit": "초",
          "help": "",
          "readonly": false,
          "minimum": 0.25,
          "maximum": 30,
          "step": 0.25
        },
        {
          "group": "이동·경로",
          "path": "movement.path_retry_limit",
          "label": "경로 재시도 횟수",
          "kind": "integer",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 10,
          "step": 1
        }
      ]
    },
    {
      "name": "AI 행동",
      "fields": [
        {
          "group": "AI 행동",
          "path": "behavior.ai_tick_seconds",
          "label": "AI 판단 간격",
          "kind": "number",
          "unit": "초",
          "help": "",
          "readonly": false,
          "minimum": 0.03,
          "maximum": 2,
          "step": 0.01
        },
        {
          "group": "AI 행동",
          "path": "behavior.target_policy",
          "label": "대상 선택",
          "kind": "select",
          "unit": "",
          "help": "",
          "readonly": false,
          "options": [
            "Nearest",
            "LowestHealth",
            "HighestHealth"
          ]
        },
        {
          "group": "AI 행동",
          "path": "behavior.can_switch_targets",
          "label": "추적 중 대상 교체",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false
        },
        {
          "group": "AI 행동",
          "path": "behavior.switch_target_advantage",
          "label": "대상 교체 거리 이득",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 100,
          "step": 0.5
        },
        {
          "group": "AI 행동",
          "path": "behavior.forget_target_seconds",
          "label": "시야 상실 기억 시간",
          "kind": "number",
          "unit": "초",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 60,
          "step": 0.25
        },
        {
          "group": "AI 행동",
          "path": "behavior.return_home_enabled",
          "label": "전투 종료 후 귀환",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false
        }
      ]
    },
    {
      "name": "공격 패턴",
      "fields": [
        {
          "group": "공격 패턴",
          "path": "attack.kind",
          "label": "공격 종류",
          "kind": "select",
          "unit": "",
          "help": "",
          "readonly": false,
          "options": [
            "TargetedGroundEruption"
          ]
        },
        {
          "group": "공격 패턴",
          "path": "attack.minimum_range",
          "label": "최소 공격 범위",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 1000,
          "step": 0.25
        },
        {
          "group": "공격 패턴",
          "path": "attack.maximum_range",
          "label": "최대 공격 범위",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0.25,
          "maximum": 1000,
          "step": 0.25
        },
        {
          "group": "공격 패턴",
          "path": "attack.damage_multiplier",
          "label": "공격력 배율",
          "kind": "number",
          "unit": "×",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 100,
          "step": 0.05
        },
        {
          "group": "공격 패턴",
          "path": "attack.flat_damage_bonus",
          "label": "고정 추가 피해",
          "kind": "number",
          "unit": "DMG",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 100000,
          "step": 1
        },
        {
          "group": "공격 패턴",
          "path": "attack.telegraph_duration_seconds",
          "label": "빨간 장판 예고 시간",
          "kind": "number",
          "unit": "초",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 30,
          "step": 0.05
        },
        {
          "group": "공격 패턴",
          "path": "attack.damage_delay_after_eruption_seconds",
          "label": "덩굴 출현 후 피해 지연",
          "kind": "number",
          "unit": "초",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 10,
          "step": 0.05
        },
        {
          "group": "공격 패턴",
          "path": "attack.hit_radius",
          "label": "공격 장판 반경",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0.25,
          "maximum": 200,
          "step": 0.25
        },
        {
          "group": "공격 패턴",
          "path": "attack.attack_speed_multiplier",
          "label": "공격 모션 속도",
          "kind": "number",
          "unit": "×",
          "help": "",
          "readonly": false,
          "minimum": 0.1,
          "maximum": 5,
          "step": 0.05
        },
        {
          "group": "공격 패턴",
          "path": "attack.effect_speed_multiplier",
          "label": "덩굴 이펙트 속도",
          "kind": "number",
          "unit": "×",
          "help": "",
          "readonly": false,
          "minimum": 0.1,
          "maximum": 5,
          "step": 0.05
        },
        {
          "group": "공격 패턴",
          "path": "attack.attack_interval_seconds",
          "label": "공격 시작 간격",
          "kind": "number",
          "unit": "초",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 120,
          "step": 0.05
        },
        {
          "group": "공격 패턴",
          "path": "attack.cooldown_seconds",
          "label": "공격 후 쿨다운",
          "kind": "number",
          "unit": "초",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 120,
          "step": 0.05
        },
        {
          "group": "공격 패턴",
          "path": "attack.recovery_seconds",
          "label": "공격 후 경직",
          "kind": "number",
          "unit": "초",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 30,
          "step": 0.05
        },
        {
          "group": "공격 패턴",
          "path": "attack.lock_target_position",
          "label": "시전 시작 위치 고정",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false
        },
        {
          "group": "공격 패턴",
          "path": "attack.can_move_while_casting",
          "label": "시전 중 이동",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false
        },
        {
          "group": "공격 패턴",
          "path": "attack.require_line_of_sight",
          "label": "공격 시 시야선 필요",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false
        },
        {
          "group": "공격 패턴",
          "path": "attack.knockback_force",
          "label": "수평 넉백",
          "kind": "number",
          "unit": "force",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 500,
          "step": 1
        },
        {
          "group": "공격 패턴",
          "path": "attack.vertical_knockback_force",
          "label": "수직 넉백",
          "kind": "number",
          "unit": "force",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 500,
          "step": 1
        },
        {
          "group": "공격 패턴",
          "path": "attack.maximum_targets",
          "label": "최대 피격 대상",
          "kind": "integer",
          "unit": "0=무제한",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 100,
          "step": 1
        }
      ]
    },
    {
      "name": "스폰",
      "fields": [
        {
          "group": "스폰",
          "path": "spawn.enabled",
          "label": "자동 스폰",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false
        },
        {
          "group": "스폰",
          "path": "spawn.initial_count",
          "label": "시작 개체 수",
          "kind": "integer",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 1000,
          "step": 1
        },
        {
          "group": "스폰",
          "path": "spawn.maximum_alive",
          "label": "동시 생존 한도",
          "kind": "integer",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 1000,
          "step": 1
        },
        {
          "group": "스폰",
          "path": "spawn.respawn_seconds",
          "label": "재생성 시간",
          "kind": "number",
          "unit": "초",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 3600,
          "step": 0.25
        },
        {
          "group": "스폰",
          "path": "spawn.random_radius",
          "label": "스폰 위치 무작위 반경",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 500,
          "step": 0.5
        },
        {
          "group": "스폰",
          "path": "spawn.minimum_player_distance",
          "label": "플레이어 최소 스폰 거리",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 1000,
          "step": 0.5
        },
        {
          "group": "스폰",
          "path": "spawn.positions",
          "label": "스폰 좌표",
          "kind": "vector3-list",
          "unit": "",
          "help": "한 줄에 X, Y, Z를 입력합니다.",
          "readonly": false
        }
      ]
    },
    {
      "name": "생명주기",
      "fields": [
        {
          "group": "생명주기",
          "path": "lifecycle.corpse_seconds",
          "label": "사망체 유지 시간",
          "kind": "number",
          "unit": "초",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 120,
          "step": 0.1
        },
        {
          "group": "생명주기",
          "path": "lifecycle.despawn_distance",
          "label": "비전투 소멸 거리",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 5000,
          "step": 1
        },
        {
          "group": "생명주기",
          "path": "lifecycle.out_of_combat_regen_per_second",
          "label": "비전투 초당 회복",
          "kind": "number",
          "unit": "HP/s",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 100000,
          "step": 0.5
        },
        {
          "group": "생명주기",
          "path": "lifecycle.regen_delay_seconds",
          "label": "회복 시작 지연",
          "kind": "number",
          "unit": "초",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 600,
          "step": 0.25
        }
      ]
    },
    {
      "name": "표현·충돌",
      "fields": [
        {
          "group": "표현·충돌",
          "path": "presentation.concept_art_path",
          "label": "콘셉트 이미지 경로",
          "kind": "string",
          "unit": "",
          "help": "",
          "readonly": false
        },
        {
          "group": "표현·충돌",
          "path": "presentation.display_width_studs",
          "label": "몬스터 표시 너비",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0.5,
          "maximum": 100,
          "step": 0.1
        },
        {
          "group": "표현·충돌",
          "path": "presentation.display_height_studs",
          "label": "몬스터 표시 높이",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0.5,
          "maximum": 100,
          "step": 0.1
        },
        {
          "group": "표현·충돌",
          "path": "presentation.billboard_offset_y",
          "label": "몬스터 표시 Y 오프셋",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": -50,
          "maximum": 50,
          "step": 0.1
        },
        {
          "group": "표현·충돌",
          "path": "presentation.show_health_bar",
          "label": "체력바 표시",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false
        },
        {
          "group": "표현·충돌",
          "path": "presentation.show_nameplate",
          "label": "이름 표시",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false
        },
        {
          "group": "표현·충돌",
          "path": "presentation.health_bar_height_pixels",
          "label": "체력바 높이",
          "kind": "integer",
          "unit": "px",
          "help": "",
          "readonly": false,
          "minimum": 2,
          "maximum": 64,
          "step": 1
        },
        {
          "group": "표현·충돌",
          "path": "presentation.collision_radius",
          "label": "충돌 반경",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0.25,
          "maximum": 50,
          "step": 0.1
        },
        {
          "group": "표현·충돌",
          "path": "presentation.collision_height",
          "label": "충돌 높이",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0.5,
          "maximum": 100,
          "step": 0.1
        },
        {
          "group": "표현·충돌",
          "path": "presentation.telegraph_color",
          "label": "예고 장판 색",
          "kind": "color",
          "unit": "",
          "help": "",
          "readonly": false
        },
        {
          "group": "표현·충돌",
          "path": "presentation.telegraph_transparency",
          "label": "예고 장판 투명도",
          "kind": "number",
          "unit": "0–1",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 1,
          "step": 0.01
        },
        {
          "group": "표현·충돌",
          "path": "presentation.telegraph_thickness",
          "label": "예고 장판 두께",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0.02,
          "maximum": 5,
          "step": 0.01
        },
        {
          "group": "표현·충돌",
          "path": "presentation.eruption_width_studs",
          "label": "덩굴 이펙트 너비",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0.5,
          "maximum": 100,
          "step": 0.1
        },
        {
          "group": "표현·충돌",
          "path": "presentation.eruption_height_studs",
          "label": "덩굴 이펙트 높이",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0.5,
          "maximum": 100,
          "step": 0.1
        },
        {
          "group": "표현·충돌",
          "path": "presentation.eruption_offset_y",
          "label": "덩굴 이펙트 Y 오프셋",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": -50,
          "maximum": 50,
          "step": 0.1
        }
      ]
    },
    {
      "name": "애니메이션 · Idle",
      "fields": [
        {
          "group": "애니메이션 · Idle",
          "path": "presentation.animations.Idle.asset_id",
          "label": "Roblox 아틀라스 ID",
          "kind": "asset-id",
          "unit": "",
          "help": "",
          "readonly": false
        },
        {
          "group": "애니메이션 · Idle",
          "path": "presentation.animations.Idle.frame_count",
          "label": "프레임 수",
          "kind": "integer",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 64,
          "step": 1
        },
        {
          "group": "애니메이션 · Idle",
          "path": "presentation.animations.Idle.fps",
          "label": "기본 FPS",
          "kind": "number",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 0.1,
          "maximum": 60,
          "step": 0.1
        },
        {
          "group": "애니메이션 · Idle",
          "path": "presentation.animations.Idle.loop",
          "label": "반복 재생",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false
        },
        {
          "group": "애니메이션 · Idle",
          "path": "presentation.animations.Idle.cell_width",
          "label": "셀 너비",
          "kind": "integer",
          "unit": "px",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 4096,
          "step": 1
        },
        {
          "group": "애니메이션 · Idle",
          "path": "presentation.animations.Idle.cell_height",
          "label": "셀 높이",
          "kind": "integer",
          "unit": "px",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 4096,
          "step": 1
        }
      ]
    },
    {
      "name": "애니메이션 · Walk",
      "fields": [
        {
          "group": "애니메이션 · Walk",
          "path": "presentation.animations.Walk.asset_id",
          "label": "Roblox 아틀라스 ID",
          "kind": "asset-id",
          "unit": "",
          "help": "",
          "readonly": false
        },
        {
          "group": "애니메이션 · Walk",
          "path": "presentation.animations.Walk.frame_count",
          "label": "프레임 수",
          "kind": "integer",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 64,
          "step": 1
        },
        {
          "group": "애니메이션 · Walk",
          "path": "presentation.animations.Walk.fps",
          "label": "기본 FPS",
          "kind": "number",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 0.1,
          "maximum": 60,
          "step": 0.1
        },
        {
          "group": "애니메이션 · Walk",
          "path": "presentation.animations.Walk.loop",
          "label": "반복 재생",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false
        },
        {
          "group": "애니메이션 · Walk",
          "path": "presentation.animations.Walk.cell_width",
          "label": "셀 너비",
          "kind": "integer",
          "unit": "px",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 4096,
          "step": 1
        },
        {
          "group": "애니메이션 · Walk",
          "path": "presentation.animations.Walk.cell_height",
          "label": "셀 높이",
          "kind": "integer",
          "unit": "px",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 4096,
          "step": 1
        }
      ]
    },
    {
      "name": "애니메이션 · Attack",
      "fields": [
        {
          "group": "애니메이션 · Attack",
          "path": "presentation.animations.Attack.asset_id",
          "label": "Roblox 아틀라스 ID",
          "kind": "asset-id",
          "unit": "",
          "help": "",
          "readonly": false
        },
        {
          "group": "애니메이션 · Attack",
          "path": "presentation.animations.Attack.frame_count",
          "label": "프레임 수",
          "kind": "integer",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 64,
          "step": 1
        },
        {
          "group": "애니메이션 · Attack",
          "path": "presentation.animations.Attack.fps",
          "label": "기본 FPS",
          "kind": "number",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 0.1,
          "maximum": 60,
          "step": 0.1
        },
        {
          "group": "애니메이션 · Attack",
          "path": "presentation.animations.Attack.loop",
          "label": "반복 재생",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false
        },
        {
          "group": "애니메이션 · Attack",
          "path": "presentation.animations.Attack.cell_width",
          "label": "셀 너비",
          "kind": "integer",
          "unit": "px",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 4096,
          "step": 1
        },
        {
          "group": "애니메이션 · Attack",
          "path": "presentation.animations.Attack.cell_height",
          "label": "셀 높이",
          "kind": "integer",
          "unit": "px",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 4096,
          "step": 1
        }
      ]
    },
    {
      "name": "애니메이션 · VineEruption",
      "fields": [
        {
          "group": "애니메이션 · VineEruption",
          "path": "presentation.animations.VineEruption.asset_id",
          "label": "Roblox 아틀라스 ID",
          "kind": "asset-id",
          "unit": "",
          "help": "",
          "readonly": false
        },
        {
          "group": "애니메이션 · VineEruption",
          "path": "presentation.animations.VineEruption.frame_count",
          "label": "프레임 수",
          "kind": "integer",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 64,
          "step": 1
        },
        {
          "group": "애니메이션 · VineEruption",
          "path": "presentation.animations.VineEruption.fps",
          "label": "기본 FPS",
          "kind": "number",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 0.1,
          "maximum": 60,
          "step": 0.1
        },
        {
          "group": "애니메이션 · VineEruption",
          "path": "presentation.animations.VineEruption.loop",
          "label": "반복 재생",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false
        },
        {
          "group": "애니메이션 · VineEruption",
          "path": "presentation.animations.VineEruption.cell_width",
          "label": "셀 너비",
          "kind": "integer",
          "unit": "px",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 4096,
          "step": 1
        },
        {
          "group": "애니메이션 · VineEruption",
          "path": "presentation.animations.VineEruption.cell_height",
          "label": "셀 높이",
          "kind": "integer",
          "unit": "px",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 4096,
          "step": 1
        }
      ]
    }
  ],
  "monsters": [
    {
      "id": "grass_vine_monster",
      "enabled": true,
      "identity": {
        "display_name": "가시덩굴 화분괴물",
        "description": "양팔의 덩굴을 땅에 찔러 플레이어 위치를 예고한 뒤 지면에서 가시덩굴을 분출시키는 풀속성 몬스터",
        "element": "Nature",
        "species": "Plant",
        "faction": "Wild",
        "tier": "Normal",
        "level": 1,
        "tags": [
          "Plant",
          "GroundCaster",
          "TelegraphedAttack"
        ]
      },
      "stats": {
        "max_health": 120,
        "attack_power": 22,
        "defense": 2,
        "knockback_resistance": 0.25
      },
      "detection": {
        "search_range": 46,
        "lose_target_range": 62,
        "target_refresh_seconds": 0.25,
        "field_of_view_degrees": 360,
        "require_line_of_sight": false,
        "hearing_enabled": true,
        "hearing_range": 15
      },
      "movement": {
        "walk_speed": 8,
        "chase_speed": 11,
        "use_pathfinding": true,
        "repath_interval_seconds": 0.6,
        "waypoint_spacing": 4,
        "agent_radius": 2.5,
        "agent_height": 5,
        "agent_can_jump": false,
        "agent_can_climb": false,
        "leash_range": 78,
        "return_home_distance": 5,
        "stuck_timeout_seconds": 2.5,
        "path_retry_limit": 2
      },
      "behavior": {
        "ai_tick_seconds": 0.1,
        "target_policy": "Nearest",
        "can_switch_targets": true,
        "switch_target_advantage": 6,
        "forget_target_seconds": 2.5,
        "return_home_enabled": true
      },
      "attack": {
        "kind": "TargetedGroundEruption",
        "minimum_range": 0,
        "maximum_range": 28,
        "damage_multiplier": 1,
        "flat_damage_bonus": 0,
        "telegraph_duration_seconds": 2,
        "damage_delay_after_eruption_seconds": 0.25,
        "hit_radius": 4.75,
        "attack_speed_multiplier": 1,
        "effect_speed_multiplier": 1,
        "attack_interval_seconds": 4.25,
        "cooldown_seconds": 1.25,
        "recovery_seconds": 0.65,
        "lock_target_position": true,
        "can_move_while_casting": false,
        "require_line_of_sight": false,
        "knockback_force": 16,
        "vertical_knockback_force": 5,
        "maximum_targets": 0
      },
      "spawn": {
        "enabled": true,
        "initial_count": 1,
        "maximum_alive": 3,
        "respawn_seconds": 8,
        "random_radius": 3,
        "minimum_player_distance": 12,
        "positions": [
          [
            26,
            0,
            20
          ],
          [
            -24,
            0,
            12
          ],
          [
            18,
            0,
            -26
          ]
        ]
      },
      "lifecycle": {
        "corpse_seconds": 1.5,
        "despawn_distance": 135,
        "out_of_combat_regen_per_second": 0,
        "regen_delay_seconds": 8
      },
      "presentation": {
        "concept_art_path": "Assets/Monsters/Concepts/grass_vine_monster_concept_v1.png",
        "display_width_studs": 8,
        "display_height_studs": 8,
        "billboard_offset_y": 3.25,
        "show_health_bar": true,
        "show_nameplate": true,
        "health_bar_height_pixels": 7,
        "collision_radius": 1.9,
        "collision_height": 4.2,
        "telegraph_color": "#E63946",
        "telegraph_transparency": 0.38,
        "telegraph_thickness": 0.12,
        "eruption_width_studs": 9,
        "eruption_height_studs": 9,
        "eruption_offset_y": 4.1,
        "animations": {
          "Idle": {
            "asset_id": "rbxassetid://71877818399678",
            "frame_count": 8,
            "fps": 6,
            "loop": true,
            "cell_width": 128,
            "cell_height": 128
          },
          "Walk": {
            "asset_id": "rbxassetid://107187794762078",
            "frame_count": 8,
            "fps": 8,
            "loop": true,
            "cell_width": 128,
            "cell_height": 128
          },
          "Attack": {
            "asset_id": "rbxassetid://131929246544297",
            "frame_count": 8,
            "fps": 8,
            "loop": false,
            "cell_width": 128,
            "cell_height": 128
          },
          "VineEruption": {
            "asset_id": "rbxassetid://134802000415635",
            "frame_count": 8,
            "fps": 8,
            "loop": false,
            "cell_width": 128,
            "cell_height": 128
          }
        }
      },
      "concept_art_url": "./monster-media/grass_vine_monster.png"
    }
  ]
};
