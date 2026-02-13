import type { NextApiRequest, NextApiResponse } from "next";

export const skills = [
    {
        title: "Linguagens",
        value: "linguagens",
        items: [
            "HTML5", "CSS3", "JavaScript", "TypeScript", "Python"
        ]
    },
    {
        title: "Bibliotecas e Frameworks",
        value: "frameworks",
        items: [
            "SASS", "React", "React Native", "Bootstrap", "TailwindCSS", "NextJS", "Expo"
        ]
    },
    {
        title: "Ferramentas",
        value: "ferramentas",
        items: [
            "GIT", "GitHub", "VS Code", "Markdown", "PyCharm"
        ]
    },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(skills);
}