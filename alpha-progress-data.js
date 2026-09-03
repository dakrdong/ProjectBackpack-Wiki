window.PACKBOUND_ALPHA_PROGRESS = {
  "schema_version": 1,
  "title": "알파 완성 진행도",
  "summary": "PackBound 알파가 실제로 플레이 가능한 한 사이클을 완성하는 데 필요한 시스템, 콘텐츠, 품질 작업을 한 트리에서 추적합니다. 높은 기반 완성도와 아직 부족한 콘텐츠 수량을 분리해 보여 줍니다.",
  "alpha_definition": "새 플레이어가 모바일에서 튜토리얼을 마치고 베이스캠프에서 장비를 준비한 뒤, 완성된 보스가 포함된 스테이지를 끝까지 플레이하고 보상·성장·재도전까지 오류 없이 이어갈 수 있으며, 목표 콘텐츠 수량과 운영·성능·저장 검증이 승인된 상태입니다.",
  "snapshot": {
    "reviewed_on": "2026-09-03",
    "baseline_commit": "493ce4e",
    "scope_note": "완료 판정은 기준 커밋에서 출발한 현재 발행 후보의 저장소·자동 검사·Studio 서버 관측 증거를 사용했습니다. 스테이지 1의 클리어·보상·사망·재도전은 두 모바일 화면에서 실제 서버 경로로 연결됐고, 튜토리얼을 건너뛰지 않은 새 프로필의 첫 세션(박사 무기→3회 클리어→마스터리 투자)도 서버 관측으로 완주했습니다. 사용자 방침에 따라 제품 오너 검수가 필요 없는 결정적 작업을 우선했고, 사람처럼 조작하는 플레이 테스트는 제외했으며 실제 기기 FPS와 조작 감각은 아직 증명하지 않았습니다. 수량 목표와 가중치는 현재 제품 오너 요청을 바탕으로 만든 관리용 임시 기준입니다.",
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
      "body": "모바일 인벤토리, 장착, 알파 장비 54종의 전투 수치, 룬 보드 능력 369개의 전투 채널, 웨이브, 사망·클리어 결과, 보상, 룬 합성, 마스터리, 프로필 이관·Remote 위협 모델이 각각 서버 권한 계약과 자동 검사를 갖고 있습니다."
    },
    {
      "kind": "priority",
      "title": "스테이지 1 다음에는 후속 콘텐츠와 실기기 품질을 채웁니다.",
      "body": "스테이지 1 완주·사망·재도전과 튜토리얼 첫 세션 전체가 비조작 자동 시나리오로 연결됐고, 완주 관측은 서버 측 작업으로 요청 두 번·71초로 줄었습니다. 다음 관문은 두 모바일 화면 관측, 실제 기기 성능, 후속 스테이지 제작입니다."
    },
    {
      "kind": "risk",
      "title": "시스템 수보다 콘텐츠 수량과 실제 소비 연결이 뒤처져 있습니다.",
      "body": "스테이지는 1/50, 활성 보스는 1/5입니다. 540개 룬 보드의 능력 552개 중 369개가 실제 전투 채널에 연결됐지만 나머지 183개는 아직 소비처가 없고, 마스터리 포인트의 반복 공급원과 룬 상점은 미결입니다."
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
          "progress": 88,
          "status": "partial",
          "evidence": [
            "생존자 즉시 복귀와 사망자 부활 후 캠프 배치는 구현됐지만 전체 재도전 기록이 없습니다.",
            "[2026-09-03] Studio Play 한 세션에서 클리어 3회와 1웨이브 사망 2회를 섞어 캠프 복귀→재도전을 5회 반복했습니다. 매 회 LastStageRunOutcome(Clear/Failure)과 LastStageRunReturnCode(Returned/ParticipantNotAlive)가 기록되고 CurrentPackBoundZone이 BaseCamp로 돌아왔으며, 사망 시에는 새 캐릭터로 부활한 뒤 복귀했고, 다음 런은 항상 새 Run ID로 시작했습니다. 프로필은 첫 클리어 200동 뒤 클리어마다 100동(총 400동), 장비 대기 보상 3건, 룬 6개로 정확히 누적됐습니다."
          ],
          "next_step": "재도전 반복은 자동 증명됐고, 실기기 조작 감각과 화면 전환 관측만 남았습니다.",
          "sources": [
            "src/ServerScriptService/StageRuns/StageRunService.luau"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 88,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "mobile-end-to-end-loop",
          "title": "모바일 종단 간 플레이 루프 검증",
          "progress": 70,
          "status": "partial",
          "evidence": [
            "개별 화면과 하네스는 강하지만 캠프→5웨이브→정산→복귀를 한 세션에서 증명하지 않았습니다.",
            "[2026-09-03] Studio Play 한 세션(새 메모리 프로필, 튜토리얼은 Studio 건너뛰기)에서 장비 준비→5웨이브 런→보스 처치→정산→복귀를 3회 연속, 사망→복귀를 2회 연속 서버 경로로 완주하고 콘솔 오류 0(회귀 1건 수정 후)과 잔여 상태 0을 확인했습니다. 화면 관측과 튜토리얼을 건너뛰지 않은 새 프로필의 흐름은 포함하지 않았습니다.",
            "[2026-09-03] Studio Play 한 세션에서 튜토리얼을 건너뛰지 않은 새 메모리 프로필로 dash_fire→(박사 활 0-0 지급·장착·첫 룬 배치·캠프 도착)→ready_stage_1→스테이지 1 클리어 3회(각 5웨이브+보스, 정산 RunSettled)→룬 합성·장비 합성 수업 사건→mastery_spend→시설 프롬프트+AllocatePoint→튜토리얼 complete까지 서버 경로로 완주했습니다. 최종 프로필: 400동, 룬 9, 아이템 2(중복 활 포함), 대기 장비 보상 3, 마스터리 노드 1. 콘솔 오류 0, 남은 몬스터 0, Workspace 후손 4766(기준선 동일), 메모리 3967MB. 브리지 픽스처가 첫 무기 등급을 G3로 올리던 문제로 두 번째 클리어 정산이 TutorialProgressionFailed로 거부되는 함정을 찾아 픽스처를 고쳤고(PackBoundStudioQABridge), 정산 거부 경고에 사유를 함께 남기도록 StageRunService 로그를 보강했습니다. 화면 관측은 여전히 포함하지 않았습니다.",
            "[2026-09-03] Gate B 레지스트리에 tutorial_full_flow 시나리오를 등록했습니다(tools/packbound_studio_qa registry: 필수 action 순서 25단계, 최소 호출 횟수, 구조화 predicate 6종 tutorial_stage_one_ready/first_clear/second_clear/third_clear_exact·tutorial_mastery_spend_exact·tutorial_complete_exact, 허용 프로필 변경 경로 9개; contract가 저작 보상표 0동/1룬→200동/5룬→300동/7룬/중복 활→400동/9룬/포인트 1→complete/노드 1을 재계산). 서버 브리지에 BeginStageOneAutomatedClear/ObserveStageOneAutomatedClear(서버 측 완주 작업: 고정 웨이브 진행·보스 사망 경로 연쇄, 600초 상한, 드리프트·이탈 fail-closed)를, 클라이언트 브리지에 SpendFirstMasteryPointAutomated(실제 시설 프롬프트+AllocatePoint mastery_a, 고정 RequestId)를 추가하고 문자열 계약 테스트 4건과 contract 테스트 3건을 더했습니다. Studio Play 드라이런: 튜토리얼 미건너뛰기 프로필로 완주 작업 3회가 각 71초에 RunSettled로 끝나 단계별 ProfileSnapshot이 6종 predicate 기대값과 정확히 일치했고 콘솔 오류 0. 클라이언트 마스터리 액션은 RequestId에 콜론을 써 MasteryService 식별자 규칙([%w_-])에 걸려 InvalidRequest로 1회 실패 → 하이픈 ID로 고치고 규칙을 테스트로 고정. 고친 액션의 재관측은 실행 중 Studio Play가 외부에서 종료되어 미완료(수동 동일 호출은 앞서 성공)."
          ],
          "next_step": "고친 SpendFirstMasteryPointAutomated를 포함한 tutorial_full_flow 전 구간을 한 번 다시 관측해 결과를 StudioQAResult v1으로 기록하고, 두 모바일 뷰포트 화면 관측을 더합니다.",
          "sources": [
            "wiki/content/pages/environment-harness-qa/v001.md",
            "src/ServerScriptService/PackBoundStudioQABridge.server.luau",
            "src/ServerScriptService/StageRuns/StageRunService.luau",
            "tools/packbound_studio_qa/src/packbound_studio_qa/registry.py",
            "tools/packbound_studio_qa/src/packbound_studio_qa/contract.py",
            "src/StarterPlayer/StarterPlayerScripts/PackBoundStudioQABridge.client.luau"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 70,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        }
      ],
      "depth": 0,
      "computed_progress": 88,
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
            "화면 밖 박사 방향 안내와 첫 이동 목표가 실제 모바일 화면에서 검증됐습니다.",
            "[2026-09-02] 튜토리얼 필드에서 박사 캐릭터가 보이지 않고 E 상호작용 표시만 남던 원인을 찾았습니다. 쿼터뷰 카메라가 플레이어에서 140스터드 떨어져 있어 박사 빌보드까지 약 170~180스터드인데, 빌보드 최대 표시 거리가 120이라 렌더링이 생략됐습니다. 최대 표시 거리를 플레이어 스프라이트와 같은 512로 올렸습니다.",
            "[2026-09-02] Studio Play(팩 바운드, 클라이언트 뷰포트 400×776) 관측: 카메라-박사 거리 172스터드에서 박사 스프라이트 빌보드가 106×106px로 그려지고 아틀라스 로드 완료(IsLoaded=true)를 확인했습니다."
          ],
          "next_step": "다른 모바일 해상도(iPhone 7 374×666)에서도 박사 빌보드 크기와 이름표 가독성을 화면으로 확인합니다.",
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
            "걸어서 넘을 수 없는 불길과 대시 무적 통과 목표가 서버 사건으로 연결됩니다.",
            "[2026-09-02] 불길 규칙을 '대시 중일 때만 피해가 없다'로 단순화했습니다. 서버가 승인한 대시 창(DashAuthority.GetActiveDash)이 열려 있지 않은 상태로 불길에 닿으면 최대 체력 20% 피해를 받고 들어온 쪽 가장자리 밖 4스터드로 되돌아갑니다. 대시 중 닿으면 대시가 끝난 뒤 착지 위치로 판정해 반대편이면 관문 완료, 불길 안이면 피해·복귀, 진입 쪽이면 아무 일도 없습니다. 속도·변위 추정 조건(MINIMUM_SAFE_DASH_SPEED 등)은 제거했습니다.",
            "[2026-09-02] Studio Play 서버 관측(고정 자동 시나리오): 대시 없이 불길 안으로 이동 → 체력 100→80, 0.65초 안에 진입 쪽 가장자리 밖(along=-8.5)으로 복귀, 단계 유지. 불길 10.5스터드 앞에서 실제 클라이언트 컨트롤러로 대시 → 21스터드 이동 후 관문 완료(단계 doctor_intro, TutorialDashGateCleared=true), '대시 성공' 안내 수신. 착지 판정은 복제 지연을 감안해 대시 종료 0.3초 뒤 판정하고 '안'이면 0.3초 뒤 한 번 더 확인합니다."
          ],
          "next_step": "실기기에서 지연이 있을 때 착지 판정 지연(0.3+0.3초)이 체감상 늦지 않은지 확인하고, 필요하면 대시 창 여유값을 조정합니다.",
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
            "[2026-09-01] iPhone 17 Pro 세로 401×776과 Galaxy A06 세로 359×718에서 양쪽 화자 전환, 안전 영역, 52px 이상 조작 버튼, 한국어·영어 전체 19개 대사의 줄바꿈과 텍스트 맞춤을 확인했습니다.",
            "[2026-09-02] 첫 만남 대사를 '무기를 먼저 건네는' 흐름으로 바꿨습니다. 박사가 소개 뒤 무기를 건네고(대화 완료 시 서버가 0-0 무기를 보관함에 생성), 장착 뒤 다시 말을 걸면 전투가 시작되며, 전투 후 대사에서 첫 룬을 건넵니다. 대사 3종(first_meeting·equipment_equipped·combat_clear)과 목표·안내 문구를 한국어·영어 쌍으로 갱신했습니다(현지화 19항목 추가, 1971항목)."
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
            "전투 완료를 서버가 확인하고 첫 장비와 인벤토리를 한 번만 지급합니다.",
            "[2026-09-02] 첫 전투는 무기를 장착한 뒤 박사에게 말을 걸어야 시작되며(접속·부활 시 자동 시작 제거), 3웨이브 클리어 보상은 첫 장비가 아니라 G0 한 칸 룬 1개로 바뀌었습니다. 전투 중에는 박사 방향 화살표를 숨깁니다.",
            "[2026-09-02] Studio Play 관측: 장착 후 박사 프롬프트 → 튜토리얼 런 시작(웨이브 1/3) → 장착한 질풍 곡궁의 자동 공격으로 3웨이브 종료 → 단계 place_first_rune, 룬 보관함 1개(G0 1칸), 전투 후 대사(combat_clear)와 룬 보드 열림, 콘솔 오류 0."
          ],
          "next_step": "몬스터 교체 뒤에도 난이도와 룬 보상 사건을 유지하고, 사망 후 박사에게 다시 말을 걸어 재시작하는 경로를 자동 시나리오에 추가합니다.",
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
            "첫 장비를 장착판에 놓는 행동이 다음 단계와 룬 보상으로 연결됩니다.",
            "[2026-09-02] 새 프로필은 아이템 0개로 시작합니다(PlayerProfileSchema의 시작 검 제거). 박사 대화 완료(doctor_intro 이정표)에 무기가 보관함에 생성되고 Inventory 기능이 열리며, 그 전에는 인벤토리 버튼이 보이지 않고 PC Tab 단축키도 무시됩니다(서버 속성 TutorialInventoryUnlocked를 클라이언트가 읽음). 장착은 보상 없이 다음 단계(전투)로만 이어집니다. Studio 전용 F2 튜토리얼 스킵은 메모리 프로필이 빈손이면 시작 검 1개를 장착 상태로 넣어 기존 QA 장비 계약을 유지합니다.",
            "[2026-09-02] Studio Play 관측: 새 프로필 items=0·인벤토리 런처 숨김·접근 속성 false → 박사 대화 완료 → 질풍 곡궁 1개 보관함 생성, TutorialInventoryUnlocked=true, 인벤토리 자동 열림(OpenFeature Equipment) → 실제 Mutate 리모트로 3,3 배치 → 단계 tutorial_combat, 장착 대사(equipment_equipped) 수신. 인벤토리를 닫으면 런처 버튼이 다시 보입니다."
          ],
          "next_step": "두 모바일 해상도에서 인벤토리 버튼이 잠금 해제 직후 나타나는 순간과 첫 장착 드래그를 화면으로 확인합니다.",
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
            "[2026-09-01] 가이드를 5페이지로 확장했습니다. 4페이지는 G0 블록의 60도 회전으로 능력 2칸을 활성화하고, 5페이지는 선택한 G0·G1 블록을 독립적으로 회전·배치해 색상별 능력 2칸을 활성화해야 체크됩니다. 다른 색 블록이 능력 칸을 덮어도 활성화 수에 포함하지 않는 규칙을 모델 테스트로 고정했습니다.",
            "[2026-09-02] 첫 룬은 첫 전투 클리어 보상으로 지급되며, 전투 종료 시 룬 보드가 열리고 첫 무기의 룬 보드로 바로 이동합니다(OpenFeature RuneBoard)."
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
          "progress": 95,
          "status": "partial",
          "evidence": [
            "해금·보상 규칙은 구현됐지만 실제 5웨이브 완주와 한 흐름으로 검증되지 않았습니다.",
            "[2026-09-03] Studio Play(팩 바운드, 새 메모리 프로필, 튜토리얼 건너뛰기 없음)에서 브리지 SetupTutorialStageOneReady로 dash_fire→ready_stage_1까지 실제 튜토리얼 사건(박사 활 0-0 지급·장착·첫 룬 배치·캠프 도착)을 통과시킨 뒤 StartStageOneAutomatedRun→5웨이브→보스 처치로 첫 클리어를 완주했습니다. 정산 코드 RunSettled, TutorialStep rune_fusion_merge, TutorialStageClearCount 1, RuneFusion 해금, 200동·룬 +4(첫 클리어 룬 2 + 튜토리얼 룬 2)·대기 장비 보상 1을 ProfileSnapshot과 플레이어 속성(TutorialStepId·TutorialStageClearCount)에서 함께 확인했습니다. 화면 관측은 하지 않았습니다."
          ],
          "next_step": "두 모바일 뷰포트에서 첫 클리어 직후 룬 합성 해금 안내와 보상 화면을 화면으로 확인합니다.",
          "sources": [
            "src/ServerScriptService/PackBoundStudioQABridge.server.luau",
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
          "progress": 85,
          "status": "partial",
          "evidence": [
            "같은 아이템·같은 등급 합성 규칙은 있지만 전용 모바일 튜토리얼의 최종 증거가 부족합니다.",
            "[2026-09-03] Studio Play(새 메모리 프로필, 튜토리얼 건너뛰기 없음) 같은 세션에서 두 번째 스테이지 1 클리어가 RunSettled로 정산되며 TutorialStep equipment_fusion, TutorialStageClearCount 2, EquipmentFusion 해금, 박사 활과 정의·등급(0-0)이 같은 중복 활 1개가 보관함에 지급(ItemCount 2, StorageItemCount 1), 300동·룬 7·대기 장비 보상 2를 확인했습니다. 합성 완료 사건(EquipmentFusionCompleted)은 브리지 AdvanceTutorialLesson이 서비스 경로로 적용해 ready_stage_3으로 넘어갔고, 실제 MergeItems 터치는 수행하지 않았습니다. 발견한 함정: 첫 무기 등급을 클리어 2 이전에 바꾸면(자동화 G3 지름길) 튜토리얼 중복 장비 검증이 실패해 정산 전체가 TutorialProgressionFailed로 거부되므로 브리지 픽스처가 등급을 건드리지 않게 고쳤습니다(실제 플레이어는 장비 합성 해금 전 등급 변경 경로가 없음)."
          ],
          "next_step": "두 모바일 뷰포트에서 중복 활 두 개를 실제 터치로 선택→합성→결과 확인까지 검증하고, 튜토리얼 보상 실패가 정산 전체를 거부하는 fail-closed 동작을 운영 문서에 명시합니다.",
          "sources": [
            "src/ServerScriptService/PackBoundStudioQABridge.server.luau",
            "src/ServerScriptService/Tutorial/TutorialProgressionDomain.luau"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 85,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "tutorial-mastery-spend",
          "title": "세 번째 클리어와 첫 마스터리 투자",
          "progress": 95,
          "status": "partial",
          "evidence": [
            "1포인트 지급·저장·투자는 구현됐지만 전체 튜토리얼 종단 간 증거가 없습니다.",
            "[2026-09-03] Studio Play(새 메모리 프로필, 튜토리얼 건너뛰기 없음) 같은 세션에서 세 번째 스테이지 1 클리어가 RunSettled로 정산되며 TutorialStep mastery_spend, TutorialStageClearCount 3, Mastery·CharacterUpgrade 해금, MasteryUnspentPoints 1(프로필)을 확인했습니다. 이어서 클라이언트가 캐릭터 업그레이드 시설 프롬프트(BaseCampPrompt, 거리 4.9스터드)를 실제로 눌러 시설 세션을 받고 MasteryRemotes.AllocatePoint({NodeId=mastery_a, RequestId})로 포인트를 썼습니다: 응답 Allocated·Level 1, TutorialStep complete, TutorialComplete 속성 true, MasteryNodeCount 1, 캐릭터 속성 MasteryAttackPowerPercent 2. 시설 세션 없이 보낸 요청과 문자열 인수 요청은 InvalidRequest로 거부됐습니다. 참고: 플레이어 속성 MasteryUnspentPoints는 정산 직후 0으로 남고 포인트 사용 시 갱신되며, 클라이언트는 이 속성을 읽지 않습니다(GetState 원격 사용)."
          ],
          "next_step": "두 모바일 뷰포트에서 세 번째 클리어 직후 마스터리 화면 진입과 첫 노드 투자 반영을 화면으로 확인하고, 마스터리 포인트 반복 공급원을 정합니다.",
          "sources": [
            "src/ServerScriptService/MasteryService.server.luau",
            "src/ServerScriptService/PackBoundStudioQABridge.server.luau"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 95,
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
          "progress": 92,
          "status": "partial",
          "evidence": [
            "단계와 보상 영수증 저장 계약은 있으나 실제 서비스 DataStore 재접속 증거가 없습니다.",
            "[2026-09-02] 튜토리얼 상태 버전을 2로 올리고 v1 저장 문서의 검증·이관을 추가했습니다. v1 순서(대시→박사→전투→장착→룬)로 저장된 프로필은 로드 시 검증을 통과하고, 진행 도메인이 v2 순서(대시→박사→장착→전투→룬)로 옮기며 보상 영수증 키(tutorial_combat→doctor_intro, equip_first_item→tutorial_combat)를 재명명합니다. 전투 대기 중이던 v1 플레이어는 무기가 없으므로 박사 단계로 되돌립니다. 결정적 스펙(tests/TutorialProgressionDomain.spec.luau)으로 고정했습니다.",
            "[2026-09-03] tests/TutorialSaveResume.spec.luau가 튜토리얼 13단계 각각에서 중단·재접속을 실제 저장소 경로(PlayerProfileStore 메모리 백엔드: 저장 → 임대 해제 → 새 JobId 서버 적재 → ReconcileProfile)로 재현합니다. 매 단계에서 재적재 프로필이 저장 직전과 완전히 같고(조정은 무변경), 스냅샷 단계가 유지되고, 직전 사건·보상 청구 재전송이 Replay로 멱등하며, 앞선 사건은 멱등·뒤의 사건은 거부되고, 마지막에 튜토리얼이 완료되며 마스터리 투자가 남는 것, 그리고 중단 없이 진행한 프로필과 튜토리얼 상태가 같음을 검사합니다. 저장된 v1 문서를 v1 7단계 각각에서 중단한 fixture로 재적재해 v2 단계 매핑(전투 대기 중이던 플레이어는 박사에게 되돌아감), 보상 청구 키 개명(tutorial_combat→doctor_intro, equip_first_item→tutorial_combat), 재개 후 다음 사건 적용을 확인합니다. tests/test_tutorial_runtime.py가 spec을 실행합니다. 배포 환경 DataStore 재접속은 여전히 별도 안전 환경이 필요합니다."
          ],
          "next_step": "실서비스 DataStore가 준비되면 같은 단계 목록으로 재접속 훈련을 수행하고, 튜토리얼 단계가 추가되면 spec의 steps 목록에 한 항목을 추가합니다.",
          "sources": [
            "tests/TutorialSaveResume.spec.luau"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 92,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        }
      ],
      "depth": 0,
      "computed_progress": 87,
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
          "progress": 66,
          "status": "partial",
          "evidence": [
            "552개 능력 정의가 있지만 확실한 전투 소비는 rapid_gear_sword의 A1·A2·B1·B2·E1 다섯 노드입니다.",
            "[2026-09-03] 룬 능력의 전투 연결을 아이템별 화이트리스트(연격의 톱니검 5노드)에서 저작된 runtime_hook·stat_id 기반 라우팅 규칙으로 바꿨습니다. rune_board_db.py가 GeneratedRuneBoards에 능력별 Hook·StatId와 아이템별 BoardKind를 내보내고(문자열 인턴으로 모듈 187KB, 200KB 상한 유지), ItemRuneCombatStatResolver.SUPPORTED_STAT_HOOKS가 공격 무기 보드(BoardKind Weapon)에서만 StatModifier:AddPercent:SourceItem(공격 피해·공격 속도·치명타 확률·근거리 사거리)과 SkillModifier:AddPercent:SourceItem(스킬 피해, E1은 1등급 채널·그 외는 전 등급 채널)을 WeaponCombatService가 읽는 공격 슬롯 채널로 연결합니다. 새 채널 RuneSkillDamagePercent를 InventoryV2Service가 발행하고 WeaponCombatService가 1등급 보너스에 더합니다. 보조무기·방어구·장신구 보드가 같은 stat_id를 쓰더라도 소비자가 없으므로 미지원으로 유지해 UI의 '전투 적용 준비 중' 표시가 거짓이 되지 않게 했습니다. tests/test_rune_combat_consumers.py가 DB와 리졸버에서 커버리지를 재계산합니다: 552개 능력 중 53개(공격 피해 20·공격 속도 8·치명타 7·사거리 3·1등급 스킬 피해 14·전 등급 스킬 피해 1)가 공격 무기 14종 전부에 걸쳐 전투에 들어가고, 나머지 499개(Owner 범위 스탯, 패시브, 콤보, 조건부 피해, 투사체, 스킬 지속·효용, 비무기 보드)는 UnsupportedActiveNodeCount로 계속 집계됩니다. Luau spec은 훅 없는 능력·미지원 훅·미지원 스탯·비무기 보드의 fail-closed와 채널별 노드 합산을 검사합니다. Studio 관측은 사용자 방침에 따라 생략했습니다.",
            "[2026-09-03] 2차 슬라이스: Owner 범위 룬 능력을 장착 아이템 전체 보드에서 합산해 기존 Equipment* 채널로 넘겼습니다. ItemRuneCombatStatResolver.ClassifyNode가 노드를 Weapon(공격 슬롯 채널)·Owner(장비 합산 채널)·미지원으로 분류하고, OWNER_STAT_HOOKS가 이동 속도·방어 후 피해 감소→최종 피해 감소·회복량·보호막 위력→보호막 획득·10초 재생·회피 굴림→회피 확률·방어 굴림→방어 확률·가시 피해·대시 거리·대시 무적·사용자 저체력 피해를, NON_WEAPON_SOURCE_ITEM_HOOKS가 비무기 보드(방어구·장신구·보조무기)의 아이템 범위 공격 피해→전역 공격력·공격 속도→전역 공격 속도·치명타·명중·스킬 피해를 PlayerCombatStatus가 이미 읽는 채널로 연결합니다. ResolveOwnerStats가 Board.Placements의 모든 아이템(무효 장착 제외)을 순회해 합산하고 InventoryV2Service가 MergeOwnerStats로 아이템 전투 수치와 더해 Equipment 26채널을 발행하며 RuneOwner* 카운트 속성을 남깁니다. 퍼센트 방어력·최대 체력·상태 저항·전체 저항·적재량은 런타임 의미가 없어 의도적으로 미지원입니다. 커버리지(tests/test_rune_combat_consumers.py 재계산): 552개 중 211개(무기 슬롯 53 + Owner 158)가 전투에 들어가고 53개 아이템에 최소 1개 연결 능력이 있고, armor.retribution_heavy_top 한 종만 아직 소비자 없는 훅만 저작돼 있습니다. Luau spec은 방어구 fixture로 채널별 합산·무효 아이템 제외·미지원 집계·병합을 검사합니다. Studio 관측은 사용자 방침에 따라 생략했습니다.",
            "[2026-09-03] Studio Play(Server DM) 관측: 새 리졸버·서비스가 라이브로 동작했습니다. QA 브리지 SetupInventoryFixture(Supported)가 반환한 실시간 스냅샷은 ActiveNodeCount 1·AttackSpeedPercent 1(시작 셀 능력 A2, G0 값)·UnsupportedActiveNodeCount 0·Owner 테이블 존재였고, 장비 폴더 EquippedWeapons에 RuneOwnerItemCount 1·RuneOwnerActiveNodeCount 0·Equipment* 26채널과 슬롯 값의 RuneSkillDamagePercent 속성이 발행됐습니다. 콘솔 오류 0. 룬을 장착 무기에 실제 배치한 상태의 전투 수치 변화 관측은 하지 않았습니다.",
            "[2026-09-03] 3차 슬라이스: 스킬 수정자 훅을 실행기 파라미터에 연결했습니다. Roblox 의존 없는 Combat/SkillRuntimeScaling이 스킬 Runtime 사본을 만들어 SkillUtility(넉백·당김·기절·둔화 강도·자가 강화 수치)·SkillDuration(BuffSeconds·SlowSeconds·BleedSeconds, 지속형 실행기는 PulseCount 반올림 증가)·SkillArea(Radius)를 배율로 적용하고, WeaponSkillExecutors.Execute가 디스패치 전에 이를 호출합니다. 리졸버는 무기 보드의 E2→3등급 제어 채널, E3→5등급 지속 채널, 그 외 코드는 전 등급 채널(지속·제어·범위)로 라우팅하고, 비무기 보드의 스킬 수정자는 새 장비 합산 채널 EquipmentSkillUtility/Duration/AreaPercent(LoadoutCombatStatResolver 집계 ID·PlayerCombatStatus 발행 목록 추가)로 갑니다. WeaponCombatService.slotCombatModifiers가 등급별 슬롯 채널과 캐릭터의 Equipment 채널을 합쳐 CombatModifiers(SkillUtility/Duration/AreaBonusPercent)로 넘깁니다. 커버리지: 552개 중 253개(무기 슬롯 83 + Owner 170), 53개 아이템. tests/SkillRuntimeScaling.spec.luau가 배율 규칙·비변경 필드·지속형 펄스 반올림·NaN/음수/상한 방어를 검사하고 리졸버 spec에 E2·E3·D2·D3·방어구 스킬 지속 케이스를 추가했습니다. Studio 관측은 사용자 방침에 따라 생략했습니다.",
            "[2026-09-03] 4차 슬라이스: 패시브 수정자 중 런타임 파라미터가 실제로 있는 세 갈래를 연결했습니다. 보조무기 보드의 패시브 위력은 SupportWeaponConfig 효과 위력(공격 속도·스킬 충전·피해 감소·회복 증폭 합산, 주기 보호막·주기 회복 펄스, 루틴 GradeScale)에 배율로 붙고, 내부 쿨다운 감소는 주기 효과 IntervalSeconds와 루틴 휴식 간격(Bounce·HealZone·GravityWell의 restInterval)에 50% 상한으로 붙습니다(서버 전용 타이밍만 건드리고 클라이언트가 함께 계산하는 공유 모션 타이밍은 그대로). 방어구 보드의 패시브 위력은 ResolveOwnerStats.ItemModifiers로 아이템별로 넘어가 LoadoutCombatStatResolver가 그 아이템의 고정(비스케일링) 스탯, 즉 패시브 효과만 1+x% 배율로 합산합니다(Defense·MaxHealth·AttackPower는 제외, ItemGradeStatResolver.IsScalingStat). 패시브 지속시간(방어구 35·보조 6)과 방어구 내부 쿨다운(24)은 아이템별 런타임이 없어 미지원으로 남겼습니다. 커버리지: 552개 중 292개(무기 슬롯 83·Owner 170·Support 18·Item 21), 54개 아이템 전부. 리졸버·로드아웃 spec에 보조 fixture·아이템 배율·음수 무시 케이스를 추가했습니다. Studio 관측은 사용자 방침에 따라 생략했습니다.",
            "[2026-09-03] 5차 슬라이스: 런타임 의미가 정확히 일치하는 무기 수치·조건부 훅을 연결했습니다. 무기 슬롯 채널 8개(명중, 치명타 피해, 넉백, 산포 감소, 발사체 피해, 저체력 대상 피해, 고체력 대상 피해, 기절 지속)를 새로 두고, 비무기 보드의 같은 훅은 장비 합산 채널(CriticalDamage·ProjectileDamage·SpreadReduction·HighHealthTargetDamage 신설, Execute·Accuracy 기존)로 보냅니다. DamageResolver가 명중 굴림에 무기 명중 보너스를, 대상 체력 ≤35%·≥70% 조건에 실행·고체력 보너스를, 치명타 배율에 +x%p(기본 1.5)를 적용하고 PlayerCombatStatus가 장비 고체력 조건과 산포 감소(룬 80% 상한 뒤 기존 90% 상한)를 처리합니다. 발사체 피해는 AttackKind가 Throw·BowShot·CrossbowShot·GunShot인 슬롯에만 붙고, 넉백·기절은 서버 전용 지면 강타(RingSlam·FanSlam)와 스킬 Runtime(KnockbackStuds·StunSeconds)에 배율로 붙습니다. 범위·투사체 속도(공유 모션)와 콤보 스택(상한 미정)은 미지원으로 남겼습니다. 커버리지: 552개 중 348개(무기 슬롯 119·Owner 190·Support 18·Item 21), 54개 아이템. 리졸버·스킬 배율 spec과 계약 테스트를 확장했습니다. Studio 관측은 사용자 방침에 따라 생략했습니다.",
            "[2026-09-03] 6차 슬라이스: 공유 모션에 걸린 훅을 서버·클라이언트 공용 배율로 연결했습니다. WeaponRoutineConfig.ScaleRoutine이 루틴의 고정 사본을 만들어 DurationScale(ZoneSeconds·WellSeconds), AreaScale(Radius·RadiusMin·RadiusMax·Length·Width), ProjectileSpeedScale(Boomerang CycleSeconds·Ricochet LinkSeconds를 나눔, 상한 4배)을 적용하고, WeaponRoutineRunner가 슬롯마다 BaseRoutine과 배율을 보관해 RoutineDurationScale·RoutineAreaScale·RoutineProjectileSpeedScale 속성을 발행하며, EquippedWeaponBillboard가 ReadScales로 같은 사본을 재구성해 두 쪽 기하가 일치합니다. 발사 무기의 투사체 속도는 무기 프로파일(ProjectileSpeed)에 배율을 곱합니다. 리졸버는 무기 보드의 AreaPercent·ProjectileSpeedPercent를 슬롯 채널로, 보조 보드의 PassiveDurationPercent를 SupportDurationPercent로, 방어구·장신구의 같은 스탯을 장비 합산 채널(EquipmentAreaPercent·EquipmentProjectileSpeedPercent)로 보냅니다. 커버리지: 552개 중 369개(무기 슬롯 130·Owner 194·Support 24·Item 21). WeaponRoutineMotion.spec이 배율 사본의 항등성·동결·기하 효과(궤도 1.5배, 생명 원 2배, 부메랑 주기 절반)·상한·속성 읽기 기본값을 검사합니다. Studio 관측은 사용자 방침에 따라 생략했습니다.",
            "[2026-09-03] Play 관측이 5차 슬라이스의 회귀를 잡았습니다: 산포 감소 룬 보너스를 _emitRoutineEvent 안에 넣었는데 그 함수에는 slot 변수가 없어 루틴 이벤트마다 'attempt to index nil with RuneSpreadReductionPercent' 오류가 났습니다. 슬롯 인덱스로 공격 슬롯 상태를 찾아 nil-안전하게 고치고(보조 루틴은 0), tests/test_rune_combat_consumers.py에 _emitRoutineEvent 안의 bare slot 접근을 금지하는 회귀 테스트를 추가했으며, 수정 적용 뒤 Play 재확인에서 오류 0을 봤습니다."
          ],
          "next_step": "WeaponCombatService를 건드린 슬라이스는 Play 연기 1회(런 시작·웨이브 1회·콘솔 확인)를 완료 조건에 포함합니다.",
          "sources": [
            "src/ReplicatedStorage/InventoryV2/ItemRuneCombatStatResolver.luau",
            "tools/rune_board_db.py",
            "tests/test_rune_combat_consumers.py",
            "tests/ItemRuneCombatStatResolver.spec.luau",
            "src/ReplicatedStorage/Combat/SkillRuntimeScaling.luau",
            "tests/SkillRuntimeScaling.spec.luau"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 66,
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
            "26개 아이콘과 장착 조합 판정은 있지만 모든 시너지의 실제 전투 체감 검증은 부족합니다.",
            "[2026-09-03] 판정 로직은 tests/BackpackUI.spec.luau가 이미 임계값 해금·무효 아이템 배제·중복 가방·수정자 블록을 검사하고 있어 새 spec을 추가하지 않았습니다. 시너지 판정과 전투 효과 소비는 레거시 백팩 경로(InventoryService)에만 있고 InventoryV2 서비스에는 시너지 소비가 없으므로, 남은 '실제 전투 체감 검증'은 V2 경로에 시너지 효과를 연결할지 결정한 뒤에 의미가 있습니다."
          ],
          "next_step": "InventoryV2 경로에 시너지 효과를 연결할지 제품 오너와 결정하고, 연결한다면 대표 빌드의 시너지별 전투 효과·중첩을 spec으로 고정합니다.",
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
          "progress": 85,
          "status": "partial",
          "metric": {
            "current": 6,
            "target": 6,
            "unit": "종"
          },
          "evidence": [
            "보호막·회복·공속·스킬 충전·피해 감소·회복 강화 효과가 런타임과 테스트에 있습니다.",
            "[2026-09-02] 보조 무기 6종에 고유 루틴을 부여했습니다. 보루 톱니방패는 4초마다 가까운 적을 튕겨 다니며 최대 3회 타격(접촉 10 피해)하고, 생명회로 십자가는 10초마다 근처에 떨어져 지름 6스터드 생명 원을 6초 유지하며 원 안에서만 초당 1.5% 회복합니다(주기 회복 대체). 지휘메이스·전투뿔·랜턴·깃발은 진자·순회·전방 부유·후방 고정 표현 루틴입니다. 한·영 아이템 문구를 갱신했습니다.",
            "[2026-09-02] Studio 서버 관측: 보루 톱니방패 튕김 2회 실행에 4명중(접촉 11.8 피해=10×보조 공명 1.2×방어), 생명회로 십자가는 생명 원 안에서 0.5초마다 0.75 회복을 7회 적용(체력 40→49.3), 지휘메이스·전투뿔·랜턴·깃발은 Metronome/Circuit/HoverGuard/Planted 상태를 복제했고 랜턴은 가장 가까운 적 방향을 조준했습니다.",
            "[2026-09-02] 제품 오너 지시로 수호등 랜턴 컨셉을 변경했습니다. 6초마다 14스터드 안에서 가장 밀집한 몬스터 집단의 중심으로 떨어져 3초 동안 반경 6(+몸통 보정 1)의 몬스터를 초당 6스터드씩 랜턴 중심 1.2까지 끌어당기고(제어 저항 비례 감소), 피해 감소 12% 패시브는 유지합니다. 한·영 문구 3건 갱신. Studio 서버 관측: 두 마리 사이 중심에 낙하, 거리 2.06→1.20으로 끌어당김, Well 이벤트 1회, 콘솔 오류 0."
          ],
          "next_step": "모바일 두 해상도에서 랜턴 낙하·끌어당김 연출과 튕김·생명 원을 화면으로 관측하고, 4공격+2보조 조합의 밸런스를 다시 비교합니다.",
          "sources": [
            "src/ReplicatedStorage/Combat/SupportWeaponConfig.luau",
            "src/ReplicatedStorage/Combat/WeaponRoutineConfig.luau",
            "docs/gameplay/weapon-attack-routines.md"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 85,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
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
      "computed_progress": 82,
      "computed_status": "partial",
      "leaf_count": 15,
      "proven_count": 8,
      "status_counts": {
        "proven": 8,
        "partial": 7,
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
            "대시 거리·쿨다운·무적과 요청 제한을 서버가 검증합니다.",
            "[2026-09-02] 대시 이동을 서버 네트워크 소유권 전환·속도 주입에서 클라이언트 Humanoid 구동(WalkSpeed=거리/시간, Stepped마다 Move)으로 바꿔 순간이동처럼 보이던 끊김을 없앴습니다. 승인·쿨다운·무적 창·대시 창(PackBoundDashActiveUntil, GetActiveDash)은 서버가 계속 소유하며, 서버는 승인 응답에 속도를 함께 보냅니다.",
            "[2026-09-02] Studio Play 클라이언트 관측: 대시 1회에 Heartbeat 28~29프레임 연속 이동, 프레임당 최대 1.27~1.39스터드(약 78스터드/초 피크), 총 21스터드, 승인 일련번호 1. 서버 대시 창 속성과 무적 속성이 같은 승인에서 기록됐습니다."
          ],
          "next_step": "실기기 지연 환경에서 승인 거부 시 되감김 체감과 대시 거리 상한 검증(서버 사후 변위 확인) 필요성을 평가합니다.",
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
          "progress": 95,
          "status": "partial",
          "evidence": [
            "탐사 참가자와 범위 안의 유효 몬스터만 서버 권한 공격 대상으로 선택합니다.",
            "[2026-09-02] 표적 정책은 이제 루틴 주기의 방향을 정하고, 실제 명중은 루틴 기하(휩쓴 선분·직선·부채꼴·원·연쇄)로 판정합니다. 휩쓴 선분과 부채꼴 조회를 WeaponSkillTargeting에 추가했습니다.",
            "[2026-09-02] Studio 서버 관측: 휩쓴 선분 접촉(회전·왕복), 직선·부채꼴·원 판정, 연쇄·산탄 조회가 실제 몬스터에 명중을 냈습니다. 소환 직후 RunId 없는 몬스터를 비런 플레이어가 공격하는 기존 정책도 유지됩니다.",
            "[2026-09-03] 휩쓴 선분 접촉 기하를 Roblox 의존이 없는 Combat/SweptContact 모듈로 분리하고(WeaponSkillTargeting.GetSweptTargets가 사용, 동작 동일) tests/SweptContact.spec.luau로 터널링 방지 계약을 증명했습니다: 24스터드 한 프레임 이동이 경로 옆 0.3스터드의 반경 0.4 몬스터를 명중하고 양 끝 점 표본만으로는 놓치는 경우, 접촉 반경 경계, 끝점 클램프, 퇴화 선분, 0 크기 루트 기본 반경, 탐색 범위 포함성을 검사합니다. tests/test_weapon_targeting.py가 러너가 연속 표본을 넘기는지와 spec 통과를 함께 확인합니다. Studio 관측은 사용자 방침(MCP 플레이 관측 최소화)에 따라 생략했습니다.",
            "[2026-09-03] Studio Play(Server DM) 관측: 저장소와 체크섬 일치 상태(244개 파일 동일, SweptContact·PlayerProfileMigrations 신규 생성, ItemDB 굽기 7672999fb273d6fd)로 맞춘 뒤, QA 브리지(ServerStorage.PackBoundStudioQABridge)로 스테이지 1 장비(연격의 톱니검 3등급)를 적용하고 MonsterService.Spawn으로 소환한 전구 날파리(루트 1.6×1.5×1.6, 반경 0.8)를 회전 궤도 반경 6스터드 위에 두자 5초 안에 WeaponHitVFX 속성 HitCount 1·DefinitionHitCount_weapon_rapid_gear_sword 1·LastDamage 24로 명중해 처치(체력 24→0)됐습니다. 궤도 안쪽 3스터드에 둔 첫 시도는 접촉 반경 0.5+0.8 밖이라 명중하지 않았고 이는 기하학적으로 올바른 결과입니다. 콘솔 오류 0. 뷰포트 화면 관측은 하지 않았습니다."
          ],
          "next_step": "다중 플레이어 소유권 분리는 RunTargetPolicy.spec·WeaponTargeting·DamageResolver 이중 검사로 유지하고, 모바일 두 해상도 화면 관측은 실기기 검증 단계로 미룹니다.",
          "sources": [
            "src/ReplicatedStorage/Combat/SweptContact.luau",
            "tests/SweptContact.spec.luau",
            "tests/test_weapon_targeting.py"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 95,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "weapon-basic-attacks",
          "title": "공격 무기 14종 고유 공격 루틴",
          "progress": 80,
          "status": "partial",
          "metric": {
            "current": 14,
            "target": 14,
            "unit": "종"
          },
          "evidence": [
            "14개 공격 무기가 등급별 프로필과 공격 실행기에 연결됩니다.",
            "[2026-09-02] 머리 위 고리에서 가장 가까운 적을 때리던 공통 기본 공격을 폐기하고, 회전·숨 쉬는 회전·직선 찌르기·부메랑·좌우 미끄러짐·무한대 궤도·거치 관통·부채꼴 산탄·5초 연사/3초 과열 포탑·도탄·부채꼴 내리치기·원형 내리치기·직선 내리치기·2연속 내리치기의 14개 고유 루틴을 정의했습니다. 서버가 같은 결정적 운동 모듈로 접촉·직선·부채꼴·원 판정을 내리고, 클라이언트는 복제된 주기 상태로 같은 경로를 그립니다(WeaponRoutineConfig/Motion/Runner).",
            "[2026-09-02] 정적 검증: luau tests/WeaponRoutineMotion.spec.luau, python3 -m unittest tests.test_weapon_routines 통과.",
            "[2026-09-02] Studio(팩 바운드, Edit→Play) 서버 관측: 8개 스크립트를 저장소와 동일 체크섬으로 적용한 뒤 TutorialField에서 몬스터를 소환해 20종 루틴 전부가 RoutineKind/Active를 복제하고 명중을 냈습니다. 단독 측정 6초: 흡혈 도끼 직선 7주기 7명중, 광전사 도끼 5주기 9명중, 지진 메이스 5주기 4명중, 수호자 메이스 2주기 3명중(0.25초 기절·2스터드 밀침 포함). 복합 장착 8초: 톱니검 회전 12~16명중, 장창 6~7, 질풍 곡궁 12, 추적자 곡궁 6, 공성 석궁 볼트 2, 산탄 석궁 17, 과열 연발총 11, 도탄 권총 9, 투창 왕복 9, 수호검 2. 콘솔 오류 0. 화면 캡처는 Play 중 타임아웃(뷰포트 1×1)으로 얻지 못해 모바일 두 해상도 표현 관측은 미완입니다.",
            "[2026-09-02] 관측 중 발견해 고친 것: 내리치기·찌르기는 자기 사거리 안에 적이 있을 때만 주기를 시작하고, 충격 순간 선택한 적의 현재 위치로 재조준하며, 몬스터 몸통 반경(1스터드) 만큼 판정 폭을 보정합니다.",
            "[2026-09-02] 루틴 수치를 하드코딩에서 무기 루틴 DB(JSON 원본 → 생성 Luau)로 옮겼습니다. 생성 결과는 기존 19종 수치와 완전히 같고(Luau 비교), 랜턴은 새 중력 우물 수치를 씁니다."
          ],
          "next_step": "두 모바일 뷰포트에서 무기 빌보드 궤적과 바닥 형상 연출을 화면으로 관측하고, 루틴별 DPS를 이전 자동 타격 기준과 비교해 수치를 조정합니다.",
          "sources": [
            "docs/gameplay/weapon-attack-routines.md",
            "src/ReplicatedStorage/Combat/WeaponRoutineConfig.luau",
            "src/ServerScriptService/WeaponRoutineRunner.luau"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 80,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
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
          "progress": 92,
          "status": "partial",
          "evidence": [
            "[2026-09-02] 활성 17종의 접촉·분출·돌진·투사체·도약·부화·보스 공격이 서버 런타임에 연결됐고 스테이지 1 자동 완주에서 전체 소환·사망 생명주기를 통과했습니다.",
            "[2026-09-03] tests/test_monster_attack_cancel.py가 활성 공격 패턴 5종(접촉·분출·돌진·부채탄·도약)의 취소 계약을 소스에 고정했습니다: 모든 패턴은 새 공격 순번(beginSerial)으로 시작해 이전 공격 인스턴스를 정리하고, 단계 진행·완료·Update는 생존·체력·현재 공격·순번 일치를 함께 확인하며, 돌진·도약 취소 사유(BlockedAtStart·ArcBlocked·InvalidLanding)를 속성으로 발행하고, 예고·분출·충격 인스턴스는 런 소유 태그로 만들어 Cancel이 정리합니다. 패턴별 가독성 관측과 개별 자동 시나리오는 Studio Play가 필요해 남겨 두었습니다."
          ],
          "next_step": "일반 1~4웨이브의 각 공격 패턴 가독성과 취소를 개별 자동 시나리오(Gate B)로 확장합니다.",
          "sources": [
            "tests/test_monster_attack_cancel.py"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 92,
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
            "기본 공격과 공용 스킬 VFX는 있으나 42개 스킬별 고유 연출은 부족합니다.",
            "[2026-09-02] 무기 아이콘이 루틴 경로를 따라 월드에서 움직이고, 직선·부채꼴·원·생명 원은 바닥의 월드 형상으로, 화살·볼트·산탄·도탄은 투사체로, 확정 명중은 기존 충격 연출로 표시합니다. 모바일 두 해상도 관측은 아직 없습니다.",
            "[2026-09-02] Studio 서버 관측: Contact/Line/Fan/Ring/Cone/Shot/Bolt/Chain/Bounce/Zone 이벤트가 UnreliableRemoteEvent로 전송되고 확정 명중은 RemoteEvent로 전달됐습니다. 클라이언트 화면 관측은 Play 중 캡처 타임아웃으로 미완입니다."
          ],
          "next_step": "두 모바일 뷰포트에서 루틴 형상과 명중 연출의 가독성·콘솔을 확인하고 무기별 색·타이밍을 다듬습니다.",
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
      "computed_progress": 92,
      "computed_status": "partial",
      "leaf_count": 11,
      "proven_count": 5,
      "status_counts": {
        "proven": 5,
        "partial": 6,
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
          "progress": 60,
          "status": "partial",
          "evidence": [
            "현재 UI는 대비와 상태 라벨을 사용하지만 공식 접근성 검사와 크기·색약 옵션은 없습니다.",
            "[2026-09-03] tools/ui_contrast_audit.py가 InventoryV2 색 토큰에서 WCAG 2.x 대비 비율을 계산해 docs/art/ui-contrast-audit.md를 생성하고 check로 최신성·기준 미달을 검사합니다. 본문 Text는 8개 표면(배경·패널 3종·보드 셀 2종·룬 스톤 2종)에서 11.8~17.3, 보조 MutedText는 6.0~8.8로 모두 AA 기준(4.5·3.0)을 통과했고, 강조색 6종도 큰 글자 기준 3.0에 미달하는 표면 조합이 없습니다. 토큰 밖 원시 Color3 리터럴 60여 개(튜토리얼·마스터리·상점·스테이지 화면)는 짝을 알 수 없어 판정 없이 이관 대상 목록으로 남겼습니다. tests/test_ui_contrast.py가 공식 기준값·전체 쌍·보고서 최신성을 검사합니다. 색만으로 상태를 전달하지 않는지, 텍스트 크기·효과·오디오 옵션은 제품 결정이 필요해 다루지 않았습니다."
          ],
          "next_step": "원시 색 리터럴을 토큰으로 이관하고, 상태 표시가 아이콘·라벨을 함께 쓰는지 화면별로 점검한 뒤 텍스트 크기·색약 옵션 범위를 제품 오너와 정합니다.",
          "sources": [
            "tools/ui_contrast_audit.py",
            "docs/art/ui-contrast-audit.md",
            "tests/test_ui_contrast.py"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 60,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "localization",
          "title": "현지화와 문자열 관리",
          "progress": 88,
          "status": "partial",
          "evidence": [
            "[2026-09-02] 한국어 원문과 언어 중립 동적 템플릿 총 1,970개를 추출·정리하고 번역기 일괄 변환 대신 수동 영문 번역을 유지했습니다.",
            "[2026-09-01] 한국어 이용자에게 한국어, 그 밖의 이용자에게 영어 원문을 제공하며 지원되는 다른 언어는 Roblox 자동 번역의 영어 원문을 사용하도록 런타임 선택기와 Roblox CSV를 만들었습니다.",
            "[2026-09-02] 카탈로그 검사, Python 테스트, Luau 해석기·컴파일 검사를 통과했고 iPhone 17 Pro 401×776과 iPhone 7 374×666의 클리어·보상·사망·재도전 화면에서 한국어·영어 미해결 문자열 0과 텍스트 맞춤을 자동 확인했습니다. Roblox LocalizationTable 운영 반영은 남았습니다.",
            "[2026-09-03] tools/localization_db.py에 bake 명령을 추가해 CSV와 같은 원본에서 Studio Command Bar용 굽기 스크립트를 생성하고, LocalizationService.PackBoundGameText LocalizationTable(SourceLocaleId en-us, ko-kr·en-us 값)과 ReplicatedStorage.Localization.GeneratedGameText 모듈을 한 번에 갱신하도록 했습니다. Roblox 표 규칙에 따라 {tostring(x)}처럼 식별자가 아닌 매개변수를 가진 런타임 전용 템플릿 237건은 표·CSV에서 제외하고(모듈의 TEMPLATES가 계속 처리), 200KB Source 상한을 넘는 모듈은 ScriptEditorService:UpdateSourceAsync로 씁니다. 라이브 Studio(Edit)에 적용해 표 항목 1746개, 표·모듈 GameTextRevision 4de7d436ea944f7b 일치, 모듈 239,536바이트, HttpEnabled 원복을 확인했습니다. tests/GameTextResolver.spec.luau는 전체 1983항목을 ko-kr·en-gb와 자동 번역 로케일 11종(ja·fr·de·zh-cn·zh-tw·pt·es·id·th·vi·ru)으로 해석해 한국어 통과, 영어 수동, 자동 로케일의 영어 원문+자동 허용, 영어 문자열의 한글 누출 0을 검사합니다. 6번 작업의 영어 개발자 오류 문자열 12건을 refresh로 카탈로그에 등록했습니다(1971→1983)."
          ],
          "next_step": "현재 현지화 변경을 승인 커밋에 포함하고, 클라우드 LocalizationTable 업로드가 필요하면 같은 CSV를 사용합니다. 두 모바일 화면의 비한국어 로케일 표시 관측은 실기기 검증 단계로 미룹니다.",
          "sources": [
            "docs/localization/game-text.json",
            "docs/localization/english-translations.json",
            "docs/localization/roblox-localization.csv",
            "src/ReplicatedStorage/Localization/GameTextResolver.luau",
            "src/StarterPlayer/StarterPlayerScripts/GameLocalizationBootstrap.client.luau",
            "tools/localization_db.py",
            "tests/test_localization_db.py",
            "tests/GameTextResolver.spec.luau"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 88,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        }
      ],
      "depth": 0,
      "computed_progress": 88,
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
          "progress": 70,
          "status": "partial",
          "evidence": [
            "스키마 조정과 실패 폐쇄형 검사는 있지만 운영 백업·롤백 훈련이 없습니다.",
            "[2026-09-03] 프로필 스키마 이관 레지스트리 Economy/PlayerProfileMigrations(앞으로만 진행, 복사본에만 적용, 단계 예외 시 전체 중단, 미래 버전 fail-closed)를 추가하고 PlayerProfileStore.Load가 봉투 검증 전에 분류하도록 연결했습니다. Migratable 문서는 이관 뒤 원본 프로필을 봉투의 MigrationBackup 한 칸에 보존하고 Revision을 올려 저장하며, Future 문서는 읽거나 덮어쓰지 않고 FutureVersion으로 거부합니다. GetMigrationBackup·RestoreMigrationBackup 메서드로 수정된 단계를 백업에서 재적용하는 복구 경로를 만들었고, InventoryStorageAdapter가 운영 레지스트리를 전달합니다. tests/PlayerProfileMigrations.spec.luau가 사슬 이관·비변경·실패 폐쇄·저장소 적재 이관·백업·복구·왕복 불변·미래 문서 무변경·단계 실패 무변경·레지스트리 없는 과거 동작을 검사하고, 기존 PlayerProfileStore.spec은 그대로 통과합니다. 운영 절차는 docs/operations/player-profile-migration-and-recovery.md에 버전 지도, 적재 결과 상태표, DataStore 버전 이력(ListVersionsAsync/GetVersionAsync) 복구 절차, 새 버전 추가 체크리스트로 남겼습니다."
          ],
          "next_step": "실서비스 DataStore에서 재접속·서버 종료·세션 충돌 복구 훈련은 별도 안전 환경이 확보될 때 수행하고, 다음 스키마 버전 인상 시 체크리스트대로 fixture와 단계를 함께 추가합니다.",
          "sources": [
            "src/ServerScriptService/Economy/PlayerProfileMigrations.luau",
            "src/ServerScriptService/Economy/PlayerProfileStore.luau",
            "tests/PlayerProfileMigrations.spec.luau",
            "tests/test_profile_migrations.py",
            "docs/operations/player-profile-migration-and-recovery.md"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 70,
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
            "주요 콘텐츠 DB가 원본·생성물 최신성 검사를 통과합니다.",
            "[2026-09-02] 무기 루틴 DB를 추가했습니다. docs/gameplay/weapon-routine-definitions.json 이 20종 루틴의 162개 조정 수치(간격·거리·범위·시간·힘·단계 비중·투사체 모양 등)의 단일 원본이고, tools/weapon_routine_db.py build/check 가 GeneratedWeaponRoutines.luau 와 wiki/site/weapon-routine-db-data.js 를 생성·검사합니다. 위키 '무기 루틴 DB' 페이지에서 무기별로 수치를 바꿔 저장하면 허용 범위·단계 합·시간 합을 검증한 뒤 원본과 런타임 모듈이 함께 갱신됩니다(로컬 서버 전용)."
          ],
          "next_step": "신규 DB도 같은 원본·생성·검사 계약을 따르고, 루틴 DB 저장 후 Studio 적용 경로(생성 모듈 한 번 적용)를 문서대로 유지합니다.",
          "sources": [
            "tools/weapon_routine_db.py",
            "docs/gameplay/weapon-routine-definitions.json"
          ],
          "weight": 1,
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
          "progress": 35,
          "status": "partial",
          "evidence": [
            "최종 Studio Gate는 단일 플레이어·메모리 백엔드이며 지연·재접속 보고서가 없습니다.",
            "[2026-09-03] docs/operations/multiplayer-reconnect-scenarios.md에 현재 구조의 전제(서버당 필드·런 하나, 참가자 한 명, 플레이어별 프로필 임대 120초·하트비트 30초)와 시나리오 M1~M13을 정의했습니다: 두 플레이어 프로필 격리(M1), 필드 점유 시 ServerFieldBusy(M2), 런 ID 격리(M3), 참가자 이탈 시 런 실패·정산 후 잊기(M4), 임대 생존 중 재접속 Locked(M5), 정상 종료 뒤 즉시 인수(M6), 비정상 종료 뒤 만료 인수와 이전 서버 SessionLost(M7), 같은 서버 재접속 AlreadyLoaded·임대 갱신(M8), 다른 사람 문서 불변(M9), 지연 중 조작 계약(대시 승인 0.75초·순번·버킷, 패리 버킷)(M10), 예측 이동 정책(M11), 실서비스 DataStore(M12 보류), 협동 참가(M13 보류). tests/MultiplayerReconnect.spec.luau가 실제 PlayerProfileStore(메모리 백엔드)·RunTargetPolicy·StageRunLifecycleDomain으로 M1·M3·M4(도메인)·M5~M9를 통제된 시계로 증명하고, tests/test_stage_run_service.py가 문서의 시나리오 표와 spec의 일치를 검사합니다. 실제 지연·패킷 손실 측정과 실서비스 DataStore는 별도 환경이 필요해 보류로 남겼습니다."
          ],
          "next_step": "협동 참가(M13) 포함 여부를 제품 오너와 결정하고, 실서비스 DataStore 안전 환경이 생기면 M12를 같은 시나리오 ID로 수행합니다. 실기기 네트워크 조건 도구가 준비되면 M10·M11의 측정 결과를 문서에 추가합니다.",
          "sources": [
            "docs/operations/multiplayer-reconnect-scenarios.md",
            "tests/MultiplayerReconnect.spec.luau"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 35,
          "computed_status": "partial",
          "leaf_count": 1,
          "proven_count": 0
        },
        {
          "id": "exploit-penetration-review",
          "title": "공격적 exploit·침투 검증",
          "progress": 60,
          "status": "partial",
          "evidence": [
            "방어 계약은 강하지만 전용 위협 모델·퍼징·악성 클라이언트 실행 보고서가 없습니다.",
            "[2026-09-03] 서버 Remote 핸들러 18개(인벤토리 6·베이스캠프 3·튜토리얼 2·마스터리 2·몬스터 2·무기 1·대시 1·패리 1)를 docs/security/remote-threat-model.md에 위협 범주 T1~T7(형식 위조·수치 오염·권한 상승·재사용·연타·개발 전용 노출·상태 오염)과 함수별 방어 계층·코드 가드·남은 위험·테스트 참조로 정리했습니다. tests/test_remote_threat_model.py가 저장소의 OnServerEvent/OnServerInvoke 집합과 문서 표를 양방향으로 대조하고(행을 지우면 실패함을 변이 검사로 확인), 표에 적힌 가드 스니펫이 소스에 실재하는지, 개발 전용 4개가 RunService:IsStudio()로 막히는지, 참조 테스트 파일이 존재하는지 검사합니다. tests/RemotePayloadHardening.spec.luau는 경제 프로토콜 검증기·런 대상 정책·프로필 Validate·저장소 Save 경계에 악성 페이로드 74건(타입 위조, 여분 키, NaN·무한대·음수·소수·안전 정수 초과, 제어 문자·경로 구분자·비ASCII 식별자, 클라이언트 가격·수량·아이템, 미래 스키마 버전)을 보내 전부 거부되고 백엔드가 변하지 않음을 증명합니다. 살아 있는 악성 클라이언트로 실제 Remote를 호출하는 퍼징은 사용자 방침(MCP 플레이 최소화)에 따라 수행하지 않았습니다.",
            "[2026-09-03] 마지막으로 빈도 제한이 없던 읽기 Remote 두 곳을 막았습니다. BaseCampService.requestStageBriefing은 인수 0개 검사와 플레이어별 토큰 버킷(초당 2회 재충전·버스트 3회, RateLimited 응답, 퇴장 시 정리)을 상태 검사 앞에 두고, TutorialService.getStateRemote는 0.1초 쿨다운을 둡니다. 위협 모델 표의 두 행을 갱신해 '빈도 제한 없음' 위험을 제거했고, tests/test_remote_threat_model.py가 버킷이 상태 검사보다 먼저 실행되는지와 표에 빈도 제한 없음이 남지 않았는지 검사합니다. 새 한국어 안내 문구는 영어 쌍과 함께 카탈로그에 등록했습니다(1985항목)."
          ],
          "next_step": "새 Remote 추가 시 위협 모델 표에 행과 빈도 제한을 함께 적습니다. 실제 두 클라이언트 세션 퍼징은 별도 세션 계획으로 남깁니다.",
          "sources": [
            "docs/security/remote-threat-model.md",
            "tests/test_remote_threat_model.py",
            "tests/RemotePayloadHardening.spec.luau"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 60,
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
      "computed_progress": 73,
      "computed_status": "partial",
      "leaf_count": 9,
      "proven_count": 4,
      "status_counts": {
        "proven": 4,
        "partial": 4,
        "planned_only": 0,
        "unknown": 1,
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
          "progress": 92,
          "status": "partial",
          "evidence": [
            "[2026-09-01] 구현·콘텐츠·아트·UI·검증·도구·운영 작업마다 가장 작은 관련 말단 항목을 갱신하고, 수치가 그대로여도 날짜·작업 근거·다음 완료 관문을 남기도록 프로젝트 완료 규칙을 추가했습니다.",
            "[2026-09-01] 기존 항목으로 설명할 수 없는 작업은 새 말단 항목으로 추가하고, 진행도 원본과 공개 데이터를 함께 생성·검사하도록 규정했습니다. 이번 현지화 작업과 이 운영 규칙 자체를 실제 진행도 항목으로 반영해 생성·검사를 통과했습니다.",
            "[2026-09-02] Claude 세션이 Codex 작업을 이어받을 때 읽는 저장소 안내서 CLAUDE.md를 추가했습니다. AGENTS.md를 대체하지 않는 지도 문서로, 진실의 기준 순서, 저장소 지도, 원본→빌드→생성물 파이프라인 표, Gate A/B와 완료 체크리스트, 현재 알파 상태(63%)를 담고, 커밋 시점에 알파 진행도와 함께 '현재 상태' 절을 갱신하도록 규정했습니다. 11개 DB·위키 최신성 검사와 저장소 정책 테스트 통과를 확인했습니다.",
            "[2026-09-03] tests/test_repository_policy.py에 CLAUDE.md '현재 상태' 절의 완성도·파트 수·말단 작업 수가 alpha_progress.build_catalog 결과와 일치하는지 검사하는 정책 테스트를 추가했습니다. 수치를 일부러 어긋나게 바꾸면 실패하고, 현재 상태(63%·12·201)에서는 통과합니다. 이후 커밋 전 대조는 사람이 아니라 테스트가 수행합니다."
          ],
          "next_step": "커밋 시점마다 python3 -m unittest tests.test_repository_policy를 통과시키고, 진행도 수치가 바뀌면 CLAUDE.md 완성도 한 줄을 같은 작업에서 맞춥니다.",
          "sources": [
            "AGENTS.md",
            "CLAUDE.md",
            "docs/planning/alpha-development-progress.json",
            "tools/alpha_progress.py",
            "tests/test_repository_policy.py"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 92,
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
          "progress": 40,
          "status": "partial",
          "evidence": [
            "반복 10회 이상 스테이지와 장시간 세션의 메모리 추적 근거가 없습니다.",
            "[2026-09-03] Studio Play(Server DM) 한 세션에서 스테이지 1 런 5회(클리어 3·1웨이브 사망 2)를 QA 브리지 자동 진행과 허용된 사망 경로(Humanoid.Health=0)로 반복하며 매 회 복귀 직후 표본을 남겼습니다. workspace 후손 수는 기준 4766에서 5회 내내 4766으로 복귀했고, PackBoundMonster 태그 0·예고 0·런 소속 잔여 몬스터 0을 매 회 확인했습니다. 서버 총 메모리는 기준 4074MB → 4127.7(첫 클리어) → 4130.9 → 4279.0(첫 사망·부활) → 4243.5 → 4243.0MB로, 첫 런과 첫 부활의 예열 뒤 안정됐습니다. 콘솔 오류는 5차 슬라이스 회귀 1건을 제외하면 0이며, 수정 뒤 재확인 런에서도 0입니다. 10회 이상·UI 반복 열기·장시간 세션은 다음 관측 대상입니다.",
            "[2026-09-03] 서버 브리지 BeginStageOneAutomatedClear/ObserveStageOneAutomatedClear로 스테이지 1 완주 1회가 호출 2~4회·약 71초로 줄었습니다(기존 15회 호출·약 260초). 10회 이상 반복 소크는 아직 수행하지 않았습니다."
          ],
          "next_step": "BeginStageOneAutomatedClear를 10회 이상 반복하며 Workspace 후손 수·메모리·잔여 몬스터를 매 회 기록하고, 인벤토리·룬 보드 UI 반복 열기를 클라이언트 브리지 액션으로 추가합니다.",
          "sources": [
            "src/ServerScriptService/PackBoundStudioQABridge.server.luau"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 40,
          "computed_status": "partial",
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
          "progress": 45,
          "status": "partial",
          "evidence": [
            "개발 하네스는 있지만 게임 알파 버전 번호·승인자·필수 게이트를 묶은 체크리스트가 없습니다.",
            "[2026-09-03] docs/operations/alpha-release-checklist.md 초안을 작성했습니다: 버전 기준(형식 제안·기준 커밋·데이터 리비전 지문·플레이스 저장 책임), 후보 생성 전 필수 게이트 6개(정적 검사, 최신성 루프, Gate A, Gate B 두 뷰포트, 위협 모델 일치, 커밋 시점 의무), 승인 근거, 배포 4단계(백업·스키마 이관 체크리스트·게시·직후 확인), 철회 조건 4종과 절차, 이력 표. 승인자·버전 형식·배포 창·성능 미달 시 대응은 '결정 필요'로 표시했습니다."
          ],
          "next_step": "제품 오너가 승인자·버전 형식·배포 창·성능 미달 대응을 결정하면 초안을 확정하고, 첫 릴리스 후보에서 이력 표를 채웁니다.",
          "sources": [
            "docs/operations/alpha-release-checklist.md"
          ],
          "weight": 1,
          "depth": 1,
          "computed_progress": 45,
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
      "computed_progress": 52,
      "computed_status": "partial",
      "leaf_count": 12,
      "proven_count": 2,
      "status_counts": {
        "proven": 2,
        "partial": 7,
        "planned_only": 1,
        "unknown": 2,
        "blocked": 0
      }
    }
  ],
  "revision": "890c3175369be803",
  "overall_progress": 65,
  "category_count": 12,
  "leaf_count": 201,
  "proven_count": 57,
  "status_counts": {
    "proven": 57,
    "partial": 64,
    "planned_only": 76,
    "unknown": 4,
    "blocked": 0
  },
  "track_progress": {
    "content": {
      "progress": 42,
      "category_count": 4
    },
    "quality": {
      "progress": 75,
      "category_count": 3
    },
    "system": {
      "progress": 80,
      "category_count": 5
    }
  },
  "source": "docs/planning/alpha-development-progress.json"
};
