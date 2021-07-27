import React, { useState } from "react";

import { Link } from "gatsby";
import { Navbar, Nav } from "react-bootstrap";
import "../components/Fontawesome";
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
// const MenuDisplay = () =>{
//   return (
//     <div className={navBarMenu}></div>
//   )
// }

// const Toggle = () => {
//   return <div className={navBarToggle}></div>;
// };
const Header = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const { width } = useWindowSize();
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
          <div
            className={navBarMenu}
            onClick={() => {
              if (width <= 768) {
                setNavBarOpen(!navBarOpen);
              }
            }}
          >
            <div className={`${navBarOpen ? "open " : ""}${navBarMenuBar1}`} />
            <div className={`${navBarOpen ? "open " : ""}${navBarMenuBar2}`} />
            <div className={`${navBarOpen ? "open " : ""}${navBarMenuBar3}`} />
          </div>
          <Navbar.Collapse id="responsive-navbar-nav" className={navBarLinks}>
            <Nav className={navElement}>
              <Nav.Link as={Link} to="/about" className={navBarLink}>
                <div className={navBarText}>About</div>
              </Nav.Link>

              <Nav.Link as={Link} to="/projects" className={navBarLink}>
                <div className={navBarText}>Projects</div>
              </Nav.Link>
              <Nav.Link as={Link} to="/resume" className={navBarLink}>
                <div className={navBarText}>Resume</div>
              </Nav.Link>
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
          <Nav.Link as={Link} to="/resume" className={navBarLink}>
            <div className={navBarText}>Resume</div>
          </Nav.Link>
          <Nav.Link as={Link} to="/blog" className={navBarLink}>
            <div className={navBarText}>Blog</div>
          </Nav.Link>
        </Nav>
      </div>
    </>
  );
};

export default Header;
