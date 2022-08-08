import React from 'react'
import '../styles/repository.css'

export const Repository = () => {
  return (
    <section id="repository" className="repository is-medium is-white">
        <div className="container-one">
          
        </div>
        <div className="container-two">
            <div className="container-two-title">
                Behind the Scene
            </div>
            <div className="container-two-subtitle">
                Would you like to learn how this website was made?
            </div>
            <div className="container-three-button">
                <button className="button is-info is-rounded c-three-button">
                    <a href="https://github.com/MarMil1/portfolioSite/tree/main" target="blank">
                        Let's Go!
                    </a>
                </button>
            </div>
        </div>
    </section>
  )
}
