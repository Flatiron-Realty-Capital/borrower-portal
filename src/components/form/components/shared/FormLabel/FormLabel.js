import { InputLabel } from "@mui/material";
import React from "react";
import "./FormLabel.css";

const FormLabel = (props) => {
  return (
    <div id="" className="form-label">
      <InputLabel> {props.text} </InputLabel>
    </div>
  );
};

export default FormLabel;
