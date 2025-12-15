import { Project, Experience, SkillCategory, SocialLink } from "./types";

// ==========================================
// ASSET PATHS
// Place your images in the /public/images folder
// ==========================================
export const IMAGES = {
  profile: "/images/profile.png", // Main hero image
  about: "/images/about.jpg", // About section image
  project1: "/images/project1.jpg",
  project2: "/images/project2.jpg",
  project3: "/images/project3.jpg",
  cv: "/cv.pdf",
};

// ==========================================
// CONTENT DATA
// ==========================================

export const PERSONAL_INFO = {
  name: "Alex Dev",
  title: "Creative Software Engineer",
  summary:
    "I build accessible, pixel-perfect, and performant web experiences. Blending technical expertise with an eye for editorial design.",
  email: "hello@alexdev.com",
  yearsExperience: "0.5",
  projectsCompleted: "6+",
  technologiesMastered: "10+",
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive analytics dashboard for online retailers featuring real-time data visualization and inventory management.",
    techStack: ["React", "TypeScript", "D3.js", "Tailwind"],
    image: IMAGES.project1,
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
  },
  {
    id: "2",
    title: "AI Content Generator",
    description:
      "SaaS platform utilizing large language models to assist copywriters. Features a rich text editor and prompt engineering tools.",
    techStack: ["Next.js", "OpenAI API", "PostgreSQL", "Stripe"],
    image: IMAGES.project2,
    githubUrl: "https://github.com",
  },
  {
    id: "3",
    title: "Financial Mobile App",
    description:
      "Cross-platform mobile application for personal finance tracking with bank integration and budget forecasting.",
    techStack: ["React Native", "Firebase", "Redux", "Node.js"],
    image: IMAGES.project3,
    liveUrl: "https://demo.com",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Senior Frontend Engineer",
    company: "TechFlow Solutions",
    period: "2021 - Present",
    description:
      "Leading the frontend migration to React 18, improving site performance by 40%. Mentoring junior developers and establishing design systems.",
  },
  {
    id: "2",
    role: "Software Developer",
    company: "Creative Agency X",
    period: "2019 - 2021",
    description:
      "Developed interactive marketing sites for Fortune 500 clients. Collaborated closely with designers to implement complex animations.",
  },
  {
    id: "3",
    role: "Junior Web Developer",
    company: "StartUp Inc",
    period: "2018 - 2019",
    description:
      "Assisted in building the MVP of a logistics platform. Handled bug fixes and implemented responsive UI components.",
  },
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      "TypeScript",
      "JavaScript (ES6+)",
      "Python",
      "HTML5",
      "CSS3/Sass",
      "SQL",
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Jest",
      "React Query",
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      "Git",
      "Docker",
      "AWS",
      "Figma",
      "Webpack",
      "Vite",
      "CI/CD Pipelines",
    ],
  },
];

export const SOCIALS: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com",
    label: "github.com/alexdev",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com",
    label: "linkedin.com/in/alexdev",
  },
  { platform: "Twitter", url: "https://twitter.com", label: "@alexdev" },
];
