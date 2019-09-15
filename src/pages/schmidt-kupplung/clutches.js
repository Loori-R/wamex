import React from "react"
import LayoutProduct from "../../components/layoutProduct"

import dataProduct from "../../content/products.json"

const clutches = () => (
  <LayoutProduct
    title="Муфты SCHMIDT-KUPPLUNG GmbH"
    array={dataProduct.schmidt.clutches}
  />
)

export default clutches
