export const setDealSubmissionsState = (state) => {
  return {
    type: "SET_CREDIT_AUTH_STATE",
    payload: state,
  };
};

export const updateDealSubmissionsState = (data) => {
  return {
    type: "UPDATE_CREDIT_AUTH_STATE",
    payload: data,
  };
};

export const clearDealSubmissionsState = () => {
  return {
    type: "CLEAR_CREDIT_AUTH_STATE",
  };
};
