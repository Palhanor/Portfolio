import { historyData } from "@/data/history";
import React from "react";

export default function History() {
  const styleSheet = {
    container: "my-section",
    sectionTitle: "my-section-title",
    leftBorder: "bg-background bg-cover bg-no-repeat bg-center w-full pl-1",
    historyContainer: "bg-lightblue",
    historyStep:
      "flex justify-between items-center p-5 rounded-r-xl ease-in-out hover:bg-darkenlightblue",
    bullet:
      "bg-background bg-center bg-cover bg-no-repeat w-5 h-5 rounded-full -ml-8 relative after:content-[''] after:w-3 after:h-3 after:bg-white after:rounded-full after:absolute after:left-1 after:top-1",
    textContainer: "w-[85vw] pr-10",
    stepDate: "my-date",
    stepTitle: "my-content-title text-lg",
    stepDescription: "my-content-text mb-2",
  };

  return (
    <section id="historico" className={styleSheet.container}>
      <h2 className={styleSheet.sectionTitle}>Histórico</h2>
      <div className={styleSheet.leftBorder}>
        <ul className={styleSheet.historyContainer}>
          {historyData.map((step) => (
            <li key={step.title} className={styleSheet.historyStep}>
              <div className={styleSheet.bullet}></div>
              <div className={styleSheet.textContainer}>
                <div className={styleSheet.stepDate}>{step.year}</div>
                <h3 className={styleSheet.stepTitle}>{step.title}</h3>
                <p className={styleSheet.stepDescription}>{step.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
