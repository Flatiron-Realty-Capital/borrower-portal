import { v4 as uuidv4 } from "uuid";

const formInitStat = [
  {
    id: "1234",
    firstName: "John",
    lastName: "Smith",
    submissionDate: "5/12/22",
  },
];

const dealSubmissionsReducer = (state = formInitStat, action) => {
  switch (action.type) {
    case "SET_DEAL_SUBMISSIONS_STATE":
      return action.payload;
    case "UPDATE_DEAL_SUBMISSIONS_STATE":
      let newState = { ...state };
      newState[action.payload.key] = action.payload.value;
      return newState;

    case "CLEAR_DEAL_SUBMISSIONS_STATE":
      return formInitStat;

    default:
      return state;
  }
};

export default dealSubmissionsReducer;
