import {
    // docker,
    git,
    graphql,
    mongodb,
    nodejs,
    numpy,
    pandas,
    psql,
    python,
    reactjs,
    redis,
    redux,
    sass,
    tailwind,
    tensorflow,
    typescript,
    vitejs,
    medallia,
    wt,
    ba,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

// const services = [
//     {
//         title: "Web Developer",
//         icon: web,
//     },
//     {
//         title: "React Native Developer",
//         icon: mobile,
//     },
//     {
//         title: "Backend Developer",
//         icon: backend,
//     },
//     {
//         title: "Content Creator",
//         icon: creator,
//     },
// ];

const about = {
    title: "About Me",
    content: [
        "My journey in the world of tech has equipped me with a diverse set of skills across various programming languages and frameworks. Whether it's unraveling complex challenges or crafting elegant solutions, I thrive on the art of creation.",
        "But what truly sets me apart is my unwavering determination. When I'm involved in a project, I go full throttle, pushing boundaries and embracing challenges with gusto. While I have a deep-rooted love for data-driven projects and a fascination with the ever-evolving landscape of machine learning.",
        "I'm not just seeking opportunities; I'm on the lookout for purpose-driven collaborations that allow both personal and collective growth.",
        "Join me on this exciting adventure where we turn ideas into remarkable digital experiences. Let's make a difference together.",
    ],
};

const experiences = [
    {
        title: "Software Engineer",
        company_name: "Medallia",
        icon: medallia,
        iconBg: "#e9e9e9",

        date: "2023 - 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full-Stack Developer",
        company_name: "Wunderman Thompson",
        iconBg: "#e9e9e9",

        icon: wt,
        date: "2021 - 2019",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Payroll Automation",
        company_name: "Police of Buenos Aires",
        iconBg: "#e9e9e9",
        icon: ba,
        date: "2019 - 2017",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const technologies = [
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Tensorflow",
        icon: tensorflow,
    },
    {
        name: "Pandas",
        icon: pandas,
    },
    {
        name: "Numpy",
        icon: numpy,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux",
        icon: redux,
    },
    {
        name: "Vite JS",
        icon: vitejs,
    },
    {
        name: "Sass",
        icon: sass,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Postgresql",
        icon: psql,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Redis",
        icon: redis,
    },
    {
        name: "Graphql",
        icon: graphql,
    },
    // {
    //     name: "Docker",
    //     icon: docker,
    // },
];

export { about, experiences, technologies };
