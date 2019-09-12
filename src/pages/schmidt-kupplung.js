import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import TypeProduct from "../components/TypeProduct/typeProduct"
import dataCopany from "../content/companies.json"

const schmidtPage = () => {
  const products = dataCopany[1].pages.map((elems, index) => (
    <TypeProduct
      img={elems.img}
      text={elems.text}
      link={elems.link}
      key={elems.text + index}
    />
  ))

  return (
    <Layout textTitle="SCHMIDT-KUPPLUNG GmbH - известный во всем мире производитель высококачественных систем сцепления">
      <SEO title="SCHMIDT-KUPPLUNG GmbH - известный во всем мире производитель высококачественных систем сцепления" />
      <div className="main-products">{products}</div>
    </Layout>
  )
}

export default schmidtPage
