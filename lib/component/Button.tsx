import { cloneElement, forwardRef, ReactNode } from "react";
import { Button as MantineButton, ButtonProps } from "@mantine/core";
import type { PolymorphicComponentProps } from "@mantine/utils";

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  PolymorphicComponentProps<"button" | "a", ButtonProps>
>(({ ...props }, ref) => {
  return cloneElement(
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
    />,
    {
      ref,
      ...props,
    }
  );
});
