"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Header() {
  const [scroll, setScroll] = useState<number>(0);

  const changeScroll = () => {
    setScroll(() => window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeScroll);
    console.log(scroll);
    return () => window.removeEventListener("scroll", changeScroll);
  });

  return (
    <nav
      className={
        scroll == 0
          ? "bg-lightblue h-10vh pr-10 pl-10 flex items-center justify-between fixed top-0 z-10 w-full"
          : "bg-lightblue h-10vh pr-10 pl-10 flex items-center justify-between fixed top-0 z-10 w-full shadow-md"
      }
    >
      <ul className="flex justify-between w-20vw list-none text-xl">
        <li className="cursor-pointer">Sobre</li>
        <li className="cursor-pointer">Portfólio</li>
        <li className="cursor-pointer">Artigos</li>
        <li className="cursor-pointer">Currículo</li>
      </ul>
      {/* <div className={header.navbar__subir}></div> */}
      <picture>
        <source media="(max-width: 1279px)" srcSet="/logo_branca.png" />
        <source media="(min-width: 1280px)" srcSet="/logo_preta.png" />
        <img
          src="/logo_preta.png"
          alt="Logo"
          className="h-5vh cursor-pointer"
        />
      </picture>
      {/* <div className={header.navbar__descer}></div> */}
      <ul className="flex justify-end w-20vw list-none text-xl">
        <li className="ml-7">
          <Link href="https://www.linkedin.com/in/lucaspalhano" target="_blank">
            <img
              src="/linkedin_preto.png"
              alt="Link para o LinkedIn"
              className="w-10 h-10"
            />
          </Link>
        </li>

        <li className="ml-7">
          <Link href="https://github.com/Palhanor" target="_blank">
            <img
              src="/github_preto.png"
              alt="Link para o Github"
              className="w-10 h-10"
            />
          </Link>
        </li>

        <li className="ml-7">
          <Link href="https://www.behance.net/lucaspalhano2" target="_blank">
            <img
              src="/behance_preto.png"
              alt="Link para o Behance"
              className="w-10 h-10"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
