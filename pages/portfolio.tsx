import type { NextPage } from "next";
import { Space, Stack } from "@mantine/core";
import {
  Layout,
  SectionTitle,
  Container,
  Portfolio as PortfolioComponent,
} from "lib/component";

const Portfolio: NextPage = () => {
  return (
    <Layout>
      <Space h="xl" />
      <Container>
        <SectionTitle title="Portfolio" />
        <Space h="md" />
        <Stack spacing="xl">
          <PortfolioComponent />
          <PortfolioComponent />
          <PortfolioComponent />
          <PortfolioComponent />
        </Stack>
      </Container>
      <Space h={80} />
    </Layout>
  );
};

export default Portfolio;
