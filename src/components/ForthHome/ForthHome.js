import React, { useEffect, useState } from "react";
import ForthTasks from "./ForthTasks";
import ForthNewTask from "./ForthNewTask";

const ForthHome = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://react-costum-components-default-rtdb.firebaseio.com/tasks.json"
      );

      if (!response.ok) throw new Error("Request failed.");

      const data = await response.json();

      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({
          id: taskKey,
          text: data[taskKey].text,
        });
      }

      setTasks(loadedTasks);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Since I manage tasks on this component, I add this function (add new task to tasks state)
  const addTaskHandler = (task) => {
    setTasks((prevState) => prevState.concat(task));
  };

  return (
    <div>
      <ForthNewTask onAddTask={addTaskHandler} />
      <ForthTasks
        tasks={tasks}
        error={error}
        onFetch={fetchTasks}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ForthHome;
