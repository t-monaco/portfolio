import { profile, socials, type SocialIcon } from "../constants";

const LIGHTS = ["#ff5f56", "#ffbd2e", "#27c93f"];

const ICONS: Record<SocialIcon, string> = {
    github: "M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-2 1.03-2.71-.1-.25-.45-1.29.1-2.69 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.4.2 2.44.1 2.69.64.71 1.03 1.61 1.03 2.71 0 3.84-2.34 4.68-4.57 4.93.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z",
    x: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    linkedin:
        "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43A2.06 2.06 0 113.28 5.37a2.06 2.06 0 012.06 2.06zM7.12 20.45H3.55V9h3.57v11.45z",
    readcv: "M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.14 6.84 9.46.5.09.69-.21.69-.48v-1.7c-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33s1.7.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z",
};

export function Contact() {
    return (
        <section
            id="contact"
            className="relative mx-auto max-w-[1320px] px-7 pb-24 pt-16"
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

                <div className="px-6 py-14 md:px-12 md:py-16">
                    <div className="mb-6 font-mono text-sm leading-[1.9] text-muted">
                        <div>
                            <span className="text-acid">$</span> echo{" "}
                            <span className="text-coral">
                                "let's build something."
                            </span>
                        </div>
                        <div className="pl-4 text-paper">
                            → let's build something.
                        </div>
                        <div className="mt-2">
                            <span className="text-acid">$</span> open{" "}
                            <span className="text-coral">channels.json</span>
                        </div>
                    </div>

                    <h2 className="my-9 font-display text-[clamp(48px,9vw,132px)] font-bold leading-[0.9] tracking-[-0.04em] text-paper">
                        say{" "}
                        <span className="font-serif font-normal italic text-acid">
                            hi
                        </span>
                        .
                    </h2>

                    <a
                        href={`mailto:${profile.email}`}
                        className="inline-flex items-center gap-3.5 border-b border-line-2 pb-1.5 font-display text-[clamp(20px,3vw,36px)] tracking-[-0.01em] text-paper no-underline transition-colors duration-200 hover:border-acid hover:text-acid"
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

                    <div className="mt-14 flex flex-wrap gap-3">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target={s.href === "#" ? undefined : "_blank"}
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-line-2 bg-ink px-[18px] py-3 font-mono text-[13px] text-paper no-underline transition-colors duration-200 hover:border-acid hover:text-acid"
                            >
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d={ICONS[s.icon]} />
                                </svg>
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
