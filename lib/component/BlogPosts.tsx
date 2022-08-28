import { MicroCMSListResponse } from "microcms-js-sdk";
import type { Blog } from "lib/type";
import { BlogPost } from ".";

export const BlogPosts = ({ blogs }: { blogs: MicroCMSListResponse<Blog> }) => {
  return (
    <>
      {blogs.contents.map((blog) => {
        return (
          <BlogPost
            title={blog.title}
            content={blog.content}
            publishedAt={blog.publishedAt}
            key={blog.id}
          />
        );
      })}
    </>
  );
};
