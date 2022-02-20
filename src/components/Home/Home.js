import React, { useContext } from "react";
import AuthContext from "../../contexts/auth-context";

const Home = (props) => {
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.onLogout();
  };

  return (
    <div>
      <h1>Welcome!</h1>
      {/* <span>aaa!</span> */}
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Home;
