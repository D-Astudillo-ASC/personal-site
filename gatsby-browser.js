// Import Playfair Display font with specific weights
import "@fontsource/playfair-display/400.css"  // normal
import "@fontsource/playfair-display/500.css"  // medium
import "@fontsource/playfair-display/600.css"  // semibold
import "@fontsource/playfair-display/700.css"  // bold

import React from "react"
import Layout from "./src/components/layout.js"
import "./src/utils/fontawesome.js"

// Wrap all pages with the Layout component
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};