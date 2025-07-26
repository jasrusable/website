import type { NextPage } from "next";
import Image from "next/image";
import Jason from "../images/jason.png";
import { NextSeo } from "next-seo";

const HireMe: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Hire Me - Jason Russell"
        description="Hire Jason Russell as a fractional CTO or freelance senior software engineer"
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
            paddingTop: "80px",
          }}
        >
          <div
            style={{
              flexShrink: 0,
              width: "200px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              priority
              quality={100}
              src={Jason}
              alt="Picture of Jason"
              className="profile-image"
              style={{
                borderRadius: "20px",
                width: "200px",
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
            <h1 style={{ textAlign: "center" }}>Jason Russell</h1>
            <div
              style={{
                maxWidth: "760px",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: 22, fontWeight: 600 }}>
                Hire me as a fractional CTO or freelance senior software
                engineer.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <a
                  href="mailto:me@jasonrussell.io"
                  style={{
                    display: "inline-block",
                    backgroundColor: "#1e40af",
                    color: "white",
                    padding: "12px 24px",
                    borderRadius: "16px",
                    textDecoration: "none",
                    fontWeight: "600",
                    transition: "background-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#1e3a8a";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#1e40af";
                  }}
                >
                  Hire Me
                </a>
                <a
                  href="/CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#1e40af",
                    textDecoration: "underline",
                    fontWeight: "500",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#1e3a8a";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#1e40af";
                  }}
                >
                  See my CV
                </a>
              </div>
              <div style={{ marginTop: "40px" }}>
                <p>
                  I have over 16 years of experience in software engineering,
                  and over 12 years of experience working for and building high
                  growth tech businesses.
                </p>
                <p>
                  I have experience working at small startups that have grown to
                  100+ employees as well as large Fortune 100 companies.
                  I&apos;ve worked in FinTech, HealthTech, AI, Crypto and
                  DeepTech.
                </p>
                <p>
                  I specialize in helping high growth tech businesses with
                  software engineering, product development, scaling engineering
                  teams & processes, architecture, compliance and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HireMe;
