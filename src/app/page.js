'use client';
import ScrollContext from "@/components/ScrollContext/ScrollContext";
import { Footer } from "@/components/Utils/Footer/Footer";
import { Header } from "@/components/Utils/Header/Header";
import { Main } from "@/components/Utils/Main/Main";
import { useEffect } from "react";
import styles from "./page.module.scss";
import { Hero } from "@/components/Hero/Hero";
import { Advantages } from "@/components/Advantages/Advantages";
import { Platforms } from "@/components/Platforms/Platforms";
import { Services } from "@/components/Services/Services";
import { Technologies } from "@/components/Technologies/Technologies";
import { Clients } from "@/components/Clients/Clients";
import { Reviews } from "@/components/Reviews/Reviews";
import { About } from "@/components/About/About";
import { Slogan } from "@/components/Slogan/Slogan";

export default function Page() {
    useEffect(() => {
        const controller = new AbortController();
        
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default;
                const locomotiveScroll = new LocomotiveScroll();
            }
        )();
        
        return () => controller.abort();
    }, []);
    
    return (
        <ScrollContext>
            
            <Header className="page__header" />
            
            <Main className="page__main">
                <Hero className={styles.home__hero} />
                
                <Advantages className={styles.home__advantages} />
                
                <Platforms className={styles.home__platforms} />
                
                <Services className={styles.home__services} />
                
                <Technologies className={styles.home__technologies} />
                
                <Clients className={styles.home__clients} />
                
                <Reviews className={styles.home__reviews} />
                
                <About />
                
                <Slogan className={styles.home__slogan} />
            </Main>
            
            <Footer className="page__footer" />
        </ScrollContext>
    );
}
