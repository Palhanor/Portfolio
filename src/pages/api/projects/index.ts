import type { NextApiRequest, NextApiResponse } from "next";

const projects = [
    {
        name: "Notely",
        id: "notely",
        description: `Aplicativo mobile multiplataforma voltado para a criação e gestão de notas leves e estilizadas através do formato Markdown.`,
        homepage: "",
        repository: "https://github.com/Palhanor/Notely",
        tech: ["React Native", "Expo", "TypeScript", "Markdown"],
        carouselImages: [
            "https://picsum.photos/seed/notely1/800/400",
            "https://picsum.photos/seed/notely2/800/400",
            "https://picsum.photos/seed/notely3/800/400",
        ],
        about: "O Notely é um aplicativo mobile multiplataforma para criação e organização de notas em Markdown, focado em produtividade, uso offline e uma experiência de escrita rápida e sem distrações. A proposta é oferecer um ambiente simples, fluido e confiável para quem prefere escrever e organizar ideias com texto estruturado.",
        problemSolution: "Problema: A maioria dos apps de notas prioriza excesso de funcionalidades, interfaces pesadas ou não oferece uma boa experiência para usuários que preferem Markdown e uso offline./nSolução: O Notely foi desenhado como um app leve, offline-first e com suporte nativo a Markdown, priorizando velocidade de uso, organização simples e foco total na escrita.",
        architecture: "A arquitetura do Notely é baseada em componentes desacoplados e separação clara de responsabilidades, facilitando manutenção, evolução do produto e testes. O estado da aplicação foi estruturado para suportar uso offline e garantir consistência entre interface e persistência local.",
        stackTools: "React Native, Expo, TypeScript, Markdown Rendering, SQLite",
        resultsLearnings: "O projeto trouxe aprendizados práticos sobre arquitetura mobile, gerenciamento de estado offline, experiência de escrita em dispositivos móveis e trade-offs de performance no ecossistema do Expo. Além disso, reforçou a importância de decisões técnicas alinhadas ao contexto real de uso do produto.",
    },

    {
        name: "QR Key",
        id: "qr-key",
        description: `Aplicativo mobile voltado para a geração e leitura de QR Codes de forma privada através de algoritmos de criptografia avançada.`,
        homepage: "",
        repository: "https://github.com/Palhanor/QR-Key",
        tech: ["React Native", "Expo", "TypeScript", "Cryptography", "QR Code"],
    },

    {
        name: "Searchin",
        id: "searchin",
        description: `Start Page desenvolvida para permitir que os usuários realizem buscas avançadas de forma direta através dos principais websites da internet.`,
        homepage: "https://searchin-beta.vercel.app/",
        repository: "https://github.com/Palhanor/SearchIn",
        tech: ["React", "TypeScript", "SASS", "Vite"],
    },

    {
        name: "Ma2Up",
        id: "ma2up",
        description: `Landing Page com estética brutalista desenvolvida para a agência de marketing Ma2Up, com a finalidade de apresentar seus serviços e informações de contato.`,
        homepage: "https://ma2up-git-main-lucaspalhano.vercel.app/#fale-conosco",
        repository: null,
        tech: ["React", "TypeScript", "SASS", "Vite"],
    },

    {
        name: "1o Supermercado de Pneus",
        id: "1o-supermercado-de-pneus",
        description: `Landing Page desenvolvida para a loja Supermercado de Pneus, referência do setor automobilístico de João Pessoa.`,
        homepage: "https://supermercado-de-pneus-git-main-lucaspalhano.vercel.app",
        repository: null,
        tech: ["React", "TypeScript", "SASS", "Vite"],
    },

    {
        name: "Psicoterapeuta Denis",
        id: "psicoterapeuta-denis",
        description: `Landing Page minimalista desenvolvida para o psicoterapeuta Denis Yuri, com o objetivo de apresentar seus serviços e informações de contato.`,
        homepage: "https://deniscunha.vercel.app/",
        repository: null,
        tech: ["React", "TypeScript", "SASS", "Vite"],
    },

    // {
    //   name: "Pokedex",
    //   id: "pokedex",
    //   description: `Este é um projeto constrúido com o objetivo de elaborar uma User 
    //   Interface para o consumo da PokeAPI. O objetivo principal deste foi lidar com 
    //   requisições para APIs externas e desenvolver uma aplicação sofisticada e moderna 
    //   através de uma interface previamnte elaborada`,
    //   homepage: "https://palhanor.github.io/Pokedex/",
    //   repository: "https://github.com/Palhanor/Pokedex",
    //   tech: ["React", "TypeScript", "CSS3", "Axios"],
    // },

    // {
    //   name: "Portfólio",
    //   id: "portfolio",
    //   description: `Este é um website pofissional desenvolvido com o objetivo 
    //   de servir como uma vitrine para projetos de desenvolvimento de sistemas. 
    //   Através deste é possível encontrar diversas informações sobre a carreira 
    //   profissional de Lucas Palhano, tal como sua trajetória, projetos e artigos, 
    //   assim como os seus meios de contato.`,
    //   homepage: "https://lucaspalhano.vercel.app/",
    //   repository: "https://github.com/Palhanor/Portfolio",
    //   tech: ["NextJS", "TypeScript", "TailwindCSS", "Markdown"],
    // },

    // {
    //   name: "Splittyn",
    //   id: "splittyn",
    //   description: `Webapp voltado para a divisão dos valores totais de consumo coletivo em 
    //   estabelecimentos comerciais, de acordo com as proporções de consumo individuais.`,
    //   homepage: "https://palhanor.github.io/Splittyn/",
    //   repository: "https://github.com/Palhanor/Splittyn",
    //   tech: ["React", "TypeScript", "Styled Components"],
    // },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(projects);
}