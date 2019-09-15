import React from "react"
import LayoutProduct from "../../components/layoutProduct"

import dataProduct from "../../content/products.json"

const multidiscClutch = () => (
  <LayoutProduct
    title="Многодисковые муфты HEID ANTRIEBSTECHNIK"
    array={dataProduct.heid.multidiscClutch}
  />
)

export default multidiscClutch
