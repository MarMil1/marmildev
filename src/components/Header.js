import React, { useEffect } from "react";
import "../styles/header.css";
import { Link } from "react-scroll";
import { ToggleTheme } from "./ToggleTheme";
import useAnalyticsEventTracker from "./useAnalyticsEventTracker";

export const Header = () => {
  const gaEventTracker = useAnalyticsEventTracker("Header");
  // const [click, setClick] = useState(false);
  // const isClicked = () => setClick(!click);

  useEffect(() => {
    /* This is a function that is being called on the navbar burger icon. It is using the
    `querySelectorAll` method to select all elements with the class `navbar-burger`. It then uses
    the `forEach` method to iterate over each element and add an event listener to each one. The
    event listener is a click event that toggles the class `is-active` on the element and the
    element with the id of `target`. */
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });

    const goToTopBtn = document.getElementById("go-to-top-btn");
    window.addEventListener("scroll", () => {
      if (window.scrollY < 300) {
        goToTopBtn.classList.add("go-to-top-btn-hidden");
        goToTopBtn.style.visibility = "visible";
      } else {
        goToTopBtn.classList.remove("go-to-top-btn-hidden");
      }
    });
  });

  return (
    <header>
      <nav
        id="navbar"
        className="navbar is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <ToggleTheme />
          {/* <svg
              className={
                click
                  ? "logo-svg-container rotate-whole-logo"
                  : "logo-svg-container"
              }
              height="70px"
              width="70px"
              viewBox="0 0 300 300"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                className="logo-letter-one"
                d="M10 -10 L10 100 c 0,0 0,1 1,0 L120 0 c 0,0 1,1 0,0 L230 100 c 1,0 0,1 0,0 L230 -10"
              />
              <path
                className="logo-letter-two"
                d="M10 -10 L10 100 c 0,0 0,1 1,0 L120 0 c 0,0 1,1 0,0 L230 100 c 1,0 0,1 0,0 L230 -10"
              />
              <line
                className={click ? "logo-line logo-line-shake" : "logo-line"}
                x1="95"
                y1="180"
                x2="265"
                y2="180"
              />
            </svg> */}
          {/* </Link> */}
          <button
            className="navbar-burger"
            data-target="navMenu"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div
          className="navbar-menu is-shadowless has-text-centered"
          id="navMenu"
        >
          <div className="navbar-end">
            <div className="navbar-item">
              <Link
                className="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => gaEventTracker("about")}
              >
                About
              </Link>
            </div>
            <div className="navbar-item">
              <Link
                className="active"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => gaEventTracker("projects")}
              >
                Projects
              </Link>
            </div>
            <div className="navbar-item">
              <Link
                className="active"
                to="work"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => gaEventTracker("work")}
              >
                Work
              </Link>
            </div>
            <div className="navbar-item">
              <Link
                className="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => gaEventTracker("contact")}
              >
                Contact
              </Link>
            </div>
            <div className="navbar-item">
              <a
                className="active relative-pos"
                href="https://sandglass.fly.dev"
                target="_blank"
                rel="noreferrer"
                onClick={() => gaEventTracker("blog")}
              >
                Blog
                <span className="nav-external-link-icon">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <Link to="navbar" spy={true} smooth={true} offset={-70} duration={500}>
        <div id="go-to-top-btn" className="go-to-top-btn">
          <i className="fa fa-2x fa-angle-up"></i>
        </div>
      </Link>
    </header>
  );
};
