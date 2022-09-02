import type { GetStaticProps, NextPage } from "next";
import { useMediaQuery } from "@mantine/hooks";
import { Grid, Space } from "@mantine/core";
import { Layout, SectionTitle, Container, Portfolio } from "lib/component";
import { PortfolioResponse, PortfolioType } from "lib/type";
import { client } from "lib/client";

export const getStaticProps: GetStaticProps<PortfolioResponse> = async () => {
  const data = await client.getList<PortfolioType>({
    endpoint: "portfolio",
  });
  return {
    props: data,
  };
};

const PortfolioPage: NextPage<PortfolioResponse> = (props) => {
  const matches = useMediaQuery("(max-width: 768px)");

  return (
    <Layout>
      <Space h="xl" />
      <Container>
        <SectionTitle title="Portfolio" />
        <Space h="md" />
        <Grid gutter="md">
          {props.contents.map((portfolio) => (
            <Grid.Col key={portfolio.id} span={matches ? 12 : 4}>
              <Portfolio {...portfolio} />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
      <Space h={80} />
    </Layout>
  );
};

export default PortfolioPage;
