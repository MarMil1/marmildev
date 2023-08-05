import React, { useEffect } from "react";
import "../styles/projects.css";
import { featuredProjectsData } from "../data/featuredProjectsData";
import { projectData } from "../data/projectData";
import { ProjectSlideshow } from "./ProjectSlideshow";
import { OtherProjects } from "./OtherProjects";
import useAnalyticsEventTracker from "./useAnalyticsEventTracker";

export const Projects = () => {
  const gaEventTracker = useAnalyticsEventTracker("Projects");
  /**
   * It scrolls the projects container to the left
   * by the width of the project container
   */
  const scrollLeft = () => {
    const singleContainer = document.getElementsByClassName(
      "other-single-project-container"
    );

    for (let i = 0; i < singleContainer.length; i++) {
      document.getElementById("scroll-projects").scrollLeft -=
        singleContainer[i].offsetWidth;
    }
  };

  /**
   * It scrolls the projects container to the right
   * by the width of a single project container
   */
  const scrollRight = () => {
    const singleContainer = document.getElementsByClassName(
      "other-single-project-container"
    );

    for (let i = 0; i < singleContainer.length; i++) {
      document.getElementById("scroll-projects").scrollLeft +=
        singleContainer[i].offsetWidth;
    }
  };

  useEffect(() => {
    const scrollProjects = document.getElementById("scroll-projects");
    const leftArrow = document.getElementById("projects-left-arrow");
    const rightArrow = document.getElementById("projects-right-arrow");

    /* This is for on load and is checking if the scrollLeft is at 0, 
    if it is, then the left arrow will be hidden. */
    if (scrollProjects.scrollLeft === 0) {
      leftArrow.style.display = "none";
    }

    /* This is for on change and is checking if the scrollLeft is at 0, 
    if it is, then the left arrow will be hidden. */
    scrollProjects.addEventListener("scroll", () => {
      if (scrollProjects.scrollLeft === 0) {
        leftArrow.style.display = "none";
      } else {
        leftArrow.style.display = "block";
      }
    });

    /* This is for on change and is checking if the scrollLeft is at the 
    offsetWidth, if it is, then the right arrow will be hidden. */
    scrollProjects.addEventListener("scroll", () => {
      /* Getting the width of the scrollProjects container and 
     subtracting the clientWidth of the scrollProjects container. */
      const scrollProjectsWidth =
        scrollProjects.scrollWidth - scrollProjects.clientWidth - 1;

      if (scrollProjects.scrollLeft >= scrollProjectsWidth) {
        rightArrow.style.display = "none";
      } else {
        rightArrow.style.display = "block";
      }
    });
  });

  return (
    <section id="projects" className="projects section is-white">
      <div className="" style={{ display: "flex", gap: "10%" }}>
        <div className="main-subheading">
          <i className="fa-solid fa-ellipsis-vertical"></i> PROJECTS
        </div>
      </div>
      {featuredProjectsData.map((item, index) => (
        <div key={index}>
          <div className="featured-projects-main">
            <div className="featured-projects-descriptions">
              <div className="featured-project-title">{item.name}</div>
              <div className="featured-project-desc">{item.description}</div>
              <div className="featured-project-tools">
                {item.tools.map((item, index) => (
                  <div
                    key={index}
                    className="featured-project-tools-item tooltip"
                  >
                    <span className="tooltiptext">{item.tooltip}</span>
                    <i className={`${item.name} colored`}></i>
                  </div>
                ))}
              </div>
              <div className="featured-project-links">
                {item.sourceURL && (
                  <a
                    href={item.sourceURL}
                    target="blank"
                    onClick={() => gaEventTracker(`${item.name}_repo`)}
                  >
                    <button className="projects-button">Repo</button>
                  </a>
                )}
                {item.siteURL && (
                  <a
                    href={item.siteURL}
                    target="blank"
                    onClick={() => gaEventTracker(`${item.name}_website`)}
                  >
                    <button className="projects-button">Website</button>
                  </a>
                )}
              </div>
            </div>
            <div className="featured-projects-container">
              <ProjectSlideshow
                key={index}
                name={item.name}
                index={index}
                media={item.media}
                description={item.description}
                siteURL={item.siteURL}
                sourceURL={item.sourceURL}
              />
            </div>
          </div>
        </div>
      ))}
      <div className="more-projects-heading">
        <div className="second-subheading">
          Curious to explore more of my work?
        </div>
        <div className="more-projects-header-content">
          Visit my GitHub profile for a comprehensive collection of previous
          projects, additional works, and a wide range of tools I've utilized.
        </div>
        <div className="more-projects-header-button">
          <a href="https://github.com/MarMil1" target="blank">
            <i className="devicon-github-original-wordmark colored"></i>
          </a>
        </div>
      </div>
      <div id="scroll-projects" className="other-projects-container">
        <button
          id="projects-left-arrow"
          className="fa fa-2x fa-angle-left other-project-scroll-left"
          onClick={() => scrollLeft()}
        />
        {projectData.map((item, index) => (
          <OtherProjects
            key={index}
            name={item.name}
            type={item.type}
            description={item.description}
            tools={item.tools}
            image={item.image}
            siteURL={item.siteURL}
            sourceURL={item.sourceURL}
          />
        ))}
        <button
          id="projects-right-arrow"
          className="fa fa-2x fa-angle-right other-project-scroll-right"
          onClick={() => scrollRight()}
        />
      </div>
    </section>
  );
};
