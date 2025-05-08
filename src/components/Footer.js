import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import * as style from "../styles/footer.module.css";
const Footer = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  const author = site.siteMetadata.author;
  return (
    <div className={style.footer}>
      <span>
        <b>{author}</b> &copy; {2021}. Made with&nbsp;
        <span>&nbsp;❤&nbsp;</span> &&nbsp;
        <a href="https://www.gatsbyjs.org/">Gatsby</a>
      </span>
    </div>
  );
};

export default Footer;
