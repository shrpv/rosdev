import { FC } from "react";
import classNames from "classnames";
import styles from "./FooterContacts.module.scss";
import { FOOTER_CONTACTS } from "@/consts/FooterContacts";

interface FooterContactsProps {
    className?: string;
}

export const FooterContacts: FC<FooterContactsProps> = ({ className }) => {
    if (!FOOTER_CONTACTS?.length) return null;

    return (
        <ul className={classNames(className, styles.footerContacts, "listReset")}>
            {FOOTER_CONTACTS.map(({ icon, text, link }) => (
                <li
                    className={styles.footerContacts__item}
                    key={text}
                >
                    <svg
                        className={styles.footerContacts__icon}
                        width="32"
                        height="32"
                        aria-hidden="true"
                        focusable="false"
                    >
                        <use href={`/img/sprite.svg#${icon}`} />
                    </svg>

                    <a
                        className={styles.footerContacts__link}
                        href={link}
                        target="_blank"
                    >
                        {text}
                    </a>
                </li>
            ))}
        </ul>
    );
};
