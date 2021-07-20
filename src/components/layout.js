import React from "react";
import {
  //   container,
  heading,
  bodyContainer,
  navLinks,
  navLinkItem,
  navLinkText,
} from "../styles/layout.css";

import Footer from "./Footer";
import useWindowSize from "../utils/useWindowSize";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

const Layout = ({ children }) => {
  const { width } = useWindowSize();
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

  const { smallFile, medFile, largeFile, xlargeFile } = useStaticQuery(
    graphql`
      query getBackground {
        smallFile: file(relativePath: { eq: "background-small.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 640, quality: 100, formats: [WEBP, JPG])
          }
        }
        medFile: file(relativePath: { eq: "background-med.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 1920, quality: 100, formats: [WEBP, JPG])
          }
        }
        largeFile: file(relativePath: { eq: "background-large.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 2400, quality: 100, formats: [WEBP, JPG])
          }
        }
        xlargeFile: file(relativePath: { eq: "background-xlarge.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 5621, quality: 100, formats: [WEBP, JPG])
          }
        }
      }
    `
  );

  let imageFile = {};
  if (width > 2400) {
    imageFile = xlargeFile;
  } else if (width > 1920 && width <= 2400) {
    imageFile = largeFile;
  } else if (width > 640 && width <= 1920) {
    imageFile = medFile;
  } else {
    imageFile = smallFile;
  }

  //   console.log(
  //     useStaticQuery(
  //       graphql`
  //         query getBackground {
  //           smallFile: file(relativePath: { eq: "background-small.jpg" }) {
  //             childImageSharp {
  //               gatsbyImageData(width: 640, quality: 100, formats: [WEBP, JPG])
  //             }
  //           }
  //           medFile: file(relativePath: { eq: "background-med.jpg" }) {
  //             childImageSharp {
  //               gatsbyImageData(width: 1920, quality: 100, formats: [WEBP, JPG])
  //             }
  //           }
  //           largeFile: file(relativePath: { eq: "background-large.jpg" }) {
  //             childImageSharp {
  //               gatsbyImageData(width: 2400, quality: 100, formats: [WEBP, JPG])
  //             }
  //           }
  //           xlargeFile: file(relativePath: { eq: "background-xlarge.jpg" }) {
  //             childImageSharp {
  //               gatsbyImageData(width: 5621, quality: 100, formats: [WEBP, JPG])
  //             }
  //           }
  //         }
  //       `
  //     )
  //   );
  //   console.log(
  //     useStaticQuery(
  //       graphql`
  //         query getBackground($fileName: String, $fileWidth: Int) {
  //           file(relativePath: { eq: $fileName }) {
  //             childImageSharp {
  //               fluid(maxWidth: $fileWidth, quality: 100) {
  //                 ...GatsbyImageSharpFluid_withWebp
  //               }
  //             }
  //           }
  //         }
  //       `,
  //       { fileName: backgroundName, fileWidth: maxWidth }
  //     )
  //   );

  const pluginImage = getImage(imageFile);
  //   console.log({ fileName: backgroundName, fileWidth: maxWidth });
  //   console.log(pluginImage);
  return (
    <div className={bodyContainer}>
      <BgImage
        image={pluginImage}
        style={{
          position: "inherit",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundColor: "#464646",
          width: "100%",
          height: "100%",
        }}
      >
        {/* <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                About
              </Link>
            </li>
          </ul>
        </nav> */}
        {children}
        <Footer />
      </BgImage>
    </div>
  );
};
export default Layout;
