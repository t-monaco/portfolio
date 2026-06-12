import { useMemo } from "react";
import { profile, roles } from "../constants";
import { useTypewriter } from "../hooks/useTypewriter";
import { deployStamp } from "../utils/date";

export function Hero() {
    const typed = useTypewriter(roles);
    const stamp = useMemo(() => deployStamp(), []);

    return (
        <section className="relative mx-auto flex min-h-[calc(100vh-44px)] max-w-[1320px] flex-col justify-center px-7 pb-20 pt-12">
            {/* whoami crumb */}
            <div className="mb-10 flex items-center gap-2.5 font-mono text-xs text-faint">
                <span className="text-acid">$</span>
                <span className="text-muted">whoami</span>
                <span className="text-faint">--verbose</span>
                <span
                    className="inline-block h-3.5 w-2 bg-acid"
                    style={{ animation: "blink 1s infinite" }}
                />
            </div>

            {/* Big name */}
            <h1 className="m-0 font-display text-[clamp(64px,13vw,220px)] font-bold leading-[0.88] tracking-[-0.04em] text-paper">
                Tomas
                <br />
                <span className="text-paper">Monaco</span>
                <span className="text-acid">.</span>
            </h1>

            {/* Subhead with typed role */}
            <div className="mt-9 flex flex-wrap items-center gap-x-[22px] gap-y-3.5 font-mono text-[18px]">
                <span className="text-faint">→</span>
                <span className="text-muted">role:</span>
                <span className="min-w-[240px] text-paper">
                    {typed}
                    <span
                        className="ml-[3px] inline-block h-[22px] w-[11px] align-[-3px] bg-acid"
                        style={{ animation: "blink 0.9s infinite" }}
                    />
                </span>
            </div>

            {/* Intro */}
            <p className="mt-10 max-w-[640px] font-display text-[22px] leading-[1.45] tracking-[-0.01em] text-[#b8b8b8]">
                Developer building{" "}
                <span className="text-paper">fast, fresh interfaces</span> by day.
                Drone pilot, lifter and runner the rest of the time. Always
                shipping.{" "}
                <span className="font-serif text-[26px] italic text-acid">
                    currently free for work.
                </span>
            </p>

            {/* CTAs */}
            <div className="mt-12 flex flex-wrap items-center gap-3.5">
                <a
                    href="#contact"
                    className="inline-flex items-center gap-2.5 rounded-full bg-acid px-6 py-4 font-mono text-sm font-semibold tracking-[0.02em] text-ink transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(196,245,66,0.3)]"
                >
                    <span>get_in_touch()</span>
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                </a>
                <a
                    href="#work"
                    className="inline-flex items-center gap-2.5 rounded-full border border-line-2 px-6 py-4 font-mono text-sm font-medium tracking-[0.02em] text-paper transition-colors duration-200 hover:border-acid hover:text-acid"
                >
                    ./see_my_work
                </a>
                <a
                    href={profile.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full px-4 py-4 font-mono text-sm text-faint transition-colors duration-200 hover:text-acid"
                >
                    ./résumé.pdf
                </a>
            </div>

            {/* Vertical side rail */}
            <div
                className="absolute right-7 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-6 font-mono text-[10px] tracking-[0.18em] text-faint lg:flex"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
                <span style={{ animation: "side-tick 3s ease-in-out infinite" }}>
                    SYS.STATUS — OK
                </span>
                <span
                    className="inline-block h-[50px] w-px"
                    style={{
                        writingMode: "horizontal-tb",
                        background:
                            "linear-gradient(180deg,#2a2a2a,transparent)",
                    }}
                />
                <span>01 / INTRO</span>
            </div>

            {/* Bottom row: scroll cue + konami hint */}
            <div className="absolute inset-x-7 bottom-7 flex items-center justify-between gap-6 font-mono text-[11px] tracking-[0.08em] text-faint">
                <div className="flex items-center gap-2.5">
                    <span className="inline-block h-px w-6 bg-faint" />
                    SCROLL
                    <span
                        className="ml-1 inline-block h-2 w-2 border-b border-r border-faint"
                        style={{ animation: "wave 1.6s ease-in-out infinite" }}
                    />
                </div>
                <div className="flex flex-wrap items-center justify-end gap-3">
                    <span className="hidden sm:inline">press</span>
                    <kbd
                        className="hidden items-center gap-1 rounded-md border border-line-2 px-2 py-1 font-mono text-[11px] text-paper sm:inline-flex"
                        style={{ background: "#131313", boxShadow: "0 2px 0 #050505" }}
                    >
                        ↑↑↓↓←→←→ba
                    </kbd>
                    <span className="hidden text-line-2 sm:inline">·</span>
                    <span>
                        {profile.version} — built {stamp}
                    </span>
                </div>
            </div>
        </section>
    );
}
