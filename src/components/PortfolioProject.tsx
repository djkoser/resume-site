import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ReduxState, Project } from "../redux/reducer";

export default function PortfolioProject() {
  const portfolioContent: Project[] = useSelector(
    (state: ReduxState) => state.portfolioContent
  );
  const [thisProject, setThisProject] = useState<Project>(portfolioContent[0]);

  return (
    <main id="portfolioProject">
      <button onClick={() => setThisProject(portfolioContent[0])}>
        TopTableGames.net
      </button>
      <button onClick={() => setThisProject(portfolioContent[1])}>
        BackyardRestoration.net
      </button>
      <iframe src={thisProject.src} title={thisProject.title} />
    </main>
  );
}
