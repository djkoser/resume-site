import React from "react";
import "./scss/main.scss";
import Routes from "./Routes";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      {Routes}
    </div>
  );
}

export default App;
