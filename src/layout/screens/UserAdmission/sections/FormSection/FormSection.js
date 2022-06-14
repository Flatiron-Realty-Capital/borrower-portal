import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SpinnerDotted } from "spinners-react";
import { Checkbox, FormControlLabel } from "@mui/material";
import Logo from "../../../../../assets/images/logo.png";
import "./FormSection.css";
import {
  setIsExistingUserFalse,
  setIsExistingUserTrue,
} from "../../../../../redux/actions/isExistingUserActions";
import { logInUser } from "../../../../../redux/actions/isLoggedInActions";
import ExistingBorrowForm from "./forms/ExistingBorrowForm";
import NewBorrowerForm from "./forms/NewBorrowerForm";
import FormSubmitButton from "../../../../../components/form/components/shared/FormSubmitButton/FormSubmitButton";
import Form from "../../../../../components/form/Form";
import { setFormState } from "../../../../../redux/actions/formStateActions";
import { setCreditAuthState } from "../../../../../redux/actions/creditAuthorizationsActions";
import { setDealSubmissionsState } from "../../../../../redux/actions/dealSubmissionsActions";
import { setAccountInfoState } from "../../../../../redux/actions/accountInfoActions";
import { DUMMY_FULL_RESPONSE_DATA } from "../../../../../tests/responseData";
import { backendEndpoint } from "../../../../../global/endpoints";
import { useEffect } from "react";
import { Email } from "@mui/icons-material";
import { useHttpClient } from "../../../../../hooks/http-hook";

const FormSection = (props) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [requestFailed, setRequestFailed] = React.useState(false);
  // const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [rememberMeIsValid, setRememberMeIsValid] = React.useState(false);
  const formState = useSelector((state) => state.formState);
  const isExistingUser = useSelector((state) => state.isExistingUser);
  const dispatch = useDispatch();

  //Functions
  const handleSubmit = async (state) => {
    let token;
    let endpointURL = isExistingUser
      ? `${backendEndpoint}/login`
      : `${backendEndpoint}/createAccount`; //If seperate enpoints are even required. If not, just the single endpoint

    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData && storedData.userEmail && storedData.token) {
      console.log("Login", storedData);
      token = storedData.token;
    }

    const requestOptions = {
      method: "POST",
      body: JSON.stringify(state),
      headers: { "Content-Type": "application/json", token },
    };

    try {
      console.log("Send Data to endpoint ->", requestOptions);
      setIsLoading(true);
      // await sendRequest();
      const response = await fetch(endpointURL, requestOptions);
      console.log("response", response.headers);
      const responseData = await response.json();
      console.log("responseData", responseData);
      <SpinnerDotted size={150} thickness={100} speed={100} color="#235685" />;

      if (!response.ok) {
        throw new Error(responseData.message);
      }

      if (responseData.Error) {
        console.log("Failed Login", responseData);
        setIsLoading(false);
        setRequestFailed(true);
        throw new Error(responseData);
      }

      if (!responseData.Error) {
        console.log("WORKED, Token =>", responseData);
        let token = responseData.Authorization;

        dispatch(logInUser());
        // dispatch(setFormState(DUMMY_FULL_RESPONSE_DATA.userData));
        dispatch(setCreditAuthState(DUMMY_FULL_RESPONSE_DATA.creditAuths));
        dispatch(
          setDealSubmissionsState(DUMMY_FULL_RESPONSE_DATA.dealSubmissions)
        );
        dispatch(setAccountInfoState(DUMMY_FULL_RESPONSE_DATA.userData));
        localStorage.setItem(
          "userData",
          JSON.stringify({ userEmail: "test@gmail.com", token: token })
        );
      }

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

  // useEffect(() => {
  //   const storedData = JSON.parse(localStorage.getItem("userData"));
  //   if (storedData && storedData.userEmail && storedData.token) {
  //     console.log("Login", storedData);
  //     handleSubmit(storedData);
  //   }
  // }, []);

  return (
    <section id="form">
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
          <Form
            hideButton
            id="login"
            initialValues={formState}
            onClick={handleSubmit}
          >
            {isExistingUser ? <ExistingBorrowForm /> : <NewBorrowerForm />}

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

                  <button
                    className="underline-ghost-button"
                    id="forgot-password"
                  >
                    Forgot Password
                  </button>
                </div>
              )}
              <FormSubmitButton
                noMargin
                text={isExistingUser ? "Sign In" : "Create new account"}
              />
              {/* <button onClick={handleSubmit} id="submit" type="submit">
              {isExistingUser ? "Sign In" : "Create new account"}
            </button> */}
              {requestFailed && (
                <div
                  style={{
                    color: "var(--red)",
                    textAlign: "center",
                    marginTop: "5px",
                  }}
                >
                  Invalid email address or password, please try again.
                </div>
              )}
              <div className="existing-user-container">
                <span>
                  {isExistingUser
                    ? "Don't have an account?"
                    : "Already have an account?"}
                </span>
                <button
                  onClick={
                    isExistingUser ? toggleToNewUser : toggleToExistingUser
                  }
                  className="underline-ghost-button"
                >
                  {isExistingUser ? "Create new account" : "Sign in"}
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
