import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <footer className="section has-background-white-bis"
              style={{paddingTop: '1.5rem', paddingBottom: '1.5rem'}}>
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
                  <Link to="/donate" className="button is-outlined">Donate</Link>
                  <Link to="/changelog" className="button is-outlined">Release notes</Link>
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
