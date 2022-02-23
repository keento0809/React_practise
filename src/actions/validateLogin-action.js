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

export const loginUserAct = (email, password) => {
  console.log("Login user act is working correctly........");
  return {
    type: "USER_IN",
    payload: { email, password },
  };
};

export const logoutUserAct = (email, password) => {
  console.log("Logout is now going on...");
  return {
    type: "USER_OUT",
    payload: { email, password },
  };
};
