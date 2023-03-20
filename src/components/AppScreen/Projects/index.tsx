"use client";

import React, { useState } from "react";
import Link from "next/link";
import useProjects from "./hooks/useProject";
import { style } from "./style";

export default function Projects() {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("");

  const { projects } = useProjects();

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
    projects.forEach((project) => {
      project.tech.forEach((tech) => {
        list.add(tech);
      });
    });
    const techList: string[] = Array.from(list);
    return techList;
  };

  return (
    <section id="projetos" className={style.section}>
      <h2 className={style.sectionTitle}>Projetos</h2>
      <form className={style.filterContainer}>
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Busque por projetos específicos!"
          className={style.filterInput}
        />
        <select className={style.filterSelect} onChange={handleFilter}>
          <option value="">Filtrar</option>
          {techList().map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </form>
      <ul className={style.projectList}>
        {filteredProjects().map((project) => (
          <li key={project.id} id={project.id} className={style.project}>
            <Link href={`/projetos/${project.id}`}>
              <img
                src={`/projects/${project.id}/banner.png`}
                alt={`${project.name} banner`}
                className={style.banner}
              />
              <img
                src={`/projects/${project.id}/logo.png`}
                alt={`${project.name} logo`}
                className={style.logo}
              />
              <div className={style.content}>
                <h3 className={style.title}>{project.name}</h3>
                <p className={style.about}>{project.description}</p>
                {project.tech.map((tech) => (
                  <span key={tech} className={style.tag(tech)}>
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
