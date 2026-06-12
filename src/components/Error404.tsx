import { Link } from "react-router-dom";

export function Error404() {
    return (
        <div className="relative flex min-h-screen w-screen flex-col items-center justify-center gap-6 overflow-hidden bg-ink px-4 text-center text-paper">
            <div className="font-mono text-xs tracking-[0.2em] text-faint">
                // 404 — route returned <span className="text-coral">null</span>
            </div>
            <h1 className="m-0 font-display text-[clamp(80px,20vw,220px)] font-bold leading-none tracking-[-0.04em]">
                404<span className="text-acid">.</span>
            </h1>
            <p className="m-0 max-w-[420px] font-display text-[18px] leading-[1.5] text-muted">
                this page doesn't exist — or it shipped somewhere else.
            </p>
            <Link
                to="/"
                className="mt-2 inline-flex items-center gap-2.5 rounded-full bg-acid px-6 py-3.5 font-mono text-sm font-semibold text-ink no-underline transition-transform duration-200 hover:-translate-y-0.5"
            >
                cd ~/
            </Link>
        </div>
    );
}
