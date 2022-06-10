import React from "react";
import FormField from "../FormField/FormField";
import "./FormSubmitButton.css";

const FormSubmitButton = (props) => {
  return (
    <FormField noMargin={props.noMargin}>
      <button
        style={props.style}
        onClick={props.onClick}
        id={props.id}
        type="submit"
        value="Submit"
        className={`form-submit-button ${props.className} `}
      >
        {props.text}
      </button>
    </FormField>
  );
};

export default FormSubmitButton;
