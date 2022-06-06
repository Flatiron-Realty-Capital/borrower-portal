import React from "react";
import Input from "../../../components/input";

import { useSelector } from "react-redux";
import { Phone, PhoneOutlined } from "@mui/icons-material";

const PhoneNumber = (props) => {
  const formState = useSelector((state) => state.formState);

  return (
    <Input
      keyName={"phoneNumber"}
      value={formState.phoneNumber}
      icon={<PhoneOutlined />}
      label={"Phone Number"}
      ariaLabel={"Phone Number"}
    />
  );
};

export default PhoneNumber;
