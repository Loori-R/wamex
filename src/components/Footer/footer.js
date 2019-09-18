import PropTypes from "prop-types"
import React from "react"
import FooterStyles from "./footer.module.css"

const Footer = () => (
  <footer>
    <hr className={FooterStyles.footerTopHr} />
    <div className={FooterStyles.footerMain}>
      <div>
        <h2>Партнер</h2>
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
        ООО "ИнсталИнвест"
        <br />
        Республика Беларусь
        <br />
        г. Гомель, ул. Ярославская д.19-2/1-08
      </div>
      <div>
        <h2>Контакты</h2>
        Тел.: 8 (029) 650-20-36
        <br />
        Факс: 8 (0232) 21-33-99
        <br />
        <a href="mailto:stanprom@mail.ru" target="__blank">
          stanprom@mail.ru
        </a>
      </div>
    </div>
    <hr className={FooterStyles.footerBotHr} />
    <div className={FooterStyles.footerInfo}>
      <span>© 2019 WAMEX.BY</span>
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
