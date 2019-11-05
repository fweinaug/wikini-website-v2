import React from "react"
import Typed from 'react-typed';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons"

import HeroImage from "./hero-image"

const Hero = (props) => {
  return <section className="hero is-primary is-bold is-fullheight">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column">
            <div className="content is-large">
              <h1 className="title has-text-weight-bold">
                Wikini <span className="is-size-2 has-text-weight-light">for </span> <span
                className="is-size-2 has-text-weight-semibold">Wikipedia,</span>
              </h1>
              <p className="subtitle has-text-warning">
                an intuitive and powerful Wikipedia experience built for
                <br />
              <Typed
                strings={[
                  'those who want to look something up.',
                  'those who want to learn something new.',
                  'those who want to go down the rabbit hole.',
                  'those who always want to be right.',
                  'all your Windows 10 devices.'
                ]}
                startDelay={350}
                typeSpeed={50}
                backSpeed={25}>
              </Typed>
              </p>
            </div>
            <button className="button is-primary is-large is-inverted is-rounded" onClick={props.scrollToDownload}>
              <span>Get it now!</span>
              <span className="icon is-small">
                <FontAwesomeIcon icon={faChevronCircleRight} />
              </span>
            </button>
          </div>
          <div className="column">
            <HeroImage />
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default Hero
