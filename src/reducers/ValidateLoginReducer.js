const ValidateLoginReducer = (state, action) => {
  switch (action.type) {
    case "EMAIL_INPUT":
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
  }
};

export default ValidateLoginReducer;
