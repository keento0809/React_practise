import React, { useState } from "react";
import styled from "styled-components";

const FormStyle = styled.form`
  & input {
    outline: none;
    border: 2px solid #000;
  }

  & p {
    color: red;
  }

  & input.invalid {
    background: pink;
    border-color: red;
  }
`;

const ForthTaskForm = (props) => {
  const [taskInput, setTaskInput] = useState("");
  const [isTaskInputTouched, setIsTaskInputTouched] = useState(false);

  const taskInputChangeHandler = (e) => {
    setTaskInput(e.target.value);
  };

  const taskInputBlurHandler = () => {
    setIsTaskInputTouched(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!isTaskInputValid) {
      return;
    }
    props.onEnterTask(taskInput);

    setTaskInput("");
    setIsTaskInputTouched(false);
  };

  const isTaskInputValid = taskInput.trim().length > 0;
  const taskInputIsInvalid = !isTaskInputValid && isTaskInputTouched;

  const inputClassName = taskInputIsInvalid ? "invalid" : "";

  return (
    <FormStyle onSubmit={submitHandler}>
      <input
        className={inputClassName}
        type="text"
        onChange={taskInputChangeHandler}
        onBlur={taskInputBlurHandler}
      />
      <button>Add</button>
      {taskInputIsInvalid && <p>Invalid. Task must be at least one letter.</p>}
    </FormStyle>
  );
};

export default ForthTaskForm;
