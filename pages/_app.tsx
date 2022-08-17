import "../styles/global.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
          spacing: { xs: 8, sm: 16, md: 24, lg: 32, xl: 40 },
          headings: {
            fontFamily: "Avenir Next, sans-serif",
            sizes: {
              h1: {
                fontSize: 18,
                lineHeight: "25px",
                fontWeight: 700,
              },
              h2: {
                fontSize: 28,
                lineHeight: "38px",
                fontWeight: 700,
              },
              h3: {
                fontSize: 26,
                lineHeight: "40px",
                fontWeight: 700,
              },
              h4: {
                fontSize: 22,
                lineHeight: "34px",
                fontWeight: 700,
              },
            },
          },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
