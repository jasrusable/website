/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Image from "next/image";
import Jason from "../images/jason.png";
import { NextSeo } from "next-seo";
import { MapPin, Mail } from "lucide-react";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { useMixpanel } from "../src/hooks/useMixpanel";
import { MIXPANEL_EVENTS, LINK_TYPES, SOCIAL_PLATFORMS } from "../src/types/analytics";

const Home: NextPage = () => {
  const { trackEvent } = useMixpanel();

  const handleSocialClick = (platform: string, url: string) => {
    trackEvent(MIXPANEL_EVENTS.LINK_CLICKED, {
      link_type: LINK_TYPES.SOCIAL,
      link_name: platform,
      url,
      platform: platform as any,
      target: '_blank',
      position: 'social_icons',
      source: 'homepage',
    });
  };

  const handleFinWiseClick = () => {
    trackEvent(MIXPANEL_EVENTS.LINK_CLICKED, {
      link_type: LINK_TYPES.EXTERNAL,
      link_name: 'FinWise',
      url: 'https://finwiseapp.io',
      target: '_blank',
      position: 'bio_text',
      source: 'homepage',
    });
  };

  const handleHireMeClick = () => {
    trackEvent(MIXPANEL_EVENTS.LINK_CLICKED, {
      link_type: LINK_TYPES.HIRE_ME,
      link_name: 'Available for hire',
      url: '/hire-me',
      target: '_self',
      position: 'cta_section',
      source: 'homepage',
    });
  };

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
              className="profile-image"
              style={{
                borderRadius: "20px",
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
                I'm a startup founder, fractional CTO and freelance software
                engineer. I'm currently bootstrapping{" "}
                <a
                  href="https://finwiseapp.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleFinWiseClick}
                >
                  FinWise
                </a>{" "}
                and working as a fractional CTO and part-time software engineer
                for high growth tech businesses.
              </p>
              <div
                style={{
                  marginTop: "20px",
                  marginBottom: "4px",
                }}
              >
                <Link
                  href="/hire-me"
                  style={{
                    color: "var(--link-color)",
                    textDecoration: "underline",
                    fontWeight: "500",
                    transition: "opacity 0.2s ease",
                  }}
                  onClick={handleHireMeClick}
                >
                  Available for hire →
                </Link>
              </div>
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
                    color: "var(--link-color)",
                  }}
                  title="Email"
                  onClick={() => handleSocialClick(SOCIAL_PLATFORMS.EMAIL, 'mailto:me@jasonrussell.io')}
                >
                  <Mail size={24} />
                </a>
                <a
                  href="https://x.com/jasrusable"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--link-color)",
                  }}
                  title="X (Twitter)"
                  onClick={() => handleSocialClick(SOCIAL_PLATFORMS.X_TWITTER, 'https://x.com/jasrusable')}
                >
                  <FaXTwitter size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/jason-david-russell/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--link-color)",
                  }}
                  title="LinkedIn"
                  onClick={() => handleSocialClick(SOCIAL_PLATFORMS.LINKEDIN, 'https://www.linkedin.com/in/jason-david-russell/')}
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://github.com/jasrusable"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--link-color)",
                  }}
                  title="GitHub"
                  onClick={() => handleSocialClick(SOCIAL_PLATFORMS.GITHUB, 'https://github.com/jasrusable')}
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
                  color: "var(--text-secondary)",
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
