import { MenuItem, Select } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Field, useFormState } from "react-final-form";
import { genericFieldNameTypes } from "../../../../../../global/formFieldNameTypes";
import { VALIDATOR_REQUIRE } from "../../../../../../helpers/validators/inputValidators";
import Columns from "../../../../../shared/Columns/Columns";
import FormField from "../../../shared/FormField/FormField";
import FormLabel from "../../../shared/FormLabel/FormLabel";
import SelectField from "../SelectField/SelectField";
import TextField from "../TextField";
import DaySelect from "./DaySelect";
// import "./DobField.css";

const DobField = (props) => {
  const [selectedMonth, setSelectedMonth] = useState("");

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
  const { values } = useFormState();
  return (
    <FormField id="radio-field">
      <FormLabel label={"Date of Birth"} />

      <Columns>
        <SelectField
          validate={VALIDATOR_REQUIRE}
          name={genericFieldNameTypes.dobMonth}
          noMargin
          items={months}
          defaultValue="Select Month"
        />
        <SelectField
          validate={VALIDATOR_REQUIRE}
          defaultValue="Select Day"
          name={genericFieldNameTypes.dobDay}
          noMargin
        >
          {[
            ...Array(
              daysInMonths[values[genericFieldNameTypes.dobMonth] || "January"]
            ),
          ].map((item, i) => (
            <option value={item}>{i}</option>
          ))}
        </SelectField>

        <TextField
          validate={VALIDATOR_REQUIRE}
          noMargin
          name="yearBorn"
          label="Year"
        />
      </Columns>
    </FormField>
  );
};

export default DobField;
