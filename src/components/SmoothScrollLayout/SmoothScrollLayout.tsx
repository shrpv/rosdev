// @ts-nocheck
"use client";
import { FC, ReactNode, useEffect, useRef } from "react";
import { ReactLenis, useLenis, } from "@studio-freight/react-lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Main } from "@/components/Utils/Main/Main";
import { Header } from "@/components/Utils/Header/Header";
import { Footer } from "@/components/Utils/Footer/Footer";
import { ScrollToTopButton } from "@/components/ScrollToTopButton/ScrollToTopButton";

interface SmoothScrollLayoutProps {
    children?: ReactNode;
}

export const SmoothScrollLayout: FC<SmoothScrollLayoutProps> = ({ children }) => {
    const lenisRef = useRef();
    const lenis = useLenis(({ scroll }) => {});
    const target = useRef();
    const timeline = useRef<GSAPTimeline>(null);

    useEffect(() => {
        function update(time) {
            lenisRef.current?.lenis?.raf(time * 1000);
        }

        gsap.ticker.add(update);

        return () => {
            gsap.ticker.remove(update);
        };
    });

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        timeline.current = gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                scrub: true,
                start: "bottom bottom",
                snap: {
                    duration: 0.2
                }
            }
        });

        timeline.current.fromTo(
            target.current,
            { opacity: 0, y: 40, hidden: true },
            { opacity: 1, y: 0, hidden: false }
        );

        return () => {
            timeline?.current?.kill();
        };
    }, []);
    
    return (
        <ReactLenis
            root
            ref={lenisRef}
            autoRaf={false}
            options={{
                lerp: 0.02,
                easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
                orientation: "vertical",
                gestureOrientation: "vertical",
                smoothWheel: true,
                wheelMultiplier: 1,
                smoothTouch: true,
                touchMultiplier: 2
            }}
        >
            <Header className="page__header" />

            <Main className="page__main">{children}</Main>

            <Footer className="page__footer" />

            <ScrollToTopButton
                ref={target}
                onClick={() => {
                    lenis.scrollTo("#main", { lerp: 0.02 });
                }}
            />
        </ReactLenis>
    );
};
