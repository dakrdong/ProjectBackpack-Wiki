window.PACKBOUND_WEAPON_ROUTINE_DB = {
  "schema_version": 1,
  "title": "무기 루틴 데이터베이스",
  "description": "무기 슬롯 아이템 20종(공격 14·보조 6)의 고유 공격 루틴과 그 모든 조정 수치의 단일 원본입니다. 값을 바꾸면 런타임 모듈 GeneratedWeaponRoutines.luau가 다시 생성됩니다.",
  "routines": [
    {
      "item_id": "weapon.rapid_gear_sword",
      "display_name": "연격의 톱니검",
      "form": "Sword",
      "kind": "Orbit",
      "kind_label": "회전",
      "family": "Attack",
      "label": "Gear orbit",
      "summary": "캐릭터 주위를 시계 방향으로 360도 돌며 겹친 적마다 피해를 줍니다.",
      "parameters": [
        {
          "key": "Radius",
          "label": "반경",
          "type": "number",
          "value": 6,
          "unit": "stud",
          "min": 0.5,
          "max": 30,
          "step": 0.1,
          "description": "루틴이 사용하는 기본 반경입니다."
        },
        {
          "key": "PeriodSeconds",
          "label": "주기",
          "type": "number",
          "value": 1,
          "unit": "초",
          "min": 0.2,
          "max": 30,
          "step": 0.05,
          "description": "움직임이 한 바퀴 또는 한 왕복을 끝내는 시간입니다."
        },
        {
          "key": "Direction",
          "label": "회전 방향",
          "type": "choice",
          "value": 1,
          "unit": "",
          "choices": [
            {
              "value": 1,
              "label": "시계 방향"
            },
            {
              "value": -1,
              "label": "반시계 방향"
            }
          ],
          "description": "1은 시계 방향, -1은 반시계 방향입니다."
        },
        {
          "key": "Height",
          "label": "높이",
          "type": "number",
          "value": 6,
          "unit": "stud",
          "min": 0,
          "max": 10,
          "step": 0.1,
          "description": "바닥에서 무기가 떠 있는 높이입니다."
        },
        {
          "key": "ContactRadius",
          "label": "접촉 반경",
          "type": "number",
          "value": 0.5,
          "unit": "stud",
          "min": 0.2,
          "max": 6,
          "step": 0.1,
          "description": "무기와 적이 겹친 것으로 보는 거리입니다."
        },
        {
          "key": "ContactIntervalSeconds",
          "label": "같은 적 재타격 간격",
          "type": "number",
          "value": 0.3,
          "unit": "초",
          "min": 0.05,
          "max": 10,
          "step": 0.05,
          "description": "같은 적을 다시 때릴 수 있는 최소 간격입니다."
        }
      ]
    },
    {
      "item_id": "weapon.guardian_counter_sword",
      "display_name": "반격의 수호검",
      "form": "Sword",
      "kind": "PulseOrbit",
      "kind_label": "숨 쉬는 회전",
      "family": "Attack",
      "label": "Breathing guard orbit",
      "summary": "반시계 방향으로 돌며 반경이 숨 쉬듯 늘고 줄어 멀고 가까운 적을 번갈아 벱니다.",
      "parameters": [
        {
          "key": "RadiusMin",
          "label": "최소 반경",
          "type": "number",
          "value": 2.4,
          "unit": "stud",
          "min": 0.5,
          "max": 30,
          "step": 0.1,
          "description": "숨 쉬듯 줄어들 때의 가장 작은 반경입니다."
        },
        {
          "key": "RadiusMax",
          "label": "최대 반경",
          "type": "number",
          "value": 6.5,
          "unit": "stud",
          "min": 0.5,
          "max": 30,
          "step": 0.1,
          "description": "숨 쉬듯 늘어날 때의 가장 큰 반경입니다."
        },
        {
          "key": "PeriodSeconds",
          "label": "주기",
          "type": "number",
          "value": 1.9,
          "unit": "초",
          "min": 0.2,
          "max": 30,
          "step": 0.05,
          "description": "움직임이 한 바퀴 또는 한 왕복을 끝내는 시간입니다."
        },
        {
          "key": "Direction",
          "label": "회전 방향",
          "type": "choice",
          "value": -1,
          "unit": "",
          "choices": [
            {
              "value": 1,
              "label": "시계 방향"
            },
            {
              "value": -1,
              "label": "반시계 방향"
            }
          ],
          "description": "1은 시계 방향, -1은 반시계 방향입니다."
        },
        {
          "key": "Height",
          "label": "높이",
          "type": "number",
          "value": 1.8,
          "unit": "stud",
          "min": 0,
          "max": 10,
          "step": 0.1,
          "description": "바닥에서 무기가 떠 있는 높이입니다."
        },
        {
          "key": "ContactRadius",
          "label": "접촉 반경",
          "type": "number",
          "value": 1.5,
          "unit": "stud",
          "min": 0.2,
          "max": 6,
          "step": 0.1,
          "description": "무기와 적이 겹친 것으로 보는 거리입니다."
        },
        {
          "key": "ContactIntervalSeconds",
          "label": "같은 적 재타격 간격",
          "type": "number",
          "value": 0.95,
          "unit": "초",
          "min": 0.05,
          "max": 10,
          "step": 0.05,
          "description": "같은 적을 다시 때릴 수 있는 최소 간격입니다."
        }
      ]
    },
    {
      "item_id": "weapon.sky_piercer_spear",
      "display_name": "천공 장창",
      "form": "Spear",
      "kind": "ThrustLine",
      "kind_label": "직선 찌르기",
      "family": "Attack",
      "label": "Piercing thrust",
      "summary": "목표 앞에 대기하다 직선으로 찌르고 회수합니다. 찌르기 끝 순간 직선 위의 모든 적을 관통합니다.",
      "parameters": [
        {
          "key": "CycleSeconds",
          "label": "한 주기 시간",
          "type": "number",
          "value": 0.82,
          "unit": "초",
          "min": 0.2,
          "max": 20,
          "step": 0.05,
          "description": "동작 한 번(찌르기·내리치기·왕복·거치 발사)에 걸리는 시간입니다. 공격 속도로 짧아집니다."
        },
        {
          "key": "ReadyDistance",
          "label": "대기 거리",
          "type": "number",
          "value": 2.2,
          "unit": "stud",
          "min": 0,
          "max": 20,
          "step": 0.1,
          "description": "동작 전 캐릭터 앞에 대기하는 거리입니다."
        },
        {
          "key": "Length",
          "label": "직선 길이",
          "type": "number",
          "value": 7,
          "unit": "stud",
          "min": 0.5,
          "max": 40,
          "step": 0.5,
          "description": "직선 판정 또는 관통·산탄이 닿는 길이입니다."
        },
        {
          "key": "Width",
          "label": "직선 폭",
          "type": "number",
          "value": 2.4,
          "unit": "stud",
          "min": 0.2,
          "max": 12,
          "step": 0.1,
          "description": "직선 판정의 폭입니다."
        },
        {
          "key": "Height",
          "label": "높이",
          "type": "number",
          "value": 1.9,
          "unit": "stud",
          "min": 0,
          "max": 10,
          "step": 0.1,
          "description": "바닥에서 무기가 떠 있는 높이입니다."
        },
        {
          "key": "Phases.Ready",
          "label": "대기 단계 비중",
          "type": "number",
          "value": 0.45,
          "unit": "비율",
          "min": 0.01,
          "max": 1,
          "step": 0.01,
          "description": "한 주기 안에서 이 단계가 차지하는 비율입니다. 모든 단계 비중의 합으로 정규화됩니다."
        },
        {
          "key": "Phases.Thrust",
          "label": "찌르기 단계 비중",
          "type": "number",
          "value": 0.2,
          "unit": "비율",
          "min": 0.01,
          "max": 1,
          "step": 0.01,
          "description": "한 주기 안에서 이 단계가 차지하는 비율입니다. 모든 단계 비중의 합으로 정규화됩니다."
        },
        {
          "key": "Phases.Hold",
          "label": "유지 단계 비중",
          "type": "number",
          "value": 0.1,
          "unit": "비율",
          "min": 0.01,
          "max": 1,
          "step": 0.01,
          "description": "한 주기 안에서 이 단계가 차지하는 비율입니다. 모든 단계 비중의 합으로 정규화됩니다."
        },
        {
          "key": "Phases.Retract",
          "label": "회수 단계 비중",
          "type": "number",
          "value": 0.25,
          "unit": "비율",
          "min": 0.01,
          "max": 1,
          "step": 0.01,
          "description": "한 주기 안에서 이 단계가 차지하는 비율입니다. 모든 단계 비중의 합으로 정규화됩니다."
        }
      ]
    },
    {
      "item_id": "weapon.thunder_return_javelin",
      "display_name": "뇌광 투창",
      "form": "Spear",
      "kind": "Boomerang",
      "kind_label": "부메랑",
      "family": "Attack",
      "label": "Returning javelin",
      "summary": "목표까지 날아간 뒤 손으로 되돌아오며 왕복 경로에 겹친 적을 칩니다.",
      "parameters": [
        {
          "key": "CycleSeconds",
          "label": "한 주기 시간",
          "type": "number",
          "value": 1.1111,
          "unit": "초",
          "min": 0.2,
          "max": 20,
          "step": 0.05,
          "description": "동작 한 번(찌르기·내리치기·왕복·거치 발사)에 걸리는 시간입니다. 공격 속도로 짧아집니다."
        },
        {
          "key": "MinimumDistance",
          "label": "최소 비거리",
          "type": "number",
          "value": 6,
          "unit": "stud",
          "min": 0.5,
          "max": 60,
          "step": 0.5,
          "description": "가장 가까운 목표라도 최소 이만큼은 날아갑니다."
        },
        {
          "key": "MaximumDistance",
          "label": "최대 비거리",
          "type": "number",
          "value": 24,
          "unit": "stud",
          "min": 0.5,
          "max": 80,
          "step": 0.5,
          "description": "이보다 먼 목표에는 날아가지 않습니다."
        },
        {
          "key": "Height",
          "label": "높이",
          "type": "number",
          "value": 2.0,
          "unit": "stud",
          "min": 0,
          "max": 10,
          "step": 0.1,
          "description": "바닥에서 무기가 떠 있는 높이입니다."
        },
        {
          "key": "Phases.Out",
          "label": "날아가기 단계 비중",
          "type": "number",
          "value": 0.36,
          "unit": "비율",
          "min": 0.01,
          "max": 1,
          "step": 0.01,
          "description": "한 주기 안에서 이 단계가 차지하는 비율입니다. 모든 단계 비중의 합으로 정규화됩니다."
        },
        {
          "key": "Phases.Back",
          "label": "돌아오기 단계 비중",
          "type": "number",
          "value": 0.4,
          "unit": "비율",
          "min": 0.01,
          "max": 1,
          "step": 0.01,
          "description": "한 주기 안에서 이 단계가 차지하는 비율입니다. 모든 단계 비중의 합으로 정규화됩니다."
        },
        {
          "key": "Phases.Rest",
          "label": "휴식 단계 비중",
          "type": "number",
          "value": 0.24,
          "unit": "비율",
          "min": 0.01,
          "max": 1,
          "step": 0.01,
          "description": "한 주기 안에서 이 단계가 차지하는 비율입니다. 모든 단계 비중의 합으로 정규화됩니다."
        },
        {
          "key": "ContactRadius",
          "label": "접촉 반경",
          "type": "number",
          "value": 1.4,
          "unit": "stud",
          "min": 0.2,
          "max": 6,
          "step": 0.1,
          "description": "무기와 적이 겹친 것으로 보는 거리입니다."
        },
        {
          "key": "ContactIntervalSeconds",
          "label": "같은 적 재타격 간격",
          "type": "number",
          "value": 0.3,
          "unit": "초",
          "min": 0.05,
          "max": 10,
          "step": 0.05,
          "description": "같은 적을 다시 때릴 수 있는 최소 간격입니다."
        }
      ]
    },
    {
      "item_id": "weapon.gale_recurve_bow",
      "display_name": "질풍 곡궁",
      "form": "RecurveBow",
      "kind": "Strafe",
      "kind_label": "좌우 미끄러짐 사격",
      "family": "Attack",
      "label": "Strafing bow",
      "summary": "캐릭터 앞을 좌우로 미끄러지며 표적에게 화살을 쏩니다.",
      "parameters": [
        {
          "key": "Distance",
          "label": "앞 거리",
          "type": "number",
          "value": 2.2,
          "unit": "stud",
          "min": 0,
          "max": 20,
          "step": 0.1,
          "description": "캐릭터 앞으로 떨어진 기준 거리입니다."
        },
        {
          "key": "Amplitude",
          "label": "좌우 진폭",
          "type": "number",
          "value": 3.2,
          "unit": "stud",
          "min": 0,
          "max": 20,
          "step": 0.1,
          "description": "좌우로 미끄러지는 최대 거리입니다."
        },
        {
          "key": "PeriodSeconds",
          "label": "주기",
          "type": "number",
          "value": 1.6,
          "unit": "초",
          "min": 0.2,
          "max": 30,
          "step": 0.05,
          "description": "움직임이 한 바퀴 또는 한 왕복을 끝내는 시간입니다."
        },
        {
          "key": "Height",
          "label": "높이",
          "type": "number",
          "value": 2.2,
          "unit": "stud",
          "min": 0,
          "max": 10,
          "step": 0.1,
          "description": "바닥에서 무기가 떠 있는 높이입니다."
        },
        {
          "key": "ShotIntervalSeconds",
          "label": "발사 간격",
          "type": "number",
          "value": 0.52,
          "unit": "초",
          "min": 0.05,
          "max": 10,
          "step": 0.01,
          "description": "발사 사이 간격입니다. 공격 속도로 짧아집니다."
        },
        {
          "key": "Style",
          "label": "투사체 모양",
          "type": "choice",
          "value": "Arrow",
          "unit": "",
          "choices": [
            {
              "value": "Arrow",
              "label": "화살"
            },
            {
              "value": "Bolt",
              "label": "볼트"
            },
            {
              "value": "Bullet",
              "label": "탄환"
            }
          ],
          "description": "화면에 그리는 투사체 형태입니다."
        }
      ]
    },
    {
      "item_id": "weapon.hunter_recurve_bow",
      "display_name": "추적자의 곡궁",
      "form": "RecurveBow",
      "kind": "Lemniscate",
      "kind_label": "무한대 궤도",
      "family": "Attack",
      "label": "Figure-eight tracker",
      "summary": "바라보는 방향을 축으로 무한대(8자) 궤도를 그리며 표적에게 화살을 쏩니다.",
      "parameters": [
        {
          "key": "LobeLength",
          "label": "8자 길이",
          "type": "number",
          "value": 4.5,
          "unit": "stud",
          "min": 0.5,
          "max": 30,
          "step": 0.1,
          "description": "무한대 궤도 한쪽 잎의 길이입니다."
        },
        {
          "key": "LobeWidth",
          "label": "8자 폭",
          "type": "number",
          "value": 2.2,
          "unit": "stud",
          "min": 0.2,
          "max": 20,
          "step": 0.1,
          "description": "무한대 궤도의 폭입니다."
        },
        {
          "key": "PeriodSeconds",
          "label": "주기",
          "type": "number",
          "value": 2.4,
          "unit": "초",
          "min": 0.2,
          "max": 30,
          "step": 0.05,
          "description": "움직임이 한 바퀴 또는 한 왕복을 끝내는 시간입니다."
        },
        {
          "key": "Height",
          "label": "높이",
          "type": "number",
          "value": 2.0,
          "unit": "stud",
          "min": 0,
          "max": 10,
          "step": 0.1,
          "description": "바닥에서 무기가 떠 있는 높이입니다."
        },
        {
          "key": "ShotIntervalSeconds",
          "label": "발사 간격",
          "type": "number",
          "value": 0.68,
          "unit": "초",
          "min": 0.05,
          "max": 10,
          "step": 0.01,
          "description": "발사 사이 간격입니다. 공격 속도로 짧아집니다."
        },
        {
          "key": "Style",
          "label": "투사체 모양",
          "type": "choice",
          "value": "Arrow",
          "unit": "",
          "choices": [
            {
              "value": "Arrow",
              "label": "화살"
            },
            {
              "value": "Bolt",
              "label": "볼트"
            },
            {
              "value": "Bullet",
              "label": "탄환"
            }
          ],
          "description": "화면에 그리는 투사체 형태입니다."
        }
      ]
    },
    {
      "item_id": "weapon.siege_crossbow",
      "display_name": "공성 석궁",
      "form": "Crossbow",
      "kind": "Emplacement",
      "kind_label": "거치 관통",
      "family": "Attack",
      "label": "Siege emplacement",
      "summary": "캐릭터 뒤편에 거치되어 충전한 뒤 직선을 관통하는 볼트를 쏩니다.",
      "parameters": [
        {
          "key": "CycleSeconds",
          "label": "한 주기 시간",
          "type": "number",
          "value": 1.45,
          "unit": "초",
          "min": 0.2,
          "max": 20,
          "step": 0.05,
          "description": "동작 한 번(찌르기·내리치기·왕복·거치 발사)에 걸리는 시간입니다. 공격 속도로 짧아집니다."
        },
        {
          "key": "Back",
          "label": "뒤 오프셋",
          "type": "number",
          "value": 1.8,
          "unit": "stud",
          "min": -10,
          "max": 10,
          "step": 0.1,
          "description": "캐릭터 뒤쪽으로 떨어진 거리입니다."
        },
        {
          "key": "Side",
          "label": "옆 오프셋",
          "type": "number",
          "value": 1.2,
          "unit": "stud",
          "min": -10,
          "max": 10,
          "step": 0.1,
          "description": "캐릭터 오른쪽(+)/왼쪽(-)으로 떨어진 거리입니다."
        },
        {
          "key": "Height",
          "label": "높이",
          "type": "number",
          "value": 2.6,
          "unit": "stud",
          "min": 0,
          "max": 10,
          "step": 0.1,
          "description": "바닥에서 무기가 떠 있는 높이입니다."
        },
        {
          "key": "Phases.Charge",
          "label": "충전 단계 비중",
          "type": "number",
          "value": 0.7,
          "unit": "비율",
          "min": 0.01,
          "max": 1,
          "step": 0.01,
          "description": "한 주기 안에서 이 단계가 차지하는 비율입니다. 모든 단계 비중의 합으로 정규화됩니다."
        },
        {
          "key": "Phases.Recoil",
          "label": "반동 단계 비중",
          "type": "number",
          "value": 0.3,
          "unit": "비율",
          "min": 0.01,
          "max": 1,
          "step": 0.01,
          "description": "한 주기 안에서 이 단계가 차지하는 비율입니다. 모든 단계 비중의 합으로 정규화됩니다."
        },
        {
          "key": "Length",
          "label": "직선 길이",
          "type": "number",
          "value": 14,
          "unit": "stud",
          "min": 0.5,
          "max": 40,
          "step": 0.5,
          "description": "직선 판정 또는 관통·산탄이 닿는 길이입니다."
        },
        {
          "key": "Width",
          "label": "직선 폭",
          "type": "number",
          "value": 2.0,
          "unit": "stud",
          "min": 0.2,
          "max": 12,
          "step": 0.1,
          "description": "직선 판정의 폭입니다."
        },
        {
          "key": "MaximumTargets",
          "label": "최대 대상 수",
          "type": "integer",
          "value": 4,
          "unit": "명",
          "min": 1,
          "max": 12,
          "step": 1,
          "description": "한 번에 맞힐 수 있는 최대 적 수입니다."
        },
        {
          "key": "Style",
          "label": "투사체 모양",
          "type": "choice",
          "value": "Bolt",
          "unit": "",
          "choices": [
            {
              "value": "Arrow",
              "label": "화살"
            },
            {
              "value": "Bolt",
              "label": "볼트"
            },
            {
              "value": "Bullet",
              "label": "탄환"
            }
          ],
          "description": "화면에 그리는 투사체 형태입니다."
        }
      ]
    },
    {
      "item_id": "weapon.scatter_crossbow",
      "display_name": "산탄 석궁",
      "form": "Crossbow",
      "kind": "SweepFire",
      "kind_label": "부채꼴 산탄",
      "family": "Attack",
      "label": "Sweeping scatter",
      "summary": "앞쪽 호를 좌우로 오가며 부채꼴 산탄을 쏩니다.",
      "parameters": [
        {
          "key": "Radius",
          "label": "반경",
          "type": "number",
          "value": 2.4,
          "unit": "stud",
          "min": 0.5,
          "max": 30,
          "step": 0.1,
          "description": "루틴이 사용하는 기본 반경입니다."
        },
        {
          "key": "SweepDegrees",
          "label": "호 각도",
          "type": "number",
          "value": 100,
          "unit": "도",
          "min": 5,
          "max": 360,
          "step": 1,
          "description": "좌우로 오가는 호의 전체 각도입니다."
        },
        {
          "key": "PeriodSeconds",
          "label": "주기",
          "type": "number",
          "value": 2.0,
          "unit": "초",
          "min": 0.2,
          "max": 30,
          "step": 0.05,
          "description": "움직임이 한 바퀴 또는 한 왕복을 끝내는 시간입니다."
        },
        {
          "key": "Height",
          "label": "높이",
          "type": "number",
          "value": 1.7,
          "unit": "stud",
          "min": 0,
          "max": 10,
          "step": 0.1,
          "description": "바닥에서 무기가 떠 있는 높이입니다."
        },
        {
          "key": "ShotIntervalSeconds",
          "label": "발사 간격",
          "type": "number",
          "value": 1.0,
          "unit": "초",
          "min": 0.05,
          "max": 10,
          "step": 0.01,
          "description": "발사 사이 간격입니다. 공격 속도로 짧아집니다."
        },
        {
          "key": "ConeDegrees",
          "label": "부채꼴 각도",
          "type": "number",
          "value": 40,
          "unit": "도",
          "min": 5,
          "max": 360,
          "step": 1,
          "description": "부채꼴 판정의 전체 각도입니다."
        },
        {
          "key": "Length",
          "label": "직선 길이",
          "type": "number",
          "value": 9,
          "unit": "stud",
          "min": 0.5,
          "max": 40,
          "step": 0.5,
          "description": "직선 판정 또는 관통·산탄이 닿는 길이입니다."
        },
        {
          "key": "ProjectileCount",
          "label": "산탄 수",
          "type": "integer",
          "value": 5,
          "unit": "발",
          "min": 1,
          "max": 12,
          "step": 1,
          "description": "한 번에 흩뿌리는 탄의 수입니다."
        },
        {
          "key": "Style",
          "label": "투사체 모양",
          "type": "choice",
          "value": "Bolt",
          "unit": "",
          "choices": [
            {
              "value": "Arrow",
              "label": "화살"
            },
            {
              "value": "Bolt",
              "label": "볼트"
            },
            {
              "value": "Bullet",
              "label": "탄환"
            }
          ],
          "description": "화면에 그리는 투사체 형태입니다."
        }
      ]
    },
    {
      "item_id": "weapon.overheat_repeater",
      "display_name": "과열식 연발총",
      "form": "Gun",
      "kind": "Turret",
      "kind_label": "연사 포탑",
      "family": "Attack",
      "label": "Overheating turret",
      "summary": "어깨 위 포탑처럼 일정 시간 연사하고 과열로 쉽니다.",
      "parameters": [
        {
          "key": "Side",
          "label": "옆 오프셋",
          "type": "number",
          "value": 1.4,
          "unit": "stud",
          "min": -10,
          "max": 10,
          "step": 0.1,
          "description": "캐릭터 오른쪽(+)/왼쪽(-)으로 떨어진 거리입니다."
        },
        {
          "key": "Back",
          "label": "뒤 오프셋",
          "type": "number",
          "value": 0.4,
          "unit": "stud",
          "min": -10,
          "max": 10,
          "step": 0.1,
          "description": "캐릭터 뒤쪽으로 떨어진 거리입니다."
        },
        {
          "key": "Height",
          "label": "높이",
          "type": "number",
          "value": 2.9,
          "unit": "stud",
          "min": 0,
          "max": 10,
          "step": 0.1,
          "description": "바닥에서 무기가 떠 있는 높이입니다."
        },
        {
          "key": "FireSeconds",
          "label": "연사 시간",
          "type": "number",
          "value": 5,
          "unit": "초",
          "min": 0.5,
          "max": 60,
          "step": 0.5,
          "description": "쉬지 않고 쏘는 시간입니다."
        },
        {
          "key": "CoolSeconds",
          "label": "과열 휴식",
          "type": "number",
          "value": 3,
          "unit": "초",
          "min": 0,
          "max": 60,
          "step": 0.5,
          "description": "연사 뒤 쏘지 못하는 시간입니다."
        },
        {
          "key": "ShotIntervalSeconds",
          "label": "발사 간격",
          "type": "number",
          "value": 0.3846,
          "unit": "초",
          "min": 0.05,
          "max": 10,
          "step": 0.01,
          "description": "발사 사이 간격입니다. 공격 속도로 짧아집니다."
        },
        {
          "key": "Style",
          "label": "투사체 모양",
          "type": "choice",
          "value": "Bullet",
          "unit": "",
          "choices": [
            {
              "value": "Arrow",
              "label": "화살"
            },
            {
              "value": "Bolt",
              "label": "볼트"
            },
            {
              "value": "Bullet",
              "label": "탄환"
            }
          ],
          "description": "화면에 그리는 투사체 형태입니다."
        }
      ]
    },
    {
      "item_id": "weapon.ricochet_pistol",
      "display_name": "도탄 권총",
      "form": "Gun",
      "kind": "Ricochet",
      "kind_label": "도탄",
      "family": "Attack",
      "label": "Ricochet sidearm",
      "summary": "반대 어깨에서 여러 적을 잇는 도탄을 쏩니다.",
      "parameters": [
        {
          "key": "Side",
          "label": "옆 오프셋",
          "type": "number",
          "value": -1.4,
          "unit": "stud",
          "min": -10,
          "max": 10,
          "step": 0.1,
          "description": "캐릭터 오른쪽(+)/왼쪽(-)으로 떨어진 거리입니다."
        },
        {
          "key": "Front",
          "label": "앞 오프셋",
          "type": "number",
          "value": 0.6,
          "unit": "stud",
          "min": -10,
          "max": 10,
          "step": 0.1,
          "description": "캐릭터 앞쪽으로 떨어진 거리입니다."
        },
        {
          "key": "Height",
          "label": "높이",
          "type": "number",
          "value": 2.4,
          "unit": "stud",
          "min": 0,
          "max": 10,
          "step": 0.1,
          "description": "바닥에서 무기가 떠 있는 높이입니다."
        },
        {
          "key": "ShotIntervalSeconds",
          "label": "발사 간격",
          "type": "number",
          "value": 0.6,
          "unit": "초",
          "min": 0.05,
          "max": 10,
          "step": 0.01,
          "description": "발사 사이 간격입니다. 공격 속도로 짧아집니다."
        },
        {
          "key": "MaximumTargets",
          "label": "최대 대상 수",
          "type": "integer",
          "value": 3,
          "unit": "명",
          "min": 1,
          "max": 12,
          "step": 1,
          "description": "한 번에 맞힐 수 있는 최대 적 수입니다."
        },
        {
          "key": "ChainRadius",
          "label": "도탄 연결 반경",
          "type": "number",
          "value": 7,
          "unit": "stud",
          "min": 0.5,
          "max": 30,
          "step": 0.5,
          "description": "다음 대상을 찾는 거리입니다."
        },
        {
          "key": "LinkSeconds",
          "label": "도탄 간격",
          "type": "number",
          "value": 0.1,
          "unit": "초",
          "min": 0.02,
          "max": 2,
          "step": 0.01,
          "description": "대상에서 다음 대상으로 튕기는 시간입니다."
        },
        {
          "key": "Style",
          "label": "투사체 모양",
          "type": "choice",
          "value": "Bullet",
          "unit": "",
          "choices": [
            {
              "value": "Arrow",
              "label": "화살"
            },
            {
              "value": "Bolt",
              "label": "볼트"
            },
            {
              "value": "Bullet",
              "label": "탄환"
            }
          ],
          "description": "화면에 그리는 투사체 형태입니다."
        }
      ]
    },
    {
      "item_id": "weapon.quake_mace",
      "display_name": "지진 메이스",
      "form": "Mace",
      "kind": "FanSlam",
      "kind_label": "부채꼴 내리치기",
      "family": "Attack",
      "label": "Quake fan slam",
      "summary": "들어 올려 목표 방향 바닥을 내리쳐 부채꼴에 피해와 짧은 기절을 줍니다.",
      "parameters": [
        {
          "key": "CycleSeconds",
          "label": "한 주기 시간",
          "type": "number",
          "value": 1.3,
          "unit": "초",
          "min": 0.2,
          "max": 20,
          "step": 0.05,
          "description": "동작 한 번(찌르기·내리치기·왕복·거치 발사)에 걸리는 시간입니다. 공격 속도로 짧아집니다."
        },
        {
          "key": "RestHeight",
          "label": "대기 높이",
          "type": "number",
          "value": 2.4,
          "unit": "stud",
          "min": 0,
          "max": 10,
          "step": 0.1,
          "description": "내리치지 않을 때 떠 있는 높이입니다."
        },
        {
          "key": "RaiseHeight",
          "label": "들어 올리는 높이",
          "type": "number",
          "value": 4.6,
          "unit": "stud",
          "min": 0,
          "max": 12,
          "step": 0.1,
          "description": "내리치기 직전 최고 높이입니다."
        },
        {
          "key": "ImpactDistance",
          "label": "충격 지점 거리",
          "type": "number",
          "value": 1.6,
          "unit": "stud",
          "min": 0,
          "max": 10,
          "step": 0.1,
          "description": "캐릭터에서 바닥을 찍는 지점까지 거리입니다."
        },
        {
          "key": "Phases.Raise",
          "label": "들어 올림 단계 비중",
          "type": "number",
          "value": 0.35,
          "unit": "비율",
          "min": 0.01,
          "max": 1,
          "step": 0.01,
          "description": "한 주기 안에서 이 단계가 차지하는 비율입니다. 모든 단계 비중의 합으로 정규화됩니다."
        },
        {
          "key": "Phases.Slam",
          "label": "내리침 단계 비중",
          "type": "number",
          "value": 0.15,
          "unit": "비율",
          "min": 0.01,
          "max": 1,
          "step": 0.01,
          "description": "한 주기 안에서 이 단계가 차지하는 비율입니다. 모든 단계 비중의 합으로 정규화됩니다."
        },
        {
          "key": "Phases.Recover",
          "label": "회복 단계 비중",
          "type": "number",
          "value": 0.5,
          "unit": "비율",
          "min": 0.01,
          "max": 1,
          "step": 0.01,
          "description": "한 주기 안에서 이 단계가 차지하는 비율입니다. 모든 단계 비중의 합으로 정규화됩니다."
        },
        {
          "key": "Radius",
          "label": "반경",
          "type": "number",
          "value": 3,
          "unit": "stud",
          "min": 0.5,
          "max": 30,
          "step": 0.1,
          "description": "루틴이 사용하는 기본 반경입니다."
        },
        {
          "key": "ConeDegrees",
          "label": "부채꼴 각도",
          "type": "number",
          "value": 100,
          "unit": "도",
          "min": 5,
          "max": 360,
          "step": 1,
          "description": "부채꼴 판정의 전체 각도입니다."
        },
        {
          "key": "StunSeconds",
          "label": "기절 시간",
          "type": "number",
          "value": 0.25,
          "unit": "초",
          "min": 0,
          "max": 5,
          "step": 0.05,
          "description": "맞은 적이 멈추는 시간입니다. 제어 저항에 비례해 줄어듭니다."
        }
      ]
    },
    {
      "item_id": "weapon.guardian_mace",
      "display_name": "수호자 메이스",
      "form": "Mace",
      "kind": "RingSlam",
      "kind_label": "원형 내리치기",
      "family": "Attack",
      "label": "Guardian ring slam",
      "summary": "발밑을 내리쳐 사방 원형 충격파로 적을 밀어냅니다.",
      "parameters": [
        {
          "key": "CycleSeconds",
          "label": "한 주기 시간",
          "type": "number",
          "value": 1.0,
          "unit": "초",
          "min": 0.2,
          "max": 20,
          "step": 0.05,
          "description": "동작 한 번(찌르기·내리치기·왕복·거치 발사)에 걸리는 시간입니다. 공격 속도로 짧아집니다."
        },
        {
          "key": "RestHeight",
          "label": "대기 높이",
          "type": "number",
          "value": 2.4,
          "unit": "stud",
          "min": 0,
          "max": 10,
          "step": 0.1,
          "description": "내리치지 않을 때 떠 있는 높이입니다."
        },
        {
          "key": "RaiseHeight",
          "label": "들어 올리는 높이",
          "type": "number",
          "value": 4.4,
          "unit": "stud",
          "min": 0,
          "max": 12,
          "step": 0.1,
          "description": "내리치기 직전 최고 높이입니다."
        },
        {
          "key": "Phases.Raise",
          "label": "들어 올림 단계 비중",
          "type": "number",
          "value": 0.35,
          "unit": "비율",
          "min": 0.01,
          "max": 1,
          "step": 0.01,
          "description": "한 주기 안에서 이 단계가 차지하는 비율입니다. 모든 단계 비중의 합으로 정규화됩니다."
        },
        {
          "key": "Phases.Slam",
          "label": "내리침 단계 비중",
          "type": "number",
          "value": 0.15,
          "unit": "비율",
          "min": 0.01,
          "max": 1,
          "step": 0.01,
          "description": "한 주기 안에서 이 단계가 차지하는 비율입니다. 모든 단계 비중의 합으로 정규화됩니다."
        },
        {
          "key": "Phases.Recover",
          "label": "회복 단계 비중",
          "type": "number",
          "value": 0.5,
          "unit": "비율",
          "min": 0.01,
          "max": 1,
          "step": 0.01,
          "description": "한 주기 안에서 이 단계가 차지하는 비율입니다. 모든 단계 비중의 합으로 정규화됩니다."
        },
        {
          "key": "Radius",
          "label": "반경",
          "type": "number",
          "value": 4,
          "unit": "stud",
          "min": 0.5,
          "max": 30,
          "step": 0.1,
          "description": "루틴이 사용하는 기본 반경입니다."
        },
        {
          "key": "KnockbackStuds",
          "label": "밀치는 거리",
          "type": "number",
          "value": 2,
          "unit": "stud",
          "min": 0,
          "max": 20,
          "step": 0.5,
          "description": "맞은 적을 밖으로 밀어내는 거리입니다."
        }
      ]
    },
    {
      "item_id": "weapon.vampire_axe",
      "display_name": "흡혈 도끼",
      "form": "Axe",
      "kind": "LineSlam",
      "kind_label": "직선 내리치기",
      "family": "Attack",
      "label": "Vampire line slam",
      "summary": "목표 방향 바닥을 찍어 직선에 피해를 주고 피해의 일부를 회복합니다.",
      "parameters": [
        {
          "key": "CycleSeconds",
          "label": "한 주기 시간",
          "type": "number",
          "value": 0.85,
          "unit": "초",
          "min": 0.2,
          "max": 20,
          "step": 0.05,
          "description": "동작 한 번(찌르기·내리치기·왕복·거치 발사)에 걸리는 시간입니다. 공격 속도로 짧아집니다."
        },
        {
          "key": "RestHeight",
          "label": "대기 높이",
          "type": "number",
          "value": 2.2,
          "unit": "stud",
          "min": 0,
          "max": 10,
          "step": 0.1,
          "description": "내리치지 않을 때 떠 있는 높이입니다."
        },
        {
          "key": "RaiseHeight",
          "label": "들어 올리는 높이",
          "type": "number",
          "value": 4.4,
          "unit": "stud",
          "min": 0,
          "max": 12,
          "step": 0.1,
          "description": "내리치기 직전 최고 높이입니다."
        },
        {
          "key": "Phases.Raise",
          "label": "들어 올림 단계 비중",
          "type": "number",
          "value": 0.35,
          "unit": "비율",
          "min": 0.01,
          "max": 1,
          "step": 0.01,
          "description": "한 주기 안에서 이 단계가 차지하는 비율입니다. 모든 단계 비중의 합으로 정규화됩니다."
        },
        {
          "key": "Phases.Slam",
          "label": "내리침 단계 비중",
          "type": "number",
          "value": 0.15,
          "unit": "비율",
          "min": 0.01,
          "max": 1,
          "step": 0.01,
          "description": "한 주기 안에서 이 단계가 차지하는 비율입니다. 모든 단계 비중의 합으로 정규화됩니다."
        },
        {
          "key": "Phases.Recover",
          "label": "회복 단계 비중",
          "type": "number",
          "value": 0.5,
          "unit": "비율",
          "min": 0.01,
          "max": 1,
          "step": 0.01,
          "description": "한 주기 안에서 이 단계가 차지하는 비율입니다. 모든 단계 비중의 합으로 정규화됩니다."
        },
        {
          "key": "Length",
          "label": "직선 길이",
          "type": "number",
          "value": 5,
          "unit": "stud",
          "min": 0.5,
          "max": 40,
          "step": 0.5,
          "description": "직선 판정 또는 관통·산탄이 닿는 길이입니다."
        },
        {
          "key": "Width",
          "label": "직선 폭",
          "type": "number",
          "value": 2.2,
          "unit": "stud",
          "min": 0.2,
          "max": 12,
          "step": 0.1,
          "description": "직선 판정의 폭입니다."
        },
        {
          "key": "HealDamagePercent",
          "label": "피해 회복 비율",
          "type": "number",
          "value": 15,
          "unit": "%",
          "min": 0,
          "max": 100,
          "step": 1,
          "description": "준 피해의 이 비율만큼 체력을 회복합니다."
        }
      ]
    },
    {
      "item_id": "weapon.berserker_axe",
      "display_name": "광전사 도끼",
      "form": "Axe",
      "kind": "DoubleSlam",
      "kind_label": "2연속 내리치기",
      "family": "Attack",
      "label": "Berserker double slam",
      "summary": "한 주기에 두 번, 서로 다른 적을 향해 연속으로 찍습니다.",
      "parameters": [
        {
          "key": "CycleSeconds",
          "label": "한 주기 시간",
          "type": "number",
          "value": 1.12,
          "unit": "초",
          "min": 0.2,
          "max": 20,
          "step": 0.05,
          "description": "동작 한 번(찌르기·내리치기·왕복·거치 발사)에 걸리는 시간입니다. 공격 속도로 짧아집니다."
        },
        {
          "key": "RestHeight",
          "label": "대기 높이",
          "type": "number",
          "value": 2.2,
          "unit": "stud",
          "min": 0,
          "max": 10,
          "step": 0.1,
          "description": "내리치지 않을 때 떠 있는 높이입니다."
        },
        {
          "key": "RaiseHeight",
          "label": "들어 올리는 높이",
          "type": "number",
          "value": 4.4,
          "unit": "stud",
          "min": 0,
          "max": 12,
          "step": 0.1,
          "description": "내리치기 직전 최고 높이입니다."
        },
        {
          "key": "Phases.Raise",
          "label": "들어 올림 단계 비중",
          "type": "number",
          "value": 0.3,
          "unit": "비율",
          "min": 0.01,
          "max": 1,
          "step": 0.01,
          "description": "한 주기 안에서 이 단계가 차지하는 비율입니다. 모든 단계 비중의 합으로 정규화됩니다."
        },
        {
          "key": "Phases.Slam",
          "label": "내리침 단계 비중",
          "type": "number",
          "value": 0.1,
          "unit": "비율",
          "min": 0.01,
          "max": 1,
          "step": 0.01,
          "description": "한 주기 안에서 이 단계가 차지하는 비율입니다. 모든 단계 비중의 합으로 정규화됩니다."
        },
        {
          "key": "Phases.Raise2",
          "label": "두 번째 들어 올림 단계 비중",
          "type": "number",
          "value": 0.25,
          "unit": "비율",
          "min": 0.01,
          "max": 1,
          "step": 0.01,
          "description": "한 주기 안에서 이 단계가 차지하는 비율입니다. 모든 단계 비중의 합으로 정규화됩니다."
        },
        {
          "key": "Phases.Slam2",
          "label": "두 번째 내리침 단계 비중",
          "type": "number",
          "value": 0.1,
          "unit": "비율",
          "min": 0.01,
          "max": 1,
          "step": 0.01,
          "description": "한 주기 안에서 이 단계가 차지하는 비율입니다. 모든 단계 비중의 합으로 정규화됩니다."
        },
        {
          "key": "Phases.Recover",
          "label": "회복 단계 비중",
          "type": "number",
          "value": 0.25,
          "unit": "비율",
          "min": 0.01,
          "max": 1,
          "step": 0.01,
          "description": "한 주기 안에서 이 단계가 차지하는 비율입니다. 모든 단계 비중의 합으로 정규화됩니다."
        },
        {
          "key": "Length",
          "label": "직선 길이",
          "type": "number",
          "value": 5,
          "unit": "stud",
          "min": 0.5,
          "max": 40,
          "step": 0.5,
          "description": "직선 판정 또는 관통·산탄이 닿는 길이입니다."
        },
        {
          "key": "Width",
          "label": "직선 폭",
          "type": "number",
          "value": 2.4,
          "unit": "stud",
          "min": 0.2,
          "max": 12,
          "step": 0.1,
          "description": "직선 판정의 폭입니다."
        },
        {
          "key": "DamageMultiplier",
          "label": "피해 배율",
          "type": "number",
          "value": 0.6,
          "unit": "배",
          "min": 0.05,
          "max": 5,
          "step": 0.05,
          "description": "한 번의 타격이 기본 피해의 몇 배인지입니다."
        }
      ]
    },
    {
      "item_id": "support.bastion_gearshield",
      "display_name": "보루 톱니방패",
      "form": "Shield",
      "kind": "Bounce",
      "kind_label": "튕김",
      "family": "Support",
      "label": "Bastion bounce",
      "summary": "가까운 적을 친 뒤 근처 적으로 튕기며 여러 번 타격하고 돌아옵니다.",
      "parameters": [
        {
          "key": "IntervalSeconds",
          "label": "재사용 간격",
          "type": "number",
          "value": 4,
          "unit": "초",
          "min": 0.5,
          "max": 120,
          "step": 0.5,
          "description": "동작을 다시 시작하기까지의 간격입니다."
        },
        {
          "key": "SearchRange",
          "label": "탐색 범위(최대 이동 거리)",
          "type": "number",
          "value": 12,
          "unit": "stud",
          "min": 1,
          "max": 80,
          "step": 0.5,
          "description": "이 거리 안의 적만 목표로 삼아 날아갑니다."
        },
        {
          "key": "ChainRadius",
          "label": "도탄 연결 반경",
          "type": "number",
          "value": 8,
          "unit": "stud",
          "min": 0.5,
          "max": 30,
          "step": 0.5,
          "description": "다음 대상을 찾는 거리입니다."
        },
        {
          "key": "MaximumTargets",
          "label": "최대 대상 수",
          "type": "integer",
          "value": 3,
          "unit": "명",
          "min": 1,
          "max": 12,
          "step": 1,
          "description": "한 번에 맞힐 수 있는 최대 적 수입니다."
        },
        {
          "key": "HopSeconds",
          "label": "튕김 한 번 시간",
          "type": "number",
          "value": 0.22,
          "unit": "초",
          "min": 0.05,
          "max": 3,
          "step": 0.01,
          "description": "적에서 다음 적으로 튕기는 데 걸리는 시간입니다."
        },
        {
          "key": "ReturnSeconds",
          "label": "귀환 시간",
          "type": "number",
          "value": 0.35,
          "unit": "초",
          "min": 0.05,
          "max": 5,
          "step": 0.05,
          "description": "캐릭터 손으로 돌아오는 시간입니다."
        },
        {
          "key": "GuardFront",
          "label": "대기 앞 거리",
          "type": "number",
          "value": 1.6,
          "unit": "stud",
          "min": -10,
          "max": 10,
          "step": 0.1,
          "description": "대기할 때 캐릭터 앞으로 떨어진 거리입니다."
        },
        {
          "key": "GuardSide",
          "label": "대기 옆 거리",
          "type": "number",
          "value": 0.9,
          "unit": "stud",
          "min": -10,
          "max": 10,
          "step": 0.1,
          "description": "대기할 때 캐릭터 옆으로 떨어진 거리입니다."
        },
        {
          "key": "Height",
          "label": "높이",
          "type": "number",
          "value": 2.0,
          "unit": "stud",
          "min": 0,
          "max": 10,
          "step": 0.1,
          "description": "바닥에서 무기가 떠 있는 높이입니다."
        },
        {
          "key": "ContactDamage",
          "label": "접촉 피해",
          "type": "number",
          "value": 10,
          "unit": "",
          "min": 0,
          "max": 500,
          "step": 1,
          "description": "접촉 한 번의 기본 피해입니다. 등급에 비례해 오릅니다."
        }
      ]
    },
    {
      "item_id": "support.lifeline_cross",
      "display_name": "생명회로 십자가",
      "form": "Cross",
      "kind": "HealZone",
      "kind_label": "생명 원",
      "family": "Support",
      "label": "Lifeline drop zone",
      "summary": "근처 무작위 지점에 떨어져 생명 원을 만들고 그 안에 있으면 회복시킵니다.",
      "parameters": [
        {
          "key": "IntervalSeconds",
          "label": "재사용 간격",
          "type": "number",
          "value": 10,
          "unit": "초",
          "min": 0.5,
          "max": 120,
          "step": 0.5,
          "description": "동작을 다시 시작하기까지의 간격입니다."
        },
        {
          "key": "DropRadius",
          "label": "낙하 지점 반경",
          "type": "number",
          "value": 5,
          "unit": "stud",
          "min": 0.5,
          "max": 30,
          "step": 0.5,
          "description": "캐릭터 주변 이 반경 안 무작위 지점에 떨어집니다."
        },
        {
          "key": "ZoneDiameter",
          "label": "원 지름",
          "type": "number",
          "value": 6,
          "unit": "stud",
          "min": 1,
          "max": 40,
          "step": 0.5,
          "description": "바닥에 만드는 원의 지름입니다."
        },
        {
          "key": "ZoneSeconds",
          "label": "원 유지 시간",
          "type": "number",
          "value": 6,
          "unit": "초",
          "min": 0.5,
          "max": 60,
          "step": 0.5,
          "description": "원이 바닥에 남아 있는 시간입니다."
        },
        {
          "key": "DropSeconds",
          "label": "낙하 시간",
          "type": "number",
          "value": 0.45,
          "unit": "초",
          "min": 0.05,
          "max": 5,
          "step": 0.05,
          "description": "목표 지점까지 날아가는 시간입니다."
        },
        {
          "key": "HealPercentPerSecond",
          "label": "초당 회복 비율",
          "type": "number",
          "value": 1.5,
          "unit": "%/초",
          "min": 0,
          "max": 50,
          "step": 0.1,
          "description": "원 안에 있을 때 매초 회복하는 최대 체력 비율입니다."
        },
        {
          "key": "TickSeconds",
          "label": "적용 간격",
          "type": "number",
          "value": 0.5,
          "unit": "초",
          "min": 0.05,
          "max": 5,
          "step": 0.05,
          "description": "회복을 적용하는 간격입니다."
        },
        {
          "key": "RestBack",
          "label": "대기 뒤 거리",
          "type": "number",
          "value": 1.2,
          "unit": "stud",
          "min": -10,
          "max": 10,
          "step": 0.1,
          "description": "대기할 때 캐릭터 뒤로 떨어진 거리입니다."
        },
        {
          "key": "RestSide",
          "label": "대기 옆 거리",
          "type": "number",
          "value": -1.0,
          "unit": "stud",
          "min": -10,
          "max": 10,
          "step": 0.1,
          "description": "대기할 때 캐릭터 옆으로 떨어진 거리입니다."
        },
        {
          "key": "Height",
          "label": "높이",
          "type": "number",
          "value": 3.0,
          "unit": "stud",
          "min": 0,
          "max": 10,
          "step": 0.1,
          "description": "바닥에서 무기가 떠 있는 높이입니다."
        }
      ]
    },
    {
      "item_id": "support.resonance_mace",
      "display_name": "공명 지휘메이스",
      "form": "Mace",
      "kind": "Metronome",
      "kind_label": "진자",
      "family": "Support",
      "label": "Resonance metronome",
      "summary": "머리 위에서 메트로놈처럼 박자를 흔듭니다.",
      "parameters": [
        {
          "key": "PivotHeight",
          "label": "축 높이",
          "type": "number",
          "value": 4.4,
          "unit": "stud",
          "min": 0,
          "max": 12,
          "step": 0.1,
          "description": "진자가 매달린 축의 높이입니다."
        },
        {
          "key": "ArmLength",
          "label": "진자 길이",
          "type": "number",
          "value": 2.0,
          "unit": "stud",
          "min": 0.2,
          "max": 10,
          "step": 0.1,
          "description": "축에서 무기까지의 길이입니다."
        },
        {
          "key": "SwingDegrees",
          "label": "흔들림 각도",
          "type": "number",
          "value": 35,
          "unit": "도",
          "min": 0,
          "max": 90,
          "step": 1,
          "description": "좌우로 흔들리는 최대 각도입니다."
        },
        {
          "key": "PeriodSeconds",
          "label": "주기",
          "type": "number",
          "value": 1.2,
          "unit": "초",
          "min": 0.2,
          "max": 30,
          "step": 0.05,
          "description": "움직임이 한 바퀴 또는 한 왕복을 끝내는 시간입니다."
        },
        {
          "key": "Back",
          "label": "뒤 오프셋",
          "type": "number",
          "value": 0.8,
          "unit": "stud",
          "min": -10,
          "max": 10,
          "step": 0.1,
          "description": "캐릭터 뒤쪽으로 떨어진 거리입니다."
        }
      ]
    },
    {
      "item_id": "support.rally_horn",
      "display_name": "결집 전투뿔",
      "form": "Horn",
      "kind": "Circuit",
      "kind_label": "순회",
      "family": "Support",
      "label": "Rally circuit",
      "summary": "천천히 돌며 일정 간격으로 신호를 부는 듯 내려옵니다.",
      "parameters": [
        {
          "key": "Radius",
          "label": "반경",
          "type": "number",
          "value": 2.6,
          "unit": "stud",
          "min": 0.5,
          "max": 30,
          "step": 0.1,
          "description": "루틴이 사용하는 기본 반경입니다."
        },
        {
          "key": "PeriodSeconds",
          "label": "주기",
          "type": "number",
          "value": 6,
          "unit": "초",
          "min": 0.2,
          "max": 30,
          "step": 0.05,
          "description": "움직임이 한 바퀴 또는 한 왕복을 끝내는 시간입니다."
        },
        {
          "key": "HeightMin",
          "label": "최소 높이",
          "type": "number",
          "value": 2.4,
          "unit": "stud",
          "min": 0,
          "max": 12,
          "step": 0.1,
          "description": "순회 중 가장 낮은 높이입니다."
        },
        {
          "key": "HeightMax",
          "label": "최대 높이",
          "type": "number",
          "value": 3.6,
          "unit": "stud",
          "min": 0,
          "max": 12,
          "step": 0.1,
          "description": "순회 중 가장 높은 높이입니다."
        },
        {
          "key": "CallIntervalSeconds",
          "label": "신호 간격",
          "type": "number",
          "value": 3,
          "unit": "초",
          "min": 0.5,
          "max": 60,
          "step": 0.5,
          "description": "신호를 부는 듯 내려오는 간격입니다."
        }
      ]
    },
    {
      "item_id": "support.ward_lantern",
      "display_name": "수호등 랜턴",
      "form": "Lantern",
      "kind": "GravityWell",
      "kind_label": "중력 우물",
      "family": "Support",
      "label": "Ward gravity well",
      "summary": "가까운 몬스터 집단 사이에 떨어져 일정 시간 주변 몬스터를 랜턴 중심으로 끌어당깁니다.",
      "parameters": [
        {
          "key": "IntervalSeconds",
          "label": "재사용 간격",
          "type": "number",
          "value": 6,
          "unit": "초",
          "min": 0.5,
          "max": 120,
          "step": 0.5,
          "description": "동작을 다시 시작하기까지의 간격입니다."
        },
        {
          "key": "SearchRange",
          "label": "탐색 범위(최대 이동 거리)",
          "type": "number",
          "value": 14,
          "unit": "stud",
          "min": 1,
          "max": 80,
          "step": 0.5,
          "description": "이 거리 안의 적만 목표로 삼아 날아갑니다."
        },
        {
          "key": "ClusterRadius",
          "label": "집단 판정 반경",
          "type": "number",
          "value": 5,
          "unit": "stud",
          "min": 0.5,
          "max": 30,
          "step": 0.5,
          "description": "목표 주변 이 거리 안의 몬스터를 한 집단으로 보고 중심을 구합니다."
        },
        {
          "key": "DropSeconds",
          "label": "낙하 시간",
          "type": "number",
          "value": 0.4,
          "unit": "초",
          "min": 0.05,
          "max": 5,
          "step": 0.05,
          "description": "목표 지점까지 날아가는 시간입니다."
        },
        {
          "key": "WellSeconds",
          "label": "끌어당기는 시간",
          "type": "number",
          "value": 3,
          "unit": "초",
          "min": 0.5,
          "max": 60,
          "step": 0.5,
          "description": "바닥에 머물며 끌어당기는 시간입니다."
        },
        {
          "key": "PullRadius",
          "label": "끌어당김 범위",
          "type": "number",
          "value": 6,
          "unit": "stud",
          "min": 0.5,
          "max": 40,
          "step": 0.5,
          "description": "이 반경 안의 몬스터를 끌어당깁니다."
        },
        {
          "key": "PullStudsPerSecond",
          "label": "끌어당기는 힘",
          "type": "number",
          "value": 6,
          "unit": "stud/초",
          "min": 0,
          "max": 60,
          "step": 0.5,
          "description": "1초 동안 끌어당기는 거리입니다. 제어 저항에 비례해 줄어듭니다."
        },
        {
          "key": "PullTickSeconds",
          "label": "끌어당김 적용 간격",
          "type": "number",
          "value": 0.25,
          "unit": "초",
          "min": 0.05,
          "max": 2,
          "step": 0.05,
          "description": "끌어당김을 적용하는 간격입니다."
        },
        {
          "key": "HoldDistance",
          "label": "정지 거리",
          "type": "number",
          "value": 1.2,
          "unit": "stud",
          "min": 0,
          "max": 10,
          "step": 0.1,
          "description": "중심에서 이 거리 안으로는 끌어당기지 않습니다."
        },
        {
          "key": "RestFront",
          "label": "대기 앞 거리",
          "type": "number",
          "value": 2.0,
          "unit": "stud",
          "min": -10,
          "max": 10,
          "step": 0.1,
          "description": "대기할 때 캐릭터 앞으로 떨어진 거리입니다."
        },
        {
          "key": "Height",
          "label": "높이",
          "type": "number",
          "value": 2.6,
          "unit": "stud",
          "min": 0,
          "max": 10,
          "step": 0.1,
          "description": "바닥에서 무기가 떠 있는 높이입니다."
        },
        {
          "key": "BobAmplitude",
          "label": "출렁임 폭",
          "type": "number",
          "value": 0.3,
          "unit": "stud",
          "min": 0,
          "max": 3,
          "step": 0.05,
          "description": "대기 중 위아래로 출렁이는 폭입니다."
        },
        {
          "key": "PeriodSeconds",
          "label": "주기",
          "type": "number",
          "value": 1.8,
          "unit": "초",
          "min": 0.2,
          "max": 30,
          "step": 0.05,
          "description": "움직임이 한 바퀴 또는 한 왕복을 끝내는 시간입니다."
        }
      ]
    },
    {
      "item_id": "support.guardian_standard",
      "display_name": "생명수호 전투깃발",
      "form": "Standard",
      "kind": "Planted",
      "kind_label": "후방 고정",
      "family": "Support",
      "label": "Planted standard",
      "summary": "캐릭터 뒤에 꽂힌 채 흔들립니다.",
      "parameters": [
        {
          "key": "Back",
          "label": "뒤 오프셋",
          "type": "number",
          "value": 1.6,
          "unit": "stud",
          "min": -10,
          "max": 10,
          "step": 0.1,
          "description": "캐릭터 뒤쪽으로 떨어진 거리입니다."
        },
        {
          "key": "Height",
          "label": "높이",
          "type": "number",
          "value": 3.2,
          "unit": "stud",
          "min": 0,
          "max": 10,
          "step": 0.1,
          "description": "바닥에서 무기가 떠 있는 높이입니다."
        },
        {
          "key": "SwayDegrees",
          "label": "흔들림 각도",
          "type": "number",
          "value": 8,
          "unit": "도",
          "min": 0,
          "max": 90,
          "step": 1,
          "description": "꽂힌 채 흔들리는 최대 각도입니다."
        },
        {
          "key": "PeriodSeconds",
          "label": "주기",
          "type": "number",
          "value": 2.6,
          "unit": "초",
          "min": 0.2,
          "max": 30,
          "step": 0.05,
          "description": "움직임이 한 바퀴 또는 한 왕복을 끝내는 시간입니다."
        }
      ]
    }
  ],
  "revision": "b4a04a8405c7284e",
  "count": 20,
  "attack_count": 14,
  "support_count": 6,
  "parameter_count": 162
};
