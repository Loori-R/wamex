import React from "react"
import LayoutProduct from "../../components/layoutProduct"

import dataProduct from "../../content/products.json"

const safetyBrakes = () => (
  <LayoutProduct
    title="Предохранительные тормоза MAYR"
    array={dataProduct.mayr.safetyBrakes}
  />
)

export default safetyBrakes
