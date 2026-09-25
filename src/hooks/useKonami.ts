import { useEffect, useSyncExternalStore } from "react";

export const KONAMI_SEQ = [
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

export const KONAMI_GLYPHS = ["↑", "↑", "↓", "↓", "←", "→", "←", "→", "b", "a"];

// "landing" keeps the overlay mounted while it fades out.
type Phase = "idle" | "armed" | "landing";
type KonamiState = { step: number; phase: Phase };

const LAND_MS = 300;

// Module store: the hero hint (progress + click) and the overlay share it.
let state: KonamiState = { step: 0, phase: "idle" };
const listeners = new Set<() => void>();

function set(next: Partial<KonamiState>) {
    state = { ...state, ...next };
    listeners.forEach((l) => l());
}

function subscribe(l: () => void) {
    listeners.add(l);
    return () => {
        listeners.delete(l);
    };
}

export function arm() {
    if (state.phase !== "idle") return;
    set({ phase: "armed", step: KONAMI_SEQ.length });
}

export function disarm() {
    if (state.phase !== "armed") return;
    set({ phase: "landing", step: 0 });
    setTimeout(() => set({ phase: "idle" }), LAND_MS);
}

export function useKonami() {
    return useSyncExternalStore(subscribe, () => state);
}

// Install once (the overlay owns it). While armed, only Esc does anything.
export function useKonamiKeys() {
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            const k = (e.key || "").toLowerCase();
            if (state.phase !== "idle") {
                if (k === "escape") disarm();
                return;
            }
            let i = state.step;
            if (k === KONAMI_SEQ[i]) {
                i++;
                if (i === KONAMI_SEQ.length) {
                    arm();
                    return;
                }
            } else {
                i = k === KONAMI_SEQ[0] ? 1 : 0;
            }
            if (i !== state.step) set({ step: i });
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);
}
