import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Product from "../../components/Product/product"

import dataProduct from "../../content/products.json"
console.log(dataProduct.mayr.safetyCoupling)
const MayrPage = () => {
  const products = dataProduct.mayr.safetyCouplings.map((elems, index) => (
    <Product
      name={elems.name}
      img={elems.img}
      text={elems.text}
      link={elems.link}
      key={elems.link + index}
    />
  ))

  return (
    <Layout textTitle="Предохранительные муфты MAYR">
      <SEO title="Предохранительные муфты MAYR" />
      <div className="main-products">{products}</div>
    </Layout>
  )
}

export default MayrPage
