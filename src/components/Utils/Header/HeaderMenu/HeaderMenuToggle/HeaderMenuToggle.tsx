import { FC, MouseEventHandler } from "react";
import classNames from "classnames";
import styles from "./HeaderMenuToggle.module.scss";

interface HeaderMenuToggleProps {
    className?: string;
    controlsId: string;
    opened: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export const HeaderMenuToggle: FC<HeaderMenuToggleProps> = ({ className, controlsId, opened, onClick }) => {
    return (
        <button
            className={classNames(className, styles.headerMenuToggle)}
            type="button"
            onClick={onClick}
            aria-controls={controlsId}
            aria-expanded={opened}
            aria-label="Меню"
        >
            <svg
                className={styles.headerMenuToggle__icon}
                width="24"
                height="24"
                focusable="false"
                aria-hidden="true"
            >
                <use
                    className={styles.headerMenuToggle__open}
                    href="/img/sprite.svg#menu"
                />

                <use
                    className={styles.headerMenuToggle__close}
                    href="/img/sprite.svg#close"
                />
            </svg>
        </button>
    );
};
