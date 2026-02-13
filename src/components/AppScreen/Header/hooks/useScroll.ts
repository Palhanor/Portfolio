import { useEffect, useState } from "react";

export default function useScroll() {
    const [scroll, setScroll] = useState<number>(0);

    useEffect(() => {
        window.addEventListener("scroll", changeScroll);
        return () => window.removeEventListener("scroll", changeScroll);
    }, []);

    const changeScroll = () => {
        setScroll(() => window.scrollY);
    };

    return { scroll }
}