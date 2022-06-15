import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SpinnerDotted } from "spinners-react";
import { Checkbox, FormControlLabel } from "@mui/material";

import Logo from "../../../../../assets/images/logo.png";
// import ExistingUserFormFields from "./components/existingUser";
// import NewAccountFormFields from "./components/newAccount";

import "./SignInForm.css";
import { useHttpClient } from "../../../../../hooks/http-hook";
import {
  setIsExistingUserFalse,
  setIsExistingUserTrue,
} from "../../../../../redux/actions/isExistingUserActions";
import { logInUser } from "../../../../../redux/actions/isLoggedInActions";

const Form = () => {
  //State & Redux
  const [isLoading, setIsLoading] = React.useState(false);
  const [rememberMeIsValid, setRememberMeIsValid] = React.useState(false);
  const formState = useSelector((state) => state.formState);
  const isExistingUser = useSelector((state) => state.isExistingUser);
  const dispatch = useDispatch();

  //Functions
  // const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const handleSubmit = async () => {
    console.log("Send Data to endpoint ->", formState);

    let endpointURL = isExistingUser
      ? "https://frcbackend.azurewebsites.net/login"
      : "https://frcbackend.azurewebsites.net/createAccount"; //If seperate enpoints are even required. If not, just the single endpoint

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formState),
    };

    try {
      setIsLoading(true);
      // const response = await fetch(endpointURL, requestOptions);
      // const dummyResponseData = await response.json();
      // // <SpinnerDotted size={150} thickness={100} speed={100} color="#235685" />;

      // if (!response.ok) {
      //   throw new Error(dummyResponseData.message);
      // }
      dispatch(logInUser());
      setIsLoading(false);
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
      {isLoading && (
        <div className="loader-overlay">
          <SpinnerDotted
            size={70}
            thickness={100}
            speed={100}
            color="#235685"
          />
        </div>
      )}
      <div className="form__header">
        <div className="logo-wrapper">
          <img src={Logo} alt="" />
        </div>
        <h1>
          {isExistingUser ? "Borrower Sign In" : "Create Borrower Account"}
        </h1>
        <p>
          {isExistingUser
            ? "Sign in to gather all the data you need about your loan."
            : "Create a new account to get started with your loan."}
        </p>
      </div>

      <div className="form__body">
        {/* {isExistingUser ? <ExistingUserFormFields /> : <NewAccountFormFields />} */}

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
