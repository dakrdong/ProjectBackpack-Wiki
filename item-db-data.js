window.PACKBOUND_ITEM_DB = {
  "version": 5,
  "source": "docs/gameplay/alpha-item-definitions.json",
  "layout_source": "docs/gameplay/inventory-item-layouts.json",
  "common": {
    "grid_topology": "SquareOrthogonal",
    "native_facing": "무기별 ↑ 또는 →",
    "rotations": [
      0,
      90,
      180,
      270
    ],
    "flip_allowed": false,
    "maximum_stack": 999
  },
  "families": [
    {
      "id": "weapon",
      "label": "무기",
      "count": 14,
      "active_count": 14
    },
    {
      "id": "armor",
      "label": "방어구",
      "count": 20,
      "active_count": 20
    },
    {
      "id": "accessory",
      "label": "장신구",
      "count": 14,
      "active_count": 14
    }
  ],
  "count": 48,
  "active_count": 48,
  "items": [
    {
      "id": "weapon.berserker_axe",
      "name": "광전사 도끼",
      "family": "weapon",
      "family_label": "무기",
      "category": "Weapon",
      "slot": "Weapon",
      "form": "Axe",
      "role": "저체력 폭주·처형",
      "weight_kg": 6.2,
      "type_size": "Weapon · Axe · 7칸 · 6.2Kg",
      "concept": "깨진 이중 날과 폭주 톱니가 사용자의 체력이 낮을수록 거칠게 맞물리는 중도끼",
      "art_direction": "upright jagged double-bladed berserker axe; handle butt at bottom and axe head exactly up; exposed gears; no blood splash or baked swing trail",
      "enabled": true,
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
        ]
      ],
      "occupied_cells": 7,
      "bounds": {
        "width": 3,
        "height": 3
      },
      "pattern": "■■■/■■■/□■□",
      "source_image": "Assets/Items/InventoryIcons/Weapons/weapon_berserker_axe.png",
      "media_path": "./item-media/weapon/weapon_berserker_axe.png",
      "image": "./item-media/weapon/weapon_berserker_axe.png?v=4b8ae80951eec50d",
      "image_url": "./item-media/weapon/weapon_berserker_axe.png?v=4b8ae80951eec50d",
      "icon_asset": "rbxassetid://70937226323199",
      "image_layout": {
        "scale": 0.9,
        "offset_x": 0.0575,
        "offset_y": 0.0663,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": {
        "native_facing": "Up",
        "attack_motion": "Sweep",
        "pivot": "Grip",
        "sockets": [
          "ImpactRoot",
          "Tip"
        ],
        "pivot_uv": [
          0.5,
          0.88
        ],
        "socket_uv": {
          "ImpactRoot": [
            0.5,
            0.28
          ],
          "Tip": [
            0.82,
            0.31
          ]
        }
      },
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "weapon.gale_recurve_bow",
      "name": "질풍 곡궁",
      "family": "weapon",
      "family_label": "무기",
      "category": "Weapon",
      "slot": "Weapon",
      "form": "RecurveBow",
      "role": "고속 연사",
      "weight_kg": 2.0,
      "type_size": "Weapon · RecurveBow · 3칸 · 2.0Kg",
      "concept": "바람 깃과 얇은 녹청색 활대가 사격 반동을 흘려 빠른 연사를 가능하게 하는 경량 곡궁",
      "art_direction": "light recurve bow rotated into a horizontal ready pose; arrow and firing direction exactly right; wind-feather limbs, slim and agile; no loose arrow or trail",
      "enabled": true,
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
      "occupied_cells": 3,
      "bounds": {
        "width": 1,
        "height": 3
      },
      "pattern": "■/■/■",
      "source_image": "Assets/Items/InventoryIcons/Weapons/weapon_gale_recurve_bow.png",
      "media_path": "./item-media/weapon/weapon_gale_recurve_bow.png",
      "image": "./item-media/weapon/weapon_gale_recurve_bow.png?v=cf7b1702a7891877",
      "image_url": "./item-media/weapon/weapon_gale_recurve_bow.png?v=cf7b1702a7891877",
      "icon_asset": "rbxassetid://122469187458571",
      "image_layout": {
        "scale": 0.95,
        "offset_x": 0.1175,
        "offset_y": 0.0598,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": {
        "native_facing": "Right",
        "attack_motion": "RangedAim",
        "pivot": "Grip",
        "sockets": [
          "Nock",
          "ProjectileOrigin",
          "LimbTop",
          "LimbBottom"
        ],
        "pivot_uv": [
          0.58,
          0.5
        ],
        "socket_uv": {
          "Nock": [
            0.4,
            0.5
          ],
          "ProjectileOrigin": [
            0.6,
            0.5
          ],
          "LimbTop": [
            0.4,
            0.04
          ],
          "LimbBottom": [
            0.4,
            0.95
          ]
        }
      },
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "weapon.guardian_counter_sword",
      "name": "반격의 수호검",
      "family": "weapon",
      "family_label": "무기",
      "category": "Weapon",
      "slot": "Weapon",
      "form": "Sword",
      "role": "방어·반격",
      "weight_kg": 5.4,
      "type_size": "Weapon · Sword · 3칸 · 5.4Kg",
      "concept": "넓은 청동 가드와 접이식 방호판이 공격을 받아낸 뒤 축적한 충격을 칼날로 되돌리는 중검",
      "art_direction": "upright broad defensive sword; pommel at bottom and blade tip exactly up; oversized guard and two offset armor plates; no baked swing trail",
      "enabled": true,
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
      "occupied_cells": 3,
      "bounds": {
        "width": 1,
        "height": 3
      },
      "pattern": "■/■/■",
      "source_image": "Assets/Items/InventoryIcons/Weapons/weapon_guardian_counter_sword.png",
      "media_path": "./item-media/weapon/weapon_guardian_counter_sword.png",
      "image": "./item-media/weapon/weapon_guardian_counter_sword.png?v=457ee7f96e162ee3",
      "image_url": "./item-media/weapon/weapon_guardian_counter_sword.png?v=457ee7f96e162ee3",
      "icon_asset": "rbxassetid://72174110081989",
      "image_layout": {
        "scale": 0.95,
        "offset_x": 0.0886,
        "offset_y": 0.0583,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": {
        "native_facing": "Up",
        "attack_motion": "Sweep",
        "pivot": "Grip",
        "sockets": [
          "Tip",
          "ImpactRoot"
        ],
        "pivot_uv": [
          0.5,
          0.9
        ],
        "socket_uv": {
          "Tip": [
            0.5,
            0.05
          ],
          "ImpactRoot": [
            0.5,
            0.32
          ]
        }
      },
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "weapon.guardian_mace",
      "name": "수호자 메이스",
      "family": "weapon",
      "family_label": "무기",
      "category": "Weapon",
      "slot": "Weapon",
      "form": "Mace",
      "role": "보호막·밀쳐내기",
      "weight_kg": 6.8,
      "type_size": "Weapon · Mace · 3칸 · 6.8Kg",
      "concept": "청색 보호막 발생기와 넓은 반구형 타격부로 적을 밀어내며 방호 파동을 만드는 메이스",
      "art_direction": "upright guardian mace; handle butt at bottom and broad dome striking head exactly up; blue shield generator; no baked impact or swing trail",
      "enabled": true,
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
      "occupied_cells": 3,
      "bounds": {
        "width": 1,
        "height": 3
      },
      "pattern": "■/■/■",
      "source_image": "Assets/Items/InventoryIcons/Weapons/weapon_guardian_mace.png",
      "media_path": "./item-media/weapon/weapon_guardian_mace.png",
      "image": "./item-media/weapon/weapon_guardian_mace.png?v=16ff05aeb99d2cbf",
      "image_url": "./item-media/weapon/weapon_guardian_mace.png?v=16ff05aeb99d2cbf",
      "icon_asset": "rbxassetid://125551069245821",
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.1094,
        "offset_y": 0.0263,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": {
        "native_facing": "Up",
        "attack_motion": "Sweep",
        "pivot": "Grip",
        "sockets": [
          "ImpactRoot",
          "Tip"
        ],
        "pivot_uv": [
          0.5,
          0.88
        ],
        "socket_uv": {
          "ImpactRoot": [
            0.5,
            0.2
          ],
          "Tip": [
            0.5,
            0.06
          ]
        }
      },
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "weapon.hunter_recurve_bow",
      "name": "추적자의 곡궁",
      "family": "weapon",
      "family_label": "무기",
      "category": "Weapon",
      "slot": "Weapon",
      "form": "RecurveBow",
      "role": "고속 표적 추적",
      "weight_kg": 2.4,
      "type_size": "Weapon · RecurveBow · 2칸 · 2.4Kg",
      "concept": "자주색 추적 수정과 가동식 조준 날개가 빠른 적의 이동을 읽어 화살을 유도하는 곡궁",
      "art_direction": "recurve bow in a horizontal ready pose; arrow and firing direction exactly right; purple tracking crystal and articulated sight fins; no loose arrow or trail",
      "enabled": true,
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
      "occupied_cells": 2,
      "bounds": {
        "width": 1,
        "height": 2
      },
      "pattern": "■/■",
      "source_image": "Assets/Items/InventoryIcons/Weapons/weapon_hunter_recurve_bow.png",
      "media_path": "./item-media/weapon/weapon_hunter_recurve_bow.png",
      "image": "./item-media/weapon/weapon_hunter_recurve_bow.png?v=1cb7bd905ae3cdbf",
      "image_url": "./item-media/weapon/weapon_hunter_recurve_bow.png?v=1cb7bd905ae3cdbf",
      "icon_asset": "rbxassetid://85298522011569",
      "image_layout": {
        "scale": 0.95,
        "offset_x": 0.0955,
        "offset_y": 0.1079,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": {
        "native_facing": "Right",
        "attack_motion": "RangedAim",
        "pivot": "Grip",
        "sockets": [
          "Nock",
          "ProjectileOrigin",
          "LimbTop",
          "LimbBottom"
        ],
        "pivot_uv": [
          0.6,
          0.5
        ],
        "socket_uv": {
          "Nock": [
            0.28,
            0.5
          ],
          "ProjectileOrigin": [
            0.62,
            0.5
          ],
          "LimbTop": [
            0.28,
            0.05
          ],
          "LimbBottom": [
            0.28,
            0.95
          ]
        }
      },
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "weapon.overheat_repeater",
      "name": "과열식 연발총",
      "family": "weapon",
      "family_label": "무기",
      "category": "Weapon",
      "slot": "Weapon",
      "form": "Gun",
      "role": "지속 연사·과열",
      "weight_kg": 5.8,
      "type_size": "Weapon · Gun · 3칸 · 5.8Kg",
      "concept": "세 개의 회전 총열과 주황 냉각 코일이 과열 한계까지 지속 사격하는 폐철 연발총",
      "art_direction": "long rotary repeater gun in strict side view; grip/stock at left and all three muzzle tips exactly right; orange heat coils; no projectile, muzzle flash, smoke, or trail",
      "enabled": true,
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
        ]
      ],
      "occupied_cells": 3,
      "bounds": {
        "width": 3,
        "height": 1
      },
      "pattern": "■■■",
      "source_image": "Assets/Items/InventoryIcons/Weapons/weapon_overheat_repeater.png",
      "media_path": "./item-media/weapon/weapon_overheat_repeater.png",
      "image": "./item-media/weapon/weapon_overheat_repeater.png?v=8adf0b450bd78eb7",
      "image_url": "./item-media/weapon/weapon_overheat_repeater.png?v=8adf0b450bd78eb7",
      "icon_asset": "rbxassetid://105271217565647",
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.0504,
        "offset_y": 0.103,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": {
        "native_facing": "Right",
        "attack_motion": "RangedAim",
        "pivot": "Grip",
        "sockets": [
          "Muzzle"
        ],
        "pivot_uv": [
          0.33,
          0.58
        ],
        "socket_uv": {
          "Muzzle": [
            0.96,
            0.5
          ]
        }
      },
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "weapon.quake_mace",
      "name": "지진 메이스",
      "family": "weapon",
      "family_label": "무기",
      "category": "Weapon",
      "slot": "Weapon",
      "form": "Mace",
      "role": "광역 충격·기절",
      "weight_kg": 7.6,
      "type_size": "Weapon · Mace · 3칸 · 7.6Kg",
      "concept": "암석 충격핵을 중심으로 세 개의 강철 타격판이 지면에 충격파를 흘려보내는 대형 메이스",
      "art_direction": "upright heavy three-flanged quake mace; handle butt at bottom and striking head exactly up; rock core; no baked impact or swing trail",
      "enabled": true,
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
      "occupied_cells": 3,
      "bounds": {
        "width": 1,
        "height": 3
      },
      "pattern": "■/■/■",
      "source_image": "Assets/Items/InventoryIcons/Weapons/weapon_quake_mace.png",
      "media_path": "./item-media/weapon/weapon_quake_mace.png",
      "image": "./item-media/weapon/weapon_quake_mace.png?v=4a0676f67a82c4e2",
      "image_url": "./item-media/weapon/weapon_quake_mace.png?v=4a0676f67a82c4e2",
      "icon_asset": "rbxassetid://74705748041458",
      "image_layout": {
        "scale": 0.9,
        "offset_x": 0.1088,
        "offset_y": 0.0356,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": {
        "native_facing": "Up",
        "attack_motion": "Sweep",
        "pivot": "Grip",
        "sockets": [
          "ImpactRoot",
          "Tip"
        ],
        "pivot_uv": [
          0.5,
          0.88
        ],
        "socket_uv": {
          "ImpactRoot": [
            0.5,
            0.2
          ],
          "Tip": [
            0.5,
            0.05
          ]
        }
      },
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "weapon.rapid_gear_sword",
      "name": "연격의 톱니검",
      "family": "weapon",
      "family_label": "무기",
      "category": "Weapon",
      "slot": "Weapon",
      "form": "Sword",
      "role": "빠른 연속 공격",
      "weight_kg": 4.2,
      "type_size": "Weapon · Sword · 2칸 · 4.2Kg",
      "concept": "붉게 달아오른 톱니 동력핵과 짧은 분할 칼날이 맞물려 연속 공격마다 회전수가 오르는 기계식 검",
      "art_direction": "upright gear-driven sword; pommel at bottom and blade tip exactly up; narrow blade with one central side gear; no baked swing trail",
      "enabled": true,
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
      "occupied_cells": 2,
      "bounds": {
        "width": 1,
        "height": 2
      },
      "pattern": "■/■",
      "source_image": "Assets/Items/InventoryIcons/Weapons/weapon_rapid_gear_sword.png",
      "media_path": "./item-media/weapon/weapon_rapid_gear_sword.png",
      "image": "./item-media/weapon/weapon_rapid_gear_sword.png?v=bd7324290bac2af5",
      "image_url": "./item-media/weapon/weapon_rapid_gear_sword.png?v=bd7324290bac2af5",
      "icon_asset": "rbxassetid://78848126090015",
      "image_layout": {
        "scale": 0.975,
        "offset_x": 0.1031,
        "offset_y": 0.0723,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": {
        "native_facing": "Up",
        "attack_motion": "Sweep",
        "pivot": "Grip",
        "sockets": [
          "Tip",
          "ImpactRoot"
        ],
        "pivot_uv": [
          0.5,
          0.9
        ],
        "socket_uv": {
          "Tip": [
            0.5,
            0.05
          ],
          "ImpactRoot": [
            0.5,
            0.35
          ]
        }
      },
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "weapon.ricochet_pistol",
      "name": "도탄 권총",
      "family": "weapon",
      "family_label": "무기",
      "category": "Weapon",
      "slot": "Weapon",
      "form": "Gun",
      "role": "다중 도탄",
      "weight_kg": 2.8,
      "type_size": "Weapon · Gun · 3칸 · 2.8Kg",
      "concept": "각진 반사판 총열과 계산 수정이 탄환의 다음 도탄 각도를 즉시 보정하는 소형 권총",
      "art_direction": "compact angular pistol in strict side view; grip at lower-left and muzzle tip exactly right; mirror-like barrel plates and cyan calculator crystal; no projectile, flash, smoke, or trail",
      "enabled": true,
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
        ]
      ],
      "occupied_cells": 3,
      "bounds": {
        "width": 2,
        "height": 2
      },
      "pattern": "■■/■□",
      "source_image": "Assets/Items/InventoryIcons/Weapons/weapon_ricochet_pistol.png",
      "media_path": "./item-media/weapon/weapon_ricochet_pistol.png",
      "image": "./item-media/weapon/weapon_ricochet_pistol.png?v=b964130c367157da",
      "image_url": "./item-media/weapon/weapon_ricochet_pistol.png?v=b964130c367157da",
      "icon_asset": "rbxassetid://75958630740988",
      "image_layout": {
        "scale": 0.9,
        "offset_x": 0.0918,
        "offset_y": 0.0086,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": {
        "native_facing": "Right",
        "attack_motion": "RangedAim",
        "pivot": "Grip",
        "sockets": [
          "Muzzle"
        ],
        "pivot_uv": [
          0.28,
          0.48
        ],
        "socket_uv": {
          "Muzzle": [
            0.96,
            0.28
          ]
        }
      },
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "weapon.scatter_crossbow",
      "name": "산탄 석궁",
      "family": "weapon",
      "family_label": "무기",
      "category": "Weapon",
      "slot": "Weapon",
      "form": "Crossbow",
      "role": "근거리 다중 적중",
      "weight_kg": 6.4,
      "type_size": "Weapon · Crossbow · 4칸 · 6.4Kg",
      "concept": "여러 개의 짧은 볼트를 부채꼴로 걸어 한 번에 흩뿌리는 사각 프레임 석궁",
      "art_direction": "compact scatter crossbow in strict side view; stock at left and firing direction exactly right; multiple loaded channels but no fired bolts or trail; dense square silhouette",
      "enabled": true,
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
      "occupied_cells": 4,
      "bounds": {
        "width": 2,
        "height": 2
      },
      "pattern": "■■/■■",
      "source_image": "Assets/Items/InventoryIcons/Weapons/weapon_scatter_crossbow.png",
      "media_path": "./item-media/weapon/weapon_scatter_crossbow.png",
      "image": "./item-media/weapon/weapon_scatter_crossbow.png?v=701a42f2a794bb83",
      "image_url": "./item-media/weapon/weapon_scatter_crossbow.png?v=701a42f2a794bb83",
      "icon_asset": "rbxassetid://99151008878700",
      "image_layout": {
        "scale": 0.9,
        "offset_x": 0.0358,
        "offset_y": 0.0557,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": {
        "native_facing": "Right",
        "attack_motion": "RangedAim",
        "pivot": "StockGrip",
        "sockets": [
          "ProjectileOrigin",
          "Muzzle"
        ],
        "pivot_uv": [
          0.35,
          0.65
        ],
        "socket_uv": {
          "ProjectileOrigin": [
            0.72,
            0.5
          ],
          "Muzzle": [
            0.94,
            0.48
          ]
        }
      },
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "weapon.siege_crossbow",
      "name": "공성 석궁",
      "family": "weapon",
      "family_label": "무기",
      "category": "Weapon",
      "slot": "Weapon",
      "form": "Crossbow",
      "role": "중장갑·보스 관통",
      "weight_kg": 8.0,
      "type_size": "Weapon · Crossbow · 6칸 · 8.0Kg",
      "concept": "두꺼운 강철 활대와 윈치, 대형 관통 볼트를 한 프레임에 묶은 최고 중량 공성 석궁",
      "art_direction": "massive steel siege crossbow in strict side view; stock at left and bolt tip/firing direction exactly right; winch and broad limbs; no fired bolt, muzzle flash, or trail",
      "enabled": true,
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
      "occupied_cells": 6,
      "bounds": {
        "width": 3,
        "height": 2
      },
      "pattern": "■■■/■■■",
      "source_image": "Assets/Items/InventoryIcons/Weapons/weapon_siege_crossbow.png",
      "media_path": "./item-media/weapon/weapon_siege_crossbow.png",
      "image": "./item-media/weapon/weapon_siege_crossbow.png?v=6c875e8977f2fc79",
      "image_url": "./item-media/weapon/weapon_siege_crossbow.png?v=6c875e8977f2fc79",
      "icon_asset": "rbxassetid://108705398083879",
      "image_layout": {
        "scale": 0.9,
        "offset_x": 0.0871,
        "offset_y": 0.0941,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": {
        "native_facing": "Right",
        "attack_motion": "RangedAim",
        "pivot": "StockGrip",
        "sockets": [
          "ProjectileOrigin",
          "Muzzle"
        ],
        "pivot_uv": [
          0.35,
          0.6
        ],
        "socket_uv": {
          "ProjectileOrigin": [
            0.7,
            0.5
          ],
          "Muzzle": [
            0.96,
            0.5
          ]
        }
      },
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "weapon.sky_piercer_spear",
      "name": "천공 장창",
      "family": "weapon",
      "family_label": "무기",
      "category": "Weapon",
      "slot": "Weapon",
      "form": "Spear",
      "role": "직선 관통",
      "weight_kg": 4.8,
      "type_size": "Weapon · Spear · 4칸 · 4.8Kg",
      "concept": "압축 공기를 모으는 청색 고리와 긴 사각 창날로 일직선의 적을 꿰뚫는 장창",
      "art_direction": "single-headed straight spear aligned vertically; butt at bottom and sole spear tip exactly up; blue pressure rings; no second blade or baked trail",
      "enabled": true,
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
        ],
        [
          0,
          3
        ]
      ],
      "occupied_cells": 4,
      "bounds": {
        "width": 1,
        "height": 4
      },
      "pattern": "■/■/■/■",
      "source_image": "Assets/Items/InventoryIcons/Weapons/weapon_sky_piercer_spear.png",
      "media_path": "./item-media/weapon/weapon_sky_piercer_spear.png",
      "image": "./item-media/weapon/weapon_sky_piercer_spear.png?v=60eb08ce5bfe7b9e",
      "image_url": "./item-media/weapon/weapon_sky_piercer_spear.png?v=60eb08ce5bfe7b9e",
      "icon_asset": "rbxassetid://81569816573618",
      "image_layout": {
        "scale": 0.95,
        "offset_x": 0.1138,
        "offset_y": 0.0438,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": {
        "native_facing": "Up",
        "attack_motion": "Thrust",
        "pivot": "RearGrip",
        "sockets": [
          "Tip",
          "ImpactRoot"
        ],
        "pivot_uv": [
          0.5,
          0.88
        ],
        "socket_uv": {
          "Tip": [
            0.5,
            0.04
          ],
          "ImpactRoot": [
            0.5,
            0.18
          ]
        }
      },
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "weapon.thunder_return_javelin",
      "name": "뇌광 투창",
      "family": "weapon",
      "family_label": "무기",
      "category": "Weapon",
      "slot": "Weapon",
      "form": "Spear",
      "role": "투척·연쇄 번개",
      "weight_kg": 3.6,
      "type_size": "Weapon · Spear · 4칸 · 3.6Kg",
      "concept": "번개 결정이 박힌 세 마디 창대가 던진 뒤 전류 궤적을 따라 손으로 되돌아오는 투창",
      "art_direction": "single-headed segmented lightning javelin aligned vertically; butt at bottom and sole spear tip exactly up; compact straight shaft; no rope, second blade, lightning trail, or projectile duplicate",
      "enabled": true,
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
          1,
          2
        ]
      ],
      "occupied_cells": 4,
      "bounds": {
        "width": 2,
        "height": 3
      },
      "pattern": "■□/■■/□■",
      "source_image": "Assets/Items/InventoryIcons/Weapons/weapon_thunder_return_javelin.png",
      "media_path": "./item-media/weapon/weapon_thunder_return_javelin.png",
      "image": "./item-media/weapon/weapon_thunder_return_javelin.png?v=bb4701eec8f39bdf",
      "image_url": "./item-media/weapon/weapon_thunder_return_javelin.png?v=bb4701eec8f39bdf",
      "icon_asset": "rbxassetid://76140106697830",
      "image_layout": {
        "scale": 0.9,
        "offset_x": 0.0283,
        "offset_y": -0.0519,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": {
        "native_facing": "Up",
        "attack_motion": "Throw",
        "pivot": "CenterGrip",
        "sockets": [
          "Tip",
          "ProjectileOrigin"
        ],
        "pivot_uv": [
          0.52,
          0.55
        ],
        "socket_uv": {
          "Tip": [
            0.36,
            0.05
          ],
          "ProjectileOrigin": [
            0.52,
            0.55
          ]
        }
      },
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "weapon.vampire_axe",
      "name": "흡혈 도끼",
      "family": "weapon",
      "family_label": "무기",
      "category": "Weapon",
      "slot": "Weapon",
      "form": "Axe",
      "role": "흡혈·출혈",
      "weight_kg": 5.6,
      "type_size": "Weapon · Axe · 5칸 · 5.6Kg",
      "concept": "검붉은 혈액관이 초승달 칼날의 홈을 따라 흐르며 적중 피해를 생명력으로 돌리는 전투 도끼",
      "art_direction": "upright crescent vampire axe; handle butt at bottom and axe head/blade edge at top; dark red tubes down the handle; no blood splash or baked swing trail",
      "enabled": true,
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
        ]
      ],
      "occupied_cells": 5,
      "bounds": {
        "width": 2,
        "height": 3
      },
      "pattern": "■■/■■/■□",
      "source_image": "Assets/Items/InventoryIcons/Weapons/weapon_vampire_axe.png",
      "media_path": "./item-media/weapon/weapon_vampire_axe.png",
      "image": "./item-media/weapon/weapon_vampire_axe.png?v=638044cd2974ed4f",
      "image_url": "./item-media/weapon/weapon_vampire_axe.png?v=638044cd2974ed4f",
      "icon_asset": "rbxassetid://115373152470777",
      "image_layout": {
        "scale": 0.9,
        "offset_x": 0.1428,
        "offset_y": 0.0,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": {
        "native_facing": "Up",
        "attack_motion": "Sweep",
        "pivot": "Grip",
        "sockets": [
          "ImpactRoot",
          "Tip"
        ],
        "pivot_uv": [
          0.24,
          0.88
        ],
        "socket_uv": {
          "ImpactRoot": [
            0.45,
            0.25
          ],
          "Tip": [
            0.78,
            0.3
          ]
        }
      },
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "armor.giant_greaves_bottom",
      "name": "거인의 각갑",
      "family": "armor",
      "family_label": "방어구",
      "category": "Armor",
      "slot": "Bottom",
      "form": "LegArmor",
      "role": "고체력 방어·밀쳐내기 저항",
      "weight_kg": 9.5,
      "type_size": "Bottom · LegArmor · 6칸 · 9.5Kg",
      "concept": "거대한 뿔판과 무거운 무릎 장갑이 높은 체력 상태에서 충격과 밀쳐내기를 버티는 각갑",
      "art_direction": "huge horn-plated leg armor with massive knee guards, six-cell horizontal rectangle",
      "enabled": true,
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
      "occupied_cells": 6,
      "bounds": {
        "width": 3,
        "height": 2
      },
      "pattern": "■■■/■■■",
      "source_image": "Assets/Items/InventoryIcons/Armor/armor_giant_greaves_bottom.png",
      "media_path": "./item-media/armor/armor_giant_greaves_bottom.png",
      "image": "./item-media/armor/armor_giant_greaves_bottom.png?v=392f7e53ff686466",
      "image_url": "./item-media/armor/armor_giant_greaves_bottom.png?v=392f7e53ff686466",
      "icon_asset": "rbxassetid://85294671546592",
      "image_layout": {
        "scale": 0.9,
        "offset_x": 0.0646,
        "offset_y": 0.1245,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": null,
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "armor.lifeweave_bottom",
      "name": "생명 직조 하의",
      "family": "armor",
      "family_label": "방어구",
      "category": "Armor",
      "slot": "Bottom",
      "form": "LegArmor",
      "role": "체력재생·초과회복 보호막",
      "weight_kg": 4.6,
      "type_size": "Bottom · LegArmor · 4칸 · 4.6Kg",
      "concept": "녹색 생명실과 약초 주머니가 천천히 체력을 회복하고 넘친 회복을 보호막으로 엮는 하의",
      "art_direction": "green life-woven trousers with herb pouches and glowing seams, four-cell square silhouette",
      "enabled": true,
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
      "occupied_cells": 4,
      "bounds": {
        "width": 2,
        "height": 2
      },
      "pattern": "■■/■■",
      "source_image": "Assets/Items/InventoryIcons/Armor/armor_lifeweave_bottom.png",
      "media_path": "./item-media/armor/armor_lifeweave_bottom.png",
      "image": "./item-media/armor/armor_lifeweave_bottom.png?v=d7232a1a7026ac43",
      "image_url": "./item-media/armor/armor_lifeweave_bottom.png?v=d7232a1a7026ac43",
      "icon_asset": "rbxassetid://81764543881036",
      "image_layout": {
        "scale": 0.9,
        "offset_x": 0.0776,
        "offset_y": 0.1244,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": null,
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "armor.phantom_bottom",
      "name": "환영 하의",
      "family": "armor",
      "family_label": "방어구",
      "category": "Armor",
      "slot": "Bottom",
      "form": "LegArmor",
      "role": "회피 후 공격 강화",
      "weight_kg": 7.8,
      "type_size": "Bottom · LegArmor · 6칸 · 7.8Kg",
      "concept": "자주색 잔상 천과 분리형 판금이 회피 순간 몸의 위치를 흐리는 세로형 하의",
      "art_direction": "tall phantom leg armor with purple afterimage cloth and split plates, six-cell vertical rectangle",
      "enabled": true,
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
      "occupied_cells": 6,
      "bounds": {
        "width": 2,
        "height": 3
      },
      "pattern": "■■/■■/■■",
      "source_image": "Assets/Items/InventoryIcons/Armor/armor_phantom_bottom.png",
      "media_path": "./item-media/armor/armor_phantom_bottom.png",
      "image": "./item-media/armor/armor_phantom_bottom.png?v=ad5a6467f049a947",
      "image_url": "./item-media/armor/armor_phantom_bottom.png?v=ad5a6467f049a947",
      "icon_asset": "rbxassetid://74366566303224",
      "image_layout": {
        "scale": 0.95,
        "offset_x": 0.0726,
        "offset_y": 0.0655,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": null,
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "armor.wanderer_tactical_bottom",
      "name": "유랑자 전술바지",
      "family": "armor",
      "family_label": "방어구",
      "category": "Armor",
      "slot": "Bottom",
      "form": "LegArmor",
      "role": "이동 중 공격속도",
      "weight_kg": 5.4,
      "type_size": "Bottom · LegArmor · 4칸 · 5.4Kg",
      "concept": "넓은 허리 벨트와 분산 주머니, 짧고 평행하게 분리된 바짓단이 이동 리듬을 방해하지 않는 유랑자용 전술바지",
      "art_direction": "wide tactical belt, oversized side utility pouches, and separated short straight legs in a six-cell vertical rectangle",
      "enabled": true,
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
      "occupied_cells": 4,
      "bounds": {
        "width": 2,
        "height": 2
      },
      "pattern": "■■/■■",
      "source_image": "Assets/Items/InventoryIcons/Armor/armor_wanderer_tactical_bottom.png",
      "media_path": "./item-media/armor/armor_wanderer_tactical_bottom.png",
      "image": "./item-media/armor/armor_wanderer_tactical_bottom.png?v=dce90883cd4cf86c",
      "image_url": "./item-media/armor/armor_wanderer_tactical_bottom.png?v=dce90883cd4cf86c",
      "icon_asset": "rbxassetid://119263018376345",
      "image_layout": {
        "scale": 0.975,
        "offset_x": 0.0969,
        "offset_y": 0.1103,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": null,
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "armor.executioner_gauntlets",
      "name": "처형자의 건틀릿",
      "family": "armor",
      "family_label": "방어구",
      "category": "Armor",
      "slot": "Gloves",
      "form": "Gloves",
      "role": "저체력 대상 피해",
      "weight_kg": 5.5,
      "type_size": "Gloves · Gloves · 4칸 · 5.5Kg",
      "concept": "붉은 체력 판독기와 날카로운 손등 날이 약해진 적을 식별하는 처형용 건틀릿",
      "art_direction": "executioner gauntlets with red health reader and three knuckle blades, four-cell T silhouette",
      "enabled": true,
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
      "occupied_cells": 4,
      "bounds": {
        "width": 2,
        "height": 2
      },
      "pattern": "■■/■■",
      "source_image": "Assets/Items/InventoryIcons/Armor/armor_executioner_gauntlets.png",
      "media_path": "./item-media/armor/armor_executioner_gauntlets.png",
      "image": "./item-media/armor/armor_executioner_gauntlets.png?v=439adad1f2119e82",
      "image_url": "./item-media/armor/armor_executioner_gauntlets.png?v=439adad1f2119e82",
      "icon_asset": "rbxassetid://130524142328372",
      "image_layout": {
        "scale": 0.975,
        "offset_x": 0.0405,
        "offset_y": 0.0687,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": null,
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "armor.haste_gloves",
      "name": "속공 장갑",
      "family": "armor",
      "family_label": "방어구",
      "category": "Armor",
      "slot": "Gloves",
      "form": "Gloves",
      "role": "공격속도·연속 적중",
      "weight_kg": 3.0,
      "type_size": "Gloves · Gloves · 2칸 · 3.0Kg",
      "concept": "손등의 소형 톱니와 탄성 끈이 연속 공격 동작을 빠르게 되감는 한 쌍의 장갑",
      "art_direction": "paired light attack gloves side by side with small wrist gears, two-cell horizontal silhouette",
      "enabled": true,
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
      "occupied_cells": 2,
      "bounds": {
        "width": 2,
        "height": 1
      },
      "pattern": "■■",
      "source_image": "Assets/Items/InventoryIcons/Armor/armor_haste_gloves.png",
      "media_path": "./item-media/armor/armor_haste_gloves.png",
      "image": "./item-media/armor/armor_haste_gloves.png?v=10f0ade28af02e73",
      "image_url": "./item-media/armor/armor_haste_gloves.png?v=10f0ade28af02e73",
      "icon_asset": "rbxassetid://95827112889161",
      "image_layout": {
        "scale": 0.9,
        "offset_x": 0.0753,
        "offset_y": 0.1045,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": null,
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "armor.marksman_gloves",
      "name": "정밀 사격 장갑",
      "family": "armor",
      "family_label": "방어구",
      "category": "Armor",
      "slot": "Gloves",
      "form": "Gloves",
      "role": "명중·치명타",
      "weight_kg": 3.4,
      "type_size": "Gloves · Gloves · 2칸 · 3.4Kg",
      "concept": "검지의 청색 조준선과 손목 안정판이 원거리 무기의 흔들림을 줄이는 사격 장갑",
      "art_direction": "two marksman gloves stacked vertically, blue targeting line and wrist brace, two-cell vertical silhouette",
      "enabled": true,
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
      "occupied_cells": 2,
      "bounds": {
        "width": 1,
        "height": 2
      },
      "pattern": "■/■",
      "source_image": "Assets/Items/InventoryIcons/Armor/armor_marksman_gloves.png",
      "media_path": "./item-media/armor/armor_marksman_gloves.png",
      "image": "./item-media/armor/armor_marksman_gloves.png?v=0ef161538370d5b7",
      "image_url": "./item-media/armor/armor_marksman_gloves.png?v=0ef161538370d5b7",
      "icon_asset": "rbxassetid://135561981213896",
      "image_layout": {
        "scale": 0.95,
        "offset_x": 0.1531,
        "offset_y": 0.0734,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": null,
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "armor.overload_gauntlets",
      "name": "과부하 건틀릿",
      "family": "armor",
      "family_label": "방어구",
      "category": "Armor",
      "slot": "Gloves",
      "form": "Gloves",
      "role": "스킬 후 공격속도",
      "weight_kg": 5.2,
      "type_size": "Gloves · Gloves · 4칸 · 5.2Kg",
      "concept": "주황 축전 코일이 자동 스킬의 잔류 에너지를 모아 짧은 과부하 상태를 만드는 중건틀릿",
      "art_direction": "pair of heavy square gauntlets with orange capacitor coils, four-cell block silhouette",
      "enabled": true,
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
      "occupied_cells": 4,
      "bounds": {
        "width": 2,
        "height": 2
      },
      "pattern": "■■/■■",
      "source_image": "Assets/Items/InventoryIcons/Armor/armor_overload_gauntlets.png",
      "media_path": "./item-media/armor/armor_overload_gauntlets.png",
      "image": "./item-media/armor/armor_overload_gauntlets.png?v=b6097fbd5413f7da",
      "image_url": "./item-media/armor/armor_overload_gauntlets.png?v=b6097fbd5413f7da",
      "icon_asset": "rbxassetid://109445771065188",
      "image_layout": {
        "scale": 0.9,
        "offset_x": 0.0843,
        "offset_y": 0.0572,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": null,
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "armor.fortress_greathelm",
      "name": "성채 대투구",
      "family": "armor",
      "family_label": "방어구",
      "category": "Armor",
      "slot": "Head",
      "form": "Headgear",
      "role": "최대체력·제어 저항",
      "weight_kg": 6.5,
      "type_size": "Head · Headgear · 3칸 · 6.5Kg",
      "concept": "성벽처럼 층층이 내려오는 회색 장갑과 좁은 시야 틈으로 정면 충격을 버티는 대투구",
      "art_direction": "massive fortress greathelm with stepped stone-like steel plates, six-cell tapered silhouette",
      "enabled": true,
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
        ]
      ],
      "occupied_cells": 3,
      "bounds": {
        "width": 2,
        "height": 2
      },
      "pattern": "■■/■□",
      "source_image": "Assets/Items/InventoryIcons/Armor/armor_fortress_greathelm.png",
      "media_path": "./item-media/armor/armor_fortress_greathelm.png",
      "image": "./item-media/armor/armor_fortress_greathelm.png?v=6116e3ba772d303c",
      "image_url": "./item-media/armor/armor_fortress_greathelm.png?v=6116e3ba772d303c",
      "icon_asset": "rbxassetid://132043830894517",
      "image_layout": {
        "scale": 0.85,
        "offset_x": 0.0,
        "offset_y": 0.0,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": null,
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "armor.ironwall_helmet",
      "name": "철벽 투구",
      "family": "armor",
      "family_label": "방어구",
      "category": "Armor",
      "slot": "Head",
      "form": "Headgear",
      "role": "방어·피격 보호막",
      "weight_kg": 4.4,
      "type_size": "Head · Headgear · 4칸 · 4.4Kg",
      "concept": "사각 주철판과 충격 흡수 패드를 겹쳐 피격 에너지를 얇은 보호막으로 바꾸는 투구",
      "art_direction": "boxy iron helmet with layered plates and blue shock pads, dense four-cell square silhouette",
      "enabled": true,
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
      "occupied_cells": 4,
      "bounds": {
        "width": 2,
        "height": 2
      },
      "pattern": "■■/■■",
      "source_image": "Assets/Items/InventoryIcons/Armor/armor_ironwall_helmet.png",
      "media_path": "./item-media/armor/armor_ironwall_helmet.png",
      "image": "./item-media/armor/armor_ironwall_helmet.png?v=5f4276ec402b5e7f",
      "image_url": "./item-media/armor/armor_ironwall_helmet.png?v=5f4276ec402b5e7f",
      "icon_asset": "rbxassetid://85521490686093",
      "image_layout": {
        "scale": 0.9,
        "offset_x": 0.0878,
        "offset_y": 0.0859,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": null,
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "armor.warlord_helmet",
      "name": "전쟁군주 투구",
      "family": "armor",
      "family_label": "방어구",
      "category": "Armor",
      "slot": "Head",
      "form": "Headgear",
      "role": "자동 스킬 강화",
      "weight_kg": 5.8,
      "type_size": "Head · Headgear · 6칸 · 5.8Kg",
      "concept": "붉은 지휘 깃과 스킬 발동 박자를 알리는 세 개의 금속 공명판을 갖춘 전투 투구",
      "art_direction": "wide warlord helmet with red crest and three resonant metal plates, six-cell rectangle silhouette",
      "enabled": true,
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
      "occupied_cells": 6,
      "bounds": {
        "width": 3,
        "height": 2
      },
      "pattern": "■■■/■■■",
      "source_image": "Assets/Items/InventoryIcons/Armor/armor_warlord_helmet.png",
      "media_path": "./item-media/armor/armor_warlord_helmet.png",
      "image": "./item-media/armor/armor_warlord_helmet.png?v=aada6e663dc16710",
      "image_url": "./item-media/armor/armor_warlord_helmet.png?v=aada6e663dc16710",
      "icon_asset": "rbxassetid://86552624062224",
      "image_layout": {
        "scale": 0.95,
        "offset_x": 0.0536,
        "offset_y": 0.0768,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": null,
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "armor.weakness_visor",
      "name": "약점 탐지경",
      "family": "armor",
      "family_label": "방어구",
      "category": "Armor",
      "slot": "Head",
      "form": "Headgear",
      "role": "명중·속성 약점 분석",
      "weight_kg": 3.0,
      "type_size": "Head · Headgear · 3칸 · 3.0Kg",
      "concept": "적의 속성 취약도를 겹쳐 보여주는 청록 렌즈와 세 갈래 센서를 단 경량 바이저",
      "art_direction": "light tactical visor with cyan lens and three sensor prongs, four-cell T silhouette",
      "enabled": true,
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
        ]
      ],
      "occupied_cells": 3,
      "bounds": {
        "width": 3,
        "height": 1
      },
      "pattern": "■■■",
      "source_image": "Assets/Items/InventoryIcons/Armor/armor_weakness_visor.png",
      "media_path": "./item-media/armor/armor_weakness_visor.png",
      "image": "./item-media/armor/armor_weakness_visor.png?v=d6ed5d3fd2f1a3a1",
      "image_url": "./item-media/armor/armor_weakness_visor.png?v=d6ed5d3fd2f1a3a1",
      "icon_asset": "rbxassetid://114674965290330",
      "image_layout": {
        "scale": 0.9,
        "offset_x": 0.1348,
        "offset_y": 0.0978,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": null,
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "armor.phase_greaves",
      "name": "위상 각반",
      "family": "armor",
      "family_label": "방어구",
      "category": "Armor",
      "slot": "Shoes",
      "form": "Shoes",
      "role": "대시 후 피해감소",
      "weight_kg": 6.2,
      "type_size": "Shoes · Shoes · 4칸 · 6.2Kg",
      "concept": "청록 위상 수정과 자주색 에너지선이 대시 직후 잠시 충격을 통과시키는 한 쌍의 장갑화",
      "art_direction": "matching phase greaves standing upright side by side in a normal footwear pose, four-cell square silhouette",
      "enabled": true,
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
      "occupied_cells": 4,
      "bounds": {
        "width": 2,
        "height": 2
      },
      "pattern": "■■/■■",
      "source_image": "Assets/Items/InventoryIcons/Armor/armor_phase_greaves.png",
      "media_path": "./item-media/armor/armor_phase_greaves.png",
      "image": "./item-media/armor/armor_phase_greaves.png?v=aac9ede64b6914f3",
      "image_url": "./item-media/armor/armor_phase_greaves.png?v=aac9ede64b6914f3",
      "icon_asset": "rbxassetid://72533723560102",
      "image_layout": {
        "scale": 1.0,
        "offset_x": 0.0425,
        "offset_y": 0.1423,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": null,
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "armor.propulsion_boots",
      "name": "추진 장갑화",
      "family": "armor",
      "family_label": "방어구",
      "category": "Armor",
      "slot": "Shoes",
      "form": "Shoes",
      "role": "대시 거리·추가 대시",
      "weight_kg": 6.8,
      "type_size": "Shoes · Shoes · 4칸 · 6.8Kg",
      "concept": "주황 압축 추진기와 두꺼운 정강이 장갑을 결합해 더 멀고 자주 대시하는 장갑화",
      "art_direction": "pair of armored propulsion boots with orange heel thrusters, four-cell square silhouette",
      "enabled": true,
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
      "occupied_cells": 4,
      "bounds": {
        "width": 2,
        "height": 2
      },
      "pattern": "■■/■■",
      "source_image": "Assets/Items/InventoryIcons/Armor/armor_propulsion_boots.png",
      "media_path": "./item-media/armor/armor_propulsion_boots.png",
      "image": "./item-media/armor/armor_propulsion_boots.png?v=08c95b342d916434",
      "image_url": "./item-media/armor/armor_propulsion_boots.png?v=08c95b342d916434",
      "icon_asset": "rbxassetid://132875621986890",
      "image_layout": {
        "scale": 0.9,
        "offset_x": 0.074,
        "offset_y": 0.1097,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": null,
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "armor.shadow_shoes",
      "name": "그림자 신발",
      "family": "armor",
      "family_label": "방어구",
      "category": "Armor",
      "slot": "Shoes",
      "form": "Shoes",
      "role": "회피·대시 무적",
      "weight_kg": 3.8,
      "type_size": "Shoes · Shoes · 2칸 · 3.8Kg",
      "concept": "자주색 그림자 천과 얇은 발목 칼날이 대시 순간 발자국을 지우는 신발",
      "art_direction": "two shadow shoes stacked vertically with purple trailing cloth, two-cell vertical silhouette",
      "enabled": true,
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
      "occupied_cells": 2,
      "bounds": {
        "width": 1,
        "height": 2
      },
      "pattern": "■/■",
      "source_image": "Assets/Items/InventoryIcons/Armor/armor_shadow_shoes.png",
      "media_path": "./item-media/armor/armor_shadow_shoes.png",
      "image": "./item-media/armor/armor_shadow_shoes.png?v=bbe93b185f70b2e2",
      "image_url": "./item-media/armor/armor_shadow_shoes.png?v=bbe93b185f70b2e2",
      "icon_asset": "rbxassetid://78817020721897",
      "image_layout": {
        "scale": 0.95,
        "offset_x": 0.1071,
        "offset_y": 0.0601,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": null,
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "armor.tailwind_boots",
      "name": "순풍 장화",
      "family": "armor",
      "family_label": "방어구",
      "category": "Armor",
      "slot": "Shoes",
      "form": "Shoes",
      "role": "이동속도·가속",
      "weight_kg": 3.2,
      "type_size": "Shoes · Shoes · 2칸 · 3.2Kg",
      "concept": "뒤꿈치 바람날개와 가벼운 밑창이 첫걸음의 가속을 돕는 경량 장화",
      "art_direction": "pair of light boots side by side with cyan heel fins, two-cell horizontal silhouette",
      "enabled": true,
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
      "occupied_cells": 2,
      "bounds": {
        "width": 2,
        "height": 1
      },
      "pattern": "■■",
      "source_image": "Assets/Items/InventoryIcons/Armor/armor_tailwind_boots.png",
      "media_path": "./item-media/armor/armor_tailwind_boots.png",
      "image": "./item-media/armor/armor_tailwind_boots.png?v=0b1f1a5e344377c3",
      "image_url": "./item-media/armor/armor_tailwind_boots.png?v=0b1f1a5e344377c3",
      "icon_asset": "rbxassetid://122994544512720",
      "image_layout": {
        "scale": 0.95,
        "offset_x": 0.0917,
        "offset_y": 0.1394,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": null,
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "armor.fortress_plate_top",
      "name": "성채 판금갑옷",
      "family": "armor",
      "family_label": "방어구",
      "category": "Armor",
      "slot": "Top",
      "form": "BodyArmor",
      "role": "방어·정지 피해감소",
      "weight_kg": 10.0,
      "type_size": "Top · BodyArmor · 6칸 · 10.0Kg",
      "concept": "성벽 모양의 두꺼운 회색 판금과 넓은 어깨판으로 정지 상태에서 피해를 견디는 중갑",
      "art_direction": "massive fortress plate cuirass with broad shoulders and layered gray steel, six-cell rectangle",
      "enabled": true,
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
      "occupied_cells": 6,
      "bounds": {
        "width": 3,
        "height": 2
      },
      "pattern": "■■■/■■■",
      "source_image": "Assets/Items/InventoryIcons/Armor/armor_fortress_plate_top.png",
      "media_path": "./item-media/armor/armor_fortress_plate_top.png",
      "image": "./item-media/armor/armor_fortress_plate_top.png?v=5dbe189a099ce146",
      "image_url": "./item-media/armor/armor_fortress_plate_top.png?v=5dbe189a099ce146",
      "icon_asset": "rbxassetid://128823225725835",
      "image_layout": {
        "scale": 0.9,
        "offset_x": 0.0483,
        "offset_y": 0.0996,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": null,
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "armor.retribution_heavy_top",
      "name": "응징 중갑",
      "family": "armor",
      "family_label": "방어구",
      "category": "Armor",
      "slot": "Top",
      "form": "BodyArmor",
      "role": "연속 피격 응징",
      "weight_kg": 9.4,
      "type_size": "Top · BodyArmor · 6칸 · 9.4Kg",
      "concept": "붉은 충격 계수기와 둔중한 세로 판금이 연속 피격을 누적해 응징 파동으로 방출하는 중갑",
      "art_direction": "tall red-accented heavy armor with impact counters, six-cell vertical rectangle",
      "enabled": true,
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
      "occupied_cells": 6,
      "bounds": {
        "width": 2,
        "height": 3
      },
      "pattern": "■■/■■/■■",
      "source_image": "Assets/Items/InventoryIcons/Armor/armor_retribution_heavy_top.png",
      "media_path": "./item-media/armor/armor_retribution_heavy_top.png",
      "image": "./item-media/armor/armor_retribution_heavy_top.png?v=f330179a8d69badb",
      "image_url": "./item-media/armor/armor_retribution_heavy_top.png?v=f330179a8d69badb",
      "icon_asset": "rbxassetid://135290689895549",
      "image_layout": {
        "scale": 0.9,
        "offset_x": 0.0583,
        "offset_y": 0.0303,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": null,
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "armor.scout_leather_top",
      "name": "척후 가죽상의",
      "family": "armor",
      "family_label": "방어구",
      "category": "Armor",
      "slot": "Top",
      "form": "BodyArmor",
      "role": "이동·원거리 방어",
      "weight_kg": 5.6,
      "type_size": "Top · BodyArmor · 4칸 · 5.6Kg",
      "concept": "가벼운 갈색 가죽과 청록 어깨끈으로 움직이는 동안 원거리 충격을 흘리는 척후 상의",
      "art_direction": "light brown scout leather vest with cyan straps, compact four-cell square silhouette",
      "enabled": true,
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
      "occupied_cells": 4,
      "bounds": {
        "width": 2,
        "height": 2
      },
      "pattern": "■■/■■",
      "source_image": "Assets/Items/InventoryIcons/Armor/armor_scout_leather_top.png",
      "media_path": "./item-media/armor/armor_scout_leather_top.png",
      "image": "./item-media/armor/armor_scout_leather_top.png?v=87a9dcb376633456",
      "image_url": "./item-media/armor/armor_scout_leather_top.png?v=87a9dcb376633456",
      "icon_asset": "rbxassetid://109131690366131",
      "image_layout": {
        "scale": 0.9,
        "offset_x": 0.0775,
        "offset_y": 0.1019,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": null,
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "armor.thorn_battle_top",
      "name": "가시 전투복",
      "family": "armor",
      "family_label": "방어구",
      "category": "Armor",
      "slot": "Top",
      "form": "BodyArmor",
      "role": "가시·반격",
      "weight_kg": 6.8,
      "type_size": "Top · BodyArmor · 4칸 · 6.8Kg",
      "concept": "접히는 강철 가시와 탄성 섬유가 피격 충격을 반격 피해로 되돌리는 전투복",
      "art_direction": "thorned combat jacket with three shoulder spikes and narrow waist, four-cell T silhouette",
      "enabled": true,
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
          1,
          1
        ]
      ],
      "occupied_cells": 4,
      "bounds": {
        "width": 3,
        "height": 2
      },
      "pattern": "■■■/□■□",
      "source_image": "Assets/Items/InventoryIcons/Armor/armor_thorn_battle_top.png",
      "media_path": "./item-media/armor/armor_thorn_battle_top.png",
      "image": "./item-media/armor/armor_thorn_battle_top.png?v=a327aec82ab1f143",
      "image_url": "./item-media/armor/armor_thorn_battle_top.png?v=a327aec82ab1f143",
      "icon_asset": "rbxassetid://119245276194622",
      "image_layout": {
        "scale": 0.9,
        "offset_x": 0.0511,
        "offset_y": -0.0376,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": null,
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "accessory.alchemy_power_belt",
      "name": "연금 동력 벨트",
      "family": "accessory",
      "family_label": "장신구",
      "category": "Accessory",
      "slot": "Belt",
      "form": "Belt",
      "role": "강화 소모품·가용 무게",
      "weight_kg": 1.9,
      "type_size": "Belt · Belt · 4칸 · 1.9Kg",
      "concept": "세 개의 연금 플라스크와 중앙 동력 버클이 강화 소모품의 지속과 하중 분배를 보조하는 벨트",
      "art_direction": "alchemy belt with three small flasks and central power buckle, four-cell T silhouette",
      "enabled": true,
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
          1,
          1
        ]
      ],
      "occupied_cells": 4,
      "bounds": {
        "width": 3,
        "height": 2
      },
      "pattern": "■■■/□■□",
      "source_image": "Assets/Items/InventoryIcons/Accessories/accessory_alchemy_power_belt.png",
      "media_path": "./item-media/accessory/accessory_alchemy_power_belt.png",
      "image": "./item-media/accessory/accessory_alchemy_power_belt.png?v=2349830a0da38981",
      "image_url": "./item-media/accessory/accessory_alchemy_power_belt.png?v=2349830a0da38981",
      "icon_asset": "rbxassetid://74547813266714",
      "image_layout": {
        "scale": 0.9,
        "offset_x": 0.0528,
        "offset_y": 0.0219,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": null,
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "accessory.combat_cycle_belt",
      "name": "전투 순환 벨트",
      "family": "accessory",
      "family_label": "장신구",
      "category": "Accessory",
      "slot": "Belt",
      "form": "Belt",
      "role": "공격 준비·가용 무게",
      "weight_kg": 1.5,
      "type_size": "Belt · Belt · 2칸 · 1.5Kg",
      "concept": "작은 회전축과 장비 고리가 무기의 다음 준비 동작과 하중 분배를 돕는 세로형 벨트",
      "art_direction": "folded vertical utility belt with brass rotation hub and equipment loops, two-cell line silhouette",
      "enabled": true,
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
      "occupied_cells": 2,
      "bounds": {
        "width": 2,
        "height": 1
      },
      "pattern": "■■",
      "source_image": "Assets/Items/InventoryIcons/Accessories/accessory_combat_cycle_belt.png",
      "media_path": "./item-media/accessory/accessory_combat_cycle_belt.png",
      "image": "./item-media/accessory/accessory_combat_cycle_belt.png?v=6500540267c271ce",
      "image_url": "./item-media/accessory/accessory_combat_cycle_belt.png?v=6500540267c271ce",
      "icon_asset": "rbxassetid://129892151398626",
      "image_layout": {
        "scale": 0.9,
        "offset_x": 0.0645,
        "offset_y": 0.1154,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": null,
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "accessory.first_aid_belt",
      "name": "응급처치 벨트",
      "family": "accessory",
      "family_label": "장신구",
      "category": "Accessory",
      "slot": "Belt",
      "form": "Belt",
      "role": "회복 소모품 강화",
      "weight_kg": 1.4,
      "type_size": "Belt · Belt · 2칸 · 1.4Kg",
      "concept": "붉은 회복 앰플과 압박 붕대를 즉시 꺼낼 수 있게 묶은 짧은 응급처치 벨트",
      "art_direction": "short medical belt with red vial and rolled bandage, two-cell horizontal silhouette",
      "enabled": true,
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
      "occupied_cells": 2,
      "bounds": {
        "width": 2,
        "height": 1
      },
      "pattern": "■■",
      "source_image": "Assets/Items/InventoryIcons/Accessories/accessory_first_aid_belt.png",
      "media_path": "./item-media/accessory/accessory_first_aid_belt.png",
      "image": "./item-media/accessory/accessory_first_aid_belt.png?v=fbbda9ec7a0571e1",
      "image_url": "./item-media/accessory/accessory_first_aid_belt.png?v=fbbda9ec7a0571e1",
      "icon_asset": "rbxassetid://86740070680682",
      "image_layout": {
        "scale": 0.95,
        "offset_x": 0.1002,
        "offset_y": 0.1045,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": null,
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "accessory.life_support_belt",
      "name": "생명유지 벨트",
      "family": "accessory",
      "family_label": "장신구",
      "category": "Accessory",
      "slot": "Belt",
      "form": "Belt",
      "role": "체력재생·가용 무게",
      "weight_kg": 2.0,
      "type_size": "Belt · Belt · 4칸 · 2.0Kg",
      "concept": "녹색 생명액 주머니와 네 개의 지지 버클이 체력과 장비 하중을 함께 유지하는 긴 벨트",
      "art_direction": "long four-segment life-support belt with green fluid pouch and four buckles, four-cell line",
      "enabled": true,
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
      "occupied_cells": 4,
      "bounds": {
        "width": 4,
        "height": 1
      },
      "pattern": "■■■■",
      "source_image": "Assets/Items/InventoryIcons/Accessories/accessory_life_support_belt.png",
      "media_path": "./item-media/accessory/accessory_life_support_belt.png",
      "image": "./item-media/accessory/accessory_life_support_belt.png?v=ba092df05b6908c9",
      "image_url": "./item-media/accessory/accessory_life_support_belt.png?v=ba092df05b6908c9",
      "icon_asset": "rbxassetid://115072879407019",
      "image_layout": {
        "scale": 0.9,
        "offset_x": 0.0356,
        "offset_y": 0.1263,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": null,
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "accessory.resonance_earring",
      "name": "공명 귀걸이",
      "family": "accessory",
      "family_label": "장신구",
      "category": "Accessory",
      "slot": "Earring",
      "form": "Earring",
      "role": "명중·상태 저항",
      "weight_kg": 0.9,
      "type_size": "Earring · Earring · 1칸 · 0.9Kg",
      "concept": "자주색 공명 수정이 공격 진동을 정렬해 조준 오차와 상태 교란을 줄이는 귀걸이",
      "art_direction": "single purple resonance crystal earring with concentric metal rings, compact one-cell icon",
      "enabled": true,
      "coordinates": [
        [
          0,
          0
        ]
      ],
      "occupied_cells": 1,
      "bounds": {
        "width": 1,
        "height": 1
      },
      "pattern": "■",
      "source_image": "Assets/Items/InventoryIcons/Accessories/accessory_resonance_earring.png",
      "media_path": "./item-media/accessory/accessory_resonance_earring.png",
      "image": "./item-media/accessory/accessory_resonance_earring.png?v=f148bc88190317c8",
      "image_url": "./item-media/accessory/accessory_resonance_earring.png?v=f148bc88190317c8",
      "icon_asset": "rbxassetid://111133450780540",
      "image_layout": {
        "scale": 0.95,
        "offset_x": 0.1148,
        "offset_y": 0.1127,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": null,
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "accessory.windwhisper_earring",
      "name": "바람결 귀걸이",
      "family": "accessory",
      "family_label": "장신구",
      "category": "Accessory",
      "slot": "Earring",
      "form": "Earring",
      "role": "이동·근거리 사거리",
      "weight_kg": 0.8,
      "type_size": "Earring · Earring · 1칸 · 0.8Kg",
      "concept": "작은 은빛 고리에 청록 바람깃이 매달려 움직임과 근거리 무기의 궤적을 가볍게 늘리는 귀걸이",
      "art_direction": "single silver earring with a cyan wind feather, centered compact one-cell icon",
      "enabled": true,
      "coordinates": [
        [
          0,
          0
        ]
      ],
      "occupied_cells": 1,
      "bounds": {
        "width": 1,
        "height": 1
      },
      "pattern": "■",
      "source_image": "Assets/Items/InventoryIcons/Accessories/accessory_windwhisper_earring.png",
      "media_path": "./item-media/accessory/accessory_windwhisper_earring.png",
      "image": "./item-media/accessory/accessory_windwhisper_earring.png?v=8c11924a7302b178",
      "image_url": "./item-media/accessory/accessory_windwhisper_earring.png?v=8c11924a7302b178",
      "icon_asset": "rbxassetid://111738014413914",
      "image_layout": {
        "scale": 0.95,
        "offset_x": 0.1165,
        "offset_y": 0.0936,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": null,
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "accessory.amplifier_pendant",
      "name": "증폭 펜던트",
      "family": "accessory",
      "family_label": "장신구",
      "category": "Accessory",
      "slot": "Necklace",
      "form": "Necklace",
      "role": "자동 스킬 피해",
      "weight_kg": 1.1,
      "type_size": "Necklace · Necklace · 2칸 · 1.1Kg",
      "concept": "금속 코일 속 황색 수정이 자동 스킬의 충격을 한 차례 증폭하는 세로형 펜던트",
      "art_direction": "vertical necklace with coiled golden amplifier crystal and short chain, two-cell line silhouette",
      "enabled": true,
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
      "occupied_cells": 2,
      "bounds": {
        "width": 1,
        "height": 2
      },
      "pattern": "■/■",
      "source_image": "Assets/Items/InventoryIcons/Accessories/accessory_amplifier_pendant.png",
      "media_path": "./item-media/accessory/accessory_amplifier_pendant.png",
      "image": "./item-media/accessory/accessory_amplifier_pendant.png?v=5bbb1274af785003",
      "image_url": "./item-media/accessory/accessory_amplifier_pendant.png?v=5bbb1274af785003",
      "icon_asset": "rbxassetid://74749515981574",
      "image_layout": {
        "scale": 0.9,
        "offset_x": 0.1034,
        "offset_y": 0.0415,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": null,
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "accessory.element_chain_necklace",
      "name": "원소 연쇄 목걸이",
      "family": "accessory",
      "family_label": "장신구",
      "category": "Accessory",
      "slot": "Necklace",
      "form": "Necklace",
      "role": "다중 속성·발사체 증가",
      "weight_kg": 1.8,
      "type_size": "Necklace · Necklace · 3칸 · 1.8Kg",
      "concept": "화염·냉기·번개 보석 세 개가 서로 다른 높이에서 연쇄 반응하는 비대칭 목걸이",
      "art_direction": "three elemental gems on an asymmetric chain, three-cell L silhouette, red blue yellow accents",
      "enabled": true,
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
        ]
      ],
      "occupied_cells": 3,
      "bounds": {
        "width": 2,
        "height": 2
      },
      "pattern": "■□/■■",
      "source_image": "Assets/Items/InventoryIcons/Accessories/accessory_element_chain_necklace.png",
      "media_path": "./item-media/accessory/accessory_element_chain_necklace.png",
      "image": "./item-media/accessory/accessory_element_chain_necklace.png?v=946c9a5babcf39d9",
      "image_url": "./item-media/accessory/accessory_element_chain_necklace.png?v=946c9a5babcf39d9",
      "icon_asset": "rbxassetid://87773916191723",
      "image_layout": {
        "scale": 0.9,
        "offset_x": 0.0489,
        "offset_y": 0.1211,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": null,
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "accessory.guardian_charm",
      "name": "수호 부적",
      "family": "accessory",
      "family_label": "장신구",
      "category": "Accessory",
      "slot": "Necklace",
      "form": "Necklace",
      "role": "보호막·회복",
      "weight_kg": 1.2,
      "type_size": "Necklace · Necklace · 2칸 · 1.2Kg",
      "concept": "푸른 방호석 두 개를 짧은 사슬로 연결해 보호막과 회복 효과를 안정시키는 부적",
      "art_direction": "horizontal twin blue ward stones connected by a short chain, two-cell wide silhouette",
      "enabled": true,
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
      "occupied_cells": 2,
      "bounds": {
        "width": 2,
        "height": 1
      },
      "pattern": "■■",
      "source_image": "Assets/Items/InventoryIcons/Accessories/accessory_guardian_charm.png",
      "media_path": "./item-media/accessory/accessory_guardian_charm.png",
      "image": "./item-media/accessory/accessory_guardian_charm.png?v=394aeb11e44e6f8e",
      "image_url": "./item-media/accessory/accessory_guardian_charm.png?v=394aeb11e44e6f8e",
      "icon_asset": "rbxassetid://111868292252935",
      "image_layout": {
        "scale": 0.9,
        "offset_x": 0.0682,
        "offset_y": 0.0813,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": null,
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "accessory.undying_torc",
      "name": "불사자의 토크",
      "family": "accessory",
      "family_label": "장신구",
      "category": "Accessory",
      "slot": "Necklace",
      "form": "Necklace",
      "role": "최대체력·치명상 생존",
      "weight_kg": 2.0,
      "type_size": "Necklace · Necklace · 3칸 · 2.0Kg",
      "concept": "뼈마디와 검붉은 생명석을 넓은 고리로 묶어 치명상을 버티게 하는 무거운 토크",
      "art_direction": "broad bone torc with dark red life stone, three-cell horizontal crescent silhouette",
      "enabled": true,
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
        ]
      ],
      "occupied_cells": 3,
      "bounds": {
        "width": 3,
        "height": 1
      },
      "pattern": "■■■",
      "source_image": "Assets/Items/InventoryIcons/Accessories/accessory_undying_torc.png",
      "media_path": "./item-media/accessory/accessory_undying_torc.png",
      "image": "./item-media/accessory/accessory_undying_torc.png?v=79a5ab2f2f75b0f8",
      "image_url": "./item-media/accessory/accessory_undying_torc.png?v=79a5ab2f2f75b0f8",
      "icon_asset": "rbxassetid://76106746732716",
      "image_layout": {
        "scale": 0.9,
        "offset_x": 0.071,
        "offset_y": 0.133,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": null,
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "accessory.cycle_ring",
      "name": "순환의 반지",
      "family": "accessory",
      "family_label": "장신구",
      "category": "Accessory",
      "slot": "Ring",
      "form": "Ring",
      "role": "모든 스킬 필요 공격 횟수 감소",
      "weight_kg": 1.0,
      "type_size": "Ring · Ring · 1칸 · 1.0Kg",
      "concept": "맞물린 자주색 이중 고리가 여섯 무기의 자동 스킬 순환을 조금 앞당기는 반지",
      "art_direction": "single interlocking double ring with purple cycle crystal, compact centered one-cell icon",
      "enabled": true,
      "coordinates": [
        [
          0,
          0
        ]
      ],
      "occupied_cells": 1,
      "bounds": {
        "width": 1,
        "height": 1
      },
      "pattern": "■",
      "source_image": "Assets/Items/InventoryIcons/Accessories/accessory_cycle_ring.png",
      "media_path": "./item-media/accessory/accessory_cycle_ring.png",
      "image": "./item-media/accessory/accessory_cycle_ring.png?v=294b0324e09bb9f3",
      "image_url": "./item-media/accessory/accessory_cycle_ring.png?v=294b0324e09bb9f3",
      "icon_asset": "rbxassetid://84666904984663",
      "image_layout": {
        "scale": 0.9,
        "offset_x": 0.0682,
        "offset_y": 0.1115,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": null,
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "accessory.focus_ring",
      "name": "집중의 반지",
      "family": "accessory",
      "family_label": "장신구",
      "category": "Accessory",
      "slot": "Ring",
      "form": "Ring",
      "role": "치명타·명중",
      "weight_kg": 0.8,
      "type_size": "Ring · Ring · 1칸 · 0.8Kg",
      "concept": "가느다란 청색 조준 홈이 공격 방향을 정렬하는 정밀 반지",
      "art_direction": "single slim ring with blue targeting notch and tiny lens, compact centered one-cell icon",
      "enabled": true,
      "coordinates": [
        [
          0,
          0
        ]
      ],
      "occupied_cells": 1,
      "bounds": {
        "width": 1,
        "height": 1
      },
      "pattern": "■",
      "source_image": "Assets/Items/InventoryIcons/Accessories/accessory_focus_ring.png",
      "media_path": "./item-media/accessory/accessory_focus_ring.png",
      "image": "./item-media/accessory/accessory_focus_ring.png?v=e7102dae81118077",
      "image_url": "./item-media/accessory/accessory_focus_ring.png?v=e7102dae81118077",
      "icon_asset": "rbxassetid://78850600227421",
      "image_layout": {
        "scale": 0.95,
        "offset_x": 0.1085,
        "offset_y": 0.1157,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": null,
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "accessory.fury_ring",
      "name": "격노의 반지",
      "family": "accessory",
      "family_label": "장신구",
      "category": "Accessory",
      "slot": "Ring",
      "form": "Ring",
      "role": "공격력·저체력 강화",
      "weight_kg": 0.9,
      "type_size": "Ring · Ring · 1칸 · 0.9Kg",
      "concept": "붉은 균열석이 체력이 낮을수록 강하게 빛나는 두꺼운 공격 반지",
      "art_direction": "single thick ring with cracked red fury stone, compact centered one-cell icon",
      "enabled": true,
      "coordinates": [
        [
          0,
          0
        ]
      ],
      "occupied_cells": 1,
      "bounds": {
        "width": 1,
        "height": 1
      },
      "pattern": "■",
      "source_image": "Assets/Items/InventoryIcons/Accessories/accessory_fury_ring.png",
      "media_path": "./item-media/accessory/accessory_fury_ring.png",
      "image": "./item-media/accessory/accessory_fury_ring.png?v=938ab8d5474d44b0",
      "image_url": "./item-media/accessory/accessory_fury_ring.png?v=938ab8d5474d44b0",
      "icon_asset": "rbxassetid://70495120604904",
      "image_layout": {
        "scale": 0.9,
        "offset_x": 0.116,
        "offset_y": 0.0984,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": null,
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    },
    {
      "id": "accessory.guard_ring",
      "name": "수호의 반지",
      "family": "accessory",
      "family_label": "장신구",
      "category": "Accessory",
      "slot": "Ring",
      "form": "Ring",
      "role": "방어·보호막",
      "weight_kg": 1.2,
      "type_size": "Ring · Ring · 1칸 · 1.2Kg",
      "concept": "사각 청동 테두리와 푸른 방호석이 피해를 받아내는 묵직한 반지",
      "art_direction": "single square-edged bronze ring with blue ward stone, compact centered one-cell icon",
      "enabled": true,
      "coordinates": [
        [
          0,
          0
        ]
      ],
      "occupied_cells": 1,
      "bounds": {
        "width": 1,
        "height": 1
      },
      "pattern": "■",
      "source_image": "Assets/Items/InventoryIcons/Accessories/accessory_guard_ring.png",
      "media_path": "./item-media/accessory/accessory_guard_ring.png",
      "image": "./item-media/accessory/accessory_guard_ring.png?v=332e65b49bcd96f4",
      "image_url": "./item-media/accessory/accessory_guard_ring.png?v=332e65b49bcd96f4",
      "icon_asset": "rbxassetid://81347558074454",
      "image_layout": {
        "scale": 0.95,
        "offset_x": 0.0879,
        "offset_y": 0.0964,
        "rotation_degrees": 0,
        "canvas_width": 1024,
        "canvas_height": 1024
      },
      "combat_art": null,
      "stats": [],
      "synergies": [],
      "synergy_labels": [],
      "effects": {},
      "effect_search_terms": []
    }
  ],
  "synergy_catalog": [],
  "effect_catalog": {
    "research_patterns": [],
    "sources": [],
    "types": [],
    "conditions": [],
    "abilities": []
  },
  "revision": "af58727fe90523ed"
};
