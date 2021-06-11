import React, { useState, useEffect } from 'react';

function Header() {
  const [scrollPosition, setScrollPosition] = useState('home');
  const [stickyShrink, setStickyShrink] = useState(false);
  useEffect(() => {
    const trackScroll: () => void = () => {
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
        console.log(window.scrollY);
        if (window.scrollY <= 0) {
          setStickyShrink(false);
        } else {
          setStickyShrink(true);
        }
        if (
          window.scrollY >= home.getBoundingClientRect().top &&
          window.scrollY < contactInfo.getBoundingClientRect().top
        ) {
          setScrollPosition('home');
        } else if (
          window.scrollY >= contactInfo.getBoundingClientRect().top &&
          window.scrollY < aboutMe.getBoundingClientRect().top
        ) {
          setScrollPosition('contactInfo');
        } else if (
          window.scrollY >= aboutMe.getBoundingClientRect().top &&
          window.scrollY < resume.getBoundingClientRect().top
        ) {
          setScrollPosition('aboutMe');
        } else if (
          window.scrollY >= resume.getBoundingClientRect().top &&
          window.scrollY < portfolio.getBoundingClientRect().top
        ) {
          setScrollPosition('resume');
        } else if (window.scrollY >= portfolio.getBoundingClientRect().top) {
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
        <a href="#portfolio" className={scrollPosition === 'portfolio' ? 'highlight' : ''}>
          Portfolio
        </a>
      </header>
    </>
  );
}

export default Header;
