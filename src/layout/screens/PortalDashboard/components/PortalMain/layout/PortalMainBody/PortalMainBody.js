import React from "react";
import { useSelector } from "react-redux";
import ExistingItemCard from "../../components/ExistingItemCard/ExistingItemCard";
// import NewItemCard from "../../components/NewItemCard/NewItemCard";
import FormOverlaylay from "../../../FormOverlay/FormOverlay";
import PortalRowItem from "../../components/PortalRowItem/PortalRowItem";
import "./PortalMainBody.css";
import CreditAuthForm from "../../forms/CreditAuthForm";
import DealSubmissionForm from "../../forms/DealSubmissionForm";
import DealSubmissionRow from "./rows/DealSubmissionRow";
import CreditAuthRow from "./rows/CreditAuthRow";
import AccountInformationSetup from "./AccountInformationSetup/AccountInformationSetup";

const PortalMainBody = (props) => {
  const [AccountInformationIsSetup, setAccountInformationIsSetup] =
    React.useState(false);
  const creditAuths = useSelector((state) => state.creditAuthorizations);
  const dealSubmissions = useSelector((state) => state.dealSubmissions);

  return (
    <section className="portal-body">
      {/* <div className="portal-body__header">
        <h1>Welcome To Your Flatiron Portal</h1>
        <p>What would you like to first?</p>
      </div> */}
      <div className="portal-body__content-area">
        {!AccountInformationIsSetup && (
          <AccountInformationSetup
            toggleAccountInfoIsSetup={() => setAccountInformationIsSetup(true)}
          />
        )}
        {AccountInformationIsSetup && (
          <>
            <CreditAuthRow />
            <DealSubmissionRow />
          </>
        )}
      </div>
    </section>
  );
};

export default PortalMainBody;
