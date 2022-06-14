import React from "react";
import TextField from "../../../../../../../../../components/form/components/inputs/generic/TextField";

const PersonalInfoStep = (props) => {
  return (
    <>
      <h3>Personal Information</h3>
      <TextField name="borrowerDob" label="Date of Birth" />
      <TextField name="homeAddress" label="Home Address" />
    </>
  );
};

export default PersonalInfoStep;
