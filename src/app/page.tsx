"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./page.module.scss";
import { useInView } from "framer-motion";
import { Hero } from "@/components/Hero/Hero";
import { Advantages } from "@/components/Advantages/Advantages";
import { Platforms } from "@/components/Platforms/Platforms";
import { Services } from "@/components/Services/Services";
import { Technologies } from "@/components/Technologies/Technologies";
import { Clients } from "@/components/Clients/Clients";
import { Reviews } from "@/components/Reviews/Reviews";
import { About } from "@/components/About/About";
import { Slogan } from "@/components/Slogan/Slogan";
import { ScrollToTopButton } from "@/components/Utils/ScrollToTopButton/ScrollToTopButton";

export default function Page() {
    const [showTopButton, setShowTopButton] = useState<boolean>(false);

    const heroRef = useRef(null);
    const heroInView = useInView(heroRef);
    
    useLayoutEffect(() => {
        document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    useEffect(() => {
        setShowTopButton(!heroInView);
    }, [heroInView]);

    return (
                <>
                    <Hero
                        className={styles.home__hero}
                        ref={heroRef}
                    />
                    
                    <Advantages className={styles.home__advantages} />
                    
                    <Platforms className={styles.home__platforms} />
                    
                    <Services className={styles.home__services} />
                    
                    <Technologies className={styles.home__technologies} />
                    
                    <Clients className={styles.home__clients} />
                    
                    <Reviews className={styles.home__reviews} />
                    
                    <About />
                    
                    <Slogan className={styles.home__slogan} />
                    
                    {
                        showTopButton &&
                        <ScrollToTopButton className={styles.home__scrollToTopButton} />
                    }
                </>
    );
};
