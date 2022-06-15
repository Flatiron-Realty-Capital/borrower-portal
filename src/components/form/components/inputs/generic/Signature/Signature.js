import React from "react";
import { useState } from "react";
import FormField from "../../../shared/FormField/FormField";
import FormLabel from "../../../shared/FormLabel/FormLabel";
import SignatureCanvas from "react-signature-canvas";
import { useDispatch, useSelector } from "react-redux";
import "./Signature.css";
import { useRef } from "react";
import { updateFormState } from "../../../../../../redux/actions/formStateActions";
import { Field } from "react-final-form";
import { OutlinedInput } from "@mui/material";

const Signature = (props) => {
  const [signature, setSignature] = useState("s");
  const sigRef = useRef(null);
  const dispatch = useDispatch();

  return (
    <FormField id="form-signature">
      <Field name={props.name} {...props} component={SignatureInput} />
      <Field
        name={props.name}
        subscribe={{ touched: true, error: true }}
        render={({ meta: { touched, error } }) =>
          touched && error ? <span>{error}</span> : null
        }
      />
      {/* <Field
        initialValue={props.value || ""}
        name={props.name}
        validate={props.validate}
        value={signature}
      >
        {({ input, meta }) => (
          <>
            <OutlinedInput
              fullWidth
              sx={{ display: "none" }}
              value={signature}
              isRequired
              {...input}
            />
            <FormLabel text={props.label} />
            <SignatureCanvas
              penColor="#235685"
              ref={sigRef}
              onEnd={trimHandler}
              canvasProps={{ height: 200, className: "sigCanvas" }}
            />
          </>
        )}
      </Field> */}
    </FormField>
  );
};
function SignatureInput({ required, input, ...props }) {
  const [signature, setSignature] = useState("s");
  const sigRef = useRef(null);

  const trimHandler = () => {
    let sig = sigRef.current.getTrimmedCanvas().toDataURL("image/png");
    console.log("handler", sig);
    input.onChange(sig);
    setSignature(sig);
    // dispatch(updateFormState({ key: props.name, value: sig }));
  };
  return (
    <>
      <FormLabel text={props.label} />
      <SignatureCanvas
        penColor="#235685"
        ref={sigRef}
        onEnd={trimHandler}
        canvasProps={{ height: 150, className: "sigCanvas" }}
        {...props}
      />
    </>
  );
}
export default Signature;
