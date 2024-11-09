import classNames from "classnames";
import styles from "./Clients.module.scss";
import { CLIENTS } from "@/consts/Clients.js";
import { ClientsCard } from "./ClientsCard/ClientsCard";

export const Clients = ({ className }) => {
    if (!CLIENTS?.length) return null;

    return (
        <section className={className}>
            <div className="container">
                <h2 className="visuallyHidden">Наши клиенты</h2>

                <ul className={classNames(styles.clients__list, "listReset")}>
                    {CLIENTS.map(client => (
                        <li
                            className={styles.clients__item}
                            key={client.title}
                        >
                            <ClientsCard
                                className={styles.clients__card}
                                client={client}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
