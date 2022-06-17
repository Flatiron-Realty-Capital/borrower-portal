import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ArrowFormProgressBar from "../../../../../../../../components/form/components/ArrowFormProgressBar/ArrowFormProgressBar";
import { ReactComponent as RightArrow } from "../../../../../../../../assets/svgs/rightArrow.svg";
import { ReactComponent as LeftArrow } from "../../../../../../../../assets/svgs/leftArrow.svg";
import Form from "../../../../../../../../components/form/Form";
import Modal from "../../../../../../../../components/shared/Modal/Modal";
import { usePostRequest } from "../../../../../../../../hooks/helpers/usePostRequest";
import "./AccountInformationSetup.css";
import BorrowerBackgroundStep from "./Steps/BorrowerBackgroundStep";
import CitizenshipStep from "./Steps/CitizenshipStep";
import PersonalInfoStep from "./Steps/PersonalInfoStep";
import { setAccountInfoState } from "../../../../../../../../redux/actions/accountInfoActions";
import FormSubmitButton from "../../../../../../../../components/form/components/shared/FormSubmitButton/FormSubmitButton";
import { genericFieldNameTypes } from "../../../../../../../../global/formFieldNameTypes";
import SelectField from "../../../../../../../../components/form/components/inputs/generic/SelectField/SelectField";
import { endPointDestinations } from "../../../../../../../../global/endPointDestinations";

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

  const handleSubmit = async (state) => {
    console.log("SUBMITTING", state);
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    let date = today.toDateString();
    const addtionalInfo = {
      // id: Math.random(),
      submissionDate: date,
    };
    let updatedState = { ...state, ...addtionalInfo };
    dispatch(setAccountInfoState(updatedState));
    props.toggleAccountInfoIsSetup();
    try {
      console.log("Send Data to endpoint ->", state);
      const responseData = await sendRequest(endPointDestinations.FORM, state);
      console.log("responseData", responseData);
      // <SpinnerDotted size={150} thickness={100} speed={100} color="#235685" />;

      if (responseData.Error) {
        console.log("Failed Login", responseData);
        // setRequestFailed(true);
        throw new Error(responseData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const nextStepHandler = (state) => {
    setFormStep((s) => s + 1);
    if (formStep === 3) {
      props.handleSubmit();
    }
  };
  const previousStepHandler = () => {
    if (formStep > 1) {
      setFormStep((s) => s - 1);
    }
  };

  const formSteps = [
    "Personal Information",
    "Identity & Citizenship",
    "Borrower Background ",
  ];

  return (
    <Modal
      hideCloseButton
      id="account-information"
      onCancel={props.onCancel}
      show={true}
    >
      <Form
        id={props.formType === "credit" ? "creditAuth" : "newDealSubmission"}
        initialValues={props.initialValues}
        onClick={handleSubmit}
        submitButtonText={props.submitButtonText}
        hideButton
      >
        <div className="inner-wrapper">
          <div className="modal__header">
            <div className="header-content-area">
              <h2>Welcome to your Flatiron Borrower Portal</h2>
              <p>
                Before submitting any documents, let's first set up your account
                information.
              </p>
            </div>
            <ArrowFormProgressBar
              formSteps={formSteps}
              currentFormStep={formStep}
            />
          </div>

          <section id="main-content-area">
            <div className="modal__body">
              <div className="form-step-container">
                {formStep === 1 && <PersonalInfoStep />}
                {formStep === 2 && <CitizenshipStep />}
                {formStep === 3 && <BorrowerBackgroundStep />}
              </div>
            </div>
            <div className="modal__footer">
              <button
                style={{ visibility: formStep === 1 ? "hidden" : "visible" }}
                className=""
                type="button"
                onClick={previousStepHandler}
                id="back"
              >
                <div className="icon-wrapper">{<LeftArrow />}</div>
                <span>Back</span>
              </button>
              {formStep === 3 ? (
                <FormSubmitButton id="next" text={"Submit"} />
              ) : (
                <button
                  className=""
                  onClick={nextStepHandler}
                  id="next"
                  type="button"
                >
                  <span>{formStep === 3 ? "Submit" : "Next"}</span>
                  <div className="icon-wrapper">{<RightArrow />}</div>
                </button>
              )}
            </div>
          </section>
        </div>
      </Form>
    </Modal>
  );
};

export default AccountInformationSetup;

const cross = (
  <svg viewBox="0 0 24 24">
    <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
  </svg>
);
