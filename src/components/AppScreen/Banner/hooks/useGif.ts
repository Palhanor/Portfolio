import { useState, useEffect, useRef } from 'react';
import { bannerGifs } from '@/data/banner';

export default function useGif() {
    const count = useRef<number>(0);
    const [src, setSrc] = useState<string>("/html.webp");

    useEffect(() => {
        const timer = setTimeout(() => {
            count.current += 1;
            setSrc(() => bannerGifs[count.current % bannerGifs.length]);
        }, 1000);
        return () => clearTimeout(timer);
    }, [count, src]);

    return { src };
}