import { FC } from "react";
import classNames from "classnames";
import styles from "./Services.module.scss";
import { SERVICES } from "@/consts/Services";
import { ServicesCard } from "./ServicesCard/ServicesCard";

interface ServicesProps {
    className?: string;
}

export const Services: FC<ServicesProps> = ({ className }) => {
    if (!SERVICES?.length) return null;

    return (
        <section className={className}>
            <div className="container">
                <h2 className={classNames(styles.services__title, "title")}>Наши услуги</h2>

                <ul className={classNames(styles.services__list, "listReset")}>
                    {SERVICES.map(service => (
                        <li
                            className={styles.services__item}
                            key={service.title}
                        >
                            <ServicesCard
                                className={styles.services__card}
                                service={service}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
