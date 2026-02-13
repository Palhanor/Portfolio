"use client";

import React from "react";
import useProjects from "./hooks/useProject";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default function Projects() {

  const { projects } = useProjects();

  return (
    <section id="projetos" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 mb-10">
        Projetos
      </h2>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <a
            key={project.id}
            href={`/projetos/${project.id}`}
            className="group block"
          >
            <Card className="overflow-hidden transition-all duration-200 hover:border-zinc-600 hover:shadow-lg hover:shadow-black/20">
              {/* Banner image */}
              <div className="relative overflow-hidden">
                <img
                  src={`/projects/${project.id}/banner.png`}
                  alt={`${project.name} banner`}
                  className="w-full h-40 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                {/* Logo overlay */}
                <img
                  src={`/projects/${project.id}/logo.png`}
                  alt={`${project.name} logo`}
                  className="absolute -bottom-5 left-5 h-14 w-14 rounded-lg border-2 border-zinc-900 bg-zinc-900 object-cover"
                />
              </div>

              <CardContent className="pt-8 pb-5">
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-zinc-400 mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="muted">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
