import React, { useEffect, useState } from "react";
import { MenuItem, Select } from "@mui/material";
import { Field, useFormState } from "react-final-form";
import FormField from "../../../shared/FormField/FormField";
import FormLabel from "../../../shared/FormLabel/FormLabel";
// import "./SelectField.css";

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
    <FormField id="select-field">
      <FormLabel text={props.label} />s
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
      {/*       
      <Field name={props.name} component="select" value={values[props.name]}>
        {({ input, meta }) => (
          <Select
            id="month"
            className="custom-select month"
            {...input}
            fullWidth
            size="small"
            value={values[props.name]}
            // onChange={handleChange}
          >
            <MenuItem value={"month"}>{"month"}</MenuItem>
            <MenuItem value={"month"}>{"month"}</MenuItem>
            <MenuItem value={"month"}>{"month"}</MenuItem>
          </Select>
        )}
      </Field> */}
      {/* <Field name="favoriteColor" component="select">
        <option />
        <option value="#ff0000">❤️ Red</option>
        <option value="#00ff00">💚 Green</option>
        <option value="#0000ff">💙 Blue</option>
      </Field> */}
      <Field name="favoriteColor" component={selectComponent} />
    </FormField>
  );
};

const selectComponent = () => {
  return (
    <Select
      id="month"
      className="custom-select month"
      // {...input}
      fullWidth
      size="small"

      // value={values[props.name]}
    >
      <MenuItem value={"month"}>{"month"}</MenuItem>
      <MenuItem value={"month"}>{"month"}</MenuItem>
      <MenuItem value={"month"}>{"month"}</MenuItem>
    </Select>
  );
};

export default SelectField;
