import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ReduxState, Project } from "../redux/reducer";

export default function PortfolioProject() {
  const portfolioContent: Project[] = useSelector(
    (state: ReduxState) => state.portfolioContent
  );
  const [thisProject, setThisProject] = useState<Project>(portfolioContent[0]);
  const [mobileView, setMobileView] = useState(false);

  return (
    <main id="portfolioProject">
      <button onClick={() => setMobileView(!mobileView)}>
        {mobileView ? "To Mobile View" : "To Desktop View"}
      </button>
      <button onClick={() => setThisProject(portfolioContent[0])}>
        BackyardRestoration.net
      </button>
      <button onClick={() => setThisProject(portfolioContent[1])}>
        TopTableGames.net
      </button>
      <iframe
        id="portfolioIFrame"
        className={mobileView ? "mobileView" : "desktopView"}
        src={thisProject.src}
        title={thisProject.title}
      />
    </main>
  );
}
