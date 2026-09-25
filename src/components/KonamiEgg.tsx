import { useEffect, useRef } from "react";
import { profile } from "../constants";
import { disarm, useKonami, useKonamiKeys } from "../hooks/useKonami";

const MONO = "'JetBrains Mono', monospace";
const L = "#c4f542";
const C = "#ff4d2e";
const COMPASS: Record<number, string> = {
    0: "N",
    45: "NE",
    90: "E",
    135: "SE",
    180: "S",
    225: "SW",
    270: "W",
    315: "NW",
};

type Flight = {
    mx: number;
    my: number;
    roll: number;
    pitch: number;
    hdg: number;
    alt: number;
    spd: number;
    t0: number;
};

// One HUD frame. Ported from the design reference's egg() draw loop.
function drawHud(
    ctx: CanvasRenderingContext2D,
    s: Flight,
    now: number,
    dpr: number,
    reduced: boolean
) {
    const W = innerWidth;
    const H = innerHeight;
    const cx = W / 2;
    const cy = H / 2;
    const t = (now - s.t0) / 1000;

    const tr = ((s.mx - cx) / cx) * 0.6;
    const tp = ((s.my - cy) / cy) * 30;
    s.roll += (tr - s.roll) * 0.08;
    s.pitch += (tp - s.pitch) * 0.08;
    s.hdg = (s.hdg + s.roll * 1.6 + 360) % 360;
    s.alt += (Math.max(0, 142 - s.pitch * 3) - s.alt) * 0.03;
    s.spd += (38 + Math.abs(s.roll) * 40 + Math.max(0, s.pitch) - s.spd) * 0.05;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    ctx.font = `11px ${MONO}`;
    ctx.lineWidth = 1.2;

    // Horizon + pitch ladder
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(-s.roll);
    ctx.translate(0, s.pitch * 6);
    ctx.strokeStyle = L;
    ctx.fillStyle = L;
    ctx.beginPath();
    ctx.moveTo(-W, 0);
    ctx.lineTo(-90, 0);
    ctx.moveTo(90, 0);
    ctx.lineTo(W, 0);
    ctx.stroke();
    for (let d = -40; d <= 40; d += 10) {
        if (!d) continue;
        const y = -d * 6;
        const w = 70;
        ctx.globalAlpha = 0.55;
        ctx.setLineDash(d < 0 ? [6, 5] : []);
        ctx.beginPath();
        ctx.moveTo(-w - 50, y);
        ctx.lineTo(-50, y);
        ctx.moveTo(50, y);
        ctx.lineTo(w + 50, y);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillText(String(Math.abs(d)), w + 58, y + 4);
        ctx.fillText(String(Math.abs(d)), -w - 76, y + 4);
    }
    ctx.restore();
    ctx.globalAlpha = 1;

    // Fixed crosshair
    ctx.strokeStyle = L;
    ctx.beginPath();
    ctx.arc(cx, cy, 26, 0, Math.PI * 2);
    ctx.moveTo(cx - 60, cy);
    ctx.lineTo(cx - 32, cy);
    ctx.moveTo(cx + 32, cy);
    ctx.lineTo(cx + 60, cy);
    ctx.moveTo(cx, cy - 40);
    ctx.lineTo(cx, cy - 32);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cx, cy, 3, 0, Math.PI * 2);
    ctx.fill();

    // Lock-on brackets following the cursor
    const lk = 18 + (reduced ? 0 : Math.sin(t * 6) * 3);
    ctx.strokeStyle = C;
    ctx.beginPath();
    for (const [a, b] of [
        [-1, -1],
        [1, -1],
        [-1, 1],
        [1, 1],
    ]) {
        ctx.moveTo(s.mx + a * lk, s.my + b * lk - b * 8);
        ctx.lineTo(s.mx + a * lk, s.my + b * lk);
        ctx.lineTo(s.mx + a * lk - a * 8, s.my + b * lk);
    }
    ctx.stroke();
    ctx.fillStyle = C;
    ctx.fillText("LOCK", s.mx + lk + 6, s.my - lk);

    // Compass tape
    ctx.fillStyle = L;
    ctx.strokeStyle = L;
    ctx.textAlign = "center";
    for (let d = -60; d <= 60; d += 5) {
        const h = Math.round(s.hdg / 5) * 5 + d;
        const x = cx + (h - s.hdg) * 5;
        const n = ((h % 360) + 360) % 360;
        ctx.globalAlpha = Math.max(0, 1 - Math.abs(x - cx) / 320);
        ctx.beginPath();
        ctx.moveTo(x, 70);
        ctx.lineTo(x, n % 15 ? 76 : 82);
        ctx.stroke();
        if (n % 45 === 0) ctx.fillText(COMPASS[n], x, 96);
    }
    ctx.globalAlpha = 1;
    ctx.fillText(`${String(Math.round(s.hdg) % 360).padStart(3, "0")}°`, cx, 58);
    ctx.beginPath();
    ctx.moveTo(cx - 5, 64);
    ctx.lineTo(cx + 5, 64);
    ctx.lineTo(cx, 70);
    ctx.fill();

    // SPD / ALT boxes with rolling ticks
    const tape = (
        x: number,
        val: number,
        label: string,
        align: "left" | "right"
    ) => {
        const right = align === "right";
        ctx.textAlign = align;
        ctx.strokeStyle = L;
        ctx.fillStyle = L;
        ctx.strokeRect(right ? x - 64 : x, cy - 14, 64, 28);
        ctx.font = `600 16px ${MONO}`;
        ctx.fillText(val.toFixed(0), right ? x - 8 : x + 8, cy + 6);
        ctx.font = `11px ${MONO}`;
        ctx.fillStyle = "#8a8a8a";
        ctx.fillText(label, right ? x - 8 : x + 8, cy - 22);
        for (let i = -5; i <= 5; i++) {
            if (!i) continue;
            const y = cy + i * 22 + (val % 1) * 22;
            ctx.globalAlpha = 0.5 - Math.abs(i) * 0.08;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(right ? x - 10 : x + 10, y);
            ctx.stroke();
        }
        ctx.globalAlpha = 1;
    };
    tape(Math.max(40, cx - 280), s.spd, "SPD km/h", "left");
    tape(Math.min(W - 40, cx + 280), s.alt, "ALT m", "right");

    // Corner readouts
    const secs = Math.floor(t);
    const rec = `${String(Math.floor(secs / 60)).padStart(2, "0")}:${String(
        secs % 60
    ).padStart(2, "0")}`;
    ctx.textAlign = "left";
    ctx.fillStyle = L;
    ctx.fillText("SAT 12 · GPS LOCK", 28, 40);
    ctx.fillText(profile.coords.replace(/[°,]/g, ""), 28, 56);
    ctx.fillStyle = Math.floor(t * 2) % 2 ? C : "transparent";
    ctx.beginPath();
    ctx.arc(W - 118, 36, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = L;
    ctx.textAlign = "right";
    ctx.fillText(`REC ${rec}`, W - 28, 40);
    const bat = Math.max(0.1, 1 - t / 90);
    ctx.strokeRect(W - 88, 50, 52, 12);
    ctx.fillStyle = bat < 0.3 ? C : L;
    ctx.fillRect(W - 86, 52, 48 * bat, 8);
    ctx.fillStyle = L;
    ctx.fillText(`${(14.2 + bat * 2.6).toFixed(1)}V`, W - 96, 60);
    ctx.textAlign = "left";
    ctx.fillText("MODE: ACRO · T.MONACO", 28, H - 28);

    // Corner brackets
    ctx.strokeStyle = L;
    ctx.globalAlpha = 0.7;
    for (const [x, y, a, b] of [
        [20, 20, 1, 1],
        [W - 20, 20, -1, 1],
        [20, H - 20, 1, -1],
        [W - 20, H - 20, -1, -1],
    ]) {
        ctx.beginPath();
        ctx.moveTo(x, y + b * 24);
        ctx.lineTo(x, y);
        ctx.lineTo(x + a * 24, y);
        ctx.stroke();
    }
    ctx.globalAlpha = 1;
}

