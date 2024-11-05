import classNames from "classnames";
import styles from "./TechnologiesCard.module.scss";

export const TechnologiesCard = ({ className, technology }) => {
    return (
        <article className={classNames(className, styles.technologiesCard)}>
            <div className={styles.technologiesCard__content}>
                <span className={styles.technologiesCard__logo} />

                <h3 className={styles.technologiesCard__title}>{technology.title}</h3>
            </div>
        </article>
    );
};
