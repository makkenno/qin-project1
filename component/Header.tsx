import { MantineTheme, Space, Text } from "@mantine/core";
import {
  Header as MantineHeader,
  Title,
  Burger,
  Group,
  ActionIcon,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconMoon } from "@tabler/icons";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { NavMenu } from ".";
import { headerHeight } from "lib/const";

export const Header = ({
  opened,
  theme,
  setOpened,
}: {
  opened: boolean;
  theme: MantineTheme;
  setOpened: Dispatch<SetStateAction<boolean>>;
}) => {
  const matches = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <MantineHeader
        height={65}
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: opened ? theme.colors.pink[6] : "",
          borderBottom: opened ? "none" : theme.colors.gray[2],
          position: "fixed",
        }}
      >
        <Group
          position="apart"
          className="w-full"
          sx={(theme) => ({ maxWidth: 1000 + theme.spacing.sm * 2 })}
          m="auto"
          px="sm"
        >
          {matches && (
            <Burger
              opened={opened}
              onClick={() => setOpened((o: any) => !o)}
              color={opened ? "#fff" : "#000"}
            />
          )}
          {!opened && (
            <>
              <Link href="/" passHref>
                <Text component="a">
                  <Title order={1}>Makino Portfolio</Title>
                </Text>
              </Link>
              <Group spacing="sm">
                {!matches && (
                  <>
                    <NavMenu href="/about">About</NavMenu>
                    <NavMenu href="/blog">Blog</NavMenu>
                    <NavMenu href="/portfolio">Portfolio</NavMenu>
                    <NavMenu href="/contact">Contact</NavMenu>
                  </>
                )}
                <ActionIcon variant="outline" size="lg" radius="md">
                  <IconMoon size={22} color={theme.colors.dark[6]} />
                </ActionIcon>
              </Group>
            </>
          )}
        </Group>
      </MantineHeader>
      <Space h={headerHeight} />
    </>
  );
};
