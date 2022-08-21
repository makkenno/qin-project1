import { Container, Space, Stack } from "@mantine/core";
import { SectionTitle, BlogPost, Button } from ".";

export const BlogSection = () => {
  return (
    <Container px="sm" className="w-full">
      <SectionTitle title="Blog" />
      <Space h="md" />
      <Stack>
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <Button>View All</Button>
      </Stack>
    </Container>
  );
};
