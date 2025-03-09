import React, { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./style.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    if (newTask.trim() !== "") {
      const taskObject = { id: Date.now(), text: newTask };
      setTasks([...tasks, taskObject]);
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <div className="todo-container">
      <h2>My To-Do List ✨</h2>

      {/* Separate Input & Task Containers */}
      <div className="todo-wrapper">
        <TodoInput addTask={addTask} />
        <TodoList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
      </div>
    </div>
  );
}

export default App;
