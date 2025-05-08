import React, { useEffect, useState, useRef } from "react";
import Seo from "../components/Seo";
import useWindowSize from "../utils/useWindowSize";
import "../components/FontAwesome";
import * as style from "../styles/index.module.css";
import IconClick from "../components/IconClick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DisplayText = ({ textArray }) => {
  const [curText, setText] = useState("");
  const curIdx = useRef(0);

  useEffect(() => {
    const changeLine = () => {
      setText(textArray[curIdx.current]);
      curIdx.current++;
    };

    if (curIdx.current > textArray.length) {
      curIdx.current = 0;
    }

    let addText = setInterval(changeLine, 2000);
    return () => clearInterval(addText);
  });

  return <h1 className={style.displayText}>{curText}</h1>;
};

const IndexPage = () => {
  const { width } = useWindowSize();
  let iconSize = "";
  let svgWidth = 0;
  if (width >= 628) {
    iconSize = "4x";
    svgWidth = 64;
  } else if (width >= 438 && width < 628) {
    iconSize = "3x";
    svgWidth = 48;
  } else if (width >= 331 && width < 438) {
    iconSize = "2x";
    svgWidth = 32;
  } else {
    iconSize = "1x";
    svgWidth = 16;
  }

  return (
    <>
      {/* TODO: Move Seo component into gatsby-browser.js to avoid repetition.*/}
      <Seo title="Home" />
      <div className={style.greetingsContainer}>
        <DisplayText
          textArray={[
            "Hello! My name is Daniel Astudillo, welcome to my personal website!",
            "I'm currently a 4th-year student at Williams College. Go Ephs!",
            "I'm pursuing a double major in Computer Science and Math.",
            "My preferred programming languages are Java, Python, and sometimes JS.",
            "This website is my first project powered by Gatsby! It was challenging, but I did it well!",
            "Spotify is the only subscription worth getting.",
            "100% Ecuatoriano.",
            "Hala Madrid!",
          ]}
        />
      </div>
      <section className={style.iconSection}>
        <IconClick
          icon={
            <FontAwesomeIcon
              icon={["fab", "github"]}
              size={iconSize}
              color="#722620"
              title="Github"
            />
          }
          link={"https://github.com/D-Astudillo-ASC"}
        />
        <IconClick
          icon={
            <FontAwesomeIcon
              icon={["fab", "facebook"]}
              size={iconSize}
              color="#722620"
              title="Facebook"
            />
          }
          link={"https://www.facebook.com/danielmateo.astudillo/"}
        />
        <IconClick
          icon={
            <FontAwesomeIcon
              icon={["fab", "kaggle"]}
              size={iconSize}
              color="#722620"
              title="Kaggle"
            />
          }
          link={"https://www.kaggle.com/danielastudillo"}
        />
        <IconClick
          icon={
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              size={iconSize}
              color="#722620"
              title="LinkedIn"
            />
          }
          link={"https://www.linkedin.com/in/daniel-a-494689126"}
        />
        <IconClick
          icon={
            <FontAwesomeIcon
              icon={["fab", "hackerrank"]}
              size={iconSize}
              color="#722620"
              title="Hackerrank"
            />
          }
          link="https://www.hackerrank.com/dma_3"
        />
        <IconClick
          icon={
            <FontAwesomeIcon
              icon={["fab", "free-code-camp"]}
              size={iconSize}
              color="#722620"
              title="FreeCodeCamp"
            />
          }
          link="https://www.freecodecamp.org/dma3"
        />
        <IconClick
          icon={
            <FontAwesomeIcon
              icon={["far", "envelope"]}
              size={iconSize}
              color="#722620"
              title="E-Mail"
            />
          }
          link="mailto:daniel.ast9015@gmail.com"
        />
        <IconClick
          icon={
            <svg
              role="img"
              className={style.svgLeetCode}
              id="leetcode"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>LeetCode</title>
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
            </svg>
          }
          style={{ width: `${svgWidth}px` }}
          link="https://leetcode.com/dtm99/"
        />
      </section>
    </>
  );
};

export default IndexPage;
