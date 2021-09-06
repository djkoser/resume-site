import React, { useState, useEffect } from 'react';

function Header() {
  const [scrollPosition, setScrollPosition] = useState('home');
  const [stickyShrink, setStickyShrink] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const trackScroll: () => void = () => {
      // How far above titles should header underline initiate switch - corresponds to section padding.
      const sectionOffset = 50;
      const home = document.querySelector('#home');
      const aboutMe = document.querySelector('#aboutMe');
      const contactInfo = document.querySelector('#contactInfo');
      const resume = document.querySelector('#resume');
      const portfolio = document.querySelector('#portfolioProject');

      if (
        home?.id === 'home' &&
        aboutMe?.id === 'aboutMe' &&
        contactInfo?.id === 'contactInfo' &&
        resume?.id === 'resume' &&
        portfolio?.id === 'portfolioProject'
      ) {
        const homeTop = Math.round(home.getBoundingClientRect().top) - 50;
        const contactInfoTop = Math.round(contactInfo.getBoundingClientRect().top) - sectionOffset;
        const aboutMeTop = Math.round(aboutMe.getBoundingClientRect().top) - sectionOffset;
        const resumeTop = Math.round(resume.getBoundingClientRect().top) - sectionOffset;
        const portfolioTop = Math.round(portfolio.getBoundingClientRect().top) - sectionOffset;

        if (window.scrollY === 0) {
          setStickyShrink(false);
        } else {
          setStickyShrink(true);
        }
        if (homeTop <= 0 && contactInfoTop > 0 && aboutMeTop > 0 && resumeTop > 0 && portfolioTop > 0) {
          setScrollPosition('home');
        } else if (homeTop <= 0 && contactInfoTop <= 0 && aboutMeTop > 0 && resumeTop > 0 && portfolioTop > 0) {
          setScrollPosition('contactInfo');
        } else if (homeTop <= 0 && contactInfoTop <= 0 && aboutMeTop <= 0 && resumeTop > 0 && portfolioTop > 0) {
          setScrollPosition('aboutMe');
        } else if (homeTop <= 0 && contactInfoTop <= 0 && aboutMeTop <= 0 && resumeTop <= 0 && portfolioTop > 0) {
          setScrollPosition('resume');
        } else if (homeTop <= 0 && contactInfoTop <= 0 && aboutMeTop <= 0 && resumeTop <= 0 && portfolioTop <= 0) {
          setScrollPosition('portfolio');
        }
      }
    };
    document.addEventListener('scroll', trackScroll);
    return () => document.removeEventListener('scroll', trackScroll);
  }, []);

  return (
    <>
      <header id="header" className={stickyShrink ? 'stickyShrink' : 'normal'}>
        <div className={menu ? 'menuOpen' : 'menuClosed'} id="linkBox">
          <a href="#home" className={scrollPosition === 'home' ? 'highlight' : ''}>
            Home
          </a>
          <a href="#contactInfo" className={scrollPosition === 'contactInfo' ? 'highlight' : ''}>
            Contact
          </a>
          <a href="#aboutMe" className={scrollPosition === 'aboutMe' ? 'highlight' : ''}>
            About Me
          </a>
          <a href="#resume" className={scrollPosition === 'resume' ? 'highlight' : ''}>
            Resume
          </a>
          <a href="#portfolioProject" className={scrollPosition === 'portfolio' ? 'highlight' : ''}>
            Portfolio
          </a>
        </div>
        <div
          onClick={() => setMenu(!menu)}
          className={stickyShrink ? 'hamburgerStickyShrink' : 'hamburgerNormal'}
          id="hamburger">
          <div
            className={`patties ${
              stickyShrink && !menu
                ? 'pattiesStickyShrink'
                : stickyShrink && menu
                ? 'pattiesStickyShrink pattiesOpened'
                : !stickyShrink && !menu
                ? 'pattiesNormal'
                : 'pattiesNormal pattiesOpened'
            }`}></div>
          <div
            className={`patties ${
              stickyShrink && !menu
                ? 'pattiesStickyShrink'
                : stickyShrink && menu
                ? 'pattiesStickyShrink pattiesOpened'
                : !stickyShrink && !menu
                ? 'pattiesNormal'
                : 'pattiesNormal pattiesOpened'
            }`}></div>
          <div
            className={`patties ${
              stickyShrink && !menu
                ? 'pattiesStickyShrink'
                : stickyShrink && menu
                ? 'pattiesStickyShrink pattiesOpened'
                : !stickyShrink && !menu
                ? 'pattiesNormal'
                : 'pattiesNormal pattiesOpened'
            }`}></div>
        </div>
      </header>
    </>
  );
}

export default Header;
