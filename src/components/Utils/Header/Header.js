import classNames from "classnames";
import styles from "./Header.module.scss";
import { ORGANIZER } from "/src/consts/Organizer.js";
import { HeaderNavigation } from "./HeaderNavigation/HeaderNavigation";

export const Header = ({ className }) => {
    return (
        <header className={classNames(className, styles.header)}>
            <div className={classNames(styles.header__container, "container")}>
                <img
                    className={styles.header__logo}
                    src="/img/header/logo.svg"
                    width="120"
                    height="29"
                    alt={ORGANIZER}
                />

                <HeaderNavigation className={styles.header__navigation} />
            </div>
        </header>
    );
};
