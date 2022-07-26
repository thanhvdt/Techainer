import React from "react";
import { FaTimes } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

const task = ({ task, onDelete, onRemind }) => {
  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`}>
      <h3>
        {task.text}
        <h4>
          <FaBell
            style={{ cursor: "pointer" }}
            onClick={() => onRemind(task.id)}
          />
          <FaTimes
            style={{ cursor: "pointer" }}
            onClick={() => onDelete(task.id)}
          />
        </h4>
      </h3>
      <p>{task.time}</p>
    </div>
  );
};

export default task;
