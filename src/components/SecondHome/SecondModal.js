import React from "react";
import Modal from "../UI/Modal";
import styled from "styled-components";

const HasSpace = styled.div`
  display: block;
  padding: 2rem 0;

  & input {
    outline: none;
    border: 2px solid #000;
  }
`;

const SecondModal = (props) => {
  console.log(props.selectedTaskText);

  const trackInputHandler = (e) => {
    console.log(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit success!");
    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={submitHandler}>
        <h3>Edit Your Task</h3>
        <p>{props.selectedTaskId}</p>
        <HasSpace>
          <input
            defaultValue={props.selectedTaskText}
            onChange={trackInputHandler}
          />
        </HasSpace>
        <button onClick={props.onClose}>Close</button>
        <button>UPDATE</button>
      </form>
    </Modal>
  );
};

export default SecondModal;
