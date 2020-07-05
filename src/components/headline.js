import React from "react"
import PropTypes from "prop-types"

const Headline = ({ title, subtitle }) => (
  <div className="content has-text-centered is-medium">
    <h1 className="is-uppercase has-text-weight-bold">{title}</h1>
    <p>{subtitle}</p>
  </div>
)

Headline.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

export default Headline
