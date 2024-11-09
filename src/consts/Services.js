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
        title: "DevOps"
    },
    {
        title: "Web3 / Blockchain"
    },
    {
        title: "Внедрение и сопровождение 1С"
    },
    {
        title: "Импортозамещение"
    },
    {
        title: "Аудит и консалтинг"
    },
    {
        title: "Тестирование"
    },
    {
        title: "Продуктовая аналитика"
    }
];
