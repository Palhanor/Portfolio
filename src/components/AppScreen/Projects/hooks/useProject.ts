import { project } from "@/interface/project";
import { useEffect, useState } from "react";

export default function useProjects() {
    const [projects, setProjects] = useState<project[]>([]);

    useEffect(() => {
        (async () => {
            const data = await fetch("./api/projects");
            const result = await data.json()
            // console.log("Teste projects");
            setProjects(() => result)
        })()
    }, []);

    return { projects };
}