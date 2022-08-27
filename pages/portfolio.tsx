import type { NextPage } from "next";
import { useMediaQuery } from "@mantine/hooks";
import { Grid, Space } from "@mantine/core";
import {
  Layout,
  SectionTitle,
  Container,
  Portfolio as PortfolioComponent,
} from "lib/component";

const Portfolio: NextPage = () => {
  const matches = useMediaQuery("(max-width: 768px)");

  return (
    <Layout>
      <Space h="xl" />
      <Container>
        <SectionTitle title="Portfolio" />
        <Space h="md" />
        <Grid gutter="md">
          <Grid.Col span={matches ? 12 : 4}>
            <PortfolioComponent />
          </Grid.Col>
          <Grid.Col span={matches ? 12 : 4}>
            <PortfolioComponent />
          </Grid.Col>
          <Grid.Col span={matches ? 12 : 4}>
            <PortfolioComponent />
          </Grid.Col>
          <Grid.Col span={matches ? 12 : 4}>
            <PortfolioComponent />
          </Grid.Col>
          <Grid.Col span={matches ? 12 : 4}>
            <PortfolioComponent />
          </Grid.Col>
          <Grid.Col span={matches ? 12 : 4}>
            <PortfolioComponent />
          </Grid.Col>
        </Grid>
      </Container>
      <Space h={80} />
    </Layout>
  );
};

export default Portfolio;
