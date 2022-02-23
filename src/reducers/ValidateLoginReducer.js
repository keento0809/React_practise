const ValidateLoginReducer = (state, action) => {
  switch (action.type) {
    case "EMAIL_INPUT":
      console.log(action.payload);
      return {
        value: action.payload,
        isValid: action.payload.includes("@"),
      };
    case "PASSWORD_INPUT":
      return {
        value: action.payload,
        isValid: action.payload.trim().length > 6,
      };
    case "EMAIL_BLUR":
      return {
        value: state.value,
        isValid: state.value.includes("@"),
      };
    case "PASSWORD_BLUR":
      return {
        value: state.value,
        isValid: state.value.trim().length > 6,
      };
    case "USER_IN":
      const newEmail = action.payload.email;
      console.log(newEmail);
      const newPassword = action.payload.password;
      return {
        ...state,
        email: newEmail,
        password: newPassword,
      };
  }
};

export default ValidateLoginReducer;
