import { useScrollProgress } from "../hooks/useScrollProgress";
import { useSpotlight } from "../hooks/useSpotlight";

const GRAIN = encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><filter id="n"><feTurbulence baseFrequency="0.9"/></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>'
);

export function Overlays() {
    const pct = useScrollProgress();
    useSpotlight();

    return (
        <>
            {/* Scroll progress */}
            <div
                className="fixed top-0 left-0 h-0.5 z-[100] pointer-events-none"
                style={{
                    width: `${pct}%`,
                    background: "linear-gradient(90deg,#c4f542,#ff4d2e)",
                    boxShadow: "0 0 12px rgba(196,245,66,0.5)",
                }}
            />
            {/* Corner vignettes */}
            <div
                className="fixed pointer-events-none z-0"
                style={{
                    top: -200,
                    right: -200,
                    width: 600,
                    height: 600,
                    background:
                        "radial-gradient(circle, rgba(196,245,66,0.05), transparent 60%)",
                }}
            />
            <div
                className="fixed pointer-events-none z-0"
                style={{
                    bottom: -200,
                    left: -200,
                    width: 500,
                    height: 500,
                    background:
                        "radial-gradient(circle, rgba(255,77,46,0.04), transparent 60%)",
                }}
            />
            {/* Mouse spotlight */}
            <div
                className="fixed inset-0 pointer-events-none z-[1]"
                style={{
                    background:
                        "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), rgba(196,245,66,0.06), transparent 40%)",
                }}
            />
            {/* Grain / noise */}
            <div
                className="fixed inset-0 pointer-events-none z-0"
                style={{
                    opacity: 0.025,
                    mixBlendMode: "overlay",
                    backgroundImage: `url("data:image/svg+xml,${GRAIN}")`,
                }}
            />
        </>
    );
}
