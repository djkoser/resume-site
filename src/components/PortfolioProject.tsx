import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ReduxState, Project } from '../redux/reducer';
import { Slide } from 'react-slideshow-image';

export default function PortfolioProject() {
  const portfolioContent: Project[] = useSelector((state: ReduxState) => state.portfolioContent);
  const [thisProject, setThisProject] = useState<Project>(portfolioContent[0]);
  const [mappedSlides, setMappedSlides] = useState<JSX.Element[]>();
  console.log(mappedSlides);
  useEffect(() => {
    setMappedSlides(
      thisProject.images.map((el) => (
        <div key={el} className="each-slide">
          <img src={el}></img>
        </div>
      ))
    );
  }, [thisProject]);

  return (
    <main id="portfolioProject">
      <button onClick={() => setThisProject(portfolioContent[0])}>BackyardRestoration.net</button>
      <button onClick={() => setThisProject(portfolioContent[1])}>TopTableGames.net</button>
      <Slide easing="ease">{mappedSlides}</Slide>
    </main>
  );
}
