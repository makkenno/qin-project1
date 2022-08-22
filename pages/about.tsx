import type { NextPage } from "next";
import { Space, Text } from "@mantine/core";
import { Layout, SectionTitle, Container } from "lib/component";
import { headerHeight, footerHeight } from "lib/const";

const About: NextPage = () => {
  return (
    <Layout>
      <Space h="xl" />
      <Container>
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
