// Import Playfair Display font with specific weights
import "@fontsource/playfair-display/400.css";  // normal
import "@fontsource/playfair-display/400-italic.css";
import "@fontsource/playfair-display/500.css";  // medium
import "@fontsource/playfair-display/500-italic.css";
import "@fontsource/playfair-display/600.css";  // semibold
import "@fontsource/playfair-display/600-italic.css";
import "@fontsource/playfair-display/700.css";  // bold
import "@fontsource/playfair-display/700-italic.css";
import "@fontsource/playfair-display/800.css";  // extra-bold
import "@fontsource/playfair-display/800-italic.css";
import "@fontsource/playfair-display/900.css";  // black
import "@fontsource/playfair-display/900-italic.css";

import React from "react"
import Layout from "./src/components/layout.js"
import "./src/utils/fontawesome.js"

// Wrap all pages with the Layout component
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};