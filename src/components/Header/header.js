import { Link } from "gatsby"
import React from "react"
import headerStyles from "./header.module.css"
import Image from "../image"
import NavElement from "./NavElement/navElement"

import dataCopany from "../../content/companies.json"

const Header = () => {
  const menu = dataCopany.map((elems, index) => (
    <NavElement
      name={elems.name}
      link={elems.link}
      dropdown={elems.pages}
      key={elems.desc + index}
    />
  ))

  return (
    <header>
      <div className={headerStyles.navbarContainer}>
        <Link to="/" className={headerStyles.navbarLogoContainer}>
          <Image src="logo_wamex54.png" />
          <p>
            <strong>WAMEX</strong>
            <br />
            партнер WAMEX
          </p>
        </Link>
        <div className={headerStyles.navbarMenu}>{menu}</div>
        <div className={headerStyles.navbarPhones}>
          8 (044) 463-46-38 <br />8 (025) 922-58-21
        </div>
      </div>
    </header>
  )
}

export default Header
