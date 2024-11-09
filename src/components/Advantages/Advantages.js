"use client";
import classNames from "classnames";
import styles from "./Advantages.module.scss";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ADVANTAGES } from "@/consts/Advantages.js";

export const Advantages = ({ className }) => {
    const [currentNumber, setCurrentNumber] = useState(0);

    const DELAY = 2000;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentNumber(currentNumber => (currentNumber === ADVANTAGES.length - 1 ? 0 : currentNumber + 1));
        }, DELAY);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className={classNames(className, styles.advantages)}>
            <span className={styles.advantages__static}>Мы знаем как сделать</span>

            <span className={styles.advantages__dynamic}>
                <AnimatePresence initial={false}>
                    <motion.em
                        className="gradientText"
                        key={currentNumber}
                        initial={{
                            opacity: 0.2,
                            y: "-50%"
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        exit={{
                            opacity: 0,
                            y: "50%"
                        }}
                        transition={{
                            duration: 0.3
                        }}
                    >
                        {ADVANTAGES[currentNumber]}
                    </motion.em>
                </AnimatePresence>
            </span>
        </section>
    );
};
