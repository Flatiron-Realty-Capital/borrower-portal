import React from "react";
import RadioField from "../../../../../../../../../components/form/components/inputs/generic/RadioField/RadioField";
import TextField from "../../../../../../../../../components/form/components/inputs/generic/TextField";
import Columns from "../../../../../../../../../components/shared/Columns/Columns";
import { genericFieldNameTypes } from "../../../../../../../../../global/formFieldNameTypes";

const CitizenshipStep = (props) => {
  return (
    <>
      <h3>Identity and Citizenship Verification</h3>

      <RadioField
        name={genericFieldNameTypes.isUsCitizen}
        items={["Yes", "No"]}
        label="Are you a US Citizen?"
      />
      <TextField
        name={genericFieldNameTypes.idDocType}
        label="Identification Document Type"
      />
      <Columns>
        <TextField
          name={genericFieldNameTypes.idDocExpiration}
          label="Expiration Date"
        />
        <TextField
          name={genericFieldNameTypes.idDocDateOfIssue}
          label="Date of Issue"
        />
        <TextField name={genericFieldNameTypes.idNumber} label="ID Number" />
      </Columns>
    </>
  );
};

export default CitizenshipStep;
