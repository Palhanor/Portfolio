import { historyData } from "@/data/history";
import React from "react";
import { style } from "./style";

export default function History() {
  return (
    <section className={style.container}>
      <h2 className={style.sectionTitle}>Histórico</h2>
      <div className={style.leftBorder}>
        <ul className={style.historyContainer}>
          {historyData.map((step) => (
            <li key={step.title} className={style.historyStep}>
              <div className={style.bullet}></div>
              <div className={style.textContainer}>
                <div className={style.stepDate}>{step.year}</div>
                <h3 className={style.stepTitle}>{step.title}</h3>
                <p className={style.stepDescription}>{step.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
