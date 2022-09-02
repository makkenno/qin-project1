import type { GetStaticProps, NextPage } from "next";
import {
  Box,
  Title,
  Text,
  Space,
  Group,
  Stack,
  MediaQuery,
} from "@mantine/core";
import { FaTwitter, FaFacebook, FaRss } from "react-icons/fa";
import {
  Layout,
  BlogSection,
  PortfolioSection,
  GithubSection,
  TwitterSection,
  Container,
} from "lib/component";
import type { BlogResponse, PortfolioResponse } from "lib/type";
import { client } from "lib/client";
import { useMediaQuery } from "@mantine/hooks";

type Props = {
  blogs: BlogResponse;
  portfolios: PortfolioResponse;
};
const Home: NextPage<Props> = (props) => {
  const matches = useMediaQuery("(max-width: 768px)");
  return (
    <Layout>
      <Box sx={(theme) => ({ background: theme.colors.pink[6], height: 248 })}>
        <Container>
          <Box className="flex items-center w-full" sx={{ height: 248 }}>
            <Stack
              spacing={matches ? 44 : 0}
              className="w-full"
              sx={{
                flexDirection: matches ? "column" : "row",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Title order={2} className="text-white">
                  Makino Portfolio
                </Title>
                <Text
                  size={16}
                  mt={4}
                  weight={700}
                  color="white"
                  sx={{ fontFamily: "YuGothic" }}
                >
                  まきののポートフォリオのためのページです
                </Text>
              </Box>

              <Group spacing="sm">
                <FaTwitter size={18} fill="white" />
                <FaFacebook size={18} fill="white" />
                <FaRss size={18} fill="white" />
              </Group>
            </Stack>
          </Box>
        </Container>
      </Box>
      <Space h="xl" />
      <Stack spacing={60}>
        <BlogSection blogs={props.blogs} />
        <PortfolioSection portfolios={props.portfolios} />
        <MediaQuery
          query="(min-width: 768px)"
          styles={{
            alignItems: "flex-start",
            flexWrap: "nowrap",
            maxWidth: 1000 + 16 * 2,
            margin: "0 auto",
          }}
        >
          <Group>
            <GithubSection />
            <TwitterSection />
          </Group>
        </MediaQuery>
      </Stack>
      <Space h={60} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogs = await client.getList({
    endpoint: "blogs",
    queries: { limit: 4 },
  });
  const portfolios = await client.getList({
    endpoint: "portfolio",
    queries: { limit: 6 },
  });

  return {
    props: {
      blogs: blogs,
      portfolios: portfolios,
    },
  };
};
export default Home;
