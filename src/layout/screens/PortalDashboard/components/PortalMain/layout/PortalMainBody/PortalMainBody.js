import React from "react";
import ExistingItemCard from "../../components/ExistingItemCard/ExistingItemCard";
import NewItemCard from "../../components/NewItemCard/NewItemCard";
import PortalRowItem from "../../components/PortalRowItem/PortalRowItem";
import "./PortalMainBody.css";

const EXISTING_CREDIT_AUTH_DUMMY = [
  {
    id: "1234",
    firstName: "John",
    lastName: "Smith",
    submissionDate: "5/12/22",
  },
  {
    id: "1234",
    firstName: "Jimmy",
    lastName: "Oliva",
    submissionDate: "6/9/22",
  },
];

const PortalMainBody = (props) => {
  return (
    <section className="portal-body">
      {/* <div className="portal-body__header">
        <h1>Welcome To Your Flatiron Portal</h1>
        <p>What would you like to first?</p>
      </div> */}
      <div className="portal-body__content-area">
        <PortalRowItem title="Credit Authorizations">
          {/* <NewItemCard
            title="Create Credit Authorization"
            description="Submit a deal for a new property"
            onClick={() => props.toggleForm("credit")}
          /> */}
          {EXISTING_CREDIT_AUTH_DUMMY.length !== 0 && (
            <div className="existing-item-row">
              {EXISTING_CREDIT_AUTH_DUMMY.map((a) => {
                return (
                  <ExistingItemCard
                    data={a}
                    onClick={() => props.toggleForm("credit")}
                  />
                );
              })}
            </div>
          )}
        </PortalRowItem>
        <PortalRowItem title="Deal Submissions">
          <NewItemCard
            title="Create New Deal"
            description="Submit a deal for a new property"
            onClick={() => props.toggleForm("")}
          />
        </PortalRowItem>
      </div>
    </section>
  );
};

export default PortalMainBody;
