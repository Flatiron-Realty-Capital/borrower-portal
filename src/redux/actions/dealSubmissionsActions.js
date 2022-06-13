export const setDealSubmissionsState = (state) => {
  return {
    type: "SET_DEAL_SUBMISSIONS_STATE",
    payload: state,
  };
};

export const updateDealSubmissionsState = (data) => {
  return {
    type: "UPDATE_DEAL_SUBMISSIONS_STATE",
    payload: data,
  };
};

export const clearDealSubmissionsState = () => {
  return {
    type: "CLEAR_DEAL_SUBMISSIONS_STATE",
  };
};
