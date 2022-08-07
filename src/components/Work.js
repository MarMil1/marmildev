import React from 'react'
import '../styles/work.css'

export const Work = () => {
  return (
    <section id="work" className="work section is-large is-white has-text-centered has-border-top">
      <div className="container is-narrow">
        <div className="work-title">
          Companies I have worked with
        </div>
        <div className="work-grid">
          <div className="columns is-multiline is-mobile">
            <div className="column is-half-mobile is-one-quarter-tablet">
              <figure className="image is-2by1">
                <img className="work-logo" src={require("../assets/sphere.svg").default} alt="Sphere Partners Inc"/>
              </figure>
            </div>
            <div className="column is-half-mobile is-one-quarter-tablet">
              <figure className="image is-2by1">
                <img className="work-logo" src={require("../assets/proseeder.svg").default} alt="Proseeeder Technologies"/>
              </figure>
            </div>
            <div className="column is-half-mobile is-one-quarter-tablet">
              <figure className="image is-2by1">
                <img className="work-logo" src={require("../assets/amh.svg").default} alt="American Hotel Register"/>
              </figure>
            </div>
            <div className="column is-half-mobile is-one-quarter-tablet">
              <figure className="image is-2by1">
                <img className="work-logo" src={require("../assets/rnd.svg").default} alt="RND4Impact"/>
              </figure>
            </div>
          </div>

        </div>
      </div>
    
    </section>
  )
}
