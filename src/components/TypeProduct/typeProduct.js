import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import typeProductStyles from "./typeProduct.module.css"
import Image from "../image"

const typeProduct = ({ img, text, link }) => (
  <div className={typeProductStyles.typeProductContainer}>
    <div className={typeProductStyles.typeProductImage}>
      <Image src={img} />
    </div>
    <Link to={link}>{text}</Link>
  </div>
)

typeProduct.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
}

typeProduct.defaultProps = {
  img: "default.jpg",
  text: " ",
  link: "#",
}

export default typeProduct
