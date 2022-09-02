import Link from "next/link";
import { Anchor, Space, Stack } from "@mantine/core";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { Blog } from "lib/type";
import { SectionTitle, Button, Container, BlogPosts } from ".";

// TODO: デフォでブログは4つまで取得
export const BlogSection = (props: { blogs: MicroCMSListResponse<Blog> }) => {
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
