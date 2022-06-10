import formStateReducer from "./formStateReducer";
import isExistingUserReducer from "./isExistingUserReducer";
import formIsValidReducer from "./formIsValidReducer";
import isLoggedInReducer from "./isLoggedInReducer";
import dealSubmissionsReducer from "./dealSubmissionsReducer";
import creditAuthorizationsReducer from "./creditAuthorizationsReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  formState: formStateReducer,
  isExistingUser: isExistingUserReducer,
  formIsValid: formIsValidReducer,
  isLoggedIn: isLoggedInReducer,
  dealSubmissions: dealSubmissionsReducer,
  creditAuthorizations: creditAuthorizationsReducer,
});

export default rootReducer;
