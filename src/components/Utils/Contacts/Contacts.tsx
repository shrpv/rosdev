import { FC } from "react";
import classNames from "classnames";
import styles from "./Contacts.module.scss";
import { ORGANIZER_CONTACTS } from "@/consts/Organizer";

interface ContactsProps {
    className?: string;
}

export const Contacts: FC<ContactsProps> = ({ className }) => {
    if (!ORGANIZER_CONTACTS?.length) return null;

    return (
        <address className={classNames(className, styles.contacts)}>
            <ul className="listReset">
                {ORGANIZER_CONTACTS.map(({ icon, text, link }) => (
                    <li
                        className={styles.contacts__item}
                        key={text}
                    >
                        <svg
                            className={styles.contacts__icon}
                            width="32"
                            height="32"
                            aria-hidden="true"
                            focusable="false"
                        >
                            <use href={`/img/sprite.svg#${icon}`} />
                        </svg>

                        <a
                            className={styles.contacts__link}
                            href={link}
                            target="_blank"
                        >
                            {text}
                        </a>
                    </li>
                ))}
            </ul>
        </address>
    );
};
