import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.css"
import Image from "./logo"
import NavElement from "./NavElement/navElement"

const test = [
  { link: "/", text: "Предохранительные муфты" },
  { link: "/", text: "Предохранительные тормоза" },
  { link: "/", text: "Приводы постоянного тока" },
  { link: "/", text: "Соединительные муфты" },
  { link: "/", text: "Электромагнитные муфты и тормоза" },
]

const Header = ({ siteTitle }) => (
  <header>
    <div className={headerStyles.navbarContainer}>
      <Link to="/" className={headerStyles.navbarLogoContainer}>
        <Image />
        <p>
          <strong>WAMEX</strong>
          <br />
          партнер WAMEX Sp. z o.o.
        </p>
      </Link>
      <div className={headerStyles.navbarMenu}>
        <NavElement name="Mayr" link="/" dropdown={test} />
        <NavElement name="Schmidt-Kupplung" link="/" dropdown={test} />
        <NavElement name="Heid Antriebstechnik" link="/" dropdown={test} />
        <NavElement name="Статьи" link="/" />
        <NavElement name="Новости" link="/" />
      </div>
      <div className={headerStyles.navbarPhones}>
        8 (044) 463-46-38 <br />8 (025) 922-58-21
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
