import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Onest } from "next/font/google";
import { ClickToComponent } from "click-to-react-component";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useDarkMode } from "../hooks/useDarkMode";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { initMixpanel, trackPageView } from "../src/utils/mixpanel";

const onest = Onest({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  preload: true,
  fallback: ["system-ui", "arial"],
  variable: "--font-sans",
});

const darkModeInitScript = `(function(){try{if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.classList.add('dark')}}catch(e){}})();`;

function MyApp({ Component, pageProps }: AppProps) {
  const { isDarkMode } = useDarkMode();
  const router = useRouter();

  useEffect(() => {
    initMixpanel();
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const handleRouteChange = (url: string) => trackPageView(url);
    trackPageView(router.asPath);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router]);

  return (
    <>
      {process.env.NODE_ENV !== "production" && <ClickToComponent />}
      <SpeedInsights />
      <Head>
        <title>Jason Russell</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, viewport-fit=cover"
        />
        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#0e0e10"
          media="(prefers-color-scheme: dark)"
        />
        <script dangerouslySetInnerHTML={{ __html: darkModeInitScript }} />
      </Head>
      <style jsx global>{`
        :root {
          --font-sans: ${onest.style.fontFamily};
        }
        body {
          font-family: var(--font-sans), system-ui, -apple-system, "Segoe UI",
            Roboto, sans-serif;
        }
      `}</style>
      <div className={onest.variable}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
