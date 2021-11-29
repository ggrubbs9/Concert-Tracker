import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../styles/createEmotionCache";

import "../styles/globals.scss";
import theme from "../styles/theme.js";
import Layout from "../components/Layout";

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps }) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <Head>
        <title>Concert Tracker</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <style>
        {`#__next {
                height:100%;
                width: 100%;
                position: absolute;
              }`}
      </style>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
