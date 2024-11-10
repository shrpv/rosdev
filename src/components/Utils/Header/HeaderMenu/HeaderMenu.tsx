import classNames from "classnames";
import styles from "./HeaderMenu.module.scss";

export const HeaderMenu = ({ className, controlsId, opened, onClick }) => {
    return (
        <button
            className={classNames(className, styles.headerMenu)}
            type="button"
            onClick={onClick}
            aria-controls={controlsId}
            aria-expanded={opened}
            aria-label="Меню"
        >
            <svg
                className={styles.headerMenu__icon}
                width="24"
                height="24"
                focusable="false"
                aria-hidden="true"
            >
                <use
                    className={styles.headerMenu__open}
                    href="/img/sprite.svg#menu"
                />

                <use
                    className={styles.headerMenu__close}
                    href="/img/sprite.svg#close"
                />
            </svg>
        </button>
    );
};
