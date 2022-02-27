import React, { Fragment, useContext } from "react";
import ListContext from "../../../contexts/list-context";

const dummy = [
  { id: "t1", text: "Wash my car" },
  { id: "t2", text: "Buy a car" },
  { id: "t3", text: "Sell a car" },
];

const List = (props) => {
  const listCtx = useContext(ListContext);
  console.log(listCtx.items[0]);

  const dummyList = dummy.map((task, index) => {
    return (
      <li key={index}>
        <p>{task.id}</p>
        <p>{task.text}</p>
        <button onClick={props.onOpen} id={props.id}>
          Edit
        </button>
        <button onClick={props.onClose}>Hide</button>
        <button onClick={props.onClose}>Delete</button>
      </li>
    );
  });

  const startEditTaskHandler = (task) => {
    props.onOpen(task);
    console.log("?????????????");
  };

  const newTaskList = listCtx.items.map((task, index) => {
    return (
      <li key={index}>
        <p>{task.id}</p>
        <p>{task.text}</p>
        <button onClick={startEditTaskHandler.bind(null, task)}>Edit</button>
        <button onClick={props.onClose}>Hide</button>
        <button onClick={props.onClose}>Delete</button>
      </li>
    );
  });

  return (
    <Fragment>
      <ul>
        <p>Your have {listCtx.totalTask} tasks left.</p>
        {newTaskList}
      </ul>
    </Fragment>
  );
};

export default List;
