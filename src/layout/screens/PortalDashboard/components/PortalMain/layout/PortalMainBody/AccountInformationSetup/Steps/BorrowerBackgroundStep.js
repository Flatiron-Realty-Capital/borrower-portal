import React from "react";
import TextField from "../../../../../../../../../components/form/components/inputs/generic/TextField";

const BorrowerBackgroundStep = (props) => {
  return (
    <>
      <h3>Borrower Background</h3>
      <TextField
        name="creditScore"
        label="What is your estimated credit score?"
      />
      <TextField
        name="numOfFlips"
        label="Number of flips completed in the last 3-year period"
      />
    </>
  );
};

export default BorrowerBackgroundStep;
