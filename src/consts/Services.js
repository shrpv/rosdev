const GRADIENT_HOVER = "linear-gradient(43.37deg, #FFB96D 0%, #FFB96D 100%)";

export const SERVICES = [
    {
        title: "Web разработка",
        images: [
            {
                style: {
                    left: -31,
                    bottom: -53,
                    rotate: 2.69,
                    backgroundImage: "url('/img/services/web/bg_1.svg')",
                    width: 163,
                    height: 163
                }
            },
            {
                style: {
                    right: 18,
                    bottom: -53,
                    backgroundImage: "url('/img/services/web/bg_2.svg')",
                    width: 129,
                    height: 127
                }
            },
            {
                style: {
                    right: 16,
                    bottom: 31,
                    rotate: -56.51,
                    backgroundColor: "var(--color-illustration--yellow)",
                    borderRadius: "50%",
                    width: 44,
                    height: 44
                }
            },
            {
                style: {
                    right: 22,
                    bottom: 38,
                    rotate: 15,
                    backgroundImage: "url('/img/services/web/binary.svg')",
                    width: 32,
                    height: 32
                }
            },
            {
                style: {
                    left: 89,
                    bottom: 61,
                    rotate: 9.07,
                    width: 62,
                    height: 62,
                    borderRadius: "50%"
                },
                variants: {
                    start: {
                        x: 0,
                        y: 0,
                        backgroundImage: "var(--color-illustration--gradient)"
                    },
                    hover: {
                        x: -5,
                        y: -21,
                        backgroundImage: GRADIENT_HOVER
                    }
                }
            },
            {
                style: {
                    left: 99,
                    top: 87,
                    rotate: -30,
                    backgroundImage: "url('/img/services/web/folder-code.svg')",
                    width: 42,
                    height: 42
                }
            }
        ],
        variants: {
            start: {
                x: 0,
                y: 0
            },
            hover: {
                x: -5,
                y: -21
            }
        }
    },
    {
        title: "Mobile разработка",
        images: [
            {
                style: {
                    left: 24,
                    bottom: -47,
                    backgroundImage: "url('/img/services/mobile/bg.svg')",
                    width: 189,
                    height: 173
                },
                variants: {
                    start: {
                        x: 0,
                        y: 0
                    },
                    hover: {
                        x: -7,
                        y: -11
                    }
                }
            },
            {
                style: {
                    left: 43,
                    bottom: 64,
                    borderRadius: 6,
                    width: 68,
                    height: 68
                },
                variants: {
                    start: {
                        x: 0,
                        y: 0,
                        rotate: -20.95,
                        backgroundImage: "var(--color-illustration--gradient)"
                    },
                    hover: {
                        x: -5,
                        y: -21,
                        rotate: 15,
                        backgroundImage: GRADIENT_HOVER
                    }
                }
            },
            {
                style: {
                    left: 54,
                    bottom: 73,
                    backgroundImage: "url('/img/services/mobile/smartphone.svg')",
                    width: 48,
                    height: 48
                },
                variants: {
                    start: {
                        x: 0,
                        y: 0,
                        rotate: 0
                    },
                    hover: {
                        x: -7,
                        y: -22,
                        rotate: 36
                    }
                }
            },
            {
                style: {
                    right: 12,
                    bottom: 40,
                    width: 43,
                    height: 43,
                    backgroundColor: "var(--color-illustration--yellow)",
                    borderRadius: 5
                },
                variants: {
                    start: {
                        x: 0,
                        y: 0,
                        rotate: 36.36
                    },
                    hover: {
                        x: -6,
                        y: -21,
                        rotate: 0
                    }
                }
            },
            {
                style: {
                    right: 18,
                    bottom: 46,
                    backgroundImage: "url('/img/services/mobile/code-xml.svg')",
                    width: 32,
                    height: 32
                },
                variants: {
                    start: {
                        x: 0,
                        y: 0,
                        rotate: 0
                    },
                    hover: {
                        x: -6,
                        y: -21,
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
                    left: 23,
                    top: 72,
                    backgroundImage: "url('/img/services/backend/bg.svg')",
                    transformOrigin: "0 0",
                    width: 216,
                    height: 148
                },
                variants: {
                    start: {
                        x: 0,
                        y: 0,
                        rotate: 0
                    },
                    hover: {
                        x: -25,
                        y: 11,
                        rotate: -11
                    }
                }
            },
            {
                style: {
                    left: 11,
                    bottom: 14,
                    borderRadius: 6,
                    width: 70,
                    height: 70
                },
                variants: {
                    start: {
                        x: 0,
                        y: 0,
                        rotate: -17.65,
                        backgroundImage: "var(--color-illustration--gradient)"
                    },
                    hover: {
                        x: 9,
                        y: -11,
                        rotate: 30.5,
                        backgroundImage: GRADIENT_HOVER
                    }
                }
            },
            {
                style: {
                    left: 22,
                    bottom: 25,
                    backgroundImage: "url('/img/services/backend/database-zap.svg')",
                    width: 48,
                    height: 48
                },
                variants: {
                    start: {
                        x: 0,
                        y: 0,
                        rotate: 0
                    },
                    hover: {
                        x: 9,
                        y: -11,
                        rotate: 17
                    }
                }
            },
            {
                style: {
                    left: 69,
                    top: 59,
                    backgroundColor: "var(--color-illustration--yellow)",
                    borderRadius: "50%"
                },
                variants: {
                    start: {
                        x: 0,
                        y: 0,
                        width: 52,
                        height: 52
                    },
                    hover: {
                        x: 7,
                        y: 5,
                        width: 48,
                        height: 48
                    }
                }
            },
            {
                style: {
                    left: 79,
                    top: 69,
                    backgroundImage: "url('/img/services/backend/hard-drive.svg')",
                    width: 32,
                    height: 32
                },
                variants: {
                    start: {
                        x: 0,
                        y: 0,
                        rotate: 0
                    },
                    hover: {
                        x: 6,
                        y: 3,
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
                    left: 26,
                    top: 105,
                    backgroundImage: "url('/img/services/design/bg_1.svg')",
                    width: 54,
                    height: 165
                },
                variants: {
                    start: {
                        x: 0,
                        y: 0
                    },
                    hover: {
                        x: -6,
                        y: -4
                    }
                }
            },
            {
                style: {
                    left: 114,
                    top: 70,
                    backgroundImage: "url('/img/services/design/bg_2.svg')",
                    width: 26,
                    height: 143
                },
                variants: {
                    start: {
                        x: 0,
                        y: 0
                    },
                    hover: {
                        x: -6,
                        y: 27
                    }
                }
            },
            {
                style: {
                    left: 23,
                    top: 74,
                    borderRadius: "50%",
                    width: 60,
                    height: 60
                },
                variants: {
                    start: {
                        x: 0,
                        y: 0,
                        backgroundImage: "var(--color-illustration--gradient)"
                    },
                    hover: {
                        x: -6,
                        y: -4,
                        backgroundImage: GRADIENT_HOVER
                    }
                }
            },
            {
                style: {
                    left: 29,
                    top: 80,
                    backgroundImage: "url('/img/services/design/figma.svg')",
                    width: 48,
                    height: 48
                },
                variants: {
                    start: {
                        x: 0,
                        y: 0
                    },
                    hover: {
                        x: -6,
                        y: -4
                    }
                }
            },
            {
                style: {
                    left: 103,
                    top: 50,
                    backgroundColor: "var(--color-illustration--yellow)",
                    borderRadius: "50%",
                    width: 44,
                    height: 44
                },
                variants: {
                    start: {
                        x: 0,
                        y: 0
                    },
                    hover: {
                        x: -4,
                        y: 27
                    }
                }
            },
            {
                style: {
                    left: 109,
                    top: 56,
                    backgroundImage: "url('/img/services/design/pen-tool.svg')",
                    width: 32,
                    height: 32
                },
                variants: {
                    start: {
                        x: 0,
                        y: 0
                    },
                    hover: {
                        x: -4,
                        y: 27
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
                    left: -108,
                    top: 171,
                    backgroundImage: "url('/img/services/devoops/bg.svg')",
                    transformOrigin: "100% 100%",
                    width: 293,
                    height: 164
                },
                variants: {
                    start: {
                        x: 0,
                        y: 0,
                        rotate: 38.89
                    },
                    hover: {
                        x: 8,
                        y: -6,
                        rotate: 41.89
                    }
                }
            },
            {
                style: {
                    left: 51,
                    top: 99,
                    borderRadius: "50%"
                },
                variants: {
                    start: {
                        x: 0,
                        y: 0,
                        backgroundImage: "var(--color-illustration--gradient)",
                        width: 62,
                        height: 62
                    },
                    hover: {
                        x: 19,
                        y: -2,
                        width: 48,
                        height: 48,
                        backgroundImage: GRADIENT_HOVER
                    }
                }
            },
            {
                style: {
                    left: 61,
                    top: 109,
                    backgroundImage: "url('/img/services/devoops/brain.svg')",
                    width: 42,
                    height: 42
                },
                variants: {
                    start: {
                        x: 0,
                        y: 0
                    },
                    hover: {
                        x: 12,
                        y: -9
                    }
                }
            },
            {
                style: {
                    left: 141,
                    top: 124,
                    backgroundColor: "var(--color-illustration--yellow)",
                    borderRadius: "50%",
                    width: 43,
                    height: 43
                },
                variants: {
                    start: {
                        x: 0,
                        y: 0
                    },
                    hover: {
                        x: 14,
                        y: -10
                    }
                }
            },
            {
                style: {
                    left: 147,
                    top: 128,
                    backgroundImage: "url('/img/services/devoops/bot.svg')",
                    width: 32,
                    height: 32
                },
                variants: {
                    start: {
                        x: 0,
                        y: 0
                    },
                    hover: {
                        x: 14,
                        y: -10
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
                    left: 53,
                    top: 150,
                    backgroundImage: "url('/img/services/blockchain/bg.svg')",
                    transformOrigin: "100% 0",
                    width: 157,
                    height: 186
                },
                variants: {
                    start: {
                        x: 0,
                        y: 0,
                        rotate: 44.88
                    },
                    hover: {
                        x: -7,
                        y: 15,
                        rotate: 62
                    }
                }
            },
            {
                style: {
                    left: 93,
                    top: 56,
                    borderRadius: 5
                },
                variants: {
                    start: {
                        x: 0,
                        y: 0,
                        rotate: 14.11,
                        width: 60,
                        height: 60,
                        background: "var(--color-bg--tertiary)"
                    },
                    hover: {
                        x: 18,
                        y: -4,
                        rotate: -16,
                        width: 52,
                        height: 52,
                        background: GRADIENT_HOVER
                    }
                }
            },
            {
                style: {
                    left: 102,
                    top: 65,
                    backgroundImage: "url('/img/services/blockchain/circuit-board.svg')",
                    width: 42,
                    height: 42
                },
                variants: {
                    start: {
                        x: 0,
                        y: 0,
                        rotate: -13.28
                    },
                    hover: {
                        x: 14,
                        y: -7,
                        rotate: -25
                    }
                }
            },
            {
                style: {
                    left: 57,
                    top: 145,
                    backgroundColor: "var(--color-illustration--yellow)",
                    borderRadius: "50%"
                },
                variants: {
                    start: {
                        x: 0,
                        y: 0,
                        rotate: 0,
                        width: 42,
                        height: 42
                    },
                    hover: {
                        x: -9,
                        y: -26,
                        rotate: 0,
                        width: 46,
                        height: 46
                    }
                }
            },
            {
                style: {
                    left: 62,
                    top: 150,
                    backgroundImage: "url('/img/services/blockchain/boxes.svg')",
                    width: 32,
                    height: 32
                },
                variants: {
                    start: {
                        x: 0,
                        y: 0,
                        rotate: -13.28
                    },
                    hover: {
                        x: -7,
                        y: -24,
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
                    left: 0,
                    top: 0,
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
                    left: 0,
                    top: 0,
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
                    left: 0,
                    top: 0,
                    borderRadius: "50%",
                    width: 58,
                    height: 58,
                    rotate: 6.57
                },
                variants: {
                    start: {
                        x: 17,
                        y: 118,
                        backgroundImage: "var(--color-illustration--gradient)"
                    },
                    hover: {
                        x: 118,
                        y: 68,
                        backgroundImage: GRADIENT_HOVER
                    }
                }
            },
            {
                style: {
                    left: 0,
                    top: 0,
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
                    left: 0,
                    top: 0,
                    backgroundColor: "var(--color-illustration--yellow)",
                    borderRadius: "50%",
                    rotate: 20.09
                },
                variants: {
                    start: {
                        x: 133,
                        y: 142,
                        width: 47,
                        height: 47
                    },
                    hover: {
                        x: 105,
                        y: 142,
                        width: 53,
                        height: 53
                    }
                }
            },
            {
                style: {
                    left: 0,
                    top: 0,
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
                    left: 0,
                    top: 0,
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
                    left: 0,
                    top: 0,
                    borderRadius: "50%",
                    width: 40,
                    height: 40
                },
                variants: {
                    start: {
                        x: 43,
                        y: 96,
                        background: "var(--color-bg--tertiary)"
                    },
                    hover: {
                        x: 79,
                        y: 54,
                        background: GRADIENT_HOVER
                    }
                }
            },
            {
                style: {
                    left: 0,
                    top: 0,
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
                    left: 0,
                    top: 0,
                    backgroundColor: "var(--color-illustration--yellow)",
                    borderRadius: "50%",
                    width: 54,
                    height: 54
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
                    left: 0,
                    top: 0,
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
                    left: 0,
                    top: 0,
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
                    left: 0,
                    top: 0,
                    borderRadius: 6,
                    width: 40,
                    height: 40
                },
                variants: {
                    start: {
                        x: 26,
                        y: 66,
                        backgroundImage: "var(--color-illustration--gradient)"
                    },
                    hover: {
                        x: 15,
                        y: 116,
                        backgroundImage: GRADIENT_HOVER
                    }
                }
            },
            {
                style: {
                    left: 0,
                    top: 0,
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
                    left: 0,
                    top: 0,
                    backgroundColor: "var(--color-illustration--yellow)",
                    borderRadius: "50%",
                    width: 54,
                    height: 54
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
                    left: 0,
                    top: 0,
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
                    left: 0,
                    top: 0,
                    backgroundImage: "url('/img/services/testing/bg.svg')",
                    transformOrigin: "100% 100%",
                    width: 217,
                    height: 173
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
                    left: 0,
                    top: 0,
                    borderRadius: 6
                },
                variants: {
                    start: {
                        x: 163,
                        y: 105,
                        width: 63,
                        height: 63,
                        rotate: -17.65,
                        backgroundImage: "var(--color-illustration--gradient)"
                    },
                    hover: {
                        x: 185,
                        y: 94,
                        width: 61,
                        height: 61,
                        rotate: 0,
                        backgroundImage: GRADIENT_HOVER
                    }
                }
            },
            {
                style: {
                    left: 0,
                    top: 0,
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
                    left: 0,
                    top: 0,
                    backgroundColor: "var(--color-illustration--yellow)",
                    borderRadius: "50%",
                    rotate: 23.37
                },
                variants: {
                    start: {
                        x: 62,
                        y: 131,
                        width: 52,
                        height: 52
                    },
                    hover: {
                        x: 122,
                        y: 139,
                        width: 47,
                        height: 47
                    }
                }
            },
            {
                style: {
                    left: 0,
                    top: 0,
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
                    left: 0,
                    top: 0,
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
                    left: 0,
                    top: 0,
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
                    left: 0,
                    top: 0,
                    borderRadius: "50%",
                    width: 58,
                    height: 58,
                    rotate: 6.57
                },
                variants: {
                    start: {
                        x: 9,
                        y: 121,
                        backgroundImage: "var(--color-illustration--gradient)"
                    },
                    hover: {
                        x: 65,
                        y: 77,
                        backgroundImage: GRADIENT_HOVER
                    }
                }
            },
            {
                style: {
                    left: 0,
                    top: 0,
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
                    left: 0,
                    top: 0,
                    backgroundColor: "var(--color-illustration--yellow)",
                    borderRadius: "50%"
                },
                variants: {
                    start: {
                        x: 115,
                        y: 139,
                        width: 50,
                        height: 50
                    },
                    hover: {
                        x: 160,
                        y: 108,
                        width: 53,
                        height: 53
                    }
                }
            },
            {
                style: {
                    left: 0,
                    top: 0,
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
