"use client";
import { FC } from "react";
import classNames from "classnames";
import styles from "./Advantages.module.scss";

interface AdvantagesProps {
    className?: string;
}

export const Advantages: FC<AdvantagesProps> = ({ className }) => {
    return (
        <section className={classNames(className, styles.advantages)}>
            <div className="container">
                <p className={styles.advantages__text}>
                    От идеи до внедрения — <em className="gradientText">качественный IT-аутсорсинг</em>
                </p>
            </div>
        </section>
    );
};
