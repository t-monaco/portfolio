import { Fragment } from "react";
import { tomas } from "../assets";
import { profile, stack } from "../constants";
import { HEATMAP_COLS, useHeatmap } from "../hooks/useHeatmap";
import { card, cardShell, sectionWrap } from "./classes";

// Mobile: 2-col grid with auto rows. "cell" spans both columns, "half" one.
const cell = "col-span-2 min-h-[200px] md:min-h-0";
const half = "col-span-1 min-h-[220px] md:min-h-0";
const kicker = "font-mono text-[11px] uppercase tracking-[0.12em] text-muted";

const FLOW = ["discover", "design", "build", "measure"];

function ProductCard() {
    return (
        <div
            className={`${card} ${cell} relative flex flex-col justify-between gap-5 overflow-hidden p-7 md:col-span-5 md:row-span-3`}
        >
            <div className="relative z-[1]">
                <div className={`flex items-center gap-2 ${kicker}`}>
                    <span
                        className="h-1.5 w-1.5 rounded-full bg-online"
                        style={{ animation: "pulse-dot 2s infinite ease-in-out" }}
                    />
                    PRODUCT ENGINEERING
                </div>
                <h3 className="mb-2.5 mt-[18px] font-display text-[30px] font-semibold leading-[1.1] tracking-[-0.02em] text-paper">
                    I own the problem, not just the ticket.
                </h3>
                <p className="m-0 max-w-[400px] font-display text-[15px] leading-[1.55] text-muted">
                    Talk to users, sketch in Figma, build it full-stack, then
                    watch what people actually do with it.
                </p>
            </div>
            <div className="relative z-[1] flex flex-wrap items-center gap-1.5 font-mono text-xs">
                {FLOW.map((step, i) => (
                    <Fragment key={step}>
                        <span
                            className={`rounded-full border px-3 py-[7px] ${
                                step === "build"
                                    ? "border-[rgba(196,245,66,0.3)] bg-[rgba(196,245,66,0.1)] text-acid"
                                    : "border-line-2 text-paper"
                            }`}
                        >
                            {step}
                        </span>
                        <span className="text-faint">
                            {i === FLOW.length - 1 ? "↺" : "→"}
                        </span>
                    </Fragment>
                ))}
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
            className={`${card} ${half} relative flex flex-col justify-between overflow-hidden p-6 md:col-span-4 md:row-span-3`}
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
                </svg>
            </div>
            <div className="relative flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-acid">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="6" cy="6" r="2" />
                    <circle cx="18" cy="6" r="2" />
                    <circle cx="6" cy="18" r="2" />
                    <circle cx="18" cy="18" r="2" />
                    <path d="M8 6h8M6 8v8M18 8v8M8 18h8M9 12l3-3 3 3-3 3z" />
                </svg>
                DRONE
            </div>
            <div className="relative">
                <div className="font-mono text-[11px] leading-[1.7] text-muted">
                    <div>
                        <span className="text-faint">alt:</span>{" "}
                        <span className="text-acid">142m</span>
                    </div>
                    <div>
                        <span className="text-faint">sat:</span> 12 locked
                    </div>
                </div>
                <div className="mt-3.5 font-display text-[20px] font-semibold leading-[1.15] text-paper">
                    Pilot, aerial cinematographer, FPV nerd.
                </div>
            </div>
        </div>
    );
}

function HumanCard() {
    return (
        <div
            className={`${cardShell} ${half} relative flex flex-col justify-end overflow-hidden bg-panel hover:border-acid md:col-span-3 md:row-span-3`}
        >
            <img
                src={tomas}
                alt={profile.name}
                className="absolute inset-0 h-full w-full object-cover object-[50%_25%]"
                style={{ filter: "saturate(0.85) contrast(1.05)" }}
            />
            <div className="absolute left-3.5 top-3.5 rounded-full bg-acid px-2 py-1 font-mono text-[10px] tracking-[0.08em] text-ink">
                ● LIVE
            </div>
            <div
                className="relative px-5 pb-5 pt-[60px]"
                style={{
                    background:
                        "linear-gradient(0deg, rgba(10,10,10,0.95), rgba(10,10,10,0))",
                }}
            >
                <div className="font-mono text-[11px] tracking-[0.12em] text-body">
                    TYPE
                </div>
                <div className="font-display text-[34px] font-bold leading-none tracking-[-0.02em] text-paper">
                    human<span className="text-acid">.</span>
                </div>
            </div>
        </div>
    );
}

