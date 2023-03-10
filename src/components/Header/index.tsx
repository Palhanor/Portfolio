"use client";

import React, { useEffect, useState } from "react";
import { headerNav, headerSocial } from "@/data/header";
import Link from "next/link";

export default function Header() {
  const [scroll, setScroll] = useState<number>(0);

  const changeScroll = () => {
    setScroll(() => window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeScroll);
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
      <ul className="flex justify-around w-20vw list-none text-xl">
        {headerNav.map((nav) => (
          <li key={nav} className="cursor-pointer">
            {nav}
          </li>
        ))}
      </ul>
      <img src="/logo_preta.png" alt="Logo" className="h-5vh cursor-pointer" />
      <ul className="flex justify-end w-20vw list-none text-xl">
        {headerSocial.map((social) => (
          <li key={social.imgAlt} className="ml-7">
            <Link href={social.url} target="_blank">
              <img
                src={social.imgSrc}
                alt={social.imgAlt}
                className="w-10 h-10"
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
