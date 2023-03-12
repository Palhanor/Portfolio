import React from "react";

export default function Footer() {
  const styleSheet = {
    container:
      "w-[90vw] h-[15vh] p-10 mt-[5vh] mx-[5vw] flex justify-between items-center flex-row border-y border-b-0",
    copyright: "font-1 text-lightgray",
    email: "font-1 text-lightgray",
  };

  return (
    <footer className={styleSheet.container}>
      <span className={styleSheet.copyright}>
        &#169; Copyright 2023 - Lucas Palhano
      </span>
      <a href="mailto:lucaspalhanof@gmail.com" className={styleSheet.email}>
        lucaspalhanof@gmail.com
      </a>
    </footer>
  );
}