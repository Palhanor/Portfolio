"use client";

import React, { useEffect, useState } from "react";
import { projectsData } from "@/data/projects";
import colorTag from "@/utils/colorTag";
import Link from "next/link";
import { project } from "@/interface/project";

export default function Projects() {
  const [projects, setProjects] = useState<project[]>([]);
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    setProjects(() => projectsData);
  }, []);

  const filteredProjects = () => {
    return projects.filter(
      (project) =>
        project.name.toLowerCase().includes(search.toLowerCase()) &&
        (project.tech.includes(filter) || !filter)
    );
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(() => e.target.value);
  };

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(() => e.target.value);
  };

  const techList = () => {
    const list: Set<string> = new Set();
    projectsData.forEach((project) => {
      project.tech.forEach((tech) => {
        list.add(tech);
      });
    });
    const techList: string[] = Array.from(list);
    return techList;
  };

  const styleSheet = {
    section: "my-section",
    sectionTitle: "my-section-title",
    filterContainer: "my-filter-container",
    filterInput: "my-filter-input",
    filterSelect: "my-filter-select",
    projectList: "grid grid-cols-2 gap-5",
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
      <form className={styleSheet.filterContainer}>
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Busque por projetos específicos!"
          className={styleSheet.filterInput}
        />
        <select className={styleSheet.filterSelect} onChange={handleFilter}>
          <option value="">Filtrar</option>
          {techList().map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </form>
      <ul className={styleSheet.projectList}>
        {filteredProjects().map((project) => (
          <li key={project.id} id={project.id} className={styleSheet.project}>
            <Link href={`/projetos/${project.id}`} target="_blank">
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
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
