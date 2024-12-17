"use client";
import Image from "next/image";
import { useState, useRef, forwardRef, useImperativeHandle, useLayoutEffect, useEffect } from "react";
import classNames from "classnames";
import styles from "./Hero.module.scss";

interface HeroProps {
    isLoading: boolean;
    loadingSetter(): void;
    className?: string;
}

export const Hero = forwardRef<HTMLDivElement, HeroProps>(({ isLoading, loadingSetter, className }, forwardedRef) => {
    const [layers] = useState([...Array(17)].map((_, i) => i + 1));
    const triggerRef = useRef(null);
    useImperativeHandle(forwardedRef, () => triggerRef.current);
    
    useLayoutEffect(() => {
        const images = (triggerRef?.current as HTMLDivElement)?.querySelectorAll("img");
        if (images) {
            const imagesPromises = Array.from(images).map((image) =>
                (image as HTMLImageElement).addEventListener("load", () => new Promise<void>((res) => res())));
            
            Promise.all(imagesPromises).then(() => {
                setTimeout(() => {
                    document.body.style.overflowY = "scroll";
                    loadingSetter(false);
                }, 1000);
            });
        }
    }, []);
    
    
    function endAnimation() {
    }
    
    return (
        <section
            className={classNames(className, styles.hero)}
            id="hero"
            ref={triggerRef}
        >
            
            <Image
                width={100}
                height={100}
                className={classNames(styles.hero__img, styles.rocketSmall)}
                src="/img/hero/layer_8.svg"
                alt="Ракета малая"
                loading="lazy"
            />
            
            <Image
                width={100}
                height={100}
                className={classNames(styles.hero__img, styles.spaceshipRight)}
                src="/img/hero/layer_14.svg"
                alt="Летательный аппарат"
                loading="lazy"
            />
            
            <Image
                width={100}
                height={100}
                className={classNames(styles.hero__img, styles.spaceshipLeft)}
                src="/img/hero/layer_13.svg"
                alt="Летательный аппарат"
                loading="lazy"
            />
            
            <Image
                width={100}
                height={100}
                className={classNames(styles.hero__img, styles.logo)}
                src="/img/hero/layer_5.svg"
                alt="Логотип компаниия"
                loading="lazy"
            />
            
            <Image
                width={100}
                height={100}
                className={classNames(
                    styles.hero__img,
                    styles.rocket, {
                        [styles.slide]: !isLoading
                    })}
                src="/img/hero/rocket.svg"
                alt="Взлетающая ракета"
                loading="lazy"
                onAnimationEnd={endAnimation}
            />
            
            <b className={classNames(
                styles.hero__moto, {
                    [styles.slideText]: !isLoading
                })}
            >
                Качество. Технологии. <br />Скорость
            </b>
            
            <Image
                width={100}
                height={100}
                className={classNames(styles.hero__img, styles.overlay)}
                src="/img/hero/layer_17.svg"
                alt="Перекрытие"
                loading="lazy"
            />
        </section>
    );
});
