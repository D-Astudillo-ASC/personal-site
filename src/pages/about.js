import React from "react";
import { Link } from "gatsby";
import Seo from "../components/Seo";
const AboutPage = () => {
  return (
    <>
      <Seo title="About Me" />
      <h1> About me section. More about me in Personal Website v2. </h1>
      <Link to="/"> Back home </Link>
    </>
  );
};

export default AboutPage;
