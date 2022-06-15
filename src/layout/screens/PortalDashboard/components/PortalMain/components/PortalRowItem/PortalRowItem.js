import React from "react";
import "./PortalRowItem.css";
import { ReactComponent as Add } from "../../../../../../../assets/svgs/addToQueue.svg";
import { ReactComponent as Share } from "../../../../../../../assets/svgs/shareFilled.svg";
import ToolTip from "../../../../../../../components/shared/ToolTip/ToolTip";

const PortalRowItem = (props) => {
  return (
    <div id="portal-row-item">
      <div className="row-item__title">
        <h2>{props.title}</h2>
        <div className="button-container">
          <ToolTip text="New Credit Authorization">
            <button onClick={props.addNewOnClick} className="add-new">
              <div className="icon-wrapper">{<Add />}</div>
            </button>
          </ToolTip>
          <ToolTip text="Share Form">
            <button onClick={props.shareOnClick} className="add-new">
              <div className="icon-wrapper">{<Share />}</div>
            </button>
          </ToolTip>
        </div>
      </div>
      <div className="row-item__body">{props.children}</div>
    </div>
  );
};

export default PortalRowItem;
