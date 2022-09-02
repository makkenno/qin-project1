import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "lib/client";
import { Blog } from "lib/type";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query;
  const data = await client.getList<Blog>({
    endpoint: "blogs",
    queries: {
      limit: Number(query.limit) ?? 10,
      offset: Number(query.offset) ?? 0,
    },
  });
  res.status(200).json({ contents: data.contents });
};

export default handler;
