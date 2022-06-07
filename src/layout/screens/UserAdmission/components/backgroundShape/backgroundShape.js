import React from "react";
import "./backgroundShape.css";
import { ReactComponent as BgShape } from "../../../../../assets/svgs/backgroundShape.svg";
const BackgroundShape = (props) => {
  return (
    <div className="bg-shape-wrapper">
      <BgShape />
    </div>
  );
};

export default BackgroundShape;
