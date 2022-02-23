const UserInfoReducer = (state, action) => {
  switch (action.type) {
    case "USER_IN":
      const newEmail = action.payload.email;
      const newPassword = action.payload.password;
      return {
        ...state,
        email: newEmail,
        password: newPassword,
      };
    case "USER_OUT":
      const resetEmail = "";
      const resetPassword = "";
      return {
        ...state,
        email: resetEmail,
        password: resetPassword,
      };
  }
};

export default UserInfoReducer;
