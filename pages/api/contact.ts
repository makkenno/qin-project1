import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "lib/client";
import { Blog } from "type";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, name, message } = req.body.params;
  await client.create({
    endpoint: "contact",
    content: {
      email,
      name,
      message,
    },
  });
  res.status(200).json({ message: "success" });
};

export default handler;
