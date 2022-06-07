import formStateReducer from "./formStateReducer";
import isExistingUserReducer from "./isExistingUserReducer";
import formIsValidReducer from "./formIsValidReducer";
import isLoggedInReducer from "./isLoggedInReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  formState: formStateReducer,
  isExistingUser: isExistingUserReducer,
  formIsValid: formIsValidReducer,
  isLoggedIn: isLoggedInReducer,
});

export default rootReducer;
