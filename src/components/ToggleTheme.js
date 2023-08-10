import React, { useEffect, useState } from "react";
import "../styles/toggleTheme.css";
import { setTheme } from "../helpers/themes";

export const ToggleTheme = () => {
  const [toggleClass, setToggleClass] = useState("light");
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
        <div onClick={handleOnClick}>
          <i className="fa-solid fa-moon"></i>
        </div>
      ) : (
        <div onClick={handleOnClick}>
          <i className="fa-solid fa-sun"></i>
        </div>
      )}
    </div>
  );
};
