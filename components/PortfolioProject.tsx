/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import { Project, projectDescriptions } from "../global";

export const PortfolioProject: React.FC = () => {
  const [thisProject, setThisProject] = useState<Project>(
    projectDescriptions[0]
  );
  const [pageNumber, setPageNumber] = useState<number>(0);

  // eslint-disable-next-line no-undef
  const [mappedSlides, setMappedSlides] = useState<JSX.Element[]>([
    <a
      key={thisProject.href}
      href={thisProject.href}
      rel="noreferrer"
      target="_blank"
    >
      <div className="each-slide">
        <img alt={thisProject.title} src={thisProject.images[0]}></img>
      </div>
    </a>,
  ]);
  useEffect(() => {
    setMappedSlides(
      thisProject.images.map((el) => (
        <a
          key={el}
          href={thisProject.href}
          rel="noreferrer"
          target="_blank"
          onClick={() => thisProject.eventFunction()}
        >
          <div className="each-slide">
            <img alt={thisProject.title} src={el}></img>
          </div>
        </a>
      ))
    );
  }, [thisProject]);

  const fadeProperties = {
    duration: 5000,
    pauseOnHover: true,
    indicators: true,
  };
  const buttonBox = (
    <div className="buttonBox">
      <div
        onClick={() => {
          const newPageNumber = pageNumber === 0 ? 0 : pageNumber - 1;
          setPageNumber(newPageNumber);
          setThisProject(projectDescriptions[newPageNumber]);
        }}
        className="subButtonBox"
      >
        <svg
          style={
            thisProject.title === projectDescriptions[0].title
              ? { cursor: "pointer", opacity: "0.5" }
              : { cursor: "pointer", opacity: "1" }
          }
          id="leftButton"
          className="portfolioButtons"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M14 12l-14 9v-18l14 9zm-4-9v4l8.022 5-8.022 5v4l14-9-14-9z" />
        </svg>
        <h4
          style={
            thisProject.title === projectDescriptions[0].title
              ? { cursor: "pointer", opacity: "0.5" }
              : { cursor: "pointer", opacity: "1" }
          }
        >
          {pageNumber === 0
            ? projectDescriptions[0].title
            : projectDescriptions[pageNumber - 1].title}
        </h4>
      </div>
      <div
        onClick={() => {
          const newPageNumber =
            pageNumber === projectDescriptions.length - 1
              ? projectDescriptions.length - 1
              : pageNumber + 1;
          setPageNumber(newPageNumber);
          setThisProject(projectDescriptions[newPageNumber]);
        }}
        className="subButtonBox"
      >
        <h4
          style={
            thisProject.title ===
            projectDescriptions[projectDescriptions.length - 1].title
              ? { cursor: "pointer", opacity: "0.5" }
              : { cursor: "pointer", opacity: "1" }
          }
        >
          {pageNumber === projectDescriptions.length - 1
            ? projectDescriptions[projectDescriptions.length - 1].title
            : projectDescriptions[pageNumber + 1].title}
        </h4>
        <svg
          style={
            thisProject.title ===
            projectDescriptions[projectDescriptions.length - 1].title
              ? { cursor: "pointer", opacity: "0.5" }
              : { cursor: "pointer", opacity: "1" }
          }
          className="portfolioButtons"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
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
        className={
          thisProject.title === projectDescriptions[0].title
            ? "fromLeft"
            : "fromRight"
        }
        id="portfolioProjectSub"
      >
        <Slide {...fadeProperties} easing="ease">
          {mappedSlides}
        </Slide>
        <div id="projectDescription">
          <h2 className="projectSubheader">{thisProject.title}</h2>
          <h3 className="projectSubheader">Technologies</h3>
          <article id="technologyList">
            {thisProject.technologies.reduce((acc, el, ind) => {
              acc += el;
              if (ind !== thisProject.technologies.length - 1) {
                acc += " | ";
              }
              return acc;
            }, "")}
          </article>
          <a
            id="gitHubLink"
            href={thisProject.gitHubRepo}
            rel="noreferrer"
            target="_blank"
            onClick={() => thisProject.gitHubEventFunction()}
          >
            GitHub Repository
          </a>
          <h3 className="projectSubheader">Project Purpose</h3>
          <article>{thisProject.purpose}</article>
          <h3 className="projectSubheader">Details</h3>
          <article>{thisProject.details}</article>
        </div>
      </div>
      {buttonBox}
    </section>
  );
};
