"use client";
import { FC } from "react";
import classNames from "classnames";
import styles from "./ClientsCard.module.scss";
import { Client } from "@/consts/Clients";

interface ClientsCardProps {
    className?: string;
    client: Client;
}

export const ClientsCard: FC<ClientsCardProps> = ({ className, client }) => {
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
