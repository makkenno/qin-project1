import type { NextPage } from "next";
import { Space, Container, Stack, TextInput, Textarea } from "@mantine/core";
import { Layout, SectionTitle, Button } from "lib/component";
import { headerHeight, footerHeight } from "lib/const";

const Contact: NextPage = () => {
  return (
    <Layout>
      <Space h="xl" />
      <Container
        px="sm"
        sx={{
          height: `calc(100vh - ${headerHeight}px - ${footerHeight}px - 40px)`,
        }}
        className="w-full"
      >
        <SectionTitle title="Contact" />
        <Space h="md" />
        <Stack spacing="md">
          <TextInput placeholder="Your@email.com" label="Email" />
          <TextInput placeholder="Taro Yamada" label="Name" />
          <Textarea
            placeholder="I want to order your goods"
            label="Your message"
          />
          <Button>Send Message</Button>
        </Stack>
      </Container>
    </Layout>
  );
};

export default Contact;
