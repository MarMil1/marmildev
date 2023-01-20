import React, { useEffect } from "react";
import "../styles/projects.css";
import { featuredProjectsData } from "../data/featuredProjectsData";
import { projectData } from "../data/projectData";
import { ProjectSlideshow } from "./ProjectSlideshow";
import { OtherProjects } from "./OtherProjects";

export const Projects = () => {
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
        <div className="main-subheading">Projects</div>
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
                <a href={item.sourceURL} target="blank">
                  <button className="button is-rounded project-links-button">
                    Repo
                  </button>
                </a>
                {item.siteURL && (
                  <a href={item.siteURL} target="blank">
                    <button className="button is-rounded project-links-button">
                      Website
                    </button>
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
        <div className="second-subheading">Want to see more projects?</div>
        <div className="more-projects-header-content">
          Check out my GitHub for previous work, additional projects and various
          tools I used.
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
            description={item.description}
            tools={item.tools}
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
