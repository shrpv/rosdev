import React, { forwardRef } from "react";
import { ScrollToTopButtonProps } from "../model/types";
import styles from './ScrollToTopButton.module.scss';

const ScrollToTopButton = forwardRef<HTMLButtonElement, ScrollToTopButtonProps>(({ onClick, }, ref) => {
    return (
        <button type="button"
                onClick={onClick}
                className={styles.scrollButton}
                ref={ref}
                id="scrollButton"
        >
            Проскроллить вверх
        </button>
    );
});

export default ScrollToTopButton;
