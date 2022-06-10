import React from "react";
import EmailField from "../../../../../../components/form/components/inputs/generic/EmailField";
import FileUpload from "../../../../../../components/form/components/inputs/generic/FileUpload/FileUpload";
import FirstNameField from "../../../../../../components/form/components/inputs/specifc/FirstNameField";
import LastNameField from "../../../../../../components/form/components/inputs/specifc/LastNameField";
import Columns from "../../../../../../components/shared/Columns/Columns";

// import PhoneNumber from "../../../../UserAdmission/components/SignInForm/components/inputs/phoneNumber";
// import "./CreditAuthForm.css";

const CreditAuthForm = (props) => {
  return (
    <>
      <Columns>
        <FirstNameField />
        <LastNameField />
      </Columns>
      <EmailField name="emailAddress" label="Email Address" isRequired />

      {/* <PhoneNumber /> */}
      <FileUpload />
    </>
  );
};

export default CreditAuthForm;
