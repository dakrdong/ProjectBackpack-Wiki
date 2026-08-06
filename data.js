window.PACKBOUND_WIKI = {
  "generated_at": "2026-08-06",
  "page_count": 6,
  "revision_count": 19,
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
          "source_path": "wiki/content/pages/studio-automation-routing/v001.md"
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
          "source_path": "wiki/content/pages/backpack-combat-stat-database/v001.md"
        }
      ]
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
      "source_path": "wiki/content/pages/inventory-item-concept/v003.md",
      "body": "# 인벤토리와 아이템 개념\n\n## 기획 배경과 목표\n\nPackBound의 아이템은 그림과 점유 칸이 따로 노는 데이터가 아니라, 외형 자체가 공간\n퍼즐의 규칙을 설명해야 합니다. 32종 아이콘과 칸 배열을 표로 확정한 뒤에는 실제 UI에서\n이미지가 칸 중심과 미세하게 어긋나거나 실루엣에 맞는 점유 형태를 다시 조정해야 하는\n운영 단계가 남습니다. 이 조정을 코드 좌표로만 반복하면 기획자가 결과를 즉시 확인하기\n어렵고 이미지와 게임 데이터가 다시 갈라질 위험이 있습니다.\n\n이번 목표는 아이템을 눈으로 보면서 배율, 위치와 점유 칸을 한 화면에서 맞추고, 저장한\n최종 결과만 게임에 적용하는 것입니다. 편집 도구는 로컬 개발 환경에 두고 공개 위키는\n카탈로그를 읽는 용도로 제한합니다.\n\n## 사용자 경험\n\n- ItemDB의 각 아이템에서 `Edit`을 누르면 선택한 아이콘과 5x5 칸 편집기가 열립니다.\n- 이미지 배율 숫자를 바꾸면 즉시 크기가 변하고, 이미지를 드래그해 칸 기준 위치를\n  조정할 수 있습니다.\n- `칸 설정하기`를 누르면 이미지는 반투명·비선택 상태가 되고 바닥 칸만 선택됩니다.\n- 저장 전에 점유 칸 없음, 5칸 범위 초과, 대각선으로만 분리된 영역을 명확한 오류로\n  막습니다.\n- 저장된 배율·위치·점유 형태는 다음 위키 빌드와 게임 인벤토리에서 같은 결과로\n  재현됩니다.\n\n## 핵심 원칙과 설계 철학\n\n### 시각 조정과 규칙 검증을 한 흐름으로 묶는다\n\n아이콘 배치는 눈으로 조정하지만 점유 형태는 게임 규칙을 따라야 합니다. 선택 칸은 한\n칸 이상이어야 하며 가로·세로 각각 5칸을 넘을 수 없고 모든 칸이 상하좌우로 연결되어야\n합니다. 대각선 접촉만으로는 하나의 아이템으로 인정하지 않습니다.\n\n### 저장 전에는 게임을 바꾸지 않는다\n\n편집기를 열거나 값을 시험하는 동안에는 기존 게임 배치가 유지됩니다. `저장`이 성공한\n아이템만 명시적인 override가 되어 런타임 기본값 위에 적용됩니다. 중간 조정이 게임에\n새어 들어가지 않아 시각 실험과 제품 상태를 분리합니다.\n\n### 원본은 하나이고 출력은 용도별로 생성한다\n\n점유 칸은 아이템 아트 카탈로그, 배율·상대 위치는 작은 layout 문서가 소유합니다.\n생성기는 두 원본을 결합해 위키용 ItemDB와 게임용 Luau 데이터를 만듭니다. 브라우저와\n게임이 서로 다른 수기 값을 갖지 않으므로 한 번 저장한 최종 배치를 같은 방식으로\n검증할 수 있습니다.\n\n## 결정 사항과 범위\n\n편집 권한은 `localhost`, `127.0.0.1`, 로컬 IPv6 주소에서만 허용합니다. 공개 위키에는\n아이템 이미지, 제원과 점유 형태는 보이지만 `Edit` 열, 편집 팝업과 저장 API는 없습니다.\n저장 API도 로컬 Host·Origin과 JSON 요청을 확인합니다.\n\n편집 캔버스는 현재 게임의 최대 아이템 범위에 맞춰 5x5로 고정했습니다. 임의 회전,\n아이템 능력치 편집과 신규 아이템 생성은 이번 범위에 포함하지 않습니다. 이 기능은\n이미 존재하는 아이템의 이미지 배치와 점유 형태를 안전하게 조정하는 도구입니다.\n\n## 시안과 현재 결과\n\n![모바일 백팩 인벤토리 시안](./media/inventory-item-concept/v003/inventory-concept.png \"상단 자원, 중앙 다칸 격자, 하단 아이템 목록으로 구성한 승인 시안\")\n\n시안의 핵심은 아이템 실루엣과 점유 칸을 중앙 격자에서 동시에 읽는 구조입니다. 로컬\n편집기는 같은 원칙을 운영 도구로 옮겨 이미지와 칸을 한 화면에서 직접 맞춥니다.\n\n![로컬 ItemDB 칸 편집기](./media/inventory-item-concept/v003/itemdb-layout-editor-result.jpg \"안테나 리커브 보우의 배율, 이미지 위치와 여섯 연결 칸을 함께 조정하는 로컬 전용 편집 화면\")\n\n![Roblox Studio 인벤토리 적용 결과](./media/inventory-item-concept/v003/studio-backpack-runtime-result.jpg \"Studio 플레이에서 아이템 이미지와 다칸 점유 형태가 동일한 배치 계약으로 표시된 최종 결과\")\n\n현재 게임 인벤토리는 승인 시안의 정보 계층을 유지하면서 6x6 보드, 열린 칸, 아이템\n점유 형태, 선택 아이템 정보와 하단 목록을 표시합니다. ItemDB에서 저장된 아이템은\n생성된 layout을 사용하고 아직 저장하지 않은 아이템은 검증된 기존 런타임 기본값을\n사용합니다.\n\n## 구현 참고\n\n`tools/item_db.py`는 32종 카탈로그의 ID, 이미지, 256픽셀 칸 단위, 좌표 연결성과 크기\n계약을 검증합니다. 로컬 저장 요청은 선택 좌표를 좌상단 원점으로 정규화하고 카탈로그의\n상세·요약 배열과 layout 문서를 함께 갱신한 뒤 위키 데이터와\n`GeneratedItemLayouts.luau`를 다시 생성합니다. 실패하면 원본을 복구해 반쪽 저장을\n남기지 않습니다.\n\n게임에서는 `ItemCatalog`가 저장된 생성 layout을 우선 사용하고 기존 형태를 fallback으로\n유지합니다. `Screen`은 배율, 상대 위치, 이미지 캔버스 크기와 점유 좌표를 함께 사용해\n보드와 하단 아이템 카드에 동일한 실루엣을 배치합니다.\n\n## 검증\n\nPython과 JavaScript 테스트로 빈 선택, 대각선 분리, 5x5 범위 밖 좌표, 중복 좌표와 잘못된\n배율을 거부하는지 확인했습니다. 카탈로그 32행, 실제 PNG, 점유 패턴과 좌표, 생성된\n게임 layout이 서로 일치하는지도 검사했습니다.\n\n브라우저에서 로컬 ItemDB의 32개 `Edit` 버튼, 5x5 편집기, 선택 아이템 이미지, 배율 입력,\n여섯 선택 칸과 저장 규칙을 확인했습니다. Roblox Studio MCP 플레이에서는\n`PackBoundBackpackGui`가 로드되고 여러 형태의 아이템이 연결된 다칸 영역에 표시되는 것을\n확인했습니다.\n\n## 후속 기획\n\n- 실제 밸런스 조정에서 아이템 크기가 바뀔 때 능력치·희귀도와 점유 비용을 함께 검토합니다.\n- 회전별 별도 이미지가 필요해질 때 현재 단일 방향 계약을 확장하되 동일한 연결성 검증을\n  유지합니다.\n- 신규 아이템 생성은 이미지 제작, ID·태그·능력치 승인과 점유 편집을 하나의 별도 등록\n  흐름으로 설계합니다.\n",
      "revisions": [
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
          "source_path": "wiki/content/pages/inventory-item-concept/v003.md"
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
          "source_path": "wiki/content/pages/inventory-item-concept/v002.md"
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
          "source_path": "wiki/content/pages/inventory-item-concept/v001.md"
        }
      ]
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
      "source_path": "wiki/content/pages/character-2d-rendering/v004.md",
      "body": "# 프레임 캐릭터 렌더링과 스프라이트 제작\n\n## 결과\n\nPackBound의 플레이어는 `BillboardGui` 기반 프레임 스프라이트로 표시되며 머리와\n몸을 독립적으로 교체할 수 있습니다. 기존 라이브 프레임 시트는 현재 게임을\n표시하는 프로토타입으로 유지하되, 후속 최종 원화는 한 파일에 한 방향·한 프레임만\n담는 별도 제작 파이프라인을 통과해야 합니다.\n\n승인된 2등신 캐릭터, 전기 보라색 가방, 높은 쿼터탑 카메라 가독성과 장난감 같은\n폐품 세계의 아트 방향을 문서로 고정했습니다. 제작 매니페스트는 몸 192프레임과\n머리 10포즈의 파일 경로, 방향, 프레임 수, 재생 속도와 품질 게이트를 정의합니다.\n2026-08-06 현재 South 걷기 8프레임과 South 중립 머리만 승인됐으며, 나머지\n193개 원화는 제작 전 상태입니다. 따라서 이번 변경은 라이브 아틀라스를 교체하지\n않습니다.\n\n## 런타임과 아트 계약\n\n런타임 외형은 `Head`와 `Body` 두 슬롯으로 나뉩니다. 머리는 머리카락, 얼굴,\n머리 장식과 표정을 소유하고, 몸은 목 아래 의상, 팔다리, 신발, 가방과 가방 장식을\n소유합니다. 모든 제작물은 다음 공통 규격을 따릅니다.\n\n- 원본: 투명 배경 256×256 RGBA PNG\n- 런타임 셀: 128×128 RGBA PNG\n- 몸 루트: 마스터 좌표 `(128, 224)`\n- 안전 여백: 네 변에서 최소 16px\n- 방향: South부터 시계 방향으로 정의한 8방향\n- 머리 합성: 프레임별 사람이 승인한 목 앵커 사용\n\n바운딩박스 중심은 가방과 큰 신발 때문에 방향과 포즈마다 달라지므로 자동 정렬\n기준으로 사용하지 않습니다. 고정 루트, 실제 접지 발과 목 앵커를 기준으로 몸과\n머리를 합성합니다.\n\n## 애니메이션 제작 계약\n\n걷기는 `left_contact`, `left_down`, `left_passing`, `left_up`,\n`right_contact`, `right_down`, `right_passing`, `right_up`의 8단계로 구성하고\n8fps로 재생합니다. 두 반주기는 서로 다른 발이 앞서야 하며 마지막 프레임에서 첫\n프레임으로 연결될 때도 루트와 목이 튀지 않아야 합니다.\n\n전체 몸 모션 계약은 다음과 같습니다.\n\n- Idle: 8방향 × 4프레임, 6fps\n- Walk: 8방향 × 8프레임, 8fps\n- Dash: 8방향 × 6프레임, 15fps\n- Hit: 8방향 × 4프레임, 12fps\n- Death: West 8프레임 제작 후 East 전체 합성 반전, 12fps\n- Clear: South 8프레임, 12fps\n\n머리는 8방향 중립 포즈와 East·West 피격 포즈를 개별 파일로 관리합니다. 공격은\n자동 공격 시스템의 책임이므로 플레이어 스프라이트 모션 계약에 포함하지 않습니다.\n\n## 제작 도구와 검증\n\n`sprite_animation_pipeline.py`는 제작 폴더 생성, 메타데이터 병합, 원화 검증,\n컨택트시트·방향별 스트립·GIF 생성과 최종 패킹을 담당합니다. 검증기는 이미지\n크기와 RGBA 모드뿐 아니라 다음 항목도 검사합니다.\n\n- 파일 경로, 방향 순서, 프레임 수와 보행 위상 순서\n- 안전 여백 침범과 잘못 남은 연결 조각\n- 접지 발, 루트와 목 앵커의 유효성\n- 양발 교대, 루프 연결과 발 미끄러짐\n- 고정 상체 폭, 전체 실루엣 폭과 높이 드리프트\n- 프레임·방향 승인 상태와 South 보행 승인 게이트\n- 중복 프레임과 머리·몸 합성 연속성\n\n균일 크기 보정은 목과 발 사이 길이만 보고 전체 이미지를 늘리지 않습니다. 상체\n폭을 유지한 채 하체를 접지선에 맞추는 조정 도구를 제공해 포즈마다 가방과 어깨가\n커졌다 작아지는 현상을 줄입니다. 별도 크로마 제거 도구는 이미지 테두리에 연결된\n배경색만 제거해 캐릭터 내부의 같은 계열 색상을 보존합니다.\n\n`validate --allow-missing`은 사전 제작 단계에서 존재하는 파일을 엄격히 검사하면서\n아직 만들지 않은 파일만 경고로 허용합니다. `pack`은 전체 64개 걷기 프레임과\n8개 중립 머리가 모두 준비되고 승인되기 전에는 실패합니다. 성공하더라도 결과는\n`Build`에만 생성하며 현재 라이브 아틀라스를 자동 덮어쓰지 않습니다.\n\n## 현재 승인 상태\n\nSouth 걷기 8프레임과 South 중립 머리는 정규화, 개별 메타데이터 입력과 QA\n스트립·GIF 검수를 거쳤고 `southWalkGateApproved=true`로 기록됐습니다. 이\nSouth 전용 QA 자료는 제작 승인 증거이며 게임에서 사용하는 라이브 아틀라스가\n아닙니다.\n\n현재 검사에서는 준비된 모든 파일과 계약이 통과했고, 아직 제작하지 않은 193개\n원화만 사전 제작 경고로 보고됐습니다. 다음 제작 우선순위는 East와 North 걷기이며,\n두 방향을 승인한 뒤 대각선과 반대 방향으로 확장합니다. Walk 전체 승인 전에는\nIdle, Dash, Hit, Death와 Clear 제작 및 런타임 승격을 진행하지 않습니다.\n\n## 모바일 렌더링과 조작의 기존 결정\n\n캐릭터는 화면상 고정 픽셀 크기를 사용하고 쿼터뷰 카메라 거리와 캐릭터 화면\n스케일을 독립적으로 제어합니다. 현재 카메라 거리는 128, FOV는 38, 캐릭터 화면\n스케일은 0.1875입니다.\n\n모바일 이동은 중앙 데드존 밖에서 고정 속도로 동작하고, 대시는 조이스틱 바깥의\n별도 링을 통과할 때만 발동합니다. 중앙의 짧은 탭은 패리로 처리합니다. 이 입력과\n카메라 계약은 이번 아트 제작 파이프라인 변경으로 수정하지 않았습니다.\n\n## 결정 사항\n\n- 승인된 캐릭터와 세계 아트 방향을 후속 제작의 기준으로 유지합니다.\n- 기존 다중 포즈 생성 시트는 디자인 참고용으로만 사용하고 최종 모션 원본으로\n  보정하거나 트레이싱하지 않습니다.\n- 최종 애니메이션은 한 파일에 한 프레임을 제작하고 명시적 루트·접지·목 앵커로\n  정렬합니다.\n- 매니페스트와 프레임 메타데이터를 방향, 프레임 수, 경로와 승인 상태의 단일\n  기준으로 사용합니다.\n- 부분 완성 결과는 QA에만 사용하며 전체 계약을 통과하기 전 라이브 아틀라스를\n  교체하지 않습니다.\n- 이미지 생성 모델은 캐릭터 디자인과 단일 키포즈 참고에 사용하되 프레임 연속성과\n  좌우 발 일관성은 제작·검증 단계에서 별도로 보장합니다.\n\n## 후속 작업\n\n- East와 North 걷기 8프레임을 같은 승인 절차로 제작합니다.\n- 대각선과 반대 방향에서 헤드밴드, 짝짝이 양말, 가방과 오리 장식의 소유 방향을\n  수동 검수합니다.\n- 8방향 Walk가 모두 승인된 뒤 Idle, Dash, Hit, Death와 Clear를 제작합니다.\n- 전체 strict validation과 게임 내 방향·합성 테스트를 통과한 결과만 라이브\n  런타임 후보로 승격합니다.\n",
      "revisions": [
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
          "source_path": "wiki/content/pages/character-2d-rendering/v004.md"
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
          "source_path": "wiki/content/pages/character-2d-rendering/v001.md"
        }
      ]
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
      "source_path": "wiki/content/pages/project-overview/v004.md",
      "body": "# PackBound 프로젝트 개요\n\n## 결과\n\nPackBound는 2D 캐릭터 표현과 Roblox의 3D 이동·물리를 결합한 세로형 2.5D\n아케이드 RPG 프로토타입입니다. 보이는 캐릭터는 몸통과 머리를 분리한 8방향\n프레임 아틀라스로 렌더링하고, 숨겨진 Roblox 캐릭터는 이동, 충돌과 네트워크\n기준을 유지합니다.\n\n현재 플레이 액션은 `Dash`와 `Parry` 두 가지입니다. PC에서는 좌·우 `Shift`로\n대시하고 `Space`로 쳐내며, 모바일에서는 하나의 조이스틱이 이동, 중앙 짧은 탭\n쳐내기와 외부 링 대시를 처리합니다. 구르기는 게임 기획에 없는 기능이므로 입력,\n런타임 상태, 렌더링과 문서 어디에서도 지원하지 않습니다.\n\n## 구현 내용\n\n### 입력과 액션\n\n- `PlayerActionController`는 대시와 쳐내기만 바인딩하고 실행합니다.\n- PC의 `LeftShift`와 `RightShift`는 대시, `Space`는 쳐내기입니다.\n- `Space`는 프로젝트 입력 우선순위에서 소비해 Roblox 기본 점프가 함께 발생하지\n  않습니다.\n- 게임패드 `ButtonX`는 쳐내기를 유지합니다. `ButtonA`에는 별도 액션을\n  배정하지 않았습니다.\n- 모바일 중앙 짧은 탭과 외부 링 드래그는 같은 `TryParry`, `TryDash` 경로를\n  사용합니다.\n\n### 구르기 계약 제거\n\n- `Q`, `ButtonA`와 자동 생성 터치 `ROLL` 버튼 바인딩을 삭제했습니다.\n- 구르기 속도·지속시간·쿨다운 설정과 `PackBoundRollInvulnerable` 속성을\n  삭제했습니다.\n- `TryRoll`, 지연 무적 창 스케줄러와 구르기 전용 액션 상태를 삭제했습니다.\n- 절차형 구르기 포즈와 이펙트, 프레임 스프라이트의 구르기→대시 대체 렌더링을\n  삭제했습니다.\n- 액션 문서와 애니메이션 테스트는 대시·쳐내기 계약만 설명하고 검증합니다.\n\n### 현재 렌더링과 모바일 계약\n\n- 기본 `FrameSpriteV2`는 별도 몸통과 머리 아틀라스를 합성합니다.\n- 8방향 Move, Dash, Hit와 동·서 Death, Clear 프레임을 지원합니다.\n- 모바일 이동은 중앙 데드존 밖에서 고정 속도이며, 대시는 조이스틱 본체와\n  물리적으로 떨어진 외부 링을 넘어야 발동합니다.\n- 쳐내기는 0.3초 서버 유효 창을 사용하며 현재 클라이언트에 반투명 보호 효과를\n  즉시 표시합니다.\n\n## 변경 파일\n\n| 파일 | 최종 책임 |\n| --- | --- |\n| `Config.luau` | 대시·쳐내기 설정과 서버 패리 속성만 유지 |\n| `PlayerActionController.luau` | PC·게임패드 입력, 대시 추진과 쳐내기 요청 |\n| `CharacterController.luau` | 구르기를 제외한 시각 액션 상태 재생 |\n| `AnimationLibrary.luau` | Dash·Parry 절차형 포즈 |\n| `FrameSpriteRig.luau` | 실제 프레임 상태를 다른 액션으로 위장하지 않고 렌더링 |\n| `CutoutRig.luau` | Dash·Parry 액션 이펙트 |\n| `README.md`, `character-actions.md` | 공식 플랫폼별 입력과 런타임 계약 |\n| `AnimationLibrary.spec.luau` | 현재 지원하는 액션 포즈 회귀 테스트 |\n\n## 검증\n\nRojo 플레이스 빌드와 변경된 여섯 Luau 모듈 컴파일이 성공했습니다. 절차형\n애니메이션, 8방향 해석, 모바일 대시 게이트, 탭·드래그 판정과 디지털 이동\n테스트도 모두 통과했습니다. 활성 소스·문서·테스트에서는 구르기 이름, 바인딩과\n무적 속성 참조가 더 이상 발견되지 않았습니다.\n\nStudio 플레이 테스트에서는 `PackBoundRoll` 액션과 구르기 속성이 등록되지\n않았고 `Q`를 눌러도 액션 시리얼이 0에 머물렀습니다. 이어서 `Shift`는 `Dash`,\n`Space`는 `Parry`를 발생시켰으며 쳐내기 후에도 휴머노이드는 점프하지 않았습니다.\n\n## 결정 사항\n\n- 구현된 프로토타입이라는 이유만으로 기획에 없는 액션을 호환 기능으로 유지하지\n  않습니다.\n- 공식 액션 목록, 입력, 설정, 시각 상태와 테스트는 같은 계약을 가져야 합니다.\n- 사용하지 않는 무적 속성과 서버 확장 의무를 남기지 않아 후속 전투 해결기가\n  존재하지 않는 구르기 판정을 구현해야 한다는 오해를 방지합니다.\n- 구르기 입력만 끄는 대신 관련 코드와 시각 처리를 함께 제거해 죽은 분기와 모바일\n  UI 노출 가능성을 없앱니다.\n- 현재 PC 계약은 `Shift = Dash`, `Space = Parry`이며 모바일은 통합 조이스틱을\n  유지합니다.\n\n## 후속 작업\n\n- 대시에 긴 재사용 대기시간을 도입할 때 PC와 모바일이 같은 사용 가능 상태와\n  피드백을 공유해야 합니다.\n- 실제 피해 해결기에 0.3초 쳐내기 창의 피해 취소와 공격자 반사를 연결해야 합니다.\n- 게임패드 대시 키와 전체 액션 재바인딩 정책은 게임패드 UX 작업에서 확정합니다.\n",
      "revisions": [
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
          "source_path": "wiki/content/pages/project-overview/v004.md"
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
          "source_path": "wiki/content/pages/project-overview/v003.md"
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
          "source_path": "wiki/content/pages/project-overview/v001.md"
        }
      ]
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
      "source_path": "wiki/content/pages/development-wiki/v006.md",
      "body": "# 개발 위키와 변경 이력 시스템\n\n## 기획 배경과 목표\n\n공개 위키의 목적은 팀이 개발 결과와 기획 흐름을 함께 이해하도록 돕는 것입니다. 작업이\n추가되거나 바뀐 날짜는 문서 탐색에 필요하지만, 개인이 어느 시각에 작업했는지는 이 목적에\n필요하지 않습니다. 따라서 공개 범위는 날짜로 제한하고 정확한 시각은 로컬 개발 이력에만\n남기는 것이 원칙입니다.\n\n이전 버전은 브라우저 화면에서 시·분을 숨겼지만 공개 정적 파일에는 원본 ISO 타임스탬프가\n포함되어 있었습니다. 일반 독자에게 보이지 않더라도 파일을 직접 열면 확인할 수 있으므로\n프라이버시 경계가 충분하지 않았습니다. 이번 수정은 화면 표현이 아니라 공개 배포물 자체를\n날짜 단위 데이터로 만드는 데 목적이 있습니다.\n\n## 사용자 경험\n\n- 공개 페이지의 최초 생성, 마지막 변경, 버전 이력과 DB 원본 변경 정보는 날짜까지만 봅니다.\n- 공개 저장소의 생성 데이터 파일을 직접 확인해도 시·분·초와 시간대를 알 수 없습니다.\n- 로컬 위키에서는 기존처럼 정확한 시간을 확인해 개발 이력을 세밀하게 추적할 수 있습니다.\n- Rojo 서버 제어와 ItemDB 편집은 계속 로컬에서만 제공됩니다.\n\n![공개 위키의 날짜 단위 변경 정보](./media/development-wiki/v006/public-date-only-result.jpg \"공개 호스트 조건에서 시각 없이 날짜만 표시되고 로컬 제어가 숨겨진 최종 화면\")\n\n## 핵심 원칙과 설계 철학\n\n### 공개 데이터는 화면보다 먼저 안전해야 한다\n\nCSS나 날짜 포맷터는 표시만 바꿀 뿐 전송된 값을 지우지 않습니다. 공개 배포 단계에서\n모든 텍스트 자산의 ISO 타임스탬프를 `YYYY-MM-DD`로 축약해 브라우저가 처음부터 정확한\n시각을 받지 않도록 합니다. 화면의 로컬·공개 표시 분기는 이 데이터 경계를 보조하는\n두 번째 방어선입니다.\n\n### 로컬 원본과 공개 사본의 책임을 나눈다\n\n불변 Markdown 원본과 로컬 `wiki/site` 생성물은 커밋 시각과 버전 계보를 정확히 보존합니다.\n공개 저장소는 이 원본의 읽기 전용 사본이지만, 공유 목적에 필요하지 않은 시간 정밀도는\n제거합니다. 따라서 이력 추적 능력과 외부 공개 프라이버시를 동시에 유지합니다.\n\n### 실수하면 공개하지 않는다\n\n배포 준비가 끝난 뒤 공개 텍스트 자산 전체를 다시 검사합니다. 정확한 ISO 타임스탬프가\n하나라도 남아 있으면 파일명과 함께 실패하고 커밋·푸시를 시작하지 않습니다. 새 데이터\n모듈이 추가되어도 별도 목록 등록 없이 같은 검사를 받습니다.\n\n## 결정 사항과 범위\n\n배포 도구가 복사하는 HTML, CSS, JavaScript, JSON, source map, Markdown, text와 XML을\n검사 대상으로 삼았습니다. 이미지 같은 바이너리는 텍스트로 해석하거나 다시 쓰지 않습니다.\n타임스탬프는 날짜 부분만 보존하므로 최신순 정렬과 날짜 필터는 계속 동작합니다.\n\n공개 Git 이력의 재작성은 범위에 포함하지 않습니다. 최신 공개 배포본에서 정확한 시각을\n제거하고, 앞으로의 모든 배포가 같은 비노출 검사를 통과하도록 하는 데 집중합니다.\n\n## 현재 결과\n\n`tools/publish_public_wiki.py`는 공개 저장소에 파일을 올리기 전에 별도 임시 트리를 만들고\n정확한 타임스탬프를 날짜로 축약합니다. 이어서 잔여 타임스탬프 검사를 통과해야만 공개\n커밋과 푸시를 수행합니다. `--check`도 실제 공개 트리 준비 과정을 실행하므로 배포 전에\n동일한 프라이버시 조건을 확인할 수 있습니다.\n\n로컬 사이트의 `data.js`와 `combat-db-data.js`는 정확한 시간을 유지합니다. 공개 사본에서는\n같은 필드가 `2026-08-06`처럼 날짜만 가지며 화면도 날짜까지만 렌더링합니다.\n\n## 구현 참고\n\n정규식은 초와 소수 초가 있거나 없는 ISO 시각, `Z` 또는 숫자 시간대를 모두 인식합니다.\n치환과 검증을 독립된 함수로 나눠 단위 테스트가 실제 배포 없이 정상 축약, 바이너리 보존과\n잔여 시각 차단을 각각 확인합니다.\n\n## 검증\n\n단위 테스트에서 서로 다른 ISO 형식을 같은 날짜로 축약하고, 이미지 파일은 변경하지 않으며,\n잔여 시각이 있는 JavaScript 파일은 공개 검증을 실패시키는지 확인했습니다. 공개 호스트\n미리보기에서는 생성·변경 정보가 날짜만 표시되고 Rojo 영역과 ItemDB 편집 버튼이 보이지\n않는지 확인했습니다.\n\n## 후속 기획\n\n- 공개해야 할 메타데이터 종류가 늘어나면 허용 필드 중심의 공개 스키마를 검토합니다.\n- 공개 저장소의 과거 커밋까지 제거해야 하는 상황이 생기면 별도의 이력 재작성 작업으로\n  범위와 영향도를 먼저 검토합니다.\n",
      "revisions": [
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
          "source_path": "wiki/content/pages/development-wiki/v006.md"
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
          "source_path": "wiki/content/pages/development-wiki/v005.md"
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
          "source_path": "wiki/content/pages/development-wiki/v001.md"
        }
      ]
    }
  ]
};
