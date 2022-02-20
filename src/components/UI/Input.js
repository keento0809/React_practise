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
    padding: 0.32rem 0.32rem;
  }
`;

const Input = React.forwardRef((props, ref) => {
  return (
    <InputStyle>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={ref}
        id={props.id}
        type={props.type}
        // isValid={}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </InputStyle>
  );
});

export default Input;
