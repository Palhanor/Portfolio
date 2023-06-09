"use client";

import React from "react";
import Link from "next/link";
import { FaGithubSquare, FaLinkedin, FaMedium } from "react-icons/fa";
import useScroll from "./hooks/useScroll";
import { style } from "./style";

export default function Header() {
  const { scroll } = useScroll();

  const scrollPage = (section: string) => {
    const elem = document.getElementById(section);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const gotoTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header>
      <nav className={style.navbar(scroll)}>
        <ul className={style.listItems}>
          <li className={style.item} onClick={() => scrollPage("sobre")}>
            Sobre
          </li>
          <li className={style.item} onClick={() => scrollPage("historico")}>
            Projetos
          </li>
          <li className={style.item} onClick={() => scrollPage("projetos")}>
            Histórico
          </li>
          <li className={style.item} onClick={() => scrollPage("artigos")}>
            Artigo
          </li>
        </ul>
        <img
          src="/logo.png"
          alt="Logo"
          className={style.logo}
          onClick={gotoTop}
        />
        <ul className={style.listSocial}>
          <li className={style.social}>
            <Link
              href="https://www.linkedin.com/in/lucaspalhano"
              target="_blank"
            >
              <FaLinkedin size={42} />
            </Link>
          </li>
          <li className={style.social}>
            <Link href="https://github.com/Palhanor" target="_blank">
              <FaGithubSquare size={42} />
            </Link>
          </li>
          <li className={style.social}>
            <Link href="https://medium.com/@lucaspalhanof" target="_blank">
              <FaMedium size={42} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
