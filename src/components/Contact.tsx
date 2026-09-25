import { profile, socials, type SocialIcon } from "../constants";
import { sectionWrap } from "./classes";

const LIGHTS = ["#ff5f56", "#ffbd2e", "#27c93f"];

const ICONS: Record<SocialIcon, string> = {
    github: "M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-2 1.03-2.71-.1-.25-.45-1.29.1-2.69 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.4.2 2.44.1 2.69.64.71 1.03 1.61 1.03 2.71 0 3.84-2.34 4.68-4.57 4.93.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z",
    linkedin:
        "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43A2.06 2.06 0 113.28 5.37a2.06 2.06 0 012.06 2.06zM7.12 20.45H3.55V9h3.57v11.45z",
};

export function Contact() {
    return (
        <section
            id="contact"
            className={`${sectionWrap} relative pb-24 pt-8`}
        >
            <div className="relative overflow-hidden rounded-[28px] border border-line bg-ink-2">
                {/* Terminal header */}
                <div className="flex items-center gap-3 border-b border-[#1a1a1a] bg-ink px-[22px] py-4 font-mono text-xs text-muted">
                    <div className="flex gap-1.5">
                        {LIGHTS.map((c) => (
                            <span
                                key={c}
                                className="h-2.5 w-2.5 rounded-full"
                                style={{ background: c }}
                            />
                        ))}
                    </div>
                    <span className="ml-2">contact.sh — bash</span>
                </div>

                <div className="px-[22px] pb-10 pt-9 md:px-12 md:pb-14 md:pt-[60px]">
                    <div className="font-mono text-sm leading-[1.9] text-muted">
                        <div>
                            <span className="text-acid">$</span> echo{" "}
                            <span className="text-coral">
                                "let's build something."
                            </span>
                        </div>
                        <div className="pl-4 text-paper">
                            → let's build something.
                        </div>
                    </div>

                    <h2 className="mb-9 mt-4 font-display text-[clamp(56px,9vw,132px)] font-bold leading-[0.9] tracking-[-0.04em] text-paper">
                        say{" "}
                        <span className="font-serif font-normal italic text-acid">
                            hi
                        </span>
                        .
                    </h2>

                    <a
                        href={`mailto:${profile.email}`}
                        className="inline-flex items-center gap-3.5 break-all border-b border-line-2 pb-1.5 font-display text-[clamp(20px,3vw,36px)] tracking-[-0.01em] text-paper no-underline transition-colors duration-200 hover:border-acid hover:text-acid"
                    >
                        {profile.email}
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        >
                            <path d="M7 17L17 7M9 7h8v8" />
                        </svg>
                    </a>

                    <div className="mt-12 flex flex-wrap gap-2.5">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target={s.href === "#" ? undefined : "_blank"}
                                rel="noreferrer"
                                className={`inline-flex items-center gap-2 rounded-full border px-[18px] py-3 font-mono text-[13px] no-underline transition-colors duration-200 ${
                                    s.accent
                                        ? "border-[rgba(196,245,66,0.3)] bg-[rgba(196,245,66,0.1)] text-acid hover:bg-acid hover:text-ink"
                                        : "border-line-2 bg-ink text-paper hover:border-acid hover:text-acid"
                                }`}
                            >
                                {s.icon && (
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d={ICONS[s.icon]} />
                                    </svg>
                                )}
                                {s.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Scan line */}
                <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-0.5 opacity-40"
                    style={{
                        background:
                            "linear-gradient(90deg,transparent,#c4f542,transparent)",
                        animation: "scan-line 8s linear infinite",
                    }}
                />
            </div>
        </section>
    );
}
