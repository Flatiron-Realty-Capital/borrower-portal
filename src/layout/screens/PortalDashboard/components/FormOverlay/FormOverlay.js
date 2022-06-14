import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SpinnerDotted } from "spinners-react";
import FormSubmitButton from "../../../../../components/form/components/shared/FormSubmitButton/FormSubmitButton";
import Form from "../../../../../components/form/Form";
import Backdrop from "../../../../../components/shared/Backdrop/Backdrop";
import { addCreditAuth } from "../../../../../redux/actions/creditAuthorizationsActions";
import CreditAuthForm from "../PortalMain/forms/CreditAuthForm";
import DealSubmissionForm from "../PortalMain/forms/DealSubmissionForm";
import "./FormOverlay.css";

const FormOverlaylay = (props) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const formState = useSelector((state) => state.formState);
  const dispatch = useDispatch();
  const [activeItemState, setActiveItemState] = useState({});
  const handleSubmit = async (state) => {
    console.log("Send Data to endpoint ->", state);

    let endpointURL = "https://frcbackend.azurewebsites.net/form";

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formState),
    };

    try {
      setIsLoading(true);
      const response = await fetch(endpointURL, requestOptions);
      const responseData = await response.json();
      <SpinnerDotted size={150} thickness={100} speed={100} color="#235685" />;
      console.log("Response -->", responseData);
      if (!response.ok) {
        throw new Error(responseData.message);
      }
      dispatch(addCreditAuth(state));
      props.toggleForm();
      // dispatch(setFormState(state));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="form-overlay">
      <div className="form-container">
        <button onClick={props.close} className="close">
          {cross}
        </button>
        <div className="form-inner-wrapper">
          <div className="inner-wrapper__header">
            <h2 className="title">{props.title}</h2>

            <p>{props.description}</p>
          </div>
          <div className="inner-wrapper__body">
            <Form
              id={
                props.formType === "credit" ? "creditAuth" : "newDealSubmission"
              }
              initialValues={props.initialValues}
              onClick={props.onSubmit}
              submitButtonText={props.submitButtonText}
            >
              {props.children}

              {/* <FormSubmitButton text={"Submit Credit Authorization"} /> */}
            </Form>
          </div>
        </div>
      </div>
      <div onClick={props.close} className="backdrop"></div>
    </div>
  );
};

export default FormOverlaylay;

const cross = (
  <svg viewBox="0 0 24 24">
    <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
  </svg>
);
