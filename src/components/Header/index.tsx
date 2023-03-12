"use client";

import React, { useEffect, useState } from "react";
import { headerNav } from "@/data/header";
import Link from "next/link";
import { FaGithubSquare, FaLinkedin, FaMedium } from "react-icons/fa";

export default function Header() {
  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", changeScroll);
    return () => window.removeEventListener("scroll", changeScroll);
  });

  const changeScroll = () => {
    setScroll(() => window.scrollY);
  };

  const scrollPage = (section: string) => {
    const elem = document.getElementById(section);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const styleSheet = {
    navbar: (scroll: number) => {
      return scroll == 0 ? "my-header-navbar" : "my-header-navbar shadow-md";
    },
    listItems: "flex justify-around w-[20vw] list-none text-xl",
    item: "cursor-pointer",
    logo: "h-[5vh] cursor-pointer",
    listSocial: "flex justify-end w-[20vw] list-none text-xl",
    social: "ml-5",
  };

  return (
    <header>
      <nav className={styleSheet.navbar(scroll)}>
        <ul className={styleSheet.listItems}>
          {headerNav.map((item) => (
            <li
              key={item.id}
              className={styleSheet.item}
              onClick={() => scrollPage(item.id)}
            >
              {item.title}
            </li>
          ))}
        </ul>
        <img src="/logo_preta.png" alt="Logo" className={styleSheet.logo} />
        <ul className={styleSheet.listSocial}>
          <li className={styleSheet.social}>
            <Link
              href="https://www.linkedin.com/in/lucaspalhano"
              target="_blank"
            >
              <FaLinkedin size={42} />
            </Link>
          </li>
          <li className={styleSheet.social}>
            <Link href="https://github.com/Palhanor" target="_blank">
              <FaGithubSquare size={42} />
            </Link>
          </li>
          <li className={styleSheet.social}>
            <Link href="https://medium.com/@lucaspalhanof" target="_blank">
              <FaMedium size={42} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
