import React from "react"

const Release = ({ version, date, changes }) => (
  <div className="notification">
    <div className="content">
      <h3 className="title has-text-primary has-text-weight-bold">
        Version {version}
      </h3>
      <p className="subtitle has-text-grey has-text-weight-medium is-6">
        Released: {date}
      </p>
      <ul className="has-text-weight-light">
        {changes.map((change, index) => (
          <li key={index}>{change}</li>
        ))}
      </ul>
    </div>
  </div>
)

export default Release
