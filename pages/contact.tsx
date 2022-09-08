import type { NextPage } from "next";
import { Space, Stack, TextInput, Textarea } from "@mantine/core";
import { Layout, SectionTitle, Button, Container } from "component";
import { ComponentProps } from "react";
import axios from "axios";

const Contact: NextPage = () => {
  // TODO: バリデーションしたい
  const handleSubmit: ComponentProps<"form">["onSubmit"] = async (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    try {
      const res = await axios.post("/api/contact", {
        params: {
          email: event.currentTarget.email.value,
          name: event.currentTarget.userName.value,
          message: event.currentTarget.message.value,
        },
      });
      alert(res.data.message);
    } catch (e) {
      alert(e);
      console.error(e);
    }
    (event.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <Space h="xl" />
      <Container>
        <SectionTitle title="Contact" />
        <Space h="md" />
        <form onSubmit={handleSubmit} action="POST">
          <Stack spacing="md">
            <TextInput
              placeholder="Your@email.com"
              label="Email"
              name="email"
            />
            <TextInput placeholder="Taro Yamada" label="Name" name="userName" />
            <Textarea
              placeholder="I want to order your goods"
              label="Your message"
              name="message"
            />
            <Button type="submit">Send Message</Button>
          </Stack>
        </form>
      </Container>
    </Layout>
  );
};

export default Contact;
