import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateDealSubmission } from "../../../../../../../../redux/actions/dealSubmissionsActions";
import FormOverlaylay from "../../../../FormOverlay/FormOverlay";
import ExistingItemCard from "../../../components/ExistingItemCard/ExistingItemCard";
import PortalRowItem from "../../../components/PortalRowItem/PortalRowItem";
import DealSubmissionForm from "../../../forms/DealSubmissionForm";
// import "./DealSubmissionRow.css";

const DealSubmissionRow = (props) => {
  const [formActive, setFormActive] = React.useState(false);
  const [isNewForm, setIsNewForm] = React.useState(false);
  const [selectedFormData, setSelectedFormData] = React.useState({});

  const dispatch = useDispatch();
  const dealSubmissions = useSelector((state) => state.dealSubmissions);
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
    let deal = dealSubmissions.filter((u) => u.id === id);
    console.log("email: ", deal[0]);
    setSelectedFormData(deal[0]);
  };

  const updateExistingFormHandler = async (state) => {
    console.log("Update Form for: ", state);
    setSelectedFormData(state);
    setIsNewForm(false);
    // const responseData = await sendRequest(
    //   endPointDestinations.FORM,
    //   selectedFormData
    // );

    dispatch(updateDealSubmission(state));
    setFormActive(false);
    // if (responseData.Error) {
    //   console.log("Success");
    //   dispatch(updateCreditAuthState(state));
    //   setFormActive(false);
    // }
  };

  ///////

  // const viewExistingFormHandler = (id) => {
  //   console.log("id: ", id);
  //   setFormActive((s) => !s);
  //   setIsNewForm(false);
  //   let deal = dealSubmissions.filter((e) => e.id === id);
  //   console.log("id: ", deal[0]);
  //   setSelectedFormData(deal[0]);
  // };

  // const onSubmitHandler = () => {
  //   console.log("Submit");
  // };

  return (
    <PortalRowItem addNewOnClick={newFormHandler} title="Deal Submissions">
      {dealSubmissions.length !== 0 && (
        <div className="existing-item-row">
          {dealSubmissions.map((a) => {
            return (
              <ExistingItemCard
                data={a}
                title={`ID: ${a.id}`}
                onClick={() => viewExistingFormHandler(a.id)}
              >
                <p>
                  <span>Loan Type:</span>
                  {a.loanType}
                </p>
                <p>
                  <span>Loan Purpose:</span>
                  {a.loanPurpose}
                </p>
                <p>
                  <span>Property Address:</span>
                  {a.propertyAddress}
                </p>
              </ExistingItemCard>
            );
          })}
        </div>
      )}

      {formActive && (
        <FormOverlaylay
          title={isNewForm ? "New Deal Submission" : "Details For Submission"}
          description="Example paragraph text about deal submissions."
          close={toggleForm}
          onSubmit={updateExistingFormHandler}
          initialValues={isNewForm ? accountInfo : selectedFormData}
        >
          <DealSubmissionForm />
        </FormOverlaylay>
      )}
    </PortalRowItem>
  );
};

export default DealSubmissionRow;
