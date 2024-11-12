import { FC } from "react";
import classNames from "classnames";
import styles from "./Location.module.scss";
import { ORGANIZER_LOCATION } from "@/consts/Organizer";

interface LocationProps {
    className?: string;
}

export const Location: FC<LocationProps> = ({ className }) => {
    return <p className={classNames(className, styles.location)}>{ORGANIZER_LOCATION}</p>;
};
