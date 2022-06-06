import React from "react";
import Input from "../../../components/input";

import EmailOutlined from "@mui/icons-material/EmailOutlined";
import { useSelector } from "react-redux";

const FirstName = (props) => {
  const formState = useSelector((state) => state.formState);

  return (
    <Input
      label={"First Name"}
      keyName={"firstName"}
      value={formState.firstName}
      ariaLabel={"email address"}
    />
  );
};

export default FirstName;
