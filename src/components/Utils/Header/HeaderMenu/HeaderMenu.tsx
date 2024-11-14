import { FC, MouseEventHandler } from "react";
import styles from "./HeaderMenu.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { HeaderNavigation } from "../HeaderNavigation/HeaderNavigation";
import { HeaderMenuToggle } from "./HeaderMenuToggle/HeaderMenuToggle";
import { Contacts } from "../../Contacts/Contacts";
import { Copyright } from "../../Copyright/Copyright";
import { Location } from "../../Location/Location";

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
                onClick={onClick}
                opened={opened}
                controlsId={id}
            />

            <motion.div
                className={styles.headerMenu__content}
                id={id}
                initial="closed"
                animate={opened ? "open" : "closed"}
                variants={{
                    open: {
                        display: "block",
                        y: 0
                    },
                    closed: {
                        display: "none",
                        y: "-100%"
                    }
                }}
                transition={{
                    duration: 0.4,
                    ease: "easeOut"
                }}
            >
                <HeaderNavigation className={styles.headerMenu__navigation} />

                <Contacts className={styles.headerMenu__contacts} />

                <Copyright className={styles.headerMenu__copyright} />

                <Location className={styles.headerMenu__location} />
            </motion.div>
        </div>
    );
};
