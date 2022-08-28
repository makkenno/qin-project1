import { Stack, Text } from "@mantine/core";
import { Blog } from "lib/type";
import { formatDate } from "lib/util";

export const BlogPost = (props: Blog) => (
  <Stack spacing="xs">
    <Text
      size={22}
      weight={700}
      sx={{ lineHeight: "34px", fontFamily: "YuGothic" }}
    >
      {props.title}
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
      dangerouslySetInnerHTML={{ __html: props.content }}
    ></Text>
    <Text
      color="dark.2"
      size={12}
      weight={700}
      sx={{ fontFamily: "Avenir Next, sans-serif", lineHeight: "19px" }}
    >
      {formatDate(props.publishedAt)}
    </Text>
  </Stack>
);
