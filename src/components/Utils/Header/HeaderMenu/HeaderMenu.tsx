import { FC, MouseEventHandler } from "react";
import styles from "./HeaderMenu.module.scss";
import { HeaderNavigation } from "../HeaderNavigation/HeaderNavigation";
import { HeaderMenuToggle } from "./HeaderMenuToggle/HeaderMenuToggle";
import { Contacts } from "@/components/Utils/Contacts/Contacts";
import { Copyright } from "@/components/Utils/Copyright/Copyright";
import { Location } from "@/components/Utils/Location/Location";

interface HeaderMenuProps {
    className?: string;
    opened: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export const HeaderMenu: FC<HeaderMenuProps> = ({ className, opened, onClick }) => {
    const id = "header-menu";

    return (
        <div className={className}>
            <HeaderMenuToggle
                className={styles.headerMenu__toggle}
                onClick={onClick}
                opened={opened}
                controlsId={id}
            />

            <div
                className={styles.headerMenu__content}
                id={id}
            >
                <HeaderNavigation className={styles.headerMenu__navigation} />

                <Contacts className={styles.headerMenu__contacts} />

                <Copyright className={styles.headerMenu__copyright} />

                <Location className={styles.headerMenu__location} />
            </div>
        </div>
    );
};
