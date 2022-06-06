import React from "react";
import "../styles/form.css";
import Logo from "../../assets/images/logo.png";
import Input from "../../components/input";
import Password from "./inputs/password";
import Email from "./inputs/email";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsExistingUserFalse,
  setIsExistingUserTrue,
} from "../../redux/actions/isExistingUserActions";
import ExistingUserFormFields from "./existingUser";
import NewAccountFormFields from "./newAccount";

const Form = (props) => {
  const formState = useSelector((state) => state.formState);
  const isExistingUser = useSelector((state) => state.isExistingUser);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log("Send Data to endpoint ->", formState);
  };

  const toggleToExistingUser = () => {
    dispatch(setIsExistingUserTrue());
  };

  const toggleToNewUser = () => {
    dispatch(setIsExistingUserFalse());
  };

  return (
    <div className="form-outer-wrapper">
      <div className="form__header">
        <div className="logo-wrapper">
          <img src={Logo} alt="" />
        </div>
        <h1>{isExistingUser ? "Borrower Sign In" : "Create Account"}</h1>
        <p>
          {isExistingUser
            ? "Sign in to gather all the data you need about your loan."
            : "Create a new account to get started with your loan."}
        </p>
      </div>

      <div className="form__body">
        {isExistingUser ? <ExistingUserFormFields /> : <NewAccountFormFields />}

        <div className="form__buttons">
          <div className="reset-buttons-container">
            <div className="remember-user">
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Remeber Me"
              />
            </div>
            <button className="underline-ghost-button" id="forgot-password">
              Forgot Password
            </button>
          </div>
          <button onClick={handleSubmit} id="submit" type="submit">
            Sign In
          </button>

          <div className="existing-user-container">
            <span>
              {isExistingUser
                ? "Don't have an account?"
                : "Already have an account?"}
            </span>
            <button
              onClick={isExistingUser ? toggleToNewUser : toggleToExistingUser}
              className="underline-ghost-button"
            >
              {isExistingUser ? "Create new account" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
