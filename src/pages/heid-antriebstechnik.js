import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import TypeProduct from "../components/TypeProduct/typeProduct"
import dataCopany from "../content/companies.json"

const heidPage = () => {
  const products = dataCopany[2].pages.map((elems, index) => (
    <TypeProduct
      img={elems.img}
      text={elems.text}
      link={elems.link}
      key={elems.text + index}
    />
  ))

  return (
    <Layout textTitle="HEID ANTRIEBSTECHNIK - производитель многодисковых и зубчатых электромагнитных муфт и тормозов">
      <SEO title="HEID ANTRIEBSTECHNIK - производитель многодисковых и зубчатых электромагнитных муфт и тормозов" />
      <div className="main-products">{products}</div>
    </Layout>
  )
}

export default heidPage
