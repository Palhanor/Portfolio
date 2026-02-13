"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const aboutItems = [
  {
    title: "Sistemas web",
    description: "Desenvolvimento de aplicações web modernas, com foco em performance, escalabilidade e experiência do usuário. Atuo desde a construção de interfaces até a integração com APIs e serviços, garantindo entregas prontas para produção.",
    stack: ["TypeScript", "React", "Next.js", "NodeJS", "SQL"]
  },
  {
    title: "Aplicações Mobile",
    description: "Desenvolvimento de aplicações mobile com foco em experiência do usuário, consistência entre plataformas e integração com backends modernos. Busco soluções que façam sentido em contexto real de uso, não apenas versões “mobile” do web.",
    stack: ["React Native", "Expo", "SQLite"]
  },
  {
    title: "Arquitetura de sistemas",
    description: "Definição de arquiteturas para produtos digitais, pensando em organização de código, separação de responsabilidades, escalabilidade e facilidade de evolução. Prezo por decisões técnicas alinhadas ao contexto do negócio e ao estágio do produto.",
    stack: ["AWS", "Docker", "CDN", "CI/CD", "REST API"]
  },
  // {
  //   title: "Automação e AI",
  //   description: "Construo produtos que utilizam inteligência artificial como parte central da experiência, não apenas como ferramenta de bastidor. Trabalho desde a concepção de features baseadas em IA até a integração de modelos de linguagem em fluxos reais de uso, sempre com foco em valor para o usuário e viabilidade técnica.",
  //   stack: ["Python", "LangChain", "n8n", "OpenClaw", "APIs de LLMs"]
  // }
];

export default function About() {
  return (
    <section
      id="sobre"
      className="container mx-auto max-w-6xl px-6 py-24 space-y-12"
    >
      <div className="space-y-6 mb-10">
        {/* Text content */}
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mb-6">
          Sobre
        </h2>
        <article className="space-y-4">
          <p className="text-zinc-400 leading-relaxed text-lg mb-3">
            Construo produtos digitais modernos, do zero à produção. Meu foco é transformar ideias em soluções que geram valor real, com atenção a arquitetura, qualidade, escalabilidade e experiência do usuário.
          </p>
          <p className="text-zinc-400 leading-relaxed text-lg mb-3">
            Trabalho bem em ambientes de produto, colaborando com design, negócio e engenharia para entregar soluções que fazem sentido no mundo real. Tenho interesse em práticas modernas como CI/CD, DevOps, observabilidade e uso prático de IA no desenvolvimento de software.
          </p>
        </article>
      </div>

      {/* Cards Grid */}
      <style jsx>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 640px) {
          .about-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
      <div className="about-grid">
        {aboutItems.map((item) => (
          <Card
            key={item.title}
            className="bg-zinc-900/40 border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300 flex flex-col"
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-zinc-100">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 flex-1 flex flex-col">
              <p className="text-sm text-zinc-400 leading-relaxed flex-1 mb-2">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {item.stack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="bg-zinc-950/50 text-zinc-400 border-zinc-800 hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-xs font-normal"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
