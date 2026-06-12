import { stack } from "../constants";
import { useHeatmap } from "../hooks/useHeatmap";

const cardBase =
    "relative overflow-hidden rounded-3xl border border-line bg-panel transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-line-2";
const mobileMin = "min-h-[240px] md:min-h-0";

function ShippingCard() {
    return (
        <div
            className={`${cardBase} ${mobileMin} flex flex-col justify-between p-7 md:col-span-5 md:row-span-3`}
        >
            <div>
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                    <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{
                            background: "#4ade80",
                            animation: "pulse-dot 2s infinite ease-in-out",
                        }}
                    />
                    CURRENTLY SHIPPING
                </div>
                <h3 className="mb-2.5 mt-[18px] font-display text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-paper">
                    Building things that move fast and look sharp.
                </h3>
                <p className="m-0 max-w-[380px] font-display text-[15px] leading-[1.55] text-muted">
                    React, Next.js, TypeScript, Three.js — modern tooling for
                    products that should feel effortless.
                </p>
            </div>
            <div className="rounded-[10px] border border-[#1a1a1a] bg-ink px-4 py-3.5 font-mono text-xs leading-[1.8] text-muted">
                <div>
                    <span className="text-acid">const</span>{" "}
                    <span className="text-paper">tomas</span>{" "}
                    <span className="text-faint">=</span>{" "}
                    <span className="text-coral">'shipping'</span>
                    <span className="text-faint">;</span>
                </div>
                <div>
                    <span className="text-acid">while</span>{" "}
                    <span className="text-faint">(</span>
                    <span className="text-paper">true</span>
                    <span className="text-faint">)</span>{" "}
                    <span className="text-paper">build</span>
                    <span className="text-faint">();</span>
                </div>
            </div>
            <div
                className="pointer-events-none absolute -right-10 -top-10 h-[180px] w-[180px] rounded-full"
                style={{
                    background:
                        "radial-gradient(circle, rgba(196,245,66,0.12), transparent 70%)",
                    animation: "drift 8s ease-in-out infinite",
                }}
            />
        </div>
    );
}

function DroneCard() {
    return (
        <div
            className={`${cardBase} ${mobileMin} flex flex-col justify-between p-7 md:col-span-4 md:row-span-3`}
            style={{
                background: "linear-gradient(135deg,#0d1f1a 0%,#0a0a0a 100%)",
            }}
        >
            <div className="absolute inset-0 opacity-40">
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 400 400"
                    preserveAspectRatio="xMidYMid slice"
                    className="absolute inset-0"
                >
                    <defs>
                        <radialGradient id="radarGrad">
                            <stop offset="0%" stopColor="#c4f542" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#c4f542" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <circle cx="200" cy="200" r="60" fill="none" stroke="#1f3a2e" strokeWidth="1" />
                    <circle cx="200" cy="200" r="120" fill="none" stroke="#1f3a2e" strokeWidth="1" />
                    <circle cx="200" cy="200" r="180" fill="none" stroke="#1f3a2e" strokeWidth="1" />
                    <line x1="200" y1="20" x2="200" y2="380" stroke="#1f3a2e" strokeWidth="1" />
                    <line x1="20" y1="200" x2="380" y2="200" stroke="#1f3a2e" strokeWidth="1" />
                    <g
                        style={{
                            transformOrigin: "200px 200px",
                            animation: "radar-sweep 4s linear infinite",
                        }}
                    >
                        <path d="M 200 200 L 200 20 A 180 180 0 0 1 360 120 Z" fill="url(#radarGrad)" />
                    </g>
                    <circle cx="200" cy="200" r="3" fill="#c4f542" />
                    <circle cx="135" cy="160" r="2" fill="#ff4d2e" />
                    <circle cx="270" cy="240" r="2" fill="#c4f542" />
                    <circle cx="240" cy="120" r="2" fill="#c4f542" />
                </svg>
            </div>
            <div className="relative z-[2]">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-acid">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="6" cy="6" r="2" />
                        <circle cx="18" cy="6" r="2" />
                        <circle cx="6" cy="18" r="2" />
                        <circle cx="18" cy="18" r="2" />
                        <path d="M8 6h8M6 8v8M18 8v8M8 18h8M9 12l3-3 3 3-3 3z" />
                    </svg>
                    DRONE
                </div>
            </div>
            <div className="relative z-[2]">
                <div className="font-mono text-[11px] leading-[1.7] text-muted">
                    <div>
                        <span className="text-faint">alt:</span>{" "}
                        <span className="text-acid">142m</span>
                    </div>
                    <div>
                        <span className="text-faint">sat:</span>{" "}
                        <span className="text-paper">12 locked</span>
                    </div>
                    <div>
                        <span className="text-faint">vbat:</span>{" "}
                        <span className="text-paper">15.6V</span>
                    </div>
                </div>
                <div className="mt-[18px] font-display text-[22px] font-semibold leading-[1.15] text-paper">
                    Pilot, aerial cinematographer, FPV nerd.
                </div>
            </div>
        </div>
    );
}

