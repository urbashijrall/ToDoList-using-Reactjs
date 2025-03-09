import React, { useState } from "react";

function TodoList({ tasks, deleteTask, editTask }) {
  const [editId, setEditId] = useState(null);
  const [newText, setNewText] = useState("");

  const handleKeyPress = (e, action) => {
    if (e.key === "Enter") {
      action();
    }
  };

  return (
    <div className="right-container">
      <h3>Task List 📋</h3>
      <div className="task-list">
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="task-item">
              {editId === task.id ? (
                <>
                  <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    className="edit-input"
                  />
                  <button
                    onKeyDown={(e) =>
                      handleKeyPress(e, () => {
                        editTask(task.id, newText);
                        setEditId(null);
                      })
                    }
                    onClick={() => {
                      editTask(task.id, newText);
                      setEditId(null);
                    }}
                    className="edit-btn"
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span className="task-text">{task.text}</span>
                  <div className="task-buttons">
                    <button
                      onClick={() => {
                        setEditId(task.id);
                        setNewText(task.text);
                      }}
                      className="edit-btn"
                    >
                      Edit
                    </button>
                    <button
                      onKeyDown={(e) =>
                        handleKeyPress(e, () => deleteTask(task.id))
                      }
                      onClick={() => deleteTask(task.id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
