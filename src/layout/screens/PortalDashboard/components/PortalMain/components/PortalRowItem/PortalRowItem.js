import React from "react";
import "./PortalRowItem.css";

const PortalRowItem = (props) => {
  return (
    <div id="portal-row-item">
      <div className="row-item__title">
        <h2>{props.title}</h2>
        <button className="add-new">
          <span>Add New</span>
          <div className="icon-wrapper">{plus}</div>
        </button>
      </div>
      <div className="row-item__body">{props.children}</div>
    </div>
  );
};

export default PortalRowItem;
const plus = (
  <svg viewBox="0 0 24 24">
    <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
  </svg>
);
