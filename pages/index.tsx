import type { NextPage } from "next";
import Image from "next/image";
import Jason from "../images/jason.png";
import { NextSeo } from "next-seo";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Jason Russell"
        description="Busy building trycogito.ai"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
          padding: "24px",
        }}
      >
        <Image
          priority
          quality={100}
          src={Jason}
          alt="Jason Russell"
          style={{
            borderRadius: "50%",
            width: 160,
            height: 160,
            objectFit: "cover",
            marginBottom: "20px",
          }}
        />
        <p
          style={{
            fontSize: "1.2rem",
            color: "var(--text-secondary)",
            margin: "0 0 12px",
            letterSpacing: "0.5px",
          }}
        >
          Hey, I&apos;m Jason — I&apos;m busy building
        </p>
        <a
          href="https://trycogito.ai"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "2.4rem",
            fontWeight: 700,
            color: "var(--text-color)",
            textDecoration: "none",
            borderBottom: "3px solid var(--text-color)",
            paddingBottom: "2px",
            transition: "opacity 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          trycogito.ai
        </a>
        <p
          style={{
            marginTop: "20px",
            fontSize: "1rem",
            color: "var(--text-secondary)",
            maxWidth: "380px",
            lineHeight: 1.6,
          }}
        >
          AI that knows your entire business — ask questions, get answers, take
          action across all your data and tools.
        </p>
      </div>
    </>
  );
};

export default Home;
