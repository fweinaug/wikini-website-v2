import React from "react"

const Headline = ({ title, subtitle }) => (
  <div className="content has-text-centered is-medium">
    <h1 className="is-uppercase has-text-weight-bold">{title}</h1>
    <p>{subtitle}</p>
  </div>
)

export default Headline
