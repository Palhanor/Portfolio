// TODO: Consumir a API do Medium para carregar os artigos (isso vai ser bem complicado pelo visto...)
//  https://medium.com/feed/@lucaspalhanof
//  https://stackoverflow.com/questions/36097527/how-to-retrieve-medium-stories-for-a-user-from-the-api

// TODO: Modificar para fazer um lazy load dentro do useEffect, pegando os 5 primeiro e depois de 5 segundos pegando o resto de uma so vez
//  Depois disso, a funcao do botao eh so exibir de 5 em 5
// Mase se o usuario for usar algum filtro, mostra logo tudo de uma vez...

"use client";

import React, { useState } from "react";
import { postsData } from "@/data/posts";
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
    postsData.forEach((post) => {
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
            <img src={post.imgSrc} alt={post.title} className={style.postImg} />
            <div className={style.postContent}>
              <div className={style.postDate}>{post.date}</div>
              <h3 className={style.postTitle}>{post.title}</h3>
              <p className={style.postDescription}>
                {textPreview(post.description, 280)}
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
