import { useCallback, useEffect, useRef, useState } from "react";
import { useKonami } from "../hooks/useKonami";

export function KonamiEgg() {
    const [on, setOn] = useState(false);
    const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    const unlock = useCallback(() => {
        setOn(true);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setOn(false), 6000);
    }, []);

    useKonami(unlock);
    useEffect(() => () => clearTimeout(timer.current), []);

    if (!on) return null;

    return (
        <>
            <div
                className="fixed top-14 left-1/2 z-[200] font-mono text-xs text-ink"
                style={{
                    transform: "translate(-50%, 0)",
                    background: "#ff4d2e",
                    padding: "10px 18px",
                    borderRadius: 999,
                    letterSpacing: "0.08em",
                    boxShadow: "0 12px 40px rgba(255,77,46,0.4)",
                    animation: "float-up .5s ease",
                }}
            >
                ★ unlocked — coral mode for 6s
            </div>
            <div
                className="fixed inset-0 z-[90] pointer-events-none"
                style={{
                    background: "rgba(255,77,46,0.06)",
                    mixBlendMode: "screen",
                }}
            />
        </>
    );
}
