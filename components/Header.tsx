import React, { useEffect, useState } from "react";
import {
  sendAboutMeEvent,
  sendContactEvent,
  sendHomeEvent,
  sendPortfolioEvent,
  sendResumeEvent,
} from "../utilities";
import styles from "../styles/2-containers/header.module.sass";
import homeStyles from "../styles/2-containers/home.module.sass";
import aboutMeStyles from "../styles/2-containers/aboutMe.module.sass";
import contactInfoStyles from "../styles/2-containers/contactInfo.module.sass";
import resumeStyles from "../styles/2-containers/resume.module.sass";
import portfolioStyles from "../styles/2-containers/portfolioProject.module.sass";

enum ScrollPositions {
  home,
  contactInfo,
  aboutMe,
  resume,
  portfolio,
}

export const Header: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(ScrollPositions.home);
  const [stickyShrink, setStickyShrink] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    const checkScrollEnd = () => {
      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(function () {
        trackScroll(true);
      }, 500);
    };
    const trackScroll = (sendEvent: boolean): void => {
      // How far above titles should header underline initiate switch - corresponds to section padding.
      const sectionOffset = 50;

      const home = document.querySelector(`#${homeStyles.home}`);
      const aboutMe = document.querySelector(`#${aboutMeStyles.aboutMe}`);
      const contactInfo = document.querySelector(
        `#${contactInfoStyles.contactInfo}`
      );
      const resume = document.querySelector(`#${resumeStyles.resume}`);
      const portfolio = document.querySelector(
        `#${portfolioStyles.portfolioProject}`
      );
      if (
        home?.getBoundingClientRect &&
        aboutMe?.getBoundingClientRect &&
        contactInfo?.getBoundingClientRect &&
        resume?.getBoundingClientRect &&
        portfolio?.getBoundingClientRect
      ) {
        const homeTop = Math.round(home.getBoundingClientRect().top) - 50;
        const contactInfoTop =
          Math.round(contactInfo.getBoundingClientRect().top) - sectionOffset;
        const aboutMeTop =
          Math.round(aboutMe.getBoundingClientRect().top) - sectionOffset;
        const resumeTop =
          Math.round(resume.getBoundingClientRect().top) - sectionOffset;
        const portfolioTop =
          Math.round(portfolio.getBoundingClientRect().top) - sectionOffset;

        if (window.scrollY === 0) {
          setStickyShrink(false);
        } else {
          setStickyShrink(true);
        }
        if (
          homeTop <= 0 &&
          contactInfoTop > 0 &&
          aboutMeTop > 0 &&
          resumeTop > 0 &&
          portfolioTop > 0
        ) {
          sendEvent ? sendHomeEvent() : setScrollPosition(ScrollPositions.home);
        } else if (
          homeTop <= 0 &&
          contactInfoTop <= 0 &&
          aboutMeTop > 0 &&
          resumeTop > 0 &&
          portfolioTop > 0
        ) {
          sendEvent
            ? sendContactEvent()
            : setScrollPosition(ScrollPositions.contactInfo);
        } else if (
          homeTop <= 0 &&
          contactInfoTop <= 0 &&
          aboutMeTop <= 0 &&
          resumeTop > 0 &&
          portfolioTop > 0
        ) {
          sendEvent
            ? sendAboutMeEvent()
            : setScrollPosition(ScrollPositions.aboutMe);
        } else if (
          homeTop <= 0 &&
          contactInfoTop <= 0 &&
          aboutMeTop <= 0 &&
          resumeTop <= 0 &&
          portfolioTop > 0
        ) {
          sendEvent
            ? sendResumeEvent()
            : setScrollPosition(ScrollPositions.resume);
        } else if (
          homeTop <= 0 &&
          contactInfoTop <= 0 &&
          aboutMeTop <= 0 &&
          resumeTop <= 0 &&
          portfolioTop <= 0
        ) {
          sendEvent
            ? sendPortfolioEvent()
            : setScrollPosition(ScrollPositions.portfolio);
        }
      }
    };
    document.addEventListener("scroll", () => trackScroll(false));
    document.addEventListener("scroll", checkScrollEnd);
    return () => {
      document.removeEventListener("scroll", () => trackScroll(false));
      document.removeEventListener("scroll", checkScrollEnd);
    };
  }, []);

  const getPattiesDivClassName = () =>
    `${styles.patties} ${
      stickyShrink && !menu
        ? styles.pattiesStickyShrink
        : stickyShrink && menu
        ? `${styles.pattiesStickyShrink} ${styles.pattiesOpened}`
        : !stickyShrink && !menu
        ? styles.pattiesNormal
        : `${styles.pattiesNormal} ${styles.pattiesOpened}`
    }`;

  return (
    <>
      <header
        id={styles.header}
        className={stickyShrink ? styles.stickyShrink : styles.normal}
      >
        <div
          className={menu ? styles.menuOpen : styles.menuClosed}
          id={styles.linkBox}
        >
          <a
            href="#home"
            className={
              scrollPosition === ScrollPositions.home ? styles.highlight : ""
            }
          >
            Home
          </a>
          <a
            href="#contactInfo"
            className={
              scrollPosition === ScrollPositions.contactInfo
                ? styles.highlight
                : ""
            }
          >
            Contact
          </a>
          <a
            href="#aboutMe"
            className={
              scrollPosition === ScrollPositions.aboutMe ? styles.highlight : ""
            }
          >
            About Me
          </a>
          <a
            href="#resume"
            className={
              scrollPosition === ScrollPositions.resume ? styles.highlight : ""
            }
          >
            Resume
          </a>
          <a
            href="#portfolioProject"
            className={
              scrollPosition === ScrollPositions.portfolio
                ? styles.highlight
                : ""
            }
          >
            Portfolio
          </a>
        </div>
        <div
          onClick={() => setMenu(!menu)}
          className={
            stickyShrink ? styles.hamburgerStickyShrink : styles.hamburgerNormal
          }
          id={styles.hamburger}
        >
          <div className={getPattiesDivClassName()}></div>
          <div className={getPattiesDivClassName()}></div>
          <div className={getPattiesDivClassName()}></div>
        </div>
      </header>
    </>
  );
};
