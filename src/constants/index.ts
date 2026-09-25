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
    "product engineer.",
    "full-stack dev.",
    "front-end obsessive.",
    "AI-assisted builder.",
    "drone pilot.",
];

export const marqueeWords = [
    "PRODUCT",
    "FRONT-END",
    "FULL-STACK",
    "AI-ASSISTED",
    "DRONES",
    "RUNNING",
    "LIFTING",
    "SHIPPING",
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
    { label: "// YRS IN TECH", value: 9, suffix: "+" },
    { label: "// COMPANIES", value: 5 },
    { label: "// CITIES SHIPPED FROM", value: 3 },
    { label: "// CURIOSITY", symbol: "∞", accent: true },
];

export type StackChip = { label: string; accent?: "acid" | "coral" };

export const stack: StackChip[] = [
    { label: "TypeScript", accent: "acid" },
    { label: "React", accent: "acid" },
    { label: "Next.js", accent: "acid" },
    { label: "JavaScript" },
    { label: "Tailwind" },
    { label: "Vue" },
    { label: "Node" },
    { label: "Python", accent: "coral" },
    { label: "PostgreSQL" },
    { label: "MongoDB" },
    { label: "Redis" },
    { label: "GraphQL" },
    { label: "Vercel" },
    { label: "Figma" },
];

export type Principle = {
    tab: string;
    kicker: string;
    title: string;
    body: string;
    accent: "acid" | "coral";
};

export const principles: Principle[] = [
    {
        tab: "product.md",
        kicker: "01 // PRODUCT",
        title: "Ship the thing.",
        body: "A demo in users' hands beats a roadmap in a deck. Cut scope, ship, learn from real behaviour. Polish lives in version two.",
        accent: "acid",
    },
    {
        tab: "move.md",
        kicker: "02 // MOVE",
        title: "Stay in your body.",
        body: "Run, lift, repeat. Best ideas land on kilometre five, not in the eighth hour at the desk. Code is a body sport.",
        accent: "coral",
    },
    {
        tab: "fly.md",
        kicker: "03 // FLY",
        title: "Get the wide shot.",
        body: "Zoom out often. Flying drones taught me half of every problem is just standing somewhere you haven't stood before.",
        accent: "acid",
    },
];

export type SocialIcon = "github" | "x" | "linkedin";
export type Social = {
    label: string;
    href: string;
    icon?: SocialIcon;
    accent?: boolean;
};

export const socials: Social[] = [
    { label: "github", href: "https://github.com/t-monaco", icon: "github" },
    {
        label: "linkedin",
        href: "https://www.linkedin.com/in/tamonaco/",
        icon: "linkedin",
    },
    // TODO: real X URL.
    { label: "twitter / x", href: "#", icon: "x" },
    { label: "resume.pdf ↓", href: profile.resume, accent: true },
];

export type TimelineVariant =
    | "default"
    | "edu"
    | "ai"
    | "project"
    | "current"
    | "cta";

export type TimelineEntry = {
    date: string;
    variant: TimelineVariant;
    title: string;
    badge?: string;
    subtitle?: string;
    body?: string;
    tags?: string[];
    logo?: string;
    items?: { title: string; subtitle: string }[];
    href?: string;
};

// Ordered past → present.
export const timeline: TimelineEntry[] = [
    {
        date: "2017 — 2019",
        badge: "WORK",
        title: "Police of Buenos Aires",
        subtitle: "programmer & data analyst · BA",
        body: "Where it started. Automated payroll analysis and reporting, and built dashboards that sped up operational decisions.",
        tags: ["python", "data", "dashboards"],
        logo: ba,
        variant: "default",
    },
    {
        date: "2018 — 2020",
        badge: "EDU",
        title: "Education",
        items: [
            { title: "Digital House", subtitle: "full-stack developer" },
            {
                title: "Zero to Mastery",
                subtitle: "complete react · python developer",
            },
            { title: "UTN", subtitle: "national technological university" },
        ],
        variant: "edu",
    },
    {
        date: "2019 — 2021",
        badge: "WORK",
        title: "Wunderman Thompson",
        subtitle: "full-stack developer · BA",
        body: "Front- and back-end for client web builds — business logic, data, content management — plus email marketing automation at scale.",
        tags: ["full-stack", "automation"],
        logo: wt,
        variant: "default",
    },
    {
        date: "2021 — 2023",
        badge: "WORK",
        title: "Medallia",
        subtitle: "software engineer · madrid",
        body: "Led UX analysis across client pages and an app redesign — a React component library wired to a new data-driven API. Owned deploy pipelines and environments.",
        tags: ["react", "component-lib", "ci/cd"],
        logo: medallia,
        variant: "default",
    },
    {
        date: "2023",
        badge: "✦ AI",
        title: "Machine Learning Specialization",
        subtitle: "Stanford · Coursera",
        variant: "ai",
    },
    {
        date: "2023 — 2024",
        badge: "PROJECT · SOLO",
        title: "Berserker",
        subtitle: "product engineer · freelance",
        body: "A CrossFit programming PWA — designed, prototyped and shipped end-to-end, solo. Coaches publish programming; athletes log and crush workouts.",
        tags: ["next.js", "pwa", "clerk", "xata / postgres"],
        logo: freelancing,
        variant: "project",
    },
    {
        date: "2024 — NOW",
        badge: "HEAD",
        title: "ReadyTech",
        subtitle: "software engineer · sydney",
        // TODO: confirm LLM wording.
        body: "Building Ready Student — education products on a Next.js stack. UX-led, standards-driven, and shipping LLM-powered features with cross-functional teams.",
        tags: ["next.js", "typescript", "mui", "✦ llm"],
        logo: readytech,
        variant: "current",
    },
    {
        date: "NEXT —",
        title: "your team",
        subtitle: "git checkout -b next →",
        href: "#contact",
        variant: "cta",
    },
];
