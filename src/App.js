import { Container } from "@mui/material";
import BasicAccordion from "./components/accordion/BasicAccordion";
import "./App.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const editTask = (editedTask) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === editedTask.id) return editedTask;
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleDelete = (e, deletedTaskId) => {
    const updatedTasks = tasks.filter(task => task.id !== deletedTaskId);
    setTasks(updatedTasks);
  }

  const handleStatusChange = (taskId, e) => {
    const newStatus = e.target.value;
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <Container maxWidth="xl">
          <BasicAccordion
            tasks={tasks}
            addTask={addTask}
            editTask={editTask}
            deleteTask={handleDelete}
            onStatusChange={handleStatusChange}
          />
        </Container>
      </div>
    </LocalizationProvider>
  );
}

export default App;
