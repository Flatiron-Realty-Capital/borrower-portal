import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../../../../components/form/Form";
import Backdrop from "../../../../../components/shared/Backdrop/Backdrop";
import { addCreditAuth } from "../../../../../redux/actions/creditAuthorizationsActions";
import CreditAuthForm from "../PortalMain/forms/CreditAuthForm";
import DealSubmissionForm from "../PortalMain/forms/DealSubmissionForm";
import "./AddFormOverlay.css";

const AddFormOverlay = (props) => {
  const formState = useSelector((state) => state.formState);
  const dispatch = useDispatch();
  const [activeItemState, setActiveItemState] = useState({});
  const handleSubmit = async (state) => {
    console.log("Send Data to endpoint ->", state);

    // let endpointURL = isExistingUser
    //   ? "https://frcbackend.azurewebsites.net/login"
    //   : "https://frcbackend.azurewebsites.net/createAccount"; //If seperate enpoints are even required. If not, just the single endpoint

    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formState),
    // };

    try {
      // setIsLoading(true);
      // const response = await fetch(endpointURL, requestOptions);
      // const responseData = await response.json();
      // // <SpinnerDotted size={150} thickness={100} speed={100} color="#235685" />;

      // if (!response.ok) {
      //   throw new Error(responseData.message);
      // }
      dispatch(addCreditAuth(state));
      props.toggleForm();
      // dispatch(setFormState(state));
      // setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="form-overlay">
      <div className="form-container">
        <div className="form-inner-wrapper">
          <div className="inner-wrapper__header">
            <h2 className="title">
              {props.formType === "credit"
                ? "Credit Authorization Form"
                : "New Deal Submission"}
            </h2>
            <button onClick={() => props.toggleForm("")} className="close">
              {cross}
            </button>
          </div>
          <div className="inner-wrapper__body">
            <Form
              id="creditAuth"
              initialValues={activeItemState}
              onClick={handleSubmit}
              submitButtonText="Submit Credit Authorization"
            >
              {props.formType === "credit" ? (
                <CreditAuthForm />
              ) : (
                <DealSubmissionForm />
              )}
            </Form>
          </div>
        </div>
      </div>
      <div onClick={() => props.toggleForm("")} className="backdrop"></div>
    </div>
  );
};

export default AddFormOverlay;

const cross = (
  <svg viewBox="0 0 24 24">
    <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
  </svg>
);
