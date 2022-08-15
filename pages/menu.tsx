import type { NextPage } from "next";
import { useState } from "react";
import {
  AppShell,
  Header,
  Title,
  Burger,
  Group,
  ActionIcon,
  Navbar,
  Text,
} from "@mantine/core";
import { useMantineTheme } from "@mantine/core";
import { IconMoon } from "@tabler/icons";

const Menu: NextPage = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Text>Application navbar</Text>
        </Navbar>
      }
      header={
        <Header
          height={65}
          p="xs"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Group position="apart" className="w-full">
            <Burger opened={opened} onClick={() => setOpened((o) => !o)} />
            <Title order={1}>Makino Portfolio</Title>
            <ActionIcon variant="outline" size="lg" radius="md">
              <IconMoon size={22} color={theme.colors.dark[6]} />
            </ActionIcon>
          </Group>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {/* Your application here */}
    </AppShell>
  );
};

export default Menu;
