/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Image from "next/image";
import Jason from "../images/jason.png";
import { NextSeo } from "next-seo";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { MapPin, Mail } from "lucide-react";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Jason Russell"
        description="Personal website of Jason Russell"
      />
      <div
        className="layout-wrapper"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          minHeight: "100vh",
        }}
      >
        <div
          className="layout-container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            maxWidth: "1200px",
            width: "100%",
            padding: 30,
            paddingTop: "100px",
          }}
        >
          <div
            style={{
              flexShrink: 0,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              priority
              quality={100}
              src={Jason}
              alt="Picture of Jason"
              style={{
                borderRadius: "28px",
                maxWidth: "300px",
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "100%",
              width: "100%",
            }}
          >
            <h1 style={{ textAlign: "center" }}>I'm Jason Russell</h1>
            <div
              style={{
                maxWidth: "720px",
                textAlign: "center",
              }}
            >
              <p>
                I'm a bootstrapped startup founder and fractional CTO and
                freelance software engineer. I'm currently bootstrapping{" "}
                <a
                  href="https://finwiseapp.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FinWise
                </a>{" "}
                and working as a fractional CTO and part-time software engineer
                for high growth tech startups.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "24px",
                  marginTop: "24px",
                }}
              >
                <a
                  href="mailto:me@jasonrussell.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#333",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#0066cc")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
                  title="Email"
                >
                  <Mail size={24} />
                </a>
                <a
                  href="https://x.com/jasrusable"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#333",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#000")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
                  title="X (Twitter)"
                >
                  <FaXTwitter size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/jason-david-russell/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#333",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#0077b5")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
                  title="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://github.com/jasrusable"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#333",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#24292e")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
                  title="GitHub"
                >
                  <FaGithub size={24} />
                </a>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  marginTop: "32px",
                  color: "#666",
                  fontSize: "0.95em",
                }}
              >
                <MapPin size={18} />
                <span>Zurich, Switzerland🇨🇭</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
