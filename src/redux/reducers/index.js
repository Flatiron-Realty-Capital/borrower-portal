import formStateReducer from "./formStateReducer";
import isExistingUserReducer from "./isExistingUserReducer";
import formIsValidReducer from "./formIsValidReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  formState: formStateReducer,
  isExistingUser: isExistingUserReducer,
  formIsValid: formIsValidReducer,
});

export default rootReducer;
