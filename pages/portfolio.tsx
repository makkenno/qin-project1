import type { NextPage } from "next";
import { Space, Container, Stack } from "@mantine/core";
import {
  Layout,
  SectionTitle,
  Portfolio as PortfolioComponent,
} from "lib/component";

const Portfolio: NextPage = () => {
  return (
    <Layout>
      <Space h="xl" />
      <Container px="sm" className="w-full">
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
