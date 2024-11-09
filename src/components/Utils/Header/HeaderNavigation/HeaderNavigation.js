import classNames from "classnames";
import styles from "./HeaderNavigation.module.scss";
import { HEADER_NAVIGATION } from "@/consts/HeaderNavigation.js";

export const HeaderNavigation = ({ className }) => {
    return (
        <nav className={className}>
            <ul className={classNames(styles.headerNavigation__list, "listReset")}>
                {HEADER_NAVIGATION.map(({ text, link }) => (
                    <li key={text}>
                        <a
                            className={styles.headerNavigation__link}
                            href={link}
                        >
                            {text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
