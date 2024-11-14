"use client";

import { FC, useState } from "react";
import classNames from "classnames";
import styles from "./Header.module.scss";
import { ORGANIZER } from "@/consts/Organizer";
import { HeaderNavigation } from "./HeaderNavigation/HeaderNavigation";
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";

interface HeaderProps {
    className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

    return (
        <header
            className={classNames(className, styles.header, {
                [styles.header__opened]: isMenuOpened
            })}
        >
            <div className={classNames(styles.header__container, "container")}>
                <img
                    className={styles.header__logo}
                    src="/img/header/logo.svg"
                    width="120"
                    height="29"
                    alt={ORGANIZER}
                />

                <HeaderNavigation className={styles.header__navigation} />

                {/* <button
                    className={classNames(styles.header__login, "button")}
                    type="button"
                >
                    Войти
                </button> */}

                <HeaderMenu
                    className={styles.header__menu}
                    onClick={() => setIsMenuOpened(prev => !prev)}
                    opened={isMenuOpened}
                />
            </div>
        </header>
    );
};
