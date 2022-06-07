import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsExistingUserFalse,
  setIsExistingUserTrue,
} from "../../redux/actions/isExistingUserActions";

import { Checkbox, FormControlLabel } from "@mui/material";
import ExistingUserFormFields from "./existingUser";
import Logo from "../../assets/images/logo.png";
import NewAccountFormFields from "./newAccount";

import "../styles/form.css";
import { useHttpClient } from "../../hooks/http-hook";

const Form = () => {
  //State & Redux
  const [rememberMeIsValid, setRememberMeIsValid] = React.useState(false);
  const formState = useSelector((state) => state.formState);
  const isExistingUser = useSelector((state) => state.isExistingUser);
  const dispatch = useDispatch();

  //Functions
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const handleSubmit = async () => {
    console.log("Send Data to endpoint ->", formState);

    let endpointURL = isExistingUser
      ? "http://127.0.0.1:8000/login"
      : "http://127.0.0.1:8000/createAccount"; //If seperate enpoints are even required. If not, just the single endpoint

    const requestOptions = {
      method: "POST",

      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(formState),
    };

    try {
      fetch(endpointURL, requestOptions)
        .then((response) => response.json())

        .then((data) => console.log(data));
    } catch (error) {
      console.log(error);
    }
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
          {isExistingUser && (
            <div className="reset-buttons-container">
              <div className="remember-user">
                <FormControlLabel
                  control={
                    <Checkbox
                      value={rememberMeIsValid}
                      onChange={() => setRememberMeIsValid((s) => !s)}
                      size="small"
                    />
                  }
                  label="Remeber Me"
                />
              </div>
              <button className="underline-ghost-button" id="forgot-password">
                Forgot Password
              </button>
            </div>
          )}
          <button onClick={handleSubmit} id="submit" type="submit">
            {isExistingUser ? "Sign In" : "Create new account"}
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
