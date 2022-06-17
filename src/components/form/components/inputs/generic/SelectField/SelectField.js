import React, { useEffect, useState } from "react";
import { MenuItem, Select } from "@mui/material";
// import { Field, useFormState } from "react-final-form";
import { ReactComponent as SelectArrow } from "../../../../../../assets/svgs/downTriange.svg";
import FormField from "../../../shared/FormField/FormField";
// import { Select } from "final-form-material-ui";
import { Field } from "react-final-form";
// import { Select } from "final-form-material-ui";
// import MenuItem from "@material-ui/core/MenuItem";

import FormLabel from "../../../shared/FormLabel/FormLabel";
import SelectInput from "@material-ui/core/Select/SelectInput";
// import { Menu } from "@material-ui/core";
import "./SelectField.css";
// SelectInput

const SelectField = (props) => {
  const [isActive, setIsActive] = useState("");
  const handleChange = (e) => {
    console.log("Change");
    let val = e.target.value;
    setIsActive(true);
    // props.onChange(val);
    // props.handleSelectChange();
  };

  const childrenContent = props.children;

  const selectOptions = (
    <>
      <option disabled selected value={""}>
        {props.defaultValue}
      </option>
      {props.items &&
        props.items.map((item) => <option value={item}>{item}</option>)}
    </>
  );

  const ReactSelectAdapter = ({ input, ...rest }) => (
    <Select {...input} {...rest} searchable />
  );

  return (
    <FormField noMargin={props.noMargin} id="select-field">
      {/* <FormLabel className="select-label" label={props.label} /> */}
      <div className="select-wrapper">
        <Field
          onClick={() => setIsActive((s) => !s)}
          onBlur={() => setIsActive(false)}
          name={props.name}
          validate={props.validate}
          type="select"
          component="select"
          render={() => selectOptions}
          children={props.children}
        >
          {props.children ? (
            props.children
          ) : (
            <>
              <option disabled selected value={""}>
                {props.defaultValue}
              </option>
              {props.items &&
                props.items.map((item) => <option value={item}>{item}</option>)}
            </>
          )}

          {/* {({ input, meta }) => (
            <>
              {props.children ? props.children : selectOptions}
              <fieldset></fieldset>
              <div className={`arrow-wrapper ${isActive && "active"}`}>
                {<SelectArrow />}
              </div>
            </>
          )} */}
        </Field>
        <fieldset></fieldset>
        <div className={`arrow-wrapper ${isActive && "active"}`}>
          {<SelectArrow />}
        </div>
      </div>
    </FormField>
  );
};

export default SelectField;
