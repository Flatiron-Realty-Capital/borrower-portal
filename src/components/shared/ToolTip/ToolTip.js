import React, { useState } from "react";
import "./ToolTip.css";

const ToolTip = (props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      id=""
      className="tool-tip-wrapper"
    >
      {isActive && <div className="tool-tip">{props.text}</div>}
      {props.children}
    </div>
  );
};

export default ToolTip;
