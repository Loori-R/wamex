import PropTypes from "prop-types"
import React from "react"
import TopTitleStyles from "./topTitle.module.css"

const TopTitle = ({ title, children }) => {
  if (!children) {
    return (
      <div className={TopTitleStyles.topTitle}>
        <h1>{title}</h1>
      </div>
    )
  }
}

TopTitle.propTypes = {
  siteTitle: PropTypes.string,
}

TopTitle.defaultProps = {
  siteTitle: ``,
}

export default TopTitle
