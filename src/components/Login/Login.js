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
import styled from "styled-components";
import {
  blurEmail,
  blurPassword,
  validateEmail,
  validatePassword,
} from "../../actions/validateLogin-action";

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
  isValid: false,
};

const initialPasswordState = {
  value: "",
  isValid: false,
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
      if (emailState.isValid) {
        console.log("Email is valid now!");
      } else if (passwordState.isValid) {
        console.log("Password is valid now!");
      }
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 300);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailState.isValid, passwordState.isValid]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (formIsValid) {
      authCtx.onLogin();
    } else {
      alert(
        "Login Failed. Email must include @. Password must be more than 7 words."
      );
    }
  };

  const validateEmailHandler = (e) => {
    // emailState.value = e.target.value;
    console.log(e.target.value);
    dispatchEmail(validateEmail(e.target.value));
  };

  const validatePasswordHandler = (e) => {
    console.log(e.target.value);
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
      <h1>Login Now!</h1>
      <Form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          label="E-mail"
          id="email"
          type="text"
          onChange={validateEmailHandler}
          onBlur={blurEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          label="Password"
          id="password"
          type="password"
          onChange={validatePasswordHandler}
          onBlur={blurPasswordHandler}
        />
        <section>
          <button>Login</button>
        </section>
      </Form>
    </div>
  );
};

export default Login;
