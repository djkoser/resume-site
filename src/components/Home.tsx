import React from 'react';

export default function Home() {
  return (
    <section id="home">
      <h1>David Koser - Web Developer</h1>
      <h2>Welcome!</h2>
      <img id="headshot" src="./media/Head.jpg" alt="David Koser headshot" />
      <article id="homeDescription">
        Hello! My name is David Koser
        <br />I am an emerging web-developer/software engineer focusing on Typescript in a React.js environment.
        Screenshots, descriptions and links to my previous projects and their associated GitHub respositories can be
        found under the &quot;Projects&quot; dropdown. My resume can be viewed and downloaded below.
        <br />
        <h3>Thanks for visiting!</h3>
      </article>
    </section>
  );
}
