import formStateReducer from "./formStateReducer";
import isExistingUserReducer from "./isExistingUserReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  formState: formStateReducer,
  isExistingUser: isExistingUserReducer,
});

export default rootReducer;
