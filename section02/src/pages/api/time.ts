import type { NextApiRequest, NextApiResponse } from "next"; // 넥스트에서 자체적으로 기본 제공하는 타입

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const date = new Date();

  res.json({ time: date.toLocaleString() });
}