function FpvOverlay({ landing }: { landing: boolean }) {
    const rootRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const flashRef = useRef<HTMLDivElement>(null);
    const bannerRef = useRef<HTMLDivElement>(null);
    const flight = useRef<Flight | null>(null);

    // Arm: fade in, flash, banner, then run the HUD loop until unmount.
    useEffect(() => {
        const root = rootRef.current;
        const cv = canvasRef.current;
        const ctx = cv?.getContext("2d");
        if (!root || !cv || !ctx) return;

        const reduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        const dpr = Math.min(2, window.devicePixelRatio || 1);
        const size = () => {
            cv.width = innerWidth * dpr;
            cv.height = innerHeight * dpr;
        };
        size();
        window.addEventListener("resize", size);

        const s: Flight = {
            mx: innerWidth / 2,
            my: innerHeight / 2,
            roll: 0,
            pitch: 0,
            hdg: 90,
            alt: 0,
            spd: 0,
            t0: performance.now(),
        };
        flight.current = s;

        const show = requestAnimationFrame(() => {
            root.style.opacity = "1";
            if (flashRef.current) flashRef.current.style.opacity = "0";
            if (bannerRef.current)
                bannerRef.current.style.transform = "translate(-50%,-50%) scale(1)";
        });
        const hide = setTimeout(() => {
            const b = bannerRef.current;
            if (!b) return;
            b.style.opacity = "0";
            if (!reduced) b.style.transform = "translate(-50%,-50%) scale(.8)";
        }, 900);

        let raf = 0;
        const loop = (now: number) => {
            drawHud(ctx, s, now, dpr, reduced);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(show);
            cancelAnimationFrame(raf);
            clearTimeout(hide);
            window.removeEventListener("resize", size);
        };
    }, []);

    // Land: fade out; the store unmounts us after the transition.
    useEffect(() => {
        if (landing && rootRef.current) rootRef.current.style.opacity = "0";
    }, [landing]);

    const steer = (x: number, y: number) => {
        if (!flight.current) return;
        flight.current.mx = x;
        flight.current.my = y;
    };

    const reduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    return (
        <div
            ref={rootRef}
            role="dialog"
            aria-label="Drone HUD — click or press Escape to land"
            onClick={disarm}
            onMouseMove={(e) => steer(e.clientX, e.clientY)}
            onTouchMove={(e) => steer(e.touches[0].clientX, e.touches[0].clientY)}
            className="fixed inset-0 z-[300] cursor-crosshair opacity-0 transition-opacity duration-[250ms]"
        >
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse at center, rgba(10,20,12,.55) 0%, rgba(5,8,5,.92) 100%)",
                }}
            />
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "repeating-linear-gradient(0deg, rgba(196,245,66,.04) 0 1px, transparent 1px 3px)",
                }}
            />
            <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
            {!reduced && (
                <div
                    ref={flashRef}
                    className="pointer-events-none absolute inset-0 bg-acid opacity-35 transition-opacity duration-500"
                />
            )}
            <div
                ref={bannerRef}
                className="pointer-events-none absolute left-1/2 top-1/2 font-mono text-[clamp(40px,8vw,96px)] font-bold tracking-[0.2em] text-acid transition-all duration-[600ms] ease-[cubic-bezier(.2,.7,.3,1)]"
                style={{
                    transform: `translate(-50%,-50%) scale(${reduced ? 1 : 1.4})`,
                    textShadow: "0 0 30px rgba(196,245,66,.6)",
                }}
            >
                ARMED
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-center font-mono text-[11px] tracking-[0.14em] text-muted">
                MOVE TO FLY · CLICK OR ESC TO LAND
            </div>
        </div>
    );
}

// "Arm the drone": Konami code (or the hero hint button) opens an FPV HUD.
export function KonamiEgg() {
    useKonamiKeys();
    const { phase } = useKonami();
    if (phase === "idle") return null;
    return <FpvOverlay landing={phase === "landing"} />;
}
