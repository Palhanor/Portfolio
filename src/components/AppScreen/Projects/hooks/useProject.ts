import { projectsData } from "@/data/projects";
import { project } from "@/interface/project";
import { useEffect, useState } from "react";

export default function useProjects() {
    const [projects, setProjects] = useState<project[]>([]);

    useEffect(() => {
        setProjects(() => projectsData);
    }, []);

    return { projects };
}