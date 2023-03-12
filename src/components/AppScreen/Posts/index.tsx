// TODO: Consumir a API do Medium para carregar os artigos (isso vai ser bem complicado pelo visto...)
//  https://medium.com/feed/@lucaspalhanof
//  https://stackoverflow.com/questions/36097527/how-to-retrieve-medium-stories-for-a-user-from-the-api

// TODO: Modificar para fazer um lazy load dentro do useEffect, pegando os 5 primeiro e depois de 5 segundos pegando o resto de uma so vez
//  Depois disso, a funcao do botao eh so exibir de 5 em 5
// Mase se o usuario for usar algum filtro, mostra logo tudo de uma vez...

"use client";

import React, { useEffect, useState } from "react";
import { postsData } from "@/data/posts";
import { textPreview } from "@/utils/textPreview";
import { post } from "@/interface/post";

export default function Posts() {
  const [posts, setPosts] = useState<post[]>([]);
  const [morePosts, setMorePosts] = useState<boolean>(true);

  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    loadNewPosts();
  }, []);

  const loadNewPosts = () => {
    const numPosts = 3;
    const newPosts = postsData.slice(posts.length, posts.length + numPosts);
    if (newPosts.length > 0) {
      const newRef = [...posts, ...newPosts];
      setPosts(() => newRef);
      if (newPosts.length < numPosts) {
        setMorePosts(() => false);
      }
    } else {
      setMorePosts(() => false);
    }
  };

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

  const styleSheet = {
    container: "my-section",
    sectionTitle: "my-section-title",
    filterContainer: "my-filter-container",
    filterInput: "my-filter-input",
    filterSelect: "my-filter-select",
    post: "w-full bg-white rounded-lg mb-8  ease-in-out duration-200 hover:shadow-md",
    postUrl: "flex justify-between max-h-[22vh]",
    postImg: "w-1/3 rounded-l-lg object-cover",
    postContent: "py-6 pr-10 pl-8 w-full",
    postDate: "my-date",
    postTitle: "my-content-title text-lg",
    postDescription: "my-content-text mb-4",
    postTag: "my-tag bg-slate-200 mr-3",
    button: (more: boolean) => {
      return more
        ? "my-post-button bg-sky-600 hover:bg-sky-700"
        : "my-post-button bg-gray-400 cursor-not-allowed";
    },
  };

  return (
    <section id="artigos" className={styleSheet.container}>
      <h2 className={styleSheet.sectionTitle}>Artigos</h2>
      <form className={styleSheet.filterContainer}>
        <input
          type="text"
          placeholder="Busque por artigos específicos!"
          value={search}
          onChange={handleSearch}
          className={styleSheet.filterInput}
        />
        <select className={styleSheet.filterSelect} onChange={handleFilter}>
          <option value="">Filtrar</option>
          {tagsList().map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </form>
      {filteredPosts().map((post: any) => (
        <article key={post.id} className={styleSheet.post}>
          <a href={post.url} target="_blank" className={styleSheet.postUrl}>
            <img
              src={post.imgSrc}
              alt={post.title}
              className={styleSheet.postImg}
            />
            <div className={styleSheet.postContent}>
              <div className={styleSheet.postDate}>{post.date}</div>
              <h3 className={styleSheet.postTitle}>{post.title}</h3>
              <p className={styleSheet.postDescription}>
                {textPreview(post.description, 280)}
              </p>
              {post.tags.map((tag: string) => (
                <span key={tag} className={styleSheet.postTag}>
                  {tag}
                </span>
              ))}
            </div>
          </a>
        </article>
      ))}
      <button onClick={loadNewPosts} className={styleSheet.button(morePosts)}>
        Carregar mais
      </button>
    </section>
  );
}
