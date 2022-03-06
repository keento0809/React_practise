import React, { useState } from "react";

const AddTask = (props) => {
  const [inputValue, setInputValue] = useState("");

  const changeInputValueHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted");
    props.onAddTask(inputValue);
  };

  return (
    <form onSubmit={submitHandler}>
      <input onChange={changeInputValueHandler} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTask;
