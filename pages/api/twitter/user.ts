import type { NextApiRequest, NextApiResponse } from "next";
import { twitterClient } from "lib/client";

const getUser = async (_req: NextApiRequest, res: NextApiResponse) => {
  const { data } = await twitterClient.get("?user.fields=profile_image_url");

  res.status(200).json(data);
};

export default getUser;
