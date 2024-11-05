import classNames from "classnames";
import styles from "./Footer.module.scss";
import { ORGANIZER } from "/src/consts/Organizer.js";
import { FooterContacts } from "./FooterContacts/FooterContacts";

export const Footer = ({ className }) => {
    const currentYear = new Date().getFullYear();

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

                    <address className={styles.footer__contacts}>
                        <FooterContacts />
                    </address>
                </div>

                <div className={styles.footer__info}>
                    <div className={styles.footer__copyright}>
                        &copy; {ORGANIZER} {currentYear}
                    </div>

                    <address className={styles.footer__location}>
                        Санкт-Петербург, Невский проспект, д. 28 офис 312
                    </address>
                </div>
            </div>
        </footer>
    );
};
