import React from "react";
import Image from "next/image";
import styles from "../styles/2-containers/home.module.sass";

export const Home: React.FC = () => {
  return (
    <section id={styles.home}>
      <div id={styles.headerBox}>
        <h1>David Koser</h1>
        <h2 id={styles.h2Override}>Software Engineer & Web Developer</h2>
      </div>
      <div id={styles.headDesc}>
        <div id={styles.headshot}>
          <Image
            src="/media/Head.jpg"
            alt="David Koser headshot"
            height={1327}
            width={928}
            style={{ width: "100%", height: "auto" }}
            priority={true}
          ></Image>
        </div>
        <article id={styles.homeDescription}>
          Hello! My name is David Koser
          <br />I am an emerging software engineer and web developer focusing on
          Typescript applied to Node.js and React.js. Currently, I am also
          actively improving my mastery of AWS and associated cloud-based
          technologies. My resume can be viewed and downloaded within the Resume
          section. Screenshots, descriptions and links to my previous projects
          and their associated GitHub repositories can also be found within the
          Projects section.
        </article>
      </div>
    </section>
  );
};
