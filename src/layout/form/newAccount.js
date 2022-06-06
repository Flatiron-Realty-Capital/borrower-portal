import React from "react";
import Email from "./inputs/email";
import Password from "./inputs/password";

const NewAccountFormFields = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="input-container">
        <Email />
        <Password />
        <Password />
        <Password />
      </div>
    </form>
  );
};

export default NewAccountFormFields;
