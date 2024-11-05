"use client";

import classNames from "classnames";
import styles from "./Technologies.module.scss";
import { useState } from "react";
import { TECHNOLOGIES } from "/src/consts/Technologies.js";
import { TechnologiesTabs } from "./TechnologiesTabs/TechnologiesTabs";
import { TechnologiesCard } from "./TechnologiesCard/TechnologiesCard";

export const Technologies = ({ className }) => {
    const [currentTab, setCurrentTab] = useState("web");

    if (!TECHNOLOGIES?.length) return null;

    return (
        <section className={className}>
            <div className="container">
                <h2 className={classNames(styles.technologies__title, "title")}>Технологии</h2>

                <TechnologiesTabs
                    className={styles.technologies__tabs}
                    currentTab={currentTab}
                    onChange={setCurrentTab}
                />

                <ul className={classNames(styles.technologies__list, "listReset")}>
                    {TECHNOLOGIES.map((technology, index) => (
                        <li
                            className={styles.technologies__item}
                            key={index}
                        >
                            <TechnologiesCard
                                className={styles.technologies__card}
                                technology={technology}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
