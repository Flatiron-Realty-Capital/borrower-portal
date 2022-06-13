import React from "react";
import { Form as FinalForm, Field } from "react-final-form";
import { useDispatch } from "react-redux";
import { setFormState } from "../../redux/actions/formStateActions";
import FormSubmitButton from "./components/shared/FormSubmitButton/FormSubmitButton";
// import "./Form.css";

const Form = (props) => {
  const dispatch = useDispatch();
  const handleSubmit = (formObj) => {
    console.log("formObj", formObj);

    if (props.onClick) {
      console.log("Custom on Click");
      props.onClick(formObj);
      return;
    }
    // dispatch(setFormState(formObj));
  };
  return (
    <FinalForm
      id={props.id}
      initialValues={props.initialValues || undefined}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, form, values }) => (
        <form onSubmit={handleSubmit}>
          {props.children}
          {!props.hideButton && (
            <FormSubmitButton text={props.submitButtonText || "Submit"} />
          )}
        </form>
      )}
    </FinalForm>
  );
};

export default Form;
