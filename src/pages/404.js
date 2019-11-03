import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="hero is-primary is-bold is-fullheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Not found</h1>
          <p className="subtitle">This page does not exist anymore. Sorry!</p>
          <Link to="/" className="button is-primary is-light is-small">Home</Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
