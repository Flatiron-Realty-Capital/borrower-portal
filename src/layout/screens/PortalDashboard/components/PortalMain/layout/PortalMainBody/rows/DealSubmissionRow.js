import React from "react";
import { useSelector } from "react-redux";
import AddFormOverlay from "../../../../AddFormOverlay/AddFormOverlay";
import ExistingItemCard from "../../../components/ExistingItemCard/ExistingItemCard";
import PortalRowItem from "../../../components/PortalRowItem/PortalRowItem";
import DealSubmissionForm from "../../../forms/DealSubmissionForm";
// import "./DealSubmissionRow.css";

const DealSubmissionRow = (props) => {
  const [formActive, setFormActive] = React.useState(false);
  const [isNewForm, setIsNewForm] = React.useState(false);
  const [selectedFormData, setSelectedFormData] = React.useState({});

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

  const viewExistingFormHandler = (dealId) => {
    console.log("dealId: ", dealId);
    setFormActive((s) => !s);
    setIsNewForm(false);
    let deal = dealSubmissions.filter((e) => e.dealId === dealId);
    console.log("dealId: ", deal[0]);
    setSelectedFormData(deal[0]);
  };

  const onSubmitHandler = () => {
    console.log("Submit");
  };

  return (
    <PortalRowItem addNewOnClick={newFormHandler} title="Deal Submissions">
      {dealSubmissions.length !== 0 && (
        <div className="existing-item-row">
          {dealSubmissions.map((a) => {
            return (
              <ExistingItemCard
                data={a}
                title={`ID: ${a.dealId}`}
                onClick={() => viewExistingFormHandler(a.dealId)}
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
        <AddFormOverlay
          title={isNewForm ? "New Deal Submission" : "Details For Submission"}
          description="Example paragraph text about deal submissions."
          close={toggleForm}
          onSubmit={onSubmitHandler}
          initialValues={selectedFormData}
        >
          <DealSubmissionForm />
        </AddFormOverlay>
      )}
    </PortalRowItem>
  );
};

export default DealSubmissionRow;
