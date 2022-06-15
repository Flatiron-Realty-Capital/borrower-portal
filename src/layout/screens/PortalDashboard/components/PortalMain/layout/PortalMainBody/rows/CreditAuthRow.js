import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { endPointDestinations } from "../../../../../../../../global/endPointDestinations";
import { genericFieldNameTypes } from "../../../../../../../../global/formFieldNameTypes";
import { usePostRequest } from "../../../../../../../../hooks/helpers/usePostRequest";
import {
  addCreditAuth,
  updateCreditAuthState,
} from "../../../../../../../../redux/actions/creditAuthorizationsActions";
// import { DUMMY_FULL_RESPONSE_DATA } from "../../../../../../../../tests/dummyResponseData";
import FormOverlaylay from "../../../../FormOverlay/FormOverlay";
import ExistingItemCard from "../../../components/ExistingItemCard/ExistingItemCard";
import PortalRowItem from "../../../components/PortalRowItem/PortalRowItem";
import CreditAuthForm from "../../../forms/CreditAuthForm";
import ShareModal from "./ShareModal/ShareModal";

const CreditAuthRow = (props) => {
  const [formActive, setFormActive] = React.useState(false);
  const [isEditingForm, setIsEditingForm] = React.useState(false);
  const [shareModalIsActive, setShareModalIsActive] = React.useState(false);
  const { isLoading, error, sendRequest, clearError } = usePostRequest();
  const [selectedFormData, setSelectedFormData] = React.useState({});
  const dispatch = useDispatch();
  // const creditAuths = DUMMY_FULL_RESPONSE_DATA.creditAuths;
  const creditAuths = useSelector((state) => state.creditAuthorizations);
  const accountInfo = useSelector((state) => state.accountInfo);

  //Functions
  const toggleForm = () => {
    setFormActive((s) => !s);
  };

  const handleToggleNewForm = () => {
    setFormActive((s) => !s);
    setSelectedFormData({});
    setIsEditingForm(false);
  };

  const handleToggleExistingFormHandler = (id) => {
    console.log("Viewing: ", id);
    setFormActive((s) => !s);
    setIsEditingForm(true);
    let user = creditAuths.filter((u) => u.id === id);
    console.log("email: ", user[0]);
    setSelectedFormData(user[0]);
  };

  const handleNewCreditAuthSubmit = (state) => {
    console.log("Add New Credit Auth", state);
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    let date = today.toDateString();
    const addtionalInfo = {
      id: Math.random(),
      submissionDate: date,
    };
    let updatedState = { ...state, ...addtionalInfo };
    dispatch(addCreditAuth(updatedState));
    setFormActive((s) => !s);
  };

  const handleUpdateCreditAuthForm = async (state) => {
    console.log("Update Form for: ", state);
    setSelectedFormData(state);
    setIsEditingForm(false);
    dispatch(updateCreditAuthState(state));
    setFormActive(false);
  };

  const emptyRow = (
    <div className="empty-container">
      You currently don't have any Credit Authorizations yet.
    </div>
  );

  const populatedRow = (
    <div className="existing-item-row">
      {creditAuths.map((borrower) => {
        return (
          <ExistingItemCard
            data={borrower}
            title={`${borrower.firstName} ${borrower.lastName}`}
            onClick={() => handleToggleExistingFormHandler(borrower.id)}
          >
            <p>
              <span>Date of Birth:</span>
              {borrower[genericFieldNameTypes.dob]}
            </p>
            <p>
              <span>Email:</span>
              {borrower[genericFieldNameTypes.emailAddress]}
            </p>
            <p>
              <span>Submitted:</span>
              {borrower.submissionDate}
            </p>
          </ExistingItemCard>
        );
      })}
    </div>
  );

  return (
    <PortalRowItem
      hideButton={creditAuths.length === 0 ? true : false}
      addNewOnClick={handleToggleNewForm}
      shareOnClick={() => setShareModalIsActive(true)}
      title="Credit Authorizations"
    >
      {creditAuths.length === 0 ? emptyRow : populatedRow}
      {shareModalIsActive && (
        <ShareModal onCancel={() => setShareModalIsActive(false)} />
      )}
      {formActive && (
        <FormOverlaylay
          title={
            isEditingForm
              ? `Edit Details for ${selectedFormData.firstName} ${selectedFormData.lastName}`
              : "Create New Credit Authorization"
          }
          description="Example paragraph text about deal submissions."
          submitButtonText={
            isEditingForm ? "Submit" : "Update & Save Information"
          }
          close={toggleForm}
          onSubmit={
            isEditingForm
              ? handleUpdateCreditAuthForm
              : handleNewCreditAuthSubmit
          }
          initialValues={isEditingForm ? selectedFormData : accountInfo}
        >
          <CreditAuthForm />
        </FormOverlaylay>
      )}
    </PortalRowItem>
  );
};

export default CreditAuthRow;
