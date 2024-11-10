import classNames from "classnames";
import styles from "./Main.module.scss";

export const Main = ({ className, children }) => {
    return <main className={classNames(className, styles.main)}>{children}</main>;
};
