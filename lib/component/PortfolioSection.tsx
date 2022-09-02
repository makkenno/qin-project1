import { Center, Grid, Space } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { PortfolioResponse } from "lib/type";
import Link from "next/link";
import { Portfolio, SectionTitle, Button, Container } from ".";

export const PortfolioSection = (props: { portfolios: PortfolioResponse }) => {
  const matches = useMediaQuery("(max-width: 768px)");

  return (
    <Container>
      <SectionTitle title="Portfolio" />
      <Space h="md" />
      <Grid gutter="md">
        {props.portfolios.contents.map((portfolio) => (
          <Grid.Col key={portfolio.id} span={matches ? 12 : 4}>
            <Portfolio {...portfolio} />
          </Grid.Col>
        ))}
      </Grid>
      <Space h="xl" />
      <Center>
        <Link href="./portfolio" passHref>
          <Button>View All</Button>
        </Link>
      </Center>
    </Container>
  );
};
