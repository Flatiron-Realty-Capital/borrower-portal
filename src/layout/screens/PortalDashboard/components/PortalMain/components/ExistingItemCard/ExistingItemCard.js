import React from "react";
import "./ExistingItemCard.css";

const ExistingItemCard = (props) => {
  return (
    <div className="new-card-item">
      <h3>
        {props.data.firstName} {props.data.lastName}
      </h3>
      <p>Submitted on: {props.data.submissionDate}</p>
      <p>Status: In Progress</p>
      <div className="card-button-wrapper">
        <button onClick={props.onClick} className="card-button">
          {/* <span className="title">Edit</span> */}
          <div className="icon-wrapper">{pencil}</div>
        </button>
      </div>
    </div>
  );
};

export default ExistingItemCard;
const pencil = (
  <svg viewBox="0 0 24 24">
    <path d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z"></path>
  </svg>
);
