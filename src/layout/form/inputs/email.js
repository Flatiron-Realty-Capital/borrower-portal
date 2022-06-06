import React from "react";
import Input from "../../../components/input";

import EmailOutlined from "@mui/icons-material/EmailOutlined";
import { useSelector } from "react-redux";

const Email = (props) => {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const formState = useSelector((state) => state.formState);
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  return (
    <Input
      keyName={"emailAddress"}
      value={formState.emailAddress}
      handleChange={handleChange("password")}
      iconOnClick={handleClickShowPassword}
      icon={<EmailOutlined />}
      label={"Email Address"}
      ariaLabel={"email address"}
    />
  );
};

export default Email;
