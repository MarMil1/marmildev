import React from "react";
import "../styles/otherProjects.css";

export const OtherProjects = (props) => {
  return (
    <>
      <div className="other-single-project-container">
        {props.type === "desktop" ? (
          <a href={props.sourceURL} target="blank">
            <div className="other-single-project-computer">
              <div className="other-single-project-computer-header-footer">
                <div className="other-single-project-computer-header">
                  <i class="fa-solid fa-ellipsis fa-xl"></i>
                  <div className="computer-header-url-box"></div>
                  <div className="computer-header-avatar"></div>
                </div>
                <div className="other-single-project-computer-footer">
                  <img src={props.image} alt="Project" />
                  <div className="other-single-project-computer-footer-content">
                    <div className="project-desktop-body-name">
                      {props.name}
                    </div>
                    <div className="project-desktop-body-description">
                      {props.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ) : (
          <a href={props.sourceURL} target="blank">
            <div className="other-single-project-mobile">
              <div className="other-single-project-mobile-header">
                <div className="mobile-header-camera"></div>
                <div className="mobile-header-speaker"></div>
              </div>
              <div className="other-single-project-mobile-body">
                <img src={props.image} alt="Project" />
                <div className="other-single-project-mobile-body-content">
                  <div className="other-single-project-mobile-body-content-container">
                    <div className="project-mobile-body-name">{props.name}</div>
                    <div className="project-mobile-body-description">
                      {props.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        )}
      </div>
    </>
  );
};
