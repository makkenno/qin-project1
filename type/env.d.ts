declare namespace NodeJS {
  interface ProcessEnv {
    readonly MICROCMS_API_KEY: string;
    readonly TWITTER_TOKEN: string;
    readonly TWITTER_ID: string;
  }
}
