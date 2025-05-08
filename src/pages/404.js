import * as React from "react"

import Layout from "../components/layout.js"
import Seo from "../components/Seo"

const NotFoundPage = () => (
  <Layout>
    <h1>404: Not Found</h1>
    <p>Oops! The page you were looking for has been removed or does not exist.</p>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
