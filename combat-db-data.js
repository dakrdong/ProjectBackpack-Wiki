window.PACKBOUND_COMBAT_DB = {
  "source_page_id": "backpack-combat-stat-database",
  "source_title": "룬 보드 능력 369개가 실제 전투 수치로 흐른다",
  "source": "wiki/content/pages/backpack-combat-stat-database/v005.md",
  "source_version": 5,
  "source_updated_at": "2026-09-03",
  "database_count": 6,
  "record_count": 178,
  "databases": [
    {
      "id": "combat-stats",
      "title": "전투 능력치",
      "description": "현재 계약과 후속 제안을 한 표에서 비교하고 구현 우선순위를 추적합니다.",
      "unit": "STATS",
      "count": 55,
      "columns": [
        {
          "key": "id",
          "label": "ID",
          "kind": "code"
        },
        {
          "key": "name",
          "label": "표시명",
          "kind": "strong"
        },
        {
          "key": "group",
          "label": "분류",
          "kind": "text"
        },
        {
          "key": "priority",
          "label": "우선순위",
          "kind": "priority"
        },
        {
          "key": "data_status",
          "label": "데이터",
          "kind": "status"
        },
        {
          "key": "runtime_status",
          "label": "런타임",
          "kind": "status"
        },
        {
          "key": "decision",
          "label": "기획 결정",
          "kind": "wide"
        }
      ],
      "filters": [
        {
          "key": "group",
          "label": "분류"
        },
        {
          "key": "priority",
          "label": "우선순위"
        },
        {
          "key": "data_status",
          "label": "데이터 상태"
        }
      ],
      "rows": [
        {
          "record_id": "AttackPower",
          "id": "AttackPower",
          "name": "공격력",
          "group": "현재 정의된 핵심·증가 능력치",
          "priority": "P0",
          "data_status": "완료",
          "runtime_status": "완료",
          "decision": "기본 피해량으로 채택"
        },
        {
          "record_id": "Defense",
          "id": "Defense",
          "name": "방어력",
          "group": "현재 정의된 핵심·증가 능력치",
          "priority": "P0",
          "data_status": "완료",
          "runtime_status": "완료",
          "decision": "지속 피해 감소용으로 채택"
        },
        {
          "record_id": "MaxHealth",
          "id": "MaxHealth",
          "name": "최대 체력",
          "group": "현재 정의된 핵심·증가 능력치",
          "priority": "P0",
          "data_status": "완료",
          "runtime_status": "완료",
          "decision": "캐릭터 생존 기반으로 채택"
        },
        {
          "record_id": "AttackCooldown",
          "id": "AttackCooldown",
          "name": "공격 쿨타임",
          "group": "현재 정의된 핵심·증가 능력치",
          "priority": "P0",
          "data_status": "완료",
          "runtime_status": "완료",
          "decision": "무기별 독립 자동 공격 타이머"
        },
        {
          "record_id": "AttackRange",
          "id": "AttackRange",
          "name": "공격 사거리",
          "group": "현재 정의된 핵심·증가 능력치",
          "priority": "P0",
          "data_status": "완료",
          "runtime_status": "완료",
          "decision": "무기별 독립 대상 탐색 거리"
        },
        {
          "record_id": "AttackPowerIncrease",
          "id": "AttackPowerIncrease",
          "name": "공격력 증가율",
          "group": "현재 정의된 핵심·증가 능력치",
          "priority": "P0",
          "data_status": "완료",
          "runtime_status": "미개발",
          "decision": "기본 공격력에 곱연산"
        },
        {
          "record_id": "DefenseIncrease",
          "id": "DefenseIncrease",
          "name": "방어력 증가율",
          "group": "현재 정의된 핵심·증가 능력치",
          "priority": "P0",
          "data_status": "완료",
          "runtime_status": "미개발",
          "decision": "기본 방어력에 곱연산"
        },
        {
          "record_id": "MaxHealthIncrease",
          "id": "MaxHealthIncrease",
          "name": "최대 체력 증가율",
          "group": "현재 정의된 핵심·증가 능력치",
          "priority": "P0",
          "data_status": "완료",
          "runtime_status": "미개발",
          "decision": "기본 최대 체력에 곱연산"
        },
        {
          "record_id": "CooldownReduction",
          "id": "CooldownReduction",
          "name": "쿨타임 감소율",
          "group": "현재 정의된 핵심·증가 능력치",
          "priority": "P0",
          "data_status": "완료",
          "runtime_status": "미개발",
          "decision": "최대 80%, 공격 속도와 중복 ID 금지"
        },
        {
          "record_id": "AttackRangeIncrease",
          "id": "AttackRangeIncrease",
          "name": "사거리 증가율",
          "group": "현재 정의된 핵심·증가 능력치",
          "priority": "P1",
          "data_status": "완료",
          "runtime_status": "미개발",
          "decision": "기본 사거리에 곱연산"
        },
        {
          "record_id": "AdditionalProjectileCount",
          "id": "AdditionalProjectileCount",
          "name": "추가 투사체 수",
          "group": "현재 정의된 투사체 능력치",
          "priority": "P1",
          "data_status": "완료",
          "runtime_status": "미개발",
          "decision": "기본 1발에 정수 가산"
        },
        {
          "record_id": "ProjectilePierceCount",
          "id": "ProjectilePierceCount",
          "name": "관통 횟수",
          "group": "현재 정의된 투사체 능력치",
          "priority": "P1",
          "data_status": "완료",
          "runtime_status": "미개발",
          "decision": "첫 대상 이후 추가 대상 수"
        },
        {
          "record_id": "ProjectileSplitCount",
          "id": "ProjectileSplitCount",
          "name": "분열 수",
          "group": "현재 정의된 투사체 능력치",
          "priority": "P1",
          "data_status": "완료",
          "runtime_status": "미개발",
          "decision": "분열 시 생성되는 자식 수"
        },
        {
          "record_id": "ProjectileRicochetCount",
          "id": "ProjectileRicochetCount",
          "name": "도탄 횟수",
          "group": "현재 정의된 투사체 능력치",
          "priority": "P1",
          "data_status": "완료",
          "runtime_status": "미개발",
          "decision": "적 또는 벽 도탄에 사용"
        },
        {
          "record_id": "ProjectileSpeedIncrease",
          "id": "ProjectileSpeedIncrease",
          "name": "투사체 속도 증가",
          "group": "현재 정의된 투사체 능력치",
          "priority": "P1",
          "data_status": "완료",
          "runtime_status": "미개발",
          "decision": "이동 속도 배율"
        },
        {
          "record_id": "ProjectileSizeIncrease",
          "id": "ProjectileSizeIncrease",
          "name": "투사체 크기 증가",
          "group": "현재 정의된 투사체 능력치",
          "priority": "P2",
          "data_status": "완료",
          "runtime_status": "미개발",
          "decision": "시각 크기와 충돌 판정 계약 필요"
        },
        {
          "record_id": "ProjectileDamageIncrease",
          "id": "ProjectileDamageIncrease",
          "name": "투사체 피해 증가",
          "group": "현재 정의된 투사체 능력치",
          "priority": "P1",
          "data_status": "완료",
          "runtime_status": "미개발",
          "decision": "투사체 공격에만 적용"
        },
        {
          "record_id": "ProjectileHomingStrength",
          "id": "ProjectileHomingStrength",
          "name": "투사체 유도력",
          "group": "현재 정의된 투사체 능력치",
          "priority": "P2",
          "data_status": "완료",
          "runtime_status": "미개발",
          "decision": "0~1 범위, 조향 알고리즘 필요"
        },
        {
          "record_id": "CriticalChance",
          "id": "CriticalChance",
          "name": "치명타 확률",
          "group": "현재 정의된 전투 보조 능력치",
          "priority": "P1",
          "data_status": "완료",
          "runtime_status": "완료",
          "decision": "0~100% 확률"
        },
        {
          "record_id": "CriticalDamageMultiplier",
          "id": "CriticalDamageMultiplier",
          "name": "치명타 피해 배율",
          "group": "현재 정의된 전투 보조 능력치",
          "priority": "P1",
          "data_status": "완료",
          "runtime_status": "완료",
          "decision": "기본 1.5배"
        },
        {
          "record_id": "DodgeChance",
          "id": "DodgeChance",
          "name": "회피 확률",
          "group": "현재 정의된 전투 보조 능력치",
          "priority": "P2",
          "data_status": "완료",
          "runtime_status": "완료",
          "decision": "최대 75%, 연속 회피 체감 검증 필요"
        },
        {
          "record_id": "LifeSteal",
          "id": "LifeSteal",
          "name": "생명력 흡수",
          "group": "현재 정의된 전투 보조 능력치",
          "priority": "P2",
          "data_status": "완료",
          "runtime_status": "미개발",
          "decision": "가한 피해 비율 회복으로 의미 고정"
        },
        {
          "record_id": "MoveSpeedIncrease",
          "id": "MoveSpeedIncrease",
          "name": "이동 속도 증가",
          "group": "현재 정의된 전투 보조 능력치",
          "priority": "P1",
          "data_status": "완료",
          "runtime_status": "완료",
          "decision": "장비 합계를 캐릭터 이동 속도에 적용"
        },
        {
          "record_id": "KnockbackPower",
          "id": "KnockbackPower",
          "name": "밀쳐내기 위력",
          "group": "현재 정의된 전투 보조 능력치",
          "priority": "P1",
          "data_status": "완료",
          "runtime_status": "완료",
          "decision": "무기 공격과 적 군중 제어 계약에 적용"
        },
        {
          "record_id": "ArmorPenetration",
          "id": "ArmorPenetration",
          "name": "방어 관통",
          "group": "추가 채택할 공격·투사체 능력치",
          "priority": "P1",
          "data_status": "미개발",
          "runtime_status": "미개발",
          "decision": "채택, 방어 빌드 대응 축"
        },
        {
          "record_id": "AreaSizeIncrease",
          "id": "AreaSizeIncrease",
          "name": "효과 범위 증가",
          "group": "추가 채택할 공격·투사체 능력치",
          "priority": "P1",
          "data_status": "미개발",
          "runtime_status": "미개발",
          "decision": "채택, 폭발·근접·장판 공통 배율"
        },
        {
          "record_id": "ChainCount",
          "id": "ChainCount",
          "name": "연쇄 횟수",
          "group": "추가 채택할 공격·투사체 능력치",
          "priority": "P1",
          "data_status": "미개발",
          "runtime_status": "미개발",
          "decision": "채택, 번개·연쇄 공격 공통값"
        },
        {
          "record_id": "ExecuteThreshold",
          "id": "ExecuteThreshold",
          "name": "처형 기준",
          "group": "추가 채택할 공격·투사체 능력치",
          "priority": "P2",
          "data_status": "미개발",
          "runtime_status": "미개발",
          "decision": "채택, 희귀 효과 전용"
        },
        {
          "record_id": "StatusApplicationChance",
          "id": "StatusApplicationChance",
          "name": "상태 부여 확률",
          "group": "추가 채택할 공격·투사체 능력치",
          "priority": "P1",
          "data_status": "미개발",
          "runtime_status": "미개발",
          "decision": "채택, 개별 효과 기본 확률 보정"
        },
        {
          "record_id": "StatusPowerIncrease",
          "id": "StatusPowerIncrease",
          "name": "상태 효과 증가",
          "group": "추가 채택할 공격·투사체 능력치",
          "priority": "P1",
          "data_status": "미개발",
          "runtime_status": "미개발",
          "decision": "채택, 상태 피해·효과량 공통 보정"
        },
        {
          "record_id": "StatusDurationIncrease",
          "id": "StatusDurationIncrease",
          "name": "상태 지속시간 증가",
          "group": "추가 채택할 공격·투사체 능력치",
          "priority": "P1",
          "data_status": "미개발",
          "runtime_status": "미개발",
          "decision": "채택, 실시간 상태용"
        },
        {
          "record_id": "ProjectileExplosionRadius",
          "id": "ProjectileExplosionRadius",
          "name": "투사체 폭발 범위",
          "group": "추가 채택할 공격·투사체 능력치",
          "priority": "P1",
          "data_status": "미개발",
          "runtime_status": "미개발",
          "decision": "채택, 폭발 투사체 기본값"
        },
        {
          "record_id": "ProjectileChainCount",
          "id": "ProjectileChainCount",
          "name": "투사체 연쇄 횟수",
          "group": "추가 채택할 공격·투사체 능력치",
          "priority": "P2",
          "data_status": "미개발",
          "runtime_status": "미개발",
          "decision": "ChainCount와 통합 가능성 검토"
        },
        {
          "record_id": "PierceDamageRetention",
          "id": "PierceDamageRetention",
          "name": "관통 피해 유지율",
          "group": "추가 채택할 공격·투사체 능력치",
          "priority": "P1",
          "data_status": "미개발",
          "runtime_status": "미개발",
          "decision": "채택, 관통 횟수 증가의 밸런스 장치"
        },
        {
          "record_id": "RicochetDamageRetention",
          "id": "RicochetDamageRetention",
          "name": "도탄 피해 유지율",
          "group": "추가 채택할 공격·투사체 능력치",
          "priority": "P1",
          "data_status": "미개발",
          "runtime_status": "미개발",
          "decision": "채택, 도탄 후 피해 감쇠"
        },
        {
          "record_id": "SplitDamageRetention",
          "id": "SplitDamageRetention",
          "name": "분열 피해 유지율",
          "group": "추가 채택할 공격·투사체 능력치",
          "priority": "P1",
          "data_status": "미개발",
          "runtime_status": "미개발",
          "decision": "채택, 자식 투사체 피해 감쇠"
        },
        {
          "record_id": "Accuracy",
          "id": "Accuracy",
          "name": "명중률",
          "group": "추가 채택할 공격·투사체 능력치",
          "priority": "P3",
          "data_status": "미개발",
          "runtime_status": "미개발",
          "decision": "보류, 자동 공격 실패가 고장처럼 보일 위험"
        },
        {
          "record_id": "HealthRegeneration",
          "id": "HealthRegeneration",
          "name": "초당 체력 회복",
          "group": "추가 채택할 방어·회복 능력치",
          "priority": "P1",
          "data_status": "미개발",
          "runtime_status": "미개발",
          "decision": "채택, 지속 생존 빌드"
        },
        {
          "record_id": "ThornsDamage",
          "id": "ThornsDamage",
          "name": "가시 피해",
          "group": "추가 채택할 방어·회복 능력치",
          "priority": "P1",
          "data_status": "미개발",
          "runtime_status": "미개발",
          "decision": "채택, 근접 피격 반격 기본값"
        },
        {
          "record_id": "HealingIncrease",
          "id": "HealingIncrease",
          "name": "주는 회복 증가",
          "group": "추가 채택할 방어·회복 능력치",
          "priority": "P2",
          "data_status": "미개발",
          "runtime_status": "미개발",
          "decision": "채택, 회복 효과 소유자 기준"
        },
        {
          "record_id": "HealingReceivedIncrease",
          "id": "HealingReceivedIncrease",
          "name": "받는 회복 증가",
          "group": "추가 채택할 방어·회복 능력치",
          "priority": "P2",
          "data_status": "미개발",
          "runtime_status": "미개발",
          "decision": "채택, 탱커·지원 효과 분리"
        },
        {
          "record_id": "DamageReduction",
          "id": "DamageReduction",
          "name": "최종 피해 감소",
          "group": "추가 채택할 방어·회복 능력치",
          "priority": "P2",
          "data_status": "미개발",
          "runtime_status": "미개발",
          "decision": "제한 채택, 방어력과 별도 상한 필요"
        },
        {
          "record_id": "StatusResistance",
          "id": "StatusResistance",
          "name": "상태 저항",
          "group": "추가 채택할 방어·회복 능력치",
          "priority": "P1",
          "data_status": "미개발",
          "runtime_status": "미개발",
          "decision": "채택, 부여 확률·지속시간 중 계산식 확정 필요"
        },
        {
          "record_id": "CriticalResistance",
          "id": "CriticalResistance",
          "name": "치명타 저항",
          "group": "추가 채택할 방어·회복 능력치",
          "priority": "P2",
          "data_status": "미개발",
          "runtime_status": "미개발",
          "decision": "채택, 적 치명타 콘텐츠 이후"
        },
        {
          "record_id": "ReviveCount",
          "id": "ReviveCount",
          "name": "부활 횟수",
          "group": "추가 채택할 방어·회복 능력치",
          "priority": "P3",
          "data_status": "미개발",
          "runtime_status": "미개발",
          "decision": "보류, 희귀 유물과 전투 흐름 검증 후 도입"
        },
        {
          "record_id": "MaxStamina",
          "id": "MaxStamina",
          "name": "최대 스태미나",
          "group": "선택적 자원·경제 능력치",
          "priority": "P3",
          "data_status": "보류",
          "runtime_status": "—",
          "decision": "무기 과밀 제어가 필요할 때만 프로토타입"
        },
        {
          "record_id": "StaminaRegeneration",
          "id": "StaminaRegeneration",
          "name": "스태미나 회복",
          "group": "선택적 자원·경제 능력치",
          "priority": "P3",
          "data_status": "보류",
          "runtime_status": "—",
          "decision": "공격이 멈추는 체감 위험과 함께 검증"
        },
        {
          "record_id": "AttackStaminaCost",
          "id": "AttackStaminaCost",
          "name": "공격 스태미나 비용",
          "group": "선택적 자원·경제 능력치",
          "priority": "P3",
          "data_status": "보류",
          "runtime_status": "—",
          "decision": "모든 무기에 강제하지 않음"
        },
        {
          "record_id": "MaxMana",
          "id": "MaxMana",
          "name": "최대 마나",
          "group": "선택적 자원·경제 능력치",
          "priority": "P2",
          "data_status": "미개발",
          "runtime_status": "—",
          "decision": "마법·연결망 빌드가 생길 때 채택"
        },
        {
          "record_id": "ManaRegeneration",
          "id": "ManaRegeneration",
          "name": "마나 회복",
          "group": "선택적 자원·경제 능력치",
          "priority": "P2",
          "data_status": "미개발",
          "runtime_status": "—",
          "decision": "연결망과 함께 구현"
        },
        {
          "record_id": "ChargeCount",
          "id": "ChargeCount",
          "name": "충전 수",
          "group": "선택적 자원·경제 능력치",
          "priority": "P2",
          "data_status": "미개발",
          "runtime_status": "—",
          "decision": "제한 사용·폭발 아이템용"
        },
        {
          "record_id": "UseCount",
          "id": "UseCount",
          "name": "사용 횟수",
          "group": "선택적 자원·경제 능력치",
          "priority": "P2",
          "data_status": "미개발",
          "runtime_status": "—",
          "decision": "소모품과 전투당 횟수 제한용"
        },
        {
          "record_id": "LootLuck",
          "id": "LootLuck",
          "name": "전리품 행운",
          "group": "선택적 자원·경제 능력치",
          "priority": "P3",
          "data_status": "보류",
          "runtime_status": "—",
          "decision": "전투 정확도 Luck과 이름을 공유하지 않음"
        },
        {
          "record_id": "GoldGainIncrease",
          "id": "GoldGainIncrease",
          "name": "골드 획득 증가",
          "group": "선택적 자원·경제 능력치",
          "priority": "P3",
          "data_status": "보류",
          "runtime_status": "—",
          "decision": "경제 밸런스 구축 후 도입"
        },
        {
          "record_id": "ExperienceGainIncrease",
          "id": "ExperienceGainIncrease",
          "name": "경험치 획득 증가",
          "group": "선택적 자원·경제 능력치",
          "priority": "P3",
          "data_status": "보류",
          "runtime_status": "—",
          "decision": "성장 곡선 구축 후 도입"
        }
      ]
    },
    {
      "id": "combat-resources",
      "title": "전투 자원",
      "description": "전투 중 소비·회복되는 현재값과 서버 권위 규칙을 관리합니다.",
      "unit": "RESOURCES",
      "count": 7,
      "columns": [
        {
          "key": "name",
          "label": "자원",
          "kind": "strong"
        },
        {
          "key": "priority",
          "label": "우선순위",
          "kind": "priority"
        },
        {
          "key": "development_status",
          "label": "개발 상태",
          "kind": "status"
        },
        {
          "key": "rule",
          "label": "운영 규칙",
          "kind": "wide"
        }
      ],
      "filters": [
        {
          "key": "priority",
          "label": "우선순위"
        },
        {
          "key": "development_status",
          "label": "개발 상태"
        }
      ],
      "rows": [
        {
          "record_id": "resource-1",
          "name": "현재 체력",
          "priority": "P0",
          "development_status": "완료",
          "rule": "최대 체력과 분리된 서버 권위 현재값"
        },
        {
          "record_id": "resource-2",
          "name": "보호막",
          "priority": "P0",
          "development_status": "완료",
          "rule": "방어력 적용 뒤 남은 피해보다 먼저 소모되는 임시값"
        },
        {
          "record_id": "resource-3",
          "name": "무기 쿨타임 진행도",
          "priority": "P0",
          "development_status": "완료",
          "rule": "무기 인스턴스별 독립 타이머"
        },
        {
          "record_id": "resource-4",
          "name": "상태 효과 중첩·잔여시간",
          "priority": "P1",
          "development_status": "미개발",
          "rule": "효과 ID별 중첩 정책과 만료 시각"
        },
        {
          "record_id": "resource-5",
          "name": "마나",
          "priority": "P2",
          "development_status": "미개발",
          "rule": "마법·연결망 아이템 전용 선택 자원"
        },
        {
          "record_id": "resource-6",
          "name": "스태미나",
          "priority": "P3",
          "development_status": "보류",
          "rule": "공용 자동 공격 제한이 필요할 때만 도입"
        },
        {
          "record_id": "resource-7",
          "name": "충전·사용 횟수",
          "priority": "P2",
          "development_status": "미개발",
          "rule": "아이템 인스턴스 또는 전투 단위로 초기화"
        }
      ]
    },
    {
      "id": "status-effects",
      "title": "상태 효과",
      "description": "시간과 중첩을 갖는 강화·약화 효과의 역할과 도입 상태를 비교합니다.",
      "unit": "EFFECTS",
      "count": 19,
      "columns": [
        {
          "key": "id",
          "label": "ID",
          "kind": "code"
        },
        {
          "key": "name",
          "label": "표시명",
          "kind": "strong"
        },
        {
          "key": "group",
          "label": "효과 유형",
          "kind": "text"
        },
        {
          "key": "priority",
          "label": "우선순위",
          "kind": "priority"
        },
        {
          "key": "development_status",
          "label": "개발 상태",
          "kind": "status"
        },
        {
          "key": "meaning",
          "label": "기본 의미",
          "kind": "wide"
        }
      ],
      "filters": [
        {
          "key": "group",
          "label": "효과 유형"
        },
        {
          "key": "priority",
          "label": "우선순위"
        },
        {
          "key": "development_status",
          "label": "개발 상태"
        }
      ],
      "rows": [
        {
          "record_id": "Empower",
          "id": "Empower",
          "name": "강화",
          "group": "강화 효과",
          "priority": "P1",
          "development_status": "미개발",
          "meaning": "중첩당 공격력 증가"
        },
        {
          "record_id": "Haste",
          "id": "Haste",
          "name": "가속",
          "group": "강화 효과",
          "priority": "P1",
          "development_status": "미개발",
          "meaning": "아이템 쿨타임 진행 속도 증가"
        },
        {
          "record_id": "Barrier",
          "id": "Barrier",
          "name": "보호막",
          "group": "강화 효과",
          "priority": "P0",
          "development_status": "미개발",
          "meaning": "임시 피해 흡수량 획득"
        },
        {
          "record_id": "Regeneration",
          "id": "Regeneration",
          "name": "재생",
          "group": "강화 효과",
          "priority": "P1",
          "development_status": "미개발",
          "meaning": "일정 주기 체력 회복"
        },
        {
          "record_id": "Thorns",
          "id": "Thorns",
          "name": "가시",
          "group": "강화 효과",
          "priority": "P1",
          "development_status": "미개발",
          "meaning": "근접 피격 시 반사 피해"
        },
        {
          "record_id": "Vampirism",
          "id": "Vampirism",
          "name": "흡혈 강화",
          "group": "강화 효과",
          "priority": "P2",
          "development_status": "미개발",
          "meaning": "제한 시간 생명력 흡수 증가"
        },
        {
          "record_id": "Invulnerable",
          "id": "Invulnerable",
          "name": "무적",
          "group": "강화 효과",
          "priority": "P2",
          "development_status": "미개발",
          "meaning": "짧은 시간 피해 무효화"
        },
        {
          "record_id": "StatusResist",
          "id": "StatusResist",
          "name": "상태 방어",
          "group": "강화 효과",
          "priority": "P1",
          "development_status": "미개발",
          "meaning": "다음 해로운 효과 또는 중첩 차단"
        },
        {
          "record_id": "ReflectDebuff",
          "id": "ReflectDebuff",
          "name": "약화 반사",
          "group": "강화 효과",
          "priority": "P2",
          "development_status": "미개발",
          "meaning": "다음 해로운 효과를 시전자에게 반사"
        },
        {
          "record_id": "Poison",
          "id": "Poison",
          "name": "중독",
          "group": "약화 효과",
          "priority": "P1",
          "development_status": "미개발",
          "meaning": "일정 주기의 중첩 피해"
        },
        {
          "record_id": "Burn",
          "id": "Burn",
          "name": "화상",
          "group": "약화 효과",
          "priority": "P1",
          "development_status": "미개발",
          "meaning": "짧고 빠른 지속 피해, 재부여 시 지속 갱신"
        },
        {
          "record_id": "Bleed",
          "id": "Bleed",
          "name": "출혈",
          "group": "약화 효과",
          "priority": "P2",
          "development_status": "미개발",
          "meaning": "이동 또는 공격 행동에 반응하는 피해"
        },
        {
          "record_id": "Chill",
          "id": "Chill",
          "name": "냉기",
          "group": "약화 효과",
          "priority": "P1",
          "development_status": "미개발",
          "meaning": "이동·공격 속도 감소"
        },
        {
          "record_id": "Freeze",
          "id": "Freeze",
          "name": "빙결",
          "group": "약화 효과",
          "priority": "P2",
          "development_status": "미개발",
          "meaning": "짧은 행동 불가 또는 냉기 임계 효과"
        },
        {
          "record_id": "Weak",
          "id": "Weak",
          "name": "약화",
          "group": "약화 효과",
          "priority": "P1",
          "development_status": "미개발",
          "meaning": "주는 피해 감소"
        },
        {
          "record_id": "Vulnerable",
          "id": "Vulnerable",
          "name": "취약",
          "group": "약화 효과",
          "priority": "P1",
          "development_status": "미개발",
          "meaning": "받는 피해 증가"
        },
        {
          "record_id": "Blind",
          "id": "Blind",
          "name": "실명",
          "group": "약화 효과",
          "priority": "P3",
          "development_status": "보류",
          "meaning": "정확도 채택 전에는 대상 탐색 방해로만 검토"
        },
        {
          "record_id": "Stun",
          "id": "Stun",
          "name": "기절",
          "group": "약화 효과",
          "priority": "P2",
          "development_status": "미개발",
          "meaning": "이동·아이템 쿨타임을 짧게 정지"
        },
        {
          "record_id": "Curse",
          "id": "Curse",
          "name": "저주",
          "group": "약화 효과",
          "priority": "P3",
          "development_status": "보류",
          "meaning": "일반 해제 규칙을 벗어나는 장기 약화"
        }
      ]
    },
    {
      "id": "spatial-conditions",
      "title": "백팩 공간 조건",
      "description": "아이템 배치 관계의 현재 평가 계약과 후속 공간 퍼즐 후보를 추적합니다.",
      "unit": "CONDITIONS",
      "count": 25,
      "columns": [
        {
          "key": "id",
          "label": "관계 ID",
          "kind": "code"
        },
        {
          "key": "meaning",
          "label": "의미",
          "kind": "strong"
        },
        {
          "key": "group",
          "label": "구분",
          "kind": "text"
        },
        {
          "key": "priority",
          "label": "우선순위",
          "kind": "priority"
        },
        {
          "key": "data_status",
          "label": "평가기·개발",
          "kind": "status"
        },
        {
          "key": "test_status",
          "label": "직접 테스트",
          "kind": "status"
        },
        {
          "key": "runtime_status",
          "label": "런타임",
          "kind": "status"
        },
        {
          "key": "decision",
          "label": "기획 결정",
          "kind": "wide"
        }
      ],
      "filters": [
        {
          "key": "group",
          "label": "구분"
        },
        {
          "key": "priority",
          "label": "우선순위"
        },
        {
          "key": "data_status",
          "label": "개발 상태"
        }
      ],
      "rows": [
        {
          "record_id": "Nearby",
          "id": "Nearby",
          "meaning": "상하좌우 변이 맞닿음",
          "group": "현재 구현",
          "priority": "P0",
          "data_status": "완료",
          "test_status": "완료",
          "runtime_status": "미개발",
          "decision": "현재 계약"
        },
        {
          "record_id": "Active",
          "id": "Active",
          "meaning": "비인접 지정 활성 칸과 겹침",
          "group": "현재 구현",
          "priority": "P0",
          "data_status": "완료",
          "test_status": "완료",
          "runtime_status": "미개발",
          "decision": "현재 계약"
        },
        {
          "record_id": "Diagonal",
          "id": "Diagonal",
          "meaning": "변 접촉 없이 모서리만 맞닿음",
          "group": "현재 구현",
          "priority": "P1",
          "data_status": "완료",
          "test_status": "완료",
          "runtime_status": "미개발",
          "decision": "현재 계약"
        },
        {
          "record_id": "SameRow",
          "id": "SameRow",
          "meaning": "하나 이상의 점유 칸이 같은 행",
          "group": "현재 구현",
          "priority": "P1",
          "data_status": "완료",
          "test_status": "미개발",
          "runtime_status": "미개발",
          "decision": "현재 계약"
        },
        {
          "record_id": "SameColumn",
          "id": "SameColumn",
          "meaning": "하나 이상의 점유 칸이 같은 열",
          "group": "현재 구현",
          "priority": "P1",
          "data_status": "완료",
          "test_status": "미개발",
          "runtime_status": "미개발",
          "decision": "현재 계약"
        },
        {
          "record_id": "Above",
          "id": "Above",
          "meaning": "소스 경계보다 위에 위치",
          "group": "현재 구현",
          "priority": "P1",
          "data_status": "완료",
          "test_status": "미개발",
          "runtime_status": "미개발",
          "decision": "현재 계약"
        },
        {
          "record_id": "Below",
          "id": "Below",
          "meaning": "소스 경계보다 아래에 위치",
          "group": "현재 구현",
          "priority": "P1",
          "data_status": "완료",
          "test_status": "미개발",
          "runtime_status": "미개발",
          "decision": "현재 계약"
        },
        {
          "record_id": "Left",
          "id": "Left",
          "meaning": "소스 경계보다 왼쪽에 위치",
          "group": "현재 구현",
          "priority": "P1",
          "data_status": "완료",
          "test_status": "미개발",
          "runtime_status": "미개발",
          "decision": "현재 계약"
        },
        {
          "record_id": "Right",
          "id": "Right",
          "meaning": "소스 경계보다 오른쪽에 위치",
          "group": "현재 구현",
          "priority": "P1",
          "data_status": "완료",
          "test_status": "미개발",
          "runtime_status": "미개발",
          "decision": "현재 계약"
        },
        {
          "record_id": "Anywhere",
          "id": "Anywhere",
          "meaning": "백팩 어디에 있어도 대상",
          "group": "현재 구현",
          "priority": "P1",
          "data_status": "완료",
          "test_status": "미개발",
          "runtime_status": "미개발",
          "decision": "현재 계약"
        },
        {
          "record_id": "Connected",
          "id": "Connected",
          "meaning": "같은 연결망으로 이어짐",
          "group": "후속 제안",
          "priority": "P1",
          "data_status": "미개발",
          "test_status": "—",
          "runtime_status": "—",
          "decision": "채택, 마나·전기·기계 빌드"
        },
        {
          "record_id": "Contained",
          "id": "Contained",
          "meaning": "지정 포켓이나 컨테이너 내부",
          "group": "후속 제안",
          "priority": "P1",
          "data_status": "미개발",
          "test_status": "—",
          "runtime_status": "—",
          "decision": "채택, 소모품·탄약 묶음"
        },
        {
          "record_id": "EmptyNearbyCell",
          "id": "EmptyNearbyCell",
          "meaning": "근처 빈칸 수",
          "group": "후속 제안",
          "priority": "P1",
          "data_status": "미개발",
          "test_status": "—",
          "runtime_status": "—",
          "decision": "채택, 공간을 비우는 선택 보상"
        },
        {
          "record_id": "EmptyRowCell",
          "id": "EmptyRowCell",
          "meaning": "같은 행의 빈칸 수",
          "group": "후속 제안",
          "priority": "P2",
          "data_status": "미개발",
          "test_status": "—",
          "runtime_status": "—",
          "decision": "채택, 방향성 무기용"
        },
        {
          "record_id": "Isolated",
          "id": "Isolated",
          "meaning": "근처에 다른 아이템이 없음",
          "group": "후속 제안",
          "priority": "P1",
          "data_status": "미개발",
          "test_status": "—",
          "runtime_status": "—",
          "decision": "채택, 큰 무기와 고립 빌드"
        },
        {
          "record_id": "TopRow",
          "id": "TopRow",
          "meaning": "최상단 행에 배치됨",
          "group": "후속 제안",
          "priority": "P1",
          "data_status": "미개발",
          "test_status": "—",
          "runtime_status": "—",
          "decision": "채택, 헬멧·상단 장치"
        },
        {
          "record_id": "BottomRow",
          "id": "BottomRow",
          "meaning": "최하단 행에 배치됨",
          "group": "후속 제안",
          "priority": "P1",
          "data_status": "미개발",
          "test_status": "—",
          "runtime_status": "—",
          "decision": "채택, 신발·무거운 장비"
        },
        {
          "record_id": "Edge",
          "id": "Edge",
          "meaning": "백팩 외곽에 접함",
          "group": "후속 제안",
          "priority": "P2",
          "data_status": "미개발",
          "test_status": "—",
          "runtime_status": "—",
          "decision": "채택, 방어·벽면 장비"
        },
        {
          "record_id": "Corner",
          "id": "Corner",
          "meaning": "백팩 모서리에 위치",
          "group": "후속 제안",
          "priority": "P2",
          "data_status": "미개발",
          "test_status": "—",
          "runtime_status": "—",
          "decision": "채택, 제한적 고효율 효과"
        },
        {
          "record_id": "Facing",
          "id": "Facing",
          "meaning": "아이템이 바라보는 방향",
          "group": "후속 제안",
          "priority": "P1",
          "data_status": "미개발",
          "test_status": "—",
          "runtime_status": "—",
          "decision": "채택, 활·총·방패 방향성"
        },
        {
          "record_id": "SameTypeCount",
          "id": "SameTypeCount",
          "meaning": "같은 태그 아이템 수",
          "group": "후속 제안",
          "priority": "P1",
          "data_status": "미개발",
          "test_status": "—",
          "runtime_status": "—",
          "decision": "채택, 테마 집중 빌드"
        },
        {
          "record_id": "DifferentTypeCount",
          "id": "DifferentTypeCount",
          "meaning": "서로 다른 태그 수",
          "group": "후속 제안",
          "priority": "P2",
          "data_status": "미개발",
          "test_status": "—",
          "runtime_status": "—",
          "decision": "채택, 혼합 빌드"
        },
        {
          "record_id": "FreeSlotCount",
          "id": "FreeSlotCount",
          "meaning": "백팩 전체 빈칸 수",
          "group": "후속 제안",
          "priority": "P1",
          "data_status": "미개발",
          "test_status": "—",
          "runtime_status": "—",
          "decision": "채택, 공간 효율과 성능의 교환"
        },
        {
          "record_id": "OverlapEffectArea",
          "id": "OverlapEffectArea",
          "meaning": "여러 활성 영역이 겹침",
          "group": "후속 제안",
          "priority": "P2",
          "data_status": "미개발",
          "test_status": "—",
          "runtime_status": "—",
          "decision": "검토, 효과 중복과 시각화 필요"
        },
        {
          "record_id": "PocketCount",
          "id": "PocketCount",
          "meaning": "분리된 백팩 구역 수",
          "group": "후속 제안",
          "priority": "P3",
          "data_status": "보류",
          "test_status": "—",
          "runtime_status": "—",
          "decision": "포켓 시스템 확정 후 결정"
        }
      ]
    },
    {
      "id": "combat-triggers",
      "title": "발동 조건",
      "description": "전투 사건이 언제 효과를 실행하는지와 도입 우선순위를 관리합니다.",
      "unit": "TRIGGERS",
      "count": 20,
      "columns": [
        {
          "key": "id",
          "label": "Trigger ID",
          "kind": "code"
        },
        {
          "key": "name",
          "label": "표시명",
          "kind": "strong"
        },
        {
          "key": "priority",
          "label": "우선순위",
          "kind": "priority"
        },
        {
          "key": "development_status",
          "label": "개발 상태",
          "kind": "status"
        },
        {
          "key": "example",
          "label": "사용 예시",
          "kind": "wide"
        }
      ],
      "filters": [
        {
          "key": "priority",
          "label": "우선순위"
        },
        {
          "key": "development_status",
          "label": "개발 상태"
        }
      ],
      "rows": [
        {
          "record_id": "OnCombatStart",
          "id": "OnCombatStart",
          "name": "전투 시작 시",
          "priority": "P0",
          "development_status": "미개발",
          "example": "보호막 획득, 첫 투사체 생성"
        },
        {
          "record_id": "OnInterval",
          "id": "OnInterval",
          "name": "일정 시간마다",
          "priority": "P0",
          "development_status": "미개발",
          "example": "자동 회복, 장판 발생"
        },
        {
          "record_id": "OnAttackAttempt",
          "id": "OnAttackAttempt",
          "name": "공격 시도 시",
          "priority": "P0",
          "development_status": "미개발",
          "example": "발사 전 비용·효과 처리"
        },
        {
          "record_id": "OnHit",
          "id": "OnHit",
          "name": "명중 시",
          "priority": "P0",
          "development_status": "미개발",
          "example": "중독 부여, 흡혈"
        },
        {
          "record_id": "OnCriticalHit",
          "id": "OnCriticalHit",
          "name": "치명타 시",
          "priority": "P1",
          "development_status": "미개발",
          "example": "분열, 추가 상태 부여"
        },
        {
          "record_id": "OnMiss",
          "id": "OnMiss",
          "name": "빗나감 시",
          "priority": "P3",
          "development_status": "보류",
          "example": "정확도 시스템 채택 후 사용"
        },
        {
          "record_id": "OnDamaged",
          "id": "OnDamaged",
          "name": "피해를 받을 때",
          "priority": "P0",
          "development_status": "미개발",
          "example": "가시, 보호막 반응"
        },
        {
          "record_id": "OnKill",
          "id": "OnKill",
          "name": "적 처치 시",
          "priority": "P1",
          "development_status": "미개발",
          "example": "영구 강화, 아이템 생성"
        },
        {
          "record_id": "OnHealthThreshold",
          "id": "OnHealthThreshold",
          "name": "체력 기준 통과 시",
          "priority": "P1",
          "development_status": "미개발",
          "example": "50% 이하 가속, 1회 회복"
        },
        {
          "record_id": "OnProjectilePierce",
          "id": "OnProjectilePierce",
          "name": "투사체 관통 시",
          "priority": "P1",
          "development_status": "미개발",
          "example": "관통 피해 변화"
        },
        {
          "record_id": "OnProjectileRicochet",
          "id": "OnProjectileRicochet",
          "name": "투사체 도탄 시",
          "priority": "P1",
          "development_status": "미개발",
          "example": "도탄마다 강화"
        },
        {
          "record_id": "OnProjectileSplit",
          "id": "OnProjectileSplit",
          "name": "투사체 분열 시",
          "priority": "P1",
          "development_status": "미개발",
          "example": "자식 투사체 옵션 적용"
        },
        {
          "record_id": "OnAdjacentItemActivated",
          "id": "OnAdjacentItemActivated",
          "name": "인접 아이템 발동 시",
          "priority": "P1",
          "development_status": "미개발",
          "example": "연계 공격, 쿨타임 전진"
        },
        {
          "record_id": "OnConsumableConsumed",
          "id": "OnConsumableConsumed",
          "name": "소모품 소진 시",
          "priority": "P2",
          "development_status": "미개발",
          "example": "빈 용기 생성, 주변 강화"
        },
        {
          "record_id": "OnItemCreated",
          "id": "OnItemCreated",
          "name": "아이템 생성 시",
          "priority": "P2",
          "development_status": "미개발",
          "example": "생성물 수에 따른 효과"
        },
        {
          "record_id": "OnItemDestroyed",
          "id": "OnItemDestroyed",
          "name": "아이템 파괴 시",
          "priority": "P2",
          "development_status": "미개발",
          "example": "폭발, 인접 효과 갱신"
        },
        {
          "record_id": "OnItemMoved",
          "id": "OnItemMoved",
          "name": "아이템 이동 시",
          "priority": "P3",
          "development_status": "보류",
          "example": "전투 중 재배치가 생길 때 사용"
        },
        {
          "record_id": "OnStatusApplied",
          "id": "OnStatusApplied",
          "name": "상태 부여 시",
          "priority": "P1",
          "development_status": "미개발",
          "example": "상태 연쇄·반사"
        },
        {
          "record_id": "OnStatusCleansed",
          "id": "OnStatusCleansed",
          "name": "상태 해제 시",
          "priority": "P1",
          "development_status": "미개발",
          "example": "정화 보상"
        },
        {
          "record_id": "OnEmptyCellChanged",
          "id": "OnEmptyCellChanged",
          "name": "빈칸 수 변화 시",
          "priority": "P2",
          "development_status": "미개발",
          "example": "공간 기반 수치 재계산"
        }
      ]
    },
    {
      "id": "item-tags",
      "title": "아이템 태그",
      "description": "아이템 이름 대신 확장 가능한 분류를 사용하는 현재 태그와 후보를 관리합니다.",
      "unit": "TAGS",
      "count": 52,
      "columns": [
        {
          "key": "tag",
          "label": "태그",
          "kind": "code"
        },
        {
          "key": "group",
          "label": "그룹",
          "kind": "strong"
        },
        {
          "key": "development_status",
          "label": "도입 상태",
          "kind": "status"
        }
      ],
      "filters": [
        {
          "key": "group",
          "label": "그룹"
        },
        {
          "key": "development_status",
          "label": "도입 상태"
        }
      ],
      "rows": [
        {
          "record_id": "대분류:Weapon",
          "tag": "Weapon",
          "group": "대분류",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "대분류:Armor",
          "tag": "Armor",
          "group": "대분류",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "대분류:Ammo",
          "tag": "Ammo",
          "group": "대분류",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "대분류:Accessory",
          "tag": "Accessory",
          "group": "대분류",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "대분류:Consumable",
          "tag": "Consumable",
          "group": "대분류",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "대분류:Material",
          "tag": "Material",
          "group": "대분류",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "대분류:Treasure",
          "tag": "Treasure",
          "group": "대분류",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "대분류:Pet",
          "tag": "Pet",
          "group": "대분류",
          "development_status": "후속 제안"
        },
        {
          "record_id": "대분류:Structure",
          "tag": "Structure",
          "group": "대분류",
          "development_status": "후속 제안"
        },
        {
          "record_id": "대분류:Container",
          "tag": "Container",
          "group": "대분류",
          "development_status": "후속 제안"
        },
        {
          "record_id": "공격 방식:Melee",
          "tag": "Melee",
          "group": "공격 방식",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "공격 방식:Ranged",
          "tag": "Ranged",
          "group": "공격 방식",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "공격 방식:Projectile",
          "tag": "Projectile",
          "group": "공격 방식",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "공격 방식:Magic",
          "tag": "Magic",
          "group": "공격 방식",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "공격 방식:Summon",
          "tag": "Summon",
          "group": "공격 방식",
          "development_status": "후속 제안"
        },
        {
          "record_id": "공격 방식:Area",
          "tag": "Area",
          "group": "공격 방식",
          "development_status": "후속 제안"
        },
        {
          "record_id": "공격 방식:Channel",
          "tag": "Channel",
          "group": "공격 방식",
          "development_status": "후속 제안"
        },
        {
          "record_id": "무기:Sword",
          "tag": "Sword",
          "group": "무기",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "무기:Bow",
          "tag": "Bow",
          "group": "무기",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "무기:Gun",
          "tag": "Gun",
          "group": "무기",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "무기:Wand",
          "tag": "Wand",
          "group": "무기",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "무기:Staff",
          "tag": "Staff",
          "group": "무기",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "무기:Dagger",
          "tag": "Dagger",
          "group": "무기",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "무기:Spear",
          "tag": "Spear",
          "group": "무기",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "무기:Axe",
          "tag": "Axe",
          "group": "무기",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "무기:Hammer",
          "tag": "Hammer",
          "group": "무기",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "무기:Crossbow",
          "tag": "Crossbow",
          "group": "무기",
          "development_status": "후속 제안"
        },
        {
          "record_id": "무기:Launcher",
          "tag": "Launcher",
          "group": "무기",
          "development_status": "후속 제안"
        },
        {
          "record_id": "탄약:Arrow",
          "tag": "Arrow",
          "group": "탄약",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "탄약:Bullet",
          "tag": "Bullet",
          "group": "탄약",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "탄약:Bolt",
          "tag": "Bolt",
          "group": "탄약",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "탄약:Shell",
          "tag": "Shell",
          "group": "탄약",
          "development_status": "후속 제안"
        },
        {
          "record_id": "탄약:Rocket",
          "tag": "Rocket",
          "group": "탄약",
          "development_status": "후속 제안"
        },
        {
          "record_id": "방어구:Shield",
          "tag": "Shield",
          "group": "방어구",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "방어구:Helmet",
          "tag": "Helmet",
          "group": "방어구",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "방어구:ChestArmor",
          "tag": "ChestArmor",
          "group": "방어구",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "방어구:LegArmor",
          "tag": "LegArmor",
          "group": "방어구",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "방어구:Shoes",
          "tag": "Shoes",
          "group": "방어구",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "방어구:Gloves",
          "tag": "Gloves",
          "group": "방어구",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "방어구:Cloak",
          "tag": "Cloak",
          "group": "방어구",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "방어구:Belt",
          "tag": "Belt",
          "group": "방어구",
          "development_status": "후속 제안"
        },
        {
          "record_id": "장신구:Ring",
          "tag": "Ring",
          "group": "장신구",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "장신구:Amulet",
          "tag": "Amulet",
          "group": "장신구",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "장신구:Relic",
          "tag": "Relic",
          "group": "장신구",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "장신구:Charm",
          "tag": "Charm",
          "group": "장신구",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "장신구:Totem",
          "tag": "Totem",
          "group": "장신구",
          "development_status": "후속 제안"
        },
        {
          "record_id": "소모품:Food",
          "tag": "Food",
          "group": "소모품",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "소모품:Potion",
          "tag": "Potion",
          "group": "소모품",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "소모품:Healing",
          "tag": "Healing",
          "group": "소모품",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "소모품:Stamina",
          "tag": "Stamina",
          "group": "소모품",
          "development_status": "현재 데이터"
        },
        {
          "record_id": "소모품:Bomb",
          "tag": "Bomb",
          "group": "소모품",
          "development_status": "후속 제안"
        },
        {
          "record_id": "소모품:Scroll",
          "tag": "Scroll",
          "group": "소모품",
          "development_status": "후속 제안"
        }
      ]
    }
  ]
};
