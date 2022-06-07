import React from "react";
import Email from "./inputs/email";
import Password from "./inputs/password";

const ExistingUserFormFields = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="input-container">
        <Email />
        <Password />
      </div>
    </form>
  );
};

export default ExistingUserFormFields;
