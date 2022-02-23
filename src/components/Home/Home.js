import React, { useContext, useReducer } from "react";
import AuthContext from "../../contexts/auth-context";
import FetchData from "./Fetch/FetchData";

const initialState = {
  count: 0,
};

const PlusReducer = (state, action) => {
  switch (action.type) {
    case "COUNT_UP":
      console.log(action.payload);
      return { count: state.count + action.payload };
    default:
      break;
  }
};

const Home = (props) => {
  const authCtx = useContext(AuthContext);

  const [plusCount, dispatchCount] = useReducer(PlusReducer, initialState);

  const logoutHandler = () => {
    authCtx.onLogout();
    authCtx.userOut(authCtx.state.email, authCtx.state.password);
  };

  const countHandler = () => {
    dispatchCount({
      type: "COUNT_UP",
      payload: Math.floor(Math.random() * 20) + 1,
    });
  };

  return (
    <div>
      <h1>Welcome!</h1>
      <h1>{authCtx.state.email}</h1>
      <button onClick={logoutHandler}>Logout</button>
      <p>{plusCount.count}</p>
      <button onClick={countHandler}>PLUS</button>
      <FetchData />
    </div>
  );
};

export default Home;
