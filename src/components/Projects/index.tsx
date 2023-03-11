import { projectsData } from "@/data/projects";
import Link from "next/link";
import React from "react";

export default function Projects() {
  const tagBackground = (name: string) => {
    switch (name) {
      case "Python":
        return "bg-yellow-500";
      case "TypeScript":
        return "bg-sky-700 text-white";
      case "React Native":
        return "bg-sky-400";
      case "TailwindsCSS":
        return "bg-teal-500";
      case "Expo":
        return "bg-slate-200";
      case "NextJS":
        return "bg-gray-600 text-white";
    }
  };

  const styleSheet = {
    section: "my-section",
    sectionTitle: "my-section-title",
    projectList: "grid grid-cols-2 gap-5 mt-5",
    project:
      "relative bg-white bg-cover bg-no-repeat bg-center h-[40vh] shadow-md rounded-lg cursor-pointer p-2 ease-in-out duration-100 hover:shadow-lg",
    banner: "h-1/2 rounded-md w-full object-cover object-top",
    logo: "rounded-full -mt-10 h-20 border-white border-solid border-4 absolute inset-x-1/2 -ml-10",
    content: "px-3 mt-5",
    title: "text-xl text-zinc-700 font-semibold mb-3",
    about: "text-md text-zinc-600 mb-4",
    tag: (tech: string) => `my-tag mr-2 ${tagBackground(tech)}`,
  };

  return (
    <section id="portfolio" className={styleSheet.section}>
      <h2 className={styleSheet.sectionTitle}>Portfólio</h2>
      <ul className={styleSheet.projectList}>
        {projectsData.map((project) => (
          <Link key={project.id} href={`/projetos/${project.id}`}>
            <li id={project.id} className={styleSheet.project}>
              <img
                src={`/projects/${project.id}/banner.png`}
                alt={`${project.name} banner`}
                className={styleSheet.banner}
              ></img>
              <img
                src={`/projects/${project.id}/logo.png`}
                alt={`${project.name} logo`}
                className={styleSheet.logo}
              />
              <div className={styleSheet.content}>
                <h3 className={styleSheet.title}>{project.name}</h3>
                <p className={styleSheet.about}>{project.about}</p>
                {project.tech.map((tech) => (
                  <span key={tech} className={styleSheet.tag(tech)}>
                    {tech}
                  </span>
                ))}
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}
