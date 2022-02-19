import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWindows } from "@fortawesome/free-brands-svg-icons"

import Headline from "../components/headline"
import DownloadImage from "./download-image"

const Download = ({ scrollToDownloadRef }) => (
  <section ref={scrollToDownloadRef} className="section mt-6">
    <Headline title="Get Wikini now" />
    <div className="container mt-6">
      <div className="columns">
        <div className="column is-two-thirds">
          <div className="content is-medium">
            <p className="has-text-weight-light">
              A better and powerful Wikipedia experience is just a click away.
              <br />
              Get <span className="has-text-weight-semibold has-text-primary">Wikini for Wikipedia</span> on Windows today.
            </p>
          </div>
          <div className="tags are-medium">
            <span className="tag">
              Free.
            </span>
            <span className="tag">
              No ads.
            </span>
            <span className="tag">
              Ever.
            </span>
          </div>
          <div className="content has-text-centered">
            <p className="is-marginless has-text-weight-semibold">Download:</p>
            <a className="button is-link is-medium"
               href="https://www.microsoft.com/store/apps/9nkvw50h59sl" target="_blank" rel="noopener noreferrer"
               title="Download Wikini for your Windows device, today.">
                <span className="icon is-small">
                  <FontAwesomeIcon icon={faWindows} />
                </span>
              <span>Microsoft Store</span>
            </a>
          </div>
        </div>
        <div className="column">
          <DownloadImage />
        </div>
      </div>
    </div>
  </section>
)

Download.propTypes = {
  scrollToDownloadRef: PropTypes.shape({ current: PropTypes.any }).isRequired,
}

export default Download
