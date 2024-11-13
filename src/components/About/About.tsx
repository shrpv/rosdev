import { FC } from "react";
import classNames from "classnames";
import styles from "./About.module.scss";
import { AboutInfo } from "./AboutInfo/AboutInfo";
import { AboutStatistics } from "./AboutStatistics/AboutStatistics";

interface AboutProps {
    className?: string;
}

export const About: FC<AboutProps> = ({ className }) => {
    return (
        <section className={classNames(className, styles.about)}>
            <div className={classNames(styles.about__container, "container")}>
                <h2 className={classNames(styles.about__title, "title")}>О нас</h2>

                <div className={styles.about__content}>
                    <AboutInfo className={styles.about__info} />

                    <AboutStatistics className={styles.about__statistics} />
                </div>
            </div>
        </section>
    );
};
