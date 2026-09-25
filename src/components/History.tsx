import type { CSSProperties, ReactNode } from "react";
import {
    timeline,
    type TimelineEntry,
    type TimelineVariant,
} from "../constants";
import { useHorizontalScroll } from "../hooks/useHorizontalScroll";

// Unpinned layout applies on mobile (max-md) and with reduced motion — the
// hook drops the pin in both cases, so the track falls back to native scroll.
const stickyCls =
    "sticky top-0 flex h-screen flex-col justify-center overflow-hidden pt-11 max-md:static max-md:h-auto max-md:pt-0 motion-reduce:static motion-reduce:h-auto motion-reduce:pt-0";
const trackCls =
    "flex w-max gap-4 px-[max(28px,calc((100vw_-_1320px)/2_+_28px))] will-change-transform max-md:w-auto max-md:snap-x max-md:snap-mandatory max-md:overflow-x-auto max-md:scroll-px-[18px] max-md:px-[18px] max-md:pb-3 max-md:[scrollbar-width:none] motion-reduce:w-auto motion-reduce:overflow-x-auto motion-reduce:pb-3";
const cardCls =
    "flex min-h-[460px] flex-col gap-[18px] rounded-3xl p-7 max-md:min-h-[420px] max-md:basis-[84vw] max-md:snap-start";

const WIDTH: Record<TimelineVariant, string> = {
    default: "flex-[0_0_400px]",
    edu: "flex-[0_0_320px]",
    ai: "flex-[0_0_320px]",
    cta: "flex-[0_0_320px]",
    project: "flex-[0_0_460px]",
    current: "flex-[0_0_460px]",
};

const SURFACE: Record<TimelineVariant, CSSProperties> = {
    default: { background: "#131313", border: "1px solid #1f1f1f" },
    edu: { background: "transparent", border: "1px dashed #2a2a2a" },
    cta: {},
    ai: {
        background: "linear-gradient(160deg,#141f0c,#0a0a0a 70%)",
        border: "1px solid rgba(196,245,66,0.25)",
    },
    project: {
        background: "linear-gradient(135deg,#1a0d09,#0a0a0a 70%)",
        border: "1px solid rgba(255,77,46,0.3)",
    },
    current: {
        background: "#131313",
        border: "1px solid #c4f542",
        boxShadow: "0 0 60px rgba(196,245,66,0.08)",
    },
};

const pill = "rounded-full px-[9px] py-1";

function Badge({ entry }: { entry: TimelineEntry }) {
    if (entry.variant === "current") {
        return (
            <span className={`${pill} inline-flex items-center gap-1.5 bg-acid text-ink`}>
                <span
                    className="h-1.5 w-1.5 rounded-full bg-ink"
                    style={{ animation: "pulse-dot 2s infinite" }}
                />
                {entry.badge}
            </span>
        );
    }
    const tone =
        entry.variant === "ai"
            ? "bg-[rgba(196,245,66,0.12)] text-acid"
            : entry.variant === "project"
              ? "bg-[rgba(255,77,46,0.12)] text-coral"
              : "border border-line-2 text-muted";
    return <span className={`${pill} ${tone}`}>{entry.badge}</span>;
}

function CardHead({ entry }: { entry: TimelineEntry }) {
    return (
        <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.12em]">
            <span className={entry.variant === "current" ? "text-acid" : "text-muted"}>
                {entry.date}
            </span>
            <Badge entry={entry} />
        </div>
    );
}

function Card({
    entry,
    className = "",
    children,
}: {
    entry: TimelineEntry;
    className?: string;
    children: ReactNode;
}) {
    return (
        <article
            className={`${cardCls} ${WIDTH[entry.variant]} ${className}`}
            style={SURFACE[entry.variant]}
        >
            {children}
        </article>
    );
}

function tagTone(entry: TimelineEntry, tag: string, i: number) {
    const lead = i === 0 || tag.startsWith("✦");
    if (lead && entry.variant === "project")
        return "bg-[rgba(255,77,46,0.1)] text-coral";
    if (lead && entry.variant === "current")
        return "bg-[rgba(196,245,66,0.1)] text-acid";
    return "border border-line-2";
}

