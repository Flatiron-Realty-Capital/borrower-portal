import React from "react";
import "./FormGroup.css";

const FormGroup = (props) => {
  return (
    <div id="" className="form-group">
      {props.children}
    </div>
  );
};

export default FormGroup;
