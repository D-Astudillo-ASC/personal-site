import React from "react";
//import Loadable from "@loadable/component";
import { Link } from "gatsby";
import Layout from "../components/layout";
import "../components/Fontawesome";
import * as style from "../styles/index.module.css";
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
      <section className={style.iconSection}>
        <IconClick
          icon={
            <FontAwesomeIcon
              icon={["fab", "github"]}
              size="4x"
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
              size="4x"
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
              size="4x"
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
              size="4x"
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
              size="4x"
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
              size="4x"
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
              size="4x"
              color="#722620"
              title="E-Mail"
            />
          }
          link="mailto:daniel.ast2016@gmail.com"
        />
        <IconClick
          icon={
            <svg
              role="img"
              id="leetcode"
              style={{
                position: "absolute",
                fill: "#722620",
                top: "40%",
                marginLeft: "30px",
                width: "64px",
                transform: "translate(-50%,-50%)",
              }}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>LeetCode</title>
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
            </svg>
          }
          style={{ width: "64px" }}
          link="https://leetcode.com/dtm99/"
        />
      </section>
    </Layout>
  );
};

export default IndexPage;
