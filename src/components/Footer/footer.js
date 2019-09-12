import PropTypes from "prop-types"
import React from "react"
import FooterStyles from "./footer.module.css"

const Footer = () => (
  <footer>
    <hr className={FooterStyles.footerTopHr} />
    <div className={FooterStyles.footerMain}>
      <div>
        <h2>Партер</h2>
        WAMEX Sp. z o.o.
        <br />
        <a href="https://wamex.com.pl/" target="__blank">
          www.wamex.com.pl
        </a>
        <br />
        <a href="mailto:wamex@wamex.com.pl" target="__blank">
          wamex@wamex.com.pl
        </a>
      </div>
      <div>
        <h2>Адресс</h2>
        633011, Россия
        <br />
        Новосибирская область, г.Бердск
        <br />
        микрорайон Северный, дом 20
      </div>
      <div>
        <h2>Контакты</h2>
        8 (913) 463-46-38
        <br />
        8 (952) 922-58-21
        <br />
        <a href="mailto:wamex@wamex.com.pl" target="__blank">
          wamex@wamex.com.pl
        </a>
      </div>
    </div>
    <hr className={FooterStyles.footerBotHr} />
    <div className={FooterStyles.footerInfo}>
      <span>© 2019 WAMEX</span>
      <span>
        <a href="https://github.com/Loori-R" target="__blank">
          Made by Molodov
        </a>
      </span>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
