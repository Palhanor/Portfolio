// Renderizador Markdown: https://github.com/remarkjs/react-markdown
// Usar uma extensão para interpretar GitHub: https://remarkjs.github.io/react-markdown/

"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function Readme() {
  const [readme, setReadme] = useState("");
  const pathname = usePathname();
  const projectName = pathname?.split("/") || [];

  useEffect(() => {
    (async () => {
      const data = await fetch(
        `https://raw.githubusercontent.com/palhanor/${projectName[2]}/main/README.md`
      );
      const responseText = await data.text();
      if (responseText) setReadme(() => responseText);
    })();
  });

  return (
    <>
      <div className="mb-10 overflow-y-auto whitespace-pre-wrap w-3/5 m-auto mt-10 bg-white rounded-md shadow-sm border border-solid border-gray-300">
        <div className="p-5">
          <h2 className="text-lg font-semibold">README.md</h2>
        </div>
        <hr />
        <div className="p-10 [&>h1]:text-4xl [&>h1]:font-bold [&>h2]:text-2xl [&>h2]:font-semibold [&>pre]:bg-slate-200 [&>pre]:p-5 [&>pre]:rounded-md">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {readme}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
}
