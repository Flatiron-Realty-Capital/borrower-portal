import React from "react";
import TextField from "../../../../../../../../../components/form/components/inputs/generic/TextField";
import { genericFieldNameTypes } from "../../../../../../../../../global/formFieldNameTypes";

const BorrowerBackgroundStep = (props) => {
  return (
    <>
      <h3>Borrower Background and Track Record</h3>
      <TextField
        name={genericFieldNameTypes.estimatedCreditScore}
        label="What is your estimated credit score?"
      />
      <TextField
        name={genericFieldNameTypes.flipsInLastThreeYears}
        label="Number of flips completed in the last 3-year period"
      />
      <TextField
        name={genericFieldNameTypes.flipsInLastOneYear}
        label="Number of flips completed in the last year"
      />
    </>
  );
};

export default BorrowerBackgroundStep;
