import classNames from "classnames";
import styles from "./TechnologiesCategory.module.scss";

export const TechnologiesCategory = ({ className, category }) => {
    return (
        <article className={classNames(className, styles.technologiesCategory)}>
            <h3 className={styles.technologiesCategory__title}>{category}</h3>
        </article>
    );
};
