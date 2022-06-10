import React from "react";
import FileUpload from "../../../../../../components/form/inputs/FileUpload/FileUpload";
import Columns from "../../../../../../components/shared/Columns/Columns";
import Email from "../../../../UserAdmission/components/SignInForm/components/inputs/email";
import FirstName from "../../../../UserAdmission/components/SignInForm/components/inputs/firstName";
import LastName from "../../../../UserAdmission/components/SignInForm/components/inputs/lastName";
import PhoneNumber from "../../../../UserAdmission/components/SignInForm/components/inputs/phoneNumber";
// import "./CreditAuthForm.css";

const CreditAuthForm = (props) => {
  return (
    <form className="CreditAuthForm-outer-wrapper">
      <Columns>
        <FirstName />
        <LastName />
      </Columns>
      <Email />
      <PhoneNumber />
      <FileUpload />
    </form>
  );
};

export default CreditAuthForm;
