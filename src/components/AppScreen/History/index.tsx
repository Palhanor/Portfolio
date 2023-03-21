"use client";

import React from "react";
import useHistory from "./hooks/useHistory";
import { style } from "./style";

export default function History() {
  const { history } = useHistory();

  return (
    <section className={style.container}>
      <h2 className={style.sectionTitle}>Histórico</h2>
      <div className={style.leftBorder}>
        <ul className={style.historyContainer}>
          {history.map((step) => (
            <li key={step.title} className={style.historyStep}>
              <div className={style.bullet}></div>
              <div className={style.textContainer}>
                <div className={style.stepDate}>
                  {step.start} - {step.end}
                </div>
                <h3 className={style.stepTitle}>
                  {step.title} ({step.location})
                </h3>
                <p className={style.stepDescription}>{step.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
