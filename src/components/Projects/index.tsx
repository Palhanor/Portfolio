// TODO: Criar sistema de busca (titulo ou descricao) e filtro (tecnololgias) entre os projetos

import { projectsData } from "@/data/projects";
import colorTag from "@/utils/colorTag";
import Link from "next/link";
import React from "react";

export default function Projects() {
  const styleSheet = {
    section: "my-section",
    sectionTitle: "my-section-title",
    projectList: "grid grid-cols-2 gap-5 mt-5",
    project:
      "relative bg-white bg-cover bg-no-repeat bg-center min-h-[42vh] shadow-md rounded-lg cursor-pointer px-2 pt-2 pb-7 ease-in-out duration-100 hover:shadow-lg",
    banner: "max-h-[25vh] rounded-md w-full object-cover object-top",
    logo: "rounded-full -mt-10 h-20 border-white border-solid border-4 absolute inset-x-1/2 -ml-10",
    content: "px-3 mt-5",
    title: "my-content-title text-xl mb-3",
    about: "my-content-text mb-4",
    tag: (tech: string) => `my-tag mr-2 ${colorTag(tech)}`,
  };

  return (
    <section id="projetos" className={styleSheet.section}>
      <h2 className={styleSheet.sectionTitle}>Projetos</h2>
      <ul className={styleSheet.projectList}>
        {projectsData.map((project) => (
          <Link
            key={project.id}
            href={`/projetos/${project.id}`}
            target="_blank"
          >
            <li id={project.id} className={styleSheet.project}>
              <img
                src={`/projects/${project.id}/banner.png`}
                alt={`${project.name} banner`}
                className={styleSheet.banner}
              />
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
