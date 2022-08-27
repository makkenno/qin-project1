import { Container as MantineContainer } from "@mantine/core";
import { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <MantineContainer
      px="sm"
      sx={(theme) => ({
        maxWidth: 1000 - theme.spacing.sm * 2,
      })}
      className="w-full"
    >
      {children}
    </MantineContainer>
  );
};
