import type { ReactNode } from "react";
import { Button as MantineButton } from "@mantine/core";

export const Button = ({ children }: { children: ReactNode }) => {
  return (
    <MantineButton
      color="dark"
      radius="xl"
      className="w-min"
      px={22}
      mx="auto"
      styles={{
        root: {
          height: 45,
        },
        label: {
          fontWeight: 600,
          fontSize: 16,
          lineHeight: "25px",
        },
      }}
    >
      {children}
    </MantineButton>
  );
};
