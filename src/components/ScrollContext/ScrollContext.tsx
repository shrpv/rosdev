"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Lenis from 'lenis';

const SmoothScrollerContext = createContext(null);

export const useSmoothScroller = () => useContext(SmoothScrollerContext);

interface ScrollContextProps {
    children?: ReactNode;
}

export default function ScrollContext ({ children }: ScrollContextProps) {
    const [lenisRef, setLenis] = useState(null);
    const [rafState, setRaf] = useState(null);
    
    useEffect(() => {
        const scroller = new Lenis();
        let rf;
        
        function raf(time: number) {
            scroller.raf(time);
            requestAnimationFrame(raf);
        }
        
        rf = requestAnimationFrame(raf);
        setRaf(rf);
        setLenis(scroller);
        
        return () => {
            if (lenisRef) {
                cancelAnimationFrame(rafState);
                lenisRef.destroy();
            }
        };
    }, []);
    
    return (
        <SmoothScrollerContext.Provider value={lenisRef}>
            {children}
        </SmoothScrollerContext.Provider>
    );
};
