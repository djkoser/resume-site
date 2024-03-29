import { useEffect, useState } from "react";
import { sendResumeEvent } from "../utilities";
import styles from "../styles/2-containers/resume.module.sass";

const Resume: React.FC = () => {
  const [transformScaleFactor, setTransformScaleFactor] = useState<number>(1);

  const iFrameWidth = 950;

  const windowResizeHandler = () => {
    const viewWidth = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    setTransformScaleFactor(Math.min(viewWidth / iFrameWidth, 1.1));
  };

  useEffect(() => {
    window.addEventListener("resize", windowResizeHandler);
    windowResizeHandler();
    return () => window.removeEventListener("resize", windowResizeHandler);
  });

  return (
    <section id={styles.resume}>
      <h2 id={styles.resumeHeader}>My Resume</h2>
      <a
        id={styles.gDriveLink}
        href={`https://docs.google.com/document/d/1nHf7NgOLNa1_5YHExAW224p71iUGbDs7b6HDGcgasYs/edit?usp=sharing`}
        target="_blank"
        rel="noreferrer"
        onClick={() => sendResumeEvent()}
      >
        Google Drive/Download Link
      </a>
      <br />
      <iframe
        id="resumeIFrame"
        src="https://docs.google.com/document/d/e/2PACX-1vQxzdPBt1jyFErK-48am_xs9MYQZXI2OpT-QkHNGfMTfZINzbBqshHyB5oVOvFN5yvl9z2OIWpY7fME/pub?embedded=true"
      >
        <style>
          {`
            #resumeIFrame {
              width: 850px;
              height: ${80 / transformScaleFactor}vh;
              -moz-transform: scale(
                ${transformScaleFactor},
                ${transformScaleFactor}
              );
              -webkit-transform: scale(
                ${transformScaleFactor},
                ${transformScaleFactor}
              );
              -o-transform: scale(
                ${transformScaleFactor},
                ${transformScaleFactor}
              );
              -ms-transform: scale(
                ${transformScaleFactor},
                ${transformScaleFactor}
              );
              transform: scale(
                ${transformScaleFactor},
                ${transformScaleFactor}
              );
              -moz-transform-origin: top center;
              -webkit-transform-origin: top center;
              -o-transform-origin: top center;
              -ms-transform-origin: top center;
              transform-origin: top center;
              margin-bottom: ${80 - 80 / transformScaleFactor}vh;
              margin-right: ${0}px;
            }
          `}
        </style>
      </iframe>
    </section>
  );
};
export default Resume;
