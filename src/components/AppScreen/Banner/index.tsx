"use client";

import React from "react";
import { ArrowDown, Download, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Banner() {
  const gotoAbout = () => {
    document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" });
  };

  const gotoProjects = () => {
    document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Dot pattern background */}
      <div className="absolute inset-0 bg-dot-pattern bg-dot-sm opacity-40" />

      {/* Gradient orb accent */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl text-center animate-fade-in">
        <p className="text-sm font-medium tracking-widest uppercase text-zinc-500 mb-4">
          Construção de produtos digitais
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-50 mb-6">
          Olá, me chamo{" "}
          <span className="bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-200 bg-clip-text text-transparent">
            Lucas Palhano
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Transformo boas ideias em produtos digitais de alto valor.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#contato">
              <Download className="mr-2 h-4 w-4" />
              Entrar em contato
            </Link>
          </Button>
          <Button variant="outline" size="lg" onClick={gotoProjects}>
            <FolderOpen className="mr-2 h-4 w-4" />
            Ver Projetos
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={gotoAbout}
        className="absolute bottom-10 z-10 text-zinc-500 hover:text-zinc-300 transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </main>
  );
}
