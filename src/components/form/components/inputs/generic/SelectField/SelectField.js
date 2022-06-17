import React, { useEffect, useState } from "react";
import { MenuItem } from "@mui/material";
// import { Field, useFormState } from "react-final-form";
import FormField from "../../../shared/FormField/FormField";
// import { Select } from "final-form-material-ui";
import { Field } from "react-final-form";
import { Select } from "final-form-material-ui";
// import MenuItem from "@material-ui/core/MenuItem";

import FormLabel from "../../../shared/FormLabel/FormLabel";
import SelectInput from "@material-ui/core/Select/SelectInput";
// import { Menu } from "@material-ui/core";
import "./SelectField.css";
// SelectInput

const SelectField = (props) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    console.log("Change");
    let val = e.target.value;
    setValue(val);
    // props.onChange(val);
    // props.handleSelectChange();
  };

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

  // const { values } = useFormState();

  return (
    <FormField noMargin={props.noMargin} id="select-field">
      {/* <FormLabel className="select-label" label={props.label} /> */}
      <div className="select-wrapper">
        <Field c name="favoriteColor" type="select" component="select">
          {props.items.map((item) => (
            <option value={item}>{item}</option>
            // <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Field>
        <fieldset></fieldset>
      </div>
      {/* <Select
        id="month"
        className="custom-select month"
        value={value}
        displayEmpty
        onChange={handleChange}
      >
        <MenuItem disabled value="">
          <em>Month</em>
        </MenuItem>

        {months.map((month) => (
          <MenuItem value={month}>{month}</MenuItem>
        ))}
      </Select> */}
      {/* <Select
        id="month"
        className="custom-select month"
        fullWidth
        size="small"
        value={value}
        onChange={handleChange}
      >
        <MenuItem value={"months"}>"monath"</MenuItem>
        <MenuItem value={"monthg"}>"mongth"</MenuItem>
        <MenuItem value={"monthc"}>"mhonth"</MenuItem>
      </Select> */}
      {/* <Field name={props.name} component={Select} multiple>
        {months.map((month) => (
          <span>sd</span>
          // <MenuItem value={month}>{month}</MenuItem>
        ))}
      </Field> */}
      {/* <Field name={props.name} component="select" value={"values[props.name]"}>
        {(props) => (
          <Select
            id="month"
            className="custom-select month"
            fullWidth
            size="small"
            value={"values[props.name]"}
            // onChange={handleChange}
          >
            <MenuItem value={"month"}>{"month"}</MenuItem>
            <MenuItem value={"month"}>{"month"}</MenuItem>
            <MenuItem value={"month"}>{"month"}</MenuItem>
          </Select>
        )}
      </Field> */}
    </FormField>
  );
};

export default SelectField;
