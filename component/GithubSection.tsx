import { Space, Stack } from "@mantine/core";
import { SectionTitle, Repository, Button, Container } from ".";

export const GithubSection = () => {
  return (
    <Container>
      <SectionTitle title="GitHub" />
      <Space h="md" />
      <Stack spacing="xl">
        <Repository />
        <Repository />
        <Repository />
        <Button>View on GitHub</Button>
      </Stack>
    </Container>
  );
};
