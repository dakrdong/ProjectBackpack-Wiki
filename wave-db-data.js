window.PACKBOUND_WAVE_DB = {
  "schema_version": 3,
  "revision": "b63dfd3301b6ebfc",
  "source": "docs/gameplay/stage-wave-definitions.json",
  "runtime_source": "src/ReplicatedStorage/Waves/GeneratedStageWaves.luau",
  "field_count": 1,
  "stage_count": 1,
  "active_stage_count": 1,
  "wave_count": 5,
  "layer_count": 15,
  "spawn_count": 31,
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
      "runtime_field_version": 21,
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
      "map_image_url": "./field-media/junkwind_meadow.png"
    }
  ],
  "stages": [
    {
      "id": "stage_01",
      "display_name": "스테이지 1",
      "enabled": true,
      "description": "고물바람 초원에서 기본 몬스터 조합과 웨이브 진행을 익히는 첫 스테이지",
      "field_id": "junkwind_meadow",
      "waves": [
        {
          "id": "wave_01",
          "display_name": "웨이브 1",
          "start_delay_seconds": 1,
          "layers": [
            {
              "id": "layer_001",
              "at_seconds": 0,
              "placements": [
                {
                  "id": "placement_001",
                  "monster_id": "grass_vine_monster",
                  "cell": [
                    11,
                    13
                  ]
                },
                {
                  "id": "placement_002",
                  "monster_id": "whirl_dash_spirit",
                  "cell": [
                    13,
                    11
                  ]
                },
                {
                  "id": "placement_003",
                  "monster_id": "whirl_dash_spirit",
                  "cell": [
                    10,
                    11
                  ]
                },
                {
                  "id": "placement_004",
                  "monster_id": "grass_vine_monster",
                  "cell": [
                    11,
                    10
                  ]
                },
                {
                  "id": "placement_005",
                  "monster_id": "grass_vine_monster",
                  "cell": [
                    13,
                    9
                  ]
                },
                {
                  "id": "placement_006",
                  "monster_id": "fanburst_artillery",
                  "cell": [
                    13,
                    8
                  ]
                },
                {
                  "id": "placement_007",
                  "monster_id": "fanburst_artillery",
                  "cell": [
                    10,
                    8
                  ]
                },
                {
                  "id": "placement_008",
                  "monster_id": "fanburst_artillery",
                  "cell": [
                    10,
                    6
                  ]
                },
                {
                  "id": "placement_009",
                  "monster_id": "fanburst_artillery",
                  "cell": [
                    13,
                    6
                  ]
                },
                {
                  "id": "placement_010",
                  "monster_id": "stampfoot_leaper",
                  "cell": [
                    14,
                    14
                  ]
                },
                {
                  "id": "placement_011",
                  "monster_id": "stampfoot_leaper",
                  "cell": [
                    11,
                    16
                  ]
                },
                {
                  "id": "placement_012",
                  "monster_id": "stampfoot_leaper",
                  "cell": [
                    7,
                    17
                  ]
                },
                {
                  "id": "placement_013",
                  "monster_id": "stampfoot_leaper",
                  "cell": [
                    4,
                    12
                  ]
                },
                {
                  "id": "placement_014",
                  "monster_id": "walking_nest",
                  "cell": [
                    16,
                    12
                  ]
                },
                {
                  "id": "placement_015",
                  "monster_id": "walking_nest",
                  "cell": [
                    14,
                    8
                  ]
                },
                {
                  "id": "placement_016",
                  "monster_id": "walking_nest",
                  "cell": [
                    15,
                    5
                  ]
                },
                {
                  "id": "placement_017",
                  "monster_id": "walking_nest",
                  "cell": [
                    9,
                    4
                  ]
                }
              ]
            },
            {
              "id": "layer_002",
              "at_seconds": 1,
              "placements": [
                {
                  "id": "placement_001",
                  "monster_id": "grass_vine_monster",
                  "cell": [
                    15,
                    15
                  ]
                }
              ]
            },
            {
              "id": "layer_003",
              "at_seconds": 3,
              "placements": [
                {
                  "id": "placement_001",
                  "monster_id": "grass_vine_monster",
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
          "id": "wave_02",
          "display_name": "웨이브 2",
          "start_delay_seconds": 2,
          "layers": [
            {
              "id": "layer_001",
              "at_seconds": 0,
              "placements": [
                {
                  "id": "placement_001",
                  "monster_id": "whirl_dash_spirit",
                  "cell": [
                    9,
                    15
                  ]
                }
              ]
            },
            {
              "id": "layer_002",
              "at_seconds": 1,
              "placements": [
                {
                  "id": "placement_001",
                  "monster_id": "grass_vine_monster",
                  "cell": [
                    15,
                    15
                  ]
                }
              ]
            },
            {
              "id": "layer_003",
              "at_seconds": 2,
              "placements": [
                {
                  "id": "placement_001",
                  "monster_id": "whirl_dash_spirit",
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
          "id": "wave_03",
          "display_name": "웨이브 3",
          "start_delay_seconds": 2,
          "layers": [
            {
              "id": "layer_001",
              "at_seconds": 0,
              "placements": [
                {
                  "id": "placement_001",
                  "monster_id": "fanburst_artillery",
                  "cell": [
                    17,
                    15
                  ]
                }
              ]
            },
            {
              "id": "layer_002",
              "at_seconds": 1,
              "placements": [
                {
                  "id": "placement_001",
                  "monster_id": "stampfoot_leaper",
                  "cell": [
                    7,
                    13
                  ]
                }
              ]
            },
            {
              "id": "layer_003",
              "at_seconds": 2,
              "placements": [
                {
                  "id": "placement_001",
                  "monster_id": "whirl_dash_spirit",
                  "cell": [
                    13,
                    7
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "wave_04",
          "display_name": "웨이브 4",
          "start_delay_seconds": 2.5,
          "layers": [
            {
              "id": "layer_001",
              "at_seconds": 0,
              "placements": [
                {
                  "id": "placement_001",
                  "monster_id": "walking_nest",
                  "cell": [
                    5,
                    15
                  ]
                }
              ]
            },
            {
              "id": "layer_002",
              "at_seconds": 1,
              "placements": [
                {
                  "id": "placement_001",
                  "monster_id": "fanburst_artillery",
                  "cell": [
                    17,
                    15
                  ]
                }
              ]
            },
            {
              "id": "layer_003",
              "at_seconds": 2,
              "placements": [
                {
                  "id": "placement_001",
                  "monster_id": "stampfoot_leaper",
                  "cell": [
                    15,
                    7
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "wave_05",
          "display_name": "최종 웨이브",
          "start_delay_seconds": 3,
          "layers": [
            {
              "id": "layer_001",
              "at_seconds": 0,
              "placements": [
                {
                  "id": "placement_001",
                  "monster_id": "walking_nest",
                  "cell": [
                    13,
                    17
                  ]
                }
              ]
            },
            {
              "id": "layer_002",
              "at_seconds": 2,
              "placements": [
                {
                  "id": "placement_001",
                  "monster_id": "stampfoot_leaper",
                  "cell": [
                    7,
                    11
                  ]
                }
              ]
            },
            {
              "id": "layer_003",
              "at_seconds": 3,
              "placements": [
                {
                  "id": "placement_001",
                  "monster_id": "fanburst_artillery",
                  "cell": [
                    19,
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
