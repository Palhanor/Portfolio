"use client";

import React from "react";
import { bannerData } from "@/data/banner";
import { FaChevronDown } from "react-icons/fa";
import useBackground from "./hooks/usebackground";
import useGif from "./hooks/useGif";
import { style } from "./style";

export default function Banner() {
  const { background } = useBackground();
  const { src } = useGif();

  const gotoAbout = () => {
    document.getElementById("sobre")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main id="home" className={style.card} style={{ background }}>
      <div className={style.content}>
        <div className={style.textContainer}>
          <h1 className={style.title}>{bannerData.title}</h1>
          <h2 className={style.subtitle}>{bannerData.subtitle}</h2>
        </div>
        <img src={src} alt="Ilustrações" className={style.ilustracoes} />
      </div>
      <div id="sobre" className={style.scrollDown} onClick={gotoAbout}>
        <FaChevronDown size={35} color="#FFF" />
      </div>
    </main>
  );
}
