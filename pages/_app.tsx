import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Open_Sans } from "next/font/google";
import { ClickToComponent } from "click-to-react-component";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useDarkMode } from "../hooks/useDarkMode";
import { useEffect } from "react";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "sans-serif",
  ],
  preload: true,
  variable: "--font-open-sans",
});

function MyApp({ Component, pageProps }: AppProps) {
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    // Apply dark mode class to document root
    if (typeof document !== 'undefined') {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [isDarkMode]);

  return (
    <>
      {process.env.NODE_ENV !== "production" && <ClickToComponent />}
      <SpeedInsights />
      <Head>
        <title>Jason Russell</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>
      <style jsx global>{`
        :root {
          --font-open-sans: ${openSans.style.fontFamily};
        }

        body {
          font-family:
            var(--font-open-sans),
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            sans-serif;
        }

        * {
          font-family: inherit;
        }
      `}</style>
      <div
        className={openSans.className}
        style={{ fontFamily: openSans.style.fontFamily }}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
