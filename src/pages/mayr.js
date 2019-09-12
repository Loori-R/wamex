import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import TypeProduct from "../components/TypeProduct/typeProduct"
import dataCopany from "../content/companies.json"

const MayrPage = () => {
  const products = dataCopany[0].pages.map((elems, index) => (
    <TypeProduct
      img={elems.img}
      text={elems.text}
      link={elems.link}
      key={elems.text + index}
    />
  ))

  return (
    <Layout textTitle="MAYR ANTRIEBSTECHNIK - мировой лидер в разработке и производстве предохранительных муфт и тормозов">
      <SEO title="MAYR ANTRIEBSTECHNIK - мировой лидер в разработке и производстве предохранительных муфт и тормозов" />
      <div className="main-products">{products}</div>
    </Layout>
  )
}

export default MayrPage
