import { MicroCMSListResponse } from "microcms-js-sdk";
import type { Blog } from "type";
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
