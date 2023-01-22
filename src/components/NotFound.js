import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/notFound.css";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <div className="error-code">404</div>
      <div className="error-text">
        Whoops! Looks like this page does not exits.
      </div>
      <div className="error-text-two">Sorry for the inconvenience.</div>
      <button className="button go-back-error" onClick={() => navigate(-1)}>
        <i class="fa-solid fa-arrow-left fa-lg"></i> Go Back
      </button>
    </div>
  );
};
