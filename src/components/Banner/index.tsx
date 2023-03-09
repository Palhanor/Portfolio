import React from "react";

export default function Banner() {
  return (
    <main
      id="home"
      className="box-border bg-background bg-cover bg-no-repeat bg-center w-95vw h-85vh flex justify-between items-center flex-col rounded-3xl cursor-pointer m-auto mt-12vh pt-20vh pr-12vw pb-6vh pl-8vw"
    >
      <div className="flex justify-between items-center flex-row w-full h-auto">
        <div className="w-50vw h-40vh p-3 flex justify-center items-start flex-col">
          <h1 className="text-4xl text-white font-semibold" id="home">
            Olá, me chamo Lucas Palhano.
          </h1>
          <h2 className="text-3xl text-white mt-5">
            Sou um estudante de programação apaixonado por tecnologia e
            inovação, buscando contribuir com a contrução de um futuro melhor.
          </h2>
        </div>
        <img
          className="max-w-20vw max-h-30vh"
          src="https://media0.giphy.com/media/XAxylRMCdpbEWUAvr8/giphy.gif?cid=790b76116ae5338a3995ed13f1488ae515116f3fc7acf45e&rid=giphy.gif&ct=s"
          alt="Ilustracao"
        />
      </div>
      <div className="h-7 w-9 bg-down bg-cover bg-no-repeat bg-center"></div>
    </main>
  );
}
