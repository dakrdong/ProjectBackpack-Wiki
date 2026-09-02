window.PACKBOUND_ALPHA_PROGRESS = {
  "schema_version": 1,
  "title": "알파 완성 진행도",
  "summary": "PackBound 알파가 실제로 플레이 가능한 한 사이클을 완성하는 데 필요한 시스템, 콘텐츠, 품질 작업을 한 트리에서 추적합니다. 높은 기반 완성도와 아직 부족한 콘텐츠 수량을 분리해 보여 줍니다.",
  "alpha_definition": "새 플레이어가 모바일에서 튜토리얼을 마치고 베이스캠프에서 장비를 준비한 뒤, 완성된 보스가 포함된 스테이지를 끝까지 플레이하고 보상·성장·재도전까지 오류 없이 이어갈 수 있으며, 목표 콘텐츠 수량과 운영·성능·저장 검증이 승인된 상태입니다.",
  "snapshot": {
    "reviewed_on": "2026-09-02",
    "baseline_commit": "b64ee32",
    "scope_note": "완료 판정은 기준 커밋에서 출발한 현재 발행 후보의 저장소·자동 검사·Studio 고정 시나리오 증거를 사용했습니다. 스테이지 1의 클리어·보상·사망·재도전은 두 모바일 화면에서 실제 서버 경로로 연결됐지만, 사용자 방침에 따라 사람처럼 조작하는 플레이 테스트는 제외했고 실제 기기 FPS와 조작 감각은 아직 증명하지 않았습니다. 수량 목표와 가중치는 현재 제품 오너 요청을 바탕으로 만든 관리용 임시 기준입니다.",
    "studio": {
      "place_id": 74789994491954,
      "place_name": "팩 바운드",
      "mode": "Edit",
      "discrepancies": []
    }
  },
  "methodology": {
    "aggregation": "각 말단 작업에 0~100의 진행률과 상태를 부여하고, 같은 부모 안에서는 명시된 가중치로 평균을 냅니다. 최상위 12개 파트의 가중치 합은 100입니다. 반복 수량은 각 슬롯을 실제 하위 항목으로 펼쳐 계산하므로 스테이지 1개를 시스템 전체 완성으로 오인하지 않습니다.",
    "status_rule": "완료·검증은 관련 구현과 필요한 자동 검사·현재 런타임 증거가 모두 있을 때만 100으로 표시합니다. 구현은 있으나 통합 또는 최신 검증이 빠지면 진행 중, 문서만 있으면 계획만 있음, 근거가 없으면 미확인, 승인 조건이 명시적으로 막혀 있으면 차단됨으로 표시합니다. 모든 개발 작업은 수치가 변하지 않더라도 관련 말단 항목에 날짜가 있는 작업 근거와 다음 완료 관문을 남깁니다. 이 숫자는 일정 약속이 아니라 우선순위 판단을 위한 관리용 추정치입니다."
  },
  "highlights": [
    {
      "kind": "strength",
      "title": "준비·전투·보상 시스템의 뼈대는 연결돼 있습니다.",
      "body": "모바일 인벤토리, 장착, 알파 장비 54종의 전투 수치, 웨이브, 사망·클리어 결과, 보상, 룬 합성, 마스터리가 각각 서버 권한 계약과 자동 검사를 갖고 있습니다."
    },
    {
      "kind": "priority",
      "title": "스테이지 1 다음에는 후속 콘텐츠와 실기기 품질을 채웁니다.",
      "body": "과충전 자판두꺼비와 단독 보스 웨이브, 경기장 전환, 클리어·보상·사망·재도전 흐름은 두 모바일 화면의 비조작 자동 시나리오로 연결됐습니다. 다음 관문은 실제 기기 성능과 후속 스테이지 제작입니다."
    },
    {
      "kind": "risk",
      "title": "시스템 수보다 콘텐츠 수량과 실제 소비 연결이 뒤처져 있습니다.",
      "body": "스테이지는 1/50, 활성 보스는 1/5이며, 540개 룬 보드가 있어도 실제 룬 전투 소비는 한 무기의 5개 노드에 국한됩니다."
    }
  ],
  "categories": [
    {
      "id": "core-playable-loop",
      "title": "핵심 플레이 루프",
      "description": "접속부터 준비, 전투, 결과, 보상과 재도전까지의 한 사이클입니다.",
      "track": "system",
      "weight": 14,
      "sources": [
        "wiki/content/pages/base-camp-field-hub/v002.md",
        "wiki/content/pages/stage-run-experience/v002.md",
        "src/ServerScriptService/StageRuns/StageRunService.luau",
        "src/ServerScriptService/Economy/EconomyDomain.luau"
      ],
      "children": [
        {
          "id": "spawn-and-basecamp-arrival",
          "title": "접속·부활과 베이스캠프 도착",
          "progress": 100,
          "status": "proven",
          "evidence": [
            "신규 진행은 튜토리얼로, 완료 진행은 베이스캠프로 배치하는 서버 흐름과 검증 근거가 있습니다."
          ],
          "next_step": "새 프로필과 기존 프로필 회귀 검증을 유지합니다.",
          "sources": [
            "src/ServerScriptService/BaseCampService.server.luau"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "facility-session-unlocks",
          "title": "시설 순차 해금과 안전한 사용 세션",
          "progress": 100,
          "status": "proven",
          "evidence": [
            "튜토리얼 진도, 거리, 만료, 중복 사용을 서버가 검증합니다."
          ],
          "next_step": "새 시설도 같은 세션 계약을 사용합니다.",
          "sources": [
            "src/ServerScriptService/BaseCampFacilitySessionDomain.luau"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "stage-briefing-entry",
          "title": "스테이지 진입 안내와 서버 재확인",
          "progress": 100,
          "status": "proven",
          "evidence": [
            "필드·난이도·몬스터·보상을 먼저 보여 주고 45초 안내표를 서버가 재검증합니다."
          ],
          "next_step": "복수 스테이지 선택 시에도 같은 계약을 확장합니다.",
          "sources": [
            "src/ReplicatedStorage/StageFlow/StageFlowScreen.luau",
            "tests/test_base_camp_portal_security.py"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "wave-runtime-lifecycle",
          "title": "웨이브 예약·소환·전멸 판정",
          "progress": 100,
          "status": "proven",
          "evidence": [
            "시간층 소환, 사망 시 자식 몬스터, 이탈·사망 실패와 필드 복원 계약이 자동 검사에 있습니다."
          ],
          "next_step": "다중 스테이지에서도 격리와 정리를 유지합니다.",
          "sources": [
            "src/ServerScriptService/StageRuns/StageRunLifecycleDomain.luau",
            "tests/StageRunLifecycleDomain.spec.luau"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "stage-one-full-run",
          "title": "스테이지 1 실제 5웨이브 완주",
          "progress": 95,
          "status": "partial",
          "evidence": [
            "5웨이브 데이터와 실행기, 단독 보스전, 경기장 전환, 정산과 복귀가 연결됐습니다.",
            "[2026-09-02] iPhone 17 Pro 401×776의 고정 자동 시나리오가 실제 1~5웨이브 서버 런, 보스 사망, Clear 1회, 최초 200동·룬 2개·장비 3택1·중복 수령 차단과 베이스캠프 복귀를 통과했습니다.",
            "[2026-09-02] iPhone 7 374×666의 별도 자동 시나리오가 보스 사망 원인, 4웨이브 완료 패배 35동, 잔여물 0, 베이스캠프 부활과 다른 Run ID의 1웨이브 재도전을 통과했습니다. 사람처럼 캐릭터를 조작하는 플레이 테스트는 사용자 방침에 따라 제외했습니다."
          ],
          "next_step": "실제 모바일 기기의 렌더링 성능과 회피 조작 감각은 별도 외부 측정으로 확인합니다.",
          "sources": [
            "docs/gameplay/stage-wave-definitions.json",
            "wiki/content/pages/stage-wave-database/v003.md"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 95,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "death-cause-result",
          "title": "사망 판정·가해자 기록·결과 UI",
          "progress": 100,
          "status": "proven",
          "evidence": [
            "직접 가해 몬스터, 공격 방식, 피해량과 전투 통계를 모바일 결과 화면에 표시합니다."
          ],
          "next_step": "새 공격 유형의 사망 팁을 계속 추가합니다.",
          "sources": [
            "src/ServerScriptService/PlayerCombatStatus.luau",
            "tests/test_stage_flow_screen.py"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "death-character-presentation",
          "title": "플레이어 사망 연출",
          "progress": 60,
          "status": "partial",
          "evidence": [
            "Death 프레임과 상태 경로는 있으나 최신 실제 사망에서 연출이 끝까지 재생되는 증거가 부족합니다."
          ],
          "next_step": "실제 사망→Death 애니메이션→결과 화면 전환을 두 모바일 화면에서 캡처합니다.",
          "sources": [
            "src/ReplicatedStorage/Character2D/CharacterRenderer.luau"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 60,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "clear-results-and-rewards",
          "title": "클리어 결과·장비 3택·룬·동 보상",
          "progress": 100,
          "status": "proven",
          "evidence": [
            "클리어 통계, 장비 3개 중 1개 선택, 룬과 재화 수령, 중복·응답 유실 복구 계약이 있습니다."
          ],
          "next_step": "스테이지별 보상표가 늘어나도 원자 수령을 유지합니다.",
          "sources": [
            "src/ReplicatedStorage/Economy/StageRewardScreen.luau",
            "src/ServerScriptService/Economy/StageRewardDB.luau"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "clear-character-presentation",
          "title": "플레이어 클리어 연출",
          "progress": 55,
          "status": "partial",
          "evidence": [
            "Clear 상태 경로는 있으나 실제 런 완료 순간의 최신 트리거·재생 증거가 부족합니다."
          ],
          "next_step": "최종 웨이브 종료 뒤 Clear 모션과 결과 UI 순서를 검증합니다.",
          "sources": [
            "src/ReplicatedStorage/Character2D/CharacterRenderer.luau"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 55,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "return-and-retry",
          "title": "베이스캠프 복귀와 재도전",
          "progress": 70,
          "status": "partial",
          "evidence": [
            "생존자 즉시 복귀와 사망자 부활 후 캠프 배치는 구현됐지만 전체 재도전 기록이 없습니다."
          ],
          "next_step": "클리어와 사망 양쪽에서 캠프 복귀→재도전을 실제로 반복합니다.",
          "sources": [
            "src/ServerScriptService/StageRuns/StageRunService.luau"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 70,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "mobile-end-to-end-loop",
          "title": "모바일 종단 간 플레이 루프 검증",
          "progress": 45,
          "status": "partial",
          "evidence": [
            "개별 화면과 하네스는 강하지만 캠프→5웨이브→정산→복귀를 한 세션에서 증명하지 않았습니다."
          ],
          "next_step": "iPhone 17 Pro와 작은 휴대폰에서 새 프로필의 전체 루프를 각각 완주하고 콘솔·잔여 상태를 확인합니다.",
          "sources": [
            "wiki/content/pages/environment-harness-qa/v001.md"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 45,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        }
      ],
      "depth": 0,
      "computed_progress": 84,
      "computed_status": "partial",
      "leaf_count": 11,
      "proven_count": 6,
      "status_counts": {
        "proven": 6,
        "partial": 5,
        "planned_only": 0,
        "unknown": 0,
        "blocked": 0
      }
    },
    {
      "id": "tutorial-first-session",
      "title": "튜토리얼과 첫 30분",
      "description": "조작 학습부터 장비·룬·합성·마스터리를 처음 사용하는 동선입니다.",
      "track": "system",
      "weight": 8,
      "sources": [
        "wiki/content/pages/tutorial-onboarding/v002.md",
        "src/ServerScriptService/Tutorial/TutorialProgressionDomain.luau"
      ],
      "children": [
        {
          "id": "tutorial-first-movement",
          "title": "첫 이동 동선과 박사 방향 안내",
          "progress": 100,
          "status": "proven",
          "evidence": [
            "화면 밖 박사 방향 안내와 첫 이동 목표가 실제 모바일 화면에서 검증됐습니다."
          ],
          "next_step": "동선 변경 시 방향 안내 회귀 검증을 유지합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "tutorial-dash-gate",
          "title": "대시로 위험 지대 통과",
          "progress": 100,
          "status": "proven",
          "evidence": [
            "걸어서 넘을 수 없는 불길과 대시 무적 통과 목표가 서버 사건으로 연결됩니다."
          ],
          "next_step": "다른 기기에서도 목표와 위험 구역이 겹치지 않게 유지합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "tutorial-world-story",
          "title": "세계관과 박사·플레이어 대화",
          "progress": 75,
          "status": "partial",
          "evidence": [
            "박사와 남녀 플레이어 감정 초상화 대화는 완성됐지만 세계의 장기 목표 설명은 최소 수준입니다.",
            "[2026-09-01] 좌우 초상은 화면을 가리는 카드 없이 투명하게 띄우고, 현재 화자만 크게·선명하게 보이며 하단의 단일 말풍선만 화자 방향에 따라 전환되도록 모바일 대화 화면을 개편했습니다.",
            "[2026-09-01] iPhone 17 Pro 세로 401×776과 Galaxy A06 세로 359×718에서 양쪽 화자 전환, 안전 영역, 52px 이상 조작 버튼, 한국어·영어 전체 19개 대사의 줄바꿈과 텍스트 맞춤을 확인했습니다."
          ],
          "next_step": "알파의 목표와 고물 세계의 위협을 짧은 행동 중심 대사로 보강하고, 실제 신규 프로필의 E 상호작용부터 대화 완료 사건까지 한 흐름으로 회귀 검증합니다.",
          "sources": [
            "src/ReplicatedStorage/Tutorial/TutorialDialogueScreen.luau",
            "src/ReplicatedStorage/Tutorial/TutorialEngineerDefinition.luau",
            "tests/test_tutorial_runtime.py",
            "tests/test_player_dialogue_portraits.py"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 75,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "tutorial-first-combat",
          "title": "세 차례 전투와 첫 장비 획득",
          "progress": 100,
          "status": "proven",
          "evidence": [
            "전투 완료를 서버가 확인하고 첫 장비와 인벤토리를 한 번만 지급합니다."
          ],
          "next_step": "몬스터 교체 뒤에도 난이도와 보상 사건을 유지합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "tutorial-equipment-placement",
          "title": "첫 무기 장착 설명",
          "progress": 100,
          "status": "proven",
          "evidence": [
            "첫 장비를 장착판에 놓는 행동이 다음 단계와 룬 보상으로 연결됩니다."
          ],
          "next_step": "장착판 규칙 변경 시 안내 문구를 동기화합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "tutorial-rune-placement",
          "title": "첫 룬 장착 설명",
          "progress": 95,
          "status": "partial",
          "evidence": [
            "G0 시작점과 유효 배치를 직접 수행해야 베이스캠프로 진행합니다.",
            "[2026-09-01] 실제 보유 룬을 소모하지 않는 3페이지 연습 가이드를 추가했습니다. 같은 등급 한 줄 간격 규칙 2종과 다른 등급 인접 허용 규칙을 페이지마다 직접 옮겨 볼 수 있습니다.",
            "[2026-09-01] iPhone 17 Pro 세로 401×776과 Galaxy A06 세로 359×718에서 한국어·영어 3페이지, 안전 영역, 48px 이상 조작 버튼, 유효 칸 초록 표시와 진단 배치를 확인했습니다. Studio 입력 주입이 Activated/InputBegan을 발생시키지 못해 실제 손가락 드래그 완료 경로만 미검증으로 남겼습니다.",
            "[2026-09-01] 가이드를 5페이지로 확장했습니다. 4페이지는 G0 블록의 60도 회전으로 능력 2칸을 활성화하고, 5페이지는 선택한 G0·G1 블록을 독립적으로 회전·배치해 색상별 능력 2칸을 활성화해야 체크됩니다. 다른 색 블록이 능력 칸을 덮어도 활성화 수에 포함하지 않는 규칙을 모델 테스트로 고정했습니다."
          ],
          "next_step": "Studio 입력 주입이 정상화되면 두 모바일 화면에서 실제 손가락으로 블럭 선택·60도 회전·유효·무효 배치·능력 체크 완료를 수행하고, 5페이지 이동과 닫기까지 한 흐름으로 회귀 검증합니다.",
          "sources": [
            "src/ReplicatedStorage/InventoryV2/RunePlacementGuideModel.luau",
            "src/ReplicatedStorage/InventoryV2/RunePlacementGuideScreen.luau",
            "src/ReplicatedStorage/InventoryV2/Screen.luau",
            "tests/InventoryV2.spec.luau",
            "tests/test_inventory_v2_ui.py"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 95,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "tutorial-basecamp-introduction",
          "title": "베이스캠프와 시설 소개",
          "progress": 100,
          "status": "proven",
          "evidence": [
            "상점·보관함·포털을 먼저 열고 이후 시설은 클리어 횟수에 따라 순차 해금합니다."
          ],
          "next_step": "추가 시설은 한 번에 모두 노출하지 않습니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "tutorial-first-clear",
          "title": "첫 클리어와 룬 합성 해금",
          "progress": 85,
          "status": "partial",
          "evidence": [
            "해금·보상 규칙은 구현됐지만 실제 5웨이브 완주와 한 흐름으로 검증되지 않았습니다."
          ],
          "next_step": "스테이지 1 실제 완주에서 룬 합성 해금과 보상 수령을 확인합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 85,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "tutorial-rune-fusion",
          "title": "룬 합성 설명과 결과 수령",
          "progress": 100,
          "status": "proven",
          "evidence": [
            "재료 선택, 일괄 합성, 결과 공개와 수령을 두 모바일 크기에서 검증했습니다."
          ],
          "next_step": "튜토리얼용 재료가 재접속 뒤에도 중복되지 않게 유지합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "tutorial-equipment-fusion",
          "title": "장비 합성 설명",
          "progress": 75,
          "status": "partial",
          "evidence": [
            "같은 아이템·같은 등급 합성 규칙은 있지만 전용 모바일 튜토리얼의 최종 증거가 부족합니다."
          ],
          "next_step": "두 번째 클리어→중복 장비 지급→장비 합성 전체를 실제 터치로 검증합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 75,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "tutorial-mastery-spend",
          "title": "세 번째 클리어와 첫 마스터리 투자",
          "progress": 80,
          "status": "partial",
          "evidence": [
            "1포인트 지급·저장·투자는 구현됐지만 전체 튜토리얼 종단 간 증거가 없습니다."
          ],
          "next_step": "세 번째 클리어부터 첫 능력치 반영까지 한 세션에서 검증합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 80,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "tutorial-first-death",
          "title": "첫 사망 학습",
          "progress": 0,
          "status": "planned_only",
          "evidence": [
            "일반 사망 결과 화면은 있지만 첫 사망에 특화된 회복·재도전 안내 단계는 없습니다."
          ],
          "next_step": "첫 사망 시 원인 읽기, 장비 조정, 재도전으로 이어지는 짧은 안내를 설계합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 0,
          "computed_status": "planned_only",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "tutorial-save-resume",
          "title": "튜토리얼 저장·재접속 재개",
          "progress": 85,
          "status": "partial",
          "evidence": [
            "단계와 보상 영수증 저장 계약은 있으나 실제 서비스 DataStore 재접속 증거가 없습니다."
          ],
          "next_step": "배포 환경에서 각 주요 단계 중단 후 재접속을 검증합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 85,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        }
      ],
      "depth": 0,
      "computed_progress": 84,
      "computed_status": "partial",
      "leaf_count": 13,
      "proven_count": 6,
      "status_counts": {
        "proven": 6,
        "partial": 6,
        "planned_only": 1,
        "unknown": 0,
        "blocked": 0
      }
    },
    {
      "id": "backpack-equipment-runes",
      "title": "백팩·장비·룬",
      "description": "아이템 수집, 공간 배치, 장착, 룬 보드와 두 종류 합성입니다.",
      "track": "system",
      "weight": 12,
      "sources": [
        "docs/gameplay/alpha-item-definitions.json",
        "docs/gameplay/item-rune-board-database.json",
        "wiki/content/pages/rune-fusion-workbench/v001.md"
      ],
      "children": [
        {
          "id": "alpha-item-catalog",
          "title": "알파 아이템 54종의 이미지·제원·점유 칸",
          "progress": 100,
          "status": "proven",
          "metric": {
            "current": 54,
            "target": 54,
            "unit": "종"
          },
          "evidence": [
            "무기 14, 방어구 20, 장신구 14, 보조 무기 6종이 ItemDB build/check를 통과합니다."
          ],
          "next_step": "아이템 변경마다 ItemDB 원본·런타임·공개 DB 동기화를 유지합니다.",
          "sources": [
            "docs/gameplay/inventory-item-art-catalog.md"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "alpha-item-combat-stats",
          "title": "알파 장비 54종의 전투 수치와 공용 패시브",
          "progress": 100,
          "status": "proven",
          "metric": {
            "current": 54,
            "target": 54,
            "unit": "종"
          },
          "evidence": [
            "54종 모두 G0-0~G6-3 고정 전투표와 실제 피해·회복·이동·대시·지원 계산 연결을 갖고, build/check와 Studio MCP fresh Play 검증을 통과했습니다."
          ],
          "next_step": "보스 포함 실전에서 장비 조합별 생존·화력 곡선을 조정하고, 별도 시스템이 필요한 희귀 효과는 후속 항목으로 관리합니다.",
          "sources": [
            "docs/gameplay/item-combat-stats.json",
            "wiki/content/pages/backpack-combat-stat-database/v004.md"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "mobile-inventory-storage",
          "title": "모바일 인벤토리와 보관함",
          "progress": 100,
          "status": "proven",
          "evidence": [
            "선택·이동·회전·원자 저장을 서로 다른 두 모바일 화면에서 검증했습니다."
          ],
          "next_step": "작은 화면과 긴 화면의 터치 회귀 검증을 유지합니다.",
          "sources": [
            "src/ReplicatedStorage/InventoryV2/Screen.luau"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "equipment-placement-rules",
          "title": "장비 배치·회전·부위·개수 제한",
          "progress": 100,
          "status": "proven",
          "evidence": [
            "최대 무기 6개, 보조 무기 2개와 점유 칸·겹침·부위 제한을 서버 모델이 검사합니다."
          ],
          "next_step": "새 아이템 형태에도 같은 실패 폐쇄형 검사를 적용합니다.",
          "sources": [
            "src/ReplicatedStorage/InventoryV2/InventoryModel.luau"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "equipped-weapon-runtime",
          "title": "장착 무기의 캐릭터 표시와 자동 공격",
          "progress": 100,
          "status": "proven",
          "evidence": [
            "공격 무기 14종이 장착 상태에서 표시·목표 선택·기본 공격과 스킬로 이어집니다."
          ],
          "next_step": "새 무기 추가 시 장착 시각과 공격 계약을 함께 검증합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "rune-board-data-ui",
          "title": "54개 아이템 룬 보드와 배치 UI",
          "progress": 100,
          "status": "proven",
          "metric": {
            "current": 540,
            "target": 540,
            "unit": "보드"
          },
          "evidence": [
            "아이템별 10개 후보 보드, 34개 룬 모양과 62개 능력 아이콘이 생성·저장됩니다."
          ],
          "next_step": "보드 편집과 게임 베이크의 리비전 일치를 유지합니다.",
          "sources": [
            "docs/gameplay/rune-piece-catalog.json",
            "docs/gameplay/rune-ability-icon-catalog.json"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "rune-combat-consumers",
          "title": "룬 능력의 실제 전투 적용",
          "progress": 10,
          "status": "partial",
          "evidence": [
            "552개 능력 정의가 있지만 확실한 전투 소비는 rapid_gear_sword의 A1·A2·B1·B2·E1 다섯 노드입니다."
          ],
          "next_step": "54개 아이템의 승인 능력마다 서버 전투 소비자와 테스트를 연결합니다.",
          "sources": [
            "src/ReplicatedStorage/InventoryV2/ItemRuneCombatStatResolver.luau"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 10,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "item-effect-areas",
          "title": "아이템 효과 영역과 접촉 효과",
          "progress": 20,
          "status": "partial",
          "evidence": [
            "편집 구조와 접촉 판정기는 있지만 현재 54개 아이템에 작성된 효과 영역 슬롯은 0개입니다."
          ],
          "next_step": "알파에서 사용할 효과 영역 아이템을 정하고 슬롯·소비 효과·시각 피드백을 연결합니다.",
          "sources": [
            "src/ReplicatedStorage/BackpackUI/ItemEffectContactEvaluator.luau"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 20,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "rune-fusion-ui-server",
          "title": "룬 합성 UI·서버 판정·결과 수령",
          "progress": 100,
          "status": "proven",
          "evidence": [
            "G0~G6과 1~5칸 재료 선택, 일괄 합성, 결과 공개·수령·재접속 보존이 구현됐습니다."
          ],
          "next_step": "확률 정책 변경 시 결과 분포와 안내를 함께 갱신합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "equipment-fusion-rule",
          "title": "장비 합성 규칙과 저장",
          "progress": 100,
          "status": "proven",
          "evidence": [
            "같은 정의·같은 등급 장비를 다음 등급으로 합치고 Seed와 룬 보드 상태를 보존합니다."
          ],
          "next_step": "경제 비용 정책이 정해지면 원자 차감 계약을 추가합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "equipment-fusion-mobile-ui",
          "title": "장비 합성 모바일 UI와 튜토리얼",
          "progress": 75,
          "status": "partial",
          "evidence": [
            "기능 구현은 있으나 전용 최종 Studio 화면과 전체 튜토리얼 터치 증거가 부족합니다."
          ],
          "next_step": "작은 휴대폰과 긴 휴대폰에서 재료 선택→합성→결과 확인을 검증합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 75,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "synergy-runtime",
          "title": "시너지 26종의 표시와 판정",
          "progress": 90,
          "status": "partial",
          "evidence": [
            "26개 아이콘과 장착 조합 판정은 있지만 모든 시너지의 실제 전투 체감 검증은 부족합니다."
          ],
          "next_step": "활성 시너지별 전투 효과와 중첩 규칙을 대표 빌드로 검증합니다.",
          "sources": [
            "src/ReplicatedStorage/BackpackUI/SynergyCatalog.luau"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 90,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "support-weapons-runtime",
          "title": "보조 무기 6종",
          "progress": 100,
          "status": "proven",
          "metric": {
            "current": 6,
            "target": 6,
            "unit": "종"
          },
          "evidence": [
            "보호막·회복·공속·스킬 충전·피해 감소·회복 강화 효과가 런타임과 테스트에 있습니다."
          ],
          "next_step": "실전 빌드별 효율과 최대 2개 제한의 밸런스를 조정합니다.",
          "sources": [
            "src/ReplicatedStorage/Combat/SupportWeaponConfig.luau"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "storage-expansion",
          "title": "보관함 확장",
          "progress": 65,
          "status": "partial",
          "evidence": [
            "서버 비용·용량 연산은 있지만 최종 플레이어 UI와 장기 경제 검증이 부족합니다."
          ],
          "next_step": "확장 UI, 확인 상태와 비용 상승 곡선을 모바일에서 검증합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 65,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "consumable-items",
          "title": "소모품 아이템",
          "progress": 25,
          "status": "partial",
          "evidence": [
            "스택·종류 제한 모델은 있지만 현재 활성 소모품 콘텐츠와 사용 루프가 없습니다."
          ],
          "next_step": "알파 소모품 목록, 획득처, 사용 입력, 서버 효과와 저장을 정의합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 25,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        }
      ],
      "depth": 0,
      "computed_progress": 79,
      "computed_status": "partial",
      "leaf_count": 15,
      "proven_count": 9,
      "status_counts": {
        "proven": 9,
        "partial": 6,
        "planned_only": 0,
        "unknown": 0,
        "blocked": 0
      }
    },
    {
      "id": "combat-systems",
      "title": "전투 시스템",
      "description": "모바일 조작, 서버 권한 피해, 무기·몬스터 공격과 전투 피드백입니다.",
      "track": "system",
      "weight": 10,
      "sources": [
        "wiki/content/pages/weapon-combat-presentation/v003.md",
        "wiki/content/pages/backpack-combat-stat-database/v004.md"
      ],
      "children": [
        {
          "id": "movement-camera",
          "title": "세로형 이동·카메라·8방향 표시",
          "progress": 100,
          "status": "proven",
          "evidence": [
            "스크립트형 터치 이동과 2.5D 카메라, 방향 해석이 모바일 Play 근거를 갖습니다."
          ],
          "next_step": "필드별 카메라 경계와 가림 회귀를 유지합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "dash-authority",
          "title": "대시 입력·무적·서버 권한",
          "progress": 100,
          "status": "proven",
          "evidence": [
            "대시 거리·쿨다운·무적과 요청 제한을 서버가 검증합니다."
          ],
          "next_step": "능력치 확장 뒤에도 허용 범위와 시각 타이밍을 일치시킵니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "parry-authority",
          "title": "패리 입력·판정·서버 권한",
          "progress": 100,
          "status": "proven",
          "evidence": [
            "패리 창과 요청 남용 방지가 테스트와 모바일 검증에 있습니다."
          ],
          "next_step": "새 몬스터 공격마다 패리 가능 여부를 명시합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "weapon-targeting",
          "title": "무기 자동 목표 선택",
          "progress": 100,
          "status": "proven",
          "evidence": [
            "탐사 참가자와 범위 안의 유효 몬스터만 서버 권한 공격 대상으로 선택합니다."
          ],
          "next_step": "다중 플레이어에서 소유권과 목표 분리를 검증합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "weapon-basic-attacks",
          "title": "공격 무기 14종 기본 공격",
          "progress": 100,
          "status": "proven",
          "metric": {
            "current": 14,
            "target": 14,
            "unit": "종"
          },
          "evidence": [
            "14개 공격 무기가 등급별 프로필과 공격 실행기에 연결됩니다."
          ],
          "next_step": "실전 DPS와 공격 가독성을 조정합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "weapon-auto-skills",
          "title": "무기 자동 스킬 42개",
          "progress": 100,
          "status": "proven",
          "metric": {
            "current": 42,
            "target": 42,
            "unit": "개"
          },
          "evidence": [
            "14종×3단계 자동 스킬 정의와 실행기 연결이 자동 검사에 있습니다."
          ],
          "next_step": "스킬별 고유 연출과 밸런스 검증을 별도로 완료합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "damage-health-death",
          "title": "피해·체력·사망의 서버 판정",
          "progress": 100,
          "status": "proven",
          "evidence": [
            "서버 권한 피해·회피·막기·방어·최종 피해 감소·보호막·가시 반사와 사망 기록이 54종 전투표에 연결됐고 자동 검사와 Studio MCP fresh Play를 통과했습니다."
          ],
          "next_step": "새 공격·장비 효과도 같은 단일 피해 경로와 회귀 검사를 사용합니다.",
          "sources": [
            "wiki/content/pages/backpack-combat-stat-database/v004.md"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "monster-attack-runtime",
          "title": "활성 몬스터 공격 실행",
          "progress": 90,
          "status": "partial",
          "evidence": [
            "[2026-09-02] 활성 17종의 접촉·분출·돌진·투사체·도약·부화·보스 공격이 서버 런타임에 연결됐고 스테이지 1 자동 완주에서 전체 소환·사망 생명주기를 통과했습니다."
          ],
          "next_step": "일반 1~4웨이브의 각 공격 패턴 가독성과 취소를 개별 자동 시나리오로 확장합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 90,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "combat-status-effects",
          "title": "전투 상태·희귀 아이템 효과",
          "progress": 75,
          "status": "partial",
          "evidence": [
            "54종의 기본 스펙과 재사용 가능한 공용 패시브는 실제 전투에 연결됐습니다. 추가 발사체·관통·도탄·부활처럼 독립 시스템이 필요한 희귀 효과는 의도적으로 후속 범위에 남겼습니다."
          ],
          "next_step": "알파에 필요한 희귀 효과를 선별하고 서버 소유권, 중첩, 해제와 UI 표시 계약을 완성합니다.",
          "sources": [
            "wiki/content/pages/backpack-combat-stat-database/v004.md"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 75,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "combat-vfx-feedback",
          "title": "명중·투사체·스킬 전투 피드백",
          "progress": 75,
          "status": "partial",
          "evidence": [
            "기본 공격과 공용 스킬 VFX는 있으나 42개 스킬별 고유 연출은 부족합니다."
          ],
          "next_step": "피해 원인·범위·명중 시점을 무기별로 구분할 수 있게 확장합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 75,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "boss-combat-runtime",
          "title": "보스 전투 패턴",
          "progress": 95,
          "status": "partial",
          "evidence": [
            "[2026-09-02] 과충전 자판두꺼비가 활성 MonsterDB와 5웨이브에 승격됐고 다섯 패턴, 셔플 백, 직전 반복 방지, 35% 이하 0.85초 휴식, 참가자 한정 피해와 종료 정리가 서버 권한으로 연결됐습니다.",
            "[2026-09-02] Studio 고정 자동 시나리오에서 다섯 강제 패턴, 자연 선택의 연속 두 주기, 경기장 안전 범위, 효과·투사체 0 정리와 실제 보스·플레이어 사망을 관측했습니다."
          ],
          "next_step": "실제 기기에서 회피 조작의 체감 난이도와 예고 가독성을 외부 측정하고 필요하면 수치만 조정합니다.",
          "sources": [
            "docs/gameplay/overcharge-vendatoad-boss-design.md",
            "src/ServerScriptService/Monsters/BossAttackDirector.luau",
            "tests/test_boss_runtime_contract.py"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 95,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        }
      ],
      "depth": 0,
      "computed_progress": 94,
      "computed_status": "partial",
      "leaf_count": 11,
      "proven_count": 7,
      "status_counts": {
        "proven": 7,
        "partial": 4,
        "planned_only": 0,
        "unknown": 0,
        "blocked": 0
      }
    },
    {
      "id": "progression-economy",
      "title": "성장·경제·상점",
      "description": "재화 획득과 소비, 상점, 등급 성장, 마스터리와 반복 동기입니다.",
      "track": "system",
      "weight": 10,
      "sources": [
        "src/ServerScriptService/Economy/ShopDB.luau",
        "src/ServerScriptService/Economy/StageRewardDB.luau",
        "wiki/content/pages/character-mastery-database/v002.md"
      ],
      "children": [
        {
          "id": "currency-ledger",
          "title": "동 재화의 서버 원장과 저장",
          "progress": 90,
          "status": "partial",
          "evidence": [
            "수입·구매·확장 비용은 서버 거래와 영수증으로 처리하지만 실제 서비스 DataStore 증거가 없습니다."
          ],
          "next_step": "배포 환경 재접속·서버 종료 복구와 잔액 불변성을 검증합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 90,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "stage-one-reward-profile",
          "title": "스테이지 1 보상표",
          "progress": 100,
          "status": "proven",
          "evidence": [
            "최초·반복 클리어, 실패 웨이브, 장비 3택과 룬 보상 규칙이 구현됐습니다.",
            "[2026-09-02] 자동 전체 클리어에서 200동·G0 1칸 룬 2개·장비 3택1과 영수증 중복 방지를, 보스 사망에서 35동·룬/장비 0을 실제 메모리 프로필로 확인했습니다."
          ],
          "next_step": "후속 스테이지 보상도 같은 정산·중복 방지 계약을 재사용합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "equipment-shop-products",
          "title": "장비 상점 판매 상품 12종",
          "progress": 100,
          "status": "proven",
          "metric": {
            "current": 12,
            "target": 12,
            "unit": "종"
          },
          "evidence": [
            "스테이지 1 승인 풀과 같은 고정 12종 G0-0 상품을 서버가 검증합니다."
          ],
          "next_step": "상품 정책 변경 시 보상 풀과 같은 ItemDB ID를 유지합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "equipment-shop-ui-purchase",
          "title": "장비 상점 UI와 안전한 구매",
          "progress": 90,
          "status": "partial",
          "evidence": [
            "모바일 목록, 잔액·보관함 표시, 중복 요청 복구와 서버 구매가 있으나 최종 가격 밸런스가 남았습니다."
          ],
          "next_step": "작은 화면의 구매·실패·재확인 상태를 정기 회귀 검증합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 90,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "equipment-shop-rotation",
          "title": "장비 상점 상품 등장·회전 로직",
          "progress": 25,
          "status": "partial",
          "evidence": [
            "현재는 조건·회전·새로고침 없이 12종 고정 목록입니다."
          ],
          "next_step": "알파에 회전이 필요한지 먼저 결정하고, 필요하면 seed·주기·품절·재접속 규칙을 설계합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 25,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "equipment-shop-pricing",
          "title": "장비 상점 가격",
          "progress": 35,
          "status": "partial",
          "evidence": [
            "전 상품 200동이 구현됐지만 획득 속도와 반복 구매를 포함한 장기 검증은 없습니다."
          ],
          "next_step": "첫 30분과 반복 10회 플레이의 수입·지출 곡선을 시뮬레이션하고 승인합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 35,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "rune-shop",
          "title": "룬 상점",
          "weight": 2,
          "sources": [],
          "children": [
            {
              "id": "rune-shop-products",
              "title": "룬 상점 판매 상품",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "룬 상점 상품 DB를 찾지 못했습니다."
              ],
              "next_step": "등급·칸 수·색·모양별 판매 풀을 정의합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "rune-shop-rotation",
              "title": "룬 상점 등장 로직",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "등장 주기와 무작위 정책을 찾지 못했습니다."
              ],
              "next_step": "seed, 갱신 주기, 중복과 보호 규칙을 정의합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "rune-shop-pricing",
              "title": "룬 상점 가격",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "가격과 구매 서비스가 없습니다."
              ],
              "next_step": "합성·스테이지 보상과 충돌하지 않는 가격 곡선을 설계합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "rune-shop-ui",
              "title": "룬 상점 모바일 UI",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "룬 상점 화면을 찾지 못했습니다."
              ],
              "next_step": "상품 비교, 갱신과 구매 결과를 모바일 우선으로 설계합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            }
          ],
          "depth": 1,
          "computed_progress": 0,
          "computed_status": "planned_only",
          "leaf_count": 4,
          "proven_count": 0,
          "status_counts": {
            "proven": 0,
            "partial": 0,
            "planned_only": 4,
            "unknown": 0,
            "blocked": 0
          }
        },
        {
          "id": "mastery-tree-runtime",
          "title": "마스터리 2계열·8개 승인 노드",
          "progress": 90,
          "status": "partial",
          "metric": {
            "current": 8,
            "target": 8,
            "unit": "승인 노드"
          },
          "evidence": [
            "모바일 투자, 서버 해금·차감·저장과 실제 능력치 적용이 있습니다."
          ],
          "next_step": "반복 포인트 공급과 전체 성장 속도를 검증합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 90,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "mastery-progression-loop",
          "title": "마스터리 포인트 반복 획득",
          "progress": 30,
          "status": "partial",
          "evidence": [
            "튜토리얼 세 번째 클리어의 첫 1점만 확정돼 있고 반복 공급원이 없습니다."
          ],
          "next_step": "스테이지·업적·레벨 중 반복 공급원을 정하고 한계 속도를 설계합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 30,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "mastery-reset-active",
          "title": "마스터리 초기화·재분배·액티브 스킬",
          "progress": 0,
          "status": "planned_only",
          "evidence": [
            "패시브 투자 외 초기화와 액티브 마스터리 계약을 찾지 못했습니다."
          ],
          "next_step": "알파 필수 여부를 결정하고 제외한다면 범위를 명시합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 0,
          "computed_status": "planned_only",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "monster-drop-items",
          "title": "몬스터 개별 드랍 아이템",
          "progress": 0,
          "status": "planned_only",
          "evidence": [
            "보상은 스테이지 정산 중심이며 몬스터별 드랍 테이블이 없습니다."
          ],
          "next_step": "드랍을 알파에 포함할지 결정하고 포함 시 서버 드랍표와 획득 피드백을 설계합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 0,
          "computed_status": "planned_only",
          "leaf_count": 1,
          "proven_count": 0
        }
      ],
      "depth": 0,
      "computed_progress": 47,
      "computed_status": "partial",
      "leaf_count": 14,
      "proven_count": 2,
      "status_counts": {
        "proven": 2,
        "partial": 6,
        "planned_only": 6,
        "unknown": 0,
        "blocked": 0
      }
    },
    {
      "id": "stage-field-content",
      "title": "스테이지·필드 콘텐츠",
      "description": "목표 50개 스테이지의 실제 구성과 이를 지탱하는 필드·웨이브 제작 기반입니다.",
      "track": "content",
      "weight": 14,
      "sources": [
        "docs/gameplay/stage-wave-definitions.json",
        "wiki/content/pages/stage-wave-database/v003.md",
        "wiki/content/pages/world-art-bible/v004.md"
      ],
      "children": [
        {
          "id": "stage-target-fifty",
          "title": "스테이지 구성 50개",
          "description": "각 스테이지는 필드·웨이브·보상·난이도·모바일 완주 증거가 있어야 완료됩니다.",
          "weight": 55,
          "metric": {
            "current": 1,
            "target": 50,
            "unit": "개"
          },
          "sources": [
            "docs/gameplay/stage-wave-definitions.json"
          ],
          "children": [
            {
              "id": "stage-slot-01",
              "title": "스테이지 1 · 고물바람 초원",
              "progress": 95,
              "status": "partial",
              "evidence": [
                "[2026-09-02] 5웨이브·12레이어·76개 예약 배치와 사망 파생 포함 80개 전개, 활성 17종, 단독 보스와 boss_arena가 연결됐습니다.",
                "[2026-09-02] 두 모바일 세로 화면에서 성공·사망·재도전 경로를 사람 조작 없는 실제 서버 런으로 검증했습니다."
              ],
              "next_step": "실제 모바일 기기 성능과 회피 감각을 외부 측정한 뒤 스테이지 1 난이도를 최종 승인합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 95,
              "computed_status": "partial",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-02",
              "title": "스테이지 2",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-03",
              "title": "스테이지 3",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-04",
              "title": "스테이지 4",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-05",
              "title": "스테이지 5",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-06",
              "title": "스테이지 6",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-07",
              "title": "스테이지 7",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-08",
              "title": "스테이지 8",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-09",
              "title": "스테이지 9",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-10",
              "title": "스테이지 10",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-11",
              "title": "스테이지 11",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-12",
              "title": "스테이지 12",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-13",
              "title": "스테이지 13",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-14",
              "title": "스테이지 14",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-15",
              "title": "스테이지 15",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-16",
              "title": "스테이지 16",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-17",
              "title": "스테이지 17",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-18",
              "title": "스테이지 18",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-19",
              "title": "스테이지 19",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-20",
              "title": "스테이지 20",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-21",
              "title": "스테이지 21",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-22",
              "title": "스테이지 22",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-23",
              "title": "스테이지 23",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-24",
              "title": "스테이지 24",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-25",
              "title": "스테이지 25",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-26",
              "title": "스테이지 26",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-27",
              "title": "스테이지 27",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-28",
              "title": "스테이지 28",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-29",
              "title": "스테이지 29",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-30",
              "title": "스테이지 30",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-31",
              "title": "스테이지 31",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-32",
              "title": "스테이지 32",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-33",
              "title": "스테이지 33",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-34",
              "title": "스테이지 34",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-35",
              "title": "스테이지 35",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-36",
              "title": "스테이지 36",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-37",
              "title": "스테이지 37",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-38",
              "title": "스테이지 38",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-39",
              "title": "스테이지 39",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-40",
              "title": "스테이지 40",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-41",
              "title": "스테이지 41",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-42",
              "title": "스테이지 42",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-43",
              "title": "스테이지 43",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-44",
              "title": "스테이지 44",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-45",
              "title": "스테이지 45",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-46",
              "title": "스테이지 46",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-47",
              "title": "스테이지 47",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-48",
              "title": "스테이지 48",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-49",
              "title": "스테이지 49",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "stage-slot-50",
              "title": "스테이지 50",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 스테이지 정의가 아직 없습니다."
              ],
              "next_step": "필드, 학습 목표, 웨이브, 보상, 난이도와 모바일 완주 기준을 작성합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            }
          ],
          "depth": 1,
          "computed_progress": 2,
          "computed_status": "partial",
          "leaf_count": 50,
          "proven_count": 0,
          "status_counts": {
            "proven": 0,
            "partial": 1,
            "planned_only": 49,
            "unknown": 0,
            "blocked": 0
          }
        },
        {
          "id": "stage-authoring-database",
          "title": "스테이지·웨이브 DB 제작 도구",
          "progress": 100,
          "status": "proven",
          "weight": 10,
          "evidence": [
            "필드·웨이브·시간층·몬스터 배치와 Studio 베이크 도구가 build/check를 통과합니다."
          ],
          "next_step": "대량 스테이지 제작 시 복제·검토·밸런스 비교 기능을 확장합니다.",
          "sources": [
            "tools/wave_db.py"
          ],
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "field-catalog-six",
          "title": "필드 6종의 콘셉트·레이아웃·오브젝트",
          "progress": 70,
          "status": "partial",
          "weight": 10,
          "metric": {
            "current": 6,
            "target": 6,
            "unit": "필드"
          },
          "evidence": [
            "베이스캠프·튜토리얼·전투 필드 4종이 FieldDB에 있지만 실제 스테이지 연결은 고물바람 초원뿐입니다."
          ],
          "next_step": "각 전투 필드를 개별 스테이지와 위험·보상 문법에 연결합니다.",
          "sources": [
            "tools/field_db.py"
          ],
          "depth": 1,
          "computed_progress": 70,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "field-stage-connections",
          "title": "전투 필드별 스테이지 연결",
          "progress": 25,
          "status": "partial",
          "weight": 10,
          "metric": {
            "current": 1,
            "target": 4,
            "unit": "전투 필드"
          },
          "evidence": [
            "전투 필드 4종 중 고물바람 초원만 StageDB가 소비합니다."
          ],
          "next_step": "사막·빙결·정글 필드에 첫 대표 스테이지를 작성합니다.",
          "sources": [],
          "depth": 1,
          "computed_progress": 25,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "boss-arena-field-phase",
          "title": "보스 경기장 전환과 복원",
          "progress": 100,
          "status": "proven",
          "weight": 5,
          "evidence": [
            "[2026-09-02] 5웨이브 소환 전에 boss_arena가 원자적으로 적용되고 일곱 오브젝트의 패널·충돌·차단 셀이 함께 비활성화됩니다.",
            "[2026-09-02] 별도 자동 클리어와 사망 실행에서 보스·효과·필드 소유권이 0으로 정리되고 일곱 오브젝트가 모두 원래 상태로 복원됐습니다."
          ],
          "next_step": "후속 보스 경기장도 같은 원자 적용·종료 복원 계약을 재사용합니다.",
          "sources": [
            "src/ServerScriptService/StageRuns/FieldPhaseService.luau",
            "tests/test_stage_field_phase_integration.py"
          ],
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "multi-stage-reward-profiles",
          "title": "스테이지별 보상과 해금 곡선",
          "progress": 15,
          "status": "partial",
          "weight": 5,
          "evidence": [
            "스테이지 1 보상표만 있으며 나머지 49개 보상·해금 곡선은 없습니다."
          ],
          "next_step": "스테이지 군별 재화·룬·장비·마스터리 보상 원칙을 먼저 정합니다.",
          "sources": [],
          "depth": 1,
          "computed_progress": 15,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "stage-events-hazards",
          "title": "스테이지 특수 규칙·환경 위험·이벤트",
          "progress": 0,
          "status": "planned_only",
          "weight": 5,
          "evidence": [
            "반복 플레이를 구분할 스테이지별 사건 카탈로그가 없습니다."
          ],
          "next_step": "필드 정체성을 살리는 위험·목표·보너스 규칙을 정의합니다.",
          "sources": [],
          "depth": 1,
          "computed_progress": 0,
          "computed_status": "planned_only",
          "leaf_count": 1,
          "proven_count": 0
        }
      ],
      "depth": 0,
      "computed_progress": 26,
      "computed_status": "partial",
      "leaf_count": 56,
      "proven_count": 2,
      "status_counts": {
        "proven": 2,
        "partial": 4,
        "planned_only": 50,
        "unknown": 0,
        "blocked": 0
      }
    },
    {
      "id": "monster-boss-content",
      "title": "몬스터·보스 콘텐츠",
      "description": "소형 20종, 중형 10종, 보스 5종의 개별 제작과 런타임 승격입니다.",
      "track": "content",
      "weight": 12,
      "sources": [
        "docs/gameplay/monster-definitions.json",
        "wiki/content/pages/monster-roster-expansion/v004.md",
        "wiki/content/pages/overcharge-vendatoad-boss/v001.md"
      ],
      "children": [
        {
          "id": "small-monster-target",
          "title": "소형 몬스터 20종",
          "weight": 32,
          "metric": {
            "current": 11,
            "target": 20,
            "unit": "종"
          },
          "sources": [
            "docs/gameplay/monster-definitions.json"
          ],
          "children": [
            {
              "id": "small-monster-slot-01",
              "title": "새끼 도마뱀",
              "progress": 100,
              "status": "proven",
              "evidence": [
                "걸어다니는 둥지 사망 시 생성되는 활성 소형 몬스터입니다."
              ],
              "next_step": "부화 수량과 추적 성능 회귀를 유지합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 100,
              "computed_status": "proven",
              "leaf_count": 1,
              "proven_count": 1
            },
            {
              "id": "small-monster-slot-02",
              "title": "깡통 콩벌레",
              "progress": 100,
              "status": "proven",
              "evidence": [
                "활성 런타임·대표 이미지·애니메이션·웨이브 연결이 있습니다."
              ],
              "next_step": "접촉형 역할의 수치와 군집 가독성을 조정합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 100,
              "computed_status": "proven",
              "leaf_count": 1,
              "proven_count": 1
            },
            {
              "id": "small-monster-slot-03",
              "title": "병뚜껑 딱정이",
              "progress": 100,
              "status": "proven",
              "evidence": [
                "활성 런타임·대표 이미지·애니메이션·웨이브 연결이 있습니다."
              ],
              "next_step": "접촉형 역할의 수치와 군집 가독성을 조정합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 100,
              "computed_status": "proven",
              "leaf_count": 1,
              "proven_count": 1
            },
            {
              "id": "small-monster-slot-04",
              "title": "전선 지렁이",
              "progress": 100,
              "status": "proven",
              "evidence": [
                "활성 런타임·대표 이미지·애니메이션·웨이브 연결이 있습니다."
              ],
              "next_step": "접촉형 역할의 수치와 군집 가독성을 조정합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 100,
              "computed_status": "proven",
              "leaf_count": 1,
              "proven_count": 1
            },
            {
              "id": "small-monster-slot-05",
              "title": "타이어 통통이",
              "progress": 100,
              "status": "proven",
              "evidence": [
                "활성 런타임·대표 이미지·애니메이션·웨이브 연결이 있습니다."
              ],
              "next_step": "접촉형 역할의 수치와 군집 가독성을 조정합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 100,
              "computed_status": "proven",
              "leaf_count": 1,
              "proven_count": 1
            },
            {
              "id": "small-monster-slot-06",
              "title": "종이컵 소라게",
              "progress": 100,
              "status": "proven",
              "evidence": [
                "활성 런타임·대표 이미지·애니메이션·웨이브 연결이 있습니다."
              ],
              "next_step": "접촉형 역할의 수치와 군집 가독성을 조정합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 100,
              "computed_status": "proven",
              "leaf_count": 1,
              "proven_count": 1
            },
            {
              "id": "small-monster-slot-07",
              "title": "전구 날파리",
              "progress": 100,
              "status": "proven",
              "evidence": [
                "활성 공중형 런타임과 웨이브 연결이 있습니다."
              ],
              "next_step": "지상 몬스터와 다른 이동·공격 체감을 강화합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 100,
              "computed_status": "proven",
              "leaf_count": 1,
              "proven_count": 1
            },
            {
              "id": "small-monster-slot-08",
              "title": "나사 달팽이",
              "progress": 100,
              "status": "proven",
              "evidence": [
                "활성 런타임·대표 이미지·애니메이션·웨이브 연결이 있습니다."
              ],
              "next_step": "접촉형 역할의 수치와 군집 가독성을 조정합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 100,
              "computed_status": "proven",
              "leaf_count": 1,
              "proven_count": 1
            },
            {
              "id": "small-monster-slot-09",
              "title": "지퍼 지네",
              "progress": 100,
              "status": "proven",
              "evidence": [
                "활성 런타임·대표 이미지·애니메이션·웨이브 연결이 있습니다."
              ],
              "next_step": "접촉형 역할의 수치와 군집 가독성을 조정합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 100,
              "computed_status": "proven",
              "leaf_count": 1,
              "proven_count": 1
            },
            {
              "id": "small-monster-slot-10",
              "title": "수세미 복슬이",
              "progress": 100,
              "status": "proven",
              "evidence": [
                "활성 런타임·대표 이미지·애니메이션·웨이브 연결이 있습니다."
              ],
              "next_step": "접촉형 역할의 수치와 군집 가독성을 조정합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 100,
              "computed_status": "proven",
              "leaf_count": 1,
              "proven_count": 1
            },
            {
              "id": "small-monster-slot-11",
              "title": "비닐봉지 유령",
              "progress": 100,
              "status": "proven",
              "evidence": [
                "활성 공중형 런타임과 웨이브 연결이 있습니다."
              ],
              "next_step": "지상 몬스터와 다른 이동·공격 체감을 강화합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 100,
              "computed_status": "proven",
              "leaf_count": 1,
              "proven_count": 1
            },
            {
              "id": "small-monster-slot-12",
              "title": "소형 몬스터 12",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 소형 몬스터 정의가 아직 없습니다."
              ],
              "next_step": "실루엣, 이동, 공격 역할, 애니메이션과 스테이지 쓰임을 정의합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "small-monster-slot-13",
              "title": "소형 몬스터 13",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 소형 몬스터 정의가 아직 없습니다."
              ],
              "next_step": "실루엣, 이동, 공격 역할, 애니메이션과 스테이지 쓰임을 정의합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "small-monster-slot-14",
              "title": "소형 몬스터 14",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 소형 몬스터 정의가 아직 없습니다."
              ],
              "next_step": "실루엣, 이동, 공격 역할, 애니메이션과 스테이지 쓰임을 정의합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "small-monster-slot-15",
              "title": "소형 몬스터 15",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 소형 몬스터 정의가 아직 없습니다."
              ],
              "next_step": "실루엣, 이동, 공격 역할, 애니메이션과 스테이지 쓰임을 정의합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "small-monster-slot-16",
              "title": "소형 몬스터 16",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 소형 몬스터 정의가 아직 없습니다."
              ],
              "next_step": "실루엣, 이동, 공격 역할, 애니메이션과 스테이지 쓰임을 정의합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "small-monster-slot-17",
              "title": "소형 몬스터 17",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 소형 몬스터 정의가 아직 없습니다."
              ],
              "next_step": "실루엣, 이동, 공격 역할, 애니메이션과 스테이지 쓰임을 정의합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "small-monster-slot-18",
              "title": "소형 몬스터 18",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 소형 몬스터 정의가 아직 없습니다."
              ],
              "next_step": "실루엣, 이동, 공격 역할, 애니메이션과 스테이지 쓰임을 정의합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "small-monster-slot-19",
              "title": "소형 몬스터 19",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 소형 몬스터 정의가 아직 없습니다."
              ],
              "next_step": "실루엣, 이동, 공격 역할, 애니메이션과 스테이지 쓰임을 정의합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "small-monster-slot-20",
              "title": "소형 몬스터 20",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 소형 몬스터 정의가 아직 없습니다."
              ],
              "next_step": "실루엣, 이동, 공격 역할, 애니메이션과 스테이지 쓰임을 정의합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            }
          ],
          "depth": 1,
          "computed_progress": 55,
          "computed_status": "partial",
          "leaf_count": 20,
          "proven_count": 11,
          "status_counts": {
            "proven": 11,
            "partial": 0,
            "planned_only": 9,
            "unknown": 0,
            "blocked": 0
          }
        },
        {
          "id": "medium-monster-target",
          "title": "중형 몬스터 10종",
          "weight": 25,
          "metric": {
            "current": 5,
            "target": 10,
            "unit": "종"
          },
          "sources": [
            "docs/gameplay/monster-definitions.json"
          ],
          "children": [
            {
              "id": "medium-monster-slot-01",
              "title": "가시덩굴 화분괴물",
              "progress": 100,
              "status": "proven",
              "evidence": [
                "지면 분출 패턴과 실제 런타임 애니메이션이 활성화됐습니다."
              ],
              "next_step": "다중 웨이브 가독성과 취소 정리를 유지합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 100,
              "computed_status": "proven",
              "leaf_count": 1,
              "proven_count": 1
            },
            {
              "id": "medium-monster-slot-02",
              "title": "회오리 돌진령",
              "progress": 100,
              "status": "proven",
              "evidence": [
                "변신·선형 돌진·회복과 3개 런타임 모션이 활성화됐습니다."
              ],
              "next_step": "방향별 돌진 가독성과 충돌 경계를 유지합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 100,
              "computed_status": "proven",
              "leaf_count": 1,
              "proven_count": 1
            },
            {
              "id": "medium-monster-slot-03",
              "title": "부채탄 포대충",
              "progress": 100,
              "status": "proven",
              "evidence": [
                "부채꼴 투사체와 런타임 모션이 활성화됐습니다."
              ],
              "next_step": "투사체 밀도와 모바일 회피 공간을 조정합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 100,
              "computed_status": "proven",
              "leaf_count": 1,
              "proven_count": 1
            },
            {
              "id": "medium-monster-slot-04",
              "title": "도장발 쿵귀",
              "progress": 100,
              "status": "proven",
              "evidence": [
                "준비·비행·착지 도약 강타와 서버 피해가 연결됐습니다."
              ],
              "next_step": "착지 예고와 피해 프레임 일치를 유지합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 100,
              "computed_status": "proven",
              "leaf_count": 1,
              "proven_count": 1
            },
            {
              "id": "medium-monster-slot-05",
              "title": "걸어다니는 둥지",
              "progress": 100,
              "status": "proven",
              "evidence": [
                "사망 시 새끼 도마뱀을 생성하는 중형 역할이 활성화됐습니다."
              ],
              "next_step": "부화 수량·성능과 처치 우선순위 가독성을 조정합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 100,
              "computed_status": "proven",
              "leaf_count": 1,
              "proven_count": 1
            },
            {
              "id": "medium-monster-slot-06",
              "title": "중형 몬스터 6",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 중형 몬스터 정의가 아직 없습니다."
              ],
              "next_step": "학습할 공격 문법, 예고, 피해와 애니메이션을 정의합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "medium-monster-slot-07",
              "title": "중형 몬스터 7",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 중형 몬스터 정의가 아직 없습니다."
              ],
              "next_step": "학습할 공격 문법, 예고, 피해와 애니메이션을 정의합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "medium-monster-slot-08",
              "title": "중형 몬스터 8",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 중형 몬스터 정의가 아직 없습니다."
              ],
              "next_step": "학습할 공격 문법, 예고, 피해와 애니메이션을 정의합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "medium-monster-slot-09",
              "title": "중형 몬스터 9",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 중형 몬스터 정의가 아직 없습니다."
              ],
              "next_step": "학습할 공격 문법, 예고, 피해와 애니메이션을 정의합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "medium-monster-slot-10",
              "title": "중형 몬스터 10",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 중형 몬스터 정의가 아직 없습니다."
              ],
              "next_step": "학습할 공격 문법, 예고, 피해와 애니메이션을 정의합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            }
          ],
          "depth": 1,
          "computed_progress": 50,
          "computed_status": "partial",
          "leaf_count": 10,
          "proven_count": 5,
          "status_counts": {
            "proven": 5,
            "partial": 0,
            "planned_only": 5,
            "unknown": 0,
            "blocked": 0
          }
        },
        {
          "id": "boss-monster-target",
          "title": "보스 몬스터 5종",
          "weight": 25,
          "metric": {
            "current": 1,
            "target": 5,
            "unit": "활성 보스"
          },
          "sources": [
            "docs/gameplay/overcharge-vendatoad-boss-design.md"
          ],
          "children": [
            {
              "id": "boss-monster-slot-01",
              "title": "과충전 자판두꺼비",
              "progress": 100,
              "status": "proven",
              "evidence": [
                "[2026-09-02] 승인 원화와 Walk에 맞춘 Idle·Hit·Death·공격 5종을 포함한 9개 투명 런타임 클립을 업로드하고 MonsterDB 35bd2978ae98dc40에 활성 보스로 등록했습니다.",
                "[2026-09-02] 실제 5웨이브 서버 런에서 단독 소환, 다섯 공격, 사망 애니메이션, Clear 대기와 경기장 복원을 자동 검증했습니다."
              ],
              "next_step": "후속 밸런스 조정에서도 9개 모션의 프레임·피해 시점·자산 해시를 유지합니다.",
              "sources": [
                "Assets/Monsters/Runtime/OverchargeVendatoad/atlas-metadata.json",
                "docs/gameplay/monster-definitions.json",
                "tests/test_boss_runtime_contract.py"
              ],
              "weight": 1,
              "depth": 2,
              "computed_progress": 100,
              "computed_status": "proven",
              "leaf_count": 1,
              "proven_count": 1
            },
            {
              "id": "boss-monster-slot-02",
              "title": "보스 몬스터 2",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 보스 정의가 아직 없습니다."
              ],
              "next_step": "정체성, 전장, 패턴, 모션, 보상과 모바일 회피 기준을 정의합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "boss-monster-slot-03",
              "title": "보스 몬스터 3",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 보스 정의가 아직 없습니다."
              ],
              "next_step": "정체성, 전장, 패턴, 모션, 보상과 모바일 회피 기준을 정의합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "boss-monster-slot-04",
              "title": "보스 몬스터 4",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 보스 정의가 아직 없습니다."
              ],
              "next_step": "정체성, 전장, 패턴, 모션, 보상과 모바일 회피 기준을 정의합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            },
            {
              "id": "boss-monster-slot-05",
              "title": "보스 몬스터 5",
              "progress": 0,
              "status": "planned_only",
              "evidence": [
                "개별 보스 정의가 아직 없습니다."
              ],
              "next_step": "정체성, 전장, 패턴, 모션, 보상과 모바일 회피 기준을 정의합니다.",
              "weight": 1,
              "sources": [],
              "depth": 2,
              "computed_progress": 0,
              "computed_status": "planned_only",
              "leaf_count": 1,
              "proven_count": 0
            }
          ],
          "depth": 1,
          "computed_progress": 20,
          "computed_status": "partial",
          "leaf_count": 5,
          "proven_count": 1,
          "status_counts": {
            "proven": 1,
            "partial": 0,
            "planned_only": 4,
            "unknown": 0,
            "blocked": 0
          }
        },
        {
          "id": "monster-animation-coverage",
          "title": "목표 35종 애니메이션 패키지",
          "progress": 49,
          "status": "partial",
          "weight": 10,
          "metric": {
            "current": 17,
            "target": 35,
            "unit": "활성 몬스터"
          },
          "evidence": [
            "[2026-09-02] 활성 16종의 기존 82개 클립에 과충전 자판두꺼비 9개 클립을 더해 17종의 런타임 패키지가 활성화됐습니다."
          ],
          "next_step": "남은 18종도 Idle·이동·공격·피격·사망 최소 세트를 같은 승격 관문으로 묶습니다.",
          "sources": [
            "tools/animation_db.py"
          ],
          "depth": 1,
          "computed_progress": 49,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "monster-stage-integration",
          "title": "활성 17종의 스테이지 연결",
          "progress": 100,
          "status": "proven",
          "weight": 8,
          "metric": {
            "current": 17,
            "target": 17,
            "unit": "종"
          },
          "evidence": [
            "[2026-09-02] 15종은 직접 일반 웨이브 배치, 새끼 도마뱀은 둥지 사망 생성, 과충전 자판두꺼비는 5웨이브 단독 예약 소환으로 스테이지 1에 연결됩니다."
          ],
          "next_step": "새 스테이지에서 역할 중복과 밀도를 조정합니다.",
          "sources": [],
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        }
      ],
      "depth": 0,
      "computed_progress": 48,
      "computed_status": "partial",
      "leaf_count": 37,
      "proven_count": 18,
      "status_counts": {
        "proven": 18,
        "partial": 1,
        "planned_only": 18,
        "unknown": 0,
        "blocked": 0
      }
    },
    {
      "id": "balance-design",
      "title": "밸런스 기획",
      "description": "전투·경제·드랍·성장 수치를 실제 반복 플레이 곡선으로 승인하는 작업입니다.",
      "track": "content",
      "weight": 7,
      "sources": [
        "docs/gameplay/item-combat-stats.json",
        "tools/combat_balance_sim.py",
        "src/ServerScriptService/Economy/StageRewardDB.luau"
      ],
      "children": [
        {
          "id": "weapon-balance",
          "title": "무기 14종 밸런스",
          "progress": 55,
          "status": "partial",
          "evidence": [
            "등급별 고정표와 시뮬레이터는 있지만 보스 없는 스테이지 1만으로 메타를 승인할 수 없습니다."
          ],
          "next_step": "대표 장착 조합의 처치 시간·과잉 피해·스킬 회전을 보스 포함 실전에서 측정합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 55,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "armor-accessory-balance",
          "title": "방어구·장신구 밸런스",
          "progress": 60,
          "status": "partial",
          "evidence": [
            "54종 전투표와 공용 패시브는 확정·Studio 검증됐지만, 실제 반복 플레이의 등급별 생존 곡선과 공격·생존 선택 비용은 승인되지 않았습니다."
          ],
          "next_step": "대표 장착 조합의 생존 시간과 공격·생존 선택 비용을 보스 포함 실전에서 측정합니다.",
          "sources": [
            "wiki/content/pages/backpack-combat-stat-database/v004.md"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 60,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "support-weapon-balance",
          "title": "보조 무기 밸런스",
          "progress": 60,
          "status": "partial",
          "evidence": [
            "6개 효과와 장착 제한은 있으나 6공격과 4공격+2보조의 실전 우열이 충분히 검증되지 않았습니다."
          ],
          "next_step": "대표 조합별 DPS·생존·스킬 회전을 동일 스테이지에서 비교합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 60,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "small-monster-balance",
          "title": "소형 몬스터 밸런스",
          "progress": 45,
          "status": "partial",
          "evidence": [
            "11종 수치와 배치는 있지만 모두 ContactMelee 중심이며 장기 난이도 곡선이 없습니다."
          ],
          "next_step": "밀도·이동 속도·접촉 피해와 역할 다양성을 웨이브별로 조정합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 45,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "medium-monster-balance",
          "title": "중형 몬스터 밸런스",
          "progress": 55,
          "status": "partial",
          "evidence": [
            "5종의 공격 문법은 구분되지만 스테이지 1 범위의 제한된 조합만 있습니다."
          ],
          "next_step": "소형 무리와 섞일 때 예고 가독성·동시 위협 수·회피 공간을 검증합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 55,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "boss-balance",
          "title": "보스 몬스터 밸런스",
          "progress": 70,
          "status": "partial",
          "evidence": [
            "[2026-09-02] 현재 CombatFormula로 G0-0 비공간 이론 처치 시간 62.22초, G3-0 전체 스테이지 이론 시간 72.78초를 재계산해 회귀 범위에 고정했습니다.",
            "[2026-09-02] 다섯 예고·피해·회복 규칙과 저체력 0.85 휴식은 자동 런에서 통과했지만 사람 조작을 통한 체감 난이도·실제 처치 시간은 사용자 방침에 따라 측정하지 않았습니다."
          ],
          "next_step": "외부 실제 기기 측정이 가능할 때 체감 회피와 실제 처치 시간을 확인하고, 필요하면 체력·방어·휴식·공격력만 조정합니다.",
          "sources": [
            "docs/gameplay/overcharge-vendatoad-boss-design.md",
            "tools/combat_balance_sim.py"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 70,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "currency-balance",
          "title": "재화 수입·소비 밸런스",
          "progress": 30,
          "status": "partial",
          "evidence": [
            "스테이지 1 수입과 상점·확장 비용은 있으나 장기 흐름과 인플레이션 관측이 없습니다."
          ],
          "next_step": "첫 30분·3시간·반복 10회 목표 구매 시간을 정의하고 시뮬레이션합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 30,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "drop-balance",
          "title": "몬스터 드랍·스테이지 보상 밸런스",
          "progress": 20,
          "status": "partial",
          "evidence": [
            "스테이지 1 정산 보상만 있고 몬스터 드랍과 다중 스테이지 보상표가 없습니다."
          ],
          "next_step": "드랍 포함 여부와 보상 원천별 역할을 먼저 확정합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 20,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "mastery-balance",
          "title": "마스터리 성장 밸런스",
          "progress": 40,
          "status": "partial",
          "evidence": [
            "8개 패시브 효과는 있으나 반복 포인트 공급과 만렙 도달 시간 기준이 없습니다."
          ],
          "next_step": "포인트 공급원과 계열별 투자 시간·효율을 승인합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 40,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        }
      ],
      "depth": 0,
      "computed_progress": 48,
      "computed_status": "partial",
      "leaf_count": 9,
      "proven_count": 0,
      "status_counts": {
        "proven": 0,
        "partial": 9,
        "planned_only": 0,
        "unknown": 0,
        "blocked": 0
      }
    },
    {
      "id": "art-animation-audio",
      "title": "아트·애니메이션·연출·사운드",
      "description": "플레이어가 전투 원인과 세계 정체성을 보고 들을 수 있게 만드는 표현 품질입니다.",
      "track": "content",
      "weight": 5,
      "sources": [
        "wiki/content/pages/character-2d-rendering/v010.md",
        "wiki/content/pages/world-art-bible/v004.md",
        "tools/animation_db.py"
      ],
      "children": [
        {
          "id": "player-core-animation",
          "title": "플레이어 Idle·Run·Dash",
          "progress": 100,
          "status": "proven",
          "metric": {
            "current": 3,
            "target": 3,
            "unit": "핵심 모션"
          },
          "evidence": [
            "런타임 자산, 8fps 근거와 모바일 Studio 결과가 있습니다."
          ],
          "next_step": "장비 변경과 방향 전환 회귀를 유지합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "player-hit-death-clear-animation",
          "title": "플레이어 Hit·Death·Clear",
          "progress": 45,
          "status": "partial",
          "evidence": [
            "렌더러 상태 경로는 있지만 AnimationDB live 패키지와 최신 실제 트리거 증거가 부족합니다."
          ],
          "next_step": "세 모션을 AnimationDB 승인·베이크하고 실제 피해·사망·클리어 시점에 검증합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 45,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "item-art-coverage",
          "title": "아이템 54종 아이콘",
          "progress": 100,
          "status": "proven",
          "metric": {
            "current": 54,
            "target": 54,
            "unit": "종"
          },
          "evidence": [
            "모든 활성 아이템이 공개 DB와 게임용 PNG 아이콘을 갖습니다."
          ],
          "next_step": "아이템 변경 시 아트 카탈로그·ItemDB 동기화를 유지합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "monster-art-current",
          "title": "활성 몬스터 16종 아트와 모션",
          "progress": 100,
          "status": "proven",
          "metric": {
            "current": 16,
            "target": 16,
            "unit": "종"
          },
          "evidence": [
            "대표 이미지와 82개 런타임 클립이 자산 ID와 함께 연결됩니다."
          ],
          "next_step": "새 콘텐츠는 같은 투명도·프레임·업로드 관문을 통과합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "boss-art-animation",
          "title": "보스 원화·9개 모션·전투 연출",
          "progress": 20,
          "status": "partial",
          "evidence": [
            "[2026-09-02] 보스 1 과충전 자판두꺼비는 승인 원화와 Idle·Walk·Hit·Death·공격 5종, 전투 예고 연출까지 완성됐습니다.",
            "다른 네 보스는 아직 원화와 패키지가 없습니다."
          ],
          "next_step": "보스 1의 아트 계약을 템플릿으로 나머지 네 보스를 순차 제작합니다.",
          "sources": [
            "Assets/Monsters/Runtime/OverchargeVendatoad/atlas-metadata.json",
            "tests/test_boss_runtime_contract.py"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 20,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "field-art-coverage",
          "title": "베이스캠프·튜토리얼·전투 필드 4종",
          "progress": 70,
          "status": "partial",
          "metric": {
            "current": 6,
            "target": 6,
            "unit": "필드"
          },
          "evidence": [
            "6개 필드의 콘셉트·레이아웃·오브젝트 자료가 있지만 전투 콘텐츠는 한 필드만 소비합니다."
          ],
          "next_step": "각 필드의 실제 스테이지 화면과 상호작용을 검증합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 70,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "unique-combat-vfx",
          "title": "무기·몬스터별 고유 VFX",
          "progress": 55,
          "status": "partial",
          "evidence": [
            "공용 원형·선·부채꼴·투사체 연출은 있지만 스킬 42개 전체가 고유하게 구분되지는 않습니다."
          ],
          "next_step": "핵심 스킬과 몬스터 공격부터 시그니처 실루엣·색·타이밍을 부여합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 55,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "game-audio",
          "title": "효과음·배경음악·환경음",
          "progress": 0,
          "status": "unknown",
          "evidence": [
            "저장소에서 음원 파일, SoundId, SoundService 사용 근거를 찾지 못했습니다."
          ],
          "next_step": "알파 오디오 범위와 음량·뮤트 설정, 필수 전투 신호 목록을 정의합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 0,
          "computed_status": "unknown",
          "leaf_count": 1,
          "proven_count": 0
        }
      ],
      "depth": 0,
      "computed_progress": 61,
      "computed_status": "partial",
      "leaf_count": 8,
      "proven_count": 3,
      "status_counts": {
        "proven": 3,
        "partial": 4,
        "planned_only": 0,
        "unknown": 1,
        "blocked": 0
      }
    },
    {
      "id": "mobile-ux-accessibility",
      "title": "모바일 UX·접근성",
      "description": "다른 세로 화면에서도 모든 필수 행동과 정보가 안전하고 읽기 쉬운 상태입니다.",
      "track": "quality",
      "weight": 4,
      "sources": [
        "AGENTS.md",
        "wiki/content/pages/environment-harness-qa/v001.md"
      ],
      "children": [
        {
          "id": "mobile-responsive-layouts",
          "title": "핵심 UI의 세로형 반응형 배치",
          "progress": 95,
          "status": "partial",
          "evidence": [
            "[2026-09-02] iPhone 17 Pro 401×776의 클리어·장비 3택과 iPhone 7 374×666의 보스 예고·사망·재도전 화면에서 모든 필수 버튼이 안전 영역 안, 48px 이상, 활성·TextFits 상태임을 자동 확인했습니다."
          ],
          "next_step": "남은 알파 시설 화면과 실제 기기 조작 감각을 같은 두 화면에서 확인합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 95,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "mobile-safe-insets",
          "title": "노치·상단 Core UI·제스처 안전 영역",
          "progress": 100,
          "status": "proven",
          "evidence": [
            "주요 인벤토리·튜토리얼·결과 화면이 두 기기 안전 영역 검증을 통과했습니다."
          ],
          "next_step": "새 UI마다 같은 검사 기준을 적용합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "touch-targets-gestures",
          "title": "터치 대상·드래그·선택 상태",
          "progress": 90,
          "status": "partial",
          "evidence": [
            "장비·룬·합성의 주요 터치 경로는 두 모바일 크기에서 검증됐지만 모든 시설과 전체 튜토리얼의 종단 간 터치 기록은 없습니다."
          ],
          "next_step": "최소 터치 크기와 손가락 가림을 모든 신규 화면과 전체 알파 루프에서 확인합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 90,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "small-tall-phone-matrix",
          "title": "작은 휴대폰·긴 휴대폰 검증 매트릭스",
          "progress": 95,
          "status": "partial",
          "evidence": [
            "[2026-09-02] iPhone 17 Pro와 iPhone 7에서 스테이지 1 성공·사망·재도전 자동 런과 한국어·영어 UI 안전 계약을 통과했습니다. 사람처럼 조작하는 플레이는 사용자 방침에 따라 제외했습니다."
          ],
          "next_step": "실제 기기 성능과 손가락 조작 감각만 별도 외부 측정합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 95,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "accessibility-contrast-settings",
          "title": "대비·색상 의존·텍스트 크기·설정",
          "progress": 45,
          "status": "partial",
          "evidence": [
            "현재 UI는 대비와 상태 라벨을 사용하지만 공식 접근성 검사와 크기·색약 옵션은 없습니다."
          ],
          "next_step": "색만으로 상태를 전달하지 않는지 점검하고 텍스트·효과·오디오 옵션을 정합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 45,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "localization",
          "title": "현지화와 문자열 관리",
          "progress": 80,
          "status": "partial",
          "evidence": [
            "[2026-09-02] 한국어 원문과 언어 중립 동적 템플릿 총 1,970개를 추출·정리하고 번역기 일괄 변환 대신 수동 영문 번역을 유지했습니다.",
            "[2026-09-01] 한국어 이용자에게 한국어, 그 밖의 이용자에게 영어 원문을 제공하며 지원되는 다른 언어는 Roblox 자동 번역의 영어 원문을 사용하도록 런타임 선택기와 Roblox CSV를 만들었습니다.",
            "[2026-09-02] 카탈로그 검사, Python 테스트, Luau 해석기·컴파일 검사를 통과했고 iPhone 17 Pro 401×776과 iPhone 7 374×666의 클리어·보상·사망·재도전 화면에서 한국어·영어 미해결 문자열 0과 텍스트 맞춤을 자동 확인했습니다. Roblox LocalizationTable 운영 반영은 남았습니다."
          ],
          "next_step": "현재 현지화 변경을 승인 커밋에 포함하고 Roblox LocalizationTable에 CSV를 반영한 뒤, 전체 플레이 화면과 비한국어·비영어 로케일의 자동 번역 경로를 두 모바일 화면에서 회귀 검증합니다.",
          "sources": [
            "docs/localization/game-text.json",
            "docs/localization/english-translations.json",
            "docs/localization/roblox-localization.csv",
            "src/ReplicatedStorage/Localization/GameTextResolver.luau",
            "src/StarterPlayer/StarterPlayerScripts/GameLocalizationBootstrap.client.luau",
            "tools/localization_db.py",
            "tests/test_localization_db.py"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 80,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        }
      ],
      "depth": 0,
      "computed_progress": 84,
      "computed_status": "partial",
      "leaf_count": 6,
      "proven_count": 1,
      "status_counts": {
        "proven": 1,
        "partial": 5,
        "planned_only": 0,
        "unknown": 0,
        "blocked": 0
      }
    },
    {
      "id": "data-security-operations",
      "title": "데이터·저장·보안·운영",
      "description": "서버 권한, 프로필 무결성, 콘텐츠 생성·Studio 적용과 서비스 복구입니다.",
      "track": "quality",
      "weight": 2,
      "sources": [
        "src/ServerScriptService/Economy/PlayerProfileStore.luau",
        "tools/packbound_studio_qa/README.md",
        "AGENTS.md"
      ],
      "children": [
        {
          "id": "profile-schema-transactions",
          "title": "프로필 스키마·세션 임대·영수증",
          "progress": 90,
          "status": "partial",
          "evidence": [
            "중복 요청, FIFO 보상, 영수증과 저장 재시도 계약은 있으나 실제 Production DataStore 검증이 없습니다."
          ],
          "next_step": "서비스 환경의 재접속·서버 종료·세션 충돌을 안전한 계정으로 검증합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 90,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "profile-migration-backup",
          "title": "저장 마이그레이션·백업·복구",
          "progress": 40,
          "status": "partial",
          "evidence": [
            "스키마 조정과 실패 폐쇄형 검사는 있지만 운영 백업·롤백 훈련이 없습니다."
          ],
          "next_step": "버전별 마이그레이션, 백업 보존과 복구 절차를 문서·테스트로 만듭니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 40,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "server-authority-input-validation",
          "title": "전투·경제·이동의 서버 권한",
          "progress": 100,
          "status": "proven",
          "evidence": [
            "가격·등급·seed, 피해, 포털, 대시·패리와 보상 결과를 서버가 소유합니다."
          ],
          "next_step": "새 Remote도 클라이언트 결과를 신뢰하지 않습니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "remote-abuse-limits",
          "title": "Remote 속도·동시 실행 제한",
          "progress": 100,
          "status": "proven",
          "evidence": [
            "경제·인벤토리 Remote에 사용자별·전역 제한과 요청 ID 검증이 있습니다."
          ],
          "next_step": "새 Remote 추가 시 같은 제한과 테스트를 요구합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "content-database-build-check",
          "title": "Item·Monster·Wave·Animation 등 DB build/check",
          "progress": 100,
          "status": "proven",
          "evidence": [
            "주요 콘텐츠 DB가 원본·생성물 최신성 검사를 통과합니다."
          ],
          "next_step": "신규 DB도 같은 원본·생성·검사 계약을 따릅니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "studio-bake-revision",
          "title": "저장소와 Studio 베이크 리비전 일치",
          "progress": 100,
          "status": "proven",
          "evidence": [
            "[2026-09-02] Studio 실제 자동 런이 MonsterDB 35bd2978ae98dc40과 WaveDB e1608046e53f923c를 보고했고 저장소 생성 리비전과 정확히 일치했습니다."
          ],
          "next_step": "콘텐츠 DB 변경마다 같은 일회성 베이크와 리비전 확인을 반복합니다.",
          "sources": [
            "src/ReplicatedStorage/Monsters/GeneratedMonsterDefinitions.luau",
            "src/ReplicatedStorage/Waves/GeneratedStageWaves.luau"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "multiplayer-latency-reconnect",
          "title": "멀티플레이·지연·재접속 검증",
          "progress": 0,
          "status": "unknown",
          "evidence": [
            "최종 Studio Gate는 단일 플레이어·메모리 백엔드이며 지연·재접속 보고서가 없습니다."
          ],
          "next_step": "2명 이상, 지연·패킷 손실, 중도 이탈·재접속 시나리오를 정의합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 0,
          "computed_status": "unknown",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "exploit-penetration-review",
          "title": "공격적 exploit·침투 검증",
          "progress": 30,
          "status": "partial",
          "evidence": [
            "방어 계약은 강하지만 전용 위협 모델·퍼징·악성 클라이언트 실행 보고서가 없습니다."
          ],
          "next_step": "경제·보상·대시·패리·포털 Remote를 우선순위로 위협 모델과 공격 테스트를 수행합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 30,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "analytics-monitoring",
          "title": "오류·잔존율·경제·이탈 분석과 경보",
          "progress": 0,
          "status": "unknown",
          "evidence": [
            "실서비스 텔레메트리, 오류 집계와 경보 근거를 찾지 못했습니다."
          ],
          "next_step": "알파 의사결정에 필요한 최소 이벤트와 개인정보 경계를 정의합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 0,
          "computed_status": "unknown",
          "leaf_count": 1,
          "proven_count": 0
        }
      ],
      "depth": 0,
      "computed_progress": 62,
      "computed_status": "partial",
      "leaf_count": 9,
      "proven_count": 4,
      "status_counts": {
        "proven": 4,
        "partial": 3,
        "planned_only": 0,
        "unknown": 2,
        "blocked": 0
      }
    },
    {
      "id": "qa-performance-release",
      "title": "QA·성능·알파 배포",
      "description": "현재 바이트가 플레이 가능하고 복구 가능한 빌드인지 증명하는 최종 관문입니다.",
      "track": "quality",
      "weight": 2,
      "sources": [
        "wiki/content/pages/environment-harness-qa/v001.md",
        "tools/packbound_studio_qa/README.md"
      ],
      "children": [
        {
          "id": "automated-domain-tests",
          "title": "데이터·도메인 자동 검사",
          "progress": 100,
          "status": "proven",
          "evidence": [
            "핵심 플레이·콘텐츠·경제 관련 Python과 Luau 테스트가 저장소에 있으며 최근 감사에서도 통과했습니다."
          ],
          "next_step": "새 기능의 실패·경계 사례를 같은 커밋에 추가합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "development-progress-traceability",
          "title": "개발 작업의 알파 진행도 추적 운영",
          "progress": 90,
          "status": "partial",
          "evidence": [
            "[2026-09-01] 구현·콘텐츠·아트·UI·검증·도구·운영 작업마다 가장 작은 관련 말단 항목을 갱신하고, 수치가 그대로여도 날짜·작업 근거·다음 완료 관문을 남기도록 프로젝트 완료 규칙을 추가했습니다.",
            "[2026-09-01] 기존 항목으로 설명할 수 없는 작업은 새 말단 항목으로 추가하고, 진행도 원본과 공개 데이터를 함께 생성·검사하도록 규정했습니다. 이번 현지화 작업과 이 운영 규칙 자체를 실제 진행도 항목으로 반영해 생성·검사를 통과했습니다."
          ],
          "next_step": "이 변경을 승인 커밋에 포함하고, 이후 개발 작업에서도 같은 날짜 근거 갱신이 누락되지 않는지 누적 확인합니다.",
          "sources": [
            "AGENTS.md",
            "docs/planning/alpha-development-progress.json",
            "tools/alpha_progress.py"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 90,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "clean-environment-harness",
          "title": "결정론·Studio 통합 하네스",
          "progress": 100,
          "status": "proven",
          "evidence": [
            "d786c21에서 같은 clean 후보의 Gate A/B PASS와 READY, 두 모바일 크기 14개 에피소드가 기록됐습니다. 하네스 구조 자체는 현재 HEAD에도 유지됩니다."
          ],
          "next_step": "릴리스 후보마다 변경된 공통 소스 해시로 Gate A/B를 새로 실행합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 100,
          "computed_status": "proven",
          "leaf_count": 1,
          "proven_count": 1
        },
        {
          "id": "current-working-tree-gate",
          "title": "현재 기준 커밋의 최종 통합 Gate",
          "progress": 95,
          "status": "partial",
          "evidence": [
            "[2026-09-02] 현재 발행 후보의 관련 Python·Luau·DB·컴파일 검사와 EnvHarness 결정론 회귀가 통과했습니다.",
            "[2026-09-02] 같은 구현 후보를 Studio에 적용해 iPhone 17 Pro 401×776의 전체 클리어·보상·복귀와 iPhone 7 374×666의 사망·부활·새 Run ID 재도전을 고정 자동 시나리오로 확인했습니다."
          ],
          "next_step": "커밋 뒤 clean 후보의 Gate A 비교 가능성을 다시 확인하고, 실제 모바일 기기 FPS와 조작 감각은 별도 외부 증거로 관리합니다.",
          "sources": [
            "wiki/content/pages/environment-harness-qa/v003.md",
            "tools/packbound_studio_qa/README.md"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 95,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "full-five-wave-regression",
          "title": "보스 포함 5웨이브 실전 회귀",
          "progress": 95,
          "status": "partial",
          "evidence": [
            "[2026-09-02] 실제 서버 런을 사용하는 고정 자동 시나리오로 iPhone 17 Pro 전체 클리어·정산·복귀와 iPhone 7 보스 사망·패배 정산·부활·새 Run ID 재도전을 통과했습니다.",
            "사람 조작형 플레이 테스트는 사용자 방침에 따라 이번 검증 범위에서 제외했습니다."
          ],
          "next_step": "같은 소스 해시의 최종 Gate A와 자동 Gate B 결과를 커밋 후보에 묶고 실제 기기 성능만 별도 관리합니다.",
          "sources": [
            "tools/packbound_studio_qa/README.md",
            "tests/test_packbound_studio_qa_bridge.py"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 95,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "performance-budgets-profiling",
          "title": "FPS·메모리·네트워크 예산과 프로파일링",
          "progress": 25,
          "status": "partial",
          "evidence": [
            "[2026-09-02] 4웨이브와 보스전에서 각각 10초·600표본을 자동 수집했고 서버 평균 프레임 시간은 16.67ms, 33ms 초과 지속은 0초였습니다.",
            "Studio 백그라운드 클라이언트는 약 15FPS로 제한돼 실제 모바일 45FPS와 비교할 수 없으므로 합격 근거로 사용하지 않았습니다."
          ],
          "next_step": "실제 모바일 기기에서 45FPS·30FPS 지속 하한, 메모리와 네트워크 예산을 별도로 측정합니다.",
          "sources": [
            "tools/packbound_studio_qa/README.md"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 25,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "long-session-memory",
          "title": "장시간 플레이·메모리 누수",
          "progress": 0,
          "status": "unknown",
          "evidence": [
            "반복 10회 이상 스테이지와 장시간 세션의 메모리 추적 근거가 없습니다."
          ],
          "next_step": "반복 진입·사망·클리어·UI 열기 후 인스턴스와 메모리 증가를 측정합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 0,
          "computed_status": "unknown",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "production-datastore-validation",
          "title": "Production DataStore 저장 검증",
          "progress": 30,
          "status": "partial",
          "evidence": [
            "Studio Gate는 안전을 위해 DataStore 호출을 0으로 강제하므로 실제 서비스 영속성을 증명하지 않습니다."
          ],
          "next_step": "별도 안전 환경에서 저장·재접속·서버 종료·중복 영수증을 검증합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 30,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "release-checklist-versioning",
          "title": "알파 릴리스 체크리스트와 버전 기준",
          "progress": 20,
          "status": "partial",
          "evidence": [
            "개발 하네스는 있지만 게임 알파 버전 번호·승인자·필수 게이트를 묶은 체크리스트가 없습니다."
          ],
          "next_step": "릴리스 후보 생성, 승인, 배포, 확인과 철회 조건을 문서화합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 20,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "game-deployment-rollback",
          "title": "게임 배포·롤백 절차",
          "progress": 0,
          "status": "unknown",
          "evidence": [
            "Roblox 프로덕션 배포·롤백 파이프라인과 복구 증거를 찾지 못했습니다."
          ],
          "next_step": "게시 전 백업, 단계적 배포, 이상 감지와 이전 버전 복귀 절차를 만듭니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 0,
          "computed_status": "unknown",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "alpha-feedback-channel",
          "title": "알파 테스터 피드백·버그 접수",
          "progress": 0,
          "status": "planned_only",
          "evidence": [
            "테스터 모집, 빌드 안내, 버그 양식과 우선순위 운영 규칙이 없습니다."
          ],
          "next_step": "최소 피드백 채널과 재현 정보 양식을 정합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 0,
          "computed_status": "planned_only",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "platform-policy-privacy",
          "title": "플랫폼 정책·연령·개인정보 점검",
          "progress": 0,
          "status": "unknown",
          "evidence": [
            "출시 전 정책 체크리스트와 데이터 수집 경계를 확인할 근거가 없습니다."
          ],
          "next_step": "Roblox 정책과 실제 수집 데이터 기준으로 알파 출시 점검을 수행합니다.",
          "weight": 1,
          "sources": [],
          "depth": 1,
          "computed_progress": 0,
          "computed_status": "unknown",
          "leaf_count": 1,
          "proven_count": 0
        }
      ],
      "depth": 0,
      "computed_progress": 46,
      "computed_status": "partial",
      "leaf_count": 12,
      "proven_count": 2,
      "status_counts": {
        "proven": 2,
        "partial": 6,
        "planned_only": 1,
        "unknown": 3,
        "blocked": 0
      }
    }
  ],
  "revision": "ba8298f4de5cffd8",
  "overall_progress": 63,
  "category_count": 12,
  "leaf_count": 201,
  "proven_count": 60,
  "status_counts": {
    "proven": 60,
    "partial": 59,
    "planned_only": 76,
    "unknown": 6,
    "blocked": 0
  },
  "track_progress": {
    "content": {
      "progress": 42,
      "category_count": 4
    },
    "quality": {
      "progress": 69,
      "category_count": 3
    },
    "system": {
      "progress": 78,
      "category_count": 5
    }
  },
  "source": "docs/planning/alpha-development-progress.json"
};
