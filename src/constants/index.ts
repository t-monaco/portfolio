import { ba, freelancing, medallia, readytech, wt } from "../assets";

export const profile = {
    name: "Tomas Monaco",
    email: "hello@tomasmonaco.com",
    location: "Sydney, AU",
    coords: "-33.8688°, 151.2093°",
    timeZone: "Australia/Sydney",
    resume: "/resume-tomas_monaco.pdf",
    version: "v3.0.0",
};

export const roles = [
    "software engineer.",
    "drone pilot.",
    "creative dev.",
    "always shipping.",
    "fresh out here.",
];

export const marqueeWords = [
    "DEV",
    "DRONES",
    "RUNNING",
    "SHIPPING",
    "LIFTING",
    "CREATIVE",
    "FAST",
    "FRESH",
];

export type Stat = {
    label: string;
    value?: number;
    symbol?: string;
    suffix?: string;
    comma?: boolean;
    accent?: boolean;
};

export const stats: Stat[] = [
    { label: "// YRS BUILDING", value: 6, suffix: "+" },
    { label: "// COMMITS / YR", value: 1247, comma: true },
    { label: "// PROJECTS", value: 24 },
    { label: "// CURIOSITY", symbol: "∞", accent: true },
];

export type StackChip = { label: string; accent?: "acid" | "coral" };

export const stack: StackChip[] = [
    { label: "TypeScript", accent: "acid" },
    { label: "React", accent: "acid" },
    { label: "Next.js" },
    { label: "Node" },
    { label: "PostgreSQL" },
    { label: "MongoDB" },
    { label: "GraphQL" },
    { label: "Redux" },
    { label: "Tailwind" },
    { label: "Python ✦", accent: "coral" },
    { label: "Figma" },
];

export type Principle = {
    tab: string;
    no: string;
    kicker: string;
    title: string;
    body: string;
    accent: "acid" | "coral";
};

export const principles: Principle[] = [
    {
        tab: "build.md",
        no: "01",
        kicker: "// BUILD",
        title: "Ship the thing.",
        body: "A demo in the wild beats a roadmap in a deck. Cut scope, ship, then iterate on real feedback. Polish lives in version two.",
        accent: "acid",
    },
    {
        tab: "move.md",
        no: "02",
        kicker: "// MOVE",
        title: "Stay in your body.",
        body: "Run, lift, climb, swim. Best ideas land on kilometre five, not in the eighth hour at the desk. Code is a body sport.",
        accent: "coral",
    },
    {
        tab: "fly.md",
        no: "03",
        kicker: "// FLY",
        title: "Get the wide shot.",
        body: "Zoom out often. Flying drones taught me half of every problem is just standing somewhere you haven't stood before.",
        accent: "acid",
    },
];

export type SocialIcon = "github" | "x" | "linkedin" | "readcv";
export type Social = { label: string; href: string; icon: SocialIcon };

// TODO: swap "#" placeholders for real profile URLs.
export const socials: Social[] = [
    { label: "github", href: "https://github.com/t-monaco", icon: "github" },
    { label: "twitter / x", href: "#", icon: "x" },
    { label: "linkedin", href: "#", icon: "linkedin" },
    { label: "read.cv", href: "#", icon: "readcv" },
];

export type Experience = {
    no: string;
    company: string;
    role: string;
    date: string;
    summary: string;
    tags: string[];
    logo: string;
    accent: "acid" | "coral";
    span: number;
    href: string;
};

export const experiences: Experience[] = [
    {
        no: "01",
        company: "ReadyTech",
        role: "Software Engineer",
        date: "2024 — NOW",
        summary: "Designing and building education-technology products on a Next.js stack — UX-led, standards-driven, shipped with cross-functional teams.",
        tags: ["next.js", "typescript", "mui"],
        logo: readytech,
        accent: "acid",
        span: 7,
        href: "#",
    },
    {
        no: "02",
        company: "Berserker (FEX)",
        role: "Software Engineer",
        date: "2023 — 24",
        summary: "A full-stack Next.js CrossFit programming app — designed, prototyped and shipped end-to-end, solo.",
        tags: ["next.js", "clerk", "xata"],
        logo: freelancing,
        accent: "coral",
        span: 5,
        href: "#",
    },
    {
        no: "03",
        company: "Medallia",
        role: "Software Engineer",
        date: "2021 — 23",
        summary: "Led UX analysis and an app redesign: built a React component library wired to a new data-driven API.",
        tags: ["react", "component-lib", "ci/cd"],
        logo: medallia,
        accent: "acid",
        span: 5,
        href: "#",
    },
    {
        no: "04",
        company: "Wunderman Thompson",
        role: "Full-Stack Developer",
        date: "2019 — 21",
        summary: "Built and maintained front- and back-end for web solutions, with email marketing automation at scale.",
        tags: ["full-stack", "automation"],
        logo: wt,
        accent: "acid",
        span: 7,
        href: "#",
    },
    {
        no: "05",
        company: "Police of Buenos Aires",
        role: "Programmer & Analyst",
        date: "2017 — 19",
        summary: "Automated payroll data analysis and reporting; built interactive dashboards that sped up operational decisions.",
        tags: ["data", "python", "dashboards"],
        logo: ba,
        accent: "coral",
        span: 12,
        href: "#",
    },
];
