import { Container, Space, Stack } from "@mantine/core";
import { SectionTitle, Tweet, Button } from ".";

export const TwitterSection = () => {
  return (
    <Container px="sm" className="w-full">
      <SectionTitle title="Twitter" />
      <Space h="md" />
      <Stack spacing={56}>
        <Tweet />
        <Tweet />
        <Tweet />
        <Button>View on Twitter</Button>
      </Stack>
    </Container>
  );
};
