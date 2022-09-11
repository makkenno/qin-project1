import axios from "axios";
import { createClient } from "microcms-js-sdk"; //ES6

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: "makino-blog",
  apiKey: process.env.MICROCMS_API_KEY,
});

export const twitterClient = axios.create({
  baseURL: `https://api.twitter.com/2/users/${process.env.TWITTER_ID}/`,
  headers: {
    // NOTE: Bearer認証
    Authorization: `Bearer ${process.env.TWITTER_TOKEN}`,
  },
});
