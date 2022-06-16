import React from "react";
import FormField from "../../../shared/FormField/FormField";
import { Field } from "react-final-form";
// import { Radio } from "final-form-material-ui";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useFormState } from "react-final-form";
import FormLabel from "../../../shared/FormLabel/FormLabel";
import "./RadioField.css";

const RadioField = (props) => {
  const { values } = useFormState();
  return (
    <FormField id="radio-field">
      <FormLabel text={props.label} />
      {props.options.map((o) => (
        <Field name={props.name} component="input" type="radio" value={o}>
          {({ input, meta }) => (
            <FormControlLabel
              control={
                <Radio
                  sx={{
                    fontSize: ".2rem",
                    fontWeight: 600,
                  }}
                  size="small"
                  {...input}
                />
              }
              label={o}
            />
          )}
        </Field>
      ))}
    </FormField>
  );
};

export default RadioField;

{
  /* <Field
  initialValue={props.value || ""}
  name={props.name}
  validate={props.validate}
></Field>; */
}
