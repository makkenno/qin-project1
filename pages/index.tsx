import type { NextPage } from "next";
import { Box, Title, Text, Space, Group, Stack, Center } from "@mantine/core";
import { FaTwitter, FaFacebook, FaRss } from "react-icons/fa";
import {
  Layout,
  BlogSection,
  PortfolioSection,
  GithubSection,
  TwitterSection,
  Container,
} from "lib/component";
import { useMediaQuery } from "@mantine/hooks";

const Home: NextPage = () => {
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
        <BlogSection />
        <PortfolioSection />
        <GithubSection />
        <TwitterSection />
      </Stack>
      <Space h={60} />
    </Layout>
  );
};

export default Home;
