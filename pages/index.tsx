import type { NextPage } from "next";
import { BlogPost, Layout, SectionTitle } from "lib/component";
import {
  Box,
  Container,
  Title,
  Text,
  Space,
  Group,
  Stack,
  Button,
} from "@mantine/core";
import { css } from "@emotion/react";
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
          <Group spacing="sm">
            <FaTwitter size={18} fill="white" />
            <FaFacebook size={18} fill="white" />
            <FaRss size={18} fill="white" />
          </Group>
        </Container>
      </Box>
      <Space h="xl" />
      <Container px="sm">
        <SectionTitle title="Blog" />
        <Space h="md" />
        <Stack>
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <Button
            color="dark"
            radius="xl"
            className="w-min"
            px={22}
            mx="auto"
            styles={{
              root: {
                height: 45,
              },
              label: {
                fontWeight: 600,
                fontSize: 16,
                lineHeight: "25px",
              },
            }}
          >
            View All
          </Button>
        </Stack>
      </Container>
    </Layout>
  );
};

export default Home;
