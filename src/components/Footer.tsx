import { profile } from "../constants";
import { currentYear } from "../utils/date";

export function Footer() {
    return (
        <footer className="border-t border-[#1a1a1a] px-[18px] py-7 md:px-7">
            <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-faint">
                <div>© {currentYear()} tomas monaco</div>
                <div className="flex items-center gap-2">
                    <span
                        className="h-1.5 w-1.5 rounded-full bg-online"
                        style={{ animation: "pulse-dot 2s infinite" }}
                    />
                    all systems operational · {profile.version}
                </div>
            </div>
        </footer>
    );
}
