import React from "react"
import LayoutProduct from "../../components/layoutProduct"

import dataProduct from "../../content/products.json"

const couplings = () => (
  <LayoutProduct
    title="Соединительные муфты MAYR"
    array={dataProduct.mayr.couplings}
  />
)

export default couplings
