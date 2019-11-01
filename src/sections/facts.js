import React from "react"
import {
  faHandHoldingHeart,
  faLanguage,
  faLightbulb,
  faPalette,
} from "@fortawesome/free-solid-svg-icons"

import Fact from "../components/fact"
import Headline from "../components/headline"

const Facts = () => {
  return <section className="section has-background-white-ter" style={{marginTop: '5rem'}}>
    <div className="container">
      <Headline title="Wait! There's more"
                subtitle="If you are still not convinced, see what else Wikini has to offer." />
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <Fact title="Modern design" icon={faPalette}
                description="Wikini follows the Fluent Design guidelines and makes heavy use of acrylic material and
                             shadows. It just looks beautiful and modern!" />
        </div>
        <div className="tile is-parent">
          <Fact title="Multilingual" icon={faLanguage} iconSquare={true}
                description="Wikini supports all Wikipedia languages and is available in numerous languages. Contact us
                             if you want to help add or improve your language." />
        </div>
        <div className="tile is-parent">
          <Fact title="Regular updates" icon={faLightbulb}
                description="Watch out for regular new features and improvements! Your Feedback is much appreciated and
                             taken into account for future updates." />
        </div>
        <div className="tile is-parent">
          <Fact title="Free, no ads" icon={faHandHoldingHeart} iconSquare={true}
                description="You can download Wikini for free from the Microsoft Store. It does not contain any in-app
                             purchases and will not bother you with ads. Ever." />
        </div>
      </div>
    </div>
  </section>
}

export default Facts
