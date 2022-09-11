import type { NextApiRequest, NextApiResponse } from "next";
import { twitterClient } from "lib/client";

const getTweet = async (_req: NextApiRequest, res: NextApiResponse) => {
  const { data } = await twitterClient.get(
    "tweets?max_results=5&tweet.fields=created_at&user.fields=name,profile_image_url&exclude=replies,retweets"
  );

  res.status(200).json(data);
};

export default getTweet;
