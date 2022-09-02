import { MicroCMSListResponse } from "microcms-js-sdk";

export type Blog = {
  id: number;
  title: string;
  content: string;
  publishedAt: string;
};

export type BlogResponse = MicroCMSListResponse<Blog>;

export type PortfolioType = {
  id: string;
  title: string;
  description: string;
  image: { url: string; height: number; width: number };
  publishedAt: string;
};

export type PortfolioResponse = MicroCMSListResponse<PortfolioType>;
