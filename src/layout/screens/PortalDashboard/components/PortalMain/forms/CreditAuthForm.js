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
import { VALIDATOR_REQUIRE } from "../../../../../../helpers/validators/inputValidators";
import { genericFieldNameTypes } from "../../../../../../global/formFieldNameTypes";
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
      <TextField name={genericFieldNameTypes.dob} label="Date of Birth" />
      <TextField
        name={genericFieldNameTypes.primaryAddressFull}
        label="Home Address"
      />
      <TextField
        name={genericFieldNameTypes.phoneNumber}
        label="Phone Number"
      />
      {/* <PhoneNumber /> */}
      <EmailField
        name={genericFieldNameTypes.emailAddress}
        label="Email Address"
        isRequired
      />
      <TextField
        name={genericFieldNameTypes.isUsCitizen}
        label="Borrower is a US Citizen"
      />
      <TextField
        name={genericFieldNameTypes.ssnNumber}
        label="Social Security Number"
      />
      <FileUpload
        name={genericFieldNameTypes.photoId}
        label="Please upload a photo ID"
      />
      <Signature
        name={genericFieldNameTypes.signature}
        label="Borrower Signature"
      />
    </>
  );
};

export default CreditAuthForm;
