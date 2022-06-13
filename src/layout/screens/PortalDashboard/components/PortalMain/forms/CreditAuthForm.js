import React from "react";
import EmailField from "../../../../../../components/form/components/inputs/generic/EmailField";
import FileUpload from "../../../../../../components/form/components/inputs/generic/FileUpload/FileUpload";
import TextField from "../../../../../../components/form/components/inputs/generic/TextField";
import FirstNameField from "../../../../../../components/form/components/inputs/specifc/FirstNameField";
import LastNameField from "../../../../../../components/form/components/inputs/specifc/LastNameField";
import FormLabel from "../../../../../../components/form/components/shared/FormLabel/FormLabel";
import FormGroup from "../../../../../../components/form/components/shared/FormGroup/FormGroup";
import Columns from "../../../../../../components/shared/Columns/Columns";
import SignatureCanvas from "react-signature-canvas";
import PhoneNumber from "../../../../UserAdmission/components/SignInForm/components/inputs/phoneNumber";
import FormField from "../../../../../../components/form/components/shared/FormField/FormField";
import Signature from "../../../../../../components/form/components/inputs/generic/Signature/Signature";
// import Form from "../../../../UserAdmission/components/SignInForm/SignInForm";
// import "./CreditAuthForm.css";

const CreditAuthForm = (props) => {
  const sig = (
    <FormField>
      <FormLabel text="Signature" />
      <SignatureCanvas
        penColor="green"
        canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
      />
    </FormField>
  );
  return (
    <>
      <Columns>
        <FirstNameField />
        <LastNameField />
      </Columns>
      <TextField name="dob" label="Date of Birth" />
      <TextField name="homeAddress" label="Home Address" />
      <PhoneNumber />
      <EmailField name="emailAddress" label="Email Address" isRequired />
      <TextField name="isUsCitizen" label="Borrower is a US Citizen" />
      <TextField name="ssnNumber" label="Social Security NUmber" />
      <FileUpload />
      <Signature />
    </>
  );
};

export default CreditAuthForm;
