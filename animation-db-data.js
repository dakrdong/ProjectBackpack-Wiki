window.PACKBOUND_ANIMATION_DB = {
  "schema_version": 2,
  "revision": "cf7e74a9f9ea56af",
  "source": "Assets/**/SpriteProduction/Candidates + Assets/Monsters/Runtime",
  "count": 41,
  "live_count": 35,
  "character_count": 7,
  "active_monster_count": 6,
  "registered_monster_count": 6,
  "registered_monster_ids": [
    "grass_vine_monster",
    "whirl_dash_spirit",
    "fanburst_artillery",
    "stampfoot_leaper",
    "walking_nest",
    "nest_hatchling_lizard"
  ],
  "curation_monster_count": 6,
  "curation_monster_ids": [
    "grass_vine_monster",
    "whirl_dash_spirit",
    "fanburst_artillery",
    "stampfoot_leaper",
    "walking_nest",
    "nest_hatchling_lizard"
  ],
  "actions": [
    "Attack",
    "AttackAirborne",
    "AttackAnticipation",
    "AttackLand",
    "Dash",
    "Death",
    "Hit",
    "Idle",
    "IdleHover",
    "ImpactFX",
    "MorphSpin",
    "OrbDash",
    "Projectile",
    "Run",
    "Spawn",
    "VineEruption",
    "Walk"
  ],
  "records": [
    {
      "id": "fanburstartillery-idle-runtime",
      "entity_type": "monster",
      "character": "FanburstArtillery",
      "character_label": "부채탄 포대충",
      "runtime_monster_id": "fanburst_artillery",
      "action": "Idle",
      "action_label": "대기",
      "title": "부채탄 포대충 · 대기",
      "candidate": "runtime",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 8,
      "fps": 8.0,
      "duration_seconds": 1.0,
      "directions": [
        "East"
      ],
      "loop": true,
      "created_at": null,
      "runtime_asset_id": "rbxassetid://79032332603164",
      "runtime_source": "Raw/Idle/idle-east-2x4-magenta-r2.png",
      "source_root": "Assets/Monsters/Runtime/FanburstArtillery",
      "variants": [
        {
          "id": "east-runtime",
          "label": "게임 적용본",
          "direction": "East",
          "preview_url": "./animation-media/fanburstartillery-idle-runtime/east-runtime-preview-d59bea6dbf.gif",
          "contact_sheet_url": "./animation-media/fanburstartillery-idle-runtime/east-runtime-atlas-17d5cd017a.png",
          "source": "Assets/Monsters/Runtime/FanburstArtillery/idle-east-8x128.png"
        }
      ],
      "selection_group": "monster:FanburstArtillery:Idle",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "fanburstartillery-walk-runtime",
      "entity_type": "monster",
      "character": "FanburstArtillery",
      "character_label": "부채탄 포대충",
      "runtime_monster_id": "fanburst_artillery",
      "action": "Walk",
      "action_label": "걷기",
      "title": "부채탄 포대충 · 걷기",
      "candidate": "runtime",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 8,
      "fps": 10.0,
      "duration_seconds": 0.8,
      "directions": [
        "East"
      ],
      "loop": true,
      "created_at": null,
      "runtime_asset_id": "rbxassetid://102235991715580",
      "runtime_source": "Raw/Walk/walk-east-2x4-magenta-r2.png",
      "source_root": "Assets/Monsters/Runtime/FanburstArtillery",
      "variants": [
        {
          "id": "east-runtime",
          "label": "게임 적용본",
          "direction": "East",
          "preview_url": "./animation-media/fanburstartillery-walk-runtime/east-runtime-preview-f724ce3272.gif",
          "contact_sheet_url": "./animation-media/fanburstartillery-walk-runtime/east-runtime-atlas-70214b49fb.png",
          "source": "Assets/Monsters/Runtime/FanburstArtillery/walk-east-8x128.png"
        }
      ],
      "selection_group": "monster:FanburstArtillery:Walk",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "fanburstartillery-attack-runtime",
      "entity_type": "monster",
      "character": "FanburstArtillery",
      "character_label": "부채탄 포대충",
      "runtime_monster_id": "fanburst_artillery",
      "action": "Attack",
      "action_label": "공격",
      "title": "부채탄 포대충 · 공격",
      "candidate": "runtime",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 12,
      "fps": 15.0,
      "duration_seconds": 0.8,
      "directions": [
        "East"
      ],
      "loop": false,
      "created_at": null,
      "runtime_asset_id": "rbxassetid://93830802283521",
      "runtime_source": "Raw/Attack/attack-east-3x4-magenta-r2.png",
      "source_root": "Assets/Monsters/Runtime/FanburstArtillery",
      "variants": [
        {
          "id": "east-runtime",
          "label": "게임 적용본",
          "direction": "East",
          "preview_url": "./animation-media/fanburstartillery-attack-runtime/east-runtime-preview-1388498edb.gif",
          "contact_sheet_url": "./animation-media/fanburstartillery-attack-runtime/east-runtime-atlas-abb0c87ebb.png",
          "source": "Assets/Monsters/Runtime/FanburstArtillery/attack-east-12x128.png"
        }
      ],
      "selection_group": "monster:FanburstArtillery:Attack",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "fanburstartillery-projectile-runtime",
      "entity_type": "monster",
      "character": "FanburstArtillery",
      "character_label": "부채탄 포대충",
      "runtime_monster_id": "fanburst_artillery",
      "action": "Projectile",
      "action_label": "발사체",
      "title": "부채탄 포대충 · 발사체",
      "candidate": "runtime",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 6,
      "fps": 18.0,
      "duration_seconds": 0.333,
      "directions": [
        "Omni"
      ],
      "loop": true,
      "created_at": null,
      "runtime_asset_id": "rbxassetid://135685269583200",
      "runtime_source": "Raw/Projectile/projectile-omni-2x3-magenta.png",
      "source_root": "Assets/Monsters/Runtime/FanburstArtillery",
      "variants": [
        {
          "id": "omni-runtime",
          "label": "게임 적용본",
          "direction": "Omni",
          "preview_url": "./animation-media/fanburstartillery-projectile-runtime/omni-runtime-preview-51f717d46f.gif",
          "contact_sheet_url": "./animation-media/fanburstartillery-projectile-runtime/omni-runtime-atlas-a73c74b29a.png",
          "source": "Assets/Monsters/Runtime/FanburstArtillery/projectile-omni-6x128.png"
        }
      ],
      "selection_group": "monster:FanburstArtillery:Projectile",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "fanburstartillery-hit-runtime",
      "entity_type": "monster",
      "character": "FanburstArtillery",
      "character_label": "부채탄 포대충",
      "runtime_monster_id": "fanburst_artillery",
      "action": "Hit",
      "action_label": "피격",
      "title": "부채탄 포대충 · 피격",
      "candidate": "runtime",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 6,
      "fps": 15.0,
      "duration_seconds": 0.4,
      "directions": [
        "East"
      ],
      "loop": false,
      "created_at": null,
      "runtime_asset_id": "rbxassetid://99300168812720",
      "runtime_source": "Raw/Hit/hit-east-2x3-magenta-r2.png",
      "source_root": "Assets/Monsters/Runtime/FanburstArtillery",
      "variants": [
        {
          "id": "east-runtime",
          "label": "게임 적용본",
          "direction": "East",
          "preview_url": "./animation-media/fanburstartillery-hit-runtime/east-runtime-preview-b5d4cc8ba7.gif",
          "contact_sheet_url": "./animation-media/fanburstartillery-hit-runtime/east-runtime-atlas-bf38ebb0f4.png",
          "source": "Assets/Monsters/Runtime/FanburstArtillery/hit-east-6x128.png"
        }
      ],
      "selection_group": "monster:FanburstArtillery:Hit",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "fanburstartillery-death-runtime",
      "entity_type": "monster",
      "character": "FanburstArtillery",
      "character_label": "부채탄 포대충",
      "runtime_monster_id": "fanburst_artillery",
      "action": "Death",
      "action_label": "사망",
      "title": "부채탄 포대충 · 사망",
      "candidate": "runtime",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 12,
      "fps": 12.0,
      "duration_seconds": 1.0,
      "directions": [
        "East"
      ],
      "loop": false,
      "created_at": null,
      "runtime_asset_id": "rbxassetid://91024462381150",
      "runtime_source": "Raw/Death/death-east-3x4-magenta-r3.png",
      "source_root": "Assets/Monsters/Runtime/FanburstArtillery",
      "variants": [
        {
          "id": "east-runtime",
          "label": "게임 적용본",
          "direction": "East",
          "preview_url": "./animation-media/fanburstartillery-death-runtime/east-runtime-preview-eca2aff7aa.gif",
          "contact_sheet_url": "./animation-media/fanburstartillery-death-runtime/east-runtime-atlas-4dced41571.png",
          "source": "Assets/Monsters/Runtime/FanburstArtillery/death-east-12x128.png"
        }
      ],
      "selection_group": "monster:FanburstArtillery:Death",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "grassvinemonster-idle-runtime",
      "entity_type": "monster",
      "character": "GrassVineMonster",
      "character_label": "가시덩굴 화분괴물",
      "runtime_monster_id": "grass_vine_monster",
      "action": "Idle",
      "action_label": "대기",
      "title": "가시덩굴 화분괴물 · 대기",
      "candidate": "runtime",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 8,
      "fps": 6.0,
      "duration_seconds": 1.333,
      "directions": [
        "East"
      ],
      "loop": true,
      "created_at": null,
      "runtime_asset_id": "rbxassetid://71877818399678",
      "runtime_source": "Assets/Monsters/SpriteProduction/Candidates/GrassVineMonster/Idle/East/gpt-image-v1/Runtime128/East",
      "source_root": "Assets/Monsters/Runtime/GrassVineMonster",
      "variants": [
        {
          "id": "east-runtime",
          "label": "게임 적용본",
          "direction": "East",
          "preview_url": "./animation-media/grassvinemonster-idle-runtime/east-runtime-preview-ff01c02496.gif",
          "contact_sheet_url": "./animation-media/grassvinemonster-idle-runtime/east-runtime-atlas-6fb49a9ec9.png",
          "source": "Assets/Monsters/Runtime/GrassVineMonster/idle-east-8x128.png"
        }
      ],
      "selection_group": "monster:GrassVineMonster:Idle",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "grassvinemonster-walk-runtime",
      "entity_type": "monster",
      "character": "GrassVineMonster",
      "character_label": "가시덩굴 화분괴물",
      "runtime_monster_id": "grass_vine_monster",
      "action": "Walk",
      "action_label": "걷기",
      "title": "가시덩굴 화분괴물 · 걷기",
      "candidate": "runtime",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 8,
      "fps": 8.0,
      "duration_seconds": 1.0,
      "directions": [
        "East"
      ],
      "loop": true,
      "created_at": null,
      "runtime_asset_id": "rbxassetid://107187794762078",
      "runtime_source": "Assets/Monsters/SpriteProduction/Candidates/GrassVineMonster/Walk/East/gpt-image-discrete-v1/Runtime128/East",
      "source_root": "Assets/Monsters/Runtime/GrassVineMonster",
      "variants": [
        {
          "id": "east-runtime",
          "label": "게임 적용본",
          "direction": "East",
          "preview_url": "./animation-media/grassvinemonster-walk-runtime/east-runtime-preview-5809ebea58.gif",
          "contact_sheet_url": "./animation-media/grassvinemonster-walk-runtime/east-runtime-atlas-6ed92f4ea2.png",
          "source": "Assets/Monsters/Runtime/GrassVineMonster/walk-east-8x128.png"
        }
      ],
      "selection_group": "monster:GrassVineMonster:Walk",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "grassvinemonster-attack-runtime",
      "entity_type": "monster",
      "character": "GrassVineMonster",
      "character_label": "가시덩굴 화분괴물",
      "runtime_monster_id": "grass_vine_monster",
      "action": "Attack",
      "action_label": "공격",
      "title": "가시덩굴 화분괴물 · 공격",
      "candidate": "runtime",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 8,
      "fps": 8.0,
      "duration_seconds": 1.0,
      "directions": [
        "East"
      ],
      "loop": false,
      "created_at": null,
      "runtime_asset_id": "rbxassetid://131929246544297",
      "runtime_source": "Assets/Monsters/SpriteProduction/Candidates/GrassVineMonster/Attack/East/gpt-image-discrete-v1/Runtime128/East",
      "source_root": "Assets/Monsters/Runtime/GrassVineMonster",
      "variants": [
        {
          "id": "east-runtime",
          "label": "게임 적용본",
          "direction": "East",
          "preview_url": "./animation-media/grassvinemonster-attack-runtime/east-runtime-preview-0e95022242.gif",
          "contact_sheet_url": "./animation-media/grassvinemonster-attack-runtime/east-runtime-atlas-ad20df4bd3.png",
          "source": "Assets/Monsters/Runtime/GrassVineMonster/attack-east-8x128.png"
        }
      ],
      "selection_group": "monster:GrassVineMonster:Attack",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "grassvinemonster-vineeruption-runtime",
      "entity_type": "monster",
      "character": "GrassVineMonster",
      "character_label": "가시덩굴 화분괴물",
      "runtime_monster_id": "grass_vine_monster",
      "action": "VineEruption",
      "action_label": "덩굴 분출",
      "title": "가시덩굴 화분괴물 · 덩굴 분출",
      "candidate": "runtime",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 8,
      "fps": 8.0,
      "duration_seconds": 1.0,
      "directions": [
        "Omni"
      ],
      "loop": false,
      "created_at": null,
      "runtime_asset_id": "rbxassetid://134802000415635",
      "runtime_source": "Assets/Monsters/SpriteProduction/Candidates/GrassVineMonster/VineEruption/Omni/gpt-image-discrete-v1/Runtime128/Omni",
      "source_root": "Assets/Monsters/Runtime/GrassVineMonster",
      "variants": [
        {
          "id": "omni-runtime",
          "label": "게임 적용본",
          "direction": "Omni",
          "preview_url": "./animation-media/grassvinemonster-vineeruption-runtime/omni-runtime-preview-954a901fdb.gif",
          "contact_sheet_url": "./animation-media/grassvinemonster-vineeruption-runtime/omni-runtime-atlas-b8f1d00ec6.png",
          "source": "Assets/Monsters/Runtime/GrassVineMonster/vine-eruption-omni-8x128.png"
        }
      ],
      "selection_group": "monster:GrassVineMonster:VineEruption",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "nesthatchlinglizard-idle-runtime",
      "entity_type": "monster",
      "character": "NestHatchlingLizard",
      "character_label": "새끼 도마뱀",
      "runtime_monster_id": "nest_hatchling_lizard",
      "action": "Idle",
      "action_label": "대기",
      "title": "새끼 도마뱀 · 대기",
      "candidate": "runtime",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 8,
      "fps": 8.0,
      "duration_seconds": 1.0,
      "directions": [
        "East"
      ],
      "loop": true,
      "created_at": null,
      "runtime_asset_id": "rbxassetid://128441182955604",
      "runtime_source": "",
      "source_root": "Assets/Monsters/Runtime/NestHatchlingLizard",
      "variants": [
        {
          "id": "east-runtime",
          "label": "게임 적용본",
          "direction": "East",
          "preview_url": "./animation-media/nesthatchlinglizard-idle-runtime/east-runtime-preview-6f39542d24.gif",
          "contact_sheet_url": "./animation-media/nesthatchlinglizard-idle-runtime/east-runtime-atlas-a179af3514.png",
          "source": "Assets/Monsters/Runtime/NestHatchlingLizard/idle-east-8x128.png"
        }
      ],
      "selection_group": "monster:NestHatchlingLizard:Idle",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "nesthatchlinglizard-walk-runtime",
      "entity_type": "monster",
      "character": "NestHatchlingLizard",
      "character_label": "새끼 도마뱀",
      "runtime_monster_id": "nest_hatchling_lizard",
      "action": "Walk",
      "action_label": "걷기",
      "title": "새끼 도마뱀 · 걷기",
      "candidate": "runtime",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 8,
      "fps": 12.0,
      "duration_seconds": 0.667,
      "directions": [
        "East"
      ],
      "loop": true,
      "created_at": null,
      "runtime_asset_id": "rbxassetid://123109097147753",
      "runtime_source": "",
      "source_root": "Assets/Monsters/Runtime/NestHatchlingLizard",
      "variants": [
        {
          "id": "east-runtime",
          "label": "게임 적용본",
          "direction": "East",
          "preview_url": "./animation-media/nesthatchlinglizard-walk-runtime/east-runtime-preview-f21324ae03.gif",
          "contact_sheet_url": "./animation-media/nesthatchlinglizard-walk-runtime/east-runtime-atlas-c9afa3f723.png",
          "source": "Assets/Monsters/Runtime/NestHatchlingLizard/walk-east-8x128.png"
        }
      ],
      "selection_group": "monster:NestHatchlingLizard:Walk",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "nesthatchlinglizard-spawn-runtime",
      "entity_type": "monster",
      "character": "NestHatchlingLizard",
      "character_label": "새끼 도마뱀",
      "runtime_monster_id": "nest_hatchling_lizard",
      "action": "Spawn",
      "action_label": "등장",
      "title": "새끼 도마뱀 · 등장",
      "candidate": "runtime",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 6,
      "fps": 15.0,
      "duration_seconds": 0.4,
      "directions": [
        "East"
      ],
      "loop": false,
      "created_at": null,
      "runtime_asset_id": "rbxassetid://96217941858190",
      "runtime_source": "",
      "source_root": "Assets/Monsters/Runtime/NestHatchlingLizard",
      "variants": [
        {
          "id": "east-runtime",
          "label": "게임 적용본",
          "direction": "East",
          "preview_url": "./animation-media/nesthatchlinglizard-spawn-runtime/east-runtime-preview-9559b644e8.gif",
          "contact_sheet_url": "./animation-media/nesthatchlinglizard-spawn-runtime/east-runtime-atlas-af0dde3f6d.png",
          "source": "Assets/Monsters/Runtime/NestHatchlingLizard/spawn-east-6x128.png"
        }
      ],
      "selection_group": "monster:NestHatchlingLizard:Spawn",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "nesthatchlinglizard-attack-runtime",
      "entity_type": "monster",
      "character": "NestHatchlingLizard",
      "character_label": "새끼 도마뱀",
      "runtime_monster_id": "nest_hatchling_lizard",
      "action": "Attack",
      "action_label": "공격",
      "title": "새끼 도마뱀 · 공격",
      "candidate": "runtime",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 8,
      "fps": 16.0,
      "duration_seconds": 0.5,
      "directions": [
        "East"
      ],
      "loop": false,
      "created_at": null,
      "runtime_asset_id": "rbxassetid://128587449683305",
      "runtime_source": "",
      "source_root": "Assets/Monsters/Runtime/NestHatchlingLizard",
      "variants": [
        {
          "id": "east-runtime",
          "label": "게임 적용본",
          "direction": "East",
          "preview_url": "./animation-media/nesthatchlinglizard-attack-runtime/east-runtime-preview-baa6d089c8.gif",
          "contact_sheet_url": "./animation-media/nesthatchlinglizard-attack-runtime/east-runtime-atlas-66cce24cec.png",
          "source": "Assets/Monsters/Runtime/NestHatchlingLizard/attack-east-8x128.png"
        }
      ],
      "selection_group": "monster:NestHatchlingLizard:Attack",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "nesthatchlinglizard-hit-runtime",
      "entity_type": "monster",
      "character": "NestHatchlingLizard",
      "character_label": "새끼 도마뱀",
      "runtime_monster_id": "nest_hatchling_lizard",
      "action": "Hit",
      "action_label": "피격",
      "title": "새끼 도마뱀 · 피격",
      "candidate": "runtime",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 6,
      "fps": 15.0,
      "duration_seconds": 0.4,
      "directions": [
        "East"
      ],
      "loop": false,
      "created_at": null,
      "runtime_asset_id": "rbxassetid://96482591788405",
      "runtime_source": "",
      "source_root": "Assets/Monsters/Runtime/NestHatchlingLizard",
      "variants": [
        {
          "id": "east-runtime",
          "label": "게임 적용본",
          "direction": "East",
          "preview_url": "./animation-media/nesthatchlinglizard-hit-runtime/east-runtime-preview-289847e1d1.gif",
          "contact_sheet_url": "./animation-media/nesthatchlinglizard-hit-runtime/east-runtime-atlas-c30f1e28b9.png",
          "source": "Assets/Monsters/Runtime/NestHatchlingLizard/hit-east-6x128.png"
        }
      ],
      "selection_group": "monster:NestHatchlingLizard:Hit",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "nesthatchlinglizard-death-runtime",
      "entity_type": "monster",
      "character": "NestHatchlingLizard",
      "character_label": "새끼 도마뱀",
      "runtime_monster_id": "nest_hatchling_lizard",
      "action": "Death",
      "action_label": "사망",
      "title": "새끼 도마뱀 · 사망",
      "candidate": "runtime",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 8,
      "fps": 12.0,
      "duration_seconds": 0.667,
      "directions": [
        "East"
      ],
      "loop": false,
      "created_at": null,
      "runtime_asset_id": "rbxassetid://123999701446684",
      "runtime_source": "",
      "source_root": "Assets/Monsters/Runtime/NestHatchlingLizard",
      "variants": [
        {
          "id": "east-runtime",
          "label": "게임 적용본",
          "direction": "East",
          "preview_url": "./animation-media/nesthatchlinglizard-death-runtime/east-runtime-preview-d6f2a0a30c.gif",
          "contact_sheet_url": "./animation-media/nesthatchlinglizard-death-runtime/east-runtime-atlas-6bb330c5fa.png",
          "source": "Assets/Monsters/Runtime/NestHatchlingLizard/death-east-8x128.png"
        }
      ],
      "selection_group": "monster:NestHatchlingLizard:Death",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "stampfootleaper-idle-runtime",
      "entity_type": "monster",
      "character": "StampfootLeaper",
      "character_label": "도장발 쿵귀",
      "runtime_monster_id": "stampfoot_leaper",
      "action": "Idle",
      "action_label": "대기",
      "title": "도장발 쿵귀 · 대기",
      "candidate": "runtime",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 8,
      "fps": 8.0,
      "duration_seconds": 1.0,
      "directions": [
        "East"
      ],
      "loop": true,
      "created_at": null,
      "runtime_asset_id": "rbxassetid://104835741415212",
      "runtime_source": "",
      "source_root": "Assets/Monsters/Runtime/StampfootLeaper",
      "variants": [
        {
          "id": "east-runtime",
          "label": "게임 적용본",
          "direction": "East",
          "preview_url": "./animation-media/stampfootleaper-idle-runtime/east-runtime-preview-e76c1aa0a2.gif",
          "contact_sheet_url": "./animation-media/stampfootleaper-idle-runtime/east-runtime-atlas-51e725e9c7.png",
          "source": "Assets/Monsters/Runtime/StampfootLeaper/idle-east-8x128.png"
        }
      ],
      "selection_group": "monster:StampfootLeaper:Idle",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "stampfootleaper-walk-runtime",
      "entity_type": "monster",
      "character": "StampfootLeaper",
      "character_label": "도장발 쿵귀",
      "runtime_monster_id": "stampfoot_leaper",
      "action": "Walk",
      "action_label": "걷기",
      "title": "도장발 쿵귀 · 걷기",
      "candidate": "runtime",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 8,
      "fps": 10.0,
      "duration_seconds": 0.8,
      "directions": [
        "East"
      ],
      "loop": true,
      "created_at": null,
      "runtime_asset_id": "rbxassetid://100769989791111",
      "runtime_source": "",
      "source_root": "Assets/Monsters/Runtime/StampfootLeaper",
      "variants": [
        {
          "id": "east-runtime",
          "label": "게임 적용본",
          "direction": "East",
          "preview_url": "./animation-media/stampfootleaper-walk-runtime/east-runtime-preview-fb5a49d3b6.gif",
          "contact_sheet_url": "./animation-media/stampfootleaper-walk-runtime/east-runtime-atlas-51dabc8afb.png",
          "source": "Assets/Monsters/Runtime/StampfootLeaper/walk-east-8x128.png"
        }
      ],
      "selection_group": "monster:StampfootLeaper:Walk",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "stampfootleaper-attackanticipation-runtime",
      "entity_type": "monster",
      "character": "StampfootLeaper",
      "character_label": "도장발 쿵귀",
      "runtime_monster_id": "stampfoot_leaper",
      "action": "AttackAnticipation",
      "action_label": "도약 준비",
      "title": "도장발 쿵귀 · 도약 준비",
      "candidate": "runtime",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 8,
      "fps": 12.0,
      "duration_seconds": 0.667,
      "directions": [
        "East"
      ],
      "loop": false,
      "created_at": null,
      "runtime_asset_id": "rbxassetid://133480601703283",
      "runtime_source": "",
      "source_root": "Assets/Monsters/Runtime/StampfootLeaper",
      "variants": [
        {
          "id": "east-runtime",
          "label": "게임 적용본",
          "direction": "East",
          "preview_url": "./animation-media/stampfootleaper-attackanticipation-runtime/east-runtime-preview-eb73aa3a68.gif",
          "contact_sheet_url": "./animation-media/stampfootleaper-attackanticipation-runtime/east-runtime-atlas-e838cc70d9.png",
          "source": "Assets/Monsters/Runtime/StampfootLeaper/attack-anticipation-east-8x128.png"
        }
      ],
      "selection_group": "monster:StampfootLeaper:AttackAnticipation",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "stampfootleaper-attackairborne-runtime",
      "entity_type": "monster",
      "character": "StampfootLeaper",
      "character_label": "도장발 쿵귀",
      "runtime_monster_id": "stampfoot_leaper",
      "action": "AttackAirborne",
      "action_label": "도약",
      "title": "도장발 쿵귀 · 도약",
      "candidate": "runtime",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 6,
      "fps": 12.0,
      "duration_seconds": 0.5,
      "directions": [
        "East"
      ],
      "loop": false,
      "created_at": null,
      "runtime_asset_id": "rbxassetid://110312104598785",
      "runtime_source": "",
      "source_root": "Assets/Monsters/Runtime/StampfootLeaper",
      "variants": [
        {
          "id": "east-runtime",
          "label": "게임 적용본",
          "direction": "East",
          "preview_url": "./animation-media/stampfootleaper-attackairborne-runtime/east-runtime-preview-ef449f6a7c.gif",
          "contact_sheet_url": "./animation-media/stampfootleaper-attackairborne-runtime/east-runtime-atlas-83282f1df0.png",
          "source": "Assets/Monsters/Runtime/StampfootLeaper/attack-airborne-east-6x128.png"
        }
      ],
      "selection_group": "monster:StampfootLeaper:AttackAirborne",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "stampfootleaper-attackland-runtime",
      "entity_type": "monster",
      "character": "StampfootLeaper",
      "character_label": "도장발 쿵귀",
      "runtime_monster_id": "stampfoot_leaper",
      "action": "AttackLand",
      "action_label": "착지 공격",
      "title": "도장발 쿵귀 · 착지 공격",
      "candidate": "runtime",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 8,
      "fps": 16.0,
      "duration_seconds": 0.5,
      "directions": [
        "East"
      ],
      "loop": false,
      "created_at": null,
      "runtime_asset_id": "rbxassetid://83859948452133",
      "runtime_source": "",
      "source_root": "Assets/Monsters/Runtime/StampfootLeaper",
      "variants": [
        {
          "id": "east-runtime",
          "label": "게임 적용본",
          "direction": "East",
          "preview_url": "./animation-media/stampfootleaper-attackland-runtime/east-runtime-preview-2e1e372534.gif",
          "contact_sheet_url": "./animation-media/stampfootleaper-attackland-runtime/east-runtime-atlas-9e525da17f.png",
          "source": "Assets/Monsters/Runtime/StampfootLeaper/attack-land-east-8x128.png"
        }
      ],
      "selection_group": "monster:StampfootLeaper:AttackLand",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "stampfootleaper-impactfx-runtime",
      "entity_type": "monster",
      "character": "StampfootLeaper",
      "character_label": "도장발 쿵귀",
      "runtime_monster_id": "stampfoot_leaper",
      "action": "ImpactFX",
      "action_label": "착지 충격",
      "title": "도장발 쿵귀 · 착지 충격",
      "candidate": "runtime",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 8,
      "fps": 16.0,
      "duration_seconds": 0.5,
      "directions": [
        "Omni"
      ],
      "loop": false,
      "created_at": null,
      "runtime_asset_id": "rbxassetid://98935374521489",
      "runtime_source": "",
      "source_root": "Assets/Monsters/Runtime/StampfootLeaper",
      "variants": [
        {
          "id": "omni-runtime",
          "label": "게임 적용본",
          "direction": "Omni",
          "preview_url": "./animation-media/stampfootleaper-impactfx-runtime/omni-runtime-preview-86b6198e1c.gif",
          "contact_sheet_url": "./animation-media/stampfootleaper-impactfx-runtime/omni-runtime-atlas-af61e392f0.png",
          "source": "Assets/Monsters/Runtime/StampfootLeaper/impact-fx-omni-8x128.png"
        }
      ],
      "selection_group": "monster:StampfootLeaper:ImpactFX",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "stampfootleaper-hit-runtime",
      "entity_type": "monster",
      "character": "StampfootLeaper",
      "character_label": "도장발 쿵귀",
      "runtime_monster_id": "stampfoot_leaper",
      "action": "Hit",
      "action_label": "피격",
      "title": "도장발 쿵귀 · 피격",
      "candidate": "runtime",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 6,
      "fps": 15.0,
      "duration_seconds": 0.4,
      "directions": [
        "East"
      ],
      "loop": false,
      "created_at": null,
      "runtime_asset_id": "rbxassetid://116295221788321",
      "runtime_source": "",
      "source_root": "Assets/Monsters/Runtime/StampfootLeaper",
      "variants": [
        {
          "id": "east-runtime",
          "label": "게임 적용본",
          "direction": "East",
          "preview_url": "./animation-media/stampfootleaper-hit-runtime/east-runtime-preview-f4b60c97ed.gif",
          "contact_sheet_url": "./animation-media/stampfootleaper-hit-runtime/east-runtime-atlas-858d8fa5ab.png",
          "source": "Assets/Monsters/Runtime/StampfootLeaper/hit-east-6x128.png"
        }
      ],
      "selection_group": "monster:StampfootLeaper:Hit",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "stampfootleaper-death-runtime",
      "entity_type": "monster",
      "character": "StampfootLeaper",
      "character_label": "도장발 쿵귀",
      "runtime_monster_id": "stampfoot_leaper",
      "action": "Death",
      "action_label": "사망",
      "title": "도장발 쿵귀 · 사망",
      "candidate": "runtime",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 12,
      "fps": 12.0,
      "duration_seconds": 1.0,
      "directions": [
        "East"
      ],
      "loop": false,
      "created_at": null,
      "runtime_asset_id": "rbxassetid://92093220183664",
      "runtime_source": "",
      "source_root": "Assets/Monsters/Runtime/StampfootLeaper",
      "variants": [
        {
          "id": "east-runtime",
          "label": "게임 적용본",
          "direction": "East",
          "preview_url": "./animation-media/stampfootleaper-death-runtime/east-runtime-preview-2fcf778776.gif",
          "contact_sheet_url": "./animation-media/stampfootleaper-death-runtime/east-runtime-atlas-c8a44b1da3.png",
          "source": "Assets/Monsters/Runtime/StampfootLeaper/death-east-12x128.png"
        }
      ],
      "selection_group": "monster:StampfootLeaper:Death",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "walkingnest-idle-runtime",
      "entity_type": "monster",
      "character": "WalkingNest",
      "character_label": "걸어다니는 둥지",
      "runtime_monster_id": "walking_nest",
      "action": "Idle",
      "action_label": "대기",
      "title": "걸어다니는 둥지 · 대기",
      "candidate": "runtime",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 8,
      "fps": 8.0,
      "duration_seconds": 1.0,
      "directions": [
        "East"
      ],
      "loop": true,
      "created_at": null,
      "runtime_asset_id": "rbxassetid://111560361831998",
      "runtime_source": "",
      "source_root": "Assets/Monsters/Runtime/WalkingNest",
      "variants": [
        {
          "id": "east-runtime",
          "label": "게임 적용본",
          "direction": "East",
          "preview_url": "./animation-media/walkingnest-idle-runtime/east-runtime-preview-781d8e4f90.gif",
          "contact_sheet_url": "./animation-media/walkingnest-idle-runtime/east-runtime-atlas-d92327265d.png",
          "source": "Assets/Monsters/Runtime/WalkingNest/idle-east-8x128.png"
        }
      ],
      "selection_group": "monster:WalkingNest:Idle",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "walkingnest-walk-runtime",
      "entity_type": "monster",
      "character": "WalkingNest",
      "character_label": "걸어다니는 둥지",
      "runtime_monster_id": "walking_nest",
      "action": "Walk",
      "action_label": "걷기",
      "title": "걸어다니는 둥지 · 걷기",
      "candidate": "runtime",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 10,
      "fps": 10.0,
      "duration_seconds": 1.0,
      "directions": [
        "East"
      ],
      "loop": true,
      "created_at": null,
      "runtime_asset_id": "rbxassetid://114123521815146",
      "runtime_source": "",
      "source_root": "Assets/Monsters/Runtime/WalkingNest",
      "variants": [
        {
          "id": "east-runtime",
          "label": "게임 적용본",
          "direction": "East",
          "preview_url": "./animation-media/walkingnest-walk-runtime/east-runtime-preview-8277830b1b.gif",
          "contact_sheet_url": "./animation-media/walkingnest-walk-runtime/east-runtime-atlas-1e6531dd8a.png",
          "source": "Assets/Monsters/Runtime/WalkingNest/walk-east-10x128.png"
        }
      ],
      "selection_group": "monster:WalkingNest:Walk",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "walkingnest-attack-runtime",
      "entity_type": "monster",
      "character": "WalkingNest",
      "character_label": "걸어다니는 둥지",
      "runtime_monster_id": "walking_nest",
      "action": "Attack",
      "action_label": "공격",
      "title": "걸어다니는 둥지 · 공격",
      "candidate": "runtime",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 8,
      "fps": 12.0,
      "duration_seconds": 0.667,
      "directions": [
        "East"
      ],
      "loop": false,
      "created_at": null,
      "runtime_asset_id": "rbxassetid://80655184836352",
      "runtime_source": "",
      "source_root": "Assets/Monsters/Runtime/WalkingNest",
      "variants": [
        {
          "id": "east-runtime",
          "label": "게임 적용본",
          "direction": "East",
          "preview_url": "./animation-media/walkingnest-attack-runtime/east-runtime-preview-7490570831.gif",
          "contact_sheet_url": "./animation-media/walkingnest-attack-runtime/east-runtime-atlas-71f3793262.png",
          "source": "Assets/Monsters/Runtime/WalkingNest/attack-east-8x128.png"
        }
      ],
      "selection_group": "monster:WalkingNest:Attack",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "walkingnest-hit-runtime",
      "entity_type": "monster",
      "character": "WalkingNest",
      "character_label": "걸어다니는 둥지",
      "runtime_monster_id": "walking_nest",
      "action": "Hit",
      "action_label": "피격",
      "title": "걸어다니는 둥지 · 피격",
      "candidate": "runtime",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 6,
      "fps": 15.0,
      "duration_seconds": 0.4,
      "directions": [
        "East"
      ],
      "loop": false,
      "created_at": null,
      "runtime_asset_id": "rbxassetid://138633791203164",
      "runtime_source": "",
      "source_root": "Assets/Monsters/Runtime/WalkingNest",
      "variants": [
        {
          "id": "east-runtime",
          "label": "게임 적용본",
          "direction": "East",
          "preview_url": "./animation-media/walkingnest-hit-runtime/east-runtime-preview-579dddb15d.gif",
          "contact_sheet_url": "./animation-media/walkingnest-hit-runtime/east-runtime-atlas-247e9e1190.png",
          "source": "Assets/Monsters/Runtime/WalkingNest/hit-east-6x128.png"
        }
      ],
      "selection_group": "monster:WalkingNest:Hit",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "walkingnest-death-runtime",
      "entity_type": "monster",
      "character": "WalkingNest",
      "character_label": "걸어다니는 둥지",
      "runtime_monster_id": "walking_nest",
      "action": "Death",
      "action_label": "사망",
      "title": "걸어다니는 둥지 · 사망",
      "candidate": "runtime",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 6,
      "fps": 12.0,
      "duration_seconds": 0.5,
      "directions": [
        "East"
      ],
      "loop": false,
      "created_at": null,
      "runtime_asset_id": "rbxassetid://137880382301724",
      "runtime_source": "",
      "source_root": "Assets/Monsters/Runtime/WalkingNest",
      "variants": [
        {
          "id": "east-runtime",
          "label": "게임 적용본",
          "direction": "East",
          "preview_url": "./animation-media/walkingnest-death-runtime/east-runtime-preview-24d0f3b8cc.gif",
          "contact_sheet_url": "./animation-media/walkingnest-death-runtime/east-runtime-atlas-6519e6eed1.png",
          "source": "Assets/Monsters/Runtime/WalkingNest/death-east-6x128.png"
        }
      ],
      "selection_group": "monster:WalkingNest:Death",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "whirldashspirit-idlehover-runtime",
      "entity_type": "monster",
      "character": "WhirlDashSpirit",
      "character_label": "회오리 돌진령",
      "runtime_monster_id": "whirl_dash_spirit",
      "action": "IdleHover",
      "action_label": "공중 대기",
      "title": "회오리 돌진령 · 공중 대기",
      "candidate": "runtime",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 7,
      "fps": 8.0,
      "duration_seconds": 0.875,
      "directions": [
        "East"
      ],
      "loop": true,
      "created_at": null,
      "runtime_asset_id": "rbxassetid://135442746353452",
      "runtime_source": "",
      "source_root": "Assets/Monsters/Runtime/WhirlDashSpirit",
      "variants": [
        {
          "id": "east-runtime",
          "label": "게임 적용본",
          "direction": "East",
          "preview_url": "./animation-media/whirldashspirit-idlehover-runtime/east-runtime-preview-7a7be2f4ea.gif",
          "contact_sheet_url": "./animation-media/whirldashspirit-idlehover-runtime/east-runtime-atlas-3aa919d943.png",
          "source": "Assets/Monsters/Runtime/WhirlDashSpirit/idle-hover-east-7x128.png"
        }
      ],
      "selection_group": "monster:WhirlDashSpirit:IdleHover",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "whirldashspirit-morphspin-runtime",
      "entity_type": "monster",
      "character": "WhirlDashSpirit",
      "character_label": "회오리 돌진령",
      "runtime_monster_id": "whirl_dash_spirit",
      "action": "MorphSpin",
      "action_label": "회전 변신",
      "title": "회오리 돌진령 · 회전 변신",
      "candidate": "runtime",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 10,
      "fps": 15.0,
      "duration_seconds": 0.667,
      "directions": [
        "East"
      ],
      "loop": false,
      "created_at": null,
      "runtime_asset_id": "rbxassetid://113501843207408",
      "runtime_source": "",
      "source_root": "Assets/Monsters/Runtime/WhirlDashSpirit",
      "variants": [
        {
          "id": "east-runtime",
          "label": "게임 적용본",
          "direction": "East",
          "preview_url": "./animation-media/whirldashspirit-morphspin-runtime/east-runtime-preview-63e35a294a.gif",
          "contact_sheet_url": "./animation-media/whirldashspirit-morphspin-runtime/east-runtime-atlas-0fdd5e7fea.png",
          "source": "Assets/Monsters/Runtime/WhirlDashSpirit/morph-spin-east-10x128.png"
        }
      ],
      "selection_group": "monster:WhirlDashSpirit:MorphSpin",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "whirldashspirit-orbdash-runtime",
      "entity_type": "monster",
      "character": "WhirlDashSpirit",
      "character_label": "회오리 돌진령",
      "runtime_monster_id": "whirl_dash_spirit",
      "action": "OrbDash",
      "action_label": "구체 대시",
      "title": "회오리 돌진령 · 구체 대시",
      "candidate": "runtime",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 6,
      "fps": 18.0,
      "duration_seconds": 0.333,
      "directions": [
        "Omni"
      ],
      "loop": true,
      "created_at": null,
      "runtime_asset_id": "rbxassetid://103922677520779",
      "runtime_source": "",
      "source_root": "Assets/Monsters/Runtime/WhirlDashSpirit",
      "variants": [
        {
          "id": "omni-runtime",
          "label": "게임 적용본",
          "direction": "Omni",
          "preview_url": "./animation-media/whirldashspirit-orbdash-runtime/omni-runtime-preview-7326d3201f.gif",
          "contact_sheet_url": "./animation-media/whirldashspirit-orbdash-runtime/omni-runtime-atlas-114beaeb1e.png",
          "source": "Assets/Monsters/Runtime/WhirlDashSpirit/orb-dash-omni-6x128.png"
        }
      ],
      "selection_group": "monster:WhirlDashSpirit:OrbDash",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "rookiemale-idle-1e2803ce",
      "entity_type": "player",
      "character": "RookieMale",
      "character_label": "루키 남성",
      "action": "Idle",
      "action_label": "대기",
      "title": "루키 남성 · 대기",
      "candidate": "horizontal-two-way-breathing-v2",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 8,
      "fps": 6.0,
      "duration_seconds": 1.333,
      "directions": [
        "East",
        "West"
      ],
      "loop": true,
      "created_at": "2026-08-21",
      "runtime_asset_id": "rbxassetid://72901805237391",
      "source_root": "Assets/Characters/Player/SpriteProduction/Candidates/v2/RookieMale/Idle/horizontal-two-way-breathing-v2",
      "variants": [
        {
          "id": "east-east",
          "label": "East",
          "direction": "East",
          "preview_url": "./animation-media/rookiemale-idle-1e2803ce/east-east-603e656f63.gif",
          "contact_sheet_url": "./animation-media/rookiemale-idle-1e2803ce/east-contact-f9b298f711.png",
          "source": "Assets/Characters/Player/SpriteProduction/Candidates/v2/RookieMale/Idle/horizontal-two-way-breathing-v2/QA/EastMaster/preview.gif"
        },
        {
          "id": "west-west",
          "label": "West",
          "direction": "West",
          "preview_url": "./animation-media/rookiemale-idle-1e2803ce/west-west-0362863244.gif",
          "contact_sheet_url": "./animation-media/rookiemale-idle-1e2803ce/west-contact-eed9b346c8.png",
          "source": "Assets/Characters/Player/SpriteProduction/Candidates/v2/RookieMale/Idle/horizontal-two-way-breathing-v2/QA/WestMaster/preview.gif"
        }
      ],
      "selection_group": "player:RookieMale:Idle",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "rookiemale-run-60730eee",
      "entity_type": "player",
      "character": "RookieMale",
      "character_label": "루키 남성",
      "action": "Run",
      "action_label": "달리기",
      "title": "루키 남성 · 달리기",
      "candidate": "edge-decontamination-v1",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 8,
      "fps": 8.0,
      "duration_seconds": 1.0,
      "directions": [
        "East",
        "West"
      ],
      "loop": true,
      "created_at": null,
      "runtime_asset_id": "rbxassetid://91295241781335",
      "source_root": "Assets/Characters/Player/SpriteProduction/Candidates/v2/RookieMale/Run/East/pixelengine-frameengine-east-v2-approved/Refinement/edge-decontamination-v1",
      "variants": [
        {
          "id": "east-east",
          "label": "East",
          "direction": "East",
          "preview_url": "./animation-media/rookiemale-run-60730eee/east-east-cc11a4d087.gif",
          "contact_sheet_url": "./animation-media/rookiemale-run-60730eee/east-contact-5bb4d2013c.png",
          "source": "Assets/Characters/Player/SpriteProduction/Candidates/v2/RookieMale/Run/East/pixelengine-frameengine-east-v2-approved/Refinement/edge-decontamination-v1/QA/EastMaster/preview.gif"
        },
        {
          "id": "west-west",
          "label": "West",
          "direction": "West",
          "preview_url": "./animation-media/rookiemale-run-60730eee/west-west-5eba7c3854.gif",
          "contact_sheet_url": "./animation-media/rookiemale-run-60730eee/west-contact-7fcb36c56e.png",
          "source": "Assets/Characters/Player/SpriteProduction/Candidates/v2/RookieMale/Run/East/pixelengine-frameengine-east-v2-approved/Refinement/edge-decontamination-v1/QA/WestMaster/preview.gif"
        }
      ],
      "selection_group": "player:RookieMale:Run",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "rookiemale-dash-bd627647",
      "entity_type": "player",
      "character": "RookieMale",
      "character_label": "루키 남성",
      "action": "Dash",
      "action_label": "대시",
      "title": "루키 남성 · 대시",
      "candidate": "horizontal-two-way-three-frame-v2",
      "status": "live",
      "status_label": "게임 적용",
      "frame_count": 3,
      "fps": 20.0,
      "duration_seconds": 0.3,
      "directions": [
        "East",
        "West"
      ],
      "loop": false,
      "created_at": "2026-08-21",
      "runtime_asset_id": "rbxassetid://74627825095606",
      "source_root": "Assets/Characters/Player/SpriteProduction/Candidates/v2/RookieMale/Dash/horizontal-two-way-three-frame-v2",
      "variants": [
        {
          "id": "east-east",
          "label": "East",
          "direction": "East",
          "preview_url": "./animation-media/rookiemale-dash-bd627647/east-east-fbca48beb7.gif",
          "contact_sheet_url": "./animation-media/rookiemale-dash-bd627647/east-contact-5ded21c9a1.png",
          "source": "Assets/Characters/Player/SpriteProduction/Candidates/v2/RookieMale/Dash/horizontal-two-way-three-frame-v2/QA/EastMaster/preview.gif"
        },
        {
          "id": "west-west",
          "label": "West",
          "direction": "West",
          "preview_url": "./animation-media/rookiemale-dash-bd627647/west-west-f114d88f83.gif",
          "contact_sheet_url": "./animation-media/rookiemale-dash-bd627647/west-contact-896db76f2d.png",
          "source": "Assets/Characters/Player/SpriteProduction/Candidates/v2/RookieMale/Dash/horizontal-two-way-three-frame-v2/QA/WestMaster/preview.gif"
        },
        {
          "id": "effect",
          "label": "잔상 타임라인",
          "direction": "Effect",
          "preview_url": "./animation-media/rookiemale-dash-bd627647/effect-60db55d4e7.gif",
          "contact_sheet_url": null,
          "source": "Assets/Characters/Player/SpriteProduction/Candidates/v2/RookieMale/Dash/horizontal-two-way-three-frame-v2/QA/RookieMale_Dash_3frame_afterimage-timeline.gif"
        }
      ],
      "selection_group": "player:RookieMale:Dash",
      "runtime_relation": "live",
      "selection_state": "current"
    },
    {
      "id": "grassvinemonster-idle-57457172",
      "entity_type": "monster",
      "character": "GrassVineMonster",
      "character_label": "가시덩굴 화분괴물",
      "action": "Idle",
      "action_label": "대기",
      "title": "가시덩굴 화분괴물 · 대기",
      "candidate": "gpt-image-v1",
      "status": "approved",
      "status_label": "적용 원본",
      "frame_count": 8,
      "fps": 6.0,
      "duration_seconds": 1.333,
      "directions": [
        "East"
      ],
      "loop": true,
      "created_at": "2026-08-24",
      "runtime_asset_id": null,
      "source_root": "Assets/Monsters/SpriteProduction/Candidates/GrassVineMonster/Idle/East/gpt-image-v1",
      "variants": [
        {
          "id": "east-east",
          "label": "East",
          "direction": "East",
          "preview_url": "./animation-media/grassvinemonster-idle-57457172/east-east-02d31207ec.gif",
          "contact_sheet_url": "./animation-media/grassvinemonster-idle-57457172/east-contact-d053a9b4da.png",
          "source": "Assets/Monsters/SpriteProduction/Candidates/GrassVineMonster/Idle/East/gpt-image-v1/QA/EastMaster/preview.gif"
        }
      ],
      "selection_group": "monster:GrassVineMonster:Idle",
      "runtime_relation": "source",
      "runtime_record_id": "grassvinemonster-idle-runtime",
      "selection_state": "source"
    },
    {
      "id": "grassvinemonster-walk-5c55fb06",
      "entity_type": "monster",
      "character": "GrassVineMonster",
      "character_label": "가시덩굴 화분괴물",
      "action": "Walk",
      "action_label": "걷기",
      "title": "가시덩굴 화분괴물 · 걷기",
      "candidate": "gpt-image-discrete-v1",
      "status": "approved",
      "status_label": "적용 원본",
      "frame_count": 8,
      "fps": 8.0,
      "duration_seconds": 1.0,
      "directions": [
        "East"
      ],
      "loop": true,
      "created_at": "2026-08-24",
      "runtime_asset_id": null,
      "source_root": "Assets/Monsters/SpriteProduction/Candidates/GrassVineMonster/Walk/East/gpt-image-discrete-v1",
      "variants": [
        {
          "id": "east-east",
          "label": "East",
          "direction": "East",
          "preview_url": "./animation-media/grassvinemonster-walk-5c55fb06/east-east-998946177f.gif",
          "contact_sheet_url": "./animation-media/grassvinemonster-walk-5c55fb06/east-contact-6ac51123ce.png",
          "source": "Assets/Monsters/SpriteProduction/Candidates/GrassVineMonster/Walk/East/gpt-image-discrete-v1/QA/EastMaster/preview.gif"
        }
      ],
      "selection_group": "monster:GrassVineMonster:Walk",
      "runtime_relation": "source",
      "runtime_record_id": "grassvinemonster-walk-runtime",
      "selection_state": "source"
    },
    {
      "id": "grassvinemonster-attack-64e0d0aa",
      "entity_type": "monster",
      "character": "GrassVineMonster",
      "character_label": "가시덩굴 화분괴물",
      "action": "Attack",
      "action_label": "공격",
      "title": "가시덩굴 화분괴물 · 공격",
      "candidate": "gpt-image-discrete-v1",
      "status": "approved",
      "status_label": "적용 원본",
      "frame_count": 8,
      "fps": 8.0,
      "duration_seconds": 1.0,
      "directions": [
        "East"
      ],
      "loop": false,
      "created_at": "2026-08-24",
      "runtime_asset_id": null,
      "source_root": "Assets/Monsters/SpriteProduction/Candidates/GrassVineMonster/Attack/East/gpt-image-discrete-v1",
      "variants": [
        {
          "id": "east-east",
          "label": "East",
          "direction": "East",
          "preview_url": "./animation-media/grassvinemonster-attack-64e0d0aa/east-east-bdc91a0cc1.gif",
          "contact_sheet_url": "./animation-media/grassvinemonster-attack-64e0d0aa/east-contact-13ecd46d4e.png",
          "source": "Assets/Monsters/SpriteProduction/Candidates/GrassVineMonster/Attack/East/gpt-image-discrete-v1/QA/EastMaster/preview.gif"
        }
      ],
      "selection_group": "monster:GrassVineMonster:Attack",
      "runtime_relation": "source",
      "runtime_record_id": "grassvinemonster-attack-runtime",
      "selection_state": "source"
    },
    {
      "id": "grassvinemonster-vineeruption-ae83ac4f",
      "entity_type": "monster",
      "character": "GrassVineMonster",
      "character_label": "가시덩굴 화분괴물",
      "action": "VineEruption",
      "action_label": "덩굴 분출",
      "title": "가시덩굴 화분괴물 · 덩굴 분출",
      "candidate": "gpt-image-discrete-v1",
      "status": "approved",
      "status_label": "적용 원본",
      "frame_count": 8,
      "fps": 8.0,
      "duration_seconds": 1.0,
      "directions": [
        "Omni"
      ],
      "loop": false,
      "created_at": "2026-08-25",
      "runtime_asset_id": null,
      "source_root": "Assets/Monsters/SpriteProduction/Candidates/GrassVineMonster/VineEruption/Omni/gpt-image-discrete-v1",
      "variants": [
        {
          "id": "omni-omni",
          "label": "Omni",
          "direction": "Omni",
          "preview_url": "./animation-media/grassvinemonster-vineeruption-ae83ac4f/omni-omni-2b8c1410d7.gif",
          "contact_sheet_url": "./animation-media/grassvinemonster-vineeruption-ae83ac4f/omni-contact-ca0e6e1c96.png",
          "source": "Assets/Monsters/SpriteProduction/Candidates/GrassVineMonster/VineEruption/Omni/gpt-image-discrete-v1/QA/OmniMaster/preview.gif"
        }
      ],
      "selection_group": "monster:GrassVineMonster:VineEruption",
      "runtime_relation": "source",
      "runtime_record_id": "grassvinemonster-vineeruption-runtime",
      "selection_state": "source"
    },
    {
      "id": "rookiemale-dash-dc0a4940",
      "entity_type": "player",
      "character": "RookieMale",
      "character_label": "루키 남성",
      "action": "Dash",
      "action_label": "대시",
      "title": "루키 남성 · 대시",
      "candidate": "horizontal-two-way-single-frame-v1",
      "status": "approved",
      "status_label": "승인 후보",
      "frame_count": 1,
      "fps": 1.0,
      "duration_seconds": 1.0,
      "directions": [
        "East",
        "West"
      ],
      "loop": false,
      "created_at": "2026-08-21",
      "runtime_asset_id": null,
      "source_root": "Assets/Characters/Player/SpriteProduction/Candidates/v2/RookieMale/Dash/horizontal-two-way-single-frame-v1",
      "variants": [
        {
          "id": "east-east",
          "label": "East",
          "direction": "East",
          "preview_url": "./animation-media/rookiemale-dash-dc0a4940/east-east-75c87806a6.gif",
          "contact_sheet_url": "./animation-media/rookiemale-dash-dc0a4940/east-contact-a06f52a42a.png",
          "source": "Assets/Characters/Player/SpriteProduction/Candidates/v2/RookieMale/Dash/horizontal-two-way-single-frame-v1/QA/EastMaster/preview.gif"
        },
        {
          "id": "west-west",
          "label": "West",
          "direction": "West",
          "preview_url": "./animation-media/rookiemale-dash-dc0a4940/west-west-4e4fcaaa5c.gif",
          "contact_sheet_url": "./animation-media/rookiemale-dash-dc0a4940/west-contact-e7fc381293.png",
          "source": "Assets/Characters/Player/SpriteProduction/Candidates/v2/RookieMale/Dash/horizontal-two-way-single-frame-v1/QA/WestMaster/preview.gif"
        },
        {
          "id": "effect",
          "label": "잔상 타임라인",
          "direction": "Effect",
          "preview_url": "./animation-media/rookiemale-dash-dc0a4940/effect-0e75ff080c.gif",
          "contact_sheet_url": null,
          "source": "Assets/Characters/Player/SpriteProduction/Candidates/v2/RookieMale/Dash/horizontal-two-way-single-frame-v1/QA/RookieMale_Dash_afterimage-convergence-concept.gif"
        }
      ],
      "selection_group": "player:RookieMale:Dash",
      "runtime_relation": "alternative",
      "selection_state": "available"
    },
    {
      "id": "rookiemale-idle-3a99bfa6",
      "entity_type": "player",
      "character": "RookieMale",
      "character_label": "루키 남성",
      "action": "Idle",
      "action_label": "대기",
      "title": "루키 남성 · 대기",
      "candidate": "horizontal-two-way-gpt-image-v1",
      "status": "rejected",
      "status_label": "사용 안 함",
      "frame_count": 4,
      "fps": 6.0,
      "duration_seconds": 0.667,
      "directions": [
        "East",
        "West"
      ],
      "loop": true,
      "created_at": "2026-08-21",
      "runtime_asset_id": null,
      "source_root": "Assets/Characters/Player/SpriteProduction/Candidates/v2/RookieMale/Idle/horizontal-two-way-gpt-image-v1",
      "variants": [
        {
          "id": "east-east",
          "label": "East",
          "direction": "East",
          "preview_url": "./animation-media/rookiemale-idle-3a99bfa6/east-east-027391cb38.gif",
          "contact_sheet_url": "./animation-media/rookiemale-idle-3a99bfa6/east-contact-e8b548bdb9.png",
          "source": "Assets/Characters/Player/SpriteProduction/Candidates/v2/RookieMale/Idle/horizontal-two-way-gpt-image-v1/QA/EastMaster/preview.gif"
        },
        {
          "id": "west-west",
          "label": "West",
          "direction": "West",
          "preview_url": "./animation-media/rookiemale-idle-3a99bfa6/west-west-6c749f6d48.gif",
          "contact_sheet_url": "./animation-media/rookiemale-idle-3a99bfa6/west-contact-b8dcd45fb3.png",
          "source": "Assets/Characters/Player/SpriteProduction/Candidates/v2/RookieMale/Idle/horizontal-two-way-gpt-image-v1/QA/WestMaster/preview.gif"
        }
      ],
      "selection_group": "player:RookieMale:Idle",
      "runtime_relation": "alternative",
      "selection_state": "available"
    }
  ],
  "selection_count": 0,
  "selections": [
    {
      "group": "monster:FanburstArtillery:Attack",
      "current_record_id": "fanburstartillery-attack-runtime",
      "selected_record_id": "fanburstartillery-attack-runtime",
      "pending": false,
      "selected_on": null
    },
    {
      "group": "monster:FanburstArtillery:Death",
      "current_record_id": "fanburstartillery-death-runtime",
      "selected_record_id": "fanburstartillery-death-runtime",
      "pending": false,
      "selected_on": null
    },
    {
      "group": "monster:FanburstArtillery:Hit",
      "current_record_id": "fanburstartillery-hit-runtime",
      "selected_record_id": "fanburstartillery-hit-runtime",
      "pending": false,
      "selected_on": null
    },
    {
      "group": "monster:FanburstArtillery:Idle",
      "current_record_id": "fanburstartillery-idle-runtime",
      "selected_record_id": "fanburstartillery-idle-runtime",
      "pending": false,
      "selected_on": null
    },
    {
      "group": "monster:FanburstArtillery:Projectile",
      "current_record_id": "fanburstartillery-projectile-runtime",
      "selected_record_id": "fanburstartillery-projectile-runtime",
      "pending": false,
      "selected_on": null
    },
    {
      "group": "monster:FanburstArtillery:Walk",
      "current_record_id": "fanburstartillery-walk-runtime",
      "selected_record_id": "fanburstartillery-walk-runtime",
      "pending": false,
      "selected_on": null
    },
    {
      "group": "monster:GrassVineMonster:Attack",
      "current_record_id": "grassvinemonster-attack-runtime",
      "selected_record_id": "grassvinemonster-attack-runtime",
      "pending": false,
      "selected_on": null
    },
    {
      "group": "monster:GrassVineMonster:Idle",
      "current_record_id": "grassvinemonster-idle-runtime",
      "selected_record_id": "grassvinemonster-idle-runtime",
      "pending": false,
      "selected_on": null
    },
    {
      "group": "monster:GrassVineMonster:VineEruption",
      "current_record_id": "grassvinemonster-vineeruption-runtime",
      "selected_record_id": "grassvinemonster-vineeruption-runtime",
      "pending": false,
      "selected_on": null
    },
    {
      "group": "monster:GrassVineMonster:Walk",
      "current_record_id": "grassvinemonster-walk-runtime",
      "selected_record_id": "grassvinemonster-walk-runtime",
      "pending": false,
      "selected_on": null
    },
    {
      "group": "monster:NestHatchlingLizard:Attack",
      "current_record_id": "nesthatchlinglizard-attack-runtime",
      "selected_record_id": "nesthatchlinglizard-attack-runtime",
      "pending": false,
      "selected_on": null
    },
    {
      "group": "monster:NestHatchlingLizard:Death",
      "current_record_id": "nesthatchlinglizard-death-runtime",
      "selected_record_id": "nesthatchlinglizard-death-runtime",
      "pending": false,
      "selected_on": null
    },
    {
      "group": "monster:NestHatchlingLizard:Hit",
      "current_record_id": "nesthatchlinglizard-hit-runtime",
      "selected_record_id": "nesthatchlinglizard-hit-runtime",
      "pending": false,
      "selected_on": null
    },
    {
      "group": "monster:NestHatchlingLizard:Idle",
      "current_record_id": "nesthatchlinglizard-idle-runtime",
      "selected_record_id": "nesthatchlinglizard-idle-runtime",
      "pending": false,
      "selected_on": null
    },
    {
      "group": "monster:NestHatchlingLizard:Spawn",
      "current_record_id": "nesthatchlinglizard-spawn-runtime",
      "selected_record_id": "nesthatchlinglizard-spawn-runtime",
      "pending": false,
      "selected_on": null
    },
    {
      "group": "monster:NestHatchlingLizard:Walk",
      "current_record_id": "nesthatchlinglizard-walk-runtime",
      "selected_record_id": "nesthatchlinglizard-walk-runtime",
      "pending": false,
      "selected_on": null
    },
    {
      "group": "monster:StampfootLeaper:AttackAirborne",
      "current_record_id": "stampfootleaper-attackairborne-runtime",
      "selected_record_id": "stampfootleaper-attackairborne-runtime",
      "pending": false,
      "selected_on": null
    },
    {
      "group": "monster:StampfootLeaper:AttackAnticipation",
      "current_record_id": "stampfootleaper-attackanticipation-runtime",
      "selected_record_id": "stampfootleaper-attackanticipation-runtime",
      "pending": false,
      "selected_on": null
    },
    {
      "group": "monster:StampfootLeaper:AttackLand",
      "current_record_id": "stampfootleaper-attackland-runtime",
      "selected_record_id": "stampfootleaper-attackland-runtime",
      "pending": false,
      "selected_on": null
    },
    {
      "group": "monster:StampfootLeaper:Death",
      "current_record_id": "stampfootleaper-death-runtime",
      "selected_record_id": "stampfootleaper-death-runtime",
      "pending": false,
      "selected_on": null
    },
    {
      "group": "monster:StampfootLeaper:Hit",
      "current_record_id": "stampfootleaper-hit-runtime",
      "selected_record_id": "stampfootleaper-hit-runtime",
      "pending": false,
      "selected_on": null
    },
    {
      "group": "monster:StampfootLeaper:Idle",
      "current_record_id": "stampfootleaper-idle-runtime",
      "selected_record_id": "stampfootleaper-idle-runtime",
      "pending": false,
      "selected_on": null
    },
    {
      "group": "monster:StampfootLeaper:ImpactFX",
      "current_record_id": "stampfootleaper-impactfx-runtime",
      "selected_record_id": "stampfootleaper-impactfx-runtime",
      "pending": false,
      "selected_on": null
    },
    {
      "group": "monster:StampfootLeaper:Walk",
      "current_record_id": "stampfootleaper-walk-runtime",
      "selected_record_id": "stampfootleaper-walk-runtime",
      "pending": false,
      "selected_on": null
    },
    {
      "group": "monster:WalkingNest:Attack",
      "current_record_id": "walkingnest-attack-runtime",
      "selected_record_id": "walkingnest-attack-runtime",
      "pending": false,
      "selected_on": null
    },
    {
      "group": "monster:WalkingNest:Death",
      "current_record_id": "walkingnest-death-runtime",
      "selected_record_id": "walkingnest-death-runtime",
      "pending": false,
      "selected_on": null
    },
    {
      "group": "monster:WalkingNest:Hit",
      "current_record_id": "walkingnest-hit-runtime",
      "selected_record_id": "walkingnest-hit-runtime",
      "pending": false,
      "selected_on": null
    },
    {
      "group": "monster:WalkingNest:Idle",
      "current_record_id": "walkingnest-idle-runtime",
      "selected_record_id": "walkingnest-idle-runtime",
      "pending": false,
      "selected_on": null
    },
    {
      "group": "monster:WalkingNest:Walk",
      "current_record_id": "walkingnest-walk-runtime",
      "selected_record_id": "walkingnest-walk-runtime",
      "pending": false,
      "selected_on": null
    },
    {
      "group": "monster:WhirlDashSpirit:IdleHover",
      "current_record_id": "whirldashspirit-idlehover-runtime",
      "selected_record_id": "whirldashspirit-idlehover-runtime",
      "pending": false,
      "selected_on": null
    },
    {
      "group": "monster:WhirlDashSpirit:MorphSpin",
      "current_record_id": "whirldashspirit-morphspin-runtime",
      "selected_record_id": "whirldashspirit-morphspin-runtime",
      "pending": false,
      "selected_on": null
    },
    {
      "group": "monster:WhirlDashSpirit:OrbDash",
      "current_record_id": "whirldashspirit-orbdash-runtime",
      "selected_record_id": "whirldashspirit-orbdash-runtime",
      "pending": false,
      "selected_on": null
    },
    {
      "group": "player:RookieMale:Dash",
      "current_record_id": "rookiemale-dash-bd627647",
      "selected_record_id": "rookiemale-dash-bd627647",
      "pending": false,
      "selected_on": null
    },
    {
      "group": "player:RookieMale:Idle",
      "current_record_id": "rookiemale-idle-1e2803ce",
      "selected_record_id": "rookiemale-idle-1e2803ce",
      "pending": false,
      "selected_on": null
    },
    {
      "group": "player:RookieMale:Run",
      "current_record_id": "rookiemale-run-60730eee",
      "selected_record_id": "rookiemale-run-60730eee",
      "pending": false,
      "selected_on": null
    }
  ],
  "workspace_source": "Assets/**/SpriteProduction/**/sprite-request.json",
  "workspace_count": 8,
  "workspaces": [
    {
      "id": "underworld-chain-executioner-slash-fx-0b7f8c17",
      "entity_type": "effect",
      "character": "underworld_chain_executioner_slash_fx",
      "character_label": "황천 사슬 집행자 · 참격 효과",
      "title": "황천 사슬 집행자 · 참격 효과",
      "description": "One cohesive crescent-shaped spectral sickle slash with a pale-teal core, turquoise body, restrained antique-gold leading edge, and a thick dark indigo-violet contour. No character, weapon, or detached particles.",
      "source_root": "Assets/Monsters/SpriteProduction/UnderworldChainExecutioner/SlashFX/Run",
      "status": "composed",
      "status_label": "시트 제작됨",
      "state_count": 1,
      "frame_count": 8,
      "states": [
        {
          "name": "slash_fx",
          "frames": 8,
          "fps": 16.0,
          "loop": false
        }
      ],
      "directions": [],
      "representative_url": "./animation-media/workspaces/underworld-chain-executioner-slash-fx-0b7f8c17/subject-representative-c762f49ae6.png",
      "preview_url": "./animation-media/workspaces/underworld-chain-executioner-slash-fx-0b7f8c17/workspace-preview-0d7f9d72af.png",
      "curation_available": true
    },
    {
      "id": "fanburstartillery-9932e182",
      "entity_type": "monster",
      "character": "FanburstArtillery",
      "character_label": "부채탄 포대충",
      "title": "부채탄 포대충",
      "description": "The approved game-runtime frames for the screen-right single-barrel fanburst artillery monster.",
      "source_root": "Assets/Monsters/SpriteProduction/RuntimeCuration/FanburstArtillery",
      "status": "composed",
      "status_label": "시트 제작됨",
      "state_count": 6,
      "frame_count": 52,
      "states": [
        {
          "name": "Idle",
          "frames": 8,
          "fps": 8.0,
          "loop": true
        },
        {
          "name": "Walk",
          "frames": 8,
          "fps": 10.0,
          "loop": true
        },
        {
          "name": "Attack",
          "frames": 12,
          "fps": 15.0,
          "loop": false
        },
        {
          "name": "Hit",
          "frames": 6,
          "fps": 15.0,
          "loop": false
        },
        {
          "name": "Death",
          "frames": 12,
          "fps": 12.0,
          "loop": false
        },
        {
          "name": "Projectile",
          "frames": 6,
          "fps": 18.0,
          "loop": true
        }
      ],
      "directions": [],
      "representative_url": "./animation-media/workspaces/fanburstartillery-9932e182/subject-representative-3fc6be9c82.png",
      "preview_url": "./animation-media/workspaces/fanburstartillery-9932e182/workspace-preview-28f6ebfe74.png",
      "curation_available": true
    },
    {
      "id": "grassvinemonster-c26c23c2",
      "entity_type": "monster",
      "character": "GrassVineMonster",
      "character_label": "가시덩굴 화분괴물",
      "title": "가시덩굴 화분괴물",
      "description": "The approved game-runtime frames for the screen-right thorn-vine flowerpot monster.",
      "source_root": "Assets/Monsters/SpriteProduction/RuntimeCuration/GrassVineMonster",
      "status": "curated",
      "status_label": "큐레이션 적용",
      "state_count": 4,
      "frame_count": 32,
      "states": [
        {
          "name": "Idle",
          "frames": 8,
          "fps": 6.0,
          "loop": true
        },
        {
          "name": "Walk",
          "frames": 8,
          "fps": 8.0,
          "loop": true
        },
        {
          "name": "Attack",
          "frames": 8,
          "fps": 8.0,
          "loop": false
        },
        {
          "name": "VineEruption",
          "frames": 8,
          "fps": 8.0,
          "loop": false
        }
      ],
      "directions": [],
      "representative_url": "./animation-media/workspaces/grassvinemonster-c26c23c2/subject-representative-900a21ef76.png",
      "preview_url": "./animation-media/workspaces/grassvinemonster-c26c23c2/workspace-preview-79f9116be5.png",
      "curation_available": true
    },
    {
      "id": "stampfootleaper-7a7ad090",
      "entity_type": "monster",
      "character": "StampfootLeaper",
      "character_label": "도장발 쿵귀",
      "title": "도장발 쿵귀",
      "description": "The approved game-runtime frames for the screen-right single-foot stamp leaper.",
      "source_root": "Assets/Monsters/SpriteProduction/RuntimeCuration/StampfootLeaper",
      "status": "curated",
      "status_label": "큐레이션 적용",
      "state_count": 8,
      "frame_count": 64,
      "states": [
        {
          "name": "Idle",
          "frames": 8,
          "fps": 8.0,
          "loop": true
        },
        {
          "name": "Walk",
          "frames": 8,
          "fps": 10.0,
          "loop": true
        },
        {
          "name": "AttackAnticipation",
          "frames": 8,
          "fps": 12.0,
          "loop": false
        },
        {
          "name": "AttackAirborne",
          "frames": 6,
          "fps": 6.0,
          "loop": false
        },
        {
          "name": "AttackLand",
          "frames": 8,
          "fps": 8.0,
          "loop": false
        },
        {
          "name": "Hit",
          "frames": 6,
          "fps": 15.0,
          "loop": false
        },
        {
          "name": "Death",
          "frames": 12,
          "fps": 12.0,
          "loop": false
        },
        {
          "name": "ImpactFX",
          "frames": 8,
          "fps": 16.0,
          "loop": false
        }
      ],
      "directions": [],
      "representative_url": "./animation-media/workspaces/stampfootleaper-7a7ad090/subject-representative-43487768f1.png",
      "preview_url": "./animation-media/workspaces/stampfootleaper-7a7ad090/workspace-preview-063ea74f61.png",
      "curation_available": true
    },
    {
      "id": "whirldashspirit-c1de6c26",
      "entity_type": "monster",
      "character": "WhirlDashSpirit",
      "character_label": "회오리 돌진령",
      "title": "회오리 돌진령",
      "description": "The approved game-runtime frames for the screen-right hovering dash spirit.",
      "source_root": "Assets/Monsters/SpriteProduction/RuntimeCuration/WhirlDashSpirit",
      "status": "curated",
      "status_label": "큐레이션 적용",
      "state_count": 3,
      "frame_count": 24,
      "states": [
        {
          "name": "IdleHover",
          "frames": 8,
          "fps": 8.0,
          "loop": true
        },
        {
          "name": "MorphSpin",
          "frames": 10,
          "fps": 15.0,
          "loop": false
        },
        {
          "name": "OrbDash",
          "frames": 6,
          "fps": 18.0,
          "loop": true
        }
      ],
      "directions": [],
      "representative_url": "./animation-media/workspaces/whirldashspirit-c1de6c26/subject-representative-1fb29f65b4.png",
      "preview_url": "./animation-media/workspaces/whirldashspirit-c1de6c26/workspace-preview-e04bb614c7.png",
      "curation_available": true
    },
    {
      "id": "nest-hatchling-lizard-da8c69df",
      "entity_type": "monster",
      "character": "nest_hatchling_lizard",
      "character_label": "둥지 새끼 도마뱀",
      "title": "둥지 새끼 도마뱀",
      "description": "A tiny newly hatched orange-and-teal lizard with four legs, one long tail, a broken eggshell cap and shell collar, always visibly facing screen-right.",
      "source_root": "Assets/Monsters/SpriteProduction/WalkingNestFamily/NestHatchlingLizard",
      "status": "composed",
      "status_label": "시트 제작됨",
      "state_count": 7,
      "frame_count": 46,
      "states": [
        {
          "name": "spawn",
          "frames": 6,
          "fps": 15.0,
          "loop": false
        },
        {
          "name": "idle",
          "frames": 8,
          "fps": 8.0,
          "loop": true
        },
        {
          "name": "walk",
          "frames": 8,
          "fps": 12.0,
          "loop": true
        },
        {
          "name": "attack",
          "frames": 8,
          "fps": 16.0,
          "loop": false
        },
        {
          "name": "hit",
          "frames": 6,
          "fps": 15.0,
          "loop": false
        },
        {
          "name": "death_a",
          "frames": 5,
          "fps": 12.0,
          "loop": false
        },
        {
          "name": "death_b",
          "frames": 5,
          "fps": 12.0,
          "loop": false
        }
      ],
      "directions": [],
      "representative_url": "./animation-media/workspaces/nest-hatchling-lizard-da8c69df/subject-representative-f8c7976180.png",
      "preview_url": "./animation-media/workspaces/nest-hatchling-lizard-da8c69df/workspace-preview-c3eb60fe78.png",
      "curation_available": true
    },
    {
      "id": "underworld-chain-executioner-2c0d486e",
      "entity_type": "monster",
      "character": "underworld_chain_executioner",
      "character_label": "황천 사슬 집행자",
      "title": "황천 사슬 집행자",
      "description": "A compact floating underworld warden with a cracked bronze funerary mask, exactly two amber eye slits, exactly two armored arms and hands, exactly one crescent sickle, exactly one continuous chain held by both hands and attached to the sickle, charcoal armor, small crimson cloth accents, and one teal spectral-smoke lower body with no legs or feet. Always visibly faces screen-right.",
      "source_root": "Assets/Monsters/SpriteProduction/UnderworldChainExecutioner/Character",
      "status": "curated",
      "status_label": "큐레이션 적용",
      "state_count": 7,
      "frame_count": 48,
      "states": [
        {
          "name": "east_idle",
          "frames": 8,
          "fps": 8.0,
          "loop": true
        },
        {
          "name": "east_float",
          "frames": 8,
          "fps": 7.0,
          "loop": true
        },
        {
          "name": "east_attack_windup",
          "frames": 6,
          "fps": 8.0,
          "loop": false
        },
        {
          "name": "east_attack_sweep",
          "frames": 6,
          "fps": 10.0,
          "loop": false
        },
        {
          "name": "east_attack_reverse",
          "frames": 6,
          "fps": 8.0,
          "loop": false
        },
        {
          "name": "east_hit",
          "frames": 6,
          "fps": 10.0,
          "loop": false
        },
        {
          "name": "east_death",
          "frames": 8,
          "fps": 8.0,
          "loop": false
        }
      ],
      "directions": [
        "east",
        "west"
      ],
      "representative_url": "./animation-media/workspaces/underworld-chain-executioner-2c0d486e/subject-representative-843f7ed4c2.png",
      "preview_url": "./animation-media/workspaces/underworld-chain-executioner-2c0d486e/workspace-preview-09238e6c5b.png",
      "curation_available": true
    },
    {
      "id": "walking-nest-b35c81eb",
      "entity_type": "monster",
      "character": "walking_nest",
      "character_label": "걸어다니는 둥지",
      "title": "걸어다니는 둥지",
      "description": "A walking nest monster carrying four glowing orange eggs in a woven twig basket body, supported by four short root legs, always visibly facing screen-right.",
      "source_root": "Assets/Monsters/SpriteProduction/WalkingNestFamily/WalkingNest",
      "status": "curated",
      "status_label": "큐레이션 적용",
      "state_count": 7,
      "frame_count": 44,
      "states": [
        {
          "name": "idle",
          "frames": 8,
          "fps": 8.0,
          "loop": true
        },
        {
          "name": "walk_a",
          "frames": 5,
          "fps": 10.0,
          "loop": false
        },
        {
          "name": "walk_b",
          "frames": 5,
          "fps": 10.0,
          "loop": false
        },
        {
          "name": "attack",
          "frames": 8,
          "fps": 12.0,
          "loop": false
        },
        {
          "name": "hit",
          "frames": 6,
          "fps": 15.0,
          "loop": false
        },
        {
          "name": "death_a",
          "frames": 6,
          "fps": 12.0,
          "loop": false
        },
        {
          "name": "death_b",
          "frames": 6,
          "fps": 12.0,
          "loop": false
        }
      ],
      "directions": [],
      "representative_url": "./animation-media/workspaces/walking-nest-b35c81eb/subject-representative-71e6df3140.png",
      "preview_url": "./animation-media/workspaces/walking-nest-b35c81eb/workspace-preview-3f79c5bec5.png",
      "curation_available": true
    }
  ]
};
