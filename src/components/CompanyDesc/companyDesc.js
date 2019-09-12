import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import Image from "../image"
import companyDescStyles from "./companyDesc.module.css"

const CompanyDesc = ({ logo, desc, site, link }) => {
  return (
    <div className={companyDescStyles.companyDescription}>
      <div className={companyDescStyles.companyDescriptionLogo}>
        <Image src={logo} />
      </div>

      <p>{desc}</p>

      <a
        href={site}
        className={companyDescStyles.companyDescriptionLink}
        target="__blank"
      >
        Сайт производителя{" "}
        <span className={companyDescStyles.companyDescriptionLinkArrow}>→</span>
      </a>

      <Link to={link} className={companyDescStyles.companyDescriptionLink}>
        Продукция{" "}
        <span className={companyDescStyles.companyDescriptionLinkArrow}>→</span>
      </Link>
    </div>
  )
}

CompanyDesc.propTypes = {
  logo: PropTypes.string,
  desc: PropTypes.string,
  site: PropTypes.string,
  link: PropTypes.string,
}

CompanyDesc.defaultProps = {
  logo: "",
  desc: "sorry, no info",
  site: "#",
  link: "#",
}

export default CompanyDesc
