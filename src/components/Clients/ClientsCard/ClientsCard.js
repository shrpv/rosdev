"use client";
import classNames from "classnames";
import styles from "./ClientsCard.module.scss";

export const ClientsCard = ({ className, client }) => {
    return (
        <article className={classNames(className, styles.clientsCard)}>
            <img
                className={styles.clientsCard__image}
                src={client.logo.url}
                width={client.logo.width}
                height={client.logo.height}
                alt={client.title}
                loading="lazy"
            />
        </article>
    );
};
