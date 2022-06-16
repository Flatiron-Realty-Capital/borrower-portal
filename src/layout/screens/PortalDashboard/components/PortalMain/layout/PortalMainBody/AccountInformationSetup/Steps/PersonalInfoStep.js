import React from "react";
import EmailField from "../../../../../../../../../components/form/components/inputs/generic/EmailField";
import RadioField from "../../../../../../../../../components/form/components/inputs/generic/RadioField/RadioField";
import SelectField from "../../../../../../../../../components/form/components/inputs/generic/SelectField/SelectField";
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
        items={["Yes", "No"]}
        label="Are you a US Citizen?"
      />
      <TextField name={genericFieldNameTypes.dob} label="Date of Birth" />
      {/* <SelectField
        name="months"
        items={[
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ]}
      /> */}
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
