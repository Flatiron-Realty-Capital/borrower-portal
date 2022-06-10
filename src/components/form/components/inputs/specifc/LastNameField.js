import React from "react";
import { VALIDATOR_REQUIRE } from "../../../../../helpers/validators/inputValidators";
import TextField from "../generic/TextField";
// import "./LastNameField.css";

const LastNameField = (props) => {
  return (
    <TextField validate={VALIDATOR_REQUIRE} name="lastName" label="Last Name" />
  );
};

export default LastNameField;
