import type { NextPage } from "next";
import Image from "next/image";
import Me from "../images/me.jpeg";
import Falcon9 from "../images/falcon9.jpeg";

const Home: NextPage = () => {
  return (
    <div>
      <div style={{ display: "flex", height: "100vh" }}>
        <div style={{ flexBasis: "50%", position: "relative" }}>
          <Image
            layout="fill"
            objectFit="cover"
            src={Me}
            alt="Picture of Jason"
            quality={100}
          />
        </div>
        <div style={{ flexBasis: "50%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: 40,
            }}
          >
            <h1>Hi, I'm Jason</h1>
            <div style={{ fontSize: "18px" }}>
              <p>
                I'm a founder and software engineer based in Cape Town, South
                Africa.
              </p>
              <p>I love science, business, people and Bitcoin.</p>
              <p>Please get in touch, I'd love to chat with you!</p>
              <ul>
                {[
                  { title: "Twitter", href: "https://twitter.com/jasrusable" },
                  {
                    title: "LinkedIn",
                    href: "https://www.linkedin.com/in/jason-david-russell/",
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
      </div>
      <div style={{ height: "100vh", position: "relative" }}>
        <Image
          layout="fill"
          objectFit="cover"
          src={Falcon9}
          alt="Picture of Falcon 9 launch"
          quality={100}
        />
      </div>
    </div>
  );
};

export default Home;
