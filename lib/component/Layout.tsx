import { ReactNode, useState } from "react";
import {
  useMantineTheme,
  Footer,
  Container,
  Center,
  Text,
} from "@mantine/core";
import { Navbar, Header } from "lib/component";

export const Layout = ({ children }: { children?: ReactNode }) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Header opened={opened} theme={theme} setOpened={setOpened} />
      <Navbar opened={opened} />
      {children}
      <Footer
        children={
          <Container
            px="sm"
            sx={{
              height: "100%",
            }}
          >
            <Center
              style={{
                width: "100%",
                height: "100%",
                borderTop: `1px solid ${theme.colors.gray[2]}`,
              }}
            >
              <Text
                color="gray.6"
                size={10}
                weight={700}
                sx={{ fontFamily: "YuGothic", lineHeight: "15px" }}
              >
                @2022 Shimabu University
              </Text>
            </Center>
          </Container>
        }
        height={60}
        style={{ border: "none" }}
      />
    </>
  );
};
