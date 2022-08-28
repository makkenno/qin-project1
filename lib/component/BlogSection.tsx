import { Space, Stack } from "@mantine/core";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { Blog } from "lib/type";
import { SectionTitle, Button, Container, BlogPosts } from ".";

export const BlogSection = (props: { blogs: MicroCMSListResponse<Blog> }) => {
  return (
    <Container>
      <SectionTitle title="Blog" />
      <Space h="md" />
      <Stack>
        <BlogPosts blogs={props.blogs} />
        <Button>View All</Button>
      </Stack>
    </Container>
  );
};
