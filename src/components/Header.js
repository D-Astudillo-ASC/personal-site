import React, { useState, useEffect } from "react";

import { Link, useStaticQuery, graphql } from "gatsby";
import { Navbar, Nav } from "react-bootstrap";
import {
  navBarCustom,
  navBarLink,
  navBarLinks,
  navElement,
  navBarLogo,
  navContainer,
  navBarText,
  navBarMenu,
  overlayContent,
  navBarMenuBar1,
  navBarMenuBar2,
  navBarMenuBar3,
  navBarOverlay,
} from "../styles/header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useWindowSize from "../utils/useWindowSize";
const Header = () => {
  
  const data = useStaticQuery(graphql`
    {
      allFile {
        edges {
          node {
            relativePath
            sourceInstanceName
            publicURL
          }
        }
      }
      resumeFile: allFile(filter: {relativePath: {eq: "resume.pdf"}, sourceInstanceName: {eq: "data"}}) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `);
  const [navBarOpen, setNavBarOpen] = useState(false);
  const { width } = useWindowSize();
  
  useEffect(() => {
    console.log('All files:', data.allFile.edges);
    console.log('Resume file:', data.resumeFile.edges[0]?.node);
  }, [data]);
  
  const resumeUrl = data?.resumeFile?.edges[0]?.node?.publicURL || "#";
  
  return (
    <>
      <Navbar fixed="top" className={navBarCustom} expand="lg">
        <div className={navContainer}>
          <Nav className={navBarLogo}>
            <Navbar.Brand as={Link} to="/">
              <FontAwesomeIcon
                icon={["far", "file-code"]}
                color={"burlywood"}
                title="CodeLogo"
                size="3x"
              />
            </Navbar.Brand>
          </Nav>
          <button
              className={navBarMenu}
              onClick={() => {
                if (width <= 768) {
                  setNavBarOpen(!navBarOpen);
                }
              }}
              aria-label="Toggle navigation"
              aria-expanded={navBarOpen ? "true" : "false"}
          >
            <div className={`${navBarOpen ? "open " : ""}${navBarMenuBar1}`} />
            <div className={`${navBarOpen ? "open " : ""}${navBarMenuBar2}`} />
            <div className={`${navBarOpen ? "open " : ""}${navBarMenuBar3}`} />
          </button>
          <Navbar.Collapse id="responsive-navbar-nav" className={navBarLinks}>
            <Nav className={navElement}>
              <Nav.Link as={Link} to="/about" className={navBarLink}>
                <div className={navBarText}>About</div>
              </Nav.Link>

              <Nav.Link as={Link} to="/projects" className={navBarLink}>
                <div className={navBarText}>Projects</div>
              </Nav.Link>
              <a
                href={resumeUrl}
                className={navBarLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={navBarText}>Resume</div>
              </a>
              <Nav.Link as={Link} to="/blog" className={navBarLink}>
                <div className={navBarText}>Blog</div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <div className={`${navBarOpen ? "open " : ""}${navBarOverlay}`}>
        <Nav className={`${navBarOpen ? "open " : ""}${overlayContent}`}>
          <Nav.Link as={Link} to="/about" className={navBarLink}>
            <div className={navBarText}>About</div>
          </Nav.Link>

          <Nav.Link as={Link} to="/projects" className={navBarLink}>
            <div className={navBarText}>Projects</div>
          </Nav.Link>
          <a
            href={resumeUrl}
            className={navBarLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={navBarText}>Resume</div>
          </a>
          <Nav.Link as={Link} to="/blog" className={navBarLink}>
            <div className={navBarText}>Blog</div>
          </Nav.Link>
        </Nav>
      </div>
    </>
  );
};

export default Header;
