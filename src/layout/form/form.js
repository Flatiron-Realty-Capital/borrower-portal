import React from "react";
import "../styles/form.css";
import Logo from "../../assets/images/logo.png";
import Input from "../../components/input";
import Password from "./inputs/password";
import Email from "./inputs/email";
import { Checkbox, FormControlLabel } from "@mui/material";

const Form = (props) => {
  return (
    <div className="form-outer-wrapper">
      <div className="form__header">
        <div className="logo-wrapper">
          <img src={Logo} alt="" />
        </div>
        <h1>Existing User Sign In</h1>
        <p>Sign in to gather all the data you need about your loan.</p>
      </div>

      <div className="form__body">
        <div className="input-container">
          <Email />
          <Password />
        </div>
        <div className="form__buttons">
          <div className="reset-buttons-container">
            <div className="remember-user">
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Remeber Me"
              />
            </div>
            <button id="forgot-password">Forgot Password</button>
          </div>
          <button id="submit" type="submit">
            Sign In
          </button>

          <div className="existing-user-container">
            Exisiting User Button Area
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
