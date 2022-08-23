import { Center, Grid, Space } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Portfolio, SectionTitle, Button, Container } from ".";

export const PortfolioSection = () => {
  const matches = useMediaQuery("(max-width: 768px)");

  return (
    <Container>
      <SectionTitle title="Portfolio" />
      <Space h="md" />
      <Grid gutter="md">
        <Grid.Col span={matches ? 12 : 4}>
          <Portfolio />
        </Grid.Col>
        <Grid.Col span={matches ? 12 : 4}>
          <Portfolio />
        </Grid.Col>
        <Grid.Col span={matches ? 12 : 4}>
          <Portfolio />
        </Grid.Col>
        <Grid.Col span={matches ? 12 : 4}>
          <Portfolio />
        </Grid.Col>
        <Grid.Col span={matches ? 12 : 4}>
          <Portfolio />
        </Grid.Col>
        <Grid.Col span={matches ? 12 : 4}>
          <Portfolio />
        </Grid.Col>
      </Grid>
      <Space h="xl" />
      <Center>
        <Button>View All</Button>
      </Center>
    </Container>
  );
};
