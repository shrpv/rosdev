import { FC } from "react";
import classNames from "classnames";
import styles from "./TechnologiesCategory.module.scss";
import { TechnologyCategory } from "@/consts/Technologies";

interface TechnologiesCategoryProps {
    className?: string;
    category: TechnologyCategory;
}

export const TechnologiesCategory: FC<TechnologiesCategoryProps> = ({ className, category }) => {
    return (
        <article className={classNames(className, styles.technologiesCategory)}>
            <h3 className={styles.technologiesCategory__title}>{category}</h3>
        </article>
    );
};
