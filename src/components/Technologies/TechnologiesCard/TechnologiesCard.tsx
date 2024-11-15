import { CSSProperties, FC } from "react";
import classNames from "classnames";
import styles from "./TechnologiesCard.module.scss";
import { Technology } from "@/consts/Technologies";

interface TechnologiesCardProps {
    className?: string;
    technology: Technology;
}

export const TechnologiesCard: FC<TechnologiesCardProps> = ({ className, technology }) => {
    return (
        <article className={classNames(className, styles.technologiesCard)}>
            <div className={styles.technologiesCard__content}>
                {technology.logo && (
                    <span
                        className={styles.technologiesCard__logo}
                        style={
                            {
                                "--technology-logo": `url(${technology.logo})`
                            } as CSSProperties
                        }
                    />
                )}

                <h3
                    className={styles.technologiesCard__title}
                    dangerouslySetInnerHTML={{ __html: technology.title }}
                />
            </div>
        </article>
    );
};
