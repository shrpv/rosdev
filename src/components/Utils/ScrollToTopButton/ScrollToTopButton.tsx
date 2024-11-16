import { FC } from "react";
import classNames from "classnames";
import styles from "./ScrollToTopButton.module.scss";

interface ScrollToTopButtonProps {
    className?: string;
    show: boolean;
}

export const ScrollToTopButton: FC<ScrollToTopButtonProps> = ({ className, show }) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <button
            className={classNames(className, styles.scrollToTopButton, {
                [styles.scrollToTopButton_visible]: show
            })}
            onClick={scrollToTop}
            type="button"
            aria-label="Вернуться наверх страницы"
        >
            <svg
                className={styles.scrollToTopButton__icon}
                width="24"
                height="24"
                aria-hidden="true"
                focusable="false"
            >
                <use href="/img/sprite.svg#arrow-up" />
            </svg>
        </button>
    );
};
