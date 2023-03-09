import React from "react";

export default function Projects() {
  return (
    <section id="portfolio" className="portfolio">
      <h2 className="portfolio__titulo">Portfólio</h2>
      <ul className="portfolio__cards">
        <li id="notely" className="portfolio__card-borda">
          <div className="portfolio__card-imagem portfolio__card-imagem--notely"></div>
          <div className="portfolio__card-tela"></div>
          <div className="portfolio__card-texto">
            <h3 className="portfolio__card-titulo">Notely</h3>
            <p className="portfolio__card-descricao">
              O Notely é um sistema otimizado de criação e gestão de notas em
              markdown, que permite uma maior produtividade por aliar
              simplicidade, organização e personalização.
            </p>
            <h4 className="portfolio__card-subtitulo">Tecnologias</h4>
            <span className="portfolio__card-tag tag-react">React Native</span>
            <span className="portfolio__card-tag tag-expo">Expo</span>
            <span className="portfolio__card-tag tag-typescript">
              TypeScript
            </span>
            <h4 className="portfolio__card-subtitulo">Links</h4>
            <a
              href="https://github.com/Palhanor/Notely"
              target="_blank"
              className="portfolio__card-link"
            >
              Github
            </a>
            <a
              href="https://www.behance.net/gallery/151573985/Notely-Aplicativo-de-notas"
              target="_blank"
              className="portfolio__card-link"
            >
              Behance
            </a>
            <a
              href="https://www.figma.com/proto/m8hfIAfIwQXoQR1ulxm3GM/Notely?scaling=scale-down&page-id=0%3A1&starting-point-node-id=63%3A325&node-id=63%3A325"
              target="_blank"
              className="portfolio__card-link"
            >
              Figma
            </a>
          </div>
        </li>
        <li id="qrkey" className="portfolio__card-borda">
          <div className="portfolio__card-imagem portfolio__card-imagem--qrkey"></div>
          <div className="portfolio__card-tela"></div>
          <div className="portfolio__card-texto">
            <h3 className="portfolio__card-titulo">QR Key</h3>
            <p className="portfolio__card-descricao">
              O QR Key tem como intuito de permitir a criação e visualização de
              QR Codes privados de forma simples e intuitiva, bastando
              configurar uma senha mestra necessária para sua decodificação.
            </p>
            <h4 className="portfolio__card-subtitulo">Tecnologias</h4>
            <span className="portfolio__card-tag tag-react">React Native</span>
            <span className="portfolio__card-tag tag-expo">Expo</span>
            <span className="portfolio__card-tag tag-typescript">
              TypeScript
            </span>
            <h4 className="portfolio__card-subtitulo">Links</h4>
            <a
              href="https://github.com/Palhanor/QR-Key"
              target="_blank"
              className="portfolio__card-link"
            >
              Github
            </a>
          </div>
        </li>
        <li id="dynos" className="portfolio__card-borda">
          <div className="portfolio__card-imagem portfolio__card-imagem--dynos"></div>
          <div className="portfolio__card-tela"></div>
          <div className="portfolio__card-texto">
            <h3 className="portfolio__card-titulo">DynOS</h3>
            <p className="portfolio__card-descricao">
              DynOS (Dynamic OS) se trata de um programa desktop voltado para a
              automação na manipulação de arquivos e diretórios do computador de
              forma dinâmica e automatizada.
            </p>
            <h4 className="portfolio__card-subtitulo">Tecnologias</h4>
            <span className="portfolio__card-tag tag-python">Python</span>
            <h4 className="portfolio__card-subtitulo">Links</h4>
            <a
              href="https://github.com/Palhanor/DynOS"
              target="_blank"
              className="portfolio__card-link"
            >
              Github
            </a>
          </div>
        </li>
        <li id="website" className="portfolio__card-borda">
          <div className="portfolio__card-imagem portfolio__card-imagem--website"></div>
          <div className="portfolio__card-tela"></div>
          <div className="portfolio__card-texto">
            <h3 className="portfolio__card-titulo">Website pessoal</h3>
            <p className="portfolio__card-descricao">
              Website pessoal criado como uma vitrine profissional própria,
              contendo informações relevantes acerca de minha trajetória,
              motivações e projetos realizados ao longo do tempo.
            </p>
            <h4 className="portfolio__card-subtitulo">Tecnologias</h4>
            <span className="portfolio__card-tag tag-html">HTML5</span>
            <span className="portfolio__card-tag tag-scss">SCSS</span>
            <span className="portfolio__card-tag tag-javascript">
              JavaScript
            </span>
            <h4 className="portfolio__card-subtitulo">Links</h4>
            <a
              href="https://github.com/Palhanor/website"
              target="_blank"
              className="portfolio__card-link"
            >
              Github
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
}
