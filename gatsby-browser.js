import "@fontsource/playfair-display";

import React from "react";
import Layout from "./src/components/Layout"; // Import your layout component

// Wrap all pages with the Layout component
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};