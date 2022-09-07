import Link from "next/link";
import { Space, Stack } from "@mantine/core";
import { BlogResponse } from "type";
import { SectionTitle, Button, Container, BlogPosts } from ".";

export const BlogSection = (props: { blogs: BlogResponse }) => {
  return (
    <Container>
      <SectionTitle title="Blog" />
      <Space h="md" />
      <Stack>
        <BlogPosts items={props.blogs.contents} />
        <Link href="./blog" passHref>
          <Button component="a">View All</Button>
        </Link>
      </Stack>
    </Container>
  );
};
