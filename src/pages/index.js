import React, { useEffect, useState, useRef } from "react";
import Seo from "../components/Seo";
import "../components/fontawesome.js";
import * as style from "../styles/index.module.css";

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
    </>
  );
};

export default IndexPage;
