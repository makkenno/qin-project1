import { ReactNode } from "react";
import { UrlObject } from "url";
import { Anchor } from "@mantine/core";
import Link from "next/link";

type Url = string | UrlObject;
export const DrawerNavMenu = ({
  href,
  children,
}: {
  href: Url;
  children: ReactNode;
}) => {
  return (
    <Link href={href} passHref>
      <Anchor
        component="a"
        underline={false}
        sx={{
          color: "#fff",
          fontSize: 28,
          fontWeight: 700,
          fontFamily: "Avenir Next, sans-serif",
          lineHeight: "38px",
        }}
      >
        {children}
      </Anchor>
    </Link>
  );
};
