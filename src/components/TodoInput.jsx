import React, { useState } from "react";

function TodoInput({ addTask }) {
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    addTask(taskText);
    setTaskText("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); 
      handleAddTask(); 
    }
  };

  return (
    <div className="left-container">
      <h3>Add Task 📝</h3>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task..."
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleAddTask} className="add-btn">Add Task</button>
    </div>
  );
}

export default TodoInput;
