import type { NextPage } from "next";
import { Layout, SectionTitle } from "lib/component";
import { Box, Container, Title, Text, Space, Group } from "@mantine/core";
import { FaTwitter, FaFacebook, FaRss } from "react-icons/fa";

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
          <Group>
            <FaTwitter size={18} fill="white" />
            <FaFacebook size={18} fill="white" />
            <FaRss size={18} fill="white" />
          </Group>
        </Container>
      </Box>
      <Space h={40} />
      <Container>
        <SectionTitle title="Blog" />
        <Space h={24} />
      </Container>
    </Layout>
  );
};

export default Home;
