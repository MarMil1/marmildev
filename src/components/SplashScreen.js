import React from 'react'
import '../styles/splashScreen.css'

export const SplashScreen = () => {
  return (
    <section 
            id="splash" 
            className="splash is-fullscreen"
    >
        <div>
            <svg 
                className="logo-svg-container splash-logo" 
                height="70px" 
                width="70px" 
                viewBox="0 0 300 300" 
                preserveAspectRatio="xMidYMid meet"
            >
                <path 
                      className="logo-letter-one splash-letter-one" 
                      d="M10 -10 L10 100 c 0,0 0,1 1,0 L120 0 c 0,0 1,1 0,0 L230 100 c 1,0 0,1 0,0 L230 -10" 
                />
                <path 
                      className="logo-letter-two splash-letter-two" 
                      d="M10 -10 L10 100 c 0,0 0,1 1,0 L120 0 c 0,0 1,1 0,0 L230 100 c 1,0 0,1 0,0 L230 -10" 
                />
                <line 
                      className="logo-line"
                      x1="95" 
                      y1="180" 
                      x2="265" 
                      y2="180" 
                />
            </svg>
        </div>
    </section>
  )
}
