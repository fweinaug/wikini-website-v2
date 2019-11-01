import React from "react"

function Headline({ title, subtitle }) {
  return (
    <div className="content has-text-centered is-medium">
      <h1 className="is-uppercase has-text-weight-bold">{title}</h1>
      <p>{subtitle}</p>
    </div>
  )
}

export default Headline
