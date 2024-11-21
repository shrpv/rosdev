"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import classNames from "classnames";
import styles from "./Hero.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Hero = ({ className }) => {
    const [layers, setLayers] = useState([]);
    const trigger = useRef();
    const target = useRef();
    const timeline = useRef<GSAPTimeline>(null);

    useEffect(() => {
        const LAYERS_COUNT = 17;

        setLayers(Array.from({ length: LAYERS_COUNT }, (_, i) => i + 1));
    }, []);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        timeline.current = gsap.timeline({
            scrollTrigger: {
                trigger: trigger.current,
                start: "1 top",
                pin: true,
                anticipatePin: 1
            }
        });

        timeline?.current
            .fromTo(
                "#item1",
                {
                    x: 200,
                    opacity: 1
                },
                {
                    x: 400,
                    opacity: 1
                }
            )
            .fromTo(
                target?.current,
                {
                    yPercent: 50,
                    x: "random(-300, 300, 5)",
                    rotate: "random(-5, 5)",
                    opacity: 1
                },
                {
                    yPercent: -110,
                    x: 0,
                    duration: 5,
                    opacity: 1
                }
            )

            .then(res => res.scrollTrigger.disable());

        return () => {
            timeline?.current?.kill();
        };
    }, [target, trigger, timeline]);

    return (
        <section
            className={classNames(className, styles.hero)}
            ref={trigger}
            id="hero"
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
                ref={target}
            />
        </section>
    );
};
