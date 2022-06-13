import { v4 as uuidv4 } from "uuid";

const formInitStat = {
  // id: uuidv4(),
  emailAddress: "",
  password: "",
};

const accountInfoReducer = (state = formInitStat, action) => {
  switch (action.type) {
    case "SET_ACCOUNT_INFO_STATE":
      return action.payload;
    case "UPDATE_ACCOUNT_INFO_STATE":
      let newState = { ...state };
      newState[action.payload.key] = action.payload.value;
      return newState;

    case "CLEAR_ACCOUNT_INFO_STATE":
      return formInitStat;

    default:
      return state;
  }
};

export default accountInfoReducer;
