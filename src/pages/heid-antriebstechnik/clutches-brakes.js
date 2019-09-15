import React from "react"
import LayoutProduct from "../../components/layoutProduct"

import dataProduct from "../../content/products.json"

const clutchesBrakes = () => (
  <LayoutProduct
    title="Муфты и тормоза HEID ANTRIEBSTECHNIK"
    array={dataProduct.heid.clutchesBrakes}
  />
)

export default clutchesBrakes
