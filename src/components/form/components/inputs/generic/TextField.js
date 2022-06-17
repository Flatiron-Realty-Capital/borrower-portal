import React from "react";
import FormInput from "../../shared/FormInput/FormInput";
// import "./TextField.css";
import { useFormState } from "react-final-form";

const TextField = (props) => {
  const { values } = useFormState();

  return (
    <FormInput
      validate={props.validate}
      name={props.name}
      label={props.label}
      noMargin={props.noMargin}
      keyName={"firstName"}
      value={values[props.name]}
      ariaLabel={"email address"}
      {...props}
    />
  );
};

export default TextField;
