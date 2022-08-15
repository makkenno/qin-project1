import type { NextPage } from "next";
import { useState } from "react";
import {
  AppShell,
  Header,
  Title,
  Burger,
  Group,
  ActionIcon,
} from "@mantine/core";
import { useMantineTheme } from "@mantine/core";
import { IconMoon } from "@tabler/icons";
import { Navbar } from "lib/component";

const Home: NextPage = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      padding="md"
      navbar={<Navbar opened={opened} />}
      header={
        <Header
          height={65}
          px={16}
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: opened ? theme.colors.pink[6] : "",
            borderBottom: opened ? "none" : theme.colors.gray[2],
          }}
        >
          <Group position="apart" className="w-full">
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              color={opened ? "#fff" : "#000"}
            />
            {!opened && (
              <>
                <Title order={1}>Makino Portfolio</Title>
                <ActionIcon variant="outline" size="lg" radius="md">
                  <IconMoon size={22} color={theme.colors.dark[6]} />
                </ActionIcon>
              </>
            )}
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

export default Home;
