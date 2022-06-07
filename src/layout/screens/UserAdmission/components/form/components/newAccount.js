import React from "react";
import Columns from "../../../../../../components/shared/Columns/Columns";
import Email from "./inputs/email";
import FirstName from "./inputs/firstName";
import LastName from "./inputs/lastName";
import Password from "./inputs/password";
import PhoneNumber from "./inputs/phoneNumber";

const NewAccountFormFields = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="input-container">
        <Columns>
          <FirstName />
          <LastName />
        </Columns>
        <Email />
        <PhoneNumber />
        <Password showConfirm />
      </div>
    </form>
  );
};

export default NewAccountFormFields;
