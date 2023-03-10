import { historyData } from "@/data/history";
import React from "react";

export default function History() {
  return (
    <section id="curriculo" className="mt-6vh mb-10vh mr-5vw ml-5vw">
      <h2 className="mb-5 text-3xl text-darkgray">Currículo</h2>
      <div className="bg-background bg-cover bg-no-repeat bg-center w-full pl-1">
        <ul className="bg-lightblue">
          {historyData.map((step) => (
            <li key={step.titulo} className="flex justify-between items-center p-5 rounded-r-xl ease-in-out hover:bg-darkenlightblue">
              <div className="bg-background bg-center bg-cover bg-no-repeat w-5 h-5 rounded-full -ml-8 relative after:content-[''] after:w-3 after:h-3 after:bg-white after:rounded-full after:absolute after:left-1 after:top-1"></div>
              <div className="w-85vw">
                <div className="text-lightgray mb-1 text-sm">{step.ano}</div>
                <h3 className="text-2xl text-mediumgray mb-3 font-medium">
                  {step.titulo}
                </h3>
                <p className="text-lg text-lightgray font-small block mb-2">
                  {step.descricao}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
