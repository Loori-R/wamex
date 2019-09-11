import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/header"
import TopTitle from "./TopTitle/topTitle"
import Footer from "./Footer/footer"
import "./layout.css"

const topTitleText =
  "MAYR ANTRIEBSTECHNIK - мировой лидер в разработке и производстве предохранительных муфт и тормозов"

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

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <TopTitle title={topTitleText} />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
