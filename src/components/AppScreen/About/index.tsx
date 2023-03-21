"use client";

import Link from "next/link";
import { style } from "./style";
import React, { useEffect, useRef, useState } from "react";
import { skill } from "@/interface/skill";

export default function About() {
  const [skills, setSkills] = useState<skill[]>([]);

  useEffect(() => {
    (async () => {
      const data = await fetch("./api/skills");
      const result = await data.json();
      // console.log("Teste skills");
      setSkills(() => result);
    })();
  }, []);

  return (
    <section className={style.container}>
      <h2 className={style.title}>Sobre</h2>
      <div className={style.content}>
        <article className={style.textContainer}>
          <p className={style.paragraph}>
            Eu me chamo Lucas Palhano Fonseca e sou apaixonado por programação e
            tecnologia. Meu objetivo pessoal é contribuir com a construção de um
            futuro melhor através de soluções inovadoras voltadas para a
            resolução de problemas comuns a todos nós. Ao longo desta jornada,
            espero me tornar um profissional e um ser humano melhor a cada dia!
          </p>
          <p className={style.paragraph}>
            Estou cursando Análise de Desenvolvimento de Sistemas, e atualmente
            tenho sólidos conhecimentos em tecnologias Front-end, como: HTML5,
            CSS3, JavaScript (ES6+), TypeScript, React e NextJs. Ainda, estou
            estudando conteúdos voltado para desenvolvimento Back-end, como:
            Python, NodeJS, Java e SQL. Meu principal objetivo é alcançar o
            nível de Full-stack, mas acima de tudo, busco sempre ser um
            resolvedor de problemas!
          </p>
          <Link href="/cv/Curriculo.pdf" download="Curriculo">
            <button id="historico" className={style.download}>
              Baixar CV!
            </button>
          </Link>
        </article>
        <aside className={style.skills}>
          <div className={style.skillsContainer}>
            <h3 className={style.skillsTitle}>Skills</h3>
            {skills.map((skill) => (
              <details key={skill.value} open={true}>
                <summary className={style.skillsArea}>{skill.title}</summary>
                {skill.items.map((item) => (
                  <span key={item} className={style.skillTag(item)}>
                    {item}
                  </span>
                ))}
              </details>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
