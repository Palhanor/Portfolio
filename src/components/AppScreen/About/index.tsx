import React from "react";
import { aboutData, skillsData } from "@/data/about";
import Link from "next/link";
import { style } from "./style";

export default function About() {
  return (
    <section className={style.container}>
      <h2 className={style.title}>Sobre</h2>
      <div className={style.content}>
        <article className={style.textContainer}>
          <p className={style.paragraph}>{aboutData.p1}</p>
          <p className={style.paragraph}>{aboutData.p2}</p>
          <Link href="/cv/Curriculo.pdf" download="Curriculo">
            <button id="historico" className={style.download}>
              Baixar CV!
            </button>
          </Link>
        </article>
        <aside className={style.skills}>
          <div className={style.skillsContainer}>
            <h3 className={style.skillsTitle}>Skills</h3>
            {skillsData.map((skill) => (
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
