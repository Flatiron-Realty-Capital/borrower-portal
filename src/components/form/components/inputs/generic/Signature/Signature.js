import React from "react";
import FormField from "../../../shared/FormField/FormField";
import FormLabel from "../../../shared/FormLabel/FormLabel";
import SignatureCanvas from "react-signature-canvas";
import "./Signature.css";

const Signature = (props) => {
  return (
    <FormField id="form-signature">
      <FormLabel text="Signature" />
      <SignatureCanvas
        penColor="green"
        canvasProps={{ height: 200, className: "sigCanvas" }}
      />
    </FormField>
  );
};

export default Signature;
