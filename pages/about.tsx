import type { NextPage } from "next";
import { Container, Space, Text } from "@mantine/core";
import { Layout, SectionTitle } from "lib/component";
import { headerHeight, footerHeight } from "lib/const";

const About: NextPage = () => {
  return (
    <Layout>
      <Container
        px="sm"
        sx={{ height: `calc(100vh - ${headerHeight}px - ${footerHeight}px)` }}
      >
        <Space h="xl" />
        <SectionTitle title="About" />
        <Space h="md" />
        <Text
          size={22}
          weight={700}
          sx={{ lineHeight: "34px", fontFamily: "YuGothic" }}
        >
          Makino
        </Text>
        <Space h="md" />
        <Text
          size={16}
          weight={500}
          sx={{ lineHeight: "25px", fontFamily: "YuGothic" }}
        >
          新卒ITエンジニア。趣味ボルダリングと読書。好きなキャラクターはこうぺんちゃん。
        </Text>
      </Container>
    </Layout>
  );
};

export default About;
