import React, { useRef, useContext } from "react";
import Input from "../UI/Input";
import AuthContext from "../../contexts/auth-context";
import styled from "styled-components";

const Form = styled.form`
  text-align: center;

  & section {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Login = (props) => {
  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    authCtx.onLogin();
  };

  return (
    <div>
      <h1>Login Now!</h1>
      <Form onSubmit={submitHandler}>
        <Input ref={emailInputRef} label="E-mail" id="email" />
        <Input ref={passwordInputRef} label="Password" id="password" />
        <section>
          <button>Login</button>
        </section>
      </Form>
    </div>
  );
};

export default Login;
