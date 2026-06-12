import { principles } from "../constants";
import { Reveal } from "./Reveal";

export function Principles() {
    return (
        <section id="principles" className="mx-auto max-w-[1320px] px-7 pb-24 pt-16">
            <Reveal className="mb-[18px] font-mono text-xs tracking-[0.15em] text-acid">
                // 04 — PRINCIPLES.YAML
            </Reveal>
            <Reveal>
                <h2 className="m-0 mb-14 max-w-[720px] font-display text-[clamp(40px,6vw,72px)] font-bold leading-[0.95] tracking-[-0.03em] text-paper">
                    three rules I keep{" "}
                    <span className="font-serif font-normal italic text-acid">
                        coming back to
                    </span>
                    .
                </h2>
            </Reveal>

            {/* IDE tab strip */}
            <div className="flex gap-1 border-b border-line pl-1">
                <div className="flex items-center gap-2 rounded-t-lg border border-b-0 border-line bg-panel px-[18px] py-2.5 font-mono text-xs text-acid">
                    <span className="text-coral">●</span> build.md
                </div>
                <div className="px-[18px] py-2.5 font-mono text-xs text-faint">
                    move.md
                </div>
                <div className="px-[18px] py-2.5 font-mono text-xs text-faint">
                    fly.md
                </div>
                <div className="flex-1 border-b border-line" />
            </div>

            <div className="grid grid-cols-1 overflow-hidden rounded-b-2xl border border-t-0 border-line bg-panel md:grid-cols-3">
                {principles.map((p, i) => (
                    <div
                        key={p.tab}
                        className={`p-10 ${
                            i < 2
                                ? "border-b border-line md:border-b-0 md:border-r"
                                : ""
                        }`}
                    >
                        <div className="mb-5 flex items-center gap-3">
                            <div
                                className={`flex h-9 w-9 items-center justify-center rounded-full border font-mono text-xs ${
                                    p.accent === "coral"
                                        ? "border-coral bg-[rgba(255,77,46,0.12)] text-coral"
                                        : "border-acid bg-[rgba(196,245,66,0.12)] text-acid"
                                }`}
                            >
                                {p.no}
                            </div>
                            <div className="font-mono text-[11px] tracking-[0.12em] text-muted">
                                {p.kicker}
                            </div>
                        </div>
                        <h3 className="mb-3.5 font-display text-[26px] font-semibold leading-[1.15] tracking-[-0.02em] text-paper">
                            {p.title}
                        </h3>
                        <p className="m-0 font-display text-[15px] leading-[1.65] text-muted">
                            {p.body}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
