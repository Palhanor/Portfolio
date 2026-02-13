import type { NextApiRequest, NextApiResponse } from "next";
import { history } from "./data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(history);
}
