import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../../../../../components/form/Form";
import PhoneNumber from "../../../../../../components/form/components/inputs/generic/PhoneNumber";

import { setFormState } from "../../../../../../redux/actions/formStateActions";
import FirstNameField from "../../../../../../components/form/components/inputs/specifc/FirstNameField";
import LastNameField from "../../../../../../components/form/components/inputs/specifc/LastNameField";
import TextField from "../../../../../../components/form/components/inputs/generic/TextField";
// import "./DealSubmissionForm.css";

const DealSubmissionForm = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(setFormState);
  };
  return (
    <>
      <TextField name="loanType" label="Loan Type" />
      <TextField name="loanPurpose" label="Loan Purpose" />
      <TextField name="propertyAddress" label="Property Address" />
    </>
  );
};

export default DealSubmissionForm;
