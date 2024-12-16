"use client";
import Loading from "@/components/Loading/Loading";
import { useEffect, useState, useRef, forwardRef, useImperativeHandle, useLayoutEffect, ReactNode } from "react";
import classNames from "classnames";
import styles from "./Hero.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface HeroProps {
    className?: string;
}

export const Hero = forwardRef<HTMLDivElement, HeroProps>(({ className }, forwardedRef) => {
    const [layers] = useState([...Array(17)].map((_, i) => i + 1));
    const [isLoading, setIsLoading] = useState(true);
    const imageTargetRef = useRef(null);
    const textTargetRef = useRef(null);
    const triggerRef = useRef(null);
    const timeline = useRef(null);
    useImperativeHandle(forwardedRef, () => triggerRef.current);
    
    useLayoutEffect(() => {
        const images = (triggerRef?.current as HTMLDivElement)?.querySelectorAll("img");
        if (images) {
            const imagesPromises = Array.from(images).map((image) =>
                (image as HTMLImageElement).addEventListener("load", () => new Promise<void>((res) => res())));
            
            Promise.all(imagesPromises).then(() => {
                document.documentElement.style.overflowY = 'scroll';
                setIsLoading(false);
            });
        }
    }, []);
    
    useEffect(() => {
        if (!isLoading) {
            
            let mm = gsap.matchMedia();
            gsap.registerPlugin(ScrollTrigger);
            
            timeline.current = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "1 top",
                    end: "+=1",
                    pin: true,
                    scrub: false
                }
            });
            
            mm.add("(min-width: 1200px)", () => {
                timeline.current
                    .fromTo("#item1",
                        {},
                        {
                            scale: 0.6,
                            yPercent: 20,
                            xPercent: 40
                        }, 0)
                    .fromTo("#item2",
                        {},
                        {
                            yPercent: -60
                        }, 0)
                    .fromTo("#item3",
                        {},
                        {
                            yPercent: -3
                        }, 0)
                    .fromTo("#item4",
                        {},
                        {
                            yPercent: -20
                        }, 0)
                    .fromTo("#item5",
                        {},
                        {
                            yPercent: -30
                        }, 0)
                    .fromTo("#item6",
                        {},
                        {
                            yPercent: -56
                        }, 0)
                    .fromTo("#item7",
                        {},
                        {
                            yPercent: -10
                        }, 0)
                    .fromTo("#item8",
                        {},
                        {
                            xPercent: -170,
                            yPercent: -100
                        }, 0)
                    .fromTo("#item9",
                        {},
                        {
                            scale: 1,
                            xPercent: -5,
                            yPercent: -8
                        }, 0)
                    .fromTo("#item11",
                        {},
                        {
                            xPercent: 3,
                            yPercent: 3,
                            scale: 0.95
                        }, 0)
                    .fromTo("#item12",
                        {},
                        {
                            xPercent: 5,
                            yPercent: 3,
                            scale: 0.95
                        }, 0)
                    .fromTo("#item13",
                        {},
                        {
                            xPercent: 50,
                            yPercent: 80,
                            scale: 1
                        }, 0)
                    .fromTo("#item14",
                        {},
                        {
                            xPercent: -100,
                            yPercent: -220,
                            scale: 1.4
                        }, 0)
                    .fromTo("#item15",
                        {},
                        {
                            xPercent: -15,
                            scale: 0.7
                        }, 0)
                    .fromTo("#item16",
                        {},
                        {
                            xPercent: -15,
                            yPercent: 12,
                            scale: 0.7
                        }, 0)
                    .fromTo("#item17",
                        {},
                        {
                            yPercent: -10,
                            scale: 1.2
                        }, 0);
                
                return () => {
                    const controller = new AbortController();
                    controller.abort();
                };
            });
        }
    }, [isLoading]);
    
    return (
        
        <section
            className={classNames(className, styles.hero)}
            id="hero"
            ref={triggerRef}
        >
            {
                isLoading
                    ? <Loading />
                    : (
                        <>
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
                                className={classNames(
                                    styles.hero__img,
                                    styles.rocket, {
                                    [styles.slide]: !isLoading
                                })}
                                src="/img/hero/rocket.svg"
                                alt="Взлетающая ракета"
                                loading="lazy"
                                ref={imageTargetRef}
                            />
                            
                            <b className={classNames(
                                styles.hero__moto, {
                                    [styles.slideText]: !isLoading
                                })}
                               ref={textTargetRef}
                            >
                                Качество. Технологии. <br />Скорость
                            </b>
                        </>
                    )
            }
        </section>
    );
});
