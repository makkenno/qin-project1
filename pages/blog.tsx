import type { GetStaticProps, NextPage } from "next";
import { Space, Stack, Loader, Center } from "@mantine/core";
import type { Blog as BlogType } from "lib/type";
import { Layout, SectionTitle, Container, BlogPosts } from "lib/component";
import { client } from "lib/client";
import { MicroCMSListResponse } from "microcms-js-sdk";

const Blog: NextPage<MicroCMSListResponse<BlogType>> = (props) => {
  return (
    <Layout>
      <Space h="xl" />
      <Container>
        <SectionTitle title="Blog" />
        <Space h="md" />
        <Stack>
          <BlogPosts blogs={props} />
          <Center>
            <Loader />
          </Center>
          <Space h="lg" />
        </Stack>
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<
  MicroCMSListResponse<BlogType>
> = async () => {
  const data = await client.getList({ endpoint: "blogs" });
  return {
    props: data,
  };
};

export default Blog;
