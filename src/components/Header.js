import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import {
  navBarCustom,
  navBarLink,
  navBarMenuOpts,
  navElement,
  navBarLogo,
  navContainer,
  navBarText,
} from "../styles/navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <Container>
      <Navbar fixed="top" className={navBarCustom} expand="lg">
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav" className={navBarMenuOpts}>
          <div className={navContainer}>
            <Nav className={navBarLogo}>
              <Navbar.Brand href="/">
                <FontAwesomeIcon
                  icon={["far", "file-code"]}
                  color={"burlywood"}
                  size="3x"
                />
              </Navbar.Brand>
            </Nav>
            <Nav className={navElement}>
              <Nav.Link href="/about" className={navBarLink}>
                <div className={navBarText}>About</div>
              </Nav.Link>
              <Nav.Link href="/projects" className={navBarLink}>
                <div className={navBarText}>Projects</div>
              </Nav.Link>
              <Nav.Link href="/resume" className={navBarLink}>
                <div className={navBarText}>Resume</div>
              </Nav.Link>
              <Nav.Link href="/blog" className={navBarLink}>
                <div className={navBarText}>Blog</div>
              </Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
