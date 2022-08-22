import type { NextPage } from "next";
import { Space, Stack, Loader, Center } from "@mantine/core";
import { Layout, SectionTitle, BlogPost, Container } from "lib/component";

const Blog: NextPage = () => {
  return (
    <Layout>
      <Space h="xl" />
      <Container>
        <SectionTitle title="Blog" />
        <Space h="md" />
        <Stack>
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <Center>
            <Loader />
          </Center>
          <Space h="lg" />
        </Stack>
      </Container>
    </Layout>
  );
};

export default Blog;
