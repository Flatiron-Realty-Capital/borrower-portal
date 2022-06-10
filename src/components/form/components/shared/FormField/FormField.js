import React from "react";
import "./FormField.css";

const FormField = (props) => {
  return (
    <div
      id={props.id}
      className={`form-field ${props.noMargin && "no-margin"}`}
    >
      {props.children}
    </div>
  );
};

export default FormField;
