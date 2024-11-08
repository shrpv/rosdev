import classNames from "classnames";
import styles from "./TechnologiesTabs.module.scss";
import { TECHNOLOGIES } from "/src/consts/Technologies.js";

export const TechnologiesTabs = ({ className, currentTab, onChange }) => {
    return (
        <fieldset className={classNames(className, styles.technologiesTabs)}>
            <legend className="visuallyHidden">Направление</legend>

            {Object.keys(TECHNOLOGIES).map(technology => {
                const id = `technologies-${technology}`;

                return (
                    <p
                        className={styles.technologiesTabs__item}
                        key={technology}
                    >
                        <input
                            className={classNames(styles.technologiesTabs__input, "visuallyHidden")}
                            id={id}
                            type="radio"
                            name="technologies"
                            value={technology}
                            checked={technology === currentTab}
                            onChange={() => onChange(technology)}
                        />

                        <label
                            className={styles.technologiesTabs__label}
                            htmlFor={id}
                        >
                            {technology}
                        </label>
                    </p>
                );
            })}
        </fieldset>
    );
};
