import React from "react";
import { useSelector } from "react-redux";
import EmailField from "../../../../../../components/form/components/inputs/generic/EmailField";
import TextField from "../../../../../../components/form/components/inputs/generic/TextField";
import { VALIDATOR_REQUIRE } from "../../../../../../helpers/validators/inputValidators";
// import "./ExistingBorrowForm.css";

const ExistingBorrowForm = (props) => {
  const state = useSelector((state) => state);
  return (
    <>
      <EmailField name="emailAddress" label="Email Address" />
      <TextField
        validate={VALIDATOR_REQUIRE}
        name="password"
        label="Password"
      />
    </>
  );
};

export default ExistingBorrowForm;
