import React from "react";
import { useState } from "react";

function AddTask({ onAdd }) {
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please enter a text");
      return;
    }
    onAdd({text, time, reminder});

    setText("");
    setTime("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Tasks</label>
        <input
          type="text"
          value={text}
          placeholder="Add Task"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Tasks</label>
        <input
          type="text"
          value={time}
          placeholder="Add Time"
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.target.checked)}
        />
      </div>
      <input type="submit" value="Add Task" className="btn btn-block" />
    </form>
  );
}

export default AddTask;
