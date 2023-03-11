// TODO: Adicionar o Medium entre as redes sociais

"use client";

import React, { useEffect, useState } from "react";
import { headerNav, headerSocial } from "@/data/header";
import Link from "next/link";

export default function Header() {
  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", changeScroll);
    return () => window.removeEventListener("scroll", changeScroll);
  });

  const changeScroll = () => {
    setScroll(() => window.scrollY);
  };

  const styleSheet = {
    navbar: (scroll: number) => {
      return scroll == 0 ? "my-header-navbar" : "my-header-navbar shadow-md";
    },
    listItems: "flex justify-around w-[20vw] list-none text-xl",
    item: "cursor-pointer",
    logo: "h-[5vh] cursor-pointer",
    listSocial: "flex justify-end w-[20vw] list-none text-xl",
    social: "ml-7",
    socialImg: "w-10 h-10",
  };

  return (
    <header>
      <nav className={styleSheet.navbar(scroll)}>
        <ul className={styleSheet.listItems}>
          {headerNav.map((item) => (
            <li key={item} className={styleSheet.item}>
              {item}
            </li>
          ))}
        </ul>
        <img src="/logo_preta.png" alt="Logo" className={styleSheet.logo} />
        <ul className={styleSheet.listSocial}>
          {headerSocial.map((social) => (
            <li key={social.imgAlt} className={styleSheet.social}>
              <Link href={social.url} target="_blank">
                <img
                  src={social.imgSrc}
                  alt={social.imgAlt}
                  className={styleSheet.socialImg}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
