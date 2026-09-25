import { useEffect } from "react";

export function useSpotlight() {
    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            const s = document.documentElement.style;
            s.setProperty("--mx", `${e.clientX}px`);
            s.setProperty("--my", `${e.clientY}px`);
        };
        window.addEventListener("mousemove", onMove, { passive: true });
        return () => window.removeEventListener("mousemove", onMove);
    }, []);
}
