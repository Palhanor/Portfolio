import React from "react";

export default function History() {
  return (
    <section id="curriculo" className="curriculo">
      <h2 className="curriculo__titulo">Currículo</h2>
      <div className="curriculo__borda">
        <ul className="curriculo__cards">
          <li className="curriculo__card">
            <div className="curriculo__bolinha"></div>
            <div className="curriculo__conteudo">
              <div className="curriculo__data">2022 - 2024</div>
              <h3 className="curriculo__nome">
                Análise e Desenvolvimento de sistemas (Cruzeiro do Sul)
              </h3>
              <p className="curriculo__descricao">
                Atualmente, tendo em vista a necessidade de formalizar os
                conhecimentos adquiridos e desenvolvidos na Altura, surgiu a
                oportunidade de cursar um curso superior tecnólogo na Cruzeiro
                do Sul. Até então a experiência tem sido extremamente
                engrandecedora, possibilitando o contato com toda uma nova gama
                de conhecimentos relevantes para um profissional da área de
                desenvolvimento de software.
              </p>
            </div>
          </li>
          <li className="curriculo__card">
            <div className="curriculo__bolinha"></div>
            <div className="curriculo__conteudo">
              <div className="curriculo__data">2021 - 2022</div>
              <h3 className="curriculo__nome">
                Curso de programação online (Alura)
              </h3>
              <p className="curriculo__descricao">
                Ao fim do curso de Relações Internacionais, e com todo o caos
                ocasionado pela pandemia, me vi em um período de auto reflexão,
                o qual me levou a um retorno às origens. Decidido em voltar para
                a área que sempre me fascinou, resolvi começar a cursar a Alura,
                onde pude voltar a estudar temas diversos sobre programação,
                como HTML, CSS, Front-end, React e React Native.
              </p>
            </div>
          </li>
          <li className="curriculo__card">
            <div className="curriculo__bolinha"></div>
            <div className="curriculo__conteudo">
              <div className="curriculo__data">2019 - 2020</div>
              <h3 className="curriculo__nome">
                Estágio em Comércio Exterior (Líderi)
              </h3>
              <p className="curriculo__descricao">
                Ainda imerso no contexto da graduação no curso de Relações
                Internacionais, me deparei com a oportunidade de estagiar na
                Líderi, a Empresa Júnior de RI. Esta experiência me foi
                extremamente engrandecedora e gratificante, me possibilitando
                atuar no setor de venda através do cargo de diretor comercial,
                onde precisei traçar estratégias e liderar equipes para alcançar
                as metas de faturamento da empresa.
              </p>
            </div>
          </li>
          <li className="curriculo__card">
            <div className="curriculo__bolinha"></div>
            <div className="curriculo__conteudo">
              <div className="curriculo__data">2015 - 2022</div>
              <h3 className="curriculo__nome">
                Bacharelado em Relações Internacionais (UFPB)
              </h3>
              <p className="curriculo__descricao">
                Após o encerramento de um ciclo, me veio a vontade de arriscar
                algo diferente, com vistas a expandir meus conhecimentos acerca
                do mundo e sua complexidade. Assim, fui cursar Relações
                Internacionais na UFPB, onde tive contato com um vasto conteúdo
                multidisciplinar transpassando temas em economia, política,
                história e sociologia.
              </p>
            </div>
          </li>
          <li className="curriculo__card">
            <div className="curriculo__bolinha"></div>
            <div className="curriculo__conteudo">
              <div className="curriculo__data">2011 - 2014</div>
              <h3 className="curriculo__nome">
                Curso Técnico de Eletrônica (IFPB)
              </h3>
              <p className="curriculo__descricao">
                Desde muito cedo fascinado pelas tecnologias, fui cursar o
                ensino médio e técnico em Eletrônica no IFPB. Foi lá onde pude
                ter meus primeiros contatos com disciplinas voltadas para campos
                de programação e lógica, através de assuntos como programação em
                C e Python, assim como Circuitos Lógicos e Projetos de
                Eletrônica Aplicada.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
