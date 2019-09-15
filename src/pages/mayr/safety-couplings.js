import React from "react"
import LayoutProduct from "../../components/layoutProduct"

import dataProduct from "../../content/products.json"

const safetyCouplings = () => (
  <LayoutProduct
    title="Предохранительные муфты MAYR"
    array={dataProduct.mayr.safetyCouplings}
  />
)

export default safetyCouplings
