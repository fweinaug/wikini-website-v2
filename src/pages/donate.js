import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaypal } from "@fortawesome/free-brands-svg-icons"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DonatePage = () => (
  <Layout>
    <SEO title="Donate" />
    <section className="hero is-primary is-bold is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered is-desktop">
            <div className="column is-half-desktop is-two-thirds-fullhd">
              <h1 className="title">
                Support Wikini
              </h1>
              <h2 className="subtitle">
                When I started the project more than two years ago, I consciously decided to offer the app for free and without any ads.
                This will never change, even though a lot of work goes into the development of Wikini for Wikipedia.
                To keep developing Wikini in the future, adding new features, and improving existing ones, a small tip from you would be very much appreciated!
              </h2>
            </div>
            <div className="column has-text-centered">
              <a className="button is-link is-medium is-rounded"
                 href="https://www.paypal.me/FlorianWeinaug/10" target="_blank" rel="noopener noreferrer">
                <span className="icon is-small">
                  <FontAwesomeIcon icon={faPaypal} />
                </span>
                <span>PayPal</span>
              </a>
            </div>
          </div>
          <Link to="/" className="button is-primary is-light is-small">
            <span className="icon is-small">
              <FontAwesomeIcon icon={faArrowLeft} />
            </span>
            <span>Go back</span>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default DonatePage
