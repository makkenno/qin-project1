import type { NextPage } from "next";
import { Layout, SectionTitle } from "lib/component";
import { Space } from "@mantine/core";

const Contact: NextPage = () => {
  return (
    <Layout>
      <Space h={40} />
      <SectionTitle title="Contact" />
    </Layout>
  );
};

export default Contact;
