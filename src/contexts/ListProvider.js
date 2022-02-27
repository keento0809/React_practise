import React, { useReducer } from "react";
import ListContext from "./list-context";
import {
  addTask,
  editTask,
  updateTask,
  removeTask,
} from "../actions/list-action";
import TodoReducer from "../reducers/TodoReducer";

const testDummy = [
  { id: "t1", text: "Wash my car" },
  { id: "t2", text: "Buy a car" },
  { id: "t3", text: "Sell a car" },
  { id: "t4", text: "Crash a car" },
];

const initialState = {
  items: testDummy,
  totalTask: testDummy.length,
};

const ListProvider = (props) => {
  const [listState, dispatchAction] = useReducer(TodoReducer, initialState);

  const addTaskHandler = (item) => {
    dispatchAction(addTask(item));
  };

  const editTaskHandler = (item) => {
    dispatchAction(editTask(item));
  };

  const updateTaskHandler = (item) => {
    dispatchAction(updateTask(item));
  };

  const removeTaskHandler = (item) => {
    dispatchAction(removeTask(item));
  };

  const listContext = {
    items: listState.items,
    totalTask: listState.totalTask,
    addTask: addTaskHandler,
    EditTask: editTaskHandler,
    updateTask: updateTaskHandler,
    removeTask: removeTaskHandler,
  };

  return (
    <ListContext.Provider value={listContext}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListProvider;
