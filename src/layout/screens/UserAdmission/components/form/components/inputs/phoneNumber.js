import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Phone, PhoneOutlined } from "@mui/icons-material";
import { updateFormState } from "../../../../../../../redux/actions/formStateActions";
import { removeFormatting } from "../../../../../../../helpers/phoneNumber/removeFormatting";
import { formatPhoneNum } from "../../../../../../../helpers/phoneNumber/formatPhoneNumber";
import Input from "../../../../../../../components/input";

const PhoneNumber = (props) => {
  const [showError, setShowError] = useState(false);
  const formState = useSelector((state) => state.formState);
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    let value = e.target.value;
    if (e.target.value.length <= 14) {
      dispatch(
        updateFormState({
          key: "phoneNumber",
          value: removeFormatting(value),
        })
      );
    }
    if (formState.phoneNumber.length === 9) {
      setShowError(false);
    }
  };

  const handleOnBlur = () => {
    console.log("Left Input");
    if (formState.phoneNumber.length !== 10) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  };
  return (
    <Input
      keyName={"phoneNumber"}
      value={formatPhoneNum(formState.phoneNumber)}
      icon={<PhoneOutlined />}
      label={"Phone Number"}
      onChange={onChangeHandler}
      ariaLabel={"Phone Number"}
      onBlur={handleOnBlur}
      showError={showError}
    />
  );
};

export default PhoneNumber;
