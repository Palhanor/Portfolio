import { history } from "@/interface/history";
import { useEffect, useRef, useState } from "react";

export default function useScroll() {
    const [history, setHistory] = useState<history[]>([]);

    useEffect(() => {
        (async () => {
            const data = await fetch("./api/history");
            const result = await data.json();
            // console.log("Teste history");
            setHistory(() => result);
        })()
    }, []);

    return { history }
}