"use client";
import { FC, useState } from "react";
import classNames from "classnames";
import styles from "./Technologies.module.scss";
import { TECHNOLOGIES, Technology, TechnologyCategory } from "@/consts/Technologies";
import { TechnologiesTabs } from "./TechnologiesTabs/TechnologiesTabs";
import { TechnologiesCategory } from "./TechnologiesCategory/TechnologiesCategory";
import { TechnologiesCard } from "./TechnologiesCard/TechnologiesCard";

interface TechnologiesProps {
    className?: string;
}

export const Technologies: FC<TechnologiesProps> = ({ className }) => {
    const [currentTab, setCurrentTab] = useState<TechnologyCategory>("Web");

    return (
        <section className={className}>
            <div className="container">
                <h2 className={classNames(styles.technologies__title, "title")}>Технологии</h2>

                <TechnologiesTabs
                    className={styles.technologies__tabs}
                    currentTab={currentTab}
                    onChange={setCurrentTab}
                />

                <div
                    className={styles.technologies__slider}
                    data-selected={currentTab}
                >
                    {Object.entries(TECHNOLOGIES).map(
                        ([category, technologies]: [TechnologyCategory, Technology[]]) => (
                            <ul
                                className={classNames(styles.technologies__list, "listReset")}
                                key={category}
                            >
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

                                {[1, 2, 3].map(item => (
                                    <li
                                        className={styles.technologies__empty}
                                        key={item}
                                        data-number={item}
                                    />
                                ))}
                            </ul>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};
