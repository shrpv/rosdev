"use client";
import { FC } from "react";
import classNames from "classnames";
import styles from "./ServicesCard.module.scss";
import { motion } from "framer-motion";
import { Service } from "@/consts/Services";

interface ServicesCardProps {
    className?: string;
    service: Service;
}

export const ServicesCard: FC<ServicesCardProps> = ({ className, service }) => {
    return (
        <motion.article
            className={classNames(className, styles.servicesCard)}
            initial="start"
            whileHover="hover"
            animate="start"
        >
            <div className={styles.servicesCard__pictures}>
                {service.images?.map((image, index) => (
                    <motion.span
                        className={styles.servicesCard__image}
                        key={index}
                        style={image.style}
                        variants={image.variants}
                        transition={{
                            duration: 0.2,
                            ease: "easeOut"
                        }}
                    />
                ))}
            </div>

            <h3 className={styles.servicesCard__title}>{service.title}</h3>
        </motion.article>
    );
};
