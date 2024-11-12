import { FC } from "react";
import classNames from "classnames";
import styles from "./Copyright.module.scss";
import { ORGANIZER } from "@/consts/Organizer";

interface CopyrightProps {
    className?: string;
}

export const Copyright: FC<CopyrightProps> = ({ className }) => {
    const currentYear = new Date().getFullYear();

    return (
        <p className={classNames(className, styles.copyright)}>
            &copy; {ORGANIZER} {currentYear}
        </p>
    );
};
