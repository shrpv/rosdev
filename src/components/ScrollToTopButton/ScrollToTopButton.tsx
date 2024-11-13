import React, { MouseEvent, forwardRef } from "react";
import styles from "./ScrollToTopButton.module.scss";

interface ScrollToTopButtonProps {
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const ScrollToTopButton = forwardRef<HTMLButtonElement, ScrollToTopButtonProps>(({ onClick }, ref) => {
    return (
        <button
            className={styles.scrollButton}
            id="scrollButton"
            ref={ref}
            type="button"
            onClick={onClick}
            aria-label="Проскроллить вверх"
        >
            <svg
                width="24"
                height="24"
                aria-hidden="true"
                focusable="false"
            >
                <use href="/img/sprite.svg#arrow-up" />
            </svg>
        </button>
    );
});
