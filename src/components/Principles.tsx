import { principles } from "../constants";
import { sectionWrap } from "./classes";
import { Reveal } from "./Reveal";

export function Principles() {
    return (
        <section id="principles" className={`${sectionWrap} py-16 md:py-24`}>
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
            <Reveal className="flex gap-1 overflow-x-auto border-b border-line pl-1">
                {principles.map((p, i) =>
                    i === 0 ? (
                        <div
                            key={p.tab}
                            className="whitespace-nowrap rounded-t-lg border border-b-0 border-line bg-panel px-[18px] py-2.5 font-mono text-xs text-acid"
                        >
                            <span className="text-coral">●</span> {p.tab}
                        </div>
                    ) : (
                        <div
                            key={p.tab}
                            className="whitespace-nowrap px-[18px] py-2.5 font-mono text-xs text-faint"
                        >
                            {p.tab}
                        </div>
                    )
                )}
            </Reveal>

            <div className="grid grid-cols-1 overflow-hidden rounded-b-2xl border border-t-0 border-line bg-panel md:grid-cols-3">
                {principles.map((p, i) => (
                    <Reveal
                        key={p.tab}
                        className={`px-[22px] py-7 md:px-9 md:py-10 ${
                            i < principles.length - 1
                                ? "border-b border-line md:border-b-0 md:border-r"
                                : ""
                        }`}
                    >
                        <div
                            className={`mb-5 font-mono text-[11px] tracking-[0.12em] ${
                                p.accent === "coral" ? "text-coral" : "text-acid"
                            }`}
                        >
                            {p.kicker}
                        </div>
                        <h3 className="mb-3.5 font-display text-[26px] font-semibold leading-[1.15] tracking-[-0.02em] text-paper">
                            {p.title}
                        </h3>
                        <p className="m-0 font-display text-[15px] leading-[1.65] text-muted">
                            {p.body}
                        </p>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
