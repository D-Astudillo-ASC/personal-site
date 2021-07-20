import React from "react";
//import Loadable from "@loadable/component";
import { Link } from "gatsby";
import Layout from "../components/layout";
import "../components/Fontawesome";
import { icons } from "../styles/index.css";
import IconClick from "../components/IconClick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// This is flickering, will probably need to look into this plugin: https://github.com/graysonhicks/gatsby-plugin-loadable-components-ssr
//const IconClick = Loadable(() => import("../components/IconClick"), {
//   fallback: <div>Loading...</div>,
// });

// const query = graphql`
//   query {
//     file(relativePath: { eq: "background.jpg" }) {
//       childImageSharp {
//         fluid(quality: 90, maxWidth: 1920) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//   }
// `;
const IndexPage = () => {
  return (
    <Layout>
      <h1> Hello! This is the index page. </h1>
      <Link to="/about"> About page </Link>
      <section className={icons}>
        <IconClick
          icon={
            <FontAwesomeIcon
              icon={["fab", "github"]}
              size="4x"
              color="#000BBB"
              title="Github"
            />
          }
          link={"https://github.com/D-Astudillo-ASC"}
        />
        <IconClick
          icon={
            <FontAwesomeIcon
              icon={["fab", "facebook"]}
              size="4x"
              color="#000BBB"
              title="Facebook"
            />
          }
          link={"https://www.facebook.com/danielmateo.astudillo/"}
        />
        <IconClick
          icon={
            <FontAwesomeIcon
              icon={["fab", "kaggle"]}
              size="4x"
              color="#000BBB"
              title="Kaggle"
            />
          }
          link={"https://www.kaggle.com/danielastudillo"}
        />
        <IconClick
          icon={
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              size="4x"
              color="#000BBB"
              title="LinkedIn"
            />
          }
          link={"https://www.linkedin.com/in/daniel-a-494689126"}
        />
        <IconClick
          icon={
            <FontAwesomeIcon
              icon={["fab", "hackerrank"]}
              size="4x"
              color="#000BBB"
              title="Hackerrank"
            />
          }
          link="https://www.hackerrank.com/dma_3"
        />
        <IconClick
          icon={
            <FontAwesomeIcon
              icon={["far", "envelope"]}
              size="4x"
              color="#000BBB"
              title="E-Mail"
            />
          }
          link="mailto:daniel.ast2016@gmail.com"
        />
      </section>
    </Layout>
  );
};

export default IndexPage;