function WorkCard({ entry }: { entry: TimelineEntry }) {
    const featured = entry.variant === "project" || entry.variant === "current";
    return (
        <Card entry={entry}>
            <CardHead entry={entry} />
            {entry.logo && (
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-[14px] border border-line bg-ink">
                    <img
                        src={entry.logo}
                        alt={entry.title}
                        className={`object-contain ${
                            entry.variant === "current"
                                ? "max-h-10 max-w-10"
                                : "max-h-11 max-w-11"
                        }`}
                    />
                </div>
            )}
            <div>
                <h3
                    className={`mb-1.5 font-display font-semibold leading-[1.05] tracking-[-0.02em] text-paper ${
                        featured ? "text-[34px]" : "text-[28px]"
                    }`}
                >
                    {entry.title}
                </h3>
                <div
                    className={`font-mono text-xs ${
                        entry.variant === "project" ? "text-coral" : "text-acid"
                    }`}
                >
                    {entry.subtitle}
                </div>
            </div>
            <p
                className={`m-0 flex-1 font-display text-[15px] leading-[1.55] ${
                    featured ? "text-body" : "text-muted"
                }`}
            >
                {entry.body}
            </p>
            <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-muted">
                {entry.tags?.map((tag, i) => (
                    <span key={tag} className={`${pill} ${tagTone(entry, tag, i)}`}>
                        {tag}
                    </span>
                ))}
            </div>
        </Card>
    );
}

function EduCard({ entry }: { entry: TimelineEntry }) {
    return (
        <Card entry={entry}>
            <CardHead entry={entry} />
            <div className="flex flex-1 flex-col justify-end gap-4">
                {entry.items?.map((item) => (
                    <div key={item.title}>
                        <div className="font-display text-[22px] font-semibold leading-[1.15] text-paper">
                            {item.title}
                        </div>
                        <div className="font-mono text-xs text-muted">
                            {item.subtitle}
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}

function AiCard({ entry }: { entry: TimelineEntry }) {
    return (
        <Card entry={entry} className="justify-between">
            <CardHead entry={entry} />
            <div className="font-serif text-[64px] italic leading-[0.9] text-acid">
                ml.
            </div>
            <div>
                <div className="font-display text-[24px] font-semibold leading-[1.1] text-paper">
                    {entry.title}
                </div>
                <div className="mt-1.5 font-mono text-xs text-muted">
                    {entry.subtitle}
                </div>
            </div>
        </Card>
    );
}

function CtaCard({ entry }: { entry: TimelineEntry }) {
    return (
        <a
            href={entry.href}
            className={`${cardCls} ${WIDTH.cta} justify-between border border-dashed border-line-2 text-paper no-underline transition-[border-color,background-color] duration-300 hover:border-acid hover:bg-[rgba(196,245,66,0.04)]`}
        >
            <span className="font-mono text-[11px] tracking-[0.12em] text-faint">
                {entry.date}
            </span>
            <span className="font-display text-[44px] font-bold leading-[0.95] tracking-[-0.03em]">
                {entry.title}
                <span className="text-acid">?</span>
            </span>
            <span className="font-mono text-[13px] text-acid">
                {entry.subtitle}
            </span>
        </a>
    );
}

function TimelineCard({ entry }: { entry: TimelineEntry }) {
    switch (entry.variant) {
        case "edu":
            return <EduCard entry={entry} />;
        case "ai":
            return <AiCard entry={entry} />;
        case "cta":
            return <CtaCard entry={entry} />;
        default:
            return <WorkCard entry={entry} />;
    }
}

export function History() {
    const { outerRef, trackRef, barRef } = useHorizontalScroll();

    return (
        <section id="history" ref={outerRef} className="relative">
            <div className={stickyCls}>
                <div className="mx-auto mb-9 flex w-full max-w-[1320px] flex-wrap items-end justify-between gap-6 px-[18px] md:px-7">
                    <div>
                        <div className="mb-3.5 font-mono text-xs tracking-[0.15em] text-acid">
                            // 03 — GIT LOG --HISTORY
                        </div>
                        <h2 className="m-0 font-display text-[clamp(40px,6vw,72px)] font-bold leading-[0.95] tracking-[-0.03em] text-paper">
                            how I{" "}
                            <span className="font-serif font-normal italic text-acid">
                                got here
                            </span>
                            .
                        </h2>
                    </div>
                    <div className="min-w-[200px] max-w-[360px] flex-1">
                        <div className="mb-2 flex justify-between font-mono text-[11px] text-faint">
                            <span>2017</span>
                            <span className="hidden md:inline">scroll →</span>
                            <span className="text-acid">now</span>
                        </div>
                        <div className="h-0.5 overflow-hidden rounded-[2px] bg-line">
                            <div ref={barRef} className="h-full w-0 bg-acid" />
                        </div>
                    </div>
                </div>

                <div ref={trackRef} className={trackCls}>
                    {timeline.map((entry) => (
                        <TimelineCard key={entry.date + entry.title} entry={entry} />
                    ))}
                </div>
            </div>
        </section>
    );
}
