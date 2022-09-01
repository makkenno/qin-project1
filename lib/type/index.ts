import { MicroCMSListResponse } from "microcms-js-sdk";

export type Blog = {
  id: number;
  title: string;
  content: string;
  publishedAt: string;
};

export type BlogResponse = MicroCMSListResponse<Blog>;
