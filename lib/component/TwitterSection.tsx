import { Space, Stack } from "@mantine/core";
import { SectionTitle, Tweet, Button, Container } from ".";

export const TwitterSection = () => {
  return (
    <Container>
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
