import React from "react";
import Particles from "react-tsparticles";
import {
  //   container,
  heading,
  bodyContainer,
  navLinks,
  navLinkItem,
  navLinkText,
} from "../styles/layout.module.css";
import NavBar from "./NavBar";
import params from "../configs/particles";
import Footer from "./Footer";
import useWindowSize from "../utils/useWindowSize";
// import { useStaticQuery, graphql } from "gatsby";
// import { getImage } from "gatsby-plugin-image";
// import { BgImage } from "gbimage-bridge";

const Layout = ({ children }) => {
  const { width, height } = useWindowSize();
  //const { width } = useWindowSize();
  //   const { file } = useStaticQuery(graphql`
  //     query {
  //       file(relativePath: { eq: "background.jpg" }) {
  //         childImageSharp {
  //           fluid(quality: 90, maxWidth: 1920) {
  //             ...GatsbyImageSharpFluid_withWebp
  //           }
  //         }
  //       }
  //     }
  //   `);
  //   const backgroundImageData = queryData.file.childImageSharp.fluid
  //   console.log("width: " + width);

  //   const { smallFile, medFile, largeFile, xlargeFile } = useStaticQuery(
  //     graphql`
  //       query getBackground {
  //         smallFile: file(relativePath: { eq: "background-small.jpg" }) {
  //           childImageSharp {
  //             gatsbyImageData(width: 640, quality: 100, formats: [WEBP, JPG])
  //           }
  //         }
  //         medFile: file(relativePath: { eq: "background-med.jpg" }) {
  //           childImageSharp {
  //             gatsbyImageData(width: 1920, quality: 100, formats: [WEBP, JPG])
  //           }
  //         }
  //         largeFile: file(relativePath: { eq: "background-large.jpg" }) {
  //           childImageSharp {
  //             gatsbyImageData(width: 2400, quality: 100, formats: [WEBP, JPG])
  //           }
  //         }
  //         xlargeFile: file(relativePath: { eq: "background-xlarge.jpg" }) {
  //           childImageSharp {
  //             gatsbyImageData(width: 5621, quality: 100, formats: [WEBP, JPG])
  //           }
  //         }
  //       }
  //     `
  //   );

  //   let imageFile = {};
  //   if (width > 2400) {
  //     imageFile = xlargeFile;
  //   } else if (width > 1920 && width <= 2400) {
  //     imageFile = largeFile;
  //   } else if (width > 640 && width <= 1920) {
  //     imageFile = medFile;
  //   } else {
  //     imageFile = smallFile;
  //   }
  //   const { imageFile } = useStaticQuery(graphql`
  //     query {
  //       imageFile: file(relativePath: { eq: "background-med.jpg" }) {
  //         childImageSharp {
  //           gatsbyImageData(width: 1920, quality: 100, formats: [WEBP, JPG])
  //         }
  //       }
  //     }
  //   `);

  //   const pluginImage = getImage(imageFile);
  //   console.log({ fileName: backgroundName, fileWidth: maxWidth });
  //   console.log(pluginImage);
  return (
    <>
      <div className={bodyContainer}>
        <NavBar />
        {children}
        <Footer />
      </div>
      <Particles
        width={width}
        height={height}
        options={params}
        style={{
          position: "fixed",
          height: "100%",
          width: "100%",
          left: 0,
          top: 0,
          zIndex: -1,
        }}
      />
    </>
  );
};
export default Layout;
