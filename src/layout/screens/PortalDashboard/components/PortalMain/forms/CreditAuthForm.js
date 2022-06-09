import React from "react";
import Columns from "../../../../../../components/shared/Columns/Columns";
import Email from "../../../../UserAdmission/components/form/components/inputs/email";
import FirstName from "../../../../UserAdmission/components/form/components/inputs/firstName";
import LastName from "../../../../UserAdmission/components/form/components/inputs/lastName";
import PhoneNumber from "../../../../UserAdmission/components/form/components/inputs/phoneNumber";
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
    </form>
  );
};

export default CreditAuthForm;
