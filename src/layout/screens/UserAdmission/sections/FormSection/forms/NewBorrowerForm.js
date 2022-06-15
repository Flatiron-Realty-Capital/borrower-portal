import React from "react";
import { useSelector } from "react-redux";
import EmailField from "../../../../../../components/form/components/inputs/generic/EmailField";
import PhoneNumber from "../../../../../../components/form/components/inputs/generic/PhoneNumber";
import TextField from "../../../../../../components/form/components/inputs/generic/TextField";
import FirstNameField from "../../../../../../components/form/components/inputs/specifc/FirstNameField";
import LastNameField from "../../../../../../components/form/components/inputs/specifc/LastNameField";
import Columns from "../../../../../../components/shared/Columns/Columns";
import {
  borrowerFormFieldNameTypes,
  genericFieldNameTypes,
} from "../../../../../../global/formFieldNameTypes";

// import "./LoginForm.css";

const NewBorrowerForm = (props) => {
  return (
    <>
      <Columns>
        <FirstNameField />
        <LastNameField />
      </Columns>

      <EmailField
        name={genericFieldNameTypes.emailAddress}
        label="Email Address"
        isRequired
      />
      <PhoneNumber />

      <TextField name="password" label="Password" />
    </>
  );
};

export default NewBorrowerForm;
