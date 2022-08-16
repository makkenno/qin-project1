import type { NextPage } from "next";
import { Layout, SectionTitle } from "lib/component";
import { Space } from "@mantine/core";

const About: NextPage = () => {
  return (
    <Layout>
      <Space h={40} />
      <SectionTitle title="About" />
    </Layout>
  );
};

export default About;
