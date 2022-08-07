import React from 'react'
import '../styles/about.css'

export const About = () => {
  return (
    <section id="about" className="about section is-large is-white has-text-centered">
        <div className="container is-narrow">
          <div className="work-title">
            About
          </div>
          <div className="columns is-multiline is-mobile is-centered">
            <div className="column is-three-fifths">
              <p className="subtitle is-size-5-desktop has-text-weight-normal">
                I'm a full stack software developer and I love what I do.
                Developing software is a passion of mine in which
                I strive to provide the best solutions for projects I work on.
              </p>
              
            </div>
          </div>
        </div>
    </section>
  )
}
