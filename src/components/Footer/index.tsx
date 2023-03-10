import React from "react";

export default function Footer() {
  return (
    <footer className="w-90vw h-15vh p-10 mt-5vh ml-5vw mr-5vw flex justify-between items-center flex-row border-y border-b-0">
      <span className="font-1 text-lightgray">
        &#169; Copyright 2022 - Lucas Palhano
      </span>
      <a
        href="mailto:lucaspalhanof@gmail.com"
        className="font-1 text-lightgray"
      >
        lucaspalhanof@gmail.com
      </a>
    </footer>
  );
}