function AvatarCard() {
    return (
        <div
            className={`relative flex flex-col justify-end overflow-hidden rounded-3xl border border-line bg-panel transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-acid ${mobileMin} md:col-span-3 md:row-span-3`}
        >
            <div
                className="absolute inset-0"
                style={{
                    background: "linear-gradient(180deg,#1a2515 0%,#0a0a0a 100%)",
                }}
            >
                <svg viewBox="0 0 300 400" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <linearGradient id="avG" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#c4f542" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#c4f542" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <circle cx="150" cy="160" r="80" fill="url(#avG)" />
                    <circle cx="150" cy="160" r="56" fill="none" stroke="#c4f542" strokeWidth="1" strokeDasharray="3 6" opacity="0.6" />
                    <text x="150" y="172" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="64" fill="#c4f542">
                        TM
                    </text>
                    <g opacity="0.5">
                        <circle cx="50" cy="60" r="2" fill="#c4f542" />
                        <circle cx="240" cy="100" r="1.5" fill="#f0eee6" />
                        <circle cx="80" cy="280" r="2" fill="#ff4d2e" />
                        <circle cx="260" cy="300" r="1.5" fill="#c4f542" />
                    </g>
                </svg>
            </div>
            <div
                className="relative z-[2] p-5"
                style={{
                    background:
                        "linear-gradient(0deg, rgba(10,10,10,0.95), transparent)",
                }}
            >
                <div className="font-mono text-[11px] tracking-[0.12em] text-muted">
                    THE HUMAN
                </div>
                <div className="font-display text-[36px] font-bold leading-none tracking-[-0.02em] text-paper">
                    behind it.
                </div>
            </div>
        </div>
    );
}

function SportCard() {
    return (
        <div
            className={`${cardBase} ${mobileMin} flex flex-col justify-between p-[26px] md:col-span-4 md:row-span-2`}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-coral">
                    <span
                        className="inline-block"
                        style={{ animation: "heartbeat 0.9s ease-in-out infinite" }}
                    >
                        ♥
                    </span>
                    THIS WEEK
                </div>
                <div className="font-mono text-[11px] text-faint">avg 154 bpm</div>
            </div>
            <div>
                <div className="mb-1 flex items-baseline gap-3.5">
                    <div className="font-display text-[56px] font-bold leading-none tracking-[-0.03em] text-paper">
                        42.7
                    </div>
                    <div className="font-mono text-xs text-muted">km ran</div>
                    <div className="rounded-full bg-[rgba(255,77,46,0.12)] px-2 py-[3px] font-mono text-[11px] text-coral">
                        +18%
                    </div>
                </div>
                <svg viewBox="0 0 400 80" width="100%" height="40" preserveAspectRatio="none" className="block">
                    <defs>
                        <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#ff4d2e" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#ff4d2e" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M 0 60 L 30 45 L 60 50 L 90 30 L 120 38 L 150 22 L 180 28 L 210 18 L 240 35 L 270 20 L 300 28 L 330 12 L 360 24 L 400 8 L 400 80 L 0 80 Z"
                        fill="url(#spark)"
                    />
                    <path
                        d="M 0 60 L 30 45 L 60 50 L 90 30 L 120 38 L 150 22 L 180 28 L 210 18 L 240 35 L 270 20 L 300 28 L 330 12 L 360 24 L 400 8"
                        fill="none"
                        stroke="#ff4d2e"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </div>
    );
}

