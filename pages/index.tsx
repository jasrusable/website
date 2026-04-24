import type { NextPage } from "next";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Jason from "../images/jason.png";
import CogitoLogo from "../images/cogito-logo.jpg";
import styles from "./index.module.scss";

const DESCRIPTION =
  "Jason Russell — busy building trycogito.ai, the AI brain for your business.";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Jason Russell"
        description={DESCRIPTION}
        openGraph={{
          title: "Jason Russell",
          description: DESCRIPTION,
          type: "website",
          url: "https://jasonrussell.io",
        }}
        twitter={{ cardType: "summary_large_image" }}
      />
      <main className={styles.main}>
        <section className={styles.stage}>
          <Image
            priority
            quality={100}
            src={Jason}
            alt="Jason Russell"
            className={styles.portrait}
            sizes="132px"
          />
          <p className={styles.eyebrow}>Jason Russell</p>
          <h1 className={styles.lead}>
            Hey, I&rsquo;m Jason &mdash; I&rsquo;m busy building
          </h1>
          <a
            href="https://trycogito.ai"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.wordmark}
            aria-label="trycogito.ai"
          >
            <Image
              src={CogitoLogo}
              alt=""
              width={56}
              height={56}
              className={styles.logo}
              priority
            />
            <span>trycogito.ai</span>
          </a>
          <p className={styles.tagline}>
            The AI brain for your business. Connects to all your tools, builds
            organizational memory and self-learns, and helps you and your team
            work smarter and faster.
          </p>
        </section>
      </main>
    </>
  );
};

export default Home;
