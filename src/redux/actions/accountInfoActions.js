export const setAccountInfoState = (state) => {
  return {
    type: "SET_ACCOUNT_INFO_STATE",
    payload: state,
  };
};

export const updateAccountInfoState = (data) => {
  return {
    type: "UPDATE_ACCOUNT_INFO_STATE",
    payload: data,
  };
};

export const clearAccountInfoState = () => {
  return {
    type: "CLEAR_ACCOUNT_INFO_STATE",
  };
};
