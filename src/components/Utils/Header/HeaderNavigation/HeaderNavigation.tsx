import { MouseEvent, FC } from "react";
import classNames from "classnames";
import styles from "./HeaderNavigation.module.scss";
import { HEADER_NAVIGATION } from "@/consts/HeaderNavigation";

interface HeaderNavigationProps {
    className?: string;
}

export const HeaderNavigation: FC<HeaderNavigationProps> = ({ className }) => {
    function linkClickHandler(evt: MouseEvent<HTMLAnchorElement>, elementId: string) {
        evt.preventDefault();
        const element = document.getElementById(elementId);
        if (!element) return;
        return window.scroll({
            top: element.offsetTop - 80,
            behavior: 'smooth'
        });
    }
    
    return (
        <nav className={className}>
            <ul className={classNames(styles.headerNavigation__list, "listReset")}>
                {HEADER_NAVIGATION.map(({ text, link }) => (
                    <li key={text}>
                        <a
                            className={styles.headerNavigation__link}
                            href={`#${link}`}
                            onClick={(evt) => linkClickHandler(evt, link)}
                        >
                            {text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
