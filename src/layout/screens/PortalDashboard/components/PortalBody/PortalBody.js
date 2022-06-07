import React from "react";
import "./PortalBody.css";

const PortalBody = (props) => {
  return (
    <section className="portal-body">
      <div className="portal-body__header">
        <h1>Welcome To Your Flatiron Portal</h1>
        <p>What would you like to first?</p>
      </div>
      <div className="portal-body__content-area">
        <div className="card-item">
          <h3>Submit New Credit Authorization</h3>
          <p>Submit a deal for a new property</p>
          <div className="card-button-wrapper">
            <button className="card-button">{plus}</button>
          </div>
        </div>
        <div className="card-item">
          <h3>New Deal Submission</h3>
          <p>Create a new credit authorization</p>
          <div className="card-button-wrapper">
            <button className="card-button">{plus}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortalBody;

const plus = (
  <svg viewBox="0 0 24 24">
    <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
  </svg>
);
