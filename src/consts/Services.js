const GRADIENT_HOVER = "linear-gradient(43.37deg, #FFB96D 0%, #FFB96D 100%)";

export const SERVICES = [
    {
        title: "Web разработка",
        images: [
            {
                style: {
                    backgroundImage: "url('/img/services/web/bg_1.svg')",
                    width: 163,
                    height: 163,
                    rotate: 2.69
                },
                variants: {
                    start: {
                        x: -31,
                        y: 90
                    },
                    hover: {
                        x: -36,
                        y: 69
                    }
                }
            },
            {
                style: {
                    backgroundImage: "url('/img/services/web/bg_2.svg')",
                    width: 129,
                    height: 127
                },
                variants: {
                    start: {
                        x: 70,
                        y: 126
                    },
                    hover: {
                        x: 65,
                        y: 105
                    }
                }
            },
            {
                style: {
                    backgroundColor: "var(--color-illustration--yellow)",
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    rotate: -56.51
                },
                variants: {
                    start: {
                        x: 157,
                        y: 125
                    },
                    hover: {
                        x: 152,
                        y: 104
                    }
                }
            },
            {
                style: {
                    backgroundImage: "url('/img/services/web/binary.svg')",
                    width: 32,
                    height: 32,
                    rotate: 15
                },
                variants: {
                    start: {
                        x: 163,
                        y: 130
                    },
                    hover: {
                        x: 158,
                        y: 109
                    }
                }
            },
            {
                style: {
                    width: 62,
                    height: 62,
                    borderRadius: "50%",
                    rotate: 9.07
                },
                variants: {
                    start: {
                        backgroundImage: "var(--color-illustration--gradient)",
                        x: 89,
                        y: 77
                    },
                    hover: {
                        backgroundImage: GRADIENT_HOVER,
                        x: 84,
                        y: 56
                    }
                }
            },
            {
                style: {
                    backgroundImage: "url('/img/services/web/folder-code.svg')",
                    width: 42,
                    height: 42,
                    rotate: -30
                },
                variants: {
                    start: {
                        x: 99,
                        y: 87
                    },
                    hover: {
                        x: 94,
                        y: 66
                    }
                }
            }
        ]
    },
    {
        title: "Mobile разработка",
        images: [
            {
                style: {
                    backgroundImage: "url('/img/services/mobile/bg.svg')",
                    width: 189,
                    height: 173
                },
                variants: {
                    start: {
                        x: 24,
                        y: 74
                    },
                    hover: {
                        x: 17,
                        y: 63
                    }
                }
            },
            {
                style: {
                    width: 68,
                    height: 68,
                    borderRadius: 6
                },
                variants: {
                    start: {
                        backgroundImage: "var(--color-illustration--gradient)",
                        x: 43,
                        y: 68,
                        rotate: -20.95
                    },
                    hover: {
                        backgroundImage: GRADIENT_HOVER,
                        x: 38,
                        y: 47,
                        rotate: 15
                    }
                }
            },
            {
                style: {
                    backgroundImage: "url('/img/services/mobile/smartphone.svg')",
                    width: 48,
                    height: 48
                },
                variants: {
                    start: {
                        x: 54,
                        y: 79,
                        rotate: 0
                    },
                    hover: {
                        x: 47,
                        y: 57,
                        rotate: 36
                    }
                }
            },
            {
                style: {
                    backgroundColor: "var(--color-illustration--yellow)",
                    width: 43,
                    height: 43,
                    borderRadius: 5
                },
                variants: {
                    start: {
                        x: 161,
                        y: 117,
                        rotate: 36.36
                    },
                    hover: {
                        x: 155,
                        y: 96,
                        rotate: 0
                    }
                }
            },
            {
                style: {
                    backgroundImage: "url('/img/services/mobile/code-xml.svg')",
                    width: 32,
                    height: 32
                },
                variants: {
                    start: {
                        x: 167,
                        y: 122,
                        rotate: 0
                    },
                    hover: {
                        x: 161,
                        y: 99,
                        rotate: -35
                    }
                }
            }
        ]
    },
    {
        title: "Backend разработка",
        images: [
            {
                style: {
                    backgroundImage: "url('/img/services/backend/bg.svg')",
                    width: 216,
                    height: 148,
                    transformOrigin: "0 0"
                },
                variants: {
                    start: {
                        x: 23,
                        y: 72,
                        rotate: 0
                    },
                    hover: {
                        x: -2,
                        y: 83,
                        rotate: -11
                    }
                }
            },
            {
                style: {
                    width: 70,
                    height: 70,
                    borderRadius: 6
                },
                variants: {
                    start: {
                        backgroundImage: "var(--color-illustration--gradient)",
                        x: 11,
                        y: 116,
                        rotate: -17.65
                    },
                    hover: {
                        backgroundImage: GRADIENT_HOVER,
                        x: 20,
                        y: 105,
                        rotate: 30.5
                    }
                }
            },
            {
                style: {
                    backgroundImage: "url('/img/services/backend/database-zap.svg')",
                    width: 48,
                    height: 48
                },
                variants: {
                    start: {
                        x: 22,
                        y: 127,
                        rotate: 0
                    },
                    hover: {
                        x: 31,
                        y: 116,
                        rotate: 17
                    }
                }
            },
            {
                style: {
                    backgroundColor: "var(--color-illustration--yellow)",
                    borderRadius: "50%"
                },
                variants: {
                    start: {
                        width: 52,
                        height: 52,
                        x: 69,
                        y: 59
                    },
                    hover: {
                        width: 48,
                        height: 48,
                        x: 76,
                        y: 64
                    }
                }
            },
            {
                style: {
                    backgroundImage: "url('/img/services/backend/hard-drive.svg')",
                    width: 32,
                    height: 32
                },
                variants: {
                    start: {
                        x: 79,
                        y: 69,
                        rotate: 0
                    },
                    hover: {
                        x: 85,
                        y: 72,
                        rotate: 27
                    }
                }
            }
        ]
    },
    {
        title: "UX/Ui дизайн",
        images: [
            {
                style: {
                    backgroundImage: "url('/img/services/design/bg_1.svg')",
                    width: 54,
                    height: 165
                },
                variants: {
                    start: {
                        x: 26,
                        y: 105
                    },
                    hover: {
                        x: 20,
                        y: 101
                    }
                }
            },
            {
                style: {
                    backgroundImage: "url('/img/services/design/bg_2.svg')",
                    width: 26,
                    height: 143
                },
                variants: {
                    start: {
                        x: 114,
                        y: 70
                    },
                    hover: {
                        x: 108,
                        y: 97
                    }
                }
            },
            {
                style: {
                    borderRadius: "50%",
                    width: 60,
                    height: 60
                },
                variants: {
                    start: {
                        backgroundImage: "var(--color-illustration--gradient)",
                        x: 23,
                        y: 74
                    },
                    hover: {
                        backgroundImage: GRADIENT_HOVER,
                        x: 17,
                        y: 70
                    }
                }
            },
            {
                style: {
                    backgroundImage: "url('/img/services/design/figma.svg')",
                    width: 48,
                    height: 48
                },
                variants: {
                    start: {
                        x: 29,
                        y: 80
                    },
                    hover: {
                        x: 23,
                        y: 76
                    }
                }
            },
            {
                style: {
                    backgroundColor: "var(--color-illustration--yellow)",
                    width: 44,
                    height: 44,
                    borderRadius: "50%"
                },
                variants: {
                    start: {
                        x: 103,
                        y: 50
                    },
                    hover: {
                        x: 99,
                        y: 77
                    }
                }
            },
            {
                style: {
                    backgroundImage: "url('/img/services/design/pen-tool.svg')",
                    width: 32,
                    height: 32
                },
                variants: {
                    start: {
                        x: 109,
                        y: 56
                    },
                    hover: {
                        x: 105,
                        y: 83
                    }
                }
            }
        ]
    },
    {
        title: "DevOps",
        images: [
            {
                style: {
                    backgroundImage: "url('/img/services/devoops/bg.svg')",
                    width: 293,
                    height: 164,
                    transformOrigin: "100% 100%"
                },
                variants: {
                    start: {
                        x: -108,
                        y: 171,
                        rotate: 38.89
                    },
                    hover: {
                        x: -100,
                        y: 165,
                        rotate: 41.89
                    }
                }
            },
            {
                style: {
                    borderRadius: "50%"
                },
                variants: {
                    start: {
                        backgroundImage: "var(--color-illustration--gradient)",
                        width: 62,
                        height: 62,
                        x: 51,
                        y: 99
                    },
                    hover: {
                        backgroundImage: GRADIENT_HOVER,
                        width: 48,
                        height: 48,
                        x: 70,
                        y: 97
                    }
                }
            },
            {
                style: {
                    backgroundImage: "url('/img/services/devoops/brain.svg')",
                    width: 42,
                    height: 42
                },
                variants: {
                    start: {
                        x: 61,
                        y: 109
                    },
                    hover: {
                        x: 73,
                        y: 100
                    }
                }
            },
            {
                style: {
                    backgroundColor: "var(--color-illustration--yellow)",
                    width: 43,
                    height: 43,
                    borderRadius: "50%"
                },
                variants: {
                    start: {
                        x: 141,
                        y: 124
                    },
                    hover: {
                        x: 155,
                        y: 114
                    }
                }
            },
            {
                style: {
                    backgroundImage: "url('/img/services/devoops/bot.svg')",
                    width: 32,
                    height: 32
                },
                variants: {
                    start: {
                        x: 147,
                        y: 128
                    },
                    hover: {
                        x: 161,
                        y: 118
                    }
                }
            }
        ]
    },
    {
        title: "Web3 / Blockchain",
        images: [
            {
                style: {
                    backgroundImage: "url('/img/services/blockchain/bg.svg')",
                    width: 157,
                    height: 186,
                    transformOrigin: "100% 0"
                },
                variants: {
                    start: {
                        x: 53,
                        y: 150,
                        rotate: 44.88
                    },
                    hover: {
                        x: 46,
                        y: 165,
                        rotate: 62
                    }
                }
            },
            {
                style: {
                    borderRadius: 5
                },
                variants: {
                    start: {
                        background: "var(--color-bg--tertiary)",
                        width: 60,
                        height: 60,
                        x: 93,
                        y: 56,
                        rotate: 14.11
                    },
                    hover: {
                        background: GRADIENT_HOVER,
                        width: 52,
                        height: 52,
                        x: 111,
                        y: 52,
                        rotate: -16
                    }
                }
            },
            {
                style: {
                    backgroundImage: "url('/img/services/blockchain/circuit-board.svg')",
                    width: 42,
                    height: 42
                },
                variants: {
                    start: {
                        x: 102,
                        y: 65,
                        rotate: -13.28
                    },
                    hover: {
                        x: 116,
                        y: 58,
                        rotate: -25
                    }
                }
            },
            {
                style: {
                    backgroundColor: "var(--color-illustration--yellow)",
                    borderRadius: "50%"
                },
                variants: {
                    start: {
                        width: 42,
                        height: 42,
                        x: 57,
                        y: 145
                    },
                    hover: {
                        width: 46,
                        height: 46,
                        x: 48,
                        y: 119
                    }
                }
            },
            {
                style: {
                    backgroundImage: "url('/img/services/blockchain/boxes.svg')",
                    width: 32,
                    height: 32
                },
                variants: {
                    start: {
                        x: 62,
                        y: 150,
                        rotate: -13.28
                    },
                    hover: {
                        x: 55,
                        y: 126,
                        rotate: 4
                    }
                }
            }
        ]
    },
    {
        title: "Внедрение и сопровождение 1С",
        images: [
            {
                style: {
                    backgroundImage: "url('/img/services/1c/bg_1.svg')",
                    width: 242,
                    height: 241,
                    rotate: 20.09
                },
                variants: {
                    start: {
                        x: 3,
                        y: -9
                    },
                    hover: {
                        x: 7,
                        y: -13
                    }
                }
            },
            {
                style: {
                    backgroundImage: "url('/img/services/1c/bg_2.svg')",
                    width: 165,
                    height: 163,
                    rotate: 20.09
                },
                variants: {
                    start: {
                        x: 45,
                        y: 98
                    },
                    hover: {
                        x: 48,
                        y: 84
                    }
                }
            },
            {
                style: {
                    width: 58,
                    height: 58,
                    borderRadius: "50%",
                    rotate: 6.57
                },
                variants: {
                    start: {
                        backgroundImage: "var(--color-illustration--gradient)",
                        x: 17,
                        y: 118
                    },
                    hover: {
                        backgroundImage: GRADIENT_HOVER,
                        x: 118,
                        y: 68
                    }
                }
            },
            {
                style: {
                    backgroundImage: "url('/img/services/1c/git-fork.svg')",
                    width: 42,
                    height: 42
                },
                variants: {
                    start: {
                        x: 25,
                        y: 126
                    },
                    hover: {
                        x: 126,
                        y: 77
                    }
                }
            },
            {
                style: {
                    backgroundColor: "var(--color-illustration--yellow)",
                    borderRadius: "50%",
                    rotate: 20.09
                },
                variants: {
                    start: {
                        width: 47,
                        height: 47,
                        x: 133,
                        y: 142
                    },
                    hover: {
                        width: 53,
                        height: 53,
                        x: 105,
                        y: 142
                    }
                }
            },
            {
                style: {
                    backgroundImage: "url('/img/services/1c/settings.svg')",
                    width: 32,
                    height: 32,
                    rotate: 6.57
                },
                variants: {
                    start: {
                        x: 140,
                        y: 150
                    },
                    hover: {
                        x: 115,
                        y: 153
                    }
                }
            }
        ]
    },
    {
        title: "Импортозамещение",
        images: [
            {
                style: {
                    backgroundImage: "url('/img/services/import/bg.svg')",
                    width: 156,
                    height: 155
                },
                variants: {
                    start: {
                        x: 48,
                        y: 54
                    },
                    hover: {
                        x: 38,
                        y: 59
                    }
                }
            },
            {
                style: {
                    borderRadius: "50%",
                    width: 40,
                    height: 40
                },
                variants: {
                    start: {
                        background: "var(--color-bg--tertiary)",
                        x: 43,
                        y: 96
                    },
                    hover: {
                        background: GRADIENT_HOVER,
                        x: 79,
                        y: 54
                    }
                }
            },
            {
                style: {
                    backgroundImage: "url('/img/services/import/orbit.svg')",
                    width: 32,
                    height: 32
                },
                variants: {
                    start: {
                        x: 47,
                        y: 100
                    },
                    hover: {
                        x: 84,
                        y: 58
                    }
                }
            },
            {
                style: {
                    backgroundColor: "var(--color-illustration--yellow)",
                    width: 54,
                    height: 54,
                    borderRadius: "50%"
                },
                variants: {
                    start: {
                        x: 97,
                        y: 104
                    },
                    hover: {
                        x: 87,
                        y: 109
                    }
                }
            },
            {
                style: {
                    backgroundImage: "url('/img/services/import/replace.svg')",
                    width: 42,
                    height: 42
                },
                variants: {
                    start: {
                        x: 103,
                        y: 110
                    },
                    hover: {
                        x: 94,
                        y: 115
                    }
                }
            }
        ]
    },
    {
        title: "Аудит и консалтинг",
        images: [
            {
                style: {
                    backgroundImage: "url('/img/services/audit/bg.svg')",
                    width: 340,
                    height: 215
                },
                variants: {
                    start: {
                        x: -38,
                        y: -6
                    },
                    hover: {
                        x: 2,
                        y: 8
                    }
                }
            },
            {
                style: {
                    width: 40,
                    height: 40,
                    borderRadius: 6
                },
                variants: {
                    start: {
                        backgroundImage: "var(--color-illustration--gradient)",
                        x: 26,
                        y: 66
                    },
                    hover: {
                        backgroundImage: GRADIENT_HOVER,
                        x: 15,
                        y: 116
                    }
                }
            },
            {
                style: {
                    backgroundImage: "url('/img/services/audit/scale.svg')",
                    width: 32,
                    height: 32
                },
                variants: {
                    start: {
                        x: 30,
                        y: 70
                    },
                    hover: {
                        x: 19,
                        y: 120
                    }
                }
            },
            {
                style: {
                    backgroundColor: "var(--color-illustration--yellow)",
                    width: 54,
                    height: 54,
                    borderRadius: "50%"
                },
                variants: {
                    start: {
                        x: 95,
                        y: 123
                    },
                    hover: {
                        x: 90,
                        y: 82
                    }
                }
            },
            {
                style: {
                    backgroundImage: "url('/img/services/audit/chart-network.svg')",
                    width: 42,
                    height: 42
                },
                variants: {
                    start: {
                        x: 101,
                        y: 129
                    },
                    hover: {
                        x: 96,
                        y: 88
                    }
                }
            }
        ]
    },
    {
        title: "Тестирование",
        images: [
            {
                style: {
                    backgroundImage: "url('/img/services/testing/bg.svg')",
                    width: 217,
                    height: 173,
                    transformOrigin: "100% 100%"
                },
                variants: {
                    start: {
                        x: 6,
                        y: -18,
                        rotate: -16.34
                    },
                    hover: {
                        x: 1,
                        y: -20,
                        rotate: -20
                    }
                }
            },
            {
                style: {
                    borderRadius: 6
                },
                variants: {
                    start: {
                        backgroundImage: "var(--color-illustration--gradient)",
                        width: 63,
                        height: 63,
                        x: 163,
                        y: 105,
                        rotate: -17.65
                    },
                    hover: {
                        backgroundImage: GRADIENT_HOVER,
                        width: 61,
                        height: 61,
                        x: 185,
                        y: 94,
                        rotate: 0
                    }
                }
            },
            {
                style: {
                    backgroundImage: "url('/img/services/testing/whole-word.svg')",
                    width: 42,
                    height: 42
                },
                variants: {
                    start: {
                        x: 174,
                        y: 116,
                        rotate: 0
                    },
                    hover: {
                        x: 195,
                        y: 104,
                        rotate: -15
                    }
                }
            },
            {
                style: {
                    backgroundColor: "var(--color-illustration--yellow)",
                    borderRadius: "50%",
                    rotate: 23.37
                },
                variants: {
                    start: {
                        width: 52,
                        height: 52,
                        x: 62,
                        y: 131
                    },
                    hover: {
                        width: 47,
                        height: 47,
                        x: 122,
                        y: 139
                    }
                }
            },
            {
                style: {
                    backgroundImage: "url('/img/services/testing/rocket.svg')",
                    width: 32,
                    height: 32
                },
                variants: {
                    start: {
                        x: 72,
                        y: 140,
                        rotate: 0
                    },
                    hover: {
                        x: 131,
                        y: 145,
                        rotate: -15
                    }
                }
            }
        ]
    },
    {
        title: "Продуктовая аналитика",
        images: [
            {
                style: {
                    backgroundImage: "url('/img/services/analytics/bg_1.svg')",
                    width: 242,
                    height: 241,
                    rotate: 20.09
                },
                variants: {
                    start: {
                        x: -40,
                        y: 6
                    },
                    hover: {
                        x: -32,
                        y: -10
                    }
                }
            },
            {
                style: {
                    backgroundImage: "url('/img/services/analytics/bg_2.svg')",
                    width: 165,
                    height: 163,
                    rotate: 20.09
                },
                variants: {
                    start: {
                        x: 91,
                        y: 75
                    },
                    hover: {
                        x: 99,
                        y: 59
                    }
                }
            },
            {
                style: {
                    width: 58,
                    height: 58,
                    borderRadius: "50%",
                    rotate: 6.57
                },
                variants: {
                    start: {
                        backgroundImage: "var(--color-illustration--gradient)",
                        x: 9,
                        y: 121
                    },
                    hover: {
                        backgroundImage: GRADIENT_HOVER,
                        x: 65,
                        y: 77
                    }
                }
            },
            {
                style: {
                    backgroundImage: "url('/img/services/analytics/chart-pie.svg')",
                    width: 42,
                    height: 42
                },
                variants: {
                    start: {
                        x: 17,
                        y: 129
                    },
                    hover: {
                        x: 74,
                        y: 86
                    }
                }
            },
            {
                style: {
                    backgroundColor: "var(--color-illustration--yellow)",
                    borderRadius: "50%"
                },
                variants: {
                    start: {
                        width: 50,
                        height: 50,
                        x: 115,
                        y: 139
                    },
                    hover: {
                        width: 53,
                        height: 53,
                        x: 160,
                        y: 108
                    }
                }
            },
            {
                style: {
                    backgroundImage: "url('/img/services/analytics/chart-spline.svg')",
                    width: 32,
                    height: 32
                },
                variants: {
                    start: {
                        x: 125,
                        y: 147
                    },
                    hover: {
                        x: 170,
                        y: 119
                    }
                }
            }
        ]
    }
];
