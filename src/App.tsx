import React from 'react';
import './scss/main.scss';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import ContactInfo from './components/ContactInfo';
import Resume from './components/Resume';
import PortfolioProject from './components/PortfolioProject';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <ContactInfo />
      <AboutMe />
      <Resume />
      <PortfolioProject />
    </div>
  );
}

export default App;
