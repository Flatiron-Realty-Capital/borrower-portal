const isExistingUser = (state = true, action) => {
  switch (action.type) {
    case "SET_IS_EXISTING_USER":
      return action.payload;

    default:
      return state;
  }
};

export default isExistingUser;
