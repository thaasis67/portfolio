// Single source of truth for Ashish Limbu's portfolio content.
// Derived from CV_Ashish.pdf — friendly first-person tone.

export const profile = {
  name: "Ashish Limbu",
  firstName: "Ashish",
  initials: "AL",
  role: "Full-Stack Developer · CS Undergraduate",
  location: "Kathmandu, Nepal",
  tagline:
    "I build thoughtful software — from MERN e-commerce platforms to ML-powered intrusion detection systems. I'm a Computer Science undergraduate at Tribhuvan University, currently looking for a software engineering internship where I can contribute and grow.",
  objective:
    "Computer Science undergraduate passionate about full-stack development, Java, Spring Boot, and backend engineering. Experienced in MERN and Java applications, plus machine learning–based security projects. Seeking a software engineering internship to contribute and learn.",
  email: "aasistlimbu09@gmail.com",
  phone: "+977-9764378274",
  github: "github.com/thaasis67",
  githubUrl: "https://github.com/thaasis67",
  portfolio: "limbuashish.com.np",
  portfolioUrl: "https://limbuashish.com.np",
};

export const stats = [
  { label: "Years coding", value: "4+" },
  { label: "Projects shipped", value: "3" },
  { label: "Certifications", value: "2" },
  { label: "Core stack", value: "MERN · Java" },
];

export const aboutParagraphs = [
  "Hey, I'm Ashish — a Computer Science undergraduate at Tribhuvan University in Kathmandu, Nepal. I'm in my final stretch (Class of 2026) and I spend most of my time building things on the web and digging into how systems actually work under the hood.",
  "My focus is full-stack development with the MERN stack and Java/Spring Boot on the backend. I enjoy turning vague requirements into clean REST APIs, designing schemas that hold up, and writing auth flows that don't make me nervous at 2am. Lately I've also been exploring the intersection of networking and machine learning — building tools that detect malicious traffic in real time.",
  "Right now I'm looking for a software engineering internship where I can ship real features, learn from experienced engineers, and generally be useful. If your team is building something interesting, I'd love to talk.",
];

export const focusAreas = [
  "Full-Stack Development",
  "Backend Engineering",
  "Java & Spring Boot",
  "Networking & Security",
  "MERN Stack",
  "ML for Security",
];

export type SkillCategory = {
  title: string;
  icon: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "Code2",
    skills: ["JavaScript", "Java", "C#", "C", "C++", "Python"],
  },
  {
    title: "Frameworks",
    icon: "Layers",
    skills: ["MERN Stack", "Spring Boot", ".NET Frameworks"],
  },
  {
    title: "Databases",
    icon: "Database",
    skills: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Developer Tools",
    icon: "Wrench",
    skills: ["Git", "VS Code", "IntelliJ", "Postman", "Docker"],
  },
  {
    title: "Cloud Platforms",
    icon: "Cloud",
    skills: ["AWS"],
  },
];

export type Project = {
  title: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
  accent: string;
  href: string;
};

export const projects: Project[] = [
  {
    title: "e-Pasal",
    period: "May 2024 — August 2024",
    summary:
      "A full-stack e-commerce platform where I owned the entire pipeline — from JWT-based auth to REST APIs and MongoDB data modeling. Built to handle product catalogs, user accounts, and secure checkout-style flows end to end.",
    highlights: [
      "Designed secure JWT authentication and authorization for user sessions",
      "Built RESTful APIs for product and user management",
      "Modeled MongoDB collections for efficient querying and scaling",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    accent: "from-amber-500/20 to-orange-500/10",
    href: "#",
  },
  {
    title: "Movie Review Web App",
    period: "November 2024 — January 2025",
    summary:
      "A community app where users browse, rate, and write movie reviews. I focused on a smooth React UX on the front and a clean Express backend with login/logout flows handled by JWT.",
    highlights: [
      "Implemented login/logout with JWT authentication",
      "Designed responsive UI in React for browsing and reviewing films",
      "Managed backend services with Node.js and Express",
    ],
    stack: ["React", "Node.js", "Express", "JWT"],
    accent: "from-sky-500/20 to-cyan-500/10",
    href: "#",
  },
  {
    title: "AI-Based Intrusion Detection System",
    period: "November 2025 — January 2026",
    summary:
      "A real-time network intrusion detection system that combines rule-based detection with a Random Forest model. Built to flag malicious traffic live, with a Flask API, React dashboard, and SQLite store.",
    highlights: [
      "Real-time packet analysis using Scapy",
      "Hybrid detection: rule-based + Random Forest ML model",
      "Live dashboard in React backed by a Flask API and SQLite",
    ],
    stack: ["Python", "Scapy", "Flask", "React", "SQLite", "Random Forest"],
    accent: "from-emerald-500/20 to-teal-500/10",
    href: "#",
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Science",
  institution: "Tribhuvan University",
  location: "Kathmandu, Nepal",
  period: "2022 — Expected 2026",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Object-Oriented Programming",
    "Operating Systems",
    "Computer Networks",
    "Web Technologies",
  ],
};

export type Certificate = {
  title: string;
  issuer: string;
  year: string;
  icon: string;
};

export const certificates: Certificate[] = [
  {
    title: "Oracle Java Foundations — Training and Assessment",
    issuer: "Oracle (Learn Oracle)",
    year: "2026",
    icon: "Award",
  },
  {
    title: "Networking Basics",
    issuer: "Cisco Networking Academy (Cisco NetAcad)",
    year: "2026",
    icon: "Network",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
];
