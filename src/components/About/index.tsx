// TODO: Inserir a opção de baixar o curriculo

"use client";

import React, { useState } from "react";
import { aboutData, badgesData } from "@/data/about";
import { badges } from "@/interfaces/badges";

export default function About() {
  const [teste, setTeste] = useState<badges>("");

  const handleBadges = (val: badges) => {
    setTeste((atual) => (atual == val ? "" : val));
  };

  const styleSheet = {
    container:
      "mt-6vh mb-10vh mr-5vw ml-5vw flex justify-between items-stretch flex-row",
    textSection: "w-3/5",
    title: "mb-5 text-3xl text-darkgray",
    paragraph: "text-xl mb-5",
    badges: "w-2/6",
    badgeBorder: (val: badges) => {
      const baseStyle =
        "bg-background bg-cover bg-center bg-no-repeat rounded-xl p-1 mt-8";
      if (teste == val) return `${baseStyle} h-auto`;
      else return `${baseStyle} h-20`;
    },
    badgeContainer: "p-5 bg-white h-full rounded-lg cursor-pointer",
    badgeTitle: "text-xl mb-7 font-normal",
    badgeList: (val: badges) => {
      if (teste == val) return "grid grid-cols-4 gap-10 mb-5 list-none";
      else return "hidden";
    },
    badgeItem: "flex justify-center flex-col items-center flow-reverse",
    badgeImg: "mb-3 w-14",
  };

  return (
    <section id="sobre" className={styleSheet.container}>
      <article className={styleSheet.textSection}>
        <h2 className={styleSheet.title}>{aboutData.title}</h2>
        <p className={styleSheet.paragraph}>{aboutData.p1}</p>
        <p className={styleSheet.paragraph}>{aboutData.p2}</p>
      </article>
      <aside className={styleSheet.badges}>
        {badgesData.map((badge) => (
          <aside
            key={badge.value}
            className={styleSheet.badgeBorder(badge.value as badges)}
            onClick={() => handleBadges(badge.value as badges)}
          >
            <div className={styleSheet.badgeContainer}>
              <h3 className={styleSheet.badgeTitle}>{badge.title}</h3>
              <ul className={styleSheet.badgeList(badge.value as badges)}>
                {badge.items.map((item) => (
                  <li key={item.label} className={styleSheet.badgeItem}>
                    <img
                      className={styleSheet.badgeImg}
                      src={item.imgSrc}
                      alt={item.label}
                    />
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        ))}
      </aside>
    </section>
  );
}
