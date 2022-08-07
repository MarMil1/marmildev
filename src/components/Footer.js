import React from 'react'
import '../styles/footer.css'
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <footer className="footer has-background-info">
        <div className="content has-text-centered has-text-white has-text-weight-light">
          <div className="footer-logo">
            <figure>
              <Link
                activeClass=""
                to="navbar"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
              >
                <svg className="logo-svg-container-footer" height="300px" width="300px">
                    <path className="logo-letter-one footer-logo" d="M10 0 L10 100 L120 0 L230 100 L230 0" />
                    <path className="logo-letter-two footer-logo" d="M10 0 L10 100 L120 0 L230 100 L230 0" />
                    <line className="logo-line footer-logo" x1="80" y1="180" x2="280" y2="180" />
                </svg>
              </Link>
            </figure>
          </div>
          <div className="columns is-multiline is-mobile">
            <div className="column is-half-mobile is-one-quarter-tablet">
              <Link
                  className="footer-nav"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {500}
              >
                  About
              </Link>
            </div>
            <div className="column is-half-mobile is-one-quarter-tablet">
              <Link 
                  className="footer-nav"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {500}
              >
                  Projects
              </Link>
            </div>
            <div className="column is-half-mobile is-one-quarter-tablet">
              <Link 
                  className="footer-nav"
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {500}
              >
                  Work
              </Link>
            </div>
            <div className="column is-half-mobile is-one-quarter-tablet">
              <Link 
                  className="footer-nav"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {500}
              >
                  Contact
              </Link>
            </div>
          </div>
          <hr/>
          <div className="columns footer-navigation is-multiline is-mobile">
            <div className="column footer-github">
              <a href="https://github.com/MarMil1" target="blank">
                <i className="fa-brands fa-github fa-2x"></i>
              </a>
            </div>
            <div className="column footer-github">
              <a href="https://linkedin.com/in/marko-milosavljevic" target="blank">
                <i className="fa-brands fa-linkedin fa-2x"></i>
              </a>
            </div>
            <div className="column footer-github">
              <a href="https://codepen.io/marmil1" target="blank">
                <i className="fa-brands fa-codepen fa-2x"></i>
              </a>
            </div>
          </div>
            
            <p>
                Created by Marko Milosavljevic &copy; 2022
            </p>
        </div>
    </footer>
  )
}
