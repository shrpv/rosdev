import { FC, ReactNode } from "react";
import classNames from "classnames";
import styles from "./Main.module.scss";

interface MainProps {
    className?: string;
    children: ReactNode;
}

export const Main: FC<MainProps> = ({ className, children }) => {
    return <main className={classNames(className, styles.main)}>{children}</main>;
};
