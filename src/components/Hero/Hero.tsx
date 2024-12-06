"use client";
import { useEffect, useState, useRef, forwardRef, useImperativeHandle } from "react";
import classNames from "classnames";
import styles from "./Hero.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface HeroProps {
    className?: string;
}

export const Hero = forwardRef<HTMLDivElement, HeroProps>(({ className }, forwardedRef) => {
    const [layers] = useState([...Array(17)].map((_, i) => i + 1));
    const imageTargetRef = useRef(null);
    const textTargetRef = useRef(null);
    const triggerRef = useRef(null);
    const timeline = useRef(null);
    useImperativeHandle(forwardedRef, () => triggerRef.current);
    
    useEffect(() => {
        let mm = gsap.matchMedia();
        gsap.registerPlugin(ScrollTrigger);
        
        timeline.current = gsap.timeline({
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "1 top",
                end: "+=200 top",
                pin: true,
                scrub: false,
            }
        });
        
        mm.add("(min-width: 1200px)", () => {
            timeline.current
                .fromTo("#item1",
                    {
                        scale: 1,
                        yPercent: 0,
                        xPercent: 0,
                    },
                    {
                        scale: 0.6,
                        yPercent: 20,
                        xPercent: 40,
                    }, 0)
                .fromTo("#item2",
                    {
                        yPercent: 0,
                    },
                    {
                        yPercent: -2,
                    }, 0)
                .fromTo("#item3",
                    {
                        yPercent: 0,
                    },
                    {
                        yPercent: -3,
                    }, 0)
                .fromTo("#item4",
                    {
                        yPercent: 0,
                    },
                    {
                        yPercent: -3,
                    }, 0)
                .fromTo("#item5",
                    {
                        yPercent: 0,
                    },
                    {
                        yPercent: -15,
                    }, 0)
                .fromTo("#item6",
                    {
                        yPercent: 0,
                    },
                    {
                        yPercent: -10,
                    }, 0)
                .fromTo("#item7",
                    {
                        yPercent: 0,
                    },
                    {
                        yPercent: 10,
                    }, 0)
                .fromTo("#item8",
                    {
                        xPercent: 400,
                        yPercent: -40,
                    },
                    {
                        xPercent: 280,
                        yPercent: -100,
                    }, 0)
                .fromTo("#item9",
                    {
                        scale: 1,
                        xPercent: 0,
                        yPercent: 0,
                    },
                    {
                        scale: 1,
                        xPercent: -5,
                        yPercent: -8,
                    }, 0)
                .fromTo("#item11",
                    {
                        xPercent: 0,
                        yPercent: 0,
                        scale: 1,
                    },
                    {
                        xPercent: 3,
                        yPercent: 3,
                        scale: 0.95,
                    }, 0)
                .fromTo("#item12",
                    {
                        xPercent: 0,
                        yPercent: 0,
                        scale: 1,
                    },
                    {
                        xPercent: 5,
                        yPercent: 3,
                        scale: 0.95,
                    }, 0)
                .fromTo("#item13",
                    {
                        xPercent: 0,
                        yPercent: 0,
                        scale: 1.2,
                    },
                    {
                        xPercent: 50,
                        yPercent: 80,
                        scale: 1,
                    }, 0)
                .fromTo("#item14",
                    {
                        xPercent: 0,
                        yPercent: 0,
                        scale: 1,
                    },
                    {
                        xPercent: -100,
                        yPercent: -220,
                        scale: 1.4,
                    }, 0)
                .fromTo("#item15",
                    {
                        xPercent: 0,
                        scale: 1,
                    },
                    {
                        xPercent: -15,
                        scale: 0.7,
                    }, 0)
                .fromTo("#item16",
                    {
                        xPercent: 0,
                        scale: 1,
                    },
                    {
                        xPercent: -15,
                        yPercent: 12,
                        scale: 0.7,
                    }, 0)
                .fromTo("#item17",
                    {
                        yPercent: 0,
                        scale: 1,
                    },
                    {
                        yPercent: -10,
                        scale: 1.2,
                    }, 0);
            
            return () => {
                const controller = new AbortController();
                controller.abort();
            };
        });
        
        mm.add("(max-width: 1599px)",() => {
            timeline.current
                .fromTo(imageTargetRef.current,
                    {
                        yPercent: 50,
                        delay: 0.3,
                        opacity: 1
                    },
                    {
                        yPercent: -50,
                        duration: 2,
                        opacity: 1
                    })
                .fromTo(textTargetRef.current,
                    {
                        yPercent: -20,
                        opacity: 0
                    },
                    {
                        yPercent: 70,
                        opacity: 1
                    });
            
            return () => {
                const controller = new AbortController();
                controller.abort();
            };
        });
        
        mm.add("(min-width: 1600px)",() => {
            timeline.current
                .fromTo(imageTargetRef.current,
                    {
                        yPercent: 100,
                        delay: 0.3,
                        opacity: 1
                    },
                    {
                        yPercent: -34,
                        duration: 2,
                        opacity: 1
                    })
                .fromTo(textTargetRef.current,
                    {
                        yPercent: -20,
                        opacity: 0
                    },
                    {
                        yPercent: 70,
                        opacity: 1
                    });
            
            return () => {
                const controller = new AbortController();
                controller.abort();
            };
        });
    }, []);
    
    return (
        <section
            className={classNames(className, styles.hero)}
            id="hero"
            ref={triggerRef}
        >
            {layers.map(number => (
                <img
                    className={styles.hero__layer}
                    data-number={number}
                    src={`/img/hero/layer_${number}.svg`}
                    key={number}
                    id={`item${number}`}
                />
            ))}
            
            <img
                className={classNames(styles.hero__img, styles.rocket)}
                src="/img/hero/rocket.svg"
                alt="Взлетающая ракета"
                loading="lazy"
                ref={imageTargetRef}
            />
            
            <b className={styles.hero__moto} ref={textTargetRef}>Качество. Технологии. <br />Скорость</b>
        
        </section>
    );
});
