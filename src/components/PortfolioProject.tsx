import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ReduxState, Project } from '../redux/reducer';
import { Slide } from 'react-slideshow-image';

export default function PortfolioProject() {
  const portfolioContent: Project[] = useSelector((state: ReduxState) => state.portfolioContent);
  const [thisProject, setThisProject] = useState<Project>(portfolioContent[0]);
  // eslint-disable-next-line no-undef
  const [mappedSlides, setMappedSlides] = useState<JSX.Element[]>();
  useEffect(() => {
    setMappedSlides(
      thisProject.images.map((el) => (
        <a key={el} href={thisProject.href} rel="noreferrer" target="_blank">
          <div className="each-slide">
            <img src={el}></img>
          </div>
        </a>
      ))
    );
  }, [thisProject]);

  const fadeProperties = {
    duration: 5000,
    pauseOnHover: true,
    indicators: true
  };

  const buttonBox = (
    <div className="buttonBox">
      <div onClick={() => setThisProject(portfolioContent[0])} className="subButtonBox">
        <svg
          style={
            thisProject.title === 'BackyardRestoration.net'
              ? { cursor: 'pointer', opacity: '50%' }
              : { cursor: 'pointer', opacity: '100%' }
          }
          id="leftButton"
          className="portfolioButtons"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
          <path d="M14 12l-14 9v-18l14 9zm-4-9v4l8.022 5-8.022 5v4l14-9-14-9z" />
        </svg>
        <h4
          style={
            thisProject.title === 'BackyardRestoration.net'
              ? { cursor: 'pointer', opacity: '50%' }
              : { cursor: 'pointer', opacity: '100%' }
          }>
          BackyardRestoration.net
        </h4>
      </div>
      <div onClick={() => setThisProject(portfolioContent[1])} className="subButtonBox">
        <h4
          style={
            thisProject.title === 'TopTableGames.net'
              ? { cursor: 'pointer', opacity: '50%' }
              : { cursor: 'pointer', opacity: '100%' }
          }>
          TopTableGames.net
        </h4>
        <svg
          style={
            thisProject.title === 'TopTableGames.net'
              ? { cursor: 'pointer', opacity: '50%' }
              : { cursor: 'pointer', opacity: '100%' }
          }
          className="portfolioButtons"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
          <path d="M14 12l-14 9v-18l14 9zm-4-9v4l8.022 5-8.022 5v4l14-9-14-9z" />
        </svg>
      </div>
    </div>
  );

  return (
    <section id="portfolioProject">
      <h2>Portfolio</h2>
      {buttonBox}
      <div
        className={thisProject.title === portfolioContent[0].title ? 'fromLeft' : 'fromRight'}
        id="portfolioProjectSub">
        <Slide {...fadeProperties} easing="ease">
          {mappedSlides}
        </Slide>
        <div id="projectDescription">
          <h3 className="projectSubheader">Technologies</h3>
          <article id="technologyList">
            {thisProject.technologies.reduce((acc, el, ind) => {
              acc += el;
              if (ind !== thisProject.technologies.length - 1) {
                acc += ' | ';
              }
              return acc;
            }, '')}
          </article>
          <h3 className="projectSubheader">Project Purpose</h3>
          <article>{thisProject.purpose}</article>
          <h3 className="projectSubheader">Details</h3>
          <article>{thisProject.details}</article>
        </div>
      </div>
      {buttonBox}
    </section>
  );
}
