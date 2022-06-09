import React from "react";
import "./PortalMainBody.css";

const PortalMainBody = (props) => {
  return (
    <section className="portal-body">
      {/* <div className="portal-body__header">
        <h1>Welcome To Your Flatiron Portal</h1>
        <p>What would you like to first?</p>
      </div> */}
      <div className="portal-body__content-area">
        <div className="portal-row-item">
          <h2>Credit Authorizations</h2>
          <div className="card-item">
            <h3>Submit New Credit Authorization</h3>
            <p>Submit a deal for a new property</p>
            <div className="card-button-wrapper">
              <span>Add New</span>
              <button
                onClick={() => props.toggleForm("Credit Authorization Form")}
                className="card-button"
              >
                {plus}
              </button>
            </div>
          </div>
        </div>
        <div className="portal-row-item">
          <h2>Deal Submissions</h2>
          <div className="card-item">
            <h3>New Deal Submission</h3>
            <p>Create a new credit authorization</p>
            <div className="card-button-wrapper">
              <span>Add New</span>
              <button
                onClick={() => props.toggleForm("New Deal Submission")}
                className="card-button"
              >
                {plus}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortalMainBody;

const plus = (
  <svg viewBox="0 0 24 24">
    <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
  </svg>
);
