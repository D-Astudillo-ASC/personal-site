import "@fontsource/playfair-display"

import React from "react"
import Layout from "./src/components/layout.js"
import "./src/utils/fontawesome.js"

// Wrap all pages with the Layout component
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};