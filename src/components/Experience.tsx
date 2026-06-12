import { useEffect } from "react";
import { experiences, type Experience as Exp } from "../constants";
import { useInView } from "../hooks/useInView";
import { Reveal } from "./Reveal";

const SPAN: Record<number, string> = {
    3: "md:col-span-3",
    4: "md:col-span-4",
    5: "md:col-span-5",
    7: "md:col-span-7",
    12: "md:col-span-12",
};

function ProjectCard({ exp }: { exp: Exp }) {
    const { ref, inView } = useInView<HTMLAnchorElement>();

    // Magnetic lean — mutate transform directly (transition supplied by [data-magnet]).
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const onMove = (e: MouseEvent) => {
            const r = el.getBoundingClientRect();
            const dx = e.clientX - (r.left + r.width / 2);
            const dy = e.clientY - (r.top + r.height / 2);
            const dist = Math.hypot(dx, dy);
            const radius = 220;
            if (dist < radius) {
                const p = (1 - dist / radius) * 8;
                el.style.transform = `translate(${(dx / radius) * p}px, ${
                    (dy / radius) * p
                }px)`;
            } else if (el.style.transform) {
                el.style.transform = "";
            }
        };
        window.addEventListener("mousemove", onMove, { passive: true });
        return () => window.removeEventListener("mousemove", onMove);
    }, [ref]);

    const accentHover =
        exp.accent === "coral" ? "hover:border-coral" : "hover:border-acid";
    const previewBg =
        exp.accent === "coral"
            ? "linear-gradient(135deg,#1a0d09,#0a0a0a)"
            : "linear-gradient(135deg,#0a0a0a,#0f1a14)";

    return (
        <a
            ref={ref}
            href={exp.href}
            data-magnet
            className={`group relative flex min-h-[380px] flex-col overflow-hidden rounded-3xl border border-line bg-panel p-8 text-inherit no-underline transition-colors duration-300 ${accentHover} ${
                SPAN[exp.span]
            }`}
            style={{
                opacity: inView ? 1 : 0,
                transition:
                    "opacity .9s cubic-bezier(.2,.7,.3,1), border-color .3s",
            }}
        >
            <div className="mb-7 flex items-start justify-between">
                <div className="font-mono text-[11px] tracking-[0.16em] text-faint">
                    {exp.no} — {exp.date}
                </div>
                <div className="flex flex-wrap justify-end gap-2">
                    {exp.tags.map((tag, i) => (
                        <span
                            key={tag}
                            className={`rounded-full px-2.5 py-[5px] font-mono text-[11px] tracking-[0.05em] ${
                                i === 0
                                    ? exp.accent === "coral"
                                        ? "bg-[rgba(255,77,46,0.1)] text-coral"
                                        : "bg-[rgba(196,245,66,0.1)] text-acid"
                                    : "border border-line-2 bg-ink text-muted"
                            }`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Preview: company logo on a tinted panel */}
            <div
                className="relative mb-6 flex min-h-[180px] flex-1 items-center justify-center overflow-hidden rounded-[14px] border border-[#1a1a1a]"
                style={{ background: previewBg }}
            >
                <img
                    src={exp.logo}
                    alt={exp.company}
                    className="max-h-[96px] max-w-[58%] object-contain opacity-90"
                />
                <div className="absolute left-5 top-4 font-mono text-[10px] text-muted">
                    {exp.role}
                </div>
                <div className="absolute right-5 top-4 font-mono text-[10px] text-muted">
                    {exp.date}
                </div>
                <div className="absolute bottom-4 left-5 font-mono text-[10px] text-faint">
                    // {exp.company.toLowerCase().replace(/[^a-z0-9]+/g, "_")}
                </div>
            </div>

            <div>
                <h3 className="mb-2 font-display text-[36px] font-semibold tracking-[-0.02em] text-paper">
                    {exp.company}
                </h3>
                <p className="m-0 max-w-[460px] font-display text-[16px] leading-[1.55] text-muted">
                    {exp.summary}
                </p>
            </div>

            <span className="absolute right-8 top-8 inline-flex translate-x-[-8px] translate-y-2 items-center gap-1.5 font-mono text-xs text-acid opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                →
            </span>
        </a>
    );
}

export function Experience() {
    return (
        <section
            id="selected-work"
            className="mx-auto max-w-[1320px] px-7 py-24"
        >
            <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6">
                <div>
                    <div className="mb-3.5 font-mono text-xs tracking-[0.15em] text-acid">
                        // 03 — SELECTED WORK
                    </div>
                    <h2 className="m-0 font-display text-[clamp(40px,6vw,72px)] font-bold leading-[0.95] tracking-[-0.03em] text-paper">
                        things I've{" "}
                        <span className="font-serif font-normal italic text-acid">
                            shipped
                        </span>
                        .
                    </h2>
                </div>
                <div className="max-w-[320px] font-mono text-[13px] leading-[1.6] text-muted">
                    roles I'm still proud of. always more in{" "}
                    <span className="text-coral">/dev/main</span>.
                </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
                {experiences.map((exp) => (
                    <ProjectCard key={exp.no} exp={exp} />
                ))}
            </div>
        </section>
    );
}
