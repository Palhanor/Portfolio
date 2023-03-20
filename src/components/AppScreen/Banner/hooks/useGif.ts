import { useState, useEffect, useRef } from 'react';

export default function useGif() {
    const count = useRef<number>(0);
    const [src, setSrc] = useState<string>("/gifs/html.webp");
    const bannerGifs = [
        "/gifs/html.webp",
        "/gifs/css.webp",
        "/gifs/js.webp",
        "/gifs/react.webp",
        "/gifs/vscode.webp",
        "/gifs/git.webp",
        "/gifs/python.webp",
    ]

    useEffect(() => {
        const timer = setTimeout(() => {
            count.current += 1;
            setSrc(() => bannerGifs[count.current % bannerGifs.length]);
        }, 1000);
        return () => clearTimeout(timer);
    }, [count, src]);

    return { src };
}