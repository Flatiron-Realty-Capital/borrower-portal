import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { endPointDestinations } from "../../../../../../../../global/endPointDestinations";
import { usePostRequest } from "../../../../../../../../hooks/helpers/usePostRequest";
import {
  addCreditAuth,
  updateCreditAuthState,
} from "../../../../../../../../redux/actions/creditAuthorizationsActions";
import { DUMMY_FULL_RESPONSE_DATA } from "../../../../../../../../tests/responseData";
import FormOverlaylay from "../../../../FormOverlay/FormOverlay";
import ExistingItemCard from "../../../components/ExistingItemCard/ExistingItemCard";
import PortalRowItem from "../../../components/PortalRowItem/PortalRowItem";
import CreditAuthForm from "../../../forms/CreditAuthForm";

const CreditAuthRow = (props) => {
  const [formActive, setFormActive] = React.useState(false);
  const [isNewForm, setIsNewForm] = React.useState(false);
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

  const newFormHandler = () => {
    setFormActive((s) => !s);
    setSelectedFormData({});
    setIsNewForm(true);
  };

  const viewExistingFormHandler = (id) => {
    console.log("Viewing: ", id);
    setFormActive((s) => !s);
    setIsNewForm(false);
    let user = creditAuths.filter((u) => u.id === id);
    console.log("email: ", user[0]);
    setSelectedFormData(user[0]);
  };

  const updateExistingFormHandler = async (state) => {
    console.log("Update Form for: ", state);
    setSelectedFormData(state);
    setIsNewForm(false);
    // const responseData = await sendRequest(
    //   endPointDestinations.FORM,
    //   selectedFormData
    // );
    dispatch(updateCreditAuthState(state));
    setFormActive(false);
    // if (responseData.Error) {
    //   console.log("Success");
    //   dispatch(updateCreditAuthState(state));
    //   setFormActive(false);
    // }
  };

  return (
    <PortalRowItem addNewOnClick={newFormHandler} title="Credit Authorizations">
      {creditAuths.length !== 0 && (
        <div className="existing-item-row">
          {creditAuths.map((borrower) => {
            return (
              <ExistingItemCard
                data={borrower}
                title={`${borrower.firstName} ${borrower.lastName}`}
                onClick={() => viewExistingFormHandler(borrower.id)}
              >
                <p>
                  <span>Date of Birth:</span>
                  {borrower.borrowerDob}
                </p>
                <p>
                  <span>Email:</span>
                  {borrower.borrowerEmail}
                </p>
                <p>
                  <span>Submitted:</span>
                  {borrower.submissionDate}
                </p>
              </ExistingItemCard>
            );
          })}
        </div>
      )}

      {formActive && (
        <FormOverlaylay
          title={
            isNewForm
              ? "Create New Credit Authorization"
              : `Edit Details for ${selectedFormData.firstName} ${selectedFormData.lastName}`
          }
          description="Example paragraph text about deal submissions."
          submitButtonText={isNewForm ? "Submit" : "Update & Save Information"}
          close={toggleForm}
          onSubmit={updateExistingFormHandler}
          initialValues={isNewForm ? accountInfo : selectedFormData}
        >
          <CreditAuthForm />
        </FormOverlaylay>
      )}
    </PortalRowItem>
  );
};

export default CreditAuthRow;
