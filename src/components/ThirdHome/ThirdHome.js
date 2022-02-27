import React, { Fragment, useState, useEffect } from "react";

const ThirdHome = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTaskHandler = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://react-costum-components-default-rtdb.firebaseio.com/tasks.json"
      );
      const data = await response.json();
      console.log(data);

      const loadedData = [];
      for (const key in data) {
        console.log(data[key].text);
        loadedData.push(data[key].text);
      }
      setTasks(loadedData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTaskHandler();
  }, []);

  async function addTaskToDataBaseHandler(task) {
    const response = await fetch(
      "https://react-costum-components-default-rtdb.firebaseio.com/tasks.json",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      }
    );
    const data = await response.json();
  }

  let content = <p>Found No tasks.</p>;

  if (tasks.length > 0)
    content = tasks.map((task, index) => <p key={index}>{task}</p>);

  if (error) content = <p>{error}</p>;

  if (isLoading) content = <p>Loading...</p>;

  return <Fragment>{content}</Fragment>;
};

export default ThirdHome;
