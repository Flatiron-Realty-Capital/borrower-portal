import { v4 as uuidv4 } from "uuid";

const formInitStat = {
  // id: uuidv4(),
  emailAddress: "",
  password: "",
};

const formStateReducer = (state = formInitStat, action) => {
  switch (action.type) {
    case "SET_FORM_STATE":
      return action.payload;
    case "UPDATE_FORM_STATE":
      let newState = { ...state };
      newState[action.payload.key] = action.payload.value;
      return newState;

    case "CLEAR_FORM_STATE":
      return formInitStat;

    default:
      return state;
  }
};

export default formStateReducer;
