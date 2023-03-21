"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import colorTag from "@/utils/colorTag";
import { project } from "@/interface/project";
import useBackground from "@/hooks/usebackground";

import { AiOutlineLeft } from "react-icons/ai";

export default function Readme() {
  const pathname = usePathname();
  const router = useRouter();
  const projectName = pathname?.replace("/projetos/", "");
  const { background } = useBackground();
  const [readme, setReadme] = useState("");
  const [project, setProject] = useState<project>({
    id: "",
    name: "",
    description: "",
    homepage: "",
    repository: "",
    tech: [],
  });

  useEffect(() => {
    (async () => {
      const data = await fetch("../api/projects");
      const result = await data.json();
      const projeto = result.find((proj: project) => proj.id == projectName);
      // console.log("Teste projects");
      setProject(() => projeto);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const data = await fetch(
        `https://raw.githubusercontent.com/palhanor/${projectName}/main/README.md`
      );
      const responseText = await data.text();
      // console.log("Teste Readme");
      if (responseText) setReadme(() => responseText);
    })();
  }, []);

  return (
    <>
      <header className="w-full h-[8vh] px-3 lg:px-16 flex items-center">
        <div
          className="flex items-center lg:pt-[5px] cursor-pointer"
          onClick={() => router.back()}
        >
          <AiOutlineLeft size={25} />
          <h1 className="ml-1 lg:ml-3 bg-slate-100 text-xl lg:text-3xl font-semibold lg:mb-[5px]">
            {project.name}
          </h1>
        </div>
      </header>
      <div
        className="flex justify-center items-center lg:rounded-2xl lg:mt-[1vh] w-full lg:h-[88vh] lg:w-[92vw] m-auto overflow-hidden relative"
        style={{ background }}
      >
        <video
          autoPlay
          muted
          loop
          controls
          className="h-[90%] lg:brightness-90 max-h-[40vh] lg:max-h-[70vh]"
        >
          <source src={`/projects/${projectName}/video.mp4`} type="video/mp4" />
        </video>
      </div>

      <main className="flex justify-around items-start flex-col px-4 lg:px-0 lg:flex-row-reverse mt-10 lg:w-[84vw] m-auto gap-9 mb-10">
        <aside className="bg-white p-5 w-full lg:w-4/12 shadow-sm mx-auto rounded-md border border-solid border-gray-300">
          <div>
            <img
              src={`/projects/${projectName}/logo.png`}
              className="w-4/12 mr-3 rounded-lg float-left"
              alt=""
            />

            <h2 className="text-xl lg:text-2xl font-medium mb-3">
              {project.name}
            </h2>
            <div className="text-slate-700 lg:text-base">
              {project.description}
            </div>
          </div>
          <div className="mt-3">
            {project.tech.map((tech) => (
              <span key={tech} className={`my-tag mr-2 mb-2 ${colorTag(tech)}`}>
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-5 mt-3">
            {project.homepage && (
              <a
                href={project.homepage}
                target="_blank"
                className="w-1/2 p-3 border border-solid border-red-800 rounded-md text-center text-red-800 cursor-pointer hover:text-white hover:bg-red-800"
              >
                Website
              </a>
            )}
            <a
              href={project.repository}
              target="_blank"
              className="w-1/2 p-3 border border-solid border-blue-800 rounded-md text-center text-blue-800 cursor-pointer hover:text-white hover:bg-blue-800"
            >
              Repositório
            </a>
          </div>
        </aside>

        <div className="overflow-y-auto whitespace-pre-wrap w-full lg:w-8/12 bg-white rounded-md shadow-sm border border-solid border-gray-300">
          <div className="p-5">
            <h2 className="text-lg font-semibold">README.md</h2>
          </div>
          <hr />
          <div className="p-5 lg:p-10 [&>h2]:text-2xl [&>h2]:font-semibold [&>pre]:bg-slate-200 [&>pre>code]:p-5 [&>pre]:rounded-md [&>p>a]:text-blue-600">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {readme}
            </ReactMarkdown>
          </div>
        </div>
      </main>
    </>
  );
}
