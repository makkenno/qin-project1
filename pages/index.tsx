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
  Avatar,
} from "@mantine/core";
import { FaTwitter, FaFacebook, FaRss, FaCircle } from "react-icons/fa";
import { TbStar, TbGitFork } from "react-icons/tb";
import {
  BlogPost,
  Layout,
  SectionTitle,
  Button,
  Portfolio,
  Tweet,
} from "lib/component";
import { Repository } from "lib/component/Repository";

const Home: NextPage = () => {
  const theme = useMantineTheme();
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
            <Repository />
            <Repository />
            <Repository />
            <Button>View on GitHub</Button>
          </Stack>
        </Container>
        <Container px="sm" className="w-full">
          <SectionTitle title="Twitter" />
          <Space h="md" />
          <Stack spacing={56}>
            <Tweet />
            <Tweet />
            <Tweet />
            <Button>View on Twitter</Button>
          </Stack>
        </Container>
      </Stack>
      <Space h={60} />
    </Layout>
  );
};

export default Home;
