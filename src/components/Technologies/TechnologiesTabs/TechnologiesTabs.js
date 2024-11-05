import classNames from "classnames";
import styles from "./TechnologiesTabs.module.scss";

export const TechnologiesTabs = ({ className, currentTab, onChange }) => {
    return (
        <fieldset className={classNames(className, styles.technologiesTabs)}>
            <legend className="visuallyHidden">Направление</legend>

            <p className={styles.technologiesTabs__item}>
                <input
                    className={classNames(styles.technologiesTabs__input, "visuallyHidden")}
                    id="technologies-web"
                    type="radio"
                    name="technologies"
                    value="web"
                    checked={currentTab === "web"}
                    onChange={() => onChange("web")}
                />

                <label
                    className={styles.technologiesTabs__label}
                    htmlFor="technologies-web"
                >
                    Web
                </label>
            </p>

            <p className={styles.technologiesTabs__item}>
                <input
                    className={classNames(styles.technologiesTabs__input, "visuallyHidden")}
                    id="technologies-mobile"
                    type="radio"
                    name="technologies"
                    value="mobile"
                    checked={currentTab === "mobile"}
                    onChange={() => onChange("mobile")}
                />

                <label
                    className={styles.technologiesTabs__label}
                    htmlFor="technologies-mobile"
                >
                    Mobile
                </label>
            </p>
        </fieldset>
    );
};
