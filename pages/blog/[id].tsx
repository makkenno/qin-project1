import { Space, Stack, Text } from "@mantine/core";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Container, Layout, SectionTitle } from "lib/component";
import { client } from "lib/client";
import { Blog, BlogResponse } from "lib/type";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { formatDate } from "lib/util";

type Props = Blog & MicroCMSContentId & MicroCMSDate;

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data: BlogResponse = await client.getList({ endpoint: "blogs" });
  const paths = data.contents.map((content) => `/blog/${content.id}`);

  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps<Props, { id: string }> = async (
  context
) => {
  if (!context.params) {
    return { notFound: true };
  }
  const data = await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId: context.params.id,
  });

  return {
    props: data,
  };
};

const BlogId: NextPage<Props> = (props) => {
  return (
    <Layout>
      <Space h="xl" />
      <Container>
        <SectionTitle title={props.title} />
        <Space h="md" />
        <Stack spacing="xs">
          <Text
            color="dark.2"
            size={12}
            weight={700}
            sx={{ fontFamily: "Avenir Next, sans-serif", lineHeight: "19px" }}
          >
            {formatDate(props.publishedAt)}
          </Text>
          <Text
            className="prose prose-sm"
            size={16}
            weight={500}
            sx={{
              lineHeight: "25px",
              fontFamily: "YuGothic",
              height: 50,
            }}
            dangerouslySetInnerHTML={{ __html: props.content }}
          ></Text>
        </Stack>
      </Container>
    </Layout>
  );
};
export default BlogId;
