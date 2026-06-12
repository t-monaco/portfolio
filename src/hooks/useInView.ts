import { useEffect, useRef, useState } from "react";

const supported =
    typeof window !== "undefined" && "IntersectionObserver" in window;

export function useInView<T extends HTMLElement = HTMLDivElement>() {
    const ref = useRef<T>(null);
    // Without IntersectionObserver, default to visible (no effect setState needed).
    const [inView, setInView] = useState(!supported);

    useEffect(() => {
        const el = ref.current;
        if (!el || !supported) return;
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setInView(true);
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return { ref, inView };
}
