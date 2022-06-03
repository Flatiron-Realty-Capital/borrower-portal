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
const Input = ({
  type,
  value,
  handleChange,
  ariaLabel,
  iconOnClick,
  icon,
  label,
}) => {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="input-outer-wrapper">
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
        <OutlinedInput
          fullWidth
          id="outlined-adornment-password"
          type={type}
          value={value}
          onChange={handleChange}
          endAdornment={
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
          }
          label={label}
        />
      </FormControl>
    </div>
  );
};

export default Input;