function StackCard() {
    return (
        <div
            className={`${cardBase} ${mobileMin} flex flex-col gap-[18px] p-[26px] md:col-span-5 md:row-span-2`}
        >
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                <span className="text-acid">{"{ }"}</span>
                STACK / TOOLS
            </div>
            <div className="flex flex-wrap gap-2">
                {stack.map((chip) => {
                    const cls =
                        chip.accent === "acid"
                            ? "border-[rgba(196,245,66,0.2)] bg-[rgba(196,245,66,0.1)] text-acid"
                            : chip.accent === "coral"
                              ? "border-[rgba(255,77,46,0.2)] bg-[rgba(255,77,46,0.1)] text-coral"
                              : "border-line-2 bg-ink text-paper";
                    return (
                        <span
                            key={chip.label}
                            className={`rounded-full border px-3.5 py-2 font-mono text-[13px] ${cls}`}
                        >
                            {chip.label}
                        </span>
                    );
                })}
            </div>
        </div>
    );
}

function QuoteCard() {
    return (
        <div
            className={`${cardBase} ${mobileMin} flex flex-col justify-between p-9 md:col-span-7 md:row-span-2`}
        >
            <div className="pointer-events-none absolute -top-2.5 left-5 font-serif text-[200px] leading-none text-acid opacity-10">
                "
            </div>
            <blockquote className="relative m-0 max-w-[580px] font-display text-[30px] font-medium leading-[1.2] tracking-[-0.02em] text-paper">
                Build like a{" "}
                <span className="font-serif font-normal italic text-acid">
                    craftsman
                </span>
                , move like an{" "}
                <span className="font-serif font-normal italic text-coral">
                    athlete
                </span>
                , fly like a{" "}
                <span className="font-serif font-normal italic text-acid">
                    pilot
                </span>
                .
            </blockquote>
            <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.1em] text-muted">
                <span className="h-px w-6 bg-acid" />
                PERSONAL.YAML
            </div>
        </div>
    );
}

function HeatmapCard() {
    const cells = useHeatmap();
    return (
        <div
            className={`${cardBase} ${mobileMin} flex flex-col justify-between p-[26px] md:col-span-5 md:row-span-2`}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                    <span className="text-acid">git</span> log --shortlog
                </div>
                <div className="font-display text-[22px] font-semibold text-paper">
                    1,247{" "}
                    <span className="font-mono text-xs font-normal text-muted">
                        commits / year
                    </span>
                </div>
            </div>
            <div
                className="grid h-[90px] gap-[3px]"
                style={{
                    gridTemplateColumns: "repeat(26, 1fr)",
                    gridTemplateRows: "repeat(7, 1fr)",
                }}
            >
                {cells.map((cell, i) => (
                    <div
                        key={i}
                        className="rounded-[3px]"
                        style={{
                            background: cell.color,
                            opacity: 0,
                            animation: "commit-fade 0.4s ease forwards",
                            animationDelay: `${cell.delay}ms`,
                        }}
                    />
                ))}
            </div>
            <div className="flex items-center justify-between font-mono text-[10px] text-faint">
                <span>jan</span>
                <span>apr</span>
                <span>jul</span>
                <span>oct</span>
                <span>now</span>
            </div>
        </div>
    );
}

