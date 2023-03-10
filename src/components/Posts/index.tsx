"use client";

// TODO: Consumir a API do Medium para carregar os artigos
//  https://medium.com/feed/@lucaspalhanof
//  https://stackoverflow.com/questions/36097527/how-to-retrieve-medium-stories-for-a-user-from-the-api
// TODO: Criar um mecanismo de busca entre os posts, ou filtro entre as linguagens e plataformas (por exemplo)

import { postsData } from "@/data/posts";
import React, { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState<any>([]);
  const [morePosts, setMorePosts] = useState<boolean>(true);

  useEffect(() => {
    loadNewPosts();
  }, []);

  const truncateText = (text: string) => {
    return text.slice(0, 280).trim() + "...";
  };

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

  return (
    <section id="artigos" className="mt-6vh mb-10vh ml-5vw mr-5vw">
      <h2 className="mb-5 text-3xl">Artigos</h2>
      {posts.map((post: any) => (
        <article
          key={post.id}
          className="w-full bg-white rounded-lg mb-8  ease-in-out duration-200 hover:scale-[1.005] hover:shadow-md"
        >
          <a
            href={post.url}
            target="_blank"
            className="flex justify-between max-h-[22vh]"
          >
            <img
              src={post.imgSrc}
              alt={post.title}
              className="w-1/3 rounded-l-lg object-cover"
            />
            <div className="pt-6 pr-10 pb-6 pl-8 w-full">
              <div className="text-lightgray mt-1 mb-1 text-sm">
                {post.date}
              </div>
              <h3 className="text-lg mb-2">{post.title}</h3>
              <p className="mb-2 text-mediumgray">
                {truncateText(post.discription)}
              </p>
              <span className="bg-darkenlightblue text-sm inline-block rounded-sm p-1">
                {post.platform}
              </span>
            </div>
          </a>
        </article>
      ))}
      <button
        onClick={loadNewPosts}
        className={
          morePosts
            ? "mt-5 pt-4 pb-4 pl-10 pr-10 bg-sky-600 rounded-md text-white block m-auto hover:bg-sky-700"
            : "mt-5 pt-4 pb-4 pl-10 pr-10 bg-zinc-500 rounded-md text-white block m-auto"
        }
      >
        Carregar mais
      </button>
    </section>
  );
}
