import type { GetStaticProps, NextPage } from "next";
import { Center, Loader, Space, Stack } from "@mantine/core";

import { Layout, SectionTitle, Container, BlogPosts } from "lib/component";
import { client } from "lib/client";
import { Blog, BlogResponse } from "lib/type";
import InfiniteScroll from "react-infinite-scroll-component";
import { useMemo, useState } from "react";
import axios from "axios";

export const getStaticProps: GetStaticProps<BlogResponse> = async () => {
  const data = await client.getList<Blog>({
    endpoint: "blogs",
    queries: { limit: 10 },
  });
  return {
    props: data,
  };
};

const BlogPage: NextPage<BlogResponse> = (props) => {
  const [items, setItems] = useState<BlogResponse["contents"]>(props.contents);

  const hasMore =
    props.totalCount > items.length || props.totalCount !== items.length;

  const fetchBlog = async () => {
    const { data } = await axios.get<BlogResponse>("/api/blog", {
      params: {
        offset: items.length,
      },
    });

    setItems([...items, ...data.contents]);
  };
  return (
    <Layout>
      <Space h="xl" />
      <InfiniteScroll
        next={fetchBlog}
        loader={
          <Center>
            <Loader />
          </Center>
        }
        dataLength={items.length}
        hasMore={hasMore}
      >
        <Container>
          <SectionTitle title="Blog" />
          <Space h="md" />
          <Stack>
            <BlogPosts items={items} />
            <Space h="lg" />
          </Stack>
        </Container>
      </InfiniteScroll>
    </Layout>
  );
};

export default BlogPage;
