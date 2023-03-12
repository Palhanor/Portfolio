import React from "react";
import { aboutData, skillsData } from "@/data/about";
import Link from "next/link";
import colorTag from "@/utils/colorTag";

export default function About() {
  const styleSheet = {
    container: "my-section",
    title: "my-section-title",
    content: "flex justify-between items-stretch flex-row",
    textContainer: "w-3/5",
    paragraph: "text-xl mb-5",
    download:
      "mt-4 py-3 px-8 rounded-md text-white bg-red-600 hover:bg-red-700",
    skills: "w-2/6",
    skillsContainer: "w-full h-auto bg-white shadow-md rounded-xl py-4 px-7",
    skillsTitle: "my-content-title text-xl text-center mb-3",
    skillsArea: "my-content-title text-md mb-3 mt-2 cursor-pointer",
    skillTag: (tech: string) =>
      `my-tag mr-3 mb-3 cursor-pointer ${colorTag(tech)}`,
  };

  return (
    <section id="sobre" className={styleSheet.container}>
      <h2 className={styleSheet.title}>Sobre</h2>
      <div className={styleSheet.content}>
        <article className={styleSheet.textContainer}>
          <p className={styleSheet.paragraph}>{aboutData.p1}</p>
          <p className={styleSheet.paragraph}>{aboutData.p2}</p>
          <Link href="/cv/Curriculo.pdf" download="Curriculo">
            <button className={styleSheet.download}>Baixar CV!</button>
          </Link>
        </article>
        <aside className={styleSheet.skills}>
          <div className={styleSheet.skillsContainer}>
            <h3 className={styleSheet.skillsTitle}>Skills</h3>
            {skillsData.map((skill) => (
              <details key={skill.value} open={true}>
                <summary className={styleSheet.skillsArea}>
                  {skill.title}
                </summary>
                {skill.items.map((item) => (
                  <span key={item} className={styleSheet.skillTag(item)}>
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
