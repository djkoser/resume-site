import React from "react";
import PDFViewer from "./Resume";
import resume from "../PDF/David_Koser_Web_Developer_Resume.pdf";

export default function Home() {
  return (
    <main id="home">
      <h1>Welcome to My Portfolio Website</h1>
      <img src="./Head.jpg" alt="David Koser headshot" />
      <article>
        Hello! My name is David Koser
        <br />I am an emerging web-developer/software engineer focusing on
        Typescript in a React.js environment. Screenshots, descriptions and
        links to my previous projects and their associated GitHub respositories
        can be found under the "Projects" dropdown. My resume can be viewed and
        downloaded below.
        <br />
        <h3>Thanks for visiting!</h3>
      </article>
     
      <section>
        <h2>My Resume</h2>
        <PDFViewer pdf={resume} />
      </section>
    </main>
  );
}
