import type { NextPage } from "next";
import {
  Box,
  Container,
  Title,
  Text,
  Space,
  Group,
  Stack,
  useMantineTheme,
  Progress,
  List,
} from "@mantine/core";
import { FaTwitter, FaFacebook, FaRss } from "react-icons/fa";
import { TbStar, TbGitFork } from "react-icons/tb";
import {
  BlogPost,
  Layout,
  SectionTitle,
  Button,
  Portfolio,
} from "lib/component";

const Home: NextPage = () => {
  const theme = useMantineTheme();
  return (
    <Layout>
      {/* ヒーローヘッダー */}
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
      {/* /ヒーローヘッダー */}
      <Space h="xl" />
      <Stack spacing={60}>
        <Container px="sm" className="w-full">
          <SectionTitle title="Blog" />
          <Space h="md" />
          <Stack>
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <Button>View All</Button>
          </Stack>
        </Container>
        <Container px="sm" className="w-full">
          <SectionTitle title="Portfolio" />
          <Space h="md" />
          <Stack spacing="xl">
            <Portfolio />
            <Portfolio />
            <Portfolio />
            <Button>View All</Button>
          </Stack>
        </Container>
        <Container px="sm" className="w-full">
          <SectionTitle title="GitHub" />
          <Space h="md" />
          <Stack spacing="xl">
            <Box>
              <Text
                color="dark.6"
                weight={700}
                size={18}
                sx={{ fontFamily: "YuGothic", lineHeight: "28px" }}
              >
                lightsound/next-tailwind
              </Text>
              <Space h="xs" />
              <Text>Next.js starter template.</Text>
              <Space h="xs" />
              <Group spacing="sm">
                <Group spacing={4}>
                  <TbStar size={15} stroke={theme.colors.dark[2]} />
                  <Text
                    color="dark.2"
                    weight={700}
                    size={12}
                    sx={{
                      fontFamily: "Avenir Next, sans-serif",
                      lineHeight: "19px",
                    }}
                  >
                    117
                  </Text>
                </Group>
                <Group spacing={4}>
                  <TbGitFork size={15} stroke={theme.colors.dark[2]} />
                  <Text
                    color="dark.2"
                    weight={700}
                    size={12}
                    sx={{
                      fontFamily: "Avenir Next, sans-serif",
                      lineHeight: "19px",
                    }}
                  >
                    18
                  </Text>
                </Group>
              </Group>
              <Space h="xs" />
              <Progress
                size="md"
                sections={[
                  { value: 65.5, color: "#3178C6" },
                  { value: 33.7, color: "#F1E05A" },
                  { value: 0.8, color: "#EDEDED" },
                ]}
              />
              <Group>
                <Group spacing="xs">
                  <Text
                    size={12}
                    weight={700}
                    sx={{
                      fontFamily: "Avenir Next, sans-serif",
                      lineHeight: "19px",
                    }}
                  >
                    TypeScript
                  </Text>
                  <Text
                    color="dark.2"
                    size={12}
                    weight={700}
                    sx={{
                      fontFamily: "Avenir Next, sans-serif",
                      lineHeight: "19px",
                    }}
                  >
                    65.5%
                  </Text>
                </Group>
                <Group spacing="xs">
                  <Text
                    size={12}
                    weight={700}
                    sx={{
                      fontFamily: "Avenir Next, sans-serif",
                      lineHeight: "19px",
                    }}
                  >
                    JavaScript
                  </Text>
                  <Text
                    color="dark.2"
                    size={12}
                    weight={700}
                    sx={{
                      fontFamily: "Avenir Next, sans-serif",
                      lineHeight: "19px",
                    }}
                  >
                    33.7%
                  </Text>
                </Group>
                <Group spacing="xs">
                  <Text
                    size={12}
                    weight={700}
                    sx={{
                      fontFamily: "Avenir Next, sans-serif",
                      lineHeight: "19px",
                    }}
                  >
                    Other
                  </Text>
                  <Text
                    color="dark.2"
                    size={12}
                    weight={700}
                    sx={{
                      fontFamily: "Avenir Next, sans-serif",
                      lineHeight: "19px",
                    }}
                  >
                    0.8%
                  </Text>
                </Group>
              </Group>
            </Box>
            <Button>View on GitHub</Button>
          </Stack>
        </Container>
      </Stack>
    </Layout>
  );
};

export default Home;
