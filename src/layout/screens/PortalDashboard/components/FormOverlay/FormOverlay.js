import React from "react";
import Backdrop from "../../../../../components/shared/Backdrop/Backdrop";
import CreditAuthForm from "../PortalMain/forms/CreditAuthForm";
import DealSubmissionForm from "../PortalMain/forms/DealSubmissionForm";
import "./FormOverlay.css";

const FormOverlay = (props) => {
  return (
    <div id="form-overlay">
      <div className="form-container">
        <div className="form-inner-wrapper">
          <div className="inner-wrapper__header">
            <h2 className="title">
              {props.formType === "credit"
                ? "Credit Authorization Form"
                : "New Deal Submission"}
            </h2>
            <button onClick={() => props.toggleForm("")} className="close">
              {cross}
            </button>
          </div>
          <div className="inner-wrapper__body">
            {props.formType === "credit" ? (
              <CreditAuthForm />
            ) : (
              <DealSubmissionForm />
            )}
          </div>
        </div>
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
