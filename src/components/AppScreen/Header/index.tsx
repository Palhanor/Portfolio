"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, BookOpen } from "lucide-react";
import useScroll from "./hooks/useScroll";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Header() {
  const { scroll } = useScroll();

  const scrollPage = (section: string) => {
    const elem = document.getElementById(section);
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  const gotoTop = () => {
    window.scrollTo(0, 0);
  };

  const navItems = [
    { label: "Sobre", section: "sobre" },
    { label: "Projetos", section: "projetos" },
    { label: "Conteúdos", section: "conteudos" },
    { label: "Contato", section: "contato" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scroll > 0
          ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 shadow-lg shadow-black/10"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-8 cursor-pointer opacity-80 hover:opacity-100 transition-opacity invert"
          onClick={gotoTop}
        />

        <ul className="hidden md:flex items-center gap-8 list-none">
          {navItems.map((item) => (
            <li key={item.section}>
              <button
                onClick={() => scrollPage(item.section)}
                className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-zinc-50 after:transition-all hover:after:w-full"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://www.linkedin.com/in/lucaspalhano"
              target="_blank"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://github.com/Palhanor"
              target="_blank"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://medium.com/@lucaspalhanof"
              target="_blank"
              aria-label="Medium"
            >
              <BookOpen className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
