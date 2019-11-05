import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Changelog from "../sections/changelog"

const ReleasesPage = () => (
  <Layout>
    <SEO title="Releases" />
    <section className="hero is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Releases
          </h1>
          <h2 className="subtitle">
            Have a look at how much Wikini has improved over the years.
          </h2>
          <Link to="/" className="button is-primary is-light is-small">
            <span className="icon is-small">
              <FontAwesomeIcon icon={faArrowLeft} />
            </span>
            <span>Go back</span>
          </Link>
        </div>
      </div>
    </section>
    <Changelog />
  </Layout>
)

export default ReleasesPage
