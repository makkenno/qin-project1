import type { NextPage } from "next";
import { Layout, SectionTitle } from "lib/component";
import { Space } from "@mantine/core";

const Portfolio: NextPage = () => {
  return (
    <Layout>
      <Space h={40} />
      <SectionTitle title="Portfolio" />
    </Layout>
  );
};

export default Portfolio;
