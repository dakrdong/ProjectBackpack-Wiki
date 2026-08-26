window.PACKBOUND_MONSTER_DB = {
  "schema_version": 1,
  "revision": "179d414284af7c01",
  "source": "docs/gameplay/monster-definitions.json",
  "count": 6,
  "active_count": 6,
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
          "path": "size_scale",
          "label": "크기 배율",
          "kind": "number",
          "unit": "×",
          "help": "기본 표시 너비와 높이에만 곱하는 최종 화면 크기 배율입니다. 충돌 크기와 공격 범위는 바꾸지 않습니다.",
          "readonly": false,
          "minimum": 0.1,
          "maximum": 10,
          "step": 0.05
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
            "TargetedGroundEruption",
            "TelegraphedLinearDash",
            "FanVolleyProjectile",
            "TelegraphedLeapSlam",
            "ContactMelee"
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
          "step": 0.05,
          "labels_by_attack_kind": {
            "FanVolleyProjectile": "첫 발사 전 예고 시간",
            "TelegraphedLeapSlam": "착지 예고 시간"
          }
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
          "label": "공격 이펙트 속도",
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
      "name": "공격 패턴 · 지면 분출",
      "fields": [
        {
          "group": "공격 패턴 · 지면 분출",
          "path": "attack.damage_delay_after_eruption_seconds",
          "label": "덩굴 출현 후 피해 지연",
          "kind": "number",
          "unit": "초",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 10,
          "step": 0.05,
          "attack_kinds": [
            "TargetedGroundEruption"
          ]
        }
      ]
    },
    {
      "name": "공격 패턴 · 지면 분출·접촉",
      "fields": [
        {
          "group": "공격 패턴 · 지면 분출·접촉",
          "path": "attack.hit_radius",
          "label": "실제 피해 판정 반경",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0.25,
          "maximum": 200,
          "step": 0.05,
          "attack_kinds": [
            "TargetedGroundEruption",
            "ContactMelee"
          ],
          "labels_by_attack_kind": {
            "TargetedGroundEruption": "공격 장판 반경",
            "ContactMelee": "접촉 피해 반경"
          }
        }
      ]
    },
    {
      "name": "공격 패턴 · 접촉",
      "fields": [
        {
          "group": "공격 패턴 · 접촉",
          "path": "attack.damage_frame_zero_based",
          "label": "피해 프레임 (0부터 시작)",
          "kind": "integer",
          "unit": "",
          "help": "Attack 아틀라스에서 서버가 실제 피해를 판정하는 프레임입니다.",
          "readonly": false,
          "minimum": 0,
          "maximum": 63,
          "step": 1,
          "attack_kinds": [
            "ContactMelee"
          ]
        }
      ]
    },
    {
      "name": "공격 패턴 · 직선 돌진",
      "fields": [
        {
          "group": "공격 패턴 · 직선 돌진",
          "path": "attack.dash_speed_studs_per_second",
          "label": "돌진 속도",
          "kind": "number",
          "unit": "stud/s",
          "help": "",
          "readonly": false,
          "minimum": 0.1,
          "maximum": 500,
          "step": 0.25,
          "attack_kinds": [
            "TelegraphedLinearDash"
          ]
        },
        {
          "group": "공격 패턴 · 직선 돌진",
          "path": "attack.dash_width_studs",
          "label": "돌진 판정 폭",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0.25,
          "maximum": 100,
          "step": 0.1,
          "attack_kinds": [
            "TelegraphedLinearDash"
          ]
        },
        {
          "group": "공격 패턴 · 직선 돌진",
          "path": "attack.dash_hit_height_studs",
          "label": "돌진 판정 높이",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0.25,
          "maximum": 100,
          "step": 0.1,
          "attack_kinds": [
            "TelegraphedLinearDash"
          ]
        },
        {
          "group": "공격 패턴 · 직선 돌진",
          "path": "attack.minimum_dash_distance_studs",
          "label": "최소 돌진 거리",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 500,
          "step": 0.25,
          "attack_kinds": [
            "TelegraphedLinearDash"
          ]
        },
        {
          "group": "공격 패턴 · 직선 돌진",
          "path": "attack.maximum_dash_seconds",
          "label": "최대 돌진 시간",
          "kind": "number",
          "unit": "초",
          "help": "",
          "readonly": false,
          "minimum": 0.05,
          "maximum": 30,
          "step": 0.05,
          "attack_kinds": [
            "TelegraphedLinearDash"
          ]
        },
        {
          "group": "공격 패턴 · 직선 돌진",
          "path": "attack.obstacle_clearance_studs",
          "label": "장애물 앞 정지 여유",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 20,
          "step": 0.05,
          "attack_kinds": [
            "TelegraphedLinearDash"
          ]
        },
        {
          "group": "공격 패턴 · 직선 돌진",
          "path": "attack.stop_at_obstacle",
          "label": "장애물 앞 정지",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false,
          "attack_kinds": [
            "TelegraphedLinearDash"
          ]
        }
      ]
    },
    {
      "name": "공격 패턴 · 부채탄",
      "fields": [
        {
          "group": "공격 패턴 · 부채탄",
          "path": "attack.volley_count",
          "label": "발사 묶음 수",
          "kind": "integer",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 10,
          "step": 1,
          "attack_kinds": [
            "FanVolleyProjectile"
          ]
        },
        {
          "group": "공격 패턴 · 부채탄",
          "path": "attack.projectiles_per_volley",
          "label": "묶음당 발사체 수",
          "kind": "integer",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 16,
          "step": 1,
          "attack_kinds": [
            "FanVolleyProjectile"
          ]
        },
        {
          "group": "공격 패턴 · 부채탄",
          "path": "attack.volley_interval_seconds",
          "label": "발사 묶음 간격",
          "kind": "number",
          "unit": "초",
          "help": "",
          "readonly": false,
          "minimum": 0.01,
          "maximum": 10,
          "step": 0.01,
          "attack_kinds": [
            "FanVolleyProjectile"
          ]
        },
        {
          "group": "공격 패턴 · 부채탄",
          "path": "attack.spread_angle_degrees",
          "label": "부채꼴 전체 각도",
          "kind": "number",
          "unit": "도",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 180,
          "step": 1,
          "attack_kinds": [
            "FanVolleyProjectile"
          ]
        },
        {
          "group": "공격 패턴 · 부채탄",
          "path": "attack.projectile_speed_studs_per_second",
          "label": "발사체 속도",
          "kind": "number",
          "unit": "stud/s",
          "help": "",
          "readonly": false,
          "minimum": 0.1,
          "maximum": 1000,
          "step": 0.25,
          "attack_kinds": [
            "FanVolleyProjectile"
          ]
        },
        {
          "group": "공격 패턴 · 부채탄",
          "path": "attack.projectile_lifetime_seconds",
          "label": "발사체 수명",
          "kind": "number",
          "unit": "초",
          "help": "",
          "readonly": false,
          "minimum": 0.05,
          "maximum": 30,
          "step": 0.05,
          "attack_kinds": [
            "FanVolleyProjectile"
          ]
        },
        {
          "group": "공격 패턴 · 부채탄",
          "path": "attack.projectile_radius_studs",
          "label": "발사체 판정 반경",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0.05,
          "maximum": 50,
          "step": 0.05,
          "attack_kinds": [
            "FanVolleyProjectile"
          ]
        },
        {
          "group": "공격 패턴 · 부채탄",
          "path": "attack.projectile_spawn_forward_studs",
          "label": "총구 전방 오프셋",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 50,
          "step": 0.05,
          "attack_kinds": [
            "FanVolleyProjectile"
          ]
        },
        {
          "group": "공격 패턴 · 부채탄",
          "path": "attack.projectile_spawn_height_studs",
          "label": "총구 높이",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": -50,
          "maximum": 50,
          "step": 0.05,
          "attack_kinds": [
            "FanVolleyProjectile"
          ]
        },
        {
          "group": "공격 패턴 · 부채탄",
          "path": "attack.projectile_pierce_count",
          "label": "추가 관통 수",
          "kind": "integer",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 20,
          "step": 1,
          "attack_kinds": [
            "FanVolleyProjectile"
          ]
        },
        {
          "group": "공격 패턴 · 부채탄",
          "path": "attack.destroy_on_obstacle",
          "label": "장애물 충돌 시 제거",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false,
          "attack_kinds": [
            "FanVolleyProjectile"
          ]
        },
        {
          "group": "공격 패턴 · 부채탄",
          "path": "attack.dedupe_target_per_volley",
          "label": "묶음별 중복 피해 방지",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false,
          "attack_kinds": [
            "FanVolleyProjectile"
          ]
        }
      ]
    },
    {
      "name": "공격 패턴 · 도약 찍기",
      "fields": [
        {
          "group": "공격 패턴 · 도약 찍기",
          "path": "attack.leap_height_studs",
          "label": "도약 높이",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0.5,
          "maximum": 100,
          "step": 0.25,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "공격 패턴 · 도약 찍기",
          "path": "attack.leap_duration_seconds",
          "label": "공중 이동 시간",
          "kind": "number",
          "unit": "초",
          "help": "",
          "readonly": false,
          "minimum": 0.05,
          "maximum": 10,
          "step": 0.05,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "공격 패턴 · 도약 찍기",
          "path": "attack.landing_radius_studs",
          "label": "착지 피해 반경",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0.25,
          "maximum": 100,
          "step": 0.25,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "공격 패턴 · 도약 찍기",
          "path": "attack.ground_probe_height_studs",
          "label": "착지 지면 탐색 높이",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 200,
          "step": 1,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "공격 패턴 · 도약 찍기",
          "path": "attack.ground_probe_depth_studs",
          "label": "착지 지면 탐색 깊이",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 500,
          "step": 1,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "공격 패턴 · 도약 찍기",
          "path": "attack.maximum_landing_slope_degrees",
          "label": "최대 착지 경사",
          "kind": "number",
          "unit": "도",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 60,
          "step": 1,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "공격 패턴 · 도약 찍기",
          "path": "attack.arc_collision_samples",
          "label": "궤적 충돌 표본 수",
          "kind": "integer",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 4,
          "maximum": 64,
          "step": 1,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "공격 패턴 · 도약 찍기",
          "path": "attack.cancel_when_arc_blocked",
          "label": "궤적 막힘 시 취소",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
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
      "name": "사망·소환",
      "fields": [
        {
          "group": "사망·소환",
          "path": "death_spawn.enabled",
          "label": "사망 시 자식 소환",
          "kind": "boolean",
          "unit": "",
          "help": "실제 체력 0 사망일 때만 지정한 자식을 한 번 소환합니다.",
          "readonly": false
        },
        {
          "group": "사망·소환",
          "path": "death_spawn.child_monster_id",
          "label": "자식 몬스터 ID",
          "kind": "optional-id",
          "unit": "",
          "help": "기능을 사용하지 않을 때는 비워 둘 수 있습니다.",
          "readonly": false
        },
        {
          "group": "사망·소환",
          "path": "death_spawn.count",
          "label": "자식 수",
          "kind": "integer",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 64,
          "step": 1
        },
        {
          "group": "사망·소환",
          "path": "death_spawn.trigger_frame_zero_based",
          "label": "부화 프레임 (0부터 시작)",
          "kind": "integer",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 63,
          "step": 1
        },
        {
          "group": "사망·소환",
          "path": "death_spawn.spawn_radius_studs",
          "label": "부화 배치 반경",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0.1,
          "maximum": 100,
          "step": 0.05
        },
        {
          "group": "사망·소환",
          "path": "death_spawn.activation_delay_seconds",
          "label": "자식 활성화 지연",
          "kind": "number",
          "unit": "초",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 30,
          "step": 0.05
        },
        {
          "group": "사망·소환",
          "path": "death_spawn.target_policy",
          "label": "자식의 첫 표적",
          "kind": "select",
          "unit": "",
          "help": "",
          "readonly": false,
          "options": [
            "KillerThenNearest",
            "Nearest"
          ]
        },
        {
          "group": "사망·소환",
          "path": "death_spawn.child_should_respawn",
          "label": "자식 재생성 예약",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false
        },
        {
          "group": "사망·소환",
          "path": "death_spawn.inherit_home",
          "label": "부모 귀환 지점 상속",
          "kind": "boolean",
          "unit": "",
          "help": "",
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
          "label": "대표 이미지 경로",
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
          "path": "presentation.billboard_pixels_per_stud",
          "label": "표시 픽셀 밀도",
          "kind": "number",
          "unit": "px/stud",
          "help": "월드 표시 크기를 BillboardGui 픽셀 크기로 변환하는 값입니다.",
          "readonly": false,
          "minimum": 1,
          "maximum": 128,
          "step": 1
        },
        {
          "group": "표현·충돌",
          "path": "presentation.max_render_distance_studs",
          "label": "최대 렌더 거리",
          "kind": "number",
          "unit": "stud",
          "help": "카메라와 이 거리 이상 떨어지면 몬스터와 덩굴 이펙트를 숨깁니다.",
          "readonly": false,
          "minimum": 1,
          "maximum": 5000,
          "step": 1
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
        }
      ]
    },
    {
      "name": "표현·충돌 · 지면 분출",
      "fields": [
        {
          "group": "표현·충돌 · 지면 분출",
          "path": "presentation.eruption_width_studs",
          "label": "덩굴 이펙트 너비",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0.5,
          "maximum": 100,
          "step": 0.1,
          "attack_kinds": [
            "TargetedGroundEruption"
          ]
        },
        {
          "group": "표현·충돌 · 지면 분출",
          "path": "presentation.eruption_height_studs",
          "label": "덩굴 이펙트 높이",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0.5,
          "maximum": 100,
          "step": 0.1,
          "attack_kinds": [
            "TargetedGroundEruption"
          ]
        },
        {
          "group": "표현·충돌 · 지면 분출",
          "path": "presentation.eruption_offset_y",
          "label": "덩굴 이펙트 Y 오프셋",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": -50,
          "maximum": 50,
          "step": 0.1,
          "attack_kinds": [
            "TargetedGroundEruption"
          ]
        }
      ]
    },
    {
      "name": "표현·충돌 · 직선 돌진",
      "fields": [
        {
          "group": "표현·충돌 · 직선 돌진",
          "path": "presentation.hover_height_studs",
          "label": "지면 위 부유 높이",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0,
          "maximum": 20,
          "step": 0.05,
          "attack_kinds": [
            "TelegraphedLinearDash"
          ]
        }
      ]
    },
    {
      "name": "표현·충돌 · 부채탄",
      "fields": [
        {
          "group": "표현·충돌 · 부채탄",
          "path": "presentation.projectile_width_studs",
          "label": "발사체 표시 너비",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0.1,
          "maximum": 50,
          "step": 0.1,
          "attack_kinds": [
            "FanVolleyProjectile"
          ]
        },
        {
          "group": "표현·충돌 · 부채탄",
          "path": "presentation.projectile_height_studs",
          "label": "발사체 표시 높이",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0.1,
          "maximum": 50,
          "step": 0.1,
          "attack_kinds": [
            "FanVolleyProjectile"
          ]
        },
        {
          "group": "표현·충돌 · 부채탄",
          "path": "presentation.projectile_offset_y",
          "label": "발사체 표시 Y 오프셋",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": -50,
          "maximum": 50,
          "step": 0.1,
          "attack_kinds": [
            "FanVolleyProjectile"
          ]
        }
      ]
    },
    {
      "name": "표현·충돌 · 도약 찍기",
      "fields": [
        {
          "group": "표현·충돌 · 도약 찍기",
          "path": "presentation.impact_width_studs",
          "label": "착지 충격파 표시 너비",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0.1,
          "maximum": 100,
          "step": 0.1,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "표현·충돌 · 도약 찍기",
          "path": "presentation.impact_height_studs",
          "label": "착지 충격파 표시 높이",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": 0.1,
          "maximum": 100,
          "step": 0.1,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "표현·충돌 · 도약 찍기",
          "path": "presentation.impact_offset_y",
          "label": "착지 충격파 Y 오프셋",
          "kind": "number",
          "unit": "stud",
          "help": "",
          "readonly": false,
          "minimum": -50,
          "maximum": 50,
          "step": 0.1,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        }
      ]
    },
    {
      "name": "애니메이션 · Spawn",
      "fields": [
        {
          "group": "애니메이션 · Spawn",
          "path": "presentation.animations.Spawn.asset_id",
          "label": "Roblox 아틀라스 ID",
          "kind": "asset-id",
          "unit": "",
          "help": "",
          "readonly": false,
          "attack_kinds": [
            "ContactMelee"
          ],
          "requires_animation_clip": "Spawn"
        },
        {
          "group": "애니메이션 · Spawn",
          "path": "presentation.animations.Spawn.frame_count",
          "label": "프레임 수",
          "kind": "integer",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 64,
          "step": 1,
          "attack_kinds": [
            "ContactMelee"
          ],
          "requires_animation_clip": "Spawn"
        },
        {
          "group": "애니메이션 · Spawn",
          "path": "presentation.animations.Spawn.fps",
          "label": "기본 FPS",
          "kind": "number",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 0.1,
          "maximum": 60,
          "step": 0.1,
          "attack_kinds": [
            "ContactMelee"
          ],
          "requires_animation_clip": "Spawn"
        },
        {
          "group": "애니메이션 · Spawn",
          "path": "presentation.animations.Spawn.loop",
          "label": "반복 재생",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false,
          "attack_kinds": [
            "ContactMelee"
          ],
          "requires_animation_clip": "Spawn"
        },
        {
          "group": "애니메이션 · Spawn",
          "path": "presentation.animations.Spawn.direction",
          "label": "방향 계약",
          "kind": "select",
          "unit": "",
          "help": "",
          "readonly": false,
          "options": [
            "East",
            "Omni"
          ],
          "attack_kinds": [
            "ContactMelee"
          ],
          "requires_animation_clip": "Spawn"
        },
        {
          "group": "애니메이션 · Spawn",
          "path": "presentation.animations.Spawn.cell_width",
          "label": "셀 너비",
          "kind": "integer",
          "unit": "px",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 4096,
          "step": 1,
          "attack_kinds": [
            "ContactMelee"
          ],
          "requires_animation_clip": "Spawn"
        },
        {
          "group": "애니메이션 · Spawn",
          "path": "presentation.animations.Spawn.cell_height",
          "label": "셀 높이",
          "kind": "integer",
          "unit": "px",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 4096,
          "step": 1,
          "attack_kinds": [
            "ContactMelee"
          ],
          "requires_animation_clip": "Spawn"
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
          "readonly": false,
          "attack_kinds": [
            "TargetedGroundEruption",
            "FanVolleyProjectile",
            "ContactMelee",
            "TelegraphedLeapSlam"
          ]
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
          "step": 1,
          "attack_kinds": [
            "TargetedGroundEruption",
            "FanVolleyProjectile",
            "ContactMelee",
            "TelegraphedLeapSlam"
          ]
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
          "step": 0.1,
          "attack_kinds": [
            "TargetedGroundEruption",
            "FanVolleyProjectile",
            "ContactMelee",
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "애니메이션 · Idle",
          "path": "presentation.animations.Idle.loop",
          "label": "반복 재생",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false,
          "attack_kinds": [
            "TargetedGroundEruption",
            "FanVolleyProjectile",
            "ContactMelee",
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "애니메이션 · Idle",
          "path": "presentation.animations.Idle.direction",
          "label": "방향 계약",
          "kind": "select",
          "unit": "",
          "help": "",
          "readonly": false,
          "options": [
            "East",
            "Omni"
          ],
          "attack_kinds": [
            "TargetedGroundEruption",
            "FanVolleyProjectile",
            "ContactMelee",
            "TelegraphedLeapSlam"
          ]
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
          "step": 1,
          "attack_kinds": [
            "TargetedGroundEruption",
            "FanVolleyProjectile",
            "ContactMelee",
            "TelegraphedLeapSlam"
          ]
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
          "step": 1,
          "attack_kinds": [
            "TargetedGroundEruption",
            "FanVolleyProjectile",
            "ContactMelee",
            "TelegraphedLeapSlam"
          ]
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
          "readonly": false,
          "attack_kinds": [
            "TargetedGroundEruption",
            "FanVolleyProjectile",
            "ContactMelee",
            "TelegraphedLeapSlam"
          ]
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
          "step": 1,
          "attack_kinds": [
            "TargetedGroundEruption",
            "FanVolleyProjectile",
            "ContactMelee",
            "TelegraphedLeapSlam"
          ]
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
          "step": 0.1,
          "attack_kinds": [
            "TargetedGroundEruption",
            "FanVolleyProjectile",
            "ContactMelee",
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "애니메이션 · Walk",
          "path": "presentation.animations.Walk.loop",
          "label": "반복 재생",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false,
          "attack_kinds": [
            "TargetedGroundEruption",
            "FanVolleyProjectile",
            "ContactMelee",
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "애니메이션 · Walk",
          "path": "presentation.animations.Walk.direction",
          "label": "방향 계약",
          "kind": "select",
          "unit": "",
          "help": "",
          "readonly": false,
          "options": [
            "East",
            "Omni"
          ],
          "attack_kinds": [
            "TargetedGroundEruption",
            "FanVolleyProjectile",
            "ContactMelee",
            "TelegraphedLeapSlam"
          ]
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
          "step": 1,
          "attack_kinds": [
            "TargetedGroundEruption",
            "FanVolleyProjectile",
            "ContactMelee",
            "TelegraphedLeapSlam"
          ]
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
          "step": 1,
          "attack_kinds": [
            "TargetedGroundEruption",
            "FanVolleyProjectile",
            "ContactMelee",
            "TelegraphedLeapSlam"
          ]
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
          "readonly": false,
          "attack_kinds": [
            "TargetedGroundEruption",
            "FanVolleyProjectile",
            "ContactMelee"
          ]
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
          "step": 1,
          "attack_kinds": [
            "TargetedGroundEruption",
            "FanVolleyProjectile",
            "ContactMelee"
          ]
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
          "step": 0.1,
          "attack_kinds": [
            "TargetedGroundEruption",
            "FanVolleyProjectile",
            "ContactMelee"
          ]
        },
        {
          "group": "애니메이션 · Attack",
          "path": "presentation.animations.Attack.loop",
          "label": "반복 재생",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false,
          "attack_kinds": [
            "TargetedGroundEruption",
            "FanVolleyProjectile",
            "ContactMelee"
          ]
        },
        {
          "group": "애니메이션 · Attack",
          "path": "presentation.animations.Attack.direction",
          "label": "방향 계약",
          "kind": "select",
          "unit": "",
          "help": "",
          "readonly": false,
          "options": [
            "East",
            "Omni"
          ],
          "attack_kinds": [
            "TargetedGroundEruption",
            "FanVolleyProjectile",
            "ContactMelee"
          ]
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
          "step": 1,
          "attack_kinds": [
            "TargetedGroundEruption",
            "FanVolleyProjectile",
            "ContactMelee"
          ]
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
          "step": 1,
          "attack_kinds": [
            "TargetedGroundEruption",
            "FanVolleyProjectile",
            "ContactMelee"
          ]
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
          "readonly": false,
          "attack_kinds": [
            "TargetedGroundEruption"
          ]
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
          "step": 1,
          "attack_kinds": [
            "TargetedGroundEruption"
          ]
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
          "step": 0.1,
          "attack_kinds": [
            "TargetedGroundEruption"
          ]
        },
        {
          "group": "애니메이션 · VineEruption",
          "path": "presentation.animations.VineEruption.loop",
          "label": "반복 재생",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false,
          "attack_kinds": [
            "TargetedGroundEruption"
          ]
        },
        {
          "group": "애니메이션 · VineEruption",
          "path": "presentation.animations.VineEruption.direction",
          "label": "방향 계약",
          "kind": "select",
          "unit": "",
          "help": "",
          "readonly": false,
          "options": [
            "East",
            "Omni"
          ],
          "attack_kinds": [
            "TargetedGroundEruption"
          ]
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
          "step": 1,
          "attack_kinds": [
            "TargetedGroundEruption"
          ]
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
          "step": 1,
          "attack_kinds": [
            "TargetedGroundEruption"
          ]
        }
      ]
    },
    {
      "name": "애니메이션 · IdleHover",
      "fields": [
        {
          "group": "애니메이션 · IdleHover",
          "path": "presentation.animations.IdleHover.asset_id",
          "label": "Roblox 아틀라스 ID",
          "kind": "asset-id",
          "unit": "",
          "help": "",
          "readonly": false,
          "attack_kinds": [
            "TelegraphedLinearDash"
          ]
        },
        {
          "group": "애니메이션 · IdleHover",
          "path": "presentation.animations.IdleHover.frame_count",
          "label": "프레임 수",
          "kind": "integer",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 64,
          "step": 1,
          "attack_kinds": [
            "TelegraphedLinearDash"
          ]
        },
        {
          "group": "애니메이션 · IdleHover",
          "path": "presentation.animations.IdleHover.fps",
          "label": "기본 FPS",
          "kind": "number",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 0.1,
          "maximum": 60,
          "step": 0.1,
          "attack_kinds": [
            "TelegraphedLinearDash"
          ]
        },
        {
          "group": "애니메이션 · IdleHover",
          "path": "presentation.animations.IdleHover.loop",
          "label": "반복 재생",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false,
          "attack_kinds": [
            "TelegraphedLinearDash"
          ]
        },
        {
          "group": "애니메이션 · IdleHover",
          "path": "presentation.animations.IdleHover.direction",
          "label": "방향 계약",
          "kind": "select",
          "unit": "",
          "help": "",
          "readonly": false,
          "options": [
            "East",
            "Omni"
          ],
          "attack_kinds": [
            "TelegraphedLinearDash"
          ]
        },
        {
          "group": "애니메이션 · IdleHover",
          "path": "presentation.animations.IdleHover.cell_width",
          "label": "셀 너비",
          "kind": "integer",
          "unit": "px",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 4096,
          "step": 1,
          "attack_kinds": [
            "TelegraphedLinearDash"
          ]
        },
        {
          "group": "애니메이션 · IdleHover",
          "path": "presentation.animations.IdleHover.cell_height",
          "label": "셀 높이",
          "kind": "integer",
          "unit": "px",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 4096,
          "step": 1,
          "attack_kinds": [
            "TelegraphedLinearDash"
          ]
        }
      ]
    },
    {
      "name": "애니메이션 · MorphSpin",
      "fields": [
        {
          "group": "애니메이션 · MorphSpin",
          "path": "presentation.animations.MorphSpin.asset_id",
          "label": "Roblox 아틀라스 ID",
          "kind": "asset-id",
          "unit": "",
          "help": "",
          "readonly": false,
          "attack_kinds": [
            "TelegraphedLinearDash"
          ]
        },
        {
          "group": "애니메이션 · MorphSpin",
          "path": "presentation.animations.MorphSpin.frame_count",
          "label": "프레임 수",
          "kind": "integer",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 64,
          "step": 1,
          "attack_kinds": [
            "TelegraphedLinearDash"
          ]
        },
        {
          "group": "애니메이션 · MorphSpin",
          "path": "presentation.animations.MorphSpin.fps",
          "label": "기본 FPS",
          "kind": "number",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 0.1,
          "maximum": 60,
          "step": 0.1,
          "attack_kinds": [
            "TelegraphedLinearDash"
          ]
        },
        {
          "group": "애니메이션 · MorphSpin",
          "path": "presentation.animations.MorphSpin.loop",
          "label": "반복 재생",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false,
          "attack_kinds": [
            "TelegraphedLinearDash"
          ]
        },
        {
          "group": "애니메이션 · MorphSpin",
          "path": "presentation.animations.MorphSpin.direction",
          "label": "방향 계약",
          "kind": "select",
          "unit": "",
          "help": "",
          "readonly": false,
          "options": [
            "East",
            "Omni"
          ],
          "attack_kinds": [
            "TelegraphedLinearDash"
          ]
        },
        {
          "group": "애니메이션 · MorphSpin",
          "path": "presentation.animations.MorphSpin.cell_width",
          "label": "셀 너비",
          "kind": "integer",
          "unit": "px",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 4096,
          "step": 1,
          "attack_kinds": [
            "TelegraphedLinearDash"
          ]
        },
        {
          "group": "애니메이션 · MorphSpin",
          "path": "presentation.animations.MorphSpin.cell_height",
          "label": "셀 높이",
          "kind": "integer",
          "unit": "px",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 4096,
          "step": 1,
          "attack_kinds": [
            "TelegraphedLinearDash"
          ]
        }
      ]
    },
    {
      "name": "애니메이션 · OrbDash",
      "fields": [
        {
          "group": "애니메이션 · OrbDash",
          "path": "presentation.animations.OrbDash.asset_id",
          "label": "Roblox 아틀라스 ID",
          "kind": "asset-id",
          "unit": "",
          "help": "",
          "readonly": false,
          "attack_kinds": [
            "TelegraphedLinearDash"
          ]
        },
        {
          "group": "애니메이션 · OrbDash",
          "path": "presentation.animations.OrbDash.frame_count",
          "label": "프레임 수",
          "kind": "integer",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 64,
          "step": 1,
          "attack_kinds": [
            "TelegraphedLinearDash"
          ]
        },
        {
          "group": "애니메이션 · OrbDash",
          "path": "presentation.animations.OrbDash.fps",
          "label": "기본 FPS",
          "kind": "number",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 0.1,
          "maximum": 60,
          "step": 0.1,
          "attack_kinds": [
            "TelegraphedLinearDash"
          ]
        },
        {
          "group": "애니메이션 · OrbDash",
          "path": "presentation.animations.OrbDash.loop",
          "label": "반복 재생",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false,
          "attack_kinds": [
            "TelegraphedLinearDash"
          ]
        },
        {
          "group": "애니메이션 · OrbDash",
          "path": "presentation.animations.OrbDash.direction",
          "label": "방향 계약",
          "kind": "select",
          "unit": "",
          "help": "",
          "readonly": false,
          "options": [
            "East",
            "Omni"
          ],
          "attack_kinds": [
            "TelegraphedLinearDash"
          ]
        },
        {
          "group": "애니메이션 · OrbDash",
          "path": "presentation.animations.OrbDash.cell_width",
          "label": "셀 너비",
          "kind": "integer",
          "unit": "px",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 4096,
          "step": 1,
          "attack_kinds": [
            "TelegraphedLinearDash"
          ]
        },
        {
          "group": "애니메이션 · OrbDash",
          "path": "presentation.animations.OrbDash.cell_height",
          "label": "셀 높이",
          "kind": "integer",
          "unit": "px",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 4096,
          "step": 1,
          "attack_kinds": [
            "TelegraphedLinearDash"
          ]
        }
      ]
    },
    {
      "name": "애니메이션 · AttackAnticipation",
      "fields": [
        {
          "group": "애니메이션 · AttackAnticipation",
          "path": "presentation.animations.AttackAnticipation.asset_id",
          "label": "Roblox 아틀라스 ID",
          "kind": "asset-id",
          "unit": "",
          "help": "",
          "readonly": false,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "애니메이션 · AttackAnticipation",
          "path": "presentation.animations.AttackAnticipation.frame_count",
          "label": "프레임 수",
          "kind": "integer",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 64,
          "step": 1,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "애니메이션 · AttackAnticipation",
          "path": "presentation.animations.AttackAnticipation.fps",
          "label": "기본 FPS",
          "kind": "number",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 0.1,
          "maximum": 60,
          "step": 0.1,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "애니메이션 · AttackAnticipation",
          "path": "presentation.animations.AttackAnticipation.loop",
          "label": "반복 재생",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "애니메이션 · AttackAnticipation",
          "path": "presentation.animations.AttackAnticipation.direction",
          "label": "방향 계약",
          "kind": "select",
          "unit": "",
          "help": "",
          "readonly": false,
          "options": [
            "East",
            "Omni"
          ],
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "애니메이션 · AttackAnticipation",
          "path": "presentation.animations.AttackAnticipation.cell_width",
          "label": "셀 너비",
          "kind": "integer",
          "unit": "px",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 4096,
          "step": 1,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "애니메이션 · AttackAnticipation",
          "path": "presentation.animations.AttackAnticipation.cell_height",
          "label": "셀 높이",
          "kind": "integer",
          "unit": "px",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 4096,
          "step": 1,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        }
      ]
    },
    {
      "name": "애니메이션 · AttackAirborne",
      "fields": [
        {
          "group": "애니메이션 · AttackAirborne",
          "path": "presentation.animations.AttackAirborne.asset_id",
          "label": "Roblox 아틀라스 ID",
          "kind": "asset-id",
          "unit": "",
          "help": "",
          "readonly": false,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "애니메이션 · AttackAirborne",
          "path": "presentation.animations.AttackAirborne.frame_count",
          "label": "프레임 수",
          "kind": "integer",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 64,
          "step": 1,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "애니메이션 · AttackAirborne",
          "path": "presentation.animations.AttackAirborne.fps",
          "label": "기본 FPS",
          "kind": "number",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 0.1,
          "maximum": 60,
          "step": 0.1,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "애니메이션 · AttackAirborne",
          "path": "presentation.animations.AttackAirborne.loop",
          "label": "반복 재생",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "애니메이션 · AttackAirborne",
          "path": "presentation.animations.AttackAirborne.direction",
          "label": "방향 계약",
          "kind": "select",
          "unit": "",
          "help": "",
          "readonly": false,
          "options": [
            "East",
            "Omni"
          ],
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "애니메이션 · AttackAirborne",
          "path": "presentation.animations.AttackAirborne.cell_width",
          "label": "셀 너비",
          "kind": "integer",
          "unit": "px",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 4096,
          "step": 1,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "애니메이션 · AttackAirborne",
          "path": "presentation.animations.AttackAirborne.cell_height",
          "label": "셀 높이",
          "kind": "integer",
          "unit": "px",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 4096,
          "step": 1,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        }
      ]
    },
    {
      "name": "애니메이션 · AttackLand",
      "fields": [
        {
          "group": "애니메이션 · AttackLand",
          "path": "presentation.animations.AttackLand.asset_id",
          "label": "Roblox 아틀라스 ID",
          "kind": "asset-id",
          "unit": "",
          "help": "",
          "readonly": false,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "애니메이션 · AttackLand",
          "path": "presentation.animations.AttackLand.frame_count",
          "label": "프레임 수",
          "kind": "integer",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 64,
          "step": 1,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "애니메이션 · AttackLand",
          "path": "presentation.animations.AttackLand.fps",
          "label": "기본 FPS",
          "kind": "number",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 0.1,
          "maximum": 60,
          "step": 0.1,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "애니메이션 · AttackLand",
          "path": "presentation.animations.AttackLand.loop",
          "label": "반복 재생",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "애니메이션 · AttackLand",
          "path": "presentation.animations.AttackLand.direction",
          "label": "방향 계약",
          "kind": "select",
          "unit": "",
          "help": "",
          "readonly": false,
          "options": [
            "East",
            "Omni"
          ],
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "애니메이션 · AttackLand",
          "path": "presentation.animations.AttackLand.cell_width",
          "label": "셀 너비",
          "kind": "integer",
          "unit": "px",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 4096,
          "step": 1,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "애니메이션 · AttackLand",
          "path": "presentation.animations.AttackLand.cell_height",
          "label": "셀 높이",
          "kind": "integer",
          "unit": "px",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 4096,
          "step": 1,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        }
      ]
    },
    {
      "name": "애니메이션 · Hit",
      "fields": [
        {
          "group": "애니메이션 · Hit",
          "path": "presentation.animations.Hit.asset_id",
          "label": "Roblox 아틀라스 ID",
          "kind": "asset-id",
          "unit": "",
          "help": "",
          "readonly": false,
          "attack_kinds": [
            "FanVolleyProjectile",
            "TelegraphedLeapSlam",
            "ContactMelee"
          ]
        },
        {
          "group": "애니메이션 · Hit",
          "path": "presentation.animations.Hit.frame_count",
          "label": "프레임 수",
          "kind": "integer",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 64,
          "step": 1,
          "attack_kinds": [
            "FanVolleyProjectile",
            "TelegraphedLeapSlam",
            "ContactMelee"
          ]
        },
        {
          "group": "애니메이션 · Hit",
          "path": "presentation.animations.Hit.fps",
          "label": "기본 FPS",
          "kind": "number",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 0.1,
          "maximum": 60,
          "step": 0.1,
          "attack_kinds": [
            "FanVolleyProjectile",
            "TelegraphedLeapSlam",
            "ContactMelee"
          ]
        },
        {
          "group": "애니메이션 · Hit",
          "path": "presentation.animations.Hit.loop",
          "label": "반복 재생",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false,
          "attack_kinds": [
            "FanVolleyProjectile",
            "TelegraphedLeapSlam",
            "ContactMelee"
          ]
        },
        {
          "group": "애니메이션 · Hit",
          "path": "presentation.animations.Hit.direction",
          "label": "방향 계약",
          "kind": "select",
          "unit": "",
          "help": "",
          "readonly": false,
          "options": [
            "East",
            "Omni"
          ],
          "attack_kinds": [
            "FanVolleyProjectile",
            "TelegraphedLeapSlam",
            "ContactMelee"
          ]
        },
        {
          "group": "애니메이션 · Hit",
          "path": "presentation.animations.Hit.cell_width",
          "label": "셀 너비",
          "kind": "integer",
          "unit": "px",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 4096,
          "step": 1,
          "attack_kinds": [
            "FanVolleyProjectile",
            "TelegraphedLeapSlam",
            "ContactMelee"
          ]
        },
        {
          "group": "애니메이션 · Hit",
          "path": "presentation.animations.Hit.cell_height",
          "label": "셀 높이",
          "kind": "integer",
          "unit": "px",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 4096,
          "step": 1,
          "attack_kinds": [
            "FanVolleyProjectile",
            "TelegraphedLeapSlam",
            "ContactMelee"
          ]
        }
      ]
    },
    {
      "name": "애니메이션 · Death",
      "fields": [
        {
          "group": "애니메이션 · Death",
          "path": "presentation.animations.Death.asset_id",
          "label": "Roblox 아틀라스 ID",
          "kind": "asset-id",
          "unit": "",
          "help": "",
          "readonly": false,
          "attack_kinds": [
            "FanVolleyProjectile",
            "TelegraphedLeapSlam",
            "ContactMelee"
          ]
        },
        {
          "group": "애니메이션 · Death",
          "path": "presentation.animations.Death.frame_count",
          "label": "프레임 수",
          "kind": "integer",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 64,
          "step": 1,
          "attack_kinds": [
            "FanVolleyProjectile",
            "TelegraphedLeapSlam",
            "ContactMelee"
          ]
        },
        {
          "group": "애니메이션 · Death",
          "path": "presentation.animations.Death.fps",
          "label": "기본 FPS",
          "kind": "number",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 0.1,
          "maximum": 60,
          "step": 0.1,
          "attack_kinds": [
            "FanVolleyProjectile",
            "TelegraphedLeapSlam",
            "ContactMelee"
          ]
        },
        {
          "group": "애니메이션 · Death",
          "path": "presentation.animations.Death.loop",
          "label": "반복 재생",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false,
          "attack_kinds": [
            "FanVolleyProjectile",
            "TelegraphedLeapSlam",
            "ContactMelee"
          ]
        },
        {
          "group": "애니메이션 · Death",
          "path": "presentation.animations.Death.direction",
          "label": "방향 계약",
          "kind": "select",
          "unit": "",
          "help": "",
          "readonly": false,
          "options": [
            "East",
            "Omni"
          ],
          "attack_kinds": [
            "FanVolleyProjectile",
            "TelegraphedLeapSlam",
            "ContactMelee"
          ]
        },
        {
          "group": "애니메이션 · Death",
          "path": "presentation.animations.Death.cell_width",
          "label": "셀 너비",
          "kind": "integer",
          "unit": "px",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 4096,
          "step": 1,
          "attack_kinds": [
            "FanVolleyProjectile",
            "TelegraphedLeapSlam",
            "ContactMelee"
          ]
        },
        {
          "group": "애니메이션 · Death",
          "path": "presentation.animations.Death.cell_height",
          "label": "셀 높이",
          "kind": "integer",
          "unit": "px",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 4096,
          "step": 1,
          "attack_kinds": [
            "FanVolleyProjectile",
            "TelegraphedLeapSlam",
            "ContactMelee"
          ]
        }
      ]
    },
    {
      "name": "애니메이션 · Projectile",
      "fields": [
        {
          "group": "애니메이션 · Projectile",
          "path": "presentation.animations.Projectile.asset_id",
          "label": "Roblox 아틀라스 ID",
          "kind": "asset-id",
          "unit": "",
          "help": "",
          "readonly": false,
          "attack_kinds": [
            "FanVolleyProjectile"
          ]
        },
        {
          "group": "애니메이션 · Projectile",
          "path": "presentation.animations.Projectile.frame_count",
          "label": "프레임 수",
          "kind": "integer",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 64,
          "step": 1,
          "attack_kinds": [
            "FanVolleyProjectile"
          ]
        },
        {
          "group": "애니메이션 · Projectile",
          "path": "presentation.animations.Projectile.fps",
          "label": "기본 FPS",
          "kind": "number",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 0.1,
          "maximum": 60,
          "step": 0.1,
          "attack_kinds": [
            "FanVolleyProjectile"
          ]
        },
        {
          "group": "애니메이션 · Projectile",
          "path": "presentation.animations.Projectile.loop",
          "label": "반복 재생",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false,
          "attack_kinds": [
            "FanVolleyProjectile"
          ]
        },
        {
          "group": "애니메이션 · Projectile",
          "path": "presentation.animations.Projectile.direction",
          "label": "방향 계약",
          "kind": "select",
          "unit": "",
          "help": "",
          "readonly": false,
          "options": [
            "East",
            "Omni"
          ],
          "attack_kinds": [
            "FanVolleyProjectile"
          ]
        },
        {
          "group": "애니메이션 · Projectile",
          "path": "presentation.animations.Projectile.cell_width",
          "label": "셀 너비",
          "kind": "integer",
          "unit": "px",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 4096,
          "step": 1,
          "attack_kinds": [
            "FanVolleyProjectile"
          ]
        },
        {
          "group": "애니메이션 · Projectile",
          "path": "presentation.animations.Projectile.cell_height",
          "label": "셀 높이",
          "kind": "integer",
          "unit": "px",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 4096,
          "step": 1,
          "attack_kinds": [
            "FanVolleyProjectile"
          ]
        }
      ]
    },
    {
      "name": "애니메이션 · ImpactFX",
      "fields": [
        {
          "group": "애니메이션 · ImpactFX",
          "path": "presentation.animations.ImpactFX.asset_id",
          "label": "Roblox 아틀라스 ID",
          "kind": "asset-id",
          "unit": "",
          "help": "",
          "readonly": false,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "애니메이션 · ImpactFX",
          "path": "presentation.animations.ImpactFX.frame_count",
          "label": "프레임 수",
          "kind": "integer",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 64,
          "step": 1,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "애니메이션 · ImpactFX",
          "path": "presentation.animations.ImpactFX.fps",
          "label": "기본 FPS",
          "kind": "number",
          "unit": "",
          "help": "",
          "readonly": false,
          "minimum": 0.1,
          "maximum": 60,
          "step": 0.1,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "애니메이션 · ImpactFX",
          "path": "presentation.animations.ImpactFX.loop",
          "label": "반복 재생",
          "kind": "boolean",
          "unit": "",
          "help": "",
          "readonly": false,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "애니메이션 · ImpactFX",
          "path": "presentation.animations.ImpactFX.direction",
          "label": "방향 계약",
          "kind": "select",
          "unit": "",
          "help": "",
          "readonly": false,
          "options": [
            "East",
            "Omni"
          ],
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "애니메이션 · ImpactFX",
          "path": "presentation.animations.ImpactFX.cell_width",
          "label": "셀 너비",
          "kind": "integer",
          "unit": "px",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 4096,
          "step": 1,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        },
        {
          "group": "애니메이션 · ImpactFX",
          "path": "presentation.animations.ImpactFX.cell_height",
          "label": "셀 높이",
          "kind": "integer",
          "unit": "px",
          "help": "",
          "readonly": false,
          "minimum": 1,
          "maximum": 4096,
          "step": 1,
          "attack_kinds": [
            "TelegraphedLeapSlam"
          ]
        }
      ]
    }
  ],
  "monsters": [
    {
      "id": "grass_vine_monster",
      "enabled": true,
      "size_scale": 1,
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
      "death_spawn": {
        "enabled": false,
        "child_monster_id": "",
        "count": 1,
        "trigger_frame_zero_based": 0,
        "spawn_radius_studs": 1,
        "activation_delay_seconds": 0,
        "target_policy": "Nearest",
        "child_should_respawn": false,
        "inherit_home": false
      },
      "lifecycle": {
        "corpse_seconds": 1.5,
        "despawn_distance": 135,
        "out_of_combat_regen_per_second": 0,
        "regen_delay_seconds": 8
      },
      "presentation": {
        "concept_art_path": "Assets/Monsters/Representatives/grass_vine_monster_representative_v1.png",
        "display_width_studs": 8,
        "display_height_studs": 8,
        "billboard_pixels_per_stud": 24,
        "max_render_distance_studs": 512,
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
            "direction": "East",
            "cell_width": 128,
            "cell_height": 128
          },
          "Walk": {
            "asset_id": "rbxassetid://107187794762078",
            "frame_count": 8,
            "fps": 8,
            "loop": true,
            "direction": "East",
            "cell_width": 128,
            "cell_height": 128
          },
          "Attack": {
            "asset_id": "rbxassetid://131929246544297",
            "frame_count": 8,
            "fps": 8,
            "loop": false,
            "direction": "East",
            "cell_width": 128,
            "cell_height": 128
          },
          "VineEruption": {
            "asset_id": "rbxassetid://134802000415635",
            "frame_count": 8,
            "fps": 8,
            "loop": false,
            "direction": "Omni",
            "cell_width": 128,
            "cell_height": 128
          }
        }
      },
      "concept_art_url": "./monster-media/grass_vine_monster.png?v=f2260ed76c13"
    },
    {
      "id": "whirl_dash_spirit",
      "enabled": true,
      "size_scale": 1,
      "identity": {
        "display_name": "회오리 돌진령",
        "description": "목표 위치를 직선으로 예고한 뒤 에너지 구체로 변해 고정된 경로를 빠르게 돌진하는 바람 정령",
        "element": "Wind",
        "species": "Spirit",
        "faction": "Wild",
        "tier": "Normal",
        "level": 1,
        "tags": [
          "Spirit",
          "LinearDash",
          "TelegraphedAttack"
        ]
      },
      "stats": {
        "max_health": 90,
        "attack_power": 24,
        "defense": 1,
        "knockback_resistance": 0.15
      },
      "detection": {
        "search_range": 48,
        "lose_target_range": 64,
        "target_refresh_seconds": 0.2,
        "field_of_view_degrees": 360,
        "require_line_of_sight": false,
        "hearing_enabled": true,
        "hearing_range": 15
      },
      "movement": {
        "walk_speed": 7,
        "chase_speed": 10,
        "use_pathfinding": true,
        "repath_interval_seconds": 0.6,
        "waypoint_spacing": 4,
        "agent_radius": 1.8,
        "agent_height": 4.2,
        "agent_can_jump": false,
        "agent_can_climb": false,
        "leash_range": 80,
        "return_home_distance": 5,
        "stuck_timeout_seconds": 2.5,
        "path_retry_limit": 2
      },
      "behavior": {
        "ai_tick_seconds": 0.08,
        "target_policy": "Nearest",
        "can_switch_targets": true,
        "switch_target_advantage": 6,
        "forget_target_seconds": 2.5,
        "return_home_enabled": true
      },
      "attack": {
        "kind": "TelegraphedLinearDash",
        "minimum_range": 0,
        "maximum_range": 30,
        "damage_multiplier": 1,
        "flat_damage_bonus": 0,
        "telegraph_duration_seconds": 0.6667,
        "attack_speed_multiplier": 1,
        "effect_speed_multiplier": 1,
        "attack_interval_seconds": 3.2,
        "cooldown_seconds": 1.35,
        "recovery_seconds": 0.6667,
        "lock_target_position": true,
        "can_move_while_casting": false,
        "require_line_of_sight": true,
        "knockback_force": 14,
        "vertical_knockback_force": 2,
        "maximum_targets": 0,
        "dash_speed_studs_per_second": 48,
        "dash_width_studs": 4.5,
        "dash_hit_height_studs": 5,
        "minimum_dash_distance_studs": 6,
        "maximum_dash_seconds": 0.7,
        "obstacle_clearance_studs": 1.25,
        "stop_at_obstacle": true
      },
      "spawn": {
        "enabled": false,
        "initial_count": 0,
        "maximum_alive": 3,
        "respawn_seconds": 8,
        "random_radius": 0,
        "minimum_player_distance": 0,
        "positions": [
          [
            0,
            0,
            0
          ]
        ]
      },
      "death_spawn": {
        "enabled": false,
        "child_monster_id": "",
        "count": 1,
        "trigger_frame_zero_based": 0,
        "spawn_radius_studs": 1,
        "activation_delay_seconds": 0,
        "target_policy": "Nearest",
        "child_should_respawn": false,
        "inherit_home": false
      },
      "lifecycle": {
        "corpse_seconds": 1.5,
        "despawn_distance": 135,
        "out_of_combat_regen_per_second": 0,
        "regen_delay_seconds": 8
      },
      "presentation": {
        "concept_art_path": "Assets/Monsters/Concepts/whirl_dash_spirit_anchor_v1.png",
        "display_width_studs": 6.5,
        "display_height_studs": 6.5,
        "billboard_pixels_per_stud": 24,
        "max_render_distance_studs": 512,
        "billboard_offset_y": 4.1,
        "show_health_bar": true,
        "show_nameplate": true,
        "health_bar_height_pixels": 7,
        "collision_radius": 1.55,
        "collision_height": 3.8,
        "telegraph_color": "#E63946",
        "telegraph_transparency": 0.38,
        "telegraph_thickness": 0.12,
        "hover_height_studs": 1.35,
        "animations": {
          "IdleHover": {
            "asset_id": "rbxassetid://80031662012390",
            "frame_count": 8,
            "fps": 8,
            "loop": true,
            "direction": "East",
            "cell_width": 128,
            "cell_height": 128
          },
          "MorphSpin": {
            "asset_id": "rbxassetid://113501843207408",
            "frame_count": 10,
            "fps": 15,
            "loop": false,
            "direction": "East",
            "cell_width": 128,
            "cell_height": 128
          },
          "OrbDash": {
            "asset_id": "rbxassetid://103922677520779",
            "frame_count": 6,
            "fps": 18,
            "loop": true,
            "direction": "Omni",
            "cell_width": 128,
            "cell_height": 128
          }
        }
      },
      "concept_art_url": "./monster-media/whirl_dash_spirit.png?v=dd0314752d5f"
    },
    {
      "id": "fanburst_artillery",
      "enabled": true,
      "size_scale": 1,
      "identity": {
        "display_name": "부채탄 포대충",
        "description": "등 위의 단일 포신에서 밝은 에너지 구 다섯 발을 부채꼴로 세 차례 발사하는 느린 포대형 몬스터",
        "element": "Neutral",
        "species": "Construct",
        "faction": "Wild",
        "tier": "Normal",
        "level": 1,
        "tags": [
          "Artillery",
          "FanVolley",
          "Projectile"
        ]
      },
      "stats": {
        "max_health": 140,
        "attack_power": 15,
        "defense": 4,
        "knockback_resistance": 0.35
      },
      "detection": {
        "search_range": 50,
        "lose_target_range": 68,
        "target_refresh_seconds": 0.2,
        "field_of_view_degrees": 360,
        "require_line_of_sight": false,
        "hearing_enabled": true,
        "hearing_range": 15
      },
      "movement": {
        "walk_speed": 5,
        "chase_speed": 7,
        "use_pathfinding": true,
        "repath_interval_seconds": 0.6,
        "waypoint_spacing": 4,
        "agent_radius": 1.8,
        "agent_height": 3.8,
        "agent_can_jump": false,
        "agent_can_climb": false,
        "leash_range": 82,
        "return_home_distance": 5,
        "stuck_timeout_seconds": 2.5,
        "path_retry_limit": 2
      },
      "behavior": {
        "ai_tick_seconds": 0.08,
        "target_policy": "Nearest",
        "can_switch_targets": true,
        "switch_target_advantage": 6,
        "forget_target_seconds": 2.5,
        "return_home_enabled": true
      },
      "attack": {
        "kind": "FanVolleyProjectile",
        "minimum_range": 7,
        "maximum_range": 32,
        "damage_multiplier": 0.85,
        "flat_damage_bonus": 0,
        "telegraph_duration_seconds": 0.2,
        "attack_speed_multiplier": 1,
        "effect_speed_multiplier": 1,
        "attack_interval_seconds": 4,
        "cooldown_seconds": 1.2,
        "recovery_seconds": 0.35,
        "lock_target_position": true,
        "can_move_while_casting": false,
        "require_line_of_sight": true,
        "knockback_force": 8,
        "vertical_knockback_force": 1,
        "maximum_targets": 0,
        "volley_count": 3,
        "projectiles_per_volley": 5,
        "volley_interval_seconds": 0.2,
        "spread_angle_degrees": 48,
        "projectile_speed_studs_per_second": 28,
        "projectile_lifetime_seconds": 1.25,
        "projectile_radius_studs": 0.65,
        "projectile_spawn_forward_studs": 1.3,
        "projectile_spawn_height_studs": 2.2,
        "projectile_pierce_count": 0,
        "destroy_on_obstacle": true,
        "dedupe_target_per_volley": true
      },
      "spawn": {
        "enabled": false,
        "initial_count": 0,
        "maximum_alive": 3,
        "respawn_seconds": 8,
        "random_radius": 0,
        "minimum_player_distance": 0,
        "positions": [
          [
            0,
            0,
            0
          ]
        ]
      },
      "death_spawn": {
        "enabled": false,
        "child_monster_id": "",
        "count": 1,
        "trigger_frame_zero_based": 0,
        "spawn_radius_studs": 1,
        "activation_delay_seconds": 0,
        "target_policy": "Nearest",
        "child_should_respawn": false,
        "inherit_home": false
      },
      "lifecycle": {
        "corpse_seconds": 1.25,
        "despawn_distance": 135,
        "out_of_combat_regen_per_second": 0,
        "regen_delay_seconds": 8
      },
      "presentation": {
        "concept_art_path": "Assets/Monsters/Concepts/fanburst_artillery_anchor_v1.png",
        "display_width_studs": 6.6,
        "display_height_studs": 6.6,
        "billboard_pixels_per_stud": 24,
        "max_render_distance_studs": 512,
        "billboard_offset_y": 3.15,
        "show_health_bar": true,
        "show_nameplate": true,
        "health_bar_height_pixels": 7,
        "collision_radius": 1.7,
        "collision_height": 3.6,
        "telegraph_color": "#E63946",
        "telegraph_transparency": 0.38,
        "telegraph_thickness": 0.12,
        "projectile_width_studs": 2.1,
        "projectile_height_studs": 2.1,
        "projectile_offset_y": 0,
        "animations": {
          "Idle": {
            "asset_id": "rbxassetid://79032332603164",
            "frame_count": 8,
            "fps": 8,
            "loop": true,
            "direction": "East",
            "cell_width": 128,
            "cell_height": 128
          },
          "Walk": {
            "asset_id": "rbxassetid://102235991715580",
            "frame_count": 8,
            "fps": 10,
            "loop": true,
            "direction": "East",
            "cell_width": 128,
            "cell_height": 128
          },
          "Attack": {
            "asset_id": "rbxassetid://93830802283521",
            "frame_count": 12,
            "fps": 15,
            "loop": false,
            "direction": "East",
            "cell_width": 128,
            "cell_height": 128
          },
          "Hit": {
            "asset_id": "rbxassetid://99300168812720",
            "frame_count": 6,
            "fps": 15,
            "loop": false,
            "direction": "East",
            "cell_width": 128,
            "cell_height": 128
          },
          "Death": {
            "asset_id": "rbxassetid://91024462381150",
            "frame_count": 12,
            "fps": 12,
            "loop": false,
            "direction": "East",
            "cell_width": 128,
            "cell_height": 128
          },
          "Projectile": {
            "asset_id": "rbxassetid://135685269583200",
            "frame_count": 6,
            "fps": 18,
            "loop": true,
            "direction": "Omni",
            "cell_width": 128,
            "cell_height": 128
          }
        }
      },
      "concept_art_url": "./monster-media/fanburst_artillery.png?v=315af1d579d5"
    },
    {
      "id": "stampfoot_leaper",
      "enabled": true,
      "size_scale": 1,
      "identity": {
        "display_name": "도장발 쿵귀",
        "description": "한 발로 통통 추적하다 몸을 움츠리고 높이 도약해 예고한 바닥을 찍는 고대 도장 정령",
        "element": "Earth",
        "species": "Construct",
        "faction": "Wild",
        "tier": "Normal",
        "level": 1,
        "tags": [
          "Leaper",
          "Slam",
          "SingleFoot"
        ]
      },
      "stats": {
        "max_health": 165,
        "attack_power": 24,
        "defense": 6,
        "knockback_resistance": 0.55
      },
      "detection": {
        "search_range": 42,
        "lose_target_range": 58,
        "target_refresh_seconds": 0.2,
        "field_of_view_degrees": 360,
        "require_line_of_sight": false,
        "hearing_enabled": true,
        "hearing_range": 12
      },
      "movement": {
        "walk_speed": 4.5,
        "chase_speed": 6.5,
        "use_pathfinding": true,
        "repath_interval_seconds": 0.6,
        "waypoint_spacing": 4,
        "agent_radius": 1.8,
        "agent_height": 3.8,
        "agent_can_jump": false,
        "agent_can_climb": false,
        "leash_range": 80,
        "return_home_distance": 5,
        "stuck_timeout_seconds": 2.5,
        "path_retry_limit": 2
      },
      "behavior": {
        "ai_tick_seconds": 0.08,
        "target_policy": "Nearest",
        "can_switch_targets": true,
        "switch_target_advantage": 6,
        "forget_target_seconds": 2.5,
        "return_home_enabled": true
      },
      "attack": {
        "kind": "TelegraphedLeapSlam",
        "minimum_range": 2.5,
        "maximum_range": 13,
        "damage_multiplier": 1,
        "flat_damage_bonus": 0,
        "telegraph_duration_seconds": 0.75,
        "attack_speed_multiplier": 1,
        "effect_speed_multiplier": 1,
        "attack_interval_seconds": 4.2,
        "cooldown_seconds": 1.1,
        "recovery_seconds": 0.55,
        "lock_target_position": true,
        "can_move_while_casting": false,
        "require_line_of_sight": true,
        "knockback_force": 18,
        "vertical_knockback_force": 24,
        "maximum_targets": 0,
        "leap_height_studs": 14,
        "leap_duration_seconds": 0.7,
        "landing_radius_studs": 5.75,
        "ground_probe_height_studs": 32,
        "ground_probe_depth_studs": 96,
        "maximum_landing_slope_degrees": 35,
        "arc_collision_samples": 12,
        "cancel_when_arc_blocked": true
      },
      "spawn": {
        "enabled": false,
        "initial_count": 0,
        "maximum_alive": 3,
        "respawn_seconds": 8,
        "random_radius": 0,
        "minimum_player_distance": 0,
        "positions": [
          [
            0,
            0,
            0
          ]
        ]
      },
      "death_spawn": {
        "enabled": false,
        "child_monster_id": "",
        "count": 1,
        "trigger_frame_zero_based": 0,
        "spawn_radius_studs": 1,
        "activation_delay_seconds": 0,
        "target_policy": "Nearest",
        "child_should_respawn": false,
        "inherit_home": false
      },
      "lifecycle": {
        "corpse_seconds": 1.1,
        "despawn_distance": 135,
        "out_of_combat_regen_per_second": 0,
        "regen_delay_seconds": 8
      },
      "presentation": {
        "concept_art_path": "Assets/Monsters/Concepts/stampfoot_leaper_anchor_v1.png",
        "display_width_studs": 6.2,
        "display_height_studs": 6.2,
        "billboard_pixels_per_stud": 24,
        "max_render_distance_studs": 512,
        "billboard_offset_y": 3,
        "show_health_bar": true,
        "show_nameplate": true,
        "health_bar_height_pixels": 7,
        "collision_radius": 1.65,
        "collision_height": 3.5,
        "telegraph_color": "#E63946",
        "telegraph_transparency": 0.38,
        "telegraph_thickness": 0.12,
        "impact_width_studs": 12,
        "impact_height_studs": 6,
        "impact_offset_y": 1.2,
        "animations": {
          "Idle": {
            "asset_id": "rbxassetid://104835741415212",
            "frame_count": 8,
            "fps": 8,
            "loop": true,
            "direction": "East",
            "cell_width": 128,
            "cell_height": 128
          },
          "Walk": {
            "asset_id": "rbxassetid://100769989791111",
            "frame_count": 8,
            "fps": 10,
            "loop": true,
            "direction": "East",
            "cell_width": 128,
            "cell_height": 128
          },
          "AttackAnticipation": {
            "asset_id": "rbxassetid://133480601703283",
            "frame_count": 8,
            "fps": 12,
            "loop": false,
            "direction": "East",
            "cell_width": 128,
            "cell_height": 128
          },
          "AttackAirborne": {
            "asset_id": "rbxassetid://110312104598785",
            "frame_count": 6,
            "fps": 12,
            "loop": false,
            "direction": "East",
            "cell_width": 128,
            "cell_height": 128
          },
          "AttackLand": {
            "asset_id": "rbxassetid://83859948452133",
            "frame_count": 8,
            "fps": 16,
            "loop": false,
            "direction": "East",
            "cell_width": 128,
            "cell_height": 128
          },
          "Hit": {
            "asset_id": "rbxassetid://116295221788321",
            "frame_count": 6,
            "fps": 15,
            "loop": false,
            "direction": "East",
            "cell_width": 128,
            "cell_height": 128
          },
          "Death": {
            "asset_id": "rbxassetid://92093220183664",
            "frame_count": 12,
            "fps": 12,
            "loop": false,
            "direction": "East",
            "cell_width": 128,
            "cell_height": 128
          },
          "ImpactFX": {
            "asset_id": "rbxassetid://98935374521489",
            "frame_count": 8,
            "fps": 16,
            "loop": false,
            "direction": "Omni",
            "cell_width": 128,
            "cell_height": 128
          }
        }
      },
      "concept_art_url": "./monster-media/stampfoot_leaper.png?v=068fe62c7b4e"
    },
    {
      "id": "walking_nest",
      "enabled": true,
      "size_scale": 1,
      "identity": {
        "display_name": "걸어다니는 둥지",
        "description": "단단한 둥지 몸통으로 천천히 접근해 밀어붙이고, 쓰러지면 네 알에서 새끼 도마뱀을 부화시키는 자연 몬스터",
        "element": "Nature",
        "species": "PlantBeast",
        "faction": "Wild",
        "tier": "Normal",
        "level": 1,
        "tags": [
          "Nest",
          "ContactMelee",
          "DeathSpawner"
        ]
      },
      "stats": {
        "max_health": 180,
        "attack_power": 18,
        "defense": 5,
        "knockback_resistance": 0.55
      },
      "detection": {
        "search_range": 42,
        "lose_target_range": 58,
        "target_refresh_seconds": 0.2,
        "field_of_view_degrees": 360,
        "require_line_of_sight": false,
        "hearing_enabled": true,
        "hearing_range": 12
      },
      "movement": {
        "walk_speed": 5.5,
        "chase_speed": 7,
        "use_pathfinding": true,
        "repath_interval_seconds": 0.55,
        "waypoint_spacing": 4,
        "agent_radius": 2.2,
        "agent_height": 4,
        "agent_can_jump": false,
        "agent_can_climb": false,
        "leash_range": 78,
        "return_home_distance": 5,
        "stuck_timeout_seconds": 2.5,
        "path_retry_limit": 2
      },
      "behavior": {
        "ai_tick_seconds": 0.08,
        "target_policy": "Nearest",
        "can_switch_targets": true,
        "switch_target_advantage": 6,
        "forget_target_seconds": 2.5,
        "return_home_enabled": true
      },
      "attack": {
        "kind": "ContactMelee",
        "minimum_range": 0,
        "maximum_range": 3.5,
        "damage_multiplier": 1,
        "flat_damage_bonus": 0,
        "telegraph_duration_seconds": 0,
        "hit_radius": 3.2,
        "attack_speed_multiplier": 1,
        "effect_speed_multiplier": 1,
        "attack_interval_seconds": 2.6,
        "cooldown_seconds": 0.7,
        "recovery_seconds": 0.45,
        "lock_target_position": true,
        "can_move_while_casting": false,
        "require_line_of_sight": false,
        "knockback_force": 18,
        "vertical_knockback_force": 3,
        "maximum_targets": 1,
        "damage_frame_zero_based": 4
      },
      "spawn": {
        "enabled": false,
        "initial_count": 0,
        "maximum_alive": 4,
        "respawn_seconds": 10,
        "random_radius": 0,
        "minimum_player_distance": 0,
        "positions": [
          [
            0,
            0,
            0
          ]
        ]
      },
      "death_spawn": {
        "enabled": true,
        "child_monster_id": "nest_hatchling_lizard",
        "count": 4,
        "trigger_frame_zero_based": 3,
        "spawn_radius_studs": 2.25,
        "activation_delay_seconds": 0.4,
        "target_policy": "KillerThenNearest",
        "child_should_respawn": false,
        "inherit_home": false
      },
      "lifecycle": {
        "corpse_seconds": 0.75,
        "despawn_distance": 135,
        "out_of_combat_regen_per_second": 0,
        "regen_delay_seconds": 8
      },
      "presentation": {
        "concept_art_path": "Assets/Monsters/Concepts/walking_nest_anchor_v1.png",
        "display_width_studs": 7.6,
        "display_height_studs": 7.6,
        "billboard_pixels_per_stud": 24,
        "max_render_distance_studs": 512,
        "billboard_offset_y": 3.4,
        "show_health_bar": true,
        "show_nameplate": true,
        "health_bar_height_pixels": 7,
        "collision_radius": 2.2,
        "collision_height": 4,
        "telegraph_color": "#E63946",
        "telegraph_transparency": 0.38,
        "telegraph_thickness": 0.12,
        "animations": {
          "Idle": {
            "asset_id": "rbxassetid://111560361831998",
            "frame_count": 8,
            "fps": 8,
            "loop": true,
            "direction": "East",
            "cell_width": 128,
            "cell_height": 128
          },
          "Walk": {
            "asset_id": "rbxassetid://114123521815146",
            "frame_count": 10,
            "fps": 10,
            "loop": true,
            "direction": "East",
            "cell_width": 128,
            "cell_height": 128
          },
          "Attack": {
            "asset_id": "rbxassetid://80655184836352",
            "frame_count": 8,
            "fps": 12,
            "loop": false,
            "direction": "East",
            "cell_width": 128,
            "cell_height": 128
          },
          "Hit": {
            "asset_id": "rbxassetid://138633791203164",
            "frame_count": 6,
            "fps": 15,
            "loop": false,
            "direction": "East",
            "cell_width": 128,
            "cell_height": 128
          },
          "Death": {
            "asset_id": "rbxassetid://137880382301724",
            "frame_count": 6,
            "fps": 12,
            "loop": false,
            "direction": "East",
            "cell_width": 128,
            "cell_height": 128
          }
        }
      },
      "concept_art_url": "./monster-media/walking_nest.png?v=6355a91a3423"
    },
    {
      "id": "nest_hatchling_lizard",
      "enabled": true,
      "size_scale": 1,
      "identity": {
        "display_name": "새끼 도마뱀",
        "description": "둥지의 알에서 깨어나 부화 동작 직후 빠르게 추적하고 물어뜯는 자연 속성 하수인",
        "element": "Nature",
        "species": "Beast",
        "faction": "Wild",
        "tier": "Normal",
        "level": 1,
        "tags": [
          "Minion",
          "Hatchling",
          "ContactMelee"
        ]
      },
      "stats": {
        "max_health": 28,
        "attack_power": 8,
        "defense": 0,
        "knockback_resistance": 0.05
      },
      "detection": {
        "search_range": 50,
        "lose_target_range": 68,
        "target_refresh_seconds": 0.1,
        "field_of_view_degrees": 360,
        "require_line_of_sight": false,
        "hearing_enabled": true,
        "hearing_range": 14
      },
      "movement": {
        "walk_speed": 10,
        "chase_speed": 14,
        "use_pathfinding": true,
        "repath_interval_seconds": 0.25,
        "waypoint_spacing": 3,
        "agent_radius": 0.9,
        "agent_height": 1.8,
        "agent_can_jump": false,
        "agent_can_climb": false,
        "leash_range": 82,
        "return_home_distance": 3,
        "stuck_timeout_seconds": 1.25,
        "path_retry_limit": 2
      },
      "behavior": {
        "ai_tick_seconds": 0.05,
        "target_policy": "Nearest",
        "can_switch_targets": true,
        "switch_target_advantage": 4,
        "forget_target_seconds": 1.5,
        "return_home_enabled": true
      },
      "attack": {
        "kind": "ContactMelee",
        "minimum_range": 0,
        "maximum_range": 2.6,
        "damage_multiplier": 1,
        "flat_damage_bonus": 0,
        "telegraph_duration_seconds": 0,
        "hit_radius": 2.1,
        "attack_speed_multiplier": 1,
        "effect_speed_multiplier": 1,
        "attack_interval_seconds": 1.15,
        "cooldown_seconds": 0.25,
        "recovery_seconds": 0.2,
        "lock_target_position": true,
        "can_move_while_casting": false,
        "require_line_of_sight": false,
        "knockback_force": 8,
        "vertical_knockback_force": 1,
        "maximum_targets": 1,
        "damage_frame_zero_based": 3
      },
      "spawn": {
        "enabled": false,
        "initial_count": 0,
        "maximum_alive": 32,
        "respawn_seconds": 10,
        "random_radius": 0,
        "minimum_player_distance": 0,
        "positions": [
          [
            0,
            0,
            0
          ]
        ]
      },
      "death_spawn": {
        "enabled": false,
        "child_monster_id": "",
        "count": 1,
        "trigger_frame_zero_based": 0,
        "spawn_radius_studs": 1,
        "activation_delay_seconds": 0,
        "target_policy": "Nearest",
        "child_should_respawn": false,
        "inherit_home": false
      },
      "lifecycle": {
        "corpse_seconds": 0.8,
        "despawn_distance": 135,
        "out_of_combat_regen_per_second": 0,
        "regen_delay_seconds": 8
      },
      "presentation": {
        "concept_art_path": "Assets/Monsters/Concepts/nest_hatchling_lizard_anchor_v1.png",
        "display_width_studs": 4.2,
        "display_height_studs": 4.2,
        "billboard_pixels_per_stud": 24,
        "max_render_distance_studs": 512,
        "billboard_offset_y": 2,
        "show_health_bar": true,
        "show_nameplate": true,
        "health_bar_height_pixels": 6,
        "collision_radius": 0.9,
        "collision_height": 1.8,
        "telegraph_color": "#E63946",
        "telegraph_transparency": 0.38,
        "telegraph_thickness": 0.12,
        "animations": {
          "Spawn": {
            "asset_id": "rbxassetid://96217941858190",
            "frame_count": 6,
            "fps": 15,
            "loop": false,
            "direction": "East",
            "cell_width": 128,
            "cell_height": 128
          },
          "Idle": {
            "asset_id": "rbxassetid://128441182955604",
            "frame_count": 8,
            "fps": 8,
            "loop": true,
            "direction": "East",
            "cell_width": 128,
            "cell_height": 128
          },
          "Walk": {
            "asset_id": "rbxassetid://123109097147753",
            "frame_count": 8,
            "fps": 12,
            "loop": true,
            "direction": "East",
            "cell_width": 128,
            "cell_height": 128
          },
          "Attack": {
            "asset_id": "rbxassetid://128587449683305",
            "frame_count": 8,
            "fps": 16,
            "loop": false,
            "direction": "East",
            "cell_width": 128,
            "cell_height": 128
          },
          "Hit": {
            "asset_id": "rbxassetid://96482591788405",
            "frame_count": 6,
            "fps": 15,
            "loop": false,
            "direction": "East",
            "cell_width": 128,
            "cell_height": 128
          },
          "Death": {
            "asset_id": "rbxassetid://123999701446684",
            "frame_count": 8,
            "fps": 12,
            "loop": false,
            "direction": "East",
            "cell_width": 128,
            "cell_height": 128
          }
        }
      },
      "concept_art_url": "./monster-media/nest_hatchling_lizard.png?v=8a5e2241df4f"
    }
  ]
};
