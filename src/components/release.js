import React from "react"

const Release = (props) => (
  <div className="notification">
    <div className="content">
      <h3 className="title has-text-primary has-text-weight-bold">
        Version {props.version}
      </h3>
      <p className="subtitle has-text-grey has-text-weight-medium is-6">
        Released: {props.date}
      </p>
      <dl className="has-text-weight-light">
        {props.changes.map((change, index) => (
          <li key={index}>{change}</li>
        ))}
      </dl>
    </div>
  </div>
)

export default Release
