"use client";

import React, { useState } from "react";
import { textPreview } from "@/utils/textPreview";
import usePosts from "./hooks/usePosts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export default function Posts() {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("");

  const { posts, morePosts, loadNewPosts } = usePosts();

  const filteredPosts = () => {
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) &&
        (post.tags.includes(filter) || !filter)
    );
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(() => e.target.value);
  };

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(() => e.target.value);
  };

  const tagsList = () => {
    const list: Set<string> = new Set();
    posts.forEach((post) => {
      post.tags.forEach((tag) => {
        list.add(tag);
      });
    });
    return Array.from(list);
  };

  return (
    <section id="conteudos" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 mb-10">
        Conteúdos
      </h2>

      {/* Search and filter */}
      <div className="flex gap-3 mb-8">
        <Input
          type="text"
          placeholder="Buscar conteúdo..."
          value={search}
          onChange={handleSearch}
          className="flex-1 h-10"
        />
        <select
          className="h-10 rounded-md border border-zinc-700 bg-transparent px-3 text-sm text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400"
          onChange={handleFilter}
          value={filter}
        >
          <option value="">Todos</option>
          {tagsList().map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Posts list */}
      <div className="space-y-5">
        {filteredPosts().map((post: any) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            className="group block"
          >
            <Card className="flex overflow-hidden transition-all duration-200 hover:border-zinc-600">
              {/* Thumbnail */}
              <div className="hidden lg:block w-64 flex-shrink-0">
                <img
                  src={post.img}
                  alt={post.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-5 lg:p-6">
                <span className="text-xs text-zinc-500 font-medium">
                  {post.date}
                </span>
                <h3 className="text-base font-semibold text-zinc-200 mt-1 mb-2 group-hover:text-zinc-50 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-zinc-400 mb-3 line-clamp-2 leading-relaxed">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag: string) => (
                    <Badge key={tag} variant="muted">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </a>
        ))}
      </div>

      {/* Load more button */}
      <div className="flex justify-center mt-10">
        <Button
          variant={morePosts ? "outline" : "ghost"}
          onClick={loadNewPosts}
          disabled={!morePosts}
          className="min-w-[160px]"
        >
          {morePosts ? "Carregar mais" : "Sem mais artigos"}
        </Button>
      </div>
    </section>
  );
}
