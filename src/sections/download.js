import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWindows } from "@fortawesome/free-brands-svg-icons"

import Headline from "../components/headline"
import DownloadImage from "./download-image"

const Download = (props) => {
  return <section ref={props.scrollToDownloadRef} className="section" style={{marginTop: '3rem'}}>
    <Headline title="Get Wikini now" />
    <div className="container" style={{marginTop: '3rem'}}>
      <div className="columns">
        <div className="column is-two-thirds">
          <div className="content is-medium">
            <p>
              A better and powerful Wikipedia experience is just a click away.
              <br />
              Get Wikini for Wikipedia on Windows 10 today.
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
          <div className="content">
            <p className="is-marginless has-text-weight-semibold">Download:</p>
            <a className="button is-link is-medium"
               href="https://www.microsoft.com/store/apps/9nkvw50h59sl" target="_blank"
               title="Download Wikini for your Windows 10 device, today.">
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
}

export default Download
