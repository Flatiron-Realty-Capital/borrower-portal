import React from "react";
import Input from "../../../components/input";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
const RememberMe = (props) => {
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
      icon={values.showPassword ? <VisibilityOff /> : <Visibility />}
      label={"Password"}
      ariaLabel={"toggle password visibility"}
    />
  );
};

export default RememberMe;
