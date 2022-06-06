export const setIsExistingUser = (bool) => {
  return {
    type: "SET_IS_EXISTING_USER",
    payload: bool,
  };
};
export const setIsExistingUserTrue = () => {
  return {
    type: "SET_IS_EXISTING_USER",
    payload: true,
  };
};
export const setIsExistingUserFalse = () => {
  return {
    type: "SET_IS_EXISTING_USER",
    payload: false,
  };
};
