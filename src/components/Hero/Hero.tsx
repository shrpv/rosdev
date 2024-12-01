"use client";
import { useEffect, useLayoutEffect, useState, useRef } from "react";
import classNames from "classnames";
import styles from "./Hero.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Hero = ({ className }) => {
    const [layers, setLayers] = useState([]);
    const imageTargetRef = useRef(null);
    const textTargetRef = useRef(null);
    const triggerRef = useRef(null);
    const timeline = useRef(null);
    
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        timeline.current = gsap.timeline({
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "1 top",
                end: "center top",
                pin: true
            }
        });
        
        timeline.current
            .fromTo(imageTargetRef.current,
                {
                    yPercent: 50,
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
                    opacity: 0,
                },
                {
                    yPercent: 0,
                    opacity: 1,
                });
    }, []);
    
    useEffect(() => {
        const LAYERS_COUNT = 17;
        
        setLayers(Array.from({ length: LAYERS_COUNT }, (_, i) => i + 1));
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
