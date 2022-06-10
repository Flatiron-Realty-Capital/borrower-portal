import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../../../../../../components/form/components/shared/Input/Input";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";

import Columns from "../../../../../../../components/shared/Columns/Columns";
import { updateFormState } from "../../../../../../../redux/actions/formStateActions";
import { validatePassword } from "../../../../../../../helpers/validatePassword";
const Password = (props) => {
  //State & Redux
  const [showError, setShowError] = React.useState(false);
  const [confirmValue, setConfirmValue] = React.useState("");
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [showPassword, setShowPasswordValue] = React.useState(false);
  const formState = useSelector((state) => state.formState);
  const dispatch = useDispatch();

  //Functions
  const handleConfirmValue = (e) => {
    console.log(
      formState.password !== e.target.value && e.target.value.length > 6
        ? true
        : false
    );
    setConfirmValue(e.target.value);
  };

  //Functions
  const handleChange = (e) => {
    // console.log("VALIDATING EMAIL");
    let val = e.target.value;

    validatePasswordHandler(val);
    dispatch(updateFormState({ key: "password", value: val }));
  };

  const validatePasswordHandler = (password) => {
    let errors = validatePassword(password);
    if (errors.length > 0) {
      console.log("NOT VALID", errors);
      setShowError(true);
    } else {
      setShowError(false);
      console.log("VALID PASSWORD");
    }
  };

  const confirmContent = (
    <Columns>
      <Input
        keyName={"password"}
        value={formState.password}
        onChange={handleChange}
        type={showPassword ? "text" : "password"}
        iconOnClick={() => setShowPasswordValue((s) => !s)}
        icon={showPassword ? <Visibility /> : <VisibilityOutlined />}
        label={"Password"}
        ariaLabel={"toggle password visibility"}
        showError={showError}
      />
      <Input
        keyName={"password"}
        value={confirmValue}
        type={showConfirmPassword ? "text" : "password"}
        iconOnClick={() => setShowConfirmPassword((s) => !s)}
        onChange={handleConfirmValue}
        icon={showConfirmPassword ? <Visibility /> : <VisibilityOutlined />}
        label={"Confirm Password"}
        ariaLabel={"toggle password visibility"}
        showError={
          formState.password !== confirmValue && confirmValue.length >= 6
            ? true
            : false
        }
      />
    </Columns>
  );

  return (
    <>
      {props.showConfirm ? (
        confirmContent
      ) : (
        <Input
          keyName={"password"}
          value={formState.password}
          onChange={handleChange}
          type={showPassword ? "text" : "password"}
          iconOnClick={() => setShowPasswordValue((s) => !s)}
          icon={showPassword ? <Visibility /> : <VisibilityOutlined />}
          label={"Password"}
          ariaLabel={"toggle password visibility"}
          showError={showError}
        />
      )}
    </>
  );
};

export default Password;
