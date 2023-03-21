import { post } from "@/interface/post";
import { useEffect, useRef, useState } from "react";

export default function usePosts() {
    const [allPosts, setAllPosts] = useState<post[]>([]);
    const [posts, setPosts] = useState<post[]>([]);
    const [morePosts, setMorePosts] = useState<boolean>(true);
    const numPosts = 3;

    useEffect(() => {
        (async () => {
            const data = await fetch("./api/posts");
            const result = await data.json();
            // console.log("Teste posts");
            setAllPosts(() => result);
            setPosts(() => result.slice(posts.length, posts.length + numPosts));
        })()
    }, []);

    const loadNewPosts = () => {
        const newPosts = allPosts.slice(posts.length, posts.length + numPosts);
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

    return { posts, morePosts, loadNewPosts }

}