import { useEffect, useState } from "react";

type Options = { duration?: number; comma?: boolean; decimals?: number };

export function useCountUp(target: number, active: boolean, options: Options = {}) {
    const { duration = 1500, comma = false, decimals } = options;
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!active) return;
        let raf = 0;
        const start = performance.now();
        const ease = (t: number) => 1 - Math.pow(1 - t, 3);
        const step = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            setValue(target * ease(t));
            if (t < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [active, target, duration]);

    if (comma) return Math.round(value).toLocaleString("en-US");
    if (decimals !== undefined) return value.toFixed(decimals);
    if (!Number.isInteger(target)) return value.toFixed(1);
    return Math.round(value).toString();
}