function StackCard() {
    return (
        <div
            className={`${card} ${cell} flex flex-col justify-between gap-4 p-[26px] md:col-span-7 md:row-span-2`}
        >
            <div className={`flex items-center justify-between gap-3 ${kicker}`}>
                <span>
                    <span className="text-acid">{"{ }"}</span> STACK
                </span>
                <span className="normal-case text-faint">
                    full-stack · FE-leaning
                </span>
            </div>
            <div className="flex flex-wrap gap-2 font-mono text-[13px]">
                {stack.map((chip) => {
                    const cls =
                        chip.accent === "acid"
                            ? "border-[rgba(196,245,66,0.25)] bg-[rgba(196,245,66,0.1)] text-acid"
                            : chip.accent === "coral"
                              ? "border-[rgba(255,77,46,0.25)] bg-[rgba(255,77,46,0.1)] text-coral"
                              : "border-line-2 bg-ink text-paper";
                    return (
                        <span
                            key={chip.label}
                            className={`rounded-full border px-[13px] py-[7px] ${cls}`}
                        >
                            {chip.label}
                        </span>
                    );
                })}
            </div>
        </div>
    );
}

function LocationCard() {
    return (
        <div
            className={`${card} ${cell} relative flex flex-col justify-between overflow-hidden p-[26px] md:col-span-5 md:row-span-2`}
        >
            <div className={`flex items-center gap-2 ${kicker}`}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c4f542" strokeWidth="2">
                    <path d="M12 2C8 2 5 5 5 9c0 6 7 13 7 13s7-7 7-13c0-4-3-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                </svg>
                BASED IN
            </div>
            <div className="relative z-[1]">
                <div className="font-display text-[38px] font-bold leading-none tracking-[-0.02em] text-paper">
                    Sydney<span className="text-acid">.</span>
                </div>
                <div className="mt-2.5 font-mono text-[11px] leading-[1.7] text-muted">
                    buenos aires <span className="text-faint">→</span> madrid{" "}
                    <span className="text-faint">→</span>{" "}
                    <span className="text-acid">sydney</span>
                    <br />
                    <span className="text-faint">{profile.coords}</span>
                </div>
            </div>
            <div className="absolute -bottom-5 -right-5 opacity-30">
                <svg width="170" height="170" viewBox="0 0 200 200" fill="none">
                    <circle cx="100" cy="100" r="95" stroke="#c4f542" strokeWidth="0.5" strokeDasharray="2 4" />
                    <circle cx="100" cy="100" r="65" stroke="#c4f542" strokeWidth="0.5" strokeDasharray="2 4" />
                    <circle cx="100" cy="100" r="35" stroke="#c4f542" strokeWidth="0.5" />
                    <circle cx="100" cy="100" r="4" fill="#c4f542" />
                </svg>
            </div>
        </div>
    );
}

const AI_TOOLS = [
    { name: "claude", use: "thinking partner · specs · code review" },
    { name: "cursor", use: "daily driver IDE · agent mode" },
    { name: "copilot", use: "autocomplete muscle memory" },
];

function AiCard() {
    return (
        <div
            className={`${cardShell} ${cell} flex flex-col overflow-hidden bg-ink-2 hover:border-acid md:col-span-7 md:row-span-3`}
        >
            <div className="flex items-center justify-between gap-3 border-b border-[#1a1a1a] px-5 py-3.5 font-mono text-[11px] text-muted">
                <span className="inline-flex items-center gap-2">
                    <span className="text-acid">✦</span> ai.sh — AI IN THE LOOP
                </span>
                <span className="inline-flex h-3 items-end gap-[2px]">
                    {[0, 0.2, 0.4].map((d) => (
                        <span
                            key={d}
                            className="w-[2px] bg-acid"
                            style={{
                                animation: "type-bar 0.8s ease-in-out infinite",
                                animationDelay: `${d}s`,
                            }}
                        />
                    ))}
                </span>
            </div>
            <div className="flex flex-1 flex-col justify-between gap-4 px-6 py-[22px] font-mono text-[13px] leading-[1.85] text-muted">
                <div>
                    <div>
                        <span className="text-acid">$</span>{" "}
                        <span className="text-paper">ai --daily</span>
                    </div>
                    <div className="grid grid-cols-[80px_minmax(0,1fr)] gap-x-3 pl-4">
                        {AI_TOOLS.map((t) => (
                            <Fragment key={t.name}>
                                <span className="text-paper">{t.name}</span>
                                <span>{t.use}</span>
                            </Fragment>
                        ))}
                    </div>
                    <div className="mt-2.5">
                        <span className="text-acid">$</span>{" "}
                        <span className="text-paper">ai --shipped</span>
                    </div>
                    <div className="pl-4">
                        → ML Specialization —{" "}
                        <span className="text-paper">Stanford</span>{" "}
                        <span className="text-faint">(2023)</span>
                        <span
                            className="ml-1.5 inline-block h-3.5 w-2 align-[-2px] bg-acid"
                            style={{ animation: "blink 1s infinite" }}
                        />
                    </div>
                </div>
                <div className="max-w-[520px] font-display text-[20px] leading-[1.3] tracking-[-0.01em] text-paper">
                    AI writes the first draft.{" "}
                    <span className="font-serif text-[1.15em] italic text-acid">
                        Taste
                    </span>{" "}
                    ships the final one.
                </div>
            </div>
        </div>
    );
}

