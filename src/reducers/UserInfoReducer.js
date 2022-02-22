const UserInfoReducer = (state, action) => {
  switch (action.type) {
    case "USER_IN":
      console.log("Whyyyyyy!!!");
      return {
        email: { ...state.email, email: action.payload.email },
        password: { ...state.password, password: action.payload.password },
      };
    default:
      console.log("WTF");
      break;
  }
};

export default UserInfoReducer;
