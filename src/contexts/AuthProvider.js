import React, { useState, useReducer } from "react";
import { loginUserAct, logoutUserAct } from "../actions/validateLogin-action";
import ValidateLoginReducer from "../reducers/ValidateLoginReducer";
import UserInfoReducer from "../reducers/ValidateLoginReducer";
import AuthContext from "./auth-context";

const initialUserInfo = {
  email: "あああ",
  password: "iii",
};

console.log(UserInfoReducer);

const AuthProvider = (props) => {
  console.log(initialUserInfo);

  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, dispatchUserInfo] = useReducer(
    UserInfoReducer,
    initialUserInfo
  );

  const loginHandler = () => {
    setIsLogin(true);
  };

  const logoutHandler = (email, password) => {
    setIsLogin(false);
    dispatchUserInfo(logoutUserAct(email, password));
  };

  const loginUserHandler = (email, password) => {
    console.log("Dispatch userInfo is working +++++++++++");
    dispatchUserInfo(loginUserAct(email, password));
  };

  const logoutUserHandler = () => {
    console.log("User out ~~!!");
  };

  const authContext = {
    onLogin: loginHandler,
    onLogout: logoutHandler,
    userIn: loginUserHandler,
    userOut: logoutUserHandler,
    state: userInfo,
    // email: emailState2,
    // password: passwordState2,
    isLogin: isLogin,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
