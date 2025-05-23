/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import "../styles/layout.css"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    const [ParticlesComponent, setParticlesComponent] = React.useState(null);

    React.useEffect(() => {
        if (typeof window !== "undefined") {
            import("./particles/ParticlesBackground.jsx").then((mod) => {
                setParticlesComponent(() => mod.default);
            });
        }
    }, []);

    return (
    <>
      {ParticlesComponent && <ParticlesComponent />}
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
