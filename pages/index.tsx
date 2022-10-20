import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import {
  Header,
  Home as HomeSection,
  ContactInfo,
  AboutMe,
  PortfolioProject,
  Footer,
} from "../components";

import dynamic from "next/dynamic";

const ResumeDynamic = dynamic(() => import("../components/Resume"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div className="App">
      <Head>
        <title>David Koser - Software Engineer</title>
      </Head>
      <Header />
      <HomeSection />
      <ContactInfo />
      <AboutMe />
      <ResumeDynamic />
      <PortfolioProject />
      <Footer />
    </div>
  );
};

export default Home;
