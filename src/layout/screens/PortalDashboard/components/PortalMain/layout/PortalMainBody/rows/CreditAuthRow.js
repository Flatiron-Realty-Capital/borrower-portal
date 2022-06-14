import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCreditAuth } from "../../../../../../../../redux/actions/creditAuthorizationsActions";
import { DUMMY_FULL_RESPONSE_DATA } from "../../../../../../../../tests/responseData";
import AddFormOverlay from "../../../../AddFormOverlay/AddFormOverlay";
import ExistingItemCard from "../../../components/ExistingItemCard/ExistingItemCard";
import PortalRowItem from "../../../components/PortalRowItem/PortalRowItem";
import CreditAuthForm from "../../../forms/CreditAuthForm";

const CreditAuthRow = (props) => {
  const [formActive, setFormActive] = React.useState(false);
  const [isNewForm, setIsNewForm] = React.useState(false);
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

  const viewExistingFormHandler = (userId) => {
    console.log("email: ", userId);
    setFormActive((s) => !s);
    setIsNewForm(false);
    // fetch(`endpoiinturl/form?${userId}`)
    let user = creditAuths.filter((u) => u.userId === userId);
    console.log("email: ", user[0]);
    setSelectedFormData(user[0]);
  };

  const handleSubmit = async (state) => {
    console.log("Send Data to endpoint ->", state);
    const submissionDate = { submissionDate: "date" };
    let updatedState = { ...state, ...submissionDate };
    console.log("updatedState", updatedState);
    dispatch(addCreditAuth(updatedState));
    setFormActive(false);
    let endpointURL = "https://frcbackend.azurewebsites.net/form";

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", formType: "creditAuth" },

      body: JSON.stringify(state),
    };

    try {
      // setIsLoading(true);
      const response = await fetch(endpointURL, requestOptions);
      console.log("response", response);
      const responseData = await response.json();
      console.log("responseData", responseData);
    } catch (error) {
      console.log(error);
    }
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
                onClick={() => viewExistingFormHandler(borrower.borrowerID)}
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
        <AddFormOverlay
          title={
            isNewForm
              ? "Create New Credit Authorization"
              : `Edit Details for ${selectedFormData.firstName} ${selectedFormData.lastName}`
          }
          description="Example paragraph text about deal submissions."
          submitButtonText={isNewForm ? "Submit" : "Update & Save Information"}
          close={toggleForm}
          onSubmit={handleSubmit}
          initialValues={isNewForm ? accountInfo : selectedFormData}
        >
          <CreditAuthForm />
        </AddFormOverlay>
      )}
    </PortalRowItem>
  );
};

export default CreditAuthRow;
