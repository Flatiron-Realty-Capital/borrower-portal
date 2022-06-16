import React from "react";
import "./ArrowFormProgressBar.css";
import ProgressBarStep from "./ProgressBarStep/ProgressBarStep";

const ArrowFormProgressBar = (props) => {
  return (
    <div id="progress-bar" className="arrow-form-progress-bar">
      {props.formSteps.map((step, i) => (
        <ProgressBarStep
          currentFormStep={props.currentFormStep}
          step={step}
          index={i}
        />
      ))}
    </div>
  );
};

export default ArrowFormProgressBar;
