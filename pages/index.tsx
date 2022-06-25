/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Image from "next/image";
import Me from "../images/me.png";
import { NextSeo } from "next-seo";

const copy = `
  I'm a senior software engineer, team lead and system architect
  based in Cape Town, South Africa.
`;

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Jason Russell" description={copy} />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Image priority quality={100} src={Me} alt="Picture of Jason" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 40,
            maxWidth: "450px",
          }}
        >
          <h1>Hi, I'm Jason</h1>
          <div style={{ fontSize: "18px" }}>
            <p>{copy}</p>
            <p>I love science, business, people and Bitcoin.</p>
            <p>You can reach me here:</p>
            <ul>
              {[
                { title: "Email", href: "mailto:me@jasonrussell.io" },
                { title: "Twitter", href: "https://twitter.com/jasrusable" },
                {
                  title: "LinkedIn",
                  href: "https://www.linkedin.com/in/jason-david-russell/",
                },
                {
                  title: "GitHub",
                  href: "https://github.com/jasrusable",
                },
              ].map(({ title, href }) => {
                return (
                  <li key={title}>
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      {title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
