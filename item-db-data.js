window.PACKBOUND_ITEM_DB = {
  "source": "docs/gameplay/inventory-item-art-catalog.md",
  "count": 32,
  "common": {
    "native_facing": "NativeFacing = Up",
    "rotations": [
      0,
      90,
      180,
      270
    ],
    "maximum_stack": 1
  },
  "families": [
    {
      "id": "weapon",
      "label": "무기",
      "count": 12
    },
    {
      "id": "equipment",
      "label": "장비",
      "count": 12
    },
    {
      "id": "accessory",
      "label": "액세서리",
      "count": 3
    },
    {
      "id": "special",
      "label": "특수",
      "count": 5
    }
  ],
  "items": [
    {
      "id": "weapon.antenna_recurve_bow",
      "name": "안테나 리커브 보우",
      "family": "weapon",
      "family_label": "무기",
      "type_size": "활·조금 큰 6칸",
      "concept": "라디오 안테나와 조절 노브를 활 몸체로 쓴 기계식 리커브 보우",
      "stats": [
        "AttackPower 21",
        "AttackCooldown 1.10",
        "AttackRange 24",
        "ProjectilePierceCount 1"
      ],
      "bounds": {
        "width": 2,
        "height": 3
      },
      "pattern": "■■/■■/■■",
      "occupied_cells": 6,
      "coordinates": [
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          0,
          1
        ],
        [
          1,
          1
        ],
        [
          0,
          2
        ],
        [
          1,
          2
        ]
      ],
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.0,
        "offset_y": 0.0,
        "canvas_width": 2,
        "canvas_height": 3,
        "applied_to_game": false
      },
      "image": "./item-media/Weapons/Bows/weapon_antenna_recurve_bow.png",
      "source_image": "Assets/Items/InventoryIcons/Weapons/Bows/weapon_antenna_recurve_bow.png"
    },
    {
      "id": "weapon.can_opener_smg",
      "name": "캔따개 기관단총",
      "family": "weapon",
      "family_label": "무기",
      "type_size": "총·조금 큰 5칸",
      "concept": "통조림 두 개를 탄창처럼 붙인 짧고 넓은 기관단총",
      "stats": [
        "AttackPower 7",
        "AttackCooldown 0.18",
        "AttackRange 18",
        "CriticalChance 0.04"
      ],
      "bounds": {
        "width": 3,
        "height": 3
      },
      "pattern": "□■□/■■■/□■□",
      "occupied_cells": 5,
      "coordinates": [
        [
          1,
          0
        ],
        [
          0,
          1
        ],
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          1,
          2
        ]
      ],
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.0,
        "offset_y": 0.0,
        "canvas_width": 3,
        "canvas_height": 3,
        "applied_to_game": false
      },
      "image": "./item-media/Weapons/Guns/weapon_can_opener_smg.png",
      "source_image": "Assets/Items/InventoryIcons/Weapons/Guns/weapon_can_opener_smg.png"
    },
    {
      "id": "weapon.cart_chain_greatsword",
      "name": "카트 체인 대검",
      "family": "weapon",
      "family_label": "무기",
      "type_size": "검·큰 8칸",
      "concept": "쇼핑카트 프레임, 체인 톱니, 배터리를 십자형으로 묶은 거대검",
      "stats": [
        "AttackPower 42",
        "AttackCooldown 1.55",
        "AttackRange 9",
        "KnockbackPower 8"
      ],
      "bounds": {
        "width": 3,
        "height": 4
      },
      "pattern": "□■□/■■■/■■■/□■□",
      "occupied_cells": 8,
      "coordinates": [
        [
          1,
          0
        ],
        [
          0,
          1
        ],
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          0,
          2
        ],
        [
          1,
          2
        ],
        [
          2,
          2
        ],
        [
          1,
          3
        ]
      ],
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.0,
        "offset_y": 0.0,
        "canvas_width": 3,
        "canvas_height": 4,
        "applied_to_game": false
      },
      "image": "./item-media/Weapons/Swords/weapon_cart_chain_greatsword.png",
      "source_image": "Assets/Items/InventoryIcons/Weapons/Swords/weapon_cart_chain_greatsword.png"
    },
    {
      "id": "weapon.extinguisher_mace",
      "name": "소화기 철퇴",
      "family": "weapon",
      "family_label": "무기",
      "type_size": "둔기·조금 큰 6칸",
      "concept": "소화기 통과 밸브를 타격부로 만든 묵직한 철퇴",
      "stats": [
        "AttackPower 27",
        "AttackCooldown 1.30",
        "AttackRange 6",
        "KnockbackPower 7"
      ],
      "bounds": {
        "width": 3,
        "height": 3
      },
      "pattern": "■■□/■■■/□■□",
      "occupied_cells": 6,
      "coordinates": [
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          0,
          1
        ],
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          1,
          2
        ]
      ],
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.0,
        "offset_y": 0.0,
        "canvas_width": 3,
        "canvas_height": 3,
        "applied_to_game": false
      },
      "image": "./item-media/Weapons/Blunt/weapon_extinguisher_mace.png",
      "source_image": "Assets/Items/InventoryIcons/Weapons/Blunt/weapon_extinguisher_mace.png"
    },
    {
      "id": "weapon.hanger_snap_bow",
      "name": "옷걸이 딱궁",
      "family": "weapon",
      "family_label": "무기",
      "type_size": "활·작은 4칸",
      "concept": "철제 옷걸이, 빨간 끈, 보라 빨래집게로 만든 작은 활",
      "stats": [
        "AttackPower 13",
        "AttackCooldown 0.90",
        "AttackRange 20",
        "ProjectileSpeedIncrease 0.15"
      ],
      "bounds": {
        "width": 2,
        "height": 2
      },
      "pattern": "■■/■■",
      "occupied_cells": 4,
      "coordinates": [
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          0,
          1
        ],
        [
          1,
          1
        ]
      ],
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.0,
        "offset_y": 0.0,
        "canvas_width": 2,
        "canvas_height": 2,
        "applied_to_game": false
      },
      "image": "./item-media/Weapons/Bows/weapon_hanger_snap_bow.png",
      "source_image": "Assets/Items/InventoryIcons/Weapons/Bows/weapon_hanger_snap_bow.png"
    },
    {
      "id": "weapon.jumpjack_hammer",
      "name": "점프잭 해머",
      "family": "weapon",
      "family_label": "무기",
      "type_size": "둔기·큰 8칸",
      "concept": "세 갈래 해머 헤드와 잭해머 모터를 합친 공사장 괴작",
      "stats": [
        "AttackPower 45",
        "AttackCooldown 1.70",
        "AttackRange 7",
        "KnockbackPower 12"
      ],
      "bounds": {
        "width": 3,
        "height": 4
      },
      "pattern": "■■■/■■■/□■□/□■□",
      "occupied_cells": 8,
      "coordinates": [
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          2,
          0
        ],
        [
          0,
          1
        ],
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ]
      ],
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.0,
        "offset_y": 0.0,
        "canvas_width": 3,
        "canvas_height": 4,
        "applied_to_game": false
      },
      "image": "./item-media/Weapons/Blunt/weapon_jumpjack_hammer.png",
      "source_image": "Assets/Items/InventoryIcons/Weapons/Blunt/weapon_jumpjack_hammer.png"
    },
    {
      "id": "weapon.pocket_nailgun",
      "name": "포켓 네일건",
      "family": "weapon",
      "family_label": "무기",
      "type_size": "총·작은 4칸",
      "concept": "공구 몸체와 테이프 손잡이를 줄인 주머니형 네일건",
      "stats": [
        "AttackPower 9",
        "AttackCooldown 0.55",
        "AttackRange 16",
        "ProjectileSpeedIncrease 0.10"
      ],
      "bounds": {
        "width": 2,
        "height": 2
      },
      "pattern": "■■/■■",
      "occupied_cells": 4,
      "coordinates": [
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          0,
          1
        ],
        [
          1,
          1
        ]
      ],
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.0,
        "offset_y": 0.0,
        "canvas_width": 2,
        "canvas_height": 2,
        "applied_to_game": false
      },
      "image": "./item-media/Weapons/Guns/weapon_pocket_nailgun.png",
      "source_image": "Assets/Items/InventoryIcons/Weapons/Guns/weapon_pocket_nailgun.png"
    },
    {
      "id": "weapon.satellite_dish_longbow",
      "name": "위성접시 장궁",
      "family": "weapon",
      "family_label": "무기",
      "type_size": "활·큰 8칸",
      "concept": "TV 안테나 팔과 위성접시 팁을 길게 휜 대형 장궁",
      "stats": [
        "AttackPower 32",
        "AttackCooldown 1.35",
        "AttackRange 30",
        "ProjectilePierceCount 2"
      ],
      "bounds": {
        "width": 3,
        "height": 4
      },
      "pattern": "■■□/□■■/□■■/■■□",
      "occupied_cells": 8,
      "coordinates": [
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          1,
          2
        ],
        [
          2,
          2
        ],
        [
          0,
          3
        ],
        [
          1,
          3
        ]
      ],
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.0,
        "offset_y": 0.0,
        "canvas_width": 3,
        "canvas_height": 4,
        "applied_to_game": false
      },
      "image": "./item-media/Weapons/Bows/weapon_satellite_dish_longbow.png",
      "source_image": "Assets/Items/InventoryIcons/Weapons/Bows/weapon_satellite_dish_longbow.png"
    },
    {
      "id": "weapon.tape_iron_sword",
      "name": "테이프 철검",
      "family": "weapon",
      "family_label": "무기",
      "type_size": "검·작은 3칸",
      "concept": "찌그러진 도로 표지판 조각과 테이프로 만든 짧고 넓은 철검",
      "stats": [
        "AttackPower 12",
        "AttackCooldown 0.85",
        "AttackRange 6"
      ],
      "bounds": {
        "width": 1,
        "height": 3
      },
      "pattern": "■/■/■",
      "occupied_cells": 3,
      "coordinates": [
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ]
      ],
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.0,
        "offset_y": 0.0,
        "canvas_width": 1,
        "canvas_height": 3,
        "applied_to_game": false
      },
      "image": "./item-media/Weapons/Swords/weapon_tape_iron_sword.png",
      "source_image": "Assets/Items/InventoryIcons/Weapons/Swords/weapon_tape_iron_sword.png"
    },
    {
      "id": "weapon.tin_can_mallet",
      "name": "찌그러진 캔 망치",
      "family": "weapon",
      "family_label": "무기",
      "type_size": "둔기·작은 3칸",
      "concept": "움푹 찌그러진 아이보리 캔을 머리로 쓴 짧은 망치",
      "stats": [
        "AttackPower 14",
        "AttackCooldown 1.00",
        "AttackRange 5",
        "KnockbackPower 4"
      ],
      "bounds": {
        "width": 2,
        "height": 2
      },
      "pattern": "■■/□■",
      "occupied_cells": 3,
      "coordinates": [
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ]
      ],
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.0,
        "offset_y": 0.0,
        "canvas_width": 2,
        "canvas_height": 2,
        "applied_to_game": false
      },
      "image": "./item-media/Weapons/Blunt/weapon_tin_can_mallet.png",
      "source_image": "Assets/Items/InventoryIcons/Weapons/Blunt/weapon_tin_can_mallet.png"
    },
    {
      "id": "weapon.traffic_light_cleaver",
      "name": "신호등 식칼",
      "family": "weapon",
      "family_label": "무기",
      "type_size": "검·조금 큰 6칸",
      "concept": "깨진 주황 신호등 렌즈와 갈고리 가드를 단 비대칭 대검",
      "stats": [
        "AttackPower 24",
        "AttackCooldown 1.15",
        "AttackRange 7",
        "KnockbackPower 4"
      ],
      "bounds": {
        "width": 2,
        "height": 4
      },
      "pattern": "■□/■■/■■/□■",
      "occupied_cells": 6,
      "coordinates": [
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          1,
          1
        ],
        [
          0,
          2
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ]
      ],
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.0,
        "offset_y": 0.0,
        "canvas_width": 2,
        "canvas_height": 4,
        "applied_to_game": false
      },
      "image": "./item-media/Weapons/Swords/weapon_traffic_light_cleaver.png",
      "source_image": "Assets/Items/InventoryIcons/Weapons/Swords/weapon_traffic_light_cleaver.png"
    },
    {
      "id": "weapon.washer_drum_cannon",
      "name": "세탁기 드럼포",
      "family": "weapon",
      "family_label": "무기",
      "type_size": "총·큰 7칸",
      "concept": "세탁기 드럼, 카트 바퀴, 보라 배터리를 묶은 넓은 중화기",
      "stats": [
        "AttackPower 52",
        "AttackCooldown 2.20",
        "AttackRange 25",
        "ProjectileSizeIncrease 0.35",
        "KnockbackPower 10"
      ],
      "bounds": {
        "width": 4,
        "height": 3
      },
      "pattern": "□■□□/□■■□/■■■■",
      "occupied_cells": 7,
      "coordinates": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          0,
          2
        ],
        [
          1,
          2
        ],
        [
          2,
          2
        ],
        [
          3,
          2
        ]
      ],
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.0,
        "offset_y": 0.0,
        "canvas_width": 4,
        "canvas_height": 3,
        "applied_to_game": false
      },
      "image": "./item-media/Weapons/Guns/weapon_washer_drum_cannon.png",
      "source_image": "Assets/Items/InventoryIcons/Weapons/Guns/weapon_washer_drum_cannon.png"
    },
    {
      "id": "armor.bus_stop_shield",
      "name": "버스정류장 방패",
      "family": "equipment",
      "family_label": "장비",
      "type_size": "방패·조금 큰 6칸",
      "concept": "버스 표지판과 반사판을 아래로 좁아지게 겹친 중형 방패",
      "stats": [
        "Defense 11",
        "MaxHealth 10"
      ],
      "bounds": {
        "width": 2,
        "height": 3
      },
      "pattern": "■■/■■/■■",
      "occupied_cells": 6,
      "coordinates": [
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          0,
          1
        ],
        [
          1,
          1
        ],
        [
          0,
          2
        ],
        [
          1,
          2
        ]
      ],
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.0,
        "offset_y": 0.0,
        "canvas_width": 2,
        "canvas_height": 3,
        "applied_to_game": false
      },
      "image": "./item-media/Equipment/Shields/armor_bus_stop_shield.png",
      "source_image": "Assets/Items/InventoryIcons/Equipment/Shields/armor_bus_stop_shield.png"
    },
    {
      "id": "armor.courier_cape_jacket",
      "name": "배달부 반망토 재킷",
      "family": "equipment",
      "family_label": "장비",
      "type_size": "의상·조금 큰 6칸",
      "concept": "한쪽만 짧은 망토와 소포 버클이 달린 세로형 민소매 재킷",
      "stats": [
        "Defense 7",
        "MoveSpeedIncrease 0.05"
      ],
      "bounds": {
        "width": 2,
        "height": 3
      },
      "pattern": "■■/■■/■■",
      "occupied_cells": 6,
      "coordinates": [
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          0,
          1
        ],
        [
          1,
          1
        ],
        [
          0,
          2
        ],
        [
          1,
          2
        ]
      ],
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.0,
        "offset_y": 0.0,
        "canvas_width": 2,
        "canvas_height": 3,
        "applied_to_game": false
      },
      "image": "./item-media/Equipment/Outfits/armor_courier_cape_jacket.png",
      "source_image": "Assets/Items/InventoryIcons/Equipment/Outfits/armor_courier_cape_jacket.png"
    },
    {
      "id": "armor.dish_lid_shield",
      "name": "접시뚜껑 방패",
      "family": "equipment",
      "family_label": "장비",
      "type_size": "방패·작은 4칸",
      "concept": "에나멜 접시뚜껑에 손잡이와 수선 테이프를 단 작은 방패",
      "stats": [
        "Defense 6"
      ],
      "bounds": {
        "width": 2,
        "height": 2
      },
      "pattern": "■■/■■",
      "occupied_cells": 4,
      "coordinates": [
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          0,
          1
        ],
        [
          1,
          1
        ]
      ],
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.0,
        "offset_y": 0.0,
        "canvas_width": 2,
        "canvas_height": 2,
        "applied_to_game": false
      },
      "image": "./item-media/Equipment/Shields/armor_dish_lid_shield.png",
      "source_image": "Assets/Items/InventoryIcons/Equipment/Shields/armor_dish_lid_shield.png"
    },
    {
      "id": "armor.fridge_door_poncho",
      "name": "냉장고 문 판초",
      "family": "equipment",
      "family_label": "장비",
      "type_size": "의상·큰 8칸",
      "concept": "냉장고 문 두 짝을 어깨에 단 넓은 방한 판초",
      "stats": [
        "Defense 13",
        "MaxHealth 30",
        "DefenseIncrease 0.05"
      ],
      "bounds": {
        "width": 4,
        "height": 2
      },
      "pattern": "■■■■/■■■■",
      "occupied_cells": 8,
      "coordinates": [
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          2,
          0
        ],
        [
          3,
          0
        ],
        [
          0,
          1
        ],
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          3,
          1
        ]
      ],
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.0,
        "offset_y": 0.0,
        "canvas_width": 4,
        "canvas_height": 2,
        "applied_to_game": false
      },
      "image": "./item-media/Equipment/Outfits/armor_fridge_door_poncho.png",
      "source_image": "Assets/Items/InventoryIcons/Equipment/Outfits/armor_fridge_door_poncho.png"
    },
    {
      "id": "armor.halfpot_helmet",
      "name": "반쪽 냄비 투구",
      "family": "equipment",
      "family_label": "장비",
      "type_size": "헬멧·작은 4칸",
      "concept": "프라이팬 손잡이와 비대칭 볼가리개가 남은 냄비 투구",
      "stats": [
        "Defense 4",
        "MaxHealth 5"
      ],
      "bounds": {
        "width": 2,
        "height": 2
      },
      "pattern": "■■/■■",
      "occupied_cells": 4,
      "coordinates": [
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          0,
          1
        ],
        [
          1,
          1
        ]
      ],
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.0,
        "offset_y": 0.0,
        "canvas_width": 2,
        "canvas_height": 2,
        "applied_to_game": false
      },
      "image": "./item-media/Equipment/Helmets/armor_halfpot_helmet.png",
      "source_image": "Assets/Items/InventoryIcons/Equipment/Helmets/armor_halfpot_helmet.png"
    },
    {
      "id": "armor.impact_hightops",
      "name": "충격패드 하이탑",
      "family": "equipment",
      "family_label": "장비",
      "type_size": "신발·조금 큰 6칸",
      "concept": "발목 패드 하이탑 두 짝을 앞뒤로 겹쳐 배치한 단일 아이템 묶음",
      "stats": [
        "MoveSpeedIncrease 0.07",
        "DodgeChance 0.03",
        "Defense 2"
      ],
      "bounds": {
        "width": 3,
        "height": 2
      },
      "pattern": "■■■/■■■",
      "occupied_cells": 6,
      "coordinates": [
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          2,
          0
        ],
        [
          0,
          1
        ],
        [
          1,
          1
        ],
        [
          2,
          1
        ]
      ],
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.0,
        "offset_y": 0.0,
        "canvas_width": 3,
        "canvas_height": 2,
        "applied_to_game": false
      },
      "image": "./item-media/Equipment/Shoes/armor_impact_hightops.png",
      "source_image": "Assets/Items/InventoryIcons/Equipment/Shoes/armor_impact_hightops.png"
    },
    {
      "id": "armor.mismatch_sneakers",
      "name": "짝짝이 스니커즈",
      "family": "equipment",
      "family_label": "장비",
      "type_size": "신발·작은 2칸",
      "concept": "코럴 로우탑을 보라 로우탑 앞에 겹쳐 하나의 묶음으로 보이게 한 세트",
      "stats": [
        "MoveSpeedIncrease 0.04",
        "DodgeChance 0.02"
      ],
      "bounds": {
        "width": 2,
        "height": 1
      },
      "pattern": "■■",
      "occupied_cells": 2,
      "coordinates": [
        [
          0,
          0
        ],
        [
          1,
          0
        ]
      ],
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.0,
        "offset_y": 0.0,
        "canvas_width": 2,
        "canvas_height": 1,
        "applied_to_game": false
      },
      "image": "./item-media/Equipment/Shoes/armor_mismatch_sneakers.png",
      "source_image": "Assets/Items/InventoryIcons/Equipment/Shoes/armor_mismatch_sneakers.png"
    },
    {
      "id": "armor.plastic_bag_vest",
      "name": "비닐봉지 조끼",
      "family": "equipment",
      "family_label": "장비",
      "type_size": "의상·작은 4칸",
      "concept": "쇼핑백을 누비고 고무오리 패치를 단 주머니 조끼",
      "stats": [
        "Defense 5",
        "MaxHealth 8"
      ],
      "bounds": {
        "width": 2,
        "height": 2
      },
      "pattern": "■■/■■",
      "occupied_cells": 4,
      "coordinates": [
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          0,
          1
        ],
        [
          1,
          1
        ]
      ],
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.0,
        "offset_y": 0.0,
        "canvas_width": 2,
        "canvas_height": 2,
        "applied_to_game": false
      },
      "image": "./item-media/Equipment/Outfits/armor_plastic_bag_vest.png",
      "source_image": "Assets/Items/InventoryIcons/Equipment/Outfits/armor_plastic_bag_vest.png"
    },
    {
      "id": "armor.riot_kettle_helmet",
      "name": "폭동 냄비 투구",
      "family": "equipment",
      "family_label": "장비",
      "type_size": "헬멧·큰 8칸",
      "concept": "솥뚜껑, 경광등, 두꺼운 양옆 볼가리개를 붙인 중장 투구",
      "stats": [
        "Defense 14",
        "MaxHealth 25"
      ],
      "bounds": {
        "width": 3,
        "height": 3
      },
      "pattern": "■■■/■■■/■□■",
      "occupied_cells": 8,
      "coordinates": [
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          2,
          0
        ],
        [
          0,
          1
        ],
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          0,
          2
        ],
        [
          2,
          2
        ]
      ],
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.0,
        "offset_y": 0.0,
        "canvas_width": 3,
        "canvas_height": 3,
        "applied_to_game": false
      },
      "image": "./item-media/Equipment/Helmets/armor_riot_kettle_helmet.png",
      "source_image": "Assets/Items/InventoryIcons/Equipment/Helmets/armor_riot_kettle_helmet.png"
    },
    {
      "id": "armor.stormproof_boots",
      "name": "폭풍대비 중장 부츠",
      "family": "equipment",
      "family_label": "장비",
      "type_size": "신발·큰 8칸",
      "concept": "정강이 장갑 부츠 두 짝을 좌우 앞뒤로 겹쳐 만든 묵직한 단일 아이템 실루엣",
      "stats": [
        "MoveSpeedIncrease 0.06",
        "DodgeChance 0.03",
        "Defense 8"
      ],
      "bounds": {
        "width": 4,
        "height": 2
      },
      "pattern": "■■■■/■■■■",
      "occupied_cells": 8,
      "coordinates": [
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          2,
          0
        ],
        [
          3,
          0
        ],
        [
          0,
          1
        ],
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          3,
          1
        ]
      ],
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.0,
        "offset_y": 0.0,
        "canvas_width": 4,
        "canvas_height": 2,
        "applied_to_game": false
      },
      "image": "./item-media/Equipment/Shoes/armor_stormproof_boots.png",
      "source_image": "Assets/Items/InventoryIcons/Equipment/Shoes/armor_stormproof_boots.png"
    },
    {
      "id": "armor.vending_visor_helmet",
      "name": "자판기 바이저",
      "family": "equipment",
      "family_label": "장비",
      "type_size": "헬멧·조금 큰 6칸",
      "concept": "자판기 패널과 주황 동전 반환구를 바이저로 쓴 넓은 헬멧",
      "stats": [
        "Defense 8",
        "MaxHealth 10",
        "CriticalChance 0.03"
      ],
      "bounds": {
        "width": 3,
        "height": 2
      },
      "pattern": "■■■/■■■",
      "occupied_cells": 6,
      "coordinates": [
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          2,
          0
        ],
        [
          0,
          1
        ],
        [
          1,
          1
        ],
        [
          2,
          1
        ]
      ],
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.0,
        "offset_y": 0.0,
        "canvas_width": 3,
        "canvas_height": 2,
        "applied_to_game": false
      },
      "image": "./item-media/Equipment/Helmets/armor_vending_visor_helmet.png",
      "source_image": "Assets/Items/InventoryIcons/Equipment/Helmets/armor_vending_visor_helmet.png"
    },
    {
      "id": "armor.washer_door_tower_shield",
      "name": "세탁기 도어 타워실드",
      "family": "equipment",
      "family_label": "장비",
      "type_size": "방패·큰 8칸",
      "concept": "세탁기 원형 문과 아이보리 장갑판을 세로로 늘인 대형 방패",
      "stats": [
        "Defense 18",
        "MaxHealth 30",
        "DefenseIncrease 0.08"
      ],
      "bounds": {
        "width": 3,
        "height": 4
      },
      "pattern": "■■■/■■■/□■□/□■□",
      "occupied_cells": 8,
      "coordinates": [
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          2,
          0
        ],
        [
          0,
          1
        ],
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ]
      ],
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.0,
        "offset_y": 0.0,
        "canvas_width": 3,
        "canvas_height": 4,
        "applied_to_game": false
      },
      "image": "./item-media/Equipment/Shields/armor_washer_door_tower_shield.png",
      "source_image": "Assets/Items/InventoryIcons/Equipment/Shields/armor_washer_door_tower_shield.png"
    },
    {
      "id": "accessory.bolt_ring",
      "name": "번개 볼트 반지",
      "family": "accessory",
      "family_label": "액세서리",
      "type_size": "반지·아주 작은 1칸",
      "concept": "육각 보라 보석 안에 번개 홈이 파인 굵은 금속 반지",
      "stats": [
        "CriticalChance 0.06"
      ],
      "bounds": {
        "width": 1,
        "height": 1
      },
      "pattern": "■",
      "occupied_cells": 1,
      "coordinates": [
        [
          0,
          0
        ]
      ],
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.0,
        "offset_y": 0.0,
        "canvas_width": 1,
        "canvas_height": 1,
        "applied_to_game": false
      },
      "image": "./item-media/Accessories/accessory_bolt_ring.png",
      "source_image": "Assets/Items/InventoryIcons/Accessories/accessory_bolt_ring.png"
    },
    {
      "id": "accessory.duck_whistle_necklace",
      "name": "오리 호루라기 목걸이",
      "family": "accessory",
      "family_label": "액세서리",
      "type_size": "목걸이·아주 작은 2칸",
      "concept": "코럴 끈 끝에 오리 모양 호루라기가 달린 세로형 목걸이",
      "stats": [
        "AttackRangeIncrease 0.08"
      ],
      "bounds": {
        "width": 1,
        "height": 2
      },
      "pattern": "■/■",
      "occupied_cells": 2,
      "coordinates": [
        [
          0,
          0
        ],
        [
          0,
          1
        ]
      ],
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.0,
        "offset_y": 0.0,
        "canvas_width": 1,
        "canvas_height": 2,
        "applied_to_game": false
      },
      "image": "./item-media/Accessories/accessory_duck_whistle_necklace.png",
      "source_image": "Assets/Items/InventoryIcons/Accessories/accessory_duck_whistle_necklace.png"
    },
    {
      "id": "accessory.powerstrip_belt",
      "name": "멀티탭 벨트",
      "family": "accessory",
      "family_label": "액세서리",
      "type_size": "벨트·작은 4칸",
      "concept": "콘센트 장식과 큰 전원 스위치 버클이 달린 긴 공구 벨트",
      "stats": [
        "CooldownReduction 0.05",
        "MaxHealth 10"
      ],
      "bounds": {
        "width": 4,
        "height": 1
      },
      "pattern": "■■■■",
      "occupied_cells": 4,
      "coordinates": [
        [
          0,
          0
        ],
        [
          1,
          0
        ],
        [
          2,
          0
        ],
        [
          3,
          0
        ]
      ],
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.0,
        "offset_y": 0.0,
        "canvas_width": 4,
        "canvas_height": 1,
        "applied_to_game": false
      },
      "image": "./item-media/Accessories/accessory_powerstrip_belt.png",
      "source_image": "Assets/Items/InventoryIcons/Accessories/accessory_powerstrip_belt.png"
    },
    {
      "id": "special.conehead_totem",
      "name": "콘헤드 토템",
      "family": "special",
      "family_label": "특수",
      "type_size": "토템·작은 4칸",
      "concept": "X 눈의 나무 얼굴, 교통 콘 모자, 세 갈래 금속 받침을 가진 토템",
      "stats": [
        "DefenseIncrease 0.08",
        "MaxHealthIncrease 0.08"
      ],
      "bounds": {
        "width": 3,
        "height": 2
      },
      "pattern": "□■□/■■■",
      "occupied_cells": 4,
      "coordinates": [
        [
          1,
          0
        ],
        [
          0,
          1
        ],
        [
          1,
          1
        ],
        [
          2,
          1
        ]
      ],
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.0,
        "offset_y": 0.0,
        "canvas_width": 3,
        "canvas_height": 2,
        "applied_to_game": false
      },
      "image": "./item-media/Special/special_conehead_totem.png",
      "source_image": "Assets/Items/InventoryIcons/Special/special_conehead_totem.png"
    },
    {
      "id": "special.cursed_block_doll",
      "name": "저주받은 블록 인형",
      "family": "special",
      "family_label": "특수",
      "type_size": "저주 인형·조금 큰 7칸",
      "concept": "원통 머리와 직육면체 팔다리를 꿰맨 완전 오리지널 블록형 장난감 인형",
      "stats": [
        "CriticalDamageMultiplier 0.25",
        "LifeSteal 0.03"
      ],
      "bounds": {
        "width": 3,
        "height": 3
      },
      "pattern": "□■□/■■■/■■■",
      "occupied_cells": 7,
      "coordinates": [
        [
          1,
          0
        ],
        [
          0,
          1
        ],
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          0,
          2
        ],
        [
          1,
          2
        ],
        [
          2,
          2
        ]
      ],
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.0,
        "offset_y": 0.0,
        "canvas_width": 3,
        "canvas_height": 3,
        "applied_to_game": false
      },
      "image": "./item-media/Special/special_cursed_block_doll.png",
      "source_image": "Assets/Items/InventoryIcons/Special/special_cursed_block_doll.png"
    },
    {
      "id": "special.emergency_rubber_duck",
      "name": "비상용 고무오리",
      "family": "special",
      "family_label": "특수",
      "type_size": "특수·아주 작은 1칸",
      "concept": "보라 단추 눈, 반창고, 당김 고리를 단 한 칸짜리 오리",
      "stats": [
        "DodgeChance 0.04",
        "MaxHealth 5"
      ],
      "bounds": {
        "width": 1,
        "height": 1
      },
      "pattern": "■",
      "occupied_cells": 1,
      "coordinates": [
        [
          0,
          0
        ]
      ],
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.0,
        "offset_y": 0.0,
        "canvas_width": 1,
        "canvas_height": 1,
        "applied_to_game": false
      },
      "image": "./item-media/Special/special_emergency_rubber_duck.png",
      "source_image": "Assets/Items/InventoryIcons/Special/special_emergency_rubber_duck.png"
    },
    {
      "id": "special.lucky_duck_card",
      "name": "행운의 오리 카드",
      "family": "special",
      "family_label": "특수",
      "type_size": "트럼프 카드·아주 작은 2칸",
      "concept": "숫자와 문양 대신 고무오리 표식만 있는 수선된 카드",
      "stats": [
        "CriticalChance 0.08",
        "DodgeChance 0.03"
      ],
      "bounds": {
        "width": 1,
        "height": 2
      },
      "pattern": "■/■",
      "occupied_cells": 2,
      "coordinates": [
        [
          0,
          0
        ],
        [
          0,
          1
        ]
      ],
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.0,
        "offset_y": 0.0,
        "canvas_width": 1,
        "canvas_height": 2,
        "applied_to_game": false
      },
      "image": "./item-media/Special/special_lucky_duck_card.png",
      "source_image": "Assets/Items/InventoryIcons/Special/special_lucky_duck_card.png"
    },
    {
      "id": "special.thunder_amp_guitar",
      "name": "썬더 앰프 기타",
      "family": "special",
      "family_label": "특수",
      "type_size": "일렉 기타·조금 큰 8칸",
      "concept": "기타 몸통에 스피커와 케이블을 통째로 박은 보라색 일렉 기타",
      "stats": [
        "AttackPowerIncrease 0.12",
        "CooldownReduction 0.06"
      ],
      "bounds": {
        "width": 3,
        "height": 4
      },
      "pattern": "□■□/□■□/■■■/■■■",
      "occupied_cells": 8,
      "coordinates": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          0,
          2
        ],
        [
          1,
          2
        ],
        [
          2,
          2
        ],
        [
          0,
          3
        ],
        [
          1,
          3
        ],
        [
          2,
          3
        ]
      ],
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.0,
        "offset_y": 0.0,
        "canvas_width": 3,
        "canvas_height": 4,
        "applied_to_game": false
      },
      "image": "./item-media/Special/special_thunder_amp_guitar.png",
      "source_image": "Assets/Items/InventoryIcons/Special/special_thunder_amp_guitar.png"
    }
  ]
};
