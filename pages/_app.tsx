import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Open_Sans } from "next/font/google";
import { ClickToComponent } from "click-to-react-component";
import { SpeedInsights } from "@vercel/speed-insights/next";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {process.env.NODE_ENV !== "production" && <ClickToComponent />}
      <SpeedInsights />
      <Head>
        <title>Jason Russell</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <style jsx global>{`
        body {
          font-family: ${openSans.style.fontFamily};
        }
      `}</style>
      <div className={openSans.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
