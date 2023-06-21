import React, { useEffect } from "react";
import { Link } from "react-scroll";
import "../styles/hero.css";

export const Hero = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const heroContainer = document.getElementById("hero");
      const heroScrollTop = window.scrollY;
      const heroContainerHeight = heroContainer.offsetHeight;
      const scrolledOpacity =
        (heroContainerHeight - heroScrollTop) / heroContainerHeight;
      if (window.scrollY > 0) {
        heroContainer.style.opacity = `${scrolledOpacity}`;
      }
    });
  });

  return (
    <section id="hero" className="hero is-transparent has-text-centered">
      <div id="hero-body" className="hero-body">
        <div className="hero-main-title">Marko Milosavljevic</div>
        <div className="hero-main-body">
          Full Stack Software Developer based in Chicago, Illinois.
        </div>
        <Link
          className="contact-btn"
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
        >
          Let's Chat <i className="fa-solid fa-arrow-right fa-lg"></i>
        </Link>
      </div>
      <Link
        className="active"
        to="about"
        spy={true}
        smooth={true}
        duration={500}
      >
        <i
          id="arrow-to-content"
          className="fa fa-2x fa-angle-down arrow-to-content"
        ></i>
      </Link>
    </section>
  );
};
