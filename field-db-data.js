window.PACKBOUND_FIELD_DB = {
  "schema_version": 1,
  "revision": "82b3dfc27e7b1f45",
  "source": "Assets/World/PanelSprites/packbound_field_object_kits_v1.json",
  "runtime_source": "src/ServerScriptService/FieldBuilder.luau",
  "field_builder_version": 32,
  "count": 5,
  "base_count": 1,
  "combat_count": 4,
  "connectivity": "isolated",
  "connectivity_label": "서로 연결되지 않은 독립 필드",
  "field_spacing_studs": 520,
  "rendering_style": "2DPanelSprites",
  "fields": [
    {
      "id": "base_camp",
      "display_name": "베이스 캠프",
      "english_name": "Base Camp",
      "field_type": "base",
      "field_type_label": "베이스 필드",
      "runtime_name": "BaseCamp",
      "theme": "BaseCamp",
      "status": "active",
      "summary": "전투 전 준비와 장비·보관·성장 기능을 한곳에 모은 독립형 거점 필드.",
      "player_experience": "중앙 모닥불을 기준으로 필요한 기능을 빠르게 찾고, 포털을 통해 전투 필드로 이동한다.",
      "center_studs": [
        -520,
        0,
        0
      ],
      "size_studs": [
        141,
        141
      ],
      "footprint_scale": 0.75,
      "accent_color": "#F1BA63",
      "key_features": [
        "중앙 모닥불 중심의 방사형 동선",
        "장비 상점·아이템 보관·룬/장비 융합·캐릭터 강화",
        "절벽·폭포·바리케이드로 닫힌 독립 경계"
      ],
      "background_layers": [],
      "concept": "Assets/World/Concepts/packbound_base_camp_field_concept_v1.png",
      "concept_url": "./field-db-media/base_camp-concept.png?v=c47091f13777",
      "ground_texture": {
        "file": "Assets/World/Textures/packbound_base_camp_field_layout_v1.png",
        "image_url": "./field-db-media/base_camp-layout.png?v=dd8bc808ea45",
        "roblox_asset_id": "rbxassetid://140644527350354"
      },
      "object_group_count": 3,
      "object_slot_count": 27,
      "atlases": [
        {
          "id": "services",
          "label": "거점 기능",
          "file": "Assets/World/PanelSprites/packbound_base_camp_services_atlas_v1.png",
          "image_url": "./field-db-media/base_camp-atlas-services.png?v=780bdbeb38ba",
          "roblox_asset_id": "rbxassetid://113484986552211",
          "canvas_size": 1024,
          "cell_size": 341,
          "slot_count": 9,
          "slots": [
            {
              "index": 1,
              "id": "central_campfire",
              "label": "central campfire"
            },
            {
              "index": 2,
              "id": "field_portal",
              "label": "field portal"
            },
            {
              "index": 3,
              "id": "equipment_shop",
              "label": "equipment shop"
            },
            {
              "index": 4,
              "id": "item_storage",
              "label": "item storage"
            },
            {
              "index": 5,
              "id": "rune_fusion",
              "label": "rune fusion"
            },
            {
              "index": 6,
              "id": "equipment_fusion",
              "label": "equipment fusion"
            },
            {
              "index": 7,
              "id": "character_upgrade",
              "label": "character upgrade"
            },
            {
              "index": 8,
              "id": "camp_tent",
              "label": "camp tent"
            },
            {
              "index": 9,
              "id": "field_map_table",
              "label": "field map table"
            }
          ]
        },
        {
          "id": "decor_props",
          "label": "생활 장식",
          "file": "Assets/World/PanelSprites/packbound_base_camp_decor_props_atlas_v1.png",
          "image_url": "./field-db-media/base_camp-atlas-decor_props.png?v=984a2408d1cf",
          "roblox_asset_id": "rbxassetid://70813364262831",
          "canvas_size": 1024,
          "cell_size": 341,
          "slot_count": 9,
          "slots": [
            {
              "index": 1,
              "id": "barrel_stack",
              "label": "barrel stack"
            },
            {
              "index": 2,
              "id": "supply_bundle",
              "label": "supply bundle"
            },
            {
              "index": 3,
              "id": "camp_banner",
              "label": "camp banner"
            },
            {
              "index": 4,
              "id": "bedroll_bundle",
              "label": "bedroll bundle"
            },
            {
              "index": 5,
              "id": "cooking_station",
              "label": "cooking station"
            },
            {
              "index": 6,
              "id": "maintenance_rack",
              "label": "maintenance rack"
            },
            {
              "index": 7,
              "id": "direction_sign",
              "label": "direction sign"
            },
            {
              "index": 8,
              "id": "repair_mat",
              "label": "repair mat"
            },
            {
              "index": 9,
              "id": "bottle_lantern_cluster",
              "label": "bottle lantern cluster"
            }
          ]
        },
        {
          "id": "boundary_clusters",
          "label": "경계 오브젝트",
          "file": "Assets/World/PanelSprites/packbound_base_camp_boundary_clusters_atlas_v1.png",
          "image_url": "./field-db-media/base_camp-atlas-boundary_clusters.png?v=d2a765d2f28d",
          "roblox_asset_id": "rbxassetid://131079042676402",
          "canvas_size": 1024,
          "cell_size": 341,
          "slot_count": 9,
          "slots": [
            {
              "index": 1,
              "id": "retaining_wall_cluster",
              "label": "retaining wall cluster"
            },
            {
              "index": 2,
              "id": "shrub_cluster",
              "label": "shrub cluster"
            },
            {
              "index": 3,
              "id": "supply_barricade",
              "label": "supply barricade"
            },
            {
              "index": 4,
              "id": "lantern_pillar",
              "label": "lantern pillar"
            },
            {
              "index": 5,
              "id": "cliff_cluster",
              "label": "cliff cluster"
            },
            {
              "index": 6,
              "id": "waterfall_lip",
              "label": "waterfall lip"
            },
            {
              "index": 7,
              "id": "corner_wall_cluster",
              "label": "corner wall cluster"
            },
            {
              "index": 8,
              "id": "boundary_banner",
              "label": "boundary banner"
            },
            {
              "index": 9,
              "id": "dead_end_cluster",
              "label": "dead end cluster"
            }
          ]
        }
      ]
    },
    {
      "id": "junkwind_meadow",
      "display_name": "정크윈드 초원",
      "english_name": "Junkwind Meadow",
      "field_type": "combat",
      "field_type_label": "전투 필드",
      "runtime_name": "PackBoundField",
      "theme": "JunkwindMeadow",
      "status": "active",
      "summary": "보랏빛 길과 무성한 초원 사이에 폐기계가 남아 있는 대표 전투 필드.",
      "player_experience": "넓은 중앙 교전 공간을 돌며 거대 오리와 고장 난 중계탑을 랜드마크로 삼는다.",
      "center_studs": [
        0,
        0,
        0
      ],
      "size_studs": [
        188,
        188
      ],
      "footprint_scale": 1,
      "accent_color": "#73D391",
      "key_features": [
        "보랏빛 순환형 전투 동선",
        "거대 정크 오리와 고장 난 중계탑",
        "다층 패럴랙스 숲과 신비로운 원경 성"
      ],
      "background_layers": [
        "mystic_castle_panorama",
        "parallax_far_ridges",
        "grounded_mid_canopy",
        "foreground_canopy"
      ],
      "concept": "Assets/World/Concepts/junkwind_meadow_field_concept_v1.png",
      "concept_url": "./field-db-media/junkwind_meadow-concept.png?v=6e88fc02e799",
      "ground_texture": {
        "file": "Assets/World/Textures/junkwind_meadow_field_layout_v1.png",
        "image_url": "./field-db-media/junkwind_meadow-layout.png?v=975ace933413",
        "roblox_asset_id": "rbxassetid://105093818434394"
      },
      "object_group_count": 3,
      "object_slot_count": 27,
      "atlases": [
        {
          "id": "boundaries_landmarks",
          "label": "경계·랜드마크",
          "file": "Assets/World/PanelSprites/junkwind_meadow_boundaries_landmarks_atlas_v2.png",
          "image_url": "./field-db-media/junkwind_meadow-atlas-boundaries_landmarks.png?v=49423ee09e75",
          "roblox_asset_id": "rbxassetid://118575758028838",
          "canvas_size": 1024,
          "cell_size": 341,
          "slot_count": 9,
          "slots": [
            {
              "index": 1,
              "id": "meadow_bush_cluster",
              "label": "meadow bush cluster"
            },
            {
              "index": 2,
              "id": "rust_cliff_cluster",
              "label": "rust cliff cluster"
            },
            {
              "index": 3,
              "id": "junk_fence_cluster",
              "label": "junk fence cluster"
            },
            {
              "index": 4,
              "id": "giant_junkwind_duck",
              "label": "giant junkwind duck"
            },
            {
              "index": 5,
              "id": "broken_relay_tower",
              "label": "broken relay tower"
            },
            {
              "index": 6,
              "id": "sealed_relay_gate",
              "label": "sealed relay gate"
            },
            {
              "index": 7,
              "id": "meadow_rock_cluster",
              "label": "meadow rock cluster"
            },
            {
              "index": 8,
              "id": "junk_vending_machine",
              "label": "junk vending machine"
            },
            {
              "index": 9,
              "id": "bush_swallowed_cart",
              "label": "bush swallowed cart"
            }
          ]
        },
        {
          "id": "props",
          "label": "필드 소품",
          "file": "Assets/World/PanelSprites/junkwind_meadow_props_atlas_v2.png",
          "image_url": "./field-db-media/junkwind_meadow-atlas-props.png?v=5144c123b9ce",
          "roblox_asset_id": "rbxassetid://123986997787802",
          "canvas_size": 1024,
          "cell_size": 341,
          "slot_count": 9,
          "slots": [
            {
              "index": 1,
              "id": "energy_coil_pylon",
              "label": "energy coil pylon"
            },
            {
              "index": 2,
              "id": "hazard_barricade",
              "label": "hazard barricade"
            },
            {
              "index": 3,
              "id": "reward_supply_crate",
              "label": "reward supply crate"
            },
            {
              "index": 4,
              "id": "junk_scrap_pile",
              "label": "junk scrap pile"
            },
            {
              "index": 5,
              "id": "meadow_puddle",
              "label": "meadow puddle"
            },
            {
              "index": 6,
              "id": "direction_sign",
              "label": "direction sign"
            },
            {
              "index": 7,
              "id": "flower_tuft",
              "label": "flower tuft"
            },
            {
              "index": 8,
              "id": "bottle_lamp",
              "label": "bottle lamp"
            },
            {
              "index": 9,
              "id": "battery_pile",
              "label": "battery pile"
            }
          ]
        },
        {
          "id": "edge_facades",
          "label": "가장자리 마감",
          "file": "Assets/World/PanelSprites/junkwind_meadow_edge_facades_atlas_v6.png",
          "image_url": "./field-db-media/junkwind_meadow-atlas-edge_facades.png?v=a18aa809ec23",
          "roblox_asset_id": "rbxassetid://81001225136424",
          "canvas_size": 1024,
          "cell_size": 341,
          "slot_count": 9,
          "slots": [
            {
              "index": 1,
              "id": "bush_cliff",
              "label": "bush cliff"
            },
            {
              "index": 2,
              "id": "fence_cliff",
              "label": "fence cliff"
            },
            {
              "index": 3,
              "id": "dead_end_barricade",
              "label": "dead end barricade"
            },
            {
              "index": 4,
              "id": "outer_corner_cliff",
              "label": "outer corner cliff"
            },
            {
              "index": 5,
              "id": "inner_corner_cliff",
              "label": "inner corner cliff"
            },
            {
              "index": 6,
              "id": "runoff_cliff",
              "label": "runoff cliff"
            },
            {
              "index": 7,
              "id": "boulder_buttress",
              "label": "boulder buttress"
            },
            {
              "index": 8,
              "id": "bramble_curtain",
              "label": "bramble curtain"
            },
            {
              "index": 9,
              "id": "guardrail_closure",
              "label": "guardrail closure"
            }
          ]
        }
      ]
    },
    {
      "id": "desert_oasis",
      "display_name": "사막과 오아시스",
      "english_name": "Desert Oasis",
      "field_type": "combat",
      "field_type_label": "전투 필드",
      "runtime_name": "DesertOasisField",
      "theme": "DesertOasis",
      "status": "active",
      "summary": "붉은 사암과 청록빛 물길, 태양광 폐기계가 공존하는 전투 필드.",
      "player_experience": "오아시스를 시각적 기준점으로 삼아 사암 절벽과 기계 시설 사이를 순환한다.",
      "center_studs": [
        520,
        0,
        0
      ],
      "size_studs": [
        188,
        188
      ],
      "footprint_scale": 1,
      "accent_color": "#F1BA63",
      "key_features": [
        "오아시스와 사암 절벽의 강한 색 대비",
        "태양광 관측소와 펌프 시설",
        "선인장·바위·기계 벽으로 닫힌 경계"
      ],
      "background_layers": [],
      "concept": "Assets/World/Concepts/packbound_desert_oasis_field_concept_v1.png",
      "concept_url": "./field-db-media/desert_oasis-concept.png?v=747c986f3918",
      "ground_texture": {
        "file": "Assets/World/Textures/packbound_desert_oasis_field_layout_v1.png",
        "image_url": "./field-db-media/desert_oasis-layout.png?v=9c89f75427cc",
        "roblox_asset_id": "rbxassetid://85061740763055"
      },
      "object_group_count": 3,
      "object_slot_count": 27,
      "atlases": [
        {
          "id": "boundaries_landmarks",
          "label": "경계·랜드마크",
          "file": "Assets/World/PanelSprites/packbound_desert_oasis_boundaries_landmarks_atlas_v1.png",
          "image_url": "./field-db-media/desert_oasis-atlas-boundaries_landmarks.png?v=87b59645f53b",
          "roblox_asset_id": "rbxassetid://135531082481407",
          "canvas_size": 1024,
          "cell_size": 341,
          "slot_count": 9,
          "slots": [
            {
              "index": 1,
              "id": "oasis_palm_cluster",
              "label": "oasis palm cluster"
            },
            {
              "index": 2,
              "id": "sandstone_mesa",
              "label": "sandstone mesa"
            },
            {
              "index": 3,
              "id": "solar_coil_wall",
              "label": "solar coil wall"
            },
            {
              "index": 4,
              "id": "solar_observatory",
              "label": "solar observatory"
            },
            {
              "index": 5,
              "id": "oasis_pump_station",
              "label": "oasis pump station"
            },
            {
              "index": 6,
              "id": "desert_relay_gate",
              "label": "desert relay gate"
            },
            {
              "index": 7,
              "id": "red_rock_cactus_cluster",
              "label": "red rock cactus cluster"
            },
            {
              "index": 8,
              "id": "desert_supply_kiosk",
              "label": "desert supply kiosk"
            },
            {
              "index": 9,
              "id": "shade_workbench",
              "label": "shade workbench"
            }
          ]
        },
        {
          "id": "props",
          "label": "필드 소품",
          "file": "Assets/World/PanelSprites/packbound_desert_oasis_props_atlas_v1.png",
          "image_url": "./field-db-media/desert_oasis-atlas-props.png?v=0bb7a8bd4ff7",
          "roblox_asset_id": "rbxassetid://90638708301274",
          "canvas_size": 1024,
          "cell_size": 341,
          "slot_count": 9,
          "slots": [
            {
              "index": 1,
              "id": "solar_energy_coil",
              "label": "solar energy coil"
            },
            {
              "index": 2,
              "id": "sand_hazard_barricade",
              "label": "sand hazard barricade"
            },
            {
              "index": 3,
              "id": "desert_supply_chest",
              "label": "desert supply chest"
            },
            {
              "index": 4,
              "id": "desert_scrap_pile",
              "label": "desert scrap pile"
            },
            {
              "index": 5,
              "id": "small_oasis_pool",
              "label": "small oasis pool"
            },
            {
              "index": 6,
              "id": "desert_direction_sign",
              "label": "desert direction sign"
            },
            {
              "index": 7,
              "id": "agave_flower_cluster",
              "label": "agave flower cluster"
            },
            {
              "index": 8,
              "id": "water_bottle_lantern",
              "label": "water bottle lantern"
            },
            {
              "index": 9,
              "id": "canteen_battery_bundle",
              "label": "canteen battery bundle"
            }
          ]
        },
        {
          "id": "edge_facades",
          "label": "가장자리 마감",
          "file": "Assets/World/PanelSprites/packbound_desert_oasis_edge_facades_atlas_v1.png",
          "image_url": "./field-db-media/desert_oasis-atlas-edge_facades.png?v=c2bcf2dce830",
          "roblox_asset_id": "rbxassetid://132235636353889",
          "canvas_size": 1024,
          "cell_size": 341,
          "slot_count": 9,
          "slots": [
            {
              "index": 1,
              "id": "oasis_palm_cliff",
              "label": "oasis palm cliff"
            },
            {
              "index": 2,
              "id": "machine_wall_cliff",
              "label": "machine wall cliff"
            },
            {
              "index": 3,
              "id": "collapsed_dead_end_cliff",
              "label": "collapsed dead end cliff"
            },
            {
              "index": 4,
              "id": "sandstone_outer_corner",
              "label": "sandstone outer corner"
            },
            {
              "index": 5,
              "id": "sandstone_inner_corner",
              "label": "sandstone inner corner"
            },
            {
              "index": 6,
              "id": "oasis_runoff_cliff",
              "label": "oasis runoff cliff"
            },
            {
              "index": 7,
              "id": "boulder_buttress_cliff",
              "label": "boulder buttress cliff"
            },
            {
              "index": 8,
              "id": "cactus_root_curtain_cliff",
              "label": "cactus root curtain cliff"
            },
            {
              "index": 9,
              "id": "broken_desert_bridge_cliff",
              "label": "broken desert bridge cliff"
            }
          ]
        }
      ]
    },
    {
      "id": "frozen_village",
      "display_name": "얼어붙은 마을",
      "english_name": "Frozen Village",
      "field_type": "combat",
      "field_type_label": "전투 필드",
      "runtime_name": "FrozenVillageField",
      "theme": "FrozenVillage",
      "status": "active",
      "summary": "눈에 뒤덮인 마을과 얼어붙은 기계 설비가 남아 있는 전투 필드.",
      "player_experience": "따뜻한 불빛이 남은 집과 차가운 빙벽을 오가며 폐허가 된 마을을 탐색한다.",
      "center_studs": [
        0,
        0,
        -520
      ],
      "size_studs": [
        188,
        188
      ],
      "footprint_scale": 1,
      "accent_color": "#86CFF2",
      "key_features": [
        "따뜻한 창문과 푸른 설원의 온도 대비",
        "얼어붙은 수차와 관측 시설",
        "빙벽·침엽수·고드름으로 닫힌 경계"
      ],
      "background_layers": [],
      "concept": "Assets/World/Concepts/packbound_frozen_village_field_concept_v1.png",
      "concept_url": "./field-db-media/frozen_village-concept.png?v=5a90e7642e62",
      "ground_texture": {
        "file": "Assets/World/Textures/packbound_frozen_village_field_layout_v1.png",
        "image_url": "./field-db-media/frozen_village-layout.png?v=8a8ac3da89bd",
        "roblox_asset_id": "rbxassetid://103482928287827"
      },
      "object_group_count": 3,
      "object_slot_count": 27,
      "atlases": [
        {
          "id": "boundaries_landmarks",
          "label": "경계·랜드마크",
          "file": "Assets/World/PanelSprites/packbound_frozen_village_boundaries_landmarks_atlas_v1.png",
          "image_url": "./field-db-media/frozen_village-atlas-boundaries_landmarks.png?v=0f72bff366d4",
          "roblox_asset_id": "rbxassetid://86375805726140",
          "canvas_size": 1024,
          "cell_size": 341,
          "slot_count": 9,
          "slots": [
            {
              "index": 1,
              "id": "snow_fir_cluster",
              "label": "snow fir cluster"
            },
            {
              "index": 2,
              "id": "blue_ice_mesa",
              "label": "blue ice mesa"
            },
            {
              "index": 3,
              "id": "snow_machine_wall",
              "label": "snow machine wall"
            },
            {
              "index": 4,
              "id": "frozen_relay_observatory",
              "label": "frozen relay observatory"
            },
            {
              "index": 5,
              "id": "frozen_waterwheel_gate",
              "label": "frozen waterwheel gate"
            },
            {
              "index": 6,
              "id": "warm_snow_cottage",
              "label": "warm snow cottage"
            },
            {
              "index": 7,
              "id": "ice_crystal_boulder_cluster",
              "label": "ice crystal boulder cluster"
            },
            {
              "index": 8,
              "id": "frozen_supply_kiosk",
              "label": "frozen supply kiosk"
            },
            {
              "index": 9,
              "id": "snow_supply_pen",
              "label": "snow supply pen"
            }
          ]
        },
        {
          "id": "props",
          "label": "필드 소품",
          "file": "Assets/World/PanelSprites/packbound_frozen_village_props_atlas_v1.png",
          "image_url": "./field-db-media/frozen_village-atlas-props.png?v=9c6a2899fb88",
          "roblox_asset_id": "rbxassetid://84695289175900",
          "canvas_size": 1024,
          "cell_size": 341,
          "slot_count": 9,
          "slots": [
            {
              "index": 1,
              "id": "frost_energy_coil",
              "label": "frost energy coil"
            },
            {
              "index": 2,
              "id": "snow_hazard_barricade",
              "label": "snow hazard barricade"
            },
            {
              "index": 3,
              "id": "ice_sealed_supply_chest",
              "label": "ice sealed supply chest"
            },
            {
              "index": 4,
              "id": "frozen_scrap_pile",
              "label": "frozen scrap pile"
            },
            {
              "index": 5,
              "id": "cracked_ice_pool",
              "label": "cracked ice pool"
            },
            {
              "index": 6,
              "id": "frost_direction_sign",
              "label": "frost direction sign"
            },
            {
              "index": 7,
              "id": "frostberry_crystal_cluster",
              "label": "frostberry crystal cluster"
            },
            {
              "index": 8,
              "id": "warm_frost_lantern",
              "label": "warm frost lantern"
            },
            {
              "index": 9,
              "id": "firewood_battery_bundle",
              "label": "firewood battery bundle"
            }
          ]
        },
        {
          "id": "edge_facades",
          "label": "가장자리 마감",
          "file": "Assets/World/PanelSprites/packbound_frozen_village_edge_facades_atlas_v1.png",
          "image_url": "./field-db-media/frozen_village-atlas-edge_facades.png?v=e8c32348c7be",
          "roblox_asset_id": "rbxassetid://86237108709242",
          "canvas_size": 1024,
          "cell_size": 341,
          "slot_count": 9,
          "slots": [
            {
              "index": 1,
              "id": "fir_snow_cliff",
              "label": "fir snow cliff"
            },
            {
              "index": 2,
              "id": "village_wall_ice_cliff",
              "label": "village wall ice cliff"
            },
            {
              "index": 3,
              "id": "blocked_snow_dead_end",
              "label": "blocked snow dead end"
            },
            {
              "index": 4,
              "id": "ice_outer_corner",
              "label": "ice outer corner"
            },
            {
              "index": 5,
              "id": "ice_inner_corner",
              "label": "ice inner corner"
            },
            {
              "index": 6,
              "id": "frozen_runoff_cliff",
              "label": "frozen runoff cliff"
            },
            {
              "index": 7,
              "id": "ice_crystal_buttress_cliff",
              "label": "ice crystal buttress cliff"
            },
            {
              "index": 8,
              "id": "fir_root_icicle_cliff",
              "label": "fir root icicle cliff"
            },
            {
              "index": 9,
              "id": "broken_frozen_bridge_cliff",
              "label": "broken frozen bridge cliff"
            }
          ]
        }
      ]
    },
    {
      "id": "machine_jungle",
      "display_name": "기계와 자연의 정글",
      "english_name": "Machine Jungle",
      "field_type": "combat",
      "field_type_label": "전투 필드",
      "runtime_name": "MachineJungleField",
      "theme": "MachineJungle",
      "status": "active",
      "summary": "거대 식생이 오래된 기계 문명을 집어삼킨 고밀도 전투 필드.",
      "player_experience": "덩굴에 파묻힌 관측소와 생체 전기 장치를 따라 깊은 정글의 층위를 읽는다.",
      "center_studs": [
        520,
        0,
        -520
      ],
      "size_studs": [
        188,
        188
      ],
      "footprint_scale": 1,
      "accent_color": "#45D6CA",
      "key_features": [
        "청록 수로와 거대 잎사귀의 고밀도 배경",
        "뿌리에 삼켜진 관측소와 기계 사원",
        "나무뿌리·현무암·기계 잔해로 닫힌 경계"
      ],
      "background_layers": [],
      "concept": "Assets/World/Concepts/packbound_machine_jungle_field_concept_v1.png",
      "concept_url": "./field-db-media/machine_jungle-concept.png?v=5f1c1cc49241",
      "ground_texture": {
        "file": "Assets/World/Textures/packbound_machine_jungle_field_layout_v1.png",
        "image_url": "./field-db-media/machine_jungle-layout.png?v=a4240d2bb177",
        "roblox_asset_id": "rbxassetid://102994241245038"
      },
      "object_group_count": 3,
      "object_slot_count": 27,
      "atlases": [
        {
          "id": "boundaries_landmarks",
          "label": "경계·랜드마크",
          "file": "Assets/World/PanelSprites/packbound_machine_jungle_boundaries_landmarks_atlas_v1.png",
          "image_url": "./field-db-media/machine_jungle-atlas-boundaries_landmarks.png?v=2b12a047e164",
          "roblox_asset_id": "rbxassetid://106135883777187",
          "canvas_size": 1024,
          "cell_size": 341,
          "slot_count": 9,
          "slots": [
            {
              "index": 1,
              "id": "giant_leaf_cluster",
              "label": "giant leaf cluster"
            },
            {
              "index": 2,
              "id": "root_basalt_mesa",
              "label": "root basalt mesa"
            },
            {
              "index": 3,
              "id": "vine_machine_wall",
              "label": "vine machine wall"
            },
            {
              "index": 4,
              "id": "root_swallowed_observatory",
              "label": "root swallowed observatory"
            },
            {
              "index": 5,
              "id": "jungle_turbine_gate",
              "label": "jungle turbine gate"
            },
            {
              "index": 6,
              "id": "machine_temple_arch",
              "label": "machine temple arch"
            },
            {
              "index": 7,
              "id": "root_boulder_mushroom_cluster",
              "label": "root boulder mushroom cluster"
            },
            {
              "index": 8,
              "id": "overgrown_specimen_kiosk",
              "label": "overgrown specimen kiosk"
            },
            {
              "index": 9,
              "id": "jungle_salvage_cage",
              "label": "jungle salvage cage"
            }
          ]
        },
        {
          "id": "props",
          "label": "필드 소품",
          "file": "Assets/World/PanelSprites/packbound_machine_jungle_props_atlas_v1.png",
          "image_url": "./field-db-media/machine_jungle-atlas-props.png?v=daeb42d16e79",
          "roblox_asset_id": "rbxassetid://91595048997853",
          "canvas_size": 1024,
          "cell_size": 341,
          "slot_count": 9,
          "slots": [
            {
              "index": 1,
              "id": "bioelectric_coil",
              "label": "bioelectric coil"
            },
            {
              "index": 2,
              "id": "vine_hazard_barricade",
              "label": "vine hazard barricade"
            },
            {
              "index": 3,
              "id": "moss_supply_chest",
              "label": "moss supply chest"
            },
            {
              "index": 4,
              "id": "root_scrap_pile",
              "label": "root scrap pile"
            },
            {
              "index": 5,
              "id": "luminous_jungle_pool",
              "label": "luminous jungle pool"
            },
            {
              "index": 6,
              "id": "vine_direction_sign",
              "label": "vine direction sign"
            },
            {
              "index": 7,
              "id": "tropical_flower_mushroom_cluster",
              "label": "tropical flower mushroom cluster"
            },
            {
              "index": 8,
              "id": "bioelectric_hanging_lantern",
              "label": "bioelectric hanging lantern"
            },
            {
              "index": 9,
              "id": "seed_battery_bundle",
              "label": "seed battery bundle"
            }
          ]
        },
        {
          "id": "edge_facades",
          "label": "가장자리 마감",
          "file": "Assets/World/PanelSprites/packbound_machine_jungle_edge_facades_atlas_v1.png",
          "image_url": "./field-db-media/machine_jungle-atlas-edge_facades.png?v=bb702e860729",
          "roblox_asset_id": "rbxassetid://85749818910044",
          "canvas_size": 1024,
          "cell_size": 341,
          "slot_count": 9,
          "slots": [
            {
              "index": 1,
              "id": "canopy_root_cliff",
              "label": "canopy root cliff"
            },
            {
              "index": 2,
              "id": "vine_wall_root_cliff",
              "label": "vine wall root cliff"
            },
            {
              "index": 3,
              "id": "blocked_jungle_dead_end",
              "label": "blocked jungle dead end"
            },
            {
              "index": 4,
              "id": "root_outer_corner",
              "label": "root outer corner"
            },
            {
              "index": 5,
              "id": "root_inner_corner",
              "label": "root inner corner"
            },
            {
              "index": 6,
              "id": "turbine_runoff_cliff",
              "label": "turbine runoff cliff"
            },
            {
              "index": 7,
              "id": "boulder_root_buttress_cliff",
              "label": "boulder root buttress cliff"
            },
            {
              "index": 8,
              "id": "aerial_root_curtain_cliff",
              "label": "aerial root curtain cliff"
            },
            {
              "index": 9,
              "id": "broken_machine_bridge_cliff",
              "label": "broken machine bridge cliff"
            }
          ]
        }
      ]
    }
  ]
};
