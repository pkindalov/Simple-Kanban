import { Container } from "@mui/material";
import BasicAccordion from "./components/accordion/BasicAccordion";
import "./App.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React, { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <Container maxWidth="xl">
          <BasicAccordion tasks={tasks} addTask={addTask} />
        </Container>
      </div>
    </LocalizationProvider>
  );
}

export default App;
