import { ReactNode, useState } from "react";
import { Space, useMantineTheme } from "@mantine/core";
import { Navbar, Header, SectionTitle } from "lib/component";

export const Layout = ({ children }: { children?: ReactNode }) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Header opened={opened} theme={theme} setOpened={setOpened} />
      <Space h={65} />
      <Navbar opened={opened} />
      {children}
    </>
  );
};
