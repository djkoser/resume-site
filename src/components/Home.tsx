import React from "react";
import PDFViewer from "./PDFViewer";
import resume from "../PDF/David_Koser_Web_Developer_Resume.pdf";

export default function Home() {
  return (
    <main>
      <h1>Welcome to My Portfolio Website</h1>
      <article>
        Hello! My name is David Koser. I am an emerging web-developer/software
        engineer focusing on Typescript in a React.js environment. Screenshots,
        descriptions and links to my previous projects and their associated
        GitHub respositories can be found under the "Projects" dropdown. You may
        also reach out to me by email at koser.david@gmail.com, or by using the
        contact form below. Thank you for visiting!
      </article>
      <h2>Resume</h2>
      <section>
        <PDFViewer pdf={resume} />
      </section>
    </main>
  );
}
