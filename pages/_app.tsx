import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Open_Sans } from "next/font/google";
import { ClickToComponent } from "click-to-react-component";
import { SpeedInsights } from "@vercel/speed-insights/next";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ClickToComponent />
      <SpeedInsights />
      <Head>
        <title>Jason Russell</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={openSans.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
