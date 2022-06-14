import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Form from "../../../../../../../../components/form/Form";
import Modal from "../../../../../../../../components/shared/Modal/Modal";
import { usePostRequest } from "../../../../../../../../hooks/helpers/usePostRequest";
import "./AccountInformationSetup.css";
import BorrowerBackgroundStep from "./Steps/BorrowerBackgroundStep";
import CitizenshipStep from "./Steps/CitizenshipStep";
import PersonalInfoStep from "./Steps/PersonalInfoStep";

const AccountInformationSetup = (props) => {
  const [formActive, setFormActive] = React.useState(false);
  const [formStep, setFormStep] = React.useState(1);
  const { isLoading, error, sendRequest, clearError } = usePostRequest();
  const [selectedFormData, setSelectedFormData] = React.useState({});
  const dispatch = useDispatch();
  // const creditAuths = DUMMY_FULL_RESPONSE_DATA.creditAuths;
  const creditAuths = useSelector((state) => state.creditAuthorizations);
  const accountInfo = useSelector((state) => state.accountInfo);

  //Functions
  const nextStepHandler = () => {
    setFormStep((s) => s + 1);
  };
  const previousStepHandler = () => {
    if (formStep > 1) {
      setFormStep((s) => s - 1);
    }
  };
  return (
    <Modal id="account-information" onCancel={props.onCancel} show={true}>
      <div className="mobile-nav__body">
        <Form
          id={props.formType === "credit" ? "creditAuth" : "newDealSubmission"}
          initialValues={props.initialValues}
          onClick={props.onSubmit}
          submitButtonText={props.submitButtonText}
          hideButton
        >
          <div className="inner-wrapper">
            <div className="header">
              <h2>Welcome to your Flatiron Borrower Portal</h2>
              <p>
                Before submitting any documents, let's first set up your account
                information.
              </p>
            </div>
            <div className="form-progress-bar">
              <div className={`form-step ${formStep === 1 && "active"}`}>
                Personal Information
              </div>
              <div className={`form-step ${formStep === 2 && "active"}`}>
                Citizenship
              </div>
              <div className={`form-step ${formStep === 3 && "active"}`}>
                Borrower Background
              </div>
            </div>
            <div className="form-step-container">
              {formStep === 1 && <PersonalInfoStep />}
              {formStep === 2 && <CitizenshipStep />}
              {formStep === 3 && <BorrowerBackgroundStep />}
            </div>
            <div className="footer">
              <button
                style={{ visibility: formStep === 1 ? "hidden" : "visible" }}
                className=""
                onClick={previousStepHandler}
                id="back"
              >
                Back
              </button>
              <button className="" onClick={nextStepHandler} id="next">
                Next
              </button>
            </div>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default AccountInformationSetup;

const cross = (
  <svg viewBox="0 0 24 24">
    <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
  </svg>
);
