import type { CSSProperties, ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type Props = {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
    delay?: number;
    id?: string;
};

const TRANSITION =
    "opacity .9s cubic-bezier(.2,.7,.3,1), transform .9s cubic-bezier(.2,.7,.3,1)";

export function Reveal({ children, className, style, delay = 0, id }: Props) {
    const { ref, inView } = useInView<HTMLDivElement>();
    return (
        <div
            ref={ref}
            id={id}
            className={className}
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(28px)",
                transition: TRANSITION,
                transitionDelay: `${delay}ms`,
                willChange: "opacity, transform",
                ...style,
            }}
        >
            {children}
        </div>
    );
}
