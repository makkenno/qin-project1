import type { NextPage } from "next";
import { Space, Stack, TextInput, Textarea } from "@mantine/core";
import { Layout, SectionTitle, Button, Container } from "lib/component";
import { headerHeight, footerHeight } from "lib/const";

const Contact: NextPage = () => {
  return (
    <Layout>
      <Space h="xl" />
      <Container>
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
