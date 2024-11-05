"use client";
import classNames from "classnames";
import styles from "./ServicesCard.module.scss";
import { motion } from "framer-motion";

export const ServicesCard = ({ className, service }) => {
    return (
        <motion.article
            className={classNames(className, styles.servicesCard)}
            initial="start"
            whileHover="hover"
            animate="start"
        >
            <h3 className={styles.servicesCard__title}>{service.title}</h3>

            {service.images?.map((image, index) => (
                <motion.span
                    className={styles.servicesCard__image}
                    key={index}
                    style={image.style}
                    variants={image.variants ?? service.variants}
                    transition={{
                        duration: 0.2,
                        ease: "easeOut"
                    }}
                />
            ))}
        </motion.article>
    );
};
