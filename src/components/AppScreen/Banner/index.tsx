"use client";

import React, { useEffect, useRef, useState } from "react";
import { bannerData, bannerGifs } from "@/data/banner";
import { FaChevronDown } from "react-icons/fa";

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

  const gotoAbout = () => {
    document.getElementById("sobre")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const styleSheet = {
    card: "h-screen w-full box-border bg-background bg-cover bg-no-repeat bg-center lg:w-[95vw] lg:h-[85vh] flex justify-between items-center flex-col lg:rounded-3xl cursor-pointer lg:m-auto lg:mt-[11vh] pt-[20vh] pr-[12vw] pb-[6vh] pl-[8vw]",
    content: "flex justify-between items-center flex-row w-full h-auto",
    textContainer:
      "w-[50vw] h-[40vh] p-3 flex justify-center items-start flex-col",
    title: "text-4xl text-white font-semibold",
    subtitle: "text-3xl text-white mt-5",
    ilustracoes: "max-w-[20vw] max-h-[30vh]",
    scrollDown: "h-7 w-9",
  };

  return (
    <main id="home" className={styleSheet.card}>
      <div className={styleSheet.content}>
        <div className={styleSheet.textContainer}>
          <h1 className={styleSheet.title}>{bannerData.title}</h1>
          <h2 className={styleSheet.subtitle}>{bannerData.subtitle}</h2>
        </div>
        <img src={src} alt="Ilustrações" className={styleSheet.ilustracoes} />
      </div>
      <div id="sobre" className={styleSheet.scrollDown} onClick={gotoAbout}>
        <FaChevronDown size={35} color="#FFF" />
      </div>
    </main>
  );
}
