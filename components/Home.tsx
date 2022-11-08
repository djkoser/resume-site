import React from "react";
import Image from "next/image";

export function Home() {
  return (
    <section id="home">
      <div id="headerBox">
        <h1>David Koser</h1>
        <h2 id="h2Override">Software Engineer & Web Developer</h2>
      </div>
      <div id="headDesc">
        <div id="headshot">
          <Image
            src="/media/Head.jpg"
            alt="David Koser headshot"
            height={1327}
            width={928}
          ></Image>
        </div>
        <article className="textBlocks" id="homeDescription">
          Hello! My name is David Koser
          <br />I am an emerging software engineer and web developer focusing on
          Typescript applied to Node.js and React.js. Currently, I am also actively
          improving my mastery of AWS and associated cloud-based technologies.
          My resume can be viewed and downloaded witin the &quot;Resume&quot;
          section. Screenshots, descriptions and links to my previous projects
          and their associated GitHub respositories can also be found within
          the &quot;Projects&quot; section.
        </article>
      </div>
    </section>
  );
}
