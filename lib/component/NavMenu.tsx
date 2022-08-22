import { ReactNode } from "react";
import { UrlObject } from "url";
import { Anchor } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";

type Url = string | UrlObject;
export const NavMenu = ({
  href,
  children,
}: {
  href: Url;
  children: ReactNode;
}) => {
  const matches = useMediaQuery("(max-width: 768px)");
  return (
    <Link href={href} passHref>
      <Anchor
        component="a"
        underline={false}
        sx={{
          color: matches ? "#fff" : "#000",
          fontSize: matches ? 28 : 18,
          fontWeight: 700,
          fontFamily: "Avenir Next, sans-serif",
          lineHeight: matches ? "25px" : "38px",
        }}
      >
        {children}
      </Anchor>
    </Link>
  );
};
