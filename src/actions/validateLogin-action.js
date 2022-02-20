export const validateEmail = (value) => {
  return {
    type: "EMAIL_INPUT",
    payload: value,
  };
};

export const blurEmail = () => {
  return {
    type: "EMAIL_BLUR",
  };
};

export const validatePassword = (value) => {
  return {
    type: "PASSWORD_INPUT",
    payload: value,
  };
};

export const blurPassword = () => {
  return {
    type: "PASSWORD_BLUR",
  };
};
