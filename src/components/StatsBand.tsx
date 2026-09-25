import { stats, type Stat } from "../constants";
import { useCountUp } from "../hooks/useCountUp";
import { useInView } from "../hooks/useInView";
import { sectionWrap } from "./classes";

function StatItem({ stat, active }: { stat: Stat; active: boolean }) {
    const display = useCountUp(stat.value ?? 0, active, {
        comma: stat.comma,
        duration: 1400,
    });
    return (
        <div>
            <div className="mb-3.5 font-mono text-[11px] tracking-[0.14em] text-muted">
                {stat.label}
            </div>
            <div
                className={`font-display text-[clamp(48px,7vw,88px)] font-bold leading-[0.9] tracking-[-0.04em] ${
                    stat.accent ? "text-acid" : "text-paper"
                }`}
            >
                <span>{stat.symbol ?? display}</span>
                {stat.suffix && <span className="text-acid">{stat.suffix}</span>}
            </div>
        </div>
    );
}

export function StatsBand() {
    const { ref, inView } = useInView<HTMLDivElement>();
    return (
        <section className={`${sectionWrap} pb-6 pt-20`}>
            <div
                ref={ref}
                className="grid grid-cols-2 gap-6 gap-y-8 border-y border-[#1a1a1a] py-9 md:grid-cols-4 md:gap-y-6"
            >
                {stats.map((s) => (
                    <StatItem key={s.label} stat={s} active={inView} />
                ))}
            </div>
        </section>
    );
}
