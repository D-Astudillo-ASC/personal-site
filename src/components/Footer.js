import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Footer = () => {
  const author = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `).site.siteMetadata.author;
  return (
    <div className="footer">
      <span>
        <b>{author}</b> &copy; {new Date().getFullYear()}. Made with&nbsp;
        <span>&nbsp;❤&nbsp;</span> &&nbsp;
        <a href="https://www.gatsbyjs.org/">Gatsby</a>
      </span>
    </div>
  );
};

export default Footer;
