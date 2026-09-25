import { profile, roles } from "../constants";
import { arm, KONAMI_GLYPHS, useKonami } from "../hooks/useKonami";
import { useTypewriter } from "../hooks/useTypewriter";

export function Hero() {
    const typed = useTypewriter(roles);
    const { step } = useKonami();

    return (
        <section className="relative mx-auto flex max-w-[1320px] flex-col justify-center px-[18px] pb-14 pt-10 md:min-h-[calc(100vh-44px)] md:px-7 md:pb-20 md:pt-12">
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
            <div className="mt-9 flex flex-wrap items-center gap-x-[18px] gap-y-2.5 font-mono text-[clamp(15px,2vw,18px)]">
                <span className="text-faint">→</span>
                <span className="text-muted">role:</span>
                <span className="min-w-[220px] text-paper">
                    {typed}
                    <span
                        className="ml-[3px] inline-block h-5 w-2.5 align-[-3px] bg-acid"
                        style={{ animation: "blink 0.9s infinite" }}
                    />
                </span>
            </div>

            {/* Intro */}
            <p className="mt-10 max-w-[680px] text-pretty font-display text-[clamp(18px,2.2vw,22px)] leading-[1.45] tracking-[-0.01em] text-body">
                <span className="text-paper">Product engineer</span> in Sydney.
                Full-stack by trade, front-end by obsession — I take ideas from
                a Figma frame to production and care as much about{" "}
                <em className="font-serif text-[1.15em] text-acid">why</em> we
                build as how. Drone pilot, lifter and runner the rest of the
                time.
            </p>

            {/* CTAs */}
            <div className="mt-12 flex flex-wrap items-center gap-3">
                <a
                    href="#contact"
                    className="inline-flex items-center gap-2.5 rounded-full bg-acid px-6 py-4 font-mono text-sm font-semibold text-ink transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(196,245,66,0.3)]"
                >
                    get_in_touch() <span>→</span>
                </a>
                <a
                    href="#history"
                    className="inline-flex items-center gap-2.5 rounded-full border border-line-2 px-6 py-4 font-mono text-sm font-medium text-paper transition-colors duration-200 hover:border-acid hover:text-acid"
                >
                    git log --history
                </a>
            </div>

            {/* Vertical side rail */}
            <div
                className="absolute right-7 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-6 font-mono text-[10px] tracking-[0.18em] text-faint md:flex"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
                <span style={{ animation: "side-tick 3s ease-in-out infinite" }}>
                    SYS.STATUS — OK
                </span>
                <span
                    className="inline-block h-[50px] w-px"
                    style={{
                        writingMode: "horizontal-tb",
                        background: "#2a2a2a",
                    }}
                />
                <span>01 / INTRO</span>
            </div>

            {/* Bottom row: scroll cue + konami hint */}
            <div className="absolute inset-x-7 bottom-7 hidden items-center justify-between gap-6 font-mono text-[11px] tracking-[0.08em] text-faint md:flex">
                <div className="flex items-center gap-2.5">
                    <span className="inline-block h-px w-6 bg-faint" />
                    SCROLL
                    <span
                        className="ml-1 inline-block h-2 w-2 border-b border-r border-faint"
                        style={{ animation: "wave 1.6s ease-in-out infinite" }}
                    />
                </div>
                <div className="flex items-center gap-3">
                    <span>arm the drone</span>
                    <button
                        type="button"
                        onClick={arm}
                        title="Type the code, or click"
                        aria-label="Arm the drone"
                        className="inline-flex cursor-pointer gap-[2px] rounded-md border border-line-2 bg-panel px-2 py-1 font-mono text-[11px] transition-colors duration-200 hover:border-acid"
                    >
                        {KONAMI_GLYPHS.map((g, i) => (
                            <span
                                key={i}
                                className={`transition-colors duration-150 ${
                                    i < step ? "text-acid" : "text-paper"
                                }`}
                            >
                                {g}
                            </span>
                        ))}
                    </button>
                    <span className="text-line-2">·</span>
                    <span>{profile.version}</span>
                </div>
            </div>
        </section>
    );
}
