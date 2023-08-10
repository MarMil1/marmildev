import React from "react";
import "../styles/footer.css";
import { Link } from "react-scroll";
import Logo from "./Logo";

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
              <Logo />
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
