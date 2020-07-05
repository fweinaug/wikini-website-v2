import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle, faSquare } from "@fortawesome/free-solid-svg-icons"

const Fact = ({ title, description, icon, iconSquare = false }) => (
  <article className="tile is-child box" style={{position:'relative', paddingBottom: '3.5rem'}}>
    <p className="title has-text-primary">{title}</p>
    <p className="subtitle has-text-weight-light">{description}</p>
    <div className="" style={{position: 'absolute', bottom: '15px', left: '50%', marginLeft: '-1.5rem'}}>
      <span className="icon is-large has-text-grey">
        <span className="fa-layers fa-fw fa-2x">
          <FontAwesomeIcon icon={iconSquare ? faSquare : faCircle} />
          <FontAwesomeIcon icon={icon} inverse transform={iconSquare ? 'shrink-8' : 'shrink-6'} />
        </span>
      </span>
    </div>
  </article>
)

Fact.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  iconSquare: PropTypes.bool,
}

export default Fact
