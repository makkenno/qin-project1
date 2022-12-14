import { ReactNode, useState } from "react";
import {
  useMantineTheme,
  Footer,
  Container,
  Center,
  Text,
  Box,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Navbar, Header } from "component";
import { headerHeight, footerHeight } from "lib/const";

export const Layout = ({ children }: { children?: ReactNode }) => {
  const theme = useMantineTheme();
  const matches = useMediaQuery("(max-width: 768px)");
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Header opened={opened} theme={theme} setOpened={setOpened} />
      {matches && <Navbar opened={opened} />}
      <Box
        sx={{
          minHeight: `calc(100vh - ${headerHeight}px - ${footerHeight}px)`,
        }}
      >
        {children}
      </Box>
      <Footer
        children={
          <Container
            px="sm"
            sx={{
              height: "100%",
              width: "100%",
              maxWidth: 1440,
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
