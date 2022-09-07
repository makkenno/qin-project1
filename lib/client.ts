import { createClient } from "microcms-js-sdk"; //ES6

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: "makino-blog",
  apiKey: process.env.API_KEY,
});
