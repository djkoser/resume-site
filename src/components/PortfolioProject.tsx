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
        BackyardRestoration.net
      </button>
      <button onClick={() => setThisProject(portfolioContent[1])}>
        TopTableGames.net
      </button>
      <img src={thisProject.image} alt={`${thisProject.title} preview`} />
    </main>
  );
}
