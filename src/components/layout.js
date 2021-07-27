import React from "react";
import Particles from "react-tsparticles";
import { bodyContainer } from "../styles/layout.module.css";
import Header from "./Header";
import params from "../configs/particles";
import Footer from "./Footer";
import useWindowSize from "../utils/useWindowSize";

const Layout = ({ children }) => {
  const { width, height } = useWindowSize();
  return (
    <>
      <Header />
      <div className={bodyContainer}>{children}</div>
      <Footer />
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
