import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
const AboutPage = () => {
  return (
    <Layout pageTitle={"About Page."}>
      <h1> About me section. Just trying to get this up and running. </h1>
      <Link to="/"> Back home </Link>
    </Layout>
  );
};

export default AboutPage;
