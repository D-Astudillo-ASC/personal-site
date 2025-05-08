import React from "react";
import { Link } from "gatsby";
import Seo from "../components/Seo";
const BlogPage = () => {
  return (
    <>
      <Seo title="Blog" />
      <h1> Blog Page. Will be fully implemented in Personal Website v2. </h1>
      <Link to="/"> Back home </Link>
    </>
  );
};

export default BlogPage;