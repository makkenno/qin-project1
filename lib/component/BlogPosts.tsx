import { MicroCMSListResponse } from "microcms-js-sdk";
import type { Blog, BlogResponse } from "lib/type";
import { BlogPost } from ".";

export const BlogPosts = ({
  items,
}: {
  items: MicroCMSListResponse<Blog>["contents"];
}) => {
  return (
    <>
      {items.map((item) => {
        return <BlogPost {...item} key={item.id} />;
      })}
    </>
  );
};
