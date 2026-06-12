import { useEffect, useState } from "react";

export function useScrollProgress() {
    const [pct, setPct] = useState(0);

    useEffect(() => {
        let ticking = false;
        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                const h = document.documentElement;
                const max = h.scrollHeight - h.clientHeight;
                setPct(max > 0 ? (h.scrollTop / max) * 100 : 0);
                ticking = false;
            });
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return pct;
}
