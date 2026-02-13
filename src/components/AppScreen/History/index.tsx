"use client";

import React from "react";
import useHistory from "./hooks/useHistory";
import { cn } from "@/lib/utils";

export default function History() {
  const { history } = useHistory();

  return (
    <section id="historico" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 mb-10">
        Histórico
      </h2>

      <div className="relative ml-4">
        {/* Vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-800" />

        <ul className="space-y-8">
          {history.map((step, index) => (
            <li
              key={step.title}
              className={cn(
                "relative pl-8 group",
                "animate-fade-in-up"
              )}
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
            >
              {/* Dot marker */}
              <div className="absolute left-0 top-2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-zinc-700 bg-zinc-950 group-hover:border-zinc-400 transition-colors" />

              <div className="rounded-lg border border-zinc-800/50 bg-zinc-900/50 p-5 hover:bg-zinc-900 transition-colors">
                <span className="text-xs text-zinc-500 font-medium">
                  {step.start} — {step.end}
                </span>
                <h3 className="text-base font-medium text-zinc-200 mt-1">
                  {step.title}
                  <span className="text-zinc-500 font-normal">
                    {" "}· {step.location}
                  </span>
                </h3>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
