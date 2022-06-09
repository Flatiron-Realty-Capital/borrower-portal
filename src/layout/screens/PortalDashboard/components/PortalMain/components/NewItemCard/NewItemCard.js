import React from "react";
import "./NewItemCard.css";

const NewItemCard = (props) => {
  return (
    <div className="new-card-item">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div className="card-button-wrapper">
        <button onClick={props.onClick} className="card-button">
          <span className="title">Create New</span>
          <div className="icon-wrapper">{plus}</div>
        </button>
      </div>
    </div>
  );
};

export default NewItemCard;
const plus = (
  <svg viewBox="0 0 24 24">
    <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
  </svg>
);
