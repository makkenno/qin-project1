import type { NextPage } from "next";
import { Box, Title, Text, Space, Group, Stack } from "@mantine/core";
import { FaTwitter, FaFacebook, FaRss } from "react-icons/fa";
import {
  Layout,
  BlogSection,
  PortfolioSection,
  GithubSection,
  TwitterSection,
  Container,
} from "lib/component";

const Home: NextPage = () => {
  return (
    <Layout>
      <Box sx={(theme) => ({ background: theme.colors.pink[6], height: 248 })}>
        <Container>
          <Space h={54} />
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
          <Space h={44} />
          <Group spacing="sm">
            <FaTwitter size={18} fill="white" />
            <FaFacebook size={18} fill="white" />
            <FaRss size={18} fill="white" />
          </Group>
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
