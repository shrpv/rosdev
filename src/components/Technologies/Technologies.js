"use client";

import classNames from "classnames";
import styles from "./Technologies.module.scss";
import { useState } from "react";
import "swiper/css";
import { A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { TECHNOLOGIES } from "/src/consts/Technologies.js";
import { TechnologiesTabs } from "./TechnologiesTabs/TechnologiesTabs";
import { TechnologiesCategory } from "./TechnologiesCategory/TechnologiesCategory";
import { TechnologiesCard } from "./TechnologiesCard/TechnologiesCard";

export const Technologies = ({ className }) => {
    const [currentTab, setCurrentTab] = useState("Web");

    return (
        <section className={className}>
            <div className="container">
                <h2 className={classNames(styles.technologies__title, "title")}>Технологии</h2>

                <TechnologiesTabs
                    className={styles.technologies__tabs}
                    currentTab={currentTab}
                    onChange={setCurrentTab}
                />

                <Swiper
                    className={styles.technologies__slider}
                    modules={[A11y]}
                    scrollbar={{ draggable: true }}
                >
                    {Object.entries(TECHNOLOGIES).map(([category, technologies]) => (
                        <SwiperSlide
                            className={styles.reviews__slide}
                            key={category}
                        >
                            <ul className={classNames(styles.technologies__list, "listReset")}>
                                <li
                                    className={styles.technologies__item}
                                    data-number="0"
                                >
                                    <TechnologiesCategory category={category} />
                                </li>

                                {technologies.map((technology, index) => (
                                    <li
                                        className={styles.technologies__item}
                                        key={index}
                                        data-number={index + 1}
                                    >
                                        <TechnologiesCard technology={technology} />
                                    </li>
                                ))}
                            </ul>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};
