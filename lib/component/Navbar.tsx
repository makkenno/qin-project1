import {
  Anchor,
  Navbar as MantineNavbar,
  Stack,
  useMantineTheme,
} from "@mantine/core";
import Link from "next/link";
import React from "react";

export const Navbar = (props: { opened: boolean }) => {
  const theme = useMantineTheme();
  return (
    <MantineNavbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!props.opened}
      width={{ sm: 200, lg: 300 }}
      px={24}
      sx={{ backgroundColor: theme.colors.pink[6], border: "none" }}
    >
      <Stack>
        <Link href="/#" passHref>
          <Anchor
            component="a"
            underline={false}
            sx={{
              color: "#fff",
              fontSize: 28,
              fontWeight: 700,
              fontFamily: "Avenir Next, sans-serif",
              lineHeight: "38px",
            }}
          >
            About
          </Anchor>
        </Link>
        <Link href="/#" passHref>
          <Anchor
            component="a"
            underline={false}
            sx={{
              color: "#fff",
              fontSize: 28,
              fontWeight: 700,
              fontFamily: "Avenir Next, sans-serif",
              lineHeight: "38px",
            }}
          >
            Blog
          </Anchor>
        </Link>
        <Link href="/" passHref>
          <Anchor
            component="a"
            underline={false}
            sx={{
              color: "#fff",
              fontSize: 28,
              fontWeight: 700,
              fontFamily: "Avenir Next, sans-serif",
              lineHeight: "38px",
            }}
          >
            Portfolio
          </Anchor>
        </Link>
        <Link href="/#" passHref>
          <Anchor
            component="a"
            underline={false}
            sx={{
              color: "#fff",
              fontSize: 28,
              fontWeight: 700,
              fontFamily: "Avenir Next, sans-serif",
              lineHeight: "38px",
            }}
          >
            Contact
          </Anchor>
        </Link>
      </Stack>
    </MantineNavbar>
  );
};
