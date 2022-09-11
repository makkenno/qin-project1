import { Group, Avatar, Stack, Text, Anchor } from "@mantine/core";
import { formatDate, textToLink } from "lib/util";

type Props = {
  name: string;
  username: string;
  tweetContent: string;
  profileImageUrl: string;
  createdAt: string;
};

export const Tweet = (props: Props) => {
  return (
    <Group spacing="sm" align="flex-start" noWrap>
      <Avatar radius="xl" src={props.profileImageUrl} />
      <Stack spacing={4}>
        <Group spacing="xs" align="center">
          <Text
            weight={700}
            size={16}
            color="dark.6"
            sx={{ fontFamily: "Open Sans", lineHeight: "25px" }}
          >
            {props.name}
          </Text>
          <Text
            weight={700}
            size={12}
            color="dark.2"
            sx={{ fontFamily: "Open Sans", lineHeight: "25px" }}
          >
            @{props.username}・{formatDate(props.createdAt)}
          </Text>
        </Group>
        <Text
          weight={500}
          size={14}
          sx={{ lineHeight: "22px", whiteSpace: "pre-wrap" }}
          dangerouslySetInnerHTML={{
            __html: textToLink(props.tweetContent),
          }}
        ></Text>
      </Stack>
    </Group>
  );
};
