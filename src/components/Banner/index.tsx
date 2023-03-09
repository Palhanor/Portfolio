// TODO: Aplicar o tilt dentro do card principal
// TODO: Implementar o sistema de rolagem para baixo

"use client";

import React, { useEffect, useRef, useState } from "react";
import { bannerData, bannerGifs } from "@/data/banner";

export default function Banner() {
  const count = useRef<number>(0);
  const [src, setSrc] = useState<string>("/html.webp");

  useEffect(() => {
    const timer = setTimeout(() => {
      count.current += 1;
      setSrc(() => bannerGifs[count.current % bannerGifs.length]);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, src]);

  return (
    <main
      id="home"
      className="box-border bg-background bg-cover bg-no-repeat bg-center w-95vw h-85vh flex justify-between items-center flex-col rounded-3xl cursor-pointer m-auto mt-12vh pt-20vh pr-12vw pb-6vh pl-8vw"
    >
      <div className="flex justify-between items-center flex-row w-full h-auto">
        <div className="w-50vw h-40vh p-3 flex justify-center items-start flex-col">
          <h1 className="text-4xl text-white font-semibold" id="home">
            {bannerData.title}
          </h1>
          <h2 className="text-3xl text-white mt-5">{bannerData.subtitle}</h2>
        </div>
        <img className="max-w-20vw max-h-30vh" src={src} alt="Ilustracao" />
      </div>
      <div className="h-7 w-9 bg-down bg-cover bg-no-repeat bg-center"></div>
    </main>
  );
}
