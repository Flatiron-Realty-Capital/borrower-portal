import React from "react";
import EmailField from "../../../../../../../../../components/form/components/inputs/generic/EmailField";
import RadioField from "../../../../../../../../../components/form/components/inputs/generic/RadioField/RadioField";
import TextField from "../../../../../../../../../components/form/components/inputs/generic/TextField";
import FirstNameField from "../../../../../../../../../components/form/components/inputs/specifc/FirstNameField";
import LastNameField from "../../../../../../../../../components/form/components/inputs/specifc/LastNameField";
import { genericFieldNameTypes } from "../../../../../../../../../global/formFieldNameTypes";

const PersonalInfoStep = (props) => {
  return (
    <>
      <h3>Personal Contact Details</h3>
      <FirstNameField />
      <LastNameField />
      <RadioField
        name={genericFieldNameTypes.isUsCitizen}
        options={["Yes", "No"]}
        label="Are you a US Citizen?"
      />
      <TextField name={genericFieldNameTypes.dob} label="Date of Birth" />
      <TextField
        name={genericFieldNameTypes.primaryAddressFull}
        label="Home Address"
      />
      <TextField
        name={genericFieldNameTypes.phoneNumber}
        label="Phone Number"
      />

      <EmailField
        name={genericFieldNameTypes.emailAddress}
        label="Email Address"
        isRequired
      />
      <TextField
        name={genericFieldNameTypes.ssnNumber}
        label="Social Security Number"
      />
    </>
  );
};

export default PersonalInfoStep;
