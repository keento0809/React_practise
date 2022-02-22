import React, { useContext } from "react";
import AuthContext from "../../contexts/auth-context";
import FetchData from "./Fetch/FetchData";

const Home = (props) => {
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.onLogout();
    authCtx.userOut();
  };

  return (
    <div>
      <h1>Welcome!</h1>
      <h1>{authCtx.uerInfo}</h1>
      <button onClick={logoutHandler}>Logout</button>
      <FetchData />
    </div>
  );
};

export default Home;
