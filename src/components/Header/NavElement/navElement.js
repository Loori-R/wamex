import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import MenuLinksStyles from "./navElement.module.css"
import pause from "../../../utils/pause"

const NavElement = ({ name, link, dropdown }) => {
  const [status, setStatus] = useState(false)
  let count = 0

  const style = status ? MenuLinksStyles.open : MenuLinksStyles.close

  if (dropdown) {
    const dropdownList = dropdown.map((elems, index) => (
      <li key={elems.text + elems.link + index}>
        <Link to={elems.link}>{elems.text}</Link>
      </li>
    ))

    const openDropdown = async open => {
      if (open) {
        count = 1
        setStatus(true)
      } else {
        count = 0
        await pause(250)
        if (count === 0) {
          setStatus(false)
        }
      }
    }

    return (
      <div
        className={MenuLinksStyles.navbarMenuContainerLink}
        onMouseEnter={() => openDropdown(true)}
        onMouseLeave={() => openDropdown(false)}
      >
        <Link to={link}>{name}</Link>
        <ul className={MenuLinksStyles.navbarMenuDropdownlist + " " + style}>
          {dropdownList}
        </ul>
      </div>
    )
  }

  return (
    <div className={MenuLinksStyles.navbarMenuContainerLink}>
      <Link to={link}>{name}</Link>
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
}

export default NavElement
