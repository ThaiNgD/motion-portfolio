import ChatApp from "@/assets/chat-app.png";
import ContentAI from "@/assets/content_ai.png";
import TekyPage from "@/assets/gigapixel-teky_page.png";
import MKTSystem from "@/assets/mkt_system.png";
export const project_data: ProjectItem[] = [
  {
    id: 1,
    title: "Teky Website",
    description:
      "The TEKY website showcases Vietnam's first STEAM academy for children aged 4 to 18, offering courses in programming, robotics, and multimedia. It highlights their mission to empower young innovators through engaging, future-oriented education aligned with American STEAM standards.",
    image: TekyPage,
    gitlab: "https://gitlab.com/teky.vn/tekyversion3htmlcssjs",
    url: "https://teky.edu.vn/",
    stack: ["React", "TypeScript"],
  },
  {
    id: 2,
    title: "Content AI",
    description:
      "The MKT ContentAI is an AI-powered tool designed to help users market their products effectively, with a focus on creating SEO-optimized content.",
    image: ContentAI,
    github: "https://github.com/MKT-SOFTWARE/CONTENT_AI_FE",
    url: "https://nextjs-tutorial-six-liart.vercel.app/",
    stack: ["NextJS", "TypeScript", "NestJS", "PostgreSQL"],
  },
  {
    id: 3,
    title: "MKT System",
    description:
      "The MKT System is a comprehensive suite of marketing tools designed to work together, streamlining campaigns, enhancing engagement, and delivering analytics across multiple platforms like social media, email, and the web.",
    image: MKTSystem,
    github: "",
    url: "https://phanmemmkt.vn/phan-mem-mkt-client",
    stack: ["React", "TypeScript"],
  },
  {
    id: 4,
    title: "Realtime Chat App",
    description: "This is my personal fullstack project",
    image: ChatApp,
    github: "",
    url: "https://mern-l32m.onrender.com/login",
    stack: ["React", "TypeScript"],
  },
];
