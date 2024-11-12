import { MainProps } from "@/components/Utils/Main/types/types";
import classNames from "classnames";
import { PropsWithChildren } from "react";
import styles from "./Main.module.scss";

export const Main = ({ className, children }: PropsWithChildren<MainProps>) => {
    return <main className={classNames(className, styles.main)} id="main">
        {children}
    </main>;
};
