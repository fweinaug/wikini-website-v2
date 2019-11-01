import React from "react"

import Layout from "../components/layout"
import Download from "../sections/download"
import Facts from "../sections/facts"
import Features from "../sections/features"
import Hero from "../sections/hero"
import "../components/styles.scss"

const IndexPage = () => {
  const downloadRef = React.createRef()
  const executeScrollToDownload = () => {
    window.scrollTo({ left: 0, top: downloadRef.current.offsetTop, behavior: 'smooth' })
  }

  return (
    <Layout>
      <Hero scrollToDownload={executeScrollToDownload} />
      <Features />
      <Facts />
      <Download scrollToDownloadRef={downloadRef} />
    </Layout>
  )
}

export default IndexPage