function LocationCard() {
    return (
        <div
            className={`${cardBase} ${mobileMin} flex flex-col justify-between p-[26px] md:col-span-4 md:row-span-2`}
        >
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c4f542" strokeWidth="2">
                    <path d="M12 2C8 2 5 5 5 9c0 6 7 13 7 13s7-7 7-13c0-4-3-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                </svg>
                BASED IN
            </div>
            <div>
                <div className="font-display text-[38px] font-bold leading-none tracking-[-0.02em] text-paper">
                    Sydney<span className="text-acid">.</span>
                </div>
                <div className="mt-2.5 font-mono text-[11px] text-muted">
                    -33.8688°, 151.2093°
                </div>
            </div>
            <div className="absolute -bottom-5 -right-5 opacity-30">
                <svg width="180" height="180" viewBox="0 0 200 200" fill="none">
                    <circle cx="100" cy="100" r="95" stroke="#c4f542" strokeWidth="0.5" strokeDasharray="2 4" />
                    <circle cx="100" cy="100" r="65" stroke="#c4f542" strokeWidth="0.5" strokeDasharray="2 4" />
                    <circle cx="100" cy="100" r="35" stroke="#c4f542" strokeWidth="0.5" />
                    <circle cx="100" cy="100" r="4" fill="#c4f542" />
                    <circle
                        cx="100"
                        cy="100"
                        r="10"
                        fill="none"
                        stroke="#c4f542"
                        strokeWidth="1"
                        style={{ animation: "pulse-dot 2s infinite" }}
                    />
                </svg>
            </div>
        </div>
    );
}

function NowPlayingCard() {
    return (
        <div
            className={`${cardBase} ${mobileMin} flex flex-col justify-between p-[22px] md:col-span-3 md:row-span-2`}
        >
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-acid">
                <span className="inline-flex h-3 items-end gap-[2px]">
                    {[100, 60, 80].map((h, i) => (
                        <span
                            key={i}
                            className="w-[2px] rounded-[2px] bg-acid"
                            style={{
                                height: `${h}%`,
                                animation: "type-bar 0.8s ease-in-out infinite",
                                animationDelay: `${i * 0.2}s`,
                            }}
                        />
                    ))}
                </span>
                NOW PLAYING
            </div>
            <div>
                <div className="font-display text-[18px] font-semibold leading-[1.2] text-paper">
                    Late-night
                    <br />
                    coding mix
                </div>
                <div className="mt-1.5 font-mono text-[11px] text-muted">
                    — deep house, lo-fi
                </div>
                <div className="mt-3.5 h-[3px] overflow-hidden rounded-[2px] bg-line">
                    <div
                        className="h-full w-[68%] rounded-[2px]"
                        style={{
                            background: "linear-gradient(90deg,#c4f542,#ff4d2e)",
                        }}
                    />
                </div>
                <div className="mt-1.5 flex justify-between font-mono text-[10px] text-faint">
                    <span>2:14</span>
                    <span>3:18</span>
                </div>
            </div>
        </div>
    );
}

export function Bento() {
    return (
        <section id="work" className="mx-auto max-w-[1320px] px-7 py-24">
            <div className="mb-11 flex flex-wrap items-end justify-between gap-6">
                <div>
                    <div className="mb-3.5 font-mono text-xs tracking-[0.15em] text-acid">
                        // 02 — MODULES
                    </div>
                    <h2 className="m-0 font-display text-[clamp(40px,6vw,72px)] font-bold leading-[0.95] tracking-[-0.03em] text-paper">
                        a{" "}
                        <span className="font-serif font-normal italic text-acid">
                            snapshot
                        </span>{" "}
                        of me
                        <br />
                        right now.
                    </h2>
                </div>
                <div className="max-w-[320px] font-mono text-[13px] leading-[1.6] text-muted">
                    assembled from real signals — code, GPS, BPM, kilometres.
                    live data, not a brochure.
                </div>
            </div>

            <div className="grid grid-cols-1 gap-3.5 md:auto-rows-[130px] md:grid-cols-12">
                <ShippingCard />
                <DroneCard />
                <AvatarCard />
                <SportCard />
                <StackCard />
                <QuoteCard />
                <HeatmapCard />
                <LocationCard />
                <NowPlayingCard />
            </div>
        </section>
    );
}
