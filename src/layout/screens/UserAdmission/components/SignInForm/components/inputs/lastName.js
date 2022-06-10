import React from "react";
import Input from "../../../../../../../components/input";

import EmailOutlined from "@mui/icons-material/EmailOutlined";
import { useSelector } from "react-redux";

const LastName = (props) => {
  const formState = useSelector((state) => state.formState);

  return (
    <Input
      label={"Last Name"}
      keyName={"lastName"}
      value={formState.lastName}
      ariaLabel={"Last Name"}
    />
  );
};

export default LastName;
