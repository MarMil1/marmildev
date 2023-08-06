import React from "react";
import "../styles/footer.css";
import { Link } from "react-scroll";

export const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-left">
        <div className="">
          <Link
            className="footer-nav"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
        </div>
        <div className="">
          <Link
            className="footer-nav"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
        </div>
        <div className="">
          <Link
            className="footer-nav"
            to="work"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Work
          </Link>
        </div>
        <div className="">
          <Link
            className="footer-nav"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </div>
        <div className="">
          <a
            className="footer-nav relative-position"
            href="https://sandglass.fly.dev"
            target="_blank"
            rel="noreferrer"
          >
            Blog
            <span className="footer-external-link-icon">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </span>
          </a>
        </div>
      </div>
      <div className="footer-center">
        <div className="footer-logo">
          <figure>
            <Link
              activeClass=""
              to="navbar"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <svg
                className="logo-svg-container-footer"
                height="70px"
                width="70px"
                viewBox="0 0 300 300"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  className="logo-letter-one footer-logo"
                  d="M10 -10 L10 100 c 0,0 0,1 1,0 L120 0 c 0,0 1,1 0,0 L230 100 c 1,0 0,1 0,0 L230 -10"
                />
                <path
                  className="logo-letter-two footer-logo"
                  d="M10 -10 L10 100 c 0,0 0,1 1,0 L120 0 c 0,0 1,1 0,0 L230 100 c 1,0 0,1 0,0 L230 -10"
                />
                <line
                  className="logo-line footer-logo"
                  x1="95"
                  y1="180"
                  x2="265"
                  y2="180"
                />
              </svg>
            </Link>
          </figure>
        </div>
      </div>
      <div className="footer-right">
        <p>MARKO MILOSAVLJEVIC &copy; {date}</p>
      </div>
    </footer>
  );
};
