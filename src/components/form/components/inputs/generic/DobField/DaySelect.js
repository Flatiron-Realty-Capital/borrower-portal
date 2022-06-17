import { MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import FormField from "../../../shared/FormField/FormField";
import { Field } from "react-final-form";
const DaySelect = (props) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    let val = e.target.value;
    setValue(val);
    props.onChange(val);
    // props.handleSelectChange();
  };

  let daysInMonths = {
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
  };

  return (
    <FormField noMargin id="select-field">
      {/* <FormLabel className="select-label" label={props.label} /> */}
      <div className="select-wrapper">
        <Field name="day" type="select" component="select">
          {[...Array(daysInMonths[props.month || "January"])].map((item, i) => (
            <option value={item}>{i}</option>
            // <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Field>
        <fieldset></fieldset>
      </div>
    </FormField>
  );
};

export default DaySelect;
