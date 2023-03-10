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

  const styleSheet = {
    container: "mt-6vh mb-10vh ml-5vw mr-5vw",
    sectionTitle: "mb-7 text-3xl",
    post: "w-full bg-white rounded-lg mb-8  ease-in-out duration-200 hover:scale-[1.005] hover:shadow-md",
    postUrl: "flex justify-between max-h-[22vh]",
    postImg: "w-1/3 rounded-l-lg object-cover",
    postContent: "pt-6 pr-10 pb-6 pl-8 w-full",
    postDate: "text-lightgray mt-1 mb-1 text-sm",
    postTitle: "text-lg mb-2",
    postDescription: "mb-2 text-mediumgray",
    postTag: "bg-darkenlightblue text-sm inline-block rounded-sm p-1",
    button: () => {
      const baseStyle =
        "mt-5 pt-4 pb-4 pl-10 pr-10 rounded-md text-white block m-auto";
      if (morePosts) return `${baseStyle} bg-sky-600 hover:bg-sky-700`;
      else return `${baseStyle} bg-zinc-500`;
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
                {truncateText(post.description)}
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
