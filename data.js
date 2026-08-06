window.PACKBOUND_WIKI = {
  "generated_at": "2026-08-06T05:24:23+00:00",
  "page_count": 4,
  "revision_count": 10,
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
      "created_at": "2026-08-06T10:36:02+09:00",
      "updated_at": "2026-08-06T10:36:02+09:00",
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
          "created_at": "2026-08-06T10:36:02+09:00",
          "updated_at": "2026-08-06T10:36:02+09:00",
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
          "source_path": "wiki/content/pages/studio-automation-routing/v001.md"
        }
      ]
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
      "created_at": "2026-08-06T10:36:02+09:00",
      "updated_at": "2026-08-06T14:03:03+09:00",
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
      "source_path": "wiki/content/pages/character-2d-rendering/v003.md",
      "body": "# 프레임 캐릭터 렌더링과 모바일 액션 입력\n\n## 결과\n\nPackBound의 세로형 모바일 조작은 하나의 원형 컨트롤에서 이동, 대시와 패리를\n처리합니다. 이동은 아날로그 속도 보간을 사용하지 않습니다. 중앙 데드존에서는\n정지하고, 그 경계를 벗어나면 손가락 위치와 관계없이 같은 기본 이동 속도를\n사용합니다. 대시는 일반 이동 원과 물리적으로 떨어진 외부 링까지 끌어야 하며,\n중앙의 짧은 탭은 패리로 해석합니다.\n\n조이스틱 본체는 화면 너비의 20%를 지름으로 사용하되 160px을 넘지 않습니다.\n컨트롤 아래에는 향후 메뉴바 72px과 조작 여백 46px을 예약합니다. 카메라는\n128 studs 거리의 고정 쿼터뷰를 사용하고, 고정 픽셀 Billboard 캐릭터는 별도의\n0.1875 화면 스케일로 렌더링해 배경 가시성과 캐릭터 판독성을 독립적으로\n조정합니다.\n\n## 구현 내용\n\n### 고정 속도 이동과 중앙 데드존\n\n`MobileJoystickMovement`는 이동 반경을 두 상태로만 해석합니다.\n\n- 정규화 반경 `0.4` 이하: 이동량 `0`\n- 정규화 반경 `0.4` 초과: 이동량 `1`\n\n따라서 중심 근처에서 의도하지 않은 미세 이동은 차단하면서, 이동을 시작한 뒤에는\n손가락이 중심에서 얼마나 떨어졌는지와 무관하게 같은 속도를 유지합니다. 데드존은\n조이스틱 중앙에 별도 원으로 표시되어 정지 구간을 시각적으로 알 수 있습니다.\n\n### 의도적인 외부 대시\n\n대시는 기본 이동 손잡이의 최대점이나 조이스틱 외곽에 닿는 것만으로 발생하지\n않습니다. `MobileJoystickGate`는 다음 세 경계를 분리합니다.\n\n- 외부 피드백 시작 반경: `1.93`\n- 대시 발동 반경: `2.48`\n- 다음 대시 재무장 반경: `0.38`\n\n외부 링은 조이스틱 본체보다 크게 그려지고 실제 대시 임계점과 같은 반경에\n배치됩니다. iPhone 17 Pro 세로 뷰포트에서는 일반 이동 최대점에서 약 30.7px을\n더 끌고, 조이스틱 원의 바깥도 약 11.4px 넘어야 대시가 승인됩니다. 그 사이\n구간에서는 기본 이동만 계속됩니다.\n\n바깥 위치에서 터치를 시작한 입력은 대시로 무장하지 않습니다. 정상 이동 영역에서\n시작해 외부 링을 통과한 경우에만 한 번 발동하고, 중앙으로 돌아오기 전에는 같은\n드래그에서 반복 발동하지 않습니다. 대시 콜백이 실제로 승인된 순간에만 링과\n손잡이가 밝은 보라색으로 확정 표시됩니다.\n\n### 중앙 탭 패리와 입력 의도\n\n중앙에서 시작한 입력은 0.35초 이내에 놓고 의도적인 드래그가 없을 때 패리로\n처리합니다. 길게 누르거나 드래그 거리가 임계값을 넘으면 이동 제스처로\n승격합니다. 이 경계는 손가락 크기와 짧은 흔들림 때문에 이동이나 패리가 잘못\n발동하는 것을 줄이면서, 별도 전투 버튼 없이 한 손 조작을 유지하기 위한\n계약입니다.\n\n패리의 즉시 애니메이션과 반투명 보호 효과는 클라이언트가 표시하고, 유효 시간과\n재사용 검증은 서버 `ParryService`가 소유합니다. 실제 피해 취소와 공격자에게\n돌려주는 반사 피해는 이후 서버 전투 해결기가 패리 속성을 소비해 처리해야 합니다.\n\n### 반응형 크기와 하단 메뉴 예약\n\n조이스틱 본체 지름은 `viewport.X × 0.2`로 계산하고 최대 160px로 제한합니다.\n대시 링은 의도적인 오버드래그를 표현하기 위해 본체 밖으로 확장되지만, 시작\n터치는 본체 안에서만 받습니다.\n\n하단 배치는 임의의 단일 좌표 대신 두 의미 있는 값으로 관리합니다.\n\n- `BOTTOM_MENU_RESERVE = 72`: 향후 하단 메뉴바 소유 영역\n- `BOTTOM_CONTROL_PADDING = 46`: 메뉴바와 조이스틱 사이 조작 여백\n\n최종 iPhone 17 Pro 세로 플레이테스트에서 외부 대시 링 아래부터 화면 끝까지\n약 164.5px의 빈 공간을 확인했습니다. 실제 메뉴바가 추가되면 같은 72px 계약을\n공유하고, 조이스틱 위치에 별도 보정값을 중복해서 추가하지 않아야 합니다.\n\n### 카메라와 고정 픽셀 캐릭터\n\n캐릭터는 3D 메시가 아니라 `BillboardGui` 기반 프레임 스프라이트이므로 카메라를\n멀리 옮겨도 화면상의 픽셀 크기는 자동으로 줄지 않습니다. 배경 범위와 캐릭터\n가독성을 독립적으로 제어하기 위해 다음 값을 분리했습니다.\n\n- 카메라 거리: `128`\n- 카메라 FOV: `38`\n- 캐릭터 화면 스케일: `0.1875`\n- Billboard 최대 렌더 거리: `512`\n\n`FrameSpriteRig`과 호환용 `CutoutRig` 모두 중앙 기준 `UIScale`을 사용합니다.\n현재 프레임 스프라이트의 실효 캔버스는 48×48px이며, 넓은 배경을 보여주면서도\n직전 32×32px 기준보다 1.5배 크게 읽힙니다.\n\n## 변경 파일\n\n- `Config.luau`: 카메라 거리, 캐릭터 화면 스케일과 원거리 렌더 범위를 정의합니다.\n- `FrameSpriteRig.luau`, `CutoutRig.luau`: 고정 픽셀 캐릭터를 중앙 기준 화면\n  스케일로 렌더링합니다.\n- `MobileJoystickController.luau`: 반응형 크기, 데드존 표시, 외부 대시 링과\n  하단 메뉴 예약 배치를 적용합니다.\n- `MobileJoystickMovement.luau`: 데드존 밖 고정 이동량을 순수 로직으로\n  제공합니다.\n- `MobileJoystickGate.luau`: 외부 피드백, 대시 발동과 재무장 경계를 관리합니다.\n- `tests/MobileJoystickMovement.spec.luau`: 정지와 고정 이동 속도 경계를 검증합니다.\n- `tests/MobileJoystickGate.spec.luau`: 외부 중립 간격, 단발 대시와 재무장을\n  검증합니다.\n\n## 검증\n\n- 이동, 대시 게이트, 탭·드래그 제스처, 방향과 애니메이션 Luau 테스트를\n  통과했습니다.\n- 변경된 Character2D 모듈의 Luau 바이트코드 컴파일을 통과했습니다.\n- `default.project.json`과 `packbound.project.json`의 Rojo 빌드를 통과했습니다.\n- Studio MCP의 iPhone 17 Pro 세로 플레이에서 데드존 내부 이동량 `0`, 외부\n  이동량 약 `1.0`, 중립 간격의 대시 차단과 외부 링의 대시 승인을 확인했습니다.\n- 같은 플레이에서 방향키 본체 80.2px, 데드존 16.5px, 대시 링 103.1px과\n  최종 하단 빈 공간 약 164.5px을 확인했습니다.\n- Studio 기기 시뮬레이터는 검증 후 기본 뷰포트로 복구했습니다.\n\n## 제품 이유와 설계 철학\n\n- 기본 이동은 위치에 따라 느려지는 정밀 조작보다 전투 중 예측 가능한 일정 속도를\n  우선합니다. 중앙 데드존은 이 원칙을 유지하면서 손가락 흔들림만 제거합니다.\n- 대시는 향후 긴 재사용 대기시간을 갖는 비상 행동입니다. 그러므로 빠르게 쓸 수\n  있어야 하지만 실수로 소비되어서는 안 됩니다. 시간 지연 확인 대신 물리적 거리와\n  외부 링 통과를 사용해 긴급 반응성과 의도 확인을 함께 확보합니다.\n- 이동, 대시와 패리를 한 컨트롤에 통합해 세로 화면의 전투 시야와 한 손 도달성을\n  보존합니다. 기능이 많아져도 무조건 별도 버튼을 추가하지 않고 제스처 간 의미와\n  공간을 먼저 분리합니다.\n- 카메라 거리와 Billboard 픽셀 크기는 서로 다른 문제로 취급합니다. 배경을 더\n  보여주기 위한 카메라 설계가 캐릭터 판독성을 우연히 결정하지 않도록 두 값을\n  독립 제어합니다.\n- 아직 존재하지 않는 하단 메뉴도 예약 영역을 먼저 정의합니다. 후속 UI가 들어올\n  자리를 현재 조작계가 침범하지 않게 해 레이아웃 재작업과 좌표 충돌을 줄입니다.\n\n## 결정 사항\n\n- 모바일 기본 이동은 데드존 밖에서 디지털 고정 속도를 사용합니다.\n- 대시는 조이스틱 본체 밖의 별도 링을 완전히 통과해야 발동합니다.\n- 대시 확인을 위한 추가 홀드 시간은 두지 않습니다.\n- 바깥에서 시작한 터치는 대시로 인정하지 않고, 중앙 복귀를 재무장 조건으로\n  유지합니다.\n- 조이스틱 크기는 화면 너비 비율과 최대 지름으로 관리합니다.\n- 하단 메뉴 예약값과 조작 여백을 명시적 상수로 유지합니다.\n- 고정 픽셀 캐릭터의 화면 스케일과 쿼터뷰 카메라 거리를 분리합니다.\n- 패리 시각 반응은 클라이언트, 판정 창은 서버가 소유합니다.\n\n## 후속 작업\n\n- 대시에 긴 재사용 대기시간을 추가하고 외부 링에 사용 가능, 소진과 재충전 상태를\n  표시해야 합니다.\n- 실제 하단 메뉴바는 72px 예약 계약을 재사용하고 다양한 안전 영역에서 조이스틱과\n  겹치지 않는지 검증해야 합니다.\n- 다양한 실제 휴대폰에서 데드존, 외부 중립 간격과 한 손 도달성을 플레이테스트해\n  현재 임계값을 조정해야 합니다.\n- 서버 전투 해결기가 패리 유효 창을 읽어 피격 취소와 공격자 반사 피해를 적용해야\n  합니다.\n- 실제 전투 밀도와 맵 스케일에서 카메라 거리 128, 캐릭터 48px이 적과 위험 요소를\n  함께 판독하기 적절한지 검증해야 합니다.\n",
      "revisions": [
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
          "created_at": "2026-08-06T10:36:02+09:00",
          "updated_at": "2026-08-06T14:03:03+09:00",
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
          "source_path": "wiki/content/pages/character-2d-rendering/v003.md"
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
          "created_at": "2026-08-06T10:36:02+09:00",
          "updated_at": "2026-08-06T12:44:33+09:00",
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
          "source_path": "wiki/content/pages/character-2d-rendering/v002.md"
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
          "created_at": "2026-08-06T10:36:02+09:00",
          "updated_at": "2026-08-06T10:36:02+09:00",
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
          "source_path": "wiki/content/pages/character-2d-rendering/v001.md"
        }
      ]
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
      "created_at": "2026-08-06T10:36:02+09:00",
      "updated_at": "2026-08-06T12:44:33+09:00",
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
      "source_path": "wiki/content/pages/project-overview/v002.md",
      "body": "# PackBound 프로젝트 개요\n\n## 결과\n\nPackBound는 2D 캐릭터 표현과 Roblox의 3D 이동·물리를 결합한 세로형 2.5D\n아케이드 RPG 프로토타입입니다. 보이는 캐릭터는 몸통과 머리를 분리한 8방향\n프레임 아틀라스로 렌더링하고, 숨겨진 Roblox 캐릭터는 이동, 충돌과 네트워크\n기준을 유지합니다.\n\n게임플레이 기반에는 통합 모바일 조이스틱, Dash·Roll·Parry 액션, 서버 소유\n패리 창, 쿼터뷰 카메라와 백팩 공간 규칙이 포함됩니다. 개발 위키는 Git 커밋\n시점의 최종 구조를 불변 Markdown으로 기록하고 문서 트리, 이력, 태그와 로컬\nRojo 상태를 한 화면에서 탐색합니다.\n\n## 현재 개발 영역\n\n### 캐릭터 렌더링\n\n- 기본 `FrameSpriteV2`는 별도 몸통과 머리 아틀라스를 합성합니다.\n- 8방향 Move, Dash, Hit와 동·서 Death, Clear 프레임을 지원합니다.\n- 머리와 몸통 스타일은 캐릭터 속성으로 독립 교체할 수 있습니다.\n- 체력 감소와 사망은 Hit·Death 프레임 상태로 연결됩니다.\n- 이전 `FullBodyPrototype`과 장비용 `LayeredEquipment` 경로도 호환 모드로\n  유지합니다.\n\n### 카메라, 입력과 액션\n\n- 고정 쿼터뷰 카메라가 로컬 캐릭터를 부드럽게 추적합니다.\n- 세로형 터치 화면의 단일 조이스틱은 이동, 중앙 탭 패리와 바깥쪽 대시를\n  처리합니다.\n- 키보드와 게임패드의 Roll·Parry 입력은 기존 바인딩을 유지합니다.\n- 클라이언트는 즉시 애니메이션과 효과를 표시하고 서버는 패리 요청의 생존 상태,\n  쿨다운과 유효 창을 관리합니다.\n- 실제 피해 취소·반사와 Roll 무적 권한은 이후 서버 전투 해결기로 이동해야 합니다.\n\n### 아이템과 백팩 규칙\n\n- 공용 스탯 정의와 계산기가 공격, 방어, 체력, 투사체와 유틸리티 보정을\n  일관된 ID로 처리합니다.\n- 백팩 규칙 평가기는 인접, 대각선, 같은 행·열, 방향과 액티브 셀 조건을\n  아이템 좌표로 평가합니다.\n- 화상·빙결 같은 이벤트 효과는 스칼라 스탯과 분리하며 향후 효과 카탈로그가\n  담당합니다.\n\n### 개발 위키\n\n- 각 명시적 Git 커밋에서 관련 논리 페이지의 최종본만 새 불변 버전으로 만듭니다.\n- 전체 트리, 전문 검색, 버전 비교와 관련 문서 연결을 제공합니다.\n- 과거 버전을 포함한 모든 태그를 최신순, 최다순과 개발·기획·규칙·아트 테마로\n  탐색할 수 있습니다.\n- 태그를 선택하면 관련 문서의 생성·변경 시각, 요약과 본문 일부를 표시합니다.\n- 상단에서 등록된 플레이스의 로컬 Rojo 서버 상태를 확인하고 안전하게 시작하거나\n  중지할 수 있습니다.\n\n## 주요 경계\n\n| 영역 | 위치 | 책임 |\n| --- | --- | --- |\n| 캐릭터 시스템 | `src/ReplicatedStorage/Character2D` | 프레임 외형, 방향, 카메라, 입력과 클라이언트 액션 |\n| 서버 액션 | `src/ServerScriptService` | 패리 요청 검증과 서버 유효 창 |\n| 아이템 스탯 | `src/ReplicatedStorage/ItemStats` | 스탯 계산과 백팩 공간 규칙 |\n| 클라이언트 시작점 | `src/StarterPlayer/StarterPlayerScripts` | 렌더러, 카메라와 조작 부트스트랩 |\n| 개발 위키 | `wiki`, `tools/wiki.py` | 커밋 문서, 탐색 UI와 로컬 Rojo 제어 |\n\n## 로컬 실행과 검증\n\nRojo 서버는 다음 명령으로 시작합니다.\n\n```sh\n./tools/serve_packbound.sh\n```\n\n핵심 정적 검증은 두 Rojo 빌드, 전체 Luau 컴파일, 캐릭터·모바일·아이템 테스트,\n에셋 생성과 위키 검사로 구성됩니다. 라이브 Studio 상태는 Studio MCP가 노출된\n작업에서만 확인합니다.\n\n## 결정 사항\n\n- `FrameSpriteV2`를 현재 기본 시각 모드로 사용합니다.\n- 모바일 핵심 액션은 세로 화면의 한 조이스틱에 통합합니다.\n- 패리의 즉시 시각 반응과 서버 판정 권한을 분리합니다.\n- 전용 Rojo 프로젝트는 필요한 서비스와 속성을 동기화하지만 플레이스\n  `Workspace`는 소유하지 않습니다.\n- 위키는 개발 턴이 아니라 Git 커밋을 게시 경계로 사용합니다.\n\n## 후속 작업\n\n- Studio MCP로 프레임 합성, 모바일 안전 영역, 대시 방향과 서버 패리 만료를\n  라이브 검증해야 합니다.\n- 서버 전투 해결기에 패리와 Roll 판정을 연결해야 합니다.\n- 추가 머리·몸통과 장비 외형을 현재 슬롯 계약으로 확장해야 합니다.\n- 프레임 에셋 빌더의 Python 의존성을 재현 가능한 환경에 고정해야 합니다.\n",
      "revisions": [
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
          "created_at": "2026-08-06T10:36:02+09:00",
          "updated_at": "2026-08-06T12:44:33+09:00",
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
          "source_path": "wiki/content/pages/project-overview/v002.md"
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
          "created_at": "2026-08-06T10:36:02+09:00",
          "updated_at": "2026-08-06T10:36:02+09:00",
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
          "source_path": "wiki/content/pages/project-overview/v001.md"
        }
      ]
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
      "created_at": "2026-08-06T10:36:02+09:00",
      "updated_at": "2026-08-06T14:17:11+09:00",
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
      "source_path": "wiki/content/pages/development-wiki/v004.md",
      "body": "# 개발 위키와 변경 이력 시스템\n\n## 결과\n\nPackBound 개발 위키는 Git 커밋에 보존된 Markdown과 생성된 정적 데이터를\n사용합니다. 문서, 전체 트리, 변경 이력, 검색, 태그 탐색과 날짜 필터는 별도의\n공개 저장소에 읽기 전용 정적 사이트로 게시할 수 있습니다. 원본 ProjectBackpack\n저장소와 Roblox 소스는 비공개 상태를 유지합니다.\n\n로컬 개발 주소와 공개 주소의 권한은 분리합니다. Rojo 플레이스 선택, 상태 조회,\n시작과 종료 UI는 `localhost`, `127.0.0.1` 또는 로컬 IPv6 주소에서만 표시하고\n실행합니다. 공개 주소에는 Rojo 영역이 나타나지 않으며 로컬 제어 API 요청도\n보내지 않습니다.\n\n## 구현 내용\n\n### 커밋 단위의 불변 문서 이력\n\n개발 문서는 논리 페이지별 `vNNN.md` 파일로 보존됩니다. 새 커밋은 이전 버전을\n덮어쓰지 않고 다음 버전을 추가하며, `supersedes` 메타데이터로 직전 버전을\n연결합니다. 생성 시각, 수정 시각, 작성자, 변경 유형, 근거 파일과 실제 검증을\n각 버전에 함께 기록합니다.\n\n`tools/wiki.py build`는 Markdown 문서를 브라우저가 읽는 `wiki/site/data.js`로\n생성합니다. 본문과 모든 revision이 Git 커밋에 포함되므로 과거 상태를 열거나\n버전 간 차이를 확인할 수 있습니다.\n\n### 문서 탐색\n\n위키는 다음 읽기 기능을 로컬과 공개 사이트에 동일하게 제공합니다.\n\n- 카테고리별 사이드바와 전체 위키 트리\n- 최신 문서와 모든 과거 버전 열람\n- 선택 버전과 직전 버전의 변경점 비교\n- 제목, 요약, 카테고리, 태그와 본문 검색\n- 전체 revision 기반 태그 탐색과 최신·최다·테마 정렬\n- 생성일 또는 수정 이력을 기준으로 하는 독립 날짜 범위 필터\n\n날짜 범위는 문서 검색, 태그 수와 목록, 태그별 문서 결과에 공통 적용됩니다.\n범위 안에 생성되었거나 revision 수정일이 하나라도 있는 페이지가 대상이므로,\n이후에 다시 수정된 문서도 과거 작업 기간에서 찾을 수 있습니다.\n\n### 공개 읽기 전용 미러\n\n`wiki/public-publishing.json`은 정적 위키 전용 공개 저장소, 배포 브랜치와 공개\n주소를 선언합니다. `tools/publish_public_wiki.py`는 현재 생성 데이터가 Markdown\n원본과 일치하는지 먼저 검사한 뒤 임시 디렉터리에 공개 저장소를 복제합니다.\n\n게시 시 공개 저장소의 작업 트리는 `wiki/site` 내용으로 완전히 교체합니다.\nJekyll 변환을 비활성화하는 `.nojekyll`을 추가하고 원본 커밋 SHA를 공개 미러\n커밋 메시지에 남긴 뒤 배포 브랜치로 푸시합니다. 공개 저장소에는 다음 여섯 개의\n정적 파일과 `.nojekyll`만 포함됩니다.\n\n- `index.html`\n- `app.css`\n- `app.js`\n- `data.js`\n- `tag-explorer.js`\n- `local-access.js`\n\nRoblox 소스, 제작 에셋, 로컬 도구, 원본 Markdown 저장소와 Rojo 제어 서버는\n공개 미러에 복사하지 않습니다. 공개 게시 흐름은 위키 커밋과 원본 푸시가 성공한\n후 실행하므로 공개 페이지가 확정된 Git 상태를 가리킵니다.\n\n`update-project-wiki` 스킬은 공개 미러 설정이 존재할 때 원본 커밋과 푸시 후\n게시 스크립트를 실행하도록 규정합니다. 공개 미러의 파생 커밋은 새로운 위키\nrevision을 만들지 않습니다.\n\n### 로컬 전용 Rojo 제어\n\nRojo 영역은 HTML에서 기본적으로 `hidden` 상태입니다. `local-access.js`가 현재\n브라우저 주소를 검사해 다음 호스트에서만 로컬 제어를 허용합니다.\n\n- `localhost`\n- `127.0.0.1`\n- `::1`\n\n허용된 로컬 주소에서는 UI를 표시한 뒤 상태 조회를 시작하고, 플레이스 선택과\n시작·종료 이벤트를 연결합니다. 다른 모든 호스트에서는 UI를 계속 숨긴 채로\n두며 `/api/rojo/status` 폴링도 시작하지 않습니다. JavaScript가 로드되지 않거나\n오류가 발생해도 HTML과 CSS의 기본 숨김 상태가 유지되어 공개 화면에 제어 영역이\n잠깐 노출되지 않습니다.\n\n서버 측 보호도 그대로 유지합니다. `tools/wiki.py serve`와 Rojo 프로세스는\n`127.0.0.1`에만 바인딩되고, 제어 요청은 로컬 Host와 Origin을 검사합니다.\n공개 배포에는 Python 제어 서버가 포함되지 않으므로 공개 방문자는 사용자의\nMac에서 실행 중인 Rojo 프로세스에 접근할 수 없습니다.\n\n## 변경 파일\n\n- `.agents/skills/update-project-wiki/SKILL.md`: 원본 커밋과 푸시 이후 공개 미러를\n  갱신하는 게시 단계를 추가합니다.\n- `wiki/public-publishing.json`: 공개 저장소, 브랜치와 Pages 주소를 선언합니다.\n- `tools/publish_public_wiki.py`: 검증된 정적 위키만 임시 체크아웃을 통해 공개\n  저장소에 동기화합니다.\n- `wiki/site/index.html`: Rojo 컨트롤을 기본 숨김으로 전환하고 로컬 접근 판정\n  모듈을 로드합니다.\n- `wiki/site/local-access.js`: 로컬 호스트만 Rojo 제어를 허용하는 독립 판정\n  함수를 제공합니다.\n- `wiki/site/app.js`: 로컬 접근이 허용된 경우에만 Rojo UI, 이벤트와 상태 폴링을\n  활성화합니다.\n- `wiki/site/app.css`: `hidden`인 Rojo 컨트롤이 다른 표시 규칙보다 우선해\n  보이지 않도록 합니다.\n- `tests/local-access.spec.js`: 허용된 loopback 주소와 거부되는 공개 호스트를\n  검증합니다.\n\n## 검증\n\n- 위키 빌드와 생성 데이터 무결성 검사를 통과했습니다.\n- Python 위키 테스트와 기존 태그 탐색 테스트를 통과했습니다.\n- `app.js`, `local-access.js`, `tag-explorer.js`의 JavaScript 문법 검사를\n  통과했습니다.\n- Node 테스트로 localhost, IPv4·IPv6 loopback만 허용하고 공개 도메인을\n  거부하는 것을 확인했습니다.\n- 공개 게시 스크립트의 Python 문법과 설정·원본 검사를 확인했습니다.\n- `index.html`을 Python HTML 파서로 읽어 구조 오류가 없음을 확인했습니다.\n- 공개 파일에서 개인 절대 경로, 토큰과 비밀 키 패턴이 없음을 확인했습니다.\n- 커밋 대상의 공백 오류를 검사했습니다.\n\n## 결정 사항\n\n- 공개 사이트는 문서 읽기 기능만 제공하고 로컬 프로세스 제어 기능은 제공하지\n  않습니다.\n- Rojo UI는 공개 호스트를 나열하는 방식이 아니라 승인된 loopback 주소만\n  허용하는 allowlist 방식으로 판정합니다.\n- 원본 저장소 공개 여부와 위키 공개 여부를 분리하기 위해 정적 파일 전용 공개\n  저장소를 사용합니다.\n- 공개 미러는 `wiki/site`만 포함하고 원본 저장소의 다른 파일을 복제하지 않습니다.\n- 로컬 `python3 tools/wiki.py serve` 흐름은 공개 배포와 분리해 기존 개발 기능을\n  그대로 유지합니다.\n\n## 후속 작업\n\n- 공개 주소의 사용자 지정 도메인이 필요해지면 공개 저장소의 Pages 설정에\n  도메인과 DNS 검증을 추가할 수 있습니다.\n- 문서 일부를 비공개로 분리해야 할 경우 공개 빌드용 메타데이터를 도입해 페이지\n  단위 공개 범위를 명시해야 합니다.\n",
      "revisions": [
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
          "created_at": "2026-08-06T10:36:02+09:00",
          "updated_at": "2026-08-06T14:17:11+09:00",
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
          "source_path": "wiki/content/pages/development-wiki/v004.md"
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
          "created_at": "2026-08-06T10:36:02+09:00",
          "updated_at": "2026-08-06T13:57:17+09:00",
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
          "source_path": "wiki/content/pages/development-wiki/v003.md"
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
          "created_at": "2026-08-06T10:36:02+09:00",
          "updated_at": "2026-08-06T12:44:33+09:00",
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
          "source_path": "wiki/content/pages/development-wiki/v002.md"
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
          "created_at": "2026-08-06T10:36:02+09:00",
          "updated_at": "2026-08-06T10:36:02+09:00",
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
          "source_path": "wiki/content/pages/development-wiki/v001.md"
        }
      ]
    }
  ]
};
