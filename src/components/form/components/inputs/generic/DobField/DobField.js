import { MenuItem, Select } from "@mui/material";
import React from "react";
import { Field } from "react-final-form";
import Columns from "../../../../../shared/Columns/Columns";
import FormField from "../../../shared/FormField/FormField";
import FormLabel from "../../../shared/FormLabel/FormLabel";
import SelectField from "../SelectField/SelectField";
import TextField from "../TextField";
import DaySelect from "./DaySelect";
// import "./DobField.css";

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
      <FormLabel label={"Date of Birth"} />

      <Columns>
        <SelectField
          name="months"
          label="Months"
          noMargin
          items={[
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
          ]}
        />
        <DaySelect />
        <TextField noMargin name="yearBorn" label="Year" />
      </Columns>
    </FormField>
  );
};

export default DobField;
