import React, { useEffect } from "react";

const TaskList = ({ tasks, editingTask, deletingTask }) => {
  const handleEditClick = (task) => {
    editingTask(task);
  };

  const handleDeleteClick = (taskId) => {
    deletingTask(taskId);
  };

  return (
    <>
      <div className="task-grid">
        {/* TASK Card 1 */}
        {tasks.map((task) => (
          <div className="task-card" style={{ position: "relative" }}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>

            <div className="task-meta">
              <span>{task.dueDate}</span>
              <span className="priority-badge priority-high">
                {task.priority}
              </span>
            </div>

            <div className="task-actions">
              <button
                className="btn-icon"
                style={{ background: "#00d2ff" }}
                title="Edit Task"
                onClick={() => handleEditClick(task)}
              >
                🖊
              </button>

              <button
                className="btn-icon"
                style={{ background: "#00b894" }}
                title="Mark Complete"
              >
                ✔
              </button>

              <button
                className="btn-icon"
                style={{ background: "#ff416c" }}
                title="Delete Task"
                onClick={() => handleDeleteClick(task.id)}
              >
                🗑
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskList;
