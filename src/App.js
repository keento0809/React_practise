import React from "react";
import Home from "./components/Home/Home";
// import Login from "./components/Login/Login";
// import AuthContext from "./contexts/auth-context";
// import SecondHome from "./components/SecondHome/SecondHome";
import ThirdHome from "./components/ThirdHome/ThirdHome";
import "./App.css";

function App() {
  // const authCtx = useContext(AuthContext);

  return (
    <div className="App">
      {/* {authCtx.isLogin && <ThirdHome />}
      {!authCtx.isLogin && <Login />} */}
      <ThirdHome />
      <Home />
    </div>
  );
}

export default App;
