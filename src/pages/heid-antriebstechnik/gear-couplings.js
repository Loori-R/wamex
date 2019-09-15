import React from "react"
import LayoutProduct from "../../components/layoutProduct"

import dataProduct from "../../content/products.json"

const gearCouplings = () => (
  <LayoutProduct
    title="Зубчатые муфты HEID ANTRIEBSTECHNIK"
    array={dataProduct.heid.gearCouplings}
  />
)

export default gearCouplings
