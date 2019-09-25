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
            <strong>WAMEX - Беларусь</strong>
            <br />
            партнер WAMEX Sp. z o.o.
          </p>
        </Link>
        <div className={headerStyles.navbarMenu}>{menu}</div>
        <div className={headerStyles.navbarPhones}>
          <a href="tel:+375296502036">Тел.: 8 (029) 650-20-36</a>
          <br /> Факс: 8 (0232) 21-33-99
        </div>
      </div>
    </header>
  )
}

export default Header
