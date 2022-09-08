import Link from "next/link";
import { Anchor, Stack, Text } from "@mantine/core";
import { Blog } from "type";
import { formatDate, removeHTMLtag } from "lib/util";

export const BlogPost = (props: Blog) => (
  <Link href={`/blog/${props.id}`} passHref>
    <Text component="a">
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
          }}
          lineClamp={2}
          dangerouslySetInnerHTML={{
            __html: removeHTMLtag(props.content),
          }}
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
    </Text>
  </Link>
);
