"use client";
import Loading from "@/components/Loading/Loading";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./page.module.scss";
import { useInView } from "framer-motion";
import { Hero } from "@/components/Hero/Hero";
import { ScrollToTopButton } from "@/components/Utils/ScrollToTopButton/ScrollToTopButton";
import dynamic from 'next/dynamic';

const options = {
    loading: () => <p>Loading...</p>,
    ssr: false,
    suspense: true,
};

const DynamicAdvantages = dynamic(() => import('@/components/Advantages/Advantages').then((mod) => mod.Advantages), { ...options });
const DynamicPlatforms = dynamic(() => import('@/components/Platforms/Platforms').then((mod) => mod.Platforms), { ...options });
const DynamicServices = dynamic(() => import('@/components/Services/Services').then((mod) => mod.Services), { ...options });
const DynamicTechnologies = dynamic(() => import('@/components/Technologies/Technologies').then((mod) => mod.Technologies), { ...options });
const DynamicClients = dynamic(() => import('@/components/Clients/Clients').then((mod) => mod.Clients), { ...options });
const DynamicReviews = dynamic(() => import('@/components/Reviews/Reviews').then((mod) => mod.Reviews), { ...options });
const DynamicAbout = dynamic(() => import('@/components/About/About').then((mod) => mod.About), { ...options });
const DynamicSlogan = dynamic(() => import('@/components/Slogan/Slogan').then((mod) => mod.Slogan), { ...options });

export default function Page() {
    const [showTopButton, setShowTopButton] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(true);

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
            <Loading isLoading={isLoading} />
            <Hero
                className={styles.home__hero}
                ref={heroRef}
                loadingSetter={setIsLoading}
                isLoading={isLoading}
            />
            
            <DynamicAdvantages className={styles.home__advantages} />
            
            <DynamicPlatforms className={styles.home__platforms} />
            
            <DynamicServices className={styles.home__services} />
            
            <DynamicTechnologies className={styles.home__technologies} />
            
            <DynamicClients className={styles.home__clients} />
            
            <DynamicReviews className={styles.home__reviews} />
            
            <DynamicAbout />
            
            <DynamicSlogan className={styles.home__slogan} />
            
            {
                showTopButton &&
                <ScrollToTopButton className={styles.home__scrollToTopButton} />
            }
        </>
    );
};
