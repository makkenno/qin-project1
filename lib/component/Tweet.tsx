import { Group, Avatar, Stack, Text, Anchor } from "@mantine/core";
import { textToLink } from "lib/function";

export const Tweet = () => {
  const comment = `📣 新サービス「Noway Form」をリリースしました！
          
Noway Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogleFormsでやっていたことがNotionだけで完結します✌✨

試しに使っていただけると幸いです😊 
  
https://www.noway-form.com/ja`;
  return (
    <Group spacing="sm" align="flex-start" noWrap>
      <Avatar radius="xl" />
      <Stack spacing={4}>
        <Group spacing="xs" align="center">
          <Text
            weight={700}
            size={16}
            color="dark.6"
            sx={{ fontFamily: "Open Sans", lineHeight: "25px" }}
          >
            まきの
          </Text>
          <Text
            weight={700}
            size={12}
            color="dark.2"
            sx={{ fontFamily: "Open Sans", lineHeight: "25px" }}
          >
            @makino・5月25日
          </Text>
        </Group>
        <Text
          weight={500}
          size={14}
          sx={{ lineHeight: "22px", whiteSpace: "pre-wrap" }}
          dangerouslySetInnerHTML={{
            __html: textToLink(comment),
          }}
        ></Text>
      </Stack>
    </Group>
  );
};
