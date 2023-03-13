import { postsData } from "@/data/posts"

export default function handler(req: any, res: any) {
    res.status(200).json(postsData)
}