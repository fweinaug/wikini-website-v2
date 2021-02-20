import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Feature from "../components/feature"
import Headline from "../components/headline"

const Features = () => {
  // get all images in features folder
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {
        extension: {eq:"png"}
        relativeDirectory: {eq: "features"}
      }) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
                aspectRatio
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  // map all images by name, so we can use <Feature image={images.name} />
  const images = {};
  data.allFile.edges.forEach(edge => images[edge.node.name] = edge.node);

  return (
    <section className="section" style={{marginTop: '2rem'}}>
      <div className="container">
        <Headline title="Awesome features"
                  subtitle="Wikini has so many great features it's hard to keep track. Which one do you like most?" />
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <Feature title="Light / Dark design" image={images.dark}
                     description="You can choose between a light and dark design for the app and article. Or you can
                                  let the design depend on your current Windows setting. No matter if you are team light
                                  or dark, everything looks great!" />
          </div>
          <div className="tile is-parent">
            <Feature title="Live search" image={images.search}
                     description="Immediately while you are typing a list of the first found articles is displayed  to
                                  you. For a better overview a short description and a picture are displayed in addition
                                  to the title." />
          </div>
          <div className="tile is-parent">
            <Feature title="Read articles to you" image={images.voice}
                     description="Wikini has a built-in voice function that can read every article to you. Split up
                                  into sections, automatically one by one. The reading speed and the voice can be adjusted
                                  to your liking." />
          </div>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <Feature title="Picture browser"
                         description="Flip through all pictures in the current article and read their description.
                                      If you would like to keep a picture, just download it to your device." />
                <Feature title="Favorite articles"
                         description="Create a collection of your favorite articles and access them whenever you need." />
              </div>
              <div className="tile is-parent">
                <Feature title="Beautiful start" image={images.home}
                         description="The home page is your starting point into Wikipedia. Search for an article, access
                                      your favorites and history or get lost by opening a random article. The great
                                      content of Wikipedia at your fingertips, underlaid with a beautiful picture of the
                                      day." />
              </div>
            </div>
            <div className="tile is-parent">
              <Feature title="Windows integration">
                <p className="subtitle">Pin articles to your <i>Start menu</i> for easy access.</p>
                <p className="subtitle">All your visited articles are shown in the <i>Timeline</i> and help you keep
                  track. If you don't want this you can disable the feature in the settings.</p>
              </Feature>
            </div>
          </div>
          <div className="tile is-parent">
            <Feature title="Articles on steroids"
                     description="The article view has so many great features we can only list the highlights:">
              <div className="content">
                <ul className="has-text-weight-light">
                  <li>Search for any text in the article and cycle through the highlighted results.</li>
                  <li>The interactive table of contents provides overview and lets you jump to any section.</li>
                  <li>Customize the font size to make reading even easier.</li>
                  <li>Enter the full-screen mode to get even more space out of the screen.</li>
                  <li>Use the voice function to have the article read out to you.</li>
                  <li>Switch to any language in which the article is also available.</li>
                  <li>Share the article with other people or apps.</li>
                  <li>Click on a picture to open the picture browser and flip through all of the article's pictures and
                    their description.
                  </li>
                </ul>
              </div>
            </Feature>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
