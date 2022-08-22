import { Container as MantineContainer } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { ReactNode } from "react";
import { headerHeight, footerHeight } from "lib/const";

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <MantineContainer
      px="sm"
      sx={(theme) => ({
        minHeight: `calc(100vh - ${headerHeight}px - ${footerHeight}px - 40px)`,
        maxWidth: 1000 - theme.spacing.sm * 2,
      })}
      className="w-full"
    >
      {children}
    </MantineContainer>
  );
};
