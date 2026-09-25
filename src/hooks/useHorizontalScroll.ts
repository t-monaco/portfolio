import { useEffect, useRef } from "react";

// Pins a section and maps vertical scroll onto a sideways track translate.
// On mobile (<= 760px) or with reduced motion there is no pin: the track
// scrolls natively and the progress bar follows its scrollLeft instead.
export function useHorizontalScroll<
    O extends HTMLElement = HTMLElement,
    T extends HTMLElement = HTMLDivElement,
    B extends HTMLElement = HTMLDivElement,
>() {
    const outerRef = useRef<O>(null);
    const trackRef = useRef<T>(null);
    const barRef = useRef<B>(null);

    useEffect(() => {
        const outer = outerRef.current;
        const track = trackRef.current;
        const bar = barRef.current;
        if (!outer || !track) return;

        const mobile = window.matchMedia("(max-width: 760px)");
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
        const pinned = () => !mobile.matches && !reduced.matches;
        let dist = 0;
        let ticking = false;

        const update = () => {
            let p: number;
            if (pinned()) {
                const range = outer.offsetHeight - window.innerHeight;
                const top = outer.getBoundingClientRect().top;
                p = Math.min(1, Math.max(0, -top / Math.max(1, range)));
                track.style.transform = `translate3d(${-p * dist}px,0,0)`;
            } else {
                p =
                    track.scrollLeft /
                    Math.max(1, track.scrollWidth - track.clientWidth);
            }
            if (bar) bar.style.width = `${p * 100}%`;
        };

        const layout = () => {
            if (pinned()) {
                dist = Math.max(0, track.scrollWidth - window.innerWidth);
                outer.style.height = `${dist + window.innerHeight}px`;
            } else {
                outer.style.height = "";
                track.style.transform = "";
            }
            update();
        };

        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                update();
                ticking = false;
            });
        };

        // Track width shifts as logos/fonts load — re-measure when it does.
        const ro = new ResizeObserver(layout);
        ro.observe(track);
        window.addEventListener("scroll", onScroll, { passive: true });
        track.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", layout);
        mobile.addEventListener("change", layout);
        reduced.addEventListener("change", layout);
        layout();

        return () => {
            ro.disconnect();
            window.removeEventListener("scroll", onScroll);
            track.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", layout);
            mobile.removeEventListener("change", layout);
            reduced.removeEventListener("change", layout);
        };
    }, []);

    return { outerRef, trackRef, barRef };
}
