import React from "react"
import LayoutProduct from "../../components/layoutProduct"

import dataProduct from "../../content/products.json"

const brakes = () => (
  <LayoutProduct
    title="Тормоза HEID ANTRIEBSTECHNIK"
    array={dataProduct.heid.brakes}
  />
)

export default brakes
