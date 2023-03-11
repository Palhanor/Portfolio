"use client";

// TODO: Consumir a API do Medium para carregar os artigos
//  https://medium.com/feed/@lucaspalhanof
//  https://stackoverflow.com/questions/36097527/how-to-retrieve-medium-stories-for-a-user-from-the-api
// TODO: Criar um mecanismo de busca entre os posts, ou filtro entre as linguagens e plataformas (por exemplo)

import React, { useEffect, useState } from "react";
import { postsData } from "@/data/posts";
import { textPreview } from "@/utils/textPreview";

export default function Posts() {
  const [posts, setPosts] = useState<any>([]);
  const [morePosts, setMorePosts] = useState<boolean>(true);

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

  const styleSheet = {
    container: "my-section",
    sectionTitle: "my-section-title",
    post: "w-full bg-white rounded-lg mb-8  ease-in-out duration-200 hover:shadow-md",
    postUrl: "flex justify-between max-h-[22vh]",
    postImg: "w-1/3 rounded-l-lg object-cover",
    postContent: "py-6 pr-10 pl-8 w-full",
    postDate: "my-date",
    postTitle: "text-lg mb-2",
    postDescription: "mb-2 text-mediumgray",
    postTag: "my-tag bg-slate-200",
    button: () => {
      return morePosts
        ? "my-post-button bg-sky-600 hover:bg-sky-700"
        : "my-post-button bg-gray-400 cursor-not-allowed";
    },
  };

  return (
    <section id="artigos" className={styleSheet.container}>
      <h2 className={styleSheet.sectionTitle}>Artigos</h2>
      {posts.map((post: any) => (
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
              <span className={styleSheet.postTag}>{post.platform}</span>
            </div>
          </a>
        </article>
      ))}
      <button onClick={loadNewPosts} className={styleSheet.button()}>
        Carregar mais
      </button>
    </section>
  );
}
