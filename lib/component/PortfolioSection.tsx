import { Stack, Space } from "@mantine/core";
import { Portfolio, SectionTitle, Button, Container } from ".";

export const PortfolioSection = () => {
  return (
    <Container>
      <SectionTitle title="Portfolio" />
      <Space h="md" />
      <Stack spacing="xl">
        <Portfolio />
        <Portfolio />
        <Portfolio />
        <Button>View All</Button>
      </Stack>
    </Container>
  );
};
