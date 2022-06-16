import { MenuItem, Select } from "@mui/material";
import React from "react";
import { Field } from "react-final-form";
import FormField from "../../../shared/FormField/FormField";
import FormLabel from "../../../shared/FormLabel/FormLabel";
import "./DobField.css";

const DobField = (props) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

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
    <FormField id="radio-field">
      <FormLabel text={props.label} />
      {props.options.map((o) => (
        <Field name={props.name} component="input" type="radio" value={o}>
          {({ input, meta }) => (
            <Select
              id="month"
              className="custom-select month"
              {...input}
              // value={value}
              // onChange={handleChange}
            >
              <MenuItem disabled value="">
                <em>Month</em>
              </MenuItem>

              {months.map((month) => (
                <MenuItem value={month}>{month}</MenuItem>
              ))}
            </Select>
          )}
        </Field>
      ))}
    </FormField>
  );
};

export default DobField;
