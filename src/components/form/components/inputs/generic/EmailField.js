import EmailOutlined from "@mui/icons-material/EmailOutlined";
import React from "react";
import { useFormState } from "react-final-form";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MIN_CHAR,
  VALIDATOR_REQUIRE,
} from "../../../../../helpers/validators/inputValidators";
import FormInput from "../../shared/FormInput/FormInput";
// import "./Email.css";

const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

const EmailField = (props) => {
  const { values } = useFormState();

  return (
    <FormInput
      validate={composeValidators(VALIDATOR_REQUIRE, VALIDATOR_EMAIL)}
      name={props.name}
      label={"First Name"}
      icon={<EmailOutlined />}
      keyName={"firstName"}
      value={values[props.name]}
      ariaLabel={"email address"}
      {...props}
    />
  );
};

export default EmailField;
