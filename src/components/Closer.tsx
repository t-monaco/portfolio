import { Reveal } from "./Reveal";

export function Closer() {
    return (
        <section className="relative overflow-hidden px-[18px] pb-[60px] pt-20">
            <Reveal className="mb-[30px] text-center font-mono text-xs tracking-[0.2em] text-faint">
                ── END OF FILE ──
            </Reveal>
            <div
                className="select-none text-center font-display text-[clamp(64px,22vw,320px)] font-bold leading-[0.82] tracking-[-0.05em] text-paper"
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
        </section>
    );
}
