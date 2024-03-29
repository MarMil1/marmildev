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
        <div
          className="main-subheading work-subheading"
          style={{ display: "flex" }}
        >
          <i className="fa-solid fa-ellipsis-vertical"></i>
          <div>COMPANIES I'VE PARTNERED WITH</div>
        </div>
        <div className="work-header-content">
        These esteemed companies have placed their trust in me to bring their 
        projects to life. I genuinely appreciate the opportunity to work with 
        each one of them. Curious to learn more about these collaborations and 
        the impactful projects we've undertaken? Let's dive deeper into the details.
        </div>
        <div className="work-header-contact-btn">
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
