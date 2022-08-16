import type { NextPage } from "next";
import { Layout, SectionTitle } from "lib/component";
import { Space } from "@mantine/core";

const Blog: NextPage = () => {
  return (
    <Layout>
      <Space h={40} />
      <SectionTitle title="Blog" />
    </Layout>
  );
};

export default Blog;
