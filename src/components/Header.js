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
  navBarMenuBar,
} from "../styles/header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const MenuDisplay = () =>{
//   return (
//     <div className={navBarMenu}></div>
//   )
// }
// const Hamburger = styled.div`
//   background-color: #111;
//   width: 30px;
//   height: 3px;
//   transition: all .3s linear;
//   align-self: center;
//   position: relative;
//   transform: "inherit")};
//   ::before,
//   ::after {
//     width: 30px;
//     height: 3px;
//     background-color: #111;
//     content: "";
//     position: absolute;
//     transition: all 0.3s linear;
//   }
//   ::before {
//     transform: rotate(0deg)};
//     top: -10px;
//   }
//   ::after {
//     opacity: 1)};
//     transform: rotate(0deg))};
//     top: 10px;
//   }
// `

// const Toggle = () => {
//   return <div className={navBarToggle}></div>;
// };
const Header = () => {
  // const [navBarOpen, setNavBarOpen] = useState(false);
  return (
    <Navbar collapseOnSelect fixed="top" className={navBarCustom} expand="lg">
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
        {/* <Toggle onClick={() => setNavBarOpen(!navBarOpen)}>
          {navBarOpen ? (
            <div className={navBarIsOpen} />
          ) : (
            <div className={navBarClosed} />
          )}
        </Toggle> */}
        <div className={navBarMenu}>
          <div className={navBarMenuBar} />
          <div className={navBarMenuBar} />
          <div className={navBarMenuBar} />
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
  );
};

export default Header;
