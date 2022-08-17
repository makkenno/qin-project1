import { Navbar as MantineNavbar, Stack, useMantineTheme } from "@mantine/core";
import React from "react";
import { DrawerNavMenu } from ".";

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
        <DrawerNavMenu href="./about">About</DrawerNavMenu>
        <DrawerNavMenu href="./blog">Blog</DrawerNavMenu>
        <DrawerNavMenu href="./portfolio">Portfolio</DrawerNavMenu>
        <DrawerNavMenu href="./contact">Contact</DrawerNavMenu>
      </Stack>
    </MantineNavbar>
  );
};
