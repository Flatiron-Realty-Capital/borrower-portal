import React from "react";
import Input from "../../../components/input";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useSelector } from "react-redux";
const Password = (props) => {
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
      keyName={"password"}
      value={formState.password}
      type={values.showPassword ? "text" : "password"}
      iconOnClick={handleClickShowPassword}
      icon={values.showPassword ? <VisibilityOff /> : <Visibility />}
      label={"Password"}
      ariaLabel={"toggle password visibility"}
    />
  );
};

export default Password;
