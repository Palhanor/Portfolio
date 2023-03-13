import { postsData } from "@/data/posts";
import { post } from "@/interface/post";
import { useEffect, useState } from "react";

export default function usePosts() {
    const [posts, setPosts] = useState<post[]>([]);
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

    return { posts, morePosts, loadNewPosts }

}