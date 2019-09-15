import React from "react"
import LayoutProduct from "../../components/layoutProduct"

import dataProduct from "../../content/products.json"

const electromagneticClutchesBrakes = () => (
  <LayoutProduct
    title="Электромагнитные муфты и тормоза MAYR"
    array={dataProduct.mayr.electromagneticClutchesBrakes}
  />
)

export default electromagneticClutchesBrakes
