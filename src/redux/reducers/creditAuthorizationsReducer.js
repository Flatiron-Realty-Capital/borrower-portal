import { v4 as uuidv4 } from "uuid";

const formInitStat = [];

const creditAuthorizationsReducer = (state = formInitStat, action) => {
  switch (action.type) {
    case "SET_CREDIT_AUTH_STATE":
      return action.payload;
    case "UPDATE_CREDIT_AUTH_STATE":
      let newState = { ...state };
      newState[action.payload.key] = action.payload.value;
      return newState;
    case "ADD_CREDIT_AUTH":
      return [...state, action.payload];

    case "CLEAR_CREDIT_AUTH_STATE":
      return formInitStat;

    default:
      return state;
  }
};

export default creditAuthorizationsReducer;
