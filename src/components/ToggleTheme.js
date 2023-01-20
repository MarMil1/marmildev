import React, { useEffect, useState } from "react";
import "../styles/toggleTheme.css";
import { setTheme } from "../helpers/themes";

export const ToggleTheme = () => {
  const [toggleClass, setToggleClass] = useState("dark");
  let theme = localStorage.getItem("theme");

  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-light");
      setToggleClass("light");
    } else {
      setTheme("theme-dark");
      setToggleClass("dark");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setToggleClass("dark");
    } else if (localStorage.getItem("theme") === "theme-light") {
      setToggleClass("light");
    }
  }, [theme]);

  return (
    <div className="container-toggle">
      {toggleClass === "light" ? (
        <svg
          className="logo-svg-container rotate-whole-logo"
          height="70px"
          width="70px"
          viewBox="0 0 300 300"
          preserveAspectRatio="xMidYMid meet"
          onClick={handleOnClick}
          style={{ transform: "rotate(90deg)" }}
        >
          <path
            className="logo-letter-one"
            d="M10 -10 L10 100 c 0,0 0,1 1,0 L120 0 c 0,0 1,1 0,0 L230 100 c 1,0 0,1 0,0 L230 -10"
          />
          <path
            className="logo-letter-two"
            d="M10 -10 L10 100 c 0,0 0,1 1,0 L120 0 c 0,0 1,1 0,0 L230 100 c 1,0 0,1 0,0 L230 -10"
          />
          <line className="logo-line" x1="95" y1="180" x2="265" y2="180" />
        </svg>
      ) : (
        <svg
          className="logo-svg-container rotate-whole-logo"
          height="70px"
          width="70px"
          viewBox="0 0 300 300"
          preserveAspectRatio="xMidYMid meet"
          onClick={handleOnClick}
        >
          <path
            className="logo-letter-one"
            d="M10 -10 L10 100 c 0,0 0,1 1,0 L120 0 c 0,0 1,1 0,0 L230 100 c 1,0 0,1 0,0 L230 -10"
          />
          <path
            className="logo-letter-two"
            d="M10 -10 L10 100 c 0,0 0,1 1,0 L120 0 c 0,0 1,1 0,0 L230 100 c 1,0 0,1 0,0 L230 -10"
          />
          <line className="logo-line" x1="95" y1="180" x2="265" y2="180" />
        </svg>
      )}
    </div>
  );
};
