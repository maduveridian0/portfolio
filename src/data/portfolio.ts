import {
  Bot,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Database,
  FileText,
  GitBranch,
  LayoutDashboard,
  LineChart,
  ShieldCheck,
  Workflow
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export type Project = {
  name: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  icon: LucideIcon;
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export const heroCards = [
  { label: "Front-end Development", icon: Code2 },
  { label: "QA Mindset", icon: ShieldCheck },
  { label: "AI-powered Tools", icon: BrainCircuit },
  { label: "Technical Documentation", icon: FileText }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Front-end",
    icon: LayoutDashboard,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Vanilla Extract"
    ]
  },
  {
    title: "State and Data",
    icon: GitBranch,
    skills: ["React Query", "Zustand", "Redux", "Axios", "REST APIs"]
  },
  {
    title: "Back-end and Database",
    icon: Database,
    skills: ["Node.js", "NestJS", "SQL", "PostgreSQL", "Prisma"]
  },
  {
    title: "Tools and Workflow",
    icon: Workflow,
    skills: ["Git", "GitHub", "Jira", "Confluence", "Scrum", "Kanban", "CI/CD"]
  },
  {
    title: "Quality and Documentation",
    icon: CheckCircle2,
    skills: [
      "QA Validation",
      "BDD",
      "Acceptance Criteria",
      "Technical Documentation",
      "Bug Reports",
      "Test Scenarios"
    ]
  }
];

export const projects: Project[] = [
  {
    name: "BugLens AI",
    description:
      "An intelligent bug and QA assistant where users can paste bug reports, screen captures, console errors or problem descriptions, and the AI turns them into an organized diagnosis for the team.",
    features: [
      "Analyze bug descriptions",
      "Interpret console errors",
      "Extract context from screenshots",
      "Suggest possible root causes",
      "Generate QA validation notes",
      "Create team-ready bug summaries"
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "OpenAI API",
      "Tailwind CSS"
    ],
    githubUrl: "https://github.com/placeholder/buglens-ai",
    liveUrl: "https://buglens-ai.example.com",
    icon: Bot
  },
  {
    name: "LoadView",
    description:
      "A dashboard for API load testing that allows developers to configure test scenarios, monitor request performance and generate execution reports.",
    features: [
      "Register API endpoints",
      "Configure parallel requests",
      "Track average, minimum and maximum latency",
      "Display error rate",
      "View execution history",
      "Generate PDF reports"
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Chart.js or Recharts",
      "PostgreSQL",
      "Tailwind CSS"
    ],
    githubUrl: "https://github.com/placeholder/loadview",
    liveUrl: "https://loadview.example.com",
    icon: LineChart
  },
  {
    name: "BugFlow",
    description:
      "A simplified issue tracking platform for development teams, focused on bug reporting, task management, QA validation and workflow organization.",
    features: [
      "Create bugs, tasks and improvements",
      "Manage status and priority",
      "Assign responsible users",
      "Add comments and attachments",
      "Track change history",
      "Generate BDD from bug descriptions"
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "React Query",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS"
    ],
    githubUrl: "https://github.com/placeholder/bugflow",
    liveUrl: "https://bugflow.example.com",
    icon: Bot
  },
  {
    name: "CareerBoost AI",
    description:
      "An AI-based platform that analyzes resumes and LinkedIn profiles, suggesting improvements, keywords and English versions for technology professionals.",
    features: [
      "Analyze professional summary",
      "Suggest LinkedIn headline",
      "Compare profile with job descriptions",
      "Generate English resume sections",
      "Suggest technical keywords",
      "Track profile versions"
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS"
    ],
    githubUrl: "https://github.com/placeholder/careerboost-ai",
    liveUrl: "https://careerboost-ai.example.com",
    icon: BrainCircuit
  }
];

export const experienceHighlights = [
  "Front-end development with React, Next.js and TypeScript",
  "API integration and payload validation",
  "Technical documentation and bug reports",
  "BDD scenarios and acceptance criteria",
  "Agile collaboration with Scrum/Kanban",
  "UI improvements and component-based development"
];

export const achievements = [
  "Latin America Virtual Uber Hackathon Champion",
  "Advanced to global finals and reached Top 10",
  "Recognized for excellence in Logic and Systems Development"
];

export const contactLinks = {
  email: "mariaeaveridiano@gmail.com",
  linkedin: "https://www.linkedin.com/in/maria-eduarda-alves-veridiano/",
  github: "https://github.com/maduveridian0"
};
