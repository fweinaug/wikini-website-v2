/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <main>{children}</main>
      <footer className="section has-background-white-bis"
              style={{marginTop: '5rem', paddingTop: '1.5rem', paddingBottom: '1.5rem'}}>
        <div className="container">
          <nav className="level">
            <div className="level-left">
              <div className="level-item">
                <div className="content">
                  Wikini is built with <span className="has-text-danger">❤</span> in Hamburg by <a
                  href="http://florianweinaug.de">Florian Weinaug</a>
                </div>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <div className="buttons is-right is-uppercase are-small">
                  <a className="button is-outlined">Donate</a>
                  <a className="button is-outlined">Release notes</a>
                  <a className="button is-outlined">Imprint</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