const SPARK =
    "M 0 60 L 30 45 L 60 50 L 90 30 L 120 38 L 150 22 L 180 28 L 210 18 L 240 35 L 270 20 L 300 28 L 330 12 L 360 24 L 400 8";

function SportCard() {
    return (
        <div
            className={`${card} ${cell} flex flex-col justify-between p-[26px] md:col-span-5 md:row-span-3`}
        >
            <div className="flex items-center justify-between font-mono text-[11px]">
                <span className="tracking-[0.12em] text-coral">
                    <span
                        className="inline-block"
                        style={{ animation: "heartbeat 0.9s ease-in-out infinite" }}
                    >
                        ♥
                    </span>{" "}
                    THIS WEEK
                </span>
                <span className="text-faint">avg 154 bpm</span>
            </div>
            <div>
                <div className="mb-2 flex flex-wrap items-baseline gap-3">
                    <div className="font-display text-[64px] font-bold leading-none tracking-[-0.03em] text-paper">
                        42.7
                    </div>
                    <div className="font-mono text-xs text-muted">km ran</div>
                    <div className="rounded-full bg-[rgba(255,77,46,0.12)] px-2 py-[3px] font-mono text-[11px] text-coral">
                        +18%
                    </div>
                </div>
                <svg
                    viewBox="0 0 400 80"
                    preserveAspectRatio="none"
                    className="block h-14 w-full"
                >
                    <defs>
                        <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#ff4d2e" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#ff4d2e" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <path d={`${SPARK} L 400 80 L 0 80 Z`} fill="url(#spark)" />
                    <path
                        d={SPARK}
                        fill="none"
                        stroke="#ff4d2e"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
                <div className="mt-3.5 font-mono text-[11px] text-muted">
                    lift · run · repeat — best ideas land on km five.
                </div>
            </div>
        </div>
    );
}

function HeatmapCard() {
    const cells = useHeatmap();
    return (
        <div
            className={`${cell} flex flex-col justify-between gap-3.5 overflow-hidden rounded-3xl border border-line bg-panel p-[26px] md:col-span-12 md:row-span-2`}
        >
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="font-mono text-[11px] tracking-[0.12em] text-muted">
                    <span className="text-acid">git</span> log --since=1y
                </div>
                <a
                    href="https://github.com/t-monaco"
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-muted no-underline transition-colors hover:text-acid"
                >
                    @t-monaco ↗
                </a>
            </div>
            <div
                className="grid h-[110px] gap-[3px]"
                style={{
                    gridTemplateColumns: `repeat(${HEATMAP_COLS}, minmax(0,1fr))`,
                    gridTemplateRows: "repeat(7, 1fr)",
                    gridAutoFlow: "column",
                }}
            >
                {cells.map((c, i) => (
                    <div
                        key={i}
                        className="rounded-[2px]"
                        style={{
                            background: c.color,
                            opacity: 0,
                            animation: "commit-fade 0.4s ease forwards",
                            animationDelay: `${c.delay}ms`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export function Bento() {
    return (
        <section id="about" className={`${sectionWrap} py-16 md:py-24`}>
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
                    code, product, AI, kilometres. the whole stack — human
                    included.
                </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5 md:auto-rows-[130px] md:grid-cols-12 md:gap-3.5">
                <ProductCard />
                <DroneCard />
                <HumanCard />
                <StackCard />
                <LocationCard />
                <AiCard />
                <SportCard />
                <HeatmapCard />
            </div>
        </section>
    );
}
