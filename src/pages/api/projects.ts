import { projectsData } from "@/data/projects"

export default function handler(req: any, res: any) {
    res.status(200).json(projectsData)
}