import { FC } from "react";
import classNames from "classnames";
import styles from "./Footer.module.scss";
import { ORGANIZER } from "@/consts/Organizer";
import { Contacts } from "@/components/Utils/Contacts/Contacts";
import { Copyright } from "@/components/Utils/Copyright/Copyright";
import { Location } from "@/components/Utils/Location/Location";

interface FooterProps {
    className?: string;
}

export const Footer: FC<FooterProps> = ({ className }) => {
    return (
        <footer className={classNames(className, styles.footer)}>
            <div className="container">
                <div className={styles.footer__body}>
                    <div className={styles.footer__content}>
                        <img
                            className={styles.footer__logo}
                            src="/img/footer/logo.svg"
                            width="120"
                            height="29"
                            alt={ORGANIZER}
                        />

                        <p className={styles.footer__slogan}>
                            Обсудим <em className="gradientText">Ваш проект</em>
                        </p>
                    </div>

                    <Contacts className={styles.footer__contacts} />
                </div>

                <div className={styles.footer__info}>
                    <Copyright className={styles.footer__copyright} />

                    <Location />
                </div>
            </div>
        </footer>
    );
};
