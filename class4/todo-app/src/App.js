import "./App.css";
import { useState } from "react";
import Header from "./components/header";
import Tasks from "./components/tasks";
import AddTask from "./components/AddTask";
import About from "./components/about";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Kaguya-sama",
      time: "20/07/2022 19:30",
      reminder: true,
    },
    {
      id: 2,
      text: "Konosuba",
      time: "20/07/2022 19:30",
      reminder: true,
    },
    {
      id: 3,
      text: "Shingeki no Kyojin",
      time: "20/07/2022 19:30",
      reminder: true,
    },
    {
      id: 4,
      text: "Jujustu Kaisen",
      time: "20/07/2022 19:30",
      reminder: true,
    },
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // delete tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //set reminder on tasks
  const remindTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Header title="techainer bootcamp" year="2022" />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTask onAdd={addTask} />
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onRemind={remindTask}
                />
                <Link to="/about">About page</Link>
              </>
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
