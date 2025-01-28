import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import uidesign from "@/public/uidesign.png";
import makanyuk from "@/public/makanyuk.png";
import quranapp from "@/public/quranapp.png";
import otherproject from "@/public/otherproject.png";
import supercampkedokteran from "@/public/supercampkedokteran.png";
import radianedu from "@/public/radianedu.png";
import newsradianpr from "@/public/newsradianpr.png";
import jobradian from "@/public/jobradianpr.png";
import educheckradian from "@/public/educheckradian.png";
import privatbahasa from "@/public/privatbahasa.png";
import invoiceradian from "@/public/invoiceradian.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Intern Web Developer",
    location: "PT Global Intermedia Nusantara",
    description:
      "Intern Web Developer at PT Global Intermedia Nusantara (June - August 2022). I contributed to developing a REST API using Laravel and PostgreSQL, deployed the system to a Linux server, and designed web and mobile interfaces, focusing on user-friendly and visually appealing layouts.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Graduated Bachelor of Information Technology",
    location: "Universitas Muhammadiyah Yogyakarta",
    description:
      "I completed my studies in 4 years at the Faculty of Engineering, Information Technology program at Universitas Muhammadiyah Yogyakarta, graduating with cum laude honors. Afterward, I immediately secured a job as a web developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Junior Web Developer",
    location: "Radian Edu Solution",
    description: "I optimized SEO strategies to improve website ranking, developed an invoice generation web app, built career and blog/news features, and managed various websites including Monolith, RESTful API, and WordPress.",
    icon: React.createElement(CgWorkAlt),
    date: "2023-2024",
  },
  {
    title: "Master of Information Technology",
    location: "Universitas Gadjah Mada",
    description:
      "I am currently advancing my studies at Universitas Gadjah Mada, pursuing a Master&apos;s degree in Information Technology at the Faculty of Engineering. With a focus on Data Analytics and Pervasive Intelligence (DAPI), I am deepening my expertise in cutting-edge technologies to drive impactful solutions in the world of data.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - present",
  },
  {
    title: "Freelance Web Developer",
    location: "Sleman, D.I. Yogyakarta",
    description: "In addition to my studies, I am working as a freelancer, specializing in web development with a focus on Laravel, Vue, and Tailwind to create dynamic and responsive websites.",
    icon: React.createElement(CgWorkAlt),
    date: "present",
  },
] as const;

export const projectsData = [
  {
    title: "UI Design",
    description: "A collection of creative UI designs, from sleek app interfaces to dynamic web layouts. Check out my Instagram for more!",
    tags: ["Figma", "Canva", "AdobeXD", "Freepik"],
    url: "https://www.instagram.com/ffadelm_/",
    imageUrl: uidesign,
  },
  {
    title: "Makan Yuk Website",
    description: "Makan Yuk is a web application for restaurant dine-in services, utilizing a local API to efficiently manage orders and reservations. Explore the project on GitHub for more details!",
    tags: ["HTML", "CSS", "JS", "Vue", "Vite", "Bootstrap", "API Local"],
    url: "https://github.com/ffadelm/MakanYuk",
    imageUrl: makanyuk,
  },
  {
    title: "Al-Qur&apos;an Web",
    description: "Al-Qur&apos;an is a web app for accessing verses and translations, offering a simple, user-friendly interface to enhance the reading experience.",
    tags: ["HTML", "CSS", "JS", "Vue", "Vite", "Bootstrap", "API Public"],
    url: "https://al-qurans.netlify.app/",
    imageUrl: quranapp,
  },
  {
    title: "Supercamp Kedokteran",
    description: "this is a collab project with the Radian IT team, where I contributed to SEO optimization and website maintenance for future updates.",
    tags: ["Wordpress", "Elementor", "Google Tag Manager", "Swiper", "LiteSpeed", "LazySizes"],
    url: "https://supercampkedokteran.com/",
    imageUrl: supercampkedokteran,
  },
  {
    title: "Radian Edu Website",
    description: "this is a collab project with the Radian IT team, where I contributed to SEO optimization and website maintenance for future updates.",
    tags: ["Wordpress", "Elementor", "Google Tag Manager", "Swiper", "LiteSpeed", "LazySizes"],
    url: "https://radianedu.com/",
    imageUrl: radianedu,
  },
  {
    title: "Radian Priority News",
    description: " collaborative project with the Radian IT team, where I contributed to developing news features, from the management dashboard to news presentation.",
    tags: ["Laravel", "Tailwind", "HTML", "CSS", "JS"],
    url: "https://radianpriority.com/news",
    imageUrl: newsradianpr,
  },
  {
    title: "Job Portal Radian",
    description: "Job Portal Radian is a platform developed to facilitate job applications and career opportunities. It features an intuitive interface for both employers and candidates.",
    tags: ["Laravel", "Tailwind", "HTML", "CSS", "JS", "Figma"],
    url: "https://radianpriority.com/karir",
    imageUrl: jobradian,
  },
  {
    title: "Educheck Radian",
    description: "Serves as a tool for students to track and monitor their learning progress, providing valuable insights into their academic development.",
    tags: ["Laravel", "Tailwind", "HTML", "CSS", "JS", "Figma"],
    url: "https://educheck.radianpriority.com/",
    imageUrl: educheckradian,
  },
  {
    title: "Private Bahasa by Radian",
    description: "Promotional website for language private lessons, offering a user-friendly platform to explore language learning services and courses.",
    tags: ["Wordpress", "Elementor", "Swiper", "LiteSpeed", "LazySizes", "Figma"],
    url: "https://privatbahasa.radianpriority.com/",
    imageUrl: privatbahasa,
  },
  {
    title: "Invoice & Receipt Radian",
    description: "Invoice & Receipt Radian is a web platform for managing finance, generating invoices and receipts for customers.",
    tags: ["Laravel", "Tailwind", "HTML", "CSS", "JS", "Figma"],
    url: "https://invoice.radianpriority.com/",
    imageUrl: invoiceradian,
  },
  {
    title: "Other Project",
    description: "Other projects I&apos;ve worked on can be found in my GitHub repository, showcasing various tools and technologies I&apos;ve explored.",
    tags: ["Laravel", "Vue", "Tailwind", "Bootstrap", "Net", "Other tools"],
    url: "https://github.com/ffadelm",
    imageUrl: otherproject,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "SQL Server",
  "Python",
  "Go",
  "Framer Motion",
  "Laravel",
  "Vue",
  "Spring Boot",
  ".Net",
  "UI Design",
] as const;
