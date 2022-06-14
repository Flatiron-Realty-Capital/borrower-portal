import React from "react";
import TextField from "../../../../../../../../../components/form/components/inputs/generic/TextField";

const CitizenshipStep = (props) => {
  return (
    <>
      <h3>Citizenship</h3>
      <TextField name="isCitizen" label="Are you a US Citizen?" />
      <TextField name="isCitizenDocType" label="Identification Document Type" />
    </>
  );
};

export default CitizenshipStep;
