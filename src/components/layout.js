import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import "./layout.css"

const Layout = ({ children }) => (
  <>
    <main>{children}</main>
    <footer className="section has-background-white-bis py-4">
      <div className="container">
        <nav className="level">
          <div className="level-left">
            <div className="level-item">
              <div className="content has-text-centered">
                Wikini is built with <span className="has-text-danger">❤</span> in Hamburg by <a
                href="http://florianweinaug.de">Florian Weinaug</a>
              </div>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <div className="buttons is-right is-uppercase are-small">
                <Link to="/releases" className="button is-outlined">Release notes</Link>
                <Link to="/about" className="button is-outlined">About</Link>
                <a href="https://github.com/fweinaug/wikini" target="_blank" title="GitHub"
                   className="button is-ghost is-normal has-text-black">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
