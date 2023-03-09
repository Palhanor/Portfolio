"use client";

import React, { useState } from "react";
import { aboutData, badgesData } from "@/data/about";

type badges = "" | "linguagens" | "frameworks" | "ferramentas";

export default function About() {
  const [teste, setTeste] = useState<badges>("");

  return (
    <section
      id="sobre"
      className="mt-6vh mb-10vh mr-5vw ml-5vw flex justify-between items-stretch flex-row"
    >
      <article className="w-3/5">
        <h2 className="mb-5 text-3xl text-darkgray">{aboutData.title}</h2>
        <p className="text-xl mb-5">{aboutData.p1}</p>
        <p className="text-xl mb-5">{aboutData.p2}</p>
      </article>
      <div className="w-2/6">
        {badgesData.map((badge) => (
          <aside
            key={badge.value}
            className={
              teste == badge.value
                ? "bg-background bg-cover bg-center bg-no-repeat rounded-xl p-1 h-auto mt-8"
                : "bg-background bg-cover bg-center bg-no-repeat rounded-xl p-1 h-20 mt-8"
            }
            onClick={() =>
              setTeste((atual) => (atual == badge.value ? "" : badge.value))
            }
          >
            <div className="p-5 bg-white h-full rounded-lg cursor-pointer">
              <h3 className="text-xl mb-7 font-normal">{badge.title}</h3>
              <ul
                className={
                  teste == badge.value
                    ? "grid grid-cols-4 gap-10 mb-5 list-none"
                    : "hidden"
                }
              >
                {badge.items.map((item) => (
                  <li
                    key={item.label}
                    className="flex justify-center flex-col items-center flow-reverse"
                  >
                    <img
                      className="mb-3 w-14"
                      src={item.imgSrc}
                      alt={item.label}
                    />
                    <br />
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        ))}
      </div>
    </section>
  );
}
