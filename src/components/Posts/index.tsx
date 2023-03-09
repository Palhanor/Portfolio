import React from "react";

export default function Posts() {
  return (
    <section id="artigos" className="artigos">
      <h2 className="artigos__titulo">Artigos</h2>
      <article className="artigos__post">
        <img
          src="https://i.pinimg.com/originals/38/08/41/3808416ffb2c432735bbfcf2cd3a72cc.jpg"
          alt="Ilustração de uma QR Code composto por diversos itens distintos"
          className="artigos__imagem"
        />
        <div className="artigos__conteudo">
          <div className="artigos__data">12/12/2012</div>
          <h3 className="artigos__nome">Como funciona um QR Code?</h3>
          <p className="artigos__descricao">
            Etiam metus urna, commodo at mi ac, lobortis euismod tortor. Nulla
            metus nisi, mattis nec nulla eget, laoreet mollis ex. Duis ligula
            lacus, rutrum id rhoncus at, pellentesque et sapien. Pellentesque
            metus mi, auctor vitae convallis egestas, pulvinar vitae eros.
          </p>
          <span className="artigos__tag">Medium</span>
        </div>
      </article>
      <article className="artigos__post">
        <img
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--VavnkOO1--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/sxz87xpo2lgkt63zdrlx.jpg"
          alt="Icone do markdown sobre um fundo sofisticado"
          className="artigos__imagem"
        />
        <div className="artigos__conteudo">
          <div className="artigos__data">12/12/2012</div>
          <h3 className="artigos__nome">Mas afinal, o que é o markdown?</h3>
          <p className="artigos__descricao">
            Etiam metus urna, commodo at mi ac, lobortis euismod tortor. Nulla
            metus nisi, mattis nec nulla eget, laoreet mollis ex. Duis ligula
            lacus, rutrum id rhoncus at, pellentesque et sapien. Pellentesque
            metus mi, auctor vitae convallis egestas, pulvinar vitae eros.
          </p>
          <span className="artigos__tag">LinkedIn</span>
        </div>
      </article>
    </section>
  );
}
