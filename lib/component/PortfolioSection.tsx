import { Stack, Container, Space } from "@mantine/core";
import { Portfolio, SectionTitle, Button } from "./";

export const PortfolioSection = () => {
  return (
    <Container px="sm" className="w-full">
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
