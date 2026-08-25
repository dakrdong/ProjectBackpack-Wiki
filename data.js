window.PACKBOUND_WIKI = {
  "generated_at": "2026-08-25",
  "page_count": 12,
  "revision_count": 75,
  "pages": [
    {
      "id": "studio-automation-routing",
      "title": "Roblox Studio MCP 우선 조작 규칙",
      "summary": "모든 Roblox Studio 조작은 Studio MCP를 우선 사용하고, 지원되지 않거나 실제 실패한 단일 단계만 Computer Use로 제한합니다.",
      "status": "active",
      "category": "architecture",
      "tags": [
        "roblox-studio",
        "mcp",
        "automation",
        "validation"
      ],
      "created_at": "2026-08-06",
      "updated_at": "2026-08-06",
      "authors": [
        "Codex"
      ],
      "version": 1,
      "change_type": "created",
      "change_summary": "Roblox Studio 조작의 MCP 우선순위와 Computer Use 예외 조건을 저장소 강제 규칙으로 추가함",
      "supersedes": null,
      "sources": [
        "AGENTS.md"
      ],
      "related": [
        "character-2d-rendering",
        "development-wiki"
      ],
      "validation": [
        "AGENTS.md의 Roblox Studio MCP-first routing is mandatory 절을 검토",
        "설정된 Roblox_Studio MCP 서버와 StudioMCP 실행 파일을 확인"
      ],
      "source_path": "wiki/content/pages/studio-automation-routing/v001.md",
      "body": "# Roblox Studio MCP 우선 조작 규칙\n\n## 결과\n\nRoblox Studio의 라이브 상태를 읽거나 바꾸는 모든 작업은 구성된\n`Roblox_Studio` MCP를 첫 번째이자 권위 있는 조작 경로로 사용합니다.\nComputer Use는 편의상 선택할 수 있는 대체 경로가 아니며, 필요한 기능이\nMCP에 없거나 실제 MCP 호출이 구체적으로 실패한 경우에만 사용합니다.\n\n## 적용 범위\n\n다음 작업은 모두 Studio MCP를 먼저 사용합니다.\n\n- 실행 중인 Studio 탐색과 대상 플레이스 선택\n- DataModel, 인스턴스, 속성 및 스크립트 검사와 변경\n- Luau 실행, 플레이 시작·정지, 콘솔 확인\n- 스크린 캡처와 런타임 시각 검증\n- 에셋 삽입 및 이미지 업로드\n\nRojo와 저장소 도구는 소스 작성, 빌드, 정적 검증에 계속 사용합니다. 하지만\n이 결과만으로 라이브 Studio 상태가 적용되었다고 주장하지 않습니다. 라이브\n상태에 관한 완료 판정에는 가능한 경우 Studio MCP 증거가 필요합니다.\n\n## Computer Use 예외\n\nComputer Use로 넘어가기 전에 MCP에서 필요한 기능을 찾고 실제 호출을\n시도합니다. 기능 부재 또는 구체적인 실패가 확인되면 사용자에게 그 이유를\n먼저 알리고, 지원되지 않는 UI 단계에만 Computer Use를 사용합니다. 그 단계가\n끝나면 검사와 검증은 다시 Studio MCP로 돌아갑니다.\n\n현재 Codex 작업에 MCP 서버 설정은 있으나 Studio 도구가 노출되지 않은 경우,\nStudio 자동화는 일시적으로 차단된 것으로 처리합니다. 이 상태에서 Computer\nUse, AppleScript, 키보드 합성, 셸 명령 또는 파일 편집으로 라이브 Studio\n조작을 몰래 대체하지 않습니다.\n\n## 구현 내용\n\n저장소 루트 `AGENTS.md`에 이 규칙을 필수 라우팅 정책으로 추가했습니다.\n향후 작업자는 Studio 기능별 선호도가 아니라 동일한 강제 순서를 따릅니다.\n\n```text\nStudio MCP 기능 확인 및 호출\n  ├─ 성공 → MCP로 작업·검증 완료\n  ├─ 기능 없음 → 이유 공유 → 해당 UI 단계만 Computer Use → MCP 복귀\n  └─ 구체적 실패 → 오류 공유 → 해당 UI 단계만 Computer Use → MCP 복귀\n```\n\n## 변경 파일\n\n- `AGENTS.md`: MCP 우선 조작, 예외 조건, 사용자 고지, 라이브 검증 근거를\n  강제하는 저장소 규칙을 추가했습니다.\n- `wiki/content/pages/studio-automation-routing/v001.md`: 규칙과 적용 범위를\n  불변 문서로 기록합니다.\n\n## 검증\n\n- `Roblox_Studio` MCP 서버가 로컬 Codex 설정에 구성되어 있음을 확인했습니다.\n- StudioMCP 실행 파일이 존재하고 실행 가능한 상태임을 확인했습니다.\n- 현재 작업의 도구 표면에는 Studio MCP의 개별 조작 도구가 노출되지 않아,\n  규칙대로 Computer Use로 우회하지 않았습니다.\n\n## 결정 사항\n\n- 라이브 Studio 상태의 권위 있는 증거는 Studio MCP 호출 결과로 삼습니다.\n- Computer Use는 MCP의 영구 대체재가 아니라 확인된 공백을 메우는 좁은\n  예외입니다.\n- 도구 노출 문제는 자동 우회의 근거가 아니라 작업 일시 차단 사유입니다.\n\n## 후속 작업\n\n- Studio MCP 도구가 다시 노출되면 캐릭터 이미지 업로드와 라이브 플레이\n  검증을 MCP로 이어서 수행합니다.\n",
      "revisions": [
        {
          "id": "studio-automation-routing",
          "title": "Roblox Studio MCP 우선 조작 규칙",
          "summary": "모든 Roblox Studio 조작은 Studio MCP를 우선 사용하고, 지원되지 않거나 실제 실패한 단일 단계만 Computer Use로 제한합니다.",
          "status": "active",
          "category": "architecture",
          "tags": [
            "roblox-studio",
            "mcp",
            "automation",
            "validation"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-06",
          "authors": [
            "Codex"
          ],
          "version": 1,
          "change_type": "created",
          "change_summary": "Roblox Studio 조작의 MCP 우선순위와 Computer Use 예외 조건을 저장소 강제 규칙으로 추가함",
          "supersedes": null,
          "sources": [
            "AGENTS.md"
          ],
          "related": [
            "character-2d-rendering",
            "development-wiki"
          ],
          "validation": [
            "AGENTS.md의 Roblox Studio MCP-first routing is mandatory 절을 검토",
            "설정된 Roblox_Studio MCP 서버와 StudioMCP 실행 파일을 확인"
          ],
          "body": "# Roblox Studio MCP 우선 조작 규칙\n\n## 결과\n\nRoblox Studio의 라이브 상태를 읽거나 바꾸는 모든 작업은 구성된\n`Roblox_Studio` MCP를 첫 번째이자 권위 있는 조작 경로로 사용합니다.\nComputer Use는 편의상 선택할 수 있는 대체 경로가 아니며, 필요한 기능이\nMCP에 없거나 실제 MCP 호출이 구체적으로 실패한 경우에만 사용합니다.\n\n## 적용 범위\n\n다음 작업은 모두 Studio MCP를 먼저 사용합니다.\n\n- 실행 중인 Studio 탐색과 대상 플레이스 선택\n- DataModel, 인스턴스, 속성 및 스크립트 검사와 변경\n- Luau 실행, 플레이 시작·정지, 콘솔 확인\n- 스크린 캡처와 런타임 시각 검증\n- 에셋 삽입 및 이미지 업로드\n\nRojo와 저장소 도구는 소스 작성, 빌드, 정적 검증에 계속 사용합니다. 하지만\n이 결과만으로 라이브 Studio 상태가 적용되었다고 주장하지 않습니다. 라이브\n상태에 관한 완료 판정에는 가능한 경우 Studio MCP 증거가 필요합니다.\n\n## Computer Use 예외\n\nComputer Use로 넘어가기 전에 MCP에서 필요한 기능을 찾고 실제 호출을\n시도합니다. 기능 부재 또는 구체적인 실패가 확인되면 사용자에게 그 이유를\n먼저 알리고, 지원되지 않는 UI 단계에만 Computer Use를 사용합니다. 그 단계가\n끝나면 검사와 검증은 다시 Studio MCP로 돌아갑니다.\n\n현재 Codex 작업에 MCP 서버 설정은 있으나 Studio 도구가 노출되지 않은 경우,\nStudio 자동화는 일시적으로 차단된 것으로 처리합니다. 이 상태에서 Computer\nUse, AppleScript, 키보드 합성, 셸 명령 또는 파일 편집으로 라이브 Studio\n조작을 몰래 대체하지 않습니다.\n\n## 구현 내용\n\n저장소 루트 `AGENTS.md`에 이 규칙을 필수 라우팅 정책으로 추가했습니다.\n향후 작업자는 Studio 기능별 선호도가 아니라 동일한 강제 순서를 따릅니다.\n\n```text\nStudio MCP 기능 확인 및 호출\n  ├─ 성공 → MCP로 작업·검증 완료\n  ├─ 기능 없음 → 이유 공유 → 해당 UI 단계만 Computer Use → MCP 복귀\n  └─ 구체적 실패 → 오류 공유 → 해당 UI 단계만 Computer Use → MCP 복귀\n```\n\n## 변경 파일\n\n- `AGENTS.md`: MCP 우선 조작, 예외 조건, 사용자 고지, 라이브 검증 근거를\n  강제하는 저장소 규칙을 추가했습니다.\n- `wiki/content/pages/studio-automation-routing/v001.md`: 규칙과 적용 범위를\n  불변 문서로 기록합니다.\n\n## 검증\n\n- `Roblox_Studio` MCP 서버가 로컬 Codex 설정에 구성되어 있음을 확인했습니다.\n- StudioMCP 실행 파일이 존재하고 실행 가능한 상태임을 확인했습니다.\n- 현재 작업의 도구 표면에는 Studio MCP의 개별 조작 도구가 노출되지 않아,\n  규칙대로 Computer Use로 우회하지 않았습니다.\n\n## 결정 사항\n\n- 라이브 Studio 상태의 권위 있는 증거는 Studio MCP 호출 결과로 삼습니다.\n- Computer Use는 MCP의 영구 대체재가 아니라 확인된 공백을 메우는 좁은\n  예외입니다.\n- 도구 노출 문제는 자동 우회의 근거가 아니라 작업 일시 차단 사유입니다.\n\n## 후속 작업\n\n- Studio MCP 도구가 다시 노출되면 캐릭터 이미지 업로드와 라이브 플레이\n  검증을 MCP로 이어서 수행합니다.\n",
          "source_path": "wiki/content/pages/studio-automation-routing/v001.md",
          "timeline_order": 1
        }
      ]
    },
    {
      "id": "world-art-bible",
      "title": "PackBound 캐릭터·월드 아트 바이블",
      "summary": "고물바람 초원을 전경 차폐, 원·중경 패럴랙스와 화면 밖까지 이어지는 식생으로 확장해 세로 모바일 이동 중에도 2D 패널 필드의 깊이와 캐릭터 가독성을 함께 유지합니다.",
      "status": "active",
      "category": "art",
      "tags": [
        "art",
        "environment",
        "field",
        "2.5d",
        "parallax",
        "occlusion",
        "mobile",
        "roblox"
      ],
      "created_at": "2026-08-06",
      "updated_at": "2026-08-13",
      "authors": [
        "Codex"
      ],
      "version": 3,
      "change_type": "updated",
      "change_summary": "필드 v21에서 원경과 중경을 카메라 이동에 따라 분리하고, 전경 패널의 캐릭터 주변만 타일 단위로 비우는 차폐와 화면 바깥 식생을 추가해 평면 배경의 끝과 캐릭터 가림을 함께 해결했습니다.",
      "supersedes": "world-art-bible@v002",
      "sources": [
        "wiki/content/pages/world-art-bible/v002.md",
        "wiki/content/media/world-art-bible/v003/studio-field-v21.jpg",
        "Assets/World/Backgrounds/junkwind_mystic_castle_panorama_v1.png",
        "Assets/World/Backgrounds/junkwind_parallax_far_ridges_v1.png",
        "Assets/World/Backgrounds/junkwind_parallax_mid_canopy_v1.png",
        "Assets/World/Foregrounds/junkwind_foreground_canopy_v1.png",
        "Assets/World/Textures/junkwind_exterior_foliage_ground_v1.png",
        "src/ServerScriptService/FieldBuilder.luau",
        "src/ReplicatedStorage/Character2D/QuarterViewCamera.luau",
        "src/ReplicatedStorage/Character2D/FieldOcclusionController.luau",
        "src/StarterPlayer/StarterPlayerScripts/QuarterViewCameraBootstrap.client.luau"
      ],
      "related": [
        "character-2d-rendering",
        "project-overview",
        "studio-automation-routing"
      ],
      "validation": [
        "Roblox Studio MCP Play, iPhone 17 Pro 세로 401×777: PackBoundField v21, 142 parts, 119 billboards, 864 occlusion tiles",
        "Roblox Studio MCP Play: 캐릭터 주변 전경 차폐, 다층 원경, 화면 경계와 접지 상태 시각 검사",
        "Roblox Studio MCP Play 콘솔: 오류 출력 없음",
        "bash tools/test_character_assets.sh",
        "python3 tools/wiki.py build",
        "python3 tools/wiki.py check",
        "git diff --check"
      ],
      "source_path": "wiki/content/pages/world-art-bible/v003.md",
      "body": "# PackBound 캐릭터·월드 아트 바이블\n\n## 기획 배경과 목표\n\n고물바람 초원의 v002는 한 장의 유기적인 이동면과 2D 패널 랜드마크로 장소의 정체성을\n확정했습니다. 그러나 카메라가 이동할 때 원경과 필드가 같은 속도로 따라오면 배경이\n붙어 있는 판처럼 느껴지고, 화면 가까이 들어오는 수풀은 캐릭터 전체를 가리거나 갑자기\n사라져 깊이 표현과 플레이 가독성이 충돌했습니다.\n\n이번 확장의 목표는 3D 오브젝트를 늘리지 않고도 화면 앞·필드·원경이 서로 다른 깊이에\n있다고 느끼게 하는 것입니다. 캐릭터가 전경 뒤로 지나갈 때는 주변만 자연스럽게 열리고,\n필드 바깥은 검은 빈 공간이 아니라 계속 이어지는 식생과 성채 원경으로 보여야 합니다.\n\n## 플레이어 경험\n\n카메라를 따라 이동하면 먼 능선, 중간 수풀과 플레이 필드가 서로 다른 속도로 움직여\n공간의 깊이가 읽힙니다. 화면 아래의 전경 수풀과 폐품 구조물은 캐릭터보다 앞에 놓이지만,\n캐릭터가 가까워지면 작은 타일 단위로 필요한 부분만 투명해져 위치와 방향을 놓치지\n않습니다. 상단의 성채, 청록 수로와 보라 이동면은 기존 장소의 기억점을 유지합니다.\n\n![고물바람 초원 필드 v21](./media/world-art-bible/v003/studio-field-v21.jpg \"iPhone 17 Pro 세로 Play에서 성채 원경, 청록 녹지, 보라 이동면, 전경 패널과 중앙 캐릭터의 깊이 관계를 확인\")\n\n## 핵심 원칙과 설계 철학\n\n### 2D 레이어의 상대 이동으로 깊이를 만든다\n\n원경과 중경 패널에는 각자의 패럴랙스 계수와 기준점을 저장합니다. 카메라 초점이 움직일\n때 `QuarterViewCamera`가 기준점에서의 차이를 계수만큼 반영하므로, 가까운 월드와 먼\n실루엣이 같은 속도로 미끄러지지 않습니다. 런타임에서 그림을 재생성하지 않고 패널의\n위치만 갱신합니다.\n\n### 차폐는 패널 전체가 아니라 알파 타일을 연다\n\n전경 패널은 8×9 타일로 나뉜 이미지 레이어를 가지며 캐릭터 주변 반경과 겹치는 타일만\n숨깁니다. 원본 패널을 통째로 투명하게 만들지 않아 수풀의 존재감과 화면 구도를 유지하고,\n캐릭터 실루엣에 필요한 최소 창만 만듭니다.\n\n### 필드 경계도 세계의 일부로 보인다\n\n외곽 식생 바닥과 전경 캐노피를 카메라 크롭 바깥까지 배치해 플레이 가능한 바닥이 끝난\n뒤에도 같은 생태가 이어지는 인상을 만듭니다. 충돌 경계는 기존처럼 투명 파트가 담당하고,\n화면의 막힘은 수풀·폐품·절벽 실루엣이 먼저 설명합니다.\n\n## 결정 사항과 정리 범위\n\n- 권위 있는 런타임 필드는 `PackBoundField` v21입니다.\n- 현재 필드는 142개 파트, 119개 BillboardGui와 864개 차폐 타일을 사용합니다.\n- 최종 원경·중경·전경·외곽 식생 이미지만 유지하고 이전 버전 및 중복 아틀라스는\n  복구 가능한 휴지통으로 이동했습니다.\n- 차폐 컨트롤러는 로컬 캐릭터를 기준으로 매 프레임 필요한 타일만 갱신합니다.\n- 월드의 고정 기물은 계속 2D 패널이며 3D 환경 모델 전환은 이번 범위가 아닙니다.\n\n## 현재 결과와 구현 참고\n\n`FieldBuilder`는 원경과 패럴랙스 레이어, 전경 차폐 패널을 결정론적으로 만들고 각 패널에\n기준점과 차폐 속성을 기록합니다. `QuarterViewCameraBootstrap`은 카메라와\n`FieldOcclusionController`를 함께 시작합니다. 카메라는 초점 이동 후 패럴랙스 레이어를\n갱신하고, 차폐 컨트롤러는 캐릭터 화면 위치와 전경 타일의 영역을 비교합니다.\n\n## 검증\n\nStudio MCP의 iPhone 17 Pro 세로 401×777 Play에서 v21 필드의 성채 원경, 청록 녹지,\n보라 이동면, 전경 구조물과 중앙 캐릭터가 한 화면에 읽히는 것을 확인했습니다. 서버\n검사에서 142개 파트, 119개 BillboardGui와 864개 차폐 타일이 생성됐고 런타임 콘솔에는\n오류가 없었습니다. 캐릭터 에셋 검사와 저장소 전체 자동 테스트도 통과했습니다. 검증 후\nStudio는 기본 뷰포트로 복원했습니다.\n\n## 후속 기획\n\n- 몬스터와 대형 전경 기물을 추가할 때는 차폐 타일 수와 갱신 비용을 함께 측정합니다.\n- 패럴랙스 계수는 필드별 화면 깊이를 표현하는 토큰으로 관리하고 기기 해상도별 상수로\n  분기하지 않습니다.\n- 새 배경 시안은 원경, 중경, 플레이면, 전경과 차폐 반경을 하나의 레이어 계획으로\n  승인합니다.\n",
      "revisions": [
        {
          "id": "world-art-bible",
          "title": "PackBound 캐릭터·월드 아트 바이블",
          "summary": "고물바람 초원을 전경 차폐, 원·중경 패럴랙스와 화면 밖까지 이어지는 식생으로 확장해 세로 모바일 이동 중에도 2D 패널 필드의 깊이와 캐릭터 가독성을 함께 유지합니다.",
          "status": "active",
          "category": "art",
          "tags": [
            "art",
            "environment",
            "field",
            "2.5d",
            "parallax",
            "occlusion",
            "mobile",
            "roblox"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-13",
          "authors": [
            "Codex"
          ],
          "version": 3,
          "change_type": "updated",
          "change_summary": "필드 v21에서 원경과 중경을 카메라 이동에 따라 분리하고, 전경 패널의 캐릭터 주변만 타일 단위로 비우는 차폐와 화면 바깥 식생을 추가해 평면 배경의 끝과 캐릭터 가림을 함께 해결했습니다.",
          "supersedes": "world-art-bible@v002",
          "sources": [
            "wiki/content/pages/world-art-bible/v002.md",
            "wiki/content/media/world-art-bible/v003/studio-field-v21.jpg",
            "Assets/World/Backgrounds/junkwind_mystic_castle_panorama_v1.png",
            "Assets/World/Backgrounds/junkwind_parallax_far_ridges_v1.png",
            "Assets/World/Backgrounds/junkwind_parallax_mid_canopy_v1.png",
            "Assets/World/Foregrounds/junkwind_foreground_canopy_v1.png",
            "Assets/World/Textures/junkwind_exterior_foliage_ground_v1.png",
            "src/ServerScriptService/FieldBuilder.luau",
            "src/ReplicatedStorage/Character2D/QuarterViewCamera.luau",
            "src/ReplicatedStorage/Character2D/FieldOcclusionController.luau",
            "src/StarterPlayer/StarterPlayerScripts/QuarterViewCameraBootstrap.client.luau"
          ],
          "related": [
            "character-2d-rendering",
            "project-overview",
            "studio-automation-routing"
          ],
          "validation": [
            "Roblox Studio MCP Play, iPhone 17 Pro 세로 401×777: PackBoundField v21, 142 parts, 119 billboards, 864 occlusion tiles",
            "Roblox Studio MCP Play: 캐릭터 주변 전경 차폐, 다층 원경, 화면 경계와 접지 상태 시각 검사",
            "Roblox Studio MCP Play 콘솔: 오류 출력 없음",
            "bash tools/test_character_assets.sh",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "git diff --check"
          ],
          "body": "# PackBound 캐릭터·월드 아트 바이블\n\n## 기획 배경과 목표\n\n고물바람 초원의 v002는 한 장의 유기적인 이동면과 2D 패널 랜드마크로 장소의 정체성을\n확정했습니다. 그러나 카메라가 이동할 때 원경과 필드가 같은 속도로 따라오면 배경이\n붙어 있는 판처럼 느껴지고, 화면 가까이 들어오는 수풀은 캐릭터 전체를 가리거나 갑자기\n사라져 깊이 표현과 플레이 가독성이 충돌했습니다.\n\n이번 확장의 목표는 3D 오브젝트를 늘리지 않고도 화면 앞·필드·원경이 서로 다른 깊이에\n있다고 느끼게 하는 것입니다. 캐릭터가 전경 뒤로 지나갈 때는 주변만 자연스럽게 열리고,\n필드 바깥은 검은 빈 공간이 아니라 계속 이어지는 식생과 성채 원경으로 보여야 합니다.\n\n## 플레이어 경험\n\n카메라를 따라 이동하면 먼 능선, 중간 수풀과 플레이 필드가 서로 다른 속도로 움직여\n공간의 깊이가 읽힙니다. 화면 아래의 전경 수풀과 폐품 구조물은 캐릭터보다 앞에 놓이지만,\n캐릭터가 가까워지면 작은 타일 단위로 필요한 부분만 투명해져 위치와 방향을 놓치지\n않습니다. 상단의 성채, 청록 수로와 보라 이동면은 기존 장소의 기억점을 유지합니다.\n\n![고물바람 초원 필드 v21](./media/world-art-bible/v003/studio-field-v21.jpg \"iPhone 17 Pro 세로 Play에서 성채 원경, 청록 녹지, 보라 이동면, 전경 패널과 중앙 캐릭터의 깊이 관계를 확인\")\n\n## 핵심 원칙과 설계 철학\n\n### 2D 레이어의 상대 이동으로 깊이를 만든다\n\n원경과 중경 패널에는 각자의 패럴랙스 계수와 기준점을 저장합니다. 카메라 초점이 움직일\n때 `QuarterViewCamera`가 기준점에서의 차이를 계수만큼 반영하므로, 가까운 월드와 먼\n실루엣이 같은 속도로 미끄러지지 않습니다. 런타임에서 그림을 재생성하지 않고 패널의\n위치만 갱신합니다.\n\n### 차폐는 패널 전체가 아니라 알파 타일을 연다\n\n전경 패널은 8×9 타일로 나뉜 이미지 레이어를 가지며 캐릭터 주변 반경과 겹치는 타일만\n숨깁니다. 원본 패널을 통째로 투명하게 만들지 않아 수풀의 존재감과 화면 구도를 유지하고,\n캐릭터 실루엣에 필요한 최소 창만 만듭니다.\n\n### 필드 경계도 세계의 일부로 보인다\n\n외곽 식생 바닥과 전경 캐노피를 카메라 크롭 바깥까지 배치해 플레이 가능한 바닥이 끝난\n뒤에도 같은 생태가 이어지는 인상을 만듭니다. 충돌 경계는 기존처럼 투명 파트가 담당하고,\n화면의 막힘은 수풀·폐품·절벽 실루엣이 먼저 설명합니다.\n\n## 결정 사항과 정리 범위\n\n- 권위 있는 런타임 필드는 `PackBoundField` v21입니다.\n- 현재 필드는 142개 파트, 119개 BillboardGui와 864개 차폐 타일을 사용합니다.\n- 최종 원경·중경·전경·외곽 식생 이미지만 유지하고 이전 버전 및 중복 아틀라스는\n  복구 가능한 휴지통으로 이동했습니다.\n- 차폐 컨트롤러는 로컬 캐릭터를 기준으로 매 프레임 필요한 타일만 갱신합니다.\n- 월드의 고정 기물은 계속 2D 패널이며 3D 환경 모델 전환은 이번 범위가 아닙니다.\n\n## 현재 결과와 구현 참고\n\n`FieldBuilder`는 원경과 패럴랙스 레이어, 전경 차폐 패널을 결정론적으로 만들고 각 패널에\n기준점과 차폐 속성을 기록합니다. `QuarterViewCameraBootstrap`은 카메라와\n`FieldOcclusionController`를 함께 시작합니다. 카메라는 초점 이동 후 패럴랙스 레이어를\n갱신하고, 차폐 컨트롤러는 캐릭터 화면 위치와 전경 타일의 영역을 비교합니다.\n\n## 검증\n\nStudio MCP의 iPhone 17 Pro 세로 401×777 Play에서 v21 필드의 성채 원경, 청록 녹지,\n보라 이동면, 전경 구조물과 중앙 캐릭터가 한 화면에 읽히는 것을 확인했습니다. 서버\n검사에서 142개 파트, 119개 BillboardGui와 864개 차폐 타일이 생성됐고 런타임 콘솔에는\n오류가 없었습니다. 캐릭터 에셋 검사와 저장소 전체 자동 테스트도 통과했습니다. 검증 후\nStudio는 기본 뷰포트로 복원했습니다.\n\n## 후속 기획\n\n- 몬스터와 대형 전경 기물을 추가할 때는 차폐 타일 수와 갱신 비용을 함께 측정합니다.\n- 패럴랙스 계수는 필드별 화면 깊이를 표현하는 토큰으로 관리하고 기기 해상도별 상수로\n  분기하지 않습니다.\n- 새 배경 시안은 원경, 중경, 플레이면, 전경과 차폐 반경을 하나의 레이어 계획으로\n  승인합니다.\n",
          "source_path": "wiki/content/pages/world-art-bible/v003.md",
          "timeline_order": 26
        },
        {
          "id": "world-art-bible",
          "title": "PackBound 캐릭터·월드 아트 바이블",
          "summary": "고물바람 초원의 승인 시안을 세로 모바일 플레이에 맞는 2.5D 패널 필드로 구현하고, 중앙 고정된 확대 캐릭터와 유기적인 길·절벽 경계·원경이 하나의 화면 깊이로 읽히도록 확정했습니다.",
          "status": "active",
          "category": "art",
          "tags": [
            "art",
            "environment",
            "field",
            "2.5d",
            "camera",
            "mobile",
            "roblox",
            "visual-language"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-10",
          "authors": [
            "Codex"
          ],
          "version": 2,
          "change_type": "updated",
          "change_summary": "넓은 키아트의 랜드마크·색·동선 원칙을 세로 모바일 화면에 맞게 재구성하고, 모든 고정 기물을 2D 패널로 유지하면서 바닥 접지·맵 경계·배경·카메라·캐릭터 화면 크기를 실제 Studio 플레이 결과로 확정함",
          "supersedes": "world-art-bible@v001",
          "sources": [
            "wiki/content/pages/world-art-bible/v001.md",
            "wiki/content/media/world-art-bible/v002/concept.png",
            "wiki/content/media/world-art-bible/v002/studio-final-play.jpg",
            "Assets/World/Concepts/junkwind_meadow_field_concept_v1.png",
            "Assets/World/Backgrounds/junkwind_meadow_distant_panorama_v2.png",
            "Assets/World/PanelSprites/junkwind_meadow_boundaries_landmarks_atlas_v2.png",
            "Assets/World/PanelSprites/junkwind_meadow_edge_facades_atlas_v6.png",
            "Assets/World/PanelSprites/junkwind_meadow_props_atlas_v2.png",
            "Assets/World/Textures/junkwind_meadow_field_layout_v1.png",
            "Assets/World/Textures/junkwind_meadow_outer_undergrowth_tile_v2.png",
            "src/ServerScriptService/FieldBuilder.luau",
            "src/ServerScriptService/WorldBootstrap.server.luau",
            "src/ReplicatedStorage/Character2D/Config.luau",
            "src/ReplicatedStorage/Character2D/QuarterViewCamera.luau"
          ],
          "related": [
            "character-2d-rendering",
            "project-overview",
            "studio-automation-routing"
          ],
          "validation": [
            "Roblox Studio MCP Play, iPhone 17 Pro 세로 401×776: CameraType Scriptable, FOV 40, 캐릭터 캔버스 72×72px",
            "Roblox Studio MCP Server: PackBoundField v8, 접지 보정 패널 69개, 비고정 파트 0개",
            "Roblox Studio MCP 경계 충돌: X=120 이동 명령 후 X=90.4877에서 정지, 캐릭터 생존",
            "Roblox Studio MCP Play 콘솔: 오류 출력 없음",
            "rojo build packbound.project.json",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "python3 -m unittest tests/test_wiki.py",
            "git diff --check"
          ],
          "body": "# PackBound 캐릭터·월드 아트 바이블\n\n## 기획 배경과 목표\n\n고물바람 초원의 첫 시안은 중앙의 보라색 이동면과 좌우의 녹지 포켓, 상단의\n중계탑·중계문, 대형 오리와 자판기 같은 기억점을 한 장의 넓은 키아트로\n정의했습니다. 이번 구현의 목표는 이 이미지를 그대로 평면 배경으로 복사하는 것이\n아니라, 세로 모바일 플레이에서도 같은 장소라고 느낄 수 있는 2.5D 공간 문법으로\n번역하는 것입니다.\n\n플레이어는 어디로 이동할 수 있는지 즉시 알아야 하고, 필드 끝은 갑자기 잘린\n사각형이 아니라 수풀·절벽·폐품 울타리로 닫힌 막다른 공간처럼 보여야 합니다.\n동시에 카메라를 과도하게 확대하거나 3D 기물을 추가하지 않고, 판넬에 그린 2D\n이미지를 세워 두는 프로젝트의 시각 정체성을 유지해야 합니다.\n\n![고물바람 초원 승인 시안](./media/world-art-bible/v002/concept.png \"중앙 보라색 길, 좌우 녹지 포켓, 상단 타워와 게이트, 대형 오리와 폐품 랜드마크가 만드는 필드 구성 기준\")\n\n## 사용자 경험\n\n플레이어는 화면 중앙에 고정되고 캐릭터 자체의 표시 크기는 이전보다 정확히\n1.5배 커집니다. 카메라를 캐릭터 쪽으로 당겨 주변 정보를 버리는 방식이 아니므로,\n중앙 캐릭터의 가독성과 전방 필드의 탐색 정보가 함께 유지됩니다.\n\n보라색 길은 직사각형 타일을 이어 붙인 모양 대신 넓은 중앙 공터와 여러 방향의\n분기를 가진 유기적인 이동면으로 보입니다. 녹지에는 작은 꽃과 청록 웅덩이가\n깔리고, 화면 위쪽에는 중계탑과 중계문, 좌측에는 대형 오리와 자판기, 주변에는\n코일·차단판·상자·쇼핑카트가 배치되어 시안의 기억점과 역할 색을 실제 플레이에서도\n찾을 수 있습니다.\n\n가장자리의 수풀, 절벽 단면, 울타리와 바위는 이동 불가 영역을 시각적으로 먼저\n설명합니다. 그 뒤에 어두운 외곽 녹지와 노을빛 원경을 겹쳐, 필드가 갑자기 끝나거나\n기물이 공중에 떠 있는 인상을 줄입니다.\n\n![고물바람 초원 Studio 최종 결과](./media/world-art-bible/v002/studio-final-play.jpg \"iPhone 17 Pro 세로 Play 화면에서 중앙 고정·1.5배 캐릭터, 유기적인 보라 길, 접지된 2D 랜드마크와 다층 경계를 확인\")\n\n## 핵심 원칙과 설계 철학\n\n### 3D 형태가 아니라 2D 패널의 겹침으로 깊이를 만든다\n\n필드의 랜드마크, 수풀, 절벽, 울타리, 상호작용 지물과 작은 장식은 모두\nBillboardGui 기반 2D 패널입니다. 화면 깊이는 3D 모델의 면 수가 아니라 카메라\n각도, 패널 크기, 전경·중경·후경 배치와 배경 레이어의 겹침으로 만듭니다.\n충돌은 투명 파트가 담당하며 그림의 형태와 물리 경계를 분리합니다.\n\n### 이동면은 한 장의 읽기 쉬운 구성으로 유지한다\n\n바닥은 보라색 중앙 길과 녹지 포켓, 낮은 돌 경계와 청록 웅덩이를 한 장에 정리한\n필드 레이아웃 텍스처를 사용합니다. 이 방식은 반복 타일과 직사각형 겹침이 만드는\n기계적인 경계를 없애고, 몬스터·보상·상호작용 기물을 추가해도 중앙 전투 공간을\n열어 둡니다. 높이가 있는 수풀과 바위는 바닥에 굽지 않고 별도 패널로 유지해\n낮아진 카메라에서도 납작하게 보이지 않게 합니다.\n\n### 화면 구도와 월드 배치는 함께 조정한다\n\n최종 카메라는 Yaw 45도, Pitch 36도, 거리 140, FOV 40, 초점 높이 3을 사용합니다.\n카메라 전방 오프셋은 0으로 두어 플레이어가 화면 중앙에서 벗어나지 않게 합니다.\n넓은 시안의 모든 오브젝트를 세로 화면에 억지로 축소하지 않고, 타워·게이트·오리·\n자판기 같은 핵심 실루엣을 중앙 축에 더 가깝게 재배치해 모바일 크롭에서도 장소의\n정체성을 보존합니다.\n\n### 접지점은 이미지의 실제 알파 하단을 기준으로 한다\n\n각 스프라이트 셀의 하단 투명 여백을 패널 크기에 맞게 환산해 시각적 밑동이\nY=0에 닿도록 패널 중심을 내립니다. 보이는 그림과 충돌 파트를 함께 이동하므로,\n고정 오브젝트가 하늘에 뜨거나 충돌 위치만 따로 남지 않습니다.\n\n## 결정 사항과 범위\n\n- 플레이 필드는 188×188 스터드이며 스폰은 (12, 0.65, 30)입니다.\n- 필드 레이아웃 이미지는 rbxassetid://105093818434394를 사용합니다.\n- 경계·랜드마크, 소형 지물, 절벽 단면은 각각 최종 3×3 아틀라스를 사용합니다.\n- 중계탑은 좌상단, 중계문은 우상단, 오리와 자판기는 좌측 중경, 보급 상자와\n  쇼핑카트는 우측·하단 기억점으로 배치합니다.\n- 필드 가장자리에는 투명 충돌벽과 2D 절벽·수풀 패널을 함께 둡니다.\n- 캐릭터 화면 배율은 0.1875에서 0.28125로 변경해 48×48px에서 72×72px로\n  정확히 1.5배 확대합니다.\n- 캐릭터 확대는 카메라 거리 변경으로 대신하지 않습니다.\n- 이번 범위에는 3D 환경 모델, PC 전용 구도, 몬스터 배치와 전투 밸런스가\n  포함되지 않습니다.\n\n## 현재 결과\n\nStudio의 iPhone 17 Pro 세로 Play 화면에서 캐릭터는 화면 중앙에 고정되고,\n보라색 길 양쪽의 녹지와 전경 수풀, 상단 랜드마크가 동시에 읽힙니다. 낮아진\n카메라가 타워·게이트·자판기의 정면 실루엣을 충분히 보여 주며, 필드 바깥은 절벽\n단면과 어두운 녹지, 노을 원경으로 이어집니다.\n\n필드에는 117개의 BillboardGui가 있고 SurfaceGui 기반 3D 기물은 없습니다.\n69개 패널에 스프라이트별 접지 보정을 적용했으며 모든 필드 파트는 고정 상태입니다.\n\n## 구현 참고\n\nFieldBuilder가 바닥, 배경, 경계 충돌, 절벽 단면, 랜드마크와 장식을 하나의\nPackBoundField v8 모델로 결정론적으로 구성합니다. WorldBootstrap은 서버\n시작 시 빌더를 실행하며 같은 버전이 이미 있으면 중복 생성을 피합니다.\n\nQuarterViewCamera는 설정된 Yaw·Pitch·거리로 카메라 오프셋을 만들고,\nLookAheadDistance를 수평 전방 벡터로 환산합니다. 현재 값은 0이므로 캐릭터의\n초점이 화면 중앙에 유지됩니다. 전체 캐릭터 확대에는 머리 앵커용\nFrameSprites.DisplayScale이 아니라 전체 캔버스의 CharacterScreenScale을\n사용해 머리와 몸의 정렬을 보존합니다.\n\n## 검증\n\n- Studio MCP Play에서 iPhone 17 Pro 세로 뷰포트가 401×776, 카메라가\n  Scriptable, FOV가 40임을 확인했습니다.\n- 캐릭터 CharacterScreenScale은 0.28125이고 실제 캔버스는 72×72px였습니다.\n- 서버 필드는 v8, 접지 보정 패널은 69개, 비고정 파트는 0개였습니다.\n- 동쪽 경계 밖 X=120으로 이동시킨 캐릭터는 X=90.4877에서 멈췄고 생존했습니다.\n- Play 콘솔에는 오류 출력이 없었습니다.\n- Rojo 빌드와 위키 빌드·동기화 검사, 위키 단위 테스트와 공백 검사를 모두\n  통과했습니다.\n\n## 후속 기획\n\n- 실제 몬스터를 배치할 때는 중앙 보라색 전투 공터의 가독성을 우선하고, 새 장식은\n  녹지 포켓과 가장자리로 제한합니다.\n- 추가 모바일 기기에서는 캐릭터 중앙 고정과 터치 UI가 함께 보이는 상태를 별도로\n  검증하되, 월드 카메라 값을 기기별 상수로 분기하지 않습니다.\n- 새 필드를 제작할 때도 바닥 레이아웃, 2D 패널, 알파 접지점, 충돌 경계와 원경의\n  다섯 계층을 같은 순서로 구성합니다.\n",
          "source_path": "wiki/content/pages/world-art-bible/v002.md",
          "timeline_order": 20
        },
        {
          "id": "world-art-bible",
          "title": "PackBound 캐릭터·월드 아트 바이블",
          "summary": "여성형 루키와 심술궂지만 귀여운 스코티시 폴드 뚱냥이 참, 고물바람 초원, 역할이 읽히는 지형·지물 및 6종 몬스터를 하나의 제작 기준으로 정리했습니다.",
          "status": "active",
          "category": "art",
          "tags": [
            "art",
            "concept",
            "character",
            "environment",
            "monster",
            "field",
            "visual-language",
            "mobile",
            "roblox"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-06",
          "authors": [
            "Codex"
          ],
          "version": 1,
          "change_type": "created",
          "change_summary": "남성형 중심 아트 방향을 여성형 플레이어, 스코티시 폴드 뚱냥이 참, 첫 필드, 환경 키트와 역할별 몬스터 로스터까지 확장함",
          "supersedes": null,
          "sources": [
            "docs/art/character-world-art-direction.md",
            "Assets/Characters/Player/Reference/player_chibi_absurd_8direction_concept_v2.png",
            "Assets/Characters/Player/Reference/player_female_chibi_absurd_8direction_concept_v2.png",
            "Assets/World/Concepts/junkwind_meadow_field_concept_v1.png",
            "Assets/World/Concepts/junkwind_meadow_terrain_props_concept_v1.png",
            "Assets/Monsters/Concepts/junkwind_meadow_monster_roster_concept_v1.png"
          ],
          "related": [
            "character-2d-rendering",
            "project-overview"
          ],
          "validation": [
            "최종 콘셉트 PNG 4종: 1536×1024 RGB, 저장소 자산과 위키 미디어 사본 SHA-256 일치",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "python3 -m unittest tests/test_wiki.py",
            "node tests/markdown-media.spec.js",
            "git diff --check"
          ],
          "body": "# PackBound 캐릭터·월드 아트 바이블\n\n## 결과\n\nPackBound의 기존 아트 방향을 한 명의 남성형 플레이어 참고 이미지에서 게임 세계\n전체를 제작할 수 있는 기준으로 확장했습니다. 여성형 루키는 같은 판정과 같은\n가방 가독성을 유지하면서 얼굴과 머리 실루엣만으로 분명히 구분되며, 개인 장식은\n노란 오리 대신 무심하고 심술궂은 표정의 스코티시 폴드 뚱냥이 참을 사용합니다.\n\n첫 필드 `고물바람 초원`은 보라색 전투 바닥, 청록·코럴 경계, 시안 상호작용,\n주황 위험과 분홍·보라·금색 보상이라는 색 문법을 가르칩니다. 지형과 지물은 이\n문법을 실제 제작 단위로 나눴고, 여섯 몬스터는 장착한 폐품의 실루엣만 보고도\n근접, 돌진, 정면 방어, 원거리, 엘리트와 미니보스 역할을 알 수 있게 설계했습니다.\n\n## 제품 목표와 플레이 경험\n\n- 세로형 모바일 화면과 높은 쿼터탑 카메라에서 플레이어, 이동 바닥, 위험 방향과\n  보상이 한눈에 분리되어야 합니다.\n- 폐품 세계는 잔혹하거나 사실적인 폐허가 아니라 두툼한 장난감 디오라마처럼\n  우습고 만지고 싶게 보여야 합니다.\n- 캐릭터 선택지는 성별에 따라 전투 가독성이나 능력의 차이를 만들지 않습니다.\n- 배경 오브젝트는 장식 수량을 늘리기보다 이동 경계, 상호작용, 위험과 보상의\n  위치를 설명해야 합니다.\n- 몬스터의 전투 역할은 이름이나 UI 설명이 없어도 색과 전면 실루엣으로 먼저\n  전달되어야 합니다.\n\n## 여성형 루키\n\n여성형은 남성형을 가늘게 만들거나 색만 바꾼 파생형이 아닙니다. 같은 2등신,\n같은 화면상 어깨·신발 크기, 같은 접지점과 큰 전기 보라색 가방을 유지합니다.\n검보라 비대칭 보브와 짧은 사이드 포니테일, 큰 아몬드형 눈, 짧은 속눈썹, 얇고\n완만한 눈썹과 부드러운 턱선이 여성형의 핵심 식별자입니다.\n\n![여성형 루키 8방향 콘셉트](./media/world-art-bible/v001/female-rookie-turnaround.png \"부드러운 여성형 얼굴과 심술궂지만 귀여운 스코티시 폴드 뚱냥이 참이 반영된 최종 8방향 디자인 시트\")\n\n가방 장식은 둥근 만두형 몸과 볼, 앞으로 낮게 접힌 귀, 반쯤 감긴 눈, 작게 심술\n난 입, 짧은 발, 말린 꼬리와 코럴 목줄을 가진 노란 스코티시 폴드 뚱냥이\n참입니다. 무심하고 조금 고약해 보이지만 계속 보면 귀여운 표정을 모든 방향에서\n유지하며, 같은 고리에 매달리고 가방 외곽을 가리지 않습니다. 필드의 대형 오리\n조형물은 월드 랜드마크로 남기며 여성형의 개인 장식과 서로 교체하지 않습니다.\n\n## 첫 필드: 고물바람 초원\n\n고물바람 초원은 하단 진입부, 넓은 중앙 전투 공터, 양옆 자원 포켓과 상단의\n망가진 중계문을 순환 동선으로 잇는 초반 필드입니다. 캐릭터 주변은 디테일 밀도를\n낮추고 수풀, 절벽, 웅덩이와 울타리를 길 가장자리로 보내 이동 가능 영역을\n명확하게 유지합니다.\n\n![고물바람 초원 필드 콘셉트](./media/world-art-bible/v001/junkwind-meadow-field.png \"여성형 루키와 초반 몬스터가 배치된 고물바람 초원 최종 키아트\")\n\n중앙 위의 중계탑과 상단 중계문은 진행 방향을 잡고, 대형 오리 조형물과 수풀에\n묻힌 쇼핑카트는 구역을 기억하게 합니다. 시안 발광은 작동 가능한 대상, 주황은\n위험, 분홍·보라 상자는 보상으로 제한해 전투 중의 해석 비용을 줄입니다.\n\n## 지형과 지물 키트\n\n![고물바람 초원 지형·지물 키트](./media/world-art-bible/v001/junkwind-meadow-terrain-props.png \"경계·상호작용·위험·보상 역할별 12종 모듈 콘셉트\")\n\n| 역할 | 제작 단위 | 승인 기준 |\n| --- | --- | --- |\n| 이동면 | 잔디 절벽, 보라 길 T자, 청록 웅덩이 | 이동 가능한 윗면과 낙차가 쿼터탑에서 분리됨 |\n| 경계 | 수풀 벽, 바위 군집, 폐품 울타리 | 보이지 않는 벽 없이 통과 불가를 설명함 |\n| 상호작용 | 자판기, 시안 코일 파일런 | 시안 발광점이 작고 반복 가능함 |\n| 탐색 | 쇼핑카트 수풀, 통·타이어·볼트 | 자원 포켓을 암시하되 길을 덮지 않음 |\n| 위험 | 원뿔, 차단판, 스프링 플레이트 | 따뜻한 주황이 피해 위치에 집중됨 |\n| 보상·랜드마크 | 보급 상자, 대형 오리 | 화면에서 희소한 강색으로 기억점을 만듦 |\n\n## 몬스터 로스터\n\n![고물바람 초원 몬스터 로스터](./media/world-art-bible/v001/junkwind-meadow-monsters.png \"폐품 실루엣으로 전투 역할을 구분하는 6종 몬스터 최종 콘셉트\")\n\n| 몬스터 | 전투 역할 | 핵심 시각 예고 |\n| --- | --- | --- |\n| 머그먹 `Mugmuck` | 근접 추적 | 크림색 머그 손잡이가 옆 실루엣을 만듦 |\n| 꼬깔박치기 `Conebonk` | 직선 돌진 | 큰 주황 원뿔이 공격 방향을 가리킴 |\n| 깡통딱정 `Tinback` | 정면 방어 | 캔 뚜껑 정면판과 뒤쪽 시안 태엽이 약점을 나눔 |\n| 플러그퐁 `Plugpop` | 원거리 전기 | 플러그 귀와 시안 코일 코어가 사거리를 예고함 |\n| 카트꿀꺽 `Cartmaw` | 엘리트 공간 압박 | 넓은 카트 입과 붉은 손잡이 뿔이 길목 점유를 보임 |\n| 자판두꺼비 `Vendatoad` | 미니보스 구역 제어 | 위성 접시, 시안 목 코일과 큰 자판기 몸이 범위를 암시함 |\n\n초반에는 머그먹, 꼬깔박치기와 깡통딱정으로 이동, 회피 방향과 후면 공략을\n학습시킵니다. 이후 플러그퐁으로 원거리 압박을 더하고 카트꿀꺽과 자판두꺼비는\n이미 익힌 실루엣 문법을 큰 공간 제어 패턴으로 확장합니다.\n\n## 제작 결정과 경계\n\n- 네 콘셉트 이미지는 최종 디자인 기준이지만 런타임 스프라이트나 Roblox 모델은\n  아닙니다.\n- 여성형도 현재 `Head`와 `Body` 두 슬롯을 사용하며 새로운 성별 전용 런타임\n  시스템을 만들지 않습니다.\n- 기존 남성형 오리 참을 소급 교체하지 않고 여성형의 스코티시 폴드 뚱냥이 참을\n  개인 식별자로 사용합니다.\n- 필드 구현은 지물 장식보다 이동 바닥과 경계 그레이박스를 먼저 승인합니다.\n- 몬스터 구현은 일반 3종, 상호작용 지물, 원거리, 엘리트, 미니보스 순으로\n  확장해 한 번에 과도한 제작 범위를 열지 않습니다.\n- 후속 이미지 생성은 원본을 덮어쓰지 않고 버전 파일을 추가한 뒤 기준 문서에서\n  승인 경로를 승격합니다.\n\n## 검증과 후속 작업\n\n최종 이미지 네 장은 모두 1536×1024 RGB PNG이며 저장소 기준 자산과 위키 미디어\n사본의 SHA-256이 일치합니다. 위키 파서 테스트, 위키 빌드와 생성 데이터·미디어\n동기화 검사, 공백 오류 검사를 통과해야 이 버전을 활성 상태로 유지합니다.\n\n다음 제작 단계는 고물바람 초원의 Roblox 그레이박스, 일반 몬스터 세 종의 크기\n비교 시트, 여성형 South Walk 8프레임의 별도 승인 게이트입니다. 실제 Studio\n결과를 만드는 후속 변경에서는 대표 플레이 화면을 새 위키 버전의 최종 증거로\n추가해야 합니다.\n",
          "source_path": "wiki/content/pages/world-art-bible/v001.md",
          "timeline_order": 15
        }
      ]
    },
    {
      "id": "grass-vine-monster",
      "title": "가시덩굴 화분괴물과 MonsterDB",
      "summary": "첫 풀속성 몬스터의 추적·장판 예고·덩굴 분출 전투 경험, 모든 수치를 한 곳에서 조정하는 MonsterDB, F2 선택 소환과 투명 배경 제작 원칙을 확정했습니다.",
      "status": "active",
      "category": "gameplay",
      "tags": [
        "monster",
        "combat",
        "nature",
        "animation",
        "monster-db",
        "studio",
        "testing",
        "art-direction"
      ],
      "created_at": "2026-08-25",
      "updated_at": "2026-08-25",
      "authors": [
        "Codex"
      ],
      "version": 1,
      "change_type": "created",
      "change_summary": "가시덩굴 화분괴물의 기획·최종 게임 표현·서버 전투 규칙·MonsterDB 운영·F2 테스트 소환과 게임용 투명 이미지 제작 원칙을 처음 발행했습니다.",
      "supersedes": null,
      "sources": [
        "docs/gameplay/monster-definitions.json",
        "Assets/Monsters/Concepts/grass_vine_monster_concept_v1.png",
        "Assets/Monsters/Runtime/GrassVineMonster/atlas-metadata.json",
        "src/ReplicatedStorage/Monsters/GeneratedMonsterDefinitions.luau",
        "src/ReplicatedStorage/Monsters/MonsterVisualController.luau",
        "src/ReplicatedStorage/BackpackUI/DeveloperTestController.luau",
        "src/ServerScriptService/MonsterService.luau",
        "tools/monster_db.py",
        "wiki/site/monster-db.js",
        "AGENTS.md",
        "wiki/content/media/grass-vine-monster/v001/approved-concept.png",
        "wiki/content/media/grass-vine-monster/v001/studio-attack-telegraph.jpg",
        "wiki/content/media/grass-vine-monster/v001/studio-vine-eruption.jpg",
        "wiki/content/media/grass-vine-monster/v001/studio-f2-monster-console.jpg",
        "wiki/content/media/grass-vine-monster/v001/monsterdb-editor.jpg"
      ],
      "related": [
        "product-planning-change-log",
        "weapon-combat-presentation",
        "character-2d-rendering",
        "development-wiki"
      ],
      "validation": [
        "python3 -m unittest discover -s tests -p 'test_*.py': 147 tests passed",
        "python3 -m unittest tests.test_monster_db -v: 5 tests passed",
        "./tools/test_backpack_ui.sh: Backpack hex inventory tests passed",
        "tests/test_native_backpack_ui.py 직접 실행: 12 tests passed",
        "luau-compile: MonsterService, MonsterVisualController, DeveloperTestController, DeveloperTestWindow, InventoryV2Service 통과",
        "python3 tools/monster_db.py check: revision d0ad884e8183337d, 1 monster 통과",
        "Roblox Studio MCP Play: MonsterDB 목록 선택, 서버 성공 응답, SpawnSource=DeveloperF2, 수평 거리 10.0 studs, 정면 내적 1.0 확인",
        "Roblox Studio MCP Play: 공격 장판과 덩굴 분출을 실제 런타임 이미지 자산·태그 렌더러로 확인",
        "Built-in browser localhost: MonsterDB 1개, 109개 편집 변수, 편집 모달, warning/error 0 확인",
        "sips: Idle·Walk·Attack·VineEruption 1024×128 아틀라스 4개 모두 hasAlpha=yes",
        "python3 tools/wiki.py build && python3 tools/wiki.py check: 11 pages, 73 revisions, 108 media files 통과"
      ],
      "source_path": "wiki/content/pages/grass-vine-monster/v001.md",
      "body": "# 가시덩굴 화분괴물과 MonsterDB\n\n## 한눈에 보는 변경\n\n- 무엇이 바뀌었나: 플레이어를 추적하다 양팔의 덩굴을 땅에 찌르고, 플레이어가 서 있던\n  바닥을 빨간 원으로 2초간 경고한 뒤 그 자리에서 덩굴을 솟구치게 하는 첫 풀속성 몬스터가\n  실제 게임에서 움직이고 공격합니다.\n- 왜 바꿨나: 첫 몬스터는 단순한 접촉 피해가 아니라 보고 피할 수 있는 공격으로 전투의 기본\n  약속을 가르쳐야 하며, 이후 몬스터가 늘어날 때 수치와 테스트 방법을 다시 만들지 않아야\n  하기 때문입니다.\n- 플레이어와 개발자가 지금 경험하는 것: 플레이어는 빨간 장판을 보고 2초 안에 벗어날 수\n  있고, 개발자는 웹 MonsterDB에서 모든 전투 값을 조정하고 Studio F2 목록에서 원하는\n  몬스터를 골라 캐릭터 정면 10 stud에 바로 소환할 수 있습니다.\n\n## 몬스터 정체성과 시각 목표\n\n가시덩굴 화분괴물은 오래된 화분과 식물 덩어리가 하나의 생명체가 된 풀속성 일반 몬스터입니다.\n양팔 전체가 굵은 덩굴이어서 대기·걷기·공격 어디에서도 실루엣의 정체성이 사라지지 않습니다.\n플레이어가 공격 준비를 읽기 쉽도록 몸을 낮추고 두 덩굴손을 땅에 꽂는 동작을 공격의 시작\n신호로 삼았습니다.\n\n![승인된 가시덩굴 화분괴물 콘셉트](./media/grass-vine-monster/v001/approved-concept.png \"낡은 화분 몸통, 잎이 무성한 머리와 양팔 덩굴이라는 첫 풀속성 몬스터의 승인된 정체성\")\n\n게임용 애니메이션은 오른쪽을 기본 방향으로 그린 8프레임 Idle·Walk·Attack과 방향에\n독립적인 8프레임 VineEruption을 사용합니다. 런타임은 오른쪽 원화를 수평 반전해 왼쪽을\n보여 주므로 모든 몬스터가 좌·우 두 방향 계약을 공유할 수 있습니다.\n\n## 플레이어가 읽는 전투 흐름\n\n1. 몬스터가 탐색 거리 안의 플레이어를 발견하면 덩굴팔을 들고 추적합니다.\n2. 공격 범위에 들어오면 멈춰 서서 양팔을 바닥으로 찌릅니다.\n3. 그 순간의 플레이어 바닥 위치를 고정하고 빨간 원형 장판을 2초 동안 보여 줍니다.\n4. 플레이어가 움직였는지와 상관없이 처음 예고한 자리에서 덩굴이 솟아오릅니다.\n5. 분출 반경 안에 남아 있으면 피해와 넉백을 받고, 벗어나면 피합니다.\n\n![2초 전 빨간 장판 경고](./media/grass-vine-monster/v001/studio-attack-telegraph.jpg \"몬스터가 덩굴손을 내린 뒤 플레이어의 바닥 위치를 큰 빨간 원으로 고정해 회피 시간을 명확히 주는 최종 Studio 장면\")\n\n![예고 위치에서 솟아오르는 덩굴](./media/grass-vine-monster/v001/studio-vine-eruption.jpg \"빨간 원이 사라진 자리에 식물 덩굴이 솟아올라 공격의 원인과 결과가 같은 위치에서 이어지는 최종 Studio 장면\")\n\n### 기본 전투 수치\n\n| 항목 | 기본값 | 플레이 의미 |\n| --- | ---: | --- |\n| 최대 체력 | 120 | 첫 일반 몬스터로 여러 번 공격해 처치할 분량 |\n| 공격력 | 22 | 장판을 무시하면 분명한 손실을 주는 피해 |\n| 추적 이동속도 | 11 stud/s | 달아나는 플레이어를 압박하되 즉시 따라붙지 않음 |\n| 상대 탐색 거리 | 46 stud | 화면 안팎의 가까운 위협을 발견 |\n| 최대 공격 범위 | 28 stud | 근접 접촉 전에 지면 공격을 시작 |\n| 장판 예고 | 2초 | 위험을 보고 걸어서 벗어날 수 있는 핵심 회피 시간 |\n| 장판 반경 | 4.75 stud | 캐릭터 한 명보다 넓지만 화면에서 읽을 수 있는 범위 |\n| 공격 시작 간격 | 4.25초 | 분출 사이에 추적·재배치 여유를 제공 |\n\n## MonsterDB 운영 원칙\n\n몬스터의 이름, 활성화, 속성, 체력과 공격력뿐 아니라 탐색·시야·이동·경로 찾기·공격 시간·\n피해 범위·넉백·스폰·생명주기·충돌·표현·애니메이션 자산까지 한 원본에서 관리합니다.\n현재 첫 몬스터는 13개 묶음의 109개 변수를 제공하며, 이후 몬스터를 같은 목록에 추가하면\n웹 편집기와 F2 소환 목록이 자동으로 늘어납니다.\n\n![MonsterDB 전체 속성 편집기](./media/grass-vine-monster/v001/monsterdb-editor.jpg \"가시덩굴 화분괴물의 기본 정보부터 전투·탐색·이동·공격·스폰·애니메이션까지 한 화면에서 편집하는 웹 MonsterDB\")\n\n웹에서 저장하면 원본 JSON, 웹 DB 데이터와 Roblox용 생성 정의가 같은 리비전으로 갱신됩니다.\n열려 있는 Studio에는 자동으로 덮어쓰지 않고 `게임에 굽기`를 명시적으로 실행해야 합니다.\n이 경계는 수치 편집 중인 브라우저가 실행 중인 플레이를 몰래 바꾸는 일을 막습니다.\n\n## F2 테스트 소환\n\nStudio에서 F2를 누르면 세션 전용 테스트 도구가 열립니다. MonsterDB에서 게임 ON인 몬스터를\n표시 이름·속성·레벨과 함께 나열하고 첫 항목을 기본 선택합니다. `선택 몬스터 소환`을 누르면\n서버가 ID와 Studio 여부를 다시 검사한 뒤 캐릭터가 보는 수평 방향 정확히 10 stud 앞에\n생성합니다. 지면을 감지할 수 없는 테스트 바닥에서는 캐릭터 발 높이를 대신 사용합니다.\n\n![F2 몬스터 목록과 소환 성공](./media/grass-vine-monster/v001/studio-f2-monster-console.jpg \"MonsterDB 목록에서 가시덩굴 화분괴물을 선택하고 전방 10 stud 소환 성공 문구를 확인하는 Studio 전용 테스트 도구\")\n\nF2로 만든 몬스터는 정규 스폰 수를 소모하거나 죽은 뒤 다시 생성되지 않습니다. 서버는 짧은\n연속 요청 제한과 몬스터별 25마리 테스트 상한을 적용합니다. 따라서 목록이 커져도 하나의\n검증 경로를 재사용하면서 실수로 실제 게임 스폰 규칙을 오염시키지 않습니다.\n\n## 게임용 이미지의 투명 배경 원칙\n\n앞으로 게임에 바로 합성되는 아이콘, 캐릭터·몬스터 프레임, 스프라이트 시퀀스와 시트,\n잘라 쓰는 이펙트는 첫 유효 생성부터 실제 알파 투명 배경이어야 합니다. 마젠타·초록 등\n크로마키 배경을 먼저 만들고 나중에 제거하는 방식은 사용하지 않습니다. PNG 또는 WebP의\n알파 채널, 실제 투명 픽셀과 가장자리 색 번짐·후광 부재를 확인한 뒤에만 게임 자산으로\n승격합니다.\n\n이번 몬스터의 Idle·Walk·Attack·VineEruption 아틀라스 네 개는 모두 `1024×128`, 알파 채널\n보유 상태를 확인했습니다. 콘셉트 원화나 전체 장면 스크린샷처럼 의도적으로 불투명한 이미지는\n이 규칙의 대상이 아닙니다.\n\n## 구현과 권위 경계\n\n- 서버는 탐색, 추적, 공격 위치 고정, 2초 타이머, 피해·넉백, 죽음·정규 재생성을 판정합니다.\n- 클라이언트는 서버가 복제한 상태와 시간을 읽어 좌우 스프라이트, 장판 맥동과 덩굴 분출을\n  표시하며 피해를 결정하지 않습니다.\n- MonsterDB 생성 정의가 런타임의 단일 수치 기준이고 웹 화면은 그 원본을 편집하는 도구입니다.\n- F2 요청은 표시 이름이 아닌 안정적인 MonsterDB ID를 보내며 서버가 활성 상태와 호출 제한을\n  다시 검증합니다.\n- 기존 무기 피해 경로는 몬스터의 방어력 속성을 읽어 같은 서버 권위 전투에 연결됩니다.\n\n## 검증 결과\n\n- MonsterDB 생성·검사와 서버 권위·관계 제약 테스트 5개, BackpackUI Luau 회귀와 F2 정적\n  계약 12개를 통과했습니다.\n- Studio Play에서 F2 액션 바인딩, `grass_vine_monster` 기본 선택, 성공 응답과\n  `DeveloperF2` 출처를 확인했습니다. 같은 서버 프레임에서 수평 거리 `10.0`, 바라보는 방향\n  내적 `1.0`이었습니다.\n- Studio의 실제 런타임 이미지 자산과 시각 컨트롤러로 공격 자세·빨간 장판·덩굴 분출을\n  확인했고 출력 콘솔에는 MonsterService 시작 로그 외 오류가 없었습니다.\n- 내장 브라우저에서 1개 몬스터, 109개 변수, 전체 속성 편집 모달과 리비전\n  `d0ad884e8183337d`를 확인했으며 경고와 오류는 0개였습니다.\n\n## 후속 범위\n\n다음 몬스터는 같은 데이터 구조와 F2 목록을 재사용합니다. 몬스터별 전리품, 상태 이상,\n보스 단계 전환, 웨이브·지역별 스폰 테이블은 이번 첫 일반 몬스터의 범위에 넣지 않았으며\n각 시스템의 플레이 경험이 정해질 때 별도 데이터 묶음과 위키 결정으로 추가합니다.\n",
      "revisions": [
        {
          "id": "grass-vine-monster",
          "title": "가시덩굴 화분괴물과 MonsterDB",
          "summary": "첫 풀속성 몬스터의 추적·장판 예고·덩굴 분출 전투 경험, 모든 수치를 한 곳에서 조정하는 MonsterDB, F2 선택 소환과 투명 배경 제작 원칙을 확정했습니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "monster",
            "combat",
            "nature",
            "animation",
            "monster-db",
            "studio",
            "testing",
            "art-direction"
          ],
          "created_at": "2026-08-25",
          "updated_at": "2026-08-25",
          "authors": [
            "Codex"
          ],
          "version": 1,
          "change_type": "created",
          "change_summary": "가시덩굴 화분괴물의 기획·최종 게임 표현·서버 전투 규칙·MonsterDB 운영·F2 테스트 소환과 게임용 투명 이미지 제작 원칙을 처음 발행했습니다.",
          "supersedes": null,
          "sources": [
            "docs/gameplay/monster-definitions.json",
            "Assets/Monsters/Concepts/grass_vine_monster_concept_v1.png",
            "Assets/Monsters/Runtime/GrassVineMonster/atlas-metadata.json",
            "src/ReplicatedStorage/Monsters/GeneratedMonsterDefinitions.luau",
            "src/ReplicatedStorage/Monsters/MonsterVisualController.luau",
            "src/ReplicatedStorage/BackpackUI/DeveloperTestController.luau",
            "src/ServerScriptService/MonsterService.luau",
            "tools/monster_db.py",
            "wiki/site/monster-db.js",
            "AGENTS.md",
            "wiki/content/media/grass-vine-monster/v001/approved-concept.png",
            "wiki/content/media/grass-vine-monster/v001/studio-attack-telegraph.jpg",
            "wiki/content/media/grass-vine-monster/v001/studio-vine-eruption.jpg",
            "wiki/content/media/grass-vine-monster/v001/studio-f2-monster-console.jpg",
            "wiki/content/media/grass-vine-monster/v001/monsterdb-editor.jpg"
          ],
          "related": [
            "product-planning-change-log",
            "weapon-combat-presentation",
            "character-2d-rendering",
            "development-wiki"
          ],
          "validation": [
            "python3 -m unittest discover -s tests -p 'test_*.py': 147 tests passed",
            "python3 -m unittest tests.test_monster_db -v: 5 tests passed",
            "./tools/test_backpack_ui.sh: Backpack hex inventory tests passed",
            "tests/test_native_backpack_ui.py 직접 실행: 12 tests passed",
            "luau-compile: MonsterService, MonsterVisualController, DeveloperTestController, DeveloperTestWindow, InventoryV2Service 통과",
            "python3 tools/monster_db.py check: revision d0ad884e8183337d, 1 monster 통과",
            "Roblox Studio MCP Play: MonsterDB 목록 선택, 서버 성공 응답, SpawnSource=DeveloperF2, 수평 거리 10.0 studs, 정면 내적 1.0 확인",
            "Roblox Studio MCP Play: 공격 장판과 덩굴 분출을 실제 런타임 이미지 자산·태그 렌더러로 확인",
            "Built-in browser localhost: MonsterDB 1개, 109개 편집 변수, 편집 모달, warning/error 0 확인",
            "sips: Idle·Walk·Attack·VineEruption 1024×128 아틀라스 4개 모두 hasAlpha=yes",
            "python3 tools/wiki.py build && python3 tools/wiki.py check: 11 pages, 73 revisions, 108 media files 통과"
          ],
          "body": "# 가시덩굴 화분괴물과 MonsterDB\n\n## 한눈에 보는 변경\n\n- 무엇이 바뀌었나: 플레이어를 추적하다 양팔의 덩굴을 땅에 찌르고, 플레이어가 서 있던\n  바닥을 빨간 원으로 2초간 경고한 뒤 그 자리에서 덩굴을 솟구치게 하는 첫 풀속성 몬스터가\n  실제 게임에서 움직이고 공격합니다.\n- 왜 바꿨나: 첫 몬스터는 단순한 접촉 피해가 아니라 보고 피할 수 있는 공격으로 전투의 기본\n  약속을 가르쳐야 하며, 이후 몬스터가 늘어날 때 수치와 테스트 방법을 다시 만들지 않아야\n  하기 때문입니다.\n- 플레이어와 개발자가 지금 경험하는 것: 플레이어는 빨간 장판을 보고 2초 안에 벗어날 수\n  있고, 개발자는 웹 MonsterDB에서 모든 전투 값을 조정하고 Studio F2 목록에서 원하는\n  몬스터를 골라 캐릭터 정면 10 stud에 바로 소환할 수 있습니다.\n\n## 몬스터 정체성과 시각 목표\n\n가시덩굴 화분괴물은 오래된 화분과 식물 덩어리가 하나의 생명체가 된 풀속성 일반 몬스터입니다.\n양팔 전체가 굵은 덩굴이어서 대기·걷기·공격 어디에서도 실루엣의 정체성이 사라지지 않습니다.\n플레이어가 공격 준비를 읽기 쉽도록 몸을 낮추고 두 덩굴손을 땅에 꽂는 동작을 공격의 시작\n신호로 삼았습니다.\n\n![승인된 가시덩굴 화분괴물 콘셉트](./media/grass-vine-monster/v001/approved-concept.png \"낡은 화분 몸통, 잎이 무성한 머리와 양팔 덩굴이라는 첫 풀속성 몬스터의 승인된 정체성\")\n\n게임용 애니메이션은 오른쪽을 기본 방향으로 그린 8프레임 Idle·Walk·Attack과 방향에\n독립적인 8프레임 VineEruption을 사용합니다. 런타임은 오른쪽 원화를 수평 반전해 왼쪽을\n보여 주므로 모든 몬스터가 좌·우 두 방향 계약을 공유할 수 있습니다.\n\n## 플레이어가 읽는 전투 흐름\n\n1. 몬스터가 탐색 거리 안의 플레이어를 발견하면 덩굴팔을 들고 추적합니다.\n2. 공격 범위에 들어오면 멈춰 서서 양팔을 바닥으로 찌릅니다.\n3. 그 순간의 플레이어 바닥 위치를 고정하고 빨간 원형 장판을 2초 동안 보여 줍니다.\n4. 플레이어가 움직였는지와 상관없이 처음 예고한 자리에서 덩굴이 솟아오릅니다.\n5. 분출 반경 안에 남아 있으면 피해와 넉백을 받고, 벗어나면 피합니다.\n\n![2초 전 빨간 장판 경고](./media/grass-vine-monster/v001/studio-attack-telegraph.jpg \"몬스터가 덩굴손을 내린 뒤 플레이어의 바닥 위치를 큰 빨간 원으로 고정해 회피 시간을 명확히 주는 최종 Studio 장면\")\n\n![예고 위치에서 솟아오르는 덩굴](./media/grass-vine-monster/v001/studio-vine-eruption.jpg \"빨간 원이 사라진 자리에 식물 덩굴이 솟아올라 공격의 원인과 결과가 같은 위치에서 이어지는 최종 Studio 장면\")\n\n### 기본 전투 수치\n\n| 항목 | 기본값 | 플레이 의미 |\n| --- | ---: | --- |\n| 최대 체력 | 120 | 첫 일반 몬스터로 여러 번 공격해 처치할 분량 |\n| 공격력 | 22 | 장판을 무시하면 분명한 손실을 주는 피해 |\n| 추적 이동속도 | 11 stud/s | 달아나는 플레이어를 압박하되 즉시 따라붙지 않음 |\n| 상대 탐색 거리 | 46 stud | 화면 안팎의 가까운 위협을 발견 |\n| 최대 공격 범위 | 28 stud | 근접 접촉 전에 지면 공격을 시작 |\n| 장판 예고 | 2초 | 위험을 보고 걸어서 벗어날 수 있는 핵심 회피 시간 |\n| 장판 반경 | 4.75 stud | 캐릭터 한 명보다 넓지만 화면에서 읽을 수 있는 범위 |\n| 공격 시작 간격 | 4.25초 | 분출 사이에 추적·재배치 여유를 제공 |\n\n## MonsterDB 운영 원칙\n\n몬스터의 이름, 활성화, 속성, 체력과 공격력뿐 아니라 탐색·시야·이동·경로 찾기·공격 시간·\n피해 범위·넉백·스폰·생명주기·충돌·표현·애니메이션 자산까지 한 원본에서 관리합니다.\n현재 첫 몬스터는 13개 묶음의 109개 변수를 제공하며, 이후 몬스터를 같은 목록에 추가하면\n웹 편집기와 F2 소환 목록이 자동으로 늘어납니다.\n\n![MonsterDB 전체 속성 편집기](./media/grass-vine-monster/v001/monsterdb-editor.jpg \"가시덩굴 화분괴물의 기본 정보부터 전투·탐색·이동·공격·스폰·애니메이션까지 한 화면에서 편집하는 웹 MonsterDB\")\n\n웹에서 저장하면 원본 JSON, 웹 DB 데이터와 Roblox용 생성 정의가 같은 리비전으로 갱신됩니다.\n열려 있는 Studio에는 자동으로 덮어쓰지 않고 `게임에 굽기`를 명시적으로 실행해야 합니다.\n이 경계는 수치 편집 중인 브라우저가 실행 중인 플레이를 몰래 바꾸는 일을 막습니다.\n\n## F2 테스트 소환\n\nStudio에서 F2를 누르면 세션 전용 테스트 도구가 열립니다. MonsterDB에서 게임 ON인 몬스터를\n표시 이름·속성·레벨과 함께 나열하고 첫 항목을 기본 선택합니다. `선택 몬스터 소환`을 누르면\n서버가 ID와 Studio 여부를 다시 검사한 뒤 캐릭터가 보는 수평 방향 정확히 10 stud 앞에\n생성합니다. 지면을 감지할 수 없는 테스트 바닥에서는 캐릭터 발 높이를 대신 사용합니다.\n\n![F2 몬스터 목록과 소환 성공](./media/grass-vine-monster/v001/studio-f2-monster-console.jpg \"MonsterDB 목록에서 가시덩굴 화분괴물을 선택하고 전방 10 stud 소환 성공 문구를 확인하는 Studio 전용 테스트 도구\")\n\nF2로 만든 몬스터는 정규 스폰 수를 소모하거나 죽은 뒤 다시 생성되지 않습니다. 서버는 짧은\n연속 요청 제한과 몬스터별 25마리 테스트 상한을 적용합니다. 따라서 목록이 커져도 하나의\n검증 경로를 재사용하면서 실수로 실제 게임 스폰 규칙을 오염시키지 않습니다.\n\n## 게임용 이미지의 투명 배경 원칙\n\n앞으로 게임에 바로 합성되는 아이콘, 캐릭터·몬스터 프레임, 스프라이트 시퀀스와 시트,\n잘라 쓰는 이펙트는 첫 유효 생성부터 실제 알파 투명 배경이어야 합니다. 마젠타·초록 등\n크로마키 배경을 먼저 만들고 나중에 제거하는 방식은 사용하지 않습니다. PNG 또는 WebP의\n알파 채널, 실제 투명 픽셀과 가장자리 색 번짐·후광 부재를 확인한 뒤에만 게임 자산으로\n승격합니다.\n\n이번 몬스터의 Idle·Walk·Attack·VineEruption 아틀라스 네 개는 모두 `1024×128`, 알파 채널\n보유 상태를 확인했습니다. 콘셉트 원화나 전체 장면 스크린샷처럼 의도적으로 불투명한 이미지는\n이 규칙의 대상이 아닙니다.\n\n## 구현과 권위 경계\n\n- 서버는 탐색, 추적, 공격 위치 고정, 2초 타이머, 피해·넉백, 죽음·정규 재생성을 판정합니다.\n- 클라이언트는 서버가 복제한 상태와 시간을 읽어 좌우 스프라이트, 장판 맥동과 덩굴 분출을\n  표시하며 피해를 결정하지 않습니다.\n- MonsterDB 생성 정의가 런타임의 단일 수치 기준이고 웹 화면은 그 원본을 편집하는 도구입니다.\n- F2 요청은 표시 이름이 아닌 안정적인 MonsterDB ID를 보내며 서버가 활성 상태와 호출 제한을\n  다시 검증합니다.\n- 기존 무기 피해 경로는 몬스터의 방어력 속성을 읽어 같은 서버 권위 전투에 연결됩니다.\n\n## 검증 결과\n\n- MonsterDB 생성·검사와 서버 권위·관계 제약 테스트 5개, BackpackUI Luau 회귀와 F2 정적\n  계약 12개를 통과했습니다.\n- Studio Play에서 F2 액션 바인딩, `grass_vine_monster` 기본 선택, 성공 응답과\n  `DeveloperF2` 출처를 확인했습니다. 같은 서버 프레임에서 수평 거리 `10.0`, 바라보는 방향\n  내적 `1.0`이었습니다.\n- Studio의 실제 런타임 이미지 자산과 시각 컨트롤러로 공격 자세·빨간 장판·덩굴 분출을\n  확인했고 출력 콘솔에는 MonsterService 시작 로그 외 오류가 없었습니다.\n- 내장 브라우저에서 1개 몬스터, 109개 변수, 전체 속성 편집 모달과 리비전\n  `d0ad884e8183337d`를 확인했으며 경고와 오류는 0개였습니다.\n\n## 후속 범위\n\n다음 몬스터는 같은 데이터 구조와 F2 목록을 재사용합니다. 몬스터별 전리품, 상태 이상,\n보스 단계 전환, 웨이브·지역별 스폰 테이블은 이번 첫 일반 몬스터의 범위에 넣지 않았으며\n각 시스템의 플레이 경험이 정해질 때 별도 데이터 묶음과 위키 결정으로 추가합니다.\n",
          "source_path": "wiki/content/pages/grass-vine-monster/v001.md",
          "timeline_order": 46
        }
      ]
    },
    {
      "id": "stampfoot-leaper",
      "title": "도장발 쿵귀 몬스터 아트와 도약 찍기 계약",
      "summary": "한 발로 통통 이동하다 예고한 위치를 높이 뛰어 찍는 몬스터의 정체성과 여덟 종류의 투명 런타임 애니메이션을 확정했습니다.",
      "status": "active",
      "category": "gameplay",
      "tags": [
        "monster",
        "animation",
        "combat",
        "art",
        "leap-slam",
        "transparent-background"
      ],
      "created_at": "2026-08-25",
      "updated_at": "2026-08-25",
      "authors": [
        "Codex"
      ],
      "version": 1,
      "change_type": "created",
      "change_summary": "중앙 스프링과 도장발이 각각 하나인 몬스터의 콘셉트, 이동·도약·착지·피격·사망·충격파 투명 아틀라스와 후속 구현 계약을 처음 발행했습니다.",
      "supersedes": null,
      "sources": [
        "Assets/Monsters/Concepts/stampfoot_leaper_anchor_v1.png",
        "Assets/Monsters/Runtime/StampfootLeaper/atlas-metadata.json",
        "Assets/Monsters/Runtime/StampfootLeaper/idle-east-8x128.png",
        "Assets/Monsters/Runtime/StampfootLeaper/walk-east-8x128.png",
        "Assets/Monsters/Runtime/StampfootLeaper/attack-anticipation-east-8x128.png",
        "Assets/Monsters/Runtime/StampfootLeaper/attack-airborne-east-6x128.png",
        "Assets/Monsters/Runtime/StampfootLeaper/attack-land-east-8x128.png",
        "Assets/Monsters/Runtime/StampfootLeaper/hit-east-6x128.png",
        "Assets/Monsters/Runtime/StampfootLeaper/death-east-12x128.png",
        "Assets/Monsters/Runtime/StampfootLeaper/impact-fx-omni-8x128.png",
        "docs/gameplay/stampfoot-leaper-implementation-handoff.md",
        "wiki/content/media/stampfoot-leaper/v001/concept.png",
        "wiki/content/media/stampfoot-leaper/v001/idle-atlas.png",
        "wiki/content/media/stampfoot-leaper/v001/hop-move-atlas.png",
        "wiki/content/media/stampfoot-leaper/v001/attack-anticipation-atlas.png",
        "wiki/content/media/stampfoot-leaper/v001/attack-airborne-atlas.png",
        "wiki/content/media/stampfoot-leaper/v001/attack-land-atlas.png",
        "wiki/content/media/stampfoot-leaper/v001/hit-atlas.png",
        "wiki/content/media/stampfoot-leaper/v001/death-atlas.png",
        "wiki/content/media/stampfoot-leaper/v001/impact-fx-atlas.png"
      ],
      "related": [
        "grass-vine-monster",
        "character-2d-rendering",
        "product-planning-change-log"
      ],
      "validation": [
        "sips: 콘셉트 768×768 및 런타임 아틀라스 8장 모두 hasAlpha=yes",
        "Pillow RGBA 검사: 모든 이미지에 실제 투명 픽셀 존재, partial-alpha magenta 0, zero-alpha RGB contamination 0",
        "런타임 아틀라스 규격: 128px 셀, 계약 프레임 수와 가로 폭 일치",
        "시각 검수: 모든 몸체 프레임에서 중앙 스프링 1개와 도장발 1개 유지",
        "python3 tools/wiki.py check: 12 pages, 75 revisions, 117 media files 통과",
        "커밋 후보 스냅샷에서 python3 -m unittest tests/test_wiki.py: 18 tests 통과",
        "python3 -m unittest tests.test_repository_policy: 1 test 통과",
        "git diff --check 통과"
      ],
      "source_path": "wiki/content/pages/stampfoot-leaper/v001.md",
      "body": "# 도장발 쿵귀 몬스터 아트와 도약 찍기 계약\n\n## 한눈에 보는 변경\n\n- 무엇이 바뀌었나: 한 발로 통통 이동하다 몸을 깊게 움츠리고 높이 도약해 바닥을 찍는\n  몬스터의 콘셉트와 게임용 애니메이션 여덟 종류를 확정했습니다.\n- 왜 바꿨나: 기존 몬스터와 다른 이동 리듬을 만들고, 준비·공중 이동·접지라는 세 단계가\n  눈에 분명히 보이는 회피형 공격을 준비하기 위해서입니다.\n- 플레이어와 개발자가 지금 경험하는 것: 개발자는 Roblox에 올릴 투명 아틀라스와 접지 시점,\n  좌우 방향, 프레임 속도를 바로 사용할 수 있습니다. 실제 게임 AI와 피해는 아직 연결하지\n  않았으므로 플레이어가 필드에서 만나는 단계는 다음 구현 작업입니다.\n\n## 기획 배경과 목표\n\n도장발 쿵귀는 여러 다리로 걷는 생물 대신 **하나의 넓은 도장발**로 이동하는 고대 석조\n정령입니다. 몸 아래에는 중앙 스프링 하나만 있고, 이 스프링을 늘이고 접는 동작이 대기·이동·\n공격의 공통 언어가 됩니다.\n\n이 형태는 장식이 아니라 전투 예고입니다. 평소의 가벼운 통통 움직임과 공격 직전의 깊은 압축을\n크게 대비시키면, 플레이어는 별도 글자 안내 없이도 “이제 높이 뛴다”는 사실을 읽을 수 있습니다.\n\n![도장발 쿵귀 최종 콘셉트](./media/stampfoot-leaper/v001/concept.png \"둥근 석조 몸체 아래 중앙 스프링과 넓은 붉은 도장발이 각각 하나뿐인 최종 정체성\")\n\n## 사용자 경험\n\n몬스터는 한 발로 지면을 튕기며 플레이어에게 접근합니다. 가까워지면 도장발을 바닥에 둔 채\n스프링과 몸을 낮게 압축하고, 공격 시작 순간의 플레이어 위치를 예고한 뒤 높은 포물선으로\n날아갑니다. 공중에서 플레이어를 다시 따라가지 않으므로 장판 밖으로 이동하면 피할 수 있습니다.\n\n착지에서는 도장발이 처음 평평하게 닿는 순간에만 피해와 충격파가 발생합니다. 공중 이동 그림과\n실제 판정이 따로 놀지 않도록 이 접지 순간을 전체 공격의 단일 기준 사건으로 정했습니다.\n\n## 핵심 원칙과 설계 철학\n\n### 한 발은 모든 프레임의 정체성이다\n\n중앙 스프링과 도장발은 각각 정확히 하나입니다. 점프가 커지거나 사망해 옆으로 쓰러져도 두 번째\n발, 분리된 보조 받침, 신발이나 발가락을 추가하지 않습니다. 앞으로 변형 애니메이션을 만들 때도\n이 규칙이 장식보다 우선합니다.\n\n### 공격은 세 단계로 나눈다\n\n도약 공격을 하나의 긴 그림으로 묶지 않고 준비, 공중, 착지로 나눴습니다. 이 구조는 회피 시간을\n바꿔도 준비 동작을 재사용하고, 점프 높이나 이동 시간을 조정해도 접지 피해 프레임을 고정할 수\n있게 합니다.\n\n| 단계 | 플레이어가 읽는 신호 | 최종 프레임 계약 |\n| --- | --- | ---: |\n| 준비 | 몸과 스프링이 점점 깊게 압축됨 | 8프레임 · 12 FPS |\n| 공중 | 스프링이 길게 늘고 정점에서 다시 접힘 | 6프레임 · 12 FPS |\n| 착지 | 첫 접지, 최대 압축, 반동, 안정화 | 8프레임 · 16 FPS |\n\n### 오른쪽 원화 하나를 좌우로 공유한다\n\n몸체 애니메이션은 오른쪽을 보는 East 원화만 저장합니다. 왼쪽은 게임에서 가로로 뒤집습니다.\n충격파는 방향과 관계없는 Omni 자산입니다. 같은 몬스터를 방향마다 다시 그리지 않아도 좌우\n전투 규칙을 유지할 수 있습니다.\n\n### 저장소에는 최종 사용 이미지 만 남긴다\n\n마젠타 원본, 개별 프레임, 고해상도 마스터, QA 캡처와 검토용 시트는 Git에 넣지 않습니다.\nRoblox 업로드에 사용하는 128px 가로 아틀라스와 MonsterDB에 보여 줄 최종 콘셉트만 제품\n리소스로 보존합니다. 중간 제작물이 최종 자산과 섞여 잘못 업로드되는 일을 막기 위한 경계입니다.\n\n## 현재 결과\n\n### 대기와 한 발 이동\n\n대기에서는 스프링의 길이와 몸 높이가 천천히 변하고, 이동에서는 압축과 신장이 더 크게 번갈아\n강시처럼 통통 튀는 리듬을 만듭니다.\n\n![대기 8프레임 아틀라스](./media/stampfoot-leaper/v001/idle-atlas.png \"도장발은 고정하고 중앙 스프링과 몸 높이만 변화하는 대기 동작\")\n\n![한 발 점프 이동 8프레임 아틀라스](./media/stampfoot-leaper/v001/hop-move-atlas.png \"한 발과 한 스프링으로 압축·상승·하강을 반복하는 이동 동작\")\n\n### 준비·공중·착지 공격\n\n![도약 준비 8프레임 아틀라스](./media/stampfoot-leaper/v001/attack-anticipation-atlas.png \"서 있을 때보다 훨씬 낮게 몸을 접어 공격 시작을 읽게 하는 준비 동작\")\n\n![공중 도약 6프레임 아틀라스](./media/stampfoot-leaper/v001/attack-airborne-atlas.png \"한 발을 몸 아래 유지한 채 상승·정점·하강 실루엣을 구분한 공중 동작\")\n\n![착지 8프레임 아틀라스](./media/stampfoot-leaper/v001/attack-land-atlas.png \"0부터 센 1번 프레임의 첫 접지를 피해와 충격파의 공통 사건으로 사용하는 착지 동작\")\n\n![착지 충격파 8프레임 아틀라스](./media/stampfoot-leaper/v001/impact-fx-atlas.png \"접지 순간 시작해 돌 조각과 청록색 고리가 퍼졌다 사라지는 방향 독립 효과\")\n\n### 피격과 사망\n\n![피격 6프레임 아틀라스](./media/stampfoot-leaper/v001/hit-atlas.png \"도장발 하나를 기준점으로 두고 스프링이 좌우로 휘었다 돌아오는 피격 반응\")\n\n![사망 12프레임 아틀라스](./media/stampfoot-leaper/v001/death-atlas.png \"새 받침을 만들지 않고 같은 도장발 하나와 몸체가 옆으로 쓰러져 동력을 잃는 사망 동작\")\n\n## 결정 사항과 범위\n\n- 이번 발행 범위는 최종 투명 아트 리소스, 재생 계약, 공격 구현 전달 문서입니다.\n- Roblox 이미지 업로드, MonsterDB 항목 추가, 서버 도약 궤적, 장판과 피해 구현은 포함하지\n  않습니다.\n- 표시 이름 `도장발 쿵귀`와 초깃값은 구현용 제안이며 실제 밸런스 작업에서 조정할 수 있습니다.\n- 이미지 생성 표면은 실제 사용 모델 이름을 검증 가능한 형태로 반환하지 않았으므로 특정\n  이미지 모델을 사용했다고 기록하지 않습니다.\n\n## 구현 참고\n\n런타임은 가로로 이어진 128×128 셀을 사용합니다. 이동 원화의 제작 이름은 HopMove이지만 기존\n공통 AI를 바꾸지 않도록 MonsterDB의 `Walk` 슬롯에 연결합니다. 공격은\n`AttackAnticipation → AttackAirborne → AttackLand` 순서이며, 착지의 0부터 센 프레임 1에서\n서버가 피해와 `ImpactFX`를 동시에 한 번 발생시키는 계약입니다.\n\n상세 데이터 필드, 포물선 공식, 지면·장애물 검사, 서버 권위 판정과 테스트 항목은\n`docs/gameplay/stampfoot-leaper-implementation-handoff.md`에 정리했습니다.\n\n## 검증\n\n- 콘셉트와 아틀라스 여덟 장은 모두 알파 채널과 실제 투명 픽셀을 가집니다.\n- 투명 픽셀의 RGB 오염, 반투명 마젠타 잔여 픽셀은 각각 0입니다.\n- 모든 아틀라스 높이는 128px이며 가로 폭은 `프레임 수 × 128px`입니다.\n- 몸체 전체 프레임을 육안으로 확인해 스프링 하나와 도장발 하나를 유지했습니다.\n- 이번 커밋은 게임 구현을 포함하지 않으므로 Studio 플레이 결과를 검증했다고 주장하지 않습니다.\n\n## 후속 기획\n\n다음 작업은 투명 아틀라스를 Roblox에 업로드해 실제 자산 ID를 얻고, MonsterDB에\n`TelegraphedLeapSlam` 전용 변수를 추가한 뒤 서버 권위 도약과 원형 착지 피해를 연결하는 것입니다.\n그때 F2 소환, 장판 회피, 높은 포물선, 접지 동기화, 피격과 사망을 Studio MCP Play에서 실제로\n검증하고 게임 구현 결과를 별도 위키 버전으로 발행합니다.\n",
      "revisions": [
        {
          "id": "stampfoot-leaper",
          "title": "도장발 쿵귀 몬스터 아트와 도약 찍기 계약",
          "summary": "한 발로 통통 이동하다 예고한 위치를 높이 뛰어 찍는 몬스터의 정체성과 여덟 종류의 투명 런타임 애니메이션을 확정했습니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "monster",
            "animation",
            "combat",
            "art",
            "leap-slam",
            "transparent-background"
          ],
          "created_at": "2026-08-25",
          "updated_at": "2026-08-25",
          "authors": [
            "Codex"
          ],
          "version": 1,
          "change_type": "created",
          "change_summary": "중앙 스프링과 도장발이 각각 하나인 몬스터의 콘셉트, 이동·도약·착지·피격·사망·충격파 투명 아틀라스와 후속 구현 계약을 처음 발행했습니다.",
          "supersedes": null,
          "sources": [
            "Assets/Monsters/Concepts/stampfoot_leaper_anchor_v1.png",
            "Assets/Monsters/Runtime/StampfootLeaper/atlas-metadata.json",
            "Assets/Monsters/Runtime/StampfootLeaper/idle-east-8x128.png",
            "Assets/Monsters/Runtime/StampfootLeaper/walk-east-8x128.png",
            "Assets/Monsters/Runtime/StampfootLeaper/attack-anticipation-east-8x128.png",
            "Assets/Monsters/Runtime/StampfootLeaper/attack-airborne-east-6x128.png",
            "Assets/Monsters/Runtime/StampfootLeaper/attack-land-east-8x128.png",
            "Assets/Monsters/Runtime/StampfootLeaper/hit-east-6x128.png",
            "Assets/Monsters/Runtime/StampfootLeaper/death-east-12x128.png",
            "Assets/Monsters/Runtime/StampfootLeaper/impact-fx-omni-8x128.png",
            "docs/gameplay/stampfoot-leaper-implementation-handoff.md",
            "wiki/content/media/stampfoot-leaper/v001/concept.png",
            "wiki/content/media/stampfoot-leaper/v001/idle-atlas.png",
            "wiki/content/media/stampfoot-leaper/v001/hop-move-atlas.png",
            "wiki/content/media/stampfoot-leaper/v001/attack-anticipation-atlas.png",
            "wiki/content/media/stampfoot-leaper/v001/attack-airborne-atlas.png",
            "wiki/content/media/stampfoot-leaper/v001/attack-land-atlas.png",
            "wiki/content/media/stampfoot-leaper/v001/hit-atlas.png",
            "wiki/content/media/stampfoot-leaper/v001/death-atlas.png",
            "wiki/content/media/stampfoot-leaper/v001/impact-fx-atlas.png"
          ],
          "related": [
            "grass-vine-monster",
            "character-2d-rendering",
            "product-planning-change-log"
          ],
          "validation": [
            "sips: 콘셉트 768×768 및 런타임 아틀라스 8장 모두 hasAlpha=yes",
            "Pillow RGBA 검사: 모든 이미지에 실제 투명 픽셀 존재, partial-alpha magenta 0, zero-alpha RGB contamination 0",
            "런타임 아틀라스 규격: 128px 셀, 계약 프레임 수와 가로 폭 일치",
            "시각 검수: 모든 몸체 프레임에서 중앙 스프링 1개와 도장발 1개 유지",
            "python3 tools/wiki.py check: 12 pages, 75 revisions, 117 media files 통과",
            "커밋 후보 스냅샷에서 python3 -m unittest tests/test_wiki.py: 18 tests 통과",
            "python3 -m unittest tests.test_repository_policy: 1 test 통과",
            "git diff --check 통과"
          ],
          "body": "# 도장발 쿵귀 몬스터 아트와 도약 찍기 계약\n\n## 한눈에 보는 변경\n\n- 무엇이 바뀌었나: 한 발로 통통 이동하다 몸을 깊게 움츠리고 높이 도약해 바닥을 찍는\n  몬스터의 콘셉트와 게임용 애니메이션 여덟 종류를 확정했습니다.\n- 왜 바꿨나: 기존 몬스터와 다른 이동 리듬을 만들고, 준비·공중 이동·접지라는 세 단계가\n  눈에 분명히 보이는 회피형 공격을 준비하기 위해서입니다.\n- 플레이어와 개발자가 지금 경험하는 것: 개발자는 Roblox에 올릴 투명 아틀라스와 접지 시점,\n  좌우 방향, 프레임 속도를 바로 사용할 수 있습니다. 실제 게임 AI와 피해는 아직 연결하지\n  않았으므로 플레이어가 필드에서 만나는 단계는 다음 구현 작업입니다.\n\n## 기획 배경과 목표\n\n도장발 쿵귀는 여러 다리로 걷는 생물 대신 **하나의 넓은 도장발**로 이동하는 고대 석조\n정령입니다. 몸 아래에는 중앙 스프링 하나만 있고, 이 스프링을 늘이고 접는 동작이 대기·이동·\n공격의 공통 언어가 됩니다.\n\n이 형태는 장식이 아니라 전투 예고입니다. 평소의 가벼운 통통 움직임과 공격 직전의 깊은 압축을\n크게 대비시키면, 플레이어는 별도 글자 안내 없이도 “이제 높이 뛴다”는 사실을 읽을 수 있습니다.\n\n![도장발 쿵귀 최종 콘셉트](./media/stampfoot-leaper/v001/concept.png \"둥근 석조 몸체 아래 중앙 스프링과 넓은 붉은 도장발이 각각 하나뿐인 최종 정체성\")\n\n## 사용자 경험\n\n몬스터는 한 발로 지면을 튕기며 플레이어에게 접근합니다. 가까워지면 도장발을 바닥에 둔 채\n스프링과 몸을 낮게 압축하고, 공격 시작 순간의 플레이어 위치를 예고한 뒤 높은 포물선으로\n날아갑니다. 공중에서 플레이어를 다시 따라가지 않으므로 장판 밖으로 이동하면 피할 수 있습니다.\n\n착지에서는 도장발이 처음 평평하게 닿는 순간에만 피해와 충격파가 발생합니다. 공중 이동 그림과\n실제 판정이 따로 놀지 않도록 이 접지 순간을 전체 공격의 단일 기준 사건으로 정했습니다.\n\n## 핵심 원칙과 설계 철학\n\n### 한 발은 모든 프레임의 정체성이다\n\n중앙 스프링과 도장발은 각각 정확히 하나입니다. 점프가 커지거나 사망해 옆으로 쓰러져도 두 번째\n발, 분리된 보조 받침, 신발이나 발가락을 추가하지 않습니다. 앞으로 변형 애니메이션을 만들 때도\n이 규칙이 장식보다 우선합니다.\n\n### 공격은 세 단계로 나눈다\n\n도약 공격을 하나의 긴 그림으로 묶지 않고 준비, 공중, 착지로 나눴습니다. 이 구조는 회피 시간을\n바꿔도 준비 동작을 재사용하고, 점프 높이나 이동 시간을 조정해도 접지 피해 프레임을 고정할 수\n있게 합니다.\n\n| 단계 | 플레이어가 읽는 신호 | 최종 프레임 계약 |\n| --- | --- | ---: |\n| 준비 | 몸과 스프링이 점점 깊게 압축됨 | 8프레임 · 12 FPS |\n| 공중 | 스프링이 길게 늘고 정점에서 다시 접힘 | 6프레임 · 12 FPS |\n| 착지 | 첫 접지, 최대 압축, 반동, 안정화 | 8프레임 · 16 FPS |\n\n### 오른쪽 원화 하나를 좌우로 공유한다\n\n몸체 애니메이션은 오른쪽을 보는 East 원화만 저장합니다. 왼쪽은 게임에서 가로로 뒤집습니다.\n충격파는 방향과 관계없는 Omni 자산입니다. 같은 몬스터를 방향마다 다시 그리지 않아도 좌우\n전투 규칙을 유지할 수 있습니다.\n\n### 저장소에는 최종 사용 이미지 만 남긴다\n\n마젠타 원본, 개별 프레임, 고해상도 마스터, QA 캡처와 검토용 시트는 Git에 넣지 않습니다.\nRoblox 업로드에 사용하는 128px 가로 아틀라스와 MonsterDB에 보여 줄 최종 콘셉트만 제품\n리소스로 보존합니다. 중간 제작물이 최종 자산과 섞여 잘못 업로드되는 일을 막기 위한 경계입니다.\n\n## 현재 결과\n\n### 대기와 한 발 이동\n\n대기에서는 스프링의 길이와 몸 높이가 천천히 변하고, 이동에서는 압축과 신장이 더 크게 번갈아\n강시처럼 통통 튀는 리듬을 만듭니다.\n\n![대기 8프레임 아틀라스](./media/stampfoot-leaper/v001/idle-atlas.png \"도장발은 고정하고 중앙 스프링과 몸 높이만 변화하는 대기 동작\")\n\n![한 발 점프 이동 8프레임 아틀라스](./media/stampfoot-leaper/v001/hop-move-atlas.png \"한 발과 한 스프링으로 압축·상승·하강을 반복하는 이동 동작\")\n\n### 준비·공중·착지 공격\n\n![도약 준비 8프레임 아틀라스](./media/stampfoot-leaper/v001/attack-anticipation-atlas.png \"서 있을 때보다 훨씬 낮게 몸을 접어 공격 시작을 읽게 하는 준비 동작\")\n\n![공중 도약 6프레임 아틀라스](./media/stampfoot-leaper/v001/attack-airborne-atlas.png \"한 발을 몸 아래 유지한 채 상승·정점·하강 실루엣을 구분한 공중 동작\")\n\n![착지 8프레임 아틀라스](./media/stampfoot-leaper/v001/attack-land-atlas.png \"0부터 센 1번 프레임의 첫 접지를 피해와 충격파의 공통 사건으로 사용하는 착지 동작\")\n\n![착지 충격파 8프레임 아틀라스](./media/stampfoot-leaper/v001/impact-fx-atlas.png \"접지 순간 시작해 돌 조각과 청록색 고리가 퍼졌다 사라지는 방향 독립 효과\")\n\n### 피격과 사망\n\n![피격 6프레임 아틀라스](./media/stampfoot-leaper/v001/hit-atlas.png \"도장발 하나를 기준점으로 두고 스프링이 좌우로 휘었다 돌아오는 피격 반응\")\n\n![사망 12프레임 아틀라스](./media/stampfoot-leaper/v001/death-atlas.png \"새 받침을 만들지 않고 같은 도장발 하나와 몸체가 옆으로 쓰러져 동력을 잃는 사망 동작\")\n\n## 결정 사항과 범위\n\n- 이번 발행 범위는 최종 투명 아트 리소스, 재생 계약, 공격 구현 전달 문서입니다.\n- Roblox 이미지 업로드, MonsterDB 항목 추가, 서버 도약 궤적, 장판과 피해 구현은 포함하지\n  않습니다.\n- 표시 이름 `도장발 쿵귀`와 초깃값은 구현용 제안이며 실제 밸런스 작업에서 조정할 수 있습니다.\n- 이미지 생성 표면은 실제 사용 모델 이름을 검증 가능한 형태로 반환하지 않았으므로 특정\n  이미지 모델을 사용했다고 기록하지 않습니다.\n\n## 구현 참고\n\n런타임은 가로로 이어진 128×128 셀을 사용합니다. 이동 원화의 제작 이름은 HopMove이지만 기존\n공통 AI를 바꾸지 않도록 MonsterDB의 `Walk` 슬롯에 연결합니다. 공격은\n`AttackAnticipation → AttackAirborne → AttackLand` 순서이며, 착지의 0부터 센 프레임 1에서\n서버가 피해와 `ImpactFX`를 동시에 한 번 발생시키는 계약입니다.\n\n상세 데이터 필드, 포물선 공식, 지면·장애물 검사, 서버 권위 판정과 테스트 항목은\n`docs/gameplay/stampfoot-leaper-implementation-handoff.md`에 정리했습니다.\n\n## 검증\n\n- 콘셉트와 아틀라스 여덟 장은 모두 알파 채널과 실제 투명 픽셀을 가집니다.\n- 투명 픽셀의 RGB 오염, 반투명 마젠타 잔여 픽셀은 각각 0입니다.\n- 모든 아틀라스 높이는 128px이며 가로 폭은 `프레임 수 × 128px`입니다.\n- 몸체 전체 프레임을 육안으로 확인해 스프링 하나와 도장발 하나를 유지했습니다.\n- 이번 커밋은 게임 구현을 포함하지 않으므로 Studio 플레이 결과를 검증했다고 주장하지 않습니다.\n\n## 후속 기획\n\n다음 작업은 투명 아틀라스를 Roblox에 업로드해 실제 자산 ID를 얻고, MonsterDB에\n`TelegraphedLeapSlam` 전용 변수를 추가한 뒤 서버 권위 도약과 원형 착지 피해를 연결하는 것입니다.\n그때 F2 소환, 장판 회피, 높은 포물선, 접지 동기화, 피격과 사망을 Studio MCP Play에서 실제로\n검증하고 게임 구현 결과를 별도 위키 버전으로 발행합니다.\n",
          "source_path": "wiki/content/pages/stampfoot-leaper/v001.md",
          "timeline_order": 47
        }
      ]
    },
    {
      "id": "backpack-combat-stat-database",
      "title": "백팩 전투 능력치 데이터베이스",
      "summary": "자동 공격과 공간 배치가 함께 빌드를 만드는 PackBound를 위해 경쟁작의 능력치·상태·발동·배치 문법을 분류하고, 실제 개발 우선순위와 현재 완료 수준을 하나의 기준표로 확정했습니다.",
      "status": "active",
      "category": "gameplay",
      "tags": [
        "combat",
        "stats",
        "backpack",
        "auto-attack",
        "projectile",
        "status-effect",
        "spatial-rule",
        "research",
        "roadmap"
      ],
      "created_at": "2026-08-06",
      "updated_at": "2026-08-06",
      "authors": [
        "Codex"
      ],
      "version": 1,
      "change_type": "created",
      "change_summary": "백팩류 경쟁작 리서치를 PackBound의 능력치·상태 효과·발동 조건·공간 조건 데이터베이스로 전환하고, 데이터 정의와 실제 런타임 완성을 구분한 우선순위 로드맵을 수립했습니다.",
      "supersedes": null,
      "sources": [
        "docs/gameplay/item-stats.md",
        "src/ReplicatedStorage/ItemStats",
        "tests/ItemStats.spec.luau",
        "tools/test_item_stats.sh"
      ],
      "related": [
        "inventory-item-concept",
        "project-overview"
      ],
      "validation": [
        "./tools/test_item_stats.sh",
        "rojo build default.project.json --output /tmp/PackBound-backpack-stat-wiki.rbxlx",
        "python3 tools/wiki.py build",
        "python3 tools/wiki.py check",
        "python3 -m unittest tests/test_wiki.py",
        "git diff --check"
      ],
      "source_path": "wiki/content/pages/backpack-combat-stat-database/v001.md",
      "body": "# 백팩 전투 능력치 데이터베이스\n\n## 기획 배경과 목표\n\nPackBound는 공격 버튼을 반복해서 누르는 게임이 아니라, 백팩에 넣은 아이템이 각자의\n주기와 조건에 따라 자동으로 공격하는 아케이드 RPG입니다. 플레이어의 전투 판단은 조작\n횟수보다 어떤 아이템을 선택하고 어디에 배치하며 어떤 시너지를 연결했는지에서 나와야\n합니다. 따라서 능력치 체계는 단순히 숫자를 많이 제공하는 대신 자동 공격, 투사체 변화와\n공간 퍼즐을 같은 문법으로 조합할 수 있어야 합니다.\n\n이 문서는 Backpack Hero, Backpack Battles, Backpack Brawl과 God of Weapons에서 반복해서\n사용되는 전투 수치와 배치 규칙을 조사해 PackBound에 맞는 데이터베이스로 정리합니다.\n경쟁작의 이름과 계산식을 그대로 복제하지 않고, 실시간 이동과 자동 공격에서 읽기 쉽고\n밸런스하기 쉬운 형태만 채택합니다.\n\n## 사용자 경험\n\n- 같은 무기도 주변 아이템, 활성 칸, 투사체 옵션과 상태 효과에 따라 다른 빌드가 됩니다.\n- 아이템 설명에서 수치, 조건, 발동 시점과 대상이 분명히 분리되어 결과를 예측할 수 있습니다.\n- 공격이 자동이어도 쿨타임, 사거리, 투사체 경로와 배치 시너지로 충분한 선택 차이가 생깁니다.\n- 빗나감이나 공용 자원 고갈처럼 공격이 이유 없이 멈춘 것처럼 보이는 요소는 초기 전투에서\n  강제하지 않습니다.\n- 개발 화면과 위키에서는 데이터가 존재하는 상태와 실제 플레이에 연결된 상태를 구분합니다.\n\n## 핵심 원칙과 설계 철학\n\n### 다섯 계층을 분리한다\n\n| 계층 | 책임 | 예시 |\n| --- | --- | --- |\n| 영구 능력치 | 장비와 성장으로 합산되는 수치 | 공격력, 쿨타임 감소, 관통 횟수 |\n| 전투 자원 | 전투 중 소비·회복되는 현재값 | 체력, 보호막, 마나, 스태미나 |\n| 상태 효과 | 시간과 중첩을 가지는 임시 변화 | 화상, 중독, 가속, 취약 |\n| 발동 조건 | 효과가 실행되는 시점 | 명중 시, 치명타 시, 피격 시 |\n| 공간 조건 | 백팩에서 대상을 찾는 방법 | 근처, 활성 칸, 연결망, 빈칸 |\n\n`Heat`, `Cold`, `Rage`처럼 전투 중 변하는 값은 영구 `StatId`가 아니라 가속, 둔화,\n강화 상태로 표현합니다. 화상·독·빙결도 숫자 능력치에 섞지 않고 상태 효과 카탈로그가\n관리합니다. 이 경계가 유지되어야 아이템 데이터가 하나의 거대한 예외 테이블이 되지 않습니다.\n\n### 데이터 정의와 플레이 완성을 다르게 표시한다\n\n현재 `ItemStats`는 능력치 ID, 합산·상한 계산과 백팩 공간 판정을 제공합니다. 아직 실제\n적 탐색, 자동 공격, 피해 처리와 HUD가 이 값을 소비하지 않으므로 전체 전투 기능이 완료된\n것은 아닙니다. 이 문서의 완료 여부는 다음 두 열로 나눕니다.\n\n| 표기 | 의미 |\n| --- | --- |\n| 데이터 완료 | ID, 단위, 기본값, 제한 또는 공간 평가 계약이 소스에 존재함 |\n| 부분 완료 | 일부 계산이나 판정은 있지만 개별 테스트 또는 런타임 연결이 부족함 |\n| 런타임 완료 | 실제 서버 전투와 플레이 화면이 사용하고 검증됨 |\n| 미개발 | 현재 저장소에 계약과 런타임이 없음 |\n| 보류 | 장르 사례는 있으나 현재 제품 경험에는 바로 도입하지 않음 |\n\n### 우선순위는 플레이 가능한 세로 조각을 기준으로 한다\n\n| 우선순위 | 기준 |\n| --- | --- |\n| P0 | 첫 자동 전투가 성립하려면 반드시 필요한 기반 |\n| P1 | 첫 빌드 다양성과 백팩 퍼즐을 만드는 핵심 확장 |\n| P2 | 콘텐츠 폭과 고급 조합을 늘리는 후속 기능 |\n| P3 | 복잡도나 불쾌감 위험이 있어 플레이테스트 후 결정할 실험 |\n\n## 레퍼런스 조사\n\n### Backpack Hero\n\nBackpack Hero는 아이템 모양과 별도의 효과 영역, 인접·대각선·행·열·빈칸·포켓·연결망을\n사용합니다. 아이템 사용, 파괴, 이동과 생성도 별도 효과로 취급하며, 마나석과 전도성\n아이템은 인접 연결망을 만듭니다. 이 구조는 PackBound의 `ActiveCells`와 후속 `Connected`,\n`Contained`, `EmptyCell` 조건의 직접적인 참고입니다.\n\n- [아이템과 효과 영역](https://backpack-hero.com/mods/JSON_Reference/Items/)\n- [무기와 인접·대각선·방향 조건](https://backpackhero.wiki.gg/wiki/Weapons)\n- [방어구와 빈칸·행 조건](https://backpackhero.wiki.gg/wiki/Armor)\n- [마나 연결망](https://backpackhero.wiki.gg/wiki/Manastone)\n- [상태 효과](https://backpackhero.wiki.gg/wiki/Status_Effects)\n\n### Backpack Battles\n\nBackpack Battles는 정확도, 쿨타임과 치명타를 공격의 기본 계약으로 사용하고, Empower,\nHeat, Luck, Mana, Regeneration, Spikes와 Vampirism을 누적 강화로 사용합니다. Blind, Cold,\nPoison은 반대 축의 약화이며 Block, Invulnerability, Reflect, Resist, Stun은 별도 전투\n규칙입니다. 별과 다이아몬드 칸은 아이템 주변의 특정 위치를 활성 대상으로 지정합니다.\n\n- [전투·강화·약화·별 칸 메커니즘](https://backpackbattles.wiki.gg/wiki/Game_Mechanics)\n- [강화 효과 목록](https://backpackbattles.wiki.gg/wiki/Buff)\n- [지속 전투 종료를 위한 Fatigue](https://backpackbattles.wiki.gg/wiki/Fatigue)\n\n### Backpack Brawl\n\nBackpack Brawl의 공격 아이템은 피해 범위, 쿨타임, 정확도, 스태미나 비용·초당 비용,\n치명타 확률과 치명타 피해를 가집니다. 상태 효과는 Empower, Haste, Lifesteal, Luck,\nMana, Regeneration, Thorns와 Poison, Bleed, Burn, Chill, Blind, Curse, Insanity, Stun으로\n확장됩니다. 별 칸에 연결된 아이템 종류와 개수를 발동 조건에 적극 사용합니다.\n\n- [능력치가 표시된 무기 사례](https://backpackbrawl.wiki.gg/wiki/Cataclysm)\n- [강화·약화 효과 목록](https://backpackbrawl.wiki.gg/wiki/Backpack_Brawl_Wiki/effects)\n- [근접 무기·펫·방어구·가방 타입](https://backpackbrawl.wiki.gg/wiki/Item_Types)\n\n### God of Weapons\n\nGod of Weapons는 실시간 이동과 자동 공격을 결합하므로 PackBound와 가장 가까운 전투\n참고입니다. 근접·투사체·마법 위력, 공격 속도, 사거리, 넉백, 회피, 흡혈, 자연 회복,\n부활, 방어, 상점 행운과 획득량을 사용합니다. 무기에는 공격 주기, 치명타, 사거리,\n관통·반사·폭발과 인접 아이템 시너지가 함께 존재합니다.\n\n- [캐릭터 능력치](https://godofweapons.wiki.gg/wiki/Stats)\n- [무기와 투사체 특성](https://godofweapons.wiki.gg/wiki/Weapons)\n\n## 영구 능력치 데이터베이스\n\n### 현재 정의된 핵심·증가 능력치\n\n아래 항목은 데이터와 계산기가 존재하지만 자동 공격·피해 런타임에는 아직 연결되지\n않았습니다. 따라서 `데이터 완료`와 `런타임 미개발`을 동시에 표시합니다.\n\n| ID | 표시명 | 우선순위 | 데이터 계약 | 런타임 적용 | 결정 |\n| --- | --- | --- | --- | --- | --- |\n| `AttackPower` | 공격력 | P0 | 완료 | 미개발 | 기본 피해량으로 채택 |\n| `Defense` | 방어력 | P0 | 완료 | 미개발 | 지속 피해 감소용으로 채택 |\n| `MaxHealth` | 최대 체력 | P0 | 완료 | 미개발 | 캐릭터 생존 기반으로 채택 |\n| `AttackCooldown` | 공격 쿨타임 | P0 | 완료 | 미개발 | 무기별 독립 자동 공격 타이머 |\n| `AttackRange` | 공격 사거리 | P0 | 완료 | 미개발 | 무기별 독립 대상 탐색 거리 |\n| `AttackPowerIncrease` | 공격력 증가율 | P0 | 완료 | 미개발 | 기본 공격력에 곱연산 |\n| `DefenseIncrease` | 방어력 증가율 | P0 | 완료 | 미개발 | 기본 방어력에 곱연산 |\n| `MaxHealthIncrease` | 최대 체력 증가율 | P0 | 완료 | 미개발 | 기본 최대 체력에 곱연산 |\n| `CooldownReduction` | 쿨타임 감소율 | P0 | 완료 | 미개발 | 최대 80%, 공격 속도와 중복 ID 금지 |\n| `AttackRangeIncrease` | 사거리 증가율 | P1 | 완료 | 미개발 | 기본 사거리에 곱연산 |\n\n### 현재 정의된 투사체 능력치\n\n| ID | 표시명 | 우선순위 | 데이터 계약 | 런타임 적용 | 결정 |\n| --- | --- | --- | --- | --- | --- |\n| `AdditionalProjectileCount` | 추가 투사체 수 | P1 | 완료 | 미개발 | 기본 1발에 정수 가산 |\n| `ProjectilePierceCount` | 관통 횟수 | P1 | 완료 | 미개발 | 첫 대상 이후 추가 대상 수 |\n| `ProjectileSplitCount` | 분열 수 | P1 | 완료 | 미개발 | 분열 시 생성되는 자식 수 |\n| `ProjectileRicochetCount` | 도탄 횟수 | P1 | 완료 | 미개발 | 적 또는 벽 도탄에 사용 |\n| `ProjectileSpeedIncrease` | 투사체 속도 증가 | P1 | 완료 | 미개발 | 이동 속도 배율 |\n| `ProjectileSizeIncrease` | 투사체 크기 증가 | P2 | 완료 | 미개발 | 시각 크기와 충돌 판정 계약 필요 |\n| `ProjectileDamageIncrease` | 투사체 피해 증가 | P1 | 완료 | 미개발 | 투사체 공격에만 적용 |\n| `ProjectileHomingStrength` | 투사체 유도력 | P2 | 완료 | 미개발 | 0~1 범위, 조향 알고리즘 필요 |\n\n### 현재 정의된 전투 보조 능력치\n\n| ID | 표시명 | 우선순위 | 데이터 계약 | 런타임 적용 | 결정 |\n| --- | --- | --- | --- | --- | --- |\n| `CriticalChance` | 치명타 확률 | P1 | 완료 | 미개발 | 0~100% 확률 |\n| `CriticalDamageMultiplier` | 치명타 피해 배율 | P1 | 완료 | 미개발 | 기본 1.5배 |\n| `DodgeChance` | 회피 확률 | P2 | 완료 | 미개발 | 최대 75%, 연속 회피 체감 검증 필요 |\n| `LifeSteal` | 생명력 흡수 | P2 | 완료 | 미개발 | 가한 피해 비율 회복으로 의미 고정 |\n| `MoveSpeedIncrease` | 이동 속도 증가 | P1 | 완료 | 미개발 | 캐릭터 이동 컨트롤러 연결 필요 |\n| `KnockbackPower` | 밀쳐내기 위력 | P1 | 완료 | 미개발 | 적 물리·경직 계약과 함께 구현 |\n\n### 추가 채택할 공격·투사체 능력치\n\n| 제안 ID | 표시명 | 우선순위 | 데이터 계약 | 런타임 적용 | 채택 결정 |\n| --- | --- | --- | --- | --- | --- |\n| `ArmorPenetration` | 방어 관통 | P1 | 미개발 | 미개발 | 채택, 방어 빌드 대응 축 |\n| `AreaSizeIncrease` | 효과 범위 증가 | P1 | 미개발 | 미개발 | 채택, 폭발·근접·장판 공통 배율 |\n| `ChainCount` | 연쇄 횟수 | P1 | 미개발 | 미개발 | 채택, 번개·연쇄 공격 공통값 |\n| `ExecuteThreshold` | 처형 기준 | P2 | 미개발 | 미개발 | 채택, 희귀 효과 전용 |\n| `StatusApplicationChance` | 상태 부여 확률 | P1 | 미개발 | 미개발 | 채택, 개별 효과 기본 확률 보정 |\n| `StatusPowerIncrease` | 상태 효과 증가 | P1 | 미개발 | 미개발 | 채택, 상태 피해·효과량 공통 보정 |\n| `StatusDurationIncrease` | 상태 지속시간 증가 | P1 | 미개발 | 미개발 | 채택, 실시간 상태용 |\n| `ProjectileExplosionRadius` | 투사체 폭발 범위 | P1 | 미개발 | 미개발 | 채택, 폭발 투사체 기본값 |\n| `ProjectileChainCount` | 투사체 연쇄 횟수 | P2 | 미개발 | 미개발 | `ChainCount`와 통합 가능성 검토 |\n| `PierceDamageRetention` | 관통 피해 유지율 | P1 | 미개발 | 미개발 | 채택, 관통 횟수 증가의 밸런스 장치 |\n| `RicochetDamageRetention` | 도탄 피해 유지율 | P1 | 미개발 | 미개발 | 채택, 도탄 후 피해 감쇠 |\n| `SplitDamageRetention` | 분열 피해 유지율 | P1 | 미개발 | 미개발 | 채택, 자식 투사체 피해 감쇠 |\n| `Accuracy` | 명중률 | P3 | 미개발 | 미개발 | 보류, 자동 공격 실패가 고장처럼 보일 위험 |\n\n### 추가 채택할 방어·회복 능력치\n\n| 제안 ID | 표시명 | 우선순위 | 데이터 계약 | 런타임 적용 | 채택 결정 |\n| --- | --- | --- | --- | --- | --- |\n| `HealthRegeneration` | 초당 체력 회복 | P1 | 미개발 | 미개발 | 채택, 지속 생존 빌드 |\n| `ThornsDamage` | 가시 피해 | P1 | 미개발 | 미개발 | 채택, 근접 피격 반격 기본값 |\n| `HealingIncrease` | 주는 회복 증가 | P2 | 미개발 | 미개발 | 채택, 회복 효과 소유자 기준 |\n| `HealingReceivedIncrease` | 받는 회복 증가 | P2 | 미개발 | 미개발 | 채택, 탱커·지원 효과 분리 |\n| `DamageReduction` | 최종 피해 감소 | P2 | 미개발 | 미개발 | 제한 채택, 방어력과 별도 상한 필요 |\n| `StatusResistance` | 상태 저항 | P1 | 미개발 | 미개발 | 채택, 부여 확률·지속시간 중 계산식 확정 필요 |\n| `CriticalResistance` | 치명타 저항 | P2 | 미개발 | 미개발 | 채택, 적 치명타 콘텐츠 이후 |\n| `ReviveCount` | 부활 횟수 | P3 | 미개발 | 미개발 | 보류, 희귀 유물과 전투 흐름 검증 후 도입 |\n\n### 선택적 자원·경제 능력치\n\n| 제안 ID | 표시명 | 우선순위 | 상태 | 채택 결정 |\n| --- | --- | --- | --- | --- |\n| `MaxStamina` | 최대 스태미나 | P3 | 보류 | 무기 과밀 제어가 필요할 때만 프로토타입 |\n| `StaminaRegeneration` | 스태미나 회복 | P3 | 보류 | 공격이 멈추는 체감 위험과 함께 검증 |\n| `AttackStaminaCost` | 공격 스태미나 비용 | P3 | 보류 | 모든 무기에 강제하지 않음 |\n| `MaxMana` | 최대 마나 | P2 | 미개발 | 마법·연결망 빌드가 생길 때 채택 |\n| `ManaRegeneration` | 마나 회복 | P2 | 미개발 | 연결망과 함께 구현 |\n| `ChargeCount` | 충전 수 | P2 | 미개발 | 제한 사용·폭발 아이템용 |\n| `UseCount` | 사용 횟수 | P2 | 미개발 | 소모품과 전투당 횟수 제한용 |\n| `LootLuck` | 전리품 행운 | P3 | 보류 | 전투 정확도 Luck과 이름을 공유하지 않음 |\n| `GoldGainIncrease` | 골드 획득 증가 | P3 | 보류 | 경제 밸런스 구축 후 도입 |\n| `ExperienceGainIncrease` | 경험치 획득 증가 | P3 | 보류 | 성장 곡선 구축 후 도입 |\n\n## 전투 자원 데이터베이스\n\n| 자원 | 우선순위 | 개발 상태 | 규칙 |\n| --- | --- | --- | --- |\n| 현재 체력 | P0 | 미개발 | 최대 체력과 분리된 서버 권위 현재값 |\n| 보호막 | P0 | 미개발 | 방어력 적용 전후 순서를 확정하고 먼저 소모되는 임시값 |\n| 무기 쿨타임 진행도 | P0 | 미개발 | 무기 인스턴스별 독립 타이머 |\n| 상태 효과 중첩·잔여시간 | P1 | 미개발 | 효과 ID별 중첩 정책과 만료 시각 |\n| 마나 | P2 | 미개발 | 마법·연결망 아이템 전용 선택 자원 |\n| 스태미나 | P3 | 보류 | 공용 자동 공격 제한이 필요할 때만 도입 |\n| 충전·사용 횟수 | P2 | 미개발 | 아이템 인스턴스 또는 전투 단위로 초기화 |\n\n`Defense`와 보호막은 통합하지 않습니다. 방어력은 지속적인 피해 감소이고 보호막은 전투\n중 생성·소모되는 현재값입니다. `DamageReduction`은 두 계산 이후 적용되는 제한적인 특수\n효과로 두어 같은 방어 개념이 중복 증폭되지 않게 합니다.\n\n## 상태 효과 데이터베이스\n\n### 강화 효과\n\n| ID | 표시명 | 우선순위 | 개발 상태 | 기본 의미 |\n| --- | --- | --- | --- | --- |\n| `Empower` | 강화 | P1 | 미개발 | 중첩당 공격력 증가 |\n| `Haste` | 가속 | P1 | 미개발 | 아이템 쿨타임 진행 속도 증가 |\n| `Barrier` | 보호막 | P0 | 미개발 | 임시 피해 흡수량 획득 |\n| `Regeneration` | 재생 | P1 | 미개발 | 일정 주기 체력 회복 |\n| `Thorns` | 가시 | P1 | 미개발 | 근접 피격 시 반사 피해 |\n| `Vampirism` | 흡혈 강화 | P2 | 미개발 | 제한 시간 생명력 흡수 증가 |\n| `Invulnerable` | 무적 | P2 | 미개발 | 짧은 시간 피해 무효화 |\n| `StatusResist` | 상태 방어 | P1 | 미개발 | 다음 해로운 효과 또는 중첩 차단 |\n| `ReflectDebuff` | 약화 반사 | P2 | 미개발 | 다음 해로운 효과를 시전자에게 반사 |\n\n### 약화 효과\n\n| ID | 표시명 | 우선순위 | 개발 상태 | 기본 의미 |\n| --- | --- | --- | --- | --- |\n| `Poison` | 중독 | P1 | 미개발 | 일정 주기의 중첩 피해 |\n| `Burn` | 화상 | P1 | 미개발 | 짧고 빠른 지속 피해, 재부여 시 지속 갱신 |\n| `Bleed` | 출혈 | P2 | 미개발 | 이동 또는 공격 행동에 반응하는 피해 |\n| `Chill` | 냉기 | P1 | 미개발 | 이동·공격 속도 감소 |\n| `Freeze` | 빙결 | P2 | 미개발 | 짧은 행동 불가 또는 냉기 임계 효과 |\n| `Weak` | 약화 | P1 | 미개발 | 주는 피해 감소 |\n| `Vulnerable` | 취약 | P1 | 미개발 | 받는 피해 증가 |\n| `Blind` | 실명 | P3 | 보류 | 정확도 채택 전에는 대상 탐색 방해로만 검토 |\n| `Stun` | 기절 | P2 | 미개발 | 이동·아이템 쿨타임을 짧게 정지 |\n| `Curse` | 저주 | P3 | 보류 | 일반 해제 규칙을 벗어나는 장기 약화 |\n\nPoison, Burn과 Bleed는 모두 지속 피해지만 같은 효과의 색상 변형으로 만들지 않습니다.\n중독은 안정적인 중첩 피해, 화상은 짧고 빠른 피해, 출혈은 행동에 반응하는 피해로 역할을\n나눕니다. Chill과 Freeze도 속도 감소와 행동 불가로 구분합니다.\n\n## 백팩 공간 조건 데이터베이스\n\n### 현재 구현된 조건\n\n| 관계 ID | 의미 | 우선순위 | 평가기 | 직접 테스트 | 런타임 연결 |\n| --- | --- | --- | --- | --- | --- |\n| `Nearby` | 상하좌우 변이 맞닿음 | P0 | 완료 | 완료 | 미개발 |\n| `Active` | 비인접 지정 활성 칸과 겹침 | P0 | 완료 | 완료 | 미개발 |\n| `Diagonal` | 변 접촉 없이 모서리만 맞닿음 | P1 | 완료 | 완료 | 미개발 |\n| `SameRow` | 하나 이상의 점유 칸이 같은 행 | P1 | 완료 | 미개발 | 미개발 |\n| `SameColumn` | 하나 이상의 점유 칸이 같은 열 | P1 | 완료 | 미개발 | 미개발 |\n| `Above` | 소스 경계보다 위에 위치 | P1 | 완료 | 미개발 | 미개발 |\n| `Below` | 소스 경계보다 아래에 위치 | P1 | 완료 | 미개발 | 미개발 |\n| `Left` | 소스 경계보다 왼쪽에 위치 | P1 | 완료 | 미개발 | 미개발 |\n| `Right` | 소스 경계보다 오른쪽에 위치 | P1 | 완료 | 미개발 | 미개발 |\n| `Anywhere` | 백팩 어디에 있어도 대상 | P1 | 완료 | 미개발 | 미개발 |\n\n`Nearby`는 다칸 아이템의 어느 점유 칸과든 변을 공유하면 성립합니다. `Active`는 아이템이\n작성한 원거리 활성 칸에 대상 점유 칸이 겹칠 때 성립하며, 활성 칸은 소스 본체와 겹치거나\n인접할 수 없습니다. 이 구분은 Backpack Hero의 효과 영역과 Backpack Battles·Brawl의 별\n칸을 하나의 PackBound 용어로 통합합니다.\n\n### 추가 채택할 조건\n\n| 제안 ID | 의미 | 우선순위 | 개발 상태 | 채택 결정 |\n| --- | --- | --- | --- | --- |\n| `Connected` | 같은 연결망으로 이어짐 | P1 | 미개발 | 채택, 마나·전기·기계 빌드 |\n| `Contained` | 지정 포켓이나 컨테이너 내부 | P1 | 미개발 | 채택, 소모품·탄약 묶음 |\n| `EmptyNearbyCell` | 근처 빈칸 수 | P1 | 미개발 | 채택, 공간을 비우는 선택 보상 |\n| `EmptyRowCell` | 같은 행의 빈칸 수 | P2 | 미개발 | 채택, 방향성 무기용 |\n| `Isolated` | 근처에 다른 아이템이 없음 | P1 | 미개발 | 채택, 큰 무기와 고립 빌드 |\n| `TopRow` | 최상단 행에 배치됨 | P1 | 미개발 | 채택, 헬멧·상단 장치 |\n| `BottomRow` | 최하단 행에 배치됨 | P1 | 미개발 | 채택, 신발·무거운 장비 |\n| `Edge` | 백팩 외곽에 접함 | P2 | 미개발 | 채택, 방어·벽면 장비 |\n| `Corner` | 백팩 모서리에 위치 | P2 | 미개발 | 채택, 제한적 고효율 효과 |\n| `Facing` | 아이템이 바라보는 방향 | P1 | 미개발 | 채택, 활·총·방패 방향성 |\n| `SameTypeCount` | 같은 태그 아이템 수 | P1 | 미개발 | 채택, 테마 집중 빌드 |\n| `DifferentTypeCount` | 서로 다른 태그 수 | P2 | 미개발 | 채택, 혼합 빌드 |\n| `FreeSlotCount` | 백팩 전체 빈칸 수 | P1 | 미개발 | 채택, 공간 효율과 성능의 교환 |\n| `OverlapEffectArea` | 여러 활성 영역이 겹침 | P2 | 미개발 | 검토, 효과 중복과 시각화 필요 |\n| `PocketCount` | 분리된 백팩 구역 수 | P3 | 보류 | 포켓 시스템 확정 후 결정 |\n\n## 발동 조건 데이터베이스\n\n현재 `BackpackRuleEvaluator`는 배치에 따른 수동 평가 결과만 반환합니다. 전투 사건을\n구독하고 효과를 실행하는 Trigger 시스템은 아직 없습니다.\n\n| Trigger ID | 표시명 | 우선순위 | 개발 상태 | 사용 예시 |\n| --- | --- | --- | --- | --- |\n| `OnCombatStart` | 전투 시작 시 | P0 | 미개발 | 보호막 획득, 첫 투사체 생성 |\n| `OnInterval` | 일정 시간마다 | P0 | 미개발 | 자동 회복, 장판 발생 |\n| `OnAttackAttempt` | 공격 시도 시 | P0 | 미개발 | 발사 전 비용·효과 처리 |\n| `OnHit` | 명중 시 | P0 | 미개발 | 중독 부여, 흡혈 |\n| `OnCriticalHit` | 치명타 시 | P1 | 미개발 | 분열, 추가 상태 부여 |\n| `OnMiss` | 빗나감 시 | P3 | 보류 | 정확도 시스템 채택 후 사용 |\n| `OnDamaged` | 피해를 받을 때 | P0 | 미개발 | 가시, 보호막 반응 |\n| `OnKill` | 적 처치 시 | P1 | 미개발 | 영구 강화, 아이템 생성 |\n| `OnHealthThreshold` | 체력 기준 통과 시 | P1 | 미개발 | 50% 이하 가속, 1회 회복 |\n| `OnProjectilePierce` | 투사체 관통 시 | P1 | 미개발 | 관통 피해 변화 |\n| `OnProjectileRicochet` | 투사체 도탄 시 | P1 | 미개발 | 도탄마다 강화 |\n| `OnProjectileSplit` | 투사체 분열 시 | P1 | 미개발 | 자식 투사체 옵션 적용 |\n| `OnAdjacentItemActivated` | 인접 아이템 발동 시 | P1 | 미개발 | 연계 공격, 쿨타임 전진 |\n| `OnConsumableConsumed` | 소모품 소진 시 | P2 | 미개발 | 빈 용기 생성, 주변 강화 |\n| `OnItemCreated` | 아이템 생성 시 | P2 | 미개발 | 생성물 수에 따른 효과 |\n| `OnItemDestroyed` | 아이템 파괴 시 | P2 | 미개발 | 폭발, 인접 효과 갱신 |\n| `OnItemMoved` | 아이템 이동 시 | P3 | 보류 | 전투 중 재배치가 생길 때 사용 |\n| `OnStatusApplied` | 상태 부여 시 | P1 | 미개발 | 상태 연쇄·반사 |\n| `OnStatusCleansed` | 상태 해제 시 | P1 | 미개발 | 정화 보상 |\n| `OnEmptyCellChanged` | 빈칸 수 변화 시 | P2 | 미개발 | 공간 기반 수치 재계산 |\n\nTrigger는 `Trigger + Condition + Effect + Target` 네 요소로 저작합니다. 상태 효과와\n투사체 사건은 Trigger를 발생시키지만 Trigger 자체가 능력치 값을 소유하지 않습니다.\n\n## 태그 데이터베이스\n\n현재 태그는 공간 조건에서 구체적인 아이템 이름 대신 확장 가능한 분류를 선택하기 위해\n사용됩니다.\n\n| 그룹 | 현재 데이터 완료 태그 | 후속 제안 |\n| --- | --- | --- |\n| 대분류 | Weapon, Armor, Ammo, Accessory, Consumable, Material, Treasure | Pet, Structure, Container |\n| 공격 방식 | Melee, Ranged, Projectile, Magic | Summon, Area, Channel |\n| 무기 | Sword, Bow, Gun, Wand, Staff, Dagger, Spear, Axe, Hammer | Crossbow, Launcher |\n| 탄약 | Arrow, Bullet, Bolt | Shell, Rocket |\n| 방어구 | Shield, Helmet, ChestArmor, LegArmor, Shoes, Gloves, Cloak | Belt |\n| 장신구 | Ring, Amulet, Relic, Charm | Totem |\n| 소모품 | Food, Potion, Healing, Stamina | Bomb, Scroll |\n\n모든 아이템은 대분류 하나와 적용 가능한 세부 태그를 함께 가집니다. 예를 들어 장궁은\n`Weapon`, `Ranged`, `Projectile`, `Bow`를 사용하고 화살 묶음은 `Ammo`, `Projectile`,\n`Arrow`를 사용합니다. `Luck`처럼 게임마다 뜻이 다른 개념은 태그나 능력치 이름으로\n포괄하지 않고 `LootLuck`, `Accuracy`처럼 용도를 명시합니다.\n\n## 현재 결과와 완료 현황\n\n| 영역 | 현재 결과 | 완료 수준 | 다음 완료 조건 |\n| --- | --- | --- | --- |\n| 능력치 타입·메타데이터 | 24개 StatId와 단위·기본값·상한 | 데이터 완료 | 신규 채택 ID 추가 |\n| 능력치 계산 | 기본값, 합산, 증가율, 쿨타임·확률 상한 | 계산 완료 | 서버 전투 소비자 연결 |\n| 아이템 태그 | 무기·방어구·탄약·장신구·소모품 분류 | 데이터 완료 | 실제 ItemCatalog 등록 |\n| 공간 관계 | 10개 관계와 태그 선택자·중첩·대상 | 평가기 완료 | 인벤토리 배치 이벤트 연결 |\n| 공간 테스트 | Nearby, Active, Diagonal과 잘못된 활성 칸 | 부분 완료 | 나머지 7개 관계 직접 테스트 |\n| 자동 공격 | 없음 | 미개발 | 무기별 타이머·대상 탐색·공격 사건 |\n| 피해 해결 | 없음 | 미개발 | 서버 권위 피해·방어·치명타 파이프라인 |\n| 투사체 런타임 | 없음 | 미개발 | 생성·이동·충돌·관통·도탄·분열 |\n| 상태 효과 | 없음 | 미개발 | 중첩·지속·주기·해제 정책 |\n| Trigger 시스템 | 없음 | 미개발 | 사건 버스와 조건·효과 실행기 |\n| HUD·툴팁 | 없음 | 미개발 | 최종 수치와 활성 배치 효과 표시 |\n\n## 구현 참고\n\n| 경로 | 책임 |\n| --- | --- |\n| `src/ReplicatedStorage/ItemStats/Definitions.luau` | 현재 24개 능력치의 표시명, 단위, 기본값과 제한 |\n| `src/ReplicatedStorage/ItemStats/Calculator.luau` | 능력치 블록 검증·합산과 최종 수치 계산 |\n| `src/ReplicatedStorage/ItemStats/Types.luau` | 능력치, 배치, 조건, 효과와 평가 결과 타입 |\n| `src/ReplicatedStorage/ItemStats/BackpackRuleEvaluator.luau` | 태그 선택과 공간 관계·중첩·적용 대상 평가 |\n| `src/ReplicatedStorage/ItemStats/ItemTags.luau` | 아이템 분류 태그 |\n| `tests/ItemStats.spec.luau` | 계산 상한과 Nearby·Active·Diagonal 회귀 검증 |\n\n현재 Calculator는 하나의 무기 기본 쿨타임·사거리와 소유자·백팩 보너스를 함께 계산하는\n용도입니다. 여러 무기의 기본 쿨타임과 사거리를 한 블록에 더하지 않습니다. 각 자동 공격\n무기는 독립 타이머와 대상 탐색을 가져야 합니다.\n\n## 개발 로드맵\n\n### P0: 자동 전투 세로 조각\n\n1. 캐릭터·아이템 능력치 블록을 서버에서 합산합니다.\n2. 무기별 쿨타임과 사거리로 가장 가까운 유효 적을 탐색합니다.\n3. 공격 시도, 명중과 피격 사건을 정의합니다.\n4. 공격력, 방어력, 체력, 보호막과 치명타를 서버 피해 파이프라인에 연결합니다.\n5. 현재 능력치와 활성 백팩 효과를 툴팁에서 확인할 수 있게 합니다.\n\n### P1: 첫 빌드 다양성\n\n1. 관통·도탄·분열과 피해 유지율을 구현합니다.\n2. 화상, 중독, 냉기, 약화, 취약과 가속·강화 상태를 구현합니다.\n3. Connected, Contained, EmptyCell, Isolated, TopRow와 BottomRow 조건을 추가합니다.\n4. 명중·치명타·처치·피격·상태 부여 Trigger를 연결합니다.\n5. 나머지 공간 관계와 상태 중첩 정책을 자동화 테스트로 고정합니다.\n\n### P2: 콘텐츠 확장\n\n폭발·연쇄·출혈·빙결·기절, 마나 연결망, 제한 사용 아이템, 치명타 저항과 고급 배치\n조건을 추가합니다. P0·P1의 전투 로그와 툴팁이 안정된 뒤 진행합니다.\n\n### P3: 플레이테스트 기반 실험\n\n정확도, 공용 스태미나, 부활, 저주와 경제 능력치는 즉시 도입하지 않습니다. 자동 공격이\n자주 빗나가거나 자원 부족으로 멈추면 플레이어에게 시스템 고장처럼 보일 수 있습니다.\n무기 수 증가를 제어할 다른 수단이 부족하다는 데이터가 확인될 때 별도 프로토타입합니다.\n\n## 검증과 완료 기준\n\n이번 문서는 현재 커밋된 `ItemStats` 소스와 테스트를 기준으로 완료 상태를 대조했습니다.\n능력치 계산 테스트는 핵심·증가 수치, 쿨타임·회피 상한, 추가 투사체, 알 수 없는 ID 거부를\n확인합니다. 공간 테스트는 근처, 활성, 대각선이 서로 중복되지 않고 소스 본체와 인접한\n활성 칸을 거부하는지 확인합니다. Rojo 빌드로 `ReplicatedStorage.ItemStats` 패키지가\n플레이스에 포함되는지도 검증합니다.\n\n앞으로 하나의 항목을 `런타임 완료`로 변경하려면 다음 조건을 모두 만족해야 합니다.\n\n- 데이터 계약과 유효 범위가 정의되어 있습니다.\n- 서버 권위 런타임에서 실제 효과가 적용됩니다.\n- 툴팁 또는 전투 피드백으로 플레이어가 결과를 확인할 수 있습니다.\n- 정상, 상한, 중첩과 해제 경계가 자동화 테스트로 검증됩니다.\n- 시각적 변경은 대표적인 Studio 플레이 캡처와 함께 위키에 기록됩니다.\n\n## 후속 기획\n\n- 다음 전투 구현 커밋에서는 P0 항목만 선택하고 P1 상태 효과를 동시에 끌어오지 않습니다.\n- 첫 무기 세트는 검, 활과 총 각 하나로 자동 공격·투사체·근접 경로를 검증합니다.\n- 보호막과 방어력 계산 순서는 실제 적 피해 범위를 정한 뒤 고정합니다.\n- 상태 저항은 부여 확률 감소와 지속시간 감소를 동시에 사용하지 않고 하나의 읽기 쉬운\n  규칙을 플레이테스트로 선택합니다.\n- 능력치·상태·Trigger·공간 조건의 완료 상태는 실제 구현 커밋마다 이 페이지의 다음\n  버전에서 갱신합니다.\n",
      "revisions": [
        {
          "id": "backpack-combat-stat-database",
          "title": "백팩 전투 능력치 데이터베이스",
          "summary": "자동 공격과 공간 배치가 함께 빌드를 만드는 PackBound를 위해 경쟁작의 능력치·상태·발동·배치 문법을 분류하고, 실제 개발 우선순위와 현재 완료 수준을 하나의 기준표로 확정했습니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "combat",
            "stats",
            "backpack",
            "auto-attack",
            "projectile",
            "status-effect",
            "spatial-rule",
            "research",
            "roadmap"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-06",
          "authors": [
            "Codex"
          ],
          "version": 1,
          "change_type": "created",
          "change_summary": "백팩류 경쟁작 리서치를 PackBound의 능력치·상태 효과·발동 조건·공간 조건 데이터베이스로 전환하고, 데이터 정의와 실제 런타임 완성을 구분한 우선순위 로드맵을 수립했습니다.",
          "supersedes": null,
          "sources": [
            "docs/gameplay/item-stats.md",
            "src/ReplicatedStorage/ItemStats",
            "tests/ItemStats.spec.luau",
            "tools/test_item_stats.sh"
          ],
          "related": [
            "inventory-item-concept",
            "project-overview"
          ],
          "validation": [
            "./tools/test_item_stats.sh",
            "rojo build default.project.json --output /tmp/PackBound-backpack-stat-wiki.rbxlx",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "python3 -m unittest tests/test_wiki.py",
            "git diff --check"
          ],
          "body": "# 백팩 전투 능력치 데이터베이스\n\n## 기획 배경과 목표\n\nPackBound는 공격 버튼을 반복해서 누르는 게임이 아니라, 백팩에 넣은 아이템이 각자의\n주기와 조건에 따라 자동으로 공격하는 아케이드 RPG입니다. 플레이어의 전투 판단은 조작\n횟수보다 어떤 아이템을 선택하고 어디에 배치하며 어떤 시너지를 연결했는지에서 나와야\n합니다. 따라서 능력치 체계는 단순히 숫자를 많이 제공하는 대신 자동 공격, 투사체 변화와\n공간 퍼즐을 같은 문법으로 조합할 수 있어야 합니다.\n\n이 문서는 Backpack Hero, Backpack Battles, Backpack Brawl과 God of Weapons에서 반복해서\n사용되는 전투 수치와 배치 규칙을 조사해 PackBound에 맞는 데이터베이스로 정리합니다.\n경쟁작의 이름과 계산식을 그대로 복제하지 않고, 실시간 이동과 자동 공격에서 읽기 쉽고\n밸런스하기 쉬운 형태만 채택합니다.\n\n## 사용자 경험\n\n- 같은 무기도 주변 아이템, 활성 칸, 투사체 옵션과 상태 효과에 따라 다른 빌드가 됩니다.\n- 아이템 설명에서 수치, 조건, 발동 시점과 대상이 분명히 분리되어 결과를 예측할 수 있습니다.\n- 공격이 자동이어도 쿨타임, 사거리, 투사체 경로와 배치 시너지로 충분한 선택 차이가 생깁니다.\n- 빗나감이나 공용 자원 고갈처럼 공격이 이유 없이 멈춘 것처럼 보이는 요소는 초기 전투에서\n  강제하지 않습니다.\n- 개발 화면과 위키에서는 데이터가 존재하는 상태와 실제 플레이에 연결된 상태를 구분합니다.\n\n## 핵심 원칙과 설계 철학\n\n### 다섯 계층을 분리한다\n\n| 계층 | 책임 | 예시 |\n| --- | --- | --- |\n| 영구 능력치 | 장비와 성장으로 합산되는 수치 | 공격력, 쿨타임 감소, 관통 횟수 |\n| 전투 자원 | 전투 중 소비·회복되는 현재값 | 체력, 보호막, 마나, 스태미나 |\n| 상태 효과 | 시간과 중첩을 가지는 임시 변화 | 화상, 중독, 가속, 취약 |\n| 발동 조건 | 효과가 실행되는 시점 | 명중 시, 치명타 시, 피격 시 |\n| 공간 조건 | 백팩에서 대상을 찾는 방법 | 근처, 활성 칸, 연결망, 빈칸 |\n\n`Heat`, `Cold`, `Rage`처럼 전투 중 변하는 값은 영구 `StatId`가 아니라 가속, 둔화,\n강화 상태로 표현합니다. 화상·독·빙결도 숫자 능력치에 섞지 않고 상태 효과 카탈로그가\n관리합니다. 이 경계가 유지되어야 아이템 데이터가 하나의 거대한 예외 테이블이 되지 않습니다.\n\n### 데이터 정의와 플레이 완성을 다르게 표시한다\n\n현재 `ItemStats`는 능력치 ID, 합산·상한 계산과 백팩 공간 판정을 제공합니다. 아직 실제\n적 탐색, 자동 공격, 피해 처리와 HUD가 이 값을 소비하지 않으므로 전체 전투 기능이 완료된\n것은 아닙니다. 이 문서의 완료 여부는 다음 두 열로 나눕니다.\n\n| 표기 | 의미 |\n| --- | --- |\n| 데이터 완료 | ID, 단위, 기본값, 제한 또는 공간 평가 계약이 소스에 존재함 |\n| 부분 완료 | 일부 계산이나 판정은 있지만 개별 테스트 또는 런타임 연결이 부족함 |\n| 런타임 완료 | 실제 서버 전투와 플레이 화면이 사용하고 검증됨 |\n| 미개발 | 현재 저장소에 계약과 런타임이 없음 |\n| 보류 | 장르 사례는 있으나 현재 제품 경험에는 바로 도입하지 않음 |\n\n### 우선순위는 플레이 가능한 세로 조각을 기준으로 한다\n\n| 우선순위 | 기준 |\n| --- | --- |\n| P0 | 첫 자동 전투가 성립하려면 반드시 필요한 기반 |\n| P1 | 첫 빌드 다양성과 백팩 퍼즐을 만드는 핵심 확장 |\n| P2 | 콘텐츠 폭과 고급 조합을 늘리는 후속 기능 |\n| P3 | 복잡도나 불쾌감 위험이 있어 플레이테스트 후 결정할 실험 |\n\n## 레퍼런스 조사\n\n### Backpack Hero\n\nBackpack Hero는 아이템 모양과 별도의 효과 영역, 인접·대각선·행·열·빈칸·포켓·연결망을\n사용합니다. 아이템 사용, 파괴, 이동과 생성도 별도 효과로 취급하며, 마나석과 전도성\n아이템은 인접 연결망을 만듭니다. 이 구조는 PackBound의 `ActiveCells`와 후속 `Connected`,\n`Contained`, `EmptyCell` 조건의 직접적인 참고입니다.\n\n- [아이템과 효과 영역](https://backpack-hero.com/mods/JSON_Reference/Items/)\n- [무기와 인접·대각선·방향 조건](https://backpackhero.wiki.gg/wiki/Weapons)\n- [방어구와 빈칸·행 조건](https://backpackhero.wiki.gg/wiki/Armor)\n- [마나 연결망](https://backpackhero.wiki.gg/wiki/Manastone)\n- [상태 효과](https://backpackhero.wiki.gg/wiki/Status_Effects)\n\n### Backpack Battles\n\nBackpack Battles는 정확도, 쿨타임과 치명타를 공격의 기본 계약으로 사용하고, Empower,\nHeat, Luck, Mana, Regeneration, Spikes와 Vampirism을 누적 강화로 사용합니다. Blind, Cold,\nPoison은 반대 축의 약화이며 Block, Invulnerability, Reflect, Resist, Stun은 별도 전투\n규칙입니다. 별과 다이아몬드 칸은 아이템 주변의 특정 위치를 활성 대상으로 지정합니다.\n\n- [전투·강화·약화·별 칸 메커니즘](https://backpackbattles.wiki.gg/wiki/Game_Mechanics)\n- [강화 효과 목록](https://backpackbattles.wiki.gg/wiki/Buff)\n- [지속 전투 종료를 위한 Fatigue](https://backpackbattles.wiki.gg/wiki/Fatigue)\n\n### Backpack Brawl\n\nBackpack Brawl의 공격 아이템은 피해 범위, 쿨타임, 정확도, 스태미나 비용·초당 비용,\n치명타 확률과 치명타 피해를 가집니다. 상태 효과는 Empower, Haste, Lifesteal, Luck,\nMana, Regeneration, Thorns와 Poison, Bleed, Burn, Chill, Blind, Curse, Insanity, Stun으로\n확장됩니다. 별 칸에 연결된 아이템 종류와 개수를 발동 조건에 적극 사용합니다.\n\n- [능력치가 표시된 무기 사례](https://backpackbrawl.wiki.gg/wiki/Cataclysm)\n- [강화·약화 효과 목록](https://backpackbrawl.wiki.gg/wiki/Backpack_Brawl_Wiki/effects)\n- [근접 무기·펫·방어구·가방 타입](https://backpackbrawl.wiki.gg/wiki/Item_Types)\n\n### God of Weapons\n\nGod of Weapons는 실시간 이동과 자동 공격을 결합하므로 PackBound와 가장 가까운 전투\n참고입니다. 근접·투사체·마법 위력, 공격 속도, 사거리, 넉백, 회피, 흡혈, 자연 회복,\n부활, 방어, 상점 행운과 획득량을 사용합니다. 무기에는 공격 주기, 치명타, 사거리,\n관통·반사·폭발과 인접 아이템 시너지가 함께 존재합니다.\n\n- [캐릭터 능력치](https://godofweapons.wiki.gg/wiki/Stats)\n- [무기와 투사체 특성](https://godofweapons.wiki.gg/wiki/Weapons)\n\n## 영구 능력치 데이터베이스\n\n### 현재 정의된 핵심·증가 능력치\n\n아래 항목은 데이터와 계산기가 존재하지만 자동 공격·피해 런타임에는 아직 연결되지\n않았습니다. 따라서 `데이터 완료`와 `런타임 미개발`을 동시에 표시합니다.\n\n| ID | 표시명 | 우선순위 | 데이터 계약 | 런타임 적용 | 결정 |\n| --- | --- | --- | --- | --- | --- |\n| `AttackPower` | 공격력 | P0 | 완료 | 미개발 | 기본 피해량으로 채택 |\n| `Defense` | 방어력 | P0 | 완료 | 미개발 | 지속 피해 감소용으로 채택 |\n| `MaxHealth` | 최대 체력 | P0 | 완료 | 미개발 | 캐릭터 생존 기반으로 채택 |\n| `AttackCooldown` | 공격 쿨타임 | P0 | 완료 | 미개발 | 무기별 독립 자동 공격 타이머 |\n| `AttackRange` | 공격 사거리 | P0 | 완료 | 미개발 | 무기별 독립 대상 탐색 거리 |\n| `AttackPowerIncrease` | 공격력 증가율 | P0 | 완료 | 미개발 | 기본 공격력에 곱연산 |\n| `DefenseIncrease` | 방어력 증가율 | P0 | 완료 | 미개발 | 기본 방어력에 곱연산 |\n| `MaxHealthIncrease` | 최대 체력 증가율 | P0 | 완료 | 미개발 | 기본 최대 체력에 곱연산 |\n| `CooldownReduction` | 쿨타임 감소율 | P0 | 완료 | 미개발 | 최대 80%, 공격 속도와 중복 ID 금지 |\n| `AttackRangeIncrease` | 사거리 증가율 | P1 | 완료 | 미개발 | 기본 사거리에 곱연산 |\n\n### 현재 정의된 투사체 능력치\n\n| ID | 표시명 | 우선순위 | 데이터 계약 | 런타임 적용 | 결정 |\n| --- | --- | --- | --- | --- | --- |\n| `AdditionalProjectileCount` | 추가 투사체 수 | P1 | 완료 | 미개발 | 기본 1발에 정수 가산 |\n| `ProjectilePierceCount` | 관통 횟수 | P1 | 완료 | 미개발 | 첫 대상 이후 추가 대상 수 |\n| `ProjectileSplitCount` | 분열 수 | P1 | 완료 | 미개발 | 분열 시 생성되는 자식 수 |\n| `ProjectileRicochetCount` | 도탄 횟수 | P1 | 완료 | 미개발 | 적 또는 벽 도탄에 사용 |\n| `ProjectileSpeedIncrease` | 투사체 속도 증가 | P1 | 완료 | 미개발 | 이동 속도 배율 |\n| `ProjectileSizeIncrease` | 투사체 크기 증가 | P2 | 완료 | 미개발 | 시각 크기와 충돌 판정 계약 필요 |\n| `ProjectileDamageIncrease` | 투사체 피해 증가 | P1 | 완료 | 미개발 | 투사체 공격에만 적용 |\n| `ProjectileHomingStrength` | 투사체 유도력 | P2 | 완료 | 미개발 | 0~1 범위, 조향 알고리즘 필요 |\n\n### 현재 정의된 전투 보조 능력치\n\n| ID | 표시명 | 우선순위 | 데이터 계약 | 런타임 적용 | 결정 |\n| --- | --- | --- | --- | --- | --- |\n| `CriticalChance` | 치명타 확률 | P1 | 완료 | 미개발 | 0~100% 확률 |\n| `CriticalDamageMultiplier` | 치명타 피해 배율 | P1 | 완료 | 미개발 | 기본 1.5배 |\n| `DodgeChance` | 회피 확률 | P2 | 완료 | 미개발 | 최대 75%, 연속 회피 체감 검증 필요 |\n| `LifeSteal` | 생명력 흡수 | P2 | 완료 | 미개발 | 가한 피해 비율 회복으로 의미 고정 |\n| `MoveSpeedIncrease` | 이동 속도 증가 | P1 | 완료 | 미개발 | 캐릭터 이동 컨트롤러 연결 필요 |\n| `KnockbackPower` | 밀쳐내기 위력 | P1 | 완료 | 미개발 | 적 물리·경직 계약과 함께 구현 |\n\n### 추가 채택할 공격·투사체 능력치\n\n| 제안 ID | 표시명 | 우선순위 | 데이터 계약 | 런타임 적용 | 채택 결정 |\n| --- | --- | --- | --- | --- | --- |\n| `ArmorPenetration` | 방어 관통 | P1 | 미개발 | 미개발 | 채택, 방어 빌드 대응 축 |\n| `AreaSizeIncrease` | 효과 범위 증가 | P1 | 미개발 | 미개발 | 채택, 폭발·근접·장판 공통 배율 |\n| `ChainCount` | 연쇄 횟수 | P1 | 미개발 | 미개발 | 채택, 번개·연쇄 공격 공통값 |\n| `ExecuteThreshold` | 처형 기준 | P2 | 미개발 | 미개발 | 채택, 희귀 효과 전용 |\n| `StatusApplicationChance` | 상태 부여 확률 | P1 | 미개발 | 미개발 | 채택, 개별 효과 기본 확률 보정 |\n| `StatusPowerIncrease` | 상태 효과 증가 | P1 | 미개발 | 미개발 | 채택, 상태 피해·효과량 공통 보정 |\n| `StatusDurationIncrease` | 상태 지속시간 증가 | P1 | 미개발 | 미개발 | 채택, 실시간 상태용 |\n| `ProjectileExplosionRadius` | 투사체 폭발 범위 | P1 | 미개발 | 미개발 | 채택, 폭발 투사체 기본값 |\n| `ProjectileChainCount` | 투사체 연쇄 횟수 | P2 | 미개발 | 미개발 | `ChainCount`와 통합 가능성 검토 |\n| `PierceDamageRetention` | 관통 피해 유지율 | P1 | 미개발 | 미개발 | 채택, 관통 횟수 증가의 밸런스 장치 |\n| `RicochetDamageRetention` | 도탄 피해 유지율 | P1 | 미개발 | 미개발 | 채택, 도탄 후 피해 감쇠 |\n| `SplitDamageRetention` | 분열 피해 유지율 | P1 | 미개발 | 미개발 | 채택, 자식 투사체 피해 감쇠 |\n| `Accuracy` | 명중률 | P3 | 미개발 | 미개발 | 보류, 자동 공격 실패가 고장처럼 보일 위험 |\n\n### 추가 채택할 방어·회복 능력치\n\n| 제안 ID | 표시명 | 우선순위 | 데이터 계약 | 런타임 적용 | 채택 결정 |\n| --- | --- | --- | --- | --- | --- |\n| `HealthRegeneration` | 초당 체력 회복 | P1 | 미개발 | 미개발 | 채택, 지속 생존 빌드 |\n| `ThornsDamage` | 가시 피해 | P1 | 미개발 | 미개발 | 채택, 근접 피격 반격 기본값 |\n| `HealingIncrease` | 주는 회복 증가 | P2 | 미개발 | 미개발 | 채택, 회복 효과 소유자 기준 |\n| `HealingReceivedIncrease` | 받는 회복 증가 | P2 | 미개발 | 미개발 | 채택, 탱커·지원 효과 분리 |\n| `DamageReduction` | 최종 피해 감소 | P2 | 미개발 | 미개발 | 제한 채택, 방어력과 별도 상한 필요 |\n| `StatusResistance` | 상태 저항 | P1 | 미개발 | 미개발 | 채택, 부여 확률·지속시간 중 계산식 확정 필요 |\n| `CriticalResistance` | 치명타 저항 | P2 | 미개발 | 미개발 | 채택, 적 치명타 콘텐츠 이후 |\n| `ReviveCount` | 부활 횟수 | P3 | 미개발 | 미개발 | 보류, 희귀 유물과 전투 흐름 검증 후 도입 |\n\n### 선택적 자원·경제 능력치\n\n| 제안 ID | 표시명 | 우선순위 | 상태 | 채택 결정 |\n| --- | --- | --- | --- | --- |\n| `MaxStamina` | 최대 스태미나 | P3 | 보류 | 무기 과밀 제어가 필요할 때만 프로토타입 |\n| `StaminaRegeneration` | 스태미나 회복 | P3 | 보류 | 공격이 멈추는 체감 위험과 함께 검증 |\n| `AttackStaminaCost` | 공격 스태미나 비용 | P3 | 보류 | 모든 무기에 강제하지 않음 |\n| `MaxMana` | 최대 마나 | P2 | 미개발 | 마법·연결망 빌드가 생길 때 채택 |\n| `ManaRegeneration` | 마나 회복 | P2 | 미개발 | 연결망과 함께 구현 |\n| `ChargeCount` | 충전 수 | P2 | 미개발 | 제한 사용·폭발 아이템용 |\n| `UseCount` | 사용 횟수 | P2 | 미개발 | 소모품과 전투당 횟수 제한용 |\n| `LootLuck` | 전리품 행운 | P3 | 보류 | 전투 정확도 Luck과 이름을 공유하지 않음 |\n| `GoldGainIncrease` | 골드 획득 증가 | P3 | 보류 | 경제 밸런스 구축 후 도입 |\n| `ExperienceGainIncrease` | 경험치 획득 증가 | P3 | 보류 | 성장 곡선 구축 후 도입 |\n\n## 전투 자원 데이터베이스\n\n| 자원 | 우선순위 | 개발 상태 | 규칙 |\n| --- | --- | --- | --- |\n| 현재 체력 | P0 | 미개발 | 최대 체력과 분리된 서버 권위 현재값 |\n| 보호막 | P0 | 미개발 | 방어력 적용 전후 순서를 확정하고 먼저 소모되는 임시값 |\n| 무기 쿨타임 진행도 | P0 | 미개발 | 무기 인스턴스별 독립 타이머 |\n| 상태 효과 중첩·잔여시간 | P1 | 미개발 | 효과 ID별 중첩 정책과 만료 시각 |\n| 마나 | P2 | 미개발 | 마법·연결망 아이템 전용 선택 자원 |\n| 스태미나 | P3 | 보류 | 공용 자동 공격 제한이 필요할 때만 도입 |\n| 충전·사용 횟수 | P2 | 미개발 | 아이템 인스턴스 또는 전투 단위로 초기화 |\n\n`Defense`와 보호막은 통합하지 않습니다. 방어력은 지속적인 피해 감소이고 보호막은 전투\n중 생성·소모되는 현재값입니다. `DamageReduction`은 두 계산 이후 적용되는 제한적인 특수\n효과로 두어 같은 방어 개념이 중복 증폭되지 않게 합니다.\n\n## 상태 효과 데이터베이스\n\n### 강화 효과\n\n| ID | 표시명 | 우선순위 | 개발 상태 | 기본 의미 |\n| --- | --- | --- | --- | --- |\n| `Empower` | 강화 | P1 | 미개발 | 중첩당 공격력 증가 |\n| `Haste` | 가속 | P1 | 미개발 | 아이템 쿨타임 진행 속도 증가 |\n| `Barrier` | 보호막 | P0 | 미개발 | 임시 피해 흡수량 획득 |\n| `Regeneration` | 재생 | P1 | 미개발 | 일정 주기 체력 회복 |\n| `Thorns` | 가시 | P1 | 미개발 | 근접 피격 시 반사 피해 |\n| `Vampirism` | 흡혈 강화 | P2 | 미개발 | 제한 시간 생명력 흡수 증가 |\n| `Invulnerable` | 무적 | P2 | 미개발 | 짧은 시간 피해 무효화 |\n| `StatusResist` | 상태 방어 | P1 | 미개발 | 다음 해로운 효과 또는 중첩 차단 |\n| `ReflectDebuff` | 약화 반사 | P2 | 미개발 | 다음 해로운 효과를 시전자에게 반사 |\n\n### 약화 효과\n\n| ID | 표시명 | 우선순위 | 개발 상태 | 기본 의미 |\n| --- | --- | --- | --- | --- |\n| `Poison` | 중독 | P1 | 미개발 | 일정 주기의 중첩 피해 |\n| `Burn` | 화상 | P1 | 미개발 | 짧고 빠른 지속 피해, 재부여 시 지속 갱신 |\n| `Bleed` | 출혈 | P2 | 미개발 | 이동 또는 공격 행동에 반응하는 피해 |\n| `Chill` | 냉기 | P1 | 미개발 | 이동·공격 속도 감소 |\n| `Freeze` | 빙결 | P2 | 미개발 | 짧은 행동 불가 또는 냉기 임계 효과 |\n| `Weak` | 약화 | P1 | 미개발 | 주는 피해 감소 |\n| `Vulnerable` | 취약 | P1 | 미개발 | 받는 피해 증가 |\n| `Blind` | 실명 | P3 | 보류 | 정확도 채택 전에는 대상 탐색 방해로만 검토 |\n| `Stun` | 기절 | P2 | 미개발 | 이동·아이템 쿨타임을 짧게 정지 |\n| `Curse` | 저주 | P3 | 보류 | 일반 해제 규칙을 벗어나는 장기 약화 |\n\nPoison, Burn과 Bleed는 모두 지속 피해지만 같은 효과의 색상 변형으로 만들지 않습니다.\n중독은 안정적인 중첩 피해, 화상은 짧고 빠른 피해, 출혈은 행동에 반응하는 피해로 역할을\n나눕니다. Chill과 Freeze도 속도 감소와 행동 불가로 구분합니다.\n\n## 백팩 공간 조건 데이터베이스\n\n### 현재 구현된 조건\n\n| 관계 ID | 의미 | 우선순위 | 평가기 | 직접 테스트 | 런타임 연결 |\n| --- | --- | --- | --- | --- | --- |\n| `Nearby` | 상하좌우 변이 맞닿음 | P0 | 완료 | 완료 | 미개발 |\n| `Active` | 비인접 지정 활성 칸과 겹침 | P0 | 완료 | 완료 | 미개발 |\n| `Diagonal` | 변 접촉 없이 모서리만 맞닿음 | P1 | 완료 | 완료 | 미개발 |\n| `SameRow` | 하나 이상의 점유 칸이 같은 행 | P1 | 완료 | 미개발 | 미개발 |\n| `SameColumn` | 하나 이상의 점유 칸이 같은 열 | P1 | 완료 | 미개발 | 미개발 |\n| `Above` | 소스 경계보다 위에 위치 | P1 | 완료 | 미개발 | 미개발 |\n| `Below` | 소스 경계보다 아래에 위치 | P1 | 완료 | 미개발 | 미개발 |\n| `Left` | 소스 경계보다 왼쪽에 위치 | P1 | 완료 | 미개발 | 미개발 |\n| `Right` | 소스 경계보다 오른쪽에 위치 | P1 | 완료 | 미개발 | 미개발 |\n| `Anywhere` | 백팩 어디에 있어도 대상 | P1 | 완료 | 미개발 | 미개발 |\n\n`Nearby`는 다칸 아이템의 어느 점유 칸과든 변을 공유하면 성립합니다. `Active`는 아이템이\n작성한 원거리 활성 칸에 대상 점유 칸이 겹칠 때 성립하며, 활성 칸은 소스 본체와 겹치거나\n인접할 수 없습니다. 이 구분은 Backpack Hero의 효과 영역과 Backpack Battles·Brawl의 별\n칸을 하나의 PackBound 용어로 통합합니다.\n\n### 추가 채택할 조건\n\n| 제안 ID | 의미 | 우선순위 | 개발 상태 | 채택 결정 |\n| --- | --- | --- | --- | --- |\n| `Connected` | 같은 연결망으로 이어짐 | P1 | 미개발 | 채택, 마나·전기·기계 빌드 |\n| `Contained` | 지정 포켓이나 컨테이너 내부 | P1 | 미개발 | 채택, 소모품·탄약 묶음 |\n| `EmptyNearbyCell` | 근처 빈칸 수 | P1 | 미개발 | 채택, 공간을 비우는 선택 보상 |\n| `EmptyRowCell` | 같은 행의 빈칸 수 | P2 | 미개발 | 채택, 방향성 무기용 |\n| `Isolated` | 근처에 다른 아이템이 없음 | P1 | 미개발 | 채택, 큰 무기와 고립 빌드 |\n| `TopRow` | 최상단 행에 배치됨 | P1 | 미개발 | 채택, 헬멧·상단 장치 |\n| `BottomRow` | 최하단 행에 배치됨 | P1 | 미개발 | 채택, 신발·무거운 장비 |\n| `Edge` | 백팩 외곽에 접함 | P2 | 미개발 | 채택, 방어·벽면 장비 |\n| `Corner` | 백팩 모서리에 위치 | P2 | 미개발 | 채택, 제한적 고효율 효과 |\n| `Facing` | 아이템이 바라보는 방향 | P1 | 미개발 | 채택, 활·총·방패 방향성 |\n| `SameTypeCount` | 같은 태그 아이템 수 | P1 | 미개발 | 채택, 테마 집중 빌드 |\n| `DifferentTypeCount` | 서로 다른 태그 수 | P2 | 미개발 | 채택, 혼합 빌드 |\n| `FreeSlotCount` | 백팩 전체 빈칸 수 | P1 | 미개발 | 채택, 공간 효율과 성능의 교환 |\n| `OverlapEffectArea` | 여러 활성 영역이 겹침 | P2 | 미개발 | 검토, 효과 중복과 시각화 필요 |\n| `PocketCount` | 분리된 백팩 구역 수 | P3 | 보류 | 포켓 시스템 확정 후 결정 |\n\n## 발동 조건 데이터베이스\n\n현재 `BackpackRuleEvaluator`는 배치에 따른 수동 평가 결과만 반환합니다. 전투 사건을\n구독하고 효과를 실행하는 Trigger 시스템은 아직 없습니다.\n\n| Trigger ID | 표시명 | 우선순위 | 개발 상태 | 사용 예시 |\n| --- | --- | --- | --- | --- |\n| `OnCombatStart` | 전투 시작 시 | P0 | 미개발 | 보호막 획득, 첫 투사체 생성 |\n| `OnInterval` | 일정 시간마다 | P0 | 미개발 | 자동 회복, 장판 발생 |\n| `OnAttackAttempt` | 공격 시도 시 | P0 | 미개발 | 발사 전 비용·효과 처리 |\n| `OnHit` | 명중 시 | P0 | 미개발 | 중독 부여, 흡혈 |\n| `OnCriticalHit` | 치명타 시 | P1 | 미개발 | 분열, 추가 상태 부여 |\n| `OnMiss` | 빗나감 시 | P3 | 보류 | 정확도 시스템 채택 후 사용 |\n| `OnDamaged` | 피해를 받을 때 | P0 | 미개발 | 가시, 보호막 반응 |\n| `OnKill` | 적 처치 시 | P1 | 미개발 | 영구 강화, 아이템 생성 |\n| `OnHealthThreshold` | 체력 기준 통과 시 | P1 | 미개발 | 50% 이하 가속, 1회 회복 |\n| `OnProjectilePierce` | 투사체 관통 시 | P1 | 미개발 | 관통 피해 변화 |\n| `OnProjectileRicochet` | 투사체 도탄 시 | P1 | 미개발 | 도탄마다 강화 |\n| `OnProjectileSplit` | 투사체 분열 시 | P1 | 미개발 | 자식 투사체 옵션 적용 |\n| `OnAdjacentItemActivated` | 인접 아이템 발동 시 | P1 | 미개발 | 연계 공격, 쿨타임 전진 |\n| `OnConsumableConsumed` | 소모품 소진 시 | P2 | 미개발 | 빈 용기 생성, 주변 강화 |\n| `OnItemCreated` | 아이템 생성 시 | P2 | 미개발 | 생성물 수에 따른 효과 |\n| `OnItemDestroyed` | 아이템 파괴 시 | P2 | 미개발 | 폭발, 인접 효과 갱신 |\n| `OnItemMoved` | 아이템 이동 시 | P3 | 보류 | 전투 중 재배치가 생길 때 사용 |\n| `OnStatusApplied` | 상태 부여 시 | P1 | 미개발 | 상태 연쇄·반사 |\n| `OnStatusCleansed` | 상태 해제 시 | P1 | 미개발 | 정화 보상 |\n| `OnEmptyCellChanged` | 빈칸 수 변화 시 | P2 | 미개발 | 공간 기반 수치 재계산 |\n\nTrigger는 `Trigger + Condition + Effect + Target` 네 요소로 저작합니다. 상태 효과와\n투사체 사건은 Trigger를 발생시키지만 Trigger 자체가 능력치 값을 소유하지 않습니다.\n\n## 태그 데이터베이스\n\n현재 태그는 공간 조건에서 구체적인 아이템 이름 대신 확장 가능한 분류를 선택하기 위해\n사용됩니다.\n\n| 그룹 | 현재 데이터 완료 태그 | 후속 제안 |\n| --- | --- | --- |\n| 대분류 | Weapon, Armor, Ammo, Accessory, Consumable, Material, Treasure | Pet, Structure, Container |\n| 공격 방식 | Melee, Ranged, Projectile, Magic | Summon, Area, Channel |\n| 무기 | Sword, Bow, Gun, Wand, Staff, Dagger, Spear, Axe, Hammer | Crossbow, Launcher |\n| 탄약 | Arrow, Bullet, Bolt | Shell, Rocket |\n| 방어구 | Shield, Helmet, ChestArmor, LegArmor, Shoes, Gloves, Cloak | Belt |\n| 장신구 | Ring, Amulet, Relic, Charm | Totem |\n| 소모품 | Food, Potion, Healing, Stamina | Bomb, Scroll |\n\n모든 아이템은 대분류 하나와 적용 가능한 세부 태그를 함께 가집니다. 예를 들어 장궁은\n`Weapon`, `Ranged`, `Projectile`, `Bow`를 사용하고 화살 묶음은 `Ammo`, `Projectile`,\n`Arrow`를 사용합니다. `Luck`처럼 게임마다 뜻이 다른 개념은 태그나 능력치 이름으로\n포괄하지 않고 `LootLuck`, `Accuracy`처럼 용도를 명시합니다.\n\n## 현재 결과와 완료 현황\n\n| 영역 | 현재 결과 | 완료 수준 | 다음 완료 조건 |\n| --- | --- | --- | --- |\n| 능력치 타입·메타데이터 | 24개 StatId와 단위·기본값·상한 | 데이터 완료 | 신규 채택 ID 추가 |\n| 능력치 계산 | 기본값, 합산, 증가율, 쿨타임·확률 상한 | 계산 완료 | 서버 전투 소비자 연결 |\n| 아이템 태그 | 무기·방어구·탄약·장신구·소모품 분류 | 데이터 완료 | 실제 ItemCatalog 등록 |\n| 공간 관계 | 10개 관계와 태그 선택자·중첩·대상 | 평가기 완료 | 인벤토리 배치 이벤트 연결 |\n| 공간 테스트 | Nearby, Active, Diagonal과 잘못된 활성 칸 | 부분 완료 | 나머지 7개 관계 직접 테스트 |\n| 자동 공격 | 없음 | 미개발 | 무기별 타이머·대상 탐색·공격 사건 |\n| 피해 해결 | 없음 | 미개발 | 서버 권위 피해·방어·치명타 파이프라인 |\n| 투사체 런타임 | 없음 | 미개발 | 생성·이동·충돌·관통·도탄·분열 |\n| 상태 효과 | 없음 | 미개발 | 중첩·지속·주기·해제 정책 |\n| Trigger 시스템 | 없음 | 미개발 | 사건 버스와 조건·효과 실행기 |\n| HUD·툴팁 | 없음 | 미개발 | 최종 수치와 활성 배치 효과 표시 |\n\n## 구현 참고\n\n| 경로 | 책임 |\n| --- | --- |\n| `src/ReplicatedStorage/ItemStats/Definitions.luau` | 현재 24개 능력치의 표시명, 단위, 기본값과 제한 |\n| `src/ReplicatedStorage/ItemStats/Calculator.luau` | 능력치 블록 검증·합산과 최종 수치 계산 |\n| `src/ReplicatedStorage/ItemStats/Types.luau` | 능력치, 배치, 조건, 효과와 평가 결과 타입 |\n| `src/ReplicatedStorage/ItemStats/BackpackRuleEvaluator.luau` | 태그 선택과 공간 관계·중첩·적용 대상 평가 |\n| `src/ReplicatedStorage/ItemStats/ItemTags.luau` | 아이템 분류 태그 |\n| `tests/ItemStats.spec.luau` | 계산 상한과 Nearby·Active·Diagonal 회귀 검증 |\n\n현재 Calculator는 하나의 무기 기본 쿨타임·사거리와 소유자·백팩 보너스를 함께 계산하는\n용도입니다. 여러 무기의 기본 쿨타임과 사거리를 한 블록에 더하지 않습니다. 각 자동 공격\n무기는 독립 타이머와 대상 탐색을 가져야 합니다.\n\n## 개발 로드맵\n\n### P0: 자동 전투 세로 조각\n\n1. 캐릭터·아이템 능력치 블록을 서버에서 합산합니다.\n2. 무기별 쿨타임과 사거리로 가장 가까운 유효 적을 탐색합니다.\n3. 공격 시도, 명중과 피격 사건을 정의합니다.\n4. 공격력, 방어력, 체력, 보호막과 치명타를 서버 피해 파이프라인에 연결합니다.\n5. 현재 능력치와 활성 백팩 효과를 툴팁에서 확인할 수 있게 합니다.\n\n### P1: 첫 빌드 다양성\n\n1. 관통·도탄·분열과 피해 유지율을 구현합니다.\n2. 화상, 중독, 냉기, 약화, 취약과 가속·강화 상태를 구현합니다.\n3. Connected, Contained, EmptyCell, Isolated, TopRow와 BottomRow 조건을 추가합니다.\n4. 명중·치명타·처치·피격·상태 부여 Trigger를 연결합니다.\n5. 나머지 공간 관계와 상태 중첩 정책을 자동화 테스트로 고정합니다.\n\n### P2: 콘텐츠 확장\n\n폭발·연쇄·출혈·빙결·기절, 마나 연결망, 제한 사용 아이템, 치명타 저항과 고급 배치\n조건을 추가합니다. P0·P1의 전투 로그와 툴팁이 안정된 뒤 진행합니다.\n\n### P3: 플레이테스트 기반 실험\n\n정확도, 공용 스태미나, 부활, 저주와 경제 능력치는 즉시 도입하지 않습니다. 자동 공격이\n자주 빗나가거나 자원 부족으로 멈추면 플레이어에게 시스템 고장처럼 보일 수 있습니다.\n무기 수 증가를 제어할 다른 수단이 부족하다는 데이터가 확인될 때 별도 프로토타입합니다.\n\n## 검증과 완료 기준\n\n이번 문서는 현재 커밋된 `ItemStats` 소스와 테스트를 기준으로 완료 상태를 대조했습니다.\n능력치 계산 테스트는 핵심·증가 수치, 쿨타임·회피 상한, 추가 투사체, 알 수 없는 ID 거부를\n확인합니다. 공간 테스트는 근처, 활성, 대각선이 서로 중복되지 않고 소스 본체와 인접한\n활성 칸을 거부하는지 확인합니다. Rojo 빌드로 `ReplicatedStorage.ItemStats` 패키지가\n플레이스에 포함되는지도 검증합니다.\n\n앞으로 하나의 항목을 `런타임 완료`로 변경하려면 다음 조건을 모두 만족해야 합니다.\n\n- 데이터 계약과 유효 범위가 정의되어 있습니다.\n- 서버 권위 런타임에서 실제 효과가 적용됩니다.\n- 툴팁 또는 전투 피드백으로 플레이어가 결과를 확인할 수 있습니다.\n- 정상, 상한, 중첩과 해제 경계가 자동화 테스트로 검증됩니다.\n- 시각적 변경은 대표적인 Studio 플레이 캡처와 함께 위키에 기록됩니다.\n\n## 후속 기획\n\n- 다음 전투 구현 커밋에서는 P0 항목만 선택하고 P1 상태 효과를 동시에 끌어오지 않습니다.\n- 첫 무기 세트는 검, 활과 총 각 하나로 자동 공격·투사체·근접 경로를 검증합니다.\n- 보호막과 방어력 계산 순서는 실제 적 피해 범위를 정한 뒤 고정합니다.\n- 상태 저항은 부여 확률 감소와 지속시간 감소를 동시에 사용하지 않고 하나의 읽기 쉬운\n  규칙을 플레이테스트로 선택합니다.\n- 능력치·상태·Trigger·공간 조건의 완료 상태는 실제 구현 커밋마다 이 페이지의 다음\n  버전에서 갱신합니다.\n",
          "source_path": "wiki/content/pages/backpack-combat-stat-database/v001.md",
          "timeline_order": 11
        }
      ]
    },
    {
      "id": "synergy-icon-system",
      "title": "시너지 아이콘 시스템",
      "summary": "25px 전후의 모바일 표시에서도 즉시 구분되도록 26종 시너지 아이콘을 단일 실루엣과 3색 팔레트로 전면 교체하고, 새 Roblox 자산 ID를 런타임에 연결했습니다.",
      "status": "active",
      "category": "gameplay",
      "tags": [
        "inventory",
        "synergy",
        "icon",
        "ui",
        "ux",
        "mobile",
        "readability",
        "art-direction",
        "roblox-studio"
      ],
      "created_at": "2026-08-15",
      "updated_at": "2026-08-15",
      "authors": [
        "Codex"
      ],
      "version": 1,
      "change_type": "created",
      "change_summary": "메달형 장식과 복잡한 내부 묘사를 제거하고 26종을 각각 하나의 굵은 심볼로 다시 제작했으며, 주색·아이보리·짙은 자주색의 최대 3색 규칙과 투명 배경을 재생성 계약으로 고정했습니다.",
      "supersedes": null,
      "sources": [
        "wiki/content/media/synergy-icon-system/v001/studio-synergy-icons-v2-iphone17pro.png",
        "Assets/UI/Backpack/SynergyIcons/Source",
        "Assets/UI/Backpack/SynergyIcons/Final",
        "Assets/UI/Backpack/SynergyIcons/manifest.json",
        "Assets/UI/Backpack/uploaded_asset_ids.json",
        "tools/extract_synergy_icons.py",
        "src/ReplicatedStorage/BackpackUI/SynergyCatalog.luau",
        "tests/test_synergy_icons.py"
      ],
      "related": [
        "inventory-item-concept",
        "product-planning-change-log",
        "development-wiki"
      ],
      "validation": [
        "python3 tools/extract_synergy_icons.py: SynergyIconsV2 26종 재생성",
        "python3 -m unittest -q tests.test_synergy_icons: 3 tests passed",
        "bash tools/test_backpack_ui.sh: Backpack hex inventory tests passed",
        "Roblox Studio MCP Play, iPhone 17 Pro 세로 400×776: TouchEnabled=true, 26개 고유 자산·262개 시너지 ImageLabel·25×25·빈 이미지 0개 확인",
        "Roblox Studio MCP Play, Galaxy A06 세로 359×718: ItemMode 무기 카드 4열과 시너지 심볼의 잘림·겹침·텍스트 회귀 없음",
        "Roblox Studio MCP runtime console: 오류·경고 없음",
        "python3 tools/wiki.py build",
        "python3 tools/wiki.py check",
        "python3 -m unittest tests/test_wiki.py",
        "python3 -m unittest tests.test_repository_policy",
        "git diff --check"
      ],
      "source_path": "wiki/content/pages/synergy-icon-system/v001.md",
      "body": "# 시너지 아이콘 시스템\n\n## 기획 배경과 목표\n\n시너지는 아이템의 조합 가능성을 빠르게 읽게 하는 표식입니다. 실제 모바일 카드와 필터에서\n아이콘은 약 25px로 보이므로, 큰 원본에서 아름다운 메달 장식이나 내부 묘사는 축소될수록 서로\n뭉쳐 같은 얼룩처럼 보였습니다. 플레이어가 모양을 해석하느라 멈추면 시너지가 탐색을 돕는\n정보가 아니라 추가 독해 비용이 됩니다.\n\n이번 버전은 **작게 보이는 순간을 원본 설계 기준으로 삼습니다.** 26종 모두를 하나의 굵은\n실루엣과 제한된 색으로 다시 만들고, 아이콘의 주제를 배경 메달이나 글자 없이 형태만으로\n구분하도록 전환했습니다. 기존 시너지 이름·분류·대표색과 게임 규칙은 유지하되, 표현 자산과\nRoblox 참조를 새 세대로 완전히 교체했습니다.\n\n## 플레이어 경험\n\n- 카드와 필터에서 검, 활, 방패, 잎, 톱니처럼 핵심 형태를 한눈에 구분할 수 있습니다.\n- 같은 계열 색을 유지하므로 기존 조합 학습은 보존하면서 모양 판독만 빨라집니다.\n- 장식용 원형 테두리와 세부 질감이 사라져 작은 화면에서도 심볼의 빈 공간과 방향이 남습니다.\n- 투명 배경이라 밝은 카드, 선택 상태와 필터 배경 어디에서도 사각 배경이 드러나지 않습니다.\n\n![iPhone 17 Pro 세로 화면의 시너지 아이콘 V2](./media/synergy-icon-system/v001/studio-synergy-icons-v2-iphone17pro.png \"400×776 Studio Play의 ItemMode 무기 필터. 왼쪽 필터 심볼과 카드의 작은 시너지 표식이 단순한 실루엣으로 유지됩니다\")\n\n## 핵심 원칙과 설계 철학\n\n### 작은 크기의 실루엣이 원본보다 우선한다\n\n최종 품질은 256px 원본의 세부 묘사가 아니라 실제 UI의 25px 전후 표시에서 판단합니다.\n아이콘 하나에는 주제를 설명하는 대표 물체나 동작 하나만 남기고, 작은 돌기·문양·광원·배경\n장식은 제거합니다. 축소했을 때 합쳐지는 간격은 처음부터 넓게 두고 외곽은 굵게 만듭니다.\n\n### 색은 정체성을 보조하고 형태를 대신하지 않는다\n\n각 시너지의 기존 대표색을 주색으로 보존하되, 최종 픽셀은 주색·따뜻한 아이보리\n`#FFF1C7`·짙은 자주색 `#24172F`의 최대 세 색만 사용합니다. 색상 수를 늘려 세부를 설명하지\n않으며, 명암 대비는 외곽과 핵심 면을 분리하는 데만 씁니다.\n\n### 원본·최종본·런타임 참조가 한 계약으로 움직인다\n\n각 심볼은 개별 투명 원본을 가지며 재생성 도구가 256×256 캔버스, 최대 216px 내용 영역,\n3색 팔레트를 일관되게 적용합니다. 매니페스트가 원본 파일·대표색·최종 파일·Roblox 자산 ID를\n묶고, 런타임 카탈로그는 같은 업로드 ID를 사용합니다.\n\n## 결정 사항과 범위\n\n- 구조/재질 6종, 전투 운용 6종, 기원/계보 7종, 무기 형태 7종 등 활성 시너지 26종을 모두\n  V2로 교체했습니다.\n- 최종 PNG는 256×256 투명 배경이며 보이는 내용은 216px 경계 안에 맞춥니다.\n- 모든 최종본은 투명색을 제외하고 최대 3개 RGB 색만 사용합니다.\n- 기존 네 장의 합본 원본 시트는 이중 원본이 되지 않도록 제거하고 26개 개별 원본을\n  재생성 권위로 삼았습니다.\n- 새 이미지 26개를 Roblox 자산으로 다시 등록하고 업로드 레지스트리, 매니페스트와\n  `SynergyCatalog`의 참조를 같은 ID 집합으로 맞췄습니다.\n- 시너지의 이름, 분류, 대표색, 아이템별 부여 규칙과 전투 효과는 변경하지 않았습니다.\n- PC UI와 ItemDB 항목 변경은 이번 버전의 범위가 아닙니다.\n\n## 현재 결과와 구현 참고\n\n`tools/extract_synergy_icons.py`는 각 개별 원본의 알파 경계를 찾고, 비율을 유지한 채 내용\n영역에 맞춘 다음 제한 팔레트의 가장 가까운 색으로 정규화합니다. `manifest.json`의 스키마를\n2로 올려 `SynergyIconsV2` 스타일과 각 자산의 대표색·업로드 ID를 명시했습니다.\n\n런타임은 `SynergyCatalog.luau`에서 새 26개 ID만 읽습니다. 이전 V1 자산 ID가 남지 않는지,\n원본과 최종본의 파일 수가 정확한지, 크기·알파·팔레트·매니페스트·런타임 ID가 모두 일치하는지\n전용 Python 테스트로 고정했습니다.\n\n## 검증\n\n재생성 도구 실행 후 시너지 자산 테스트 3개와 전체 Luau 백팩 테스트를 통과했습니다. Studio\nMCP Play에서는 iPhone 17 Pro 세로 400×776에서 `TouchEnabled=true`, 26개 고유 업로드 자산,\n262개 시너지 이미지 라벨, 25×25 표시, 빈 이미지 0개를 확인했습니다. Galaxy A06 세로\n359×718에서는 ItemMode 무기 카드가 4열로 재배치된 상태에서 필터와 카드 심볼의 잘림·겹침,\n텍스트 가독성 회귀가 없었습니다. 두 런타임의 콘솔은 비어 있었습니다.\n\nStudio MCP의 화면 캡처가 해당 세션에서 ScreenGui 레이어를 제외한 3D 장면만 반환해, 문서의\n최종 이미지는 같은 연결 세션의 실제 Studio 창을 제한적으로 캡처했습니다. 런타임 상태,\n장치 프리셋, GUI 크기와 콘솔 판정은 계속 Studio MCP를 권위로 사용했으며, 검증 뒤 Studio를\n기본 뷰포트로 복원했습니다.\n\n## 후속 기획\n\n- 새 시너지를 추가할 때는 256px 원본보다 25px 축소 미리보기에서 기존 26종과 먼저 비교합니다.\n- 형태가 혼동되는 쌍이 발견되면 색을 추가하기보다 실루엣의 방향, 빈 공간과 대표 물체를 먼저\n  조정합니다.\n- 자산을 교체할 때는 원본·최종본·매니페스트·업로드 레지스트리·런타임 카탈로그의 동일성\n  검사를 완료 조건으로 유지합니다.\n",
      "revisions": [
        {
          "id": "synergy-icon-system",
          "title": "시너지 아이콘 시스템",
          "summary": "25px 전후의 모바일 표시에서도 즉시 구분되도록 26종 시너지 아이콘을 단일 실루엣과 3색 팔레트로 전면 교체하고, 새 Roblox 자산 ID를 런타임에 연결했습니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "inventory",
            "synergy",
            "icon",
            "ui",
            "ux",
            "mobile",
            "readability",
            "art-direction",
            "roblox-studio"
          ],
          "created_at": "2026-08-15",
          "updated_at": "2026-08-15",
          "authors": [
            "Codex"
          ],
          "version": 1,
          "change_type": "created",
          "change_summary": "메달형 장식과 복잡한 내부 묘사를 제거하고 26종을 각각 하나의 굵은 심볼로 다시 제작했으며, 주색·아이보리·짙은 자주색의 최대 3색 규칙과 투명 배경을 재생성 계약으로 고정했습니다.",
          "supersedes": null,
          "sources": [
            "wiki/content/media/synergy-icon-system/v001/studio-synergy-icons-v2-iphone17pro.png",
            "Assets/UI/Backpack/SynergyIcons/Source",
            "Assets/UI/Backpack/SynergyIcons/Final",
            "Assets/UI/Backpack/SynergyIcons/manifest.json",
            "Assets/UI/Backpack/uploaded_asset_ids.json",
            "tools/extract_synergy_icons.py",
            "src/ReplicatedStorage/BackpackUI/SynergyCatalog.luau",
            "tests/test_synergy_icons.py"
          ],
          "related": [
            "inventory-item-concept",
            "product-planning-change-log",
            "development-wiki"
          ],
          "validation": [
            "python3 tools/extract_synergy_icons.py: SynergyIconsV2 26종 재생성",
            "python3 -m unittest -q tests.test_synergy_icons: 3 tests passed",
            "bash tools/test_backpack_ui.sh: Backpack hex inventory tests passed",
            "Roblox Studio MCP Play, iPhone 17 Pro 세로 400×776: TouchEnabled=true, 26개 고유 자산·262개 시너지 ImageLabel·25×25·빈 이미지 0개 확인",
            "Roblox Studio MCP Play, Galaxy A06 세로 359×718: ItemMode 무기 카드 4열과 시너지 심볼의 잘림·겹침·텍스트 회귀 없음",
            "Roblox Studio MCP runtime console: 오류·경고 없음",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "python3 -m unittest tests/test_wiki.py",
            "python3 -m unittest tests.test_repository_policy",
            "git diff --check"
          ],
          "body": "# 시너지 아이콘 시스템\n\n## 기획 배경과 목표\n\n시너지는 아이템의 조합 가능성을 빠르게 읽게 하는 표식입니다. 실제 모바일 카드와 필터에서\n아이콘은 약 25px로 보이므로, 큰 원본에서 아름다운 메달 장식이나 내부 묘사는 축소될수록 서로\n뭉쳐 같은 얼룩처럼 보였습니다. 플레이어가 모양을 해석하느라 멈추면 시너지가 탐색을 돕는\n정보가 아니라 추가 독해 비용이 됩니다.\n\n이번 버전은 **작게 보이는 순간을 원본 설계 기준으로 삼습니다.** 26종 모두를 하나의 굵은\n실루엣과 제한된 색으로 다시 만들고, 아이콘의 주제를 배경 메달이나 글자 없이 형태만으로\n구분하도록 전환했습니다. 기존 시너지 이름·분류·대표색과 게임 규칙은 유지하되, 표현 자산과\nRoblox 참조를 새 세대로 완전히 교체했습니다.\n\n## 플레이어 경험\n\n- 카드와 필터에서 검, 활, 방패, 잎, 톱니처럼 핵심 형태를 한눈에 구분할 수 있습니다.\n- 같은 계열 색을 유지하므로 기존 조합 학습은 보존하면서 모양 판독만 빨라집니다.\n- 장식용 원형 테두리와 세부 질감이 사라져 작은 화면에서도 심볼의 빈 공간과 방향이 남습니다.\n- 투명 배경이라 밝은 카드, 선택 상태와 필터 배경 어디에서도 사각 배경이 드러나지 않습니다.\n\n![iPhone 17 Pro 세로 화면의 시너지 아이콘 V2](./media/synergy-icon-system/v001/studio-synergy-icons-v2-iphone17pro.png \"400×776 Studio Play의 ItemMode 무기 필터. 왼쪽 필터 심볼과 카드의 작은 시너지 표식이 단순한 실루엣으로 유지됩니다\")\n\n## 핵심 원칙과 설계 철학\n\n### 작은 크기의 실루엣이 원본보다 우선한다\n\n최종 품질은 256px 원본의 세부 묘사가 아니라 실제 UI의 25px 전후 표시에서 판단합니다.\n아이콘 하나에는 주제를 설명하는 대표 물체나 동작 하나만 남기고, 작은 돌기·문양·광원·배경\n장식은 제거합니다. 축소했을 때 합쳐지는 간격은 처음부터 넓게 두고 외곽은 굵게 만듭니다.\n\n### 색은 정체성을 보조하고 형태를 대신하지 않는다\n\n각 시너지의 기존 대표색을 주색으로 보존하되, 최종 픽셀은 주색·따뜻한 아이보리\n`#FFF1C7`·짙은 자주색 `#24172F`의 최대 세 색만 사용합니다. 색상 수를 늘려 세부를 설명하지\n않으며, 명암 대비는 외곽과 핵심 면을 분리하는 데만 씁니다.\n\n### 원본·최종본·런타임 참조가 한 계약으로 움직인다\n\n각 심볼은 개별 투명 원본을 가지며 재생성 도구가 256×256 캔버스, 최대 216px 내용 영역,\n3색 팔레트를 일관되게 적용합니다. 매니페스트가 원본 파일·대표색·최종 파일·Roblox 자산 ID를\n묶고, 런타임 카탈로그는 같은 업로드 ID를 사용합니다.\n\n## 결정 사항과 범위\n\n- 구조/재질 6종, 전투 운용 6종, 기원/계보 7종, 무기 형태 7종 등 활성 시너지 26종을 모두\n  V2로 교체했습니다.\n- 최종 PNG는 256×256 투명 배경이며 보이는 내용은 216px 경계 안에 맞춥니다.\n- 모든 최종본은 투명색을 제외하고 최대 3개 RGB 색만 사용합니다.\n- 기존 네 장의 합본 원본 시트는 이중 원본이 되지 않도록 제거하고 26개 개별 원본을\n  재생성 권위로 삼았습니다.\n- 새 이미지 26개를 Roblox 자산으로 다시 등록하고 업로드 레지스트리, 매니페스트와\n  `SynergyCatalog`의 참조를 같은 ID 집합으로 맞췄습니다.\n- 시너지의 이름, 분류, 대표색, 아이템별 부여 규칙과 전투 효과는 변경하지 않았습니다.\n- PC UI와 ItemDB 항목 변경은 이번 버전의 범위가 아닙니다.\n\n## 현재 결과와 구현 참고\n\n`tools/extract_synergy_icons.py`는 각 개별 원본의 알파 경계를 찾고, 비율을 유지한 채 내용\n영역에 맞춘 다음 제한 팔레트의 가장 가까운 색으로 정규화합니다. `manifest.json`의 스키마를\n2로 올려 `SynergyIconsV2` 스타일과 각 자산의 대표색·업로드 ID를 명시했습니다.\n\n런타임은 `SynergyCatalog.luau`에서 새 26개 ID만 읽습니다. 이전 V1 자산 ID가 남지 않는지,\n원본과 최종본의 파일 수가 정확한지, 크기·알파·팔레트·매니페스트·런타임 ID가 모두 일치하는지\n전용 Python 테스트로 고정했습니다.\n\n## 검증\n\n재생성 도구 실행 후 시너지 자산 테스트 3개와 전체 Luau 백팩 테스트를 통과했습니다. Studio\nMCP Play에서는 iPhone 17 Pro 세로 400×776에서 `TouchEnabled=true`, 26개 고유 업로드 자산,\n262개 시너지 이미지 라벨, 25×25 표시, 빈 이미지 0개를 확인했습니다. Galaxy A06 세로\n359×718에서는 ItemMode 무기 카드가 4열로 재배치된 상태에서 필터와 카드 심볼의 잘림·겹침,\n텍스트 가독성 회귀가 없었습니다. 두 런타임의 콘솔은 비어 있었습니다.\n\nStudio MCP의 화면 캡처가 해당 세션에서 ScreenGui 레이어를 제외한 3D 장면만 반환해, 문서의\n최종 이미지는 같은 연결 세션의 실제 Studio 창을 제한적으로 캡처했습니다. 런타임 상태,\n장치 프리셋, GUI 크기와 콘솔 판정은 계속 Studio MCP를 권위로 사용했으며, 검증 뒤 Studio를\n기본 뷰포트로 복원했습니다.\n\n## 후속 기획\n\n- 새 시너지를 추가할 때는 256px 원본보다 25px 축소 미리보기에서 기존 26종과 먼저 비교합니다.\n- 형태가 혼동되는 쌍이 발견되면 색을 추가하기보다 실루엣의 방향, 빈 공간과 대표 물체를 먼저\n  조정합니다.\n- 자산을 교체할 때는 원본·최종본·매니페스트·업로드 레지스트리·런타임 카탈로그의 동일성\n  검사를 완료 조건으로 유지합니다.\n",
          "source_path": "wiki/content/pages/synergy-icon-system/v001.md",
          "timeline_order": 33
        }
      ]
    },
    {
      "id": "inventory-item-concept",
      "title": "인벤토리와 아이템 개념",
      "summary": "장비 보관함의 스크롤·아이템 잡기 영역을 분명히 나누고, ItemDB 원화 배치·회전·점유 미리보기, 배치 변경 후 룬 이동 선택지, 룬 등급색 안내와 전체 화면 집중 배경을 완성했습니다.",
      "status": "active",
      "category": "gameplay",
      "tags": [
        "inventory",
        "equipment",
        "item-placement",
        "touch",
        "drag",
        "scroll",
        "itemdb",
        "rune-board",
        "mobile",
        "responsive"
      ],
      "created_at": "2026-08-06",
      "updated_at": "2026-08-24",
      "authors": [
        "Codex"
      ],
      "version": 22,
      "change_type": "updated",
      "change_summary": "모바일 장비 작업대에서 보관함 스크롤과 아이템 잡기를 명시적 터치 영역으로 분리하고, 카드 원화·점유·선택 표시를 ItemDB 기준으로 통일했으며, 배치 변경 상태의 룬 이동과 룬 등급색 가이드, 화면 전체 암막을 추가했습니다.",
      "supersedes": "inventory-item-concept@v021",
      "sources": [
        "wiki/content/pages/inventory-item-concept/v021.md",
        "docs/gameplay/inventory-item-layouts.json",
        "src/ReplicatedStorage/BackpackUI/GeneratedItemLayouts.luau",
        "src/ReplicatedStorage/InventoryV2/ItemGesturePolicy.luau",
        "src/ReplicatedStorage/InventoryV2/RuneDragVisualState.luau",
        "src/ReplicatedStorage/InventoryV2/Screen.luau",
        "tests/InventoryV2.spec.luau",
        "tests/test_inventory_v2_ui.py",
        "tests/test_item_db.py",
        "wiki/content/media/inventory-item-concept/v022/studio-default-backdrop-cards-galaxy-a06.jpg",
        "wiki/content/media/inventory-item-concept/v022/studio-default-backdrop-cards-iphone17-pro.jpg",
        "wiki/content/media/inventory-item-concept/v022/studio-selected-rotated-card-galaxy-a06.jpg",
        "wiki/content/media/inventory-item-concept/v022/studio-save-and-rune-move-popup-galaxy-a06.jpg",
        "wiki/content/media/inventory-item-concept/v022/studio-revert-and-rune-move-popup-galaxy-a06.jpg",
        "wiki/content/media/inventory-item-concept/v022/studio-rune-grade-drag-galaxy-a06.jpg"
      ],
      "related": [
        "product-planning-change-log",
        "backpack-combat-stat-database"
      ],
      "validation": [
        "./tools/test_inventory_v2.sh: InventoryV2.spec ok",
        "python3 -m unittest discover -s tests: 142 tests passed",
        "python3 tools/item_db.py check: 48 items, revision 8fb41028ba82d814 통과",
        "node tests/item-db.spec.js: Wiki ItemDB tests passed",
        "Roblox Studio MCP Play · Galaxy A06 portrait · 359×718: 전체 화면 암막, 카드 선택·90° 회전, 저장 가능·불가능 룬 이동 팝업, G0 등급색 룬 드래그 확인",
        "Roblox Studio MCP Play · iPhone 17 Pro portrait · 401×776: 전체 화면 암막, 정사각 장착 요약 20칸, 보관함 스크롤/즉시 잡기 분기와 콘솔 오류 없음 확인",
        "Built-in browser localhost preview: v022 본문 11개 섹션과 Studio 증거 이미지 6개 로드, console warning/error 0 확인",
        "python3 tools/wiki.py build && python3 tools/wiki.py check: 10 pages, 71 revisions, 103 media files 통과",
        "python3 -m unittest tests/test_wiki.py tests.test_repository_policy: 19 tests passed",
        "git diff --check: 통과"
      ],
      "source_path": "wiki/content/pages/inventory-item-concept/v022.md",
      "body": "# 인벤토리와 아이템 개념\n\n## 한눈에 보는 변경\n\n장비 화면의 목표는 좁은 휴대폰에서도 플레이어가 **배치를 정리하고, 보관함을 훑고, 아이템을\n잡고, 룬 성장으로 이동하는 흐름을 실수 없이 이어 가는 것**입니다. 이번 변경은 기능을 더\n늘리기보다 서로 경쟁하던 손가락 동작과 화면 정보를 명확히 나눴습니다.\n\n이제 보관함에서 아이템 그림을 잡아 움직이면 바로 장비를 들고, 카드 여백이나 카드 사이를\n빠르게 위아래로 밀면 목록이 스크롤됩니다. 카드에는 실제 점유 칸과 ItemDB에서 정한 그림의\n크기·위치·회전이 함께 보이며, 선택은 등급 테두리와 혼동되지 않는 라임색 안쪽 선으로\n표시됩니다. 저장하지 않은 배치에서 룬 보드로 가면 막다른 안내 대신 현재 배치를 저장하거나\n되돌린 뒤 한 번에 이동할 수 있습니다.\n\n인벤토리 바깥의 게임 화면은 짙은 배경이 기기 전체를 덮어 작업에 집중하게 합니다. 룬을\n들었을 때는 같은 등급의 능력 칸이 실제 등급색으로 남아, 지금 사용할 수 있는 영역을 색으로\n즉시 구분할 수 있습니다.\n\n## 기획 배경과 목표\n\n장비 보관함에는 서로 반대되는 두 가지 의도가 공존합니다. 플레이어는 아이템을 잡아 배치판에\n옮기고 싶기도 하고, 같은 위치에서 목록을 위아래로 훑고 싶기도 합니다. 카드 전체를 드래그\n영역으로 만들면 스크롤하다 아이템이 들리고, 카드 전체를 스크롤 영역으로 만들면 아이템을\n집을 수 없습니다. 선택 테두리와 등급색이 비슷하면 어떤 장비가 회전 대상인지도 알기 어렵습니다.\n\n또한 배치 작업 중 룬 보드로 이동하려는 순간 저장 여부를 별도 단계에서 해결하게 하면, 방금\n선택한 아이템을 다시 찾아야 합니다. 이번 목표는 다음 네 가지로 정리됩니다.\n\n- 터치 시작 위치와 누른 시간을 이용해 스크롤과 아이템 잡기의 소유권을 분명히 합니다.\n- 보관 카드, 배치판, 드래그 그림이 모두 ItemDB의 같은 원화 배치값을 사용합니다.\n- 저장 가능 여부에 맞는 한 번의 선택으로 배치를 마무리하고 선택한 아이템의 룬 보드로 갑니다.\n- 인벤토리와 룬 편집에서 지금 집중해야 할 화면과 유효 영역을 색과 배경으로 명확히 보여 줍니다.\n\n## 사용자 경험\n\n### 보관함 스크롤과 아이템 잡기\n\n카드 중앙의 아이템 그림은 **즉시 잡기 영역**입니다. 이 영역에서 손가락이 8px 이상 움직이면\n방향과 관계없이 아이템 드래그가 시작되고, 드래그가 시작된 동안 보관함은 움직이지 않습니다.\n따라서 사용자는 그림을 직접 집는다는 감각으로 빠르게 배치할 수 있습니다.\n\n카드의 글자·여백 또는 카드 사이에서 시작한 동작은 목록 탐색을 우선합니다. 0.4초보다 빠른\n세로 움직임은 스크롤이고, 같은 시간 안의 가로 이탈은 아이템을 잘못 드는 대신 취소됩니다.\n0.4초 이상 의도적으로 누른 뒤 움직이면 카드의 어느 위치에서도 아이템을 들 수 있습니다.\n움직이지 않고 유지하면 기존 메뉴 게이지 흐름으로 이어집니다.\n\n| 시작 위치와 동작 | 판정 | 화면 결과 |\n| --- | --- | --- |\n| 아이템 그림에서 8px 이상 이동 | 즉시 아이템 잡기 | 보관함을 고정하고 장비 그림을 들어 올림 |\n| 카드 여백·카드 사이에서 0.4초 이내 세로 이동 | 보관함 스크롤 | 아이템을 들지 않고 목록만 이동 |\n| 카드 여백에서 0.4초 이내 가로 이동 | 취소 | 잘못된 아이템 잡기 방지 |\n| 카드 어디서든 0.4초 이상 누른 뒤 이동 | 아이템 잡기 | 의도적으로 누른 장비를 배치 가능 |\n| 움직이지 않고 유지 | 메뉴 게이지 | 게이지 완료 뒤 아이템 작업 메뉴 표시 |\n\n카드 사이의 실제 빈 공간에도 전용 스크롤 표면이 이어져 있습니다. 눈에 보이는 카드가 아닌\n틈을 잡아도 가장 가까운 아이템이 대신 들리지 않고 목록이 자연스럽게 움직입니다.\n\n### 카드가 보여 주는 실제 배치 정보\n\n보관 카드는 그림만 보여 주지 않고 그 장비가 차지하는 사각 칸을 함께 그립니다. 회전 버튼을\n누르면 점유 칸과 그림이 같은 90° 방향으로 돌아가므로, 배치판에 놓기 전에 필요한 모양을\n예측할 수 있습니다. 카드 그림의 크기와 중심도 별도 카드용 상수가 아니라 웹 ItemDB에서\n확정해 게임에 구운 배율과 X/Y 보정값을 그대로 사용합니다.\n\n증폭 펜던트와 집중의 반지는 공개 ItemDB와 런타임 카드에서 같은 중심으로 보이도록 원본\n보정값을 다시 맞췄습니다. 연격의 톱니검처럼 크기 조절이 중요한 장비도 점유의 가장 긴 변을\n기준으로 ItemDB 배율을 적용하므로, 카드와 배치판에서 서로 다른 크기로 보이지 않습니다.\n\n모든 카드의 기본 외곽선은 같은 얇은 중립색입니다. 등급을 두꺼운 외곽선으로 표현하지 않고,\n현재 선택된 카드에만 안쪽 라임색 선을 추가합니다. 회전 대상이 어느 카드인지 색과 두께로\n즉시 구분됩니다.\n\n![선택하고 회전한 보관 카드](./media/inventory-item-concept/v022/studio-selected-rotated-card-galaxy-a06.jpg \"첫 번째 보관 카드의 라임색 안쪽 선택선과 함께 아이템 그림·점유 칸이 90° 회전한 Galaxy A06 상태\")\n\n## 배치 변경 후 룬 보드로 이동\n\n장비 배치에 저장하지 않은 변경이 있을 때 장착 요약의 `룬 보드 편집`을 누르면, 선택한\n아이템을 기억한 채 `배치에 변동이 있었습니다` 팝업이 열립니다.\n\n- 모든 배치가 정상이라면 `저장하고 이동하기`와 `배치로 돌아가기`가 표시됩니다. 첫 버튼은\n  전체 배치를 저장한 뒤 처음 선택한 아이템의 룬 보드로 바로 이동합니다.\n- 잠긴 칸, 판 밖, 겹침 제한 등으로 저장할 수 없다면 `배치를 되돌리고 이동하기`와\n  `배치로 돌아가기`가 표시됩니다. 첫 버튼은 마지막 저장 상태를 복원한 뒤 같은 아이템의\n  룬 보드로 이동합니다.\n- 서버 저장이 실패하면 이동하지 않고 현재 화면에 남으며, 보류 중인 이동 대상도 지웁니다.\n\n![정상 배치의 저장 후 이동 선택](./media/inventory-item-concept/v022/studio-save-and-rune-move-popup-galaxy-a06.jpg \"정상적인 변경 상태에서는 현재 배치를 저장하고 선택한 장비의 룬 보드로 바로 가거나 배치로 돌아갈 수 있음\")\n\n![잘못된 배치의 되돌리기 후 이동 선택](./media/inventory-item-concept/v022/studio-revert-and-rune-move-popup-galaxy-a06.jpg \"잠긴 칸에 놓여 저장할 수 없는 빨간 배치에서는 마지막 저장 상태로 되돌린 뒤 이동하거나 배치로 돌아갈 수 있음\")\n\n## 룬 드래그의 등급색 안내\n\n룬을 들면 해당 룬과 같은 등급의 열린 능력 칸만 강조됩니다. 이전에는 능력 칸이 모두 같은\n어두운 색으로 남아 등급 차이를 읽기 어려웠지만, 이제 G0~G6에 대응하는 먹빛·상아·초록·\n하늘·보라·황금·장미색을 그대로 사용합니다. 배치 가능한 연결 칸의 라임색은 등급색보다 위에\n표시되고, 잠긴 칸은 등급색을 가장하지 않습니다.\n\n![룬을 든 동안 유지되는 같은 등급 칸 색](./media/inventory-item-concept/v022/studio-rune-grade-drag-galaxy-a06.jpg \"G0 룬을 드래그할 때 같은 등급의 열린 능력 칸 여덟 개는 먹빛 등급색과 아이콘을 유지하고 유효 연결 칸은 라임색으로 구분됨\")\n\n## 화면 전체 집중 배경\n\n기존 인벤토리 본체는 노치와 Roblox 상단 UI를 피하는 안전 영역 안에 배치됩니다. 이 규칙을\n바꾸지 않으면서도 인벤토리 밖으로 필드 배경이 보이지 않도록, 본체보다 한 단계 아래에 기기\n전체를 덮는 불투명한 짙은 배경을 분리했습니다. 배경은 상단·하단 안전 영역 바깥까지 덮고\n뒤쪽 게임 입력도 막으며, 인벤토리를 닫으면 함께 사라집니다.\n\n![Galaxy A06 전체 화면 집중 배경과 보관 카드](./media/inventory-item-concept/v022/studio-default-backdrop-cards-galaxy-a06.jpg \"359×718 Galaxy A06에서 인벤토리 본체 바깥의 상단·하단까지 짙은 배경이 덮이고 보관 카드에 실제 점유 칸이 함께 표시됨\")\n\n![iPhone 17 Pro 반응형 결과](./media/inventory-item-concept/v022/studio-default-backdrop-cards-iphone17-pro.jpg \"401×776 iPhone 17 Pro에서도 안전 영역 본체는 유지하면서 기기 전체 배경, 무기·장비 정사각 요약 20칸과 보관 카드가 같은 정보 위계로 표시됨\")\n\n## 핵심 원칙과 결정\n\n- 스크롤과 아이템 잡기는 추측이 아니라 시작 영역과 시간 경계로 소유권을 나눕니다.\n- 아이템 그림을 직접 잡는 동작은 즉시 반응하고, 카드 여백과 카드 사이는 목록 탐색을 우선합니다.\n- 선택 표시는 등급 표현과 분리해 현재 조작 대상을 한 가지 색으로만 강조합니다.\n- ItemDB가 카드·배치판·드래그 그림의 원화 크기, 중심, 회전과 점유 정보의 단일 기준입니다.\n- 저장하지 않은 변경은 이동을 막는 경고가 아니라 저장 가능 여부에 맞춘 다음 행동으로 연결합니다.\n- 룬 드래그는 같은 등급의 열린 영역만 실제 등급색으로 보여 줍니다.\n- 안전 영역은 필수 조작 배치에만 사용하고, 집중 배경은 기기 전체를 덮습니다.\n- PC 화면 품질과 마우스 동등성은 현재 완료 범위가 아닙니다.\n\n## 현재 결과\n\nGalaxy A06 359×718 세로 Play에서 기본 화면, 선택·90° 회전 카드, 저장 가능한 배치와\n저장 불가능한 배치의 룬 이동 팝업, G0 룬 드래그를 확인했습니다. iPhone 17 Pro 401×776에서는\n장착 요약 20칸이 모두 정사각형이고 전체 화면 배경이 안전 영역 밖까지 덮였으며, 빠른 세로\n동작은 스크롤, 아이템 그림 동작은 즉시 드래그로 분리됐습니다. 두 실행의 Studio 콘솔에는\n오류가 없었습니다.\n\n## 구현 참고\n\n보관 카드에는 전체 카드 입력층과 중앙 그림 입력층이 따로 있습니다. 입력 정책은 중앙 층의\n즉시 잡기 여부와 카드 여백의 0.4초 경계를 받아 스크롤·취소·드래그를 결정합니다. 카드 사이의\n가로·세로 틈에는 투명 스크롤 표면을 카드보다 위에 배치하되 카드 자체를 덮지 않습니다.\n\n원화 표현 계산은 점유 칸의 회전된 폭·높이, ItemDB 중심 보정과 배율을 하나의 공통 결과로\n만들어 보관 카드, 배치판, 점유 미리보기가 공유합니다. ItemDB 원본을 다시 빌드해 생성 런타임과\n공개 웹 DB의 리비전을 `8fb41028ba82d814`로 맞췄습니다.\n\n룬 이동 팝업은 장비 초안의 유효성을 다시 검사한 뒤 저장 또는 되돌리기를 선택합니다. 저장\n성공 응답을 받은 경우에만 기억해 둔 아이템의 룬 화면을 열고, 실패하거나 팝업을 닫으면 보류\n상태를 정리합니다. 전체 화면 배경은 안전 영역을 쓰지 않는 별도 화면 레이어이고 인벤토리\n본체는 기존 안전 영역 레이어를 유지합니다.\n\n## 검증\n\n- Luau 스펙으로 보관함의 빠른 세로 스크롤, 중앙 그림 즉시 잡기, 0.4초 이후 드래그와 룬\n  등급색 상태를 확인했습니다.\n- Python 전체 검사 142개로 카드 점유·회전·ItemDB 보정, 선택 외곽선, 카드 사이 스크롤,\n  저장·되돌리기 룬 이동 팝업과 전체 화면 배경 계약을 확인했습니다.\n- ItemDB 검사로 활성 48종과 공개 DB·생성 런타임의 동일 리비전을 확인했습니다.\n- Studio MCP Play에서 두 모바일 화면비와 여섯 최종 상태를 캡처하고 콘솔 오류가 없음을\n  확인했습니다.\n\n## 후속 기획\n\n현재 입력 구역은 카드 중앙 그림을 충분히 크게 유지하면서 카드 가장자리와 사이 공간을\n스크롤에 남기는 기준입니다. 향후 카드 밀도나 글자 영역이 크게 달라지면 같은 원칙을 유지한\n채 즉시 잡기 영역의 비율만 모바일 사용성 시험으로 조정합니다. ItemDB의 그림 배치값은 이후\n웹에서 변경할 때도 빌드·게임 굽기·Studio 확인을 한 단위로 취급합니다.\n",
      "revisions": [
        {
          "id": "inventory-item-concept",
          "title": "인벤토리와 아이템 개념",
          "summary": "장비 보관함의 스크롤·아이템 잡기 영역을 분명히 나누고, ItemDB 원화 배치·회전·점유 미리보기, 배치 변경 후 룬 이동 선택지, 룬 등급색 안내와 전체 화면 집중 배경을 완성했습니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "inventory",
            "equipment",
            "item-placement",
            "touch",
            "drag",
            "scroll",
            "itemdb",
            "rune-board",
            "mobile",
            "responsive"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-24",
          "authors": [
            "Codex"
          ],
          "version": 22,
          "change_type": "updated",
          "change_summary": "모바일 장비 작업대에서 보관함 스크롤과 아이템 잡기를 명시적 터치 영역으로 분리하고, 카드 원화·점유·선택 표시를 ItemDB 기준으로 통일했으며, 배치 변경 상태의 룬 이동과 룬 등급색 가이드, 화면 전체 암막을 추가했습니다.",
          "supersedes": "inventory-item-concept@v021",
          "sources": [
            "wiki/content/pages/inventory-item-concept/v021.md",
            "docs/gameplay/inventory-item-layouts.json",
            "src/ReplicatedStorage/BackpackUI/GeneratedItemLayouts.luau",
            "src/ReplicatedStorage/InventoryV2/ItemGesturePolicy.luau",
            "src/ReplicatedStorage/InventoryV2/RuneDragVisualState.luau",
            "src/ReplicatedStorage/InventoryV2/Screen.luau",
            "tests/InventoryV2.spec.luau",
            "tests/test_inventory_v2_ui.py",
            "tests/test_item_db.py",
            "wiki/content/media/inventory-item-concept/v022/studio-default-backdrop-cards-galaxy-a06.jpg",
            "wiki/content/media/inventory-item-concept/v022/studio-default-backdrop-cards-iphone17-pro.jpg",
            "wiki/content/media/inventory-item-concept/v022/studio-selected-rotated-card-galaxy-a06.jpg",
            "wiki/content/media/inventory-item-concept/v022/studio-save-and-rune-move-popup-galaxy-a06.jpg",
            "wiki/content/media/inventory-item-concept/v022/studio-revert-and-rune-move-popup-galaxy-a06.jpg",
            "wiki/content/media/inventory-item-concept/v022/studio-rune-grade-drag-galaxy-a06.jpg"
          ],
          "related": [
            "product-planning-change-log",
            "backpack-combat-stat-database"
          ],
          "validation": [
            "./tools/test_inventory_v2.sh: InventoryV2.spec ok",
            "python3 -m unittest discover -s tests: 142 tests passed",
            "python3 tools/item_db.py check: 48 items, revision 8fb41028ba82d814 통과",
            "node tests/item-db.spec.js: Wiki ItemDB tests passed",
            "Roblox Studio MCP Play · Galaxy A06 portrait · 359×718: 전체 화면 암막, 카드 선택·90° 회전, 저장 가능·불가능 룬 이동 팝업, G0 등급색 룬 드래그 확인",
            "Roblox Studio MCP Play · iPhone 17 Pro portrait · 401×776: 전체 화면 암막, 정사각 장착 요약 20칸, 보관함 스크롤/즉시 잡기 분기와 콘솔 오류 없음 확인",
            "Built-in browser localhost preview: v022 본문 11개 섹션과 Studio 증거 이미지 6개 로드, console warning/error 0 확인",
            "python3 tools/wiki.py build && python3 tools/wiki.py check: 10 pages, 71 revisions, 103 media files 통과",
            "python3 -m unittest tests/test_wiki.py tests.test_repository_policy: 19 tests passed",
            "git diff --check: 통과"
          ],
          "body": "# 인벤토리와 아이템 개념\n\n## 한눈에 보는 변경\n\n장비 화면의 목표는 좁은 휴대폰에서도 플레이어가 **배치를 정리하고, 보관함을 훑고, 아이템을\n잡고, 룬 성장으로 이동하는 흐름을 실수 없이 이어 가는 것**입니다. 이번 변경은 기능을 더\n늘리기보다 서로 경쟁하던 손가락 동작과 화면 정보를 명확히 나눴습니다.\n\n이제 보관함에서 아이템 그림을 잡아 움직이면 바로 장비를 들고, 카드 여백이나 카드 사이를\n빠르게 위아래로 밀면 목록이 스크롤됩니다. 카드에는 실제 점유 칸과 ItemDB에서 정한 그림의\n크기·위치·회전이 함께 보이며, 선택은 등급 테두리와 혼동되지 않는 라임색 안쪽 선으로\n표시됩니다. 저장하지 않은 배치에서 룬 보드로 가면 막다른 안내 대신 현재 배치를 저장하거나\n되돌린 뒤 한 번에 이동할 수 있습니다.\n\n인벤토리 바깥의 게임 화면은 짙은 배경이 기기 전체를 덮어 작업에 집중하게 합니다. 룬을\n들었을 때는 같은 등급의 능력 칸이 실제 등급색으로 남아, 지금 사용할 수 있는 영역을 색으로\n즉시 구분할 수 있습니다.\n\n## 기획 배경과 목표\n\n장비 보관함에는 서로 반대되는 두 가지 의도가 공존합니다. 플레이어는 아이템을 잡아 배치판에\n옮기고 싶기도 하고, 같은 위치에서 목록을 위아래로 훑고 싶기도 합니다. 카드 전체를 드래그\n영역으로 만들면 스크롤하다 아이템이 들리고, 카드 전체를 스크롤 영역으로 만들면 아이템을\n집을 수 없습니다. 선택 테두리와 등급색이 비슷하면 어떤 장비가 회전 대상인지도 알기 어렵습니다.\n\n또한 배치 작업 중 룬 보드로 이동하려는 순간 저장 여부를 별도 단계에서 해결하게 하면, 방금\n선택한 아이템을 다시 찾아야 합니다. 이번 목표는 다음 네 가지로 정리됩니다.\n\n- 터치 시작 위치와 누른 시간을 이용해 스크롤과 아이템 잡기의 소유권을 분명히 합니다.\n- 보관 카드, 배치판, 드래그 그림이 모두 ItemDB의 같은 원화 배치값을 사용합니다.\n- 저장 가능 여부에 맞는 한 번의 선택으로 배치를 마무리하고 선택한 아이템의 룬 보드로 갑니다.\n- 인벤토리와 룬 편집에서 지금 집중해야 할 화면과 유효 영역을 색과 배경으로 명확히 보여 줍니다.\n\n## 사용자 경험\n\n### 보관함 스크롤과 아이템 잡기\n\n카드 중앙의 아이템 그림은 **즉시 잡기 영역**입니다. 이 영역에서 손가락이 8px 이상 움직이면\n방향과 관계없이 아이템 드래그가 시작되고, 드래그가 시작된 동안 보관함은 움직이지 않습니다.\n따라서 사용자는 그림을 직접 집는다는 감각으로 빠르게 배치할 수 있습니다.\n\n카드의 글자·여백 또는 카드 사이에서 시작한 동작은 목록 탐색을 우선합니다. 0.4초보다 빠른\n세로 움직임은 스크롤이고, 같은 시간 안의 가로 이탈은 아이템을 잘못 드는 대신 취소됩니다.\n0.4초 이상 의도적으로 누른 뒤 움직이면 카드의 어느 위치에서도 아이템을 들 수 있습니다.\n움직이지 않고 유지하면 기존 메뉴 게이지 흐름으로 이어집니다.\n\n| 시작 위치와 동작 | 판정 | 화면 결과 |\n| --- | --- | --- |\n| 아이템 그림에서 8px 이상 이동 | 즉시 아이템 잡기 | 보관함을 고정하고 장비 그림을 들어 올림 |\n| 카드 여백·카드 사이에서 0.4초 이내 세로 이동 | 보관함 스크롤 | 아이템을 들지 않고 목록만 이동 |\n| 카드 여백에서 0.4초 이내 가로 이동 | 취소 | 잘못된 아이템 잡기 방지 |\n| 카드 어디서든 0.4초 이상 누른 뒤 이동 | 아이템 잡기 | 의도적으로 누른 장비를 배치 가능 |\n| 움직이지 않고 유지 | 메뉴 게이지 | 게이지 완료 뒤 아이템 작업 메뉴 표시 |\n\n카드 사이의 실제 빈 공간에도 전용 스크롤 표면이 이어져 있습니다. 눈에 보이는 카드가 아닌\n틈을 잡아도 가장 가까운 아이템이 대신 들리지 않고 목록이 자연스럽게 움직입니다.\n\n### 카드가 보여 주는 실제 배치 정보\n\n보관 카드는 그림만 보여 주지 않고 그 장비가 차지하는 사각 칸을 함께 그립니다. 회전 버튼을\n누르면 점유 칸과 그림이 같은 90° 방향으로 돌아가므로, 배치판에 놓기 전에 필요한 모양을\n예측할 수 있습니다. 카드 그림의 크기와 중심도 별도 카드용 상수가 아니라 웹 ItemDB에서\n확정해 게임에 구운 배율과 X/Y 보정값을 그대로 사용합니다.\n\n증폭 펜던트와 집중의 반지는 공개 ItemDB와 런타임 카드에서 같은 중심으로 보이도록 원본\n보정값을 다시 맞췄습니다. 연격의 톱니검처럼 크기 조절이 중요한 장비도 점유의 가장 긴 변을\n기준으로 ItemDB 배율을 적용하므로, 카드와 배치판에서 서로 다른 크기로 보이지 않습니다.\n\n모든 카드의 기본 외곽선은 같은 얇은 중립색입니다. 등급을 두꺼운 외곽선으로 표현하지 않고,\n현재 선택된 카드에만 안쪽 라임색 선을 추가합니다. 회전 대상이 어느 카드인지 색과 두께로\n즉시 구분됩니다.\n\n![선택하고 회전한 보관 카드](./media/inventory-item-concept/v022/studio-selected-rotated-card-galaxy-a06.jpg \"첫 번째 보관 카드의 라임색 안쪽 선택선과 함께 아이템 그림·점유 칸이 90° 회전한 Galaxy A06 상태\")\n\n## 배치 변경 후 룬 보드로 이동\n\n장비 배치에 저장하지 않은 변경이 있을 때 장착 요약의 `룬 보드 편집`을 누르면, 선택한\n아이템을 기억한 채 `배치에 변동이 있었습니다` 팝업이 열립니다.\n\n- 모든 배치가 정상이라면 `저장하고 이동하기`와 `배치로 돌아가기`가 표시됩니다. 첫 버튼은\n  전체 배치를 저장한 뒤 처음 선택한 아이템의 룬 보드로 바로 이동합니다.\n- 잠긴 칸, 판 밖, 겹침 제한 등으로 저장할 수 없다면 `배치를 되돌리고 이동하기`와\n  `배치로 돌아가기`가 표시됩니다. 첫 버튼은 마지막 저장 상태를 복원한 뒤 같은 아이템의\n  룬 보드로 이동합니다.\n- 서버 저장이 실패하면 이동하지 않고 현재 화면에 남으며, 보류 중인 이동 대상도 지웁니다.\n\n![정상 배치의 저장 후 이동 선택](./media/inventory-item-concept/v022/studio-save-and-rune-move-popup-galaxy-a06.jpg \"정상적인 변경 상태에서는 현재 배치를 저장하고 선택한 장비의 룬 보드로 바로 가거나 배치로 돌아갈 수 있음\")\n\n![잘못된 배치의 되돌리기 후 이동 선택](./media/inventory-item-concept/v022/studio-revert-and-rune-move-popup-galaxy-a06.jpg \"잠긴 칸에 놓여 저장할 수 없는 빨간 배치에서는 마지막 저장 상태로 되돌린 뒤 이동하거나 배치로 돌아갈 수 있음\")\n\n## 룬 드래그의 등급색 안내\n\n룬을 들면 해당 룬과 같은 등급의 열린 능력 칸만 강조됩니다. 이전에는 능력 칸이 모두 같은\n어두운 색으로 남아 등급 차이를 읽기 어려웠지만, 이제 G0~G6에 대응하는 먹빛·상아·초록·\n하늘·보라·황금·장미색을 그대로 사용합니다. 배치 가능한 연결 칸의 라임색은 등급색보다 위에\n표시되고, 잠긴 칸은 등급색을 가장하지 않습니다.\n\n![룬을 든 동안 유지되는 같은 등급 칸 색](./media/inventory-item-concept/v022/studio-rune-grade-drag-galaxy-a06.jpg \"G0 룬을 드래그할 때 같은 등급의 열린 능력 칸 여덟 개는 먹빛 등급색과 아이콘을 유지하고 유효 연결 칸은 라임색으로 구분됨\")\n\n## 화면 전체 집중 배경\n\n기존 인벤토리 본체는 노치와 Roblox 상단 UI를 피하는 안전 영역 안에 배치됩니다. 이 규칙을\n바꾸지 않으면서도 인벤토리 밖으로 필드 배경이 보이지 않도록, 본체보다 한 단계 아래에 기기\n전체를 덮는 불투명한 짙은 배경을 분리했습니다. 배경은 상단·하단 안전 영역 바깥까지 덮고\n뒤쪽 게임 입력도 막으며, 인벤토리를 닫으면 함께 사라집니다.\n\n![Galaxy A06 전체 화면 집중 배경과 보관 카드](./media/inventory-item-concept/v022/studio-default-backdrop-cards-galaxy-a06.jpg \"359×718 Galaxy A06에서 인벤토리 본체 바깥의 상단·하단까지 짙은 배경이 덮이고 보관 카드에 실제 점유 칸이 함께 표시됨\")\n\n![iPhone 17 Pro 반응형 결과](./media/inventory-item-concept/v022/studio-default-backdrop-cards-iphone17-pro.jpg \"401×776 iPhone 17 Pro에서도 안전 영역 본체는 유지하면서 기기 전체 배경, 무기·장비 정사각 요약 20칸과 보관 카드가 같은 정보 위계로 표시됨\")\n\n## 핵심 원칙과 결정\n\n- 스크롤과 아이템 잡기는 추측이 아니라 시작 영역과 시간 경계로 소유권을 나눕니다.\n- 아이템 그림을 직접 잡는 동작은 즉시 반응하고, 카드 여백과 카드 사이는 목록 탐색을 우선합니다.\n- 선택 표시는 등급 표현과 분리해 현재 조작 대상을 한 가지 색으로만 강조합니다.\n- ItemDB가 카드·배치판·드래그 그림의 원화 크기, 중심, 회전과 점유 정보의 단일 기준입니다.\n- 저장하지 않은 변경은 이동을 막는 경고가 아니라 저장 가능 여부에 맞춘 다음 행동으로 연결합니다.\n- 룬 드래그는 같은 등급의 열린 영역만 실제 등급색으로 보여 줍니다.\n- 안전 영역은 필수 조작 배치에만 사용하고, 집중 배경은 기기 전체를 덮습니다.\n- PC 화면 품질과 마우스 동등성은 현재 완료 범위가 아닙니다.\n\n## 현재 결과\n\nGalaxy A06 359×718 세로 Play에서 기본 화면, 선택·90° 회전 카드, 저장 가능한 배치와\n저장 불가능한 배치의 룬 이동 팝업, G0 룬 드래그를 확인했습니다. iPhone 17 Pro 401×776에서는\n장착 요약 20칸이 모두 정사각형이고 전체 화면 배경이 안전 영역 밖까지 덮였으며, 빠른 세로\n동작은 스크롤, 아이템 그림 동작은 즉시 드래그로 분리됐습니다. 두 실행의 Studio 콘솔에는\n오류가 없었습니다.\n\n## 구현 참고\n\n보관 카드에는 전체 카드 입력층과 중앙 그림 입력층이 따로 있습니다. 입력 정책은 중앙 층의\n즉시 잡기 여부와 카드 여백의 0.4초 경계를 받아 스크롤·취소·드래그를 결정합니다. 카드 사이의\n가로·세로 틈에는 투명 스크롤 표면을 카드보다 위에 배치하되 카드 자체를 덮지 않습니다.\n\n원화 표현 계산은 점유 칸의 회전된 폭·높이, ItemDB 중심 보정과 배율을 하나의 공통 결과로\n만들어 보관 카드, 배치판, 점유 미리보기가 공유합니다. ItemDB 원본을 다시 빌드해 생성 런타임과\n공개 웹 DB의 리비전을 `8fb41028ba82d814`로 맞췄습니다.\n\n룬 이동 팝업은 장비 초안의 유효성을 다시 검사한 뒤 저장 또는 되돌리기를 선택합니다. 저장\n성공 응답을 받은 경우에만 기억해 둔 아이템의 룬 화면을 열고, 실패하거나 팝업을 닫으면 보류\n상태를 정리합니다. 전체 화면 배경은 안전 영역을 쓰지 않는 별도 화면 레이어이고 인벤토리\n본체는 기존 안전 영역 레이어를 유지합니다.\n\n## 검증\n\n- Luau 스펙으로 보관함의 빠른 세로 스크롤, 중앙 그림 즉시 잡기, 0.4초 이후 드래그와 룬\n  등급색 상태를 확인했습니다.\n- Python 전체 검사 142개로 카드 점유·회전·ItemDB 보정, 선택 외곽선, 카드 사이 스크롤,\n  저장·되돌리기 룬 이동 팝업과 전체 화면 배경 계약을 확인했습니다.\n- ItemDB 검사로 활성 48종과 공개 DB·생성 런타임의 동일 리비전을 확인했습니다.\n- Studio MCP Play에서 두 모바일 화면비와 여섯 최종 상태를 캡처하고 콘솔 오류가 없음을\n  확인했습니다.\n\n## 후속 기획\n\n현재 입력 구역은 카드 중앙 그림을 충분히 크게 유지하면서 카드 가장자리와 사이 공간을\n스크롤에 남기는 기준입니다. 향후 카드 밀도나 글자 영역이 크게 달라지면 같은 원칙을 유지한\n채 즉시 잡기 영역의 비율만 모바일 사용성 시험으로 조정합니다. ItemDB의 그림 배치값은 이후\n웹에서 변경할 때도 빌드·게임 굽기·Studio 확인을 한 단위로 취급합니다.\n",
          "source_path": "wiki/content/pages/inventory-item-concept/v022.md",
          "timeline_order": 45
        },
        {
          "id": "inventory-item-concept",
          "title": "인벤토리와 아이템 개념",
          "summary": "모바일 장비 배치판·도구·무기 여섯 칸·부위별 장비 칸을 한 화면에 재구성하고, 요약 칸의 상세·룬 보드·보관 이동과 시간 기반 터치 분기를 완성했습니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "inventory",
            "equipment",
            "item-placement",
            "touch",
            "drag",
            "draft",
            "details",
            "mobile",
            "rune-board",
            "responsive"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-23",
          "authors": [
            "Codex"
          ],
          "version": 21,
          "change_type": "updated",
          "change_summary": "장비 배치 화면을 모바일 전용 작업대로 재구성하고 장착 무기·장비 요약, 세 가지 빠른 메뉴, 확대판 이동, 배치 순서 보존, 효과 정보 자리, 터치 입력 중재와 낮아진 드래그 오프셋을 추가했습니다.",
          "supersedes": "inventory-item-concept@v020",
          "sources": [
            "wiki/content/pages/inventory-item-concept/v020.md",
            "docs/gameplay/references/equipment-placement-ui/mobile-equipment-placement-v001.png",
            "src/ReplicatedStorage/InventoryV2/InventoryModel.luau",
            "src/ReplicatedStorage/InventoryV2/ItemGesturePolicy.luau",
            "src/ReplicatedStorage/InventoryV2/ItemPlacementDraft.luau",
            "src/ReplicatedStorage/InventoryV2/Screen.luau",
            "src/ReplicatedStorage/InventoryV2/StateSerializer.luau",
            "src/ReplicatedStorage/InventoryV2/VisualTokens.luau",
            "src/ServerScriptService/InventoryV2Service.luau",
            "tests/InventoryV2.spec.luau",
            "tests/test_inventory_v2_ui.py",
            "wiki/content/media/inventory-item-concept/v021/concept-equipment-placement.png",
            "wiki/content/media/inventory-item-concept/v021/studio-default-galaxy-a06.jpg",
            "wiki/content/media/inventory-item-concept/v021/studio-quick-menu-galaxy-a06.jpg",
            "wiki/content/media/inventory-item-concept/v021/studio-drag-lift-galaxy-a06.jpg"
          ],
          "related": [
            "product-planning-change-log",
            "backpack-combat-stat-database"
          ],
          "validation": [
            "./tools/test_inventory_v2.sh: InventoryV2.spec ok",
            "python3 -m unittest tests.test_inventory_v2_ui: 28 tests passed",
            "python3 -m unittest discover -s tests: 135 tests passed",
            "Roblox Studio MCP Play · Galaxy A06 portrait · 359×718: 기본 구성, 196×213 빠른 메뉴, 세 버튼 순서, 아이템 터치 드래그 오프셋 34px 확인",
            "Roblox Studio MCP Play · iPhone 17 Pro portrait · 401×776: 빠른 메뉴 경계, 상세·룬 보드·보관 동작 연결, 정사각 요약 칸과 비스크롤 구성 확인",
            "Roblox Studio MCP iPhone 17 Pro Play console: 오류 없음",
            "Built-in browser localhost preview: v021 본문, 시안·Studio 이미지 4개, 터치 판정 표 4행, console warning/error 0 확인",
            "python3 tools/wiki.py build && python3 tools/wiki.py check: 10 pages, 69 revisions, 97 media files 통과",
            "python3 -m unittest tests/test_wiki.py tests.test_repository_policy: 19 tests passed",
            "git diff --check: 통과"
          ],
          "body": "# 인벤토리와 아이템 개념\n\n## 한눈에 보는 변경\n\n모바일 장비 화면을 **배치판을 중심으로 무기·장비 상태와 조작을 한눈에 관리하는 작업대**로\n재구성했습니다. 가운데에는 9×9 배치판, 오른쪽 위에는 확대·축소·원상태·회전 도구, 오른쪽\n아래에는 부위별 장비, 가운데 아래에는 배치 순서대로 최대 여섯 개의 무기가 표시됩니다.\n\n이 변경의 이유는 장비를 배치한 뒤 별도 탭을 오가며 결과를 확인하던 비용을 줄이고, 좁은\n모바일 화면에서도 배치·확인·상세 보기·룬 편집·보관 이동을 같은 문맥 안에서 끝내기 위해서입니다.\n플레이어가 손가락으로 아이템을 잡을 때는 그림을 포인터 위로 34px만 띄워 가시성은 유지하면서\n이전보다 과도하게 멀어지지 않게 했습니다.\n\n## 기획 배경과 목표\n\n장비 배치는 공간 퍼즐이면서 전투 준비 화면입니다. 따라서 큰 배치판만 보여 주는 것으로는\n부족하고, 현재 어떤 무기와 부위 장비가 실제 장착 상태인지도 즉시 읽혀야 합니다. 반대로 요약\n영역이 별도 스크롤을 만들거나 저장 버튼이 나타날 때 전체 화면을 축소하면, 플레이어가 막\n정리한 배치의 위치가 흔들립니다.\n\n이번 목표는 다음 세 가지입니다.\n\n- 화면 크기가 달라도 요약 칸을 모두 정사각형으로 유지하고 스크롤 없이 표시합니다.\n- 장착 요약에서 상세 정보, 룬 성장, 보관 이동까지 바로 이어지게 합니다.\n- 한 아이템 위에서 시작한 터치를 시간과 움직임으로 나눠 판 이동, 아이템 이동, 메뉴 열기가\n  서로의 입력을 빼앗지 않게 합니다.\n\n## 시안에서 최종 화면으로\n\n초기 시안은 큰 중앙 배치판, 아래 여섯 무기, 우측 도구와 장비 슬롯이라는 정보 위계를\n정의했습니다.\n\n![장비 배치 화면 시안](./media/inventory-item-concept/v021/concept-equipment-placement.png \"중앙 배치판, 하단 여섯 무기, 우측 도구와 부위별 장비라는 핵심 위계를 먼저 정한 모바일 UI 시안\")\n\n최종 화면은 이 위계를 Roblox 기본 UI 요소로 구현하되, 이후 결정한 모바일 규칙에 맞게\n요약 칸을 더 작고 정사각형으로 만들었습니다. 화면 높이에 따라 칸과 간격을 함께 줄여 무기\n여섯 칸과 장비 열 칸이 각각의 영역 안에 항상 들어가며, 요약 영역에는 스크롤이 생기지 않습니다.\n상단 탭도 최소 터치 크기를 유지하는 범위에서 높이와 내부 여백을 줄여 배치판 공간을 돌려줬습니다.\n\n![Galaxy A06 최종 기본 화면](./media/inventory-item-concept/v021/studio-default-galaxy-a06.jpg \"359×718 화면에서 중앙 배치판, 하단 여섯 무기, 우측 도구와 열 개 장비 칸, 하단 보관함이 스크롤 없는 요약 구성으로 함께 보이는 최종 상태\")\n\n## 장착 상태와 빠른 작업\n\n장착 무기는 유효한 장비 배치에 들어온 순서를 저장해 왼쪽부터 최대 여섯 개까지 표시합니다.\n아이템을 다른 위치로 옮기거나 겹친 아이템이 밀려나도 이 순서는 유지됩니다. 무기가 아닌 장비는\n오른쪽의 머리·귀걸이·목걸이·상의·장갑·하의·벨트·반지 둘·신발 칸에 나타납니다.\n\n채워진 무기 또는 장비 칸을 누르면 선택한 칸 옆에 작은 메뉴가 열립니다. 메뉴 상단에는 아이템\n이름, 등급, 공격력, 공격 속도가 나오고 버튼은 다음 순서입니다.\n\n1. 상세 정보\n2. 룬 보드 편집\n3. 보관함으로 이동\n\n룬 보드 편집은 해당 아이템을 선택한 룬 장착 화면으로 이동합니다. 저장하지 않은 장비 초안이\n있다면 기존 안전 규칙에 따라 먼저 저장하거나 되돌리도록 안내합니다. 보관함으로 이동은 즉시\n영구 저장하지 않고 장비 초안에서 제거하므로, 최종 저장 또는 되돌리기로 확정 여부를 정합니다.\n\n![장착 아이템 빠른 메뉴](./media/inventory-item-concept/v021/studio-quick-menu-galaxy-a06.jpg \"선택한 무기 옆에 이름·등급·공격력·공격 속도와 상세 정보, 룬 보드 편집, 보관함으로 이동 버튼을 순서대로 표시한 상태\")\n\n## 배치판 조작과 터치 판정\n\n확대·축소는 배치판 내부 내용만 바꾸며 눈에 보이는 스크롤바를 만들지 않습니다. 확대된 판은\n직접 끌어 이동하고 원상태로 배율과 중심을 함께 복원합니다. 아이템이 선택됐을 때만 회전\n버튼이 보이고, 회전하면 점유 칸과 아이템 그림이 같은 90° 방향으로 돌아갑니다.\n\n배치 아이템 위에서 시작한 터치는 다음처럼 나뉩니다.\n\n| 움직임 시점 | 판정 | 플레이어가 보는 결과 |\n| --- | --- | --- |\n| 누른 뒤 0.3초 이내 | 확대된 배치판 이동 | 아이템을 집지 않고 판을 끌어 탐색 |\n| 0.3초 이상 1초 미만 | 아이템 드래그 | 선택한 장비를 새 위치로 이동 |\n| 1초까지 움직임 없음 | 메뉴 게이지 시작 | 이후 1초 동안 게이지가 차고 작업 메뉴 표시 |\n| 1초 이후 움직임 | 대기 취소 | 메뉴와 의도치 않은 이동을 함께 막음 |\n\n보관함 아이템은 처음 0.5초 동안 시작된 움직임을 드래그로 우선 판정합니다. 아이템을 실제로\n집은 순간 보관함 스크롤을 잠그고 놓은 뒤 원래 위치에서 다시 열기 때문에, 드래그 도중 목록이\n함께 움직이지 않습니다.\n\n![낮아진 아이템 드래그 위치](./media/inventory-item-concept/v021/studio-drag-lift-galaxy-a06.jpg \"손가락에 가려지지 않도록 아이템을 위로 띄우되 이전 68px의 절반인 34px만 이동시켜 배치 목표와 가까이 유지한 드래그 상태\")\n\n## 저장과 실패 상태\n\n저장과 되돌리기는 변경이 있을 때 작업 화면 위에 떠서 나타납니다. 별도 높이를 예약하지\n않으므로 버튼이 생겨도 배치판, 무기 줄, 장비 칸이 축소되거나 움직이지 않습니다. 겹친 아이템은\n가장 가까운 빈자리로 밀어내고, 그 결과가 잠긴 칸이나 판 밖 같은 잘못된 위치여도 초안으로\n보여 줍니다. 이때 해당 아이템은 빨간 테두리로 표시되고 모든 배치가 유효해질 때까지 저장할\n수 없습니다.\n\n무기는 유효 배치 기준 최대 여섯 개입니다. 일곱 번째 무기를 놓으면 그 아이템은 보관함으로\n돌아가고 무기는 6개까지만 배치 가능합니다 안내를 3초 동안 표시합니다. 다른 부위 아이템은\n각 부위 제한 안에서 계속 배치할 수 있습니다.\n\n## 상세 정보와 효과 자리\n\n상세 정보 팝업은 닫기 버튼 또는 팝업 밖 탭으로 닫힙니다. 기본 정보와 등록된 전투 수치 아래에\n아이템 효과 영역을 미리 마련했습니다.\n\n- 기본 능력치: 무기는 공격력, 방어 장비는 방어력\n- 기본 효과: 아이템 고유 효과가 연결될 자리\n- 효과 칸 1~3: 룬 등 후속 효과를 최대 세 개까지 표시\n\n아직 효과 데이터가 없는 칸에는 효과 데이터 연결 예정 또는 비어 있음을 보여 줍니다. 임의의\n효과를 만들어 보여 주지 않으면서도, 실제 데이터가 추가될 때 팝업 구조를 다시 설계하지 않아도\n되는 형태입니다.\n\n## 핵심 원칙과 결정\n\n- 배치판이 화면의 주역이고, 장착 요약과 도구는 판의 문맥을 보조합니다.\n- 장착 요약 칸은 모든 모바일 화면에서 정사각형이며 자체 스크롤을 사용하지 않습니다.\n- 무기 표시는 인스턴스 ID가 아니라 실제 배치 진입 순서를 보존합니다.\n- 빠른 메뉴는 정보 확인, 성장 편집, 장착 해제의 순서로 의사결정을 안내합니다.\n- 확대판 이동과 아이템 이동은 같은 터치 시작점에서도 시간으로 명확히 중재합니다.\n- 저장은 전체 초안이 유효할 때만 가능하며 버튼 출현이 화면 구성을 바꾸지 않습니다.\n- PC 화면 품질과 마우스 동등성은 현재 완료 범위가 아닙니다.\n\n## 현재 결과\n\nGalaxy A06 359×718과 iPhone 17 Pro 401×776 세로 Play에서 배치판, 도구, 무기 여섯\n칸, 장비 열 칸이 안전 영역 안에 유지됐습니다. 빠른 메뉴는 두 화면에서 196×213 크기로\n경계 안에 배치됐고 세 버튼 순서와 룬 보드 이동 대상을 확인했습니다. 아이템 터치 드래그는\n두 화면 모두 34px 오프셋을 사용했으며 iPhone 17 Pro 런타임 콘솔에는 오류가 없었습니다.\n\n## 구현 참고\n\n배치에는 선택 순서를 나타내는 값을 함께 저장하고 서버 직렬화·전투 무기 복제도 같은 순서를\n사용합니다. 요약 칸 크기는 부모 폭·높이·간격에서 매번 계산하고 정사각 비율 제약을 둡니다.\n배치판은 스크롤 컨테이너를 내부 카메라로 사용하지만 스크롤바와 엔진 기본 스크롤 입력을 끄고,\n전용 판 이동 코드만 캔버스 위치를 바꿉니다. 입력 정책 모듈은 보관함 유예, 판 이동 시점,\n아이템 드래그 시점과 메뉴 게이지 시작을 한곳에서 판정합니다.\n\n## 검증\n\n- Luau 스펙으로 배치 순서 보존, 겹침 이동, 무기 한도, 0.3초·1초 터치 경계와 저장 유효성을\n  확인했습니다.\n- Python UI 계약 검사 28개로 정사각 요약 칸, 비스크롤 구성, 도구, 빠른 메뉴 버튼 순서,\n  효과 칸 세 개, 스크롤 잠금과 34px 드래그 오프셋을 확인했습니다.\n- Studio MCP Play에서 Galaxy A06와 iPhone 17 Pro 두 모바일 화면비의 기본·빠른 메뉴·드래그\n  상태, 룬 보드 선택 이동과 콘솔 오류 없음을 확인했습니다.\n\n## 후속 기획\n\n기본 효과와 방어력 데이터가 ItemDB에 등록되면 현재 마련한 상세 정보 자리에 실제 값을\n연결합니다. 이번 변경은 표시 공간과 데이터 경계를 완성했으며 아직 정의되지 않은 능력 값을\n새로 기획하거나 ItemDB에 추가하지는 않았습니다.\n",
          "source_path": "wiki/content/pages/inventory-item-concept/v021.md",
          "timeline_order": 44
        },
        {
          "id": "inventory-item-concept",
          "title": "인벤토리와 아이템 개념",
          "summary": "모바일 장비 배치를 선택·회전·드래그·검토·저장의 단계로 분리하고, 세로 보관함과 길게 누르기 메뉴·상세 정보로 오터치를 줄이면서 배치 결과를 저장 전에 충분히 확인하게 했습니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "inventory",
            "equipment",
            "item-placement",
            "touch",
            "drag",
            "draft",
            "details",
            "mobile"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-23",
          "authors": [
            "Codex"
          ],
          "version": 20,
          "change_type": "updated",
          "change_summary": "장비 탭을 선택 동작으로 바꾸고 길게 누르기 작업 메뉴·상세 팝업·세로 보관함을 추가했으며, 실제 아이템 이미지로 배치 초안을 편집하고 전체가 유효할 때만 서버에 원자 저장하도록 완성했습니다.",
          "supersedes": "inventory-item-concept@v019",
          "sources": [
            "wiki/content/pages/inventory-item-concept/v019.md",
            "docs/gameplay/inventory-rune-ui-spec.md",
            "src/ReplicatedStorage/InventoryV2/InventoryModel.luau",
            "src/ReplicatedStorage/InventoryV2/ItemGesturePolicy.luau",
            "src/ReplicatedStorage/InventoryV2/ItemPlacementDraft.luau",
            "src/ReplicatedStorage/InventoryV2/Screen.luau",
            "src/ServerScriptService/InventoryV2Service.luau",
            "tests/InventoryV2.spec.luau",
            "tests/test_inventory_v2_ui.py",
            "wiki/content/media/inventory-item-concept/v020/studio-inventory-default-galaxy-a06.jpg",
            "wiki/content/media/inventory-item-concept/v020/studio-item-invalid-draft-galaxy-a06.jpg",
            "wiki/content/media/inventory-item-concept/v020/studio-item-action-menu-galaxy-a06.jpg",
            "wiki/content/media/inventory-item-concept/v020/studio-item-details-galaxy-a06.jpg",
            "wiki/content/media/inventory-item-concept/v020/studio-inventory-iphone7.jpg"
          ],
          "related": [
            "product-planning-change-log",
            "character-2d-rendering",
            "backpack-combat-stat-database"
          ],
          "validation": [
            "./tools/test_inventory_v2.sh: InventoryV2.spec ok",
            "python3 -m unittest tests.test_inventory_v2_ui tests.test_native_backpack_ui: 23 tests passed",
            "Roblox Studio MCP Play · Galaxy A06 portrait · 671×828: 기본 배치, 선택·회전, 작업 메뉴, 상세 정보, 잠긴 칸 무효 초안과 저장 비활성 확인",
            "Roblox Studio MCP Play · iPhone 7 portrait · 374×666: 세로 보관함 스크롤, 메뉴 346×224, 상세 팝업 350×570, 필수 탭·보드·버튼 잘림 없음 확인",
            "Roblox Studio MCP iPhone 7 Play console: 오류 없음"
          ],
          "body": "# 인벤토리와 아이템 개념\n\n## 한눈에 보는 변경\n\n장비를 건드리는 즉시 룬 화면으로 넘어가던 흐름을 **선택→회전 또는 이동→검토→저장**의\n단계로 바꿨습니다. 보관함은 모바일에 맞는 세로 카드 그리드가 되었고, 가만히 길게 누른 경우에만\n`룬 페이지 가기`와 `상세 정보 보기` 메뉴가 열립니다.\n\n이 변경의 이유는 스크롤·선택·배치·상세 보기처럼 서로 다른 의도가 한 번의 탭과 드래그에\n섞여 있던 문제를 줄이기 위해서입니다. 플레이어는 이제 잘못된 배치도 빨간 초안으로 남겨\n원인을 확인하고, 전체 배치가 유효할 때만 한 번에 저장할 수 있습니다.\n\n## 기획 배경과 목표\n\n모바일 인벤토리는 같은 손가락 움직임으로 목록을 스크롤하고, 카드를 집어 장착판에 올리고,\n장착한 아이템을 다시 옮겨야 합니다. 탭이 바로 화면 전환으로 이어지면 회전하려던 플레이어가\n룬 페이지로 이동하고, 세로 스와이프가 배치 드래그로 오인되면 보관함 탐색이 불안정해집니다.\n\n이번 목표는 각 행동에 눈에 보이는 준비 단계를 주는 것입니다. 짧은 탭은 선택만 하고, 회전\n버튼은 선택된 아이템에만 나타나며, 움직이지 않은 길게 누르기는 작업 메뉴를 엽니다. 실제 배치는\n아이템 그림과 점유 형태를 손가락 위에 보여 주고, 저장 전 초안으로 유지합니다.\n\n## 사용자 경험\n\n### 기본 탐색과 선택\n\n하단 보관함은 현재 모바일 폭에 들어오는 카드 열만 사용해 세로로 스크롤합니다. 카드를 짧게\n누르면 외곽선이 켜지고 회전 버튼이 나타납니다. 장착판의 아이템도 같은 선택 규칙을 사용합니다.\n\n![Galaxy A06 기본 장비 배치 화면](./media/inventory-item-concept/v020/studio-inventory-default-galaxy-a06.jpg \"장착판과 세로 보관함을 한 화면에서 비교하고, 선택 전에는 회전 버튼만 숨긴 Galaxy A06 기본 상태\")\n\n### 길게 눌러 작업 선택\n\n장착 아이템은 1초 동안 움직이지 않으면 원형 게이지가 차고 작업 메뉴가 열립니다. 보관 카드에는\n스크롤과 드래그를 구분하기 위한 0.5초 유예가 먼저 있고, 이후 1초 게이지가 진행됩니다. 게이지\n도중 손가락이 움직이면 메뉴 대기를 취소하고 실제 스크롤 또는 드래그로 전환합니다.\n\n![아이템 작업 메뉴](./media/inventory-item-concept/v020/studio-item-action-menu-galaxy-a06.jpg \"선택한 장비를 길게 눌렀을 때 룬 페이지와 상세 정보 중 다음 행동을 고르는 모바일 작업 메뉴\")\n\n상세 정보는 아이템 그림과 이름뿐 아니라 등급, 부위, 역할, 무게, 점유 칸, 등록된 전투 수치와\n룬 효과 합계를 한 팝업에서 보여 줍니다. 우측 상단 닫기 또는 바깥 영역 탭으로 돌아갑니다.\n\n![아이템 상세 정보](./media/inventory-item-concept/v020/studio-item-details-galaxy-a06.jpg \"연격의 톱니검 이미지와 역할·무게·점유 칸·공격 수치를 스크롤 가능한 한 화면에 모은 상세 팝업\")\n\n### 배치 초안과 실패 설명\n\n아이템을 끌면 회전된 점유 크기의 실제 그림과 바닥 가이드가 같은 스냅 위치를 사용합니다.\n다른 아이템 위에 놓으면 기존 장비를 가장 가까운 빈자리로 밀어 보며 전체 배치를 다시 계산합니다.\n잠긴 칸·보드 밖·무게·장착 한도처럼 저장할 수 없는 상태도 초안에서는 유지하되, 해당 아이템을\n빨간색으로 표시하고 저장 버튼을 끕니다.\n\n![잠긴 칸의 잘못된 배치 초안](./media/inventory-item-concept/v020/studio-item-invalid-draft-galaxy-a06.jpg \"잠긴 좌측 상단 칸에 놓인 아이템을 빨간색으로 유지하고 되돌리기만 활성화해 저장 전에 실패 이유를 고치게 하는 상태\")\n\n## 핵심 원칙과 설계 철학\n\n### 입력 의도를 먼저 읽는다\n\n보관 카드에서 처음 0.5초 안에 시작한 움직임은 어느 방향이든 아이템을 집으려는 의도로 봅니다.\n유예 시간이 지난 뒤 미선택 카드의 세로 움직임은 스크롤, 가로 움직임은 드래그가 됩니다. 이미\n선택한 카드는 어느 방향으로 움직여도 배치 드래그가 우선합니다.\n\n### 저장 전에는 자유롭게, 저장할 때는 전체를 안전하게\n\n클라이언트는 마지막 저장 상태와 별도의 전체 장비 초안을 가집니다. 한 아이템만 임시 저장하지\n않고, `저장`을 누르면 서버가 모든 좌표·회전·잠금·겹침·장착 제한·보관함 용량을 다시 검사한\n뒤 한 번에 교체합니다. 하나라도 잘못되면 이전 저장 상태를 그대로 유지합니다.\n\n### 작은 화면에서 필수 행동을 숨기지 않는다\n\n장착판, 무게, 필터, 세로 카드와 스크롤바는 안전 여백 안에 둡니다. 화면이 좁아지면 카드 열 수와\n간격을 줄이지만 장착판·회전·저장·되돌리기 같은 필수 행동은 제거하지 않습니다.\n\n![iPhone 7 반응형 결과](./media/inventory-item-concept/v020/studio-inventory-iphone7.jpg \"374×666 Play viewport에서도 네 개의 모드 탭, 9×9 장착판, 무게와 세로 카드 그리드가 잘리지 않는 결과\")\n\n## 결정 사항과 범위\n\n- 짧은 탭은 선택이며 자동으로 룬 페이지로 이동하지 않습니다.\n- 선택 아이템만 90° 회전할 수 있고, 그림과 점유 칸이 함께 회전합니다.\n- 장착 배치는 전체 초안으로 저장하며, 무효 상태에서는 저장할 수 없습니다.\n- 보관함은 가로 2행 대신 세로 다열 그리드를 사용합니다.\n- 상세 정보는 등록된 데이터만 보여 주며 아직 없는 전투 수치를 임의로 만들지 않습니다.\n- PC 레이아웃 품질과 마우스 동등성은 현재 완료 범위가 아닙니다.\n\n## 현재 결과\n\nGalaxy A06와 iPhone 7 세로 Play에서 장착판과 보관함이 동시에 보이고, 카드 선택·회전·세로\n스크롤·작업 메뉴·상세 팝업·잘못된 초안·되돌리기가 같은 규칙으로 동작합니다. iPhone 7에서는\n작업 메뉴 `346×224`, 상세 팝업 `350×570`이 `374×666` 화면 안에 유지됐습니다.\n\n## 구현 참고\n\n입력 판정은 보관함 유예 시간·길게 누르기 시간·이동 임계값을 한 정책 모듈에서 계산합니다.\n배치 초안 모듈은 좌표를 복제·직렬화하고 겹친 장비의 가장 가까운 빈 위치를 거리, 잠긴 칸 수,\n행, 열 순으로 결정합니다. 서버는 최대 200개 배치 요청을 구조 검증한 뒤 인벤토리 모델의 전체\n검사를 통과한 경우에만 저장합니다.\n\n## 검증\n\n- Luau 스펙에서 선택·길게 누르기·스크롤/드래그 분기, 충돌 장비 이동, 잠긴 칸 실패와 원자\n  저장을 확인했습니다.\n- Python UI 계약 검사에서 세로 그리드, 실제 이미지 드래그, 공통 스냅, 저장/되돌리기,\n  메뉴·상세·재열기 경로를 확인했습니다.\n- Galaxy A06와 iPhone 7 모바일 Play에서 기본·선택·메뉴·상세·실패 상태와 세로 스크롤을\n  확인했고, 두 번째 Play 세션의 콘솔 오류는 없었습니다.\n\n## 후속 기획\n\nItemDB의 이미지 배율과 X/Y 위치 보정값을 실제 InventoryV2 렌더러에 연결하는 작업은 별도\n후속 과제입니다. 현재 커밋은 배치 점유·회전·선택·초안·저장 계약을 완성하며, 이미지 보정값의\n게임 화면 반영 문제를 해결한 것으로 간주하지 않습니다.\n",
          "source_path": "wiki/content/pages/inventory-item-concept/v020.md",
          "timeline_order": 43
        },
        {
          "id": "inventory-item-concept",
          "title": "인벤토리와 아이템 개념",
          "summary": "모바일 룬 보드를 배치 순서와 무관한 트랜잭션 편집기로 바꾸고, 현재 도형 기준 가이드·잠금 영역·보관 카드 회전·효과 요약·얇은 보석형 시각 언어를 완성했습니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "inventory",
            "equipment",
            "rune-board",
            "item-grade",
            "mobile",
            "itemdb",
            "planning"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-21",
          "authors": [
            "Codex"
          ],
          "version": 19,
          "change_type": "updated",
          "change_summary": "룬 배치를 저장 전까지 자유롭게 편집하는 전체 초안으로 전환하고, 현재 배치·회전 기준의 유효 가이드와 잠금 칸 구분, 보관/배치 룬 선택·회전·회수, 저장/되돌리기, 효과 합산 화면, 얇은 벌집과 투명 보석형 룬 표현, 인벤토리 중 전투 연출 억제를 함께 반영했습니다.",
          "supersedes": "inventory-item-concept@v018",
          "sources": [
            "wiki/content/pages/inventory-item-concept/v018.md",
            "docs/gameplay/inventory-rune-ui-spec.md",
            "docs/gameplay/rune-piece-system.md",
            "src/ReplicatedStorage/InventoryV2/RuneBoardModel.luau",
            "src/ReplicatedStorage/InventoryV2/RuneDragVisualState.luau",
            "src/ReplicatedStorage/InventoryV2/RuneEffectSummary.luau",
            "src/ReplicatedStorage/InventoryV2/RuneMergeModel.luau",
            "src/ReplicatedStorage/InventoryV2/Screen.luau",
            "src/ReplicatedStorage/BackpackUI/WeaponAttackVFX.luau",
            "src/ReplicatedStorage/InventoryV2/StorageSort.luau",
            "src/ReplicatedStorage/InventoryV2/VisualTokens.luau",
            "src/ServerScriptService/InventoryV2Service.luau",
            "tests/InventoryV2.spec.luau",
            "tests/test_inventory_v2_ui.py",
            "wiki/content/media/inventory-item-concept/v019/studio-rune-guide-locked.jpg",
            "wiki/content/media/inventory-item-concept/v019/studio-rune-invalid-draft.jpg",
            "wiki/content/media/inventory-item-concept/v019/studio-rune-effect-summary.jpg"
          ],
          "related": [
            "product-planning-change-log",
            "backpack-combat-stat-database",
            "development-wiki"
          ],
          "validation": [
            "./tools/test_inventory_v2.sh: InventoryV2.spec ok",
            "python3 -m unittest tests.test_inventory_v2_ui tests.test_native_backpack_ui: 12 tests passed",
            "luau-compile: Screen, RuneBoardModel, RuneDragVisualState, RuneEffectSummary, VisualTokens, InventoryV2Service 통과",
            "Roblox Studio Play · iPhone 17 Pro portrait · 497×1080 캡처: 유효 연결·잠금 영역·기존 배치 유지·잘못된 초안과 저장 비활성·룬 효과 합산 화면 확인",
            "Roblox Studio Play · iPhone 7 portrait: 필수 탭·보드·하단 보관함·저장/되돌리기 조작의 잘림과 겹침 없음 확인",
            "Studio MCP 진단: 유효 초안 저장, 잘못된 회전 초안 저장 거절과 서버 상태 보존, 제거·되돌리기, 잠금 칸 366개, 공격 VFX Suppressed=true/활성 연출 0개 확인",
            "python3 tools/wiki.py build/check 통과",
            "python3 -m unittest tests.test_wiki tests.test_repository_policy: 19 tests passed"
          ],
          "body": "# 인벤토리와 아이템 개념\n\n## 이번 버전의 제품 결론\n\n인벤토리는 장비 목록이 아니라 **사각형 공간·장착 제한·무게를 함께 푸는 전투 준비\n퍼즐**입니다. 플레이어는 보관함의 카드형 아이템을 중앙 장착판으로 끌어 놓고, 유효하게 놓인\n아이템을 여섯 개의 독립 무기와 부위별 장비로 사용합니다. 장비 하나를 깊게 키우고 싶을 때는\n그 카드에서 427칸 룬 보드로 들어가 보유 룬을 연결합니다.\n\n이 흐름은 세 가지 선택을 분리하되 하나의 성장 루프로 묶습니다.\n\n1. 어떤 장비와 소모품을 제한된 칸과 무게 안에 들고 갈 것인가.\n2. 같은 아이템과 룬을 언제 합쳐 다음 등급·형태로 올릴 것인가.\n3. 적은 룬 조각으로 어떤 능력 노드까지 길을 만들 것인가.\n\nv016의 259칸 단일 Seed 보드는 폐기합니다. 최종 기준은 반지름 4인 61칸 영역 일곱 개,\n총 427칸이며, 아이템 정의마다 미리 생성된 후보 보드 10개 중 하나를 아이템 생성 시 뽑아\n영구 보존합니다.\n\n이번 버전은 그 427칸 규칙을 실제 터치 퍼즐로 다듬습니다. 룬 등급·색·시작 영역을 일대일로\n묶어 성장 순서를 명확히 하고, 플레이어가 룬을 잡은 동안에는 가능한 연결 지점만 읽히게\n합니다. 자주 쓰는 보관함 필터는 한 줄의 두 버튼 뒤에 넣어 카드 공간을 넓히고, 선택 회전과\n시점 보존 확대처럼 현재 조작 대상과 카메라 문맥을 잃지 않는 원칙을 적용합니다.\n\n## 의도한 플레이어 경험\n\n- 아이템을 놓는 행위와 장착을 동일하게 느끼고, 실패 이유와 원래 돌아갈 위치를 즉시 압니다.\n- 작은 장비의 공간 효율과 큰 장비의 역할을 비교해 5×5에서 9×9까지 자신만의 장착판을\n  만듭니다.\n- 같은 정의의 아이템도 보드 후보, 룬 색, 1~5칸 도형과 배치 경로 때문에 다른 성장 선택을\n  가집니다.\n- 룬 보드는 색깔만 보는 판이 아니라 중앙 능력 아이콘으로 효과 종류를 먼저 읽고, 탭해서\n  정확한 이름·수치·비활성 원인을 확인합니다.\n- 처음 등록하는 룬은 자기 등급 영역의 중앙 시작점만 덮으면 어느 셀을 기준으로 잡았든 놓을\n  수 있고, 이후에는 같은 색 네트워크에서 한 칸 떨어진 연결 전선만 밝게 안내됩니다.\n- 높은 등급 영역과 황금 테두리 레어 노드는 강한 목표지만, 룬이 장비 고유 행동을 지워 버리는\n  범용 스탯 덩어리가 되지는 않습니다.\n\n## 최종 모바일 화면 방향\n\n인벤토리 상단에는 무게·보관함·재화, 가운데에는 `배치 / 장착 현황 / 아이템 합성`, 하단에는\n항상 같은 보관함 서랍을 둡니다. 배치판과 보관함이 동시에 보여야 플레이어가 아이템 형태를\n비교한 뒤 바로 끌어 놓을 수 있습니다. 장착 현황은 디아블로식 읽기 전용 투영이며 별도의\n장착 권한을 만들지 않습니다.\n\n룬 보드 화면은 상단 아이템 정보와 명시적인 `장착 화면` 복귀, 가운데 427칸 보드, 하단 세로\n스크롤 룬 보관함으로 구성합니다. 확대된 보드는 빈 바닥 드래그로 이동하고, 룬을 잡은 경우에는\n보드 이동보다 룬 드래그가 우선합니다. Roblox Core UI·노치·하단 제스처 영역을 침범하지 않으며\n작은 화면에서도 필수 버튼과 카드가 좌우로 잘리지 않아야 합니다.\n\nv018에서는 상시 펼쳐진 필터 버튼 묶음을 없애고 `색상 필터`와 `칸 수 필터` 두 트리거로\n축약했습니다. 각 트리거는 보드 위에 겹치는 말풍선 팝업을 열며, 여러 등급 또는 여러 칸 수를\n동시에 선택하고 바깥을 누르면 닫힙니다. 팝업은 보관함 높이를 밀지 않으므로 카드가 더 일찍\n시작되고 더 많이 보입니다.\n\n보드 칸 탭 설명은 등급·색·능력을 모두 반복하지 않습니다. 색상은 칸 자체로 이미 읽히므로\n텍스트에서는 색상명을 빼고 `등급 · 능력명 · 수치`만 남겼습니다. 옅은 황금색 글자, 짙은\n보라색 외곽선과 어두운 배경으로 작은 모바일 화면에서도 판 위에서 분리되게 했습니다.\n\n## v019 — 저장 전까지 자유로운 룬 보드 편집\n\n이번 버전의 핵심은 룬을 한 번씩 즉시 확정하는 배치 도구를 **전체 초안을 검토한 뒤 한 번에\n저장하는 편집기**로 바꾼 것입니다. 플레이어는 보관 카드나 이미 배치된 룬을 선택해 60°씩\n회전하고, 규칙에 어긋난 상태도 보드 위에서 빨간색으로 확인하며 계속 수정할 수 있습니다.\n저장은 전체 초안이 유효할 때만 활성화되고, 되돌리기는 마지막 서버 저장 상태를 복원합니다.\n서버도 전체 배치를 원자적으로 다시 검증하므로 잘못된 초안이 영구 상태가 되는 경로는 없습니다.\n\n![현재 도형 기준의 연결·잠금 가이드](./media/inventory-item-concept/v019/studio-rune-guide-locked.jpg \"iPhone 17 Pro 세로 Play에서 기존 배치 룬을 유지한 채, 들고 있는 5칸 룬의 실제 회전 형태 기준 연결 전선과 잠긴 외곽 영역을 함께 표시한 결과\")\n\n가이드는 더 이상 중앙에 도형을 놓았다고 가정하지 않습니다. 현재 잡은 셀, 현재 회전, 현재\n보드 배치 전체를 기준으로 모든 앵커를 검사합니다. 놓을 수 있는 칸은 회색 룬 이미지 대신\n라임색 바닥만 사용하고, 아이템 등급 때문에 닫힌 영역은 탁한 적갈색으로 칠해 실패 이유를\n손을 놓기 전에 읽게 합니다. 같은 색 룬은 변을 맞대지 않고 정확히 한 칸의 빈 선을 사이에 둔\n네트워크를 만들며, 배치 순서와 관계없이 전체 연결성이 같으면 같은 결과를 냅니다.\n\n![잘못된 초안과 저장 잠금](./media/inventory-item-concept/v019/studio-rune-invalid-draft.jpg \"다른 룬과 겹친 회전 결과를 빨간 외곽선과 저장 불가 안내로 유지하고, 되돌리기는 활성·저장은 비활성으로 표시한 결과\")\n\n보관함 카드 자체도 선택 상태를 가지며 회전 버튼으로 미리 방향을 정한 다음 그 각도를 유지해\n끌 수 있습니다. 배치 룬은 짧은 선택/드래그로 이동하거나 보관함으로 회수할 수 있고, 빈 칸\n드래그와 배치 룬 위의 보드 이동 제스처는 구분되어 룬이 포인터에 불필요하게 붙지 않습니다.\n회전으로 잠시 무효가 되어도 조작은 막지 않으며, 외곽선과 저장 가능 여부가 결과를 설명합니다.\n\n벌집은 셀 사이 틈이 보이지 않는 flat-top 육각 좌표로 맞추고, 맞닿은 선이 이중으로 무겁게\n보이지 않도록 테두리를 크게 줄였습니다. 룬 조각은 바탕색이 그대로 비치도록 투명 중심을 가진\n각진 크리스털 프레임으로 교체했습니다. 회색 룬도 보드 셀과 구분되도록 밝은 모서리·내부\n하이라이트·선택 외곽선을 겹쳐 사용하며, 회전 외곽선은 회전된 폴리헥스의 실제 외곽 변에서\n다시 계산합니다.\n\n필터의 전체는 단방향 초기화가 아니라 상태 반전 명령입니다. 하나라도 꺼져 있으면 모두 켜고,\n모두 켜져 있으면 모두 끕니다. 룬을 잡는 동안 같은 색 노드의 능력 아이콘은 블록 장식 없이\n남겨서 어떤 형태가 더 많은 노드를 활성화하는지 계산할 수 있게 했습니다.\n\n![룬 효과 합산 화면](./media/inventory-item-concept/v019/studio-rune-effect-summary.jpg \"선택 장비의 유효 룬 노드 2개를 공격 속도 +2%, 명중률 +1%로 합산해 보여 주는 iPhone 17 Pro 세로 결과\")\n\n룬 각인 효과 탭은 현재 선택 장비의 유효 연결 노드를 효과별로 합산합니다. 활성 노드 수,\n배치 룬 수, 미장착 여부와 잘못된 초안 수를 먼저 보여 주고, 각 효과 카드는 아이콘·이름·합계·\n기여 노드 수를 표시합니다. 저장 전 초안도 같은 요약 계약으로 미리 계산하되 잘못된 룬에서\n생긴 효과는 활성 합계에 포함하지 않습니다.\n\n인벤토리와 룬 작업 화면이 열리면 필드 공격 테스트 루프와 기존 공격 연출을 즉시 지우고,\n전투 VFX 오버레이를 비활성화합니다. 닫으면 다시 허용하므로 공격 연출이 높은 레이어로 작업\n영역을 뚫고 보이거나 편집 중 계속 재생되는 문제가 없습니다. 이 변경은 서버의 전투 판정이나\n장착 무기 상태를 바꾸지 않고 클라이언트 표현만 일시 정지합니다.\n\n## 사각 장착 시스템\n\n### 장착판과 배치 권위\n\n- 중앙 5×5, 25칸으로 시작하고 최대 9×9, 81칸까지 개별 칸을 해금합니다.\n- 해금은 열린 칸과 상하좌우로 닿은 칸만 허용해 고립된 섬을 만들지 않습니다.\n- 첫 해금은 100동, 다음 칸은 직전 가격의 1.2배입니다.\n- 아이템은 90°씩 회전하며 뒤집지 않습니다.\n- 보관함에서 꺼낸 아이템의 배치 실패는 보관함 카드로, 이미 장착된 아이템의 이동 실패는\n  기존 위치로 복귀합니다.\n- 장착판 위 장비와 소모품만 무게를 계산합니다. 새 배치가 100%를 넘으면 거절합니다.\n\n### 장착 수와 중복\n\n| 부위 | 최대 장착 | 같은 정의 중복 |\n|---|---:|---|\n| 무기 | 6 | 불가 |\n| 반지 | 2 | 불가 |\n| 머리·귀걸이·목걸이·상의·하의·글러브·신발·벨트 | 각 1 | 불가 |\n| 소모품 | 서로 다른 종류 4 | 같은 종류는 한 스택 |\n\n특수 아이템 분류와 가방 활성 칸, 아이템 시너지 시스템은 사용하지 않습니다. 여섯 무기는\n각각 독립적으로 기본 공격과 공격 횟수 기반 자동 스킬을 진행하며 서로의 시전을 막지 않습니다.\n\n### 무게와 보관함\n\n- 기본 최대 무게는 30.0kg입니다. 레벨마다 0.5kg, 가용 무게 능력치 포인트마다 0.5kg\n  증가합니다.\n- 최대 무게 장비를 해제해 현재 무게가 제한을 넘으면 이동과 모든 무기 공격을 멈추고 경고를\n  표시합니다.\n- 소모품은 기본 1×1, 한 칸에 999개까지 쌓이며 남은 무게에 들어가는 수량만 옮깁니다.\n- 보관함은 20슬롯에서 시작해 최대 200슬롯입니다. 첫 확장은 100동, 다음 가격은 1.1배입니다.\n- 동·은·금은 1,000단위로 환산하며 저장은 동 단위 정수로 유지합니다.\n\n## 알파 48종과 최종 아트\n\n| 분류 | 수량 | 구성 |\n|---|---:|---|\n| 무기 | 14 | 검·창·곡궁·석궁·총·메이스·도끼 각 2종 |\n| 머리 | 4 | 4칸·6칸, 크기별 2역할 |\n| 귀걸이 | 2 | 1칸, 2역할 |\n| 목걸이 | 4 | 2칸·3칸, 크기별 2역할 |\n| 상의 | 4 | 4칸·6칸, 크기별 2역할 |\n| 하의 | 4 | 4칸·6칸, 크기별 2역할 |\n| 글러브 | 4 | 2칸·4칸, 크기별 2역할 |\n| 신발 | 4 | 2칸·4칸, 크기별 2역할 |\n| 벨트 | 4 | 2칸·4칸, 크기별 2역할 |\n| 반지 | 4 | 1칸, 공격·방어·유틸리티 변형 |\n\n아이템 원화는 모바일 전투에서 작게 떠다녀도 읽히는 굵은 실루엣과 밝은 카툰 명암을 사용하고,\n억지로 칸을 지정하지 않아도 그림 자체가 사각 폴리오미노에 맞아 보이게 만듭니다. 근접 무기는\n위쪽, 활·석궁·총은 오른쪽을 기본 방향으로 그리며 화살·탄환·궤적을 원화에 굽지 않습니다.\n폐기된 과거 90종 아이콘과 공개 ItemDB 미디어는 제거하고 이 48종만 활성 원본으로 유지합니다.\n\n## 아이템 등급과 합성\n\n| 주등급 | 이름 | 색상 |\n|---:|---|---|\n| 0 | 폐품 | 먹빛 `#59616B` |\n| 1 | 일반 | 상아 `#E8DEC4` |\n| 2 | 고급 | 초록 `#62C96B` |\n| 3 | 희귀 | 하늘 `#3DAEE9` |\n| 4 | 영웅 | 보라 `#9B6BE3` |\n| 5 | 전설 | 황금 `#F3B33D` |\n| 6 | 신화 | 장미 `#F05AA6` |\n\n아이템은 `MajorGrade 0~6`과 `MinorGrade 0~3`을 `3-2`처럼 표기합니다. 같은 정의와 완전히\n같은 복합 등급의 보관함 아이템 두 개만 합칠 수 있습니다. `g-0 → g-1 → g-2 → g-3 →\n(g+1)-0`이며 `6-3`이 최종 단계입니다. 기준 재료의 보드 후보, Seed와 룬 배치를 보존하고\n다른 재료만 소모합니다. 장착 중인 아이템은 먼저 보관함으로 회수해야 합니다.\n\n## 427칸 룬 보드\n\n### 구조와 해금\n\n- 반지름 4인 육각 영역 하나는 61칸이며 일곱 영역 전체는 `7×61=427칸`입니다.\n- 일곱 영역은 변 전체로 맞닿아 어느 시작점에서든 다른 영역으로 경로가 넘어갈 수 있습니다.\n- 각 영역 중앙 한 칸이 해당 번호 등급의 시작점입니다. 시작칸은 영역 등급색 바탕과 청록\n  특수 테두리를 함께 사용합니다.\n- 아이템 주등급과 같은 번호까지 영역을 열고 잠긴 영역에는 룬을 놓을 수 없습니다. 예를 들어\n  3등급 아이템은 G0~G3 룬만 각자의 시작점에서 등록할 수 있습니다.\n- 각 아이템 정의는 후보 보드 10개를 가집니다. 생성 시 하나를 균등 선택하고 VariantId와\n  Seed를 인스턴스에 영구 저장합니다. 48종 전체 데이터베이스에는 480개 보드가 있습니다.\n- Seed는 같은 후보의 칸 좌표·총 예산을 바꾸지 않고 허용 위치 배치만 결정합니다.\n\n보드 한 개의 능력 등급 수는 `30 / 45 / 54 / 60 / 67 / 90 / 81`로 합계 427입니다. 무기와\n방어구는 고유 레어 10칸, 숫자형 레어 20칸을 별도 배정합니다. 장신구는 패시브 대신 희귀한\n전역 효과가 정체성이므로 고유 레어 20칸, 숫자형 레어 40칸을 배정합니다. 모든 레어 노드는\n황금 테두리입니다.\n\n### 능력 계열\n\n- `A1·A2`: 아이템의 주력 성능 두 축\n- `B1·B2`: 보조 성능 두 축\n- `C1·C2`: 조건 또는 운용 분기 두 축\n- `D1·D2`: 아이템 고유 행동 두 축\n- `E1·E2·E3`: 무기는 1-0·3-0·5-0에서 열리는 세 자동 스킬, 방어구는 같은 등급에서\n  열리는 세 패시브를 강화\n\n장신구에는 패시브 스킬이 없으며 일반 능력과 특징 관련 능력을 약 7:3으로 배정합니다. E 능력은\n모든 아이템에 같은 문장을 붙이지 않고 실제 스킬·패시브가 가진 피해, 범위, 지속시간, 제어 강도\n등 선언된 파라미터만 강화합니다. 범위가 없는 스킬에 범위 증가를 붙이거나 보호막이 없는 장비에\n보호막 증가를 붙이지 않습니다.\n\n보드 노드는 아이템별 표현명이 아니라 실제 `effect_id`에 아이콘 하나를 고정합니다. 중앙\n메달의 62종 능력 아이콘은 효과 종류를, 바탕색은 등급을, 황금·청록 테두리는 레어·시작 상태를\n담당합니다. 공용 룬 원화에는 능력 아이콘을 굽지 않고 런타임에서 합성해 의미와 색을 독립적으로\n유지합니다.\n\n## 룬 조각과 연결 규칙\n\n- 룬 0~6등급은 먹빛·상아·초록·하늘·보라·황금·장미 색과 일대일입니다. 저장 데이터의\n  등급과 색이 어긋나면 등급 색으로 정규화합니다.\n- 조각은 연결된 1~5칸 폴리헥스이며 런타임 배치는 60° 회전만 허용합니다. 별도 반전 조작은\n  제공하지 않습니다.\n- 이동·회전·반전을 같은 것으로 본 자유 폴리헥스 형태군은 `1 / 1 / 3 / 7 / 22`, 총\n  34종입니다. 이는 카탈로그 중복 제거 기준이며 플레이 중 반전 기능을 뜻하지 않습니다.\n- 같은 색·등급·칸 수인 보관함 룬 두 개를 합칩니다. 1~4칸은 같은 등급의 다음 칸 수가 되고,\n  5칸은 다음 등급 1칸이 되면서 다음 등급 색으로 바뀝니다. 결과 ShapeId는 해당 칸 수\n  형태군에서 무작위 선택합니다.\n- 같은 색 조각은 서로 변을 공유하지 않고 한 칸 간격으로 연결합니다. 다른 색은 맞닿을 수\n  있습니다.\n- 각 등급 룬은 같은 번호 영역의 중앙 시작칸에서만 처음 등록합니다. 아이템 등급보다 높은\n  룬은 해당 시작 영역이 잠겨 있어 등록할 수 없습니다.\n- 노드는 시작점 연결, 룬·노드 색 일치, 등급 해금, 아이템 장착을 모두 만족해야 활성화됩니다.\n\n룬 카드를 끌면 실제 폴리헥스 모양과 잡은 칸의 상대 위치를 유지합니다. 보드 위 가이드는 가장\n가까운 육각 좌표에 스냅하며 유효는 녹색, 무효는 적색으로 표시합니다. 손을 놓으면 마지막\n가이드의 Anchor·회전 값을 그대로 서버에 보내고 서버가 같은 규칙으로 다시 검증합니다. 첫\n등록 전에는 중앙 시작칸 한 칸만 밝게 보여 주고, 잡은 도형의 어느 셀이 그 칸을 덮더라도 전체\n가이드를 녹색으로 표시합니다. 등록 뒤에는 같은 색 네트워크에서 정확히 한 칸 떨어진 연결 전선만\n밝게 안내합니다.\n\n장착 룬을 탭하면 마지막 선택 룬이 되며 회전 버튼이 활성화됩니다. 누를 때마다 현재 앵커에서\n60° 회전하고, 선택 룬이 없으면 버튼은 비활성입니다. 보드 기본 확대는 1.8, 최대는 2.25이며\n확대·축소는 보던 논리 좌표를 유지하고 원점 버튼만 보드 중앙으로 이동합니다. 빈 칸을 이동 없이\n탭하면 화면 상단 중앙에 색상명을 제외한 등급·능력명·수치·활성 상태를 보여줍니다.\n\n## 보관함과 필터\n\n아이템 보관함은 종류·부위·등급·칸 수·정렬을 제공합니다. 정렬 역전은 이름이 같은 아이템도\nInstanceId를 최종 동률 해소 키로 사용해 엄격한 비교 함수를 유지합니다. 룬 보관함은 한 줄의\n`색상 필터`·`칸 수 필터` 버튼만 상시 표시하고, 버튼 바로 위 말풍선에서 G0~G6 또는 1~5칸을\n독립적으로 다중 선택합니다. 선택 여부는 ON/OFF 문구 대신 등급색과 명도로 구분합니다. `전체`는 하나라도 꺼져 있으면\n해당 그룹을 모두 켜고, 모두 켜져 있으면 모두 끕니다. 바깥을 누르면 적용 상태를 유지한 채 팝업이 닫힙니다.\n\n룬 보관함은 상하 스크롤을 사용합니다. 카드 중앙 룬 도형을 잡으면 룬 드래그가 스크롤보다\n우선하고, 카드 여백의 짧은 세로 스와이프는 목록을 움직입니다. 필터 옵션을 보드 위 팝업으로\n겹치기 때문에 보관함 카드 영역이 위로 확장되며, 어떤 세로형 모바일 해상도에서도 카드 좌우가\n잘리지 않도록 안전 영역 기반 열 수와 여백을 계산합니다.\n\n아이템 카드는 이미지, 이름, 복합 등급, 부위, 점유 미니맵, 무게, 활성 룬 노드 수와 합성 가능\n상태를 보여줍니다. 룬 카드는 실제 육각 조각, 색 이름, 등급, 칸 수, 수량과 현재 보드 배치 가능\n여부를 보여줍니다.\n\n## 구현과 데이터 권한\n\n원본과 생성물의 책임은 다음과 같습니다.\n\n- `alpha-item-definitions.json`: 48종 이름·부위·무게·사각 점유·전투 아트 방향\n- `inventory-item-layouts.json`: 공개 ItemDB와 게임 런타임이 공유하는 배치·이미지 조정값\n- `item-rune-board-database.json`: 아이템별 능력 정의와 후보 10개, 총 480개 보드\n- `rune-piece-catalog.json`: 34개 룬 형태군\n- `rune-ability-icon-catalog.json`: 62개 effect 아이콘과 아틀라스 좌표\n- `InventoryV2`·`RuneBoard`: 클라이언트 상태, 배치 미리보기와 모바일 화면\n- `InventoryV2Service`: 소유권·충돌·무게·장착 제한·합성의 서버 최종 검증\n\n클라이언트가 보낸 가격, 무게, 합성 결과와 랜덤 도형을 신뢰하지 않습니다. 서버는 배치·합성\n요청마다 소유권, 좌표, 회전, 해금, 충돌, 부위 수, 동일 정의 중복, 무게, 보관함 용량과 재화를\n다시 확인합니다.\n\n## 범위와 검증 결과\n\n이 버전은 최종 48종 아이콘, 공개 ItemDB, 427칸/480보드 데이터, 룬 조각과 능력 아이콘, 모바일\n인벤토리·룬 보드 소스를 같은 기준으로 묶습니다. Studio MCP를 통해 ItemDB 리비전과 두 최종\n이미지 에셋을 라이브 플레이스에 반영했고, iPhone 17 Pro와 iPhone 7 세로 화면에서\n인벤토리→룬 보드 진입, 룬 모양 유지 드래그·유효 가이드·배치, 보드 이동, 노드 짧은 탭 능력 표시와\n세로 룬 보관함을 검증했습니다. 두 실행 모두 콘솔 오류가 없었고 검증 후 Device Simulator는\n기본 뷰포트로 복구했습니다.\n",
          "source_path": "wiki/content/pages/inventory-item-concept/v019.md",
          "timeline_order": 42
        },
        {
          "id": "inventory-item-concept",
          "title": "인벤토리와 아이템 개념",
          "summary": "룬 등급·색·시작점을 하나의 성장 계약으로 묶고, 모바일 룬 보드의 배치 안내·확대·선택 회전·필터 팝업·능력 설명을 실제 터치 흐름에 맞게 정돈했습니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "inventory",
            "equipment",
            "rune-board",
            "item-grade",
            "mobile",
            "itemdb",
            "planning"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-20",
          "authors": [
            "Codex"
          ],
          "version": 18,
          "change_type": "updated",
          "change_summary": "룬 등급과 색을 일치시키고 등급별 중앙 시작점을 강제했으며, 보드 배치 상태·연결 가이드·선택 룬 회전·시점 보존 확대·세로 보관함과 다중 선택 필터 팝업·고대비 능력 설명을 모바일 UI와 서버 검증에 함께 반영했습니다.",
          "supersedes": "inventory-item-concept@v017",
          "sources": [
            "wiki/content/pages/inventory-item-concept/v017.md",
            "docs/gameplay/inventory-rune-ui-spec.md",
            "docs/gameplay/rune-piece-system.md",
            "src/ReplicatedStorage/InventoryV2/RuneBoardModel.luau",
            "src/ReplicatedStorage/InventoryV2/RuneMergeModel.luau",
            "src/ReplicatedStorage/InventoryV2/Screen.luau",
            "src/ReplicatedStorage/InventoryV2/StorageSort.luau",
            "src/ReplicatedStorage/InventoryV2/VisualTokens.luau",
            "src/ServerScriptService/InventoryV2Service.luau",
            "tests/InventoryV2.spec.luau",
            "tests/test_inventory_v2_ui.py",
            "wiki/content/media/inventory-item-concept/v018/studio-rune-ability-description.jpg",
            "wiki/content/media/inventory-item-concept/v018/studio-rune-filter-popover.jpg"
          ],
          "related": [
            "product-planning-change-log",
            "backpack-combat-stat-database",
            "development-wiki"
          ],
          "validation": [
            "luau-compile: InventoryV2 Screen, VisualTokens, RuneBoardModel, RuneMergeModel, StorageSort 통과",
            "python3 -m unittest tests.test_inventory_v2_ui: 7 tests passed",
            "bash tools/test_inventory_v2.sh: InventoryV2.spec ok",
            "python3 tools/wiki.py build/check, tests.test_wiki, tests.test_repository_policy 통과",
            "Roblox Studio Play · iPhone 17 Pro portrait · 401×776: 필터 팝업과 확장된 룬 카드 영역 확인",
            "Roblox Studio Play · Galaxy A06 portrait · 360×800: 능력 설명, 필터 팝업, 보관함 카드 영역과 필수 버튼 잘림 없음 확인; 콘솔 오류 없음",
            "Studio MCP 진단: 61개 능력 아이콘 표시, G0 · 투사체 속도 · +2% 문구, 필터 7/7·5/5, 확대 0.7~2.25 계약 확인"
          ],
          "body": "# 인벤토리와 아이템 개념\n\n## 이번 버전의 제품 결론\n\n인벤토리는 장비 목록이 아니라 **사각형 공간·장착 제한·무게를 함께 푸는 전투 준비\n퍼즐**입니다. 플레이어는 보관함의 카드형 아이템을 중앙 장착판으로 끌어 놓고, 유효하게 놓인\n아이템을 여섯 개의 독립 무기와 부위별 장비로 사용합니다. 장비 하나를 깊게 키우고 싶을 때는\n그 카드에서 427칸 룬 보드로 들어가 보유 룬을 연결합니다.\n\n이 흐름은 세 가지 선택을 분리하되 하나의 성장 루프로 묶습니다.\n\n1. 어떤 장비와 소모품을 제한된 칸과 무게 안에 들고 갈 것인가.\n2. 같은 아이템과 룬을 언제 합쳐 다음 등급·형태로 올릴 것인가.\n3. 적은 룬 조각으로 어떤 능력 노드까지 길을 만들 것인가.\n\nv016의 259칸 단일 Seed 보드는 폐기합니다. 최종 기준은 반지름 4인 61칸 영역 일곱 개,\n총 427칸이며, 아이템 정의마다 미리 생성된 후보 보드 10개 중 하나를 아이템 생성 시 뽑아\n영구 보존합니다.\n\n이번 버전은 그 427칸 규칙을 실제 터치 퍼즐로 다듬습니다. 룬 등급·색·시작 영역을 일대일로\n묶어 성장 순서를 명확히 하고, 플레이어가 룬을 잡은 동안에는 가능한 연결 지점만 읽히게\n합니다. 자주 쓰는 보관함 필터는 한 줄의 두 버튼 뒤에 넣어 카드 공간을 넓히고, 선택 회전과\n시점 보존 확대처럼 현재 조작 대상과 카메라 문맥을 잃지 않는 원칙을 적용합니다.\n\n## 의도한 플레이어 경험\n\n- 아이템을 놓는 행위와 장착을 동일하게 느끼고, 실패 이유와 원래 돌아갈 위치를 즉시 압니다.\n- 작은 장비의 공간 효율과 큰 장비의 역할을 비교해 5×5에서 9×9까지 자신만의 장착판을\n  만듭니다.\n- 같은 정의의 아이템도 보드 후보, 룬 색, 1~5칸 도형과 배치 경로 때문에 다른 성장 선택을\n  가집니다.\n- 룬 보드는 색깔만 보는 판이 아니라 중앙 능력 아이콘으로 효과 종류를 먼저 읽고, 탭해서\n  정확한 이름·수치·비활성 원인을 확인합니다.\n- 처음 등록하는 룬은 자기 등급 영역의 중앙 시작점만 덮으면 어느 셀을 기준으로 잡았든 놓을\n  수 있고, 이후에는 같은 색 네트워크에서 한 칸 떨어진 연결 전선만 밝게 안내됩니다.\n- 높은 등급 영역과 황금 테두리 레어 노드는 강한 목표지만, 룬이 장비 고유 행동을 지워 버리는\n  범용 스탯 덩어리가 되지는 않습니다.\n\n## 최종 모바일 화면 방향\n\n![사각 장착 인벤토리 승인 콘셉트](./media/inventory-item-concept/v018/inventory-concept.png \"세로 안전 영역 안에 9×9 사각 장착판, 우측 보기 도구와 하단 카드 보관함을 배치한 승인 콘셉트\")\n\n인벤토리 상단에는 무게·보관함·재화, 가운데에는 `배치 / 장착 현황 / 아이템 합성`, 하단에는\n항상 같은 보관함 서랍을 둡니다. 배치판과 보관함이 동시에 보여야 플레이어가 아이템 형태를\n비교한 뒤 바로 끌어 놓을 수 있습니다. 장착 현황은 디아블로식 읽기 전용 투영이며 별도의\n장착 권한을 만들지 않습니다.\n\n![iPhone 17 Pro 인벤토리 개발 결과](./media/inventory-item-concept/v018/studio-iphone17-inventory.jpg \"Studio Play에서 9×9 장착판, 우측 도구, 하단 카드 보관함과 안전 영역을 함께 확인한 최종 화면\")\n\n![룬 보드 승인 콘셉트](./media/inventory-item-concept/v018/rune-board-concept.png \"일곱 등급 영역의 경계, 중앙 시작칸, 능력 아이콘, 우측 보기 도구와 하단 룬 보관함을 포함한 승인 콘셉트\")\n\n룬 보드 화면은 상단 아이템 정보와 명시적인 `장착 화면` 복귀, 가운데 427칸 보드, 하단 세로\n스크롤 룬 보관함으로 구성합니다. 확대된 보드는 빈 바닥 드래그로 이동하고, 룬을 잡은 경우에는\n보드 이동보다 룬 드래그가 우선합니다. Roblox Core UI·노치·하단 제스처 영역을 침범하지 않으며\n작은 화면에서도 필수 버튼과 카드가 좌우로 잘리지 않아야 합니다.\n\n![iPhone 17 Pro 룬 보드 개발 결과](./media/inventory-item-concept/v018/studio-iphone17-rune-board.jpg \"Studio Play에서 육각 노드·능력 아이콘·상단 탭 결과·우측 도구·색상/칸 수 필터를 확인한 최종 화면\")\n\n![iPhone 7 세로 스트레스 검증](./media/inventory-item-concept/v018/studio-iphone7-rune-board.jpg \"짧고 좁은 세로 화면에서도 필수 조작과 룬 카드 열이 좌우로 잘리지 않는 결과\")\n\nv018에서는 상시 펼쳐진 필터 버튼 묶음을 없애고 `색상 필터`와 `칸 수 필터` 두 트리거로\n축약했습니다. 각 트리거는 보드 위에 겹치는 말풍선 팝업을 열며, 여러 등급 또는 여러 칸 수를\n동시에 선택하고 바깥을 누르면 닫힙니다. 팝업은 보관함 높이를 밀지 않으므로 카드가 더 일찍\n시작되고 더 많이 보입니다.\n\n![룬 보관함 다중 선택 필터](./media/inventory-item-concept/v018/studio-rune-filter-popover.jpg \"Galaxy A06 세로 화면에서 한 줄 트리거, G0~G6 다중 선택 말풍선과 확장된 룬 카드 영역을 확인한 결과\")\n\n보드 칸 탭 설명은 등급·색·능력을 모두 반복하지 않습니다. 색상은 칸 자체로 이미 읽히므로\n텍스트에서는 색상명을 빼고 `등급 · 능력명 · 수치`만 남겼습니다. 옅은 황금색 글자, 짙은\n보라색 외곽선과 어두운 배경으로 작은 모바일 화면에서도 판 위에서 분리되게 했습니다.\n\n![고대비 룬 능력 설명](./media/inventory-item-concept/v018/studio-rune-ability-description.jpg \"보드 상단 중앙에 색상명 없이 G0 · 투사체 속도 · +2%를 고대비로 표시한 결과\")\n\n## 사각 장착 시스템\n\n### 장착판과 배치 권위\n\n- 중앙 5×5, 25칸으로 시작하고 최대 9×9, 81칸까지 개별 칸을 해금합니다.\n- 해금은 열린 칸과 상하좌우로 닿은 칸만 허용해 고립된 섬을 만들지 않습니다.\n- 첫 해금은 100동, 다음 칸은 직전 가격의 1.2배입니다.\n- 아이템은 90°씩 회전하며 뒤집지 않습니다.\n- 보관함에서 꺼낸 아이템의 배치 실패는 보관함 카드로, 이미 장착된 아이템의 이동 실패는\n  기존 위치로 복귀합니다.\n- 장착판 위 장비와 소모품만 무게를 계산합니다. 새 배치가 100%를 넘으면 거절합니다.\n\n### 장착 수와 중복\n\n| 부위 | 최대 장착 | 같은 정의 중복 |\n|---|---:|---|\n| 무기 | 6 | 불가 |\n| 반지 | 2 | 불가 |\n| 머리·귀걸이·목걸이·상의·하의·글러브·신발·벨트 | 각 1 | 불가 |\n| 소모품 | 서로 다른 종류 4 | 같은 종류는 한 스택 |\n\n특수 아이템 분류와 가방 활성 칸, 아이템 시너지 시스템은 사용하지 않습니다. 여섯 무기는\n각각 독립적으로 기본 공격과 공격 횟수 기반 자동 스킬을 진행하며 서로의 시전을 막지 않습니다.\n\n### 무게와 보관함\n\n- 기본 최대 무게는 30.0kg입니다. 레벨마다 0.5kg, 가용 무게 능력치 포인트마다 0.5kg\n  증가합니다.\n- 최대 무게 장비를 해제해 현재 무게가 제한을 넘으면 이동과 모든 무기 공격을 멈추고 경고를\n  표시합니다.\n- 소모품은 기본 1×1, 한 칸에 999개까지 쌓이며 남은 무게에 들어가는 수량만 옮깁니다.\n- 보관함은 20슬롯에서 시작해 최대 200슬롯입니다. 첫 확장은 100동, 다음 가격은 1.1배입니다.\n- 동·은·금은 1,000단위로 환산하며 저장은 동 단위 정수로 유지합니다.\n\n## 알파 48종과 최종 아트\n\n![최종 48종 아이템 카탈로그](./media/inventory-item-concept/v018/alpha-48-item-catalog.png \"무기 14종과 방어구·장신구 34종의 최종 카툰 아이콘 및 사각 점유 형태\")\n\n| 분류 | 수량 | 구성 |\n|---|---:|---|\n| 무기 | 14 | 검·창·곡궁·석궁·총·메이스·도끼 각 2종 |\n| 머리 | 4 | 4칸·6칸, 크기별 2역할 |\n| 귀걸이 | 2 | 1칸, 2역할 |\n| 목걸이 | 4 | 2칸·3칸, 크기별 2역할 |\n| 상의 | 4 | 4칸·6칸, 크기별 2역할 |\n| 하의 | 4 | 4칸·6칸, 크기별 2역할 |\n| 글러브 | 4 | 2칸·4칸, 크기별 2역할 |\n| 신발 | 4 | 2칸·4칸, 크기별 2역할 |\n| 벨트 | 4 | 2칸·4칸, 크기별 2역할 |\n| 반지 | 4 | 1칸, 공격·방어·유틸리티 변형 |\n\n아이템 원화는 모바일 전투에서 작게 떠다녀도 읽히는 굵은 실루엣과 밝은 카툰 명암을 사용하고,\n억지로 칸을 지정하지 않아도 그림 자체가 사각 폴리오미노에 맞아 보이게 만듭니다. 근접 무기는\n위쪽, 활·석궁·총은 오른쪽을 기본 방향으로 그리며 화살·탄환·궤적을 원화에 굽지 않습니다.\n폐기된 과거 90종 아이콘과 공개 ItemDB 미디어는 제거하고 이 48종만 활성 원본으로 유지합니다.\n\n![공개 ItemDB 모바일 결과](./media/inventory-item-concept/v018/itemdb-mobile-result.png \"최종 48종 카툰 아이콘과 사각 점유 정보를 모바일에서 확인하는 ItemDB 결과\")\n\n## 아이템 등급과 합성\n\n| 주등급 | 이름 | 색상 |\n|---:|---|---|\n| 0 | 폐품 | 먹빛 `#59616B` |\n| 1 | 일반 | 상아 `#E8DEC4` |\n| 2 | 고급 | 초록 `#62C96B` |\n| 3 | 희귀 | 하늘 `#3DAEE9` |\n| 4 | 영웅 | 보라 `#9B6BE3` |\n| 5 | 전설 | 황금 `#F3B33D` |\n| 6 | 신화 | 장미 `#F05AA6` |\n\n아이템은 `MajorGrade 0~6`과 `MinorGrade 0~3`을 `3-2`처럼 표기합니다. 같은 정의와 완전히\n같은 복합 등급의 보관함 아이템 두 개만 합칠 수 있습니다. `g-0 → g-1 → g-2 → g-3 →\n(g+1)-0`이며 `6-3`이 최종 단계입니다. 기준 재료의 보드 후보, Seed와 룬 배치를 보존하고\n다른 재료만 소모합니다. 장착 중인 아이템은 먼저 보관함으로 회수해야 합니다.\n\n## 427칸 룬 보드\n\n### 구조와 해금\n\n- 반지름 4인 육각 영역 하나는 61칸이며 일곱 영역 전체는 `7×61=427칸`입니다.\n- 일곱 영역은 변 전체로 맞닿아 어느 시작점에서든 다른 영역으로 경로가 넘어갈 수 있습니다.\n- 각 영역 중앙 한 칸이 해당 번호 등급의 시작점입니다. 시작칸은 영역 등급색 바탕과 청록\n  특수 테두리를 함께 사용합니다.\n- 아이템 주등급과 같은 번호까지 영역을 열고 잠긴 영역에는 룬을 놓을 수 없습니다. 예를 들어\n  3등급 아이템은 G0~G3 룬만 각자의 시작점에서 등록할 수 있습니다.\n- 각 아이템 정의는 후보 보드 10개를 가집니다. 생성 시 하나를 균등 선택하고 VariantId와\n  Seed를 인스턴스에 영구 저장합니다. 48종 전체 데이터베이스에는 480개 보드가 있습니다.\n- Seed는 같은 후보의 칸 좌표·총 예산을 바꾸지 않고 허용 위치 배치만 결정합니다.\n\n보드 한 개의 능력 등급 수는 `30 / 45 / 54 / 60 / 67 / 90 / 81`로 합계 427입니다. 무기와\n방어구는 고유 레어 10칸, 숫자형 레어 20칸을 별도 배정합니다. 장신구는 패시브 대신 희귀한\n전역 효과가 정체성이므로 고유 레어 20칸, 숫자형 레어 40칸을 배정합니다. 모든 레어 노드는\n황금 테두리입니다.\n\n### 능력 계열\n\n- `A1·A2`: 아이템의 주력 성능 두 축\n- `B1·B2`: 보조 성능 두 축\n- `C1·C2`: 조건 또는 운용 분기 두 축\n- `D1·D2`: 아이템 고유 행동 두 축\n- `E1·E2·E3`: 무기는 1-0·3-0·5-0에서 열리는 세 자동 스킬, 방어구는 같은 등급에서\n  열리는 세 패시브를 강화\n\n장신구에는 패시브 스킬이 없으며 일반 능력과 특징 관련 능력을 약 7:3으로 배정합니다. E 능력은\n모든 아이템에 같은 문장을 붙이지 않고 실제 스킬·패시브가 가진 피해, 범위, 지속시간, 제어 강도\n등 선언된 파라미터만 강화합니다. 범위가 없는 스킬에 범위 증가를 붙이거나 보호막이 없는 장비에\n보호막 증가를 붙이지 않습니다.\n\n![62종 룬 능력 아이콘 시트](./media/inventory-item-concept/v018/rune-ability-icon-atlas.png \"실제 전투 effect_id와 1:1로 연결되는 62종 상아색 실루엣 아이콘\")\n\n보드 노드는 아이템별 표현명이 아니라 실제 `effect_id`에 아이콘 하나를 고정합니다. 중앙\n메달의 62종 능력 아이콘은 효과 종류를, 바탕색은 등급을, 황금·청록 테두리는 레어·시작 상태를\n담당합니다. 공용 룬 원화에는 능력 아이콘을 굽지 않고 런타임에서 합성해 의미와 색을 독립적으로\n유지합니다.\n\n## 룬 조각과 연결 규칙\n\n- 룬 0~6등급은 먹빛·상아·초록·하늘·보라·황금·장미 색과 일대일입니다. 저장 데이터의\n  등급과 색이 어긋나면 등급 색으로 정규화합니다.\n- 조각은 연결된 1~5칸 폴리헥스이며 런타임 배치는 60° 회전만 허용합니다. 별도 반전 조작은\n  제공하지 않습니다.\n- 이동·회전·반전을 같은 것으로 본 자유 폴리헥스 형태군은 `1 / 1 / 3 / 7 / 22`, 총\n  34종입니다. 이는 카탈로그 중복 제거 기준이며 플레이 중 반전 기능을 뜻하지 않습니다.\n- 같은 색·등급·칸 수인 보관함 룬 두 개를 합칩니다. 1~4칸은 같은 등급의 다음 칸 수가 되고,\n  5칸은 다음 등급 1칸이 되면서 다음 등급 색으로 바뀝니다. 결과 ShapeId는 해당 칸 수\n  형태군에서 무작위 선택합니다.\n- 같은 색 조각은 서로 변을 공유하지 않고 한 칸 간격으로 연결합니다. 다른 색은 맞닿을 수\n  있습니다.\n- 각 등급 룬은 같은 번호 영역의 중앙 시작칸에서만 처음 등록합니다. 아이템 등급보다 높은\n  룬은 해당 시작 영역이 잠겨 있어 등록할 수 없습니다.\n- 노드는 시작점 연결, 룬·노드 색 일치, 등급 해금, 아이템 장착을 모두 만족해야 활성화됩니다.\n\n룬 카드를 끌면 실제 폴리헥스 모양과 잡은 칸의 상대 위치를 유지합니다. 보드 위 가이드는 가장\n가까운 육각 좌표에 스냅하며 유효는 녹색, 무효는 적색으로 표시합니다. 손을 놓으면 마지막\n가이드의 Anchor·회전 값을 그대로 서버에 보내고 서버가 같은 규칙으로 다시 검증합니다. 첫\n등록 전에는 중앙 시작칸 한 칸만 밝게 보여 주고, 잡은 도형의 어느 셀이 그 칸을 덮더라도 전체\n가이드를 녹색으로 표시합니다. 등록 뒤에는 같은 색 네트워크에서 정확히 한 칸 떨어진 연결 전선만\n밝게 안내합니다.\n\n장착 룬을 탭하면 마지막 선택 룬이 되며 회전 버튼이 활성화됩니다. 누를 때마다 현재 앵커에서\n60° 회전하고, 선택 룬이 없으면 버튼은 비활성입니다. 보드 기본 확대는 1.8, 최대는 2.25이며\n확대·축소는 보던 논리 좌표를 유지하고 원점 버튼만 보드 중앙으로 이동합니다. 빈 칸을 이동 없이\n탭하면 화면 상단 중앙에 색상명을 제외한 등급·능력명·수치·활성 상태를 보여줍니다.\n\n## 보관함과 필터\n\n아이템 보관함은 종류·부위·등급·칸 수·정렬을 제공합니다. 정렬 역전은 이름이 같은 아이템도\nInstanceId를 최종 동률 해소 키로 사용해 엄격한 비교 함수를 유지합니다. 룬 보관함은 한 줄의\n`색상 필터`·`칸 수 필터` 버튼만 상시 표시하고, 버튼 바로 위 말풍선에서 G0~G6 또는 1~5칸을\n독립적으로 다중 선택합니다. 선택 여부는 ON/OFF 문구 대신 등급색과 명도로 구분하고 `전체`는\n해당 그룹을 모두 켭니다. 바깥을 누르면 적용 상태를 유지한 채 팝업이 닫힙니다.\n\n룬 보관함은 상하 스크롤을 사용합니다. 카드 중앙 룬 도형을 잡으면 룬 드래그가 스크롤보다\n우선하고, 카드 여백의 짧은 세로 스와이프는 목록을 움직입니다. 필터 옵션을 보드 위 팝업으로\n겹치기 때문에 보관함 카드 영역이 위로 확장되며, 어떤 세로형 모바일 해상도에서도 카드 좌우가\n잘리지 않도록 안전 영역 기반 열 수와 여백을 계산합니다.\n\n아이템 카드는 이미지, 이름, 복합 등급, 부위, 점유 미니맵, 무게, 활성 룬 노드 수와 합성 가능\n상태를 보여줍니다. 룬 카드는 실제 육각 조각, 색 이름, 등급, 칸 수, 수량과 현재 보드 배치 가능\n여부를 보여줍니다.\n\n## 구현과 데이터 권한\n\n원본과 생성물의 책임은 다음과 같습니다.\n\n- `alpha-item-definitions.json`: 48종 이름·부위·무게·사각 점유·전투 아트 방향\n- `inventory-item-layouts.json`: 공개 ItemDB와 게임 런타임이 공유하는 배치·이미지 조정값\n- `item-rune-board-database.json`: 아이템별 능력 정의와 후보 10개, 총 480개 보드\n- `rune-piece-catalog.json`: 34개 룬 형태군\n- `rune-ability-icon-catalog.json`: 62개 effect 아이콘과 아틀라스 좌표\n- `InventoryV2`·`RuneBoard`: 클라이언트 상태, 배치 미리보기와 모바일 화면\n- `InventoryV2Service`: 소유권·충돌·무게·장착 제한·합성의 서버 최종 검증\n\n클라이언트가 보낸 가격, 무게, 합성 결과와 랜덤 도형을 신뢰하지 않습니다. 서버는 배치·합성\n요청마다 소유권, 좌표, 회전, 해금, 충돌, 부위 수, 동일 정의 중복, 무게, 보관함 용량과 재화를\n다시 확인합니다.\n\n## 범위와 검증 결과\n\n이 버전은 최종 48종 아이콘, 공개 ItemDB, 427칸/480보드 데이터, 룬 조각과 능력 아이콘, 모바일\n인벤토리·룬 보드 소스를 같은 기준으로 묶습니다. Studio MCP를 통해 ItemDB 리비전과 두 최종\n이미지 에셋을 라이브 플레이스에 반영했고, iPhone 17 Pro와 iPhone 7 세로 화면에서\n인벤토리→룬 보드 진입, 룬 모양 유지 드래그·유효 가이드·배치, 보드 이동, 노드 짧은 탭 능력 표시와\n세로 룬 보관함을 검증했습니다. 두 실행 모두 콘솔 오류가 없었고 검증 후 Device Simulator는\n기본 뷰포트로 복구했습니다.\n",
          "source_path": "wiki/content/pages/inventory-item-concept/v018.md",
          "timeline_order": 39
        },
        {
          "id": "inventory-item-concept",
          "title": "인벤토리와 아이템 개념",
          "summary": "사각 장착판·48종 알파 장비·아이템/룬 합성·427칸 룬 보드·모바일 인벤토리와 룬 보드 UI를 하나의 플레이 흐름과 데이터 계약으로 확정했습니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "inventory",
            "equipment",
            "rune-board",
            "item-grade",
            "mobile",
            "itemdb",
            "planning"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-20",
          "authors": [
            "Codex"
          ],
          "version": 17,
          "change_type": "updated",
          "change_summary": "259칸 Seed 보드 기획을 7×61=427칸·아이템당 후보 10개로 대체하고, 최종 48종 카툰 아이콘, 사각 장착/합성, 룬 폴리헥스 배치/합성, 능력 아이콘과 모바일 상호작용을 실제 데이터·UI 소스와 공개 ItemDB에 연결했습니다.",
          "supersedes": "inventory-item-concept@v016",
          "sources": [
            "wiki/content/pages/inventory-item-concept/v016.md",
            "docs/gameplay/inventory-rune-ui-spec.md",
            "docs/gameplay/alpha-item-definitions.json",
            "docs/gameplay/item-rune-board-database.json",
            "docs/gameplay/rune-piece-system.md",
            "docs/gameplay/rune-ability-icon-catalog.json",
            "docs/gameplay/inventory-item-art-catalog.md",
            "wiki/content/media/inventory-item-concept/v017/studio-iphone17-inventory.jpg",
            "wiki/content/media/inventory-item-concept/v017/studio-iphone17-rune-board.jpg",
            "wiki/content/media/inventory-item-concept/v017/studio-iphone7-rune-board.jpg"
          ],
          "related": [
            "product-planning-change-log",
            "backpack-combat-stat-database",
            "development-wiki"
          ],
          "validation": [
            "python3 tools/item_db.py build: 48 items, revision d6328b1d857becb6",
            "python3 tools/rune_piece_catalog.py build: 34 shape families, revision 89aeaf18cccfe297",
            "python3 tools/rune_ability_icons.py build: 62 effect icons",
            "python3 tools/rune_board_db.py build: 48 items, 480 boards, 427 cells each, revision 6e735afdab3d7550",
            "python3 -m unittest discover -s tests -p 'test_*.py': 80 tests passed",
            "bash tools/test_inventory_v2.sh: InventoryV2.spec ok",
            "bash tools/test_backpack_ui.sh: legacy BackpackUI compatibility passed",
            "bash tools/test_item_stats.sh: ItemStats passed",
            "tests/*.spec.js: CombatDB, ItemDB, local access, Markdown media, tag explorer, wiki timeline passed",
            "python3 tools/wiki.py check: 9 pages, 55 revisions, 64 media files",
            "Roblox Studio ItemDB bake: revision d6328b1d857becb6, 48 items, SquareOrthogonal runtime source confirmed",
            "Roblox Studio Play · iPhone 17 Pro portrait · 400×777 viewport: inventory/rune layout, rune drag guide and placement, board pan, node tap ability text, vertical rune storage verified; console clean",
            "Roblox Studio Play · iPhone 7 portrait · 374×666 viewport: required controls remained reachable, rune cards stayed horizontally unclipped, vertical storage and rune placement verified; console clean"
          ],
          "body": "# 인벤토리와 아이템 개념\n\n## 이번 버전의 제품 결론\n\n인벤토리는 장비 목록이 아니라 **사각형 공간·장착 제한·무게를 함께 푸는 전투 준비\n퍼즐**입니다. 플레이어는 보관함의 카드형 아이템을 중앙 장착판으로 끌어 놓고, 유효하게 놓인\n아이템을 여섯 개의 독립 무기와 부위별 장비로 사용합니다. 장비 하나를 깊게 키우고 싶을 때는\n그 카드에서 427칸 룬 보드로 들어가 보유 룬을 연결합니다.\n\n이 흐름은 세 가지 선택을 분리하되 하나의 성장 루프로 묶습니다.\n\n1. 어떤 장비와 소모품을 제한된 칸과 무게 안에 들고 갈 것인가.\n2. 같은 아이템과 룬을 언제 합쳐 다음 등급·형태로 올릴 것인가.\n3. 적은 룬 조각으로 어떤 능력 노드까지 길을 만들 것인가.\n\nv016의 259칸 단일 Seed 보드는 폐기합니다. 최종 기준은 반지름 4인 61칸 영역 일곱 개,\n총 427칸이며, 아이템 정의마다 미리 생성된 후보 보드 10개 중 하나를 아이템 생성 시 뽑아\n영구 보존합니다.\n\n## 의도한 플레이어 경험\n\n- 아이템을 놓는 행위와 장착을 동일하게 느끼고, 실패 이유와 원래 돌아갈 위치를 즉시 압니다.\n- 작은 장비의 공간 효율과 큰 장비의 역할을 비교해 5×5에서 9×9까지 자신만의 장착판을\n  만듭니다.\n- 같은 정의의 아이템도 보드 후보, 룬 색, 1~5칸 도형과 배치 경로 때문에 다른 성장 선택을\n  가집니다.\n- 룬 보드는 색깔만 보는 판이 아니라 중앙 능력 아이콘으로 효과 종류를 먼저 읽고, 탭해서\n  정확한 이름·수치·비활성 원인을 확인합니다.\n- 높은 등급 영역과 황금 테두리 레어 노드는 강한 목표지만, 룬이 장비 고유 행동을 지워 버리는\n  범용 스탯 덩어리가 되지는 않습니다.\n\n## 최종 모바일 화면 방향\n\n![사각 장착 인벤토리 승인 콘셉트](./media/inventory-item-concept/v017/inventory-concept.png \"세로 안전 영역 안에 9×9 사각 장착판, 우측 보기 도구와 하단 카드 보관함을 배치한 승인 콘셉트\")\n\n인벤토리 상단에는 무게·보관함·재화, 가운데에는 `배치 / 장착 현황 / 아이템 합성`, 하단에는\n항상 같은 보관함 서랍을 둡니다. 배치판과 보관함이 동시에 보여야 플레이어가 아이템 형태를\n비교한 뒤 바로 끌어 놓을 수 있습니다. 장착 현황은 디아블로식 읽기 전용 투영이며 별도의\n장착 권한을 만들지 않습니다.\n\n![iPhone 17 Pro 인벤토리 개발 결과](./media/inventory-item-concept/v017/studio-iphone17-inventory.jpg \"Studio Play에서 9×9 장착판, 우측 도구, 하단 카드 보관함과 안전 영역을 함께 확인한 최종 화면\")\n\n![룬 보드 승인 콘셉트](./media/inventory-item-concept/v017/rune-board-concept.png \"일곱 등급 영역의 경계, 중앙 시작칸, 능력 아이콘, 우측 보기 도구와 하단 룬 보관함을 포함한 승인 콘셉트\")\n\n룬 보드 화면은 상단 아이템 정보와 명시적인 `장착 화면` 복귀, 가운데 427칸 보드, 하단 세로\n스크롤 룬 보관함으로 구성합니다. 확대된 보드는 빈 바닥 드래그로 이동하고, 룬을 잡은 경우에는\n보드 이동보다 룬 드래그가 우선합니다. Roblox Core UI·노치·하단 제스처 영역을 침범하지 않으며\n작은 화면에서도 필수 버튼과 카드가 좌우로 잘리지 않아야 합니다.\n\n![iPhone 17 Pro 룬 보드 개발 결과](./media/inventory-item-concept/v017/studio-iphone17-rune-board.jpg \"Studio Play에서 육각 노드·능력 아이콘·상단 탭 결과·우측 도구·색상/칸 수 필터를 확인한 최종 화면\")\n\n![iPhone 7 세로 스트레스 검증](./media/inventory-item-concept/v017/studio-iphone7-rune-board.jpg \"짧고 좁은 세로 화면에서도 필수 조작과 룬 카드 열이 좌우로 잘리지 않는 결과\")\n\n## 사각 장착 시스템\n\n### 장착판과 배치 권위\n\n- 중앙 5×5, 25칸으로 시작하고 최대 9×9, 81칸까지 개별 칸을 해금합니다.\n- 해금은 열린 칸과 상하좌우로 닿은 칸만 허용해 고립된 섬을 만들지 않습니다.\n- 첫 해금은 100동, 다음 칸은 직전 가격의 1.2배입니다.\n- 아이템은 90°씩 회전하며 뒤집지 않습니다.\n- 보관함에서 꺼낸 아이템의 배치 실패는 보관함 카드로, 이미 장착된 아이템의 이동 실패는\n  기존 위치로 복귀합니다.\n- 장착판 위 장비와 소모품만 무게를 계산합니다. 새 배치가 100%를 넘으면 거절합니다.\n\n### 장착 수와 중복\n\n| 부위 | 최대 장착 | 같은 정의 중복 |\n|---|---:|---|\n| 무기 | 6 | 불가 |\n| 반지 | 2 | 불가 |\n| 머리·귀걸이·목걸이·상의·하의·글러브·신발·벨트 | 각 1 | 불가 |\n| 소모품 | 서로 다른 종류 4 | 같은 종류는 한 스택 |\n\n특수 아이템 분류와 가방 활성 칸, 아이템 시너지 시스템은 사용하지 않습니다. 여섯 무기는\n각각 독립적으로 기본 공격과 공격 횟수 기반 자동 스킬을 진행하며 서로의 시전을 막지 않습니다.\n\n### 무게와 보관함\n\n- 기본 최대 무게는 30.0kg입니다. 레벨마다 0.5kg, 가용 무게 능력치 포인트마다 0.5kg\n  증가합니다.\n- 최대 무게 장비를 해제해 현재 무게가 제한을 넘으면 이동과 모든 무기 공격을 멈추고 경고를\n  표시합니다.\n- 소모품은 기본 1×1, 한 칸에 999개까지 쌓이며 남은 무게에 들어가는 수량만 옮깁니다.\n- 보관함은 20슬롯에서 시작해 최대 200슬롯입니다. 첫 확장은 100동, 다음 가격은 1.1배입니다.\n- 동·은·금은 1,000단위로 환산하며 저장은 동 단위 정수로 유지합니다.\n\n## 알파 48종과 최종 아트\n\n![최종 48종 아이템 카탈로그](./media/inventory-item-concept/v017/alpha-48-item-catalog.png \"무기 14종과 방어구·장신구 34종의 최종 카툰 아이콘 및 사각 점유 형태\")\n\n| 분류 | 수량 | 구성 |\n|---|---:|---|\n| 무기 | 14 | 검·창·곡궁·석궁·총·메이스·도끼 각 2종 |\n| 머리 | 4 | 4칸·6칸, 크기별 2역할 |\n| 귀걸이 | 2 | 1칸, 2역할 |\n| 목걸이 | 4 | 2칸·3칸, 크기별 2역할 |\n| 상의 | 4 | 4칸·6칸, 크기별 2역할 |\n| 하의 | 4 | 4칸·6칸, 크기별 2역할 |\n| 글러브 | 4 | 2칸·4칸, 크기별 2역할 |\n| 신발 | 4 | 2칸·4칸, 크기별 2역할 |\n| 벨트 | 4 | 2칸·4칸, 크기별 2역할 |\n| 반지 | 4 | 1칸, 공격·방어·유틸리티 변형 |\n\n아이템 원화는 모바일 전투에서 작게 떠다녀도 읽히는 굵은 실루엣과 밝은 카툰 명암을 사용하고,\n억지로 칸을 지정하지 않아도 그림 자체가 사각 폴리오미노에 맞아 보이게 만듭니다. 근접 무기는\n위쪽, 활·석궁·총은 오른쪽을 기본 방향으로 그리며 화살·탄환·궤적을 원화에 굽지 않습니다.\n폐기된 과거 90종 아이콘과 공개 ItemDB 미디어는 제거하고 이 48종만 활성 원본으로 유지합니다.\n\n![공개 ItemDB 모바일 결과](./media/inventory-item-concept/v017/itemdb-mobile-result.png \"최종 48종 카툰 아이콘과 사각 점유 정보를 모바일에서 확인하는 ItemDB 결과\")\n\n## 아이템 등급과 합성\n\n| 주등급 | 이름 | 색상 |\n|---:|---|---|\n| 0 | 폐품 | 먹빛 `#59616B` |\n| 1 | 일반 | 상아 `#E8DEC4` |\n| 2 | 고급 | 초록 `#62C96B` |\n| 3 | 희귀 | 하늘 `#3DAEE9` |\n| 4 | 영웅 | 보라 `#9B6BE3` |\n| 5 | 전설 | 황금 `#F3B33D` |\n| 6 | 신화 | 장미 `#F05AA6` |\n\n아이템은 `MajorGrade 0~6`과 `MinorGrade 0~3`을 `3-2`처럼 표기합니다. 같은 정의와 완전히\n같은 복합 등급의 보관함 아이템 두 개만 합칠 수 있습니다. `g-0 → g-1 → g-2 → g-3 →\n(g+1)-0`이며 `6-3`이 최종 단계입니다. 기준 재료의 보드 후보, Seed와 룬 배치를 보존하고\n다른 재료만 소모합니다. 장착 중인 아이템은 먼저 보관함으로 회수해야 합니다.\n\n## 427칸 룬 보드\n\n### 구조와 해금\n\n- 반지름 4인 육각 영역 하나는 61칸이며 일곱 영역 전체는 `7×61=427칸`입니다.\n- 일곱 영역은 변 전체로 맞닿아 어느 시작점에서든 다른 영역으로 경로가 넘어갈 수 있습니다.\n- 각 영역 중앙 한 칸이 시작점이며 청록 특수 테두리로 표시합니다.\n- 주등급과 같은 번호까지 영역을 열고 잠긴 영역에는 룬을 놓을 수 없습니다.\n- 각 아이템 정의는 후보 보드 10개를 가집니다. 생성 시 하나를 균등 선택하고 VariantId와\n  Seed를 인스턴스에 영구 저장합니다. 48종 전체 데이터베이스에는 480개 보드가 있습니다.\n- Seed는 같은 후보의 칸 좌표·총 예산을 바꾸지 않고 허용 위치 배치만 결정합니다.\n\n보드 한 개의 능력 등급 수는 `30 / 45 / 54 / 60 / 67 / 90 / 81`로 합계 427입니다. 무기와\n방어구는 고유 레어 10칸, 숫자형 레어 20칸을 별도 배정합니다. 장신구는 패시브 대신 희귀한\n전역 효과가 정체성이므로 고유 레어 20칸, 숫자형 레어 40칸을 배정합니다. 모든 레어 노드는\n황금 테두리입니다.\n\n### 능력 계열\n\n- `A1·A2`: 아이템의 주력 성능 두 축\n- `B1·B2`: 보조 성능 두 축\n- `C1·C2`: 조건 또는 운용 분기 두 축\n- `D1·D2`: 아이템 고유 행동 두 축\n- `E1·E2·E3`: 무기는 1-0·3-0·5-0에서 열리는 세 자동 스킬, 방어구는 같은 등급에서\n  열리는 세 패시브를 강화\n\n장신구에는 패시브 스킬이 없으며 일반 능력과 특징 관련 능력을 약 7:3으로 배정합니다. E 능력은\n모든 아이템에 같은 문장을 붙이지 않고 실제 스킬·패시브가 가진 피해, 범위, 지속시간, 제어 강도\n등 선언된 파라미터만 강화합니다. 범위가 없는 스킬에 범위 증가를 붙이거나 보호막이 없는 장비에\n보호막 증가를 붙이지 않습니다.\n\n![62종 룬 능력 아이콘 시트](./media/inventory-item-concept/v017/rune-ability-icon-atlas.png \"실제 전투 effect_id와 1:1로 연결되는 62종 상아색 실루엣 아이콘\")\n\n보드 노드는 아이템별 표현명이 아니라 실제 `effect_id`에 아이콘 하나를 고정합니다. 중앙\n메달의 62종 능력 아이콘은 효과 종류를, 바탕색은 등급을, 황금·청록 테두리는 레어·시작 상태를\n담당합니다. 공용 룬 원화에는 능력 아이콘을 굽지 않고 런타임에서 합성해 의미와 색을 독립적으로\n유지합니다.\n\n## 룬 조각과 연결 규칙\n\n- 룬 색은 먹빛·상아·초록·하늘·보라·황금·장미의 7종입니다.\n- 조각은 연결된 1~5칸 폴리헥스이며 60° 회전과 반전을 허용합니다.\n- 이동·회전·반전을 같은 것으로 본 자유 폴리헥스 형태군은 `1 / 1 / 3 / 7 / 22`, 총\n  34종입니다.\n- 같은 색·등급·칸 수인 보관함 룬 두 개를 합칩니다. 1~4칸은 같은 등급의 다음 칸 수가 되고,\n  5칸은 다음 등급 1칸이 됩니다. 결과 ShapeId는 해당 칸 수 형태군에서 무작위 선택합니다.\n- 같은 색 조각은 서로 변을 공유하지 않고 한 칸 간격으로 연결합니다. 다른 색은 맞닿을 수\n  있습니다.\n- 시작칸에 첫 룬 색을 등록하며 같은 색은 다른 시작칸에서 다시 시작할 수 없습니다.\n- 노드는 시작점 연결, 룬·노드 색 일치, 등급 해금, 아이템 장착을 모두 만족해야 활성화됩니다.\n\n룬 카드를 끌면 실제 폴리헥스 모양과 잡은 칸의 상대 위치를 유지합니다. 보드 위 가이드는 가장\n가까운 육각 좌표에 스냅하며 유효는 녹색, 무효는 적색으로 표시합니다. 손을 놓으면 마지막\n가이드의 Anchor·회전·반전 값을 그대로 서버에 보내고 서버가 같은 규칙으로 다시 검증합니다.\n빈 칸을 이동 없이 탭하면 화면 상단 중앙에 그 칸의 능력명·수치·등급·활성 상태를 보여줍니다.\n\n## 보관함과 필터\n\n아이템 보관함은 종류·부위·등급·칸 수·정렬을 제공하고, 룬 보관함은 7색과 1~5칸 필터를\n독립적으로 제공합니다. 칸 수는 각 버튼을 ON/OFF할 수 있고 색상은 한 색 또는 전체를 선택합니다.\n룬 보관함은 상하 스크롤을 사용하며 어떤 세로형 모바일\n해상도에서도 카드 좌우가 잘리지 않도록 안전 영역 기반 열 수와 여백을 계산합니다.\n\n아이템 카드는 이미지, 이름, 복합 등급, 부위, 점유 미니맵, 무게, 활성 룬 노드 수와 합성 가능\n상태를 보여줍니다. 룬 카드는 실제 육각 조각, 색 이름, 등급, 칸 수, 수량과 현재 보드 배치 가능\n여부를 보여줍니다.\n\n## 구현과 데이터 권한\n\n원본과 생성물의 책임은 다음과 같습니다.\n\n- `alpha-item-definitions.json`: 48종 이름·부위·무게·사각 점유·전투 아트 방향\n- `inventory-item-layouts.json`: 공개 ItemDB와 게임 런타임이 공유하는 배치·이미지 조정값\n- `item-rune-board-database.json`: 아이템별 능력 정의와 후보 10개, 총 480개 보드\n- `rune-piece-catalog.json`: 34개 룬 형태군\n- `rune-ability-icon-catalog.json`: 62개 effect 아이콘과 아틀라스 좌표\n- `InventoryV2`·`RuneBoard`: 클라이언트 상태, 배치 미리보기와 모바일 화면\n- `InventoryV2Service`: 소유권·충돌·무게·장착 제한·합성의 서버 최종 검증\n\n클라이언트가 보낸 가격, 무게, 합성 결과와 랜덤 도형을 신뢰하지 않습니다. 서버는 배치·합성\n요청마다 소유권, 좌표, 회전, 해금, 충돌, 부위 수, 동일 정의 중복, 무게, 보관함 용량과 재화를\n다시 확인합니다.\n\n## 범위와 검증 결과\n\n이 버전은 최종 48종 아이콘, 공개 ItemDB, 427칸/480보드 데이터, 룬 조각과 능력 아이콘, 모바일\n인벤토리·룬 보드 소스를 같은 기준으로 묶습니다. Studio MCP를 통해 ItemDB 리비전과 두 최종\n이미지 에셋을 라이브 플레이스에 반영했고, iPhone 17 Pro와 iPhone 7 세로 화면에서\n인벤토리→룬 보드 진입, 룬 모양 유지 드래그·유효 가이드·배치, 보드 이동, 노드 짧은 탭 능력 표시와\n세로 룬 보관함을 검증했습니다. 두 실행 모두 콘솔 오류가 없었고 검증 후 Device Simulator는\n기본 뷰포트로 복구했습니다.\n",
          "source_path": "wiki/content/pages/inventory-item-concept/v017.md",
          "timeline_order": 38
        },
        {
          "id": "inventory-item-concept",
          "title": "인벤토리와 아이템 개념",
          "summary": "사각 장착 보드와 부위별 장착 제한, 48종 알파 장비, 아이템마다 성장하는 259칸 Seed 룬 보드, 14종 무기별 능력과 6등급 전용 구조형 레어 규칙을 다음 인벤토리 방향으로 확정했습니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "inventory",
            "equipment",
            "rune-board",
            "gemblo",
            "item-grade",
            "weapon",
            "mobile",
            "planning"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-18",
          "authors": [
            "Codex"
          ],
          "version": 16,
          "change_type": "updated",
          "change_summary": "기존 육각 가방·시너지 인벤토리를 후속 제품 방향에서 대체하고, 사각 장착 퍼즐과 디아블로식 장비 요약, 0~6등급 아이템·룬 합성, Seed 고정 259칸 룬 보드, 알파 48종과 무기 14종의 능력 계약을 확정했습니다.",
          "supersedes": "inventory-item-concept@v015",
          "sources": [
            "wiki/content/pages/inventory-item-concept/v015.md",
            "wiki/content/pages/product-planning-change-log/v004.md"
          ],
          "related": [
            "product-planning-change-log",
            "backpack-combat-stat-database",
            "synergy-icon-system",
            "development-wiki"
          ],
          "validation": [
            "기획 산술 검산: 7개 영역 각각 37칸, 등급 총량 18·27·33·37·41·50·53, 전체 259칸",
            "기획 산술 검산: 무기 보드 A/B/C/D/레어 102·71·48·32·6칸, 전체 259칸",
            "기획 산술 검산: 무기 14종과 방어구·장신구 34종, 알파 전체 48종",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "python3 -m unittest tests/test_wiki.py: 11 tests passed",
            "python3 -m unittest tests.test_repository_policy: 1 test passed",
            "git diff --check"
          ],
          "body": "# 인벤토리와 아이템 개념\n\n## 기획 배경과 목표\n\n기존 구현은 육각 가방의 활성 칸과 아이템 시너지를 중심으로 공간 퍼즐을 만들었습니다. 후속\n제품 방향에서는 장착 규칙을 더 즉시 이해할 수 있게 만들고, 깊은 육각 퍼즐은 각 아이템의\n장기 성장 콘텐츠로 옮깁니다. 메인 인벤토리는 사각 칸과 명확한 장착 부위를 사용하고, 각\n아이템 내부에는 별도의 259칸 육각 룬 보드를 둡니다.\n\n플레이어는 어떤 장비를 장착할지, 사각 장착판의 제한된 공간에 어떤 크기와 형태를 넣을지,\n선택한 아이템의 룬 보드에서 어떤 경로와 색을 먼저 연결할지를 순서대로 고민합니다. 장비의\n고유 성능은 룬의 단순 고정 수치에 묻히지 않도록 모든 일반 룬 효과가 해당 아이템의 기본\n능력과 고유 행동을 증폭합니다. 공격력·체력처럼 선형으로 성장하는 수치는 큰 인플레이션을\n허용하되, 무적·확률·행동 횟수·발사체 수처럼 게임 구조를 깨뜨릴 수 있는 값에는 명시적인\n캡과 6등급 전용 레어 규칙을 둡니다.\n\n이 버전은 구현 결과가 아니라 다음 구현을 위한 확정 기획입니다. inventory-item-concept@v015에\n기록된 기존 육각 가방·시너지 구현은 역사적 기록으로 보존하지만, 새 구현의 제품 기준으로는\n이 문서가 우선합니다.\n\n## 의도한 플레이어 경험\n\n- 사각 장착판에 아이템을 놓는 순간 장착되며, 별도의 장착 버튼이나 중복 상태가 없습니다.\n- 무기 여섯 개와 부위별 장비를 공간 퍼즐로 구성하고, 디아블로식 장비 화면에서 현재 장착\n  상태를 한눈에 확인합니다.\n- 큰 장비는 더 많은 공간을 요구하지만 다른 형태와 역할을 제공하므로 단순 상위 호환이\n  아닙니다.\n- 같은 아이템도 Seed가 만든 룬 능력 위치와 플레이어가 보유한 룬 조각 형태 때문에 서로\n  다른 성장 경로를 가집니다.\n- 룬은 아이템을 범용 스탯 덩어리로 바꾸지 않고 그 아이템의 공격 방식, 조건부 효과와 자동\n  스킬을 강화합니다.\n- 황금 테두리의 레어 칸은 경로를 바꿀 만큼 강한 목표이며, 공격 구조를 바꾸는 효과는 최종\n  6등급에서만 등장합니다.\n\n## 핵심 원칙과 설계 철학\n\n### 메인 장착은 사각형, 장기 성장은 육각형이다\n\n아이템 이미지와 메인 장착 판정은 다시 사각 칸을 사용합니다. 기존 육각 가방은 장착 공간을\n만들지 않습니다. 육각형은 아이템별 룬 보드와 젬블로식 경로 퍼즐에만 사용해 두 공간의\n목적과 조작 문법을 구분합니다.\n\n### 배치와 장착은 하나의 권위 상태다\n\n사각 장착판에 유효하게 배치된 아이템만 장착 아이템입니다. 디아블로식 장비 화면은 이 상태를\n보여 주는 투영 UI이며 별도의 장착 저장값을 만들지 않습니다. 무기는 최대 6개, 반지는 최대\n2개이며 같은 DefinitionId를 가진 무기와 반지는 중복 장착할 수 없습니다.\n\n### Seed는 경로를 바꾸고 총 전투력 예산은 바꾸지 않는다\n\n아이템 생성 시 RuneBoardSeed를 한 번 부여하고 전체 259칸을 미리 결정합니다. 동일 정의와\n동일 등급은 능력 종류별 개수와 총량이 같고 Seed는 허용된 위치만 섞습니다. 등급 상승이나\n저장·재접속·합성으로 Seed를 다시 굴리지 않습니다.\n\n### 룬은 아이템의 기본값과 행동을 증폭한다\n\n일반 능력은 고정 공격력 80처럼 아이템 차이를 지우는 방식이 아니라 해당 아이템의 기본\n공격력·속도·보호막·고유 조건에 대한 퍼센트로 계산합니다. 선형 전투력에는 디자인 하드캡을\n두지 않지만, 확률 100% 초과·피해 무효·무한 행동·지수적 발사체 증식은 별도 규칙으로 막습니다.\n\n### 구조형 레어는 6등급 전용이고 항상 한 단위다\n\n추가 발사체, 도탄, 관통, 연쇄 대상, 추가 대시처럼 숫자 하나가 새로운 공격·대상·행동을\n만드는 능력은 오직 6등급 황금 칸에만 등장합니다. 한 칸은 반드시 +1 또는 -1만 주며 높은\n등급 칸 하나가 +8을 주지 않습니다.\n\n## 메인 장착 시스템\n\n### 장착 부위와 중복 제한\n\n| 장착 부위 | 장착 수 | 중복 규칙 |\n|---|---:|---|\n| 무기 | 6 | 같은 아이템 DefinitionId 중복 불가 |\n| 머리 | 1 | 같은 부위 추가 장착 불가 |\n| 귀걸이 | 1 | 같은 부위 추가 장착 불가 |\n| 목걸이 | 1 | 같은 부위 추가 장착 불가 |\n| 상의 | 1 | 같은 부위 추가 장착 불가 |\n| 하의 | 1 | 같은 부위 추가 장착 불가 |\n| 글러브 | 1 | 같은 부위 추가 장착 불가 |\n| 신발 | 1 | 같은 부위 추가 장착 불가 |\n| 벨트 | 1 | 같은 부위 추가 장착 불가 |\n| 반지 | 2 | 같은 아이템 DefinitionId 중복 불가 |\n\n특수 아이템 장착 분류는 완전히 제외합니다. 방패 막기 규칙은 정의하지만 현재 알파 48종에는\n방패가 없으므로 실제 방패 장착 분류는 후속 결정입니다.\n\n### 알파 아이템 수와 사각 점유 크기\n\n| 장착 부위 | 점유 칸 | 역할 구성 | 구현 수 |\n|---|---|---|---:|\n| 무기 | 무기별 형태 | 검·창·곡궁·석궁·총·메이스·도끼 각 2종 | 14 |\n| 머리 | 4칸·6칸 | 크기별 2역할 | 4 |\n| 귀걸이 | 1칸 | 2역할 | 2 |\n| 목걸이 | 2칸·3칸 | 크기별 2역할 | 4 |\n| 상의 | 4칸·6칸 | 크기별 2역할 | 4 |\n| 하의 | 4칸·6칸 | 크기별 2역할 | 4 |\n| 글러브 | 2칸·4칸 | 크기별 2역할 | 4 |\n| 신발 | 2칸·4칸 | 크기별 2역할 | 4 |\n| 벨트 | 2칸·4칸 | 크기별 2역할 | 4 |\n| 반지 | 1칸 | 공격 2종·방어/유틸리티 2종 | 4 |\n| **전체** |  |  | **48** |\n\n반지는 두 칸을 채우면서 동일 아이템 중복이 금지되므로 두 종류만 만들면 조합이 하나로\n고정됩니다. 역할은 두 축으로 유지하되 역할당 두 변형을 만들어 네 종류를 둡니다. 등급과\n세부 강화 단계는 별도 아이템 정의가 아니라 같은 48개 정의의 성장 상태입니다.\n\n### 방어구·장신구 알파 역할\n\n| 부위 | 아이템 | 칸 | A 주력 | B 보조 | C 분기 | D 고유 |\n|---|---|---:|---|---|---|---|\n| 머리 | 약점 탐지경 | 4 | 치명타 피해 | 치명타율 | 약점 탐지거리 | 약점 연속적중 피해 |\n| 머리 | 철벽 투구 | 4 | 방어력 | 상태저항 | 원거리 피해감소 | 피격 시 보호막 |\n| 머리 | 전쟁군주 투구 | 6 | 스킬 피해 | 재사용속도 | 정예 대상 피해 | 처치 후 공격 강화 |\n| 머리 | 성채 대투구 | 6 | 방어력 | 최대체력 | 제어시간 감소 | 저체력 피해감소 |\n| 귀걸이 | 바람결 귀걸이 | 1 | 행동속도 | 이동속도 | 회피율 | 회피 후 속도 |\n| 귀걸이 | 마력 순환 귀걸이 | 1 | 자원회복속도 | 재사용속도 | 자원소모 감소 | 최대 자원 스킬 피해 |\n| 목걸이 | 증폭 펜던트 | 2 | 스킬 피해 | 강화효과 효율 | 재사용속도 | 같은 스킬 연속사용 효과 |\n| 목걸이 | 수호 부적 | 2 | 보호막 | 받는 회복량 | 원소저항 | 보호막 파괴 후 피해감소 |\n| 목걸이 | 원소 연쇄 목걸이 | 3 | 원소 피해 | 상태이상 확률 | 상태이상 지속시간 | 교차 원소 피해 |\n| 목걸이 | 불사자의 토크 | 3 | 최대체력 | 받는 회복량 | 치명상 생존 | 생존 발동 회복량 |\n| 상의 | 척후 가죽상의 | 4 | 방어력 | 이동속도 | 원거리 피해감소 | 이동 중 피해감소 |\n| 상의 | 가시 전투복 | 4 | 방어력 | 반사 피해 | 반격 발동률 | 반격 피해 |\n| 상의 | 성채 판금갑옷 | 6 | 방어력 | 최대체력 | 전체 피해감소 | 정지 중 피해감소 |\n| 상의 | 응징 중갑 | 6 | 방어력 | 응징 피해 | 응징 발동률 | 연속 피격 응징 피해 |\n| 하의 | 생명 직조 하의 | 4 | 최대체력 | 받는 회복량 | 체력재생 | 초과회복 보호막 |\n| 하의 | 유랑자 전술바지 | 4 | 이동속도 | 기력회복속도 | 회피율 | 이동 중 공격속도 |\n| 하의 | 거인의 각갑 | 6 | 최대체력 | 방어력 | 밀쳐내기 저항 | 고체력 피해감소 |\n| 하의 | 환영 하의 | 6 | 회피율 | 이동속도 | 회피 재사용속도 | 회피 후 피해 |\n| 글러브 | 속공 장갑 | 2 | 공격속도 | 공격 준비·시전속도 | 적중효과 발동률 | 연속적중 공격속도 |\n| 글러브 | 정밀 사격 장갑 | 2 | 치명타율 | 치명타 피해 | 명중·집탄율 | 약점 피해 |\n| 글러브 | 과부하 건틀릿 | 4 | 공격속도 | 재사용속도 | 과부하 지속시간 | 과부하 피해 |\n| 글러브 | 처형자의 건틀릿 | 4 | 공격력 | 치명타 피해 | 처형 기준 | 저체력 대상 피해 |\n| 신발 | 순풍 장화 | 2 | 이동속도 | 가속도 | 기력소모 감소 | 직선 이동 속도 |\n| 신발 | 그림자 신발 | 2 | 회피율 | 회피거리 | 회피 재사용속도 | 대시 무적시간 |\n| 신발 | 추진 장갑화 | 4 | 이동속도 | 대시거리 | 대시 재사용속도 | 추가 대시 횟수 |\n| 신발 | 위상 각반 | 4 | 회피율 | 상태저항 | 대시 무적시간 | 대시 후 피해감소 |\n| 벨트 | 응급처치 벨트 | 2 | 회복량 | 사용속도 | 회복 지속시간 | 저체력 회복량 |\n| 벨트 | 전투 순환 벨트 | 2 | 공격 준비속도 | 자원회복속도 | 자동 스킬 피해 | 자동 스킬 후 행동속도 |\n| 벨트 | 생명유지 벨트 | 4 | 최대체력 | 체력재생 | 보호막 | 저체력 재생량 |\n| 벨트 | 연금 동력 벨트 | 4 | 자원회복속도 | 소모품 효과 | 사용 재사용속도 | 교차 소모품 효과 |\n| 반지 | 격노의 반지 | 1 | 공격력 | 치명타 피해 | 분노 획득량 | 최대 분노 피해 |\n| 반지 | 집중의 반지 | 1 | 치명타율 | 약점 피해 | 명중·집탄율 | 무피격 유지 피해 |\n| 반지 | 수호의 반지 | 1 | 방어력 | 보호막 | 방어 발동률 | 보호막 중 피해감소 |\n| 반지 | 순환의 반지 | 1 | 재사용속도 | 자원회복속도 | 교차 스킬 피해 | 자동 스킬 후 다음 공격 피해 |\n\n## 등급과 합성\n\n### 0~6등급 이름과 색상\n\n| 등급 | 이름 | 영문 | 대표색 |\n|---:|---|---|---|\n| 0 | 폐품 | SCRAP | #59616B |\n| 1 | 일반 | COMMON | #E8DEC4 |\n| 2 | 고급 | UNCOMMON | #62C96B |\n| 3 | 희귀 | RARE | #3DAEE9 |\n| 4 | 영웅 | EPIC | #9B6BE3 |\n| 5 | 전설 | LEGENDARY | #F3B33D |\n| 6 | 신화 | MYTHIC | #F05AA6 |\n\n빨간색은 오류·무효 배치에 예약하고 등급색으로 사용하지 않습니다.\n\n### 아이템 합성\n\n동일 DefinitionId와 동일 세부 등급 두 개를 합칩니다.\n\n- g-0 두 개 → g-1\n- g-1 두 개 → g-2\n- g-2 두 개 → g-3\n- g-3 두 개 → 다음 주등급의 g+1-0\n- 다음 주등급 0단계에는 최초 g-0 아이템 16개가 필요합니다.\n\n합성 시 기준 아이템 하나를 선택하고 그 아이템의 RuneBoardSeed와 배치된 룬을 보존합니다.\n재료 아이템은 소비하며 승급을 이용한 보드 재추첨은 허용하지 않습니다.\n\n### 룬 합성\n\n룬은 1~5칸의 연결된 육각 조각입니다. 같은 등급과 같은 칸 수라면 형태가 달라도 합성합니다.\n\n- g등급 1칸 두 개 → g등급 2칸\n- g등급 2칸 두 개 → g등급 3칸\n- g등급 3칸 두 개 → g등급 4칸\n- g등급 4칸 두 개 → g등급 5칸\n- g등급 5칸 두 개 → g+1등급 1칸\n\n합성 결과의 조각 형태는 허용된 형태 중 Seed 기반으로 다시 정합니다. 다음 등급 1칸 룬\n하나에는 현재 등급 1칸 룬 32개가 필요합니다.\n\n## 259칸 룬 보드\n\n### 기하와 개방\n\n보드는 반지름 3의 정육각 영역 일곱 개로 구성합니다. 각 영역은 1+6+12+18=37칸이며,\n가운데 0번 영역 주위에 1~6번 영역을 둡니다. 0번을 제외한 바깥 영역의 시계방향 순서와\n물리적 위치에는 의미가 없습니다.\n\n| 아이템 주등급 | 새로 개방되는 영역 | 누적 개방 칸 |\n|---:|---:|---:|\n| 0 | 0번 | 37 |\n| 1 | 바깥 영역 1개 | 74 |\n| 2 | 바깥 영역 1개 | 111 |\n| 3 | 바깥 영역 1개 | 148 |\n| 4 | 바깥 영역 1개 | 185 |\n| 5 | 바깥 영역 1개 | 222 |\n| 6 | 마지막 바깥 영역 | 259 |\n\n각 영역 중앙의 번호 칸이 시작점입니다. 시작점은 처음에는 무색이며 첫 룬이 색을 등록합니다.\n한 시작점에 등록한 색은 다른 시작점에서 다시 시작할 수 없습니다.\n\n### 젬블로식 연결 규칙\n\n- 같은 색 룬 조각끼리는 변을 맞대고 직접 인접할 수 없습니다.\n- 새 조각은 같은 색의 기존 네트워크에서 정확히 육각 한 칸을 띄운 위치로 연결합니다.\n- 다른 색 조각은 서로 인접할 수 있고 상대 경로를 막을 수 있습니다.\n- 조각은 겹칠 수 없고 보드 밖으로 나갈 수 없습니다.\n- 시작점에서 연결되지 않은 조각은 능력을 활성화하지 않습니다.\n- 조각 아래 능력과 룬 색이 일치하고, 아이템 등급이 능력 등급 이상일 때만 발동합니다.\n- 아이템이 장착되어 있을 때만 룬 능력이 전투에 적용됩니다.\n\n### 영역별 능력 등급 분포\n\n| 영역 | 0능력 | 1능력 | 2능력 | 3능력 | 4능력 | 5능력 | 6능력 | 합계 |\n|---:|---:|---:|---:|---:|---:|---:|---:|---:|\n| 0 | 18 | 9 | 6 | 3 | 1 | 0 | 0 | 37 |\n| 1 | 0 | 18 | 9 | 6 | 3 | 1 | 0 | 37 |\n| 2 | 0 | 0 | 18 | 9 | 6 | 3 | 1 | 37 |\n| 3 | 0 | 0 | 0 | 18 | 9 | 6 | 4 | 37 |\n| 4 | 0 | 0 | 0 | 1 | 18 | 9 | 9 | 37 |\n| 5 | 0 | 0 | 0 | 0 | 4 | 18 | 15 | 37 |\n| 6 | 0 | 0 | 0 | 0 | 0 | 13 | 24 | 37 |\n| **전체** | **18** | **27** | **33** | **37** | **41** | **50** | **53** | **259** |\n\n전체 259칸은 아이템 생성 시 미리 결정하지만 잠긴 영역은 숨깁니다. 시작점은 해당 영역의\n주등급 A 능력으로 고정하고, 나머지는 영역별 개수와 아이템의 A/B/C/D 예산을 지키며 Seed로\n섞습니다. 고등급 칸과 레어 칸은 뭉치지 않도록 제한하고 연결 가능성을 생성 후 검증합니다.\n\n## 일반 룬 능력 수치\n\n같은 능력이 등장하는 모든 등급은 UI에 표시되는 값까지 반드시 달라야 합니다. 존재하지 않는\n등급은 0이 아니라 null로 저장하며, 실제 등장 등급끼리 값이 엄격히 증가해야 합니다.\n\n| 코드 | 적용 효과 | 0 | 1 | 2 | 3 | 4 | 5 | 6 |\n|---|---|---:|---:|---:|---:|---:|---:|---:|\n| POWER | 공격·방어·체력·보호막·회복 | 3% | 4% | 5% | 6% | 8% | 10% | 13% |\n| SPEED | 공격·이동·준비·자원·재사용속도 | 1% | 2% | 3% | 4% | 5% | 7% | 9% |\n| CHANCE | 치명타·회피·발동 효율 | 1% | 2% | 3% | 4% | 5% | 7% | 10% |\n| TRAIT | 조건부·고유 효과 | 3% | 5% | 7% | 9% | 12% | 16% | 21% |\n| GUARD | 방어·피해감소 효율 | 1% | 2% | 3% | 4% | 5% | 7% | 10% |\n| TIME | 지속·판정시간 | 0.10초 | 0.15초 | 0.20초 | 0.25초 | 0.30초 | 0.40초 | 0.50초 |\n| RANGE | 범위·사거리·거리 | 0.5% | 0.8% | 1.1% | 1.5% | 2.0% | 2.8% | 4.0% |\n\n퍼센트는 정수, 시간은 0.05초 단위로 최대 소수 둘째 자리, 거리의 Stud 값은 소수 첫째\n자리까지 표시합니다. 표시 포맷 뒤 두 등급이 같아지면 데이터 검증 실패입니다.\n\n## 레어 능력\n\n### 표현과 배치\n\n레어 칸은 능력 등급의 내부색을 유지하고 외곽에 황금색 #F4C84A와 밝은 보조광 #FFF1A8을\n표시합니다. 룬으로 덮은 뒤에도 금색 외곽은 룬 위 레이어에 남습니다. 구조형 레어는 6번\n영역의 6등급 칸에만 배치하고 아이템 6등급 이전에는 능력명과 위치를 공개하지 않습니다.\n\n### 무기 로컬 구조형 레어\n\n| 능력 | 허용 대상 | 칸 효과 | 최종 캡 |\n|---|---|---:|---:|\n| 추가 발사체 | 발사체 무기 | +1개 | +8개 |\n| 스킬 필요 공격 횟수 감소 | 공격 횟수 자동 스킬 무기 | -1회 | -8회 |\n| 도탄 횟수 | 도탄 무기 | +1회 | +8회 |\n| 관통 횟수 | 관통 무기 | +1회 | +12회 |\n| 연쇄 대상 | 연쇄 무기 | +1명 | +8명 |\n| 근거리 공격 사거리 | MeleeAttack 태그 무기 | +1 Stud | +8 Stud |\n\n발사체 분열 세대 증가와 분열 발사체 증가는 기획에서 삭제합니다. 무기 종류명이 아니라 실제\n공격 태그와 동작으로 호환성을 판정합니다.\n\n### 장신구 전역 구조형 레어\n\n| 부위 | 능력 | 현재 알파 배정 | 칸 수 |\n|---|---|---|---:|\n| 목걸이 | 모든 발사체 무기의 추가 발사체 +1 | 원소 연쇄 목걸이 | 2 |\n| 반지 | 모든 공격 횟수 자동 스킬의 필요 공격 횟수 -1 | 순환의 반지 | 2 |\n| 귀걸이 | 모든 근거리 무기의 공격 사거리 +1 Stud | 바람결 귀걸이 | 2 |\n| 신발 | 추가 대시 횟수 +1 | 추진 장갑화 | 2 |\n\n로컬과 전역 값을 합산한 뒤 같은 최종 캡을 적용합니다. 전역 효과는 장착 중인 호환 무기\n모두에 적용하지만 비호환 공격에는 무효 옵션을 생성하지 않습니다.\n\n### 수치형 레어\n\n| 능력 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 캡 |\n|---|---:|---:|---:|---:|---:|---:|---:|---:|\n| 대시 무적시간 | 0.10초 | 0.15초 | 0.20초 | 0.25초 | 0.30초 | 0.40초 | 0.50초 | 추가 1.0초·최종 1.5초 |\n| 대시거리 | 1.0 Stud | 1.5 | 2.0 | 2.5 | 3.0 | 4.0 | 5.0 | 기본의 250% |\n| 처형 기준 | 1%p | 2%p | 3%p | 4%p | 5%p | 7%p | 10%p | 일반 40%·정예 20%·보스 10% |\n| 치명상 생존 | 2% | 3% | 4% | 5% | 7% | 10% | 15% | 50% |\n| 기절·빙결 시간 | 0.10초 | 0.20초 | 0.30초 | 0.40초 | 0.50초 | 0.70초 | 1.00초 | 대상별 CC 캡 |\n\n## 전투 수치 캡과 계산 순서\n\n### 최종 캡\n\n| 능력 | 최대치 |\n|---|---:|\n| 이동속도 | 기본의 500% |\n| 공격속도 | 기본의 300%, 공격간격 최소 0.12초 |\n| 대시거리 | 기본의 250% |\n| 추가 발사체 | +8개 |\n| 공격 준비·시전속도 | 기본의 400% |\n| 재사용속도 | 기본의 300% |\n| 투사체 속도 | 기본의 500% |\n| 원거리 사거리 | 기본의 500% |\n| 광역 반경 | 기본의 300% |\n| 치명타·일반 발동률 | 100% |\n| 회피·자동 방어·자동 반격 | 75% |\n| 상태이상 저항 | 80% |\n| 최종 피해감소율 | 50% |\n| 흡혈 비율 | 가한 피해의 50% |\n| 흡혈 회복속도 | 초당 최대체력의 25% |\n| 자동 체력재생 | 초당 최대체력의 20% |\n| 보호막 보유량 | 최대체력의 500% |\n| 보호막 생성속도 | 초당 최대체력의 50% |\n| 자원소모 감소 | 80% |\n| 자원회복속도 | 기본의 500% |\n\n공격력·스킬 피해·치명타 피해·최대체력·장비 방어력·회복량·보호막 생성량·원소 피해·약점\n피해와 조건부 피해는 선형 성장값이므로 디자인 하드캡을 두지 않습니다.\n\n### 방패 막기와 피해감소\n\n방패 막기 확률은 최대 100%입니다. 발동한 공격은 현재 방어력을 두 배로 사용해 방어력 감소를\n먼저 계산합니다. 이후 남은 피해에 최대 50%의 최종 피해감소율을 적용합니다.\n\n    적용 방어력 = 막기 성공 시 현재 방어력 × 2, 아니면 현재 방어력\n    최종 피해 = 방어력 적용 후 피해 × (1 - min(피해감소율, 0.50))\n\n### 자동 스킬 공격 횟수\n\n모든 무기 스킬은 기본 공격을 정해진 횟수 실행하면 자동 발동합니다. 추가 발사체·관통·도탄·\n연쇄·스킬이 만든 공격은 카운터를 늘리지 않고 해당 무기의 기본 공격 실행만 1회로 셉니다.\n\n    실제 필요 공격 횟수 = max(1, 기본 필요 횟수 - min(감소 합계, 8))\n\n무기와 스킬마다 카운터를 분리하고 자동 스킬이 다른 자동 스킬을 다시 발동시키는 순환은\n허용하지 않습니다.\n\n## 알파 무기 14종의 룬 보드\n\n모든 무기는 아래 공통 칸 예산을 사용합니다.\n\n| 등급 | A | B | C | D | 구조형 레어 | 합계 |\n|---:|---:|---:|---:|---:|---:|---:|\n| 0 | 8 | 5 | 3 | 2 | 0 | 18 |\n| 1 | 11 | 7 | 5 | 4 | 0 | 27 |\n| 2 | 13 | 9 | 7 | 4 | 0 | 33 |\n| 3 | 15 | 10 | 7 | 5 | 0 | 37 |\n| 4 | 16 | 11 | 8 | 6 | 0 | 41 |\n| 5 | 19 | 14 | 10 | 7 | 0 | 50 |\n| 6 | 20 | 15 | 8 | 4 | 6 | 53 |\n| **전체** | **102** | **71** | **48** | **32** | **6** | **259** |\n\n| 무기 | 자동 스킬 | 기본 조건 | A | B | C | D | 6등급 구조형 레어 6칸 |\n|---|---|---:|---|---|---|---|---|\n| 연격의 톱니검 | 톱니 폭주 | 10회 | 공격력 | 공격속도 | 연격 유지시간 | 세 번째 공격 피해 | 근거리 사거리 3·필요 공격 감소 3 |\n| 반격의 수호검 | 수호 반격 | 12회 | 공격력 | 방어 효율 | 반격 발동률 | 반격 피해 | 근거리 사거리 4·필요 공격 감소 2 |\n| 천공 장창 | 천공 돌진 | 10회 | 공격력 | 공격속도 | 관통 후 피해 유지 | 원거리 대상 피해 | 근거리 사거리 2·관통 2·필요 공격 감소 2 |\n| 뇌광 투창 | 뇌광 회귀 | 11회 | 공격력 | 투창 속도 | 연쇄 전격 피해 | 왕복 이중적중 피해 | 관통 1·연쇄 2·근거리 사거리 1·필요 공격 감소 2 |\n| 질풍 곡궁 | 질풍 연사 | 8회 | 공격속도 | 공격력 | 화살 속도 | 연속사격 피해 | 추가 발사체 4·필요 공격 감소 2 |\n| 추적자의 곡궁 | 추적 화살 | 10회 | 공격력 | 치명타율 | 약점 피해 | 표식 대상 피해 | 추가 발사체 1·관통 2·연쇄 1·필요 공격 감소 2 |\n| 공성 석궁 | 공성 볼트 | 12회 | 공격력 | 충전속도 | 관통 피해 | 완전충전 피해 | 관통 4·필요 공격 감소 2 |\n| 산탄 석궁 | 산탄 폭발 | 9회 | 공격력 | 공격 준비속도 | 집탄율 | 근거리 대상 피해 | 추가 발사체 4·필요 공격 감소 2 |\n| 과열식 연발총 | 과열 탄막 | 12회 | 공격속도 | 공격력 | 냉각속도 | 고열 상태 피해 | 추가 발사체 3·관통 1·필요 공격 감소 2 |\n| 도탄 권총 | 도탄 난사 | 8회 | 공격력 | 공격 준비속도 | 도탄 피해 | 마지막 도탄 피해 | 도탄 4·필요 공격 감소 2 |\n| 지진 메이스 | 대지진 | 10회 | 공격력 | 충격파 범위 | 기절 확률 | 충격파 피해 | 근거리 사거리 2·연쇄 2·필요 공격 감소 2 |\n| 수호자 메이스 | 수호의 파동 | 12회 | 보호막 | 공격력 | 밀쳐내기 거리 | 보호막 중 피해 | 근거리 사거리 4·필요 공격 감소 2 |\n| 흡혈 도끼 | 혈풍 회전 | 10회 | 공격력 | 흡혈 효율 | 출혈 피해 | 잃은 체력 비례 피해 | 근거리 사거리 3·필요 공격 감소 3 |\n| 광전사 도끼 | 광전 난무 | 8회 | 공격력 | 공격속도 | 저체력 피해 | 처치 후 광폭 효과 | 근거리 사거리 3·필요 공격 감소 3 |\n\n무기 구조형 레어는 해당 무기 로컬 효과입니다. 목걸이·반지·귀걸이의 전역 구조형 레어를\n더한 뒤 발사체 +8, 필요 공격 감소 8회, 근거리 사거리 +8 Stud 캡을 각각 적용합니다.\n\n## 폐기·제외된 기획\n\n- 가방 아이템이 활성 칸을 만드는 장착 구조\n- 육각형 메인 인벤토리와 가방 배치 모드\n- 가방 속성, 아이템 시너지와 26종 시너지 판정\n- 시너지 아이콘·필터·A/B/C 공간 접촉 효과의 후속 제품 사용\n- 특수 아이템 장착 분류\n- 탄약, 탄약 미소모, 탄약 최대량과 탄약 회복\n- 소모품 미소모 확률\n- 스킬 초기화 확률\n- 발사체 분열 세대와 분열 발사체 증가 룬\n- 등급이 달라도 UI 표시 수치가 같은 능력 데이터\n\n기존 코드와 자산은 새 구현 전까지 저장소에 남을 수 있지만 새 제품 규칙의 근거로 확장하지\n않습니다. 실제 제거와 데이터 이관은 별도 구현·검증 커밋에서 수행합니다.\n\n## 현재 결과와 구현 경계\n\n이번 버전은 기획 계약만 발행합니다. 런타임 인벤토리, ItemDB, 생성 레이아웃, Studio place와\n모바일 UI는 아직 v015의 구현 상태입니다. 따라서 이번 커밋에서는 ItemDB build/bake, Studio\nMCP 수정, 모바일 결과 캡처를 수행하지 않습니다.\n\n후속 구현은 먼저 데이터 모델과 저장 마이그레이션을 확정하고, 그다음 사각 장착판·디아블로식\n요약 UI, 룬 보드 생성기·합성·젬블로 판정, 전투 능력 적용 순서로 나눕니다. 기존 시너지와\n육각 가방 코드는 새 계약이 실제로 대체될 때까지 역사적 구현으로 취급합니다.\n\n## 후속 기획\n\n- 방패를 여섯 무기 중 하나로 취급할지 별도 방어 장착 부위로 둘지 확정합니다.\n- 48종의 최종 이름·아이콘·사각 폴리오미노 좌표와 회전 규칙을 ItemDB에 등록합니다.\n- 방어구·장신구 보드의 레어 칸 수와 정확한 A/B/C/D 등급별 교체 수량을 확정합니다.\n- Seed 생성기의 군집 제한과 연결 가능성 검사기를 실제 룬 조각 카탈로그로 시뮬레이션합니다.\n- 전투력 인플레이션에 맞춘 적 성장 곡선과 모바일 발사체 성능 예산을 플레이테스트합니다.\n",
          "source_path": "wiki/content/pages/inventory-item-concept/v016.md",
          "timeline_order": 37
        },
        {
          "id": "inventory-item-concept",
          "title": "인벤토리와 아이템 개념",
          "summary": "ItemDB에 칸 수·시너지 OR·게임 ON 필터와 실제 시너지 아이콘을 추가하고, 인벤토리에는 최대 6개의 장착 무기 관리·상세 정보·필드 표시 흐름을 연결했습니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "inventory",
            "item",
            "backpack",
            "itemdb",
            "web-editor",
            "filter",
            "synergy",
            "equipped",
            "weapon",
            "mobile",
            "roblox-studio"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-18",
          "authors": [
            "Codex"
          ],
          "version": 15,
          "change_type": "updated",
          "change_summary": "90개 기획 항목과 32개 게임 ON 집합을 웹에서 분리해 탐색하고, 배치된 무기 최대 6개를 장착 탭·상세 모달·캐릭터 위 이미지로 일관되게 관리하도록 확장했습니다.",
          "supersedes": "inventory-item-concept@v014",
          "sources": [
            "wiki/content/pages/inventory-item-concept/v014.md",
            "wiki/content/media/inventory-item-concept/v015/itemdb-filters-pc.jpg",
            "wiki/content/media/inventory-item-concept/v015/studio-equipped-items-iphone17pro.jpg",
            "wiki/content/media/inventory-item-concept/v015/studio-equipped-items-galaxy-a06.jpg",
            "wiki/content/media/inventory-item-concept/v015/studio-equipped-details-galaxy-a06.jpg",
            "docs/gameplay/inventory-item-layouts.json",
            "src/ReplicatedStorage/BackpackUI/GeneratedItemLayouts.luau",
            "src/ReplicatedStorage/BackpackUI/DeveloperTestControls.luau",
            "src/ReplicatedStorage/BackpackUI/DeveloperTestWindow.luau",
            "src/ReplicatedStorage/BackpackUI/EquippedItemModel.luau",
            "src/ReplicatedStorage/BackpackUI/EquippedWeaponBillboard.luau",
            "src/ReplicatedStorage/BackpackUI/InventoryBoardModel.luau",
            "src/ReplicatedStorage/BackpackUI/InventorySerializer.luau",
            "src/ReplicatedStorage/BackpackUI/Screen.luau",
            "src/ReplicatedStorage/BackpackUI/ScreenRenderer.luau",
            "src/ReplicatedStorage/BackpackUI/ScreenState.luau",
            "src/ServerScriptService/InventoryService.luau",
            "tools/item_db.py",
            "wiki/site/app.js",
            "wiki/site/app.css",
            "tests/BackpackUI.spec.luau",
            "tests/item-db.spec.js",
            "tests/test_item_db.py",
            "tests/test_native_backpack_ui.py"
          ],
          "related": [
            "product-planning-change-log",
            "character-2d-rendering",
            "backpack-combat-stat-database",
            "development-wiki"
          ],
          "validation": [
            "bash tools/test_backpack_ui.sh: Backpack hex inventory tests passed",
            "node --test tests/item-db.spec.js: passed",
            "python3 -m unittest discover -s tests -p 'test_*.py': 68 tests passed",
            "python3 tools/item_db.py check: ItemDB check passed 90 items",
            "브라우저 1440×900: 게임 ON·2~4칸·MACHINE/RANGED OR 조합에서 8개 표시, ON 항목만 노출, 효과 카탈로그 접힘과 scrollY 188 유지",
            "브라우저: 시너지 이미지 26/26 로드, 콘솔 오류·경고 0건, 가로 문서 오버플로 없음",
            "Roblox Studio MCP Play, iPhone 17 Pro 세로 401×776: 장착 탭 2×3 슬롯과 1개 장착 무기 확인",
            "Roblox Studio MCP Play, Galaxy A06 세로 359×718: 6개 슬롯, 포켓 네일건 상세 모달 316×475, 잘림·겹침 없음",
            "Roblox Studio MCP runtime console: 최종 Galaxy A06 플레이 오류·경고 없음",
            "Roblox Studio Edit: ItemDB revision a35b00cf76ec6c75, 32개 게임 ON 소스 베이크 후 플레이스 저장",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "python3 -m unittest tests/test_wiki.py",
            "python3 -m unittest tests.test_repository_policy",
            "git diff --check"
          ],
          "body": "# 인벤토리와 아이템 개념\n\n## 기획 배경과 목표\n\nItemDB는 전체 기획 목록과 실제 게임에 들어가는 승인 목록을 동시에 다룹니다. 아이템이\n90개로 늘고 일부만 게임에 투입되는 단계에서는 이름 검색만으로 현재 제품 집합을 판단하기\n어렵습니다. 운영자는 점유 칸 수, 여러 시너지 중 하나 이상 일치, 게임 ON 여부를 조합해\n필요한 항목만 즉시 볼 수 있어야 합니다.\n\n플레이어 쪽에서는 보드에 유효하게 놓인 무기가 단순한 배치 데이터에 머물지 않고 장착 상태로\n읽혀야 합니다. 장착 순서와 한도, 빼기, 상세 정보, 필드에서의 시각 표시가 같은 규칙을\n사용해야 보드 편집과 실제 플레이가 하나의 경험이 됩니다.\n\n이번 버전은 이 두 흐름을 연결합니다. 웹 ItemDB는 전체 90개와 게임 ON 32개를 분리해서\n필터링하고, 모바일 인벤토리는 유효한 무기 최대 6개를 장착 탭의 2×3 슬롯과 캐릭터 위\n이미지로 보여 줍니다. 효과 A·B·C의 실제 능력 실행은 아직 후속 범위지만 상세 화면에는\n해당 정보를 넣을 자리를 미리 고정했습니다.\n\n## 의도한 운영자와 플레이어 경험\n\n- 운영자는 1~8칸 최소·최대 범위, 26종 시너지 아이콘, 전체/게임 ON 상태를 함께 적용합니다.\n- 여러 시너지를 켜면 아이템이 그중 하나만 가져도 표시되는 OR 규칙을 사용합니다.\n- 필터나 저장으로 목록이 다시 그려져도 현재 스크롤과 효과 카탈로그의 접힘 상태가 유지됩니다.\n- 실제 시너지 PNG를 필터 버튼에 사용해 텍스트 ID보다 빠르게 조합을 찾습니다.\n- 플레이어가 보드에 유효하게 놓은 무기는 처음 배치된 순서대로 장착 슬롯을 차지합니다.\n- 일곱 번째 무기는 배치를 거부하고 보관함으로 돌아가며 3초 안내로 정확한 이유를 보여 줍니다.\n- 장착 카드를 누르면 상세 정보 또는 빼기를 선택하고, 상세 화면에서 기본 능력치·기본 효과·\n  효과칸 A/B/C를 확인합니다.\n- 장착 무기 이미지는 캐릭터 위에 떠서 각자 천천히 흔들리고 캐릭터의 8방향을 따라 회전합니다.\n\n## 최종 결과\n\n![PC ItemDB 복합 필터](./media/inventory-item-concept/v015/itemdb-filters-pc.jpg \"1440×900 ItemDB에서 게임 ON, 2~4칸, 기계 또는 원거리 시너지를 함께 적용해 8개 결과만 표시합니다. 효과 카탈로그는 접힌 상태를 유지합니다\")\n\n![iPhone 장착 무기 슬롯](./media/inventory-item-concept/v015/studio-equipped-items-iphone17pro.jpg \"iPhone 17 Pro 세로 Play에서 장착 아이템 탭의 2열 3행 슬롯과 첫 번째 장착 무기를 확인합니다\")\n\n![소형 Galaxy 장착 무기 슬롯](./media/inventory-item-concept/v015/studio-equipped-items-galaxy-a06.jpg \"Galaxy A06 세로 Play에서도 여섯 슬롯과 장착 탭이 잘림 없이 유지됩니다\")\n\n![소형 Galaxy 장착 무기 상세](./media/inventory-item-concept/v015/studio-equipped-details-galaxy-a06.jpg \"Galaxy A06에서 포켓 네일건의 기본 능력치·기본 효과·효과칸 A 상세 영역을 스크롤 가능한 모달로 확인합니다\")\n\n## 핵심 원칙과 설계 철학\n\n### 전체 기획 목록과 게임 승인 집합은 같은 화면에서 구분한다\n\nOFF 아이템은 삭제하지 않고 ItemDB에 남깁니다. 전체 목록은 기획과 비교를 위한 90개를,\n게임 ON만은 다음 베이크와 런타임에 들어가는 32개를 보여 줍니다. 두 상태를 별도 페이지로\n나누지 않아 운영자가 필터를 바꾸며 차이를 바로 확인할 수 있습니다.\n\n### 교차 필터는 독립적이고 결과에서는 함께 AND로 결합한다\n\n칸 수 범위, 게임 ON 여부와 시너지 그룹은 서로 다른 판단 축입니다. 시너지 그룹 내부는\n하나 이상 일치하는 OR이고, 칸 수·게임 상태·검색·대분류와는 AND로 결합합니다. 따라서\n“게임에 들어가는 2~4칸짜리 기계 또는 원거리 아이템” 같은 운영 질문을 그대로 표현합니다.\n\n### 재렌더링은 사용자의 탐색 문맥을 지우지 않는다\n\nItemDB 목록이 다시 그려져도 페이지의 현재 스크롤 위치, 효과 카탈로그 열림 여부와 모든\n필터 상태를 보존합니다. 저장이나 필터 한 번 때문에 페이지 최상단으로 돌아가거나 이미\n접은 대형 카탈로그가 다시 열리지 않습니다.\n\n### 장착 상태는 유효한 배치의 파생 결과다\n\n별도의 수동 장착 플래그를 만들지 않습니다. 보드에 유효하게 배치된 Weapon만 장착이며,\n보관함으로 빼거나 배치가 무효가 되면 장착에서도 빠집니다. 첫 배치 순서를 직렬화해 저장\n복원 뒤에도 슬롯 순서를 안정적으로 유지합니다.\n\n### 6개 제한은 서버 권위와 명확한 복귀 동작을 가진다\n\n장착 무기 최대치는 6개입니다. 일곱 번째 시도는 서버 보드가 거부하며 초과 카드를 무효\n드래프트로 남기지 않고 보관함으로 돌려보냅니다. 일반적인 겹침·형태 오류는 보드 외곽선으로\n설명하고, 무기 한도만 화면 하단의 3초 오류 안내를 사용합니다.\n\n### 상세 정보는 현재 데이터와 후속 효과 시스템 사이의 계약이다\n\n현재 등록된 공격력 또는 방어력을 기본 능력치로 보여 주고, 기본 효과가 없으면 준비 중\n문구를 표시합니다. 효과칸 A/B/C는 ItemDB의 종류·조건·능력 ID를 읽어 표시하며 비어 있어도\n섹션 자체는 유지합니다. 후속 전투 실행이 들어와도 정보 구조를 다시 바꾸지 않습니다.\n\n## 최종 결정 사항과 범위\n\n- ItemDB 칸 수 필터는 현재 전체 항목의 최소·최대 점유 칸을 경계로 사용합니다.\n- 시너지 필터는 26종 실제 아이콘을 표시하고 선택된 시너지 중 하나 이상 일치하면 통과합니다.\n- 게임 사용 필터는 전체 목록과 게임 ON만 두 상태이며 다른 모든 필터와 동시에 적용됩니다.\n- 웹 시너지 미디어는 런타임 시너지 카탈로그의 최종 PNG를 해시 URL로 복사·검증합니다.\n- 효과 카탈로그의 접힘 상태와 페이지 스크롤은 목록 재렌더링 전후에 보존합니다.\n- 현재 ItemDB는 총 90개, 게임 ON 32개이며 생성 런타임과 Studio 베이크는 ON 항목만 포함합니다.\n- 유효한 Weapon 배치는 최대 6개이고 최초 배치 순서가 장착 슬롯 순서입니다.\n- 장착 탭은 모바일에서 2열 3행을 사용하며 카드 메뉴는 상세 정보와 빼기를 제공합니다.\n- 상세 모달은 기본 능력치, 기본 효과와 A/B/C 효과칸을 스크롤 영역에 표시합니다.\n- Studio의 F2 테스트 창은 허용 무게를 1Kg씩 조정하지만 플레이 세션에만 적용되고 저장에는\n  원래 제한값을 사용합니다. 실제 플레이어 빌드에는 생성하지 않습니다.\n- 효과 조건 해석과 능력 발현, 장착 무기의 실제 공격 동작은 이번 범위에 포함하지 않습니다.\n\n## 구현 구조\n\n`tools/item_db.py`는 런타임 `SynergyCatalog`에서 아이콘 원본을 읽고 공개\n`synergy-media`에 원자적으로 복사합니다. 웹 필터 상태는 `app.js`가 보유하며 결과 표만\n다시 그립니다. 전체 화면 렌더가 필요한 경우에도 스크롤과 `details.open`을 저장해 복원합니다.\n\n`EquippedItemModel`은 유효한 무기 수, 최초 배치 순서와 최대 6개 표시 슬롯을 한곳에서\n정의합니다. `InventoryBoardModel`과 직렬화 계층이 이 순서를 보존하고,\n`InventoryService`는 각 플레이어 아래의 안정적인 `EquippedWeapons/Slot01..06` 값으로\n아이콘과 메타데이터를 복제합니다.\n\n`ScreenRenderer`는 세 번째 장착 탭, 2×3 슬롯, 카드 메뉴와 상세 모달을 그립니다.\n`EquippedWeaponBillboard`는 복제된 여섯 슬롯을 모든 캐릭터 위에 표시하고 각 슬롯의\n위치·기울기를 독립적으로 흔듭니다. 캐릭터 방향 속성과 화면 회전 변환은\n`character-2d-rendering@v009`에 기록합니다.\n\n`DeveloperTestWindow`는 Studio에서만 F2로 열립니다. 서버는 테스트 무게 변경을 현재\n세션의 권위 보드에 적용하되, 저장할 때 원래 무게 제한으로 직렬화를 다시 수행해 진단 값이\n플레이어 데이터에 남지 않게 합니다.\n\n## 검증\n\n브라우저 1440×900에서 게임 ON, 2~4칸, MACHINE/RANGED를 함께 선택했을 때 8개 결과가\n표시됐고 모든 결과가 ON이었습니다. 필터 변경으로 여러 번 재렌더링된 뒤에도 효과 카탈로그는\n접힌 상태, 페이지는 `scrollY=188`을 유지했습니다. 시너지 이미지 26개가 모두 로드됐고\n콘솔 오류·경고와 문서 가로 오버플로는 없었습니다.\n\nStudio MCP Play에서는 iPhone 17 Pro 세로 401×776과 Galaxy A06 세로 359×718을\n검사했습니다. 두 화면에서 세 탭과 2×3 장착 슬롯이 잘리지 않았고 Galaxy 상세 모달은\n316×475로 안전 영역 안에 들어왔습니다. 장착 슬롯 속성은 6개, 보드 격자는 장착 모드에서\n0개로 확인됐으며 최종 런타임 콘솔은 비어 있었습니다.\n\nItemDB 원본·웹·생성 모듈은 리비전 `a35b00cf76ec6c75`, 전체 90개, 게임 ON 32개로\n일치했습니다. 같은 소스를 Studio Edit에 베이크하고 플레이스를 저장했습니다. Python\n전체 테스트 68개, JavaScript ItemDB 테스트, Luau 인벤토리 테스트와 Git 공백 검사가\n통과했습니다.\n\n## 후속 기획\n\n- 장착 무기가 실제 공격 순서·쿨다운·타깃 선택에 참여하는 전투 계약을 정의합니다.\n- A/B/C 효과 능력이 상세 모달의 현재 자리에서 실시간 계산 결과와 연결되도록 확장합니다.\n- 장착 슬롯 재정렬이 필요해지면 최초 배치 순서를 암묵적으로 바꾸지 말고 별도 터치 UX를\n  승인한 뒤 도입합니다.\n",
          "source_path": "wiki/content/pages/inventory-item-concept/v015.md",
          "timeline_order": 36
        },
        {
          "id": "inventory-item-concept",
          "title": "인벤토리와 아이템 개념",
          "summary": "ItemDB에서 아이템별 게임 포함 여부와 최대 세 개의 접촉 효과 영역을 직접 편집하고, 같은 리비전의 웹·생성 데이터·Studio 런타임이 끊김 없이 이어지도록 확장했습니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "inventory",
            "item",
            "backpack",
            "hex-grid",
            "itemdb",
            "effect-zone",
            "mobile",
            "web-editor",
            "roblox-studio"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-16",
          "authors": [
            "Codex"
          ],
          "version": 14,
          "change_type": "updated",
          "change_summary": "운영자가 아이템을 삭제하지 않고 다음 베이크에서 제외할 수 있게 하고, 아이템 주변 접촉 칸 A·B·C와 향후 종류·조건·능력 규칙을 함께 저장하며, 웹 이미지 동기화와 캐시를 재발 방지 구조로 바꿨습니다.",
          "supersedes": "inventory-item-concept@v013",
          "sources": [
            "wiki/content/pages/inventory-item-concept/v013.md",
            "wiki/content/media/inventory-item-concept/v014/itemdb-mobile-onoff.jpg",
            "wiki/content/media/inventory-item-concept/v014/itemdb-mobile-effect-zones.jpg",
            "docs/gameplay/inventory-item-art-catalog.md",
            "docs/gameplay/inventory-item-concept.md",
            "docs/gameplay/inventory-item-layouts.json",
            "docs/gameplay/item-effect-catalog.json",
            "docs/gameplay/item-effect-slots.md",
            "src/ReplicatedStorage/BackpackUI/GeneratedItemLayouts.luau",
            "src/ReplicatedStorage/BackpackUI/ItemCatalog.luau",
            "src/ReplicatedStorage/BackpackUI/ItemEffectContactEvaluator.luau",
            "src/ReplicatedStorage/BackpackUI/ItemInstanceHydrator.luau",
            "tools/item_db.py",
            "tools/wiki.py",
            "wiki/site/app.js",
            "wiki/site/app.css",
            "wiki/site/item-db.js",
            "tests/BackpackUI.spec.luau",
            "tests/item-db.spec.js",
            "tests/test_item_db.py"
          ],
          "related": [
            "product-planning-change-log",
            "development-wiki",
            "backpack-combat-stat-database"
          ],
          "validation": [
            "python3 tools/item_db.py build: Built ItemDB 90 items",
            "python3 tools/item_db.py check: ItemDB check passed 90 items",
            "python3 -m unittest discover -s tests -p 'test_*.py': 62 tests passed",
            "node --test tests/item-db.spec.js: passed",
            "git diff --check",
            "브라우저 390×844: 아이템 행 이미지·ON 베이크 포함 상태와 A/B/C 효과 칸 편집 화면 확인, 콘솔 오류·경고 없음",
            "브라우저 360×640: ItemDB 이미지 확대 768×1024 정상 로드, 콘솔 오류·경고 없음",
            "Roblox Studio MCP Edit: GeneratedItemLayouts revision 0690a8caa23e928d, 90 layouts, EffectCatalog 확인",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "python3 -m unittest tests/test_wiki.py",
            "python3 -m unittest tests.test_repository_policy"
          ],
          "body": "# 인벤토리와 아이템 개념\n\n## 기획 배경과 목표\n\nItemDB는 아이템을 나열하는 문서가 아니라 게임에 들어갈 콘텐츠를 결정하고 공간 규칙을\n저작하는 운영 도구입니다. 운영자는 실험 중이거나 잠시 제외할 아이템을 데이터에서 지우지\n않고 게임 배포만 멈출 수 있어야 합니다. 또한 아이템의 효과는 자기 점유 칸 안의 고정 수치에\n한정되지 않고, 가방에 배치된 뒤 주변의 다른 아이템과 맞닿는 공간 관계를 사용할 수 있어야\n합니다.\n\n이번 버전의 목표는 이 두 판단을 ItemDB 안에서 직접 보이게 하는 것입니다. 각 아이템은\nON/OFF 상태를 가지며 OFF는 웹 기록에는 남지만 다음 게임 베이크에서는 제외됩니다. 효과는\n아이템 하나당 A·B·C 세 슬롯으로 나누고, 실제 점유 형태보다 상하좌우 다섯 줄 넓은 육각\n영역에서 접촉 칸을 직접 선택합니다. 종류·조건·발현 능력은 안정적인 카탈로그 ID로 함께\n저장해 후속 전투 시스템이 공간 판정과 능력 실행을 분리해서 확장할 수 있게 했습니다.\n\n## 의도한 사용자와 플레이어 경험\n\n- 운영자는 ItemDB의 ON/OFF 버튼만 눌러 아이템을 다음 베이크에 포함하거나 제외합니다.\n- OFF 아이템은 기획 이력과 웹 검색에서는 사라지지 않지만 게임 런타임 목록에는 들어가지\n  않습니다.\n- 효과 영역은 아이템 칸 편집과 같은 직접 선택 방식이며 A·B·C를 바꾸어 최대 세 규칙을\n  서로 독립적으로 저작합니다.\n- 아이템 점유 칸은 효과 칸으로 고를 수 없고, 편집 화면은 점유 범위 바깥 다섯 줄까지\n  스크롤 가능한 공간을 제공합니다.\n- 게임에서는 배치가 유효하고 드래그 중이 아닌 두 아이템의 실제 회전·위치가 겹칠 때만\n  접촉 후보를 만듭니다. 조건과 능력 실행은 후속 시스템이 담당합니다.\n\n## 최종 모바일 결과\n\n![ItemDB 아이템별 ON 상태](./media/inventory-item-concept/v014/itemdb-mobile-onoff.jpg \"390×844 모바일 ItemDB에서 아이템 이미지와 ON·베이크 포함 상태를 같은 행에서 확인합니다\")\n\n![ItemDB A·B·C 효과 칸 편집](./media/inventory-item-concept/v014/itemdb-mobile-effect-zones.jpg \"390×844 모바일 편집기에서 ON 상태, A·B·C 슬롯과 아이템 주변의 넓은 육각 효과 칸을 직접 확인합니다\")\n\n## 핵심 원칙과 설계 철학\n\n### 비활성화는 삭제가 아니라 배포 결정이다\n\n아이템의 기획 데이터와 이미지는 보존하면서 `enabled`만 런타임 생성의 경계로 사용합니다.\n따라서 운영 중 제외와 콘텐츠 폐기를 구분할 수 있고, 다시 ON으로 돌릴 때 과거 설정을\n복원할 필요가 없습니다. 베이크 개수와 리비전은 활성 상태를 포함하므로 Studio가 어떤\n제품 집합을 보유했는지 명확하게 판별합니다.\n\n### 공간 판정과 효과 실행은 분리한다\n\nItemDB는 효과 칸, 종류 ID, 조건 ID, 능력 ID를 저장하고 접촉 평가기는 어느 아이템이 어느\n슬롯에 닿았는지만 반환합니다. 실제 능력치 적용과 전투 실행은 이 계층에 넣지 않습니다.\n이 경계는 향후 조건 조합과 능력이 늘어나도 배치 기하를 다시 작성하지 않게 합니다.\n\n### 편집 범위는 넓되 유효 계약은 엄격하다\n\n효과 칸 편집기는 아이템 최소·최대 Q/R 범위에서 각각 다섯 칸을 확장합니다. 같은 효과\n슬롯의 중복 좌표와 점유 칸 겹침은 거부합니다. 효과 칸이 있으면 종류와 한 개 이상의 능력이\n필수이고, 칸이 비면 종류·조건·능력도 함께 비워 데이터가 반쪽 상태로 남지 않습니다.\n\n### 공개 웹과 게임 데이터는 같은 리비전에서 끊기지 않는다\n\n아이템 이미지에는 콘텐츠 해시를 사용하고 ItemDB 데이터 스크립트에는 카탈로그 리비전을\n사용합니다. 빌드 중에는 미디어 폴더 전체를 삭제하지 않고 변경 파일만 임시 파일에서\n원자적으로 교체합니다. 새 미디어를 먼저 준비한 뒤 데이터 파일을 공개하므로 열린 브라우저가\n빌드 순간의 404나 오래된 데이터·새 미디어 조합을 보지 않습니다.\n\n## 최종 결정 사항과 범위\n\n- 모든 활성·비활성 ItemDB 항목은 `enabled`와 A·B·C 효과 슬롯을 명시합니다.\n- 웹 DB는 전체 개수와 ON 개수를 함께 표시하고, 로컬 호스트에서만 토글과 편집을 허용합니다.\n- OFF 항목은 공개 DB에 남으며 생성 `GeneratedItemLayouts`와 게임 카탈로그에서는 제외됩니다.\n- 효과 편집 범위는 아이템 점유 경계보다 Q/R 양방향 다섯 칸 넓습니다.\n- 하나의 효과 슬롯은 칸·종류·조건 목록·능력 목록을 가지며 슬롯 간 같은 칸 중첩은 허용합니다.\n- 런타임 접촉 평가는 회전된 점유 칸과 효과 칸을 같은 육각 변환으로 비교합니다.\n- 이번 범위는 접촉 후보와 규칙 데이터까지입니다. 실제 조건 해석, 능력치 합산, 전투 발현과\n  시각 효과는 후속 전투 계층에서 구현합니다.\n\n## 구현 참고\n\n`inventory-item-layouts.json` 스키마 4가 활성 상태와 세 효과 슬롯의 원본입니다.\n`item-effect-catalog.json`은 종류·조건·발현 능력 ID와 기존 능력치 정의의 연결을 보유합니다.\nItemDB 빌드는 웹 데이터와 활성 런타임 레이아웃, 효과 카탈로그를 같은 리비전으로 생성합니다.\n\n`ItemEffectContactEvaluator`는 배치된 아이템 점유 칸의 소유자를 만든 뒤 각 효과 슬롯의\n회전된 월드 칸과 비교해 정렬된 접촉 목록을 반환합니다. `ItemInstanceHydrator`는 생성\n정의에서 효과 영역을 복제해 런타임 인스턴스가 원본을 변경하지 못하게 합니다.\n\n웹에서는 토글 저장과 레이아웃·시너지·효과 저장이 같은 검증·재생성 경로를 사용합니다.\n미디어 복사는 내용이 같은 파일을 건너뛰고 변경 파일만 원자 교체하며, 퇴역 미디어 정리는\n새 데이터가 준비된 뒤 수행합니다.\n\n## 검증\n\nItemDB 빌드와 체크는 90개 항목, 리비전 `0690a8caa23e928d`로 일치했습니다. Python 전체\n테스트 62개와 JavaScript ItemDB 테스트, Git 공백 검사가 통과했습니다. 브라우저에서는\n390×844에서 ON 상태와 A/B/C 효과 편집기를, 360×640에서 다른 아이템 이미지 로딩과 확대를\n확인했고 두 구성 모두 콘솔 오류와 경고가 없었습니다.\n\nRoblox Studio Edit의 `GeneratedItemLayouts`도 같은 리비전, 90개 레이아웃과 효과 카탈로그를\n반환했습니다. 런타임 테스트는 효과 영역 복제, 회전 접촉, 드래그 중 비활성, OFF 항목 제외를\n검사합니다.\n\n## 후속 기획\n\n- 조건 카탈로그의 AND/OR 조합 규칙과 여러 접촉 대상의 중첩 처리 우선순위를 확정합니다.\n- 발현 능력이 자기 아이템, 접촉 아이템, 플레이어 중 어디에 적용되는지 전투 계산 계층에서\n  통합합니다.\n- 효과가 실제로 발현될 때 모바일 인벤토리에서 읽을 수 있는 연결선·빛·아이콘 피드백을\n  별도 시각 설계와 Studio 검증으로 진행합니다.\n",
          "source_path": "wiki/content/pages/inventory-item-concept/v014.md",
          "timeline_order": 35
        },
        {
          "id": "inventory-item-concept",
          "title": "인벤토리와 아이템 개념",
          "summary": "모바일 인벤토리를 닫을 수 있는 전체 작업 화면으로 정리하고, 배치 보드·드래그·카드·선택 정보·보관함 탐색·고급 필터를 한 흐름으로 재설계했으며 시너지 자산과 ItemDB를 같은 최종 규칙에 맞췄습니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "inventory",
            "item",
            "backpack",
            "hex-grid",
            "ui",
            "ux",
            "mobile",
            "drag",
            "filter",
            "synergy",
            "itemdb",
            "roblox-studio"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-15",
          "authors": [
            "Codex"
          ],
          "version": 13,
          "change_type": "updated",
          "change_summary": "닫기와 전환 경로, 보드의 배치 가능 범위, 손가락 위 드래그, 간결한 카드 정보, 모드 연동 필터, 시너지·칸 수 고급 필터를 모바일 우선 규칙으로 확정하고 26종 시너지 아이콘 V2와 90개 활성 ItemDB를 동기화했습니다.",
          "supersedes": "inventory-item-concept@v012",
          "sources": [
            "wiki/content/pages/inventory-item-concept/v012.md",
            "wiki/content/media/inventory-item-concept/v013/filter-concept-request.png",
            "wiki/content/media/inventory-item-concept/v013/studio-synergy-filter.jpg",
            "wiki/content/media/inventory-item-concept/v013/studio-cell-filter.jpg",
            "src/ReplicatedStorage/BackpackUI/Screen.luau",
            "src/ReplicatedStorage/BackpackUI/ScreenRenderer.luau",
            "src/ReplicatedStorage/BackpackUI/ScreenState.luau",
            "src/ReplicatedStorage/BackpackUI/VisualTokens.luau",
            "src/ReplicatedStorage/BackpackUI/DragPlacementState.luau",
            "src/ReplicatedStorage/BackpackUI/WeightEvaluator.luau",
            "src/ReplicatedStorage/BackpackUI/SynergyCatalog.luau",
            "docs/gameplay/inventory-item-art-catalog.md",
            "docs/gameplay/inventory-item-layouts.json",
            "Assets/UI/Backpack/SynergyIcons/manifest.json",
            "Assets/Items/Concepts/FootprintExpansion21/manifest.json",
            "tests/BackpackUI.spec.luau",
            "tests/test_native_backpack_ui.py",
            "tests/test_item_db.py",
            "tests/test_synergy_icons.py"
          ],
          "related": [
            "synergy-icon-system",
            "product-planning-change-log",
            "development-wiki",
            "backpack-combat-stat-database",
            "project-overview"
          ],
          "validation": [
            "python3 tools/item_db.py build: Built ItemDB 90 items",
            "python3 tools/item_db.py check: ItemDB check passed 90 items",
            "python3 -m unittest tests.test_item_db tests.test_synergy_icons: 19 tests passed",
            "LUAU_BIN=\"$(command -v luau)\" PATH=\"/usr/bin:/bin\" ./tools/test_backpack_ui.sh: Backpack hex inventory tests passed",
            "native backpack UI source checks: 6 tests passed",
            "Roblox Studio MCP Play, iPhone 17 Pro 세로 400×776: 시너지 팝업 열림, 26종 옵션 표시, 고급 필터 48px 터치 영역·30px 시각판·2px 구분선·10px 섹션 간격 확인",
            "Roblox Studio MCP Play, iPhone 17 Pro 세로 400×776: 칸 수 팝업 기본 범위 1~9 및 비활성 ALL 상태 확인",
            "Roblox Studio MCP Play, Galaxy A06 세로 359×718: 고급 필터 48px 터치 영역·42×30px 시각판, 보관함과 팝업의 잘림·겹침 없음",
            "Roblox Studio MCP runtime console: 두 모바일 구성에서 오류·경고 없음",
            "Roblox Studio MCP Edit: GeneratedItemLayouts revision caa2aec7012671fa, 90 layout entries",
            "git diff --check",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "python3 -m unittest tests/test_wiki.py",
            "python3 -m unittest tests.test_repository_policy"
          ],
          "body": "# 인벤토리와 아이템 개념\n\n## 기획 배경과 목표\n\n인벤토리는 단순 목록이 아니라 가방과 아이템의 공간 관계를 편집하는 모바일 작업 화면입니다.\n플레이어는 이 화면에 들어온 뒤 언제든 메인 화면으로 돌아갈 수 있어야 하고, 손가락에 가리지\n않은 아이템을 움직이면서 배치 가능 범위와 결과를 즉시 판단해야 합니다. 보관함에서는 많은\n카드를 훑되 이름, 종류, 점유 형태, 시너지와 무게의 우선순위가 흔들리지 않아야 합니다.\n\n이 버전은 여러 번의 사용성 피드백을 하나의 최종 흐름으로 통합합니다. 화면을 닫는 경로,\n배치 보드의 범위와 도구 위치, 드래그 피드백, 카드와 선택 정보, 모드 전환, 일반 필터와 고급\n필터를 서로 독립된 장식이 아니라 **배치 준비라는 한 작업의 단계**로 정리했습니다. 동시에\n작은 크기에서 읽히는 시너지 아이콘과 실제 활성 ItemDB를 런타임·공개 위키에 함께 맞췄습니다.\n\n## 의도한 플레이어 경험\n\n- 우측 최상단 닫기 버튼으로 즉시 메인 화면에 돌아갑니다. PC 호환 경로에서는 Roblox 기본\n  플레이어 목록 대신 Tab이 인벤토리 열기·닫기를 전담합니다.\n- 옅은 회색 육각 격자가 배치 가능한 보드 전체를 알려 주고, 강한 색은 실제 가방·아이템과\n  유효·무효 배치 상태에만 사용합니다.\n- 아이템을 보관함에서 꺼내거나 보드에서 다시 잡아도 그림 전체가 손가락 또는 포인터 위에\n  떠서 목표 칸을 가리지 않습니다.\n- 보관함 카드는 종류, 소수점 한 자리 무게, 아이템 그림과 점유 형태, 가운데 정렬된 시너지,\n  이름을 같은 순서로 읽게 합니다.\n- 가방 필터와 일반 아이템 필터가 배치 모드까지 함께 전환하므로 같은 목적을 위해 탭과 필터를\n  두 번 누르지 않습니다.\n- 시너지 또는 칸 수처럼 여러 범주를 가로지르는 조건은 일반 종류 필터 위의 별도 그룹에서\n  설정하고, 큰 팝업 안에서 현재 상태를 확인합니다.\n\n## 기획안과 최종 결과\n\n![고급 필터 배치 기획안](./media/inventory-item-concept/v013/filter-concept-request.png \"기존 종류 필터 위에 시너지와 칸 수 필터를 나란히 추가해 기능 계층을 분리하자는 사용자 기획안입니다\")\n\n![시너지 필터 최종 모바일 결과](./media/inventory-item-concept/v013/studio-synergy-filter.jpg \"Studio Play의 모바일 인벤토리. 납작한 고급 필터 두 개와 가로 구분선 아래에 일반 필터가 놓이고, 시너지 팝업에서 ALL과 26종 심볼을 직접 토글할 수 있습니다\")\n\n![칸 수 필터 최종 모바일 결과](./media/inventory-item-concept/v013/studio-cell-filter.jpg \"Studio Play의 칸 수 팝업. 최소 1·최대 9가 기본 범위이며 전체 범위가 이미 선택된 상태에서는 ALL이 비활성화됩니다\")\n\n## 핵심 원칙과 설계 철학\n\n### 작업 화면에는 진입과 이탈 경로가 모두 있어야 한다\n\n닫기 버튼은 다른 조작보다 높은 우측 상단에 고정합니다. 모바일의 필수 완료 기준은 터치이며,\n키보드 Tab은 PC 진단·호환 경로에만 추가합니다. Tab을 사용할 때는 Roblox 기본 플레이어\n목록 동작을 함께 남기지 않아 한 입력이 두 화면을 열지 않게 합니다.\n\n### 보조선은 공간을 설명하고 콘텐츠와 경쟁하지 않는다\n\n빈 보드는 모든 보이는 배치 가능 칸을 밝은 회색 1px 육각선으로 보여 줍니다. 배치된 물체의\n기본 외곽선은 선택이나 호버 때문에 두꺼워지지 않습니다. 드래그 중에는 어두운 육각형 바닥을\n아이템 그림 아래에 다시 그리지 않고, 스냅된 점유 칸의 단일 외곽선만 목적지 안내로 씁니다.\n\n### 손가락보다 위에 보이는 대상이 실제 조준점이다\n\n보관함 카드와 배치된 아이템은 같은 포인터 여유 계산을 사용합니다. 단순히 앵커 한 칸만\n올리는 것이 아니라 회전된 그림의 전체 알파 경계와 플레이어가 잡은 칸을 반영해 완전한\n일러스트가 손가락 위로 올라오게 합니다. 스냅 계산도 그 시각 위치를 따라가므로 보이는 곳과\n놓이는 곳이 어긋나지 않습니다.\n\n### 카드의 정보 밀도는 판단 순서를 따른다\n\n종류는 좌상단, 무게는 우상단, 아이템 그림과 점유 형태는 중앙, 시너지는 카드 폭의 가운데\n3/5, 이름은 하단에 둡니다. 시너지가 0~3개여도 묶음 전체가 가운데 정렬됩니다. 무게는 아령\n아이콘 없이 2.4Kg처럼 소수점 한 자리 숫자와 단위만 사용하며, 화면 표시와 허용 무게 판정도\n같은 0.1Kg 정밀도를 사용합니다.\n\n### 탐색 조건은 역할에 따라 계층을 나눈다\n\n무기·방어구·특수·전체·가방은 보관함의 직접 탐색과 배치 모드를 담당합니다. 시너지와 칸 수는\n모든 종류에 교차 적용되는 고급 조건이므로 위쪽의 별도 두 버튼과 구분선으로 분리합니다.\n시각판은 납작하게 줄여도 실제 터치 영역은 최소 48px를 유지합니다.\n\n### 공개 데이터와 런타임 데이터는 하나의 제품 상태다\n\n활성 아이템, 점유 형태, 무게, 이미지와 Roblox 자산 참조는 ItemDB 원본에서 생성합니다.\n아이템을 폐기하면 카탈로그 행만 숨기지 않고 로컬 아이콘, 생성 레이아웃, 공개 ItemDB 미디어와\n런타임 참조에서 함께 제거합니다. 시너지 자산도 개별 원본, 최종 PNG, 매니페스트, 업로드 ID,\n런타임 카탈로그를 한 집합으로 유지합니다.\n\n## 최종 결정 사항\n\n### 화면·보드·조작\n\n- 인벤토리 우측 최상단에 닫기 버튼을 두고 전체 화면을 닫습니다.\n- PC 호환 경로의 Tab은 높은 우선순위로 인벤토리를 토글하고 기본 플레이어 목록을 끕니다.\n- 보드 우측 사용 폭을 넓히되 우측 모드 탭과 확대·원점·축소 도구가 겹치지 않도록 전용 인셋을\n  둡니다.\n- 가방 배치와 아이템 배치는 우측 상단의 세로 탭, 축소된 확대·원점·축소 도구는 우측\n  하단에 둡니다.\n- 현재 보이는 배치 가능 영역 전체에 옅은 회색 육각 격자를 그립니다.\n- 배치된 아이템과 가방의 선택·호버 외곽선은 기본 두께를 유지합니다.\n- 선택 정보에는 이름, 종류 아이콘, 부여 시너지 아이콘과 x.xKg 무게를 표시합니다.\n\n### 카드·드래그\n\n- 카드 무게는 아령 아이콘을 제거하고 x.xKg만 표시합니다.\n- 모든 아이템과 가방 무게는 0.1Kg 단위로 양자화하고 표시·합계·제한 판정에 같은 값을 씁니다.\n- 카드 시너지는 아이콘을 축소해 카드 폭의 가운데 3/5 안에서 0~3개를 묶음 가운데 정렬합니다.\n- 보관함과 보드에서 시작한 아이템 드래그 모두 그림 전체가 포인터 위에 오도록 합니다.\n- 아이템 드래그 유령에는 불투명한 어두운 점유 헥스를 그리지 않습니다.\n- 목적지에는 스냅된 점유 칸 외곽선 하나만 표시하고 영향받는 가방 외곽선을 추가로 굵게\n  강조하지 않습니다.\n\n### 보관함 탐색\n\n- 일반 필터 순서는 전체, 무기, 방어구, 특수, 가방이며 가방은 다섯 번째입니다.\n- 보관 중인 가방이 있으면 아이템 배치 상태에서도 가방 필터를 누를 수 있고, 누르면 가방 배치\n  모드로 전환합니다.\n- 가방 배치 상태에서 다른 일반 필터를 누르면 아이템 배치 모드와 해당 필터가 동시에\n  활성화됩니다.\n- 시너지와 칸 수 필터는 일반 필터 위에 좌우로 놓고, 납작한 시각판·세로 간격·가로 구분선으로\n  일반 필터와 구분합니다.\n- 시너지 필터는 처음에 26종 전체가 켜져 있습니다. 개별 심볼은 On/Off 토글이며 아이템의 최대\n  세 시너지 중 하나라도 켜진 조건과 일치하면 표시합니다.\n- 시너지 ALL은 전체가 켜진 상태에서만 전부 끄고, 혼합 또는 전체 꺼짐 상태에서는 전부\n  켭니다.\n- 칸 수 필터는 최소·최대 범위를 1~9 안에서 설정합니다. ALL은 1~9로 복원하며 이미 1~9인\n  기본 상태에서는 비활성화합니다.\n\n### 콘텐츠·아트\n\n- 활성 시너지 26종은 투명 배경, 대표 심볼 하나, 최대 3색, 216px 내용 경계를 가진 V2 개별\n  원본과 256×256 최종 PNG를 사용합니다.\n- FootprintExpansion21의 이력은 매니페스트에 보존하되 승인된 11개만 활성화하고 10개는\n  아이콘·런타임·공개 ItemDB에서 폐기합니다.\n- 최종 활성 ItemDB는 90개이며 생성 레이아웃과 공개 위키 데이터가 같은 개수와 내용을\n  가집니다.\n\n## 구현 구조\n\nScreenState가 배치 모드, 일반 필터, 비활성 시너지 집합, 1~9 칸 범위와 열린 팝업을 단일\n상태로 관리합니다. ScreenRenderer는 모바일 반응형 토큰으로 보드 인셋, 세로 모드 탭,\n확대 도구, 카드, 선택 정보, 두 고급 필터와 팝업을 렌더링합니다. Screen은 터치·드래그·\n버튼 입력과 PC Tab 호환 경로를 연결합니다.\n\nDragPlacementState는 잡은 칸과 회전된 그림 경계를 바탕으로 포인터 리프트를 계산하고,\n아이템 드래그를 그림+목적지 외곽선 구조로 제한합니다. WeightEvaluator는 모든 무게를 정수\n0.1Kg 단위로 비교하고 x.x 또는 x.xKg 문자열을 만듭니다.\n\nItemDB 빌드는 카탈로그와 배치 원본에서 런타임 GeneratedItemLayouts와 공개\nitem-db-data.js·미디어를 함께 생성합니다. 시너지 매니페스트는 26개 개별 원본·최종본과\nRoblox 자산 ID를 묶고 SynergyCatalog가 같은 ID를 사용합니다.\n\n## 검증\n\nLuau 인벤토리 테스트, 네이티브 UI 소스 검사 6개, ItemDB·시너지 자산 Python 테스트 19개를\n통과했습니다. ItemDB는 90개 활성 항목으로 빌드와 체크가 일치했습니다. Studio Edit\nDataModel의 GeneratedItemLayouts도 같은 revision caa2aec7012671fa와 90개 레이아웃을 보고해\n저장된 place가 현재 ItemDB 원본과 일치했습니다.\n\nStudio MCP Play에서는 iPhone 17 Pro 세로 400×776과 Galaxy A06 세로 359×718을 사용했습니다.\n두 장치 모두 고급 필터가 보관함과 겹치거나 화면 밖으로 잘리지 않았고, 48px 터치 영역을\n유지하면서 시각판만 44×30px 또는 42×30px로 줄었습니다. 2px 구분선과 10px 섹션 간격도\n유지됐습니다. iPhone 화면에서 시너지 팝업의 26종 옵션과 칸 수 팝업의 기본 1~9·비활성\nALL을 직접 확인했습니다. 두 런타임 콘솔에는 오류와 경고가 없었습니다.\n\n검증 뒤 Play와 장치 시뮬레이션을 종료해 Studio를 기본 편집 상태로 복원했습니다.\n\n## 범위와 후속 원칙\n\n- 모바일 터치 흐름과 두 모바일 화면 비율이 이번 버전의 UI 완료 기준입니다.\n- PC는 Tab 입력 호환만 포함하며 데스크톱 밀도·레이아웃 품질은 별도 PC 단계에서 검증합니다.\n- 새 필터가 추가되면 일반 종류 필터인지 교차 조건인지 먼저 분류하고 같은 계층 규칙을\n  따릅니다.\n- 새 시너지는 큰 원본보다 실제 25px 전후 표시에서 기존 26종과 먼저 비교합니다.\n- 이후 기획 변경은 제품 기획 변경 원장에 안정적인 ID와 이전·새 규칙을 누적합니다.\n",
          "source_path": "wiki/content/pages/inventory-item-concept/v013.md",
          "timeline_order": 34
        },
        {
          "id": "inventory-item-concept",
          "title": "인벤토리와 아이템 개념",
          "summary": "모바일 보관함의 실제 내부 경계를 카드 표시 경계로 확정하고, 회전 아트의 누출과 가장자리 선택선 잘림을 투명 클리핑 구조로 해결했으며, 카드 점유 헥스를 밝게 낮춰 아이템을 먼저 읽게 했습니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "inventory",
            "item",
            "backpack",
            "hex-grid",
            "ui",
            "ux",
            "mobile",
            "scrolling",
            "readability",
            "roblox-studio"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-14",
          "authors": [
            "Hermes Agent"
          ],
          "version": 12,
          "change_type": "updated",
          "change_summary": "보관함 위에 색 띠를 덧씌우는 대신 반응형 서랍 내부 전체를 투명 CanvasGroup 표시 영역으로 삼아 카드와 회전 아트를 실제 경계에서 자르고, 우측 선택선을 카드 안쪽에 보존했으며, 아이템 카드 전용 연한 헥스 색으로 그림 판독성을 높였습니다.",
          "supersedes": "inventory-item-concept@v011",
          "sources": [
            "wiki/content/pages/inventory-item-concept/v011.md",
            "wiki/content/media/inventory-item-concept/v012/annotated-viewport-target.png",
            "wiki/content/media/inventory-item-concept/v012/studio-itemmode-general-phone.jpg",
            "wiki/content/media/inventory-item-concept/v012/studio-itemmode-small-phone.jpg",
            "src/ReplicatedStorage/BackpackUI/ScreenRenderer.luau",
            "src/ReplicatedStorage/BackpackUI/VisualTokens.luau",
            "tests/BackpackUI.spec.luau",
            "tests/test_native_backpack_ui.py"
          ],
          "related": [
            "development-wiki",
            "backpack-combat-stat-database",
            "project-overview"
          ],
          "validation": [
            "LUAU_BIN=\"$(command -v luau)\" PATH=\"/usr/bin:/bin\" ./tools/test_backpack_ui.sh: Backpack hex inventory tests passed",
            "native backpack UI source checks: 5 tests passed",
            "Roblox Studio MCP Play, ItemMode 89개·400×718: CardViewport y=417~707이 보관함 내부 끝선과 일치, 상·하 스크롤 경계에서 불투명 마스크와 회전 아트 누출 없음",
            "Roblox Studio MCP Play, ItemMode 89개·359×667: 카드 78×124로 반응형 재배치, 아이템 카드 헥스 RGB 184/204/216·투명도 0.32 유지, 겹침·잘림 회귀 없음",
            "Roblox Studio Edit DataModel grep: 임시 ItemMode 검증 훅 없음, ItemCardFootprint 정의와 카드 전용 사용 경로 확인",
            "git diff --check",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "python3 -m unittest tests/test_wiki.py",
            "python3 -m unittest tests.test_repository_policy"
          ],
          "body": "# 인벤토리와 아이템 개념\n\n## 기획 배경과 목표\n\n보관함은 카드가 움직이는 작업 영역입니다. 플레이어는 목록을 넘기면서 카드의 아이템 그림,\n점유 형태, 무게와 선택 상태를 한눈에 판단해야 합니다. 이때 카드 일부가 서랍 밖에 떠 보이거나,\n보관함 위에 덧씌운 색 띠가 실제 카드 영역을 가리면 화면이 어디까지 상호작용 가능한지 알기\n어렵습니다. 반대로 점유 형태의 헥스가 아이템 그림보다 진하면 플레이어가 가장 먼저 알아야 할\n아이템 자체가 배경에 묻힙니다.\n\n이번 버전의 목표는 보관함을 **하나의 명확한 창**으로 만드는 것입니다. 창의 크기는 현재\n모바일 화면에서 계산된 서랍 내부 끝선과 정확히 같고, 카드와 회전된 그림은 그 창 안에서만\n보입니다. 카드 안에서는 아이템이 먼저 읽히고 점유 헥스는 형태를 설명하는 보조 정보로\n물러납니다.\n\n## 플레이어 경험\n\n- 카드 목록은 보관함의 실제 상단과 하단 내부 경계까지 넓게 보입니다.\n- 목록을 맨 위나 맨 아래로 넘겨도 카드 이미지와 회전 아트가 배치 보드 쪽이나 화면 밖으로\n  새지 않습니다.\n- 별도의 불투명 띠가 카드를 덮지 않으므로 보이는 영역과 터치 가능한 영역이 일치합니다.\n- 가장 오른쪽 카드를 선택해도 초록 선택 테두리가 스크롤 경계에 잘리지 않습니다.\n- 아이템 카드의 점유 헥스는 연한 청회색으로 물러나고, 아이템 실루엣과 고유 색이 먼저\n  보입니다. 가방 카드의 시너지 색과 보드의 배치 상태 색은 그대로 유지됩니다.\n\n![사용자가 지정한 보관함 표시 목표](./media/inventory-item-concept/v012/annotated-viewport-target.png \"파란 상자는 과도하게 줄어든 표시 영역, 빨간 상자는 보관함 UI 내부 끝선까지 넓혀야 할 목표 영역을 나타냅니다\")\n\n![일반 모바일 ItemMode 최종 결과](./media/inventory-item-concept/v012/studio-itemmode-general-phone.jpg \"400×718 ItemMode 89개 카드 상태. 카드 표시 영역이 필터 레일과 같은 높이로 서랍 내부 전체를 사용하고, 연한 점유 헥스 위에서 아이템 이미지가 먼저 읽힙니다\")\n\n![소형 모바일 ItemMode 최종 결과](./media/inventory-item-concept/v012/studio-itemmode-small-phone.jpg \"359×667 반응형 상태. 카드가 78×124로 다시 계산되어도 점유 헥스·아이템 이미지·텍스트의 계층과 보관함 클리핑이 유지됩니다\")\n\n## 핵심 원칙과 설계 철학\n\n### 경계는 덮개가 아니라 실제 표시 영역이 소유한다\n\n보관함 밖의 그림을 감추기 위해 색이 있는 프레임, 페이드 또는 마스크를 카드 위에 놓지\n않습니다. 그런 도형은 특정 해상도에서는 맞아 보여도 표시 범위와 입력 범위를 갈라 놓고,\n배경색이나 화면 배율이 달라지면 새로운 띠로 드러납니다. 카드가 보일 수 있는 범위는 오직\n투명한 `CardViewport`의 위치와 크기로 결정합니다.\n\n### 화면 비율보다 현재 레이아웃의 실제 경계를 따른다\n\n표시 영역은 임의의 픽셀 여백이나 카드 높이 비율로 줄이지 않습니다. `StorageTop`,\n`ScrollHeight`, 카드 영역 너비와 스크롤바 레인처럼 현재 뷰포트에서 이미 계산된 값을 그대로\n사용합니다. 따라서 작은 폰과 큰 폰 모두에서 같은 수치가 아니라 같은 의미, 즉 **서랍 내부\n끝선까지 보인다**는 계약을 유지합니다.\n\n### 시각 정보에는 우선순위가 있다\n\n아이템 카드에서 가장 중요한 것은 아이템의 정체이고, 점유 헥스는 그것이 차지할 모양을\n설명하는 두 번째 정보입니다. 카드 전용 헥스는 밝게 낮추되 경계선은 유지해 형태를 셀 수\n있게 합니다. 보드 배치, 드래그, 유효·무효 상태와 가방 시너지는 게임 의미를 전달하는 강한\n색이므로 카드 가독성 조정에 함께 끌려가지 않습니다.\n\n### 클리핑은 바깥과 안쪽에서 함께 완성한다\n\n회전된 Roblox UI 자손은 일반 `Frame`이나 `ScrollingFrame` 경계에서 몇 픽셀 벗어나 그려질\n수 있습니다. 바깥쪽에는 독립 렌더 표면을 가진 투명 `CanvasGroup`을 두고, 카드 안쪽에는\n회전하지 않는 `Footprint`와 `ArtClip` 경계를 둡니다. 카드의 모든 시각 자손은 카드와 같은\nZ 계층에 놓여 조상 클리핑을 우회하지 못합니다.\n\n## 결정 사항과 범위\n\n- `CardViewport`는 배경이 없는 `CanvasGroup`이며 `GroupTransparency=0`,\n  `ClipsDescendants=true`입니다.\n- `Cards` 스크롤 프레임은 `CardViewport`를 `(0, 0)`에서 `(1, 1)`까지 채웁니다.\n- `CardViewport`의 Y와 높이는 각각 `StorageTop`, `ScrollHeight`에서 가져옵니다. 카드 높이에\n  따른 추가 안전 여백은 두지 않습니다.\n- 상·하 마스크와 페이드는 제품 구조에 존재하지 않습니다.\n- 카드 내부 `Footprint`와 `ArtClip`도 자손을 클리핑해 회전 이미지와 미니 헥스를 카드 안에\n  가둡니다.\n- 선택 테두리는 카드 가장자리에서 `선 두께 + 1px` 안쪽의 투명 오버레이에 그려 마지막\n  열에서도 선 전체가 보이게 합니다.\n- 아이템 카드 전용 `ItemCardFootprint`는 `RGB(184, 204, 216)`입니다. 기존\n  `ItemFootprint RGB(94, 126, 150)`는 보드와 드래그 피드백에 남습니다.\n- PC 전용 레이아웃과 ItemDB 데이터·아이콘 변경은 이번 버전의 범위가 아닙니다.\n\n## 현재 결과\n\n400×718 모바일 Play에서 보관함은 `y=403~718`, 카드 표시 영역은 서랍의 기존 반응형\n여백만 남긴 `y=417~707`입니다. 과도한 추가 축소 없이 필터 레일과 같은 세로 띠를 사용합니다.\nItemMode의 실제 카드 89개를 맨 위와 맨 아래까지 이동해도 카드 아트는 이 경계를 넘지\n않았습니다.\n\n359×667 상태에서는 보관함이 `351×291`, 카드 표시 영역이 `257×266`, 카드가 `78×124`로\n다시 계산됐습니다. 여러 아이템 카드의 런타임 `ImageColor3`는 `184/204/216`, 투명도는\n`0.32`였고, 아이템 이미지와 헥스 격자 경계가 모두 읽혔습니다.\n\n## 구현 참고\n\n`ScreenRenderer.Mount`가 `Storage > CardViewport > Cards > CardContent` 계층을 만들고,\n반응형 적용 함수가 `VisualTokens.CalculateResponsiveLayout`의 저장 영역 값을\n`CardViewport`에 연결합니다. `RenderStorage`는 카드 내부 클리핑, 선택 오버레이와 카드 전용\n헥스 색상을 구성합니다.\n\n소스 검사는 투명 `CanvasGroup`, 보관함 실제 경계 사용, 마스크·페이드 부재, 카드 내부\n클리핑, 선택선 인셋과 카드 전용 색상 경로를 계약으로 고정합니다.\n\n## 검증\n\nLuau 백팩 스펙과 네이티브 UI 소스 검사 5개를 통과했고 `git diff --check`로 공백 오류가\n없음을 확인했습니다. Roblox Studio MCP Play에서는 400×718과 359×667 두 모바일 크기의\nItemMode 89개 카드 상태를 사용했습니다. 일반 크기에서는 표시 영역과 상·하 스크롤 경계를,\n작은 크기에서는 카드 재배치와 색상 계층을 확인했습니다.\n\n검증에만 사용한 ItemMode 강제 훅은 Edit DataModel에서 제거했으며, 최종 grep에서 임시\nStudio 코드가 남지 않았음을 확인했습니다.\n\n## 후속 기획\n\n- 실제 손가락 스크롤에서 서랍 끝의 잘린 행이 다음 콘텐츠가 있음을 자연스럽게 알리는지\n  관찰합니다.\n- 새 카드 장식이나 희귀도 색을 추가할 때도 아이템 그림, 점유 형태, 상태 색의 우선순위를\n  뒤집지 않습니다.\n- Roblox의 회전 자손 클리핑 동작이 바뀌면 불투명 덮개를 되살리기보다 투명 렌더 경계가\n  여전히 필요한지 먼저 다시 측정합니다.\n",
          "source_path": "wiki/content/pages/inventory-item-concept/v012.md",
          "timeline_order": 32
        },
        {
          "id": "inventory-item-concept",
          "title": "인벤토리와 아이템 개념",
          "summary": "아이템 칸 형태의 유일한 출처를 ItemDB로 확정하고, 데이터베이스 빌드마다 리비전 지문을 남겨 게임이 옛 데이터를 쓰고 있는지 드러나게 했으며, 저장소의 최신 데이터를 Studio에 옮기는 한 번의 명시적 행위로 「게임에 굽기」를 두었습니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "inventory",
            "item",
            "backpack",
            "item-db",
            "hex-grid",
            "tooling",
            "pipeline",
            "roblox-studio",
            "ui",
            "roblox"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-14",
          "authors": [
            "Codex"
          ],
          "version": 11,
          "change_type": "updated",
          "change_summary": "위키에서 저장한 칸 형태가 게임에 닿지 않던 마지막 구간을 메웠습니다. 데이터베이스 빌드마다 리비전 지문을 남겨 어긋남이 드러나게 하고, ItemDB 페이지의 「게임에 굽기」와 `item_db.py bake`로 최신 데이터를 Studio에 한 번에 적용하며, 데이터베이스에서 사라진 아이템은 저장된 가방에서도 정리되게 했습니다.",
          "supersedes": "inventory-item-concept@v010",
          "sources": [
            "wiki/content/pages/inventory-item-concept/v010.md",
            "wiki/content/media/inventory-item-concept/v011/itemdb-bake-entry.png",
            "wiki/content/media/inventory-item-concept/v011/itemdb-bake-dialog.png",
            "tools/item_db.py",
            "tools/wiki.py",
            "wiki/site/app.js",
            "wiki/site/app.css",
            "src/ReplicatedStorage/BackpackUI/ItemCatalog.luau",
            "src/ReplicatedStorage/BackpackUI/ItemInstanceHydrator.luau",
            "src/ReplicatedStorage/BackpackUI/GeneratedItemLayouts.luau",
            "AGENTS.md",
            "README.md"
          ],
          "related": [
            "development-wiki",
            "studio-automation-routing",
            "project-overview"
          ],
          "validation": [
            "python3 tools/item_db.py build",
            "python3 tools/item_db.py check",
            "python3 -m unittest discover -s tests -p 'test_*.py'",
            "bash tools/test_backpack_ui.sh",
            "node tests/item-db.spec.js (및 wiki/site 스펙 5종)",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "python3 -m unittest tests/test_wiki.py",
            "python3 -m unittest tests.test_repository_policy",
            "ItemDB 페이지 왕복: 테이프 철검을 3칸→4칸으로 저장해 GeneratedItemLayouts.luau와 리비전이 함께 바뀌는 것을 확인한 뒤 되돌려 파일이 원상 복구됨을 확인",
            "Roblox Studio MCP: 실행 중인 place의 GeneratedItemLayouts를 읽어 80개·옛 점유 형태를 확인 (데이터베이스는 100개) — 격차 진단의 근거",
            "브라우저 캡처(Chrome headless, 1440×900): ItemDB 페이지 진입점과 굽기 창"
          ],
          "body": "# 인벤토리와 아이템 개념\n\n## 기획 배경과 목표\n\n아이템의 칸 형태는 ItemDB에서 그립니다. 편집기에서 육각 칸을 찍고 저장하면 그 형태가\n곧 게임에서 가방을 차지하는 모양이 됩니다. 이 약속이 이 프로젝트에서 아이템을 다루는\n방식의 뿌리입니다.\n\n그런데 실제로는 위키에 저장한 형태와 게임 속 아이템의 형태가 달랐습니다. 저장소 안의\n연결은 멀쩡했습니다. 위키에서 저장하면 카탈로그 원본이 갱신되고, 거기서 게임용\n`GeneratedItemLayouts.luau`가 다시 만들어지고, 서버는 저장된 인벤토리를 불러올 때마다\n아이템의 모든 값을 데이터베이스 기준으로 다시 씌웁니다. 끊긴 곳은 **저장소와 Roblox\nStudio 사이**였습니다. Studio는 모든 모듈 스크립트의 사본을 자기 안에 들고 있어서,\n디스크의 파일을 다시 만들어도 열려 있는 place에는 닿지 않습니다. 실제로 실행 중인\nplace를 읽어 보니 아이템은 80개였고 점유 형태도 옛것이었습니다. 데이터베이스는 100개\n였습니다.\n\n이번 버전의 목표는 두 가지입니다. **데이터베이스가 아이템 형태의 유일한 출처라는 약속을\n검증 가능한 상태로 만드는 것**, 그리고 **그 데이터를 게임에 옮기는 행위를 한 번의 명시적\n동작으로 만드는 것**입니다.\n\n## 제작자 경험\n\nItemDB 페이지 머리말에 이제 데이터베이스의 **리비전**이 적혀 있습니다. 아이템 하나의 칸\n형태나 이미지 배치가 바뀌면 이 값이 바뀝니다. 게임이 어떤 리비전을 쓰고 있는지와 비교하면\n\"내가 저장한 게 게임에 들어갔나?\"를 100개 아이템을 뒤지지 않고 답할 수 있습니다.\n\n형태를 다 고쳤으면 **「게임에 굽기」**를 누릅니다. 창에는 현재 리비전과 아이템 수, 그리고\n세 줄짜리 순서가 있습니다. Studio를 정지하고, 적용 스크립트를 복사해 명령 창에 붙여넣고,\n출력 창에 새 리비전이 찍히면 저장하고 다시 실행합니다. 명령 창을 쓰기 어려운 상황을 위해\n모듈 소스만 복사하거나 `.luau` 파일로 내려받는 길도 함께 둡니다.\n\n적용 스크립트는 결과를 숨기지 않습니다. 실행(Play) 중이면 적용을 거부하고, 적용에\n성공하면 `revision 알 수 없음 (80개) → 73ea9cd8f70f5d9a (100개)`처럼 이전과 이후를 함께\n찍습니다. 굽기를 빼먹었는지, 이미 최신이었는지가 출력 한 줄로 갈립니다.\n\n굽고 나면 이미 저장돼 있던 인벤토리도 손댈 필요가 없습니다. 서버가 가방을 불러올 때마다\n아이템을 데이터베이스 기준으로 다시 씌우므로, 새 칸 형태는 다음 접속에서 저절로 적용\n됩니다.\n\n## 핵심 원칙과 설계 철학\n\n**아이템의 형태에는 출처가 하나뿐이다.** 게임은 칸 형태를 스스로 정하지 않고, 저장된\n스냅숏에 적힌 형태도 신뢰하지 않습니다. 저장 파일은 무엇을 어디에 두었는지(정체와 배치)만\n기억하고, 무엇이 어떻게 생겼는지는 언제나 데이터베이스에서 다시 받아옵니다.\n\n**어긋남은 조용히 지나가지 않는다.** 데이터가 낡았다는 사실은 아이템을 하나씩 비교해야만\n드러나는 종류의 문제였습니다. 같은 지문을 위키, 생성 모듈, 게임 런타임 세 곳에 함께 찍어\n두면 어긋남은 눈에 보이는 값의 차이가 됩니다.\n\n**Studio 반영은 자동이 아니라 명시적 행위다.** 이 저장소는 파일시스템과 Studio를 잇는\n상시 동기화를 금지합니다. 배경에서 조용히 place를 고치는 장치는 무엇이 언제 바뀌었는지를\n알 수 없게 만듭니다. 그래서 마지막 한 구간은 사람이 누르는 한 번의 동작으로 남겨 두고,\n대신 그 동작을 세 번의 클릭까지 줄였습니다.\n\n**데이터베이스에서 사라진 것은 게임에도 남지 않는다.** 아이템이 은퇴하면 그 아이템을 넣어\n둔 예전 가방에도 남아 있을 이유가 없습니다.\n\n## 결정 사항과 범위\n\n- 리비전은 게임이 실제로 읽는 값만으로 계산합니다. 아이디·이름·분류·아이콘·점유 좌표·\n  무게·시너지·능력치·이미지 배치가 대상이며, 콘셉트 문구처럼 런타임이 쓰지 않는 값은\n  리비전을 움직이지 않습니다. 짧은 16자리로 줄여 눈으로 비교할 수 있게 했습니다.\n- 굽기는 `GeneratedItemLayouts`와 `ItemCatalog`를 **함께** 덮어씁니다. 생성 모듈의 반환\n  형태가 바뀌어도 place가 반쪽만 갱신된 상태로 남지 않게 하기 위해서입니다.\n- 적용 스크립트는 Play 중 적용을 거부합니다. 이미 required된 사본을 고쳐 봤자 그 세션에는\n  반영되지 않으면서 성공한 것처럼 보이기 때문입니다.\n- 전달 방식은 세 가지를 둡니다. 명령 창용 적용 스크립트, 모듈 소스, `.luau` 내려받기.\n  터미널에서는 `python3 tools/item_db.py bake`로 같은 스크립트를 얻습니다.\n- 상시 동기화, 자동 적용, Studio를 향한 HTTP 채널은 범위에서 명시적으로 제외했습니다.\n  저장소 정책이 금지하며 정책 테스트가 이를 강제합니다.\n- 이번 커밋 시점에 실행 중이던 place에는 아직 굽기를 적용하지 않았습니다. 적용은 작업자가\n  Studio를 정지할 수 있는 시점에 수행하는 운영 동작입니다.\n\n## 현재 결과\n\n![ItemDB 페이지의 굽기 진입점](./media/inventory-item-concept/v011/itemdb-bake-entry.png \"머리말 오른쪽의 「게임에 굽기」 버튼과 계약 표의 DB 리비전. 이 값이 게임이 보고하는 리비전과 같으면 데이터베이스와 게임이 일치한 상태입니다\")\n\n![게임에 굽기 창](./media/inventory-item-concept/v011/itemdb-bake-dialog.png \"현재 리비전과 아이템 수, 세 단계 적용 순서, 그리고 적용 스크립트·모듈 소스·파일 내려받기 세 가지 전달 방식\")\n\n## 구현 참고\n\n`tools/item_db.py`가 데이터베이스 빌드의 중심입니다. `compute_revision`이 런타임이 읽는\n필드만 정규화해 sha256 지문을 만들고, 그 값이 위키 데이터(`item-db-data.js`)와 생성 모듈\n양쪽에 함께 들어갑니다. 생성 모듈은 이제 평평한 표 대신 `{ Revision, Layouts }`를 돌려\n주고, `ItemCatalog`가 이를 풀어 `Ordered`·`ById`와 함께 `Revision`을 공개합니다.\n\n`render_bake_script`는 생성한 모듈 소스를 Luau 긴 문자열에 그대로 담아 명령 창 스크립트로\n만듭니다. 대괄호 단계는 소스에 실제로 없는 깊이를 골라 잡으므로 어떤 내용이 들어와도\n문자열이 조기에 닫히지 않습니다. `tools/wiki.py`의 `/api/item-db/bake`는 이 스크립트를\n로컬 편집 권한이 있는 요청에만 내려 주고, 위키 앱은 그것을 클립보드나 파일로 전달합니다.\n\n`ItemInstanceHydrator.RefreshBoard`는 정의가 살아 있는 아이템을 데이터베이스 값으로 다시\n씌우고, 정의가 사라진 아이템은 인스턴스와 배치를 함께 지운 뒤 보드를 재검증합니다.\n\n## 검증\n\n데이터베이스 빌드·검사, 파이썬 테스트 54개, 백팩 Luau 스펙, 위키 사이트 자바스크립트\n스펙, 위키 빌드·검사, 저장소 정책 테스트를 모두 실행해 통과했습니다.\n\n파이프라인은 실제 페이지에서 왕복으로 확인했습니다. 테이프 철검의 점유 칸을 3칸에서\n4칸으로 바꿔 저장하자 `GeneratedItemLayouts.luau`의 해당 아이템이 4칸으로 바뀌고 리비전이\n함께 움직였으며, 다시 3칸으로 되돌리자 리비전과 파일이 원래 값으로 복구됐습니다.\n\n격차의 근거도 실측입니다. Roblox Studio MCP로 실행 중인 place의 생성 모듈을 읽어 아이템\n80개와 옛 점유 형태를 확인했습니다.\n\n다만 **적용 스크립트를 Studio 명령 창에서 실제로 실행한 결과는 아직 확인되지 않았습니다.**\n스크립트는 Luau 컴파일러로 구문을 검증했고 엔드포인트와 전달 경로는 브라우저에서\n확인했으나, 작업자가 Studio를 정지할 수 있는 시점이 아니어서 place 적용은 수행하지\n않았습니다.\n\n## 후속 기획\n\n- 굽기를 실제 place에 적용하고, 데이터베이스 리비전과 게임이 보고하는 리비전이 같아지는\n  것을 Studio에서 확인합니다.\n- 게임 화면 어딘가에서 현재 리비전을 읽을 수 있게 할지 검토합니다. 지금은 모듈을 직접\n  읽어야 알 수 있습니다.\n- 칸 형태를 바꾼 뒤 기존 배치가 무효가 되는 경우의 안내를 설계합니다. 지금은 배치가\n  무효로 표시될 뿐, 왜 무효가 됐는지는 알려 주지 않습니다.\n",
          "source_path": "wiki/content/pages/inventory-item-concept/v011.md",
          "timeline_order": 31
        },
        {
          "id": "inventory-item-concept",
          "title": "인벤토리와 아이템 개념",
          "summary": "가방을 집어 원하는 칸에 놓는 동작이 실제로 성립하도록 드래그 입력 계약을 바로잡고, 보관함이 두 제스처(스크롤·꺼내기)를 명시적 규칙으로 나눠 갖도록 정리했습니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "inventory",
            "item",
            "backpack",
            "item-db",
            "hex-grid",
            "ui",
            "ux",
            "input",
            "mobile",
            "roblox"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-14",
          "authors": [
            "Codex"
          ],
          "version": 10,
          "change_type": "updated",
          "change_summary": "포인터가 지나는 칸마다 드래그가 재시작되던 결함을 제거하고 잡은 칸이 포인터를 따라오도록 했으며, 보관함의 스크롤과 꺼내기를 네 가지 명시 규칙으로 분리하고 서랍 가장자리 처리와 겹친 가방 칸 표현을 정리했습니다.",
          "supersedes": "inventory-item-concept@v009",
          "sources": [
            "wiki/content/pages/inventory-item-concept/v009.md",
            "wiki/content/media/inventory-item-concept/v010/studio-vertical-storage-scrolled.png",
            "src/ReplicatedStorage/BackpackUI/Screen.luau",
            "src/ReplicatedStorage/BackpackUI/DragPlacementState.luau",
            "src/ReplicatedStorage/BackpackUI/ScreenRenderer.luau",
            "src/ReplicatedStorage/BackpackUI/VisualTokens.luau",
            "tests/BackpackUI.spec.luau",
            "tests/test_native_backpack_ui.py"
          ],
          "related": [
            "development-wiki",
            "backpack-combat-stat-database",
            "project-overview"
          ],
          "validation": [
            "bash tools/test_backpack_ui.sh",
            "python3 -m unittest tests.test_repository_policy",
            "Roblox Studio MCP Play, 세로 401×718: 실제 배치 데이터로 앵커 계산 검증 - 잡은 칸에서 놓으면 제자리, 한 칸 이동 시 정확히 한 칸",
            "Roblox Studio MCP Play: 보관함 세로 스크롤 카드 79장·캔버스 3936px, 가로 잘림 0, 서랍 여백 마스크가 상단 0~14px·하단 304~315px를 정확히 덮음",
            "Roblox Studio MCP Play: 겹친 가방 칸 5개가 각각 1회만 채색, 스택된 셀 0",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "python3 -m unittest tests/test_wiki.py"
          ],
          "body": "# 인벤토리와 아이템 개념\n\n## 기획 배경과 목표\n\n앞 버전에서 인벤토리는 전투 준비 씬으로서의 화면을 갖췄습니다. 그러나 작업대는 보기\n좋은 것만으로 성립하지 않습니다. 가방 칸을 집어 원하는 칸에 놓는 동작이 손에 맞아야\n비로소 작업대입니다.\n\n실제로 만져 보니 그 동작이 성립하지 않았습니다. 가방을 잡아도 들리지 않고, 칸이 아닌\n빈 공간까지 끌고 나가야 그제서야 들렸으며, 그때 들리는 것은 처음 잡은 가방이 아니라\n포인터가 마지막으로 지나간 가방이었습니다. 보관함에서는 목록을 넘기려는 손짓과 아이템을\n꺼내려는 손짓이 서로를 잡아먹었습니다.\n\n이번 버전은 화면을 더 꾸미지 않습니다. **입력이 의도한 대로 해석되게 만드는 것**만을\n목표로 삼았습니다.\n\n## 플레이어 경험\n\n가방 칸을 잡으면 그 즉시 들립니다. 잡은 칸이 포인터를 따라오므로, 한 칸 옆으로 밀면\n가방은 정확히 한 칸 움직입니다. 놓일 자리는 손에 든 그림 아래에 스냅된 윤곽으로 미리\n보입니다.\n\n보관함은 하나의 표면에서 두 가지 손짓을 받습니다. 카드 사이의 빈 곳을 잡으면 목록이\n넘어가고, 카드 가장자리를 잡아도 넘어갑니다. 카드 가운데를 잡고 바로 끌면 아이템이\n집히고, 잠깐 누르고 있다가 위아래로 움직이면 목록이 넘어갑니다. 어느 쪽을 원했든 손이\n먼저 알려 준 대로 동작합니다.\n\n목록을 넘기는 동안 서랍 위아래로 카드가 삐져나오지 않습니다. 아직 꺼낼지 넘길지 모르는\n동안에는 들린 아이템 그림도 나타나지 않고, 서랍 밖으로 손이 나가는 순간 나타납니다.\n\n## 핵심 원칙과 설계 철학\n\n**한 번의 누름은 하나의 조작이다.** 포인터가 다른 대상 위를 지난다는 이유로 진행 중인\n조작이 다시 시작되어서는 안 됩니다. 누름은 그것이 시작된 대상에 끝까지 속합니다.\n\n**손에 든 것이 조준한다.** 들어 올린 그림은 손가락을 피하기 위한 시각 장치이자 플레이어가\n겨누는 대상입니다. 시각과 조준이 어긋나면 그 차이는 조준 실패가 아니라 \"말을 안 듣는다\"로\n체감됩니다.\n\n**집은 자리를 기억한다.** 여러 칸을 차지하는 가방은 어느 칸을 잡았는지가 곧 손의 기준점\n입니다. 기준점을 잃으면 가방은 잡은 것과 다른 방식으로 움직입니다.\n\n**모호한 구간에서는 판단을 미룬다.** 보관함 안에서 손이 움직이는 동안에는 스크롤인지\n꺼내기인지 아직 알 수 없습니다. 확정되지 않은 의도를 화면에 미리 그리지 않습니다.\n\n**제스처는 추측이 아니라 규칙으로 나눈다.** 방향만으로 의도를 짐작하면 두 조작이 서로를\n빼앗습니다. 어떤 지점을 잡았는지, 얼마나 쥐고 있었는지 같은 관찰 가능한 조건으로 나눕니다.\n\n## 결정 사항과 범위\n\n- 보관함 제스처는 네 규칙으로 확정했습니다. ① 카드가 아닌 서랍 내부는 무조건 스크롤,\n  ② 카드 가장자리(중심에서 86% 밖)는 스크롤, ③ 카드 안쪽을 0.8초 이상 쥐고 있다가\n  위아래로 움직이면 스크롤, ④ 그 밖의 카드 드래그는 아이템 꺼내기입니다.\n- 포인터 리프트는 터치 36px, 마우스 0px입니다. 마우스 커서는 아무것도 가리지 않으므로\n  들어 올릴 이유가 없습니다.\n- 보드 드래그는 4px 이동에서 시작합니다. 보관함은 14px을 유지합니다. 서랍의 스크롤\n  제스처를 드래그가 가로채지 않아야 하기 때문입니다.\n- 서랍 안쪽 여백을 상단 14px, 하단 11px로 넓히고 그 여백을 불투명 띠로 덮었습니다.\n  잘린 카드가 서랍 테두리에 맞닿아 잘리면 그 단면이 패널 밖으로 새어 나온 것처럼\n  읽혔습니다.\n- 겹친 가방 칸은 한 번만, 무효 색으로 칠합니다. 겹치는 배치는 거부되지 않고 드래프트로\n  남는 설계이므로, 두 반투명 색이 쌓여 정체를 알 수 없는 색이 되던 문제를 정리했습니다.\n- 조작감 수치(리프트 36px, 대기 0.8초, 가장자리 86%)는 실기기 확인 후 조정할 여지를\n  남겨 둡니다. 이번 커밋에서는 규칙의 구조를 확정하는 데까지가 범위입니다.\n\n## 현재 결과\n\n![세로 스크롤 중인 보관함](./media/inventory-item-concept/v010/studio-vertical-storage-scrolled.png \"아이템 배치 모드에서 보관함을 중간까지 넘긴 상태. 카드는 가로로 잘리지 않고 세로로만 잘리며, 서랍 위아래 여백이 불투명 띠로 덮여 잘린 카드가 패널 밖으로 새지 않습니다\")\n\n## 구현 참고\n\n입력 계약은 `Screen.luau`와 `DragPlacementState.luau`가 나눠 갖습니다. 판단 규칙은 순수\n함수로 분리해 테스트가 직접 검증합니다.\n\n- `beginObjectPress`는 드래그가 이미 살아 있으면 새 누름을 무시합니다. Roblox는 버튼을\n  누른 채 포인터가 들어가는 모든 GuiObject에 `InputBegan`을 올리므로, 이를 그대로 받으면\n  포인터가 지나는 칸마다 `startDrag`가 다시 호출되어 드래그가 죽고 되살아났습니다.\n- `ResolveGrabOffset`과 `AnchorForGrab`이 집은 칸과 앵커의 차이를 보존합니다. 앵커가\n  포인터로 순간이동하면 가방은 그 차이만큼 도약하고, 원래 배치가 재현되는 유일한 포인터\n  위치가 앵커 칸이어서 제자리로 붙는 것처럼 보였습니다.\n- `IsCardRimGrab`은 카드 중심에서의 거리를 반폭·반높이의 비율로 재므로 화면 크기와\n  무관하게 같은 두께의 가장자리를 만듭니다. `ShouldStorageScrollAfterHold`는 첫 이동\n  시점의 경과 시간으로 규칙 ③을 판정합니다.\n- 드래그가 시작되면 `ScrollingFrame`의 자체 스크롤을 끕니다. 카드에서 시작한 드래그\n  중에도 프레임이 스크롤해 서랍이 손 밑에서 움직였습니다.\n\n`ScreenRenderer.luau`는 서랍 가장자리를 담당합니다. 여백을 덮는 불투명 띠와 그 안쪽의\n페이드가 함께 잘린 단면을 마감합니다. 카드와 카드 캔버스가 각각 자기 내용을 클리핑하고,\n회전을 쓰는 아이템 아트는 회전 없는 컨테이너 안에 가둡니다. Roblox는 조상 경계에 걸친\n회전 자손을 정확히 자르지 못하기 때문입니다.\n\n## 검증\n\n로컬에서 `tools/test_backpack_ui.sh`와 저장소 정책 테스트를 실행했습니다. 제스처 규칙과\n앵커 계산은 경계값 테스트로 고정했습니다. Roblox Studio MCP Play에서 실제 배치 데이터로\n앵커 계산을 확인했고(잡은 칸에서 놓으면 제자리, 한 칸 이동 시 정확히 한 칸), 보관함\n세로 스크롤에서 카드 79장이 가로 잘림 없이 3936px 캔버스를 채우며 서랍 여백 마스크가\n상단 0~14px·하단 304~315px를 정확히 덮는 것을 확인했습니다.\n\n드래그 조작 자체는 Studio의 클릭 시뮬레이션 좌표계가 디바이스 에뮬레이션과 어긋나\n자동 제스처로 재현하지 못했습니다. 규칙 함수와 렌더 결과는 검증했으나, **손으로 만졌을\n때의 감각은 아직 확인되지 않았습니다.**\n\n## 후속 기획\n\n- 실기기에서 조작감을 확인하고 리프트·대기 시간·가장자리 두께를 조정합니다.\n- 스크롤하려는 손짓에서 아이템이 집히는 빈도를 관찰합니다. 규칙 ④가 실사용에서 너무\n  자주 이기면 판정을 다시 나눠야 합니다.\n- 준비 씬에서 전투로 넘어가는 전환 연출을 설계합니다.\n",
          "source_path": "wiki/content/pages/inventory-item-concept/v010.md",
          "timeline_order": 30
        },
        {
          "id": "inventory-item-concept",
          "title": "인벤토리와 아이템 개념",
          "summary": "인벤토리를 전투 준비 씬으로 승격해 밝은 작업대 톤과 화면 전체 배경을 확정하고, 보드를 바꾸는 조작을 보드 오른쪽 도크로 모아 배치면을 비웠으며, 보관함을 세로 스크롤로 바꾸고 가방 드래그가 실제로 잡히도록 입력 계약을 바로잡았습니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "inventory",
            "item",
            "backpack",
            "item-db",
            "hex-grid",
            "ui",
            "ux",
            "mobile",
            "roblox"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-14",
          "authors": [
            "Codex"
          ],
          "version": 9,
          "change_type": "updated",
          "change_summary": "어두운 캐비닛 톤을 밝은 작업대 팔레트로 교체하고 인벤토리를 전투 준비 씬으로 전면화했으며, 모드 탭과 확대 조작을 보드 오른쪽 도크로 통합하고, 보관함 필터를 세로 레일로·카드 목록을 세로 스크롤로 전환했으며, 드래그가 칸마다 재시작되던 입력 결함을 제거했습니다.",
          "supersedes": "inventory-item-concept@v008",
          "sources": [
            "wiki/content/pages/inventory-item-concept/v008.md",
            "wiki/content/media/inventory-item-concept/v009/studio-bright-preparation-scene.png",
            "wiki/content/media/inventory-item-concept/v009/studio-item-mode-vertical-storage.png",
            "src/ReplicatedStorage/BackpackUI/VisualTokens.luau",
            "src/ReplicatedStorage/BackpackUI/ScreenRenderer.luau",
            "src/ReplicatedStorage/BackpackUI/ScreenState.luau",
            "src/ReplicatedStorage/BackpackUI/Screen.luau",
            "src/ReplicatedStorage/BackpackUI/DragPlacementState.luau",
            "src/ReplicatedStorage/BackpackUI/UIPrimitives.luau",
            "tests/BackpackUI.spec.luau",
            "tests/test_native_backpack_ui.py"
          ],
          "related": [
            "development-wiki",
            "backpack-combat-stat-database",
            "project-overview"
          ],
          "validation": [
            "bash tools/test_backpack_ui.sh",
            "python3 -m unittest tests.test_repository_policy",
            "python3 -m unittest tests.test_item_db",
            "bash tools/test_item_stats.sh",
            "Roblox Studio MCP Play, 세로 401×718: 도크 경계·터치 타깃·클리핑 감사 통과, 보드 셀 18개 중 잘림 0, 콘솔 오류 없음",
            "Roblox Studio MCP Play, 세로 359×718 / 375×667 / 430×932: 도크가 보드 높이에 수용, 필터 버튼 48px 이상 유지, 클리핑 없음",
            "Roblox Studio MCP Play, Item 모드 보관함: 카드 79장 세로 캔버스 3963px, 가로 잘림 0, 끝까지 스크롤 도달",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "python3 -m unittest tests/test_wiki.py"
          ],
          "body": "# 인벤토리와 아이템 개념\n\n## 기획 배경과 목표\n\n이전 버전에서 인벤토리는 Roblox 네이티브 레이아웃으로 전환되며 구조를 얻었지만, 화면\n자체는 여전히 전투 중에 잠깐 열어보는 어두운 창이었습니다. 짙은 네이비 캐비닛 톤은\n육각 가방의 시너지 색과 아이템 아트를 눌렀고, 조작 버튼은 배치면 위에 떠 있었으며,\n보관함은 카드가 좌우로 잘린 채 가로로 흘렀습니다.\n\n이번 버전은 인벤토리를 **전투 준비 단계의 씬**으로 승격합니다. 플레이어가 잠깐 확인하고\n닫는 오버레이가 아니라, 전투에 나가기 전에 머무르며 가방을 짜는 하나의 장면입니다.\n그 전제에서 세 가지를 바꿨습니다. 화면 전체를 밝은 작업대로 채우고, 보드를 바꾸는\n조작을 배치면 밖으로 빼고, 보관함을 세로로 훑는 목록으로 되돌렸습니다.\n\n동시에 그동안 조작감을 망가뜨리던 입력 결함을 함께 제거했습니다. 배치 보드는 눈으로만\n좋아서는 의미가 없고, 가방 칸을 집어 원하는 칸에 놓는 동작이 정확해야 작업대로서 성립\n합니다.\n\n## 플레이어 경험\n\n준비 씬에 들어오면 화면 전체가 따뜻한 종이 톤의 작업대입니다. 상단에 무게와 레이아웃\n상태, 그 아래 배치 보드, 하단에 보관 서랍이 놓입니다. 게임 월드는 비치지 않습니다.\n\n보드를 다루는 조작은 모두 보드 오른쪽 가장자리에 세로로 붙어 있습니다. 위에서부터\n확대·원점·축소 다이얼, 그 아래 `가방 배치`와 `아이템 배치` 탭입니다. 지금 선택된 탭은\n보드와 같은 색으로 이어져 하나의 면처럼 보이고, 선택되지 않은 탭은 경계에서 멈춰\n닫힌 서류철처럼 물러나 있습니다. 어떤 모드인지 탭의 모양만으로 읽힙니다.\n\n보관 서랍에서는 카테고리 필터가 왼쪽에 세로로 서 있고, 아이템 카드가 그 오른쪽을\n가득 채웁니다. 카드는 **가로로는 절대 잘리지 않고** 세로로만 잘립니다. 아래쪽에 살짝\n걸친 다음 줄이 \"더 있다\"는 신호이며, 목록은 위아래로 훑습니다.\n\n가방 칸을 집으면 그 즉시 들립니다. 손가락이 가린 아트를 보기 위해 들린 그림은 포인터\n위로 떠 있지만, 놓일 자리는 언제나 포인터가 가리키는 칸이고 보드에 스냅된 윤곽으로\n미리 보입니다. 집은 칸이 포인터를 따라오므로 한 칸 옆으로 밀면 정확히 한 칸 움직입니다.\n\n## 핵심 원칙과 설계 철학\n\n**준비 씬은 배경까지 씬이다.** 인벤토리가 하나의 장면이라면 세이프 영역 밖까지 화면을\n소유해야 합니다. 상단 바 뒤를 포함해 화면 전체를 덮는 불투명 배경 레이어를 두고,\n상호작용 레이어는 세이프 영역 안에서만 배치를 계산합니다. 배경은 단색으로 고정합니다.\n\n**배치면 위에는 아무것도 두지 않는다.** 보드를 바꾸는 조작은 보드 자신의 가장자리에\n붙되 배치 영역 바깥에 있어야 합니다. 조작이 배치면 위에 떠 있으면 그 아래 칸은 영원히\n쓸 수 없는 자리가 됩니다.\n\n**정확해야 하는 축과 잘려도 되는 축을 구분한다.** 보관함이 세로로 스크롤한다면 가로는\n정확한 축입니다. 가로로 잘린 카드는 스크롤로 볼 방법이 없기 때문에 열이 폭을 정확히\n나눠 가져야 합니다. 반대로 세로로 잘린 줄은 결함이 아니라 스크롤 가능함을 알리는\n어포던스입니다.\n\n**시각 보정과 조작 좌표를 분리한다.** 들어 올린 그림은 손가락을 피하기 위한 시각 장치일\n뿐입니다. 이 보정값이 배치 계산에 섞이면 플레이어가 겨눈 칸과 실제로 놓이는 칸이\n어긋나고, 그 어긋남은 조준 실패가 아니라 \"칸이 말을 안 듣는다\"로 체감됩니다.\n\n**뷰는 플레이어의 조작으로만 움직인다.** 가방을 옮겼다고 보드가 다시 중앙을 잡으면\n플레이어는 자기가 옮긴 결과를 확인할 수 없습니다. 화면 재구성은 뷰포트 변화, 모드\n전환, 원점 복귀, 가방의 추가·보관처럼 배치 집합 자체가 달라질 때만 일어납니다.\n\n## 결정 사항과 범위\n\n- 팔레트를 `Scrim`·`Surface`·`Field`·`Paper`·`Recess`의 밝은 표면군과 `Ink`·`InkSoft`의\n  어두운 활자군으로 재정의했습니다. 기본 글자색을 밝은색에서 어두운 잉크로 뒤집고,\n  유효·무효·모드 강조색은 밝은 배경에서 읽히도록 채도를 높였습니다.\n- 버튼 판을 밝은 벡터 표면으로 그립니다. 확대·원점·축소·회전·보관은 자체적으로 어두운\n  원형 판을 포함한 완성형 그림이었기 때문에 잉크 벡터 글리프로 교체했고, 모드와 필터의\n  회화형 아이콘은 판이 없는 그림이라 그대로 두고 오히려 키웠습니다. 사용하지 않게 된\n  아이콘 자산 참조는 `UIPrimitives`에서 정리했습니다.\n- 바깥 모서리는 45도 모따기로 확정했습니다. `UICorner`는 둥근 모서리만 지원하므로\n  모서리를 깎는 마름모와 사선 테두리 두 프레임으로 구성했고, 이 방식이 성립하려면\n  배경이 단색이어야 하므로 배경 그라디언트를 포기했습니다.\n- 무게 표시는 카드 한 줄을 통째로 쓰던 배치를 버리고 아트 우하단의 자체 폭 칩으로\n  옮겼습니다. 저울 글리프는 16·22·28·40px에서 후보를 나란히 렌더해 비교한 결과\n  28px 아래에서 접시가 빔에 붙어 뭉개졌고, 폰의 카드 칩은 그보다 작기 때문에 모든\n  크기에서 형태가 유지되는 역기 형태를 선택했습니다.\n- 보관함 최소 열 수는 3열입니다. 세로 필터 레일이 가로 공간을 쓰므로 4열을 고집하면\n  카드가 이전보다 작아집니다. 두 줄이 들어가지 않는 화면에서는 카드를 줄이는 대신\n  열을 늘려, 폭이 언제나 정확히 채워지도록 했습니다.\n- PC 레이아웃은 이번에도 범위 밖입니다. 모바일 세로만 설계·검증 대상입니다.\n\n## 현재 결과\n\n![밝은 전투 준비 씬](./media/inventory-item-concept/v009/studio-bright-preparation-scene.png \"가방 배치 모드. 화면 전체가 밝은 작업대이고, 확대 다이얼과 두 모드 탭이 보드 오른쪽 가장자리 도크에 세로로 붙어 있으며 선택된 탭이 보드와 이어집니다\")\n\n![아이템 모드의 세로 보관함](./media/inventory-item-concept/v009/studio-item-mode-vertical-storage.png \"아이템 배치 모드. 필터가 왼쪽 세로 레일로 서고, 카드는 가로로 잘리지 않은 채 세로로 스크롤하며 아래쪽에 다음 줄이 걸쳐 보입니다\")\n\n## 구현 참고\n\n`VisualTokens`가 반응형 치수를 계산합니다. 보드는 오른쪽으로 도크 한 칸(`BoardRightInset`)\n만큼 물러나고, 도크 높이는 확대 패널이 쓰고 남은 공간을 두 탭이 나눠 갖습니다. 보관함은\n`CardAreaWidth`에서 스크롤바 레인을 먼저 뺀 뒤 열 수를 정하고, 남은 세로 여유를 다음 줄\n미리보기(`ScrollHeight`의 peek 구간)로 씁니다.\n\n`ScreenRenderer`는 팔레트와 그리기를 담당합니다. `chamferCorner`가 모따기 두 프레임을\n만들고, `setChamferSize`가 반응형 패스에서 크기를 갱신합니다. 활성 탭의 폭과 이음\n패치(`ActiveSeam`)도 이 반응형 패스가 소유합니다. 상태 쪽에서 크기를 정하면 다음\n렌더 패스가 그것을 되돌리기 때문입니다.\n\n입력 계약은 세 곳을 고쳤습니다.\n\n- `Screen.beginObjectPress`는 드래그가 이미 살아 있으면 새 누름을 무시합니다. Roblox는\n  버튼을 누른 채 포인터가 들어가는 모든 GuiObject에 `InputBegan`을 올리므로, 이를\n  그대로 받으면 포인터가 지나는 칸마다 드래그가 죽고 다시 시작됐습니다. 가방이 칸\n  안에서는 끝내 들리지 않고 칸 밖으로 나가야 마지막으로 밟은 가방이 들리던 원인입니다.\n- 포인터 리프트는 시각 전용입니다. 배치 후보는 리프트되지 않은 포인터 좌표로 계산합니다.\n- `DragPlacementState.ResolveGrabOffset`과 `AnchorForGrab`이 집은 칸과 앵커의 차이를\n  보존합니다. 앵커가 포인터로 순간이동하면 가방이 그 차이만큼 도약했고, 원래 배치가\n  재현되는 유일한 포인터 위치가 앵커 칸이라 제자리로 붙는 것처럼 보였습니다.\n\n`ScreenState`는 보드 맞춤을 캐싱합니다. 렌더마다 다시 맞추면 가방을 옮기는 순간 보드가\n재중심화됐습니다. 팬 제한도 뷰포트 비율이 아니라 실제 셀 경계로 계산해, 캔버스보다 작은\n배치는 가장자리를 넘어갈 수 없습니다.\n\n## 검증\n\n로컬에서 `tools/test_backpack_ui.sh`, 저장소 정책·ItemDB·ItemStats 테스트를 실행했고,\nRoblox Studio MCP Play에서 세로 401×718, 359×718, 375×667, 430×932를 확인했습니다.\n도크 경계·터치 타깃 48px·클리핑·오버플로 감사를 통과했으며 보드 셀 잘림은 0입니다.\nItem 모드 보관함에서 카드 79장이 세로 캔버스 3963px에 배치되고 가로 잘림 없이 끝까지\n스크롤됩니다. 콘솔 오류는 없습니다.\n\n드래그 조작은 Studio의 클릭 시뮬레이션 좌표계가 현재 창 상태와 어긋나 자동 제스처로는\n재현하지 못했습니다. 대신 실제 배치 데이터로 앵커 계산을 검증했고, 히트 테스트에서 두\n모드 탭과 확대 버튼이 최상위로 잡히는 것을 확인했습니다. 실제 손 조작 확인은 남아\n있습니다.\n\n## 후속 기획\n\n- 드래그 조작감을 실기기에서 확인하고 리프트 값과 드래그 시작 임계값을 조정합니다.\n- 보관함 세로 스크롤에서 카드 위 세로 스와이프가 스크롤로 넘어가는 판정이 아이템을\n  꺼내는 동작과 충돌하지 않는지 실사용에서 확인합니다.\n- 준비 씬에서 전투로 넘어가는 전환 연출을 설계합니다.\n",
          "source_path": "wiki/content/pages/inventory-item-concept/v009.md",
          "timeline_order": 29
        },
        {
          "id": "inventory-item-concept",
          "title": "인벤토리와 아이템 개념",
          "summary": "세로 모바일에서 배치 보드를 가장 큰 작업면으로 유지하는 네이티브 육각 인벤토리를 확정하고, 100종 ItemDB와 현재 사용 중인 제어 리소스만 런타임에 연결했습니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "inventory",
            "item",
            "backpack",
            "item-db",
            "hex-grid",
            "ui",
            "mobile",
            "roblox"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-13",
          "authors": [
            "Codex"
          ],
          "version": 8,
          "change_type": "updated",
          "change_summary": "여러 시안의 이미지 프레임을 폐기하고 Roblox 네이티브 레이아웃과 단일 제어 키트로 모바일 인벤토리를 재구성했으며, 100종 ItemDB·육각 점유 형태·시너지·서버 권위를 한 계약으로 동기화했습니다.",
          "supersedes": "inventory-item-concept@v007",
          "sources": [
            "wiki/content/pages/inventory-item-concept/v007.md",
            "wiki/content/media/inventory-item-concept/v008/studio-native-mobile-inventory.jpg",
            "docs/gameplay/inventory-item-art-catalog.md",
            "docs/gameplay/inventory-item-layouts.json",
            "docs/gameplay/backpack-inventory-planning-reference.md",
            "Assets/UI/Backpack/CurrentControls",
            "Assets/UI/Backpack/Hex/hex_fill.png",
            "Assets/UI/Backpack/SynergyIcons",
            "src/ReplicatedStorage/BackpackUI/VisualTokens.luau",
            "src/ReplicatedStorage/BackpackUI/UIPrimitives.luau",
            "src/ReplicatedStorage/BackpackUI/Screen.luau",
            "src/ReplicatedStorage/BackpackUI/ScreenRenderer.luau",
            "src/ReplicatedStorage/BackpackUI/InventoryBoardModel.luau",
            "src/ServerScriptService/InventoryService.luau",
            "tests/BackpackUI.spec.luau"
          ],
          "related": [
            "development-wiki",
            "backpack-combat-stat-database",
            "project-overview"
          ],
          "validation": [
            "ItemDB build/check: 활성 아이템 100종과 게임 런타임 레이아웃 동기화",
            "python3 -m unittest discover -s tests -p 'test_*.py': 49 tests 통과",
            "bash tools/test_backpack_ui.sh",
            "Roblox Studio MCP Play, iPhone 17 Pro 세로 401×777: 보드·모드 탭·확대 조작·보관함 표시, ZoomIndex 변경, 콘솔 오류 없음",
            "Roblox Studio MCP Play, ProjectBackpack HighRes 세로 1206×1626: Item 모드 전환, 완전한 카드 행과 터치 영역, 콘솔 오류 없음",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "git diff --check"
          ],
          "body": "# 인벤토리와 아이템 개념\n\n## 기획 배경과 목표\n\n인벤토리 화면은 장식 프레임을 감상하는 메뉴가 아니라 육각 가방과 아이템을 반복해서\n집고, 돌리고, 놓는 작업대입니다. 시안이 바뀔 때마다 큰 래스터 프레임과 임시 버튼을\n덧대는 방식은 화면 비율이 달라질수록 배치가 흔들리고, 현재 무엇이 실제 런타임 자산인지\n구분하기 어렵게 만들었습니다.\n\n이번 버전은 배치 보드를 세로 모바일 화면의 주 작업면으로 고정하고, Roblox UI 객체가\n구조·반응형 배치·상태를 담당하도록 전환했습니다. 이미지 리소스는 육각형의 정확한 채움,\n현재 제어판과 아이콘, 시너지 심볼처럼 그림이 필요한 부분에만 제한했습니다. 동시에 웹\nItemDB의 아이템 정보가 카드와 배치 결과의 유일한 원본이 되도록 게임 런타임과 생성물을\n다시 묶었습니다.\n\n## 플레이어 경험\n\n- 상단 상태 바는 얇게 유지되고 배치 보드가 남은 세로 공간의 우선권을 가집니다.\n- 가방 배치와 아이템 배치 탭은 보드 왼쪽 안쪽 모서리에 붙어, 보드 전체 모드를 바꾸는\n  제어라는 의미를 전달합니다.\n- 확대·원점·축소는 보드 우측 상단에 모이고, 실제 터치 영역은 최소 48px을 유지합니다.\n- 보관함은 화면 아래에 붙고 최소 네 열과 완전한 두 행을 보장합니다. 더 넓거나 긴\n  세로 화면에서는 더 많은 열·행을 보여 주되 세로 방향의 반쪽 카드 행은 만들지 않습니다.\n- 아이템과 가방은 ItemDB의 회전, 각도, axial 육각 점유 형태와 크기를 그대로 사용합니다.\n- 드래그 중에는 손가락보다 조금 위에 실제 배치 크기의 대상이 보이고, 예상 위치는\n  아이콘을 중복하지 않는 초록색 또는 빨간색 육각 외곽선으로만 표시됩니다.\n- 잘못된 배치는 빨간 외곽선만 사용하며 빈번한 실수를 방해하는 토스트 경고는 띄우지\n  않습니다.\n\n![네이티브 모바일 인벤토리 최종 결과](./media/inventory-item-concept/v008/studio-native-mobile-inventory.jpg \"ProjectBackpack HighRes 세로 Play에서 얇은 상태 바, 넓은 배치 보드, 보드 결합 탭, 우측 보기 제어와 완전한 보관 카드 행을 확인\")\n\n## 핵심 원칙과 설계 철학\n\n### 보드가 화면의 주인이다\n\n헤더와 보관함은 필요한 정보와 조작만 차지하고, 남은 높이는 보드에 먼저 배정합니다.\n보관함의 카드 크기와 행 수는 보드 최소 높이를 침범하지 않는 범위에서 계산합니다.\n가로 방향은 남는 공간을 모두 쓰기 위해 다음 카드 일부가 잘려 보일 수 있지만, 세로\n방향은 완전한 행만 노출합니다.\n\n### 반응형 부모 안에서만 고정 픽셀을 쓴다\n\n화면 너비·높이에서 헤더, 보드, 보관함의 영역을 먼저 계산한 뒤 카드, 탭, 제어 버튼의\n픽셀 크기를 제한 범위 안에서 정합니다. 드래그 손가락 오프셋과 48px 터치 영역처럼\n물리적으로 일정해야 하는 값만 반응형 부모 내부의 고정값으로 둡니다. 따라서 해상도가\n높아져도 집은 아이템이 포인터에서 비정상적으로 멀어지지 않습니다.\n\n### 데이터와 시각 자산의 권위를 분리한다\n\n아이템 이름, 종류, 무게, 시너지, 아이콘, 점유 칸과 초기 회전은 ItemDB가 소유합니다.\nUI 리소스는 입력 상태를 읽기 좋게 표현할 뿐 아이템 규칙을 복제하지 않습니다.\n`tools/item_db.py`가 웹 데이터와 `GeneratedItemLayouts.luau`를 함께 생성하므로 ItemDB의\n수정이 카드 미리보기와 실제 배치에 같은 형태로 반영됩니다.\n\n### 서버가 최종 배치를 판정한다\n\n클라이언트는 드래그와 예상 외곽선을 즉시 그리지만, 아이템 이동·회전·보관과 전투 진입\n조건은 서버 인벤토리 서비스가 검증합니다. 클라이언트가 보여 주는 육각 기하와 서버가\n허용하는 점유 좌표는 같은 axial 회전 규칙을 공유합니다.\n\n## 결정 사항과 정리 범위\n\n- 활성 ItemDB는 아이콘을 가진 100종이며 각 항목은 0~3개 시너지와 axial footprint를\n  가집니다.\n- 현재 UI 로컬 리소스는 `CurrentControls` 16개, 공통 육각 채움 1개, 시너지 아이콘\n  26개와 그 재생성 원본만 유지합니다.\n- 과거 시안 프레임, 폐기된 버튼·타일·범용 아이콘, 중복 런타임 육각 PNG/SVG와 해당\n  생성기는 제거했습니다.\n- 가방/아이템 카드와 보드 셀은 정사각 채움이 아닌 동일한 flat-top 육각 기하를 사용합니다.\n- 필터는 선택, 사용 가능, 비활성의 세 상태를 가지며 선택 바는 아이콘과 겹치지 않습니다.\n- PC 전용 조밀도나 마우스 우선 동작은 이번 완료 기준에 포함하지 않습니다.\n\n## 현재 결과와 구현 참고\n\n`VisualTokens`가 현재 뷰포트에서 보드 우선 높이, 카드 폭, 완전한 행 수, 탭과 제어 레일의\n위치를 계산합니다. `ScreenRenderer`는 이 토큰과 `UIPrimitives`의 단일 제어 키트로 모든\n상태를 구성하고, `Screen`은 터치·드래그·보관함 횡스크롤·회전·선택을 연결합니다.\n\n기존 `Assets.luau`와 정사각 `GridModel`은 제거됐습니다. 육각 좌표, 외곽선과 충돌은\n`HexGrid`, `HexOutlineModel`, `InventoryBoardModel`이 담당하며 카드와 배치 보드가 같은\n기하를 사용합니다. 사용되지 않는 로컬 시안과 중간 리소스는 복구 가능한 휴지통으로\n이동해 저장소에는 최신 런타임과 재현에 필요한 원본만 남겼습니다.\n\n## 검증\n\nItemDB 생성·검사에서 활성 100종의 이미지와 배치 데이터가 웹 데이터와 게임 생성물에\n동일하게 존재함을 확인했습니다. Python 전체 49개 테스트, Node 기반 ItemDB·위키 정책\n테스트와 Luau 인벤토리 테스트를 통과했습니다.\n\nStudio MCP Play에서는 iPhone 17 Pro 세로 401×777과 별도 고해상도 세로\n1206×1626을 검증했습니다. 두 화면 모두 안전 영역 안에서 헤더·보드·탭·보기 제어·보관함이\n잘리거나 겹치지 않았습니다. 작은 화면에서는 확대 입력으로 `ZoomIndex` 변경을, 큰\n화면에서는 아이템 탭 입력으로 `Mode=Item` 전환을 확인했고 두 런타임 콘솔은 비어\n있었습니다. 검증 후 Studio는 기본 뷰포트로 복원했습니다.\n\n## 후속 기획\n\n- 새 아이템은 ItemDB 원본을 수정하고 생성·검사를 통과한 뒤에만 런타임에 추가합니다.\n- 새 UI 제어가 필요하면 현재 제어 키트에 목적이 분명한 한 변형만 추가하고 임시 시안\n  폴더를 런타임 자산처럼 쌓지 않습니다.\n- 터치 드래그의 실제 손가락 가림 정도는 다른 물리 크기의 최신 폰에서도 지속 관찰하되,\n  화면 비율별 임의 배율이 아니라 고정 픽셀 오프셋 계약을 유지합니다.\n",
          "source_path": "wiki/content/pages/inventory-item-concept/v008.md",
          "timeline_order": 26
        },
        {
          "id": "inventory-item-concept",
          "title": "인벤토리와 아이템 개념",
          "summary": "아이템 제작자가 긴 편집 내용을 탐색하는 동안에도 저장과 취소를 즉시 실행하고, 칸 설정에서는 아이템 실루엣을 30% 참조 레이어로 보며 점유 칸을 고를 수 있게 했습니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "inventory",
            "item",
            "backpack",
            "item-db",
            "hex-grid",
            "ui",
            "authoring"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-12",
          "authors": [
            "Codex"
          ],
          "version": 7,
          "change_type": "corrected",
          "change_summary": "ItemDB 편집기의 저장·취소를 스크롤 바깥 상단에 고정하고, 칸 레이어에 가려졌던 30% 불투명 아이템 이미지를 선택 칸 위의 참조 레이어로 복구했습니다.",
          "supersedes": "inventory-item-concept@v006",
          "sources": [
            "wiki/site/app.css",
            "wiki/site/app.js",
            "wiki/content/media/inventory-item-concept/v007/itemdb-editor-fixed-actions-cell-reference.jpg"
          ],
          "related": [
            "development-wiki",
            "backpack-combat-stat-database",
            "project-overview"
          ],
          "validation": [
            "node --check wiki/site/app.js",
            "node tests/item-db.spec.js",
            "node tests/local-access.spec.js",
            "python3 tools/item_db.py check",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "python3 -m unittest tests/test_wiki.py",
            "python3 -m unittest tests.test_repository_policy",
            "로컬 ItemDB 브라우저에서 칸 설정 모드 opacity 0.3, 이미지 z-index 3, 칸 z-index 2, 이미지 pointer-events none 확인",
            "본문을 끝까지 스크롤한 뒤 저장 버튼 위치 유지와 실제 클릭 대상 확인",
            "Chrome에서 구형 local-access 캐시와 신형 앱 조합의 초기 로딩 복구 및 콘솔 신규 오류 없음 확인"
          ],
          "body": "# 인벤토리와 아이템 개념\n\n## 기획 배경과 목표\n\nItemDB 편집기는 아이템 이미지와 육각형 점유 형태를 승인하는 제작 도구입니다. 편집\n항목이 늘어나 세로 스크롤이 길어지더라도 제작자가 저장이나 취소를 찾기 위해 화면 끝을\n왕복해서는 안 됩니다. 또한 칸을 고르는 순간 아이템 그림이 사라지면 실루엣과 점유 형태를\n비교한다는 편집기의 핵심 목적을 잃습니다.\n\n이번 변경은 편집 내용의 길이와 관계없이 주요 결정을 항상 실행할 수 있게 하고, 칸 설정\n중에도 아이템 그림을 방해되지 않는 참고 정보로 유지하는 데 목적이 있습니다.\n\n## 사용자 경험\n\n- 제목과 닫기 아래에 `취소`와 `저장`이 고정되어 본문 스크롤 위치와 무관하게 보입니다.\n- 이미지·육각 칸·조절 항목을 담은 본문만 편집기 내부에서 스크롤됩니다.\n- `칸 설정하기`에서는 아이템 이미지가 30% 불투명도로 선택 칸 위에 남습니다.\n- 반투명 이미지는 입력을 받지 않으므로 보이는 그림을 통과해 육각 칸을 선택할 수 있습니다.\n- `이미지 이동하기`로 돌아오면 이미지는 즉시 100% 불투명도로 복원됩니다.\n\n## 핵심 원칙과 설계 철학\n\n### 결정 버튼은 콘텐츠 길이에 종속되지 않는다\n\n저장과 취소는 편집 내용이 아니라 편집 세션 자체에 대한 행동입니다. 따라서 스크롤되는\n본문과 분리해 상단 액션 영역에 고정했습니다. 새로운 설정이 추가되더라도 주요 행동의\n위치와 접근성은 변하지 않습니다.\n\n### 참조 이미지는 보이되 칸 조작을 막지 않는다\n\n칸 설정 모드의 이미지는 `opacity: 0.3`으로 낮추고 포인터 입력을 비활성화합니다. 이미지\n레이어는 육각 칸보다 위에 두어 실루엣이 색칠된 선택 칸에 가려지지 않게 했습니다. 클릭은\n아래의 칸으로 전달되므로 시각적 참고와 직접 조작을 동시에 만족합니다.\n\n### 캐시 시차도 로컬 제작 도구를 멈추게 하지 않는다\n\n로컬 위키 앱은 현재 접근 판별 API와 브라우저에 남을 수 있는 이전 함수명을 모두\n수용합니다. 브라우저 캐시에 두 버전이 잠시 섞여도 앱 초기화가 중단되지 않고 문서와\n데이터베이스를 계속 표시합니다.\n\n## 결정 사항과 범위\n\n이번 범위는 ItemDB 편집 모달의 행동 배치, 내부 스크롤, 칸 설정 참조 이미지 레이어와\n로컬 접근 판별의 하위 호환성입니다. 아이템 데이터, 점유 좌표, 이미지 리소스와 게임\n런타임 배치 규칙은 변경하지 않았습니다.\n\n## 현재 결과\n\n![상단 고정 행동과 반투명 참조 이미지를 적용한 ItemDB 편집기](./media/inventory-item-concept/v007/itemdb-editor-fixed-actions-cell-reference.jpg \"취소·저장이 상단에 고정되고 안테나 리커브 보우가 선택한 세 육각 칸 위에 30% 불투명도로 보이는 최종 화면\")\n\n칸 설정 상태에서도 활의 세로 실루엣이 선택된 세 칸 위에 남습니다. 저장과 취소는 본문\n스크롤 바깥에 있어 편집 중 어느 위치에서도 같은 자리에 유지됩니다.\n\n## 구현 참고\n\n편집 모달은 고정 헤더, 고정 액션 영역과 스크롤 본문으로 나뉩니다. 상태 갱신 함수는\n모드가 `cells`일 때 이미지 인라인 불투명도를 `0.3`, 이동 모드에서는 `1`로 명시해\n스타일 적용을 상태와 직접 동기화합니다. 칸 설정의 이미지 레이어는 `z-index: 3`, 육각\n그리드는 `z-index: 2`이며 이미지의 `pointer-events`는 `none`입니다.\n\n로컬 접근 판별은 현재 API를 우선 사용하고, 없을 때만 분리된 문자열로 보존한 이전 함수\n키를 조회합니다. 현재 소스 계약에는 폐기된 이름을 다시 노출하지 않으면서 캐시 시차만\n안전하게 흡수합니다.\n\n## 검증\n\n로컬 브라우저에서 칸 설정과 이미지 이동을 왕복하며 계산 불투명도 `0.3`과 `1`, 레이어\n순서와 포인터 입력 비활성화를 확인했습니다. 내부 본문을 끝까지 스크롤한 뒤에도 액션\n영역과 저장 버튼 좌표가 유지됐고, 저장 버튼 중심의 실제 클릭 대상도 버튼 자신이었습니다.\n\nChrome에서는 이전 접근 모듈이 캐시된 상태에서 새 앱을 불러오는 조합을 재현한 뒤 문서\n7개와 데이터베이스 탐색이 정상 복구되고 새 콘솔 오류가 발생하지 않는 것을 확인했습니다.\n정적 구문 검사, ItemDB 검사, 관련 Node 테스트와 위키 생성·정책 검사를 함께 수행했습니다.\n\n## 후속 기획\n\n- ItemDB에 새로운 편집 항목을 추가해도 저장·취소는 고정 액션 영역에 유지합니다.\n- 칸 설정 시 아이템 고유 색과 실루엣을 보존하며, 이미지가 칸 선택 입력을 가로채지 않게\n  합니다.\n- 로컬 전용 API를 이름 변경할 때는 최소 한 버전 동안 양방향 호환 별칭을 유지합니다.\n",
          "source_path": "wiki/content/pages/inventory-item-concept/v007.md",
          "timeline_order": 24
        },
        {
          "id": "inventory-item-concept",
          "title": "인벤토리와 아이템 개념",
          "summary": "아이템 제작자가 육각형 점유 칸과 이미지 방향을 한 화면에서 맞추고, 칸 설정 중에는 반투명 이미지를 기준으로 실루엣을 판단할 수 있게 했습니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "inventory",
            "item",
            "backpack",
            "item-db",
            "hex-grid",
            "ui",
            "authoring"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-11",
          "authors": [
            "Codex"
          ],
          "version": 6,
          "change_type": "updated",
          "change_summary": "ItemDB 편집 흐름을 flat-top 육각형과 60도 회전 계약으로 전환하고, 칸 설정 상태의 이미지를 70% 투명하게 보여 주어 점유 실루엣을 직접 대조할 수 있게 했습니다.",
          "supersedes": "inventory-item-concept@v005",
          "sources": [
            "docs/gameplay/inventory-item-art-catalog.md",
            "docs/gameplay/inventory-item-layouts.json",
            "src/ReplicatedStorage/BackpackUI/GeneratedItemLayouts.luau",
            "src/ReplicatedStorage/BackpackUI/ItemCatalog.luau",
            "src/ReplicatedStorage/BackpackUI/Screen.luau",
            "tests/item-db.spec.js",
            "tests/test_item_db.py",
            "tools/item_db.py",
            "wiki/site/app.css",
            "wiki/site/app.js",
            "wiki/site/item-db-data.js",
            "wiki/site/item-db.js",
            "wiki/content/media/inventory-item-concept/v006/itemdb-hex-editor-cell-mode.jpg"
          ],
          "related": [
            "development-wiki",
            "backpack-combat-stat-database",
            "project-overview"
          ],
          "validation": [
            "python3 tools/item_db.py build",
            "python3 tools/item_db.py check",
            "python3 -m unittest tests.test_item_db",
            "node tests/item-db.spec.js",
            "node --check wiki/site/app.js",
            "node --check wiki/site/item-db.js",
            "rojo build packbound.project.json --output /tmp/PackBound-itemdb-hex.rbxlx",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "python3 -m unittest tests/test_wiki.py",
            "로컬 ItemDB 브라우저에서 칸 설정 모드, opacity 0.3, 필터 무채색 제거와 콘솔 오류 없음 확인"
          ],
          "body": "# 인벤토리와 아이템 개념\n\n## 기획 배경과 목표\n\nPackBound의 아이템 그림은 육각형 가방 퍼즐에서 실제로 차지할 공간과 같은 방향으로\n읽혀야 합니다. 제작자가 사각형 편집 화면을 보며 육각형 게임 결과를 추측하거나, 그림을\n회전해 다시 내보낼 때마다 위치를 별도로 맞추면 아이템 실루엣과 점유 규칙이 쉽게\n어긋납니다.\n\n이번 변경의 목표는 ItemDB 자체를 게임의 육각형 공간 언어에 맞추는 것입니다. 아이템\n제작자는 한 화면에서 점유 칸, 이미지 위치와 배율, 기준 회전각을 함께 조정하고 저장된\n값을 위키와 게임 생성 데이터에 전달할 수 있습니다.\n\n## 사용자 경험\n\n- ItemDB의 점유 형태와 편집기는 flat-top 육각형으로 표시됩니다.\n- 편집기는 중심을 포함한 반지름 2의 19칸을 제공하고, 선택한 칸은 여섯 변 연결 규칙으로\n  검사합니다.\n- 이미지 회전각을 직접 입력하거나 `−60°`, `+60°` 버튼으로 빠르게 조정할 수 있습니다.\n- `칸 설정하기` 상태에서는 배치한 이미지가 70% 투명한 참조 레이어로 남아, 그림\n  실루엣을 보면서 칸을 고를 수 있습니다.\n- 저장 후 같은 기준 회전각이 ItemDB 목록 이미지와 게임용 레이아웃 데이터에 반영됩니다.\n\n## 핵심 원칙과 설계 철학\n\n### 편집 화면과 게임이 같은 공간 계약을 사용한다\n\n격자 구조는 `HexAxialFlatTop`, 점유 좌표는 정수 axial `(Q, R)`, 배치 회전은\n`0/60/120/180/240/300`도로 고정했습니다. 연결 검사도 사각형의 상하좌우가 아니라\n육각형의 여섯 이웃을 사용합니다.\n\n### 칸을 고를 때 그림은 사라지지 않는다\n\n칸 버튼의 선택 상태가 우선 읽혀야 하지만, 그림과 칸의 관계도 동시에 판단할 수 있어야\n합니다. 따라서 칸 설정 모드에서는 이미지 입력을 잠그고 불투명도만 `0.3`으로 낮췄습니다.\n무채색 필터는 사용하지 않아 아이템 고유 색과 실루엣을 참고 정보로 보존합니다.\n\n### 생성 데이터는 호환성을 끊지 않고 확장한다\n\n게임용 레이아웃은 새 `HexFootprintCells`, `GridTopology`, `IconRotation`을\n내보냅니다. 현재 사각형 런타임은 검증된 기존 fallback `Shape`로 계속 동작하고,\n육각형 런타임은 같은 생성물의 axial 필드를 사용할 수 있어 편집기 전환이 별도 시스템을\n갑자기 깨뜨리지 않습니다.\n\n## 결정 사항과 범위\n\n기존 직사각형 점유 형태는 육각형 연결과 최대 Q·R·S 축 길이 5에 맞게 정리했습니다.\n이미지 회전은 자유 각도 값을 저장하되 빠른 조작은 육각형 방향과 같은 60도 단위로\n제공합니다. 이번 범위는 ItemDB 제작 도구와 생성 데이터 계약이며, 가방 배치 로직이나\n게임 화면 전체를 새로 설계하는 작업은 포함하지 않습니다.\n\n## 현재 결과\n\n![칸 설정 모드의 육각형 ItemDB 편집기](./media/inventory-item-concept/v006/itemdb-hex-editor-cell-mode.jpg \"포켓 네일건 이미지가 70% 투명한 참조 레이어로 남아 선택한 세 육각 칸과 겹쳐 보이는 최종 편집 화면\")\n\n포켓 네일건 편집 화면에서 19칸 육각형 보드, 세 칸 점유 형태, 회전 조작과 반투명 참고\n이미지를 동시에 확인할 수 있습니다. 선택 칸은 선명하게 유지되고 이미지는 입력을 받지\n않으므로 터치나 클릭이 점유 칸 조작으로 전달됩니다.\n\n## 구현 참고\n\n`tools/item_db.py`는 카탈로그의 axial 좌표와 레이아웃의 이미지 배율·오프셋·회전을\n검증한 뒤 웹 데이터와 Roblox용 생성물을 함께 만듭니다. 브라우저 편집기는 같은 육각형\n중심 계산으로 셀 위치, 이미지 경계와 저장 오프셋을 계산합니다. 서버 저장 단계에서도\n편집 반경, 중복, 여섯 변 연결과 Q·R·S 축 범위를 다시 검사합니다.\n\n게임 카탈로그는 생성된 기준 회전각을 선택 상세 이미지, 배치 이미지, 보관 이미지와\n드래그 고스트에 합성할 수 있도록 전달합니다. 플레이 중 배치 회전은 기존 회전값에 기준\n회전각을 더하므로 아이템 아트의 원래 방향을 잃지 않습니다.\n\n## 검증\n\nItemDB 생성·최신성 검사, Python과 Node 회귀 테스트, JavaScript 구문 검사와 Rojo 빌드를\n통과했습니다. 위키 생성·최신성 검사와 위키 단위 테스트도 통과했습니다.\n\n로컬 브라우저에서는 포켓 네일건 편집기를 `칸 설정하기` 상태로 전환해 스테이지 모드가\n`cells`, 이미지 계산 불투명도가 `0.3`, 포인터 입력이 비활성인지 확인했습니다.\n기존 무채색 필터는 제거됐고 브라우저 콘솔 오류도 없었습니다.\n\n## 후속 기획\n\n- 새 아이템 이미지는 ItemDB에서 육각 점유 칸, 위치, 배율과 기준 회전을 함께 승인합니다.\n- 아이템 변경 후에는 ItemDB 생성·검사와 게임용 생성 데이터 최신성 검사를 항상 같은\n  완료 조건으로 취급합니다.\n- 향후 육각형 게임 화면 전환은 `HexFootprintCells`를 직접 소비하되, 별도 검증이 끝날\n  때까지 현재 사각형 배치의 fallback footprint를 유지합니다.\n",
          "source_path": "wiki/content/pages/inventory-item-concept/v006.md",
          "timeline_order": 22
        },
        {
          "id": "inventory-item-concept",
          "title": "인벤토리와 아이템 개념",
          "summary": "아이템의 크기와 실루엣을 격자 플레이에 맞게 다시 정리하고, ItemDB를 게임·위키 이미지의 단일 최신 원본으로 고정했습니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "inventory",
            "item",
            "backpack",
            "item-db",
            "ui",
            "asset-lifecycle",
            "responsive"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-07",
          "authors": [
            "Codex"
          ],
          "version": 5,
          "change_type": "updated",
          "change_summary": "과도하거나 의미가 불명확한 아이템 둘을 폐기하고, 포켓 네일건과 배달부 반망토 재킷을 작은 격자 형태로 재설계해 게임과 위키가 같은 최신 데이터를 사용하도록 연결했습니다.",
          "supersedes": "inventory-item-concept@v004",
          "sources": [
            "AGENTS.md",
            "README.md",
            "Assets/Items/InventoryIcons/Equipment/Outfits/armor_courier_cape_jacket.png",
            "Assets/Items/InventoryIcons/Weapons/Guns/weapon_pocket_nailgun.png",
            "Assets/UI/Backpack/uploaded_asset_ids.json",
            "docs/gameplay/inventory-item-art-catalog.md",
            "docs/gameplay/inventory-item-layouts.json",
            "src/ReplicatedStorage/BackpackUI/Assets.luau",
            "src/ReplicatedStorage/BackpackUI/GeneratedItemLayouts.luau",
            "src/ReplicatedStorage/BackpackUI/ItemCatalog.luau",
            "src/ReplicatedStorage/BackpackUI/Screen.luau",
            "tests/test_item_db.py",
            "tools/item_db.py",
            "wiki/site/app.js",
            "wiki/site/item-db-data.js",
            "wiki/content/media/inventory-item-concept/v005/pocket-nailgun-concept.png",
            "wiki/content/media/inventory-item-concept/v005/courier-cape-jacket-concept.png",
            "wiki/content/media/inventory-item-concept/v005/itemdb-redraw-result.jpg",
            "wiki/content/media/inventory-item-concept/v005/studio-item-redraw-result.png"
          ],
          "related": [
            "development-wiki",
            "backpack-combat-stat-database",
            "project-overview"
          ],
          "validation": [
            "python3 tools/item_db.py build",
            "python3 tools/item_db.py check",
            "python3 -m unittest tests.test_item_db",
            "node tests/item-db.spec.js",
            "rojo build packbound.project.json --output /tmp/PackBound-item-redraw-final.rbxlx",
            "로컬 위키 ItemDB에서 해시가 포함된 최신 이미지 URL과 폐기 아이템 제외 확인",
            "Roblox Studio MCP HD 1080 PC 플레이에서 새 아이템 이미지와 배치 확인",
            "Roblox Studio MCP iPhone 17 Pro 및 Galaxy A06 세로 플레이에서 터치 경로와 안전 영역 확인"
          ],
          "body": "# 인벤토리와 아이템 개념\n\n## 기획 배경과 목표\n\nPackBound의 아이템 이미지는 예쁜 개별 일러스트이면서 동시에 제한된 백팩 공간을\n판단하게 만드는 게임 정보입니다. 실루엣이 무엇인지 읽히지 않거나 아이템의 역할에 비해\n지나치게 많은 칸을 차지하면, 플레이어는 수납 결정을 재미있는 선택이 아니라 불합리한\n제약으로 받아들이게 됩니다.\n\n이번 목표는 아이템의 설정과 격자 점유 형태, 실제 게임 이미지가 한 의미를 전달하게\n맞추는 것입니다. 품질 기준에 맞지 않는 아이템은 단순히 숨겨 둔 채 남기지 않고 현재\n목록에서 폐기하며, 유지할 아이템은 작은 크기에서도 정체성과 방향이 즉시 읽히도록\n다시 설계했습니다. 또한 이후 아이템 변경이 게임에는 적용됐지만 위키에는 과거 이미지로\n남는 일을 막기 위해 ItemDB를 두 표면의 공통 최신 원본으로 정했습니다.\n\n## 사용자 경험\n\n- 포켓 네일건은 총구와 손잡이가 분명한 `ㄱ`자 3칸 아이템으로 보입니다.\n- 배달부 반망토 재킷은 망토 끝 때문에 불필요하게 넓어지지 않는 2×2, 4칸 방어구로\n  보입니다.\n- 점프잭 해머와 세탁기 드럼포는 아이템 목록, ItemDB와 게임 카탈로그에서 보이지\n  않습니다.\n- 기획자가 ItemDB에서 바꾼 점유 칸과 이미지 조정값은 생성된 게임 레이아웃에 반영되고,\n  위키는 브라우저 캐시와 관계없이 최신 이미지 판본을 표시합니다.\n- PC와 세로형 모바일 모두에서 새 실루엣, 선택 칸과 주요 조작을 같은 의미로 읽을 수\n  있습니다.\n\n## 핵심 원칙과 설계 철학\n\n### 격자 크기는 아이템의 재미와 의미에 비례한다\n\n큰 아이템은 강한 선택 압력을 만들기 때문에 크기 자체가 밸런스 값입니다. 따라서 단순히\n그림이 큰 것을 이유로 많은 칸을 부여하지 않습니다. 포켓 네일건은 휴대 공구라는 이름과\n역할에 맞춰 3칸으로, 반망토 재킷은 몸에 착용하는 외투의 덩어리를 유지하면서도 4칸으로\n제한했습니다.\n\n### 약한 콘셉트는 호환성 명목으로 제품 목록에 남기지 않는다\n\n8칸이 과도한 점프잭 해머와 이미지 의미가 불명확한 세탁기 드럼포는 현재 아이템\n계약에서 제거했습니다. 소스 이미지, 위키 미디어와 데이터 항목을 함께 정리해 오래된\n리소스가 다시 노출될 여지를 줄였습니다.\n\n### ItemDB가 편집 원본이고 게임과 위키는 그 결과물이다\n\n아이템 아트 카탈로그와 레이아웃 데이터가 활성 아이템, 점유 칸, 이미지 배율과 위치를\n소유합니다. 생성 과정은 이 데이터를 Roblox용 `GeneratedItemLayouts`와 위키용\n`item-db-data.js`로 동시에 변환합니다. 이미지 URL에는 파일 내용 해시를 붙여 같은\n파일명으로 그림을 교체해도 브라우저가 이전 판본을 재사용하지 않게 했습니다.\n\n### 아이템 변경의 완료 조건에는 데이터 최신화가 포함된다\n\n앞으로 아이템을 추가·수정·폐기할 때 ItemDB 생성과 검사, 게임 레이아웃 생성물, 위키\n미디어가 함께 최신인지 확인해야 합니다. 이 규칙은 작업자 기억에만 의존하지 않도록\n저장소 작업 지침과 README에 명시했습니다.\n\n## 결정 사항과 범위\n\n`weapon.jumpjack_hammer`와 `weapon.washer_drum_cannon`은 활성 카탈로그 및 레이아웃\n데이터에서 제거하고 기존 PNG도 삭제했습니다. `weapon.pocket_nailgun`은 오른쪽 아래로\n손잡이가 이어지는 `■■/□■` 점유 형태로 바꿨고 새 Roblox Image ID\n`rbxassetid://72363117083279`를 연결했습니다. `armor.courier_cape_jacket`은 2×2 점유\n형태와 새 이미지로 교체하고 `rbxassetid://87146137876065`를 연결했습니다.\n\nRoblox 클라우드에 남은 이전 포켓 네일건 이미지는 프로젝트의 등록부와 런타임 참조에서\n제거했습니다. Creator Dashboard가 해당 Image에 보관 기능을 제공하지 않으므로 클라우드\n원본 자체를 삭제했다고 간주하지 않으며, 제품에서는 참조하지 않는 상태로 관리합니다.\n\n## 시안과 현재 결과\n\n![포켓 네일건 재설계 시안](./media/inventory-item-concept/v005/pocket-nailgun-concept.png \"작은 크기에서도 총구와 손잡이 방향이 읽히는 포켓 네일건\")\n\n포켓 네일건은 가로 본체와 아래 손잡이를 강조해 `ㄱ`자 3칸 점유 형태가 그림과\n일치하도록 만들었습니다.\n\n![배달부 반망토 재킷 재설계 시안](./media/inventory-item-concept/v005/courier-cape-jacket-concept.png \"망토의 특징은 남기고 2×2 안에 정리한 배달부 반망토 재킷\")\n\n반망토의 비대칭 인상은 유지하되 돌출된 천이 칸 수를 늘리지 않도록 외투 전체를 2×2\n실루엣 안에 정리했습니다.\n\n![ItemDB 최신 이미지와 3칸 배치](./media/inventory-item-concept/v005/itemdb-redraw-result.jpg \"내용 해시가 적용된 최신 포켓 네일건과 ㄱ자 3칸 선택 상태\")\n\n위키 ItemDB는 새 포켓 네일건 이미지, 3칸 점유와 현재 게임 적용 상태를 함께 보여 줍니다.\n폐기한 두 아이템은 검색과 목록에서 제외됩니다.\n\n![Roblox Studio 새 아이템 적용 결과](./media/inventory-item-concept/v005/studio-item-redraw-result.png \"Studio 플레이 화면에 적용된 2×2 재킷과 ㄱ자 포켓 네일건\")\n\n게임의 기본 백팩에도 새 반망토 재킷과 포켓 네일건을 배치해 데이터 연결과 실제 렌더링을\n동시에 확인했습니다.\n\n## 구현 참고\n\n`tools/item_db.py`는 활성 카탈로그와 레이아웃을 검증한 뒤 게임용 Luau, 위키 데이터와\n미디어를 한 번에 생성합니다. 위키 데이터는 표시용 `image_url`과 동기화 검사용\n`media_path`를 분리해 해시 쿼리가 파일 경로 비교를 방해하지 않게 했습니다.\n\n게임에서는 `Assets.luau`가 새 Roblox Image ID를 소유하고, `ItemCatalog.luau`가 아이템\n정의와 능력치를, `GeneratedItemLayouts.luau`가 ItemDB에서 생성한 점유 형태와 이미지\n조정값을 사용합니다. 기본 데모 배치도 재킷과 네일건을 포함해 연결 실패가 즉시 보이게\n구성했습니다.\n\n## 검증\n\nItemDB 생성·검사와 Python·Node 회귀 테스트를 통과했고, PackBound Rojo 프로젝트를\n빌드했습니다. 로컬 위키에서 포켓 네일건과 반망토 재킷의 URL에 파일 내용 해시가 붙고,\n새로 고친 뒤에도 최신 이미지가 표시되며 폐기 아이템이 검색되지 않는 것을 확인했습니다.\n\nRoblox Studio MCP 플레이에서는 HD 1080 PC 뷰포트에서 두 아이템의 새 이미지와 점유\n형태를 확인했습니다. iPhone 17 Pro 세로 401×776과 Galaxy A06 세로 359×718에서도\n상단 안전 영역, 텍스트, 선택 상태와 터치 동등 조작 경로에 겹침이나 잘림이 없었습니다.\n출력창에는 아이템·백팩 UI 오류가 없었고, 별도 개발 플러그인인\n`WeaponAnimationTester`의 기존 모듈 경고만 남았습니다.\n\n## 후속 기획\n\n- 아이템 설정 변경은 카탈로그와 레이아웃을 먼저 수정하고 ItemDB 생성·검사를 완료한\n  뒤 게임과 위키 결과를 승인합니다.\n- 큰 점유 형태를 부여할 때는 그림 크기가 아니라 플레이 선택에 주는 압력과 아이템의\n  역할을 함께 근거로 남깁니다.\n- Roblox 이미지를 같은 이름으로 교체할 때도 새 ID와 내용 해시가 모두 갱신됐는지\n  확인합니다.\n",
          "source_path": "wiki/content/pages/inventory-item-concept/v005.md",
          "timeline_order": 18
        },
        {
          "id": "inventory-item-concept",
          "title": "인벤토리와 아이템 개념",
          "summary": "백팩 UI의 실제 소비 에셋과 생성 원본을 일치시키고, 이후 모든 UI 변경을 PC와 모바일에서 함께 완성하도록 검증 기준을 고정했습니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "inventory",
            "item",
            "backpack",
            "ui",
            "asset-lifecycle",
            "responsive",
            "pc",
            "mobile"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-06",
          "authors": [
            "Codex"
          ],
          "version": 4,
          "change_type": "updated",
          "change_summary": "사용되지 않는 백팩 UI 에셋을 생성기·매니페스트·런타임 등록부에서 함께 제거하고 PC·모바일 동시 검증을 UI 완료 조건으로 명문화했습니다.",
          "supersedes": "inventory-item-concept@v003",
          "sources": [
            "AGENTS.md",
            "Assets/UI/Backpack/asset_cleanup_audit.md",
            "Assets/UI/Backpack/asset_manifest.json",
            "Assets/UI/Backpack/uploaded_asset_ids.json",
            "tools/generate_backpack_ui_assets.py",
            "src/ReplicatedStorage/BackpackUI/Assets.luau",
            "src/ReplicatedStorage/BackpackUI/Screen.luau"
          ],
          "related": [
            "development-wiki",
            "backpack-combat-stat-database",
            "project-overview"
          ],
          "validation": [
            "python3 tools/generate_backpack_ui_assets.py",
            "luau-compile로 BackpackUI ModuleScript 문법 검증",
            "rojo build default.project.json --output /tmp/packbound-cleanup-default.rbxlx",
            "rojo build packbound.project.json --output /tmp/packbound-cleanup-packbound.rbxlx",
            "Roblox Studio MCP PC Average Laptop 1366x765 플레이 검증",
            "Roblox Studio MCP Samsung Galaxy S25 Ultra 세로 1079x1878 플레이 검증",
            "Roblox Creator Dashboard에서 Image 에셋의 보관 기능 미제공 확인"
          ],
          "body": "# 인벤토리와 아이템 개념\n\n## 기획 배경과 목표\n\nPackBound의 백팩은 장식 이미지가 많은 화면이지만, 실제 플레이 경험은 격자와 아이템을\n즉시 읽고 PC와 모바일 어디서든 같은 행동을 수행하는 데 달려 있습니다. 사용하지 않는\n이미지가 생성기와 Roblox 등록부에 계속 남으면 어떤 에셋이 제품 계약인지 판단하기\n어려워지고, 다음 수정에서 과거 이미지를 다시 연결하거나 불필요한 업로드를 반복할 수\n있습니다.\n\n이번 목표는 화면을 바꾸는 것이 아니라 현재 백팩 UI가 사용하는 에셋만 명확한 제품\n원본으로 남기는 것입니다. 동시에 앞으로의 UI 작업은 데스크톱과 모바일을 별도\n완성 대상으로 보고 두 환경을 모두 검증해야 종료할 수 있도록 프로젝트 규칙을\n강화했습니다.\n\n## 사용자 경험\n\n- 플레이어가 보는 백팩의 외형, 아이템 배치, 선택 상태와 조작 흐름은 그대로 유지됩니다.\n- PC에서는 넓은 16:9 화면 안에 읽기 좋은 데스크톱 배율로 중앙 배치됩니다.\n- 모바일에서는 세로 화면과 안전 영역에 맞춰 백팩이 크게 표시되고 상단 정보와 닫기\n  버튼이 Roblox Core UI에 가려지지 않습니다.\n- 제거된 에셋 때문에 빈 이미지, 잘못된 버튼 상태나 로딩 경고가 나타나지 않습니다.\n\n## 핵심 원칙과 설계 철학\n\n### 제품에서 쓰는 에셋만 런타임 계약으로 유지한다\n\n로컬 PNG만 지우거나 코드의 ID만 지우는 반쪽 정리는 허용하지 않습니다. 에셋을 제거할\n때는 생성기, 생성 매니페스트, Roblox ID 등록부와 Luau 런타임 선언을 한 단위로\n갱신합니다. 이후 생성기를 다시 실행해도 삭제된 파일이 되살아나지 않아야 합니다.\n\n### 계획된 상태와 편집 원본은 미사용 에셋과 구분한다\n\n현재 화면에서 직접 쓰지 않는다고 모두 삭제하지 않습니다. 잠긴 칸과 경고 상태에\n필요한 `lock`, `warning` 아이콘은 기획된 기능 자산으로 유지했습니다. 두 대형 프레임의\n크로마 이미지는 Roblox 런타임 에셋이 아니라 최종 프레임을 다시 만들기 위한 편집\n원본이므로 로컬에 남깁니다.\n\n### PC와 모바일은 하나의 캔버스 배율이 아니라 두 개의 완성 조건이다\n\nPC는 넓은 화면, 마우스와 키보드, 높은 정보 밀도를 기준으로 창 크기와 배율을\n결정합니다. 모바일은 현재 뷰포트, 세로 비율, 안전 영역과 터치 크기를 기준으로\n동적으로 구성합니다. 한 환경에서만 맞는 UI는 완료로 판단하지 않으며, Roblox Studio\nMCP의 대표 PC와 최신 세로 휴대폰 플레이 검증을 필수 관문으로 둡니다.\n\n## 결정 사항과 범위\n\n실제 소비가 없던 둥근 주황 버튼의 기본·눌림 이미지와 좌상단 뒤로가기 아이콘을\n제거했습니다. 이 세 파일은 생성기, `asset_manifest.json`,\n`uploaded_asset_ids.json`, `Assets.luau`에서도 함께 분리했습니다. 생성 결과는 버튼\n스킨 20개, 아이콘 19개, 타일 5개이며 이 가운데 런타임 소비 에셋은 44개입니다.\n\n현재 미사용이지만 기획에 필요한 아이콘 2개와 프레임 편집 원본 2개는 유지했습니다.\n이 구분과 Roblox ID 목록은 `asset_cleanup_audit.md`에 기록해 다음 정리에서 같은 조사를\n반복하지 않도록 했습니다.\n\n## Roblox 클라우드 에셋 정책\n\n프로젝트에서 분리된 Roblox Image ID는 모두 저장소와 현재 Studio DataModel에서 참조가\n없습니다. 그러나 소유 계정의 Creator Dashboard에서 이 시스템 생성 Image 카드에\n제공되는 작업은 에셋 상세 열기와 ID 복사뿐이며 Archive가 없습니다. Open Cloud의\n보관 API도 API 키 또는 OAuth 2.0 인증이 필요하지만 이 프로젝트에는 해당 인증이\n구성되어 있지 않습니다.\n\n따라서 로컬과 런타임 연결은 제거했지만 Roblox 클라우드의 25개 고아 Image는 보관하지\n못했습니다. 이 상태를 삭제 성공으로 가장하지 않고 감사 문서에 ID와 제한을 남겼습니다.\n추후 Roblox가 Image 보관 UI를 제공하거나 소유자가 전용 Open Cloud 인증 정책을\n승인하면 별도 정리 작업으로 처리합니다.\n\n## 검증\n\n에셋 생성기를 다시 실행해 삭제한 세 PNG가 재생성되지 않는 것을 확인했습니다. Backpack\nUI Luau 모듈은 컴파일됐고 기본·PackBound Rojo 프로젝트가 모두 빌드됐습니다.\n\nRoblox Studio MCP 플레이에서 일반 노트북 프리셋의 1366x765 뷰포트와 Samsung Galaxy\nS25 Ultra 세로 모드의 1079x1878 뷰포트를 각각 확인했습니다. 두 환경 모두 백팩 프레임,\n탭, 격자 타일, 상태 버튼과 아이콘이 빠짐없이 표시됐습니다. 모바일에서는 상단 정보와\n닫기 버튼이 안전한 중앙·우측 영역에 유지됐습니다. 출력창에는 Backpack UI 에셋 오류가\n없었고, 별도 개발 플러그인인 `WeaponAnimationTester`의 기존 모듈 경고만 남았습니다.\n\n## 후속 기획\n\n- 잠긴 칸 확장과 부족 재화 경고를 구현할 때 유지한 `lock`, `warning` 에셋을 우선\n  사용하고 실제 소비 여부를 다시 매니페스트에 반영합니다.\n- 새 버튼이나 아이콘은 기본·눌림 상태, 투명 배경, 재사용 가능한 조각과 런타임 텍스트\n  분리 원칙을 유지합니다.\n- UI 완료 보고에는 검증한 PC 뷰포트와 모바일 기기·방향, 입력 경로와 출력창 결과를\n  항상 남깁니다.\n",
          "source_path": "wiki/content/pages/inventory-item-concept/v004.md",
          "timeline_order": 14
        },
        {
          "id": "inventory-item-concept",
          "title": "인벤토리와 아이템 개념",
          "summary": "아이템의 점유 칸과 이미지 배치를 로컬 ItemDB에서 직접 조정하고, 검증된 저장 결과가 동일한 원본을 통해 게임 인벤토리에 적용되도록 연결했습니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "inventory",
            "item",
            "backpack",
            "grid",
            "footprint",
            "itemdb",
            "editor",
            "runtime"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-06",
          "authors": [
            "Codex"
          ],
          "version": 3,
          "change_type": "updated",
          "change_summary": "아이콘과 점유 형태를 눈으로 맞추는 로컬 편집 흐름을 만들고, 저장된 연결형 칸·배율·위치를 게임 UI가 사용하는 생성 데이터로 이어 붙였습니다.",
          "supersedes": "inventory-item-concept@v002",
          "sources": [
            "docs/gameplay/inventory-item-art-catalog.md",
            "docs/gameplay/inventory-item-layouts.json",
            "tools/item_db.py",
            "wiki/site/item-db.js",
            "wiki/site/item-db-data.js",
            "src/ReplicatedStorage/BackpackUI/GeneratedItemLayouts.luau",
            "src/ReplicatedStorage/BackpackUI/ItemCatalog.luau",
            "src/ReplicatedStorage/BackpackUI/GridModel.luau",
            "src/ReplicatedStorage/BackpackUI/Screen.luau",
            "tests/test_item_db.py",
            "tests/item-db.spec.js",
            "wiki/content/media/inventory-item-concept/v003/inventory-concept.png",
            "wiki/content/media/inventory-item-concept/v003/itemdb-layout-editor-result.jpg",
            "wiki/content/media/inventory-item-concept/v003/studio-backpack-runtime-result.jpg"
          ],
          "related": [
            "development-wiki",
            "backpack-combat-stat-database",
            "project-overview"
          ],
          "validation": [
            "python3 tools/item_db.py build",
            "python3 tools/item_db.py check",
            "python3 -m unittest tests.test_item_db",
            "node --test tests/item-db.spec.js",
            "luau-compile --null로 BackpackUI ModuleScript와 bootstrap 문법 검증",
            "rojo build default.project.json --output /tmp/packbound-itemdb-default.rbxlx",
            "rojo build packbound.project.json --output /tmp/packbound-itemdb-packbound.rbxlx",
            "Roblox Studio MCP 플레이에서 PackBoundBackpackGui 로드와 다칸 아이템 배치 확인",
            "브라우저에서 로컬 Edit 32개, 5x5 편집기와 선택 칸 표시 확인"
          ],
          "body": "# 인벤토리와 아이템 개념\n\n## 기획 배경과 목표\n\nPackBound의 아이템은 그림과 점유 칸이 따로 노는 데이터가 아니라, 외형 자체가 공간\n퍼즐의 규칙을 설명해야 합니다. 32종 아이콘과 칸 배열을 표로 확정한 뒤에는 실제 UI에서\n이미지가 칸 중심과 미세하게 어긋나거나 실루엣에 맞는 점유 형태를 다시 조정해야 하는\n운영 단계가 남습니다. 이 조정을 코드 좌표로만 반복하면 기획자가 결과를 즉시 확인하기\n어렵고 이미지와 게임 데이터가 다시 갈라질 위험이 있습니다.\n\n이번 목표는 아이템을 눈으로 보면서 배율, 위치와 점유 칸을 한 화면에서 맞추고, 저장한\n최종 결과만 게임에 적용하는 것입니다. 편집 도구는 로컬 개발 환경에 두고 공개 위키는\n카탈로그를 읽는 용도로 제한합니다.\n\n## 사용자 경험\n\n- ItemDB의 각 아이템에서 `Edit`을 누르면 선택한 아이콘과 5x5 칸 편집기가 열립니다.\n- 이미지 배율 숫자를 바꾸면 즉시 크기가 변하고, 이미지를 드래그해 칸 기준 위치를\n  조정할 수 있습니다.\n- `칸 설정하기`를 누르면 이미지는 반투명·비선택 상태가 되고 바닥 칸만 선택됩니다.\n- 저장 전에 점유 칸 없음, 5칸 범위 초과, 대각선으로만 분리된 영역을 명확한 오류로\n  막습니다.\n- 저장된 배율·위치·점유 형태는 다음 위키 빌드와 게임 인벤토리에서 같은 결과로\n  재현됩니다.\n\n## 핵심 원칙과 설계 철학\n\n### 시각 조정과 규칙 검증을 한 흐름으로 묶는다\n\n아이콘 배치는 눈으로 조정하지만 점유 형태는 게임 규칙을 따라야 합니다. 선택 칸은 한\n칸 이상이어야 하며 가로·세로 각각 5칸을 넘을 수 없고 모든 칸이 상하좌우로 연결되어야\n합니다. 대각선 접촉만으로는 하나의 아이템으로 인정하지 않습니다.\n\n### 저장 전에는 게임을 바꾸지 않는다\n\n편집기를 열거나 값을 시험하는 동안에는 기존 게임 배치가 유지됩니다. `저장`이 성공한\n아이템만 명시적인 override가 되어 런타임 기본값 위에 적용됩니다. 중간 조정이 게임에\n새어 들어가지 않아 시각 실험과 제품 상태를 분리합니다.\n\n### 원본은 하나이고 출력은 용도별로 생성한다\n\n점유 칸은 아이템 아트 카탈로그, 배율·상대 위치는 작은 layout 문서가 소유합니다.\n생성기는 두 원본을 결합해 위키용 ItemDB와 게임용 Luau 데이터를 만듭니다. 브라우저와\n게임이 서로 다른 수기 값을 갖지 않으므로 한 번 저장한 최종 배치를 같은 방식으로\n검증할 수 있습니다.\n\n## 결정 사항과 범위\n\n편집 권한은 `localhost`, `127.0.0.1`, 로컬 IPv6 주소에서만 허용합니다. 공개 위키에는\n아이템 이미지, 제원과 점유 형태는 보이지만 `Edit` 열, 편집 팝업과 저장 API는 없습니다.\n저장 API도 로컬 Host·Origin과 JSON 요청을 확인합니다.\n\n편집 캔버스는 현재 게임의 최대 아이템 범위에 맞춰 5x5로 고정했습니다. 임의 회전,\n아이템 능력치 편집과 신규 아이템 생성은 이번 범위에 포함하지 않습니다. 이 기능은\n이미 존재하는 아이템의 이미지 배치와 점유 형태를 안전하게 조정하는 도구입니다.\n\n## 시안과 현재 결과\n\n![모바일 백팩 인벤토리 시안](./media/inventory-item-concept/v003/inventory-concept.png \"상단 자원, 중앙 다칸 격자, 하단 아이템 목록으로 구성한 승인 시안\")\n\n시안의 핵심은 아이템 실루엣과 점유 칸을 중앙 격자에서 동시에 읽는 구조입니다. 로컬\n편집기는 같은 원칙을 운영 도구로 옮겨 이미지와 칸을 한 화면에서 직접 맞춥니다.\n\n![로컬 ItemDB 칸 편집기](./media/inventory-item-concept/v003/itemdb-layout-editor-result.jpg \"안테나 리커브 보우의 배율, 이미지 위치와 여섯 연결 칸을 함께 조정하는 로컬 전용 편집 화면\")\n\n![Roblox Studio 인벤토리 적용 결과](./media/inventory-item-concept/v003/studio-backpack-runtime-result.jpg \"Studio 플레이에서 아이템 이미지와 다칸 점유 형태가 동일한 배치 계약으로 표시된 최종 결과\")\n\n현재 게임 인벤토리는 승인 시안의 정보 계층을 유지하면서 6x6 보드, 열린 칸, 아이템\n점유 형태, 선택 아이템 정보와 하단 목록을 표시합니다. ItemDB에서 저장된 아이템은\n생성된 layout을 사용하고 아직 저장하지 않은 아이템은 검증된 기존 런타임 기본값을\n사용합니다.\n\n## 구현 참고\n\n`tools/item_db.py`는 32종 카탈로그의 ID, 이미지, 256픽셀 칸 단위, 좌표 연결성과 크기\n계약을 검증합니다. 로컬 저장 요청은 선택 좌표를 좌상단 원점으로 정규화하고 카탈로그의\n상세·요약 배열과 layout 문서를 함께 갱신한 뒤 위키 데이터와\n`GeneratedItemLayouts.luau`를 다시 생성합니다. 실패하면 원본을 복구해 반쪽 저장을\n남기지 않습니다.\n\n게임에서는 `ItemCatalog`가 저장된 생성 layout을 우선 사용하고 기존 형태를 fallback으로\n유지합니다. `Screen`은 배율, 상대 위치, 이미지 캔버스 크기와 점유 좌표를 함께 사용해\n보드와 하단 아이템 카드에 동일한 실루엣을 배치합니다.\n\n## 검증\n\nPython과 JavaScript 테스트로 빈 선택, 대각선 분리, 5x5 범위 밖 좌표, 중복 좌표와 잘못된\n배율을 거부하는지 확인했습니다. 카탈로그 32행, 실제 PNG, 점유 패턴과 좌표, 생성된\n게임 layout이 서로 일치하는지도 검사했습니다.\n\n브라우저에서 로컬 ItemDB의 32개 `Edit` 버튼, 5x5 편집기, 선택 아이템 이미지, 배율 입력,\n여섯 선택 칸과 저장 규칙을 확인했습니다. Roblox Studio MCP 플레이에서는\n`PackBoundBackpackGui`가 로드되고 여러 형태의 아이템이 연결된 다칸 영역에 표시되는 것을\n확인했습니다.\n\n## 후속 기획\n\n- 실제 밸런스 조정에서 아이템 크기가 바뀔 때 능력치·희귀도와 점유 비용을 함께 검토합니다.\n- 회전별 별도 이미지가 필요해질 때 현재 단일 방향 계약을 확장하되 동일한 연결성 검증을\n  유지합니다.\n- 신규 아이템 생성은 이미지 제작, ID·태그·능력치 승인과 점유 편집을 하나의 별도 등록\n  흐름으로 설계합니다.\n",
          "source_path": "wiki/content/pages/inventory-item-concept/v003.md",
          "timeline_order": 12
        },
        {
          "id": "inventory-item-concept",
          "title": "인벤토리와 아이템 개념",
          "summary": "아이템 외형만 보고도 점유 공간을 예측할 수 있도록 32종의 최종 아이콘과 연결형 칸 배열을 하나의 아트·배치 계약으로 확정했습니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "inventory",
            "item",
            "backpack",
            "grid",
            "footprint",
            "icon",
            "art-direction"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-06",
          "authors": [
            "Codex"
          ],
          "version": 2,
          "change_type": "updated",
          "change_summary": "아이콘의 실제 실루엣과 점유 칸이 자연스럽게 대응하도록 32종 카탈로그를 완성하고, 배열 조정으로 해결되지 않는 4종만 다시 구성했습니다.",
          "supersedes": "inventory-item-concept@v001",
          "sources": [
            "docs/gameplay/inventory-item-concept.md",
            "docs/gameplay/inventory-item-art-catalog.md",
            "Assets/Items/InventoryIcons"
          ],
          "related": [
            "project-overview"
          ],
          "validation": [
            "32종 카탈로그·점유 좌표·PNG 크기·연결성·투명 배경 전수 검증",
            "요약표와 상세표의 32종 이름·칸 배열 교차 검증",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "python3 -m unittest tests/test_wiki.py"
          ],
          "body": "# 인벤토리와 아이템 개념\n\n## 기획 배경과 목표\n\nPackBound의 아이템은 그림과 별개인 사각 카드가 아니라, 외형에 따라 여러 격자 칸을\n점유하는 공간 퍼즐 요소입니다. 플레이어가 아이콘을 보는 순간 어느 정도의 공간을\n차지할지 직관적으로 예상할 수 있어야 배치와 회전이 계산 문제가 아니라 손맛 있는\n정리 경험으로 이어집니다.\n\n이번 기준은 첫 아이템 묶음의 실제 아이콘과 점유 배열을 함께 확정해, 아트와 데이터가\n서로 다른 형태를 설명하는 문제를 막는 데 목적이 있습니다. 시대 배경의 일관성보다\n폐품을 장난감처럼 조합한 밝고 과장된 아트 언어와 한눈에 읽히는 실루엣을 우선합니다.\n\n## 사용자 경험\n\n- 아이템 이미지만 보고도 길쭉함, 넓음, 중심 돌출부와 빈 공간을 대략 예측할 수 있습니다.\n- 신발 한 세트는 좌우 신발이 겹쳐진 하나의 묶음으로 보이며 하나의 아이템으로 취급됩니다.\n- 아이콘 자체에는 인벤토리 칸, 프레임이나 문자를 넣지 않습니다. 칸 표시는 배치 UI가\n  담당하므로 월드 드롭, 상점과 상세 화면에서도 같은 원본 이미지를 재사용할 수 있습니다.\n- 작은 아이템과 큰 아이템의 차이는 단순 확대가 아니라 실제 점유 칸 수와 실루엣 밀도로\n  드러납니다.\n\n## 핵심 원칙과 설계 철학\n\n### 외형이 점유 형태를 설명한다\n\n점유 배열은 아이콘의 알파 실루엣을 기준으로 정합니다. 기존 이미지에 맞는 연결형 배열이\n크기 등급 안에서 가능하면 데이터를 조정하고, 허용 칸 수로 실루엣을 설명할 수 없을 때만\n해당 이미지를 다시 구성합니다. 이미지와 배열을 무조건 동시에 바꾸지 않아 최종 아트의\n정체성을 보존하면서 공간 규칙의 신뢰도를 높입니다.\n\n### 하나의 아이템은 하나의 연결된 덩어리다\n\n`■` 점유 칸은 상하좌우로 연결되어야 합니다. `□`는 실제로 다른 아이템이 사용할 수 있는\n빈 칸이며 장식용 표기가 아닙니다. 배열은 좌상단 `(0, 0)`에 정규화하고 이미지 캔버스는\n칸당 256픽셀 비율을 사용합니다. 초기 콘텐츠의 경계 상자는 최대 4x4를 유지합니다.\n\n### 아트와 UI의 책임을 분리한다\n\n아이콘은 투명 배경의 완전한 아이템만 담습니다. 인벤토리 칸, 선택 상태, 희귀도 프레임,\n텍스트와 배치 가능 여부는 UI 계층이 그립니다. 이 분리로 동일한 PNG를 인벤토리, 보관함,\n상점과 월드 드롭에 재사용할 수 있습니다.\n\n## 결정 사항과 범위\n\n첫 카탈로그는 무기 12종, 장비 12종, 액세서리·특수 아이템 8종으로 총 32종입니다.\n무기와 장비는 작은 2~4칸, 조금 큰 5~6칸, 큰 7~8칸을 사용합니다. 액세서리와 특수\n아이템은 아주 작은 1~2칸, 작은 3~4칸, 조금 큰 5~8칸 중 아이콘의 형태에 맞는 크기를\n개별 지정합니다.\n\n능력 수치는 현재 `ItemStats` 계약을 사용한 밸런스 초안입니다. 이번 범위는 아이콘,\n이름, 콘셉트, 능력 초안과 점유 형태를 확정하는 데 한정하며 런타임 카탈로그 등록이나\n밸런스 확정은 포함하지 않습니다.\n\n## 현재 결과\n\n32종 모두 투명 배경 PNG와 연결형 점유 배열을 가집니다. 이미지 실루엣을 유지하면서\n배열만 조정한 항목은 신호등 식칼, 포켓 네일건, 캔따개 기관단총, 세탁기 드럼포,\n위성접시 장궁, 점프잭 해머, 썬더 앰프 기타와 저주받은 블록 인형입니다.\n\n허용 칸 수 안에서 기존 실루엣을 설명하기 어려웠던 옷걸이 딱궁, 안테나 리커브 보우,\n냉장고 문 판초와 버스정류장 방패는 각각 2x2, 2x3, 4x2와 2x3의 연결된 직사각형\n점유 형태에 맞춰 다시 구성했습니다. 재제작 전 이미지는 정식 파일 경로에 교체되어\n최종 자산 폴더에는 현재 사용하는 32개 PNG만 남습니다.\n\n## 구현 참고\n\n| 산출물 | 역할 |\n| --- | --- |\n| `docs/gameplay/inventory-item-art-catalog.md` | 32종의 ID, 이름, 콘셉트, 능력 초안, 칸 수·배열, 좌표와 이미지 경로 |\n| `Assets/Items/InventoryIcons/` | 무기, 장비, 액세서리와 특수 아이템의 최종 투명 PNG 32개 |\n| `wiki/content/pages/inventory-item-concept/v002.md` | 아이콘과 점유 형태를 함께 저작하는 최종 제품 원칙과 범위 |\n| `wiki/site/data.js` | 위키 소스에서 생성한 읽기 전용 사이트 데이터 |\n\n카탈로그의 `■`은 점유 칸, `□`은 실제 빈 칸이며 `/`는 다음 행을 뜻합니다. 상세표의\n점유 좌표는 배열과 동일한 좌상단 원점을 사용합니다. 모든 아이콘은 `NativeFacing = Up`,\n허용 회전 `[0, 90, 180, 270]`, 기본 최대 스택 1을 공통값으로 사용합니다.\n\n## 검증\n\n카탈로그 32행과 실제 PNG 32개가 일치하는지 확인했습니다. 각 항목의 선언 칸 수,\n`■` 개수, 점유 좌표, 연결성, 크기 등급, 256픽셀 단위 캔버스 크기, RGBA 형식과 투명\n모서리를 전수 검사했습니다. 요약표와 상세표의 이름·배열도 교차 검증했으며 불투명한\n초록 크로마 잔여 픽셀이 없음을 확인했습니다.\n\n## 후속 기획\n\n- 카탈로그 표를 런타임 `ItemDefinition`으로 옮길 때 동일한 점유 좌표 validator를\n  자동화합니다.\n- 인벤토리 UI에서 원본 아이콘 위에 회전된 점유 미리보기를 별도 계층으로 표시합니다.\n- 실제 플레이테스트에서는 칸 수 대비 성능과 획득 빈도를 조정하되 아이콘과 점유 형태의\n  대응 원칙은 유지합니다.\n",
          "source_path": "wiki/content/pages/inventory-item-concept/v002.md",
          "timeline_order": 10
        },
        {
          "id": "inventory-item-concept",
          "title": "인벤토리와 아이템 개념",
          "summary": "모든 인벤토리 아이템의 다중 칸 점유 형태와 회전, 소유 인스턴스, 배치, 보관, 상점 경계를 후속 병렬 제작의 공통 계약으로 정의했습니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "inventory",
            "item",
            "backpack",
            "grid",
            "placement",
            "rotation",
            "storage",
            "shop",
            "architecture"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-06",
          "authors": [
            "Codex"
          ],
          "version": 1,
          "change_type": "created",
          "change_summary": "2024년 인벤토리·상점 기획 화면과 현재 ItemStats 공간 규칙을 통합해 다중 칸 아이템의 데이터·배치·보관·거래 기준을 새로 확정함",
          "supersedes": null,
          "sources": [
            "docs/gameplay/inventory-item-concept.md",
            "docs/gameplay/item-stats.md",
            "src/ReplicatedStorage/ItemStats/Types.luau",
            "src/ReplicatedStorage/ItemStats/ItemTags.luau",
            "src/ReplicatedStorage/ItemStats/BackpackRuleEvaluator.luau"
          ],
          "related": [
            "project-overview"
          ],
          "validation": [
            "Markdown 후행 공백 및 코드 펜스 균형 검사",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "python3 -m unittest tests/test_wiki.py"
          ],
          "body": "# 인벤토리와 아이템 개념\n\n## 결과\n\nPackBound의 인벤토리 아이템은 단일 카드 슬롯이 아니라 외형을 반영한 하나 이상의\n격자 칸을 점유합니다. 검처럼 긴 형태, 갑옷 같은 사각 형태, L자나 T자 형태를 같은\n좌표 계약으로 표현하며 0·90·180·270도 회전으로 배치 선택을 만듭니다.\n\n이 기준은 아이템 목록, 이미지, 데이터, 격자 로직, UI, 보관함과 상점을 여러 작업이\n병렬로 제작할 때 사용하는 공통 계약입니다. 아직 런타임 인벤토리 구현을 완료했다는\n뜻은 아니며, 후속 구현이 지켜야 하는 소유권과 데이터 경계를 먼저 고정합니다.\n\n## 구현 내용\n\n### 아이템 데이터 경계\n\n- `ItemDefinition`은 이름, 태그, 외형, 점유 형태, 회전, 스탯, 공간 규칙과 기준\n  가격을 소유하는 읽기 전용 카탈로그 원형입니다.\n- `ItemInstance`는 플레이어가 실제로 소유한 고유 아이템 또는 스택입니다.\n- `ItemPlacement`는 인스턴스의 Basic Inventory 원점과 회전값만 저장하고 실제\n  점유·효과 칸을 정의에서 파생합니다.\n- `ShopOffer`는 구매 전 상품 제안이며 결제 성공 전에는 아이템 인스턴스나 전투\n  효과로 취급하지 않습니다.\n\n골드, 다이아와 현금 잔액은 지갑 재화이므로 격자 칸을 사용하지 않습니다. 반면\n플레이어가 줍고 옮길 수 있는 장비, 탄약, 소모품, 재료와 보물은 모두 최소 한 칸의\n점유 형태를 가져야 합니다.\n\n### 점유 형태와 회전\n\n- 점유 형태는 좌상단 `(0, 0)`으로 정규화한 중복 없는 정수 좌표 집합입니다.\n- 점유 칸은 상하좌우로 연결된 하나의 덩어리여야 하며 내부 빈 칸은 다른 아이템이\n  사용할 수 있습니다.\n- 회전은 양의 Y가 아래로 증가하는 현재 격자 좌표계에서 시계 방향으로 변환한 뒤\n  다시 좌상단에 정규화합니다.\n- `FootprintCells`, 공간 규칙용 `EffectCells`와 아이콘은 같은 방향으로 회전합니다.\n- 첫 콘텐츠 제작 배치는 초기 4x4 열린 영역에 단독 배치할 수 있도록 경계 상자\n  최대 4x4를 사용합니다. 런타임은 설정된 인벤토리 안의 임의 연결 형태를 처리해야\n  합니다.\n\n기존 평가기의 `ActiveCells`는 열린 인벤토리 칸과 이름이 충돌하므로 저작 문서에서는\n`EffectCells`라고 부릅니다. 배치 계층이 회전·변환한 뒤 현재\n`BackpackRuleEvaluator` 입력의 `ActiveCells`로 전달합니다.\n\n### Basic Inventory와 보관함\n\n- 신규 플레이어는 기본 4x4 열린 영역에서 시작합니다.\n- 아이템의 모든 점유 칸이 열린 영역 안에 있고 다른 아이템과 겹치지 않아야 배치를\n  확정합니다.\n- Basic Inventory에 유효하게 배치된 아이템만 스탯과 공간 시너지를 제공합니다.\n- 장비 보관함은 공간 형태와 무관한 목록형 저장소이며 한 인스턴스 또는 호환 스택이\n  한 보관 슬롯을 사용합니다.\n- 드래그 중, 구매 미확정, 보관함과 초과분 대기열의 아이템은 전투 효과를 내지\n  않습니다.\n\n기존 기획의 보관함 초과 아이템 자동 소멸은 영구 구매 아이템 손실 위험 때문에\n채택하지 않습니다. 병합·빈 슬롯·직접 배치로 해결하지 못한 아이템은\n`PendingOverflow`에 보존하고 다음 로비에서 정리하도록 합니다.\n\n### UI와 거래 경계\n\n배치 UI는 최소 3x3 미리보기를 제공하고 큰 아이템은 형태에 맞게 확장합니다. 열린\n빈 칸, 잠긴 칸, 유효·무효 배치와 효과 칸은 색뿐 아니라 윤곽·패턴·아이콘으로도\n구분합니다. 상점 상품은 직접 드래그하지 않고 구매 버튼으로만 획득 절차를\n시작합니다.\n\n구매는 상품·가격·잔액 검증, 보관 또는 유효 배치, 재화 차감과 인스턴스 생성을\n원자적으로 처리합니다. 판매는 보관함 아이템을 대상으로 하며 기본 판매율은 기준\n구매가의 50%입니다. 상점 레벨, 등장 확률과 새로고침 비용은 아이템 정의가 아니라\n상점 설정이 소유합니다. 현금 상품 Market은 프로토타입 범위에서 제외합니다.\n\n## 변경 파일\n\n| 파일 | 최종 책임 |\n| --- | --- |\n| `docs/gameplay/inventory-item-concept.md` | 기획 근거, 용어, 데이터 계약, 점유·회전, 배치, 보관·거래, 이미지 제작과 병렬 작업 기준 |\n| `wiki/content/pages/inventory-item-concept/v001.md` | 이번 커밋에서 확정한 인벤토리·아이템 기준의 최초 위키 기록 |\n| `wiki/site/data.js` | 위키 소스에서 생성한 읽기 전용 사이트 데이터 |\n\n## 검증\n\n개념 문서의 Markdown 코드 펜스가 짝을 이루고 후행 공백이 없으며, 참조하는\n`item-stats.md`가 존재하는지 확인합니다. 위키 빌드와 전체 위키 구조 검사, 위키\n단위 테스트를 실행해 새 페이지의 메타데이터, 버전, 소스 경로와 생성 데이터를\n검증합니다.\n\n## 결정 사항\n\n- 아이템 외형과 점유 형태를 분리하지 않으며 비직사각형 형태를 정식 콘텐츠로\n  지원합니다.\n- 카탈로그 원형, 소유 인스턴스, 배치와 상점 상품을 서로 다른 데이터로 관리합니다.\n- 배치 저장에는 원점과 회전을 두고 실제 점유 좌표는 파생해 중복 상태를 만들지\n  않습니다.\n- 열린 인벤토리 칸은 `UnlockedCells`, 공간 효과 칸은 `EffectCells`로 구분합니다.\n- 아이템이 소유된 사실과 전투 효과가 활성화된 상태를 분리합니다.\n- 구매 또는 보상 아이템을 보관 공간 부족만으로 자동 삭제하지 않습니다.\n- 기존 `ItemStats`의 태그, 스탯과 공간 관계를 단일 전투 규칙 계약으로 재사용합니다.\n\n## 후속 작업\n\n- 카탈로그 타입과 정의 validator를 구현합니다.\n- 연결 형태 정규화, 네 방향 회전, 충돌과 열린 칸 판정을 단위 테스트와 함께\n  구현합니다.\n- 세로형 전체 화면에서 선택, 드래그, 회전과 보관함 이동을 제공하는 인벤토리 UI를\n  제작합니다.\n- 첫 아이템 묶음은 문서의 제출 양식에 따라 ID, 태그, 형태, 스탯, 경제 값과 이미지\n  경로를 함께 제출합니다.\n- 전체 격자 크기, 확장 순서·비용, 희귀도와 상점 확률, 스택 분할 UI는 별도 설정\n  작업에서 확정합니다.\n",
          "source_path": "wiki/content/pages/inventory-item-concept/v001.md",
          "timeline_order": 9
        }
      ]
    },
    {
      "id": "weapon-combat-presentation",
      "title": "장착 무기 필드 표시와 자동 공격 연출",
      "summary": "여섯 장착 무기를 캐릭터 바로 위의 좌우 3개씩인 좁은 할로로 재배치하고, 모든 무기가 하나의 가장 가까운 적을 실제 칼끝·총구·발사 방향으로 겨누되 좌측 표적에는 원화를 뒤집지 않고 수평 반전하도록 다듬었습니다.",
      "status": "active",
      "category": "gameplay",
      "tags": [
        "weapon",
        "combat",
        "animation",
        "mobile",
        "targeting",
        "aiming"
      ],
      "created_at": "2026-08-20",
      "updated_at": "2026-08-21",
      "authors": [
        "Codex"
      ],
      "version": 2,
      "change_type": "updated",
      "change_summary": "기존 자동 공격을 유지하면서 여섯 무기의 대기 위치를 캐릭터 가까운 좌우 할로로 축소하고, 공통 최근접 표적·무기별 사거리·실제 소켓 조준·좌측 수평 반전 규칙을 추가했습니다.",
      "supersedes": "weapon-combat-presentation@v001",
      "sources": [
        "wiki/content/pages/weapon-combat-presentation/v001.md",
        "src/ReplicatedStorage/BackpackUI/EquippedWeaponBillboard.luau",
        "src/ReplicatedStorage/BackpackUI/EquippedWeaponVisualLayout.luau",
        "src/ReplicatedStorage/BackpackUI/WeaponAimResolver.luau",
        "src/ReplicatedStorage/BackpackUI/WeaponAttackVFX.luau",
        "src/ReplicatedStorage/Combat/WeaponCombatConfig.luau",
        "src/ReplicatedStorage/Combat/WeaponTargeting.luau",
        "src/ServerScriptService/WeaponCombatService.luau",
        "tests/test_weapon_targeting.py",
        "wiki/content/media/weapon-combat-presentation/v002/player-distance-reference.png",
        "wiki/content/media/weapon-combat-presentation/v002/idle-close-halo.jpg",
        "wiki/content/media/weapon-combat-presentation/v002/left-target-mirrored-attack.jpg"
      ],
      "related": [
        "product-planning-change-log",
        "inventory-item-concept",
        "character-2d-rendering",
        "backpack-combat-stat-database"
      ],
      "validation": [
        "python3 -m unittest tests.test_weapon_targeting: 4 tests passed",
        "python3 -m unittest discover -s tests -p 'test_*.py' (sprite pipeline 제외): 100 tests passed",
        "BackpackUI 정적 계약과 InventoryV2 Luau 회귀: passed",
        "luau-compile: 장착 표시·조준 해석·클라이언트 VFX·전투 설정·서버 전투 모듈 통과",
        "python3 tools/item_db.py check: 48 items, revision af58727fe90523ed",
        "Roblox Studio Play · iPhone 17 Pro portrait · 401×776: 6개 근접 할로, 적 없음 부유, 좌측 표적 수평 반전 조준 확인; 콘솔 오류 없음",
        "Roblox Studio Play · Galaxy A06 portrait · 359×718: 좌우 여백과 할로 위치, 여섯 슬롯 표시, 콘솔 오류 없음"
      ],
      "source_path": "wiki/content/pages/weapon-combat-presentation/v002.md",
      "body": "# 장착 무기 필드 표시와 자동 공격 연출\n\n## 한눈에 보는 변경\n\n- 무엇이 바뀌었나: 여섯 무기를 머리 가까운 타원의 왼쪽 세 개·오른쪽 세 개로 모으고,\n  가장 가까운 적을 실제 무기 끝점과 발사구로 겨누게 했습니다.\n- 왜 바꿨나: 멀리 흩어진 무기는 캐릭터의 장비로 읽히지 않고, 왼쪽 적을 단순 회전으로\n  겨누던 총과 활은 거꾸로 보이면서 총구·발사 위치까지 어긋났기 때문입니다.\n- 플레이어가 지금 경험하는 것: 적이 없으면 원화 여섯 개가 작은 천사 링처럼 각자 부유하고,\n  적이 나타나면 같은 위협을 향해 조준하며 왼쪽 표적에는 자연스럽게 수평 반전합니다.\n\n## 기획 배경과 목표\n\n자동 공격의 종류와 서버 권위 피해는 이미 동작했지만, 장착 무기가 캐릭터에게서 멀리 떨어져\n보이면 플레이어의 장비라기보다 독립 오브젝트처럼 느껴집니다. 이번 조정의 목표는 여섯 원화를\n캐릭터 머리 바로 위의 작은 천사 링으로 다시 묶고, 전투 중에는 그 배치에서 가장 가까운 적을\n정확히 겨누도록 만드는 것입니다.\n\n핵심은 단순히 이미지를 회전시키는 것이 아닙니다. 칼은 칼끝, 총은 총구, 활·석궁은 발사 방향이\n표적을 향해야 하며, 오른쪽을 기본 방향으로 그린 원거리 원화가 왼쪽 적을 볼 때는 상하가\n뒤집히지 않아야 합니다. 적이 사라지면 전투 자세를 남기지 않고 원래 할로와 독립 부유로\n돌아갑니다.\n\n## 사용자가 발견한 문제와 최종 경험\n\n수정 전 측정에서는 캐릭터가 화면 `(54%, 62.4%)`에 있을 때 두 무기가 각각\n`(39.8%, 33.4%)`, `(17.9%, 47.3%)`까지 떨어져 있었습니다. 이 거리는 장착 관계를 읽기\n어렵게 하고 여러 무기가 화면 배경에 흩어진 것처럼 보이게 했습니다.\n\n![수정 전 무기 거리 측정](./media/weapon-combat-presentation/v002/player-distance-reference.png \"캐릭터와 두 무기의 화면 좌표를 비교해 과도한 장착 무기 거리를 확인한 사용자 기준 이미지\")\n\n최종 대기 상태는 다음 규칙을 따릅니다.\n\n- 여섯 슬롯은 캐릭터 머리 가까운 좁은 타원 테두리에 고정됩니다.\n- 정중앙 위·아래는 캐릭터와 무기가 겹치지 않도록 비우고 왼쪽 세 개, 오른쪽 세 개를 같은\n  현 길이 간격으로 배치합니다.\n- 슬롯 배경이나 테두리는 보이지 않으며 ItemDB의 무기 이미지 자체만 표시합니다.\n- 각 무기는 작은 위치·기울기 변화를 서로 다른 위상으로 반복해 하나의 판처럼 굳지 않고\n  개별적으로 떠 있는 느낌을 냅니다.\n- 적이 없을 때는 캐릭터가 바라보는 방향이 바뀌어도 무기 원화 방향이 따라 돌지 않습니다.\n\n![최종 여섯 무기 근접 할로](./media/weapon-combat-presentation/v002/idle-close-halo.jpg \"iPhone 17 Pro 세로 Play에서 머리 가까이 좌우 세 개씩 배치되고 각각 부유하는 최종 대기 상태\")\n\n## 표적 선택과 조준 규칙\n\n플레이어의 장착 무기들은 매 갱신마다 서로 다른 적을 임의로 고르지 않습니다. 우선 장착 무기\n중 가장 긴 사거리 안에서 살아 있고 보이는 적 가운데 가장 가까운 하나를 공통 후보로 선택합니다.\n그 뒤 각 슬롯은 자기 무기의 사거리 안에 그 적이 있을 때만 조준하고 공격합니다. 이 구조는\n여섯 무기의 시선이 한 표적에 모이는 읽기 쉬운 전투 장면을 만들면서도 근접 무기가 원거리\n무기의 사거리를 빌리지 못하게 합니다.\n\n| 상태 | 무기 표현 |\n| --- | --- |\n| 적 없음 | 원화 기본 방향을 유지하며 할로 슬롯에서 독립 부유 |\n| 적 있음·자기 사거리 밖 | 대기 부유 유지 |\n| 적 있음·자기 사거리 안 | 칼끝·타격점 또는 총구·화살·볼트 발사 방향을 표적에 정렬 |\n| 표적이 왼쪽 | 오른쪽 기본 원화는 수평 반전하고 회전각·회전축·소켓도 같은 좌표계로 반전 |\n| 공격 종료 또는 표적 소실 | 반전과 공격 자세를 해제하고 원래 할로로 복귀 |\n\n![좌측 표적 수평 반전 공격](./media/weapon-combat-presentation/v002/left-target-mirrored-attack.jpg \"좌측 적을 향할 때 총이 거꾸로 회전하지 않고 수평 반전된 총구와 공격 방향으로 조준하는 Studio 최종 장면\")\n\n## 설계 결정과 트레이드오프\n\n### 서버와 클라이언트가 같은 표적 규칙을 공유한다\n\n`WeaponTargeting`은 생존 판정, 최근접 거리, 가시성 검사를 공통 함수로 제공합니다. 서버는 이\n결과로 실제 공격과 피해를 결정하고, 클라이언트 대기 할로도 같은 선택 규칙을 사용해 공격 직전\n무기가 다른 적을 바라보는 불일치를 줄입니다. 공격 권한과 피해는 계속 서버에만 남습니다.\n\n### 원화 반전은 화면 좌표계 전체에 적용한다\n\n단순히 `ImageLabel`만 뒤집으면 총구 섬광이나 화살 시작점이 반대편에 남습니다.\n`WeaponAimResolver`는 원화의 수평 UV, 회전축, 타격점과 발사 소켓을 함께 반전합니다. 따라서\n대기 조준과 실제 공격 VFX가 같은 칼끝·총구에서 시작합니다.\n\n### 작은 고정 할로를 의도적으로 선택한다\n\n할로는 화면 크기에 따라 무한히 커지는 월드 반경이 아니라 `132×46` 픽셀의 고정된 읽기 영역을\n사용하고, 머리 위 월드 오프셋은 `8.0`으로 유지합니다. 무기 이미지는 `56×56` 슬롯을 계속\n사용해 크기는 줄이지 않고 슬롯 중심만 안쪽으로 모았습니다. 그 결과 원화 식별력은 유지하면서\n캐릭터와의 소유 관계를 강화합니다.\n\n## 구현 참고\n\n- `EquippedWeaponVisualLayout`이 할로 크기, 높이, 여섯 슬롯과 부유 파라미터의 단일 기준입니다.\n- `EquippedWeaponBillboard`는 공통 표적을 주기적으로 갱신하고 슬롯별 사거리와 화면 투영을\n  적용해 대기 원화의 조준 또는 부유를 선택합니다.\n- `WeaponAimResolver`는 기본 원화 방향을 기준으로 목표 각도와 수평 반전 여부를 계산하고\n  회전축·소켓 좌표도 같은 방식으로 변환합니다.\n- `WeaponAttackVFX`는 반전된 회전축과 발사 소켓을 실제 베기·활·석궁·총기 공격 배우와\n  발사체에 적용합니다.\n- `WeaponCombatService`와 `WeaponTargeting`은 서버의 최근접 생존 적·시야 검사·피해 권위를\n  유지합니다.\n\n## 검증 결과\n\n- 표적 선택 전용 테스트 4개와 스프라이트 파이프라인을 제외한 Python 회귀 100개를\n  통과했습니다. 전체 발견 실행의 두 실패는 현재 작업 트리에 이미 존재하던 캐릭터 스프라이트\n  매니페스트 프레임·경고 개수 불일치이며 이번 무기 변경과 분리했습니다.\n- 관련 Luau 모듈 컴파일, BackpackUI 정적 계약, InventoryV2 Luau 회귀와 `git diff --check`를\n  통과했습니다.\n- ItemDB는 48개와 revision `af58727fe90523ed`로 최신 상태이며 이번 변경은 아이템 정의나\n  원화를 바꾸지 않습니다.\n- iPhone 17 Pro `401×776`에서는 할로 루트와 캐릭터 앵커 사이 최대 거리가 약 `55.9px`,\n  Galaxy A06 `359×718`에서는 약 `51.2px`였습니다. 두 화면 모두 여섯 슬롯이 화면 안에 있고\n  정중앙 위·아래는 비어 있었습니다.\n- 좌측 표적에서는 오른쪽 기본 방향의 원거리 원화가 음수 수평 UV로 바뀌고 총구·투사체가\n  같은 적을 향했습니다. 적 태그를 제거하면 즉시 공격 자세 없이 개별 부유로 돌아왔으며\n  두 모바일 Play의 콘솔 오류는 없었습니다.\n\n## 후속 범위\n\n이번 버전은 장착 위치, 공통 최근접 표적과 기본 공격 방향을 확정합니다. 도탄·산탄·관통처럼\n한 공격이 여러 적을 고르는 고유 능력은 이 공통 표적을 최초 표적으로 사용하되, 이후 분기 규칙을\n별도 전투 능력 데이터로 정의해야 합니다. 음향과 적 피격 반응도 작은 할로의 식별력을 가리지\n않는 범위에서 후속으로 추가합니다.\n",
      "revisions": [
        {
          "id": "weapon-combat-presentation",
          "title": "장착 무기 필드 표시와 자동 공격 연출",
          "summary": "여섯 장착 무기를 캐릭터 바로 위의 좌우 3개씩인 좁은 할로로 재배치하고, 모든 무기가 하나의 가장 가까운 적을 실제 칼끝·총구·발사 방향으로 겨누되 좌측 표적에는 원화를 뒤집지 않고 수평 반전하도록 다듬었습니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "weapon",
            "combat",
            "animation",
            "mobile",
            "targeting",
            "aiming"
          ],
          "created_at": "2026-08-20",
          "updated_at": "2026-08-21",
          "authors": [
            "Codex"
          ],
          "version": 2,
          "change_type": "updated",
          "change_summary": "기존 자동 공격을 유지하면서 여섯 무기의 대기 위치를 캐릭터 가까운 좌우 할로로 축소하고, 공통 최근접 표적·무기별 사거리·실제 소켓 조준·좌측 수평 반전 규칙을 추가했습니다.",
          "supersedes": "weapon-combat-presentation@v001",
          "sources": [
            "wiki/content/pages/weapon-combat-presentation/v001.md",
            "src/ReplicatedStorage/BackpackUI/EquippedWeaponBillboard.luau",
            "src/ReplicatedStorage/BackpackUI/EquippedWeaponVisualLayout.luau",
            "src/ReplicatedStorage/BackpackUI/WeaponAimResolver.luau",
            "src/ReplicatedStorage/BackpackUI/WeaponAttackVFX.luau",
            "src/ReplicatedStorage/Combat/WeaponCombatConfig.luau",
            "src/ReplicatedStorage/Combat/WeaponTargeting.luau",
            "src/ServerScriptService/WeaponCombatService.luau",
            "tests/test_weapon_targeting.py",
            "wiki/content/media/weapon-combat-presentation/v002/player-distance-reference.png",
            "wiki/content/media/weapon-combat-presentation/v002/idle-close-halo.jpg",
            "wiki/content/media/weapon-combat-presentation/v002/left-target-mirrored-attack.jpg"
          ],
          "related": [
            "product-planning-change-log",
            "inventory-item-concept",
            "character-2d-rendering",
            "backpack-combat-stat-database"
          ],
          "validation": [
            "python3 -m unittest tests.test_weapon_targeting: 4 tests passed",
            "python3 -m unittest discover -s tests -p 'test_*.py' (sprite pipeline 제외): 100 tests passed",
            "BackpackUI 정적 계약과 InventoryV2 Luau 회귀: passed",
            "luau-compile: 장착 표시·조준 해석·클라이언트 VFX·전투 설정·서버 전투 모듈 통과",
            "python3 tools/item_db.py check: 48 items, revision af58727fe90523ed",
            "Roblox Studio Play · iPhone 17 Pro portrait · 401×776: 6개 근접 할로, 적 없음 부유, 좌측 표적 수평 반전 조준 확인; 콘솔 오류 없음",
            "Roblox Studio Play · Galaxy A06 portrait · 359×718: 좌우 여백과 할로 위치, 여섯 슬롯 표시, 콘솔 오류 없음"
          ],
          "body": "# 장착 무기 필드 표시와 자동 공격 연출\n\n## 한눈에 보는 변경\n\n- 무엇이 바뀌었나: 여섯 무기를 머리 가까운 타원의 왼쪽 세 개·오른쪽 세 개로 모으고,\n  가장 가까운 적을 실제 무기 끝점과 발사구로 겨누게 했습니다.\n- 왜 바꿨나: 멀리 흩어진 무기는 캐릭터의 장비로 읽히지 않고, 왼쪽 적을 단순 회전으로\n  겨누던 총과 활은 거꾸로 보이면서 총구·발사 위치까지 어긋났기 때문입니다.\n- 플레이어가 지금 경험하는 것: 적이 없으면 원화 여섯 개가 작은 천사 링처럼 각자 부유하고,\n  적이 나타나면 같은 위협을 향해 조준하며 왼쪽 표적에는 자연스럽게 수평 반전합니다.\n\n## 기획 배경과 목표\n\n자동 공격의 종류와 서버 권위 피해는 이미 동작했지만, 장착 무기가 캐릭터에게서 멀리 떨어져\n보이면 플레이어의 장비라기보다 독립 오브젝트처럼 느껴집니다. 이번 조정의 목표는 여섯 원화를\n캐릭터 머리 바로 위의 작은 천사 링으로 다시 묶고, 전투 중에는 그 배치에서 가장 가까운 적을\n정확히 겨누도록 만드는 것입니다.\n\n핵심은 단순히 이미지를 회전시키는 것이 아닙니다. 칼은 칼끝, 총은 총구, 활·석궁은 발사 방향이\n표적을 향해야 하며, 오른쪽을 기본 방향으로 그린 원거리 원화가 왼쪽 적을 볼 때는 상하가\n뒤집히지 않아야 합니다. 적이 사라지면 전투 자세를 남기지 않고 원래 할로와 독립 부유로\n돌아갑니다.\n\n## 사용자가 발견한 문제와 최종 경험\n\n수정 전 측정에서는 캐릭터가 화면 `(54%, 62.4%)`에 있을 때 두 무기가 각각\n`(39.8%, 33.4%)`, `(17.9%, 47.3%)`까지 떨어져 있었습니다. 이 거리는 장착 관계를 읽기\n어렵게 하고 여러 무기가 화면 배경에 흩어진 것처럼 보이게 했습니다.\n\n![수정 전 무기 거리 측정](./media/weapon-combat-presentation/v002/player-distance-reference.png \"캐릭터와 두 무기의 화면 좌표를 비교해 과도한 장착 무기 거리를 확인한 사용자 기준 이미지\")\n\n최종 대기 상태는 다음 규칙을 따릅니다.\n\n- 여섯 슬롯은 캐릭터 머리 가까운 좁은 타원 테두리에 고정됩니다.\n- 정중앙 위·아래는 캐릭터와 무기가 겹치지 않도록 비우고 왼쪽 세 개, 오른쪽 세 개를 같은\n  현 길이 간격으로 배치합니다.\n- 슬롯 배경이나 테두리는 보이지 않으며 ItemDB의 무기 이미지 자체만 표시합니다.\n- 각 무기는 작은 위치·기울기 변화를 서로 다른 위상으로 반복해 하나의 판처럼 굳지 않고\n  개별적으로 떠 있는 느낌을 냅니다.\n- 적이 없을 때는 캐릭터가 바라보는 방향이 바뀌어도 무기 원화 방향이 따라 돌지 않습니다.\n\n![최종 여섯 무기 근접 할로](./media/weapon-combat-presentation/v002/idle-close-halo.jpg \"iPhone 17 Pro 세로 Play에서 머리 가까이 좌우 세 개씩 배치되고 각각 부유하는 최종 대기 상태\")\n\n## 표적 선택과 조준 규칙\n\n플레이어의 장착 무기들은 매 갱신마다 서로 다른 적을 임의로 고르지 않습니다. 우선 장착 무기\n중 가장 긴 사거리 안에서 살아 있고 보이는 적 가운데 가장 가까운 하나를 공통 후보로 선택합니다.\n그 뒤 각 슬롯은 자기 무기의 사거리 안에 그 적이 있을 때만 조준하고 공격합니다. 이 구조는\n여섯 무기의 시선이 한 표적에 모이는 읽기 쉬운 전투 장면을 만들면서도 근접 무기가 원거리\n무기의 사거리를 빌리지 못하게 합니다.\n\n| 상태 | 무기 표현 |\n| --- | --- |\n| 적 없음 | 원화 기본 방향을 유지하며 할로 슬롯에서 독립 부유 |\n| 적 있음·자기 사거리 밖 | 대기 부유 유지 |\n| 적 있음·자기 사거리 안 | 칼끝·타격점 또는 총구·화살·볼트 발사 방향을 표적에 정렬 |\n| 표적이 왼쪽 | 오른쪽 기본 원화는 수평 반전하고 회전각·회전축·소켓도 같은 좌표계로 반전 |\n| 공격 종료 또는 표적 소실 | 반전과 공격 자세를 해제하고 원래 할로로 복귀 |\n\n![좌측 표적 수평 반전 공격](./media/weapon-combat-presentation/v002/left-target-mirrored-attack.jpg \"좌측 적을 향할 때 총이 거꾸로 회전하지 않고 수평 반전된 총구와 공격 방향으로 조준하는 Studio 최종 장면\")\n\n## 설계 결정과 트레이드오프\n\n### 서버와 클라이언트가 같은 표적 규칙을 공유한다\n\n`WeaponTargeting`은 생존 판정, 최근접 거리, 가시성 검사를 공통 함수로 제공합니다. 서버는 이\n결과로 실제 공격과 피해를 결정하고, 클라이언트 대기 할로도 같은 선택 규칙을 사용해 공격 직전\n무기가 다른 적을 바라보는 불일치를 줄입니다. 공격 권한과 피해는 계속 서버에만 남습니다.\n\n### 원화 반전은 화면 좌표계 전체에 적용한다\n\n단순히 `ImageLabel`만 뒤집으면 총구 섬광이나 화살 시작점이 반대편에 남습니다.\n`WeaponAimResolver`는 원화의 수평 UV, 회전축, 타격점과 발사 소켓을 함께 반전합니다. 따라서\n대기 조준과 실제 공격 VFX가 같은 칼끝·총구에서 시작합니다.\n\n### 작은 고정 할로를 의도적으로 선택한다\n\n할로는 화면 크기에 따라 무한히 커지는 월드 반경이 아니라 `132×46` 픽셀의 고정된 읽기 영역을\n사용하고, 머리 위 월드 오프셋은 `8.0`으로 유지합니다. 무기 이미지는 `56×56` 슬롯을 계속\n사용해 크기는 줄이지 않고 슬롯 중심만 안쪽으로 모았습니다. 그 결과 원화 식별력은 유지하면서\n캐릭터와의 소유 관계를 강화합니다.\n\n## 구현 참고\n\n- `EquippedWeaponVisualLayout`이 할로 크기, 높이, 여섯 슬롯과 부유 파라미터의 단일 기준입니다.\n- `EquippedWeaponBillboard`는 공통 표적을 주기적으로 갱신하고 슬롯별 사거리와 화면 투영을\n  적용해 대기 원화의 조준 또는 부유를 선택합니다.\n- `WeaponAimResolver`는 기본 원화 방향을 기준으로 목표 각도와 수평 반전 여부를 계산하고\n  회전축·소켓 좌표도 같은 방식으로 변환합니다.\n- `WeaponAttackVFX`는 반전된 회전축과 발사 소켓을 실제 베기·활·석궁·총기 공격 배우와\n  발사체에 적용합니다.\n- `WeaponCombatService`와 `WeaponTargeting`은 서버의 최근접 생존 적·시야 검사·피해 권위를\n  유지합니다.\n\n## 검증 결과\n\n- 표적 선택 전용 테스트 4개와 스프라이트 파이프라인을 제외한 Python 회귀 100개를\n  통과했습니다. 전체 발견 실행의 두 실패는 현재 작업 트리에 이미 존재하던 캐릭터 스프라이트\n  매니페스트 프레임·경고 개수 불일치이며 이번 무기 변경과 분리했습니다.\n- 관련 Luau 모듈 컴파일, BackpackUI 정적 계약, InventoryV2 Luau 회귀와 `git diff --check`를\n  통과했습니다.\n- ItemDB는 48개와 revision `af58727fe90523ed`로 최신 상태이며 이번 변경은 아이템 정의나\n  원화를 바꾸지 않습니다.\n- iPhone 17 Pro `401×776`에서는 할로 루트와 캐릭터 앵커 사이 최대 거리가 약 `55.9px`,\n  Galaxy A06 `359×718`에서는 약 `51.2px`였습니다. 두 화면 모두 여섯 슬롯이 화면 안에 있고\n  정중앙 위·아래는 비어 있었습니다.\n- 좌측 표적에서는 오른쪽 기본 방향의 원거리 원화가 음수 수평 UV로 바뀌고 총구·투사체가\n  같은 적을 향했습니다. 적 태그를 제거하면 즉시 공격 자세 없이 개별 부유로 돌아왔으며\n  두 모바일 Play의 콘솔 오류는 없었습니다.\n\n## 후속 범위\n\n이번 버전은 장착 위치, 공통 최근접 표적과 기본 공격 방향을 확정합니다. 도탄·산탄·관통처럼\n한 공격이 여러 적을 고르는 고유 능력은 이 공통 표적을 최초 표적으로 사용하되, 이후 분기 규칙을\n별도 전투 능력 데이터로 정의해야 합니다. 음향과 적 피격 반응도 작은 할로의 식별력을 가리지\n않는 범위에서 후속으로 추가합니다.\n",
          "source_path": "wiki/content/pages/weapon-combat-presentation/v002.md",
          "timeline_order": 41
        },
        {
          "id": "weapon-combat-presentation",
          "title": "장착 무기 필드 표시와 자동 공격 연출",
          "summary": "여섯 장착 무기를 캐릭터 머리 위의 읽기 쉬운 이미지 할로로 유지하면서, 적을 만나면 무기 종류에 맞는 자동 공격과 서버 권위 피해로 자연스럽게 전환하도록 완성했습니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "weapon",
            "combat",
            "animation",
            "mobile",
            "itemdb",
            "server-authority"
          ],
          "created_at": "2026-08-20",
          "updated_at": "2026-08-20",
          "authors": [
            "Codex"
          ],
          "version": 1,
          "change_type": "created",
          "change_summary": "최대 여섯 무기의 머리 위 할로, 대기 부유, 여섯 공격 모션 계열, 14종 전투 좌표와 서버 권위 자동 공격·피해를 하나의 모바일 전투 표현 계약으로 추가했습니다.",
          "supersedes": null,
          "sources": [
            "docs/gameplay/alpha-item-definitions.json",
            "docs/gameplay/inventory-item-art-catalog.md",
            "docs/gameplay/inventory-item-layouts.json",
            "src/ReplicatedStorage/BackpackUI/EquippedWeaponBillboard.luau",
            "src/ReplicatedStorage/BackpackUI/EquippedWeaponVisualLayout.luau",
            "src/ReplicatedStorage/BackpackUI/WeaponAttackVFX.luau",
            "src/ReplicatedStorage/Combat/WeaponCombatConfig.luau",
            "src/ServerScriptService/DamageResolver.luau",
            "src/ServerScriptService/WeaponCombatService.luau",
            "tools/weapon_combat_art.py",
            "wiki/content/media/weapon-combat-presentation/v001/idle-halo.jpg",
            "wiki/content/media/weapon-combat-presentation/v001/combat-motion.jpg",
            "wiki/content/media/weapon-combat-presentation/v001/combat-art-anchors.png"
          ],
          "related": [
            "product-planning-change-log",
            "inventory-item-concept",
            "character-2d-rendering",
            "backpack-combat-stat-database"
          ],
          "validation": [
            "python3 -m unittest discover -s tests -p 'test_*.py': 88 tests passed",
            "bash tools/test_backpack_ui.sh: passed",
            "bash tools/test_inventory_v2.sh: InventoryV2.spec ok",
            "luau-compile: 무기 표시·전투 설정·클라이언트 VFX·서버 피해·Studio 더미 모듈 통과",
            "python3 tools/item_db.py check: 48 items, revision af58727fe90523ed",
            "Roblox Studio Play · iPhone 17 Pro portrait · 401×776: 6개 이미지 할로 대기와 실제 공격 프레임 확인; 콘솔 오류 없음",
            "Roblox Studio Play · Galaxy A06 portrait · 359×718: 45개 연출 수신, 누락 0, 객체 수 736 고정, 서버 공격 47회와 피해 확인; 콘솔 오류 없음"
          ],
          "body": "# 장착 무기 필드 표시와 자동 공격 연출\n\n## 기획 배경과 목표\n\n인벤토리에서 유효하게 배치한 무기는 단순한 장착 목록이 아니라 필드에서 실제로 함께 싸우는\n빌드의 구성원이어야 합니다. 플레이어가 최대 여섯 무기를 골랐다는 사실을 전투 중에도 즉시\n알아보고, 적이 나타났을 때 각 무기의 형태와 공격 방식이 자연스럽게 이어지는 것이 목표입니다.\n\n이 기능은 새로운 3D 무기 모델이나 무기별 대형 애니메이션 세트를 추가하지 않습니다. 이미\n승인된 아이템 이미지를 필드 표현의 기준으로 삼고, 짧은 이동·회전·선·도형만으로 공격 의도를\n전달합니다. 따라서 14종 전체에 일관된 가독성을 주면서도 모바일 렌더링과 콘텐츠 제작 비용을\n통제합니다.\n\n## 사용자 경험\n\n- 적이 없을 때 최대 여섯 무기는 캐릭터 머리 위 가까운 위치에 천사 링처럼 둘러서며 각자\n  미세하게 부유합니다.\n- 대기 무기는 캐릭터가 바라보는 방향을 따라 회전하지 않습니다. 캐릭터가 방향을 바꿔도\n  할로의 형태와 아이템 원화 방향은 안정적으로 유지됩니다.\n- 적이 사거리 안에 들어오면 해당 무기 이미지만 할로를 떠나 표적을 향하고, 공격이 끝나면\n  원래 슬롯으로 돌아옵니다.\n- 검·메이스·도끼는 적에게 접근해 휘두르고, 장창은 찌르며, 투창은 회전 투척 후 복귀합니다.\n- 활은 시위를 뒤로 당겨 화살을 보내고, 석궁은 볼트를, 총기는 총알과 총구 섬광·반동을\n  보여 줍니다.\n- 무기는 이미지 자체로 보이며 대기 슬롯을 감싸는 판, 테두리 또는 별도 장식 컨테이너를\n  노출하지 않습니다.\n\n![머리 위 여섯 무기 대기 할로](./media/weapon-combat-presentation/v001/idle-halo.jpg \"iPhone 17 Pro 세로 Play에서 캐릭터 방향과 분리된 여섯 무기 이미지가 머리 위에 부유하는 최종 대기 상태\")\n\n![장착 무기의 자동 공격 전환](./media/weapon-combat-presentation/v001/combat-motion.jpg \"적이 감지되자 여러 무기 이미지가 할로를 떠나 표적을 향하고 충돌 표시가 재생되는 최종 전투 프레임\")\n\n## 핵심 원칙과 설계 철학\n\n### 장착 상태와 공격 권한을 분리한다\n\n장착 상태는 인벤토리 서버가 복제하는 여섯 슬롯이 계속 소유합니다. 공격 서버는 그 상태를\n읽어 각 슬롯의 쿨다운, 표적, 공격 시점을 결정하고 피해를 적용합니다. 클라이언트는 공격을\n요청하거나 피해를 계산하지 않고 서버가 보낸 확정 연출 명령만 재생합니다.\n\n### 같은 원화를 모든 제품 표면에서 사용한다\n\n보관함, 장착판, 머리 위 할로와 공격 동작은 같은 ItemDB 아이콘을 사용합니다. 별도의 전투용\n무기 원화를 만들지 않으므로 플레이어는 실루엣만으로 장착 무기를 계속 식별할 수 있습니다.\n무기마다 정규화된 회전축과 발사·타격 지점을 두어 원화의 투명 여백이 공격 궤적을 흔들지\n않게 합니다.\n\n### 반복 생성보다 재사용을 우선한다\n\n클라이언트 연출은 무기 배우, 발사체, 충돌 도형을 시작 시 한 번 준비해 재사용합니다. 공격마다\nGUI 인스턴스를 만들고 버리지 않으며, 전투 중 진단값도 0.25초 주기로만 갱신합니다. 서버의\n상세 공격 카운터는 Studio에서만 기록해 실제 플레이 네트워크 비용에 포함하지 않습니다.\n\n## 결정 사항과 범위\n\n| 영역 | 최종 결정 |\n| --- | --- |\n| 표적 | 서버가 사거리와 시야가 유효한 가장 가까운 생존 적을 선택합니다. |\n| 동시 장착 | 최대 여섯 슬롯이 서로 독립적인 쿨다운으로 공격합니다. |\n| 네트워크 | 서버가 `UnreliableRemoteEvent`로 자기완결형 연출 명령을 모든 관전자에게 보냅니다. |\n| 피해 | 서버가 장착 유지 여부와 표적 상태를 다시 확인한 뒤 피해를 적용합니다. |\n| 대기 표시 | 6개 고정 할로 좌표와 서로 다른 속도·위상·진폭으로 부유합니다. |\n| 공격 계열 | `Sweep`, `Thrust`, `Throw`, `BowShot`, `CrossbowShot`, `GunShot` 여섯 계열입니다. |\n| 테스트 적 | Studio에서만 세 개의 재생성 더미를 배치하며 실제 배포에는 생성하지 않습니다. |\n\n이번 범위는 모든 무기의 기본 자동 공격 표현과 피해까지입니다. 도탄, 산탄, 관통, 흡혈,\n반격처럼 무기 이름에 포함된 고유 능력, 룬에 따른 공격 변형, 음향, 적 피격 애니메이션과\n대규모 멀티플레이 부하 조정은 후속 전투 시스템 범위로 남깁니다.\n\n## 현재 결과\n\n14개 무기는 모두 ItemDB 정의와 서버 전투 프로필을 가집니다. 공격 계열별 대표 여섯 무기를\n동시에 장착한 테스트에서 여섯 계열이 모두 실행됐고, 이후 조합을 바꿔 14개 정의 각각의\n공격 발생을 확인했습니다. 적 태그를 제거한 대기 테스트에서는 공격 수가 증가하지 않았고\n여섯 이미지 슬롯만 부유했습니다.\n\n![14종 무기 전투 좌표 검수표](./media/weapon-combat-presentation/v001/combat-art-anchors.png \"빨간 회전축과 무기별 타격점·발사구·시위 끝점을 실제 투명 아이콘 위에서 검수한 ItemDB 좌표표\")\n\n비대칭 흡혈 도끼는 투명 캔버스 중앙이 아니라 실제 손잡이를 회전축으로 사용합니다. 두 도끼의\n타격 끝점도 칼날 외곽으로 보정했습니다. 좌표 원본과 런타임 생성 모듈은 ItemDB revision\n`af58727fe90523ed`로 함께 베이크했습니다.\n\n## 구현 참고\n\n- `EquippedWeaponVisualLayout`이 할로 크기, 머리 위 오프셋, 여섯 슬롯 위치와 부유 파라미터의\n  단일 기준입니다.\n- `EquippedWeaponBillboard`는 장착 이미지의 대기 상태를, `WeaponAttackVFX`는 공격 중 복사본과\n  발사체·궤적을 담당합니다. 공격하는 동안 해당 대기 슬롯만 숨기고 종료 시 복원합니다.\n- `WeaponCombatConfig`는 14개 정의의 공격 계열·피해·쿨다운·사거리·준비·회복·발사체 속도를\n  모읍니다.\n- `WeaponCombatService`와 `DamageResolver`가 표적 탐색, 시야 검사, 스케줄, 장착 재검증과\n  피해를 서버에서 소유합니다.\n- `tools/weapon_combat_art.py`는 아이콘 위에 회전축과 소켓을 그려 새 무기를 추가할 때 좌표를\n  눈으로 검수할 수 있게 합니다.\n\n## 검증\n\n- Python 전체 회귀 88개와 BackpackUI·InventoryV2 전용 테스트를 통과했습니다.\n- 관련 Luau 모듈을 컴파일하고 `git diff --check`를 통과했습니다.\n- ItemDB 48개를 build/check하고 Studio의 `GeneratedItemLayouts`가 같은 revision을 보고하는지\n  확인했습니다.\n- iPhone 17 Pro `401×776`과 Galaxy A06 `359×718` 세로 Play에서 잘림이나 화면 밖 연출이\n  없고 콘솔 오류도 없음을 확인했습니다.\n- Galaxy A06 5초 표본에서 클라이언트는 45개 공격 연출을 받아 누락 0개로 처리했고, 객체 수는\n  전후 736개로 고정됐습니다. 같은 구간의 서버 공격 47회와 두 더미의 실제 체력 감소를\n  확인했습니다.\n\n## 후속 기획\n\n다음 단계는 현재의 공통 기본 공격 위에 무기 고유 능력을 데이터 주도로 얹는 것입니다. 도탄과\n산탄은 표적 선택·피해 횟수 규칙부터, 관통과 흡혈은 서버 피해 결과 계약부터 정의해야 합니다.\n그 뒤 음향과 적 피격 반응을 추가하되, 작은 화면에서 무기 실루엣과 위험 표적을 가리지 않는\n범위로 제한합니다.\n",
          "source_path": "wiki/content/pages/weapon-combat-presentation/v001.md",
          "timeline_order": 40
        }
      ]
    },
    {
      "id": "character-2d-rendering",
      "title": "프레임 캐릭터 렌더링과 스프라이트 제작",
      "summary": "멈춰 있을 때는 발이 고정된 8프레임 호흡으로 생동감을 주고, Dash는 3단계 자세와 이동 구간 잔상으로 속도와 종료 타이밍을 명확히 읽게 합니다.",
      "status": "active",
      "category": "gameplay",
      "tags": [
        "character",
        "sprite",
        "animation",
        "idle",
        "dash",
        "afterimage",
        "mobile",
        "roblox"
      ],
      "created_at": "2026-08-06",
      "updated_at": "2026-08-23",
      "authors": [
        "Codex"
      ],
      "version": 10,
      "change_type": "updated",
      "change_summary": "정지 상태를 좌우 2방향 8프레임 호흡으로 교체하고, Dash를 예비·이동·회복 3프레임과 이동 구간 전용 수렴 잔상으로 표현해 캐릭터의 생동감과 행동 가독성을 함께 높였습니다.",
      "supersedes": "character-2d-rendering@v009",
      "sources": [
        "wiki/content/pages/character-2d-rendering/v009.md",
        "docs/art/sprite-animation-production.md",
        "Assets/Characters/Player/SpriteProduction/production_manifest.json",
        "Assets/Characters/Player/SpriteProduction/Build/Idle2D/RookieMale_Idle_EastWest_8x2_Runtime_128.png",
        "Assets/Characters/Player/SpriteProduction/Build/Dash2D/RookieMale_Dash_EastWest_3x2_Runtime_128.png",
        "src/ReplicatedStorage/Character2D/AssetRegistry.luau",
        "src/ReplicatedStorage/Character2D/CharacterController.luau",
        "src/ReplicatedStorage/Character2D/DashAfterimage.luau",
        "src/ReplicatedStorage/Character2D/DirectionResolver.luau",
        "src/ReplicatedStorage/Character2D/FrameSpriteRig.luau",
        "src/ReplicatedStorage/Character2D/ProductionDashData.luau",
        "src/ReplicatedStorage/Character2D/ProductionIdleData.luau",
        "wiki/content/media/character-2d-rendering/v010/idle-two-direction-contact-sheet.png",
        "wiki/content/media/character-2d-rendering/v010/dash-three-phase-contact-sheet.png",
        "wiki/content/media/character-2d-rendering/v010/dash-afterimage-timeline.gif",
        "wiki/content/media/character-2d-rendering/v010/studio-idle-mobile.jpg",
        "wiki/content/media/character-2d-rendering/v010/studio-dash-afterimage-mobile.jpg",
        "tests/test_sprite_animation_pipeline.py"
      ],
      "related": [
        "inventory-item-concept",
        "product-planning-change-log"
      ],
      "validation": [
        "./tools/test_character_assets.sh: Character gameplay atlas tests passed",
        "python3 -m unittest tests.test_two_direction_run_build tests.test_two_direction_dash_candidate tests.test_three_frame_dash_candidate tests.test_two_direction_idle_candidate: 30 tests passed",
        "python3 -m unittest discover -s tests: 130 tests passed",
        "Roblox Studio MCP Play · Galaxy A06 portrait · 671×828: Idle 자산 rbxassetid://72901805237391과 Dash 자산 rbxassetid://74627825095606 로드, 이동 구간 잔상 확인",
        "Roblox Studio MCP Play · Galaxy A06 portrait: 플레이어·NPC·장착 무기와 함께 표시되는 기본 전투 화면에서 잘림 없음 확인"
      ],
      "source_path": "wiki/content/pages/character-2d-rendering/v010.md",
      "body": "# 프레임 캐릭터 렌더링과 스프라이트 제작\n\n## 한눈에 보는 변경\n\n캐릭터가 멈췄을 때 한 장의 자세로 굳어 있던 표현을 **발은 바닥에 고정하고 상체만 숨 쉬는\n8프레임 호흡**으로 바꿨습니다. Dash는 출발 순간의 화면을 얼리는 대신 **몸을 낮추는 예비 자세,\n이동 자세, 다시 일어서는 회복 자세**를 거치며, 이동 중에만 뒤쪽 잔상이 생겼다가 마지막에\n본체로 모여 사라집니다.\n\n목표는 조작 규칙을 바꾸는 것이 아니라, 플레이어가 캐릭터의 생명감과 행동 시점을 더 쉽게\n읽게 하는 것입니다. Dash의 0.30초·20스터드 방향 잠금 규칙은 유지하면서도 출발과 종료를\n그림만 보고 구분할 수 있게 했습니다.\n\n## 기획 배경과 목표\n\n프레임 캐릭터는 작은 모바일 화면에서도 한눈에 읽히는 장점이 있지만, 정지 상태가 완전히\n고정되면 살아 있는 인물보다 배치된 말처럼 보입니다. 반대로 캐릭터 전체를 단순히 확대했다가\n축소하면 발이 미끄러지고 무게중심이 떠 보입니다. 따라서 호흡은 머리·가슴·어깨의 작은 변화로\n만들고 발과 골반 아래는 픽셀 단위로 고정하는 것을 목표로 삼았습니다.\n\n기존 Dash는 이동 중 원래 프레임을 그대로 유지해 형태 붕괴는 피했지만, 플레이어가 지금\n출발했는지 끝났는지를 자세로 구분할 수 없었습니다. 새 Dash는 짧은 세 자세만 사용해 캐릭터\n정체성을 보존하면서 행동의 시작·이동·회복을 분명히 보여 줍니다.\n\n## 사용자 경험\n\n- 멈추면 마지막으로 바라본 좌우 방향을 유지한 채 6fps 호흡을 반복합니다.\n- 직선 Dash를 시작하면 0.05초 동안 몸을 낮추고, 0.20초 이동 자세를 유지한 뒤, 0.05초 동안\n  균형을 되찾습니다.\n- 잔상은 이동 자세에서만 경로 뒤에 생깁니다. 회복 자세가 시작되면 남은 잔상이 본체로\n  수렴하며 사라져 행동 종료를 알려 줍니다.\n- 북쪽이나 남쪽으로 멈춘 경우에는 마지막 좌우 방향을 기억해 캐릭터가 이유 없이 반전되지\n  않습니다.\n\n## 핵심 원칙과 설계 철학\n\n### 발은 고정하고 호흡은 상체에서 만든다\n\n호흡 프레임은 캐릭터 전체 크기를 바꾸지 않습니다. 신발과 하체는 같은 위치를 유지하고,\n가슴·어깨·머리의 작은 상승과 이완으로 중립→들숨→정점→날숨→복귀를 만듭니다.\n\n![좌우 8프레임 호흡 제작 결과](./media/character-2d-rendering/v010/idle-two-direction-contact-sheet.png \"발과 골반을 고정한 채 상체만 호흡하는 좌우 8프레임 제작 결과\")\n\n### 행동을 설명하는 최소 키포즈만 사용한다\n\nDash는 많은 중간 프레임보다 세 개의 명확한 자세를 우선합니다. 가운데 이동 자세는 승인된\n실루엣을 70% 크기로 조정해 속도감을 만들고, 양끝의 예비·회복 자세는 바닥 접지와 머리·신발\n비율을 유지합니다.\n\n![좌우 Dash 3단계 키포즈](./media/character-2d-rendering/v010/dash-three-phase-contact-sheet.png \"예비 0.05초·이동 0.20초·회복 0.05초로 행동의 시작과 끝을 구분한 제작 결과\")\n\n### 잔상은 원화가 아니라 런타임 행동이다\n\n잔상을 PNG 안에 그려 넣지 않습니다. 실제 이동 경로를 따라 현재 Dash 프레임을 복제하고,\n회복 구간에서 본체 위치로 되돌려야 방향·거리 변경에도 같은 규칙이 유지됩니다.\n\n![Dash 잔상 타임라인](./media/character-2d-rendering/v010/dash-afterimage-timeline.gif \"이동 중 생성된 잔상이 회복 구간에서 본체로 모여 사라지는 전체 시간 흐름\")\n\n## 결정 사항과 범위\n\n- 현재 제작 방향은 East·West 두 방향이며 반대편은 결정적으로 수평 반전합니다.\n- Idle은 8프레임 6fps, Dash는 3프레임 0.30초를 사용합니다.\n- Dash의 이동 거리, 방향 잠금, 쿨다운과 충돌 규칙은 바꾸지 않습니다.\n- Hit·Death·Clear의 기존 제작 방식과 PC 전용 표현 개선은 이번 범위에 포함하지 않습니다.\n- 제작 후보·품질 검사·승인 기록과 게임용 128px 아틀라스를 함께 보존합니다.\n\n## 현재 결과\n\n모바일 Play에서 정지 중 승인된 호흡 아틀라스가 좌우 방향을 유지하며 반복됩니다. 장착 무기와\nNPC가 함께 있는 실제 필드에서도 캐릭터 실루엣과 바닥 접지가 유지됩니다.\n\n![모바일 Play의 호흡 Idle](./media/character-2d-rendering/v010/studio-idle-mobile.jpg \"Galaxy A06 세로 Play에서 마지막 좌우 방향을 유지한 호흡 캐릭터가 필드와 장착 무기 사이에서 읽히는 결과\")\n\nDash 이동 구간에서는 캐릭터 뒤에 보라·청록 잔상이 겹쳐 속도를 강조하고, 원본 캐릭터와\n장착 무기는 계속 같은 행동 중심을 공유합니다.\n\n![모바일 Play의 Dash 잔상](./media/character-2d-rendering/v010/studio-dash-afterimage-mobile.jpg \"Galaxy A06 세로 Play에서 이동 경로 뒤에만 잔상이 생성되고 본체 쪽으로 수렴하는 결과\")\n\n## 구현 참고\n\n게임은 Idle·Run·Dash에서 8방향 값을 그대로 아틀라스 행으로 쓰지 않고 마지막 수평 방향을\nEast 또는 West로 축약합니다. Idle과 Dash는 각각 생성된 메타데이터 모듈이 프레임 수·행·\n구간 경계를 제공합니다. Dash 잔상은 월드 위치를 화면 좌표로 투영하는 별도 레이어이며,\n이동 간격과 최대 개수·투명도·수렴 시간을 생성 데이터에서 읽습니다.\n\n## 검증\n\n- 게임용 Idle `1024×256 RGBA`, Dash `384×256 RGBA` 아틀라스와 업로드 자산 ID를 검사했습니다.\n- 좌우 반전, 투명 여백, 발 고정, 프레임 고유성, 정확한 타이밍 미리보기와 생성 모듈 일치를\n  30개 자동 테스트로 확인했습니다.\n- Roblox Studio 모바일 Play에서 Idle과 Dash 자산 로드, Dash 이동 잔상, 장착 무기·NPC와의\n  동시 표현을 확인했습니다.\n\n## 후속 기획\n\n다음 모션을 추가할 때도 통짜 캐릭터, 바닥 접지, 최소 키포즈, 런타임 효과 분리 원칙을\n유지합니다. Hit·Death·Clear는 각각 필요한 방향 수와 행동 종료 조건을 먼저 확정한 뒤 별도\n승인 단위로 제작합니다.\n",
      "revisions": [
        {
          "id": "character-2d-rendering",
          "title": "프레임 캐릭터 렌더링과 스프라이트 제작",
          "summary": "멈춰 있을 때는 발이 고정된 8프레임 호흡으로 생동감을 주고, Dash는 3단계 자세와 이동 구간 잔상으로 속도와 종료 타이밍을 명확히 읽게 합니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "character",
            "sprite",
            "animation",
            "idle",
            "dash",
            "afterimage",
            "mobile",
            "roblox"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-23",
          "authors": [
            "Codex"
          ],
          "version": 10,
          "change_type": "updated",
          "change_summary": "정지 상태를 좌우 2방향 8프레임 호흡으로 교체하고, Dash를 예비·이동·회복 3프레임과 이동 구간 전용 수렴 잔상으로 표현해 캐릭터의 생동감과 행동 가독성을 함께 높였습니다.",
          "supersedes": "character-2d-rendering@v009",
          "sources": [
            "wiki/content/pages/character-2d-rendering/v009.md",
            "docs/art/sprite-animation-production.md",
            "Assets/Characters/Player/SpriteProduction/production_manifest.json",
            "Assets/Characters/Player/SpriteProduction/Build/Idle2D/RookieMale_Idle_EastWest_8x2_Runtime_128.png",
            "Assets/Characters/Player/SpriteProduction/Build/Dash2D/RookieMale_Dash_EastWest_3x2_Runtime_128.png",
            "src/ReplicatedStorage/Character2D/AssetRegistry.luau",
            "src/ReplicatedStorage/Character2D/CharacterController.luau",
            "src/ReplicatedStorage/Character2D/DashAfterimage.luau",
            "src/ReplicatedStorage/Character2D/DirectionResolver.luau",
            "src/ReplicatedStorage/Character2D/FrameSpriteRig.luau",
            "src/ReplicatedStorage/Character2D/ProductionDashData.luau",
            "src/ReplicatedStorage/Character2D/ProductionIdleData.luau",
            "wiki/content/media/character-2d-rendering/v010/idle-two-direction-contact-sheet.png",
            "wiki/content/media/character-2d-rendering/v010/dash-three-phase-contact-sheet.png",
            "wiki/content/media/character-2d-rendering/v010/dash-afterimage-timeline.gif",
            "wiki/content/media/character-2d-rendering/v010/studio-idle-mobile.jpg",
            "wiki/content/media/character-2d-rendering/v010/studio-dash-afterimage-mobile.jpg",
            "tests/test_sprite_animation_pipeline.py"
          ],
          "related": [
            "inventory-item-concept",
            "product-planning-change-log"
          ],
          "validation": [
            "./tools/test_character_assets.sh: Character gameplay atlas tests passed",
            "python3 -m unittest tests.test_two_direction_run_build tests.test_two_direction_dash_candidate tests.test_three_frame_dash_candidate tests.test_two_direction_idle_candidate: 30 tests passed",
            "python3 -m unittest discover -s tests: 130 tests passed",
            "Roblox Studio MCP Play · Galaxy A06 portrait · 671×828: Idle 자산 rbxassetid://72901805237391과 Dash 자산 rbxassetid://74627825095606 로드, 이동 구간 잔상 확인",
            "Roblox Studio MCP Play · Galaxy A06 portrait: 플레이어·NPC·장착 무기와 함께 표시되는 기본 전투 화면에서 잘림 없음 확인"
          ],
          "body": "# 프레임 캐릭터 렌더링과 스프라이트 제작\n\n## 한눈에 보는 변경\n\n캐릭터가 멈췄을 때 한 장의 자세로 굳어 있던 표현을 **발은 바닥에 고정하고 상체만 숨 쉬는\n8프레임 호흡**으로 바꿨습니다. Dash는 출발 순간의 화면을 얼리는 대신 **몸을 낮추는 예비 자세,\n이동 자세, 다시 일어서는 회복 자세**를 거치며, 이동 중에만 뒤쪽 잔상이 생겼다가 마지막에\n본체로 모여 사라집니다.\n\n목표는 조작 규칙을 바꾸는 것이 아니라, 플레이어가 캐릭터의 생명감과 행동 시점을 더 쉽게\n읽게 하는 것입니다. Dash의 0.30초·20스터드 방향 잠금 규칙은 유지하면서도 출발과 종료를\n그림만 보고 구분할 수 있게 했습니다.\n\n## 기획 배경과 목표\n\n프레임 캐릭터는 작은 모바일 화면에서도 한눈에 읽히는 장점이 있지만, 정지 상태가 완전히\n고정되면 살아 있는 인물보다 배치된 말처럼 보입니다. 반대로 캐릭터 전체를 단순히 확대했다가\n축소하면 발이 미끄러지고 무게중심이 떠 보입니다. 따라서 호흡은 머리·가슴·어깨의 작은 변화로\n만들고 발과 골반 아래는 픽셀 단위로 고정하는 것을 목표로 삼았습니다.\n\n기존 Dash는 이동 중 원래 프레임을 그대로 유지해 형태 붕괴는 피했지만, 플레이어가 지금\n출발했는지 끝났는지를 자세로 구분할 수 없었습니다. 새 Dash는 짧은 세 자세만 사용해 캐릭터\n정체성을 보존하면서 행동의 시작·이동·회복을 분명히 보여 줍니다.\n\n## 사용자 경험\n\n- 멈추면 마지막으로 바라본 좌우 방향을 유지한 채 6fps 호흡을 반복합니다.\n- 직선 Dash를 시작하면 0.05초 동안 몸을 낮추고, 0.20초 이동 자세를 유지한 뒤, 0.05초 동안\n  균형을 되찾습니다.\n- 잔상은 이동 자세에서만 경로 뒤에 생깁니다. 회복 자세가 시작되면 남은 잔상이 본체로\n  수렴하며 사라져 행동 종료를 알려 줍니다.\n- 북쪽이나 남쪽으로 멈춘 경우에는 마지막 좌우 방향을 기억해 캐릭터가 이유 없이 반전되지\n  않습니다.\n\n## 핵심 원칙과 설계 철학\n\n### 발은 고정하고 호흡은 상체에서 만든다\n\n호흡 프레임은 캐릭터 전체 크기를 바꾸지 않습니다. 신발과 하체는 같은 위치를 유지하고,\n가슴·어깨·머리의 작은 상승과 이완으로 중립→들숨→정점→날숨→복귀를 만듭니다.\n\n![좌우 8프레임 호흡 제작 결과](./media/character-2d-rendering/v010/idle-two-direction-contact-sheet.png \"발과 골반을 고정한 채 상체만 호흡하는 좌우 8프레임 제작 결과\")\n\n### 행동을 설명하는 최소 키포즈만 사용한다\n\nDash는 많은 중간 프레임보다 세 개의 명확한 자세를 우선합니다. 가운데 이동 자세는 승인된\n실루엣을 70% 크기로 조정해 속도감을 만들고, 양끝의 예비·회복 자세는 바닥 접지와 머리·신발\n비율을 유지합니다.\n\n![좌우 Dash 3단계 키포즈](./media/character-2d-rendering/v010/dash-three-phase-contact-sheet.png \"예비 0.05초·이동 0.20초·회복 0.05초로 행동의 시작과 끝을 구분한 제작 결과\")\n\n### 잔상은 원화가 아니라 런타임 행동이다\n\n잔상을 PNG 안에 그려 넣지 않습니다. 실제 이동 경로를 따라 현재 Dash 프레임을 복제하고,\n회복 구간에서 본체 위치로 되돌려야 방향·거리 변경에도 같은 규칙이 유지됩니다.\n\n![Dash 잔상 타임라인](./media/character-2d-rendering/v010/dash-afterimage-timeline.gif \"이동 중 생성된 잔상이 회복 구간에서 본체로 모여 사라지는 전체 시간 흐름\")\n\n## 결정 사항과 범위\n\n- 현재 제작 방향은 East·West 두 방향이며 반대편은 결정적으로 수평 반전합니다.\n- Idle은 8프레임 6fps, Dash는 3프레임 0.30초를 사용합니다.\n- Dash의 이동 거리, 방향 잠금, 쿨다운과 충돌 규칙은 바꾸지 않습니다.\n- Hit·Death·Clear의 기존 제작 방식과 PC 전용 표현 개선은 이번 범위에 포함하지 않습니다.\n- 제작 후보·품질 검사·승인 기록과 게임용 128px 아틀라스를 함께 보존합니다.\n\n## 현재 결과\n\n모바일 Play에서 정지 중 승인된 호흡 아틀라스가 좌우 방향을 유지하며 반복됩니다. 장착 무기와\nNPC가 함께 있는 실제 필드에서도 캐릭터 실루엣과 바닥 접지가 유지됩니다.\n\n![모바일 Play의 호흡 Idle](./media/character-2d-rendering/v010/studio-idle-mobile.jpg \"Galaxy A06 세로 Play에서 마지막 좌우 방향을 유지한 호흡 캐릭터가 필드와 장착 무기 사이에서 읽히는 결과\")\n\nDash 이동 구간에서는 캐릭터 뒤에 보라·청록 잔상이 겹쳐 속도를 강조하고, 원본 캐릭터와\n장착 무기는 계속 같은 행동 중심을 공유합니다.\n\n![모바일 Play의 Dash 잔상](./media/character-2d-rendering/v010/studio-dash-afterimage-mobile.jpg \"Galaxy A06 세로 Play에서 이동 경로 뒤에만 잔상이 생성되고 본체 쪽으로 수렴하는 결과\")\n\n## 구현 참고\n\n게임은 Idle·Run·Dash에서 8방향 값을 그대로 아틀라스 행으로 쓰지 않고 마지막 수평 방향을\nEast 또는 West로 축약합니다. Idle과 Dash는 각각 생성된 메타데이터 모듈이 프레임 수·행·\n구간 경계를 제공합니다. Dash 잔상은 월드 위치를 화면 좌표로 투영하는 별도 레이어이며,\n이동 간격과 최대 개수·투명도·수렴 시간을 생성 데이터에서 읽습니다.\n\n## 검증\n\n- 게임용 Idle `1024×256 RGBA`, Dash `384×256 RGBA` 아틀라스와 업로드 자산 ID를 검사했습니다.\n- 좌우 반전, 투명 여백, 발 고정, 프레임 고유성, 정확한 타이밍 미리보기와 생성 모듈 일치를\n  30개 자동 테스트로 확인했습니다.\n- Roblox Studio 모바일 Play에서 Idle과 Dash 자산 로드, Dash 이동 잔상, 장착 무기·NPC와의\n  동시 표현을 확인했습니다.\n\n## 후속 기획\n\n다음 모션을 추가할 때도 통짜 캐릭터, 바닥 접지, 최소 키포즈, 런타임 효과 분리 원칙을\n유지합니다. Hit·Death·Clear는 각각 필요한 방향 수와 행동 종료 조건을 먼저 확정한 뒤 별도\n승인 단위로 제작합니다.\n",
          "source_path": "wiki/content/pages/character-2d-rendering/v010.md",
          "timeline_order": 43
        },
        {
          "id": "character-2d-rendering",
          "title": "프레임 캐릭터 렌더링과 스프라이트 제작",
          "summary": "장착 무기를 캐릭터 위에 방향 반응 이미지로 표시하고, Dash는 0.30초 동안 20스터드를 잠금 이동하면서 시작 순간의 프레임 스프라이트를 그대로 유지합니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "character",
            "sprite",
            "rendering",
            "equipped",
            "weapon",
            "billboard",
            "direction",
            "dash",
            "action",
            "mobile",
            "roblox"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-18",
          "authors": [
            "Codex"
          ],
          "version": 9,
          "change_type": "updated",
          "change_summary": "최대 6개 장착 무기의 독립 부유·8방향 회전을 추가하고, Dash를 20스터드 잠금 이동과 시작 프레임 고정 방식으로 바꿔 모듈식 Walk/Dash 이미지 전환을 제거했습니다.",
          "supersedes": "character-2d-rendering@v008",
          "sources": [
            "wiki/content/pages/character-2d-rendering/v008.md",
            "wiki/content/media/character-2d-rendering/v009/studio-equipped-weapon-galaxy-a06.jpg",
            "docs/gameplay/character-actions.md",
            "src/ReplicatedStorage/BackpackUI/EquippedItemModel.luau",
            "src/ReplicatedStorage/BackpackUI/EquippedWeaponBillboard.luau",
            "src/ReplicatedStorage/Character2D/CharacterController.luau",
            "src/ReplicatedStorage/Character2D/Config.luau",
            "src/ReplicatedStorage/Character2D/DirectionResolver.luau",
            "src/ReplicatedStorage/Character2D/PlayerActionController.luau",
            "src/ServerScriptService/InventoryService.luau",
            "src/ServerScriptService/InventoryBootstrap.server.luau",
            "src/StarterPlayer/StarterPlayerScripts/BackpackUIBootstrap.client.luau",
            "tests/DirectionResolver.spec.luau",
            "tests/test_two_direction_run_build.py",
            "tests/test_native_backpack_ui.py"
          ],
          "related": [
            "inventory-item-concept",
            "product-planning-change-log",
            "project-overview"
          ],
          "validation": [
            "luau tests/DirectionResolver.spec.luau: Character2D direction tests passed",
            "bash tools/test_character_assets.sh: Character gameplay atlas tests passed",
            "python3 -m unittest tests.test_two_direction_run_build: passed",
            "python3 -m unittest discover -s tests -p 'test_*.py': 68 tests passed",
            "Roblox Studio MCP Play, Galaxy A06 세로 359×718: 포켓 네일건 이미지가 캐릭터 위에 표시되고 ActiveWeaponCount=1 확인",
            "Roblox Studio MCP: West 방향 슬롯 회전 87.8°, East 방향 슬롯 회전 -92.1° 확인",
            "Roblox Studio MCP Play, Galaxy A06: Dash 19.46 studs, 0.30초 이동 중 WalkSpeed=0·AutoRotate=false, 종료 뒤 16·true 복원",
            "Roblox Studio MCP runtime console: 최종 플레이 오류·경고 없음",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "git diff --check"
          ],
          "body": "# 프레임 캐릭터 렌더링과 스프라이트 제작\n\n## 기획 배경과 목표\n\n장착한 무기는 인벤토리 안의 숫자로만 끝나지 않고 필드에서 플레이어의 빌드를 즉시 보여\n주어야 합니다. 다만 2D 캐릭터의 승인된 프레임 아틀라스에 무기를 직접 합성하면 무기 조합\n수만큼 스프라이트를 다시 제작해야 하고, 장비가 바뀔 때마다 캐릭터 자산 파이프라인이\n오염됩니다.\n\n이번 버전은 캐릭터 아틀라스를 그대로 유지하면서 장착 무기 이미지를 별도 Billboard 계층에\n표시합니다. 최대 여섯 이미지는 캐릭터 머리 위의 열린 고리 형태로 배치되고 서로 다른 속도와\n위상으로 천천히 부유합니다. 캐릭터가 방향을 바꾸면 현재 8방향 상태를 같은 화면 회전 규칙으로\n변환해 무기도 함께 방향을 맞춥니다.\n\n동시에 Dash는 순간적인 속도 충격에서 거리 기반 잠금 이동으로 정리했습니다. 선택한 방향을\n0.30초 동안 유지해 장애물이 없는 길에서 20스터드를 이동하고, 그동안 조향과 자동 회전을\n막습니다. 스프라이트는 별도의 모듈식 Dash 포즈로 바꾸지 않고 시작 직전의 완성 프레임을\n그대로 유지합니다.\n\n## 의도한 플레이어 경험\n\n- 필드에서 자신의 장착 무기 수와 종류를 인벤토리를 열지 않고도 알아봅니다.\n- 한 개일 때는 캐릭터 위에 가볍게 떠 있고, 여러 개일 때는 중앙을 가리지 않는 고리를 만듭니다.\n- 여섯 이미지가 하나의 딱딱한 판처럼 움직이지 않고 각자 작게 흔들립니다.\n- 캐릭터가 여덟 방향으로 회전하면 무기 그림도 같은 방향 체계를 따릅니다.\n- 다른 플레이어의 장착 무기도 같은 서버 복제 상태로 확인할 수 있습니다.\n- Dash를 시작하면 방향이 중간에 흔들리지 않고 약 20스터드를 일관되게 이동합니다.\n- Dash 중에는 현재 Run/Idle 프레임이 멈춰 몸·머리 비율이 다른 모듈식 포즈로 바뀌지 않습니다.\n- Dash가 끝나면 기존 WalkSpeed·AutoRotate와 현재 이동 입력이 즉시 복원됩니다.\n\n## 최종 모바일 결과\n\n![캐릭터 위 장착 무기](./media/character-2d-rendering/v009/studio-equipped-weapon-galaxy-a06.jpg \"Galaxy A06 세로 Play에서 포켓 네일건 이미지가 캐릭터 머리 위에 독립적으로 떠 있는 결과입니다\")\n\n## 핵심 원칙과 설계 철학\n\n### 캐릭터 아틀라스와 장착 이미지를 분리한다\n\n캐릭터 몸·머리 Run 아틀라스는 기존 승인본을 유지합니다. 무기는 `BillboardGui`의 투명\n`ImageLabel`로만 표시해 조합 수가 늘어도 캐릭터 스프라이트를 다시 생성하지 않습니다.\n장착 상태가 없어지면 Billboard 자체를 파괴하지 않고 비활성화해 생성과 해제를 반복하지\n않습니다.\n\n### 서버 상태는 아이콘과 안정적인 슬롯만 복제한다\n\n서버는 플레이어 아래 `EquippedWeapons` 폴더와 `Slot01..06` 문자열 값만 관리합니다.\n각 슬롯에는 아이콘과 InstanceId·DefinitionId·DisplayName 속성을 넣고 리비전을 올립니다.\n클라이언트는 이 데이터만 읽어 모든 캐릭터의 Billboard를 갱신합니다.\n\n### 방향은 기존 8방향 모델의 파생값이다\n\n새로운 무기 전용 방향 상태를 만들지 않습니다. `CharacterController`가 현재 방향을\n`Character2DFacingDirection` 속성으로 공개하고, `DirectionResolver.ToScreenRotation`이\nSouth 0°를 기준으로 여덟 섹터를 화면 각도로 바꿉니다. 방향 판정과 장착 이미지가 서로 다른\n기준으로 흔들리지 않습니다.\n\n### 부유 애니메이션은 읽기 쉬운 경계를 지킨다\n\n각 슬롯은 고정된 고리 위치를 기준으로 작은 수평·수직 진폭과 기울기만 적용합니다. 서로\n다른 속도와 위상으로 독립성을 주되 중앙 캐릭터와 다른 장착 무기를 침범할 정도로 이동하지\n않습니다. 이미지 뒤의 카드, 외곽선, 모서리 장식은 사용하지 않습니다.\n\n### Dash는 속도 충격이 아니라 시간과 거리의 계약이다\n\nDash 속도는 고정 상수가 아니라 `distance / duration`으로 계산합니다. 0.30초 동안 입력\n조향과 Humanoid 자동 회전을 잠그고 Heartbeat마다 같은 평면 방향 속도를 유지합니다.\n장애물과 충돌하면 물리를 우회하지 않으며, 종료·캐릭터 교체·컨트롤러 정지 때 원래 이동\n상태를 복원합니다.\n\n### 완성 프레임 캐릭터는 모듈식 Walk/Dash로 교체하지 않는다\n\n현재 Run 아틀라스는 몸과 머리가 합쳐진 승인 렌더입니다. 프레임 스프라이트 모드에서는\n이동 속도가 임계값을 넘으면 Idle과 Run만 사용하고 레거시 모듈식 Walk를 사이에 넣지\n않습니다. Dash도 시작 순간의 State와 Phase를 고정해 같은 캐릭터 비율을 유지합니다.\n\n## 최종 결정 사항과 범위\n\n- Billboard 최대 슬롯 수는 인벤토리 장착 제한과 같은 6개입니다.\n- 슬롯 위치는 좌우 한 쌍과 상·하단 두 쌍으로 열린 고리 실루엣을 만듭니다.\n- 각 슬롯은 56×56 이미지이며 Billboard는 224×120, 월드 오프셋은 Y 15.8을 사용합니다.\n- 장착 이미지가 하나 이상일 때만 Billboard를 활성화합니다.\n- 로컬 플레이어뿐 아니라 현재 접속 중인 모든 플레이어와 이후 참가자를 추적합니다.\n- 캐릭터 교체와 플레이어 이탈 때 연결과 Billboard를 정리합니다.\n- South, SouthWest, West, NorthWest, North, NorthEast, East, SouthEast를 각각\n  0°, 45°, 90°, 135°, 180°, -135°, -90°, -45°로 변환합니다.\n- 이번 범위는 장착 아이콘 표시입니다. 실제 무기 모델, 공격 애니메이션, 투사체와 타격\n  표현은 후속 전투·아트 범위입니다.\n- Dash 지속시간과 쿨다운은 모두 0.30초, 장애물이 없는 기준 이동 거리는 20스터드입니다.\n- Dash 방향은 시작 시 캐릭터 속성에 기록하고 지속시간 동안 입력으로 다시 계산하지 않습니다.\n- Dash 중 WalkSpeed는 0, AutoRotate는 false이며 끝난 뒤 시작 전 값으로 복원합니다.\n- 프레임 스프라이트 Dash는 별도 Dash 포즈를 샘플링하지 않고 시작 프레임을 유지합니다.\n- 프레임 스프라이트의 일반 이동 상태는 Idle 또는 Run이며 모듈식 Walk로 전환하지 않습니다.\n\n## 구현 구조\n\n`InventoryService.PublishEquippedWeapons`가 권위 보드의 유효한 무기를 최초 배치 순서로\n최대 6개까지 복제합니다. 초기 플레이어도 원격 호출을 기다리지 않고 상태가 준비되도록\n서버 부트스트랩이 참가 시 보드를 불러옵니다.\n\n`EquippedWeaponBillboard`는 플레이어·캐릭터·복제 폴더의 수명 주기를 각각 추적합니다.\n리비전 변경 때 아이콘과 메타데이터를 갱신하고 `RenderStepped`에서 슬롯별 부유 위치와\n기울기를 계산합니다. 캐릭터가 다시 생성되면 새 HumanoidRootPart에 Billboard를 붙입니다.\n\n`CharacterController`는 생성 시와 방향 변경 시 캐릭터 속성을 갱신합니다.\n`DirectionResolver`는 이동 판정·원본 프레임 선택에 더해 화면 회전 변환을 제공하므로\n새 방향 테이블이 외부 모듈에 중복되지 않습니다.\n\n`PlayerActionController`는 Dash 시작 시 원래 WalkSpeed·AutoRotate를 보관하고,\nHeartbeat 연결과 세대 번호로 이전 Dash 콜백을 무효화합니다. 종료 시 현재 MoveDirection을\n원래 속도로 복원합니다. `CharacterController`는 DashDirection을 한 번만 방향으로\n변환하고 저장한 State·Phase를 지속시간 동안 다시 적용합니다.\n\n## 검증\n\nGalaxy A06 세로 359×718 Play에서 인벤토리를 닫은 뒤 포켓 네일건 이미지가 캐릭터 위에\n표시되고 Billboard의 `ActiveWeaponCount=1`을 확인했습니다. 캐릭터가 West일 때 첫 슬롯\n회전은 부유 기울기를 포함해 87.8°, East일 때 -92.1°로 바뀌어 기준 ±90°를 따랐습니다.\n최종 런타임 콘솔은 비어 있었습니다.\n\nDirectionResolver의 여덟 방향 각도 테스트, 캐릭터 자산 검사와 Python 전체 테스트 68개가\n통과했습니다. 모바일 증거에서는 아이콘이 캐릭터와 필수 상단 UI를 가리지 않았습니다.\n\n같은 Galaxy A06 Play에서 Dash는 장애물이 없는 출발점 기준 19.46스터드를 이동했습니다.\n0.30초 이동 구간의 모든 관측에서 WalkSpeed=0, AutoRotate=false였고, 종료 뒤에는 각각\n16과 true로 복원됐습니다. 최종 방향은 NorthEast로 잠겼고 런타임 콘솔은 비어 있었습니다.\n\n## 후속 기획\n\n- 장착 수가 2~6개일 때 실제 전투 화면의 가독성과 다른 플레이어 간 겹침을 추가 검증합니다.\n- 원거리 줌과 여러 캐릭터가 모이는 전투에서 MaxDistance와 월드 오프셋을 플레이 경험 기준으로\n  조정합니다.\n- 무기별 공격 방향·반동이 필요해지면 현재 공통 방향 속성을 사용하되 Billboard 부유와 실제\n  공격 표현을 같은 애니메이션으로 결합하지 않습니다.\n- Dash의 충돌·경사·네트워크 지연을 실제 전투 맵에서 검증하고, 거리 계약은 장애물을\n  통과시키지 않는 현재 물리 원칙 안에서만 조정합니다.\n",
          "source_path": "wiki/content/pages/character-2d-rendering/v009.md",
          "timeline_order": 36
        },
        {
          "id": "character-2d-rendering",
          "title": "프레임 캐릭터 렌더링과 스프라이트 제작",
          "summary": "현재 승인된 East/West 달리기 아틀라스만 생산 기준으로 유지하고, 색상 마커의 물리적 소유 영역과 공급자 프레임 경로를 엄격히 구분해 잘못된 승격을 막습니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "character",
            "sprite",
            "rendering",
            "animation",
            "pipeline",
            "validation",
            "locomotion",
            "roblox"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-13",
          "authors": [
            "Codex"
          ],
          "version": 8,
          "change_type": "corrected",
          "change_summary": "색상 마커가 다른 소품에 재사용될 때도 실제 소유 팔다리를 증명하도록 영역 계약을 추가하고, 공급자 순서 프레임에는 모듈식 몸체 산출물을 만들지 않으며, 폐기된 8방향·Walk 중간물을 정리했습니다.",
          "supersedes": "character-2d-rendering@v007",
          "sources": [
            "wiki/content/pages/character-2d-rendering/v007.md",
            "wiki/content/media/character-2d-rendering/v008/studio-runtime-character.jpg",
            ".agents/skills/create-2d-sprite-animation/references/locomotion-landmark-schema.md",
            ".agents/skills/create-2d-sprite-animation/scripts/validate_locomotion_landmarks.py",
            "Assets/Characters/Player/SpriteProduction/production_manifest.json",
            "Assets/Characters/Player/SpriteProduction/Build/Run2D/RookieMale_Run_EastWest_Metadata.json",
            "src/ReplicatedStorage/Character2D/CharacterRenderer.luau",
            "tools/sprite_animation_pipeline.py",
            "tests/test_sprite_animation_pipeline.py"
          ],
          "related": [
            "world-art-bible",
            "project-overview",
            "studio-automation-routing"
          ],
          "validation": [
            "python3 .agents/skills/create-2d-sprite-animation/scripts/validate_locomotion_landmarks.py --self-test",
            "python3 -m unittest tests.test_sprite_animation_pipeline",
            "bash tools/test_character_assets.sh",
            "Roblox Studio MCP Play, iPhone 17 Pro 세로: 필드 중앙 캐릭터 렌더링과 빈 런타임 콘솔 확인",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "git diff --check"
          ],
          "body": "# 프레임 캐릭터 렌더링과 스프라이트 제작\n\n## 기획 배경과 목표\n\nv007에서 승인된 East/West 8프레임 달리기 아틀라스는 실제 게임 기준으로 충분히 깨끗한\n상태입니다. 이후 실험에서 8방향 확장, 모듈식 Walk 몸체와 공급자 프레임 순서가 한 생산\n폴더 안에 섞이면서, 아직 승인되지 않은 중간물이 현재 런타임처럼 보이거나 한 경로의\n메타데이터가 다른 경로에 잘못 생성될 위험이 생겼습니다.\n\n또한 신발과 소매의 색상 마커는 팔다리 소유권을 증명하는 센서지만, 같은 색을 장비나\n장식이 사용하면 전역 색상 검색만으로는 잘못된 위치를 승인할 수 있습니다. 이번 정리는\n현재 승인본을 바꾸는 작업이 아니라 생산 경계와 검증 증거를 더 엄격히 만드는 작업입니다.\n\n## 제작자와 플레이어 경험\n\n플레이어가 보는 캐릭터와 8fps East/West 달리기 동작은 v007 승인본 그대로입니다.\n제작자는 새 프레임을 검수할 때 각 색상 마커가 어느 팔다리 영역에 있어야 하는지,\n같은 색을 허용할 수 있는 소품 영역은 어디인지 명시해야 합니다. 공급자가 완성 프레임\n순서를 제공한 Run은 하나의 합성 이미지로 취급하며, 존재하지 않는 모듈식 몸체와 머리\n작업 폴더를 자동으로 만들지 않습니다.\n\n![현재 필드의 승인 캐릭터 런타임](./media/character-2d-rendering/v008/studio-runtime-character.jpg \"iPhone 17 Pro 세로 Play에서 현재 East/West 승인 아틀라스를 사용하는 캐릭터가 필드 중앙에 렌더링된 결과\")\n\n## 핵심 원칙과 설계 철학\n\n### 마커 색이 아니라 물리적 소유 영역을 증명한다\n\n마커 영역 계약은 소유 팔다리 영역, 반대 팔다리 금지 영역과 명시적인 색 재사용 영역을\n구분합니다. 소유 영역 안에는 정확히 하나의 연결 컴포넌트가 완전히 들어와야 하고,\n반대 영역과 교차하거나 선언되지 않은 제3 위치에 같은 색이 있으면 실패합니다. 단순히\n색 픽셀 수가 맞는다는 이유로 손발이 바뀐 프레임을 승인하지 않습니다.\n\n### 서로 다른 생산 경로는 서로의 산출물을 흉내 내지 않는다\n\n`phasesFrom=providerFrameOrder`인 클립은 공급자 완성 프레임 경로입니다. 파이프라인은 이\n클립을 모듈식 body/head 합성 경로로 해석하지 않고, 현재 매니페스트에 없는 Walk 전용\n품질 게이트를 강요하지 않습니다. 대신 공통 프레임·접지·빌드 계약은 그대로 검사합니다.\n\n### 현재 승인본과 실험 중간물을 물리적으로 분리한다\n\n현재 권위는 `Build/Run2D`와 production manifest, 업로드 ID입니다. 폐기된 South Walk\n프로토타입, 미승인 8방향 참조, 중복 Prepared·Runtime·QA 복사본은 제거했습니다. 승인\n프레임, 외곽 교정 증거와 최종 빌드만 저장소에 남깁니다.\n\n## 현재 결과와 구현 참고\n\n랜드마크 검증기는 영역 정의의 범위, 중복 이름, 완전 포함, 금지 영역 교차와 선언되지\n않은 색 컴포넌트를 fail-closed 방식으로 검사합니다. 스프라이트 파이프라인은 클립의\n생산 방식을 먼저 판별해 공급자 프레임 Run에 모듈식 Work 메타데이터를 만들지 않습니다.\n런타임 `CharacterRenderer`는 Studio의 헤드리스·자동 검증에서도 애니메이션이 진행되도록\n렌더 스텝을 사용할 수 없을 때 Heartbeat 경로를 사용합니다.\n\n## 검증\n\n영역 계약 자체 테스트는 정상 소유, 잘못된 팔다리, 선언되지 않은 재사용과 영역 경계\n교차를 포함해 통과했습니다. 스프라이트 파이프라인 단위 테스트와 캐릭터 에셋 검사도\n통과했으며, Studio MCP iPhone 17 Pro 세로 Play에서 현재 캐릭터가 중앙에 렌더링되고\n런타임 콘솔이 비어 있음을 확인했습니다. 검증 후 Studio는 기본 뷰포트로 복원했습니다.\n\n## 후속 기획\n\n- 전용 West 또는 새 방향을 만들 때는 새 프레임을 승인한 뒤에만 production manifest와\n  런타임 아틀라스에 추가합니다.\n- 마커와 같은 색을 장비가 사용해야 한다면 좁은 재사용 영역과 적용 프레임을 명시하고,\n  전역 허용이나 거리 완화로 우회하지 않습니다.\n- 새로운 생성 공급자를 연결할 때는 완성 프레임, 키프레임 보간, 모듈식 합성 중 어느\n  생산 경로인지 먼저 선언합니다.\n",
          "source_path": "wiki/content/pages/character-2d-rendering/v008.md",
          "timeline_order": 26
        },
        {
          "id": "character-2d-rendering",
          "title": "프레임 캐릭터 렌더링과 스프라이트 제작",
          "summary": "승인된 Pixel Engine 달리기 동작은 그대로 유지하면서 투명 외곽의 밝은 프린지를 제거해, 어두운 게임 배경에서도 캐릭터 실루엣이 깨끗하게 보이는 런타임 에셋으로 교체했습니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "character",
            "sprite",
            "rendering",
            "animation",
            "art",
            "pipeline",
            "validation",
            "locomotion",
            "roblox",
            "pixel-engine"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-10",
          "authors": [
            "Codex"
          ],
          "version": 7,
          "change_type": "corrected",
          "change_summary": "검은 배경에서 보이던 회색·흰색 외곽 도트를 생성형 재드로잉 없이 제거하고, 같은 8프레임 포즈를 1024px 보존 마스터와 새 Roblox 런타임 에셋으로 다시 배포함",
          "supersedes": "character-2d-rendering@v006",
          "sources": [
            "wiki/content/pages/character-2d-rendering/v006.md",
            "wiki/content/media/character-2d-rendering/v007/edge-fringe-before-after.png",
            "wiki/content/media/character-2d-rendering/v007/edge-clean-east-run-8fps.gif",
            "wiki/content/media/character-2d-rendering/v007/edge-clean-two-direction-contact-sheet.png",
            "wiki/content/media/character-2d-rendering/v007/studio-edge-clean-live-result.jpg",
            "Assets/Characters/Player/SpriteProduction/production_manifest.json",
            "Assets/Characters/Player/SpriteProduction/Build/Run2D/RookieMale_Run_EastWest_Metadata.json",
            "Assets/Characters/Player/SpriteProduction/Build/Run2D/QA/report.json",
            "Assets/Characters/Player/SpriteProduction/Build/Run2D/uploaded_asset_ids.json",
            "Assets/Characters/Player/SpriteProduction/Candidates/v2/RookieMale/Run/East/pixelengine-frameengine-east-v2-approved/Refinement/edge-decontamination-v1/QA/report.json",
            "Assets/Characters/Player/SpriteProduction/Candidates/v2/RookieMale/Run/East/pixelengine-frameengine-east-v2-approved/Refinement/edge-decontamination-v1/user-approval.json",
            "Assets/Characters/Player/SpriteProduction/Candidates/v2/RookieMale/Run/East/pixelengine-frameengine-east-v2-approved/promotion-approval.json",
            "src/ReplicatedStorage/Character2D/AssetRegistry.luau",
            "tests/test_two_direction_run_build.py"
          ],
          "related": [
            "project-overview",
            "studio-automation-routing"
          ],
          "validation": [
            "East/West 1024px·256px·128px 시퀀스 QA 6종: 0 errors, 0 warnings",
            "기존 대비 alpha>=128 실루엣 IoU 최소 0.999806",
            "배경색 유사 외곽 픽셀 8프레임 합계: 483에서 9로 감소",
            "East/West APNG 각각 8프레임 × 125ms = 1000ms 무한 루프",
            "python3 -m unittest tests.test_two_direction_run_build",
            "bash tools/test_character_assets.sh",
            "luau-compile src/ReplicatedStorage/Character2D/AssetRegistry.luau",
            "Roblox Studio MCP upload_image: rbxassetid://91295241781335",
            "Roblox Studio MCP Play/Client: 업로드 에셋 16/16 로드, East Y=0, West Y=128, X=0..896",
            "Roblox Studio MCP Play 콘솔: 게임 오류 출력 없음",
            "Roblox Studio 삼성 갤럭시 A06 800×360 모바일 프리셋 검은 배경 시각 검사"
          ],
          "body": "# 프레임 캐릭터 렌더링과 스프라이트 제작\n\n## 기획 배경과 목표\n\n달리기 동작 자체는 Pixel Engine 결과로 충분한 품질을 얻었지만, 초기 로컬 배경 제거본은\n검은 화면에서 캐릭터 외곽에 회색 또는 흰색 도트가 드러났습니다. 이 문제는 포즈나 원화\n품질이 아니라 원래 회색 배경의 RGB가 반투명 가장자리 픽셀에 남은 알파 프린지였습니다.\n\n이번 교체의 목표는 승인된 8프레임 동작과 캐릭터 디자인을 다시 해석하지 않고, 어두운\n게임 배경에서도 실루엣이 깨끗하게 읽히도록 투명 외곽만 교정하는 것입니다. 생성형\n재드로잉은 얼굴·팔·신발·장비와 프레임 타이밍을 바꿀 수 있으므로 사용하지 않았습니다.\n\n## 사용자 경험\n\n플레이어가 달릴 때 머리카락, 배낭, 팔, 신발 가장자리 주변에 밝은 점선이 따라붙지\n않습니다. 캐릭터의 크기, 포즈, 속도와 1초짜리 8프레임 루프는 이전 승인본과 동일하게\n느껴지며, 차이는 배경과 맞닿는 외곽이 자연스럽게 정리됐다는 점입니다.\n\n![외곽 프린지 제거 전후](./media/character-2d-rendering/v007/edge-fringe-before-after.png \"위 행은 회색 배경 RGB가 남은 기존 컷아웃, 아래 행은 검은 배경에서 외곽 오염을 제거한 최종 프레임\")\n\n![외곽 교정 후 우측 달리기](./media/character-2d-rendering/v007/edge-clean-east-run-8fps.gif \"승인된 Pixel Engine 포즈와 8fps 타이밍을 그대로 유지한 최종 East Run\")\n\n## 핵심 원칙과 설계 철학\n\n### 동작 문제와 합성 문제를 분리\n\n좋은 동작을 다시 생성하면 해결된 모션까지 위험해집니다. 이번 문제는 합성 경계에만\n있었으므로 Pixel Engine이 만든 포즈와 불투명 내부를 보존하고, 반투명 가장자리의 회색\n배경 성분만 주변의 실제 캐릭터 색으로 복원했습니다.\n\n### 고해상도 보존과 런타임 출력을 분리\n\n원본 640px 셀에서 정리한 결과를 공통 변환으로 1024×1024 보존 마스터에 올리고,\npremultiplied-alpha 방식으로 256px 검수본과 128px Roblox 런타임본을 만들었습니다.\n프레임별 크기 맞춤이나 생성형 확대는 사용하지 않아 몸 크기가 펌핑되거나 포즈가\n변형되지 않습니다.\n\n### 승인된 픽셀만 승격\n\n검은 배경 전후 비교, 정리 보고서와 최종 런타임 PNG 해시를 새 사용자 승인에 묶었습니다.\n최종 1024×256 런타임 아틀라스 SHA-256은\n`eb499e4a3edaac7221476abe4823018665f7fde9068f9ef32119f6bbe5013b63`이며,\n새 Roblox 이미지 ID는 `rbxassetid://91295241781335`입니다.\n\n## 결정 사항과 범위\n\n- Pixel Engine Frame Engine 1.1의 East 8프레임 포즈와 순서를 그대로 유지합니다.\n- East/West 두 행, 8열, 8fps와 125ms 프레임 타이밍은 변경하지 않습니다.\n- 외곽 교정은 회색 배경 디컨탐네이션, premultiplied-alpha 리샘플링, alpha 4 이하\n  링잉 제거와 권위 연결 실루엣 보존으로 제한합니다.\n- 1024px 셀은 보존 마스터이며 Roblox는 128px 셀의 1024×256 아틀라스를 사용합니다.\n- West는 계속 East의 임시 수평 미러이므로 청록·빨강 신발과 소매 패치의 물리적 좌우가\n  화면상 뒤집히는 v006의 한계는 남아 있습니다.\n- 여성 캐릭터, 전용 West와 다른 애니메이션 클립은 이번 교정 범위가 아닙니다.\n\n![교정된 좌우 2방향 프레임](./media/character-2d-rendering/v007/edge-clean-two-direction-contact-sheet.png \"위 행 East와 아래 행 임시 West 모두 같은 외곽 교정과 공통 카메라 변환을 사용\")\n\n## 현재 결과\n\nRoblox Studio Play에서 새 업로드 에셋의 East/West 16셀을 검은 배경 위에 실제\n`ImageRectOffset`으로 표시했습니다. 16개 이미지가 모두 로드됐고, 작은 모바일 표시에서도\n외곽을 따라가던 밝은 도트가 다시 나타나지 않았습니다.\n\n![Studio 최종 외곽 검사](./media/character-2d-rendering/v007/studio-edge-clean-live-result.jpg \"삼성 갤럭시 A06 모바일 프리셋에서 새 Roblox 에셋의 East/West 16셀을 검은 배경으로 검사한 결과\")\n\n## 구현 참고\n\n`AssetRegistry`의 Run 에셋만 새 ID로 교체했으며 방향 해석과 애니메이션 상태 코드는\n바꾸지 않았습니다. 생산 메타데이터는 원본 Pixel Engine SHA, 외곽 교정 보고서,\n1024/256/128px 산출물, 사용자 승인과 업로드 ID를 함께 보존합니다.\n\n## 검증\n\n- East/West 각각 1024px 보존 마스터, 256px 검수본, 128px 런타임본의 RGBA, 안전\n  여백, 분리 조각, 중복과 크기·중심 드리프트 검사에서 오류와 경고가 모두 0건입니다.\n- 기존 프레임과 새 프레임의 `alpha >= 128` 실루엣 IoU는 최소 0.999806입니다.\n- 배경색과 유사한 외곽 픽셀은 8프레임 합계 483개에서 9개로 감소했습니다.\n- East/West APNG는 각각 8프레임, 프레임당 125ms, 총 1000ms 무한 루프입니다.\n- 빌드 단위 테스트 6개, 캐릭터 에셋 검사와 변경된 Registry Luau 컴파일을 통과했습니다.\n- Studio MCP에서 업로드와 새 ID를 확인하고 Play/Client에서 16/16 이미지 로드,\n  East 행 Y=0, West 행 Y=128, X=0부터 896까지의 셀 순회를 확인했습니다.\n- Studio 게임 콘솔에는 오류 출력이 없었습니다.\n\n## 후속 기획\n\n- 실제 필드의 여러 어두운 지형과 밝은 지형에서 캐릭터 표시 크기를 계속 관찰하되,\n  포즈를 바꾸지 않고 표시 스케일만 별도 조정합니다.\n- 전용 West를 만들 때는 이번 외곽 교정 방식을 그대로 적용하면서 신발과 소매 패치의\n  물리적 좌우 소유권을 복구합니다.\n- 이후 클립도 생성 품질과 투명 합성 품질을 분리해 승인하고, 검은 배경 외곽 검사를\n  공통 승격 게이트로 유지합니다.\n",
          "source_path": "wiki/content/pages/character-2d-rendering/v007.md",
          "timeline_order": 21
        },
        {
          "id": "character-2d-rendering",
          "title": "프레임 캐릭터 렌더링과 스프라이트 제작",
          "summary": "검증 비용을 통제하면서도 플레이 감각을 확인할 수 있도록, 사용자 승인 우측 달리기를 기준으로 남성 캐릭터 Run을 좌우 2방향·8fps 생산 POC로 게임에 적용했습니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "character",
            "sprite",
            "rendering",
            "animation",
            "art",
            "pipeline",
            "validation",
            "locomotion",
            "roblox",
            "pixel-engine"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-09",
          "authors": [
            "Codex"
          ],
          "version": 6,
          "change_type": "updated",
          "change_summary": "8방향 전체 제작 전에 게임성부터 확인하도록 범위를 줄이고, Pixel Engine에서 사용자가 승인한 East Run 8프레임을 로컬 후처리해 East/West 2행 런타임 아틀라스로 적용함",
          "supersedes": "character-2d-rendering@v005",
          "sources": [
            "wiki/content/pages/character-2d-rendering/v005.md",
            ".agents/skills/projectbackpack-run-keyframes/SKILL.md",
            "wiki/content/media/character-2d-rendering/v006/approved-male-character-concept.png",
            "wiki/content/media/character-2d-rendering/v006/two-direction-run-contact-sheet.png",
            "wiki/content/media/character-2d-rendering/v006/east-run-8fps-preview.gif",
            "wiki/content/media/character-2d-rendering/v006/studio-two-direction-run-result.jpg",
            "Assets/Characters/Player/SpriteProduction/production_manifest.json",
            "Assets/Characters/Player/SpriteProduction/Build/Run2D/RookieMale_Run_EastWest_Metadata.json",
            "Assets/Characters/Player/SpriteProduction/Build/Run2D/QA/report.json",
            "Assets/Characters/Player/SpriteProduction/Build/Run2D/uploaded_asset_ids.json",
            "Assets/Characters/Player/SpriteProduction/Candidates/v2/RookieMale/Run/East/pixelengine-frameengine-east-v2-approved/user-approval.json",
            "Assets/Characters/Player/SpriteProduction/Candidates/v2/RookieMale/Run/East/pixelengine-frameengine-east-v2-approved/promotion-approval.json",
            "src/ReplicatedStorage/Character2D/AssetRegistry.luau",
            "src/ReplicatedStorage/Character2D/CharacterController.luau",
            "src/ReplicatedStorage/Character2D/Config.luau",
            "src/ReplicatedStorage/Character2D/FrameSpriteRig.luau",
            "src/ReplicatedStorage/Character2D/ProductionRunData.luau",
            "tests/test_two_direction_run_build.py"
          ],
          "related": [
            "project-overview",
            "studio-automation-routing"
          ],
          "validation": [
            "East/West master·runtime sequence QA 4종: 0 errors, 0 warnings",
            "East/West APNG 각각 8프레임 × 125ms = 1000ms 무한 루프 확인",
            "python3 -m unittest tests.test_two_direction_run_build",
            "bash tools/test_character_assets.sh",
            "luau-compile ProductionRunData.luau, FrameSpriteRig.luau, AssetRegistry.luau, CharacterController.luau, Config.luau",
            "Roblox Studio MCP upload_image: rbxassetid://83248035359166",
            "Roblox Studio MCP Play/Client: East Y=0, West Y=128, X=0..896/128px 간격, Run 머리 레이어 숨김, North 입력에서 마지막 수평 방향 유지",
            "Roblox Studio MCP Play 콘솔: 오류 출력 없음",
            "Studio MCP screen_capture 두 차례 timeout 후 AGENTS.md 허용 범위에 따라 동일 MCP Play 검증 장면을 Computer Use 읽기 전용 캡처로 보존",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "python3 -m unittest tests/test_wiki.py",
            "git diff --check"
          ],
          "body": "# 프레임 캐릭터 렌더링과 스프라이트 제작\n\n## 기획 배경과 목표\n\n이번 단계의 목표는 8방향 전체를 빠르게 채우는 것이 아니라, 실제 게임에서 달리기가\n충분히 매력적인지 가장 작은 비용으로 증명하는 것입니다. 이전 제작은 한 번에 많은\n방향과 프레임을 다루면서 정체성·동작·검증 비용이 함께 커졌습니다. 사용자는 우측\n달리기 한 방향을 먼저 확인하는 경로로 범위를 줄였고, Pixel Engine에서 나온 정확한\n8프레임 결과를 게임 적용 대상으로 직접 승인했습니다.\n\n따라서 현재 생산 POC는 남성 캐릭터 Run 하나와 East/West 두 방향만 책임집니다.\n우측 결과를 실제 플레이에서 확인할 수 있게 만드는 것이 우선이며, 여성 캐릭터와\nIdle·Dash·Death, 전용 West 원화, 8방향 확장은 이 결과의 플레이 감각이 확인된 뒤\n같은 절차로 진행합니다.\n\n![승인된 남성 캐릭터 콘셉트](./media/character-2d-rendering/v006/approved-male-character-concept.png \"보라색 머리와 배낭, 라임 재킷, 청록·빨강 발목 비대칭, 오리 참을 정체성 기준으로 사용\")\n\n## 사용자 경험\n\n플레이어가 달리기 속도에 도달하면 전신이 한 덩어리로 움직이는 8프레임 달리기가\n초당 8프레임으로 재생됩니다. 화면 오른쪽 계열 입력은 승인된 East 행을, 화면 왼쪽\n계열 입력은 West 행을 사용합니다. 위·아래로 이동할 때는 캐릭터가 갑자기 정면이나\n후면으로 돌지 않고 마지막 좌우 바라보기를 유지합니다.\n\nIdle과 Walk, Dash·Hit·Death·Clear는 이번 변경 범위가 아니므로 기존 호환 아틀라스를\n계속 사용합니다. 이 분리는 달리기 개선이 서 있거나 걷는 상태를 잘못된 달리기\n자세로 덮지 않게 합니다.\n\n![좌우 2방향 달리기 프레임](./media/character-2d-rendering/v006/two-direction-run-contact-sheet.png \"위 행은 승인된 East 원본, 아래 행은 임시 West 미러이며 모든 셀에 같은 공유 카메라 변환을 적용\")\n\n![우측 달리기 8fps 미리보기](./media/character-2d-rendering/v006/east-run-8fps-preview.gif \"8프레임이 1초에 한 번 순환하는 사용자 승인 달리기\")\n\n## 핵심 원칙과 설계 철학\n\n### 한 방향을 먼저 게임에서 증명\n\n이번 POC는 방향 수보다 한 방향의 실제 품질과 적용 가능성을 우선합니다. 승인된\nEast 한 행을 권위 원본으로 두고 게임의 프레임 선택, 타이밍, 알파, 스케일과 에셋\n로딩을 먼저 닫았습니다. 이 결과가 충분할 때만 새 캐릭터와 새 클립으로 확장합니다.\n\n### 모델이 만든 동작과 결정론적 후처리를 분리\n\n포즈와 프레임 순서는 Pixel Engine 결과를 그대로 유지했습니다. 배경 제거에는\n추가 크레딧을 쓰지 않고 로컬 U2Net을 사용했으며, 가장 큰 연결 알파 성분만 보존하고\n완전 투명 픽셀의 RGB를 0으로 정리했습니다. 모든 프레임에는 하나의 공통 축소율과\n오프셋만 적용해 프레임마다 몸 크기가 펌핑되는 문제를 피했습니다.\n\n### 승인과 파생 결과를 해시로 고정\n\n사용자가 승인한 제공자 원본 SHA-256은\n`6aab03d4593562e60f974d092f54c02a5d6dbba400f10c6ef8b157e84d3ed749`,\n최종 1024×256 런타임 아틀라스 SHA-256은\n`91558828e88f2e8903f7ec7c98a4ab5dc216c1ef048b0d3491b8e2b41cfc82b2`입니다.\n승인 기록은 두 해시와 Roblox 에셋 ID를 함께 가리키므로 다른 픽셀로 교체되면 같은\n승인을 재사용할 수 없습니다.\n\n### 미러는 명시적인 임시 타협\n\nWest는 East의 수평 미러입니다. 이 방식은 적은 제작비로 좌우 조작 감각을 확인하는\n데 유용하지만, 청록·빨강 발목과 소매 패치 같은 물리적 좌우 소유권도 화면상 함께\n뒤집습니다. 따라서 현재 West는 2방향 POC용으로만 승인되며, 비대칭의 물리적 의미가\n출시 품질 요구가 되는 시점에는 전용 West 원화로 교체합니다.\n\n## 결정 사항과 범위\n\n- 생산 Run 계약은 `East`, `West` 두 행과 각 8열입니다.\n- East는 Pixel Engine Frame Engine 1.1 제공자 원본, West는 결정론적 수평 미러입니다.\n- 마스터 셀은 256×256, 런타임 셀은 128×128, 런타임 아틀라스는 1024×256 RGBA입니다.\n- Run은 8fps, 프레임당 125ms, 총 1초 무한 루프입니다.\n- Roblox 업로드 에셋은 `rbxassetid://83248035359166`입니다.\n- East·NorthEast·SouthEast는 East 행, West·NorthWest·SouthWest는 West 행을 선택합니다.\n- North와 South 입력은 마지막 수평 바라보기를 유지합니다.\n- Run만 전신 베이크 아틀라스를 사용하고, 나머지 상태는 기존 머리/몸 호환 경로를 유지합니다.\n- 여성 캐릭터와 Idle·Dash·Death 제작, 전용 West, 8방향 복귀는 이번 커밋에 포함하지 않습니다.\n\n## 현재 결과\n\nStudio Play의 모바일 테스트 화면에서 업로드된 아틀라스 16셀을 실제\n`ImageRectOffset` 계약으로 순회했습니다. East는 0행, West는 1행을 사용하며 두 행의\n프레임 순서와 캐릭터 정체성이 유지됩니다.\n\n![Studio 좌우 달리기 적용 결과](./media/character-2d-rendering/v006/studio-two-direction-run-result.jpg \"Roblox Studio Play에서 업로드 에셋의 East/West 16셀을 실제 런타임 오프셋으로 표시한 결과\")\n\n## 구현 참고\n\n`ProductionRunData.luau`가 128px 셀, 8프레임, 8fps와 East 0행·West 1행을 단일\n런타임 계약으로 제공합니다. `FrameSpriteRig`은 8방향 이동 입력을 두 수평 렌더\n방향으로 축약하고 North/South에서 마지막 수평 방향을 보존합니다. Run일 때만\n전신 아틀라스를 사용하고 머리 레이어를 숨겨 중복 얼굴을 막습니다.\n\n`CharacterController`와 `Config`는 프레임 스프라이트 이동 상태의 위상을\n`8 frames / 8 fps`로 계산합니다. 캐릭터 속도가 달라져도 승인된 프레임 순서와\n초당 8프레임 계약은 유지됩니다.\n\n`AssetRegistry`는 업로드 ID와 저장소의 1024×256 런타임 파일을 함께 등록합니다.\n후보 폴더에는 제공자 원본, 로컬 배경 제거 결과, 공유 변환 마스터·런타임 프레임,\n기술 QA, 사용자 승인과 승격 승인 해시가 남습니다.\n\n## 검증\n\n- East/West의 256px 마스터와 128px 런타임 네 시퀀스에서 RGBA, 안전 여백,\n  투명 모서리, 중복, 분리 성분과 크기·중심 드리프트를 검사해 오류와 경고가 모두\n  0건임을 확인했습니다.\n- APNG 두 방향 모두 8프레임, 각 125ms, 총 1000ms 무한 루프임을 읽어 확인했습니다.\n- 빌드 단위 테스트 6개와 캐릭터 에셋 셸 검사를 통과했습니다.\n- 변경된 Luau 모듈 다섯 개를 `luau-compile`로 컴파일했습니다.\n- Studio MCP로 업로드, 모듈 계약 확인, Play 시작·정지, Client 프레임 순회와 콘솔을\n  검증했습니다. East Y=0, West Y=128, X는 0부터 896까지 128px 간격이었고 콘솔\n  오류 출력은 없었습니다.\n- Studio MCP 화면 캡처가 Edit와 Play에서 두 차례 응답 제한을 넘겨, 동일한 MCP\n  Play 검증 장면의 최종 이미지만 허용된 Computer Use 읽기 전용 캡처로 보존했습니다.\n\n## 후속 기획\n\n- 실제 플레이 체감에서 속도·화면 크기·그림자 위치를 확인한 뒤 필요하면 런타임 표시\n  스케일만 조정하고 승인 프레임의 포즈는 유지합니다.\n- 다음 스프라이트 제작은 동일한 캐릭터의 전용 West 또는 여성 East Run 중 플레이\n  우선순위가 높은 하나만 선택해 다시 작은 승인 단위로 진행합니다.\n- 전용 West가 승인되면 미러 행을 교체하고 청록·빨강 발목과 소매 패치의 물리적\n  좌우 소유권을 해시 결합 검증에 복구합니다.\n- 2방향 POC가 게임 방향성에 충분하다고 확인되기 전에는 8방향 대량 제작으로 돌아가지 않습니다.\n",
          "source_path": "wiki/content/pages/character-2d-rendering/v006.md",
          "timeline_order": 19
        },
        {
          "id": "character-2d-rendering",
          "title": "프레임 캐릭터 렌더링과 스프라이트 제작",
          "summary": "겉보기 교대와 파일 규격을 보행 승인으로 오인한 기록을 철회하고, 실제 관절 궤적과 사용자 승인이 없으면 제작을 확장하거나 런타임에 승격할 수 없는 준비 체계로 교정했습니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "character",
            "sprite",
            "rendering",
            "animation",
            "art",
            "pipeline",
            "validation",
            "locomotion",
            "quality-gate",
            "roblox"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-07",
          "authors": [
            "Codex"
          ],
          "version": 5,
          "change_type": "corrected",
          "change_summary": "South 보행의 기존 승인 판정을 회수하고, 프레임 해시에 결합된 관절 좌표·통과 포즈·반대 팔 스윙·후보별 사용자 승인을 다음 제작의 선행 조건으로 고정함",
          "supersedes": "character-2d-rendering@v004",
          "sources": [
            ".agents/skills/create-2d-sprite-animation/SKILL.md",
            ".agents/skills/create-2d-sprite-animation/references/anatomical-motion-gates.md",
            ".agents/skills/create-2d-sprite-animation/references/locomotion-landmark-schema.md",
            ".agents/skills/create-2d-sprite-animation/references/projectbackpack-run-restart.md",
            ".agents/skills/create-2d-sprite-animation/references/prompt-recipes.md",
            ".agents/skills/create-2d-sprite-animation/scripts/validate_locomotion_landmarks.py",
            ".agents/skills/create-2d-sprite-animation/scripts/validate_locomotion_milestone.py",
            "Assets/Characters/Player/SpriteProduction/Metadata/frame_metadata.json",
            "docs/art/sprite-animation-production.md",
            "wiki/content/pages/character-2d-rendering/v004.md"
          ],
          "related": [
            "project-overview",
            "studio-automation-routing"
          ],
          "validation": [
            "python3 -B .agents/skills/create-2d-sprite-animation/scripts/validate_locomotion_landmarks.py --self-test",
            "python3 -B .agents/skills/create-2d-sprite-animation/scripts/validate_locomotion_milestone.py --self-test",
            "실제 South 8PNG로 hash-bound manifest 초기화 후 미기입 landmark·depth·ProjectBackpack marker profile 검증 실행: expected exit 2, 184 errors",
            "python3 -B /Users/t8g-2410-pn-005/.codex/skills/.system/skill-creator/scripts/quick_validate.py .agents/skills/create-2d-sprite-animation",
            "python3 -m py_compile .agents/skills/create-2d-sprite-animation/scripts/validate_locomotion_landmarks.py",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "python3 -m unittest tests/test_wiki.py",
            "git diff --check"
          ],
          "body": "# 프레임 캐릭터 렌더링과 스프라이트 제작\n\n## 기획 배경과 목표\n\n플레이어가 달릴 때 가장 먼저 읽혀야 하는 것은 신발 색이 아니라 체중과 팔다리의\n이동입니다. 서로 다른 발이 접지하고, 스윙 다리가 골반 아래를 지나 반대쪽 리치로\n이어지며, 반대쪽 팔이 함께 교대해야 한 걸음으로 인식됩니다. 이 기본 동작이\n불명확한 상태에서 캐릭터 디테일, 8방향 확장, 패킹과 Studio 적용을 진행하면\n완성 파일 수만 늘고 플레이 경험은 개선되지 않습니다.\n\n`character-2d-rendering@v004`는 South Walk 8프레임이 양발 교대와 반대 팔 스윙,\n루프 연속성 승인을 통과했다고 기록했습니다. 이후 검토에서 그 판정은 이미지에\n결합된 관절 궤적 없이 색상 마커, 파일 규격, 앵커와 서술형 QA에 의존했음이\n확인됐습니다. 따라서 이번 버전은 기존 South 보행의 모션·팔다리 교대·루프\n승인을 철회합니다. 방향, 캔버스, 루트, 목 앵커처럼 별도로 확인된 기술 정보와\nSouth 중립 머리 승인은 유지합니다.\n\n이번 변경의 목표는 새 스프라이트를 만드는 것이 아닙니다. 다음 제작 호출에서\n잘못된 기본 보행을 64프레임으로 확장하기 전에 차단하고, 최소 비용의 모션 증거와\n사용자 확인을 통과한 뒤에만 상세 원화로 진입할 수 있는 준비 상태를 만드는\n것입니다.\n\n## 사용자 경험\n\n다음 제작에서는 사용자가 완성된 8방향 시트를 뒤늦게 평가하지 않습니다. 먼저\nSouth와 East의 단순한 8프레임 모션 증거를 정확히 8fps로 확인합니다. South는\n정면 깊이와 가림 순서를, East는 다리가 골반 아래에서 실제로 교차·통과하는지를\n가장 분명하게 보여줍니다.\n\n사용자는 다음 세 가지를 함께 보고 승인합니다.\n\n- 실제 후보 프레임의 정확한 8fps 재생 결과\n- 물리적 좌우 관절을 표시한 궤적 오버레이\n- 0·4번 접지뿐 아니라 `1→2→3`, `5→6→7` 통과 구간의 확대 증거\n\n이 두 방향이 승인되기 전에는 다른 방향, 상세 렌더, 시트 패킹과 Studio 적용을\n진행하지 않습니다. 사용자에게는 빠른 실패와 작은 수정 단위를 제공하고, 프로젝트는\n잘못된 모션을 기반으로 한 대량 재작업을 피합니다.\n\n## 실패 원인\n\n이번 실패는 이미지 생성 모델 한 가지의 문제가 아니라 승인 체계의 실패였습니다.\n\n1. 접지 프레임 0·4와 색상 마커의 위치 차이를 실제 보행 교대로 간주했습니다.\n   그러나 2·6번은 두 발이 골반 아래로 모이는 통과 포즈를 증명하지 못했고, 넓은\n   보폭 사이에서 발 소유권이 순간적으로 바뀌어도 검출되지 않았습니다.\n2. 무릎·발목·발끝과 어깨·팔꿈치·손목을 물리적 좌우 기준으로 추적하지 않았습니다.\n   같은 손이 계속 앞에 있거나 reach→contact→compression 사이에 전방 손이\n   뒤집혀도 서술형 메타데이터가 `passed`이면 통과할 수 있었습니다.\n3. 기존 자동 검사는 RGBA, 크기, 여백, 해시 중복과 일부 색상 중심점 이동을 잘\n   검사했지만, 그것을 해부학적 모션 검증으로 확대 해석했습니다.\n4. 제작자가 작성한 검수 문장을 독립적인 관측 결과처럼 사용했습니다. 실제 이미지와\n   검수 문장이 충돌해도 패킹 도구가 이를 재계산하지 않았습니다.\n5. 정확한 후보에 대한 사용자 시각 승인이 없는 상태에서도 패킹·업로드·런타임\n   승격을 진행할 수 있었습니다.\n6. South와 East 기본 모션을 먼저 증명하지 않고 8방향 상세 프레임으로 확장해\n   실패 비용과 토큰 사용량을 키웠습니다.\n\n## 핵심 원칙과 설계 철학\n\n### 기술 유효성, 해부학 유효성, 사용자 승인을 분리\n\nPNG 규격 통과는 파일이 사용 가능하다는 뜻일 뿐 자연스럽게 움직인다는 뜻이\n아닙니다. 관절 궤적 검증은 모션이 계약과 일치한다는 뜻이며, 사용자 승인은 실제\n게임 아트로 채택한다는 별도 결정입니다. 세 상태는 서로 자동 승격되지 않습니다.\n\n### 통과 프레임을 핵심 키로 취급\n\n0·4번 접지는 보폭의 양 끝만 보여줍니다. 자연스러운 교대는 `1→2→3`과\n`5→6→7`에서 발 간격이 닫히고 두 발목이 골반 아래로 모였다가 반대 물리 다리가\n앞으로 열리는 과정으로 증명합니다. 팔도 2·6번에서 중립을 통과하고 0·4번에서\n서로 다른 물리 팔이 전방을 담당해야 합니다.\n\n### 이미지와 관측·승인을 해시로 결합\n\n관절 좌표는 각 PNG의 SHA-256과 결합합니다. 프레임, 좌표, 깊이, 방향축 또는\n임계값이 바뀌면 입력 번들 해시가 바뀌고 이전 검수와 사용자 승인은 즉시 무효가\n됩니다. 색상 마커는 관절의 대체물이 아니라 올바른 관절에 붙어 있는지 확인하는\n독립 센서로만 사용합니다.\n\n### 작은 승인 단위와 실패 시 중단\n\n상세 원화 전에 South·East 모션 블로킹만 승인합니다. 한 차례의 목표 수정에도\n포즈 제어가 구조를 따르지 않으면 같은 프롬프트를 반복하지 않고 명시적\npose/edge/depth 제어나 수동 모션 블로킹으로 경로를 바꿉니다. 통과 게이트가\n실패하면 파생 방향을 모두 보류하고 품질 기준을 낮추지 않습니다.\n\n## 결정 사항과 범위\n\n- South Walk 8프레임의 `motionApproved`, `limbOppositionVerified`,\n  `loopVerified`를 모두 철회하고 `southWalkGateApproved=false`로 되돌립니다.\n- 실패한 South Run 후보의 상위 승인도 `southRunGateApproved=false`로 명시하고,\n  이후 방향과 패킹의 근거로 사용할 수 없게 합니다.\n- 기존 루트, 발 접지점, 목 앵커, 방향 확인과 South 중립 머리 정보는 유지합니다.\n- 프레임 해시에 연결된 neck·pelvis·hip·knee·ankle·toe 및\n  shoulder·elbow·wrist 좌표를 보행 승인 필수 입력으로 지정합니다.\n- 검증기는 접지 리드, 골반 아래 통과, 반대 팔 스윙, 지지발 미끄러짐, 관절 점프와\n  비대칭 색상 마커의 물리 관절 소유권을 별도로 검사합니다.\n- ProjectBackpack 마커 프로필은 청록 왼발목, 빨강 오른발목, 오른쪽 소매 패치를\n  각각 고정된 물리 관절에 결합하고 세 마커 모두 8프레임 전체를 검사합니다.\n- South·East 두 방향의 관절 검증과 외부 사용자 승인을 다시 실행하는 마일스톤\n  보고서가 `expansionAllowed=true`일 때만 다음 한 방향의 상세 렌더를 허용합니다.\n  이 보고서는 패킹과 런타임 승격을 허용하지 않습니다.\n- 사용자 승인 파일은 검증 보고서의 입력 번들 해시를 참조해야 하며, 새 픽셀이나\n  좌표가 생기면 재승인이 필요합니다.\n- Walk 전용 도구를 Run 패킹 증거로 사용하지 않습니다. 요청한 클립을 명시적으로\n  지원하고 새 관절·승인 게이트를 강제하기 전에는 패킹이 차단됩니다.\n- 이번 커밋에는 새 캐릭터 프레임, 실패한 생성 결과, 런타임 시트, Roblox 에셋 ID,\n  Studio 변경을 포함하지 않습니다.\n\n## 다음 제작 착수 순서\n\n1. 현재 후보와 파생 방향을 승인 소스가 아닌 실패 증거로 격리합니다.\n2. Run의 8개 위상, 카메라 방향축, 좌우 비대칭 소유권과 임계값을 확정합니다.\n3. South와 East의 모션 전용 접지 0·4, 통과 2·6, 리치 3·7, 압축 1·5 순서로\n   제작합니다.\n4. 정확한 이미지 해시가 들어간 landmark manifest를 초기화하고 관절과 깊이\n   레인을 기록합니다.\n5. 파일 QA, 관절 궤적 보고서, 오버레이와 정확한 8fps 미리보기를 함께 검수합니다.\n6. 사용자가 동일 입력 번들을 승인한 뒤 South 상세 프레임 하나의 방향만\n   제작하기 전에 South·East 합산 마일스톤 게이트를 통과합니다.\n7. East, 나머지 cardinal, diagonal 순으로 한 방향씩 같은 게이트를 반복합니다.\n8. 8방향 전체의 사용자 승인이 끝난 뒤에만 Run 패킹과 별도 런타임 승격 승인을\n   요청합니다.\n\n## 구현 참고\n\n`validate_locomotion_landmarks.py`는 정확히 8개 PNG에서 SHA-256이 포함된 manifest\n초안을 만들고, 관측 좌표를 채운 뒤 torso 길이로 정규화한 다리·팔 lead를\n계산합니다. 접지 프레임은 서로 반대 부호의 충분한 lead를 가져야 하고, 2·6번은\n접지 보폭 대비 작은 lead로 골반 아래를 통과해야 합니다. `0→4`와 `4→0`의 lead는\n프레임 순서대로 진행해야 하며, 팔 lead는 접지·리치에서 다리와 반대 신체 쪽이\n앞서도록 검증합니다.\n\n도구는 사람이 쓴 `passed` 값을 입력으로 받지 않습니다. JSON 보고서와 좌우 관절\n오버레이를 직접 생성하며, 비대칭 마커가 요구된 캐릭터는 연결 성분이 올바른\n관절에 더 가깝다는 조건도 통과해야 합니다. 패킹 전 `--require-user-approval`은\n별도 승인 파일의 사용자 역할과 입력 번들 해시를 확인합니다.\n\n`validate_locomotion_milestone.py`는 South와 East의 manifest·외부 승인 파일을\n입력으로 받아 방향별 검증을 다시 실행합니다. 둘 중 하나가 없거나 오래됐거나\n실패하면 확장을 차단하며, 통과하더라도 `packingAllowed`와 `promotionAllowed`는\n항상 false로 유지합니다.\n\n## 현재 결과\n\n현재 생산 승인된 플레이어 locomotion 방향은 없습니다. 기존 South 보행 승인은\n철회됐고, 실패한 Run 결과도 승인·패킹·런타임 소스로 간주하지 않습니다. 대신\n다음 호출에서 새 아트를 만들기 전에 실행할 단계, 관측 스키마, 실패 중단 기준,\n후보별 사용자 승인 경계와 자체 회귀 검사가 준비됐습니다.\n\n## 검증\n\n- 정상적인 교차·반대 팔 fixture가 통과하는지 확인했습니다.\n- 통과 프레임이 넓은 보폭을 유지하는 fixture, 같은 손이 전방에 남는 fixture,\n  좌우 발목 색상만 바꾸거나 같은 마커를 복제한 fixture가 실패하는지 확인했습니다.\n- 접지→압축에서 전방 팔이 바뀌는 fixture와 앞/뒤 깊이가 중간 레인 없이 즉시\n  뒤집히는 fixture가 실패하는지 확인했습니다.\n- 마커 한 종류만 제출하거나 `requiredFrames=[]`로 검사를 비운 fixture가\n  ProjectBackpack 마커 프로필과 합산 확장 게이트를 통과하지 못하는지 확인했습니다.\n- 지지발 미끄러짐, 외부 사용자 승인 누락과 승인 후 입력 변경이 모두 실패하는지\n  확인했습니다.\n- South 또는 East 입력·승인이 하나라도 빠지거나 오래되면 합산 마일스톤이\n  방향 확장을 허용하지 않는지 확인했습니다.\n- landmark가 비어 있는 실제 8프레임 폴더에서 manifest를 초기화한 뒤 검증기가\n  fail-closed하는지 확인했습니다.\n- 스킬 구조, Python 문법, 위키 빌드·무결성과 버전 계약을 검사했습니다.\n\n## 후속 기획\n\n- 다음 제작 호출은 South·East 모션 블로킹과 사용자 승인까지만 첫 마일스톤으로\n  잡습니다.\n- 실제 관절 입력 편의를 위해 필요하면 클릭 기반 landmark 작성 UI를 추가하되,\n  좌표와 승인 해시 계약은 바꾸지 않습니다.\n- Run 전용 preview·pack이 관절 보고서와 사용자 승인 파일을 필수로 소비하도록\n  프로젝트 파이프라인을 확장한 뒤에만 런타임 후보 승격을 재개합니다.\n",
          "source_path": "wiki/content/pages/character-2d-rendering/v005.md",
          "timeline_order": 17
        },
        {
          "id": "character-2d-rendering",
          "title": "프레임 캐릭터 렌더링과 스프라이트 제작",
          "summary": "모바일용 프레임 캐릭터의 런타임 계약과 승인된 아트 방향을 잇는 1파일 1프레임 제작·검증 파이프라인을 구축했습니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "character",
            "sprite",
            "rendering",
            "animation",
            "art",
            "pipeline",
            "validation",
            "roblox",
            "mobile"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-06",
          "authors": [
            "Codex"
          ],
          "version": 4,
          "change_type": "updated",
          "change_summary": "승인된 캐릭터·월드 아트 방향을 고정하고, 8방향 8프레임 보행을 포함한 개별 원화·앵커·QA·패킹 계약을 자동 검증하도록 구성했으며 South 보행만 첫 승인 게이트를 통과시킴",
          "supersedes": "character-2d-rendering@v003",
          "sources": [
            "Assets/Characters/Player/README.md",
            "Assets/Characters/Player/SpriteProduction/README.md",
            "Assets/Characters/Player/SpriteProduction/production_manifest.json",
            "Assets/Characters/Player/SpriteProduction/Metadata/frame_metadata.json",
            "Assets/Characters/Player/SpriteProduction/SourceGenerated/South/generation_record.md",
            "docs/art/character-world-art-direction.md",
            "docs/art/sprite-animation-production.md",
            "tools/sprite_animation_pipeline.py",
            "tools/normalize_sprite_master.py",
            "tools/normalize_head_master.py",
            "tools/remove_connected_chroma.py",
            "tools/update_sprite_metadata.py",
            "tools/test_character_assets.sh",
            "tests/test_sprite_animation_pipeline.py"
          ],
          "related": [
            "project-overview",
            "studio-automation-routing"
          ],
          "validation": [
            "python3 -m unittest tests/test_sprite_animation_pipeline.py",
            "python3 tools/sprite_animation_pipeline.py validate --allow-missing",
            "./tools/test_character_assets.sh",
            "PYTHONPYCACHEPREFIX=/tmp/projectbackpack-pycache python3 -m py_compile tools/sprite_animation_pipeline.py tools/normalize_head_master.py tools/normalize_sprite_master.py tools/remove_connected_chroma.py tools/update_sprite_metadata.py",
            "git diff --check"
          ],
          "body": "# 프레임 캐릭터 렌더링과 스프라이트 제작\n\n## 결과\n\nPackBound의 플레이어는 `BillboardGui` 기반 프레임 스프라이트로 표시되며 머리와\n몸을 독립적으로 교체할 수 있습니다. 기존 라이브 프레임 시트는 현재 게임을\n표시하는 프로토타입으로 유지하되, 후속 최종 원화는 한 파일에 한 방향·한 프레임만\n담는 별도 제작 파이프라인을 통과해야 합니다.\n\n승인된 2등신 캐릭터, 전기 보라색 가방, 높은 쿼터탑 카메라 가독성과 장난감 같은\n폐품 세계의 아트 방향을 문서로 고정했습니다. 제작 매니페스트는 몸 192프레임과\n머리 10포즈의 파일 경로, 방향, 프레임 수, 재생 속도와 품질 게이트를 정의합니다.\n2026-08-06 현재 South 걷기 8프레임과 South 중립 머리만 승인됐으며, 나머지\n193개 원화는 제작 전 상태입니다. 따라서 이번 변경은 라이브 아틀라스를 교체하지\n않습니다.\n\n## 런타임과 아트 계약\n\n런타임 외형은 `Head`와 `Body` 두 슬롯으로 나뉩니다. 머리는 머리카락, 얼굴,\n머리 장식과 표정을 소유하고, 몸은 목 아래 의상, 팔다리, 신발, 가방과 가방 장식을\n소유합니다. 모든 제작물은 다음 공통 규격을 따릅니다.\n\n- 원본: 투명 배경 256×256 RGBA PNG\n- 런타임 셀: 128×128 RGBA PNG\n- 몸 루트: 마스터 좌표 `(128, 224)`\n- 안전 여백: 네 변에서 최소 16px\n- 방향: South부터 시계 방향으로 정의한 8방향\n- 머리 합성: 프레임별 사람이 승인한 목 앵커 사용\n\n바운딩박스 중심은 가방과 큰 신발 때문에 방향과 포즈마다 달라지므로 자동 정렬\n기준으로 사용하지 않습니다. 고정 루트, 실제 접지 발과 목 앵커를 기준으로 몸과\n머리를 합성합니다.\n\n## 애니메이션 제작 계약\n\n걷기는 `left_contact`, `left_down`, `left_passing`, `left_up`,\n`right_contact`, `right_down`, `right_passing`, `right_up`의 8단계로 구성하고\n8fps로 재생합니다. 두 반주기는 서로 다른 발이 앞서야 하며 마지막 프레임에서 첫\n프레임으로 연결될 때도 루트와 목이 튀지 않아야 합니다.\n\n전체 몸 모션 계약은 다음과 같습니다.\n\n- Idle: 8방향 × 4프레임, 6fps\n- Walk: 8방향 × 8프레임, 8fps\n- Dash: 8방향 × 6프레임, 15fps\n- Hit: 8방향 × 4프레임, 12fps\n- Death: West 8프레임 제작 후 East 전체 합성 반전, 12fps\n- Clear: South 8프레임, 12fps\n\n머리는 8방향 중립 포즈와 East·West 피격 포즈를 개별 파일로 관리합니다. 공격은\n자동 공격 시스템의 책임이므로 플레이어 스프라이트 모션 계약에 포함하지 않습니다.\n\n## 제작 도구와 검증\n\n`sprite_animation_pipeline.py`는 제작 폴더 생성, 메타데이터 병합, 원화 검증,\n컨택트시트·방향별 스트립·GIF 생성과 최종 패킹을 담당합니다. 검증기는 이미지\n크기와 RGBA 모드뿐 아니라 다음 항목도 검사합니다.\n\n- 파일 경로, 방향 순서, 프레임 수와 보행 위상 순서\n- 안전 여백 침범과 잘못 남은 연결 조각\n- 접지 발, 루트와 목 앵커의 유효성\n- 양발 교대, 루프 연결과 발 미끄러짐\n- 고정 상체 폭, 전체 실루엣 폭과 높이 드리프트\n- 프레임·방향 승인 상태와 South 보행 승인 게이트\n- 중복 프레임과 머리·몸 합성 연속성\n\n균일 크기 보정은 목과 발 사이 길이만 보고 전체 이미지를 늘리지 않습니다. 상체\n폭을 유지한 채 하체를 접지선에 맞추는 조정 도구를 제공해 포즈마다 가방과 어깨가\n커졌다 작아지는 현상을 줄입니다. 별도 크로마 제거 도구는 이미지 테두리에 연결된\n배경색만 제거해 캐릭터 내부의 같은 계열 색상을 보존합니다.\n\n`validate --allow-missing`은 사전 제작 단계에서 존재하는 파일을 엄격히 검사하면서\n아직 만들지 않은 파일만 경고로 허용합니다. `pack`은 전체 64개 걷기 프레임과\n8개 중립 머리가 모두 준비되고 승인되기 전에는 실패합니다. 성공하더라도 결과는\n`Build`에만 생성하며 현재 라이브 아틀라스를 자동 덮어쓰지 않습니다.\n\n## 현재 승인 상태\n\nSouth 걷기 8프레임과 South 중립 머리는 정규화, 개별 메타데이터 입력과 QA\n스트립·GIF 검수를 거쳤고 `southWalkGateApproved=true`로 기록됐습니다. 이\nSouth 전용 QA 자료는 제작 승인 증거이며 게임에서 사용하는 라이브 아틀라스가\n아닙니다.\n\n현재 검사에서는 준비된 모든 파일과 계약이 통과했고, 아직 제작하지 않은 193개\n원화만 사전 제작 경고로 보고됐습니다. 다음 제작 우선순위는 East와 North 걷기이며,\n두 방향을 승인한 뒤 대각선과 반대 방향으로 확장합니다. Walk 전체 승인 전에는\nIdle, Dash, Hit, Death와 Clear 제작 및 런타임 승격을 진행하지 않습니다.\n\n## 모바일 렌더링과 조작의 기존 결정\n\n캐릭터는 화면상 고정 픽셀 크기를 사용하고 쿼터뷰 카메라 거리와 캐릭터 화면\n스케일을 독립적으로 제어합니다. 현재 카메라 거리는 128, FOV는 38, 캐릭터 화면\n스케일은 0.1875입니다.\n\n모바일 이동은 중앙 데드존 밖에서 고정 속도로 동작하고, 대시는 조이스틱 바깥의\n별도 링을 통과할 때만 발동합니다. 중앙의 짧은 탭은 패리로 처리합니다. 이 입력과\n카메라 계약은 이번 아트 제작 파이프라인 변경으로 수정하지 않았습니다.\n\n## 결정 사항\n\n- 승인된 캐릭터와 세계 아트 방향을 후속 제작의 기준으로 유지합니다.\n- 기존 다중 포즈 생성 시트는 디자인 참고용으로만 사용하고 최종 모션 원본으로\n  보정하거나 트레이싱하지 않습니다.\n- 최종 애니메이션은 한 파일에 한 프레임을 제작하고 명시적 루트·접지·목 앵커로\n  정렬합니다.\n- 매니페스트와 프레임 메타데이터를 방향, 프레임 수, 경로와 승인 상태의 단일\n  기준으로 사용합니다.\n- 부분 완성 결과는 QA에만 사용하며 전체 계약을 통과하기 전 라이브 아틀라스를\n  교체하지 않습니다.\n- 이미지 생성 모델은 캐릭터 디자인과 단일 키포즈 참고에 사용하되 프레임 연속성과\n  좌우 발 일관성은 제작·검증 단계에서 별도로 보장합니다.\n\n## 후속 작업\n\n- East와 North 걷기 8프레임을 같은 승인 절차로 제작합니다.\n- 대각선과 반대 방향에서 헤드밴드, 짝짝이 양말, 가방과 오리 장식의 소유 방향을\n  수동 검수합니다.\n- 8방향 Walk가 모두 승인된 뒤 Idle, Dash, Hit, Death와 Clear를 제작합니다.\n- 전체 strict validation과 게임 내 방향·합성 테스트를 통과한 결과만 라이브\n  런타임 후보로 승격합니다.\n",
          "source_path": "wiki/content/pages/character-2d-rendering/v004.md",
          "timeline_order": 6
        },
        {
          "id": "character-2d-rendering",
          "title": "프레임 캐릭터 렌더링과 모바일 액션 입력",
          "summary": "고정 속도 이동, 중앙 패리, 조이스틱 밖 대시, 반응형 하단 배치와 배경 가시성을 함께 설계한 세로형 플레이 시스템입니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "character",
            "sprite",
            "rendering",
            "roblox",
            "mobile",
            "controls",
            "combat",
            "camera",
            "ux"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-06",
          "authors": [
            "Codex"
          ],
          "version": 3,
          "change_type": "updated",
          "change_summary": "모바일 이동을 중앙 데드존 밖 고정 속도로 바꾸고 대시 영역을 조이스틱 외부로 분리했으며, 화면 비율·하단 메뉴 공간·카메라와 캐릭터 가독성을 함께 조정함",
          "supersedes": "character-2d-rendering@v002",
          "sources": [
            "default.project.json",
            "packbound.project.json",
            "src/ReplicatedStorage/Character2D/Config.luau",
            "src/ReplicatedStorage/Character2D/CutoutRig.luau",
            "src/ReplicatedStorage/Character2D/FrameSpriteRig.luau",
            "src/ReplicatedStorage/Character2D/MobileJoystickController.luau",
            "src/ReplicatedStorage/Character2D/MobileJoystickGate.luau",
            "src/ReplicatedStorage/Character2D/MobileJoystickGesture.luau",
            "src/ReplicatedStorage/Character2D/MobileJoystickMovement.luau",
            "src/ReplicatedStorage/Character2D/PlayerActionController.luau",
            "src/ServerScriptService/ParryService.server.luau",
            "src/StarterPlayer/StarterPlayerScripts/PlayerActionBootstrap.client.luau",
            "tests/MobileJoystickGate.spec.luau",
            "tests/MobileJoystickGesture.spec.luau",
            "tests/MobileJoystickMovement.spec.luau"
          ],
          "related": [
            "project-overview",
            "studio-automation-routing"
          ],
          "validation": [
            "luau tests/MobileJoystickMovement.spec.luau",
            "luau tests/MobileJoystickGate.spec.luau",
            "luau tests/MobileJoystickGesture.spec.luau",
            "luau tests/DirectionResolver.spec.luau",
            "luau tests/AnimationLibrary.spec.luau",
            "luau-compile --null src/ReplicatedStorage/Character2D/Config.luau src/ReplicatedStorage/Character2D/CutoutRig.luau src/ReplicatedStorage/Character2D/FrameSpriteRig.luau src/ReplicatedStorage/Character2D/MobileJoystickController.luau src/ReplicatedStorage/Character2D/MobileJoystickGate.luau src/ReplicatedStorage/Character2D/MobileJoystickMovement.luau",
            "rojo build default.project.json -o /tmp/projectbackpack_mobile_controls_commit_default.rbxlx",
            "rojo build packbound.project.json -o /tmp/projectbackpack_mobile_controls_commit_packbound.rbxlx",
            "Studio MCP iPhone 17 Pro 세로 플레이테스트: 데드존 0, 외부 이동 1.0, 중립 간격 대시 차단, 외곽 링 대시 승인, 하단 빈 공간 164.5px 확인"
          ],
          "body": "# 프레임 캐릭터 렌더링과 모바일 액션 입력\n\n## 결과\n\nPackBound의 세로형 모바일 조작은 하나의 원형 컨트롤에서 이동, 대시와 패리를\n처리합니다. 이동은 아날로그 속도 보간을 사용하지 않습니다. 중앙 데드존에서는\n정지하고, 그 경계를 벗어나면 손가락 위치와 관계없이 같은 기본 이동 속도를\n사용합니다. 대시는 일반 이동 원과 물리적으로 떨어진 외부 링까지 끌어야 하며,\n중앙의 짧은 탭은 패리로 해석합니다.\n\n조이스틱 본체는 화면 너비의 20%를 지름으로 사용하되 160px을 넘지 않습니다.\n컨트롤 아래에는 향후 메뉴바 72px과 조작 여백 46px을 예약합니다. 카메라는\n128 studs 거리의 고정 쿼터뷰를 사용하고, 고정 픽셀 Billboard 캐릭터는 별도의\n0.1875 화면 스케일로 렌더링해 배경 가시성과 캐릭터 판독성을 독립적으로\n조정합니다.\n\n## 구현 내용\n\n### 고정 속도 이동과 중앙 데드존\n\n`MobileJoystickMovement`는 이동 반경을 두 상태로만 해석합니다.\n\n- 정규화 반경 `0.4` 이하: 이동량 `0`\n- 정규화 반경 `0.4` 초과: 이동량 `1`\n\n따라서 중심 근처에서 의도하지 않은 미세 이동은 차단하면서, 이동을 시작한 뒤에는\n손가락이 중심에서 얼마나 떨어졌는지와 무관하게 같은 속도를 유지합니다. 데드존은\n조이스틱 중앙에 별도 원으로 표시되어 정지 구간을 시각적으로 알 수 있습니다.\n\n### 의도적인 외부 대시\n\n대시는 기본 이동 손잡이의 최대점이나 조이스틱 외곽에 닿는 것만으로 발생하지\n않습니다. `MobileJoystickGate`는 다음 세 경계를 분리합니다.\n\n- 외부 피드백 시작 반경: `1.93`\n- 대시 발동 반경: `2.48`\n- 다음 대시 재무장 반경: `0.38`\n\n외부 링은 조이스틱 본체보다 크게 그려지고 실제 대시 임계점과 같은 반경에\n배치됩니다. iPhone 17 Pro 세로 뷰포트에서는 일반 이동 최대점에서 약 30.7px을\n더 끌고, 조이스틱 원의 바깥도 약 11.4px 넘어야 대시가 승인됩니다. 그 사이\n구간에서는 기본 이동만 계속됩니다.\n\n바깥 위치에서 터치를 시작한 입력은 대시로 무장하지 않습니다. 정상 이동 영역에서\n시작해 외부 링을 통과한 경우에만 한 번 발동하고, 중앙으로 돌아오기 전에는 같은\n드래그에서 반복 발동하지 않습니다. 대시 콜백이 실제로 승인된 순간에만 링과\n손잡이가 밝은 보라색으로 확정 표시됩니다.\n\n### 중앙 탭 패리와 입력 의도\n\n중앙에서 시작한 입력은 0.35초 이내에 놓고 의도적인 드래그가 없을 때 패리로\n처리합니다. 길게 누르거나 드래그 거리가 임계값을 넘으면 이동 제스처로\n승격합니다. 이 경계는 손가락 크기와 짧은 흔들림 때문에 이동이나 패리가 잘못\n발동하는 것을 줄이면서, 별도 전투 버튼 없이 한 손 조작을 유지하기 위한\n계약입니다.\n\n패리의 즉시 애니메이션과 반투명 보호 효과는 클라이언트가 표시하고, 유효 시간과\n재사용 검증은 서버 `ParryService`가 소유합니다. 실제 피해 취소와 공격자에게\n돌려주는 반사 피해는 이후 서버 전투 해결기가 패리 속성을 소비해 처리해야 합니다.\n\n### 반응형 크기와 하단 메뉴 예약\n\n조이스틱 본체 지름은 `viewport.X × 0.2`로 계산하고 최대 160px로 제한합니다.\n대시 링은 의도적인 오버드래그를 표현하기 위해 본체 밖으로 확장되지만, 시작\n터치는 본체 안에서만 받습니다.\n\n하단 배치는 임의의 단일 좌표 대신 두 의미 있는 값으로 관리합니다.\n\n- `BOTTOM_MENU_RESERVE = 72`: 향후 하단 메뉴바 소유 영역\n- `BOTTOM_CONTROL_PADDING = 46`: 메뉴바와 조이스틱 사이 조작 여백\n\n최종 iPhone 17 Pro 세로 플레이테스트에서 외부 대시 링 아래부터 화면 끝까지\n약 164.5px의 빈 공간을 확인했습니다. 실제 메뉴바가 추가되면 같은 72px 계약을\n공유하고, 조이스틱 위치에 별도 보정값을 중복해서 추가하지 않아야 합니다.\n\n### 카메라와 고정 픽셀 캐릭터\n\n캐릭터는 3D 메시가 아니라 `BillboardGui` 기반 프레임 스프라이트이므로 카메라를\n멀리 옮겨도 화면상의 픽셀 크기는 자동으로 줄지 않습니다. 배경 범위와 캐릭터\n가독성을 독립적으로 제어하기 위해 다음 값을 분리했습니다.\n\n- 카메라 거리: `128`\n- 카메라 FOV: `38`\n- 캐릭터 화면 스케일: `0.1875`\n- Billboard 최대 렌더 거리: `512`\n\n`FrameSpriteRig`과 호환용 `CutoutRig` 모두 중앙 기준 `UIScale`을 사용합니다.\n현재 프레임 스프라이트의 실효 캔버스는 48×48px이며, 넓은 배경을 보여주면서도\n직전 32×32px 기준보다 1.5배 크게 읽힙니다.\n\n## 변경 파일\n\n- `Config.luau`: 카메라 거리, 캐릭터 화면 스케일과 원거리 렌더 범위를 정의합니다.\n- `FrameSpriteRig.luau`, `CutoutRig.luau`: 고정 픽셀 캐릭터를 중앙 기준 화면\n  스케일로 렌더링합니다.\n- `MobileJoystickController.luau`: 반응형 크기, 데드존 표시, 외부 대시 링과\n  하단 메뉴 예약 배치를 적용합니다.\n- `MobileJoystickMovement.luau`: 데드존 밖 고정 이동량을 순수 로직으로\n  제공합니다.\n- `MobileJoystickGate.luau`: 외부 피드백, 대시 발동과 재무장 경계를 관리합니다.\n- `tests/MobileJoystickMovement.spec.luau`: 정지와 고정 이동 속도 경계를 검증합니다.\n- `tests/MobileJoystickGate.spec.luau`: 외부 중립 간격, 단발 대시와 재무장을\n  검증합니다.\n\n## 검증\n\n- 이동, 대시 게이트, 탭·드래그 제스처, 방향과 애니메이션 Luau 테스트를\n  통과했습니다.\n- 변경된 Character2D 모듈의 Luau 바이트코드 컴파일을 통과했습니다.\n- `default.project.json`과 `packbound.project.json`의 Rojo 빌드를 통과했습니다.\n- Studio MCP의 iPhone 17 Pro 세로 플레이에서 데드존 내부 이동량 `0`, 외부\n  이동량 약 `1.0`, 중립 간격의 대시 차단과 외부 링의 대시 승인을 확인했습니다.\n- 같은 플레이에서 방향키 본체 80.2px, 데드존 16.5px, 대시 링 103.1px과\n  최종 하단 빈 공간 약 164.5px을 확인했습니다.\n- Studio 기기 시뮬레이터는 검증 후 기본 뷰포트로 복구했습니다.\n\n## 제품 이유와 설계 철학\n\n- 기본 이동은 위치에 따라 느려지는 정밀 조작보다 전투 중 예측 가능한 일정 속도를\n  우선합니다. 중앙 데드존은 이 원칙을 유지하면서 손가락 흔들림만 제거합니다.\n- 대시는 향후 긴 재사용 대기시간을 갖는 비상 행동입니다. 그러므로 빠르게 쓸 수\n  있어야 하지만 실수로 소비되어서는 안 됩니다. 시간 지연 확인 대신 물리적 거리와\n  외부 링 통과를 사용해 긴급 반응성과 의도 확인을 함께 확보합니다.\n- 이동, 대시와 패리를 한 컨트롤에 통합해 세로 화면의 전투 시야와 한 손 도달성을\n  보존합니다. 기능이 많아져도 무조건 별도 버튼을 추가하지 않고 제스처 간 의미와\n  공간을 먼저 분리합니다.\n- 카메라 거리와 Billboard 픽셀 크기는 서로 다른 문제로 취급합니다. 배경을 더\n  보여주기 위한 카메라 설계가 캐릭터 판독성을 우연히 결정하지 않도록 두 값을\n  독립 제어합니다.\n- 아직 존재하지 않는 하단 메뉴도 예약 영역을 먼저 정의합니다. 후속 UI가 들어올\n  자리를 현재 조작계가 침범하지 않게 해 레이아웃 재작업과 좌표 충돌을 줄입니다.\n\n## 결정 사항\n\n- 모바일 기본 이동은 데드존 밖에서 디지털 고정 속도를 사용합니다.\n- 대시는 조이스틱 본체 밖의 별도 링을 완전히 통과해야 발동합니다.\n- 대시 확인을 위한 추가 홀드 시간은 두지 않습니다.\n- 바깥에서 시작한 터치는 대시로 인정하지 않고, 중앙 복귀를 재무장 조건으로\n  유지합니다.\n- 조이스틱 크기는 화면 너비 비율과 최대 지름으로 관리합니다.\n- 하단 메뉴 예약값과 조작 여백을 명시적 상수로 유지합니다.\n- 고정 픽셀 캐릭터의 화면 스케일과 쿼터뷰 카메라 거리를 분리합니다.\n- 패리 시각 반응은 클라이언트, 판정 창은 서버가 소유합니다.\n\n## 후속 작업\n\n- 대시에 긴 재사용 대기시간을 추가하고 외부 링에 사용 가능, 소진과 재충전 상태를\n  표시해야 합니다.\n- 실제 하단 메뉴바는 72px 예약 계약을 재사용하고 다양한 안전 영역에서 조이스틱과\n  겹치지 않는지 검증해야 합니다.\n- 다양한 실제 휴대폰에서 데드존, 외부 중립 간격과 한 손 도달성을 플레이테스트해\n  현재 임계값을 조정해야 합니다.\n- 서버 전투 해결기가 패리 유효 창을 읽어 피격 취소와 공격자 반사 피해를 적용해야\n  합니다.\n- 실제 전투 밀도와 맵 스케일에서 카메라 거리 128, 캐릭터 48px이 적과 위험 요소를\n  함께 판독하기 적절한지 검증해야 합니다.\n",
          "source_path": "wiki/content/pages/character-2d-rendering/v003.md",
          "timeline_order": 4
        },
        {
          "id": "character-2d-rendering",
          "title": "프레임 캐릭터 렌더링과 모바일 액션 입력",
          "summary": "머리·몸통 분리형 8방향 프레임 캐릭터, 세로형 통합 조이스틱, 대시·패리와 서버 판정 경계를 갖춘 플레이 시스템입니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "character",
            "sprite",
            "rendering",
            "roblox",
            "mobile",
            "controls",
            "combat",
            "animation",
            "assets"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-06",
          "authors": [
            "Codex"
          ],
          "version": 2,
          "change_type": "updated",
          "change_summary": "머리·몸통 분리형 FrameSpriteV2를 기본 렌더러로 연결하고 모바일 대시·패리와 서버 판정 경계를 추가함",
          "supersedes": "character-2d-rendering@v001",
          "sources": [
            "README.md",
            "docs/gameplay/character-actions.md",
            "default.project.json",
            "packbound.project.json",
            "src/ReplicatedStorage/Character2D/Config.luau",
            "src/ReplicatedStorage/Character2D/AnimationLibrary.luau",
            "src/ReplicatedStorage/Character2D/Appearance.luau",
            "src/ReplicatedStorage/Character2D/AppearanceSchema.luau",
            "src/ReplicatedStorage/Character2D/AssetRegistry.luau",
            "src/ReplicatedStorage/Character2D/CharacterController.luau",
            "src/ReplicatedStorage/Character2D/CutoutRig.luau",
            "src/ReplicatedStorage/Character2D/FrameSpriteData.luau",
            "src/ReplicatedStorage/Character2D/FrameSpriteRig.luau",
            "src/ReplicatedStorage/Character2D/MobileJoystickController.luau",
            "src/ReplicatedStorage/Character2D/MobileJoystickGate.luau",
            "src/ReplicatedStorage/Character2D/MobileJoystickGesture.luau",
            "src/ReplicatedStorage/Character2D/PlayerActionController.luau",
            "src/ServerScriptService/ParryService.server.luau",
            "src/StarterPlayer/StarterPlayerScripts/PlayerActionBootstrap.client.luau",
            "Assets/Characters/Player/GameplayAtlases/player_fullbody_5view_right.png",
            "Assets/Characters/Player/GameplayAtlases/player_fullbody_5view_left.png",
            "Assets/Characters/Player/FrameSprites",
            "Assets/Characters/Player/README.md",
            "tools/build_full_body_prototype_atlases.sh",
            "tools/build_chibi_frame_atlases.py",
            "tools/test_character_assets.sh",
            "tests/AnimationLibrary.spec.luau",
            "tests/MobileJoystickGate.spec.luau",
            "tests/MobileJoystickGesture.spec.luau"
          ],
          "related": [
            "studio-automation-routing",
            "project-overview"
          ],
          "validation": [
            "python3 tools/build_chibi_frame_atlases.py",
            "./tools/build_full_body_prototype_atlases.sh",
            "./tools/test_character_assets.sh",
            "rojo build packbound.project.json --output /tmp/PackBound-character-mobile-validation.rbxlx",
            "rojo build default.project.json --output /tmp/ProjectBackpack-default-validation.rbxlx",
            "/opt/homebrew/bin/luau-compile --null src/**/*.luau",
            "luau tests/DirectionResolver.spec.luau",
            "luau tests/AnimationLibrary.spec.luau",
            "luau tests/MobileJoystickGate.spec.luau",
            "luau tests/MobileJoystickGesture.spec.luau",
            "./tools/test_item_stats.sh",
            "Studio MCP 플레이테스트: 교정된 풀바디 아틀라스의 8방향 전환과 Roll·Parry 이벤트 확인"
          ],
          "body": "# 프레임 캐릭터 렌더링과 모바일 액션 입력\n\n## 결과\n\nPackBound 캐릭터 시스템은 Roblox의 3D Humanoid를 이동·충돌·네트워크 기반으로\n유지하면서 보이는 아바타는 2D 이미지로 대체합니다. 현재 기본\n`FrameSpriteV2`는 업로드된 몸통과 머리 아틀라스를 독립 레이어로 합성하고,\n8방향 이동과 Dash, Hit, Death, Clear 프레임을 재생합니다. 세로 화면에서는\n하나의 커스텀 조이스틱이 이동, 대시와 패리를 함께 처리합니다.\n\n패리 입력은 클라이언트가 즉시 애니메이션과 보호막 효과를 표시하되, 실제 유효\n시간은 서버가 RemoteEvent 요청을 검증하고 캐릭터 속성으로 게시합니다. 이전\n5방향 `FullBodyPrototype`과 장비용 `LayeredEquipment`는 호환 경로로 남아 있어\n새 프레임 렌더러와 분리된 상태로 유지됩니다.\n\n## 구현 내용\n\n### 현재 FrameSpriteV2 런타임\n\n`CharacterController`는 시각 모드가 `FrameSpriteV2`이면 `FrameSpriteRig`을\n생성합니다. `AppearanceSchema`의 `Character2DHead`와 `Character2DBody` 속성이\n각 슬롯을 독립적으로 선택하고, 등록된 Rookie 기본 외형은 다섯 개의 실제 Roblox\n에셋 ID를 사용합니다.\n\n- 몸통 Move: 8방향 × 4프레임\n- 몸통 Dash·Roll: 8방향 × 3프레임\n- 몸통 Hit·Parry: 8방향 × 2프레임\n- Death: 서쪽 6프레임과 미러링한 동쪽 6프레임\n- Clear: 남쪽 6프레임\n- 머리: 중립 8방향, 동·서 Death와 남쪽 Clear 셀\n\n런타임은 상태, 방향과 phase를 아틀라스 행·열로 변환하고 manifest에서 생성한\n목 앵커에 머리를 맞춥니다. 체력이 감소하면 Hit, 0이 되면 마지막 Death 프레임을\n유지합니다. `Character2DAction`으로 Clear를 전달할 수 있는 확장 경로도 있습니다.\n\n### Roblox 안전 풀바디 호환 경로\n\nRoblox 업로드 과정에서 큰 텍스처가 축소되어 셀 좌표가 겹치지 않도록 두 축을\n1024 이하로 제한했습니다.\n\n- 전체 크기: `768 × 852`, RGBA\n- 셀 크기: `256 × 426`\n- 배치: `3열 × 2행`\n- 1행: South, SouthEast, East\n- 2행: NorthEast, North, 빈 셀\n- 표시 크기: `200 × 333`\n- Right: `rbxassetid://111543441930421`\n- Left: `rbxassetid://116458591957769`\n\nEast와 SouthEast 원본의 임시 좌우 명명 예외는 `AssetRegistry` 안의\n`fullBodyCrossedView`에만 격리했습니다. 다른 렌더링 계층이나 방향 해석 규칙에는\n예외가 전파되지 않습니다.\n\n### 세로형 통합 모바일 조이스틱\n\n`StarterGui.ScreenOrientation`을 세로로 고정하고 Roblox 기본 터치 이동을\n`Scriptable`로 전환했습니다. 화면 하단 조이스틱은 기기 안전 영역과 뷰포트에\n맞춰 크기를 조절합니다.\n\n- 드래그: 카메라 기준 이동\n- 중앙 짧은 탭: 패리\n- 중앙에서 의도적으로 끌거나 길게 누름: 이동으로 승격\n- 바깥 대시 임계값까지 오버드래그: 해당 방향으로 대시\n- 중앙 복귀 전까지 대시 재발동 금지\n\n`MobileJoystickGesture`는 탭과 드래그 판정을, `MobileJoystickGate`는 대시\n히스테리시스를 순수 로직으로 분리합니다. 따라서 Roblox UI 없이도 경계값을\nLuau 테스트로 검증할 수 있습니다.\n\n### 액션과 서버 패리 경계\n\n`PlayerActionController`는 카메라 상대 대시 방향을 월드 방향으로 변환하고\n현재 평면 속도와 목표 속도의 차이만큼 충격량을 적용합니다. `Dash` 상태는\n애니메이션 포즈와 보라색 진행 효과를 공유합니다. 데스크톱·게임패드의 기존\nRoll과 Parry 입력도 유지합니다.\n\n패리는 `CombatRemotes.ParryRequest`로 서버에 요청합니다. 서버는 생존 여부와\n쿨다운을 확인한 뒤 다음 속성을 설정하고 만료 시 같은 시리얼의 창만 닫습니다.\n\n- `PackBoundParryActive`\n- `PackBoundParryExpiresAt`\n- `PackBoundParryWindowSerial`\n\n현재 서버는 판정 창만 소유합니다. 실제 피격 취소와 반사 피해 적용은 이후\n서버 전투 해결기가 이 속성을 소비해야 합니다.\n\n### 프레임 에셋 생성 파이프라인\n\n`tools/build_chibi_frame_atlases.py`는 마젠타 키 소스에서 배경을 제거하고 128px\n셀로 정규화합니다. 몸통의 목 앵커를 검출해 JSON manifest와 런타임\n`FrameSpriteData.luau`를 같은 원본에서 생성합니다.\n\n- 8방향 Move: 방향당 4프레임\n- 8방향 Dash: 방향당 3프레임\n- 8방향 Hit: 방향당 2프레임\n- 서쪽·동쪽 Death와 Clear: 각 6프레임\n- 중립 머리 8방향과 특수 머리 프레임\n- 투명 RGBA 아틀라스, 합성 미리보기와 앵커 manifest\n\n생성된 다섯 아틀라스는 `AssetRegistry.FrameSpriteAssetIds`에 실제 업로드 ID로\n등록되어 현재 기본 렌더러가 사용합니다. PNG, manifest와 생성 Luau 데이터는\n한 번의 빌더 실행으로 함께 갱신됩니다.\n\n## 변경 파일\n\n- `default.project.json`, `packbound.project.json`: 서버 스크립트, 세로 화면과\n  스크립트형 터치 이동을 Rojo 프로젝트에 포함합니다.\n- `Config.luau`, `CharacterController.luau`, `FrameSpriteRig.luau`,\n  `FrameSpriteData.luau`: 기본 프레임 모드, 상태 재생, 머리 합성과 생성 좌표를\n  연결합니다.\n- `Appearance.luau`, `AppearanceSchema.luau`, `AppearancePresets.luau`,\n  `Types.luau`: 머리와 몸통 외형 슬롯을 추가합니다.\n- `AnimationLibrary.luau`, `CutoutRig.luau`: 호환 렌더러의 Dash 포즈와 효과를\n  추가합니다.\n- `AssetRegistry.luau`, `RigDefinition.luau`, `GameplayAtlases/`: 안전한 셀 규격,\n  실제 에셋 ID와 표시 크기를 적용합니다.\n- `MobileJoystickController.luau`, `MobileJoystickGate.luau`,\n  `MobileJoystickGesture.luau`: 통합 터치 조작과 독립 판정 로직을 제공합니다.\n- `PlayerActionController.luau`, `ParryService.server.luau`: 클라이언트 액션과\n  서버 소유 패리 창을 연결합니다.\n- `PlayerActionBootstrap.client.luau`: 액션 컨트롤러와 모바일 조이스틱의 생명\n  주기를 함께 관리합니다.\n- `FrameSprites/`, `build_chibi_frame_atlases.py`: 프레임 원본, 아틀라스,\n  미리보기, manifest, 생성 Luau 좌표와 재생성 파이프라인을 추가합니다.\n- `tests/`: Dash 포즈, 조이스틱 대시 게이트와 탭·드래그 경계를 검사합니다.\n\n## 검증\n\n- 두 Rojo 프로젝트가 서버 스크립트와 클라이언트 부트스트랩을 포함해 빌드됩니다.\n- 전체 `src` Luau 컴파일과 방향, Dash 애니메이션, 모바일 게이트·제스처,\n  아이템 통계 테스트를 통과합니다.\n- 풀바디 아틀라스가 `768 × 852` RGBA인지 확인합니다.\n- 프레임 빌더가 모든 아틀라스와 Luau 좌표를 재생성하고 RGBA, 셀 크기,\n  최대 1024px와 투명 모서리 조건을 자체 검사합니다.\n- 기존 Studio MCP 플레이테스트에서 교정된 풀바디 이미지 한 장, 3D 누출과\n  그림자 제거, 여덟 방향 전환과 Roll·Parry 이벤트를 확인했습니다.\n- 이번 `FrameSpriteV2`, 모바일 조이스틱, Dash와 서버 패리 경계는 현재 작업에\n  Studio MCP 도구가 노출되지 않아 라이브 플레이를 주장하지 않고 정적\n  빌드·테스트까지만 완료합니다.\n\n## 결정 사항\n\n- 현재 기본 화면 품질 기준은 머리·몸통을 분리한 `FrameSpriteV2`입니다.\n- 모바일 핵심 액션을 별도 버튼 여러 개가 아니라 한 조이스틱의 명확한 제스처로\n  통합합니다.\n- 패리의 시각 반응은 클라이언트 즉시성, 유효 판정 창은 서버 권한으로 분리합니다.\n- 프레임 아틀라스의 JSON manifest와 Luau 좌표는 동일 빌더에서 생성해 데이터\n  불일치를 방지합니다.\n\n## 후속 작업\n\n- Studio MCP가 노출된 작업에서 실제 터치 에뮬레이션, 화면 안전 영역, 대시 방향,\n  서버 패리 속성 만료를 플레이 모드로 검증합니다.\n- 서버 전투 해결기가 패리 창을 읽어 피격 취소와 반사 피해를 적용해야 합니다.\n- 실제 플레이에서 프레임별 머리 앵커, Death 동·서 선택, Clear 트리거와 업로드\n  이미지 로딩을 확인하고 필요한 피벗을 보정합니다.\n- 추가 머리와 몸통 스타일을 같은 슬롯 계약으로 등록합니다.\n- Python 에셋 빌더의 NumPy·Pillow 버전을 재현 가능한 개발 환경에 고정합니다.\n",
          "source_path": "wiki/content/pages/character-2d-rendering/v002.md",
          "timeline_order": 2
        },
        {
          "id": "character-2d-rendering",
          "title": "2D 플레이어 캐릭터 렌더링 기반",
          "summary": "Roblox 아바타를 완전히 숨기고 5방향 풀바디 아틀라스로 교체하는 프로토타입 렌더링 경로를 구축했습니다.",
          "status": "active",
          "category": "gameplay",
          "tags": [
            "character",
            "sprite",
            "rendering",
            "roblox"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-06",
          "authors": [
            "Codex"
          ],
          "version": 1,
          "change_type": "created",
          "change_summary": "보이는 3D 아바타와 임시 색상 도형을 제거하고 고품질 풀바디 방향 아틀라스 경로를 추가함",
          "supersedes": null,
          "sources": [
            "src/ReplicatedStorage/Character2D/Config.luau",
            "src/ReplicatedStorage/Character2D/RigDefinition.luau",
            "src/ReplicatedStorage/Character2D/AssetRegistry.luau",
            "src/ReplicatedStorage/Character2D/Appearance.luau",
            "src/ReplicatedStorage/Character2D/CutoutRig.luau",
            "src/ReplicatedStorage/Character2D/CharacterController.luau",
            "Assets/Characters/Player/GameplayAtlases/player_fullbody_5view_right.png",
            "Assets/Characters/Player/GameplayAtlases/player_fullbody_5view_left.png",
            "tools/build_full_body_prototype_atlases.sh",
            "tools/test_character_assets.sh",
            "Assets/Characters/Player/README.md"
          ],
          "related": [
            "studio-automation-routing",
            "project-overview"
          ],
          "validation": [
            "./tools/test_character_assets.sh",
            "rojo build packbound.project.json --output /tmp/PackBound-initial-commit.rbxlx",
            "/opt/homebrew/bin/luau-compile --null src/**/*.luau"
          ],
          "body": "# 2D 플레이어 캐릭터 렌더링 기반\n\n## 결과\n\n플레이 화면에 Roblox 3D 아바타와 그림자가 2D 캐릭터 밑으로 비치던 문제를\n소스 수준에서 차단했습니다. 에셋 ID가 비어 있을 때 표시되던 단색 둥근 사각형\n조합도 기본 출력에서 제거했습니다. 대신 기존 방향 원화를 게임용 5방향\n풀바디 아틀라스로 정리해 업로드 가능한 상태로 준비했습니다.\n\n현재 기본 시각 모드는 `FullBodyPrototype`입니다. 장비 레이어 시스템을 완성하기\n전에 실제 게임 화면의 크기, 방향 판독성, 카메라 조합을 고품질 완성형 캐릭터로\n검증하기 위한 단계입니다.\n\n## 렌더링 구조\n\n```text\nRoblox Character\n  ├─ 물리·이동·충돌: 기존 Humanoid와 BasePart 유지\n  ├─ 3D 시각 요소: Transparency=1, LocalTransparencyModifier=1\n  ├─ 그림자: CastShadow=false\n  ├─ 이름·체력 UI: 비표시\n  └─ HumanoidRootPart 위 BillboardGui\n       └─ FullBodyPrototype ImageLabel\n            └─ 이동 방향에 맞는 5방향 아틀라스 셀\n```\n\n## 3D 아바타 숨김\n\n`CharacterController`는 캐릭터의 모든 `BasePart`에 실제 `Transparency=1`과\n로컬 투명도 `LocalTransparencyModifier=1`을 함께 적용하고 그림자를 끕니다.\n카메라의 기본 TransparencyController가 로컬 값만 다시 쓸 수 있으므로 두 값을\n동시에 고정합니다. `Decal`과 `Texture`, Humanoid 이름표와 체력 표시도 숨깁니다.\n\n컨트롤러가 종료될 때는 원래 투명도, 로컬 투명도, 그림자 및 Humanoid 표시\n설정을 저장된 값으로 복원합니다.\n\n## 캐릭터 이미지 품질\n\n기존 5방향 쿼터뷰 원화를 각 방향별 `384 × 640` 셀로 정규화했습니다. 오른쪽\n아틀라스와 각 셀을 개별 반전한 왼쪽 아틀라스는 모두 `1920 × 640` RGBA PNG입니다.\n\n- `player_fullbody_5view_right.png`: 남, 남동, 동, 북동, 북 방향\n- `player_fullbody_5view_left.png`: 동일한 열 순서를 유지한 좌측 반전 방향\n\n아틀라스는 `tools/build_full_body_prototype_atlases.sh`로 재현할 수 있습니다.\n단순히 전체 시트를 뒤집지 않고 셀마다 뒤집은 뒤 같은 열 순서로 다시 결합해\n방향 인덱스가 깨지지 않도록 했습니다.\n\n## 빈 에셋 처리\n\n에셋 ID가 없는 슬롯은 더 이상 임시 색상 도형을 플레이 화면에 노출하지\n않습니다. 대신 `2D ASSET ID MISSING` 진단 문구만 보여 원인을 명확히 합니다.\n실제 이미지가 등록되면 이 문구는 자동으로 숨습니다.\n\n`AssetRegistry.FullBodyAtlasAssetIds.Right`와 `Left`에는 업로드된 좌우 아틀라스의\n실제 Roblox 에셋 ID가 등록되어 있습니다. 반면 장비별 레이어드 아틀라스 ID는\n아직 비어 있으므로 해당 모드로 전환하면 누락 경고가 표시됩니다.\n\n## 변경 파일\n\n- `Config.luau`: 풀바디 프로토타입을 기본 모드로 지정하고 단색 폴백을 끕니다.\n- `RigDefinition.luau`: 풀바디 루트 슬롯의 크기, 앵커, 깊이를 정의합니다.\n- `AssetRegistry.luau`: 좌우 5방향 아틀라스와 셀 좌표 레지스트리를 추가합니다.\n- `Appearance.luau`: 풀바디 모드와 레이어 장비 모드를 분기합니다.\n- `CutoutRig.luau`: 빈 이미지 폴백을 제거하고 누락 경고를 추가합니다.\n- `CharacterController.luau`: 3D 아바타, 표면 이미지, 그림자, 이름과 체력을\n  숨기고 종료 시 원상 복구합니다.\n- `Assets/Characters/Player/GameplayAtlases/`: 좌우 게임용 PNG를 보관합니다.\n- `tools/build_full_body_prototype_atlases.sh`: 원화에서 아틀라스를 재생성합니다.\n- `tools/test_character_assets.sh`: 크기와 RGBA 형식을 검사합니다.\n\n## 검증\n\n- 캐릭터 에셋 검사에서 좌우 아틀라스가 모두 `1920 × 640`, RGBA임을\n  확인했습니다.\n- `packbound.project.json`으로 Rojo 플레이스 빌드가 성공했습니다.\n- `src` 아래 모든 Luau 파일이 컴파일 검사를 통과했습니다.\n- 현재 Codex 작업에는 Studio MCP의 개별 도구가 노출되지 않아 이미지 업로드,\n  플레이 실행, 스크린 캡처를 통한 라이브 검증은 완료하지 못했습니다.\n  MCP 우선 규칙에 따라 Computer Use로 우회하지 않았습니다.\n\n## 결정 사항\n\n- 첫 시각 검증은 완성형 풀바디 캐릭터로 진행하고, 장비 교체는 이후\n  `LayeredEquipment` 모드로 확장합니다.\n- 에셋 ID 누락을 조악한 도형으로 감추지 않고 명시적인 개발 경고로 표시합니다.\n- 3D 본체는 물리와 이동의 기반으로 유지하되 렌더링과 그림자는 제거합니다.\n- 라이브 완료 판정은 실제 Studio MCP 업로드와 플레이 검증 이후로 미룹니다.\n\n## 후속 작업\n\n- Studio MCP로 플레이를 시작해 등록된 에셋의 로딩, 3D 본체·그림자 제거,\n  다섯 방향 전환,\n  캐릭터 크기와 발 위치를 스크린 캡처로 검증합니다.\n- 풀바디 시각 기준이 확정되면 머리, 상의, 하의, 신발을 동일한 피벗과 셀\n  규격을 사용하는 장비 레이어로 분리합니다.\n",
          "source_path": "wiki/content/pages/character-2d-rendering/v001.md",
          "timeline_order": 1
        }
      ]
    },
    {
      "id": "product-planning-change-log",
      "title": "제품 기획 변경 원장",
      "summary": "누적 원장을 보존하면서 한 발 도장 몬스터의 이동·도약 찍기 시각 계약과 저장소에는 실제 사용 투명 아틀라스만 남기는 리소스 보존 원칙을 추가했습니다.",
      "status": "active",
      "category": "planning",
      "tags": [
        "planning",
        "decision-log",
        "product",
        "inventory",
        "equipment",
        "rune-board",
        "weapon",
        "combat",
        "mobile",
        "documentation",
        "character",
        "animation",
        "monster",
        "monster-db",
        "transparent-background",
        "testing",
        "touch",
        "responsive"
      ],
      "created_at": "2026-08-15",
      "updated_at": "2026-08-25",
      "authors": [
        "Codex"
      ],
      "version": 15,
      "change_type": "updated",
      "change_summary": "v014까지의 누적 결정을 보존하고, 도장발 쿵귀의 한 발 정체성·세 단계 도약 찍기와 최종 런타임 이미지만 Git에 보존하는 규칙을 추가했습니다.",
      "supersedes": "product-planning-change-log@v014",
      "sources": [
        "wiki/content/pages/product-planning-change-log/v014.md",
        "wiki/content/pages/grass-vine-monster/v001.md",
        "docs/gameplay/monster-definitions.json",
        "AGENTS.md",
        "src/ServerScriptService/MonsterService.luau",
        "src/ReplicatedStorage/BackpackUI/DeveloperTestController.luau",
        "wiki/content/media/grass-vine-monster/v001/studio-attack-telegraph.jpg",
        "wiki/content/media/grass-vine-monster/v001/studio-vine-eruption.jpg",
        "wiki/content/media/grass-vine-monster/v001/studio-f2-monster-console.jpg",
        "wiki/content/media/grass-vine-monster/v001/monsterdb-editor.jpg",
        "wiki/content/pages/inventory-item-concept/v022.md",
        "docs/gameplay/inventory-item-layouts.json",
        "src/ReplicatedStorage/BackpackUI/GeneratedItemLayouts.luau",
        "src/ReplicatedStorage/InventoryV2/ItemGesturePolicy.luau",
        "src/ReplicatedStorage/InventoryV2/RuneDragVisualState.luau",
        "src/ReplicatedStorage/InventoryV2/Screen.luau",
        "tests/InventoryV2.spec.luau",
        "tests/test_inventory_v2_ui.py",
        "tests/test_item_db.py",
        "wiki/content/media/inventory-item-concept/v022/studio-default-backdrop-cards-galaxy-a06.jpg",
        "wiki/content/media/inventory-item-concept/v022/studio-selected-rotated-card-galaxy-a06.jpg",
        "wiki/content/media/inventory-item-concept/v022/studio-save-and-rune-move-popup-galaxy-a06.jpg",
        "wiki/content/media/inventory-item-concept/v022/studio-revert-and-rune-move-popup-galaxy-a06.jpg",
        "wiki/content/media/inventory-item-concept/v022/studio-rune-grade-drag-galaxy-a06.jpg",
        "wiki/content/pages/stampfoot-leaper/v001.md",
        "Assets/Monsters/Concepts/stampfoot_leaper_anchor_v1.png",
        "Assets/Monsters/Runtime/StampfootLeaper/atlas-metadata.json",
        "Assets/Monsters/Runtime/StampfootLeaper/idle-east-8x128.png",
        "Assets/Monsters/Runtime/StampfootLeaper/walk-east-8x128.png",
        "Assets/Monsters/Runtime/StampfootLeaper/attack-anticipation-east-8x128.png",
        "Assets/Monsters/Runtime/StampfootLeaper/attack-airborne-east-6x128.png",
        "Assets/Monsters/Runtime/StampfootLeaper/attack-land-east-8x128.png",
        "Assets/Monsters/Runtime/StampfootLeaper/hit-east-6x128.png",
        "Assets/Monsters/Runtime/StampfootLeaper/death-east-12x128.png",
        "Assets/Monsters/Runtime/StampfootLeaper/impact-fx-omni-8x128.png",
        "docs/gameplay/stampfoot-leaper-implementation-handoff.md"
      ],
      "related": [
        "grass-vine-monster",
        "stampfoot-leaper",
        "weapon-combat-presentation",
        "inventory-item-concept",
        "synergy-icon-system",
        "backpack-combat-stat-database",
        "development-wiki",
        "character-2d-rendering",
        "project-overview"
      ],
      "validation": [
        "sips: 콘셉트와 런타임 아틀라스 8장 모두 hasAlpha=yes",
        "Pillow RGBA 검사: 실제 투명 픽셀 존재, partial-alpha magenta 0, zero-alpha RGB contamination 0",
        "python3 tools/wiki.py check: 12 pages, 75 revisions, 117 media files 통과",
        "커밋 후보 스냅샷에서 python3 -m unittest tests/test_wiki.py: 18 tests 통과",
        "python3 -m unittest tests.test_repository_policy: 1 test 통과",
        "git diff --check 통과"
      ],
      "source_path": "wiki/content/pages/product-planning-change-log/v015.md",
      "body": "# 제품 기획 변경 원장\n\n## 목적과 기록 원칙\n\n이 페이지는 구현 파일 목록이 아니라 ProjectBackpack의 제품 방향이 왜 바뀌었고 지금 어떤\n규칙이 유효한지를 누적 보존합니다. 플레이어 또는 운영자가 경험하는 제품·게임플레이·UX·\n콘텐츠·아트·플랫폼 규칙이 추가, 변경, 대체 또는 폐기될 때 기록합니다. 동작을 바꾸지 않는\n내부 리팩터링은 원장 대상이 아닙니다.\n\n각 결정은 안정적인 ID를 가집니다. 이후 규칙이 달라지면 이미 커밋된 항목을 고치거나 지우지\n않고 새 버전에 후속 항목을 추가해 이전 ID와 관계를 명시합니다. 최신 버전은 과거 원장과\n현재 유효 규칙을 모두 포함하며, 실제 제품 변경·주제별 위키·검증 증거와 같은 커밋에서\n발행합니다.\n\n## 현재 유효 규칙\n\n### PBP-INV-001 — 인벤토리에는 명확한 이탈과 호환 토글이 있다\n\n모바일 인벤토리는 우측 최상단 닫기 버튼으로 메인 화면에 복귀합니다. PC 호환 경로의 Tab\n토글은 진단 호환으로 남지만 현재 제품 UI 완료 기준은 모바일입니다.\n\n### PBP-ITEMDB-002 — 최종 48종이 ItemDB와 런타임의 단일 활성 집합이다\n\n과거 90종과 특수 아이템 미디어는 활성 원본·공개 DB·생성 런타임에서 제거합니다. 무기 14종과\n방어구·장신구 34종의 이름, 사각 점유, 카툰 아이콘과 Roblox 자산 참조를 ItemDB 원본에서\n생성하며 ON/OFF 경계는 향후 콘텐츠 운영을 위해 유지합니다.\n\n### PBP-ITEMDB-003 — ItemDB 원화 배치는 모든 장비 화면의 단일 시각 기준이다\n\n웹 ItemDB에서 확정한 그림 배율, X/Y 중심 보정과 기본 회전을 보관 카드·배치판·드래그 그림이\n같이 사용합니다. 보관 카드에는 회전된 실제 점유 칸을 그림 아래에 표시하며, ItemDB를 바꾸면\n공개 DB와 생성 런타임을 같은 리비전으로 다시 만들고 Studio에서 함께 확인합니다.\n\n### PBP-CONTENT-001 — 폐기 아이템은 모든 제품 표면에서 함께 제거한다\n\n아이템을 실제로 폐기할 때는 카탈로그·레이아웃·이미지·런타임·공개 DB에서 함께 제거하고\n매니페스트 이력만 보존합니다.\n\n### PBP-DOC-001 — 기획 변경은 커밋 시 누적 원장으로 발행한다\n\n물질적인 제품 기획 변경은 사용자 승인 커밋에서 안정적인 ID와 함께 누적 발행합니다.\n\n### PBP-ACTION-002 — Dash는 3단계 자세와 이동 구간 잔상을 사용한다\n\n기본 Dash의 방향 잠금·0.30초·20스터드 규칙은 유지하되, 시작 프레임 고정은 예비 0.05초·\n이동 0.20초·회복 0.05초의 통짜 캐릭터 자세로 대체합니다. 잔상은 이동 구간에서만 실제\n경로 뒤에 생기고 회복 구간에서 본체로 수렴합니다. 룬의 추가 거리와 무적시간은 기존 한도\n안에서 별도 적용합니다.\n\n### PBP-ART-003 — 정지 캐릭터는 발이 고정된 좌우 호흡을 사용한다\n\nIdle은 마지막 좌우 방향을 유지하는 8프레임 6fps 통짜 캐릭터 애니메이션입니다. 발과 골반\n아래는 고정하고 상체의 들숨·날숨만 움직이며, 캐릭터 전체를 균일 확대·축소하지 않습니다.\n\n### PBP-INV-010 — 장비 배치는 전체 초안으로 검토하고 원자 저장한다\n\n아이템 추가·이동·회전·보관은 마지막 저장 상태와 분리된 전체 초안을 갱신합니다. 겹친 장비는\n가장 가까운 빈자리로 밀어 전체 결과를 미리 보여 주며, 잠금·한도·무게 등 잘못된 상태는 빨간\n초안으로 남기되 저장을 끕니다. 서버는 전체 좌표를 다시 검증해 모두 유효할 때만 한 번에\n교체하고 되돌리기는 마지막 저장 상태를 복원합니다.\n\n### PBP-UI-004 — 모바일 장비 조작은 선택·길게 누르기·세로 보관함을 사용한다\n\n짧은 탭은 선택만 하고 선택된 아이템에 회전 버튼을 노출합니다. 움직이지 않은 길게 누르기는\n룬 페이지와 상세 정보 메뉴를 열며, 움직임이 생기면 스크롤 또는 드래그로 전환합니다. 보관함은\n세로 다열 그리드이고 실제 아이템 그림과 점유 가이드는 같은 스냅 위치를 사용합니다.\n\n### PBP-INV-011 — 장착 요약은 배치 순서와 부위 상태를 즉시 관리한다\n\n유효하게 배치된 무기는 장착판에 들어온 순서를 보존해 왼쪽부터 최대 여섯 칸에 표시합니다.\n무기가 아닌 장비는 머리·귀걸이·목걸이·상의·장갑·하의·벨트·반지 둘·신발의 열 칸에\n표시합니다. 채워진 요약 칸은 아이템 이름·등급·공격력·공격 속도와 상세 정보, 룬 보드 편집,\n보관함으로 이동의 세 작업을 같은 문맥에서 제공합니다.\n\n### PBP-INV-012 — 배치 변경 상태에서도 한 번의 선택으로 룬 보드에 이동한다\n\n룬 보드 편집을 누를 때 장비 초안이 정상이라면 `저장하고 이동하기`, 정상이 아니라면\n`배치를 되돌리고 이동하기`를 보여 줍니다. 두 경우 모두 `배치로 돌아가기`로 취소할 수 있고,\n서버 저장 성공 또는 마지막 저장 상태 복원 뒤 처음 선택한 아이템의 룬 보드로 바로 이동합니다.\n\n### PBP-UI-005 — 모바일 장비 화면은 배치판 중심의 안정적인 작업대다\n\n가운데 배치판, 아래 여섯 무기, 오른쪽 도구와 부위별 장비를 한 화면에 둡니다. 요약 칸은\n해상도에 맞춰 정사각형으로 축소되고 자체 스크롤을 만들지 않으며, 저장·되돌리기는 화면 위에\n떠서 다른 영역을 줄이지 않습니다. 확대판은 보이는 스크롤바 없이 직접 끌어 움직입니다.\n배치 아이템 위의 움직임은 0.3초 이내면 확대판 이동, 0.3초 이상 1초 미만이면 아이템 이동으로\n판정하고, 1초 동안 정지했을 때만 메뉴 게이지를 시작합니다. 보관함 드래그가 확정되면 보관함\n스크롤을 잠그며 아이템 그림은 손가락 위로 34px만 띄웁니다.\n\n### PBP-UI-006 — 보관함은 터치 영역별 의도를 보존하고 인벤토리는 기기 전체에 집중층을 둔다\n\n아이템 그림에서 8px 이상 움직이면 즉시 장비를 들고, 카드 여백과 카드 사이의 0.4초 이내\n세로 움직임은 목록을 스크롤합니다. 0.4초 이내 가로 이탈은 취소하고 0.4초 이상 누른 뒤\n움직이면 카드 어디서든 장비를 듭니다. 모든 기본 카드 외곽선은 얇은 중립색이고 선택 카드만\n안쪽 라임색 선으로 구분합니다. 인벤토리 본체는 모바일 안전 영역을 유지하되 별도 짙은 배경이\n기기 전체를 덮어 필드 노출과 뒤쪽 입력을 막습니다.\n\n### PBP-DOC-002 — 커밋 위키는 비개발자 기획 서사와 충분한 화면 증거를 요구한다\n\n위키는 무엇이·왜·어떻게 달라졌는지와 사용자 경험을 먼저 설명하고 구현 세부는 뒤의 증거로\n둡니다. 눈에 보이는 변화는 기능을 이해하는 데 필요한 기본·선택·확장·성공·실패 상태를 실제\nStudio 또는 브라우저에서 캡처하며, 이미 커밋된 버전과 증거는 덮어쓰지 않습니다.\n\n### PBP-DEV-001 — Studio 무게 제한 테스트는 세션 전용이다\n\n기존 Studio 진단값은 영구 저장을 오염시키지 않습니다. 새 인벤토리 구현에서 무게 시스템을\n유지할지는 별도 결정하지만 진단 데이터 비영구 원칙은 유지합니다.\n\n### PBP-INV-009 — 메인 인벤토리는 사각 장착판과 부위별 제한을 사용한다\n\n유효한 사각 배치가 곧 장착입니다. 무기는 여섯 개, 반지는 두 개이며 같은 정의의 무기·반지는\n중복할 수 없습니다. 머리·귀걸이·목걸이·상의·하의·글러브·신발·벨트는 한 개씩 장착하고\n디아블로식 장비 화면은 같은 상태를 투영합니다.\n\n### PBP-SYNERGY-001 — 가방·시너지 제품 방향은 폐기한다\n\n가방 활성 칸, 육각 메인 인벤토리, 26종 시너지, 시너지 필터와 A/B/C 공간 접촉 효과는 새\n제품 방향에서 사용하지 않습니다. 육각형은 아이템별 룬 보드에만 사용합니다.\n\n### PBP-CONTENT-003 — 알파 장비 활성 집합은 48종이다\n\n무기 14종과 방어구·장신구 34종을 사용합니다. 크기별 두 역할을 두고 반지는 동일 아이템\n중복 금지로 인한 강제 조합을 피하기 위해 네 종류를 둡니다. 특수 아이템과 방패는 현재 48종에\n포함하지 않습니다.\n\n### PBP-RUNE-004 — 아이템마다 후보 10개 중 하나인 427칸 보드를 가진다\n\n각 아이템 정의는 61칸 영역 일곱 개, 총 427칸인 후보 보드 10개를 가집니다. 생성 시 하나를\n균등 선택해 VariantId와 Seed를 영구 저장합니다. 0~6 주등급은 영역을 하나씩 열고, 일곱\n중앙 시작점의 색 등록과 한 칸 간격 연결을 사용합니다. 능력 등급 총량은\n30·45·54·60·67·90·81칸이며 레어는 황금 테두리로 구분합니다.\n\n### PBP-COMBAT-001 — 자동 스킬·방어·확률에는 명시적 캡이 있다\n\n무기 스킬은 해당 무기의 기본 공격 횟수로 자동 발동하고 발사체·도탄·관통·다른 스킬은\n카운터를 늘리지 않습니다. 방패 막기는 최대 100%에서 방어력을 두 배로 적용하고, 방어력\n계산 뒤 최종 피해감소는 최대 50%입니다. 행동 빈도·확률·무적·발사체 수에는 항목별 캡을\n적용하되 선형 공격력·체력 성장은 허용합니다.\n\n### PBP-COMBAT-003 — 여섯 무기는 근접 할로에서 하나의 최근접 적을 정확히 겨눈다\n\n최대 여섯 장착 무기는 머리 가까운 좁은 타원의 왼쪽 세 개·오른쪽 세 개에 같은 간격으로\n배치하며 정중앙 위·아래는 비웁니다. 적이 없을 때는 원화 방향을 유지한 채 각자 부유합니다.\n적이 있으면 장착 집합이 사거리 안의 가장 가까운 생존 적 하나를 공통 후보로 고르고, 각 무기는\n자기 사거리 안에서 실제 칼끝·타격점·총구·화살·볼트 발사 방향을 그 적에게 맞춥니다. 오른쪽을\n기본 방향으로 그린 원거리 무기가 왼쪽을 볼 때는 거꾸로 돌리지 않고 수평 반전하며 회전축과\n공격 소켓도 함께 반전합니다. 서버 권위 표적·피해와 여섯 공격 계열은 유지합니다.\n\n### PBP-RUNE-003 — 알파 무기 14종은 고정된 능력 정체성을 가진다\n\n검·창·곡궁·석궁·총·메이스·도끼 각 두 종류는 A1~D2와 E1~E3의 실제 구현 훅을 가집니다.\n목걸이·반지·귀걸이는 호환 무기 전체에 적용되는 전역 레어를, 신발은 추가 대시 레어를\n제공합니다.\n\n### PBP-RUNE-005 — 룬은 34종 도형과 effect 기반 아이콘을 사용한다\n\n1~5칸 룬은 회전·반전을 동일시한 34종 자유 폴리헥스를 사용합니다. 일곱 색은 같은 중립 원화를\n틴트하고, 능력 의미는 실제 전투 effect_id와 1:1인 62종 중앙 아이콘으로 별도 합성합니다.\n드래그는 잡은 칸과 실제 형태를 유지하고 마지막 스냅 가이드를 서버 요청값으로 사용합니다.\n\n### PBP-RUNE-006 — 룬 등급·색·시작점은 일대일이며 배치는 회전만 사용한다\n\nG0~G6 룬은 먹빛·상아·초록·하늘·보라·황금·장미와 일대일입니다. 각 룬은 같은 번호 영역의\n중앙 시작점에서만 처음 등록하고 아이템 등급보다 높은 룬은 등록할 수 없습니다. 런타임 배치는\n60° 회전만 제공하고 별도 반전은 제공하지 않습니다. 첫 배치 전에는 중앙 한 칸, 이후에는 같은\n색 네트워크에서 한 칸 떨어진 연결 전선만 밝게 안내합니다.\n\n### PBP-UI-001 — 인벤토리와 룬 보드는 모바일 고정 작업 흐름을 공유한다\n\n상단 상태, 중앙 작업판, 하단 보관함을 안전 영역 안에 고정합니다. 아이템·룬 합성은 두 재료와\n결과 미리보기 문법을 공유하고 룬 보관함은 상하 스크롤을 사용합니다. 빈 룬 칸의 탭은 상단\n중앙에 능력 정보를 표시합니다.\n\n### PBP-UI-002 — 룬 보드는 문맥을 보존하고 필터는 카드 공간을 침범하지 않는다\n\n장착 룬 회전은 마지막 선택 룬에만 적용하고 확대·축소는 보고 있던 보드 위치를 보존합니다.\n룬 보관함은 `색상 필터`와 `칸 수 필터` 두 버튼만 한 줄에 두며, 보드 위 말풍선에서 G0~G6와\n1~5칸을 각각 다중 선택합니다. 능력 설명은 색상명을 반복하지 않고 옅은 황금색 글자·짙은\n보라색 외곽선으로 등급·능력명·수치를 표시합니다.\n\n### PBP-RUNE-007 — 룬 배치는 전체 초안으로 편집하고 원자적으로 저장한다\n\n룬 추가·이동·회전·회수는 마지막 저장 상태와 분리된 전체 초안을 갱신합니다. 규칙에 어긋난\n룬도 빨간 상태로 계속 편집할 수 있지만 저장은 비활성화됩니다. 서버는 전체 배치를 다시\n검증해 유효할 때만 한 번에 교체하며, 되돌리기는 마지막 저장 상태를 복원합니다. 같은 색\n네트워크는 변을 맞대지 않고 정확히 한 칸 간격을 두며 배치 순서와 무관하게 판정합니다.\n\n### PBP-RUNE-008 — 룬 드래그는 같은 등급의 열린 능력 칸을 실제 등급색으로 보여 준다\n\n룬을 들면 같은 등급의 열린 능력 칸과 아이콘을 G0~G6의 먹빛·상아·초록·하늘·보라·황금·\n장미색으로 표시합니다. 유효 연결 칸의 라임색은 등급색보다 위에 보이고, 잠긴 영역은 같은\n등급처럼 보이지 않게 경고색을 유지합니다.\n\n### PBP-UI-003 — 룬 보드는 현재 조작 문맥과 잠금 이유를 한 화면에 보여 준다\n\n보관 카드와 배치 룬을 모두 선택·60° 회전할 수 있고, 배치 룬은 이동하거나 보관함으로 회수할\n수 있습니다. 가이드는 현재 잡은 셀·회전·전체 배치를 기준으로 계산하며 유효 칸은 라임색,\n아이템 등급으로 닫힌 칸은 탁한 적갈색, 무효 초안은 빨간색으로 표시합니다. 기존 배치와 같은\n색 능력 아이콘은 드래그 중에도 남깁니다. 벌집은 틈 없는 얇은 선, 룬은 색이 비치는 투명\n크리스털 프레임을 사용하고, 전체 필터는 일부 OFF면 모두 ON·모두 ON이면 모두 OFF로\n동작합니다. 룬 각인 효과 탭은 유효 노드를 효과별로 합산합니다.\n\n### PBP-COMBAT-004 — 인벤토리 작업 중 필드 공격 연출을 일시 정지한다\n\n인벤토리나 룬 작업 화면이 열리면 클라이언트 공격 연출을 즉시 지우고 새 연출을 받지 않으며\n전투 VFX 오버레이를 끕니다. 화면을 닫으면 표현만 다시 허용합니다. 서버 표적·공격·피해와\n장착 상태는 바꾸지 않습니다.\n\n### PBP-ART-002 — 아이템은 사각 점유와 모바일 전투에 맞는 카툰 실루엣을 사용한다\n\n최종 48종 원화는 굵고 밝은 카툰풍으로 통일합니다. 근접 무기는 위쪽, 활·석궁·총은 오른쪽을\n기본 방향으로 두고 발사체와 궤적을 원화에 굽지 않습니다. 그림의 질량과 돌출부가 사각 점유\n형태에 자연스럽게 맞아야 합니다.\n\n### PBP-MONSTER-001 — 첫 일반 몬스터는 서버 권위 상태 흐름을 사용한다\n\n가시덩굴 화분괴물은 대기·추적·공격·귀환·죽음 상태를 가지며 탐색, 이동, 공격 위치, 피해와\n재생성은 서버가 결정합니다. 클라이언트는 복제된 상태와 시간을 읽어 좌·우 스프라이트와\n효과만 표시합니다.\n\n### PBP-MONSTER-002 — 빨간 장판은 위치를 고정하고 2초 뒤 분출한다\n\n공격 시작 순간의 플레이어 바닥 위치를 고정해 빨간 원을 2초간 보여 준 뒤 같은 자리에서\n덩굴을 솟구치게 합니다. 플레이어가 장판 밖으로 움직이면 피하고, 남아 있으면 피해와 넉백을\n받습니다.\n\n### PBP-MONSTERDB-001 — MonsterDB가 몬스터 조정값의 단일 원본이다\n\n활성화, 정체성, 전투 능력치, 탐색, 경로, AI, 공격, 스폰, 생명주기, 충돌, 표현과 애니메이션을\n한 원본에서 편집합니다. 저장은 웹과 Roblox 생성 정의를 함께 갱신하며 열린 Studio 반영은\n명시적 굽기만 허용합니다.\n\n### PBP-DEV-002 — F2는 MonsterDB 목록에서 선택해 정면 10 stud에 소환한다\n\nStudio 전용 F2 도구는 게임 ON 몬스터를 자동으로 나열하고 선택한 안정 ID를 서버에 보냅니다.\n서버 검증을 통과하면 캐릭터가 보는 수평 방향 10 stud에 세션 전용 몬스터를 만들며, 이 소환은\n정규 스폰 수와 재생성을 오염시키지 않습니다.\n\n### PBP-ART-004 — 게임용 래스터는 첫 생성부터 실제 알파 배경을 사용한다\n\n아이콘, 캐릭터·몬스터 애니메이션, 스프라이트와 잘라 쓰는 이펙트는 최초 유효 출력부터\n투명 배경이어야 합니다. 마젠타·초록 키 배경을 만들고 제거하는 공정은 폐기하며, 알파 채널과\n실제 투명 픽셀, 가장자리 키 색 번짐·후광 부재를 확인한 뒤 승격합니다. 의도적으로 불투명한\n콘셉트와 전체 장면 이미지는 제외합니다.\n\n### PBP-MONSTER-003 — 한 발 도장 몬스터는 준비·공중·접지로 공격을 나눈다\n\n도장발 쿵귀는 중앙 스프링 하나와 도장처럼 넓은 발 하나만 가진 정체성을 유지합니다. 평소에는\n그 한 발로 통통 튀며 이동하고, 공격할 때는 목표 지점을 고정한 뒤 움츠리기·포물선 도약·접지\n충격의 세 단계로 나눕니다. 접지 프레임을 피해·화면 흔들림·충격 이펙트가 만나는 공통 사건으로\n사용합니다.\n\n### PBP-ART-005 — 저장소에는 최종 런타임 투명 이미지만 보존한다\n\n게임에 실제로 넣을 128px 투명 아틀라스와 승인된 콘셉트만 Git에 보존합니다. 마젠타 원본,\n개별 프레임, 고해상도 마스터, 검토용 그리드와 QA 중간물은 커밋하지 않습니다. 런타임 파일의\n프레임 수·재생 속도·방향·해시는 함께 보존한 메타데이터로 추적합니다.\n\n## 변경 원장\n\n### PBP-INV-001 — 인벤토리 이탈과 Tab 토글\n\n- 날짜: 2026-08-15\n- 도메인: 인벤토리 접근성 / 플랫폼 입력\n- 변경 유형: changed\n- 이전 규칙: 화면 내부 닫기 버튼과 명확한 PC 토글 경로가 없었습니다.\n- 새 유효 규칙: 모바일 우측 최상단 닫기 버튼을 두고 PC 호환 시 Tab을 인벤토리 전용\n  토글로 사용하며 기본 플레이어 목록을 해제합니다.\n- 근거: 작업 화면에는 안전한 이탈 경로가 필요하며 한 입력이 두 UI를 열면 안 됩니다.\n- 의도한 사용자 경험: 닫는 법을 탐색하지 않고 즉시 메인 화면으로 돌아갑니다.\n- 범위와 제외: 모바일 터치와 PC 입력 호환에 적용하며 PC 레이아웃 품질은 제외합니다.\n- 영향 소스: Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: Luau 테스트, 소스 검사와 최종 Studio 모바일 화면.\n\n### PBP-INV-002 — 배치 보드 범위와 도구 배치\n\n- 날짜: 2026-08-15\n- 도메인: 모바일 배치 보드 / 공간 가독성\n- 변경 유형: changed\n- 이전 규칙: 빈 배치 영역과 우측 도구의 공간 관계가 충분히 드러나지 않았습니다.\n- 새 유효 규칙: 전체 배치 영역에 옅은 육각 격자를 그리고 우측 상단 모드 탭과 우측 하단\n  확대 도구를 위한 반응형 인셋을 둡니다.\n- 근거: 빈 공간도 게임 공간이며 조작 계층과 동시에 보여야 합니다.\n- 의도한 사용자 경험: 배치 가능 범위와 도구 위치를 즉시 이해합니다.\n- 범위와 제외: 모바일 보드와 모드·확대 도구에 적용합니다.\n- 영향 소스: VisualTokens.luau, ScreenRenderer.luau, ScreenState.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: iPhone 17 Pro와 Galaxy A06 Studio Play의 잘림·겹침 검사.\n\n### PBP-INV-003 — 손가락 위 드래그와 단일 목적지 안내\n\n- 날짜: 2026-08-15\n- 도메인: 인벤토리 드래그 / 배치 피드백\n- 변경 유형: changed\n- 이전 규칙: 아이템이 포인터 아래에 남고 여러 강조가 목표 칸과 경쟁했습니다.\n- 새 유효 규칙: 회전된 그림 전체를 포인터 위로 올리고 그림과 목적지 외곽선만 표시합니다.\n- 근거: 드래그 중에는 대상과 내려놓을 위치가 가장 강하게 읽혀야 합니다.\n- 의도한 사용자 경험: 손가락에 가리지 않은 그림으로 정확히 조준합니다.\n- 범위와 제외: 아이템 드래그에 적용하며 그림이 없는 가방은 점유 형태를 사용합니다.\n- 영향 소스: DragPlacementState.luau, Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 포인터 리프트·잡은 칸·outline-only Luau 테스트.\n\n### PBP-INV-004 — 카드·선택 정보와 0.1Kg 정밀도\n\n- 날짜: 2026-08-15\n- 도메인: 아이템 정보 구조 / 무게 규칙\n- 변경 유형: changed\n- 이전 규칙: 무게 표현과 시너지 정렬이 좁은 카드에서 일관되지 않았습니다.\n- 새 유효 규칙: x.xKg 표시와 0.1Kg 판정을 통일하고 시너지를 카드 가운데 정렬합니다.\n- 근거: 화면 표시와 게임 판정은 같은 값을 사용해야 합니다.\n- 의도한 사용자 경험: 좁은 카드에서 핵심 정보와 초과 이유를 빠르게 이해합니다.\n- 범위와 제외: 저장 카드, 선택 정보, 합계와 허용 판정에 적용합니다.\n- 영향 소스: WeightEvaluator.luau, ItemInstanceHydrator.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013, backpack-combat-stat-database\n- 검증과 증거: 무게 양자화·형식·허용 판정 테스트와 카드 소스 검사.\n\n### PBP-INV-005 — 필터와 배치 모드의 직접 연결\n\n- 날짜: 2026-08-15\n- 도메인: 보관함 탐색 / 모드 전환\n- 변경 유형: changed\n- 이전 규칙: 종류 필터와 배치 탭을 따로 바꿔야 했습니다.\n- 새 유효 규칙: 가방 필터는 가방 배치로, 다른 필터는 아이템 배치와 해당 종류로 이동합니다.\n- 근거: 보관함 종류 선택은 다음 배치 대상의 선택입니다.\n- 의도한 사용자 경험: 한 번의 터치로 원하는 목록과 배치 모드에 도달합니다.\n- 범위와 제외: 일반 종류 필터 다섯 개와 배치 모드 연동에 적용합니다.\n- 영향 소스: ScreenState.luau, Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 모드별 필터 상태 Luau 테스트.\n\n### PBP-INV-006 — 시너지·칸 수 고급 필터\n\n- 날짜: 2026-08-15\n- 도메인: 보관함 고급 탐색 / 모바일 UI\n- 변경 유형: added\n- 이전 규칙: 종류 외의 시너지와 점유 칸 범위를 직접 좁힐 수 없었습니다.\n- 새 유효 규칙: 별도 고급 필터에서 26종 시너지 토글과 1~9 칸 범위를 설정합니다.\n- 근거: 조합과 공간 효율은 종류와 독립적인 탐색 기준입니다.\n- 의도한 사용자 경험: 조합과 크기에 맞는 아이템을 빠르게 좁힙니다.\n- 범위와 제외: 가방과 아이템 칸 범위, 아이템의 하나 이상 시너지 일치에 적용합니다.\n- 영향 소스: ScreenState.luau, Screen.luau, ScreenRenderer.luau, VisualTokens.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 사용자 기획 이미지, Studio 캡처와 두 모바일 화면 테스트.\n\n### PBP-ART-001 — 시너지 아이콘 소형 가독성 규칙\n\n- 날짜: 2026-08-15\n- 도메인: 모바일 UI 아트 방향 / 인벤토리 시너지\n- 변경 유형: changed\n- 이전 규칙: 큰 합본을 축소해 실제 카드 크기에서 세부가 합쳐졌습니다.\n- 새 유효 규칙: 약 25px를 승인 기준으로 대표 심볼·투명 배경·최대 3색·216px 경계를\n  사용합니다.\n- 근거: 작은 화면에서 시너지를 구분하는 속도가 우선입니다.\n- 의도한 사용자 경험: 짧게 훑어도 형태와 대표색으로 시너지를 구분합니다.\n- 범위와 제외: 활성 26종 이미지와 재생성 계약에 적용하며 의미와 효과는 바꾸지 않습니다.\n- 영향 소스: Assets/UI/Backpack/SynergyIcons, SynergyCatalog.luau\n- 관련 위키: synergy-icon-system@v001, inventory-item-concept\n- 검증과 증거: 두 Studio 모바일 화면, 26개 자산과 전용 이미지 테스트.\n\n### PBP-CONTENT-001 — FootprintExpansion21 활성 집합 정리\n\n- 날짜: 2026-08-15\n- 도메인: 아이템 콘텐츠 / 공개 데이터\n- 변경 유형: retired\n- 이전 규칙: 확장 시안 21개가 모두 활성 후보로 남았습니다.\n- 새 유효 규칙: 11개만 활성화하고 10개는 제품 데이터와 미디어에서 제거합니다.\n- 근거: 폐기 시안이 남으면 현재 지원 범위를 잘못 전달합니다.\n- 의도한 사용자 경험: 실제 지원하는 아이템만 게임과 공개 DB에서 확인합니다.\n- 범위와 제외: 해당 10개 아이콘·레이아웃·참조를 제거하고 매니페스트 이력은 보존합니다.\n- 영향 소스: FootprintExpansion21, ItemDB 카탈로그·레이아웃·생성 산출물\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: ItemDB 90개 build/check와 생성 산출물 검사.\n\n### PBP-DOC-001 — 누적 제품 기획 변경 원장\n\n- 날짜: 2026-08-15\n- 도메인: 개발 문서 운영\n- 변경 유형: added\n- 이전 규칙: 기획 규칙의 변경을 한곳에서 계속 추적하는 누적 원장이 없었습니다.\n- 새 유효 규칙: 사용자 승인 커밋마다 물질적 변경을 안정적인 ID와 함께 누적합니다.\n- 근거: 구현이 개선돼도 최종 규칙과 변경 이유가 사라지지 않아야 합니다.\n- 의도한 사용자 경험: 위키 한 페이지에서 현재 규칙과 과거 이유를 연속 확인합니다.\n- 범위와 제외: 제품·게임플레이·UX·콘텐츠·아트·플랫폼·운영에 적용하며 순수 리팩터링은\n  제외합니다.\n- 영향 소스: AGENTS.md, wiki/content/pages/product-planning-change-log\n- 관련 위키: inventory-item-concept, development-wiki\n- 검증과 증거: 위키 빌드·체크·정책 테스트와 동일 커밋 발행.\n\n### PBP-ITEMDB-001 — ItemDB ON/OFF 베이크 경계\n\n- 날짜: 2026-08-16\n- 도메인: 아이템 운영 / 게임 배포\n- 변경 유형: added\n- 이전 규칙: ItemDB에 존재하는 모든 아이템이 항상 생성 런타임과 게임 베이크에 포함됐습니다.\n- 새 유효 규칙: 각 아이템은 ON/OFF 상태를 가지며 OFF는 웹 기획 기록에는 남고 다음 베이크와\n  생성 런타임에서는 제외됩니다. ON 복귀 시 기존 형태·이미지·시너지·효과 설정을 유지합니다.\n- 근거: 일시 제외와 영구 폐기를 구분해야 콘텐츠 실험과 롤백이 데이터 삭제 없이 가능합니다.\n- 의도한 사용자 경험: 운영자는 한 번의 버튼으로 게임 노출을 제어하고 플레이어는 승인된\n  활성 아이템만 만납니다.\n- 범위와 제외: ItemDB 웹 편집, 생성 레이아웃, 게임 카탈로그와 Studio 베이크에 적용합니다.\n  OFF 항목의 원본·웹 검색·이미지는 삭제하지 않습니다.\n- 영향 소스: inventory-item-layouts.json, tools/item_db.py, GeneratedItemLayouts.luau,\n  ItemCatalog.luau, wiki/site/app.js\n- 관련 위키: inventory-item-concept@v014\n- 검증과 증거: 390×844 ON 행 캡처, OFF 생성 제외 테스트, ItemDB 90개 정합성 검사.\n\n### PBP-EFFECT-001 — A·B·C 공간 접촉 효과 영역\n\n- 날짜: 2026-08-16\n- 도메인: 아이템 조합 / 공간 효과 / ItemDB 저작\n- 변경 유형: added\n- 이전 규칙: 아이템은 자기 능력치와 점유 형태만 가졌고 주변 아이템 접촉을 표현하는\n  저작 계약이 없었습니다.\n- 새 유효 규칙: 아이템당 A·B·C 최대 세 효과 슬롯을 두고 점유 경계 바깥 Q/R 다섯 칸까지\n  직접 효과 칸을 선택합니다. 각 슬롯은 종류·조건·능력 ID를 가지며 공간 접촉 판정과 실제\n  능력 실행은 분리합니다.\n- 근거: 가방 배치의 공간 관계를 조합 빌드로 확장하되 전투 규칙이 배치 기하에 결합되지\n  않아야 합니다.\n- 의도한 사용자 경험: 플레이어는 아이템을 어디에 놓고 무엇과 맞닿게 하는지로 추가 효과를\n  설계하고, 운영자는 같은 육각 편집 방식으로 규칙을 시각적으로 저작합니다.\n- 범위와 제외: 효과 칸 데이터, 카탈로그 ID, 회전 접촉 후보 평가까지 포함합니다. 조건 논리,\n  능력치 합산, 전투 발현과 시각 효과는 후속 범위입니다.\n- 영향 소스: item-effect-catalog.json, item-effect-slots.md, inventory-item-layouts.json,\n  GeneratedItemLayouts.luau, ItemEffectContactEvaluator.luau, ItemInstanceHydrator.luau,\n  wiki/site/app.js, wiki/site/item-db.js\n- 관련 위키: inventory-item-concept@v014, backpack-combat-stat-database\n- 검증과 증거: 390×844 A/B/C 편집 캡처, 효과 좌표·카탈로그·회전 접촉·드래그 비활성 테스트,\n  Studio의 동일 리비전 90개 레이아웃과 EffectCatalog 확인.\n\n### PBP-ITEMDB-002 — ItemDB 칸 수·시너지·게임 ON 복합 필터\n\n- 날짜: 2026-08-18\n- 도메인: ItemDB 운영 / 웹 탐색\n- 변경 유형: added\n- 이전 규칙: ItemDB는 이름과 대분류만 좁힐 수 있어 점유 크기·시너지·실제 게임 포함\n  집합을 따로 확인해야 했습니다.\n- 새 유효 규칙: 최소·최대 칸 수, 여러 시너지의 OR, 전체/게임 ON 상태를 검색·대분류와\n  AND로 조합하며 스크롤과 효과 카탈로그 접힘 상태를 재렌더링 뒤에도 유지합니다.\n- 근거: 전체 기획 목록과 현재 게임 집합을 한 화면에서 빠르게 비교해야 합니다.\n- 의도한 사용자 경험: “게임에 들어가는 2~4칸 기계 또는 원거리 아이템”을 그대로 필터로\n  표현하고 실제 아이콘으로 결과를 빠르게 훑습니다.\n- 범위와 제외: 공개·로컬 ItemDB 탐색과 시너지 미디어에 적용합니다. 게임 안의 보관함\n  고급 필터 상태와는 별도입니다.\n- 영향 소스: tools/item_db.py, wiki/site/app.js, wiki/site/app.css, wiki/site/item-db-data.js,\n  wiki/site/synergy-media\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: 1440×900 복합 필터 캡처, 8개 ON 결과, 26/26 이미지 로드,\n  catalogOpen=false·scrollY=188 유지, 브라우저 콘솔 오류·경고 0건.\n\n### PBP-INV-007 — 최대 6개 장착 무기와 필드 표시\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 장착 / 필드 가독성\n- 변경 유형: added\n- 이전 규칙: 유효하게 배치된 무기는 보드 안에서만 보였고 장착 목록·한도·필드 표시 계약이\n  없었습니다.\n- 새 유효 규칙: 유효한 Weapon은 최초 배치 순서대로 최대 6개까지 장착되고 2×3 장착 탭,\n  상세 정보·빼기, 모든 캐릭터 위의 방향 반응 이미지로 표시됩니다.\n- 근거: 공간 배치 결과가 실제 플레이 장비로 읽혀야 인벤토리 퍼즐과 전투 준비가 연결됩니다.\n- 의도한 사용자 경험: 여섯 슬롯에서 장착 상태를 관리하고 필드에서 자신의 빌드를 즉시\n  알아봅니다.\n- 범위와 제외: 장착 상태·관리·이미지 표시에 적용합니다. 실제 공격 실행과 무기 모델은\n  후속 범위입니다.\n- 영향 소스: EquippedItemModel.luau, InventoryBoardModel.luau, InventorySerializer.luau,\n  Screen.luau, ScreenRenderer.luau, InventoryService.luau, EquippedWeaponBillboard.luau,\n  CharacterController.luau, DirectionResolver.luau\n- 관련 위키: inventory-item-concept@v015, character-2d-rendering@v009\n- 검증과 증거: iPhone 17 Pro·Galaxy A06 장착 슬롯과 상세 모달 캡처, 6개 한도 Luau 테스트,\n  West 87.8°·East -92.1° 방향 회전, 최종 Studio 콘솔 오류·경고 0건.\n\n### PBP-INV-008 — 상태와 무관한 2px 배치 외곽선\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 시각 계층\n- 변경 유형: changed\n- 이전 규칙: 가방 시너지나 배치 미리보기 상태에 따라 외곽선이 3~7px로 굵어질 수 있었습니다.\n- 새 유효 규칙: 가방·아이템·선택·시너지·유효·무효·미리보기 외곽선은 모두 2px이며 상태는\n  색으로만 구분합니다.\n- 근거: 굵기 변화가 점유 형태를 실제보다 커 보이게 하고 아이템 그림과 경쟁했습니다.\n- 의도한 사용자 경험: 같은 공간 형태를 안정적으로 읽고 색으로 상태만 빠르게 구분합니다.\n- 범위와 제외: 인벤토리 보드와 보관함 선택 외곽선에 적용합니다.\n- 영향 소스: ScreenState.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: 모든 외곽선 경로가 GetBoundaryThickness=2를 사용하는 Luau·소스 회귀 테스트.\n\n### PBP-CONTENT-002 — 게임 ON 32개 승인 집합\n\n- 날짜: 2026-08-18\n- 도메인: 아이템 콘텐츠 / 게임 배포\n- 변경 유형: changed\n- 이전 규칙: 전체 90개 ItemDB가 모두 게임 ON으로 생성 런타임에 포함됐습니다.\n- 새 유효 규칙: 전체 기획 목록 90개를 보존하면서 게임 ON 32개만 생성 런타임과 Studio\n  베이크에 포함합니다. 포켓 네일건은 MACHINE을 제외한 RANGED·GUN, 소화기 철퇴는\n  FORGED 대신 MACHINE을 사용합니다.\n- 근거: 현재 게임에 투입할 승인 콘텐츠와 후속 기획 후보를 데이터 삭제 없이 구분합니다.\n- 의도한 사용자 경험: 플레이어는 승인된 32개만 만나고 운영자는 OFF 58개를 계속 비교·복원할\n  수 있습니다.\n- 범위와 제외: PBP-CONTENT-001의 전체 90개 카탈로그와 폐기 이력은 유지하며 게임 포함 집합만\n  변경합니다.\n- 영향 소스: inventory-item-layouts.json, GeneratedItemLayouts.luau, wiki/site/item-db-data.js\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: ItemDB revision a35b00cf76ec6c75, 전체 90·게임 ON 32 build/check,\n  Studio 같은 소스 베이크와 저장.\n\n### PBP-ACTION-001 — 20스터드 방향 잠금 Dash\n\n- 날짜: 2026-08-18\n- 도메인: 캐릭터 액션 / 이동 / 스프라이트 일관성\n- 변경 유형: changed\n- 이전 규칙: Dash는 0.20초 동안 목표 속도 30 studs/s의 순간 충격을 적용하고 별도 Dash\n  포즈를 재생할 수 있었습니다.\n- 새 유효 규칙: Dash는 0.30초 동안 선택 방향을 잠그고 장애물이 없는 기준 20스터드를\n  이동합니다. WalkSpeed·AutoRotate를 잠근 뒤 복원하고 시작 순간의 완성 프레임을 유지합니다.\n- 근거: 이동 거리를 입력·현재 속도와 분리해 일관되게 만들고, 승인 Run 아틀라스가 레거시\n  모듈식 Walk/Dash 이미지로 바뀌는 비율 변화를 막습니다.\n- 의도한 사용자 경험: Dash 방향이 중간에 꺾이지 않고 같은 거리를 이동하며 캐릭터 모습도\n  한 프레임으로 안정적으로 유지됩니다.\n- 범위와 제외: 클라이언트 Dash 이동·방향·스프라이트에 적용합니다. 장애물 관통이나 별도\n  Dash 공격 판정은 추가하지 않습니다.\n- 영향 소스: character-actions.md, Config.luau, PlayerActionController.luau,\n  CharacterController.luau, test_two_direction_run_build.py\n- 관련 위키: character-2d-rendering@v009\n- 검증과 증거: Galaxy A06 Play에서 19.46스터드 이동, 이동 중 WalkSpeed=0·AutoRotate=false,\n  종료 뒤 16·true 복원, 최종 콘솔 오류·경고 0건.\n\n### PBP-DEV-001 — 세션 전용 허용 무게 테스트 창\n\n- 날짜: 2026-08-18\n- 도메인: Studio 개발 도구 / 데이터 안전\n- 변경 유형: added\n- 이전 규칙: 허용 무게 경계값을 플레이 중 빠르게 바꾸는 전용 진단 UI가 없었습니다.\n- 새 유효 규칙: Studio에서만 F2 창으로 허용 무게를 1Kg씩 조정하고, 영구 저장에는 플레이어의\n  원래 제한값을 사용합니다.\n- 근거: 무게 초과 UI와 배치 경계를 반복 검증하되 진단 값이 사용자 데이터에 남으면 안 됩니다.\n- 의도한 사용자 경험: 개발자는 Play를 다시 시작하지 않고 경계값을 시험하며 플레이어는\n  테스트 기능이나 변조된 저장값을 보지 않습니다.\n- 범위와 제외: Roblox Studio 진단 세션에만 적용하며 모바일 제품 UI 완료 범위가 아닙니다.\n- 영향 소스: DeveloperTestControls.luau, DeveloperTestWindow.luau, Screen.luau,\n  InventoryService.luau\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: Studio-only 생성·서버 거부·원래 제한 직렬화 소스 검사와 Luau 경계 테스트.\n\n### PBP-INV-009 — 사각 장착판과 부위별 중복 제한\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 장착 / 공간 퍼즐\n- 변경 유형: superseded\n- 이전 규칙: PBP-INV-002~007은 육각 가방이 활성 칸을 만들고 시너지·필터와 유효 배치 무기\n  여섯 개를 관리하는 메인 인벤토리를 사용했습니다.\n- 새 유효 규칙: 아이템은 사각 폴리오미노로 배치하며 유효한 배치가 곧 장착입니다. 무기는\n  여섯 개, 반지는 두 개, 나머지 지정 부위는 한 개이며 무기·반지는 같은 DefinitionId를\n  중복할 수 없습니다. 디아블로식 장비창은 권위 배치의 투영입니다.\n- 근거: 장착 제한을 즉시 이해시키면서 공간 퍼즐은 크기와 형태로 유지해야 합니다.\n- 의도한 사용자 경험: 플레이어는 별도 장착 버튼 없이 배치와 장비 요약을 같은 상태로\n  이해합니다.\n- 범위와 제외: 메인 장착판과 장착 부위에 적용하며 특수 아이템·방패 슬롯은 제외합니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016\n- 검증과 증거: 기획 표에서 부위별 장착 수와 48종 콘텐츠 수량 검산.\n\n### PBP-SYNERGY-001 — 가방·시너지 시스템 전면 폐기\n\n- 날짜: 2026-08-18\n- 도메인: 인벤토리 / 시너지 / 아이템 조합\n- 변경 유형: retired\n- 이전 규칙: PBP-INV-004·006, PBP-ART-001과 PBP-EFFECT-001은 가방 활성 칸, 26종\n  시너지, 시너지 필터와 A/B/C 공간 접촉 효과를 제품 규칙으로 사용했습니다.\n- 새 유효 규칙: 가방 활성 칸, 육각 메인 인벤토리, 시너지 판정·아이콘·필터와 공간 접촉\n  효과를 후속 제품에서 사용하지 않습니다. 육각형은 아이템별 룬 보드에만 사용합니다.\n- 근거: 장착 규칙과 룬 성장 퍼즐이 각각 명확한 책임을 가져야 합니다.\n- 의도한 사용자 경험: 메인 장착은 사각형으로 빠르게 읽고 깊은 육각 퍼즐은 선택한 아이템\n  안에서 집중해 풉니다.\n- 범위와 제외: 새 제품 방향을 폐기하며 기존 코드·자산 제거는 후속 구현 커밋에서 수행합니다.\n- 영향 소스: inventory-item-concept@v016, inventory-item-concept@v015\n- 관련 위키: synergy-icon-system@v001, inventory-item-concept@v016\n- 검증과 증거: v016 폐기·제외 목록과 이전 v015 구현 범위 대조.\n\n### PBP-CONTENT-003 — 알파 장비 48종과 점유 크기\n\n- 날짜: 2026-08-18\n- 도메인: 알파 아이템 콘텐츠 / 장착 부위\n- 변경 유형: superseded\n- 이전 규칙: PBP-CONTENT-002의 현행 게임 ON 32개와 과거 90개 카탈로그가 실제 알파\n  배포 집합이었습니다.\n- 새 유효 규칙: 다음 알파 구현 목표는 무기 14종, 방어구·장신구 34종의 48종입니다. 머리·\n  상의·하의는 4/6칸, 귀걸이·반지는 1칸, 목걸이는 2/3칸, 글러브·신발·벨트는 2/4칸을\n  사용합니다.\n- 근거: 부위별 역할과 사각 점유 크기를 함께 선택하게 해 배치 조합을 늘립니다.\n- 의도한 사용자 경험: 작은 장비의 공간 효율과 큰 장비의 역할을 비교해 자신만의 장착판을\n  만듭니다.\n- 범위와 제외: 48종은 기획 목표이며 현재 ItemDB와 Studio ON 32개는 구현 전까지 그대로입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 무기 14 + 부위별 장비 34 = 48 산술 검산.\n\n### PBP-RUNE-001 — Seed 고정 259칸 아이템 룬 보드\n\n- 날짜: 2026-08-18\n- 도메인: 아이템 성장 / 룬 퍼즐 / 합성\n- 변경 유형: added\n- 이전 규칙: 각 아이템에 독립적인 장기 육각 성장판과 룬 조각 합성 계약이 없었습니다.\n- 새 유효 규칙: 각 아이템은 37칸 영역 일곱 개를 0~6등급에 하나씩 열고, 색별 시작점에서\n  젬블로식 한 칸 간격으로 1~5칸 룬을 연결합니다. 전체 능력 위치는 생성 Seed로 고정하며\n  합성 시 기준 아이템의 Seed와 배치를 보존합니다.\n- 근거: 같은 아이템도 경로·룬 모양·색 차단을 고민하는 장기 성장 퍼즐이 필요합니다.\n- 의도한 사용자 경험: 적은 룬으로 원하는 고등급 능력까지 길을 만들고 다른 색의 미래 경로를\n  함께 계획합니다.\n- 범위와 제외: 보드·등급 개방·룬/아이템 합성 계약이며 실제 생성기와 저장 마이그레이션은\n  후속 구현입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016\n- 검증과 증거: 일곱 영역 각각 37칸과 전체 259칸, 영역별 능력 분포 합계 검산.\n\n### PBP-RUNE-002 — 룬 능력 예산·등급 증가·레어 칸\n\n- 날짜: 2026-08-18\n- 도메인: 룬 능력 / 밸런스 / UI 표현\n- 변경 유형: added\n- 이전 규칙: 룬 능력의 등급별 개수·표시 정밀도·레어 판정과 아이템 정체성 보호 규칙이\n  없었습니다.\n- 새 유효 규칙: 전체 능력 등급 개수는 18·27·33·37·41·50·53이며 같은 능력의 실제 등장\n  등급은 UI 표시값까지 엄격히 증가합니다. 구조형 레어는 6등급 영역의 황금 칸에서 한 단위만\n  제공하고 Seed는 위치만 바꿉니다.\n- 근거: 상위 등급의 보상감을 보존하고 좋은 Seed가 총 전투력 자체를 재추첨하지 않게 합니다.\n- 의도한 사용자 경험: 황금 칸을 장기 목표로 삼되 낮은 등급 경로도 매 단계 분명한 성장을\n  제공합니다.\n- 범위와 제외: 일반 POWER/SPEED/CHANCE/TRAIT/GUARD/TIME/RANGE와 레어 표시에 적용합니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 등급·트랙별 칸 수와 259칸 합계, 모든 표시 수치의 단조 증가 수동 검토.\n\n### PBP-COMBAT-001 — 자동 스킬과 비선형 능력 캡\n\n- 날짜: 2026-08-18\n- 도메인: 전투 능력 / 자동 스킬 / 방어 계산\n- 변경 유형: added\n- 이전 규칙: 룬 인플레이션에서 행동 빈도·확률·무적·발사체 수를 안전하게 제한하는 공통\n  계산 순서가 없었습니다.\n- 새 유효 규칙: 자동 스킬은 해당 무기의 기본 공격 실행 횟수로 발동하고 감소는 최대 8회,\n  최소 요구 횟수는 1회입니다. 방패 막기는 최대 100%에서 방어력을 두 배로 적용하며 방어력\n  이후 최종 피해감소는 최대 50%입니다. 이동·공격·대시·회피·회복·보호막 등은 v016의\n  항목별 캡을 사용합니다.\n- 근거: 적 수치 강화로 대응 가능한 선형 인플레이션은 허용하되 무한 행동·완전 무적·확률\n  초과는 막아야 합니다.\n- 의도한 사용자 경험: 큰 숫자 성장은 즐기면서도 공격과 피격의 기본 규칙은 계속 작동합니다.\n- 범위와 제외: 탄약, 탄약 미소모, 소모품 미소모와 스킬 초기화 확률은 사용하지 않습니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: backpack-combat-stat-database, inventory-item-concept@v016\n- 검증과 증거: 계산 순서와 캡·제외 목록의 기획 교차 검토.\n\n### PBP-RUNE-003 — 알파 무기 14종의 보드 정체성\n\n- 날짜: 2026-08-18\n- 도메인: 무기 콘텐츠 / 룬 보드 / 자동 스킬\n- 변경 유형: added\n- 이전 규칙: 알파 무기별 자동 스킬 조건과 259칸 A/B/C/D·레어 배분이 고정되지 않았습니다.\n- 새 유효 규칙: 일곱 무기 형태에 두 종류씩 14개를 두고 각 보드는 A 102, B 71, C 48,\n  D 32, 6등급 로컬 레어 6칸을 가집니다. 목걸이는 발사체, 반지는 자동 스킬 요구 공격,\n  귀걸이는 근거리 사거리의 전역 레어를 제공하고 신발만 추가 대시를 제공합니다.\n- 근거: Seed 위치가 달라도 무기 이름과 공격 방식에 맞는 성장 정체성이 유지돼야 합니다.\n- 의도한 사용자 경험: 같은 룬이라도 연격검·공성 석궁·흡혈 도끼에서 서로 다른 경로와\n  자동 스킬을 강화합니다.\n- 범위와 제외: 14종의 알파 기획 계약이며 최종 아이콘·폴리오미노 좌표·전투 구현은 후속입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 각 무기 레어 합계 6칸과 보드 전체 259칸 산술 검산.\n\n### PBP-ITEMDB-002 — 최종 48종 활성 ItemDB 전환\n\n- 날짜: 2026-08-20\n- 도메인: 아이템 콘텐츠 / 공개 데이터베이스 / 런타임 배포\n- 변경 유형: superseded\n- 대체 대상: PBP-ITEMDB-001, PBP-CONTENT-003의 \"후속 구현 목표\" 상태\n- 이전 규칙: 새 48종은 기획 목표이고 과거 90종과 게임 ON 32종이 구현 전 역사적 현행\n  상태였습니다.\n- 새 유효 규칙: 무기 14종과 방어구·장신구 34종의 최종 48종만 ItemDB 원본, 생성 런타임,\n  공개 미디어의 활성 집합으로 사용합니다. 과거 아이콘과 특수 아이템은 제거하고 ON/OFF\n  운영 경계는 유지합니다.\n- 근거: 기획·로컬 원화·공개 DB·게임 카탈로그의 서로 다른 활성 집합은 이름·점유·자산 ID\n  불일치를 만듭니다.\n- 의도한 사용자 경험: 플레이어와 개발자가 같은 최종 48종의 이미지와 형태만 봅니다.\n- 범위와 제외: 아이템 정의·아이콘·사각 점유·공개 DB에 적용하며 과거 위키 기록은 보존합니다.\n- 영향 소스: inventory-item-art-catalog.md, inventory-item-layouts.json,\n  GeneratedItemLayouts.luau, ItemCatalog.luau, wiki/site/item-db-data.js\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: ItemDB 48종 빌드·체크, 최종 카탈로그와 모바일 공개 DB 캡처.\n\n### PBP-RUNE-004 — 427칸·후보 10개 룬 보드\n\n- 날짜: 2026-08-20\n- 도메인: 아이템 성장 / 룬 보드 / 랜덤화\n- 변경 유형: superseded\n- 대체 대상: PBP-RUNE-001, PBP-RUNE-002\n- 이전 규칙: 모든 아이템은 37칸 영역 일곱 개의 259칸 보드 하나를 Seed로 섞고, 능력 등급\n  총량 18·27·33·37·41·50·53을 사용했습니다.\n- 새 유효 규칙: 각 영역을 반지름 4인 61칸으로 확대해 전체 427칸을 사용합니다. 아이템\n  정의마다 결정론적으로 생성된 후보 10개를 두고 아이템 생성 시 하나를 균등 선택해 VariantId와\n  Seed를 저장합니다. 보드당 능력 등급 총량은 30·45·54·60·67·90·81입니다.\n- 근거: 11개 능력 계열과 레어 노드, 일곱 색 경로를 한 판에서 읽고 우회할 충분한 공간이\n  필요합니다. 후보를 제한하면 다양성과 재현·검증을 함께 확보할 수 있습니다.\n- 의도한 사용자 경험: 같은 아이템에서도 다른 길을 계획하되 총 능력 예산이 운에 따라 바뀌지는\n  않습니다.\n- 범위와 제외: 48종 전체 480개 보드에 적용하며 런타임 재굴림은 허용하지 않습니다.\n- 영향 소스: item-rune-board-database.json, GeneratedRuneBoardDB.luau,\n  rune-board-db-data.js\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 생성기 결과 48×10=480보드, 보드마다 7×61=427칸, revision\n  6e735afdab3d7550.\n\n### PBP-RUNE-005 — 34종 룬 도형과 62종 능력 아이콘\n\n- 날짜: 2026-08-20\n- 도메인: 룬 조각 / 보드 가독성 / 터치 배치\n- 변경 유형: added\n- 이전 규칙: 룬은 1~5칸 젬블로식 조각이라는 개념만 있었고 완전한 형태군, 공용 원화와\n  능력 아이콘의 책임 분리가 고정되지 않았습니다.\n- 새 유효 규칙: 회전·반전을 동일시한 1·1·3·7·22개, 총 34종 자유 폴리헥스를 사용합니다.\n  일곱 색은 빈 중앙 메달의 중립 원화를 틴트하고, 62종 전투 effect 아이콘을 중앙에 별도\n  합성합니다. 드래그는 실제 도형·잡은 칸·회전·반전을 보존하며 마지막 스냅 가이드를 확정값으로\n  사용합니다.\n- 근거: 색·등급·능력 의미를 한 장의 원화에 굽지 않아야 작은 화면에서도 의미를 읽고 데이터\n  변경에도 자산을 재사용할 수 있습니다.\n- 의도한 사용자 경험: 탭하지 않아도 대략적인 능력 종류를 알고, 손가락 아래에서 룬이 튀지\n  않은 채 예상 위치에 놓입니다.\n- 범위와 제외: 룬 카드·보드 노드·드래그 미리보기에 적용하며 상세 수치는 텍스트로 제공합니다.\n- 영향 소스: rune-piece-catalog.json, rune-ability-icon-catalog.json,\n  rune_hex_neutral.png, rune_ability_icons.png, UIPrimitives.luau, Screen.luau\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 형태군 34개, effect 아이콘 62개 생성·누락 검사와 아이콘 시트.\n\n### PBP-UI-001 — 모바일 인벤토리·룬 보드의 단일 작업 흐름\n\n- 날짜: 2026-08-20\n- 도메인: 모바일 UI / 인벤토리 / 룬 보드 / 합성\n- 변경 유형: added\n- 이전 규칙: 사각 장착과 룬 보드의 개별 기획은 있었지만 화면 내 기능 위치, 터치 우선순위,\n  필터·합성·복귀 상태의 완전한 흐름이 없었습니다.\n- 새 유효 규칙: 두 화면은 안전 영역 아래 상단 상태, 중앙 작업판, 하단 보관함을 공유합니다.\n  카드 탭은 룬 보드 진입, 드래그는 배치 또는 합성을 우선합니다. 룬 보관함은 상하 스크롤,\n  한 색 또는 전체를 고르는 7색 필터와 독립 ON/OFF인 1~5칸 필터를 제공하고, 빈 보드 탭은\n  상단 중앙에 능력을 표시합니다.\n- 근거: 모바일에서는 화면 전환마다 탐색 위치와 재료가 사라지면 배치 퍼즐의 비교 비용이\n  지나치게 커집니다.\n- 의도한 사용자 경험: 인벤토리 배치, 아이템 성장, 룬 배치와 합성을 같은 손동작 문법으로\n  왕복합니다.\n- 범위와 제외: 모바일 세로 화면과 터치 입력에 적용하며 PC 밀도·마우스 품질은 현재 완료\n  기준이 아닙니다.\n- 영향 소스: inventory-rune-ui-spec.md, InventoryV2, RuneBoard, InventoryV2Service.luau\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 정적 상태·Luau 테스트, iPhone 17 Pro 400×777 및 iPhone 7 374×666 Studio\n  Play 캡처, 핵심 입력 경로와 콘솔 오류 없음 확인.\n\n### PBP-ART-002 — 최종 아이템 카툰 아트와 방향 규칙\n\n- 날짜: 2026-08-20\n- 도메인: 아이템 아트 / 모바일 전투 / 사각 점유\n- 변경 유형: superseded\n- 대체 대상: PBP-ART-001의 육각·시너지 카드 중심 아트 계약\n- 이전 규칙: 실사풍 또는 고풍스러운 원화와 육각 시너지 카드 문법이 섞였고, 일부 무기는\n  사각 점유와 전투 회전 기준에 맞지 않았습니다.\n- 새 유효 규칙: 48종 전체를 밝고 굵은 카툰풍으로 통일하고 사각 폴리오미노 질량에 맞춥니다.\n  근접 무기는 위쪽, 활·석궁·총은 오른쪽을 기본 방향으로 하며 발사체·공격 궤적은 원화에서\n  제외합니다.\n- 근거: Brotato식 자동 공격에서는 작은 캐릭터 주변을 도는 장비의 방향과 실루엣이 즉시\n  읽혀야 합니다.\n- 의도한 사용자 경험: 보관함·장착판·전투에서 같은 아이템을 형태만으로 알아봅니다.\n- 범위와 제외: 최종 48종 인벤토리 원화에 적용하며 실제 공격 VFX와 투사체는 별도 자산입니다.\n- 영향 소스: Assets/Items/InventoryIcons, inventory-item-art-catalog.md,\n  uploaded_asset_ids.json\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 최종 48종 카탈로그와 공개 ItemDB 캡처.\n\n### PBP-RUNE-006 — 등급·색·시작점 일치와 회전 전용 배치\n\n- 날짜: 2026-08-20\n- 도메인: 룬 성장 / 연결 퍼즐 / 배치 권위\n- 변경 유형: changed\n- 대체 대상: PBP-RUNE-004의 자유 시작 색 등록, PBP-RUNE-005의 런타임 반전 조작\n- 이전 규칙: 룬 색과 합성 등급은 독립 값이었고, 해금된 어느 중앙 시작점에서든 아직 등록하지\n  않은 색을 시작할 수 있으며 플레이 중 회전과 반전을 모두 제공했습니다.\n- 새 유효 규칙: G0~G6 룬 색은 아이템 등급색과 일치합니다. 룬은 같은 번호 영역의 중앙\n  시작점에서만 첫 등록하며 아이템 등급보다 높은 룬은 배치할 수 없습니다. 5칸 합성으로 등급이\n  오르면 다음 등급 색으로 바뀌고 런타임 조작은 60° 회전만 제공합니다. 첫 룬은 중앙 한 칸만\n  덮으면 도형의 어느 셀을 잡았든 유효하며 이후에는 한 칸 간격 연결 전선을 안내합니다.\n- 근거: 색·등급·시작점이 서로 다른 축이면 성장 잠금과 연결 가능 위치를 화면만 보고 예측하기\n  어렵고 저장 데이터가 모순될 수 있습니다.\n- 의도한 사용자 경험: 새 등급을 열 때 같은 색의 새 출발점을 즉시 이해하고, 보드가 보여 주는\n  한 칸의 목표와 실제 도형 가이드만으로 자유로운 첫 배치를 시도합니다.\n- 범위와 제외: 룬 생성·합성·저장 정규화·보드 배치·회전에 적용합니다. 34개 자유 폴리헥스\n  카탈로그의 중복 제거 기준은 유지합니다.\n- 영향 소스: rune-piece-system.md, inventory-rune-ui-spec.md, RuneBoardModel.luau,\n  RuneMergeModel.luau, InventoryV2Service.luau, Screen.luau\n- 관련 위키: inventory-item-concept@v018\n- 검증과 증거: InventoryV2 Luau 테스트의 등급색 불일치 거절, 등급별 시작점, 5칸 합성 색\n  승급, 첫 중앙 목표와 한 칸 간격 전선 검증.\n\n### PBP-UI-002 — 모바일 룬 보드의 문맥 보존 조작과 팝업 필터\n\n- 날짜: 2026-08-20\n- 도메인: 모바일 UI / 룬 보드 / 보관함 탐색\n- 변경 유형: changed\n- 대체 대상: PBP-UI-001의 상시 펼친 단일 색 필터와 보드 중심 재확대\n- 이전 규칙: 색상·칸 수 선택지가 보관함 위에 계속 공간을 차지하고 색상은 한 개 또는 전체만\n  골랐습니다. 확대할 때 보드 중앙으로 시점이 이동했고 회전·반전은 들고 있는 룬에 묶였습니다.\n- 새 유효 규칙: `색상 필터`와 `칸 수 필터` 한 줄 트리거가 각각 다중 선택 말풍선을 열며\n  바깥 탭으로 닫힙니다. 장착 룬 회전은 마지막 선택 룬에만 적용하고 확대·축소는 현재 보던\n  논리 위치를 유지합니다. 상단 능력 설명은 색상명을 빼고 고대비 등급·능력·수치만 표시합니다.\n- 근거: 좁은 세로 화면에서는 선택지를 계속 펼쳐 두는 것보다 실제 룬 카드를 더 많이 보여 주는\n  편이 중요하며, 카메라와 조작 대상이 예기치 않게 바뀌면 퍼즐 경로를 다시 찾아야 합니다.\n- 의도한 사용자 경험: 여러 색·크기를 짧은 팝업에서 조합해 찾고, 보던 위치와 선택 룬을 잃지\n  않은 채 확대·회전하며, 탭 설명을 즉시 읽습니다.\n- 범위와 제외: 모바일 세로 룬 장착 화면과 터치 입력에 적용합니다. PC 화면 밀도와 마우스\n  동등성은 현재 완료 기준이 아닙니다.\n- 영향 소스: inventory-rune-ui-spec.md, Screen.luau, VisualTokens.luau,\n  StorageSort.luau, test_inventory_v2_ui.py\n- 관련 위키: inventory-item-concept@v018\n- 검증과 증거: Galaxy A06 세로 Studio Play에서 필터 팝업·확장된 카드 영역·고대비 능력\n  설명을 확인했고, Studio MCP 진단과 7개 UI 계약 테스트를 통과했습니다.\n\n### PBP-COMBAT-002 — 장착 무기 할로와 서버 권위 자동 공격\n\n- 날짜: 2026-08-20\n- 도메인: 필드 장착 표시 / 자동 전투 / 모바일 연출\n- 변경 유형: superseded\n- 대체 대상: PBP-INV-007의 방향 반응형 필드 표시와 실제 공격 제외 범위\n- 이전 규칙: 최대 여섯 장착 무기는 캐릭터 방향을 따라 회전하는 머리 위 이미지로만 보였고,\n  실제 표적 탐색·공격·피해와 무기별 연출은 후속 범위였습니다.\n- 새 유효 규칙: 적이 없을 때 여섯 무기는 캐릭터 방향과 무관한 이미지 할로로 머리 위에\n  부유합니다. 적이 사거리와 시야 안에 들어오면 서버가 슬롯별 표적·쿨다운·피해를 결정하고\n  클라이언트는 베기·찌르기·투척·활·석궁·총기 연출을 재생합니다. 14종 원화는 ItemDB의\n  정규화된 회전축·타격점·발사구를 공통 계약으로 사용합니다.\n- 근거: 인벤토리의 장착 결과가 실제 전투 행동으로 연결돼야 빌드가 필드에서 살아 움직이며,\n  캐릭터 방향에 무기를 묶지 않아야 대기 할로와 공격 조준의 책임이 충돌하지 않습니다.\n- 의도한 사용자 경험: 적이 없을 때는 자신의 여섯 무기를 안정된 천사 링으로 읽고, 전투가\n  시작되면 각 원화가 직접 날아가거나 발사하는 모습을 통해 무기 종류를 즉시 구분합니다.\n- 범위와 제외: 14종의 기본 자동 공격, 서버 피해와 공통 연출 계열까지 적용합니다. 도탄·산탄·\n  관통·흡혈·반격 같은 고유 능력, 룬 변형, 음향과 적 피격 애니메이션은 후속 범위입니다.\n- 영향 소스: alpha-item-definitions.json, inventory-item-layouts.json,\n  EquippedWeaponBillboard.luau, WeaponAttackVFX.luau, WeaponCombatConfig.luau,\n  WeaponCombatService.luau, DamageResolver.luau\n- 관련 위키: weapon-combat-presentation@v001, inventory-item-concept@v018,\n  character-2d-rendering@v009\n- 검증과 증거: 14개 무기 공격 발생, 적 없음 공격 증가 0, iPhone 17 Pro `401×776`과\n  Galaxy A06 `359×718` Studio Play, 45개 연출 수신·누락 0·객체 수 736 고정·서버 피해와\n  콘솔 오류 없음 확인.\n\n### PBP-COMBAT-003 — 근접 여섯 무기 할로와 소켓 기준 최근접 적 조준\n\n- 날짜: 2026-08-21\n- 도메인: 필드 장착 표시 / 자동 전투 조준 / 모바일 연출\n- 변경 유형: changed\n- 대체 대상: PBP-COMBAT-002의 넓은 할로 위치와 기본 원화 회전 조준 규칙\n- 이전 규칙: 여섯 무기는 캐릭터 머리 위 할로에 부유하고 서버 권위 자동 공격으로 전환했지만,\n  캐릭터와의 최대 거리, 좌우 세 슬롯의 정확한 배치, 모든 무기의 공통 표적과 왼쪽을 보는\n  비대칭 원화 처리 방식은 고정되지 않았습니다.\n- 새 유효 규칙: 여섯 무기를 머리 가까운 좁은 타원의 왼쪽 세 개·오른쪽 세 개에 같은 현 길이\n  간격으로 두고 정중앙 위·아래는 비웁니다. 장착 집합은 사거리 안에서 가장 가까운 생존 적\n  하나를 공통 후보로 선택하고 각 무기는 자기 사거리 안에서 실제 칼끝·타격점·총구·화살·볼트\n  발사 방향을 맞춥니다. 오른쪽 기본 원화가 왼쪽 표적을 보면 상하 회전 대신 수평 반전하며\n  회전축·타격점·발사 소켓도 함께 반전합니다. 적이 없으면 기본 방향의 독립 부유로 돌아갑니다.\n- 근거: 무기가 캐릭터에서 멀리 흩어지면 장착 관계와 천사 링 실루엣이 사라지고, 왼쪽 적을\n  단순 각도 회전으로 겨누면 총과 활이 거꾸로 보이며 총구·발사체 위치도 원화와 어긋납니다.\n- 의도한 사용자 경험: 작은 모바일 화면에서도 여섯 장비를 캐릭터 소유의 한 묶음으로 즉시\n  읽고, 전투에서는 모든 무기가 같은 위협을 각자의 실제 끝점으로 노리는 장면을 봅니다.\n- 범위와 제외: 대기 할로 위치, 최근접 표적 선택, 무기별 사거리, 대기·공격 조준과 좌측 수평\n  반전에 적용합니다. 도탄·산탄·관통 같은 다중 표적 고유 능력과 음향은 후속 범위입니다.\n- 영향 소스: EquippedWeaponVisualLayout.luau, EquippedWeaponBillboard.luau,\n  WeaponAimResolver.luau, WeaponAttackVFX.luau, WeaponTargeting.luau,\n  WeaponCombatService.luau\n- 관련 위키: weapon-combat-presentation@v002\n- 검증과 증거: 사용자 좌표 측정 이미지, iPhone 17 Pro `401×776`의 여섯 무기 근접 할로와\n  좌측 표적 수평 반전 공격 캡처, Galaxy A06 `359×718` 반응형 여백 검사, 관련 테스트와\n  Studio 콘솔 오류 없음 확인.\n\n### PBP-RUNE-007 — 전체 초안과 원자 저장 룬 편집\n\n- 날짜: 2026-08-21\n- 도메인: 룬 연결 규칙 / 저장 권위 / 모바일 편집\n- 변경 유형: changed\n- 대체 대상: PBP-RUNE-006의 즉시 유효 배치 중심 조작\n- 이전 규칙: 매 조작이 그 순간 유효해야 배치 상태로 남을 수 있어 회전 중 잠시 잘못된 형태를\n  확인하거나 여러 룬을 함께 고친 뒤 저장하는 흐름이 없었습니다.\n- 새 유효 규칙: 룬 추가·이동·회전·회수는 전체 초안을 편집합니다. 무효 룬은 빨간색으로 남겨\n  수정할 수 있지만 저장은 비활성화되며, 서버가 전체 배치를 다시 검증한 뒤 유효한 초안만\n  원자적으로 저장합니다. 되돌리기는 마지막 저장 상태를 복원합니다. 한 칸 간격 연결은 배치\n  순서가 아니라 완성된 같은 색 네트워크 전체를 기준으로 판정합니다.\n- 근거: 퍼즐은 중간 단계가 아니라 최종 형태를 설계하는 작업이며, 클라이언트 조작 순서가 같은\n  완성 배치의 합법성을 바꾸면 안 됩니다.\n- 의도한 사용자 경험: 자유롭게 돌리고 옮기며 실패 이유를 본 뒤, 만족한 전체 배치만 안전하게\n  확정합니다.\n- 범위와 제외: 보관/배치 룬의 이동·회전·회수, 저장·되돌리기, 클라이언트와 서버의 전체 배치\n  검증에 적용합니다. 룬 합성 규칙은 바꾸지 않습니다.\n- 영향 소스: inventory-rune-ui-spec.md, RuneBoardModel.luau, RuneDragVisualState.luau,\n  Screen.luau, InventoryV2Service.luau\n- 관련 위키: inventory-item-concept@v019\n- 검증과 증거: 한 칸 간격 5칸 도형 배치, 잘못된 회전의 빨간 상태와 저장 비활성, 악성 저장\n  요청 거절 뒤 서버 상태 보존, 제거·되돌리기 Studio 진단과 InventoryV2 테스트.\n\n### PBP-UI-003 — 현재 형태 가이드와 정돈된 룬 보드 시각 언어\n\n- 날짜: 2026-08-21\n- 도메인: 모바일 룬 보드 / 터치 상호작용 / 정보 시각화\n- 변경 유형: changed\n- 대체 대상: PBP-UI-002의 선택 회전·필터·능력 설명 흐름\n- 이전 규칙: 연결 가이드가 현재 도형의 잡은 셀과 회전을 충분히 반영하지 않았고 잠긴 영역과\n  빈 영역의 차이가 드러나지 않았습니다. 보관 카드에서 방향을 미리 정하거나 배치 룬을\n  보관함으로 회수하기 어려웠고, 두꺼운 육각 테두리와 불투명 룬 장식이 색과 능력을 방해했습니다.\n- 새 유효 규칙: 현재 잡은 셀·회전·전체 배치를 기준으로 모든 후보를 계산합니다. 유효 칸은\n  라임색, 잠긴 칸은 탁한 적갈색, 무효 초안은 빨간색으로 표시하며 기존 룬과 같은 색 능력\n  아이콘은 유지합니다. 보관 카드와 배치 룬은 선택·60° 회전하고 배치 룬은 이동·회수합니다.\n  틈 없는 얇은 벌집과 색이 비치는 투명 크리스털 룬을 사용하고, 전체 필터는 모두 ON 상태에서\n  모두 OFF로 반전할 수 있습니다. 룬 각인 효과 탭은 유효 노드를 효과별로 합산합니다.\n- 근거: 플레이어가 손을 놓기 전에 가능 위치와 불가능 이유, 현재 활성 보상, 도형 방향을 함께\n  읽어야 최적 경로를 계산할 수 있습니다.\n- 의도한 사용자 경험: 보드 위 정보를 한눈에 구분하고, 카드에서 방향을 준비해 원하는 위치로\n  옮긴 뒤 실제 얻는 효과까지 같은 화면 흐름에서 확인합니다.\n- 범위와 제외: 모바일 세로 룬 보드와 보관함, 필터, 효과 요약에 적용합니다. PC 화면 품질과\n  마우스 동등성은 현재 완료 기준이 아닙니다.\n- 영향 소스: rune_hex_neutral.png, rune_piece_crystal.png, Assets.luau,\n  UIPrimitives.luau, VisualTokens.luau, RuneEffectSummary.luau, Screen.luau\n- 관련 위키: inventory-item-concept@v019\n- 검증과 증거: iPhone 17 Pro 세로의 연결·잠금 가이드, 잘못된 초안, 효과 합산 Studio\n  캡처와 iPhone 7 세로 반응형 검사.\n\n### PBP-COMBAT-004 — 인벤토리 중 공격 연출 억제\n\n- 날짜: 2026-08-21\n- 도메인: 모바일 인벤토리 / 전투 표현 계층\n- 변경 유형: added\n- 이전 규칙: 필드 공격 테스트 루프와 공격 연출이 인벤토리보다 높은 레이어에서 계속 재생되어\n  작업 영역을 뚫고 보일 수 있었습니다.\n- 새 유효 규칙: 인벤토리·룬 화면이 열리면 진행 중 클라이언트 공격 연출을 즉시 지우고 새\n  연출을 받지 않으며 오버레이를 비활성화합니다. 화면을 닫으면 표현만 다시 허용합니다.\n- 근거: 전투 준비 작업에서는 퍼즐과 정보가 시각 우선권을 가져야 하며, 화면을 덮는 것만으로는\n  불필요한 연출 루프가 계속 실행됩니다.\n- 의도한 사용자 경험: 인벤토리에 들어오는 순간 필드 공격 연출이 완전히 멈춰 룬 배치에\n  집중하고, 나가면 자연스럽게 전투 표현으로 돌아갑니다.\n- 범위와 제외: 클라이언트 무기 공격 VFX와 오버레이에 적용합니다. 서버의 공격 판정·피해·\n  장착 상태는 변경하지 않습니다.\n- 영향 소스: Screen.luau, WeaponAttackVFX.luau\n- 관련 위키: inventory-item-concept@v019, weapon-combat-presentation@v002\n- 검증과 증거: Studio Play에서 InventoryV2Screen 활성 중 WeaponCombatVFX\n  Enabled=false, Suppressed=true, 활성 공격·투사체·충돌 0개 확인.\n\n### PBP-ACTION-002 — 3단계 Dash와 이동 구간 잔상\n\n- 날짜: 2026-08-23\n- 도메인: 캐릭터 행동 / 모바일 전투 표현\n- 변경 유형: superseded\n- 대체 대상: PBP-ACTION-001의 Dash 시작 프레임 고정 표현\n- 이전 규칙: Dash는 0.30초 동안 시작 순간의 캐릭터 프레임을 그대로 유지했습니다.\n- 새 유효 규칙: 방향 잠금·0.30초·20스터드 이동은 유지하면서 예비 0.05초, 이동 0.20초,\n  회복 0.05초의 통짜 캐릭터 자세를 재생합니다. 잔상은 이동 자세에서 실제 경로 뒤에만\n  생성되고 회복 자세에서 본체로 수렴합니다.\n- 근거: 시작 프레임 고정은 형태 안정성은 지키지만 행동의 출발과 종료를 자세로 설명하지\n  못합니다. 세 개의 명확한 키포즈는 캐릭터 정체성을 지키면서 타이밍을 읽게 합니다.\n- 의도한 사용자 경험: 버튼을 누른 순간 몸을 낮추고 빠르게 이동한 뒤 균형을 되찾는 흐름과\n  잔상 소멸을 보고 Dash 종료를 직관적으로 이해합니다.\n- 범위와 제외: Rookie 남성 통짜 캐릭터 Dash와 런타임 잔상에 적용합니다. 이동 거리·충돌·\n  쿨다운·룬 보너스 한도는 변경하지 않습니다.\n- 영향 소스: production_manifest.json, AssetRegistry.luau, CharacterController.luau,\n  DashAfterimage.luau, FrameSpriteRig.luau, ProductionDashData.luau\n- 관련 위키: character-2d-rendering@v010\n- 검증과 증거: 좌우 3프레임 콘택트 시트, 정확한 20fps 타이밍·잔상 GIF, 캐릭터 자산 검사,\n  30개 후보 테스트와 Galaxy A06 Studio Play Dash 잔상 캡처.\n\n### PBP-ART-003 — 발이 고정된 좌우 호흡 Idle\n\n- 날짜: 2026-08-23\n- 도메인: 캐릭터 애니메이션 / 아트 방향\n- 변경 유형: added\n- 이전 규칙: 정지 상태는 통짜 Run 아틀라스 이전의 호환 프레임 또는 사실상 고정 자세를\n  사용해 호흡의 생동감이 없었습니다.\n- 새 유효 규칙: 마지막 East·West 방향을 유지하는 8프레임 6fps 호흡을 사용합니다. 발과\n  골반 아래는 고정하고 상체의 들숨·정점·날숨·복귀만 움직이며 전체 균일 확대는 금지합니다.\n- 근거: 작은 모바일 캐릭터는 생동감이 필요하지만 바닥 접지와 실루엣 안정성을 잃으면 조작\n  위치가 흔들려 보입니다.\n- 의도한 사용자 경험: 멈춰 있어도 캐릭터가 살아 숨 쉬되 신발이 미끄러지거나 방향이 이유\n  없이 반전되지 않는 안정적인 정지 화면을 봅니다.\n- 범위와 제외: Rookie 남성 통짜 캐릭터 Idle에 적용합니다. Hit·Death·Clear 제작은 별도\n  승인 단위입니다.\n- 영향 소스: production_manifest.json, Config.luau, DirectionResolver.luau,\n  FrameSpriteRig.luau, ProductionIdleData.luau\n- 관련 위키: character-2d-rendering@v010\n- 검증과 증거: 좌우 8프레임 콘택트 시트, 하체 픽셀 고정 검사, 캐릭터 자산 검사와 Galaxy\n  A06 Studio Play Idle 캡처.\n\n### PBP-INV-010 — 장비 전체 초안과 원자 저장\n\n- 날짜: 2026-08-23\n- 도메인: 모바일 인벤토리 / 장비 배치 권위\n- 변경 유형: added\n- 이전 규칙: 아이템을 한 번 옮길 때마다 개별 배치를 즉시 확정했고, 여러 장비를 재정리한\n  최종 결과를 저장 전에 함께 검토하는 계약이 없었습니다.\n- 새 유효 규칙: 추가·이동·회전·보관은 전체 초안을 갱신합니다. 겹친 장비는 가장 가까운\n  빈자리로 밀어 결과를 미리 보여 주고, 잠금·무게·장착 한도 등 무효 상태는 빨간색으로 남기되\n  저장을 비활성화합니다. 서버는 최대 200개 좌표를 전체 재검증해 모두 유효할 때만 원자적으로\n  교체하며 되돌리기는 마지막 저장 상태를 복원합니다.\n- 근거: 여러 모양의 장비를 퍼즐처럼 재배치할 때 중간 한 수를 즉시 저장하면 플레이어가\n  전체 구성을 비교하기 어렵고, 실패 중간 상태가 영구 데이터가 될 위험이 있습니다.\n- 의도한 사용자 경험: 장비를 여러 번 옮겨 최종 구성을 눈으로 검토하고, 잘못된 아이템과\n  이유를 고친 뒤 한 번만 저장합니다.\n- 범위와 제외: 9×9 사각 장착판과 보관함 전환에 적용합니다. ItemDB 이미지 배율·X/Y 보정의\n  실제 렌더링 연결은 이번 범위가 아닙니다.\n- 영향 소스: InventoryModel.luau, ItemPlacementDraft.luau, Screen.luau,\n  InventoryV2Service.luau\n- 관련 위키: inventory-item-concept@v020\n- 검증과 증거: 충돌 장비의 결정적 이동, 잠긴 칸 초안·저장 비활성·되돌리기 Luau 테스트와\n  Galaxy A06 Studio Play 실패 상태 캡처.\n\n### PBP-UI-004 — 선택 우선 장비 조작과 세로 보관함\n\n- 날짜: 2026-08-23\n- 도메인: 모바일 인벤토리 / 터치 UX\n- 변경 유형: changed\n- 이전 규칙: 아이템 탭이 룬 화면 이동과 직접 연결되고 보관 카드·스크롤·배치 드래그의 입력\n  의도가 충분히 분리되지 않았으며 보관함은 가로 흐름을 전제로 했습니다.\n- 새 유효 규칙: 짧은 탭은 선택만 하고 회전 버튼을 보여 줍니다. 움직이지 않은 길게 누르기는\n  룬 페이지·상세 정보 메뉴를 열고, 움직임이 생기면 세로 스크롤 또는 실제 아이템 그림 드래그로\n  전환합니다. 보관함은 안전 여백을 둔 세로 다열 그리드를 사용합니다.\n- 근거: 같은 손가락으로 탐색·선택·배치·상세 보기를 수행하는 모바일에서는 행동 전에 선택\n  상태와 명확한 분기 피드백이 필요합니다.\n- 의도한 사용자 경험: 목록을 안정적으로 훑고, 원하는 장비를 선택해 회전하거나 끌며, 가만히\n  눌렀을 때만 다음 작업을 고릅니다.\n- 범위와 제외: 모바일 세로 인벤토리와 장비 상세 팝업에 적용합니다. PC 레이아웃 품질과\n  마우스 동등성은 현재 완료 기준이 아닙니다.\n- 영향 소스: inventory-rune-ui-spec.md, ItemGesturePolicy.luau, Screen.luau\n- 관련 위키: inventory-item-concept@v020\n- 검증과 증거: InventoryV2 스펙, UI 계약 테스트, Galaxy A06의 기본·메뉴·상세 캡처와\n  iPhone 7 `374×666`의 세로 스크롤·메뉴·상세 경계 검사.\n\n### PBP-DOC-002 — 비개발자 중심 커밋 위키와 다중 상태 증거\n\n- 날짜: 2026-08-23\n- 도메인: 개발 운영 / 기획 기록 / 위키 품질\n- 변경 유형: added\n- 이전 규칙: 커밋 위키는 기획 우선과 시각 증거를 요구했지만, 비개발자 가독성 판정과 여러\n  상태가 필요한 UI의 증거 범위가 충분히 구체적이지 않았습니다.\n- 새 유효 규칙: `한눈에 보는 변경`에서 무엇이·왜·어떻게 달라졌는지 먼저 답하고, 제품 언어로\n  경험·원칙·범위를 설명한 뒤 구현을 근거로 둡니다. 시각 변화는 이해에 필요한 기본·상호작용·\n  선택·성공·실패 상태를 실제 Studio 또는 브라우저에서 캡처합니다.\n- 근거: 기획 철학이 코드 목록에 묻히거나 한 장의 우연한 화면만 남으면 다음 직군과 미래의\n  작업자가 제품 의도를 복원하기 어렵습니다.\n- 의도한 사용자 경험: 디자이너·아티스트·테스터·새 팀원이 소스 코드를 열지 않고도 변경 이유,\n  최종 규칙과 실제 결과를 한 페이지에서 이해합니다.\n- 범위와 제외: 사용자 승인 커밋에서 발행하는 모든 위키 페이지에 적용합니다. 개발 중간\n  기록과 폐기된 접근은 계속 게시하지 않습니다.\n- 영향 소스: AGENTS.md, update-project-wiki/SKILL.md\n- 관련 위키: development-wiki@v013\n- 검증과 증거: 이번 커밋의 character-2d-rendering@v010과 inventory-item-concept@v020에\n  새 서사 순서와 제작·기본·선택·실패·상세·두 화면비 증거를 실제 적용.\n\n### PBP-INV-011 — 배치 순서 기반 장착 요약과 세 가지 빠른 작업\n\n- 날짜: 2026-08-23\n- 도메인: 모바일 인벤토리 / 장착 상태 / 룬 성장 진입\n- 변경 유형: changed\n- 대체 대상: PBP-INV-007의 별도 2×3 장착 무기 표시와 단순 상세·빼기 메뉴\n- 이전 규칙: 장착 무기는 별도 장착 탭의 고정 여섯 칸에서 확인하고 상세 정보 또는 배치 해제를\n  선택했으며, 무기 표시 순서와 다른 부위 장비의 동시 요약 계약이 완전하지 않았습니다.\n- 새 유효 규칙: 유효 배치 무기는 장착판에 들어온 순서를 저장해 왼쪽부터 최대 여섯 개를\n  표시합니다. 오른쪽에는 머리·귀걸이·목걸이·상의·장갑·하의·벨트·반지 둘·신발을\n  함께 표시합니다. 채워진 모든 요약 칸의 메뉴는 이름·등급·공격력·공격 속도 아래 상세 정보,\n  룬 보드 편집, 보관함으로 이동을 이 순서로 제공합니다.\n- 근거: 장착 결과와 다음 성장 작업이 배치 화면에서 분리되면 플레이어가 같은 아이템을 다시\n  찾고 화면을 왕복해야 하며, 단순 식별자 정렬은 실제 장착 순서를 설명하지 못합니다.\n- 의도한 사용자 경험: 장비를 놓은 순서와 현재 부위를 즉시 확인하고, 원하는 아이템에서 바로\n  정보를 읽거나 룬을 편집하거나 보관함으로 되돌립니다.\n- 범위와 제외: 장비 배치 초안의 요약 표시·빠른 작업·전투 무기 복제 순서에 적용합니다.\n  필드 자동 공격 규칙과 아직 등록되지 않은 기본 효과 수치는 변경하지 않습니다.\n- 영향 소스: InventoryModel.luau, ItemPlacementDraft.luau, StateSerializer.luau,\n  Screen.luau, InventoryV2Service.luau\n- 관련 위키: inventory-item-concept@v021\n- 검증과 증거: 배치 순서 보존 Luau 테스트, 세 버튼 순서 UI 계약, Galaxy A06와 iPhone 17\n  Pro의 메뉴·룬 보드 선택 이동 Studio MCP 확인.\n\n### PBP-UI-005 — 배치판 중심 모바일 장비 작업대와 시간 기반 터치 중재\n\n- 날짜: 2026-08-23\n- 도메인: 모바일 인벤토리 / 반응형 레이아웃 / 터치 입력\n- 변경 유형: added\n- 이전 규칙: PBP-UI-004는 선택·길게 누르기·세로 보관함을 정했지만 배치판·도구·장착\n  요약의 한 화면 구성, 확대판 이동과 배치 아이템 드래그의 시간 경계, 요약 영역의 비스크롤\n  규칙을 완전히 정의하지 않았습니다.\n- 새 유효 규칙: 가운데 배치판, 아래 무기 여섯 칸, 오른쪽 위 확대·축소·원상태·회전, 오른쪽\n  아래 부위 장비 열 칸을 한 작업대로 구성합니다. 모든 요약 칸은 화면에 맞춰 정사각형으로\n  줄어들고 스크롤하지 않습니다. 저장·되돌리기는 다른 영역을 축소하지 않는 오버레이입니다.\n  확대판에서 0.3초 이내 움직임은 판 이동, 0.3초 이상 1초 미만 움직임은 아이템 이동이며,\n  1초 정지 뒤 1초 게이지가 차면 메뉴가 열립니다. 보관 아이템을 집으면 목록 스크롤을 잠그고\n  아이템 드래그 그림은 이전 68px의 절반인 34px 위에 표시합니다.\n- 근거: 같은 아이템 위에서 판 탐색·장비 이동·메뉴 열기가 경쟁하고, 화면 크기나 초안 상태가\n  바뀔 때 작업 영역이 재배치되면 모바일 공간 퍼즐의 위치 기억이 깨집니다.\n- 의도한 사용자 경험: 작은 휴대폰에서도 모든 장착 상태와 필수 도구를 스크롤 없이 보고,\n  손가락의 속도와 멈춤만으로 의도한 판 이동·장비 이동·메뉴를 안정적으로 실행합니다.\n- 범위와 제외: 모바일 세로 장비 배치 화면과 터치 입력에 적용합니다. PC 레이아웃 품질과\n  마우스 동등성은 현재 완료 기준이 아닙니다.\n- 영향 소스: ItemGesturePolicy.luau, Screen.luau, VisualTokens.luau,\n  test_inventory_v2_ui.py\n- 관련 위키: inventory-item-concept@v021\n- 검증과 증거: 정사각 비스크롤 UI 계약, 0.3초·1초 경계 Luau 테스트, Galaxy A06\n  359×718과 iPhone 17 Pro 401×776의 기본·메뉴·34px 드래그 Studio MCP 캡처와\n  콘솔 오류 없음 확인.\n\n### PBP-ITEMDB-003 — 모든 장비 화면에 동일한 ItemDB 원화 배치 적용\n\n- 날짜: 2026-08-24\n- 도메인: ItemDB / 모바일 장비 카드 / 배치 시각화\n- 변경 유형: changed\n- 이전 규칙: ItemDB는 사각 점유와 아이콘 자산을 생성했지만, 보관 카드가 웹에서 조정한\n  배율·X/Y 중심·기본 회전을 배치판과 같은 방식으로 사용하지 않았고 카드 아래 실제 점유\n  형태도 보이지 않았습니다.\n- 새 유효 규칙: ItemDB의 배율·중심 보정·기본 회전을 보관 카드, 배치판과 드래그 그림의\n  단일 시각 기준으로 사용합니다. 카드에는 현재 90° 회전을 반영한 실제 점유 칸을 그림 아래\n  표시하며, 원본·공개 DB·생성 런타임을 같은 리비전으로 유지합니다.\n- 근거: 웹에서 정중앙과 크기를 확정해도 게임 화면이 별도 맞춤값을 쓰면 같은 아이템이 화면마다\n  다르게 보이고, 플레이어는 배치 전에 차지할 모양을 예측할 수 없습니다.\n- 의도한 사용자 경험: 웹에서 확인한 크기와 중심 그대로 장비를 보고, 카드를 회전해 점유 모양과\n  그림 방향을 배치 전에 함께 확인합니다.\n- 범위와 제외: 활성 48종의 보관 카드·장비 배치판·드래그 그림과 ItemDB 생성물에 적용합니다.\n  아이템의 전투 능력치나 신규 효과는 변경하지 않습니다.\n- 영향 소스: inventory-item-layouts.json, GeneratedItemLayouts.luau, Screen.luau,\n  item-db-data.js\n- 관련 위키: inventory-item-concept@v022, backpack-combat-stat-database@v001\n- 검증과 증거: ItemDB 리비전 `8fb41028ba82d814`, 증폭 펜던트·집중의 반지 중심값 회귀 검사,\n  Galaxy A06의 선택·90° 회전 카드와 두 모바일 화면비의 카드 점유 미리보기 확인.\n\n### PBP-INV-012 — 배치 상태별 저장 또는 되돌리기 후 룬 이동\n\n- 날짜: 2026-08-24\n- 도메인: 장비 초안 / 룬 성장 진입 / 모바일 단계 단축\n- 변경 유형: changed\n- 이전 규칙: 저장하지 않은 장비 변경이 있으면 룬 보드 이동을 막고, 플레이어가 배치 화면으로\n  돌아가 저장 또는 되돌리기를 직접 끝낸 뒤 같은 아이템을 다시 찾아야 했습니다.\n- 새 유효 규칙: 배치가 정상일 때는 `저장하고 이동하기`, 정상이 아닐 때는\n  `배치를 되돌리고 이동하기`를 제공합니다. 공통으로 `배치로 돌아가기`가 있으며, 저장 성공\n  또는 마지막 저장 상태 복원 뒤 처음 선택한 아이템의 룬 보드로 바로 이동합니다.\n- 근거: 데이터 안전을 지키는 과정이 같은 아이템을 다시 찾는 반복 단계가 되어서는 안 되며,\n  저장 가능 여부는 시스템이 이미 알고 있으므로 다음 안전 행동을 직접 제시할 수 있습니다.\n- 의도한 사용자 경험: 변경 내용을 잃거나 잘못 저장하지 않으면서 한 번의 선택으로 장비 배치를\n  마무리하고 원하는 아이템의 룬 성장으로 이어 갑니다.\n- 범위와 제외: 장착 요약의 룬 보드 편집과 장비 초안 저장·되돌리기에 적용합니다. 룬 초안의\n  저장 규칙 자체는 바꾸지 않습니다.\n- 영향 소스: Screen.luau, test_inventory_v2_ui.py\n- 관련 위키: inventory-item-concept@v022\n- 검증과 증거: Galaxy A06에서 정상 초안의 저장 후 이동 팝업과 잠긴 칸 초안의 되돌리기 후\n  이동 팝업, 선택 아이템 보존과 서버 실패 시 보류 상태 정리 계약 검사.\n\n### PBP-UI-006 — 터치 영역별 보관함 의도와 기기 전체 인벤토리 집중층\n\n- 날짜: 2026-08-24\n- 도메인: 모바일 보관함 / 선택 피드백 / 화면 집중\n- 변경 유형: changed\n- 대체 대상: PBP-UI-004와 PBP-UI-005의 보관함 스크롤·드래그 중재 세부 규칙\n- 이전 규칙: 빠른 움직임과 길게 누르기로 스크롤·드래그를 나눴지만 카드 전체가 두 행동의\n  경쟁 영역이어서 스크롤 중 아이템이 들리거나, 이를 막은 뒤 아이템이 전혀 들리지 않는\n  상태가 반복됐습니다. 카드 등급 외곽선과 선택선도 비슷했고 안전 영역 밖에는 필드가 보였습니다.\n- 새 유효 규칙: 아이템 그림의 8px 이상 움직임은 즉시 드래그하고, 카드 여백·카드 사이의\n  0.4초 이내 세로 움직임은 스크롤합니다. 같은 시간 안의 가로 이탈은 취소하고 0.4초 이상\n  누른 뒤 움직이면 카드 어디서든 드래그합니다. 기본 외곽선은 얇은 중립색, 선택은 안쪽 라임색\n  선입니다. 별도 불투명 배경이 기기 전체를 덮고 뒤 입력을 막되 본체의 안전 영역은 유지합니다.\n- 근거: 한 영역에서 시간만으로 반대 행동을 모두 추측하는 것보다 플레이어가 직접 잡은 대상과\n  빈 공간의 의미를 보존해야 일관된 근육 기억이 생깁니다. 인벤토리 밖 필드 노출은 작업 화면의\n  집중과 완결성을 약화합니다.\n- 의도한 사용자 경험: 그림을 잡으면 즉시 장비가 들리고, 여백과 카드 사이를 밀면 안정적으로\n  목록이 움직이며, 선택 대상과 인벤토리 경계를 한눈에 이해합니다.\n- 범위와 제외: 모바일 장비 보관함의 터치 입력, 카드 외곽선과 인벤토리 전체 배경에 적용합니다.\n  PC 마우스 동등성과 게임 필드의 서버 동작은 변경하지 않습니다.\n- 영향 소스: ItemGesturePolicy.luau, Screen.luau, InventoryV2.spec.luau,\n  test_inventory_v2_ui.py\n- 관련 위키: inventory-item-concept@v022\n- 검증과 증거: Luau의 빠른 세로 스크롤·즉시 그림 잡기·0.4초 이후 드래그 경계, Galaxy A06와\n  iPhone 17 Pro의 카드 선택선·전체 화면 암막, iPhone 17 Pro 정사각 요약 20칸과 콘솔 오류\n  없음 확인.\n\n### PBP-RUNE-008 — 드래그 중 같은 등급 능력 칸의 실제 색 유지\n\n- 날짜: 2026-08-24\n- 도메인: 룬 보드 / 등급 가독성 / 드래그 안내\n- 변경 유형: changed\n- 이전 규칙: 룬을 들면 같은 등급의 열린 능력 아이콘은 남았지만 칸 바탕이 모두 같은 어두운\n  색으로 보여, 현재 룬 등급과 활성 영역의 관계를 색으로 읽을 수 없었습니다.\n- 새 유효 규칙: 같은 등급의 열린 능력 칸은 G0~G6의 실제 등급색과 아이콘을 함께 유지합니다.\n  유효 연결 칸은 라임색을 위에 표시하고 잠긴 칸은 경고색을 유지합니다.\n- 근거: 룬 보드의 핵심 판단은 현재 들고 있는 등급이 어떤 능력 영역을 사용할 수 있는지\n  비교하는 것이므로, 아이콘뿐 아니라 이미 학습한 등급색도 동시에 제공해야 합니다.\n- 의도한 사용자 경험: 룬을 드는 순간 같은 등급 영역을 색으로 훑고, 그중 실제로 놓을 수 있는\n  연결 칸을 라임색으로 즉시 구분합니다.\n- 범위와 제외: 룬 드래그 중 열린 능력 칸과 유효·잠금 안내에 적용합니다. 룬 생성 확률이나\n  능력 수치는 바꾸지 않습니다.\n- 영향 소스: RuneDragVisualState.luau, Screen.luau, InventoryV2.spec.luau\n- 관련 위키: inventory-item-concept@v022\n- 검증과 증거: G0 룬 드래그에서 먹빛 등급 칸 여덟 개와 라임 유효 칸 한 개를 Studio MCP로\n  확인하고, 열린·잠긴·유효 조합을 Luau와 Python 계약 검사로 확인.\n\n### PBP-MONSTER-001 — 첫 일반 몬스터의 서버 권위 상태 흐름\n\n- 날짜: 2026-08-25\n- 도메인: 몬스터 / 전투 AI / 서버 권위\n- 변경 유형: added\n- 이전 규칙: 실제로 추적하고 공격하는 공통 몬스터 런타임과 첫 기준 몬스터가 없었습니다.\n- 새 유효 규칙: 가시덩굴 화분괴물은 대기·추적·공격·귀환·죽음 상태를 사용하며 탐색, 경로,\n  공격 위치, 피해, 죽음과 정규 재생성은 서버가 결정합니다. 클라이언트는 상태를 표현만 합니다.\n- 근거: 첫 몬스터부터 피해 판정과 화면 표현을 분리해야 이후 몬스터가 늘어도 치트와\n  클라이언트 간 불일치를 막고 같은 상태 구조를 확장할 수 있습니다.\n- 의도한 사용자 경험: 몬스터가 플레이어를 안정적으로 발견하고 추적하며 공격 뒤 다시 행동하고,\n  화면과 실제 피해가 같은 사건으로 느껴집니다.\n- 범위와 제외: 첫 일반 풀속성 몬스터와 공통 상태 흐름에 적용합니다. 전리품·웨이브·보스 단계는\n  후속 범위입니다.\n- 영향 소스: monster-definitions.json, MonsterService.luau, MonsterVisualController.luau,\n  DamageResolver.luau\n- 관련 위키: grass-vine-monster@v001\n- 검증과 증거: MonsterDB 서버 권위 테스트 5개, Luau 컴파일, Studio Play 장판·분출 장면과\n  MonsterService 콘솔 오류 없음 확인.\n\n### PBP-MONSTER-002 — 2초 고정 위치 장판과 덩굴 분출\n\n- 날짜: 2026-08-25\n- 도메인: 몬스터 공격 / 회피 학습 / 전투 가독성\n- 변경 유형: added\n- 이전 규칙: 이 몬스터의 지면 공격 타이밍과 플레이어가 피할 수 있는 시각 계약이 없었습니다.\n- 새 유효 규칙: 공격 시작 순간의 플레이어 바닥 위치를 고정하고 빨간 원을 2초간 보여 준 뒤\n  같은 자리에서 덩굴을 분출합니다. 장판을 벗어나면 피하고 남아 있으면 피해와 넉백을 받습니다.\n- 근거: 피할 수 없는 추적 피해보다 원인·경고·결과가 같은 위치에 이어지는 공격이 첫 몬스터의\n  전투 학습에 적합합니다.\n- 의도한 사용자 경험: 덩굴손을 땅에 찌르는 자세와 빨간 원을 보고 즉시 이동해 분출을 피하며,\n  맞았을 때도 왜 맞았는지 이해합니다.\n- 범위와 제외: 가시덩굴 화분괴물의 목표 지점 고정 지면 공격에 적용합니다. 유도 장판이나\n  연속 다중 장판은 별도 공격 종류입니다.\n- 영향 소스: monster-definitions.json, MonsterService.luau, MonsterVisualController.luau\n- 관련 위키: grass-vine-monster@v001\n- 검증과 증거: Studio 최종 장판·분출 캡처, telegraph_duration_seconds=2 관계 검사와\n  서버 피해 경로 테스트.\n\n### PBP-MONSTERDB-001 — 몬스터 수치와 표현의 단일 편집 원본\n\n- 날짜: 2026-08-25\n- 도메인: 콘텐츠 운영 / 몬스터 밸런스 / 데이터베이스\n- 변경 유형: added\n- 이전 규칙: 몬스터의 전투·탐색·이동·표현 값을 한 곳에서 편집하고 런타임과 공개 DB를 같은\n  리비전으로 만드는 운영 경로가 없었습니다.\n- 새 유효 규칙: MonsterDB가 활성화, 정체성, 능력치, 탐색, 이동, AI, 공격, 스폰, 생명주기,\n  충돌, 표현과 애니메이션의 단일 원본입니다. 저장은 생성물을 함께 만들고 Studio 반영은\n  명시적인 굽기만 사용합니다.\n- 근거: 수치가 코드와 문서에 흩어지면 밸런스 변경이 누락되고, 웹 편집이 실행 중인 플레이를\n  자동으로 덮어쓰면 검증 경계가 사라집니다.\n- 의도한 사용자 경험: 기획자가 109개 값을 이름과 단위로 찾아 조정하고 같은 리비전의 웹·게임\n  결과를 예측 가능하게 검증합니다.\n- 범위와 제외: 몬스터 정의와 생성 런타임에 적용합니다. 전리품과 지역별 웨이브 DB는 포함하지\n  않습니다.\n- 영향 소스: monster-definitions.json, monster_db.py, monster-db.js,\n  GeneratedMonsterDefinitions.luau\n- 관련 위키: grass-vine-monster@v001, development-wiki\n- 검증과 증거: revision d0ad884e8183337d, 1개 몬스터·109개 변수 check 통과와 내장 브라우저\n  전체 편집기 경고·오류 0 확인.\n\n### PBP-DEV-002 — MonsterDB 기반 F2 선택 소환\n\n- 날짜: 2026-08-25\n- 도메인: Studio 진단 / 몬스터 검증\n- 변경 유형: added\n- 이전 규칙: 몬스터가 늘어날 때 공통 목록에서 고르고 플레이어 기준 위치에 즉시 소환하는\n  테스트 경로가 없었습니다.\n- 새 유효 규칙: F2 창은 게임 ON인 MonsterDB 항목을 자동으로 정렬해 나열하고 안정 ID로 서버에\n  요청합니다. 성공 시 캐릭터 정면 수평 10 stud에 세션 전용 몬스터를 만들며 정규 재생성은\n  하지 않습니다.\n- 근거: 몬스터마다 별도 명령어나 임시 스폰 코드를 만들면 콘텐츠가 늘수록 테스트 비용과\n  잘못된 ID·위치 입력이 함께 늘어납니다.\n- 의도한 사용자 경험: 개발자는 목록에서 이름을 보고 한 번 선택·소환해 추적과 공격을 바로\n  반복 검증합니다.\n- 범위와 제외: Roblox Studio F2 진단에만 적용하며 실제 플레이어용 UI나 배포 게임 소환\n  권한으로 노출하지 않습니다.\n- 영향 소스: DeveloperTestControls.luau, DeveloperTestWindow.luau,\n  DeveloperTestController.luau, MonsterService.luau, BackpackUIBootstrap.client.luau\n- 관련 위키: grass-vine-monster@v001\n- 검증과 증거: Studio MCP Play에서 액션 바인딩·기본 선택·서버 성공 응답,\n  SpawnSource=DeveloperF2, 거리 10.0·정면 내적 1.0 확인.\n\n### PBP-ART-004 — 최초 생성부터 실제 알파인 게임용 래스터\n\n- 날짜: 2026-08-25\n- 도메인: 아트 제작 / 이미지 자산 / 투명 배경\n- 변경 유형: added\n- 이전 규칙: 마젠타 등 키 색 배경을 가진 이미지를 만든 뒤 제거·재가공하는 공정이 게임용\n  아이콘과 애니메이션 자산 제작에 사용될 수 있었습니다.\n- 새 유효 규칙: 게임에 직접 합성할 아이콘, 캐릭터·몬스터 프레임, 스프라이트와 잘라 쓰는\n  이펙트는 최초 유효 생성부터 실제 투명 배경을 요청합니다. 크로마키 중간 이미지는 금지하고\n  알파·투명 픽셀·가장자리 오염을 검사한 뒤 승격합니다.\n- 근거: 색 키 제거는 잎·광택·외곽선 같은 유효 색을 손상시키고 키 색 후광과 불필요한 재작업을\n  만듭니다. 원천 알파는 가장 짧고 재현 가능한 제작 경로입니다.\n- 의도한 사용자 경험: 게임 안에서 캐릭터와 아이콘 가장자리가 배경색에 오염되지 않고 어떤\n  필드·UI 위에서도 깨끗하게 합성됩니다.\n- 범위와 제외: 새 게임용 래스터 자산에 적용합니다. 승인된 기존 자산은 재생성 요청 전까지\n  유지하고, 콘셉트·전체 장면·스크린샷처럼 의도적으로 불투명한 이미지는 제외합니다.\n- 영향 소스: AGENTS.md, create-2d-sprite-animation workflow, future image-generation prompts\n- 관련 위키: grass-vine-monster@v001, character-2d-rendering, inventory-item-concept\n- 검증과 증거: 가시덩굴 화분괴물의 1024×128 런타임 아틀라스 네 개 모두 hasAlpha=yes 확인.\n\n### PBP-MONSTER-003 — 한 발 도장 몬스터의 세 단계 도약 찍기\n\n- 날짜: 2026-08-25\n- 도메인: 몬스터 / 전투 가독성 / 애니메이션\n- 변경 유형: added\n- 이전 규칙: 한 발로 이동하고 높이 도약해 바닥을 찍는 몬스터의 정체성, 동작 분리와 피해\n  동기화 기준이 없었습니다.\n- 새 유효 규칙: 도장발 쿵귀는 중앙 스프링 하나와 도장처럼 넓은 발 하나만 사용합니다. 평소에는\n  같은 발로 통통 튀고, 공격은 목표 지점 고정 뒤 준비·공중·접지 세 단계로 진행합니다. 접지\n  애니메이션의 첫 충돌 프레임은 피해, 충격 이펙트와 화면 흔들림이 함께 시작되는 공통 사건입니다.\n- 근거: 두 발이나 별도 다리처럼 읽히는 실루엣은 몬스터의 핵심 개성을 흐리고, 도약·피해·효과가\n  서로 다른 시점에 나오면 플레이어가 피격 원인을 이해하기 어렵습니다.\n- 의도한 사용자 경험: 한 발로 통통 튀는 모습을 보고 몬스터를 즉시 구분하며, 크게 움츠린 뒤\n  날아오는 궤적을 읽고 착지 충격을 피합니다. 맞았을 때는 발이 닿는 순간과 피해가 정확히\n  일치한다고 느낍니다.\n- 범위와 제외: 이번 커밋은 콘셉트, Idle·HopMove·준비·공중·접지·피격·죽음·충격 아틀라스와\n  구현 인계 문서를 확정합니다. Roblox 업로드, MonsterDB 등록과 서버 공격 구현은 후속 범위입니다.\n- 영향 소스: stampfoot_leaper_anchor_v1.png, StampfootLeaper runtime atlases,\n  atlas-metadata.json, stampfoot-leaper-implementation-handoff.md\n- 관련 위키: stampfoot-leaper@v001\n- 검증과 증거: 콘셉트와 여덟 런타임 아틀라스에서 중앙 스프링 하나·발 하나를 육안 확인하고,\n  이미지 크기와 프레임 수를 메타데이터 계약과 대조했습니다.\n\n### PBP-ART-005 — 최종 런타임 자산만 Git에 보존\n\n- 날짜: 2026-08-25\n- 도메인: 아트 제작 / 저장소 운영 / 런타임 자산\n- 변경 유형: added\n- 이전 규칙: 최초 생성부터 실제 알파를 쓰는 원칙은 있었지만, 생성 과정의 원본·개별 프레임·\n  검토 이미지 중 무엇을 제품 저장소에 남길지 정한 보존 규칙은 없었습니다.\n- 새 유효 규칙: 게임에 직접 쓰는 128px 투명 아틀라스와 승인된 콘셉트만 Git에 보존합니다.\n  마젠타 원본, 개별 프레임, 고해상도 마스터, 검토용 그리드와 QA 중간물은 커밋하지 않으며,\n  프레임 수·재생 속도·방향·해시는 최종 아틀라스 옆 메타데이터에 기록합니다.\n- 근거: 중간 산출물까지 제품 저장소에 쌓이면 실제 사용 파일을 찾기 어렵고 저장소 용량과\n  잘못된 파일 업로드 위험이 함께 커집니다.\n- 의도한 사용자 경험: 개발자는 런타임 폴더에서 바로 게임에 넣을 파일만 보고 사용할 수 있으며,\n  마젠타 원본이나 검토 이미지를 실수로 배포하지 않습니다.\n- 범위와 제외: 도장발 쿵귀의 이번 자산 묶음부터 적용하며, 승인되어 이미 사용 중인 기존 자산을\n  소급 삭제하지 않습니다. 위키가 최종 동작을 설명하기 위해 복제한 같은 런타임 이미지는\n  문서 증거로 허용합니다.\n- 영향 소스: Assets/Monsters/Runtime/StampfootLeaper/, atlas-metadata.json,\n  wiki/content/media/stampfoot-leaper/v001/\n- 관련 위키: stampfoot-leaper@v001\n- 검증과 증거: 작업 공간에서 StampfootLeaper 후보·마젠타·개별 프레임 디렉터리를 제외하고,\n  최종 콘셉트 한 장과 투명 런타임 아틀라스 여덟 장만 제품 경로에 남겼습니다. Pillow 검사에서\n  실제 투명 픽셀을 확인하고 부분 알파 마젠타와 완전 투명 픽셀의 RGB 오염은 0건이었습니다.\n",
      "revisions": [
        {
          "id": "product-planning-change-log",
          "title": "제품 기획 변경 원장",
          "summary": "누적 원장을 보존하면서 한 발 도장 몬스터의 이동·도약 찍기 시각 계약과 저장소에는 실제 사용 투명 아틀라스만 남기는 리소스 보존 원칙을 추가했습니다.",
          "status": "active",
          "category": "planning",
          "tags": [
            "planning",
            "decision-log",
            "product",
            "inventory",
            "equipment",
            "rune-board",
            "weapon",
            "combat",
            "mobile",
            "documentation",
            "character",
            "animation",
            "monster",
            "monster-db",
            "transparent-background",
            "testing",
            "touch",
            "responsive"
          ],
          "created_at": "2026-08-15",
          "updated_at": "2026-08-25",
          "authors": [
            "Codex"
          ],
          "version": 15,
          "change_type": "updated",
          "change_summary": "v014까지의 누적 결정을 보존하고, 도장발 쿵귀의 한 발 정체성·세 단계 도약 찍기와 최종 런타임 이미지만 Git에 보존하는 규칙을 추가했습니다.",
          "supersedes": "product-planning-change-log@v014",
          "sources": [
            "wiki/content/pages/product-planning-change-log/v014.md",
            "wiki/content/pages/grass-vine-monster/v001.md",
            "docs/gameplay/monster-definitions.json",
            "AGENTS.md",
            "src/ServerScriptService/MonsterService.luau",
            "src/ReplicatedStorage/BackpackUI/DeveloperTestController.luau",
            "wiki/content/media/grass-vine-monster/v001/studio-attack-telegraph.jpg",
            "wiki/content/media/grass-vine-monster/v001/studio-vine-eruption.jpg",
            "wiki/content/media/grass-vine-monster/v001/studio-f2-monster-console.jpg",
            "wiki/content/media/grass-vine-monster/v001/monsterdb-editor.jpg",
            "wiki/content/pages/inventory-item-concept/v022.md",
            "docs/gameplay/inventory-item-layouts.json",
            "src/ReplicatedStorage/BackpackUI/GeneratedItemLayouts.luau",
            "src/ReplicatedStorage/InventoryV2/ItemGesturePolicy.luau",
            "src/ReplicatedStorage/InventoryV2/RuneDragVisualState.luau",
            "src/ReplicatedStorage/InventoryV2/Screen.luau",
            "tests/InventoryV2.spec.luau",
            "tests/test_inventory_v2_ui.py",
            "tests/test_item_db.py",
            "wiki/content/media/inventory-item-concept/v022/studio-default-backdrop-cards-galaxy-a06.jpg",
            "wiki/content/media/inventory-item-concept/v022/studio-selected-rotated-card-galaxy-a06.jpg",
            "wiki/content/media/inventory-item-concept/v022/studio-save-and-rune-move-popup-galaxy-a06.jpg",
            "wiki/content/media/inventory-item-concept/v022/studio-revert-and-rune-move-popup-galaxy-a06.jpg",
            "wiki/content/media/inventory-item-concept/v022/studio-rune-grade-drag-galaxy-a06.jpg",
            "wiki/content/pages/stampfoot-leaper/v001.md",
            "Assets/Monsters/Concepts/stampfoot_leaper_anchor_v1.png",
            "Assets/Monsters/Runtime/StampfootLeaper/atlas-metadata.json",
            "Assets/Monsters/Runtime/StampfootLeaper/idle-east-8x128.png",
            "Assets/Monsters/Runtime/StampfootLeaper/walk-east-8x128.png",
            "Assets/Monsters/Runtime/StampfootLeaper/attack-anticipation-east-8x128.png",
            "Assets/Monsters/Runtime/StampfootLeaper/attack-airborne-east-6x128.png",
            "Assets/Monsters/Runtime/StampfootLeaper/attack-land-east-8x128.png",
            "Assets/Monsters/Runtime/StampfootLeaper/hit-east-6x128.png",
            "Assets/Monsters/Runtime/StampfootLeaper/death-east-12x128.png",
            "Assets/Monsters/Runtime/StampfootLeaper/impact-fx-omni-8x128.png",
            "docs/gameplay/stampfoot-leaper-implementation-handoff.md"
          ],
          "related": [
            "grass-vine-monster",
            "stampfoot-leaper",
            "weapon-combat-presentation",
            "inventory-item-concept",
            "synergy-icon-system",
            "backpack-combat-stat-database",
            "development-wiki",
            "character-2d-rendering",
            "project-overview"
          ],
          "validation": [
            "sips: 콘셉트와 런타임 아틀라스 8장 모두 hasAlpha=yes",
            "Pillow RGBA 검사: 실제 투명 픽셀 존재, partial-alpha magenta 0, zero-alpha RGB contamination 0",
            "python3 tools/wiki.py check: 12 pages, 75 revisions, 117 media files 통과",
            "커밋 후보 스냅샷에서 python3 -m unittest tests/test_wiki.py: 18 tests 통과",
            "python3 -m unittest tests.test_repository_policy: 1 test 통과",
            "git diff --check 통과"
          ],
          "body": "# 제품 기획 변경 원장\n\n## 목적과 기록 원칙\n\n이 페이지는 구현 파일 목록이 아니라 ProjectBackpack의 제품 방향이 왜 바뀌었고 지금 어떤\n규칙이 유효한지를 누적 보존합니다. 플레이어 또는 운영자가 경험하는 제품·게임플레이·UX·\n콘텐츠·아트·플랫폼 규칙이 추가, 변경, 대체 또는 폐기될 때 기록합니다. 동작을 바꾸지 않는\n내부 리팩터링은 원장 대상이 아닙니다.\n\n각 결정은 안정적인 ID를 가집니다. 이후 규칙이 달라지면 이미 커밋된 항목을 고치거나 지우지\n않고 새 버전에 후속 항목을 추가해 이전 ID와 관계를 명시합니다. 최신 버전은 과거 원장과\n현재 유효 규칙을 모두 포함하며, 실제 제품 변경·주제별 위키·검증 증거와 같은 커밋에서\n발행합니다.\n\n## 현재 유효 규칙\n\n### PBP-INV-001 — 인벤토리에는 명확한 이탈과 호환 토글이 있다\n\n모바일 인벤토리는 우측 최상단 닫기 버튼으로 메인 화면에 복귀합니다. PC 호환 경로의 Tab\n토글은 진단 호환으로 남지만 현재 제품 UI 완료 기준은 모바일입니다.\n\n### PBP-ITEMDB-002 — 최종 48종이 ItemDB와 런타임의 단일 활성 집합이다\n\n과거 90종과 특수 아이템 미디어는 활성 원본·공개 DB·생성 런타임에서 제거합니다. 무기 14종과\n방어구·장신구 34종의 이름, 사각 점유, 카툰 아이콘과 Roblox 자산 참조를 ItemDB 원본에서\n생성하며 ON/OFF 경계는 향후 콘텐츠 운영을 위해 유지합니다.\n\n### PBP-ITEMDB-003 — ItemDB 원화 배치는 모든 장비 화면의 단일 시각 기준이다\n\n웹 ItemDB에서 확정한 그림 배율, X/Y 중심 보정과 기본 회전을 보관 카드·배치판·드래그 그림이\n같이 사용합니다. 보관 카드에는 회전된 실제 점유 칸을 그림 아래에 표시하며, ItemDB를 바꾸면\n공개 DB와 생성 런타임을 같은 리비전으로 다시 만들고 Studio에서 함께 확인합니다.\n\n### PBP-CONTENT-001 — 폐기 아이템은 모든 제품 표면에서 함께 제거한다\n\n아이템을 실제로 폐기할 때는 카탈로그·레이아웃·이미지·런타임·공개 DB에서 함께 제거하고\n매니페스트 이력만 보존합니다.\n\n### PBP-DOC-001 — 기획 변경은 커밋 시 누적 원장으로 발행한다\n\n물질적인 제품 기획 변경은 사용자 승인 커밋에서 안정적인 ID와 함께 누적 발행합니다.\n\n### PBP-ACTION-002 — Dash는 3단계 자세와 이동 구간 잔상을 사용한다\n\n기본 Dash의 방향 잠금·0.30초·20스터드 규칙은 유지하되, 시작 프레임 고정은 예비 0.05초·\n이동 0.20초·회복 0.05초의 통짜 캐릭터 자세로 대체합니다. 잔상은 이동 구간에서만 실제\n경로 뒤에 생기고 회복 구간에서 본체로 수렴합니다. 룬의 추가 거리와 무적시간은 기존 한도\n안에서 별도 적용합니다.\n\n### PBP-ART-003 — 정지 캐릭터는 발이 고정된 좌우 호흡을 사용한다\n\nIdle은 마지막 좌우 방향을 유지하는 8프레임 6fps 통짜 캐릭터 애니메이션입니다. 발과 골반\n아래는 고정하고 상체의 들숨·날숨만 움직이며, 캐릭터 전체를 균일 확대·축소하지 않습니다.\n\n### PBP-INV-010 — 장비 배치는 전체 초안으로 검토하고 원자 저장한다\n\n아이템 추가·이동·회전·보관은 마지막 저장 상태와 분리된 전체 초안을 갱신합니다. 겹친 장비는\n가장 가까운 빈자리로 밀어 전체 결과를 미리 보여 주며, 잠금·한도·무게 등 잘못된 상태는 빨간\n초안으로 남기되 저장을 끕니다. 서버는 전체 좌표를 다시 검증해 모두 유효할 때만 한 번에\n교체하고 되돌리기는 마지막 저장 상태를 복원합니다.\n\n### PBP-UI-004 — 모바일 장비 조작은 선택·길게 누르기·세로 보관함을 사용한다\n\n짧은 탭은 선택만 하고 선택된 아이템에 회전 버튼을 노출합니다. 움직이지 않은 길게 누르기는\n룬 페이지와 상세 정보 메뉴를 열며, 움직임이 생기면 스크롤 또는 드래그로 전환합니다. 보관함은\n세로 다열 그리드이고 실제 아이템 그림과 점유 가이드는 같은 스냅 위치를 사용합니다.\n\n### PBP-INV-011 — 장착 요약은 배치 순서와 부위 상태를 즉시 관리한다\n\n유효하게 배치된 무기는 장착판에 들어온 순서를 보존해 왼쪽부터 최대 여섯 칸에 표시합니다.\n무기가 아닌 장비는 머리·귀걸이·목걸이·상의·장갑·하의·벨트·반지 둘·신발의 열 칸에\n표시합니다. 채워진 요약 칸은 아이템 이름·등급·공격력·공격 속도와 상세 정보, 룬 보드 편집,\n보관함으로 이동의 세 작업을 같은 문맥에서 제공합니다.\n\n### PBP-INV-012 — 배치 변경 상태에서도 한 번의 선택으로 룬 보드에 이동한다\n\n룬 보드 편집을 누를 때 장비 초안이 정상이라면 `저장하고 이동하기`, 정상이 아니라면\n`배치를 되돌리고 이동하기`를 보여 줍니다. 두 경우 모두 `배치로 돌아가기`로 취소할 수 있고,\n서버 저장 성공 또는 마지막 저장 상태 복원 뒤 처음 선택한 아이템의 룬 보드로 바로 이동합니다.\n\n### PBP-UI-005 — 모바일 장비 화면은 배치판 중심의 안정적인 작업대다\n\n가운데 배치판, 아래 여섯 무기, 오른쪽 도구와 부위별 장비를 한 화면에 둡니다. 요약 칸은\n해상도에 맞춰 정사각형으로 축소되고 자체 스크롤을 만들지 않으며, 저장·되돌리기는 화면 위에\n떠서 다른 영역을 줄이지 않습니다. 확대판은 보이는 스크롤바 없이 직접 끌어 움직입니다.\n배치 아이템 위의 움직임은 0.3초 이내면 확대판 이동, 0.3초 이상 1초 미만이면 아이템 이동으로\n판정하고, 1초 동안 정지했을 때만 메뉴 게이지를 시작합니다. 보관함 드래그가 확정되면 보관함\n스크롤을 잠그며 아이템 그림은 손가락 위로 34px만 띄웁니다.\n\n### PBP-UI-006 — 보관함은 터치 영역별 의도를 보존하고 인벤토리는 기기 전체에 집중층을 둔다\n\n아이템 그림에서 8px 이상 움직이면 즉시 장비를 들고, 카드 여백과 카드 사이의 0.4초 이내\n세로 움직임은 목록을 스크롤합니다. 0.4초 이내 가로 이탈은 취소하고 0.4초 이상 누른 뒤\n움직이면 카드 어디서든 장비를 듭니다. 모든 기본 카드 외곽선은 얇은 중립색이고 선택 카드만\n안쪽 라임색 선으로 구분합니다. 인벤토리 본체는 모바일 안전 영역을 유지하되 별도 짙은 배경이\n기기 전체를 덮어 필드 노출과 뒤쪽 입력을 막습니다.\n\n### PBP-DOC-002 — 커밋 위키는 비개발자 기획 서사와 충분한 화면 증거를 요구한다\n\n위키는 무엇이·왜·어떻게 달라졌는지와 사용자 경험을 먼저 설명하고 구현 세부는 뒤의 증거로\n둡니다. 눈에 보이는 변화는 기능을 이해하는 데 필요한 기본·선택·확장·성공·실패 상태를 실제\nStudio 또는 브라우저에서 캡처하며, 이미 커밋된 버전과 증거는 덮어쓰지 않습니다.\n\n### PBP-DEV-001 — Studio 무게 제한 테스트는 세션 전용이다\n\n기존 Studio 진단값은 영구 저장을 오염시키지 않습니다. 새 인벤토리 구현에서 무게 시스템을\n유지할지는 별도 결정하지만 진단 데이터 비영구 원칙은 유지합니다.\n\n### PBP-INV-009 — 메인 인벤토리는 사각 장착판과 부위별 제한을 사용한다\n\n유효한 사각 배치가 곧 장착입니다. 무기는 여섯 개, 반지는 두 개이며 같은 정의의 무기·반지는\n중복할 수 없습니다. 머리·귀걸이·목걸이·상의·하의·글러브·신발·벨트는 한 개씩 장착하고\n디아블로식 장비 화면은 같은 상태를 투영합니다.\n\n### PBP-SYNERGY-001 — 가방·시너지 제품 방향은 폐기한다\n\n가방 활성 칸, 육각 메인 인벤토리, 26종 시너지, 시너지 필터와 A/B/C 공간 접촉 효과는 새\n제품 방향에서 사용하지 않습니다. 육각형은 아이템별 룬 보드에만 사용합니다.\n\n### PBP-CONTENT-003 — 알파 장비 활성 집합은 48종이다\n\n무기 14종과 방어구·장신구 34종을 사용합니다. 크기별 두 역할을 두고 반지는 동일 아이템\n중복 금지로 인한 강제 조합을 피하기 위해 네 종류를 둡니다. 특수 아이템과 방패는 현재 48종에\n포함하지 않습니다.\n\n### PBP-RUNE-004 — 아이템마다 후보 10개 중 하나인 427칸 보드를 가진다\n\n각 아이템 정의는 61칸 영역 일곱 개, 총 427칸인 후보 보드 10개를 가집니다. 생성 시 하나를\n균등 선택해 VariantId와 Seed를 영구 저장합니다. 0~6 주등급은 영역을 하나씩 열고, 일곱\n중앙 시작점의 색 등록과 한 칸 간격 연결을 사용합니다. 능력 등급 총량은\n30·45·54·60·67·90·81칸이며 레어는 황금 테두리로 구분합니다.\n\n### PBP-COMBAT-001 — 자동 스킬·방어·확률에는 명시적 캡이 있다\n\n무기 스킬은 해당 무기의 기본 공격 횟수로 자동 발동하고 발사체·도탄·관통·다른 스킬은\n카운터를 늘리지 않습니다. 방패 막기는 최대 100%에서 방어력을 두 배로 적용하고, 방어력\n계산 뒤 최종 피해감소는 최대 50%입니다. 행동 빈도·확률·무적·발사체 수에는 항목별 캡을\n적용하되 선형 공격력·체력 성장은 허용합니다.\n\n### PBP-COMBAT-003 — 여섯 무기는 근접 할로에서 하나의 최근접 적을 정확히 겨눈다\n\n최대 여섯 장착 무기는 머리 가까운 좁은 타원의 왼쪽 세 개·오른쪽 세 개에 같은 간격으로\n배치하며 정중앙 위·아래는 비웁니다. 적이 없을 때는 원화 방향을 유지한 채 각자 부유합니다.\n적이 있으면 장착 집합이 사거리 안의 가장 가까운 생존 적 하나를 공통 후보로 고르고, 각 무기는\n자기 사거리 안에서 실제 칼끝·타격점·총구·화살·볼트 발사 방향을 그 적에게 맞춥니다. 오른쪽을\n기본 방향으로 그린 원거리 무기가 왼쪽을 볼 때는 거꾸로 돌리지 않고 수평 반전하며 회전축과\n공격 소켓도 함께 반전합니다. 서버 권위 표적·피해와 여섯 공격 계열은 유지합니다.\n\n### PBP-RUNE-003 — 알파 무기 14종은 고정된 능력 정체성을 가진다\n\n검·창·곡궁·석궁·총·메이스·도끼 각 두 종류는 A1~D2와 E1~E3의 실제 구현 훅을 가집니다.\n목걸이·반지·귀걸이는 호환 무기 전체에 적용되는 전역 레어를, 신발은 추가 대시 레어를\n제공합니다.\n\n### PBP-RUNE-005 — 룬은 34종 도형과 effect 기반 아이콘을 사용한다\n\n1~5칸 룬은 회전·반전을 동일시한 34종 자유 폴리헥스를 사용합니다. 일곱 색은 같은 중립 원화를\n틴트하고, 능력 의미는 실제 전투 effect_id와 1:1인 62종 중앙 아이콘으로 별도 합성합니다.\n드래그는 잡은 칸과 실제 형태를 유지하고 마지막 스냅 가이드를 서버 요청값으로 사용합니다.\n\n### PBP-RUNE-006 — 룬 등급·색·시작점은 일대일이며 배치는 회전만 사용한다\n\nG0~G6 룬은 먹빛·상아·초록·하늘·보라·황금·장미와 일대일입니다. 각 룬은 같은 번호 영역의\n중앙 시작점에서만 처음 등록하고 아이템 등급보다 높은 룬은 등록할 수 없습니다. 런타임 배치는\n60° 회전만 제공하고 별도 반전은 제공하지 않습니다. 첫 배치 전에는 중앙 한 칸, 이후에는 같은\n색 네트워크에서 한 칸 떨어진 연결 전선만 밝게 안내합니다.\n\n### PBP-UI-001 — 인벤토리와 룬 보드는 모바일 고정 작업 흐름을 공유한다\n\n상단 상태, 중앙 작업판, 하단 보관함을 안전 영역 안에 고정합니다. 아이템·룬 합성은 두 재료와\n결과 미리보기 문법을 공유하고 룬 보관함은 상하 스크롤을 사용합니다. 빈 룬 칸의 탭은 상단\n중앙에 능력 정보를 표시합니다.\n\n### PBP-UI-002 — 룬 보드는 문맥을 보존하고 필터는 카드 공간을 침범하지 않는다\n\n장착 룬 회전은 마지막 선택 룬에만 적용하고 확대·축소는 보고 있던 보드 위치를 보존합니다.\n룬 보관함은 `색상 필터`와 `칸 수 필터` 두 버튼만 한 줄에 두며, 보드 위 말풍선에서 G0~G6와\n1~5칸을 각각 다중 선택합니다. 능력 설명은 색상명을 반복하지 않고 옅은 황금색 글자·짙은\n보라색 외곽선으로 등급·능력명·수치를 표시합니다.\n\n### PBP-RUNE-007 — 룬 배치는 전체 초안으로 편집하고 원자적으로 저장한다\n\n룬 추가·이동·회전·회수는 마지막 저장 상태와 분리된 전체 초안을 갱신합니다. 규칙에 어긋난\n룬도 빨간 상태로 계속 편집할 수 있지만 저장은 비활성화됩니다. 서버는 전체 배치를 다시\n검증해 유효할 때만 한 번에 교체하며, 되돌리기는 마지막 저장 상태를 복원합니다. 같은 색\n네트워크는 변을 맞대지 않고 정확히 한 칸 간격을 두며 배치 순서와 무관하게 판정합니다.\n\n### PBP-RUNE-008 — 룬 드래그는 같은 등급의 열린 능력 칸을 실제 등급색으로 보여 준다\n\n룬을 들면 같은 등급의 열린 능력 칸과 아이콘을 G0~G6의 먹빛·상아·초록·하늘·보라·황금·\n장미색으로 표시합니다. 유효 연결 칸의 라임색은 등급색보다 위에 보이고, 잠긴 영역은 같은\n등급처럼 보이지 않게 경고색을 유지합니다.\n\n### PBP-UI-003 — 룬 보드는 현재 조작 문맥과 잠금 이유를 한 화면에 보여 준다\n\n보관 카드와 배치 룬을 모두 선택·60° 회전할 수 있고, 배치 룬은 이동하거나 보관함으로 회수할\n수 있습니다. 가이드는 현재 잡은 셀·회전·전체 배치를 기준으로 계산하며 유효 칸은 라임색,\n아이템 등급으로 닫힌 칸은 탁한 적갈색, 무효 초안은 빨간색으로 표시합니다. 기존 배치와 같은\n색 능력 아이콘은 드래그 중에도 남깁니다. 벌집은 틈 없는 얇은 선, 룬은 색이 비치는 투명\n크리스털 프레임을 사용하고, 전체 필터는 일부 OFF면 모두 ON·모두 ON이면 모두 OFF로\n동작합니다. 룬 각인 효과 탭은 유효 노드를 효과별로 합산합니다.\n\n### PBP-COMBAT-004 — 인벤토리 작업 중 필드 공격 연출을 일시 정지한다\n\n인벤토리나 룬 작업 화면이 열리면 클라이언트 공격 연출을 즉시 지우고 새 연출을 받지 않으며\n전투 VFX 오버레이를 끕니다. 화면을 닫으면 표현만 다시 허용합니다. 서버 표적·공격·피해와\n장착 상태는 바꾸지 않습니다.\n\n### PBP-ART-002 — 아이템은 사각 점유와 모바일 전투에 맞는 카툰 실루엣을 사용한다\n\n최종 48종 원화는 굵고 밝은 카툰풍으로 통일합니다. 근접 무기는 위쪽, 활·석궁·총은 오른쪽을\n기본 방향으로 두고 발사체와 궤적을 원화에 굽지 않습니다. 그림의 질량과 돌출부가 사각 점유\n형태에 자연스럽게 맞아야 합니다.\n\n### PBP-MONSTER-001 — 첫 일반 몬스터는 서버 권위 상태 흐름을 사용한다\n\n가시덩굴 화분괴물은 대기·추적·공격·귀환·죽음 상태를 가지며 탐색, 이동, 공격 위치, 피해와\n재생성은 서버가 결정합니다. 클라이언트는 복제된 상태와 시간을 읽어 좌·우 스프라이트와\n효과만 표시합니다.\n\n### PBP-MONSTER-002 — 빨간 장판은 위치를 고정하고 2초 뒤 분출한다\n\n공격 시작 순간의 플레이어 바닥 위치를 고정해 빨간 원을 2초간 보여 준 뒤 같은 자리에서\n덩굴을 솟구치게 합니다. 플레이어가 장판 밖으로 움직이면 피하고, 남아 있으면 피해와 넉백을\n받습니다.\n\n### PBP-MONSTERDB-001 — MonsterDB가 몬스터 조정값의 단일 원본이다\n\n활성화, 정체성, 전투 능력치, 탐색, 경로, AI, 공격, 스폰, 생명주기, 충돌, 표현과 애니메이션을\n한 원본에서 편집합니다. 저장은 웹과 Roblox 생성 정의를 함께 갱신하며 열린 Studio 반영은\n명시적 굽기만 허용합니다.\n\n### PBP-DEV-002 — F2는 MonsterDB 목록에서 선택해 정면 10 stud에 소환한다\n\nStudio 전용 F2 도구는 게임 ON 몬스터를 자동으로 나열하고 선택한 안정 ID를 서버에 보냅니다.\n서버 검증을 통과하면 캐릭터가 보는 수평 방향 10 stud에 세션 전용 몬스터를 만들며, 이 소환은\n정규 스폰 수와 재생성을 오염시키지 않습니다.\n\n### PBP-ART-004 — 게임용 래스터는 첫 생성부터 실제 알파 배경을 사용한다\n\n아이콘, 캐릭터·몬스터 애니메이션, 스프라이트와 잘라 쓰는 이펙트는 최초 유효 출력부터\n투명 배경이어야 합니다. 마젠타·초록 키 배경을 만들고 제거하는 공정은 폐기하며, 알파 채널과\n실제 투명 픽셀, 가장자리 키 색 번짐·후광 부재를 확인한 뒤 승격합니다. 의도적으로 불투명한\n콘셉트와 전체 장면 이미지는 제외합니다.\n\n### PBP-MONSTER-003 — 한 발 도장 몬스터는 준비·공중·접지로 공격을 나눈다\n\n도장발 쿵귀는 중앙 스프링 하나와 도장처럼 넓은 발 하나만 가진 정체성을 유지합니다. 평소에는\n그 한 발로 통통 튀며 이동하고, 공격할 때는 목표 지점을 고정한 뒤 움츠리기·포물선 도약·접지\n충격의 세 단계로 나눕니다. 접지 프레임을 피해·화면 흔들림·충격 이펙트가 만나는 공통 사건으로\n사용합니다.\n\n### PBP-ART-005 — 저장소에는 최종 런타임 투명 이미지만 보존한다\n\n게임에 실제로 넣을 128px 투명 아틀라스와 승인된 콘셉트만 Git에 보존합니다. 마젠타 원본,\n개별 프레임, 고해상도 마스터, 검토용 그리드와 QA 중간물은 커밋하지 않습니다. 런타임 파일의\n프레임 수·재생 속도·방향·해시는 함께 보존한 메타데이터로 추적합니다.\n\n## 변경 원장\n\n### PBP-INV-001 — 인벤토리 이탈과 Tab 토글\n\n- 날짜: 2026-08-15\n- 도메인: 인벤토리 접근성 / 플랫폼 입력\n- 변경 유형: changed\n- 이전 규칙: 화면 내부 닫기 버튼과 명확한 PC 토글 경로가 없었습니다.\n- 새 유효 규칙: 모바일 우측 최상단 닫기 버튼을 두고 PC 호환 시 Tab을 인벤토리 전용\n  토글로 사용하며 기본 플레이어 목록을 해제합니다.\n- 근거: 작업 화면에는 안전한 이탈 경로가 필요하며 한 입력이 두 UI를 열면 안 됩니다.\n- 의도한 사용자 경험: 닫는 법을 탐색하지 않고 즉시 메인 화면으로 돌아갑니다.\n- 범위와 제외: 모바일 터치와 PC 입력 호환에 적용하며 PC 레이아웃 품질은 제외합니다.\n- 영향 소스: Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: Luau 테스트, 소스 검사와 최종 Studio 모바일 화면.\n\n### PBP-INV-002 — 배치 보드 범위와 도구 배치\n\n- 날짜: 2026-08-15\n- 도메인: 모바일 배치 보드 / 공간 가독성\n- 변경 유형: changed\n- 이전 규칙: 빈 배치 영역과 우측 도구의 공간 관계가 충분히 드러나지 않았습니다.\n- 새 유효 규칙: 전체 배치 영역에 옅은 육각 격자를 그리고 우측 상단 모드 탭과 우측 하단\n  확대 도구를 위한 반응형 인셋을 둡니다.\n- 근거: 빈 공간도 게임 공간이며 조작 계층과 동시에 보여야 합니다.\n- 의도한 사용자 경험: 배치 가능 범위와 도구 위치를 즉시 이해합니다.\n- 범위와 제외: 모바일 보드와 모드·확대 도구에 적용합니다.\n- 영향 소스: VisualTokens.luau, ScreenRenderer.luau, ScreenState.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: iPhone 17 Pro와 Galaxy A06 Studio Play의 잘림·겹침 검사.\n\n### PBP-INV-003 — 손가락 위 드래그와 단일 목적지 안내\n\n- 날짜: 2026-08-15\n- 도메인: 인벤토리 드래그 / 배치 피드백\n- 변경 유형: changed\n- 이전 규칙: 아이템이 포인터 아래에 남고 여러 강조가 목표 칸과 경쟁했습니다.\n- 새 유효 규칙: 회전된 그림 전체를 포인터 위로 올리고 그림과 목적지 외곽선만 표시합니다.\n- 근거: 드래그 중에는 대상과 내려놓을 위치가 가장 강하게 읽혀야 합니다.\n- 의도한 사용자 경험: 손가락에 가리지 않은 그림으로 정확히 조준합니다.\n- 범위와 제외: 아이템 드래그에 적용하며 그림이 없는 가방은 점유 형태를 사용합니다.\n- 영향 소스: DragPlacementState.luau, Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 포인터 리프트·잡은 칸·outline-only Luau 테스트.\n\n### PBP-INV-004 — 카드·선택 정보와 0.1Kg 정밀도\n\n- 날짜: 2026-08-15\n- 도메인: 아이템 정보 구조 / 무게 규칙\n- 변경 유형: changed\n- 이전 규칙: 무게 표현과 시너지 정렬이 좁은 카드에서 일관되지 않았습니다.\n- 새 유효 규칙: x.xKg 표시와 0.1Kg 판정을 통일하고 시너지를 카드 가운데 정렬합니다.\n- 근거: 화면 표시와 게임 판정은 같은 값을 사용해야 합니다.\n- 의도한 사용자 경험: 좁은 카드에서 핵심 정보와 초과 이유를 빠르게 이해합니다.\n- 범위와 제외: 저장 카드, 선택 정보, 합계와 허용 판정에 적용합니다.\n- 영향 소스: WeightEvaluator.luau, ItemInstanceHydrator.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013, backpack-combat-stat-database\n- 검증과 증거: 무게 양자화·형식·허용 판정 테스트와 카드 소스 검사.\n\n### PBP-INV-005 — 필터와 배치 모드의 직접 연결\n\n- 날짜: 2026-08-15\n- 도메인: 보관함 탐색 / 모드 전환\n- 변경 유형: changed\n- 이전 규칙: 종류 필터와 배치 탭을 따로 바꿔야 했습니다.\n- 새 유효 규칙: 가방 필터는 가방 배치로, 다른 필터는 아이템 배치와 해당 종류로 이동합니다.\n- 근거: 보관함 종류 선택은 다음 배치 대상의 선택입니다.\n- 의도한 사용자 경험: 한 번의 터치로 원하는 목록과 배치 모드에 도달합니다.\n- 범위와 제외: 일반 종류 필터 다섯 개와 배치 모드 연동에 적용합니다.\n- 영향 소스: ScreenState.luau, Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 모드별 필터 상태 Luau 테스트.\n\n### PBP-INV-006 — 시너지·칸 수 고급 필터\n\n- 날짜: 2026-08-15\n- 도메인: 보관함 고급 탐색 / 모바일 UI\n- 변경 유형: added\n- 이전 규칙: 종류 외의 시너지와 점유 칸 범위를 직접 좁힐 수 없었습니다.\n- 새 유효 규칙: 별도 고급 필터에서 26종 시너지 토글과 1~9 칸 범위를 설정합니다.\n- 근거: 조합과 공간 효율은 종류와 독립적인 탐색 기준입니다.\n- 의도한 사용자 경험: 조합과 크기에 맞는 아이템을 빠르게 좁힙니다.\n- 범위와 제외: 가방과 아이템 칸 범위, 아이템의 하나 이상 시너지 일치에 적용합니다.\n- 영향 소스: ScreenState.luau, Screen.luau, ScreenRenderer.luau, VisualTokens.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 사용자 기획 이미지, Studio 캡처와 두 모바일 화면 테스트.\n\n### PBP-ART-001 — 시너지 아이콘 소형 가독성 규칙\n\n- 날짜: 2026-08-15\n- 도메인: 모바일 UI 아트 방향 / 인벤토리 시너지\n- 변경 유형: changed\n- 이전 규칙: 큰 합본을 축소해 실제 카드 크기에서 세부가 합쳐졌습니다.\n- 새 유효 규칙: 약 25px를 승인 기준으로 대표 심볼·투명 배경·최대 3색·216px 경계를\n  사용합니다.\n- 근거: 작은 화면에서 시너지를 구분하는 속도가 우선입니다.\n- 의도한 사용자 경험: 짧게 훑어도 형태와 대표색으로 시너지를 구분합니다.\n- 범위와 제외: 활성 26종 이미지와 재생성 계약에 적용하며 의미와 효과는 바꾸지 않습니다.\n- 영향 소스: Assets/UI/Backpack/SynergyIcons, SynergyCatalog.luau\n- 관련 위키: synergy-icon-system@v001, inventory-item-concept\n- 검증과 증거: 두 Studio 모바일 화면, 26개 자산과 전용 이미지 테스트.\n\n### PBP-CONTENT-001 — FootprintExpansion21 활성 집합 정리\n\n- 날짜: 2026-08-15\n- 도메인: 아이템 콘텐츠 / 공개 데이터\n- 변경 유형: retired\n- 이전 규칙: 확장 시안 21개가 모두 활성 후보로 남았습니다.\n- 새 유효 규칙: 11개만 활성화하고 10개는 제품 데이터와 미디어에서 제거합니다.\n- 근거: 폐기 시안이 남으면 현재 지원 범위를 잘못 전달합니다.\n- 의도한 사용자 경험: 실제 지원하는 아이템만 게임과 공개 DB에서 확인합니다.\n- 범위와 제외: 해당 10개 아이콘·레이아웃·참조를 제거하고 매니페스트 이력은 보존합니다.\n- 영향 소스: FootprintExpansion21, ItemDB 카탈로그·레이아웃·생성 산출물\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: ItemDB 90개 build/check와 생성 산출물 검사.\n\n### PBP-DOC-001 — 누적 제품 기획 변경 원장\n\n- 날짜: 2026-08-15\n- 도메인: 개발 문서 운영\n- 변경 유형: added\n- 이전 규칙: 기획 규칙의 변경을 한곳에서 계속 추적하는 누적 원장이 없었습니다.\n- 새 유효 규칙: 사용자 승인 커밋마다 물질적 변경을 안정적인 ID와 함께 누적합니다.\n- 근거: 구현이 개선돼도 최종 규칙과 변경 이유가 사라지지 않아야 합니다.\n- 의도한 사용자 경험: 위키 한 페이지에서 현재 규칙과 과거 이유를 연속 확인합니다.\n- 범위와 제외: 제품·게임플레이·UX·콘텐츠·아트·플랫폼·운영에 적용하며 순수 리팩터링은\n  제외합니다.\n- 영향 소스: AGENTS.md, wiki/content/pages/product-planning-change-log\n- 관련 위키: inventory-item-concept, development-wiki\n- 검증과 증거: 위키 빌드·체크·정책 테스트와 동일 커밋 발행.\n\n### PBP-ITEMDB-001 — ItemDB ON/OFF 베이크 경계\n\n- 날짜: 2026-08-16\n- 도메인: 아이템 운영 / 게임 배포\n- 변경 유형: added\n- 이전 규칙: ItemDB에 존재하는 모든 아이템이 항상 생성 런타임과 게임 베이크에 포함됐습니다.\n- 새 유효 규칙: 각 아이템은 ON/OFF 상태를 가지며 OFF는 웹 기획 기록에는 남고 다음 베이크와\n  생성 런타임에서는 제외됩니다. ON 복귀 시 기존 형태·이미지·시너지·효과 설정을 유지합니다.\n- 근거: 일시 제외와 영구 폐기를 구분해야 콘텐츠 실험과 롤백이 데이터 삭제 없이 가능합니다.\n- 의도한 사용자 경험: 운영자는 한 번의 버튼으로 게임 노출을 제어하고 플레이어는 승인된\n  활성 아이템만 만납니다.\n- 범위와 제외: ItemDB 웹 편집, 생성 레이아웃, 게임 카탈로그와 Studio 베이크에 적용합니다.\n  OFF 항목의 원본·웹 검색·이미지는 삭제하지 않습니다.\n- 영향 소스: inventory-item-layouts.json, tools/item_db.py, GeneratedItemLayouts.luau,\n  ItemCatalog.luau, wiki/site/app.js\n- 관련 위키: inventory-item-concept@v014\n- 검증과 증거: 390×844 ON 행 캡처, OFF 생성 제외 테스트, ItemDB 90개 정합성 검사.\n\n### PBP-EFFECT-001 — A·B·C 공간 접촉 효과 영역\n\n- 날짜: 2026-08-16\n- 도메인: 아이템 조합 / 공간 효과 / ItemDB 저작\n- 변경 유형: added\n- 이전 규칙: 아이템은 자기 능력치와 점유 형태만 가졌고 주변 아이템 접촉을 표현하는\n  저작 계약이 없었습니다.\n- 새 유효 규칙: 아이템당 A·B·C 최대 세 효과 슬롯을 두고 점유 경계 바깥 Q/R 다섯 칸까지\n  직접 효과 칸을 선택합니다. 각 슬롯은 종류·조건·능력 ID를 가지며 공간 접촉 판정과 실제\n  능력 실행은 분리합니다.\n- 근거: 가방 배치의 공간 관계를 조합 빌드로 확장하되 전투 규칙이 배치 기하에 결합되지\n  않아야 합니다.\n- 의도한 사용자 경험: 플레이어는 아이템을 어디에 놓고 무엇과 맞닿게 하는지로 추가 효과를\n  설계하고, 운영자는 같은 육각 편집 방식으로 규칙을 시각적으로 저작합니다.\n- 범위와 제외: 효과 칸 데이터, 카탈로그 ID, 회전 접촉 후보 평가까지 포함합니다. 조건 논리,\n  능력치 합산, 전투 발현과 시각 효과는 후속 범위입니다.\n- 영향 소스: item-effect-catalog.json, item-effect-slots.md, inventory-item-layouts.json,\n  GeneratedItemLayouts.luau, ItemEffectContactEvaluator.luau, ItemInstanceHydrator.luau,\n  wiki/site/app.js, wiki/site/item-db.js\n- 관련 위키: inventory-item-concept@v014, backpack-combat-stat-database\n- 검증과 증거: 390×844 A/B/C 편집 캡처, 효과 좌표·카탈로그·회전 접촉·드래그 비활성 테스트,\n  Studio의 동일 리비전 90개 레이아웃과 EffectCatalog 확인.\n\n### PBP-ITEMDB-002 — ItemDB 칸 수·시너지·게임 ON 복합 필터\n\n- 날짜: 2026-08-18\n- 도메인: ItemDB 운영 / 웹 탐색\n- 변경 유형: added\n- 이전 규칙: ItemDB는 이름과 대분류만 좁힐 수 있어 점유 크기·시너지·실제 게임 포함\n  집합을 따로 확인해야 했습니다.\n- 새 유효 규칙: 최소·최대 칸 수, 여러 시너지의 OR, 전체/게임 ON 상태를 검색·대분류와\n  AND로 조합하며 스크롤과 효과 카탈로그 접힘 상태를 재렌더링 뒤에도 유지합니다.\n- 근거: 전체 기획 목록과 현재 게임 집합을 한 화면에서 빠르게 비교해야 합니다.\n- 의도한 사용자 경험: “게임에 들어가는 2~4칸 기계 또는 원거리 아이템”을 그대로 필터로\n  표현하고 실제 아이콘으로 결과를 빠르게 훑습니다.\n- 범위와 제외: 공개·로컬 ItemDB 탐색과 시너지 미디어에 적용합니다. 게임 안의 보관함\n  고급 필터 상태와는 별도입니다.\n- 영향 소스: tools/item_db.py, wiki/site/app.js, wiki/site/app.css, wiki/site/item-db-data.js,\n  wiki/site/synergy-media\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: 1440×900 복합 필터 캡처, 8개 ON 결과, 26/26 이미지 로드,\n  catalogOpen=false·scrollY=188 유지, 브라우저 콘솔 오류·경고 0건.\n\n### PBP-INV-007 — 최대 6개 장착 무기와 필드 표시\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 장착 / 필드 가독성\n- 변경 유형: added\n- 이전 규칙: 유효하게 배치된 무기는 보드 안에서만 보였고 장착 목록·한도·필드 표시 계약이\n  없었습니다.\n- 새 유효 규칙: 유효한 Weapon은 최초 배치 순서대로 최대 6개까지 장착되고 2×3 장착 탭,\n  상세 정보·빼기, 모든 캐릭터 위의 방향 반응 이미지로 표시됩니다.\n- 근거: 공간 배치 결과가 실제 플레이 장비로 읽혀야 인벤토리 퍼즐과 전투 준비가 연결됩니다.\n- 의도한 사용자 경험: 여섯 슬롯에서 장착 상태를 관리하고 필드에서 자신의 빌드를 즉시\n  알아봅니다.\n- 범위와 제외: 장착 상태·관리·이미지 표시에 적용합니다. 실제 공격 실행과 무기 모델은\n  후속 범위입니다.\n- 영향 소스: EquippedItemModel.luau, InventoryBoardModel.luau, InventorySerializer.luau,\n  Screen.luau, ScreenRenderer.luau, InventoryService.luau, EquippedWeaponBillboard.luau,\n  CharacterController.luau, DirectionResolver.luau\n- 관련 위키: inventory-item-concept@v015, character-2d-rendering@v009\n- 검증과 증거: iPhone 17 Pro·Galaxy A06 장착 슬롯과 상세 모달 캡처, 6개 한도 Luau 테스트,\n  West 87.8°·East -92.1° 방향 회전, 최종 Studio 콘솔 오류·경고 0건.\n\n### PBP-INV-008 — 상태와 무관한 2px 배치 외곽선\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 시각 계층\n- 변경 유형: changed\n- 이전 규칙: 가방 시너지나 배치 미리보기 상태에 따라 외곽선이 3~7px로 굵어질 수 있었습니다.\n- 새 유효 규칙: 가방·아이템·선택·시너지·유효·무효·미리보기 외곽선은 모두 2px이며 상태는\n  색으로만 구분합니다.\n- 근거: 굵기 변화가 점유 형태를 실제보다 커 보이게 하고 아이템 그림과 경쟁했습니다.\n- 의도한 사용자 경험: 같은 공간 형태를 안정적으로 읽고 색으로 상태만 빠르게 구분합니다.\n- 범위와 제외: 인벤토리 보드와 보관함 선택 외곽선에 적용합니다.\n- 영향 소스: ScreenState.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: 모든 외곽선 경로가 GetBoundaryThickness=2를 사용하는 Luau·소스 회귀 테스트.\n\n### PBP-CONTENT-002 — 게임 ON 32개 승인 집합\n\n- 날짜: 2026-08-18\n- 도메인: 아이템 콘텐츠 / 게임 배포\n- 변경 유형: changed\n- 이전 규칙: 전체 90개 ItemDB가 모두 게임 ON으로 생성 런타임에 포함됐습니다.\n- 새 유효 규칙: 전체 기획 목록 90개를 보존하면서 게임 ON 32개만 생성 런타임과 Studio\n  베이크에 포함합니다. 포켓 네일건은 MACHINE을 제외한 RANGED·GUN, 소화기 철퇴는\n  FORGED 대신 MACHINE을 사용합니다.\n- 근거: 현재 게임에 투입할 승인 콘텐츠와 후속 기획 후보를 데이터 삭제 없이 구분합니다.\n- 의도한 사용자 경험: 플레이어는 승인된 32개만 만나고 운영자는 OFF 58개를 계속 비교·복원할\n  수 있습니다.\n- 범위와 제외: PBP-CONTENT-001의 전체 90개 카탈로그와 폐기 이력은 유지하며 게임 포함 집합만\n  변경합니다.\n- 영향 소스: inventory-item-layouts.json, GeneratedItemLayouts.luau, wiki/site/item-db-data.js\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: ItemDB revision a35b00cf76ec6c75, 전체 90·게임 ON 32 build/check,\n  Studio 같은 소스 베이크와 저장.\n\n### PBP-ACTION-001 — 20스터드 방향 잠금 Dash\n\n- 날짜: 2026-08-18\n- 도메인: 캐릭터 액션 / 이동 / 스프라이트 일관성\n- 변경 유형: changed\n- 이전 규칙: Dash는 0.20초 동안 목표 속도 30 studs/s의 순간 충격을 적용하고 별도 Dash\n  포즈를 재생할 수 있었습니다.\n- 새 유효 규칙: Dash는 0.30초 동안 선택 방향을 잠그고 장애물이 없는 기준 20스터드를\n  이동합니다. WalkSpeed·AutoRotate를 잠근 뒤 복원하고 시작 순간의 완성 프레임을 유지합니다.\n- 근거: 이동 거리를 입력·현재 속도와 분리해 일관되게 만들고, 승인 Run 아틀라스가 레거시\n  모듈식 Walk/Dash 이미지로 바뀌는 비율 변화를 막습니다.\n- 의도한 사용자 경험: Dash 방향이 중간에 꺾이지 않고 같은 거리를 이동하며 캐릭터 모습도\n  한 프레임으로 안정적으로 유지됩니다.\n- 범위와 제외: 클라이언트 Dash 이동·방향·스프라이트에 적용합니다. 장애물 관통이나 별도\n  Dash 공격 판정은 추가하지 않습니다.\n- 영향 소스: character-actions.md, Config.luau, PlayerActionController.luau,\n  CharacterController.luau, test_two_direction_run_build.py\n- 관련 위키: character-2d-rendering@v009\n- 검증과 증거: Galaxy A06 Play에서 19.46스터드 이동, 이동 중 WalkSpeed=0·AutoRotate=false,\n  종료 뒤 16·true 복원, 최종 콘솔 오류·경고 0건.\n\n### PBP-DEV-001 — 세션 전용 허용 무게 테스트 창\n\n- 날짜: 2026-08-18\n- 도메인: Studio 개발 도구 / 데이터 안전\n- 변경 유형: added\n- 이전 규칙: 허용 무게 경계값을 플레이 중 빠르게 바꾸는 전용 진단 UI가 없었습니다.\n- 새 유효 규칙: Studio에서만 F2 창으로 허용 무게를 1Kg씩 조정하고, 영구 저장에는 플레이어의\n  원래 제한값을 사용합니다.\n- 근거: 무게 초과 UI와 배치 경계를 반복 검증하되 진단 값이 사용자 데이터에 남으면 안 됩니다.\n- 의도한 사용자 경험: 개발자는 Play를 다시 시작하지 않고 경계값을 시험하며 플레이어는\n  테스트 기능이나 변조된 저장값을 보지 않습니다.\n- 범위와 제외: Roblox Studio 진단 세션에만 적용하며 모바일 제품 UI 완료 범위가 아닙니다.\n- 영향 소스: DeveloperTestControls.luau, DeveloperTestWindow.luau, Screen.luau,\n  InventoryService.luau\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: Studio-only 생성·서버 거부·원래 제한 직렬화 소스 검사와 Luau 경계 테스트.\n\n### PBP-INV-009 — 사각 장착판과 부위별 중복 제한\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 장착 / 공간 퍼즐\n- 변경 유형: superseded\n- 이전 규칙: PBP-INV-002~007은 육각 가방이 활성 칸을 만들고 시너지·필터와 유효 배치 무기\n  여섯 개를 관리하는 메인 인벤토리를 사용했습니다.\n- 새 유효 규칙: 아이템은 사각 폴리오미노로 배치하며 유효한 배치가 곧 장착입니다. 무기는\n  여섯 개, 반지는 두 개, 나머지 지정 부위는 한 개이며 무기·반지는 같은 DefinitionId를\n  중복할 수 없습니다. 디아블로식 장비창은 권위 배치의 투영입니다.\n- 근거: 장착 제한을 즉시 이해시키면서 공간 퍼즐은 크기와 형태로 유지해야 합니다.\n- 의도한 사용자 경험: 플레이어는 별도 장착 버튼 없이 배치와 장비 요약을 같은 상태로\n  이해합니다.\n- 범위와 제외: 메인 장착판과 장착 부위에 적용하며 특수 아이템·방패 슬롯은 제외합니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016\n- 검증과 증거: 기획 표에서 부위별 장착 수와 48종 콘텐츠 수량 검산.\n\n### PBP-SYNERGY-001 — 가방·시너지 시스템 전면 폐기\n\n- 날짜: 2026-08-18\n- 도메인: 인벤토리 / 시너지 / 아이템 조합\n- 변경 유형: retired\n- 이전 규칙: PBP-INV-004·006, PBP-ART-001과 PBP-EFFECT-001은 가방 활성 칸, 26종\n  시너지, 시너지 필터와 A/B/C 공간 접촉 효과를 제품 규칙으로 사용했습니다.\n- 새 유효 규칙: 가방 활성 칸, 육각 메인 인벤토리, 시너지 판정·아이콘·필터와 공간 접촉\n  효과를 후속 제품에서 사용하지 않습니다. 육각형은 아이템별 룬 보드에만 사용합니다.\n- 근거: 장착 규칙과 룬 성장 퍼즐이 각각 명확한 책임을 가져야 합니다.\n- 의도한 사용자 경험: 메인 장착은 사각형으로 빠르게 읽고 깊은 육각 퍼즐은 선택한 아이템\n  안에서 집중해 풉니다.\n- 범위와 제외: 새 제품 방향을 폐기하며 기존 코드·자산 제거는 후속 구현 커밋에서 수행합니다.\n- 영향 소스: inventory-item-concept@v016, inventory-item-concept@v015\n- 관련 위키: synergy-icon-system@v001, inventory-item-concept@v016\n- 검증과 증거: v016 폐기·제외 목록과 이전 v015 구현 범위 대조.\n\n### PBP-CONTENT-003 — 알파 장비 48종과 점유 크기\n\n- 날짜: 2026-08-18\n- 도메인: 알파 아이템 콘텐츠 / 장착 부위\n- 변경 유형: superseded\n- 이전 규칙: PBP-CONTENT-002의 현행 게임 ON 32개와 과거 90개 카탈로그가 실제 알파\n  배포 집합이었습니다.\n- 새 유효 규칙: 다음 알파 구현 목표는 무기 14종, 방어구·장신구 34종의 48종입니다. 머리·\n  상의·하의는 4/6칸, 귀걸이·반지는 1칸, 목걸이는 2/3칸, 글러브·신발·벨트는 2/4칸을\n  사용합니다.\n- 근거: 부위별 역할과 사각 점유 크기를 함께 선택하게 해 배치 조합을 늘립니다.\n- 의도한 사용자 경험: 작은 장비의 공간 효율과 큰 장비의 역할을 비교해 자신만의 장착판을\n  만듭니다.\n- 범위와 제외: 48종은 기획 목표이며 현재 ItemDB와 Studio ON 32개는 구현 전까지 그대로입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 무기 14 + 부위별 장비 34 = 48 산술 검산.\n\n### PBP-RUNE-001 — Seed 고정 259칸 아이템 룬 보드\n\n- 날짜: 2026-08-18\n- 도메인: 아이템 성장 / 룬 퍼즐 / 합성\n- 변경 유형: added\n- 이전 규칙: 각 아이템에 독립적인 장기 육각 성장판과 룬 조각 합성 계약이 없었습니다.\n- 새 유효 규칙: 각 아이템은 37칸 영역 일곱 개를 0~6등급에 하나씩 열고, 색별 시작점에서\n  젬블로식 한 칸 간격으로 1~5칸 룬을 연결합니다. 전체 능력 위치는 생성 Seed로 고정하며\n  합성 시 기준 아이템의 Seed와 배치를 보존합니다.\n- 근거: 같은 아이템도 경로·룬 모양·색 차단을 고민하는 장기 성장 퍼즐이 필요합니다.\n- 의도한 사용자 경험: 적은 룬으로 원하는 고등급 능력까지 길을 만들고 다른 색의 미래 경로를\n  함께 계획합니다.\n- 범위와 제외: 보드·등급 개방·룬/아이템 합성 계약이며 실제 생성기와 저장 마이그레이션은\n  후속 구현입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016\n- 검증과 증거: 일곱 영역 각각 37칸과 전체 259칸, 영역별 능력 분포 합계 검산.\n\n### PBP-RUNE-002 — 룬 능력 예산·등급 증가·레어 칸\n\n- 날짜: 2026-08-18\n- 도메인: 룬 능력 / 밸런스 / UI 표현\n- 변경 유형: added\n- 이전 규칙: 룬 능력의 등급별 개수·표시 정밀도·레어 판정과 아이템 정체성 보호 규칙이\n  없었습니다.\n- 새 유효 규칙: 전체 능력 등급 개수는 18·27·33·37·41·50·53이며 같은 능력의 실제 등장\n  등급은 UI 표시값까지 엄격히 증가합니다. 구조형 레어는 6등급 영역의 황금 칸에서 한 단위만\n  제공하고 Seed는 위치만 바꿉니다.\n- 근거: 상위 등급의 보상감을 보존하고 좋은 Seed가 총 전투력 자체를 재추첨하지 않게 합니다.\n- 의도한 사용자 경험: 황금 칸을 장기 목표로 삼되 낮은 등급 경로도 매 단계 분명한 성장을\n  제공합니다.\n- 범위와 제외: 일반 POWER/SPEED/CHANCE/TRAIT/GUARD/TIME/RANGE와 레어 표시에 적용합니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 등급·트랙별 칸 수와 259칸 합계, 모든 표시 수치의 단조 증가 수동 검토.\n\n### PBP-COMBAT-001 — 자동 스킬과 비선형 능력 캡\n\n- 날짜: 2026-08-18\n- 도메인: 전투 능력 / 자동 스킬 / 방어 계산\n- 변경 유형: added\n- 이전 규칙: 룬 인플레이션에서 행동 빈도·확률·무적·발사체 수를 안전하게 제한하는 공통\n  계산 순서가 없었습니다.\n- 새 유효 규칙: 자동 스킬은 해당 무기의 기본 공격 실행 횟수로 발동하고 감소는 최대 8회,\n  최소 요구 횟수는 1회입니다. 방패 막기는 최대 100%에서 방어력을 두 배로 적용하며 방어력\n  이후 최종 피해감소는 최대 50%입니다. 이동·공격·대시·회피·회복·보호막 등은 v016의\n  항목별 캡을 사용합니다.\n- 근거: 적 수치 강화로 대응 가능한 선형 인플레이션은 허용하되 무한 행동·완전 무적·확률\n  초과는 막아야 합니다.\n- 의도한 사용자 경험: 큰 숫자 성장은 즐기면서도 공격과 피격의 기본 규칙은 계속 작동합니다.\n- 범위와 제외: 탄약, 탄약 미소모, 소모품 미소모와 스킬 초기화 확률은 사용하지 않습니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: backpack-combat-stat-database, inventory-item-concept@v016\n- 검증과 증거: 계산 순서와 캡·제외 목록의 기획 교차 검토.\n\n### PBP-RUNE-003 — 알파 무기 14종의 보드 정체성\n\n- 날짜: 2026-08-18\n- 도메인: 무기 콘텐츠 / 룬 보드 / 자동 스킬\n- 변경 유형: added\n- 이전 규칙: 알파 무기별 자동 스킬 조건과 259칸 A/B/C/D·레어 배분이 고정되지 않았습니다.\n- 새 유효 규칙: 일곱 무기 형태에 두 종류씩 14개를 두고 각 보드는 A 102, B 71, C 48,\n  D 32, 6등급 로컬 레어 6칸을 가집니다. 목걸이는 발사체, 반지는 자동 스킬 요구 공격,\n  귀걸이는 근거리 사거리의 전역 레어를 제공하고 신발만 추가 대시를 제공합니다.\n- 근거: Seed 위치가 달라도 무기 이름과 공격 방식에 맞는 성장 정체성이 유지돼야 합니다.\n- 의도한 사용자 경험: 같은 룬이라도 연격검·공성 석궁·흡혈 도끼에서 서로 다른 경로와\n  자동 스킬을 강화합니다.\n- 범위와 제외: 14종의 알파 기획 계약이며 최종 아이콘·폴리오미노 좌표·전투 구현은 후속입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 각 무기 레어 합계 6칸과 보드 전체 259칸 산술 검산.\n\n### PBP-ITEMDB-002 — 최종 48종 활성 ItemDB 전환\n\n- 날짜: 2026-08-20\n- 도메인: 아이템 콘텐츠 / 공개 데이터베이스 / 런타임 배포\n- 변경 유형: superseded\n- 대체 대상: PBP-ITEMDB-001, PBP-CONTENT-003의 \"후속 구현 목표\" 상태\n- 이전 규칙: 새 48종은 기획 목표이고 과거 90종과 게임 ON 32종이 구현 전 역사적 현행\n  상태였습니다.\n- 새 유효 규칙: 무기 14종과 방어구·장신구 34종의 최종 48종만 ItemDB 원본, 생성 런타임,\n  공개 미디어의 활성 집합으로 사용합니다. 과거 아이콘과 특수 아이템은 제거하고 ON/OFF\n  운영 경계는 유지합니다.\n- 근거: 기획·로컬 원화·공개 DB·게임 카탈로그의 서로 다른 활성 집합은 이름·점유·자산 ID\n  불일치를 만듭니다.\n- 의도한 사용자 경험: 플레이어와 개발자가 같은 최종 48종의 이미지와 형태만 봅니다.\n- 범위와 제외: 아이템 정의·아이콘·사각 점유·공개 DB에 적용하며 과거 위키 기록은 보존합니다.\n- 영향 소스: inventory-item-art-catalog.md, inventory-item-layouts.json,\n  GeneratedItemLayouts.luau, ItemCatalog.luau, wiki/site/item-db-data.js\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: ItemDB 48종 빌드·체크, 최종 카탈로그와 모바일 공개 DB 캡처.\n\n### PBP-RUNE-004 — 427칸·후보 10개 룬 보드\n\n- 날짜: 2026-08-20\n- 도메인: 아이템 성장 / 룬 보드 / 랜덤화\n- 변경 유형: superseded\n- 대체 대상: PBP-RUNE-001, PBP-RUNE-002\n- 이전 규칙: 모든 아이템은 37칸 영역 일곱 개의 259칸 보드 하나를 Seed로 섞고, 능력 등급\n  총량 18·27·33·37·41·50·53을 사용했습니다.\n- 새 유효 규칙: 각 영역을 반지름 4인 61칸으로 확대해 전체 427칸을 사용합니다. 아이템\n  정의마다 결정론적으로 생성된 후보 10개를 두고 아이템 생성 시 하나를 균등 선택해 VariantId와\n  Seed를 저장합니다. 보드당 능력 등급 총량은 30·45·54·60·67·90·81입니다.\n- 근거: 11개 능력 계열과 레어 노드, 일곱 색 경로를 한 판에서 읽고 우회할 충분한 공간이\n  필요합니다. 후보를 제한하면 다양성과 재현·검증을 함께 확보할 수 있습니다.\n- 의도한 사용자 경험: 같은 아이템에서도 다른 길을 계획하되 총 능력 예산이 운에 따라 바뀌지는\n  않습니다.\n- 범위와 제외: 48종 전체 480개 보드에 적용하며 런타임 재굴림은 허용하지 않습니다.\n- 영향 소스: item-rune-board-database.json, GeneratedRuneBoardDB.luau,\n  rune-board-db-data.js\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 생성기 결과 48×10=480보드, 보드마다 7×61=427칸, revision\n  6e735afdab3d7550.\n\n### PBP-RUNE-005 — 34종 룬 도형과 62종 능력 아이콘\n\n- 날짜: 2026-08-20\n- 도메인: 룬 조각 / 보드 가독성 / 터치 배치\n- 변경 유형: added\n- 이전 규칙: 룬은 1~5칸 젬블로식 조각이라는 개념만 있었고 완전한 형태군, 공용 원화와\n  능력 아이콘의 책임 분리가 고정되지 않았습니다.\n- 새 유효 규칙: 회전·반전을 동일시한 1·1·3·7·22개, 총 34종 자유 폴리헥스를 사용합니다.\n  일곱 색은 빈 중앙 메달의 중립 원화를 틴트하고, 62종 전투 effect 아이콘을 중앙에 별도\n  합성합니다. 드래그는 실제 도형·잡은 칸·회전·반전을 보존하며 마지막 스냅 가이드를 확정값으로\n  사용합니다.\n- 근거: 색·등급·능력 의미를 한 장의 원화에 굽지 않아야 작은 화면에서도 의미를 읽고 데이터\n  변경에도 자산을 재사용할 수 있습니다.\n- 의도한 사용자 경험: 탭하지 않아도 대략적인 능력 종류를 알고, 손가락 아래에서 룬이 튀지\n  않은 채 예상 위치에 놓입니다.\n- 범위와 제외: 룬 카드·보드 노드·드래그 미리보기에 적용하며 상세 수치는 텍스트로 제공합니다.\n- 영향 소스: rune-piece-catalog.json, rune-ability-icon-catalog.json,\n  rune_hex_neutral.png, rune_ability_icons.png, UIPrimitives.luau, Screen.luau\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 형태군 34개, effect 아이콘 62개 생성·누락 검사와 아이콘 시트.\n\n### PBP-UI-001 — 모바일 인벤토리·룬 보드의 단일 작업 흐름\n\n- 날짜: 2026-08-20\n- 도메인: 모바일 UI / 인벤토리 / 룬 보드 / 합성\n- 변경 유형: added\n- 이전 규칙: 사각 장착과 룬 보드의 개별 기획은 있었지만 화면 내 기능 위치, 터치 우선순위,\n  필터·합성·복귀 상태의 완전한 흐름이 없었습니다.\n- 새 유효 규칙: 두 화면은 안전 영역 아래 상단 상태, 중앙 작업판, 하단 보관함을 공유합니다.\n  카드 탭은 룬 보드 진입, 드래그는 배치 또는 합성을 우선합니다. 룬 보관함은 상하 스크롤,\n  한 색 또는 전체를 고르는 7색 필터와 독립 ON/OFF인 1~5칸 필터를 제공하고, 빈 보드 탭은\n  상단 중앙에 능력을 표시합니다.\n- 근거: 모바일에서는 화면 전환마다 탐색 위치와 재료가 사라지면 배치 퍼즐의 비교 비용이\n  지나치게 커집니다.\n- 의도한 사용자 경험: 인벤토리 배치, 아이템 성장, 룬 배치와 합성을 같은 손동작 문법으로\n  왕복합니다.\n- 범위와 제외: 모바일 세로 화면과 터치 입력에 적용하며 PC 밀도·마우스 품질은 현재 완료\n  기준이 아닙니다.\n- 영향 소스: inventory-rune-ui-spec.md, InventoryV2, RuneBoard, InventoryV2Service.luau\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 정적 상태·Luau 테스트, iPhone 17 Pro 400×777 및 iPhone 7 374×666 Studio\n  Play 캡처, 핵심 입력 경로와 콘솔 오류 없음 확인.\n\n### PBP-ART-002 — 최종 아이템 카툰 아트와 방향 규칙\n\n- 날짜: 2026-08-20\n- 도메인: 아이템 아트 / 모바일 전투 / 사각 점유\n- 변경 유형: superseded\n- 대체 대상: PBP-ART-001의 육각·시너지 카드 중심 아트 계약\n- 이전 규칙: 실사풍 또는 고풍스러운 원화와 육각 시너지 카드 문법이 섞였고, 일부 무기는\n  사각 점유와 전투 회전 기준에 맞지 않았습니다.\n- 새 유효 규칙: 48종 전체를 밝고 굵은 카툰풍으로 통일하고 사각 폴리오미노 질량에 맞춥니다.\n  근접 무기는 위쪽, 활·석궁·총은 오른쪽을 기본 방향으로 하며 발사체·공격 궤적은 원화에서\n  제외합니다.\n- 근거: Brotato식 자동 공격에서는 작은 캐릭터 주변을 도는 장비의 방향과 실루엣이 즉시\n  읽혀야 합니다.\n- 의도한 사용자 경험: 보관함·장착판·전투에서 같은 아이템을 형태만으로 알아봅니다.\n- 범위와 제외: 최종 48종 인벤토리 원화에 적용하며 실제 공격 VFX와 투사체는 별도 자산입니다.\n- 영향 소스: Assets/Items/InventoryIcons, inventory-item-art-catalog.md,\n  uploaded_asset_ids.json\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 최종 48종 카탈로그와 공개 ItemDB 캡처.\n\n### PBP-RUNE-006 — 등급·색·시작점 일치와 회전 전용 배치\n\n- 날짜: 2026-08-20\n- 도메인: 룬 성장 / 연결 퍼즐 / 배치 권위\n- 변경 유형: changed\n- 대체 대상: PBP-RUNE-004의 자유 시작 색 등록, PBP-RUNE-005의 런타임 반전 조작\n- 이전 규칙: 룬 색과 합성 등급은 독립 값이었고, 해금된 어느 중앙 시작점에서든 아직 등록하지\n  않은 색을 시작할 수 있으며 플레이 중 회전과 반전을 모두 제공했습니다.\n- 새 유효 규칙: G0~G6 룬 색은 아이템 등급색과 일치합니다. 룬은 같은 번호 영역의 중앙\n  시작점에서만 첫 등록하며 아이템 등급보다 높은 룬은 배치할 수 없습니다. 5칸 합성으로 등급이\n  오르면 다음 등급 색으로 바뀌고 런타임 조작은 60° 회전만 제공합니다. 첫 룬은 중앙 한 칸만\n  덮으면 도형의 어느 셀을 잡았든 유효하며 이후에는 한 칸 간격 연결 전선을 안내합니다.\n- 근거: 색·등급·시작점이 서로 다른 축이면 성장 잠금과 연결 가능 위치를 화면만 보고 예측하기\n  어렵고 저장 데이터가 모순될 수 있습니다.\n- 의도한 사용자 경험: 새 등급을 열 때 같은 색의 새 출발점을 즉시 이해하고, 보드가 보여 주는\n  한 칸의 목표와 실제 도형 가이드만으로 자유로운 첫 배치를 시도합니다.\n- 범위와 제외: 룬 생성·합성·저장 정규화·보드 배치·회전에 적용합니다. 34개 자유 폴리헥스\n  카탈로그의 중복 제거 기준은 유지합니다.\n- 영향 소스: rune-piece-system.md, inventory-rune-ui-spec.md, RuneBoardModel.luau,\n  RuneMergeModel.luau, InventoryV2Service.luau, Screen.luau\n- 관련 위키: inventory-item-concept@v018\n- 검증과 증거: InventoryV2 Luau 테스트의 등급색 불일치 거절, 등급별 시작점, 5칸 합성 색\n  승급, 첫 중앙 목표와 한 칸 간격 전선 검증.\n\n### PBP-UI-002 — 모바일 룬 보드의 문맥 보존 조작과 팝업 필터\n\n- 날짜: 2026-08-20\n- 도메인: 모바일 UI / 룬 보드 / 보관함 탐색\n- 변경 유형: changed\n- 대체 대상: PBP-UI-001의 상시 펼친 단일 색 필터와 보드 중심 재확대\n- 이전 규칙: 색상·칸 수 선택지가 보관함 위에 계속 공간을 차지하고 색상은 한 개 또는 전체만\n  골랐습니다. 확대할 때 보드 중앙으로 시점이 이동했고 회전·반전은 들고 있는 룬에 묶였습니다.\n- 새 유효 규칙: `색상 필터`와 `칸 수 필터` 한 줄 트리거가 각각 다중 선택 말풍선을 열며\n  바깥 탭으로 닫힙니다. 장착 룬 회전은 마지막 선택 룬에만 적용하고 확대·축소는 현재 보던\n  논리 위치를 유지합니다. 상단 능력 설명은 색상명을 빼고 고대비 등급·능력·수치만 표시합니다.\n- 근거: 좁은 세로 화면에서는 선택지를 계속 펼쳐 두는 것보다 실제 룬 카드를 더 많이 보여 주는\n  편이 중요하며, 카메라와 조작 대상이 예기치 않게 바뀌면 퍼즐 경로를 다시 찾아야 합니다.\n- 의도한 사용자 경험: 여러 색·크기를 짧은 팝업에서 조합해 찾고, 보던 위치와 선택 룬을 잃지\n  않은 채 확대·회전하며, 탭 설명을 즉시 읽습니다.\n- 범위와 제외: 모바일 세로 룬 장착 화면과 터치 입력에 적용합니다. PC 화면 밀도와 마우스\n  동등성은 현재 완료 기준이 아닙니다.\n- 영향 소스: inventory-rune-ui-spec.md, Screen.luau, VisualTokens.luau,\n  StorageSort.luau, test_inventory_v2_ui.py\n- 관련 위키: inventory-item-concept@v018\n- 검증과 증거: Galaxy A06 세로 Studio Play에서 필터 팝업·확장된 카드 영역·고대비 능력\n  설명을 확인했고, Studio MCP 진단과 7개 UI 계약 테스트를 통과했습니다.\n\n### PBP-COMBAT-002 — 장착 무기 할로와 서버 권위 자동 공격\n\n- 날짜: 2026-08-20\n- 도메인: 필드 장착 표시 / 자동 전투 / 모바일 연출\n- 변경 유형: superseded\n- 대체 대상: PBP-INV-007의 방향 반응형 필드 표시와 실제 공격 제외 범위\n- 이전 규칙: 최대 여섯 장착 무기는 캐릭터 방향을 따라 회전하는 머리 위 이미지로만 보였고,\n  실제 표적 탐색·공격·피해와 무기별 연출은 후속 범위였습니다.\n- 새 유효 규칙: 적이 없을 때 여섯 무기는 캐릭터 방향과 무관한 이미지 할로로 머리 위에\n  부유합니다. 적이 사거리와 시야 안에 들어오면 서버가 슬롯별 표적·쿨다운·피해를 결정하고\n  클라이언트는 베기·찌르기·투척·활·석궁·총기 연출을 재생합니다. 14종 원화는 ItemDB의\n  정규화된 회전축·타격점·발사구를 공통 계약으로 사용합니다.\n- 근거: 인벤토리의 장착 결과가 실제 전투 행동으로 연결돼야 빌드가 필드에서 살아 움직이며,\n  캐릭터 방향에 무기를 묶지 않아야 대기 할로와 공격 조준의 책임이 충돌하지 않습니다.\n- 의도한 사용자 경험: 적이 없을 때는 자신의 여섯 무기를 안정된 천사 링으로 읽고, 전투가\n  시작되면 각 원화가 직접 날아가거나 발사하는 모습을 통해 무기 종류를 즉시 구분합니다.\n- 범위와 제외: 14종의 기본 자동 공격, 서버 피해와 공통 연출 계열까지 적용합니다. 도탄·산탄·\n  관통·흡혈·반격 같은 고유 능력, 룬 변형, 음향과 적 피격 애니메이션은 후속 범위입니다.\n- 영향 소스: alpha-item-definitions.json, inventory-item-layouts.json,\n  EquippedWeaponBillboard.luau, WeaponAttackVFX.luau, WeaponCombatConfig.luau,\n  WeaponCombatService.luau, DamageResolver.luau\n- 관련 위키: weapon-combat-presentation@v001, inventory-item-concept@v018,\n  character-2d-rendering@v009\n- 검증과 증거: 14개 무기 공격 발생, 적 없음 공격 증가 0, iPhone 17 Pro `401×776`과\n  Galaxy A06 `359×718` Studio Play, 45개 연출 수신·누락 0·객체 수 736 고정·서버 피해와\n  콘솔 오류 없음 확인.\n\n### PBP-COMBAT-003 — 근접 여섯 무기 할로와 소켓 기준 최근접 적 조준\n\n- 날짜: 2026-08-21\n- 도메인: 필드 장착 표시 / 자동 전투 조준 / 모바일 연출\n- 변경 유형: changed\n- 대체 대상: PBP-COMBAT-002의 넓은 할로 위치와 기본 원화 회전 조준 규칙\n- 이전 규칙: 여섯 무기는 캐릭터 머리 위 할로에 부유하고 서버 권위 자동 공격으로 전환했지만,\n  캐릭터와의 최대 거리, 좌우 세 슬롯의 정확한 배치, 모든 무기의 공통 표적과 왼쪽을 보는\n  비대칭 원화 처리 방식은 고정되지 않았습니다.\n- 새 유효 규칙: 여섯 무기를 머리 가까운 좁은 타원의 왼쪽 세 개·오른쪽 세 개에 같은 현 길이\n  간격으로 두고 정중앙 위·아래는 비웁니다. 장착 집합은 사거리 안에서 가장 가까운 생존 적\n  하나를 공통 후보로 선택하고 각 무기는 자기 사거리 안에서 실제 칼끝·타격점·총구·화살·볼트\n  발사 방향을 맞춥니다. 오른쪽 기본 원화가 왼쪽 표적을 보면 상하 회전 대신 수평 반전하며\n  회전축·타격점·발사 소켓도 함께 반전합니다. 적이 없으면 기본 방향의 독립 부유로 돌아갑니다.\n- 근거: 무기가 캐릭터에서 멀리 흩어지면 장착 관계와 천사 링 실루엣이 사라지고, 왼쪽 적을\n  단순 각도 회전으로 겨누면 총과 활이 거꾸로 보이며 총구·발사체 위치도 원화와 어긋납니다.\n- 의도한 사용자 경험: 작은 모바일 화면에서도 여섯 장비를 캐릭터 소유의 한 묶음으로 즉시\n  읽고, 전투에서는 모든 무기가 같은 위협을 각자의 실제 끝점으로 노리는 장면을 봅니다.\n- 범위와 제외: 대기 할로 위치, 최근접 표적 선택, 무기별 사거리, 대기·공격 조준과 좌측 수평\n  반전에 적용합니다. 도탄·산탄·관통 같은 다중 표적 고유 능력과 음향은 후속 범위입니다.\n- 영향 소스: EquippedWeaponVisualLayout.luau, EquippedWeaponBillboard.luau,\n  WeaponAimResolver.luau, WeaponAttackVFX.luau, WeaponTargeting.luau,\n  WeaponCombatService.luau\n- 관련 위키: weapon-combat-presentation@v002\n- 검증과 증거: 사용자 좌표 측정 이미지, iPhone 17 Pro `401×776`의 여섯 무기 근접 할로와\n  좌측 표적 수평 반전 공격 캡처, Galaxy A06 `359×718` 반응형 여백 검사, 관련 테스트와\n  Studio 콘솔 오류 없음 확인.\n\n### PBP-RUNE-007 — 전체 초안과 원자 저장 룬 편집\n\n- 날짜: 2026-08-21\n- 도메인: 룬 연결 규칙 / 저장 권위 / 모바일 편집\n- 변경 유형: changed\n- 대체 대상: PBP-RUNE-006의 즉시 유효 배치 중심 조작\n- 이전 규칙: 매 조작이 그 순간 유효해야 배치 상태로 남을 수 있어 회전 중 잠시 잘못된 형태를\n  확인하거나 여러 룬을 함께 고친 뒤 저장하는 흐름이 없었습니다.\n- 새 유효 규칙: 룬 추가·이동·회전·회수는 전체 초안을 편집합니다. 무효 룬은 빨간색으로 남겨\n  수정할 수 있지만 저장은 비활성화되며, 서버가 전체 배치를 다시 검증한 뒤 유효한 초안만\n  원자적으로 저장합니다. 되돌리기는 마지막 저장 상태를 복원합니다. 한 칸 간격 연결은 배치\n  순서가 아니라 완성된 같은 색 네트워크 전체를 기준으로 판정합니다.\n- 근거: 퍼즐은 중간 단계가 아니라 최종 형태를 설계하는 작업이며, 클라이언트 조작 순서가 같은\n  완성 배치의 합법성을 바꾸면 안 됩니다.\n- 의도한 사용자 경험: 자유롭게 돌리고 옮기며 실패 이유를 본 뒤, 만족한 전체 배치만 안전하게\n  확정합니다.\n- 범위와 제외: 보관/배치 룬의 이동·회전·회수, 저장·되돌리기, 클라이언트와 서버의 전체 배치\n  검증에 적용합니다. 룬 합성 규칙은 바꾸지 않습니다.\n- 영향 소스: inventory-rune-ui-spec.md, RuneBoardModel.luau, RuneDragVisualState.luau,\n  Screen.luau, InventoryV2Service.luau\n- 관련 위키: inventory-item-concept@v019\n- 검증과 증거: 한 칸 간격 5칸 도형 배치, 잘못된 회전의 빨간 상태와 저장 비활성, 악성 저장\n  요청 거절 뒤 서버 상태 보존, 제거·되돌리기 Studio 진단과 InventoryV2 테스트.\n\n### PBP-UI-003 — 현재 형태 가이드와 정돈된 룬 보드 시각 언어\n\n- 날짜: 2026-08-21\n- 도메인: 모바일 룬 보드 / 터치 상호작용 / 정보 시각화\n- 변경 유형: changed\n- 대체 대상: PBP-UI-002의 선택 회전·필터·능력 설명 흐름\n- 이전 규칙: 연결 가이드가 현재 도형의 잡은 셀과 회전을 충분히 반영하지 않았고 잠긴 영역과\n  빈 영역의 차이가 드러나지 않았습니다. 보관 카드에서 방향을 미리 정하거나 배치 룬을\n  보관함으로 회수하기 어려웠고, 두꺼운 육각 테두리와 불투명 룬 장식이 색과 능력을 방해했습니다.\n- 새 유효 규칙: 현재 잡은 셀·회전·전체 배치를 기준으로 모든 후보를 계산합니다. 유효 칸은\n  라임색, 잠긴 칸은 탁한 적갈색, 무효 초안은 빨간색으로 표시하며 기존 룬과 같은 색 능력\n  아이콘은 유지합니다. 보관 카드와 배치 룬은 선택·60° 회전하고 배치 룬은 이동·회수합니다.\n  틈 없는 얇은 벌집과 색이 비치는 투명 크리스털 룬을 사용하고, 전체 필터는 모두 ON 상태에서\n  모두 OFF로 반전할 수 있습니다. 룬 각인 효과 탭은 유효 노드를 효과별로 합산합니다.\n- 근거: 플레이어가 손을 놓기 전에 가능 위치와 불가능 이유, 현재 활성 보상, 도형 방향을 함께\n  읽어야 최적 경로를 계산할 수 있습니다.\n- 의도한 사용자 경험: 보드 위 정보를 한눈에 구분하고, 카드에서 방향을 준비해 원하는 위치로\n  옮긴 뒤 실제 얻는 효과까지 같은 화면 흐름에서 확인합니다.\n- 범위와 제외: 모바일 세로 룬 보드와 보관함, 필터, 효과 요약에 적용합니다. PC 화면 품질과\n  마우스 동등성은 현재 완료 기준이 아닙니다.\n- 영향 소스: rune_hex_neutral.png, rune_piece_crystal.png, Assets.luau,\n  UIPrimitives.luau, VisualTokens.luau, RuneEffectSummary.luau, Screen.luau\n- 관련 위키: inventory-item-concept@v019\n- 검증과 증거: iPhone 17 Pro 세로의 연결·잠금 가이드, 잘못된 초안, 효과 합산 Studio\n  캡처와 iPhone 7 세로 반응형 검사.\n\n### PBP-COMBAT-004 — 인벤토리 중 공격 연출 억제\n\n- 날짜: 2026-08-21\n- 도메인: 모바일 인벤토리 / 전투 표현 계층\n- 변경 유형: added\n- 이전 규칙: 필드 공격 테스트 루프와 공격 연출이 인벤토리보다 높은 레이어에서 계속 재생되어\n  작업 영역을 뚫고 보일 수 있었습니다.\n- 새 유효 규칙: 인벤토리·룬 화면이 열리면 진행 중 클라이언트 공격 연출을 즉시 지우고 새\n  연출을 받지 않으며 오버레이를 비활성화합니다. 화면을 닫으면 표현만 다시 허용합니다.\n- 근거: 전투 준비 작업에서는 퍼즐과 정보가 시각 우선권을 가져야 하며, 화면을 덮는 것만으로는\n  불필요한 연출 루프가 계속 실행됩니다.\n- 의도한 사용자 경험: 인벤토리에 들어오는 순간 필드 공격 연출이 완전히 멈춰 룬 배치에\n  집중하고, 나가면 자연스럽게 전투 표현으로 돌아갑니다.\n- 범위와 제외: 클라이언트 무기 공격 VFX와 오버레이에 적용합니다. 서버의 공격 판정·피해·\n  장착 상태는 변경하지 않습니다.\n- 영향 소스: Screen.luau, WeaponAttackVFX.luau\n- 관련 위키: inventory-item-concept@v019, weapon-combat-presentation@v002\n- 검증과 증거: Studio Play에서 InventoryV2Screen 활성 중 WeaponCombatVFX\n  Enabled=false, Suppressed=true, 활성 공격·투사체·충돌 0개 확인.\n\n### PBP-ACTION-002 — 3단계 Dash와 이동 구간 잔상\n\n- 날짜: 2026-08-23\n- 도메인: 캐릭터 행동 / 모바일 전투 표현\n- 변경 유형: superseded\n- 대체 대상: PBP-ACTION-001의 Dash 시작 프레임 고정 표현\n- 이전 규칙: Dash는 0.30초 동안 시작 순간의 캐릭터 프레임을 그대로 유지했습니다.\n- 새 유효 규칙: 방향 잠금·0.30초·20스터드 이동은 유지하면서 예비 0.05초, 이동 0.20초,\n  회복 0.05초의 통짜 캐릭터 자세를 재생합니다. 잔상은 이동 자세에서 실제 경로 뒤에만\n  생성되고 회복 자세에서 본체로 수렴합니다.\n- 근거: 시작 프레임 고정은 형태 안정성은 지키지만 행동의 출발과 종료를 자세로 설명하지\n  못합니다. 세 개의 명확한 키포즈는 캐릭터 정체성을 지키면서 타이밍을 읽게 합니다.\n- 의도한 사용자 경험: 버튼을 누른 순간 몸을 낮추고 빠르게 이동한 뒤 균형을 되찾는 흐름과\n  잔상 소멸을 보고 Dash 종료를 직관적으로 이해합니다.\n- 범위와 제외: Rookie 남성 통짜 캐릭터 Dash와 런타임 잔상에 적용합니다. 이동 거리·충돌·\n  쿨다운·룬 보너스 한도는 변경하지 않습니다.\n- 영향 소스: production_manifest.json, AssetRegistry.luau, CharacterController.luau,\n  DashAfterimage.luau, FrameSpriteRig.luau, ProductionDashData.luau\n- 관련 위키: character-2d-rendering@v010\n- 검증과 증거: 좌우 3프레임 콘택트 시트, 정확한 20fps 타이밍·잔상 GIF, 캐릭터 자산 검사,\n  30개 후보 테스트와 Galaxy A06 Studio Play Dash 잔상 캡처.\n\n### PBP-ART-003 — 발이 고정된 좌우 호흡 Idle\n\n- 날짜: 2026-08-23\n- 도메인: 캐릭터 애니메이션 / 아트 방향\n- 변경 유형: added\n- 이전 규칙: 정지 상태는 통짜 Run 아틀라스 이전의 호환 프레임 또는 사실상 고정 자세를\n  사용해 호흡의 생동감이 없었습니다.\n- 새 유효 규칙: 마지막 East·West 방향을 유지하는 8프레임 6fps 호흡을 사용합니다. 발과\n  골반 아래는 고정하고 상체의 들숨·정점·날숨·복귀만 움직이며 전체 균일 확대는 금지합니다.\n- 근거: 작은 모바일 캐릭터는 생동감이 필요하지만 바닥 접지와 실루엣 안정성을 잃으면 조작\n  위치가 흔들려 보입니다.\n- 의도한 사용자 경험: 멈춰 있어도 캐릭터가 살아 숨 쉬되 신발이 미끄러지거나 방향이 이유\n  없이 반전되지 않는 안정적인 정지 화면을 봅니다.\n- 범위와 제외: Rookie 남성 통짜 캐릭터 Idle에 적용합니다. Hit·Death·Clear 제작은 별도\n  승인 단위입니다.\n- 영향 소스: production_manifest.json, Config.luau, DirectionResolver.luau,\n  FrameSpriteRig.luau, ProductionIdleData.luau\n- 관련 위키: character-2d-rendering@v010\n- 검증과 증거: 좌우 8프레임 콘택트 시트, 하체 픽셀 고정 검사, 캐릭터 자산 검사와 Galaxy\n  A06 Studio Play Idle 캡처.\n\n### PBP-INV-010 — 장비 전체 초안과 원자 저장\n\n- 날짜: 2026-08-23\n- 도메인: 모바일 인벤토리 / 장비 배치 권위\n- 변경 유형: added\n- 이전 규칙: 아이템을 한 번 옮길 때마다 개별 배치를 즉시 확정했고, 여러 장비를 재정리한\n  최종 결과를 저장 전에 함께 검토하는 계약이 없었습니다.\n- 새 유효 규칙: 추가·이동·회전·보관은 전체 초안을 갱신합니다. 겹친 장비는 가장 가까운\n  빈자리로 밀어 결과를 미리 보여 주고, 잠금·무게·장착 한도 등 무효 상태는 빨간색으로 남기되\n  저장을 비활성화합니다. 서버는 최대 200개 좌표를 전체 재검증해 모두 유효할 때만 원자적으로\n  교체하며 되돌리기는 마지막 저장 상태를 복원합니다.\n- 근거: 여러 모양의 장비를 퍼즐처럼 재배치할 때 중간 한 수를 즉시 저장하면 플레이어가\n  전체 구성을 비교하기 어렵고, 실패 중간 상태가 영구 데이터가 될 위험이 있습니다.\n- 의도한 사용자 경험: 장비를 여러 번 옮겨 최종 구성을 눈으로 검토하고, 잘못된 아이템과\n  이유를 고친 뒤 한 번만 저장합니다.\n- 범위와 제외: 9×9 사각 장착판과 보관함 전환에 적용합니다. ItemDB 이미지 배율·X/Y 보정의\n  실제 렌더링 연결은 이번 범위가 아닙니다.\n- 영향 소스: InventoryModel.luau, ItemPlacementDraft.luau, Screen.luau,\n  InventoryV2Service.luau\n- 관련 위키: inventory-item-concept@v020\n- 검증과 증거: 충돌 장비의 결정적 이동, 잠긴 칸 초안·저장 비활성·되돌리기 Luau 테스트와\n  Galaxy A06 Studio Play 실패 상태 캡처.\n\n### PBP-UI-004 — 선택 우선 장비 조작과 세로 보관함\n\n- 날짜: 2026-08-23\n- 도메인: 모바일 인벤토리 / 터치 UX\n- 변경 유형: changed\n- 이전 규칙: 아이템 탭이 룬 화면 이동과 직접 연결되고 보관 카드·스크롤·배치 드래그의 입력\n  의도가 충분히 분리되지 않았으며 보관함은 가로 흐름을 전제로 했습니다.\n- 새 유효 규칙: 짧은 탭은 선택만 하고 회전 버튼을 보여 줍니다. 움직이지 않은 길게 누르기는\n  룬 페이지·상세 정보 메뉴를 열고, 움직임이 생기면 세로 스크롤 또는 실제 아이템 그림 드래그로\n  전환합니다. 보관함은 안전 여백을 둔 세로 다열 그리드를 사용합니다.\n- 근거: 같은 손가락으로 탐색·선택·배치·상세 보기를 수행하는 모바일에서는 행동 전에 선택\n  상태와 명확한 분기 피드백이 필요합니다.\n- 의도한 사용자 경험: 목록을 안정적으로 훑고, 원하는 장비를 선택해 회전하거나 끌며, 가만히\n  눌렀을 때만 다음 작업을 고릅니다.\n- 범위와 제외: 모바일 세로 인벤토리와 장비 상세 팝업에 적용합니다. PC 레이아웃 품질과\n  마우스 동등성은 현재 완료 기준이 아닙니다.\n- 영향 소스: inventory-rune-ui-spec.md, ItemGesturePolicy.luau, Screen.luau\n- 관련 위키: inventory-item-concept@v020\n- 검증과 증거: InventoryV2 스펙, UI 계약 테스트, Galaxy A06의 기본·메뉴·상세 캡처와\n  iPhone 7 `374×666`의 세로 스크롤·메뉴·상세 경계 검사.\n\n### PBP-DOC-002 — 비개발자 중심 커밋 위키와 다중 상태 증거\n\n- 날짜: 2026-08-23\n- 도메인: 개발 운영 / 기획 기록 / 위키 품질\n- 변경 유형: added\n- 이전 규칙: 커밋 위키는 기획 우선과 시각 증거를 요구했지만, 비개발자 가독성 판정과 여러\n  상태가 필요한 UI의 증거 범위가 충분히 구체적이지 않았습니다.\n- 새 유효 규칙: `한눈에 보는 변경`에서 무엇이·왜·어떻게 달라졌는지 먼저 답하고, 제품 언어로\n  경험·원칙·범위를 설명한 뒤 구현을 근거로 둡니다. 시각 변화는 이해에 필요한 기본·상호작용·\n  선택·성공·실패 상태를 실제 Studio 또는 브라우저에서 캡처합니다.\n- 근거: 기획 철학이 코드 목록에 묻히거나 한 장의 우연한 화면만 남으면 다음 직군과 미래의\n  작업자가 제품 의도를 복원하기 어렵습니다.\n- 의도한 사용자 경험: 디자이너·아티스트·테스터·새 팀원이 소스 코드를 열지 않고도 변경 이유,\n  최종 규칙과 실제 결과를 한 페이지에서 이해합니다.\n- 범위와 제외: 사용자 승인 커밋에서 발행하는 모든 위키 페이지에 적용합니다. 개발 중간\n  기록과 폐기된 접근은 계속 게시하지 않습니다.\n- 영향 소스: AGENTS.md, update-project-wiki/SKILL.md\n- 관련 위키: development-wiki@v013\n- 검증과 증거: 이번 커밋의 character-2d-rendering@v010과 inventory-item-concept@v020에\n  새 서사 순서와 제작·기본·선택·실패·상세·두 화면비 증거를 실제 적용.\n\n### PBP-INV-011 — 배치 순서 기반 장착 요약과 세 가지 빠른 작업\n\n- 날짜: 2026-08-23\n- 도메인: 모바일 인벤토리 / 장착 상태 / 룬 성장 진입\n- 변경 유형: changed\n- 대체 대상: PBP-INV-007의 별도 2×3 장착 무기 표시와 단순 상세·빼기 메뉴\n- 이전 규칙: 장착 무기는 별도 장착 탭의 고정 여섯 칸에서 확인하고 상세 정보 또는 배치 해제를\n  선택했으며, 무기 표시 순서와 다른 부위 장비의 동시 요약 계약이 완전하지 않았습니다.\n- 새 유효 규칙: 유효 배치 무기는 장착판에 들어온 순서를 저장해 왼쪽부터 최대 여섯 개를\n  표시합니다. 오른쪽에는 머리·귀걸이·목걸이·상의·장갑·하의·벨트·반지 둘·신발을\n  함께 표시합니다. 채워진 모든 요약 칸의 메뉴는 이름·등급·공격력·공격 속도 아래 상세 정보,\n  룬 보드 편집, 보관함으로 이동을 이 순서로 제공합니다.\n- 근거: 장착 결과와 다음 성장 작업이 배치 화면에서 분리되면 플레이어가 같은 아이템을 다시\n  찾고 화면을 왕복해야 하며, 단순 식별자 정렬은 실제 장착 순서를 설명하지 못합니다.\n- 의도한 사용자 경험: 장비를 놓은 순서와 현재 부위를 즉시 확인하고, 원하는 아이템에서 바로\n  정보를 읽거나 룬을 편집하거나 보관함으로 되돌립니다.\n- 범위와 제외: 장비 배치 초안의 요약 표시·빠른 작업·전투 무기 복제 순서에 적용합니다.\n  필드 자동 공격 규칙과 아직 등록되지 않은 기본 효과 수치는 변경하지 않습니다.\n- 영향 소스: InventoryModel.luau, ItemPlacementDraft.luau, StateSerializer.luau,\n  Screen.luau, InventoryV2Service.luau\n- 관련 위키: inventory-item-concept@v021\n- 검증과 증거: 배치 순서 보존 Luau 테스트, 세 버튼 순서 UI 계약, Galaxy A06와 iPhone 17\n  Pro의 메뉴·룬 보드 선택 이동 Studio MCP 확인.\n\n### PBP-UI-005 — 배치판 중심 모바일 장비 작업대와 시간 기반 터치 중재\n\n- 날짜: 2026-08-23\n- 도메인: 모바일 인벤토리 / 반응형 레이아웃 / 터치 입력\n- 변경 유형: added\n- 이전 규칙: PBP-UI-004는 선택·길게 누르기·세로 보관함을 정했지만 배치판·도구·장착\n  요약의 한 화면 구성, 확대판 이동과 배치 아이템 드래그의 시간 경계, 요약 영역의 비스크롤\n  규칙을 완전히 정의하지 않았습니다.\n- 새 유효 규칙: 가운데 배치판, 아래 무기 여섯 칸, 오른쪽 위 확대·축소·원상태·회전, 오른쪽\n  아래 부위 장비 열 칸을 한 작업대로 구성합니다. 모든 요약 칸은 화면에 맞춰 정사각형으로\n  줄어들고 스크롤하지 않습니다. 저장·되돌리기는 다른 영역을 축소하지 않는 오버레이입니다.\n  확대판에서 0.3초 이내 움직임은 판 이동, 0.3초 이상 1초 미만 움직임은 아이템 이동이며,\n  1초 정지 뒤 1초 게이지가 차면 메뉴가 열립니다. 보관 아이템을 집으면 목록 스크롤을 잠그고\n  아이템 드래그 그림은 이전 68px의 절반인 34px 위에 표시합니다.\n- 근거: 같은 아이템 위에서 판 탐색·장비 이동·메뉴 열기가 경쟁하고, 화면 크기나 초안 상태가\n  바뀔 때 작업 영역이 재배치되면 모바일 공간 퍼즐의 위치 기억이 깨집니다.\n- 의도한 사용자 경험: 작은 휴대폰에서도 모든 장착 상태와 필수 도구를 스크롤 없이 보고,\n  손가락의 속도와 멈춤만으로 의도한 판 이동·장비 이동·메뉴를 안정적으로 실행합니다.\n- 범위와 제외: 모바일 세로 장비 배치 화면과 터치 입력에 적용합니다. PC 레이아웃 품질과\n  마우스 동등성은 현재 완료 기준이 아닙니다.\n- 영향 소스: ItemGesturePolicy.luau, Screen.luau, VisualTokens.luau,\n  test_inventory_v2_ui.py\n- 관련 위키: inventory-item-concept@v021\n- 검증과 증거: 정사각 비스크롤 UI 계약, 0.3초·1초 경계 Luau 테스트, Galaxy A06\n  359×718과 iPhone 17 Pro 401×776의 기본·메뉴·34px 드래그 Studio MCP 캡처와\n  콘솔 오류 없음 확인.\n\n### PBP-ITEMDB-003 — 모든 장비 화면에 동일한 ItemDB 원화 배치 적용\n\n- 날짜: 2026-08-24\n- 도메인: ItemDB / 모바일 장비 카드 / 배치 시각화\n- 변경 유형: changed\n- 이전 규칙: ItemDB는 사각 점유와 아이콘 자산을 생성했지만, 보관 카드가 웹에서 조정한\n  배율·X/Y 중심·기본 회전을 배치판과 같은 방식으로 사용하지 않았고 카드 아래 실제 점유\n  형태도 보이지 않았습니다.\n- 새 유효 규칙: ItemDB의 배율·중심 보정·기본 회전을 보관 카드, 배치판과 드래그 그림의\n  단일 시각 기준으로 사용합니다. 카드에는 현재 90° 회전을 반영한 실제 점유 칸을 그림 아래\n  표시하며, 원본·공개 DB·생성 런타임을 같은 리비전으로 유지합니다.\n- 근거: 웹에서 정중앙과 크기를 확정해도 게임 화면이 별도 맞춤값을 쓰면 같은 아이템이 화면마다\n  다르게 보이고, 플레이어는 배치 전에 차지할 모양을 예측할 수 없습니다.\n- 의도한 사용자 경험: 웹에서 확인한 크기와 중심 그대로 장비를 보고, 카드를 회전해 점유 모양과\n  그림 방향을 배치 전에 함께 확인합니다.\n- 범위와 제외: 활성 48종의 보관 카드·장비 배치판·드래그 그림과 ItemDB 생성물에 적용합니다.\n  아이템의 전투 능력치나 신규 효과는 변경하지 않습니다.\n- 영향 소스: inventory-item-layouts.json, GeneratedItemLayouts.luau, Screen.luau,\n  item-db-data.js\n- 관련 위키: inventory-item-concept@v022, backpack-combat-stat-database@v001\n- 검증과 증거: ItemDB 리비전 `8fb41028ba82d814`, 증폭 펜던트·집중의 반지 중심값 회귀 검사,\n  Galaxy A06의 선택·90° 회전 카드와 두 모바일 화면비의 카드 점유 미리보기 확인.\n\n### PBP-INV-012 — 배치 상태별 저장 또는 되돌리기 후 룬 이동\n\n- 날짜: 2026-08-24\n- 도메인: 장비 초안 / 룬 성장 진입 / 모바일 단계 단축\n- 변경 유형: changed\n- 이전 규칙: 저장하지 않은 장비 변경이 있으면 룬 보드 이동을 막고, 플레이어가 배치 화면으로\n  돌아가 저장 또는 되돌리기를 직접 끝낸 뒤 같은 아이템을 다시 찾아야 했습니다.\n- 새 유효 규칙: 배치가 정상일 때는 `저장하고 이동하기`, 정상이 아닐 때는\n  `배치를 되돌리고 이동하기`를 제공합니다. 공통으로 `배치로 돌아가기`가 있으며, 저장 성공\n  또는 마지막 저장 상태 복원 뒤 처음 선택한 아이템의 룬 보드로 바로 이동합니다.\n- 근거: 데이터 안전을 지키는 과정이 같은 아이템을 다시 찾는 반복 단계가 되어서는 안 되며,\n  저장 가능 여부는 시스템이 이미 알고 있으므로 다음 안전 행동을 직접 제시할 수 있습니다.\n- 의도한 사용자 경험: 변경 내용을 잃거나 잘못 저장하지 않으면서 한 번의 선택으로 장비 배치를\n  마무리하고 원하는 아이템의 룬 성장으로 이어 갑니다.\n- 범위와 제외: 장착 요약의 룬 보드 편집과 장비 초안 저장·되돌리기에 적용합니다. 룬 초안의\n  저장 규칙 자체는 바꾸지 않습니다.\n- 영향 소스: Screen.luau, test_inventory_v2_ui.py\n- 관련 위키: inventory-item-concept@v022\n- 검증과 증거: Galaxy A06에서 정상 초안의 저장 후 이동 팝업과 잠긴 칸 초안의 되돌리기 후\n  이동 팝업, 선택 아이템 보존과 서버 실패 시 보류 상태 정리 계약 검사.\n\n### PBP-UI-006 — 터치 영역별 보관함 의도와 기기 전체 인벤토리 집중층\n\n- 날짜: 2026-08-24\n- 도메인: 모바일 보관함 / 선택 피드백 / 화면 집중\n- 변경 유형: changed\n- 대체 대상: PBP-UI-004와 PBP-UI-005의 보관함 스크롤·드래그 중재 세부 규칙\n- 이전 규칙: 빠른 움직임과 길게 누르기로 스크롤·드래그를 나눴지만 카드 전체가 두 행동의\n  경쟁 영역이어서 스크롤 중 아이템이 들리거나, 이를 막은 뒤 아이템이 전혀 들리지 않는\n  상태가 반복됐습니다. 카드 등급 외곽선과 선택선도 비슷했고 안전 영역 밖에는 필드가 보였습니다.\n- 새 유효 규칙: 아이템 그림의 8px 이상 움직임은 즉시 드래그하고, 카드 여백·카드 사이의\n  0.4초 이내 세로 움직임은 스크롤합니다. 같은 시간 안의 가로 이탈은 취소하고 0.4초 이상\n  누른 뒤 움직이면 카드 어디서든 드래그합니다. 기본 외곽선은 얇은 중립색, 선택은 안쪽 라임색\n  선입니다. 별도 불투명 배경이 기기 전체를 덮고 뒤 입력을 막되 본체의 안전 영역은 유지합니다.\n- 근거: 한 영역에서 시간만으로 반대 행동을 모두 추측하는 것보다 플레이어가 직접 잡은 대상과\n  빈 공간의 의미를 보존해야 일관된 근육 기억이 생깁니다. 인벤토리 밖 필드 노출은 작업 화면의\n  집중과 완결성을 약화합니다.\n- 의도한 사용자 경험: 그림을 잡으면 즉시 장비가 들리고, 여백과 카드 사이를 밀면 안정적으로\n  목록이 움직이며, 선택 대상과 인벤토리 경계를 한눈에 이해합니다.\n- 범위와 제외: 모바일 장비 보관함의 터치 입력, 카드 외곽선과 인벤토리 전체 배경에 적용합니다.\n  PC 마우스 동등성과 게임 필드의 서버 동작은 변경하지 않습니다.\n- 영향 소스: ItemGesturePolicy.luau, Screen.luau, InventoryV2.spec.luau,\n  test_inventory_v2_ui.py\n- 관련 위키: inventory-item-concept@v022\n- 검증과 증거: Luau의 빠른 세로 스크롤·즉시 그림 잡기·0.4초 이후 드래그 경계, Galaxy A06와\n  iPhone 17 Pro의 카드 선택선·전체 화면 암막, iPhone 17 Pro 정사각 요약 20칸과 콘솔 오류\n  없음 확인.\n\n### PBP-RUNE-008 — 드래그 중 같은 등급 능력 칸의 실제 색 유지\n\n- 날짜: 2026-08-24\n- 도메인: 룬 보드 / 등급 가독성 / 드래그 안내\n- 변경 유형: changed\n- 이전 규칙: 룬을 들면 같은 등급의 열린 능력 아이콘은 남았지만 칸 바탕이 모두 같은 어두운\n  색으로 보여, 현재 룬 등급과 활성 영역의 관계를 색으로 읽을 수 없었습니다.\n- 새 유효 규칙: 같은 등급의 열린 능력 칸은 G0~G6의 실제 등급색과 아이콘을 함께 유지합니다.\n  유효 연결 칸은 라임색을 위에 표시하고 잠긴 칸은 경고색을 유지합니다.\n- 근거: 룬 보드의 핵심 판단은 현재 들고 있는 등급이 어떤 능력 영역을 사용할 수 있는지\n  비교하는 것이므로, 아이콘뿐 아니라 이미 학습한 등급색도 동시에 제공해야 합니다.\n- 의도한 사용자 경험: 룬을 드는 순간 같은 등급 영역을 색으로 훑고, 그중 실제로 놓을 수 있는\n  연결 칸을 라임색으로 즉시 구분합니다.\n- 범위와 제외: 룬 드래그 중 열린 능력 칸과 유효·잠금 안내에 적용합니다. 룬 생성 확률이나\n  능력 수치는 바꾸지 않습니다.\n- 영향 소스: RuneDragVisualState.luau, Screen.luau, InventoryV2.spec.luau\n- 관련 위키: inventory-item-concept@v022\n- 검증과 증거: G0 룬 드래그에서 먹빛 등급 칸 여덟 개와 라임 유효 칸 한 개를 Studio MCP로\n  확인하고, 열린·잠긴·유효 조합을 Luau와 Python 계약 검사로 확인.\n\n### PBP-MONSTER-001 — 첫 일반 몬스터의 서버 권위 상태 흐름\n\n- 날짜: 2026-08-25\n- 도메인: 몬스터 / 전투 AI / 서버 권위\n- 변경 유형: added\n- 이전 규칙: 실제로 추적하고 공격하는 공통 몬스터 런타임과 첫 기준 몬스터가 없었습니다.\n- 새 유효 규칙: 가시덩굴 화분괴물은 대기·추적·공격·귀환·죽음 상태를 사용하며 탐색, 경로,\n  공격 위치, 피해, 죽음과 정규 재생성은 서버가 결정합니다. 클라이언트는 상태를 표현만 합니다.\n- 근거: 첫 몬스터부터 피해 판정과 화면 표현을 분리해야 이후 몬스터가 늘어도 치트와\n  클라이언트 간 불일치를 막고 같은 상태 구조를 확장할 수 있습니다.\n- 의도한 사용자 경험: 몬스터가 플레이어를 안정적으로 발견하고 추적하며 공격 뒤 다시 행동하고,\n  화면과 실제 피해가 같은 사건으로 느껴집니다.\n- 범위와 제외: 첫 일반 풀속성 몬스터와 공통 상태 흐름에 적용합니다. 전리품·웨이브·보스 단계는\n  후속 범위입니다.\n- 영향 소스: monster-definitions.json, MonsterService.luau, MonsterVisualController.luau,\n  DamageResolver.luau\n- 관련 위키: grass-vine-monster@v001\n- 검증과 증거: MonsterDB 서버 권위 테스트 5개, Luau 컴파일, Studio Play 장판·분출 장면과\n  MonsterService 콘솔 오류 없음 확인.\n\n### PBP-MONSTER-002 — 2초 고정 위치 장판과 덩굴 분출\n\n- 날짜: 2026-08-25\n- 도메인: 몬스터 공격 / 회피 학습 / 전투 가독성\n- 변경 유형: added\n- 이전 규칙: 이 몬스터의 지면 공격 타이밍과 플레이어가 피할 수 있는 시각 계약이 없었습니다.\n- 새 유효 규칙: 공격 시작 순간의 플레이어 바닥 위치를 고정하고 빨간 원을 2초간 보여 준 뒤\n  같은 자리에서 덩굴을 분출합니다. 장판을 벗어나면 피하고 남아 있으면 피해와 넉백을 받습니다.\n- 근거: 피할 수 없는 추적 피해보다 원인·경고·결과가 같은 위치에 이어지는 공격이 첫 몬스터의\n  전투 학습에 적합합니다.\n- 의도한 사용자 경험: 덩굴손을 땅에 찌르는 자세와 빨간 원을 보고 즉시 이동해 분출을 피하며,\n  맞았을 때도 왜 맞았는지 이해합니다.\n- 범위와 제외: 가시덩굴 화분괴물의 목표 지점 고정 지면 공격에 적용합니다. 유도 장판이나\n  연속 다중 장판은 별도 공격 종류입니다.\n- 영향 소스: monster-definitions.json, MonsterService.luau, MonsterVisualController.luau\n- 관련 위키: grass-vine-monster@v001\n- 검증과 증거: Studio 최종 장판·분출 캡처, telegraph_duration_seconds=2 관계 검사와\n  서버 피해 경로 테스트.\n\n### PBP-MONSTERDB-001 — 몬스터 수치와 표현의 단일 편집 원본\n\n- 날짜: 2026-08-25\n- 도메인: 콘텐츠 운영 / 몬스터 밸런스 / 데이터베이스\n- 변경 유형: added\n- 이전 규칙: 몬스터의 전투·탐색·이동·표현 값을 한 곳에서 편집하고 런타임과 공개 DB를 같은\n  리비전으로 만드는 운영 경로가 없었습니다.\n- 새 유효 규칙: MonsterDB가 활성화, 정체성, 능력치, 탐색, 이동, AI, 공격, 스폰, 생명주기,\n  충돌, 표현과 애니메이션의 단일 원본입니다. 저장은 생성물을 함께 만들고 Studio 반영은\n  명시적인 굽기만 사용합니다.\n- 근거: 수치가 코드와 문서에 흩어지면 밸런스 변경이 누락되고, 웹 편집이 실행 중인 플레이를\n  자동으로 덮어쓰면 검증 경계가 사라집니다.\n- 의도한 사용자 경험: 기획자가 109개 값을 이름과 단위로 찾아 조정하고 같은 리비전의 웹·게임\n  결과를 예측 가능하게 검증합니다.\n- 범위와 제외: 몬스터 정의와 생성 런타임에 적용합니다. 전리품과 지역별 웨이브 DB는 포함하지\n  않습니다.\n- 영향 소스: monster-definitions.json, monster_db.py, monster-db.js,\n  GeneratedMonsterDefinitions.luau\n- 관련 위키: grass-vine-monster@v001, development-wiki\n- 검증과 증거: revision d0ad884e8183337d, 1개 몬스터·109개 변수 check 통과와 내장 브라우저\n  전체 편집기 경고·오류 0 확인.\n\n### PBP-DEV-002 — MonsterDB 기반 F2 선택 소환\n\n- 날짜: 2026-08-25\n- 도메인: Studio 진단 / 몬스터 검증\n- 변경 유형: added\n- 이전 규칙: 몬스터가 늘어날 때 공통 목록에서 고르고 플레이어 기준 위치에 즉시 소환하는\n  테스트 경로가 없었습니다.\n- 새 유효 규칙: F2 창은 게임 ON인 MonsterDB 항목을 자동으로 정렬해 나열하고 안정 ID로 서버에\n  요청합니다. 성공 시 캐릭터 정면 수평 10 stud에 세션 전용 몬스터를 만들며 정규 재생성은\n  하지 않습니다.\n- 근거: 몬스터마다 별도 명령어나 임시 스폰 코드를 만들면 콘텐츠가 늘수록 테스트 비용과\n  잘못된 ID·위치 입력이 함께 늘어납니다.\n- 의도한 사용자 경험: 개발자는 목록에서 이름을 보고 한 번 선택·소환해 추적과 공격을 바로\n  반복 검증합니다.\n- 범위와 제외: Roblox Studio F2 진단에만 적용하며 실제 플레이어용 UI나 배포 게임 소환\n  권한으로 노출하지 않습니다.\n- 영향 소스: DeveloperTestControls.luau, DeveloperTestWindow.luau,\n  DeveloperTestController.luau, MonsterService.luau, BackpackUIBootstrap.client.luau\n- 관련 위키: grass-vine-monster@v001\n- 검증과 증거: Studio MCP Play에서 액션 바인딩·기본 선택·서버 성공 응답,\n  SpawnSource=DeveloperF2, 거리 10.0·정면 내적 1.0 확인.\n\n### PBP-ART-004 — 최초 생성부터 실제 알파인 게임용 래스터\n\n- 날짜: 2026-08-25\n- 도메인: 아트 제작 / 이미지 자산 / 투명 배경\n- 변경 유형: added\n- 이전 규칙: 마젠타 등 키 색 배경을 가진 이미지를 만든 뒤 제거·재가공하는 공정이 게임용\n  아이콘과 애니메이션 자산 제작에 사용될 수 있었습니다.\n- 새 유효 규칙: 게임에 직접 합성할 아이콘, 캐릭터·몬스터 프레임, 스프라이트와 잘라 쓰는\n  이펙트는 최초 유효 생성부터 실제 투명 배경을 요청합니다. 크로마키 중간 이미지는 금지하고\n  알파·투명 픽셀·가장자리 오염을 검사한 뒤 승격합니다.\n- 근거: 색 키 제거는 잎·광택·외곽선 같은 유효 색을 손상시키고 키 색 후광과 불필요한 재작업을\n  만듭니다. 원천 알파는 가장 짧고 재현 가능한 제작 경로입니다.\n- 의도한 사용자 경험: 게임 안에서 캐릭터와 아이콘 가장자리가 배경색에 오염되지 않고 어떤\n  필드·UI 위에서도 깨끗하게 합성됩니다.\n- 범위와 제외: 새 게임용 래스터 자산에 적용합니다. 승인된 기존 자산은 재생성 요청 전까지\n  유지하고, 콘셉트·전체 장면·스크린샷처럼 의도적으로 불투명한 이미지는 제외합니다.\n- 영향 소스: AGENTS.md, create-2d-sprite-animation workflow, future image-generation prompts\n- 관련 위키: grass-vine-monster@v001, character-2d-rendering, inventory-item-concept\n- 검증과 증거: 가시덩굴 화분괴물의 1024×128 런타임 아틀라스 네 개 모두 hasAlpha=yes 확인.\n\n### PBP-MONSTER-003 — 한 발 도장 몬스터의 세 단계 도약 찍기\n\n- 날짜: 2026-08-25\n- 도메인: 몬스터 / 전투 가독성 / 애니메이션\n- 변경 유형: added\n- 이전 규칙: 한 발로 이동하고 높이 도약해 바닥을 찍는 몬스터의 정체성, 동작 분리와 피해\n  동기화 기준이 없었습니다.\n- 새 유효 규칙: 도장발 쿵귀는 중앙 스프링 하나와 도장처럼 넓은 발 하나만 사용합니다. 평소에는\n  같은 발로 통통 튀고, 공격은 목표 지점 고정 뒤 준비·공중·접지 세 단계로 진행합니다. 접지\n  애니메이션의 첫 충돌 프레임은 피해, 충격 이펙트와 화면 흔들림이 함께 시작되는 공통 사건입니다.\n- 근거: 두 발이나 별도 다리처럼 읽히는 실루엣은 몬스터의 핵심 개성을 흐리고, 도약·피해·효과가\n  서로 다른 시점에 나오면 플레이어가 피격 원인을 이해하기 어렵습니다.\n- 의도한 사용자 경험: 한 발로 통통 튀는 모습을 보고 몬스터를 즉시 구분하며, 크게 움츠린 뒤\n  날아오는 궤적을 읽고 착지 충격을 피합니다. 맞았을 때는 발이 닿는 순간과 피해가 정확히\n  일치한다고 느낍니다.\n- 범위와 제외: 이번 커밋은 콘셉트, Idle·HopMove·준비·공중·접지·피격·죽음·충격 아틀라스와\n  구현 인계 문서를 확정합니다. Roblox 업로드, MonsterDB 등록과 서버 공격 구현은 후속 범위입니다.\n- 영향 소스: stampfoot_leaper_anchor_v1.png, StampfootLeaper runtime atlases,\n  atlas-metadata.json, stampfoot-leaper-implementation-handoff.md\n- 관련 위키: stampfoot-leaper@v001\n- 검증과 증거: 콘셉트와 여덟 런타임 아틀라스에서 중앙 스프링 하나·발 하나를 육안 확인하고,\n  이미지 크기와 프레임 수를 메타데이터 계약과 대조했습니다.\n\n### PBP-ART-005 — 최종 런타임 자산만 Git에 보존\n\n- 날짜: 2026-08-25\n- 도메인: 아트 제작 / 저장소 운영 / 런타임 자산\n- 변경 유형: added\n- 이전 규칙: 최초 생성부터 실제 알파를 쓰는 원칙은 있었지만, 생성 과정의 원본·개별 프레임·\n  검토 이미지 중 무엇을 제품 저장소에 남길지 정한 보존 규칙은 없었습니다.\n- 새 유효 규칙: 게임에 직접 쓰는 128px 투명 아틀라스와 승인된 콘셉트만 Git에 보존합니다.\n  마젠타 원본, 개별 프레임, 고해상도 마스터, 검토용 그리드와 QA 중간물은 커밋하지 않으며,\n  프레임 수·재생 속도·방향·해시는 최종 아틀라스 옆 메타데이터에 기록합니다.\n- 근거: 중간 산출물까지 제품 저장소에 쌓이면 실제 사용 파일을 찾기 어렵고 저장소 용량과\n  잘못된 파일 업로드 위험이 함께 커집니다.\n- 의도한 사용자 경험: 개발자는 런타임 폴더에서 바로 게임에 넣을 파일만 보고 사용할 수 있으며,\n  마젠타 원본이나 검토 이미지를 실수로 배포하지 않습니다.\n- 범위와 제외: 도장발 쿵귀의 이번 자산 묶음부터 적용하며, 승인되어 이미 사용 중인 기존 자산을\n  소급 삭제하지 않습니다. 위키가 최종 동작을 설명하기 위해 복제한 같은 런타임 이미지는\n  문서 증거로 허용합니다.\n- 영향 소스: Assets/Monsters/Runtime/StampfootLeaper/, atlas-metadata.json,\n  wiki/content/media/stampfoot-leaper/v001/\n- 관련 위키: stampfoot-leaper@v001\n- 검증과 증거: 작업 공간에서 StampfootLeaper 후보·마젠타·개별 프레임 디렉터리를 제외하고,\n  최종 콘셉트 한 장과 투명 런타임 아틀라스 여덟 장만 제품 경로에 남겼습니다. Pillow 검사에서\n  실제 투명 픽셀을 확인하고 부분 알파 마젠타와 완전 투명 픽셀의 RGB 오염은 0건이었습니다.\n",
          "source_path": "wiki/content/pages/product-planning-change-log/v015.md",
          "timeline_order": 47
        },
        {
          "id": "product-planning-change-log",
          "title": "제품 기획 변경 원장",
          "summary": "누적 원장을 보존하면서 첫 서버 권위 몬스터, 2초 장판 회피 공격, MonsterDB, F2 선택 소환과 게임용 이미지의 최초 알파 투명 생성 원칙을 새 유효 규칙으로 추가했습니다.",
          "status": "active",
          "category": "planning",
          "tags": [
            "planning",
            "decision-log",
            "product",
            "inventory",
            "equipment",
            "rune-board",
            "weapon",
            "combat",
            "mobile",
            "documentation",
            "character",
            "animation",
            "monster",
            "monster-db",
            "transparent-background",
            "testing",
            "touch",
            "responsive"
          ],
          "created_at": "2026-08-15",
          "updated_at": "2026-08-25",
          "authors": [
            "Codex"
          ],
          "version": 14,
          "change_type": "updated",
          "change_summary": "v013까지의 누적 결정을 보존하고, 가시덩굴 화분괴물의 서버 전투·MonsterDB·F2 테스트 소환과 게임용 래스터의 최초 알파 투명 생성 규칙을 추가했습니다.",
          "supersedes": "product-planning-change-log@v013",
          "sources": [
            "wiki/content/pages/product-planning-change-log/v013.md",
            "wiki/content/pages/grass-vine-monster/v001.md",
            "docs/gameplay/monster-definitions.json",
            "AGENTS.md",
            "src/ServerScriptService/MonsterService.luau",
            "src/ReplicatedStorage/BackpackUI/DeveloperTestController.luau",
            "wiki/content/media/grass-vine-monster/v001/studio-attack-telegraph.jpg",
            "wiki/content/media/grass-vine-monster/v001/studio-vine-eruption.jpg",
            "wiki/content/media/grass-vine-monster/v001/studio-f2-monster-console.jpg",
            "wiki/content/media/grass-vine-monster/v001/monsterdb-editor.jpg",
            "wiki/content/pages/inventory-item-concept/v022.md",
            "docs/gameplay/inventory-item-layouts.json",
            "src/ReplicatedStorage/BackpackUI/GeneratedItemLayouts.luau",
            "src/ReplicatedStorage/InventoryV2/ItemGesturePolicy.luau",
            "src/ReplicatedStorage/InventoryV2/RuneDragVisualState.luau",
            "src/ReplicatedStorage/InventoryV2/Screen.luau",
            "tests/InventoryV2.spec.luau",
            "tests/test_inventory_v2_ui.py",
            "tests/test_item_db.py",
            "wiki/content/media/inventory-item-concept/v022/studio-default-backdrop-cards-galaxy-a06.jpg",
            "wiki/content/media/inventory-item-concept/v022/studio-selected-rotated-card-galaxy-a06.jpg",
            "wiki/content/media/inventory-item-concept/v022/studio-save-and-rune-move-popup-galaxy-a06.jpg",
            "wiki/content/media/inventory-item-concept/v022/studio-revert-and-rune-move-popup-galaxy-a06.jpg",
            "wiki/content/media/inventory-item-concept/v022/studio-rune-grade-drag-galaxy-a06.jpg"
          ],
          "related": [
            "grass-vine-monster",
            "weapon-combat-presentation",
            "inventory-item-concept",
            "synergy-icon-system",
            "backpack-combat-stat-database",
            "development-wiki",
            "character-2d-rendering",
            "project-overview"
          ],
          "validation": [
            "python3 -m unittest discover -s tests -p 'test_*.py': 147 tests passed",
            "./tools/test_inventory_v2.sh: InventoryV2.spec ok",
            "python3 -m unittest tests.test_monster_db -v: 5 tests passed",
            "./tools/test_backpack_ui.sh: passed; F2 monster selector contract included",
            "node tests/monster-db.spec.js: MonsterDB JavaScript tests passed",
            "node tests/item-db.spec.js: Wiki ItemDB tests passed",
            "python3 tools/monster_db.py check: revision d0ad884e8183337d, 1 monster 통과",
            "python3 tools/item_db.py check: 48 items, revision 8fb41028ba82d814 통과",
            "Roblox Studio MCP Play: F2 selected grass_vine_monster, server response success, 10.0 stud forward distance and 1.0 facing dot confirmed",
            "Built-in browser localhost: MonsterDB 1 monster, 109 editable variables, editor modal and warning/error 0 confirmed",
            "sips: four runtime atlases 1024×128, hasAlpha=yes",
            "python3 tools/wiki.py build && python3 tools/wiki.py check: 11 pages, 73 revisions, 108 media files 통과",
            "git diff --check: 통과"
          ],
          "body": "# 제품 기획 변경 원장\n\n## 목적과 기록 원칙\n\n이 페이지는 구현 파일 목록이 아니라 ProjectBackpack의 제품 방향이 왜 바뀌었고 지금 어떤\n규칙이 유효한지를 누적 보존합니다. 플레이어 또는 운영자가 경험하는 제품·게임플레이·UX·\n콘텐츠·아트·플랫폼 규칙이 추가, 변경, 대체 또는 폐기될 때 기록합니다. 동작을 바꾸지 않는\n내부 리팩터링은 원장 대상이 아닙니다.\n\n각 결정은 안정적인 ID를 가집니다. 이후 규칙이 달라지면 이미 커밋된 항목을 고치거나 지우지\n않고 새 버전에 후속 항목을 추가해 이전 ID와 관계를 명시합니다. 최신 버전은 과거 원장과\n현재 유효 규칙을 모두 포함하며, 실제 제품 변경·주제별 위키·검증 증거와 같은 커밋에서\n발행합니다.\n\n## 현재 유효 규칙\n\n### PBP-INV-001 — 인벤토리에는 명확한 이탈과 호환 토글이 있다\n\n모바일 인벤토리는 우측 최상단 닫기 버튼으로 메인 화면에 복귀합니다. PC 호환 경로의 Tab\n토글은 진단 호환으로 남지만 현재 제품 UI 완료 기준은 모바일입니다.\n\n### PBP-ITEMDB-002 — 최종 48종이 ItemDB와 런타임의 단일 활성 집합이다\n\n과거 90종과 특수 아이템 미디어는 활성 원본·공개 DB·생성 런타임에서 제거합니다. 무기 14종과\n방어구·장신구 34종의 이름, 사각 점유, 카툰 아이콘과 Roblox 자산 참조를 ItemDB 원본에서\n생성하며 ON/OFF 경계는 향후 콘텐츠 운영을 위해 유지합니다.\n\n### PBP-ITEMDB-003 — ItemDB 원화 배치는 모든 장비 화면의 단일 시각 기준이다\n\n웹 ItemDB에서 확정한 그림 배율, X/Y 중심 보정과 기본 회전을 보관 카드·배치판·드래그 그림이\n같이 사용합니다. 보관 카드에는 회전된 실제 점유 칸을 그림 아래에 표시하며, ItemDB를 바꾸면\n공개 DB와 생성 런타임을 같은 리비전으로 다시 만들고 Studio에서 함께 확인합니다.\n\n### PBP-CONTENT-001 — 폐기 아이템은 모든 제품 표면에서 함께 제거한다\n\n아이템을 실제로 폐기할 때는 카탈로그·레이아웃·이미지·런타임·공개 DB에서 함께 제거하고\n매니페스트 이력만 보존합니다.\n\n### PBP-DOC-001 — 기획 변경은 커밋 시 누적 원장으로 발행한다\n\n물질적인 제품 기획 변경은 사용자 승인 커밋에서 안정적인 ID와 함께 누적 발행합니다.\n\n### PBP-ACTION-002 — Dash는 3단계 자세와 이동 구간 잔상을 사용한다\n\n기본 Dash의 방향 잠금·0.30초·20스터드 규칙은 유지하되, 시작 프레임 고정은 예비 0.05초·\n이동 0.20초·회복 0.05초의 통짜 캐릭터 자세로 대체합니다. 잔상은 이동 구간에서만 실제\n경로 뒤에 생기고 회복 구간에서 본체로 수렴합니다. 룬의 추가 거리와 무적시간은 기존 한도\n안에서 별도 적용합니다.\n\n### PBP-ART-003 — 정지 캐릭터는 발이 고정된 좌우 호흡을 사용한다\n\nIdle은 마지막 좌우 방향을 유지하는 8프레임 6fps 통짜 캐릭터 애니메이션입니다. 발과 골반\n아래는 고정하고 상체의 들숨·날숨만 움직이며, 캐릭터 전체를 균일 확대·축소하지 않습니다.\n\n### PBP-INV-010 — 장비 배치는 전체 초안으로 검토하고 원자 저장한다\n\n아이템 추가·이동·회전·보관은 마지막 저장 상태와 분리된 전체 초안을 갱신합니다. 겹친 장비는\n가장 가까운 빈자리로 밀어 전체 결과를 미리 보여 주며, 잠금·한도·무게 등 잘못된 상태는 빨간\n초안으로 남기되 저장을 끕니다. 서버는 전체 좌표를 다시 검증해 모두 유효할 때만 한 번에\n교체하고 되돌리기는 마지막 저장 상태를 복원합니다.\n\n### PBP-UI-004 — 모바일 장비 조작은 선택·길게 누르기·세로 보관함을 사용한다\n\n짧은 탭은 선택만 하고 선택된 아이템에 회전 버튼을 노출합니다. 움직이지 않은 길게 누르기는\n룬 페이지와 상세 정보 메뉴를 열며, 움직임이 생기면 스크롤 또는 드래그로 전환합니다. 보관함은\n세로 다열 그리드이고 실제 아이템 그림과 점유 가이드는 같은 스냅 위치를 사용합니다.\n\n### PBP-INV-011 — 장착 요약은 배치 순서와 부위 상태를 즉시 관리한다\n\n유효하게 배치된 무기는 장착판에 들어온 순서를 보존해 왼쪽부터 최대 여섯 칸에 표시합니다.\n무기가 아닌 장비는 머리·귀걸이·목걸이·상의·장갑·하의·벨트·반지 둘·신발의 열 칸에\n표시합니다. 채워진 요약 칸은 아이템 이름·등급·공격력·공격 속도와 상세 정보, 룬 보드 편집,\n보관함으로 이동의 세 작업을 같은 문맥에서 제공합니다.\n\n### PBP-INV-012 — 배치 변경 상태에서도 한 번의 선택으로 룬 보드에 이동한다\n\n룬 보드 편집을 누를 때 장비 초안이 정상이라면 `저장하고 이동하기`, 정상이 아니라면\n`배치를 되돌리고 이동하기`를 보여 줍니다. 두 경우 모두 `배치로 돌아가기`로 취소할 수 있고,\n서버 저장 성공 또는 마지막 저장 상태 복원 뒤 처음 선택한 아이템의 룬 보드로 바로 이동합니다.\n\n### PBP-UI-005 — 모바일 장비 화면은 배치판 중심의 안정적인 작업대다\n\n가운데 배치판, 아래 여섯 무기, 오른쪽 도구와 부위별 장비를 한 화면에 둡니다. 요약 칸은\n해상도에 맞춰 정사각형으로 축소되고 자체 스크롤을 만들지 않으며, 저장·되돌리기는 화면 위에\n떠서 다른 영역을 줄이지 않습니다. 확대판은 보이는 스크롤바 없이 직접 끌어 움직입니다.\n배치 아이템 위의 움직임은 0.3초 이내면 확대판 이동, 0.3초 이상 1초 미만이면 아이템 이동으로\n판정하고, 1초 동안 정지했을 때만 메뉴 게이지를 시작합니다. 보관함 드래그가 확정되면 보관함\n스크롤을 잠그며 아이템 그림은 손가락 위로 34px만 띄웁니다.\n\n### PBP-UI-006 — 보관함은 터치 영역별 의도를 보존하고 인벤토리는 기기 전체에 집중층을 둔다\n\n아이템 그림에서 8px 이상 움직이면 즉시 장비를 들고, 카드 여백과 카드 사이의 0.4초 이내\n세로 움직임은 목록을 스크롤합니다. 0.4초 이내 가로 이탈은 취소하고 0.4초 이상 누른 뒤\n움직이면 카드 어디서든 장비를 듭니다. 모든 기본 카드 외곽선은 얇은 중립색이고 선택 카드만\n안쪽 라임색 선으로 구분합니다. 인벤토리 본체는 모바일 안전 영역을 유지하되 별도 짙은 배경이\n기기 전체를 덮어 필드 노출과 뒤쪽 입력을 막습니다.\n\n### PBP-DOC-002 — 커밋 위키는 비개발자 기획 서사와 충분한 화면 증거를 요구한다\n\n위키는 무엇이·왜·어떻게 달라졌는지와 사용자 경험을 먼저 설명하고 구현 세부는 뒤의 증거로\n둡니다. 눈에 보이는 변화는 기능을 이해하는 데 필요한 기본·선택·확장·성공·실패 상태를 실제\nStudio 또는 브라우저에서 캡처하며, 이미 커밋된 버전과 증거는 덮어쓰지 않습니다.\n\n### PBP-DEV-001 — Studio 무게 제한 테스트는 세션 전용이다\n\n기존 Studio 진단값은 영구 저장을 오염시키지 않습니다. 새 인벤토리 구현에서 무게 시스템을\n유지할지는 별도 결정하지만 진단 데이터 비영구 원칙은 유지합니다.\n\n### PBP-INV-009 — 메인 인벤토리는 사각 장착판과 부위별 제한을 사용한다\n\n유효한 사각 배치가 곧 장착입니다. 무기는 여섯 개, 반지는 두 개이며 같은 정의의 무기·반지는\n중복할 수 없습니다. 머리·귀걸이·목걸이·상의·하의·글러브·신발·벨트는 한 개씩 장착하고\n디아블로식 장비 화면은 같은 상태를 투영합니다.\n\n### PBP-SYNERGY-001 — 가방·시너지 제품 방향은 폐기한다\n\n가방 활성 칸, 육각 메인 인벤토리, 26종 시너지, 시너지 필터와 A/B/C 공간 접촉 효과는 새\n제품 방향에서 사용하지 않습니다. 육각형은 아이템별 룬 보드에만 사용합니다.\n\n### PBP-CONTENT-003 — 알파 장비 활성 집합은 48종이다\n\n무기 14종과 방어구·장신구 34종을 사용합니다. 크기별 두 역할을 두고 반지는 동일 아이템\n중복 금지로 인한 강제 조합을 피하기 위해 네 종류를 둡니다. 특수 아이템과 방패는 현재 48종에\n포함하지 않습니다.\n\n### PBP-RUNE-004 — 아이템마다 후보 10개 중 하나인 427칸 보드를 가진다\n\n각 아이템 정의는 61칸 영역 일곱 개, 총 427칸인 후보 보드 10개를 가집니다. 생성 시 하나를\n균등 선택해 VariantId와 Seed를 영구 저장합니다. 0~6 주등급은 영역을 하나씩 열고, 일곱\n중앙 시작점의 색 등록과 한 칸 간격 연결을 사용합니다. 능력 등급 총량은\n30·45·54·60·67·90·81칸이며 레어는 황금 테두리로 구분합니다.\n\n### PBP-COMBAT-001 — 자동 스킬·방어·확률에는 명시적 캡이 있다\n\n무기 스킬은 해당 무기의 기본 공격 횟수로 자동 발동하고 발사체·도탄·관통·다른 스킬은\n카운터를 늘리지 않습니다. 방패 막기는 최대 100%에서 방어력을 두 배로 적용하고, 방어력\n계산 뒤 최종 피해감소는 최대 50%입니다. 행동 빈도·확률·무적·발사체 수에는 항목별 캡을\n적용하되 선형 공격력·체력 성장은 허용합니다.\n\n### PBP-COMBAT-003 — 여섯 무기는 근접 할로에서 하나의 최근접 적을 정확히 겨눈다\n\n최대 여섯 장착 무기는 머리 가까운 좁은 타원의 왼쪽 세 개·오른쪽 세 개에 같은 간격으로\n배치하며 정중앙 위·아래는 비웁니다. 적이 없을 때는 원화 방향을 유지한 채 각자 부유합니다.\n적이 있으면 장착 집합이 사거리 안의 가장 가까운 생존 적 하나를 공통 후보로 고르고, 각 무기는\n자기 사거리 안에서 실제 칼끝·타격점·총구·화살·볼트 발사 방향을 그 적에게 맞춥니다. 오른쪽을\n기본 방향으로 그린 원거리 무기가 왼쪽을 볼 때는 거꾸로 돌리지 않고 수평 반전하며 회전축과\n공격 소켓도 함께 반전합니다. 서버 권위 표적·피해와 여섯 공격 계열은 유지합니다.\n\n### PBP-RUNE-003 — 알파 무기 14종은 고정된 능력 정체성을 가진다\n\n검·창·곡궁·석궁·총·메이스·도끼 각 두 종류는 A1~D2와 E1~E3의 실제 구현 훅을 가집니다.\n목걸이·반지·귀걸이는 호환 무기 전체에 적용되는 전역 레어를, 신발은 추가 대시 레어를\n제공합니다.\n\n### PBP-RUNE-005 — 룬은 34종 도형과 effect 기반 아이콘을 사용한다\n\n1~5칸 룬은 회전·반전을 동일시한 34종 자유 폴리헥스를 사용합니다. 일곱 색은 같은 중립 원화를\n틴트하고, 능력 의미는 실제 전투 effect_id와 1:1인 62종 중앙 아이콘으로 별도 합성합니다.\n드래그는 잡은 칸과 실제 형태를 유지하고 마지막 스냅 가이드를 서버 요청값으로 사용합니다.\n\n### PBP-RUNE-006 — 룬 등급·색·시작점은 일대일이며 배치는 회전만 사용한다\n\nG0~G6 룬은 먹빛·상아·초록·하늘·보라·황금·장미와 일대일입니다. 각 룬은 같은 번호 영역의\n중앙 시작점에서만 처음 등록하고 아이템 등급보다 높은 룬은 등록할 수 없습니다. 런타임 배치는\n60° 회전만 제공하고 별도 반전은 제공하지 않습니다. 첫 배치 전에는 중앙 한 칸, 이후에는 같은\n색 네트워크에서 한 칸 떨어진 연결 전선만 밝게 안내합니다.\n\n### PBP-UI-001 — 인벤토리와 룬 보드는 모바일 고정 작업 흐름을 공유한다\n\n상단 상태, 중앙 작업판, 하단 보관함을 안전 영역 안에 고정합니다. 아이템·룬 합성은 두 재료와\n결과 미리보기 문법을 공유하고 룬 보관함은 상하 스크롤을 사용합니다. 빈 룬 칸의 탭은 상단\n중앙에 능력 정보를 표시합니다.\n\n### PBP-UI-002 — 룬 보드는 문맥을 보존하고 필터는 카드 공간을 침범하지 않는다\n\n장착 룬 회전은 마지막 선택 룬에만 적용하고 확대·축소는 보고 있던 보드 위치를 보존합니다.\n룬 보관함은 `색상 필터`와 `칸 수 필터` 두 버튼만 한 줄에 두며, 보드 위 말풍선에서 G0~G6와\n1~5칸을 각각 다중 선택합니다. 능력 설명은 색상명을 반복하지 않고 옅은 황금색 글자·짙은\n보라색 외곽선으로 등급·능력명·수치를 표시합니다.\n\n### PBP-RUNE-007 — 룬 배치는 전체 초안으로 편집하고 원자적으로 저장한다\n\n룬 추가·이동·회전·회수는 마지막 저장 상태와 분리된 전체 초안을 갱신합니다. 규칙에 어긋난\n룬도 빨간 상태로 계속 편집할 수 있지만 저장은 비활성화됩니다. 서버는 전체 배치를 다시\n검증해 유효할 때만 한 번에 교체하며, 되돌리기는 마지막 저장 상태를 복원합니다. 같은 색\n네트워크는 변을 맞대지 않고 정확히 한 칸 간격을 두며 배치 순서와 무관하게 판정합니다.\n\n### PBP-RUNE-008 — 룬 드래그는 같은 등급의 열린 능력 칸을 실제 등급색으로 보여 준다\n\n룬을 들면 같은 등급의 열린 능력 칸과 아이콘을 G0~G6의 먹빛·상아·초록·하늘·보라·황금·\n장미색으로 표시합니다. 유효 연결 칸의 라임색은 등급색보다 위에 보이고, 잠긴 영역은 같은\n등급처럼 보이지 않게 경고색을 유지합니다.\n\n### PBP-UI-003 — 룬 보드는 현재 조작 문맥과 잠금 이유를 한 화면에 보여 준다\n\n보관 카드와 배치 룬을 모두 선택·60° 회전할 수 있고, 배치 룬은 이동하거나 보관함으로 회수할\n수 있습니다. 가이드는 현재 잡은 셀·회전·전체 배치를 기준으로 계산하며 유효 칸은 라임색,\n아이템 등급으로 닫힌 칸은 탁한 적갈색, 무효 초안은 빨간색으로 표시합니다. 기존 배치와 같은\n색 능력 아이콘은 드래그 중에도 남깁니다. 벌집은 틈 없는 얇은 선, 룬은 색이 비치는 투명\n크리스털 프레임을 사용하고, 전체 필터는 일부 OFF면 모두 ON·모두 ON이면 모두 OFF로\n동작합니다. 룬 각인 효과 탭은 유효 노드를 효과별로 합산합니다.\n\n### PBP-COMBAT-004 — 인벤토리 작업 중 필드 공격 연출을 일시 정지한다\n\n인벤토리나 룬 작업 화면이 열리면 클라이언트 공격 연출을 즉시 지우고 새 연출을 받지 않으며\n전투 VFX 오버레이를 끕니다. 화면을 닫으면 표현만 다시 허용합니다. 서버 표적·공격·피해와\n장착 상태는 바꾸지 않습니다.\n\n### PBP-ART-002 — 아이템은 사각 점유와 모바일 전투에 맞는 카툰 실루엣을 사용한다\n\n최종 48종 원화는 굵고 밝은 카툰풍으로 통일합니다. 근접 무기는 위쪽, 활·석궁·총은 오른쪽을\n기본 방향으로 두고 발사체와 궤적을 원화에 굽지 않습니다. 그림의 질량과 돌출부가 사각 점유\n형태에 자연스럽게 맞아야 합니다.\n\n### PBP-MONSTER-001 — 첫 일반 몬스터는 서버 권위 상태 흐름을 사용한다\n\n가시덩굴 화분괴물은 대기·추적·공격·귀환·죽음 상태를 가지며 탐색, 이동, 공격 위치, 피해와\n재생성은 서버가 결정합니다. 클라이언트는 복제된 상태와 시간을 읽어 좌·우 스프라이트와\n효과만 표시합니다.\n\n### PBP-MONSTER-002 — 빨간 장판은 위치를 고정하고 2초 뒤 분출한다\n\n공격 시작 순간의 플레이어 바닥 위치를 고정해 빨간 원을 2초간 보여 준 뒤 같은 자리에서\n덩굴을 솟구치게 합니다. 플레이어가 장판 밖으로 움직이면 피하고, 남아 있으면 피해와 넉백을\n받습니다.\n\n### PBP-MONSTERDB-001 — MonsterDB가 몬스터 조정값의 단일 원본이다\n\n활성화, 정체성, 전투 능력치, 탐색, 경로, AI, 공격, 스폰, 생명주기, 충돌, 표현과 애니메이션을\n한 원본에서 편집합니다. 저장은 웹과 Roblox 생성 정의를 함께 갱신하며 열린 Studio 반영은\n명시적 굽기만 허용합니다.\n\n### PBP-DEV-002 — F2는 MonsterDB 목록에서 선택해 정면 10 stud에 소환한다\n\nStudio 전용 F2 도구는 게임 ON 몬스터를 자동으로 나열하고 선택한 안정 ID를 서버에 보냅니다.\n서버 검증을 통과하면 캐릭터가 보는 수평 방향 10 stud에 세션 전용 몬스터를 만들며, 이 소환은\n정규 스폰 수와 재생성을 오염시키지 않습니다.\n\n### PBP-ART-004 — 게임용 래스터는 첫 생성부터 실제 알파 배경을 사용한다\n\n아이콘, 캐릭터·몬스터 애니메이션, 스프라이트와 잘라 쓰는 이펙트는 최초 유효 출력부터\n투명 배경이어야 합니다. 마젠타·초록 키 배경을 만들고 제거하는 공정은 폐기하며, 알파 채널과\n실제 투명 픽셀, 가장자리 키 색 번짐·후광 부재를 확인한 뒤 승격합니다. 의도적으로 불투명한\n콘셉트와 전체 장면 이미지는 제외합니다.\n\n## 변경 원장\n\n### PBP-INV-001 — 인벤토리 이탈과 Tab 토글\n\n- 날짜: 2026-08-15\n- 도메인: 인벤토리 접근성 / 플랫폼 입력\n- 변경 유형: changed\n- 이전 규칙: 화면 내부 닫기 버튼과 명확한 PC 토글 경로가 없었습니다.\n- 새 유효 규칙: 모바일 우측 최상단 닫기 버튼을 두고 PC 호환 시 Tab을 인벤토리 전용\n  토글로 사용하며 기본 플레이어 목록을 해제합니다.\n- 근거: 작업 화면에는 안전한 이탈 경로가 필요하며 한 입력이 두 UI를 열면 안 됩니다.\n- 의도한 사용자 경험: 닫는 법을 탐색하지 않고 즉시 메인 화면으로 돌아갑니다.\n- 범위와 제외: 모바일 터치와 PC 입력 호환에 적용하며 PC 레이아웃 품질은 제외합니다.\n- 영향 소스: Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: Luau 테스트, 소스 검사와 최종 Studio 모바일 화면.\n\n### PBP-INV-002 — 배치 보드 범위와 도구 배치\n\n- 날짜: 2026-08-15\n- 도메인: 모바일 배치 보드 / 공간 가독성\n- 변경 유형: changed\n- 이전 규칙: 빈 배치 영역과 우측 도구의 공간 관계가 충분히 드러나지 않았습니다.\n- 새 유효 규칙: 전체 배치 영역에 옅은 육각 격자를 그리고 우측 상단 모드 탭과 우측 하단\n  확대 도구를 위한 반응형 인셋을 둡니다.\n- 근거: 빈 공간도 게임 공간이며 조작 계층과 동시에 보여야 합니다.\n- 의도한 사용자 경험: 배치 가능 범위와 도구 위치를 즉시 이해합니다.\n- 범위와 제외: 모바일 보드와 모드·확대 도구에 적용합니다.\n- 영향 소스: VisualTokens.luau, ScreenRenderer.luau, ScreenState.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: iPhone 17 Pro와 Galaxy A06 Studio Play의 잘림·겹침 검사.\n\n### PBP-INV-003 — 손가락 위 드래그와 단일 목적지 안내\n\n- 날짜: 2026-08-15\n- 도메인: 인벤토리 드래그 / 배치 피드백\n- 변경 유형: changed\n- 이전 규칙: 아이템이 포인터 아래에 남고 여러 강조가 목표 칸과 경쟁했습니다.\n- 새 유효 규칙: 회전된 그림 전체를 포인터 위로 올리고 그림과 목적지 외곽선만 표시합니다.\n- 근거: 드래그 중에는 대상과 내려놓을 위치가 가장 강하게 읽혀야 합니다.\n- 의도한 사용자 경험: 손가락에 가리지 않은 그림으로 정확히 조준합니다.\n- 범위와 제외: 아이템 드래그에 적용하며 그림이 없는 가방은 점유 형태를 사용합니다.\n- 영향 소스: DragPlacementState.luau, Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 포인터 리프트·잡은 칸·outline-only Luau 테스트.\n\n### PBP-INV-004 — 카드·선택 정보와 0.1Kg 정밀도\n\n- 날짜: 2026-08-15\n- 도메인: 아이템 정보 구조 / 무게 규칙\n- 변경 유형: changed\n- 이전 규칙: 무게 표현과 시너지 정렬이 좁은 카드에서 일관되지 않았습니다.\n- 새 유효 규칙: x.xKg 표시와 0.1Kg 판정을 통일하고 시너지를 카드 가운데 정렬합니다.\n- 근거: 화면 표시와 게임 판정은 같은 값을 사용해야 합니다.\n- 의도한 사용자 경험: 좁은 카드에서 핵심 정보와 초과 이유를 빠르게 이해합니다.\n- 범위와 제외: 저장 카드, 선택 정보, 합계와 허용 판정에 적용합니다.\n- 영향 소스: WeightEvaluator.luau, ItemInstanceHydrator.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013, backpack-combat-stat-database\n- 검증과 증거: 무게 양자화·형식·허용 판정 테스트와 카드 소스 검사.\n\n### PBP-INV-005 — 필터와 배치 모드의 직접 연결\n\n- 날짜: 2026-08-15\n- 도메인: 보관함 탐색 / 모드 전환\n- 변경 유형: changed\n- 이전 규칙: 종류 필터와 배치 탭을 따로 바꿔야 했습니다.\n- 새 유효 규칙: 가방 필터는 가방 배치로, 다른 필터는 아이템 배치와 해당 종류로 이동합니다.\n- 근거: 보관함 종류 선택은 다음 배치 대상의 선택입니다.\n- 의도한 사용자 경험: 한 번의 터치로 원하는 목록과 배치 모드에 도달합니다.\n- 범위와 제외: 일반 종류 필터 다섯 개와 배치 모드 연동에 적용합니다.\n- 영향 소스: ScreenState.luau, Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 모드별 필터 상태 Luau 테스트.\n\n### PBP-INV-006 — 시너지·칸 수 고급 필터\n\n- 날짜: 2026-08-15\n- 도메인: 보관함 고급 탐색 / 모바일 UI\n- 변경 유형: added\n- 이전 규칙: 종류 외의 시너지와 점유 칸 범위를 직접 좁힐 수 없었습니다.\n- 새 유효 규칙: 별도 고급 필터에서 26종 시너지 토글과 1~9 칸 범위를 설정합니다.\n- 근거: 조합과 공간 효율은 종류와 독립적인 탐색 기준입니다.\n- 의도한 사용자 경험: 조합과 크기에 맞는 아이템을 빠르게 좁힙니다.\n- 범위와 제외: 가방과 아이템 칸 범위, 아이템의 하나 이상 시너지 일치에 적용합니다.\n- 영향 소스: ScreenState.luau, Screen.luau, ScreenRenderer.luau, VisualTokens.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 사용자 기획 이미지, Studio 캡처와 두 모바일 화면 테스트.\n\n### PBP-ART-001 — 시너지 아이콘 소형 가독성 규칙\n\n- 날짜: 2026-08-15\n- 도메인: 모바일 UI 아트 방향 / 인벤토리 시너지\n- 변경 유형: changed\n- 이전 규칙: 큰 합본을 축소해 실제 카드 크기에서 세부가 합쳐졌습니다.\n- 새 유효 규칙: 약 25px를 승인 기준으로 대표 심볼·투명 배경·최대 3색·216px 경계를\n  사용합니다.\n- 근거: 작은 화면에서 시너지를 구분하는 속도가 우선입니다.\n- 의도한 사용자 경험: 짧게 훑어도 형태와 대표색으로 시너지를 구분합니다.\n- 범위와 제외: 활성 26종 이미지와 재생성 계약에 적용하며 의미와 효과는 바꾸지 않습니다.\n- 영향 소스: Assets/UI/Backpack/SynergyIcons, SynergyCatalog.luau\n- 관련 위키: synergy-icon-system@v001, inventory-item-concept\n- 검증과 증거: 두 Studio 모바일 화면, 26개 자산과 전용 이미지 테스트.\n\n### PBP-CONTENT-001 — FootprintExpansion21 활성 집합 정리\n\n- 날짜: 2026-08-15\n- 도메인: 아이템 콘텐츠 / 공개 데이터\n- 변경 유형: retired\n- 이전 규칙: 확장 시안 21개가 모두 활성 후보로 남았습니다.\n- 새 유효 규칙: 11개만 활성화하고 10개는 제품 데이터와 미디어에서 제거합니다.\n- 근거: 폐기 시안이 남으면 현재 지원 범위를 잘못 전달합니다.\n- 의도한 사용자 경험: 실제 지원하는 아이템만 게임과 공개 DB에서 확인합니다.\n- 범위와 제외: 해당 10개 아이콘·레이아웃·참조를 제거하고 매니페스트 이력은 보존합니다.\n- 영향 소스: FootprintExpansion21, ItemDB 카탈로그·레이아웃·생성 산출물\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: ItemDB 90개 build/check와 생성 산출물 검사.\n\n### PBP-DOC-001 — 누적 제품 기획 변경 원장\n\n- 날짜: 2026-08-15\n- 도메인: 개발 문서 운영\n- 변경 유형: added\n- 이전 규칙: 기획 규칙의 변경을 한곳에서 계속 추적하는 누적 원장이 없었습니다.\n- 새 유효 규칙: 사용자 승인 커밋마다 물질적 변경을 안정적인 ID와 함께 누적합니다.\n- 근거: 구현이 개선돼도 최종 규칙과 변경 이유가 사라지지 않아야 합니다.\n- 의도한 사용자 경험: 위키 한 페이지에서 현재 규칙과 과거 이유를 연속 확인합니다.\n- 범위와 제외: 제품·게임플레이·UX·콘텐츠·아트·플랫폼·운영에 적용하며 순수 리팩터링은\n  제외합니다.\n- 영향 소스: AGENTS.md, wiki/content/pages/product-planning-change-log\n- 관련 위키: inventory-item-concept, development-wiki\n- 검증과 증거: 위키 빌드·체크·정책 테스트와 동일 커밋 발행.\n\n### PBP-ITEMDB-001 — ItemDB ON/OFF 베이크 경계\n\n- 날짜: 2026-08-16\n- 도메인: 아이템 운영 / 게임 배포\n- 변경 유형: added\n- 이전 규칙: ItemDB에 존재하는 모든 아이템이 항상 생성 런타임과 게임 베이크에 포함됐습니다.\n- 새 유효 규칙: 각 아이템은 ON/OFF 상태를 가지며 OFF는 웹 기획 기록에는 남고 다음 베이크와\n  생성 런타임에서는 제외됩니다. ON 복귀 시 기존 형태·이미지·시너지·효과 설정을 유지합니다.\n- 근거: 일시 제외와 영구 폐기를 구분해야 콘텐츠 실험과 롤백이 데이터 삭제 없이 가능합니다.\n- 의도한 사용자 경험: 운영자는 한 번의 버튼으로 게임 노출을 제어하고 플레이어는 승인된\n  활성 아이템만 만납니다.\n- 범위와 제외: ItemDB 웹 편집, 생성 레이아웃, 게임 카탈로그와 Studio 베이크에 적용합니다.\n  OFF 항목의 원본·웹 검색·이미지는 삭제하지 않습니다.\n- 영향 소스: inventory-item-layouts.json, tools/item_db.py, GeneratedItemLayouts.luau,\n  ItemCatalog.luau, wiki/site/app.js\n- 관련 위키: inventory-item-concept@v014\n- 검증과 증거: 390×844 ON 행 캡처, OFF 생성 제외 테스트, ItemDB 90개 정합성 검사.\n\n### PBP-EFFECT-001 — A·B·C 공간 접촉 효과 영역\n\n- 날짜: 2026-08-16\n- 도메인: 아이템 조합 / 공간 효과 / ItemDB 저작\n- 변경 유형: added\n- 이전 규칙: 아이템은 자기 능력치와 점유 형태만 가졌고 주변 아이템 접촉을 표현하는\n  저작 계약이 없었습니다.\n- 새 유효 규칙: 아이템당 A·B·C 최대 세 효과 슬롯을 두고 점유 경계 바깥 Q/R 다섯 칸까지\n  직접 효과 칸을 선택합니다. 각 슬롯은 종류·조건·능력 ID를 가지며 공간 접촉 판정과 실제\n  능력 실행은 분리합니다.\n- 근거: 가방 배치의 공간 관계를 조합 빌드로 확장하되 전투 규칙이 배치 기하에 결합되지\n  않아야 합니다.\n- 의도한 사용자 경험: 플레이어는 아이템을 어디에 놓고 무엇과 맞닿게 하는지로 추가 효과를\n  설계하고, 운영자는 같은 육각 편집 방식으로 규칙을 시각적으로 저작합니다.\n- 범위와 제외: 효과 칸 데이터, 카탈로그 ID, 회전 접촉 후보 평가까지 포함합니다. 조건 논리,\n  능력치 합산, 전투 발현과 시각 효과는 후속 범위입니다.\n- 영향 소스: item-effect-catalog.json, item-effect-slots.md, inventory-item-layouts.json,\n  GeneratedItemLayouts.luau, ItemEffectContactEvaluator.luau, ItemInstanceHydrator.luau,\n  wiki/site/app.js, wiki/site/item-db.js\n- 관련 위키: inventory-item-concept@v014, backpack-combat-stat-database\n- 검증과 증거: 390×844 A/B/C 편집 캡처, 효과 좌표·카탈로그·회전 접촉·드래그 비활성 테스트,\n  Studio의 동일 리비전 90개 레이아웃과 EffectCatalog 확인.\n\n### PBP-ITEMDB-002 — ItemDB 칸 수·시너지·게임 ON 복합 필터\n\n- 날짜: 2026-08-18\n- 도메인: ItemDB 운영 / 웹 탐색\n- 변경 유형: added\n- 이전 규칙: ItemDB는 이름과 대분류만 좁힐 수 있어 점유 크기·시너지·실제 게임 포함\n  집합을 따로 확인해야 했습니다.\n- 새 유효 규칙: 최소·최대 칸 수, 여러 시너지의 OR, 전체/게임 ON 상태를 검색·대분류와\n  AND로 조합하며 스크롤과 효과 카탈로그 접힘 상태를 재렌더링 뒤에도 유지합니다.\n- 근거: 전체 기획 목록과 현재 게임 집합을 한 화면에서 빠르게 비교해야 합니다.\n- 의도한 사용자 경험: “게임에 들어가는 2~4칸 기계 또는 원거리 아이템”을 그대로 필터로\n  표현하고 실제 아이콘으로 결과를 빠르게 훑습니다.\n- 범위와 제외: 공개·로컬 ItemDB 탐색과 시너지 미디어에 적용합니다. 게임 안의 보관함\n  고급 필터 상태와는 별도입니다.\n- 영향 소스: tools/item_db.py, wiki/site/app.js, wiki/site/app.css, wiki/site/item-db-data.js,\n  wiki/site/synergy-media\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: 1440×900 복합 필터 캡처, 8개 ON 결과, 26/26 이미지 로드,\n  catalogOpen=false·scrollY=188 유지, 브라우저 콘솔 오류·경고 0건.\n\n### PBP-INV-007 — 최대 6개 장착 무기와 필드 표시\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 장착 / 필드 가독성\n- 변경 유형: added\n- 이전 규칙: 유효하게 배치된 무기는 보드 안에서만 보였고 장착 목록·한도·필드 표시 계약이\n  없었습니다.\n- 새 유효 규칙: 유효한 Weapon은 최초 배치 순서대로 최대 6개까지 장착되고 2×3 장착 탭,\n  상세 정보·빼기, 모든 캐릭터 위의 방향 반응 이미지로 표시됩니다.\n- 근거: 공간 배치 결과가 실제 플레이 장비로 읽혀야 인벤토리 퍼즐과 전투 준비가 연결됩니다.\n- 의도한 사용자 경험: 여섯 슬롯에서 장착 상태를 관리하고 필드에서 자신의 빌드를 즉시\n  알아봅니다.\n- 범위와 제외: 장착 상태·관리·이미지 표시에 적용합니다. 실제 공격 실행과 무기 모델은\n  후속 범위입니다.\n- 영향 소스: EquippedItemModel.luau, InventoryBoardModel.luau, InventorySerializer.luau,\n  Screen.luau, ScreenRenderer.luau, InventoryService.luau, EquippedWeaponBillboard.luau,\n  CharacterController.luau, DirectionResolver.luau\n- 관련 위키: inventory-item-concept@v015, character-2d-rendering@v009\n- 검증과 증거: iPhone 17 Pro·Galaxy A06 장착 슬롯과 상세 모달 캡처, 6개 한도 Luau 테스트,\n  West 87.8°·East -92.1° 방향 회전, 최종 Studio 콘솔 오류·경고 0건.\n\n### PBP-INV-008 — 상태와 무관한 2px 배치 외곽선\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 시각 계층\n- 변경 유형: changed\n- 이전 규칙: 가방 시너지나 배치 미리보기 상태에 따라 외곽선이 3~7px로 굵어질 수 있었습니다.\n- 새 유효 규칙: 가방·아이템·선택·시너지·유효·무효·미리보기 외곽선은 모두 2px이며 상태는\n  색으로만 구분합니다.\n- 근거: 굵기 변화가 점유 형태를 실제보다 커 보이게 하고 아이템 그림과 경쟁했습니다.\n- 의도한 사용자 경험: 같은 공간 형태를 안정적으로 읽고 색으로 상태만 빠르게 구분합니다.\n- 범위와 제외: 인벤토리 보드와 보관함 선택 외곽선에 적용합니다.\n- 영향 소스: ScreenState.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: 모든 외곽선 경로가 GetBoundaryThickness=2를 사용하는 Luau·소스 회귀 테스트.\n\n### PBP-CONTENT-002 — 게임 ON 32개 승인 집합\n\n- 날짜: 2026-08-18\n- 도메인: 아이템 콘텐츠 / 게임 배포\n- 변경 유형: changed\n- 이전 규칙: 전체 90개 ItemDB가 모두 게임 ON으로 생성 런타임에 포함됐습니다.\n- 새 유효 규칙: 전체 기획 목록 90개를 보존하면서 게임 ON 32개만 생성 런타임과 Studio\n  베이크에 포함합니다. 포켓 네일건은 MACHINE을 제외한 RANGED·GUN, 소화기 철퇴는\n  FORGED 대신 MACHINE을 사용합니다.\n- 근거: 현재 게임에 투입할 승인 콘텐츠와 후속 기획 후보를 데이터 삭제 없이 구분합니다.\n- 의도한 사용자 경험: 플레이어는 승인된 32개만 만나고 운영자는 OFF 58개를 계속 비교·복원할\n  수 있습니다.\n- 범위와 제외: PBP-CONTENT-001의 전체 90개 카탈로그와 폐기 이력은 유지하며 게임 포함 집합만\n  변경합니다.\n- 영향 소스: inventory-item-layouts.json, GeneratedItemLayouts.luau, wiki/site/item-db-data.js\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: ItemDB revision a35b00cf76ec6c75, 전체 90·게임 ON 32 build/check,\n  Studio 같은 소스 베이크와 저장.\n\n### PBP-ACTION-001 — 20스터드 방향 잠금 Dash\n\n- 날짜: 2026-08-18\n- 도메인: 캐릭터 액션 / 이동 / 스프라이트 일관성\n- 변경 유형: changed\n- 이전 규칙: Dash는 0.20초 동안 목표 속도 30 studs/s의 순간 충격을 적용하고 별도 Dash\n  포즈를 재생할 수 있었습니다.\n- 새 유효 규칙: Dash는 0.30초 동안 선택 방향을 잠그고 장애물이 없는 기준 20스터드를\n  이동합니다. WalkSpeed·AutoRotate를 잠근 뒤 복원하고 시작 순간의 완성 프레임을 유지합니다.\n- 근거: 이동 거리를 입력·현재 속도와 분리해 일관되게 만들고, 승인 Run 아틀라스가 레거시\n  모듈식 Walk/Dash 이미지로 바뀌는 비율 변화를 막습니다.\n- 의도한 사용자 경험: Dash 방향이 중간에 꺾이지 않고 같은 거리를 이동하며 캐릭터 모습도\n  한 프레임으로 안정적으로 유지됩니다.\n- 범위와 제외: 클라이언트 Dash 이동·방향·스프라이트에 적용합니다. 장애물 관통이나 별도\n  Dash 공격 판정은 추가하지 않습니다.\n- 영향 소스: character-actions.md, Config.luau, PlayerActionController.luau,\n  CharacterController.luau, test_two_direction_run_build.py\n- 관련 위키: character-2d-rendering@v009\n- 검증과 증거: Galaxy A06 Play에서 19.46스터드 이동, 이동 중 WalkSpeed=0·AutoRotate=false,\n  종료 뒤 16·true 복원, 최종 콘솔 오류·경고 0건.\n\n### PBP-DEV-001 — 세션 전용 허용 무게 테스트 창\n\n- 날짜: 2026-08-18\n- 도메인: Studio 개발 도구 / 데이터 안전\n- 변경 유형: added\n- 이전 규칙: 허용 무게 경계값을 플레이 중 빠르게 바꾸는 전용 진단 UI가 없었습니다.\n- 새 유효 규칙: Studio에서만 F2 창으로 허용 무게를 1Kg씩 조정하고, 영구 저장에는 플레이어의\n  원래 제한값을 사용합니다.\n- 근거: 무게 초과 UI와 배치 경계를 반복 검증하되 진단 값이 사용자 데이터에 남으면 안 됩니다.\n- 의도한 사용자 경험: 개발자는 Play를 다시 시작하지 않고 경계값을 시험하며 플레이어는\n  테스트 기능이나 변조된 저장값을 보지 않습니다.\n- 범위와 제외: Roblox Studio 진단 세션에만 적용하며 모바일 제품 UI 완료 범위가 아닙니다.\n- 영향 소스: DeveloperTestControls.luau, DeveloperTestWindow.luau, Screen.luau,\n  InventoryService.luau\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: Studio-only 생성·서버 거부·원래 제한 직렬화 소스 검사와 Luau 경계 테스트.\n\n### PBP-INV-009 — 사각 장착판과 부위별 중복 제한\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 장착 / 공간 퍼즐\n- 변경 유형: superseded\n- 이전 규칙: PBP-INV-002~007은 육각 가방이 활성 칸을 만들고 시너지·필터와 유효 배치 무기\n  여섯 개를 관리하는 메인 인벤토리를 사용했습니다.\n- 새 유효 규칙: 아이템은 사각 폴리오미노로 배치하며 유효한 배치가 곧 장착입니다. 무기는\n  여섯 개, 반지는 두 개, 나머지 지정 부위는 한 개이며 무기·반지는 같은 DefinitionId를\n  중복할 수 없습니다. 디아블로식 장비창은 권위 배치의 투영입니다.\n- 근거: 장착 제한을 즉시 이해시키면서 공간 퍼즐은 크기와 형태로 유지해야 합니다.\n- 의도한 사용자 경험: 플레이어는 별도 장착 버튼 없이 배치와 장비 요약을 같은 상태로\n  이해합니다.\n- 범위와 제외: 메인 장착판과 장착 부위에 적용하며 특수 아이템·방패 슬롯은 제외합니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016\n- 검증과 증거: 기획 표에서 부위별 장착 수와 48종 콘텐츠 수량 검산.\n\n### PBP-SYNERGY-001 — 가방·시너지 시스템 전면 폐기\n\n- 날짜: 2026-08-18\n- 도메인: 인벤토리 / 시너지 / 아이템 조합\n- 변경 유형: retired\n- 이전 규칙: PBP-INV-004·006, PBP-ART-001과 PBP-EFFECT-001은 가방 활성 칸, 26종\n  시너지, 시너지 필터와 A/B/C 공간 접촉 효과를 제품 규칙으로 사용했습니다.\n- 새 유효 규칙: 가방 활성 칸, 육각 메인 인벤토리, 시너지 판정·아이콘·필터와 공간 접촉\n  효과를 후속 제품에서 사용하지 않습니다. 육각형은 아이템별 룬 보드에만 사용합니다.\n- 근거: 장착 규칙과 룬 성장 퍼즐이 각각 명확한 책임을 가져야 합니다.\n- 의도한 사용자 경험: 메인 장착은 사각형으로 빠르게 읽고 깊은 육각 퍼즐은 선택한 아이템\n  안에서 집중해 풉니다.\n- 범위와 제외: 새 제품 방향을 폐기하며 기존 코드·자산 제거는 후속 구현 커밋에서 수행합니다.\n- 영향 소스: inventory-item-concept@v016, inventory-item-concept@v015\n- 관련 위키: synergy-icon-system@v001, inventory-item-concept@v016\n- 검증과 증거: v016 폐기·제외 목록과 이전 v015 구현 범위 대조.\n\n### PBP-CONTENT-003 — 알파 장비 48종과 점유 크기\n\n- 날짜: 2026-08-18\n- 도메인: 알파 아이템 콘텐츠 / 장착 부위\n- 변경 유형: superseded\n- 이전 규칙: PBP-CONTENT-002의 현행 게임 ON 32개와 과거 90개 카탈로그가 실제 알파\n  배포 집합이었습니다.\n- 새 유효 규칙: 다음 알파 구현 목표는 무기 14종, 방어구·장신구 34종의 48종입니다. 머리·\n  상의·하의는 4/6칸, 귀걸이·반지는 1칸, 목걸이는 2/3칸, 글러브·신발·벨트는 2/4칸을\n  사용합니다.\n- 근거: 부위별 역할과 사각 점유 크기를 함께 선택하게 해 배치 조합을 늘립니다.\n- 의도한 사용자 경험: 작은 장비의 공간 효율과 큰 장비의 역할을 비교해 자신만의 장착판을\n  만듭니다.\n- 범위와 제외: 48종은 기획 목표이며 현재 ItemDB와 Studio ON 32개는 구현 전까지 그대로입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 무기 14 + 부위별 장비 34 = 48 산술 검산.\n\n### PBP-RUNE-001 — Seed 고정 259칸 아이템 룬 보드\n\n- 날짜: 2026-08-18\n- 도메인: 아이템 성장 / 룬 퍼즐 / 합성\n- 변경 유형: added\n- 이전 규칙: 각 아이템에 독립적인 장기 육각 성장판과 룬 조각 합성 계약이 없었습니다.\n- 새 유효 규칙: 각 아이템은 37칸 영역 일곱 개를 0~6등급에 하나씩 열고, 색별 시작점에서\n  젬블로식 한 칸 간격으로 1~5칸 룬을 연결합니다. 전체 능력 위치는 생성 Seed로 고정하며\n  합성 시 기준 아이템의 Seed와 배치를 보존합니다.\n- 근거: 같은 아이템도 경로·룬 모양·색 차단을 고민하는 장기 성장 퍼즐이 필요합니다.\n- 의도한 사용자 경험: 적은 룬으로 원하는 고등급 능력까지 길을 만들고 다른 색의 미래 경로를\n  함께 계획합니다.\n- 범위와 제외: 보드·등급 개방·룬/아이템 합성 계약이며 실제 생성기와 저장 마이그레이션은\n  후속 구현입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016\n- 검증과 증거: 일곱 영역 각각 37칸과 전체 259칸, 영역별 능력 분포 합계 검산.\n\n### PBP-RUNE-002 — 룬 능력 예산·등급 증가·레어 칸\n\n- 날짜: 2026-08-18\n- 도메인: 룬 능력 / 밸런스 / UI 표현\n- 변경 유형: added\n- 이전 규칙: 룬 능력의 등급별 개수·표시 정밀도·레어 판정과 아이템 정체성 보호 규칙이\n  없었습니다.\n- 새 유효 규칙: 전체 능력 등급 개수는 18·27·33·37·41·50·53이며 같은 능력의 실제 등장\n  등급은 UI 표시값까지 엄격히 증가합니다. 구조형 레어는 6등급 영역의 황금 칸에서 한 단위만\n  제공하고 Seed는 위치만 바꿉니다.\n- 근거: 상위 등급의 보상감을 보존하고 좋은 Seed가 총 전투력 자체를 재추첨하지 않게 합니다.\n- 의도한 사용자 경험: 황금 칸을 장기 목표로 삼되 낮은 등급 경로도 매 단계 분명한 성장을\n  제공합니다.\n- 범위와 제외: 일반 POWER/SPEED/CHANCE/TRAIT/GUARD/TIME/RANGE와 레어 표시에 적용합니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 등급·트랙별 칸 수와 259칸 합계, 모든 표시 수치의 단조 증가 수동 검토.\n\n### PBP-COMBAT-001 — 자동 스킬과 비선형 능력 캡\n\n- 날짜: 2026-08-18\n- 도메인: 전투 능력 / 자동 스킬 / 방어 계산\n- 변경 유형: added\n- 이전 규칙: 룬 인플레이션에서 행동 빈도·확률·무적·발사체 수를 안전하게 제한하는 공통\n  계산 순서가 없었습니다.\n- 새 유효 규칙: 자동 스킬은 해당 무기의 기본 공격 실행 횟수로 발동하고 감소는 최대 8회,\n  최소 요구 횟수는 1회입니다. 방패 막기는 최대 100%에서 방어력을 두 배로 적용하며 방어력\n  이후 최종 피해감소는 최대 50%입니다. 이동·공격·대시·회피·회복·보호막 등은 v016의\n  항목별 캡을 사용합니다.\n- 근거: 적 수치 강화로 대응 가능한 선형 인플레이션은 허용하되 무한 행동·완전 무적·확률\n  초과는 막아야 합니다.\n- 의도한 사용자 경험: 큰 숫자 성장은 즐기면서도 공격과 피격의 기본 규칙은 계속 작동합니다.\n- 범위와 제외: 탄약, 탄약 미소모, 소모품 미소모와 스킬 초기화 확률은 사용하지 않습니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: backpack-combat-stat-database, inventory-item-concept@v016\n- 검증과 증거: 계산 순서와 캡·제외 목록의 기획 교차 검토.\n\n### PBP-RUNE-003 — 알파 무기 14종의 보드 정체성\n\n- 날짜: 2026-08-18\n- 도메인: 무기 콘텐츠 / 룬 보드 / 자동 스킬\n- 변경 유형: added\n- 이전 규칙: 알파 무기별 자동 스킬 조건과 259칸 A/B/C/D·레어 배분이 고정되지 않았습니다.\n- 새 유효 규칙: 일곱 무기 형태에 두 종류씩 14개를 두고 각 보드는 A 102, B 71, C 48,\n  D 32, 6등급 로컬 레어 6칸을 가집니다. 목걸이는 발사체, 반지는 자동 스킬 요구 공격,\n  귀걸이는 근거리 사거리의 전역 레어를 제공하고 신발만 추가 대시를 제공합니다.\n- 근거: Seed 위치가 달라도 무기 이름과 공격 방식에 맞는 성장 정체성이 유지돼야 합니다.\n- 의도한 사용자 경험: 같은 룬이라도 연격검·공성 석궁·흡혈 도끼에서 서로 다른 경로와\n  자동 스킬을 강화합니다.\n- 범위와 제외: 14종의 알파 기획 계약이며 최종 아이콘·폴리오미노 좌표·전투 구현은 후속입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 각 무기 레어 합계 6칸과 보드 전체 259칸 산술 검산.\n\n### PBP-ITEMDB-002 — 최종 48종 활성 ItemDB 전환\n\n- 날짜: 2026-08-20\n- 도메인: 아이템 콘텐츠 / 공개 데이터베이스 / 런타임 배포\n- 변경 유형: superseded\n- 대체 대상: PBP-ITEMDB-001, PBP-CONTENT-003의 \"후속 구현 목표\" 상태\n- 이전 규칙: 새 48종은 기획 목표이고 과거 90종과 게임 ON 32종이 구현 전 역사적 현행\n  상태였습니다.\n- 새 유효 규칙: 무기 14종과 방어구·장신구 34종의 최종 48종만 ItemDB 원본, 생성 런타임,\n  공개 미디어의 활성 집합으로 사용합니다. 과거 아이콘과 특수 아이템은 제거하고 ON/OFF\n  운영 경계는 유지합니다.\n- 근거: 기획·로컬 원화·공개 DB·게임 카탈로그의 서로 다른 활성 집합은 이름·점유·자산 ID\n  불일치를 만듭니다.\n- 의도한 사용자 경험: 플레이어와 개발자가 같은 최종 48종의 이미지와 형태만 봅니다.\n- 범위와 제외: 아이템 정의·아이콘·사각 점유·공개 DB에 적용하며 과거 위키 기록은 보존합니다.\n- 영향 소스: inventory-item-art-catalog.md, inventory-item-layouts.json,\n  GeneratedItemLayouts.luau, ItemCatalog.luau, wiki/site/item-db-data.js\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: ItemDB 48종 빌드·체크, 최종 카탈로그와 모바일 공개 DB 캡처.\n\n### PBP-RUNE-004 — 427칸·후보 10개 룬 보드\n\n- 날짜: 2026-08-20\n- 도메인: 아이템 성장 / 룬 보드 / 랜덤화\n- 변경 유형: superseded\n- 대체 대상: PBP-RUNE-001, PBP-RUNE-002\n- 이전 규칙: 모든 아이템은 37칸 영역 일곱 개의 259칸 보드 하나를 Seed로 섞고, 능력 등급\n  총량 18·27·33·37·41·50·53을 사용했습니다.\n- 새 유효 규칙: 각 영역을 반지름 4인 61칸으로 확대해 전체 427칸을 사용합니다. 아이템\n  정의마다 결정론적으로 생성된 후보 10개를 두고 아이템 생성 시 하나를 균등 선택해 VariantId와\n  Seed를 저장합니다. 보드당 능력 등급 총량은 30·45·54·60·67·90·81입니다.\n- 근거: 11개 능력 계열과 레어 노드, 일곱 색 경로를 한 판에서 읽고 우회할 충분한 공간이\n  필요합니다. 후보를 제한하면 다양성과 재현·검증을 함께 확보할 수 있습니다.\n- 의도한 사용자 경험: 같은 아이템에서도 다른 길을 계획하되 총 능력 예산이 운에 따라 바뀌지는\n  않습니다.\n- 범위와 제외: 48종 전체 480개 보드에 적용하며 런타임 재굴림은 허용하지 않습니다.\n- 영향 소스: item-rune-board-database.json, GeneratedRuneBoardDB.luau,\n  rune-board-db-data.js\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 생성기 결과 48×10=480보드, 보드마다 7×61=427칸, revision\n  6e735afdab3d7550.\n\n### PBP-RUNE-005 — 34종 룬 도형과 62종 능력 아이콘\n\n- 날짜: 2026-08-20\n- 도메인: 룬 조각 / 보드 가독성 / 터치 배치\n- 변경 유형: added\n- 이전 규칙: 룬은 1~5칸 젬블로식 조각이라는 개념만 있었고 완전한 형태군, 공용 원화와\n  능력 아이콘의 책임 분리가 고정되지 않았습니다.\n- 새 유효 규칙: 회전·반전을 동일시한 1·1·3·7·22개, 총 34종 자유 폴리헥스를 사용합니다.\n  일곱 색은 빈 중앙 메달의 중립 원화를 틴트하고, 62종 전투 effect 아이콘을 중앙에 별도\n  합성합니다. 드래그는 실제 도형·잡은 칸·회전·반전을 보존하며 마지막 스냅 가이드를 확정값으로\n  사용합니다.\n- 근거: 색·등급·능력 의미를 한 장의 원화에 굽지 않아야 작은 화면에서도 의미를 읽고 데이터\n  변경에도 자산을 재사용할 수 있습니다.\n- 의도한 사용자 경험: 탭하지 않아도 대략적인 능력 종류를 알고, 손가락 아래에서 룬이 튀지\n  않은 채 예상 위치에 놓입니다.\n- 범위와 제외: 룬 카드·보드 노드·드래그 미리보기에 적용하며 상세 수치는 텍스트로 제공합니다.\n- 영향 소스: rune-piece-catalog.json, rune-ability-icon-catalog.json,\n  rune_hex_neutral.png, rune_ability_icons.png, UIPrimitives.luau, Screen.luau\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 형태군 34개, effect 아이콘 62개 생성·누락 검사와 아이콘 시트.\n\n### PBP-UI-001 — 모바일 인벤토리·룬 보드의 단일 작업 흐름\n\n- 날짜: 2026-08-20\n- 도메인: 모바일 UI / 인벤토리 / 룬 보드 / 합성\n- 변경 유형: added\n- 이전 규칙: 사각 장착과 룬 보드의 개별 기획은 있었지만 화면 내 기능 위치, 터치 우선순위,\n  필터·합성·복귀 상태의 완전한 흐름이 없었습니다.\n- 새 유효 규칙: 두 화면은 안전 영역 아래 상단 상태, 중앙 작업판, 하단 보관함을 공유합니다.\n  카드 탭은 룬 보드 진입, 드래그는 배치 또는 합성을 우선합니다. 룬 보관함은 상하 스크롤,\n  한 색 또는 전체를 고르는 7색 필터와 독립 ON/OFF인 1~5칸 필터를 제공하고, 빈 보드 탭은\n  상단 중앙에 능력을 표시합니다.\n- 근거: 모바일에서는 화면 전환마다 탐색 위치와 재료가 사라지면 배치 퍼즐의 비교 비용이\n  지나치게 커집니다.\n- 의도한 사용자 경험: 인벤토리 배치, 아이템 성장, 룬 배치와 합성을 같은 손동작 문법으로\n  왕복합니다.\n- 범위와 제외: 모바일 세로 화면과 터치 입력에 적용하며 PC 밀도·마우스 품질은 현재 완료\n  기준이 아닙니다.\n- 영향 소스: inventory-rune-ui-spec.md, InventoryV2, RuneBoard, InventoryV2Service.luau\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 정적 상태·Luau 테스트, iPhone 17 Pro 400×777 및 iPhone 7 374×666 Studio\n  Play 캡처, 핵심 입력 경로와 콘솔 오류 없음 확인.\n\n### PBP-ART-002 — 최종 아이템 카툰 아트와 방향 규칙\n\n- 날짜: 2026-08-20\n- 도메인: 아이템 아트 / 모바일 전투 / 사각 점유\n- 변경 유형: superseded\n- 대체 대상: PBP-ART-001의 육각·시너지 카드 중심 아트 계약\n- 이전 규칙: 실사풍 또는 고풍스러운 원화와 육각 시너지 카드 문법이 섞였고, 일부 무기는\n  사각 점유와 전투 회전 기준에 맞지 않았습니다.\n- 새 유효 규칙: 48종 전체를 밝고 굵은 카툰풍으로 통일하고 사각 폴리오미노 질량에 맞춥니다.\n  근접 무기는 위쪽, 활·석궁·총은 오른쪽을 기본 방향으로 하며 발사체·공격 궤적은 원화에서\n  제외합니다.\n- 근거: Brotato식 자동 공격에서는 작은 캐릭터 주변을 도는 장비의 방향과 실루엣이 즉시\n  읽혀야 합니다.\n- 의도한 사용자 경험: 보관함·장착판·전투에서 같은 아이템을 형태만으로 알아봅니다.\n- 범위와 제외: 최종 48종 인벤토리 원화에 적용하며 실제 공격 VFX와 투사체는 별도 자산입니다.\n- 영향 소스: Assets/Items/InventoryIcons, inventory-item-art-catalog.md,\n  uploaded_asset_ids.json\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 최종 48종 카탈로그와 공개 ItemDB 캡처.\n\n### PBP-RUNE-006 — 등급·색·시작점 일치와 회전 전용 배치\n\n- 날짜: 2026-08-20\n- 도메인: 룬 성장 / 연결 퍼즐 / 배치 권위\n- 변경 유형: changed\n- 대체 대상: PBP-RUNE-004의 자유 시작 색 등록, PBP-RUNE-005의 런타임 반전 조작\n- 이전 규칙: 룬 색과 합성 등급은 독립 값이었고, 해금된 어느 중앙 시작점에서든 아직 등록하지\n  않은 색을 시작할 수 있으며 플레이 중 회전과 반전을 모두 제공했습니다.\n- 새 유효 규칙: G0~G6 룬 색은 아이템 등급색과 일치합니다. 룬은 같은 번호 영역의 중앙\n  시작점에서만 첫 등록하며 아이템 등급보다 높은 룬은 배치할 수 없습니다. 5칸 합성으로 등급이\n  오르면 다음 등급 색으로 바뀌고 런타임 조작은 60° 회전만 제공합니다. 첫 룬은 중앙 한 칸만\n  덮으면 도형의 어느 셀을 잡았든 유효하며 이후에는 한 칸 간격 연결 전선을 안내합니다.\n- 근거: 색·등급·시작점이 서로 다른 축이면 성장 잠금과 연결 가능 위치를 화면만 보고 예측하기\n  어렵고 저장 데이터가 모순될 수 있습니다.\n- 의도한 사용자 경험: 새 등급을 열 때 같은 색의 새 출발점을 즉시 이해하고, 보드가 보여 주는\n  한 칸의 목표와 실제 도형 가이드만으로 자유로운 첫 배치를 시도합니다.\n- 범위와 제외: 룬 생성·합성·저장 정규화·보드 배치·회전에 적용합니다. 34개 자유 폴리헥스\n  카탈로그의 중복 제거 기준은 유지합니다.\n- 영향 소스: rune-piece-system.md, inventory-rune-ui-spec.md, RuneBoardModel.luau,\n  RuneMergeModel.luau, InventoryV2Service.luau, Screen.luau\n- 관련 위키: inventory-item-concept@v018\n- 검증과 증거: InventoryV2 Luau 테스트의 등급색 불일치 거절, 등급별 시작점, 5칸 합성 색\n  승급, 첫 중앙 목표와 한 칸 간격 전선 검증.\n\n### PBP-UI-002 — 모바일 룬 보드의 문맥 보존 조작과 팝업 필터\n\n- 날짜: 2026-08-20\n- 도메인: 모바일 UI / 룬 보드 / 보관함 탐색\n- 변경 유형: changed\n- 대체 대상: PBP-UI-001의 상시 펼친 단일 색 필터와 보드 중심 재확대\n- 이전 규칙: 색상·칸 수 선택지가 보관함 위에 계속 공간을 차지하고 색상은 한 개 또는 전체만\n  골랐습니다. 확대할 때 보드 중앙으로 시점이 이동했고 회전·반전은 들고 있는 룬에 묶였습니다.\n- 새 유효 규칙: `색상 필터`와 `칸 수 필터` 한 줄 트리거가 각각 다중 선택 말풍선을 열며\n  바깥 탭으로 닫힙니다. 장착 룬 회전은 마지막 선택 룬에만 적용하고 확대·축소는 현재 보던\n  논리 위치를 유지합니다. 상단 능력 설명은 색상명을 빼고 고대비 등급·능력·수치만 표시합니다.\n- 근거: 좁은 세로 화면에서는 선택지를 계속 펼쳐 두는 것보다 실제 룬 카드를 더 많이 보여 주는\n  편이 중요하며, 카메라와 조작 대상이 예기치 않게 바뀌면 퍼즐 경로를 다시 찾아야 합니다.\n- 의도한 사용자 경험: 여러 색·크기를 짧은 팝업에서 조합해 찾고, 보던 위치와 선택 룬을 잃지\n  않은 채 확대·회전하며, 탭 설명을 즉시 읽습니다.\n- 범위와 제외: 모바일 세로 룬 장착 화면과 터치 입력에 적용합니다. PC 화면 밀도와 마우스\n  동등성은 현재 완료 기준이 아닙니다.\n- 영향 소스: inventory-rune-ui-spec.md, Screen.luau, VisualTokens.luau,\n  StorageSort.luau, test_inventory_v2_ui.py\n- 관련 위키: inventory-item-concept@v018\n- 검증과 증거: Galaxy A06 세로 Studio Play에서 필터 팝업·확장된 카드 영역·고대비 능력\n  설명을 확인했고, Studio MCP 진단과 7개 UI 계약 테스트를 통과했습니다.\n\n### PBP-COMBAT-002 — 장착 무기 할로와 서버 권위 자동 공격\n\n- 날짜: 2026-08-20\n- 도메인: 필드 장착 표시 / 자동 전투 / 모바일 연출\n- 변경 유형: superseded\n- 대체 대상: PBP-INV-007의 방향 반응형 필드 표시와 실제 공격 제외 범위\n- 이전 규칙: 최대 여섯 장착 무기는 캐릭터 방향을 따라 회전하는 머리 위 이미지로만 보였고,\n  실제 표적 탐색·공격·피해와 무기별 연출은 후속 범위였습니다.\n- 새 유효 규칙: 적이 없을 때 여섯 무기는 캐릭터 방향과 무관한 이미지 할로로 머리 위에\n  부유합니다. 적이 사거리와 시야 안에 들어오면 서버가 슬롯별 표적·쿨다운·피해를 결정하고\n  클라이언트는 베기·찌르기·투척·활·석궁·총기 연출을 재생합니다. 14종 원화는 ItemDB의\n  정규화된 회전축·타격점·발사구를 공통 계약으로 사용합니다.\n- 근거: 인벤토리의 장착 결과가 실제 전투 행동으로 연결돼야 빌드가 필드에서 살아 움직이며,\n  캐릭터 방향에 무기를 묶지 않아야 대기 할로와 공격 조준의 책임이 충돌하지 않습니다.\n- 의도한 사용자 경험: 적이 없을 때는 자신의 여섯 무기를 안정된 천사 링으로 읽고, 전투가\n  시작되면 각 원화가 직접 날아가거나 발사하는 모습을 통해 무기 종류를 즉시 구분합니다.\n- 범위와 제외: 14종의 기본 자동 공격, 서버 피해와 공통 연출 계열까지 적용합니다. 도탄·산탄·\n  관통·흡혈·반격 같은 고유 능력, 룬 변형, 음향과 적 피격 애니메이션은 후속 범위입니다.\n- 영향 소스: alpha-item-definitions.json, inventory-item-layouts.json,\n  EquippedWeaponBillboard.luau, WeaponAttackVFX.luau, WeaponCombatConfig.luau,\n  WeaponCombatService.luau, DamageResolver.luau\n- 관련 위키: weapon-combat-presentation@v001, inventory-item-concept@v018,\n  character-2d-rendering@v009\n- 검증과 증거: 14개 무기 공격 발생, 적 없음 공격 증가 0, iPhone 17 Pro `401×776`과\n  Galaxy A06 `359×718` Studio Play, 45개 연출 수신·누락 0·객체 수 736 고정·서버 피해와\n  콘솔 오류 없음 확인.\n\n### PBP-COMBAT-003 — 근접 여섯 무기 할로와 소켓 기준 최근접 적 조준\n\n- 날짜: 2026-08-21\n- 도메인: 필드 장착 표시 / 자동 전투 조준 / 모바일 연출\n- 변경 유형: changed\n- 대체 대상: PBP-COMBAT-002의 넓은 할로 위치와 기본 원화 회전 조준 규칙\n- 이전 규칙: 여섯 무기는 캐릭터 머리 위 할로에 부유하고 서버 권위 자동 공격으로 전환했지만,\n  캐릭터와의 최대 거리, 좌우 세 슬롯의 정확한 배치, 모든 무기의 공통 표적과 왼쪽을 보는\n  비대칭 원화 처리 방식은 고정되지 않았습니다.\n- 새 유효 규칙: 여섯 무기를 머리 가까운 좁은 타원의 왼쪽 세 개·오른쪽 세 개에 같은 현 길이\n  간격으로 두고 정중앙 위·아래는 비웁니다. 장착 집합은 사거리 안에서 가장 가까운 생존 적\n  하나를 공통 후보로 선택하고 각 무기는 자기 사거리 안에서 실제 칼끝·타격점·총구·화살·볼트\n  발사 방향을 맞춥니다. 오른쪽 기본 원화가 왼쪽 표적을 보면 상하 회전 대신 수평 반전하며\n  회전축·타격점·발사 소켓도 함께 반전합니다. 적이 없으면 기본 방향의 독립 부유로 돌아갑니다.\n- 근거: 무기가 캐릭터에서 멀리 흩어지면 장착 관계와 천사 링 실루엣이 사라지고, 왼쪽 적을\n  단순 각도 회전으로 겨누면 총과 활이 거꾸로 보이며 총구·발사체 위치도 원화와 어긋납니다.\n- 의도한 사용자 경험: 작은 모바일 화면에서도 여섯 장비를 캐릭터 소유의 한 묶음으로 즉시\n  읽고, 전투에서는 모든 무기가 같은 위협을 각자의 실제 끝점으로 노리는 장면을 봅니다.\n- 범위와 제외: 대기 할로 위치, 최근접 표적 선택, 무기별 사거리, 대기·공격 조준과 좌측 수평\n  반전에 적용합니다. 도탄·산탄·관통 같은 다중 표적 고유 능력과 음향은 후속 범위입니다.\n- 영향 소스: EquippedWeaponVisualLayout.luau, EquippedWeaponBillboard.luau,\n  WeaponAimResolver.luau, WeaponAttackVFX.luau, WeaponTargeting.luau,\n  WeaponCombatService.luau\n- 관련 위키: weapon-combat-presentation@v002\n- 검증과 증거: 사용자 좌표 측정 이미지, iPhone 17 Pro `401×776`의 여섯 무기 근접 할로와\n  좌측 표적 수평 반전 공격 캡처, Galaxy A06 `359×718` 반응형 여백 검사, 관련 테스트와\n  Studio 콘솔 오류 없음 확인.\n\n### PBP-RUNE-007 — 전체 초안과 원자 저장 룬 편집\n\n- 날짜: 2026-08-21\n- 도메인: 룬 연결 규칙 / 저장 권위 / 모바일 편집\n- 변경 유형: changed\n- 대체 대상: PBP-RUNE-006의 즉시 유효 배치 중심 조작\n- 이전 규칙: 매 조작이 그 순간 유효해야 배치 상태로 남을 수 있어 회전 중 잠시 잘못된 형태를\n  확인하거나 여러 룬을 함께 고친 뒤 저장하는 흐름이 없었습니다.\n- 새 유효 규칙: 룬 추가·이동·회전·회수는 전체 초안을 편집합니다. 무효 룬은 빨간색으로 남겨\n  수정할 수 있지만 저장은 비활성화되며, 서버가 전체 배치를 다시 검증한 뒤 유효한 초안만\n  원자적으로 저장합니다. 되돌리기는 마지막 저장 상태를 복원합니다. 한 칸 간격 연결은 배치\n  순서가 아니라 완성된 같은 색 네트워크 전체를 기준으로 판정합니다.\n- 근거: 퍼즐은 중간 단계가 아니라 최종 형태를 설계하는 작업이며, 클라이언트 조작 순서가 같은\n  완성 배치의 합법성을 바꾸면 안 됩니다.\n- 의도한 사용자 경험: 자유롭게 돌리고 옮기며 실패 이유를 본 뒤, 만족한 전체 배치만 안전하게\n  확정합니다.\n- 범위와 제외: 보관/배치 룬의 이동·회전·회수, 저장·되돌리기, 클라이언트와 서버의 전체 배치\n  검증에 적용합니다. 룬 합성 규칙은 바꾸지 않습니다.\n- 영향 소스: inventory-rune-ui-spec.md, RuneBoardModel.luau, RuneDragVisualState.luau,\n  Screen.luau, InventoryV2Service.luau\n- 관련 위키: inventory-item-concept@v019\n- 검증과 증거: 한 칸 간격 5칸 도형 배치, 잘못된 회전의 빨간 상태와 저장 비활성, 악성 저장\n  요청 거절 뒤 서버 상태 보존, 제거·되돌리기 Studio 진단과 InventoryV2 테스트.\n\n### PBP-UI-003 — 현재 형태 가이드와 정돈된 룬 보드 시각 언어\n\n- 날짜: 2026-08-21\n- 도메인: 모바일 룬 보드 / 터치 상호작용 / 정보 시각화\n- 변경 유형: changed\n- 대체 대상: PBP-UI-002의 선택 회전·필터·능력 설명 흐름\n- 이전 규칙: 연결 가이드가 현재 도형의 잡은 셀과 회전을 충분히 반영하지 않았고 잠긴 영역과\n  빈 영역의 차이가 드러나지 않았습니다. 보관 카드에서 방향을 미리 정하거나 배치 룬을\n  보관함으로 회수하기 어려웠고, 두꺼운 육각 테두리와 불투명 룬 장식이 색과 능력을 방해했습니다.\n- 새 유효 규칙: 현재 잡은 셀·회전·전체 배치를 기준으로 모든 후보를 계산합니다. 유효 칸은\n  라임색, 잠긴 칸은 탁한 적갈색, 무효 초안은 빨간색으로 표시하며 기존 룬과 같은 색 능력\n  아이콘은 유지합니다. 보관 카드와 배치 룬은 선택·60° 회전하고 배치 룬은 이동·회수합니다.\n  틈 없는 얇은 벌집과 색이 비치는 투명 크리스털 룬을 사용하고, 전체 필터는 모두 ON 상태에서\n  모두 OFF로 반전할 수 있습니다. 룬 각인 효과 탭은 유효 노드를 효과별로 합산합니다.\n- 근거: 플레이어가 손을 놓기 전에 가능 위치와 불가능 이유, 현재 활성 보상, 도형 방향을 함께\n  읽어야 최적 경로를 계산할 수 있습니다.\n- 의도한 사용자 경험: 보드 위 정보를 한눈에 구분하고, 카드에서 방향을 준비해 원하는 위치로\n  옮긴 뒤 실제 얻는 효과까지 같은 화면 흐름에서 확인합니다.\n- 범위와 제외: 모바일 세로 룬 보드와 보관함, 필터, 효과 요약에 적용합니다. PC 화면 품질과\n  마우스 동등성은 현재 완료 기준이 아닙니다.\n- 영향 소스: rune_hex_neutral.png, rune_piece_crystal.png, Assets.luau,\n  UIPrimitives.luau, VisualTokens.luau, RuneEffectSummary.luau, Screen.luau\n- 관련 위키: inventory-item-concept@v019\n- 검증과 증거: iPhone 17 Pro 세로의 연결·잠금 가이드, 잘못된 초안, 효과 합산 Studio\n  캡처와 iPhone 7 세로 반응형 검사.\n\n### PBP-COMBAT-004 — 인벤토리 중 공격 연출 억제\n\n- 날짜: 2026-08-21\n- 도메인: 모바일 인벤토리 / 전투 표현 계층\n- 변경 유형: added\n- 이전 규칙: 필드 공격 테스트 루프와 공격 연출이 인벤토리보다 높은 레이어에서 계속 재생되어\n  작업 영역을 뚫고 보일 수 있었습니다.\n- 새 유효 규칙: 인벤토리·룬 화면이 열리면 진행 중 클라이언트 공격 연출을 즉시 지우고 새\n  연출을 받지 않으며 오버레이를 비활성화합니다. 화면을 닫으면 표현만 다시 허용합니다.\n- 근거: 전투 준비 작업에서는 퍼즐과 정보가 시각 우선권을 가져야 하며, 화면을 덮는 것만으로는\n  불필요한 연출 루프가 계속 실행됩니다.\n- 의도한 사용자 경험: 인벤토리에 들어오는 순간 필드 공격 연출이 완전히 멈춰 룬 배치에\n  집중하고, 나가면 자연스럽게 전투 표현으로 돌아갑니다.\n- 범위와 제외: 클라이언트 무기 공격 VFX와 오버레이에 적용합니다. 서버의 공격 판정·피해·\n  장착 상태는 변경하지 않습니다.\n- 영향 소스: Screen.luau, WeaponAttackVFX.luau\n- 관련 위키: inventory-item-concept@v019, weapon-combat-presentation@v002\n- 검증과 증거: Studio Play에서 InventoryV2Screen 활성 중 WeaponCombatVFX\n  Enabled=false, Suppressed=true, 활성 공격·투사체·충돌 0개 확인.\n\n### PBP-ACTION-002 — 3단계 Dash와 이동 구간 잔상\n\n- 날짜: 2026-08-23\n- 도메인: 캐릭터 행동 / 모바일 전투 표현\n- 변경 유형: superseded\n- 대체 대상: PBP-ACTION-001의 Dash 시작 프레임 고정 표현\n- 이전 규칙: Dash는 0.30초 동안 시작 순간의 캐릭터 프레임을 그대로 유지했습니다.\n- 새 유효 규칙: 방향 잠금·0.30초·20스터드 이동은 유지하면서 예비 0.05초, 이동 0.20초,\n  회복 0.05초의 통짜 캐릭터 자세를 재생합니다. 잔상은 이동 자세에서 실제 경로 뒤에만\n  생성되고 회복 자세에서 본체로 수렴합니다.\n- 근거: 시작 프레임 고정은 형태 안정성은 지키지만 행동의 출발과 종료를 자세로 설명하지\n  못합니다. 세 개의 명확한 키포즈는 캐릭터 정체성을 지키면서 타이밍을 읽게 합니다.\n- 의도한 사용자 경험: 버튼을 누른 순간 몸을 낮추고 빠르게 이동한 뒤 균형을 되찾는 흐름과\n  잔상 소멸을 보고 Dash 종료를 직관적으로 이해합니다.\n- 범위와 제외: Rookie 남성 통짜 캐릭터 Dash와 런타임 잔상에 적용합니다. 이동 거리·충돌·\n  쿨다운·룬 보너스 한도는 변경하지 않습니다.\n- 영향 소스: production_manifest.json, AssetRegistry.luau, CharacterController.luau,\n  DashAfterimage.luau, FrameSpriteRig.luau, ProductionDashData.luau\n- 관련 위키: character-2d-rendering@v010\n- 검증과 증거: 좌우 3프레임 콘택트 시트, 정확한 20fps 타이밍·잔상 GIF, 캐릭터 자산 검사,\n  30개 후보 테스트와 Galaxy A06 Studio Play Dash 잔상 캡처.\n\n### PBP-ART-003 — 발이 고정된 좌우 호흡 Idle\n\n- 날짜: 2026-08-23\n- 도메인: 캐릭터 애니메이션 / 아트 방향\n- 변경 유형: added\n- 이전 규칙: 정지 상태는 통짜 Run 아틀라스 이전의 호환 프레임 또는 사실상 고정 자세를\n  사용해 호흡의 생동감이 없었습니다.\n- 새 유효 규칙: 마지막 East·West 방향을 유지하는 8프레임 6fps 호흡을 사용합니다. 발과\n  골반 아래는 고정하고 상체의 들숨·정점·날숨·복귀만 움직이며 전체 균일 확대는 금지합니다.\n- 근거: 작은 모바일 캐릭터는 생동감이 필요하지만 바닥 접지와 실루엣 안정성을 잃으면 조작\n  위치가 흔들려 보입니다.\n- 의도한 사용자 경험: 멈춰 있어도 캐릭터가 살아 숨 쉬되 신발이 미끄러지거나 방향이 이유\n  없이 반전되지 않는 안정적인 정지 화면을 봅니다.\n- 범위와 제외: Rookie 남성 통짜 캐릭터 Idle에 적용합니다. Hit·Death·Clear 제작은 별도\n  승인 단위입니다.\n- 영향 소스: production_manifest.json, Config.luau, DirectionResolver.luau,\n  FrameSpriteRig.luau, ProductionIdleData.luau\n- 관련 위키: character-2d-rendering@v010\n- 검증과 증거: 좌우 8프레임 콘택트 시트, 하체 픽셀 고정 검사, 캐릭터 자산 검사와 Galaxy\n  A06 Studio Play Idle 캡처.\n\n### PBP-INV-010 — 장비 전체 초안과 원자 저장\n\n- 날짜: 2026-08-23\n- 도메인: 모바일 인벤토리 / 장비 배치 권위\n- 변경 유형: added\n- 이전 규칙: 아이템을 한 번 옮길 때마다 개별 배치를 즉시 확정했고, 여러 장비를 재정리한\n  최종 결과를 저장 전에 함께 검토하는 계약이 없었습니다.\n- 새 유효 규칙: 추가·이동·회전·보관은 전체 초안을 갱신합니다. 겹친 장비는 가장 가까운\n  빈자리로 밀어 결과를 미리 보여 주고, 잠금·무게·장착 한도 등 무효 상태는 빨간색으로 남기되\n  저장을 비활성화합니다. 서버는 최대 200개 좌표를 전체 재검증해 모두 유효할 때만 원자적으로\n  교체하며 되돌리기는 마지막 저장 상태를 복원합니다.\n- 근거: 여러 모양의 장비를 퍼즐처럼 재배치할 때 중간 한 수를 즉시 저장하면 플레이어가\n  전체 구성을 비교하기 어렵고, 실패 중간 상태가 영구 데이터가 될 위험이 있습니다.\n- 의도한 사용자 경험: 장비를 여러 번 옮겨 최종 구성을 눈으로 검토하고, 잘못된 아이템과\n  이유를 고친 뒤 한 번만 저장합니다.\n- 범위와 제외: 9×9 사각 장착판과 보관함 전환에 적용합니다. ItemDB 이미지 배율·X/Y 보정의\n  실제 렌더링 연결은 이번 범위가 아닙니다.\n- 영향 소스: InventoryModel.luau, ItemPlacementDraft.luau, Screen.luau,\n  InventoryV2Service.luau\n- 관련 위키: inventory-item-concept@v020\n- 검증과 증거: 충돌 장비의 결정적 이동, 잠긴 칸 초안·저장 비활성·되돌리기 Luau 테스트와\n  Galaxy A06 Studio Play 실패 상태 캡처.\n\n### PBP-UI-004 — 선택 우선 장비 조작과 세로 보관함\n\n- 날짜: 2026-08-23\n- 도메인: 모바일 인벤토리 / 터치 UX\n- 변경 유형: changed\n- 이전 규칙: 아이템 탭이 룬 화면 이동과 직접 연결되고 보관 카드·스크롤·배치 드래그의 입력\n  의도가 충분히 분리되지 않았으며 보관함은 가로 흐름을 전제로 했습니다.\n- 새 유효 규칙: 짧은 탭은 선택만 하고 회전 버튼을 보여 줍니다. 움직이지 않은 길게 누르기는\n  룬 페이지·상세 정보 메뉴를 열고, 움직임이 생기면 세로 스크롤 또는 실제 아이템 그림 드래그로\n  전환합니다. 보관함은 안전 여백을 둔 세로 다열 그리드를 사용합니다.\n- 근거: 같은 손가락으로 탐색·선택·배치·상세 보기를 수행하는 모바일에서는 행동 전에 선택\n  상태와 명확한 분기 피드백이 필요합니다.\n- 의도한 사용자 경험: 목록을 안정적으로 훑고, 원하는 장비를 선택해 회전하거나 끌며, 가만히\n  눌렀을 때만 다음 작업을 고릅니다.\n- 범위와 제외: 모바일 세로 인벤토리와 장비 상세 팝업에 적용합니다. PC 레이아웃 품질과\n  마우스 동등성은 현재 완료 기준이 아닙니다.\n- 영향 소스: inventory-rune-ui-spec.md, ItemGesturePolicy.luau, Screen.luau\n- 관련 위키: inventory-item-concept@v020\n- 검증과 증거: InventoryV2 스펙, UI 계약 테스트, Galaxy A06의 기본·메뉴·상세 캡처와\n  iPhone 7 `374×666`의 세로 스크롤·메뉴·상세 경계 검사.\n\n### PBP-DOC-002 — 비개발자 중심 커밋 위키와 다중 상태 증거\n\n- 날짜: 2026-08-23\n- 도메인: 개발 운영 / 기획 기록 / 위키 품질\n- 변경 유형: added\n- 이전 규칙: 커밋 위키는 기획 우선과 시각 증거를 요구했지만, 비개발자 가독성 판정과 여러\n  상태가 필요한 UI의 증거 범위가 충분히 구체적이지 않았습니다.\n- 새 유효 규칙: `한눈에 보는 변경`에서 무엇이·왜·어떻게 달라졌는지 먼저 답하고, 제품 언어로\n  경험·원칙·범위를 설명한 뒤 구현을 근거로 둡니다. 시각 변화는 이해에 필요한 기본·상호작용·\n  선택·성공·실패 상태를 실제 Studio 또는 브라우저에서 캡처합니다.\n- 근거: 기획 철학이 코드 목록에 묻히거나 한 장의 우연한 화면만 남으면 다음 직군과 미래의\n  작업자가 제품 의도를 복원하기 어렵습니다.\n- 의도한 사용자 경험: 디자이너·아티스트·테스터·새 팀원이 소스 코드를 열지 않고도 변경 이유,\n  최종 규칙과 실제 결과를 한 페이지에서 이해합니다.\n- 범위와 제외: 사용자 승인 커밋에서 발행하는 모든 위키 페이지에 적용합니다. 개발 중간\n  기록과 폐기된 접근은 계속 게시하지 않습니다.\n- 영향 소스: AGENTS.md, update-project-wiki/SKILL.md\n- 관련 위키: development-wiki@v013\n- 검증과 증거: 이번 커밋의 character-2d-rendering@v010과 inventory-item-concept@v020에\n  새 서사 순서와 제작·기본·선택·실패·상세·두 화면비 증거를 실제 적용.\n\n### PBP-INV-011 — 배치 순서 기반 장착 요약과 세 가지 빠른 작업\n\n- 날짜: 2026-08-23\n- 도메인: 모바일 인벤토리 / 장착 상태 / 룬 성장 진입\n- 변경 유형: changed\n- 대체 대상: PBP-INV-007의 별도 2×3 장착 무기 표시와 단순 상세·빼기 메뉴\n- 이전 규칙: 장착 무기는 별도 장착 탭의 고정 여섯 칸에서 확인하고 상세 정보 또는 배치 해제를\n  선택했으며, 무기 표시 순서와 다른 부위 장비의 동시 요약 계약이 완전하지 않았습니다.\n- 새 유효 규칙: 유효 배치 무기는 장착판에 들어온 순서를 저장해 왼쪽부터 최대 여섯 개를\n  표시합니다. 오른쪽에는 머리·귀걸이·목걸이·상의·장갑·하의·벨트·반지 둘·신발을\n  함께 표시합니다. 채워진 모든 요약 칸의 메뉴는 이름·등급·공격력·공격 속도 아래 상세 정보,\n  룬 보드 편집, 보관함으로 이동을 이 순서로 제공합니다.\n- 근거: 장착 결과와 다음 성장 작업이 배치 화면에서 분리되면 플레이어가 같은 아이템을 다시\n  찾고 화면을 왕복해야 하며, 단순 식별자 정렬은 실제 장착 순서를 설명하지 못합니다.\n- 의도한 사용자 경험: 장비를 놓은 순서와 현재 부위를 즉시 확인하고, 원하는 아이템에서 바로\n  정보를 읽거나 룬을 편집하거나 보관함으로 되돌립니다.\n- 범위와 제외: 장비 배치 초안의 요약 표시·빠른 작업·전투 무기 복제 순서에 적용합니다.\n  필드 자동 공격 규칙과 아직 등록되지 않은 기본 효과 수치는 변경하지 않습니다.\n- 영향 소스: InventoryModel.luau, ItemPlacementDraft.luau, StateSerializer.luau,\n  Screen.luau, InventoryV2Service.luau\n- 관련 위키: inventory-item-concept@v021\n- 검증과 증거: 배치 순서 보존 Luau 테스트, 세 버튼 순서 UI 계약, Galaxy A06와 iPhone 17\n  Pro의 메뉴·룬 보드 선택 이동 Studio MCP 확인.\n\n### PBP-UI-005 — 배치판 중심 모바일 장비 작업대와 시간 기반 터치 중재\n\n- 날짜: 2026-08-23\n- 도메인: 모바일 인벤토리 / 반응형 레이아웃 / 터치 입력\n- 변경 유형: added\n- 이전 규칙: PBP-UI-004는 선택·길게 누르기·세로 보관함을 정했지만 배치판·도구·장착\n  요약의 한 화면 구성, 확대판 이동과 배치 아이템 드래그의 시간 경계, 요약 영역의 비스크롤\n  규칙을 완전히 정의하지 않았습니다.\n- 새 유효 규칙: 가운데 배치판, 아래 무기 여섯 칸, 오른쪽 위 확대·축소·원상태·회전, 오른쪽\n  아래 부위 장비 열 칸을 한 작업대로 구성합니다. 모든 요약 칸은 화면에 맞춰 정사각형으로\n  줄어들고 스크롤하지 않습니다. 저장·되돌리기는 다른 영역을 축소하지 않는 오버레이입니다.\n  확대판에서 0.3초 이내 움직임은 판 이동, 0.3초 이상 1초 미만 움직임은 아이템 이동이며,\n  1초 정지 뒤 1초 게이지가 차면 메뉴가 열립니다. 보관 아이템을 집으면 목록 스크롤을 잠그고\n  아이템 드래그 그림은 이전 68px의 절반인 34px 위에 표시합니다.\n- 근거: 같은 아이템 위에서 판 탐색·장비 이동·메뉴 열기가 경쟁하고, 화면 크기나 초안 상태가\n  바뀔 때 작업 영역이 재배치되면 모바일 공간 퍼즐의 위치 기억이 깨집니다.\n- 의도한 사용자 경험: 작은 휴대폰에서도 모든 장착 상태와 필수 도구를 스크롤 없이 보고,\n  손가락의 속도와 멈춤만으로 의도한 판 이동·장비 이동·메뉴를 안정적으로 실행합니다.\n- 범위와 제외: 모바일 세로 장비 배치 화면과 터치 입력에 적용합니다. PC 레이아웃 품질과\n  마우스 동등성은 현재 완료 기준이 아닙니다.\n- 영향 소스: ItemGesturePolicy.luau, Screen.luau, VisualTokens.luau,\n  test_inventory_v2_ui.py\n- 관련 위키: inventory-item-concept@v021\n- 검증과 증거: 정사각 비스크롤 UI 계약, 0.3초·1초 경계 Luau 테스트, Galaxy A06\n  359×718과 iPhone 17 Pro 401×776의 기본·메뉴·34px 드래그 Studio MCP 캡처와\n  콘솔 오류 없음 확인.\n\n### PBP-ITEMDB-003 — 모든 장비 화면에 동일한 ItemDB 원화 배치 적용\n\n- 날짜: 2026-08-24\n- 도메인: ItemDB / 모바일 장비 카드 / 배치 시각화\n- 변경 유형: changed\n- 이전 규칙: ItemDB는 사각 점유와 아이콘 자산을 생성했지만, 보관 카드가 웹에서 조정한\n  배율·X/Y 중심·기본 회전을 배치판과 같은 방식으로 사용하지 않았고 카드 아래 실제 점유\n  형태도 보이지 않았습니다.\n- 새 유효 규칙: ItemDB의 배율·중심 보정·기본 회전을 보관 카드, 배치판과 드래그 그림의\n  단일 시각 기준으로 사용합니다. 카드에는 현재 90° 회전을 반영한 실제 점유 칸을 그림 아래\n  표시하며, 원본·공개 DB·생성 런타임을 같은 리비전으로 유지합니다.\n- 근거: 웹에서 정중앙과 크기를 확정해도 게임 화면이 별도 맞춤값을 쓰면 같은 아이템이 화면마다\n  다르게 보이고, 플레이어는 배치 전에 차지할 모양을 예측할 수 없습니다.\n- 의도한 사용자 경험: 웹에서 확인한 크기와 중심 그대로 장비를 보고, 카드를 회전해 점유 모양과\n  그림 방향을 배치 전에 함께 확인합니다.\n- 범위와 제외: 활성 48종의 보관 카드·장비 배치판·드래그 그림과 ItemDB 생성물에 적용합니다.\n  아이템의 전투 능력치나 신규 효과는 변경하지 않습니다.\n- 영향 소스: inventory-item-layouts.json, GeneratedItemLayouts.luau, Screen.luau,\n  item-db-data.js\n- 관련 위키: inventory-item-concept@v022, backpack-combat-stat-database@v001\n- 검증과 증거: ItemDB 리비전 `8fb41028ba82d814`, 증폭 펜던트·집중의 반지 중심값 회귀 검사,\n  Galaxy A06의 선택·90° 회전 카드와 두 모바일 화면비의 카드 점유 미리보기 확인.\n\n### PBP-INV-012 — 배치 상태별 저장 또는 되돌리기 후 룬 이동\n\n- 날짜: 2026-08-24\n- 도메인: 장비 초안 / 룬 성장 진입 / 모바일 단계 단축\n- 변경 유형: changed\n- 이전 규칙: 저장하지 않은 장비 변경이 있으면 룬 보드 이동을 막고, 플레이어가 배치 화면으로\n  돌아가 저장 또는 되돌리기를 직접 끝낸 뒤 같은 아이템을 다시 찾아야 했습니다.\n- 새 유효 규칙: 배치가 정상일 때는 `저장하고 이동하기`, 정상이 아닐 때는\n  `배치를 되돌리고 이동하기`를 제공합니다. 공통으로 `배치로 돌아가기`가 있으며, 저장 성공\n  또는 마지막 저장 상태 복원 뒤 처음 선택한 아이템의 룬 보드로 바로 이동합니다.\n- 근거: 데이터 안전을 지키는 과정이 같은 아이템을 다시 찾는 반복 단계가 되어서는 안 되며,\n  저장 가능 여부는 시스템이 이미 알고 있으므로 다음 안전 행동을 직접 제시할 수 있습니다.\n- 의도한 사용자 경험: 변경 내용을 잃거나 잘못 저장하지 않으면서 한 번의 선택으로 장비 배치를\n  마무리하고 원하는 아이템의 룬 성장으로 이어 갑니다.\n- 범위와 제외: 장착 요약의 룬 보드 편집과 장비 초안 저장·되돌리기에 적용합니다. 룬 초안의\n  저장 규칙 자체는 바꾸지 않습니다.\n- 영향 소스: Screen.luau, test_inventory_v2_ui.py\n- 관련 위키: inventory-item-concept@v022\n- 검증과 증거: Galaxy A06에서 정상 초안의 저장 후 이동 팝업과 잠긴 칸 초안의 되돌리기 후\n  이동 팝업, 선택 아이템 보존과 서버 실패 시 보류 상태 정리 계약 검사.\n\n### PBP-UI-006 — 터치 영역별 보관함 의도와 기기 전체 인벤토리 집중층\n\n- 날짜: 2026-08-24\n- 도메인: 모바일 보관함 / 선택 피드백 / 화면 집중\n- 변경 유형: changed\n- 대체 대상: PBP-UI-004와 PBP-UI-005의 보관함 스크롤·드래그 중재 세부 규칙\n- 이전 규칙: 빠른 움직임과 길게 누르기로 스크롤·드래그를 나눴지만 카드 전체가 두 행동의\n  경쟁 영역이어서 스크롤 중 아이템이 들리거나, 이를 막은 뒤 아이템이 전혀 들리지 않는\n  상태가 반복됐습니다. 카드 등급 외곽선과 선택선도 비슷했고 안전 영역 밖에는 필드가 보였습니다.\n- 새 유효 규칙: 아이템 그림의 8px 이상 움직임은 즉시 드래그하고, 카드 여백·카드 사이의\n  0.4초 이내 세로 움직임은 스크롤합니다. 같은 시간 안의 가로 이탈은 취소하고 0.4초 이상\n  누른 뒤 움직이면 카드 어디서든 드래그합니다. 기본 외곽선은 얇은 중립색, 선택은 안쪽 라임색\n  선입니다. 별도 불투명 배경이 기기 전체를 덮고 뒤 입력을 막되 본체의 안전 영역은 유지합니다.\n- 근거: 한 영역에서 시간만으로 반대 행동을 모두 추측하는 것보다 플레이어가 직접 잡은 대상과\n  빈 공간의 의미를 보존해야 일관된 근육 기억이 생깁니다. 인벤토리 밖 필드 노출은 작업 화면의\n  집중과 완결성을 약화합니다.\n- 의도한 사용자 경험: 그림을 잡으면 즉시 장비가 들리고, 여백과 카드 사이를 밀면 안정적으로\n  목록이 움직이며, 선택 대상과 인벤토리 경계를 한눈에 이해합니다.\n- 범위와 제외: 모바일 장비 보관함의 터치 입력, 카드 외곽선과 인벤토리 전체 배경에 적용합니다.\n  PC 마우스 동등성과 게임 필드의 서버 동작은 변경하지 않습니다.\n- 영향 소스: ItemGesturePolicy.luau, Screen.luau, InventoryV2.spec.luau,\n  test_inventory_v2_ui.py\n- 관련 위키: inventory-item-concept@v022\n- 검증과 증거: Luau의 빠른 세로 스크롤·즉시 그림 잡기·0.4초 이후 드래그 경계, Galaxy A06와\n  iPhone 17 Pro의 카드 선택선·전체 화면 암막, iPhone 17 Pro 정사각 요약 20칸과 콘솔 오류\n  없음 확인.\n\n### PBP-RUNE-008 — 드래그 중 같은 등급 능력 칸의 실제 색 유지\n\n- 날짜: 2026-08-24\n- 도메인: 룬 보드 / 등급 가독성 / 드래그 안내\n- 변경 유형: changed\n- 이전 규칙: 룬을 들면 같은 등급의 열린 능력 아이콘은 남았지만 칸 바탕이 모두 같은 어두운\n  색으로 보여, 현재 룬 등급과 활성 영역의 관계를 색으로 읽을 수 없었습니다.\n- 새 유효 규칙: 같은 등급의 열린 능력 칸은 G0~G6의 실제 등급색과 아이콘을 함께 유지합니다.\n  유효 연결 칸은 라임색을 위에 표시하고 잠긴 칸은 경고색을 유지합니다.\n- 근거: 룬 보드의 핵심 판단은 현재 들고 있는 등급이 어떤 능력 영역을 사용할 수 있는지\n  비교하는 것이므로, 아이콘뿐 아니라 이미 학습한 등급색도 동시에 제공해야 합니다.\n- 의도한 사용자 경험: 룬을 드는 순간 같은 등급 영역을 색으로 훑고, 그중 실제로 놓을 수 있는\n  연결 칸을 라임색으로 즉시 구분합니다.\n- 범위와 제외: 룬 드래그 중 열린 능력 칸과 유효·잠금 안내에 적용합니다. 룬 생성 확률이나\n  능력 수치는 바꾸지 않습니다.\n- 영향 소스: RuneDragVisualState.luau, Screen.luau, InventoryV2.spec.luau\n- 관련 위키: inventory-item-concept@v022\n- 검증과 증거: G0 룬 드래그에서 먹빛 등급 칸 여덟 개와 라임 유효 칸 한 개를 Studio MCP로\n  확인하고, 열린·잠긴·유효 조합을 Luau와 Python 계약 검사로 확인.\n\n### PBP-MONSTER-001 — 첫 일반 몬스터의 서버 권위 상태 흐름\n\n- 날짜: 2026-08-25\n- 도메인: 몬스터 / 전투 AI / 서버 권위\n- 변경 유형: added\n- 이전 규칙: 실제로 추적하고 공격하는 공통 몬스터 런타임과 첫 기준 몬스터가 없었습니다.\n- 새 유효 규칙: 가시덩굴 화분괴물은 대기·추적·공격·귀환·죽음 상태를 사용하며 탐색, 경로,\n  공격 위치, 피해, 죽음과 정규 재생성은 서버가 결정합니다. 클라이언트는 상태를 표현만 합니다.\n- 근거: 첫 몬스터부터 피해 판정과 화면 표현을 분리해야 이후 몬스터가 늘어도 치트와\n  클라이언트 간 불일치를 막고 같은 상태 구조를 확장할 수 있습니다.\n- 의도한 사용자 경험: 몬스터가 플레이어를 안정적으로 발견하고 추적하며 공격 뒤 다시 행동하고,\n  화면과 실제 피해가 같은 사건으로 느껴집니다.\n- 범위와 제외: 첫 일반 풀속성 몬스터와 공통 상태 흐름에 적용합니다. 전리품·웨이브·보스 단계는\n  후속 범위입니다.\n- 영향 소스: monster-definitions.json, MonsterService.luau, MonsterVisualController.luau,\n  DamageResolver.luau\n- 관련 위키: grass-vine-monster@v001\n- 검증과 증거: MonsterDB 서버 권위 테스트 5개, Luau 컴파일, Studio Play 장판·분출 장면과\n  MonsterService 콘솔 오류 없음 확인.\n\n### PBP-MONSTER-002 — 2초 고정 위치 장판과 덩굴 분출\n\n- 날짜: 2026-08-25\n- 도메인: 몬스터 공격 / 회피 학습 / 전투 가독성\n- 변경 유형: added\n- 이전 규칙: 이 몬스터의 지면 공격 타이밍과 플레이어가 피할 수 있는 시각 계약이 없었습니다.\n- 새 유효 규칙: 공격 시작 순간의 플레이어 바닥 위치를 고정하고 빨간 원을 2초간 보여 준 뒤\n  같은 자리에서 덩굴을 분출합니다. 장판을 벗어나면 피하고 남아 있으면 피해와 넉백을 받습니다.\n- 근거: 피할 수 없는 추적 피해보다 원인·경고·결과가 같은 위치에 이어지는 공격이 첫 몬스터의\n  전투 학습에 적합합니다.\n- 의도한 사용자 경험: 덩굴손을 땅에 찌르는 자세와 빨간 원을 보고 즉시 이동해 분출을 피하며,\n  맞았을 때도 왜 맞았는지 이해합니다.\n- 범위와 제외: 가시덩굴 화분괴물의 목표 지점 고정 지면 공격에 적용합니다. 유도 장판이나\n  연속 다중 장판은 별도 공격 종류입니다.\n- 영향 소스: monster-definitions.json, MonsterService.luau, MonsterVisualController.luau\n- 관련 위키: grass-vine-monster@v001\n- 검증과 증거: Studio 최종 장판·분출 캡처, telegraph_duration_seconds=2 관계 검사와\n  서버 피해 경로 테스트.\n\n### PBP-MONSTERDB-001 — 몬스터 수치와 표현의 단일 편집 원본\n\n- 날짜: 2026-08-25\n- 도메인: 콘텐츠 운영 / 몬스터 밸런스 / 데이터베이스\n- 변경 유형: added\n- 이전 규칙: 몬스터의 전투·탐색·이동·표현 값을 한 곳에서 편집하고 런타임과 공개 DB를 같은\n  리비전으로 만드는 운영 경로가 없었습니다.\n- 새 유효 규칙: MonsterDB가 활성화, 정체성, 능력치, 탐색, 이동, AI, 공격, 스폰, 생명주기,\n  충돌, 표현과 애니메이션의 단일 원본입니다. 저장은 생성물을 함께 만들고 Studio 반영은\n  명시적인 굽기만 사용합니다.\n- 근거: 수치가 코드와 문서에 흩어지면 밸런스 변경이 누락되고, 웹 편집이 실행 중인 플레이를\n  자동으로 덮어쓰면 검증 경계가 사라집니다.\n- 의도한 사용자 경험: 기획자가 109개 값을 이름과 단위로 찾아 조정하고 같은 리비전의 웹·게임\n  결과를 예측 가능하게 검증합니다.\n- 범위와 제외: 몬스터 정의와 생성 런타임에 적용합니다. 전리품과 지역별 웨이브 DB는 포함하지\n  않습니다.\n- 영향 소스: monster-definitions.json, monster_db.py, monster-db.js,\n  GeneratedMonsterDefinitions.luau\n- 관련 위키: grass-vine-monster@v001, development-wiki\n- 검증과 증거: revision d0ad884e8183337d, 1개 몬스터·109개 변수 check 통과와 내장 브라우저\n  전체 편집기 경고·오류 0 확인.\n\n### PBP-DEV-002 — MonsterDB 기반 F2 선택 소환\n\n- 날짜: 2026-08-25\n- 도메인: Studio 진단 / 몬스터 검증\n- 변경 유형: added\n- 이전 규칙: 몬스터가 늘어날 때 공통 목록에서 고르고 플레이어 기준 위치에 즉시 소환하는\n  테스트 경로가 없었습니다.\n- 새 유효 규칙: F2 창은 게임 ON인 MonsterDB 항목을 자동으로 정렬해 나열하고 안정 ID로 서버에\n  요청합니다. 성공 시 캐릭터 정면 수평 10 stud에 세션 전용 몬스터를 만들며 정규 재생성은\n  하지 않습니다.\n- 근거: 몬스터마다 별도 명령어나 임시 스폰 코드를 만들면 콘텐츠가 늘수록 테스트 비용과\n  잘못된 ID·위치 입력이 함께 늘어납니다.\n- 의도한 사용자 경험: 개발자는 목록에서 이름을 보고 한 번 선택·소환해 추적과 공격을 바로\n  반복 검증합니다.\n- 범위와 제외: Roblox Studio F2 진단에만 적용하며 실제 플레이어용 UI나 배포 게임 소환\n  권한으로 노출하지 않습니다.\n- 영향 소스: DeveloperTestControls.luau, DeveloperTestWindow.luau,\n  DeveloperTestController.luau, MonsterService.luau, BackpackUIBootstrap.client.luau\n- 관련 위키: grass-vine-monster@v001\n- 검증과 증거: Studio MCP Play에서 액션 바인딩·기본 선택·서버 성공 응답,\n  SpawnSource=DeveloperF2, 거리 10.0·정면 내적 1.0 확인.\n\n### PBP-ART-004 — 최초 생성부터 실제 알파인 게임용 래스터\n\n- 날짜: 2026-08-25\n- 도메인: 아트 제작 / 이미지 자산 / 투명 배경\n- 변경 유형: added\n- 이전 규칙: 마젠타 등 키 색 배경을 가진 이미지를 만든 뒤 제거·재가공하는 공정이 게임용\n  아이콘과 애니메이션 자산 제작에 사용될 수 있었습니다.\n- 새 유효 규칙: 게임에 직접 합성할 아이콘, 캐릭터·몬스터 프레임, 스프라이트와 잘라 쓰는\n  이펙트는 최초 유효 생성부터 실제 투명 배경을 요청합니다. 크로마키 중간 이미지는 금지하고\n  알파·투명 픽셀·가장자리 오염을 검사한 뒤 승격합니다.\n- 근거: 색 키 제거는 잎·광택·외곽선 같은 유효 색을 손상시키고 키 색 후광과 불필요한 재작업을\n  만듭니다. 원천 알파는 가장 짧고 재현 가능한 제작 경로입니다.\n- 의도한 사용자 경험: 게임 안에서 캐릭터와 아이콘 가장자리가 배경색에 오염되지 않고 어떤\n  필드·UI 위에서도 깨끗하게 합성됩니다.\n- 범위와 제외: 새 게임용 래스터 자산에 적용합니다. 승인된 기존 자산은 재생성 요청 전까지\n  유지하고, 콘셉트·전체 장면·스크린샷처럼 의도적으로 불투명한 이미지는 제외합니다.\n- 영향 소스: AGENTS.md, create-2d-sprite-animation workflow, future image-generation prompts\n- 관련 위키: grass-vine-monster@v001, character-2d-rendering, inventory-item-concept\n- 검증과 증거: 가시덩굴 화분괴물의 1024×128 런타임 아틀라스 네 개 모두 hasAlpha=yes 확인.\n",
          "source_path": "wiki/content/pages/product-planning-change-log/v014.md",
          "timeline_order": 46
        },
        {
          "id": "product-planning-change-log",
          "title": "제품 기획 변경 원장",
          "summary": "누적 원장을 보존하면서 ItemDB 원화 배치의 런타임 일치, 의도가 분명한 보관함 터치 영역, 배치 상태별 룬 이동, 룬 등급색 가이드와 전체 화면 집중 배경을 새 유효 규칙으로 추가했습니다.",
          "status": "active",
          "category": "planning",
          "tags": [
            "planning",
            "decision-log",
            "product",
            "inventory",
            "equipment",
            "rune-board",
            "weapon",
            "combat",
            "mobile",
            "documentation",
            "character",
            "animation",
            "touch",
            "responsive"
          ],
          "created_at": "2026-08-15",
          "updated_at": "2026-08-24",
          "authors": [
            "Codex"
          ],
          "version": 13,
          "change_type": "updated",
          "change_summary": "v012까지의 누적 결정을 보존하고, 카드 원화·점유의 ItemDB 권위, 보관함 스크롤·즉시 잡기 분리, 저장 가능 여부에 따른 룬 이동, 룬 등급색과 기기 전체 암막 규칙을 추가했습니다.",
          "supersedes": "product-planning-change-log@v012",
          "sources": [
            "wiki/content/pages/product-planning-change-log/v012.md",
            "wiki/content/pages/inventory-item-concept/v022.md",
            "docs/gameplay/inventory-item-layouts.json",
            "src/ReplicatedStorage/BackpackUI/GeneratedItemLayouts.luau",
            "src/ReplicatedStorage/InventoryV2/ItemGesturePolicy.luau",
            "src/ReplicatedStorage/InventoryV2/RuneDragVisualState.luau",
            "src/ReplicatedStorage/InventoryV2/Screen.luau",
            "tests/InventoryV2.spec.luau",
            "tests/test_inventory_v2_ui.py",
            "tests/test_item_db.py",
            "wiki/content/media/inventory-item-concept/v022/studio-default-backdrop-cards-galaxy-a06.jpg",
            "wiki/content/media/inventory-item-concept/v022/studio-selected-rotated-card-galaxy-a06.jpg",
            "wiki/content/media/inventory-item-concept/v022/studio-save-and-rune-move-popup-galaxy-a06.jpg",
            "wiki/content/media/inventory-item-concept/v022/studio-revert-and-rune-move-popup-galaxy-a06.jpg",
            "wiki/content/media/inventory-item-concept/v022/studio-rune-grade-drag-galaxy-a06.jpg"
          ],
          "related": [
            "weapon-combat-presentation",
            "inventory-item-concept",
            "synergy-icon-system",
            "backpack-combat-stat-database",
            "development-wiki",
            "character-2d-rendering",
            "project-overview"
          ],
          "validation": [
            "./tools/test_inventory_v2.sh: InventoryV2.spec ok",
            "python3 -m unittest discover -s tests: 142 tests passed",
            "python3 tools/item_db.py check: 48 items, revision 8fb41028ba82d814 통과",
            "node tests/item-db.spec.js: Wiki ItemDB tests passed",
            "Roblox Studio MCP Play · Galaxy A06 portrait · 359×718: 카드 선택·회전, 저장 가능·불가능 룬 이동, G0 등급색 드래그와 전체 화면 암막 확인",
            "Roblox Studio MCP Play · iPhone 17 Pro portrait · 401×776: 정사각 요약 20칸, 스크롤·즉시 잡기 분기, 전체 화면 암막과 콘솔 오류 없음 확인",
            "Built-in browser localhost preview: v013과 PBP-ITEMDB-003·PBP-INV-012·PBP-UI-006·PBP-RUNE-008 렌더링, console warning/error 0 확인",
            "python3 tools/wiki.py build && python3 tools/wiki.py check: 10 pages, 71 revisions, 103 media files 통과",
            "python3 -m unittest tests/test_wiki.py tests.test_repository_policy: 19 tests passed",
            "git diff --check: 통과"
          ],
          "body": "# 제품 기획 변경 원장\n\n## 목적과 기록 원칙\n\n이 페이지는 구현 파일 목록이 아니라 ProjectBackpack의 제품 방향이 왜 바뀌었고 지금 어떤\n규칙이 유효한지를 누적 보존합니다. 플레이어 또는 운영자가 경험하는 제품·게임플레이·UX·\n콘텐츠·아트·플랫폼 규칙이 추가, 변경, 대체 또는 폐기될 때 기록합니다. 동작을 바꾸지 않는\n내부 리팩터링은 원장 대상이 아닙니다.\n\n각 결정은 안정적인 ID를 가집니다. 이후 규칙이 달라지면 이미 커밋된 항목을 고치거나 지우지\n않고 새 버전에 후속 항목을 추가해 이전 ID와 관계를 명시합니다. 최신 버전은 과거 원장과\n현재 유효 규칙을 모두 포함하며, 실제 제품 변경·주제별 위키·검증 증거와 같은 커밋에서\n발행합니다.\n\n## 현재 유효 규칙\n\n### PBP-INV-001 — 인벤토리에는 명확한 이탈과 호환 토글이 있다\n\n모바일 인벤토리는 우측 최상단 닫기 버튼으로 메인 화면에 복귀합니다. PC 호환 경로의 Tab\n토글은 진단 호환으로 남지만 현재 제품 UI 완료 기준은 모바일입니다.\n\n### PBP-ITEMDB-002 — 최종 48종이 ItemDB와 런타임의 단일 활성 집합이다\n\n과거 90종과 특수 아이템 미디어는 활성 원본·공개 DB·생성 런타임에서 제거합니다. 무기 14종과\n방어구·장신구 34종의 이름, 사각 점유, 카툰 아이콘과 Roblox 자산 참조를 ItemDB 원본에서\n생성하며 ON/OFF 경계는 향후 콘텐츠 운영을 위해 유지합니다.\n\n### PBP-ITEMDB-003 — ItemDB 원화 배치는 모든 장비 화면의 단일 시각 기준이다\n\n웹 ItemDB에서 확정한 그림 배율, X/Y 중심 보정과 기본 회전을 보관 카드·배치판·드래그 그림이\n같이 사용합니다. 보관 카드에는 회전된 실제 점유 칸을 그림 아래에 표시하며, ItemDB를 바꾸면\n공개 DB와 생성 런타임을 같은 리비전으로 다시 만들고 Studio에서 함께 확인합니다.\n\n### PBP-CONTENT-001 — 폐기 아이템은 모든 제품 표면에서 함께 제거한다\n\n아이템을 실제로 폐기할 때는 카탈로그·레이아웃·이미지·런타임·공개 DB에서 함께 제거하고\n매니페스트 이력만 보존합니다.\n\n### PBP-DOC-001 — 기획 변경은 커밋 시 누적 원장으로 발행한다\n\n물질적인 제품 기획 변경은 사용자 승인 커밋에서 안정적인 ID와 함께 누적 발행합니다.\n\n### PBP-ACTION-002 — Dash는 3단계 자세와 이동 구간 잔상을 사용한다\n\n기본 Dash의 방향 잠금·0.30초·20스터드 규칙은 유지하되, 시작 프레임 고정은 예비 0.05초·\n이동 0.20초·회복 0.05초의 통짜 캐릭터 자세로 대체합니다. 잔상은 이동 구간에서만 실제\n경로 뒤에 생기고 회복 구간에서 본체로 수렴합니다. 룬의 추가 거리와 무적시간은 기존 한도\n안에서 별도 적용합니다.\n\n### PBP-ART-003 — 정지 캐릭터는 발이 고정된 좌우 호흡을 사용한다\n\nIdle은 마지막 좌우 방향을 유지하는 8프레임 6fps 통짜 캐릭터 애니메이션입니다. 발과 골반\n아래는 고정하고 상체의 들숨·날숨만 움직이며, 캐릭터 전체를 균일 확대·축소하지 않습니다.\n\n### PBP-INV-010 — 장비 배치는 전체 초안으로 검토하고 원자 저장한다\n\n아이템 추가·이동·회전·보관은 마지막 저장 상태와 분리된 전체 초안을 갱신합니다. 겹친 장비는\n가장 가까운 빈자리로 밀어 전체 결과를 미리 보여 주며, 잠금·한도·무게 등 잘못된 상태는 빨간\n초안으로 남기되 저장을 끕니다. 서버는 전체 좌표를 다시 검증해 모두 유효할 때만 한 번에\n교체하고 되돌리기는 마지막 저장 상태를 복원합니다.\n\n### PBP-UI-004 — 모바일 장비 조작은 선택·길게 누르기·세로 보관함을 사용한다\n\n짧은 탭은 선택만 하고 선택된 아이템에 회전 버튼을 노출합니다. 움직이지 않은 길게 누르기는\n룬 페이지와 상세 정보 메뉴를 열며, 움직임이 생기면 스크롤 또는 드래그로 전환합니다. 보관함은\n세로 다열 그리드이고 실제 아이템 그림과 점유 가이드는 같은 스냅 위치를 사용합니다.\n\n### PBP-INV-011 — 장착 요약은 배치 순서와 부위 상태를 즉시 관리한다\n\n유효하게 배치된 무기는 장착판에 들어온 순서를 보존해 왼쪽부터 최대 여섯 칸에 표시합니다.\n무기가 아닌 장비는 머리·귀걸이·목걸이·상의·장갑·하의·벨트·반지 둘·신발의 열 칸에\n표시합니다. 채워진 요약 칸은 아이템 이름·등급·공격력·공격 속도와 상세 정보, 룬 보드 편집,\n보관함으로 이동의 세 작업을 같은 문맥에서 제공합니다.\n\n### PBP-INV-012 — 배치 변경 상태에서도 한 번의 선택으로 룬 보드에 이동한다\n\n룬 보드 편집을 누를 때 장비 초안이 정상이라면 `저장하고 이동하기`, 정상이 아니라면\n`배치를 되돌리고 이동하기`를 보여 줍니다. 두 경우 모두 `배치로 돌아가기`로 취소할 수 있고,\n서버 저장 성공 또는 마지막 저장 상태 복원 뒤 처음 선택한 아이템의 룬 보드로 바로 이동합니다.\n\n### PBP-UI-005 — 모바일 장비 화면은 배치판 중심의 안정적인 작업대다\n\n가운데 배치판, 아래 여섯 무기, 오른쪽 도구와 부위별 장비를 한 화면에 둡니다. 요약 칸은\n해상도에 맞춰 정사각형으로 축소되고 자체 스크롤을 만들지 않으며, 저장·되돌리기는 화면 위에\n떠서 다른 영역을 줄이지 않습니다. 확대판은 보이는 스크롤바 없이 직접 끌어 움직입니다.\n배치 아이템 위의 움직임은 0.3초 이내면 확대판 이동, 0.3초 이상 1초 미만이면 아이템 이동으로\n판정하고, 1초 동안 정지했을 때만 메뉴 게이지를 시작합니다. 보관함 드래그가 확정되면 보관함\n스크롤을 잠그며 아이템 그림은 손가락 위로 34px만 띄웁니다.\n\n### PBP-UI-006 — 보관함은 터치 영역별 의도를 보존하고 인벤토리는 기기 전체에 집중층을 둔다\n\n아이템 그림에서 8px 이상 움직이면 즉시 장비를 들고, 카드 여백과 카드 사이의 0.4초 이내\n세로 움직임은 목록을 스크롤합니다. 0.4초 이내 가로 이탈은 취소하고 0.4초 이상 누른 뒤\n움직이면 카드 어디서든 장비를 듭니다. 모든 기본 카드 외곽선은 얇은 중립색이고 선택 카드만\n안쪽 라임색 선으로 구분합니다. 인벤토리 본체는 모바일 안전 영역을 유지하되 별도 짙은 배경이\n기기 전체를 덮어 필드 노출과 뒤쪽 입력을 막습니다.\n\n### PBP-DOC-002 — 커밋 위키는 비개발자 기획 서사와 충분한 화면 증거를 요구한다\n\n위키는 무엇이·왜·어떻게 달라졌는지와 사용자 경험을 먼저 설명하고 구현 세부는 뒤의 증거로\n둡니다. 눈에 보이는 변화는 기능을 이해하는 데 필요한 기본·선택·확장·성공·실패 상태를 실제\nStudio 또는 브라우저에서 캡처하며, 이미 커밋된 버전과 증거는 덮어쓰지 않습니다.\n\n### PBP-DEV-001 — Studio 무게 제한 테스트는 세션 전용이다\n\n기존 Studio 진단값은 영구 저장을 오염시키지 않습니다. 새 인벤토리 구현에서 무게 시스템을\n유지할지는 별도 결정하지만 진단 데이터 비영구 원칙은 유지합니다.\n\n### PBP-INV-009 — 메인 인벤토리는 사각 장착판과 부위별 제한을 사용한다\n\n유효한 사각 배치가 곧 장착입니다. 무기는 여섯 개, 반지는 두 개이며 같은 정의의 무기·반지는\n중복할 수 없습니다. 머리·귀걸이·목걸이·상의·하의·글러브·신발·벨트는 한 개씩 장착하고\n디아블로식 장비 화면은 같은 상태를 투영합니다.\n\n### PBP-SYNERGY-001 — 가방·시너지 제품 방향은 폐기한다\n\n가방 활성 칸, 육각 메인 인벤토리, 26종 시너지, 시너지 필터와 A/B/C 공간 접촉 효과는 새\n제품 방향에서 사용하지 않습니다. 육각형은 아이템별 룬 보드에만 사용합니다.\n\n### PBP-CONTENT-003 — 알파 장비 활성 집합은 48종이다\n\n무기 14종과 방어구·장신구 34종을 사용합니다. 크기별 두 역할을 두고 반지는 동일 아이템\n중복 금지로 인한 강제 조합을 피하기 위해 네 종류를 둡니다. 특수 아이템과 방패는 현재 48종에\n포함하지 않습니다.\n\n### PBP-RUNE-004 — 아이템마다 후보 10개 중 하나인 427칸 보드를 가진다\n\n각 아이템 정의는 61칸 영역 일곱 개, 총 427칸인 후보 보드 10개를 가집니다. 생성 시 하나를\n균등 선택해 VariantId와 Seed를 영구 저장합니다. 0~6 주등급은 영역을 하나씩 열고, 일곱\n중앙 시작점의 색 등록과 한 칸 간격 연결을 사용합니다. 능력 등급 총량은\n30·45·54·60·67·90·81칸이며 레어는 황금 테두리로 구분합니다.\n\n### PBP-COMBAT-001 — 자동 스킬·방어·확률에는 명시적 캡이 있다\n\n무기 스킬은 해당 무기의 기본 공격 횟수로 자동 발동하고 발사체·도탄·관통·다른 스킬은\n카운터를 늘리지 않습니다. 방패 막기는 최대 100%에서 방어력을 두 배로 적용하고, 방어력\n계산 뒤 최종 피해감소는 최대 50%입니다. 행동 빈도·확률·무적·발사체 수에는 항목별 캡을\n적용하되 선형 공격력·체력 성장은 허용합니다.\n\n### PBP-COMBAT-003 — 여섯 무기는 근접 할로에서 하나의 최근접 적을 정확히 겨눈다\n\n최대 여섯 장착 무기는 머리 가까운 좁은 타원의 왼쪽 세 개·오른쪽 세 개에 같은 간격으로\n배치하며 정중앙 위·아래는 비웁니다. 적이 없을 때는 원화 방향을 유지한 채 각자 부유합니다.\n적이 있으면 장착 집합이 사거리 안의 가장 가까운 생존 적 하나를 공통 후보로 고르고, 각 무기는\n자기 사거리 안에서 실제 칼끝·타격점·총구·화살·볼트 발사 방향을 그 적에게 맞춥니다. 오른쪽을\n기본 방향으로 그린 원거리 무기가 왼쪽을 볼 때는 거꾸로 돌리지 않고 수평 반전하며 회전축과\n공격 소켓도 함께 반전합니다. 서버 권위 표적·피해와 여섯 공격 계열은 유지합니다.\n\n### PBP-RUNE-003 — 알파 무기 14종은 고정된 능력 정체성을 가진다\n\n검·창·곡궁·석궁·총·메이스·도끼 각 두 종류는 A1~D2와 E1~E3의 실제 구현 훅을 가집니다.\n목걸이·반지·귀걸이는 호환 무기 전체에 적용되는 전역 레어를, 신발은 추가 대시 레어를\n제공합니다.\n\n### PBP-RUNE-005 — 룬은 34종 도형과 effect 기반 아이콘을 사용한다\n\n1~5칸 룬은 회전·반전을 동일시한 34종 자유 폴리헥스를 사용합니다. 일곱 색은 같은 중립 원화를\n틴트하고, 능력 의미는 실제 전투 effect_id와 1:1인 62종 중앙 아이콘으로 별도 합성합니다.\n드래그는 잡은 칸과 실제 형태를 유지하고 마지막 스냅 가이드를 서버 요청값으로 사용합니다.\n\n### PBP-RUNE-006 — 룬 등급·색·시작점은 일대일이며 배치는 회전만 사용한다\n\nG0~G6 룬은 먹빛·상아·초록·하늘·보라·황금·장미와 일대일입니다. 각 룬은 같은 번호 영역의\n중앙 시작점에서만 처음 등록하고 아이템 등급보다 높은 룬은 등록할 수 없습니다. 런타임 배치는\n60° 회전만 제공하고 별도 반전은 제공하지 않습니다. 첫 배치 전에는 중앙 한 칸, 이후에는 같은\n색 네트워크에서 한 칸 떨어진 연결 전선만 밝게 안내합니다.\n\n### PBP-UI-001 — 인벤토리와 룬 보드는 모바일 고정 작업 흐름을 공유한다\n\n상단 상태, 중앙 작업판, 하단 보관함을 안전 영역 안에 고정합니다. 아이템·룬 합성은 두 재료와\n결과 미리보기 문법을 공유하고 룬 보관함은 상하 스크롤을 사용합니다. 빈 룬 칸의 탭은 상단\n중앙에 능력 정보를 표시합니다.\n\n### PBP-UI-002 — 룬 보드는 문맥을 보존하고 필터는 카드 공간을 침범하지 않는다\n\n장착 룬 회전은 마지막 선택 룬에만 적용하고 확대·축소는 보고 있던 보드 위치를 보존합니다.\n룬 보관함은 `색상 필터`와 `칸 수 필터` 두 버튼만 한 줄에 두며, 보드 위 말풍선에서 G0~G6와\n1~5칸을 각각 다중 선택합니다. 능력 설명은 색상명을 반복하지 않고 옅은 황금색 글자·짙은\n보라색 외곽선으로 등급·능력명·수치를 표시합니다.\n\n### PBP-RUNE-007 — 룬 배치는 전체 초안으로 편집하고 원자적으로 저장한다\n\n룬 추가·이동·회전·회수는 마지막 저장 상태와 분리된 전체 초안을 갱신합니다. 규칙에 어긋난\n룬도 빨간 상태로 계속 편집할 수 있지만 저장은 비활성화됩니다. 서버는 전체 배치를 다시\n검증해 유효할 때만 한 번에 교체하며, 되돌리기는 마지막 저장 상태를 복원합니다. 같은 색\n네트워크는 변을 맞대지 않고 정확히 한 칸 간격을 두며 배치 순서와 무관하게 판정합니다.\n\n### PBP-RUNE-008 — 룬 드래그는 같은 등급의 열린 능력 칸을 실제 등급색으로 보여 준다\n\n룬을 들면 같은 등급의 열린 능력 칸과 아이콘을 G0~G6의 먹빛·상아·초록·하늘·보라·황금·\n장미색으로 표시합니다. 유효 연결 칸의 라임색은 등급색보다 위에 보이고, 잠긴 영역은 같은\n등급처럼 보이지 않게 경고색을 유지합니다.\n\n### PBP-UI-003 — 룬 보드는 현재 조작 문맥과 잠금 이유를 한 화면에 보여 준다\n\n보관 카드와 배치 룬을 모두 선택·60° 회전할 수 있고, 배치 룬은 이동하거나 보관함으로 회수할\n수 있습니다. 가이드는 현재 잡은 셀·회전·전체 배치를 기준으로 계산하며 유효 칸은 라임색,\n아이템 등급으로 닫힌 칸은 탁한 적갈색, 무효 초안은 빨간색으로 표시합니다. 기존 배치와 같은\n색 능력 아이콘은 드래그 중에도 남깁니다. 벌집은 틈 없는 얇은 선, 룬은 색이 비치는 투명\n크리스털 프레임을 사용하고, 전체 필터는 일부 OFF면 모두 ON·모두 ON이면 모두 OFF로\n동작합니다. 룬 각인 효과 탭은 유효 노드를 효과별로 합산합니다.\n\n### PBP-COMBAT-004 — 인벤토리 작업 중 필드 공격 연출을 일시 정지한다\n\n인벤토리나 룬 작업 화면이 열리면 클라이언트 공격 연출을 즉시 지우고 새 연출을 받지 않으며\n전투 VFX 오버레이를 끕니다. 화면을 닫으면 표현만 다시 허용합니다. 서버 표적·공격·피해와\n장착 상태는 바꾸지 않습니다.\n\n### PBP-ART-002 — 아이템은 사각 점유와 모바일 전투에 맞는 카툰 실루엣을 사용한다\n\n최종 48종 원화는 굵고 밝은 카툰풍으로 통일합니다. 근접 무기는 위쪽, 활·석궁·총은 오른쪽을\n기본 방향으로 두고 발사체와 궤적을 원화에 굽지 않습니다. 그림의 질량과 돌출부가 사각 점유\n형태에 자연스럽게 맞아야 합니다.\n\n## 변경 원장\n\n### PBP-INV-001 — 인벤토리 이탈과 Tab 토글\n\n- 날짜: 2026-08-15\n- 도메인: 인벤토리 접근성 / 플랫폼 입력\n- 변경 유형: changed\n- 이전 규칙: 화면 내부 닫기 버튼과 명확한 PC 토글 경로가 없었습니다.\n- 새 유효 규칙: 모바일 우측 최상단 닫기 버튼을 두고 PC 호환 시 Tab을 인벤토리 전용\n  토글로 사용하며 기본 플레이어 목록을 해제합니다.\n- 근거: 작업 화면에는 안전한 이탈 경로가 필요하며 한 입력이 두 UI를 열면 안 됩니다.\n- 의도한 사용자 경험: 닫는 법을 탐색하지 않고 즉시 메인 화면으로 돌아갑니다.\n- 범위와 제외: 모바일 터치와 PC 입력 호환에 적용하며 PC 레이아웃 품질은 제외합니다.\n- 영향 소스: Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: Luau 테스트, 소스 검사와 최종 Studio 모바일 화면.\n\n### PBP-INV-002 — 배치 보드 범위와 도구 배치\n\n- 날짜: 2026-08-15\n- 도메인: 모바일 배치 보드 / 공간 가독성\n- 변경 유형: changed\n- 이전 규칙: 빈 배치 영역과 우측 도구의 공간 관계가 충분히 드러나지 않았습니다.\n- 새 유효 규칙: 전체 배치 영역에 옅은 육각 격자를 그리고 우측 상단 모드 탭과 우측 하단\n  확대 도구를 위한 반응형 인셋을 둡니다.\n- 근거: 빈 공간도 게임 공간이며 조작 계층과 동시에 보여야 합니다.\n- 의도한 사용자 경험: 배치 가능 범위와 도구 위치를 즉시 이해합니다.\n- 범위와 제외: 모바일 보드와 모드·확대 도구에 적용합니다.\n- 영향 소스: VisualTokens.luau, ScreenRenderer.luau, ScreenState.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: iPhone 17 Pro와 Galaxy A06 Studio Play의 잘림·겹침 검사.\n\n### PBP-INV-003 — 손가락 위 드래그와 단일 목적지 안내\n\n- 날짜: 2026-08-15\n- 도메인: 인벤토리 드래그 / 배치 피드백\n- 변경 유형: changed\n- 이전 규칙: 아이템이 포인터 아래에 남고 여러 강조가 목표 칸과 경쟁했습니다.\n- 새 유효 규칙: 회전된 그림 전체를 포인터 위로 올리고 그림과 목적지 외곽선만 표시합니다.\n- 근거: 드래그 중에는 대상과 내려놓을 위치가 가장 강하게 읽혀야 합니다.\n- 의도한 사용자 경험: 손가락에 가리지 않은 그림으로 정확히 조준합니다.\n- 범위와 제외: 아이템 드래그에 적용하며 그림이 없는 가방은 점유 형태를 사용합니다.\n- 영향 소스: DragPlacementState.luau, Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 포인터 리프트·잡은 칸·outline-only Luau 테스트.\n\n### PBP-INV-004 — 카드·선택 정보와 0.1Kg 정밀도\n\n- 날짜: 2026-08-15\n- 도메인: 아이템 정보 구조 / 무게 규칙\n- 변경 유형: changed\n- 이전 규칙: 무게 표현과 시너지 정렬이 좁은 카드에서 일관되지 않았습니다.\n- 새 유효 규칙: x.xKg 표시와 0.1Kg 판정을 통일하고 시너지를 카드 가운데 정렬합니다.\n- 근거: 화면 표시와 게임 판정은 같은 값을 사용해야 합니다.\n- 의도한 사용자 경험: 좁은 카드에서 핵심 정보와 초과 이유를 빠르게 이해합니다.\n- 범위와 제외: 저장 카드, 선택 정보, 합계와 허용 판정에 적용합니다.\n- 영향 소스: WeightEvaluator.luau, ItemInstanceHydrator.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013, backpack-combat-stat-database\n- 검증과 증거: 무게 양자화·형식·허용 판정 테스트와 카드 소스 검사.\n\n### PBP-INV-005 — 필터와 배치 모드의 직접 연결\n\n- 날짜: 2026-08-15\n- 도메인: 보관함 탐색 / 모드 전환\n- 변경 유형: changed\n- 이전 규칙: 종류 필터와 배치 탭을 따로 바꿔야 했습니다.\n- 새 유효 규칙: 가방 필터는 가방 배치로, 다른 필터는 아이템 배치와 해당 종류로 이동합니다.\n- 근거: 보관함 종류 선택은 다음 배치 대상의 선택입니다.\n- 의도한 사용자 경험: 한 번의 터치로 원하는 목록과 배치 모드에 도달합니다.\n- 범위와 제외: 일반 종류 필터 다섯 개와 배치 모드 연동에 적용합니다.\n- 영향 소스: ScreenState.luau, Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 모드별 필터 상태 Luau 테스트.\n\n### PBP-INV-006 — 시너지·칸 수 고급 필터\n\n- 날짜: 2026-08-15\n- 도메인: 보관함 고급 탐색 / 모바일 UI\n- 변경 유형: added\n- 이전 규칙: 종류 외의 시너지와 점유 칸 범위를 직접 좁힐 수 없었습니다.\n- 새 유효 규칙: 별도 고급 필터에서 26종 시너지 토글과 1~9 칸 범위를 설정합니다.\n- 근거: 조합과 공간 효율은 종류와 독립적인 탐색 기준입니다.\n- 의도한 사용자 경험: 조합과 크기에 맞는 아이템을 빠르게 좁힙니다.\n- 범위와 제외: 가방과 아이템 칸 범위, 아이템의 하나 이상 시너지 일치에 적용합니다.\n- 영향 소스: ScreenState.luau, Screen.luau, ScreenRenderer.luau, VisualTokens.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 사용자 기획 이미지, Studio 캡처와 두 모바일 화면 테스트.\n\n### PBP-ART-001 — 시너지 아이콘 소형 가독성 규칙\n\n- 날짜: 2026-08-15\n- 도메인: 모바일 UI 아트 방향 / 인벤토리 시너지\n- 변경 유형: changed\n- 이전 규칙: 큰 합본을 축소해 실제 카드 크기에서 세부가 합쳐졌습니다.\n- 새 유효 규칙: 약 25px를 승인 기준으로 대표 심볼·투명 배경·최대 3색·216px 경계를\n  사용합니다.\n- 근거: 작은 화면에서 시너지를 구분하는 속도가 우선입니다.\n- 의도한 사용자 경험: 짧게 훑어도 형태와 대표색으로 시너지를 구분합니다.\n- 범위와 제외: 활성 26종 이미지와 재생성 계약에 적용하며 의미와 효과는 바꾸지 않습니다.\n- 영향 소스: Assets/UI/Backpack/SynergyIcons, SynergyCatalog.luau\n- 관련 위키: synergy-icon-system@v001, inventory-item-concept\n- 검증과 증거: 두 Studio 모바일 화면, 26개 자산과 전용 이미지 테스트.\n\n### PBP-CONTENT-001 — FootprintExpansion21 활성 집합 정리\n\n- 날짜: 2026-08-15\n- 도메인: 아이템 콘텐츠 / 공개 데이터\n- 변경 유형: retired\n- 이전 규칙: 확장 시안 21개가 모두 활성 후보로 남았습니다.\n- 새 유효 규칙: 11개만 활성화하고 10개는 제품 데이터와 미디어에서 제거합니다.\n- 근거: 폐기 시안이 남으면 현재 지원 범위를 잘못 전달합니다.\n- 의도한 사용자 경험: 실제 지원하는 아이템만 게임과 공개 DB에서 확인합니다.\n- 범위와 제외: 해당 10개 아이콘·레이아웃·참조를 제거하고 매니페스트 이력은 보존합니다.\n- 영향 소스: FootprintExpansion21, ItemDB 카탈로그·레이아웃·생성 산출물\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: ItemDB 90개 build/check와 생성 산출물 검사.\n\n### PBP-DOC-001 — 누적 제품 기획 변경 원장\n\n- 날짜: 2026-08-15\n- 도메인: 개발 문서 운영\n- 변경 유형: added\n- 이전 규칙: 기획 규칙의 변경을 한곳에서 계속 추적하는 누적 원장이 없었습니다.\n- 새 유효 규칙: 사용자 승인 커밋마다 물질적 변경을 안정적인 ID와 함께 누적합니다.\n- 근거: 구현이 개선돼도 최종 규칙과 변경 이유가 사라지지 않아야 합니다.\n- 의도한 사용자 경험: 위키 한 페이지에서 현재 규칙과 과거 이유를 연속 확인합니다.\n- 범위와 제외: 제품·게임플레이·UX·콘텐츠·아트·플랫폼·운영에 적용하며 순수 리팩터링은\n  제외합니다.\n- 영향 소스: AGENTS.md, wiki/content/pages/product-planning-change-log\n- 관련 위키: inventory-item-concept, development-wiki\n- 검증과 증거: 위키 빌드·체크·정책 테스트와 동일 커밋 발행.\n\n### PBP-ITEMDB-001 — ItemDB ON/OFF 베이크 경계\n\n- 날짜: 2026-08-16\n- 도메인: 아이템 운영 / 게임 배포\n- 변경 유형: added\n- 이전 규칙: ItemDB에 존재하는 모든 아이템이 항상 생성 런타임과 게임 베이크에 포함됐습니다.\n- 새 유효 규칙: 각 아이템은 ON/OFF 상태를 가지며 OFF는 웹 기획 기록에는 남고 다음 베이크와\n  생성 런타임에서는 제외됩니다. ON 복귀 시 기존 형태·이미지·시너지·효과 설정을 유지합니다.\n- 근거: 일시 제외와 영구 폐기를 구분해야 콘텐츠 실험과 롤백이 데이터 삭제 없이 가능합니다.\n- 의도한 사용자 경험: 운영자는 한 번의 버튼으로 게임 노출을 제어하고 플레이어는 승인된\n  활성 아이템만 만납니다.\n- 범위와 제외: ItemDB 웹 편집, 생성 레이아웃, 게임 카탈로그와 Studio 베이크에 적용합니다.\n  OFF 항목의 원본·웹 검색·이미지는 삭제하지 않습니다.\n- 영향 소스: inventory-item-layouts.json, tools/item_db.py, GeneratedItemLayouts.luau,\n  ItemCatalog.luau, wiki/site/app.js\n- 관련 위키: inventory-item-concept@v014\n- 검증과 증거: 390×844 ON 행 캡처, OFF 생성 제외 테스트, ItemDB 90개 정합성 검사.\n\n### PBP-EFFECT-001 — A·B·C 공간 접촉 효과 영역\n\n- 날짜: 2026-08-16\n- 도메인: 아이템 조합 / 공간 효과 / ItemDB 저작\n- 변경 유형: added\n- 이전 규칙: 아이템은 자기 능력치와 점유 형태만 가졌고 주변 아이템 접촉을 표현하는\n  저작 계약이 없었습니다.\n- 새 유효 규칙: 아이템당 A·B·C 최대 세 효과 슬롯을 두고 점유 경계 바깥 Q/R 다섯 칸까지\n  직접 효과 칸을 선택합니다. 각 슬롯은 종류·조건·능력 ID를 가지며 공간 접촉 판정과 실제\n  능력 실행은 분리합니다.\n- 근거: 가방 배치의 공간 관계를 조합 빌드로 확장하되 전투 규칙이 배치 기하에 결합되지\n  않아야 합니다.\n- 의도한 사용자 경험: 플레이어는 아이템을 어디에 놓고 무엇과 맞닿게 하는지로 추가 효과를\n  설계하고, 운영자는 같은 육각 편집 방식으로 규칙을 시각적으로 저작합니다.\n- 범위와 제외: 효과 칸 데이터, 카탈로그 ID, 회전 접촉 후보 평가까지 포함합니다. 조건 논리,\n  능력치 합산, 전투 발현과 시각 효과는 후속 범위입니다.\n- 영향 소스: item-effect-catalog.json, item-effect-slots.md, inventory-item-layouts.json,\n  GeneratedItemLayouts.luau, ItemEffectContactEvaluator.luau, ItemInstanceHydrator.luau,\n  wiki/site/app.js, wiki/site/item-db.js\n- 관련 위키: inventory-item-concept@v014, backpack-combat-stat-database\n- 검증과 증거: 390×844 A/B/C 편집 캡처, 효과 좌표·카탈로그·회전 접촉·드래그 비활성 테스트,\n  Studio의 동일 리비전 90개 레이아웃과 EffectCatalog 확인.\n\n### PBP-ITEMDB-002 — ItemDB 칸 수·시너지·게임 ON 복합 필터\n\n- 날짜: 2026-08-18\n- 도메인: ItemDB 운영 / 웹 탐색\n- 변경 유형: added\n- 이전 규칙: ItemDB는 이름과 대분류만 좁힐 수 있어 점유 크기·시너지·실제 게임 포함\n  집합을 따로 확인해야 했습니다.\n- 새 유효 규칙: 최소·최대 칸 수, 여러 시너지의 OR, 전체/게임 ON 상태를 검색·대분류와\n  AND로 조합하며 스크롤과 효과 카탈로그 접힘 상태를 재렌더링 뒤에도 유지합니다.\n- 근거: 전체 기획 목록과 현재 게임 집합을 한 화면에서 빠르게 비교해야 합니다.\n- 의도한 사용자 경험: “게임에 들어가는 2~4칸 기계 또는 원거리 아이템”을 그대로 필터로\n  표현하고 실제 아이콘으로 결과를 빠르게 훑습니다.\n- 범위와 제외: 공개·로컬 ItemDB 탐색과 시너지 미디어에 적용합니다. 게임 안의 보관함\n  고급 필터 상태와는 별도입니다.\n- 영향 소스: tools/item_db.py, wiki/site/app.js, wiki/site/app.css, wiki/site/item-db-data.js,\n  wiki/site/synergy-media\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: 1440×900 복합 필터 캡처, 8개 ON 결과, 26/26 이미지 로드,\n  catalogOpen=false·scrollY=188 유지, 브라우저 콘솔 오류·경고 0건.\n\n### PBP-INV-007 — 최대 6개 장착 무기와 필드 표시\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 장착 / 필드 가독성\n- 변경 유형: added\n- 이전 규칙: 유효하게 배치된 무기는 보드 안에서만 보였고 장착 목록·한도·필드 표시 계약이\n  없었습니다.\n- 새 유효 규칙: 유효한 Weapon은 최초 배치 순서대로 최대 6개까지 장착되고 2×3 장착 탭,\n  상세 정보·빼기, 모든 캐릭터 위의 방향 반응 이미지로 표시됩니다.\n- 근거: 공간 배치 결과가 실제 플레이 장비로 읽혀야 인벤토리 퍼즐과 전투 준비가 연결됩니다.\n- 의도한 사용자 경험: 여섯 슬롯에서 장착 상태를 관리하고 필드에서 자신의 빌드를 즉시\n  알아봅니다.\n- 범위와 제외: 장착 상태·관리·이미지 표시에 적용합니다. 실제 공격 실행과 무기 모델은\n  후속 범위입니다.\n- 영향 소스: EquippedItemModel.luau, InventoryBoardModel.luau, InventorySerializer.luau,\n  Screen.luau, ScreenRenderer.luau, InventoryService.luau, EquippedWeaponBillboard.luau,\n  CharacterController.luau, DirectionResolver.luau\n- 관련 위키: inventory-item-concept@v015, character-2d-rendering@v009\n- 검증과 증거: iPhone 17 Pro·Galaxy A06 장착 슬롯과 상세 모달 캡처, 6개 한도 Luau 테스트,\n  West 87.8°·East -92.1° 방향 회전, 최종 Studio 콘솔 오류·경고 0건.\n\n### PBP-INV-008 — 상태와 무관한 2px 배치 외곽선\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 시각 계층\n- 변경 유형: changed\n- 이전 규칙: 가방 시너지나 배치 미리보기 상태에 따라 외곽선이 3~7px로 굵어질 수 있었습니다.\n- 새 유효 규칙: 가방·아이템·선택·시너지·유효·무효·미리보기 외곽선은 모두 2px이며 상태는\n  색으로만 구분합니다.\n- 근거: 굵기 변화가 점유 형태를 실제보다 커 보이게 하고 아이템 그림과 경쟁했습니다.\n- 의도한 사용자 경험: 같은 공간 형태를 안정적으로 읽고 색으로 상태만 빠르게 구분합니다.\n- 범위와 제외: 인벤토리 보드와 보관함 선택 외곽선에 적용합니다.\n- 영향 소스: ScreenState.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: 모든 외곽선 경로가 GetBoundaryThickness=2를 사용하는 Luau·소스 회귀 테스트.\n\n### PBP-CONTENT-002 — 게임 ON 32개 승인 집합\n\n- 날짜: 2026-08-18\n- 도메인: 아이템 콘텐츠 / 게임 배포\n- 변경 유형: changed\n- 이전 규칙: 전체 90개 ItemDB가 모두 게임 ON으로 생성 런타임에 포함됐습니다.\n- 새 유효 규칙: 전체 기획 목록 90개를 보존하면서 게임 ON 32개만 생성 런타임과 Studio\n  베이크에 포함합니다. 포켓 네일건은 MACHINE을 제외한 RANGED·GUN, 소화기 철퇴는\n  FORGED 대신 MACHINE을 사용합니다.\n- 근거: 현재 게임에 투입할 승인 콘텐츠와 후속 기획 후보를 데이터 삭제 없이 구분합니다.\n- 의도한 사용자 경험: 플레이어는 승인된 32개만 만나고 운영자는 OFF 58개를 계속 비교·복원할\n  수 있습니다.\n- 범위와 제외: PBP-CONTENT-001의 전체 90개 카탈로그와 폐기 이력은 유지하며 게임 포함 집합만\n  변경합니다.\n- 영향 소스: inventory-item-layouts.json, GeneratedItemLayouts.luau, wiki/site/item-db-data.js\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: ItemDB revision a35b00cf76ec6c75, 전체 90·게임 ON 32 build/check,\n  Studio 같은 소스 베이크와 저장.\n\n### PBP-ACTION-001 — 20스터드 방향 잠금 Dash\n\n- 날짜: 2026-08-18\n- 도메인: 캐릭터 액션 / 이동 / 스프라이트 일관성\n- 변경 유형: changed\n- 이전 규칙: Dash는 0.20초 동안 목표 속도 30 studs/s의 순간 충격을 적용하고 별도 Dash\n  포즈를 재생할 수 있었습니다.\n- 새 유효 규칙: Dash는 0.30초 동안 선택 방향을 잠그고 장애물이 없는 기준 20스터드를\n  이동합니다. WalkSpeed·AutoRotate를 잠근 뒤 복원하고 시작 순간의 완성 프레임을 유지합니다.\n- 근거: 이동 거리를 입력·현재 속도와 분리해 일관되게 만들고, 승인 Run 아틀라스가 레거시\n  모듈식 Walk/Dash 이미지로 바뀌는 비율 변화를 막습니다.\n- 의도한 사용자 경험: Dash 방향이 중간에 꺾이지 않고 같은 거리를 이동하며 캐릭터 모습도\n  한 프레임으로 안정적으로 유지됩니다.\n- 범위와 제외: 클라이언트 Dash 이동·방향·스프라이트에 적용합니다. 장애물 관통이나 별도\n  Dash 공격 판정은 추가하지 않습니다.\n- 영향 소스: character-actions.md, Config.luau, PlayerActionController.luau,\n  CharacterController.luau, test_two_direction_run_build.py\n- 관련 위키: character-2d-rendering@v009\n- 검증과 증거: Galaxy A06 Play에서 19.46스터드 이동, 이동 중 WalkSpeed=0·AutoRotate=false,\n  종료 뒤 16·true 복원, 최종 콘솔 오류·경고 0건.\n\n### PBP-DEV-001 — 세션 전용 허용 무게 테스트 창\n\n- 날짜: 2026-08-18\n- 도메인: Studio 개발 도구 / 데이터 안전\n- 변경 유형: added\n- 이전 규칙: 허용 무게 경계값을 플레이 중 빠르게 바꾸는 전용 진단 UI가 없었습니다.\n- 새 유효 규칙: Studio에서만 F2 창으로 허용 무게를 1Kg씩 조정하고, 영구 저장에는 플레이어의\n  원래 제한값을 사용합니다.\n- 근거: 무게 초과 UI와 배치 경계를 반복 검증하되 진단 값이 사용자 데이터에 남으면 안 됩니다.\n- 의도한 사용자 경험: 개발자는 Play를 다시 시작하지 않고 경계값을 시험하며 플레이어는\n  테스트 기능이나 변조된 저장값을 보지 않습니다.\n- 범위와 제외: Roblox Studio 진단 세션에만 적용하며 모바일 제품 UI 완료 범위가 아닙니다.\n- 영향 소스: DeveloperTestControls.luau, DeveloperTestWindow.luau, Screen.luau,\n  InventoryService.luau\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: Studio-only 생성·서버 거부·원래 제한 직렬화 소스 검사와 Luau 경계 테스트.\n\n### PBP-INV-009 — 사각 장착판과 부위별 중복 제한\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 장착 / 공간 퍼즐\n- 변경 유형: superseded\n- 이전 규칙: PBP-INV-002~007은 육각 가방이 활성 칸을 만들고 시너지·필터와 유효 배치 무기\n  여섯 개를 관리하는 메인 인벤토리를 사용했습니다.\n- 새 유효 규칙: 아이템은 사각 폴리오미노로 배치하며 유효한 배치가 곧 장착입니다. 무기는\n  여섯 개, 반지는 두 개, 나머지 지정 부위는 한 개이며 무기·반지는 같은 DefinitionId를\n  중복할 수 없습니다. 디아블로식 장비창은 권위 배치의 투영입니다.\n- 근거: 장착 제한을 즉시 이해시키면서 공간 퍼즐은 크기와 형태로 유지해야 합니다.\n- 의도한 사용자 경험: 플레이어는 별도 장착 버튼 없이 배치와 장비 요약을 같은 상태로\n  이해합니다.\n- 범위와 제외: 메인 장착판과 장착 부위에 적용하며 특수 아이템·방패 슬롯은 제외합니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016\n- 검증과 증거: 기획 표에서 부위별 장착 수와 48종 콘텐츠 수량 검산.\n\n### PBP-SYNERGY-001 — 가방·시너지 시스템 전면 폐기\n\n- 날짜: 2026-08-18\n- 도메인: 인벤토리 / 시너지 / 아이템 조합\n- 변경 유형: retired\n- 이전 규칙: PBP-INV-004·006, PBP-ART-001과 PBP-EFFECT-001은 가방 활성 칸, 26종\n  시너지, 시너지 필터와 A/B/C 공간 접촉 효과를 제품 규칙으로 사용했습니다.\n- 새 유효 규칙: 가방 활성 칸, 육각 메인 인벤토리, 시너지 판정·아이콘·필터와 공간 접촉\n  효과를 후속 제품에서 사용하지 않습니다. 육각형은 아이템별 룬 보드에만 사용합니다.\n- 근거: 장착 규칙과 룬 성장 퍼즐이 각각 명확한 책임을 가져야 합니다.\n- 의도한 사용자 경험: 메인 장착은 사각형으로 빠르게 읽고 깊은 육각 퍼즐은 선택한 아이템\n  안에서 집중해 풉니다.\n- 범위와 제외: 새 제품 방향을 폐기하며 기존 코드·자산 제거는 후속 구현 커밋에서 수행합니다.\n- 영향 소스: inventory-item-concept@v016, inventory-item-concept@v015\n- 관련 위키: synergy-icon-system@v001, inventory-item-concept@v016\n- 검증과 증거: v016 폐기·제외 목록과 이전 v015 구현 범위 대조.\n\n### PBP-CONTENT-003 — 알파 장비 48종과 점유 크기\n\n- 날짜: 2026-08-18\n- 도메인: 알파 아이템 콘텐츠 / 장착 부위\n- 변경 유형: superseded\n- 이전 규칙: PBP-CONTENT-002의 현행 게임 ON 32개와 과거 90개 카탈로그가 실제 알파\n  배포 집합이었습니다.\n- 새 유효 규칙: 다음 알파 구현 목표는 무기 14종, 방어구·장신구 34종의 48종입니다. 머리·\n  상의·하의는 4/6칸, 귀걸이·반지는 1칸, 목걸이는 2/3칸, 글러브·신발·벨트는 2/4칸을\n  사용합니다.\n- 근거: 부위별 역할과 사각 점유 크기를 함께 선택하게 해 배치 조합을 늘립니다.\n- 의도한 사용자 경험: 작은 장비의 공간 효율과 큰 장비의 역할을 비교해 자신만의 장착판을\n  만듭니다.\n- 범위와 제외: 48종은 기획 목표이며 현재 ItemDB와 Studio ON 32개는 구현 전까지 그대로입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 무기 14 + 부위별 장비 34 = 48 산술 검산.\n\n### PBP-RUNE-001 — Seed 고정 259칸 아이템 룬 보드\n\n- 날짜: 2026-08-18\n- 도메인: 아이템 성장 / 룬 퍼즐 / 합성\n- 변경 유형: added\n- 이전 규칙: 각 아이템에 독립적인 장기 육각 성장판과 룬 조각 합성 계약이 없었습니다.\n- 새 유효 규칙: 각 아이템은 37칸 영역 일곱 개를 0~6등급에 하나씩 열고, 색별 시작점에서\n  젬블로식 한 칸 간격으로 1~5칸 룬을 연결합니다. 전체 능력 위치는 생성 Seed로 고정하며\n  합성 시 기준 아이템의 Seed와 배치를 보존합니다.\n- 근거: 같은 아이템도 경로·룬 모양·색 차단을 고민하는 장기 성장 퍼즐이 필요합니다.\n- 의도한 사용자 경험: 적은 룬으로 원하는 고등급 능력까지 길을 만들고 다른 색의 미래 경로를\n  함께 계획합니다.\n- 범위와 제외: 보드·등급 개방·룬/아이템 합성 계약이며 실제 생성기와 저장 마이그레이션은\n  후속 구현입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016\n- 검증과 증거: 일곱 영역 각각 37칸과 전체 259칸, 영역별 능력 분포 합계 검산.\n\n### PBP-RUNE-002 — 룬 능력 예산·등급 증가·레어 칸\n\n- 날짜: 2026-08-18\n- 도메인: 룬 능력 / 밸런스 / UI 표현\n- 변경 유형: added\n- 이전 규칙: 룬 능력의 등급별 개수·표시 정밀도·레어 판정과 아이템 정체성 보호 규칙이\n  없었습니다.\n- 새 유효 규칙: 전체 능력 등급 개수는 18·27·33·37·41·50·53이며 같은 능력의 실제 등장\n  등급은 UI 표시값까지 엄격히 증가합니다. 구조형 레어는 6등급 영역의 황금 칸에서 한 단위만\n  제공하고 Seed는 위치만 바꿉니다.\n- 근거: 상위 등급의 보상감을 보존하고 좋은 Seed가 총 전투력 자체를 재추첨하지 않게 합니다.\n- 의도한 사용자 경험: 황금 칸을 장기 목표로 삼되 낮은 등급 경로도 매 단계 분명한 성장을\n  제공합니다.\n- 범위와 제외: 일반 POWER/SPEED/CHANCE/TRAIT/GUARD/TIME/RANGE와 레어 표시에 적용합니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 등급·트랙별 칸 수와 259칸 합계, 모든 표시 수치의 단조 증가 수동 검토.\n\n### PBP-COMBAT-001 — 자동 스킬과 비선형 능력 캡\n\n- 날짜: 2026-08-18\n- 도메인: 전투 능력 / 자동 스킬 / 방어 계산\n- 변경 유형: added\n- 이전 규칙: 룬 인플레이션에서 행동 빈도·확률·무적·발사체 수를 안전하게 제한하는 공통\n  계산 순서가 없었습니다.\n- 새 유효 규칙: 자동 스킬은 해당 무기의 기본 공격 실행 횟수로 발동하고 감소는 최대 8회,\n  최소 요구 횟수는 1회입니다. 방패 막기는 최대 100%에서 방어력을 두 배로 적용하며 방어력\n  이후 최종 피해감소는 최대 50%입니다. 이동·공격·대시·회피·회복·보호막 등은 v016의\n  항목별 캡을 사용합니다.\n- 근거: 적 수치 강화로 대응 가능한 선형 인플레이션은 허용하되 무한 행동·완전 무적·확률\n  초과는 막아야 합니다.\n- 의도한 사용자 경험: 큰 숫자 성장은 즐기면서도 공격과 피격의 기본 규칙은 계속 작동합니다.\n- 범위와 제외: 탄약, 탄약 미소모, 소모품 미소모와 스킬 초기화 확률은 사용하지 않습니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: backpack-combat-stat-database, inventory-item-concept@v016\n- 검증과 증거: 계산 순서와 캡·제외 목록의 기획 교차 검토.\n\n### PBP-RUNE-003 — 알파 무기 14종의 보드 정체성\n\n- 날짜: 2026-08-18\n- 도메인: 무기 콘텐츠 / 룬 보드 / 자동 스킬\n- 변경 유형: added\n- 이전 규칙: 알파 무기별 자동 스킬 조건과 259칸 A/B/C/D·레어 배분이 고정되지 않았습니다.\n- 새 유효 규칙: 일곱 무기 형태에 두 종류씩 14개를 두고 각 보드는 A 102, B 71, C 48,\n  D 32, 6등급 로컬 레어 6칸을 가집니다. 목걸이는 발사체, 반지는 자동 스킬 요구 공격,\n  귀걸이는 근거리 사거리의 전역 레어를 제공하고 신발만 추가 대시를 제공합니다.\n- 근거: Seed 위치가 달라도 무기 이름과 공격 방식에 맞는 성장 정체성이 유지돼야 합니다.\n- 의도한 사용자 경험: 같은 룬이라도 연격검·공성 석궁·흡혈 도끼에서 서로 다른 경로와\n  자동 스킬을 강화합니다.\n- 범위와 제외: 14종의 알파 기획 계약이며 최종 아이콘·폴리오미노 좌표·전투 구현은 후속입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 각 무기 레어 합계 6칸과 보드 전체 259칸 산술 검산.\n\n### PBP-ITEMDB-002 — 최종 48종 활성 ItemDB 전환\n\n- 날짜: 2026-08-20\n- 도메인: 아이템 콘텐츠 / 공개 데이터베이스 / 런타임 배포\n- 변경 유형: superseded\n- 대체 대상: PBP-ITEMDB-001, PBP-CONTENT-003의 \"후속 구현 목표\" 상태\n- 이전 규칙: 새 48종은 기획 목표이고 과거 90종과 게임 ON 32종이 구현 전 역사적 현행\n  상태였습니다.\n- 새 유효 규칙: 무기 14종과 방어구·장신구 34종의 최종 48종만 ItemDB 원본, 생성 런타임,\n  공개 미디어의 활성 집합으로 사용합니다. 과거 아이콘과 특수 아이템은 제거하고 ON/OFF\n  운영 경계는 유지합니다.\n- 근거: 기획·로컬 원화·공개 DB·게임 카탈로그의 서로 다른 활성 집합은 이름·점유·자산 ID\n  불일치를 만듭니다.\n- 의도한 사용자 경험: 플레이어와 개발자가 같은 최종 48종의 이미지와 형태만 봅니다.\n- 범위와 제외: 아이템 정의·아이콘·사각 점유·공개 DB에 적용하며 과거 위키 기록은 보존합니다.\n- 영향 소스: inventory-item-art-catalog.md, inventory-item-layouts.json,\n  GeneratedItemLayouts.luau, ItemCatalog.luau, wiki/site/item-db-data.js\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: ItemDB 48종 빌드·체크, 최종 카탈로그와 모바일 공개 DB 캡처.\n\n### PBP-RUNE-004 — 427칸·후보 10개 룬 보드\n\n- 날짜: 2026-08-20\n- 도메인: 아이템 성장 / 룬 보드 / 랜덤화\n- 변경 유형: superseded\n- 대체 대상: PBP-RUNE-001, PBP-RUNE-002\n- 이전 규칙: 모든 아이템은 37칸 영역 일곱 개의 259칸 보드 하나를 Seed로 섞고, 능력 등급\n  총량 18·27·33·37·41·50·53을 사용했습니다.\n- 새 유효 규칙: 각 영역을 반지름 4인 61칸으로 확대해 전체 427칸을 사용합니다. 아이템\n  정의마다 결정론적으로 생성된 후보 10개를 두고 아이템 생성 시 하나를 균등 선택해 VariantId와\n  Seed를 저장합니다. 보드당 능력 등급 총량은 30·45·54·60·67·90·81입니다.\n- 근거: 11개 능력 계열과 레어 노드, 일곱 색 경로를 한 판에서 읽고 우회할 충분한 공간이\n  필요합니다. 후보를 제한하면 다양성과 재현·검증을 함께 확보할 수 있습니다.\n- 의도한 사용자 경험: 같은 아이템에서도 다른 길을 계획하되 총 능력 예산이 운에 따라 바뀌지는\n  않습니다.\n- 범위와 제외: 48종 전체 480개 보드에 적용하며 런타임 재굴림은 허용하지 않습니다.\n- 영향 소스: item-rune-board-database.json, GeneratedRuneBoardDB.luau,\n  rune-board-db-data.js\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 생성기 결과 48×10=480보드, 보드마다 7×61=427칸, revision\n  6e735afdab3d7550.\n\n### PBP-RUNE-005 — 34종 룬 도형과 62종 능력 아이콘\n\n- 날짜: 2026-08-20\n- 도메인: 룬 조각 / 보드 가독성 / 터치 배치\n- 변경 유형: added\n- 이전 규칙: 룬은 1~5칸 젬블로식 조각이라는 개념만 있었고 완전한 형태군, 공용 원화와\n  능력 아이콘의 책임 분리가 고정되지 않았습니다.\n- 새 유효 규칙: 회전·반전을 동일시한 1·1·3·7·22개, 총 34종 자유 폴리헥스를 사용합니다.\n  일곱 색은 빈 중앙 메달의 중립 원화를 틴트하고, 62종 전투 effect 아이콘을 중앙에 별도\n  합성합니다. 드래그는 실제 도형·잡은 칸·회전·반전을 보존하며 마지막 스냅 가이드를 확정값으로\n  사용합니다.\n- 근거: 색·등급·능력 의미를 한 장의 원화에 굽지 않아야 작은 화면에서도 의미를 읽고 데이터\n  변경에도 자산을 재사용할 수 있습니다.\n- 의도한 사용자 경험: 탭하지 않아도 대략적인 능력 종류를 알고, 손가락 아래에서 룬이 튀지\n  않은 채 예상 위치에 놓입니다.\n- 범위와 제외: 룬 카드·보드 노드·드래그 미리보기에 적용하며 상세 수치는 텍스트로 제공합니다.\n- 영향 소스: rune-piece-catalog.json, rune-ability-icon-catalog.json,\n  rune_hex_neutral.png, rune_ability_icons.png, UIPrimitives.luau, Screen.luau\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 형태군 34개, effect 아이콘 62개 생성·누락 검사와 아이콘 시트.\n\n### PBP-UI-001 — 모바일 인벤토리·룬 보드의 단일 작업 흐름\n\n- 날짜: 2026-08-20\n- 도메인: 모바일 UI / 인벤토리 / 룬 보드 / 합성\n- 변경 유형: added\n- 이전 규칙: 사각 장착과 룬 보드의 개별 기획은 있었지만 화면 내 기능 위치, 터치 우선순위,\n  필터·합성·복귀 상태의 완전한 흐름이 없었습니다.\n- 새 유효 규칙: 두 화면은 안전 영역 아래 상단 상태, 중앙 작업판, 하단 보관함을 공유합니다.\n  카드 탭은 룬 보드 진입, 드래그는 배치 또는 합성을 우선합니다. 룬 보관함은 상하 스크롤,\n  한 색 또는 전체를 고르는 7색 필터와 독립 ON/OFF인 1~5칸 필터를 제공하고, 빈 보드 탭은\n  상단 중앙에 능력을 표시합니다.\n- 근거: 모바일에서는 화면 전환마다 탐색 위치와 재료가 사라지면 배치 퍼즐의 비교 비용이\n  지나치게 커집니다.\n- 의도한 사용자 경험: 인벤토리 배치, 아이템 성장, 룬 배치와 합성을 같은 손동작 문법으로\n  왕복합니다.\n- 범위와 제외: 모바일 세로 화면과 터치 입력에 적용하며 PC 밀도·마우스 품질은 현재 완료\n  기준이 아닙니다.\n- 영향 소스: inventory-rune-ui-spec.md, InventoryV2, RuneBoard, InventoryV2Service.luau\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 정적 상태·Luau 테스트, iPhone 17 Pro 400×777 및 iPhone 7 374×666 Studio\n  Play 캡처, 핵심 입력 경로와 콘솔 오류 없음 확인.\n\n### PBP-ART-002 — 최종 아이템 카툰 아트와 방향 규칙\n\n- 날짜: 2026-08-20\n- 도메인: 아이템 아트 / 모바일 전투 / 사각 점유\n- 변경 유형: superseded\n- 대체 대상: PBP-ART-001의 육각·시너지 카드 중심 아트 계약\n- 이전 규칙: 실사풍 또는 고풍스러운 원화와 육각 시너지 카드 문법이 섞였고, 일부 무기는\n  사각 점유와 전투 회전 기준에 맞지 않았습니다.\n- 새 유효 규칙: 48종 전체를 밝고 굵은 카툰풍으로 통일하고 사각 폴리오미노 질량에 맞춥니다.\n  근접 무기는 위쪽, 활·석궁·총은 오른쪽을 기본 방향으로 하며 발사체·공격 궤적은 원화에서\n  제외합니다.\n- 근거: Brotato식 자동 공격에서는 작은 캐릭터 주변을 도는 장비의 방향과 실루엣이 즉시\n  읽혀야 합니다.\n- 의도한 사용자 경험: 보관함·장착판·전투에서 같은 아이템을 형태만으로 알아봅니다.\n- 범위와 제외: 최종 48종 인벤토리 원화에 적용하며 실제 공격 VFX와 투사체는 별도 자산입니다.\n- 영향 소스: Assets/Items/InventoryIcons, inventory-item-art-catalog.md,\n  uploaded_asset_ids.json\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 최종 48종 카탈로그와 공개 ItemDB 캡처.\n\n### PBP-RUNE-006 — 등급·색·시작점 일치와 회전 전용 배치\n\n- 날짜: 2026-08-20\n- 도메인: 룬 성장 / 연결 퍼즐 / 배치 권위\n- 변경 유형: changed\n- 대체 대상: PBP-RUNE-004의 자유 시작 색 등록, PBP-RUNE-005의 런타임 반전 조작\n- 이전 규칙: 룬 색과 합성 등급은 독립 값이었고, 해금된 어느 중앙 시작점에서든 아직 등록하지\n  않은 색을 시작할 수 있으며 플레이 중 회전과 반전을 모두 제공했습니다.\n- 새 유효 규칙: G0~G6 룬 색은 아이템 등급색과 일치합니다. 룬은 같은 번호 영역의 중앙\n  시작점에서만 첫 등록하며 아이템 등급보다 높은 룬은 배치할 수 없습니다. 5칸 합성으로 등급이\n  오르면 다음 등급 색으로 바뀌고 런타임 조작은 60° 회전만 제공합니다. 첫 룬은 중앙 한 칸만\n  덮으면 도형의 어느 셀을 잡았든 유효하며 이후에는 한 칸 간격 연결 전선을 안내합니다.\n- 근거: 색·등급·시작점이 서로 다른 축이면 성장 잠금과 연결 가능 위치를 화면만 보고 예측하기\n  어렵고 저장 데이터가 모순될 수 있습니다.\n- 의도한 사용자 경험: 새 등급을 열 때 같은 색의 새 출발점을 즉시 이해하고, 보드가 보여 주는\n  한 칸의 목표와 실제 도형 가이드만으로 자유로운 첫 배치를 시도합니다.\n- 범위와 제외: 룬 생성·합성·저장 정규화·보드 배치·회전에 적용합니다. 34개 자유 폴리헥스\n  카탈로그의 중복 제거 기준은 유지합니다.\n- 영향 소스: rune-piece-system.md, inventory-rune-ui-spec.md, RuneBoardModel.luau,\n  RuneMergeModel.luau, InventoryV2Service.luau, Screen.luau\n- 관련 위키: inventory-item-concept@v018\n- 검증과 증거: InventoryV2 Luau 테스트의 등급색 불일치 거절, 등급별 시작점, 5칸 합성 색\n  승급, 첫 중앙 목표와 한 칸 간격 전선 검증.\n\n### PBP-UI-002 — 모바일 룬 보드의 문맥 보존 조작과 팝업 필터\n\n- 날짜: 2026-08-20\n- 도메인: 모바일 UI / 룬 보드 / 보관함 탐색\n- 변경 유형: changed\n- 대체 대상: PBP-UI-001의 상시 펼친 단일 색 필터와 보드 중심 재확대\n- 이전 규칙: 색상·칸 수 선택지가 보관함 위에 계속 공간을 차지하고 색상은 한 개 또는 전체만\n  골랐습니다. 확대할 때 보드 중앙으로 시점이 이동했고 회전·반전은 들고 있는 룬에 묶였습니다.\n- 새 유효 규칙: `색상 필터`와 `칸 수 필터` 한 줄 트리거가 각각 다중 선택 말풍선을 열며\n  바깥 탭으로 닫힙니다. 장착 룬 회전은 마지막 선택 룬에만 적용하고 확대·축소는 현재 보던\n  논리 위치를 유지합니다. 상단 능력 설명은 색상명을 빼고 고대비 등급·능력·수치만 표시합니다.\n- 근거: 좁은 세로 화면에서는 선택지를 계속 펼쳐 두는 것보다 실제 룬 카드를 더 많이 보여 주는\n  편이 중요하며, 카메라와 조작 대상이 예기치 않게 바뀌면 퍼즐 경로를 다시 찾아야 합니다.\n- 의도한 사용자 경험: 여러 색·크기를 짧은 팝업에서 조합해 찾고, 보던 위치와 선택 룬을 잃지\n  않은 채 확대·회전하며, 탭 설명을 즉시 읽습니다.\n- 범위와 제외: 모바일 세로 룬 장착 화면과 터치 입력에 적용합니다. PC 화면 밀도와 마우스\n  동등성은 현재 완료 기준이 아닙니다.\n- 영향 소스: inventory-rune-ui-spec.md, Screen.luau, VisualTokens.luau,\n  StorageSort.luau, test_inventory_v2_ui.py\n- 관련 위키: inventory-item-concept@v018\n- 검증과 증거: Galaxy A06 세로 Studio Play에서 필터 팝업·확장된 카드 영역·고대비 능력\n  설명을 확인했고, Studio MCP 진단과 7개 UI 계약 테스트를 통과했습니다.\n\n### PBP-COMBAT-002 — 장착 무기 할로와 서버 권위 자동 공격\n\n- 날짜: 2026-08-20\n- 도메인: 필드 장착 표시 / 자동 전투 / 모바일 연출\n- 변경 유형: superseded\n- 대체 대상: PBP-INV-007의 방향 반응형 필드 표시와 실제 공격 제외 범위\n- 이전 규칙: 최대 여섯 장착 무기는 캐릭터 방향을 따라 회전하는 머리 위 이미지로만 보였고,\n  실제 표적 탐색·공격·피해와 무기별 연출은 후속 범위였습니다.\n- 새 유효 규칙: 적이 없을 때 여섯 무기는 캐릭터 방향과 무관한 이미지 할로로 머리 위에\n  부유합니다. 적이 사거리와 시야 안에 들어오면 서버가 슬롯별 표적·쿨다운·피해를 결정하고\n  클라이언트는 베기·찌르기·투척·활·석궁·총기 연출을 재생합니다. 14종 원화는 ItemDB의\n  정규화된 회전축·타격점·발사구를 공통 계약으로 사용합니다.\n- 근거: 인벤토리의 장착 결과가 실제 전투 행동으로 연결돼야 빌드가 필드에서 살아 움직이며,\n  캐릭터 방향에 무기를 묶지 않아야 대기 할로와 공격 조준의 책임이 충돌하지 않습니다.\n- 의도한 사용자 경험: 적이 없을 때는 자신의 여섯 무기를 안정된 천사 링으로 읽고, 전투가\n  시작되면 각 원화가 직접 날아가거나 발사하는 모습을 통해 무기 종류를 즉시 구분합니다.\n- 범위와 제외: 14종의 기본 자동 공격, 서버 피해와 공통 연출 계열까지 적용합니다. 도탄·산탄·\n  관통·흡혈·반격 같은 고유 능력, 룬 변형, 음향과 적 피격 애니메이션은 후속 범위입니다.\n- 영향 소스: alpha-item-definitions.json, inventory-item-layouts.json,\n  EquippedWeaponBillboard.luau, WeaponAttackVFX.luau, WeaponCombatConfig.luau,\n  WeaponCombatService.luau, DamageResolver.luau\n- 관련 위키: weapon-combat-presentation@v001, inventory-item-concept@v018,\n  character-2d-rendering@v009\n- 검증과 증거: 14개 무기 공격 발생, 적 없음 공격 증가 0, iPhone 17 Pro `401×776`과\n  Galaxy A06 `359×718` Studio Play, 45개 연출 수신·누락 0·객체 수 736 고정·서버 피해와\n  콘솔 오류 없음 확인.\n\n### PBP-COMBAT-003 — 근접 여섯 무기 할로와 소켓 기준 최근접 적 조준\n\n- 날짜: 2026-08-21\n- 도메인: 필드 장착 표시 / 자동 전투 조준 / 모바일 연출\n- 변경 유형: changed\n- 대체 대상: PBP-COMBAT-002의 넓은 할로 위치와 기본 원화 회전 조준 규칙\n- 이전 규칙: 여섯 무기는 캐릭터 머리 위 할로에 부유하고 서버 권위 자동 공격으로 전환했지만,\n  캐릭터와의 최대 거리, 좌우 세 슬롯의 정확한 배치, 모든 무기의 공통 표적과 왼쪽을 보는\n  비대칭 원화 처리 방식은 고정되지 않았습니다.\n- 새 유효 규칙: 여섯 무기를 머리 가까운 좁은 타원의 왼쪽 세 개·오른쪽 세 개에 같은 현 길이\n  간격으로 두고 정중앙 위·아래는 비웁니다. 장착 집합은 사거리 안에서 가장 가까운 생존 적\n  하나를 공통 후보로 선택하고 각 무기는 자기 사거리 안에서 실제 칼끝·타격점·총구·화살·볼트\n  발사 방향을 맞춥니다. 오른쪽 기본 원화가 왼쪽 표적을 보면 상하 회전 대신 수평 반전하며\n  회전축·타격점·발사 소켓도 함께 반전합니다. 적이 없으면 기본 방향의 독립 부유로 돌아갑니다.\n- 근거: 무기가 캐릭터에서 멀리 흩어지면 장착 관계와 천사 링 실루엣이 사라지고, 왼쪽 적을\n  단순 각도 회전으로 겨누면 총과 활이 거꾸로 보이며 총구·발사체 위치도 원화와 어긋납니다.\n- 의도한 사용자 경험: 작은 모바일 화면에서도 여섯 장비를 캐릭터 소유의 한 묶음으로 즉시\n  읽고, 전투에서는 모든 무기가 같은 위협을 각자의 실제 끝점으로 노리는 장면을 봅니다.\n- 범위와 제외: 대기 할로 위치, 최근접 표적 선택, 무기별 사거리, 대기·공격 조준과 좌측 수평\n  반전에 적용합니다. 도탄·산탄·관통 같은 다중 표적 고유 능력과 음향은 후속 범위입니다.\n- 영향 소스: EquippedWeaponVisualLayout.luau, EquippedWeaponBillboard.luau,\n  WeaponAimResolver.luau, WeaponAttackVFX.luau, WeaponTargeting.luau,\n  WeaponCombatService.luau\n- 관련 위키: weapon-combat-presentation@v002\n- 검증과 증거: 사용자 좌표 측정 이미지, iPhone 17 Pro `401×776`의 여섯 무기 근접 할로와\n  좌측 표적 수평 반전 공격 캡처, Galaxy A06 `359×718` 반응형 여백 검사, 관련 테스트와\n  Studio 콘솔 오류 없음 확인.\n\n### PBP-RUNE-007 — 전체 초안과 원자 저장 룬 편집\n\n- 날짜: 2026-08-21\n- 도메인: 룬 연결 규칙 / 저장 권위 / 모바일 편집\n- 변경 유형: changed\n- 대체 대상: PBP-RUNE-006의 즉시 유효 배치 중심 조작\n- 이전 규칙: 매 조작이 그 순간 유효해야 배치 상태로 남을 수 있어 회전 중 잠시 잘못된 형태를\n  확인하거나 여러 룬을 함께 고친 뒤 저장하는 흐름이 없었습니다.\n- 새 유효 규칙: 룬 추가·이동·회전·회수는 전체 초안을 편집합니다. 무효 룬은 빨간색으로 남겨\n  수정할 수 있지만 저장은 비활성화되며, 서버가 전체 배치를 다시 검증한 뒤 유효한 초안만\n  원자적으로 저장합니다. 되돌리기는 마지막 저장 상태를 복원합니다. 한 칸 간격 연결은 배치\n  순서가 아니라 완성된 같은 색 네트워크 전체를 기준으로 판정합니다.\n- 근거: 퍼즐은 중간 단계가 아니라 최종 형태를 설계하는 작업이며, 클라이언트 조작 순서가 같은\n  완성 배치의 합법성을 바꾸면 안 됩니다.\n- 의도한 사용자 경험: 자유롭게 돌리고 옮기며 실패 이유를 본 뒤, 만족한 전체 배치만 안전하게\n  확정합니다.\n- 범위와 제외: 보관/배치 룬의 이동·회전·회수, 저장·되돌리기, 클라이언트와 서버의 전체 배치\n  검증에 적용합니다. 룬 합성 규칙은 바꾸지 않습니다.\n- 영향 소스: inventory-rune-ui-spec.md, RuneBoardModel.luau, RuneDragVisualState.luau,\n  Screen.luau, InventoryV2Service.luau\n- 관련 위키: inventory-item-concept@v019\n- 검증과 증거: 한 칸 간격 5칸 도형 배치, 잘못된 회전의 빨간 상태와 저장 비활성, 악성 저장\n  요청 거절 뒤 서버 상태 보존, 제거·되돌리기 Studio 진단과 InventoryV2 테스트.\n\n### PBP-UI-003 — 현재 형태 가이드와 정돈된 룬 보드 시각 언어\n\n- 날짜: 2026-08-21\n- 도메인: 모바일 룬 보드 / 터치 상호작용 / 정보 시각화\n- 변경 유형: changed\n- 대체 대상: PBP-UI-002의 선택 회전·필터·능력 설명 흐름\n- 이전 규칙: 연결 가이드가 현재 도형의 잡은 셀과 회전을 충분히 반영하지 않았고 잠긴 영역과\n  빈 영역의 차이가 드러나지 않았습니다. 보관 카드에서 방향을 미리 정하거나 배치 룬을\n  보관함으로 회수하기 어려웠고, 두꺼운 육각 테두리와 불투명 룬 장식이 색과 능력을 방해했습니다.\n- 새 유효 규칙: 현재 잡은 셀·회전·전체 배치를 기준으로 모든 후보를 계산합니다. 유효 칸은\n  라임색, 잠긴 칸은 탁한 적갈색, 무효 초안은 빨간색으로 표시하며 기존 룬과 같은 색 능력\n  아이콘은 유지합니다. 보관 카드와 배치 룬은 선택·60° 회전하고 배치 룬은 이동·회수합니다.\n  틈 없는 얇은 벌집과 색이 비치는 투명 크리스털 룬을 사용하고, 전체 필터는 모두 ON 상태에서\n  모두 OFF로 반전할 수 있습니다. 룬 각인 효과 탭은 유효 노드를 효과별로 합산합니다.\n- 근거: 플레이어가 손을 놓기 전에 가능 위치와 불가능 이유, 현재 활성 보상, 도형 방향을 함께\n  읽어야 최적 경로를 계산할 수 있습니다.\n- 의도한 사용자 경험: 보드 위 정보를 한눈에 구분하고, 카드에서 방향을 준비해 원하는 위치로\n  옮긴 뒤 실제 얻는 효과까지 같은 화면 흐름에서 확인합니다.\n- 범위와 제외: 모바일 세로 룬 보드와 보관함, 필터, 효과 요약에 적용합니다. PC 화면 품질과\n  마우스 동등성은 현재 완료 기준이 아닙니다.\n- 영향 소스: rune_hex_neutral.png, rune_piece_crystal.png, Assets.luau,\n  UIPrimitives.luau, VisualTokens.luau, RuneEffectSummary.luau, Screen.luau\n- 관련 위키: inventory-item-concept@v019\n- 검증과 증거: iPhone 17 Pro 세로의 연결·잠금 가이드, 잘못된 초안, 효과 합산 Studio\n  캡처와 iPhone 7 세로 반응형 검사.\n\n### PBP-COMBAT-004 — 인벤토리 중 공격 연출 억제\n\n- 날짜: 2026-08-21\n- 도메인: 모바일 인벤토리 / 전투 표현 계층\n- 변경 유형: added\n- 이전 규칙: 필드 공격 테스트 루프와 공격 연출이 인벤토리보다 높은 레이어에서 계속 재생되어\n  작업 영역을 뚫고 보일 수 있었습니다.\n- 새 유효 규칙: 인벤토리·룬 화면이 열리면 진행 중 클라이언트 공격 연출을 즉시 지우고 새\n  연출을 받지 않으며 오버레이를 비활성화합니다. 화면을 닫으면 표현만 다시 허용합니다.\n- 근거: 전투 준비 작업에서는 퍼즐과 정보가 시각 우선권을 가져야 하며, 화면을 덮는 것만으로는\n  불필요한 연출 루프가 계속 실행됩니다.\n- 의도한 사용자 경험: 인벤토리에 들어오는 순간 필드 공격 연출이 완전히 멈춰 룬 배치에\n  집중하고, 나가면 자연스럽게 전투 표현으로 돌아갑니다.\n- 범위와 제외: 클라이언트 무기 공격 VFX와 오버레이에 적용합니다. 서버의 공격 판정·피해·\n  장착 상태는 변경하지 않습니다.\n- 영향 소스: Screen.luau, WeaponAttackVFX.luau\n- 관련 위키: inventory-item-concept@v019, weapon-combat-presentation@v002\n- 검증과 증거: Studio Play에서 InventoryV2Screen 활성 중 WeaponCombatVFX\n  Enabled=false, Suppressed=true, 활성 공격·투사체·충돌 0개 확인.\n\n### PBP-ACTION-002 — 3단계 Dash와 이동 구간 잔상\n\n- 날짜: 2026-08-23\n- 도메인: 캐릭터 행동 / 모바일 전투 표현\n- 변경 유형: superseded\n- 대체 대상: PBP-ACTION-001의 Dash 시작 프레임 고정 표현\n- 이전 규칙: Dash는 0.30초 동안 시작 순간의 캐릭터 프레임을 그대로 유지했습니다.\n- 새 유효 규칙: 방향 잠금·0.30초·20스터드 이동은 유지하면서 예비 0.05초, 이동 0.20초,\n  회복 0.05초의 통짜 캐릭터 자세를 재생합니다. 잔상은 이동 자세에서 실제 경로 뒤에만\n  생성되고 회복 자세에서 본체로 수렴합니다.\n- 근거: 시작 프레임 고정은 형태 안정성은 지키지만 행동의 출발과 종료를 자세로 설명하지\n  못합니다. 세 개의 명확한 키포즈는 캐릭터 정체성을 지키면서 타이밍을 읽게 합니다.\n- 의도한 사용자 경험: 버튼을 누른 순간 몸을 낮추고 빠르게 이동한 뒤 균형을 되찾는 흐름과\n  잔상 소멸을 보고 Dash 종료를 직관적으로 이해합니다.\n- 범위와 제외: Rookie 남성 통짜 캐릭터 Dash와 런타임 잔상에 적용합니다. 이동 거리·충돌·\n  쿨다운·룬 보너스 한도는 변경하지 않습니다.\n- 영향 소스: production_manifest.json, AssetRegistry.luau, CharacterController.luau,\n  DashAfterimage.luau, FrameSpriteRig.luau, ProductionDashData.luau\n- 관련 위키: character-2d-rendering@v010\n- 검증과 증거: 좌우 3프레임 콘택트 시트, 정확한 20fps 타이밍·잔상 GIF, 캐릭터 자산 검사,\n  30개 후보 테스트와 Galaxy A06 Studio Play Dash 잔상 캡처.\n\n### PBP-ART-003 — 발이 고정된 좌우 호흡 Idle\n\n- 날짜: 2026-08-23\n- 도메인: 캐릭터 애니메이션 / 아트 방향\n- 변경 유형: added\n- 이전 규칙: 정지 상태는 통짜 Run 아틀라스 이전의 호환 프레임 또는 사실상 고정 자세를\n  사용해 호흡의 생동감이 없었습니다.\n- 새 유효 규칙: 마지막 East·West 방향을 유지하는 8프레임 6fps 호흡을 사용합니다. 발과\n  골반 아래는 고정하고 상체의 들숨·정점·날숨·복귀만 움직이며 전체 균일 확대는 금지합니다.\n- 근거: 작은 모바일 캐릭터는 생동감이 필요하지만 바닥 접지와 실루엣 안정성을 잃으면 조작\n  위치가 흔들려 보입니다.\n- 의도한 사용자 경험: 멈춰 있어도 캐릭터가 살아 숨 쉬되 신발이 미끄러지거나 방향이 이유\n  없이 반전되지 않는 안정적인 정지 화면을 봅니다.\n- 범위와 제외: Rookie 남성 통짜 캐릭터 Idle에 적용합니다. Hit·Death·Clear 제작은 별도\n  승인 단위입니다.\n- 영향 소스: production_manifest.json, Config.luau, DirectionResolver.luau,\n  FrameSpriteRig.luau, ProductionIdleData.luau\n- 관련 위키: character-2d-rendering@v010\n- 검증과 증거: 좌우 8프레임 콘택트 시트, 하체 픽셀 고정 검사, 캐릭터 자산 검사와 Galaxy\n  A06 Studio Play Idle 캡처.\n\n### PBP-INV-010 — 장비 전체 초안과 원자 저장\n\n- 날짜: 2026-08-23\n- 도메인: 모바일 인벤토리 / 장비 배치 권위\n- 변경 유형: added\n- 이전 규칙: 아이템을 한 번 옮길 때마다 개별 배치를 즉시 확정했고, 여러 장비를 재정리한\n  최종 결과를 저장 전에 함께 검토하는 계약이 없었습니다.\n- 새 유효 규칙: 추가·이동·회전·보관은 전체 초안을 갱신합니다. 겹친 장비는 가장 가까운\n  빈자리로 밀어 결과를 미리 보여 주고, 잠금·무게·장착 한도 등 무효 상태는 빨간색으로 남기되\n  저장을 비활성화합니다. 서버는 최대 200개 좌표를 전체 재검증해 모두 유효할 때만 원자적으로\n  교체하며 되돌리기는 마지막 저장 상태를 복원합니다.\n- 근거: 여러 모양의 장비를 퍼즐처럼 재배치할 때 중간 한 수를 즉시 저장하면 플레이어가\n  전체 구성을 비교하기 어렵고, 실패 중간 상태가 영구 데이터가 될 위험이 있습니다.\n- 의도한 사용자 경험: 장비를 여러 번 옮겨 최종 구성을 눈으로 검토하고, 잘못된 아이템과\n  이유를 고친 뒤 한 번만 저장합니다.\n- 범위와 제외: 9×9 사각 장착판과 보관함 전환에 적용합니다. ItemDB 이미지 배율·X/Y 보정의\n  실제 렌더링 연결은 이번 범위가 아닙니다.\n- 영향 소스: InventoryModel.luau, ItemPlacementDraft.luau, Screen.luau,\n  InventoryV2Service.luau\n- 관련 위키: inventory-item-concept@v020\n- 검증과 증거: 충돌 장비의 결정적 이동, 잠긴 칸 초안·저장 비활성·되돌리기 Luau 테스트와\n  Galaxy A06 Studio Play 실패 상태 캡처.\n\n### PBP-UI-004 — 선택 우선 장비 조작과 세로 보관함\n\n- 날짜: 2026-08-23\n- 도메인: 모바일 인벤토리 / 터치 UX\n- 변경 유형: changed\n- 이전 규칙: 아이템 탭이 룬 화면 이동과 직접 연결되고 보관 카드·스크롤·배치 드래그의 입력\n  의도가 충분히 분리되지 않았으며 보관함은 가로 흐름을 전제로 했습니다.\n- 새 유효 규칙: 짧은 탭은 선택만 하고 회전 버튼을 보여 줍니다. 움직이지 않은 길게 누르기는\n  룬 페이지·상세 정보 메뉴를 열고, 움직임이 생기면 세로 스크롤 또는 실제 아이템 그림 드래그로\n  전환합니다. 보관함은 안전 여백을 둔 세로 다열 그리드를 사용합니다.\n- 근거: 같은 손가락으로 탐색·선택·배치·상세 보기를 수행하는 모바일에서는 행동 전에 선택\n  상태와 명확한 분기 피드백이 필요합니다.\n- 의도한 사용자 경험: 목록을 안정적으로 훑고, 원하는 장비를 선택해 회전하거나 끌며, 가만히\n  눌렀을 때만 다음 작업을 고릅니다.\n- 범위와 제외: 모바일 세로 인벤토리와 장비 상세 팝업에 적용합니다. PC 레이아웃 품질과\n  마우스 동등성은 현재 완료 기준이 아닙니다.\n- 영향 소스: inventory-rune-ui-spec.md, ItemGesturePolicy.luau, Screen.luau\n- 관련 위키: inventory-item-concept@v020\n- 검증과 증거: InventoryV2 스펙, UI 계약 테스트, Galaxy A06의 기본·메뉴·상세 캡처와\n  iPhone 7 `374×666`의 세로 스크롤·메뉴·상세 경계 검사.\n\n### PBP-DOC-002 — 비개발자 중심 커밋 위키와 다중 상태 증거\n\n- 날짜: 2026-08-23\n- 도메인: 개발 운영 / 기획 기록 / 위키 품질\n- 변경 유형: added\n- 이전 규칙: 커밋 위키는 기획 우선과 시각 증거를 요구했지만, 비개발자 가독성 판정과 여러\n  상태가 필요한 UI의 증거 범위가 충분히 구체적이지 않았습니다.\n- 새 유효 규칙: `한눈에 보는 변경`에서 무엇이·왜·어떻게 달라졌는지 먼저 답하고, 제품 언어로\n  경험·원칙·범위를 설명한 뒤 구현을 근거로 둡니다. 시각 변화는 이해에 필요한 기본·상호작용·\n  선택·성공·실패 상태를 실제 Studio 또는 브라우저에서 캡처합니다.\n- 근거: 기획 철학이 코드 목록에 묻히거나 한 장의 우연한 화면만 남으면 다음 직군과 미래의\n  작업자가 제품 의도를 복원하기 어렵습니다.\n- 의도한 사용자 경험: 디자이너·아티스트·테스터·새 팀원이 소스 코드를 열지 않고도 변경 이유,\n  최종 규칙과 실제 결과를 한 페이지에서 이해합니다.\n- 범위와 제외: 사용자 승인 커밋에서 발행하는 모든 위키 페이지에 적용합니다. 개발 중간\n  기록과 폐기된 접근은 계속 게시하지 않습니다.\n- 영향 소스: AGENTS.md, update-project-wiki/SKILL.md\n- 관련 위키: development-wiki@v013\n- 검증과 증거: 이번 커밋의 character-2d-rendering@v010과 inventory-item-concept@v020에\n  새 서사 순서와 제작·기본·선택·실패·상세·두 화면비 증거를 실제 적용.\n\n### PBP-INV-011 — 배치 순서 기반 장착 요약과 세 가지 빠른 작업\n\n- 날짜: 2026-08-23\n- 도메인: 모바일 인벤토리 / 장착 상태 / 룬 성장 진입\n- 변경 유형: changed\n- 대체 대상: PBP-INV-007의 별도 2×3 장착 무기 표시와 단순 상세·빼기 메뉴\n- 이전 규칙: 장착 무기는 별도 장착 탭의 고정 여섯 칸에서 확인하고 상세 정보 또는 배치 해제를\n  선택했으며, 무기 표시 순서와 다른 부위 장비의 동시 요약 계약이 완전하지 않았습니다.\n- 새 유효 규칙: 유효 배치 무기는 장착판에 들어온 순서를 저장해 왼쪽부터 최대 여섯 개를\n  표시합니다. 오른쪽에는 머리·귀걸이·목걸이·상의·장갑·하의·벨트·반지 둘·신발을\n  함께 표시합니다. 채워진 모든 요약 칸의 메뉴는 이름·등급·공격력·공격 속도 아래 상세 정보,\n  룬 보드 편집, 보관함으로 이동을 이 순서로 제공합니다.\n- 근거: 장착 결과와 다음 성장 작업이 배치 화면에서 분리되면 플레이어가 같은 아이템을 다시\n  찾고 화면을 왕복해야 하며, 단순 식별자 정렬은 실제 장착 순서를 설명하지 못합니다.\n- 의도한 사용자 경험: 장비를 놓은 순서와 현재 부위를 즉시 확인하고, 원하는 아이템에서 바로\n  정보를 읽거나 룬을 편집하거나 보관함으로 되돌립니다.\n- 범위와 제외: 장비 배치 초안의 요약 표시·빠른 작업·전투 무기 복제 순서에 적용합니다.\n  필드 자동 공격 규칙과 아직 등록되지 않은 기본 효과 수치는 변경하지 않습니다.\n- 영향 소스: InventoryModel.luau, ItemPlacementDraft.luau, StateSerializer.luau,\n  Screen.luau, InventoryV2Service.luau\n- 관련 위키: inventory-item-concept@v021\n- 검증과 증거: 배치 순서 보존 Luau 테스트, 세 버튼 순서 UI 계약, Galaxy A06와 iPhone 17\n  Pro의 메뉴·룬 보드 선택 이동 Studio MCP 확인.\n\n### PBP-UI-005 — 배치판 중심 모바일 장비 작업대와 시간 기반 터치 중재\n\n- 날짜: 2026-08-23\n- 도메인: 모바일 인벤토리 / 반응형 레이아웃 / 터치 입력\n- 변경 유형: added\n- 이전 규칙: PBP-UI-004는 선택·길게 누르기·세로 보관함을 정했지만 배치판·도구·장착\n  요약의 한 화면 구성, 확대판 이동과 배치 아이템 드래그의 시간 경계, 요약 영역의 비스크롤\n  규칙을 완전히 정의하지 않았습니다.\n- 새 유효 규칙: 가운데 배치판, 아래 무기 여섯 칸, 오른쪽 위 확대·축소·원상태·회전, 오른쪽\n  아래 부위 장비 열 칸을 한 작업대로 구성합니다. 모든 요약 칸은 화면에 맞춰 정사각형으로\n  줄어들고 스크롤하지 않습니다. 저장·되돌리기는 다른 영역을 축소하지 않는 오버레이입니다.\n  확대판에서 0.3초 이내 움직임은 판 이동, 0.3초 이상 1초 미만 움직임은 아이템 이동이며,\n  1초 정지 뒤 1초 게이지가 차면 메뉴가 열립니다. 보관 아이템을 집으면 목록 스크롤을 잠그고\n  아이템 드래그 그림은 이전 68px의 절반인 34px 위에 표시합니다.\n- 근거: 같은 아이템 위에서 판 탐색·장비 이동·메뉴 열기가 경쟁하고, 화면 크기나 초안 상태가\n  바뀔 때 작업 영역이 재배치되면 모바일 공간 퍼즐의 위치 기억이 깨집니다.\n- 의도한 사용자 경험: 작은 휴대폰에서도 모든 장착 상태와 필수 도구를 스크롤 없이 보고,\n  손가락의 속도와 멈춤만으로 의도한 판 이동·장비 이동·메뉴를 안정적으로 실행합니다.\n- 범위와 제외: 모바일 세로 장비 배치 화면과 터치 입력에 적용합니다. PC 레이아웃 품질과\n  마우스 동등성은 현재 완료 기준이 아닙니다.\n- 영향 소스: ItemGesturePolicy.luau, Screen.luau, VisualTokens.luau,\n  test_inventory_v2_ui.py\n- 관련 위키: inventory-item-concept@v021\n- 검증과 증거: 정사각 비스크롤 UI 계약, 0.3초·1초 경계 Luau 테스트, Galaxy A06\n  359×718과 iPhone 17 Pro 401×776의 기본·메뉴·34px 드래그 Studio MCP 캡처와\n  콘솔 오류 없음 확인.\n\n### PBP-ITEMDB-003 — 모든 장비 화면에 동일한 ItemDB 원화 배치 적용\n\n- 날짜: 2026-08-24\n- 도메인: ItemDB / 모바일 장비 카드 / 배치 시각화\n- 변경 유형: changed\n- 이전 규칙: ItemDB는 사각 점유와 아이콘 자산을 생성했지만, 보관 카드가 웹에서 조정한\n  배율·X/Y 중심·기본 회전을 배치판과 같은 방식으로 사용하지 않았고 카드 아래 실제 점유\n  형태도 보이지 않았습니다.\n- 새 유효 규칙: ItemDB의 배율·중심 보정·기본 회전을 보관 카드, 배치판과 드래그 그림의\n  단일 시각 기준으로 사용합니다. 카드에는 현재 90° 회전을 반영한 실제 점유 칸을 그림 아래\n  표시하며, 원본·공개 DB·생성 런타임을 같은 리비전으로 유지합니다.\n- 근거: 웹에서 정중앙과 크기를 확정해도 게임 화면이 별도 맞춤값을 쓰면 같은 아이템이 화면마다\n  다르게 보이고, 플레이어는 배치 전에 차지할 모양을 예측할 수 없습니다.\n- 의도한 사용자 경험: 웹에서 확인한 크기와 중심 그대로 장비를 보고, 카드를 회전해 점유 모양과\n  그림 방향을 배치 전에 함께 확인합니다.\n- 범위와 제외: 활성 48종의 보관 카드·장비 배치판·드래그 그림과 ItemDB 생성물에 적용합니다.\n  아이템의 전투 능력치나 신규 효과는 변경하지 않습니다.\n- 영향 소스: inventory-item-layouts.json, GeneratedItemLayouts.luau, Screen.luau,\n  item-db-data.js\n- 관련 위키: inventory-item-concept@v022, backpack-combat-stat-database@v001\n- 검증과 증거: ItemDB 리비전 `8fb41028ba82d814`, 증폭 펜던트·집중의 반지 중심값 회귀 검사,\n  Galaxy A06의 선택·90° 회전 카드와 두 모바일 화면비의 카드 점유 미리보기 확인.\n\n### PBP-INV-012 — 배치 상태별 저장 또는 되돌리기 후 룬 이동\n\n- 날짜: 2026-08-24\n- 도메인: 장비 초안 / 룬 성장 진입 / 모바일 단계 단축\n- 변경 유형: changed\n- 이전 규칙: 저장하지 않은 장비 변경이 있으면 룬 보드 이동을 막고, 플레이어가 배치 화면으로\n  돌아가 저장 또는 되돌리기를 직접 끝낸 뒤 같은 아이템을 다시 찾아야 했습니다.\n- 새 유효 규칙: 배치가 정상일 때는 `저장하고 이동하기`, 정상이 아닐 때는\n  `배치를 되돌리고 이동하기`를 제공합니다. 공통으로 `배치로 돌아가기`가 있으며, 저장 성공\n  또는 마지막 저장 상태 복원 뒤 처음 선택한 아이템의 룬 보드로 바로 이동합니다.\n- 근거: 데이터 안전을 지키는 과정이 같은 아이템을 다시 찾는 반복 단계가 되어서는 안 되며,\n  저장 가능 여부는 시스템이 이미 알고 있으므로 다음 안전 행동을 직접 제시할 수 있습니다.\n- 의도한 사용자 경험: 변경 내용을 잃거나 잘못 저장하지 않으면서 한 번의 선택으로 장비 배치를\n  마무리하고 원하는 아이템의 룬 성장으로 이어 갑니다.\n- 범위와 제외: 장착 요약의 룬 보드 편집과 장비 초안 저장·되돌리기에 적용합니다. 룬 초안의\n  저장 규칙 자체는 바꾸지 않습니다.\n- 영향 소스: Screen.luau, test_inventory_v2_ui.py\n- 관련 위키: inventory-item-concept@v022\n- 검증과 증거: Galaxy A06에서 정상 초안의 저장 후 이동 팝업과 잠긴 칸 초안의 되돌리기 후\n  이동 팝업, 선택 아이템 보존과 서버 실패 시 보류 상태 정리 계약 검사.\n\n### PBP-UI-006 — 터치 영역별 보관함 의도와 기기 전체 인벤토리 집중층\n\n- 날짜: 2026-08-24\n- 도메인: 모바일 보관함 / 선택 피드백 / 화면 집중\n- 변경 유형: changed\n- 대체 대상: PBP-UI-004와 PBP-UI-005의 보관함 스크롤·드래그 중재 세부 규칙\n- 이전 규칙: 빠른 움직임과 길게 누르기로 스크롤·드래그를 나눴지만 카드 전체가 두 행동의\n  경쟁 영역이어서 스크롤 중 아이템이 들리거나, 이를 막은 뒤 아이템이 전혀 들리지 않는\n  상태가 반복됐습니다. 카드 등급 외곽선과 선택선도 비슷했고 안전 영역 밖에는 필드가 보였습니다.\n- 새 유효 규칙: 아이템 그림의 8px 이상 움직임은 즉시 드래그하고, 카드 여백·카드 사이의\n  0.4초 이내 세로 움직임은 스크롤합니다. 같은 시간 안의 가로 이탈은 취소하고 0.4초 이상\n  누른 뒤 움직이면 카드 어디서든 드래그합니다. 기본 외곽선은 얇은 중립색, 선택은 안쪽 라임색\n  선입니다. 별도 불투명 배경이 기기 전체를 덮고 뒤 입력을 막되 본체의 안전 영역은 유지합니다.\n- 근거: 한 영역에서 시간만으로 반대 행동을 모두 추측하는 것보다 플레이어가 직접 잡은 대상과\n  빈 공간의 의미를 보존해야 일관된 근육 기억이 생깁니다. 인벤토리 밖 필드 노출은 작업 화면의\n  집중과 완결성을 약화합니다.\n- 의도한 사용자 경험: 그림을 잡으면 즉시 장비가 들리고, 여백과 카드 사이를 밀면 안정적으로\n  목록이 움직이며, 선택 대상과 인벤토리 경계를 한눈에 이해합니다.\n- 범위와 제외: 모바일 장비 보관함의 터치 입력, 카드 외곽선과 인벤토리 전체 배경에 적용합니다.\n  PC 마우스 동등성과 게임 필드의 서버 동작은 변경하지 않습니다.\n- 영향 소스: ItemGesturePolicy.luau, Screen.luau, InventoryV2.spec.luau,\n  test_inventory_v2_ui.py\n- 관련 위키: inventory-item-concept@v022\n- 검증과 증거: Luau의 빠른 세로 스크롤·즉시 그림 잡기·0.4초 이후 드래그 경계, Galaxy A06와\n  iPhone 17 Pro의 카드 선택선·전체 화면 암막, iPhone 17 Pro 정사각 요약 20칸과 콘솔 오류\n  없음 확인.\n\n### PBP-RUNE-008 — 드래그 중 같은 등급 능력 칸의 실제 색 유지\n\n- 날짜: 2026-08-24\n- 도메인: 룬 보드 / 등급 가독성 / 드래그 안내\n- 변경 유형: changed\n- 이전 규칙: 룬을 들면 같은 등급의 열린 능력 아이콘은 남았지만 칸 바탕이 모두 같은 어두운\n  색으로 보여, 현재 룬 등급과 활성 영역의 관계를 색으로 읽을 수 없었습니다.\n- 새 유효 규칙: 같은 등급의 열린 능력 칸은 G0~G6의 실제 등급색과 아이콘을 함께 유지합니다.\n  유효 연결 칸은 라임색을 위에 표시하고 잠긴 칸은 경고색을 유지합니다.\n- 근거: 룬 보드의 핵심 판단은 현재 들고 있는 등급이 어떤 능력 영역을 사용할 수 있는지\n  비교하는 것이므로, 아이콘뿐 아니라 이미 학습한 등급색도 동시에 제공해야 합니다.\n- 의도한 사용자 경험: 룬을 드는 순간 같은 등급 영역을 색으로 훑고, 그중 실제로 놓을 수 있는\n  연결 칸을 라임색으로 즉시 구분합니다.\n- 범위와 제외: 룬 드래그 중 열린 능력 칸과 유효·잠금 안내에 적용합니다. 룬 생성 확률이나\n  능력 수치는 바꾸지 않습니다.\n- 영향 소스: RuneDragVisualState.luau, Screen.luau, InventoryV2.spec.luau\n- 관련 위키: inventory-item-concept@v022\n- 검증과 증거: G0 룬 드래그에서 먹빛 등급 칸 여덟 개와 라임 유효 칸 한 개를 Studio MCP로\n  확인하고, 열린·잠긴·유효 조합을 Luau와 Python 계약 검사로 확인.\n",
          "source_path": "wiki/content/pages/product-planning-change-log/v013.md",
          "timeline_order": 45
        },
        {
          "id": "product-planning-change-log",
          "title": "제품 기획 변경 원장",
          "summary": "누적 원장을 보존하면서 모바일 장비 배치 작업대, 배치 순서 기반 여섯 무기와 부위별 장비 요약, 세 가지 빠른 작업, 확대판 터치 중재와 안정적인 초안 UI를 새 유효 규칙으로 추가했습니다.",
          "status": "active",
          "category": "planning",
          "tags": [
            "planning",
            "decision-log",
            "product",
            "inventory",
            "equipment",
            "rune-board",
            "weapon",
            "combat",
            "mobile",
            "documentation",
            "character",
            "animation",
            "touch",
            "responsive"
          ],
          "created_at": "2026-08-15",
          "updated_at": "2026-08-23",
          "authors": [
            "Codex"
          ],
          "version": 12,
          "change_type": "updated",
          "change_summary": "v011까지의 누적 결정을 보존하고, 배치판 중심 모바일 작업대, 배치 순서 기반 여섯 무기·열 개 장비 요약, 상세·룬 보드·보관 빠른 메뉴, 정사각 비스크롤 칸과 시간 기반 터치 중재를 추가했습니다.",
          "supersedes": "product-planning-change-log@v011",
          "sources": [
            "wiki/content/pages/product-planning-change-log/v011.md",
            "wiki/content/pages/inventory-item-concept/v021.md",
            "docs/gameplay/references/equipment-placement-ui/mobile-equipment-placement-v001.png",
            "src/ReplicatedStorage/InventoryV2/InventoryModel.luau",
            "src/ReplicatedStorage/InventoryV2/ItemGesturePolicy.luau",
            "src/ReplicatedStorage/InventoryV2/ItemPlacementDraft.luau",
            "src/ReplicatedStorage/InventoryV2/Screen.luau",
            "src/ReplicatedStorage/InventoryV2/StateSerializer.luau",
            "src/ReplicatedStorage/InventoryV2/VisualTokens.luau",
            "src/ServerScriptService/InventoryV2Service.luau",
            "tests/InventoryV2.spec.luau",
            "tests/test_inventory_v2_ui.py"
          ],
          "related": [
            "weapon-combat-presentation",
            "inventory-item-concept",
            "synergy-icon-system",
            "backpack-combat-stat-database",
            "development-wiki",
            "character-2d-rendering",
            "project-overview"
          ],
          "validation": [
            "./tools/test_inventory_v2.sh: InventoryV2.spec ok",
            "python3 -m unittest tests.test_inventory_v2_ui: 28 tests passed",
            "python3 -m unittest discover -s tests: 135 tests passed",
            "Roblox Studio MCP Play · Galaxy A06 portrait · 359×718: 장비 작업대 기본·빠른 메뉴·34px 드래그 확인",
            "Roblox Studio MCP Play · iPhone 17 Pro portrait · 401×776: 반응형 정사각 칸·메뉴 경계·룬 보드 이동과 콘솔 오류 없음 확인",
            "Built-in browser localhost preview: v012와 PBP-INV-011·PBP-UI-005의 현재 규칙·원장 항목 렌더링, console warning/error 0 확인",
            "python3 tools/wiki.py build && python3 tools/wiki.py check: 10 pages, 69 revisions, 97 media files 통과",
            "python3 -m unittest tests/test_wiki.py tests.test_repository_policy: 19 tests passed",
            "git diff --check: 통과"
          ],
          "body": "# 제품 기획 변경 원장\n\n## 목적과 기록 원칙\n\n이 페이지는 구현 파일 목록이 아니라 ProjectBackpack의 제품 방향이 왜 바뀌었고 지금 어떤\n규칙이 유효한지를 누적 보존합니다. 플레이어 또는 운영자가 경험하는 제품·게임플레이·UX·\n콘텐츠·아트·플랫폼 규칙이 추가, 변경, 대체 또는 폐기될 때 기록합니다. 동작을 바꾸지 않는\n내부 리팩터링은 원장 대상이 아닙니다.\n\n각 결정은 안정적인 ID를 가집니다. 이후 규칙이 달라지면 이미 커밋된 항목을 고치거나 지우지\n않고 새 버전에 후속 항목을 추가해 이전 ID와 관계를 명시합니다. 최신 버전은 과거 원장과\n현재 유효 규칙을 모두 포함하며, 실제 제품 변경·주제별 위키·검증 증거와 같은 커밋에서\n발행합니다.\n\n## 현재 유효 규칙\n\n### PBP-INV-001 — 인벤토리에는 명확한 이탈과 호환 토글이 있다\n\n모바일 인벤토리는 우측 최상단 닫기 버튼으로 메인 화면에 복귀합니다. PC 호환 경로의 Tab\n토글은 진단 호환으로 남지만 현재 제품 UI 완료 기준은 모바일입니다.\n\n### PBP-ITEMDB-002 — 최종 48종이 ItemDB와 런타임의 단일 활성 집합이다\n\n과거 90종과 특수 아이템 미디어는 활성 원본·공개 DB·생성 런타임에서 제거합니다. 무기 14종과\n방어구·장신구 34종의 이름, 사각 점유, 카툰 아이콘과 Roblox 자산 참조를 ItemDB 원본에서\n생성하며 ON/OFF 경계는 향후 콘텐츠 운영을 위해 유지합니다.\n\n### PBP-CONTENT-001 — 폐기 아이템은 모든 제품 표면에서 함께 제거한다\n\n아이템을 실제로 폐기할 때는 카탈로그·레이아웃·이미지·런타임·공개 DB에서 함께 제거하고\n매니페스트 이력만 보존합니다.\n\n### PBP-DOC-001 — 기획 변경은 커밋 시 누적 원장으로 발행한다\n\n물질적인 제품 기획 변경은 사용자 승인 커밋에서 안정적인 ID와 함께 누적 발행합니다.\n\n### PBP-ACTION-002 — Dash는 3단계 자세와 이동 구간 잔상을 사용한다\n\n기본 Dash의 방향 잠금·0.30초·20스터드 규칙은 유지하되, 시작 프레임 고정은 예비 0.05초·\n이동 0.20초·회복 0.05초의 통짜 캐릭터 자세로 대체합니다. 잔상은 이동 구간에서만 실제\n경로 뒤에 생기고 회복 구간에서 본체로 수렴합니다. 룬의 추가 거리와 무적시간은 기존 한도\n안에서 별도 적용합니다.\n\n### PBP-ART-003 — 정지 캐릭터는 발이 고정된 좌우 호흡을 사용한다\n\nIdle은 마지막 좌우 방향을 유지하는 8프레임 6fps 통짜 캐릭터 애니메이션입니다. 발과 골반\n아래는 고정하고 상체의 들숨·날숨만 움직이며, 캐릭터 전체를 균일 확대·축소하지 않습니다.\n\n### PBP-INV-010 — 장비 배치는 전체 초안으로 검토하고 원자 저장한다\n\n아이템 추가·이동·회전·보관은 마지막 저장 상태와 분리된 전체 초안을 갱신합니다. 겹친 장비는\n가장 가까운 빈자리로 밀어 전체 결과를 미리 보여 주며, 잠금·한도·무게 등 잘못된 상태는 빨간\n초안으로 남기되 저장을 끕니다. 서버는 전체 좌표를 다시 검증해 모두 유효할 때만 한 번에\n교체하고 되돌리기는 마지막 저장 상태를 복원합니다.\n\n### PBP-UI-004 — 모바일 장비 조작은 선택·길게 누르기·세로 보관함을 사용한다\n\n짧은 탭은 선택만 하고 선택된 아이템에 회전 버튼을 노출합니다. 움직이지 않은 길게 누르기는\n룬 페이지와 상세 정보 메뉴를 열며, 움직임이 생기면 스크롤 또는 드래그로 전환합니다. 보관함은\n세로 다열 그리드이고 실제 아이템 그림과 점유 가이드는 같은 스냅 위치를 사용합니다.\n\n### PBP-INV-011 — 장착 요약은 배치 순서와 부위 상태를 즉시 관리한다\n\n유효하게 배치된 무기는 장착판에 들어온 순서를 보존해 왼쪽부터 최대 여섯 칸에 표시합니다.\n무기가 아닌 장비는 머리·귀걸이·목걸이·상의·장갑·하의·벨트·반지 둘·신발의 열 칸에\n표시합니다. 채워진 요약 칸은 아이템 이름·등급·공격력·공격 속도와 상세 정보, 룬 보드 편집,\n보관함으로 이동의 세 작업을 같은 문맥에서 제공합니다.\n\n### PBP-UI-005 — 모바일 장비 화면은 배치판 중심의 안정적인 작업대다\n\n가운데 배치판, 아래 여섯 무기, 오른쪽 도구와 부위별 장비를 한 화면에 둡니다. 요약 칸은\n해상도에 맞춰 정사각형으로 축소되고 자체 스크롤을 만들지 않으며, 저장·되돌리기는 화면 위에\n떠서 다른 영역을 줄이지 않습니다. 확대판은 보이는 스크롤바 없이 직접 끌어 움직입니다.\n배치 아이템 위의 움직임은 0.3초 이내면 확대판 이동, 0.3초 이상 1초 미만이면 아이템 이동으로\n판정하고, 1초 동안 정지했을 때만 메뉴 게이지를 시작합니다. 보관함 드래그가 확정되면 보관함\n스크롤을 잠그며 아이템 그림은 손가락 위로 34px만 띄웁니다.\n\n### PBP-DOC-002 — 커밋 위키는 비개발자 기획 서사와 충분한 화면 증거를 요구한다\n\n위키는 무엇이·왜·어떻게 달라졌는지와 사용자 경험을 먼저 설명하고 구현 세부는 뒤의 증거로\n둡니다. 눈에 보이는 변화는 기능을 이해하는 데 필요한 기본·선택·확장·성공·실패 상태를 실제\nStudio 또는 브라우저에서 캡처하며, 이미 커밋된 버전과 증거는 덮어쓰지 않습니다.\n\n### PBP-DEV-001 — Studio 무게 제한 테스트는 세션 전용이다\n\n기존 Studio 진단값은 영구 저장을 오염시키지 않습니다. 새 인벤토리 구현에서 무게 시스템을\n유지할지는 별도 결정하지만 진단 데이터 비영구 원칙은 유지합니다.\n\n### PBP-INV-009 — 메인 인벤토리는 사각 장착판과 부위별 제한을 사용한다\n\n유효한 사각 배치가 곧 장착입니다. 무기는 여섯 개, 반지는 두 개이며 같은 정의의 무기·반지는\n중복할 수 없습니다. 머리·귀걸이·목걸이·상의·하의·글러브·신발·벨트는 한 개씩 장착하고\n디아블로식 장비 화면은 같은 상태를 투영합니다.\n\n### PBP-SYNERGY-001 — 가방·시너지 제품 방향은 폐기한다\n\n가방 활성 칸, 육각 메인 인벤토리, 26종 시너지, 시너지 필터와 A/B/C 공간 접촉 효과는 새\n제품 방향에서 사용하지 않습니다. 육각형은 아이템별 룬 보드에만 사용합니다.\n\n### PBP-CONTENT-003 — 알파 장비 활성 집합은 48종이다\n\n무기 14종과 방어구·장신구 34종을 사용합니다. 크기별 두 역할을 두고 반지는 동일 아이템\n중복 금지로 인한 강제 조합을 피하기 위해 네 종류를 둡니다. 특수 아이템과 방패는 현재 48종에\n포함하지 않습니다.\n\n### PBP-RUNE-004 — 아이템마다 후보 10개 중 하나인 427칸 보드를 가진다\n\n각 아이템 정의는 61칸 영역 일곱 개, 총 427칸인 후보 보드 10개를 가집니다. 생성 시 하나를\n균등 선택해 VariantId와 Seed를 영구 저장합니다. 0~6 주등급은 영역을 하나씩 열고, 일곱\n중앙 시작점의 색 등록과 한 칸 간격 연결을 사용합니다. 능력 등급 총량은\n30·45·54·60·67·90·81칸이며 레어는 황금 테두리로 구분합니다.\n\n### PBP-COMBAT-001 — 자동 스킬·방어·확률에는 명시적 캡이 있다\n\n무기 스킬은 해당 무기의 기본 공격 횟수로 자동 발동하고 발사체·도탄·관통·다른 스킬은\n카운터를 늘리지 않습니다. 방패 막기는 최대 100%에서 방어력을 두 배로 적용하고, 방어력\n계산 뒤 최종 피해감소는 최대 50%입니다. 행동 빈도·확률·무적·발사체 수에는 항목별 캡을\n적용하되 선형 공격력·체력 성장은 허용합니다.\n\n### PBP-COMBAT-003 — 여섯 무기는 근접 할로에서 하나의 최근접 적을 정확히 겨눈다\n\n최대 여섯 장착 무기는 머리 가까운 좁은 타원의 왼쪽 세 개·오른쪽 세 개에 같은 간격으로\n배치하며 정중앙 위·아래는 비웁니다. 적이 없을 때는 원화 방향을 유지한 채 각자 부유합니다.\n적이 있으면 장착 집합이 사거리 안의 가장 가까운 생존 적 하나를 공통 후보로 고르고, 각 무기는\n자기 사거리 안에서 실제 칼끝·타격점·총구·화살·볼트 발사 방향을 그 적에게 맞춥니다. 오른쪽을\n기본 방향으로 그린 원거리 무기가 왼쪽을 볼 때는 거꾸로 돌리지 않고 수평 반전하며 회전축과\n공격 소켓도 함께 반전합니다. 서버 권위 표적·피해와 여섯 공격 계열은 유지합니다.\n\n### PBP-RUNE-003 — 알파 무기 14종은 고정된 능력 정체성을 가진다\n\n검·창·곡궁·석궁·총·메이스·도끼 각 두 종류는 A1~D2와 E1~E3의 실제 구현 훅을 가집니다.\n목걸이·반지·귀걸이는 호환 무기 전체에 적용되는 전역 레어를, 신발은 추가 대시 레어를\n제공합니다.\n\n### PBP-RUNE-005 — 룬은 34종 도형과 effect 기반 아이콘을 사용한다\n\n1~5칸 룬은 회전·반전을 동일시한 34종 자유 폴리헥스를 사용합니다. 일곱 색은 같은 중립 원화를\n틴트하고, 능력 의미는 실제 전투 effect_id와 1:1인 62종 중앙 아이콘으로 별도 합성합니다.\n드래그는 잡은 칸과 실제 형태를 유지하고 마지막 스냅 가이드를 서버 요청값으로 사용합니다.\n\n### PBP-RUNE-006 — 룬 등급·색·시작점은 일대일이며 배치는 회전만 사용한다\n\nG0~G6 룬은 먹빛·상아·초록·하늘·보라·황금·장미와 일대일입니다. 각 룬은 같은 번호 영역의\n중앙 시작점에서만 처음 등록하고 아이템 등급보다 높은 룬은 등록할 수 없습니다. 런타임 배치는\n60° 회전만 제공하고 별도 반전은 제공하지 않습니다. 첫 배치 전에는 중앙 한 칸, 이후에는 같은\n색 네트워크에서 한 칸 떨어진 연결 전선만 밝게 안내합니다.\n\n### PBP-UI-001 — 인벤토리와 룬 보드는 모바일 고정 작업 흐름을 공유한다\n\n상단 상태, 중앙 작업판, 하단 보관함을 안전 영역 안에 고정합니다. 아이템·룬 합성은 두 재료와\n결과 미리보기 문법을 공유하고 룬 보관함은 상하 스크롤을 사용합니다. 빈 룬 칸의 탭은 상단\n중앙에 능력 정보를 표시합니다.\n\n### PBP-UI-002 — 룬 보드는 문맥을 보존하고 필터는 카드 공간을 침범하지 않는다\n\n장착 룬 회전은 마지막 선택 룬에만 적용하고 확대·축소는 보고 있던 보드 위치를 보존합니다.\n룬 보관함은 `색상 필터`와 `칸 수 필터` 두 버튼만 한 줄에 두며, 보드 위 말풍선에서 G0~G6와\n1~5칸을 각각 다중 선택합니다. 능력 설명은 색상명을 반복하지 않고 옅은 황금색 글자·짙은\n보라색 외곽선으로 등급·능력명·수치를 표시합니다.\n\n### PBP-RUNE-007 — 룬 배치는 전체 초안으로 편집하고 원자적으로 저장한다\n\n룬 추가·이동·회전·회수는 마지막 저장 상태와 분리된 전체 초안을 갱신합니다. 규칙에 어긋난\n룬도 빨간 상태로 계속 편집할 수 있지만 저장은 비활성화됩니다. 서버는 전체 배치를 다시\n검증해 유효할 때만 한 번에 교체하며, 되돌리기는 마지막 저장 상태를 복원합니다. 같은 색\n네트워크는 변을 맞대지 않고 정확히 한 칸 간격을 두며 배치 순서와 무관하게 판정합니다.\n\n### PBP-UI-003 — 룬 보드는 현재 조작 문맥과 잠금 이유를 한 화면에 보여 준다\n\n보관 카드와 배치 룬을 모두 선택·60° 회전할 수 있고, 배치 룬은 이동하거나 보관함으로 회수할\n수 있습니다. 가이드는 현재 잡은 셀·회전·전체 배치를 기준으로 계산하며 유효 칸은 라임색,\n아이템 등급으로 닫힌 칸은 탁한 적갈색, 무효 초안은 빨간색으로 표시합니다. 기존 배치와 같은\n색 능력 아이콘은 드래그 중에도 남깁니다. 벌집은 틈 없는 얇은 선, 룬은 색이 비치는 투명\n크리스털 프레임을 사용하고, 전체 필터는 일부 OFF면 모두 ON·모두 ON이면 모두 OFF로\n동작합니다. 룬 각인 효과 탭은 유효 노드를 효과별로 합산합니다.\n\n### PBP-COMBAT-004 — 인벤토리 작업 중 필드 공격 연출을 일시 정지한다\n\n인벤토리나 룬 작업 화면이 열리면 클라이언트 공격 연출을 즉시 지우고 새 연출을 받지 않으며\n전투 VFX 오버레이를 끕니다. 화면을 닫으면 표현만 다시 허용합니다. 서버 표적·공격·피해와\n장착 상태는 바꾸지 않습니다.\n\n### PBP-ART-002 — 아이템은 사각 점유와 모바일 전투에 맞는 카툰 실루엣을 사용한다\n\n최종 48종 원화는 굵고 밝은 카툰풍으로 통일합니다. 근접 무기는 위쪽, 활·석궁·총은 오른쪽을\n기본 방향으로 두고 발사체와 궤적을 원화에 굽지 않습니다. 그림의 질량과 돌출부가 사각 점유\n형태에 자연스럽게 맞아야 합니다.\n\n## 변경 원장\n\n### PBP-INV-001 — 인벤토리 이탈과 Tab 토글\n\n- 날짜: 2026-08-15\n- 도메인: 인벤토리 접근성 / 플랫폼 입력\n- 변경 유형: changed\n- 이전 규칙: 화면 내부 닫기 버튼과 명확한 PC 토글 경로가 없었습니다.\n- 새 유효 규칙: 모바일 우측 최상단 닫기 버튼을 두고 PC 호환 시 Tab을 인벤토리 전용\n  토글로 사용하며 기본 플레이어 목록을 해제합니다.\n- 근거: 작업 화면에는 안전한 이탈 경로가 필요하며 한 입력이 두 UI를 열면 안 됩니다.\n- 의도한 사용자 경험: 닫는 법을 탐색하지 않고 즉시 메인 화면으로 돌아갑니다.\n- 범위와 제외: 모바일 터치와 PC 입력 호환에 적용하며 PC 레이아웃 품질은 제외합니다.\n- 영향 소스: Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: Luau 테스트, 소스 검사와 최종 Studio 모바일 화면.\n\n### PBP-INV-002 — 배치 보드 범위와 도구 배치\n\n- 날짜: 2026-08-15\n- 도메인: 모바일 배치 보드 / 공간 가독성\n- 변경 유형: changed\n- 이전 규칙: 빈 배치 영역과 우측 도구의 공간 관계가 충분히 드러나지 않았습니다.\n- 새 유효 규칙: 전체 배치 영역에 옅은 육각 격자를 그리고 우측 상단 모드 탭과 우측 하단\n  확대 도구를 위한 반응형 인셋을 둡니다.\n- 근거: 빈 공간도 게임 공간이며 조작 계층과 동시에 보여야 합니다.\n- 의도한 사용자 경험: 배치 가능 범위와 도구 위치를 즉시 이해합니다.\n- 범위와 제외: 모바일 보드와 모드·확대 도구에 적용합니다.\n- 영향 소스: VisualTokens.luau, ScreenRenderer.luau, ScreenState.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: iPhone 17 Pro와 Galaxy A06 Studio Play의 잘림·겹침 검사.\n\n### PBP-INV-003 — 손가락 위 드래그와 단일 목적지 안내\n\n- 날짜: 2026-08-15\n- 도메인: 인벤토리 드래그 / 배치 피드백\n- 변경 유형: changed\n- 이전 규칙: 아이템이 포인터 아래에 남고 여러 강조가 목표 칸과 경쟁했습니다.\n- 새 유효 규칙: 회전된 그림 전체를 포인터 위로 올리고 그림과 목적지 외곽선만 표시합니다.\n- 근거: 드래그 중에는 대상과 내려놓을 위치가 가장 강하게 읽혀야 합니다.\n- 의도한 사용자 경험: 손가락에 가리지 않은 그림으로 정확히 조준합니다.\n- 범위와 제외: 아이템 드래그에 적용하며 그림이 없는 가방은 점유 형태를 사용합니다.\n- 영향 소스: DragPlacementState.luau, Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 포인터 리프트·잡은 칸·outline-only Luau 테스트.\n\n### PBP-INV-004 — 카드·선택 정보와 0.1Kg 정밀도\n\n- 날짜: 2026-08-15\n- 도메인: 아이템 정보 구조 / 무게 규칙\n- 변경 유형: changed\n- 이전 규칙: 무게 표현과 시너지 정렬이 좁은 카드에서 일관되지 않았습니다.\n- 새 유효 규칙: x.xKg 표시와 0.1Kg 판정을 통일하고 시너지를 카드 가운데 정렬합니다.\n- 근거: 화면 표시와 게임 판정은 같은 값을 사용해야 합니다.\n- 의도한 사용자 경험: 좁은 카드에서 핵심 정보와 초과 이유를 빠르게 이해합니다.\n- 범위와 제외: 저장 카드, 선택 정보, 합계와 허용 판정에 적용합니다.\n- 영향 소스: WeightEvaluator.luau, ItemInstanceHydrator.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013, backpack-combat-stat-database\n- 검증과 증거: 무게 양자화·형식·허용 판정 테스트와 카드 소스 검사.\n\n### PBP-INV-005 — 필터와 배치 모드의 직접 연결\n\n- 날짜: 2026-08-15\n- 도메인: 보관함 탐색 / 모드 전환\n- 변경 유형: changed\n- 이전 규칙: 종류 필터와 배치 탭을 따로 바꿔야 했습니다.\n- 새 유효 규칙: 가방 필터는 가방 배치로, 다른 필터는 아이템 배치와 해당 종류로 이동합니다.\n- 근거: 보관함 종류 선택은 다음 배치 대상의 선택입니다.\n- 의도한 사용자 경험: 한 번의 터치로 원하는 목록과 배치 모드에 도달합니다.\n- 범위와 제외: 일반 종류 필터 다섯 개와 배치 모드 연동에 적용합니다.\n- 영향 소스: ScreenState.luau, Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 모드별 필터 상태 Luau 테스트.\n\n### PBP-INV-006 — 시너지·칸 수 고급 필터\n\n- 날짜: 2026-08-15\n- 도메인: 보관함 고급 탐색 / 모바일 UI\n- 변경 유형: added\n- 이전 규칙: 종류 외의 시너지와 점유 칸 범위를 직접 좁힐 수 없었습니다.\n- 새 유효 규칙: 별도 고급 필터에서 26종 시너지 토글과 1~9 칸 범위를 설정합니다.\n- 근거: 조합과 공간 효율은 종류와 독립적인 탐색 기준입니다.\n- 의도한 사용자 경험: 조합과 크기에 맞는 아이템을 빠르게 좁힙니다.\n- 범위와 제외: 가방과 아이템 칸 범위, 아이템의 하나 이상 시너지 일치에 적용합니다.\n- 영향 소스: ScreenState.luau, Screen.luau, ScreenRenderer.luau, VisualTokens.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 사용자 기획 이미지, Studio 캡처와 두 모바일 화면 테스트.\n\n### PBP-ART-001 — 시너지 아이콘 소형 가독성 규칙\n\n- 날짜: 2026-08-15\n- 도메인: 모바일 UI 아트 방향 / 인벤토리 시너지\n- 변경 유형: changed\n- 이전 규칙: 큰 합본을 축소해 실제 카드 크기에서 세부가 합쳐졌습니다.\n- 새 유효 규칙: 약 25px를 승인 기준으로 대표 심볼·투명 배경·최대 3색·216px 경계를\n  사용합니다.\n- 근거: 작은 화면에서 시너지를 구분하는 속도가 우선입니다.\n- 의도한 사용자 경험: 짧게 훑어도 형태와 대표색으로 시너지를 구분합니다.\n- 범위와 제외: 활성 26종 이미지와 재생성 계약에 적용하며 의미와 효과는 바꾸지 않습니다.\n- 영향 소스: Assets/UI/Backpack/SynergyIcons, SynergyCatalog.luau\n- 관련 위키: synergy-icon-system@v001, inventory-item-concept\n- 검증과 증거: 두 Studio 모바일 화면, 26개 자산과 전용 이미지 테스트.\n\n### PBP-CONTENT-001 — FootprintExpansion21 활성 집합 정리\n\n- 날짜: 2026-08-15\n- 도메인: 아이템 콘텐츠 / 공개 데이터\n- 변경 유형: retired\n- 이전 규칙: 확장 시안 21개가 모두 활성 후보로 남았습니다.\n- 새 유효 규칙: 11개만 활성화하고 10개는 제품 데이터와 미디어에서 제거합니다.\n- 근거: 폐기 시안이 남으면 현재 지원 범위를 잘못 전달합니다.\n- 의도한 사용자 경험: 실제 지원하는 아이템만 게임과 공개 DB에서 확인합니다.\n- 범위와 제외: 해당 10개 아이콘·레이아웃·참조를 제거하고 매니페스트 이력은 보존합니다.\n- 영향 소스: FootprintExpansion21, ItemDB 카탈로그·레이아웃·생성 산출물\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: ItemDB 90개 build/check와 생성 산출물 검사.\n\n### PBP-DOC-001 — 누적 제품 기획 변경 원장\n\n- 날짜: 2026-08-15\n- 도메인: 개발 문서 운영\n- 변경 유형: added\n- 이전 규칙: 기획 규칙의 변경을 한곳에서 계속 추적하는 누적 원장이 없었습니다.\n- 새 유효 규칙: 사용자 승인 커밋마다 물질적 변경을 안정적인 ID와 함께 누적합니다.\n- 근거: 구현이 개선돼도 최종 규칙과 변경 이유가 사라지지 않아야 합니다.\n- 의도한 사용자 경험: 위키 한 페이지에서 현재 규칙과 과거 이유를 연속 확인합니다.\n- 범위와 제외: 제품·게임플레이·UX·콘텐츠·아트·플랫폼·운영에 적용하며 순수 리팩터링은\n  제외합니다.\n- 영향 소스: AGENTS.md, wiki/content/pages/product-planning-change-log\n- 관련 위키: inventory-item-concept, development-wiki\n- 검증과 증거: 위키 빌드·체크·정책 테스트와 동일 커밋 발행.\n\n### PBP-ITEMDB-001 — ItemDB ON/OFF 베이크 경계\n\n- 날짜: 2026-08-16\n- 도메인: 아이템 운영 / 게임 배포\n- 변경 유형: added\n- 이전 규칙: ItemDB에 존재하는 모든 아이템이 항상 생성 런타임과 게임 베이크에 포함됐습니다.\n- 새 유효 규칙: 각 아이템은 ON/OFF 상태를 가지며 OFF는 웹 기획 기록에는 남고 다음 베이크와\n  생성 런타임에서는 제외됩니다. ON 복귀 시 기존 형태·이미지·시너지·효과 설정을 유지합니다.\n- 근거: 일시 제외와 영구 폐기를 구분해야 콘텐츠 실험과 롤백이 데이터 삭제 없이 가능합니다.\n- 의도한 사용자 경험: 운영자는 한 번의 버튼으로 게임 노출을 제어하고 플레이어는 승인된\n  활성 아이템만 만납니다.\n- 범위와 제외: ItemDB 웹 편집, 생성 레이아웃, 게임 카탈로그와 Studio 베이크에 적용합니다.\n  OFF 항목의 원본·웹 검색·이미지는 삭제하지 않습니다.\n- 영향 소스: inventory-item-layouts.json, tools/item_db.py, GeneratedItemLayouts.luau,\n  ItemCatalog.luau, wiki/site/app.js\n- 관련 위키: inventory-item-concept@v014\n- 검증과 증거: 390×844 ON 행 캡처, OFF 생성 제외 테스트, ItemDB 90개 정합성 검사.\n\n### PBP-EFFECT-001 — A·B·C 공간 접촉 효과 영역\n\n- 날짜: 2026-08-16\n- 도메인: 아이템 조합 / 공간 효과 / ItemDB 저작\n- 변경 유형: added\n- 이전 규칙: 아이템은 자기 능력치와 점유 형태만 가졌고 주변 아이템 접촉을 표현하는\n  저작 계약이 없었습니다.\n- 새 유효 규칙: 아이템당 A·B·C 최대 세 효과 슬롯을 두고 점유 경계 바깥 Q/R 다섯 칸까지\n  직접 효과 칸을 선택합니다. 각 슬롯은 종류·조건·능력 ID를 가지며 공간 접촉 판정과 실제\n  능력 실행은 분리합니다.\n- 근거: 가방 배치의 공간 관계를 조합 빌드로 확장하되 전투 규칙이 배치 기하에 결합되지\n  않아야 합니다.\n- 의도한 사용자 경험: 플레이어는 아이템을 어디에 놓고 무엇과 맞닿게 하는지로 추가 효과를\n  설계하고, 운영자는 같은 육각 편집 방식으로 규칙을 시각적으로 저작합니다.\n- 범위와 제외: 효과 칸 데이터, 카탈로그 ID, 회전 접촉 후보 평가까지 포함합니다. 조건 논리,\n  능력치 합산, 전투 발현과 시각 효과는 후속 범위입니다.\n- 영향 소스: item-effect-catalog.json, item-effect-slots.md, inventory-item-layouts.json,\n  GeneratedItemLayouts.luau, ItemEffectContactEvaluator.luau, ItemInstanceHydrator.luau,\n  wiki/site/app.js, wiki/site/item-db.js\n- 관련 위키: inventory-item-concept@v014, backpack-combat-stat-database\n- 검증과 증거: 390×844 A/B/C 편집 캡처, 효과 좌표·카탈로그·회전 접촉·드래그 비활성 테스트,\n  Studio의 동일 리비전 90개 레이아웃과 EffectCatalog 확인.\n\n### PBP-ITEMDB-002 — ItemDB 칸 수·시너지·게임 ON 복합 필터\n\n- 날짜: 2026-08-18\n- 도메인: ItemDB 운영 / 웹 탐색\n- 변경 유형: added\n- 이전 규칙: ItemDB는 이름과 대분류만 좁힐 수 있어 점유 크기·시너지·실제 게임 포함\n  집합을 따로 확인해야 했습니다.\n- 새 유효 규칙: 최소·최대 칸 수, 여러 시너지의 OR, 전체/게임 ON 상태를 검색·대분류와\n  AND로 조합하며 스크롤과 효과 카탈로그 접힘 상태를 재렌더링 뒤에도 유지합니다.\n- 근거: 전체 기획 목록과 현재 게임 집합을 한 화면에서 빠르게 비교해야 합니다.\n- 의도한 사용자 경험: “게임에 들어가는 2~4칸 기계 또는 원거리 아이템”을 그대로 필터로\n  표현하고 실제 아이콘으로 결과를 빠르게 훑습니다.\n- 범위와 제외: 공개·로컬 ItemDB 탐색과 시너지 미디어에 적용합니다. 게임 안의 보관함\n  고급 필터 상태와는 별도입니다.\n- 영향 소스: tools/item_db.py, wiki/site/app.js, wiki/site/app.css, wiki/site/item-db-data.js,\n  wiki/site/synergy-media\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: 1440×900 복합 필터 캡처, 8개 ON 결과, 26/26 이미지 로드,\n  catalogOpen=false·scrollY=188 유지, 브라우저 콘솔 오류·경고 0건.\n\n### PBP-INV-007 — 최대 6개 장착 무기와 필드 표시\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 장착 / 필드 가독성\n- 변경 유형: added\n- 이전 규칙: 유효하게 배치된 무기는 보드 안에서만 보였고 장착 목록·한도·필드 표시 계약이\n  없었습니다.\n- 새 유효 규칙: 유효한 Weapon은 최초 배치 순서대로 최대 6개까지 장착되고 2×3 장착 탭,\n  상세 정보·빼기, 모든 캐릭터 위의 방향 반응 이미지로 표시됩니다.\n- 근거: 공간 배치 결과가 실제 플레이 장비로 읽혀야 인벤토리 퍼즐과 전투 준비가 연결됩니다.\n- 의도한 사용자 경험: 여섯 슬롯에서 장착 상태를 관리하고 필드에서 자신의 빌드를 즉시\n  알아봅니다.\n- 범위와 제외: 장착 상태·관리·이미지 표시에 적용합니다. 실제 공격 실행과 무기 모델은\n  후속 범위입니다.\n- 영향 소스: EquippedItemModel.luau, InventoryBoardModel.luau, InventorySerializer.luau,\n  Screen.luau, ScreenRenderer.luau, InventoryService.luau, EquippedWeaponBillboard.luau,\n  CharacterController.luau, DirectionResolver.luau\n- 관련 위키: inventory-item-concept@v015, character-2d-rendering@v009\n- 검증과 증거: iPhone 17 Pro·Galaxy A06 장착 슬롯과 상세 모달 캡처, 6개 한도 Luau 테스트,\n  West 87.8°·East -92.1° 방향 회전, 최종 Studio 콘솔 오류·경고 0건.\n\n### PBP-INV-008 — 상태와 무관한 2px 배치 외곽선\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 시각 계층\n- 변경 유형: changed\n- 이전 규칙: 가방 시너지나 배치 미리보기 상태에 따라 외곽선이 3~7px로 굵어질 수 있었습니다.\n- 새 유효 규칙: 가방·아이템·선택·시너지·유효·무효·미리보기 외곽선은 모두 2px이며 상태는\n  색으로만 구분합니다.\n- 근거: 굵기 변화가 점유 형태를 실제보다 커 보이게 하고 아이템 그림과 경쟁했습니다.\n- 의도한 사용자 경험: 같은 공간 형태를 안정적으로 읽고 색으로 상태만 빠르게 구분합니다.\n- 범위와 제외: 인벤토리 보드와 보관함 선택 외곽선에 적용합니다.\n- 영향 소스: ScreenState.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: 모든 외곽선 경로가 GetBoundaryThickness=2를 사용하는 Luau·소스 회귀 테스트.\n\n### PBP-CONTENT-002 — 게임 ON 32개 승인 집합\n\n- 날짜: 2026-08-18\n- 도메인: 아이템 콘텐츠 / 게임 배포\n- 변경 유형: changed\n- 이전 규칙: 전체 90개 ItemDB가 모두 게임 ON으로 생성 런타임에 포함됐습니다.\n- 새 유효 규칙: 전체 기획 목록 90개를 보존하면서 게임 ON 32개만 생성 런타임과 Studio\n  베이크에 포함합니다. 포켓 네일건은 MACHINE을 제외한 RANGED·GUN, 소화기 철퇴는\n  FORGED 대신 MACHINE을 사용합니다.\n- 근거: 현재 게임에 투입할 승인 콘텐츠와 후속 기획 후보를 데이터 삭제 없이 구분합니다.\n- 의도한 사용자 경험: 플레이어는 승인된 32개만 만나고 운영자는 OFF 58개를 계속 비교·복원할\n  수 있습니다.\n- 범위와 제외: PBP-CONTENT-001의 전체 90개 카탈로그와 폐기 이력은 유지하며 게임 포함 집합만\n  변경합니다.\n- 영향 소스: inventory-item-layouts.json, GeneratedItemLayouts.luau, wiki/site/item-db-data.js\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: ItemDB revision a35b00cf76ec6c75, 전체 90·게임 ON 32 build/check,\n  Studio 같은 소스 베이크와 저장.\n\n### PBP-ACTION-001 — 20스터드 방향 잠금 Dash\n\n- 날짜: 2026-08-18\n- 도메인: 캐릭터 액션 / 이동 / 스프라이트 일관성\n- 변경 유형: changed\n- 이전 규칙: Dash는 0.20초 동안 목표 속도 30 studs/s의 순간 충격을 적용하고 별도 Dash\n  포즈를 재생할 수 있었습니다.\n- 새 유효 규칙: Dash는 0.30초 동안 선택 방향을 잠그고 장애물이 없는 기준 20스터드를\n  이동합니다. WalkSpeed·AutoRotate를 잠근 뒤 복원하고 시작 순간의 완성 프레임을 유지합니다.\n- 근거: 이동 거리를 입력·현재 속도와 분리해 일관되게 만들고, 승인 Run 아틀라스가 레거시\n  모듈식 Walk/Dash 이미지로 바뀌는 비율 변화를 막습니다.\n- 의도한 사용자 경험: Dash 방향이 중간에 꺾이지 않고 같은 거리를 이동하며 캐릭터 모습도\n  한 프레임으로 안정적으로 유지됩니다.\n- 범위와 제외: 클라이언트 Dash 이동·방향·스프라이트에 적용합니다. 장애물 관통이나 별도\n  Dash 공격 판정은 추가하지 않습니다.\n- 영향 소스: character-actions.md, Config.luau, PlayerActionController.luau,\n  CharacterController.luau, test_two_direction_run_build.py\n- 관련 위키: character-2d-rendering@v009\n- 검증과 증거: Galaxy A06 Play에서 19.46스터드 이동, 이동 중 WalkSpeed=0·AutoRotate=false,\n  종료 뒤 16·true 복원, 최종 콘솔 오류·경고 0건.\n\n### PBP-DEV-001 — 세션 전용 허용 무게 테스트 창\n\n- 날짜: 2026-08-18\n- 도메인: Studio 개발 도구 / 데이터 안전\n- 변경 유형: added\n- 이전 규칙: 허용 무게 경계값을 플레이 중 빠르게 바꾸는 전용 진단 UI가 없었습니다.\n- 새 유효 규칙: Studio에서만 F2 창으로 허용 무게를 1Kg씩 조정하고, 영구 저장에는 플레이어의\n  원래 제한값을 사용합니다.\n- 근거: 무게 초과 UI와 배치 경계를 반복 검증하되 진단 값이 사용자 데이터에 남으면 안 됩니다.\n- 의도한 사용자 경험: 개발자는 Play를 다시 시작하지 않고 경계값을 시험하며 플레이어는\n  테스트 기능이나 변조된 저장값을 보지 않습니다.\n- 범위와 제외: Roblox Studio 진단 세션에만 적용하며 모바일 제품 UI 완료 범위가 아닙니다.\n- 영향 소스: DeveloperTestControls.luau, DeveloperTestWindow.luau, Screen.luau,\n  InventoryService.luau\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: Studio-only 생성·서버 거부·원래 제한 직렬화 소스 검사와 Luau 경계 테스트.\n\n### PBP-INV-009 — 사각 장착판과 부위별 중복 제한\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 장착 / 공간 퍼즐\n- 변경 유형: superseded\n- 이전 규칙: PBP-INV-002~007은 육각 가방이 활성 칸을 만들고 시너지·필터와 유효 배치 무기\n  여섯 개를 관리하는 메인 인벤토리를 사용했습니다.\n- 새 유효 규칙: 아이템은 사각 폴리오미노로 배치하며 유효한 배치가 곧 장착입니다. 무기는\n  여섯 개, 반지는 두 개, 나머지 지정 부위는 한 개이며 무기·반지는 같은 DefinitionId를\n  중복할 수 없습니다. 디아블로식 장비창은 권위 배치의 투영입니다.\n- 근거: 장착 제한을 즉시 이해시키면서 공간 퍼즐은 크기와 형태로 유지해야 합니다.\n- 의도한 사용자 경험: 플레이어는 별도 장착 버튼 없이 배치와 장비 요약을 같은 상태로\n  이해합니다.\n- 범위와 제외: 메인 장착판과 장착 부위에 적용하며 특수 아이템·방패 슬롯은 제외합니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016\n- 검증과 증거: 기획 표에서 부위별 장착 수와 48종 콘텐츠 수량 검산.\n\n### PBP-SYNERGY-001 — 가방·시너지 시스템 전면 폐기\n\n- 날짜: 2026-08-18\n- 도메인: 인벤토리 / 시너지 / 아이템 조합\n- 변경 유형: retired\n- 이전 규칙: PBP-INV-004·006, PBP-ART-001과 PBP-EFFECT-001은 가방 활성 칸, 26종\n  시너지, 시너지 필터와 A/B/C 공간 접촉 효과를 제품 규칙으로 사용했습니다.\n- 새 유효 규칙: 가방 활성 칸, 육각 메인 인벤토리, 시너지 판정·아이콘·필터와 공간 접촉\n  효과를 후속 제품에서 사용하지 않습니다. 육각형은 아이템별 룬 보드에만 사용합니다.\n- 근거: 장착 규칙과 룬 성장 퍼즐이 각각 명확한 책임을 가져야 합니다.\n- 의도한 사용자 경험: 메인 장착은 사각형으로 빠르게 읽고 깊은 육각 퍼즐은 선택한 아이템\n  안에서 집중해 풉니다.\n- 범위와 제외: 새 제품 방향을 폐기하며 기존 코드·자산 제거는 후속 구현 커밋에서 수행합니다.\n- 영향 소스: inventory-item-concept@v016, inventory-item-concept@v015\n- 관련 위키: synergy-icon-system@v001, inventory-item-concept@v016\n- 검증과 증거: v016 폐기·제외 목록과 이전 v015 구현 범위 대조.\n\n### PBP-CONTENT-003 — 알파 장비 48종과 점유 크기\n\n- 날짜: 2026-08-18\n- 도메인: 알파 아이템 콘텐츠 / 장착 부위\n- 변경 유형: superseded\n- 이전 규칙: PBP-CONTENT-002의 현행 게임 ON 32개와 과거 90개 카탈로그가 실제 알파\n  배포 집합이었습니다.\n- 새 유효 규칙: 다음 알파 구현 목표는 무기 14종, 방어구·장신구 34종의 48종입니다. 머리·\n  상의·하의는 4/6칸, 귀걸이·반지는 1칸, 목걸이는 2/3칸, 글러브·신발·벨트는 2/4칸을\n  사용합니다.\n- 근거: 부위별 역할과 사각 점유 크기를 함께 선택하게 해 배치 조합을 늘립니다.\n- 의도한 사용자 경험: 작은 장비의 공간 효율과 큰 장비의 역할을 비교해 자신만의 장착판을\n  만듭니다.\n- 범위와 제외: 48종은 기획 목표이며 현재 ItemDB와 Studio ON 32개는 구현 전까지 그대로입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 무기 14 + 부위별 장비 34 = 48 산술 검산.\n\n### PBP-RUNE-001 — Seed 고정 259칸 아이템 룬 보드\n\n- 날짜: 2026-08-18\n- 도메인: 아이템 성장 / 룬 퍼즐 / 합성\n- 변경 유형: added\n- 이전 규칙: 각 아이템에 독립적인 장기 육각 성장판과 룬 조각 합성 계약이 없었습니다.\n- 새 유효 규칙: 각 아이템은 37칸 영역 일곱 개를 0~6등급에 하나씩 열고, 색별 시작점에서\n  젬블로식 한 칸 간격으로 1~5칸 룬을 연결합니다. 전체 능력 위치는 생성 Seed로 고정하며\n  합성 시 기준 아이템의 Seed와 배치를 보존합니다.\n- 근거: 같은 아이템도 경로·룬 모양·색 차단을 고민하는 장기 성장 퍼즐이 필요합니다.\n- 의도한 사용자 경험: 적은 룬으로 원하는 고등급 능력까지 길을 만들고 다른 색의 미래 경로를\n  함께 계획합니다.\n- 범위와 제외: 보드·등급 개방·룬/아이템 합성 계약이며 실제 생성기와 저장 마이그레이션은\n  후속 구현입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016\n- 검증과 증거: 일곱 영역 각각 37칸과 전체 259칸, 영역별 능력 분포 합계 검산.\n\n### PBP-RUNE-002 — 룬 능력 예산·등급 증가·레어 칸\n\n- 날짜: 2026-08-18\n- 도메인: 룬 능력 / 밸런스 / UI 표현\n- 변경 유형: added\n- 이전 규칙: 룬 능력의 등급별 개수·표시 정밀도·레어 판정과 아이템 정체성 보호 규칙이\n  없었습니다.\n- 새 유효 규칙: 전체 능력 등급 개수는 18·27·33·37·41·50·53이며 같은 능력의 실제 등장\n  등급은 UI 표시값까지 엄격히 증가합니다. 구조형 레어는 6등급 영역의 황금 칸에서 한 단위만\n  제공하고 Seed는 위치만 바꿉니다.\n- 근거: 상위 등급의 보상감을 보존하고 좋은 Seed가 총 전투력 자체를 재추첨하지 않게 합니다.\n- 의도한 사용자 경험: 황금 칸을 장기 목표로 삼되 낮은 등급 경로도 매 단계 분명한 성장을\n  제공합니다.\n- 범위와 제외: 일반 POWER/SPEED/CHANCE/TRAIT/GUARD/TIME/RANGE와 레어 표시에 적용합니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 등급·트랙별 칸 수와 259칸 합계, 모든 표시 수치의 단조 증가 수동 검토.\n\n### PBP-COMBAT-001 — 자동 스킬과 비선형 능력 캡\n\n- 날짜: 2026-08-18\n- 도메인: 전투 능력 / 자동 스킬 / 방어 계산\n- 변경 유형: added\n- 이전 규칙: 룬 인플레이션에서 행동 빈도·확률·무적·발사체 수를 안전하게 제한하는 공통\n  계산 순서가 없었습니다.\n- 새 유효 규칙: 자동 스킬은 해당 무기의 기본 공격 실행 횟수로 발동하고 감소는 최대 8회,\n  최소 요구 횟수는 1회입니다. 방패 막기는 최대 100%에서 방어력을 두 배로 적용하며 방어력\n  이후 최종 피해감소는 최대 50%입니다. 이동·공격·대시·회피·회복·보호막 등은 v016의\n  항목별 캡을 사용합니다.\n- 근거: 적 수치 강화로 대응 가능한 선형 인플레이션은 허용하되 무한 행동·완전 무적·확률\n  초과는 막아야 합니다.\n- 의도한 사용자 경험: 큰 숫자 성장은 즐기면서도 공격과 피격의 기본 규칙은 계속 작동합니다.\n- 범위와 제외: 탄약, 탄약 미소모, 소모품 미소모와 스킬 초기화 확률은 사용하지 않습니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: backpack-combat-stat-database, inventory-item-concept@v016\n- 검증과 증거: 계산 순서와 캡·제외 목록의 기획 교차 검토.\n\n### PBP-RUNE-003 — 알파 무기 14종의 보드 정체성\n\n- 날짜: 2026-08-18\n- 도메인: 무기 콘텐츠 / 룬 보드 / 자동 스킬\n- 변경 유형: added\n- 이전 규칙: 알파 무기별 자동 스킬 조건과 259칸 A/B/C/D·레어 배분이 고정되지 않았습니다.\n- 새 유효 규칙: 일곱 무기 형태에 두 종류씩 14개를 두고 각 보드는 A 102, B 71, C 48,\n  D 32, 6등급 로컬 레어 6칸을 가집니다. 목걸이는 발사체, 반지는 자동 스킬 요구 공격,\n  귀걸이는 근거리 사거리의 전역 레어를 제공하고 신발만 추가 대시를 제공합니다.\n- 근거: Seed 위치가 달라도 무기 이름과 공격 방식에 맞는 성장 정체성이 유지돼야 합니다.\n- 의도한 사용자 경험: 같은 룬이라도 연격검·공성 석궁·흡혈 도끼에서 서로 다른 경로와\n  자동 스킬을 강화합니다.\n- 범위와 제외: 14종의 알파 기획 계약이며 최종 아이콘·폴리오미노 좌표·전투 구현은 후속입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 각 무기 레어 합계 6칸과 보드 전체 259칸 산술 검산.\n\n### PBP-ITEMDB-002 — 최종 48종 활성 ItemDB 전환\n\n- 날짜: 2026-08-20\n- 도메인: 아이템 콘텐츠 / 공개 데이터베이스 / 런타임 배포\n- 변경 유형: superseded\n- 대체 대상: PBP-ITEMDB-001, PBP-CONTENT-003의 \"후속 구현 목표\" 상태\n- 이전 규칙: 새 48종은 기획 목표이고 과거 90종과 게임 ON 32종이 구현 전 역사적 현행\n  상태였습니다.\n- 새 유효 규칙: 무기 14종과 방어구·장신구 34종의 최종 48종만 ItemDB 원본, 생성 런타임,\n  공개 미디어의 활성 집합으로 사용합니다. 과거 아이콘과 특수 아이템은 제거하고 ON/OFF\n  운영 경계는 유지합니다.\n- 근거: 기획·로컬 원화·공개 DB·게임 카탈로그의 서로 다른 활성 집합은 이름·점유·자산 ID\n  불일치를 만듭니다.\n- 의도한 사용자 경험: 플레이어와 개발자가 같은 최종 48종의 이미지와 형태만 봅니다.\n- 범위와 제외: 아이템 정의·아이콘·사각 점유·공개 DB에 적용하며 과거 위키 기록은 보존합니다.\n- 영향 소스: inventory-item-art-catalog.md, inventory-item-layouts.json,\n  GeneratedItemLayouts.luau, ItemCatalog.luau, wiki/site/item-db-data.js\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: ItemDB 48종 빌드·체크, 최종 카탈로그와 모바일 공개 DB 캡처.\n\n### PBP-RUNE-004 — 427칸·후보 10개 룬 보드\n\n- 날짜: 2026-08-20\n- 도메인: 아이템 성장 / 룬 보드 / 랜덤화\n- 변경 유형: superseded\n- 대체 대상: PBP-RUNE-001, PBP-RUNE-002\n- 이전 규칙: 모든 아이템은 37칸 영역 일곱 개의 259칸 보드 하나를 Seed로 섞고, 능력 등급\n  총량 18·27·33·37·41·50·53을 사용했습니다.\n- 새 유효 규칙: 각 영역을 반지름 4인 61칸으로 확대해 전체 427칸을 사용합니다. 아이템\n  정의마다 결정론적으로 생성된 후보 10개를 두고 아이템 생성 시 하나를 균등 선택해 VariantId와\n  Seed를 저장합니다. 보드당 능력 등급 총량은 30·45·54·60·67·90·81입니다.\n- 근거: 11개 능력 계열과 레어 노드, 일곱 색 경로를 한 판에서 읽고 우회할 충분한 공간이\n  필요합니다. 후보를 제한하면 다양성과 재현·검증을 함께 확보할 수 있습니다.\n- 의도한 사용자 경험: 같은 아이템에서도 다른 길을 계획하되 총 능력 예산이 운에 따라 바뀌지는\n  않습니다.\n- 범위와 제외: 48종 전체 480개 보드에 적용하며 런타임 재굴림은 허용하지 않습니다.\n- 영향 소스: item-rune-board-database.json, GeneratedRuneBoardDB.luau,\n  rune-board-db-data.js\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 생성기 결과 48×10=480보드, 보드마다 7×61=427칸, revision\n  6e735afdab3d7550.\n\n### PBP-RUNE-005 — 34종 룬 도형과 62종 능력 아이콘\n\n- 날짜: 2026-08-20\n- 도메인: 룬 조각 / 보드 가독성 / 터치 배치\n- 변경 유형: added\n- 이전 규칙: 룬은 1~5칸 젬블로식 조각이라는 개념만 있었고 완전한 형태군, 공용 원화와\n  능력 아이콘의 책임 분리가 고정되지 않았습니다.\n- 새 유효 규칙: 회전·반전을 동일시한 1·1·3·7·22개, 총 34종 자유 폴리헥스를 사용합니다.\n  일곱 색은 빈 중앙 메달의 중립 원화를 틴트하고, 62종 전투 effect 아이콘을 중앙에 별도\n  합성합니다. 드래그는 실제 도형·잡은 칸·회전·반전을 보존하며 마지막 스냅 가이드를 확정값으로\n  사용합니다.\n- 근거: 색·등급·능력 의미를 한 장의 원화에 굽지 않아야 작은 화면에서도 의미를 읽고 데이터\n  변경에도 자산을 재사용할 수 있습니다.\n- 의도한 사용자 경험: 탭하지 않아도 대략적인 능력 종류를 알고, 손가락 아래에서 룬이 튀지\n  않은 채 예상 위치에 놓입니다.\n- 범위와 제외: 룬 카드·보드 노드·드래그 미리보기에 적용하며 상세 수치는 텍스트로 제공합니다.\n- 영향 소스: rune-piece-catalog.json, rune-ability-icon-catalog.json,\n  rune_hex_neutral.png, rune_ability_icons.png, UIPrimitives.luau, Screen.luau\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 형태군 34개, effect 아이콘 62개 생성·누락 검사와 아이콘 시트.\n\n### PBP-UI-001 — 모바일 인벤토리·룬 보드의 단일 작업 흐름\n\n- 날짜: 2026-08-20\n- 도메인: 모바일 UI / 인벤토리 / 룬 보드 / 합성\n- 변경 유형: added\n- 이전 규칙: 사각 장착과 룬 보드의 개별 기획은 있었지만 화면 내 기능 위치, 터치 우선순위,\n  필터·합성·복귀 상태의 완전한 흐름이 없었습니다.\n- 새 유효 규칙: 두 화면은 안전 영역 아래 상단 상태, 중앙 작업판, 하단 보관함을 공유합니다.\n  카드 탭은 룬 보드 진입, 드래그는 배치 또는 합성을 우선합니다. 룬 보관함은 상하 스크롤,\n  한 색 또는 전체를 고르는 7색 필터와 독립 ON/OFF인 1~5칸 필터를 제공하고, 빈 보드 탭은\n  상단 중앙에 능력을 표시합니다.\n- 근거: 모바일에서는 화면 전환마다 탐색 위치와 재료가 사라지면 배치 퍼즐의 비교 비용이\n  지나치게 커집니다.\n- 의도한 사용자 경험: 인벤토리 배치, 아이템 성장, 룬 배치와 합성을 같은 손동작 문법으로\n  왕복합니다.\n- 범위와 제외: 모바일 세로 화면과 터치 입력에 적용하며 PC 밀도·마우스 품질은 현재 완료\n  기준이 아닙니다.\n- 영향 소스: inventory-rune-ui-spec.md, InventoryV2, RuneBoard, InventoryV2Service.luau\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 정적 상태·Luau 테스트, iPhone 17 Pro 400×777 및 iPhone 7 374×666 Studio\n  Play 캡처, 핵심 입력 경로와 콘솔 오류 없음 확인.\n\n### PBP-ART-002 — 최종 아이템 카툰 아트와 방향 규칙\n\n- 날짜: 2026-08-20\n- 도메인: 아이템 아트 / 모바일 전투 / 사각 점유\n- 변경 유형: superseded\n- 대체 대상: PBP-ART-001의 육각·시너지 카드 중심 아트 계약\n- 이전 규칙: 실사풍 또는 고풍스러운 원화와 육각 시너지 카드 문법이 섞였고, 일부 무기는\n  사각 점유와 전투 회전 기준에 맞지 않았습니다.\n- 새 유효 규칙: 48종 전체를 밝고 굵은 카툰풍으로 통일하고 사각 폴리오미노 질량에 맞춥니다.\n  근접 무기는 위쪽, 활·석궁·총은 오른쪽을 기본 방향으로 하며 발사체·공격 궤적은 원화에서\n  제외합니다.\n- 근거: Brotato식 자동 공격에서는 작은 캐릭터 주변을 도는 장비의 방향과 실루엣이 즉시\n  읽혀야 합니다.\n- 의도한 사용자 경험: 보관함·장착판·전투에서 같은 아이템을 형태만으로 알아봅니다.\n- 범위와 제외: 최종 48종 인벤토리 원화에 적용하며 실제 공격 VFX와 투사체는 별도 자산입니다.\n- 영향 소스: Assets/Items/InventoryIcons, inventory-item-art-catalog.md,\n  uploaded_asset_ids.json\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 최종 48종 카탈로그와 공개 ItemDB 캡처.\n\n### PBP-RUNE-006 — 등급·색·시작점 일치와 회전 전용 배치\n\n- 날짜: 2026-08-20\n- 도메인: 룬 성장 / 연결 퍼즐 / 배치 권위\n- 변경 유형: changed\n- 대체 대상: PBP-RUNE-004의 자유 시작 색 등록, PBP-RUNE-005의 런타임 반전 조작\n- 이전 규칙: 룬 색과 합성 등급은 독립 값이었고, 해금된 어느 중앙 시작점에서든 아직 등록하지\n  않은 색을 시작할 수 있으며 플레이 중 회전과 반전을 모두 제공했습니다.\n- 새 유효 규칙: G0~G6 룬 색은 아이템 등급색과 일치합니다. 룬은 같은 번호 영역의 중앙\n  시작점에서만 첫 등록하며 아이템 등급보다 높은 룬은 배치할 수 없습니다. 5칸 합성으로 등급이\n  오르면 다음 등급 색으로 바뀌고 런타임 조작은 60° 회전만 제공합니다. 첫 룬은 중앙 한 칸만\n  덮으면 도형의 어느 셀을 잡았든 유효하며 이후에는 한 칸 간격 연결 전선을 안내합니다.\n- 근거: 색·등급·시작점이 서로 다른 축이면 성장 잠금과 연결 가능 위치를 화면만 보고 예측하기\n  어렵고 저장 데이터가 모순될 수 있습니다.\n- 의도한 사용자 경험: 새 등급을 열 때 같은 색의 새 출발점을 즉시 이해하고, 보드가 보여 주는\n  한 칸의 목표와 실제 도형 가이드만으로 자유로운 첫 배치를 시도합니다.\n- 범위와 제외: 룬 생성·합성·저장 정규화·보드 배치·회전에 적용합니다. 34개 자유 폴리헥스\n  카탈로그의 중복 제거 기준은 유지합니다.\n- 영향 소스: rune-piece-system.md, inventory-rune-ui-spec.md, RuneBoardModel.luau,\n  RuneMergeModel.luau, InventoryV2Service.luau, Screen.luau\n- 관련 위키: inventory-item-concept@v018\n- 검증과 증거: InventoryV2 Luau 테스트의 등급색 불일치 거절, 등급별 시작점, 5칸 합성 색\n  승급, 첫 중앙 목표와 한 칸 간격 전선 검증.\n\n### PBP-UI-002 — 모바일 룬 보드의 문맥 보존 조작과 팝업 필터\n\n- 날짜: 2026-08-20\n- 도메인: 모바일 UI / 룬 보드 / 보관함 탐색\n- 변경 유형: changed\n- 대체 대상: PBP-UI-001의 상시 펼친 단일 색 필터와 보드 중심 재확대\n- 이전 규칙: 색상·칸 수 선택지가 보관함 위에 계속 공간을 차지하고 색상은 한 개 또는 전체만\n  골랐습니다. 확대할 때 보드 중앙으로 시점이 이동했고 회전·반전은 들고 있는 룬에 묶였습니다.\n- 새 유효 규칙: `색상 필터`와 `칸 수 필터` 한 줄 트리거가 각각 다중 선택 말풍선을 열며\n  바깥 탭으로 닫힙니다. 장착 룬 회전은 마지막 선택 룬에만 적용하고 확대·축소는 현재 보던\n  논리 위치를 유지합니다. 상단 능력 설명은 색상명을 빼고 고대비 등급·능력·수치만 표시합니다.\n- 근거: 좁은 세로 화면에서는 선택지를 계속 펼쳐 두는 것보다 실제 룬 카드를 더 많이 보여 주는\n  편이 중요하며, 카메라와 조작 대상이 예기치 않게 바뀌면 퍼즐 경로를 다시 찾아야 합니다.\n- 의도한 사용자 경험: 여러 색·크기를 짧은 팝업에서 조합해 찾고, 보던 위치와 선택 룬을 잃지\n  않은 채 확대·회전하며, 탭 설명을 즉시 읽습니다.\n- 범위와 제외: 모바일 세로 룬 장착 화면과 터치 입력에 적용합니다. PC 화면 밀도와 마우스\n  동등성은 현재 완료 기준이 아닙니다.\n- 영향 소스: inventory-rune-ui-spec.md, Screen.luau, VisualTokens.luau,\n  StorageSort.luau, test_inventory_v2_ui.py\n- 관련 위키: inventory-item-concept@v018\n- 검증과 증거: Galaxy A06 세로 Studio Play에서 필터 팝업·확장된 카드 영역·고대비 능력\n  설명을 확인했고, Studio MCP 진단과 7개 UI 계약 테스트를 통과했습니다.\n\n### PBP-COMBAT-002 — 장착 무기 할로와 서버 권위 자동 공격\n\n- 날짜: 2026-08-20\n- 도메인: 필드 장착 표시 / 자동 전투 / 모바일 연출\n- 변경 유형: superseded\n- 대체 대상: PBP-INV-007의 방향 반응형 필드 표시와 실제 공격 제외 범위\n- 이전 규칙: 최대 여섯 장착 무기는 캐릭터 방향을 따라 회전하는 머리 위 이미지로만 보였고,\n  실제 표적 탐색·공격·피해와 무기별 연출은 후속 범위였습니다.\n- 새 유효 규칙: 적이 없을 때 여섯 무기는 캐릭터 방향과 무관한 이미지 할로로 머리 위에\n  부유합니다. 적이 사거리와 시야 안에 들어오면 서버가 슬롯별 표적·쿨다운·피해를 결정하고\n  클라이언트는 베기·찌르기·투척·활·석궁·총기 연출을 재생합니다. 14종 원화는 ItemDB의\n  정규화된 회전축·타격점·발사구를 공통 계약으로 사용합니다.\n- 근거: 인벤토리의 장착 결과가 실제 전투 행동으로 연결돼야 빌드가 필드에서 살아 움직이며,\n  캐릭터 방향에 무기를 묶지 않아야 대기 할로와 공격 조준의 책임이 충돌하지 않습니다.\n- 의도한 사용자 경험: 적이 없을 때는 자신의 여섯 무기를 안정된 천사 링으로 읽고, 전투가\n  시작되면 각 원화가 직접 날아가거나 발사하는 모습을 통해 무기 종류를 즉시 구분합니다.\n- 범위와 제외: 14종의 기본 자동 공격, 서버 피해와 공통 연출 계열까지 적용합니다. 도탄·산탄·\n  관통·흡혈·반격 같은 고유 능력, 룬 변형, 음향과 적 피격 애니메이션은 후속 범위입니다.\n- 영향 소스: alpha-item-definitions.json, inventory-item-layouts.json,\n  EquippedWeaponBillboard.luau, WeaponAttackVFX.luau, WeaponCombatConfig.luau,\n  WeaponCombatService.luau, DamageResolver.luau\n- 관련 위키: weapon-combat-presentation@v001, inventory-item-concept@v018,\n  character-2d-rendering@v009\n- 검증과 증거: 14개 무기 공격 발생, 적 없음 공격 증가 0, iPhone 17 Pro `401×776`과\n  Galaxy A06 `359×718` Studio Play, 45개 연출 수신·누락 0·객체 수 736 고정·서버 피해와\n  콘솔 오류 없음 확인.\n\n### PBP-COMBAT-003 — 근접 여섯 무기 할로와 소켓 기준 최근접 적 조준\n\n- 날짜: 2026-08-21\n- 도메인: 필드 장착 표시 / 자동 전투 조준 / 모바일 연출\n- 변경 유형: changed\n- 대체 대상: PBP-COMBAT-002의 넓은 할로 위치와 기본 원화 회전 조준 규칙\n- 이전 규칙: 여섯 무기는 캐릭터 머리 위 할로에 부유하고 서버 권위 자동 공격으로 전환했지만,\n  캐릭터와의 최대 거리, 좌우 세 슬롯의 정확한 배치, 모든 무기의 공통 표적과 왼쪽을 보는\n  비대칭 원화 처리 방식은 고정되지 않았습니다.\n- 새 유효 규칙: 여섯 무기를 머리 가까운 좁은 타원의 왼쪽 세 개·오른쪽 세 개에 같은 현 길이\n  간격으로 두고 정중앙 위·아래는 비웁니다. 장착 집합은 사거리 안에서 가장 가까운 생존 적\n  하나를 공통 후보로 선택하고 각 무기는 자기 사거리 안에서 실제 칼끝·타격점·총구·화살·볼트\n  발사 방향을 맞춥니다. 오른쪽 기본 원화가 왼쪽 표적을 보면 상하 회전 대신 수평 반전하며\n  회전축·타격점·발사 소켓도 함께 반전합니다. 적이 없으면 기본 방향의 독립 부유로 돌아갑니다.\n- 근거: 무기가 캐릭터에서 멀리 흩어지면 장착 관계와 천사 링 실루엣이 사라지고, 왼쪽 적을\n  단순 각도 회전으로 겨누면 총과 활이 거꾸로 보이며 총구·발사체 위치도 원화와 어긋납니다.\n- 의도한 사용자 경험: 작은 모바일 화면에서도 여섯 장비를 캐릭터 소유의 한 묶음으로 즉시\n  읽고, 전투에서는 모든 무기가 같은 위협을 각자의 실제 끝점으로 노리는 장면을 봅니다.\n- 범위와 제외: 대기 할로 위치, 최근접 표적 선택, 무기별 사거리, 대기·공격 조준과 좌측 수평\n  반전에 적용합니다. 도탄·산탄·관통 같은 다중 표적 고유 능력과 음향은 후속 범위입니다.\n- 영향 소스: EquippedWeaponVisualLayout.luau, EquippedWeaponBillboard.luau,\n  WeaponAimResolver.luau, WeaponAttackVFX.luau, WeaponTargeting.luau,\n  WeaponCombatService.luau\n- 관련 위키: weapon-combat-presentation@v002\n- 검증과 증거: 사용자 좌표 측정 이미지, iPhone 17 Pro `401×776`의 여섯 무기 근접 할로와\n  좌측 표적 수평 반전 공격 캡처, Galaxy A06 `359×718` 반응형 여백 검사, 관련 테스트와\n  Studio 콘솔 오류 없음 확인.\n\n### PBP-RUNE-007 — 전체 초안과 원자 저장 룬 편집\n\n- 날짜: 2026-08-21\n- 도메인: 룬 연결 규칙 / 저장 권위 / 모바일 편집\n- 변경 유형: changed\n- 대체 대상: PBP-RUNE-006의 즉시 유효 배치 중심 조작\n- 이전 규칙: 매 조작이 그 순간 유효해야 배치 상태로 남을 수 있어 회전 중 잠시 잘못된 형태를\n  확인하거나 여러 룬을 함께 고친 뒤 저장하는 흐름이 없었습니다.\n- 새 유효 규칙: 룬 추가·이동·회전·회수는 전체 초안을 편집합니다. 무효 룬은 빨간색으로 남겨\n  수정할 수 있지만 저장은 비활성화되며, 서버가 전체 배치를 다시 검증한 뒤 유효한 초안만\n  원자적으로 저장합니다. 되돌리기는 마지막 저장 상태를 복원합니다. 한 칸 간격 연결은 배치\n  순서가 아니라 완성된 같은 색 네트워크 전체를 기준으로 판정합니다.\n- 근거: 퍼즐은 중간 단계가 아니라 최종 형태를 설계하는 작업이며, 클라이언트 조작 순서가 같은\n  완성 배치의 합법성을 바꾸면 안 됩니다.\n- 의도한 사용자 경험: 자유롭게 돌리고 옮기며 실패 이유를 본 뒤, 만족한 전체 배치만 안전하게\n  확정합니다.\n- 범위와 제외: 보관/배치 룬의 이동·회전·회수, 저장·되돌리기, 클라이언트와 서버의 전체 배치\n  검증에 적용합니다. 룬 합성 규칙은 바꾸지 않습니다.\n- 영향 소스: inventory-rune-ui-spec.md, RuneBoardModel.luau, RuneDragVisualState.luau,\n  Screen.luau, InventoryV2Service.luau\n- 관련 위키: inventory-item-concept@v019\n- 검증과 증거: 한 칸 간격 5칸 도형 배치, 잘못된 회전의 빨간 상태와 저장 비활성, 악성 저장\n  요청 거절 뒤 서버 상태 보존, 제거·되돌리기 Studio 진단과 InventoryV2 테스트.\n\n### PBP-UI-003 — 현재 형태 가이드와 정돈된 룬 보드 시각 언어\n\n- 날짜: 2026-08-21\n- 도메인: 모바일 룬 보드 / 터치 상호작용 / 정보 시각화\n- 변경 유형: changed\n- 대체 대상: PBP-UI-002의 선택 회전·필터·능력 설명 흐름\n- 이전 규칙: 연결 가이드가 현재 도형의 잡은 셀과 회전을 충분히 반영하지 않았고 잠긴 영역과\n  빈 영역의 차이가 드러나지 않았습니다. 보관 카드에서 방향을 미리 정하거나 배치 룬을\n  보관함으로 회수하기 어려웠고, 두꺼운 육각 테두리와 불투명 룬 장식이 색과 능력을 방해했습니다.\n- 새 유효 규칙: 현재 잡은 셀·회전·전체 배치를 기준으로 모든 후보를 계산합니다. 유효 칸은\n  라임색, 잠긴 칸은 탁한 적갈색, 무효 초안은 빨간색으로 표시하며 기존 룬과 같은 색 능력\n  아이콘은 유지합니다. 보관 카드와 배치 룬은 선택·60° 회전하고 배치 룬은 이동·회수합니다.\n  틈 없는 얇은 벌집과 색이 비치는 투명 크리스털 룬을 사용하고, 전체 필터는 모두 ON 상태에서\n  모두 OFF로 반전할 수 있습니다. 룬 각인 효과 탭은 유효 노드를 효과별로 합산합니다.\n- 근거: 플레이어가 손을 놓기 전에 가능 위치와 불가능 이유, 현재 활성 보상, 도형 방향을 함께\n  읽어야 최적 경로를 계산할 수 있습니다.\n- 의도한 사용자 경험: 보드 위 정보를 한눈에 구분하고, 카드에서 방향을 준비해 원하는 위치로\n  옮긴 뒤 실제 얻는 효과까지 같은 화면 흐름에서 확인합니다.\n- 범위와 제외: 모바일 세로 룬 보드와 보관함, 필터, 효과 요약에 적용합니다. PC 화면 품질과\n  마우스 동등성은 현재 완료 기준이 아닙니다.\n- 영향 소스: rune_hex_neutral.png, rune_piece_crystal.png, Assets.luau,\n  UIPrimitives.luau, VisualTokens.luau, RuneEffectSummary.luau, Screen.luau\n- 관련 위키: inventory-item-concept@v019\n- 검증과 증거: iPhone 17 Pro 세로의 연결·잠금 가이드, 잘못된 초안, 효과 합산 Studio\n  캡처와 iPhone 7 세로 반응형 검사.\n\n### PBP-COMBAT-004 — 인벤토리 중 공격 연출 억제\n\n- 날짜: 2026-08-21\n- 도메인: 모바일 인벤토리 / 전투 표현 계층\n- 변경 유형: added\n- 이전 규칙: 필드 공격 테스트 루프와 공격 연출이 인벤토리보다 높은 레이어에서 계속 재생되어\n  작업 영역을 뚫고 보일 수 있었습니다.\n- 새 유효 규칙: 인벤토리·룬 화면이 열리면 진행 중 클라이언트 공격 연출을 즉시 지우고 새\n  연출을 받지 않으며 오버레이를 비활성화합니다. 화면을 닫으면 표현만 다시 허용합니다.\n- 근거: 전투 준비 작업에서는 퍼즐과 정보가 시각 우선권을 가져야 하며, 화면을 덮는 것만으로는\n  불필요한 연출 루프가 계속 실행됩니다.\n- 의도한 사용자 경험: 인벤토리에 들어오는 순간 필드 공격 연출이 완전히 멈춰 룬 배치에\n  집중하고, 나가면 자연스럽게 전투 표현으로 돌아갑니다.\n- 범위와 제외: 클라이언트 무기 공격 VFX와 오버레이에 적용합니다. 서버의 공격 판정·피해·\n  장착 상태는 변경하지 않습니다.\n- 영향 소스: Screen.luau, WeaponAttackVFX.luau\n- 관련 위키: inventory-item-concept@v019, weapon-combat-presentation@v002\n- 검증과 증거: Studio Play에서 InventoryV2Screen 활성 중 WeaponCombatVFX\n  Enabled=false, Suppressed=true, 활성 공격·투사체·충돌 0개 확인.\n\n### PBP-ACTION-002 — 3단계 Dash와 이동 구간 잔상\n\n- 날짜: 2026-08-23\n- 도메인: 캐릭터 행동 / 모바일 전투 표현\n- 변경 유형: superseded\n- 대체 대상: PBP-ACTION-001의 Dash 시작 프레임 고정 표현\n- 이전 규칙: Dash는 0.30초 동안 시작 순간의 캐릭터 프레임을 그대로 유지했습니다.\n- 새 유효 규칙: 방향 잠금·0.30초·20스터드 이동은 유지하면서 예비 0.05초, 이동 0.20초,\n  회복 0.05초의 통짜 캐릭터 자세를 재생합니다. 잔상은 이동 자세에서 실제 경로 뒤에만\n  생성되고 회복 자세에서 본체로 수렴합니다.\n- 근거: 시작 프레임 고정은 형태 안정성은 지키지만 행동의 출발과 종료를 자세로 설명하지\n  못합니다. 세 개의 명확한 키포즈는 캐릭터 정체성을 지키면서 타이밍을 읽게 합니다.\n- 의도한 사용자 경험: 버튼을 누른 순간 몸을 낮추고 빠르게 이동한 뒤 균형을 되찾는 흐름과\n  잔상 소멸을 보고 Dash 종료를 직관적으로 이해합니다.\n- 범위와 제외: Rookie 남성 통짜 캐릭터 Dash와 런타임 잔상에 적용합니다. 이동 거리·충돌·\n  쿨다운·룬 보너스 한도는 변경하지 않습니다.\n- 영향 소스: production_manifest.json, AssetRegistry.luau, CharacterController.luau,\n  DashAfterimage.luau, FrameSpriteRig.luau, ProductionDashData.luau\n- 관련 위키: character-2d-rendering@v010\n- 검증과 증거: 좌우 3프레임 콘택트 시트, 정확한 20fps 타이밍·잔상 GIF, 캐릭터 자산 검사,\n  30개 후보 테스트와 Galaxy A06 Studio Play Dash 잔상 캡처.\n\n### PBP-ART-003 — 발이 고정된 좌우 호흡 Idle\n\n- 날짜: 2026-08-23\n- 도메인: 캐릭터 애니메이션 / 아트 방향\n- 변경 유형: added\n- 이전 규칙: 정지 상태는 통짜 Run 아틀라스 이전의 호환 프레임 또는 사실상 고정 자세를\n  사용해 호흡의 생동감이 없었습니다.\n- 새 유효 규칙: 마지막 East·West 방향을 유지하는 8프레임 6fps 호흡을 사용합니다. 발과\n  골반 아래는 고정하고 상체의 들숨·정점·날숨·복귀만 움직이며 전체 균일 확대는 금지합니다.\n- 근거: 작은 모바일 캐릭터는 생동감이 필요하지만 바닥 접지와 실루엣 안정성을 잃으면 조작\n  위치가 흔들려 보입니다.\n- 의도한 사용자 경험: 멈춰 있어도 캐릭터가 살아 숨 쉬되 신발이 미끄러지거나 방향이 이유\n  없이 반전되지 않는 안정적인 정지 화면을 봅니다.\n- 범위와 제외: Rookie 남성 통짜 캐릭터 Idle에 적용합니다. Hit·Death·Clear 제작은 별도\n  승인 단위입니다.\n- 영향 소스: production_manifest.json, Config.luau, DirectionResolver.luau,\n  FrameSpriteRig.luau, ProductionIdleData.luau\n- 관련 위키: character-2d-rendering@v010\n- 검증과 증거: 좌우 8프레임 콘택트 시트, 하체 픽셀 고정 검사, 캐릭터 자산 검사와 Galaxy\n  A06 Studio Play Idle 캡처.\n\n### PBP-INV-010 — 장비 전체 초안과 원자 저장\n\n- 날짜: 2026-08-23\n- 도메인: 모바일 인벤토리 / 장비 배치 권위\n- 변경 유형: added\n- 이전 규칙: 아이템을 한 번 옮길 때마다 개별 배치를 즉시 확정했고, 여러 장비를 재정리한\n  최종 결과를 저장 전에 함께 검토하는 계약이 없었습니다.\n- 새 유효 규칙: 추가·이동·회전·보관은 전체 초안을 갱신합니다. 겹친 장비는 가장 가까운\n  빈자리로 밀어 결과를 미리 보여 주고, 잠금·무게·장착 한도 등 무효 상태는 빨간색으로 남기되\n  저장을 비활성화합니다. 서버는 최대 200개 좌표를 전체 재검증해 모두 유효할 때만 원자적으로\n  교체하며 되돌리기는 마지막 저장 상태를 복원합니다.\n- 근거: 여러 모양의 장비를 퍼즐처럼 재배치할 때 중간 한 수를 즉시 저장하면 플레이어가\n  전체 구성을 비교하기 어렵고, 실패 중간 상태가 영구 데이터가 될 위험이 있습니다.\n- 의도한 사용자 경험: 장비를 여러 번 옮겨 최종 구성을 눈으로 검토하고, 잘못된 아이템과\n  이유를 고친 뒤 한 번만 저장합니다.\n- 범위와 제외: 9×9 사각 장착판과 보관함 전환에 적용합니다. ItemDB 이미지 배율·X/Y 보정의\n  실제 렌더링 연결은 이번 범위가 아닙니다.\n- 영향 소스: InventoryModel.luau, ItemPlacementDraft.luau, Screen.luau,\n  InventoryV2Service.luau\n- 관련 위키: inventory-item-concept@v020\n- 검증과 증거: 충돌 장비의 결정적 이동, 잠긴 칸 초안·저장 비활성·되돌리기 Luau 테스트와\n  Galaxy A06 Studio Play 실패 상태 캡처.\n\n### PBP-UI-004 — 선택 우선 장비 조작과 세로 보관함\n\n- 날짜: 2026-08-23\n- 도메인: 모바일 인벤토리 / 터치 UX\n- 변경 유형: changed\n- 이전 규칙: 아이템 탭이 룬 화면 이동과 직접 연결되고 보관 카드·스크롤·배치 드래그의 입력\n  의도가 충분히 분리되지 않았으며 보관함은 가로 흐름을 전제로 했습니다.\n- 새 유효 규칙: 짧은 탭은 선택만 하고 회전 버튼을 보여 줍니다. 움직이지 않은 길게 누르기는\n  룬 페이지·상세 정보 메뉴를 열고, 움직임이 생기면 세로 스크롤 또는 실제 아이템 그림 드래그로\n  전환합니다. 보관함은 안전 여백을 둔 세로 다열 그리드를 사용합니다.\n- 근거: 같은 손가락으로 탐색·선택·배치·상세 보기를 수행하는 모바일에서는 행동 전에 선택\n  상태와 명확한 분기 피드백이 필요합니다.\n- 의도한 사용자 경험: 목록을 안정적으로 훑고, 원하는 장비를 선택해 회전하거나 끌며, 가만히\n  눌렀을 때만 다음 작업을 고릅니다.\n- 범위와 제외: 모바일 세로 인벤토리와 장비 상세 팝업에 적용합니다. PC 레이아웃 품질과\n  마우스 동등성은 현재 완료 기준이 아닙니다.\n- 영향 소스: inventory-rune-ui-spec.md, ItemGesturePolicy.luau, Screen.luau\n- 관련 위키: inventory-item-concept@v020\n- 검증과 증거: InventoryV2 스펙, UI 계약 테스트, Galaxy A06의 기본·메뉴·상세 캡처와\n  iPhone 7 `374×666`의 세로 스크롤·메뉴·상세 경계 검사.\n\n### PBP-DOC-002 — 비개발자 중심 커밋 위키와 다중 상태 증거\n\n- 날짜: 2026-08-23\n- 도메인: 개발 운영 / 기획 기록 / 위키 품질\n- 변경 유형: added\n- 이전 규칙: 커밋 위키는 기획 우선과 시각 증거를 요구했지만, 비개발자 가독성 판정과 여러\n  상태가 필요한 UI의 증거 범위가 충분히 구체적이지 않았습니다.\n- 새 유효 규칙: `한눈에 보는 변경`에서 무엇이·왜·어떻게 달라졌는지 먼저 답하고, 제품 언어로\n  경험·원칙·범위를 설명한 뒤 구현을 근거로 둡니다. 시각 변화는 이해에 필요한 기본·상호작용·\n  선택·성공·실패 상태를 실제 Studio 또는 브라우저에서 캡처합니다.\n- 근거: 기획 철학이 코드 목록에 묻히거나 한 장의 우연한 화면만 남으면 다음 직군과 미래의\n  작업자가 제품 의도를 복원하기 어렵습니다.\n- 의도한 사용자 경험: 디자이너·아티스트·테스터·새 팀원이 소스 코드를 열지 않고도 변경 이유,\n  최종 규칙과 실제 결과를 한 페이지에서 이해합니다.\n- 범위와 제외: 사용자 승인 커밋에서 발행하는 모든 위키 페이지에 적용합니다. 개발 중간\n  기록과 폐기된 접근은 계속 게시하지 않습니다.\n- 영향 소스: AGENTS.md, update-project-wiki/SKILL.md\n- 관련 위키: development-wiki@v013\n- 검증과 증거: 이번 커밋의 character-2d-rendering@v010과 inventory-item-concept@v020에\n  새 서사 순서와 제작·기본·선택·실패·상세·두 화면비 증거를 실제 적용.\n\n### PBP-INV-011 — 배치 순서 기반 장착 요약과 세 가지 빠른 작업\n\n- 날짜: 2026-08-23\n- 도메인: 모바일 인벤토리 / 장착 상태 / 룬 성장 진입\n- 변경 유형: changed\n- 대체 대상: PBP-INV-007의 별도 2×3 장착 무기 표시와 단순 상세·빼기 메뉴\n- 이전 규칙: 장착 무기는 별도 장착 탭의 고정 여섯 칸에서 확인하고 상세 정보 또는 배치 해제를\n  선택했으며, 무기 표시 순서와 다른 부위 장비의 동시 요약 계약이 완전하지 않았습니다.\n- 새 유효 규칙: 유효 배치 무기는 장착판에 들어온 순서를 저장해 왼쪽부터 최대 여섯 개를\n  표시합니다. 오른쪽에는 머리·귀걸이·목걸이·상의·장갑·하의·벨트·반지 둘·신발을\n  함께 표시합니다. 채워진 모든 요약 칸의 메뉴는 이름·등급·공격력·공격 속도 아래 상세 정보,\n  룬 보드 편집, 보관함으로 이동을 이 순서로 제공합니다.\n- 근거: 장착 결과와 다음 성장 작업이 배치 화면에서 분리되면 플레이어가 같은 아이템을 다시\n  찾고 화면을 왕복해야 하며, 단순 식별자 정렬은 실제 장착 순서를 설명하지 못합니다.\n- 의도한 사용자 경험: 장비를 놓은 순서와 현재 부위를 즉시 확인하고, 원하는 아이템에서 바로\n  정보를 읽거나 룬을 편집하거나 보관함으로 되돌립니다.\n- 범위와 제외: 장비 배치 초안의 요약 표시·빠른 작업·전투 무기 복제 순서에 적용합니다.\n  필드 자동 공격 규칙과 아직 등록되지 않은 기본 효과 수치는 변경하지 않습니다.\n- 영향 소스: InventoryModel.luau, ItemPlacementDraft.luau, StateSerializer.luau,\n  Screen.luau, InventoryV2Service.luau\n- 관련 위키: inventory-item-concept@v021\n- 검증과 증거: 배치 순서 보존 Luau 테스트, 세 버튼 순서 UI 계약, Galaxy A06와 iPhone 17\n  Pro의 메뉴·룬 보드 선택 이동 Studio MCP 확인.\n\n### PBP-UI-005 — 배치판 중심 모바일 장비 작업대와 시간 기반 터치 중재\n\n- 날짜: 2026-08-23\n- 도메인: 모바일 인벤토리 / 반응형 레이아웃 / 터치 입력\n- 변경 유형: added\n- 이전 규칙: PBP-UI-004는 선택·길게 누르기·세로 보관함을 정했지만 배치판·도구·장착\n  요약의 한 화면 구성, 확대판 이동과 배치 아이템 드래그의 시간 경계, 요약 영역의 비스크롤\n  규칙을 완전히 정의하지 않았습니다.\n- 새 유효 규칙: 가운데 배치판, 아래 무기 여섯 칸, 오른쪽 위 확대·축소·원상태·회전, 오른쪽\n  아래 부위 장비 열 칸을 한 작업대로 구성합니다. 모든 요약 칸은 화면에 맞춰 정사각형으로\n  줄어들고 스크롤하지 않습니다. 저장·되돌리기는 다른 영역을 축소하지 않는 오버레이입니다.\n  확대판에서 0.3초 이내 움직임은 판 이동, 0.3초 이상 1초 미만 움직임은 아이템 이동이며,\n  1초 정지 뒤 1초 게이지가 차면 메뉴가 열립니다. 보관 아이템을 집으면 목록 스크롤을 잠그고\n  아이템 드래그 그림은 이전 68px의 절반인 34px 위에 표시합니다.\n- 근거: 같은 아이템 위에서 판 탐색·장비 이동·메뉴 열기가 경쟁하고, 화면 크기나 초안 상태가\n  바뀔 때 작업 영역이 재배치되면 모바일 공간 퍼즐의 위치 기억이 깨집니다.\n- 의도한 사용자 경험: 작은 휴대폰에서도 모든 장착 상태와 필수 도구를 스크롤 없이 보고,\n  손가락의 속도와 멈춤만으로 의도한 판 이동·장비 이동·메뉴를 안정적으로 실행합니다.\n- 범위와 제외: 모바일 세로 장비 배치 화면과 터치 입력에 적용합니다. PC 레이아웃 품질과\n  마우스 동등성은 현재 완료 기준이 아닙니다.\n- 영향 소스: ItemGesturePolicy.luau, Screen.luau, VisualTokens.luau,\n  test_inventory_v2_ui.py\n- 관련 위키: inventory-item-concept@v021\n- 검증과 증거: 정사각 비스크롤 UI 계약, 0.3초·1초 경계 Luau 테스트, Galaxy A06\n  359×718과 iPhone 17 Pro 401×776의 기본·메뉴·34px 드래그 Studio MCP 캡처와\n  콘솔 오류 없음 확인.\n",
          "source_path": "wiki/content/pages/product-planning-change-log/v012.md",
          "timeline_order": 44
        },
        {
          "id": "product-planning-change-log",
          "title": "제품 기획 변경 원장",
          "summary": "누적 원장을 보존하면서 장비 배치를 선택·검토·원자 저장 흐름으로 확정하고, 세로 보관함·상세 메뉴·호흡 Idle·3단계 Dash·비개발자 중심 위키 기록을 새 유효 규칙으로 추가했습니다.",
          "status": "active",
          "category": "planning",
          "tags": [
            "planning",
            "decision-log",
            "product",
            "inventory",
            "equipment",
            "rune-board",
            "weapon",
            "combat",
            "mobile",
            "documentation",
            "character",
            "animation",
            "touch"
          ],
          "created_at": "2026-08-15",
          "updated_at": "2026-08-23",
          "authors": [
            "Codex"
          ],
          "version": 11,
          "change_type": "updated",
          "change_summary": "v010까지의 누적 결정을 보존하고, 장비 선택·길게 누르기·세로 보관함·전체 배치 초안과 원자 저장, 발 고정 호흡 Idle·3단계 Dash와 수렴 잔상, 비개발자 가독성과 다중 상태 시각 증거 규칙을 추가했습니다.",
          "supersedes": "product-planning-change-log@v010",
          "sources": [
            "wiki/content/pages/product-planning-change-log/v010.md",
            "wiki/content/pages/inventory-item-concept/v020.md",
            "wiki/content/pages/character-2d-rendering/v010.md",
            "wiki/content/pages/development-wiki/v013.md",
            "AGENTS.md",
            ".agents/skills/update-project-wiki/SKILL.md",
            "docs/art/sprite-animation-production.md",
            "docs/gameplay/inventory-rune-ui-spec.md",
            "src/ReplicatedStorage/Character2D/AssetRegistry.luau",
            "src/ReplicatedStorage/Character2D/CharacterController.luau",
            "src/ReplicatedStorage/Character2D/DashAfterimage.luau",
            "src/ReplicatedStorage/Character2D/FrameSpriteRig.luau",
            "src/ReplicatedStorage/InventoryV2/InventoryModel.luau",
            "src/ReplicatedStorage/InventoryV2/ItemGesturePolicy.luau",
            "src/ReplicatedStorage/InventoryV2/ItemPlacementDraft.luau",
            "src/ReplicatedStorage/InventoryV2/Screen.luau",
            "src/ServerScriptService/InventoryV2Service.luau",
            "tests/InventoryV2.spec.luau",
            "tests/test_inventory_v2_ui.py",
            "tests/test_three_frame_dash_candidate.py",
            "tests/test_sprite_animation_pipeline.py",
            "tests/test_two_direction_idle_candidate.py"
          ],
          "related": [
            "weapon-combat-presentation",
            "inventory-item-concept",
            "synergy-icon-system",
            "backpack-combat-stat-database",
            "development-wiki",
            "character-2d-rendering",
            "project-overview"
          ],
          "validation": [
            "./tools/test_inventory_v2.sh: InventoryV2.spec ok",
            "./tools/test_character_assets.sh: Character gameplay atlas tests passed",
            "python3 -m unittest tests.test_inventory_v2_ui tests.test_native_backpack_ui: 23 tests passed",
            "python3 -m unittest tests.test_two_direction_run_build tests.test_two_direction_dash_candidate tests.test_three_frame_dash_candidate tests.test_two_direction_idle_candidate: 30 tests passed",
            "python3 -m unittest discover -s tests: 130 tests passed",
            "Roblox Studio MCP Play · Galaxy A06 portrait · 671×828: 인벤토리 4상태와 Idle·Dash 잔상 확인",
            "Roblox Studio MCP Play · iPhone 7 portrait · 374×666: 선택·회전·세로 스크롤·메뉴·상세·무효 초안과 콘솔 오류 없음 확인",
            "python3 tools/wiki.py build && python3 tools/wiki.py check: 10 pages, 67 revisions, 93 media files 통과",
            "python3 -m unittest tests/test_wiki.py tests.test_repository_policy: 19 tests passed",
            "git diff --check: 통과"
          ],
          "body": "# 제품 기획 변경 원장\n\n## 목적과 기록 원칙\n\n이 페이지는 구현 파일 목록이 아니라 ProjectBackpack의 제품 방향이 왜 바뀌었고 지금 어떤\n규칙이 유효한지를 누적 보존합니다. 플레이어 또는 운영자가 경험하는 제품·게임플레이·UX·\n콘텐츠·아트·플랫폼 규칙이 추가, 변경, 대체 또는 폐기될 때 기록합니다. 동작을 바꾸지 않는\n내부 리팩터링은 원장 대상이 아닙니다.\n\n각 결정은 안정적인 ID를 가집니다. 이후 규칙이 달라지면 이미 커밋된 항목을 고치거나 지우지\n않고 새 버전에 후속 항목을 추가해 이전 ID와 관계를 명시합니다. 최신 버전은 과거 원장과\n현재 유효 규칙을 모두 포함하며, 실제 제품 변경·주제별 위키·검증 증거와 같은 커밋에서\n발행합니다.\n\n## 현재 유효 규칙\n\n### PBP-INV-001 — 인벤토리에는 명확한 이탈과 호환 토글이 있다\n\n모바일 인벤토리는 우측 최상단 닫기 버튼으로 메인 화면에 복귀합니다. PC 호환 경로의 Tab\n토글은 진단 호환으로 남지만 현재 제품 UI 완료 기준은 모바일입니다.\n\n### PBP-ITEMDB-002 — 최종 48종이 ItemDB와 런타임의 단일 활성 집합이다\n\n과거 90종과 특수 아이템 미디어는 활성 원본·공개 DB·생성 런타임에서 제거합니다. 무기 14종과\n방어구·장신구 34종의 이름, 사각 점유, 카툰 아이콘과 Roblox 자산 참조를 ItemDB 원본에서\n생성하며 ON/OFF 경계는 향후 콘텐츠 운영을 위해 유지합니다.\n\n### PBP-CONTENT-001 — 폐기 아이템은 모든 제품 표면에서 함께 제거한다\n\n아이템을 실제로 폐기할 때는 카탈로그·레이아웃·이미지·런타임·공개 DB에서 함께 제거하고\n매니페스트 이력만 보존합니다.\n\n### PBP-DOC-001 — 기획 변경은 커밋 시 누적 원장으로 발행한다\n\n물질적인 제품 기획 변경은 사용자 승인 커밋에서 안정적인 ID와 함께 누적 발행합니다.\n\n### PBP-ACTION-002 — Dash는 3단계 자세와 이동 구간 잔상을 사용한다\n\n기본 Dash의 방향 잠금·0.30초·20스터드 규칙은 유지하되, 시작 프레임 고정은 예비 0.05초·\n이동 0.20초·회복 0.05초의 통짜 캐릭터 자세로 대체합니다. 잔상은 이동 구간에서만 실제\n경로 뒤에 생기고 회복 구간에서 본체로 수렴합니다. 룬의 추가 거리와 무적시간은 기존 한도\n안에서 별도 적용합니다.\n\n### PBP-ART-003 — 정지 캐릭터는 발이 고정된 좌우 호흡을 사용한다\n\nIdle은 마지막 좌우 방향을 유지하는 8프레임 6fps 통짜 캐릭터 애니메이션입니다. 발과 골반\n아래는 고정하고 상체의 들숨·날숨만 움직이며, 캐릭터 전체를 균일 확대·축소하지 않습니다.\n\n### PBP-INV-010 — 장비 배치는 전체 초안으로 검토하고 원자 저장한다\n\n아이템 추가·이동·회전·보관은 마지막 저장 상태와 분리된 전체 초안을 갱신합니다. 겹친 장비는\n가장 가까운 빈자리로 밀어 전체 결과를 미리 보여 주며, 잠금·한도·무게 등 잘못된 상태는 빨간\n초안으로 남기되 저장을 끕니다. 서버는 전체 좌표를 다시 검증해 모두 유효할 때만 한 번에\n교체하고 되돌리기는 마지막 저장 상태를 복원합니다.\n\n### PBP-UI-004 — 모바일 장비 조작은 선택·길게 누르기·세로 보관함을 사용한다\n\n짧은 탭은 선택만 하고 선택된 아이템에 회전 버튼을 노출합니다. 움직이지 않은 길게 누르기는\n룬 페이지와 상세 정보 메뉴를 열며, 움직임이 생기면 스크롤 또는 드래그로 전환합니다. 보관함은\n세로 다열 그리드이고 실제 아이템 그림과 점유 가이드는 같은 스냅 위치를 사용합니다.\n\n### PBP-DOC-002 — 커밋 위키는 비개발자 기획 서사와 충분한 화면 증거를 요구한다\n\n위키는 무엇이·왜·어떻게 달라졌는지와 사용자 경험을 먼저 설명하고 구현 세부는 뒤의 증거로\n둡니다. 눈에 보이는 변화는 기능을 이해하는 데 필요한 기본·선택·확장·성공·실패 상태를 실제\nStudio 또는 브라우저에서 캡처하며, 이미 커밋된 버전과 증거는 덮어쓰지 않습니다.\n\n### PBP-DEV-001 — Studio 무게 제한 테스트는 세션 전용이다\n\n기존 Studio 진단값은 영구 저장을 오염시키지 않습니다. 새 인벤토리 구현에서 무게 시스템을\n유지할지는 별도 결정하지만 진단 데이터 비영구 원칙은 유지합니다.\n\n### PBP-INV-009 — 메인 인벤토리는 사각 장착판과 부위별 제한을 사용한다\n\n유효한 사각 배치가 곧 장착입니다. 무기는 여섯 개, 반지는 두 개이며 같은 정의의 무기·반지는\n중복할 수 없습니다. 머리·귀걸이·목걸이·상의·하의·글러브·신발·벨트는 한 개씩 장착하고\n디아블로식 장비 화면은 같은 상태를 투영합니다.\n\n### PBP-SYNERGY-001 — 가방·시너지 제품 방향은 폐기한다\n\n가방 활성 칸, 육각 메인 인벤토리, 26종 시너지, 시너지 필터와 A/B/C 공간 접촉 효과는 새\n제품 방향에서 사용하지 않습니다. 육각형은 아이템별 룬 보드에만 사용합니다.\n\n### PBP-CONTENT-003 — 알파 장비 활성 집합은 48종이다\n\n무기 14종과 방어구·장신구 34종을 사용합니다. 크기별 두 역할을 두고 반지는 동일 아이템\n중복 금지로 인한 강제 조합을 피하기 위해 네 종류를 둡니다. 특수 아이템과 방패는 현재 48종에\n포함하지 않습니다.\n\n### PBP-RUNE-004 — 아이템마다 후보 10개 중 하나인 427칸 보드를 가진다\n\n각 아이템 정의는 61칸 영역 일곱 개, 총 427칸인 후보 보드 10개를 가집니다. 생성 시 하나를\n균등 선택해 VariantId와 Seed를 영구 저장합니다. 0~6 주등급은 영역을 하나씩 열고, 일곱\n중앙 시작점의 색 등록과 한 칸 간격 연결을 사용합니다. 능력 등급 총량은\n30·45·54·60·67·90·81칸이며 레어는 황금 테두리로 구분합니다.\n\n### PBP-COMBAT-001 — 자동 스킬·방어·확률에는 명시적 캡이 있다\n\n무기 스킬은 해당 무기의 기본 공격 횟수로 자동 발동하고 발사체·도탄·관통·다른 스킬은\n카운터를 늘리지 않습니다. 방패 막기는 최대 100%에서 방어력을 두 배로 적용하고, 방어력\n계산 뒤 최종 피해감소는 최대 50%입니다. 행동 빈도·확률·무적·발사체 수에는 항목별 캡을\n적용하되 선형 공격력·체력 성장은 허용합니다.\n\n### PBP-COMBAT-003 — 여섯 무기는 근접 할로에서 하나의 최근접 적을 정확히 겨눈다\n\n최대 여섯 장착 무기는 머리 가까운 좁은 타원의 왼쪽 세 개·오른쪽 세 개에 같은 간격으로\n배치하며 정중앙 위·아래는 비웁니다. 적이 없을 때는 원화 방향을 유지한 채 각자 부유합니다.\n적이 있으면 장착 집합이 사거리 안의 가장 가까운 생존 적 하나를 공통 후보로 고르고, 각 무기는\n자기 사거리 안에서 실제 칼끝·타격점·총구·화살·볼트 발사 방향을 그 적에게 맞춥니다. 오른쪽을\n기본 방향으로 그린 원거리 무기가 왼쪽을 볼 때는 거꾸로 돌리지 않고 수평 반전하며 회전축과\n공격 소켓도 함께 반전합니다. 서버 권위 표적·피해와 여섯 공격 계열은 유지합니다.\n\n### PBP-RUNE-003 — 알파 무기 14종은 고정된 능력 정체성을 가진다\n\n검·창·곡궁·석궁·총·메이스·도끼 각 두 종류는 A1~D2와 E1~E3의 실제 구현 훅을 가집니다.\n목걸이·반지·귀걸이는 호환 무기 전체에 적용되는 전역 레어를, 신발은 추가 대시 레어를\n제공합니다.\n\n### PBP-RUNE-005 — 룬은 34종 도형과 effect 기반 아이콘을 사용한다\n\n1~5칸 룬은 회전·반전을 동일시한 34종 자유 폴리헥스를 사용합니다. 일곱 색은 같은 중립 원화를\n틴트하고, 능력 의미는 실제 전투 effect_id와 1:1인 62종 중앙 아이콘으로 별도 합성합니다.\n드래그는 잡은 칸과 실제 형태를 유지하고 마지막 스냅 가이드를 서버 요청값으로 사용합니다.\n\n### PBP-RUNE-006 — 룬 등급·색·시작점은 일대일이며 배치는 회전만 사용한다\n\nG0~G6 룬은 먹빛·상아·초록·하늘·보라·황금·장미와 일대일입니다. 각 룬은 같은 번호 영역의\n중앙 시작점에서만 처음 등록하고 아이템 등급보다 높은 룬은 등록할 수 없습니다. 런타임 배치는\n60° 회전만 제공하고 별도 반전은 제공하지 않습니다. 첫 배치 전에는 중앙 한 칸, 이후에는 같은\n색 네트워크에서 한 칸 떨어진 연결 전선만 밝게 안내합니다.\n\n### PBP-UI-001 — 인벤토리와 룬 보드는 모바일 고정 작업 흐름을 공유한다\n\n상단 상태, 중앙 작업판, 하단 보관함을 안전 영역 안에 고정합니다. 아이템·룬 합성은 두 재료와\n결과 미리보기 문법을 공유하고 룬 보관함은 상하 스크롤을 사용합니다. 빈 룬 칸의 탭은 상단\n중앙에 능력 정보를 표시합니다.\n\n### PBP-UI-002 — 룬 보드는 문맥을 보존하고 필터는 카드 공간을 침범하지 않는다\n\n장착 룬 회전은 마지막 선택 룬에만 적용하고 확대·축소는 보고 있던 보드 위치를 보존합니다.\n룬 보관함은 `색상 필터`와 `칸 수 필터` 두 버튼만 한 줄에 두며, 보드 위 말풍선에서 G0~G6와\n1~5칸을 각각 다중 선택합니다. 능력 설명은 색상명을 반복하지 않고 옅은 황금색 글자·짙은\n보라색 외곽선으로 등급·능력명·수치를 표시합니다.\n\n### PBP-RUNE-007 — 룬 배치는 전체 초안으로 편집하고 원자적으로 저장한다\n\n룬 추가·이동·회전·회수는 마지막 저장 상태와 분리된 전체 초안을 갱신합니다. 규칙에 어긋난\n룬도 빨간 상태로 계속 편집할 수 있지만 저장은 비활성화됩니다. 서버는 전체 배치를 다시\n검증해 유효할 때만 한 번에 교체하며, 되돌리기는 마지막 저장 상태를 복원합니다. 같은 색\n네트워크는 변을 맞대지 않고 정확히 한 칸 간격을 두며 배치 순서와 무관하게 판정합니다.\n\n### PBP-UI-003 — 룬 보드는 현재 조작 문맥과 잠금 이유를 한 화면에 보여 준다\n\n보관 카드와 배치 룬을 모두 선택·60° 회전할 수 있고, 배치 룬은 이동하거나 보관함으로 회수할\n수 있습니다. 가이드는 현재 잡은 셀·회전·전체 배치를 기준으로 계산하며 유효 칸은 라임색,\n아이템 등급으로 닫힌 칸은 탁한 적갈색, 무효 초안은 빨간색으로 표시합니다. 기존 배치와 같은\n색 능력 아이콘은 드래그 중에도 남깁니다. 벌집은 틈 없는 얇은 선, 룬은 색이 비치는 투명\n크리스털 프레임을 사용하고, 전체 필터는 일부 OFF면 모두 ON·모두 ON이면 모두 OFF로\n동작합니다. 룬 각인 효과 탭은 유효 노드를 효과별로 합산합니다.\n\n### PBP-COMBAT-004 — 인벤토리 작업 중 필드 공격 연출을 일시 정지한다\n\n인벤토리나 룬 작업 화면이 열리면 클라이언트 공격 연출을 즉시 지우고 새 연출을 받지 않으며\n전투 VFX 오버레이를 끕니다. 화면을 닫으면 표현만 다시 허용합니다. 서버 표적·공격·피해와\n장착 상태는 바꾸지 않습니다.\n\n### PBP-ART-002 — 아이템은 사각 점유와 모바일 전투에 맞는 카툰 실루엣을 사용한다\n\n최종 48종 원화는 굵고 밝은 카툰풍으로 통일합니다. 근접 무기는 위쪽, 활·석궁·총은 오른쪽을\n기본 방향으로 두고 발사체와 궤적을 원화에 굽지 않습니다. 그림의 질량과 돌출부가 사각 점유\n형태에 자연스럽게 맞아야 합니다.\n\n## 변경 원장\n\n### PBP-INV-001 — 인벤토리 이탈과 Tab 토글\n\n- 날짜: 2026-08-15\n- 도메인: 인벤토리 접근성 / 플랫폼 입력\n- 변경 유형: changed\n- 이전 규칙: 화면 내부 닫기 버튼과 명확한 PC 토글 경로가 없었습니다.\n- 새 유효 규칙: 모바일 우측 최상단 닫기 버튼을 두고 PC 호환 시 Tab을 인벤토리 전용\n  토글로 사용하며 기본 플레이어 목록을 해제합니다.\n- 근거: 작업 화면에는 안전한 이탈 경로가 필요하며 한 입력이 두 UI를 열면 안 됩니다.\n- 의도한 사용자 경험: 닫는 법을 탐색하지 않고 즉시 메인 화면으로 돌아갑니다.\n- 범위와 제외: 모바일 터치와 PC 입력 호환에 적용하며 PC 레이아웃 품질은 제외합니다.\n- 영향 소스: Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: Luau 테스트, 소스 검사와 최종 Studio 모바일 화면.\n\n### PBP-INV-002 — 배치 보드 범위와 도구 배치\n\n- 날짜: 2026-08-15\n- 도메인: 모바일 배치 보드 / 공간 가독성\n- 변경 유형: changed\n- 이전 규칙: 빈 배치 영역과 우측 도구의 공간 관계가 충분히 드러나지 않았습니다.\n- 새 유효 규칙: 전체 배치 영역에 옅은 육각 격자를 그리고 우측 상단 모드 탭과 우측 하단\n  확대 도구를 위한 반응형 인셋을 둡니다.\n- 근거: 빈 공간도 게임 공간이며 조작 계층과 동시에 보여야 합니다.\n- 의도한 사용자 경험: 배치 가능 범위와 도구 위치를 즉시 이해합니다.\n- 범위와 제외: 모바일 보드와 모드·확대 도구에 적용합니다.\n- 영향 소스: VisualTokens.luau, ScreenRenderer.luau, ScreenState.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: iPhone 17 Pro와 Galaxy A06 Studio Play의 잘림·겹침 검사.\n\n### PBP-INV-003 — 손가락 위 드래그와 단일 목적지 안내\n\n- 날짜: 2026-08-15\n- 도메인: 인벤토리 드래그 / 배치 피드백\n- 변경 유형: changed\n- 이전 규칙: 아이템이 포인터 아래에 남고 여러 강조가 목표 칸과 경쟁했습니다.\n- 새 유효 규칙: 회전된 그림 전체를 포인터 위로 올리고 그림과 목적지 외곽선만 표시합니다.\n- 근거: 드래그 중에는 대상과 내려놓을 위치가 가장 강하게 읽혀야 합니다.\n- 의도한 사용자 경험: 손가락에 가리지 않은 그림으로 정확히 조준합니다.\n- 범위와 제외: 아이템 드래그에 적용하며 그림이 없는 가방은 점유 형태를 사용합니다.\n- 영향 소스: DragPlacementState.luau, Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 포인터 리프트·잡은 칸·outline-only Luau 테스트.\n\n### PBP-INV-004 — 카드·선택 정보와 0.1Kg 정밀도\n\n- 날짜: 2026-08-15\n- 도메인: 아이템 정보 구조 / 무게 규칙\n- 변경 유형: changed\n- 이전 규칙: 무게 표현과 시너지 정렬이 좁은 카드에서 일관되지 않았습니다.\n- 새 유효 규칙: x.xKg 표시와 0.1Kg 판정을 통일하고 시너지를 카드 가운데 정렬합니다.\n- 근거: 화면 표시와 게임 판정은 같은 값을 사용해야 합니다.\n- 의도한 사용자 경험: 좁은 카드에서 핵심 정보와 초과 이유를 빠르게 이해합니다.\n- 범위와 제외: 저장 카드, 선택 정보, 합계와 허용 판정에 적용합니다.\n- 영향 소스: WeightEvaluator.luau, ItemInstanceHydrator.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013, backpack-combat-stat-database\n- 검증과 증거: 무게 양자화·형식·허용 판정 테스트와 카드 소스 검사.\n\n### PBP-INV-005 — 필터와 배치 모드의 직접 연결\n\n- 날짜: 2026-08-15\n- 도메인: 보관함 탐색 / 모드 전환\n- 변경 유형: changed\n- 이전 규칙: 종류 필터와 배치 탭을 따로 바꿔야 했습니다.\n- 새 유효 규칙: 가방 필터는 가방 배치로, 다른 필터는 아이템 배치와 해당 종류로 이동합니다.\n- 근거: 보관함 종류 선택은 다음 배치 대상의 선택입니다.\n- 의도한 사용자 경험: 한 번의 터치로 원하는 목록과 배치 모드에 도달합니다.\n- 범위와 제외: 일반 종류 필터 다섯 개와 배치 모드 연동에 적용합니다.\n- 영향 소스: ScreenState.luau, Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 모드별 필터 상태 Luau 테스트.\n\n### PBP-INV-006 — 시너지·칸 수 고급 필터\n\n- 날짜: 2026-08-15\n- 도메인: 보관함 고급 탐색 / 모바일 UI\n- 변경 유형: added\n- 이전 규칙: 종류 외의 시너지와 점유 칸 범위를 직접 좁힐 수 없었습니다.\n- 새 유효 규칙: 별도 고급 필터에서 26종 시너지 토글과 1~9 칸 범위를 설정합니다.\n- 근거: 조합과 공간 효율은 종류와 독립적인 탐색 기준입니다.\n- 의도한 사용자 경험: 조합과 크기에 맞는 아이템을 빠르게 좁힙니다.\n- 범위와 제외: 가방과 아이템 칸 범위, 아이템의 하나 이상 시너지 일치에 적용합니다.\n- 영향 소스: ScreenState.luau, Screen.luau, ScreenRenderer.luau, VisualTokens.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 사용자 기획 이미지, Studio 캡처와 두 모바일 화면 테스트.\n\n### PBP-ART-001 — 시너지 아이콘 소형 가독성 규칙\n\n- 날짜: 2026-08-15\n- 도메인: 모바일 UI 아트 방향 / 인벤토리 시너지\n- 변경 유형: changed\n- 이전 규칙: 큰 합본을 축소해 실제 카드 크기에서 세부가 합쳐졌습니다.\n- 새 유효 규칙: 약 25px를 승인 기준으로 대표 심볼·투명 배경·최대 3색·216px 경계를\n  사용합니다.\n- 근거: 작은 화면에서 시너지를 구분하는 속도가 우선입니다.\n- 의도한 사용자 경험: 짧게 훑어도 형태와 대표색으로 시너지를 구분합니다.\n- 범위와 제외: 활성 26종 이미지와 재생성 계약에 적용하며 의미와 효과는 바꾸지 않습니다.\n- 영향 소스: Assets/UI/Backpack/SynergyIcons, SynergyCatalog.luau\n- 관련 위키: synergy-icon-system@v001, inventory-item-concept\n- 검증과 증거: 두 Studio 모바일 화면, 26개 자산과 전용 이미지 테스트.\n\n### PBP-CONTENT-001 — FootprintExpansion21 활성 집합 정리\n\n- 날짜: 2026-08-15\n- 도메인: 아이템 콘텐츠 / 공개 데이터\n- 변경 유형: retired\n- 이전 규칙: 확장 시안 21개가 모두 활성 후보로 남았습니다.\n- 새 유효 규칙: 11개만 활성화하고 10개는 제품 데이터와 미디어에서 제거합니다.\n- 근거: 폐기 시안이 남으면 현재 지원 범위를 잘못 전달합니다.\n- 의도한 사용자 경험: 실제 지원하는 아이템만 게임과 공개 DB에서 확인합니다.\n- 범위와 제외: 해당 10개 아이콘·레이아웃·참조를 제거하고 매니페스트 이력은 보존합니다.\n- 영향 소스: FootprintExpansion21, ItemDB 카탈로그·레이아웃·생성 산출물\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: ItemDB 90개 build/check와 생성 산출물 검사.\n\n### PBP-DOC-001 — 누적 제품 기획 변경 원장\n\n- 날짜: 2026-08-15\n- 도메인: 개발 문서 운영\n- 변경 유형: added\n- 이전 규칙: 기획 규칙의 변경을 한곳에서 계속 추적하는 누적 원장이 없었습니다.\n- 새 유효 규칙: 사용자 승인 커밋마다 물질적 변경을 안정적인 ID와 함께 누적합니다.\n- 근거: 구현이 개선돼도 최종 규칙과 변경 이유가 사라지지 않아야 합니다.\n- 의도한 사용자 경험: 위키 한 페이지에서 현재 규칙과 과거 이유를 연속 확인합니다.\n- 범위와 제외: 제품·게임플레이·UX·콘텐츠·아트·플랫폼·운영에 적용하며 순수 리팩터링은\n  제외합니다.\n- 영향 소스: AGENTS.md, wiki/content/pages/product-planning-change-log\n- 관련 위키: inventory-item-concept, development-wiki\n- 검증과 증거: 위키 빌드·체크·정책 테스트와 동일 커밋 발행.\n\n### PBP-ITEMDB-001 — ItemDB ON/OFF 베이크 경계\n\n- 날짜: 2026-08-16\n- 도메인: 아이템 운영 / 게임 배포\n- 변경 유형: added\n- 이전 규칙: ItemDB에 존재하는 모든 아이템이 항상 생성 런타임과 게임 베이크에 포함됐습니다.\n- 새 유효 규칙: 각 아이템은 ON/OFF 상태를 가지며 OFF는 웹 기획 기록에는 남고 다음 베이크와\n  생성 런타임에서는 제외됩니다. ON 복귀 시 기존 형태·이미지·시너지·효과 설정을 유지합니다.\n- 근거: 일시 제외와 영구 폐기를 구분해야 콘텐츠 실험과 롤백이 데이터 삭제 없이 가능합니다.\n- 의도한 사용자 경험: 운영자는 한 번의 버튼으로 게임 노출을 제어하고 플레이어는 승인된\n  활성 아이템만 만납니다.\n- 범위와 제외: ItemDB 웹 편집, 생성 레이아웃, 게임 카탈로그와 Studio 베이크에 적용합니다.\n  OFF 항목의 원본·웹 검색·이미지는 삭제하지 않습니다.\n- 영향 소스: inventory-item-layouts.json, tools/item_db.py, GeneratedItemLayouts.luau,\n  ItemCatalog.luau, wiki/site/app.js\n- 관련 위키: inventory-item-concept@v014\n- 검증과 증거: 390×844 ON 행 캡처, OFF 생성 제외 테스트, ItemDB 90개 정합성 검사.\n\n### PBP-EFFECT-001 — A·B·C 공간 접촉 효과 영역\n\n- 날짜: 2026-08-16\n- 도메인: 아이템 조합 / 공간 효과 / ItemDB 저작\n- 변경 유형: added\n- 이전 규칙: 아이템은 자기 능력치와 점유 형태만 가졌고 주변 아이템 접촉을 표현하는\n  저작 계약이 없었습니다.\n- 새 유효 규칙: 아이템당 A·B·C 최대 세 효과 슬롯을 두고 점유 경계 바깥 Q/R 다섯 칸까지\n  직접 효과 칸을 선택합니다. 각 슬롯은 종류·조건·능력 ID를 가지며 공간 접촉 판정과 실제\n  능력 실행은 분리합니다.\n- 근거: 가방 배치의 공간 관계를 조합 빌드로 확장하되 전투 규칙이 배치 기하에 결합되지\n  않아야 합니다.\n- 의도한 사용자 경험: 플레이어는 아이템을 어디에 놓고 무엇과 맞닿게 하는지로 추가 효과를\n  설계하고, 운영자는 같은 육각 편집 방식으로 규칙을 시각적으로 저작합니다.\n- 범위와 제외: 효과 칸 데이터, 카탈로그 ID, 회전 접촉 후보 평가까지 포함합니다. 조건 논리,\n  능력치 합산, 전투 발현과 시각 효과는 후속 범위입니다.\n- 영향 소스: item-effect-catalog.json, item-effect-slots.md, inventory-item-layouts.json,\n  GeneratedItemLayouts.luau, ItemEffectContactEvaluator.luau, ItemInstanceHydrator.luau,\n  wiki/site/app.js, wiki/site/item-db.js\n- 관련 위키: inventory-item-concept@v014, backpack-combat-stat-database\n- 검증과 증거: 390×844 A/B/C 편집 캡처, 효과 좌표·카탈로그·회전 접촉·드래그 비활성 테스트,\n  Studio의 동일 리비전 90개 레이아웃과 EffectCatalog 확인.\n\n### PBP-ITEMDB-002 — ItemDB 칸 수·시너지·게임 ON 복합 필터\n\n- 날짜: 2026-08-18\n- 도메인: ItemDB 운영 / 웹 탐색\n- 변경 유형: added\n- 이전 규칙: ItemDB는 이름과 대분류만 좁힐 수 있어 점유 크기·시너지·실제 게임 포함\n  집합을 따로 확인해야 했습니다.\n- 새 유효 규칙: 최소·최대 칸 수, 여러 시너지의 OR, 전체/게임 ON 상태를 검색·대분류와\n  AND로 조합하며 스크롤과 효과 카탈로그 접힘 상태를 재렌더링 뒤에도 유지합니다.\n- 근거: 전체 기획 목록과 현재 게임 집합을 한 화면에서 빠르게 비교해야 합니다.\n- 의도한 사용자 경험: “게임에 들어가는 2~4칸 기계 또는 원거리 아이템”을 그대로 필터로\n  표현하고 실제 아이콘으로 결과를 빠르게 훑습니다.\n- 범위와 제외: 공개·로컬 ItemDB 탐색과 시너지 미디어에 적용합니다. 게임 안의 보관함\n  고급 필터 상태와는 별도입니다.\n- 영향 소스: tools/item_db.py, wiki/site/app.js, wiki/site/app.css, wiki/site/item-db-data.js,\n  wiki/site/synergy-media\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: 1440×900 복합 필터 캡처, 8개 ON 결과, 26/26 이미지 로드,\n  catalogOpen=false·scrollY=188 유지, 브라우저 콘솔 오류·경고 0건.\n\n### PBP-INV-007 — 최대 6개 장착 무기와 필드 표시\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 장착 / 필드 가독성\n- 변경 유형: added\n- 이전 규칙: 유효하게 배치된 무기는 보드 안에서만 보였고 장착 목록·한도·필드 표시 계약이\n  없었습니다.\n- 새 유효 규칙: 유효한 Weapon은 최초 배치 순서대로 최대 6개까지 장착되고 2×3 장착 탭,\n  상세 정보·빼기, 모든 캐릭터 위의 방향 반응 이미지로 표시됩니다.\n- 근거: 공간 배치 결과가 실제 플레이 장비로 읽혀야 인벤토리 퍼즐과 전투 준비가 연결됩니다.\n- 의도한 사용자 경험: 여섯 슬롯에서 장착 상태를 관리하고 필드에서 자신의 빌드를 즉시\n  알아봅니다.\n- 범위와 제외: 장착 상태·관리·이미지 표시에 적용합니다. 실제 공격 실행과 무기 모델은\n  후속 범위입니다.\n- 영향 소스: EquippedItemModel.luau, InventoryBoardModel.luau, InventorySerializer.luau,\n  Screen.luau, ScreenRenderer.luau, InventoryService.luau, EquippedWeaponBillboard.luau,\n  CharacterController.luau, DirectionResolver.luau\n- 관련 위키: inventory-item-concept@v015, character-2d-rendering@v009\n- 검증과 증거: iPhone 17 Pro·Galaxy A06 장착 슬롯과 상세 모달 캡처, 6개 한도 Luau 테스트,\n  West 87.8°·East -92.1° 방향 회전, 최종 Studio 콘솔 오류·경고 0건.\n\n### PBP-INV-008 — 상태와 무관한 2px 배치 외곽선\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 시각 계층\n- 변경 유형: changed\n- 이전 규칙: 가방 시너지나 배치 미리보기 상태에 따라 외곽선이 3~7px로 굵어질 수 있었습니다.\n- 새 유효 규칙: 가방·아이템·선택·시너지·유효·무효·미리보기 외곽선은 모두 2px이며 상태는\n  색으로만 구분합니다.\n- 근거: 굵기 변화가 점유 형태를 실제보다 커 보이게 하고 아이템 그림과 경쟁했습니다.\n- 의도한 사용자 경험: 같은 공간 형태를 안정적으로 읽고 색으로 상태만 빠르게 구분합니다.\n- 범위와 제외: 인벤토리 보드와 보관함 선택 외곽선에 적용합니다.\n- 영향 소스: ScreenState.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: 모든 외곽선 경로가 GetBoundaryThickness=2를 사용하는 Luau·소스 회귀 테스트.\n\n### PBP-CONTENT-002 — 게임 ON 32개 승인 집합\n\n- 날짜: 2026-08-18\n- 도메인: 아이템 콘텐츠 / 게임 배포\n- 변경 유형: changed\n- 이전 규칙: 전체 90개 ItemDB가 모두 게임 ON으로 생성 런타임에 포함됐습니다.\n- 새 유효 규칙: 전체 기획 목록 90개를 보존하면서 게임 ON 32개만 생성 런타임과 Studio\n  베이크에 포함합니다. 포켓 네일건은 MACHINE을 제외한 RANGED·GUN, 소화기 철퇴는\n  FORGED 대신 MACHINE을 사용합니다.\n- 근거: 현재 게임에 투입할 승인 콘텐츠와 후속 기획 후보를 데이터 삭제 없이 구분합니다.\n- 의도한 사용자 경험: 플레이어는 승인된 32개만 만나고 운영자는 OFF 58개를 계속 비교·복원할\n  수 있습니다.\n- 범위와 제외: PBP-CONTENT-001의 전체 90개 카탈로그와 폐기 이력은 유지하며 게임 포함 집합만\n  변경합니다.\n- 영향 소스: inventory-item-layouts.json, GeneratedItemLayouts.luau, wiki/site/item-db-data.js\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: ItemDB revision a35b00cf76ec6c75, 전체 90·게임 ON 32 build/check,\n  Studio 같은 소스 베이크와 저장.\n\n### PBP-ACTION-001 — 20스터드 방향 잠금 Dash\n\n- 날짜: 2026-08-18\n- 도메인: 캐릭터 액션 / 이동 / 스프라이트 일관성\n- 변경 유형: changed\n- 이전 규칙: Dash는 0.20초 동안 목표 속도 30 studs/s의 순간 충격을 적용하고 별도 Dash\n  포즈를 재생할 수 있었습니다.\n- 새 유효 규칙: Dash는 0.30초 동안 선택 방향을 잠그고 장애물이 없는 기준 20스터드를\n  이동합니다. WalkSpeed·AutoRotate를 잠근 뒤 복원하고 시작 순간의 완성 프레임을 유지합니다.\n- 근거: 이동 거리를 입력·현재 속도와 분리해 일관되게 만들고, 승인 Run 아틀라스가 레거시\n  모듈식 Walk/Dash 이미지로 바뀌는 비율 변화를 막습니다.\n- 의도한 사용자 경험: Dash 방향이 중간에 꺾이지 않고 같은 거리를 이동하며 캐릭터 모습도\n  한 프레임으로 안정적으로 유지됩니다.\n- 범위와 제외: 클라이언트 Dash 이동·방향·스프라이트에 적용합니다. 장애물 관통이나 별도\n  Dash 공격 판정은 추가하지 않습니다.\n- 영향 소스: character-actions.md, Config.luau, PlayerActionController.luau,\n  CharacterController.luau, test_two_direction_run_build.py\n- 관련 위키: character-2d-rendering@v009\n- 검증과 증거: Galaxy A06 Play에서 19.46스터드 이동, 이동 중 WalkSpeed=0·AutoRotate=false,\n  종료 뒤 16·true 복원, 최종 콘솔 오류·경고 0건.\n\n### PBP-DEV-001 — 세션 전용 허용 무게 테스트 창\n\n- 날짜: 2026-08-18\n- 도메인: Studio 개발 도구 / 데이터 안전\n- 변경 유형: added\n- 이전 규칙: 허용 무게 경계값을 플레이 중 빠르게 바꾸는 전용 진단 UI가 없었습니다.\n- 새 유효 규칙: Studio에서만 F2 창으로 허용 무게를 1Kg씩 조정하고, 영구 저장에는 플레이어의\n  원래 제한값을 사용합니다.\n- 근거: 무게 초과 UI와 배치 경계를 반복 검증하되 진단 값이 사용자 데이터에 남으면 안 됩니다.\n- 의도한 사용자 경험: 개발자는 Play를 다시 시작하지 않고 경계값을 시험하며 플레이어는\n  테스트 기능이나 변조된 저장값을 보지 않습니다.\n- 범위와 제외: Roblox Studio 진단 세션에만 적용하며 모바일 제품 UI 완료 범위가 아닙니다.\n- 영향 소스: DeveloperTestControls.luau, DeveloperTestWindow.luau, Screen.luau,\n  InventoryService.luau\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: Studio-only 생성·서버 거부·원래 제한 직렬화 소스 검사와 Luau 경계 테스트.\n\n### PBP-INV-009 — 사각 장착판과 부위별 중복 제한\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 장착 / 공간 퍼즐\n- 변경 유형: superseded\n- 이전 규칙: PBP-INV-002~007은 육각 가방이 활성 칸을 만들고 시너지·필터와 유효 배치 무기\n  여섯 개를 관리하는 메인 인벤토리를 사용했습니다.\n- 새 유효 규칙: 아이템은 사각 폴리오미노로 배치하며 유효한 배치가 곧 장착입니다. 무기는\n  여섯 개, 반지는 두 개, 나머지 지정 부위는 한 개이며 무기·반지는 같은 DefinitionId를\n  중복할 수 없습니다. 디아블로식 장비창은 권위 배치의 투영입니다.\n- 근거: 장착 제한을 즉시 이해시키면서 공간 퍼즐은 크기와 형태로 유지해야 합니다.\n- 의도한 사용자 경험: 플레이어는 별도 장착 버튼 없이 배치와 장비 요약을 같은 상태로\n  이해합니다.\n- 범위와 제외: 메인 장착판과 장착 부위에 적용하며 특수 아이템·방패 슬롯은 제외합니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016\n- 검증과 증거: 기획 표에서 부위별 장착 수와 48종 콘텐츠 수량 검산.\n\n### PBP-SYNERGY-001 — 가방·시너지 시스템 전면 폐기\n\n- 날짜: 2026-08-18\n- 도메인: 인벤토리 / 시너지 / 아이템 조합\n- 변경 유형: retired\n- 이전 규칙: PBP-INV-004·006, PBP-ART-001과 PBP-EFFECT-001은 가방 활성 칸, 26종\n  시너지, 시너지 필터와 A/B/C 공간 접촉 효과를 제품 규칙으로 사용했습니다.\n- 새 유효 규칙: 가방 활성 칸, 육각 메인 인벤토리, 시너지 판정·아이콘·필터와 공간 접촉\n  효과를 후속 제품에서 사용하지 않습니다. 육각형은 아이템별 룬 보드에만 사용합니다.\n- 근거: 장착 규칙과 룬 성장 퍼즐이 각각 명확한 책임을 가져야 합니다.\n- 의도한 사용자 경험: 메인 장착은 사각형으로 빠르게 읽고 깊은 육각 퍼즐은 선택한 아이템\n  안에서 집중해 풉니다.\n- 범위와 제외: 새 제품 방향을 폐기하며 기존 코드·자산 제거는 후속 구현 커밋에서 수행합니다.\n- 영향 소스: inventory-item-concept@v016, inventory-item-concept@v015\n- 관련 위키: synergy-icon-system@v001, inventory-item-concept@v016\n- 검증과 증거: v016 폐기·제외 목록과 이전 v015 구현 범위 대조.\n\n### PBP-CONTENT-003 — 알파 장비 48종과 점유 크기\n\n- 날짜: 2026-08-18\n- 도메인: 알파 아이템 콘텐츠 / 장착 부위\n- 변경 유형: superseded\n- 이전 규칙: PBP-CONTENT-002의 현행 게임 ON 32개와 과거 90개 카탈로그가 실제 알파\n  배포 집합이었습니다.\n- 새 유효 규칙: 다음 알파 구현 목표는 무기 14종, 방어구·장신구 34종의 48종입니다. 머리·\n  상의·하의는 4/6칸, 귀걸이·반지는 1칸, 목걸이는 2/3칸, 글러브·신발·벨트는 2/4칸을\n  사용합니다.\n- 근거: 부위별 역할과 사각 점유 크기를 함께 선택하게 해 배치 조합을 늘립니다.\n- 의도한 사용자 경험: 작은 장비의 공간 효율과 큰 장비의 역할을 비교해 자신만의 장착판을\n  만듭니다.\n- 범위와 제외: 48종은 기획 목표이며 현재 ItemDB와 Studio ON 32개는 구현 전까지 그대로입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 무기 14 + 부위별 장비 34 = 48 산술 검산.\n\n### PBP-RUNE-001 — Seed 고정 259칸 아이템 룬 보드\n\n- 날짜: 2026-08-18\n- 도메인: 아이템 성장 / 룬 퍼즐 / 합성\n- 변경 유형: added\n- 이전 규칙: 각 아이템에 독립적인 장기 육각 성장판과 룬 조각 합성 계약이 없었습니다.\n- 새 유효 규칙: 각 아이템은 37칸 영역 일곱 개를 0~6등급에 하나씩 열고, 색별 시작점에서\n  젬블로식 한 칸 간격으로 1~5칸 룬을 연결합니다. 전체 능력 위치는 생성 Seed로 고정하며\n  합성 시 기준 아이템의 Seed와 배치를 보존합니다.\n- 근거: 같은 아이템도 경로·룬 모양·색 차단을 고민하는 장기 성장 퍼즐이 필요합니다.\n- 의도한 사용자 경험: 적은 룬으로 원하는 고등급 능력까지 길을 만들고 다른 색의 미래 경로를\n  함께 계획합니다.\n- 범위와 제외: 보드·등급 개방·룬/아이템 합성 계약이며 실제 생성기와 저장 마이그레이션은\n  후속 구현입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016\n- 검증과 증거: 일곱 영역 각각 37칸과 전체 259칸, 영역별 능력 분포 합계 검산.\n\n### PBP-RUNE-002 — 룬 능력 예산·등급 증가·레어 칸\n\n- 날짜: 2026-08-18\n- 도메인: 룬 능력 / 밸런스 / UI 표현\n- 변경 유형: added\n- 이전 규칙: 룬 능력의 등급별 개수·표시 정밀도·레어 판정과 아이템 정체성 보호 규칙이\n  없었습니다.\n- 새 유효 규칙: 전체 능력 등급 개수는 18·27·33·37·41·50·53이며 같은 능력의 실제 등장\n  등급은 UI 표시값까지 엄격히 증가합니다. 구조형 레어는 6등급 영역의 황금 칸에서 한 단위만\n  제공하고 Seed는 위치만 바꿉니다.\n- 근거: 상위 등급의 보상감을 보존하고 좋은 Seed가 총 전투력 자체를 재추첨하지 않게 합니다.\n- 의도한 사용자 경험: 황금 칸을 장기 목표로 삼되 낮은 등급 경로도 매 단계 분명한 성장을\n  제공합니다.\n- 범위와 제외: 일반 POWER/SPEED/CHANCE/TRAIT/GUARD/TIME/RANGE와 레어 표시에 적용합니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 등급·트랙별 칸 수와 259칸 합계, 모든 표시 수치의 단조 증가 수동 검토.\n\n### PBP-COMBAT-001 — 자동 스킬과 비선형 능력 캡\n\n- 날짜: 2026-08-18\n- 도메인: 전투 능력 / 자동 스킬 / 방어 계산\n- 변경 유형: added\n- 이전 규칙: 룬 인플레이션에서 행동 빈도·확률·무적·발사체 수를 안전하게 제한하는 공통\n  계산 순서가 없었습니다.\n- 새 유효 규칙: 자동 스킬은 해당 무기의 기본 공격 실행 횟수로 발동하고 감소는 최대 8회,\n  최소 요구 횟수는 1회입니다. 방패 막기는 최대 100%에서 방어력을 두 배로 적용하며 방어력\n  이후 최종 피해감소는 최대 50%입니다. 이동·공격·대시·회피·회복·보호막 등은 v016의\n  항목별 캡을 사용합니다.\n- 근거: 적 수치 강화로 대응 가능한 선형 인플레이션은 허용하되 무한 행동·완전 무적·확률\n  초과는 막아야 합니다.\n- 의도한 사용자 경험: 큰 숫자 성장은 즐기면서도 공격과 피격의 기본 규칙은 계속 작동합니다.\n- 범위와 제외: 탄약, 탄약 미소모, 소모품 미소모와 스킬 초기화 확률은 사용하지 않습니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: backpack-combat-stat-database, inventory-item-concept@v016\n- 검증과 증거: 계산 순서와 캡·제외 목록의 기획 교차 검토.\n\n### PBP-RUNE-003 — 알파 무기 14종의 보드 정체성\n\n- 날짜: 2026-08-18\n- 도메인: 무기 콘텐츠 / 룬 보드 / 자동 스킬\n- 변경 유형: added\n- 이전 규칙: 알파 무기별 자동 스킬 조건과 259칸 A/B/C/D·레어 배분이 고정되지 않았습니다.\n- 새 유효 규칙: 일곱 무기 형태에 두 종류씩 14개를 두고 각 보드는 A 102, B 71, C 48,\n  D 32, 6등급 로컬 레어 6칸을 가집니다. 목걸이는 발사체, 반지는 자동 스킬 요구 공격,\n  귀걸이는 근거리 사거리의 전역 레어를 제공하고 신발만 추가 대시를 제공합니다.\n- 근거: Seed 위치가 달라도 무기 이름과 공격 방식에 맞는 성장 정체성이 유지돼야 합니다.\n- 의도한 사용자 경험: 같은 룬이라도 연격검·공성 석궁·흡혈 도끼에서 서로 다른 경로와\n  자동 스킬을 강화합니다.\n- 범위와 제외: 14종의 알파 기획 계약이며 최종 아이콘·폴리오미노 좌표·전투 구현은 후속입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 각 무기 레어 합계 6칸과 보드 전체 259칸 산술 검산.\n\n### PBP-ITEMDB-002 — 최종 48종 활성 ItemDB 전환\n\n- 날짜: 2026-08-20\n- 도메인: 아이템 콘텐츠 / 공개 데이터베이스 / 런타임 배포\n- 변경 유형: superseded\n- 대체 대상: PBP-ITEMDB-001, PBP-CONTENT-003의 \"후속 구현 목표\" 상태\n- 이전 규칙: 새 48종은 기획 목표이고 과거 90종과 게임 ON 32종이 구현 전 역사적 현행\n  상태였습니다.\n- 새 유효 규칙: 무기 14종과 방어구·장신구 34종의 최종 48종만 ItemDB 원본, 생성 런타임,\n  공개 미디어의 활성 집합으로 사용합니다. 과거 아이콘과 특수 아이템은 제거하고 ON/OFF\n  운영 경계는 유지합니다.\n- 근거: 기획·로컬 원화·공개 DB·게임 카탈로그의 서로 다른 활성 집합은 이름·점유·자산 ID\n  불일치를 만듭니다.\n- 의도한 사용자 경험: 플레이어와 개발자가 같은 최종 48종의 이미지와 형태만 봅니다.\n- 범위와 제외: 아이템 정의·아이콘·사각 점유·공개 DB에 적용하며 과거 위키 기록은 보존합니다.\n- 영향 소스: inventory-item-art-catalog.md, inventory-item-layouts.json,\n  GeneratedItemLayouts.luau, ItemCatalog.luau, wiki/site/item-db-data.js\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: ItemDB 48종 빌드·체크, 최종 카탈로그와 모바일 공개 DB 캡처.\n\n### PBP-RUNE-004 — 427칸·후보 10개 룬 보드\n\n- 날짜: 2026-08-20\n- 도메인: 아이템 성장 / 룬 보드 / 랜덤화\n- 변경 유형: superseded\n- 대체 대상: PBP-RUNE-001, PBP-RUNE-002\n- 이전 규칙: 모든 아이템은 37칸 영역 일곱 개의 259칸 보드 하나를 Seed로 섞고, 능력 등급\n  총량 18·27·33·37·41·50·53을 사용했습니다.\n- 새 유효 규칙: 각 영역을 반지름 4인 61칸으로 확대해 전체 427칸을 사용합니다. 아이템\n  정의마다 결정론적으로 생성된 후보 10개를 두고 아이템 생성 시 하나를 균등 선택해 VariantId와\n  Seed를 저장합니다. 보드당 능력 등급 총량은 30·45·54·60·67·90·81입니다.\n- 근거: 11개 능력 계열과 레어 노드, 일곱 색 경로를 한 판에서 읽고 우회할 충분한 공간이\n  필요합니다. 후보를 제한하면 다양성과 재현·검증을 함께 확보할 수 있습니다.\n- 의도한 사용자 경험: 같은 아이템에서도 다른 길을 계획하되 총 능력 예산이 운에 따라 바뀌지는\n  않습니다.\n- 범위와 제외: 48종 전체 480개 보드에 적용하며 런타임 재굴림은 허용하지 않습니다.\n- 영향 소스: item-rune-board-database.json, GeneratedRuneBoardDB.luau,\n  rune-board-db-data.js\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 생성기 결과 48×10=480보드, 보드마다 7×61=427칸, revision\n  6e735afdab3d7550.\n\n### PBP-RUNE-005 — 34종 룬 도형과 62종 능력 아이콘\n\n- 날짜: 2026-08-20\n- 도메인: 룬 조각 / 보드 가독성 / 터치 배치\n- 변경 유형: added\n- 이전 규칙: 룬은 1~5칸 젬블로식 조각이라는 개념만 있었고 완전한 형태군, 공용 원화와\n  능력 아이콘의 책임 분리가 고정되지 않았습니다.\n- 새 유효 규칙: 회전·반전을 동일시한 1·1·3·7·22개, 총 34종 자유 폴리헥스를 사용합니다.\n  일곱 색은 빈 중앙 메달의 중립 원화를 틴트하고, 62종 전투 effect 아이콘을 중앙에 별도\n  합성합니다. 드래그는 실제 도형·잡은 칸·회전·반전을 보존하며 마지막 스냅 가이드를 확정값으로\n  사용합니다.\n- 근거: 색·등급·능력 의미를 한 장의 원화에 굽지 않아야 작은 화면에서도 의미를 읽고 데이터\n  변경에도 자산을 재사용할 수 있습니다.\n- 의도한 사용자 경험: 탭하지 않아도 대략적인 능력 종류를 알고, 손가락 아래에서 룬이 튀지\n  않은 채 예상 위치에 놓입니다.\n- 범위와 제외: 룬 카드·보드 노드·드래그 미리보기에 적용하며 상세 수치는 텍스트로 제공합니다.\n- 영향 소스: rune-piece-catalog.json, rune-ability-icon-catalog.json,\n  rune_hex_neutral.png, rune_ability_icons.png, UIPrimitives.luau, Screen.luau\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 형태군 34개, effect 아이콘 62개 생성·누락 검사와 아이콘 시트.\n\n### PBP-UI-001 — 모바일 인벤토리·룬 보드의 단일 작업 흐름\n\n- 날짜: 2026-08-20\n- 도메인: 모바일 UI / 인벤토리 / 룬 보드 / 합성\n- 변경 유형: added\n- 이전 규칙: 사각 장착과 룬 보드의 개별 기획은 있었지만 화면 내 기능 위치, 터치 우선순위,\n  필터·합성·복귀 상태의 완전한 흐름이 없었습니다.\n- 새 유효 규칙: 두 화면은 안전 영역 아래 상단 상태, 중앙 작업판, 하단 보관함을 공유합니다.\n  카드 탭은 룬 보드 진입, 드래그는 배치 또는 합성을 우선합니다. 룬 보관함은 상하 스크롤,\n  한 색 또는 전체를 고르는 7색 필터와 독립 ON/OFF인 1~5칸 필터를 제공하고, 빈 보드 탭은\n  상단 중앙에 능력을 표시합니다.\n- 근거: 모바일에서는 화면 전환마다 탐색 위치와 재료가 사라지면 배치 퍼즐의 비교 비용이\n  지나치게 커집니다.\n- 의도한 사용자 경험: 인벤토리 배치, 아이템 성장, 룬 배치와 합성을 같은 손동작 문법으로\n  왕복합니다.\n- 범위와 제외: 모바일 세로 화면과 터치 입력에 적용하며 PC 밀도·마우스 품질은 현재 완료\n  기준이 아닙니다.\n- 영향 소스: inventory-rune-ui-spec.md, InventoryV2, RuneBoard, InventoryV2Service.luau\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 정적 상태·Luau 테스트, iPhone 17 Pro 400×777 및 iPhone 7 374×666 Studio\n  Play 캡처, 핵심 입력 경로와 콘솔 오류 없음 확인.\n\n### PBP-ART-002 — 최종 아이템 카툰 아트와 방향 규칙\n\n- 날짜: 2026-08-20\n- 도메인: 아이템 아트 / 모바일 전투 / 사각 점유\n- 변경 유형: superseded\n- 대체 대상: PBP-ART-001의 육각·시너지 카드 중심 아트 계약\n- 이전 규칙: 실사풍 또는 고풍스러운 원화와 육각 시너지 카드 문법이 섞였고, 일부 무기는\n  사각 점유와 전투 회전 기준에 맞지 않았습니다.\n- 새 유효 규칙: 48종 전체를 밝고 굵은 카툰풍으로 통일하고 사각 폴리오미노 질량에 맞춥니다.\n  근접 무기는 위쪽, 활·석궁·총은 오른쪽을 기본 방향으로 하며 발사체·공격 궤적은 원화에서\n  제외합니다.\n- 근거: Brotato식 자동 공격에서는 작은 캐릭터 주변을 도는 장비의 방향과 실루엣이 즉시\n  읽혀야 합니다.\n- 의도한 사용자 경험: 보관함·장착판·전투에서 같은 아이템을 형태만으로 알아봅니다.\n- 범위와 제외: 최종 48종 인벤토리 원화에 적용하며 실제 공격 VFX와 투사체는 별도 자산입니다.\n- 영향 소스: Assets/Items/InventoryIcons, inventory-item-art-catalog.md,\n  uploaded_asset_ids.json\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 최종 48종 카탈로그와 공개 ItemDB 캡처.\n\n### PBP-RUNE-006 — 등급·색·시작점 일치와 회전 전용 배치\n\n- 날짜: 2026-08-20\n- 도메인: 룬 성장 / 연결 퍼즐 / 배치 권위\n- 변경 유형: changed\n- 대체 대상: PBP-RUNE-004의 자유 시작 색 등록, PBP-RUNE-005의 런타임 반전 조작\n- 이전 규칙: 룬 색과 합성 등급은 독립 값이었고, 해금된 어느 중앙 시작점에서든 아직 등록하지\n  않은 색을 시작할 수 있으며 플레이 중 회전과 반전을 모두 제공했습니다.\n- 새 유효 규칙: G0~G6 룬 색은 아이템 등급색과 일치합니다. 룬은 같은 번호 영역의 중앙\n  시작점에서만 첫 등록하며 아이템 등급보다 높은 룬은 배치할 수 없습니다. 5칸 합성으로 등급이\n  오르면 다음 등급 색으로 바뀌고 런타임 조작은 60° 회전만 제공합니다. 첫 룬은 중앙 한 칸만\n  덮으면 도형의 어느 셀을 잡았든 유효하며 이후에는 한 칸 간격 연결 전선을 안내합니다.\n- 근거: 색·등급·시작점이 서로 다른 축이면 성장 잠금과 연결 가능 위치를 화면만 보고 예측하기\n  어렵고 저장 데이터가 모순될 수 있습니다.\n- 의도한 사용자 경험: 새 등급을 열 때 같은 색의 새 출발점을 즉시 이해하고, 보드가 보여 주는\n  한 칸의 목표와 실제 도형 가이드만으로 자유로운 첫 배치를 시도합니다.\n- 범위와 제외: 룬 생성·합성·저장 정규화·보드 배치·회전에 적용합니다. 34개 자유 폴리헥스\n  카탈로그의 중복 제거 기준은 유지합니다.\n- 영향 소스: rune-piece-system.md, inventory-rune-ui-spec.md, RuneBoardModel.luau,\n  RuneMergeModel.luau, InventoryV2Service.luau, Screen.luau\n- 관련 위키: inventory-item-concept@v018\n- 검증과 증거: InventoryV2 Luau 테스트의 등급색 불일치 거절, 등급별 시작점, 5칸 합성 색\n  승급, 첫 중앙 목표와 한 칸 간격 전선 검증.\n\n### PBP-UI-002 — 모바일 룬 보드의 문맥 보존 조작과 팝업 필터\n\n- 날짜: 2026-08-20\n- 도메인: 모바일 UI / 룬 보드 / 보관함 탐색\n- 변경 유형: changed\n- 대체 대상: PBP-UI-001의 상시 펼친 단일 색 필터와 보드 중심 재확대\n- 이전 규칙: 색상·칸 수 선택지가 보관함 위에 계속 공간을 차지하고 색상은 한 개 또는 전체만\n  골랐습니다. 확대할 때 보드 중앙으로 시점이 이동했고 회전·반전은 들고 있는 룬에 묶였습니다.\n- 새 유효 규칙: `색상 필터`와 `칸 수 필터` 한 줄 트리거가 각각 다중 선택 말풍선을 열며\n  바깥 탭으로 닫힙니다. 장착 룬 회전은 마지막 선택 룬에만 적용하고 확대·축소는 현재 보던\n  논리 위치를 유지합니다. 상단 능력 설명은 색상명을 빼고 고대비 등급·능력·수치만 표시합니다.\n- 근거: 좁은 세로 화면에서는 선택지를 계속 펼쳐 두는 것보다 실제 룬 카드를 더 많이 보여 주는\n  편이 중요하며, 카메라와 조작 대상이 예기치 않게 바뀌면 퍼즐 경로를 다시 찾아야 합니다.\n- 의도한 사용자 경험: 여러 색·크기를 짧은 팝업에서 조합해 찾고, 보던 위치와 선택 룬을 잃지\n  않은 채 확대·회전하며, 탭 설명을 즉시 읽습니다.\n- 범위와 제외: 모바일 세로 룬 장착 화면과 터치 입력에 적용합니다. PC 화면 밀도와 마우스\n  동등성은 현재 완료 기준이 아닙니다.\n- 영향 소스: inventory-rune-ui-spec.md, Screen.luau, VisualTokens.luau,\n  StorageSort.luau, test_inventory_v2_ui.py\n- 관련 위키: inventory-item-concept@v018\n- 검증과 증거: Galaxy A06 세로 Studio Play에서 필터 팝업·확장된 카드 영역·고대비 능력\n  설명을 확인했고, Studio MCP 진단과 7개 UI 계약 테스트를 통과했습니다.\n\n### PBP-COMBAT-002 — 장착 무기 할로와 서버 권위 자동 공격\n\n- 날짜: 2026-08-20\n- 도메인: 필드 장착 표시 / 자동 전투 / 모바일 연출\n- 변경 유형: superseded\n- 대체 대상: PBP-INV-007의 방향 반응형 필드 표시와 실제 공격 제외 범위\n- 이전 규칙: 최대 여섯 장착 무기는 캐릭터 방향을 따라 회전하는 머리 위 이미지로만 보였고,\n  실제 표적 탐색·공격·피해와 무기별 연출은 후속 범위였습니다.\n- 새 유효 규칙: 적이 없을 때 여섯 무기는 캐릭터 방향과 무관한 이미지 할로로 머리 위에\n  부유합니다. 적이 사거리와 시야 안에 들어오면 서버가 슬롯별 표적·쿨다운·피해를 결정하고\n  클라이언트는 베기·찌르기·투척·활·석궁·총기 연출을 재생합니다. 14종 원화는 ItemDB의\n  정규화된 회전축·타격점·발사구를 공통 계약으로 사용합니다.\n- 근거: 인벤토리의 장착 결과가 실제 전투 행동으로 연결돼야 빌드가 필드에서 살아 움직이며,\n  캐릭터 방향에 무기를 묶지 않아야 대기 할로와 공격 조준의 책임이 충돌하지 않습니다.\n- 의도한 사용자 경험: 적이 없을 때는 자신의 여섯 무기를 안정된 천사 링으로 읽고, 전투가\n  시작되면 각 원화가 직접 날아가거나 발사하는 모습을 통해 무기 종류를 즉시 구분합니다.\n- 범위와 제외: 14종의 기본 자동 공격, 서버 피해와 공통 연출 계열까지 적용합니다. 도탄·산탄·\n  관통·흡혈·반격 같은 고유 능력, 룬 변형, 음향과 적 피격 애니메이션은 후속 범위입니다.\n- 영향 소스: alpha-item-definitions.json, inventory-item-layouts.json,\n  EquippedWeaponBillboard.luau, WeaponAttackVFX.luau, WeaponCombatConfig.luau,\n  WeaponCombatService.luau, DamageResolver.luau\n- 관련 위키: weapon-combat-presentation@v001, inventory-item-concept@v018,\n  character-2d-rendering@v009\n- 검증과 증거: 14개 무기 공격 발생, 적 없음 공격 증가 0, iPhone 17 Pro `401×776`과\n  Galaxy A06 `359×718` Studio Play, 45개 연출 수신·누락 0·객체 수 736 고정·서버 피해와\n  콘솔 오류 없음 확인.\n\n### PBP-COMBAT-003 — 근접 여섯 무기 할로와 소켓 기준 최근접 적 조준\n\n- 날짜: 2026-08-21\n- 도메인: 필드 장착 표시 / 자동 전투 조준 / 모바일 연출\n- 변경 유형: changed\n- 대체 대상: PBP-COMBAT-002의 넓은 할로 위치와 기본 원화 회전 조준 규칙\n- 이전 규칙: 여섯 무기는 캐릭터 머리 위 할로에 부유하고 서버 권위 자동 공격으로 전환했지만,\n  캐릭터와의 최대 거리, 좌우 세 슬롯의 정확한 배치, 모든 무기의 공통 표적과 왼쪽을 보는\n  비대칭 원화 처리 방식은 고정되지 않았습니다.\n- 새 유효 규칙: 여섯 무기를 머리 가까운 좁은 타원의 왼쪽 세 개·오른쪽 세 개에 같은 현 길이\n  간격으로 두고 정중앙 위·아래는 비웁니다. 장착 집합은 사거리 안에서 가장 가까운 생존 적\n  하나를 공통 후보로 선택하고 각 무기는 자기 사거리 안에서 실제 칼끝·타격점·총구·화살·볼트\n  발사 방향을 맞춥니다. 오른쪽 기본 원화가 왼쪽 표적을 보면 상하 회전 대신 수평 반전하며\n  회전축·타격점·발사 소켓도 함께 반전합니다. 적이 없으면 기본 방향의 독립 부유로 돌아갑니다.\n- 근거: 무기가 캐릭터에서 멀리 흩어지면 장착 관계와 천사 링 실루엣이 사라지고, 왼쪽 적을\n  단순 각도 회전으로 겨누면 총과 활이 거꾸로 보이며 총구·발사체 위치도 원화와 어긋납니다.\n- 의도한 사용자 경험: 작은 모바일 화면에서도 여섯 장비를 캐릭터 소유의 한 묶음으로 즉시\n  읽고, 전투에서는 모든 무기가 같은 위협을 각자의 실제 끝점으로 노리는 장면을 봅니다.\n- 범위와 제외: 대기 할로 위치, 최근접 표적 선택, 무기별 사거리, 대기·공격 조준과 좌측 수평\n  반전에 적용합니다. 도탄·산탄·관통 같은 다중 표적 고유 능력과 음향은 후속 범위입니다.\n- 영향 소스: EquippedWeaponVisualLayout.luau, EquippedWeaponBillboard.luau,\n  WeaponAimResolver.luau, WeaponAttackVFX.luau, WeaponTargeting.luau,\n  WeaponCombatService.luau\n- 관련 위키: weapon-combat-presentation@v002\n- 검증과 증거: 사용자 좌표 측정 이미지, iPhone 17 Pro `401×776`의 여섯 무기 근접 할로와\n  좌측 표적 수평 반전 공격 캡처, Galaxy A06 `359×718` 반응형 여백 검사, 관련 테스트와\n  Studio 콘솔 오류 없음 확인.\n\n### PBP-RUNE-007 — 전체 초안과 원자 저장 룬 편집\n\n- 날짜: 2026-08-21\n- 도메인: 룬 연결 규칙 / 저장 권위 / 모바일 편집\n- 변경 유형: changed\n- 대체 대상: PBP-RUNE-006의 즉시 유효 배치 중심 조작\n- 이전 규칙: 매 조작이 그 순간 유효해야 배치 상태로 남을 수 있어 회전 중 잠시 잘못된 형태를\n  확인하거나 여러 룬을 함께 고친 뒤 저장하는 흐름이 없었습니다.\n- 새 유효 규칙: 룬 추가·이동·회전·회수는 전체 초안을 편집합니다. 무효 룬은 빨간색으로 남겨\n  수정할 수 있지만 저장은 비활성화되며, 서버가 전체 배치를 다시 검증한 뒤 유효한 초안만\n  원자적으로 저장합니다. 되돌리기는 마지막 저장 상태를 복원합니다. 한 칸 간격 연결은 배치\n  순서가 아니라 완성된 같은 색 네트워크 전체를 기준으로 판정합니다.\n- 근거: 퍼즐은 중간 단계가 아니라 최종 형태를 설계하는 작업이며, 클라이언트 조작 순서가 같은\n  완성 배치의 합법성을 바꾸면 안 됩니다.\n- 의도한 사용자 경험: 자유롭게 돌리고 옮기며 실패 이유를 본 뒤, 만족한 전체 배치만 안전하게\n  확정합니다.\n- 범위와 제외: 보관/배치 룬의 이동·회전·회수, 저장·되돌리기, 클라이언트와 서버의 전체 배치\n  검증에 적용합니다. 룬 합성 규칙은 바꾸지 않습니다.\n- 영향 소스: inventory-rune-ui-spec.md, RuneBoardModel.luau, RuneDragVisualState.luau,\n  Screen.luau, InventoryV2Service.luau\n- 관련 위키: inventory-item-concept@v019\n- 검증과 증거: 한 칸 간격 5칸 도형 배치, 잘못된 회전의 빨간 상태와 저장 비활성, 악성 저장\n  요청 거절 뒤 서버 상태 보존, 제거·되돌리기 Studio 진단과 InventoryV2 테스트.\n\n### PBP-UI-003 — 현재 형태 가이드와 정돈된 룬 보드 시각 언어\n\n- 날짜: 2026-08-21\n- 도메인: 모바일 룬 보드 / 터치 상호작용 / 정보 시각화\n- 변경 유형: changed\n- 대체 대상: PBP-UI-002의 선택 회전·필터·능력 설명 흐름\n- 이전 규칙: 연결 가이드가 현재 도형의 잡은 셀과 회전을 충분히 반영하지 않았고 잠긴 영역과\n  빈 영역의 차이가 드러나지 않았습니다. 보관 카드에서 방향을 미리 정하거나 배치 룬을\n  보관함으로 회수하기 어려웠고, 두꺼운 육각 테두리와 불투명 룬 장식이 색과 능력을 방해했습니다.\n- 새 유효 규칙: 현재 잡은 셀·회전·전체 배치를 기준으로 모든 후보를 계산합니다. 유효 칸은\n  라임색, 잠긴 칸은 탁한 적갈색, 무효 초안은 빨간색으로 표시하며 기존 룬과 같은 색 능력\n  아이콘은 유지합니다. 보관 카드와 배치 룬은 선택·60° 회전하고 배치 룬은 이동·회수합니다.\n  틈 없는 얇은 벌집과 색이 비치는 투명 크리스털 룬을 사용하고, 전체 필터는 모두 ON 상태에서\n  모두 OFF로 반전할 수 있습니다. 룬 각인 효과 탭은 유효 노드를 효과별로 합산합니다.\n- 근거: 플레이어가 손을 놓기 전에 가능 위치와 불가능 이유, 현재 활성 보상, 도형 방향을 함께\n  읽어야 최적 경로를 계산할 수 있습니다.\n- 의도한 사용자 경험: 보드 위 정보를 한눈에 구분하고, 카드에서 방향을 준비해 원하는 위치로\n  옮긴 뒤 실제 얻는 효과까지 같은 화면 흐름에서 확인합니다.\n- 범위와 제외: 모바일 세로 룬 보드와 보관함, 필터, 효과 요약에 적용합니다. PC 화면 품질과\n  마우스 동등성은 현재 완료 기준이 아닙니다.\n- 영향 소스: rune_hex_neutral.png, rune_piece_crystal.png, Assets.luau,\n  UIPrimitives.luau, VisualTokens.luau, RuneEffectSummary.luau, Screen.luau\n- 관련 위키: inventory-item-concept@v019\n- 검증과 증거: iPhone 17 Pro 세로의 연결·잠금 가이드, 잘못된 초안, 효과 합산 Studio\n  캡처와 iPhone 7 세로 반응형 검사.\n\n### PBP-COMBAT-004 — 인벤토리 중 공격 연출 억제\n\n- 날짜: 2026-08-21\n- 도메인: 모바일 인벤토리 / 전투 표현 계층\n- 변경 유형: added\n- 이전 규칙: 필드 공격 테스트 루프와 공격 연출이 인벤토리보다 높은 레이어에서 계속 재생되어\n  작업 영역을 뚫고 보일 수 있었습니다.\n- 새 유효 규칙: 인벤토리·룬 화면이 열리면 진행 중 클라이언트 공격 연출을 즉시 지우고 새\n  연출을 받지 않으며 오버레이를 비활성화합니다. 화면을 닫으면 표현만 다시 허용합니다.\n- 근거: 전투 준비 작업에서는 퍼즐과 정보가 시각 우선권을 가져야 하며, 화면을 덮는 것만으로는\n  불필요한 연출 루프가 계속 실행됩니다.\n- 의도한 사용자 경험: 인벤토리에 들어오는 순간 필드 공격 연출이 완전히 멈춰 룬 배치에\n  집중하고, 나가면 자연스럽게 전투 표현으로 돌아갑니다.\n- 범위와 제외: 클라이언트 무기 공격 VFX와 오버레이에 적용합니다. 서버의 공격 판정·피해·\n  장착 상태는 변경하지 않습니다.\n- 영향 소스: Screen.luau, WeaponAttackVFX.luau\n- 관련 위키: inventory-item-concept@v019, weapon-combat-presentation@v002\n- 검증과 증거: Studio Play에서 InventoryV2Screen 활성 중 WeaponCombatVFX\n  Enabled=false, Suppressed=true, 활성 공격·투사체·충돌 0개 확인.\n\n### PBP-ACTION-002 — 3단계 Dash와 이동 구간 잔상\n\n- 날짜: 2026-08-23\n- 도메인: 캐릭터 행동 / 모바일 전투 표현\n- 변경 유형: superseded\n- 대체 대상: PBP-ACTION-001의 Dash 시작 프레임 고정 표현\n- 이전 규칙: Dash는 0.30초 동안 시작 순간의 캐릭터 프레임을 그대로 유지했습니다.\n- 새 유효 규칙: 방향 잠금·0.30초·20스터드 이동은 유지하면서 예비 0.05초, 이동 0.20초,\n  회복 0.05초의 통짜 캐릭터 자세를 재생합니다. 잔상은 이동 자세에서 실제 경로 뒤에만\n  생성되고 회복 자세에서 본체로 수렴합니다.\n- 근거: 시작 프레임 고정은 형태 안정성은 지키지만 행동의 출발과 종료를 자세로 설명하지\n  못합니다. 세 개의 명확한 키포즈는 캐릭터 정체성을 지키면서 타이밍을 읽게 합니다.\n- 의도한 사용자 경험: 버튼을 누른 순간 몸을 낮추고 빠르게 이동한 뒤 균형을 되찾는 흐름과\n  잔상 소멸을 보고 Dash 종료를 직관적으로 이해합니다.\n- 범위와 제외: Rookie 남성 통짜 캐릭터 Dash와 런타임 잔상에 적용합니다. 이동 거리·충돌·\n  쿨다운·룬 보너스 한도는 변경하지 않습니다.\n- 영향 소스: production_manifest.json, AssetRegistry.luau, CharacterController.luau,\n  DashAfterimage.luau, FrameSpriteRig.luau, ProductionDashData.luau\n- 관련 위키: character-2d-rendering@v010\n- 검증과 증거: 좌우 3프레임 콘택트 시트, 정확한 20fps 타이밍·잔상 GIF, 캐릭터 자산 검사,\n  30개 후보 테스트와 Galaxy A06 Studio Play Dash 잔상 캡처.\n\n### PBP-ART-003 — 발이 고정된 좌우 호흡 Idle\n\n- 날짜: 2026-08-23\n- 도메인: 캐릭터 애니메이션 / 아트 방향\n- 변경 유형: added\n- 이전 규칙: 정지 상태는 통짜 Run 아틀라스 이전의 호환 프레임 또는 사실상 고정 자세를\n  사용해 호흡의 생동감이 없었습니다.\n- 새 유효 규칙: 마지막 East·West 방향을 유지하는 8프레임 6fps 호흡을 사용합니다. 발과\n  골반 아래는 고정하고 상체의 들숨·정점·날숨·복귀만 움직이며 전체 균일 확대는 금지합니다.\n- 근거: 작은 모바일 캐릭터는 생동감이 필요하지만 바닥 접지와 실루엣 안정성을 잃으면 조작\n  위치가 흔들려 보입니다.\n- 의도한 사용자 경험: 멈춰 있어도 캐릭터가 살아 숨 쉬되 신발이 미끄러지거나 방향이 이유\n  없이 반전되지 않는 안정적인 정지 화면을 봅니다.\n- 범위와 제외: Rookie 남성 통짜 캐릭터 Idle에 적용합니다. Hit·Death·Clear 제작은 별도\n  승인 단위입니다.\n- 영향 소스: production_manifest.json, Config.luau, DirectionResolver.luau,\n  FrameSpriteRig.luau, ProductionIdleData.luau\n- 관련 위키: character-2d-rendering@v010\n- 검증과 증거: 좌우 8프레임 콘택트 시트, 하체 픽셀 고정 검사, 캐릭터 자산 검사와 Galaxy\n  A06 Studio Play Idle 캡처.\n\n### PBP-INV-010 — 장비 전체 초안과 원자 저장\n\n- 날짜: 2026-08-23\n- 도메인: 모바일 인벤토리 / 장비 배치 권위\n- 변경 유형: added\n- 이전 규칙: 아이템을 한 번 옮길 때마다 개별 배치를 즉시 확정했고, 여러 장비를 재정리한\n  최종 결과를 저장 전에 함께 검토하는 계약이 없었습니다.\n- 새 유효 규칙: 추가·이동·회전·보관은 전체 초안을 갱신합니다. 겹친 장비는 가장 가까운\n  빈자리로 밀어 결과를 미리 보여 주고, 잠금·무게·장착 한도 등 무효 상태는 빨간색으로 남기되\n  저장을 비활성화합니다. 서버는 최대 200개 좌표를 전체 재검증해 모두 유효할 때만 원자적으로\n  교체하며 되돌리기는 마지막 저장 상태를 복원합니다.\n- 근거: 여러 모양의 장비를 퍼즐처럼 재배치할 때 중간 한 수를 즉시 저장하면 플레이어가\n  전체 구성을 비교하기 어렵고, 실패 중간 상태가 영구 데이터가 될 위험이 있습니다.\n- 의도한 사용자 경험: 장비를 여러 번 옮겨 최종 구성을 눈으로 검토하고, 잘못된 아이템과\n  이유를 고친 뒤 한 번만 저장합니다.\n- 범위와 제외: 9×9 사각 장착판과 보관함 전환에 적용합니다. ItemDB 이미지 배율·X/Y 보정의\n  실제 렌더링 연결은 이번 범위가 아닙니다.\n- 영향 소스: InventoryModel.luau, ItemPlacementDraft.luau, Screen.luau,\n  InventoryV2Service.luau\n- 관련 위키: inventory-item-concept@v020\n- 검증과 증거: 충돌 장비의 결정적 이동, 잠긴 칸 초안·저장 비활성·되돌리기 Luau 테스트와\n  Galaxy A06 Studio Play 실패 상태 캡처.\n\n### PBP-UI-004 — 선택 우선 장비 조작과 세로 보관함\n\n- 날짜: 2026-08-23\n- 도메인: 모바일 인벤토리 / 터치 UX\n- 변경 유형: changed\n- 이전 규칙: 아이템 탭이 룬 화면 이동과 직접 연결되고 보관 카드·스크롤·배치 드래그의 입력\n  의도가 충분히 분리되지 않았으며 보관함은 가로 흐름을 전제로 했습니다.\n- 새 유효 규칙: 짧은 탭은 선택만 하고 회전 버튼을 보여 줍니다. 움직이지 않은 길게 누르기는\n  룬 페이지·상세 정보 메뉴를 열고, 움직임이 생기면 세로 스크롤 또는 실제 아이템 그림 드래그로\n  전환합니다. 보관함은 안전 여백을 둔 세로 다열 그리드를 사용합니다.\n- 근거: 같은 손가락으로 탐색·선택·배치·상세 보기를 수행하는 모바일에서는 행동 전에 선택\n  상태와 명확한 분기 피드백이 필요합니다.\n- 의도한 사용자 경험: 목록을 안정적으로 훑고, 원하는 장비를 선택해 회전하거나 끌며, 가만히\n  눌렀을 때만 다음 작업을 고릅니다.\n- 범위와 제외: 모바일 세로 인벤토리와 장비 상세 팝업에 적용합니다. PC 레이아웃 품질과\n  마우스 동등성은 현재 완료 기준이 아닙니다.\n- 영향 소스: inventory-rune-ui-spec.md, ItemGesturePolicy.luau, Screen.luau\n- 관련 위키: inventory-item-concept@v020\n- 검증과 증거: InventoryV2 스펙, UI 계약 테스트, Galaxy A06의 기본·메뉴·상세 캡처와\n  iPhone 7 `374×666`의 세로 스크롤·메뉴·상세 경계 검사.\n\n### PBP-DOC-002 — 비개발자 중심 커밋 위키와 다중 상태 증거\n\n- 날짜: 2026-08-23\n- 도메인: 개발 운영 / 기획 기록 / 위키 품질\n- 변경 유형: added\n- 이전 규칙: 커밋 위키는 기획 우선과 시각 증거를 요구했지만, 비개발자 가독성 판정과 여러\n  상태가 필요한 UI의 증거 범위가 충분히 구체적이지 않았습니다.\n- 새 유효 규칙: `한눈에 보는 변경`에서 무엇이·왜·어떻게 달라졌는지 먼저 답하고, 제품 언어로\n  경험·원칙·범위를 설명한 뒤 구현을 근거로 둡니다. 시각 변화는 이해에 필요한 기본·상호작용·\n  선택·성공·실패 상태를 실제 Studio 또는 브라우저에서 캡처합니다.\n- 근거: 기획 철학이 코드 목록에 묻히거나 한 장의 우연한 화면만 남으면 다음 직군과 미래의\n  작업자가 제품 의도를 복원하기 어렵습니다.\n- 의도한 사용자 경험: 디자이너·아티스트·테스터·새 팀원이 소스 코드를 열지 않고도 변경 이유,\n  최종 규칙과 실제 결과를 한 페이지에서 이해합니다.\n- 범위와 제외: 사용자 승인 커밋에서 발행하는 모든 위키 페이지에 적용합니다. 개발 중간\n  기록과 폐기된 접근은 계속 게시하지 않습니다.\n- 영향 소스: AGENTS.md, update-project-wiki/SKILL.md\n- 관련 위키: development-wiki@v013\n- 검증과 증거: 이번 커밋의 character-2d-rendering@v010과 inventory-item-concept@v020에\n  새 서사 순서와 제작·기본·선택·실패·상세·두 화면비 증거를 실제 적용.\n",
          "source_path": "wiki/content/pages/product-planning-change-log/v011.md",
          "timeline_order": 43
        },
        {
          "id": "product-planning-change-log",
          "title": "제품 기획 변경 원장",
          "summary": "누적 원장을 보존하면서 룬 보드를 전체 초안 기반 모바일 편집기로 확정하고, 현재 도형 기준 안내·잠금 구분·효과 합산·인벤토리 중 전투 연출 억제를 제품 규칙으로 추가했습니다.",
          "status": "active",
          "category": "planning",
          "tags": [
            "planning",
            "decision-log",
            "product",
            "inventory",
            "equipment",
            "rune-board",
            "weapon",
            "combat",
            "mobile",
            "documentation"
          ],
          "created_at": "2026-08-15",
          "updated_at": "2026-08-21",
          "authors": [
            "Codex"
          ],
          "version": 10,
          "change_type": "updated",
          "change_summary": "v009까지의 누적 결정을 보존하고, 룬 배치의 전체 초안·원자 저장·되돌리기, 현재 형태 기준 가이드와 잠금 시각화, 보관/배치 룬 회전·회수, 얇은 벌집과 투명 보석 표현, 효과 합산, 인벤토리 중 공격 연출 억제 규칙을 추가했습니다.",
          "supersedes": "product-planning-change-log@v009",
          "sources": [
            "wiki/content/pages/product-planning-change-log/v009.md",
            "wiki/content/pages/inventory-item-concept/v019.md",
            "docs/gameplay/inventory-rune-ui-spec.md",
            "src/ReplicatedStorage/InventoryV2/RuneBoardModel.luau",
            "src/ReplicatedStorage/InventoryV2/RuneDragVisualState.luau",
            "src/ReplicatedStorage/InventoryV2/RuneEffectSummary.luau",
            "src/ReplicatedStorage/InventoryV2/Screen.luau",
            "src/ReplicatedStorage/BackpackUI/EquippedWeaponBillboard.luau",
            "src/ReplicatedStorage/BackpackUI/EquippedWeaponVisualLayout.luau",
            "src/ReplicatedStorage/BackpackUI/WeaponAimResolver.luau",
            "src/ReplicatedStorage/BackpackUI/WeaponAttackVFX.luau",
            "src/ReplicatedStorage/Combat/WeaponCombatConfig.luau",
            "src/ReplicatedStorage/Combat/WeaponTargeting.luau",
            "src/ServerScriptService/WeaponCombatService.luau",
            "wiki/content/media/inventory-item-concept/v019/studio-rune-guide-locked.jpg",
            "wiki/content/media/inventory-item-concept/v019/studio-rune-invalid-draft.jpg",
            "wiki/content/media/inventory-item-concept/v019/studio-rune-effect-summary.jpg"
          ],
          "related": [
            "weapon-combat-presentation",
            "inventory-item-concept",
            "synergy-icon-system",
            "backpack-combat-stat-database",
            "development-wiki",
            "project-overview"
          ],
          "validation": [
            "./tools/test_inventory_v2.sh: InventoryV2.spec ok",
            "python3 -m unittest tests.test_inventory_v2_ui tests.test_native_backpack_ui: 12 tests passed",
            "luau-compile: Screen, RuneBoardModel, RuneDragVisualState, RuneEffectSummary, VisualTokens, InventoryV2Service 통과",
            "Roblox Studio Play · iPhone 17 Pro와 iPhone 7 portrait: 룬 편집 핵심 터치 흐름과 반응형 배치 확인",
            "Studio MCP 진단: 잘못된 초안 저장 거절과 서버 상태 보존, 잠금 영역, 효과 합산, 공격 연출 억제 확인",
            "python3 tools/wiki.py build/check 통과",
            "python3 -m unittest tests.test_wiki tests.test_repository_policy: 19 tests passed"
          ],
          "body": "# 제품 기획 변경 원장\n\n## 목적과 기록 원칙\n\n이 페이지는 구현 파일 목록이 아니라 ProjectBackpack의 제품 방향이 왜 바뀌었고 지금 어떤\n규칙이 유효한지를 누적 보존합니다. 플레이어 또는 운영자가 경험하는 제품·게임플레이·UX·\n콘텐츠·아트·플랫폼 규칙이 추가, 변경, 대체 또는 폐기될 때 기록합니다. 동작을 바꾸지 않는\n내부 리팩터링은 원장 대상이 아닙니다.\n\n각 결정은 안정적인 ID를 가집니다. 이후 규칙이 달라지면 이미 커밋된 항목을 고치거나 지우지\n않고 새 버전에 후속 항목을 추가해 이전 ID와 관계를 명시합니다. 최신 버전은 과거 원장과\n현재 유효 규칙을 모두 포함하며, 실제 제품 변경·주제별 위키·검증 증거와 같은 커밋에서\n발행합니다.\n\n## 현재 유효 규칙\n\n### PBP-INV-001 — 인벤토리에는 명확한 이탈과 호환 토글이 있다\n\n모바일 인벤토리는 우측 최상단 닫기 버튼으로 메인 화면에 복귀합니다. PC 호환 경로의 Tab\n토글은 진단 호환으로 남지만 현재 제품 UI 완료 기준은 모바일입니다.\n\n### PBP-ITEMDB-002 — 최종 48종이 ItemDB와 런타임의 단일 활성 집합이다\n\n과거 90종과 특수 아이템 미디어는 활성 원본·공개 DB·생성 런타임에서 제거합니다. 무기 14종과\n방어구·장신구 34종의 이름, 사각 점유, 카툰 아이콘과 Roblox 자산 참조를 ItemDB 원본에서\n생성하며 ON/OFF 경계는 향후 콘텐츠 운영을 위해 유지합니다.\n\n### PBP-CONTENT-001 — 폐기 아이템은 모든 제품 표면에서 함께 제거한다\n\n아이템을 실제로 폐기할 때는 카탈로그·레이아웃·이미지·런타임·공개 DB에서 함께 제거하고\n매니페스트 이력만 보존합니다.\n\n### PBP-DOC-001 — 기획 변경은 커밋 시 누적 원장으로 발행한다\n\n물질적인 제품 기획 변경은 사용자 승인 커밋에서 안정적인 ID와 함께 누적 발행합니다.\n\n### PBP-ACTION-001 — Dash는 방향 잠금 이동과 시작 프레임 고정을 사용한다\n\n기본 Dash는 방향을 잠그고 승인된 캐릭터 프레임을 유지합니다. 룬이 추가 거리와 무적시간을\n제공할 수 있으며 최종 거리는 기본의 250%를 넘지 않습니다.\n\n### PBP-DEV-001 — Studio 무게 제한 테스트는 세션 전용이다\n\n기존 Studio 진단값은 영구 저장을 오염시키지 않습니다. 새 인벤토리 구현에서 무게 시스템을\n유지할지는 별도 결정하지만 진단 데이터 비영구 원칙은 유지합니다.\n\n### PBP-INV-009 — 메인 인벤토리는 사각 장착판과 부위별 제한을 사용한다\n\n유효한 사각 배치가 곧 장착입니다. 무기는 여섯 개, 반지는 두 개이며 같은 정의의 무기·반지는\n중복할 수 없습니다. 머리·귀걸이·목걸이·상의·하의·글러브·신발·벨트는 한 개씩 장착하고\n디아블로식 장비 화면은 같은 상태를 투영합니다.\n\n### PBP-SYNERGY-001 — 가방·시너지 제품 방향은 폐기한다\n\n가방 활성 칸, 육각 메인 인벤토리, 26종 시너지, 시너지 필터와 A/B/C 공간 접촉 효과는 새\n제품 방향에서 사용하지 않습니다. 육각형은 아이템별 룬 보드에만 사용합니다.\n\n### PBP-CONTENT-003 — 알파 장비 활성 집합은 48종이다\n\n무기 14종과 방어구·장신구 34종을 사용합니다. 크기별 두 역할을 두고 반지는 동일 아이템\n중복 금지로 인한 강제 조합을 피하기 위해 네 종류를 둡니다. 특수 아이템과 방패는 현재 48종에\n포함하지 않습니다.\n\n### PBP-RUNE-004 — 아이템마다 후보 10개 중 하나인 427칸 보드를 가진다\n\n각 아이템 정의는 61칸 영역 일곱 개, 총 427칸인 후보 보드 10개를 가집니다. 생성 시 하나를\n균등 선택해 VariantId와 Seed를 영구 저장합니다. 0~6 주등급은 영역을 하나씩 열고, 일곱\n중앙 시작점의 색 등록과 한 칸 간격 연결을 사용합니다. 능력 등급 총량은\n30·45·54·60·67·90·81칸이며 레어는 황금 테두리로 구분합니다.\n\n### PBP-COMBAT-001 — 자동 스킬·방어·확률에는 명시적 캡이 있다\n\n무기 스킬은 해당 무기의 기본 공격 횟수로 자동 발동하고 발사체·도탄·관통·다른 스킬은\n카운터를 늘리지 않습니다. 방패 막기는 최대 100%에서 방어력을 두 배로 적용하고, 방어력\n계산 뒤 최종 피해감소는 최대 50%입니다. 행동 빈도·확률·무적·발사체 수에는 항목별 캡을\n적용하되 선형 공격력·체력 성장은 허용합니다.\n\n### PBP-COMBAT-003 — 여섯 무기는 근접 할로에서 하나의 최근접 적을 정확히 겨눈다\n\n최대 여섯 장착 무기는 머리 가까운 좁은 타원의 왼쪽 세 개·오른쪽 세 개에 같은 간격으로\n배치하며 정중앙 위·아래는 비웁니다. 적이 없을 때는 원화 방향을 유지한 채 각자 부유합니다.\n적이 있으면 장착 집합이 사거리 안의 가장 가까운 생존 적 하나를 공통 후보로 고르고, 각 무기는\n자기 사거리 안에서 실제 칼끝·타격점·총구·화살·볼트 발사 방향을 그 적에게 맞춥니다. 오른쪽을\n기본 방향으로 그린 원거리 무기가 왼쪽을 볼 때는 거꾸로 돌리지 않고 수평 반전하며 회전축과\n공격 소켓도 함께 반전합니다. 서버 권위 표적·피해와 여섯 공격 계열은 유지합니다.\n\n### PBP-RUNE-003 — 알파 무기 14종은 고정된 능력 정체성을 가진다\n\n검·창·곡궁·석궁·총·메이스·도끼 각 두 종류는 A1~D2와 E1~E3의 실제 구현 훅을 가집니다.\n목걸이·반지·귀걸이는 호환 무기 전체에 적용되는 전역 레어를, 신발은 추가 대시 레어를\n제공합니다.\n\n### PBP-RUNE-005 — 룬은 34종 도형과 effect 기반 아이콘을 사용한다\n\n1~5칸 룬은 회전·반전을 동일시한 34종 자유 폴리헥스를 사용합니다. 일곱 색은 같은 중립 원화를\n틴트하고, 능력 의미는 실제 전투 effect_id와 1:1인 62종 중앙 아이콘으로 별도 합성합니다.\n드래그는 잡은 칸과 실제 형태를 유지하고 마지막 스냅 가이드를 서버 요청값으로 사용합니다.\n\n### PBP-RUNE-006 — 룬 등급·색·시작점은 일대일이며 배치는 회전만 사용한다\n\nG0~G6 룬은 먹빛·상아·초록·하늘·보라·황금·장미와 일대일입니다. 각 룬은 같은 번호 영역의\n중앙 시작점에서만 처음 등록하고 아이템 등급보다 높은 룬은 등록할 수 없습니다. 런타임 배치는\n60° 회전만 제공하고 별도 반전은 제공하지 않습니다. 첫 배치 전에는 중앙 한 칸, 이후에는 같은\n색 네트워크에서 한 칸 떨어진 연결 전선만 밝게 안내합니다.\n\n### PBP-UI-001 — 인벤토리와 룬 보드는 모바일 고정 작업 흐름을 공유한다\n\n상단 상태, 중앙 작업판, 하단 보관함을 안전 영역 안에 고정합니다. 아이템·룬 합성은 두 재료와\n결과 미리보기 문법을 공유하고 룬 보관함은 상하 스크롤을 사용합니다. 빈 룬 칸의 탭은 상단\n중앙에 능력 정보를 표시합니다.\n\n### PBP-UI-002 — 룬 보드는 문맥을 보존하고 필터는 카드 공간을 침범하지 않는다\n\n장착 룬 회전은 마지막 선택 룬에만 적용하고 확대·축소는 보고 있던 보드 위치를 보존합니다.\n룬 보관함은 `색상 필터`와 `칸 수 필터` 두 버튼만 한 줄에 두며, 보드 위 말풍선에서 G0~G6와\n1~5칸을 각각 다중 선택합니다. 능력 설명은 색상명을 반복하지 않고 옅은 황금색 글자·짙은\n보라색 외곽선으로 등급·능력명·수치를 표시합니다.\n\n### PBP-RUNE-007 — 룬 배치는 전체 초안으로 편집하고 원자적으로 저장한다\n\n룬 추가·이동·회전·회수는 마지막 저장 상태와 분리된 전체 초안을 갱신합니다. 규칙에 어긋난\n룬도 빨간 상태로 계속 편집할 수 있지만 저장은 비활성화됩니다. 서버는 전체 배치를 다시\n검증해 유효할 때만 한 번에 교체하며, 되돌리기는 마지막 저장 상태를 복원합니다. 같은 색\n네트워크는 변을 맞대지 않고 정확히 한 칸 간격을 두며 배치 순서와 무관하게 판정합니다.\n\n### PBP-UI-003 — 룬 보드는 현재 조작 문맥과 잠금 이유를 한 화면에 보여 준다\n\n보관 카드와 배치 룬을 모두 선택·60° 회전할 수 있고, 배치 룬은 이동하거나 보관함으로 회수할\n수 있습니다. 가이드는 현재 잡은 셀·회전·전체 배치를 기준으로 계산하며 유효 칸은 라임색,\n아이템 등급으로 닫힌 칸은 탁한 적갈색, 무효 초안은 빨간색으로 표시합니다. 기존 배치와 같은\n색 능력 아이콘은 드래그 중에도 남깁니다. 벌집은 틈 없는 얇은 선, 룬은 색이 비치는 투명\n크리스털 프레임을 사용하고, 전체 필터는 일부 OFF면 모두 ON·모두 ON이면 모두 OFF로\n동작합니다. 룬 각인 효과 탭은 유효 노드를 효과별로 합산합니다.\n\n### PBP-COMBAT-004 — 인벤토리 작업 중 필드 공격 연출을 일시 정지한다\n\n인벤토리나 룬 작업 화면이 열리면 클라이언트 공격 연출을 즉시 지우고 새 연출을 받지 않으며\n전투 VFX 오버레이를 끕니다. 화면을 닫으면 표현만 다시 허용합니다. 서버 표적·공격·피해와\n장착 상태는 바꾸지 않습니다.\n\n### PBP-ART-002 — 아이템은 사각 점유와 모바일 전투에 맞는 카툰 실루엣을 사용한다\n\n최종 48종 원화는 굵고 밝은 카툰풍으로 통일합니다. 근접 무기는 위쪽, 활·석궁·총은 오른쪽을\n기본 방향으로 두고 발사체와 궤적을 원화에 굽지 않습니다. 그림의 질량과 돌출부가 사각 점유\n형태에 자연스럽게 맞아야 합니다.\n\n## 변경 원장\n\n### PBP-INV-001 — 인벤토리 이탈과 Tab 토글\n\n- 날짜: 2026-08-15\n- 도메인: 인벤토리 접근성 / 플랫폼 입력\n- 변경 유형: changed\n- 이전 규칙: 화면 내부 닫기 버튼과 명확한 PC 토글 경로가 없었습니다.\n- 새 유효 규칙: 모바일 우측 최상단 닫기 버튼을 두고 PC 호환 시 Tab을 인벤토리 전용\n  토글로 사용하며 기본 플레이어 목록을 해제합니다.\n- 근거: 작업 화면에는 안전한 이탈 경로가 필요하며 한 입력이 두 UI를 열면 안 됩니다.\n- 의도한 사용자 경험: 닫는 법을 탐색하지 않고 즉시 메인 화면으로 돌아갑니다.\n- 범위와 제외: 모바일 터치와 PC 입력 호환에 적용하며 PC 레이아웃 품질은 제외합니다.\n- 영향 소스: Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: Luau 테스트, 소스 검사와 최종 Studio 모바일 화면.\n\n### PBP-INV-002 — 배치 보드 범위와 도구 배치\n\n- 날짜: 2026-08-15\n- 도메인: 모바일 배치 보드 / 공간 가독성\n- 변경 유형: changed\n- 이전 규칙: 빈 배치 영역과 우측 도구의 공간 관계가 충분히 드러나지 않았습니다.\n- 새 유효 규칙: 전체 배치 영역에 옅은 육각 격자를 그리고 우측 상단 모드 탭과 우측 하단\n  확대 도구를 위한 반응형 인셋을 둡니다.\n- 근거: 빈 공간도 게임 공간이며 조작 계층과 동시에 보여야 합니다.\n- 의도한 사용자 경험: 배치 가능 범위와 도구 위치를 즉시 이해합니다.\n- 범위와 제외: 모바일 보드와 모드·확대 도구에 적용합니다.\n- 영향 소스: VisualTokens.luau, ScreenRenderer.luau, ScreenState.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: iPhone 17 Pro와 Galaxy A06 Studio Play의 잘림·겹침 검사.\n\n### PBP-INV-003 — 손가락 위 드래그와 단일 목적지 안내\n\n- 날짜: 2026-08-15\n- 도메인: 인벤토리 드래그 / 배치 피드백\n- 변경 유형: changed\n- 이전 규칙: 아이템이 포인터 아래에 남고 여러 강조가 목표 칸과 경쟁했습니다.\n- 새 유효 규칙: 회전된 그림 전체를 포인터 위로 올리고 그림과 목적지 외곽선만 표시합니다.\n- 근거: 드래그 중에는 대상과 내려놓을 위치가 가장 강하게 읽혀야 합니다.\n- 의도한 사용자 경험: 손가락에 가리지 않은 그림으로 정확히 조준합니다.\n- 범위와 제외: 아이템 드래그에 적용하며 그림이 없는 가방은 점유 형태를 사용합니다.\n- 영향 소스: DragPlacementState.luau, Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 포인터 리프트·잡은 칸·outline-only Luau 테스트.\n\n### PBP-INV-004 — 카드·선택 정보와 0.1Kg 정밀도\n\n- 날짜: 2026-08-15\n- 도메인: 아이템 정보 구조 / 무게 규칙\n- 변경 유형: changed\n- 이전 규칙: 무게 표현과 시너지 정렬이 좁은 카드에서 일관되지 않았습니다.\n- 새 유효 규칙: x.xKg 표시와 0.1Kg 판정을 통일하고 시너지를 카드 가운데 정렬합니다.\n- 근거: 화면 표시와 게임 판정은 같은 값을 사용해야 합니다.\n- 의도한 사용자 경험: 좁은 카드에서 핵심 정보와 초과 이유를 빠르게 이해합니다.\n- 범위와 제외: 저장 카드, 선택 정보, 합계와 허용 판정에 적용합니다.\n- 영향 소스: WeightEvaluator.luau, ItemInstanceHydrator.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013, backpack-combat-stat-database\n- 검증과 증거: 무게 양자화·형식·허용 판정 테스트와 카드 소스 검사.\n\n### PBP-INV-005 — 필터와 배치 모드의 직접 연결\n\n- 날짜: 2026-08-15\n- 도메인: 보관함 탐색 / 모드 전환\n- 변경 유형: changed\n- 이전 규칙: 종류 필터와 배치 탭을 따로 바꿔야 했습니다.\n- 새 유효 규칙: 가방 필터는 가방 배치로, 다른 필터는 아이템 배치와 해당 종류로 이동합니다.\n- 근거: 보관함 종류 선택은 다음 배치 대상의 선택입니다.\n- 의도한 사용자 경험: 한 번의 터치로 원하는 목록과 배치 모드에 도달합니다.\n- 범위와 제외: 일반 종류 필터 다섯 개와 배치 모드 연동에 적용합니다.\n- 영향 소스: ScreenState.luau, Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 모드별 필터 상태 Luau 테스트.\n\n### PBP-INV-006 — 시너지·칸 수 고급 필터\n\n- 날짜: 2026-08-15\n- 도메인: 보관함 고급 탐색 / 모바일 UI\n- 변경 유형: added\n- 이전 규칙: 종류 외의 시너지와 점유 칸 범위를 직접 좁힐 수 없었습니다.\n- 새 유효 규칙: 별도 고급 필터에서 26종 시너지 토글과 1~9 칸 범위를 설정합니다.\n- 근거: 조합과 공간 효율은 종류와 독립적인 탐색 기준입니다.\n- 의도한 사용자 경험: 조합과 크기에 맞는 아이템을 빠르게 좁힙니다.\n- 범위와 제외: 가방과 아이템 칸 범위, 아이템의 하나 이상 시너지 일치에 적용합니다.\n- 영향 소스: ScreenState.luau, Screen.luau, ScreenRenderer.luau, VisualTokens.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 사용자 기획 이미지, Studio 캡처와 두 모바일 화면 테스트.\n\n### PBP-ART-001 — 시너지 아이콘 소형 가독성 규칙\n\n- 날짜: 2026-08-15\n- 도메인: 모바일 UI 아트 방향 / 인벤토리 시너지\n- 변경 유형: changed\n- 이전 규칙: 큰 합본을 축소해 실제 카드 크기에서 세부가 합쳐졌습니다.\n- 새 유효 규칙: 약 25px를 승인 기준으로 대표 심볼·투명 배경·최대 3색·216px 경계를\n  사용합니다.\n- 근거: 작은 화면에서 시너지를 구분하는 속도가 우선입니다.\n- 의도한 사용자 경험: 짧게 훑어도 형태와 대표색으로 시너지를 구분합니다.\n- 범위와 제외: 활성 26종 이미지와 재생성 계약에 적용하며 의미와 효과는 바꾸지 않습니다.\n- 영향 소스: Assets/UI/Backpack/SynergyIcons, SynergyCatalog.luau\n- 관련 위키: synergy-icon-system@v001, inventory-item-concept\n- 검증과 증거: 두 Studio 모바일 화면, 26개 자산과 전용 이미지 테스트.\n\n### PBP-CONTENT-001 — FootprintExpansion21 활성 집합 정리\n\n- 날짜: 2026-08-15\n- 도메인: 아이템 콘텐츠 / 공개 데이터\n- 변경 유형: retired\n- 이전 규칙: 확장 시안 21개가 모두 활성 후보로 남았습니다.\n- 새 유효 규칙: 11개만 활성화하고 10개는 제품 데이터와 미디어에서 제거합니다.\n- 근거: 폐기 시안이 남으면 현재 지원 범위를 잘못 전달합니다.\n- 의도한 사용자 경험: 실제 지원하는 아이템만 게임과 공개 DB에서 확인합니다.\n- 범위와 제외: 해당 10개 아이콘·레이아웃·참조를 제거하고 매니페스트 이력은 보존합니다.\n- 영향 소스: FootprintExpansion21, ItemDB 카탈로그·레이아웃·생성 산출물\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: ItemDB 90개 build/check와 생성 산출물 검사.\n\n### PBP-DOC-001 — 누적 제품 기획 변경 원장\n\n- 날짜: 2026-08-15\n- 도메인: 개발 문서 운영\n- 변경 유형: added\n- 이전 규칙: 기획 규칙의 변경을 한곳에서 계속 추적하는 누적 원장이 없었습니다.\n- 새 유효 규칙: 사용자 승인 커밋마다 물질적 변경을 안정적인 ID와 함께 누적합니다.\n- 근거: 구현이 개선돼도 최종 규칙과 변경 이유가 사라지지 않아야 합니다.\n- 의도한 사용자 경험: 위키 한 페이지에서 현재 규칙과 과거 이유를 연속 확인합니다.\n- 범위와 제외: 제품·게임플레이·UX·콘텐츠·아트·플랫폼·운영에 적용하며 순수 리팩터링은\n  제외합니다.\n- 영향 소스: AGENTS.md, wiki/content/pages/product-planning-change-log\n- 관련 위키: inventory-item-concept, development-wiki\n- 검증과 증거: 위키 빌드·체크·정책 테스트와 동일 커밋 발행.\n\n### PBP-ITEMDB-001 — ItemDB ON/OFF 베이크 경계\n\n- 날짜: 2026-08-16\n- 도메인: 아이템 운영 / 게임 배포\n- 변경 유형: added\n- 이전 규칙: ItemDB에 존재하는 모든 아이템이 항상 생성 런타임과 게임 베이크에 포함됐습니다.\n- 새 유효 규칙: 각 아이템은 ON/OFF 상태를 가지며 OFF는 웹 기획 기록에는 남고 다음 베이크와\n  생성 런타임에서는 제외됩니다. ON 복귀 시 기존 형태·이미지·시너지·효과 설정을 유지합니다.\n- 근거: 일시 제외와 영구 폐기를 구분해야 콘텐츠 실험과 롤백이 데이터 삭제 없이 가능합니다.\n- 의도한 사용자 경험: 운영자는 한 번의 버튼으로 게임 노출을 제어하고 플레이어는 승인된\n  활성 아이템만 만납니다.\n- 범위와 제외: ItemDB 웹 편집, 생성 레이아웃, 게임 카탈로그와 Studio 베이크에 적용합니다.\n  OFF 항목의 원본·웹 검색·이미지는 삭제하지 않습니다.\n- 영향 소스: inventory-item-layouts.json, tools/item_db.py, GeneratedItemLayouts.luau,\n  ItemCatalog.luau, wiki/site/app.js\n- 관련 위키: inventory-item-concept@v014\n- 검증과 증거: 390×844 ON 행 캡처, OFF 생성 제외 테스트, ItemDB 90개 정합성 검사.\n\n### PBP-EFFECT-001 — A·B·C 공간 접촉 효과 영역\n\n- 날짜: 2026-08-16\n- 도메인: 아이템 조합 / 공간 효과 / ItemDB 저작\n- 변경 유형: added\n- 이전 규칙: 아이템은 자기 능력치와 점유 형태만 가졌고 주변 아이템 접촉을 표현하는\n  저작 계약이 없었습니다.\n- 새 유효 규칙: 아이템당 A·B·C 최대 세 효과 슬롯을 두고 점유 경계 바깥 Q/R 다섯 칸까지\n  직접 효과 칸을 선택합니다. 각 슬롯은 종류·조건·능력 ID를 가지며 공간 접촉 판정과 실제\n  능력 실행은 분리합니다.\n- 근거: 가방 배치의 공간 관계를 조합 빌드로 확장하되 전투 규칙이 배치 기하에 결합되지\n  않아야 합니다.\n- 의도한 사용자 경험: 플레이어는 아이템을 어디에 놓고 무엇과 맞닿게 하는지로 추가 효과를\n  설계하고, 운영자는 같은 육각 편집 방식으로 규칙을 시각적으로 저작합니다.\n- 범위와 제외: 효과 칸 데이터, 카탈로그 ID, 회전 접촉 후보 평가까지 포함합니다. 조건 논리,\n  능력치 합산, 전투 발현과 시각 효과는 후속 범위입니다.\n- 영향 소스: item-effect-catalog.json, item-effect-slots.md, inventory-item-layouts.json,\n  GeneratedItemLayouts.luau, ItemEffectContactEvaluator.luau, ItemInstanceHydrator.luau,\n  wiki/site/app.js, wiki/site/item-db.js\n- 관련 위키: inventory-item-concept@v014, backpack-combat-stat-database\n- 검증과 증거: 390×844 A/B/C 편집 캡처, 효과 좌표·카탈로그·회전 접촉·드래그 비활성 테스트,\n  Studio의 동일 리비전 90개 레이아웃과 EffectCatalog 확인.\n\n### PBP-ITEMDB-002 — ItemDB 칸 수·시너지·게임 ON 복합 필터\n\n- 날짜: 2026-08-18\n- 도메인: ItemDB 운영 / 웹 탐색\n- 변경 유형: added\n- 이전 규칙: ItemDB는 이름과 대분류만 좁힐 수 있어 점유 크기·시너지·실제 게임 포함\n  집합을 따로 확인해야 했습니다.\n- 새 유효 규칙: 최소·최대 칸 수, 여러 시너지의 OR, 전체/게임 ON 상태를 검색·대분류와\n  AND로 조합하며 스크롤과 효과 카탈로그 접힘 상태를 재렌더링 뒤에도 유지합니다.\n- 근거: 전체 기획 목록과 현재 게임 집합을 한 화면에서 빠르게 비교해야 합니다.\n- 의도한 사용자 경험: “게임에 들어가는 2~4칸 기계 또는 원거리 아이템”을 그대로 필터로\n  표현하고 실제 아이콘으로 결과를 빠르게 훑습니다.\n- 범위와 제외: 공개·로컬 ItemDB 탐색과 시너지 미디어에 적용합니다. 게임 안의 보관함\n  고급 필터 상태와는 별도입니다.\n- 영향 소스: tools/item_db.py, wiki/site/app.js, wiki/site/app.css, wiki/site/item-db-data.js,\n  wiki/site/synergy-media\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: 1440×900 복합 필터 캡처, 8개 ON 결과, 26/26 이미지 로드,\n  catalogOpen=false·scrollY=188 유지, 브라우저 콘솔 오류·경고 0건.\n\n### PBP-INV-007 — 최대 6개 장착 무기와 필드 표시\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 장착 / 필드 가독성\n- 변경 유형: added\n- 이전 규칙: 유효하게 배치된 무기는 보드 안에서만 보였고 장착 목록·한도·필드 표시 계약이\n  없었습니다.\n- 새 유효 규칙: 유효한 Weapon은 최초 배치 순서대로 최대 6개까지 장착되고 2×3 장착 탭,\n  상세 정보·빼기, 모든 캐릭터 위의 방향 반응 이미지로 표시됩니다.\n- 근거: 공간 배치 결과가 실제 플레이 장비로 읽혀야 인벤토리 퍼즐과 전투 준비가 연결됩니다.\n- 의도한 사용자 경험: 여섯 슬롯에서 장착 상태를 관리하고 필드에서 자신의 빌드를 즉시\n  알아봅니다.\n- 범위와 제외: 장착 상태·관리·이미지 표시에 적용합니다. 실제 공격 실행과 무기 모델은\n  후속 범위입니다.\n- 영향 소스: EquippedItemModel.luau, InventoryBoardModel.luau, InventorySerializer.luau,\n  Screen.luau, ScreenRenderer.luau, InventoryService.luau, EquippedWeaponBillboard.luau,\n  CharacterController.luau, DirectionResolver.luau\n- 관련 위키: inventory-item-concept@v015, character-2d-rendering@v009\n- 검증과 증거: iPhone 17 Pro·Galaxy A06 장착 슬롯과 상세 모달 캡처, 6개 한도 Luau 테스트,\n  West 87.8°·East -92.1° 방향 회전, 최종 Studio 콘솔 오류·경고 0건.\n\n### PBP-INV-008 — 상태와 무관한 2px 배치 외곽선\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 시각 계층\n- 변경 유형: changed\n- 이전 규칙: 가방 시너지나 배치 미리보기 상태에 따라 외곽선이 3~7px로 굵어질 수 있었습니다.\n- 새 유효 규칙: 가방·아이템·선택·시너지·유효·무효·미리보기 외곽선은 모두 2px이며 상태는\n  색으로만 구분합니다.\n- 근거: 굵기 변화가 점유 형태를 실제보다 커 보이게 하고 아이템 그림과 경쟁했습니다.\n- 의도한 사용자 경험: 같은 공간 형태를 안정적으로 읽고 색으로 상태만 빠르게 구분합니다.\n- 범위와 제외: 인벤토리 보드와 보관함 선택 외곽선에 적용합니다.\n- 영향 소스: ScreenState.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: 모든 외곽선 경로가 GetBoundaryThickness=2를 사용하는 Luau·소스 회귀 테스트.\n\n### PBP-CONTENT-002 — 게임 ON 32개 승인 집합\n\n- 날짜: 2026-08-18\n- 도메인: 아이템 콘텐츠 / 게임 배포\n- 변경 유형: changed\n- 이전 규칙: 전체 90개 ItemDB가 모두 게임 ON으로 생성 런타임에 포함됐습니다.\n- 새 유효 규칙: 전체 기획 목록 90개를 보존하면서 게임 ON 32개만 생성 런타임과 Studio\n  베이크에 포함합니다. 포켓 네일건은 MACHINE을 제외한 RANGED·GUN, 소화기 철퇴는\n  FORGED 대신 MACHINE을 사용합니다.\n- 근거: 현재 게임에 투입할 승인 콘텐츠와 후속 기획 후보를 데이터 삭제 없이 구분합니다.\n- 의도한 사용자 경험: 플레이어는 승인된 32개만 만나고 운영자는 OFF 58개를 계속 비교·복원할\n  수 있습니다.\n- 범위와 제외: PBP-CONTENT-001의 전체 90개 카탈로그와 폐기 이력은 유지하며 게임 포함 집합만\n  변경합니다.\n- 영향 소스: inventory-item-layouts.json, GeneratedItemLayouts.luau, wiki/site/item-db-data.js\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: ItemDB revision a35b00cf76ec6c75, 전체 90·게임 ON 32 build/check,\n  Studio 같은 소스 베이크와 저장.\n\n### PBP-ACTION-001 — 20스터드 방향 잠금 Dash\n\n- 날짜: 2026-08-18\n- 도메인: 캐릭터 액션 / 이동 / 스프라이트 일관성\n- 변경 유형: changed\n- 이전 규칙: Dash는 0.20초 동안 목표 속도 30 studs/s의 순간 충격을 적용하고 별도 Dash\n  포즈를 재생할 수 있었습니다.\n- 새 유효 규칙: Dash는 0.30초 동안 선택 방향을 잠그고 장애물이 없는 기준 20스터드를\n  이동합니다. WalkSpeed·AutoRotate를 잠근 뒤 복원하고 시작 순간의 완성 프레임을 유지합니다.\n- 근거: 이동 거리를 입력·현재 속도와 분리해 일관되게 만들고, 승인 Run 아틀라스가 레거시\n  모듈식 Walk/Dash 이미지로 바뀌는 비율 변화를 막습니다.\n- 의도한 사용자 경험: Dash 방향이 중간에 꺾이지 않고 같은 거리를 이동하며 캐릭터 모습도\n  한 프레임으로 안정적으로 유지됩니다.\n- 범위와 제외: 클라이언트 Dash 이동·방향·스프라이트에 적용합니다. 장애물 관통이나 별도\n  Dash 공격 판정은 추가하지 않습니다.\n- 영향 소스: character-actions.md, Config.luau, PlayerActionController.luau,\n  CharacterController.luau, test_two_direction_run_build.py\n- 관련 위키: character-2d-rendering@v009\n- 검증과 증거: Galaxy A06 Play에서 19.46스터드 이동, 이동 중 WalkSpeed=0·AutoRotate=false,\n  종료 뒤 16·true 복원, 최종 콘솔 오류·경고 0건.\n\n### PBP-DEV-001 — 세션 전용 허용 무게 테스트 창\n\n- 날짜: 2026-08-18\n- 도메인: Studio 개발 도구 / 데이터 안전\n- 변경 유형: added\n- 이전 규칙: 허용 무게 경계값을 플레이 중 빠르게 바꾸는 전용 진단 UI가 없었습니다.\n- 새 유효 규칙: Studio에서만 F2 창으로 허용 무게를 1Kg씩 조정하고, 영구 저장에는 플레이어의\n  원래 제한값을 사용합니다.\n- 근거: 무게 초과 UI와 배치 경계를 반복 검증하되 진단 값이 사용자 데이터에 남으면 안 됩니다.\n- 의도한 사용자 경험: 개발자는 Play를 다시 시작하지 않고 경계값을 시험하며 플레이어는\n  테스트 기능이나 변조된 저장값을 보지 않습니다.\n- 범위와 제외: Roblox Studio 진단 세션에만 적용하며 모바일 제품 UI 완료 범위가 아닙니다.\n- 영향 소스: DeveloperTestControls.luau, DeveloperTestWindow.luau, Screen.luau,\n  InventoryService.luau\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: Studio-only 생성·서버 거부·원래 제한 직렬화 소스 검사와 Luau 경계 테스트.\n\n### PBP-INV-009 — 사각 장착판과 부위별 중복 제한\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 장착 / 공간 퍼즐\n- 변경 유형: superseded\n- 이전 규칙: PBP-INV-002~007은 육각 가방이 활성 칸을 만들고 시너지·필터와 유효 배치 무기\n  여섯 개를 관리하는 메인 인벤토리를 사용했습니다.\n- 새 유효 규칙: 아이템은 사각 폴리오미노로 배치하며 유효한 배치가 곧 장착입니다. 무기는\n  여섯 개, 반지는 두 개, 나머지 지정 부위는 한 개이며 무기·반지는 같은 DefinitionId를\n  중복할 수 없습니다. 디아블로식 장비창은 권위 배치의 투영입니다.\n- 근거: 장착 제한을 즉시 이해시키면서 공간 퍼즐은 크기와 형태로 유지해야 합니다.\n- 의도한 사용자 경험: 플레이어는 별도 장착 버튼 없이 배치와 장비 요약을 같은 상태로\n  이해합니다.\n- 범위와 제외: 메인 장착판과 장착 부위에 적용하며 특수 아이템·방패 슬롯은 제외합니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016\n- 검증과 증거: 기획 표에서 부위별 장착 수와 48종 콘텐츠 수량 검산.\n\n### PBP-SYNERGY-001 — 가방·시너지 시스템 전면 폐기\n\n- 날짜: 2026-08-18\n- 도메인: 인벤토리 / 시너지 / 아이템 조합\n- 변경 유형: retired\n- 이전 규칙: PBP-INV-004·006, PBP-ART-001과 PBP-EFFECT-001은 가방 활성 칸, 26종\n  시너지, 시너지 필터와 A/B/C 공간 접촉 효과를 제품 규칙으로 사용했습니다.\n- 새 유효 규칙: 가방 활성 칸, 육각 메인 인벤토리, 시너지 판정·아이콘·필터와 공간 접촉\n  효과를 후속 제품에서 사용하지 않습니다. 육각형은 아이템별 룬 보드에만 사용합니다.\n- 근거: 장착 규칙과 룬 성장 퍼즐이 각각 명확한 책임을 가져야 합니다.\n- 의도한 사용자 경험: 메인 장착은 사각형으로 빠르게 읽고 깊은 육각 퍼즐은 선택한 아이템\n  안에서 집중해 풉니다.\n- 범위와 제외: 새 제품 방향을 폐기하며 기존 코드·자산 제거는 후속 구현 커밋에서 수행합니다.\n- 영향 소스: inventory-item-concept@v016, inventory-item-concept@v015\n- 관련 위키: synergy-icon-system@v001, inventory-item-concept@v016\n- 검증과 증거: v016 폐기·제외 목록과 이전 v015 구현 범위 대조.\n\n### PBP-CONTENT-003 — 알파 장비 48종과 점유 크기\n\n- 날짜: 2026-08-18\n- 도메인: 알파 아이템 콘텐츠 / 장착 부위\n- 변경 유형: superseded\n- 이전 규칙: PBP-CONTENT-002의 현행 게임 ON 32개와 과거 90개 카탈로그가 실제 알파\n  배포 집합이었습니다.\n- 새 유효 규칙: 다음 알파 구현 목표는 무기 14종, 방어구·장신구 34종의 48종입니다. 머리·\n  상의·하의는 4/6칸, 귀걸이·반지는 1칸, 목걸이는 2/3칸, 글러브·신발·벨트는 2/4칸을\n  사용합니다.\n- 근거: 부위별 역할과 사각 점유 크기를 함께 선택하게 해 배치 조합을 늘립니다.\n- 의도한 사용자 경험: 작은 장비의 공간 효율과 큰 장비의 역할을 비교해 자신만의 장착판을\n  만듭니다.\n- 범위와 제외: 48종은 기획 목표이며 현재 ItemDB와 Studio ON 32개는 구현 전까지 그대로입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 무기 14 + 부위별 장비 34 = 48 산술 검산.\n\n### PBP-RUNE-001 — Seed 고정 259칸 아이템 룬 보드\n\n- 날짜: 2026-08-18\n- 도메인: 아이템 성장 / 룬 퍼즐 / 합성\n- 변경 유형: added\n- 이전 규칙: 각 아이템에 독립적인 장기 육각 성장판과 룬 조각 합성 계약이 없었습니다.\n- 새 유효 규칙: 각 아이템은 37칸 영역 일곱 개를 0~6등급에 하나씩 열고, 색별 시작점에서\n  젬블로식 한 칸 간격으로 1~5칸 룬을 연결합니다. 전체 능력 위치는 생성 Seed로 고정하며\n  합성 시 기준 아이템의 Seed와 배치를 보존합니다.\n- 근거: 같은 아이템도 경로·룬 모양·색 차단을 고민하는 장기 성장 퍼즐이 필요합니다.\n- 의도한 사용자 경험: 적은 룬으로 원하는 고등급 능력까지 길을 만들고 다른 색의 미래 경로를\n  함께 계획합니다.\n- 범위와 제외: 보드·등급 개방·룬/아이템 합성 계약이며 실제 생성기와 저장 마이그레이션은\n  후속 구현입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016\n- 검증과 증거: 일곱 영역 각각 37칸과 전체 259칸, 영역별 능력 분포 합계 검산.\n\n### PBP-RUNE-002 — 룬 능력 예산·등급 증가·레어 칸\n\n- 날짜: 2026-08-18\n- 도메인: 룬 능력 / 밸런스 / UI 표현\n- 변경 유형: added\n- 이전 규칙: 룬 능력의 등급별 개수·표시 정밀도·레어 판정과 아이템 정체성 보호 규칙이\n  없었습니다.\n- 새 유효 규칙: 전체 능력 등급 개수는 18·27·33·37·41·50·53이며 같은 능력의 실제 등장\n  등급은 UI 표시값까지 엄격히 증가합니다. 구조형 레어는 6등급 영역의 황금 칸에서 한 단위만\n  제공하고 Seed는 위치만 바꿉니다.\n- 근거: 상위 등급의 보상감을 보존하고 좋은 Seed가 총 전투력 자체를 재추첨하지 않게 합니다.\n- 의도한 사용자 경험: 황금 칸을 장기 목표로 삼되 낮은 등급 경로도 매 단계 분명한 성장을\n  제공합니다.\n- 범위와 제외: 일반 POWER/SPEED/CHANCE/TRAIT/GUARD/TIME/RANGE와 레어 표시에 적용합니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 등급·트랙별 칸 수와 259칸 합계, 모든 표시 수치의 단조 증가 수동 검토.\n\n### PBP-COMBAT-001 — 자동 스킬과 비선형 능력 캡\n\n- 날짜: 2026-08-18\n- 도메인: 전투 능력 / 자동 스킬 / 방어 계산\n- 변경 유형: added\n- 이전 규칙: 룬 인플레이션에서 행동 빈도·확률·무적·발사체 수를 안전하게 제한하는 공통\n  계산 순서가 없었습니다.\n- 새 유효 규칙: 자동 스킬은 해당 무기의 기본 공격 실행 횟수로 발동하고 감소는 최대 8회,\n  최소 요구 횟수는 1회입니다. 방패 막기는 최대 100%에서 방어력을 두 배로 적용하며 방어력\n  이후 최종 피해감소는 최대 50%입니다. 이동·공격·대시·회피·회복·보호막 등은 v016의\n  항목별 캡을 사용합니다.\n- 근거: 적 수치 강화로 대응 가능한 선형 인플레이션은 허용하되 무한 행동·완전 무적·확률\n  초과는 막아야 합니다.\n- 의도한 사용자 경험: 큰 숫자 성장은 즐기면서도 공격과 피격의 기본 규칙은 계속 작동합니다.\n- 범위와 제외: 탄약, 탄약 미소모, 소모품 미소모와 스킬 초기화 확률은 사용하지 않습니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: backpack-combat-stat-database, inventory-item-concept@v016\n- 검증과 증거: 계산 순서와 캡·제외 목록의 기획 교차 검토.\n\n### PBP-RUNE-003 — 알파 무기 14종의 보드 정체성\n\n- 날짜: 2026-08-18\n- 도메인: 무기 콘텐츠 / 룬 보드 / 자동 스킬\n- 변경 유형: added\n- 이전 규칙: 알파 무기별 자동 스킬 조건과 259칸 A/B/C/D·레어 배분이 고정되지 않았습니다.\n- 새 유효 규칙: 일곱 무기 형태에 두 종류씩 14개를 두고 각 보드는 A 102, B 71, C 48,\n  D 32, 6등급 로컬 레어 6칸을 가집니다. 목걸이는 발사체, 반지는 자동 스킬 요구 공격,\n  귀걸이는 근거리 사거리의 전역 레어를 제공하고 신발만 추가 대시를 제공합니다.\n- 근거: Seed 위치가 달라도 무기 이름과 공격 방식에 맞는 성장 정체성이 유지돼야 합니다.\n- 의도한 사용자 경험: 같은 룬이라도 연격검·공성 석궁·흡혈 도끼에서 서로 다른 경로와\n  자동 스킬을 강화합니다.\n- 범위와 제외: 14종의 알파 기획 계약이며 최종 아이콘·폴리오미노 좌표·전투 구현은 후속입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 각 무기 레어 합계 6칸과 보드 전체 259칸 산술 검산.\n\n### PBP-ITEMDB-002 — 최종 48종 활성 ItemDB 전환\n\n- 날짜: 2026-08-20\n- 도메인: 아이템 콘텐츠 / 공개 데이터베이스 / 런타임 배포\n- 변경 유형: superseded\n- 대체 대상: PBP-ITEMDB-001, PBP-CONTENT-003의 \"후속 구현 목표\" 상태\n- 이전 규칙: 새 48종은 기획 목표이고 과거 90종과 게임 ON 32종이 구현 전 역사적 현행\n  상태였습니다.\n- 새 유효 규칙: 무기 14종과 방어구·장신구 34종의 최종 48종만 ItemDB 원본, 생성 런타임,\n  공개 미디어의 활성 집합으로 사용합니다. 과거 아이콘과 특수 아이템은 제거하고 ON/OFF\n  운영 경계는 유지합니다.\n- 근거: 기획·로컬 원화·공개 DB·게임 카탈로그의 서로 다른 활성 집합은 이름·점유·자산 ID\n  불일치를 만듭니다.\n- 의도한 사용자 경험: 플레이어와 개발자가 같은 최종 48종의 이미지와 형태만 봅니다.\n- 범위와 제외: 아이템 정의·아이콘·사각 점유·공개 DB에 적용하며 과거 위키 기록은 보존합니다.\n- 영향 소스: inventory-item-art-catalog.md, inventory-item-layouts.json,\n  GeneratedItemLayouts.luau, ItemCatalog.luau, wiki/site/item-db-data.js\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: ItemDB 48종 빌드·체크, 최종 카탈로그와 모바일 공개 DB 캡처.\n\n### PBP-RUNE-004 — 427칸·후보 10개 룬 보드\n\n- 날짜: 2026-08-20\n- 도메인: 아이템 성장 / 룬 보드 / 랜덤화\n- 변경 유형: superseded\n- 대체 대상: PBP-RUNE-001, PBP-RUNE-002\n- 이전 규칙: 모든 아이템은 37칸 영역 일곱 개의 259칸 보드 하나를 Seed로 섞고, 능력 등급\n  총량 18·27·33·37·41·50·53을 사용했습니다.\n- 새 유효 규칙: 각 영역을 반지름 4인 61칸으로 확대해 전체 427칸을 사용합니다. 아이템\n  정의마다 결정론적으로 생성된 후보 10개를 두고 아이템 생성 시 하나를 균등 선택해 VariantId와\n  Seed를 저장합니다. 보드당 능력 등급 총량은 30·45·54·60·67·90·81입니다.\n- 근거: 11개 능력 계열과 레어 노드, 일곱 색 경로를 한 판에서 읽고 우회할 충분한 공간이\n  필요합니다. 후보를 제한하면 다양성과 재현·검증을 함께 확보할 수 있습니다.\n- 의도한 사용자 경험: 같은 아이템에서도 다른 길을 계획하되 총 능력 예산이 운에 따라 바뀌지는\n  않습니다.\n- 범위와 제외: 48종 전체 480개 보드에 적용하며 런타임 재굴림은 허용하지 않습니다.\n- 영향 소스: item-rune-board-database.json, GeneratedRuneBoardDB.luau,\n  rune-board-db-data.js\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 생성기 결과 48×10=480보드, 보드마다 7×61=427칸, revision\n  6e735afdab3d7550.\n\n### PBP-RUNE-005 — 34종 룬 도형과 62종 능력 아이콘\n\n- 날짜: 2026-08-20\n- 도메인: 룬 조각 / 보드 가독성 / 터치 배치\n- 변경 유형: added\n- 이전 규칙: 룬은 1~5칸 젬블로식 조각이라는 개념만 있었고 완전한 형태군, 공용 원화와\n  능력 아이콘의 책임 분리가 고정되지 않았습니다.\n- 새 유효 규칙: 회전·반전을 동일시한 1·1·3·7·22개, 총 34종 자유 폴리헥스를 사용합니다.\n  일곱 색은 빈 중앙 메달의 중립 원화를 틴트하고, 62종 전투 effect 아이콘을 중앙에 별도\n  합성합니다. 드래그는 실제 도형·잡은 칸·회전·반전을 보존하며 마지막 스냅 가이드를 확정값으로\n  사용합니다.\n- 근거: 색·등급·능력 의미를 한 장의 원화에 굽지 않아야 작은 화면에서도 의미를 읽고 데이터\n  변경에도 자산을 재사용할 수 있습니다.\n- 의도한 사용자 경험: 탭하지 않아도 대략적인 능력 종류를 알고, 손가락 아래에서 룬이 튀지\n  않은 채 예상 위치에 놓입니다.\n- 범위와 제외: 룬 카드·보드 노드·드래그 미리보기에 적용하며 상세 수치는 텍스트로 제공합니다.\n- 영향 소스: rune-piece-catalog.json, rune-ability-icon-catalog.json,\n  rune_hex_neutral.png, rune_ability_icons.png, UIPrimitives.luau, Screen.luau\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 형태군 34개, effect 아이콘 62개 생성·누락 검사와 아이콘 시트.\n\n### PBP-UI-001 — 모바일 인벤토리·룬 보드의 단일 작업 흐름\n\n- 날짜: 2026-08-20\n- 도메인: 모바일 UI / 인벤토리 / 룬 보드 / 합성\n- 변경 유형: added\n- 이전 규칙: 사각 장착과 룬 보드의 개별 기획은 있었지만 화면 내 기능 위치, 터치 우선순위,\n  필터·합성·복귀 상태의 완전한 흐름이 없었습니다.\n- 새 유효 규칙: 두 화면은 안전 영역 아래 상단 상태, 중앙 작업판, 하단 보관함을 공유합니다.\n  카드 탭은 룬 보드 진입, 드래그는 배치 또는 합성을 우선합니다. 룬 보관함은 상하 스크롤,\n  한 색 또는 전체를 고르는 7색 필터와 독립 ON/OFF인 1~5칸 필터를 제공하고, 빈 보드 탭은\n  상단 중앙에 능력을 표시합니다.\n- 근거: 모바일에서는 화면 전환마다 탐색 위치와 재료가 사라지면 배치 퍼즐의 비교 비용이\n  지나치게 커집니다.\n- 의도한 사용자 경험: 인벤토리 배치, 아이템 성장, 룬 배치와 합성을 같은 손동작 문법으로\n  왕복합니다.\n- 범위와 제외: 모바일 세로 화면과 터치 입력에 적용하며 PC 밀도·마우스 품질은 현재 완료\n  기준이 아닙니다.\n- 영향 소스: inventory-rune-ui-spec.md, InventoryV2, RuneBoard, InventoryV2Service.luau\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 정적 상태·Luau 테스트, iPhone 17 Pro 400×777 및 iPhone 7 374×666 Studio\n  Play 캡처, 핵심 입력 경로와 콘솔 오류 없음 확인.\n\n### PBP-ART-002 — 최종 아이템 카툰 아트와 방향 규칙\n\n- 날짜: 2026-08-20\n- 도메인: 아이템 아트 / 모바일 전투 / 사각 점유\n- 변경 유형: superseded\n- 대체 대상: PBP-ART-001의 육각·시너지 카드 중심 아트 계약\n- 이전 규칙: 실사풍 또는 고풍스러운 원화와 육각 시너지 카드 문법이 섞였고, 일부 무기는\n  사각 점유와 전투 회전 기준에 맞지 않았습니다.\n- 새 유효 규칙: 48종 전체를 밝고 굵은 카툰풍으로 통일하고 사각 폴리오미노 질량에 맞춥니다.\n  근접 무기는 위쪽, 활·석궁·총은 오른쪽을 기본 방향으로 하며 발사체·공격 궤적은 원화에서\n  제외합니다.\n- 근거: Brotato식 자동 공격에서는 작은 캐릭터 주변을 도는 장비의 방향과 실루엣이 즉시\n  읽혀야 합니다.\n- 의도한 사용자 경험: 보관함·장착판·전투에서 같은 아이템을 형태만으로 알아봅니다.\n- 범위와 제외: 최종 48종 인벤토리 원화에 적용하며 실제 공격 VFX와 투사체는 별도 자산입니다.\n- 영향 소스: Assets/Items/InventoryIcons, inventory-item-art-catalog.md,\n  uploaded_asset_ids.json\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 최종 48종 카탈로그와 공개 ItemDB 캡처.\n\n### PBP-RUNE-006 — 등급·색·시작점 일치와 회전 전용 배치\n\n- 날짜: 2026-08-20\n- 도메인: 룬 성장 / 연결 퍼즐 / 배치 권위\n- 변경 유형: changed\n- 대체 대상: PBP-RUNE-004의 자유 시작 색 등록, PBP-RUNE-005의 런타임 반전 조작\n- 이전 규칙: 룬 색과 합성 등급은 독립 값이었고, 해금된 어느 중앙 시작점에서든 아직 등록하지\n  않은 색을 시작할 수 있으며 플레이 중 회전과 반전을 모두 제공했습니다.\n- 새 유효 규칙: G0~G6 룬 색은 아이템 등급색과 일치합니다. 룬은 같은 번호 영역의 중앙\n  시작점에서만 첫 등록하며 아이템 등급보다 높은 룬은 배치할 수 없습니다. 5칸 합성으로 등급이\n  오르면 다음 등급 색으로 바뀌고 런타임 조작은 60° 회전만 제공합니다. 첫 룬은 중앙 한 칸만\n  덮으면 도형의 어느 셀을 잡았든 유효하며 이후에는 한 칸 간격 연결 전선을 안내합니다.\n- 근거: 색·등급·시작점이 서로 다른 축이면 성장 잠금과 연결 가능 위치를 화면만 보고 예측하기\n  어렵고 저장 데이터가 모순될 수 있습니다.\n- 의도한 사용자 경험: 새 등급을 열 때 같은 색의 새 출발점을 즉시 이해하고, 보드가 보여 주는\n  한 칸의 목표와 실제 도형 가이드만으로 자유로운 첫 배치를 시도합니다.\n- 범위와 제외: 룬 생성·합성·저장 정규화·보드 배치·회전에 적용합니다. 34개 자유 폴리헥스\n  카탈로그의 중복 제거 기준은 유지합니다.\n- 영향 소스: rune-piece-system.md, inventory-rune-ui-spec.md, RuneBoardModel.luau,\n  RuneMergeModel.luau, InventoryV2Service.luau, Screen.luau\n- 관련 위키: inventory-item-concept@v018\n- 검증과 증거: InventoryV2 Luau 테스트의 등급색 불일치 거절, 등급별 시작점, 5칸 합성 색\n  승급, 첫 중앙 목표와 한 칸 간격 전선 검증.\n\n### PBP-UI-002 — 모바일 룬 보드의 문맥 보존 조작과 팝업 필터\n\n- 날짜: 2026-08-20\n- 도메인: 모바일 UI / 룬 보드 / 보관함 탐색\n- 변경 유형: changed\n- 대체 대상: PBP-UI-001의 상시 펼친 단일 색 필터와 보드 중심 재확대\n- 이전 규칙: 색상·칸 수 선택지가 보관함 위에 계속 공간을 차지하고 색상은 한 개 또는 전체만\n  골랐습니다. 확대할 때 보드 중앙으로 시점이 이동했고 회전·반전은 들고 있는 룬에 묶였습니다.\n- 새 유효 규칙: `색상 필터`와 `칸 수 필터` 한 줄 트리거가 각각 다중 선택 말풍선을 열며\n  바깥 탭으로 닫힙니다. 장착 룬 회전은 마지막 선택 룬에만 적용하고 확대·축소는 현재 보던\n  논리 위치를 유지합니다. 상단 능력 설명은 색상명을 빼고 고대비 등급·능력·수치만 표시합니다.\n- 근거: 좁은 세로 화면에서는 선택지를 계속 펼쳐 두는 것보다 실제 룬 카드를 더 많이 보여 주는\n  편이 중요하며, 카메라와 조작 대상이 예기치 않게 바뀌면 퍼즐 경로를 다시 찾아야 합니다.\n- 의도한 사용자 경험: 여러 색·크기를 짧은 팝업에서 조합해 찾고, 보던 위치와 선택 룬을 잃지\n  않은 채 확대·회전하며, 탭 설명을 즉시 읽습니다.\n- 범위와 제외: 모바일 세로 룬 장착 화면과 터치 입력에 적용합니다. PC 화면 밀도와 마우스\n  동등성은 현재 완료 기준이 아닙니다.\n- 영향 소스: inventory-rune-ui-spec.md, Screen.luau, VisualTokens.luau,\n  StorageSort.luau, test_inventory_v2_ui.py\n- 관련 위키: inventory-item-concept@v018\n- 검증과 증거: Galaxy A06 세로 Studio Play에서 필터 팝업·확장된 카드 영역·고대비 능력\n  설명을 확인했고, Studio MCP 진단과 7개 UI 계약 테스트를 통과했습니다.\n\n### PBP-COMBAT-002 — 장착 무기 할로와 서버 권위 자동 공격\n\n- 날짜: 2026-08-20\n- 도메인: 필드 장착 표시 / 자동 전투 / 모바일 연출\n- 변경 유형: superseded\n- 대체 대상: PBP-INV-007의 방향 반응형 필드 표시와 실제 공격 제외 범위\n- 이전 규칙: 최대 여섯 장착 무기는 캐릭터 방향을 따라 회전하는 머리 위 이미지로만 보였고,\n  실제 표적 탐색·공격·피해와 무기별 연출은 후속 범위였습니다.\n- 새 유효 규칙: 적이 없을 때 여섯 무기는 캐릭터 방향과 무관한 이미지 할로로 머리 위에\n  부유합니다. 적이 사거리와 시야 안에 들어오면 서버가 슬롯별 표적·쿨다운·피해를 결정하고\n  클라이언트는 베기·찌르기·투척·활·석궁·총기 연출을 재생합니다. 14종 원화는 ItemDB의\n  정규화된 회전축·타격점·발사구를 공통 계약으로 사용합니다.\n- 근거: 인벤토리의 장착 결과가 실제 전투 행동으로 연결돼야 빌드가 필드에서 살아 움직이며,\n  캐릭터 방향에 무기를 묶지 않아야 대기 할로와 공격 조준의 책임이 충돌하지 않습니다.\n- 의도한 사용자 경험: 적이 없을 때는 자신의 여섯 무기를 안정된 천사 링으로 읽고, 전투가\n  시작되면 각 원화가 직접 날아가거나 발사하는 모습을 통해 무기 종류를 즉시 구분합니다.\n- 범위와 제외: 14종의 기본 자동 공격, 서버 피해와 공통 연출 계열까지 적용합니다. 도탄·산탄·\n  관통·흡혈·반격 같은 고유 능력, 룬 변형, 음향과 적 피격 애니메이션은 후속 범위입니다.\n- 영향 소스: alpha-item-definitions.json, inventory-item-layouts.json,\n  EquippedWeaponBillboard.luau, WeaponAttackVFX.luau, WeaponCombatConfig.luau,\n  WeaponCombatService.luau, DamageResolver.luau\n- 관련 위키: weapon-combat-presentation@v001, inventory-item-concept@v018,\n  character-2d-rendering@v009\n- 검증과 증거: 14개 무기 공격 발생, 적 없음 공격 증가 0, iPhone 17 Pro `401×776`과\n  Galaxy A06 `359×718` Studio Play, 45개 연출 수신·누락 0·객체 수 736 고정·서버 피해와\n  콘솔 오류 없음 확인.\n\n### PBP-COMBAT-003 — 근접 여섯 무기 할로와 소켓 기준 최근접 적 조준\n\n- 날짜: 2026-08-21\n- 도메인: 필드 장착 표시 / 자동 전투 조준 / 모바일 연출\n- 변경 유형: changed\n- 대체 대상: PBP-COMBAT-002의 넓은 할로 위치와 기본 원화 회전 조준 규칙\n- 이전 규칙: 여섯 무기는 캐릭터 머리 위 할로에 부유하고 서버 권위 자동 공격으로 전환했지만,\n  캐릭터와의 최대 거리, 좌우 세 슬롯의 정확한 배치, 모든 무기의 공통 표적과 왼쪽을 보는\n  비대칭 원화 처리 방식은 고정되지 않았습니다.\n- 새 유효 규칙: 여섯 무기를 머리 가까운 좁은 타원의 왼쪽 세 개·오른쪽 세 개에 같은 현 길이\n  간격으로 두고 정중앙 위·아래는 비웁니다. 장착 집합은 사거리 안에서 가장 가까운 생존 적\n  하나를 공통 후보로 선택하고 각 무기는 자기 사거리 안에서 실제 칼끝·타격점·총구·화살·볼트\n  발사 방향을 맞춥니다. 오른쪽 기본 원화가 왼쪽 표적을 보면 상하 회전 대신 수평 반전하며\n  회전축·타격점·발사 소켓도 함께 반전합니다. 적이 없으면 기본 방향의 독립 부유로 돌아갑니다.\n- 근거: 무기가 캐릭터에서 멀리 흩어지면 장착 관계와 천사 링 실루엣이 사라지고, 왼쪽 적을\n  단순 각도 회전으로 겨누면 총과 활이 거꾸로 보이며 총구·발사체 위치도 원화와 어긋납니다.\n- 의도한 사용자 경험: 작은 모바일 화면에서도 여섯 장비를 캐릭터 소유의 한 묶음으로 즉시\n  읽고, 전투에서는 모든 무기가 같은 위협을 각자의 실제 끝점으로 노리는 장면을 봅니다.\n- 범위와 제외: 대기 할로 위치, 최근접 표적 선택, 무기별 사거리, 대기·공격 조준과 좌측 수평\n  반전에 적용합니다. 도탄·산탄·관통 같은 다중 표적 고유 능력과 음향은 후속 범위입니다.\n- 영향 소스: EquippedWeaponVisualLayout.luau, EquippedWeaponBillboard.luau,\n  WeaponAimResolver.luau, WeaponAttackVFX.luau, WeaponTargeting.luau,\n  WeaponCombatService.luau\n- 관련 위키: weapon-combat-presentation@v002\n- 검증과 증거: 사용자 좌표 측정 이미지, iPhone 17 Pro `401×776`의 여섯 무기 근접 할로와\n  좌측 표적 수평 반전 공격 캡처, Galaxy A06 `359×718` 반응형 여백 검사, 관련 테스트와\n  Studio 콘솔 오류 없음 확인.\n\n### PBP-RUNE-007 — 전체 초안과 원자 저장 룬 편집\n\n- 날짜: 2026-08-21\n- 도메인: 룬 연결 규칙 / 저장 권위 / 모바일 편집\n- 변경 유형: changed\n- 대체 대상: PBP-RUNE-006의 즉시 유효 배치 중심 조작\n- 이전 규칙: 매 조작이 그 순간 유효해야 배치 상태로 남을 수 있어 회전 중 잠시 잘못된 형태를\n  확인하거나 여러 룬을 함께 고친 뒤 저장하는 흐름이 없었습니다.\n- 새 유효 규칙: 룬 추가·이동·회전·회수는 전체 초안을 편집합니다. 무효 룬은 빨간색으로 남겨\n  수정할 수 있지만 저장은 비활성화되며, 서버가 전체 배치를 다시 검증한 뒤 유효한 초안만\n  원자적으로 저장합니다. 되돌리기는 마지막 저장 상태를 복원합니다. 한 칸 간격 연결은 배치\n  순서가 아니라 완성된 같은 색 네트워크 전체를 기준으로 판정합니다.\n- 근거: 퍼즐은 중간 단계가 아니라 최종 형태를 설계하는 작업이며, 클라이언트 조작 순서가 같은\n  완성 배치의 합법성을 바꾸면 안 됩니다.\n- 의도한 사용자 경험: 자유롭게 돌리고 옮기며 실패 이유를 본 뒤, 만족한 전체 배치만 안전하게\n  확정합니다.\n- 범위와 제외: 보관/배치 룬의 이동·회전·회수, 저장·되돌리기, 클라이언트와 서버의 전체 배치\n  검증에 적용합니다. 룬 합성 규칙은 바꾸지 않습니다.\n- 영향 소스: inventory-rune-ui-spec.md, RuneBoardModel.luau, RuneDragVisualState.luau,\n  Screen.luau, InventoryV2Service.luau\n- 관련 위키: inventory-item-concept@v019\n- 검증과 증거: 한 칸 간격 5칸 도형 배치, 잘못된 회전의 빨간 상태와 저장 비활성, 악성 저장\n  요청 거절 뒤 서버 상태 보존, 제거·되돌리기 Studio 진단과 InventoryV2 테스트.\n\n### PBP-UI-003 — 현재 형태 가이드와 정돈된 룬 보드 시각 언어\n\n- 날짜: 2026-08-21\n- 도메인: 모바일 룬 보드 / 터치 상호작용 / 정보 시각화\n- 변경 유형: changed\n- 대체 대상: PBP-UI-002의 선택 회전·필터·능력 설명 흐름\n- 이전 규칙: 연결 가이드가 현재 도형의 잡은 셀과 회전을 충분히 반영하지 않았고 잠긴 영역과\n  빈 영역의 차이가 드러나지 않았습니다. 보관 카드에서 방향을 미리 정하거나 배치 룬을\n  보관함으로 회수하기 어려웠고, 두꺼운 육각 테두리와 불투명 룬 장식이 색과 능력을 방해했습니다.\n- 새 유효 규칙: 현재 잡은 셀·회전·전체 배치를 기준으로 모든 후보를 계산합니다. 유효 칸은\n  라임색, 잠긴 칸은 탁한 적갈색, 무효 초안은 빨간색으로 표시하며 기존 룬과 같은 색 능력\n  아이콘은 유지합니다. 보관 카드와 배치 룬은 선택·60° 회전하고 배치 룬은 이동·회수합니다.\n  틈 없는 얇은 벌집과 색이 비치는 투명 크리스털 룬을 사용하고, 전체 필터는 모두 ON 상태에서\n  모두 OFF로 반전할 수 있습니다. 룬 각인 효과 탭은 유효 노드를 효과별로 합산합니다.\n- 근거: 플레이어가 손을 놓기 전에 가능 위치와 불가능 이유, 현재 활성 보상, 도형 방향을 함께\n  읽어야 최적 경로를 계산할 수 있습니다.\n- 의도한 사용자 경험: 보드 위 정보를 한눈에 구분하고, 카드에서 방향을 준비해 원하는 위치로\n  옮긴 뒤 실제 얻는 효과까지 같은 화면 흐름에서 확인합니다.\n- 범위와 제외: 모바일 세로 룬 보드와 보관함, 필터, 효과 요약에 적용합니다. PC 화면 품질과\n  마우스 동등성은 현재 완료 기준이 아닙니다.\n- 영향 소스: rune_hex_neutral.png, rune_piece_crystal.png, Assets.luau,\n  UIPrimitives.luau, VisualTokens.luau, RuneEffectSummary.luau, Screen.luau\n- 관련 위키: inventory-item-concept@v019\n- 검증과 증거: iPhone 17 Pro 세로의 연결·잠금 가이드, 잘못된 초안, 효과 합산 Studio\n  캡처와 iPhone 7 세로 반응형 검사.\n\n### PBP-COMBAT-004 — 인벤토리 중 공격 연출 억제\n\n- 날짜: 2026-08-21\n- 도메인: 모바일 인벤토리 / 전투 표현 계층\n- 변경 유형: added\n- 이전 규칙: 필드 공격 테스트 루프와 공격 연출이 인벤토리보다 높은 레이어에서 계속 재생되어\n  작업 영역을 뚫고 보일 수 있었습니다.\n- 새 유효 규칙: 인벤토리·룬 화면이 열리면 진행 중 클라이언트 공격 연출을 즉시 지우고 새\n  연출을 받지 않으며 오버레이를 비활성화합니다. 화면을 닫으면 표현만 다시 허용합니다.\n- 근거: 전투 준비 작업에서는 퍼즐과 정보가 시각 우선권을 가져야 하며, 화면을 덮는 것만으로는\n  불필요한 연출 루프가 계속 실행됩니다.\n- 의도한 사용자 경험: 인벤토리에 들어오는 순간 필드 공격 연출이 완전히 멈춰 룬 배치에\n  집중하고, 나가면 자연스럽게 전투 표현으로 돌아갑니다.\n- 범위와 제외: 클라이언트 무기 공격 VFX와 오버레이에 적용합니다. 서버의 공격 판정·피해·\n  장착 상태는 변경하지 않습니다.\n- 영향 소스: Screen.luau, WeaponAttackVFX.luau\n- 관련 위키: inventory-item-concept@v019, weapon-combat-presentation@v002\n- 검증과 증거: Studio Play에서 InventoryV2Screen 활성 중 WeaponCombatVFX\n  Enabled=false, Suppressed=true, 활성 공격·투사체·충돌 0개 확인.\n",
          "source_path": "wiki/content/pages/product-planning-change-log/v010.md",
          "timeline_order": 42
        },
        {
          "id": "product-planning-change-log",
          "title": "제품 기획 변경 원장",
          "summary": "누적 원장을 보존하면서 여섯 장착 무기를 캐릭터 가까운 좌우 할로로 고정하고, 공통 최근접 적을 실제 칼끝·총구·발사 방향으로 겨누며 좌측 표적에는 원화를 수평 반전하는 현재 제품 규칙을 확정했습니다.",
          "status": "active",
          "category": "planning",
          "tags": [
            "planning",
            "decision-log",
            "product",
            "inventory",
            "equipment",
            "rune-board",
            "weapon",
            "combat",
            "mobile",
            "documentation"
          ],
          "created_at": "2026-08-15",
          "updated_at": "2026-08-21",
          "authors": [
            "Codex"
          ],
          "version": 9,
          "change_type": "updated",
          "change_summary": "v008까지의 누적 결정을 보존하고, 장착 무기 할로의 거리·여섯 슬롯 배치와 최근접 적 조준·좌측 수평 반전 규칙을 현재 전투 표현 계약으로 변경했습니다.",
          "supersedes": "product-planning-change-log@v008",
          "sources": [
            "wiki/content/pages/product-planning-change-log/v008.md",
            "wiki/content/pages/weapon-combat-presentation/v002.md",
            "src/ReplicatedStorage/BackpackUI/EquippedWeaponBillboard.luau",
            "src/ReplicatedStorage/BackpackUI/EquippedWeaponVisualLayout.luau",
            "src/ReplicatedStorage/BackpackUI/WeaponAimResolver.luau",
            "src/ReplicatedStorage/BackpackUI/WeaponAttackVFX.luau",
            "src/ReplicatedStorage/Combat/WeaponCombatConfig.luau",
            "src/ReplicatedStorage/Combat/WeaponTargeting.luau",
            "src/ServerScriptService/WeaponCombatService.luau",
            "wiki/content/media/weapon-combat-presentation/v002/player-distance-reference.png",
            "wiki/content/media/weapon-combat-presentation/v002/idle-close-halo.jpg",
            "wiki/content/media/weapon-combat-presentation/v002/left-target-mirrored-attack.jpg"
          ],
          "related": [
            "weapon-combat-presentation",
            "inventory-item-concept",
            "synergy-icon-system",
            "backpack-combat-stat-database",
            "development-wiki",
            "project-overview"
          ],
          "validation": [
            "python3 -m unittest tests.test_weapon_targeting: 4 tests passed",
            "python3 -m unittest discover -s tests -p 'test_*.py' (sprite pipeline 제외): 100 tests passed",
            "BackpackUI 정적 계약과 InventoryV2 Luau 회귀: passed",
            "luau-compile: 장착 표시·조준 해석·클라이언트 VFX·전투 설정·서버 전투 모듈 통과",
            "python3 tools/item_db.py check: 48 items, revision af58727fe90523ed",
            "Roblox Studio Play · iPhone 17 Pro portrait · 401×776, Galaxy A06 portrait · 359×718: 근접 6무기 할로·최근접 적 조준·좌측 수평 반전·적 없음 부유 확인; 콘솔 오류 없음"
          ],
          "body": "# 제품 기획 변경 원장\n\n## 목적과 기록 원칙\n\n이 페이지는 구현 파일 목록이 아니라 ProjectBackpack의 제품 방향이 왜 바뀌었고 지금 어떤\n규칙이 유효한지를 누적 보존합니다. 플레이어 또는 운영자가 경험하는 제품·게임플레이·UX·\n콘텐츠·아트·플랫폼 규칙이 추가, 변경, 대체 또는 폐기될 때 기록합니다. 동작을 바꾸지 않는\n내부 리팩터링은 원장 대상이 아닙니다.\n\n각 결정은 안정적인 ID를 가집니다. 이후 규칙이 달라지면 이미 커밋된 항목을 고치거나 지우지\n않고 새 버전에 후속 항목을 추가해 이전 ID와 관계를 명시합니다. 최신 버전은 과거 원장과\n현재 유효 규칙을 모두 포함하며, 실제 제품 변경·주제별 위키·검증 증거와 같은 커밋에서\n발행합니다.\n\n## 현재 유효 규칙\n\n### PBP-INV-001 — 인벤토리에는 명확한 이탈과 호환 토글이 있다\n\n모바일 인벤토리는 우측 최상단 닫기 버튼으로 메인 화면에 복귀합니다. PC 호환 경로의 Tab\n토글은 진단 호환으로 남지만 현재 제품 UI 완료 기준은 모바일입니다.\n\n### PBP-ITEMDB-002 — 최종 48종이 ItemDB와 런타임의 단일 활성 집합이다\n\n과거 90종과 특수 아이템 미디어는 활성 원본·공개 DB·생성 런타임에서 제거합니다. 무기 14종과\n방어구·장신구 34종의 이름, 사각 점유, 카툰 아이콘과 Roblox 자산 참조를 ItemDB 원본에서\n생성하며 ON/OFF 경계는 향후 콘텐츠 운영을 위해 유지합니다.\n\n### PBP-CONTENT-001 — 폐기 아이템은 모든 제품 표면에서 함께 제거한다\n\n아이템을 실제로 폐기할 때는 카탈로그·레이아웃·이미지·런타임·공개 DB에서 함께 제거하고\n매니페스트 이력만 보존합니다.\n\n### PBP-DOC-001 — 기획 변경은 커밋 시 누적 원장으로 발행한다\n\n물질적인 제품 기획 변경은 사용자 승인 커밋에서 안정적인 ID와 함께 누적 발행합니다.\n\n### PBP-ACTION-001 — Dash는 방향 잠금 이동과 시작 프레임 고정을 사용한다\n\n기본 Dash는 방향을 잠그고 승인된 캐릭터 프레임을 유지합니다. 룬이 추가 거리와 무적시간을\n제공할 수 있으며 최종 거리는 기본의 250%를 넘지 않습니다.\n\n### PBP-DEV-001 — Studio 무게 제한 테스트는 세션 전용이다\n\n기존 Studio 진단값은 영구 저장을 오염시키지 않습니다. 새 인벤토리 구현에서 무게 시스템을\n유지할지는 별도 결정하지만 진단 데이터 비영구 원칙은 유지합니다.\n\n### PBP-INV-009 — 메인 인벤토리는 사각 장착판과 부위별 제한을 사용한다\n\n유효한 사각 배치가 곧 장착입니다. 무기는 여섯 개, 반지는 두 개이며 같은 정의의 무기·반지는\n중복할 수 없습니다. 머리·귀걸이·목걸이·상의·하의·글러브·신발·벨트는 한 개씩 장착하고\n디아블로식 장비 화면은 같은 상태를 투영합니다.\n\n### PBP-SYNERGY-001 — 가방·시너지 제품 방향은 폐기한다\n\n가방 활성 칸, 육각 메인 인벤토리, 26종 시너지, 시너지 필터와 A/B/C 공간 접촉 효과는 새\n제품 방향에서 사용하지 않습니다. 육각형은 아이템별 룬 보드에만 사용합니다.\n\n### PBP-CONTENT-003 — 알파 장비 활성 집합은 48종이다\n\n무기 14종과 방어구·장신구 34종을 사용합니다. 크기별 두 역할을 두고 반지는 동일 아이템\n중복 금지로 인한 강제 조합을 피하기 위해 네 종류를 둡니다. 특수 아이템과 방패는 현재 48종에\n포함하지 않습니다.\n\n### PBP-RUNE-004 — 아이템마다 후보 10개 중 하나인 427칸 보드를 가진다\n\n각 아이템 정의는 61칸 영역 일곱 개, 총 427칸인 후보 보드 10개를 가집니다. 생성 시 하나를\n균등 선택해 VariantId와 Seed를 영구 저장합니다. 0~6 주등급은 영역을 하나씩 열고, 일곱\n중앙 시작점의 색 등록과 한 칸 간격 연결을 사용합니다. 능력 등급 총량은\n30·45·54·60·67·90·81칸이며 레어는 황금 테두리로 구분합니다.\n\n### PBP-COMBAT-001 — 자동 스킬·방어·확률에는 명시적 캡이 있다\n\n무기 스킬은 해당 무기의 기본 공격 횟수로 자동 발동하고 발사체·도탄·관통·다른 스킬은\n카운터를 늘리지 않습니다. 방패 막기는 최대 100%에서 방어력을 두 배로 적용하고, 방어력\n계산 뒤 최종 피해감소는 최대 50%입니다. 행동 빈도·확률·무적·발사체 수에는 항목별 캡을\n적용하되 선형 공격력·체력 성장은 허용합니다.\n\n### PBP-COMBAT-003 — 여섯 무기는 근접 할로에서 하나의 최근접 적을 정확히 겨눈다\n\n최대 여섯 장착 무기는 머리 가까운 좁은 타원의 왼쪽 세 개·오른쪽 세 개에 같은 간격으로\n배치하며 정중앙 위·아래는 비웁니다. 적이 없을 때는 원화 방향을 유지한 채 각자 부유합니다.\n적이 있으면 장착 집합이 사거리 안의 가장 가까운 생존 적 하나를 공통 후보로 고르고, 각 무기는\n자기 사거리 안에서 실제 칼끝·타격점·총구·화살·볼트 발사 방향을 그 적에게 맞춥니다. 오른쪽을\n기본 방향으로 그린 원거리 무기가 왼쪽을 볼 때는 거꾸로 돌리지 않고 수평 반전하며 회전축과\n공격 소켓도 함께 반전합니다. 서버 권위 표적·피해와 여섯 공격 계열은 유지합니다.\n\n### PBP-RUNE-003 — 알파 무기 14종은 고정된 능력 정체성을 가진다\n\n검·창·곡궁·석궁·총·메이스·도끼 각 두 종류는 A1~D2와 E1~E3의 실제 구현 훅을 가집니다.\n목걸이·반지·귀걸이는 호환 무기 전체에 적용되는 전역 레어를, 신발은 추가 대시 레어를\n제공합니다.\n\n### PBP-RUNE-005 — 룬은 34종 도형과 effect 기반 아이콘을 사용한다\n\n1~5칸 룬은 회전·반전을 동일시한 34종 자유 폴리헥스를 사용합니다. 일곱 색은 같은 중립 원화를\n틴트하고, 능력 의미는 실제 전투 effect_id와 1:1인 62종 중앙 아이콘으로 별도 합성합니다.\n드래그는 잡은 칸과 실제 형태를 유지하고 마지막 스냅 가이드를 서버 요청값으로 사용합니다.\n\n### PBP-RUNE-006 — 룬 등급·색·시작점은 일대일이며 배치는 회전만 사용한다\n\nG0~G6 룬은 먹빛·상아·초록·하늘·보라·황금·장미와 일대일입니다. 각 룬은 같은 번호 영역의\n중앙 시작점에서만 처음 등록하고 아이템 등급보다 높은 룬은 등록할 수 없습니다. 런타임 배치는\n60° 회전만 제공하고 별도 반전은 제공하지 않습니다. 첫 배치 전에는 중앙 한 칸, 이후에는 같은\n색 네트워크에서 한 칸 떨어진 연결 전선만 밝게 안내합니다.\n\n### PBP-UI-001 — 인벤토리와 룬 보드는 모바일 고정 작업 흐름을 공유한다\n\n상단 상태, 중앙 작업판, 하단 보관함을 안전 영역 안에 고정합니다. 아이템·룬 합성은 두 재료와\n결과 미리보기 문법을 공유하고 룬 보관함은 상하 스크롤을 사용합니다. 빈 룬 칸의 탭은 상단\n중앙에 능력 정보를 표시합니다.\n\n### PBP-UI-002 — 룬 보드는 문맥을 보존하고 필터는 카드 공간을 침범하지 않는다\n\n장착 룬 회전은 마지막 선택 룬에만 적용하고 확대·축소는 보고 있던 보드 위치를 보존합니다.\n룬 보관함은 `색상 필터`와 `칸 수 필터` 두 버튼만 한 줄에 두며, 보드 위 말풍선에서 G0~G6와\n1~5칸을 각각 다중 선택합니다. 능력 설명은 색상명을 반복하지 않고 옅은 황금색 글자·짙은\n보라색 외곽선으로 등급·능력명·수치를 표시합니다.\n\n### PBP-ART-002 — 아이템은 사각 점유와 모바일 전투에 맞는 카툰 실루엣을 사용한다\n\n최종 48종 원화는 굵고 밝은 카툰풍으로 통일합니다. 근접 무기는 위쪽, 활·석궁·총은 오른쪽을\n기본 방향으로 두고 발사체와 궤적을 원화에 굽지 않습니다. 그림의 질량과 돌출부가 사각 점유\n형태에 자연스럽게 맞아야 합니다.\n\n## 변경 원장\n\n### PBP-INV-001 — 인벤토리 이탈과 Tab 토글\n\n- 날짜: 2026-08-15\n- 도메인: 인벤토리 접근성 / 플랫폼 입력\n- 변경 유형: changed\n- 이전 규칙: 화면 내부 닫기 버튼과 명확한 PC 토글 경로가 없었습니다.\n- 새 유효 규칙: 모바일 우측 최상단 닫기 버튼을 두고 PC 호환 시 Tab을 인벤토리 전용\n  토글로 사용하며 기본 플레이어 목록을 해제합니다.\n- 근거: 작업 화면에는 안전한 이탈 경로가 필요하며 한 입력이 두 UI를 열면 안 됩니다.\n- 의도한 사용자 경험: 닫는 법을 탐색하지 않고 즉시 메인 화면으로 돌아갑니다.\n- 범위와 제외: 모바일 터치와 PC 입력 호환에 적용하며 PC 레이아웃 품질은 제외합니다.\n- 영향 소스: Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: Luau 테스트, 소스 검사와 최종 Studio 모바일 화면.\n\n### PBP-INV-002 — 배치 보드 범위와 도구 배치\n\n- 날짜: 2026-08-15\n- 도메인: 모바일 배치 보드 / 공간 가독성\n- 변경 유형: changed\n- 이전 규칙: 빈 배치 영역과 우측 도구의 공간 관계가 충분히 드러나지 않았습니다.\n- 새 유효 규칙: 전체 배치 영역에 옅은 육각 격자를 그리고 우측 상단 모드 탭과 우측 하단\n  확대 도구를 위한 반응형 인셋을 둡니다.\n- 근거: 빈 공간도 게임 공간이며 조작 계층과 동시에 보여야 합니다.\n- 의도한 사용자 경험: 배치 가능 범위와 도구 위치를 즉시 이해합니다.\n- 범위와 제외: 모바일 보드와 모드·확대 도구에 적용합니다.\n- 영향 소스: VisualTokens.luau, ScreenRenderer.luau, ScreenState.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: iPhone 17 Pro와 Galaxy A06 Studio Play의 잘림·겹침 검사.\n\n### PBP-INV-003 — 손가락 위 드래그와 단일 목적지 안내\n\n- 날짜: 2026-08-15\n- 도메인: 인벤토리 드래그 / 배치 피드백\n- 변경 유형: changed\n- 이전 규칙: 아이템이 포인터 아래에 남고 여러 강조가 목표 칸과 경쟁했습니다.\n- 새 유효 규칙: 회전된 그림 전체를 포인터 위로 올리고 그림과 목적지 외곽선만 표시합니다.\n- 근거: 드래그 중에는 대상과 내려놓을 위치가 가장 강하게 읽혀야 합니다.\n- 의도한 사용자 경험: 손가락에 가리지 않은 그림으로 정확히 조준합니다.\n- 범위와 제외: 아이템 드래그에 적용하며 그림이 없는 가방은 점유 형태를 사용합니다.\n- 영향 소스: DragPlacementState.luau, Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 포인터 리프트·잡은 칸·outline-only Luau 테스트.\n\n### PBP-INV-004 — 카드·선택 정보와 0.1Kg 정밀도\n\n- 날짜: 2026-08-15\n- 도메인: 아이템 정보 구조 / 무게 규칙\n- 변경 유형: changed\n- 이전 규칙: 무게 표현과 시너지 정렬이 좁은 카드에서 일관되지 않았습니다.\n- 새 유효 규칙: x.xKg 표시와 0.1Kg 판정을 통일하고 시너지를 카드 가운데 정렬합니다.\n- 근거: 화면 표시와 게임 판정은 같은 값을 사용해야 합니다.\n- 의도한 사용자 경험: 좁은 카드에서 핵심 정보와 초과 이유를 빠르게 이해합니다.\n- 범위와 제외: 저장 카드, 선택 정보, 합계와 허용 판정에 적용합니다.\n- 영향 소스: WeightEvaluator.luau, ItemInstanceHydrator.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013, backpack-combat-stat-database\n- 검증과 증거: 무게 양자화·형식·허용 판정 테스트와 카드 소스 검사.\n\n### PBP-INV-005 — 필터와 배치 모드의 직접 연결\n\n- 날짜: 2026-08-15\n- 도메인: 보관함 탐색 / 모드 전환\n- 변경 유형: changed\n- 이전 규칙: 종류 필터와 배치 탭을 따로 바꿔야 했습니다.\n- 새 유효 규칙: 가방 필터는 가방 배치로, 다른 필터는 아이템 배치와 해당 종류로 이동합니다.\n- 근거: 보관함 종류 선택은 다음 배치 대상의 선택입니다.\n- 의도한 사용자 경험: 한 번의 터치로 원하는 목록과 배치 모드에 도달합니다.\n- 범위와 제외: 일반 종류 필터 다섯 개와 배치 모드 연동에 적용합니다.\n- 영향 소스: ScreenState.luau, Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 모드별 필터 상태 Luau 테스트.\n\n### PBP-INV-006 — 시너지·칸 수 고급 필터\n\n- 날짜: 2026-08-15\n- 도메인: 보관함 고급 탐색 / 모바일 UI\n- 변경 유형: added\n- 이전 규칙: 종류 외의 시너지와 점유 칸 범위를 직접 좁힐 수 없었습니다.\n- 새 유효 규칙: 별도 고급 필터에서 26종 시너지 토글과 1~9 칸 범위를 설정합니다.\n- 근거: 조합과 공간 효율은 종류와 독립적인 탐색 기준입니다.\n- 의도한 사용자 경험: 조합과 크기에 맞는 아이템을 빠르게 좁힙니다.\n- 범위와 제외: 가방과 아이템 칸 범위, 아이템의 하나 이상 시너지 일치에 적용합니다.\n- 영향 소스: ScreenState.luau, Screen.luau, ScreenRenderer.luau, VisualTokens.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 사용자 기획 이미지, Studio 캡처와 두 모바일 화면 테스트.\n\n### PBP-ART-001 — 시너지 아이콘 소형 가독성 규칙\n\n- 날짜: 2026-08-15\n- 도메인: 모바일 UI 아트 방향 / 인벤토리 시너지\n- 변경 유형: changed\n- 이전 규칙: 큰 합본을 축소해 실제 카드 크기에서 세부가 합쳐졌습니다.\n- 새 유효 규칙: 약 25px를 승인 기준으로 대표 심볼·투명 배경·최대 3색·216px 경계를\n  사용합니다.\n- 근거: 작은 화면에서 시너지를 구분하는 속도가 우선입니다.\n- 의도한 사용자 경험: 짧게 훑어도 형태와 대표색으로 시너지를 구분합니다.\n- 범위와 제외: 활성 26종 이미지와 재생성 계약에 적용하며 의미와 효과는 바꾸지 않습니다.\n- 영향 소스: Assets/UI/Backpack/SynergyIcons, SynergyCatalog.luau\n- 관련 위키: synergy-icon-system@v001, inventory-item-concept\n- 검증과 증거: 두 Studio 모바일 화면, 26개 자산과 전용 이미지 테스트.\n\n### PBP-CONTENT-001 — FootprintExpansion21 활성 집합 정리\n\n- 날짜: 2026-08-15\n- 도메인: 아이템 콘텐츠 / 공개 데이터\n- 변경 유형: retired\n- 이전 규칙: 확장 시안 21개가 모두 활성 후보로 남았습니다.\n- 새 유효 규칙: 11개만 활성화하고 10개는 제품 데이터와 미디어에서 제거합니다.\n- 근거: 폐기 시안이 남으면 현재 지원 범위를 잘못 전달합니다.\n- 의도한 사용자 경험: 실제 지원하는 아이템만 게임과 공개 DB에서 확인합니다.\n- 범위와 제외: 해당 10개 아이콘·레이아웃·참조를 제거하고 매니페스트 이력은 보존합니다.\n- 영향 소스: FootprintExpansion21, ItemDB 카탈로그·레이아웃·생성 산출물\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: ItemDB 90개 build/check와 생성 산출물 검사.\n\n### PBP-DOC-001 — 누적 제품 기획 변경 원장\n\n- 날짜: 2026-08-15\n- 도메인: 개발 문서 운영\n- 변경 유형: added\n- 이전 규칙: 기획 규칙의 변경을 한곳에서 계속 추적하는 누적 원장이 없었습니다.\n- 새 유효 규칙: 사용자 승인 커밋마다 물질적 변경을 안정적인 ID와 함께 누적합니다.\n- 근거: 구현이 개선돼도 최종 규칙과 변경 이유가 사라지지 않아야 합니다.\n- 의도한 사용자 경험: 위키 한 페이지에서 현재 규칙과 과거 이유를 연속 확인합니다.\n- 범위와 제외: 제품·게임플레이·UX·콘텐츠·아트·플랫폼·운영에 적용하며 순수 리팩터링은\n  제외합니다.\n- 영향 소스: AGENTS.md, wiki/content/pages/product-planning-change-log\n- 관련 위키: inventory-item-concept, development-wiki\n- 검증과 증거: 위키 빌드·체크·정책 테스트와 동일 커밋 발행.\n\n### PBP-ITEMDB-001 — ItemDB ON/OFF 베이크 경계\n\n- 날짜: 2026-08-16\n- 도메인: 아이템 운영 / 게임 배포\n- 변경 유형: added\n- 이전 규칙: ItemDB에 존재하는 모든 아이템이 항상 생성 런타임과 게임 베이크에 포함됐습니다.\n- 새 유효 규칙: 각 아이템은 ON/OFF 상태를 가지며 OFF는 웹 기획 기록에는 남고 다음 베이크와\n  생성 런타임에서는 제외됩니다. ON 복귀 시 기존 형태·이미지·시너지·효과 설정을 유지합니다.\n- 근거: 일시 제외와 영구 폐기를 구분해야 콘텐츠 실험과 롤백이 데이터 삭제 없이 가능합니다.\n- 의도한 사용자 경험: 운영자는 한 번의 버튼으로 게임 노출을 제어하고 플레이어는 승인된\n  활성 아이템만 만납니다.\n- 범위와 제외: ItemDB 웹 편집, 생성 레이아웃, 게임 카탈로그와 Studio 베이크에 적용합니다.\n  OFF 항목의 원본·웹 검색·이미지는 삭제하지 않습니다.\n- 영향 소스: inventory-item-layouts.json, tools/item_db.py, GeneratedItemLayouts.luau,\n  ItemCatalog.luau, wiki/site/app.js\n- 관련 위키: inventory-item-concept@v014\n- 검증과 증거: 390×844 ON 행 캡처, OFF 생성 제외 테스트, ItemDB 90개 정합성 검사.\n\n### PBP-EFFECT-001 — A·B·C 공간 접촉 효과 영역\n\n- 날짜: 2026-08-16\n- 도메인: 아이템 조합 / 공간 효과 / ItemDB 저작\n- 변경 유형: added\n- 이전 규칙: 아이템은 자기 능력치와 점유 형태만 가졌고 주변 아이템 접촉을 표현하는\n  저작 계약이 없었습니다.\n- 새 유효 규칙: 아이템당 A·B·C 최대 세 효과 슬롯을 두고 점유 경계 바깥 Q/R 다섯 칸까지\n  직접 효과 칸을 선택합니다. 각 슬롯은 종류·조건·능력 ID를 가지며 공간 접촉 판정과 실제\n  능력 실행은 분리합니다.\n- 근거: 가방 배치의 공간 관계를 조합 빌드로 확장하되 전투 규칙이 배치 기하에 결합되지\n  않아야 합니다.\n- 의도한 사용자 경험: 플레이어는 아이템을 어디에 놓고 무엇과 맞닿게 하는지로 추가 효과를\n  설계하고, 운영자는 같은 육각 편집 방식으로 규칙을 시각적으로 저작합니다.\n- 범위와 제외: 효과 칸 데이터, 카탈로그 ID, 회전 접촉 후보 평가까지 포함합니다. 조건 논리,\n  능력치 합산, 전투 발현과 시각 효과는 후속 범위입니다.\n- 영향 소스: item-effect-catalog.json, item-effect-slots.md, inventory-item-layouts.json,\n  GeneratedItemLayouts.luau, ItemEffectContactEvaluator.luau, ItemInstanceHydrator.luau,\n  wiki/site/app.js, wiki/site/item-db.js\n- 관련 위키: inventory-item-concept@v014, backpack-combat-stat-database\n- 검증과 증거: 390×844 A/B/C 편집 캡처, 효과 좌표·카탈로그·회전 접촉·드래그 비활성 테스트,\n  Studio의 동일 리비전 90개 레이아웃과 EffectCatalog 확인.\n\n### PBP-ITEMDB-002 — ItemDB 칸 수·시너지·게임 ON 복합 필터\n\n- 날짜: 2026-08-18\n- 도메인: ItemDB 운영 / 웹 탐색\n- 변경 유형: added\n- 이전 규칙: ItemDB는 이름과 대분류만 좁힐 수 있어 점유 크기·시너지·실제 게임 포함\n  집합을 따로 확인해야 했습니다.\n- 새 유효 규칙: 최소·최대 칸 수, 여러 시너지의 OR, 전체/게임 ON 상태를 검색·대분류와\n  AND로 조합하며 스크롤과 효과 카탈로그 접힘 상태를 재렌더링 뒤에도 유지합니다.\n- 근거: 전체 기획 목록과 현재 게임 집합을 한 화면에서 빠르게 비교해야 합니다.\n- 의도한 사용자 경험: “게임에 들어가는 2~4칸 기계 또는 원거리 아이템”을 그대로 필터로\n  표현하고 실제 아이콘으로 결과를 빠르게 훑습니다.\n- 범위와 제외: 공개·로컬 ItemDB 탐색과 시너지 미디어에 적용합니다. 게임 안의 보관함\n  고급 필터 상태와는 별도입니다.\n- 영향 소스: tools/item_db.py, wiki/site/app.js, wiki/site/app.css, wiki/site/item-db-data.js,\n  wiki/site/synergy-media\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: 1440×900 복합 필터 캡처, 8개 ON 결과, 26/26 이미지 로드,\n  catalogOpen=false·scrollY=188 유지, 브라우저 콘솔 오류·경고 0건.\n\n### PBP-INV-007 — 최대 6개 장착 무기와 필드 표시\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 장착 / 필드 가독성\n- 변경 유형: added\n- 이전 규칙: 유효하게 배치된 무기는 보드 안에서만 보였고 장착 목록·한도·필드 표시 계약이\n  없었습니다.\n- 새 유효 규칙: 유효한 Weapon은 최초 배치 순서대로 최대 6개까지 장착되고 2×3 장착 탭,\n  상세 정보·빼기, 모든 캐릭터 위의 방향 반응 이미지로 표시됩니다.\n- 근거: 공간 배치 결과가 실제 플레이 장비로 읽혀야 인벤토리 퍼즐과 전투 준비가 연결됩니다.\n- 의도한 사용자 경험: 여섯 슬롯에서 장착 상태를 관리하고 필드에서 자신의 빌드를 즉시\n  알아봅니다.\n- 범위와 제외: 장착 상태·관리·이미지 표시에 적용합니다. 실제 공격 실행과 무기 모델은\n  후속 범위입니다.\n- 영향 소스: EquippedItemModel.luau, InventoryBoardModel.luau, InventorySerializer.luau,\n  Screen.luau, ScreenRenderer.luau, InventoryService.luau, EquippedWeaponBillboard.luau,\n  CharacterController.luau, DirectionResolver.luau\n- 관련 위키: inventory-item-concept@v015, character-2d-rendering@v009\n- 검증과 증거: iPhone 17 Pro·Galaxy A06 장착 슬롯과 상세 모달 캡처, 6개 한도 Luau 테스트,\n  West 87.8°·East -92.1° 방향 회전, 최종 Studio 콘솔 오류·경고 0건.\n\n### PBP-INV-008 — 상태와 무관한 2px 배치 외곽선\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 시각 계층\n- 변경 유형: changed\n- 이전 규칙: 가방 시너지나 배치 미리보기 상태에 따라 외곽선이 3~7px로 굵어질 수 있었습니다.\n- 새 유효 규칙: 가방·아이템·선택·시너지·유효·무효·미리보기 외곽선은 모두 2px이며 상태는\n  색으로만 구분합니다.\n- 근거: 굵기 변화가 점유 형태를 실제보다 커 보이게 하고 아이템 그림과 경쟁했습니다.\n- 의도한 사용자 경험: 같은 공간 형태를 안정적으로 읽고 색으로 상태만 빠르게 구분합니다.\n- 범위와 제외: 인벤토리 보드와 보관함 선택 외곽선에 적용합니다.\n- 영향 소스: ScreenState.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: 모든 외곽선 경로가 GetBoundaryThickness=2를 사용하는 Luau·소스 회귀 테스트.\n\n### PBP-CONTENT-002 — 게임 ON 32개 승인 집합\n\n- 날짜: 2026-08-18\n- 도메인: 아이템 콘텐츠 / 게임 배포\n- 변경 유형: changed\n- 이전 규칙: 전체 90개 ItemDB가 모두 게임 ON으로 생성 런타임에 포함됐습니다.\n- 새 유효 규칙: 전체 기획 목록 90개를 보존하면서 게임 ON 32개만 생성 런타임과 Studio\n  베이크에 포함합니다. 포켓 네일건은 MACHINE을 제외한 RANGED·GUN, 소화기 철퇴는\n  FORGED 대신 MACHINE을 사용합니다.\n- 근거: 현재 게임에 투입할 승인 콘텐츠와 후속 기획 후보를 데이터 삭제 없이 구분합니다.\n- 의도한 사용자 경험: 플레이어는 승인된 32개만 만나고 운영자는 OFF 58개를 계속 비교·복원할\n  수 있습니다.\n- 범위와 제외: PBP-CONTENT-001의 전체 90개 카탈로그와 폐기 이력은 유지하며 게임 포함 집합만\n  변경합니다.\n- 영향 소스: inventory-item-layouts.json, GeneratedItemLayouts.luau, wiki/site/item-db-data.js\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: ItemDB revision a35b00cf76ec6c75, 전체 90·게임 ON 32 build/check,\n  Studio 같은 소스 베이크와 저장.\n\n### PBP-ACTION-001 — 20스터드 방향 잠금 Dash\n\n- 날짜: 2026-08-18\n- 도메인: 캐릭터 액션 / 이동 / 스프라이트 일관성\n- 변경 유형: changed\n- 이전 규칙: Dash는 0.20초 동안 목표 속도 30 studs/s의 순간 충격을 적용하고 별도 Dash\n  포즈를 재생할 수 있었습니다.\n- 새 유효 규칙: Dash는 0.30초 동안 선택 방향을 잠그고 장애물이 없는 기준 20스터드를\n  이동합니다. WalkSpeed·AutoRotate를 잠근 뒤 복원하고 시작 순간의 완성 프레임을 유지합니다.\n- 근거: 이동 거리를 입력·현재 속도와 분리해 일관되게 만들고, 승인 Run 아틀라스가 레거시\n  모듈식 Walk/Dash 이미지로 바뀌는 비율 변화를 막습니다.\n- 의도한 사용자 경험: Dash 방향이 중간에 꺾이지 않고 같은 거리를 이동하며 캐릭터 모습도\n  한 프레임으로 안정적으로 유지됩니다.\n- 범위와 제외: 클라이언트 Dash 이동·방향·스프라이트에 적용합니다. 장애물 관통이나 별도\n  Dash 공격 판정은 추가하지 않습니다.\n- 영향 소스: character-actions.md, Config.luau, PlayerActionController.luau,\n  CharacterController.luau, test_two_direction_run_build.py\n- 관련 위키: character-2d-rendering@v009\n- 검증과 증거: Galaxy A06 Play에서 19.46스터드 이동, 이동 중 WalkSpeed=0·AutoRotate=false,\n  종료 뒤 16·true 복원, 최종 콘솔 오류·경고 0건.\n\n### PBP-DEV-001 — 세션 전용 허용 무게 테스트 창\n\n- 날짜: 2026-08-18\n- 도메인: Studio 개발 도구 / 데이터 안전\n- 변경 유형: added\n- 이전 규칙: 허용 무게 경계값을 플레이 중 빠르게 바꾸는 전용 진단 UI가 없었습니다.\n- 새 유효 규칙: Studio에서만 F2 창으로 허용 무게를 1Kg씩 조정하고, 영구 저장에는 플레이어의\n  원래 제한값을 사용합니다.\n- 근거: 무게 초과 UI와 배치 경계를 반복 검증하되 진단 값이 사용자 데이터에 남으면 안 됩니다.\n- 의도한 사용자 경험: 개발자는 Play를 다시 시작하지 않고 경계값을 시험하며 플레이어는\n  테스트 기능이나 변조된 저장값을 보지 않습니다.\n- 범위와 제외: Roblox Studio 진단 세션에만 적용하며 모바일 제품 UI 완료 범위가 아닙니다.\n- 영향 소스: DeveloperTestControls.luau, DeveloperTestWindow.luau, Screen.luau,\n  InventoryService.luau\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: Studio-only 생성·서버 거부·원래 제한 직렬화 소스 검사와 Luau 경계 테스트.\n\n### PBP-INV-009 — 사각 장착판과 부위별 중복 제한\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 장착 / 공간 퍼즐\n- 변경 유형: superseded\n- 이전 규칙: PBP-INV-002~007은 육각 가방이 활성 칸을 만들고 시너지·필터와 유효 배치 무기\n  여섯 개를 관리하는 메인 인벤토리를 사용했습니다.\n- 새 유효 규칙: 아이템은 사각 폴리오미노로 배치하며 유효한 배치가 곧 장착입니다. 무기는\n  여섯 개, 반지는 두 개, 나머지 지정 부위는 한 개이며 무기·반지는 같은 DefinitionId를\n  중복할 수 없습니다. 디아블로식 장비창은 권위 배치의 투영입니다.\n- 근거: 장착 제한을 즉시 이해시키면서 공간 퍼즐은 크기와 형태로 유지해야 합니다.\n- 의도한 사용자 경험: 플레이어는 별도 장착 버튼 없이 배치와 장비 요약을 같은 상태로\n  이해합니다.\n- 범위와 제외: 메인 장착판과 장착 부위에 적용하며 특수 아이템·방패 슬롯은 제외합니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016\n- 검증과 증거: 기획 표에서 부위별 장착 수와 48종 콘텐츠 수량 검산.\n\n### PBP-SYNERGY-001 — 가방·시너지 시스템 전면 폐기\n\n- 날짜: 2026-08-18\n- 도메인: 인벤토리 / 시너지 / 아이템 조합\n- 변경 유형: retired\n- 이전 규칙: PBP-INV-004·006, PBP-ART-001과 PBP-EFFECT-001은 가방 활성 칸, 26종\n  시너지, 시너지 필터와 A/B/C 공간 접촉 효과를 제품 규칙으로 사용했습니다.\n- 새 유효 규칙: 가방 활성 칸, 육각 메인 인벤토리, 시너지 판정·아이콘·필터와 공간 접촉\n  효과를 후속 제품에서 사용하지 않습니다. 육각형은 아이템별 룬 보드에만 사용합니다.\n- 근거: 장착 규칙과 룬 성장 퍼즐이 각각 명확한 책임을 가져야 합니다.\n- 의도한 사용자 경험: 메인 장착은 사각형으로 빠르게 읽고 깊은 육각 퍼즐은 선택한 아이템\n  안에서 집중해 풉니다.\n- 범위와 제외: 새 제품 방향을 폐기하며 기존 코드·자산 제거는 후속 구현 커밋에서 수행합니다.\n- 영향 소스: inventory-item-concept@v016, inventory-item-concept@v015\n- 관련 위키: synergy-icon-system@v001, inventory-item-concept@v016\n- 검증과 증거: v016 폐기·제외 목록과 이전 v015 구현 범위 대조.\n\n### PBP-CONTENT-003 — 알파 장비 48종과 점유 크기\n\n- 날짜: 2026-08-18\n- 도메인: 알파 아이템 콘텐츠 / 장착 부위\n- 변경 유형: superseded\n- 이전 규칙: PBP-CONTENT-002의 현행 게임 ON 32개와 과거 90개 카탈로그가 실제 알파\n  배포 집합이었습니다.\n- 새 유효 규칙: 다음 알파 구현 목표는 무기 14종, 방어구·장신구 34종의 48종입니다. 머리·\n  상의·하의는 4/6칸, 귀걸이·반지는 1칸, 목걸이는 2/3칸, 글러브·신발·벨트는 2/4칸을\n  사용합니다.\n- 근거: 부위별 역할과 사각 점유 크기를 함께 선택하게 해 배치 조합을 늘립니다.\n- 의도한 사용자 경험: 작은 장비의 공간 효율과 큰 장비의 역할을 비교해 자신만의 장착판을\n  만듭니다.\n- 범위와 제외: 48종은 기획 목표이며 현재 ItemDB와 Studio ON 32개는 구현 전까지 그대로입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 무기 14 + 부위별 장비 34 = 48 산술 검산.\n\n### PBP-RUNE-001 — Seed 고정 259칸 아이템 룬 보드\n\n- 날짜: 2026-08-18\n- 도메인: 아이템 성장 / 룬 퍼즐 / 합성\n- 변경 유형: added\n- 이전 규칙: 각 아이템에 독립적인 장기 육각 성장판과 룬 조각 합성 계약이 없었습니다.\n- 새 유효 규칙: 각 아이템은 37칸 영역 일곱 개를 0~6등급에 하나씩 열고, 색별 시작점에서\n  젬블로식 한 칸 간격으로 1~5칸 룬을 연결합니다. 전체 능력 위치는 생성 Seed로 고정하며\n  합성 시 기준 아이템의 Seed와 배치를 보존합니다.\n- 근거: 같은 아이템도 경로·룬 모양·색 차단을 고민하는 장기 성장 퍼즐이 필요합니다.\n- 의도한 사용자 경험: 적은 룬으로 원하는 고등급 능력까지 길을 만들고 다른 색의 미래 경로를\n  함께 계획합니다.\n- 범위와 제외: 보드·등급 개방·룬/아이템 합성 계약이며 실제 생성기와 저장 마이그레이션은\n  후속 구현입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016\n- 검증과 증거: 일곱 영역 각각 37칸과 전체 259칸, 영역별 능력 분포 합계 검산.\n\n### PBP-RUNE-002 — 룬 능력 예산·등급 증가·레어 칸\n\n- 날짜: 2026-08-18\n- 도메인: 룬 능력 / 밸런스 / UI 표현\n- 변경 유형: added\n- 이전 규칙: 룬 능력의 등급별 개수·표시 정밀도·레어 판정과 아이템 정체성 보호 규칙이\n  없었습니다.\n- 새 유효 규칙: 전체 능력 등급 개수는 18·27·33·37·41·50·53이며 같은 능력의 실제 등장\n  등급은 UI 표시값까지 엄격히 증가합니다. 구조형 레어는 6등급 영역의 황금 칸에서 한 단위만\n  제공하고 Seed는 위치만 바꿉니다.\n- 근거: 상위 등급의 보상감을 보존하고 좋은 Seed가 총 전투력 자체를 재추첨하지 않게 합니다.\n- 의도한 사용자 경험: 황금 칸을 장기 목표로 삼되 낮은 등급 경로도 매 단계 분명한 성장을\n  제공합니다.\n- 범위와 제외: 일반 POWER/SPEED/CHANCE/TRAIT/GUARD/TIME/RANGE와 레어 표시에 적용합니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 등급·트랙별 칸 수와 259칸 합계, 모든 표시 수치의 단조 증가 수동 검토.\n\n### PBP-COMBAT-001 — 자동 스킬과 비선형 능력 캡\n\n- 날짜: 2026-08-18\n- 도메인: 전투 능력 / 자동 스킬 / 방어 계산\n- 변경 유형: added\n- 이전 규칙: 룬 인플레이션에서 행동 빈도·확률·무적·발사체 수를 안전하게 제한하는 공통\n  계산 순서가 없었습니다.\n- 새 유효 규칙: 자동 스킬은 해당 무기의 기본 공격 실행 횟수로 발동하고 감소는 최대 8회,\n  최소 요구 횟수는 1회입니다. 방패 막기는 최대 100%에서 방어력을 두 배로 적용하며 방어력\n  이후 최종 피해감소는 최대 50%입니다. 이동·공격·대시·회피·회복·보호막 등은 v016의\n  항목별 캡을 사용합니다.\n- 근거: 적 수치 강화로 대응 가능한 선형 인플레이션은 허용하되 무한 행동·완전 무적·확률\n  초과는 막아야 합니다.\n- 의도한 사용자 경험: 큰 숫자 성장은 즐기면서도 공격과 피격의 기본 규칙은 계속 작동합니다.\n- 범위와 제외: 탄약, 탄약 미소모, 소모품 미소모와 스킬 초기화 확률은 사용하지 않습니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: backpack-combat-stat-database, inventory-item-concept@v016\n- 검증과 증거: 계산 순서와 캡·제외 목록의 기획 교차 검토.\n\n### PBP-RUNE-003 — 알파 무기 14종의 보드 정체성\n\n- 날짜: 2026-08-18\n- 도메인: 무기 콘텐츠 / 룬 보드 / 자동 스킬\n- 변경 유형: added\n- 이전 규칙: 알파 무기별 자동 스킬 조건과 259칸 A/B/C/D·레어 배분이 고정되지 않았습니다.\n- 새 유효 규칙: 일곱 무기 형태에 두 종류씩 14개를 두고 각 보드는 A 102, B 71, C 48,\n  D 32, 6등급 로컬 레어 6칸을 가집니다. 목걸이는 발사체, 반지는 자동 스킬 요구 공격,\n  귀걸이는 근거리 사거리의 전역 레어를 제공하고 신발만 추가 대시를 제공합니다.\n- 근거: Seed 위치가 달라도 무기 이름과 공격 방식에 맞는 성장 정체성이 유지돼야 합니다.\n- 의도한 사용자 경험: 같은 룬이라도 연격검·공성 석궁·흡혈 도끼에서 서로 다른 경로와\n  자동 스킬을 강화합니다.\n- 범위와 제외: 14종의 알파 기획 계약이며 최종 아이콘·폴리오미노 좌표·전투 구현은 후속입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 각 무기 레어 합계 6칸과 보드 전체 259칸 산술 검산.\n\n### PBP-ITEMDB-002 — 최종 48종 활성 ItemDB 전환\n\n- 날짜: 2026-08-20\n- 도메인: 아이템 콘텐츠 / 공개 데이터베이스 / 런타임 배포\n- 변경 유형: superseded\n- 대체 대상: PBP-ITEMDB-001, PBP-CONTENT-003의 \"후속 구현 목표\" 상태\n- 이전 규칙: 새 48종은 기획 목표이고 과거 90종과 게임 ON 32종이 구현 전 역사적 현행\n  상태였습니다.\n- 새 유효 규칙: 무기 14종과 방어구·장신구 34종의 최종 48종만 ItemDB 원본, 생성 런타임,\n  공개 미디어의 활성 집합으로 사용합니다. 과거 아이콘과 특수 아이템은 제거하고 ON/OFF\n  운영 경계는 유지합니다.\n- 근거: 기획·로컬 원화·공개 DB·게임 카탈로그의 서로 다른 활성 집합은 이름·점유·자산 ID\n  불일치를 만듭니다.\n- 의도한 사용자 경험: 플레이어와 개발자가 같은 최종 48종의 이미지와 형태만 봅니다.\n- 범위와 제외: 아이템 정의·아이콘·사각 점유·공개 DB에 적용하며 과거 위키 기록은 보존합니다.\n- 영향 소스: inventory-item-art-catalog.md, inventory-item-layouts.json,\n  GeneratedItemLayouts.luau, ItemCatalog.luau, wiki/site/item-db-data.js\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: ItemDB 48종 빌드·체크, 최종 카탈로그와 모바일 공개 DB 캡처.\n\n### PBP-RUNE-004 — 427칸·후보 10개 룬 보드\n\n- 날짜: 2026-08-20\n- 도메인: 아이템 성장 / 룬 보드 / 랜덤화\n- 변경 유형: superseded\n- 대체 대상: PBP-RUNE-001, PBP-RUNE-002\n- 이전 규칙: 모든 아이템은 37칸 영역 일곱 개의 259칸 보드 하나를 Seed로 섞고, 능력 등급\n  총량 18·27·33·37·41·50·53을 사용했습니다.\n- 새 유효 규칙: 각 영역을 반지름 4인 61칸으로 확대해 전체 427칸을 사용합니다. 아이템\n  정의마다 결정론적으로 생성된 후보 10개를 두고 아이템 생성 시 하나를 균등 선택해 VariantId와\n  Seed를 저장합니다. 보드당 능력 등급 총량은 30·45·54·60·67·90·81입니다.\n- 근거: 11개 능력 계열과 레어 노드, 일곱 색 경로를 한 판에서 읽고 우회할 충분한 공간이\n  필요합니다. 후보를 제한하면 다양성과 재현·검증을 함께 확보할 수 있습니다.\n- 의도한 사용자 경험: 같은 아이템에서도 다른 길을 계획하되 총 능력 예산이 운에 따라 바뀌지는\n  않습니다.\n- 범위와 제외: 48종 전체 480개 보드에 적용하며 런타임 재굴림은 허용하지 않습니다.\n- 영향 소스: item-rune-board-database.json, GeneratedRuneBoardDB.luau,\n  rune-board-db-data.js\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 생성기 결과 48×10=480보드, 보드마다 7×61=427칸, revision\n  6e735afdab3d7550.\n\n### PBP-RUNE-005 — 34종 룬 도형과 62종 능력 아이콘\n\n- 날짜: 2026-08-20\n- 도메인: 룬 조각 / 보드 가독성 / 터치 배치\n- 변경 유형: added\n- 이전 규칙: 룬은 1~5칸 젬블로식 조각이라는 개념만 있었고 완전한 형태군, 공용 원화와\n  능력 아이콘의 책임 분리가 고정되지 않았습니다.\n- 새 유효 규칙: 회전·반전을 동일시한 1·1·3·7·22개, 총 34종 자유 폴리헥스를 사용합니다.\n  일곱 색은 빈 중앙 메달의 중립 원화를 틴트하고, 62종 전투 effect 아이콘을 중앙에 별도\n  합성합니다. 드래그는 실제 도형·잡은 칸·회전·반전을 보존하며 마지막 스냅 가이드를 확정값으로\n  사용합니다.\n- 근거: 색·등급·능력 의미를 한 장의 원화에 굽지 않아야 작은 화면에서도 의미를 읽고 데이터\n  변경에도 자산을 재사용할 수 있습니다.\n- 의도한 사용자 경험: 탭하지 않아도 대략적인 능력 종류를 알고, 손가락 아래에서 룬이 튀지\n  않은 채 예상 위치에 놓입니다.\n- 범위와 제외: 룬 카드·보드 노드·드래그 미리보기에 적용하며 상세 수치는 텍스트로 제공합니다.\n- 영향 소스: rune-piece-catalog.json, rune-ability-icon-catalog.json,\n  rune_hex_neutral.png, rune_ability_icons.png, UIPrimitives.luau, Screen.luau\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 형태군 34개, effect 아이콘 62개 생성·누락 검사와 아이콘 시트.\n\n### PBP-UI-001 — 모바일 인벤토리·룬 보드의 단일 작업 흐름\n\n- 날짜: 2026-08-20\n- 도메인: 모바일 UI / 인벤토리 / 룬 보드 / 합성\n- 변경 유형: added\n- 이전 규칙: 사각 장착과 룬 보드의 개별 기획은 있었지만 화면 내 기능 위치, 터치 우선순위,\n  필터·합성·복귀 상태의 완전한 흐름이 없었습니다.\n- 새 유효 규칙: 두 화면은 안전 영역 아래 상단 상태, 중앙 작업판, 하단 보관함을 공유합니다.\n  카드 탭은 룬 보드 진입, 드래그는 배치 또는 합성을 우선합니다. 룬 보관함은 상하 스크롤,\n  한 색 또는 전체를 고르는 7색 필터와 독립 ON/OFF인 1~5칸 필터를 제공하고, 빈 보드 탭은\n  상단 중앙에 능력을 표시합니다.\n- 근거: 모바일에서는 화면 전환마다 탐색 위치와 재료가 사라지면 배치 퍼즐의 비교 비용이\n  지나치게 커집니다.\n- 의도한 사용자 경험: 인벤토리 배치, 아이템 성장, 룬 배치와 합성을 같은 손동작 문법으로\n  왕복합니다.\n- 범위와 제외: 모바일 세로 화면과 터치 입력에 적용하며 PC 밀도·마우스 품질은 현재 완료\n  기준이 아닙니다.\n- 영향 소스: inventory-rune-ui-spec.md, InventoryV2, RuneBoard, InventoryV2Service.luau\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 정적 상태·Luau 테스트, iPhone 17 Pro 400×777 및 iPhone 7 374×666 Studio\n  Play 캡처, 핵심 입력 경로와 콘솔 오류 없음 확인.\n\n### PBP-ART-002 — 최종 아이템 카툰 아트와 방향 규칙\n\n- 날짜: 2026-08-20\n- 도메인: 아이템 아트 / 모바일 전투 / 사각 점유\n- 변경 유형: superseded\n- 대체 대상: PBP-ART-001의 육각·시너지 카드 중심 아트 계약\n- 이전 규칙: 실사풍 또는 고풍스러운 원화와 육각 시너지 카드 문법이 섞였고, 일부 무기는\n  사각 점유와 전투 회전 기준에 맞지 않았습니다.\n- 새 유효 규칙: 48종 전체를 밝고 굵은 카툰풍으로 통일하고 사각 폴리오미노 질량에 맞춥니다.\n  근접 무기는 위쪽, 활·석궁·총은 오른쪽을 기본 방향으로 하며 발사체·공격 궤적은 원화에서\n  제외합니다.\n- 근거: Brotato식 자동 공격에서는 작은 캐릭터 주변을 도는 장비의 방향과 실루엣이 즉시\n  읽혀야 합니다.\n- 의도한 사용자 경험: 보관함·장착판·전투에서 같은 아이템을 형태만으로 알아봅니다.\n- 범위와 제외: 최종 48종 인벤토리 원화에 적용하며 실제 공격 VFX와 투사체는 별도 자산입니다.\n- 영향 소스: Assets/Items/InventoryIcons, inventory-item-art-catalog.md,\n  uploaded_asset_ids.json\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 최종 48종 카탈로그와 공개 ItemDB 캡처.\n\n### PBP-RUNE-006 — 등급·색·시작점 일치와 회전 전용 배치\n\n- 날짜: 2026-08-20\n- 도메인: 룬 성장 / 연결 퍼즐 / 배치 권위\n- 변경 유형: changed\n- 대체 대상: PBP-RUNE-004의 자유 시작 색 등록, PBP-RUNE-005의 런타임 반전 조작\n- 이전 규칙: 룬 색과 합성 등급은 독립 값이었고, 해금된 어느 중앙 시작점에서든 아직 등록하지\n  않은 색을 시작할 수 있으며 플레이 중 회전과 반전을 모두 제공했습니다.\n- 새 유효 규칙: G0~G6 룬 색은 아이템 등급색과 일치합니다. 룬은 같은 번호 영역의 중앙\n  시작점에서만 첫 등록하며 아이템 등급보다 높은 룬은 배치할 수 없습니다. 5칸 합성으로 등급이\n  오르면 다음 등급 색으로 바뀌고 런타임 조작은 60° 회전만 제공합니다. 첫 룬은 중앙 한 칸만\n  덮으면 도형의 어느 셀을 잡았든 유효하며 이후에는 한 칸 간격 연결 전선을 안내합니다.\n- 근거: 색·등급·시작점이 서로 다른 축이면 성장 잠금과 연결 가능 위치를 화면만 보고 예측하기\n  어렵고 저장 데이터가 모순될 수 있습니다.\n- 의도한 사용자 경험: 새 등급을 열 때 같은 색의 새 출발점을 즉시 이해하고, 보드가 보여 주는\n  한 칸의 목표와 실제 도형 가이드만으로 자유로운 첫 배치를 시도합니다.\n- 범위와 제외: 룬 생성·합성·저장 정규화·보드 배치·회전에 적용합니다. 34개 자유 폴리헥스\n  카탈로그의 중복 제거 기준은 유지합니다.\n- 영향 소스: rune-piece-system.md, inventory-rune-ui-spec.md, RuneBoardModel.luau,\n  RuneMergeModel.luau, InventoryV2Service.luau, Screen.luau\n- 관련 위키: inventory-item-concept@v018\n- 검증과 증거: InventoryV2 Luau 테스트의 등급색 불일치 거절, 등급별 시작점, 5칸 합성 색\n  승급, 첫 중앙 목표와 한 칸 간격 전선 검증.\n\n### PBP-UI-002 — 모바일 룬 보드의 문맥 보존 조작과 팝업 필터\n\n- 날짜: 2026-08-20\n- 도메인: 모바일 UI / 룬 보드 / 보관함 탐색\n- 변경 유형: changed\n- 대체 대상: PBP-UI-001의 상시 펼친 단일 색 필터와 보드 중심 재확대\n- 이전 규칙: 색상·칸 수 선택지가 보관함 위에 계속 공간을 차지하고 색상은 한 개 또는 전체만\n  골랐습니다. 확대할 때 보드 중앙으로 시점이 이동했고 회전·반전은 들고 있는 룬에 묶였습니다.\n- 새 유효 규칙: `색상 필터`와 `칸 수 필터` 한 줄 트리거가 각각 다중 선택 말풍선을 열며\n  바깥 탭으로 닫힙니다. 장착 룬 회전은 마지막 선택 룬에만 적용하고 확대·축소는 현재 보던\n  논리 위치를 유지합니다. 상단 능력 설명은 색상명을 빼고 고대비 등급·능력·수치만 표시합니다.\n- 근거: 좁은 세로 화면에서는 선택지를 계속 펼쳐 두는 것보다 실제 룬 카드를 더 많이 보여 주는\n  편이 중요하며, 카메라와 조작 대상이 예기치 않게 바뀌면 퍼즐 경로를 다시 찾아야 합니다.\n- 의도한 사용자 경험: 여러 색·크기를 짧은 팝업에서 조합해 찾고, 보던 위치와 선택 룬을 잃지\n  않은 채 확대·회전하며, 탭 설명을 즉시 읽습니다.\n- 범위와 제외: 모바일 세로 룬 장착 화면과 터치 입력에 적용합니다. PC 화면 밀도와 마우스\n  동등성은 현재 완료 기준이 아닙니다.\n- 영향 소스: inventory-rune-ui-spec.md, Screen.luau, VisualTokens.luau,\n  StorageSort.luau, test_inventory_v2_ui.py\n- 관련 위키: inventory-item-concept@v018\n- 검증과 증거: Galaxy A06 세로 Studio Play에서 필터 팝업·확장된 카드 영역·고대비 능력\n  설명을 확인했고, Studio MCP 진단과 7개 UI 계약 테스트를 통과했습니다.\n\n### PBP-COMBAT-002 — 장착 무기 할로와 서버 권위 자동 공격\n\n- 날짜: 2026-08-20\n- 도메인: 필드 장착 표시 / 자동 전투 / 모바일 연출\n- 변경 유형: superseded\n- 대체 대상: PBP-INV-007의 방향 반응형 필드 표시와 실제 공격 제외 범위\n- 이전 규칙: 최대 여섯 장착 무기는 캐릭터 방향을 따라 회전하는 머리 위 이미지로만 보였고,\n  실제 표적 탐색·공격·피해와 무기별 연출은 후속 범위였습니다.\n- 새 유효 규칙: 적이 없을 때 여섯 무기는 캐릭터 방향과 무관한 이미지 할로로 머리 위에\n  부유합니다. 적이 사거리와 시야 안에 들어오면 서버가 슬롯별 표적·쿨다운·피해를 결정하고\n  클라이언트는 베기·찌르기·투척·활·석궁·총기 연출을 재생합니다. 14종 원화는 ItemDB의\n  정규화된 회전축·타격점·발사구를 공통 계약으로 사용합니다.\n- 근거: 인벤토리의 장착 결과가 실제 전투 행동으로 연결돼야 빌드가 필드에서 살아 움직이며,\n  캐릭터 방향에 무기를 묶지 않아야 대기 할로와 공격 조준의 책임이 충돌하지 않습니다.\n- 의도한 사용자 경험: 적이 없을 때는 자신의 여섯 무기를 안정된 천사 링으로 읽고, 전투가\n  시작되면 각 원화가 직접 날아가거나 발사하는 모습을 통해 무기 종류를 즉시 구분합니다.\n- 범위와 제외: 14종의 기본 자동 공격, 서버 피해와 공통 연출 계열까지 적용합니다. 도탄·산탄·\n  관통·흡혈·반격 같은 고유 능력, 룬 변형, 음향과 적 피격 애니메이션은 후속 범위입니다.\n- 영향 소스: alpha-item-definitions.json, inventory-item-layouts.json,\n  EquippedWeaponBillboard.luau, WeaponAttackVFX.luau, WeaponCombatConfig.luau,\n  WeaponCombatService.luau, DamageResolver.luau\n- 관련 위키: weapon-combat-presentation@v001, inventory-item-concept@v018,\n  character-2d-rendering@v009\n- 검증과 증거: 14개 무기 공격 발생, 적 없음 공격 증가 0, iPhone 17 Pro `401×776`과\n  Galaxy A06 `359×718` Studio Play, 45개 연출 수신·누락 0·객체 수 736 고정·서버 피해와\n  콘솔 오류 없음 확인.\n\n### PBP-COMBAT-003 — 근접 여섯 무기 할로와 소켓 기준 최근접 적 조준\n\n- 날짜: 2026-08-21\n- 도메인: 필드 장착 표시 / 자동 전투 조준 / 모바일 연출\n- 변경 유형: changed\n- 대체 대상: PBP-COMBAT-002의 넓은 할로 위치와 기본 원화 회전 조준 규칙\n- 이전 규칙: 여섯 무기는 캐릭터 머리 위 할로에 부유하고 서버 권위 자동 공격으로 전환했지만,\n  캐릭터와의 최대 거리, 좌우 세 슬롯의 정확한 배치, 모든 무기의 공통 표적과 왼쪽을 보는\n  비대칭 원화 처리 방식은 고정되지 않았습니다.\n- 새 유효 규칙: 여섯 무기를 머리 가까운 좁은 타원의 왼쪽 세 개·오른쪽 세 개에 같은 현 길이\n  간격으로 두고 정중앙 위·아래는 비웁니다. 장착 집합은 사거리 안에서 가장 가까운 생존 적\n  하나를 공통 후보로 선택하고 각 무기는 자기 사거리 안에서 실제 칼끝·타격점·총구·화살·볼트\n  발사 방향을 맞춥니다. 오른쪽 기본 원화가 왼쪽 표적을 보면 상하 회전 대신 수평 반전하며\n  회전축·타격점·발사 소켓도 함께 반전합니다. 적이 없으면 기본 방향의 독립 부유로 돌아갑니다.\n- 근거: 무기가 캐릭터에서 멀리 흩어지면 장착 관계와 천사 링 실루엣이 사라지고, 왼쪽 적을\n  단순 각도 회전으로 겨누면 총과 활이 거꾸로 보이며 총구·발사체 위치도 원화와 어긋납니다.\n- 의도한 사용자 경험: 작은 모바일 화면에서도 여섯 장비를 캐릭터 소유의 한 묶음으로 즉시\n  읽고, 전투에서는 모든 무기가 같은 위협을 각자의 실제 끝점으로 노리는 장면을 봅니다.\n- 범위와 제외: 대기 할로 위치, 최근접 표적 선택, 무기별 사거리, 대기·공격 조준과 좌측 수평\n  반전에 적용합니다. 도탄·산탄·관통 같은 다중 표적 고유 능력과 음향은 후속 범위입니다.\n- 영향 소스: EquippedWeaponVisualLayout.luau, EquippedWeaponBillboard.luau,\n  WeaponAimResolver.luau, WeaponAttackVFX.luau, WeaponTargeting.luau,\n  WeaponCombatService.luau\n- 관련 위키: weapon-combat-presentation@v002\n- 검증과 증거: 사용자 좌표 측정 이미지, iPhone 17 Pro `401×776`의 여섯 무기 근접 할로와\n  좌측 표적 수평 반전 공격 캡처, Galaxy A06 `359×718` 반응형 여백 검사, 관련 테스트와\n  Studio 콘솔 오류 없음 확인.\n",
          "source_path": "wiki/content/pages/product-planning-change-log/v009.md",
          "timeline_order": 41
        },
        {
          "id": "product-planning-change-log",
          "title": "제품 기획 변경 원장",
          "summary": "누적 원장을 보존하면서 장착 무기 할로를 캐릭터 방향과 분리하고, 최대 여섯 무기의 서버 권위 자동 공격과 무기 종류별 연출을 현재 제품 규칙으로 확정했습니다.",
          "status": "active",
          "category": "planning",
          "tags": [
            "planning",
            "decision-log",
            "product",
            "inventory",
            "equipment",
            "rune-board",
            "weapon",
            "combat",
            "mobile",
            "documentation"
          ],
          "created_at": "2026-08-15",
          "updated_at": "2026-08-20",
          "authors": [
            "Codex"
          ],
          "version": 8,
          "change_type": "updated",
          "change_summary": "v007까지의 누적 결정을 보존하고, 방향 반응형 표시만 담당하던 장착 무기를 독립 할로·서버 권위 자동 공격·여섯 모션 계열로 확장하는 전투 규칙을 추가했습니다.",
          "supersedes": "product-planning-change-log@v007",
          "sources": [
            "wiki/content/pages/product-planning-change-log/v007.md",
            "wiki/content/pages/weapon-combat-presentation/v001.md",
            "docs/gameplay/alpha-item-definitions.json",
            "docs/gameplay/inventory-item-layouts.json",
            "src/ReplicatedStorage/Combat/WeaponCombatConfig.luau",
            "src/ServerScriptService/WeaponCombatService.luau",
            "wiki/content/media/weapon-combat-presentation/v001/idle-halo.jpg",
            "wiki/content/media/weapon-combat-presentation/v001/combat-motion.jpg"
          ],
          "related": [
            "weapon-combat-presentation",
            "inventory-item-concept",
            "synergy-icon-system",
            "backpack-combat-stat-database",
            "development-wiki",
            "project-overview"
          ],
          "validation": [
            "python3 -m unittest discover -s tests -p 'test_*.py': 88 tests passed",
            "bash tools/test_inventory_v2.sh: InventoryV2.spec ok",
            "bash tools/test_backpack_ui.sh: passed",
            "luau-compile: 무기 표시·전투 설정·클라이언트 VFX·서버 피해·Studio 더미 모듈 통과",
            "python3 tools/item_db.py check: 48 items, revision af58727fe90523ed",
            "Roblox Studio Play · iPhone 17 Pro portrait · 401×776, Galaxy A06 portrait · 359×718: 대기 할로·공격 전환·피해 확인; 콘솔 오류 없음"
          ],
          "body": "# 제품 기획 변경 원장\n\n## 목적과 기록 원칙\n\n이 페이지는 구현 파일 목록이 아니라 ProjectBackpack의 제품 방향이 왜 바뀌었고 지금 어떤\n규칙이 유효한지를 누적 보존합니다. 플레이어 또는 운영자가 경험하는 제품·게임플레이·UX·\n콘텐츠·아트·플랫폼 규칙이 추가, 변경, 대체 또는 폐기될 때 기록합니다. 동작을 바꾸지 않는\n내부 리팩터링은 원장 대상이 아닙니다.\n\n각 결정은 안정적인 ID를 가집니다. 이후 규칙이 달라지면 이미 커밋된 항목을 고치거나 지우지\n않고 새 버전에 후속 항목을 추가해 이전 ID와 관계를 명시합니다. 최신 버전은 과거 원장과\n현재 유효 규칙을 모두 포함하며, 실제 제품 변경·주제별 위키·검증 증거와 같은 커밋에서\n발행합니다.\n\n## 현재 유효 규칙\n\n### PBP-INV-001 — 인벤토리에는 명확한 이탈과 호환 토글이 있다\n\n모바일 인벤토리는 우측 최상단 닫기 버튼으로 메인 화면에 복귀합니다. PC 호환 경로의 Tab\n토글은 진단 호환으로 남지만 현재 제품 UI 완료 기준은 모바일입니다.\n\n### PBP-ITEMDB-002 — 최종 48종이 ItemDB와 런타임의 단일 활성 집합이다\n\n과거 90종과 특수 아이템 미디어는 활성 원본·공개 DB·생성 런타임에서 제거합니다. 무기 14종과\n방어구·장신구 34종의 이름, 사각 점유, 카툰 아이콘과 Roblox 자산 참조를 ItemDB 원본에서\n생성하며 ON/OFF 경계는 향후 콘텐츠 운영을 위해 유지합니다.\n\n### PBP-CONTENT-001 — 폐기 아이템은 모든 제품 표면에서 함께 제거한다\n\n아이템을 실제로 폐기할 때는 카탈로그·레이아웃·이미지·런타임·공개 DB에서 함께 제거하고\n매니페스트 이력만 보존합니다.\n\n### PBP-DOC-001 — 기획 변경은 커밋 시 누적 원장으로 발행한다\n\n물질적인 제품 기획 변경은 사용자 승인 커밋에서 안정적인 ID와 함께 누적 발행합니다.\n\n### PBP-ACTION-001 — Dash는 방향 잠금 이동과 시작 프레임 고정을 사용한다\n\n기본 Dash는 방향을 잠그고 승인된 캐릭터 프레임을 유지합니다. 룬이 추가 거리와 무적시간을\n제공할 수 있으며 최종 거리는 기본의 250%를 넘지 않습니다.\n\n### PBP-DEV-001 — Studio 무게 제한 테스트는 세션 전용이다\n\n기존 Studio 진단값은 영구 저장을 오염시키지 않습니다. 새 인벤토리 구현에서 무게 시스템을\n유지할지는 별도 결정하지만 진단 데이터 비영구 원칙은 유지합니다.\n\n### PBP-INV-009 — 메인 인벤토리는 사각 장착판과 부위별 제한을 사용한다\n\n유효한 사각 배치가 곧 장착입니다. 무기는 여섯 개, 반지는 두 개이며 같은 정의의 무기·반지는\n중복할 수 없습니다. 머리·귀걸이·목걸이·상의·하의·글러브·신발·벨트는 한 개씩 장착하고\n디아블로식 장비 화면은 같은 상태를 투영합니다.\n\n### PBP-SYNERGY-001 — 가방·시너지 제품 방향은 폐기한다\n\n가방 활성 칸, 육각 메인 인벤토리, 26종 시너지, 시너지 필터와 A/B/C 공간 접촉 효과는 새\n제품 방향에서 사용하지 않습니다. 육각형은 아이템별 룬 보드에만 사용합니다.\n\n### PBP-CONTENT-003 — 알파 장비 활성 집합은 48종이다\n\n무기 14종과 방어구·장신구 34종을 사용합니다. 크기별 두 역할을 두고 반지는 동일 아이템\n중복 금지로 인한 강제 조합을 피하기 위해 네 종류를 둡니다. 특수 아이템과 방패는 현재 48종에\n포함하지 않습니다.\n\n### PBP-RUNE-004 — 아이템마다 후보 10개 중 하나인 427칸 보드를 가진다\n\n각 아이템 정의는 61칸 영역 일곱 개, 총 427칸인 후보 보드 10개를 가집니다. 생성 시 하나를\n균등 선택해 VariantId와 Seed를 영구 저장합니다. 0~6 주등급은 영역을 하나씩 열고, 일곱\n중앙 시작점의 색 등록과 한 칸 간격 연결을 사용합니다. 능력 등급 총량은\n30·45·54·60·67·90·81칸이며 레어는 황금 테두리로 구분합니다.\n\n### PBP-COMBAT-001 — 자동 스킬·방어·확률에는 명시적 캡이 있다\n\n무기 스킬은 해당 무기의 기본 공격 횟수로 자동 발동하고 발사체·도탄·관통·다른 스킬은\n카운터를 늘리지 않습니다. 방패 막기는 최대 100%에서 방어력을 두 배로 적용하고, 방어력\n계산 뒤 최종 피해감소는 최대 50%입니다. 행동 빈도·확률·무적·발사체 수에는 항목별 캡을\n적용하되 선형 공격력·체력 성장은 허용합니다.\n\n### PBP-COMBAT-002 — 장착 무기는 독립 할로에서 서버 권위 자동 공격으로 전환한다\n\n최대 여섯 장착 무기는 적이 없을 때 캐릭터 방향과 무관한 이미지 할로로 머리 위에 부유합니다.\n적이 사거리와 시야 안에 들어오면 서버가 슬롯별 표적·쿨다운·피해를 결정하고, 클라이언트는\n검·장창·투창·활·석궁·총기 계열에 맞는 이동·발사 연출만 재생합니다. 보관함과 필드 공격은\n같은 ItemDB 원화와 정규화된 회전축·소켓을 사용합니다.\n\n### PBP-RUNE-003 — 알파 무기 14종은 고정된 능력 정체성을 가진다\n\n검·창·곡궁·석궁·총·메이스·도끼 각 두 종류는 A1~D2와 E1~E3의 실제 구현 훅을 가집니다.\n목걸이·반지·귀걸이는 호환 무기 전체에 적용되는 전역 레어를, 신발은 추가 대시 레어를\n제공합니다.\n\n### PBP-RUNE-005 — 룬은 34종 도형과 effect 기반 아이콘을 사용한다\n\n1~5칸 룬은 회전·반전을 동일시한 34종 자유 폴리헥스를 사용합니다. 일곱 색은 같은 중립 원화를\n틴트하고, 능력 의미는 실제 전투 effect_id와 1:1인 62종 중앙 아이콘으로 별도 합성합니다.\n드래그는 잡은 칸과 실제 형태를 유지하고 마지막 스냅 가이드를 서버 요청값으로 사용합니다.\n\n### PBP-RUNE-006 — 룬 등급·색·시작점은 일대일이며 배치는 회전만 사용한다\n\nG0~G6 룬은 먹빛·상아·초록·하늘·보라·황금·장미와 일대일입니다. 각 룬은 같은 번호 영역의\n중앙 시작점에서만 처음 등록하고 아이템 등급보다 높은 룬은 등록할 수 없습니다. 런타임 배치는\n60° 회전만 제공하고 별도 반전은 제공하지 않습니다. 첫 배치 전에는 중앙 한 칸, 이후에는 같은\n색 네트워크에서 한 칸 떨어진 연결 전선만 밝게 안내합니다.\n\n### PBP-UI-001 — 인벤토리와 룬 보드는 모바일 고정 작업 흐름을 공유한다\n\n상단 상태, 중앙 작업판, 하단 보관함을 안전 영역 안에 고정합니다. 아이템·룬 합성은 두 재료와\n결과 미리보기 문법을 공유하고 룬 보관함은 상하 스크롤을 사용합니다. 빈 룬 칸의 탭은 상단\n중앙에 능력 정보를 표시합니다.\n\n### PBP-UI-002 — 룬 보드는 문맥을 보존하고 필터는 카드 공간을 침범하지 않는다\n\n장착 룬 회전은 마지막 선택 룬에만 적용하고 확대·축소는 보고 있던 보드 위치를 보존합니다.\n룬 보관함은 `색상 필터`와 `칸 수 필터` 두 버튼만 한 줄에 두며, 보드 위 말풍선에서 G0~G6와\n1~5칸을 각각 다중 선택합니다. 능력 설명은 색상명을 반복하지 않고 옅은 황금색 글자·짙은\n보라색 외곽선으로 등급·능력명·수치를 표시합니다.\n\n### PBP-ART-002 — 아이템은 사각 점유와 모바일 전투에 맞는 카툰 실루엣을 사용한다\n\n최종 48종 원화는 굵고 밝은 카툰풍으로 통일합니다. 근접 무기는 위쪽, 활·석궁·총은 오른쪽을\n기본 방향으로 두고 발사체와 궤적을 원화에 굽지 않습니다. 그림의 질량과 돌출부가 사각 점유\n형태에 자연스럽게 맞아야 합니다.\n\n## 변경 원장\n\n### PBP-INV-001 — 인벤토리 이탈과 Tab 토글\n\n- 날짜: 2026-08-15\n- 도메인: 인벤토리 접근성 / 플랫폼 입력\n- 변경 유형: changed\n- 이전 규칙: 화면 내부 닫기 버튼과 명확한 PC 토글 경로가 없었습니다.\n- 새 유효 규칙: 모바일 우측 최상단 닫기 버튼을 두고 PC 호환 시 Tab을 인벤토리 전용\n  토글로 사용하며 기본 플레이어 목록을 해제합니다.\n- 근거: 작업 화면에는 안전한 이탈 경로가 필요하며 한 입력이 두 UI를 열면 안 됩니다.\n- 의도한 사용자 경험: 닫는 법을 탐색하지 않고 즉시 메인 화면으로 돌아갑니다.\n- 범위와 제외: 모바일 터치와 PC 입력 호환에 적용하며 PC 레이아웃 품질은 제외합니다.\n- 영향 소스: Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: Luau 테스트, 소스 검사와 최종 Studio 모바일 화면.\n\n### PBP-INV-002 — 배치 보드 범위와 도구 배치\n\n- 날짜: 2026-08-15\n- 도메인: 모바일 배치 보드 / 공간 가독성\n- 변경 유형: changed\n- 이전 규칙: 빈 배치 영역과 우측 도구의 공간 관계가 충분히 드러나지 않았습니다.\n- 새 유효 규칙: 전체 배치 영역에 옅은 육각 격자를 그리고 우측 상단 모드 탭과 우측 하단\n  확대 도구를 위한 반응형 인셋을 둡니다.\n- 근거: 빈 공간도 게임 공간이며 조작 계층과 동시에 보여야 합니다.\n- 의도한 사용자 경험: 배치 가능 범위와 도구 위치를 즉시 이해합니다.\n- 범위와 제외: 모바일 보드와 모드·확대 도구에 적용합니다.\n- 영향 소스: VisualTokens.luau, ScreenRenderer.luau, ScreenState.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: iPhone 17 Pro와 Galaxy A06 Studio Play의 잘림·겹침 검사.\n\n### PBP-INV-003 — 손가락 위 드래그와 단일 목적지 안내\n\n- 날짜: 2026-08-15\n- 도메인: 인벤토리 드래그 / 배치 피드백\n- 변경 유형: changed\n- 이전 규칙: 아이템이 포인터 아래에 남고 여러 강조가 목표 칸과 경쟁했습니다.\n- 새 유효 규칙: 회전된 그림 전체를 포인터 위로 올리고 그림과 목적지 외곽선만 표시합니다.\n- 근거: 드래그 중에는 대상과 내려놓을 위치가 가장 강하게 읽혀야 합니다.\n- 의도한 사용자 경험: 손가락에 가리지 않은 그림으로 정확히 조준합니다.\n- 범위와 제외: 아이템 드래그에 적용하며 그림이 없는 가방은 점유 형태를 사용합니다.\n- 영향 소스: DragPlacementState.luau, Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 포인터 리프트·잡은 칸·outline-only Luau 테스트.\n\n### PBP-INV-004 — 카드·선택 정보와 0.1Kg 정밀도\n\n- 날짜: 2026-08-15\n- 도메인: 아이템 정보 구조 / 무게 규칙\n- 변경 유형: changed\n- 이전 규칙: 무게 표현과 시너지 정렬이 좁은 카드에서 일관되지 않았습니다.\n- 새 유효 규칙: x.xKg 표시와 0.1Kg 판정을 통일하고 시너지를 카드 가운데 정렬합니다.\n- 근거: 화면 표시와 게임 판정은 같은 값을 사용해야 합니다.\n- 의도한 사용자 경험: 좁은 카드에서 핵심 정보와 초과 이유를 빠르게 이해합니다.\n- 범위와 제외: 저장 카드, 선택 정보, 합계와 허용 판정에 적용합니다.\n- 영향 소스: WeightEvaluator.luau, ItemInstanceHydrator.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013, backpack-combat-stat-database\n- 검증과 증거: 무게 양자화·형식·허용 판정 테스트와 카드 소스 검사.\n\n### PBP-INV-005 — 필터와 배치 모드의 직접 연결\n\n- 날짜: 2026-08-15\n- 도메인: 보관함 탐색 / 모드 전환\n- 변경 유형: changed\n- 이전 규칙: 종류 필터와 배치 탭을 따로 바꿔야 했습니다.\n- 새 유효 규칙: 가방 필터는 가방 배치로, 다른 필터는 아이템 배치와 해당 종류로 이동합니다.\n- 근거: 보관함 종류 선택은 다음 배치 대상의 선택입니다.\n- 의도한 사용자 경험: 한 번의 터치로 원하는 목록과 배치 모드에 도달합니다.\n- 범위와 제외: 일반 종류 필터 다섯 개와 배치 모드 연동에 적용합니다.\n- 영향 소스: ScreenState.luau, Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 모드별 필터 상태 Luau 테스트.\n\n### PBP-INV-006 — 시너지·칸 수 고급 필터\n\n- 날짜: 2026-08-15\n- 도메인: 보관함 고급 탐색 / 모바일 UI\n- 변경 유형: added\n- 이전 규칙: 종류 외의 시너지와 점유 칸 범위를 직접 좁힐 수 없었습니다.\n- 새 유효 규칙: 별도 고급 필터에서 26종 시너지 토글과 1~9 칸 범위를 설정합니다.\n- 근거: 조합과 공간 효율은 종류와 독립적인 탐색 기준입니다.\n- 의도한 사용자 경험: 조합과 크기에 맞는 아이템을 빠르게 좁힙니다.\n- 범위와 제외: 가방과 아이템 칸 범위, 아이템의 하나 이상 시너지 일치에 적용합니다.\n- 영향 소스: ScreenState.luau, Screen.luau, ScreenRenderer.luau, VisualTokens.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 사용자 기획 이미지, Studio 캡처와 두 모바일 화면 테스트.\n\n### PBP-ART-001 — 시너지 아이콘 소형 가독성 규칙\n\n- 날짜: 2026-08-15\n- 도메인: 모바일 UI 아트 방향 / 인벤토리 시너지\n- 변경 유형: changed\n- 이전 규칙: 큰 합본을 축소해 실제 카드 크기에서 세부가 합쳐졌습니다.\n- 새 유효 규칙: 약 25px를 승인 기준으로 대표 심볼·투명 배경·최대 3색·216px 경계를\n  사용합니다.\n- 근거: 작은 화면에서 시너지를 구분하는 속도가 우선입니다.\n- 의도한 사용자 경험: 짧게 훑어도 형태와 대표색으로 시너지를 구분합니다.\n- 범위와 제외: 활성 26종 이미지와 재생성 계약에 적용하며 의미와 효과는 바꾸지 않습니다.\n- 영향 소스: Assets/UI/Backpack/SynergyIcons, SynergyCatalog.luau\n- 관련 위키: synergy-icon-system@v001, inventory-item-concept\n- 검증과 증거: 두 Studio 모바일 화면, 26개 자산과 전용 이미지 테스트.\n\n### PBP-CONTENT-001 — FootprintExpansion21 활성 집합 정리\n\n- 날짜: 2026-08-15\n- 도메인: 아이템 콘텐츠 / 공개 데이터\n- 변경 유형: retired\n- 이전 규칙: 확장 시안 21개가 모두 활성 후보로 남았습니다.\n- 새 유효 규칙: 11개만 활성화하고 10개는 제품 데이터와 미디어에서 제거합니다.\n- 근거: 폐기 시안이 남으면 현재 지원 범위를 잘못 전달합니다.\n- 의도한 사용자 경험: 실제 지원하는 아이템만 게임과 공개 DB에서 확인합니다.\n- 범위와 제외: 해당 10개 아이콘·레이아웃·참조를 제거하고 매니페스트 이력은 보존합니다.\n- 영향 소스: FootprintExpansion21, ItemDB 카탈로그·레이아웃·생성 산출물\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: ItemDB 90개 build/check와 생성 산출물 검사.\n\n### PBP-DOC-001 — 누적 제품 기획 변경 원장\n\n- 날짜: 2026-08-15\n- 도메인: 개발 문서 운영\n- 변경 유형: added\n- 이전 규칙: 기획 규칙의 변경을 한곳에서 계속 추적하는 누적 원장이 없었습니다.\n- 새 유효 규칙: 사용자 승인 커밋마다 물질적 변경을 안정적인 ID와 함께 누적합니다.\n- 근거: 구현이 개선돼도 최종 규칙과 변경 이유가 사라지지 않아야 합니다.\n- 의도한 사용자 경험: 위키 한 페이지에서 현재 규칙과 과거 이유를 연속 확인합니다.\n- 범위와 제외: 제품·게임플레이·UX·콘텐츠·아트·플랫폼·운영에 적용하며 순수 리팩터링은\n  제외합니다.\n- 영향 소스: AGENTS.md, wiki/content/pages/product-planning-change-log\n- 관련 위키: inventory-item-concept, development-wiki\n- 검증과 증거: 위키 빌드·체크·정책 테스트와 동일 커밋 발행.\n\n### PBP-ITEMDB-001 — ItemDB ON/OFF 베이크 경계\n\n- 날짜: 2026-08-16\n- 도메인: 아이템 운영 / 게임 배포\n- 변경 유형: added\n- 이전 규칙: ItemDB에 존재하는 모든 아이템이 항상 생성 런타임과 게임 베이크에 포함됐습니다.\n- 새 유효 규칙: 각 아이템은 ON/OFF 상태를 가지며 OFF는 웹 기획 기록에는 남고 다음 베이크와\n  생성 런타임에서는 제외됩니다. ON 복귀 시 기존 형태·이미지·시너지·효과 설정을 유지합니다.\n- 근거: 일시 제외와 영구 폐기를 구분해야 콘텐츠 실험과 롤백이 데이터 삭제 없이 가능합니다.\n- 의도한 사용자 경험: 운영자는 한 번의 버튼으로 게임 노출을 제어하고 플레이어는 승인된\n  활성 아이템만 만납니다.\n- 범위와 제외: ItemDB 웹 편집, 생성 레이아웃, 게임 카탈로그와 Studio 베이크에 적용합니다.\n  OFF 항목의 원본·웹 검색·이미지는 삭제하지 않습니다.\n- 영향 소스: inventory-item-layouts.json, tools/item_db.py, GeneratedItemLayouts.luau,\n  ItemCatalog.luau, wiki/site/app.js\n- 관련 위키: inventory-item-concept@v014\n- 검증과 증거: 390×844 ON 행 캡처, OFF 생성 제외 테스트, ItemDB 90개 정합성 검사.\n\n### PBP-EFFECT-001 — A·B·C 공간 접촉 효과 영역\n\n- 날짜: 2026-08-16\n- 도메인: 아이템 조합 / 공간 효과 / ItemDB 저작\n- 변경 유형: added\n- 이전 규칙: 아이템은 자기 능력치와 점유 형태만 가졌고 주변 아이템 접촉을 표현하는\n  저작 계약이 없었습니다.\n- 새 유효 규칙: 아이템당 A·B·C 최대 세 효과 슬롯을 두고 점유 경계 바깥 Q/R 다섯 칸까지\n  직접 효과 칸을 선택합니다. 각 슬롯은 종류·조건·능력 ID를 가지며 공간 접촉 판정과 실제\n  능력 실행은 분리합니다.\n- 근거: 가방 배치의 공간 관계를 조합 빌드로 확장하되 전투 규칙이 배치 기하에 결합되지\n  않아야 합니다.\n- 의도한 사용자 경험: 플레이어는 아이템을 어디에 놓고 무엇과 맞닿게 하는지로 추가 효과를\n  설계하고, 운영자는 같은 육각 편집 방식으로 규칙을 시각적으로 저작합니다.\n- 범위와 제외: 효과 칸 데이터, 카탈로그 ID, 회전 접촉 후보 평가까지 포함합니다. 조건 논리,\n  능력치 합산, 전투 발현과 시각 효과는 후속 범위입니다.\n- 영향 소스: item-effect-catalog.json, item-effect-slots.md, inventory-item-layouts.json,\n  GeneratedItemLayouts.luau, ItemEffectContactEvaluator.luau, ItemInstanceHydrator.luau,\n  wiki/site/app.js, wiki/site/item-db.js\n- 관련 위키: inventory-item-concept@v014, backpack-combat-stat-database\n- 검증과 증거: 390×844 A/B/C 편집 캡처, 효과 좌표·카탈로그·회전 접촉·드래그 비활성 테스트,\n  Studio의 동일 리비전 90개 레이아웃과 EffectCatalog 확인.\n\n### PBP-ITEMDB-002 — ItemDB 칸 수·시너지·게임 ON 복합 필터\n\n- 날짜: 2026-08-18\n- 도메인: ItemDB 운영 / 웹 탐색\n- 변경 유형: added\n- 이전 규칙: ItemDB는 이름과 대분류만 좁힐 수 있어 점유 크기·시너지·실제 게임 포함\n  집합을 따로 확인해야 했습니다.\n- 새 유효 규칙: 최소·최대 칸 수, 여러 시너지의 OR, 전체/게임 ON 상태를 검색·대분류와\n  AND로 조합하며 스크롤과 효과 카탈로그 접힘 상태를 재렌더링 뒤에도 유지합니다.\n- 근거: 전체 기획 목록과 현재 게임 집합을 한 화면에서 빠르게 비교해야 합니다.\n- 의도한 사용자 경험: “게임에 들어가는 2~4칸 기계 또는 원거리 아이템”을 그대로 필터로\n  표현하고 실제 아이콘으로 결과를 빠르게 훑습니다.\n- 범위와 제외: 공개·로컬 ItemDB 탐색과 시너지 미디어에 적용합니다. 게임 안의 보관함\n  고급 필터 상태와는 별도입니다.\n- 영향 소스: tools/item_db.py, wiki/site/app.js, wiki/site/app.css, wiki/site/item-db-data.js,\n  wiki/site/synergy-media\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: 1440×900 복합 필터 캡처, 8개 ON 결과, 26/26 이미지 로드,\n  catalogOpen=false·scrollY=188 유지, 브라우저 콘솔 오류·경고 0건.\n\n### PBP-INV-007 — 최대 6개 장착 무기와 필드 표시\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 장착 / 필드 가독성\n- 변경 유형: added\n- 이전 규칙: 유효하게 배치된 무기는 보드 안에서만 보였고 장착 목록·한도·필드 표시 계약이\n  없었습니다.\n- 새 유효 규칙: 유효한 Weapon은 최초 배치 순서대로 최대 6개까지 장착되고 2×3 장착 탭,\n  상세 정보·빼기, 모든 캐릭터 위의 방향 반응 이미지로 표시됩니다.\n- 근거: 공간 배치 결과가 실제 플레이 장비로 읽혀야 인벤토리 퍼즐과 전투 준비가 연결됩니다.\n- 의도한 사용자 경험: 여섯 슬롯에서 장착 상태를 관리하고 필드에서 자신의 빌드를 즉시\n  알아봅니다.\n- 범위와 제외: 장착 상태·관리·이미지 표시에 적용합니다. 실제 공격 실행과 무기 모델은\n  후속 범위입니다.\n- 영향 소스: EquippedItemModel.luau, InventoryBoardModel.luau, InventorySerializer.luau,\n  Screen.luau, ScreenRenderer.luau, InventoryService.luau, EquippedWeaponBillboard.luau,\n  CharacterController.luau, DirectionResolver.luau\n- 관련 위키: inventory-item-concept@v015, character-2d-rendering@v009\n- 검증과 증거: iPhone 17 Pro·Galaxy A06 장착 슬롯과 상세 모달 캡처, 6개 한도 Luau 테스트,\n  West 87.8°·East -92.1° 방향 회전, 최종 Studio 콘솔 오류·경고 0건.\n\n### PBP-INV-008 — 상태와 무관한 2px 배치 외곽선\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 시각 계층\n- 변경 유형: changed\n- 이전 규칙: 가방 시너지나 배치 미리보기 상태에 따라 외곽선이 3~7px로 굵어질 수 있었습니다.\n- 새 유효 규칙: 가방·아이템·선택·시너지·유효·무효·미리보기 외곽선은 모두 2px이며 상태는\n  색으로만 구분합니다.\n- 근거: 굵기 변화가 점유 형태를 실제보다 커 보이게 하고 아이템 그림과 경쟁했습니다.\n- 의도한 사용자 경험: 같은 공간 형태를 안정적으로 읽고 색으로 상태만 빠르게 구분합니다.\n- 범위와 제외: 인벤토리 보드와 보관함 선택 외곽선에 적용합니다.\n- 영향 소스: ScreenState.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: 모든 외곽선 경로가 GetBoundaryThickness=2를 사용하는 Luau·소스 회귀 테스트.\n\n### PBP-CONTENT-002 — 게임 ON 32개 승인 집합\n\n- 날짜: 2026-08-18\n- 도메인: 아이템 콘텐츠 / 게임 배포\n- 변경 유형: changed\n- 이전 규칙: 전체 90개 ItemDB가 모두 게임 ON으로 생성 런타임에 포함됐습니다.\n- 새 유효 규칙: 전체 기획 목록 90개를 보존하면서 게임 ON 32개만 생성 런타임과 Studio\n  베이크에 포함합니다. 포켓 네일건은 MACHINE을 제외한 RANGED·GUN, 소화기 철퇴는\n  FORGED 대신 MACHINE을 사용합니다.\n- 근거: 현재 게임에 투입할 승인 콘텐츠와 후속 기획 후보를 데이터 삭제 없이 구분합니다.\n- 의도한 사용자 경험: 플레이어는 승인된 32개만 만나고 운영자는 OFF 58개를 계속 비교·복원할\n  수 있습니다.\n- 범위와 제외: PBP-CONTENT-001의 전체 90개 카탈로그와 폐기 이력은 유지하며 게임 포함 집합만\n  변경합니다.\n- 영향 소스: inventory-item-layouts.json, GeneratedItemLayouts.luau, wiki/site/item-db-data.js\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: ItemDB revision a35b00cf76ec6c75, 전체 90·게임 ON 32 build/check,\n  Studio 같은 소스 베이크와 저장.\n\n### PBP-ACTION-001 — 20스터드 방향 잠금 Dash\n\n- 날짜: 2026-08-18\n- 도메인: 캐릭터 액션 / 이동 / 스프라이트 일관성\n- 변경 유형: changed\n- 이전 규칙: Dash는 0.20초 동안 목표 속도 30 studs/s의 순간 충격을 적용하고 별도 Dash\n  포즈를 재생할 수 있었습니다.\n- 새 유효 규칙: Dash는 0.30초 동안 선택 방향을 잠그고 장애물이 없는 기준 20스터드를\n  이동합니다. WalkSpeed·AutoRotate를 잠근 뒤 복원하고 시작 순간의 완성 프레임을 유지합니다.\n- 근거: 이동 거리를 입력·현재 속도와 분리해 일관되게 만들고, 승인 Run 아틀라스가 레거시\n  모듈식 Walk/Dash 이미지로 바뀌는 비율 변화를 막습니다.\n- 의도한 사용자 경험: Dash 방향이 중간에 꺾이지 않고 같은 거리를 이동하며 캐릭터 모습도\n  한 프레임으로 안정적으로 유지됩니다.\n- 범위와 제외: 클라이언트 Dash 이동·방향·스프라이트에 적용합니다. 장애물 관통이나 별도\n  Dash 공격 판정은 추가하지 않습니다.\n- 영향 소스: character-actions.md, Config.luau, PlayerActionController.luau,\n  CharacterController.luau, test_two_direction_run_build.py\n- 관련 위키: character-2d-rendering@v009\n- 검증과 증거: Galaxy A06 Play에서 19.46스터드 이동, 이동 중 WalkSpeed=0·AutoRotate=false,\n  종료 뒤 16·true 복원, 최종 콘솔 오류·경고 0건.\n\n### PBP-DEV-001 — 세션 전용 허용 무게 테스트 창\n\n- 날짜: 2026-08-18\n- 도메인: Studio 개발 도구 / 데이터 안전\n- 변경 유형: added\n- 이전 규칙: 허용 무게 경계값을 플레이 중 빠르게 바꾸는 전용 진단 UI가 없었습니다.\n- 새 유효 규칙: Studio에서만 F2 창으로 허용 무게를 1Kg씩 조정하고, 영구 저장에는 플레이어의\n  원래 제한값을 사용합니다.\n- 근거: 무게 초과 UI와 배치 경계를 반복 검증하되 진단 값이 사용자 데이터에 남으면 안 됩니다.\n- 의도한 사용자 경험: 개발자는 Play를 다시 시작하지 않고 경계값을 시험하며 플레이어는\n  테스트 기능이나 변조된 저장값을 보지 않습니다.\n- 범위와 제외: Roblox Studio 진단 세션에만 적용하며 모바일 제품 UI 완료 범위가 아닙니다.\n- 영향 소스: DeveloperTestControls.luau, DeveloperTestWindow.luau, Screen.luau,\n  InventoryService.luau\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: Studio-only 생성·서버 거부·원래 제한 직렬화 소스 검사와 Luau 경계 테스트.\n\n### PBP-INV-009 — 사각 장착판과 부위별 중복 제한\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 장착 / 공간 퍼즐\n- 변경 유형: superseded\n- 이전 규칙: PBP-INV-002~007은 육각 가방이 활성 칸을 만들고 시너지·필터와 유효 배치 무기\n  여섯 개를 관리하는 메인 인벤토리를 사용했습니다.\n- 새 유효 규칙: 아이템은 사각 폴리오미노로 배치하며 유효한 배치가 곧 장착입니다. 무기는\n  여섯 개, 반지는 두 개, 나머지 지정 부위는 한 개이며 무기·반지는 같은 DefinitionId를\n  중복할 수 없습니다. 디아블로식 장비창은 권위 배치의 투영입니다.\n- 근거: 장착 제한을 즉시 이해시키면서 공간 퍼즐은 크기와 형태로 유지해야 합니다.\n- 의도한 사용자 경험: 플레이어는 별도 장착 버튼 없이 배치와 장비 요약을 같은 상태로\n  이해합니다.\n- 범위와 제외: 메인 장착판과 장착 부위에 적용하며 특수 아이템·방패 슬롯은 제외합니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016\n- 검증과 증거: 기획 표에서 부위별 장착 수와 48종 콘텐츠 수량 검산.\n\n### PBP-SYNERGY-001 — 가방·시너지 시스템 전면 폐기\n\n- 날짜: 2026-08-18\n- 도메인: 인벤토리 / 시너지 / 아이템 조합\n- 변경 유형: retired\n- 이전 규칙: PBP-INV-004·006, PBP-ART-001과 PBP-EFFECT-001은 가방 활성 칸, 26종\n  시너지, 시너지 필터와 A/B/C 공간 접촉 효과를 제품 규칙으로 사용했습니다.\n- 새 유효 규칙: 가방 활성 칸, 육각 메인 인벤토리, 시너지 판정·아이콘·필터와 공간 접촉\n  효과를 후속 제품에서 사용하지 않습니다. 육각형은 아이템별 룬 보드에만 사용합니다.\n- 근거: 장착 규칙과 룬 성장 퍼즐이 각각 명확한 책임을 가져야 합니다.\n- 의도한 사용자 경험: 메인 장착은 사각형으로 빠르게 읽고 깊은 육각 퍼즐은 선택한 아이템\n  안에서 집중해 풉니다.\n- 범위와 제외: 새 제품 방향을 폐기하며 기존 코드·자산 제거는 후속 구현 커밋에서 수행합니다.\n- 영향 소스: inventory-item-concept@v016, inventory-item-concept@v015\n- 관련 위키: synergy-icon-system@v001, inventory-item-concept@v016\n- 검증과 증거: v016 폐기·제외 목록과 이전 v015 구현 범위 대조.\n\n### PBP-CONTENT-003 — 알파 장비 48종과 점유 크기\n\n- 날짜: 2026-08-18\n- 도메인: 알파 아이템 콘텐츠 / 장착 부위\n- 변경 유형: superseded\n- 이전 규칙: PBP-CONTENT-002의 현행 게임 ON 32개와 과거 90개 카탈로그가 실제 알파\n  배포 집합이었습니다.\n- 새 유효 규칙: 다음 알파 구현 목표는 무기 14종, 방어구·장신구 34종의 48종입니다. 머리·\n  상의·하의는 4/6칸, 귀걸이·반지는 1칸, 목걸이는 2/3칸, 글러브·신발·벨트는 2/4칸을\n  사용합니다.\n- 근거: 부위별 역할과 사각 점유 크기를 함께 선택하게 해 배치 조합을 늘립니다.\n- 의도한 사용자 경험: 작은 장비의 공간 효율과 큰 장비의 역할을 비교해 자신만의 장착판을\n  만듭니다.\n- 범위와 제외: 48종은 기획 목표이며 현재 ItemDB와 Studio ON 32개는 구현 전까지 그대로입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 무기 14 + 부위별 장비 34 = 48 산술 검산.\n\n### PBP-RUNE-001 — Seed 고정 259칸 아이템 룬 보드\n\n- 날짜: 2026-08-18\n- 도메인: 아이템 성장 / 룬 퍼즐 / 합성\n- 변경 유형: added\n- 이전 규칙: 각 아이템에 독립적인 장기 육각 성장판과 룬 조각 합성 계약이 없었습니다.\n- 새 유효 규칙: 각 아이템은 37칸 영역 일곱 개를 0~6등급에 하나씩 열고, 색별 시작점에서\n  젬블로식 한 칸 간격으로 1~5칸 룬을 연결합니다. 전체 능력 위치는 생성 Seed로 고정하며\n  합성 시 기준 아이템의 Seed와 배치를 보존합니다.\n- 근거: 같은 아이템도 경로·룬 모양·색 차단을 고민하는 장기 성장 퍼즐이 필요합니다.\n- 의도한 사용자 경험: 적은 룬으로 원하는 고등급 능력까지 길을 만들고 다른 색의 미래 경로를\n  함께 계획합니다.\n- 범위와 제외: 보드·등급 개방·룬/아이템 합성 계약이며 실제 생성기와 저장 마이그레이션은\n  후속 구현입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016\n- 검증과 증거: 일곱 영역 각각 37칸과 전체 259칸, 영역별 능력 분포 합계 검산.\n\n### PBP-RUNE-002 — 룬 능력 예산·등급 증가·레어 칸\n\n- 날짜: 2026-08-18\n- 도메인: 룬 능력 / 밸런스 / UI 표현\n- 변경 유형: added\n- 이전 규칙: 룬 능력의 등급별 개수·표시 정밀도·레어 판정과 아이템 정체성 보호 규칙이\n  없었습니다.\n- 새 유효 규칙: 전체 능력 등급 개수는 18·27·33·37·41·50·53이며 같은 능력의 실제 등장\n  등급은 UI 표시값까지 엄격히 증가합니다. 구조형 레어는 6등급 영역의 황금 칸에서 한 단위만\n  제공하고 Seed는 위치만 바꿉니다.\n- 근거: 상위 등급의 보상감을 보존하고 좋은 Seed가 총 전투력 자체를 재추첨하지 않게 합니다.\n- 의도한 사용자 경험: 황금 칸을 장기 목표로 삼되 낮은 등급 경로도 매 단계 분명한 성장을\n  제공합니다.\n- 범위와 제외: 일반 POWER/SPEED/CHANCE/TRAIT/GUARD/TIME/RANGE와 레어 표시에 적용합니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 등급·트랙별 칸 수와 259칸 합계, 모든 표시 수치의 단조 증가 수동 검토.\n\n### PBP-COMBAT-001 — 자동 스킬과 비선형 능력 캡\n\n- 날짜: 2026-08-18\n- 도메인: 전투 능력 / 자동 스킬 / 방어 계산\n- 변경 유형: added\n- 이전 규칙: 룬 인플레이션에서 행동 빈도·확률·무적·발사체 수를 안전하게 제한하는 공통\n  계산 순서가 없었습니다.\n- 새 유효 규칙: 자동 스킬은 해당 무기의 기본 공격 실행 횟수로 발동하고 감소는 최대 8회,\n  최소 요구 횟수는 1회입니다. 방패 막기는 최대 100%에서 방어력을 두 배로 적용하며 방어력\n  이후 최종 피해감소는 최대 50%입니다. 이동·공격·대시·회피·회복·보호막 등은 v016의\n  항목별 캡을 사용합니다.\n- 근거: 적 수치 강화로 대응 가능한 선형 인플레이션은 허용하되 무한 행동·완전 무적·확률\n  초과는 막아야 합니다.\n- 의도한 사용자 경험: 큰 숫자 성장은 즐기면서도 공격과 피격의 기본 규칙은 계속 작동합니다.\n- 범위와 제외: 탄약, 탄약 미소모, 소모품 미소모와 스킬 초기화 확률은 사용하지 않습니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: backpack-combat-stat-database, inventory-item-concept@v016\n- 검증과 증거: 계산 순서와 캡·제외 목록의 기획 교차 검토.\n\n### PBP-RUNE-003 — 알파 무기 14종의 보드 정체성\n\n- 날짜: 2026-08-18\n- 도메인: 무기 콘텐츠 / 룬 보드 / 자동 스킬\n- 변경 유형: added\n- 이전 규칙: 알파 무기별 자동 스킬 조건과 259칸 A/B/C/D·레어 배분이 고정되지 않았습니다.\n- 새 유효 규칙: 일곱 무기 형태에 두 종류씩 14개를 두고 각 보드는 A 102, B 71, C 48,\n  D 32, 6등급 로컬 레어 6칸을 가집니다. 목걸이는 발사체, 반지는 자동 스킬 요구 공격,\n  귀걸이는 근거리 사거리의 전역 레어를 제공하고 신발만 추가 대시를 제공합니다.\n- 근거: Seed 위치가 달라도 무기 이름과 공격 방식에 맞는 성장 정체성이 유지돼야 합니다.\n- 의도한 사용자 경험: 같은 룬이라도 연격검·공성 석궁·흡혈 도끼에서 서로 다른 경로와\n  자동 스킬을 강화합니다.\n- 범위와 제외: 14종의 알파 기획 계약이며 최종 아이콘·폴리오미노 좌표·전투 구현은 후속입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 각 무기 레어 합계 6칸과 보드 전체 259칸 산술 검산.\n\n### PBP-ITEMDB-002 — 최종 48종 활성 ItemDB 전환\n\n- 날짜: 2026-08-20\n- 도메인: 아이템 콘텐츠 / 공개 데이터베이스 / 런타임 배포\n- 변경 유형: superseded\n- 대체 대상: PBP-ITEMDB-001, PBP-CONTENT-003의 \"후속 구현 목표\" 상태\n- 이전 규칙: 새 48종은 기획 목표이고 과거 90종과 게임 ON 32종이 구현 전 역사적 현행\n  상태였습니다.\n- 새 유효 규칙: 무기 14종과 방어구·장신구 34종의 최종 48종만 ItemDB 원본, 생성 런타임,\n  공개 미디어의 활성 집합으로 사용합니다. 과거 아이콘과 특수 아이템은 제거하고 ON/OFF\n  운영 경계는 유지합니다.\n- 근거: 기획·로컬 원화·공개 DB·게임 카탈로그의 서로 다른 활성 집합은 이름·점유·자산 ID\n  불일치를 만듭니다.\n- 의도한 사용자 경험: 플레이어와 개발자가 같은 최종 48종의 이미지와 형태만 봅니다.\n- 범위와 제외: 아이템 정의·아이콘·사각 점유·공개 DB에 적용하며 과거 위키 기록은 보존합니다.\n- 영향 소스: inventory-item-art-catalog.md, inventory-item-layouts.json,\n  GeneratedItemLayouts.luau, ItemCatalog.luau, wiki/site/item-db-data.js\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: ItemDB 48종 빌드·체크, 최종 카탈로그와 모바일 공개 DB 캡처.\n\n### PBP-RUNE-004 — 427칸·후보 10개 룬 보드\n\n- 날짜: 2026-08-20\n- 도메인: 아이템 성장 / 룬 보드 / 랜덤화\n- 변경 유형: superseded\n- 대체 대상: PBP-RUNE-001, PBP-RUNE-002\n- 이전 규칙: 모든 아이템은 37칸 영역 일곱 개의 259칸 보드 하나를 Seed로 섞고, 능력 등급\n  총량 18·27·33·37·41·50·53을 사용했습니다.\n- 새 유효 규칙: 각 영역을 반지름 4인 61칸으로 확대해 전체 427칸을 사용합니다. 아이템\n  정의마다 결정론적으로 생성된 후보 10개를 두고 아이템 생성 시 하나를 균등 선택해 VariantId와\n  Seed를 저장합니다. 보드당 능력 등급 총량은 30·45·54·60·67·90·81입니다.\n- 근거: 11개 능력 계열과 레어 노드, 일곱 색 경로를 한 판에서 읽고 우회할 충분한 공간이\n  필요합니다. 후보를 제한하면 다양성과 재현·검증을 함께 확보할 수 있습니다.\n- 의도한 사용자 경험: 같은 아이템에서도 다른 길을 계획하되 총 능력 예산이 운에 따라 바뀌지는\n  않습니다.\n- 범위와 제외: 48종 전체 480개 보드에 적용하며 런타임 재굴림은 허용하지 않습니다.\n- 영향 소스: item-rune-board-database.json, GeneratedRuneBoardDB.luau,\n  rune-board-db-data.js\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 생성기 결과 48×10=480보드, 보드마다 7×61=427칸, revision\n  6e735afdab3d7550.\n\n### PBP-RUNE-005 — 34종 룬 도형과 62종 능력 아이콘\n\n- 날짜: 2026-08-20\n- 도메인: 룬 조각 / 보드 가독성 / 터치 배치\n- 변경 유형: added\n- 이전 규칙: 룬은 1~5칸 젬블로식 조각이라는 개념만 있었고 완전한 형태군, 공용 원화와\n  능력 아이콘의 책임 분리가 고정되지 않았습니다.\n- 새 유효 규칙: 회전·반전을 동일시한 1·1·3·7·22개, 총 34종 자유 폴리헥스를 사용합니다.\n  일곱 색은 빈 중앙 메달의 중립 원화를 틴트하고, 62종 전투 effect 아이콘을 중앙에 별도\n  합성합니다. 드래그는 실제 도형·잡은 칸·회전·반전을 보존하며 마지막 스냅 가이드를 확정값으로\n  사용합니다.\n- 근거: 색·등급·능력 의미를 한 장의 원화에 굽지 않아야 작은 화면에서도 의미를 읽고 데이터\n  변경에도 자산을 재사용할 수 있습니다.\n- 의도한 사용자 경험: 탭하지 않아도 대략적인 능력 종류를 알고, 손가락 아래에서 룬이 튀지\n  않은 채 예상 위치에 놓입니다.\n- 범위와 제외: 룬 카드·보드 노드·드래그 미리보기에 적용하며 상세 수치는 텍스트로 제공합니다.\n- 영향 소스: rune-piece-catalog.json, rune-ability-icon-catalog.json,\n  rune_hex_neutral.png, rune_ability_icons.png, UIPrimitives.luau, Screen.luau\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 형태군 34개, effect 아이콘 62개 생성·누락 검사와 아이콘 시트.\n\n### PBP-UI-001 — 모바일 인벤토리·룬 보드의 단일 작업 흐름\n\n- 날짜: 2026-08-20\n- 도메인: 모바일 UI / 인벤토리 / 룬 보드 / 합성\n- 변경 유형: added\n- 이전 규칙: 사각 장착과 룬 보드의 개별 기획은 있었지만 화면 내 기능 위치, 터치 우선순위,\n  필터·합성·복귀 상태의 완전한 흐름이 없었습니다.\n- 새 유효 규칙: 두 화면은 안전 영역 아래 상단 상태, 중앙 작업판, 하단 보관함을 공유합니다.\n  카드 탭은 룬 보드 진입, 드래그는 배치 또는 합성을 우선합니다. 룬 보관함은 상하 스크롤,\n  한 색 또는 전체를 고르는 7색 필터와 독립 ON/OFF인 1~5칸 필터를 제공하고, 빈 보드 탭은\n  상단 중앙에 능력을 표시합니다.\n- 근거: 모바일에서는 화면 전환마다 탐색 위치와 재료가 사라지면 배치 퍼즐의 비교 비용이\n  지나치게 커집니다.\n- 의도한 사용자 경험: 인벤토리 배치, 아이템 성장, 룬 배치와 합성을 같은 손동작 문법으로\n  왕복합니다.\n- 범위와 제외: 모바일 세로 화면과 터치 입력에 적용하며 PC 밀도·마우스 품질은 현재 완료\n  기준이 아닙니다.\n- 영향 소스: inventory-rune-ui-spec.md, InventoryV2, RuneBoard, InventoryV2Service.luau\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 정적 상태·Luau 테스트, iPhone 17 Pro 400×777 및 iPhone 7 374×666 Studio\n  Play 캡처, 핵심 입력 경로와 콘솔 오류 없음 확인.\n\n### PBP-ART-002 — 최종 아이템 카툰 아트와 방향 규칙\n\n- 날짜: 2026-08-20\n- 도메인: 아이템 아트 / 모바일 전투 / 사각 점유\n- 변경 유형: superseded\n- 대체 대상: PBP-ART-001의 육각·시너지 카드 중심 아트 계약\n- 이전 규칙: 실사풍 또는 고풍스러운 원화와 육각 시너지 카드 문법이 섞였고, 일부 무기는\n  사각 점유와 전투 회전 기준에 맞지 않았습니다.\n- 새 유효 규칙: 48종 전체를 밝고 굵은 카툰풍으로 통일하고 사각 폴리오미노 질량에 맞춥니다.\n  근접 무기는 위쪽, 활·석궁·총은 오른쪽을 기본 방향으로 하며 발사체·공격 궤적은 원화에서\n  제외합니다.\n- 근거: Brotato식 자동 공격에서는 작은 캐릭터 주변을 도는 장비의 방향과 실루엣이 즉시\n  읽혀야 합니다.\n- 의도한 사용자 경험: 보관함·장착판·전투에서 같은 아이템을 형태만으로 알아봅니다.\n- 범위와 제외: 최종 48종 인벤토리 원화에 적용하며 실제 공격 VFX와 투사체는 별도 자산입니다.\n- 영향 소스: Assets/Items/InventoryIcons, inventory-item-art-catalog.md,\n  uploaded_asset_ids.json\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 최종 48종 카탈로그와 공개 ItemDB 캡처.\n\n### PBP-RUNE-006 — 등급·색·시작점 일치와 회전 전용 배치\n\n- 날짜: 2026-08-20\n- 도메인: 룬 성장 / 연결 퍼즐 / 배치 권위\n- 변경 유형: changed\n- 대체 대상: PBP-RUNE-004의 자유 시작 색 등록, PBP-RUNE-005의 런타임 반전 조작\n- 이전 규칙: 룬 색과 합성 등급은 독립 값이었고, 해금된 어느 중앙 시작점에서든 아직 등록하지\n  않은 색을 시작할 수 있으며 플레이 중 회전과 반전을 모두 제공했습니다.\n- 새 유효 규칙: G0~G6 룬 색은 아이템 등급색과 일치합니다. 룬은 같은 번호 영역의 중앙\n  시작점에서만 첫 등록하며 아이템 등급보다 높은 룬은 배치할 수 없습니다. 5칸 합성으로 등급이\n  오르면 다음 등급 색으로 바뀌고 런타임 조작은 60° 회전만 제공합니다. 첫 룬은 중앙 한 칸만\n  덮으면 도형의 어느 셀을 잡았든 유효하며 이후에는 한 칸 간격 연결 전선을 안내합니다.\n- 근거: 색·등급·시작점이 서로 다른 축이면 성장 잠금과 연결 가능 위치를 화면만 보고 예측하기\n  어렵고 저장 데이터가 모순될 수 있습니다.\n- 의도한 사용자 경험: 새 등급을 열 때 같은 색의 새 출발점을 즉시 이해하고, 보드가 보여 주는\n  한 칸의 목표와 실제 도형 가이드만으로 자유로운 첫 배치를 시도합니다.\n- 범위와 제외: 룬 생성·합성·저장 정규화·보드 배치·회전에 적용합니다. 34개 자유 폴리헥스\n  카탈로그의 중복 제거 기준은 유지합니다.\n- 영향 소스: rune-piece-system.md, inventory-rune-ui-spec.md, RuneBoardModel.luau,\n  RuneMergeModel.luau, InventoryV2Service.luau, Screen.luau\n- 관련 위키: inventory-item-concept@v018\n- 검증과 증거: InventoryV2 Luau 테스트의 등급색 불일치 거절, 등급별 시작점, 5칸 합성 색\n  승급, 첫 중앙 목표와 한 칸 간격 전선 검증.\n\n### PBP-UI-002 — 모바일 룬 보드의 문맥 보존 조작과 팝업 필터\n\n- 날짜: 2026-08-20\n- 도메인: 모바일 UI / 룬 보드 / 보관함 탐색\n- 변경 유형: changed\n- 대체 대상: PBP-UI-001의 상시 펼친 단일 색 필터와 보드 중심 재확대\n- 이전 규칙: 색상·칸 수 선택지가 보관함 위에 계속 공간을 차지하고 색상은 한 개 또는 전체만\n  골랐습니다. 확대할 때 보드 중앙으로 시점이 이동했고 회전·반전은 들고 있는 룬에 묶였습니다.\n- 새 유효 규칙: `색상 필터`와 `칸 수 필터` 한 줄 트리거가 각각 다중 선택 말풍선을 열며\n  바깥 탭으로 닫힙니다. 장착 룬 회전은 마지막 선택 룬에만 적용하고 확대·축소는 현재 보던\n  논리 위치를 유지합니다. 상단 능력 설명은 색상명을 빼고 고대비 등급·능력·수치만 표시합니다.\n- 근거: 좁은 세로 화면에서는 선택지를 계속 펼쳐 두는 것보다 실제 룬 카드를 더 많이 보여 주는\n  편이 중요하며, 카메라와 조작 대상이 예기치 않게 바뀌면 퍼즐 경로를 다시 찾아야 합니다.\n- 의도한 사용자 경험: 여러 색·크기를 짧은 팝업에서 조합해 찾고, 보던 위치와 선택 룬을 잃지\n  않은 채 확대·회전하며, 탭 설명을 즉시 읽습니다.\n- 범위와 제외: 모바일 세로 룬 장착 화면과 터치 입력에 적용합니다. PC 화면 밀도와 마우스\n  동등성은 현재 완료 기준이 아닙니다.\n- 영향 소스: inventory-rune-ui-spec.md, Screen.luau, VisualTokens.luau,\n  StorageSort.luau, test_inventory_v2_ui.py\n- 관련 위키: inventory-item-concept@v018\n- 검증과 증거: Galaxy A06 세로 Studio Play에서 필터 팝업·확장된 카드 영역·고대비 능력\n  설명을 확인했고, Studio MCP 진단과 7개 UI 계약 테스트를 통과했습니다.\n\n### PBP-COMBAT-002 — 장착 무기 할로와 서버 권위 자동 공격\n\n- 날짜: 2026-08-20\n- 도메인: 필드 장착 표시 / 자동 전투 / 모바일 연출\n- 변경 유형: superseded\n- 대체 대상: PBP-INV-007의 방향 반응형 필드 표시와 실제 공격 제외 범위\n- 이전 규칙: 최대 여섯 장착 무기는 캐릭터 방향을 따라 회전하는 머리 위 이미지로만 보였고,\n  실제 표적 탐색·공격·피해와 무기별 연출은 후속 범위였습니다.\n- 새 유효 규칙: 적이 없을 때 여섯 무기는 캐릭터 방향과 무관한 이미지 할로로 머리 위에\n  부유합니다. 적이 사거리와 시야 안에 들어오면 서버가 슬롯별 표적·쿨다운·피해를 결정하고\n  클라이언트는 베기·찌르기·투척·활·석궁·총기 연출을 재생합니다. 14종 원화는 ItemDB의\n  정규화된 회전축·타격점·발사구를 공통 계약으로 사용합니다.\n- 근거: 인벤토리의 장착 결과가 실제 전투 행동으로 연결돼야 빌드가 필드에서 살아 움직이며,\n  캐릭터 방향에 무기를 묶지 않아야 대기 할로와 공격 조준의 책임이 충돌하지 않습니다.\n- 의도한 사용자 경험: 적이 없을 때는 자신의 여섯 무기를 안정된 천사 링으로 읽고, 전투가\n  시작되면 각 원화가 직접 날아가거나 발사하는 모습을 통해 무기 종류를 즉시 구분합니다.\n- 범위와 제외: 14종의 기본 자동 공격, 서버 피해와 공통 연출 계열까지 적용합니다. 도탄·산탄·\n  관통·흡혈·반격 같은 고유 능력, 룬 변형, 음향과 적 피격 애니메이션은 후속 범위입니다.\n- 영향 소스: alpha-item-definitions.json, inventory-item-layouts.json,\n  EquippedWeaponBillboard.luau, WeaponAttackVFX.luau, WeaponCombatConfig.luau,\n  WeaponCombatService.luau, DamageResolver.luau\n- 관련 위키: weapon-combat-presentation@v001, inventory-item-concept@v018,\n  character-2d-rendering@v009\n- 검증과 증거: 14개 무기 공격 발생, 적 없음 공격 증가 0, iPhone 17 Pro `401×776`과\n  Galaxy A06 `359×718` Studio Play, 45개 연출 수신·누락 0·객체 수 736 고정·서버 피해와\n  콘솔 오류 없음 확인.\n",
          "source_path": "wiki/content/pages/product-planning-change-log/v008.md",
          "timeline_order": 40
        },
        {
          "id": "product-planning-change-log",
          "title": "제품 기획 변경 원장",
          "summary": "누적 원장을 보존하면서 룬 등급·색·시작점의 일대일 계약과 모바일 보드의 연결 안내·선택 회전·필터 팝업·고대비 능력 설명을 현재 제품 규칙으로 확정했습니다.",
          "status": "active",
          "category": "planning",
          "tags": [
            "planning",
            "decision-log",
            "product",
            "inventory",
            "equipment",
            "rune-board",
            "weapon",
            "combat",
            "mobile",
            "documentation"
          ],
          "created_at": "2026-08-15",
          "updated_at": "2026-08-20",
          "authors": [
            "Codex"
          ],
          "version": 7,
          "change_type": "updated",
          "change_summary": "v006까지의 누적 결정을 보존하고, 독립적이던 룬 색을 등급에 귀속했으며 등급별 시작점·회전 전용 배치·연결 전선 안내와 한 줄 필터 팝업·고대비 능력 설명 규칙을 추가했습니다.",
          "supersedes": "product-planning-change-log@v006",
          "sources": [
            "wiki/content/pages/product-planning-change-log/v006.md",
            "wiki/content/pages/inventory-item-concept/v018.md",
            "docs/gameplay/inventory-rune-ui-spec.md",
            "docs/gameplay/rune-piece-system.md",
            "wiki/content/media/inventory-item-concept/v018/studio-rune-ability-description.jpg",
            "wiki/content/media/inventory-item-concept/v018/studio-rune-filter-popover.jpg"
          ],
          "related": [
            "inventory-item-concept",
            "synergy-icon-system",
            "backpack-combat-stat-database",
            "development-wiki",
            "project-overview"
          ],
          "validation": [
            "luau-compile: InventoryV2 Screen, VisualTokens, RuneBoardModel, RuneMergeModel, StorageSort 통과",
            "python3 -m unittest tests.test_inventory_v2_ui: 7 tests passed",
            "bash tools/test_inventory_v2.sh: InventoryV2.spec ok",
            "python3 tools/wiki.py build/check, tests.test_wiki, tests.test_repository_policy 통과",
            "Roblox Studio Play · iPhone 17 Pro portrait · 401×776: 필터 팝업과 확장된 룬 카드 영역 확인",
            "Roblox Studio Play · Galaxy A06 portrait · 360×800: 필터 팝업·능력 설명·보관함 영역 확인; 콘솔 오류 없음"
          ],
          "body": "# 제품 기획 변경 원장\n\n## 목적과 기록 원칙\n\n이 페이지는 구현 파일 목록이 아니라 ProjectBackpack의 제품 방향이 왜 바뀌었고 지금 어떤\n규칙이 유효한지를 누적 보존합니다. 플레이어 또는 운영자가 경험하는 제품·게임플레이·UX·\n콘텐츠·아트·플랫폼 규칙이 추가, 변경, 대체 또는 폐기될 때 기록합니다. 동작을 바꾸지 않는\n내부 리팩터링은 원장 대상이 아닙니다.\n\n각 결정은 안정적인 ID를 가집니다. 이후 규칙이 달라지면 이미 커밋된 항목을 고치거나 지우지\n않고 새 버전에 후속 항목을 추가해 이전 ID와 관계를 명시합니다. 최신 버전은 과거 원장과\n현재 유효 규칙을 모두 포함하며, 실제 제품 변경·주제별 위키·검증 증거와 같은 커밋에서\n발행합니다.\n\n## 현재 유효 규칙\n\n### PBP-INV-001 — 인벤토리에는 명확한 이탈과 호환 토글이 있다\n\n모바일 인벤토리는 우측 최상단 닫기 버튼으로 메인 화면에 복귀합니다. PC 호환 경로의 Tab\n토글은 진단 호환으로 남지만 현재 제품 UI 완료 기준은 모바일입니다.\n\n### PBP-ITEMDB-002 — 최종 48종이 ItemDB와 런타임의 단일 활성 집합이다\n\n과거 90종과 특수 아이템 미디어는 활성 원본·공개 DB·생성 런타임에서 제거합니다. 무기 14종과\n방어구·장신구 34종의 이름, 사각 점유, 카툰 아이콘과 Roblox 자산 참조를 ItemDB 원본에서\n생성하며 ON/OFF 경계는 향후 콘텐츠 운영을 위해 유지합니다.\n\n### PBP-CONTENT-001 — 폐기 아이템은 모든 제품 표면에서 함께 제거한다\n\n아이템을 실제로 폐기할 때는 카탈로그·레이아웃·이미지·런타임·공개 DB에서 함께 제거하고\n매니페스트 이력만 보존합니다.\n\n### PBP-DOC-001 — 기획 변경은 커밋 시 누적 원장으로 발행한다\n\n물질적인 제품 기획 변경은 사용자 승인 커밋에서 안정적인 ID와 함께 누적 발행합니다.\n\n### PBP-ACTION-001 — Dash는 방향 잠금 이동과 시작 프레임 고정을 사용한다\n\n기본 Dash는 방향을 잠그고 승인된 캐릭터 프레임을 유지합니다. 룬이 추가 거리와 무적시간을\n제공할 수 있으며 최종 거리는 기본의 250%를 넘지 않습니다.\n\n### PBP-DEV-001 — Studio 무게 제한 테스트는 세션 전용이다\n\n기존 Studio 진단값은 영구 저장을 오염시키지 않습니다. 새 인벤토리 구현에서 무게 시스템을\n유지할지는 별도 결정하지만 진단 데이터 비영구 원칙은 유지합니다.\n\n### PBP-INV-009 — 메인 인벤토리는 사각 장착판과 부위별 제한을 사용한다\n\n유효한 사각 배치가 곧 장착입니다. 무기는 여섯 개, 반지는 두 개이며 같은 정의의 무기·반지는\n중복할 수 없습니다. 머리·귀걸이·목걸이·상의·하의·글러브·신발·벨트는 한 개씩 장착하고\n디아블로식 장비 화면은 같은 상태를 투영합니다.\n\n### PBP-SYNERGY-001 — 가방·시너지 제품 방향은 폐기한다\n\n가방 활성 칸, 육각 메인 인벤토리, 26종 시너지, 시너지 필터와 A/B/C 공간 접촉 효과는 새\n제품 방향에서 사용하지 않습니다. 육각형은 아이템별 룬 보드에만 사용합니다.\n\n### PBP-CONTENT-003 — 알파 장비 활성 집합은 48종이다\n\n무기 14종과 방어구·장신구 34종을 사용합니다. 크기별 두 역할을 두고 반지는 동일 아이템\n중복 금지로 인한 강제 조합을 피하기 위해 네 종류를 둡니다. 특수 아이템과 방패는 현재 48종에\n포함하지 않습니다.\n\n### PBP-RUNE-004 — 아이템마다 후보 10개 중 하나인 427칸 보드를 가진다\n\n각 아이템 정의는 61칸 영역 일곱 개, 총 427칸인 후보 보드 10개를 가집니다. 생성 시 하나를\n균등 선택해 VariantId와 Seed를 영구 저장합니다. 0~6 주등급은 영역을 하나씩 열고, 일곱\n중앙 시작점의 색 등록과 한 칸 간격 연결을 사용합니다. 능력 등급 총량은\n30·45·54·60·67·90·81칸이며 레어는 황금 테두리로 구분합니다.\n\n### PBP-COMBAT-001 — 자동 스킬·방어·확률에는 명시적 캡이 있다\n\n무기 스킬은 해당 무기의 기본 공격 횟수로 자동 발동하고 발사체·도탄·관통·다른 스킬은\n카운터를 늘리지 않습니다. 방패 막기는 최대 100%에서 방어력을 두 배로 적용하고, 방어력\n계산 뒤 최종 피해감소는 최대 50%입니다. 행동 빈도·확률·무적·발사체 수에는 항목별 캡을\n적용하되 선형 공격력·체력 성장은 허용합니다.\n\n### PBP-RUNE-003 — 알파 무기 14종은 고정된 능력 정체성을 가진다\n\n검·창·곡궁·석궁·총·메이스·도끼 각 두 종류는 A1~D2와 E1~E3의 실제 구현 훅을 가집니다.\n목걸이·반지·귀걸이는 호환 무기 전체에 적용되는 전역 레어를, 신발은 추가 대시 레어를\n제공합니다.\n\n### PBP-RUNE-005 — 룬은 34종 도형과 effect 기반 아이콘을 사용한다\n\n1~5칸 룬은 회전·반전을 동일시한 34종 자유 폴리헥스를 사용합니다. 일곱 색은 같은 중립 원화를\n틴트하고, 능력 의미는 실제 전투 effect_id와 1:1인 62종 중앙 아이콘으로 별도 합성합니다.\n드래그는 잡은 칸과 실제 형태를 유지하고 마지막 스냅 가이드를 서버 요청값으로 사용합니다.\n\n### PBP-RUNE-006 — 룬 등급·색·시작점은 일대일이며 배치는 회전만 사용한다\n\nG0~G6 룬은 먹빛·상아·초록·하늘·보라·황금·장미와 일대일입니다. 각 룬은 같은 번호 영역의\n중앙 시작점에서만 처음 등록하고 아이템 등급보다 높은 룬은 등록할 수 없습니다. 런타임 배치는\n60° 회전만 제공하고 별도 반전은 제공하지 않습니다. 첫 배치 전에는 중앙 한 칸, 이후에는 같은\n색 네트워크에서 한 칸 떨어진 연결 전선만 밝게 안내합니다.\n\n### PBP-UI-001 — 인벤토리와 룬 보드는 모바일 고정 작업 흐름을 공유한다\n\n상단 상태, 중앙 작업판, 하단 보관함을 안전 영역 안에 고정합니다. 아이템·룬 합성은 두 재료와\n결과 미리보기 문법을 공유하고 룬 보관함은 상하 스크롤을 사용합니다. 빈 룬 칸의 탭은 상단\n중앙에 능력 정보를 표시합니다.\n\n### PBP-UI-002 — 룬 보드는 문맥을 보존하고 필터는 카드 공간을 침범하지 않는다\n\n장착 룬 회전은 마지막 선택 룬에만 적용하고 확대·축소는 보고 있던 보드 위치를 보존합니다.\n룬 보관함은 `색상 필터`와 `칸 수 필터` 두 버튼만 한 줄에 두며, 보드 위 말풍선에서 G0~G6와\n1~5칸을 각각 다중 선택합니다. 능력 설명은 색상명을 반복하지 않고 옅은 황금색 글자·짙은\n보라색 외곽선으로 등급·능력명·수치를 표시합니다.\n\n### PBP-ART-002 — 아이템은 사각 점유와 모바일 전투에 맞는 카툰 실루엣을 사용한다\n\n최종 48종 원화는 굵고 밝은 카툰풍으로 통일합니다. 근접 무기는 위쪽, 활·석궁·총은 오른쪽을\n기본 방향으로 두고 발사체와 궤적을 원화에 굽지 않습니다. 그림의 질량과 돌출부가 사각 점유\n형태에 자연스럽게 맞아야 합니다.\n\n## 변경 원장\n\n### PBP-INV-001 — 인벤토리 이탈과 Tab 토글\n\n- 날짜: 2026-08-15\n- 도메인: 인벤토리 접근성 / 플랫폼 입력\n- 변경 유형: changed\n- 이전 규칙: 화면 내부 닫기 버튼과 명확한 PC 토글 경로가 없었습니다.\n- 새 유효 규칙: 모바일 우측 최상단 닫기 버튼을 두고 PC 호환 시 Tab을 인벤토리 전용\n  토글로 사용하며 기본 플레이어 목록을 해제합니다.\n- 근거: 작업 화면에는 안전한 이탈 경로가 필요하며 한 입력이 두 UI를 열면 안 됩니다.\n- 의도한 사용자 경험: 닫는 법을 탐색하지 않고 즉시 메인 화면으로 돌아갑니다.\n- 범위와 제외: 모바일 터치와 PC 입력 호환에 적용하며 PC 레이아웃 품질은 제외합니다.\n- 영향 소스: Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: Luau 테스트, 소스 검사와 최종 Studio 모바일 화면.\n\n### PBP-INV-002 — 배치 보드 범위와 도구 배치\n\n- 날짜: 2026-08-15\n- 도메인: 모바일 배치 보드 / 공간 가독성\n- 변경 유형: changed\n- 이전 규칙: 빈 배치 영역과 우측 도구의 공간 관계가 충분히 드러나지 않았습니다.\n- 새 유효 규칙: 전체 배치 영역에 옅은 육각 격자를 그리고 우측 상단 모드 탭과 우측 하단\n  확대 도구를 위한 반응형 인셋을 둡니다.\n- 근거: 빈 공간도 게임 공간이며 조작 계층과 동시에 보여야 합니다.\n- 의도한 사용자 경험: 배치 가능 범위와 도구 위치를 즉시 이해합니다.\n- 범위와 제외: 모바일 보드와 모드·확대 도구에 적용합니다.\n- 영향 소스: VisualTokens.luau, ScreenRenderer.luau, ScreenState.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: iPhone 17 Pro와 Galaxy A06 Studio Play의 잘림·겹침 검사.\n\n### PBP-INV-003 — 손가락 위 드래그와 단일 목적지 안내\n\n- 날짜: 2026-08-15\n- 도메인: 인벤토리 드래그 / 배치 피드백\n- 변경 유형: changed\n- 이전 규칙: 아이템이 포인터 아래에 남고 여러 강조가 목표 칸과 경쟁했습니다.\n- 새 유효 규칙: 회전된 그림 전체를 포인터 위로 올리고 그림과 목적지 외곽선만 표시합니다.\n- 근거: 드래그 중에는 대상과 내려놓을 위치가 가장 강하게 읽혀야 합니다.\n- 의도한 사용자 경험: 손가락에 가리지 않은 그림으로 정확히 조준합니다.\n- 범위와 제외: 아이템 드래그에 적용하며 그림이 없는 가방은 점유 형태를 사용합니다.\n- 영향 소스: DragPlacementState.luau, Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 포인터 리프트·잡은 칸·outline-only Luau 테스트.\n\n### PBP-INV-004 — 카드·선택 정보와 0.1Kg 정밀도\n\n- 날짜: 2026-08-15\n- 도메인: 아이템 정보 구조 / 무게 규칙\n- 변경 유형: changed\n- 이전 규칙: 무게 표현과 시너지 정렬이 좁은 카드에서 일관되지 않았습니다.\n- 새 유효 규칙: x.xKg 표시와 0.1Kg 판정을 통일하고 시너지를 카드 가운데 정렬합니다.\n- 근거: 화면 표시와 게임 판정은 같은 값을 사용해야 합니다.\n- 의도한 사용자 경험: 좁은 카드에서 핵심 정보와 초과 이유를 빠르게 이해합니다.\n- 범위와 제외: 저장 카드, 선택 정보, 합계와 허용 판정에 적용합니다.\n- 영향 소스: WeightEvaluator.luau, ItemInstanceHydrator.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013, backpack-combat-stat-database\n- 검증과 증거: 무게 양자화·형식·허용 판정 테스트와 카드 소스 검사.\n\n### PBP-INV-005 — 필터와 배치 모드의 직접 연결\n\n- 날짜: 2026-08-15\n- 도메인: 보관함 탐색 / 모드 전환\n- 변경 유형: changed\n- 이전 규칙: 종류 필터와 배치 탭을 따로 바꿔야 했습니다.\n- 새 유효 규칙: 가방 필터는 가방 배치로, 다른 필터는 아이템 배치와 해당 종류로 이동합니다.\n- 근거: 보관함 종류 선택은 다음 배치 대상의 선택입니다.\n- 의도한 사용자 경험: 한 번의 터치로 원하는 목록과 배치 모드에 도달합니다.\n- 범위와 제외: 일반 종류 필터 다섯 개와 배치 모드 연동에 적용합니다.\n- 영향 소스: ScreenState.luau, Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 모드별 필터 상태 Luau 테스트.\n\n### PBP-INV-006 — 시너지·칸 수 고급 필터\n\n- 날짜: 2026-08-15\n- 도메인: 보관함 고급 탐색 / 모바일 UI\n- 변경 유형: added\n- 이전 규칙: 종류 외의 시너지와 점유 칸 범위를 직접 좁힐 수 없었습니다.\n- 새 유효 규칙: 별도 고급 필터에서 26종 시너지 토글과 1~9 칸 범위를 설정합니다.\n- 근거: 조합과 공간 효율은 종류와 독립적인 탐색 기준입니다.\n- 의도한 사용자 경험: 조합과 크기에 맞는 아이템을 빠르게 좁힙니다.\n- 범위와 제외: 가방과 아이템 칸 범위, 아이템의 하나 이상 시너지 일치에 적용합니다.\n- 영향 소스: ScreenState.luau, Screen.luau, ScreenRenderer.luau, VisualTokens.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 사용자 기획 이미지, Studio 캡처와 두 모바일 화면 테스트.\n\n### PBP-ART-001 — 시너지 아이콘 소형 가독성 규칙\n\n- 날짜: 2026-08-15\n- 도메인: 모바일 UI 아트 방향 / 인벤토리 시너지\n- 변경 유형: changed\n- 이전 규칙: 큰 합본을 축소해 실제 카드 크기에서 세부가 합쳐졌습니다.\n- 새 유효 규칙: 약 25px를 승인 기준으로 대표 심볼·투명 배경·최대 3색·216px 경계를\n  사용합니다.\n- 근거: 작은 화면에서 시너지를 구분하는 속도가 우선입니다.\n- 의도한 사용자 경험: 짧게 훑어도 형태와 대표색으로 시너지를 구분합니다.\n- 범위와 제외: 활성 26종 이미지와 재생성 계약에 적용하며 의미와 효과는 바꾸지 않습니다.\n- 영향 소스: Assets/UI/Backpack/SynergyIcons, SynergyCatalog.luau\n- 관련 위키: synergy-icon-system@v001, inventory-item-concept\n- 검증과 증거: 두 Studio 모바일 화면, 26개 자산과 전용 이미지 테스트.\n\n### PBP-CONTENT-001 — FootprintExpansion21 활성 집합 정리\n\n- 날짜: 2026-08-15\n- 도메인: 아이템 콘텐츠 / 공개 데이터\n- 변경 유형: retired\n- 이전 규칙: 확장 시안 21개가 모두 활성 후보로 남았습니다.\n- 새 유효 규칙: 11개만 활성화하고 10개는 제품 데이터와 미디어에서 제거합니다.\n- 근거: 폐기 시안이 남으면 현재 지원 범위를 잘못 전달합니다.\n- 의도한 사용자 경험: 실제 지원하는 아이템만 게임과 공개 DB에서 확인합니다.\n- 범위와 제외: 해당 10개 아이콘·레이아웃·참조를 제거하고 매니페스트 이력은 보존합니다.\n- 영향 소스: FootprintExpansion21, ItemDB 카탈로그·레이아웃·생성 산출물\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: ItemDB 90개 build/check와 생성 산출물 검사.\n\n### PBP-DOC-001 — 누적 제품 기획 변경 원장\n\n- 날짜: 2026-08-15\n- 도메인: 개발 문서 운영\n- 변경 유형: added\n- 이전 규칙: 기획 규칙의 변경을 한곳에서 계속 추적하는 누적 원장이 없었습니다.\n- 새 유효 규칙: 사용자 승인 커밋마다 물질적 변경을 안정적인 ID와 함께 누적합니다.\n- 근거: 구현이 개선돼도 최종 규칙과 변경 이유가 사라지지 않아야 합니다.\n- 의도한 사용자 경험: 위키 한 페이지에서 현재 규칙과 과거 이유를 연속 확인합니다.\n- 범위와 제외: 제품·게임플레이·UX·콘텐츠·아트·플랫폼·운영에 적용하며 순수 리팩터링은\n  제외합니다.\n- 영향 소스: AGENTS.md, wiki/content/pages/product-planning-change-log\n- 관련 위키: inventory-item-concept, development-wiki\n- 검증과 증거: 위키 빌드·체크·정책 테스트와 동일 커밋 발행.\n\n### PBP-ITEMDB-001 — ItemDB ON/OFF 베이크 경계\n\n- 날짜: 2026-08-16\n- 도메인: 아이템 운영 / 게임 배포\n- 변경 유형: added\n- 이전 규칙: ItemDB에 존재하는 모든 아이템이 항상 생성 런타임과 게임 베이크에 포함됐습니다.\n- 새 유효 규칙: 각 아이템은 ON/OFF 상태를 가지며 OFF는 웹 기획 기록에는 남고 다음 베이크와\n  생성 런타임에서는 제외됩니다. ON 복귀 시 기존 형태·이미지·시너지·효과 설정을 유지합니다.\n- 근거: 일시 제외와 영구 폐기를 구분해야 콘텐츠 실험과 롤백이 데이터 삭제 없이 가능합니다.\n- 의도한 사용자 경험: 운영자는 한 번의 버튼으로 게임 노출을 제어하고 플레이어는 승인된\n  활성 아이템만 만납니다.\n- 범위와 제외: ItemDB 웹 편집, 생성 레이아웃, 게임 카탈로그와 Studio 베이크에 적용합니다.\n  OFF 항목의 원본·웹 검색·이미지는 삭제하지 않습니다.\n- 영향 소스: inventory-item-layouts.json, tools/item_db.py, GeneratedItemLayouts.luau,\n  ItemCatalog.luau, wiki/site/app.js\n- 관련 위키: inventory-item-concept@v014\n- 검증과 증거: 390×844 ON 행 캡처, OFF 생성 제외 테스트, ItemDB 90개 정합성 검사.\n\n### PBP-EFFECT-001 — A·B·C 공간 접촉 효과 영역\n\n- 날짜: 2026-08-16\n- 도메인: 아이템 조합 / 공간 효과 / ItemDB 저작\n- 변경 유형: added\n- 이전 규칙: 아이템은 자기 능력치와 점유 형태만 가졌고 주변 아이템 접촉을 표현하는\n  저작 계약이 없었습니다.\n- 새 유효 규칙: 아이템당 A·B·C 최대 세 효과 슬롯을 두고 점유 경계 바깥 Q/R 다섯 칸까지\n  직접 효과 칸을 선택합니다. 각 슬롯은 종류·조건·능력 ID를 가지며 공간 접촉 판정과 실제\n  능력 실행은 분리합니다.\n- 근거: 가방 배치의 공간 관계를 조합 빌드로 확장하되 전투 규칙이 배치 기하에 결합되지\n  않아야 합니다.\n- 의도한 사용자 경험: 플레이어는 아이템을 어디에 놓고 무엇과 맞닿게 하는지로 추가 효과를\n  설계하고, 운영자는 같은 육각 편집 방식으로 규칙을 시각적으로 저작합니다.\n- 범위와 제외: 효과 칸 데이터, 카탈로그 ID, 회전 접촉 후보 평가까지 포함합니다. 조건 논리,\n  능력치 합산, 전투 발현과 시각 효과는 후속 범위입니다.\n- 영향 소스: item-effect-catalog.json, item-effect-slots.md, inventory-item-layouts.json,\n  GeneratedItemLayouts.luau, ItemEffectContactEvaluator.luau, ItemInstanceHydrator.luau,\n  wiki/site/app.js, wiki/site/item-db.js\n- 관련 위키: inventory-item-concept@v014, backpack-combat-stat-database\n- 검증과 증거: 390×844 A/B/C 편집 캡처, 효과 좌표·카탈로그·회전 접촉·드래그 비활성 테스트,\n  Studio의 동일 리비전 90개 레이아웃과 EffectCatalog 확인.\n\n### PBP-ITEMDB-002 — ItemDB 칸 수·시너지·게임 ON 복합 필터\n\n- 날짜: 2026-08-18\n- 도메인: ItemDB 운영 / 웹 탐색\n- 변경 유형: added\n- 이전 규칙: ItemDB는 이름과 대분류만 좁힐 수 있어 점유 크기·시너지·실제 게임 포함\n  집합을 따로 확인해야 했습니다.\n- 새 유효 규칙: 최소·최대 칸 수, 여러 시너지의 OR, 전체/게임 ON 상태를 검색·대분류와\n  AND로 조합하며 스크롤과 효과 카탈로그 접힘 상태를 재렌더링 뒤에도 유지합니다.\n- 근거: 전체 기획 목록과 현재 게임 집합을 한 화면에서 빠르게 비교해야 합니다.\n- 의도한 사용자 경험: “게임에 들어가는 2~4칸 기계 또는 원거리 아이템”을 그대로 필터로\n  표현하고 실제 아이콘으로 결과를 빠르게 훑습니다.\n- 범위와 제외: 공개·로컬 ItemDB 탐색과 시너지 미디어에 적용합니다. 게임 안의 보관함\n  고급 필터 상태와는 별도입니다.\n- 영향 소스: tools/item_db.py, wiki/site/app.js, wiki/site/app.css, wiki/site/item-db-data.js,\n  wiki/site/synergy-media\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: 1440×900 복합 필터 캡처, 8개 ON 결과, 26/26 이미지 로드,\n  catalogOpen=false·scrollY=188 유지, 브라우저 콘솔 오류·경고 0건.\n\n### PBP-INV-007 — 최대 6개 장착 무기와 필드 표시\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 장착 / 필드 가독성\n- 변경 유형: added\n- 이전 규칙: 유효하게 배치된 무기는 보드 안에서만 보였고 장착 목록·한도·필드 표시 계약이\n  없었습니다.\n- 새 유효 규칙: 유효한 Weapon은 최초 배치 순서대로 최대 6개까지 장착되고 2×3 장착 탭,\n  상세 정보·빼기, 모든 캐릭터 위의 방향 반응 이미지로 표시됩니다.\n- 근거: 공간 배치 결과가 실제 플레이 장비로 읽혀야 인벤토리 퍼즐과 전투 준비가 연결됩니다.\n- 의도한 사용자 경험: 여섯 슬롯에서 장착 상태를 관리하고 필드에서 자신의 빌드를 즉시\n  알아봅니다.\n- 범위와 제외: 장착 상태·관리·이미지 표시에 적용합니다. 실제 공격 실행과 무기 모델은\n  후속 범위입니다.\n- 영향 소스: EquippedItemModel.luau, InventoryBoardModel.luau, InventorySerializer.luau,\n  Screen.luau, ScreenRenderer.luau, InventoryService.luau, EquippedWeaponBillboard.luau,\n  CharacterController.luau, DirectionResolver.luau\n- 관련 위키: inventory-item-concept@v015, character-2d-rendering@v009\n- 검증과 증거: iPhone 17 Pro·Galaxy A06 장착 슬롯과 상세 모달 캡처, 6개 한도 Luau 테스트,\n  West 87.8°·East -92.1° 방향 회전, 최종 Studio 콘솔 오류·경고 0건.\n\n### PBP-INV-008 — 상태와 무관한 2px 배치 외곽선\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 시각 계층\n- 변경 유형: changed\n- 이전 규칙: 가방 시너지나 배치 미리보기 상태에 따라 외곽선이 3~7px로 굵어질 수 있었습니다.\n- 새 유효 규칙: 가방·아이템·선택·시너지·유효·무효·미리보기 외곽선은 모두 2px이며 상태는\n  색으로만 구분합니다.\n- 근거: 굵기 변화가 점유 형태를 실제보다 커 보이게 하고 아이템 그림과 경쟁했습니다.\n- 의도한 사용자 경험: 같은 공간 형태를 안정적으로 읽고 색으로 상태만 빠르게 구분합니다.\n- 범위와 제외: 인벤토리 보드와 보관함 선택 외곽선에 적용합니다.\n- 영향 소스: ScreenState.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: 모든 외곽선 경로가 GetBoundaryThickness=2를 사용하는 Luau·소스 회귀 테스트.\n\n### PBP-CONTENT-002 — 게임 ON 32개 승인 집합\n\n- 날짜: 2026-08-18\n- 도메인: 아이템 콘텐츠 / 게임 배포\n- 변경 유형: changed\n- 이전 규칙: 전체 90개 ItemDB가 모두 게임 ON으로 생성 런타임에 포함됐습니다.\n- 새 유효 규칙: 전체 기획 목록 90개를 보존하면서 게임 ON 32개만 생성 런타임과 Studio\n  베이크에 포함합니다. 포켓 네일건은 MACHINE을 제외한 RANGED·GUN, 소화기 철퇴는\n  FORGED 대신 MACHINE을 사용합니다.\n- 근거: 현재 게임에 투입할 승인 콘텐츠와 후속 기획 후보를 데이터 삭제 없이 구분합니다.\n- 의도한 사용자 경험: 플레이어는 승인된 32개만 만나고 운영자는 OFF 58개를 계속 비교·복원할\n  수 있습니다.\n- 범위와 제외: PBP-CONTENT-001의 전체 90개 카탈로그와 폐기 이력은 유지하며 게임 포함 집합만\n  변경합니다.\n- 영향 소스: inventory-item-layouts.json, GeneratedItemLayouts.luau, wiki/site/item-db-data.js\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: ItemDB revision a35b00cf76ec6c75, 전체 90·게임 ON 32 build/check,\n  Studio 같은 소스 베이크와 저장.\n\n### PBP-ACTION-001 — 20스터드 방향 잠금 Dash\n\n- 날짜: 2026-08-18\n- 도메인: 캐릭터 액션 / 이동 / 스프라이트 일관성\n- 변경 유형: changed\n- 이전 규칙: Dash는 0.20초 동안 목표 속도 30 studs/s의 순간 충격을 적용하고 별도 Dash\n  포즈를 재생할 수 있었습니다.\n- 새 유효 규칙: Dash는 0.30초 동안 선택 방향을 잠그고 장애물이 없는 기준 20스터드를\n  이동합니다. WalkSpeed·AutoRotate를 잠근 뒤 복원하고 시작 순간의 완성 프레임을 유지합니다.\n- 근거: 이동 거리를 입력·현재 속도와 분리해 일관되게 만들고, 승인 Run 아틀라스가 레거시\n  모듈식 Walk/Dash 이미지로 바뀌는 비율 변화를 막습니다.\n- 의도한 사용자 경험: Dash 방향이 중간에 꺾이지 않고 같은 거리를 이동하며 캐릭터 모습도\n  한 프레임으로 안정적으로 유지됩니다.\n- 범위와 제외: 클라이언트 Dash 이동·방향·스프라이트에 적용합니다. 장애물 관통이나 별도\n  Dash 공격 판정은 추가하지 않습니다.\n- 영향 소스: character-actions.md, Config.luau, PlayerActionController.luau,\n  CharacterController.luau, test_two_direction_run_build.py\n- 관련 위키: character-2d-rendering@v009\n- 검증과 증거: Galaxy A06 Play에서 19.46스터드 이동, 이동 중 WalkSpeed=0·AutoRotate=false,\n  종료 뒤 16·true 복원, 최종 콘솔 오류·경고 0건.\n\n### PBP-DEV-001 — 세션 전용 허용 무게 테스트 창\n\n- 날짜: 2026-08-18\n- 도메인: Studio 개발 도구 / 데이터 안전\n- 변경 유형: added\n- 이전 규칙: 허용 무게 경계값을 플레이 중 빠르게 바꾸는 전용 진단 UI가 없었습니다.\n- 새 유효 규칙: Studio에서만 F2 창으로 허용 무게를 1Kg씩 조정하고, 영구 저장에는 플레이어의\n  원래 제한값을 사용합니다.\n- 근거: 무게 초과 UI와 배치 경계를 반복 검증하되 진단 값이 사용자 데이터에 남으면 안 됩니다.\n- 의도한 사용자 경험: 개발자는 Play를 다시 시작하지 않고 경계값을 시험하며 플레이어는\n  테스트 기능이나 변조된 저장값을 보지 않습니다.\n- 범위와 제외: Roblox Studio 진단 세션에만 적용하며 모바일 제품 UI 완료 범위가 아닙니다.\n- 영향 소스: DeveloperTestControls.luau, DeveloperTestWindow.luau, Screen.luau,\n  InventoryService.luau\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: Studio-only 생성·서버 거부·원래 제한 직렬화 소스 검사와 Luau 경계 테스트.\n\n### PBP-INV-009 — 사각 장착판과 부위별 중복 제한\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 장착 / 공간 퍼즐\n- 변경 유형: superseded\n- 이전 규칙: PBP-INV-002~007은 육각 가방이 활성 칸을 만들고 시너지·필터와 유효 배치 무기\n  여섯 개를 관리하는 메인 인벤토리를 사용했습니다.\n- 새 유효 규칙: 아이템은 사각 폴리오미노로 배치하며 유효한 배치가 곧 장착입니다. 무기는\n  여섯 개, 반지는 두 개, 나머지 지정 부위는 한 개이며 무기·반지는 같은 DefinitionId를\n  중복할 수 없습니다. 디아블로식 장비창은 권위 배치의 투영입니다.\n- 근거: 장착 제한을 즉시 이해시키면서 공간 퍼즐은 크기와 형태로 유지해야 합니다.\n- 의도한 사용자 경험: 플레이어는 별도 장착 버튼 없이 배치와 장비 요약을 같은 상태로\n  이해합니다.\n- 범위와 제외: 메인 장착판과 장착 부위에 적용하며 특수 아이템·방패 슬롯은 제외합니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016\n- 검증과 증거: 기획 표에서 부위별 장착 수와 48종 콘텐츠 수량 검산.\n\n### PBP-SYNERGY-001 — 가방·시너지 시스템 전면 폐기\n\n- 날짜: 2026-08-18\n- 도메인: 인벤토리 / 시너지 / 아이템 조합\n- 변경 유형: retired\n- 이전 규칙: PBP-INV-004·006, PBP-ART-001과 PBP-EFFECT-001은 가방 활성 칸, 26종\n  시너지, 시너지 필터와 A/B/C 공간 접촉 효과를 제품 규칙으로 사용했습니다.\n- 새 유효 규칙: 가방 활성 칸, 육각 메인 인벤토리, 시너지 판정·아이콘·필터와 공간 접촉\n  효과를 후속 제품에서 사용하지 않습니다. 육각형은 아이템별 룬 보드에만 사용합니다.\n- 근거: 장착 규칙과 룬 성장 퍼즐이 각각 명확한 책임을 가져야 합니다.\n- 의도한 사용자 경험: 메인 장착은 사각형으로 빠르게 읽고 깊은 육각 퍼즐은 선택한 아이템\n  안에서 집중해 풉니다.\n- 범위와 제외: 새 제품 방향을 폐기하며 기존 코드·자산 제거는 후속 구현 커밋에서 수행합니다.\n- 영향 소스: inventory-item-concept@v016, inventory-item-concept@v015\n- 관련 위키: synergy-icon-system@v001, inventory-item-concept@v016\n- 검증과 증거: v016 폐기·제외 목록과 이전 v015 구현 범위 대조.\n\n### PBP-CONTENT-003 — 알파 장비 48종과 점유 크기\n\n- 날짜: 2026-08-18\n- 도메인: 알파 아이템 콘텐츠 / 장착 부위\n- 변경 유형: superseded\n- 이전 규칙: PBP-CONTENT-002의 현행 게임 ON 32개와 과거 90개 카탈로그가 실제 알파\n  배포 집합이었습니다.\n- 새 유효 규칙: 다음 알파 구현 목표는 무기 14종, 방어구·장신구 34종의 48종입니다. 머리·\n  상의·하의는 4/6칸, 귀걸이·반지는 1칸, 목걸이는 2/3칸, 글러브·신발·벨트는 2/4칸을\n  사용합니다.\n- 근거: 부위별 역할과 사각 점유 크기를 함께 선택하게 해 배치 조합을 늘립니다.\n- 의도한 사용자 경험: 작은 장비의 공간 효율과 큰 장비의 역할을 비교해 자신만의 장착판을\n  만듭니다.\n- 범위와 제외: 48종은 기획 목표이며 현재 ItemDB와 Studio ON 32개는 구현 전까지 그대로입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 무기 14 + 부위별 장비 34 = 48 산술 검산.\n\n### PBP-RUNE-001 — Seed 고정 259칸 아이템 룬 보드\n\n- 날짜: 2026-08-18\n- 도메인: 아이템 성장 / 룬 퍼즐 / 합성\n- 변경 유형: added\n- 이전 규칙: 각 아이템에 독립적인 장기 육각 성장판과 룬 조각 합성 계약이 없었습니다.\n- 새 유효 규칙: 각 아이템은 37칸 영역 일곱 개를 0~6등급에 하나씩 열고, 색별 시작점에서\n  젬블로식 한 칸 간격으로 1~5칸 룬을 연결합니다. 전체 능력 위치는 생성 Seed로 고정하며\n  합성 시 기준 아이템의 Seed와 배치를 보존합니다.\n- 근거: 같은 아이템도 경로·룬 모양·색 차단을 고민하는 장기 성장 퍼즐이 필요합니다.\n- 의도한 사용자 경험: 적은 룬으로 원하는 고등급 능력까지 길을 만들고 다른 색의 미래 경로를\n  함께 계획합니다.\n- 범위와 제외: 보드·등급 개방·룬/아이템 합성 계약이며 실제 생성기와 저장 마이그레이션은\n  후속 구현입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016\n- 검증과 증거: 일곱 영역 각각 37칸과 전체 259칸, 영역별 능력 분포 합계 검산.\n\n### PBP-RUNE-002 — 룬 능력 예산·등급 증가·레어 칸\n\n- 날짜: 2026-08-18\n- 도메인: 룬 능력 / 밸런스 / UI 표현\n- 변경 유형: added\n- 이전 규칙: 룬 능력의 등급별 개수·표시 정밀도·레어 판정과 아이템 정체성 보호 규칙이\n  없었습니다.\n- 새 유효 규칙: 전체 능력 등급 개수는 18·27·33·37·41·50·53이며 같은 능력의 실제 등장\n  등급은 UI 표시값까지 엄격히 증가합니다. 구조형 레어는 6등급 영역의 황금 칸에서 한 단위만\n  제공하고 Seed는 위치만 바꿉니다.\n- 근거: 상위 등급의 보상감을 보존하고 좋은 Seed가 총 전투력 자체를 재추첨하지 않게 합니다.\n- 의도한 사용자 경험: 황금 칸을 장기 목표로 삼되 낮은 등급 경로도 매 단계 분명한 성장을\n  제공합니다.\n- 범위와 제외: 일반 POWER/SPEED/CHANCE/TRAIT/GUARD/TIME/RANGE와 레어 표시에 적용합니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 등급·트랙별 칸 수와 259칸 합계, 모든 표시 수치의 단조 증가 수동 검토.\n\n### PBP-COMBAT-001 — 자동 스킬과 비선형 능력 캡\n\n- 날짜: 2026-08-18\n- 도메인: 전투 능력 / 자동 스킬 / 방어 계산\n- 변경 유형: added\n- 이전 규칙: 룬 인플레이션에서 행동 빈도·확률·무적·발사체 수를 안전하게 제한하는 공통\n  계산 순서가 없었습니다.\n- 새 유효 규칙: 자동 스킬은 해당 무기의 기본 공격 실행 횟수로 발동하고 감소는 최대 8회,\n  최소 요구 횟수는 1회입니다. 방패 막기는 최대 100%에서 방어력을 두 배로 적용하며 방어력\n  이후 최종 피해감소는 최대 50%입니다. 이동·공격·대시·회피·회복·보호막 등은 v016의\n  항목별 캡을 사용합니다.\n- 근거: 적 수치 강화로 대응 가능한 선형 인플레이션은 허용하되 무한 행동·완전 무적·확률\n  초과는 막아야 합니다.\n- 의도한 사용자 경험: 큰 숫자 성장은 즐기면서도 공격과 피격의 기본 규칙은 계속 작동합니다.\n- 범위와 제외: 탄약, 탄약 미소모, 소모품 미소모와 스킬 초기화 확률은 사용하지 않습니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: backpack-combat-stat-database, inventory-item-concept@v016\n- 검증과 증거: 계산 순서와 캡·제외 목록의 기획 교차 검토.\n\n### PBP-RUNE-003 — 알파 무기 14종의 보드 정체성\n\n- 날짜: 2026-08-18\n- 도메인: 무기 콘텐츠 / 룬 보드 / 자동 스킬\n- 변경 유형: added\n- 이전 규칙: 알파 무기별 자동 스킬 조건과 259칸 A/B/C/D·레어 배분이 고정되지 않았습니다.\n- 새 유효 규칙: 일곱 무기 형태에 두 종류씩 14개를 두고 각 보드는 A 102, B 71, C 48,\n  D 32, 6등급 로컬 레어 6칸을 가집니다. 목걸이는 발사체, 반지는 자동 스킬 요구 공격,\n  귀걸이는 근거리 사거리의 전역 레어를 제공하고 신발만 추가 대시를 제공합니다.\n- 근거: Seed 위치가 달라도 무기 이름과 공격 방식에 맞는 성장 정체성이 유지돼야 합니다.\n- 의도한 사용자 경험: 같은 룬이라도 연격검·공성 석궁·흡혈 도끼에서 서로 다른 경로와\n  자동 스킬을 강화합니다.\n- 범위와 제외: 14종의 알파 기획 계약이며 최종 아이콘·폴리오미노 좌표·전투 구현은 후속입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 각 무기 레어 합계 6칸과 보드 전체 259칸 산술 검산.\n\n### PBP-ITEMDB-002 — 최종 48종 활성 ItemDB 전환\n\n- 날짜: 2026-08-20\n- 도메인: 아이템 콘텐츠 / 공개 데이터베이스 / 런타임 배포\n- 변경 유형: superseded\n- 대체 대상: PBP-ITEMDB-001, PBP-CONTENT-003의 \"후속 구현 목표\" 상태\n- 이전 규칙: 새 48종은 기획 목표이고 과거 90종과 게임 ON 32종이 구현 전 역사적 현행\n  상태였습니다.\n- 새 유효 규칙: 무기 14종과 방어구·장신구 34종의 최종 48종만 ItemDB 원본, 생성 런타임,\n  공개 미디어의 활성 집합으로 사용합니다. 과거 아이콘과 특수 아이템은 제거하고 ON/OFF\n  운영 경계는 유지합니다.\n- 근거: 기획·로컬 원화·공개 DB·게임 카탈로그의 서로 다른 활성 집합은 이름·점유·자산 ID\n  불일치를 만듭니다.\n- 의도한 사용자 경험: 플레이어와 개발자가 같은 최종 48종의 이미지와 형태만 봅니다.\n- 범위와 제외: 아이템 정의·아이콘·사각 점유·공개 DB에 적용하며 과거 위키 기록은 보존합니다.\n- 영향 소스: inventory-item-art-catalog.md, inventory-item-layouts.json,\n  GeneratedItemLayouts.luau, ItemCatalog.luau, wiki/site/item-db-data.js\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: ItemDB 48종 빌드·체크, 최종 카탈로그와 모바일 공개 DB 캡처.\n\n### PBP-RUNE-004 — 427칸·후보 10개 룬 보드\n\n- 날짜: 2026-08-20\n- 도메인: 아이템 성장 / 룬 보드 / 랜덤화\n- 변경 유형: superseded\n- 대체 대상: PBP-RUNE-001, PBP-RUNE-002\n- 이전 규칙: 모든 아이템은 37칸 영역 일곱 개의 259칸 보드 하나를 Seed로 섞고, 능력 등급\n  총량 18·27·33·37·41·50·53을 사용했습니다.\n- 새 유효 규칙: 각 영역을 반지름 4인 61칸으로 확대해 전체 427칸을 사용합니다. 아이템\n  정의마다 결정론적으로 생성된 후보 10개를 두고 아이템 생성 시 하나를 균등 선택해 VariantId와\n  Seed를 저장합니다. 보드당 능력 등급 총량은 30·45·54·60·67·90·81입니다.\n- 근거: 11개 능력 계열과 레어 노드, 일곱 색 경로를 한 판에서 읽고 우회할 충분한 공간이\n  필요합니다. 후보를 제한하면 다양성과 재현·검증을 함께 확보할 수 있습니다.\n- 의도한 사용자 경험: 같은 아이템에서도 다른 길을 계획하되 총 능력 예산이 운에 따라 바뀌지는\n  않습니다.\n- 범위와 제외: 48종 전체 480개 보드에 적용하며 런타임 재굴림은 허용하지 않습니다.\n- 영향 소스: item-rune-board-database.json, GeneratedRuneBoardDB.luau,\n  rune-board-db-data.js\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 생성기 결과 48×10=480보드, 보드마다 7×61=427칸, revision\n  6e735afdab3d7550.\n\n### PBP-RUNE-005 — 34종 룬 도형과 62종 능력 아이콘\n\n- 날짜: 2026-08-20\n- 도메인: 룬 조각 / 보드 가독성 / 터치 배치\n- 변경 유형: added\n- 이전 규칙: 룬은 1~5칸 젬블로식 조각이라는 개념만 있었고 완전한 형태군, 공용 원화와\n  능력 아이콘의 책임 분리가 고정되지 않았습니다.\n- 새 유효 규칙: 회전·반전을 동일시한 1·1·3·7·22개, 총 34종 자유 폴리헥스를 사용합니다.\n  일곱 색은 빈 중앙 메달의 중립 원화를 틴트하고, 62종 전투 effect 아이콘을 중앙에 별도\n  합성합니다. 드래그는 실제 도형·잡은 칸·회전·반전을 보존하며 마지막 스냅 가이드를 확정값으로\n  사용합니다.\n- 근거: 색·등급·능력 의미를 한 장의 원화에 굽지 않아야 작은 화면에서도 의미를 읽고 데이터\n  변경에도 자산을 재사용할 수 있습니다.\n- 의도한 사용자 경험: 탭하지 않아도 대략적인 능력 종류를 알고, 손가락 아래에서 룬이 튀지\n  않은 채 예상 위치에 놓입니다.\n- 범위와 제외: 룬 카드·보드 노드·드래그 미리보기에 적용하며 상세 수치는 텍스트로 제공합니다.\n- 영향 소스: rune-piece-catalog.json, rune-ability-icon-catalog.json,\n  rune_hex_neutral.png, rune_ability_icons.png, UIPrimitives.luau, Screen.luau\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 형태군 34개, effect 아이콘 62개 생성·누락 검사와 아이콘 시트.\n\n### PBP-UI-001 — 모바일 인벤토리·룬 보드의 단일 작업 흐름\n\n- 날짜: 2026-08-20\n- 도메인: 모바일 UI / 인벤토리 / 룬 보드 / 합성\n- 변경 유형: added\n- 이전 규칙: 사각 장착과 룬 보드의 개별 기획은 있었지만 화면 내 기능 위치, 터치 우선순위,\n  필터·합성·복귀 상태의 완전한 흐름이 없었습니다.\n- 새 유효 규칙: 두 화면은 안전 영역 아래 상단 상태, 중앙 작업판, 하단 보관함을 공유합니다.\n  카드 탭은 룬 보드 진입, 드래그는 배치 또는 합성을 우선합니다. 룬 보관함은 상하 스크롤,\n  한 색 또는 전체를 고르는 7색 필터와 독립 ON/OFF인 1~5칸 필터를 제공하고, 빈 보드 탭은\n  상단 중앙에 능력을 표시합니다.\n- 근거: 모바일에서는 화면 전환마다 탐색 위치와 재료가 사라지면 배치 퍼즐의 비교 비용이\n  지나치게 커집니다.\n- 의도한 사용자 경험: 인벤토리 배치, 아이템 성장, 룬 배치와 합성을 같은 손동작 문법으로\n  왕복합니다.\n- 범위와 제외: 모바일 세로 화면과 터치 입력에 적용하며 PC 밀도·마우스 품질은 현재 완료\n  기준이 아닙니다.\n- 영향 소스: inventory-rune-ui-spec.md, InventoryV2, RuneBoard, InventoryV2Service.luau\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 정적 상태·Luau 테스트, iPhone 17 Pro 400×777 및 iPhone 7 374×666 Studio\n  Play 캡처, 핵심 입력 경로와 콘솔 오류 없음 확인.\n\n### PBP-ART-002 — 최종 아이템 카툰 아트와 방향 규칙\n\n- 날짜: 2026-08-20\n- 도메인: 아이템 아트 / 모바일 전투 / 사각 점유\n- 변경 유형: superseded\n- 대체 대상: PBP-ART-001의 육각·시너지 카드 중심 아트 계약\n- 이전 규칙: 실사풍 또는 고풍스러운 원화와 육각 시너지 카드 문법이 섞였고, 일부 무기는\n  사각 점유와 전투 회전 기준에 맞지 않았습니다.\n- 새 유효 규칙: 48종 전체를 밝고 굵은 카툰풍으로 통일하고 사각 폴리오미노 질량에 맞춥니다.\n  근접 무기는 위쪽, 활·석궁·총은 오른쪽을 기본 방향으로 하며 발사체·공격 궤적은 원화에서\n  제외합니다.\n- 근거: Brotato식 자동 공격에서는 작은 캐릭터 주변을 도는 장비의 방향과 실루엣이 즉시\n  읽혀야 합니다.\n- 의도한 사용자 경험: 보관함·장착판·전투에서 같은 아이템을 형태만으로 알아봅니다.\n- 범위와 제외: 최종 48종 인벤토리 원화에 적용하며 실제 공격 VFX와 투사체는 별도 자산입니다.\n- 영향 소스: Assets/Items/InventoryIcons, inventory-item-art-catalog.md,\n  uploaded_asset_ids.json\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 최종 48종 카탈로그와 공개 ItemDB 캡처.\n\n### PBP-RUNE-006 — 등급·색·시작점 일치와 회전 전용 배치\n\n- 날짜: 2026-08-20\n- 도메인: 룬 성장 / 연결 퍼즐 / 배치 권위\n- 변경 유형: changed\n- 대체 대상: PBP-RUNE-004의 자유 시작 색 등록, PBP-RUNE-005의 런타임 반전 조작\n- 이전 규칙: 룬 색과 합성 등급은 독립 값이었고, 해금된 어느 중앙 시작점에서든 아직 등록하지\n  않은 색을 시작할 수 있으며 플레이 중 회전과 반전을 모두 제공했습니다.\n- 새 유효 규칙: G0~G6 룬 색은 아이템 등급색과 일치합니다. 룬은 같은 번호 영역의 중앙\n  시작점에서만 첫 등록하며 아이템 등급보다 높은 룬은 배치할 수 없습니다. 5칸 합성으로 등급이\n  오르면 다음 등급 색으로 바뀌고 런타임 조작은 60° 회전만 제공합니다. 첫 룬은 중앙 한 칸만\n  덮으면 도형의 어느 셀을 잡았든 유효하며 이후에는 한 칸 간격 연결 전선을 안내합니다.\n- 근거: 색·등급·시작점이 서로 다른 축이면 성장 잠금과 연결 가능 위치를 화면만 보고 예측하기\n  어렵고 저장 데이터가 모순될 수 있습니다.\n- 의도한 사용자 경험: 새 등급을 열 때 같은 색의 새 출발점을 즉시 이해하고, 보드가 보여 주는\n  한 칸의 목표와 실제 도형 가이드만으로 자유로운 첫 배치를 시도합니다.\n- 범위와 제외: 룬 생성·합성·저장 정규화·보드 배치·회전에 적용합니다. 34개 자유 폴리헥스\n  카탈로그의 중복 제거 기준은 유지합니다.\n- 영향 소스: rune-piece-system.md, inventory-rune-ui-spec.md, RuneBoardModel.luau,\n  RuneMergeModel.luau, InventoryV2Service.luau, Screen.luau\n- 관련 위키: inventory-item-concept@v018\n- 검증과 증거: InventoryV2 Luau 테스트의 등급색 불일치 거절, 등급별 시작점, 5칸 합성 색\n  승급, 첫 중앙 목표와 한 칸 간격 전선 검증.\n\n### PBP-UI-002 — 모바일 룬 보드의 문맥 보존 조작과 팝업 필터\n\n- 날짜: 2026-08-20\n- 도메인: 모바일 UI / 룬 보드 / 보관함 탐색\n- 변경 유형: changed\n- 대체 대상: PBP-UI-001의 상시 펼친 단일 색 필터와 보드 중심 재확대\n- 이전 규칙: 색상·칸 수 선택지가 보관함 위에 계속 공간을 차지하고 색상은 한 개 또는 전체만\n  골랐습니다. 확대할 때 보드 중앙으로 시점이 이동했고 회전·반전은 들고 있는 룬에 묶였습니다.\n- 새 유효 규칙: `색상 필터`와 `칸 수 필터` 한 줄 트리거가 각각 다중 선택 말풍선을 열며\n  바깥 탭으로 닫힙니다. 장착 룬 회전은 마지막 선택 룬에만 적용하고 확대·축소는 현재 보던\n  논리 위치를 유지합니다. 상단 능력 설명은 색상명을 빼고 고대비 등급·능력·수치만 표시합니다.\n- 근거: 좁은 세로 화면에서는 선택지를 계속 펼쳐 두는 것보다 실제 룬 카드를 더 많이 보여 주는\n  편이 중요하며, 카메라와 조작 대상이 예기치 않게 바뀌면 퍼즐 경로를 다시 찾아야 합니다.\n- 의도한 사용자 경험: 여러 색·크기를 짧은 팝업에서 조합해 찾고, 보던 위치와 선택 룬을 잃지\n  않은 채 확대·회전하며, 탭 설명을 즉시 읽습니다.\n- 범위와 제외: 모바일 세로 룬 장착 화면과 터치 입력에 적용합니다. PC 화면 밀도와 마우스\n  동등성은 현재 완료 기준이 아닙니다.\n- 영향 소스: inventory-rune-ui-spec.md, Screen.luau, VisualTokens.luau,\n  StorageSort.luau, test_inventory_v2_ui.py\n- 관련 위키: inventory-item-concept@v018\n- 검증과 증거: Galaxy A06 세로 Studio Play에서 필터 팝업·확장된 카드 영역·고대비 능력\n  설명을 확인했고, Studio MCP 진단과 7개 UI 계약 테스트를 통과했습니다.\n",
          "source_path": "wiki/content/pages/product-planning-change-log/v007.md",
          "timeline_order": 39
        },
        {
          "id": "product-planning-change-log",
          "title": "제품 기획 변경 원장",
          "summary": "누적 원장을 보존하면서 최종 48종 아이템, 5×5→9×9 사각 장착, 후보 10개 중 선택되는 427칸 룬 보드, 34종 룬 도형과 62종 능력 아이콘, 모바일 UI를 현재 제품 규칙으로 확정했습니다.",
          "status": "active",
          "category": "planning",
          "tags": [
            "planning",
            "decision-log",
            "product",
            "inventory",
            "equipment",
            "rune-board",
            "weapon",
            "combat",
            "mobile",
            "documentation"
          ],
          "created_at": "2026-08-15",
          "updated_at": "2026-08-20",
          "authors": [
            "Codex"
          ],
          "version": 6,
          "change_type": "updated",
          "change_summary": "v005까지의 결정을 그대로 보존하고, 기획 상태였던 48종 사각 장비를 실제 ItemDB 기준으로 전환했으며 259칸 룬 보드를 427칸·후보 10개 계약으로 대체하고 모바일 배치·합성·필터·능력 아이콘 규칙을 추가했습니다.",
          "supersedes": "product-planning-change-log@v005",
          "sources": [
            "wiki/content/pages/product-planning-change-log/v005.md",
            "wiki/content/pages/inventory-item-concept/v017.md",
            "docs/gameplay/inventory-rune-ui-spec.md",
            "docs/gameplay/item-rune-board-database.json",
            "wiki/content/media/inventory-item-concept/v017/studio-iphone17-inventory.jpg",
            "wiki/content/media/inventory-item-concept/v017/studio-iphone17-rune-board.jpg",
            "wiki/content/media/inventory-item-concept/v017/studio-iphone7-rune-board.jpg"
          ],
          "related": [
            "inventory-item-concept",
            "synergy-icon-system",
            "backpack-combat-stat-database",
            "development-wiki",
            "project-overview"
          ],
          "validation": [
            "기획·생성 검산: 7×61=427칸, 48×10=480개 후보 보드",
            "기획·생성 검산: 알파 장비 14+34=48종, 룬 폴리헥스 1+1+3+7+22=34종",
            "python3 tools/item_db.py build: 48 items, revision d6328b1d857becb6",
            "python3 tools/rune_board_db.py build: 480 boards, revision 6e735afdab3d7550",
            "python3 -m unittest discover -s tests -p 'test_*.py': 80 tests passed",
            "bash tools/test_inventory_v2.sh: InventoryV2.spec ok",
            "bash tools/test_backpack_ui.sh and tools/test_item_stats.sh: passed",
            "tests/*.spec.js: 6 wiki/DB suites passed",
            "python3 tools/wiki.py check: 9 pages, 55 revisions, 64 media files",
            "Roblox Studio ItemDB bake: revision d6328b1d857becb6, 48 items",
            "Roblox Studio Play · iPhone 17 Pro portrait 400×777 and iPhone 7 portrait 374×666: core inventory/rune flow verified; console clean"
          ],
          "body": "# 제품 기획 변경 원장\n\n## 목적과 기록 원칙\n\n이 페이지는 구현 파일 목록이 아니라 ProjectBackpack의 제품 방향이 왜 바뀌었고 지금 어떤\n규칙이 유효한지를 누적 보존합니다. 플레이어 또는 운영자가 경험하는 제품·게임플레이·UX·\n콘텐츠·아트·플랫폼 규칙이 추가, 변경, 대체 또는 폐기될 때 기록합니다. 동작을 바꾸지 않는\n내부 리팩터링은 원장 대상이 아닙니다.\n\n각 결정은 안정적인 ID를 가집니다. 이후 규칙이 달라지면 이미 커밋된 항목을 고치거나 지우지\n않고 새 버전에 후속 항목을 추가해 이전 ID와 관계를 명시합니다. 최신 버전은 과거 원장과\n현재 유효 규칙을 모두 포함하며, 실제 제품 변경·주제별 위키·검증 증거와 같은 커밋에서\n발행합니다.\n\n## 현재 유효 규칙\n\n### PBP-INV-001 — 인벤토리에는 명확한 이탈과 호환 토글이 있다\n\n모바일 인벤토리는 우측 최상단 닫기 버튼으로 메인 화면에 복귀합니다. PC 호환 경로의 Tab\n토글은 진단 호환으로 남지만 현재 제품 UI 완료 기준은 모바일입니다.\n\n### PBP-ITEMDB-002 — 최종 48종이 ItemDB와 런타임의 단일 활성 집합이다\n\n과거 90종과 특수 아이템 미디어는 활성 원본·공개 DB·생성 런타임에서 제거합니다. 무기 14종과\n방어구·장신구 34종의 이름, 사각 점유, 카툰 아이콘과 Roblox 자산 참조를 ItemDB 원본에서\n생성하며 ON/OFF 경계는 향후 콘텐츠 운영을 위해 유지합니다.\n\n### PBP-CONTENT-001 — 폐기 아이템은 모든 제품 표면에서 함께 제거한다\n\n아이템을 실제로 폐기할 때는 카탈로그·레이아웃·이미지·런타임·공개 DB에서 함께 제거하고\n매니페스트 이력만 보존합니다.\n\n### PBP-DOC-001 — 기획 변경은 커밋 시 누적 원장으로 발행한다\n\n물질적인 제품 기획 변경은 사용자 승인 커밋에서 안정적인 ID와 함께 누적 발행합니다.\n\n### PBP-ACTION-001 — Dash는 방향 잠금 이동과 시작 프레임 고정을 사용한다\n\n기본 Dash는 방향을 잠그고 승인된 캐릭터 프레임을 유지합니다. 룬이 추가 거리와 무적시간을\n제공할 수 있으며 최종 거리는 기본의 250%를 넘지 않습니다.\n\n### PBP-DEV-001 — Studio 무게 제한 테스트는 세션 전용이다\n\n기존 Studio 진단값은 영구 저장을 오염시키지 않습니다. 새 인벤토리 구현에서 무게 시스템을\n유지할지는 별도 결정하지만 진단 데이터 비영구 원칙은 유지합니다.\n\n### PBP-INV-009 — 메인 인벤토리는 사각 장착판과 부위별 제한을 사용한다\n\n유효한 사각 배치가 곧 장착입니다. 무기는 여섯 개, 반지는 두 개이며 같은 정의의 무기·반지는\n중복할 수 없습니다. 머리·귀걸이·목걸이·상의·하의·글러브·신발·벨트는 한 개씩 장착하고\n디아블로식 장비 화면은 같은 상태를 투영합니다.\n\n### PBP-SYNERGY-001 — 가방·시너지 제품 방향은 폐기한다\n\n가방 활성 칸, 육각 메인 인벤토리, 26종 시너지, 시너지 필터와 A/B/C 공간 접촉 효과는 새\n제품 방향에서 사용하지 않습니다. 육각형은 아이템별 룬 보드에만 사용합니다.\n\n### PBP-CONTENT-003 — 알파 장비 활성 집합은 48종이다\n\n무기 14종과 방어구·장신구 34종을 사용합니다. 크기별 두 역할을 두고 반지는 동일 아이템\n중복 금지로 인한 강제 조합을 피하기 위해 네 종류를 둡니다. 특수 아이템과 방패는 현재 48종에\n포함하지 않습니다.\n\n### PBP-RUNE-004 — 아이템마다 후보 10개 중 하나인 427칸 보드를 가진다\n\n각 아이템 정의는 61칸 영역 일곱 개, 총 427칸인 후보 보드 10개를 가집니다. 생성 시 하나를\n균등 선택해 VariantId와 Seed를 영구 저장합니다. 0~6 주등급은 영역을 하나씩 열고, 일곱\n중앙 시작점의 색 등록과 한 칸 간격 연결을 사용합니다. 능력 등급 총량은\n30·45·54·60·67·90·81칸이며 레어는 황금 테두리로 구분합니다.\n\n### PBP-COMBAT-001 — 자동 스킬·방어·확률에는 명시적 캡이 있다\n\n무기 스킬은 해당 무기의 기본 공격 횟수로 자동 발동하고 발사체·도탄·관통·다른 스킬은\n카운터를 늘리지 않습니다. 방패 막기는 최대 100%에서 방어력을 두 배로 적용하고, 방어력\n계산 뒤 최종 피해감소는 최대 50%입니다. 행동 빈도·확률·무적·발사체 수에는 항목별 캡을\n적용하되 선형 공격력·체력 성장은 허용합니다.\n\n### PBP-RUNE-003 — 알파 무기 14종은 고정된 능력 정체성을 가진다\n\n검·창·곡궁·석궁·총·메이스·도끼 각 두 종류는 A1~D2와 E1~E3의 실제 구현 훅을 가집니다.\n목걸이·반지·귀걸이는 호환 무기 전체에 적용되는 전역 레어를, 신발은 추가 대시 레어를\n제공합니다.\n\n### PBP-RUNE-005 — 룬은 34종 도형과 effect 기반 아이콘을 사용한다\n\n1~5칸 룬은 회전·반전을 동일시한 34종 자유 폴리헥스를 사용합니다. 일곱 색은 같은 중립 원화를\n틴트하고, 능력 의미는 실제 전투 effect_id와 1:1인 62종 중앙 아이콘으로 별도 합성합니다.\n드래그는 잡은 칸과 실제 형태를 유지하고 마지막 스냅 가이드를 서버 요청값으로 사용합니다.\n\n### PBP-UI-001 — 인벤토리와 룬 보드는 모바일 고정 작업 흐름을 공유한다\n\n상단 상태, 중앙 작업판, 하단 보관함을 안전 영역 안에 고정합니다. 아이템·룬 합성은 두 재료와\n결과 미리보기 문법을 공유하고, 룬 보관함은 한 색 또는 전체를 고르는 7색 필터, 독립 ON/OFF인\n1~5칸 필터와 상하 스크롤을 제공합니다. 빈 룬 칸의 탭은 상단 중앙에 능력 정보를 표시합니다.\n\n### PBP-ART-002 — 아이템은 사각 점유와 모바일 전투에 맞는 카툰 실루엣을 사용한다\n\n최종 48종 원화는 굵고 밝은 카툰풍으로 통일합니다. 근접 무기는 위쪽, 활·석궁·총은 오른쪽을\n기본 방향으로 두고 발사체와 궤적을 원화에 굽지 않습니다. 그림의 질량과 돌출부가 사각 점유\n형태에 자연스럽게 맞아야 합니다.\n\n## 변경 원장\n\n### PBP-INV-001 — 인벤토리 이탈과 Tab 토글\n\n- 날짜: 2026-08-15\n- 도메인: 인벤토리 접근성 / 플랫폼 입력\n- 변경 유형: changed\n- 이전 규칙: 화면 내부 닫기 버튼과 명확한 PC 토글 경로가 없었습니다.\n- 새 유효 규칙: 모바일 우측 최상단 닫기 버튼을 두고 PC 호환 시 Tab을 인벤토리 전용\n  토글로 사용하며 기본 플레이어 목록을 해제합니다.\n- 근거: 작업 화면에는 안전한 이탈 경로가 필요하며 한 입력이 두 UI를 열면 안 됩니다.\n- 의도한 사용자 경험: 닫는 법을 탐색하지 않고 즉시 메인 화면으로 돌아갑니다.\n- 범위와 제외: 모바일 터치와 PC 입력 호환에 적용하며 PC 레이아웃 품질은 제외합니다.\n- 영향 소스: Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: Luau 테스트, 소스 검사와 최종 Studio 모바일 화면.\n\n### PBP-INV-002 — 배치 보드 범위와 도구 배치\n\n- 날짜: 2026-08-15\n- 도메인: 모바일 배치 보드 / 공간 가독성\n- 변경 유형: changed\n- 이전 규칙: 빈 배치 영역과 우측 도구의 공간 관계가 충분히 드러나지 않았습니다.\n- 새 유효 규칙: 전체 배치 영역에 옅은 육각 격자를 그리고 우측 상단 모드 탭과 우측 하단\n  확대 도구를 위한 반응형 인셋을 둡니다.\n- 근거: 빈 공간도 게임 공간이며 조작 계층과 동시에 보여야 합니다.\n- 의도한 사용자 경험: 배치 가능 범위와 도구 위치를 즉시 이해합니다.\n- 범위와 제외: 모바일 보드와 모드·확대 도구에 적용합니다.\n- 영향 소스: VisualTokens.luau, ScreenRenderer.luau, ScreenState.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: iPhone 17 Pro와 Galaxy A06 Studio Play의 잘림·겹침 검사.\n\n### PBP-INV-003 — 손가락 위 드래그와 단일 목적지 안내\n\n- 날짜: 2026-08-15\n- 도메인: 인벤토리 드래그 / 배치 피드백\n- 변경 유형: changed\n- 이전 규칙: 아이템이 포인터 아래에 남고 여러 강조가 목표 칸과 경쟁했습니다.\n- 새 유효 규칙: 회전된 그림 전체를 포인터 위로 올리고 그림과 목적지 외곽선만 표시합니다.\n- 근거: 드래그 중에는 대상과 내려놓을 위치가 가장 강하게 읽혀야 합니다.\n- 의도한 사용자 경험: 손가락에 가리지 않은 그림으로 정확히 조준합니다.\n- 범위와 제외: 아이템 드래그에 적용하며 그림이 없는 가방은 점유 형태를 사용합니다.\n- 영향 소스: DragPlacementState.luau, Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 포인터 리프트·잡은 칸·outline-only Luau 테스트.\n\n### PBP-INV-004 — 카드·선택 정보와 0.1Kg 정밀도\n\n- 날짜: 2026-08-15\n- 도메인: 아이템 정보 구조 / 무게 규칙\n- 변경 유형: changed\n- 이전 규칙: 무게 표현과 시너지 정렬이 좁은 카드에서 일관되지 않았습니다.\n- 새 유효 규칙: x.xKg 표시와 0.1Kg 판정을 통일하고 시너지를 카드 가운데 정렬합니다.\n- 근거: 화면 표시와 게임 판정은 같은 값을 사용해야 합니다.\n- 의도한 사용자 경험: 좁은 카드에서 핵심 정보와 초과 이유를 빠르게 이해합니다.\n- 범위와 제외: 저장 카드, 선택 정보, 합계와 허용 판정에 적용합니다.\n- 영향 소스: WeightEvaluator.luau, ItemInstanceHydrator.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013, backpack-combat-stat-database\n- 검증과 증거: 무게 양자화·형식·허용 판정 테스트와 카드 소스 검사.\n\n### PBP-INV-005 — 필터와 배치 모드의 직접 연결\n\n- 날짜: 2026-08-15\n- 도메인: 보관함 탐색 / 모드 전환\n- 변경 유형: changed\n- 이전 규칙: 종류 필터와 배치 탭을 따로 바꿔야 했습니다.\n- 새 유효 규칙: 가방 필터는 가방 배치로, 다른 필터는 아이템 배치와 해당 종류로 이동합니다.\n- 근거: 보관함 종류 선택은 다음 배치 대상의 선택입니다.\n- 의도한 사용자 경험: 한 번의 터치로 원하는 목록과 배치 모드에 도달합니다.\n- 범위와 제외: 일반 종류 필터 다섯 개와 배치 모드 연동에 적용합니다.\n- 영향 소스: ScreenState.luau, Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 모드별 필터 상태 Luau 테스트.\n\n### PBP-INV-006 — 시너지·칸 수 고급 필터\n\n- 날짜: 2026-08-15\n- 도메인: 보관함 고급 탐색 / 모바일 UI\n- 변경 유형: added\n- 이전 규칙: 종류 외의 시너지와 점유 칸 범위를 직접 좁힐 수 없었습니다.\n- 새 유효 규칙: 별도 고급 필터에서 26종 시너지 토글과 1~9 칸 범위를 설정합니다.\n- 근거: 조합과 공간 효율은 종류와 독립적인 탐색 기준입니다.\n- 의도한 사용자 경험: 조합과 크기에 맞는 아이템을 빠르게 좁힙니다.\n- 범위와 제외: 가방과 아이템 칸 범위, 아이템의 하나 이상 시너지 일치에 적용합니다.\n- 영향 소스: ScreenState.luau, Screen.luau, ScreenRenderer.luau, VisualTokens.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 사용자 기획 이미지, Studio 캡처와 두 모바일 화면 테스트.\n\n### PBP-ART-001 — 시너지 아이콘 소형 가독성 규칙\n\n- 날짜: 2026-08-15\n- 도메인: 모바일 UI 아트 방향 / 인벤토리 시너지\n- 변경 유형: changed\n- 이전 규칙: 큰 합본을 축소해 실제 카드 크기에서 세부가 합쳐졌습니다.\n- 새 유효 규칙: 약 25px를 승인 기준으로 대표 심볼·투명 배경·최대 3색·216px 경계를\n  사용합니다.\n- 근거: 작은 화면에서 시너지를 구분하는 속도가 우선입니다.\n- 의도한 사용자 경험: 짧게 훑어도 형태와 대표색으로 시너지를 구분합니다.\n- 범위와 제외: 활성 26종 이미지와 재생성 계약에 적용하며 의미와 효과는 바꾸지 않습니다.\n- 영향 소스: Assets/UI/Backpack/SynergyIcons, SynergyCatalog.luau\n- 관련 위키: synergy-icon-system@v001, inventory-item-concept\n- 검증과 증거: 두 Studio 모바일 화면, 26개 자산과 전용 이미지 테스트.\n\n### PBP-CONTENT-001 — FootprintExpansion21 활성 집합 정리\n\n- 날짜: 2026-08-15\n- 도메인: 아이템 콘텐츠 / 공개 데이터\n- 변경 유형: retired\n- 이전 규칙: 확장 시안 21개가 모두 활성 후보로 남았습니다.\n- 새 유효 규칙: 11개만 활성화하고 10개는 제품 데이터와 미디어에서 제거합니다.\n- 근거: 폐기 시안이 남으면 현재 지원 범위를 잘못 전달합니다.\n- 의도한 사용자 경험: 실제 지원하는 아이템만 게임과 공개 DB에서 확인합니다.\n- 범위와 제외: 해당 10개 아이콘·레이아웃·참조를 제거하고 매니페스트 이력은 보존합니다.\n- 영향 소스: FootprintExpansion21, ItemDB 카탈로그·레이아웃·생성 산출물\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: ItemDB 90개 build/check와 생성 산출물 검사.\n\n### PBP-DOC-001 — 누적 제품 기획 변경 원장\n\n- 날짜: 2026-08-15\n- 도메인: 개발 문서 운영\n- 변경 유형: added\n- 이전 규칙: 기획 규칙의 변경을 한곳에서 계속 추적하는 누적 원장이 없었습니다.\n- 새 유효 규칙: 사용자 승인 커밋마다 물질적 변경을 안정적인 ID와 함께 누적합니다.\n- 근거: 구현이 개선돼도 최종 규칙과 변경 이유가 사라지지 않아야 합니다.\n- 의도한 사용자 경험: 위키 한 페이지에서 현재 규칙과 과거 이유를 연속 확인합니다.\n- 범위와 제외: 제품·게임플레이·UX·콘텐츠·아트·플랫폼·운영에 적용하며 순수 리팩터링은\n  제외합니다.\n- 영향 소스: AGENTS.md, wiki/content/pages/product-planning-change-log\n- 관련 위키: inventory-item-concept, development-wiki\n- 검증과 증거: 위키 빌드·체크·정책 테스트와 동일 커밋 발행.\n\n### PBP-ITEMDB-001 — ItemDB ON/OFF 베이크 경계\n\n- 날짜: 2026-08-16\n- 도메인: 아이템 운영 / 게임 배포\n- 변경 유형: added\n- 이전 규칙: ItemDB에 존재하는 모든 아이템이 항상 생성 런타임과 게임 베이크에 포함됐습니다.\n- 새 유효 규칙: 각 아이템은 ON/OFF 상태를 가지며 OFF는 웹 기획 기록에는 남고 다음 베이크와\n  생성 런타임에서는 제외됩니다. ON 복귀 시 기존 형태·이미지·시너지·효과 설정을 유지합니다.\n- 근거: 일시 제외와 영구 폐기를 구분해야 콘텐츠 실험과 롤백이 데이터 삭제 없이 가능합니다.\n- 의도한 사용자 경험: 운영자는 한 번의 버튼으로 게임 노출을 제어하고 플레이어는 승인된\n  활성 아이템만 만납니다.\n- 범위와 제외: ItemDB 웹 편집, 생성 레이아웃, 게임 카탈로그와 Studio 베이크에 적용합니다.\n  OFF 항목의 원본·웹 검색·이미지는 삭제하지 않습니다.\n- 영향 소스: inventory-item-layouts.json, tools/item_db.py, GeneratedItemLayouts.luau,\n  ItemCatalog.luau, wiki/site/app.js\n- 관련 위키: inventory-item-concept@v014\n- 검증과 증거: 390×844 ON 행 캡처, OFF 생성 제외 테스트, ItemDB 90개 정합성 검사.\n\n### PBP-EFFECT-001 — A·B·C 공간 접촉 효과 영역\n\n- 날짜: 2026-08-16\n- 도메인: 아이템 조합 / 공간 효과 / ItemDB 저작\n- 변경 유형: added\n- 이전 규칙: 아이템은 자기 능력치와 점유 형태만 가졌고 주변 아이템 접촉을 표현하는\n  저작 계약이 없었습니다.\n- 새 유효 규칙: 아이템당 A·B·C 최대 세 효과 슬롯을 두고 점유 경계 바깥 Q/R 다섯 칸까지\n  직접 효과 칸을 선택합니다. 각 슬롯은 종류·조건·능력 ID를 가지며 공간 접촉 판정과 실제\n  능력 실행은 분리합니다.\n- 근거: 가방 배치의 공간 관계를 조합 빌드로 확장하되 전투 규칙이 배치 기하에 결합되지\n  않아야 합니다.\n- 의도한 사용자 경험: 플레이어는 아이템을 어디에 놓고 무엇과 맞닿게 하는지로 추가 효과를\n  설계하고, 운영자는 같은 육각 편집 방식으로 규칙을 시각적으로 저작합니다.\n- 범위와 제외: 효과 칸 데이터, 카탈로그 ID, 회전 접촉 후보 평가까지 포함합니다. 조건 논리,\n  능력치 합산, 전투 발현과 시각 효과는 후속 범위입니다.\n- 영향 소스: item-effect-catalog.json, item-effect-slots.md, inventory-item-layouts.json,\n  GeneratedItemLayouts.luau, ItemEffectContactEvaluator.luau, ItemInstanceHydrator.luau,\n  wiki/site/app.js, wiki/site/item-db.js\n- 관련 위키: inventory-item-concept@v014, backpack-combat-stat-database\n- 검증과 증거: 390×844 A/B/C 편집 캡처, 효과 좌표·카탈로그·회전 접촉·드래그 비활성 테스트,\n  Studio의 동일 리비전 90개 레이아웃과 EffectCatalog 확인.\n\n### PBP-ITEMDB-002 — ItemDB 칸 수·시너지·게임 ON 복합 필터\n\n- 날짜: 2026-08-18\n- 도메인: ItemDB 운영 / 웹 탐색\n- 변경 유형: added\n- 이전 규칙: ItemDB는 이름과 대분류만 좁힐 수 있어 점유 크기·시너지·실제 게임 포함\n  집합을 따로 확인해야 했습니다.\n- 새 유효 규칙: 최소·최대 칸 수, 여러 시너지의 OR, 전체/게임 ON 상태를 검색·대분류와\n  AND로 조합하며 스크롤과 효과 카탈로그 접힘 상태를 재렌더링 뒤에도 유지합니다.\n- 근거: 전체 기획 목록과 현재 게임 집합을 한 화면에서 빠르게 비교해야 합니다.\n- 의도한 사용자 경험: “게임에 들어가는 2~4칸 기계 또는 원거리 아이템”을 그대로 필터로\n  표현하고 실제 아이콘으로 결과를 빠르게 훑습니다.\n- 범위와 제외: 공개·로컬 ItemDB 탐색과 시너지 미디어에 적용합니다. 게임 안의 보관함\n  고급 필터 상태와는 별도입니다.\n- 영향 소스: tools/item_db.py, wiki/site/app.js, wiki/site/app.css, wiki/site/item-db-data.js,\n  wiki/site/synergy-media\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: 1440×900 복합 필터 캡처, 8개 ON 결과, 26/26 이미지 로드,\n  catalogOpen=false·scrollY=188 유지, 브라우저 콘솔 오류·경고 0건.\n\n### PBP-INV-007 — 최대 6개 장착 무기와 필드 표시\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 장착 / 필드 가독성\n- 변경 유형: added\n- 이전 규칙: 유효하게 배치된 무기는 보드 안에서만 보였고 장착 목록·한도·필드 표시 계약이\n  없었습니다.\n- 새 유효 규칙: 유효한 Weapon은 최초 배치 순서대로 최대 6개까지 장착되고 2×3 장착 탭,\n  상세 정보·빼기, 모든 캐릭터 위의 방향 반응 이미지로 표시됩니다.\n- 근거: 공간 배치 결과가 실제 플레이 장비로 읽혀야 인벤토리 퍼즐과 전투 준비가 연결됩니다.\n- 의도한 사용자 경험: 여섯 슬롯에서 장착 상태를 관리하고 필드에서 자신의 빌드를 즉시\n  알아봅니다.\n- 범위와 제외: 장착 상태·관리·이미지 표시에 적용합니다. 실제 공격 실행과 무기 모델은\n  후속 범위입니다.\n- 영향 소스: EquippedItemModel.luau, InventoryBoardModel.luau, InventorySerializer.luau,\n  Screen.luau, ScreenRenderer.luau, InventoryService.luau, EquippedWeaponBillboard.luau,\n  CharacterController.luau, DirectionResolver.luau\n- 관련 위키: inventory-item-concept@v015, character-2d-rendering@v009\n- 검증과 증거: iPhone 17 Pro·Galaxy A06 장착 슬롯과 상세 모달 캡처, 6개 한도 Luau 테스트,\n  West 87.8°·East -92.1° 방향 회전, 최종 Studio 콘솔 오류·경고 0건.\n\n### PBP-INV-008 — 상태와 무관한 2px 배치 외곽선\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 시각 계층\n- 변경 유형: changed\n- 이전 규칙: 가방 시너지나 배치 미리보기 상태에 따라 외곽선이 3~7px로 굵어질 수 있었습니다.\n- 새 유효 규칙: 가방·아이템·선택·시너지·유효·무효·미리보기 외곽선은 모두 2px이며 상태는\n  색으로만 구분합니다.\n- 근거: 굵기 변화가 점유 형태를 실제보다 커 보이게 하고 아이템 그림과 경쟁했습니다.\n- 의도한 사용자 경험: 같은 공간 형태를 안정적으로 읽고 색으로 상태만 빠르게 구분합니다.\n- 범위와 제외: 인벤토리 보드와 보관함 선택 외곽선에 적용합니다.\n- 영향 소스: ScreenState.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: 모든 외곽선 경로가 GetBoundaryThickness=2를 사용하는 Luau·소스 회귀 테스트.\n\n### PBP-CONTENT-002 — 게임 ON 32개 승인 집합\n\n- 날짜: 2026-08-18\n- 도메인: 아이템 콘텐츠 / 게임 배포\n- 변경 유형: changed\n- 이전 규칙: 전체 90개 ItemDB가 모두 게임 ON으로 생성 런타임에 포함됐습니다.\n- 새 유효 규칙: 전체 기획 목록 90개를 보존하면서 게임 ON 32개만 생성 런타임과 Studio\n  베이크에 포함합니다. 포켓 네일건은 MACHINE을 제외한 RANGED·GUN, 소화기 철퇴는\n  FORGED 대신 MACHINE을 사용합니다.\n- 근거: 현재 게임에 투입할 승인 콘텐츠와 후속 기획 후보를 데이터 삭제 없이 구분합니다.\n- 의도한 사용자 경험: 플레이어는 승인된 32개만 만나고 운영자는 OFF 58개를 계속 비교·복원할\n  수 있습니다.\n- 범위와 제외: PBP-CONTENT-001의 전체 90개 카탈로그와 폐기 이력은 유지하며 게임 포함 집합만\n  변경합니다.\n- 영향 소스: inventory-item-layouts.json, GeneratedItemLayouts.luau, wiki/site/item-db-data.js\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: ItemDB revision a35b00cf76ec6c75, 전체 90·게임 ON 32 build/check,\n  Studio 같은 소스 베이크와 저장.\n\n### PBP-ACTION-001 — 20스터드 방향 잠금 Dash\n\n- 날짜: 2026-08-18\n- 도메인: 캐릭터 액션 / 이동 / 스프라이트 일관성\n- 변경 유형: changed\n- 이전 규칙: Dash는 0.20초 동안 목표 속도 30 studs/s의 순간 충격을 적용하고 별도 Dash\n  포즈를 재생할 수 있었습니다.\n- 새 유효 규칙: Dash는 0.30초 동안 선택 방향을 잠그고 장애물이 없는 기준 20스터드를\n  이동합니다. WalkSpeed·AutoRotate를 잠근 뒤 복원하고 시작 순간의 완성 프레임을 유지합니다.\n- 근거: 이동 거리를 입력·현재 속도와 분리해 일관되게 만들고, 승인 Run 아틀라스가 레거시\n  모듈식 Walk/Dash 이미지로 바뀌는 비율 변화를 막습니다.\n- 의도한 사용자 경험: Dash 방향이 중간에 꺾이지 않고 같은 거리를 이동하며 캐릭터 모습도\n  한 프레임으로 안정적으로 유지됩니다.\n- 범위와 제외: 클라이언트 Dash 이동·방향·스프라이트에 적용합니다. 장애물 관통이나 별도\n  Dash 공격 판정은 추가하지 않습니다.\n- 영향 소스: character-actions.md, Config.luau, PlayerActionController.luau,\n  CharacterController.luau, test_two_direction_run_build.py\n- 관련 위키: character-2d-rendering@v009\n- 검증과 증거: Galaxy A06 Play에서 19.46스터드 이동, 이동 중 WalkSpeed=0·AutoRotate=false,\n  종료 뒤 16·true 복원, 최종 콘솔 오류·경고 0건.\n\n### PBP-DEV-001 — 세션 전용 허용 무게 테스트 창\n\n- 날짜: 2026-08-18\n- 도메인: Studio 개발 도구 / 데이터 안전\n- 변경 유형: added\n- 이전 규칙: 허용 무게 경계값을 플레이 중 빠르게 바꾸는 전용 진단 UI가 없었습니다.\n- 새 유효 규칙: Studio에서만 F2 창으로 허용 무게를 1Kg씩 조정하고, 영구 저장에는 플레이어의\n  원래 제한값을 사용합니다.\n- 근거: 무게 초과 UI와 배치 경계를 반복 검증하되 진단 값이 사용자 데이터에 남으면 안 됩니다.\n- 의도한 사용자 경험: 개발자는 Play를 다시 시작하지 않고 경계값을 시험하며 플레이어는\n  테스트 기능이나 변조된 저장값을 보지 않습니다.\n- 범위와 제외: Roblox Studio 진단 세션에만 적용하며 모바일 제품 UI 완료 범위가 아닙니다.\n- 영향 소스: DeveloperTestControls.luau, DeveloperTestWindow.luau, Screen.luau,\n  InventoryService.luau\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: Studio-only 생성·서버 거부·원래 제한 직렬화 소스 검사와 Luau 경계 테스트.\n\n### PBP-INV-009 — 사각 장착판과 부위별 중복 제한\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 장착 / 공간 퍼즐\n- 변경 유형: superseded\n- 이전 규칙: PBP-INV-002~007은 육각 가방이 활성 칸을 만들고 시너지·필터와 유효 배치 무기\n  여섯 개를 관리하는 메인 인벤토리를 사용했습니다.\n- 새 유효 규칙: 아이템은 사각 폴리오미노로 배치하며 유효한 배치가 곧 장착입니다. 무기는\n  여섯 개, 반지는 두 개, 나머지 지정 부위는 한 개이며 무기·반지는 같은 DefinitionId를\n  중복할 수 없습니다. 디아블로식 장비창은 권위 배치의 투영입니다.\n- 근거: 장착 제한을 즉시 이해시키면서 공간 퍼즐은 크기와 형태로 유지해야 합니다.\n- 의도한 사용자 경험: 플레이어는 별도 장착 버튼 없이 배치와 장비 요약을 같은 상태로\n  이해합니다.\n- 범위와 제외: 메인 장착판과 장착 부위에 적용하며 특수 아이템·방패 슬롯은 제외합니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016\n- 검증과 증거: 기획 표에서 부위별 장착 수와 48종 콘텐츠 수량 검산.\n\n### PBP-SYNERGY-001 — 가방·시너지 시스템 전면 폐기\n\n- 날짜: 2026-08-18\n- 도메인: 인벤토리 / 시너지 / 아이템 조합\n- 변경 유형: retired\n- 이전 규칙: PBP-INV-004·006, PBP-ART-001과 PBP-EFFECT-001은 가방 활성 칸, 26종\n  시너지, 시너지 필터와 A/B/C 공간 접촉 효과를 제품 규칙으로 사용했습니다.\n- 새 유효 규칙: 가방 활성 칸, 육각 메인 인벤토리, 시너지 판정·아이콘·필터와 공간 접촉\n  효과를 후속 제품에서 사용하지 않습니다. 육각형은 아이템별 룬 보드에만 사용합니다.\n- 근거: 장착 규칙과 룬 성장 퍼즐이 각각 명확한 책임을 가져야 합니다.\n- 의도한 사용자 경험: 메인 장착은 사각형으로 빠르게 읽고 깊은 육각 퍼즐은 선택한 아이템\n  안에서 집중해 풉니다.\n- 범위와 제외: 새 제품 방향을 폐기하며 기존 코드·자산 제거는 후속 구현 커밋에서 수행합니다.\n- 영향 소스: inventory-item-concept@v016, inventory-item-concept@v015\n- 관련 위키: synergy-icon-system@v001, inventory-item-concept@v016\n- 검증과 증거: v016 폐기·제외 목록과 이전 v015 구현 범위 대조.\n\n### PBP-CONTENT-003 — 알파 장비 48종과 점유 크기\n\n- 날짜: 2026-08-18\n- 도메인: 알파 아이템 콘텐츠 / 장착 부위\n- 변경 유형: superseded\n- 이전 규칙: PBP-CONTENT-002의 현행 게임 ON 32개와 과거 90개 카탈로그가 실제 알파\n  배포 집합이었습니다.\n- 새 유효 규칙: 다음 알파 구현 목표는 무기 14종, 방어구·장신구 34종의 48종입니다. 머리·\n  상의·하의는 4/6칸, 귀걸이·반지는 1칸, 목걸이는 2/3칸, 글러브·신발·벨트는 2/4칸을\n  사용합니다.\n- 근거: 부위별 역할과 사각 점유 크기를 함께 선택하게 해 배치 조합을 늘립니다.\n- 의도한 사용자 경험: 작은 장비의 공간 효율과 큰 장비의 역할을 비교해 자신만의 장착판을\n  만듭니다.\n- 범위와 제외: 48종은 기획 목표이며 현재 ItemDB와 Studio ON 32개는 구현 전까지 그대로입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 무기 14 + 부위별 장비 34 = 48 산술 검산.\n\n### PBP-RUNE-001 — Seed 고정 259칸 아이템 룬 보드\n\n- 날짜: 2026-08-18\n- 도메인: 아이템 성장 / 룬 퍼즐 / 합성\n- 변경 유형: added\n- 이전 규칙: 각 아이템에 독립적인 장기 육각 성장판과 룬 조각 합성 계약이 없었습니다.\n- 새 유효 규칙: 각 아이템은 37칸 영역 일곱 개를 0~6등급에 하나씩 열고, 색별 시작점에서\n  젬블로식 한 칸 간격으로 1~5칸 룬을 연결합니다. 전체 능력 위치는 생성 Seed로 고정하며\n  합성 시 기준 아이템의 Seed와 배치를 보존합니다.\n- 근거: 같은 아이템도 경로·룬 모양·색 차단을 고민하는 장기 성장 퍼즐이 필요합니다.\n- 의도한 사용자 경험: 적은 룬으로 원하는 고등급 능력까지 길을 만들고 다른 색의 미래 경로를\n  함께 계획합니다.\n- 범위와 제외: 보드·등급 개방·룬/아이템 합성 계약이며 실제 생성기와 저장 마이그레이션은\n  후속 구현입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016\n- 검증과 증거: 일곱 영역 각각 37칸과 전체 259칸, 영역별 능력 분포 합계 검산.\n\n### PBP-RUNE-002 — 룬 능력 예산·등급 증가·레어 칸\n\n- 날짜: 2026-08-18\n- 도메인: 룬 능력 / 밸런스 / UI 표현\n- 변경 유형: added\n- 이전 규칙: 룬 능력의 등급별 개수·표시 정밀도·레어 판정과 아이템 정체성 보호 규칙이\n  없었습니다.\n- 새 유효 규칙: 전체 능력 등급 개수는 18·27·33·37·41·50·53이며 같은 능력의 실제 등장\n  등급은 UI 표시값까지 엄격히 증가합니다. 구조형 레어는 6등급 영역의 황금 칸에서 한 단위만\n  제공하고 Seed는 위치만 바꿉니다.\n- 근거: 상위 등급의 보상감을 보존하고 좋은 Seed가 총 전투력 자체를 재추첨하지 않게 합니다.\n- 의도한 사용자 경험: 황금 칸을 장기 목표로 삼되 낮은 등급 경로도 매 단계 분명한 성장을\n  제공합니다.\n- 범위와 제외: 일반 POWER/SPEED/CHANCE/TRAIT/GUARD/TIME/RANGE와 레어 표시에 적용합니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 등급·트랙별 칸 수와 259칸 합계, 모든 표시 수치의 단조 증가 수동 검토.\n\n### PBP-COMBAT-001 — 자동 스킬과 비선형 능력 캡\n\n- 날짜: 2026-08-18\n- 도메인: 전투 능력 / 자동 스킬 / 방어 계산\n- 변경 유형: added\n- 이전 규칙: 룬 인플레이션에서 행동 빈도·확률·무적·발사체 수를 안전하게 제한하는 공통\n  계산 순서가 없었습니다.\n- 새 유효 규칙: 자동 스킬은 해당 무기의 기본 공격 실행 횟수로 발동하고 감소는 최대 8회,\n  최소 요구 횟수는 1회입니다. 방패 막기는 최대 100%에서 방어력을 두 배로 적용하며 방어력\n  이후 최종 피해감소는 최대 50%입니다. 이동·공격·대시·회피·회복·보호막 등은 v016의\n  항목별 캡을 사용합니다.\n- 근거: 적 수치 강화로 대응 가능한 선형 인플레이션은 허용하되 무한 행동·완전 무적·확률\n  초과는 막아야 합니다.\n- 의도한 사용자 경험: 큰 숫자 성장은 즐기면서도 공격과 피격의 기본 규칙은 계속 작동합니다.\n- 범위와 제외: 탄약, 탄약 미소모, 소모품 미소모와 스킬 초기화 확률은 사용하지 않습니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: backpack-combat-stat-database, inventory-item-concept@v016\n- 검증과 증거: 계산 순서와 캡·제외 목록의 기획 교차 검토.\n\n### PBP-RUNE-003 — 알파 무기 14종의 보드 정체성\n\n- 날짜: 2026-08-18\n- 도메인: 무기 콘텐츠 / 룬 보드 / 자동 스킬\n- 변경 유형: added\n- 이전 규칙: 알파 무기별 자동 스킬 조건과 259칸 A/B/C/D·레어 배분이 고정되지 않았습니다.\n- 새 유효 규칙: 일곱 무기 형태에 두 종류씩 14개를 두고 각 보드는 A 102, B 71, C 48,\n  D 32, 6등급 로컬 레어 6칸을 가집니다. 목걸이는 발사체, 반지는 자동 스킬 요구 공격,\n  귀걸이는 근거리 사거리의 전역 레어를 제공하고 신발만 추가 대시를 제공합니다.\n- 근거: Seed 위치가 달라도 무기 이름과 공격 방식에 맞는 성장 정체성이 유지돼야 합니다.\n- 의도한 사용자 경험: 같은 룬이라도 연격검·공성 석궁·흡혈 도끼에서 서로 다른 경로와\n  자동 스킬을 강화합니다.\n- 범위와 제외: 14종의 알파 기획 계약이며 최종 아이콘·폴리오미노 좌표·전투 구현은 후속입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 각 무기 레어 합계 6칸과 보드 전체 259칸 산술 검산.\n\n### PBP-ITEMDB-002 — 최종 48종 활성 ItemDB 전환\n\n- 날짜: 2026-08-20\n- 도메인: 아이템 콘텐츠 / 공개 데이터베이스 / 런타임 배포\n- 변경 유형: superseded\n- 대체 대상: PBP-ITEMDB-001, PBP-CONTENT-003의 \"후속 구현 목표\" 상태\n- 이전 규칙: 새 48종은 기획 목표이고 과거 90종과 게임 ON 32종이 구현 전 역사적 현행\n  상태였습니다.\n- 새 유효 규칙: 무기 14종과 방어구·장신구 34종의 최종 48종만 ItemDB 원본, 생성 런타임,\n  공개 미디어의 활성 집합으로 사용합니다. 과거 아이콘과 특수 아이템은 제거하고 ON/OFF\n  운영 경계는 유지합니다.\n- 근거: 기획·로컬 원화·공개 DB·게임 카탈로그의 서로 다른 활성 집합은 이름·점유·자산 ID\n  불일치를 만듭니다.\n- 의도한 사용자 경험: 플레이어와 개발자가 같은 최종 48종의 이미지와 형태만 봅니다.\n- 범위와 제외: 아이템 정의·아이콘·사각 점유·공개 DB에 적용하며 과거 위키 기록은 보존합니다.\n- 영향 소스: inventory-item-art-catalog.md, inventory-item-layouts.json,\n  GeneratedItemLayouts.luau, ItemCatalog.luau, wiki/site/item-db-data.js\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: ItemDB 48종 빌드·체크, 최종 카탈로그와 모바일 공개 DB 캡처.\n\n### PBP-RUNE-004 — 427칸·후보 10개 룬 보드\n\n- 날짜: 2026-08-20\n- 도메인: 아이템 성장 / 룬 보드 / 랜덤화\n- 변경 유형: superseded\n- 대체 대상: PBP-RUNE-001, PBP-RUNE-002\n- 이전 규칙: 모든 아이템은 37칸 영역 일곱 개의 259칸 보드 하나를 Seed로 섞고, 능력 등급\n  총량 18·27·33·37·41·50·53을 사용했습니다.\n- 새 유효 규칙: 각 영역을 반지름 4인 61칸으로 확대해 전체 427칸을 사용합니다. 아이템\n  정의마다 결정론적으로 생성된 후보 10개를 두고 아이템 생성 시 하나를 균등 선택해 VariantId와\n  Seed를 저장합니다. 보드당 능력 등급 총량은 30·45·54·60·67·90·81입니다.\n- 근거: 11개 능력 계열과 레어 노드, 일곱 색 경로를 한 판에서 읽고 우회할 충분한 공간이\n  필요합니다. 후보를 제한하면 다양성과 재현·검증을 함께 확보할 수 있습니다.\n- 의도한 사용자 경험: 같은 아이템에서도 다른 길을 계획하되 총 능력 예산이 운에 따라 바뀌지는\n  않습니다.\n- 범위와 제외: 48종 전체 480개 보드에 적용하며 런타임 재굴림은 허용하지 않습니다.\n- 영향 소스: item-rune-board-database.json, GeneratedRuneBoardDB.luau,\n  rune-board-db-data.js\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 생성기 결과 48×10=480보드, 보드마다 7×61=427칸, revision\n  6e735afdab3d7550.\n\n### PBP-RUNE-005 — 34종 룬 도형과 62종 능력 아이콘\n\n- 날짜: 2026-08-20\n- 도메인: 룬 조각 / 보드 가독성 / 터치 배치\n- 변경 유형: added\n- 이전 규칙: 룬은 1~5칸 젬블로식 조각이라는 개념만 있었고 완전한 형태군, 공용 원화와\n  능력 아이콘의 책임 분리가 고정되지 않았습니다.\n- 새 유효 규칙: 회전·반전을 동일시한 1·1·3·7·22개, 총 34종 자유 폴리헥스를 사용합니다.\n  일곱 색은 빈 중앙 메달의 중립 원화를 틴트하고, 62종 전투 effect 아이콘을 중앙에 별도\n  합성합니다. 드래그는 실제 도형·잡은 칸·회전·반전을 보존하며 마지막 스냅 가이드를 확정값으로\n  사용합니다.\n- 근거: 색·등급·능력 의미를 한 장의 원화에 굽지 않아야 작은 화면에서도 의미를 읽고 데이터\n  변경에도 자산을 재사용할 수 있습니다.\n- 의도한 사용자 경험: 탭하지 않아도 대략적인 능력 종류를 알고, 손가락 아래에서 룬이 튀지\n  않은 채 예상 위치에 놓입니다.\n- 범위와 제외: 룬 카드·보드 노드·드래그 미리보기에 적용하며 상세 수치는 텍스트로 제공합니다.\n- 영향 소스: rune-piece-catalog.json, rune-ability-icon-catalog.json,\n  rune_hex_neutral.png, rune_ability_icons.png, UIPrimitives.luau, Screen.luau\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 형태군 34개, effect 아이콘 62개 생성·누락 검사와 아이콘 시트.\n\n### PBP-UI-001 — 모바일 인벤토리·룬 보드의 단일 작업 흐름\n\n- 날짜: 2026-08-20\n- 도메인: 모바일 UI / 인벤토리 / 룬 보드 / 합성\n- 변경 유형: added\n- 이전 규칙: 사각 장착과 룬 보드의 개별 기획은 있었지만 화면 내 기능 위치, 터치 우선순위,\n  필터·합성·복귀 상태의 완전한 흐름이 없었습니다.\n- 새 유효 규칙: 두 화면은 안전 영역 아래 상단 상태, 중앙 작업판, 하단 보관함을 공유합니다.\n  카드 탭은 룬 보드 진입, 드래그는 배치 또는 합성을 우선합니다. 룬 보관함은 상하 스크롤,\n  한 색 또는 전체를 고르는 7색 필터와 독립 ON/OFF인 1~5칸 필터를 제공하고, 빈 보드 탭은\n  상단 중앙에 능력을 표시합니다.\n- 근거: 모바일에서는 화면 전환마다 탐색 위치와 재료가 사라지면 배치 퍼즐의 비교 비용이\n  지나치게 커집니다.\n- 의도한 사용자 경험: 인벤토리 배치, 아이템 성장, 룬 배치와 합성을 같은 손동작 문법으로\n  왕복합니다.\n- 범위와 제외: 모바일 세로 화면과 터치 입력에 적용하며 PC 밀도·마우스 품질은 현재 완료\n  기준이 아닙니다.\n- 영향 소스: inventory-rune-ui-spec.md, InventoryV2, RuneBoard, InventoryV2Service.luau\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 정적 상태·Luau 테스트, iPhone 17 Pro 400×777 및 iPhone 7 374×666 Studio\n  Play 캡처, 핵심 입력 경로와 콘솔 오류 없음 확인.\n\n### PBP-ART-002 — 최종 아이템 카툰 아트와 방향 규칙\n\n- 날짜: 2026-08-20\n- 도메인: 아이템 아트 / 모바일 전투 / 사각 점유\n- 변경 유형: superseded\n- 대체 대상: PBP-ART-001의 육각·시너지 카드 중심 아트 계약\n- 이전 규칙: 실사풍 또는 고풍스러운 원화와 육각 시너지 카드 문법이 섞였고, 일부 무기는\n  사각 점유와 전투 회전 기준에 맞지 않았습니다.\n- 새 유효 규칙: 48종 전체를 밝고 굵은 카툰풍으로 통일하고 사각 폴리오미노 질량에 맞춥니다.\n  근접 무기는 위쪽, 활·석궁·총은 오른쪽을 기본 방향으로 하며 발사체·공격 궤적은 원화에서\n  제외합니다.\n- 근거: Brotato식 자동 공격에서는 작은 캐릭터 주변을 도는 장비의 방향과 실루엣이 즉시\n  읽혀야 합니다.\n- 의도한 사용자 경험: 보관함·장착판·전투에서 같은 아이템을 형태만으로 알아봅니다.\n- 범위와 제외: 최종 48종 인벤토리 원화에 적용하며 실제 공격 VFX와 투사체는 별도 자산입니다.\n- 영향 소스: Assets/Items/InventoryIcons, inventory-item-art-catalog.md,\n  uploaded_asset_ids.json\n- 관련 위키: inventory-item-concept@v017\n- 검증과 증거: 최종 48종 카탈로그와 공개 ItemDB 캡처.\n",
          "source_path": "wiki/content/pages/product-planning-change-log/v006.md",
          "timeline_order": 38
        },
        {
          "id": "product-planning-change-log",
          "title": "제품 기획 변경 원장",
          "summary": "기존 원장을 누적 보존하면서 사각 장착판, 시너지 폐기, 48종 알파 장비, Seed 고정 259칸 룬 보드, 능력 캡과 14종 무기별 보드 계약을 현재 제품 방향으로 확정했습니다.",
          "status": "active",
          "category": "planning",
          "tags": [
            "planning",
            "decision-log",
            "product",
            "inventory",
            "equipment",
            "rune-board",
            "weapon",
            "combat",
            "mobile",
            "documentation"
          ],
          "created_at": "2026-08-15",
          "updated_at": "2026-08-18",
          "authors": [
            "Codex"
          ],
          "version": 5,
          "change_type": "updated",
          "change_summary": "육각 가방·시너지 방향을 사각 장착과 아이템별 룬 성장으로 대체하고, 알파 콘텐츠·등급·합성·Seed·능력·캡·무기 보드의 현재 규칙과 과거 결정을 누적했습니다.",
          "supersedes": "product-planning-change-log@v004",
          "sources": [
            "wiki/content/pages/product-planning-change-log/v004.md",
            "wiki/content/pages/inventory-item-concept/v016.md"
          ],
          "related": [
            "inventory-item-concept",
            "synergy-icon-system",
            "backpack-combat-stat-database",
            "development-wiki",
            "project-overview"
          ],
          "validation": [
            "기획 산술 검산: 7×37=259 룬 칸, 등급 합계 18·27·33·37·41·50·53",
            "기획 산술 검산: 알파 장비 14+34=48종, 무기 보드 102+71+48+32+6=259칸",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "python3 -m unittest tests/test_wiki.py: 11 tests passed",
            "python3 -m unittest tests.test_repository_policy: 1 test passed",
            "git diff --check"
          ],
          "body": "# 제품 기획 변경 원장\n\n## 목적과 기록 원칙\n\n이 페이지는 구현 파일 목록이 아니라 ProjectBackpack의 제품 방향이 왜 바뀌었고 지금 어떤\n규칙이 유효한지를 누적 보존합니다. 플레이어 또는 운영자가 경험하는 제품·게임플레이·UX·\n콘텐츠·아트·플랫폼 규칙이 추가, 변경, 대체 또는 폐기될 때 기록합니다. 동작을 바꾸지 않는\n내부 리팩터링은 원장 대상이 아닙니다.\n\n각 결정은 안정적인 ID를 가집니다. 이후 규칙이 달라지면 이미 커밋된 항목을 고치거나 지우지\n않고 새 버전에 후속 항목을 추가해 이전 ID와 관계를 명시합니다. 최신 버전은 과거 원장과\n현재 유효 규칙을 모두 포함하며, 실제 제품 변경·주제별 위키·검증 증거와 같은 커밋에서\n발행합니다.\n\n## 현재 유효 규칙\n\n### PBP-INV-001 — 인벤토리에는 명확한 이탈과 호환 토글이 있다\n\n모바일 인벤토리는 우측 최상단 닫기 버튼으로 메인 화면에 복귀합니다. PC 호환 경로의 Tab\n토글은 진단 호환으로 남지만 현재 제품 UI 완료 기준은 모바일입니다.\n\n### PBP-ITEMDB-001 — 아이템 기록과 게임 배포 상태를 분리한다\n\nItemDB의 ON/OFF 경계는 유지합니다. 다만 새 48종과 사각 폴리오미노는 후속 마이그레이션에서\n등록하며 현재 90개·게임 ON 32개 런타임은 구현 전까지 역사적 현행 상태입니다.\n\n### PBP-CONTENT-001 — 폐기 아이템은 모든 제품 표면에서 함께 제거한다\n\n아이템을 실제로 폐기할 때는 카탈로그·레이아웃·이미지·런타임·공개 DB에서 함께 제거하고\n매니페스트 이력만 보존합니다.\n\n### PBP-DOC-001 — 기획 변경은 커밋 시 누적 원장으로 발행한다\n\n물질적인 제품 기획 변경은 사용자 승인 커밋에서 안정적인 ID와 함께 누적 발행합니다.\n\n### PBP-ACTION-001 — Dash는 방향 잠금 이동과 시작 프레임 고정을 사용한다\n\n기본 Dash는 방향을 잠그고 승인된 캐릭터 프레임을 유지합니다. 룬이 추가 거리와 무적시간을\n제공할 수 있으며 최종 거리는 기본의 250%를 넘지 않습니다.\n\n### PBP-DEV-001 — Studio 무게 제한 테스트는 세션 전용이다\n\n기존 Studio 진단값은 영구 저장을 오염시키지 않습니다. 새 인벤토리 구현에서 무게 시스템을\n유지할지는 별도 결정하지만 진단 데이터 비영구 원칙은 유지합니다.\n\n### PBP-INV-009 — 메인 인벤토리는 사각 장착판과 부위별 제한을 사용한다\n\n유효한 사각 배치가 곧 장착입니다. 무기는 여섯 개, 반지는 두 개이며 같은 정의의 무기·반지는\n중복할 수 없습니다. 머리·귀걸이·목걸이·상의·하의·글러브·신발·벨트는 한 개씩 장착하고\n디아블로식 장비 화면은 같은 상태를 투영합니다.\n\n### PBP-SYNERGY-001 — 가방·시너지 제품 방향은 폐기한다\n\n가방 활성 칸, 육각 메인 인벤토리, 26종 시너지, 시너지 필터와 A/B/C 공간 접촉 효과는 새\n제품 방향에서 사용하지 않습니다. 육각형은 아이템별 룬 보드에만 사용합니다.\n\n### PBP-CONTENT-003 — 다음 알파 장비 목표는 48종이다\n\n무기 14종과 방어구·장신구 34종을 목표로 합니다. 크기별 두 역할을 두고 반지는 동일 아이템\n중복 금지로 인한 강제 조합을 피하기 위해 네 종류를 둡니다. 특수 아이템과 방패는 현재 48종에\n포함하지 않습니다.\n\n### PBP-RUNE-001 — 모든 아이템은 Seed 고정 259칸 룬 보드를 가진다\n\n각 아이템은 37칸 영역 일곱 개, 총 259칸의 육각 보드를 가집니다. 주등급 0~6이 오를 때 영역\n하나씩 열고 젬블로식 한 칸 간격 연결, 색별 시작점, 룬 1~5칸 합성을 사용합니다. Seed는\n위치만 바꾸며 승급·합성·재접속으로 재추첨하지 않습니다.\n\n### PBP-RUNE-002 — 능력 예산과 레어 효과는 등급 계약을 따른다\n\n능력 등급 총량은 18·27·33·37·41·50·53칸이고 같은 능력의 실제 등장 등급은 표시값까지\n엄격히 증가합니다. 공격 구조를 한 단위 늘리는 구조형 레어는 6등급 황금 칸에만 나타나며\n한 칸당 +1 또는 -1만 제공합니다.\n\n### PBP-COMBAT-001 — 자동 스킬·방어·확률에는 명시적 캡이 있다\n\n무기 스킬은 해당 무기의 기본 공격 횟수로 자동 발동하고 발사체·도탄·관통·다른 스킬은\n카운터를 늘리지 않습니다. 방패 막기는 최대 100%에서 방어력을 두 배로 적용하고, 방어력\n계산 뒤 최종 피해감소는 최대 50%입니다. 행동 빈도·확률·무적·발사체 수에는 항목별 캡을\n적용하되 선형 공격력·체력 성장은 허용합니다.\n\n### PBP-RUNE-003 — 알파 무기 14종은 고정된 보드 정체성을 가진다\n\n검·창·곡궁·석궁·총·메이스·도끼 각 두 종류는 A/B/C/D 일반 능력과 여섯 개의 6등급 로컬\n구조형 레어를 가집니다. 목걸이·반지·귀걸이는 호환 무기 전체에 적용되는 전역 레어를,\n신발은 추가 대시 레어를 제공합니다.\n\n## 변경 원장\n\n### PBP-INV-001 — 인벤토리 이탈과 Tab 토글\n\n- 날짜: 2026-08-15\n- 도메인: 인벤토리 접근성 / 플랫폼 입력\n- 변경 유형: changed\n- 이전 규칙: 화면 내부 닫기 버튼과 명확한 PC 토글 경로가 없었습니다.\n- 새 유효 규칙: 모바일 우측 최상단 닫기 버튼을 두고 PC 호환 시 Tab을 인벤토리 전용\n  토글로 사용하며 기본 플레이어 목록을 해제합니다.\n- 근거: 작업 화면에는 안전한 이탈 경로가 필요하며 한 입력이 두 UI를 열면 안 됩니다.\n- 의도한 사용자 경험: 닫는 법을 탐색하지 않고 즉시 메인 화면으로 돌아갑니다.\n- 범위와 제외: 모바일 터치와 PC 입력 호환에 적용하며 PC 레이아웃 품질은 제외합니다.\n- 영향 소스: Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: Luau 테스트, 소스 검사와 최종 Studio 모바일 화면.\n\n### PBP-INV-002 — 배치 보드 범위와 도구 배치\n\n- 날짜: 2026-08-15\n- 도메인: 모바일 배치 보드 / 공간 가독성\n- 변경 유형: changed\n- 이전 규칙: 빈 배치 영역과 우측 도구의 공간 관계가 충분히 드러나지 않았습니다.\n- 새 유효 규칙: 전체 배치 영역에 옅은 육각 격자를 그리고 우측 상단 모드 탭과 우측 하단\n  확대 도구를 위한 반응형 인셋을 둡니다.\n- 근거: 빈 공간도 게임 공간이며 조작 계층과 동시에 보여야 합니다.\n- 의도한 사용자 경험: 배치 가능 범위와 도구 위치를 즉시 이해합니다.\n- 범위와 제외: 모바일 보드와 모드·확대 도구에 적용합니다.\n- 영향 소스: VisualTokens.luau, ScreenRenderer.luau, ScreenState.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: iPhone 17 Pro와 Galaxy A06 Studio Play의 잘림·겹침 검사.\n\n### PBP-INV-003 — 손가락 위 드래그와 단일 목적지 안내\n\n- 날짜: 2026-08-15\n- 도메인: 인벤토리 드래그 / 배치 피드백\n- 변경 유형: changed\n- 이전 규칙: 아이템이 포인터 아래에 남고 여러 강조가 목표 칸과 경쟁했습니다.\n- 새 유효 규칙: 회전된 그림 전체를 포인터 위로 올리고 그림과 목적지 외곽선만 표시합니다.\n- 근거: 드래그 중에는 대상과 내려놓을 위치가 가장 강하게 읽혀야 합니다.\n- 의도한 사용자 경험: 손가락에 가리지 않은 그림으로 정확히 조준합니다.\n- 범위와 제외: 아이템 드래그에 적용하며 그림이 없는 가방은 점유 형태를 사용합니다.\n- 영향 소스: DragPlacementState.luau, Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 포인터 리프트·잡은 칸·outline-only Luau 테스트.\n\n### PBP-INV-004 — 카드·선택 정보와 0.1Kg 정밀도\n\n- 날짜: 2026-08-15\n- 도메인: 아이템 정보 구조 / 무게 규칙\n- 변경 유형: changed\n- 이전 규칙: 무게 표현과 시너지 정렬이 좁은 카드에서 일관되지 않았습니다.\n- 새 유효 규칙: x.xKg 표시와 0.1Kg 판정을 통일하고 시너지를 카드 가운데 정렬합니다.\n- 근거: 화면 표시와 게임 판정은 같은 값을 사용해야 합니다.\n- 의도한 사용자 경험: 좁은 카드에서 핵심 정보와 초과 이유를 빠르게 이해합니다.\n- 범위와 제외: 저장 카드, 선택 정보, 합계와 허용 판정에 적용합니다.\n- 영향 소스: WeightEvaluator.luau, ItemInstanceHydrator.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013, backpack-combat-stat-database\n- 검증과 증거: 무게 양자화·형식·허용 판정 테스트와 카드 소스 검사.\n\n### PBP-INV-005 — 필터와 배치 모드의 직접 연결\n\n- 날짜: 2026-08-15\n- 도메인: 보관함 탐색 / 모드 전환\n- 변경 유형: changed\n- 이전 규칙: 종류 필터와 배치 탭을 따로 바꿔야 했습니다.\n- 새 유효 규칙: 가방 필터는 가방 배치로, 다른 필터는 아이템 배치와 해당 종류로 이동합니다.\n- 근거: 보관함 종류 선택은 다음 배치 대상의 선택입니다.\n- 의도한 사용자 경험: 한 번의 터치로 원하는 목록과 배치 모드에 도달합니다.\n- 범위와 제외: 일반 종류 필터 다섯 개와 배치 모드 연동에 적용합니다.\n- 영향 소스: ScreenState.luau, Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 모드별 필터 상태 Luau 테스트.\n\n### PBP-INV-006 — 시너지·칸 수 고급 필터\n\n- 날짜: 2026-08-15\n- 도메인: 보관함 고급 탐색 / 모바일 UI\n- 변경 유형: added\n- 이전 규칙: 종류 외의 시너지와 점유 칸 범위를 직접 좁힐 수 없었습니다.\n- 새 유효 규칙: 별도 고급 필터에서 26종 시너지 토글과 1~9 칸 범위를 설정합니다.\n- 근거: 조합과 공간 효율은 종류와 독립적인 탐색 기준입니다.\n- 의도한 사용자 경험: 조합과 크기에 맞는 아이템을 빠르게 좁힙니다.\n- 범위와 제외: 가방과 아이템 칸 범위, 아이템의 하나 이상 시너지 일치에 적용합니다.\n- 영향 소스: ScreenState.luau, Screen.luau, ScreenRenderer.luau, VisualTokens.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 사용자 기획 이미지, Studio 캡처와 두 모바일 화면 테스트.\n\n### PBP-ART-001 — 시너지 아이콘 소형 가독성 규칙\n\n- 날짜: 2026-08-15\n- 도메인: 모바일 UI 아트 방향 / 인벤토리 시너지\n- 변경 유형: changed\n- 이전 규칙: 큰 합본을 축소해 실제 카드 크기에서 세부가 합쳐졌습니다.\n- 새 유효 규칙: 약 25px를 승인 기준으로 대표 심볼·투명 배경·최대 3색·216px 경계를\n  사용합니다.\n- 근거: 작은 화면에서 시너지를 구분하는 속도가 우선입니다.\n- 의도한 사용자 경험: 짧게 훑어도 형태와 대표색으로 시너지를 구분합니다.\n- 범위와 제외: 활성 26종 이미지와 재생성 계약에 적용하며 의미와 효과는 바꾸지 않습니다.\n- 영향 소스: Assets/UI/Backpack/SynergyIcons, SynergyCatalog.luau\n- 관련 위키: synergy-icon-system@v001, inventory-item-concept\n- 검증과 증거: 두 Studio 모바일 화면, 26개 자산과 전용 이미지 테스트.\n\n### PBP-CONTENT-001 — FootprintExpansion21 활성 집합 정리\n\n- 날짜: 2026-08-15\n- 도메인: 아이템 콘텐츠 / 공개 데이터\n- 변경 유형: retired\n- 이전 규칙: 확장 시안 21개가 모두 활성 후보로 남았습니다.\n- 새 유효 규칙: 11개만 활성화하고 10개는 제품 데이터와 미디어에서 제거합니다.\n- 근거: 폐기 시안이 남으면 현재 지원 범위를 잘못 전달합니다.\n- 의도한 사용자 경험: 실제 지원하는 아이템만 게임과 공개 DB에서 확인합니다.\n- 범위와 제외: 해당 10개 아이콘·레이아웃·참조를 제거하고 매니페스트 이력은 보존합니다.\n- 영향 소스: FootprintExpansion21, ItemDB 카탈로그·레이아웃·생성 산출물\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: ItemDB 90개 build/check와 생성 산출물 검사.\n\n### PBP-DOC-001 — 누적 제품 기획 변경 원장\n\n- 날짜: 2026-08-15\n- 도메인: 개발 문서 운영\n- 변경 유형: added\n- 이전 규칙: 기획 규칙의 변경을 한곳에서 계속 추적하는 누적 원장이 없었습니다.\n- 새 유효 규칙: 사용자 승인 커밋마다 물질적 변경을 안정적인 ID와 함께 누적합니다.\n- 근거: 구현이 개선돼도 최종 규칙과 변경 이유가 사라지지 않아야 합니다.\n- 의도한 사용자 경험: 위키 한 페이지에서 현재 규칙과 과거 이유를 연속 확인합니다.\n- 범위와 제외: 제품·게임플레이·UX·콘텐츠·아트·플랫폼·운영에 적용하며 순수 리팩터링은\n  제외합니다.\n- 영향 소스: AGENTS.md, wiki/content/pages/product-planning-change-log\n- 관련 위키: inventory-item-concept, development-wiki\n- 검증과 증거: 위키 빌드·체크·정책 테스트와 동일 커밋 발행.\n\n### PBP-ITEMDB-001 — ItemDB ON/OFF 베이크 경계\n\n- 날짜: 2026-08-16\n- 도메인: 아이템 운영 / 게임 배포\n- 변경 유형: added\n- 이전 규칙: ItemDB에 존재하는 모든 아이템이 항상 생성 런타임과 게임 베이크에 포함됐습니다.\n- 새 유효 규칙: 각 아이템은 ON/OFF 상태를 가지며 OFF는 웹 기획 기록에는 남고 다음 베이크와\n  생성 런타임에서는 제외됩니다. ON 복귀 시 기존 형태·이미지·시너지·효과 설정을 유지합니다.\n- 근거: 일시 제외와 영구 폐기를 구분해야 콘텐츠 실험과 롤백이 데이터 삭제 없이 가능합니다.\n- 의도한 사용자 경험: 운영자는 한 번의 버튼으로 게임 노출을 제어하고 플레이어는 승인된\n  활성 아이템만 만납니다.\n- 범위와 제외: ItemDB 웹 편집, 생성 레이아웃, 게임 카탈로그와 Studio 베이크에 적용합니다.\n  OFF 항목의 원본·웹 검색·이미지는 삭제하지 않습니다.\n- 영향 소스: inventory-item-layouts.json, tools/item_db.py, GeneratedItemLayouts.luau,\n  ItemCatalog.luau, wiki/site/app.js\n- 관련 위키: inventory-item-concept@v014\n- 검증과 증거: 390×844 ON 행 캡처, OFF 생성 제외 테스트, ItemDB 90개 정합성 검사.\n\n### PBP-EFFECT-001 — A·B·C 공간 접촉 효과 영역\n\n- 날짜: 2026-08-16\n- 도메인: 아이템 조합 / 공간 효과 / ItemDB 저작\n- 변경 유형: added\n- 이전 규칙: 아이템은 자기 능력치와 점유 형태만 가졌고 주변 아이템 접촉을 표현하는\n  저작 계약이 없었습니다.\n- 새 유효 규칙: 아이템당 A·B·C 최대 세 효과 슬롯을 두고 점유 경계 바깥 Q/R 다섯 칸까지\n  직접 효과 칸을 선택합니다. 각 슬롯은 종류·조건·능력 ID를 가지며 공간 접촉 판정과 실제\n  능력 실행은 분리합니다.\n- 근거: 가방 배치의 공간 관계를 조합 빌드로 확장하되 전투 규칙이 배치 기하에 결합되지\n  않아야 합니다.\n- 의도한 사용자 경험: 플레이어는 아이템을 어디에 놓고 무엇과 맞닿게 하는지로 추가 효과를\n  설계하고, 운영자는 같은 육각 편집 방식으로 규칙을 시각적으로 저작합니다.\n- 범위와 제외: 효과 칸 데이터, 카탈로그 ID, 회전 접촉 후보 평가까지 포함합니다. 조건 논리,\n  능력치 합산, 전투 발현과 시각 효과는 후속 범위입니다.\n- 영향 소스: item-effect-catalog.json, item-effect-slots.md, inventory-item-layouts.json,\n  GeneratedItemLayouts.luau, ItemEffectContactEvaluator.luau, ItemInstanceHydrator.luau,\n  wiki/site/app.js, wiki/site/item-db.js\n- 관련 위키: inventory-item-concept@v014, backpack-combat-stat-database\n- 검증과 증거: 390×844 A/B/C 편집 캡처, 효과 좌표·카탈로그·회전 접촉·드래그 비활성 테스트,\n  Studio의 동일 리비전 90개 레이아웃과 EffectCatalog 확인.\n\n### PBP-ITEMDB-002 — ItemDB 칸 수·시너지·게임 ON 복합 필터\n\n- 날짜: 2026-08-18\n- 도메인: ItemDB 운영 / 웹 탐색\n- 변경 유형: added\n- 이전 규칙: ItemDB는 이름과 대분류만 좁힐 수 있어 점유 크기·시너지·실제 게임 포함\n  집합을 따로 확인해야 했습니다.\n- 새 유효 규칙: 최소·최대 칸 수, 여러 시너지의 OR, 전체/게임 ON 상태를 검색·대분류와\n  AND로 조합하며 스크롤과 효과 카탈로그 접힘 상태를 재렌더링 뒤에도 유지합니다.\n- 근거: 전체 기획 목록과 현재 게임 집합을 한 화면에서 빠르게 비교해야 합니다.\n- 의도한 사용자 경험: “게임에 들어가는 2~4칸 기계 또는 원거리 아이템”을 그대로 필터로\n  표현하고 실제 아이콘으로 결과를 빠르게 훑습니다.\n- 범위와 제외: 공개·로컬 ItemDB 탐색과 시너지 미디어에 적용합니다. 게임 안의 보관함\n  고급 필터 상태와는 별도입니다.\n- 영향 소스: tools/item_db.py, wiki/site/app.js, wiki/site/app.css, wiki/site/item-db-data.js,\n  wiki/site/synergy-media\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: 1440×900 복합 필터 캡처, 8개 ON 결과, 26/26 이미지 로드,\n  catalogOpen=false·scrollY=188 유지, 브라우저 콘솔 오류·경고 0건.\n\n### PBP-INV-007 — 최대 6개 장착 무기와 필드 표시\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 장착 / 필드 가독성\n- 변경 유형: added\n- 이전 규칙: 유효하게 배치된 무기는 보드 안에서만 보였고 장착 목록·한도·필드 표시 계약이\n  없었습니다.\n- 새 유효 규칙: 유효한 Weapon은 최초 배치 순서대로 최대 6개까지 장착되고 2×3 장착 탭,\n  상세 정보·빼기, 모든 캐릭터 위의 방향 반응 이미지로 표시됩니다.\n- 근거: 공간 배치 결과가 실제 플레이 장비로 읽혀야 인벤토리 퍼즐과 전투 준비가 연결됩니다.\n- 의도한 사용자 경험: 여섯 슬롯에서 장착 상태를 관리하고 필드에서 자신의 빌드를 즉시\n  알아봅니다.\n- 범위와 제외: 장착 상태·관리·이미지 표시에 적용합니다. 실제 공격 실행과 무기 모델은\n  후속 범위입니다.\n- 영향 소스: EquippedItemModel.luau, InventoryBoardModel.luau, InventorySerializer.luau,\n  Screen.luau, ScreenRenderer.luau, InventoryService.luau, EquippedWeaponBillboard.luau,\n  CharacterController.luau, DirectionResolver.luau\n- 관련 위키: inventory-item-concept@v015, character-2d-rendering@v009\n- 검증과 증거: iPhone 17 Pro·Galaxy A06 장착 슬롯과 상세 모달 캡처, 6개 한도 Luau 테스트,\n  West 87.8°·East -92.1° 방향 회전, 최종 Studio 콘솔 오류·경고 0건.\n\n### PBP-INV-008 — 상태와 무관한 2px 배치 외곽선\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 시각 계층\n- 변경 유형: changed\n- 이전 규칙: 가방 시너지나 배치 미리보기 상태에 따라 외곽선이 3~7px로 굵어질 수 있었습니다.\n- 새 유효 규칙: 가방·아이템·선택·시너지·유효·무효·미리보기 외곽선은 모두 2px이며 상태는\n  색으로만 구분합니다.\n- 근거: 굵기 변화가 점유 형태를 실제보다 커 보이게 하고 아이템 그림과 경쟁했습니다.\n- 의도한 사용자 경험: 같은 공간 형태를 안정적으로 읽고 색으로 상태만 빠르게 구분합니다.\n- 범위와 제외: 인벤토리 보드와 보관함 선택 외곽선에 적용합니다.\n- 영향 소스: ScreenState.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: 모든 외곽선 경로가 GetBoundaryThickness=2를 사용하는 Luau·소스 회귀 테스트.\n\n### PBP-CONTENT-002 — 게임 ON 32개 승인 집합\n\n- 날짜: 2026-08-18\n- 도메인: 아이템 콘텐츠 / 게임 배포\n- 변경 유형: changed\n- 이전 규칙: 전체 90개 ItemDB가 모두 게임 ON으로 생성 런타임에 포함됐습니다.\n- 새 유효 규칙: 전체 기획 목록 90개를 보존하면서 게임 ON 32개만 생성 런타임과 Studio\n  베이크에 포함합니다. 포켓 네일건은 MACHINE을 제외한 RANGED·GUN, 소화기 철퇴는\n  FORGED 대신 MACHINE을 사용합니다.\n- 근거: 현재 게임에 투입할 승인 콘텐츠와 후속 기획 후보를 데이터 삭제 없이 구분합니다.\n- 의도한 사용자 경험: 플레이어는 승인된 32개만 만나고 운영자는 OFF 58개를 계속 비교·복원할\n  수 있습니다.\n- 범위와 제외: PBP-CONTENT-001의 전체 90개 카탈로그와 폐기 이력은 유지하며 게임 포함 집합만\n  변경합니다.\n- 영향 소스: inventory-item-layouts.json, GeneratedItemLayouts.luau, wiki/site/item-db-data.js\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: ItemDB revision a35b00cf76ec6c75, 전체 90·게임 ON 32 build/check,\n  Studio 같은 소스 베이크와 저장.\n\n### PBP-ACTION-001 — 20스터드 방향 잠금 Dash\n\n- 날짜: 2026-08-18\n- 도메인: 캐릭터 액션 / 이동 / 스프라이트 일관성\n- 변경 유형: changed\n- 이전 규칙: Dash는 0.20초 동안 목표 속도 30 studs/s의 순간 충격을 적용하고 별도 Dash\n  포즈를 재생할 수 있었습니다.\n- 새 유효 규칙: Dash는 0.30초 동안 선택 방향을 잠그고 장애물이 없는 기준 20스터드를\n  이동합니다. WalkSpeed·AutoRotate를 잠근 뒤 복원하고 시작 순간의 완성 프레임을 유지합니다.\n- 근거: 이동 거리를 입력·현재 속도와 분리해 일관되게 만들고, 승인 Run 아틀라스가 레거시\n  모듈식 Walk/Dash 이미지로 바뀌는 비율 변화를 막습니다.\n- 의도한 사용자 경험: Dash 방향이 중간에 꺾이지 않고 같은 거리를 이동하며 캐릭터 모습도\n  한 프레임으로 안정적으로 유지됩니다.\n- 범위와 제외: 클라이언트 Dash 이동·방향·스프라이트에 적용합니다. 장애물 관통이나 별도\n  Dash 공격 판정은 추가하지 않습니다.\n- 영향 소스: character-actions.md, Config.luau, PlayerActionController.luau,\n  CharacterController.luau, test_two_direction_run_build.py\n- 관련 위키: character-2d-rendering@v009\n- 검증과 증거: Galaxy A06 Play에서 19.46스터드 이동, 이동 중 WalkSpeed=0·AutoRotate=false,\n  종료 뒤 16·true 복원, 최종 콘솔 오류·경고 0건.\n\n### PBP-DEV-001 — 세션 전용 허용 무게 테스트 창\n\n- 날짜: 2026-08-18\n- 도메인: Studio 개발 도구 / 데이터 안전\n- 변경 유형: added\n- 이전 규칙: 허용 무게 경계값을 플레이 중 빠르게 바꾸는 전용 진단 UI가 없었습니다.\n- 새 유효 규칙: Studio에서만 F2 창으로 허용 무게를 1Kg씩 조정하고, 영구 저장에는 플레이어의\n  원래 제한값을 사용합니다.\n- 근거: 무게 초과 UI와 배치 경계를 반복 검증하되 진단 값이 사용자 데이터에 남으면 안 됩니다.\n- 의도한 사용자 경험: 개발자는 Play를 다시 시작하지 않고 경계값을 시험하며 플레이어는\n  테스트 기능이나 변조된 저장값을 보지 않습니다.\n- 범위와 제외: Roblox Studio 진단 세션에만 적용하며 모바일 제품 UI 완료 범위가 아닙니다.\n- 영향 소스: DeveloperTestControls.luau, DeveloperTestWindow.luau, Screen.luau,\n  InventoryService.luau\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: Studio-only 생성·서버 거부·원래 제한 직렬화 소스 검사와 Luau 경계 테스트.\n\n### PBP-INV-009 — 사각 장착판과 부위별 중복 제한\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 장착 / 공간 퍼즐\n- 변경 유형: superseded\n- 이전 규칙: PBP-INV-002~007은 육각 가방이 활성 칸을 만들고 시너지·필터와 유효 배치 무기\n  여섯 개를 관리하는 메인 인벤토리를 사용했습니다.\n- 새 유효 규칙: 아이템은 사각 폴리오미노로 배치하며 유효한 배치가 곧 장착입니다. 무기는\n  여섯 개, 반지는 두 개, 나머지 지정 부위는 한 개이며 무기·반지는 같은 DefinitionId를\n  중복할 수 없습니다. 디아블로식 장비창은 권위 배치의 투영입니다.\n- 근거: 장착 제한을 즉시 이해시키면서 공간 퍼즐은 크기와 형태로 유지해야 합니다.\n- 의도한 사용자 경험: 플레이어는 별도 장착 버튼 없이 배치와 장비 요약을 같은 상태로\n  이해합니다.\n- 범위와 제외: 메인 장착판과 장착 부위에 적용하며 특수 아이템·방패 슬롯은 제외합니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016\n- 검증과 증거: 기획 표에서 부위별 장착 수와 48종 콘텐츠 수량 검산.\n\n### PBP-SYNERGY-001 — 가방·시너지 시스템 전면 폐기\n\n- 날짜: 2026-08-18\n- 도메인: 인벤토리 / 시너지 / 아이템 조합\n- 변경 유형: retired\n- 이전 규칙: PBP-INV-004·006, PBP-ART-001과 PBP-EFFECT-001은 가방 활성 칸, 26종\n  시너지, 시너지 필터와 A/B/C 공간 접촉 효과를 제품 규칙으로 사용했습니다.\n- 새 유효 규칙: 가방 활성 칸, 육각 메인 인벤토리, 시너지 판정·아이콘·필터와 공간 접촉\n  효과를 후속 제품에서 사용하지 않습니다. 육각형은 아이템별 룬 보드에만 사용합니다.\n- 근거: 장착 규칙과 룬 성장 퍼즐이 각각 명확한 책임을 가져야 합니다.\n- 의도한 사용자 경험: 메인 장착은 사각형으로 빠르게 읽고 깊은 육각 퍼즐은 선택한 아이템\n  안에서 집중해 풉니다.\n- 범위와 제외: 새 제품 방향을 폐기하며 기존 코드·자산 제거는 후속 구현 커밋에서 수행합니다.\n- 영향 소스: inventory-item-concept@v016, inventory-item-concept@v015\n- 관련 위키: synergy-icon-system@v001, inventory-item-concept@v016\n- 검증과 증거: v016 폐기·제외 목록과 이전 v015 구현 범위 대조.\n\n### PBP-CONTENT-003 — 알파 장비 48종과 점유 크기\n\n- 날짜: 2026-08-18\n- 도메인: 알파 아이템 콘텐츠 / 장착 부위\n- 변경 유형: superseded\n- 이전 규칙: PBP-CONTENT-002의 현행 게임 ON 32개와 과거 90개 카탈로그가 실제 알파\n  배포 집합이었습니다.\n- 새 유효 규칙: 다음 알파 구현 목표는 무기 14종, 방어구·장신구 34종의 48종입니다. 머리·\n  상의·하의는 4/6칸, 귀걸이·반지는 1칸, 목걸이는 2/3칸, 글러브·신발·벨트는 2/4칸을\n  사용합니다.\n- 근거: 부위별 역할과 사각 점유 크기를 함께 선택하게 해 배치 조합을 늘립니다.\n- 의도한 사용자 경험: 작은 장비의 공간 효율과 큰 장비의 역할을 비교해 자신만의 장착판을\n  만듭니다.\n- 범위와 제외: 48종은 기획 목표이며 현재 ItemDB와 Studio ON 32개는 구현 전까지 그대로입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 무기 14 + 부위별 장비 34 = 48 산술 검산.\n\n### PBP-RUNE-001 — Seed 고정 259칸 아이템 룬 보드\n\n- 날짜: 2026-08-18\n- 도메인: 아이템 성장 / 룬 퍼즐 / 합성\n- 변경 유형: added\n- 이전 규칙: 각 아이템에 독립적인 장기 육각 성장판과 룬 조각 합성 계약이 없었습니다.\n- 새 유효 규칙: 각 아이템은 37칸 영역 일곱 개를 0~6등급에 하나씩 열고, 색별 시작점에서\n  젬블로식 한 칸 간격으로 1~5칸 룬을 연결합니다. 전체 능력 위치는 생성 Seed로 고정하며\n  합성 시 기준 아이템의 Seed와 배치를 보존합니다.\n- 근거: 같은 아이템도 경로·룬 모양·색 차단을 고민하는 장기 성장 퍼즐이 필요합니다.\n- 의도한 사용자 경험: 적은 룬으로 원하는 고등급 능력까지 길을 만들고 다른 색의 미래 경로를\n  함께 계획합니다.\n- 범위와 제외: 보드·등급 개방·룬/아이템 합성 계약이며 실제 생성기와 저장 마이그레이션은\n  후속 구현입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016\n- 검증과 증거: 일곱 영역 각각 37칸과 전체 259칸, 영역별 능력 분포 합계 검산.\n\n### PBP-RUNE-002 — 룬 능력 예산·등급 증가·레어 칸\n\n- 날짜: 2026-08-18\n- 도메인: 룬 능력 / 밸런스 / UI 표현\n- 변경 유형: added\n- 이전 규칙: 룬 능력의 등급별 개수·표시 정밀도·레어 판정과 아이템 정체성 보호 규칙이\n  없었습니다.\n- 새 유효 규칙: 전체 능력 등급 개수는 18·27·33·37·41·50·53이며 같은 능력의 실제 등장\n  등급은 UI 표시값까지 엄격히 증가합니다. 구조형 레어는 6등급 영역의 황금 칸에서 한 단위만\n  제공하고 Seed는 위치만 바꿉니다.\n- 근거: 상위 등급의 보상감을 보존하고 좋은 Seed가 총 전투력 자체를 재추첨하지 않게 합니다.\n- 의도한 사용자 경험: 황금 칸을 장기 목표로 삼되 낮은 등급 경로도 매 단계 분명한 성장을\n  제공합니다.\n- 범위와 제외: 일반 POWER/SPEED/CHANCE/TRAIT/GUARD/TIME/RANGE와 레어 표시에 적용합니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 등급·트랙별 칸 수와 259칸 합계, 모든 표시 수치의 단조 증가 수동 검토.\n\n### PBP-COMBAT-001 — 자동 스킬과 비선형 능력 캡\n\n- 날짜: 2026-08-18\n- 도메인: 전투 능력 / 자동 스킬 / 방어 계산\n- 변경 유형: added\n- 이전 규칙: 룬 인플레이션에서 행동 빈도·확률·무적·발사체 수를 안전하게 제한하는 공통\n  계산 순서가 없었습니다.\n- 새 유효 규칙: 자동 스킬은 해당 무기의 기본 공격 실행 횟수로 발동하고 감소는 최대 8회,\n  최소 요구 횟수는 1회입니다. 방패 막기는 최대 100%에서 방어력을 두 배로 적용하며 방어력\n  이후 최종 피해감소는 최대 50%입니다. 이동·공격·대시·회피·회복·보호막 등은 v016의\n  항목별 캡을 사용합니다.\n- 근거: 적 수치 강화로 대응 가능한 선형 인플레이션은 허용하되 무한 행동·완전 무적·확률\n  초과는 막아야 합니다.\n- 의도한 사용자 경험: 큰 숫자 성장은 즐기면서도 공격과 피격의 기본 규칙은 계속 작동합니다.\n- 범위와 제외: 탄약, 탄약 미소모, 소모품 미소모와 스킬 초기화 확률은 사용하지 않습니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: backpack-combat-stat-database, inventory-item-concept@v016\n- 검증과 증거: 계산 순서와 캡·제외 목록의 기획 교차 검토.\n\n### PBP-RUNE-003 — 알파 무기 14종의 보드 정체성\n\n- 날짜: 2026-08-18\n- 도메인: 무기 콘텐츠 / 룬 보드 / 자동 스킬\n- 변경 유형: added\n- 이전 규칙: 알파 무기별 자동 스킬 조건과 259칸 A/B/C/D·레어 배분이 고정되지 않았습니다.\n- 새 유효 규칙: 일곱 무기 형태에 두 종류씩 14개를 두고 각 보드는 A 102, B 71, C 48,\n  D 32, 6등급 로컬 레어 6칸을 가집니다. 목걸이는 발사체, 반지는 자동 스킬 요구 공격,\n  귀걸이는 근거리 사거리의 전역 레어를 제공하고 신발만 추가 대시를 제공합니다.\n- 근거: Seed 위치가 달라도 무기 이름과 공격 방식에 맞는 성장 정체성이 유지돼야 합니다.\n- 의도한 사용자 경험: 같은 룬이라도 연격검·공성 석궁·흡혈 도끼에서 서로 다른 경로와\n  자동 스킬을 강화합니다.\n- 범위와 제외: 14종의 알파 기획 계약이며 최종 아이콘·폴리오미노 좌표·전투 구현은 후속입니다.\n- 영향 소스: inventory-item-concept@v016\n- 관련 위키: inventory-item-concept@v016, backpack-combat-stat-database\n- 검증과 증거: 각 무기 레어 합계 6칸과 보드 전체 259칸 산술 검산.\n",
          "source_path": "wiki/content/pages/product-planning-change-log/v005.md",
          "timeline_order": 37
        },
        {
          "id": "product-planning-change-log",
          "title": "제품 기획 변경 원장",
          "summary": "기존 원장을 누적 보존하면서 ItemDB 복합 필터, 게임 ON 32개, 최대 6개 장착 무기, 2px 외곽선, 20스터드 잠금 Dash와 세션 전용 테스트 규칙을 추가했습니다.",
          "status": "active",
          "category": "planning",
          "tags": [
            "planning",
            "decision-log",
            "product",
            "inventory",
            "itemdb",
            "equipped",
            "weapon",
            "dash",
            "action",
            "mobile",
            "web-editor",
            "studio",
            "documentation"
          ],
          "created_at": "2026-08-15",
          "updated_at": "2026-08-18",
          "authors": [
            "Codex"
          ],
          "version": 4,
          "change_type": "updated",
          "change_summary": "ItemDB 복합 필터와 게임 ON 32개, 최대 6개 장착 무기, 모든 배치 외곽선 2px, 시작 프레임을 유지하는 20스터드 잠금 Dash, 저장을 오염시키지 않는 Studio 무게 테스트 규칙을 누적했습니다.",
          "supersedes": "product-planning-change-log@v003",
          "sources": [
            "wiki/content/pages/product-planning-change-log/v003.md",
            "wiki/content/pages/inventory-item-concept/v015.md",
            "wiki/content/pages/character-2d-rendering/v009.md",
            "wiki/content/media/inventory-item-concept/v015/itemdb-filters-pc.jpg",
            "wiki/content/media/inventory-item-concept/v015/studio-equipped-items-galaxy-a06.jpg",
            "wiki/content/media/inventory-item-concept/v015/studio-equipped-details-galaxy-a06.jpg",
            "wiki/content/media/character-2d-rendering/v009/studio-equipped-weapon-galaxy-a06.jpg",
            "docs/gameplay/inventory-item-layouts.json",
            "docs/gameplay/character-actions.md",
            "src/ReplicatedStorage/BackpackUI/EquippedItemModel.luau",
            "src/ReplicatedStorage/BackpackUI/EquippedWeaponBillboard.luau",
            "src/ReplicatedStorage/BackpackUI/DeveloperTestControls.luau",
            "src/ReplicatedStorage/BackpackUI/DeveloperTestWindow.luau",
            "src/ReplicatedStorage/BackpackUI/ScreenRenderer.luau",
            "src/ReplicatedStorage/Character2D/PlayerActionController.luau",
            "tools/item_db.py",
            "wiki/site/app.js"
          ],
          "related": [
            "inventory-item-concept",
            "character-2d-rendering",
            "synergy-icon-system",
            "development-wiki",
            "backpack-combat-stat-database",
            "project-overview"
          ],
          "validation": [
            "inventory-item-concept@v015와 character-2d-rendering@v009의 최종 웹·Studio 증거를 같은 커밋 범위로 확인",
            "python3 tools/item_db.py check: ItemDB check passed 90 items, game ON 32",
            "bash tools/test_backpack_ui.sh: Backpack hex inventory tests passed",
            "luau tests/DirectionResolver.spec.luau: Character2D direction tests passed",
            "python3 -m unittest tests.test_two_direction_run_build: passed",
            "python3 -m unittest discover -s tests -p 'test_*.py': 68 tests passed",
            "node --test tests/item-db.spec.js: passed",
            "Roblox Studio MCP: 두 모바일 화면, 장착 6슬롯·상세 모달·필드 이미지·방향 회전과 빈 최종 콘솔 확인",
            "Roblox Studio MCP: Dash 19.46 studs, 이동 잠금과 종료 뒤 WalkSpeed·AutoRotate 복원 확인",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "python3 -m unittest tests/test_wiki.py",
            "python3 -m unittest tests.test_repository_policy",
            "git diff --check"
          ],
          "body": "# 제품 기획 변경 원장\n\n## 목적과 기록 원칙\n\n이 페이지는 구현 파일 목록이 아니라 ProjectBackpack의 제품 방향이 왜 바뀌었고 지금 어떤\n규칙이 유효한지를 누적 보존합니다. 플레이어 또는 운영자가 경험하는 제품·게임플레이·UX·\n콘텐츠·아트·플랫폼 규칙이 추가, 변경, 대체 또는 폐기될 때 기록합니다. 동작을 바꾸지 않는\n내부 리팩터링은 원장 대상이 아닙니다.\n\n각 결정은 안정적인 ID를 가집니다. 이후 규칙이 달라지면 이미 커밋된 항목을 고치거나 지우지\n않고 새 버전에 후속 항목을 추가해 이전 ID와 관계를 명시합니다. 최신 버전은 과거 원장과\n현재 유효 규칙을 모두 포함하며, 실제 제품 변경·주제별 위키·검증 증거와 같은 커밋에서\n발행합니다.\n\n## 현재 유효 규칙\n\n### PBP-INV-001 — 인벤토리에는 명확한 이탈과 호환 토글이 있다\n\n모바일 인벤토리는 우측 최상단 닫기 버튼으로 메인 화면에 복귀합니다. PC 호환 경로에서는\nTab이 인벤토리 열기·닫기를 전담하고 Roblox 기본 플레이어 목록은 같은 입력을 사용하지\n않습니다. PC 레이아웃 품질은 별도 단계이며 이번 규칙의 완료 범위가 아닙니다.\n\n### PBP-INV-002 — 보드는 전체 배치 가능 범위와 도구 계층을 드러낸다\n\n보이는 모든 배치 가능 칸은 옅은 회색 육각 격자로 표시합니다. 가방·아이템 배치 탭은 우측\n상단 세로형, 확대·원점·축소는 우측 하단 소형 도구로 두며 반응형 인셋으로 겹침을 막습니다.\n\n### PBP-INV-003 — 드래그 피드백은 아이템과 목적지만 보여 준다\n\n보관함과 보드 어디에서 잡아도 아이템 그림 전체가 손가락 또는 포인터 위에 놓입니다. 어두운\n점유 헥스와 영향 가방의 중복 강조는 쓰지 않고 스냅 목적지 외곽선 하나만 사용합니다.\n\n### PBP-INV-004 — 카드와 선택 정보는 동일한 판단 순서를 사용한다\n\n카드는 종류, x.xKg 무게, 그림과 점유 형태, 가운데 정렬된 0~3개 시너지, 이름 순으로\n읽힙니다. 모든 무게의 표시·합계·허용 판정은 0.1Kg 정밀도를 사용합니다.\n\n### PBP-INV-005 — 일반 필터는 배치 모드 이동 수단이기도 하다\n\n일반 필터 순서는 전체·무기·방어구·특수·가방입니다. 가방 필터는 가방 배치로, 다른 일반\n필터는 아이템 배치와 해당 종류로 한 번에 이동합니다.\n\n### PBP-INV-006 — 교차 조건은 별도의 고급 필터 계층에 둔다\n\n시너지와 칸 수 필터는 일반 필터 위의 별도 계층에 둡니다. 터치 영역은 48px 이상이며,\n시너지는 26종 하나 이상 일치, 칸 수는 1~9 최소·최대 범위 규칙을 사용합니다.\n\n### PBP-ITEMDB-001 — 아이템 기록과 게임 배포 상태를 분리한다\n\n모든 ItemDB 아이템은 ON/OFF 상태를 가집니다. OFF는 기획 기록과 웹 DB에는 남지만 다음\n게임 베이크와 런타임 생성 목록에서는 제외됩니다. 다시 ON으로 전환하면 기존 아이템 설정을\n그대로 사용합니다.\n\n### PBP-EFFECT-001 — 아이템은 최대 세 개의 공간 접촉 효과를 가진다\n\n한 아이템은 A·B·C 세 효과 슬롯을 가질 수 있습니다. 각 슬롯은 아이템 점유 경계보다 Q/R\n양방향 다섯 칸 넓은 영역에서 직접 선택한 접촉 칸과 종류·조건·발현 능력 ID를 저장합니다.\n공간 접촉 판정과 실제 전투 능력 실행은 분리합니다.\n\n### PBP-ART-001 — 시너지 아이콘은 작은 표시 크기에서 먼저 설계한다\n\n시너지 아이콘은 약 25px 표시에서 핵심 형태가 구분되어야 합니다. 대표 심볼 하나, 투명\n배경, 최대 3색, 216px 내용 경계를 사용하고 메달형 배경과 과도한 세부는 피합니다.\n\n### PBP-CONTENT-001 — 폐기 아이템은 모든 제품 표면에서 함께 제거한다\n\nFootprintExpansion21 중 승인된 11개만 활성화하고 10개는 아이콘·카탈로그·런타임·공개\n미디어에서 함께 제거합니다. 폐기 이력은 매니페스트에 남기며 현재 ItemDB는 90개입니다.\n\n### PBP-DOC-001 — 기획 변경은 커밋 시 누적 원장으로 발행한다\n\n물질적인 제품 기획 변경이 있는 사용자 승인 커밋마다 이 페이지에 최대 한 버전을 추가하고,\n최신 버전은 현재 유효 규칙과 모든 과거 항목을 같은 커밋에 누적 보존합니다.\n\n### PBP-ITEMDB-002 — ItemDB 복합 필터는 운영 문맥을 보존한다\n\nItemDB 웹은 점유 칸 최소·최대, 26종 시너지 OR, 전체/게임 ON 상태를 검색·대분류와 함께\n적용합니다. 목록 재렌더링 뒤에도 스크롤과 효과 카탈로그 접힘 상태를 유지하고 실제 시너지\n아이콘을 사용합니다.\n\n### PBP-INV-007 — 유효한 배치 무기는 최대 6개까지 장착된다\n\n보드에 유효하게 배치된 Weapon은 최초 배치 순서대로 장착되며 최대 6개입니다. 장착 탭은\n2×3 슬롯, 상세 정보와 빼기를 제공하고, 장착 이미지는 모든 캐릭터 위에서 방향을 따라\n표시됩니다.\n\n### PBP-INV-008 — 모든 배치 외곽선은 색만 바꾸는 2px 규칙을 사용한다\n\n가방·아이템·선택·시너지·유효·무효·배치 미리보기는 모두 2px 외곽선을 사용합니다. 상태는\n색으로 구분하고 두께 변화로 점유 형태가 커지거나 무거워 보이지 않게 합니다.\n\n### PBP-CONTENT-002 — 현재 게임 승인 ItemDB는 32개다\n\n전체 기획 카탈로그 90개는 보존하되 현재 게임 ON은 32개입니다. OFF 58개는 공개 ItemDB에서\n계속 비교할 수 있지만 생성 런타임과 Studio 베이크에서는 제외합니다. 포켓 네일건은\nRANGED·GUN, 소화기 철퇴는 MELEE·MACE·MACHINE 시너지를 사용합니다.\n\n### PBP-ACTION-001 — Dash는 20스터드 잠금 이동과 시작 프레임 고정을 사용한다\n\nDash는 선택 방향을 0.30초 동안 잠그고 장애물이 없는 길에서 20스터드를 이동합니다.\n이동 중 WalkSpeed와 AutoRotate를 잠그며, 프레임 스프라이트는 Dash 시작 순간의\nIdle/Run State와 Phase를 유지해 모듈식 Walk/Dash 이미지로 바뀌지 않습니다.\n\n### PBP-DEV-001 — Studio 무게 제한 테스트는 세션 전용이다\n\nStudio에서는 F2 테스트 창으로 허용 무게를 1Kg씩 조정할 수 있습니다. 이 값은 현재 플레이\n세션의 권위 보드에만 적용하며 저장할 때는 원래 제한을 복원합니다. 실제 플레이어 빌드에는\n테스트 창을 생성하지 않습니다.\n\n## 변경 원장\n\n### PBP-INV-001 — 인벤토리 이탈과 Tab 토글\n\n- 날짜: 2026-08-15\n- 도메인: 인벤토리 접근성 / 플랫폼 입력\n- 변경 유형: changed\n- 이전 규칙: 화면 내부 닫기 버튼과 명확한 PC 토글 경로가 없었습니다.\n- 새 유효 규칙: 모바일 우측 최상단 닫기 버튼을 두고 PC 호환 시 Tab을 인벤토리 전용\n  토글로 사용하며 기본 플레이어 목록을 해제합니다.\n- 근거: 작업 화면에는 안전한 이탈 경로가 필요하며 한 입력이 두 UI를 열면 안 됩니다.\n- 의도한 사용자 경험: 닫는 법을 탐색하지 않고 즉시 메인 화면으로 돌아갑니다.\n- 범위와 제외: 모바일 터치와 PC 입력 호환에 적용하며 PC 레이아웃 품질은 제외합니다.\n- 영향 소스: Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: Luau 테스트, 소스 검사와 최종 Studio 모바일 화면.\n\n### PBP-INV-002 — 배치 보드 범위와 도구 배치\n\n- 날짜: 2026-08-15\n- 도메인: 모바일 배치 보드 / 공간 가독성\n- 변경 유형: changed\n- 이전 규칙: 빈 배치 영역과 우측 도구의 공간 관계가 충분히 드러나지 않았습니다.\n- 새 유효 규칙: 전체 배치 영역에 옅은 육각 격자를 그리고 우측 상단 모드 탭과 우측 하단\n  확대 도구를 위한 반응형 인셋을 둡니다.\n- 근거: 빈 공간도 게임 공간이며 조작 계층과 동시에 보여야 합니다.\n- 의도한 사용자 경험: 배치 가능 범위와 도구 위치를 즉시 이해합니다.\n- 범위와 제외: 모바일 보드와 모드·확대 도구에 적용합니다.\n- 영향 소스: VisualTokens.luau, ScreenRenderer.luau, ScreenState.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: iPhone 17 Pro와 Galaxy A06 Studio Play의 잘림·겹침 검사.\n\n### PBP-INV-003 — 손가락 위 드래그와 단일 목적지 안내\n\n- 날짜: 2026-08-15\n- 도메인: 인벤토리 드래그 / 배치 피드백\n- 변경 유형: changed\n- 이전 규칙: 아이템이 포인터 아래에 남고 여러 강조가 목표 칸과 경쟁했습니다.\n- 새 유효 규칙: 회전된 그림 전체를 포인터 위로 올리고 그림과 목적지 외곽선만 표시합니다.\n- 근거: 드래그 중에는 대상과 내려놓을 위치가 가장 강하게 읽혀야 합니다.\n- 의도한 사용자 경험: 손가락에 가리지 않은 그림으로 정확히 조준합니다.\n- 범위와 제외: 아이템 드래그에 적용하며 그림이 없는 가방은 점유 형태를 사용합니다.\n- 영향 소스: DragPlacementState.luau, Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 포인터 리프트·잡은 칸·outline-only Luau 테스트.\n\n### PBP-INV-004 — 카드·선택 정보와 0.1Kg 정밀도\n\n- 날짜: 2026-08-15\n- 도메인: 아이템 정보 구조 / 무게 규칙\n- 변경 유형: changed\n- 이전 규칙: 무게 표현과 시너지 정렬이 좁은 카드에서 일관되지 않았습니다.\n- 새 유효 규칙: x.xKg 표시와 0.1Kg 판정을 통일하고 시너지를 카드 가운데 정렬합니다.\n- 근거: 화면 표시와 게임 판정은 같은 값을 사용해야 합니다.\n- 의도한 사용자 경험: 좁은 카드에서 핵심 정보와 초과 이유를 빠르게 이해합니다.\n- 범위와 제외: 저장 카드, 선택 정보, 합계와 허용 판정에 적용합니다.\n- 영향 소스: WeightEvaluator.luau, ItemInstanceHydrator.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013, backpack-combat-stat-database\n- 검증과 증거: 무게 양자화·형식·허용 판정 테스트와 카드 소스 검사.\n\n### PBP-INV-005 — 필터와 배치 모드의 직접 연결\n\n- 날짜: 2026-08-15\n- 도메인: 보관함 탐색 / 모드 전환\n- 변경 유형: changed\n- 이전 규칙: 종류 필터와 배치 탭을 따로 바꿔야 했습니다.\n- 새 유효 규칙: 가방 필터는 가방 배치로, 다른 필터는 아이템 배치와 해당 종류로 이동합니다.\n- 근거: 보관함 종류 선택은 다음 배치 대상의 선택입니다.\n- 의도한 사용자 경험: 한 번의 터치로 원하는 목록과 배치 모드에 도달합니다.\n- 범위와 제외: 일반 종류 필터 다섯 개와 배치 모드 연동에 적용합니다.\n- 영향 소스: ScreenState.luau, Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 모드별 필터 상태 Luau 테스트.\n\n### PBP-INV-006 — 시너지·칸 수 고급 필터\n\n- 날짜: 2026-08-15\n- 도메인: 보관함 고급 탐색 / 모바일 UI\n- 변경 유형: added\n- 이전 규칙: 종류 외의 시너지와 점유 칸 범위를 직접 좁힐 수 없었습니다.\n- 새 유효 규칙: 별도 고급 필터에서 26종 시너지 토글과 1~9 칸 범위를 설정합니다.\n- 근거: 조합과 공간 효율은 종류와 독립적인 탐색 기준입니다.\n- 의도한 사용자 경험: 조합과 크기에 맞는 아이템을 빠르게 좁힙니다.\n- 범위와 제외: 가방과 아이템 칸 범위, 아이템의 하나 이상 시너지 일치에 적용합니다.\n- 영향 소스: ScreenState.luau, Screen.luau, ScreenRenderer.luau, VisualTokens.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 사용자 기획 이미지, Studio 캡처와 두 모바일 화면 테스트.\n\n### PBP-ART-001 — 시너지 아이콘 소형 가독성 규칙\n\n- 날짜: 2026-08-15\n- 도메인: 모바일 UI 아트 방향 / 인벤토리 시너지\n- 변경 유형: changed\n- 이전 규칙: 큰 합본을 축소해 실제 카드 크기에서 세부가 합쳐졌습니다.\n- 새 유효 규칙: 약 25px를 승인 기준으로 대표 심볼·투명 배경·최대 3색·216px 경계를\n  사용합니다.\n- 근거: 작은 화면에서 시너지를 구분하는 속도가 우선입니다.\n- 의도한 사용자 경험: 짧게 훑어도 형태와 대표색으로 시너지를 구분합니다.\n- 범위와 제외: 활성 26종 이미지와 재생성 계약에 적용하며 의미와 효과는 바꾸지 않습니다.\n- 영향 소스: Assets/UI/Backpack/SynergyIcons, SynergyCatalog.luau\n- 관련 위키: synergy-icon-system@v001, inventory-item-concept\n- 검증과 증거: 두 Studio 모바일 화면, 26개 자산과 전용 이미지 테스트.\n\n### PBP-CONTENT-001 — FootprintExpansion21 활성 집합 정리\n\n- 날짜: 2026-08-15\n- 도메인: 아이템 콘텐츠 / 공개 데이터\n- 변경 유형: retired\n- 이전 규칙: 확장 시안 21개가 모두 활성 후보로 남았습니다.\n- 새 유효 규칙: 11개만 활성화하고 10개는 제품 데이터와 미디어에서 제거합니다.\n- 근거: 폐기 시안이 남으면 현재 지원 범위를 잘못 전달합니다.\n- 의도한 사용자 경험: 실제 지원하는 아이템만 게임과 공개 DB에서 확인합니다.\n- 범위와 제외: 해당 10개 아이콘·레이아웃·참조를 제거하고 매니페스트 이력은 보존합니다.\n- 영향 소스: FootprintExpansion21, ItemDB 카탈로그·레이아웃·생성 산출물\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: ItemDB 90개 build/check와 생성 산출물 검사.\n\n### PBP-DOC-001 — 누적 제품 기획 변경 원장\n\n- 날짜: 2026-08-15\n- 도메인: 개발 문서 운영\n- 변경 유형: added\n- 이전 규칙: 기획 규칙의 변경을 한곳에서 계속 추적하는 누적 원장이 없었습니다.\n- 새 유효 규칙: 사용자 승인 커밋마다 물질적 변경을 안정적인 ID와 함께 누적합니다.\n- 근거: 구현이 개선돼도 최종 규칙과 변경 이유가 사라지지 않아야 합니다.\n- 의도한 사용자 경험: 위키 한 페이지에서 현재 규칙과 과거 이유를 연속 확인합니다.\n- 범위와 제외: 제품·게임플레이·UX·콘텐츠·아트·플랫폼·운영에 적용하며 순수 리팩터링은\n  제외합니다.\n- 영향 소스: AGENTS.md, wiki/content/pages/product-planning-change-log\n- 관련 위키: inventory-item-concept, development-wiki\n- 검증과 증거: 위키 빌드·체크·정책 테스트와 동일 커밋 발행.\n\n### PBP-ITEMDB-001 — ItemDB ON/OFF 베이크 경계\n\n- 날짜: 2026-08-16\n- 도메인: 아이템 운영 / 게임 배포\n- 변경 유형: added\n- 이전 규칙: ItemDB에 존재하는 모든 아이템이 항상 생성 런타임과 게임 베이크에 포함됐습니다.\n- 새 유효 규칙: 각 아이템은 ON/OFF 상태를 가지며 OFF는 웹 기획 기록에는 남고 다음 베이크와\n  생성 런타임에서는 제외됩니다. ON 복귀 시 기존 형태·이미지·시너지·효과 설정을 유지합니다.\n- 근거: 일시 제외와 영구 폐기를 구분해야 콘텐츠 실험과 롤백이 데이터 삭제 없이 가능합니다.\n- 의도한 사용자 경험: 운영자는 한 번의 버튼으로 게임 노출을 제어하고 플레이어는 승인된\n  활성 아이템만 만납니다.\n- 범위와 제외: ItemDB 웹 편집, 생성 레이아웃, 게임 카탈로그와 Studio 베이크에 적용합니다.\n  OFF 항목의 원본·웹 검색·이미지는 삭제하지 않습니다.\n- 영향 소스: inventory-item-layouts.json, tools/item_db.py, GeneratedItemLayouts.luau,\n  ItemCatalog.luau, wiki/site/app.js\n- 관련 위키: inventory-item-concept@v014\n- 검증과 증거: 390×844 ON 행 캡처, OFF 생성 제외 테스트, ItemDB 90개 정합성 검사.\n\n### PBP-EFFECT-001 — A·B·C 공간 접촉 효과 영역\n\n- 날짜: 2026-08-16\n- 도메인: 아이템 조합 / 공간 효과 / ItemDB 저작\n- 변경 유형: added\n- 이전 규칙: 아이템은 자기 능력치와 점유 형태만 가졌고 주변 아이템 접촉을 표현하는\n  저작 계약이 없었습니다.\n- 새 유효 규칙: 아이템당 A·B·C 최대 세 효과 슬롯을 두고 점유 경계 바깥 Q/R 다섯 칸까지\n  직접 효과 칸을 선택합니다. 각 슬롯은 종류·조건·능력 ID를 가지며 공간 접촉 판정과 실제\n  능력 실행은 분리합니다.\n- 근거: 가방 배치의 공간 관계를 조합 빌드로 확장하되 전투 규칙이 배치 기하에 결합되지\n  않아야 합니다.\n- 의도한 사용자 경험: 플레이어는 아이템을 어디에 놓고 무엇과 맞닿게 하는지로 추가 효과를\n  설계하고, 운영자는 같은 육각 편집 방식으로 규칙을 시각적으로 저작합니다.\n- 범위와 제외: 효과 칸 데이터, 카탈로그 ID, 회전 접촉 후보 평가까지 포함합니다. 조건 논리,\n  능력치 합산, 전투 발현과 시각 효과는 후속 범위입니다.\n- 영향 소스: item-effect-catalog.json, item-effect-slots.md, inventory-item-layouts.json,\n  GeneratedItemLayouts.luau, ItemEffectContactEvaluator.luau, ItemInstanceHydrator.luau,\n  wiki/site/app.js, wiki/site/item-db.js\n- 관련 위키: inventory-item-concept@v014, backpack-combat-stat-database\n- 검증과 증거: 390×844 A/B/C 편집 캡처, 효과 좌표·카탈로그·회전 접촉·드래그 비활성 테스트,\n  Studio의 동일 리비전 90개 레이아웃과 EffectCatalog 확인.\n\n### PBP-ITEMDB-002 — ItemDB 칸 수·시너지·게임 ON 복합 필터\n\n- 날짜: 2026-08-18\n- 도메인: ItemDB 운영 / 웹 탐색\n- 변경 유형: added\n- 이전 규칙: ItemDB는 이름과 대분류만 좁힐 수 있어 점유 크기·시너지·실제 게임 포함\n  집합을 따로 확인해야 했습니다.\n- 새 유효 규칙: 최소·최대 칸 수, 여러 시너지의 OR, 전체/게임 ON 상태를 검색·대분류와\n  AND로 조합하며 스크롤과 효과 카탈로그 접힘 상태를 재렌더링 뒤에도 유지합니다.\n- 근거: 전체 기획 목록과 현재 게임 집합을 한 화면에서 빠르게 비교해야 합니다.\n- 의도한 사용자 경험: “게임에 들어가는 2~4칸 기계 또는 원거리 아이템”을 그대로 필터로\n  표현하고 실제 아이콘으로 결과를 빠르게 훑습니다.\n- 범위와 제외: 공개·로컬 ItemDB 탐색과 시너지 미디어에 적용합니다. 게임 안의 보관함\n  고급 필터 상태와는 별도입니다.\n- 영향 소스: tools/item_db.py, wiki/site/app.js, wiki/site/app.css, wiki/site/item-db-data.js,\n  wiki/site/synergy-media\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: 1440×900 복합 필터 캡처, 8개 ON 결과, 26/26 이미지 로드,\n  catalogOpen=false·scrollY=188 유지, 브라우저 콘솔 오류·경고 0건.\n\n### PBP-INV-007 — 최대 6개 장착 무기와 필드 표시\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 장착 / 필드 가독성\n- 변경 유형: added\n- 이전 규칙: 유효하게 배치된 무기는 보드 안에서만 보였고 장착 목록·한도·필드 표시 계약이\n  없었습니다.\n- 새 유효 규칙: 유효한 Weapon은 최초 배치 순서대로 최대 6개까지 장착되고 2×3 장착 탭,\n  상세 정보·빼기, 모든 캐릭터 위의 방향 반응 이미지로 표시됩니다.\n- 근거: 공간 배치 결과가 실제 플레이 장비로 읽혀야 인벤토리 퍼즐과 전투 준비가 연결됩니다.\n- 의도한 사용자 경험: 여섯 슬롯에서 장착 상태를 관리하고 필드에서 자신의 빌드를 즉시\n  알아봅니다.\n- 범위와 제외: 장착 상태·관리·이미지 표시에 적용합니다. 실제 공격 실행과 무기 모델은\n  후속 범위입니다.\n- 영향 소스: EquippedItemModel.luau, InventoryBoardModel.luau, InventorySerializer.luau,\n  Screen.luau, ScreenRenderer.luau, InventoryService.luau, EquippedWeaponBillboard.luau,\n  CharacterController.luau, DirectionResolver.luau\n- 관련 위키: inventory-item-concept@v015, character-2d-rendering@v009\n- 검증과 증거: iPhone 17 Pro·Galaxy A06 장착 슬롯과 상세 모달 캡처, 6개 한도 Luau 테스트,\n  West 87.8°·East -92.1° 방향 회전, 최종 Studio 콘솔 오류·경고 0건.\n\n### PBP-INV-008 — 상태와 무관한 2px 배치 외곽선\n\n- 날짜: 2026-08-18\n- 도메인: 모바일 인벤토리 / 시각 계층\n- 변경 유형: changed\n- 이전 규칙: 가방 시너지나 배치 미리보기 상태에 따라 외곽선이 3~7px로 굵어질 수 있었습니다.\n- 새 유효 규칙: 가방·아이템·선택·시너지·유효·무효·미리보기 외곽선은 모두 2px이며 상태는\n  색으로만 구분합니다.\n- 근거: 굵기 변화가 점유 형태를 실제보다 커 보이게 하고 아이템 그림과 경쟁했습니다.\n- 의도한 사용자 경험: 같은 공간 형태를 안정적으로 읽고 색으로 상태만 빠르게 구분합니다.\n- 범위와 제외: 인벤토리 보드와 보관함 선택 외곽선에 적용합니다.\n- 영향 소스: ScreenState.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: 모든 외곽선 경로가 GetBoundaryThickness=2를 사용하는 Luau·소스 회귀 테스트.\n\n### PBP-CONTENT-002 — 게임 ON 32개 승인 집합\n\n- 날짜: 2026-08-18\n- 도메인: 아이템 콘텐츠 / 게임 배포\n- 변경 유형: changed\n- 이전 규칙: 전체 90개 ItemDB가 모두 게임 ON으로 생성 런타임에 포함됐습니다.\n- 새 유효 규칙: 전체 기획 목록 90개를 보존하면서 게임 ON 32개만 생성 런타임과 Studio\n  베이크에 포함합니다. 포켓 네일건은 MACHINE을 제외한 RANGED·GUN, 소화기 철퇴는\n  FORGED 대신 MACHINE을 사용합니다.\n- 근거: 현재 게임에 투입할 승인 콘텐츠와 후속 기획 후보를 데이터 삭제 없이 구분합니다.\n- 의도한 사용자 경험: 플레이어는 승인된 32개만 만나고 운영자는 OFF 58개를 계속 비교·복원할\n  수 있습니다.\n- 범위와 제외: PBP-CONTENT-001의 전체 90개 카탈로그와 폐기 이력은 유지하며 게임 포함 집합만\n  변경합니다.\n- 영향 소스: inventory-item-layouts.json, GeneratedItemLayouts.luau, wiki/site/item-db-data.js\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: ItemDB revision a35b00cf76ec6c75, 전체 90·게임 ON 32 build/check,\n  Studio 같은 소스 베이크와 저장.\n\n### PBP-ACTION-001 — 20스터드 방향 잠금 Dash\n\n- 날짜: 2026-08-18\n- 도메인: 캐릭터 액션 / 이동 / 스프라이트 일관성\n- 변경 유형: changed\n- 이전 규칙: Dash는 0.20초 동안 목표 속도 30 studs/s의 순간 충격을 적용하고 별도 Dash\n  포즈를 재생할 수 있었습니다.\n- 새 유효 규칙: Dash는 0.30초 동안 선택 방향을 잠그고 장애물이 없는 기준 20스터드를\n  이동합니다. WalkSpeed·AutoRotate를 잠근 뒤 복원하고 시작 순간의 완성 프레임을 유지합니다.\n- 근거: 이동 거리를 입력·현재 속도와 분리해 일관되게 만들고, 승인 Run 아틀라스가 레거시\n  모듈식 Walk/Dash 이미지로 바뀌는 비율 변화를 막습니다.\n- 의도한 사용자 경험: Dash 방향이 중간에 꺾이지 않고 같은 거리를 이동하며 캐릭터 모습도\n  한 프레임으로 안정적으로 유지됩니다.\n- 범위와 제외: 클라이언트 Dash 이동·방향·스프라이트에 적용합니다. 장애물 관통이나 별도\n  Dash 공격 판정은 추가하지 않습니다.\n- 영향 소스: character-actions.md, Config.luau, PlayerActionController.luau,\n  CharacterController.luau, test_two_direction_run_build.py\n- 관련 위키: character-2d-rendering@v009\n- 검증과 증거: Galaxy A06 Play에서 19.46스터드 이동, 이동 중 WalkSpeed=0·AutoRotate=false,\n  종료 뒤 16·true 복원, 최종 콘솔 오류·경고 0건.\n\n### PBP-DEV-001 — 세션 전용 허용 무게 테스트 창\n\n- 날짜: 2026-08-18\n- 도메인: Studio 개발 도구 / 데이터 안전\n- 변경 유형: added\n- 이전 규칙: 허용 무게 경계값을 플레이 중 빠르게 바꾸는 전용 진단 UI가 없었습니다.\n- 새 유효 규칙: Studio에서만 F2 창으로 허용 무게를 1Kg씩 조정하고, 영구 저장에는 플레이어의\n  원래 제한값을 사용합니다.\n- 근거: 무게 초과 UI와 배치 경계를 반복 검증하되 진단 값이 사용자 데이터에 남으면 안 됩니다.\n- 의도한 사용자 경험: 개발자는 Play를 다시 시작하지 않고 경계값을 시험하며 플레이어는\n  테스트 기능이나 변조된 저장값을 보지 않습니다.\n- 범위와 제외: Roblox Studio 진단 세션에만 적용하며 모바일 제품 UI 완료 범위가 아닙니다.\n- 영향 소스: DeveloperTestControls.luau, DeveloperTestWindow.luau, Screen.luau,\n  InventoryService.luau\n- 관련 위키: inventory-item-concept@v015\n- 검증과 증거: Studio-only 생성·서버 거부·원래 제한 직렬화 소스 검사와 Luau 경계 테스트.\n",
          "source_path": "wiki/content/pages/product-planning-change-log/v004.md",
          "timeline_order": 36
        },
        {
          "id": "product-planning-change-log",
          "title": "제품 기획 변경 원장",
          "summary": "기존 제품 규칙을 누적 보존하면서 ItemDB의 비파괴 ON/OFF 배포 결정과 아이템당 A·B·C 세 접촉 효과 영역 규칙을 현재 유효 기획에 추가했습니다.",
          "status": "active",
          "category": "planning",
          "tags": [
            "planning",
            "decision-log",
            "product",
            "inventory",
            "mobile",
            "ui",
            "synergy",
            "itemdb",
            "effect-zone",
            "documentation"
          ],
          "created_at": "2026-08-15",
          "updated_at": "2026-08-16",
          "authors": [
            "Codex"
          ],
          "version": 3,
          "change_type": "updated",
          "change_summary": "현재 유효한 인벤토리·콘텐츠·아트·문서 규칙을 유지하고, 아이템 기록을 삭제하지 않는 베이크 포함 상태와 최대 세 개의 공간 접촉 효과 슬롯을 누적 원장에 추가했습니다.",
          "supersedes": "product-planning-change-log@v002",
          "sources": [
            "wiki/content/pages/product-planning-change-log/v002.md",
            "wiki/content/pages/inventory-item-concept/v014.md",
            "wiki/content/media/inventory-item-concept/v014/itemdb-mobile-onoff.jpg",
            "wiki/content/media/inventory-item-concept/v014/itemdb-mobile-effect-zones.jpg",
            "docs/gameplay/inventory-item-layouts.json",
            "docs/gameplay/item-effect-catalog.json",
            "docs/gameplay/item-effect-slots.md",
            "src/ReplicatedStorage/BackpackUI/GeneratedItemLayouts.luau",
            "src/ReplicatedStorage/BackpackUI/ItemEffectContactEvaluator.luau",
            "tools/item_db.py",
            "wiki/site/app.js"
          ],
          "related": [
            "inventory-item-concept",
            "synergy-icon-system",
            "development-wiki",
            "backpack-combat-stat-database",
            "project-overview"
          ],
          "validation": [
            "inventory-item-concept@v014의 최종 모바일 브라우저 증거와 같은 커밋 범위로 확인",
            "python3 tools/item_db.py check: ItemDB check passed 90 items",
            "python3 -m unittest discover -s tests -p 'test_*.py': 62 tests passed",
            "node --test tests/item-db.spec.js: passed",
            "Roblox Studio MCP Edit: GeneratedItemLayouts revision 0690a8caa23e928d, 90 layouts, EffectCatalog 확인",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "python3 -m unittest tests/test_wiki.py",
            "python3 -m unittest tests.test_repository_policy",
            "git diff --check"
          ],
          "body": "# 제품 기획 변경 원장\n\n## 목적과 기록 원칙\n\n이 페이지는 구현 파일 목록이 아니라 ProjectBackpack의 제품 방향이 왜 바뀌었고 지금 어떤\n규칙이 유효한지를 누적 보존합니다. 플레이어 또는 운영자가 경험하는 제품·게임플레이·UX·\n콘텐츠·아트·플랫폼 규칙이 추가, 변경, 대체 또는 폐기될 때 기록합니다. 동작을 바꾸지 않는\n내부 리팩터링은 원장 대상이 아닙니다.\n\n각 결정은 안정적인 ID를 가집니다. 이후 규칙이 달라지면 이미 커밋된 항목을 고치거나 지우지\n않고 새 버전에 후속 항목을 추가해 이전 ID와 관계를 명시합니다. 최신 버전은 과거 원장과\n현재 유효 규칙을 모두 포함하며, 실제 제품 변경·주제별 위키·검증 증거와 같은 커밋에서\n발행합니다.\n\n## 현재 유효 규칙\n\n### PBP-INV-001 — 인벤토리에는 명확한 이탈과 호환 토글이 있다\n\n모바일 인벤토리는 우측 최상단 닫기 버튼으로 메인 화면에 복귀합니다. PC 호환 경로에서는\nTab이 인벤토리 열기·닫기를 전담하고 Roblox 기본 플레이어 목록은 같은 입력을 사용하지\n않습니다. PC 레이아웃 품질은 별도 단계이며 이번 규칙의 완료 범위가 아닙니다.\n\n### PBP-INV-002 — 보드는 전체 배치 가능 범위와 도구 계층을 드러낸다\n\n보이는 모든 배치 가능 칸은 옅은 회색 육각 격자로 표시합니다. 가방·아이템 배치 탭은 우측\n상단 세로형, 확대·원점·축소는 우측 하단 소형 도구로 두며 반응형 인셋으로 겹침을 막습니다.\n\n### PBP-INV-003 — 드래그 피드백은 아이템과 목적지만 보여 준다\n\n보관함과 보드 어디에서 잡아도 아이템 그림 전체가 손가락 또는 포인터 위에 놓입니다. 어두운\n점유 헥스와 영향 가방의 중복 강조는 쓰지 않고 스냅 목적지 외곽선 하나만 사용합니다.\n\n### PBP-INV-004 — 카드와 선택 정보는 동일한 판단 순서를 사용한다\n\n카드는 종류, x.xKg 무게, 그림과 점유 형태, 가운데 정렬된 0~3개 시너지, 이름 순으로\n읽힙니다. 모든 무게의 표시·합계·허용 판정은 0.1Kg 정밀도를 사용합니다.\n\n### PBP-INV-005 — 일반 필터는 배치 모드 이동 수단이기도 하다\n\n일반 필터 순서는 전체·무기·방어구·특수·가방입니다. 가방 필터는 가방 배치로, 다른 일반\n필터는 아이템 배치와 해당 종류로 한 번에 이동합니다.\n\n### PBP-INV-006 — 교차 조건은 별도의 고급 필터 계층에 둔다\n\n시너지와 칸 수 필터는 일반 필터 위의 별도 계층에 둡니다. 터치 영역은 48px 이상이며,\n시너지는 26종 하나 이상 일치, 칸 수는 1~9 최소·최대 범위 규칙을 사용합니다.\n\n### PBP-ITEMDB-001 — 아이템 기록과 게임 배포 상태를 분리한다\n\n모든 ItemDB 아이템은 ON/OFF 상태를 가집니다. OFF는 기획 기록과 웹 DB에는 남지만 다음\n게임 베이크와 런타임 생성 목록에서는 제외됩니다. 다시 ON으로 전환하면 기존 아이템 설정을\n그대로 사용합니다.\n\n### PBP-EFFECT-001 — 아이템은 최대 세 개의 공간 접촉 효과를 가진다\n\n한 아이템은 A·B·C 세 효과 슬롯을 가질 수 있습니다. 각 슬롯은 아이템 점유 경계보다 Q/R\n양방향 다섯 칸 넓은 영역에서 직접 선택한 접촉 칸과 종류·조건·발현 능력 ID를 저장합니다.\n공간 접촉 판정과 실제 전투 능력 실행은 분리합니다.\n\n### PBP-ART-001 — 시너지 아이콘은 작은 표시 크기에서 먼저 설계한다\n\n시너지 아이콘은 약 25px 표시에서 핵심 형태가 구분되어야 합니다. 대표 심볼 하나, 투명\n배경, 최대 3색, 216px 내용 경계를 사용하고 메달형 배경과 과도한 세부는 피합니다.\n\n### PBP-CONTENT-001 — 폐기 아이템은 모든 제품 표면에서 함께 제거한다\n\nFootprintExpansion21 중 승인된 11개만 활성화하고 10개는 아이콘·카탈로그·런타임·공개\n미디어에서 함께 제거합니다. 폐기 이력은 매니페스트에 남기며 현재 ItemDB는 90개입니다.\n\n### PBP-DOC-001 — 기획 변경은 커밋 시 누적 원장으로 발행한다\n\n물질적인 제품 기획 변경이 있는 사용자 승인 커밋마다 이 페이지에 최대 한 버전을 추가하고,\n최신 버전은 현재 유효 규칙과 모든 과거 항목을 같은 커밋에 누적 보존합니다.\n\n## 변경 원장\n\n### PBP-INV-001 — 인벤토리 이탈과 Tab 토글\n\n- 날짜: 2026-08-15\n- 도메인: 인벤토리 접근성 / 플랫폼 입력\n- 변경 유형: changed\n- 이전 규칙: 화면 내부 닫기 버튼과 명확한 PC 토글 경로가 없었습니다.\n- 새 유효 규칙: 모바일 우측 최상단 닫기 버튼을 두고 PC 호환 시 Tab을 인벤토리 전용\n  토글로 사용하며 기본 플레이어 목록을 해제합니다.\n- 근거: 작업 화면에는 안전한 이탈 경로가 필요하며 한 입력이 두 UI를 열면 안 됩니다.\n- 의도한 사용자 경험: 닫는 법을 탐색하지 않고 즉시 메인 화면으로 돌아갑니다.\n- 범위와 제외: 모바일 터치와 PC 입력 호환에 적용하며 PC 레이아웃 품질은 제외합니다.\n- 영향 소스: Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: Luau 테스트, 소스 검사와 최종 Studio 모바일 화면.\n\n### PBP-INV-002 — 배치 보드 범위와 도구 배치\n\n- 날짜: 2026-08-15\n- 도메인: 모바일 배치 보드 / 공간 가독성\n- 변경 유형: changed\n- 이전 규칙: 빈 배치 영역과 우측 도구의 공간 관계가 충분히 드러나지 않았습니다.\n- 새 유효 규칙: 전체 배치 영역에 옅은 육각 격자를 그리고 우측 상단 모드 탭과 우측 하단\n  확대 도구를 위한 반응형 인셋을 둡니다.\n- 근거: 빈 공간도 게임 공간이며 조작 계층과 동시에 보여야 합니다.\n- 의도한 사용자 경험: 배치 가능 범위와 도구 위치를 즉시 이해합니다.\n- 범위와 제외: 모바일 보드와 모드·확대 도구에 적용합니다.\n- 영향 소스: VisualTokens.luau, ScreenRenderer.luau, ScreenState.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: iPhone 17 Pro와 Galaxy A06 Studio Play의 잘림·겹침 검사.\n\n### PBP-INV-003 — 손가락 위 드래그와 단일 목적지 안내\n\n- 날짜: 2026-08-15\n- 도메인: 인벤토리 드래그 / 배치 피드백\n- 변경 유형: changed\n- 이전 규칙: 아이템이 포인터 아래에 남고 여러 강조가 목표 칸과 경쟁했습니다.\n- 새 유효 규칙: 회전된 그림 전체를 포인터 위로 올리고 그림과 목적지 외곽선만 표시합니다.\n- 근거: 드래그 중에는 대상과 내려놓을 위치가 가장 강하게 읽혀야 합니다.\n- 의도한 사용자 경험: 손가락에 가리지 않은 그림으로 정확히 조준합니다.\n- 범위와 제외: 아이템 드래그에 적용하며 그림이 없는 가방은 점유 형태를 사용합니다.\n- 영향 소스: DragPlacementState.luau, Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 포인터 리프트·잡은 칸·outline-only Luau 테스트.\n\n### PBP-INV-004 — 카드·선택 정보와 0.1Kg 정밀도\n\n- 날짜: 2026-08-15\n- 도메인: 아이템 정보 구조 / 무게 규칙\n- 변경 유형: changed\n- 이전 규칙: 무게 표현과 시너지 정렬이 좁은 카드에서 일관되지 않았습니다.\n- 새 유효 규칙: x.xKg 표시와 0.1Kg 판정을 통일하고 시너지를 카드 가운데 정렬합니다.\n- 근거: 화면 표시와 게임 판정은 같은 값을 사용해야 합니다.\n- 의도한 사용자 경험: 좁은 카드에서 핵심 정보와 초과 이유를 빠르게 이해합니다.\n- 범위와 제외: 저장 카드, 선택 정보, 합계와 허용 판정에 적용합니다.\n- 영향 소스: WeightEvaluator.luau, ItemInstanceHydrator.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013, backpack-combat-stat-database\n- 검증과 증거: 무게 양자화·형식·허용 판정 테스트와 카드 소스 검사.\n\n### PBP-INV-005 — 필터와 배치 모드의 직접 연결\n\n- 날짜: 2026-08-15\n- 도메인: 보관함 탐색 / 모드 전환\n- 변경 유형: changed\n- 이전 규칙: 종류 필터와 배치 탭을 따로 바꿔야 했습니다.\n- 새 유효 규칙: 가방 필터는 가방 배치로, 다른 필터는 아이템 배치와 해당 종류로 이동합니다.\n- 근거: 보관함 종류 선택은 다음 배치 대상의 선택입니다.\n- 의도한 사용자 경험: 한 번의 터치로 원하는 목록과 배치 모드에 도달합니다.\n- 범위와 제외: 일반 종류 필터 다섯 개와 배치 모드 연동에 적용합니다.\n- 영향 소스: ScreenState.luau, Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 모드별 필터 상태 Luau 테스트.\n\n### PBP-INV-006 — 시너지·칸 수 고급 필터\n\n- 날짜: 2026-08-15\n- 도메인: 보관함 고급 탐색 / 모바일 UI\n- 변경 유형: added\n- 이전 규칙: 종류 외의 시너지와 점유 칸 범위를 직접 좁힐 수 없었습니다.\n- 새 유효 규칙: 별도 고급 필터에서 26종 시너지 토글과 1~9 칸 범위를 설정합니다.\n- 근거: 조합과 공간 효율은 종류와 독립적인 탐색 기준입니다.\n- 의도한 사용자 경험: 조합과 크기에 맞는 아이템을 빠르게 좁힙니다.\n- 범위와 제외: 가방과 아이템 칸 범위, 아이템의 하나 이상 시너지 일치에 적용합니다.\n- 영향 소스: ScreenState.luau, Screen.luau, ScreenRenderer.luau, VisualTokens.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 사용자 기획 이미지, Studio 캡처와 두 모바일 화면 테스트.\n\n### PBP-ART-001 — 시너지 아이콘 소형 가독성 규칙\n\n- 날짜: 2026-08-15\n- 도메인: 모바일 UI 아트 방향 / 인벤토리 시너지\n- 변경 유형: changed\n- 이전 규칙: 큰 합본을 축소해 실제 카드 크기에서 세부가 합쳐졌습니다.\n- 새 유효 규칙: 약 25px를 승인 기준으로 대표 심볼·투명 배경·최대 3색·216px 경계를\n  사용합니다.\n- 근거: 작은 화면에서 시너지를 구분하는 속도가 우선입니다.\n- 의도한 사용자 경험: 짧게 훑어도 형태와 대표색으로 시너지를 구분합니다.\n- 범위와 제외: 활성 26종 이미지와 재생성 계약에 적용하며 의미와 효과는 바꾸지 않습니다.\n- 영향 소스: Assets/UI/Backpack/SynergyIcons, SynergyCatalog.luau\n- 관련 위키: synergy-icon-system@v001, inventory-item-concept\n- 검증과 증거: 두 Studio 모바일 화면, 26개 자산과 전용 이미지 테스트.\n\n### PBP-CONTENT-001 — FootprintExpansion21 활성 집합 정리\n\n- 날짜: 2026-08-15\n- 도메인: 아이템 콘텐츠 / 공개 데이터\n- 변경 유형: retired\n- 이전 규칙: 확장 시안 21개가 모두 활성 후보로 남았습니다.\n- 새 유효 규칙: 11개만 활성화하고 10개는 제품 데이터와 미디어에서 제거합니다.\n- 근거: 폐기 시안이 남으면 현재 지원 범위를 잘못 전달합니다.\n- 의도한 사용자 경험: 실제 지원하는 아이템만 게임과 공개 DB에서 확인합니다.\n- 범위와 제외: 해당 10개 아이콘·레이아웃·참조를 제거하고 매니페스트 이력은 보존합니다.\n- 영향 소스: FootprintExpansion21, ItemDB 카탈로그·레이아웃·생성 산출물\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: ItemDB 90개 build/check와 생성 산출물 검사.\n\n### PBP-DOC-001 — 누적 제품 기획 변경 원장\n\n- 날짜: 2026-08-15\n- 도메인: 개발 문서 운영\n- 변경 유형: added\n- 이전 규칙: 기획 규칙의 변경을 한곳에서 계속 추적하는 누적 원장이 없었습니다.\n- 새 유효 규칙: 사용자 승인 커밋마다 물질적 변경을 안정적인 ID와 함께 누적합니다.\n- 근거: 구현이 개선돼도 최종 규칙과 변경 이유가 사라지지 않아야 합니다.\n- 의도한 사용자 경험: 위키 한 페이지에서 현재 규칙과 과거 이유를 연속 확인합니다.\n- 범위와 제외: 제품·게임플레이·UX·콘텐츠·아트·플랫폼·운영에 적용하며 순수 리팩터링은\n  제외합니다.\n- 영향 소스: AGENTS.md, wiki/content/pages/product-planning-change-log\n- 관련 위키: inventory-item-concept, development-wiki\n- 검증과 증거: 위키 빌드·체크·정책 테스트와 동일 커밋 발행.\n\n### PBP-ITEMDB-001 — ItemDB ON/OFF 베이크 경계\n\n- 날짜: 2026-08-16\n- 도메인: 아이템 운영 / 게임 배포\n- 변경 유형: added\n- 이전 규칙: ItemDB에 존재하는 모든 아이템이 항상 생성 런타임과 게임 베이크에 포함됐습니다.\n- 새 유효 규칙: 각 아이템은 ON/OFF 상태를 가지며 OFF는 웹 기획 기록에는 남고 다음 베이크와\n  생성 런타임에서는 제외됩니다. ON 복귀 시 기존 형태·이미지·시너지·효과 설정을 유지합니다.\n- 근거: 일시 제외와 영구 폐기를 구분해야 콘텐츠 실험과 롤백이 데이터 삭제 없이 가능합니다.\n- 의도한 사용자 경험: 운영자는 한 번의 버튼으로 게임 노출을 제어하고 플레이어는 승인된\n  활성 아이템만 만납니다.\n- 범위와 제외: ItemDB 웹 편집, 생성 레이아웃, 게임 카탈로그와 Studio 베이크에 적용합니다.\n  OFF 항목의 원본·웹 검색·이미지는 삭제하지 않습니다.\n- 영향 소스: inventory-item-layouts.json, tools/item_db.py, GeneratedItemLayouts.luau,\n  ItemCatalog.luau, wiki/site/app.js\n- 관련 위키: inventory-item-concept@v014\n- 검증과 증거: 390×844 ON 행 캡처, OFF 생성 제외 테스트, ItemDB 90개 정합성 검사.\n\n### PBP-EFFECT-001 — A·B·C 공간 접촉 효과 영역\n\n- 날짜: 2026-08-16\n- 도메인: 아이템 조합 / 공간 효과 / ItemDB 저작\n- 변경 유형: added\n- 이전 규칙: 아이템은 자기 능력치와 점유 형태만 가졌고 주변 아이템 접촉을 표현하는\n  저작 계약이 없었습니다.\n- 새 유효 규칙: 아이템당 A·B·C 최대 세 효과 슬롯을 두고 점유 경계 바깥 Q/R 다섯 칸까지\n  직접 효과 칸을 선택합니다. 각 슬롯은 종류·조건·능력 ID를 가지며 공간 접촉 판정과 실제\n  능력 실행은 분리합니다.\n- 근거: 가방 배치의 공간 관계를 조합 빌드로 확장하되 전투 규칙이 배치 기하에 결합되지\n  않아야 합니다.\n- 의도한 사용자 경험: 플레이어는 아이템을 어디에 놓고 무엇과 맞닿게 하는지로 추가 효과를\n  설계하고, 운영자는 같은 육각 편집 방식으로 규칙을 시각적으로 저작합니다.\n- 범위와 제외: 효과 칸 데이터, 카탈로그 ID, 회전 접촉 후보 평가까지 포함합니다. 조건 논리,\n  능력치 합산, 전투 발현과 시각 효과는 후속 범위입니다.\n- 영향 소스: item-effect-catalog.json, item-effect-slots.md, inventory-item-layouts.json,\n  GeneratedItemLayouts.luau, ItemEffectContactEvaluator.luau, ItemInstanceHydrator.luau,\n  wiki/site/app.js, wiki/site/item-db.js\n- 관련 위키: inventory-item-concept@v014, backpack-combat-stat-database\n- 검증과 증거: 390×844 A/B/C 편집 캡처, 효과 좌표·카탈로그·회전 접촉·드래그 비활성 테스트,\n  Studio의 동일 리비전 90개 레이아웃과 EffectCatalog 확인.\n",
          "source_path": "wiki/content/pages/product-planning-change-log/v003.md",
          "timeline_order": 35
        },
        {
          "id": "product-planning-change-log",
          "title": "제품 기획 변경 원장",
          "summary": "제품·게임플레이·UX·콘텐츠·아트·운영 규칙의 현재 유효 상태와 변경 이유를 안정적인 ID로 누적 보존하는 커밋 단위 원장입니다.",
          "status": "active",
          "category": "planning",
          "tags": [
            "planning",
            "decision-log",
            "product",
            "inventory",
            "mobile",
            "ui",
            "synergy",
            "itemdb",
            "documentation"
          ],
          "created_at": "2026-08-15",
          "updated_at": "2026-08-15",
          "authors": [
            "Codex"
          ],
          "version": 2,
          "change_type": "updated",
          "change_summary": "기존 시너지 아이콘 소형 가독성 결정을 보존하면서, 인벤토리의 진입·이탈, 보드와 드래그, 카드 정보, 모드 연동 탐색, 고급 필터, ItemDB 폐기와 향후 기록 방식에 관한 최종 유효 규칙 8개를 누적했습니다.",
          "supersedes": "product-planning-change-log@v001",
          "sources": [
            "wiki/content/pages/product-planning-change-log/v001.md",
            "AGENTS.md",
            "wiki/content/pages/inventory-item-concept/v013.md",
            "wiki/content/media/inventory-item-concept/v013/filter-concept-request.png",
            "wiki/content/media/inventory-item-concept/v013/studio-synergy-filter.jpg",
            "wiki/content/media/inventory-item-concept/v013/studio-cell-filter.jpg",
            "src/ReplicatedStorage/BackpackUI/Screen.luau",
            "src/ReplicatedStorage/BackpackUI/ScreenRenderer.luau",
            "src/ReplicatedStorage/BackpackUI/ScreenState.luau",
            "src/ReplicatedStorage/BackpackUI/DragPlacementState.luau",
            "src/ReplicatedStorage/BackpackUI/WeightEvaluator.luau",
            "Assets/UI/Backpack/SynergyIcons/manifest.json",
            "Assets/Items/Concepts/FootprintExpansion21/manifest.json",
            "docs/gameplay/inventory-item-art-catalog.md",
            "docs/gameplay/inventory-item-layouts.json"
          ],
          "related": [
            "synergy-icon-system",
            "inventory-item-concept",
            "development-wiki",
            "backpack-combat-stat-database",
            "project-overview"
          ],
          "validation": [
            "inventory-item-concept@v013의 최종 모바일 Studio 증거와 같은 커밋 범위로 확인",
            "python3 tools/item_db.py check: ItemDB check passed 90 items",
            "python3 -m unittest tests.test_item_db tests.test_synergy_icons: 19 tests passed",
            "LUAU_BIN=\"$(command -v luau)\" PATH=\"/usr/bin:/bin\" ./tools/test_backpack_ui.sh: Backpack hex inventory tests passed",
            "native backpack UI source checks: 6 tests passed",
            "Roblox Studio MCP Edit: GeneratedItemLayouts revision caa2aec7012671fa, 90 layout entries",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "python3 -m unittest tests/test_wiki.py",
            "python3 -m unittest tests.test_repository_policy",
            "git diff --check"
          ],
          "body": "# 제품 기획 변경 원장\n\n## 목적과 기록 원칙\n\n이 페이지는 구현 파일 목록이 아니라 ProjectBackpack의 제품 방향이 왜 바뀌었고 지금 어떤\n규칙이 유효한지를 누적 보존합니다. 플레이어 또는 운영자가 경험하는 제품·게임플레이·UX·\n콘텐츠·아트·플랫폼 규칙이 추가, 변경, 대체 또는 폐기될 때 기록합니다. 동작을 바꾸지 않는\n내부 리팩터링은 원장 대상이 아닙니다.\n\n각 결정은 안정적인 ID를 가집니다. 이후 규칙이 달라지면 이미 커밋된 항목을 고치거나 지우지\n않고 새 버전에 후속 항목을 추가해 이전 ID와 관계를 명시합니다. 최신 버전은 과거 원장과\n현재 유효 규칙을 모두 포함하며, 실제 제품 변경·주제별 위키·검증 증거와 같은 커밋에서\n발행합니다.\n\n## 현재 유효 규칙\n\n### PBP-INV-001 — 인벤토리에는 명확한 이탈과 호환 토글이 있다\n\n모바일 인벤토리는 우측 최상단 닫기 버튼으로 메인 화면에 복귀합니다. PC 호환 경로에서는\nTab이 인벤토리 열기·닫기를 전담하고 Roblox 기본 플레이어 목록은 같은 입력을 사용하지\n않습니다. PC 레이아웃 품질은 별도 단계이며 이번 규칙의 완료 범위가 아닙니다.\n\n### PBP-INV-002 — 보드는 전체 배치 가능 범위와 도구 계층을 드러낸다\n\n보드에 보이는 모든 배치 가능 칸은 옅은 회색 육각 격자로 표시합니다. 가방·아이템 배치 탭은\n우측 상단 세로형, 확대·원점·축소는 우측 하단 소형 도구로 두며, 보드와 전용 인셋을 공유해\n겹치거나 화면 밖으로 나가지 않습니다.\n\n### PBP-INV-003 — 드래그 피드백은 아이템과 목적지만 보여 준다\n\n보관함과 보드 어디에서 잡아도 아이템 그림 전체가 손가락 또는 포인터 위에 놓입니다. 어두운\n점유 헥스 바닥과 영향 가방의 중복 굵은 강조는 사용하지 않고, 스냅된 목적지 외곽선 하나만\n배치 안내로 사용합니다.\n\n### PBP-INV-004 — 카드와 선택 정보는 동일한 판단 순서를 사용한다\n\n카드는 종류, x.xKg 무게, 그림과 점유 형태, 가운데 3/5 안의 0~3개 시너지, 이름 순으로\n읽힙니다. 선택 정보는 이름·종류·시너지·무게를 표시합니다. 모든 가방과 아이템 무게는 표시,\n합계와 허용 판정 모두 0.1Kg 정밀도를 사용합니다.\n\n### PBP-INV-005 — 일반 필터는 배치 모드 이동 수단이기도 하다\n\n일반 필터 순서는 전체·무기·방어구·특수·가방입니다. 다섯 번째 가방 필터는 가방이 있으면\n아이템 모드에서도 활성화되고 가방 배치로 이동합니다. 가방 모드에서 다른 필터를 누르면\n아이템 배치와 해당 종류 필터를 함께 활성화합니다.\n\n### PBP-INV-006 — 교차 조건은 별도의 고급 필터 계층에 둔다\n\n시너지와 칸 수 필터는 일반 필터 위에 좌우로 배치하고 납작한 시각판·간격·가로선으로\n구분합니다. 실제 터치 영역은 48px 이상입니다. 시너지는 26종 개별 토글과 하나 이상 일치\n규칙을 사용하며, 시너지 ALL은 전체 켜짐에서 전체 끄기, 그 외에는 전체 켜기입니다. 칸 수는\n1~9 최소·최대 범위이고 ALL은 1~9 복원용이며 기본 전체 범위에서는 비활성화됩니다.\n\n### PBP-ART-001 — 시너지 아이콘은 작은 표시 크기에서 먼저 설계한다\n\n시너지 아이콘은 실제 모바일 UI의 약 25px 표시에서 핵심 형태가 즉시 구분되어야 합니다.\n각 아이콘은 대표 심볼 하나, 투명 배경, 기존 시너지 대표색과 공통 대비색을 합친 최대 3색으로\n구성합니다. 메달형 배경, 축소 시 합쳐지는 세부 장식과 색상 그라데이션은 사용하지 않습니다.\n\n### PBP-CONTENT-001 — 폐기 아이템은 모든 제품 표면에서 함께 제거한다\n\nFootprintExpansion21 이력 중 11개만 활성화하고 10개는 폐기합니다. 폐기 항목은 로컬 아이콘,\n카탈로그, 생성 레이아웃, 런타임 참조와 공개 ItemDB 미디어에서 함께 제거하되 매니페스트에는\n이력과 폐기 이유를 남깁니다. 현재 활성 ItemDB는 90개입니다.\n\n### PBP-DOC-001 — 기획 변경은 커밋 시 누적 원장으로 발행한다\n\n기획 규칙이 추가·변경·대체·폐기되는 사용자 승인 커밋마다 이 페이지에 최대 한 버전을\n추가합니다. 최신 버전은 현재 유효 규칙과 모든 과거 항목을 함께 보존하고, 주제별 위키와\n시각 증거·검증을 같은 커밋에 포함합니다.\n\n## 변경 원장\n\n### PBP-INV-001 — 인벤토리 이탈과 Tab 토글\n\n- 날짜: 2026-08-15\n- 도메인: 인벤토리 접근성 / 플랫폼 입력\n- 변경 유형: changed\n- 이전 규칙: 화면 내부 닫기 버튼이 없고 PC Tab도 인벤토리를 토글하지 않아 진입 후 메인\n  화면 복귀 경로가 명확하지 않았습니다.\n- 새 유효 규칙: 모바일 우측 최상단 닫기 버튼을 필수 경로로 두고, PC 호환 시 Tab을\n  인벤토리 전용 토글로 사용하며 기본 플레이어 목록을 해제합니다.\n- 근거: 작업 화면은 결과를 확정하기 전에도 언제든 안전하게 벗어날 수 있어야 하며 하나의\n  키가 두 UI를 동시에 열면 안 됩니다.\n- 의도한 플레이어 경험: 화면을 닫는 법을 탐색하지 않고 즉시 전투·메인 화면으로 돌아갑니다.\n- 범위와 제외: 모바일 터치 닫기와 PC 입력 호환에 적용합니다. PC 레이아웃 품질 검증은\n  포함하지 않습니다.\n- 영향 소스: Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: Luau 인벤토리 테스트와 네이티브 UI 소스 검사, 최종 Studio 모바일 화면의\n  우측 상단 닫기 버튼.\n\n### PBP-INV-002 — 배치 보드 범위와 도구 배치\n\n- 날짜: 2026-08-15\n- 도메인: 모바일 배치 보드 / 공간 가독성\n- 변경 유형: changed\n- 이전 규칙: 빈 배치 영역의 경계가 충분히 보이지 않았고, 모드와 확대 도구가 보드 우측\n  공간을 넓힐 때 겹치거나 화면 밖으로 밀릴 가능성이 있었습니다.\n- 새 유효 규칙: 보이는 배치 가능 영역 전체에 옅은 회색 육각 격자를 깔고, 우측 상단 세로\n  모드 탭과 우측 하단 소형 확대 도구를 위한 반응형 인셋을 보드에 예약합니다.\n- 근거: 빈 공간도 배치 가능한 게임 공간이라는 사실과 조작 계층이 동시에 보여야 합니다.\n- 의도한 플레이어 경험: 어디까지 놓을 수 있는지 즉시 알고, 넓어진 보드를 도구와 겹치지\n  않게 사용합니다.\n- 범위와 제외: 모바일 보드의 표시 범위, 모드 탭, 확대·원점·축소에 적용합니다.\n- 영향 소스: VisualTokens.luau, ScreenRenderer.luau, ScreenState.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: iPhone 17 Pro와 Galaxy A06 Studio Play에서 보드·탭·확대 도구의\n  잘림과 겹침이 없음을 확인.\n\n### PBP-INV-003 — 손가락 위 드래그와 단일 목적지 안내\n\n- 날짜: 2026-08-15\n- 도메인: 인벤토리 드래그 / 배치 피드백\n- 변경 유형: changed\n- 이전 규칙: 보관함 또는 보드에서 잡은 아이템이 포인터 아래에 남아 그림과 목표 칸을\n  가렸고, 어두운 점유 헥스와 굵어진 가방 외곽선이 중복 표시됐습니다.\n- 새 유효 규칙: 회전된 아이템 전체 경계가 포인터 위로 올라오도록 같은 리프트 계산을\n  사용하고, 아이템 그림과 스냅 목적지 외곽선만 표시합니다.\n- 근거: 드래그 중에는 들고 있는 대상과 내려놓을 위치만 가장 강하게 읽혀야 합니다.\n- 의도한 플레이어 경험: 손가락에 가리지 않은 그림으로 조준하고 군더더기 없는 한 개의\n  외곽선으로 결과를 판단합니다.\n- 범위와 제외: 아이템 드래그에 적용합니다. 가방은 별도 그림이 없으므로 점유 형태 자체가\n  드래그 대상입니다.\n- 영향 소스: DragPlacementState.luau, Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 드래그 포인터 리프트·잡은 칸·outline-only 계약의 Luau 테스트.\n\n### PBP-INV-004 — 카드·선택 정보와 0.1Kg 정밀도\n\n- 날짜: 2026-08-15\n- 도메인: 아이템 정보 구조 / 무게 규칙\n- 변경 유형: changed\n- 이전 규칙: 카드의 아령 아이콘과 큰 무게 표기가 공간을 차지했고, 긴 부동소수 값이\n  경고 문구에 노출됐으며 시너지 개수에 따라 카드 정렬이 달라졌습니다.\n- 새 유효 규칙: 무게는 아이콘 없이 x.xKg로 표시하고 모든 가방·아이템·합계·제한 판정을\n  0.1Kg로 통일합니다. 시너지 0~3개는 카드 가운데 3/5 안에서 묶음 정렬하며 선택 정보에\n  이름·종류·시너지·무게를 표시합니다.\n- 근거: 같은 정보가 카드와 선택란에서 같은 형식으로 읽히고 표시값과 판정값이 달라지지\n  않아야 합니다.\n- 의도한 플레이어 경험: 좁은 카드에서도 핵심 정보를 한눈에 읽고 무게 초과 이유를 정확히\n  이해합니다.\n- 범위와 제외: 가방과 아이템의 저장 카드, 선택 정보, 합계와 허용 판정에 적용합니다.\n- 영향 소스: WeightEvaluator.luau, BagFactory.luau, ItemInstanceHydrator.luau,\n  ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013, backpack-combat-stat-database\n- 검증과 증거: 0.1Kg 양자화·형식·허용 판정 Luau 테스트와 카드 레이아웃 소스 검사.\n\n### PBP-INV-005 — 필터와 배치 모드의 직접 연결\n\n- 날짜: 2026-08-15\n- 도메인: 보관함 탐색 / 모드 전환\n- 변경 유형: changed\n- 이전 규칙: 가방 필터가 네 번째였고 아이템 모드에서는 비활성화되어, 필터와 배치 탭을\n  따로 바꿔야 했습니다.\n- 새 유효 규칙: 가방을 다섯 번째로 옮기고 내용이 있으면 어느 모드에서도 활성화합니다.\n  가방 필터는 가방 배치로, 다른 일반 필터는 아이템 배치와 해당 종류로 직접 이동합니다.\n- 근거: 보관함의 종류 선택은 곧 다음에 배치할 대상의 종류 선택입니다.\n- 의도한 플레이어 경험: 한 번의 터치로 원하는 대상 목록과 올바른 배치 모드에 도달합니다.\n- 범위와 제외: 일반 종류 필터 5개와 배치 모드 연동에 적용합니다.\n- 영향 소스: ScreenState.luau, Screen.luau, ScreenRenderer.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 모드별 필터 활성·선택·비활성 상태의 Luau 테스트.\n\n### PBP-INV-006 — 시너지·칸 수 고급 필터\n\n- 날짜: 2026-08-15\n- 도메인: 보관함 고급 탐색 / 모바일 UI\n- 변경 유형: added\n- 이전 규칙: 종류 외의 시너지 또는 점유 칸 범위를 보관함에서 직접 좁힐 수 없었습니다.\n- 새 유효 규칙: 시너지와 칸 수 버튼을 일반 필터 위의 별도 그룹으로 추가합니다. 시너지는\n  26종 개별 토글과 하나 이상 일치, ALL 전체 전환 규칙을 사용합니다. 칸 수는 1~9 최소·최대\n  범위와 기본 범위에서 비활성화되는 ALL 복원 버튼을 사용합니다.\n- 근거: 조합과 공간 효율은 종류와 독립적인 탐색 기준이며, 일반 필터와 같은 계층에 섞으면\n  기능 차이를 이해하기 어렵습니다.\n- 의도한 플레이어 경험: 작은 보관함에서도 조합에 맞는 아이템과 필요한 크기를 빠르게\n  좁히고 현재 조건을 팝업에서 확인합니다.\n- 범위와 제외: 보관 중인 가방과 아이템 모두 칸 범위를 적용하며 시너지 조건은 부여된 시너지\n  중 하나 이상이 켜진 경우를 통과시킵니다.\n- 영향 소스: ScreenState.luau, Screen.luau, ScreenRenderer.luau, VisualTokens.luau\n- 관련 위키: inventory-item-concept@v013\n- 검증과 증거: 사용자 기획 이미지, 최종 시너지·칸 수 Studio 캡처, 두 모바일 화면의\n  48px 터치 영역·구분선·간격·팝업 상태와 관련 Luau 테스트.\n\n### PBP-ART-001 — 시너지 아이콘 소형 가독성 규칙\n\n- 날짜: 2026-08-15\n- 도메인: 모바일 UI 아트 방향 / 인벤토리 시너지\n- 변경 유형: changed\n- 이전 규칙: V1은 큰 합본 원본에서 원형 메달과 내부 묘사를 함께 축소했으며, 실제 카드 표시\n  크기에 대한 명시적 색상 수·내용 경계 계약이 없었습니다.\n- 새 유효 규칙: 25px 전후 표시를 승인 기준으로 삼고, 아이콘마다 대표 심볼 하나·투명 배경·\n  최대 3색·216px 내용 경계를 적용합니다. 26개 개별 원본과 자동 정규화 결과를 자산 권위로\n  사용합니다.\n- 근거: 작은 카드와 필터에서 장식과 내부 세부가 합쳐져 서로 다른 시너지가 유사한 얼룩처럼\n  보였고, 조합 판단 속도를 떨어뜨렸습니다.\n- 의도한 플레이어 경험: 아이템을 훑는 짧은 순간에도 심볼의 방향과 대표 물체만으로 시너지를\n  구분하고, 기존 대표색을 통해 이미 학습한 계열 감각은 유지합니다.\n- 범위와 제외: 활성 시너지 26종의 이미지, 재생성 계약과 Roblox 자산 참조에 적용합니다.\n  시너지 이름·분류·색 의미·아이템 부여·전투 효과와 PC 레이아웃은 바꾸지 않습니다.\n- 영향 소스: Assets/UI/Backpack/SynergyIcons, tools/extract_synergy_icons.py,\n  Assets/UI/Backpack/uploaded_asset_ids.json, SynergyCatalog.luau\n- 관련 위키: synergy-icon-system@v001, inventory-item-concept\n- 검증과 증거: iPhone 17 Pro 세로 400×776 및 Galaxy A06 세로 359×718 Studio Play,\n  26개 고유 업로드 자산·262개 이미지 라벨·25×25 표시·빈 이미지 0개, 전용 자산 테스트 3개,\n  wiki/content/media/synergy-icon-system/v001/studio-synergy-icons-v2-iphone17pro.png\n\n### PBP-CONTENT-001 — FootprintExpansion21 활성 집합 정리\n\n- 날짜: 2026-08-15\n- 도메인: 아이템 콘텐츠 / 공개 데이터\n- 변경 유형: retired\n- 이전 규칙: FootprintExpansion21의 21개 시안과 이미지가 모두 활성 ItemDB 후보로\n  남아 있었습니다.\n- 새 유효 규칙: 승인된 11개만 활성으로 유지하고 10개는 폐기합니다. 폐기 이력은\n  매니페스트에 남기되 제품 데이터와 미디어에서는 제거해 활성 ItemDB를 90개로 맞춥니다.\n- 근거: 폐기된 시안이 게임과 공개 데이터에 남으면 현재 콘텐츠 범위를 잘못 전달합니다.\n- 의도한 플레이어 경험: 게임에서 실제 지원하는 아이템만 보관함과 공개 ItemDB에서\n  일관되게 확인합니다.\n- 범위와 제외: 해당 확장 세트의 10개 아이콘·레이아웃·업로드 참조·공개 미디어를\n  제거합니다. 나머지 11개 이력과 자산은 유지합니다.\n- 영향 소스: FootprintExpansion21 매니페스트·아이콘, ItemDB 카탈로그·레이아웃,\n  GeneratedItemLayouts, 공개 item-db-data와 item-media\n- 관련 위키: inventory-item-concept@v013, backpack-combat-stat-database\n- 검증과 증거: ItemDB build/check 90개, ItemDB 테스트, 생성 산출물 동일성 검사.\n\n### PBP-DOC-001 — 누적 제품 기획 변경 원장\n\n- 날짜: 2026-08-15\n- 도메인: 개발 문서 운영\n- 변경 유형: added\n- 이전 규칙: 주제별 위키 버전은 있었지만 기획 규칙의 추가·변경·폐기를 한곳에서 계속\n  추적하는 누적 원장이 없었습니다.\n- 새 유효 규칙: 사용자 승인 커밋에서 물질적인 기획 변경이 있으면 제품 기획 변경 원장에\n  최대 한 버전을 추가하고, 안정적인 ID·이전/새 규칙·근거·의도·범위·소스·증거를\n  누적합니다.\n- 근거: 구현이 여러 차례 개선돼도 최종 규칙과 변경 이유가 사라지지 않아야 이후 기획과\n  개발이 같은 방향을 공유할 수 있습니다.\n- 의도한 사용자 경험: 위키에서 현재 유효한 기획과 과거 결정의 이유를 한 페이지에서\n  연속적으로 확인합니다.\n- 범위와 제외: 제품·게임플레이·UX·콘텐츠·아트·플랫폼·운영 규칙에 적용합니다. 동작을\n  바꾸지 않는 내부 리팩터링은 제외합니다.\n- 영향 소스: AGENTS.md, wiki/content/pages/product-planning-change-log\n- 관련 위키: inventory-item-concept@v013, development-wiki\n- 검증과 증거: 위키 빌드·체크·정책 테스트와 동일 커밋 발행.\n",
          "source_path": "wiki/content/pages/product-planning-change-log/v002.md",
          "timeline_order": 34
        },
        {
          "id": "product-planning-change-log",
          "title": "제품 기획 변경 원장",
          "summary": "제품·게임플레이·UX·콘텐츠·아트 방향의 유효 규칙과 변경 이유를 커밋 단위로 누적 보존하는 원장입니다.",
          "status": "active",
          "category": "planning",
          "tags": [
            "planning",
            "decision-log",
            "product",
            "art-direction",
            "ui",
            "synergy",
            "mobile"
          ],
          "created_at": "2026-08-15",
          "updated_at": "2026-08-15",
          "authors": [
            "Codex"
          ],
          "version": 1,
          "change_type": "created",
          "change_summary": "시너지 아이콘을 실제 모바일 표시 크기에서 먼저 설계하고 단일 심볼·최대 3색으로 제한하는 아트 규칙을 첫 누적 기획 결정으로 기록했습니다.",
          "supersedes": null,
          "sources": [
            "AGENTS.md",
            "wiki/content/pages/synergy-icon-system/v001.md",
            "wiki/content/media/synergy-icon-system/v001/studio-synergy-icons-v2-iphone17pro.png",
            "Assets/UI/Backpack/SynergyIcons/manifest.json",
            "tests/test_synergy_icons.py"
          ],
          "related": [
            "synergy-icon-system",
            "inventory-item-concept",
            "project-overview"
          ],
          "validation": [
            "synergy-icon-system@v001의 최종 Studio 모바일 증거와 동일 커밋으로 확인",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "python3 -m unittest tests/test_wiki.py",
            "python3 -m unittest tests.test_repository_policy",
            "git diff --check"
          ],
          "body": "# 제품 기획 변경 원장\n\n## 목적\n\n이 페이지는 구현 파일의 변경 목록이 아니라 ProjectBackpack의 제품 방향이 왜 바뀌었고 지금\n어떤 규칙이 유효한지를 누적 보존합니다. 각 결정은 안정적인 ID를 가지며, 이후 규칙이 바뀌면\n기존 항목을 고치지 않고 새 항목이 이전 ID를 명시적으로 대체합니다.\n\n## 현재 유효 규칙\n\n### PBP-ART-001 — 시너지 아이콘은 작은 표시 크기에서 먼저 설계한다\n\n시너지 아이콘은 실제 모바일 UI의 약 25px 표시에서 핵심 형태가 즉시 구분되어야 합니다.\n각 아이콘은 대표 심볼 하나, 투명 배경, 기존 시너지 대표색과 공통 대비색을 합친 최대 3색으로\n구성합니다. 메달형 배경, 축소 시 합쳐지는 세부 장식과 색상 그라데이션은 사용하지 않습니다.\n\n## 변경 원장\n\n### PBP-ART-001 — 시너지 아이콘 소형 가독성 규칙\n\n- 날짜: 2026-08-15\n- 도메인: 모바일 UI 아트 방향 / 인벤토리 시너지\n- 변경 유형: `changed`\n- 이전 규칙: V1은 큰 합본 원본에서 원형 메달과 내부 묘사를 함께 축소했으며, 실제 카드 표시\n  크기에 대한 명시적 색상 수·내용 경계 계약이 없었습니다.\n- 새 유효 규칙: 25px 전후 표시를 승인 기준으로 삼고, 아이콘마다 대표 심볼 하나·투명 배경·\n  최대 3색·216px 내용 경계를 적용합니다. 26개 개별 원본과 자동 정규화 결과를 자산 권위로\n  사용합니다.\n- 근거: 작은 카드와 필터에서 장식과 내부 세부가 합쳐져 서로 다른 시너지가 유사한 얼룩처럼\n  보였고, 조합 판단 속도를 떨어뜨렸습니다.\n- 의도한 플레이어 경험: 아이템을 훑는 짧은 순간에도 심볼의 방향과 대표 물체만으로 시너지를\n  구분하고, 기존 대표색을 통해 이미 학습한 계열 감각은 유지합니다.\n- 범위와 제외: 활성 시너지 26종의 이미지, 재생성 계약과 Roblox 자산 참조에 적용합니다.\n  시너지 이름·분류·색 의미·아이템 부여·전투 효과와 PC 레이아웃은 바꾸지 않습니다.\n- 영향 소스: `Assets/UI/Backpack/SynergyIcons`, `tools/extract_synergy_icons.py`,\n  `Assets/UI/Backpack/uploaded_asset_ids.json`, `SynergyCatalog.luau`\n- 관련 위키: `synergy-icon-system@v001`, `inventory-item-concept`\n- 검증과 증거: iPhone 17 Pro 세로 400×776 및 Galaxy A06 세로 359×718 Studio Play,\n  26개 고유 업로드 자산·262개 이미지 라벨·25×25 표시·빈 이미지 0개, 전용 자산 테스트 3개,\n  `wiki/content/media/synergy-icon-system/v001/studio-synergy-icons-v2-iphone17pro.png`\n",
          "source_path": "wiki/content/pages/product-planning-change-log/v001.md",
          "timeline_order": 33
        }
      ]
    },
    {
      "id": "project-overview",
      "title": "PackBound 프로젝트 개요",
      "summary": "PackBound는 저장소 Luau를 소스 작성 기준으로 유지하고, 라이브 Roblox 상태는 Studio MCP로 조작·검증하는 단일 개발 계약을 사용합니다.",
      "status": "active",
      "category": "project",
      "tags": [
        "roblox",
        "gameplay",
        "architecture",
        "mobile",
        "controls",
        "tooling",
        "studio-mcp",
        "validation"
      ],
      "created_at": "2026-08-06",
      "updated_at": "2026-08-12",
      "authors": [
        "Codex"
      ],
      "version": 5,
      "change_type": "updated",
      "change_summary": "저장소 소스·정적 테스트와 라이브 Studio 조작의 책임을 분리하고, 별도 동기화 계층 없이 Studio MCP를 현재 프로젝트의 유일한 라이브 제어 경로로 확정했습니다.",
      "supersedes": "project-overview@v004",
      "sources": [
        "AGENTS.md",
        "README.md",
        "rokit.toml",
        "tests/test_repository_policy.py"
      ],
      "related": [
        "development-wiki",
        "studio-automation-routing",
        "character-2d-rendering"
      ],
      "validation": [
        "rokit install",
        "python3 -m unittest tests.test_repository_policy tests.test_wiki",
        "python3 tools/wiki.py build",
        "python3 tools/wiki.py check",
        "Roblox Studio MCP: 프로젝트 소유 주요 서비스에 폐기한 통합 이름의 인스턴스 0건",
        "Roblox Studio MCP: StarterGui ScreenOrientation=Portrait, StarterPlayer DevTouchMovementMode=Scriptable",
        "git diff --check"
      ],
      "source_path": "wiki/content/pages/project-overview/v005.md",
      "body": "# PackBound 프로젝트 개요\n\n## 프로젝트 목표\n\nPackBound는 2D 캐릭터 표현과 Roblox의 3D 이동·물리를 결합한 세로형 2.5D 아케이드\nRPG입니다. 프레임 기반 캐릭터, 모바일 중심 입력, 공간형 백팩 인벤토리와 데이터 중심\n아이템 규칙을 한 플레이 경험으로 연결합니다. 저장소의 문서와 테스트는 이 제품 방향을\n재현할 수 있는 기준이고, Roblox Studio는 실제 플레이스 상태와 런타임 결과의 기준입니다.\n\n개발 운영의 목표는 두 기준을 혼동하지 않으면서도 작업자가 한 경로만 기억하게 하는\n것입니다. 소스 수정과 정적 검증은 저장소에서 수행하고, 라이브 DataModel 변경과 플레이\n검증은 Studio MCP에서 수행합니다. 중간 동기화 계층을 두지 않아 오래된 연결 상태나 별도\n빌드 결과를 실제 플레이스 상태로 오인하지 않습니다.\n\n## 플레이어 경험과 현재 시스템\n\n캐릭터는 몸과 머리를 분리한 8방향 프레임 아틀라스로 표현되고, 보이지 않는 Roblox\n캐릭터가 이동·충돌·네트워크 기준을 유지합니다. 플레이 액션은 대시와 쳐내기에 집중하며,\n모바일 입력과 카메라가 세로 화면 전투의 가독성을 우선합니다.\n\n백팩 인벤토리는 아이템 데이터, 배치 규칙과 전투 능력치 계약을 분리합니다. ItemDB는\n아이콘과 점유 형태의 공개·런타임 파생 데이터를 동기화하고, 개발 위키는 제품 결정과\n검증 근거를 커밋 단위의 불변 버전으로 보존합니다.\n\n## 개발 원칙\n\n### 저장소는 소스와 정적 계약을 소유합니다\n\n`src`의 Luau 파일, gameplay·art 문서, ItemDB 원본과 자동화 테스트가 변경의 검토\n단위입니다. Luau 컴파일러와 각 도메인 테스트는 모듈 계약, 데이터 최신성과 회귀를 직접\n검증합니다. 정적 검증은 전체 플레이스 생성 여부에 의존하지 않습니다.\n\n### Studio MCP는 라이브 상태를 소유합니다\n\nStudio 선택, 인스턴스와 속성 검사·변경, Luau 실행, Play 모드, 콘솔, 스크린샷과 런타임\n검증은 Studio MCP를 첫 번째이자 권위 있는 경로로 사용합니다. 저장소 파일이 올바르다는\n사실만으로 라이브 적용을 주장하지 않고, 실제 Studio 상태가 필요한 완료 조건에는 MCP\n근거를 기록합니다.\n\n### 운영 경로는 하나만 유지합니다\n\n별도 파일시스템 동기화 설정, 서버와 오프라인 플레이스 빌드 게이트는 현재 프로젝트에\n추가하지 않습니다. 과거 프로젝트의 도구 선택은 PackBound의 기본값이 아니며, 새로운\n도구 계층은 기존 공식 경로가 제공하지 못하는 명확한 제품·운영 요구가 승인될 때만\n검토합니다.\n\n## 현재 개발 흐름\n\n1. 저장소에서 제품 의도와 현재 계약을 확인하고 Luau·문서·데이터를 수정합니다.\n2. 관련 Luau 컴파일, 도메인 테스트, ItemDB와 위키 최신성 검사를 실행합니다.\n3. 라이브 결과가 필요한 작업은 Studio MCP로 올바른 플레이스를 선택하고 적용·검증합니다.\n4. 사용자가 커밋을 요청하면 최종 diff와 시각 증거를 위키의 다음 불변 버전에 기록합니다.\n5. 코드, 문서, 테스트, 위키 원본과 생성 데이터를 같은 커밋으로 게시합니다.\n\n## 이번 결정과 결과\n\n현재 저장소의 툴 선언은 Luau 버전만 관리합니다. 에이전트 지침과 README는 Studio MCP와\n정적 테스트의 책임을 일관되게 설명하고, 저장소 정책 테스트는 폐기한 동기화 계층이 활성\n파일이나 파일명으로 다시 들어오는 것을 차단합니다. 개발 위키도 문서 탐색과 ItemDB 편집에\n집중하도록 단순화됐습니다.\n\n커밋된 과거 위키는 당시의 사실을 보존하지만 최신 프로젝트 계약으로 사용하지 않습니다.\n현재 판단은 이 버전과 `AGENTS.md`, 최신 gameplay 문서, 실제 Studio MCP 상태를 우선합니다.\n\n## 검증과 후속 운영\n\n정책·위키 테스트와 위키·ItemDB·CombatDB 최신성 검사를 통과했습니다. Studio MCP에서\n프로젝트 소유 주요 서비스에 폐기한 통합의 인스턴스가 없음을 확인했고, 매핑 파일이 과거에\n선언하던 세로 화면과 스크립트형 터치 이동 속성은 현재 Studio에 유지돼 있습니다.\n\n앞으로 개발 경로를 바꾸는 결정은 편의 기능 추가가 아니라 소유권·검증·복구 전략 변경으로\n취급합니다. 변경이 승인되면 지침, 테스트와 위키를 같은 커밋에서 갱신해 사람과 에이전트가\n서로 다른 운영 가정을 갖지 않도록 합니다.\n",
      "revisions": [
        {
          "id": "project-overview",
          "title": "PackBound 프로젝트 개요",
          "summary": "PackBound는 저장소 Luau를 소스 작성 기준으로 유지하고, 라이브 Roblox 상태는 Studio MCP로 조작·검증하는 단일 개발 계약을 사용합니다.",
          "status": "active",
          "category": "project",
          "tags": [
            "roblox",
            "gameplay",
            "architecture",
            "mobile",
            "controls",
            "tooling",
            "studio-mcp",
            "validation"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-12",
          "authors": [
            "Codex"
          ],
          "version": 5,
          "change_type": "updated",
          "change_summary": "저장소 소스·정적 테스트와 라이브 Studio 조작의 책임을 분리하고, 별도 동기화 계층 없이 Studio MCP를 현재 프로젝트의 유일한 라이브 제어 경로로 확정했습니다.",
          "supersedes": "project-overview@v004",
          "sources": [
            "AGENTS.md",
            "README.md",
            "rokit.toml",
            "tests/test_repository_policy.py"
          ],
          "related": [
            "development-wiki",
            "studio-automation-routing",
            "character-2d-rendering"
          ],
          "validation": [
            "rokit install",
            "python3 -m unittest tests.test_repository_policy tests.test_wiki",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "Roblox Studio MCP: 프로젝트 소유 주요 서비스에 폐기한 통합 이름의 인스턴스 0건",
            "Roblox Studio MCP: StarterGui ScreenOrientation=Portrait, StarterPlayer DevTouchMovementMode=Scriptable",
            "git diff --check"
          ],
          "body": "# PackBound 프로젝트 개요\n\n## 프로젝트 목표\n\nPackBound는 2D 캐릭터 표현과 Roblox의 3D 이동·물리를 결합한 세로형 2.5D 아케이드\nRPG입니다. 프레임 기반 캐릭터, 모바일 중심 입력, 공간형 백팩 인벤토리와 데이터 중심\n아이템 규칙을 한 플레이 경험으로 연결합니다. 저장소의 문서와 테스트는 이 제품 방향을\n재현할 수 있는 기준이고, Roblox Studio는 실제 플레이스 상태와 런타임 결과의 기준입니다.\n\n개발 운영의 목표는 두 기준을 혼동하지 않으면서도 작업자가 한 경로만 기억하게 하는\n것입니다. 소스 수정과 정적 검증은 저장소에서 수행하고, 라이브 DataModel 변경과 플레이\n검증은 Studio MCP에서 수행합니다. 중간 동기화 계층을 두지 않아 오래된 연결 상태나 별도\n빌드 결과를 실제 플레이스 상태로 오인하지 않습니다.\n\n## 플레이어 경험과 현재 시스템\n\n캐릭터는 몸과 머리를 분리한 8방향 프레임 아틀라스로 표현되고, 보이지 않는 Roblox\n캐릭터가 이동·충돌·네트워크 기준을 유지합니다. 플레이 액션은 대시와 쳐내기에 집중하며,\n모바일 입력과 카메라가 세로 화면 전투의 가독성을 우선합니다.\n\n백팩 인벤토리는 아이템 데이터, 배치 규칙과 전투 능력치 계약을 분리합니다. ItemDB는\n아이콘과 점유 형태의 공개·런타임 파생 데이터를 동기화하고, 개발 위키는 제품 결정과\n검증 근거를 커밋 단위의 불변 버전으로 보존합니다.\n\n## 개발 원칙\n\n### 저장소는 소스와 정적 계약을 소유합니다\n\n`src`의 Luau 파일, gameplay·art 문서, ItemDB 원본과 자동화 테스트가 변경의 검토\n단위입니다. Luau 컴파일러와 각 도메인 테스트는 모듈 계약, 데이터 최신성과 회귀를 직접\n검증합니다. 정적 검증은 전체 플레이스 생성 여부에 의존하지 않습니다.\n\n### Studio MCP는 라이브 상태를 소유합니다\n\nStudio 선택, 인스턴스와 속성 검사·변경, Luau 실행, Play 모드, 콘솔, 스크린샷과 런타임\n검증은 Studio MCP를 첫 번째이자 권위 있는 경로로 사용합니다. 저장소 파일이 올바르다는\n사실만으로 라이브 적용을 주장하지 않고, 실제 Studio 상태가 필요한 완료 조건에는 MCP\n근거를 기록합니다.\n\n### 운영 경로는 하나만 유지합니다\n\n별도 파일시스템 동기화 설정, 서버와 오프라인 플레이스 빌드 게이트는 현재 프로젝트에\n추가하지 않습니다. 과거 프로젝트의 도구 선택은 PackBound의 기본값이 아니며, 새로운\n도구 계층은 기존 공식 경로가 제공하지 못하는 명확한 제품·운영 요구가 승인될 때만\n검토합니다.\n\n## 현재 개발 흐름\n\n1. 저장소에서 제품 의도와 현재 계약을 확인하고 Luau·문서·데이터를 수정합니다.\n2. 관련 Luau 컴파일, 도메인 테스트, ItemDB와 위키 최신성 검사를 실행합니다.\n3. 라이브 결과가 필요한 작업은 Studio MCP로 올바른 플레이스를 선택하고 적용·검증합니다.\n4. 사용자가 커밋을 요청하면 최종 diff와 시각 증거를 위키의 다음 불변 버전에 기록합니다.\n5. 코드, 문서, 테스트, 위키 원본과 생성 데이터를 같은 커밋으로 게시합니다.\n\n## 이번 결정과 결과\n\n현재 저장소의 툴 선언은 Luau 버전만 관리합니다. 에이전트 지침과 README는 Studio MCP와\n정적 테스트의 책임을 일관되게 설명하고, 저장소 정책 테스트는 폐기한 동기화 계층이 활성\n파일이나 파일명으로 다시 들어오는 것을 차단합니다. 개발 위키도 문서 탐색과 ItemDB 편집에\n집중하도록 단순화됐습니다.\n\n커밋된 과거 위키는 당시의 사실을 보존하지만 최신 프로젝트 계약으로 사용하지 않습니다.\n현재 판단은 이 버전과 `AGENTS.md`, 최신 gameplay 문서, 실제 Studio MCP 상태를 우선합니다.\n\n## 검증과 후속 운영\n\n정책·위키 테스트와 위키·ItemDB·CombatDB 최신성 검사를 통과했습니다. Studio MCP에서\n프로젝트 소유 주요 서비스에 폐기한 통합의 인스턴스가 없음을 확인했고, 매핑 파일이 과거에\n선언하던 세로 화면과 스크립트형 터치 이동 속성은 현재 Studio에 유지돼 있습니다.\n\n앞으로 개발 경로를 바꾸는 결정은 편의 기능 추가가 아니라 소유권·검증·복구 전략 변경으로\n취급합니다. 변경이 승인되면 지침, 테스트와 위키를 같은 커밋에서 갱신해 사람과 에이전트가\n서로 다른 운영 가정을 갖지 않도록 합니다.\n",
          "source_path": "wiki/content/pages/project-overview/v005.md",
          "timeline_order": 23
        },
        {
          "id": "project-overview",
          "title": "PackBound 프로젝트 개요",
          "summary": "PackBound의 플레이 액션을 대시와 쳐내기로 한정하고, 지원하지 않는 구르기 계약을 입력·상태·렌더링·문서에서 완전히 제거한 현재 구조입니다.",
          "status": "active",
          "category": "project",
          "tags": [
            "roblox",
            "gameplay",
            "architecture",
            "mobile",
            "pc",
            "controls",
            "input",
            "cleanup",
            "wiki"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-06",
          "authors": [
            "Codex"
          ],
          "version": 4,
          "change_type": "corrected",
          "change_summary": "프로젝트에 존재하지 않는 구르기를 PC·게임패드·터치 입력, 액션 상태, 무적 속성, 포즈·이펙트와 문서에서 제거하고 대시·쳐내기만 공식 플레이 액션으로 확정함",
          "supersedes": "project-overview@v003",
          "sources": [
            "README.md",
            "docs/gameplay/character-actions.md",
            "src/ReplicatedStorage/Character2D/AnimationLibrary.luau",
            "src/ReplicatedStorage/Character2D/CharacterController.luau",
            "src/ReplicatedStorage/Character2D/Config.luau",
            "src/ReplicatedStorage/Character2D/CutoutRig.luau",
            "src/ReplicatedStorage/Character2D/FrameSpriteRig.luau",
            "src/ReplicatedStorage/Character2D/PlayerActionController.luau",
            "tests/AnimationLibrary.spec.luau"
          ],
          "related": [
            "character-2d-rendering",
            "development-wiki",
            "studio-automation-routing"
          ],
          "validation": [
            "rojo build packbound.project.json --output /tmp/PackBound-no-roll.rbxlx",
            "luau-compile src/ReplicatedStorage/Character2D/Config.luau src/ReplicatedStorage/Character2D/PlayerActionController.luau src/ReplicatedStorage/Character2D/AnimationLibrary.luau src/ReplicatedStorage/Character2D/CharacterController.luau src/ReplicatedStorage/Character2D/FrameSpriteRig.luau src/ReplicatedStorage/Character2D/CutoutRig.luau",
            "luau tests/AnimationLibrary.spec.luau",
            "luau tests/DirectionResolver.spec.luau",
            "luau tests/MobileJoystickGate.spec.luau",
            "luau tests/MobileJoystickGesture.spec.luau",
            "luau tests/MobileJoystickMovement.spec.luau",
            "구르기 계약 정적 검색: 활성 소스·문서·테스트에서 Roll, PackBoundRoll, 구르기 참조 0건",
            "Studio MCP PC 플레이테스트: PackBoundRoll 미등록, Q 입력 후 액션 시리얼 0 유지",
            "Studio MCP 회귀 테스트: Shift 대시와 Space 쳐내기 액션 시리얼 증가, Space 점프 차단 확인"
          ],
          "body": "# PackBound 프로젝트 개요\n\n## 결과\n\nPackBound는 2D 캐릭터 표현과 Roblox의 3D 이동·물리를 결합한 세로형 2.5D\n아케이드 RPG 프로토타입입니다. 보이는 캐릭터는 몸통과 머리를 분리한 8방향\n프레임 아틀라스로 렌더링하고, 숨겨진 Roblox 캐릭터는 이동, 충돌과 네트워크\n기준을 유지합니다.\n\n현재 플레이 액션은 `Dash`와 `Parry` 두 가지입니다. PC에서는 좌·우 `Shift`로\n대시하고 `Space`로 쳐내며, 모바일에서는 하나의 조이스틱이 이동, 중앙 짧은 탭\n쳐내기와 외부 링 대시를 처리합니다. 구르기는 게임 기획에 없는 기능이므로 입력,\n런타임 상태, 렌더링과 문서 어디에서도 지원하지 않습니다.\n\n## 구현 내용\n\n### 입력과 액션\n\n- `PlayerActionController`는 대시와 쳐내기만 바인딩하고 실행합니다.\n- PC의 `LeftShift`와 `RightShift`는 대시, `Space`는 쳐내기입니다.\n- `Space`는 프로젝트 입력 우선순위에서 소비해 Roblox 기본 점프가 함께 발생하지\n  않습니다.\n- 게임패드 `ButtonX`는 쳐내기를 유지합니다. `ButtonA`에는 별도 액션을\n  배정하지 않았습니다.\n- 모바일 중앙 짧은 탭과 외부 링 드래그는 같은 `TryParry`, `TryDash` 경로를\n  사용합니다.\n\n### 구르기 계약 제거\n\n- `Q`, `ButtonA`와 자동 생성 터치 `ROLL` 버튼 바인딩을 삭제했습니다.\n- 구르기 속도·지속시간·쿨다운 설정과 `PackBoundRollInvulnerable` 속성을\n  삭제했습니다.\n- `TryRoll`, 지연 무적 창 스케줄러와 구르기 전용 액션 상태를 삭제했습니다.\n- 절차형 구르기 포즈와 이펙트, 프레임 스프라이트의 구르기→대시 대체 렌더링을\n  삭제했습니다.\n- 액션 문서와 애니메이션 테스트는 대시·쳐내기 계약만 설명하고 검증합니다.\n\n### 현재 렌더링과 모바일 계약\n\n- 기본 `FrameSpriteV2`는 별도 몸통과 머리 아틀라스를 합성합니다.\n- 8방향 Move, Dash, Hit와 동·서 Death, Clear 프레임을 지원합니다.\n- 모바일 이동은 중앙 데드존 밖에서 고정 속도이며, 대시는 조이스틱 본체와\n  물리적으로 떨어진 외부 링을 넘어야 발동합니다.\n- 쳐내기는 0.3초 서버 유효 창을 사용하며 현재 클라이언트에 반투명 보호 효과를\n  즉시 표시합니다.\n\n## 변경 파일\n\n| 파일 | 최종 책임 |\n| --- | --- |\n| `Config.luau` | 대시·쳐내기 설정과 서버 패리 속성만 유지 |\n| `PlayerActionController.luau` | PC·게임패드 입력, 대시 추진과 쳐내기 요청 |\n| `CharacterController.luau` | 구르기를 제외한 시각 액션 상태 재생 |\n| `AnimationLibrary.luau` | Dash·Parry 절차형 포즈 |\n| `FrameSpriteRig.luau` | 실제 프레임 상태를 다른 액션으로 위장하지 않고 렌더링 |\n| `CutoutRig.luau` | Dash·Parry 액션 이펙트 |\n| `README.md`, `character-actions.md` | 공식 플랫폼별 입력과 런타임 계약 |\n| `AnimationLibrary.spec.luau` | 현재 지원하는 액션 포즈 회귀 테스트 |\n\n## 검증\n\nRojo 플레이스 빌드와 변경된 여섯 Luau 모듈 컴파일이 성공했습니다. 절차형\n애니메이션, 8방향 해석, 모바일 대시 게이트, 탭·드래그 판정과 디지털 이동\n테스트도 모두 통과했습니다. 활성 소스·문서·테스트에서는 구르기 이름, 바인딩과\n무적 속성 참조가 더 이상 발견되지 않았습니다.\n\nStudio 플레이 테스트에서는 `PackBoundRoll` 액션과 구르기 속성이 등록되지\n않았고 `Q`를 눌러도 액션 시리얼이 0에 머물렀습니다. 이어서 `Shift`는 `Dash`,\n`Space`는 `Parry`를 발생시켰으며 쳐내기 후에도 휴머노이드는 점프하지 않았습니다.\n\n## 결정 사항\n\n- 구현된 프로토타입이라는 이유만으로 기획에 없는 액션을 호환 기능으로 유지하지\n  않습니다.\n- 공식 액션 목록, 입력, 설정, 시각 상태와 테스트는 같은 계약을 가져야 합니다.\n- 사용하지 않는 무적 속성과 서버 확장 의무를 남기지 않아 후속 전투 해결기가\n  존재하지 않는 구르기 판정을 구현해야 한다는 오해를 방지합니다.\n- 구르기 입력만 끄는 대신 관련 코드와 시각 처리를 함께 제거해 죽은 분기와 모바일\n  UI 노출 가능성을 없앱니다.\n- 현재 PC 계약은 `Shift = Dash`, `Space = Parry`이며 모바일은 통합 조이스틱을\n  유지합니다.\n\n## 후속 작업\n\n- 대시에 긴 재사용 대기시간을 도입할 때 PC와 모바일이 같은 사용 가능 상태와\n  피드백을 공유해야 합니다.\n- 실제 피해 해결기에 0.3초 쳐내기 창의 피해 취소와 공격자 반사를 연결해야 합니다.\n- 게임패드 대시 키와 전체 액션 재바인딩 정책은 게임패드 UX 작업에서 확정합니다.\n",
          "source_path": "wiki/content/pages/project-overview/v004.md",
          "timeline_order": 8
        },
        {
          "id": "project-overview",
          "title": "PackBound 프로젝트 개요",
          "summary": "8방향 프레임 캐릭터, 모바일 통합 조이스틱, PC 전용 액션 키와 서버 패리 경계를 갖춘 세로형 2.5D 아케이드 RPG의 현재 구조입니다.",
          "status": "active",
          "category": "project",
          "tags": [
            "roblox",
            "gameplay",
            "architecture",
            "mobile",
            "pc",
            "controls",
            "input",
            "wiki"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-06",
          "authors": [
            "Codex"
          ],
          "version": 3,
          "change_type": "updated",
          "change_summary": "PC 대시를 좌·우 Shift에 새로 연결하고 쳐내기를 E에서 Space로 옮겼으며, Space의 기본 점프가 함께 실행되지 않도록 고우선순위 액션 입력 계약을 확정함",
          "supersedes": "project-overview@v002",
          "sources": [
            "docs/gameplay/character-actions.md",
            "src/ReplicatedStorage/Character2D/Config.luau",
            "src/ReplicatedStorage/Character2D/PlayerActionController.luau",
            "src/ReplicatedStorage/Character2D/MobileJoystickController.luau",
            "src/StarterPlayer/StarterPlayerScripts/PlayerActionBootstrap.client.luau",
            "src/ServerScriptService/ParryService.server.luau",
            "packbound.project.json"
          ],
          "related": [
            "character-2d-rendering",
            "development-wiki",
            "studio-automation-routing"
          ],
          "validation": [
            "rojo build packbound.project.json --output /tmp/PackBound-pc-controls.rbxlx",
            "luau-compile src/ReplicatedStorage/Character2D/Config.luau src/ReplicatedStorage/Character2D/PlayerActionController.luau",
            "luau tests/DirectionResolver.spec.luau",
            "luau tests/MobileJoystickGate.spec.luau",
            "luau tests/MobileJoystickGesture.spec.luau",
            "luau tests/MobileJoystickMovement.spec.luau",
            "Studio MCP PC 플레이테스트: LeftShift/RightShift 대시 바인딩, Space 패리 바인딩, Dash·Parry 액션 시리얼 증가 확인",
            "Studio MCP Space 입력 점프 회귀 테스트: Humanoid Running, Jump=false, 수직 속도 약 0 확인"
          ],
          "body": "# PackBound 프로젝트 개요\n\n## 결과\n\nPackBound는 2D 캐릭터 표현과 Roblox의 3D 이동·물리를 결합한 세로형 2.5D\n아케이드 RPG 프로토타입입니다. 보이는 캐릭터는 몸통과 머리를 분리한 8방향\n프레임 아틀라스로 렌더링하고, 숨겨진 Roblox 캐릭터는 이동, 충돌과 네트워크\n기준을 유지합니다.\n\n게임플레이 기반에는 이동·대시·쳐내기를 합친 모바일 조이스틱, PC 전용 액션 키,\nRoll, 서버 소유 패리 창, 쿼터뷰 카메라와 백팩 공간 규칙이 포함됩니다. 개발\n위키는 Git 커밋 시점의 최종 구조와 그 결정 이유를 불변 Markdown으로 기록합니다.\n\n## 현재 개발 영역\n\n### 캐릭터 렌더링과 제작\n\n- 기본 `FrameSpriteV2`는 별도 몸통과 머리 아틀라스를 합성합니다.\n- 8방향 Move, Dash, Hit와 동·서 Death, Clear 프레임을 지원합니다.\n- 머리와 몸통 스타일은 캐릭터 속성으로 독립 교체할 수 있습니다.\n- 체력 감소와 사망은 Hit·Death 프레임 상태로 연결됩니다.\n- 최종 스프라이트는 방향·프레임별 원본, 루트·접지·목 앵커와 승인 상태를\n  검증한 뒤에만 라이브 아틀라스 후보로 승격합니다.\n\n### 카메라, 입력과 액션\n\n- 고정 쿼터뷰 카메라가 로컬 캐릭터를 부드럽게 추적합니다.\n- 세로형 터치 화면의 단일 조이스틱은 고정 속도 이동, 중앙 짧은 탭 쳐내기와\n  조이스틱 밖 외부 링 대시를 처리합니다.\n- PC에서는 좌·우 `Shift`가 대시, `Space`가 쳐내기, `Q`가 구르기입니다.\n- 게임패드는 기존 `ButtonA` 구르기와 `ButtonX` 쳐내기 계약을 유지합니다.\n- 클라이언트는 액션 입력에 즉시 애니메이션과 효과를 표시하고, 서버는 패리 요청의\n  생존 상태, 쿨다운과 0.3초 유효 창을 관리합니다.\n- 실제 피해 취소·반사와 Roll 무적 권한은 이후 서버 전투 해결기로 이동해야 합니다.\n\n### 아이템과 백팩 규칙\n\n- 공용 스탯 정의와 계산기가 공격, 방어, 체력, 투사체와 유틸리티 보정을\n  일관된 ID로 처리합니다.\n- 백팩 규칙 평가기는 인접, 대각선, 같은 행·열, 방향과 액티브 셀 조건을\n  아이템 좌표로 평가합니다.\n- 화상·빙결 같은 이벤트 효과는 스칼라 스탯과 분리하며 향후 효과 카탈로그가\n  담당합니다.\n\n### 개발 위키\n\n- 명시적 Git 커밋에서 관련 논리 페이지의 최종본만 새 불변 버전으로 만듭니다.\n- 구현 결과뿐 아니라 사용자가 해결하려던 문제와 선택의 철학을 함께 보존합니다.\n- 전체 트리, 전문 검색, 버전 비교, 관련 문서 연결과 태그 탐색을 제공합니다.\n- 등록된 플레이스의 로컬 Rojo 서버 상태를 위키 상단에서 확인할 수 있습니다.\n\n## PC 입력 계약\n\n`Shift`는 일반적인 PC 게임에서 순간 이동과 질주를 기대하는 키이므로 대시에\n배정했습니다. 왼손 이동 중 어느 키보드 배열에서도 접근하기 쉽도록\n`LeftShift`와 `RightShift`를 모두 받습니다. 키보드 대시는 현재 이동 방향을\n우선하고, 정지 중이면 캐릭터가 바라보는 방향으로 실행됩니다.\n\n`Space`는 짧은 반응 시간이 중요한 쳐내기에 배정했습니다. 넓고 빠르게 누를 수\n있어 긴급 방어 입력에 적합하지만 Roblox의 기본 점프와 충돌할 수 있으므로,\n`ContextActionService`의 프로젝트 입력 우선순위에서 해당 입력을 `Sink` 처리합니다.\n따라서 한 번의 `Space` 입력이 쳐내기와 점프를 동시에 만들지 않습니다.\n\n모바일 제스처는 이번 PC 키 변경과 분리했습니다. 터치에서는 중앙의 짧은 탭이\n계속 쳐내기를 담당하고, 확실하게 외부 대시 링까지 넘어간 드래그만 대시로\n인정합니다. 플랫폼마다 입력 형태는 다르지만 액션 컨트롤러의 `TryDash`와\n`TryParry`를 공유하므로 쿨다운, 효과와 서버 요청 경계는 동일합니다.\n\n## 주요 경계\n\n| 영역 | 위치 | 책임 |\n| --- | --- | --- |\n| 캐릭터 시스템 | `src/ReplicatedStorage/Character2D` | 프레임 외형, 방향, 카메라, 입력과 클라이언트 액션 |\n| 서버 액션 | `src/ServerScriptService` | 패리 요청 검증과 서버 유효 창 |\n| 아이템 스탯 | `src/ReplicatedStorage/ItemStats` | 스탯 계산과 백팩 공간 규칙 |\n| 클라이언트 시작점 | `src/StarterPlayer/StarterPlayerScripts` | 렌더러, 카메라와 조작 부트스트랩 |\n| 개발 위키 | `wiki`, `tools/wiki.py` | 커밋 문서, 탐색 UI와 로컬 Rojo 제어 |\n\n## 결정 사항\n\n- `FrameSpriteV2`를 현재 기본 시각 모드로 사용합니다.\n- 모바일 핵심 액션은 세로 화면의 한 조이스틱에 통합합니다.\n- PC는 `Shift = Dash`, `Space = Parry`, `Q = Roll`로 역할을 분리합니다.\n- `Space` 쳐내기 바인딩은 기본 점프보다 높은 우선순위에서 입력을 소비합니다.\n- 모바일과 PC가 같은 액션 컨트롤러를 사용하고 플랫폼 입력만 다르게 연결합니다.\n- 패리의 즉시 시각 반응과 서버 판정 권한을 분리합니다.\n- 위키는 개발 턴이 아니라 Git 커밋을 게시 경계로 사용합니다.\n\n## 후속 작업\n\n- 긴 재사용 대기시간을 도입할 때 PC와 모바일 대시 모두 같은 사용 가능 상태와\n  피드백을 공유해야 합니다.\n- 실제 피해 취소·반사와 Roll 무적 판정을 서버 전투 해결기에 연결해야 합니다.\n- 게임패드 대시 키와 전체 액션 재바인딩 정책은 게임패드 UX 작업에서 확정합니다.\n- 전체 승인된 프레임 에셋만 현재 런타임 슬롯 계약으로 확장해야 합니다.\n",
          "source_path": "wiki/content/pages/project-overview/v003.md",
          "timeline_order": 7
        },
        {
          "id": "project-overview",
          "title": "PackBound 프로젝트 개요",
          "summary": "8방향 프레임 캐릭터, 세로형 통합 입력, 서버 패리 경계, 아이템 규칙과 태그 기반 개발 위키를 갖춘 현재 프로젝트 구조입니다.",
          "status": "active",
          "category": "project",
          "tags": [
            "roblox",
            "gameplay",
            "architecture",
            "mobile",
            "controls",
            "wiki"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-06",
          "authors": [
            "Codex"
          ],
          "version": 2,
          "change_type": "updated",
          "change_summary": "기본 프레임 렌더러, 모바일 액션과 서버 패리 경계 및 태그 탐색 위키를 현재 프로젝트 개요에 반영함",
          "supersedes": "project-overview@v001",
          "sources": [
            "README.md",
            "docs/gameplay/character-actions.md",
            "docs/gameplay/item-stats.md",
            "default.project.json",
            "packbound.project.json",
            "src/ReplicatedStorage/Character2D",
            "src/ReplicatedStorage/ItemStats",
            "src/ServerScriptService/ParryService.server.luau",
            "wiki/site/tag-explorer.js"
          ],
          "related": [
            "character-2d-rendering",
            "development-wiki",
            "studio-automation-routing"
          ],
          "validation": [
            "rojo build packbound.project.json --output /tmp/PackBound-character-mobile-validation.rbxlx",
            "rojo build default.project.json --output /tmp/ProjectBackpack-default-validation.rbxlx",
            "/opt/homebrew/bin/luau-compile --null src/**/*.luau",
            "luau tests/DirectionResolver.spec.luau",
            "luau tests/AnimationLibrary.spec.luau",
            "luau tests/MobileJoystickGate.spec.luau",
            "luau tests/MobileJoystickGesture.spec.luau",
            "./tools/test_character_assets.sh",
            "./tools/test_item_stats.sh",
            "node tests/tag-explorer.spec.js"
          ],
          "body": "# PackBound 프로젝트 개요\n\n## 결과\n\nPackBound는 2D 캐릭터 표현과 Roblox의 3D 이동·물리를 결합한 세로형 2.5D\n아케이드 RPG 프로토타입입니다. 보이는 캐릭터는 몸통과 머리를 분리한 8방향\n프레임 아틀라스로 렌더링하고, 숨겨진 Roblox 캐릭터는 이동, 충돌과 네트워크\n기준을 유지합니다.\n\n게임플레이 기반에는 통합 모바일 조이스틱, Dash·Roll·Parry 액션, 서버 소유\n패리 창, 쿼터뷰 카메라와 백팩 공간 규칙이 포함됩니다. 개발 위키는 Git 커밋\n시점의 최종 구조를 불변 Markdown으로 기록하고 문서 트리, 이력, 태그와 로컬\nRojo 상태를 한 화면에서 탐색합니다.\n\n## 현재 개발 영역\n\n### 캐릭터 렌더링\n\n- 기본 `FrameSpriteV2`는 별도 몸통과 머리 아틀라스를 합성합니다.\n- 8방향 Move, Dash, Hit와 동·서 Death, Clear 프레임을 지원합니다.\n- 머리와 몸통 스타일은 캐릭터 속성으로 독립 교체할 수 있습니다.\n- 체력 감소와 사망은 Hit·Death 프레임 상태로 연결됩니다.\n- 이전 `FullBodyPrototype`과 장비용 `LayeredEquipment` 경로도 호환 모드로\n  유지합니다.\n\n### 카메라, 입력과 액션\n\n- 고정 쿼터뷰 카메라가 로컬 캐릭터를 부드럽게 추적합니다.\n- 세로형 터치 화면의 단일 조이스틱은 이동, 중앙 탭 패리와 바깥쪽 대시를\n  처리합니다.\n- 키보드와 게임패드의 Roll·Parry 입력은 기존 바인딩을 유지합니다.\n- 클라이언트는 즉시 애니메이션과 효과를 표시하고 서버는 패리 요청의 생존 상태,\n  쿨다운과 유효 창을 관리합니다.\n- 실제 피해 취소·반사와 Roll 무적 권한은 이후 서버 전투 해결기로 이동해야 합니다.\n\n### 아이템과 백팩 규칙\n\n- 공용 스탯 정의와 계산기가 공격, 방어, 체력, 투사체와 유틸리티 보정을\n  일관된 ID로 처리합니다.\n- 백팩 규칙 평가기는 인접, 대각선, 같은 행·열, 방향과 액티브 셀 조건을\n  아이템 좌표로 평가합니다.\n- 화상·빙결 같은 이벤트 효과는 스칼라 스탯과 분리하며 향후 효과 카탈로그가\n  담당합니다.\n\n### 개발 위키\n\n- 각 명시적 Git 커밋에서 관련 논리 페이지의 최종본만 새 불변 버전으로 만듭니다.\n- 전체 트리, 전문 검색, 버전 비교와 관련 문서 연결을 제공합니다.\n- 과거 버전을 포함한 모든 태그를 최신순, 최다순과 개발·기획·규칙·아트 테마로\n  탐색할 수 있습니다.\n- 태그를 선택하면 관련 문서의 생성·변경 시각, 요약과 본문 일부를 표시합니다.\n- 상단에서 등록된 플레이스의 로컬 Rojo 서버 상태를 확인하고 안전하게 시작하거나\n  중지할 수 있습니다.\n\n## 주요 경계\n\n| 영역 | 위치 | 책임 |\n| --- | --- | --- |\n| 캐릭터 시스템 | `src/ReplicatedStorage/Character2D` | 프레임 외형, 방향, 카메라, 입력과 클라이언트 액션 |\n| 서버 액션 | `src/ServerScriptService` | 패리 요청 검증과 서버 유효 창 |\n| 아이템 스탯 | `src/ReplicatedStorage/ItemStats` | 스탯 계산과 백팩 공간 규칙 |\n| 클라이언트 시작점 | `src/StarterPlayer/StarterPlayerScripts` | 렌더러, 카메라와 조작 부트스트랩 |\n| 개발 위키 | `wiki`, `tools/wiki.py` | 커밋 문서, 탐색 UI와 로컬 Rojo 제어 |\n\n## 로컬 실행과 검증\n\nRojo 서버는 다음 명령으로 시작합니다.\n\n```sh\n./tools/serve_packbound.sh\n```\n\n핵심 정적 검증은 두 Rojo 빌드, 전체 Luau 컴파일, 캐릭터·모바일·아이템 테스트,\n에셋 생성과 위키 검사로 구성됩니다. 라이브 Studio 상태는 Studio MCP가 노출된\n작업에서만 확인합니다.\n\n## 결정 사항\n\n- `FrameSpriteV2`를 현재 기본 시각 모드로 사용합니다.\n- 모바일 핵심 액션은 세로 화면의 한 조이스틱에 통합합니다.\n- 패리의 즉시 시각 반응과 서버 판정 권한을 분리합니다.\n- 전용 Rojo 프로젝트는 필요한 서비스와 속성을 동기화하지만 플레이스\n  `Workspace`는 소유하지 않습니다.\n- 위키는 개발 턴이 아니라 Git 커밋을 게시 경계로 사용합니다.\n\n## 후속 작업\n\n- Studio MCP로 프레임 합성, 모바일 안전 영역, 대시 방향과 서버 패리 만료를\n  라이브 검증해야 합니다.\n- 서버 전투 해결기에 패리와 Roll 판정을 연결해야 합니다.\n- 추가 머리·몸통과 장비 외형을 현재 슬롯 계약으로 확장해야 합니다.\n- 프레임 에셋 빌더의 Python 의존성을 재현 가능한 환경에 고정해야 합니다.\n",
          "source_path": "wiki/content/pages/project-overview/v002.md",
          "timeline_order": 2
        },
        {
          "id": "project-overview",
          "title": "PackBound 프로젝트 개요",
          "summary": "2.5D Roblox 아케이드 RPG 프로토타입의 현재 시스템 경계와 개발 진입점을 정리합니다.",
          "status": "active",
          "category": "project",
          "tags": [
            "roblox",
            "gameplay",
            "architecture"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-06",
          "authors": [
            "Codex"
          ],
          "version": 1,
          "change_type": "created",
          "change_summary": "최초 커밋의 게임플레이 시스템, 현재 렌더링 모드와 개발 경계를 정리함",
          "supersedes": null,
          "sources": [
            "README.md",
            "docs/gameplay/character-actions.md",
            "docs/gameplay/item-stats.md",
            "src/ReplicatedStorage/Character2D",
            "src/ReplicatedStorage/ItemStats"
          ],
          "related": [
            "development-wiki",
            "character-2d-rendering",
            "studio-automation-routing"
          ],
          "validation": [
            "rojo build packbound.project.json --output /tmp/PackBound-initial-commit.rbxlx",
            "luau tests/DirectionResolver.spec.luau",
            "luau tests/AnimationLibrary.spec.luau",
            "./tools/test_character_assets.sh",
            "./tools/test_item_stats.sh"
          ],
          "body": "# PackBound 프로젝트 개요\n\nPackBound는 2D 캐릭터 표현을 Roblox의 3D 이동·물리 위에 결합한 2.5D 아케이드\nRPG 프로토타입입니다. 현재 기본 모드는 `BillboardGui`에 다섯 방향 전신\n아틀라스를 표시하고, Roblox 캐릭터 모델은 시각적으로 숨긴 채 이동·충돌·\n네트워크의 기준으로 남겨 둡니다. 장비 교체를 위한 모듈형 컷아웃 경로도 이후\n확장을 위해 함께 준비되어 있습니다.\n\n## 현재 개발 영역\n\n### 캐릭터 렌더링\n\n- 다섯 방향 원본을 좌우 반전해 여덟 방향 표현을 구성합니다.\n- 현재 `FullBodyPrototype` 모드는 업로드된 좌우 전신 아틀라스를 게임플레이\n  스프라이트로 사용합니다.\n- 레이어드 모드에는 머리, 상의, 하의, 신발 슬롯과 머리색 팔레트가 준비되어\n  있지만 현재 기본 렌더러는 아닙니다.\n- 구르기와 쳐내기 상태를 포함한 액션 신호를 렌더러와 공유합니다.\n- 누락된 에셋은 경고로 표시하며 현재 설정에서는 단색 대체 파츠를 표시하지\n  않습니다.\n\n### 카메라와 액션\n\n- 카메라는 고정된 쿼터뷰 각도로 로컬 캐릭터를 부드럽게 추적합니다.\n- `Q`/게임패드 A는 구르기, `E`/게임패드 X는 쳐내기를 실행합니다.\n- 현재 방어 판정 속성은 로컬 프로토타입 신호입니다. 출시용 전투에서는\n  서버가 쿨다운과 유효 프레임을 판정해야 합니다.\n\n### 아이템과 백팩 규칙\n\n- 공용 스탯 정의와 계산기는 공격, 방어, 체력, 투사체, 유틸리티 보정을\n  일관된 ID로 처리합니다.\n- 백팩 규칙 평가기는 인접, 대각선, 같은 행·열, 방향, 액티브 셀 조건을\n  아이템 배치 좌표로 평가합니다.\n- 화상이나 빙결 같은 이벤트성 효과는 스칼라 스탯과 의도적으로 분리되어\n  있으며 향후 효과 카탈로그가 담당합니다.\n\n## 주요 경계\n\n| 영역 | 위치 | 책임 |\n| --- | --- | --- |\n| 캐릭터 시스템 | `src/ReplicatedStorage/Character2D` | 외형, 방향, 애니메이션, 카메라, 로컬 액션 |\n| 아이템 스탯 | `src/ReplicatedStorage/ItemStats` | 스탯 정의·계산과 백팩 공간 규칙 |\n| 클라이언트 시작점 | `src/StarterPlayer/StarterPlayerScripts` | 렌더러, 카메라, 액션 컨트롤러 부트스트랩 |\n| 설계 문서 | `docs/gameplay` | 플레이 규칙과 구현 계약 설명 |\n\n## 로컬 실행과 검증\n\nRojo 개발 서버는 다음 명령으로 시작합니다.\n\n```sh\n./tools/serve_packbound.sh\n```\n\n기본 오프라인 검증은 Rojo 빌드와 Luau 테스트로 구성됩니다.\n\n```sh\nrojo build packbound.project.json --output /tmp/PackBound.rbxlx\nluau tests/DirectionResolver.spec.luau\nluau tests/AnimationLibrary.spec.luau\n./tools/test_item_stats.sh\n```\n\n## 결정 사항\n\n- Roblox 플레이스의 `Workspace`는 전용 Rojo 프로젝트가 소유하지 않습니다.\n- 시각 표현과 전투 권한 경계를 분리해, 이후 서버 권한 전투를 추가할 때\n  캐릭터 렌더링을 교체하지 않도록 합니다.\n- 상세 개발 이력은 이 위키의 각 주제 페이지에서 커밋 단위 불변 버전으로\n  누적합니다.\n\n## 후속 작업\n\n- 서버 권한 전투와 상태 효과 시스템은 아직 별도 설계가 필요합니다.\n- 장비별 레이어드 아틀라스를 업로드한 뒤 해당 에셋 ID를 레지스트리에 연결하고\n  기본 렌더링 모드 전환을 검증해야 합니다.\n",
          "source_path": "wiki/content/pages/project-overview/v001.md",
          "timeline_order": 1
        }
      ]
    },
    {
      "id": "development-wiki",
      "title": "개발 위키와 변경 이력 시스템",
      "summary": "커밋 위키를 비개발자도 이해할 수 있는 기획 기록으로 만들고, 눈에 보이는 변화는 실제 사용자 상태를 설명하는 충분한 화면 증거와 함께 발행하도록 완료 기준을 강화했습니다.",
      "status": "active",
      "category": "tooling",
      "tags": [
        "documentation",
        "wiki",
        "tooling",
        "planning",
        "readability",
        "visual-evidence",
        "governance"
      ],
      "created_at": "2026-08-06",
      "updated_at": "2026-08-23",
      "authors": [
        "Codex"
      ],
      "version": 13,
      "change_type": "updated",
      "change_summary": "위키 본문을 기획·사용자 경험 중심으로 읽을 수 있게 하는 비개발자 가독성 기준과, UI·아트·애니메이션의 기본·상호작용·성공·실패 상태를 필요한 만큼 캡처하는 시각 증거 기준을 추가했습니다.",
      "supersedes": "development-wiki@v012",
      "sources": [
        "wiki/content/pages/development-wiki/v012.md",
        "AGENTS.md",
        ".agents/skills/update-project-wiki/SKILL.md"
      ],
      "related": [
        "product-planning-change-log",
        "project-overview"
      ],
      "validation": [
        "현재 커밋의 character-2d-rendering@v010과 inventory-item-concept@v020에 한눈에 보는 변경·기획 배경·사용자 경험·설계 원칙·구현 참고·검증 순서 적용",
        "현재 커밋의 모바일 인벤토리에 기본·실패·작업 메뉴·상세·두 번째 화면비 증거 적용",
        "현재 커밋의 캐릭터 애니메이션에 제작 콘택트 시트·타이밍 GIF·Studio Idle·Dash 결과 증거 적용",
        "python3 tools/wiki.py build && python3 tools/wiki.py check: 10 pages, 67 revisions, 93 media files 통과",
        "python3 -m unittest tests/test_wiki.py: 18 tests passed",
        "python3 -m unittest tests.test_repository_policy: 1 test passed",
        "python3 -m unittest discover -s tests: 130 tests passed",
        "git diff --check: 통과"
      ],
      "source_path": "wiki/content/pages/development-wiki/v013.md",
      "body": "# 개발 위키와 변경 이력 시스템\n\n## 한눈에 보는 변경\n\n커밋 위키를 소스 파일 목록이 아니라 **왜 이 기능을 만들었고 사용자가 무엇을 경험하는지**를\n먼저 읽는 제품 기록으로 강화했습니다. 디자이너·아티스트·테스터·새 팀원이 코드를 열지 않아도\n목표와 규칙을 설명할 수 있어야 게시할 수 있습니다.\n\n눈에 보이는 변화는 스크린샷 한 장을 형식적으로 넣는 것으로 끝내지 않습니다. 기능을 이해하는\n데 필요한 기본·선택·확장·성공·실패 상태를 실제 게임이나 웹에서 캡처하고, 각 캡션이 어떤\n기획 원칙을 증명하는지 설명해야 합니다.\n\n## 기획 배경과 목표\n\n개발 기록이 구현 이름과 파일 경로부터 시작하면 비개발자는 변경 이유를 알기 어렵고, 다음\n작업자는 당시 철학보다 코드를 먼저 추측하게 됩니다. 반대로 기획 설명만 있고 실제 화면과 검증이\n없으면 결정이 제품에 반영됐는지 확인할 수 없습니다.\n\n목표는 기획과 증거의 역할을 분리하되 함께 보존하는 것입니다. 본문 앞부분은 문제·목표·사용자\n경험·원칙·범위를 설명하고, 구현 구조와 명령·파일·테스트는 뒤에서 그 결정이 실제라는 근거로\n제공합니다.\n\n## 사용자 경험\n\n위키 독자는 첫 `한눈에 보는 변경`에서 무엇이, 왜, 어떻게 달라졌는지 바로 알 수 있습니다.\n배치나 상태 전환처럼 말만으로 복잡한 규칙은 구체적인 플레이 예와 상태 화면을 가까이 배치해\n읽습니다. 캡션은 `결과` 같은 이름 대신 플레이어가 무엇을 했고 어떤 규칙이 보이는지를 말합니다.\n\n## 핵심 원칙과 설계 철학\n\n- 제품 언어를 먼저 쓰고 내부 클래스·ID·상수는 뒤에서 설명합니다.\n- 피할 수 없는 기술 용어는 처음 등장할 때 일상 언어로 정의합니다.\n- 한 장으로 이해되지 않는 UI는 필요한 상태만 추가로 캡처합니다.\n- Roblox 변화는 Studio MCP Play 결과를, 웹 변화는 브라우저 결과를 권위 있는 증거로 씁니다.\n- 임시 실패·폐기된 접근·중간 튜닝은 최종 위키 서사에서 제외합니다.\n- 이미 커밋된 버전과 증거는 덮어쓰지 않고 다음 불변 버전에서 정정합니다.\n\n## 결정 사항과 범위\n\n- 새 위키 버전은 계속 사용자 승인 커밋 시점에만 만듭니다.\n- 주제별 페이지는 커밋당 가장 작은 논리 단위마다 최대 한 버전만 추가합니다.\n- `한눈에 보는 변경`을 기본 첫 섹션으로 사용합니다.\n- 시각 변화의 증거 수는 고정 숫자가 아니라 기능을 설명하는 데 필요한 상태 수로 결정합니다.\n- 구현 세부 정보는 필요하지만 기획 설명을 대신할 수 없습니다.\n\n## 현재 결과\n\n이번 커밋부터 캐릭터 애니메이션 페이지는 제작 프레임·타이밍·실제 Idle·Dash를 함께 보여 주고,\n인벤토리 페이지는 기본 화면·잘못된 초안·작업 메뉴·상세 팝업·작은 휴대폰 결과를 함께 보여\n줍니다. 각 페이지의 앞부분만 읽어도 기능 목적과 플레이 규칙을 이해할 수 있도록 구성했습니다.\n\n## 구현 참고\n\n저장소의 `AGENTS.md`는 커밋 전 완료 게이트를 정의하고, `update-project-wiki` 스킬은 실제 작성\n순서와 메타데이터·시각 증거·검증·배포 절차를 정의합니다. 두 규칙은 비개발자 가독성과\n다중 상태 증거를 같은 기준으로 공유합니다.\n\n## 검증\n\n- 이번 커밋의 세 주제별 위키 페이지에 새 서사 순서를 직접 적용했습니다.\n- 인벤토리는 두 모바일 화면비와 네 가지 상호작용 상태를, 캐릭터는 제작·타이밍·실제 Play\n  상태를 증거로 연결했습니다.\n- 최종 위키 빌드·검사와 저장소 정책 테스트 결과는 같은 커밋 메타데이터에 기록합니다.\n\n## 후속 기획\n\n위키 페이지가 늘어나면 독자 유형별 요약이나 기획 결정 링크를 강화할 수 있습니다. 그 경우에도\n본문을 구현 로그로 되돌리지 않고, 기획을 중심으로 기술 증거를 연결하는 원칙을 유지합니다.\n",
      "revisions": [
        {
          "id": "development-wiki",
          "title": "개발 위키와 변경 이력 시스템",
          "summary": "커밋 위키를 비개발자도 이해할 수 있는 기획 기록으로 만들고, 눈에 보이는 변화는 실제 사용자 상태를 설명하는 충분한 화면 증거와 함께 발행하도록 완료 기준을 강화했습니다.",
          "status": "active",
          "category": "tooling",
          "tags": [
            "documentation",
            "wiki",
            "tooling",
            "planning",
            "readability",
            "visual-evidence",
            "governance"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-23",
          "authors": [
            "Codex"
          ],
          "version": 13,
          "change_type": "updated",
          "change_summary": "위키 본문을 기획·사용자 경험 중심으로 읽을 수 있게 하는 비개발자 가독성 기준과, UI·아트·애니메이션의 기본·상호작용·성공·실패 상태를 필요한 만큼 캡처하는 시각 증거 기준을 추가했습니다.",
          "supersedes": "development-wiki@v012",
          "sources": [
            "wiki/content/pages/development-wiki/v012.md",
            "AGENTS.md",
            ".agents/skills/update-project-wiki/SKILL.md"
          ],
          "related": [
            "product-planning-change-log",
            "project-overview"
          ],
          "validation": [
            "현재 커밋의 character-2d-rendering@v010과 inventory-item-concept@v020에 한눈에 보는 변경·기획 배경·사용자 경험·설계 원칙·구현 참고·검증 순서 적용",
            "현재 커밋의 모바일 인벤토리에 기본·실패·작업 메뉴·상세·두 번째 화면비 증거 적용",
            "현재 커밋의 캐릭터 애니메이션에 제작 콘택트 시트·타이밍 GIF·Studio Idle·Dash 결과 증거 적용",
            "python3 tools/wiki.py build && python3 tools/wiki.py check: 10 pages, 67 revisions, 93 media files 통과",
            "python3 -m unittest tests/test_wiki.py: 18 tests passed",
            "python3 -m unittest tests.test_repository_policy: 1 test passed",
            "python3 -m unittest discover -s tests: 130 tests passed",
            "git diff --check: 통과"
          ],
          "body": "# 개발 위키와 변경 이력 시스템\n\n## 한눈에 보는 변경\n\n커밋 위키를 소스 파일 목록이 아니라 **왜 이 기능을 만들었고 사용자가 무엇을 경험하는지**를\n먼저 읽는 제품 기록으로 강화했습니다. 디자이너·아티스트·테스터·새 팀원이 코드를 열지 않아도\n목표와 규칙을 설명할 수 있어야 게시할 수 있습니다.\n\n눈에 보이는 변화는 스크린샷 한 장을 형식적으로 넣는 것으로 끝내지 않습니다. 기능을 이해하는\n데 필요한 기본·선택·확장·성공·실패 상태를 실제 게임이나 웹에서 캡처하고, 각 캡션이 어떤\n기획 원칙을 증명하는지 설명해야 합니다.\n\n## 기획 배경과 목표\n\n개발 기록이 구현 이름과 파일 경로부터 시작하면 비개발자는 변경 이유를 알기 어렵고, 다음\n작업자는 당시 철학보다 코드를 먼저 추측하게 됩니다. 반대로 기획 설명만 있고 실제 화면과 검증이\n없으면 결정이 제품에 반영됐는지 확인할 수 없습니다.\n\n목표는 기획과 증거의 역할을 분리하되 함께 보존하는 것입니다. 본문 앞부분은 문제·목표·사용자\n경험·원칙·범위를 설명하고, 구현 구조와 명령·파일·테스트는 뒤에서 그 결정이 실제라는 근거로\n제공합니다.\n\n## 사용자 경험\n\n위키 독자는 첫 `한눈에 보는 변경`에서 무엇이, 왜, 어떻게 달라졌는지 바로 알 수 있습니다.\n배치나 상태 전환처럼 말만으로 복잡한 규칙은 구체적인 플레이 예와 상태 화면을 가까이 배치해\n읽습니다. 캡션은 `결과` 같은 이름 대신 플레이어가 무엇을 했고 어떤 규칙이 보이는지를 말합니다.\n\n## 핵심 원칙과 설계 철학\n\n- 제품 언어를 먼저 쓰고 내부 클래스·ID·상수는 뒤에서 설명합니다.\n- 피할 수 없는 기술 용어는 처음 등장할 때 일상 언어로 정의합니다.\n- 한 장으로 이해되지 않는 UI는 필요한 상태만 추가로 캡처합니다.\n- Roblox 변화는 Studio MCP Play 결과를, 웹 변화는 브라우저 결과를 권위 있는 증거로 씁니다.\n- 임시 실패·폐기된 접근·중간 튜닝은 최종 위키 서사에서 제외합니다.\n- 이미 커밋된 버전과 증거는 덮어쓰지 않고 다음 불변 버전에서 정정합니다.\n\n## 결정 사항과 범위\n\n- 새 위키 버전은 계속 사용자 승인 커밋 시점에만 만듭니다.\n- 주제별 페이지는 커밋당 가장 작은 논리 단위마다 최대 한 버전만 추가합니다.\n- `한눈에 보는 변경`을 기본 첫 섹션으로 사용합니다.\n- 시각 변화의 증거 수는 고정 숫자가 아니라 기능을 설명하는 데 필요한 상태 수로 결정합니다.\n- 구현 세부 정보는 필요하지만 기획 설명을 대신할 수 없습니다.\n\n## 현재 결과\n\n이번 커밋부터 캐릭터 애니메이션 페이지는 제작 프레임·타이밍·실제 Idle·Dash를 함께 보여 주고,\n인벤토리 페이지는 기본 화면·잘못된 초안·작업 메뉴·상세 팝업·작은 휴대폰 결과를 함께 보여\n줍니다. 각 페이지의 앞부분만 읽어도 기능 목적과 플레이 규칙을 이해할 수 있도록 구성했습니다.\n\n## 구현 참고\n\n저장소의 `AGENTS.md`는 커밋 전 완료 게이트를 정의하고, `update-project-wiki` 스킬은 실제 작성\n순서와 메타데이터·시각 증거·검증·배포 절차를 정의합니다. 두 규칙은 비개발자 가독성과\n다중 상태 증거를 같은 기준으로 공유합니다.\n\n## 검증\n\n- 이번 커밋의 세 주제별 위키 페이지에 새 서사 순서를 직접 적용했습니다.\n- 인벤토리는 두 모바일 화면비와 네 가지 상호작용 상태를, 캐릭터는 제작·타이밍·실제 Play\n  상태를 증거로 연결했습니다.\n- 최종 위키 빌드·검사와 저장소 정책 테스트 결과는 같은 커밋 메타데이터에 기록합니다.\n\n## 후속 기획\n\n위키 페이지가 늘어나면 독자 유형별 요약이나 기획 결정 링크를 강화할 수 있습니다. 그 경우에도\n본문을 구현 로그로 되돌리지 않고, 기획을 중심으로 기술 증거를 연결하는 원칙을 유지합니다.\n",
          "source_path": "wiki/content/pages/development-wiki/v013.md",
          "timeline_order": 43
        },
        {
          "id": "development-wiki",
          "title": "개발 위키와 변경 이력 시스템",
          "summary": "공개 위키의 시간순 보기는 실제 등록 순서를 유지하면서 화면과 공개 데이터에는 날짜만 남겨, 탐색 정확성과 작업 시간 개인정보를 함께 지킵니다.",
          "status": "active",
          "category": "tooling",
          "tags": [
            "documentation",
            "wiki",
            "tooling",
            "timeline",
            "navigation",
            "privacy",
            "public-wiki"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-13",
          "authors": [
            "Codex"
          ],
          "version": 12,
          "change_type": "corrected",
          "change_summary": "공개 배포에서 시각을 숨긴 뒤 같은 날짜의 버전 순서가 섞일 수 있던 문제를 바로잡고, 시간은 공개하지 않은 채 최신순과 오래된순이 실제 등록 순서를 따르게 했습니다.",
          "supersedes": "development-wiki@v011",
          "sources": [
            "tools/wiki.py",
            "wiki/site/index.html",
            "wiki/site/wiki-timeline.js",
            "tests/test_wiki.py",
            "tests/test_publish_public_wiki.py",
            "tests/wiki-timeline.spec.js",
            "wiki/content/media/development-wiki/v012/public-timeline-date-only.jpg"
          ],
          "related": [
            "project-overview"
          ],
          "validation": [
            "node --check wiki/site/wiki-timeline.js",
            "node tests/wiki-timeline.spec.js",
            "python3 -m unittest tests.test_wiki tests.test_publish_public_wiki",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "python3 -m unittest tests/test_wiki.py",
            "python3 -m unittest tests.test_repository_policy",
            "python3 tools/publish_public_wiki.py --check",
            "공개 모드 브라우저 1280×720: 카테고리·최신순·오래된순 전환, 38개 버전, 날짜만 표시 확인",
            "생성 data.js: 최신순과 오래된순의 timeline_order 단조성 확인",
            "공개 모드 브라우저: 시간 문자열 0건 확인",
            "git diff --check"
          ],
          "body": "# 개발 위키와 변경 이력 시스템\n\n## 기획 배경과 목표\n\n공개 위키의 시간순 보기는 프로젝트 변화의 실제 순서를 읽는 기능이어야 합니다. 동시에\n공개 페이지에서는 작업자가 몇 시에 기록을 남겼는지 드러내지 않고 날짜까지만 보여 주는\n개인정보 경계를 유지해야 합니다. 기존 공개 배포는 시각을 화면뿐 아니라 정렬 데이터에서도\n제거했기 때문에, 같은 날짜에 올라온 여러 버전의 순서가 실제 등록 흐름과 달라질 수\n있었습니다.\n\n이번 정정의 목표는 표시 정보와 정렬 정보를 분리하는 것입니다. 사용자는 날짜만 보지만\n`최신순`과 `오래된순`의 결과는 로컬 위키와 같은 실제 등록 순서를 따라야 합니다. 이를\n통해 공개 범위를 넓히지 않고도 프로젝트의 변화 흐름을 정확하게 전달합니다.\n\n## 사용자 경험\n\n공개 전체 위키 트리는 기본적으로 `카테고리` 보기를 유지합니다. `최신순`을 누르면 가장\n최근에 등록된 불변 버전부터, `오래된순`을 누르면 프로젝트의 최초 기록부터 모든 버전을\n한 줄씩 확인할 수 있습니다. 같은 문서의 `v001`, `v002`도 각각 독립된 목록 항목으로\n남습니다.\n\n각 항목의 날짜는 `2026년 8월 13일`처럼 연·월·일까지만 표시합니다. 오전·오후, 시·분,\n초와 시간대는 공개 화면과 내려받을 수 있는 공개 정적 데이터에 포함하지 않습니다.\n그럼에도 같은 날짜 안의 항목은 실제 기록 순서대로 배치됩니다.\n\n## 핵심 원칙과 설계 철학\n\n### 표시용 날짜와 정렬용 순서의 분리\n\n정확한 타임스탬프는 로컬 개발 위키에서만 사용합니다. 공개 빌드는 기존과 같이 모든\n정확한 시각을 날짜로 축약합니다. 대신 빌드 시점에 전체 버전의 시각을 비교해 생성한\n불투명한 `timeline_order` 정수만 함께 제공합니다. 이 값은 몇 시에 작업했는지를 복원할\n수 없고, 버전 사이의 앞뒤 관계만 표현합니다.\n\n### 로컬과 공개의 동일한 탐색 결과\n\n시간순 정렬은 가능한 경우 `timeline_order`를 우선 사용하고, 과거 데이터처럼 순서 값이\n없는 경우에만 기존 타임스탬프 비교로 돌아갑니다. 동일 시각에는 기존의 문서 ID와 버전\n규칙을 유지해 결과가 흔들리지 않습니다. 따라서 로컬과 공개가 서로 다른 목록을 보여\n주지 않으며 이전 데이터 계약도 깨지지 않습니다.\n\n### 개인정보 최소 공개\n\n공개 배포의 타임스탬프 정리 검사는 그대로 실패 차단 방식으로 유지합니다. 새 순서 값은\n정수일 뿐이며 원래 시각이나 시간대 문자열을 포함하지 않습니다. 화면을 숨기는 것에\n그치지 않고 공개 저장소의 정적 파일에서도 정확한 시간을 제거한다는 기존 원칙을\n보존합니다.\n\n## 결정 사항과 범위\n\n- 공개 화면에는 날짜만 표시하고 시간과 시간대는 표시하지 않습니다.\n- 같은 날짜 안에서도 최신순과 오래된순이 실제 등록 순서를 따르게 합니다.\n- 정렬 순서는 생성된 불투명 정수로 보존하고 정확한 타임스탬프는 공개하지 않습니다.\n- 기본 보기는 카테고리이며 시간순 보기는 사용자가 버튼으로 선택할 때만 표시합니다.\n- 모든 불변 버전을 독립 항목으로 유지합니다.\n- 날짜 범위 필터, 월별 그룹과 페이지네이션은 이번 정정 범위에 포함하지 않습니다.\n\n## 현재 결과\n\n공개 모드의 전체 위키 트리에서 최신순과 오래된순 모두 38개 불변 버전을 실제 등록\n순서로 나열합니다. 각 행은 날짜만 표시하고 시간 문자열을 노출하지 않습니다.\n\n![공개 위키 최신순 날짜 표시](./media/development-wiki/v012/public-timeline-date-only.jpg \"실제 등록 순서를 유지하면서 각 버전에 날짜만 표시하는 공개 위키 최신순 보기\")\n\n## 구현 참고\n\n`tools/wiki.py`는 검증된 각 `updated_at`을 전역으로 비교해 동일 시각에는 같은 값을 갖는\n`timeline_order`를 생성합니다. `wiki-timeline.js`는 이 값을 우선 정렬 키로 사용하고,\n값이 없는 데이터에 대해서는 기존 타임스탬프 정렬을 유지합니다.\n\n공개 배포의 `sanitize_public_timestamps`는 계속 모든 정확한 ISO 시각을 날짜로\n축약하지만 정수 순서 값은 그대로 보존합니다. `index.html`은 변경된 정렬 모듈에 새\n정적 파일 버전 키를 사용해 브라우저가 과거 로직을 재사용하지 않게 합니다.\n\n## 검증\n\n- 공개용 날짜 데이터만 가진 단위 테스트에서 `timeline_order`에 따라 최신순과\n  오래된순이 서로 정확히 반전됨을 확인했습니다.\n- 위키 생성 테스트에서 서로 다른 시각은 다른 순서 값, 동일 시각은 같은 순서 값을\n  받는 것을 확인했습니다.\n- 공개 개인정보 테스트에서 정확한 ISO 시각은 제거되고 정수 순서만 남는 것을\n  확인했습니다.\n- 공개 모드 브라우저에서 시간 문자열이 0건이며 카테고리·최신순·오래된순 전환과\n  전체 버전 보존을 확인했습니다.\n\n## 후속 기획\n\n버전 수가 크게 늘어나면 날짜 단위 그룹이나 필터를 추가할 수 있습니다. 그 경우에도\n표시는 날짜 단위, 정렬은 비공개 원본에서 파생된 순서 단위라는 경계를 유지합니다.\n",
          "source_path": "wiki/content/pages/development-wiki/v012.md",
          "timeline_order": 28
        },
        {
          "id": "development-wiki",
          "title": "개발 위키와 변경 이력 시스템",
          "summary": "위키 본문과 ItemDB 이미지를 새 창으로 보내지 않고 현재 화면의 공용 이미지 레이어에서 크게 보고, 바깥 영역을 누르면 즉시 원래 탐색으로 돌아오게 했습니다.",
          "status": "active",
          "category": "tooling",
          "tags": [
            "documentation",
            "wiki",
            "tooling",
            "image-viewer",
            "accessibility",
            "item-db",
            "responsive"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-13",
          "authors": [
            "Codex"
          ],
          "version": 11,
          "change_type": "updated",
          "change_summary": "이미지 확인 때문에 브라우저 창과 문서 맥락을 오가던 불편을 없애고, 본문 첨부 이미지와 ItemDB 아이템 이미지를 안전하고 일관된 인페이지 확대 경험으로 통합했습니다.",
          "supersedes": "development-wiki@v010",
          "sources": [
            "wiki/site/index.html",
            "wiki/site/app.js",
            "wiki/site/app.css",
            "wiki/site/markdown-media.js",
            "tools/wiki.py",
            "tests/markdown-media.spec.js",
            "wiki/content/media/development-wiki/v011/world-art-image-viewer.jpg",
            "wiki/content/media/development-wiki/v011/itemdb-image-viewer-mobile.jpg"
          ],
          "related": [
            "world-art-bible",
            "inventory-item-concept"
          ],
          "validation": [
            "node --check wiki/site/app.js",
            "node --check wiki/site/markdown-media.js",
            "node tests/markdown-media.spec.js",
            "node tests/item-db.spec.js",
            "node tests/wiki-timeline.spec.js",
            "python3 -m unittest tests.test_wiki tests.test_item_db tests.test_repository_policy",
            "python3 tools/item_db.py check",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "python3 -m unittest tests/test_wiki.py",
            "python3 -m unittest tests.test_repository_policy",
            "curl 응답 헤더: 로컬 정적 파일 Cache-Control no-store, max-age=0 확인",
            "인앱 브라우저 1280×720: world-art-bible 본문 이미지 레이어 표시, 새 탭 0개 증가 확인",
            "인앱 브라우저 390×844: ItemDB 이미지 레이어 표시, 가로 넘침 없음 확인",
            "git diff --check"
          ],
          "body": "# 개발 위키와 변경 이력 시스템\n\n## 기획 배경과 목표\n\n개발 위키의 이미지는 문서 내용과 결정을 이해하기 위한 근거입니다. 이미지를 자세히\n보려는 순간 별도 브라우저 창이나 탭으로 이동하면 사용자는 확인을 마친 뒤 창을 닫고\n원래 문서 위치를 다시 찾아야 합니다. 특히 한 페이지에서 여러 결과 이미지를 비교하거나\nItemDB의 아이템을 연속해서 살펴볼 때 이 전환 비용이 반복됐습니다.\n\n이번 변경의 목표는 이미지 확인을 문서 탐색의 일부로 만드는 것입니다. 사용자는 현재\n페이지와 스크롤 맥락을 잃지 않은 채 이미지를 크게 보고, 이미지 바깥을 한 번 누르면\n즉시 원래 위치로 돌아올 수 있어야 합니다. 본문 첨부 이미지와 ItemDB 이미지는 출처가\n다르더라도 같은 조작 규칙을 따르도록 통합했습니다.\n\n## 사용자 경험\n\n위키 본문이나 ItemDB의 이미지를 누르면 현재 화면 최상단에 어두운 배경과 확대 이미지,\n설명 문구가 표시됩니다. 새 창이나 새 탭은 생성되지 않습니다. 확대된 이미지 자체는\n그대로 살펴볼 수 있고, 이미지 바깥 영역을 누르면 레이어가 사라집니다. 키보드 사용자는\n`Esc`로 닫을 수 있으며, 닫은 뒤에는 처음 눌렀던 이미지로 포커스가 돌아갑니다.\n\n레이어가 열린 동안에는 배경 스크롤을 잠가 문서가 실수로 움직이지 않게 했습니다.\n좁은 모바일 화면에서는 안전 여백 안에서 이미지 크기를 자동 조정하고 캡션을 이미지\n아래에 유지하므로 가로 스크롤 없이 같은 동작을 사용할 수 있습니다.\n\n## 핵심 원칙과 설계 철학\n\n### 탐색 맥락을 보존하는 확대\n\n이미지 확대는 새 목적지로 이동하는 링크가 아니라 현재 문서 위에 잠시 올리는 보기\n상태입니다. 따라서 주소와 스크롤 위치를 바꾸지 않고, 닫기 조작 후 사용자가 시작했던\n위치와 입력 초점을 복원하는 것을 기본 계약으로 삼았습니다.\n\n### 하나의 공용 상호작용\n\nMarkdown 증거 이미지와 생성형 ItemDB 이미지를 별도 구현으로 취급하지 않습니다.\n두 경로는 동일한 `data-image-viewer-*` 계약과 하나의 공용 레이어를 사용합니다. 새로운\n위키 이미지 유형이 추가되더라도 같은 안전 검사와 닫기 동작을 재사용할 수 있습니다.\n\n### 안전한 로컬 이미지 경계\n\n레이어는 위키의 버전별 `media`와 생성된 `item-media` 아래의 지원 이미지 형식만\n허용합니다. 상위 경로 이동, 외부 URL, 임의 쿼리는 거부하고 ItemDB가 사용하는 콘텐츠\n해시 쿼리만 허용해 확대 기능이 우회 링크가 되지 않도록 했습니다.\n\n### 정적 파일은 한 버전으로 로드\n\n브라우저가 새 애플리케이션 코드와 과거 이미지 렌더러를 섞어 사용하면 한 화면에서\n서로 다른 동작이 나타날 수 있습니다. 로컬 위키 서버는 모든 정적 응답을 `no-store`로\n제공하고, 이미지 뷰어에 함께 바뀐 핵심 CSS와 JavaScript에는 동일한 버전 키를 부여해\n한 번의 새로고침으로 일관된 화면을 받도록 했습니다.\n\n## 결정 사항과 범위\n\n- 본문 첨부 이미지와 ItemDB 목록 이미지에서 새 창 링크를 제거합니다.\n- 닫기 전용 `X` 버튼을 필수 조작으로 두지 않고 이미지 바깥 전체를 닫기 영역으로\n  사용합니다.\n- 접근성 보조 경로로 `Esc`, 포커스 유지와 복귀, 대화상자 의미 구조를 제공합니다.\n- 확대 중 배경 스크롤을 잠그고 데스크톱과 모바일에서 뷰포트 안에 이미지를 맞춥니다.\n- 공개 위키 바로가기처럼 실제 외부 페이지로 이동하는 링크는 이미지 확대 대상이\n  아니므로 기존 새 창 동작을 유지합니다.\n- 확대·축소 배율 조절, 회전, 다운로드와 이미지 편집은 단순한 빠른 확인이라는 이번\n  범위에 포함하지 않습니다.\n\n## 현재 결과\n\n월드 아트 문서의 세로형 플레이 화면이 문서 위 공용 레이어에 표시됩니다. 배경은\n어둡게 유지되어 이미지에 집중할 수 있고 바깥 전체가 즉시 닫기 영역입니다.\n\n![월드 아트 본문 이미지 레이어](./media/development-wiki/v011/world-art-image-viewer.jpg \"새 탭 없이 현재 문서 위에 표시된 월드 아트 증거 이미지\")\n\nItemDB에서도 동일한 레이어를 사용합니다. 390×844 모바일 화면에서 세로형 아이템\n이미지와 이름이 안전 여백 안에 표시되며 가로 넘침이 없습니다.\n\n![ItemDB 모바일 이미지 레이어](./media/development-wiki/v011/itemdb-image-viewer-mobile.jpg \"390×844 화면에서 확대된 산성가시 뿌리창과 바깥 닫기 영역\")\n\n## 구현 참고\n\n`markdown-media.js`는 Markdown 이미지 링크를 확대 버튼으로 렌더링하고, 위키 미디어와\nItemDB 미디어 경로를 검증하는 순수 함수를 제공합니다. `app.js`는 이벤트 위임으로 두\n종류의 이미지 버튼을 하나의 레이어에 연결하며 열기, 바깥 클릭, `Esc`, 포커스 복귀와\n배경 스크롤 상태를 관리합니다.\n\n`index.html`은 공용 대화상자 구조와 핵심 정적 파일 버전 키를 소유하고, `app.css`는\n최상단 레이어, 이미지 크기 제한, 모바일 안전 여백과 확대 커서를 정의합니다.\n`tools/wiki.py`의 로컬 정적 서버는 캐시 금지 응답 헤더를 모든 파일에 적용합니다.\n\n## 검증\n\n- `world-art-bible`의 본문에서 새 창 이미지 링크가 0개이고 확대 버튼이 표시됨을\n  확인했습니다. 이미지를 눌러도 브라우저 탭 수는 증가하지 않았습니다.\n- ItemDB의 100개 이미지가 모두 같은 확대 버튼 계약을 사용하고, 첫 아이템을 눌렀을\n  때 이미지와 이름이 레이어에 표시됨을 확인했습니다.\n- 이미지 바깥 클릭과 `Esc` 닫기, 배경 스크롤 잠금, 원래 버튼으로 포커스 복귀를\n  확인했습니다.\n- 1280×720과 390×844 화면에서 대표 이미지를 확인했고 모바일 가로 넘침은 없었습니다.\n- 로컬 서버의 HTML과 JavaScript 응답에 `Cache-Control: no-store, max-age=0`이\n  포함됨을 확인했습니다.\n- JavaScript 구문·단위 테스트, ItemDB 검사, 위키 생성·무결성 검사와 저장소 정책\n  테스트를 통과했습니다.\n\n## 후속 기획\n\n향후 확대 이미지가 지도나 세부 설계도처럼 실제 줌 조작을 필요로 할 정도로 복잡해지면\n핀치 줌과 이동을 별도 기능으로 검토합니다. 그 전까지는 한 번 눌러 크게 보고 바깥을\n눌러 돌아오는 단순한 상호작용을 유지합니다.\n",
          "source_path": "wiki/content/pages/development-wiki/v011.md",
          "timeline_order": 27
        },
        {
          "id": "development-wiki",
          "title": "개발 위키와 변경 이력 시스템",
          "summary": "PackBound의 모든 불변 위키 버전을 하나의 시간순 타임라인에서 최신순과 가장 오래된순으로 전환하고, 각 버전을 독립 기록으로 바로 열 수 있게 했습니다.",
          "status": "active",
          "category": "tooling",
          "tags": [
            "documentation",
            "wiki",
            "tooling",
            "timeline",
            "navigation",
            "history",
            "responsive"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-13",
          "authors": [
            "Codex"
          ],
          "version": 10,
          "change_type": "updated",
          "change_summary": "주제별 문서 트리만으로는 보기 어려웠던 프로젝트의 전체 변화 순서를 모든 버전이 독립된 타임라인 항목으로 보이게 하고, 최신순과 가장 오래된순을 즉시 전환하도록 개선했습니다.",
          "supersedes": "development-wiki@v009",
          "sources": [
            "wiki/site/index.html",
            "wiki/site/app.js",
            "wiki/site/app.css",
            "wiki/site/wiki-timeline.js",
            "tests/wiki-timeline.spec.js",
            "wiki/content/media/development-wiki/v010/timeline-latest-desktop.jpg",
            "wiki/content/media/development-wiki/v010/timeline-oldest-mobile.jpg"
          ],
          "related": [
            "project-overview",
            "studio-automation-routing"
          ],
          "validation": [
            "node --check wiki/site/wiki-timeline.js",
            "node --check wiki/site/app.js",
            "node tests/wiki-timeline.spec.js",
            "python3 -m unittest tests.test_wiki tests.test_publish_public_wiki",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "python3 -m unittest tests/test_wiki.py",
            "python3 -m unittest tests.test_repository_policy",
            "인앱 브라우저 1440×1000: 전체 버전 최신순 목록, 버전별 링크와 가로 넘침 없음 확인",
            "인앱 브라우저 390×844: 가장 오래된순 전환, 42px 정렬 버튼과 가로 넘침 없음 확인",
            "인앱 브라우저 콘솔 경고·오류 0건",
            "git diff --check"
          ],
          "body": "# 개발 위키와 변경 이력 시스템\n\n## 기획 배경과 목표\n\nPackBound 위키는 기획과 구현 결정을 버전별 불변 문서로 보존하지만, 기존 전체 위키\n트리는 주제와 카테고리 구조를 이해하는 데 집중했습니다. 한 문서의 과거 버전은 그\n문서 아래에 모여 있어 프로젝트 전체에서 무엇이 먼저 결정되었고 최근에는 어떤 변화가\n이어졌는지 시간의 흐름으로 파악하려면 여러 문서를 차례로 열어야 했습니다.\n\n이번 변경의 목표는 위키를 문서 보관소에서 프로젝트의 연속된 기억을 읽는 도구로\n확장하는 것입니다. 최신 의사결정을 빠르게 훑는 사용자와 프로젝트의 출발점부터 맥락을\n복원하는 사용자가 같은 화면에서 각자의 방향으로 기록을 읽을 수 있어야 합니다. 이때\n논리 페이지의 최신본만 나열하지 않고 `v001`, `v002` 같은 모든 불변 버전을 독립된\n탐색 단위로 취급하는 것을 핵심 제품 규칙으로 삼았습니다.\n\n## 사용자 경험\n\n전체 위키 트리 상단에는 모든 문서 버전을 한 줄씩 펼친 `전체 버전 타임라인`이\n표시됩니다. 기본값은 최신순이어서 최근 결정부터 바로 확인할 수 있고, `가장 오래된순`\n버튼을 누르면 프로젝트의 최초 기록부터 순서대로 읽을 수 있습니다. 선택한 정렬은\n주소의 `sort` 값에 남으므로 새로고침하거나 링크를 공유해도 같은 관점을 복원합니다.\n\n각 항목은 시각, 문서 제목, 버전, 변경 요약, 카테고리, 변경 유형과 작성자를 함께\n보여 줍니다. 항목을 선택하면 그 논리 페이지의 최신본이 아니라 목록에 표시된 정확한\n버전으로 이동합니다. 기존 카테고리 트리는 타임라인 아래에 그대로 유지해 주제 중심\n탐색과 시간 중심 탐색이 서로 대체되지 않고 보완하도록 했습니다.\n\n## 핵심 원칙과 설계 철학\n\n### 불변 버전이 탐색의 기본 단위\n\n같은 페이지의 여러 버전은 하나로 합치지 않습니다. 모든 `revisions` 항목을 펼쳐\n보여 줌으로써 과거 결정이 최신 요약 뒤에 숨지 않으며, 목록 항목과 실제 Markdown\n버전 사이에 일대일 이동 경로를 유지합니다.\n\n### 시간 순서는 원본 메타데이터가 결정\n\n정렬은 각 버전의 `updated_at`을 기준으로 계산합니다. 동일한 시각에는 문서 ID와\n버전을 이용해 결과가 매번 흔들리지 않도록 안정적인 순서를 제공합니다. 공개 미러의\n날짜 단위 개인정보 정책은 그대로 유지하고, 로컬 위키에서만 정확한 시각을 표시하는\n기존 경계도 바꾸지 않았습니다.\n\n### 기존 정보 구조와 반응형 품질 보존\n\n시간순 목록은 카테고리 트리, 검색, 태그 탐색과 경쟁하는 새 최상위 화면이 아니라\n전체 트리 안의 보완 탐색 계층입니다. 데스크톱에서는 날짜와 문서 요약을 빠르게 훑을\n수 있는 가로 행으로, 모바일에서는 날짜와 본문을 세로로 재배치하고 정렬 버튼을 42px\n높이로 확장해 좁은 화면에서도 넘침 없이 터치할 수 있게 했습니다.\n\n## 결정 사항과 범위\n\n- 전체 문서의 최신본만이 아니라 모든 버전을 시간순 목록에 포함합니다.\n- 기본 정렬은 최근 변경을 빠르게 확인하는 최신순으로 둡니다.\n- 정렬 상태는 URL에 저장하되 별도의 사용자 설정이나 로컬 저장소는 만들지 않습니다.\n- 기존 카테고리 트리와 펼치기·접기 기능은 유지합니다.\n- 현재 33개 버전 규모에서는 전체 목록을 한 번에 보여 주며, 페이지네이션이나 추가\n  필터는 이번 범위에 포함하지 않습니다.\n\n## 현재 결과\n\n데스크톱에서는 최신순 타임라인이 현황 카드 바로 아래에 놓여 최근 변경과 버전 번호를\n한 화면에서 비교할 수 있습니다.\n\n![전체 버전 최신순 데스크톱 결과](./media/development-wiki/v010/timeline-latest-desktop.jpg \"전체 33개 불변 버전을 최신순으로 펼친 데스크톱 위키 트리\")\n\n모바일에서는 정렬 조작을 전체 너비 터치 영역으로 전환하고, 가장 오래된 기록부터\n제목·버전·변경 요약을 세로 흐름으로 읽을 수 있습니다.\n\n![전체 버전 가장 오래된순 모바일 결과](./media/development-wiki/v010/timeline-oldest-mobile.jpg \"가장 오래된순 선택과 초기 v001 기록을 보여 주는 390×844 모바일 위키\")\n\n## 구현 참고\n\n`wiki-timeline.js`는 페이지 배열의 `revisions`를 독립 항목으로 펼치고 정렬하는 순수\n모듈입니다. `app.js`는 트리 경로의 `sort` 값을 정규화하고 타임라인 항목을 정확한\n`?version=` 문서 링크로 렌더링합니다. 이 분리 덕분에 정렬 계약은 브라우저 UI와\n독립적으로 단위 테스트할 수 있습니다.\n\n`index.html`은 정렬 모듈을 위키 애플리케이션보다 먼저 로드하며, `app.css`는 데스크톱\n타임라인과 모바일 재배치·터치 크기를 소유합니다. 위키 생성기의 데이터 계약은 이미\n모든 버전과 타임스탬프를 제공하므로 변경하지 않았습니다.\n\n## 검증\n\n- 정렬 단위 테스트에서 최신순과 가장 오래된순의 양 끝 항목 및 전체 버전 보존을\n  확인했습니다.\n- 위키 생성과 무결성 검사에서 7개 논리 페이지, 33개 불변 버전과 버전별 미디어\n  동기화를 확인했습니다.\n- 1440×1000 데스크톱에서 최신순 기본값, 전체 항목 수와 버전 링크를 확인했습니다.\n- 390×844 모바일에서 가장 오래된순 선택, 42px 정렬 버튼, 가로 넘침 없음과 초기\n  `v001` 항목 노출을 확인했습니다.\n- 과거 버전 항목을 선택했을 때 정확한 버전 문서와 최신본 안내가 표시됨을 확인했습니다.\n- 브라우저 콘솔 경고와 오류는 없었습니다.\n\n## 후속 기획\n\n버전 수가 한 화면에서 훑기 어려울 정도로 증가하면 연도·월 그룹, 날짜 범위 또는\n카테고리 필터를 검토합니다. 그 전까지는 모든 불변 버전을 숨김없이 한 목록에 보여\n주는 단순한 계약을 유지합니다.\n",
          "source_path": "wiki/content/pages/development-wiki/v010.md",
          "timeline_order": 25
        },
        {
          "id": "development-wiki",
          "title": "개발 위키와 변경 이력 시스템",
          "summary": "PackBound의 개발 흐름을 Studio MCP와 저장소 정적 검증으로 단순화하고, 위키에서 더 이상 사용하지 않는 동기화 서버 제어와 설정 경로를 제거했습니다.",
          "status": "active",
          "category": "tooling",
          "tags": [
            "documentation",
            "wiki",
            "tooling",
            "studio-mcp",
            "validation",
            "cleanup",
            "reliability"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-12",
          "authors": [
            "Codex"
          ],
          "version": 9,
          "change_type": "updated",
          "change_summary": "라이브 Studio 작업은 Studio MCP, 정적 검증은 Luau와 저장소 테스트가 소유하도록 운영 경계를 확정하고, 개발 위키의 불필요한 서버 제어 기능과 재유입 가능성을 제거했습니다.",
          "supersedes": "development-wiki@v008",
          "sources": [
            "AGENTS.md",
            "README.md",
            "rokit.toml",
            "tools/wiki.py",
            "wiki/site/index.html",
            "wiki/site/app.js",
            "wiki/site/app.css",
            "wiki/site/local-access.js",
            "tests/test_repository_policy.py",
            "wiki/content/media/development-wiki/v009/local-wiki-header.jpg"
          ],
          "related": [
            "project-overview",
            "studio-automation-routing"
          ],
          "validation": [
            "rokit install",
            "python3 -m unittest tests.test_repository_policy tests.test_wiki",
            "node tests/local-access.spec.js",
            "node --check wiki/site/app.js",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "로컬 HTTP 스모크 테스트: ItemDB 상태 API 200, 폐기된 제어 API 404",
            "인앱 브라우저: 로컬 개발 위키 상단 구성 확인, 콘솔 경고·오류 0건",
            "git diff --check"
          ],
          "body": "# 개발 위키와 변경 이력 시스템\n\n## 기획 배경과 운영 목표\n\nPackBound는 라이브 Roblox Studio 상태와 저장소 소스를 서로 다른 책임으로 관리합니다.\n플레이스의 실제 DataModel을 확인하고 바꾸는 작업은 Studio MCP가 소유하고, 저장소의\nLuau 파일과 테스트 스크립트는 소스 작성과 정적 검증을 소유합니다. 개발자가 별도의\n동기화 서버, 포트 또는 플레이스 빌드 파일을 기억해야 하는 이중 운영은 현재 프로젝트의\n작업 방식과 맞지 않습니다.\n\n이번 정리의 목표는 단순한 파일 삭제가 아니라 앞으로의 판단 기준을 하나로 만드는\n것입니다. 사람과 에이전트는 라이브 상태를 말할 때 Studio MCP 근거를 사용하고, 저장소\n변경의 건전성은 Luau 컴파일과 도메인 테스트로 증명합니다. 위키는 이 경계를 설명하고\n개발 기록을 탐색하는 도구이며 외부 프로세스 실행기가 아닙니다.\n\n## 사용자와 운영자 경험\n\n로컬 개발 위키 상단은 이제 문서 검색과 기록 동기화 상태에 집중합니다. 사용하지 않는\n플레이스 선택, 포트 상태, 서버 시작·중지 조작이 사라져 실제 개발 경로와 화면이 일치합니다.\nItemDB 편집은 계속 loopback 호스트에서만 제공되고 공개 미러는 읽기 전용이므로, 기존의\n콘텐츠 편집 경험과 공개 보안 경계는 유지됩니다.\n\n![개발 위키 최종 상단](./media/development-wiki/v009/local-wiki-header.jpg \"문서 검색과 기록 상태만 남긴 로컬 개발 위키의 최종 상단\")\n\n## 핵심 원칙과 설계 철학\n\n### 라이브 상태의 단일 권위\n\nStudio 발견, DataModel 검사와 변경, Play 모드, 콘솔, 스크린샷과 런타임 검증은 Studio\nMCP를 첫 번째이자 권위 있는 경로로 사용합니다. 저장소 파일만 보고 라이브 플레이스가\n같다고 추정하지 않으며, 라이브 결과를 주장할 때는 Studio MCP 증거를 남깁니다.\n\n### 저장소 정적 검증의 독립성\n\nLuau 모듈은 컴파일러와 저장소 테스트 스크립트로 직접 검증합니다. 정적 검사에 전체\n플레이스 파일 생성을 요구하지 않으므로, 테스트 실패가 게임 로직 문제인지 개발 환경\n동기화 문제인지 혼동하지 않습니다. `rokit` 도구 선언도 현재 필요한 Luau 버전만 소유합니다.\n\n### 재유입을 실패로 처리\n\n운영 문구만 바꾸고 끝내면 오래된 예제나 설정이 다시 복사될 수 있습니다. 저장소 정책\n테스트는 불변 위키 이력을 제외한 활성 파일의 내용과 이름을 검사하고, 폐기한 동기화 도구,\n프로젝트 매핑 또는 관련 파일명이 돌아오면 실패합니다. 이 검사는 일반 개발 명령과 커밋\n시점 위키 검증에 모두 포함됩니다.\n\n## 결정 사항과 범위\n\n- 프로젝트 매핑과 전용 실행 스크립트는 현재 개발 경로가 아니므로 삭제했습니다.\n- 개발 위키의 프로세스 관리자, 상태·시작·중지 API, 상단 제어 UI와 반응형 스타일을\n  제거했습니다.\n- 로컬 호스트 판정은 ItemDB 편집과 정확한 시간 표시라는 현재 책임만 표현하도록\n  일반화했습니다.\n- README, 에이전트 지침과 프로젝트 작업 문서는 Studio MCP와 Luau 검증만 안내합니다.\n- 커밋된 과거 위키 버전은 당시의 사실을 보존하는 불변 기록이므로 수정하지 않습니다.\n  최신 버전이 현재 운영 계약을 명확히 대체합니다.\n- Studio 전역 플러그인 설치 상태는 플레이스나 저장소가 소유하지 않으므로 프로젝트\n  정리 범위에 포함하지 않습니다.\n\n## 현재 결과와 구현 참고\n\n`tools/wiki.py`의 로컬 서버는 정적 위키 제공과 ItemDB 상태·저장 API만 담당합니다.\n프로세스 탐색, 외부 포트 판정, 하위 프로세스 수명주기 코드는 존재하지 않습니다.\n브라우저의 `index.html`, `app.js`, `app.css`도 같은 책임 축소를 반영해 불필요한 DOM,\n폴링, 이벤트와 모바일 보조 행을 제거했습니다.\n\n`AGENTS.md`와 `README.md`는 저장소 Luau를 소스 작성 경로로, Studio MCP를 라이브\n조작 경로로 선언합니다. `tests/test_repository_policy.py`는 활성 저장소 전반을 검사하며,\n커밋 스킬도 이 테스트를 필수 검증으로 실행합니다.\n\n## 검증\n\n위키와 저장소 정책 Python 테스트 6개, 로컬 접근 Node 테스트와 JavaScript 구문 검사를\n통과했습니다. 커밋 스냅샷의 위키 최신성 검사에서는 7개 문서, 31개 리비전,\nItemDB 30개 아이템과 CombatDB 178개 레코드를 확인했습니다. 로컬 서버에서 ItemDB\n상태 API는 정상 응답하고 폐기된 제어 경로는 404를 반환했습니다.\n\n인앱 브라우저에서는 최종 상단 구성, 문서·DB 탐색과 공개 페이지 링크를 확인했으며\n콘솔 경고와 오류는 없었습니다. Studio MCP로 프로젝트가 소유하는 Workspace,\nReplicatedStorage, ServerScriptService, StarterGui와 StarterPlayer를 검색했을 때\n폐기한 통합 이름의 인스턴스는 발견되지 않았습니다. 기존 모바일 핵심 속성인 세로 화면과\n스크립트형 터치 이동 모드도 유지됐습니다.\n\n## 후속 기획\n\n새 개발 도구가 필요해지면 먼저 Studio MCP와 저장소 테스트가 제공하지 못하는 구체적인\n역할을 정의해야 합니다. 단순한 편의나 이전 프로젝트와의 관성만으로 별도 동기화 계층을\n추가하지 않으며, 운영 경계가 바뀌면 구현과 같은 커밋에서 지침·검증·위키를 함께 갱신합니다.\n",
          "source_path": "wiki/content/pages/development-wiki/v009.md",
          "timeline_order": 23
        },
        {
          "id": "development-wiki",
          "title": "개발 위키와 변경 이력 시스템",
          "summary": "공개 미러 푸시와 실제 GitHub Pages 노출을 분리해 검증하고, 실패 자동 재시도와 원본 리비전 대조를 거쳐야 발행 성공으로 판정하도록 강화했습니다.",
          "status": "active",
          "category": "tooling",
          "tags": [
            "documentation",
            "wiki",
            "publishing",
            "reliability",
            "github-pages"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-07",
          "authors": [
            "Codex"
          ],
          "version": 8,
          "change_type": "updated",
          "change_summary": "공개 저장소 동기화만으로 발행 완료를 선언하던 구조를 폐기하고, Pages 실행 성공과 실제 공개 URL의 원본 리비전 일치까지 확인하는 실패 폐쇄형 발행 게이트를 추가했습니다.",
          "supersedes": "development-wiki@v007",
          "sources": [
            "tools/publish_public_wiki.py",
            "wiki/public-publishing.json",
            "tests/test_publish_public_wiki.py"
          ],
          "related": [
            "project-overview"
          ],
          "validation": [
            "python3 -m unittest tests.test_publish_public_wiki",
            "python3 tools/publish_public_wiki.py --check",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "python3 -m unittest tests.test_publish_public_wiki tests.test_wiki",
            "node tests/markdown-media.spec.js",
            "node --test tests/local-access.spec.js",
            "GitHub API: github-pages 환경 재생성 후 main 브랜치 정책 확인",
            "git diff --check"
          ],
          "body": "# 개발 위키와 변경 이력 시스템\n\n## 운영 목표와 독자 경험\n\n공개 위키의 발행 완료는 파일을 공개 저장소에 복사했다는 뜻이 아니라, 독자가 여는 주소에서\n그 파일을 실제로 읽을 수 있다는 뜻이어야 합니다. 이번 장애에서는 원본 위키와 공개 미러가\n모두 최신이었지만 GitHub Pages 배포가 완료되지 않아 독자는 이전 화면을 계속 보았습니다.\n그럼에도 기존 도구가 푸시 직후 성공을 반환해 문제를 캐시 지연으로 오인하게 만들었습니다.\n\n운영 목표를 “미러 동기화”에서 “검증 가능한 공개”로 다시 정의했습니다. 앞으로 발행 명령은\n최신 버전이 실제 공개 URL에 나타날 때까지 끝나지 않으며, 중간 단계가 실패하면 성공 문구를\n출력하지 않습니다. 독자는 별도 새로고침 요령이나 캐시 대기 추측 없이 하나의 공식 주소에서\n최신 문서와 PackBound 테마를 보게 됩니다.\n\n## 장애 원인과 판단\n\n장애 당시 원본 커밋 `b887da5d89d0`과 공개 미러 커밋 `ed94371d611a`에는 7개 문서, 22개\n리비전과 새 테마 자산이 정상 반영돼 있었습니다. 그러나 Pages 실행의 빌드와 상태 보고 작업만\n성공했고, 배포 작업은 `deployment_queued`에서 10분 동안 전진하지 못한 뒤 타임아웃으로\n취소됐습니다. Pages 상태도 `errored`였으므로 CDN 캐시가 늦게 갱신된 상황이 아니었습니다.\n\n직접 원인은 GitHub Pages 배포 큐의 실패였고, 프로젝트 측 재발 원인은 그 실패를 감지하지\n않는 완료 조건이었습니다. 기존 발행기는 공개 저장소의 `git push`가 성공하면 즉시 “Published”를\n출력했습니다. 저장소, Actions, Pages와 실제 URL이라는 네 상태가 서로 다를 수 있는데 첫 번째\n경계까지만 확인한 것이 문제였습니다.\n\n## 발행 신뢰성 원칙과 결정\n\n### 공개 리비전 계약\n\n공개 미러 루트에 `deployment.json`을 생성하고 원본 ProjectBackpack 커밋 SHA를\n`source_revision`으로 기록합니다. 정확한 작업 시각이나 비공개 저장소 내용은 넣지 않아 기존\n공개 정보 최소화 원칙을 유지합니다. 캐시 무효화 쿼리와 `no-cache` 요청을 함께 사용하므로\n발행기는 오래된 응답을 최신 결과로 오인하지 않습니다.\n\n### 단계별 실패 폐쇄\n\n발행 흐름은 다음 순서를 모두 통과해야 합니다.\n\n1. 원본 위키 빌드와 공개용 시간 정보 제거 규칙을 검사합니다.\n2. 공개 미러를 갱신하고 그 미러의 정확한 커밋 SHA를 확정합니다.\n3. 같은 공개 SHA로 생성된 `pages build and deployment` 실행을 찾습니다.\n4. 워크플로가 `success`로 끝날 때까지 제한 시간 안에서 기다립니다.\n5. 실패하면 내용은 유지한 새 공개 커밋으로 배포 버전을 바꿔 한 번 재시도합니다.\n6. 공개 URL의 `deployment.json`이 원본 SHA와 정확히 일치하는지 확인합니다.\n\n어느 단계든 실패하거나 제한 시간을 넘으면 예외로 종료합니다. 따라서 “푸시는 됐지만 사이트는\n옛 버전”인 상태를 발행 성공으로 보고할 수 없습니다.\n\n### Pages 전용 재시도\n\nGitHub가 자동 생성하는 Pages 워크플로는 공개 커밋 SHA를 배포 버전으로 사용합니다. 실패한\nSHA를 일반 Actions 재실행이나 Pages 빌드 API로 반복 요청하면 새 실행이 생겨도 같은 배포\n버전이 취소될 수 있음을 복구 과정에서 확인했습니다. 따라서 재시도는 공개 콘텐츠를 바꾸지\n않는 빈 커밋을 만들고, 그 새 SHA로 생성된 실행만 추적합니다. 정상 발행 이력은 결정적인\n콘텐츠 커밋으로 유지하면서 장애 복구 때만 새 배포 버전을 부여합니다.\n\n## 구현과 운영 기준\n\n발행 설정은 Pages 실행 15분 대기, 5초 폴링, 실패 시 1회 재요청, 공개 URL 반영 5분 대기를\n명시합니다. 이 값들은 GitHub의 10분 배포 타임아웃보다 길어 플랫폼이 최종 실패 상태를 기록할\n시간을 주면서도 무한 대기를 막습니다. 동일 내용이라 새 미러 커밋이 생기지 않는 경우에도 기존\n공개 SHA의 배포 상태와 실제 리비전을 다시 검사합니다.\n\n단위 테스트는 GitHub 저장소 주소 해석, 공개 리비전 표식 생성, Pages 성공 필수 조건, 실패\n폐쇄, 새 공개 SHA 기반 자동 재시도, 최신·오래된 공개 리비전 판별을 다룹니다. 기존 공개 시간\n정보 제거 테스트도 함께 유지해 신뢰성 개선이 개인정보 노출 방지 규칙을 우회하지 않게 했습니다.\n\n## 검증과 후속 운영\n\n정적 검사에서는 공개 트리와 설정이 유효하고 7개 문서, 23개 리비전이 빌드되는지 확인했습니다.\n종단간 발행에서는 공개 미러 커밋, 해당 SHA의 Pages 실행 성공, 공개 `deployment.json`의 원본\nSHA 일치를 순서대로 확인합니다. 마지막으로 실제 공개 브라우저에서 PackBound 히어로와\n스코티시 폴드 비네트, 전체 문서 트리와 콘솔 상태를 점검합니다.\n\n후속 발행에서도 성공 로그만 보지 않고 반환 코드가 성공인지 확인해야 합니다. 실패 메시지에는\n워크플로 실행 ID, 결론과 URL 또는 마지막으로 관측한 공개 리비전이 포함되므로, 캐시 추측 대신\n미러·Actions·Pages·실제 응답 중 어느 경계가 멈췄는지 바로 조사할 수 있습니다.\n",
          "source_path": "wiki/content/pages/development-wiki/v008.md",
          "timeline_order": 16
        },
        {
          "id": "development-wiki",
          "title": "개발 위키와 변경 이력 시스템",
          "summary": "문서 가독성을 보존하면서 PackBound 전용 히어로, 브랜드 엠블럼과 스코티시 폴드 사이드바 비네트를 데스크톱·모바일 위키에 적용했습니다.",
          "status": "active",
          "category": "tooling",
          "tags": [
            "documentation",
            "wiki",
            "visual-design",
            "responsive",
            "concept-art",
            "mobile"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-06",
          "authors": [
            "Codex"
          ],
          "version": 7,
          "change_type": "updated",
          "change_summary": "게임 아트를 통제된 세 영역에 배치해 위키를 PackBound 전용 페이지로 브랜딩하고, 긴 경로와 초광폭 아트가 PC·모바일에서 넘치지 않도록 반응형 레이아웃을 보강했습니다.",
          "supersedes": "development-wiki@v006",
          "sources": [
            "wiki/site/index.html",
            "wiki/site/app.css",
            "wiki/site/app.js",
            "wiki/site/theme/README.md",
            "wiki/site/theme/packbound-wiki-hero.webp",
            "wiki/site/theme/packbound-sidebar-vignette.webp",
            "wiki/site/theme/packbound-brand-emblem.webp",
            "wiki/content/media/development-wiki/v007/wiki-theme-hero-concept.webp",
            "wiki/content/media/development-wiki/v007/wiki-themed-desktop-result.png",
            "wiki/content/media/development-wiki/v007/wiki-themed-mobile-result.png"
          ],
          "related": [
            "world-art-bible",
            "project-overview"
          ],
          "validation": [
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "python3 -m unittest tests/test_wiki.py",
            "node tests/markdown-media.spec.js",
            "node --test tests/local-access.spec.js",
            "python3 tools/publish_public_wiki.py --check",
            "브라우저 1440×900 데스크톱: 트리 히어로·브랜드·사이드바 비네트, 가로 넘침 없음",
            "브라우저 390×844 모바일 세로: 문서 히어로 크롭·제목·본문·탭, 가로 넘침 없음",
            "브라우저 844×390 모바일 가로 스트레스: 히어로·사이드바·본문 진입, 가로 넘침 없음",
            "브라우저 콘솔 error/warning 0건",
            "git diff --check"
          ],
          "body": "# 개발 위키와 변경 이력 시스템\n\n## 기획 배경과 목표\n\nPackBound 위키는 개발 기록을 읽는 도구이면서 게임의 방향을 처음 접하는 입구입니다.\n기존 화면은 문서 구조가 분명했지만 일반적인 다크 테마 문서 사이트에 가까워 캐릭터,\n폐품 세계와 장난스러운 분위기를 전달하지 못했습니다. 이번 변경의 목표는 본문을 그림으로\n뒤덮지 않고도 어느 화면에서든 PackBound의 페이지라는 인상을 즉시 주는 것입니다.\n\n이를 위해 아트를 많이 넣는 대신 시선이 원래 멈추는 브랜드 표식, 문서·트리의 첫 화면,\n사이드바 끝이라는 세 영역만 전용 이미지 슬롯으로 정했습니다. 아트 바이블의 여성형 루키,\n고물바람 초원과 폐품 몬스터를 재사용하고, 뚱냥이 장식은 낮게 접힌 귀와 반쯤 감긴 눈,\n작게 심술 난 입을 가진 스코티시 폴드로 통일했습니다.\n\n## 플레이어와 독자 경험\n\n- 위키를 열자마자 가방, 남녀 루키, 고물바람 초원과 몬스터가 PackBound의 세계를 설명합니다.\n- 문서 제목과 요약은 어두운 여백 위에 남아 아트와 겹쳐도 먼저 읽힙니다.\n- 본문과 증거 이미지는 기존 폭과 계층을 유지해 장시간 읽을 때 장식이 방해하지 않습니다.\n- 휴대폰에서는 같은 초광폭 이미지를 단순 축소하지 않고 캐릭터 중심으로 자르고, 설명은\n  하단 그라데이션 위로 재배치합니다.\n- 스코티시 폴드 참은 무심하고 조금 고약한 표정이지만 둥근 볼과 작은 입으로 귀여움을\n  잃지 않으며, 엠블럼·히어로·사이드바에서 같은 디자인으로 보입니다.\n\n## 디자인 원칙과 결정\n\n### 통제된 세 개의 아트 영역\n\n상단 브랜드 엠블럼은 34–36px에서도 가방과 고양이 실루엣이 읽히는 정사각형으로 만들고,\n사이드바 비네트는 상태 문구가 놓이는 왼쪽을 어둡게 비웠습니다. 문서와 전체 트리는 같은\n3:1 키아트를 공유해 새 페이지마다 임의의 배경을 추가하지 않아도 시각적 연속성을 유지합니다.\n\n![PackBound 위키 초광폭 히어로 원화](./media/development-wiki/v007/wiki-theme-hero-concept.webp \"왼쪽 문구 여백과 오른쪽 캐릭터·필드 앙상블을 함께 설계한 2172×724 히어로 이미지\")\n\n### 읽기 표면과 장식 표면의 분리\n\n아트는 페이지 헤더 밖으로 번지지 않습니다. 본문, 표, 이력 비교와 메타 정보는 기존의 단색\n패널과 명도 대비를 유지합니다. 제목과 요약에는 방향성 그라데이션을 적용하고 한국어 단어\n중간이 임의로 끊기지 않도록 줄바꿈 규칙을 보강했습니다. 긴 자산 경로는 메타 패널 안에서\n줄바꿈해 데스크톱 전체에 가로 스크롤을 만들지 않습니다.\n\n### 크롭 가능한 원본 계약\n\n히어로는 2172×724, 사이드바는 940×418, 엠블럼은 256×256 WebP로 고정했습니다. 히어로의\n왼쪽은 제목용 음영, 중앙·오른쪽은 캐릭터와 랜드마크를 배치해 데스크톱과 모바일이 서로 다른\n영역을 잘라도 핵심 정보가 남습니다. 구체적인 크롭과 재생성 기준은 테마 README에 기록해\n후속 이미지가 현재 레이아웃을 우연히 깨뜨리지 않게 했습니다.\n\n## 최종 결과\n\n![PackBound 위키 데스크톱 최종 화면](./media/development-wiki/v007/wiki-themed-desktop-result.png \"1440×900에서 브랜드 엠블럼, 전체 트리 히어로와 스코티시 폴드 사이드바 비네트가 적용된 최종 화면\")\n\n데스크톱에서는 272px 사이드바와 넓은 히어로가 동시에 보이고, 제목은 왼쪽 음영 영역에서\n한 덩어리로 읽힙니다. 캐릭터와 필드 랜드마크는 오른쪽에 남아 문서 구조와 경쟁하지 않습니다.\n\n![PackBound 위키 모바일 최종 화면](./media/development-wiki/v007/wiki-themed-mobile-result.png \"390×844에서 캐릭터 중심으로 크롭되고 제목·요약이 하단 그라데이션 위에 재배치된 아트 바이블 화면\")\n\n모바일 세로에서는 히어로 높이를 확보하고 이미지 초점을 캐릭터 쪽으로 옮겼습니다. 제목,\n요약과 버전 정보는 하단에 쌓이며 가로 넘침 없이 본문으로 이어집니다. 844×390 가로 화면도\n별도로 확인해 짧은 높이에서 상단, 사이드바와 히어로가 잘리지 않고 스크롤로 접근 가능하게\n유지했습니다.\n\n## 구현과 운영 참고\n\n`index.html`은 CSS 도형 대신 실제 브랜드 엠블럼을 사용하고 사이드바 상태 영역에 장식\n이미지를 추가합니다. `app.js`는 전체 트리와 모든 문서의 헤더를 공통 히어로 컴포지션으로\n렌더링합니다. `app.css`는 데스크톱 2열 문서, 중간 폭 1열 메타 정보, 모바일 하단 텍스트\n오버레이를 각각 정의하며 소스 경로와 표의 넘침을 제한합니다.\n\n테마 이미지는 장식이므로 빈 대체 텍스트를 사용합니다. 페이지 내용의 콘셉트 원화는 기존처럼\n의미 있는 캡션과 함께 위키 미디어 파이프라인을 거칩니다. 따라서 시각 장식과 개발 증거의\n접근성·버전 책임이 섞이지 않습니다.\n\n## 검증과 후속 작업\n\n정적 빌드와 미디어 동기화 검사, 위키 단위 테스트, 로컬 접근 제어 테스트와 공개 배포 사전\n검사를 실행했습니다. 실제 브라우저에서는 데스크톱 1440×900, 모바일 세로 390×844,\n모바일 가로 844×390을 확인했으며 가로 넘침과 콘솔 오류가 없었습니다.\n\n후속 테마 변경은 세 슬롯의 크롭 계약을 먼저 유지해야 합니다. 필드나 플레이어의 기준 디자인이\n바뀌면 아트 바이블에 새 버전을 추가한 뒤 테마 원본을 갱신하고, 같은 세 화면 크기에서 다시\n검증합니다.\n",
          "source_path": "wiki/content/pages/development-wiki/v007.md",
          "timeline_order": 15
        },
        {
          "id": "development-wiki",
          "title": "개발 위키와 변경 이력 시스템",
          "summary": "공개 위키는 화면뿐 아니라 배포 데이터에서도 작업 시각을 제거하고 날짜만 전달하며, 로컬 원본은 정확한 이력을 유지합니다.",
          "status": "active",
          "category": "tooling",
          "tags": [
            "documentation",
            "wiki",
            "privacy",
            "public-hosting",
            "security"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-06",
          "authors": [
            "Codex"
          ],
          "version": 6,
          "change_type": "corrected",
          "change_summary": "공개 화면에서만 시각을 숨기던 정책을 보강해 공개 정적 파일의 ISO 타임스탬프도 날짜로 축약하고, 정확한 시각이 남으면 배포를 중단하도록 했습니다.",
          "supersedes": "development-wiki@v005",
          "sources": [
            "tools/publish_public_wiki.py",
            "wiki/site/local-access.js",
            "wiki/site/app.js",
            "tests/test_publish_public_wiki.py",
            "tests/local-access.spec.js",
            "wiki/content/media/development-wiki/v006/public-date-only-result.jpg"
          ],
          "related": [
            "inventory-item-concept",
            "project-overview"
          ],
          "validation": [
            "python3 -m unittest tests.test_publish_public_wiki tests.test_wiki",
            "node --test tests/local-access.spec.js",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "python3 tools/publish_public_wiki.py --check",
            "공개 배포본의 data.js와 combat-db-data.js에 시·분·초·시간대가 남지 않는지 검사",
            "공개 호스트 미리보기에서 생성·변경 정보가 날짜로만 표시되고 Rojo 제어와 ItemDB Edit가 숨겨지는지 브라우저 확인",
            "git diff --check"
          ],
          "body": "# 개발 위키와 변경 이력 시스템\n\n## 기획 배경과 목표\n\n공개 위키의 목적은 팀이 개발 결과와 기획 흐름을 함께 이해하도록 돕는 것입니다. 작업이\n추가되거나 바뀐 날짜는 문서 탐색에 필요하지만, 개인이 어느 시각에 작업했는지는 이 목적에\n필요하지 않습니다. 따라서 공개 범위는 날짜로 제한하고 정확한 시각은 로컬 개발 이력에만\n남기는 것이 원칙입니다.\n\n이전 버전은 브라우저 화면에서 시·분을 숨겼지만 공개 정적 파일에는 원본 ISO 타임스탬프가\n포함되어 있었습니다. 일반 독자에게 보이지 않더라도 파일을 직접 열면 확인할 수 있으므로\n프라이버시 경계가 충분하지 않았습니다. 이번 수정은 화면 표현이 아니라 공개 배포물 자체를\n날짜 단위 데이터로 만드는 데 목적이 있습니다.\n\n## 사용자 경험\n\n- 공개 페이지의 최초 생성, 마지막 변경, 버전 이력과 DB 원본 변경 정보는 날짜까지만 봅니다.\n- 공개 저장소의 생성 데이터 파일을 직접 확인해도 시·분·초와 시간대를 알 수 없습니다.\n- 로컬 위키에서는 기존처럼 정확한 시간을 확인해 개발 이력을 세밀하게 추적할 수 있습니다.\n- Rojo 서버 제어와 ItemDB 편집은 계속 로컬에서만 제공됩니다.\n\n![공개 위키의 날짜 단위 변경 정보](./media/development-wiki/v006/public-date-only-result.jpg \"공개 호스트 조건에서 시각 없이 날짜만 표시되고 로컬 제어가 숨겨진 최종 화면\")\n\n## 핵심 원칙과 설계 철학\n\n### 공개 데이터는 화면보다 먼저 안전해야 한다\n\nCSS나 날짜 포맷터는 표시만 바꿀 뿐 전송된 값을 지우지 않습니다. 공개 배포 단계에서\n모든 텍스트 자산의 ISO 타임스탬프를 `YYYY-MM-DD`로 축약해 브라우저가 처음부터 정확한\n시각을 받지 않도록 합니다. 화면의 로컬·공개 표시 분기는 이 데이터 경계를 보조하는\n두 번째 방어선입니다.\n\n### 로컬 원본과 공개 사본의 책임을 나눈다\n\n불변 Markdown 원본과 로컬 `wiki/site` 생성물은 커밋 시각과 버전 계보를 정확히 보존합니다.\n공개 저장소는 이 원본의 읽기 전용 사본이지만, 공유 목적에 필요하지 않은 시간 정밀도는\n제거합니다. 따라서 이력 추적 능력과 외부 공개 프라이버시를 동시에 유지합니다.\n\n### 실수하면 공개하지 않는다\n\n배포 준비가 끝난 뒤 공개 텍스트 자산 전체를 다시 검사합니다. 정확한 ISO 타임스탬프가\n하나라도 남아 있으면 파일명과 함께 실패하고 커밋·푸시를 시작하지 않습니다. 새 데이터\n모듈이 추가되어도 별도 목록 등록 없이 같은 검사를 받습니다.\n\n## 결정 사항과 범위\n\n배포 도구가 복사하는 HTML, CSS, JavaScript, JSON, source map, Markdown, text와 XML을\n검사 대상으로 삼았습니다. 이미지 같은 바이너리는 텍스트로 해석하거나 다시 쓰지 않습니다.\n타임스탬프는 날짜 부분만 보존하므로 최신순 정렬과 날짜 필터는 계속 동작합니다.\n\n공개 Git 이력의 재작성은 범위에 포함하지 않습니다. 최신 공개 배포본에서 정확한 시각을\n제거하고, 앞으로의 모든 배포가 같은 비노출 검사를 통과하도록 하는 데 집중합니다.\n\n## 현재 결과\n\n`tools/publish_public_wiki.py`는 공개 저장소에 파일을 올리기 전에 별도 임시 트리를 만들고\n정확한 타임스탬프를 날짜로 축약합니다. 이어서 잔여 타임스탬프 검사를 통과해야만 공개\n커밋과 푸시를 수행합니다. `--check`도 실제 공개 트리 준비 과정을 실행하므로 배포 전에\n동일한 프라이버시 조건을 확인할 수 있습니다.\n\n로컬 사이트의 `data.js`와 `combat-db-data.js`는 정확한 시간을 유지합니다. 공개 사본에서는\n같은 필드가 `2026-08-06`처럼 날짜만 가지며 화면도 날짜까지만 렌더링합니다.\n\n## 구현 참고\n\n정규식은 초와 소수 초가 있거나 없는 ISO 시각, `Z` 또는 숫자 시간대를 모두 인식합니다.\n치환과 검증을 독립된 함수로 나눠 단위 테스트가 실제 배포 없이 정상 축약, 바이너리 보존과\n잔여 시각 차단을 각각 확인합니다.\n\n## 검증\n\n단위 테스트에서 서로 다른 ISO 형식을 같은 날짜로 축약하고, 이미지 파일은 변경하지 않으며,\n잔여 시각이 있는 JavaScript 파일은 공개 검증을 실패시키는지 확인했습니다. 공개 호스트\n미리보기에서는 생성·변경 정보가 날짜만 표시되고 Rojo 영역과 ItemDB 편집 버튼이 보이지\n않는지 확인했습니다.\n\n## 후속 기획\n\n- 공개해야 할 메타데이터 종류가 늘어나면 허용 필드 중심의 공개 스키마를 검토합니다.\n- 공개 저장소의 과거 커밋까지 제거해야 하는 상황이 생기면 별도의 이력 재작성 작업으로\n  범위와 영향도를 먼저 검토합니다.\n",
          "source_path": "wiki/content/pages/development-wiki/v006.md",
          "timeline_order": 13
        },
        {
          "id": "development-wiki",
          "title": "개발 위키와 변경 이력 시스템",
          "summary": "기획 문서와 구조화 데이터를 위키·DB 탭으로 분리하고, 공개 페이지에는 작업 날짜만 남겨 읽기 편의와 개발자 프라이버시를 함께 지킵니다.",
          "status": "active",
          "category": "tooling",
          "tags": [
            "documentation",
            "wiki",
            "database",
            "navigation",
            "combat-data",
            "itemdb",
            "privacy",
            "public-hosting"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-06",
          "authors": [
            "Codex"
          ],
          "version": 5,
          "change_type": "updated",
          "change_summary": "기획의 맥락은 위키에 보존하고 반복 비교할 목록은 DB 탭의 일곱 데이터베이스로 분리했으며, 공개 화면의 작업 시각은 날짜 단위로 제한했습니다.",
          "supersedes": "development-wiki@v004",
          "sources": [
            "AGENTS.md",
            ".agents/skills/update-project-wiki/SKILL.md",
            "wiki/content/pages/backpack-combat-stat-database/v001.md",
            "tools/wiki.py",
            "tools/combat_db.py",
            "wiki/site/index.html",
            "wiki/site/app.js",
            "wiki/site/app.css",
            "wiki/site/combat-db.js",
            "wiki/site/local-access.js",
            "tests/test_combat_db.py",
            "tests/combat-db.spec.js",
            "tests/local-access.spec.js",
            "wiki/content/media/development-wiki/v005/combat-database-tabs-result.jpg"
          ],
          "related": [
            "backpack-combat-stat-database",
            "inventory-item-concept",
            "project-overview"
          ],
          "validation": [
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "python3 -m unittest tests.test_combat_db tests.test_item_db tests.test_wiki",
            "node --check wiki/site/app.js",
            "node --test tests/combat-db.spec.js tests/item-db.spec.js tests/local-access.spec.js tests/markdown-media.spec.js tests/tag-explorer.spec.js",
            "브라우저에서 DB 탭 7개와 전투 DB 6개의 178개 레코드, 검색·우선순위 필터와 콘솔 오류 0건 확인",
            "공개 호스트에서 정확한 작업 시각을 숨기는 local-access 정책 단위 테스트",
            "git diff --check"
          ],
          "body": "# 개발 위키와 변경 이력 시스템\n\n## 기획 배경과 목표\n\nPackBound 위키에는 두 종류의 지식이 함께 쌓입니다. 첫째는 왜 기능을 만들었고 어떤\n경험을 지향하는지를 설명하는 기획 문서이며, 둘째는 능력치·상태 효과·아이템처럼 행\n단위로 검색하고 비교해야 하는 운영 데이터입니다. 두 종류를 같은 문서 목록에 계속\n섞으면 DB가 늘어날수록 기획의 흐름을 읽기 어려워지고 원하는 수치를 찾는 시간도\n길어집니다.\n\n이번 구조의 목표는 기획의 철학과 결정은 위키에 보존하고, 반복적으로 갱신되는 목록은\n별도 DB 탐색면에서 빠르게 비교하도록 역할을 분리하는 것입니다. 동시에 공개 위키는\n팀과 공유할 수 있는 결과 기록으로 유지하되 개인의 구체적인 작업 시각까지 노출하지\n않도록 공개 범위를 조정합니다.\n\n## 사용자 경험\n\n- 좌측의 `위키`와 `DB` 탭을 전환해 서술형 문서와 구조화 목록을 즉시 구분합니다.\n- DB 탭에서는 데이터베이스 수, 각 DB의 레코드 수와 전체 레코드 수를 한눈에 봅니다.\n- 전투 능력치 원문을 읽지 않아도 능력치, 자원, 상태 효과, 공간 조건, 발동 조건과\n  태그를 각각 검색하고 상태·우선순위로 거를 수 있습니다.\n- 각 전투 DB에서 원본 기획 문서로 돌아갈 수 있어 숫자만 보고 설계 의도를 잃지 않습니다.\n- 로컬 위키는 정확한 생성·변경 시간을 보여 개발 이력을 추적하고, 공개 위키는 날짜만\n  보여 공유에 필요한 정보만 제공합니다.\n\n![위키와 DB가 분리된 전투 능력치 화면](./media/development-wiki/v005/combat-database-tabs-result.jpg \"DB 탭에서 일곱 데이터베이스와 전투 능력치 레코드를 동시에 탐색하는 최종 로컬 화면\")\n\n## 핵심 원칙과 설계 철학\n\n### 기획 원문이 의미의 기준이다\n\nDB 화면은 기획 문서를 대체하지 않습니다. `백팩 전투 능력치 데이터베이스` 최신 버전의\n표를 빌드 시 읽어 구조화할 뿐이며, 설명 문장, 레퍼런스 조사, 로드맵과 트레이드오프는\n원문에 남깁니다. 데이터 행은 항상 원본 문서와 버전을 표시하고 원문 링크를 제공합니다.\n\n### 행으로 관리할 가치가 있는 목록만 분리한다\n\n문서 안의 모든 표를 DB로 만들지 않습니다. 반복 검색·비교와 상태 갱신의 가치가 있는\n여섯 목록만 추렸습니다. 원칙 설명용 표와 완료 현황 요약은 문맥 의존성이 크므로 위키에\n남깁니다.\n\n### 공개 범위는 필요한 정보의 최소치다\n\n공개 독자는 개발이 어느 날짜에 추가·수정됐는지는 볼 수 있지만 시·분은 볼 수 없습니다.\n로컬 loopback 주소만 정확한 시간을 표시합니다. 이 경계는 Rojo 제어와 ItemDB 편집 권한에\n사용하는 동일한 로컬 allowlist를 따르므로 새 공개 도메인을 추가해도 실수로 시간이\n노출되지 않습니다.\n\n## 결정 사항과 범위\n\nDB 탭에는 ItemDB와 다음 전투 데이터베이스 여섯 개를 등록했습니다.\n\n| DB | 레코드 | 역할 |\n| --- | ---: | --- |\n| 아이템 데이터베이스 | 32 | 이미지, 제원, 점유 형태와 로컬 배치 편집 |\n| 전투 능력치 | 55 | 현재 계약과 후속 능력치 제안 비교 |\n| 전투 자원 | 7 | 전투 중 소비·회복되는 현재값 규칙 |\n| 상태 효과 | 19 | 강화·약화 효과의 역할과 개발 상태 |\n| 백팩 공간 조건 | 25 | 구현된 배치 관계와 후속 공간 퍼즐 후보 |\n| 발동 조건 | 20 | 전투 사건과 효과 실행 시점 |\n| 아이템 태그 | 52 | 현재 분류 태그와 후속 제안 |\n\n전투 DB는 현재 읽기 전용입니다. ItemDB의 편집 기능만 로컬에서 제공하며 공개 페이지는\n모든 DB를 열람만 할 수 있습니다. 전투 기획 원문의 내용은 이번 작업에서 바꾸지 않고,\n이미 합의된 표를 탐색 가능한 형태로 재구성하는 데 범위를 한정했습니다.\n\n## 현재 결과\n\n위키 탭에는 기존 카테고리와 문서 트리만, DB 탭에는 일곱 DB 카드만 표시됩니다. 현재\n경로에 맞춰 탭과 DB 카드가 자동 선택되고 키보드 좌우 키로도 탭을 전환할 수 있습니다.\n새 DB는 탐색 레지스트리에 항목을 추가하면 같은 카드 구조로 확장됩니다.\n\n전투 DB 생성기는 최신 기획 버전에서 178개 행을 읽어 공통 브라우저 데이터로 만듭니다.\n각 DB는 전체 텍스트 검색과 자신에게 맞는 분류, 우선순위, 개발 상태 필터를 제공합니다.\n원문 표가 다음 위키 버전에서 갱신되면 별도 수기 복사 없이 위키 빌드에서 DB도 함께\n재생성됩니다.\n\n공개 페이지에서는 본문 메타데이터, 문서 헤더, 변경 이력, 전체 트리, 태그 결과와 DB\n원본 변경 정보가 모두 날짜까지만 표시됩니다. 로컬 주소에서는 같은 위치에 시·분까지\n표시되어 정밀한 개발 이력을 유지합니다.\n\n## 구현 참고\n\n`tools/combat_db.py`는 최신 전투 능력치 위키 버전의 Markdown 표를 검증하고 여섯 DB의\n공통 열·필터 계약으로 변환합니다. `tools/wiki.py build`와 `check`가 ItemDB, CombatDB와\n일반 위키 데이터를 한 번에 생성·검사하므로 일부 DB만 오래된 상태로 남을 수 없습니다.\n\n브라우저는 `#/db/<database-id>` 경로를 사용합니다. `combat-db.js`는 검색, 필터 옵션과\nDB 조회를 담당하고 `app.js`는 공통 표·상태 배지와 탐색 카드를 그립니다. 정확한 시각\n표시는 `local-access.js`가 loopback 호스트인지 판정한 뒤 공통 날짜 포맷터에 적용합니다.\n\n## 검증\n\nPython 테스트에서 필요한 여섯 섹션만 추출되는지, 현재·제안 능력치가 같은 스키마로\n합쳐지는지, 강화·약화 그룹과 현재·제안 태그가 보존되는지, 각 DB의 레코드 ID가\n중복되지 않는지 확인했습니다. JavaScript 테스트에서는 한글·영문 검색, 복합 필터,\n필터 옵션과 DB 조회를 확인했습니다.\n\n브라우저에서 일곱 DB 카드와 합계 210개 레코드가 표시되고, 전투 DB 여섯 페이지의\n행 수가 생성 데이터와 일치하는지 확인했습니다. `ArmorPenetration` 검색은 한 행만,\nP0 필터는 아홉 행만 표시했습니다. 가로 페이지 오버플로와 콘솔 오류는 없었습니다.\n\n## 후속 기획\n\n- 전투 데이터가 실제 런타임에 연결될 때 각 DB 행에 데이터 계약과 런타임 완료 상태를\n  같은 커밋에서 갱신합니다.\n- DB가 많아지면 카드 즐겨찾기와 DB 간 통합 검색을 검토하되 위키와 DB의 역할 구분은\n  유지합니다.\n- 편집이 필요한 전투 DB가 생기면 공개 읽기 전용 원칙을 유지하고 로컬 저장 API를\n  데이터 종류별로 별도 설계합니다.\n",
          "source_path": "wiki/content/pages/development-wiki/v005.md",
          "timeline_order": 12
        },
        {
          "id": "development-wiki",
          "title": "개발 위키와 변경 이력 시스템",
          "summary": "별도 공개 저장소에 읽기 전용 위키만 배포하고 Rojo 제어는 로컬 주소에서만 활성화합니다.",
          "status": "active",
          "category": "tooling",
          "tags": [
            "documentation",
            "wiki",
            "history",
            "tooling",
            "navigation",
            "rojo",
            "search",
            "tags",
            "date-filter",
            "public-hosting",
            "security"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-06",
          "authors": [
            "Codex"
          ],
          "version": 4,
          "change_type": "updated",
          "change_summary": "정적 위키 전용 공개 미러 게시 흐름과 localhost 전용 Rojo UI·상태 조회 경계를 추가함",
          "supersedes": "development-wiki@v003",
          "sources": [
            ".agents/skills/update-project-wiki/SKILL.md",
            "wiki/public-publishing.json",
            "tools/publish_public_wiki.py",
            "wiki/site/index.html",
            "wiki/site/app.js",
            "wiki/site/app.css",
            "wiki/site/local-access.js",
            "tests/local-access.spec.js"
          ],
          "related": [
            "project-overview",
            "studio-automation-routing"
          ],
          "validation": [
            "node --check wiki/site/app.js",
            "node --check wiki/site/local-access.js",
            "node --check wiki/site/tag-explorer.js",
            "node tests/local-access.spec.js",
            "node tests/tag-explorer.spec.js",
            "PYTHONPYCACHEPREFIX=/tmp/packbound-public-wiki-pycache python3 -m py_compile tools/publish_public_wiki.py",
            "python3 tools/publish_public_wiki.py --check",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "python3 -m unittest tests/test_wiki.py",
            "Python HTMLParser로 wiki/site/index.html 파싱",
            "공개 아티팩트의 개인 경로·토큰·비밀 키 패턴 검사",
            "git diff --check"
          ],
          "body": "# 개발 위키와 변경 이력 시스템\n\n## 결과\n\nPackBound 개발 위키는 Git 커밋에 보존된 Markdown과 생성된 정적 데이터를\n사용합니다. 문서, 전체 트리, 변경 이력, 검색, 태그 탐색과 날짜 필터는 별도의\n공개 저장소에 읽기 전용 정적 사이트로 게시할 수 있습니다. 원본 ProjectBackpack\n저장소와 Roblox 소스는 비공개 상태를 유지합니다.\n\n로컬 개발 주소와 공개 주소의 권한은 분리합니다. Rojo 플레이스 선택, 상태 조회,\n시작과 종료 UI는 `localhost`, `127.0.0.1` 또는 로컬 IPv6 주소에서만 표시하고\n실행합니다. 공개 주소에는 Rojo 영역이 나타나지 않으며 로컬 제어 API 요청도\n보내지 않습니다.\n\n## 구현 내용\n\n### 커밋 단위의 불변 문서 이력\n\n개발 문서는 논리 페이지별 `vNNN.md` 파일로 보존됩니다. 새 커밋은 이전 버전을\n덮어쓰지 않고 다음 버전을 추가하며, `supersedes` 메타데이터로 직전 버전을\n연결합니다. 생성 시각, 수정 시각, 작성자, 변경 유형, 근거 파일과 실제 검증을\n각 버전에 함께 기록합니다.\n\n`tools/wiki.py build`는 Markdown 문서를 브라우저가 읽는 `wiki/site/data.js`로\n생성합니다. 본문과 모든 revision이 Git 커밋에 포함되므로 과거 상태를 열거나\n버전 간 차이를 확인할 수 있습니다.\n\n### 문서 탐색\n\n위키는 다음 읽기 기능을 로컬과 공개 사이트에 동일하게 제공합니다.\n\n- 카테고리별 사이드바와 전체 위키 트리\n- 최신 문서와 모든 과거 버전 열람\n- 선택 버전과 직전 버전의 변경점 비교\n- 제목, 요약, 카테고리, 태그와 본문 검색\n- 전체 revision 기반 태그 탐색과 최신·최다·테마 정렬\n- 생성일 또는 수정 이력을 기준으로 하는 독립 날짜 범위 필터\n\n날짜 범위는 문서 검색, 태그 수와 목록, 태그별 문서 결과에 공통 적용됩니다.\n범위 안에 생성되었거나 revision 수정일이 하나라도 있는 페이지가 대상이므로,\n이후에 다시 수정된 문서도 과거 작업 기간에서 찾을 수 있습니다.\n\n### 공개 읽기 전용 미러\n\n`wiki/public-publishing.json`은 정적 위키 전용 공개 저장소, 배포 브랜치와 공개\n주소를 선언합니다. `tools/publish_public_wiki.py`는 현재 생성 데이터가 Markdown\n원본과 일치하는지 먼저 검사한 뒤 임시 디렉터리에 공개 저장소를 복제합니다.\n\n게시 시 공개 저장소의 작업 트리는 `wiki/site` 내용으로 완전히 교체합니다.\nJekyll 변환을 비활성화하는 `.nojekyll`을 추가하고 원본 커밋 SHA를 공개 미러\n커밋 메시지에 남긴 뒤 배포 브랜치로 푸시합니다. 공개 저장소에는 다음 여섯 개의\n정적 파일과 `.nojekyll`만 포함됩니다.\n\n- `index.html`\n- `app.css`\n- `app.js`\n- `data.js`\n- `tag-explorer.js`\n- `local-access.js`\n\nRoblox 소스, 제작 에셋, 로컬 도구, 원본 Markdown 저장소와 Rojo 제어 서버는\n공개 미러에 복사하지 않습니다. 공개 게시 흐름은 위키 커밋과 원본 푸시가 성공한\n후 실행하므로 공개 페이지가 확정된 Git 상태를 가리킵니다.\n\n`update-project-wiki` 스킬은 공개 미러 설정이 존재할 때 원본 커밋과 푸시 후\n게시 스크립트를 실행하도록 규정합니다. 공개 미러의 파생 커밋은 새로운 위키\nrevision을 만들지 않습니다.\n\n### 로컬 전용 Rojo 제어\n\nRojo 영역은 HTML에서 기본적으로 `hidden` 상태입니다. `local-access.js`가 현재\n브라우저 주소를 검사해 다음 호스트에서만 로컬 제어를 허용합니다.\n\n- `localhost`\n- `127.0.0.1`\n- `::1`\n\n허용된 로컬 주소에서는 UI를 표시한 뒤 상태 조회를 시작하고, 플레이스 선택과\n시작·종료 이벤트를 연결합니다. 다른 모든 호스트에서는 UI를 계속 숨긴 채로\n두며 `/api/rojo/status` 폴링도 시작하지 않습니다. JavaScript가 로드되지 않거나\n오류가 발생해도 HTML과 CSS의 기본 숨김 상태가 유지되어 공개 화면에 제어 영역이\n잠깐 노출되지 않습니다.\n\n서버 측 보호도 그대로 유지합니다. `tools/wiki.py serve`와 Rojo 프로세스는\n`127.0.0.1`에만 바인딩되고, 제어 요청은 로컬 Host와 Origin을 검사합니다.\n공개 배포에는 Python 제어 서버가 포함되지 않으므로 공개 방문자는 사용자의\nMac에서 실행 중인 Rojo 프로세스에 접근할 수 없습니다.\n\n## 변경 파일\n\n- `.agents/skills/update-project-wiki/SKILL.md`: 원본 커밋과 푸시 이후 공개 미러를\n  갱신하는 게시 단계를 추가합니다.\n- `wiki/public-publishing.json`: 공개 저장소, 브랜치와 Pages 주소를 선언합니다.\n- `tools/publish_public_wiki.py`: 검증된 정적 위키만 임시 체크아웃을 통해 공개\n  저장소에 동기화합니다.\n- `wiki/site/index.html`: Rojo 컨트롤을 기본 숨김으로 전환하고 로컬 접근 판정\n  모듈을 로드합니다.\n- `wiki/site/local-access.js`: 로컬 호스트만 Rojo 제어를 허용하는 독립 판정\n  함수를 제공합니다.\n- `wiki/site/app.js`: 로컬 접근이 허용된 경우에만 Rojo UI, 이벤트와 상태 폴링을\n  활성화합니다.\n- `wiki/site/app.css`: `hidden`인 Rojo 컨트롤이 다른 표시 규칙보다 우선해\n  보이지 않도록 합니다.\n- `tests/local-access.spec.js`: 허용된 loopback 주소와 거부되는 공개 호스트를\n  검증합니다.\n\n## 검증\n\n- 위키 빌드와 생성 데이터 무결성 검사를 통과했습니다.\n- Python 위키 테스트와 기존 태그 탐색 테스트를 통과했습니다.\n- `app.js`, `local-access.js`, `tag-explorer.js`의 JavaScript 문법 검사를\n  통과했습니다.\n- Node 테스트로 localhost, IPv4·IPv6 loopback만 허용하고 공개 도메인을\n  거부하는 것을 확인했습니다.\n- 공개 게시 스크립트의 Python 문법과 설정·원본 검사를 확인했습니다.\n- `index.html`을 Python HTML 파서로 읽어 구조 오류가 없음을 확인했습니다.\n- 공개 파일에서 개인 절대 경로, 토큰과 비밀 키 패턴이 없음을 확인했습니다.\n- 커밋 대상의 공백 오류를 검사했습니다.\n\n## 결정 사항\n\n- 공개 사이트는 문서 읽기 기능만 제공하고 로컬 프로세스 제어 기능은 제공하지\n  않습니다.\n- Rojo UI는 공개 호스트를 나열하는 방식이 아니라 승인된 loopback 주소만\n  허용하는 allowlist 방식으로 판정합니다.\n- 원본 저장소 공개 여부와 위키 공개 여부를 분리하기 위해 정적 파일 전용 공개\n  저장소를 사용합니다.\n- 공개 미러는 `wiki/site`만 포함하고 원본 저장소의 다른 파일을 복제하지 않습니다.\n- 로컬 `python3 tools/wiki.py serve` 흐름은 공개 배포와 분리해 기존 개발 기능을\n  그대로 유지합니다.\n\n## 후속 작업\n\n- 공개 주소의 사용자 지정 도메인이 필요해지면 공개 저장소의 Pages 설정에\n  도메인과 DNS 검증을 추가할 수 있습니다.\n- 문서 일부를 비공개로 분리해야 할 경우 공개 빌드용 메타데이터를 도입해 페이지\n  단위 공개 범위를 명시해야 합니다.\n",
          "source_path": "wiki/content/pages/development-wiki/v004.md",
          "timeline_order": 5
        },
        {
          "id": "development-wiki",
          "title": "개발 위키와 변경 이력 시스템",
          "summary": "검색어와 독립된 날짜 범위로 문서 검색과 태그 탐색의 대상 페이지를 함께 제한할 수 있습니다.",
          "status": "active",
          "category": "tooling",
          "tags": [
            "documentation",
            "wiki",
            "history",
            "tooling",
            "navigation",
            "rojo",
            "search",
            "tags",
            "date-filter"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-06",
          "authors": [
            "Codex"
          ],
          "version": 3,
          "change_type": "updated",
          "change_summary": "생성일과 전체 수정 이력을 기준으로 문서 검색과 태그 탐색에 공통 적용되는 날짜 범위 필터를 추가함",
          "supersedes": "development-wiki@v002",
          "sources": [
            "wiki/site/index.html",
            "wiki/site/app.js",
            "wiki/site/app.css",
            "wiki/site/tag-explorer.js",
            "tests/tag-explorer.spec.js"
          ],
          "related": [
            "project-overview"
          ],
          "validation": [
            "node --check wiki/site/app.js",
            "node --check wiki/site/tag-explorer.js",
            "node tests/tag-explorer.spec.js",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "python3 -m unittest tests/test_wiki.py",
            "Python HTMLParser로 wiki/site/index.html 파싱",
            "git diff --check"
          ],
          "body": "# 개발 위키와 변경 이력 시스템\n\n## 결과\n\nPackBound 개발 위키는 불변 Markdown 버전과 생성된 정적 데이터를 사용해 문서,\n수정 이력, 전체 위키 트리, 태그 탐색과 로컬 Rojo 상태 제어를 한 화면에서\n제공합니다.\n\n검색 대화상자에는 검색어와 별도로 동작하는 날짜 필터가 있습니다. 사용자가\n시작일이나 종료일을 지정하면 그 기간에 생성되었거나 수정 이력이 있는 페이지만\n먼저 선택합니다. 문서 검색, 태그 목록과 사용량, 태그별 문서 결과는 모두 이\n공통 페이지 집합 안에서 동작합니다.\n\n## 구현 내용\n\n### 커밋 단위의 불변 문서 이력\n\n개발 문서는 논리 페이지별 `vNNN.md` 파일로 보존됩니다. 새 커밋은 이전 버전을\n덮어쓰지 않고 다음 버전을 추가하며, `supersedes` 메타데이터로 직전 버전을\n연결합니다. 생성 시각, 수정 시각, 작성자, 변경 유형, 원본 파일과 실제 검증\n명령을 각 버전에 함께 기록합니다.\n\n`tools/wiki.py build`는 Markdown 문서를 브라우저가 읽는 `wiki/site/data.js`로\n생성합니다. 페이지 본문, 버전 목록과 메타데이터는 Git 커밋과 함께 보존되므로\n과거 상태를 열어 보거나 버전 간 차이를 확인할 수 있습니다.\n\n### 문서 검색과 태그 탐색\n\n검색 대화상자는 `문서 검색`과 `태그 탐색` 탭을 분리합니다. 문서 검색은 제목,\n요약, 카테고리, 태그와 본문을 대상으로 하며, 태그 탐색은 입력이 없을 때도\n모든 태그를 표시합니다.\n\n태그 인덱스는 각 페이지의 전체 revision을 검사합니다. 이후 버전에서 삭제된\n태그도 검색할 수 있고, 결과 카드에서 `현재 태그`와 `과거 태그`를 구분합니다.\n같은 태그가 여러 버전에 반복되어도 사용량은 고유 문서 한 개로 계산합니다.\n\n태그 목록은 다음 세 방식으로 탐색할 수 있습니다.\n\n- 최신순: 태그가 연결된 문서의 최초 생성일이 최신인 순서\n- 최다순: 같은 태그를 가진 고유 문서 수가 많은 순서\n- 테마순: 개발, 기획, 규칙, 아트와 기타 그룹별 표시\n\n태그를 선택하면 문서 제목, 해당 버전, 현재·과거 태그 상태, 요약, 최초 생성,\n마지막 변경과 본문 일부를 카드로 표시합니다. 선택한 태그 안에서도 검색어로\n결과를 다시 좁힐 수 있습니다.\n\n### 독립 날짜 범위 필터\n\n검색창 아래의 시작일과 종료일은 검색어 및 문서·태그 탭과 독립적으로 유지됩니다.\n필터는 양 끝 날짜를 포함하며, 한쪽 날짜만 지정한 열린 범위도 지원합니다. 시작일이\n종료일보다 늦어지면 마지막으로 선택한 날짜에 맞춰 반대쪽 경계를 자동 보정합니다.\n초기화하면 전체 기간으로 돌아갑니다.\n\n페이지는 최초 생성일, 현재 마지막 변경일 또는 보존된 revision 중 하나의 수정일이\n범위 안에 있을 때 포함됩니다. 따라서 오래전에 생성되고 이후에도 수정된 페이지를\n특정 작업 기간으로 정확히 찾을 수 있습니다. 최신 수정일만 검사하지 않으므로,\n범위 뒤에 추가 수정이 있었더라도 과거 범위의 작업 기록에서 사라지지 않습니다.\n\n날짜 필터로 선택된 페이지 집합은 다음 기능이 함께 사용합니다.\n\n- 문서 검색 결과와 최근 변경 문서 목록\n- 태그 탭의 태그 수, 태그 목록과 태그별 고유 문서 수\n- 최신순·최다순·테마순 태그 정렬\n- 선택한 태그의 문서 카드와 그 안의 추가 검색\n\n현재 읽는 문서에서 태그를 눌렀지만 해당 문서가 날짜 범위 밖이라 태그가 필터\n결과에 없으면, 이전 결과를 남기지 않고 현재 범위에서 일치하는 태그가 없음을\n표시합니다. 날짜 필터 영역은 활성 범위와 대상 문서 수를 항상 보여 줍니다.\n\n### 위키 트리와 Rojo 제어\n\n전체 위키 트리는 카테고리, 페이지, 버전, 태그와 관련 문서를 계층적으로 표시해\n문서 구조를 한눈에 탐색할 수 있게 합니다. 페이지 상단의 Rojo 제어 영역은 로컬\n제어 API를 통해 플레이스별 서버 상태를 확인하고 시작하거나 종료할 수 있으며,\n플레이스가 늘어나면 선택 목록으로 전환할 수 있는 구조를 유지합니다.\n\n## 변경 파일\n\n- `wiki/site/index.html`: 항상 표시되는 시작일, 종료일과 초기화 컨트롤을 추가합니다.\n- `wiki/site/tag-explorer.js`: 페이지 생성일과 전체 revision 수정일을 판정하는\n  순수 날짜 필터 함수를 제공합니다.\n- `wiki/site/app.js`: 날짜 범위에서 검색 대상과 태그 인덱스를 다시 만들고 모든\n  검색 모드가 같은 범위를 사용하도록 연결합니다.\n- `wiki/site/app.css`: 활성 상태와 작은 화면을 포함한 날짜 필터 레이아웃을\n  정의합니다.\n- `tests/tag-explorer.spec.js`: 포함 경계, 열린 범위, 수정 이력과 필터 후 태그\n  집계를 검증합니다.\n\n## 검증\n\n- `app.js`와 `tag-explorer.js`의 JavaScript 문법 검사를 통과했습니다.\n- Node 태그 탐색 테스트에서 생성일, 수정일, 경계일과 열린 날짜 범위 판정을\n  검증했습니다.\n- 날짜로 선택된 문서만 태그 인덱스에 집계되는 것을 검증했습니다.\n- 위키 빌드와 무결성 검사, Python 위키 테스트를 통과했습니다.\n- `index.html`을 Python HTML 파서로 읽어 구조 오류가 없음을 확인했습니다.\n- 커밋 대상 diff의 공백 오류 검사를 통과했습니다.\n\n## 결정 사항\n\n- 날짜는 개별 revision을 숨기는 조건이 아니라 검색에 참여할 페이지를 먼저\n  결정하는 조건입니다. 포함된 페이지의 태그 이력은 계속 완전하게 탐색할 수\n  있습니다.\n- 날짜 비교는 사용자가 선택한 달력 날짜와 ISO 메타데이터의 `YYYY-MM-DD`를\n  비교해 로컬 시간대 변환으로 날짜 경계가 바뀌지 않도록 합니다.\n- 태그 인덱스를 날짜 범위 변경 때 다시 생성해 목록, 카운트와 상세 결과 사이의\n  범위 불일치를 방지합니다.\n- 필터는 정적 브라우저 데이터에서 처리하며 외부 데이터베이스나 패키지를\n  추가하지 않습니다.\n\n## 후속 작업\n\n- 문서 수가 크게 늘어나면 날짜별 활동 인덱스를 빌드 시점에 미리 생성해 필터\n  갱신 비용을 줄일 수 있습니다.\n- 날짜 범위를 공유하거나 다시 열어야 할 필요가 생기면 URL hash 또는 로컬 저장\n  상태로 직렬화할 수 있습니다.\n",
          "source_path": "wiki/content/pages/development-wiki/v003.md",
          "timeline_order": 3
        },
        {
          "id": "development-wiki",
          "title": "개발 위키와 변경 이력 시스템",
          "summary": "문서 검색에 전체 태그 탐색, 최신·최다·테마 정렬과 태그별 문서 미리보기를 추가했습니다.",
          "status": "active",
          "category": "tooling",
          "tags": [
            "documentation",
            "wiki",
            "history",
            "tooling",
            "navigation",
            "rojo",
            "search",
            "tags"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-06",
          "authors": [
            "Codex"
          ],
          "version": 2,
          "change_type": "updated",
          "change_summary": "전체 버전 태그 인덱스, 최신·최다·테마 정렬과 태그별 문서 카드 탐색을 추가함",
          "supersedes": "development-wiki@v001",
          "sources": [
            "wiki/site/index.html",
            "wiki/site/app.js",
            "wiki/site/app.css",
            "wiki/site/tag-explorer.js",
            "tests/tag-explorer.spec.js"
          ],
          "related": [
            "project-overview",
            "character-2d-rendering"
          ],
          "validation": [
            "node --check wiki/site/app.js",
            "node --check wiki/site/tag-explorer.js",
            "node tests/tag-explorer.spec.js",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "python3 -m unittest tests/test_wiki.py",
            "로컬 위키 서버에서 수정된 index.html HTTP 200 응답을 확인"
          ],
          "body": "# 개발 위키와 변경 이력 시스템\n\n## 결과\n\nPackBound 개발 위키의 검색 창은 문서 전문 검색과 태그 탐색을 분리해서 제공합니다.\n태그 이름을 입력하지 않아도 지금까지 모든 문서 버전에 등록된 태그를 한 번에\n볼 수 있고, 원하는 정렬 방식으로 훑은 뒤 관련 문서의 핵심 내용을 바로 비교할\n수 있습니다.\n\n기존의 불변 Markdown 버전, 문서 이력 비교, 전체 위키 트리와 로컬 Rojo 제어는\n그대로 유지합니다. 태그 탐색은 생성된 `data.js`를 읽는 정적 브라우저 기능이라\n별도 서버 데이터베이스나 외부 패키지가 필요하지 않습니다.\n\n## 구현 내용\n\n### 문서 검색과 태그 탐색 분리\n\n검색 대화상자에 `문서 검색`과 `태그 탐색` 탭을 추가했습니다. 태그 탭은 입력이\n비어 있으면 전체 태그를 표시하고, 입력하면 태그 이름과 테마 설명을 필터링합니다.\n현재 저장된 태그 수를 탭에 함께 표시합니다.\n\n본문 메타 패널과 전체 위키 트리의 태그도 버튼으로 바뀌었습니다. 어느 문서를\n읽는 중이든 태그를 누르면 해당 태그의 문서 목록으로 바로 이동합니다.\n\n### 전체 버전 기반 태그 인덱스\n\n`tag-explorer.js`는 최신 페이지의 태그만 읽지 않고 각 페이지의 보존된 모든\nrevision을 오름차순으로 검사합니다. 이후 버전에서 삭제된 태그도 탐색 목록에\n남기며, 문서 카드에서 `현재 태그`와 `과거 태그`를 구분합니다.\n\n같은 태그가 여러 버전에 반복되어도 사용량은 고유 문서 한 개로 계산합니다.\n태그를 선택하면 그 태그가 마지막으로 존재한 문서 버전을 열 수 있습니다.\n\n### 태그 정렬\n\n- 최신순: 태그가 사용된 문서의 최초 생성일이 최신인 순서\n- 최다순: 같은 태그를 사용한 고유 문서 수가 많은 순서\n- 테마순: 개발, 기획, 규칙, 아트와 기타 그룹으로 분류\n\n테마는 태그 키워드를 먼저 사용하고, 알려지지 않은 태그는 연결된 문서의\n카테고리를 보조 기준으로 사용합니다. 어느 규칙에도 맞지 않으면 `기타`에\n안전하게 포함되므로 새 태그가 화면에서 사라지지 않습니다.\n\n### 태그별 문서 카드\n\n선택한 태그의 문서는 마지막 변경일 순서로 정렬합니다. 각 카드에는 다음 정보를\n표시합니다.\n\n- 문서 제목과 태그가 사용된 버전\n- 현재 태그 또는 과거 태그 상태\n- 문서 요약\n- 최초 생성 시각과 마지막 변경 시각\n- Markdown 기호를 제거한 본문 일부\n\n선택한 태그 안에서도 검색어로 문서 제목, 요약과 본문을 다시 좁힐 수 있습니다.\n\n## 변경 파일\n\n- `wiki/site/index.html`: 검색 모드 탭, 태그 수와 세 가지 정렬 버튼을 추가합니다.\n- `wiki/site/tag-explorer.js`: 과거 버전을 포함한 태그 인덱스, 정렬, 테마 분류와\n  본문 미리보기 변환을 담당합니다.\n- `wiki/site/app.js`: 태그 목록, 태그별 문서 카드와 기존 문서·트리 태그 클릭\n  흐름을 연결합니다.\n- `wiki/site/app.css`: 데스크톱과 모바일 태그 디렉터리, 테마 그룹과 문서 카드의\n  반응형 스타일을 정의합니다.\n- `tests/tag-explorer.spec.js`: 과거 태그 보존, 고유 문서 집계, 정렬, 테마와\n  Markdown 미리보기 변환을 검사합니다.\n\n## 검증\n\n- 위키 스키마 검사와 생성 데이터 동기화 검사를 통과합니다.\n- Python 위키 테스트와 Node 태그 탐색 테스트를 통과합니다.\n- `app.js`와 `tag-explorer.js`의 JavaScript 문법 검사를 통과합니다.\n- 로컬 위키 서버가 새 검색 탭과 태그 모듈을 포함한 `index.html`을 HTTP 200으로\n  제공하는 것을 확인했습니다.\n- 명시적인 브라우저 UI 테스트 요청은 없었으므로 자동 클릭이나 화면 캡처는\n  수행하지 않았습니다.\n\n## 결정 사항\n\n- 태그 목록은 최신 상태만이 아니라 불변 위키 이력 전체에서 파생합니다.\n- 사용량은 버전 횟수가 아닌 고유 문서 수로 정의해 자주 수정된 문서가 순위를\n  왜곡하지 않도록 합니다.\n- 테마 분류는 클라이언트의 독립 모듈로 유지해 Markdown 스키마와 빌더를\n  변경하지 않습니다.\n- 태그 상세 URL을 별도 서버 라우트로 만들지 않고 기존 검색 대화상자 안에서\n  처리해 로컬 정적 위키 구조를 유지합니다.\n\n## 후속 작업\n\n- 태그 수가 크게 늘어나면 테마 규칙을 별도 설정 파일로 분리할 수 있습니다.\n- 태그 상세 화면을 공유해야 할 필요가 생기면 hash 기반 영구 링크를 추가합니다.\n- 사용자가 명시적으로 브라우저 검증을 요청하면 키보드 탐색과 작은 화면의 실제\n  레이아웃을 추가로 확인합니다.\n",
          "source_path": "wiki/content/pages/development-wiki/v002.md",
          "timeline_order": 2
        },
        {
          "id": "development-wiki",
          "title": "개발 위키와 변경 이력 시스템",
          "summary": "커밋 최종본을 불변 기록으로 게시하고, 전체 트리 탐색과 로컬 Rojo 제어를 제공하는 프로젝트 위키입니다.",
          "status": "active",
          "category": "tooling",
          "tags": [
            "documentation",
            "wiki",
            "history",
            "tooling",
            "navigation",
            "rojo"
          ],
          "created_at": "2026-08-06",
          "updated_at": "2026-08-06",
          "authors": [
            "Codex"
          ],
          "version": 1,
          "change_type": "created",
          "change_summary": "커밋 시점 최종 문서화, 불변 Markdown 이력, 전체 트리와 로컬 Rojo 제어를 구축함",
          "supersedes": null,
          "sources": [
            "AGENTS.md",
            "README.md",
            ".agents/skills/update-project-wiki/SKILL.md",
            "tools/wiki.py",
            "wiki/site/index.html",
            "wiki/site/app.js",
            "wiki/site/app.css",
            "wiki/rojo-places.json",
            "tests/test_wiki.py"
          ],
          "related": [
            "project-overview",
            "studio-automation-routing"
          ],
          "validation": [
            "node --check wiki/site/app.js",
            "python3 tools/wiki.py build",
            "python3 tools/wiki.py check",
            "python3 -m unittest tests/test_wiki.py",
            "브라우저에서 전체 트리, 버전 링크, 펼치기·접기와 모바일 레이아웃을 확인",
            "브라우저에서 127.0.0.1:34873의 기존 Rojo를 외부 실행으로 감지하는지 확인",
            "RojoManager로 임시 127.0.0.1:34973 서버의 running → stopped 전환을 확인"
          ],
          "body": "# 개발 위키와 변경 이력 시스템\n\n## 결과\n\nPackBound의 개발 문서는 Git 커밋과 같은 시점에 게시합니다. 구현 중간의 시행착오,\n되돌림, 임시 값은 위키 이력으로 만들지 않고 커밋에 포함되는 최종 동작과 구조만\n완전한 Markdown 문서로 정리합니다.\n\n각 커밋은 영향을 받은 논리 페이지마다 최대 한 개의 새 버전을 추가합니다.\n커밋에 성공한 버전은 불변이며, 이후 정정이 필요하면 다음 커밋에서 새 버전으로\n남깁니다. 웹에서는 최신 문서, 전체 버전, 변경점과 문서 구조를 탐색할 수 있습니다.\n\n## 게시 흐름\n\n```text\n개발·수정·검증 반복\n  → 사용자의 커밋 요청\n  → 최종 Git diff 검토\n  → 관련 페이지별 최종 Markdown 후보 1개 작성\n  → 스키마 검사와 wiki/site/data.js 생성\n  → 코드 + 위키 원본 + 생성 데이터를 같은 Git 커밋으로 게시\n```\n\n커밋이 실패하거나 커밋 전에 코드가 다시 바뀌면 아직 커밋되지 않은 후보본을\n최종 상태에 맞게 수정합니다. 실패한 시도 때문에 위키 버전을 추가하지 않습니다.\n\n## Markdown 저장 규칙\n\n문서는 `wiki/content/pages/<slug>/vNNN.md`에 저장합니다. 커밋된 과거 파일은\n수정하거나 삭제하지 않습니다.\n\n| 구분 | 필드 | 의미 |\n| --- | --- | --- |\n| 식별 | `id`, `title`, `category`, `tags` | 탐색과 분류 |\n| 상태 | `status`, `version`, `change_type` | 현재 상태와 변경 종류 |\n| 시간 | `created_at`, `updated_at` | 최초 게시와 해당 버전의 커밋 준비 시각 |\n| 계보 | `supersedes`, `change_summary` | 바로 이전 커밋 버전과 최종 변경 요약 |\n| 근거 | `authors`, `sources`, `related`, `validation` | 작성자, 코드 근거, 연결 문서, 실제 검증 |\n\n## 웹 기능\n\n- 카테고리별 문서 탐색과 전체 텍스트 검색\n- 최신 버전, 상태, 작성자, 태그와 근거 파일 표시\n- 모든 커밋 버전의 타임라인과 특정 버전 열람\n- 선택한 버전과 직전 버전의 줄 단위 변경점 표시\n- 카테고리, 문서, 버전, 태그와 연결 관계를 보여주는 `#/tree` 전체 트리\n- 트리 카테고리 전체 펼치기와 접기\n- 상단 플레이스 선택, Rojo 포트 상태와 시작·중지 버튼\n- 위키가 시작한 프로세스와 외부에서 실행한 Rojo 서버 구분\n- 데스크톱과 모바일 반응형 레이아웃\n\n웹은 외부 CDN이나 패키지 설치 없이 `index.html`, `app.css`, `app.js`와 생성된\n`data.js`로 동작합니다. 사람과 Codex는 Markdown 원본을 편집하고 생성기는\n브라우저 데이터를 일관되게 만듭니다.\n\n## 전체 위키 트리\n\n사이드바의 `전체 위키 트리`는 생성된 위키 데이터에서 카테고리와 문서를\n동적으로 구성합니다. 새 문서를 추가해도 별도 메뉴 코드를 수정할 필요가 없습니다.\n\n루트에는 전체 문서, 카테고리, 보존 버전, 활성 문서 수와 마지막 수정 문서를\n표시합니다. 각 문서 노드에서 다음 대상으로 이동할 수 있습니다.\n\n- 최신 문서 본문\n- 커밋된 각 버전의 전체 본문\n- 변경 이력 비교 화면\n- 메타데이터로 연결된 관련 문서\n\n## Rojo 서버 제어\n\n`python3 tools/wiki.py serve`로 연 로컬 위키는 다음 API를 함께 제공합니다.\n\n| API | 역할 |\n| --- | --- |\n| `GET /api/rojo/status` | 등록된 플레이스별 포트와 실행 상태 확인 |\n| `POST /api/rojo/start` | 선택한 프로젝트의 Rojo 서버 시작 |\n| `POST /api/rojo/stop` | 위키가 시작한 선택 서버 중지 |\n\n제어 API와 Rojo는 `127.0.0.1`에만 바인딩합니다. 실행 대상은\n`wiki/rojo-places.json`에 등록되고 저장소 안에 실제로 존재하는\n`.project.json` 파일로 제한합니다. 포트 범위와 중복도 검사합니다.\n\n같은 포트에 외부에서 실행한 서버가 있으면 `외부 실행`으로 표시합니다. 위키가\n소유하지 않은 프로세스는 강제 종료하지 않습니다. 요청 호스트, Origin과 JSON\nContent-Type을 확인해 다른 웹사이트가 로컬 제어 API를 호출하지 못하게 합니다.\n\n플레이스가 늘어나면 설정에 고유 ID, 표시 이름, 프로젝트 파일과 포트를 추가합니다.\n\n```json\n{\n  \"id\": \"another-place\",\n  \"label\": \"Another Place\",\n  \"project\": \"another-place.project.json\",\n  \"port\": 34874\n}\n```\n\n## 변경 파일\n\n- `AGENTS.md`: 위키 게시 시점을 명시적 커밋 요청으로 고정합니다.\n- `.agents/skills/update-project-wiki/SKILL.md`: 최종 diff 기반 후보 작성,\n  검증과 동일 커밋 게시 절차를 정의합니다.\n- `tools/wiki.py`: frontmatter 파싱, 버전 검사, 웹 데이터 생성, 정적 서버와\n  로컬 Rojo 상태·프로세스 제어 API를 담당합니다.\n- `wiki/site/index.html`, `wiki/site/app.js`, `wiki/site/app.css`: 문서 검색,\n  본문, 이력, diff, 전체 트리와 상단 Rojo 제어 UI를 제공합니다.\n- `wiki/rojo-places.json`: 허용된 플레이스, 프로젝트와 포트를 선언합니다.\n- `tests/test_wiki.py`: 위키 파서, 버전 연속성, 생성 데이터와 Rojo 설정을\n  검사합니다.\n- `README.md`: 위키 실행, 커밋 시점 기록과 플레이스 추가 위치를 설명합니다.\n\n## 사용 방법\n\n```sh\npython3 tools/wiki.py build\npython3 tools/wiki.py check\npython3 -m unittest tests/test_wiki.py\npython3 tools/wiki.py serve --port 4173\n```\n\n전체 트리는 `http://127.0.0.1:4173/#/tree`에서 엽니다. 상단 선택 상자로\nPackBound Rojo 상태를 확인하고 위키가 관리하는 서버를 켜거나 끌 수 있습니다.\n\n위키보다 먼저 다른 터미널에서 실행한 Rojo는 `외부 실행`으로 표시되며 안전상\n버튼으로 중지하지 않습니다. 기존 서버를 종료하고 위키 버튼으로 시작한 뒤에는\n같은 버튼으로 중지할 수 있습니다.\n\n## 검증\n\n- 위키 빌드와 스키마 검사에서 커밋 후보 4개 문서와 4개 버전을 확인했습니다.\n- Python 단위 테스트로 파서, 비연속 버전 거부, 생성 데이터 이스케이프와\n  Rojo 플레이스 설정을 확인했습니다.\n- JavaScript 문법 검사와 브라우저 콘솔 오류 검사를 통과했습니다.\n- 실제 브라우저에서 트리의 문서·버전·연결 링크, 펼치기·접기와 모바일\n  레이아웃을 확인했습니다.\n- 기존 `127.0.0.1:34873` Rojo를 `외부 실행`으로 구분하는 것을 확인했습니다.\n- PackBound 프로젝트를 임시 `127.0.0.1:34973`에서 시작해 `running`을\n  확인하고 중지 후 `stopped`로 복귀하는 것을 확인했습니다.\n\n## 결정 사항\n\n- 위키 버전은 개발 턴이 아니라 Git 커밋을 제품 이력의 경계로 사용합니다.\n- 한 커밋에서 같은 논리 페이지의 중간 버전을 여러 개 만들지 않습니다.\n- 트리는 Markdown과 생성 데이터에서 자동 파생하며 수동 목차를 두지 않습니다.\n- Rojo 프로세스 제어는 로컬 위키가 직접 시작한 한 개의 서버로 제한합니다.\n- 플레이스 목록은 코드가 아니라 검증되는 JSON 설정으로 확장합니다.\n- 생성 스크립트는 Python 표준 라이브러리만 사용합니다.\n\n## 후속 작업\n\n- 문서 수가 크게 늘어나면 트리의 태그·상태 필터와 가상 스크롤을 검토합니다.\n- 플레이스가 추가되면 고유 프로젝트 파일과 포트를 설정에 등록합니다.\n- 공개 접근이 필요해지면 정적 읽기 화면과 로컬 제어 API를 분리해 배포합니다.\n",
          "source_path": "wiki/content/pages/development-wiki/v001.md",
          "timeline_order": 1
        }
      ]
    }
  ]
};
