import { HeaderProps } from "@/components/Utils/Header/model/types";
import { ORGANIZER } from "@/consts/Organizer";
import classNames from "classnames";
import styles from "./Header.module.scss";
import { HeaderNavigation } from "@/components/Utils/Header/ui/HeaderNavigation/HeaderNavigation";

export const Header = ({ className }: HeaderProps) => {
    return (
        <header className={classNames(className, styles.header)} id='header'>
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
