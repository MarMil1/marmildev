import React from "react";
import "../styles/about.css";
import { otherToolsData } from "../data/otherToolsData";
import { mainToolsData } from "../data/mainToolsData";
import { Link } from "react-scroll";

export const About = () => {
  const end = new Date().getFullYear();
  const start = new Date(process.env.REACT_APP_ORIGIN_DATE).getFullYear();
  const originDate = end - start;

  return (
    <section id="about" className="about section has-text-centered">
      <div className="about-text">
        <div className="main-subheading">
          <i className="fa-solid fa-ellipsis-vertical"></i> HELLO! I'M MARKO.
        </div>
        <ul className="about-bio-content">
          <li>
            <span>• </span>
            As a software developer with over 2 years of experience, I am deeply
            passionate about creating exceptional solutions for the projects I
            work on.
          </li>{" "}
          <li>
            <span>• </span>I thrive on challenging tasks and continuously seek
            to expand my skill set by exploring new technologies. My expertise
            includes JavaScript, React, Redux, HTML, CSS, PostgreSQL, and more.
          </li>
          <li>
            <span>• </span>
            Feel free to explore my website, and don't hesitate to reach out if
            you'd like to connect and discuss your project.
          </li>
        </ul>
        <div className="connect-content">
          Ready to collaborate? Let's bring your ideas to life together!
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
      <div className="about-skills">
        <div className="main-subheading">
          <i className="fa-solid fa-ellipsis-vertical"></i> TECH & SKILLS
        </div>
        <div className="tech-stack">
          {mainToolsData.map((item, index) => (
            <div key={index} className="tech-stack-item tooltip">
              <span className="tooltiptext">{item.tooltip}</span>
              <i className={`${item.name} colored`}></i>
            </div>
          ))}
        </div>
        <div id="ts-gallery" className="tech-stack-gallery">
          {otherToolsData.map((item, index) => (
            <div key={index} className="tech-stack-gallery-item tooltip">
              <span className="tooltiptext">{item.tooltip}</span>
              <i className={`${item.name} colored`}></i>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
