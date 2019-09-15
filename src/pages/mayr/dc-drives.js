import React from "react"
import LayoutProduct from "../../components/layoutProduct"

import dataProduct from "../../content/products.json"

const dcDrives = () => (
  <LayoutProduct
    title="Приводы постоянного тока MAYR"
    array={dataProduct.mayr.dcDrives}
  />
)

export default dcDrives
