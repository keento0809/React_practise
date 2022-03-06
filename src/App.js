import React, { useContext } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import AuthContext from "./contexts/auth-context";
// import SecondHome from "./components/SecondHome/SecondHome";
import ForthHome from "./components/ForthHome/ForthHome";
import "./App.css";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="App">
      {authCtx.isLogin && <ForthHome />}
      {!authCtx.isLogin && <Login />}
      {/* <ForthHome /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
