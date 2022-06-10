import React, { useReducer } from "react";
import { Field } from "react-final-form";
import {
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
// import "./input.css";
import { updateFormState } from "../../../../../redux/actions/formStateActions";
import { useDispatch, useSelector } from "react-redux";
import FormField from "../FormField/FormField";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
      };
    default:
      return state;
  }
};

const FormInput = (props) => {
  const {
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
  } = props;

  //Functions
  const handleDefaultInputChange = (e) => {
    console.log("Change", keyName, e.target.value);
    // dispatch(updateFormState({ key: keyName, value: e.target.value }));
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //Components
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
  // const required = (value) => (value ? undefined : "Required");
  return (
    <FormField>
      <Field
        initialValue={props.value || ""}
        name={props.name}
        validate={props.validate}
      >
        {({ input, meta }) => (
          <FormControl fullWidth variant="outlined">
            <InputLabel
              // sx={{ fontSize: ".6rem" }}
              // size="small"
              htmlFor="outlined-adornment-password"
            >
              {label}
            </InputLabel>
            <OutlinedInput
              fullWidth
              // size="small"
              id="outlined-adornment-password"
              type={type}
              value={value}
              onChange={onChange ? onChange : handleDefaultInputChange}
              error={meta.error && meta.touched}
              endAdornment={icon && inputIcon}
              label={label}
              onBlur={onBlur}
              onFocus={onFocus}
              onKeyDown={onKeyDown}
              isRequired
              {...input}
            />
            {meta.error && meta.touched && (
              <span className="error">{meta.error}</span>
            )}
          </FormControl>
        )}
      </Field>
    </FormField>
  );
};

export default FormInput;