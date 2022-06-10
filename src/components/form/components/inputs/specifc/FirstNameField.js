import React from "react";
import { VALIDATOR_REQUIRE } from "../../../../../helpers/validators/inputValidators";
import TextField from "../generic/TextField";
// import "./FirstNameField.css";

const FirstNameField = (props) => {
  return (
    <TextField
      validate={VALIDATOR_REQUIRE}
      name="firstName"
      label="First Name"
    />
  );
};

export default FirstNameField;
