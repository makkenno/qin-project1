import { Box, Space, Image, Text } from "@mantine/core";
import { PortfolioType } from "lib/type";
import { formatDate } from "lib/util";

export const Portfolio = (props: PortfolioType): JSX.Element => {
  return (
    <Box>
      <Image height={184} fit="cover" src={props.image.url} />
      <Space h="sm" />
      <Text
        size={22}
        weight={700}
        sx={{ lineHeight: "34px", fontFamily: "YuGothic" }}
      >
        {props.title}
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
        {props.description}
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
        {formatDate(props.publishedAt)}
      </Text>
    </Box>
  );
};
