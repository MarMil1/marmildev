import React from "react";
import { Link } from "react-scroll";
import "../styles/work.css";

export const Work = () => {
  return (
    <section
      id="work"
      className="work section has-text-centered has-border-top"
    >
      <div className="work-header">
        <div className="main-subheading work-subheading">
          Companies I've worked with
        </div>
        <div className="work-header-content">
          Companies I genuinely appreciate for placing their trust in me with
          their projects. Interested in learning more?
        </div>
        <Link
          className="contact-btn button is-info is-rounded work-header-contact-btn"
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
        >
          Let's Chat
        </Link>
      </div>
      <div className="work-grid">
        <div className="columns is-multiline is-mobile">
          <div className="column is-half-mobile is-half-tablet is-one-quarter-desktop">
            <figure className="image is-2by1">
              <img
                className="work-logo"
                src={require("../assets/sphere.svg").default}
                alt="Sphere Partners Inc"
              />
            </figure>
          </div>
          <div className="column is-half-mobile is-half-tablet is-one-quarter-desktop">
            <figure className="image is-2by1">
              <img
                className="work-logo"
                src={require("../assets/proseeder.svg").default}
                alt="Proseeeder Technologies"
              />
            </figure>
          </div>
          <div className="column is-half-mobile is-half-tablet is-one-quarter-desktop">
            <figure className="image is-2by1">
              <img
                className="work-logo"
                src={require("../assets/amh.svg").default}
                alt="American Hotel Register"
              />
            </figure>
          </div>
          <div className="column is-half-mobile is-half-tablet is-one-quarter-desktop">
            <figure className="image is-2by1">
              <img
                className="work-logo"
                src={require("../assets/rnd.svg").default}
                alt="RND4Impact"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
