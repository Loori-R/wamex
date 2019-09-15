import React from "react"
import Layout from "./layout"
import SEO from "./seo"

import Product from "./Product/product"

const layoutProduct = ({ title, array }) => {
  const products = array.map((elems, index) => (
    <Product
      name={elems.name}
      img={elems.img}
      text={elems.text}
      link={elems.link}
      key={elems.link + index}
    />
  ))

  return (
    <Layout textTitle={title}>
      <SEO title={title} />
      <div className="main-products">{products}</div>
    </Layout>
  )
}

export default layoutProduct
