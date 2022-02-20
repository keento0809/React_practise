import React, { useContext } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import AuthContext from "./contexts/auth-context";
import "./App.css";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="App">
      {authCtx.isLogin && <Home />}
      {!authCtx.isLogin && <Login />}
    </div>
  );
}

export default App;
