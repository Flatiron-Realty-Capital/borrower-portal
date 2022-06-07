import React, { useState } from "react";

import EmailOutlined from "@mui/icons-material/EmailOutlined";
import { useDispatch, useSelector } from "react-redux";
import { validateEmail } from "../../../../../../../helpers/validateEmail";
import { updateFormState } from "../../../../../../../redux/actions/formStateActions";
import Input from "../../../../../../../components/input";

const Email = (props) => {
  const [isValid, setValid] = useState(false);
  const formState = useSelector((state) => state.formState);
  const dispatch = useDispatch();

  //Functions
  const handleChange = (e) => {
    // console.log("VALIDATING EMAIL");
    let val = e.target.value;
    validateEmailHandler(val);
    dispatch(updateFormState({ key: "emailAddress", value: val }));
  };

  const validateEmailHandler = (email) => {
    if (validateEmail(email)) {
      console.log("VALID EMAIL");
      setValid(false);
    } else {
      setValid(true);
      console.log("NOT VALID");
    }
  };

  return (
    <Input
      keyName={"emailAddress"}
      value={formState.emailAddress}
      onChange={handleChange}
      icon={<EmailOutlined />}
      label={"Email Address"}
      showError={isValid}
      ariaLabel={"email address"}
    />
  );
};

export default Email;
