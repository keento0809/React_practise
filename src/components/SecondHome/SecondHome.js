import React, { useState, useContext } from "react";
import AuthContext from "../../contexts/auth-context";
import List from "./List/List";
import SecondModal from "./SecondModal";
import ListProvider from "../../contexts/ListProvider";
import ListContext from "../../contexts/list-context";

const SecondHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState();
  const [selectedTaskText, setSelectedTaskText] = useState("");
  const authCtx = useContext(AuthContext);
  const listCtx = useContext(ListContext);

  const logoutHandler = () => {
    authCtx.onLogout();
    authCtx.userOut(authCtx.state.email, authCtx.state.password);
  };

  const openModalHandler = (task) => {
    const selectedItemId = task.id;
    const selectedItemText = task.text;
    console.log(selectedItemText);
    setIsModalOpen(true);
    setSelectedTaskId(selectedItemId);
    setSelectedTaskText(selectedItemText);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <ListProvider>
      {isModalOpen && (
        <SecondModal
          onClose={closeModalHandler}
          selectedTaskId={selectedTaskId}
          selectedTaskText={selectedTaskText}
        />
      )}
      <p>Welcome! {authCtx.state.email}</p>
      <button onClick={logoutHandler}>Logout</button>
      <List onOpen={openModalHandler} onClose={closeModalHandler} />
    </ListProvider>
  );
};

export default SecondHome;
