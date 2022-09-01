import { MicroCMSListResponse } from "microcms-js-sdk";
import type { Blog } from "lib/type";
import { BlogPost } from ".";

export const BlogPosts = ({ blogs }: { blogs: MicroCMSListResponse<Blog> }) => {
  return (
    <>
      {blogs.contents.map((blog) => {
        return <BlogPost {...blog} key={blog.id} />;
      })}
    </>
  );
};
