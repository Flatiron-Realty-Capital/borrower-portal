import React from "react";
import {
  borrowerFormFieldNameTypes,
  genericFieldNameTypes,
} from "../../../../../global/formFieldNameTypes";
import { VALIDATOR_REQUIRE } from "../../../../../helpers/validators/inputValidators";
import TextField from "../generic/TextField";
// import "./FirstNameField.css";

const FirstNameField = (props) => {
  return (
    <TextField
      validate={VALIDATOR_REQUIRE}
      name={genericFieldNameTypes.firstName}
      label="First Name"
    />
  );
};

export default FirstNameField;
