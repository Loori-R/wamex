import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import MenuLinksStyles from "./navElement.module.css"

const NavElement = ({ name, link, dropdown }) => {
  const [close, setStatus] = useState(true)

  const dropdownList = dropdown.map((elems, index) => (
    <li key={elems.text + elems.link + index}>
      <Link to={elems.link}>{elems.text}</Link>
    </li>
  ))

  return (
    <div className={MenuLinksStyles.navbarMenuContainerLink}>
      <Link
        to={link}
        onMouseEnter={() => setStatus(!close)}
        onMouseLeave={() => setStatus(!close)}
      >
        {name}
      </Link>

      {close ? "" : <ul style={{ position: "absolute" }}>{dropdownList}</ul>}
    </div>
  )
}

NavElement.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  dropdown: PropTypes.array,
}

NavElement.defaultProps = {
  name: "",
  link: "#",
  dropdown: [],
}

export default NavElement
