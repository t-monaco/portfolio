import { Reveal } from "./Reveal";

export function Closer() {
    return (
        <section className="relative overflow-hidden px-7 pb-16 pt-24">
            <Reveal className="mb-[30px] text-center font-mono text-xs tracking-[0.2em] text-faint">
                ── END OF FILE ──
            </Reveal>
            <div
                className="select-none text-center font-display text-[clamp(80px,22vw,320px)] font-bold leading-[0.82] tracking-[-0.05em] text-paper"
                style={{ whiteSpace: "nowrap" }}
            >
                <Reveal>
                    tomas<span className="text-acid">.</span>
                </Reveal>
                <Reveal
                    style={{
                        color: "transparent",
                        WebkitTextStroke: "1.5px #c4f542",
                    }}
                >
                    monaco
                    <span style={{ WebkitTextStroke: "1.5px #ff4d2e" }}>.</span>
                </Reveal>
            </div>
            <Reveal className="mt-9 text-center font-mono text-[13px] tracking-[0.08em] text-muted">
                thanks for scrolling. <span className="text-acid">→</span>{" "}
                <a
                    href="#contact"
                    className="border-b border-acid text-acid no-underline"
                >
                    drop a line
                </a>
            </Reveal>
        </section>
    );
}
