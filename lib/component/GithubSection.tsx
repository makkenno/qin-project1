import { Container, Space, Stack } from "@mantine/core";
import { SectionTitle, Repository, Button } from ".";

export const GithubSection = () => {
  return (
    <Container px="sm" className="w-full">
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
