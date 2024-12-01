"use client";
import { useEffect, useLayoutEffect, useState, useRef } from "react";
import classNames from "classnames";
import styles from "./Hero.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Hero = ({ className }) => {
    const [layers] = useState([...Array(17)].map((_, i) => i + 1));
    const imageTargetRef = useRef(null);
    const textTargetRef = useRef(null);
    const triggerRef = useRef(null);
    const timeline = useRef(null);
    
    useEffect(() => {
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
                    xPercent: 200,
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
                    yPercent: -10,
                }, 0)
            .fromTo("#item11",
                {
                    xPercent: 0,
                    yPercent: 0,
                    scale: 1,
                },
                {
                    xPercent: 3,
                    yPercent: 2,
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
                    yPercent: 1,
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
        
        timeline.current
            .fromTo(imageTargetRef.current,
                {
                    yPercent: 50,
                    delay: 0.3,
                    opacity: 1
                },
                {
                    yPercent: -50,
                    duration: 1,
                    opacity: 1
                })
            .fromTo(textTargetRef.current,
                {
                    yPercent: -10,
                    opacity: 0
                },
                {
                    yPercent: 0,
                    opacity: 1
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
            
            <b className={styles.hero__moto} ref={textTargetRef}>Качество. Технологии. Скорость</b>
        
        </section>
    );
};
