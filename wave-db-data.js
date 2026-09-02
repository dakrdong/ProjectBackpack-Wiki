window.PACKBOUND_WAVE_DB = {
  "schema_version": 5,
  "revision": "e1608046e53f923c",
  "source": "docs/gameplay/stage-wave-definitions.json",
  "runtime_source": "src/ReplicatedStorage/Waves/GeneratedStageWaves.luau",
  "field_count": 1,
  "stage_count": 1,
  "active_stage_count": 1,
  "wave_count": 5,
  "layer_count": 12,
  "spawn_count": 76,
  "transition_contract": {
    "wave_start": "PreviousWaveClearedThenDelay",
    "wave_clear": "AllScheduledSpawnsResolvedAndAllSpawnedMonstersDead",
    "next_wave": "Automatic",
    "stage_clear": "FinalWaveCleared",
    "boss_requirement": "OptionalOnFinalWave"
  },
  "fields": [
    {
      "id": "junkwind_meadow",
      "display_name": "고물바람 초원",
      "enabled": true,
      "runtime_model_name": "PackBoundField",
      "runtime_field_version": 36,
      "player_spawn": [
        12,
        0.65,
        30
      ],
      "map_image_path": "Assets/World/Textures/junkwind_meadow_field_layout_v1.png",
      "grid": {
        "columns": 12,
        "rows": 12,
        "subdivision": 2,
        "origin_x": -94,
        "origin_z": -94,
        "cell_size": 15.6666666667,
        "ground_y": 0,
        "blocked_cells": [
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
            4,
            0
          ],
          [
            5,
            0
          ],
          [
            6,
            0
          ],
          [
            7,
            0
          ],
          [
            8,
            0
          ],
          [
            9,
            0
          ],
          [
            10,
            0
          ],
          [
            11,
            0
          ],
          [
            0,
            1
          ],
          [
            11,
            1
          ],
          [
            0,
            2
          ],
          [
            3,
            2
          ],
          [
            9,
            2
          ],
          [
            11,
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
          ],
          [
            8,
            3
          ],
          [
            11,
            3
          ],
          [
            0,
            4
          ],
          [
            4,
            4
          ],
          [
            11,
            4
          ],
          [
            0,
            5
          ],
          [
            8,
            5
          ],
          [
            11,
            5
          ],
          [
            0,
            6
          ],
          [
            4,
            6
          ],
          [
            11,
            6
          ],
          [
            0,
            7
          ],
          [
            3,
            7
          ],
          [
            10,
            7
          ],
          [
            11,
            7
          ],
          [
            0,
            8
          ],
          [
            9,
            8
          ],
          [
            11,
            8
          ],
          [
            0,
            9
          ],
          [
            7,
            9
          ],
          [
            10,
            9
          ],
          [
            11,
            9
          ],
          [
            0,
            10
          ],
          [
            9,
            10
          ],
          [
            10,
            10
          ],
          [
            11,
            10
          ],
          [
            0,
            11
          ],
          [
            1,
            11
          ],
          [
            2,
            11
          ],
          [
            3,
            11
          ],
          [
            4,
            11
          ],
          [
            5,
            11
          ],
          [
            6,
            11
          ],
          [
            7,
            11
          ],
          [
            8,
            11
          ],
          [
            9,
            11
          ],
          [
            10,
            11
          ],
          [
            11,
            11
          ]
        ]
      },
      "field_phases": [
        {
          "id": "boss_arena",
          "arena": {
            "center_x": 0,
            "center_z": 0,
            "obstacle_free_radius_studs": 64,
            "safety_padding_studs": 4,
            "cast_leash_radius_studs": 8,
            "participant_boundary_radius_studs": 48
          },
          "object_transitions": [
            {
              "object_id": "giant_junkwind_duck",
              "blocked_cell": [
                3,
                7
              ],
              "enabled": false
            },
            {
              "object_id": "junk_vending_machine",
              "blocked_cell": [
                4,
                6
              ],
              "enabled": false
            },
            {
              "object_id": "bush_swallowed_cart",
              "blocked_cell": [
                9,
                8
              ],
              "enabled": false
            },
            {
              "object_id": "reward_supply_crate",
              "blocked_cell": [
                8,
                5
              ],
              "enabled": false
            },
            {
              "object_id": "hazard_barricade_01",
              "blocked_cell": [
                4,
                4
              ],
              "enabled": false
            },
            {
              "object_id": "hazard_barricade_02",
              "blocked_cell": [
                8,
                3
              ],
              "enabled": false
            },
            {
              "object_id": "hazard_barricade_03",
              "blocked_cell": [
                7,
                9
              ],
              "enabled": false
            }
          ]
        }
      ],
      "map_image_url": "./field-media/junkwind_meadow.png"
    }
  ],
  "stages": [
    {
      "id": "stage_01",
      "display_name": "스테이지 1",
      "enabled": true,
      "description": "고물바람 초원에서 소형 무리 대응부터 중형 패턴 회피까지 단계적으로 익히고, 최종 보스전에 진입하는 첫 스테이지",
      "field_id": "junkwind_meadow",
      "waves": [
        {
          "id": "wave_01",
          "display_name": "첫 고물벌레 무리",
          "start_delay_seconds": 1,
          "field_phase_id": null,
          "layers": [
            {
              "id": "layer_001",
              "at_seconds": 0,
              "placements": [
                {
                  "id": "placement_001",
                  "monster_id": "junk_can_pillbug",
                  "cell": [
                    4,
                    5
                  ]
                },
                {
                  "id": "placement_002",
                  "monster_id": "bottlecap_beetle",
                  "cell": [
                    11,
                    5
                  ]
                },
                {
                  "id": "placement_003",
                  "monster_id": "junk_can_pillbug",
                  "cell": [
                    16,
                    5
                  ]
                },
                {
                  "id": "placement_004",
                  "monster_id": "bottlecap_beetle",
                  "cell": [
                    5,
                    9
                  ]
                },
                {
                  "id": "placement_005",
                  "monster_id": "junk_can_pillbug",
                  "cell": [
                    20,
                    9
                  ]
                },
                {
                  "id": "placement_006",
                  "monster_id": "bottlecap_beetle",
                  "cell": [
                    4,
                    13
                  ]
                }
              ]
            },
            {
              "id": "layer_002",
              "at_seconds": 8,
              "placements": [
                {
                  "id": "placement_001",
                  "monster_id": "cable_worm",
                  "cell": [
                    20,
                    13
                  ]
                },
                {
                  "id": "placement_002",
                  "monster_id": "junk_can_pillbug",
                  "cell": [
                    5,
                    17
                  ]
                },
                {
                  "id": "placement_003",
                  "monster_id": "bottlecap_beetle",
                  "cell": [
                    8,
                    20
                  ]
                },
                {
                  "id": "placement_004",
                  "monster_id": "cable_worm",
                  "cell": [
                    13,
                    20
                  ]
                },
                {
                  "id": "placement_005",
                  "monster_id": "junk_can_pillbug",
                  "cell": [
                    17,
                    20
                  ]
                },
                {
                  "id": "placement_006",
                  "monster_id": "bottlecap_beetle",
                  "cell": [
                    20,
                    17
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "wave_02",
          "display_name": "측면 압박",
          "start_delay_seconds": 2,
          "field_phase_id": null,
          "layers": [
            {
              "id": "layer_001",
              "at_seconds": 0,
              "placements": [
                {
                  "id": "placement_001",
                  "monster_id": "cable_worm",
                  "cell": [
                    3,
                    4
                  ]
                },
                {
                  "id": "placement_002",
                  "monster_id": "tire_roller",
                  "cell": [
                    11,
                    3
                  ]
                },
                {
                  "id": "placement_003",
                  "monster_id": "paper_cup_hermit",
                  "cell": [
                    17,
                    4
                  ]
                },
                {
                  "id": "placement_004",
                  "monster_id": "junk_can_pillbug",
                  "cell": [
                    20,
                    8
                  ]
                },
                {
                  "id": "placement_005",
                  "monster_id": "bottlecap_beetle",
                  "cell": [
                    4,
                    12
                  ]
                },
                {
                  "id": "placement_006",
                  "monster_id": "tire_roller",
                  "cell": [
                    21,
                    13
                  ]
                },
                {
                  "id": "placement_007",
                  "monster_id": "paper_cup_hermit",
                  "cell": [
                    5,
                    18
                  ]
                }
              ]
            },
            {
              "id": "layer_002",
              "at_seconds": 8,
              "placements": [
                {
                  "id": "placement_001",
                  "monster_id": "tire_roller",
                  "cell": [
                    9,
                    20
                  ]
                },
                {
                  "id": "placement_002",
                  "monster_id": "cable_worm",
                  "cell": [
                    13,
                    20
                  ]
                },
                {
                  "id": "placement_003",
                  "monster_id": "paper_cup_hermit",
                  "cell": [
                    17,
                    20
                  ]
                },
                {
                  "id": "placement_004",
                  "monster_id": "junk_can_pillbug",
                  "cell": [
                    20,
                    16
                  ]
                },
                {
                  "id": "placement_005",
                  "monster_id": "bottlecap_beetle",
                  "cell": [
                    17,
                    12
                  ]
                },
                {
                  "id": "placement_006",
                  "monster_id": "tire_roller",
                  "cell": [
                    7,
                    10
                  ]
                },
                {
                  "id": "placement_007",
                  "monster_id": "cable_worm",
                  "cell": [
                    6,
                    16
                  ]
                }
              ]
            },
            {
              "id": "layer_003",
              "at_seconds": 16,
              "placements": [
                {
                  "id": "placement_001",
                  "monster_id": "paper_cup_hermit",
                  "cell": [
                    7,
                    7
                  ]
                },
                {
                  "id": "placement_002",
                  "monster_id": "junk_can_pillbug",
                  "cell": [
                    19,
                    7
                  ]
                },
                {
                  "id": "placement_003",
                  "monster_id": "bottlecap_beetle",
                  "cell": [
                    19,
                    14
                  ]
                },
                {
                  "id": "placement_004",
                  "monster_id": "cable_worm",
                  "cell": [
                    8,
                    20
                  ]
                },
                {
                  "id": "placement_005",
                  "monster_id": "whirl_dash_spirit",
                  "cell": [
                    12,
                    10
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "wave_03",
          "display_name": "비행·돌진 혼합",
          "start_delay_seconds": 2,
          "field_phase_id": null,
          "layers": [
            {
              "id": "layer_001",
              "at_seconds": 0,
              "placements": [
                {
                  "id": "placement_001",
                  "monster_id": "bulb_gnat",
                  "cell": [
                    3,
                    5
                  ]
                },
                {
                  "id": "placement_002",
                  "monster_id": "plastic_bag_ghost",
                  "cell": [
                    11,
                    3
                  ]
                },
                {
                  "id": "placement_003",
                  "monster_id": "zipper_centipede",
                  "cell": [
                    17,
                    5
                  ]
                },
                {
                  "id": "placement_004",
                  "monster_id": "scouring_pad_fuzz",
                  "cell": [
                    20,
                    9
                  ]
                },
                {
                  "id": "placement_005",
                  "monster_id": "paper_cup_hermit",
                  "cell": [
                    4,
                    13
                  ]
                },
                {
                  "id": "placement_006",
                  "monster_id": "cable_worm",
                  "cell": [
                    21,
                    13
                  ]
                },
                {
                  "id": "placement_007",
                  "monster_id": "tire_roller",
                  "cell": [
                    5,
                    17
                  ]
                },
                {
                  "id": "placement_008",
                  "monster_id": "bottlecap_beetle",
                  "cell": [
                    10,
                    20
                  ]
                }
              ]
            },
            {
              "id": "layer_002",
              "at_seconds": 8,
              "placements": [
                {
                  "id": "placement_001",
                  "monster_id": "bulb_gnat",
                  "cell": [
                    4,
                    8
                  ]
                },
                {
                  "id": "placement_002",
                  "monster_id": "plastic_bag_ghost",
                  "cell": [
                    20,
                    8
                  ]
                },
                {
                  "id": "placement_003",
                  "monster_id": "zipper_centipede",
                  "cell": [
                    4,
                    16
                  ]
                },
                {
                  "id": "placement_004",
                  "monster_id": "scouring_pad_fuzz",
                  "cell": [
                    20,
                    16
                  ]
                },
                {
                  "id": "placement_005",
                  "monster_id": "paper_cup_hermit",
                  "cell": [
                    13,
                    20
                  ]
                },
                {
                  "id": "placement_006",
                  "monster_id": "grass_vine_monster",
                  "cell": [
                    9,
                    4
                  ]
                },
                {
                  "id": "placement_007",
                  "monster_id": "whirl_dash_spirit",
                  "cell": [
                    16,
                    4
                  ]
                }
              ]
            },
            {
              "id": "layer_003",
              "at_seconds": 17,
              "placements": [
                {
                  "id": "placement_001",
                  "monster_id": "bulb_gnat",
                  "cell": [
                    7,
                    6
                  ]
                },
                {
                  "id": "placement_002",
                  "monster_id": "plastic_bag_ghost",
                  "cell": [
                    19,
                    6
                  ]
                },
                {
                  "id": "placement_003",
                  "monster_id": "zipper_centipede",
                  "cell": [
                    6,
                    18
                  ]
                },
                {
                  "id": "placement_004",
                  "monster_id": "scouring_pad_fuzz",
                  "cell": [
                    17,
                    20
                  ]
                },
                {
                  "id": "placement_005",
                  "monster_id": "fanburst_artillery",
                  "cell": [
                    11,
                    10
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "wave_04",
          "display_name": "중형 패턴 총복습",
          "start_delay_seconds": 2.5,
          "field_phase_id": null,
          "layers": [
            {
              "id": "layer_001",
              "at_seconds": 0,
              "placements": [
                {
                  "id": "placement_001",
                  "monster_id": "junk_can_pillbug",
                  "cell": [
                    3,
                    4
                  ]
                },
                {
                  "id": "placement_002",
                  "monster_id": "bottlecap_beetle",
                  "cell": [
                    11,
                    3
                  ]
                },
                {
                  "id": "placement_003",
                  "monster_id": "cable_worm",
                  "cell": [
                    17,
                    4
                  ]
                },
                {
                  "id": "placement_004",
                  "monster_id": "tire_roller",
                  "cell": [
                    21,
                    9
                  ]
                },
                {
                  "id": "placement_005",
                  "monster_id": "paper_cup_hermit",
                  "cell": [
                    4,
                    13
                  ]
                },
                {
                  "id": "placement_006",
                  "monster_id": "bulb_gnat",
                  "cell": [
                    5,
                    18
                  ]
                },
                {
                  "id": "placement_007",
                  "monster_id": "plastic_bag_ghost",
                  "cell": [
                    15,
                    20
                  ]
                },
                {
                  "id": "placement_008",
                  "monster_id": "grass_vine_monster",
                  "cell": [
                    20,
                    13
                  ]
                },
                {
                  "id": "placement_009",
                  "monster_id": "whirl_dash_spirit",
                  "cell": [
                    10,
                    9
                  ]
                }
              ]
            },
            {
              "id": "layer_002",
              "at_seconds": 9,
              "placements": [
                {
                  "id": "placement_001",
                  "monster_id": "screw_snail",
                  "cell": [
                    4,
                    8
                  ]
                },
                {
                  "id": "placement_002",
                  "monster_id": "zipper_centipede",
                  "cell": [
                    20,
                    8
                  ]
                },
                {
                  "id": "placement_003",
                  "monster_id": "scouring_pad_fuzz",
                  "cell": [
                    4,
                    16
                  ]
                },
                {
                  "id": "placement_004",
                  "monster_id": "bulb_gnat",
                  "cell": [
                    20,
                    16
                  ]
                },
                {
                  "id": "placement_005",
                  "monster_id": "plastic_bag_ghost",
                  "cell": [
                    9,
                    20
                  ]
                },
                {
                  "id": "placement_006",
                  "monster_id": "tire_roller",
                  "cell": [
                    17,
                    20
                  ]
                },
                {
                  "id": "placement_007",
                  "monster_id": "fanburst_artillery",
                  "cell": [
                    10,
                    5
                  ]
                },
                {
                  "id": "placement_008",
                  "monster_id": "stampfoot_leaper",
                  "cell": [
                    18,
                    6
                  ]
                }
              ]
            },
            {
              "id": "layer_003",
              "at_seconds": 19,
              "placements": [
                {
                  "id": "placement_001",
                  "monster_id": "screw_snail",
                  "cell": [
                    7,
                    6
                  ]
                },
                {
                  "id": "placement_002",
                  "monster_id": "zipper_centipede",
                  "cell": [
                    19,
                    6
                  ]
                },
                {
                  "id": "placement_003",
                  "monster_id": "scouring_pad_fuzz",
                  "cell": [
                    3,
                    20
                  ]
                },
                {
                  "id": "placement_004",
                  "monster_id": "paper_cup_hermit",
                  "cell": [
                    13,
                    20
                  ]
                },
                {
                  "id": "placement_005",
                  "monster_id": "plastic_bag_ghost",
                  "cell": [
                    19,
                    14
                  ]
                },
                {
                  "id": "placement_006",
                  "monster_id": "walking_nest",
                  "cell": [
                    9,
                    10
                  ]
                },
                {
                  "id": "placement_007",
                  "monster_id": "fanburst_artillery",
                  "cell": [
                    15,
                    9
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "wave_05",
          "display_name": "과충전 보스전",
          "start_delay_seconds": 3,
          "field_phase_id": "boss_arena",
          "layers": [
            {
              "id": "layer_001",
              "at_seconds": 0,
              "placements": [
                {
                  "id": "placement_001",
                  "monster_id": "overcharge_vendatoad",
                  "cell": [
                    11,
                    11
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
