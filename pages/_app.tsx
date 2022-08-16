import "styles/global.css";
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
          headings: {
            sizes: {
              h1: {
                fontFamily: "Avenir Next, sans-serif",
                fontSize: 18,
                lineHeight: "25px",
                fontWeight: 700,
              },
              h2: {
                fontFamily: "Avenir Next, sans-serif",
                fontSize: 26,
                lineHeight: "40px",
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
