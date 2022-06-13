import { InputLabel } from "@mui/material";
import React from "react";
import "./FormLabel.css";

const FormLabel = (props) => {
  return (
    <div id="" className="form-label">
      <InputLabel sx={{ fontSize: ".8rem", fontWeight: 600, opacity: ".8" }}>
        {" "}
        {props.text}{" "}
      </InputLabel>
    </div>
  );
};

export default FormLabel;
