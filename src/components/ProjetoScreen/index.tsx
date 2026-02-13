"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { project } from "@/interface/project";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ExternalLink, Github, Play, X } from "lucide-react";

export default function Readme() {
  const pathname = usePathname();
  const router = useRouter();
  const projectName = pathname?.replace("/projetos/", "");
  const [project, setProject] = useState<project>({
    id: "",
    name: "",
    description: "",
    homepage: "",
    repository: "",
    tech: [],
  });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await fetch("../api/projects");
      const result = await data.json();
      const projeto = result.find((proj: project) => proj.id == projectName);
      if (projeto) setProject(projeto);
    })();
  }, [projectName]);

  const images = project.carouselImages?.length
    ? project.carouselImages
    : [
      "https://picsum.photos/seed/1/800/400",
      "https://picsum.photos/seed/2/800/400",
      "https://picsum.photos/seed/3/800/400",
    ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.back()}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
          <Separator orientation="vertical" className="h-6" />
          <h1 className="text-lg font-semibold text-zinc-100 truncate">
            {project.name}
          </h1>
        </div>
      </header>

      <main className="flex-1 w-full max-w-6xl mx-auto px-6 mt-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Carousel */}
          <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 group">
            <img
              src={images[currentImageIndex]}
              alt={`Slide ${currentImageIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-500"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ArrowLeft className="h-5 w-5 rotate-180" />
                </button>
              </>
            )}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full ${idx === currentImageIndex ? "bg-white" : "bg-white/50"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              {project.name}
            </h1>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="secondary" className="px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex gap-4 mb-4">
              {project.repository && (
                <Button asChild variant="outline" size="lg">
                  <a href={project.repository} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    Repositório
                  </a>
                </Button>
              )}
              {project.homepage && (
                <Button asChild variant="outline" size="lg">
                  <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Website
                  </a>
                </Button>
              )}
              <Button onClick={() => setIsVideoOpen(true)} size="lg" className="bg-white text-black hover:bg-zinc-200">
                <Play className="mr-2 h-5 w-5 fill-current" />
                Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-16 max-w-4xl mx-auto my-8">
          {/* Sobre */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-100">Sobre</h2>
            <p className="text-zinc-400 leading-relaxed text-lg whitespace-pre-line">
              {project.about || "Informações detalhadas sobre o projeto serão adicionadas em breve."}
            </p>
          </section>

          {/* Problema e Solução */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-100">Problema e Solução</h2>
            <p className="text-zinc-400 leading-relaxed text-lg whitespace-pre-line">
              {project.problemSolution || "Descrição do problema e solução será adicionada em breve."}
            </p>
          </section>

          {/* Arquitetura */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-100">Arquitetura do Sistema</h2>
            <p className="text-zinc-400 leading-relaxed text-lg whitespace-pre-line">
              {project.architecture || "Detalhes da arquitetura serão adicionados em breve."}
            </p>
          </section>

          {/* Stack */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-100">Stack e Ferramentas</h2>
            <p className="text-zinc-400 leading-relaxed text-lg whitespace-pre-line">
              {project.stackTools || "Informações sobre a stack tecnológica serão adicionadas em breve."}
            </p>
          </section>

          {/* Resultados */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-100">Resultados e Aprendizados</h2>
            <p className="text-zinc-400 leading-relaxed text-lg whitespace-pre-line">
              {project.resultsLearnings || "Resultados e aprendizados serão compartilhados em breve."}
            </p>
          </section>
        </div>
      </main>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-5xl bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 shadow-2xl">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <video
              autoPlay
              controls
              className="w-full max-h-[80vh]"
            >
              <source src={`/projects/${projectName}/video.mp4`} type="video/mp4" />
              Seu navegador não suporta a visualização de vídeos.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
