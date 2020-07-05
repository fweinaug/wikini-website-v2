import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const Feature = ({ title, description, image = null, children }) => {
  const hasImage = image !== null;

  return <article className={ hasImage ? 'tile is-child' : 'tile is-child notification' }>
    {hasImage &&
      <Img fluid={image.childImageSharp.fluid} className="box is-paddingless" style={{ marginBottom: '1rem' }} />
    }
    <p className={ hasImage ? 'title has-text-primary' : 'title' }>{title}</p>
    <p className="subtitle">{description}</p>
    {children}
  </article>
}

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.object,
  children: PropTypes.node,
}

export default Feature
