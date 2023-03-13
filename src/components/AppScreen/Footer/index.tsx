import React from "react";
import { style } from "./style";

export default function Footer() {
  return (
    <footer className={style.container}>
      <span className={style.copyright}>
        &#169; Copyright 2023 - Lucas Palhano
      </span>
      <a href="mailto:lucaspalhanof@gmail.com" className={style.email}>
        lucaspalhanof@gmail.com
      </a>
    </footer>
  );
}
