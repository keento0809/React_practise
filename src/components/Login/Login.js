import React, {
  useState,
  useRef,
  useContext,
  useReducer,
  useEffect,
} from "react";
import Input from "../UI/Input";
import AuthContext from "../../contexts/auth-context";
import ValidateLoginReducer from "../../reducers/ValidateLoginReducer";
import {
  blurEmail,
  blurPassword,
  validateEmail,
  validatePassword,
} from "../../actions/validateLogin-action";
import styled from "styled-components";
import Button from "@mui/material/Button";

const Form = styled.form`
  text-align: center;

  & section {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const initialEmailState = {
  value: "",
  isValid: null,
};

const initialPasswordState = {
  value: "",
  isValid: null,
};

const Login = (props) => {
  const authCtx = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(
    ValidateLoginReducer,
    initialEmailState
  );
  const [passwordState, dispatchPassword] = useReducer(
    ValidateLoginReducer,
    initialPasswordState
  );

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    const identifier = setTimeout(() => {
      // console.log("Checking form validity!");
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 300);

    return () => {
      // console.log("cleanup!");
      clearTimeout(identifier);
    };
  }, [emailState.isValid, passwordState.isValid]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (formIsValid) {
      authCtx.userIn(emailState.value, passwordState.value);
      authCtx.onLogin();
      // authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailState.isValid) {
      emailInputRef.current.focus();
      alert("Email is invalid! Please try again.");
    } else {
      passwordInputRef.current.focus();
      alert("Password is invalid! Please try again.");
    }
  };

  const validateEmailHandler = (e) => {
    // emailState.value = e.target.value;
    // console.log(e.target.value);
    dispatchEmail(validateEmail(e.target.value));
  };

  const validatePasswordHandler = (e) => {
    // console.log(e.target.value);
    dispatchPassword(validatePassword(e.target.value));
  };

  const blurEmailHandler = () => {
    dispatchEmail(blurEmail());
  };

  const blurPasswordHandler = () => {
    dispatchPassword(blurPassword());
  };

  return (
    <div>
      {/* <h1>Login Now!</h1> */}
      <Form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          label="E-mail"
          id="email"
          type="text"
          onIsValid={emailState.isValid}
          onChange={validateEmailHandler}
          onBlur={blurEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          label="Password"
          id="password"
          type="password"
          onIsValid={passwordState.isValid}
          onChange={validatePasswordHandler}
          onBlur={blurPasswordHandler}
        />
        <section>
          <button>Login</button>
        </section>
        <Button>MUI</Button>
      </Form>
    </div>
  );
};

export default Login;
