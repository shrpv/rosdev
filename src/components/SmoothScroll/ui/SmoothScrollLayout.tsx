"use client";
import { Footer } from "@/components/Utils/Footer/Footer";
import { Header } from "@/components/Utils/Header/ui/Header";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { useEffect, useRef } from "react";
import { ScrollToTopButton } from "../../ScrollToTopButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function SmoothScrollLayout({ children }) {
    const lenisRef = useRef();
    const lenis = useLenis(({ scroll }) => {
    });
    const target = useRef();
    const timeline = useRef();
    
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
        
        // noinspection TypeScriptValidateTypes
        timeline.current = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: '#hero',
                    scrub: true,
                    start: "bottom bottom",
                    snap: {
                        duration: 0.3,
                    }
                }
            }
        );
        
        timeline.current.fromTo(
            target.current,
            { opacity: 0, y: 40, hidden: true },
            { opacity: 1, y: 0, hidden: false },
        );
        
        return () => {
            // noinspection TypeScriptUnresolvedReference
            timeline?.current?.kill();
        }
    }, [])
    
    // noinspection TypeScriptValidateTypes
    return (
        <ReactLenis root
                    ref={lenisRef}
                    autoRaf={false}
                    options={{
                        lerp: 0.02,
                        easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
                        orientation: 'vertical',
                        gestureOrientation: 'vertical',
                        smoothWheel: true,
                        wheelMultiplier: 1,
                        smoothTouch: true,
                        touchMultiplier: 2,
                    }}
        >
            <Header className="page__header" />
            
            {children}
            
            <Footer className="page__footer" />
            <ScrollToTopButton ref={target} onClick={() => {
                lenis.scrollTo("#main", { lerp: 0.02 });
            }} />
        </ReactLenis>
    );
}

export default SmoothScrollLayout;
