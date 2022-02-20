import React, { useState } from "react";
import AuthContext from "./auth-context";

const AuthProvider = (props) => {
  const [isLogin, setIsLogin] = useState(false);

  const loginHandler = () => {
    console.log("Log in now!");
    setIsLogin(true);
  };

  const logoutHandler = () => {
    console.log("Log out now!");
    setIsLogin(false);
  };

  const authContext = {
    onLogin: loginHandler,
    onLogout: logoutHandler,
    isLogin: isLogin,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
