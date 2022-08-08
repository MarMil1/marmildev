import React from 'react'
import '../styles/splashScreen.css'

export const SplashScreen = () => {
  return (
    <section id="splash" className="splash is-fullscreen">
        <div className="">
            <svg className="logo-svg-container splash-logo" height="70px" width="70px" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid meet">
                <path className="logo-letter-one splash-letter-one" d="M10 0 L10 100 L120 0 L230 100 L230 0" />
                <path className="logo-letter-two splash-letter-two" d="M10 0 L10 100 L120 0 L230 100 L230 0" />
                <line className="logo-line" x1="80" y1="180" x2="280" y2="180" />
            </svg>
        </div>
    </section>
  )
}
