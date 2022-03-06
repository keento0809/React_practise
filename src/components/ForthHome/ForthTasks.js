import React from "react";
import styled from "styled-components";

const TaskListStyle = styled.ul`
  list-style: none;
  text-align: center;
  width: 90%;
  margin: 0 auto;
  padding-left: 0;
  padding-top: 1rem;

  & li {
    padding: 0.5rem 1.5rem;
    border: 2px solid #ccc;
    margin-bottom: 0.5rem;
  }
`;

const ForthTasks = (props) => {
  const tasks = props.tasks.map((task) => {
    return <li key={task.id}>{task.text}</li>;
  });

  let content = <p>Found No Tasks.</p>;

  if (props.tasks) content = tasks;

  if (props.error) content = <p>{props.error}</p>;

  if (props.isLoading) content = <p>Loading...</p>;

  return (
    <React.Fragment>
      <button onClick={props.onFetch}>Fetch</button>
      <TaskListStyle>{content}</TaskListStyle>
    </React.Fragment>
  );
};

export default ForthTasks;
