import React from "react";
import {
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import "./styles/input.css";
import { updateFormState } from "../redux/actions/formStateActions";
import { useDispatch, useSelector } from "react-redux";

const Input = ({
  type,
  value,
  onBlur,
  onChange,
  keyName,
  ariaLabel,
  iconOnClick,
  showError,
  icon,
  label,
  onKeyDown,
  onFocus,
}) => {
  const formState = useSelector((state) => state.formState);
  const dispatch = useDispatch();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleDefaultInputChange = (e) => {
    console.log("Change", keyName, e.target.value);
    dispatch(updateFormState({ key: keyName, value: e.target.value }));
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const inputIcon = iconOnClick ? (
    <InputAdornment position="end">
      <IconButton
        aria-label={ariaLabel}
        onClick={iconOnClick}
        onMouseDown={handleMouseDownPassword}
        edge="end"
      >
        {icon}
      </IconButton>
    </InputAdornment>
  ) : (
    <InputAdornment position="end">{icon}</InputAdornment>
  );
  return (
    <div className="input-outer-wrapper">
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
        <OutlinedInput
          fullWidth
          id="outlined-adornment-password"
          type={type}
          value={value}
          onChange={onChange ? onChange : handleDefaultInputChange}
          error={showError}
          endAdornment={icon && inputIcon}
          label={label}
          onBlur={onBlur}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
        />
      </FormControl>
    </div>
  );
};

export default Input;
