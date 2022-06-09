import React from "react";
import Backdrop from "../../../../../components/shared/Backdrop/Backdrop";
import "./FormOverlay.css";

const FormOverlay = (props) => {
  return (
    <div id="form-overlay">
      <div className="form-container">
        <button onClick={() => props.toggleForm("")} className="close">
          {cross}
        </button>
        <h2 className="title">{props.title}</h2>
      </div>
      <div onClick={() => props.toggleForm("")} className="backdrop"></div>
    </div>
  );
};

export default FormOverlay;

const cross = (
  <svg viewBox="0 0 24 24">
    <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
  </svg>
);
