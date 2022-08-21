import { MantineTheme, Space } from "@mantine/core";
import {
  Header as MantineHeader,
  Title,
  Burger,
  Group,
  ActionIcon,
} from "@mantine/core";
import { IconMoon } from "@tabler/icons";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { headerHeight } from "lib/const";

export const Header = ({
  opened,
  theme,
  setOpened,
}: {
  opened: boolean;
  theme: MantineTheme;
  setOpened: Dispatch<SetStateAction<boolean>>;
}) => (
  <>
    <MantineHeader
      height={65}
      px={16}
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: opened ? theme.colors.pink[6] : "",
        borderBottom: opened ? "none" : theme.colors.gray[2],
        position: "fixed",
      }}
    >
      <Group position="apart" className="w-full">
        <Burger
          opened={opened}
          onClick={() => setOpened((o: any) => !o)}
          color={opened ? "#fff" : "#000"}
        />
        {!opened && (
          <>
            <Link href="/" passHref>
              <Title order={1}>Makino Portfolio</Title>
            </Link>
            <ActionIcon variant="outline" size="lg" radius="md">
              <IconMoon size={22} color={theme.colors.dark[6]} />
            </ActionIcon>
          </>
        )}
      </Group>
    </MantineHeader>
    <Space h={headerHeight} />
  </>
);
