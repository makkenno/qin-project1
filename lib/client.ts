import { createClient } from "microcms-js-sdk"; //ES6

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: "makino-blog", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: "cd94bac5e8294297916a87c2351949aa4446",
});
