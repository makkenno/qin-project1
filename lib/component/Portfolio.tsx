import { Box, Space, Image, Text } from "@mantine/core";
import { SectionTitle } from "./SectionTitle";

export const Portfolio = (): JSX.Element => {
  return (
    <Box>
      <Image
        height={184}
        fit="cover"
        src="https://dummyimage.com/1440x184/000000/fff"
      />
      <Space h="sm" />
      <Text
        size={22}
        weight={700}
        sx={{ lineHeight: "34px", fontFamily: "YuGothic" }}
      >
        IT KINGDOM
      </Text>
      <Space h="xs" />
      <Text
        size={16}
        weight={500}
        sx={{
          lineHeight: "25px",
          fontFamily: "YuGothic",
        }}
      >
        当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
      </Text>
      <Space h="xs" />
      <Text
        color="dark.2"
        size={12}
        weight={700}
        sx={{
          fontFamily: "Avenir Next, sans-serif",
          lineHeight: "19px",
        }}
      >
        2021.10 - 2021.12
      </Text>
    </Box>
  );
};
