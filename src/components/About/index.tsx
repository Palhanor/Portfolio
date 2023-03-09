"use client";

import React, { useState } from "react";

type badges = "" | "linguagens" | "frameworks" | "ferramentas";

export default function About() {
  const [teste, setTeste] = useState<badges>("");

  return (
    <section
      id="sobre"
      className="mt-6vh mb-10vh mr-5vw ml-5vw flex justify-between items-stretch flex-row"
    >
      <article className="w-3/5">
        <h2 className="mb-5 text-3xl text-darkgray">Sobre</h2>
        <p className="text-xl mb-5">
          Eu me chamo Lucas Palhano e sou apaixonado por programação. Tenho como
          objetivo contribuir com a construção de um futuro melhor, buscando
          solucionar problemas através da tecnologia de inovação.
        </p>
        <p className="text-xl mb-5">
          Atualmente cursando Análise de Desenvolvimento de Sistemas, com
          objetivo em atuar enquanto desenvolvedor Full-stack. Contudo, tenho
          também interesse em diversas outras áreas, tais como Mobile e Data
          Science.
        </p>
      </article>
      <div className="w-2/6">
        <aside
          className={
            teste == "linguagens"
              ? "bg-background bg-cover bg-center bg-no-repeat rounded-xl p-1 h-auto mt-8"
              : "bg-background bg-cover bg-center bg-no-repeat rounded-xl p-1 h-20 mt-8"
          }
          onClick={() =>
            setTeste((atual) => (atual == "linguagens" ? "" : "linguagens"))
          }
        >
          <div className="p-5 bg-white h-full rounded-lg cursor-pointer">
            <h3 className="text-xl mb-7 font-normal">Linguagens</h3>
            <ul
              className={
                teste == "linguagens"
                  ? "grid grid-cols-4 gap-10 mb-5 list-none"
                  : "hidden"
              }
            >
              <li className="flex justify-center flex-col items-center flow-reverse">
                <img
                  className="mb-3 w-14"
                  src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png"
                  alt="Icone HTML"
                />
                <br />
                HTML5
              </li>
              <li className="flex justify-center flex-col items-center flow-reverse">
                <img
                  className="mb-3 w-14"
                  src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
                  alt="Icone CSS"
                />
                <br />
                CSS3
              </li>
              <li className="flex justify-center flex-col items-center flow-reverse">
                <img
                  className="mb-3 w-14"
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                  alt="Icone JavaScript"
                />
                <br />
                JavaScript
              </li>
              <li className="flex justify-center flex-col items-center flow-reverse">
                <img
                  className="mb-3 w-14"
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
                  alt="Icone TypeScript"
                />
                <br />
                TypeScript
              </li>
              <li className="flex justify-center flex-col items-center flow-reverse">
                <img
                  className="mb-3 w-14"
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
                  alt="Icone Python"
                />
                <br />
                Python
              </li>
            </ul>
          </div>
        </aside>
        <aside
          className={
            teste == "frameworks"
              ? "bg-background bg-cover bg-center bg-no-repeat rounded-xl p-1 h-auto mt-8"
              : "bg-background bg-cover bg-center bg-no-repeat rounded-xl p-1 h-20 mt-8"
          }
          onClick={() =>
            setTeste((atual) => (atual == "frameworks" ? "" : "frameworks"))
          }
        >
          <div className="p-5 bg-white h-full rounded-lg cursor-pointer">
            <h3 className="text-xl mb-7 font-normal">
              Frameworks e Bibliotecas
            </h3>
            <ul
              className={
                teste == "frameworks"
                  ? "grid grid-cols-4 gap-10 mb-5 list-none"
                  : "hidden"
              }
            >
              <li className="flex justify-center flex-col items-center flow-reverse">
                <img
                  className="mb-3 w-14"
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968358.png"
                  alt="Icone SASS"
                />
                <br />
                SASS
              </li>
              <li className="flex justify-center flex-col items-center flow-reverse">
                <img
                  className="mb-3 w-14"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                  alt="Icone React"
                />
                <br />
                React
              </li>
              <li className="flex justify-center flex-col items-center flow-reverse">
                <img
                  className="mb-3 w-14"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                  alt="Icone React Native"
                />
                <br />
                React Native
              </li>
              <li className="flex justify-center flex-col items-center flow-reverse">
                <img
                  className="mb-3 w-14"
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"
                  alt="Icone Bootstrap"
                />
                <br />
                Bootstrap
              </li>
            </ul>
          </div>
        </aside>
        <aside
          className={
            teste == "ferramentas"
              ? "bg-background bg-cover bg-center bg-no-repeat rounded-xl p-1 h-auto mt-8"
              : "bg-background bg-cover bg-center bg-no-repeat rounded-xl p-1 h-20 mt-8"
          }
          onClick={() =>
            setTeste((atual) => (atual == "ferramentas" ? "" : "ferramentas"))
          }
        >
          <div className="p-5 bg-white h-full rounded-lg cursor-pointer">
            <h3 className="text-xl mb-7 font-normal">Ferramentas</h3>
            <ul
              className={
                teste == "ferramentas"
                  ? "grid grid-cols-4 gap-10 mb-5 list-none"
                  : "hidden"
              }
            >
              <li className="flex justify-center flex-col items-center flow-reverse">
                <img
                  className="mb-3 w-14"
                  src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                  alt="Icone Git"
                />
                <br />
                Git
              </li>
              <li className="flex justify-center flex-col items-center flow-reverse">
                <img
                  className="mb-3 w-14"
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png"
                  alt="Icone Bootstrap"
                />
                <br />
                GitHub
              </li>
              <li className="flex justify-center flex-col items-center flow-reverse">
                <img
                  className="mb-3 w-14"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
                  alt="Icone Bootstrap"
                />
                <br />
                VS Code
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
