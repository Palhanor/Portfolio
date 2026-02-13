import React from "react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 pb-10 pt-4">
      <Separator className="mb-8" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} Lucas Palhano Fonseca
        </span>
        <a
          href="mailto:lucaspalhanof@gmail.com"
          className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          lucaspalhanof@gmail.com
        </a>
      </div>
    </footer>
  );
}
