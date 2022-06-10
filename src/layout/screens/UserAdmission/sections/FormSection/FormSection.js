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
const FormSection = (props) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [rememberMeIsValid, setRememberMeIsValid] = React.useState(false);
  const formState = useSelector((state) => state.formState);
  const isExistingUser = useSelector((state) => state.isExistingUser);
  const dispatch = useDispatch();

  //Functions
  const handleSubmit = async (state) => {
    console.log("Send Data to endpoint ->", state);

    // let endpointURL = isExistingUser
    //   ? "https://frcbackend.azurewebsites.net/login"
    //   : "https://frcbackend.azurewebsites.net/createAccount"; //If seperate enpoints are even required. If not, just the single endpoint

    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(state),
    // };

    try {
      // setIsLoading(true);
      // const response = await fetch(endpointURL, requestOptions);
      // const responseData = await response.json();
      // <SpinnerDotted size={150} thickness={100} speed={100} color="#235685" />;

      // if (!response.ok) {
      //   throw new Error(responseData.message);
      // }
      dispatch(logInUser());
      dispatch(setFormState(state));
      // setIsLoading(false);
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
