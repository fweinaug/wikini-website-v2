import React  from "react"
import { graphql, useStaticQuery } from "gatsby"

import Release from "../components/release"

const Changelog = () => {
  const data = useStaticQuery(graphql`
    query {
      allVersions {
        nodes {
          VersionNumber
          ReleaseDate
        }
      }
      allChangelog {
        nodes {
          _0
          _1
          _2
          _3
          _4
          _5
          _6
          _7
          _8
          _9
        }
      }
    }
  `)

  const versions = data.allVersions.nodes;
  const changelogs = data.allChangelog.nodes;

  return (
    <section className="section">
      <div className="container">
        {versions.map((version, index) => {
          const changes = Object.values(changelogs[index]).filter(Boolean);

          console.log(changes);

          return <Release key={index} version={version.VersionNumber} date={version.ReleaseDate} changes={changes} />
        })}
      </div>
    </section>
  )
}

export default Changelog
