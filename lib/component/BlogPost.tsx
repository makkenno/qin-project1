import { Stack, Text } from "@mantine/core";

export const BlogPost = () => (
  <Stack spacing="xs">
    <Text
      size={22}
      weight={700}
      sx={{ lineHeight: "34px", fontFamily: "YuGothic" }}
    >
      This is a header
    </Text>
    <Text
      size={16}
      weight={500}
      sx={{
        lineHeight: "25px",
        fontFamily: "YuGothic",
        height: 50,
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: 2,
        overflow: "hidden",
      }}
    >
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit.
    </Text>
    <Text
      color="dark.2"
      size={12}
      weight={700}
      sx={{ fontFamily: "Avenir Next, sans-serif", lineHeight: "19px" }}
    >
      2022.07.11
    </Text>
  </Stack>
);
