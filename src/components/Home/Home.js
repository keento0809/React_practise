import React, { useContext } from "react";
import AuthContext from "../../contexts/auth-context";
import FetchData from "./Fetch/FetchData";

const Home = (props) => {
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.onLogout();
  };

  return (
    <div>
      <h1>Welcome!</h1>
      <button onClick={logoutHandler}>Logout</button>
      <FetchData />
    </div>
  );
};

// "https://react-http-5fce8-default-rtdb.firebaseio.com/movies.json"

export default Home;
