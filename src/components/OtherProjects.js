import React from "react";
import "../styles/otherProjects.css";

export const OtherProjects = (props) => {
  return (
    <>
      <div className="other-single-project-container">
        <div className="other-single-project-title">{props.name}</div>
        <div className="other-single-project-description">
          {props.description}
        </div>
        <div className="other-single-project-tools">
          {props.tools.map((item, index) => (
            <div
              key={index}
              className="other-single-project-tools-item tooltip"
            >
              <span
                className="tooltiptext tooltip-addition"
                style={{
                  marginLeft: "-15px",
                  width: "120px",
                  padding: "5px 5px",
                  fontSize: "0.9rem",
                }}
              >
                {item.tooltip}
              </span>
              <i className={`${item.name} colored`}></i>
            </div>
          ))}
        </div>
        <div className="other-single-project-links">
          <a href={props.sourceURL} target="blank">
            <div className="button is-rounded other-single-project-links-button">
              Repo
            </div>
          </a>
          {props.siteURL && (
            <a href={props.siteURL} target="blank">
              <div className="button is-rounded other-single-project-links-button">
                Website
              </div>
            </a>
          )}
        </div>
      </div>
    </>
  );
};
