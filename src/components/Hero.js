import React from 'react'
import '../styles/hero.css'

export const Hero = () => {
  return (
    <section id="hero" className="hero is-transparent is-fullheight">
        <div className="hero-body">
            <div className="container">
                <p className="title">
                    Hello!
                </p>
                <p className="title title-two">
                    I'm Marko!
                </p>
                {/* <div>
                    <svg height="300px" width="300px">
                        <path className="logo-letter-one" d="M10 0 L10 100 L120 0 L230 100 L230 0" />
                        <path className="logo-letter-two" d="M10 0 L10 100 L120 0 L230 100 L230 0" />
                        <line className="logo-line" x1="80" y1="180" x2="280" y2="180" />
                    </svg>
                </div> */}
            </div>
        </div>
    </section>
  )
}
