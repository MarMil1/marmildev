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
            Software developer with more than {originDate} years of experience
            in programming.
          </li>{" "}
          <li>
            <span>• </span>
            Developing software is a passion of mine in which I seek to provide
            the best solutions possible for projects I work on. I like working
            on challenging tasks and learning new technologies that help me
            enrich my skills toolbox.
          </li>
          <li>
            <span>• </span>
            Technologies I'm familiar with: JavaScript, React, Redux, HTML, CSS,
            PostgreSQL, and more. Enjoy my website and drop me a message if
            you'd like to chat.
          </li>
        </ul>
        <div className="connect-content">
          Would you like to connect and work together?
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
