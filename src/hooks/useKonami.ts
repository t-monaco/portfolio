import { useEffect } from "react";

const SEQ = [
    "arrowup",
    "arrowup",
    "arrowdown",
    "arrowdown",
    "arrowleft",
    "arrowright",
    "arrowleft",
    "arrowright",
    "b",
    "a",
];

export function useKonami(onUnlock: () => void) {
    useEffect(() => {
        let i = 0;
        const onKey = (e: KeyboardEvent) => {
            const k = e.key.toLowerCase();
            if (k === SEQ[i]) {
                i++;
                if (i === SEQ.length) {
                    i = 0;
                    onUnlock();
                }
            } else {
                i = k === SEQ[0] ? 1 : 0;
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onUnlock]);
}
