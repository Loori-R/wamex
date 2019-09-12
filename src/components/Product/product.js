import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import productStyles from "./product.module.css"
import companyDescStyles from "../CompanyDesc/companyDesc.module.css"
import Image from "../image"

const Product = ({ name, img, text, link }) => (
  <div className={productStyles.productContainer}>
    <h2>{name}</h2>
    <div className={productStyles.productImage}>
      <Image src={img} />
    </div>
    <p>{text}</p>
    <Link to={link} className={companyDescStyles.companyDescriptionLink}>
      Каталог{" "}
      <span className={companyDescStyles.companyDescriptionLinkArrow}>→</span>
    </Link>
  </div>
)

Product.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
}

Product.defaultProps = {
  name: " ",
  img: "default.jpg",
  text: " ",
  link: "#",
}

export default Product
