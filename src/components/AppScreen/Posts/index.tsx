// TODO: Consumir a API do Medium para carregar os artigos (isso vai ser bem complicado pelo visto...)
//  https://www.youtube.com/watch?v=0gON4MUdJE8
//  https://medium.com/feed/@lucaspalhanof
//  Pega cada pos pela tag <item> => title, link, category[], pubDate e content:encoded
//  Vai ser preciso parsear o content para pegar o src da primeira imagem (capa) e o texto do primeiro paragrafo (descricao)
//  Depois disso deve ser possivel compor um blog dentro do meu próprio site, consumido diretamente pelo Medium
//  Uma alternativa menos root é usar o Rapid API: https://rapidapi.com/nishujain199719-vgIfuFHZxVZ/api/medium2 - https://mediumapi.com/

"use client";

import React, { useState } from "react";
import { textPreview } from "@/utils/textPreview";
import usePosts from "./hooks/usePosts";
import { style } from "./style";

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
    console.log(e.target.value);
  };

  const tagsList = () => {
    const list: Set<string> = new Set();
    posts.forEach((post) => {
      post.tags.forEach((tag) => {
        list.add(tag);
      });
    });
    const tagList: string[] = Array.from(list);
    return tagList;
  };

  return (
    <section id="artigos" className={style.container}>
      <h2 className={style.sectionTitle}>Artigos</h2>
      <form className={style.filterContainer}>
        <input
          type="text"
          placeholder="Busque por artigos específicos!"
          value={search}
          onChange={handleSearch}
          className={style.filterInput}
        />
        <select className={style.filterSelect} onChange={handleFilter}>
          <option value="">Filtrar</option>
          {tagsList().map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </form>
      {filteredPosts().map((post: any) => (
        <article key={post.id} className={style.post}>
          <a href={post.url} target="_blank" className={style.postUrl}>
            <img src={post.img} alt={post.title} className={style.postImg} />
            <div className={style.postContent}>
              <div className={style.postDate}>{post.date}</div>
              <h3 className={style.postTitle}>{post.title}</h3>
              <p className={style.postDescription}>
                {textPreview(post.description, window.innerWidth)}
              </p>
              {post.tags.map((tag: string) => (
                <span key={tag} className={style.postTag}>
                  {tag}
                </span>
              ))}
            </div>
          </a>
        </article>
      ))}
      <button onClick={loadNewPosts} className={style.button(morePosts)}>
        Carregar mais
      </button>
    </section>
  );
}
