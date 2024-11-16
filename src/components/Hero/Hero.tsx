"use client";
import { FC, RefObject, useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./Hero.module.scss";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

interface HeroProps {
    className?: string;
    ref: RefObject<HTMLElement>;
}

export const Hero: FC<HeroProps> = ({ className, ref }) => {
    const [layers, setLayers] = useState([]);

    useEffect(() => {
        const LAYERS_COUNT = 17;

        setLayers(Array.from({ length: LAYERS_COUNT }, (_, i) => i + 1));
    }, []);

    return (
        <section
            className={classNames(className, styles.hero)}
            ref={ref}
        >
            <Parallax
                pages={1}
                style={{ top: "0", left: "0" }}
            >
                {layers.map(number => (
                    <ParallaxLayer
                        offset={0}
                        speed={number * 0.5}
                        key={number}
                    >
                        <img
                            className={styles.hero__layer}
                            data-number={number}
                            src={`/img/hero/layer_${number}.svg`}
                        />
                    </ParallaxLayer>
                ))}
            </Parallax>
        </section>
    );
};
