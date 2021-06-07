import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import PortfolioProject from "./components/PortfolioProject";
import AboutMe from "./components/AboutMe";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/project/:ProjectName" component={PortfolioProject} />
    <Route path="/aboutMe" component={AboutMe} />
  </Switch>
);
