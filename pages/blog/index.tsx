import type { GetStaticProps, NextPage } from "next";
import { Space, Stack } from "@mantine/core";

import { Layout, SectionTitle, Container, BlogPosts } from "lib/component";
import { client } from "lib/client";
import { Blog, BlogResponse } from "lib/type";

export const getStaticProps: GetStaticProps<BlogResponse> = async () => {
  const data = await client.getList<Blog>({ endpoint: "blogs" });
  return {
    props: data,
  };
};

// TODO: ブログ個別ページに飛べるようにする
// TODO: infinitescrollを実装する→useSWRinfinite？
const Blog: NextPage<BlogResponse> = (props) => {
  return (
    <Layout>
      <Space h="xl" />
      <Container>
        <SectionTitle title="Blog" />
        <Space h="md" />
        <Stack>
          <BlogPosts blogs={props} />
          <Space h="lg" />
        </Stack>
      </Container>
    </Layout>
  );
};

export default Blog;
