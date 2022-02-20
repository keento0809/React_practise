import React from "react";
import styled from "styled-components";

const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & label,
  & input {
    display: block;
    width: 100%;
    max-width: 300px;
  }

  & label {
    padding: 1rem 0;
  }

  & input {
    outline: none;
    padding: 0.32rem 0.32rem;
    border: 3px solid grey;
  }

  & input:focus {
    background: #ffc9ff;
    border-color: purple;
  }

  &.invalid input {
    background: pink;
    border-color: red;
  }
`;

const Input = React.forwardRef((props, ref) => {
  return (
    <InputStyle className={`${props.onIsValid === false ? "invalid" : ""}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={ref}
        id={props.id}
        type={props.type}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </InputStyle>
  );
});

export default Input;
