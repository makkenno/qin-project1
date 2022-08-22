import { Space, Stack } from "@mantine/core";
import { SectionTitle, BlogPost, Button, Container } from ".";

export const BlogSection = () => {
  return (
    <Container>
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
