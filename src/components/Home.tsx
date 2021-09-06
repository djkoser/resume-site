import React from 'react';

export default function Home() {
  return (
    <section id="home">
      <div id="headerBox">
        <h1>David Koser</h1>
        <h2 id="h2Override">Software Engineer & Web Developer</h2>
      </div>
      <div id="headDesc">
        <img id="headshot" src="./media/Head.jpg" alt="David Koser headshot" />
        <article className="textBlocks" id="homeDescription">
          Hello! My name is David Koser
          <br />I am an emerging software engineer and web developer focusing on Typescript in a React.js environment.
          My resume can be viewed and downloaded witin the &quot;Resume&quot; section. Screenshots, descriptions and
          links to my previous projects and their associated GitHub respositories can also be found within the
          &quot;Projects&quot; section.
        </article>
      </div>
    </section>
  );
}
