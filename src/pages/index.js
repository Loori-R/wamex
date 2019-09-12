import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/layout-overide.css"
import CompanyDesc from "../components/CompanyDesc/companyDesc"
import Slideshow from "../components/Slideshow/slideShow"

import dataCopany from "../content/companies.json"

const IndexPage = () => {
  const companies = dataCopany.map((elems, index) => (
    <div key={elems.desc + index}>
      <CompanyDesc
        logo={elems.logo}
        desc={elems.desc}
        site={elems.site}
        link={elems.link}
      />
    </div>
  ))

  return (
    <Layout textTitle={<Slideshow />}>
      <SEO title="WAMEX - Современная беззазорная приводная техника" />
      {companies}
    </Layout>
  )
}

export default IndexPage
