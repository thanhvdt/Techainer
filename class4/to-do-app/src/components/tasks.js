import React from "react";
import Task from "./task.js";

const Tasks = ({ tasks, onDelete, onRemind }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task task={task} onDelete={onDelete} onRemind={onRemind} />
      ))}
    </div>
  );
};

export default Tasks;
