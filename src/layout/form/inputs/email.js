import React from "react";
import Input from "../../../components/input";

import EmailOutlined from "@mui/icons-material/EmailOutlined";

const Email = (props) => {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

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
      value={values.password}
      type={values.showPassword ? "text" : "password"}
      handleChange={handleChange("password")}
      iconOnClick={handleClickShowPassword}
      icon={<EmailOutlined />}
      label={"Email Address"}
      ariaLabel={"email address"}
    />
  );
};

export default Email;
