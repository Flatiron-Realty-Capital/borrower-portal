import React from "react";
import FormInput from "../../shared/FormInput/FormInput";
// import "./TextField.css";
import { removeFormatting } from "../../../../../helpers/phoneNumber/removeFormatting";
import { formatPhoneNum } from "../../../../../helpers/phoneNumber/formatPhoneNumber";
import { VALIDATOR_REQUIRE } from "../../../../../helpers/validators/inputValidators";
import { PhoneOutlined } from "@mui/icons-material";
import {
  borrowerFormFieldNameTypes,
  genericFieldNameTypes,
} from "../../../../../global/formFieldNameTypes";
const PhoneNumber = (props) => {
  // const onChangeHandler = (e) => {
  //   let value = e.target.value;
  //   if (e.target.value.length <= 14) {
  //     dispatch(
  //       updateFormState({
  //         key: "phoneNumber",
  //         value: removeFormatting(value),
  //       })
  //     );
  //   }
  //   if (formState.phoneNumber.length === 9) {
  //     setShowError(false);
  //   }
  // };

  // const handleOnBlur = () => {
  //   console.log("Left Input");
  //   if (formState.phoneNumber.length !== 10) {
  //     setShowError(true);
  //   } else {
  //     setShowError(false);
  //   }
  // };
  return (
    <FormInput
      validate={[VALIDATOR_REQUIRE]}
      name={props.name ? props.name : genericFieldNameTypes.phoneNumber}
      label={props.label ? props.label : "Phone Number"}
      keyName={"phoneNumber"}
      icon={<PhoneOutlined />}
      ariaLabel={"Phone Number"}
      // value={formatPhoneNum(props.value)}

      {...props}
    />
  );
};

export default PhoneNumber;
